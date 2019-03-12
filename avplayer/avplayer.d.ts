export declare module Avplayer {
  interface displayRectOptions {
    x?: number,
    y?: number,
    w?: number,
    h?: number
  }
  
  interface listenerOptions {
    onbufferingstart: () => void,
    onbufferingprogress: () => void,
    onbufferingcomplete: () => void,
    onstreamcompleted: () => void,
    oncurrentplaytime: () => void,
    onerror: () => void,
    onevent: () => void,
    onsubtitlechange: () => void,
    ondrmevent: () => void
  }
  
  interface playOptions {
    url: string,
    displayRect: displayRectOptions,
    listeners: listenerOptions
  }
  
  class Player {
    constructor($parent: HTMLElement);
    play(options: playOptions): Promise<void>;
    pause(): void;
    stop(): void;
    seekTo(time: number): void;
    clear(): void;
    show(): void;
    hide(): void;
  }
}