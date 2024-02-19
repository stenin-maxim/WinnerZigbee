import React from 'react';
import { View, Text, RadioGroup, Radio, Label, Input, Button } from '@ray-js/ray';
import { useProps, useActions } from '@ray-js/panel-sdk';
import styles from '@/pages/counters/index.module.less';
import Strings from '../../i18n';

export default () => {
    const ACTIONS: any = useActions();
    let multiplier1: string = useProps((props): string => String(props.weather_delay));
    let counter1: number = useProps((props): number => Number(props.countdown));
    let [valueCounter1, setCounter1] = React.useState('');
    let textIndicatorCounter: string = Strings.getLang('text_indicator_counter'),
        textSettingCounter: string = Strings.getLang('text_setting_counter'),
        textImpulsLiter: string = Strings.getLang('text_impuls_liter'),
        textImpuls10Liter: string = Strings.getLang('text_impuls_10_liter'),
        textSave: string = Strings.getLang('text_save');

    function handleInput2(event: any): void
    {
        setCounter1(addPoint(event.value));
    }

    /**
     * Добавление точки к числу
     * 
     * @param eventValue 
     * @returns 
     */
    function addPoint(eventValue: string) {
        let arr: string[] = String(eventValue).split('');
        let str: string;
    
        if (arr.length == 5) {
            arr.push('.');
        }
        str = arr.join('');
    
        return str;
    }

    /**
     * Получение параметра счетчика
     * 
     * @param valueCounter 
     * @param multiplier 
     * @returns 
     */
    function getCounter(valueCounter: string, multiplier: string): number
    {
        let value = valueCounter.replace(".", "");
        let counter: number;

        if (multiplier === '10') {
            counter = Math.round(Number(value) / 10);
        } else {
            counter = Number(value);
        }

        return counter;
    } 

    function saveCounter1(): void // TODO
    {
        let counter = getCounter(valueCounter1, multiplier1);

        setCounter1('');
        ACTIONS.countdown.set(counter);
    }

    const changeRadio1 = (e) => {
        if (typeof e.detail.value === "string") {
            ACTIONS.weather_delay.set(e.detail.value);
        }
	};

    /**
     * Показать счетчик
     * @param counter - показатель счетчика
     * @param multiplier - импульс счетчика
     * @returns object
     */
    function viewCounter(counter: number, multiplier: string): object
    {
        let counterMultiplier = counter * Number(multiplier);
        let arr: string[] = String(counterMultiplier).split('');
        let str1: string, str2: string;

        if (arr.length < 8) {
            for (let i = arr.length; i < 8; i++) {
                arr.unshift('0');
            }
        }
        str1 = arr.slice(0, 5).join('');
        str2 = arr.slice(5, 8).join('');
        
        return (
            <View className={styles.indicatorCounter}>
                <View className={styles.indicatorCounterBlock}>
                    <Text>{str1}</Text>
                    <Text>.</Text>
                    <Text className={styles.threeNumber}>{str2}</Text>
                </View>
                <View className={styles.meterCube}>
                    <Text>м</Text>
                    <Text className={styles.cube}>3</Text>
                </View>
            </View>
        );
    }

    function viewImpuls(multiplier: string): object
    {
        if (multiplier === '1') {
            return (
                <React.Fragment>
                    <Label>
                        <Radio value="1" color="#00BFFF" checked>{textImpulsLiter}</Radio>
                    </Label>
                    <Label>
                        <Radio value="10" color="#00BFFF">{textImpuls10Liter}</Radio>
                    </Label>
                </React.Fragment>
            )
        } else if (multiplier === '10') {
            return (
                <React.Fragment>
                    <Label>
                        <Radio value="1" color="#00BFFF">{textImpulsLiter}</Radio>
                    </Label>
                    <Label>
                        <Radio value="10" color="#00BFFF" checked>{textImpuls10Liter}</Radio>
                    </Label>
                </React.Fragment>
            )
        }
    }

    return (
        <View>
            <View>
                <Text className={styles.title}>{textIndicatorCounter}</Text>
                <Text>1:</Text>
                { viewCounter(counter1, multiplier1) }
                <Text className={styles.title}>{textSettingCounter}</Text>
                <Text>1:</Text>
                <RadioGroup onChange={changeRadio1} options={[]} className={styles.radioGroup}>
                    {viewImpuls(multiplier1)}
                </RadioGroup>
                <View className={styles.editCounter}>
                    <Input type="digit"
                        value={valueCounter1}
                        maxLength={9}
                        placeholder="00000.000"
                        className={styles.inputNumber}
                        onInput={handleInput2}
                    ></Input>
                    <Button className={styles.buttonSave} onClick={ () => {
                        saveCounter1();
                    }}>{textSave}</Button>
                </View>
            </View>
        </View>
    );
}
