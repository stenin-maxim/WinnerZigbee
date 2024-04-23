import React from 'react';
import { View, Button, Icon, Text, navigateTo, vibrateShort, showToast, showModal } from '@ray-js/ray';
import styles from './index.module.less';
import { useActions, useProps, useDevInfo } from '@ray-js/panel-sdk';
import Strings from '../../i18n';
import sensors from '@/components/sensors';

export function Home() {
    const actions: any = useActions();
    const alarm: boolean = useProps((props): boolean => Boolean(props.alarm));
    const craneCondition: boolean = useProps((props): boolean => Boolean(props.switch));
    const cleaning: boolean = useProps((props): boolean => Boolean(props.cleaning));
    const maskManualControl: number = 0b00000000_10000000_00000000_00000000; // Если этот флаг стоит. Кран находится под ручным управлением
    const disableCounter: number = 0b01000000_00000000_00000000_00000000; // Запрещает отрисовывать счетчики
    
    let sensor_1: number = useProps((props): number => Number(props.sensor_1));
    let battery: number = useProps((props): number => Number(props.battery));
    let multiplier1: string = useProps((props): string => String(props.weather_delay));
    let multiplier2: string = useProps((props): string => String(props.smart_weather));
    let counter1: number = useProps((props): number => Number(props.countdown));
    let counter2: number = useProps((props): number => Number(props.minihum_set));
    let statusManualControl = Boolean(sensor_1 & maskManualControl);
    let statusCounter1 = Boolean(counter1 & disableCounter); // если false то отрисовываем счетчик!!!
    let statusCounter2 = Boolean(counter2 & disableCounter);
    let sensorsLeak = [];
    let sensorsSecurityMode = [];
    let arrSensors: Array<any> = sensors();
    let textBattery: string = Strings.getLang('battery'),
        textDevice: string = Strings.getLang('device'),
        textCharging: string = Strings.getLang('charging'),
        textAlarm: string = Strings.getLang('text_alarm'),
        textNotify: string = Strings.getLang('notify'),
        textLowBatteryOrSignal: string = Strings.getLang('low_battery_or_signal'),
        textDisableAlarm: string = Strings.getLang('disable_alarm'),
        textManualControl: string = Strings.getLang('manual_control'),
        textSwitchOn: string = Strings.getLang('switch_on'),
        textSwitchOff: string = Strings.getLang('switch_off'),
        textNotifyCleaning: string = Strings.getLang('text_notify_cleaning'),
        textCleaningModeOn: string = Strings.getLang('text_cleaning_mode_on'),
        textCleaningModeOff: string = Strings.getLang('text_cleaning_mode_off'),
        textButtonCleaning: string = Strings.getLang('text_cleaning'),
        textSensors: string = Strings.getLang('sensors'),
        textCancel: string = Strings.getLang('cancel'),
        textConfirm: string = Strings.getLang('confirm'),
        textContentAlarm: string = Strings.getLang('text_content_alarm'),
        textSettings: string = Strings.getLang('settings'),
        textCounter: string = Strings.getLang('counter'),
        textJournal: string = Strings.getLang('journal');

    if (arrSensors.length !== undefined) {
        arrSensors.map((item) => {
            if (item.leak) {
                sensorsLeak.push(item.sensorNumber);
            }
    
            if (!item.ignore && item.securityMode && item.statusBatterySignal) {
                sensorsSecurityMode.push(item.sensorNumber);
            }
        });
    }

    function counter(counter: number, multiplier: string, numb: string): object
    {
        return (
            <View className={styles.displayFlex}>
                <View className={styles.displayFlex}>
                    <Icon type="icon-timer" color="#00BFFF" size={30}/>
                    <Text className={styles.counterText}>{textCounter}</Text>
                    <Text>{numb}</Text>
                </View>
                <View>
                    <Text>{indicatorCounter(counter, multiplier)}</Text>
                    <View className={styles.meterCube}>
                        <Text>m</Text>
                        <Text className={styles.cube}>3</Text>
                    </View>
                </View>
            </View>
        );
    }

    /**
     * Вывести счетчики
     * 
     * @returns object|boolean
     */
    function viewCounter(): object|boolean
    {
        if (statusCounter1 === false && statusCounter2 === false) {
            return (
                <View className={styles.counters}>
                    {counter(counter1, multiplier1, '1')}
                    {counter(counter2, multiplier2, '2')}
                </View>
            )
        } else if (statusCounter1 === false) {
            return (
                <View className={styles.counters}>
                    {counter(counter1, multiplier1, '1')}
                </View>
            )
        } else if (statusCounter2 === false) {
            return (
                <View className={styles.counters}>
                    {counter(counter2, multiplier2, '2')}
                </View>
            )
        }

        return false;
    }

    /**
     * Показатель счетчика
     * 
     * @param counter - показатель счетчика
     * @param multiplier - импульс счетчика
     * @returns 
     */
    function indicatorCounter(counter: number, multiplier: string): string
    {
        let counterMultiplier = counter * Number(multiplier);
        let arr: string[] = String(counterMultiplier).split('');

        if (arr.length - 1 < 3) {
            for (let i = arr.length - 1; arr.length <= 3; i++) {
                arr.unshift('0');
            }
        }

        if (arr.length > 8) {
            arr.splice(0, 1);
        }

        arr.splice(-3, 0, '.');

        return arr.join('');
    }

    /**
     * Статус батареи устройства
     * 
     * @returns object
     */
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
        } else if (battery >= 50 && battery <= 100) {
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

    /**
     * Кнопка выключения аварии
     * 
     * @returns object|false
     */
    function alarmResetButton(): object|false
    {
        if (alarm) {
            return (
                <View className={styles.blockAlarm}>
                    <View className={styles.alarmButton}
                        onClick={() => { showModal(confirm()) }}
                    >
                        <Icon type="icon-cancel" size={35} color="red"></Icon>
                        <Text>{textDisableAlarm}</Text>
                    </View>
                </View>
            );
        }

        return false;
    }

    /**
     * Параметры модального окна при снятии аварии
     * 
     * @returns object
     */
    function confirm(): object
    {
        return {
            title: textDisableAlarm,
            content: textContentAlarm,
            cancelText: textCancel,
            confirmText: textConfirm,
            confirmColor: '#ff0000',
            success: (param: any): void => {
                if (param.confirm) {
                    actions.alarm.off(); 
                    sensorsLeak = []; 
                    sensorsSecurityMode = [];
                }
            },
        }
    }

    /**
     * Уведомление при низкой батареи или сигнала
     */
    function notifyLowBatteryOrSignal(): object
    {
        if (alarm && (sensorsSecurityMode.length > 0)) {
            return notify(textLowBatteryOrSignal + ' ' + textSensors + ': ' + sensorsSecurityMode.join(', '));
        }
    }

    /**
     * Уведлмление при протечки на определенных датчиках
     */
    function notifyLeak(): object
    {
        if (alarm && (sensorsLeak.length > 0)) {
            return notify(textAlarm + ' ' + textSensors + ': ' + sensorsLeak.join(', '));
        }
    }

    /**
     * Уведомление о включении уборки
     * 
     * @returns object|false
     */
    function notifyCleaning(): object|false
    {
        if (cleaning) {
            return notify(textNotifyCleaning);
        }

        return false;
    }

    /**
     * Уведомление о статусе устройства в сети
     * 
     * @returns object
     */
    function notifyDevice(): object
    {
        if (!useDevInfo().isOnline) {
            return notify(textDevice);
        }
    }

    /**
     * Каркас уведомления
     * 
     * @param text string
     * @returns object
     */
    function notify(text: string): object
    {
        return (
            <View className={styles.blockNotify}>
                <Text className={styles.textLeft}>{text}</Text>
                <Text className={styles.textRight}>{textNotify}</Text>
            </View>
        )
    }

    /**
     * Вкл/выкл уборку
     */
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

    /**
     * Состояние цвета иконки при вкл/выкл уборки
     * 
     * @returns object
     */
    function colorIconCleaning(): object {
        let color: string = '#00BFFF';
        
        if (cleaning) {
            color = 'orange';
        }

        return (
            <Icon type="icon-a-dropfill" size={40} color={color}/>
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

    /**
     * Отк/закр крана
     * 
     * @returns object
     */
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
                    <View>
                        {(statusManualControl) ? <Text className={styles.manualControl}>{textManualControl}</Text> : false}
                    </View>
                    <View>
                        <Text className={styles.textSwitch}>{textSwitchOff}</Text>
                    </View>
                </View>
                <View className={styles.waves}>
                    <View className={styles.wave3}></View>
                    <View className={styles.wave4}></View>
                </View>
            </View>
        )
    }

    function buttonSettings(): object|boolean
    {
        if (statusCounter1 === false || statusCounter2 === false) {
            return (
                <Button
                    className={styles.button}
                    onClick={() => navigateTo({ url: '/pages/settings/index'})}
                >
                    <Icon type="icon-a-wrenchandscrewdriverfill" size={40}/>
                    <Text className={styles.textButton}>{textSettings}</Text>
                </Button> 
            )
        }

        return false;
    }

    return (
        <View className={styles.view}>
            <View className={styles.logo}>
                <Text className={styles.logoText}>{useDevInfo().name}</Text>
            </View>
            {viewCounter()}
            <View>
                {notifyDevice()}
                {notifyLeak()}
                {notifyLowBatteryOrSignal()}
                {notifyCleaning()}
                {alarmResetButton()}
            </View>
            <View className={styles.battery}>
                { colorAndTextBattery() }
            </View>
            <View className={styles.blockCraneCondition}>
                <View onClick={() => { clickCraneCondition(); vibrateShort({type: 'heavy'}); vibrateShort({type: 'heavy'}); 
                    if (alarm) { vibrateShort({type: 'heavy'}); vibrateShort({type: 'heavy'}); }
                }}>
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
                    <Button
                        className={styles.button}
                        onClick={() => navigateTo({ url: '/pages/journal/index'})}
                    >
                        <Icon type="icon-a-scrollfill" size={40}/>
                        <Text className={styles.textButton}>{textJournal}</Text>
                    </Button>
                    <Button
                        className={styles.button}
                        onClick={() => navigateTo({ url: '/pages/sensors/index'})}
                    >
                        <Icon type="icon-a-dotradiowavesleftandright" size={40}/>
                        <Text className={styles.textButton}>{textSensors}</Text>
                    </Button>
                    {buttonSettings()}
                </View>
            </View>
        </View>
    );
}

export default Home;
