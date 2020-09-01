import { Tizen } from '../tizen';
import {
  MediaControllerAbilitySupport,
  MediaControllerContentAgeRating,
  MediaControllerContentType,
  MediaControllerDisplayModeType,
  MediaControllerDisplayRotationType,
  MediaControllerPlaybackState,
  MediaControllerRepeatState,
  MediaControllerSearchCategory,
  MediaControllerServerState,
  MediaControllerSimpleAbility
} from './constant';

export declare module MediaController {
  type ApplicationId = Tizen.DOMString;

  // 2.2
  interface MediaControllerManager {
    getClient(): MediaControllerClient;
    createServer(): MediaControllerServer;
    RequestReply: typeof RequestReply;
    SearchFilter: typeof SearchFilter;
  }

  // 2.3
  interface MediaControllerServer {
    readonly playbackInfo: MediaControllerPlaybackInfo;
    readonly iconURI?: Tizen.DOMString;
    readonly abilities: MediaControllerAbilities;
    readonly subtitles: MediaControllerSubtitles;
    readonly mode360: MediaControllerMode360;
    readonly displayMode: MediaControllerDisplayMode;
    readonly displayRotation: MediaControllerDisplayRotation;
    getAllClientsInfo(): MediaControllerClientInfo[];
    updatePlaybackState(state: keyof typeof MediaControllerPlaybackState): void;
    updateIconURI(iconURI?: Tizen.DOMString): void;
    updatePlaybackPosition(position: Tizen.ulong): void;
    updatePlaybackAgeRating(rating: keyof typeof MediaControllerContentAgeRating): void;
    updatePlaybackContentType(type: keyof typeof MediaControllerContentType): void;
    updateShuffleMode(mode: boolean): void;
    updateRepeatMode(mode: boolean): void;
    updateRepeatState(state: keyof typeof MediaControllerRepeatState): void;
    updateMetadata(metadata: MediaControllerMetadata): void;
    addChangeRequestPlaybackInfoListener(
      listener: MediaControllerChangeRequestPlaybackInfoCallback
    ): Tizen.long;
    removeChangeRequestPlaybackInfoListener(watchId: Tizen.long): void;
    setSearchRequestListener(
      listener: MediaControllerSearchRequestCallback
    ): void;
    unsetSearchRequestListener(): void;
    addCommandListener(
      listener: MediaControllerReceiveCommandCallback
    ): Tizen.long;
    removeCommandListener(watchId: Tizen.long): void;
    createPlaylist(name: Tizen.DOMString): MediaControllerPlaylist;
    savePlaylist(playlist: MediaControllerPlaylist, successCallback?:Tizen.SuccessCallback, errorCallback?:Tizen.ErrorCallback): void;
    deletePlaylist(playlistName: Tizen.DOMString, successCallback?:Tizen.SuccessCallback, errorCallback?:Tizen.ErrorCallback): void;
    updatePlaybackItem(playlistName: Tizen.DOMString, index:Tizen.DOMString): void;
    getAllPlaylists(successCallback:MediaControllerGetAllPlaylistsSuccessCallback, errorCallback?: Tizen.ErrorCallback):void;
  }

  interface MediaControllerClient {
    findServers(
      successCallback: MediaControllerServerInfoArraySuccessCallback,
      errorCallback?: Tizen.ErrorCallback
    ): void;
    getLatestServerInfo(): MediaControllerServerInfo | null;
    addAbilityChangeListener(
      listener: MediaControllerAbilityChangeCallback
    ): Tizen.long;
    removeAbilityChangeListener(watchId: Tizen.long): void;
    findSubscribedServers(
      successCallback: MediaControllerServerInfoArraySuccessCallback,
      errorCallback?: Tizen.ErrorCallback
    ): void;
    setCustomEventListner(
      listener: MediaControllerReceiveCommandCallback
    ): void;
    unsetCustomerEventListener(): void;
  }

  interface MediaControllerServerInfo {
    readonly name: ApplicationId;
    readonly state: keyof typeof MediaControllerServerState;
    readonly playbackInfo: MediaControllerPlaybackInfo;
    readonly iconURI?: Tizen.DOMString;
    readonly abilities: MediaControllerAbilitiesInfo;
    readonly subtitles: MediaControllerSubtitlesInfo;
    readonly mode360: MediaControllerMode360Info;
    readonly displayMode: MediaControllerDisplayModeInfo;
    readonly displayRotation: MediaControllerDisplayRotationInfo;
    sendPlaybackState(
      state: keyof typeof MediaControllerPlaybackState,
      successCallback?: Tizen.SuccessCallback,
      errorCallback?: Tizen.ErrorCallback
    ): void;
    sendPlaybackPosition(
      position: Tizen.ulong,
      successCallback?: Tizen.SuccessCallback,
      errorCallback?: Tizen.ErrorCallback
    ): void;
    sendShuffleMode(
      mode: boolean,
      successCallback?: Tizen.SuccessCallback,
      errorCallback?: Tizen.ErrorCallback
    ): void;
    sendRepeatMode(
      mode: boolean,
      successCallback?: Tizen.SuccessCallback,
      errorCallback?: Tizen.ErrorCallback
    ): void;
    sendRepeatState(
      state: keyof typeof MediaControllerRepeatState,
      successCallback?: Tizen.SuccessCallback,
      errorCallback?: Tizen.ErrorCallback
    ): void;
    sendSearchRequest(
      request: SearchFilter[],
      replyCallback: MediaControllerSearchRequestReplyCallback,
      errorCallback?: Tizen.ErrorCallback
    ): void;
    sendCommand(
      command: Tizen.DOMString,
      data: object,
      successCallback: MediaControllerSendCommandSuccessCallback,
      errorCallback?: Tizen.ErrorCallback
    ): void;
    addServerStatusChangeListener(
      listener: MediaControllerServerStatusChangeCallback
    ): number;
    removeServerStatusChangeListener(watchId: number): void;
    addPlaybackInfoChangeListener(
      listener: MediaControllerPlaybackInfoChangeCallback
    ): number;
    removePlaybackInfoChangeListener(watchId: number): void;
    getAllPlaylists(
      successCallback: MediaControllerGetAllPlaylistsSuccessCallback,
      errorCallback?: Tizen.ErrorCallback
    ): void;
    sendPlaybackItem(
      playlistName: Tizen.DOMString,
      index: Tizen.DOMString,
      state: keyof typeof MediaControllerPlaybackState,
      position: Tizen.ulong
    ): void;
    addPlaylistUpdatedListener(
      listener: MediaControllerPlaylistUpdatedCallback
    ): Tizen.long;
    removePlaylistUpdatedListener(listenerId: Tizen.long): void;
  }

  // 2.6
  interface MediaControllerPlaybackInfo {
    readonly state: keyof typeof MediaControllerPlaybackState;
    readonly position: Tizen.ulong;
    readonly shuffleMode: boolean;
    readonly repeatMode: boolean;
    readonly metadata: MediaControllerMetadata;
    readonly ageRating: keyof typeof MediaControllerContentAgeRating;
    readonly contentType: keyof typeof MediaControllerContentType;
    readonly repeatState: keyof typeof MediaControllerRepeatState;
    readonly index?: Tizen.DOMString;
    readonly playlistName?: Tizen.DOMString;
  }

  // 2.7
  interface MediaControllerAbilities {
    readonly playback: MediaControllerPlaybackAbilities;
    readonly displayMode: MediaControllerDisplayModeAbilities;
    readonly displayRotation: MediaControllerDisplayRotationAbilities;
    playbackPosition: keyof typeof MediaControllerAbilitySupport;
    shuffle: keyof typeof MediaControllerAbilitySupport;
    repeat: keyof typeof MediaControllerAbilitySupport;
    playlist: keyof typeof MediaControllerAbilitySupport;
    clientCustom: keyof typeof MediaControllerAbilitySupport;
    search: keyof typeof MediaControllerAbilitySupport;
    subtitles: keyof typeof MediaControllerAbilitySupport;
    mode360: keyof typeof MediaControllerAbilitySupport;
  }

  // 2.8
  interface MediaControllerPlaybackAbilities {
    play: keyof typeof MediaControllerAbilitySupport;
    pause: keyof typeof MediaControllerAbilitySupport;
    stop: keyof typeof MediaControllerAbilitySupport;
    next: keyof typeof MediaControllerAbilitySupport;
    prev: keyof typeof MediaControllerAbilitySupport;
    forward: keyof typeof MediaControllerAbilitySupport;
    rewind: keyof typeof MediaControllerAbilitySupport;
    togglePlayPause: keyof typeof MediaControllerAbilitySupport;
    saveAbilities(): void;
  }

  // 2.9
  interface MediaControllerDisplayModeAbilities {
    letterBox: keyof typeof MediaControllerAbilitySupport;
    originSize: keyof typeof MediaControllerAbilitySupport;
    fullScreen: keyof typeof MediaControllerAbilitySupport;
    croppedFull: keyof typeof MediaControllerAbilitySupport;
  }

  //2.10
  interface MediaControllerDisplayRotationAbilities {
    rotationNone: keyof typeof MediaControllerAbilitySupport;
    rotation90: keyof typeof MediaControllerAbilitySupport;
    rotation180: keyof typeof MediaControllerAbilitySupport;
    rotation270: keyof typeof MediaControllerAbilitySupport;
  }

  // 2.11
  interface MediaControllerAbilitiesInfo {
    readonly playback: MediaControllerPlaybackAbilitiesInfo;
    readonly displayMode: MediaControllerDisplayModeAbilitiesInfo;
    readonly displayRotation: MediaControllerDisplayRotationAbilitiesInfo;
    readonly playbackPosition: keyof typeof MediaControllerAbilitySupport;
    readonly shuffle: keyof typeof MediaControllerAbilitySupport;
    readonly repeat: keyof typeof MediaControllerAbilitySupport;
    readonly playlist: keyof typeof MediaControllerAbilitySupport;
    readonly clientCustom: keyof typeof MediaControllerAbilitySupport;
    readonly search: keyof typeof MediaControllerAbilitySupport;
    readonly subtitles: keyof typeof MediaControllerAbilitySupport;
    readonly mode360: keyof typeof MediaControllerAbilitySupport;
    subscribe(): void;
    unsubscribe(): void;
  }

  // 2.12
  interface MediaControllerPlaybackAbilitiesInfo {
    readonly play: keyof typeof MediaControllerAbilitySupport;
    readonly pause: keyof typeof MediaControllerAbilitySupport;
    readonly stop: keyof typeof MediaControllerAbilitySupport;
    readonly next: keyof typeof MediaControllerAbilitySupport;
    readonly prev: keyof typeof MediaControllerAbilitySupport;
    readonly forward: keyof typeof MediaControllerAbilitySupport;
    readonly rewind: keyof typeof MediaControllerAbilitySupport;
    readonly togglePlayPause: keyof typeof MediaControllerAbilitySupport;
  }

  // 2.13
  interface MediaControllerDisplayModeAbilitiesInfo {
    readonly letterBox: keyof typeof MediaControllerAbilitySupport;
    readonly originSize: keyof typeof MediaControllerAbilitySupport;
    readonly fullScreen: keyof typeof MediaControllerAbilitySupport;
    readonly croppedFull: keyof typeof MediaControllerAbilitySupport;
  }

  // 2.14
  interface MediaControllerDisplayRotationAbilitiesInfo {
    readonly rotationNone: keyof typeof MediaControllerAbilitySupport;
    readonly rotation90: keyof typeof MediaControllerAbilitySupport;
    readonly rotation180: keyof typeof MediaControllerAbilitySupport;
    readonly rotation270: keyof typeof MediaControllerAbilitySupport;
  }

  // 2.15
  interface MediaControllerSubtitles {
    enabled: boolean;
    addChangeRequestListener(
      listener: MediaControllerEnabledChangeRequestCallback
    ): Tizen.long;
    removeChangeRequestListener(watchId: Tizen.long): void;
  }

  //2.16
  interface MediaControllerSubtitlesInfo {
    readonly enabled: boolean;
    sendRequest(
      enabled: boolean,
      replyCallback: MediaControllerSendCommandSuccessCallback
    ): void;
    addModeChangeListener(
      listener: MediaControllerEnabledChangeCallback
    ): Tizen.long;
    removeModeChangeListener(watchId: Tizen.long): void;
  }

  //2.17
  interface MediaControllerMode360 {
    enabled: boolean;
    addChangeRequestListener(
      listener: MediaControllerEnabledChangeRequestCallback
    ): Tizen.long;
    removeChangeRequestListener(watchId: Tizen.long): void;
  }

  // 2.18
  interface MediaControllerMode360Info {
    readonly enabled: boolean;
    sendRequest(
      enabled: boolean,
      replyCallback: MediaControllerSendCommandSuccessCallback
    ): void;
    addModeChangeListener(
      listener: MediaControllerEnabledChangeCallback
    ): Tizen.long;
    removeModeChangeListener(watchId: Tizen.long): void;
  }

  // 2.19
  interface MediaControllerDisplayMode {
    type: keyof typeof MediaControllerDisplayModeType;
    addChangeRequestListener(
      listener: MediaControllerDisplayModeChangeRequestCallback
    ): Tizen.long;
    removeChangeRequestListener(watchId: Tizen.long): void;
  }

  // 2.20
  interface MediaControllerDisplayModeInfo {
    readonly type: keyof typeof MediaControllerDisplayModeType;
    sendRequest(
      type: keyof typeof MediaControllerDisplayModeType,
      replyCallback: MediaControllerSendCommandSuccessCallback
    ): void;
    addModeChangeListener(
      listener: MediaControllerDisplayModeChangeCallback
    ): void;
    removeModeChangeListener(watchId: Tizen.long): void;
  }

  // 2.21
  interface MediaControllerDisplayRotation {
    displayRotation: keyof typeof MediaControllerDisplayRotationType;
    addChangeRequestListener(
      listener: MediaControllerDisplayRotationChangeRequestCallback
    ): Tizen.long;
    removeChangeRequestListener(watchId: Tizen.long): void;
  }

  // 2.22
  interface MediaControllerClientInfo {
    readonly name: ApplicationId;
    sendEvent(
      eventName: Tizen.DOMString,
      data: Tizen.Bundle,
      successCallback: MediaControllerSendCommandSuccessCallback
    ): void;
  }

  // 2.23
  interface MediaControllerDisplayRotationInfo {
    readonly displayRotation: keyof typeof MediaControllerDisplayRotationType;
    sendRequest(
      displayRotation: keyof typeof MediaControllerDisplayRotationType,
      replyCallback: MediaControllerSendCommandSuccessCallback
    ): void;
    addDisplayRotationChangeListener(
      listener: MediaControllerDisplayRotationChangeCallback
    ): Tizen.long;
    removeDisplayRotationChangeListener(watchId: Tizen.long): void;
  }

  // 2.24
  interface MediaControllerMetadata {
    [key:string]: any;
    title: Tizen.DOMString;
    artist: Tizen.DOMString;
    album: Tizen.DOMString;
    author: Tizen.DOMString;
    genre: Tizen.DOMString;
    duration: Tizen.DOMString;
    date: Tizen.DOMString;
    copyright: Tizen.DOMString;
    description: Tizen.DOMString;
    trackNum: Tizen.DOMString;
    picture: Tizen.DOMString;
    seasonNumber: Tizen.long;
    seasonTitle?: Tizen.DOMString;
    episodeNumber: Tizen.long;
    episodeTitle?: Tizen.DOMString;
    resolutionWidth: Tizen.long;
    resolutionHeight: Tizen.long;
  }

  // 2.25
  interface MediaControllerPlaylistItem {
    readonly index: Tizen.DOMString;
    readonly metadata: MediaControllerMetadata;
  }

  // 2.26
  interface MediaControllerMetadataInit extends MediaControllerMetadata{
    title: Tizen.DOMString;
    artist: Tizen.DOMString;
    album: Tizen.DOMString;
    author: Tizen.DOMString;
    genre: Tizen.DOMString;
    duration: Tizen.DOMString;
    date: Tizen.DOMString;
    copyright: Tizen.DOMString;
    description: Tizen.DOMString;
    trackNum: Tizen.DOMString;
    picture: Tizen.DOMString;
    seasonNumber: Tizen.long;
    seasonTitle: Tizen.DOMString;
    episodeNumber: Tizen.long;
    episodeTitle: Tizen.DOMString;
    resolutionWidth: Tizen.long;
    resolutionHeight: Tizen.long;
  }

  // 2.27
  interface MediaControllerPlaylist {
    readonly name: Tizen.DOMString;
    addItem(
      index: Tizen.DOMString,
      metadata: MediaControllerMetadata
    ): void;
    getItems(
      successCallback: MediaControllerGetItemsSuccessCallback,
      errorCallback?: Tizen.ErrorCallback
    ): void;
  }

  // 2.28
  class SearchFilter {
    constructor(
      contentType: keyof typeof MediaControllerContentType,
      category?: keyof typeof MediaControllerSearchCategory,
      keyword?: Tizen.DOMString,
      extraData?: Tizen.Bundle
    );
    contentType: keyof typeof MediaControllerContentType;
    category: keyof typeof MediaControllerSearchCategory;
    keyword?: Tizen.DOMString;
    extraData?: Tizen.Bundle;
  }

  // 2.29
  type MediaControllerServerInfoArraySuccessCallback = (
    servers: MediaControllerServerInfo[]
  ) => void;

  // 2.30
  type MediaControllerSendCommandSuccessCallback = (data?: object) => void;

  // 2.31
  class RequestReply {
    constructor(data?: Tizen.Bundle, code?: Tizen.long);
    data?: Tizen.Bundle;
    code: Tizen.long;
  }

  // 2.32
  type MediaControllerSearchRequestReplyCallback = (
    reply?: RequestReply
  ) => void;

  // 2.33
  type MediaControllerSearchRequestCallback = (
    clientName: ApplicationId,
    request: SearchFilter[]
  ) => RequestReply | void;

  // 2.34
  type MediaControllerReceiveCommandCallback = (
    senderAppName: ApplicationId,
    command: Tizen.DOMString,
    data: object
  ) => RequestReply | void;

  // 2.35
  type MediaControllerEnabledChangeRequestCallback = (
    clientName: ApplicationId,
    enabled: boolean
  ) => RequestReply | void;

  // 2.36
  type MediaControllerEnabledChangeCallback = (enabled: boolean) => void;

  // 2.37
  type MediaControllerDisplayModeChangeRequestCallback = (
    clientName: ApplicationId,
    mode: keyof typeof MediaControllerDisplayModeType
  ) => RequestReply | void;

  // 2.38
  type MediaControllerDisplayModeChangeCallback = (
    mode: keyof typeof MediaControllerDisplayModeType
  ) => void;

  // 2.39
  type MediaControllerDisplayRotationChangeRequestCallback = (
    clientName: ApplicationId,
    displayRotation: keyof typeof MediaControllerDisplayRotationType
  ) => RequestReply | void;

  // 2.40
  type MediaControllerDisplayRotationChangeCallback = (
    displayRotation: keyof typeof MediaControllerDisplayRotationType
  ) => void;

  // 2.41
  type MediaControllerServerStatusChangeCallback = (
    status: keyof typeof MediaControllerServerState
  ) => void;

  // 2.42
  interface MediaControllerPlaybackInfoChangeCallback {
    onplaybackchanged(
      state: keyof typeof MediaControllerPlaybackState,
      position: Tizen.ulong
    ): void;
    onshufflemodechanged(mode: boolean): void;
    onrepeatmodechanged(mode: boolean): void;
    onrepeatstatechanged(state: keyof typeof MediaControllerRepeatState): void;
    onmetadatachanged(metadata: MediaControllerMetadata): void;
  }

  // 2.43
  interface MediaControllerChangeRequestPlaybackInfoCallback {
    onplaybackstaterequest(
      state: keyof typeof MediaControllerPlaybackState,
      clientName: ApplicationId
    ): void;
    onplaybackpositionrequest(
      position: Tizen.ulong,
      clientName: ApplicationId
    ): void;
    onshufflemoderequest(mode: boolean, clientName: ApplicationId): void;
    onrepeatmoderequest(mode: boolean, clientName: ApplicationId): void;
    onrepeatstaterequest(
      state: keyof typeof MediaControllerRepeatState,
      clientName: ApplicationId
    ): void;
    onplaybackitemrequest(
      playlistName: Tizen.DOMString,
      index: Tizen.DOMString,
      state: keyof typeof MediaControllerPlaybackState,
      position: Tizen.ulong,
      clientName: ApplicationId
    ): void;
  }

  // 2.44
  type MediaControllerGetAllPlaylistsSuccessCallback = (
    playlists: MediaControllerPlaylist[]
  ) => void;

  // 2.45
  interface MediaControllerPlaylistUpdatedCallback {
    onplaylistupdated(
      serverName: Tizen.DOMString,
      playlist: MediaControllerPlaylist
    ): void;
    onplaylistdeleted(
      serverName: Tizen.DOMString,
      playlistName: Tizen.DOMString
    ): void;
  }

  // 2.46
  type MediaControllerGetItemsSuccessCallback = (
    items: MediaControllerPlaylistItem[]
  ) => void;

  // 2.47
  interface MediaControllerAbilityChangeCallback {
    onplaybackabilitychanged(
      server: MediaControllerServerInfo,
      abilities: MediaControllerPlaybackAbilitiesInfo
    ): void;
    ondisplaymodeabilitychanged(
      server: MediaControllerServerInfo,
      abilities: MediaControllerDisplayModeAbilitiesInfo
    ): void;
    ondisplayrotationabilitychanged(
      server: MediaControllerServerInfo,
      abilities: MediaControllerDisplayRotationAbilitiesInfo
    ): void;
    onsimpleabilitychanged(
      server: MediaControllerServerInfo,
      type: keyof typeof MediaControllerSimpleAbility,
      support: keyof typeof MediaControllerAbilitySupport
    ): void;
  }
}
