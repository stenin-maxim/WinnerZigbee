import React from 'react';
import { View, Button, Icon, Text, PageContainer, Input, Switch } from "@ray-js/components";
import styles from './index.module.less';
import { useDevice, useActions, useProps } from '@ray-js/panel-sdk';
import { vibrateShort, showModal } from '@ray-js/ray';
import Strings from '../../i18n';
import sensors from '@/components/sensors';

interface Cmd {
    readonly search: number;
    readonly delete: number;
    readonly enableIgnore: number;
    readonly disableIgnore: number;
    readonly enableSecurityMode: number;
    readonly disableSecurityMode: number;
}

export default () => {
    const cmd: Cmd = {
        search:                 0x01_00_00_00, // команда поиск датчика
        delete:                 0x02_00_00_00, // команда удаление датчика
        enableIgnore:           0x03_00_00_00, // включить игнор аварии датчика
        disableIgnore:          0x04_00_00_00, // отключить игнор аварии датчика
        enableSecurityMode:     0x05_00_00_00, // включить режим повышенной безопасности для датчика
        disableSecurityMode:    0x06_00_00_00, // выключить режим повышенной безопасности для датчика
    }
    const actions: any = useActions();
    const idCodes = useDevice().devInfo.idCodes;
    const [isShow, setIsShow] = React.useState(false);
    const [value, setValue] = React.useState("");
    const toggleIsShow = () => setIsShow(!isShow); // Показать/скрыть модальное окно
    const statusSearch: number = useProps((props): number => Number(props.device_cmd));

    let [item, setItem]: any = React.useState({});
    let numberOfSensors: string = Strings.getLang('number_of_sensors'),
        add: string = Strings.getLang('add'),
        textAddSensors: string = Strings.getLang('add_sensors'),
        textDeleteSensor: string = Strings.getLang('text_delete_sensor'),
        textReplaceSensor: string = Strings.getLang('text_replace_sensor'),
        textNameSensor: string = Strings.getLang('text_name_sensor'),
        textSettings: string = Strings.getLang('text_settings'),
        textContentDelete: string = Strings.getLang('text_content_delete'),
        textContentReplace: string = Strings.getLang('text_content_replace'),
        textCancel: string = Strings.getLang('cancel'),
        textConfirm: string = Strings.getLang('confirm'),
        textIgnore: string = Strings.getLang('text_ignore'),
        textSecurityMode: string = Strings.getLang('text_security_mode'),
        textLowCharge: string = Strings.getLang('text_low_charge'),
        textOk: string = Strings.getLang('ok');
    let sensorsObj = sensors();
    let countSensors: number = sensorsObj.length;

    function handleInput(event: any): void
    {
        setValue(event.value);
    }

    function signalColorIcon(type: string, color: string): object
    {
        return (
            <React.Fragment>
                <Icon type={type} color={color} size={26}/>
            </React.Fragment>
        )
    }

    /**
     * Вывод предупреждения при включенной повышенной опасности и аварии
     * 
     * @param ignore статус игнора - args[0]
     * @param securityMode - статус включения режима повышенной безопасности - args[1]
     * @param statusBatterySignal - статус потери сигнала и низкого заряда - args[2]
     * @returns object
     */
    function alarmSecurityMode(...args: boolean[]): object|void
    {
        if (!args[0] && args[1] && args[2]) {
            return (
                <React.Fragment>
                    <View className={styles.securityMode}>
                        <Icon type="icon-warning" color="red" size={26}/>
                    </View>
                </React.Fragment>
            )
        }
    }

    function batterySensorColorIcon(batterySensor: number): object|void
    {
        if (batterySensor < 30) {
            return (
                <React.Fragment>
                    <View className={styles.battery}>
                        <Icon type="icon-a-boltfill" color="red" size={26}/>
                    </View>
                </React.Fragment>
            )
        }
    }

    /**
     * Удаление и замена датчика
     * 
     * @param sensorId  - dpid sensor
     * @param cmd - команда на удаление или замену
     */
    function deleteOrReplaceSensor(sensorId: number, cmd: number): void
    {
        let name = idCodes[sensorId];

        actions[name].set(cmd);
    }

    /**
     * Изменение имени датчика
     * 
     * @param sensorId - dpid датчика
     * @param value - новое имя датчика
     */
    function editNameSensor(sensorId: number, value: string): void
    {
        let sensorNameId = sensorId + 1; // dpid sensor_name_n
        let name = idCodes[sensorNameId];

        actions[name].set(value);
    }

    function borderColor(item: any): string
    {
        if (item.ignore) {
            return '2px solid darkgray';
        } else if (item.leak) {
            return '2px solid #FF0000';
        } else if (!item.online) {
            return '2px solid #00BFFF';
        } else if (item.battery < 30) {
            return '2px solid orange';
        }

        return '1px solid white';
    }

    function addSensors(): void
    {
        actions.device_cmd.set(cmd.search);

        let timerId = setInterval(function() {
            if (statusSearch == 0) {
                clearInterval(timerId);
            }
        }, 1000);
    }

    /**
     * Вывод текста при добавлении датчика
     * 
     * @return object
     */
    function viewTextAddSensors(): object
    {
        return (
            <React.Fragment>
                <View className={styles.addSensors}>
                    {textAddSensors}
                    <View className={styles.loading}>...</View>
                </View>
            </React.Fragment>
        )
    }

    /**
     * Параметры модального окна для удаления и замены датчика
     * 
     * @param title 
     * @param content 
     * @param cmd 
     * @returns object
     */
    function confirm(title: string, content: string, cmd: number): object
    {
        return {
            title: title,
            content: content,
            cancelText: textCancel,
            confirmText: textConfirm,
            confirmColor: '#ff0000',
            success: (param: any): void => {
                if (param.confirm) {
                    deleteOrReplaceSensor(item.id, cmd);
                    toggleIsShow();
                }
            },
        }
    }

    /**
     * Включить/выключить игнор аварии датчика, режим повышенной безопасности при низком заряде датчика
     * 
     * @param value - состояние checkbox
     * @param sensorId - dpid датчика
     * @param cmdEnable
     * @param cmdDisable
     */
    function enableDisable(...args: any[]): void
    {
        let name: string = idCodes[args[1]];
        let cmd: number;

        if (args[0]) {
            cmd = args[2];
        } else {
            cmd = args[3];
        }
        actions[name].set(cmd);
    }

    function viewSecurityMode(sensorId: number): object|string
    {
        if (sensorId != 109) {
            return (
                <React.Fragment>
                    <Switch type="checkbox" color="#00BFFF" checked={item.securityMode}
                        onChange={(e) => { enableDisable(e.value, sensorId, cmd.enableSecurityMode, cmd.disableSecurityMode) }}>
                        {sensorId != 107 ? textSecurityMode : textLowCharge}
                    </Switch>
                </React.Fragment>
            )
        }

        return '';
    }

    function showSensors(): object
    {
        return (
            sensorsObj.map((item: any, index: number) => {
                return (
                    <React.Fragment key={index}>
                        <View
                            className={styles.sensor}
                            style={{ border: borderColor(item) }}
                            onClick={() => {
                                toggleIsShow();
                                setValue(item.name); // TODO
                                setItem(item);
                            }}
                        >
                            <View className={styles.leftBlockSensor}>
                                <View>
                                    <View className={ item.leak ? styles.sensorNumberAlarm : styles.sensorNumberNorm }>{item.sensorNumber}</View>
                                </View>
                                <View>
                                    <Text className={styles.name}>{ item.name }</Text>
                                </View>
                            </View>
                            { (item.id != 107 && item.id != 109) ? 
                                <View className={styles.signalBattery}>
                                    {alarmSecurityMode(item.ignore, item.securityMode, item.statusBatterySignal)}
                                    {batterySensorColorIcon(item.battery)}
                                    <View className={styles.signal}>
                                        {item.online ? 
                                            signalColorIcon('icon-wifi', 'black') : 
                                            signalColorIcon('icon-a-wifiexclamationmark', '#00BFFF')
                                        }
                                        <Text className={styles.signalText}>{ item.signal }</Text>
                                    </View>
                                </View>
                            : '' }
                        </View>
                    </React.Fragment>
                )
            })
        )
    }

    return (
        <View className={styles.sensors}>
            <View>
                <Text className={styles.title}>{ numberOfSensors }</Text>
                <Text className={styles.countSensors}>{ countSensors }</Text>
            </View>
            <View>
                { countSensors ? showSensors() : '' }
            </View>
            <View>
                { statusSearch === cmd.search ? viewTextAddSensors() : '' }
            </View>
            <View className={styles.blockFooter}>
                <Button
                    style={{ padding: '15px' }}
                    onClick={() => { addSensors(); vibrateShort({type: 'heavy'}); vibrateShort({type: 'heavy'}); }}>{add}
                </Button>
            </View>
            <PageContainer show={isShow} position='bottom' onClickOverlay={toggleIsShow} round={true}>
                <View>
                    <View className={styles.headerModalWindow}>                                
                        {textSettings} <Text>{value}</Text>
                    </View>
                    <View className={styles.checkbox}>
                        <View className={styles.checkboxIgnore}>
                            <Switch type="checkbox" color="#00BFFF" checked={item.ignore}
                                onChange={(e) => { enableDisable(e.value, item.id, cmd.enableIgnore, cmd.disableIgnore)}}>
                                {textIgnore}
                            </Switch>
                        </View>
                        <View>
                            {viewSecurityMode(item.id)}
                        </View>
                    </View>
                    <View className={styles.centerModalWindow}>
                        { (item.id != 107 && item.id != 109) ? 
                            <View className={styles.deleteChangeSensor}>
                                <View className={styles.buttonDeleteReplace} 
                                    onClick={() => { showModal(confirm(textDeleteSensor, textContentDelete, cmd.delete)) }
                                }>
                                    <Icon type="icon-a-paintbrushfill" color="red" size={32}></Icon>
                                    <Text className={styles.textDeleteChange}>{textDeleteSensor}</Text>
                                </View>
                                <View className={styles.buttonDeleteReplace} 
                                    onClick={() => { showModal(confirm(textReplaceSensor, textContentReplace, cmd.search))}}
                                >
                                    <Icon type="icon-repeat" color="black" size={32}></Icon>
                                    <Text className={styles.textDeleteChange}>{textReplaceSensor}</Text>
                                </View>
                            </View>
                        : false }
                        <View className={styles.inputText}>
                            <Text className={styles.textModalWindow}>{textNameSensor}</Text>
                            <Input
                                className={styles.inputModalWindow}
                                placeholder="Name Sensor"
                                maxLength={24}
                                type="text"
                                value={value}
                                onInput={handleInput}
                            >
                            </Input>
                        </View>
                    </View>
                    <View>
                        <Button
                            className={styles.buttonModalWindow}
                            onClick={() => {
                                toggleIsShow();
                                editNameSensor(item.id, value);
                            }}>{textOk}
                        </Button>
                    </View>
                </View>
            </PageContainer>
        </View>
    );

};