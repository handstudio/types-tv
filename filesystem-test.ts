import { Filesystem, FileSystemStorage, FileMode } from "./tizen";
// import { FileMode } from "tv/tizen/filesystem";
import {Tizen} from 'index'

const tizen = Tizen;
const ROOT_NAME = "appData";
let rootDir = null;
let rootUri = null;

const resolve = (uri: string, complete: (error: boolean, dir?: Filesystem.File) => void) => {
  tizen.filesystem.resolve(
    uri,
    dir => {
      complete(false, dir);
    },
    error => {
      complete(true);
    },
    FileMode.rw
  );
};

const getListFiles = (dir: Filesystem.File, complete: (error: boolean, files?: Filesystem.File[]) => void) => {
  dir.listFiles(
    files => {
      complete(false, files);
    },
    () => {
      complete(true);
    }
  );
};

const getUSBStorages = (complete: (error: boolean, storages?: FileSystemStorage[]) => void) => {
  let externalStorages: FileSystemStorage[];
  tizen.filesystem.listStorages(storages => {
    
  });
};

const getMatchUSBStorageDir = (
  storages: FileSystemStorage[],
  complete: (error: boolean, dir?: Filesystem.File) => void
) => {
  let index = 0;
  while (index < storages.length) {
    resolve(storages[index].label, (error1, dir1) => {
      if (dir1 === undefined) {
        return;
      }
      if (error1) {
        return complete(true);
      }

      resolve(`${dir1.toURI()}/${ROOT_NAME}`, (error2, dir2) => {
        if (error2) {
          return complete(true);
        }

        if (dir2) {
          return complete(false, dir2);
        }
      });
    });
    index++;
  }
};

export default {
  resolve,
  rootDir,
  rootUri,
  init() {
    getUSBStorages((error1, storages) => {
      if (storages === undefined) {
        return;
      }
      if (error1) {
        return new Error("USB External Storage not found");
      }

      getMatchUSBStorageDir(storages, (error2, dir) => {
        if (error2) {
          return new Error("/appData directory not found");
        }

        if(dir === undefined) {
          return;
        }
        rootDir = dir;
        rootUri = dir.toURI();
      });
    });
  }
};
