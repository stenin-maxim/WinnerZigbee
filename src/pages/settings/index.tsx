import React from 'react';
import { View, Icon, Text } from '@ray-js/ray';
import styles from './index.module.less';
import { navigateTo } from '@ray-js/ray';

export default () => {
    return (
        <View>
            <View className={styles.link} 
                onClick={() => navigateTo({ url: '/pages/instructions/index'})}
            >
                <Icon type="icon-a-exclamationmarkbubblefill" size={26}></Icon>
                <Text className={styles.linkText}>Инструкция пользователя</Text>
                <Icon type="icon-right" size={18}></Icon>
            </View>
        </View>
    );
}
