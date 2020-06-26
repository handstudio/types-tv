import { Tizen as tizen } from 'index';

var reqAppControl = tizen.application
  .getCurrentApplication()
  .getRequestedAppControl();
if (reqAppControl && reqAppControl.appControl) {
  var data = reqAppControl.appControl.data;
  var bg_launched = false;
  if (data) {
    for (var i = 0; i < data.length; i++) {
      // check Ambient Mode
      if (
        data[i].key == 'http://samsung.com/tv/metadata/ambient.screen.support'
      ) {
        console.log('#### Ambient Screen Support : ' + data[i].value + '####');
      } else if (
        data[i].key == 'http://samsung.com/appcontrol/data/launch_mode'
      ) {
        // Check launch_mode
        if (data[i].value[0] == 'backgroundExecution') {
          // Running as background mode !!! bg_launched = true;
        }
      }
    }
  }
}

var appControl = new tizen.ApplicationControl("http://tizen.org/appcontrol/operation/view", null,
    "image/jpeg", null, [new tizen.ApplicationControlData("images", [])]);
