/// <reference path="./webapis.d.ts"/>
/// <reference path="./avplay.d.ts"/>
/// <reference path="./appcommon.d.ts"/>
/// <reference path="./productinfo.d.ts"/>
/// <reference path="./logging.d.ts"/>

import { AVPlay } from "./avplay";
import { AVInfo } from "./avinfo";
import { AppCommon } from "./appcommon";
import { ProductInfo } from "./productinfo";
import { Logging } from "./logging";

export = WebApis;


declare const WebApis: WebApis.WebApisStatic;
declare namespace WebApis {
  // tslint:disable-next-line no-empty-interface (This will be augmented)
  interface WebApisStatic {
    avplay: AVPlay.AVPlayManager;
    appcommon: AppCommon.AppCommonManager;
    productinfo: ProductInfo.ProductInfoManager;
    logging: Logging.LoggingManager;
    avinfo: AVInfo.AvInfoManager;
  }
}
