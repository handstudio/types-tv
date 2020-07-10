// 1.1
export enum MediaControllerServerState {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

// 1.2
export enum MediaControllerSearchCategory {
  NO_CATEGORY = 'NO_CATEGORY',
  TITLE = 'TITLE',
  ARTIST = 'ARTIST',
  ALBUM = 'ALBUM',
  GENRE = 'GENRE',
  TPO = 'TPO',
}

// 1.3
export enum MediaControllerPlaybackState {
  PLAY = 'PLAY',
  PAUSE = 'PAUSE',
  STOP = 'STOP',
  NEXT = 'NEXT',
  PREV = 'PREV',
  FORWARD = 'FORWARD',
  REWIND = 'REWIND',
}

// 1.4
export enum MediaControllerRepeatState {
  REPEAT_OFF = 'REPEAT_OFF',
  REPEAT_ONE = 'REPEAT_ONE',
  REPEAT_ALL = 'REPEAT_ALL',
}

// 1.5
export enum MediaControllerContentType {
  IMAGE = 'IMAGE',
  MUSIC = 'MUSIC',
  VIDEO = 'VIDEO',
  OTHER = 'OTHER',
  UNDECIDED = 'UNDECIDED',
}

// 1.6
export enum MediaControllerContentAgeRating {
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
export enum MediaControllerAbilitySupport {
  YES = 'YES',
  NO = 'NO',
  UNDECIDED = 'UNDECIDED',
}

// 1.8
export enum MediaControllerSimpleAbility {
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
export enum MediaControllerDisplayModeType {
  LETTER_BOX = 'LETTER_BOX',
  ORIGIN_SIZE = 'ORIGIN_SIZE',
  FULL_SCREEN = 'FULL_SCREEN',
  CROPPED_FULL = 'CROPPED_FULL',
}

// 1.10
export enum MediaControllerDisplayRotationType {
  ROTATION_NONE = 'ROTATION_NONE',
  ROTATION_90 = 'ROTATION_90',
  ROTATION_180 = 'ROTATION_180',
  ROTATION_270 = 'ROTATION_270',
}