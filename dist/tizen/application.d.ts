import {Tizen} from './tizen';

export declare module Application {
  enum ApplicationControlLaunchMode { 
    SINGLE, 
    GROUP 
  }

  type ApplicationId = Tizen.DOMString;
  type PackageId = Tizen.DOMString;

  interface ApplicationControlData {
    key: Tizen.DOMString;
    value: Tizen.DOMString[];
  }

  class ApplicationControl {
    constructor(operation: Tizen.DOMString,
      uri?: Tizen.DOMString,
      mime?: Tizen.DOMString,
      category?: Tizen.DOMString,
      data?: ApplicationControlData[],
      launchMode?: ApplicationControlLaunchMode);
  }

  interface ApplicationControlDataArrayReplyCallback {
    onfailure: () => void;
    onsuccess(data?: ApplicationControlData[]): () => void;
  }

  interface ApplicationInformation {
    readonly id: ApplicationId;
    readonly name: Tizen.DOMString;
    readonly iconPath: Tizen.DOMString;
    readonly version: Tizen.DOMString;
    readonly show: boolean;
    readonly categories: Tizen.DOMString[];
    readonly installDate: Date;
    readonly size: Tizen.long;
    readonly packageId: PackageId;
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
    getAppInfo(id?: ApplicationId): ApplicationInformation;
    // 나머지 추가 필요
  }
}