import React from 'react';
import { View, Text } from '@ray-js/ray';
import styles from './index.module.less';
import { getDpReportLog } from '@ray-js/ray';
import { useProps, useDevInfo, useActions } from '@ray-js/panel-sdk';
import Strings from '../../i18n';

export default () => {
    const ACTIONS: any = useActions();
    let limit = (useDevInfo().productId === "yltivvzb") ? 1 : 2; 
    let journal = useProps((props): Array<object> => {
        return (props.journal === null || props.journal === '') ? [] : JSON.parse(props.journal)
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
            arr.push([item.dpId, item.timeStr, item.value]);
        });
        
        str = JSON.stringify(arr);
        ACTIONS.journal.set(str);
    })
    .catch();

    function showHistory(): object
    {
        let result: object|string = textNoEvents;

        if (journal.length) {
            return journal.map((item: any, index: number) => {
                if (item[0] === 1) {
                    result = <React.Fragment>
                        <Text>{textConditinalCrane}</Text>
                        <Text className={styles.text}>{ (item[2] === 'true') ? textSwitchOn : textSwitchOff }</Text>
                    </React.Fragment>
                } else if (item[0] === 101) {
                    result = <React.Fragment>
                        <Text>{textAlarm}</Text>
                        <Text className={styles.text}>{ (item[2] === 'true') ? textAlarmOn : textAlarmOff }</Text>
                    </React.Fragment>
                }

                return (
                    <View key={index} className={styles.journal}>
                        <View className={styles.time}>{item[1]}</View>
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

