import React from 'react';
import { View, Text, RadioGroup, Radio, Label, Input, Button } from '@ray-js/ray';
import { useProps, useActions } from '@ray-js/panel-sdk';
import styles from '@/pages/counters/index.module.less';
import * as counter from '@/components/counter';

export default () => {
    const ACTIONS: any = useActions();
    const mask: number = 0b00000111_11111111_11111111_11111111;
    let multiplier2: string = useProps((props): string => String(props.smart_weather));
    let counter2: number = useProps((props): number => Number(props.minihum_set) & mask);
    let [valueCounter2, setCounter2] = React.useState('');
    let viewCounter = counter.viewCounter(counter2, multiplier2);

    function handleInput2(event: any): void
    {
        setCounter2(counter.addPoint(event.value));
    }

    function saveCounter(): void|false
    {
        if (!valueCounter2) {
            return false;
        }

        let value = counter.getCounter(valueCounter2, multiplier2);

        setCounter2('');
        ACTIONS.minihum_set.set(value);
    }

    const changeRadio2 = (e: any) => {
        if (typeof e.detail.value === "string") {
            ACTIONS.smart_weather.set(e.detail.value);
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
            <Text>2:</Text>
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
            <Text>2:</Text>
            <RadioGroup onChange={changeRadio2} options={[]} className={styles.radioGroup}>
                {viewImpuls(multiplier2)}
            </RadioGroup>
            <View className={styles.editCounter}>
                <Input type="digit"
                    value={valueCounter2}
                    maxLength={9}
                    placeholder="00000.000"
                    className={styles.inputNumber}
                    onInput={handleInput2}
                ></Input>
                <Button className={styles.buttonSave} onClick={ () => {
                    saveCounter();
                }}>{counter.textSave}</Button>
            </View>
        </View>
    );
}
