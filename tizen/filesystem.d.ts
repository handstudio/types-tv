import tizen from './index';

export enum FileMode { 'r', 'rw', 'w', 'a' }

export enum FileSystemStorageType {
  INTERNAL = 'INTERNAL',
  EXTERNAL = 'EXTERNAL'
}
export enum FileSystemStorageState {
  MOUNTED = 'MOUNTED',
  REMOVED = 'REMOVED',
  UNMOUNTABLE = 'UNMOUNTABLE'
}
declare module './index' {
  type domstring = string;
  type unsignedlong = number;
  type octet = number;
  type ErrorCallback = (error: WebAPIError) => void;

  type Storage = {
    label: domstring;
    state: domstring;
    type: domstring;
  };

  type FileFilter = {
    name: domstring;
    startModified: Date;
    endModified: Date;
    startCreated: Date;
    endCreated: Date;
  };

  type FileSystemStorage = {
    label: domstring;
    type: FileSystemStorageType;
    state: FileSystemStorageState;
  };

  interface TizenStatic {
    filesystem: Filesystem.FileSystemManager;
  }

  namespace Filesystem {
    type FileArraySuccessCallback = (files: File[]) => void;
    type FileStringSuccessCallback = (fileStr: domstring) => void;
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
      path: domstring;
      name: domstring;
      fullPath: domstring;
      fileSize: number;
      length: number;
      toURI: () => domstring;
      listFiles: (onsuccess: FileArraySuccessCallback, onerror: ErrorCallback) => void;
      openStream: (mode: FileMode, onsuccess: FileStreamSuccessCallback, onerror: ErrorCallback, encoding: domstring) => void;
      resolve: (filePath: domstring) => File;
      readAsText: (onsuccess: FileStringSuccessCallback, onerror: ErrorCallback, encoding: domstring) => void;
      copyTo: (originFilePath: domstring, destinationFilePath: domstring, overwrite: boolean, onsuccess: SuccessCallback, onerror: ErrorCallback) => void;
      moveTo: (originFilePath: domstring, destinationFilePath: domstring, overwrite: boolean, onsuccess: SuccessCallback, onerror: ErrorCallback) => void;
      createDirectory: (dirPath: domstring) => File;
      createFile: (relativeFilePath: domstring) => File;
      deleteDirectory: (directoryPath: domstring, recursive: boolean, onsuccess: SuccessCallback, onerror: ErrorCallback) => void;
      deleteFile: (filePath: domstring, onsuccess: SuccessCallback, onerror: ErrorCallback) => void
    }
  
    interface FileStream {
      eof: boolean;
      position: long;
      bytesAvailable: long;
      close: () => void;
      read: (charCount: long) => domstring;
      readBytes: (byteCount:long) => octet[];
      readBase64: (byteCount:long) => domstring;
      write: (stringData: domstring) => void;
      writeBytes: (byteData: octet[]) => void;
      writeBase64: (base64Data: domstring) => void;
    }
    interface FileSystemManager {
      maxPathLength: long;
      resolve: (location: domstring, onsuccess: FileSuccessCallback, onerror?: ErrorCallback, mode?: FileMode) => void;
      getStorage: (label: domstring, onsuccess: FileSystemStorageSuccessCallback, onerror: ErrorCallback) => void;
      listStorages: (onsuccess: FileSystemStorageArraySuccessCallback, onerror?: ErrorCallback) => void;
      addStorageStateChangeListener: (onsuccess: FileSystemStorageSuccessCallback, onerror: ErrorCallback) => long;
      removeStorageStateChangeListener: (watchId: long) => void;
    }
  }
}