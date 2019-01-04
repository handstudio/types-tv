// import { AVPlayPlaybackCallback, AVPlayPlayerState, AVPlayStreamingPropertyType } from './webapis';
import { WebApis } from 'index';
import { AVPlay} from 'webapis/avplay';


const webapis = WebApis;

class AVPlayer {

  constructor() {
    return;
  }

  public init() {
    // this.$elem = $('#avplay');
    let suspended: boolean = false;
    document.addEventListener('visibilitychange', () => {
      try {
        if (document.hidden) {

          const state = webapis.avplay.getState();
          if (state === AVPlay.AVPlayPlayerState.PAUSED || state === AVPlay.AVPlayPlayerState.PLAYING) {
            suspended = true;
            webapis.avplay.suspend();
          } else {
            if (suspended) {
              webapis.avplay.restore();
              if (webapis.avplay.getState() === AVPlay.AVPlayPlayerState.READY) {
                webapis.avplay.play();
              }
            }
            suspended = true;
          }
        }
      } catch (e) {
        console.log(e);
      }
      return;
    });
    return;
  }

  public setListener(listener: AVPlay.AVPlayPlaybackCallback) {
    webapis.avplay.setListener({
      onbufferingcomplete: () => {
        console.info('avplay onbufferingcomplete...');
        listener.onbufferingcomplete();
        return;
      },
      onbufferingprogress: percent => {
        console.info('avplay onbufferingprogress... ' + percent);
        listener.onbufferingprogress(percent);
        return;
      },
      onbufferingstart: () => {
        console.info('avplay onbufferingstart...');
        listener.onbufferingstart();
        return;
      },
      oncurrentplaytime: time => {
        listener.oncurrentplaytime(time);
        return;
      },
      ondrmevent: (type, data) => {
        listener.ondrmevent(type, data);
        return;
      },
      onerror: eventid => {
        listener.onerror(eventid);
        return;
      },
      onevent: (eventid, data) => {
        listener.onevent(eventid, data);
        return;
      },
      onstreamcompleted: () => {
        console.info('avplay onstreamcompleted...');
        this.stop();
        setTimeout(() => listener.onstreamcompleted(), 1000);
        return;
      },
      onsubtitlechange: () => {
        return;
      }
    });
  }

  public play(url: string, listener: AVPlay.AVPlayPlaybackCallback) {
    this.stop();

    try {
      console.info('avplayer play... ', url);
      webapis.avplay.open(url);
      this.setListener(listener);
      webapis.avplay.setTimeoutForBuffering(10000);

      if (url.indexOf('.ts') > -1 || url.indexOf('[4K]') > -1 || url.indexOf('[4k]') > -1) {
        webapis.avplay.setStreamingProperty(AVPlay.AVPlayStreamingPropertyType.SET_MODE_4K, 'TRUE');
      }

      webapis.avplay.prepareAsync(() => {
        if (url.indexOf('.mp3') > -1) {
          webapis.avplay.setDisplayRect(0, 0, 1, 1);
        } else {
          webapis.avplay.setDisplayRect(0, 0, 1920, 1080);
        }
        webapis.avplay.play();
      });
    } catch (e) {
      console.error('avplayer play error ...', e);
    }
  }

  public pause() {
    try {
      webapis.avplay.pause();
    } catch (e) {
      console.error('avplayer pause error ...', e);
    }
  }

  public resume() {
    try {
      webapis.avplay.play();
    } catch (e) {
      console.error('avplayer resume error ...', e);
    }
  }

  public stop() {

    try {
      webapis.avplay.stop();
      webapis.avplay.suspend();
      webapis.avplay.close();
    } catch (e) {
      console.error('avplayer stop error... ', e);
    }
  }

  public seekTo(sec: number) {
    try {
      webapis.avplay.seekTo(sec);
    } catch (e) {
      console.error('avplayer seekTo error... ', e);
    }
  }
}

export default new AVPlayer();
