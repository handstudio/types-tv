

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

  enum BaseSeekPosition {
    BEGIN = 'BEGIN',
    CURRENT = 'CURRENT',
    END = 'END'
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
  
  type Path = string;
  type FileArraySuccessCallback = (files: File[]) => void;
  type FileStringSuccessCallback = (fileStr: Tizen.DOMString) => void;
  type FileStreamSuccessCallback = (filestream: FileStream) => void;
  type FileSuccessCallback = (file: File) => void;
  type FileSystemStorageArraySuccessCallback = (storages: FileSystemStorage[]) => void;
  type FileSystemStorageSuccessCallback = (storage: FileSystemStorage) => void;
  type SeekSuccessCallback = (position: Tizen.long) => void;
  type ReadStringSuccessCallback = (string: Tizen.DOMString) => void;
  type WriteStringSuccessCallback = (bytesCount: Tizen.long) => void;
  type ReadBlobSuccessCallback = (blob: Blob) => void;
  type ReadDataSuccessCallback = (data: Uint8Array) => void;
  type PathSuccessCallback = (path: Path) => void;
  type ListDirectorySuccessCallback = (names: Tizen.DOMString[], path: Path) => void;

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
    maxNameLength: Tizen.long;
    maxPathLength: Tizen.long;
    resolve: (location: Tizen.DOMString, onsuccess: FileSuccessCallback, onerror?: Tizen.ErrorCallback, mode?: FileMode) => void;
    openFile: (path: Path, openMode: FileMode, makeParents?: boolean) => FileHandle;
    createDirectory: (path: Path, makeParents?: boolean, successCallback?: PathSuccessCallback, errorCallback?: Tizen.ErrorCallback) => void;
    deleteFile: (path: Path, successCallback?: PathSuccessCallback, errorCallback?: Tizen.ErrorCallback) => void;
    deleteDirectory: (path: Path, recursive?: boolean, successCallback?: PathSuccessCallback, errorCallback?: Tizen.ErrorCallback) => void;
    copyFile: (sourcePath: Path, destinationPath: Path, overwrite?: boolean, successCallback?: PathSuccessCallback,errorCallback?: Tizen.ErrorCallback) => void;
    copyDirectory: (sourcePath: Path, destinationPath: Path, overwrite?: boolean, successCallback?: PathSuccessCallback, errorCallback?: Tizen.ErrorCallback) => void;
    moveFile: (sourcePath: Path, destinationPath: Path, overwrite?: boolean, successCallback?: PathSuccessCallback, errorCallback?: Tizen.ErrorCallback) => void;
    moveDirectory: (sourcePath: Path, destinationPath: Path, overwrite?: boolean, successCallback?: PathSuccessCallback, errorCallback?: Tizen.ErrorCallback) => void;
    rename: (path: Path, newName: Tizen.DOMString, successCallback?: PathSuccessCallback, errorCallback?: Tizen.ErrorCallback) => void;
    listDirectory: (path: Path, successCallback: ListDirectorySuccessCallback, errorCallback?: Tizen.ErrorCallback, filter?: FileFilter) => void;
    toURI: (path: Path) => Tizen.DOMString;
    isFile: (path: Path) => boolean;
    isDirectory: (path: Path) => boolean;
    pathExists: (path: Path) => boolean;
    getDirName: (path: Tizen.DOMString) => Tizen.DOMString;
    getStorage: (label: Tizen.DOMString, onsuccess: FileSystemStorageSuccessCallback, onerror: Tizen.ErrorCallback) => void;
    listStorages: (onsuccess: FileSystemStorageArraySuccessCallback, onerror?: Tizen.ErrorCallback) => void;
    addStorageStateChangeListener: (onsuccess: FileSystemStorageSuccessCallback, onerror: Tizen.ErrorCallback) => Tizen.long;
    removeStorageStateChangeListener: (watchId: Tizen.long) => void;
  }
  interface FileHandle {
    readonly path: Path;
    seek: (offset: Tizen.long, whence?: BaseSeekPosition) => Tizen.long;
    seekNonBlocking: (offset: Tizen.long, onsuccess: SeekSuccessCallback, onerror?: Tizen.ErrorCallback, whence?: BaseSeekPosition) => void;
    readString: (count?: Tizen.long, inputEncoding?: Tizen.DOMString) => Tizen.DOMString;
    readStringNonBlocking: (onsuccess?: ReadStringSuccessCallback, onerror?: Tizen.ErrorCallback, count?: Tizen.long, inputEncoding?: Tizen.DOMString) => void;
    writeString: (inputString: Tizen.DOMString, outputEncoding: Tizen.DOMString) => Tizen.long;
    writeStringNonBlocking: (inputString: Tizen.DOMString, onsuccess?: WriteStringSuccessCallback, onerror?: Tizen.ErrorCallback, outputEncoding?: Tizen.DOMString) => void;
    readBlob: (size: Tizen.long) => Blob;
    readBlobNonBlocking: (onsuccess?: ReadBlobSuccessCallback, onerror?: Tizen.ErrorCallback, size?: Tizen.long) => void;
    writeBlob: (blob: Blob) => void;
    writeBlobNonBlocking: (blob: Blob, onsuccess?: Tizen.SuccessCallback, onerror?: Tizen.ErrorCallback) => void;
    readData: (size: Tizen.long) => Uint8Array;
    readDataNonBlocking: (onsuccess?: ReadDataSuccessCallback, onerror?: Tizen.ErrorCallback, size?: Tizen.long) => void;
    writeData: (data: Uint8Array) => void;
    writeDataNonBlocking: (data: Uint8Array, onsuccess?: Tizen.SuccessCallback, onerror?: Tizen.ErrorCallback) => void;
    flush: () => void;
    flushNonBlocking: (onsuccess?: Tizen.SuccessCallback, onerror?: Tizen.ErrorCallback) => void;
    sync: () => void;
    syncNonBlocking: (onsuccess?: Tizen.SuccessCallback, onerror?: Tizen.ErrorCallback) => void;
    close: () => void;
    closeNonBlocking: (onsuccess?: Tizen.SuccessCallback, onerror?: Tizen.ErrorCallback) => void;
  }
}