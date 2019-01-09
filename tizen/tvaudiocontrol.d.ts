import {Tizen} from './tizen';

export declare module TVAudioControl {

    const enum AudioOutputMode { 
      PCM = 'PCM',
      DOLBY = 'DOLBY',
      DTS = 'DTS',
      AAC = 'AAC' 
    }
    
    const enum AudioBeepType {
      UP='UP',
      DOWN='DOWN',
      LEFT='LEFT',
      RIGHT='RIGHT',
      PAGE_LEFT='PAGE_LEFT',
      PAGE_RIGHT='PAGE_RIGHT',
      BACK='BACK',
      SELECT='SELECT',
      CANCEL='CANCEL',
      WARNING='WARNING',
      KEYPAD='KEYPAD',
      KEYPAD_ENTER='KEYPAD_ENTER',
      KEYPAD_DEL='KEYPAD_DEL',
      MOVE='MOVE',
      PREPARING='PREPARING'
    }

    interface VolumeChangeCallback {
      onchanged(volume:number):void;
    }

    interface AudioControlManager {
      setMute(mute:boolean):void;
      isMute():boolean;
      setVolume(volume:number):void;
      setVolumeUp():void;
      setVolumeDown():void;
      getVolume():number;
      setVolumeChangeListener(callback:VolumeChangeCallback):void;
      unsetVolumeChangeListener():void;
      getOutputMode():AudioOutputMode;
      playSound(type:AudioBeepType):void;
    }
  }