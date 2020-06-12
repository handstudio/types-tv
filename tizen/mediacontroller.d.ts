import {Tizen} from './tizen';

export declare module MediaController {

  type ApplicationId = Tizen.DOMString;

  const enum MediaControllerServerState {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
  }

  const enum MediaControllerPlaybackState {
    PLAY = 'PLAY',
    PAUSE = 'PAUSE',
    STOP = 'STOP',
    NEXT = 'NEXT',
    PREV = 'PREV',
    FORWARD = 'FORWARD',
    REWIND = 'REWIND'
  }

  interface MediaControllerServer {
    readonly playbackInfo: MediaControllerPlaybackInfo;
    updatePlaybackState(state:MediaControllerPlaybackState):void;
    updatePlaybackPosition(position: Tizen.ulong): void;
    updateShuffleMode(mode: boolean): void;
    updateRepeatMode(mode: boolean): void;
    updateMetadata (metadata: MediaControllerMetadata): void;
    addChangeRequestPlaybackInfoListener(listener: MediaControllerChangeRequestPlaybackInfoCallback): Tizen.long;
    removeChangeRequestPlaybackInfoListener(watchId: Tizen.long): void;
    addCommandListener(listener: MediaControllerReceiveCommandCallback): Tizen.long;
    removeCommandListener(watchId: Tizen.long): void;
  }

  interface MediaControllerClient {
    findServers(successCallback:MediaControllerServerInfoArraySuccessCallback, errorCallback?: Tizen.ErrorCallback): void;
    getLatestServerInfo(): MediaControllerServerInfo | null;
  }

  interface MediaControllerServerInfo {
    readonly name: ApplicationId;
    readonly state: MediaControllerServerState;
    readonly playbackInfo: MediaControllerPlaybackInfo;
    sendPlaybackState(state: MediaControllerPlaybackState, successCallback?: Tizen.SuccessCallback, errorCallback?: Tizen.ErrorCallback): void;
    sendPlaybackPosition(position: Tizen.ulong, successCallback?: Tizen.SuccessCallback, errorCallback?: Tizen.ErrorCallback):void;
    sendShuffleMode(mode: boolean, successCallback?: Tizen.SuccessCallback, errorCallback?: Tizen.ErrorCallback): void;
    sendRepeatMode(mode: boolean, successCallback?: Tizen.SuccessCallback, errorCallback?: Tizen.ErrorCallback): void;
    sendCommand(command: Tizen.DOMString, data: object, successCallback: MediaControllerSendCommandSuccessCallback, errorCallback?: Tizen.ErrorCallback): void;
    addServerStatusChangeListener(listener: MediaControllerServerStatusChangeCallback): number;
    removeServerStatusChangeListener(watchId: number):void;
    addPlaybackInfoChangeListener(listener: MediaControllerPlaybackInfoChangeCallback): number;
    removePlaybackInfoChangeListener(watchId: number): void;
  }

  interface MediaControllerPlaybackInfo {
    readonly state: MediaControllerPlaybackState;
    readonly position: Tizen.ulong;
    readonly shuffleMode: boolean;
    readonly repeatMode: boolean;
    readonly metadata: MediaControllerMetadata;
  }

  interface MediaControllerMetadata {
    title: Tizen.DOMString;
    artist: Tizen.DOMString;
    album: Tizen.DOMString;
    author: Tizen.DOMString;
    genre: Tizen.DOMString;
    duration: Tizen.DOMString;
    date: Tizen.DOMString;
    copyright: Tizen.DOMString;
    description: Tizen.DOMString;
    trackNum: Tizen.DOMString;
    picture: Tizen.DOMString;
  }

  type MediaControllerServerInfoArraySuccessCallback = (servers: MediaControllerServerInfo[]) => void;
  type MediaControllerSendCommandSuccessCallback = (data?: object) => void;
  type MediaControllerReceiveCommandCallback = (clientAppName: ApplicationId, command: Tizen.DOMString, data:object) => object | void;
  type MediaControllerServerStatusChangeCallback = (status: MediaControllerServerState) => void;
  
  interface MediaControllerPlaybackInfoChangeCallback	{
    onplaybackchanged?(state: MediaControllerPlaybackState, position: Tizen.ulong): void;
    onshufflemodechanged?(mode: boolean): void;
    onrepeatmodechanged?(mode: boolean): void;
    onmetadatachanged?(metadata: MediaControllerMetadata): void;
  }

  interface MediaControllerChangeRequestPlaybackInfoCallback {
    onplaybackstaterequest?(state: MediaControllerPlaybackState): void;
    onplaybackpositionrequest?(position: Tizen.ulong): void;
    onshufflemoderequest?(mode: boolean): void;
    onrepeatmoderequest?(mode: boolean): void;
  }

  interface MediaControllerManager {
    getClient(): MediaControllerClient;
    createServer(): MediaControllerServer;
  }
}