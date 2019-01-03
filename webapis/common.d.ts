import { WebAPIException } from './enum';

declare module './index' {
  type drmData = string;
  type long = number;
  type ulong = number;
  type DOMString = string;
  type SuccessCallback = () => void;
  type ErrorCallback = (error: WebAPIError) => void;

  interface WebAPIError {
    readonly code: ulong;
    readonly name: DOMString;
    readonly message: DOMString;
  }

  interface WebAPIException {
    code: ulong;
    name: DOMString;
    message: DOMString;
  }
}
