import { MediaController } from "tizen/mediacontroller";
import { Tizen as tizen } from "index";
import Tizen from "tizen";

/**
 * MediaControllerServer
 */
const mcServer = tizen.mediacontroller.createServer();

/* Registers to receive custom commands from client. */
watcherId = mcServer.addCommandListener((clientName, command, data) => {
  return new tizen.mediacontroller.RequestReply(new tizen.Bundle({myReply: "someValue"}), 0);
});


mcServer.addChangeRequestPlaybackInfoListener({
  onplaybackitemrequest: (playlistName, index, state, clientName) => {
    console.log(playlistName);
    console.log(index);
    console.log(state);
    console.log(clientName);
  },
  onplaybackpositionrequest: (position, clientName) => {
    console.log(position);
    console.log(clientName);
  },
  onplaybackstaterequest: (state, clientName) => {
    console.log(state, clientName);
  },
  onrepeatmoderequest: (mode, clientName) => {
    console.log(mode, clientName);
  },
  onrepeatstaterequest: (state, clientName) => {
    console.log(state, clientName);
  },
  onshufflemoderequest: (mode, clientName) => {
    console.log(mode, clientName);
  }
});

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
