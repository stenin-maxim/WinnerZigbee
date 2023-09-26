import React from 'react';
import { View, Button, Icon, Text, PageContainer, Input } from "@ray-js/components";
import styles from './index.module.less';
import { useProps, useDevice, useActions } from '@ray-js/panel-sdk';
import { vibrateShort } from '@ray-js/ray';

export default () => {
    const actions = useActions();
    const device = useDevice().dpSchema;
    //                    ________--------________--------
    const registrMask = 0b00000000000000010000000000000000;
    //                    ________--------________--------
    const onlineMask  = 0b00000000000000100000000000000000;
    //                    ________--------________--------
    const leakMask    = 0b00000000000001000000000000000000;
    //                  __--__--
    const cmdSearch = 0x0100000F; // поиск датчика 0F = 15 секунд
    const cmdDelete = 0x02000000; // удаление датчика с текущим dpid
    const [isShow, setIsShow] = React.useState(false);
    const [value, setValue] = React.useState("");
    const [sensorId, setSensorId] = React.useState();
    const [seconds, setSeconds] = React.useState(0);
    const toggleIsShow = () => setIsShow(!isShow); // Показать/скрыть модальное окно

    let countSensors: number = 0;
    let sensors: object[] = useProps((props: any) => {
        let sensors = [];

        paramSensor(Number(props.sensor_1), String(props.sensor_name_1), Number(device.sensor_1.id), sensors);
        paramSensor(Number(props.sensor_2), String(props.sensor_name_2), Number(device.sensor_2.id), sensors);
        paramSensor(Number(props.sensor_3), String(props.sensor_name_3), Number(device.sensor_3.id), sensors);
        paramSensor(Number(props.sensor_4), String(props.sensor_name_4), Number(device.sensor_4.id), sensors);
        paramSensor(Number(props.sensor_5), String(props.sensor_name_5), Number(device.sensor_5.id), sensors);

        sensors.forEach((item) => item.registr ? ++countSensors : false);

        return sensors;
    });

    function paramSensor(sensor: number, sensorName: string, sensorId: number, sensors: any): object
    {
        if (Boolean(sensor & registrMask)) {
            sensors.push({
                id: sensorId,
                registr: Boolean(sensor & registrMask),
                online: Boolean(sensor & onlineMask),
                leak: Boolean(sensor & leakMask),
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

    function signalColorIcon(signal: number): object
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

    function batterySensorColorIcon(battery: number): object
    {
        let color: string = 'black';

        if (battery === 100) {
            color = 'green';
        } 

        return (
            <React.Fragment>
                <Icon type="icon-a-boltfill" color={color} size={26}/>
            </React.Fragment>
        )
    }

    function deleteSensor(sensorId: number): void
    {
        let cmdDeleteArgument = cmdDelete + sensorId;

        switch (sensorId) {
            case 107:
                actions.sensor_1.set(cmdDeleteArgument);
                break;
            case 109:
                actions.sensor_2.set(cmdDeleteArgument);
                break;
            case 111:
                actions.sensor_3.set(cmdDeleteArgument);
                break;
            case 113:
                actions.sensor_4.set(cmdDeleteArgument);
                break;
            case 115:
                actions.sensor_5.set(cmdDeleteArgument);
                break;
        }
    }

    function editNameSensor(sensorId: number, value: string): void
    {
        switch (sensorId) {
            case 107:
                actions.sensor_name_1.set(value);
                break;
            case 109:
                actions.sensor_name_2.set(value);
                break;
            case 111:
                actions.sensor_name_3.set(value);
                break;
            case 113:
                actions.sensor_name_4.set(value);
                break;
            case 115:
                actions.sensor_name_5.set(value);
                break;
        }
    }

    function borderColor(leak: boolean, online: boolean): string
    {
        if (leak) {
            return '1px solid #FF0000';
        } else if (!online) {
            return '1px solid #00BFFF';
        }

        return '1px solid white';
    }

    function addSensors(): void {
        if (seconds == 0) {
            actions.device_cmd.set(cmdSearch);
            printNumbers(15);
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

    function viewCountSeconds(): object {
        return (
            <React.Fragment>
                <View className={styles.countSeconds}>
                    Добавление датчиков: {seconds} секунд
                </View>
            </React.Fragment>
        )
    }

    function showSensors(): object
    {
        return (
            sensors.map((item: any, index: number) => {
                return (
                    <React.Fragment key={index}>
                        <View
                            className={styles.sensor}
                            style={{ border: borderColor(item.leak, item.online) }}
                            onClick={() => {
                                toggleIsShow();
                                setValue(item.name);
                                setSensorId(item.id);
                            }}
                        >
                            <View>
                                <View style={{ display: item.leak ? 'inline-block' : 'none' }}>
                                    <Icon type="icon-warning" color="#FF0000" size={26}></Icon>
                                </View>
                                <View style={{ display: item.leak ? 'none' : 'inline-block' }}>
                                    <Icon type="icon-a-sunminfill" color="black" size={26}></Icon>
                                </View>
                                <Text className={styles.name}>{ item.name }</Text>
                            </View>
                            { item.id != 107 ? 
                                <View className={styles.signalBattery}>
                                    <View className={styles.signal}>
                                        {item.online ? signalColorIcon(item.signal) : lossSensorIcon()}
                                        <Text className={styles.signalText}>{ item.signal }</Text>
                                    </View>
                                    <View className={styles.battery}>
                                        {batterySensorColorIcon(item.battery)}
                                        <Text className={styles.batteryText}>{ item.battery }</Text>
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
                <Text className={styles.title}>Кол-во датчиков: 
                    <Text className={styles.countSensors}>{ countSensors }</Text>
                </Text>
            </View>
            <View>
                { countSensors ? showSensors() : '' }
            </View>
            <View>
                { seconds > 0 ? viewCountSeconds() : '' }
            </View>
            <View className={styles.blockFooter}>
                <Button
                    style={{ padding: '15px' }}
                    onClick={() => { addSensors(); vibrateShort({type: 'heavy'}); vibrateShort({type: 'heavy'}); }}>Добавить
                </Button>
            </View>
            <PageContainer show={isShow} position='bottom' onClickOverlay={toggleIsShow} round={true}>
                <View>
                    <View className={styles.headerModalWindow}>                                
                        Настройка: <Text>{value}</Text>
                    </View>
                    <View className={styles.centerModalWindow}>
                        <View className={styles.deleteSensor}>
                            <View className={styles.buttonDelete} onClick={() => { deleteSensor(sensorId); toggleIsShow(); }}>
                                <Icon type="icon-a-paintbrushfill" color="red" size={32}></Icon>
                                <Text>Удалить датчик</Text>
                            </View>
                        </View>
                        <View className={styles.inputText}>
                            <Text className={styles.textModalWindow}>Имя датчика:</Text>
                            <Input
                                className={styles.inputModalWindow}
                                placeholder="Name Sensor"
                                maxLength={16}
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