import React from 'react';
import { View, Button, Icon, Text, PageContainer, Input } from "@ray-js/components";
import styles from './index.module.less';
import { useProps, useDevice, useActions } from '@ray-js/panel-sdk';

export default () => {
    const actions = useActions();
    const device = useDevice();
    const [isShow, setIsShow] = React.useState(false);
    const [value, setValue] = React.useState("");
    const [sensorId, setSensorId] = React.useState("");
    const toggleIsShow = () => setIsShow(!isShow); // Показать/скрыть модальное окно
    let countWiredSensors: number = 0;
    let countRadioSensors: number = 0;
    
    let wiredSensors = useProps((props) => {
        let wiredSensors = [];

        if (props.wired_sensor_1 !== null && props.wired_sensor_1 !== '') {
            let json = JSON.parse(props.wired_sensor_1);
            json.id = device.dpSchema.wired_sensor_1.id;

            wiredSensors.push(json);
        }

        if (props.wired_sensor_2 !== null && props.wired_sensor_2 !== '') {
            let json = JSON.parse(props.wired_sensor_1);
            json.id = device.dpSchema.wired_sensor_2.id;

            wiredSensors.push(json);
        }

        countWiredSensors = wiredSensors.length;

        return wiredSensors;
    });

    let radioSensors = useProps((props) => {
        let radioSensors = [];

        if (props.radio_sensor_1 !== null && props.radio_sensor_1 !== '') {
            radioSensors.push(JSON.parse(props.radio_sensor_1));
        }

        if (props.radio_sensor_2 !== null && props.radio_sensor_2 !== '') {
            radioSensors.push(JSON.parse(props.radio_sensor_2));
        }

        if (props.radio_sensor_3 !== null && props.radio_sensor_3 !== '') {
            radioSensors.push(JSON.parse(props.radio_sensor_3));
        }

        countRadioSensors = radioSensors.length;

        return radioSensors;
    });

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
                                    <Icon type="icon-wifi" color="black" size="26"/>
                                    <Text className={styles.signalText}>{ item.s }</Text>
                                </View>
                                <View className={styles.battery}>
                                    <Icon type="icon-a-boltfill" color="black" size="26"/>
                                    <Text className={styles.batteryText}>{ item.b }</Text>
                                </View>
                            </View>
                        </View>
                    </React.Fragment>
                )
            })
        )
    }

    function editNameSensor(value, sensorId) {
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
                actions.radio_sensor_1.set(value);
                break;
            case 107:
                actions.radio_sensor_2.set(value);
                break;
            case 108:
                actions.radio_sensor_3.set(value);
                break;
        }
    }

    return (
        <View>
            <Text className={styles.title}>Количество добавленных:</Text>
            <View className={styles.wrapSensors}>
                <View className={styles.border}>
                    <Text>Проводных датчиков:</Text>
                    <Text className={styles.countSensors}>{ countWiredSensors }</Text>
                </View>
                <View>
                    <Text>Беспроводных датчиков:</Text>
                    <Text className={styles.countSensors}>{ countRadioSensors }</Text>
                </View>
            </View>

            { countWiredSensors ? showWiredSensors() : '' }
            { countRadioSensors ? showRadioSensors() : '' }

            <Button onClick={() => {
            }}>Добавить</Button>

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
                            {/* <View className={styles.buttonDelete} onClick={() => { deleteShow(true); }}>
                                <Icon type="icon-a-minussquarefill" color="red" size="32"></Icon>
                                <Text>Удалить</Text>
                            </View> */}
                        </View>
                        <View className={styles.input}>
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
                    <Button
                        onClick={() => {
                            toggleIsShow();
                            editNameSensor(value, sensorId);
                        }}>ОК
                    </Button>
                </View>
            </PageContainer>
        </View>
    );

};