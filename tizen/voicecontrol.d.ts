export enum VoiceControlResultEvent {
  SUCCESS = 'SUCCESS',
  FAILURE ='FAILURE'
}

export enum VoiceControlCommandType {
  FOREGROUND = 'FOREGROUND'
}

declare module 'tizen' {
  interface TizenStatic {
    readonly voicecontrol: VoiceControl.VoiceControlClientManager
  }

  namespace VoiceControl {

    interface VoiceControlClientManager {
      getVoiceControlClient():VoiceControlClient;
    }

    interface VoiceControlClient {
      getCurrentLanguage():DOMString;
      setCommandList(list:VoiceControlCommand [], type?:VoiceControlCommandType):void;
      unsetCommandList(type?:VoiceControlCommandType):void
      addResultListener(listener:VoiceControlResultCallback):long;
      removeResultListener(id:long):void;
      addLanguageChangeListener(listener:VoiceControlLanguageChangeCallback):long;
      removeLanguageChangeListener(id:long):void;
      release():void;
    }

    interface VoiceControlCommand {
      command:DOMString;
      type:VoiceControlCommandType;
    }

    interface VoiceControlLanguageChangeCallback {
      onlanguagechanged (previous:DOMString, current:DOMString):void;
    }

    interface VoiceControlResultCallback {
      onresult(event:VoiceControlResultEvent, list:VoiceControlCommand[], results:DOMString):void;
   }
  }
}