import webapis = require('./index');

export enum AppCommonKeyName {
  SmartHub = 10071,
  Power = 409,
  SMODE = 10197,
  PMODE = 10141,
  More = 10148,
  BTVoice = 10224,
  Color = 10385,
  BTPairing = 10161,
  Sleep = 10150,
  Netflix = 10234,
  NoiseReduction = 10519,
  Help = 10520,
  Content = 10497,
  HotelMovies = 10494,
  HotelLanguage = 10495,
  HotelTVGuide = 10496,
  NR = 10521,
  HotelRoomControl = 10522,
  Ambient = 10530,
  PanelPower = 10531,
  PanelSource = 10532,
  PanelMenu = 10533
}

export enum AppCommonScreenSaverState {
  SCREEN_SAVER_OFF = 0,
  SCREEN_SAVER_ON = 1
}

export enum AppCommonRecommendedWordsType {
  RECOMMENDED_WORDS_DISABLE = 0,
  RECOMMENDED_WORDS_ENABLE = 1
}
export enum AppcommonTarget {
  CONFIG_LAST_SOURCE = 0
}

export enum AppcommonAction {
  CONFIG_LAUNCH = 0
}

declare module './index' {
  interface WebApisStatic {
    appcommon: AppCommon.AppCommonManager;
  }

  namespace AppCommon {
    interface AppCommonManager {
      AppCommonScreenSaverState: AppCommonScreenSaverState;
      AppcommonTarget: AppcommonTarget;
      AppcommonAction: AppcommonAction;

      getVersion(): DOMString;
      setScreenSaver(
        state: AppCommonScreenSaverState,
        onsuccess?: SuccessCallback,
        onerror?: ErrorCallback
      ): void;
    }

    interface AppCommonInputDeviceKey {
      readonly name: DOMString;
      readonly code: ulong;
    }
  }
}
