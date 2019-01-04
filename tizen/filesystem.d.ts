import {FileSystemStorageType, FileSystemStorageState, FileMode} from './enum'

declare module './index' {
  
  interface TizenStatic {
    filesystem: Filesystem.FileSystemManager;
    File: Filesystem.File;
    FileStream: Filesystem.FileStream;
    FileMode: typeof FileMode;
    FileSystemStorageType: typeof FileSystemStorageType;
    FileSystemStorageState: typeof FileSystemStorageState;
  }
  
  namespace Filesystem {
    type octet = number;
  
    type Storage = {
      label: DOMString;
      state: DOMString;
      type: DOMString;
    };
  
    type FileFilter = {
      name: DOMString;
      startModified: Date;
      endModified: Date;
      startCreated: Date;
      endCreated: Date;
    };
  
    type FileSystemStorage = {
      label: DOMString;
      type: FileSystemStorageType;
      state: FileSystemStorageState;
    };
    type FileArraySuccessCallback = (files: File[]) => void;
    type FileStringSuccessCallback = (fileStr: DOMString) => void;
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
      path: DOMString;
      name: DOMString;
      fullPath: DOMString;
      fileSize: number;
      length: number;
      toURI: () => DOMString;
      listFiles: (onsuccess: FileArraySuccessCallback, onerror?: ErrorCallback, filter?: FileFilter) => void;
      openStream: (mode: FileMode, onsuccess: FileStreamSuccessCallback, onerror?: ErrorCallback, encoding?: DOMString) => void;
      resolve: (filePath: DOMString) => File;
      readAsText: (onsuccess: FileStringSuccessCallback, onerror?: ErrorCallback, encoding?: DOMString) => void;
      copyTo: (originFilePath: DOMString, destinationFilePath: DOMString, overwrite: boolean, onsuccess?: SuccessCallback, onerror?: ErrorCallback) => void;
      moveTo: (originFilePath: DOMString, destinationFilePath: DOMString, overwrite: boolean, onsuccess?: SuccessCallback, onerror?: ErrorCallback) => void;
      createDirectory: (dirPath: DOMString) => File;
      createFile: (relativeFilePath: DOMString) => File;
      deleteDirectory: (directoryPath: DOMString, recursive: boolean, onsuccess?: SuccessCallback, onerror?: ErrorCallback) => void;
      deleteFile: (filePath: DOMString, onsuccess?: SuccessCallback, onerror?: ErrorCallback) => void
    }
  
    interface FileStream {
      eof: boolean;
      position: long;
      bytesAvailable: long;
      close: () => void;
      read: (charCount: long) => DOMString;
      readBytes: (byteCount:long) => octet[];
      readBase64: (byteCount:long) => DOMString;
      write: (stringData: DOMString) => void;
      writeBytes: (byteData: octet[]) => void;
      writeBase64: (base64Data: DOMString) => void;
    }
    interface FileSystemManager {
      maxPathLength: long;
      resolve: (location: DOMString, onsuccess: FileSuccessCallback, onerror?: ErrorCallback, mode?: FileMode) => void;
      getStorage: (label: DOMString, onsuccess: FileSystemStorageSuccessCallback, onerror: ErrorCallback) => void;
      listStorages: (onsuccess: FileSystemStorageArraySuccessCallback, onerror?: ErrorCallback) => void;
      addStorageStateChangeListener: (onsuccess: FileSystemStorageSuccessCallback, onerror: ErrorCallback) => long;
      removeStorageStateChangeListener: (watchId: long) => void;
    }
  }
}