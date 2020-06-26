import { Tizen } from './tizen';

export declare module Application {
  // 1. Type Definitions
  type ApplicationId = Tizen.DOMString;
  type ApplicationContextId = Tizen.DOMString;
  type UserEventData = Object;
  type EventData = SystemEventData | UserEventData;
  enum ApplicationControlLaunchMode {
    SINGLE = 'SINGLE',
    GROUP = 'GROUP',
  }
  enum ApplicationUsageMode {
    RECENTLY = 'RECENTLY',
    FREQUENTLY = 'FREQUENTLY',
  }
  type PackageId = Tizen.DOMString;

  // 2.1
  interface ApplicationManagerObject {
    readonly application: ApplicationManager;
  }

  // 2.2
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
    kill(
      contextId: ApplicationContextId,
      successCallback?: Tizen.SuccessCallback,
      errorCallback?: Tizen.ErrorCallback
    ): void;
    launch(id: ApplicationId , successCallback?:Tizen.SuccessCallback , errorCallback?:Tizen.ErrorCallback): void;
    findAppControl(appControl:ApplicationControl, successCallback:FindAppControlSuccessCallback, errorCallback?:Tizen.ErrorCallback): void;
    getAppsContext(successCallback:ApplicationContextArraySuccessCallback, errorCallback?:Tizen.ErrorCallback):void;
    getAppContext(contextId:ApplicationContextId):ApplicationContext ;
    getAppsInfo(successCallback:ApplicationInformationArraySuccessCallback, errorCallback?:Tizen.ErrorCallback): void;
    getAppInfo(id:ApplicationId):ApplicationInformation;
    getAppCerts(id?:ApplicationId):ApplicationCertificate[] ;
    getAppSharedURI(id?:ApplicationId):Tizen.DOMString;
    getAppMetaData(id?:ApplicationId):ApplicationMetaData[] ;
    addAppStatusChangeListener(eventCallback:StatusEventCallback, appId?:ApplicationId):Tizen.long;
    removeAppStatusChangeListener(watchId:Tizen.long):void;
  }

  // 2.3
  interface ApplicationUsageFilter {
    timeSpan?: Tizen.long;
    startTime?: Date;
    endTime?: Date;
  }

  // 2.4
  interface Application {
    readonly appInfo: ApplicationInformation;
    readonly contextId: ApplicationContextId;
    exit(): void;
    hide(): void;
    getRequestedAppControl(): RequestedApplicationControl;
    addEventListener(event: EventInfo, callback: EventCallback): Tizen.long;
    removeEventListener(watchId: Tizen.long): void;
    broadcastEvent(event: EventInfo, data: UserEventData): void;
    broadcastTrustedEvent(event: EventInfo, data: UserEventData): void;
  }

  // 2.5
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

  // 2.6
  interface ApplicationContext {
    readonly id: ApplicationContextId;
    readonly appId: ApplicationId;
  }

  // 2.7
  interface ApplicationBatteryUsage {
    readonly appId: ApplicationId;
    readonly batteryUsage: number;
  }

  // 2.8
  interface ApplicationUsage {
    readonly appId: ApplicationId;
    readonly totalCount: Tizen.ulong;
    readonly totalDuration: Tizen.ulong;
    readonly lastTime: Date;
  }

  // 2.9
  interface ApplicationControlData {
    key: Tizen.DOMString;
    value: Tizen.DOMString[];
  }

  // 2.10
  class ApplicationControl {
    constructor(
      operation: Tizen.DOMString,
      uri?: Tizen.DOMString,
      mime?: Tizen.DOMString,
      category?: Tizen.DOMString,
      data?: ApplicationControlData[],
      launchMode?: ApplicationControlLaunchMode
    );
  }
  
  // 2.11
  interface RequestedApplicationControl {
    readonly appControl: ApplicationControl;
    readonly callerAppId: ApplicationId;
    replyResult(data?: ApplicationControlData): void;
    replyFailure(): void;
  }

  // 2.12
  interface ApplicationCertificate {
    readonly type: Tizen.DOMString;
    readonly value: Tizen.DOMString;
  }

  // 2.13
  interface ApplicationMetaData {
    readonly key: Tizen.DOMString;
    readonly value: Tizen.DOMString;
  }

  // 2.14
  interface ApplicationInformationArraySuccessCallback {
    onsuccess(informationArray: ApplicationInformation[]): () => void;
  }

  // 2.15
  interface FindAppControlSuccessCallback {
    onsuccess(informationArray: ApplicationInformation[], appControl: ApplicationControl): () => void;
  }

  // 2.16
  interface ApplicationContextArraySuccessCallback {
    onsuccess(contexts: ApplicationContext[]): () => void;
  }

  // 2.17
  interface ApplicationControlDataArrayReplyCallback {
    onsuccess(data?:ApplicationControlData[]): () => void;
    onfailure: () => void;
  }

  // 2.18
  interface SystemEventData {
    value: Tizen.DOMString;
    type: Tizen.DOMString;
  }

  // 2.19
  interface EventCallback {
    onevent(event: EventInfo, data: EventData): () => void;
  }

  // 2.20
  interface StatusEventCallback {
    onchange(appId: ApplicationId, isActive: boolean): () => void;
  }

  // 2.21
  interface EventInfo {
    appId: ApplicationId;
    name: Tizen.DOMString;
  }
}
