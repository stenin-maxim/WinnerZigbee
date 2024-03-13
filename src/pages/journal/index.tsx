import React from 'react';
import { View, Text } from '@ray-js/ray';
import styles from './index.module.less';
import { getDpReportLog } from '@ray-js/ray';
import { useProps, useDevInfo, useActions } from '@ray-js/panel-sdk';
import Strings from '../../i18n';

export default () => {
    const ACTIONS: any = useActions();
    let limit = (useDevInfo().productId === "yltivvzb") ? 2 : 7;
    let journal = useProps((props): Array<object> => {
        return (props.journal == null || props.journal == '') ? [] : JSON.parse(props.journal)
    });
    let textJournalEvents: string = Strings.getLang('journal_events'),
        textSwitchOn: string = Strings.getLang('switch_on'),
        textSwitchOff: string = Strings.getLang('switch_off'),
        textNoEvents: string = Strings.getLang('no_events'),
        textAlarm: string = Strings.getLang('alarm'),
        textAlarmOn: string = Strings.getLang('alarm_on'),
        textAlarmOff: string = Strings.getLang('alarm_off'),
        textConditinalCrane: string = Strings.getLang('condition_crane');

    getDpReportLog({
        devId: useDevInfo().devId,
        dpIds: '1,101',
        offset: 1,
        limit: limit,
        sortType: 'DESC',
      })
    .then((response) => {
        let str = JSON.stringify(response.dps);
        let arr = [];

        response.dps.forEach((item) => {
            let timeStamp = item.timeStamp;
            let value = (item.value === 'true') ? 1 : 0;
            arr.push([item.dpId, timeStamp, value]);
        });
        
        str = JSON.stringify(arr);
        ACTIONS.journal.set(str);
    })
    .catch();

    function converter(timeStamp: number): string
    {
        let date = new Date(timeStamp * 1000);
        let year = date.getFullYear(),
            month = '0' + (date.getMonth() + 1),
            day = '0' + date.getDate(),
            hours = '0' + date.getHours(),
            minutes = '0' + date.getMinutes(),
            seconds = '0' + date.getSeconds();

        return year + '-' + month.substr(-2) + '-' + day.substr(-2) + ' ' + hours.substr(-2) + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    }

    function showHistory(): object
    {
        let result: object|string = textNoEvents;

        if (journal.length) {
            return journal.map((item: any, index: number) => {
                if (item[0] == 1) {
                    result = <React.Fragment>
                        <Text>{textConditinalCrane}</Text>
                        <Text className={styles.text}>{ (item[2]) ? textSwitchOn : textSwitchOff }</Text>
                    </React.Fragment>
                } else if (item[0] == 101) {
                    result = <React.Fragment>
                        <Text>{textAlarm}</Text>
                        <Text className={styles.text}>{ (item[2]) ? textAlarmOn : textAlarmOff }</Text>
                    </React.Fragment>
                }

                return (
                    <View key={index} className={styles.journal}>
                        <View className={styles.timeStamp}>{converter(item[1])}</View>
                        <View className={styles.state}>
                            {result}
                        </View>
                    </View>
                )
            })
        }

        return <View className={styles.journalEmpty}>{result}</View>;
    }

    return (
        <View>
            <Text className={styles.text}>{textJournalEvents}</Text>
            {showHistory()}
        </View>
    );
}

