import * as WebApis from './webapis';
import * as Tizen from './tizen';


declare global {
  // This contains duplicates of some types in lib.dom.d.ts in order to support typescript 2.0
  const webapis: WebApis.WebApisStatic;
  const tizen: Tizen.TizenStatic;
  interface Window {
      webapis: WebApis.WebApisStatic;
      tizen: Tizen.TizenStatic;
  }
}
