import { WebApis } from './webapis';

export declare module Network {

  interface NetworkManager {
    // readonly attribute NetworkActiveConnectionType NetworkActiveConnectionType;
    // readonly attribute NetworkIpMode NetworkIpMode;
    // readonly attribute NetworkState NetworkState;
    // readonly attribute NetworkWiFiSecurityMode NetworkWiFiSecurityMode;
    // readonly attribute NetworkWiFiEncryptionType NetworkWiFiEncryptionType;

    getVersion: () => WebApis.DOMString;
    isConnectedToGateway: () => boolean;
    getIpMode: () => NetworkIpMode;
    getSubnetMask: () => WebApis.DOMString;
    getGateway: () => WebApis.DOMString;
    getMac: () => WebApis.DOMString;
    getDns: () => WebApis.DOMString;
    getIp: () => WebApis.DOMString;
    getActiveConnectionType: () => NetworkActiveConnectionType;
    addNetworkStateChangeListener: (listener: NetworkStateChangedCallback) => WebApis.long;
    removeNetworkStateChangeListener: (listenerId: WebApis.long) => void;
    getWiFiSsid: () => WebApis.DOMString;
    getWiFiSignalStrengthLevel: () => number;
    getWiFiSecurityMode: () => NetworkWiFiSecurityMode;
    getWiFiEncryptionType: () => NetworkWiFiEncryptionType;
    getSecondaryDns: () => WebApis.DOMString;
    setDhcpOption60Field: (vendorName: WebApis.DOMString) => void;
    removeDhcpOption60Field: () => void;
    getCurrentDhcpOption60Field: () => WebApis.DOMString;
    checkCurrentIpWith60Field: () => WebApis.DOMString;
  };

  interface NetworkStateChangedCallback {
    onchange: (state: NetworkState) => void;
  };

  enum NetworkIpMode {
    NONE = 0,
    STATIC = 1,
    DYNAMIC = 2,
    AUTO = 3,
    FIXED = 4,
    UNKNOWN = 5,
  };

  enum NetworkActiveConnectionType {
    DISCONNECTED = 0,
    WIFI = 1,
    CELLULAR = 2,
    ETHERNET = 3,
  };

  enum NetworkState {
    LAN_CABLE_ATTACHED = 1,
    LAN_CABLE_DETACHED = 2,
    LAN_CABLE_STATE_UNKNOWN = 3,
    GATEWAY_CONNECTED = 4,
    GATEWAY_DISCONNECTED = 5,
    WIFI_MODULE_STATE_ATTACHED = 6,
    WIFI_MODULE_STATE_DETACHED = 7,
    WIFI_MODULE_STATE_UNKNOWN = 8,
  };

  enum NetworkWiFiSecurityMode{
    WEP = 1,
    WPA_PSK = 2,
    WPA2_PSK = 3,
    EAP = 4,
    NONE = 5,
    UNKNOWN = 6,
  };

  enum NetworkWiFiEncryptionType{
    WEP = 1,
    TKIP = 2,
    AES = 3,
    TKIP_AES_MIXED = 4,
    NONE = 5,
    UNKNOWN = 6,
  };
};
