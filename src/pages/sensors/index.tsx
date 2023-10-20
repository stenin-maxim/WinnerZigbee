import React from 'react';
import { View, Button, Icon, Text, PageContainer, Input, Switch } from "@ray-js/components";
import styles from './index.module.less';
import { useProps, useDevice, useActions } from '@ray-js/panel-sdk';
import { vibrateShort, showModal } from '@ray-js/ray';
import Strings from '../../i18n';

export default () => {
    const actions = useActions();
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
    //                          __--__--
    const cmdSearch: number = 0x01000000; // команда поиск датчика
    const cmdDelete: number = 0x02000000; // команда удаление датчика
    const cmdEnableIgnore: number = 0x03000000; // включить игнор аварии датчика
    const cmdDisableIgnore: number = 0x04000000; // отключить игнор аварии датчика
    const cmdEnableSecurityMode: number = 0x05000000; // включить режим повышенной безопасности для датчика
    const cmdDisableSecurityMode: number = 0x06000000; // выключить режим повышенной безопасности для датчика
    const [isShow, setIsShow] = React.useState(false);
    const [value, setValue] = React.useState("");
    const [sensorId, setSensorId] = React.useState();
    const [ignore, setIgnore] = React.useState();
    const [securityMode, setSecurityMode] = React.useState();
    const toggleIsShow = () => setIsShow(!isShow); // Показать/скрыть модальное окно
    
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
        actions.device_cmd.set(cmdSearch);

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

    let confirmDelete: any = {
        title: textDeleteSensor,
        content: textContentDelete,
        cancelText: textCancel,
        confirmText: textConfirm,
        confirmColor: '#ff0000',
        success: (param: any): void => {
            if (param.confirm) {
                deleteOrReplaceSensor(sensorId, cmdDelete);
                toggleIsShow();
            }
        },
    }

    let confirmReplace: any = {
        title: textReplaceSensor,
        content: textContentReplace,
        cancelText: textCancel,
        confirmText: textConfirm,
        confirmColor: '#ff0000',
        success: (param: any): void => {
            if (param.confirm) {
                deleteOrReplaceSensor(sensorId, cmdSearch);
                toggleIsShow();
            }
        },
    }

    /**
     * Включить/выключить игнор аварии датчика
     * 
     * @param value - состояние checkbox
     * @param sensorId - dpid датчика
     */
    function ignoreAlarmOnSensor(value: boolean, sensorId: number): void
    {
        let name = idCodes[sensorId];
        let cmd: number;

        if (value) {
            cmd = cmdEnableIgnore;
        } else {
            cmd = cmdDisableIgnore;
        }
        actions[name].set(cmd);
    }

    /**
     * Включить/выключить режим повышенной безопасности или низкий заряд датчика, закрыть кран
     * 
     * @param value - состояние checkbox
     * @param sensorId - dpid датчика
     */
    function securityModeSensor(value: boolean, sensorId: number): void
    {
        let name = idCodes[sensorId];
        let cmd: number;

        if (value) {
            cmd = cmdEnableSecurityMode;
        } else {
            cmd = cmdDisableSecurityMode;
        }
        actions[name].set(cmd);
    }

    function viewSecurityMode(sensorId: number): object|void
    {
        if (sensorId != 109) {
            return (
                <React.Fragment>
                    <Switch type="checkbox" color="#00BFFF" checked={securityMode}
                        onChange={(e) => { securityModeSensor(e.value, sensorId)}}>
                        {sensorId != 107 ? textSecurityMode : textLowCharge}
                    </Switch>
                </React.Fragment>
            )
        }
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
                                setSensorId(item.id); // TODO
                                setIgnore(item.ignore); // TODO
                                setSecurityMode(item.securityMode); // TODO
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
                            <Switch type="checkbox" color="#00BFFF" checked={ignore}
                                onChange={(e) => { ignoreAlarmOnSensor(e.value, sensorId)}}>
                                {textIgnore}
                            </Switch>
                        </View>
                        <View>
                            {viewSecurityMode(sensorId)}
                        </View>
                    </View>
                    <View className={styles.centerModalWindow}>
                        <View className={styles.deleteChangeSensor}>
                            <View className={styles.buttonDeleteReplace} onClick={() => { showModal(confirmDelete) }}>
                                <Icon type="icon-a-paintbrushfill" color="red" size={32}></Icon>
                                <Text className={styles.textDeleteChange}>{textDeleteSensor}</Text>
                            </View>
                            <View className={styles.buttonDeleteReplace} onClick={() => { showModal(confirmReplace) }}>
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
                                editNameSensor(sensorId, value);
                            }}>ОК
                        </Button>
                    </View>
                </View>
            </PageContainer>
        </View>
    );

};