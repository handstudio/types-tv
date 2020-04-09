import {Tizen} from './tizen';

export declare module WebSetting {
  interface WebSettingManager {
    setUserAgentString: (userAgent: String, successCallback?: Tizen.SuccessCallback) => void;
  }
}