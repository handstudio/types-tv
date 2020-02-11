
import {Tizen} from './tizen';


interface WebAPIError {
  readonly code: number;
  readonly name: string;
  readonly message: string;
}

export declare module Download {

  const enum DownloadState { 
    QUEUED = 'QUEUED',
    DOWNLOADING = 'DOWNLOADING',
    PAUSED = 'PAUSED',
    CANCELED = 'CANCELED',
    COMPLETED = 'COMPLETED',
    FAILED = 'FAILED' 
  }
  
  const enum DownloadNetworkType {
    CELLULAR = 'CELLULAR',
    WIFI = 'WIFI',
    ALL = 'ALL' 
  }

  type DownloadHTTPHeaderFields = {
    [key: string]: any
  };

  interface DownloadCallback {
    onprogress?(downloadId: number, receivedSize: number, totalSize: number):void;
    onpaused?(downloadId: number): void;
    oncanceled?(downloadId: number): void;
    oncompleted?(downloadId: number, path: string):void;
    onfailed?(downloadId: number, error: WebAPIError): void
  }

  interface DownloadManagerObject {
    readonly download: DownloadManager;
  }

  interface DownloadManager {
    start( downloadRequest:DownloadRequest, downloadCallback?:DownloadCallback):number;
    cancel( downloadId: number):void;
    pause( downloadId: number):void;
    getState(downloadId:number):DownloadState;
    getDownloadReqeust(downloadId: number):DownloadRequest;
    getMIMEType( downloadId: number ):string;
    setListener(downloadId: number, downloadCallack?:DownloadCallback):void;
  }

  class DownloadRequest {
    constructor(
      url: Tizen.DOMString,
      destination?: Tizen.DOMString,
      fileName?: Tizen.DOMString,
      networkType?: DownloadNetworkType,
      httpHeader?: DownloadHTTPHeaderFields
    );

    url: Tizen.DOMString;
    destination: Tizen.DOMString;
    fileName: Tizen.DOMString;
    networkType: DownloadNetworkType;
    httpHeader: DownloadHTTPHeaderFields;
  }
}