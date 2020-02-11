import { Download } from 'tizen/download';
import {Tizen} from 'index'


const downloadRequest = new Tizen.DownloadRequest('url', 'videos');
downloadRequest.httpHeader['If-None-Match'] = '\"bc830d6775d7e20db8aea4e2fe5adbfe-17\"';

var listener:Download.DownloadCallback = {
  onprogress: function(id, receivedSize, totalSize) {
    console.log('Received with id: ' + id + ', ' + receivedSize + '/' + totalSize);
  },
  onpaused: function(id) {
    console.log('Paused with id: ' + id);
  },
  oncanceled: function(id) {
    console.log('Canceled with id: ' + id);
  },
  oncompleted: function(id, path) {
    console.log('Completed with id: ' + id + ', path: ' + path);
  },
  onfailed: function(id, error) {
    console.log('Failed with id: ' + id + ', error name: ' + error);
  }
};

Tizen.download.start(downloadRequest, listener);