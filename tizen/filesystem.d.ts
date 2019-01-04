

import {Tizen} from './tizen';

export declare module FileSystem {

  const enum FileMode { 
    r = 'r',
    rw = 'rw',
    w = 'w',
    a = 'a' 
  }
  
  const enum FileSystemStorageType {
    INTERNAL = 'INTERNAL',
    EXTERNAL = 'EXTERNAL'
  }
  const enum FileSystemStorageState {
    MOUNTED = 'MOUNTED',
    REMOVED = 'REMOVED',
    UNMOUNTABLE = 'UNMOUNTABLE'
  }

  type octet = number;

  type Storage = {
    label: Tizen.DOMString;
    state: Tizen.DOMString;
    type: Tizen.DOMString;
  };

  type FileFilter = {
    name: Tizen.DOMString;
    startModified: Date;
    endModified: Date;
    startCreated: Date;
    endCreated: Date;
  };

  type FileSystemStorage = {
    label: Tizen.DOMString;
    type: FileSystemStorageType;
    state: FileSystemStorageState;
  };

  type FileArraySuccessCallback = (files: File[]) => void;
  type FileStringSuccessCallback = (fileStr: Tizen.DOMString) => void;
  type FileStreamSuccessCallback = (filestream: FileStream) => void;
  type FileSuccessCallback = (file: File) => void;
  type FileSystemStorageArraySuccessCallback = (storages: FileSystemStorage[]) => void;
  type FileSystemStorageSuccessCallback = (storage: FileSystemStorage) => void;
  

  interface File {
    parent: File;
    readonly: boolean;
    isFile: boolean;
    isDirectory: boolean;
    created: Date;
    modified: Date;
    path: Tizen.DOMString;
    name: Tizen.DOMString;
    fullPath: Tizen.DOMString;
    fileSize: number;
    length: number;
    toURI: () => Tizen.DOMString;
    listFiles: (onsuccess: FileArraySuccessCallback, onerror?: Tizen.ErrorCallback, filter?: FileFilter) => void;
    openStream: (mode: FileMode, onsuccess: FileStreamSuccessCallback, onerror?: Tizen.ErrorCallback, encoding?: Tizen.DOMString) => void;
    resolve: (filePath: Tizen.DOMString) => File;
    readAsText: (onsuccess: FileStringSuccessCallback, onerror?: Tizen.ErrorCallback, encoding?: Tizen.DOMString) => void;
    copyTo: (originFilePath: Tizen.DOMString, destinationFilePath: Tizen.DOMString, overwrite: boolean, onsuccess?: Tizen.SuccessCallback, onerror?: Tizen.ErrorCallback) => void;
    moveTo: (originFilePath: Tizen.DOMString, destinationFilePath: Tizen.DOMString, overwrite: boolean, onsuccess?: Tizen.SuccessCallback, onerror?: Tizen.ErrorCallback) => void;
    createDirectory: (dirPath: Tizen.DOMString) => File;
    createFile: (relativeFilePath: Tizen.DOMString) => File;
    deleteDirectory: (directoryPath: Tizen.DOMString, recursive: boolean, onsuccess?: Tizen.SuccessCallback, onerror?: Tizen.ErrorCallback) => void;
    deleteFile: (filePath: Tizen.DOMString, onsuccess?: Tizen.SuccessCallback, onerror?: Tizen.ErrorCallback) => void
  }

  interface FileStream {
    eof: boolean;
    position: Tizen.long;
    bytesAvailable: Tizen.long;
    close: () => void;
    read: (charCount: Tizen.long) => Tizen.DOMString;
    readBytes: (byteCount:Tizen.long) => octet[];
    readBase64: (byteCount:Tizen.long) => Tizen.DOMString;
    write: (stringData: Tizen.DOMString) => void;
    writeBytes: (byteData: octet[]) => void;
    writeBase64: (base64Data: Tizen.DOMString) => void;
  }
  interface FileSystemManager {
    maxPathLength: Tizen.long;
    resolve: (location: Tizen.DOMString, onsuccess: FileSuccessCallback, onerror?: Tizen.ErrorCallback, mode?: FileMode) => void;
    getStorage: (label: Tizen.DOMString, onsuccess: FileSystemStorageSuccessCallback, onerror: Tizen.ErrorCallback) => void;
    listStorages: (onsuccess: FileSystemStorageArraySuccessCallback, onerror?: Tizen.ErrorCallback) => void;
    addStorageStateChangeListener: (onsuccess: FileSystemStorageSuccessCallback, onerror: Tizen.ErrorCallback) => Tizen.long;
    removeStorageStateChangeListener: (watchId: Tizen.long) => void;
  }
}