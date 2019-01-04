/// <reference path="./webapis.d.ts"/>
/// <reference path="./avplay.d.ts"/>
/// <reference path="./appcommon.d.ts"/>

import { AVPlay } from "./avplay";
import { AppCommon } from "./appcommon";

export = WebApis;


declare const WebApis: WebApis.WebApisStatic;
declare namespace WebApis {
  // tslint:disable-next-line no-empty-interface (This will be augmented)
  interface WebApisStatic {
    avplay: AVPlay.AVPlayManager;
    appcommon: AppCommon.AppCommonManager;
  }
}
