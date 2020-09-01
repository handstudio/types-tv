import { WebApis } from './webapis';

export declare module Logging {
  interface LoggingManager {
    setServiceConfigInfo: ( servicename: WebApis.DOMString, queuemax: WebApis.long, expiration: WebApis.long, threshold: WebApis.long, loglevel: WebApis.long,  serverUrl: WebApis.DOMString, onsuccess?: WebApis.SuccessCallback, onerror?: WebApis.ErrorCallback) => void;
    addEventLog: ( eventName: WebApis.DOMString,  time: WebApis.DOMString,  category: WebApis.DOMString,  value: WebApis.DOMString,  desc: WebApis.DOMString, onsuccess?: WebApis.SuccessCallback, onerror?: WebApis.ErrorCallback) => void;
  }
}
