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
    "extContent": "{}",
    "id": 101,
    "mode": "ro",
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
      "max": 100,
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
  }
]