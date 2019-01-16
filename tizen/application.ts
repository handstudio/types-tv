import {Tizen} from './tizen';

export declare module Application {

  interface Application {
    exit: void;
    // 나머지 추가 필요
  }
  interface ApplicationManager {
    getCurrentApplication: Application;
    // 나머지 추가 필요
  }
}