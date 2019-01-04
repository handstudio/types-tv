import {Tizen} from './tizen';

export declare module TVInputDevice {
  type InputDeviceKeyName = Tizen.DOMString;

  interface InputDeviceKey {
    name: InputDeviceKeyName;
    code: Tizen.long;
  }

  interface TVInputDeviceManager {
    getSupportedKeys: () => InputDeviceKey[];
    
    getKey: (keyName: InputDeviceKeyName) => InputDeviceKey;

    registerKey: (keyName: InputDeviceKeyName) => void;

    unregisterKey: (keyName: InputDeviceKeyName) => void;

    registerKeyBatch: (keyNames: InputDeviceKeyName[], successCallback?: Tizen.SuccessCallback, errorCallback?: Tizen.ErrorCallback) => void;

    unregisterKeyBatch: (keyNames: InputDeviceKeyName[], successCallback?: Tizen.SuccessCallback, errorCallback?: Tizen.ErrorCallback) => void;
  }
}