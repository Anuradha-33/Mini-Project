import AgoraRTC, { IAgoraRTCClient, LiveStreamingTranscodingConfig, ICameraVideoTrack, IMicrophoneAudioTrack, ScreenVideoTrackInitConfig, VideoEncoderConfiguration, AREAS, IRemoteAudioTrack, ClientRole } from 'agora-rtc-sdk-ng';


export interface IUser {
  uid: number;
  name?: string;
}
export interface IRtc {
  client: IAgoraRTCClient;
  localAudioTrack: IMicrophoneAudioTrack;
  localVideoTrack: ICameraVideoTrack;
}

export interface TokenInfo {
  uid: number;
  token: string;
}

export interface OptionsInfo {
  appId: string;
  channel: string;
  uid: number;
}
