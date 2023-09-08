import React from 'react';
import { View, Button } from "@ray-js/components";
import styles from './index.module.less';
import { useProps, useDevice } from '@ray-js/panel-sdk';

export default () => {
    let device = useDevice();
    let wiredSensors = [
        {
            "id": "1",
            "online": true,
            "name": "wired_sensor_1",
            "leak": false,
        },
        {
            "id": "2",
            "online": true,
            "name": "wired_sensor_2",
            "leak": false,
        }
    ];
    
    device.dpSchema.radio_sensors = [];

    let radioSensors = [];

/*    let info = getDeviceInfo();

    console.log(info.dps);
    console.log(dpSchema);*/


    const test = useProps((props) => {
        //props.test = wiredSensor;
        //console.log(props.test);
        device.dpSchema.wired_sensors = wiredSensors;
        return device.dpSchema.wired_sensors;
    });

    function addSensors(): void
    {
        //device.dpSchema.radio_sensors = [];
        device.dpSchema.radio_sensors.push({id: 1, name: 'red', leak: false, battery: 50, signal: 90});
    }

    console.log(device.dpSchema.radio_sensors);
    //console.log(device.dpSchema.test);
    console.log(test);
    //console.log(radioSensors);

    return (
        <View className={styles.body}>
            Настройки
            <Button onClick={() => {
                addSensors();
            }}>Добавить</Button>
        </View>
    );

};