import React from 'react';
import { View, Button, Icon, Text } from '@ray-js/ray';
import { TopBar } from '@/components';
import { navigateTo } from 'ray';
import styles from './index.module.less';
import { useActions, useProps } from '@ray-js/panel-sdk';

export function Home() {
    const actions = useActions();
    const battery = useProps((props) =>  props.battery);
    const alarm = useProps((props) =>  props.alarm);
    const craneCondition = useProps((props) =>  props.switch);

    function colorBattery(): object
    {
        let color = 'black';

        if (battery >= '50') {
            color = 'green';
        } else if (battery >= '20' && battery < '50') {
            color = 'orange';
        } else if (battery > '0' && battery < '20') {
            color = 'red';
        } 

        return (
            <React.Fragment>
                <Icon type="icon-a-boltfill" size="35" color={color}></Icon>
                <Text>{battery}%</Text>
            </React.Fragment>
        )
    }

    function alarmBlock(): object|boolean
    {
        if (alarm) {        
            return (
                <View className={styles.alarmBlock}>
                    <Text className={styles.alarmText}>Обнаружена протечка!</Text>
                    <Text className={styles.notifyText}>Уведомления</Text>
                </View>
            );
        }

        return false;
    }

    function blockCraneCondition(): object
    {
        if (craneCondition) {
            return (
                <View onClick={() => actions.switch.toggle()}>
                    <View className={styles.openClose}>
                        <Text>Открыт</Text>
                    </View>
                    <View className={styles.waves}>
                        <View className={styles.wave1}></View>
                        <View className={styles.wave2}></View>
                    </View>
                </View>
            )
        }

        return (
            <View onClick={() => actions.switch.toggle()}>
                <View className={styles.openClose}>
                    <Text>Закрыт</Text>
                </View>
                <View className={styles.waves}>
                    <View className={styles.wave3}></View>
                    <View className={styles.wave4}></View>
                </View>
            </View>
        )
    }

    return (
        <View className={styles.view}>
            <TopBar />
            <View className={styles.logo}>
                <Text className={styles.logoTextLeft}>GIDROL</Text>
                <Icon type="icon-a-dropfill" size="25" color="white"></Icon>
                <Text className={styles.logoTextRight}>CK</Text>
            </View>
            <View className={styles.batteryAlarm}>
                <View className={styles.battery}>
                    <Text className={styles.batteryText}>Заряд батареи</Text>
                    { colorBattery() }
                </View>
                {alarmBlock()}
            </View>

            <View className={styles.blockCraneCondition}>
                {blockCraneCondition()}
            </View>

            <View className={styles.blockFooter}>
                <View className={styles.navButtons}>
                    <Button
                        className={styles.button}
                        onClick={() => navigateTo({ url: '/pages/sensors/index'})}
                    >
                        <Icon type="icon-a-dotradiowavesleftandright" size="35"/>
                        <Text className={styles.textButton}>Датчики</Text>
                    </Button>
                    <Button
                        className={styles.button}
                        onClick={() => navigateTo({ url: '/pages/settings/index'})}
                    >
                        <Icon type="icon-checkmark-3" size="35"/>
                        <Text className={styles.textButton}>Настройки</Text>
                    </Button>
                </View>
            </View>
        </View>
    );
}

export default Home;
