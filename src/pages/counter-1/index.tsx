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
    let viewCounter = counter.viewCounter(counter1, multiplier1);

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
            <View className={styles.indicatorCounter}>
                <View className={styles.indicatorCounterBlock}>
                    <Text>{viewCounter[0]}</Text>
                    <Text>.</Text>
                    <Text className={styles.threeNumber}>{viewCounter[1]}</Text>
                </View>
                <View className={styles.meterCube}>
                    <Text>m</Text>
                    <Text className={styles.cube}>3</Text>
                </View>
            </View>
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
