import React from 'react';
import { View, RichText } from '@ray-js/ray';
import styles from './index.module.less';

export default () => {
    let obj =  {
        htmlContent:
            `<div>
                <h3>Winner ZigBee:</h3>
                <p>Количество проводных датчиков - <b>1</b></p>
                <p>Максимальное количество беспроводных датчиков - <b>31</b>.</p>
                <p>Беспроводной датчик имеет: имя датчика, уровень сигнала, уровень заряда батареи.</p>
                <p>Датчик не выходит на связь более 24 часов - цвет рамки голубой.</p>
                <p>Протечка на датчике - цвет рамки красный.</p>
                <p>При аварии на экране приходит уведомление "Обнаружена протечка!".</p>
            </div>`,
        nodes: [
          {
            name: 'div',
            attrs: {
              name: 'outer',
            },
          },
        ],
    };

    return (
        <View>
            <View className={styles.instructions}>
                <RichText nodes={obj.htmlContent}></RichText>
            </View>
        </View>
    );

}

