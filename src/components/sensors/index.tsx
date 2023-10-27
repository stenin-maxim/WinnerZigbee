import { useProps, useDevice } from '@ray-js/panel-sdk';

interface Mask {
	readonly registr: number;
	readonly online: number;
	readonly leak: number;
	readonly ignore: number;
	readonly securityMode: number;
	readonly statusBatterySignal: number;
}

export default () => {
	const device = useDevice().dpSchema;
	const mask: Mask = {
		registr:                0b00000000_00000001_00000000_00000000, // Зарегестрированный датчик
		online:                 0b00000000_00000010_00000000_00000000, // Статус в сети
		leak:                   0b00000000_00000100_00000000_00000000, // Протечка
		ignore:                 0b00000000_00001000_00000000_00000000, // Игнор аварийных состояний
		securityMode:           0b00000000_00010000_00000000_00000000, // Режим повышеной безопасности
		statusBatterySignal:    0b00000000_00100000_00000000_00000000, // Зарегистрировано аварийное состояние датчика - потеря сигнала, низкий заряд
	}

	/**
	* Создание датчика с параметрами
	* 
	* @param sensor - датчик с параметрами, в числовом типе
	* @param sensorName - имя датчика  
	* @param sensorId - dpid датчика 
	* @param sensors - массив датчиков
	* @param sensorNumber - порядковый номер датчика
	* @returns object[]
	*/
	function createSensor(sensor: number, sensorName: string, sensorId: number, sensors: object[], sensorNumber: number): object[]
	{
		if (Boolean(sensor & mask.registr)) {
			sensors.push({
				id: sensorId,
				sensorNumber: sensorNumber,
				registr: Boolean(sensor & mask.registr),
				online: Boolean(sensor & mask.online),
				leak: Boolean(sensor & mask.leak),
				ignore: Boolean(sensor & mask.ignore),
				securityMode: Boolean(sensor & mask.securityMode),
				statusBatterySignal: Boolean(sensor & mask.statusBatterySignal),
				battery: Number(sensor & 0xFF),
				signal: Number((sensor >> 8) & 0xFF),
				name: sensorName,
			});
		}

		return sensors;
	}

	return useProps((props: any) => {
		let sensors = [];

		// for (let i = 1; i <= 32; i++) {
		// 	let d = device.sensor_ + `${i}`.id;
		// 	createSensor(Number(props.sensor_ + `${i}`), String(props.sensor_name_ + `${i}`), Number(d), sensors, i);
		// }
		// TODO
		createSensor(Number(props.sensor_1), String(props.sensor_name_1), Number(device.sensor_1.id), sensors, 1);
		createSensor(Number(props.sensor_2), String(props.sensor_name_2), Number(device.sensor_2.id), sensors, 2);
		createSensor(Number(props.sensor_3), String(props.sensor_name_3), Number(device.sensor_3.id), sensors, 3);
		createSensor(Number(props.sensor_4), String(props.sensor_name_4), Number(device.sensor_4.id), sensors, 4);
		createSensor(Number(props.sensor_5), String(props.sensor_name_5), Number(device.sensor_5.id), sensors, 5);
		createSensor(Number(props.sensor_6), String(props.sensor_name_6), Number(device.sensor_6.id), sensors, 6);
		createSensor(Number(props.sensor_7), String(props.sensor_name_7), Number(device.sensor_7.id), sensors, 7);
		createSensor(Number(props.sensor_8), String(props.sensor_name_8), Number(device.sensor_8.id), sensors, 8);
		createSensor(Number(props.sensor_9), String(props.sensor_name_9), Number(device.sensor_9.id), sensors, 9);
		createSensor(Number(props.sensor_10), String(props.sensor_name_10), Number(device.sensor_10.id), sensors, 10);
		createSensor(Number(props.sensor_11), String(props.sensor_name_11), Number(device.sensor_11.id), sensors, 11);
		createSensor(Number(props.sensor_12), String(props.sensor_name_12), Number(device.sensor_12.id), sensors, 12);
		createSensor(Number(props.sensor_13), String(props.sensor_name_13), Number(device.sensor_13.id), sensors, 13);
		createSensor(Number(props.sensor_14), String(props.sensor_name_14), Number(device.sensor_14.id), sensors, 14);
		createSensor(Number(props.sensor_15), String(props.sensor_name_15), Number(device.sensor_15.id), sensors, 15);
		createSensor(Number(props.sensor_16), String(props.sensor_name_16), Number(device.sensor_16.id), sensors, 16);
		createSensor(Number(props.sensor_17), String(props.sensor_name_17), Number(device.sensor_17.id), sensors, 17);
		createSensor(Number(props.sensor_18), String(props.sensor_name_18), Number(device.sensor_18.id), sensors, 18);
		createSensor(Number(props.sensor_19), String(props.sensor_name_19), Number(device.sensor_19.id), sensors, 19);
		createSensor(Number(props.sensor_20), String(props.sensor_name_20), Number(device.sensor_20.id), sensors, 20);
		createSensor(Number(props.sensor_21), String(props.sensor_name_21), Number(device.sensor_21.id), sensors, 21);
		createSensor(Number(props.sensor_22), String(props.sensor_name_22), Number(device.sensor_22.id), sensors, 22);
		createSensor(Number(props.sensor_23), String(props.sensor_name_23), Number(device.sensor_23.id), sensors, 23);
		createSensor(Number(props.sensor_24), String(props.sensor_name_24), Number(device.sensor_24.id), sensors, 24);
		createSensor(Number(props.sensor_25), String(props.sensor_name_25), Number(device.sensor_25.id), sensors, 25);
		createSensor(Number(props.sensor_26), String(props.sensor_name_26), Number(device.sensor_26.id), sensors, 26);
		createSensor(Number(props.sensor_27), String(props.sensor_name_27), Number(device.sensor_27.id), sensors, 27);
		createSensor(Number(props.sensor_28), String(props.sensor_name_28), Number(device.sensor_28.id), sensors, 28);
		createSensor(Number(props.sensor_29), String(props.sensor_name_29), Number(device.sensor_29.id), sensors, 29);
		createSensor(Number(props.sensor_30), String(props.sensor_name_30), Number(device.sensor_30.id), sensors, 30);
		createSensor(Number(props.sensor_31), String(props.sensor_name_31), Number(device.sensor_31.id), sensors, 31);
		createSensor(Number(props.sensor_32), String(props.sensor_name_32), Number(device.sensor_32.id), sensors, 32);

		return sensors;
	});
}

