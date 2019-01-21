import {Tizen} from './tizen';

export declare module Application {
  enum ApplicationControlLaunchMode { 
    SINGLE, 
    GROUP 
  }

  type ApplicationId = Tizen.DOMString;

  interface ApplicationControlData {
    key: Tizen.DOMString;
    value: Tizen.DOMString[];
  }

  interface ApplicationControl {
    operation: Tizen.DOMString;
    uri?: Tizen.DOMString;
    mime?: Tizen.DOMString;
    category?: Tizen.DOMString;
    data: ApplicationControlData[];
    launchMode: ApplicationControlLaunchMode;
  }

  interface ApplicationControlDataArrayReplyCallback {
    onfailure: () => void;
    onsuccess(data?: ApplicationControlData[]): () => void;
  }

  interface Application {
    exit(): void;
    // 나머지 추가 필요
  }
  interface ApplicationManager {
    launchAppControl: (
      appControl: ApplicationControl,
      id?: ApplicationId,
      successCallback?: Tizen.SuccessCallback,
      errorCallback?: Tizen.ErrorCallback,
      replyCallback?: ApplicationControlDataArrayReplyCallback
    ) => void;
    getCurrentApplication(): Application;
    // 나머지 추가 필요
  }
}