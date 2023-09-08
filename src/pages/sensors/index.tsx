import React from 'react';
import { View, Button, Icon, Text } from "@ray-js/components";
import styles from './index.module.less';
import { useProps} from '@ray-js/panel-sdk';

export default () => {
    let countWiredSensors: number = 0;
    let countRadioSensors: number = 0;
    let wiredSensors = useProps((props) => {
        let wiredSensors = [];

        if (props.wired_sensor_1 !== null) {
            wiredSensors.push(JSON.parse(props.wired_sensor_1));
        }

        countWiredSensors = wiredSensors.length;

        return wiredSensors;
    });

    let radioSensors = useProps((props) => {
        let radioSensors = [];

        if (props.radio_sensor_1 !== null) {
            radioSensors.push(JSON.parse(props.radio_sensor_1));
        }

        if (props.radio_sensor_2 !== null) {
            radioSensors.push(JSON.parse(props.radio_sensor_2));
        }

        if (props.radio_sensor_3 !== null) {
            radioSensors.push(JSON.parse(props.radio_sensor_3));
        }

        countRadioSensors = radioSensors.length;

        return radioSensors;
    });
    
    function showWiredSensors()
    {
        return (
            wiredSensors.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <View
                        className={styles.sensor}
                        style={{ border: item.leak ? '1px solid #FF0000' : '1px solid white' }}
                        >
                            <View>       
                                <View style={{ display: item.leak ? 'inline-block' : 'none' }}>
                                    <Icon type="icon-warning" color="#FF0000" size="26"></Icon>
                                </View>
                                <View style={{ display: item.leak ? 'none' : 'inline-block' }}>
                                    <Icon type="icon-a-sunminfill" color="black" size="26"></Icon>
                                </View>
                                <Text className={styles.name}>{ item.name }</Text>
                            </View>
                        </View>
                    </React.Fragment>
                )
            })
        )
    }

    function showRadioSensors()
    {
        return (
            radioSensors.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <View
                        className={styles.sensor}
                        style={{ border: item.leak ? '1px solid #FF0000' : '1px solid white' }}
                        >
                            <View>
                                <View style={{ display: item.leak ? 'inline-block' : 'none' }}>
                                    <Icon type="icon-warning" color="#FF0000" size="26"></Icon>
                                </View>
                                <View style={{ display: item.leak ? 'none' : 'inline-block' }}>
                                    <Icon type="icon-a-sunminfill" color="black" size="26"></Icon>
                                </View>
                                <Text className={styles.name}>{ item.name }</Text>
                            </View>
                            <View className={styles.signalBattery}>
                                <View className={styles.signal}>
                                    <Icon type="icon-wifi" color="black" size="26"/>
                                    <Text className={styles.signalText}>{ item.signal }</Text>
                                </View>
                                <View className={styles.battery}>
                                    <Icon type="icon-a-boltfill" color="black" size="26"/>
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
        </View>
    );

};