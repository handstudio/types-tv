/// <reference path="./tizen.d.ts"/>
/// <reference path="./filesystem.d.ts"/>
/// <reference path="./tvinputdevice.d.ts"/>
/// <reference path="./voicecontrol.d.ts"/>
/// <reference path="./mediacontroller/index.d.ts"/>

export = Tizen;

import { FileSystem } from './filesystem';
import { TVInputDevice } from './tvinputdevice';
import { VoiceControl } from './voicecontrol';
import { TVAudioControl } from './tvaudiocontrol';
import { Application } from './application';
import { Download } from './download';
import { WebSetting } from './websetting';
import { MediaController } from './mediacontroller';
import { Tizen as TypeTizen} from './tizen';

declare const Tizen: Tizen.TizenStatic;
declare module Tizen {
  // tslint:disable-next-line no-empty-interface (This will be augmented)
  interface TizenStatic {
    application: Application.ApplicationManager;
    ApplicationControl: typeof Application.ApplicationControl;
    ApplicationControlData: typeof Application.ApplicationControlData;
    filesystem: FileSystem.FileSystemManager;
    tvinputdevice: TVInputDevice.TVInputDeviceManager;
    voicecontrol: VoiceControl.VoiceControlClientManager;
    tvaudiocontrol: TVAudioControl.AudioControlManager;
    download: Download.DownloadManager;
    DownloadRequest: typeof Download.DownloadRequest;
    websetting: WebSetting.WebSettingManager;
    mediacontroller: MediaController.MediaControllerManager;
    Bundle: typeof TypeTizen.Bundle;
    BundleValueType: typeof TypeTizen.BundleValueType;
    
  }
}