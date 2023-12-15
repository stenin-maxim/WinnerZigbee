export const defaultSchema = [
  {
    "attr": 1665,
    "canTrigger": true,
    "code": "switch",
    "defaultRecommend": true,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "iconname": "icon-dp_power2",
    "id": 1,
    "mode": "rw",
    "name": "阀门开关",
    "property": {
      "type": "bool"
    },
    "type": "obj"
  },
  {
    "attr": 1184,
    "canTrigger": false,
    "code": "percent_control",
    "defaultRecommend": false,
    "editPermission": true,
    "executable": true,
    "extContent": "",
    "id": 2,
    "mode": "rw",
    "name": "Percent control",
    "property": {
      "unit": "%",
      "min": 0,
      "max": 100,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 1216,
    "canTrigger": true,
    "code": "water_total",
    "defaultRecommend": false,
    "editPermission": true,
    "executable": false,
    "extContent": "",
    "iconname": "icon-dp_mode",
    "id": 6,
    "mode": "ro",
    "name": "Pulse counter",
    "property": {
      "unit": "Impuls",
      "min": 0,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 1760,
    "canTrigger": false,
    "code": "weather_delay",
    "defaultRecommend": true,
    "editPermission": true,
    "executable": false,
    "extContent": "",
    "iconname": "icon-dp_light2",
    "id": 10,
    "mode": "rw",
    "name": "Multiplier",
    "property": {
      "range": [
        "1",
        "10"
      ],
      "type": "enum"
    },
    "type": "obj"
  },
  {
    "attr": 1728,
    "canTrigger": true,
    "code": "countdown",
    "defaultRecommend": true,
    "editPermission": true,
    "executable": false,
    "extContent": "",
    "iconname": "icon-dp_time2",
    "id": 11,
    "mode": "rw",
    "name": "Limit counter",
    "property": {
      "unit": "Impuls",
      "min": 0,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "alarm",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 101,
    "mode": "rw",
    "name": "Alarm",
    "property": {
      "type": "bool"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "battery",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 102,
    "mode": "ro",
    "name": "Battery",
    "property": {
      "range": [
        "10",
        "20",
        "30",
        "40",
        "50",
        "60",
        "70",
        "80",
        "90",
        "100",
        "101"
      ],
      "type": "enum"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "device_cmd",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 103,
    "mode": "rw",
    "name": "Device cmd",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "cleaning",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 104,
    "mode": "rw",
    "name": "Cleaning",
    "property": {
      "type": "bool"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "channel_2",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 106,
    "mode": "wr",
    "name": "Channel 2",
    "property": {
      "type": "bool"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_1",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 107,
    "mode": "rw",
    "name": "Sensor 1",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_1",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 108,
    "mode": "rw",
    "name": "Sensor name 1",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_2",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 109,
    "mode": "rw",
    "name": "Sensor 2",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_2",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 110,
    "mode": "rw",
    "name": "Sensor name 2",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_3",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 111,
    "mode": "rw",
    "name": "Sensor 3",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_3",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 112,
    "mode": "rw",
    "name": "Sensor name 3",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_4",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 113,
    "mode": "rw",
    "name": "Sensor 4",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_4",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 114,
    "mode": "rw",
    "name": "Sensor name 4",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_5",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 115,
    "mode": "rw",
    "name": "Sensor 5",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_5",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 116,
    "mode": "rw",
    "name": "Sensor name 5",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_6",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 117,
    "mode": "rw",
    "name": "Sensor 6",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_6",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 118,
    "mode": "rw",
    "name": "Sensor name 6",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_7",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 119,
    "mode": "rw",
    "name": "Sensor 7",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_7",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 120,
    "mode": "rw",
    "name": "Sensor name 7",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_8",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 121,
    "mode": "rw",
    "name": "Sensor 8",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_8",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 122,
    "mode": "rw",
    "name": "Sensor name 8",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_9",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 123,
    "mode": "rw",
    "name": "Sensor 9",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_9",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 124,
    "mode": "rw",
    "name": "Sensor name 9",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_10",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 125,
    "mode": "rw",
    "name": "Sensor 10",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_10",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 126,
    "mode": "rw",
    "name": "Sensor name 10",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_11",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 127,
    "mode": "rw",
    "name": "Sensor 11",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_11",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 128,
    "mode": "rw",
    "name": "Sensor name 11",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_12",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 129,
    "mode": "rw",
    "name": "Sensor 12",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_12",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 130,
    "mode": "rw",
    "name": "Sensor name 12",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_13",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 131,
    "mode": "rw",
    "name": "Sensor 13",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_13",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 132,
    "mode": "rw",
    "name": "Sensor name 13",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_14",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 133,
    "mode": "rw",
    "name": "Sensor 14",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_14",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 134,
    "mode": "rw",
    "name": "Sensor name 14",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_15",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 135,
    "mode": "rw",
    "name": "Sensor 15",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_15",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 136,
    "mode": "rw",
    "name": "Sensor name 15",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_16",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 137,
    "mode": "rw",
    "name": "Sensor 16",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_16",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 138,
    "mode": "rw",
    "name": "Sensor name 16",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_17",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 139,
    "mode": "rw",
    "name": "Sensor 17",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_17",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 140,
    "mode": "rw",
    "name": "Sensor name 17",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_18",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 141,
    "mode": "rw",
    "name": "Sensor 18",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_18",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 142,
    "mode": "rw",
    "name": "Sensor name 18",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_19",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 143,
    "mode": "rw",
    "name": "Sensor 19",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_19",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 144,
    "mode": "rw",
    "name": "Sensor name 19",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_20",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 145,
    "mode": "rw",
    "name": "Sensor 20",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_20",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 146,
    "mode": "rw",
    "name": "Sensor name 20",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_21",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 147,
    "mode": "rw",
    "name": "Sensor 21",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_21",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 148,
    "mode": "rw",
    "name": "Sensor name 21",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_22",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 149,
    "mode": "rw",
    "name": "Sensor 22",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_22",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 150,
    "mode": "rw",
    "name": "Sensor name 22",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_23",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 151,
    "mode": "rw",
    "name": "Sensor 23",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_23",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 152,
    "mode": "rw",
    "name": "Sensor name 23",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_24",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 153,
    "mode": "rw",
    "name": "Sensor 24",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_24",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 154,
    "mode": "rw",
    "name": "Sensor name 24",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_25",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 155,
    "mode": "rw",
    "name": "Sensor 25",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_25",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 156,
    "mode": "rw",
    "name": "Sensor name 25",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_26",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 157,
    "mode": "rw",
    "name": "Sensor 26",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_26",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 158,
    "mode": "rw",
    "name": "Sensor name 26",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_27",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 159,
    "mode": "rw",
    "name": "Sensor 27",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_27",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 160,
    "mode": "rw",
    "name": "Sensor name 27",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_28",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 161,
    "mode": "rw",
    "name": "Sensor 28",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_28",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 162,
    "mode": "rw",
    "name": "Sensor name 28",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_29",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 163,
    "mode": "rw",
    "name": "Sensor 29",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_29",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 164,
    "mode": "rw",
    "name": "Sensor name 29",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_30",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 165,
    "mode": "rw",
    "name": "Sensor 30",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_30",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 166,
    "mode": "rw",
    "name": "Sensor name 30",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_31",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 167,
    "mode": "rw",
    "name": "Sensor 31",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_31",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 168,
    "mode": "rw",
    "name": "Sensor name 31",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_32",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 169,
    "mode": "rw",
    "name": "Sensor 32",
    "property": {
      "unit": "",
      "min": -2147483647,
      "max": 2147483647,
      "scale": 0,
      "step": 1,
      "type": "value"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "sensor_name_32",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 170,
    "mode": "rw",
    "name": "Sensor name 32",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  }
]