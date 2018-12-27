

export = WebApis;


declare const WebApis: WebApis.WebApisStatic;
declare namespace WebApis {
  // tslint:disable-next-line no-empty-interface (This will be augmented)
  interface WebApisStatic {}
}

declare global {
  // This contains duplicates of some types in lib.dom.d.ts in order to support typescript 2.0
  interface Window {
      webapis: WebApis.WebApisStatic;
  }
}
