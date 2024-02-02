import React from 'react';
import { View, Text, RadioGroup, Input, Button } from '@ray-js/ray';
import { useProps, useActions } from '@ray-js/panel-sdk';
import styles from './index.module.less';
import Strings from '../../i18n';

export default () => {
    const ACTIONS: any = useActions();
    let multiplier1: string = useProps((props): string => String(props.weather_delay));
    let indicatorCounter1: string = useProps((props): string => String(props.countdown));
    let options: object = [
		{ label: '1 импульс на 1 литр воды', value: "1", color: "#00BFFF", checked: statusChecked() },
		{ label: '1 импульс на 10 литров воды', value: "10", color: "#00BFFF", checked: statusChecked() },
	];
    let [valueIndicatorCounter, setValue] = React.useState(indicatorCounter1);

    function handleInput(event: any): void
    {
        setValue(event.value);
    }

    const changeRadio = (e) => {
        if (typeof e.detail.value === "string") {
            ACTIONS.weather_delay.set(e.detail.value);
        }
	};

    function statusChecked(): boolean
    {
        if (multiplier1 == '1') {
            return true;
        } else if (multiplier1 == '10') {
            return true;
        }
        return false;
    }

    function save(): void
    {
        setValue(valueIndicatorCounter);
        ACTIONS.countdown.set(valueIndicatorCounter);
    }

    /**
     * Показать счетчик
     * 
     * @returns object
     */
        function viewCounter(): object
        {
            let arr: string[] = indicatorCounter1.split('');
            let str1: string, str2: string;
    
            if (arr.length < 8) {
                for (let i = arr.length; i < 8; i++) {
                    arr.unshift('0');
                }
            }
            str1 = arr.slice(0, 5).join('');
            str2 = arr.slice(5, 9).join('');
            
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

    return (
        <View> 
            <Text className={styles.title}>Показатель счетчика 1:</Text>
            { viewCounter() }
            <RadioGroup onChange={changeRadio} options={options} className={styles.radioGroup}></RadioGroup>
            <View className={styles.editCounter}>
                <Input type="number" 
                    value={valueIndicatorCounter} 
                    maxLength={8} 
                    className={styles.inputNumber}
                    onInput={handleInput}
                ></Input>
                <Button className={styles.buttonSave} onClick={ () => save() }>Сохранить</Button>
            </View>
        </View>
    );
}
