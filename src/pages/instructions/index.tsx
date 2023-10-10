import React from 'react';
import { View, RichText } from '@ray-js/ray';
import styles from './index.module.less';

export default () => {
    let obj =  {
        htmlContent:
            `
                <h3 style="text-align: center">Winner ZigBee:</h3>
                <div style="font-size: 15px">
                    <h4 style="margin: 5px 0;">Главный экран:</h4>
                    <div style="margin: 0 0 5px 10px;">
                        <p style="margin: 10px 0px">На главном экране указан заряд батареи Winner, включение и выключение крана.</p>
                        <p style="margin: 10px 0px">При аварии приходит уведомление "Обнаружена протечка!", с кнопкой сброса аварии.</p>
                        <p style="margin: 10px 0px">Присудствует кнопка включения и выключения режима уборки.</p>
                    </div>
                    <h4 style="margin: 5px 0;">На вкладке датчики:</h4>
                    <div style="margin: 0 0 5px 10px;">
                        <p style="margin: 10px 0px">Количество подключаемых датчиков - <b>32</b>.</p>
                        <ul style="margin: 10px 25px">
                            <li>Проводных датчиков - <b>1</b>.</li>
                            <li>Беспроводных датчиков - <b>31</b>.</li>
                        </ul>
                        <p style="margin: 10px 0px">Беспроводной датчик имеет: имя датчика, уровень сигнала, уровень заряда батареи.</p>
                        <p style="margin: 10px 0px">Протечка на датчике - цвет рамки и знак предупреждения красный.</p>
                        <p style="margin: 10px 0px">Датчик не выходит на связь более 24 часов - цвет рамки и значок связи голубой.</p>
                        <p style="margin: 10px 0px">Заряд батарейки на датчике менее 30% - цвет рамки и значок заряда оранжевый.</p>
                        <p style="margin: 10px 0px">Датчик находится в состоянии игнора - цвет рамки серый.</p>
                        <p style="margin: 10px 0px">При нажатии на датчик появятся настройки, можно удалить, заменить, переименовать имя данного датчика.</p>
                        <p style="margin: 10px 0px">После удаления, датчик на интерфейсе пропадает.</p>
                        <p style="margin: 10px 0px">При нажатии кнопки замена, датчик можно заменить на другой датчик с предыдущими настройками.</p>
                        <p style="margin: 10px 0px">Приложение переведено на русский, английский и китайский язык. Язык устанавливается в зависимотси от настроек телефона.</p>
                    </div>
                </div>
            `,
    };

    return (
        <View>
            <View className={styles.instructions}>
                <RichText nodes={obj.htmlContent}></RichText>
            </View>
        </View>
    );

}

