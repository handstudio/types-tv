import msf from './index'

export enum ConnectEvent {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
  CLIENT_CONNECT = 'clientConnect',
  CLIENT_DISCONNECT = 'clientDisconnect',
}

export enum SearchEvent {
  FOUND = 'found',
  ERROR = 'error',
  START = 'start',
  STOP = 'stop'
}