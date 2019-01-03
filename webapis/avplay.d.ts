import {
  AVPlayEvent,
  AVPlayDrmType,
  AVPlayPlayerState,
  AVPlayBufferOption,
  AVPlayBufferSizeUnit,
  AVPlayDrmOperation,
  AVPlayDisplayMode,
  AVPlayStreamType,
  AVPlayStreamingPropertyType,
  AVPlayError
} from './enum';

declare module './index' {
  interface WebApisStatic {
    avplay: AVPlay.AVPlayManager;
    AVPlayStreamInfo: AVPlayStreamInfo;
    AVPlaySubtitleAttribute: AVPlaySubtitleAttribute;
    AVPlayPlaybackCallback: AVPlayPlaybackCallback;
    AVPlayEvent: typeof AVPlayEvent;
    AVPlayDrmType: typeof AVPlayDrmType;
    AVPlayPlayerState: typeof AVPlayPlayerState;
    AVPlayBufferOption: typeof AVPlayBufferOption;
    AVPlayBufferSizeUnit: typeof AVPlayBufferSizeUnit;
    AVPlayDrmOperation: typeof AVPlayDrmOperation;
    AVPlayDisplayMode: typeof AVPlayDisplayMode;
    AVPlayStreamType: typeof AVPlayStreamType;
    AVPlayStreamingPropertyType: typeof AVPlayStreamingPropertyType;
    AVPlayError: typeof AVPlayError;
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

  export namespace AVPlay {

    export interface AVPlayManager {
      open(url: DOMString): void;
      close(): void;
      prepare(): void;
      prepareAsync(
        successCallback?: SuccessCallback,
        errorCallback?: ErrorCallback
      ): void;
      setDisplayRect(x: ulong, y: ulong, width: ulong, height: ulong): void;
      play(): void;
      seekTo(
        milliseconds: long,
        successCallback?: SuccessCallback,
        errorCallback?: ErrorCallback
      ): void;
      stop(): void;
      getState(): AVPlayPlayerState;
      pause(): void;
      jumpForward(
        milliseconds: long,
        successCallback?: SuccessCallback,
        errorCallback?: ErrorCallback
      ): void;
      jumpBackward(
        milliseconds: long,
        successCallback?: SuccessCallback,
        errorCallback?: ErrorCallback
      ): void;
      getDuration(): ulong;
      getCurrentTime(): ulong;
      setTimeoutForBuffering(seconds: ulong): void;
      setBufferingParam(
        option: AVPlayBufferOption,
        unit: AVPlayBufferSizeUnit,
        amount: ulong
      ): void;
      setSpeed(playbackSpeed: long): void;
      setListener(playbackCallback: AVPlayPlaybackCallback): void;
      setDrm(
        drmType: AVPlayDrmType,
        drmOperation: AVPlayDrmOperation,
        jsonParam: DOMString
      ): DOMString;
      setSilentSubtitle(onoff: boolean): void;
      setExternalSubtitlePath(filePath: DOMString): void;
      setSubtitlePosition(position: long): void;
      setDisplayMethod(displayMode: AVPlayDisplayMode): void;
      setSelectTrack(trackType: AVPlayStreamType, trackIndex: long): void;
      getCurrentStreamInfo(): AVPlayStreamInfo;
      getTotalTrackInfo(): AVPlayStreamInfo[];
      setStreamingProperty(
        propertyType: AVPlayStreamingPropertyType,
        propparam: any
      ): void;
      getStreamingProperty(
        propertyType: AVPlayStreamingPropertyType
      ): DOMString;
      getVersion(): DOMString;
      suspend(): void;
      restore(URL?: DOMString, resumeTime?: ulong, bPrepare?: boolean): void;
    }
  }
}
