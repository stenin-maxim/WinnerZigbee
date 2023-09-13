import React from 'react';
import { View, Button, Icon, Text, PageContainer, Input } from "@ray-js/components";
import styles from './index.module.less';
import { useProps, useDevice, useActions } from '@ray-js/panel-sdk';

export default () => {
    const actions = useActions();
    const device = useDevice().dpSchema;
    const [isShow, setIsShow] = React.useState(false);
    const [value, setValue] = React.useState("");
    const [sensorId, setSensorId] = React.useState("");
    const toggleIsShow = () => setIsShow(!isShow); // Показать/скрыть модальное окно
    let radioSearch: number = 15;

    let wiredSensors = useProps((props) => {
        let wiredSensors = [];

        sensor(props.wired_sensor_1, wiredSensors, device.wired_sensor_1.id);
        sensor(props.wired_sensor_2, wiredSensors, device.wired_sensor_2.id);

        return wiredSensors;
    });

    let radioSensors = useProps((props) => {
        let radioSensors = [];

        sensor(props.radio_sensor_1, radioSensors, device.radio_sensor_1.id);
        sensor(props.radio_sensor_2, radioSensors, device.radio_sensor_2.id);
        sensor(props.radio_sensor_3, radioSensors, device.radio_sensor_3.id);
        sensor(props.radio_sensor_4, radioSensors, device.radio_sensor_4.id);
        sensor(props.radio_sensor_5, radioSensors, device.radio_sensor_5.id);
        sensor(props.radio_sensor_6, radioSensors, device.radio_sensor_6.id);

        return radioSensors;
    });
    let countWiredSensors: number = wiredSensors.length;
    let countRadioSensors: number = radioSensors.length;

    function sensor(sensor: string, arrSensors: string[], id: number)
    {
        if (sensor !== null && sensor !== '') {
            let json = JSON.parse(sensor);
            json.id = id;

            arrSensors.push(json);
        }

        return arrSensors;
    }

    function handleInput(event: any) {
        setValue(event.value);
    }
    
    function showWiredSensors(): object
    {
        return (
            wiredSensors.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <View
                        className={styles.sensor}
                        style={{ border: item.l ? '1px solid #FF0000' : '1px solid white' }}
                        onClick={() => {
                            toggleIsShow();
                            setValue(item.n);
                            setSensorId(item.id);
                        }}
                        >
                            <View>       
                                <View style={{ display: item.l ? 'inline-block' : 'none' }}>
                                    <Icon type="icon-warning" color="#FF0000" size="26"></Icon>
                                </View>
                                <View style={{ display: item.l ? 'none' : 'inline-block' }}>
                                    <Icon type="icon-a-sunminfill" color="black" size="26"></Icon>
                                </View>
                                <Text className={styles.name}>{ item.n }</Text>
                            </View>
                        </View>
                    </React.Fragment>
                )
            })
        )
    }

    function signalColorIcon(signal: number)
    {
        if (signal >= 30) {
            return (
                <React.Fragment>
                    <Icon type="icon-wifi" color="#00BFFF" size="26"/>
                </React.Fragment>
            )
        } else if (signal < 30 && signal > 0) {
            return (
                <React.Fragment>
                    <Icon type="icon-wifi" color="red" size="26"/>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <Icon type="icon-wifi" color="black" size="26"/>
                </React.Fragment>
            )
        }
    }

    function batterySensorColorIcon(battery: number)
    {
        if (battery === 100) {
            return (
                <React.Fragment>
                    <Icon type="icon-a-boltfill" color="green" size="26"/>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <Icon type="icon-a-boltfill" color="black" size="26"/>
                </React.Fragment>
            )
        }
    }

    function showRadioSensors(): object
    {
        return (
            radioSensors.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <View
                        className={styles.sensor}
                        style={{ border: item.leak ? '1px solid #FF0000' : '1px solid white' }}
                        onClick={() => {
                            toggleIsShow();
                            setValue(item.n);
                            setSensorId(item.id);
                        }}
                        >
                            <View>
                                <View style={{ display: item.leak ? 'inline-block' : 'none' }}>
                                    <Icon type="icon-warning" color="#FF0000" size="26"></Icon>
                                </View>
                                <View style={{ display: item.leak ? 'none' : 'inline-block' }}>
                                    <Icon type="icon-a-sunminfill" color="black" size="26"></Icon>
                                </View>
                                <Text className={styles.name}>{ item.n }</Text>
                            </View>
                            <View className={styles.signalBattery}>
                                <View className={styles.signal}>
                                    {signalColorIcon(item.s)}
                                    <Text className={styles.signalText}>{ item.s }</Text>
                                </View>
                                <View className={styles.battery}>
                                    {batterySensorColorIcon(item.b)}
                                    <Text className={styles.batteryText}>{ item.b }</Text>
                                </View>
                            </View>
                        </View>
                    </React.Fragment>
                )
            })
        )
    }

    function deleteSensor(sensorId: number | string)
    {
        let deleteSensor = '{"d":""}';

        switch (sensorId) {
            case 104:
                actions.wired_sensor_1.set(deleteSensor);
                break;
            case 105:
                actions.wired_sensor_2.set(deleteSensor);
                break;
            case 106:
                actions.radio_sensor_1.set(deleteSensor);
                break;
            case 107:
                actions.radio_sensor_2.set(deleteSensor);
                break;
            case 108:
                actions.radio_sensor_3.set(deleteSensor);
                break;
            case 109:
                actions.radio_sensor_4.set(deleteSensor);
                break;
            case 110:
                actions.radio_sensor_5.set(deleteSensor);
                break;
        }
    }

    function editNameSensor(value: string, sensorId: number | string) {
        let obj = {};
        obj.n = value;

        switch (sensorId) {
            case 104:
                actions.wired_sensor_1.set(JSON.stringify(obj));
                break;
            case 105:
                actions.wired_sensor_2.set(JSON.stringify(obj));
                break;
            case 106:
                actions.radio_sensor_1.set(JSON.stringify(obj));
                break;
            case 107:
                actions.radio_sensor_2.set(JSON.stringify(obj));
                break;
            case 108:
                actions.radio_sensor_3.set(JSON.stringify(obj));
                break;
            case 109:
                actions.radio_sensor_4.set(JSON.stringify(obj));
                break;
            case 110:
                actions.radio_sensor_5.set(JSON.stringify(obj));
                break;
        }
    }

    return (
        <View>
            <View>
                <Text className={styles.title}>Кол-во проводных датчиков: 
                    <Text className={styles.countSensors}>{ countWiredSensors }</Text>
                </Text>
            </View>
            { countWiredSensors ? showWiredSensors() : '' }
            
            <View>
                <Text className={styles.title}>Кол-во беспроводных датчиков: 
                    <Text className={styles.countSensors}>{ countRadioSensors }</Text>
                </Text>
            </View>
            { countRadioSensors ? showRadioSensors() : '' }

            <View className={styles.blockFooter}>
                <Button
                    style={{ padding: '15px !important' }} 
                    onClick={() => actions.radio_search.set(radioSearch)}>Добавить
                </Button>
            </View>

            <PageContainer show={isShow} position='bottom' onClickOverlay={toggleIsShow} round="true">
                <View>
                    <View className={styles.headerModalWindow}>                                
                        Настройка <Text>{value}</Text>
                    </View>
                    <View className={styles.centerModalWindow}>
                        <View className={styles.deleteSensor}>
                            <View>
                                <Text>ID датчика:</Text><Text className={styles.sensorId}>{sensorId}</Text>
                            </View>
                            <View className={styles.buttonDelete} onClick={() => { deleteSensor(sensorId); toggleIsShow();}}>
                                <Icon type="icon-a-minussquarefill" color="red" size="32"></Icon>
                                <Text>Удалить</Text>
                            </View>
                        </View>
                        <View className={styles.inputText}>
                            <Text className={styles.textModalWindow}>Имя датчика:</Text>
                            <Input
                                className={styles.inputModalWindow}
                                placeholder="Name Sensor"
                                maxLength="16"
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
                            style={{ padding: '15px !important' }}
                            onClick={() => {
                                toggleIsShow();
                                editNameSensor(value, sensorId);
                            }}>ОК
                        </Button>
                    </View>
                </View>
            </PageContainer>
        </View>
    );

};