/// <reference path="./tizen.d.ts"/>
/// <reference path="./filesystem.d.ts"/>
/// <reference path="./tvinputdevice.d.ts"/>
/// <reference path="./voicecontrol.d.ts"/>

export = Tizen;

import { FileSystem } from './filesystem';
import { TVInputDevice } from './tvinputdevice';
import { VoiceControl } from './voicecontrol';
import { TVAudioControl } from './tvaudiocontrol';
import { Application } from './application';
import { Download } from './download';
import { WebSetting } from './websetting';

declare const Tizen: Tizen.TizenStatic;
declare module Tizen {
  // tslint:disable-next-line no-empty-interface (This will be augmented)
  interface TizenStatic {
    ApplicationControl: typeof Application.ApplicationControl;
    filesystem: FileSystem.FileSystemManager;
    tvinputdevice: TVInputDevice.TVInputDeviceManager;
    voicecontrol: VoiceControl.VoiceControlClientManager;
    tvaudiocontrol: TVAudioControl.AudioControlManager;
    application: Application.ApplicationManager;
    download: Download.DownloadManager;
    DownloadRequest: typeof Download.DownloadRequest;
    websetting: WebSetting.WebSettingManager;
  }
}