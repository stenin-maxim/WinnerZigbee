import React from 'react';
import { View, Text, RadioGroup, Radio, Label, Input, Button } from '@ray-js/ray';
import { useProps, useActions } from '@ray-js/panel-sdk';
import styles from './index.module.less';
import Strings from '../../i18n';

export default () => {
    const ACTIONS: any = useActions();
    let multiplier1: string = useProps((props): string => String(props.weather_delay));
    let multiplier2: string = useProps((props): string => String(props.smart_weather));
    let counter1: number = useProps((props): number => Number(props.countdown));
    let counter2: number = useProps((props): number => Number(props.minihum_set));
    let [valueCounter1, setCounter1] = React.useState('0');
    let [valueCounter2, setCounter2] = React.useState('0');

    function handleInput1(event: any): void
    {
        setCounter1(addPoint(event.value));
    }

    function handleInput2(event: any): void
    {
        setCounter2(addPoint(event.value));
    }

    function addPoint(eventValue: string) {
        let arr: string[] = String(eventValue).split('');
        let str: string;

        if (arr.length == 5) {
            arr.push('.');
        }
        str = arr.join('');

        return str;
    }

    function getCounter(valueCounter: string): number
    {
        let value = valueCounter.replace(".", "");
        let counter: number;

        if (multiplier1 === '10') {
            counter = Math.round(Number(value) / 10);
        } else {
            counter = Number(value);
        }

        return counter;
    } 

    function saveCounter1(): void
    {
        let counter = getCounter(valueCounter1);

        setCounter1('0');
        ACTIONS.countdown.set(counter);
    }

    function saveCounter2(): void
    {
        let counter = getCounter(valueCounter2);

        setCounter2('0');
        ACTIONS.minihum_set.set(counter);
    }

    const changeRadio1 = (e) => {
        if (typeof e.detail.value === "string") {
            ACTIONS.weather_delay.set(e.detail.value);
        }
	};

    const changeRadio2 = (e) => {
        if (typeof e.detail.value === "string") {
            ACTIONS.smart_weather.set(e.detail.value);
        }
	};

    /**
     * Показать счетчик
     * 
     * @returns object
     */
    function viewCounter(counter: number): object
    {
        let arr: string[] = String(counter).split('');
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
                        <Radio value="1" color="#00BFFF" checked>1 импульс на 1 литр воды</Radio>
                    </Label>
                    <Label>
                        <Radio value="10" color="#00BFFF">1 импульс на 10 литров воды</Radio>
                    </Label>
                </React.Fragment>
            )
        }

        return (
            <React.Fragment>
                <Label>
                    <Radio value="1" color="#00BFFF">1 импульс на 1 литр воды</Radio>
                </Label>
                <Label>
                    <Radio value="10" color="#00BFFF" checked>1 импульс на 10 литров воды</Radio>
                </Label>
            </React.Fragment>
        )
    }

    return (
        <View>
            <View>
                <Text className={styles.title}>Показатель счетчика 1:</Text>
                { viewCounter(counter1) }
                <Text className={styles.title}>Настройки счетчика 1:</Text>
                <RadioGroup onChange={changeRadio1} className={styles.radioGroup} options={[]}>
                    {viewImpuls(multiplier1)}
                </RadioGroup>
                <View className={styles.editCounter}>
                    <Input type="digit" 
                        value={valueCounter1}
                        maxLength={9}
                        className={styles.inputNumber}
                        onInput={handleInput1}
                    ></Input>
                    <Button className={styles.buttonSave} onClick={ () => saveCounter1() }>Сохранить</Button>
                </View>
            </View>
            <View className={styles.counter2}>
                <Text className={styles.title}>Показатель счетчика 2:</Text>
                { viewCounter(counter2) }
                <Text className={styles.title}>Настройки счетчика 2:</Text>
                <RadioGroup onChange={changeRadio2} options={[]} className={styles.radioGroup}>
                    {viewImpuls(multiplier2)}
                </RadioGroup>
                <View className={styles.editCounter}>
                    <Input type="digit" 
                        value={valueCounter2}
                        maxLength={9}
                        className={styles.inputNumber}
                        onInput={handleInput2}
                    ></Input>
                    <Button className={styles.buttonSave} onClick={ () => saveCounter2() }>Сохранить</Button>
                </View>
            </View>
        </View>
    );
}
