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
    "name": "天气延时",
    "property": {
      "range": [
        "cancel",
        "24h",
        "48h",
        "72h"
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
    "name": "灌溉时间",
    "property": {
      "unit": "s",
      "min": 0,
      "max": 86400,
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
      "unit": "%",
      "min": 0,
      "max": 255,
      "scale": 0,
      "step": 1,
      "type": "value"
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
    "code": "registr_mask",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 104,
    "mode": "ro",
    "name": "Registr mask",
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
    "code": "online_mask",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 105,
    "mode": "ro",
    "name": "Online mask",
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
    "code": "leak_mask",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "",
    "id": 106,
    "mode": "ro",
    "name": "Leak mask",
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
    "extContent": "{}",
    "id": 121,
    "mode": "rw",
    "name": "Sensor_8",
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
    "extContent": "{}",
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
    "extContent": "{}",
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
    "extContent": "{}",
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
    "extContent": "{}",
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
    "extContent": "{}",
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
    "extContent": "{}",
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
    "extContent": "{}",
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
    "extContent": "{}",
    "id": 130,
    "mode": "rw",
    "name": "Sensor name 12",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  }
]