import React from 'react';
import { View, Icon, Text } from '@ray-js/ray';
import styles from './index.module.less';
import { navigateTo } from '@ray-js/ray';
import Strings from '../../i18n';

export default () => {
    //let textInstruction: string = Strings.getLang('instruction');
    let textСounter1: string = Strings.getLang('counter') + ' 1';
    let textСounter2: string = Strings.getLang('counter') + ' 2';

    return (
        <View>
            {/* <View className={styles.link} 
                onClick={() => navigateTo({ url: '/pages/instruction/index'})}
            >
                <Icon type="icon-a-exclamationmarkbubblefill" size={26} color="#00BFFF"></Icon>
                <Text className={styles.linkText}>{textInstruction}</Text>
                <Icon type="icon-right" size={18}></Icon>
            </View> */}
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
    );

    
}
