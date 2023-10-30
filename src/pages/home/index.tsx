import React from 'react';
import { View, Button, Icon, Text } from '@ray-js/ray';
import { navigateTo, vibrateShort, showToast } from '@ray-js/ray';
import styles from './index.module.less';
import { useActions, useProps } from '@ray-js/panel-sdk';
import Strings from '../../i18n';
import sensors from '@/components/sensors';

export function Home() {
    const actions: any = useActions();
    const alarm: boolean = useProps((props): boolean => Boolean(props.alarm));
    const craneCondition: boolean = useProps((props): boolean => Boolean(props.switch));
    const cleaning: boolean = useProps((props): boolean => Boolean(props.cleaning));
    
    let sensorsLeak = [];
    let sensorsSecurityMode = [];
    let battery: number = useProps((props): number => Number(props.battery_percentage));
    let textBattery: string = Strings.getLang('battery'),
        textCharging: string = Strings.getLang('charging'),
        textAlarm: string = Strings.getLang('text_alarm'),
        textNotify: string = Strings.getLang('notify'),
        textLowBatteryOrSignal: string = Strings.getLang('low_battery_or_signal'),
        textDisableAlarm: string = Strings.getLang('disable_alarm'),
        textSwitchOn: string = Strings.getLang('switch_on'),
        textSwitchOff: string = Strings.getLang('switch_off'),
        textNotifyCleaning: string = Strings.getLang('text_notify_cleaning'),
        textCleaningModeOn: string = Strings.getLang('text_cleaning_mode_on'),
        textCleaningModeOff: string = Strings.getLang('text_cleaning_mode_off'),
        textButtonCleaning: string = Strings.getLang('text_cleaning'),
        // textButtonHistory: string = Strings.getLang('text_history'),
        textSensors: string = Strings.getLang('sensors'),
        textButtonManual: string = Strings.getLang('manual');
        //textButtonSettings: string = Strings.getLang('settings');

    sensors().map((item) => {
        if (item.leak) {
            sensorsLeak.push(item.sensorNumber);
        }

        if (!item.ignore && item.securityMode && item.statusBatterySignal) {
            sensorsSecurityMode.push(item.sensorNumber);
        }
    });

    function colorAndTextBattery(): object
    {
        let color: string = 'black';
        let text: string = textBattery;

        if (battery > 100) {
            text = textCharging;
            color = '#07fa3c';

            return (
                <React.Fragment>
                    <Text className={styles.batteryText}>{text}</Text>
                    <Icon type="icon-a-boltfill" size={35} color={color}></Icon>
                </React.Fragment>
            )
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

    function alarmResetButton(): object|false
    {
        if (alarm) {
            return (
                <View className={styles.blockAlarm}>
                    <View className={styles.alarmButton} 
                        onClick={ () => {
                            actions.alarm.off(); 
                            sensorsLeak = []; 
                            sensorsSecurityMode = [];
                        }}
                    >
                        <Icon type="icon-cancel" size={35} color="red"></Icon>
                        <Text>{textDisableAlarm}</Text>
                    </View>
                </View>
            );
        }

        return false;
    }

    function notifyLowBatteryOrSignal()
    {
        if (alarm && (sensorsSecurityMode.length > 0)) {
            notify(textLowBatteryOrSignal + ' ' + textSensors + ': ' + sensorsLeak.join(', '));
        }
    }

    function notifyLeak()
    {
        if (alarm && (sensorsLeak.length > 0)) {
            return notify(textAlarm + ' ' + textSensors + ': ' + sensorsLeak.join(', '));
        }
    }

    function notifyCleaning(): object|false
    {
        if (cleaning) {
            return notify(textNotifyCleaning);
        }

        return false;
    }

    function notify(text: string): object
    {
        return (
            <View className={styles.blockNotify}>
                <Text className={styles.textLeft}>{text}</Text>
                <Text className={styles.textRight}>{textNotify}</Text>
            </View>
        )
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
        if (!alarm) {
            actions.switch.toggle();
        }
    }

    function startStopCleaning(): void
    {
        let text: string;

        if (!cleaning) {
            text = textCleaningModeOn;
            actions.cleaning.on();
        } else {
            text = textCleaningModeOff;
            actions.cleaning.off();
        }

        showToast({
            title: text,
            duration: 4000,
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
                <Text className={styles.logoText}>Winner ZigBee</Text>
            </View>
            <View>
                {notifyLeak()}
                {notifyLowBatteryOrSignal()}
                {notifyCleaning()}
                {alarmResetButton()}
            </View>
            <View className={styles.battery}>
                { colorAndTextBattery() }
            </View>

            <View className={styles.blockCraneCondition}>
                <View onClick={() => { clickCraneCondition(); vibrateShort({type: 'heavy'}); vibrateShort({type: 'heavy'}); }}>
                    {blockCraneCondition()}
                </View>
            </View>

            <View className={styles.blockFooter}>
                <View className={styles.navButtons}>
                    <Button
                        className={styles.button}
                        onClick={() => { startStopCleaning(); vibrateShort({type: 'heavy'}); vibrateShort({type: 'heavy'}); }}
                    >
                        { colorIconCleaning() }
                        <Text className={styles.textButton}>{textButtonCleaning}</Text>
                    </Button>
                    {/* <Button
                        className={styles.button}
                        onClick={() => navigateTo({ url: '/pages/history/index'})}
                    >
                        <Icon type="icon-a-scrollfill" size={35}/>
                        <Text className={styles.textButton}>{textButtonHistory}</Text>
                    </Button> */}
                    <Button
                        className={styles.button}
                        onClick={() => navigateTo({ url: '/pages/sensors/index'})}
                    >
                        <Icon type="icon-a-dotradiowavesleftandright" size={35}/>
                        <Text className={styles.textButton}>{textSensors}</Text>
                    </Button>
                    <Button
                        className={styles.button}
                        onClick={() => navigateTo({ url: '/pages/instructions/index'})}
                    >
                        <Icon type="icon-a-exclamationmarkbubblefill" size={35}/>
                        <Text className={styles.textButton}>{textButtonManual}</Text>
                    </Button>
                </View>
            </View>
        </View>
    );
}

export default Home;
