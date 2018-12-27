/// <reference path="./common.d.ts"/>
/// <reference path="./filesystem.d.ts"/>
/// <reference path="./voicecontrol.d.ts"/>

export = Tizen;

declare const Tizen: Tizen.TizenStatic;
declare namespace Tizen {
  // tslint:disable-next-line no-empty-interface (This will be augmented)
  interface TizenStatic {}
}

declare global {
  // This contains duplicates of some types in lib.dom.d.ts in order to support typescript 2.0
  const tizen: Tizen.TizenStatic;
  interface Window {
      tizen: Tizen.TizenStatic;
  }
}
