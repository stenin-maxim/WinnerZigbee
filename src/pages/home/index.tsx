import React from 'react';
import { View, Button, Icon, Text } from '@ray-js/ray';
import { navigateTo, vibrateShort, showToast } from '@ray-js/ray';
import styles from './index.module.less';
import { useActions, useProps } from '@ray-js/panel-sdk';
import Strings from '../../i18n';

export function Home() {
    const actions = useActions();
    const countdown: number = useProps((props): number => Number(props.countdown)); // Время уборки
    const battery: number = useProps((props): number => Number(props.battery));
    const alarm: boolean = useProps((props): boolean => Boolean(props.alarm));
    const craneCondition: boolean = useProps((props): boolean => Boolean(props.switch));
    const cleaning: boolean = useProps((props): boolean => Boolean(props.cleaning));

    // language text
    let textBattery: string = Strings.getDpLang('battery'),
        textCharging: string = Strings.getDpLang('charging'),
        textAlarm: string = Strings.getDpLang('text_alarm'),
        textNotify: string = Strings.getDpLang('notify'),
        textDisableAlarm: string = Strings.getDpLang('disable_alarm'),
        textSwitchOn: string = Strings.getDpLang('switch_on'),
        textSwitchOff: string = Strings.getDpLang('switch_off'),
        textButtonCleaning: string = Strings.getLang('cleaning'),
        textButtonSensors: string = Strings.getDpLang('sensors'),
        textButtonSettings: string = Strings.getDpLang('settings');

    function colorAndTextBattery(): object
    {
        let color: string = 'black';
        let text: string = textBattery;

        if (battery > 100) {
            text = textCharging;
            color = 'green';
        } else if (battery >= 50) {
            color = 'green';
        } else if (battery >= 20 && battery < 50) {
            color = 'orange';
        } else if (battery > 0 && battery < 20) {
            color = 'red';
        } 

        return (
            <React.Fragment>
                <Text className={styles.batteryText}>{text}</Text>
                <Icon type="icon-a-boltfill" size={35} color={color}></Icon>
                <Text>{battery}%</Text>
            </React.Fragment>
        )
    }

    function alarmBlock(): object|boolean
    {
        if (alarm) {
            return (
                <View className={styles.alarmNotifyButton}>
                    <View className={styles.alarmNotify}>
                        <Text className={styles.textAlarm}>{textAlarm}</Text>
                        <Text className={styles.textNotify}>{textNotify}</Text>
                    </View>
                    <View className={styles.alarmButton} onClick={ () => actions.alarm.off() }>
                        <Icon type="icon-cancel" size={35} color="red"></Icon>
                        <Text>{textDisableAlarm}</Text>
                    </View>
                </View>
            );
        }

        return false;
    }

    function blockCraneCondition(): object
    {
        if (craneCondition) {
            return (
                <View>
                    <View className={styles.openClose}>
                        <Text className={styles.textSwitch}>{textSwitchOn}</Text>
                    </View>
                    <View className={styles.waves}>
                        <View className={styles.wave1}></View>
                        <View className={styles.wave2}></View>
                    </View>
                </View>
            )
        }

        return (
            <View>
                <View className={styles.openClose}>
                    <Text className={styles.textSwitch}>{textSwitchOff}</Text>
                </View>
                <View className={styles.waves}>
                    <View className={styles.wave3}></View>
                    <View className={styles.wave4}></View>
                </View>
            </View>
        )
    }

    /**
     * При аварии команда на вкл/выкл крана не отправлается
     */
    function clickCraneCondition(): void
    {
        if (alarm) {
            vibrateButton(4);
        } else {
            actions.switch.toggle();
            vibrateButton(2);
        }
    }

    function vibrateButton(int: number): void
    {
        for (let i = int; i == 0; i--) {
            vibrateShort({type: 'heavy'});
        }
    }

    function startStopCleaning(): void
    {
        let text: string;

        if (!cleaning) {
            text = `Режим уборки включен на ${countdown} мин.`;
            actions.cleaning.on();
        } else {
            text = 'Режим уборки выключен.';
            actions.cleaning.off();
        }
        vibrateButton(2);

        showToast({
            title: text,
            duration: 3000,
        })
    }

    function colorIconCleaning(): object {
        let color: string = '#00BFFF';
        
        if (cleaning) {
            color = 'orange';
        }

        return (
            <Icon type="icon-a-dropfill" size={35} color={color}/>
        )
    }

    return (
        <View className={styles.view}>
            <View className={styles.logo}>
                <Text className={styles.logoTextLeft}>GIDROL</Text>
                <Icon type="icon-a-dropfill" size={25} color="white"></Icon>
                <Text className={styles.logoTextRight}>CK</Text>
            </View>
            <View className={styles.batteryAlarm}>
                <View className={styles.battery}>
                    { colorAndTextBattery() }
                </View>
                {alarmBlock()}
            </View>

            <View className={styles.blockCraneCondition}>
                <View onClick={() => { clickCraneCondition() }}>
                    {blockCraneCondition()}
                </View>
            </View>

            <View className={styles.blockFooter}>
                <View className={styles.navButtons}>
                    <Button
                        className={styles.button}
                        onClick={() => { startStopCleaning(); }}
                    >
                        { colorIconCleaning() }
                        <Text className={styles.textButton}>{textButtonCleaning}</Text>
                    </Button>
                    <Button
                        className={styles.button}
                        onClick={() => navigateTo({ url: '/pages/sensors/index'})}
                    >
                        <Icon type="icon-a-dotradiowavesleftandright" size={35}/>
                        <Text className={styles.textButton}>{textButtonSensors}</Text>
                    </Button>
                    <Button
                        className={styles.button}
                        onClick={() => navigateTo({ url: '/pages/settings/index'})}
                    >
                        <Icon type="icon-checkmark-3" size={35}/>
                        <Text className={styles.textButton}>{textButtonSettings}</Text>
                    </Button>
                </View>
            </View>
        </View>
    );
}

export default Home;
