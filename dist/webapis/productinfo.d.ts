import { WebApis } from './webapis';

declare module ProductInfo {
  interface ProductInfoManagerObject {
    productinfo: ProductInfoManager;
  }

  interface ProductInfoManager {
    ProductInfoConfigKey: ProductInfoConfigKey;
    ProductInfoNoGlass3dSupport: ProductInfoNoGlass3dSupport;
    ProductInfoSiServerType: ProductInfoSiServerType;

    getVersion(): string
    getFirmware(): string
    getDuid(): string
    getModelCode(): string
    getModel(): string
    getSmartTVServerType(): number
    getSmartTVServerVersion(): string
    getTunerEpop(): string
    isSoccerModeEnabled(): boolean
    isTtvSupported(): boolean
    isUdPanelSupported(): boolean
    is8KPanelSupported(): boolean
    getRealModel(): string
    getNoGlass3dSupport(): ProductInfoNoGlass3dSupport
    getLocalSet(): string
    getSystemConfig(key: number): string
    setSystemConfig(
      key: number,
      value: string,
      onsuccess?: WebApis.SuccessCallback,
      onerror?: WebApis.ErrorCallback
    ): void;
    addSystemConfigChangeListener(listener: ProductInfoConfigChangeCallback, key: number): number;
    removeSystemConfigChangeListener(listenerId: number): void;
  }

  type ProductInfoConfigChangeCallback = () => void;

  const enum ProductInfoConfigKey {
    CONFIG_KEY_DATA_SERVICE = 0,
    CONFIG_KEY_SERVICE_COUNTRY = 1
  }

  const enum ProductInfoNoGlass3dSupport {
    NO_GLASS_3D_NOT_SUPPORTED = 0,
    NO_GLASS_3D_SUPPORTED = 1
  }

  const enum ProductInfoSiServerType {
    SI_TYPE_OPERATIING_SERVER = 0,
    SI_TYPE_DEVELOPMENT_SERVER = 1,
    SI_TYPE_DEVELOPING_SERVER = 2
  }
}
