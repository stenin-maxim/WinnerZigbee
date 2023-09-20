import { SmartDeviceModel } from '@ray-js/panel-sdk';

export const devices = {
  common: new SmartDeviceModel<SmartDeviceSchema>(),
};

Object.keys(devices).forEach((k: keyof typeof devices) => {
  devices[k].init();
});