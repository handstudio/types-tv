/// <reference path="./enum.d.ts"/>
/// <reference path="./common.d.ts"/>
/// <reference path="./filesystem.d.ts"/>
/// <reference path="./tvinputdevice.d.ts"/>
/// <reference path="./voicecontrol.d.ts"/>

export = Tizen;

declare const Tizen: Tizen.TizenStatic;
declare module Tizen {
  // tslint:disable-next-line no-empty-interface (This will be augmented)
  interface TizenStatic {}
}
