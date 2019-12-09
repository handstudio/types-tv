export declare module AVInfo {
  const enum AVInfoSpeakerModeType {
    SOUND_TV_OUTPUT_SPEAKER = 0,
    SOUND_TV_OUTPUT_EXTERNAL_SPEAKER = 1,
    SOUND_TV_OUTPUT_RECEIVER = 2,
    SOUND_TV_OUTPUT_SOUND_SHARE = 3,
    SOUND_TV_OUTPUT_MULTIROOM_LINK = 4,
    SOUND_TV_OUTPUT_BT_HEADSET = 5,
    SOUND_TV_OUTPUT_DUAL_BT_SPK = 6,
    SOUND_TV_OUTPUT_MAX = 7,
    SOUND_TV_OUTPUT_DUAL_RECEIVER_SPK = 8,
    SOUND_TV_OUTPUT_DUAL_EXTERNAL_SPK = 9,
    SOUND_TV_OUTPUT_DUAL_MULTIROOM_SPK = 10
  }
  interface AvInfoManager {
    AvInfoSoundOutputMode: AVInfoSpeakerModeType;
    getSpeakerSelection(): AVInfoSpeakerModeType;
    setSpeakerSelection(): boolean;
  }
}