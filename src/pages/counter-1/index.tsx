import React from 'react';
import { View, Text, RadioGroup, Radio, Label, Input, Button } from '@ray-js/ray';
import { useProps, useActions } from '@ray-js/panel-sdk';
import styles from '@/pages/counters/index.module.less';
import * as counter from '@/components/counter';

export default () => {
    const ACTIONS: any = useActions();
    let multiplier1: string = useProps((props): string => String(props.weather_delay));
    let counter1: number = useProps((props): number => Number(props.countdown));
    let [valueCounter1, setCounter1] = React.useState('');

    function handleInput1(event: any): void
    {
        setCounter1(counter.addPoint(event.value));
    }

    function saveCounter(): void
    {
        let value = counter.getCounter(valueCounter1, multiplier1);

        setCounter1('');
        ACTIONS.countdown.set(value);
    }

    const changeRadio1 = (e: any) => {
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
                        <Radio value="1" color="#00BFFF" checked>{counter.textImpulsLiter}</Radio>
                    </Label>
                    <Label>
                        <Radio value="10" color="#00BFFF">{counter.textImpuls10Liter}</Radio>
                    </Label>
                </React.Fragment>
            )
        } else if (multiplier === '10') {
            return (
                <React.Fragment>
                    <Label>
                        <Radio value="1" color="#00BFFF">{counter.textImpulsLiter}</Radio>
                    </Label>
                    <Label>
                        <Radio value="10" color="#00BFFF" checked>{counter.textImpuls10Liter}</Radio>
                    </Label>
                </React.Fragment>
            )
        }
    }

    return (
        <View>
            <Text className={styles.title}>{counter.textIndicatorCounter}</Text>
            <Text>1:</Text>
            { viewCounter(counter1, multiplier1) }
            <Text className={styles.title}>{counter.textSettingCounter}</Text>
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
                    onInput={handleInput1}
                ></Input>
                <Button className={styles.buttonSave} onClick={ () => {
                    saveCounter();
                }}>{counter.textSave}</Button>
            </View>
        </View>
    );
}
