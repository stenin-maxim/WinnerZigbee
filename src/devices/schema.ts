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
    "code": "wired_sensors",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 102,
    "mode": "rw",
    "name": "Wired sensors",
    "type": "raw"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "radio_sensors",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 103,
    "mode": "rw",
    "name": "Radio sensors",
    "type": "raw"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "battery",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 104,
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
    "code": "radio_search",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 105,
    "mode": "rw",
    "name": "Radio search",
    "property": {
      "type": "bool"
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "radio_sensor_1",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 106,
    "mode": "rw",
    "name": "Radio sensor 1",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "radio_sensor_2",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 107,
    "mode": "rw",
    "name": "Radio sensor 2",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "radio_sensor_3",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 108,
    "mode": "rw",
    "name": "Radio sensor 3",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  },
  {
    "attr": 0,
    "canTrigger": true,
    "code": "wired_sensor_1",
    "defaultRecommend": false,
    "editPermission": false,
    "executable": true,
    "extContent": "{}",
    "id": 109,
    "mode": "rw",
    "name": "Wired sensor 1",
    "property": {
      "type": "string",
      "maxlen": 255
    },
    "type": "obj"
  }
]