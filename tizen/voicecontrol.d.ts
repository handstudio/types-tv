import {Tizen} from './tizen';

export declare module VoiceControl {

  enum VoiceControlResultEvent {
    SUCCESS = 'SUCCESS',
    FAILURE ='FAILURE'
  }

  enum VoiceControlCommandType {
    FOREGROUND = 'FOREGROUND'
  }

  interface VoiceControlClientManager {
    getVoiceControlClient():VoiceControlClient;
  }

  interface VoiceControlClient {
    getCurrentLanguage():Tizen.DOMString;
    setCommandList(list:VoiceControlCommand [], type?:VoiceControlCommandType):void;
    unsetCommandList(type?:VoiceControlCommandType):void
    addResultListener(listener:VoiceControlResultCallback):Tizen.long;
    removeResultListener(id:Tizen.long):void;
    addLanguageChangeListener(listener:VoiceControlLanguageChangeCallback):Tizen.long;
    removeLanguageChangeListener(id:Tizen.long):void;
    release():void;
  }

  interface VoiceControlCommand {
    command:Tizen.DOMString;
    type:VoiceControlCommandType;
  }

  interface VoiceControlLanguageChangeCallback {
    onlanguagechanged (previous:Tizen.DOMString, current:Tizen.DOMString):void;
  }

  interface VoiceControlResultCallback {
    onresult(event:VoiceControlResultEvent, list:VoiceControlCommand[], results:Tizen.DOMString):void;
  }
}