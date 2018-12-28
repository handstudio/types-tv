export = Msf;
import {ConnectEvent, SearchEvent} from './enum'

declare const Msf: Msf.MsfStatic;
declare namespace Msf {
  // tslint:disable-next-line no-empty-interface (This will be augmented)

  type double = number;
  type long = number;
  type ulong = number;
  type DOMString = string;
  type SuccessCallback = () => void;
  type ErrorCallback = (error: WebAPIError) => void;
  type SeachCallback = (error: WebAPIError, ) => void;
  type ClientCallback = (error:WebAPIError, client:Client) => void
  type Blob = any;

  interface WebAPIError {
    readonly code: ulong;
    readonly name: DOMString;
    readonly message: DOMString;
  }

  interface MsfStatic {
    search(callback?:(err:WebAPIError, result:Service []) => void): Search,
    local(callback:(error:WebAPIError, client:Service) => void):void;
    remote(uri:string, callback:(error:WebAPIError, service:Service) => void ):void;
  }


  //https://smartviewsdk.github.io/API-GUIDE/js-api/docs/api.html#Application
  interface Application {
    constructor(service:Service, id:string, channelURI:string):Application;
    id:string;
    clients: ClientList;
    isConnected: boolean;
    connectionTimeout: boolean;
    connect(attributes: object, callback:ClientCallback):void;
    disconnect(exitOnRemote?:boolean, callback?:ClientCallback):void;
    install(callback:(err:WebAPIError)=>void):void;
    setSecurityMode(flag:boolean):void; //doc 이상함 
    publish(event:string, message?:any, target?:string | string[], payload?: Blob | ArrayBuffer):void;
    on(type:ConnectEvent, listener:(client:Client)=>void):EventEmitter;
    once(type:ConnectEvent, listener:(client:Client)=>void):EventEmitter;
    off(type:ConnectEvent, listener:(client:Client)=>void):EventEmitter;
    removeAllListener(event:ConnectEvent):EventEmitter;

  }

  // https://smartviewsdk.github.io/API-GUIDE/js-api/docs/api.html#Channel
  interface Channel {
    constructor():Channel;
    clients:ClientList;
    isConnected:boolean;
    connectionTimeout:boolean;
    connect(attributes:object, callback:ClientCallback):void;
    setSecurityMode(flag:boolean):void; //doc 이상함 
    disconnect(callback:ClientCallback):void;
    publish(event:string, message?:any, target?:string | string[], payload?: Blob | ArrayBuffer):void;
    on(type:ConnectEvent, listener:(client:Client)=>void):EventEmitter;
    once(type:ConnectEvent, listener:(client:Client)=>void):EventEmitter;
    off(type:ConnectEvent, listener:(client:Client)=>void):EventEmitter;
    removeAllListener(event:ConnectEvent):EventEmitter;
  }

  // https://smartviewsdk.github.io/API-GUIDE/js-api/docs/api.html#Client
  interface Client {
    constructor():Client;
    id:string;
    attributes:object;
    isHost:boolean;
    connectTime: number;
  }

  // https://smartviewsdk.github.io/API-GUIDE/js-api/docs/api.html#ClientList
  interface ClientList {
    constructor(): ClientList;
    me(): Client;
    getById(id:string): Client;
  }

  // https://smartviewsdk.github.io/API-GUIDE/js-api/docs/api.html#EventEmitter
  interface EventEmitter {
    constructor(): EventEmitter;
    on(type: ConnectEvent, listener:(client: Client)=>void):EventEmitter;
    once(type: ConnectEvent, listener:(client: Client)=>void):EventEmitter;
    off(type: ConnectEvent, listener:(client: Client)=>void):EventEmitter;
    removeAllListener(event:ConnectEvent):EventEmitter;
  }

  // https://smartviewsdk.github.io/API-GUIDE/js-api/docs/api.html#Search
  interface Search{
    constructor(): Search;
    start(): void;
    start(): void;
    on(type: SearchEvent, listener:(arg:Service | WebAPIError)=>void):EventEmitter;
    once(type: SearchEvent, listener:(arg:Service | WebAPIError)=>void):EventEmitter;
    off(type: SearchEvent, listener:(arg:Service | WebAPIError)=>void):EventEmitter;
    removeAllListener(event:SearchEvent):EventEmitter;
  }

  // https://smartviewsdk.github.io/API-GUIDE/js-api/docs/api.html#Service
  interface Service {
    id: string;
    name: string;
    version: string;
    type: string;
    uri: string;
    device: string;
    application(id:string, channelUri:string):Application;
    channel(uri:string):Channel
  }
}

declare global {
  // This contains duplicates of some types in lib.dom.d.ts in order to support typescript 2.0
  const msf: Msf.MsfStatic;
  interface Window {
      msf: Msf.MsfStatic;
  }
}
