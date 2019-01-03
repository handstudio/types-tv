import {
  AppCommonKeyName,
  AppCommonScreenSaverState,
  AppCommonRecommendedWordsType,
  AppcommonTarget,
  AppcommonAction
} from './enum';

declare module './index' {
  interface WebApisStatic {
    appcommon: AppCommon.AppCommonManager;
    AppCommonKeyName: typeof AppCommonKeyName;
    AppCommonScreenSaverState: typeof AppCommonScreenSaverState;
    AppCommonRecommendedWordsType: typeof AppCommonRecommendedWordsType;
    AppcommonTarget: typeof AppcommonTarget;
    AppcommonAction: typeof AppcommonAction;
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
