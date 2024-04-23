import React from 'react';
import { View, Icon, Text } from '@ray-js/ray';
import { useProps } from '@ray-js/panel-sdk';
import styles from './index.module.less';
import { navigateTo } from '@ray-js/ray';
import Strings from '../../i18n';

export default () => {
    const disableCounter: number = 0b01000000_00000000_00000000_00000000; // Запрещает отрисовывать счетчики
    let counter1: number = useProps((props): number => Number(props.countdown));
    let counter2: number = useProps((props): number => Number(props.minihum_set));
    let statusCounter1 = Boolean(counter1 & disableCounter); // если false то отрисовываем счетчик!!!
    let statusCounter2 = Boolean(counter2 & disableCounter);
    let textСounter1: string = Strings.getLang('counter') + ' 1',
        textСounter2: string = Strings.getLang('counter') + ' 2';

    function viewButton(): object|false
    {
        if (statusCounter1 === false && statusCounter2 === false) {
            return (
                <View>
                    <View className={styles.link} 
                        onClick={() => navigateTo({ url: '/pages/counter-1/index'})}
                    >
                        <Icon type="icon-timer" size={30} color="#00BFFF"></Icon>
                        <Text className={styles.linkText}>{textСounter1}</Text>
                        <Icon type="icon-right" size={18}></Icon>
                    </View>
                    <View className={styles.link} 
                        onClick={() => navigateTo({ url: '/pages/counter-2/index'})}
                    >
                        <Icon type="icon-timer" size={30} color="#00BFFF"></Icon>
                        <Text className={styles.linkText}>{textСounter2}</Text>
                        <Icon type="icon-right" size={18}></Icon>
                    </View>
                </View>
            )
        } else if (statusCounter1 === false) {
            return (
                <View>
                    <View className={styles.link} 
                        onClick={() => navigateTo({ url: '/pages/counter-1/index'})}
                    >
                        <Icon type="icon-timer" size={30} color="#00BFFF"></Icon>
                        <Text className={styles.linkText}>{textСounter1}</Text>
                        <Icon type="icon-right" size={18}></Icon>
                    </View>
                </View>
            )
        } else if (statusCounter2 === false) {
            return (
                <View>
                    <View className={styles.link} 
                        onClick={() => navigateTo({ url: '/pages/counter-2/index'})}
                    >
                        <Icon type="icon-timer" size={30} color="#00BFFF"></Icon>
                        <Text className={styles.linkText}>{textСounter2}</Text>
                        <Icon type="icon-right" size={18}></Icon>
                    </View>
                </View>
            )
        }

        return false;
    }

    return (
        <View>
            {viewButton()}
            <View className={styles.info} 
                onClick={() => navigateTo({ url: '/pages/info/index'})}
            >
                <Icon type="icon-a-exclamationmarkbubblefill" size={40} color="#00BFFF"></Icon>
                <Text className={styles.textInfo}>Info</Text>
            </View>
        </View>
    );

    
}
