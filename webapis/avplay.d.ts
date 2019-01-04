import { WebApis } from './webapis';

export declare module AVPlay {

  enum AVPlayPlayerState {
    NONE = 'NONE',
    IDLE = 'IDLE',
    READY = 'READY',
    PLAYING = 'PLAYING',
    PAUSED = 'PAUSED'
  }

  enum AVPlayDisplayMode {
    PLAYER_DISPLAY_MODE_LETTER_BOX = 'PLAYER_DISPLAY_MODE_LETTER_BOX',
    PLAYER_DISPLAY_MODE_FULL_SCREEN = 'PLAYER_DISPLAY_MODE_FULL_SCREEN',
    PLAYER_DISPLAY_MODE_AUTO_ASPECT_RATIO = 'PLAYER_DISPLAY_MODE_AUTO_ASPECT_RATIO'
  }

  enum AVPlayBufferOption {
    PLAYER_BUFFER_FOR_PLAY = 'PLAYER_BUFFER_FOR_PLAY',
    PLAYER_BUFFER_FOR_RESUME = 'PLAYER_BUFFER_FOR_RESUME'
  }

  enum AVPlayBufferSizeUnit {
    PLAYER_BUFFER_SIZE_IN_BYTE = 'PLAYER_BUFFER_SIZE_IN_BYTE',
    PLAYER_BUFFER_SIZE_IN_SECOND = 'PLAYER_BUFFER_SIZE_IN_SECOND'
  }

  enum AVPlayStreamingPropertyType {
    COOKIE = 'COOKIE',
    USER_AGENT = 'USER_AGENT',
    PREBUFFER_MODE = 'PREBUFFER_MODE',
    ADAPTIVE_INFO = 'ADAPTIVE_INFO',
    SET_MODE_4K = 'SET_MODE_4K',
    PROPERTY_HD_AUDIO = 'PROPERTY_HD_AUDIO',
    LISTEN_SPARSE_TRACK = 'LISTEN_SPARSE_TRACK',
    IS_LIVE = 'IS_LIVE',
    AVAILABLE_BITRATE = 'AVAILABLE_BITRATE',
    GET_LIVE_DURATION = 'GET_LIVE_DURATION',
    CURRENT_BANDWIDTH = 'CURRENT_BANDWIDTH',
    WIDEVINE = 'WIDEVINE'
  }

  enum AVPlayDrmType {
    PLAYREADY = 'PLAYREADY',
    VERIMATRIX = 'VERIMATRIX',
    WIDEVINE_CDM = 'WIDEVINE_CDM'
  }

  enum AVPlayDrmOperation {
    SetProperties = 'SetProperties',
    InstallLicense = 'InstallLicense',
    ProcessInitiator = 'ProcessInitiator',
    GetUID = 'GetUID',
    Initialize = 'Initialize',
    Finalize = 'Finalize',
    widevine_license_data = 'widevine_license_data',
    widevine_app_session = 'widevine_app_session',
    widevine_data_type = 'widevine_data_type'
  }

  enum AVPlayStreamType {
    VIDEO = 'VIDEO',
    AUDIO = 'AUDIO',
    TEXT = 'TEXT'
  }

  enum AVPlayError {
    PLAYER_ERROR_NONE = 'PLAYER_ERROR_NONE',
    PLAYER_ERROR_INVALID_PARAMETER = 'PLAYER_ERROR_INVALID_PARAMETER',
    PLAYER_ERROR_NO_SUCH_FILE = 'PLAYER_ERROR_NO_SUCH_FILE',
    PLAYER_ERROR_INVALID_OPERATION = 'PLAYER_ERROR_INVALID_OPERATION',
    PLAYER_ERROR_SEEK_FAILED = 'PLAYER_ERROR_SEEK_FAILED',
    PLAYER_ERROR_INVALID_STATE = 'PLAYER_ERROR_INVALID_STATE',
    PLAYER_ERROR_NOT_SUPPORTED_FILE = 'PLAYER_ERROR_NOT_SUPPORTED_FILE',
    PLAYER_ERROR_INVALID_URI = 'PLAYER_ERROR_INVALID_URI',
    PLAYER_ERROR_CONNECTION_FAILED = 'PLAYER_ERROR_CONNECTION_FAILED',
    PLAYER_ERROR_GENEREIC = 'PLAYER_ERROR_GENEREIC'
  }

  enum AVPlayEvent {
    PLAYER_MSG_NONE = 'PLAYER_MSG_NONE',
    PLAYER_MSG_RESOLUTION_CHANGED = 'PLAYER_MSG_RESOLUTION_CHANGED',
    PLAYER_MSG_BITRATE_CHANGE = 'PLAYER_MSG_BITRATE_CHANGE',
    PLAYER_MSG_FRAGMENT_INFO = 'PLAYER_MSG_FRAGMENT_INFO',
    PLAYER_SPARSE_TRACK_DETECT = 'PLAYER_SPARSE_TRACK_DETECT',
    PLAYER_STREAMING_EVENT = 'PLAYER_STREAMING_EVENT',
    PLAYER_MSG_HTTP_ERROR_CODE = 'PLAYER_MSG_HTTP_ERROR_CODE',
    PLAYER_MSG_DRM_CHALLENGE_DATA = 'PLAYER_MSG_DRM_CHALLENGE_DATA'
  }

  interface AVPlayStreamInfo {
    index: number;
    adaption_index: number;
    alternate_index: number;
    type: AVPlayStreamType;
    extra_info: string;
  }

  interface AVPlaySubtitleAttribute {
    type: string;
    start: number;
    stop: number;
  }

  interface AVPlayPlaybackCallback {
    onbufferingstart(): void;
    onbufferingprogress(percent: number): void;
    onbufferingcomplete(): void;
    oncurrentplaytime(currentTime: number): void;
    onstreamcompleted(): void;
    onevent(eventid: AVPlayEvent, data: string): void;
    onerror(eventid: AVPlayError): void;
    ondrmevent(type: AVPlayDrmType, data: string): void;
    onsubtitlechange(
      duration: number,
      subtitles: string,
      type: number,
      attriCount: number,
      attributes: AVPlaySubtitleAttribute
    ): void;
  }

  interface AVPlayManager {
    open(url: WebApis.DOMString): void;
    close(): void;
    prepare(): void;
    prepareAsync(
      successCallback?: WebApis.SuccessCallback,
      errorCallback?: WebApis.ErrorCallback
    ): void;
    setDisplayRect(x: WebApis.ulong, y: WebApis.ulong, width: WebApis.ulong, height: WebApis.ulong): void;
    play(): void;
    seekTo(
      milliseconds: WebApis.long,
      successCallback?: WebApis.SuccessCallback,
      errorCallback?: WebApis.ErrorCallback
    ): void;
    stop(): void;
    getState(): AVPlayPlayerState;
    pause(): void;
    jumpForward(
      milliseconds: WebApis.long,
      successCallback?: WebApis.SuccessCallback,
      errorCallback?: WebApis.ErrorCallback
    ): void;
    jumpBackward(
      milliseconds: WebApis.long,
      successCallback?: WebApis.SuccessCallback,
      errorCallback?: WebApis.ErrorCallback
    ): void;
    getDuration(): WebApis.ulong;
    getCurrentTime(): WebApis.ulong;
    setTimeoutForBuffering(seconds: WebApis.ulong): void;
    setBufferingParam(
      option: AVPlayBufferOption,
      unit: AVPlayBufferSizeUnit,
      amount: WebApis.ulong
    ): void;
    setSpeed(playbackSpeed: WebApis.long): void;
    setListener(playbackCallback: AVPlayPlaybackCallback): void;
    setDrm(
      drmType: AVPlayDrmType,
      drmOperation: AVPlayDrmOperation,
      jsonParam: WebApis.DOMString
    ): WebApis.DOMString;
    setSilentSubtitle(onoff: boolean): void;
    setExternalSubtitlePath(filePath: WebApis.DOMString): void;
    setSubtitlePosition(position: WebApis.long): void;
    setDisplayMethod(displayMode: AVPlayDisplayMode): void;
    setSelectTrack(trackType: AVPlayStreamType, trackIndex: WebApis.long): void;
    getCurrentStreamInfo(): AVPlayStreamInfo;
    getTotalTrackInfo(): AVPlayStreamInfo[];
    setStreamingProperty(
      propertyType: AVPlayStreamingPropertyType,
      propparam: any
    ): void;
    getStreamingProperty(
      propertyType: AVPlayStreamingPropertyType
    ): WebApis.DOMString;
    getVersion(): WebApis.DOMString;
    suspend(): void;
    restore(URL?: WebApis.DOMString, resumeTime?: WebApis.ulong, bPrepare?: boolean): void;
  }
}
