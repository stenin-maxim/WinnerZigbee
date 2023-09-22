import React from 'react';
import { View, Button, Icon, Text, PageContainer, Input } from "@ray-js/components";
import styles from './index.module.less';
import { useProps, useDevice, useActions } from '@ray-js/panel-sdk';

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
    const cmdRequestNameSensor = 0x02000000; // запрос имени датчика
    const [isShow, setIsShow] = React.useState(false);
    const [value, setValue] = React.useState("");
    const [sensorId, setSensorId] = React.useState();
    const toggleIsShow = () => setIsShow(!isShow); // Показать/скрыть модальное окно
    let countSensors: number = 0;

    let sensors: object[] = useProps((props: any) => {
        let sensors = [];

        if (Boolean(props.sensor_1 & registrMask)) {
            sensors.push(paramSensor(Number(props.sensor_1), String(props.sensor_name_1), Number(device.sensor_1.id)));
        }
        
        if (Boolean(props.sensor_2 & registrMask)) {
            sensors.push(paramSensor(Number(props.sensor_2), String(props.sensor_name_2), Number(device.sensor_2.id)));
        }

        if (Boolean(props.sensor_3 & registrMask)) {
            sensors.push(paramSensor(Number(props.sensor_3), String(props.sensor_name_3), Number(device.sensor_3.id)));
        }

        if (Boolean(props.sensor_4 & registrMask)) {
            sensors.push(paramSensor(Number(props.sensor_4), String(props.sensor_name_4), Number(device.sensor_4.id)));
        }

        if (Boolean(props.sensor_5 & registrMask)) {
            sensors.push(paramSensor(Number(props.sensor_5), String(props.sensor_name_5), Number(device.sensor_5.id)));
        }
        // sensors.push(paramSensor(Number(props.sensor_1), String(props.sensor_name_1)));
        // sensors.push(paramSensor(Number(props.sensor_2), String(props.sensor_name_2)));
        // sensors.push(paramSensor(Number(props.sensor_3), String(props.sensor_name_3)));
        // sensors.push(paramSensor(Number(props.sensor_4), String(props.sensor_name_4)));
        // sensors.push(paramSensor(Number(props.sensor_5), String(props.sensor_name_5)));

        sensors.forEach((item) => item.registr ? ++countSensors : false);

        return sensors;
    });

    function paramSensor(sensor: number, sensorName: string, sensorId: number): object
    {
        let sensorObj: any = {};

        sensorObj.id = sensorId;
        sensorObj.registr = Boolean(sensor & registrMask);
        sensorObj.online = Boolean(sensor & onlineMask);
        sensorObj.leak = Boolean(sensor & leakMask);
        sensorObj.battery = Number(sensor & 0xFF);
        sensorObj.signal = Number((sensor >> 8) & 0xFF);
        sensorObj.name = sensorName;

        return sensorObj;
    }

    function handleInput(event: any): void
    {
        setValue(event.value);
    }

    function signalColorIcon(signal: number): object
    {
        let color: string = 'black';

        if (signal >= 30) {
            color = '#00BFFF';
        } else if (signal < 30 && signal > 0) {
            color = 'red';
        } 

        return (
            <React.Fragment>
                <Icon type="icon-wifi" color={color} size={26}/>
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
            case 108:
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

    function showSensors(): object
    {
        return (
            sensors.map((item: any, index: number) => {
                return (
                    <React.Fragment key={index}>
                        <View
                        className={styles.sensor}
                        style={{ border: item.leak ? '1px solid #FF0000' : '1px solid white' }}
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
                            <View className={styles.signalBattery}>
                                <View className={styles.signal}>
                                    {signalColorIcon(item.signal)}
                                    <Text className={styles.signalText}>{ item.signal }</Text>
                                </View>
                                <View className={styles.battery}>
                                    {batterySensorColorIcon(item.battery)}
                                    <Text className={styles.batteryText}>{ item.battery }</Text>
                                </View>
                            </View>
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
            <View className={styles.blockFooter}>
                <Button
                    style={{ padding: '15px' }}
                    onClick={() => actions.device_cmd.set(cmdSearch)}>Добавить
                </Button>
            </View>
            <PageContainer show={isShow} position='bottom' onClickOverlay={toggleIsShow} round={true}>
                <View>
                    <View className={styles.headerModalWindow}>                                
                        Настройка <Text>{value}</Text>
                    </View>
                    <View className={styles.centerModalWindow}>
                        <View className={styles.deleteSensor}>
                            <View className={styles.buttonDelete} onClick={() => { deleteSensor(sensorId); toggleIsShow(); }}>
                                <Icon type="icon-a-minussquarefill" color="red" size={32}></Icon>
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