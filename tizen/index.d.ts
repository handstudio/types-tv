/// <reference path="./tizen.d.ts"/>
/// <reference path="./filesystem.d.ts"/>
/// <reference path="./tvinputdevice.d.ts"/>
/// <reference path="./voicecontrol.d.ts"/>

export = Tizen;

import { FileSystem } from './filesystem';
import { TVInputDevice } from './tvinputdevice';
import { VoiceControl } from './voicecontrol';
import { TVAudioControl } from './tvaudiocontrol';

declare const Tizen: Tizen.TizenStatic;
declare module Tizen {
  // tslint:disable-next-line no-empty-interface (This will be augmented)
  interface TizenStatic {
    filesystem: FileSystem.FileSystemManager;
    tvinputdevice: TVInputDevice.TVInputDeviceManager;
    voicecontrol: VoiceControl.VoiceControlClientManager;
    tvaudiocontrol: TVAudioControl.AudioControlManager;
  }
}
