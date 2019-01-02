export {}

declare module './index' {
  interface TizenStatic {
    readonly tvinputdevice: TVInputDevice.TVInputDeviceManager;
  }

  namespace TVInputDevice {
    type InputDeviceKeyName = DOMString;

    interface InputDeviceKey {
      name: InputDeviceKeyName;
      code: long;
    }

    interface TVInputDeviceManager {
      getSupportedKeys: () => InputDeviceKey[];
      
      getKey: (keyName: InputDeviceKeyName) => InputDeviceKey;

      registerKey: (keyName: InputDeviceKeyName) => void;

      unregisterKey: (keyName: InputDeviceKeyName) => void;

      registerKeyBatch: (keyNames: InputDeviceKeyName[], successCallback?: SuccessCallback, errorCallback?: ErrorCallback) => void;

      unregisterKeyBatch: (keyNames: InputDeviceKeyName[], successCallback?: SuccessCallback, errorCallback?: ErrorCallback) => void;
    }
  }
}