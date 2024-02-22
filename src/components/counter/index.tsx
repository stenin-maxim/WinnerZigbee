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

/**
 * Показать счетчик
 * @param counter - показатель счетчика
 * @param multiplier - импульс счетчика
 * @returns object
 */
function viewCounter(counter: number, multiplier: string): object
{
    let counterMultiplier = counter * Number(multiplier);
    let arr: string[] = String(counterMultiplier).split('');
    let str1: string, str2: string;

    if (arr.length < 8) {
        for (let i = arr.length; i < 8; i++) {
            arr.unshift('0');
        }
    }
    str1 = arr.slice(-8, -3).join('');
    str2 = arr.slice(-3).join('');

    return [str1, str2];
}

export {
    textIndicatorCounter, 
    textSettingCounter,
    textImpulsLiter,
    textImpuls10Liter,
    textSave,
    addPoint, 
    getCounter,
    viewCounter,
};
