import Strings from '../../i18n';

let textIndicatorCounter: string = Strings.getLang('text_indicator_counter'),
    textSettingCounter: string = Strings.getLang('text_setting_counter'),
    textImpulsLiter: string = Strings.getLang('text_impuls_liter'),
    textImpuls10Liter: string = Strings.getLang('text_impuls_10_liter'),
    textSave: string = Strings.getLang('text_save');

/**
 * Добавление точки к числу
 * 
 * @param eventValue 
 * @returns 
 */
function addPoint(eventValue: string): string {
    let arr: string[] = String(eventValue).split('');
    let str: string;

    if (arr.length == 5) {
        arr.push('.');
    }
    str = arr.join('');

    return str;
}

/**
 * Получение параметра счетчика
 * 
 * @param valueCounter 
 * @param multiplier 
 * @returns 
 */
function getCounter(valueCounter: string, multiplier: string): number
{
    let value = valueCounter.replace(".", "");
    let counter: number;

    if (multiplier === '10') {
        counter = Math.round(Number(value) / 10);
    } else {
        counter = Number(value);
    }

    return counter;
}

export {
    textIndicatorCounter, 
    textSettingCounter,
    textImpulsLiter,
    textImpuls10Liter,
    textSave,
    addPoint, 
    getCounter,
};
