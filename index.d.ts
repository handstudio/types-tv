/// <reference path="./webapis/index.d.ts"/>
/// <reference path="./tizen/index.d.ts"/>

import * as WebApis from './webapis';
import * as Tizen from './tizen';

export const webapis: WebApis.WebApisStatic;
export const tizen: Tizen.TizenStatic;

// declare global {
//   // This contains duplicates of some types in lib.dom.d.ts in order to support typescript 2.0
//   const webapis: WebApis.WebApisStatic;
//   const tizen: Tizen.TizenStatic;
//   interface Window {
//       webapis: WebApis.WebApisStatic;
//       tizen: Tizen.TizenStatic;
//   }
// }
