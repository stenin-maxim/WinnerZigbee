import React from 'react';
import { View, Button, Icon, Text, PageContainer, Input, Switch } from "@ray-js/components";
import styles from './index.module.less';
import { useProps, useDevice, useActions } from '@ray-js/panel-sdk';
import { vibrateShort, showModal } from '@ray-js/ray';
import Strings from '../../i18n';

export default () => {
    interface Cmd {
        readonly search: number;
        readonly delete: number;
        readonly enableIgnore: number;
        readonly disableIgnore: number;
        readonly enableSecurityMode: number;
        readonly disableSecurityMode: number;
    }

    const actions: any = useActions();
    const alarm: boolean = useProps((props): boolean => Boolean(props.alarm));
    const device = useDevice().dpSchema;
    const idCodes = useDevice().devInfo.idCodes;
    //                                  ________--------________--------
    const registrMask: number       = 0b00000000000000010000000000000000;
    //                                  ________--------________--------
    const onlineMask: number        = 0b00000000000000100000000000000000;
    //                                  ________--------________--------
    const leakMask: number          = 0b00000000000001000000000000000000;
    //                                  ________--------________--------
    const ignoreMask: number        = 0b00000000000010000000000000000000;
    //                                  ________--------________--------
    const securityModeMask: number  = 0b00000000000100000000000000000000;
    const [isShow, setIsShow] = React.useState(false);
    const [value, setValue] = React.useState("");
    const toggleIsShow = () => setIsShow(!isShow); // Показать/скрыть модальное окно
    const cmd: Cmd = {
        //                        __--__--
        search:                 0x01000000, // команда поиск датчика
        delete:                 0x02000000, // команда удаление датчика
        enableIgnore:           0x03000000, // включить игнор аварии датчика
        disableIgnore:          0x04000000, // отключить игнор аварии датчика
        enableSecurityMode:     0x05000000, // включить режим повышенной безопасности для датчика
        disableSecurityMode:    0x06000000, // выключить режим повышенной безопасности для датчика
    }

    let [item, setItem]: any = React.useState({});
    let [seconds, setSeconds] = React.useState(0);
    let countSensors: number = 0;
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
        textLowCharge: string = Strings.getLang('text_low_charge');
    
    let sensors: object[] = useProps((props: any) => {
        let sensors = [];

        createSensor(Number(props.sensor_1), String(props.sensor_name_1), Number(device.sensor_1.id), sensors);
        createSensor(Number(props.sensor_2), String(props.sensor_name_2), Number(device.sensor_2.id), sensors);
        createSensor(Number(props.sensor_3), String(props.sensor_name_3), Number(device.sensor_3.id), sensors);
        createSensor(Number(props.sensor_4), String(props.sensor_name_4), Number(device.sensor_4.id), sensors);
        createSensor(Number(props.sensor_5), String(props.sensor_name_5), Number(device.sensor_5.id), sensors);
        createSensor(Number(props.sensor_6), String(props.sensor_name_6), Number(device.sensor_6.id), sensors);
        createSensor(Number(props.sensor_7), String(props.sensor_name_7), Number(device.sensor_7.id), sensors);
        createSensor(Number(props.sensor_8), String(props.sensor_name_8), Number(device.sensor_8.id), sensors);
        createSensor(Number(props.sensor_9), String(props.sensor_name_9), Number(device.sensor_9.id), sensors);
        createSensor(Number(props.sensor_10), String(props.sensor_name_10), Number(device.sensor_10.id), sensors);
        createSensor(Number(props.sensor_11), String(props.sensor_name_11), Number(device.sensor_11.id), sensors);
        createSensor(Number(props.sensor_12), String(props.sensor_name_12), Number(device.sensor_12.id), sensors);
        createSensor(Number(props.sensor_13), String(props.sensor_name_13), Number(device.sensor_13.id), sensors);
        createSensor(Number(props.sensor_14), String(props.sensor_name_14), Number(device.sensor_14.id), sensors);
        createSensor(Number(props.sensor_15), String(props.sensor_name_15), Number(device.sensor_15.id), sensors);
        createSensor(Number(props.sensor_16), String(props.sensor_name_16), Number(device.sensor_16.id), sensors);
        createSensor(Number(props.sensor_17), String(props.sensor_name_17), Number(device.sensor_17.id), sensors);
        createSensor(Number(props.sensor_18), String(props.sensor_name_18), Number(device.sensor_18.id), sensors);
        createSensor(Number(props.sensor_19), String(props.sensor_name_19), Number(device.sensor_19.id), sensors);
        createSensor(Number(props.sensor_20), String(props.sensor_name_20), Number(device.sensor_20.id), sensors);
        createSensor(Number(props.sensor_21), String(props.sensor_name_21), Number(device.sensor_21.id), sensors);
        createSensor(Number(props.sensor_22), String(props.sensor_name_22), Number(device.sensor_22.id), sensors);
        createSensor(Number(props.sensor_23), String(props.sensor_name_23), Number(device.sensor_23.id), sensors);
        createSensor(Number(props.sensor_24), String(props.sensor_name_24), Number(device.sensor_24.id), sensors);
        createSensor(Number(props.sensor_25), String(props.sensor_name_25), Number(device.sensor_25.id), sensors);
        createSensor(Number(props.sensor_26), String(props.sensor_name_26), Number(device.sensor_26.id), sensors);
        createSensor(Number(props.sensor_27), String(props.sensor_name_27), Number(device.sensor_27.id), sensors);
        createSensor(Number(props.sensor_28), String(props.sensor_name_28), Number(device.sensor_28.id), sensors);
        createSensor(Number(props.sensor_29), String(props.sensor_name_29), Number(device.sensor_29.id), sensors);
        createSensor(Number(props.sensor_30), String(props.sensor_name_30), Number(device.sensor_30.id), sensors);
        createSensor(Number(props.sensor_31), String(props.sensor_name_31), Number(device.sensor_31.id), sensors);
        createSensor(Number(props.sensor_32), String(props.sensor_name_32), Number(device.sensor_32.id), sensors);

        sensors.forEach((item) => item.registr ? ++countSensors : false);

        return sensors;
    });

    /**
     * Создание датчика с параметрами
     * 
     * @param sensor - датчик с параметрами, в числовом типе
     * @param sensorName - имя датчика  
     * @param sensorId - dpid датчика 
     * @param sensors - массив датчиков
     * @returns object[]
     */
    function createSensor(sensor: number, sensorName: string, sensorId: number, sensors: object[]): object[]
    {
        if (Boolean(sensor & registrMask)) {
            sensors.push({
                id: sensorId,
                registr: Boolean(sensor & registrMask),
                online: Boolean(sensor & onlineMask),
                leak: Boolean(sensor & leakMask),
                ignore: Boolean(sensor & ignoreMask),
                securityMode: Boolean(sensor & securityModeMask),
                battery: Number(sensor & 0xFF),
                signal: Number((sensor >> 8) & 0xFF),
                name: sensorName,
            });
        }

        return sensors;
    }

    function handleInput(event: any): void
    {
        setValue(event.value);
    }

    function signalColorIcon(): object
    {
        let color: string = 'black';

        return (
            <React.Fragment>
                <Icon type="icon-wifi" color={color} size={26}/>
            </React.Fragment>
        )
    }

    function lossSensorIcon(): object
    {
        return (
            <React.Fragment>
                <Icon type="icon-a-wifiexclamationmark" color="#00BFFF" size={26}/>
            </React.Fragment>
        )
    }

    /**
     * Вывод предупреждения при включенной повышенной опасности и аварии
     * 
     * @param securityMode - статус включения повышеной опасности
     * @param ignore - статус игнора
     * @returns object
     */
    function alarmSecurityMode(securityMode: boolean, ignore: boolean): object|void
    {
        if (!ignore && securityMode && alarm) {
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
        if (batterySensor < 50) {
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
        } else if (item.batterySensor < 30) {
            return '2px solid orange';
        }

        return '1px solid white';
    }

    function addSensors(): void {
        actions.device_cmd.set(cmd.search);

        if (seconds == 0) {
            printNumbers(30);
        } 
    }

    function printNumbers(seconds: number): void
    {
        let timerId = setInterval(function() {
            if (seconds == 0) {
                clearInterval(timerId);
            }
            
            setSeconds(seconds);
            seconds--;
        }, 1000);
    }

    function viewTextAddSensors(): object {
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
                        onChange={(e) => { enableDisable(e.value, sensorId, cmd.enableSecurityMode, cmd.disableSecurityMode)}}>
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
            sensors.map((item: any, index: number) => {
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
                                    <View style={{ display: item.leak ? 'inline-block' : 'none' }}>
                                        <Icon type="icon-warning" color="#FF0000" size={26}></Icon>
                                    </View>
                                    <View style={{ display: item.leak ? 'none' : 'inline-block' }}>
                                        <Icon type="icon-a-sunminfill" color="black" size={26}></Icon>
                                    </View>
                                </View>
                                <View>
                                    <Text className={styles.name}>{ item.name }</Text>
                                </View>
                            </View>
                            { (item.id != 107 && item.id != 109) ? 
                                <View className={styles.signalBattery}>
                                    {alarmSecurityMode(item.securityMode, item.ignore)}
                                    {batterySensorColorIcon(item.battery)}
                                    <View className={styles.signal}>
                                        {item.online ? signalColorIcon() : lossSensorIcon()}
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
        <View>
            <View>
                <Text className={styles.title}>{numberOfSensors}
                    <Text className={styles.countSensors}>{ countSensors }</Text>
                </Text>
            </View>
            <View>
                { countSensors ? showSensors() : '' }
            </View>
            <View>
                { seconds > 0 ? viewTextAddSensors() : '' }
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
                        <View className={styles.deleteChangeSensor}>
                            <View className={styles.buttonDeleteReplace} 
                                onClick={() => { showModal(confirm(textDeleteSensor, textContentDelete, cmd.delete)) }
                            }>
                                <Icon type="icon-a-paintbrushfill" color="red" size={32}></Icon>
                                <Text className={styles.textDeleteChange}>{textDeleteSensor}</Text>
                            </View>
                            <View className={styles.buttonDeleteReplace} 
                                onClick={() => { showModal(confirm(textReplaceSensor, textContentReplace, cmd.search))}
                            }>
                                <Icon type="icon-repeat" color="black" size={32}></Icon>
                                <Text className={styles.textDeleteChange}>{textReplaceSensor}</Text>
                            </View>
                        </View>
                        <View className={styles.inputText}>
                            <Text className={styles.textModalWindow}>{textNameSensor}</Text>
                            <Input
                                className={styles.inputModalWindow}
                                placeholder="Name Sensor"
                                maxLength={21}
                                type="string"
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
                            }}>ОК
                        </Button>
                    </View>
                </View>
            </PageContainer>
        </View>
    );

};