import { Tizen } from './tizen';

export declare module MediaController {
  type ApplicationId = Tizen.DOMString;

  // 1.1
  const enum MediaControllerServerState {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
  }

  // 1.2
  const enum MediaControllerSearchCategory {
    NO_CATEGORY = 'NO_CATEGORY',
    TITLE = 'TITLE',
    ARTIST = 'ARTIST',
    ALBUM = 'ALBUM',
    GENRE = 'GENRE',
    TPO = 'TPO',
  }

  // 1.3
  const enum MediaControllerPlaybackState {
    PLAY = 'PLAY',
    PAUSE = 'PAUSE',
    STOP = 'STOP',
    NEXT = 'NEXT',
    PREV = 'PREV',
    FORWARD = 'FORWARD',
    REWIND = 'REWIND',
  }

  // 1.4
  const enum MediaControllerRepeatState {
    REPEAT_OFF = 'REPEAT_OFF',
    REPEAT_ONE = 'REPEAT_ONE',
    REPEAT_ALL = 'REPEAT_ALL',
  }

  // 1.5
  const enum MediaControllerContentType {
    IMAGE = 'IMAGE',
    MUSIC = 'MUSIC',
    VIDEO = 'VIDEO',
    OTHER = 'OTHER',
    UNDECIDED = 'UNDECIDED',
  }

  // 1.6
  enum MediaControllerContentAgeRating {
    ALL = 'ALL',
    ONE = '1',
    TWO = '2',
    THREE = '3',
    FOUR = '4',
    FIVE = '5',
    SIX = '6',
    SEVEN = '7',
    EIGHT = '8',
    NINE = '9',
    TEN = '10',
    ELEVEN = '11',
    TWELVE = '12',
    THIRTEEN = '13',
    FOURTREEN = '14',
    FIFTEEN = '15',
    SIXTEEN = '16',
    SEVENTEEN = '17',
    EIGHTEEN = '18',
    NINETEEN = '19',
  }

  // 1.7
  const enum MediaControllerAbilitySupport {
    YES = 'YES',
    NO = 'NO',
    UNDECIDED = 'UNDECIDED',
  }

  // 1.8
  const enum MediaControllerSimpleAbility {
    PLAYBACK_POSITION = 'PLAYBACK_POSITION',
    SHUFFLE = 'SHUFFLE',
    REPEAT = 'REPEAT',
    PLAYLIST = 'PLAYLIST',
    CLIENT_CUSTOM = 'CLIENT_CUSTOM',
    SEARCH = 'SEARCH',
    SUBTITLES = 'SUBTITLES',
    MODE_360 = 'MODE_360',
  }

  // 1.9
  const enum MediaControllerDisplayModeType {
    LETTER_BOX = 'LETTER_BOX',
    ORIGIN_SIZE = 'ORIGIN_SIZE',
    FULL_SCREEN = 'FULL_SCREEN',
    CROPPED_FULL = 'CROPPED_FULL',
  }

  // 1.10
  const enum MediaControllerDisplayRotationType {
    ROTATION_NONE = 'ROTATION_NONE',
    ROTATION_90 = 'ROTATION_90',
    ROTATION_180 = 'ROTATION_180',
    ROTATION_270 = 'ROTATION_270',
  }

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
    updatePlaybackState(state: MediaControllerPlaybackState): void;
    updateIconURI(iconURI?: Tizen.DOMString): void;
    updatePlaybackPosition(position: Tizen.ulong): void;
    updatePlaybackAgeRating(rating: MediaControllerContentAgeRating): void;
    updatePlaybackContentType(type: MediaControllerContentType): void;
    updateShuffleMode(mode: boolean): void;
    updateRepeatMode(mode: boolean): void;
    updateRepeatState(state: MediaControllerRepeatState): void;
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
    readonly state: MediaControllerServerState;
    readonly playbackInfo: MediaControllerPlaybackInfo;
    readonly iconURI?: Tizen.DOMString;
    readonly abilities: MediaControllerAbilitiesInfo;
    readonly subtitles: MediaControllerSubtitlesInfo;
    readonly mode360: MediaControllerMode360Info;
    readonly displayMode: MediaControllerDisplayModeInfo;
    readonly displayRotation: MediaControllerDisplayRotationInfo;
    sendPlaybackState(
      state: MediaControllerPlaybackState,
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
      state: MediaControllerRepeatState,
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
      state: MediaControllerPlaybackState,
      position: Tizen.ulong
    ): void;
    addPlaylistUpdatedListener(
      listener: MediaControllerPlaylistUpdatedCallback
    ): Tizen.long;
    removePlaylistUpdatedListener(listenerId: Tizen.long): void;
  }

  // 2.6
  interface MediaControllerPlaybackInfo {
    readonly state: MediaControllerPlaybackState;
    readonly position: Tizen.ulong;
    readonly shuffleMode: boolean;
    readonly repeatMode: boolean;
    readonly metadata: MediaControllerMetadata;
    readonly ageRating: MediaControllerContentAgeRating;
    readonly contentType: MediaControllerContentType;
    readonly repeatState: MediaControllerRepeatState;
    readonly index?: Tizen.DOMString;
    readonly playlistName?: Tizen.DOMString;
  }

  // 2.7
  interface MediaControllerAbilities {
    readonly playback: MediaControllerPlaybackAbilities;
    readonly displayMode: MediaControllerDisplayModeAbilities;
    readonly displayRotation: MediaControllerDisplayRotationAbilities;
    playbackPosition: MediaControllerAbilitySupport;
    shuffle: MediaControllerAbilitySupport;
    repeat: MediaControllerAbilitySupport;
    playlist: MediaControllerAbilitySupport;
    clientCustom: MediaControllerAbilitySupport;
    search: MediaControllerAbilitySupport;
    subtitles: MediaControllerAbilitySupport;
    mode360: MediaControllerAbilitySupport;
  }

  // 2.8
  interface MediaControllerPlaybackAbilities {
    play: MediaControllerAbilitySupport;
    pause: MediaControllerAbilitySupport;
    stop: MediaControllerAbilitySupport;
    next: MediaControllerAbilitySupport;
    prev: MediaControllerAbilitySupport;
    forward: MediaControllerAbilitySupport;
    rewind: MediaControllerAbilitySupport;
    togglePlayPause: MediaControllerAbilitySupport;
    saveAbilities(): void;
  }

  // 2.9
  interface MediaControllerDisplayModeAbilities {
    letterBox: MediaControllerAbilitySupport;
    originSize: MediaControllerAbilitySupport;
    fullScreen: MediaControllerAbilitySupport;
    croppedFull: MediaControllerAbilitySupport;
  }

  //2.10
  interface MediaControllerDisplayRotationAbilities {
    rotationNone: MediaControllerAbilitySupport;
    rotation90: MediaControllerAbilitySupport;
    rotation180: MediaControllerAbilitySupport;
    rotation270: MediaControllerAbilitySupport;
  }

  // 2.11
  interface MediaControllerAbilitiesInfo {
    readonly playback: MediaControllerPlaybackAbilitiesInfo;
    readonly displayMode: MediaControllerDisplayModeAbilitiesInfo;
    readonly displayRotation: MediaControllerDisplayRotationAbilitiesInfo;
    readonly playbackPosition: MediaControllerAbilitySupport;
    readonly shuffle: MediaControllerAbilitySupport;
    readonly repeat: MediaControllerAbilitySupport;
    readonly playlist: MediaControllerAbilitySupport;
    readonly clientCustom: MediaControllerAbilitySupport;
    readonly search: MediaControllerAbilitySupport;
    readonly subtitles: MediaControllerAbilitySupport;
    readonly mode360: MediaControllerAbilitySupport;
    subscribe(): void;
    unsubscribe(): void;
  }

  // 2.12
  interface MediaControllerPlaybackAbilitiesInfo {
    readonly play: MediaControllerAbilitySupport;
    readonly pause: MediaControllerAbilitySupport;
    readonly stop: MediaControllerAbilitySupport;
    readonly next: MediaControllerAbilitySupport;
    readonly prev: MediaControllerAbilitySupport;
    readonly forward: MediaControllerAbilitySupport;
    readonly rewind: MediaControllerAbilitySupport;
    readonly togglePlayPause: MediaControllerAbilitySupport;
  }

  // 2.13
  interface MediaControllerDisplayModeAbilitiesInfo {
    readonly letterBox: MediaControllerAbilitySupport;
    readonly originSize: MediaControllerAbilitySupport;
    readonly fullScreen: MediaControllerAbilitySupport;
    readonly croppedFull: MediaControllerAbilitySupport;
  }

  // 2.14
  interface MediaControllerDisplayRotationAbilitiesInfo {
    readonly rotationNone: MediaControllerAbilitySupport;
    readonly rotation90: MediaControllerAbilitySupport;
    readonly rotation180: MediaControllerAbilitySupport;
    readonly rotation270: MediaControllerAbilitySupport;
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
    type: MediaControllerDisplayModeType;
    addChangeRequestListener(
      listener: MediaControllerDisplayModeChangeRequestCallback
    ): Tizen.long;
    removeChangeRequestListener(watchId: Tizen.long): void;
  }

  // 2.20
  interface MediaControllerDisplayModeInfo {
    readonly type: MediaControllerDisplayModeType;
    sendRequest(
      type: MediaControllerDisplayModeType,
      replyCallback: MediaControllerSendCommandSuccessCallback
    ): void;
    addModeChangeListener(
      listener: MediaControllerDisplayModeChangeCallback
    ): void;
    removeModeChangeListener(watchId: Tizen.long): void;
  }

  // 2.21
  interface MediaControllerDisplayRotation {
    displayRotation: MediaControllerDisplayRotationType;
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
    readonly displayRotation: MediaControllerDisplayRotationType;
    sendRequest(
      displayRotation: MediaControllerDisplayRotationType,
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
      contentType: MediaControllerContentType,
      category?: MediaControllerSearchCategory,
      keyword?: Tizen.DOMString,
      extraData?: Tizen.Bundle
    );
    contentType: MediaControllerContentType;
    category: MediaControllerSearchCategory;
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
    mode: MediaControllerDisplayModeType
  ) => RequestReply | void;

  // 2.38
  type MediaControllerDisplayModeChangeCallback = (
    mode: MediaControllerDisplayModeType
  ) => void;

  // 2.39
  type MediaControllerDisplayRotationChangeRequestCallback = (
    clientName: ApplicationId,
    displayRotation: MediaControllerDisplayRotationType
  ) => RequestReply | void;

  // 2.40
  type MediaControllerDisplayRotationChangeCallback = (
    displayRotation: MediaControllerDisplayRotationType
  ) => void;

  // 2.41
  type MediaControllerServerStatusChangeCallback = (
    status: MediaControllerServerState
  ) => void;

  // 2.42
  interface MediaControllerPlaybackInfoChangeCallback {
    onplaybackchanged(
      state: MediaControllerPlaybackState,
      position: Tizen.ulong
    ): void;
    onshufflemodechanged(mode: boolean): void;
    onrepeatmodechanged(mode: boolean): void;
    onrepeatstatechanged(state: MediaControllerRepeatState): void;
    onmetadatachanged(metadata: MediaControllerMetadata): void;
  }

  // 2.43
  interface MediaControllerChangeRequestPlaybackInfoCallback {
    onplaybackstaterequest(
      state: MediaControllerPlaybackState,
      clientName: ApplicationId
    ): void;
    onplaybackpositionrequest(
      position: Tizen.ulong,
      clientName: ApplicationId
    ): void;
    onshufflemoderequest(mode: boolean, clientName: ApplicationId): void;
    onrepeatmoderequest(mode: boolean, clientName: ApplicationId): void;
    onrepeatstaterequest(
      state: MediaControllerRepeatState,
      clientName: ApplicationId
    ): void;
    onplaybackitemrequest(
      playlistName: Tizen.DOMString,
      index: Tizen.DOMString,
      state: MediaControllerPlaybackState,
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
      type: MediaControllerSimpleAbility,
      support: MediaControllerAbilitySupport
    ): void;
  }
}
