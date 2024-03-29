import { WebApis } from './webapis';

declare module AppCommon {

  const enum AppCommonKeyName {
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

  const enum AppCommonScreenSaverState {
    SCREEN_SAVER_OFF = 0,
    SCREEN_SAVER_ON = 1
  }

  const enum AppCommonRecommendedWordsType {
    RECOMMENDED_WORDS_DISABLE = 0,
    RECOMMENDED_WORDS_ENABLE = 1
  }
  const enum AppcommonTarget {
    CONFIG_LAST_SOURCE = 0
  }

  const enum AppcommonAction {
    CONFIG_LAUNCH = 0
  }

  interface AppCommonManager {
    AppCommonScreenSaverState: AppCommonScreenSaverState;
    AppcommonTarget: AppcommonTarget;
    AppcommonAction: AppcommonAction;

    unregisterKey: (argv: AppCommonInputDeviceKey['name'][]) => void;
    registerKey: (argv: AppCommonInputDeviceKey['name'][]) => void;
    getSpecialSupportedKeys(): AppCommonInputDeviceKey[];
    getVersion(): WebApis.DOMString;
    setScreenSaver(
      state: AppCommonScreenSaverState,
      onsuccess?: WebApis.SuccessCallback,
      onerror?: WebApis.ErrorCallback
    ): void;
    generateKey: (keyName: string) => void;
  }

  interface AppCommonInputDeviceKey {
    readonly name: WebApis.DOMString;
    readonly code: WebApis.ulong;
  }

}
