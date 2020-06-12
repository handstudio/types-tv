import { MediaController } from "tizen/mediacontroller";
import { Tizen as tizen } from "index";

/**
 * MediaControllerServer
 */
const mcServer = tizen.mediacontroller.createServer();

mcServer.addCommandListener((clientName, command, data) => {
  // 클라이언트에게 보낼 response object
  console.log(clientName);
  console.log(command);
  console.log(data);
  return { response: "1111111" };
});

const playbackRequestListener = {
  onplaybackstaterequest: (
    state: MediaController.MediaControllerPlaybackState
  ) => {},
  onplaybackpositionrequest: (position: number) => {},
  onshufflemoderequest: (mode: boolean) => {},
  onrepeatmoderequest: (mode: boolean) => {},
};

mcServer.addChangeRequestPlaybackInfoListener(playbackRequestListener);

var watcherId = 0; /* Watcher identifier. */
var mcClient = tizen.mediacontroller.getClient();
var mcServerInfo = mcClient.getLatestServerInfo();

if (mcServerInfo != null) {
  watcherId = mcServerInfo.addServerStatusChangeListener(function (
    status: MediaController.MediaControllerServerState
  ) {
    if (mcServerInfo) {
      console.log(mcServerInfo.name + " server status changed to " + status);
    }
  });
}


// 
try {
  mcClient = tizen.mediacontroller.getClient();
} catch (err) {
  console.log(err.name + " error: " + err.message);
}

function successCallback(servers:MediaController.MediaControllerServerInfo[]) {
  for (var s in servers) {
    console.log("Found server: " + servers[s].name + ", state: " + servers[s].state);
  }
}

function errorCallback(err: any) {
  console.log(err.name + " error: " + err.message);
}

mcClient.findServers(successCallback, errorCallback);
