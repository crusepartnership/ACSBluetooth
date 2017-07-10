
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.media.AudioAttributes.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module media {
        export class AsyncPlayer extends javalangObject {
            public play(param0: android.content.Context, param1: android.net.Uri, param2: boolean, param3: android.media.AudioAttributes): void;

            public stop(): void;

            public play(param0: android.content.Context, param1: android.net.Uri, param2: boolean, param3: number): void;

            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.media.AudioAttributes.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module media {
        export class AudioAttributes extends javalangObject implements android.os.Parcelable {
            public static CONTENT_TYPE_MOVIE: number;
            public static CONTENT_TYPE_MUSIC: number;
            public static CONTENT_TYPE_SONIFICATION: number;
            public static CONTENT_TYPE_SPEECH: number;
            public static CONTENT_TYPE_UNKNOWN: number;
            public static CREATOR: android.os.Parcelable.Creator;
            public static FLAG_AUDIBILITY_ENFORCED: number;
            public static FLAG_HW_AV_SYNC: number;
            public static USAGE_ALARM: number;
            public static USAGE_ASSISTANCE_ACCESSIBILITY: number;
            public static USAGE_ASSISTANCE_NAVIGATION_GUIDANCE: number;
            public static USAGE_ASSISTANCE_SONIFICATION: number;
            public static USAGE_GAME: number;
            public static USAGE_MEDIA: number;
            public static USAGE_NOTIFICATION: number;
            public static USAGE_NOTIFICATION_COMMUNICATION_DELAYED: number;
            public static USAGE_NOTIFICATION_COMMUNICATION_INSTANT: number;
            public static USAGE_NOTIFICATION_COMMUNICATION_REQUEST: number;
            public static USAGE_NOTIFICATION_EVENT: number;
            public static USAGE_NOTIFICATION_RINGTONE: number;
            public static USAGE_UNKNOWN: number;
            public static USAGE_VOICE_COMMUNICATION: number;
            public static USAGE_VOICE_COMMUNICATION_SIGNALLING: number;

            public toString(): string;

            public getFlags(): number;

            public equals(param0: javalangObject): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getContentType(): number;

            public getUsage(): number;

            public hashCode(): number;
        }
        export module AudioAttributes {
            export class Builder extends javalangObject {
                public setUsage(param0: number): android.media.AudioAttributes.Builder;

                public setLegacyStreamType(param0: number): android.media.AudioAttributes.Builder;

                public setContentType(param0: number): android.media.AudioAttributes.Builder;

                public setFlags(param0: number): android.media.AudioAttributes.Builder;

                public build(): android.media.AudioAttributes;

                public constructor(param0: android.media.AudioAttributes);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.media.AudioDeviceInfo.d.ts" />
declare module android {
    export module media {
        export abstract class AudioDeviceCallback extends javalangObject {
            public onAudioDevicesRemoved(param0: native.Array<android.media.AudioDeviceInfo>): void;

            public constructor();

            public onAudioDevicesAdded(param0: native.Array<android.media.AudioDeviceInfo>): void;
        }
    }
}

declare module android {
    export module media {
        export class AudioDeviceInfo extends javalangObject {
            public static TYPE_AUX_LINE: number;
            public static TYPE_BLUETOOTH_A2DP: number;
            public static TYPE_BLUETOOTH_SCO: number;
            public static TYPE_BUILTIN_EARPIECE: number;
            public static TYPE_BUILTIN_MIC: number;
            public static TYPE_BUILTIN_SPEAKER: number;
            public static TYPE_DOCK: number;
            public static TYPE_FM: number;
            public static TYPE_FM_TUNER: number;
            public static TYPE_HDMI: number;
            public static TYPE_HDMI_ARC: number;
            public static TYPE_IP: number;
            public static TYPE_LINE_ANALOG: number;
            public static TYPE_LINE_DIGITAL: number;
            public static TYPE_TELEPHONY: number;
            public static TYPE_TV_TUNER: number;
            public static TYPE_UNKNOWN: number;
            public static TYPE_USB_ACCESSORY: number;
            public static TYPE_USB_DEVICE: number;
            public static TYPE_WIRED_HEADPHONES: number;
            public static TYPE_WIRED_HEADSET: number;

            public getChannelMasks(): native.Array<number>;

            public getType(): number;

            public getId(): number;

            public getChannelIndexMasks(): native.Array<number>;

            public getProductName(): string;

            public isSink(): boolean;

            public getSampleRates(): native.Array<number>;

            public getChannelCounts(): native.Array<number>;

            public isSource(): boolean;

            public getEncodings(): native.Array<number>;
        }
    }
}

/// <reference path="./android.media.AudioFormat.d.ts" />
declare module android {
    export module media {
        export class AudioFormat extends javalangObject {
            public static CHANNEL_CONFIGURATION_DEFAULT: number;
            public static CHANNEL_CONFIGURATION_INVALID: number;
            public static CHANNEL_CONFIGURATION_MONO: number;
            public static CHANNEL_CONFIGURATION_STEREO: number;
            public static CHANNEL_INVALID: number;
            public static CHANNEL_IN_BACK: number;
            public static CHANNEL_IN_BACK_PROCESSED: number;
            public static CHANNEL_IN_DEFAULT: number;
            public static CHANNEL_IN_FRONT: number;
            public static CHANNEL_IN_FRONT_PROCESSED: number;
            public static CHANNEL_IN_LEFT: number;
            public static CHANNEL_IN_LEFT_PROCESSED: number;
            public static CHANNEL_IN_MONO: number;
            public static CHANNEL_IN_PRESSURE: number;
            public static CHANNEL_IN_RIGHT: number;
            public static CHANNEL_IN_RIGHT_PROCESSED: number;
            public static CHANNEL_IN_STEREO: number;
            public static CHANNEL_IN_VOICE_DNLINK: number;
            public static CHANNEL_IN_VOICE_UPLINK: number;
            public static CHANNEL_IN_X_AXIS: number;
            public static CHANNEL_IN_Y_AXIS: number;
            public static CHANNEL_IN_Z_AXIS: number;
            public static CHANNEL_OUT_5POINT1: number;
            public static CHANNEL_OUT_7POINT1: number;
            public static CHANNEL_OUT_7POINT1_SURROUND: number;
            public static CHANNEL_OUT_BACK_CENTER: number;
            public static CHANNEL_OUT_BACK_LEFT: number;
            public static CHANNEL_OUT_BACK_RIGHT: number;
            public static CHANNEL_OUT_DEFAULT: number;
            public static CHANNEL_OUT_FRONT_CENTER: number;
            public static CHANNEL_OUT_FRONT_LEFT: number;
            public static CHANNEL_OUT_FRONT_LEFT_OF_CENTER: number;
            public static CHANNEL_OUT_FRONT_RIGHT: number;
            public static CHANNEL_OUT_FRONT_RIGHT_OF_CENTER: number;
            public static CHANNEL_OUT_LOW_FREQUENCY: number;
            public static CHANNEL_OUT_MONO: number;
            public static CHANNEL_OUT_QUAD: number;
            public static CHANNEL_OUT_SIDE_LEFT: number;
            public static CHANNEL_OUT_SIDE_RIGHT: number;
            public static CHANNEL_OUT_STEREO: number;
            public static CHANNEL_OUT_SURROUND: number;
            public static ENCODING_AC3: number;
            public static ENCODING_DEFAULT: number;
            public static ENCODING_DTS: number;
            public static ENCODING_DTS_HD: number;
            public static ENCODING_E_AC3: number;
            public static ENCODING_INVALID: number;
            public static ENCODING_PCM_16BIT: number;
            public static ENCODING_PCM_8BIT: number;
            public static ENCODING_PCM_FLOAT: number;

            public getSampleRate(): number;

            public getChannelCount(): number;

            public toString(): string;

            public getEncoding(): number;

            public getChannelIndexMask(): number;

            public getChannelMask(): number;
        }
        export module AudioFormat {
            export class Builder extends javalangObject {
                public constructor(param0: android.media.AudioFormat);

                public setSampleRate(param0: number): android.media.AudioFormat.Builder;

                public setEncoding(param0: number): android.media.AudioFormat.Builder;

                public setChannelMask(param0: number): android.media.AudioFormat.Builder;

                public build(): android.media.AudioFormat;

                public constructor();

                public setChannelIndexMask(param0: number): android.media.AudioFormat.Builder;
            }
        }
    }
}

/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.media.AudioDeviceCallback.d.ts" />
/// <reference path="./android.media.AudioDeviceInfo.d.ts" />
/// <reference path="./android.media.RemoteControlClient.d.ts" />
/// <reference path="./android.media.RemoteController.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module media {
        export class AudioManager extends javalangObject {
            public static ACTION_AUDIO_BECOMING_NOISY: string;
            public static ACTION_HDMI_AUDIO_PLUG: string;
            public static ACTION_HEADSET_PLUG: string;
            public static ACTION_SCO_AUDIO_STATE_CHANGED: string;
            public static ACTION_SCO_AUDIO_STATE_UPDATED: string;
            public static ADJUST_LOWER: number;
            public static ADJUST_MUTE: number;
            public static ADJUST_RAISE: number;
            public static ADJUST_SAME: number;
            public static ADJUST_TOGGLE_MUTE: number;
            public static ADJUST_UNMUTE: number;
            public static AUDIOFOCUS_GAIN: number;
            public static AUDIOFOCUS_GAIN_TRANSIENT: number;
            public static AUDIOFOCUS_GAIN_TRANSIENT_EXCLUSIVE: number;
            public static AUDIOFOCUS_GAIN_TRANSIENT_MAY_DUCK: number;
            public static AUDIOFOCUS_LOSS: number;
            public static AUDIOFOCUS_LOSS_TRANSIENT: number;
            public static AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK: number;
            public static AUDIOFOCUS_REQUEST_FAILED: number;
            public static AUDIOFOCUS_REQUEST_GRANTED: number;
            public static AUDIO_SESSION_ID_GENERATE: number;
            public static ERROR: number;
            public static ERROR_DEAD_OBJECT: number;
            public static EXTRA_AUDIO_PLUG_STATE: string;
            public static EXTRA_ENCODINGS: string;
            public static EXTRA_MAX_CHANNEL_COUNT: string;
            public static EXTRA_RINGER_MODE: string;
            public static EXTRA_SCO_AUDIO_PREVIOUS_STATE: string;
            public static EXTRA_SCO_AUDIO_STATE: string;
            public static EXTRA_VIBRATE_SETTING: string;
            public static EXTRA_VIBRATE_TYPE: string;
            public static FLAG_ALLOW_RINGER_MODES: number;
            public static FLAG_PLAY_SOUND: number;
            public static FLAG_REMOVE_SOUND_AND_VIBRATE: number;
            public static FLAG_SHOW_UI: number;
            public static FLAG_VIBRATE: number;
            public static FX_FOCUS_NAVIGATION_DOWN: number;
            public static FX_FOCUS_NAVIGATION_LEFT: number;
            public static FX_FOCUS_NAVIGATION_RIGHT: number;
            public static FX_FOCUS_NAVIGATION_UP: number;
            public static FX_KEYPRESS_DELETE: number;
            public static FX_KEYPRESS_INVALID: number;
            public static FX_KEYPRESS_RETURN: number;
            public static FX_KEYPRESS_SPACEBAR: number;
            public static FX_KEYPRESS_STANDARD: number;
            public static FX_KEY_CLICK: number;
            public static GET_DEVICES_ALL: number;
            public static GET_DEVICES_INPUTS: number;
            public static GET_DEVICES_OUTPUTS: number;
            public static MODE_CURRENT: number;
            public static MODE_INVALID: number;
            public static MODE_IN_CALL: number;
            public static MODE_IN_COMMUNICATION: number;
            public static MODE_NORMAL: number;
            public static MODE_RINGTONE: number;
            public static NUM_STREAMS: number;
            public static PROPERTY_OUTPUT_FRAMES_PER_BUFFER: string;
            public static PROPERTY_OUTPUT_SAMPLE_RATE: string;
            public static PROPERTY_SUPPORT_MIC_NEAR_ULTRASOUND: string;
            public static PROPERTY_SUPPORT_SPEAKER_NEAR_ULTRASOUND: string;
            public static RINGER_MODE_CHANGED_ACTION: string;
            public static RINGER_MODE_NORMAL: number;
            public static RINGER_MODE_SILENT: number;
            public static RINGER_MODE_VIBRATE: number;
            public static ROUTE_ALL: number;
            public static ROUTE_BLUETOOTH: number;
            public static ROUTE_BLUETOOTH_A2DP: number;
            public static ROUTE_BLUETOOTH_SCO: number;
            public static ROUTE_EARPIECE: number;
            public static ROUTE_HEADSET: number;
            public static ROUTE_SPEAKER: number;
            public static SCO_AUDIO_STATE_CONNECTED: number;
            public static SCO_AUDIO_STATE_CONNECTING: number;
            public static SCO_AUDIO_STATE_DISCONNECTED: number;
            public static SCO_AUDIO_STATE_ERROR: number;
            public static STREAM_ALARM: number;
            public static STREAM_DTMF: number;
            public static STREAM_MUSIC: number;
            public static STREAM_NOTIFICATION: number;
            public static STREAM_RING: number;
            public static STREAM_SYSTEM: number;
            public static STREAM_VOICE_CALL: number;
            public static USE_DEFAULT_STREAM_TYPE: number;
            public static VIBRATE_SETTING_CHANGED_ACTION: string;
            public static VIBRATE_SETTING_OFF: number;
            public static VIBRATE_SETTING_ON: number;
            public static VIBRATE_SETTING_ONLY_SILENT: number;
            public static VIBRATE_TYPE_NOTIFICATION: number;
            public static VIBRATE_TYPE_RINGER: number;

            public registerRemoteControlClient(param0: android.media.RemoteControlClient): void;

            public startBluetoothSco(): void;

            public setStreamVolume(param0: number, param1: number, param2: number): void;

            public unloadSoundEffects(): void;

            public isBluetoothScoOn(): boolean;

            public playSoundEffect(param0: number, param1: number): void;

            public getDevices(param0: number): native.Array<android.media.AudioDeviceInfo>;

            public setParameters(param0: string): void;

            public isBluetoothScoAvailableOffCall(): boolean;

            public isWiredHeadsetOn(): boolean;

            public stopBluetoothSco(): void;

            public registerMediaButtonEventReceiver(param0: android.content.ComponentName): void;

            public registerRemoteController(param0: android.media.RemoteController): boolean;

            public isMusicActive(): boolean;

            public setVibrateSetting(param0: number, param1: number): void;

            public setMode(param0: number): void;

            public generateAudioSessionId(): number;

            public getStreamMaxVolume(param0: number): number;

            public getVibrateSetting(param0: number): number;

            public adjustSuggestedStreamVolume(param0: number, param1: number, param2: number): void;

            public getProperty(param0: string): string;

            public registerMediaButtonEventReceiver(param0: android.app.PendingIntent): void;

            public getMode(): number;

            public requestAudioFocus(param0: android.media.AudioManager.OnAudioFocusChangeListener, param1: number, param2: number): number;

            public isSpeakerphoneOn(): boolean;

            public unregisterRemoteController(param0: android.media.RemoteController): void;

            public isMicrophoneMute(): boolean;

            public isStreamMute(param0: number): boolean;

            public loadSoundEffects(): void;

            public setStreamSolo(param0: number, param1: boolean): void;

            public adjustStreamVolume(param0: number, param1: number, param2: number): void;

            public unregisterAudioDeviceCallback(param0: android.media.AudioDeviceCallback): void;

            public isVolumeFixed(): boolean;

            public shouldVibrate(param0: number): boolean;

            public registerAudioDeviceCallback(param0: android.media.AudioDeviceCallback, param1: android.os.Handler): void;

            public playSoundEffect(param0: number): void;

            public setWiredHeadsetOn(param0: boolean): void;

            public setBluetoothScoOn(param0: boolean): void;

            public unregisterRemoteControlClient(param0: android.media.RemoteControlClient): void;

            public isBluetoothA2dpOn(): boolean;

            public getParameters(param0: string): string;

            public getRingerMode(): number;

            public adjustVolume(param0: number, param1: number): void;

            public setBluetoothA2dpOn(param0: boolean): void;

            public setRouting(param0: number, param1: number, param2: number): void;

            public setRingerMode(param0: number): void;

            public unregisterMediaButtonEventReceiver(param0: android.content.ComponentName): void;

            public setStreamMute(param0: number, param1: boolean): void;

            public setSpeakerphoneOn(param0: boolean): void;

            public dispatchMediaKeyEvent(param0: android.view.KeyEvent): void;

            public unregisterMediaButtonEventReceiver(param0: android.app.PendingIntent): void;

            public setMicrophoneMute(param0: boolean): void;

            public abandonAudioFocus(param0: android.media.AudioManager.OnAudioFocusChangeListener): number;

            public getStreamVolume(param0: number): number;

            public getRouting(param0: number): number;
        }
        export module AudioManager {
            export class OnAudioFocusChangeListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.AudioManager$OnAudioFocusChangeListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onAudioFocusChange(param0: number): void;
                });

                public onAudioFocusChange(param0: number): void;
            }
        }
    }
}

/// <reference path="./android.media.AudioDeviceInfo.d.ts" />
/// <reference path="./android.media.AudioFormat.d.ts" />
/// <reference path="./android.media.AudioRecord.d.ts" />
/// <reference path="./android.media.MediaSyncEvent.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
declare module android {
    export module media {
        export class AudioRecord extends javalangObject {
            public static ERROR: number;
            public static ERROR_BAD_VALUE: number;
            public static ERROR_INVALID_OPERATION: number;
            public static READ_BLOCKING: number;
            public static READ_NON_BLOCKING: number;
            public static RECORDSTATE_RECORDING: number;
            public static RECORDSTATE_STOPPED: number;
            public static STATE_INITIALIZED: number;
            public static STATE_UNINITIALIZED: number;
            public static SUCCESS: number;

            public getSampleRate(): number;

            public startRecording(param0: android.media.MediaSyncEvent): void;

            public read(param0: javanioByteBuffer, param1: number, param2: number): number;

            public getRoutedDevice(): android.media.AudioDeviceInfo;

            public addOnRoutingChangedListener(param0: android.media.AudioRecord.OnRoutingChangedListener, param1: android.os.Handler): void;

            public setPreferredDevice(param0: android.media.AudioDeviceInfo): boolean;

            public setRecordPositionUpdateListener(param0: android.media.AudioRecord.OnRecordPositionUpdateListener): void;

            public static getMinBufferSize(param0: number, param1: number, param2: number): number;

            public read(param0: native.Array<number>, param1: number, param2: number, param3: number): number;

            public removeOnRoutingChangedListener(param0: android.media.AudioRecord.OnRoutingChangedListener): void;

            public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);

            public stop(): void;

            public getAudioFormat(): number;

            public release(): void;

            public finalize(): void;

            public getState(): number;

            public setNotificationMarkerPosition(param0: number): number;

            public getPreferredDevice(): android.media.AudioDeviceInfo;

            public getBufferSizeInFrames(): number;

            public getAudioSource(): number;

            public read(param0: javanioByteBuffer, param1: number): number;
            public read(param0: native.Array<number>, param1: number, param2: number): number;

            public setRecordPositionUpdateListener(param0: android.media.AudioRecord.OnRecordPositionUpdateListener, param1: android.os.Handler): void;

            public getFormat(): android.media.AudioFormat;

            public getChannelCount(): number;

            public getAudioSessionId(): number;

            public setPositionNotificationPeriod(param0: number): number;

            public getRecordingState(): number;

            public getNotificationMarkerPosition(): number;

            public getChannelConfiguration(): number;

            public startRecording(): void;

            public getPositionNotificationPeriod(): number;
        }
        export module AudioRecord {
            export class Builder extends javalangObject {
                public setBufferSizeInBytes(param0: number): android.media.AudioRecord.Builder;

                public setAudioFormat(param0: android.media.AudioFormat): android.media.AudioRecord.Builder;

                public setAudioSource(param0: number): android.media.AudioRecord.Builder;

                public build(): android.media.AudioRecord;

                public constructor();
            }
            export class OnRecordPositionUpdateListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.AudioRecord$OnRecordPositionUpdateListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onMarkerReached(param0: android.media.AudioRecord): void;
                    onPeriodicNotification(param0: android.media.AudioRecord): void;
                });

                public onPeriodicNotification(param0: android.media.AudioRecord): void;

                public onMarkerReached(param0: android.media.AudioRecord): void;
            }
            export class OnRoutingChangedListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.AudioRecord$OnRoutingChangedListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onRoutingChanged(param0: android.media.AudioRecord): void;
                });

                public onRoutingChanged(param0: android.media.AudioRecord): void;
            }
        }
    }
}

declare module android {
    export module media {
        export class AudioTimestamp extends javalangObject {
            public framePosition: number;
            public nanoTime: number;

            public constructor();
        }
    }
}

/// <reference path="./android.media.AudioAttributes.d.ts" />
/// <reference path="./android.media.AudioDeviceInfo.d.ts" />
/// <reference path="./android.media.AudioFormat.d.ts" />
/// <reference path="./android.media.AudioTimestamp.d.ts" />
/// <reference path="./android.media.AudioTrack.d.ts" />
/// <reference path="./android.media.PlaybackParams.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
declare module android {
    export module media {
        export class AudioTrack extends javalangObject {
            public static ERROR: number;
            public static ERROR_BAD_VALUE: number;
            public static ERROR_INVALID_OPERATION: number;
            public static MODE_STATIC: number;
            public static MODE_STREAM: number;
            public static PLAYSTATE_PAUSED: number;
            public static PLAYSTATE_PLAYING: number;
            public static PLAYSTATE_STOPPED: number;
            public static STATE_INITIALIZED: number;
            public static STATE_NO_STATIC_DATA: number;
            public static STATE_UNINITIALIZED: number;
            public static SUCCESS: number;
            public static WRITE_BLOCKING: number;
            public static WRITE_NON_BLOCKING: number;

            public setState(param0: number): void;

            public getTimestamp(param0: android.media.AudioTimestamp): boolean;

            public setVolume(param0: number): number;

            public addOnRoutingChangedListener(param0: android.media.AudioTrack.OnRoutingChangedListener, param1: android.os.Handler): void;

            public setAuxEffectSendLevel(param0: number): number;

            public static getMinBufferSize(param0: number, param1: number, param2: number): number;

            public getPlaybackRate(): number;

            public stop(): void;

            public play(): void;

            public getPlaybackParams(): android.media.PlaybackParams;

            public getState(): number;

            public flush(): void;

            public write(param0: native.Array<number>, param1: number, param2: number, param3: number): number;

            public getPreferredDevice(): android.media.AudioDeviceInfo;

            public getBufferSizeInFrames(): number;

            public setPlaybackPositionUpdateListener(param0: android.media.AudioTrack.OnPlaybackPositionUpdateListener): void;

            public static getNativeOutputSampleRate(param0: number): number;

            public reloadStaticData(): number;

            public static getMaxVolume(): number;

            public write(param0: javanioByteBuffer, param1: number, param2: number, param3: number): number;

            public setPlaybackParams(param0: android.media.PlaybackParams): void;

            public write(param0: javanioByteBuffer, param1: number, param2: number): number;

            public setPlaybackRate(param0: number): number;

            public static getMinVolume(): number;

            public getPlayState(): number;

            public getSampleRate(): number;

            public attachAuxEffect(param0: number): number;

            public setPlaybackPositionUpdateListener(param0: android.media.AudioTrack.OnPlaybackPositionUpdateListener, param1: android.os.Handler): void;

            public setPlaybackHeadPosition(param0: number): number;

            public getRoutedDevice(): android.media.AudioDeviceInfo;

            public setPreferredDevice(param0: android.media.AudioDeviceInfo): boolean;

            public getStreamType(): number;

            public removeOnRoutingChangedListener(param0: android.media.AudioTrack.OnRoutingChangedListener): void;

            public pause(): void;

            public setStereoVolume(param0: number, param1: number): number;

            public getAudioFormat(): number;

            public release(): void;

            public finalize(): void;

            public setNotificationMarkerPosition(param0: number): number;

            public getNativeFrameCount(): number;

            public setLoopPoints(param0: number, param1: number, param2: number): number;

            public getPlaybackHeadPosition(): number;

            public write(param0: native.Array<number>, param1: number, param2: number): number;

            public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number);

            public getFormat(): android.media.AudioFormat;

            public getChannelCount(): number;

            public getAudioSessionId(): number;

            public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);

            public setPositionNotificationPeriod(param0: number): number;

            public getNotificationMarkerPosition(): number;

            public getChannelConfiguration(): number;

            public constructor(param0: android.media.AudioAttributes, param1: android.media.AudioFormat, param2: number, param3: number, param4: number);

            public getPositionNotificationPeriod(): number;
        }
        export module AudioTrack {
            export class Builder extends javalangObject {
                public setAudioFormat(param0: android.media.AudioFormat): android.media.AudioTrack.Builder;

                public setTransferMode(param0: number): android.media.AudioTrack.Builder;

                public setAudioAttributes(param0: android.media.AudioAttributes): android.media.AudioTrack.Builder;

                public setBufferSizeInBytes(param0: number): android.media.AudioTrack.Builder;

                public setSessionId(param0: number): android.media.AudioTrack.Builder;

                public build(): android.media.AudioTrack;

                public constructor();
            }
            export class OnPlaybackPositionUpdateListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.AudioTrack$OnPlaybackPositionUpdateListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onMarkerReached(param0: android.media.AudioTrack): void;
                    onPeriodicNotification(param0: android.media.AudioTrack): void;
                });

                public onMarkerReached(param0: android.media.AudioTrack): void;

                public onPeriodicNotification(param0: android.media.AudioTrack): void;
            }
            export class OnRoutingChangedListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.AudioTrack$OnRoutingChangedListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onRoutingChanged(param0: android.media.AudioTrack): void;
                });

                public onRoutingChanged(param0: android.media.AudioTrack): void;
            }
        }
    }
}

declare module android {
    export module media {
        export class CamcorderProfile extends javalangObject {
            public static QUALITY_1080P: number;
            public static QUALITY_2160P: number;
            public static QUALITY_480P: number;
            public static QUALITY_720P: number;
            public static QUALITY_CIF: number;
            public static QUALITY_HIGH: number;
            public static QUALITY_HIGH_SPEED_1080P: number;
            public static QUALITY_HIGH_SPEED_2160P: number;
            public static QUALITY_HIGH_SPEED_480P: number;
            public static QUALITY_HIGH_SPEED_720P: number;
            public static QUALITY_HIGH_SPEED_HIGH: number;
            public static QUALITY_HIGH_SPEED_LOW: number;
            public static QUALITY_LOW: number;
            public static QUALITY_QCIF: number;
            public static QUALITY_QVGA: number;
            public static QUALITY_TIME_LAPSE_1080P: number;
            public static QUALITY_TIME_LAPSE_2160P: number;
            public static QUALITY_TIME_LAPSE_480P: number;
            public static QUALITY_TIME_LAPSE_720P: number;
            public static QUALITY_TIME_LAPSE_CIF: number;
            public static QUALITY_TIME_LAPSE_HIGH: number;
            public static QUALITY_TIME_LAPSE_LOW: number;
            public static QUALITY_TIME_LAPSE_QCIF: number;
            public static QUALITY_TIME_LAPSE_QVGA: number;
            public audioBitRate: number;
            public audioChannels: number;
            public audioCodec: number;
            public audioSampleRate: number;
            public duration: number;
            public fileFormat: number;
            public quality: number;
            public videoBitRate: number;
            public videoCodec: number;
            public videoFrameHeight: number;
            public videoFrameRate: number;
            public videoFrameWidth: number;

            public static get(param0: number): android.media.CamcorderProfile;
            public static get(param0: number, param1: number): android.media.CamcorderProfile;

            public static hasProfile(param0: number): boolean;
            public static hasProfile(param0: number, param1: number): boolean;
        }
    }
}

declare module android {
    export module media {
        export class CameraProfile extends javalangObject {
            public static QUALITY_HIGH: number;
            public static QUALITY_LOW: number;
            public static QUALITY_MEDIUM: number;

            public constructor();

            public static getJpegEncodingQualityParameter(param0: number, param1: number): number;
            public static getJpegEncodingQualityParameter(param0: number): number;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module media {
        export class DeniedByServerException extends android.media.MediaDrmException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module media {
        export class ExifInterface extends javalangObject {
            public static ORIENTATION_FLIP_HORIZONTAL: number;
            public static ORIENTATION_FLIP_VERTICAL: number;
            public static ORIENTATION_NORMAL: number;
            public static ORIENTATION_ROTATE_180: number;
            public static ORIENTATION_ROTATE_270: number;
            public static ORIENTATION_ROTATE_90: number;
            public static ORIENTATION_TRANSPOSE: number;
            public static ORIENTATION_TRANSVERSE: number;
            public static ORIENTATION_UNDEFINED: number;
            public static TAG_APERTURE: string;
            public static TAG_DATETIME: string;
            public static TAG_DATETIME_DIGITIZED: string;
            public static TAG_EXPOSURE_TIME: string;
            public static TAG_FLASH: string;
            public static TAG_FOCAL_LENGTH: string;
            public static TAG_GPS_ALTITUDE: string;
            public static TAG_GPS_ALTITUDE_REF: string;
            public static TAG_GPS_DATESTAMP: string;
            public static TAG_GPS_LATITUDE: string;
            public static TAG_GPS_LATITUDE_REF: string;
            public static TAG_GPS_LONGITUDE: string;
            public static TAG_GPS_LONGITUDE_REF: string;
            public static TAG_GPS_PROCESSING_METHOD: string;
            public static TAG_GPS_TIMESTAMP: string;
            public static TAG_IMAGE_LENGTH: string;
            public static TAG_IMAGE_WIDTH: string;
            public static TAG_ISO: string;
            public static TAG_MAKE: string;
            public static TAG_MODEL: string;
            public static TAG_ORIENTATION: string;
            public static TAG_SUBSEC_TIME: string;
            public static TAG_SUBSEC_TIME_DIG: string;
            public static TAG_SUBSEC_TIME_ORIG: string;
            public static TAG_WHITE_BALANCE: string;
            public static WHITEBALANCE_AUTO: number;
            public static WHITEBALANCE_MANUAL: number;

            public hasThumbnail(): boolean;

            public getAttribute(param0: string): string;

            public setAttribute(param0: string, param1: string): void;

            public getThumbnail(): native.Array<number>;

            public getAttributeInt(param0: string, param1: number): number;

            public constructor(param0: string);

            public saveAttributes(): void;

            public getAltitude(param0: number): number;

            public getAttributeDouble(param0: string, param1: number): number;

            public getLatLong(param0: native.Array<number>): boolean;
        }
    }
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.PointF.d.ts" />
declare module android {
    export module media {
        export class FaceDetector extends javalangObject {
            public constructor(param0: number, param1: number, param2: number);

            public findFaces(param0: android.graphics.Bitmap, param1: native.Array<android.media.FaceDetector.Face>): number;

            public finalize(): void;
        }
        export module FaceDetector {
            export class Face extends javalangObject {
                public static CONFIDENCE_THRESHOLD: number;
                public static EULER_X: number;
                public static EULER_Y: number;
                public static EULER_Z: number;

                public getMidPoint(param0: android.graphics.PointF): void;

                public eyesDistance(): number;

                public pose(param0: number): number;

                public confidence(): number;
            }
        }
    }
}

/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
declare module android {
    export module media {
        export abstract class Image extends javalangObject implements javalangAutoCloseable {
            public getHeight(): number;

            public getTimestamp(): number;

            public setCropRect(param0: android.graphics.Rect): void;

            public getFormat(): number;

            public setTimestamp(param0: number): void;

            public getWidth(): number;

            public getCropRect(): android.graphics.Rect;

            public close(): void;

            public getPlanes(): native.Array<android.media.Image.Plane>;
        }
        export module Image {
            export abstract class Plane extends javalangObject {
                public getPixelStride(): number;

                public getRowStride(): number;

                public getBuffer(): javanioByteBuffer;
            }
        }
    }
}

/// <reference path="./android.media.Image.d.ts" />
/// <reference path="./android.media.ImageReader.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
declare module android {
    export module media {
        export class ImageReader extends javalangObject implements javalangAutoCloseable {
            public getMaxImages(): number;

            public getHeight(): number;

            public acquireNextImage(): android.media.Image;

            public static newInstance(param0: number, param1: number, param2: number, param3: number): android.media.ImageReader;

            public getWidth(): number;

            public getImageFormat(): number;

            public acquireLatestImage(): android.media.Image;

            public close(): void;

            public getSurface(): android.view.Surface;

            public setOnImageAvailableListener(param0: android.media.ImageReader.OnImageAvailableListener, param1: android.os.Handler): void;

            public finalize(): void;
        }
        export module ImageReader {
            export class OnImageAvailableListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.ImageReader$OnImageAvailableListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onImageAvailable(param0: android.media.ImageReader): void;
                });

                public onImageAvailable(param0: android.media.ImageReader): void;
            }
        }
    }
}

/// <reference path="./android.media.Image.d.ts" />
/// <reference path="./android.media.ImageWriter.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
declare module android {
    export module media {
        export class ImageWriter extends javalangObject implements javalangAutoCloseable {
            public getMaxImages(): number;

            public getFormat(): number;

            public static newInstance(param0: android.view.Surface, param1: number): android.media.ImageWriter;

            public dequeueInputImage(): android.media.Image;

            public setOnImageReleasedListener(param0: android.media.ImageWriter.OnImageReleasedListener, param1: android.os.Handler): void;

            public close(): void;

            public queueInputImage(param0: android.media.Image): void;

            public finalize(): void;
        }
        export module ImageWriter {
            export class OnImageReleasedListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.ImageWriter$OnImageReleasedListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onImageReleased(param0: android.media.ImageWriter): void;
                });

                public onImageReleased(param0: android.media.ImageWriter): void;
            }
        }
    }
}

/// <reference path="./android.content.res.AssetFileDescriptor.d.ts" />
/// <reference path="./android.media.JetPlayer.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module media {
        export class JetPlayer extends javalangObject {
            public closeJetFile(): boolean;

            public static getJetPlayer(): android.media.JetPlayer;

            public setMuteFlag(param0: number, param1: boolean, param2: boolean): boolean;

            public loadJetFile(param0: android.content.res.AssetFileDescriptor): boolean;

            public setEventListener(param0: android.media.JetPlayer.OnJetEventListener, param1: android.os.Handler): void;

            public clone(): javalangObject;

            public static getMaxTracks(): number;

            public loadJetFile(param0: string): boolean;

            public setMuteArray(param0: native.Array<boolean>, param1: boolean): boolean;

            public play(): boolean;

            public triggerClip(param0: number): boolean;

            public setEventListener(param0: android.media.JetPlayer.OnJetEventListener): void;

            public queueJetSegment(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): boolean;

            public pause(): boolean;

            public queueJetSegmentMuteArray(param0: number, param1: number, param2: number, param3: number, param4: native.Array<boolean>, param5: number): boolean;

            public setMuteFlags(param0: number, param1: boolean): boolean;

            public clearQueue(): boolean;

            public finalize(): void;

            public release(): void;
        }
        export module JetPlayer {
            export class OnJetEventListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.JetPlayer$OnJetEventListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onJetEvent(param0: android.media.JetPlayer, param1: number, param2: number, param3: number, param4: number, param5: number): void;
                    onJetUserIdUpdate(param0: android.media.JetPlayer, param1: number, param2: number): void;
                    onJetNumQueuedSegmentUpdate(param0: android.media.JetPlayer, param1: number): void;
                    onJetPauseUpdate(param0: android.media.JetPlayer, param1: number): void;
                });

                public onJetEvent(param0: android.media.JetPlayer, param1: number, param2: number, param3: number, param4: number, param5: number): void;

                public onJetPauseUpdate(param0: android.media.JetPlayer, param1: number): void;

                public onJetUserIdUpdate(param0: android.media.JetPlayer, param1: number, param2: number): void;

                public onJetNumQueuedSegmentUpdate(param0: android.media.JetPlayer, param1: number): void;
            }
        }
    }
}

declare module android {
    export module media {
        export class MediaActionSound extends javalangObject {
            public static FOCUS_COMPLETE: number;
            public static SHUTTER_CLICK: number;
            public static START_VIDEO_RECORDING: number;
            public static STOP_VIDEO_RECORDING: number;

            public play(param0: number): void;

            public load(param0: number): void;

            public constructor();

            public release(): void;
        }
    }
}

import javalangIllegalStateException = java.lang.IllegalStateException;
/// <reference path="./android.media.Image.d.ts" />
/// <reference path="./android.media.MediaCodec.d.ts" />
/// <reference path="./android.media.MediaCodecInfo.d.ts" />
/// <reference path="./android.media.MediaCrypto.d.ts" />
/// <reference path="./android.media.MediaFormat.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
declare module android {
    export module media {
        export class MediaCodec extends javalangObject {
            public static BUFFER_FLAG_CODEC_CONFIG: number;
            public static BUFFER_FLAG_END_OF_STREAM: number;
            public static BUFFER_FLAG_KEY_FRAME: number;
            public static BUFFER_FLAG_SYNC_FRAME: number;
            public static CONFIGURE_FLAG_ENCODE: number;
            public static CRYPTO_MODE_AES_CTR: number;
            public static CRYPTO_MODE_UNENCRYPTED: number;
            public static INFO_OUTPUT_BUFFERS_CHANGED: number;
            public static INFO_OUTPUT_FORMAT_CHANGED: number;
            public static INFO_TRY_AGAIN_LATER: number;
            public static PARAMETER_KEY_REQUEST_SYNC_FRAME: string;
            public static PARAMETER_KEY_SUSPEND: string;
            public static PARAMETER_KEY_VIDEO_BITRATE: string;
            public static VIDEO_SCALING_MODE_SCALE_TO_FIT: number;
            public static VIDEO_SCALING_MODE_SCALE_TO_FIT_WITH_CROPPING: number;

            public setCallback(param0: android.media.MediaCodec.Callback): void;

            public getOutputBuffer(param0: number): javanioByteBuffer;

            public static createPersistentInputSurface(): android.view.Surface;

            public signalEndOfInputStream(): void;

            public static createByCodecName(param0: string): android.media.MediaCodec;

            public createInputSurface(): android.view.Surface;

            public configure(param0: android.media.MediaFormat, param1: android.view.Surface, param2: android.media.MediaCrypto, param3: number): void;

            public setInputSurface(param0: android.view.Surface): void;

            public getOutputFormat(): android.media.MediaFormat;

            public getOutputImage(param0: number): android.media.Image;

            public getInputFormat(): android.media.MediaFormat;

            public getOutputFormat(param0: number): android.media.MediaFormat;

            public setCallback(param0: android.media.MediaCodec.Callback, param1: android.os.Handler): void;

            public stop(): void;

            public static createDecoderByType(param0: string): android.media.MediaCodec;

            public reset(): void;

            public setOnFrameRenderedListener(param0: android.media.MediaCodec.OnFrameRenderedListener, param1: android.os.Handler): void;

            public queueInputBuffer(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public dequeueOutputBuffer(param0: android.media.MediaCodec.BufferInfo, param1: number): number;

            public start(): void;

            public finalize(): void;

            public release(): void;

            public releaseOutputBuffer(param0: number, param1: number): void;

            public flush(): void;

            public getInputBuffer(param0: number): javanioByteBuffer;

            public setParameters(param0: android.os.Bundle): void;

            public queueSecureInputBuffer(param0: number, param1: number, param2: android.media.MediaCodec.CryptoInfo, param3: number, param4: number): void;

            public getInputBuffers(): native.Array<javanioByteBuffer>;

            public setVideoScalingMode(param0: number): void;

            public dequeueInputBuffer(param0: number): number;

            public getName(): string;

            public static createEncoderByType(param0: string): android.media.MediaCodec;

            public getCodecInfo(): android.media.MediaCodecInfo;

            public releaseOutputBuffer(param0: number, param1: boolean): void;

            public setOutputSurface(param0: android.view.Surface): void;

            public getOutputBuffers(): native.Array<javanioByteBuffer>;

            public getInputImage(param0: number): android.media.Image;
        }
        export module MediaCodec {
            export class BufferInfo extends javalangObject {
                public flags: number;
                public offset: number;
                public presentationTimeUs: number;
                public size: number;

                public set(param0: number, param1: number, param2: number, param3: number): void;

                public constructor();
            }
            export abstract class Callback extends javalangObject {
                public onOutputBufferAvailable(param0: android.media.MediaCodec, param1: number, param2: android.media.MediaCodec.BufferInfo): void;

                public onInputBufferAvailable(param0: android.media.MediaCodec, param1: number): void;

                public onOutputFormatChanged(param0: android.media.MediaCodec, param1: android.media.MediaFormat): void;

                public onError(param0: android.media.MediaCodec, param1: android.media.MediaCodec.CodecException): void;

                public constructor();
            }
            export class CodecException extends javalangIllegalStateException {
                public static ERROR_INSUFFICIENT_RESOURCE: number;
                public static ERROR_RECLAIMED: number;

                public getDiagnosticInfo(): string;

                public isRecoverable(): boolean;

                public getErrorCode(): number;

                public isTransient(): boolean;
            }
            export class CryptoException extends javalangRuntimeException {
                public static ERROR_INSUFFICIENT_OUTPUT_PROTECTION: number;
                public static ERROR_KEY_EXPIRED: number;
                public static ERROR_NO_KEY: number;
                public static ERROR_RESOURCE_BUSY: number;
                public static ERROR_SESSION_NOT_OPENED: number;

                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: number, param1: string);
                public constructor(param0: string, param1: javalangThrowable);

                public getErrorCode(): number;

                public constructor(param0: string);
                public constructor();
            }
            export class CryptoInfo extends javalangObject {
                public iv: native.Array<number>;
                public key: native.Array<number>;
                public mode: number;
                public numBytesOfClearData: native.Array<number>;
                public numBytesOfEncryptedData: native.Array<number>;
                public numSubSamples: number;

                public set(param0: number, param1: native.Array<number>, param2: native.Array<number>, param3: native.Array<number>, param4: native.Array<number>, param5: number): void;

                public toString(): string;

                public constructor();
            }
            export class OnFrameRenderedListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.MediaCodec$OnFrameRenderedListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onFrameRendered(param0: android.media.MediaCodec, param1: number, param2: number): void;
                });

                public onFrameRendered(param0: android.media.MediaCodec, param1: number, param2: number): void;
            }
        }
    }
}

/// <reference path="./android.media.MediaFormat.d.ts" />
/// <reference path="./android.util.Range.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module media {
        export class MediaCodecInfo extends javalangObject {
            public getSupportedTypes(): native.Array<string>;

            public isEncoder(): boolean;

            public getName(): string;

            public getCapabilitiesForType(param0: string): android.media.MediaCodecInfo.CodecCapabilities;
        }
        export module MediaCodecInfo {
            export class AudioCapabilities extends javalangObject {
                public isSampleRateSupported(param0: number): boolean;

                public getMaxInputChannelCount(): number;

                public getBitrateRange(): android.util.Range;

                public getSupportedSampleRates(): native.Array<number>;

                public getSupportedSampleRateRanges(): native.Array<android.util.Range>;
            }
            export class CodecCapabilities extends javalangObject {
                public static COLOR_Format12bitRGB444: number;
                public static COLOR_Format16bitARGB1555: number;
                public static COLOR_Format16bitARGB4444: number;
                public static COLOR_Format16bitBGR565: number;
                public static COLOR_Format16bitRGB565: number;
                public static COLOR_Format18BitBGR666: number;
                public static COLOR_Format18bitARGB1665: number;
                public static COLOR_Format18bitRGB666: number;
                public static COLOR_Format19bitARGB1666: number;
                public static COLOR_Format24BitABGR6666: number;
                public static COLOR_Format24BitARGB6666: number;
                public static COLOR_Format24bitARGB1887: number;
                public static COLOR_Format24bitBGR888: number;
                public static COLOR_Format24bitRGB888: number;
                public static COLOR_Format25bitARGB1888: number;
                public static COLOR_Format32bitABGR8888: number;
                public static COLOR_Format32bitARGB8888: number;
                public static COLOR_Format32bitBGRA8888: number;
                public static COLOR_Format8bitRGB332: number;
                public static COLOR_FormatCbYCrY: number;
                public static COLOR_FormatCrYCbY: number;
                public static COLOR_FormatL16: number;
                public static COLOR_FormatL2: number;
                public static COLOR_FormatL24: number;
                public static COLOR_FormatL32: number;
                public static COLOR_FormatL4: number;
                public static COLOR_FormatL8: number;
                public static COLOR_FormatMonochrome: number;
                public static COLOR_FormatRGBAFlexible: number;
                public static COLOR_FormatRGBFlexible: number;
                public static COLOR_FormatRawBayer10bit: number;
                public static COLOR_FormatRawBayer8bit: number;
                public static COLOR_FormatRawBayer8bitcompressed: number;
                public static COLOR_FormatSurface: number;
                public static COLOR_FormatYCbYCr: number;
                public static COLOR_FormatYCrYCb: number;
                public static COLOR_FormatYUV411PackedPlanar: number;
                public static COLOR_FormatYUV411Planar: number;
                public static COLOR_FormatYUV420Flexible: number;
                public static COLOR_FormatYUV420PackedPlanar: number;
                public static COLOR_FormatYUV420PackedSemiPlanar: number;
                public static COLOR_FormatYUV420Planar: number;
                public static COLOR_FormatYUV420SemiPlanar: number;
                public static COLOR_FormatYUV422Flexible: number;
                public static COLOR_FormatYUV422PackedPlanar: number;
                public static COLOR_FormatYUV422PackedSemiPlanar: number;
                public static COLOR_FormatYUV422Planar: number;
                public static COLOR_FormatYUV422SemiPlanar: number;
                public static COLOR_FormatYUV444Flexible: number;
                public static COLOR_FormatYUV444Interleaved: number;
                public static COLOR_QCOM_FormatYUV420SemiPlanar: number;
                public static COLOR_TI_FormatYUV420PackedSemiPlanar: number;
                public static FEATURE_AdaptivePlayback: string;
                public static FEATURE_SecurePlayback: string;
                public static FEATURE_TunneledPlayback: string;
                public colorFormats: native.Array<number>;
                public profileLevels: native.Array<android.media.MediaCodecInfo.CodecProfileLevel>;

                public isFeatureSupported(param0: string): boolean;

                public isFeatureRequired(param0: string): boolean;

                public getMaxSupportedInstances(): number;

                public isFormatSupported(param0: android.media.MediaFormat): boolean;

                public getDefaultFormat(): android.media.MediaFormat;

                public getMimeType(): string;

                public getAudioCapabilities(): android.media.MediaCodecInfo.AudioCapabilities;

                public static createFromProfileLevel(param0: string, param1: number, param2: number): android.media.MediaCodecInfo.CodecCapabilities;

                public getVideoCapabilities(): android.media.MediaCodecInfo.VideoCapabilities;

                public constructor();

                public getEncoderCapabilities(): android.media.MediaCodecInfo.EncoderCapabilities;
            }
            export class CodecProfileLevel extends javalangObject {
                public static AACObjectELD: number;
                public static AACObjectERLC: number;
                public static AACObjectHE: number;
                public static AACObjectHE_PS: number;
                public static AACObjectLC: number;
                public static AACObjectLD: number;
                public static AACObjectLTP: number;
                public static AACObjectMain: number;
                public static AACObjectSSR: number;
                public static AACObjectScalable: number;
                public static AVCLevel1: number;
                public static AVCLevel11: number;
                public static AVCLevel12: number;
                public static AVCLevel13: number;
                public static AVCLevel1b: number;
                public static AVCLevel2: number;
                public static AVCLevel21: number;
                public static AVCLevel22: number;
                public static AVCLevel3: number;
                public static AVCLevel31: number;
                public static AVCLevel32: number;
                public static AVCLevel4: number;
                public static AVCLevel41: number;
                public static AVCLevel42: number;
                public static AVCLevel5: number;
                public static AVCLevel51: number;
                public static AVCLevel52: number;
                public static AVCProfileBaseline: number;
                public static AVCProfileExtended: number;
                public static AVCProfileHigh: number;
                public static AVCProfileHigh10: number;
                public static AVCProfileHigh422: number;
                public static AVCProfileHigh444: number;
                public static AVCProfileMain: number;
                public static H263Level10: number;
                public static H263Level20: number;
                public static H263Level30: number;
                public static H263Level40: number;
                public static H263Level45: number;
                public static H263Level50: number;
                public static H263Level60: number;
                public static H263Level70: number;
                public static H263ProfileBackwardCompatible: number;
                public static H263ProfileBaseline: number;
                public static H263ProfileH320Coding: number;
                public static H263ProfileHighCompression: number;
                public static H263ProfileHighLatency: number;
                public static H263ProfileISWV2: number;
                public static H263ProfileISWV3: number;
                public static H263ProfileInterlace: number;
                public static H263ProfileInternet: number;
                public static HEVCHighTierLevel1: number;
                public static HEVCHighTierLevel2: number;
                public static HEVCHighTierLevel21: number;
                public static HEVCHighTierLevel3: number;
                public static HEVCHighTierLevel31: number;
                public static HEVCHighTierLevel4: number;
                public static HEVCHighTierLevel41: number;
                public static HEVCHighTierLevel5: number;
                public static HEVCHighTierLevel51: number;
                public static HEVCHighTierLevel52: number;
                public static HEVCHighTierLevel6: number;
                public static HEVCHighTierLevel61: number;
                public static HEVCHighTierLevel62: number;
                public static HEVCMainTierLevel1: number;
                public static HEVCMainTierLevel2: number;
                public static HEVCMainTierLevel21: number;
                public static HEVCMainTierLevel3: number;
                public static HEVCMainTierLevel31: number;
                public static HEVCMainTierLevel4: number;
                public static HEVCMainTierLevel41: number;
                public static HEVCMainTierLevel5: number;
                public static HEVCMainTierLevel51: number;
                public static HEVCMainTierLevel52: number;
                public static HEVCMainTierLevel6: number;
                public static HEVCMainTierLevel61: number;
                public static HEVCMainTierLevel62: number;
                public static HEVCProfileMain: number;
                public static HEVCProfileMain10: number;
                public static MPEG2LevelH14: number;
                public static MPEG2LevelHL: number;
                public static MPEG2LevelLL: number;
                public static MPEG2LevelML: number;
                public static MPEG2Profile422: number;
                public static MPEG2ProfileHigh: number;
                public static MPEG2ProfileMain: number;
                public static MPEG2ProfileSNR: number;
                public static MPEG2ProfileSimple: number;
                public static MPEG2ProfileSpatial: number;
                public static MPEG4Level0: number;
                public static MPEG4Level0b: number;
                public static MPEG4Level1: number;
                public static MPEG4Level2: number;
                public static MPEG4Level3: number;
                public static MPEG4Level4: number;
                public static MPEG4Level4a: number;
                public static MPEG4Level5: number;
                public static MPEG4ProfileAdvancedCoding: number;
                public static MPEG4ProfileAdvancedCore: number;
                public static MPEG4ProfileAdvancedRealTime: number;
                public static MPEG4ProfileAdvancedScalable: number;
                public static MPEG4ProfileAdvancedSimple: number;
                public static MPEG4ProfileBasicAnimated: number;
                public static MPEG4ProfileCore: number;
                public static MPEG4ProfileCoreScalable: number;
                public static MPEG4ProfileHybrid: number;
                public static MPEG4ProfileMain: number;
                public static MPEG4ProfileNbit: number;
                public static MPEG4ProfileScalableTexture: number;
                public static MPEG4ProfileSimple: number;
                public static MPEG4ProfileSimpleFBA: number;
                public static MPEG4ProfileSimpleFace: number;
                public static MPEG4ProfileSimpleScalable: number;
                public static VP8Level_Version0: number;
                public static VP8Level_Version1: number;
                public static VP8Level_Version2: number;
                public static VP8Level_Version3: number;
                public static VP8ProfileMain: number;
                public level: number;
                public profile: number;

                public constructor();
            }
            export class EncoderCapabilities extends javalangObject {
                public static BITRATE_MODE_CBR: number;
                public static BITRATE_MODE_CQ: number;
                public static BITRATE_MODE_VBR: number;

                public isBitrateModeSupported(param0: number): boolean;

                public getComplexityRange(): android.util.Range;
            }
            export class VideoCapabilities extends javalangObject {
                public getSupportedFrameRates(): android.util.Range;

                public getSupportedFrameRatesFor(param0: number, param1: number): android.util.Range;

                public getAchievableFrameRatesFor(param0: number, param1: number): android.util.Range;

                public areSizeAndRateSupported(param0: number, param1: number, param2: number): boolean;

                public getSupportedHeights(): android.util.Range;

                public isSizeSupported(param0: number, param1: number): boolean;

                public getSupportedWidthsFor(param0: number): android.util.Range;

                public getSupportedWidths(): android.util.Range;

                public getHeightAlignment(): number;

                public getBitrateRange(): android.util.Range;

                public getWidthAlignment(): number;

                public getSupportedHeightsFor(param0: number): android.util.Range;
            }
        }
    }
}

/// <reference path="./android.media.MediaCodecInfo.d.ts" />
/// <reference path="./android.media.MediaFormat.d.ts" />
declare module android {
    export module media {
        export class MediaCodecList extends javalangObject {
            public static ALL_CODECS: number;
            public static REGULAR_CODECS: number;

            public static getCodecCount(): number;

            public getCodecInfos(): native.Array<android.media.MediaCodecInfo>;

            public static getCodecInfoAt(param0: number): android.media.MediaCodecInfo;

            public findDecoderForFormat(param0: android.media.MediaFormat): string;

            public findEncoderForFormat(param0: android.media.MediaFormat): string;

            public constructor(param0: number);
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />
declare module android {
    export module media {
        export class MediaCrypto extends javalangObject {
            public constructor(param0: javautilUUID, param1: native.Array<number>);

            public requiresSecureDecoderComponent(param0: string): boolean;

            public static isCryptoSchemeSupported(param0: javautilUUID): boolean;

            public setMediaDrmSession(param0: native.Array<number>): void;

            public finalize(): void;

            public release(): void;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module media {
        export class MediaCryptoException extends javalangException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

declare module android {
    export module media {
        export abstract class MediaDataSource extends javalangObject implements javaioCloseable {
            public constructor();

            public readAt(param0: number, param1: native.Array<number>, param2: number, param3: number): number;

            public getSize(): number;

            public close(): void;
        }
    }
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.media.MediaDescription.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module media {
        export class MediaDescription extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public getTitle(): string;

            public getSubtitle(): string;

            public toString(): string;

            public getMediaUri(): android.net.Uri;

            public getMediaId(): string;

            public getIconUri(): android.net.Uri;

            public describeContents(): number;

            public getIconBitmap(): android.graphics.Bitmap;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getDescription(): string;

            public getExtras(): android.os.Bundle;
        }
        export module MediaDescription {
            export class Builder extends javalangObject {
                public setIconUri(param0: android.net.Uri): android.media.MediaDescription.Builder;

                public setMediaId(param0: string): android.media.MediaDescription.Builder;

                public setTitle(param0: string): android.media.MediaDescription.Builder;

                public setDescription(param0: string): android.media.MediaDescription.Builder;

                public build(): android.media.MediaDescription;

                public setSubtitle(param0: string): android.media.MediaDescription.Builder;

                public setExtras(param0: android.os.Bundle): android.media.MediaDescription.Builder;

                public constructor();

                public setIconBitmap(param0: android.graphics.Bitmap): android.media.MediaDescription.Builder;

                public setMediaUri(param0: android.net.Uri): android.media.MediaDescription.Builder;
            }
        }
    }
}

/// <reference path="./android.media.MediaDrm.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />
declare module android {
    export module media {
        export class MediaDrm extends javalangObject {
            public static EVENT_KEY_EXPIRED: number;
            public static EVENT_KEY_REQUIRED: number;
            public static EVENT_PROVISION_REQUIRED: number;
            public static EVENT_SESSION_RECLAIMED: number;
            public static EVENT_VENDOR_DEFINED: number;
            public static KEY_TYPE_OFFLINE: number;
            public static KEY_TYPE_RELEASE: number;
            public static KEY_TYPE_STREAMING: number;
            public static PROPERTY_ALGORITHMS: string;
            public static PROPERTY_DESCRIPTION: string;
            public static PROPERTY_DEVICE_UNIQUE_ID: string;
            public static PROPERTY_VENDOR: string;
            public static PROPERTY_VERSION: string;

            public static isCryptoSchemeSupported(param0: javautilUUID, param1: string): boolean;

            public queryKeyStatus(param0: native.Array<number>): javautilHashMap;

            public getSecureStops(): javautilList;

            public getPropertyByteArray(param0: string): native.Array<number>;

            public setOnExpirationUpdateListener(param0: android.media.MediaDrm.OnExpirationUpdateListener, param1: android.os.Handler): void;

            public getPropertyString(param0: string): string;

            public releaseSecureStops(param0: native.Array<number>): void;

            public getCryptoSession(param0: native.Array<number>, param1: string, param2: string): android.media.MediaDrm.CryptoSession;

            public provideKeyResponse(param0: native.Array<number>, param1: native.Array<number>): native.Array<number>;

            public constructor(param0: javautilUUID);

            public getProvisionRequest(): android.media.MediaDrm.ProvisionRequest;

            public getKeyRequest(param0: native.Array<number>, param1: native.Array<number>, param2: string, param3: number, param4: javautilHashMap): android.media.MediaDrm.KeyRequest;

            public provideProvisionResponse(param0: native.Array<number>): void;

            public getSecureStop(param0: native.Array<number>): native.Array<number>;

            public finalize(): void;

            public release(): void;

            public releaseAllSecureStops(): void;

            public setPropertyString(param0: string, param1: string): void;

            public restoreKeys(param0: native.Array<number>, param1: native.Array<number>): void;

            public closeSession(param0: native.Array<number>): void;

            public openSession(): native.Array<number>;

            public setPropertyByteArray(param0: string, param1: native.Array<number>): void;

            public setOnEventListener(param0: android.media.MediaDrm.OnEventListener): void;

            public removeKeys(param0: native.Array<number>): void;

            public static isCryptoSchemeSupported(param0: javautilUUID): boolean;

            public setOnKeyStatusChangeListener(param0: android.media.MediaDrm.OnKeyStatusChangeListener, param1: android.os.Handler): void;
        }
        export module MediaDrm {
            export class CryptoSession extends javalangObject {
                public sign(param0: native.Array<number>, param1: native.Array<number>): native.Array<number>;

                public verify(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<number>): boolean;

                public encrypt(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<number>): native.Array<number>;

                public decrypt(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<number>): native.Array<number>;
            }
            export class KeyRequest extends javalangObject {
                public static REQUEST_TYPE_INITIAL: number;
                public static REQUEST_TYPE_RELEASE: number;
                public static REQUEST_TYPE_RENEWAL: number;

                public getData(): native.Array<number>;

                public getRequestType(): number;

                public getDefaultUrl(): string;
            }
            export class KeyStatus extends javalangObject {
                public static STATUS_EXPIRED: number;
                public static STATUS_INTERNAL_ERROR: number;
                public static STATUS_OUTPUT_NOT_ALLOWED: number;
                public static STATUS_PENDING: number;
                public static STATUS_USABLE: number;

                public getKeyId(): native.Array<number>;

                public getStatusCode(): number;
            }
            export class MediaDrmStateException extends javalangIllegalStateException {
                public getDiagnosticInfo(): string;
            }
            export class OnEventListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.MediaDrm$OnEventListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onEvent(param0: android.media.MediaDrm, param1: native.Array<number>, param2: number, param3: number, param4: native.Array<number>): void;
                });

                public onEvent(param0: android.media.MediaDrm, param1: native.Array<number>, param2: number, param3: number, param4: native.Array<number>): void;
            }
            export class OnExpirationUpdateListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.MediaDrm$OnExpirationUpdateListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onExpirationUpdate(param0: android.media.MediaDrm, param1: native.Array<number>, param2: number): void;
                });

                public onExpirationUpdate(param0: android.media.MediaDrm, param1: native.Array<number>, param2: number): void;
            }
            export class OnKeyStatusChangeListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.MediaDrm$OnKeyStatusChangeListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onKeyStatusChange(param0: android.media.MediaDrm, param1: native.Array<number>, param2: javautilList, param3: boolean): void;
                });

                public onKeyStatusChange(param0: android.media.MediaDrm, param1: native.Array<number>, param2: javautilList, param3: boolean): void;
            }
            export class ProvisionRequest extends javalangObject {
                public getData(): native.Array<number>;

                public getDefaultUrl(): string;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module media {
        export class MediaDrmException extends javalangException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module media {
        export class MediaDrmResetException extends javalangIllegalStateException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.media.MediaDataSource.d.ts" />
/// <reference path="./android.media.MediaFormat.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module android {
    export module media {
        export class MediaExtractor extends javalangObject {
            public static SAMPLE_FLAG_ENCRYPTED: number;
            public static SAMPLE_FLAG_SYNC: number;
            public static SEEK_TO_CLOSEST_SYNC: number;
            public static SEEK_TO_NEXT_SYNC: number;
            public static SEEK_TO_PREVIOUS_SYNC: number;

            public getTrackFormat(param0: number): android.media.MediaFormat;

            public setDataSource(param0: javaioFileDescriptor): void;

            public selectTrack(param0: number): void;

            public hasCacheReachedEndOfStream(): boolean;

            public advance(): boolean;

            public getSampleTime(): number;

            public readSampleData(param0: javanioByteBuffer, param1: number): number;

            public seekTo(param0: number, param1: number): void;

            public getSampleCryptoInfo(param0: android.media.MediaCodec.CryptoInfo): boolean;

            public unselectTrack(param0: number): void;

            public setDataSource(param0: android.content.Context, param1: android.net.Uri, param2: javautilMap): void;

            public constructor();

            public setDataSource(param0: android.media.MediaDataSource): void;
            public setDataSource(param0: string, param1: javautilMap): void;
            public setDataSource(param0: string): void;

            public getPsshInfo(): javautilMap;

            public getSampleFlags(): number;

            public getTrackCount(): number;

            public setDataSource(param0: javaioFileDescriptor, param1: number, param2: number): void;

            public getSampleTrackIndex(): number;

            public finalize(): void;

            public release(): void;

            public getCachedDuration(): number;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
declare module android {
    export module media {
        export class MediaFormat extends javalangObject {
            public static KEY_AAC_DRC_ATTENUATION_FACTOR: string;
            public static KEY_AAC_DRC_BOOST_FACTOR: string;
            public static KEY_AAC_DRC_HEAVY_COMPRESSION: string;
            public static KEY_AAC_DRC_TARGET_REFERENCE_LEVEL: string;
            public static KEY_AAC_ENCODED_TARGET_LEVEL: string;
            public static KEY_AAC_MAX_OUTPUT_CHANNEL_COUNT: string;
            public static KEY_AAC_PROFILE: string;
            public static KEY_AAC_SBR_MODE: string;
            public static KEY_AUDIO_SESSION_ID: string;
            public static KEY_BITRATE_MODE: string;
            public static KEY_BIT_RATE: string;
            public static KEY_CAPTURE_RATE: string;
            public static KEY_CHANNEL_COUNT: string;
            public static KEY_CHANNEL_MASK: string;
            public static KEY_COLOR_FORMAT: string;
            public static KEY_COMPLEXITY: string;
            public static KEY_DURATION: string;
            public static KEY_FLAC_COMPRESSION_LEVEL: string;
            public static KEY_FRAME_RATE: string;
            public static KEY_HEIGHT: string;
            public static KEY_IS_ADTS: string;
            public static KEY_IS_AUTOSELECT: string;
            public static KEY_IS_DEFAULT: string;
            public static KEY_IS_FORCED_SUBTITLE: string;
            public static KEY_I_FRAME_INTERVAL: string;
            public static KEY_LANGUAGE: string;
            public static KEY_LEVEL: string;
            public static KEY_MAX_HEIGHT: string;
            public static KEY_MAX_INPUT_SIZE: string;
            public static KEY_MAX_WIDTH: string;
            public static KEY_MIME: string;
            public static KEY_OPERATING_RATE: string;
            public static KEY_PRIORITY: string;
            public static KEY_PROFILE: string;
            public static KEY_PUSH_BLANK_BUFFERS_ON_STOP: string;
            public static KEY_REPEAT_PREVIOUS_FRAME_AFTER: string;
            public static KEY_ROTATION: string;
            public static KEY_SAMPLE_RATE: string;
            public static KEY_SLICE_HEIGHT: string;
            public static KEY_STRIDE: string;
            public static KEY_TEMPORAL_LAYERING: string;
            public static KEY_WIDTH: string;
            public static MIMETYPE_AUDIO_AAC: string;
            public static MIMETYPE_AUDIO_AC3: string;
            public static MIMETYPE_AUDIO_AMR_NB: string;
            public static MIMETYPE_AUDIO_AMR_WB: string;
            public static MIMETYPE_AUDIO_EAC3: string;
            public static MIMETYPE_AUDIO_FLAC: string;
            public static MIMETYPE_AUDIO_G711_ALAW: string;
            public static MIMETYPE_AUDIO_G711_MLAW: string;
            public static MIMETYPE_AUDIO_MPEG: string;
            public static MIMETYPE_AUDIO_MSGSM: string;
            public static MIMETYPE_AUDIO_OPUS: string;
            public static MIMETYPE_AUDIO_QCELP: string;
            public static MIMETYPE_AUDIO_RAW: string;
            public static MIMETYPE_AUDIO_VORBIS: string;
            public static MIMETYPE_TEXT_CEA_608: string;
            public static MIMETYPE_TEXT_VTT: string;
            public static MIMETYPE_VIDEO_AVC: string;
            public static MIMETYPE_VIDEO_H263: string;
            public static MIMETYPE_VIDEO_HEVC: string;
            public static MIMETYPE_VIDEO_MPEG2: string;
            public static MIMETYPE_VIDEO_MPEG4: string;
            public static MIMETYPE_VIDEO_RAW: string;
            public static MIMETYPE_VIDEO_VP8: string;
            public static MIMETYPE_VIDEO_VP9: string;

            public getLong(param0: string): number;

            public getString(param0: string): string;

            public setString(param0: string, param1: string): void;

            public constructor();

            public getFeatureEnabled(param0: string): boolean;

            public static createVideoFormat(param0: string, param1: number, param2: number): android.media.MediaFormat;

            public getFloat(param0: string): number;

            public getByteBuffer(param0: string): javanioByteBuffer;

            public toString(): string;

            public setFeatureEnabled(param0: string, param1: boolean): void;

            public getInteger(param0: string): number;

            public static createAudioFormat(param0: string, param1: number, param2: number): android.media.MediaFormat;

            public setInteger(param0: string, param1: number): void;

            public containsKey(param0: string): boolean;

            public setLong(param0: string, param1: number): void;

            public setFloat(param0: string, param1: number): void;

            public setByteBuffer(param0: string, param1: javanioByteBuffer): void;

            public static createSubtitleFormat(param0: string, param1: string): android.media.MediaFormat;
        }
    }
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.media.MediaDescription.d.ts" />
/// <reference path="./android.media.MediaMetadata.d.ts" />
/// <reference path="./android.media.Rating.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module android {
    export module media {
        export class MediaMetadata extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static METADATA_KEY_ALBUM: string;
            public static METADATA_KEY_ALBUM_ART: string;
            public static METADATA_KEY_ALBUM_ARTIST: string;
            public static METADATA_KEY_ALBUM_ART_URI: string;
            public static METADATA_KEY_ART: string;
            public static METADATA_KEY_ARTIST: string;
            public static METADATA_KEY_ART_URI: string;
            public static METADATA_KEY_AUTHOR: string;
            public static METADATA_KEY_COMPILATION: string;
            public static METADATA_KEY_COMPOSER: string;
            public static METADATA_KEY_DATE: string;
            public static METADATA_KEY_DISC_NUMBER: string;
            public static METADATA_KEY_DISPLAY_DESCRIPTION: string;
            public static METADATA_KEY_DISPLAY_ICON: string;
            public static METADATA_KEY_DISPLAY_ICON_URI: string;
            public static METADATA_KEY_DISPLAY_SUBTITLE: string;
            public static METADATA_KEY_DISPLAY_TITLE: string;
            public static METADATA_KEY_DURATION: string;
            public static METADATA_KEY_GENRE: string;
            public static METADATA_KEY_MEDIA_ID: string;
            public static METADATA_KEY_NUM_TRACKS: string;
            public static METADATA_KEY_RATING: string;
            public static METADATA_KEY_TITLE: string;
            public static METADATA_KEY_TRACK_NUMBER: string;
            public static METADATA_KEY_USER_RATING: string;
            public static METADATA_KEY_WRITER: string;
            public static METADATA_KEY_YEAR: string;

            public getLong(param0: string): number;

            public keySet(): javautilSet;

            public size(): number;

            public getText(param0: string): string;

            public describeContents(): number;

            public getBitmap(param0: string): android.graphics.Bitmap;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getString(param0: string): string;

            public getRating(param0: string): android.media.Rating;

            public getDescription(): android.media.MediaDescription;

            public containsKey(param0: string): boolean;
        }
        export module MediaMetadata {
            export class Builder extends javalangObject {
                public putText(param0: string, param1: string): android.media.MediaMetadata.Builder;

                public putRating(param0: string, param1: android.media.Rating): android.media.MediaMetadata.Builder;

                public putLong(param0: string, param1: number): android.media.MediaMetadata.Builder;

                public constructor(param0: android.media.MediaMetadata);

                public build(): android.media.MediaMetadata;

                public putBitmap(param0: string, param1: android.graphics.Bitmap): android.media.MediaMetadata.Builder;

                public constructor();

                public putString(param0: string, param1: string): android.media.MediaMetadata.Builder;
            }
        }
    }
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module media {
        export abstract class MediaMetadataEditor extends javalangObject {
            public static BITMAP_KEY_ARTWORK: number;
            public static RATING_KEY_BY_OTHERS: number;
            public static RATING_KEY_BY_USER: number;

            public clear(): void;

            public removeEditableKeys(): void;

            public apply(): void;

            public getEditableKeys(): native.Array<number>;

            public getObject(param0: number, param1: javalangObject): javalangObject;

            public getLong(param0: number, param1: number): number;

            public addEditableKey(param0: number): void;

            public getBitmap(param0: number, param1: android.graphics.Bitmap): android.graphics.Bitmap;

            public putLong(param0: number, param1: number): android.media.MediaMetadataEditor;

            public putBitmap(param0: number, param1: android.graphics.Bitmap): android.media.MediaMetadataEditor;

            public putString(param0: number, param1: string): android.media.MediaMetadataEditor;

            public putObject(param0: number, param1: javalangObject): android.media.MediaMetadataEditor;

            public getString(param0: number, param1: string): string;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.media.MediaDataSource.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module android {
    export module media {
        export class MediaMetadataRetriever extends javalangObject {
            public static METADATA_KEY_ALBUM: number;
            public static METADATA_KEY_ALBUMARTIST: number;
            public static METADATA_KEY_ARTIST: number;
            public static METADATA_KEY_AUTHOR: number;
            public static METADATA_KEY_BITRATE: number;
            public static METADATA_KEY_CAPTURE_FRAMERATE: number;
            public static METADATA_KEY_CD_TRACK_NUMBER: number;
            public static METADATA_KEY_COMPILATION: number;
            public static METADATA_KEY_COMPOSER: number;
            public static METADATA_KEY_DATE: number;
            public static METADATA_KEY_DISC_NUMBER: number;
            public static METADATA_KEY_DURATION: number;
            public static METADATA_KEY_GENRE: number;
            public static METADATA_KEY_HAS_AUDIO: number;
            public static METADATA_KEY_HAS_VIDEO: number;
            public static METADATA_KEY_LOCATION: number;
            public static METADATA_KEY_MIMETYPE: number;
            public static METADATA_KEY_NUM_TRACKS: number;
            public static METADATA_KEY_TITLE: number;
            public static METADATA_KEY_VIDEO_HEIGHT: number;
            public static METADATA_KEY_VIDEO_ROTATION: number;
            public static METADATA_KEY_VIDEO_WIDTH: number;
            public static METADATA_KEY_WRITER: number;
            public static METADATA_KEY_YEAR: number;
            public static OPTION_CLOSEST: number;
            public static OPTION_CLOSEST_SYNC: number;
            public static OPTION_NEXT_SYNC: number;
            public static OPTION_PREVIOUS_SYNC: number;

            public setDataSource(param0: javaioFileDescriptor): void;

            public getFrameAtTime(param0: number, param1: number): android.graphics.Bitmap;

            public setDataSource(param0: android.content.Context, param1: android.net.Uri): void;

            public extractMetadata(param0: number): string;

            public constructor();

            public setDataSource(param0: android.media.MediaDataSource): void;
            public setDataSource(param0: string, param1: javautilMap): void;
            public setDataSource(param0: string): void;

            public getEmbeddedPicture(): native.Array<number>;

            public getFrameAtTime(): android.graphics.Bitmap;

            public setDataSource(param0: javaioFileDescriptor, param1: number, param2: number): void;

            public getFrameAtTime(param0: number): android.graphics.Bitmap;

            public release(): void;

            public finalize(): void;
        }
    }
}

/// <reference path="./android.media.MediaFormat.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
declare module android {
    export module media {
        export class MediaMuxer extends javalangObject {
            public constructor(param0: string, param1: number);

            public stop(): void;

            public setOrientationHint(param0: number): void;

            public writeSampleData(param0: number, param1: javanioByteBuffer, param2: android.media.MediaCodec.BufferInfo): void;

            public start(): void;

            public setLocation(param0: number, param1: number): void;

            public finalize(): void;

            public release(): void;

            public addTrack(param0: android.media.MediaFormat): number;
        }
        export module MediaMuxer {
            export class OutputFormat extends javalangObject {
                public static MUXER_OUTPUT_MPEG_4: number;
                public static MUXER_OUTPUT_WEBM: number;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.media.AudioAttributes.d.ts" />
/// <reference path="./android.media.MediaDataSource.d.ts" />
/// <reference path="./android.media.MediaFormat.d.ts" />
/// <reference path="./android.media.MediaPlayer.d.ts" />
/// <reference path="./android.media.MediaTimestamp.d.ts" />
/// <reference path="./android.media.PlaybackParams.d.ts" />
/// <reference path="./android.media.SyncParams.d.ts" />
/// <reference path="./android.media.TimedMetaData.d.ts" />
/// <reference path="./android.media.TimedText.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./android.view.SurfaceHolder.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module android {
    export module media {
        export class MediaPlayer extends javalangObject {
            public static MEDIA_ERROR_IO: number;
            public static MEDIA_ERROR_MALFORMED: number;
            public static MEDIA_ERROR_NOT_VALID_FOR_PROGRESSIVE_PLAYBACK: number;
            public static MEDIA_ERROR_SERVER_DIED: number;
            public static MEDIA_ERROR_TIMED_OUT: number;
            public static MEDIA_ERROR_UNKNOWN: number;
            public static MEDIA_ERROR_UNSUPPORTED: number;
            public static MEDIA_INFO_BAD_INTERLEAVING: number;
            public static MEDIA_INFO_BUFFERING_END: number;
            public static MEDIA_INFO_BUFFERING_START: number;
            public static MEDIA_INFO_METADATA_UPDATE: number;
            public static MEDIA_INFO_NOT_SEEKABLE: number;
            public static MEDIA_INFO_SUBTITLE_TIMED_OUT: number;
            public static MEDIA_INFO_UNKNOWN: number;
            public static MEDIA_INFO_UNSUPPORTED_SUBTITLE: number;
            public static MEDIA_INFO_VIDEO_RENDERING_START: number;
            public static MEDIA_INFO_VIDEO_TRACK_LAGGING: number;
            public static MEDIA_MIMETYPE_TEXT_SUBRIP: string;
            public static VIDEO_SCALING_MODE_SCALE_TO_FIT: number;
            public static VIDEO_SCALING_MODE_SCALE_TO_FIT_WITH_CROPPING: number;

            public prepare(): void;

            public setLooping(param0: boolean): void;

            public selectTrack(param0: number): void;

            public setDataSource(param0: android.content.Context, param1: android.net.Uri): void;

            public setAudioAttributes(param0: android.media.AudioAttributes): void;

            public setAudioStreamType(param0: number): void;

            public getSelectedTrack(param0: number): number;

            public setSurface(param0: android.view.Surface): void;

            public setOnSeekCompleteListener(param0: android.media.MediaPlayer.OnSeekCompleteListener): void;

            public setDataSource(param0: android.media.MediaDataSource): void;

            public setOnBufferingUpdateListener(param0: android.media.MediaPlayer.OnBufferingUpdateListener): void;

            public setOnErrorListener(param0: android.media.MediaPlayer.OnErrorListener): void;

            public setNextMediaPlayer(param0: android.media.MediaPlayer): void;

            public stop(): void;

            public setDataSource(param0: javaioFileDescriptor, param1: number, param2: number): void;

            public start(): void;

            public getPlaybackParams(): android.media.PlaybackParams;

            public static create(param0: android.content.Context, param1: android.net.Uri, param2: android.view.SurfaceHolder, param3: android.media.AudioAttributes, param4: number): android.media.MediaPlayer;

            public getVideoHeight(): number;

            public addTimedTextSource(param0: android.content.Context, param1: android.net.Uri, param2: string): void;

            public seekTo(param0: number): void;

            public getCurrentPosition(): number;

            public constructor();

            public getTimestamp(): android.media.MediaTimestamp;

            public setVideoScalingMode(param0: number): void;

            public isLooping(): boolean;

            public setDataSource(param0: string): void;

            public setPlaybackParams(param0: android.media.PlaybackParams): void;

            public setAuxEffectSendLevel(param0: number): void;

            public setVolume(param0: number, param1: number): void;

            public getVideoWidth(): number;

            public deselectTrack(param0: number): void;

            public setDisplay(param0: android.view.SurfaceHolder): void;

            public getDuration(): number;

            public setWakeMode(param0: android.content.Context, param1: number): void;

            public addTimedTextSource(param0: javaioFileDescriptor, param1: string): void;

            public isPlaying(): boolean;

            public pause(): void;

            public static create(param0: android.content.Context, param1: android.net.Uri): android.media.MediaPlayer;

            public attachAuxEffect(param0: number): void;

            public setOnPreparedListener(param0: android.media.MediaPlayer.OnPreparedListener): void;

            public getSyncParams(): android.media.SyncParams;

            public reset(): void;

            public release(): void;

            public finalize(): void;

            public setDataSource(param0: javaioFileDescriptor): void;

            public prepareAsync(): void;

            public setAudioSessionId(param0: number): void;

            public addTimedTextSource(param0: javaioFileDescriptor, param1: number, param2: number, param3: string): void;

            public setScreenOnWhilePlaying(param0: boolean): void;

            public setOnTimedTextListener(param0: android.media.MediaPlayer.OnTimedTextListener): void;

            public setDataSource(param0: android.content.Context, param1: android.net.Uri, param2: javautilMap): void;

            public setOnVideoSizeChangedListener(param0: android.media.MediaPlayer.OnVideoSizeChangedListener): void;

            public static create(param0: android.content.Context, param1: android.net.Uri, param2: android.view.SurfaceHolder): android.media.MediaPlayer;

            public getAudioSessionId(): number;

            public static create(param0: android.content.Context, param1: number, param2: android.media.AudioAttributes, param3: number): android.media.MediaPlayer;
            public static create(param0: android.content.Context, param1: number): android.media.MediaPlayer;

            public setOnTimedMetaDataAvailableListener(param0: android.media.MediaPlayer.OnTimedMetaDataAvailableListener): void;

            public setSyncParams(param0: android.media.SyncParams): void;

            public setOnInfoListener(param0: android.media.MediaPlayer.OnInfoListener): void;

            public getTrackInfo(): native.Array<android.media.MediaPlayer.TrackInfo>;

            public addTimedTextSource(param0: string, param1: string): void;

            public setOnCompletionListener(param0: android.media.MediaPlayer.OnCompletionListener): void;
        }
        export module MediaPlayer {
            export class OnBufferingUpdateListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.MediaPlayer$OnBufferingUpdateListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onBufferingUpdate(param0: android.media.MediaPlayer, param1: number): void;
                });

                public onBufferingUpdate(param0: android.media.MediaPlayer, param1: number): void;
            }
            export class OnCompletionListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.MediaPlayer$OnCompletionListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onCompletion(param0: android.media.MediaPlayer): void;
                });

                public onCompletion(param0: android.media.MediaPlayer): void;
            }
            export class OnErrorListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.MediaPlayer$OnErrorListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onError(param0: android.media.MediaPlayer, param1: number, param2: number): boolean;
                });

                public onError(param0: android.media.MediaPlayer, param1: number, param2: number): boolean;
            }
            export class OnInfoListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.MediaPlayer$OnInfoListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onInfo(param0: android.media.MediaPlayer, param1: number, param2: number): boolean;
                });

                public onInfo(param0: android.media.MediaPlayer, param1: number, param2: number): boolean;
            }
            export class OnPreparedListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.MediaPlayer$OnPreparedListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onPrepared(param0: android.media.MediaPlayer): void;
                });

                public onPrepared(param0: android.media.MediaPlayer): void;
            }
            export class OnSeekCompleteListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.MediaPlayer$OnSeekCompleteListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onSeekComplete(param0: android.media.MediaPlayer): void;
                });

                public onSeekComplete(param0: android.media.MediaPlayer): void;
            }
            export class OnTimedMetaDataAvailableListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.MediaPlayer$OnTimedMetaDataAvailableListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onTimedMetaDataAvailable(param0: android.media.MediaPlayer, param1: android.media.TimedMetaData): void;
                });

                public onTimedMetaDataAvailable(param0: android.media.MediaPlayer, param1: android.media.TimedMetaData): void;
            }
            export class OnTimedTextListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.MediaPlayer$OnTimedTextListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onTimedText(param0: android.media.MediaPlayer, param1: android.media.TimedText): void;
                });

                public onTimedText(param0: android.media.MediaPlayer, param1: android.media.TimedText): void;
            }
            export class OnVideoSizeChangedListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.MediaPlayer$OnVideoSizeChangedListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onVideoSizeChanged(param0: android.media.MediaPlayer, param1: number, param2: number): void;
                });

                public onVideoSizeChanged(param0: android.media.MediaPlayer, param1: number, param2: number): void;
            }
            export class TrackInfo extends javalangObject implements android.os.Parcelable {
                public static MEDIA_TRACK_TYPE_AUDIO: number;
                public static MEDIA_TRACK_TYPE_METADATA: number;
                public static MEDIA_TRACK_TYPE_SUBTITLE: number;
                public static MEDIA_TRACK_TYPE_TIMEDTEXT: number;
                public static MEDIA_TRACK_TYPE_UNKNOWN: number;
                public static MEDIA_TRACK_TYPE_VIDEO: number;

                public getLanguage(): string;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getTrackType(): number;

                public describeContents(): number;

                public getFormat(): android.media.MediaFormat;

                public toString(): string;
            }
        }
    }
}

/// <reference path="./android.hardware.Camera.d.ts" />
/// <reference path="./android.media.CamcorderProfile.d.ts" />
/// <reference path="./android.media.MediaRecorder.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module media {
        export class MediaRecorder extends javalangObject {
            public static MEDIA_ERROR_SERVER_DIED: number;
            public static MEDIA_RECORDER_ERROR_UNKNOWN: number;
            public static MEDIA_RECORDER_INFO_MAX_DURATION_REACHED: number;
            public static MEDIA_RECORDER_INFO_MAX_FILESIZE_REACHED: number;
            public static MEDIA_RECORDER_INFO_UNKNOWN: number;

            public prepare(): void;

            public setVideoSource(param0: number): void;

            public setVideoEncodingBitRate(param0: number): void;

            public setVideoSize(param0: number, param1: number): void;

            public setOutputFile(param0: javaioFileDescriptor): void;

            public setPreviewDisplay(param0: android.view.Surface): void;

            public setAudioChannels(param0: number): void;

            public setOutputFormat(param0: number): void;

            public setVideoEncoder(param0: number): void;

            public setInputSurface(param0: android.view.Surface): void;

            public setMaxDuration(param0: number): void;

            public setAudioEncodingBitRate(param0: number): void;

            public setMaxFileSize(param0: number): void;

            public setOnInfoListener(param0: android.media.MediaRecorder.OnInfoListener): void;

            public stop(): void;

            public reset(): void;

            public start(): void;

            public release(): void;

            public finalize(): void;

            public setCaptureRate(param0: number): void;

            public setVideoFrameRate(param0: number): void;

            public setAudioSource(param0: number): void;

            public setAudioSamplingRate(param0: number): void;

            public setProfile(param0: android.media.CamcorderProfile): void;

            public setOrientationHint(param0: number): void;

            public setOnErrorListener(param0: android.media.MediaRecorder.OnErrorListener): void;

            public constructor();

            public setCamera(param0: android.hardware.Camera): void;

            public getSurface(): android.view.Surface;

            public setLocation(param0: number, param1: number): void;

            public static getAudioSourceMax(): number;

            public setOutputFile(param0: string): void;

            public getMaxAmplitude(): number;

            public setAudioEncoder(param0: number): void;
        }
        export module MediaRecorder {
            export class AudioEncoder extends javalangObject {
                public static AAC: number;
                public static AAC_ELD: number;
                public static AMR_NB: number;
                public static AMR_WB: number;
                public static DEFAULT: number;
                public static HE_AAC: number;
                public static VORBIS: number;
            }
            export class AudioSource extends javalangObject {
                public static CAMCORDER: number;
                public static DEFAULT: number;
                public static MIC: number;
                public static REMOTE_SUBMIX: number;
                public static VOICE_CALL: number;
                public static VOICE_COMMUNICATION: number;
                public static VOICE_DOWNLINK: number;
                public static VOICE_RECOGNITION: number;
                public static VOICE_UPLINK: number;
            }
            export class OnErrorListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.MediaRecorder$OnErrorListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onError(param0: android.media.MediaRecorder, param1: number, param2: number): void;
                });

                public onError(param0: android.media.MediaRecorder, param1: number, param2: number): void;
            }
            export class OnInfoListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.MediaRecorder$OnInfoListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onInfo(param0: android.media.MediaRecorder, param1: number, param2: number): void;
                });

                public onInfo(param0: android.media.MediaRecorder, param1: number, param2: number): void;
            }
            export class OutputFormat extends javalangObject {
                public static AAC_ADTS: number;
                public static AMR_NB: number;
                public static AMR_WB: number;
                public static DEFAULT: number;
                public static MPEG_4: number;
                public static RAW_AMR: number;
                public static THREE_GPP: number;
                public static WEBM: number;
            }
            export class VideoEncoder extends javalangObject {
                public static DEFAULT: number;
                public static H263: number;
                public static H264: number;
                public static MPEG_4_SP: number;
                public static VP8: number;
            }
            export class VideoSource extends javalangObject {
                public static CAMERA: number;
                public static DEFAULT: number;
                public static SURFACE: number;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.media.MediaRouter.d.ts" />
/// <reference path="./android.media.RemoteControlClient.d.ts" />
/// <reference path="./android.view.Display.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module media {
        export class MediaRouter extends javalangObject {
            public static CALLBACK_FLAG_PERFORM_ACTIVE_SCAN: number;
            public static CALLBACK_FLAG_UNFILTERED_EVENTS: number;
            public static ROUTE_TYPE_LIVE_AUDIO: number;
            public static ROUTE_TYPE_LIVE_VIDEO: number;
            public static ROUTE_TYPE_USER: number;

            public getCategoryAt(param0: number): android.media.MediaRouter.RouteCategory;

            public getDefaultRoute(): android.media.MediaRouter.RouteInfo;

            public clearUserRoutes(): void;

            public getCategoryCount(): number;

            public addCallback(param0: number, param1: android.media.MediaRouter.Callback): void;

            public selectRoute(param0: number, param1: android.media.MediaRouter.RouteInfo): void;

            public getRouteCount(): number;

            public getRouteAt(param0: number): android.media.MediaRouter.RouteInfo;

            public createUserRoute(param0: android.media.MediaRouter.RouteCategory): android.media.MediaRouter.UserRouteInfo;

            public removeCallback(param0: android.media.MediaRouter.Callback): void;

            public createRouteCategory(param0: number, param1: boolean): android.media.MediaRouter.RouteCategory;

            public removeUserRoute(param0: android.media.MediaRouter.UserRouteInfo): void;

            public addCallback(param0: number, param1: android.media.MediaRouter.Callback, param2: number): void;

            public getSelectedRoute(param0: number): android.media.MediaRouter.RouteInfo;

            public addUserRoute(param0: android.media.MediaRouter.UserRouteInfo): void;

            public createRouteCategory(param0: string, param1: boolean): android.media.MediaRouter.RouteCategory;
        }
        export module MediaRouter {
            export abstract class Callback extends javalangObject {
                public onRouteVolumeChanged(param0: android.media.MediaRouter, param1: android.media.MediaRouter.RouteInfo): void;

                public onRouteGrouped(param0: android.media.MediaRouter, param1: android.media.MediaRouter.RouteInfo, param2: android.media.MediaRouter.RouteGroup, param3: number): void;

                public onRouteChanged(param0: android.media.MediaRouter, param1: android.media.MediaRouter.RouteInfo): void;

                public onRouteUngrouped(param0: android.media.MediaRouter, param1: android.media.MediaRouter.RouteInfo, param2: android.media.MediaRouter.RouteGroup): void;

                public onRouteAdded(param0: android.media.MediaRouter, param1: android.media.MediaRouter.RouteInfo): void;

                public onRouteUnselected(param0: android.media.MediaRouter, param1: number, param2: android.media.MediaRouter.RouteInfo): void;

                public onRouteRemoved(param0: android.media.MediaRouter, param1: android.media.MediaRouter.RouteInfo): void;

                public onRouteSelected(param0: android.media.MediaRouter, param1: number, param2: android.media.MediaRouter.RouteInfo): void;

                public constructor();

                public onRoutePresentationDisplayChanged(param0: android.media.MediaRouter, param1: android.media.MediaRouter.RouteInfo): void;
            }
            export class RouteCategory extends javalangObject {
                public getName(param0: android.content.Context): string;

                public isGroupable(): boolean;

                public getRoutes(param0: javautilList): javautilList;

                public getName(): string;

                public getSupportedTypes(): number;

                public toString(): string;
            }
            export class RouteGroup extends android.media.MediaRouter.RouteInfo {
                public removeRoute(param0: android.media.MediaRouter.RouteInfo): void;
                public removeRoute(param0: number): void;

                public setIconDrawable(param0: android.graphics.drawable.Drawable): void;

                public requestUpdateVolume(param0: number): void;

                public getRouteCount(): number;

                public setIconResource(param0: number): void;

                public requestSetVolume(param0: number): void;

                public addRoute(param0: android.media.MediaRouter.RouteInfo): void;
                public addRoute(param0: android.media.MediaRouter.RouteInfo, param1: number): void;

                public toString(): string;

                public getRouteAt(param0: number): android.media.MediaRouter.RouteInfo;
            }
            export class RouteInfo extends javalangObject {
                public static PLAYBACK_TYPE_LOCAL: number;
                public static PLAYBACK_TYPE_REMOTE: number;
                public static PLAYBACK_VOLUME_FIXED: number;
                public static PLAYBACK_VOLUME_VARIABLE: number;

                public getCategory(): android.media.MediaRouter.RouteCategory;

                public getStatus(): string;

                public requestUpdateVolume(param0: number): void;

                public getIconDrawable(): android.graphics.drawable.Drawable;

                public getVolumeMax(): number;

                public getPresentationDisplay(): android.view.Display;

                public getPlaybackStream(): number;

                public getName(): string;

                public getDescription(): string;

                public getPlaybackType(): number;

                public toString(): string;

                public isConnecting(): boolean;

                public getVolume(): number;

                public getTag(): javalangObject;

                public getName(param0: android.content.Context): string;

                public requestSetVolume(param0: number): void;

                public getGroup(): android.media.MediaRouter.RouteGroup;

                public isEnabled(): boolean;

                public getSupportedTypes(): number;

                public setTag(param0: javalangObject): void;

                public getVolumeHandling(): number;
            }
            export class SimpleCallback extends android.media.MediaRouter.Callback {
                public onRouteVolumeChanged(param0: android.media.MediaRouter, param1: android.media.MediaRouter.RouteInfo): void;

                public onRouteGrouped(param0: android.media.MediaRouter, param1: android.media.MediaRouter.RouteInfo, param2: android.media.MediaRouter.RouteGroup, param3: number): void;

                public onRouteChanged(param0: android.media.MediaRouter, param1: android.media.MediaRouter.RouteInfo): void;

                public onRouteUngrouped(param0: android.media.MediaRouter, param1: android.media.MediaRouter.RouteInfo, param2: android.media.MediaRouter.RouteGroup): void;

                public onRouteAdded(param0: android.media.MediaRouter, param1: android.media.MediaRouter.RouteInfo): void;

                public onRouteUnselected(param0: android.media.MediaRouter, param1: number, param2: android.media.MediaRouter.RouteInfo): void;

                public onRouteRemoved(param0: android.media.MediaRouter, param1: android.media.MediaRouter.RouteInfo): void;

                public onRouteSelected(param0: android.media.MediaRouter, param1: number, param2: android.media.MediaRouter.RouteInfo): void;

                public constructor();
            }
            export class UserRouteInfo extends android.media.MediaRouter.RouteInfo {
                public setName(param0: string): void;

                public setPlaybackStream(param0: number): void;

                public requestUpdateVolume(param0: number): void;

                public setVolumeHandling(param0: number): void;

                public setIconResource(param0: number): void;

                public setVolumeCallback(param0: android.media.MediaRouter.VolumeCallback): void;

                public setName(param0: number): void;

                public getRemoteControlClient(): android.media.RemoteControlClient;

                public setStatus(param0: string): void;

                public setIconDrawable(param0: android.graphics.drawable.Drawable): void;

                public setPlaybackType(param0: number): void;

                public setDescription(param0: string): void;

                public setVolume(param0: number): void;

                public requestSetVolume(param0: number): void;

                public setVolumeMax(param0: number): void;

                public setRemoteControlClient(param0: android.media.RemoteControlClient): void;
            }
            export abstract class VolumeCallback extends javalangObject {
                public onVolumeUpdateRequest(param0: android.media.MediaRouter.RouteInfo, param1: number): void;

                public onVolumeSetRequest(param0: android.media.MediaRouter.RouteInfo, param1: number): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module media {
        export class MediaScannerConnection extends javalangObject implements android.content.ServiceConnection {
            public constructor(param0: android.content.Context, param1: android.media.MediaScannerConnection.MediaScannerConnectionClient);

            public scanFile(param0: string, param1: string): void;

            public isConnected(): boolean;

            public onServiceDisconnected(param0: android.content.ComponentName): void;

            public static scanFile(param0: android.content.Context, param1: native.Array<string>, param2: native.Array<string>, param3: android.media.MediaScannerConnection.OnScanCompletedListener): void;

            public connect(): void;

            public disconnect(): void;

            public onServiceConnected(param0: android.content.ComponentName, param1: android.os.IBinder): void;
        }
        export module MediaScannerConnection {
            export class MediaScannerConnectionClient extends javalangObject implements android.media.MediaScannerConnection.OnScanCompletedListener {
                /**
                 * Constructs a new instance of the android.media.MediaScannerConnection$MediaScannerConnectionClient interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onMediaScannerConnected(): void;
                    onScanCompleted(param0: string, param1: android.net.Uri): void;
                    onScanCompleted(param0: string, param1: android.net.Uri): void;
                });

                public onScanCompleted(param0: string, param1: android.net.Uri): void;

                public onMediaScannerConnected(): void;
            }
            export class OnScanCompletedListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.MediaScannerConnection$OnScanCompletedListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onScanCompleted(param0: string, param1: android.net.Uri): void;
                });

                public onScanCompleted(param0: string, param1: android.net.Uri): void;
            }
        }
    }
}

/// <reference path="./android.media.AudioTrack.d.ts" />
/// <reference path="./android.media.MediaSync.d.ts" />
/// <reference path="./android.media.MediaTimestamp.d.ts" />
/// <reference path="./android.media.PlaybackParams.d.ts" />
/// <reference path="./android.media.SyncParams.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
declare module android {
    export module media {
        export class MediaSync extends javalangObject {
            public static MEDIASYNC_ERROR_AUDIOTRACK_FAIL: number;
            public static MEDIASYNC_ERROR_SURFACE_FAIL: number;

            public flush(): void;

            public setOnErrorListener(param0: android.media.MediaSync.OnErrorListener, param1: android.os.Handler): void;

            public createInputSurface(): android.view.Surface;

            public constructor();

            public setSurface(param0: android.view.Surface): void;

            public setAudioTrack(param0: android.media.AudioTrack): void;

            public getTimestamp(): android.media.MediaTimestamp;

            public getSyncParams(): android.media.SyncParams;

            public setPlaybackParams(param0: android.media.PlaybackParams): void;

            public setSyncParams(param0: android.media.SyncParams): void;

            public queueAudio(param0: javanioByteBuffer, param1: number, param2: number): void;

            public setCallback(param0: android.media.MediaSync.Callback, param1: android.os.Handler): void;

            public getPlaybackParams(): android.media.PlaybackParams;

            public finalize(): void;

            public release(): void;
        }
        export module MediaSync {
            export abstract class Callback extends javalangObject {
                public onAudioBufferConsumed(param0: android.media.MediaSync, param1: javanioByteBuffer, param2: number): void;

                public constructor();
            }
            export class OnErrorListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.MediaSync$OnErrorListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onError(param0: android.media.MediaSync, param1: number, param2: number): void;
                });

                public onError(param0: android.media.MediaSync, param1: number, param2: number): void;
            }
        }
    }
}

declare module android {
    export module media {
        export class MediaSyncEvent extends javalangObject {
            public static SYNC_EVENT_NONE: number;
            public static SYNC_EVENT_PRESENTATION_COMPLETE: number;

            public static createEvent(param0: number): android.media.MediaSyncEvent;

            public getAudioSessionId(): number;

            public getType(): number;

            public setAudioSessionId(param0: number): android.media.MediaSyncEvent;
        }
    }
}

declare module android {
    export module media {
        export class MediaTimestamp extends javalangObject {
            public getAnchorMediaTimeUs(): number;

            public getAnchorSytemNanoTime(): number;

            public getMediaClockRate(): number;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module media {
        export class NotProvisionedException extends android.media.MediaDrmException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module media {
        export class PlaybackParams extends javalangObject implements android.os.Parcelable {
            public static AUDIO_FALLBACK_MODE_DEFAULT: number;
            public static AUDIO_FALLBACK_MODE_FAIL: number;
            public static AUDIO_FALLBACK_MODE_MUTE: number;
            public static CREATOR: android.os.Parcelable.Creator;

            public setAudioFallbackMode(param0: number): android.media.PlaybackParams;

            public allowDefaults(): android.media.PlaybackParams;

            public getPitch(): number;

            public describeContents(): number;

            public setPitch(param0: number): android.media.PlaybackParams;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getSpeed(): number;

            public constructor();

            public getAudioFallbackMode(): number;

            public setSpeed(param0: number): android.media.PlaybackParams;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module media {
        export class Rating extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static RATING_3_STARS: number;
            public static RATING_4_STARS: number;
            public static RATING_5_STARS: number;
            public static RATING_HEART: number;
            public static RATING_NONE: number;
            public static RATING_PERCENTAGE: number;
            public static RATING_THUMB_UP_DOWN: number;

            public getRatingStyle(): number;

            public isRated(): boolean;

            public static newHeartRating(param0: boolean): android.media.Rating;

            public getStarRating(): number;

            public static newPercentageRating(param0: number): android.media.Rating;

            public static newUnratedRating(param0: number): android.media.Rating;

            public static newThumbRating(param0: boolean): android.media.Rating;

            public toString(): string;

            public static newStarRating(param0: number, param1: number): android.media.Rating;

            public isThumbUp(): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public hasHeart(): boolean;

            public getPercentRating(): number;
        }
    }
}

/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.media.MediaMetadataEditor.d.ts" />
/// <reference path="./android.media.session.MediaSession.d.ts" />
/// <reference path="./android.os.Looper.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module media {
        export class RemoteControlClient extends javalangObject {
            public static FLAG_KEY_MEDIA_FAST_FORWARD: number;
            public static FLAG_KEY_MEDIA_NEXT: number;
            public static FLAG_KEY_MEDIA_PAUSE: number;
            public static FLAG_KEY_MEDIA_PLAY: number;
            public static FLAG_KEY_MEDIA_PLAY_PAUSE: number;
            public static FLAG_KEY_MEDIA_POSITION_UPDATE: number;
            public static FLAG_KEY_MEDIA_PREVIOUS: number;
            public static FLAG_KEY_MEDIA_RATING: number;
            public static FLAG_KEY_MEDIA_REWIND: number;
            public static FLAG_KEY_MEDIA_STOP: number;
            public static PLAYSTATE_BUFFERING: number;
            public static PLAYSTATE_ERROR: number;
            public static PLAYSTATE_FAST_FORWARDING: number;
            public static PLAYSTATE_PAUSED: number;
            public static PLAYSTATE_PLAYING: number;
            public static PLAYSTATE_REWINDING: number;
            public static PLAYSTATE_SKIPPING_BACKWARDS: number;
            public static PLAYSTATE_SKIPPING_FORWARDS: number;
            public static PLAYSTATE_STOPPED: number;

            public setTransportControlFlags(param0: number): void;

            public setMetadataUpdateListener(param0: android.media.RemoteControlClient.OnMetadataUpdateListener): void;

            public setPlaybackPositionUpdateListener(param0: android.media.RemoteControlClient.OnPlaybackPositionUpdateListener): void;

            public constructor(param0: android.app.PendingIntent);
            public constructor(param0: android.app.PendingIntent, param1: android.os.Looper);

            public setPlaybackState(param0: number, param1: number, param2: number): void;

            public getMediaSession(): android.media.session.MediaSession;

            public editMetadata(param0: boolean): android.media.RemoteControlClient.MetadataEditor;

            public setPlaybackState(param0: number): void;

            public setOnGetPlaybackPositionListener(param0: android.media.RemoteControlClient.OnGetPlaybackPositionListener): void;
        }
        export module RemoteControlClient {
            export class MetadataEditor extends android.media.MediaMetadataEditor {
                public static BITMAP_KEY_ARTWORK: number;

                public putObject(param0: number, param1: javalangObject): android.media.RemoteControlClient.MetadataEditor;

                public apply(): void;

                public putObject(param0: number, param1: javalangObject): android.media.MediaMetadataEditor;

                public putLong(param0: number, param1: number): android.media.RemoteControlClient.MetadataEditor;

                public putBitmap(param0: number, param1: android.graphics.Bitmap): android.media.MediaMetadataEditor;
                public putBitmap(param0: number, param1: android.graphics.Bitmap): android.media.RemoteControlClient.MetadataEditor;

                public putLong(param0: number, param1: number): android.media.MediaMetadataEditor;

                public clear(): void;

                public putString(param0: number, param1: string): android.media.MediaMetadataEditor;
                public putString(param0: number, param1: string): android.media.RemoteControlClient.MetadataEditor;
            }
            export class OnGetPlaybackPositionListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.RemoteControlClient$OnGetPlaybackPositionListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onGetPlaybackPosition(): number;
                });

                public onGetPlaybackPosition(): number;
            }
            export class OnMetadataUpdateListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.RemoteControlClient$OnMetadataUpdateListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onMetadataUpdate(param0: number, param1: javalangObject): void;
                });

                public onMetadataUpdate(param0: number, param1: javalangObject): void;
            }
            export class OnPlaybackPositionUpdateListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.RemoteControlClient$OnPlaybackPositionUpdateListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onPlaybackPositionUpdate(param0: number): void;
                });

                public onPlaybackPositionUpdate(param0: number): void;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Looper.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
declare module android {
    export module media {
        export class RemoteController extends javalangObject {
            public static POSITION_SYNCHRONIZATION_CHECK: number;
            public static POSITION_SYNCHRONIZATION_NONE: number;

            public sendMediaKeyEvent(param0: android.view.KeyEvent): boolean;

            public getEstimatedMediaPosition(): number;

            public setArtworkConfiguration(param0: number, param1: number): boolean;

            public constructor(param0: android.content.Context, param1: android.media.RemoteController.OnClientUpdateListener);

            public seekTo(param0: number): boolean;

            public clearArtworkConfiguration(): boolean;

            public editMetadata(): android.media.RemoteController.MetadataEditor;

            public setSynchronizationMode(param0: number): boolean;

            public constructor(param0: android.content.Context, param1: android.media.RemoteController.OnClientUpdateListener, param2: android.os.Looper);
        }
        export module RemoteController {
            export class MetadataEditor extends android.media.MediaMetadataEditor {
                public apply(): void;
            }
            export class OnClientUpdateListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.RemoteController$OnClientUpdateListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onClientChange(param0: boolean): void;
                    onClientPlaybackStateUpdate(param0: number): void;
                    onClientPlaybackStateUpdate(param0: number, param1: number, param2: number, param3: number): void;
                    onClientTransportControlUpdate(param0: number): void;
                    onClientMetadataUpdate(param0: android.media.RemoteController.MetadataEditor): void;
                });

                public onClientPlaybackStateUpdate(param0: number): void;

                public onClientChange(param0: boolean): void;

                public onClientMetadataUpdate(param0: android.media.RemoteController.MetadataEditor): void;

                public onClientPlaybackStateUpdate(param0: number, param1: number, param2: number, param3: number): void;

                public onClientTransportControlUpdate(param0: number): void;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module media {
        export class ResourceBusyException extends android.media.MediaDrmException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.media.AudioAttributes.d.ts" />
declare module android {
    export module media {
        export class Ringtone extends javalangObject {
            public getTitle(param0: android.content.Context): string;

            public stop(): void;

            public setAudioAttributes(param0: android.media.AudioAttributes): void;

            public setStreamType(param0: number): void;

            public getStreamType(): number;

            public play(): void;

            public getAudioAttributes(): android.media.AudioAttributes;

            public isPlaying(): boolean;

            public finalize(): void;
        }
    }
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.media.Ringtone.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
declare module android {
    export module media {
        export class RingtoneManager extends javalangObject {
            public static ACTION_RINGTONE_PICKER: string;
            public static EXTRA_RINGTONE_DEFAULT_URI: string;
            public static EXTRA_RINGTONE_EXISTING_URI: string;
            public static EXTRA_RINGTONE_INCLUDE_DRM: string;
            public static EXTRA_RINGTONE_PICKED_URI: string;
            public static EXTRA_RINGTONE_SHOW_DEFAULT: string;
            public static EXTRA_RINGTONE_SHOW_SILENT: string;
            public static EXTRA_RINGTONE_TITLE: string;
            public static EXTRA_RINGTONE_TYPE: string;
            public static ID_COLUMN_INDEX: number;
            public static TITLE_COLUMN_INDEX: number;
            public static TYPE_ALARM: number;
            public static TYPE_ALL: number;
            public static TYPE_NOTIFICATION: number;
            public static TYPE_RINGTONE: number;
            public static URI_COLUMN_INDEX: number;

            public getRingtonePosition(param0: android.net.Uri): number;

            public inferStreamType(): number;

            public static isDefault(param0: android.net.Uri): boolean;

            public getRingtoneUri(param0: number): android.net.Uri;

            public setIncludeDrm(param0: boolean): void;

            public setType(param0: number): void;

            public static getRingtone(param0: android.content.Context, param1: android.net.Uri): android.media.Ringtone;

            public constructor(param0: android.app.Activity);

            public getRingtone(param0: number): android.media.Ringtone;

            public stopPreviousRingtone(): void;

            public getCursor(): android.database.Cursor;

            public constructor(param0: android.content.Context);

            public setStopPreviousRingtone(param0: boolean): void;

            public getStopPreviousRingtone(): boolean;

            public static getDefaultType(param0: android.net.Uri): number;

            public static getDefaultUri(param0: number): android.net.Uri;

            public static setActualDefaultRingtoneUri(param0: android.content.Context, param1: number, param2: android.net.Uri): void;

            public getIncludeDrm(): boolean;

            public static getActualDefaultRingtoneUri(param0: android.content.Context, param1: number): android.net.Uri;

            public static getValidRingtoneUri(param0: android.content.Context): android.net.Uri;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.AssetFileDescriptor.d.ts" />
/// <reference path="./android.media.AudioAttributes.d.ts" />
/// <reference path="./android.media.SoundPool.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module media {
        export class SoundPool extends javalangObject {
            public constructor(param0: number, param1: number, param2: number);

            public play(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): number;

            public setVolume(param0: number, param1: number, param2: number): void;

            public setRate(param0: number, param1: number): void;

            public load(param0: android.content.res.AssetFileDescriptor, param1: number): number;

            public unload(param0: number): boolean;

            public stop(param0: number): void;

            public setPriority(param0: number, param1: number): void;

            public load(param0: string, param1: number): number;

            public autoPause(): void;

            public resume(param0: number): void;

            public pause(param0: number): void;

            public setLoop(param0: number, param1: number): void;

            public autoResume(): void;

            public load(param0: javaioFileDescriptor, param1: number, param2: number, param3: number): number;
            public load(param0: android.content.Context, param1: number, param2: number): number;

            public setOnLoadCompleteListener(param0: android.media.SoundPool.OnLoadCompleteListener): void;

            public release(): void;

            public finalize(): void;
        }
        export module SoundPool {
            export class Builder extends javalangObject {
                public setAudioAttributes(param0: android.media.AudioAttributes): android.media.SoundPool.Builder;

                public setMaxStreams(param0: number): android.media.SoundPool.Builder;

                public build(): android.media.SoundPool;

                public constructor();
            }
            export class OnLoadCompleteListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.SoundPool$OnLoadCompleteListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onLoadComplete(param0: android.media.SoundPool, param1: number, param2: number): void;
                });

                public onLoadComplete(param0: android.media.SoundPool, param1: number, param2: number): void;
            }
        }
    }
}

declare module android {
    export module media {
        export class SyncParams extends javalangObject {
            public static AUDIO_ADJUST_MODE_DEFAULT: number;
            public static AUDIO_ADJUST_MODE_RESAMPLE: number;
            public static AUDIO_ADJUST_MODE_STRETCH: number;
            public static SYNC_SOURCE_AUDIO: number;
            public static SYNC_SOURCE_DEFAULT: number;
            public static SYNC_SOURCE_SYSTEM_CLOCK: number;
            public static SYNC_SOURCE_VSYNC: number;

            public allowDefaults(): android.media.SyncParams;

            public getSyncSource(): number;

            public getAudioAdjustMode(): number;

            public getTolerance(): number;

            public setTolerance(param0: number): android.media.SyncParams;

            public getFrameRate(): number;

            public constructor();

            public setAudioAdjustMode(param0: number): android.media.SyncParams;

            public setSyncSource(param0: number): android.media.SyncParams;

            public setFrameRate(param0: number): android.media.SyncParams;
        }
    }
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module media {
        export class ThumbnailUtils extends javalangObject {
            public static OPTIONS_RECYCLE_INPUT: number;

            public static createVideoThumbnail(param0: string, param1: number): android.graphics.Bitmap;

            public static extractThumbnail(param0: android.graphics.Bitmap, param1: number, param2: number, param3: number): android.graphics.Bitmap;
            public static extractThumbnail(param0: android.graphics.Bitmap, param1: number, param2: number): android.graphics.Bitmap;

            public constructor();
        }
    }
}

declare module android {
    export module media {
        export class TimedMetaData extends javalangObject {
            public getTimestamp(): number;

            public getMetaData(): native.Array<number>;
        }
    }
}

/// <reference path="./android.graphics.Rect.d.ts" />
declare module android {
    export module media {
        export class TimedText extends javalangObject {
            public getText(): string;

            public getBounds(): android.graphics.Rect;
        }
    }
}

declare module android {
    export module media {
        export class ToneGenerator extends javalangObject {
            public static MAX_VOLUME: number;
            public static MIN_VOLUME: number;
            public static TONE_CDMA_ABBR_ALERT: number;
            public static TONE_CDMA_ABBR_INTERCEPT: number;
            public static TONE_CDMA_ABBR_REORDER: number;
            public static TONE_CDMA_ALERT_AUTOREDIAL_LITE: number;
            public static TONE_CDMA_ALERT_CALL_GUARD: number;
            public static TONE_CDMA_ALERT_INCALL_LITE: number;
            public static TONE_CDMA_ALERT_NETWORK_LITE: number;
            public static TONE_CDMA_ANSWER: number;
            public static TONE_CDMA_CALLDROP_LITE: number;
            public static TONE_CDMA_CALL_SIGNAL_ISDN_INTERGROUP: number;
            public static TONE_CDMA_CALL_SIGNAL_ISDN_NORMAL: number;
            public static TONE_CDMA_CALL_SIGNAL_ISDN_PAT3: number;
            public static TONE_CDMA_CALL_SIGNAL_ISDN_PAT5: number;
            public static TONE_CDMA_CALL_SIGNAL_ISDN_PAT6: number;
            public static TONE_CDMA_CALL_SIGNAL_ISDN_PAT7: number;
            public static TONE_CDMA_CALL_SIGNAL_ISDN_PING_RING: number;
            public static TONE_CDMA_CALL_SIGNAL_ISDN_SP_PRI: number;
            public static TONE_CDMA_CONFIRM: number;
            public static TONE_CDMA_DIAL_TONE_LITE: number;
            public static TONE_CDMA_EMERGENCY_RINGBACK: number;
            public static TONE_CDMA_HIGH_L: number;
            public static TONE_CDMA_HIGH_PBX_L: number;
            public static TONE_CDMA_HIGH_PBX_SLS: number;
            public static TONE_CDMA_HIGH_PBX_SS: number;
            public static TONE_CDMA_HIGH_PBX_SSL: number;
            public static TONE_CDMA_HIGH_PBX_S_X4: number;
            public static TONE_CDMA_HIGH_SLS: number;
            public static TONE_CDMA_HIGH_SS: number;
            public static TONE_CDMA_HIGH_SSL: number;
            public static TONE_CDMA_HIGH_SS_2: number;
            public static TONE_CDMA_HIGH_S_X4: number;
            public static TONE_CDMA_INTERCEPT: number;
            public static TONE_CDMA_KEYPAD_VOLUME_KEY_LITE: number;
            public static TONE_CDMA_LOW_L: number;
            public static TONE_CDMA_LOW_PBX_L: number;
            public static TONE_CDMA_LOW_PBX_SLS: number;
            public static TONE_CDMA_LOW_PBX_SS: number;
            public static TONE_CDMA_LOW_PBX_SSL: number;
            public static TONE_CDMA_LOW_PBX_S_X4: number;
            public static TONE_CDMA_LOW_SLS: number;
            public static TONE_CDMA_LOW_SS: number;
            public static TONE_CDMA_LOW_SSL: number;
            public static TONE_CDMA_LOW_SS_2: number;
            public static TONE_CDMA_LOW_S_X4: number;
            public static TONE_CDMA_MED_L: number;
            public static TONE_CDMA_MED_PBX_L: number;
            public static TONE_CDMA_MED_PBX_SLS: number;
            public static TONE_CDMA_MED_PBX_SS: number;
            public static TONE_CDMA_MED_PBX_SSL: number;
            public static TONE_CDMA_MED_PBX_S_X4: number;
            public static TONE_CDMA_MED_SLS: number;
            public static TONE_CDMA_MED_SS: number;
            public static TONE_CDMA_MED_SSL: number;
            public static TONE_CDMA_MED_SS_2: number;
            public static TONE_CDMA_MED_S_X4: number;
            public static TONE_CDMA_NETWORK_BUSY: number;
            public static TONE_CDMA_NETWORK_BUSY_ONE_SHOT: number;
            public static TONE_CDMA_NETWORK_CALLWAITING: number;
            public static TONE_CDMA_NETWORK_USA_RINGBACK: number;
            public static TONE_CDMA_ONE_MIN_BEEP: number;
            public static TONE_CDMA_PIP: number;
            public static TONE_CDMA_PRESSHOLDKEY_LITE: number;
            public static TONE_CDMA_REORDER: number;
            public static TONE_CDMA_SIGNAL_OFF: number;
            public static TONE_CDMA_SOFT_ERROR_LITE: number;
            public static TONE_DTMF_0: number;
            public static TONE_DTMF_1: number;
            public static TONE_DTMF_2: number;
            public static TONE_DTMF_3: number;
            public static TONE_DTMF_4: number;
            public static TONE_DTMF_5: number;
            public static TONE_DTMF_6: number;
            public static TONE_DTMF_7: number;
            public static TONE_DTMF_8: number;
            public static TONE_DTMF_9: number;
            public static TONE_DTMF_A: number;
            public static TONE_DTMF_B: number;
            public static TONE_DTMF_C: number;
            public static TONE_DTMF_D: number;
            public static TONE_DTMF_P: number;
            public static TONE_DTMF_S: number;
            public static TONE_PROP_ACK: number;
            public static TONE_PROP_BEEP: number;
            public static TONE_PROP_BEEP2: number;
            public static TONE_PROP_NACK: number;
            public static TONE_PROP_PROMPT: number;
            public static TONE_SUP_BUSY: number;
            public static TONE_SUP_CALL_WAITING: number;
            public static TONE_SUP_CONFIRM: number;
            public static TONE_SUP_CONGESTION: number;
            public static TONE_SUP_CONGESTION_ABBREV: number;
            public static TONE_SUP_DIAL: number;
            public static TONE_SUP_ERROR: number;
            public static TONE_SUP_INTERCEPT: number;
            public static TONE_SUP_INTERCEPT_ABBREV: number;
            public static TONE_SUP_PIP: number;
            public static TONE_SUP_RADIO_ACK: number;
            public static TONE_SUP_RADIO_NOTAVAIL: number;
            public static TONE_SUP_RINGTONE: number;

            public getAudioSessionId(): number;

            public startTone(param0: number): boolean;
            public startTone(param0: number, param1: number): boolean;

            public stopTone(): void;

            public constructor(param0: number, param1: number);

            public release(): void;

            public finalize(): void;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module media {
        export class UnsupportedSchemeException extends android.media.MediaDrmException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

declare module android {
    export module media {
        export abstract class VolumeProvider extends javalangObject {
            public static VOLUME_CONTROL_ABSOLUTE: number;
            public static VOLUME_CONTROL_FIXED: number;
            public static VOLUME_CONTROL_RELATIVE: number;

            public constructor(param0: number, param1: number, param2: number);

            public onSetVolumeTo(param0: number): void;

            public setCurrentVolume(param0: number): void;

            public getVolumeControl(): number;

            public onAdjustVolume(param0: number): void;

            public getMaxVolume(): number;

            public getCurrentVolume(): number;
        }
    }
}

declare module android {
    export module media {
        export module audiofx {
            export class AcousticEchoCanceler extends android.media.audiofx.AudioEffect {
                public static create(param0: number): android.media.audiofx.AcousticEchoCanceler;

                public static isAvailable(): boolean;
            }
        }
    }
}

/// <reference path="./android.media.audiofx.AudioEffect.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />
declare module android {
    export module media {
        export module audiofx {
            export class AudioEffect extends javalangObject {
                public static ACTION_CLOSE_AUDIO_EFFECT_CONTROL_SESSION: string;
                public static ACTION_DISPLAY_AUDIO_EFFECT_CONTROL_PANEL: string;
                public static ACTION_OPEN_AUDIO_EFFECT_CONTROL_SESSION: string;
                public static ALREADY_EXISTS: number;
                public static CONTENT_TYPE_GAME: number;
                public static CONTENT_TYPE_MOVIE: number;
                public static CONTENT_TYPE_MUSIC: number;
                public static CONTENT_TYPE_VOICE: number;
                public static EFFECT_AUXILIARY: string;
                public static EFFECT_INSERT: string;
                public static EFFECT_TYPE_AEC: javautilUUID;
                public static EFFECT_TYPE_AGC: javautilUUID;
                public static EFFECT_TYPE_BASS_BOOST: javautilUUID;
                public static EFFECT_TYPE_ENV_REVERB: javautilUUID;
                public static EFFECT_TYPE_EQUALIZER: javautilUUID;
                public static EFFECT_TYPE_LOUDNESS_ENHANCER: javautilUUID;
                public static EFFECT_TYPE_NS: javautilUUID;
                public static EFFECT_TYPE_PRESET_REVERB: javautilUUID;
                public static EFFECT_TYPE_VIRTUALIZER: javautilUUID;
                public static ERROR: number;
                public static ERROR_BAD_VALUE: number;
                public static ERROR_DEAD_OBJECT: number;
                public static ERROR_INVALID_OPERATION: number;
                public static ERROR_NO_INIT: number;
                public static ERROR_NO_MEMORY: number;
                public static EXTRA_AUDIO_SESSION: string;
                public static EXTRA_CONTENT_TYPE: string;
                public static EXTRA_PACKAGE_NAME: string;
                public static SUCCESS: number;

                public static queryEffects(): native.Array<android.media.audiofx.AudioEffect.Descriptor>;

                public release(): void;

                public hasControl(): boolean;

                public getId(): number;

                public getEnabled(): boolean;

                public setControlStatusListener(param0: android.media.audiofx.AudioEffect.OnControlStatusChangeListener): void;

                public finalize(): void;

                public setEnableStatusListener(param0: android.media.audiofx.AudioEffect.OnEnableStatusChangeListener): void;

                public getDescriptor(): android.media.audiofx.AudioEffect.Descriptor;

                public setEnabled(param0: boolean): number;
            }
            export module AudioEffect {
                export class Descriptor extends javalangObject {
                    public connectMode: string;
                    public implementor: string;
                    public name: string;
                    public type: javautilUUID;
                    public uuid: javautilUUID;

                    public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
                    public constructor();
                }
                export class OnControlStatusChangeListener extends javalangObject {
                    /**
                     * Constructs a new instance of the android.media.audiofx.AudioEffect$OnControlStatusChangeListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onControlStatusChange(param0: android.media.audiofx.AudioEffect, param1: boolean): void;
                    });

                    public onControlStatusChange(param0: android.media.audiofx.AudioEffect, param1: boolean): void;
                }
                export class OnEnableStatusChangeListener extends javalangObject {
                    /**
                     * Constructs a new instance of the android.media.audiofx.AudioEffect$OnEnableStatusChangeListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onEnableStatusChange(param0: android.media.audiofx.AudioEffect, param1: boolean): void;
                    });

                    public onEnableStatusChange(param0: android.media.audiofx.AudioEffect, param1: boolean): void;
                }
            }
        }
    }
}

declare module android {
    export module media {
        export module audiofx {
            export class AutomaticGainControl extends android.media.audiofx.AudioEffect {
                public static isAvailable(): boolean;

                public static create(param0: number): android.media.audiofx.AutomaticGainControl;
            }
        }
    }
}

/// <reference path="./android.media.audiofx.BassBoost.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module media {
        export module audiofx {
            export class BassBoost extends android.media.audiofx.AudioEffect {
                public static PARAM_STRENGTH: number;
                public static PARAM_STRENGTH_SUPPORTED: number;

                public constructor(param0: number, param1: number);

                public setProperties(param0: android.media.audiofx.BassBoost.Settings): void;

                public getProperties(): android.media.audiofx.BassBoost.Settings;

                public getRoundedStrength(): number;

                public setStrength(param0: number): void;

                public setParameterListener(param0: android.media.audiofx.BassBoost.OnParameterChangeListener): void;

                public getStrengthSupported(): boolean;
            }
            export module BassBoost {
                export class OnParameterChangeListener extends javalangObject {
                    /**
                     * Constructs a new instance of the android.media.audiofx.BassBoost$OnParameterChangeListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onParameterChange(param0: android.media.audiofx.BassBoost, param1: number, param2: number, param3: number): void;
                    });

                    public onParameterChange(param0: android.media.audiofx.BassBoost, param1: number, param2: number, param3: number): void;
                }
                export class Settings extends javalangObject {
                    public strength: number;

                    public toString(): string;

                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }
}

/// <reference path="./android.media.audiofx.EnvironmentalReverb.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module media {
        export module audiofx {
            export class EnvironmentalReverb extends android.media.audiofx.AudioEffect {
                public static PARAM_DECAY_HF_RATIO: number;
                public static PARAM_DECAY_TIME: number;
                public static PARAM_DENSITY: number;
                public static PARAM_DIFFUSION: number;
                public static PARAM_REFLECTIONS_DELAY: number;
                public static PARAM_REFLECTIONS_LEVEL: number;
                public static PARAM_REVERB_DELAY: number;
                public static PARAM_REVERB_LEVEL: number;
                public static PARAM_ROOM_HF_LEVEL: number;
                public static PARAM_ROOM_LEVEL: number;

                public constructor(param0: number, param1: number);

                public setDecayHFRatio(param0: number): void;

                public getRoomHFLevel(): number;

                public setDecayTime(param0: number): void;

                public setReflectionsLevel(param0: number): void;

                public setProperties(param0: android.media.audiofx.EnvironmentalReverb.Settings): void;

                public setRoomLevel(param0: number): void;

                public setReverbDelay(param0: number): void;

                public setParameterListener(param0: android.media.audiofx.EnvironmentalReverb.OnParameterChangeListener): void;

                public getReflectionsLevel(): number;

                public getReflectionsDelay(): number;

                public getDensity(): number;

                public setDiffusion(param0: number): void;

                public getDecayTime(): number;

                public getProperties(): android.media.audiofx.EnvironmentalReverb.Settings;

                public setReverbLevel(param0: number): void;

                public getRoomLevel(): number;

                public getDiffusion(): number;

                public setReflectionsDelay(param0: number): void;

                public getReverbLevel(): number;

                public setDensity(param0: number): void;

                public setRoomHFLevel(param0: number): void;

                public getReverbDelay(): number;

                public getDecayHFRatio(): number;
            }
            export module EnvironmentalReverb {
                export class OnParameterChangeListener extends javalangObject {
                    /**
                     * Constructs a new instance of the android.media.audiofx.EnvironmentalReverb$OnParameterChangeListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onParameterChange(param0: android.media.audiofx.EnvironmentalReverb, param1: number, param2: number, param3: number): void;
                    });

                    public onParameterChange(param0: android.media.audiofx.EnvironmentalReverb, param1: number, param2: number, param3: number): void;
                }
                export class Settings extends javalangObject {
                    public decayHFRatio: number;
                    public decayTime: number;
                    public density: number;
                    public diffusion: number;
                    public reflectionsDelay: number;
                    public reflectionsLevel: number;
                    public reverbDelay: number;
                    public reverbLevel: number;
                    public roomHFLevel: number;
                    public roomLevel: number;

                    public toString(): string;

                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }
}

/// <reference path="./android.media.audiofx.Equalizer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module media {
        export module audiofx {
            export class Equalizer extends android.media.audiofx.AudioEffect {
                public static PARAM_BAND_FREQ_RANGE: number;
                public static PARAM_BAND_LEVEL: number;
                public static PARAM_CENTER_FREQ: number;
                public static PARAM_CURRENT_PRESET: number;
                public static PARAM_GET_BAND: number;
                public static PARAM_GET_NUM_OF_PRESETS: number;
                public static PARAM_GET_PRESET_NAME: number;
                public static PARAM_LEVEL_RANGE: number;
                public static PARAM_NUM_BANDS: number;
                public static PARAM_STRING_SIZE_MAX: number;

                public constructor(param0: number, param1: number);

                public getBandLevel(param0: number): number;

                public getProperties(): android.media.audiofx.Equalizer.Settings;

                public getBand(param0: number): number;

                public getPresetName(param0: number): string;

                public getNumberOfBands(): number;

                public getBandFreqRange(param0: number): native.Array<number>;

                public getNumberOfPresets(): number;

                public setBandLevel(param0: number, param1: number): void;

                public setParameterListener(param0: android.media.audiofx.Equalizer.OnParameterChangeListener): void;

                public usePreset(param0: number): void;

                public getCurrentPreset(): number;

                public getCenterFreq(param0: number): number;

                public setProperties(param0: android.media.audiofx.Equalizer.Settings): void;

                public getBandLevelRange(): native.Array<number>;
            }
            export module Equalizer {
                export class OnParameterChangeListener extends javalangObject {
                    /**
                     * Constructs a new instance of the android.media.audiofx.Equalizer$OnParameterChangeListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onParameterChange(param0: android.media.audiofx.Equalizer, param1: number, param2: number, param3: number, param4: number): void;
                    });

                    public onParameterChange(param0: android.media.audiofx.Equalizer, param1: number, param2: number, param3: number, param4: number): void;
                }
                export class Settings extends javalangObject {
                    public bandLevels: native.Array<number>;
                    public curPreset: number;
                    public numBands: number;

                    public toString(): string;

                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }
}

declare module android {
    export module media {
        export module audiofx {
            export class LoudnessEnhancer extends android.media.audiofx.AudioEffect {
                public static PARAM_TARGET_GAIN_MB: number;

                public getTargetGain(): number;

                public constructor(param0: number);

                public setTargetGain(param0: number): void;
            }
        }
    }
}

declare module android {
    export module media {
        export module audiofx {
            export class NoiseSuppressor extends android.media.audiofx.AudioEffect {
                public static create(param0: number): android.media.audiofx.NoiseSuppressor;

                public static isAvailable(): boolean;
            }
        }
    }
}

/// <reference path="./android.media.audiofx.PresetReverb.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module media {
        export module audiofx {
            export class PresetReverb extends android.media.audiofx.AudioEffect {
                public static PARAM_PRESET: number;
                public static PRESET_LARGEHALL: number;
                public static PRESET_LARGEROOM: number;
                public static PRESET_MEDIUMHALL: number;
                public static PRESET_MEDIUMROOM: number;
                public static PRESET_NONE: number;
                public static PRESET_PLATE: number;
                public static PRESET_SMALLROOM: number;

                public constructor(param0: number, param1: number);

                public setPreset(param0: number): void;

                public getPreset(): number;

                public setParameterListener(param0: android.media.audiofx.PresetReverb.OnParameterChangeListener): void;

                public getProperties(): android.media.audiofx.PresetReverb.Settings;

                public setProperties(param0: android.media.audiofx.PresetReverb.Settings): void;
            }
            export module PresetReverb {
                export class OnParameterChangeListener extends javalangObject {
                    /**
                     * Constructs a new instance of the android.media.audiofx.PresetReverb$OnParameterChangeListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onParameterChange(param0: android.media.audiofx.PresetReverb, param1: number, param2: number, param3: number): void;
                    });

                    public onParameterChange(param0: android.media.audiofx.PresetReverb, param1: number, param2: number, param3: number): void;
                }
                export class Settings extends javalangObject {
                    public preset: number;

                    public toString(): string;

                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }
}

/// <reference path="./android.media.audiofx.Virtualizer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module media {
        export module audiofx {
            export class Virtualizer extends android.media.audiofx.AudioEffect {
                public static PARAM_STRENGTH: number;
                public static PARAM_STRENGTH_SUPPORTED: number;
                public static VIRTUALIZATION_MODE_AUTO: number;
                public static VIRTUALIZATION_MODE_BINAURAL: number;
                public static VIRTUALIZATION_MODE_OFF: number;
                public static VIRTUALIZATION_MODE_TRANSAURAL: number;

                public constructor(param0: number, param1: number);

                public forceVirtualizationMode(param0: number): boolean;

                public canVirtualize(param0: number, param1: number): boolean;

                public setParameterListener(param0: android.media.audiofx.Virtualizer.OnParameterChangeListener): void;

                public getProperties(): android.media.audiofx.Virtualizer.Settings;

                public setProperties(param0: android.media.audiofx.Virtualizer.Settings): void;

                public getRoundedStrength(): number;

                public getVirtualizationMode(): number;

                public setStrength(param0: number): void;

                public getSpeakerAngles(param0: number, param1: number, param2: native.Array<number>): boolean;

                public getStrengthSupported(): boolean;
            }
            export module Virtualizer {
                export class OnParameterChangeListener extends javalangObject {
                    /**
                     * Constructs a new instance of the android.media.audiofx.Virtualizer$OnParameterChangeListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onParameterChange(param0: android.media.audiofx.Virtualizer, param1: number, param2: number, param3: number): void;
                    });

                    public onParameterChange(param0: android.media.audiofx.Virtualizer, param1: number, param2: number, param3: number): void;
                }
                export class Settings extends javalangObject {
                    public strength: number;

                    public toString(): string;

                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }
}

/// <reference path="./android.media.audiofx.Visualizer.d.ts" />
declare module android {
    export module media {
        export module audiofx {
            export class Visualizer extends javalangObject {
                public static ALREADY_EXISTS: number;
                public static ERROR: number;
                public static ERROR_BAD_VALUE: number;
                public static ERROR_DEAD_OBJECT: number;
                public static ERROR_INVALID_OPERATION: number;
                public static ERROR_NO_INIT: number;
                public static ERROR_NO_MEMORY: number;
                public static MEASUREMENT_MODE_NONE: number;
                public static MEASUREMENT_MODE_PEAK_RMS: number;
                public static SCALING_MODE_AS_PLAYED: number;
                public static SCALING_MODE_NORMALIZED: number;
                public static STATE_ENABLED: number;
                public static STATE_INITIALIZED: number;
                public static STATE_UNINITIALIZED: number;
                public static SUCCESS: number;

                public static getCaptureSizeRange(): native.Array<number>;

                public release(): void;

                public static getMaxCaptureRate(): number;

                public getMeasurementMode(): number;

                public finalize(): void;

                public getWaveForm(param0: native.Array<number>): number;

                public setDataCaptureListener(param0: android.media.audiofx.Visualizer.OnDataCaptureListener, param1: number, param2: boolean, param3: boolean): number;

                public setEnabled(param0: boolean): number;

                public getScalingMode(): number;

                public getFft(param0: native.Array<number>): number;

                public setMeasurementMode(param0: number): number;

                public getMeasurementPeakRms(param0: android.media.audiofx.Visualizer.MeasurementPeakRms): number;

                public getSamplingRate(): number;

                public getEnabled(): boolean;

                public setScalingMode(param0: number): number;

                public constructor(param0: number);

                public setCaptureSize(param0: number): number;

                public getCaptureSize(): number;
            }
            export module Visualizer {
                export class MeasurementPeakRms extends javalangObject {
                    public mPeak: number;
                    public mRms: number;

                    public constructor();
                }
                export class OnDataCaptureListener extends javalangObject {
                    /**
                     * Constructs a new instance of the android.media.audiofx.Visualizer$OnDataCaptureListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onWaveFormDataCapture(param0: android.media.audiofx.Visualizer, param1: native.Array<number>, param2: number): void;
                        onFftDataCapture(param0: android.media.audiofx.Visualizer, param1: native.Array<number>, param2: number): void;
                    });

                    public onWaveFormDataCapture(param0: android.media.audiofx.Visualizer, param1: native.Array<number>, param2: number): void;

                    public onFftDataCapture(param0: android.media.audiofx.Visualizer, param1: native.Array<number>, param2: number): void;
                }
            }
        }
    }
}

/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.media.MediaDescription.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module media {
        export module browse {
            export class MediaBrowser extends javalangObject {
                public subscribe(param0: string, param1: android.media.browse.MediaBrowser.SubscriptionCallback): void;

                public isConnected(): boolean;

                public getRoot(): string;

                public connect(): void;

                public getServiceComponent(): android.content.ComponentName;

                public disconnect(): void;

                public getItem(param0: string, param1: android.media.browse.MediaBrowser.ItemCallback): void;

                public getExtras(): android.os.Bundle;

                public constructor(param0: android.content.Context, param1: android.content.ComponentName, param2: android.media.browse.MediaBrowser.ConnectionCallback, param3: android.os.Bundle);

                public getSessionToken(): android.media.session.MediaSession.Token;

                public unsubscribe(param0: string): void;
            }
            export module MediaBrowser {
                export class ConnectionCallback extends javalangObject {
                    public onConnected(): void;

                    public onConnectionFailed(): void;

                    public constructor();

                    public onConnectionSuspended(): void;
                }
                export abstract class ItemCallback extends javalangObject {
                    public onItemLoaded(param0: android.media.browse.MediaBrowser.MediaItem): void;

                    public constructor();

                    public onError(param0: string): void;
                }
                export class MediaItem extends javalangObject implements android.os.Parcelable {
                    public static CREATOR: android.os.Parcelable.Creator;
                    public static FLAG_BROWSABLE: number;
                    public static FLAG_PLAYABLE: number;

                    public toString(): string;

                    public isBrowsable(): boolean;

                    public getFlags(): number;

                    public getDescription(): android.media.MediaDescription;

                    public describeContents(): number;

                    public isPlayable(): boolean;

                    public constructor(param0: android.media.MediaDescription, param1: number);

                    public getMediaId(): string;

                    public writeToParcel(param0: android.os.Parcel, param1: number): void;
                }
                export abstract class SubscriptionCallback extends javalangObject {
                    public constructor();

                    public onError(param0: string): void;

                    public onChildrenLoaded(param0: string, param1: javautilList): void;
                }
            }
        }
    }
}

/// <reference path="./android.media.effect.EffectUpdateListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module media {
        export module effect {
            export abstract class Effect extends javalangObject {
                public release(): void;

                public setUpdateListener(param0: android.media.effect.EffectUpdateListener): void;

                public apply(param0: number, param1: number, param2: number, param3: number): void;

                public getName(): string;

                public setParameter(param0: string, param1: javalangObject): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.media.effect.EffectFactory.d.ts" />
declare module android {
    export module media {
        export module effect {
            export class EffectContext extends javalangObject {
                public release(): void;

                public getFactory(): android.media.effect.EffectFactory;

                public static createWithCurrentGlContext(): android.media.effect.EffectContext;
            }
        }
    }
}

/// <reference path="./android.media.effect.Effect.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module media {
        export module effect {
            export class EffectFactory extends javalangObject {
                public static EFFECT_AUTOFIX: string;
                public static EFFECT_BACKDROPPER: string;
                public static EFFECT_BITMAPOVERLAY: string;
                public static EFFECT_BLACKWHITE: string;
                public static EFFECT_BRIGHTNESS: string;
                public static EFFECT_CONTRAST: string;
                public static EFFECT_CROP: string;
                public static EFFECT_CROSSPROCESS: string;
                public static EFFECT_DOCUMENTARY: string;
                public static EFFECT_DUOTONE: string;
                public static EFFECT_FILLLIGHT: string;
                public static EFFECT_FISHEYE: string;
                public static EFFECT_FLIP: string;
                public static EFFECT_GRAIN: string;
                public static EFFECT_GRAYSCALE: string;
                public static EFFECT_LOMOISH: string;
                public static EFFECT_NEGATIVE: string;
                public static EFFECT_POSTERIZE: string;
                public static EFFECT_REDEYE: string;
                public static EFFECT_ROTATE: string;
                public static EFFECT_SATURATE: string;
                public static EFFECT_SEPIA: string;
                public static EFFECT_SHARPEN: string;
                public static EFFECT_STRAIGHTEN: string;
                public static EFFECT_TEMPERATURE: string;
                public static EFFECT_TINT: string;
                public static EFFECT_VIGNETTE: string;

                public static isEffectSupported(param0: string): boolean;

                public createEffect(param0: string): android.media.effect.Effect;
            }
        }
    }
}

/// <reference path="./android.media.effect.Effect.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module media {
        export module effect {
            export class EffectUpdateListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.media.effect.EffectUpdateListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onEffectUpdated(param0: android.media.effect.Effect, param1: javalangObject): void;
                });

                public onEffectUpdated(param0: android.media.effect.Effect, param1: javalangObject): void;
            }
        }
    }
}

/// <reference path="./android.media.midi.MidiDeviceInfo.d.ts" />
/// <reference path="./android.media.midi.MidiInputPort.d.ts" />
/// <reference path="./android.media.midi.MidiOutputPort.d.ts" />
declare module android {
    export module media {
        export module midi {
            export class MidiDevice extends javalangObject implements javaioCloseable {
                public close(): void;

                public finalize(): void;

                public getInfo(): android.media.midi.MidiDeviceInfo;

                public connectPorts(param0: android.media.midi.MidiInputPort, param1: number): android.media.midi.MidiDevice.MidiConnection;

                public openInputPort(param0: number): android.media.midi.MidiInputPort;

                public openOutputPort(param0: number): android.media.midi.MidiOutputPort;

                public toString(): string;
            }
            export module MidiDevice {
                export class MidiConnection extends javalangObject implements javaioCloseable {
                    public finalize(): void;

                    public close(): void;
                }
            }
        }
    }
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module media {
        export module midi {
            export class MidiDeviceInfo extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public static PROPERTY_BLUETOOTH_DEVICE: string;
                public static PROPERTY_MANUFACTURER: string;
                public static PROPERTY_NAME: string;
                public static PROPERTY_PRODUCT: string;
                public static PROPERTY_SERIAL_NUMBER: string;
                public static PROPERTY_USB_DEVICE: string;
                public static PROPERTY_VERSION: string;
                public static TYPE_BLUETOOTH: number;
                public static TYPE_USB: number;
                public static TYPE_VIRTUAL: number;

                public getInputPortCount(): number;

                public getType(): number;

                public equals(param0: javalangObject): boolean;

                public hashCode(): number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getId(): number;

                public describeContents(): number;

                public getProperties(): android.os.Bundle;

                public isPrivate(): boolean;

                public getPorts(): native.Array<android.media.midi.MidiDeviceInfo.PortInfo>;

                public toString(): string;

                public getOutputPortCount(): number;
            }
            export module MidiDeviceInfo {
                export class PortInfo extends javalangObject {
                    public static TYPE_INPUT: number;
                    public static TYPE_OUTPUT: number;

                    public getType(): number;

                    public getPortNumber(): number;

                    public getName(): string;
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.media.midi.MidiDeviceInfo.d.ts" />
/// <reference path="./android.media.midi.MidiDeviceStatus.d.ts" />
/// <reference path="./android.media.midi.MidiReceiver.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
declare module android {
    export module media {
        export module midi {
            export abstract class MidiDeviceService extends android.app.Service {
                public static SERVICE_INTERFACE: string;

                public onGetInputPortReceivers(): native.Array<android.media.midi.MidiReceiver>;

                public onBind(param0: android.content.Intent): android.os.IBinder;

                public onDeviceStatusChanged(param0: android.media.midi.MidiDeviceStatus): void;

                public onClose(): void;

                public getOutputPortReceivers(): native.Array<android.media.midi.MidiReceiver>;

                public constructor(param0: android.content.Context);

                public onCreate(): void;

                public onTrimMemory(param0: number): void;

                public constructor();

                public getDeviceInfo(): android.media.midi.MidiDeviceInfo;
            }
        }
    }
}

/// <reference path="./android.media.midi.MidiDeviceInfo.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module media {
        export module midi {
            export class MidiDeviceStatus extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public getOutputPortOpenCount(param0: number): number;

                public toString(): string;

                public isInputPortOpen(param0: number): boolean;

                public getDeviceInfo(): android.media.midi.MidiDeviceInfo;
            }
        }
    }
}

declare module android {
    export module media {
        export module midi {
            export class MidiInputPort extends android.media.midi.MidiReceiver implements javaioCloseable {
                public close(): void;

                public getPortNumber(): number;

                public onFlush(): void;

                public finalize(): void;

                public onSend(param0: native.Array<number>, param1: number, param2: number, param3: number): void;
            }
        }
    }
}

/// <reference path="./android.bluetooth.BluetoothDevice.d.ts" />
/// <reference path="./android.media.midi.MidiDevice.d.ts" />
/// <reference path="./android.media.midi.MidiDeviceInfo.d.ts" />
/// <reference path="./android.media.midi.MidiDeviceStatus.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
declare module android {
    export module media {
        export module midi {
            export class MidiManager extends javalangObject {
                public registerDeviceCallback(param0: android.media.midi.MidiManager.DeviceCallback, param1: android.os.Handler): void;

                public getDevices(): native.Array<android.media.midi.MidiDeviceInfo>;

                public openBluetoothDevice(param0: android.bluetooth.BluetoothDevice, param1: android.media.midi.MidiManager.OnDeviceOpenedListener, param2: android.os.Handler): void;

                public openDevice(param0: android.media.midi.MidiDeviceInfo, param1: android.media.midi.MidiManager.OnDeviceOpenedListener, param2: android.os.Handler): void;

                public unregisterDeviceCallback(param0: android.media.midi.MidiManager.DeviceCallback): void;
            }
            export module MidiManager {
                export class DeviceCallback extends javalangObject {
                    public onDeviceAdded(param0: android.media.midi.MidiDeviceInfo): void;

                    public constructor();

                    public onDeviceRemoved(param0: android.media.midi.MidiDeviceInfo): void;

                    public onDeviceStatusChanged(param0: android.media.midi.MidiDeviceStatus): void;
                }
                export class OnDeviceOpenedListener extends javalangObject {
                    /**
                     * Constructs a new instance of the android.media.midi.MidiManager$OnDeviceOpenedListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onDeviceOpened(param0: android.media.midi.MidiDevice): void;
                    });

                    public onDeviceOpened(param0: android.media.midi.MidiDevice): void;
                }
            }
        }
    }
}

/// <reference path="./android.media.midi.MidiReceiver.d.ts" />
declare module android {
    export module media {
        export module midi {
            export class MidiOutputPort extends android.media.midi.MidiSender implements javaioCloseable {
                public close(): void;

                public getPortNumber(): number;

                public onDisconnect(param0: android.media.midi.MidiReceiver): void;

                public finalize(): void;

                public onConnect(param0: android.media.midi.MidiReceiver): void;
            }
        }
    }
}

declare module android {
    export module media {
        export module midi {
            export abstract class MidiReceiver extends javalangObject {
                public getMaxMessageSize(): number;

                public send(param0: native.Array<number>, param1: number, param2: number): void;

                public onFlush(): void;

                public constructor(param0: number);

                public send(param0: native.Array<number>, param1: number, param2: number, param3: number): void;

                public constructor();

                public onSend(param0: native.Array<number>, param1: number, param2: number, param3: number): void;

                public flush(): void;
            }
        }
    }
}

/// <reference path="./android.media.midi.MidiReceiver.d.ts" />
declare module android {
    export module media {
        export module midi {
            export abstract class MidiSender extends javalangObject {
                public disconnect(param0: android.media.midi.MidiReceiver): void;

                public onDisconnect(param0: android.media.midi.MidiReceiver): void;

                public connect(param0: android.media.midi.MidiReceiver): void;

                public onConnect(param0: android.media.midi.MidiReceiver): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.hardware.display.VirtualDisplay.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module media {
        export module projection {
            export class MediaProjection extends javalangObject {
                public stop(): void;

                public registerCallback(param0: android.media.projection.MediaProjection.Callback, param1: android.os.Handler): void;

                public createVirtualDisplay(param0: string, param1: number, param2: number, param3: number, param4: number, param5: android.view.Surface, param6: android.hardware.display.VirtualDisplay.Callback, param7: android.os.Handler): android.hardware.display.VirtualDisplay;

                public unregisterCallback(param0: android.media.projection.MediaProjection.Callback): void;
            }
            export module MediaProjection {
                export abstract class Callback extends javalangObject {
                    public constructor();

                    public onStop(): void;
                }
            }
        }
    }
}

/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.media.projection.MediaProjection.d.ts" />
declare module android {
    export module media {
        export module projection {
            export class MediaProjectionManager extends javalangObject {
                public createScreenCaptureIntent(): android.content.Intent;

                public getMediaProjection(param0: number, param1: android.content.Intent): android.media.projection.MediaProjection;
            }
        }
    }
}

/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.media.AudioAttributes.d.ts" />
/// <reference path="./android.media.MediaMetadata.d.ts" />
/// <reference path="./android.media.Rating.d.ts" />
/// <reference path="./android.media.session.PlaybackState.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.ResultReceiver.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module media {
        export module session {
            export class MediaController extends javalangObject {
                public getPlaybackInfo(): android.media.session.MediaController.PlaybackInfo;

                public getRatingType(): number;

                public getPackageName(): string;

                public registerCallback(param0: android.media.session.MediaController.Callback): void;

                public getMetadata(): android.media.MediaMetadata;

                public getQueue(): javautilList;

                public adjustVolume(param0: number, param1: number): void;

                public sendCommand(param0: string, param1: android.os.Bundle, param2: android.os.ResultReceiver): void;

                public getTransportControls(): android.media.session.MediaController.TransportControls;

                public registerCallback(param0: android.media.session.MediaController.Callback, param1: android.os.Handler): void;

                public unregisterCallback(param0: android.media.session.MediaController.Callback): void;

                public dispatchMediaButtonEvent(param0: android.view.KeyEvent): boolean;

                public getPlaybackState(): android.media.session.PlaybackState;

                public getQueueTitle(): string;

                public getFlags(): number;

                public setVolumeTo(param0: number, param1: number): void;

                public getExtras(): android.os.Bundle;

                public constructor(param0: android.content.Context, param1: android.media.session.MediaSession.Token);

                public getSessionToken(): android.media.session.MediaSession.Token;

                public getSessionActivity(): android.app.PendingIntent;
            }
            export module MediaController {
                export abstract class Callback extends javalangObject {
                    public onSessionDestroyed(): void;

                    public onQueueTitleChanged(param0: string): void;

                    public onMetadataChanged(param0: android.media.MediaMetadata): void;

                    public constructor();

                    public onPlaybackStateChanged(param0: android.media.session.PlaybackState): void;

                    public onQueueChanged(param0: javautilList): void;

                    public onSessionEvent(param0: string, param1: android.os.Bundle): void;

                    public onAudioInfoChanged(param0: android.media.session.MediaController.PlaybackInfo): void;

                    public onExtrasChanged(param0: android.os.Bundle): void;
                }
                export class PlaybackInfo extends javalangObject {
                    public static PLAYBACK_TYPE_LOCAL: number;
                    public static PLAYBACK_TYPE_REMOTE: number;

                    public getAudioAttributes(): android.media.AudioAttributes;

                    public getMaxVolume(): number;

                    public getVolumeControl(): number;

                    public getPlaybackType(): number;

                    public getCurrentVolume(): number;
                }
                export class TransportControls extends javalangObject {
                    public playFromUri(param0: android.net.Uri, param1: android.os.Bundle): void;

                    public playFromMediaId(param0: string, param1: android.os.Bundle): void;

                    public fastForward(): void;

                    public setRating(param0: android.media.Rating): void;

                    public skipToQueueItem(param0: number): void;

                    public skipToNext(): void;

                    public rewind(): void;

                    public seekTo(param0: number): void;

                    public skipToPrevious(): void;

                    public pause(): void;

                    public stop(): void;

                    public sendCustomAction(param0: android.media.session.PlaybackState.CustomAction, param1: android.os.Bundle): void;

                    public play(): void;

                    public sendCustomAction(param0: string, param1: android.os.Bundle): void;

                    public playFromSearch(param0: string, param1: android.os.Bundle): void;
                }
            }
        }
    }
}

/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.media.AudioAttributes.d.ts" />
/// <reference path="./android.media.MediaDescription.d.ts" />
/// <reference path="./android.media.MediaMetadata.d.ts" />
/// <reference path="./android.media.Rating.d.ts" />
/// <reference path="./android.media.VolumeProvider.d.ts" />
/// <reference path="./android.media.session.MediaController.d.ts" />
/// <reference path="./android.media.session.PlaybackState.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.ResultReceiver.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module media {
        export module session {
            export class MediaSession extends javalangObject {
                public static FLAG_HANDLES_MEDIA_BUTTONS: number;
                public static FLAG_HANDLES_TRANSPORT_CONTROLS: number;

                public setMetadata(param0: android.media.MediaMetadata): void;

                public getController(): android.media.session.MediaController;

                public release(): void;

                public setPlaybackState(param0: android.media.session.PlaybackState): void;

                public setPlaybackToLocal(param0: android.media.AudioAttributes): void;

                public setCallback(param0: android.media.session.MediaSession.Callback, param1: android.os.Handler): void;

                public setRatingType(param0: number): void;

                public setMediaButtonReceiver(param0: android.app.PendingIntent): void;

                public setActive(param0: boolean): void;

                public setFlags(param0: number): void;

                public setQueue(param0: javautilList): void;

                public setSessionActivity(param0: android.app.PendingIntent): void;

                public setCallback(param0: android.media.session.MediaSession.Callback): void;

                public setExtras(param0: android.os.Bundle): void;

                public sendSessionEvent(param0: string, param1: android.os.Bundle): void;

                public setQueueTitle(param0: string): void;

                public setPlaybackToRemote(param0: android.media.VolumeProvider): void;

                public isActive(): boolean;

                public getSessionToken(): android.media.session.MediaSession.Token;

                public constructor(param0: android.content.Context, param1: string);
            }
            export module MediaSession {
                export abstract class Callback extends javalangObject {
                    public onSkipToPrevious(): void;

                    public onCustomAction(param0: string, param1: android.os.Bundle): void;

                    public onPlayFromSearch(param0: string, param1: android.os.Bundle): void;

                    public onRewind(): void;

                    public onSkipToNext(): void;

                    public onSetRating(param0: android.media.Rating): void;

                    public onPlayFromMediaId(param0: string, param1: android.os.Bundle): void;

                    public constructor();

                    public onCommand(param0: string, param1: android.os.Bundle, param2: android.os.ResultReceiver): void;

                    public onPlay(): void;

                    public onPause(): void;

                    public onSeekTo(param0: number): void;

                    public onMediaButtonEvent(param0: android.content.Intent): boolean;

                    public onPlayFromUri(param0: android.net.Uri, param1: android.os.Bundle): void;

                    public onStop(): void;

                    public onFastForward(): void;

                    public onSkipToQueueItem(param0: number): void;
                }
                export class QueueItem extends javalangObject implements android.os.Parcelable {
                    public static CREATOR: android.os.Parcelable.Creator;
                    public static UNKNOWN_ID: number;

                    public getQueueId(): number;

                    public toString(): string;

                    public getDescription(): android.media.MediaDescription;

                    public describeContents(): number;

                    public constructor(param0: android.media.MediaDescription, param1: number);

                    public writeToParcel(param0: android.os.Parcel, param1: number): void;
                }
                export class Token extends javalangObject implements android.os.Parcelable {
                    public static CREATOR: android.os.Parcelable.Creator;

                    public equals(param0: javalangObject): boolean;

                    public describeContents(): number;

                    public hashCode(): number;

                    public writeToParcel(param0: android.os.Parcel, param1: number): void;
                }
            }
        }
    }
}

/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module media {
        export module session {
            export class MediaSessionManager extends javalangObject {
                public removeOnActiveSessionsChangedListener(param0: android.media.session.MediaSessionManager.OnActiveSessionsChangedListener): void;

                public addOnActiveSessionsChangedListener(param0: android.media.session.MediaSessionManager.OnActiveSessionsChangedListener, param1: android.content.ComponentName, param2: android.os.Handler): void;

                public getActiveSessions(param0: android.content.ComponentName): javautilList;

                public addOnActiveSessionsChangedListener(param0: android.media.session.MediaSessionManager.OnActiveSessionsChangedListener, param1: android.content.ComponentName): void;
            }
            export module MediaSessionManager {
                export class OnActiveSessionsChangedListener extends javalangObject {
                    /**
                     * Constructs a new instance of the android.media.session.MediaSessionManager$OnActiveSessionsChangedListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onActiveSessionsChanged(param0: javautilList): void;
                    });

                    public onActiveSessionsChanged(param0: javautilList): void;
                }
            }
        }
    }
}

/// <reference path="./android.media.session.PlaybackState.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module media {
        export module session {
            export class PlaybackState extends javalangObject implements android.os.Parcelable {
                public static ACTION_FAST_FORWARD: number;
                public static ACTION_PAUSE: number;
                public static ACTION_PLAY: number;
                public static ACTION_PLAY_FROM_MEDIA_ID: number;
                public static ACTION_PLAY_FROM_SEARCH: number;
                public static ACTION_PLAY_FROM_URI: number;
                public static ACTION_PLAY_PAUSE: number;
                public static ACTION_REWIND: number;
                public static ACTION_SEEK_TO: number;
                public static ACTION_SET_RATING: number;
                public static ACTION_SKIP_TO_NEXT: number;
                public static ACTION_SKIP_TO_PREVIOUS: number;
                public static ACTION_SKIP_TO_QUEUE_ITEM: number;
                public static ACTION_STOP: number;
                public static CREATOR: android.os.Parcelable.Creator;
                public static PLAYBACK_POSITION_UNKNOWN: number;
                public static STATE_BUFFERING: number;
                public static STATE_CONNECTING: number;
                public static STATE_ERROR: number;
                public static STATE_FAST_FORWARDING: number;
                public static STATE_NONE: number;
                public static STATE_PAUSED: number;
                public static STATE_PLAYING: number;
                public static STATE_REWINDING: number;
                public static STATE_SKIPPING_TO_NEXT: number;
                public static STATE_SKIPPING_TO_PREVIOUS: number;
                public static STATE_SKIPPING_TO_QUEUE_ITEM: number;
                public static STATE_STOPPED: number;

                public getPlaybackSpeed(): number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getPosition(): number;

                public toString(): string;

                public getErrorMessage(): string;

                public getCustomActions(): javautilList;

                public getState(): number;

                public describeContents(): number;

                public getActions(): number;

                public getBufferedPosition(): number;

                public getLastPositionUpdateTime(): number;

                public getExtras(): android.os.Bundle;

                public getActiveQueueItemId(): number;
            }
            export module PlaybackState {
                export class Builder extends javalangObject {
                    public addCustomAction(param0: string, param1: string, param2: number): android.media.session.PlaybackState.Builder;

                    public setExtras(param0: android.os.Bundle): android.media.session.PlaybackState.Builder;

                    public constructor(param0: android.media.session.PlaybackState);
                    public constructor();

                    public setActiveQueueItemId(param0: number): android.media.session.PlaybackState.Builder;

                    public addCustomAction(param0: android.media.session.PlaybackState.CustomAction): android.media.session.PlaybackState.Builder;

                    public setErrorMessage(param0: string): android.media.session.PlaybackState.Builder;

                    public build(): android.media.session.PlaybackState;

                    public setState(param0: number, param1: number, param2: number): android.media.session.PlaybackState.Builder;

                    public setActions(param0: number): android.media.session.PlaybackState.Builder;

                    public setState(param0: number, param1: number, param2: number, param3: number): android.media.session.PlaybackState.Builder;

                    public setBufferedPosition(param0: number): android.media.session.PlaybackState.Builder;
                }
                export class CustomAction extends javalangObject implements android.os.Parcelable {
                    public static CREATOR: android.os.Parcelable.Creator;

                    public getIcon(): number;

                    public toString(): string;

                    public getName(): string;

                    public describeContents(): number;

                    public getExtras(): android.os.Bundle;

                    public getAction(): string;

                    public writeToParcel(param0: android.os.Parcel, param1: number): void;
                }
                export module CustomAction {
                    export class Builder extends javalangObject {
                        public setExtras(param0: android.os.Bundle): android.media.session.PlaybackState.CustomAction.Builder;

                        public constructor(param0: string, param1: string, param2: number);

                        public build(): android.media.session.PlaybackState.CustomAction;
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module media {
        export module tv {
            export class TvContentRating extends javalangObject {
                public static UNRATED: android.media.tv.TvContentRating;

                public static createRating(param0: string, param1: string, param2: string, param3: native.Array<string>): android.media.tv.TvContentRating;

                public equals(param0: javalangObject): boolean;

                public getRatingSystem(): string;

                public getSubRatings(): javautilList;

                public hashCode(): number;

                public static unflattenFromString(param0: string): android.media.tv.TvContentRating;

                public getDomain(): string;

                public getMainRating(): string;

                public flattenToString(): string;
            }
        }
    }
}

/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module media {
        export module tv {
            export class TvContract extends javalangObject {
                public static AUTHORITY: string;

                public static buildProgramsUriForChannel(param0: android.net.Uri): android.net.Uri;

                public static buildInputId(param0: android.content.ComponentName): string;

                public static buildChannelLogoUri(param0: number): android.net.Uri;

                public static buildChannelsUriForInput(param0: string): android.net.Uri;

                public static buildChannelUri(param0: number): android.net.Uri;

                public static buildProgramsUriForChannel(param0: number): android.net.Uri;
                public static buildProgramsUriForChannel(param0: number, param1: number, param2: number): android.net.Uri;

                public static buildChannelLogoUri(param0: android.net.Uri): android.net.Uri;

                public static buildProgramUri(param0: number): android.net.Uri;

                public static buildProgramsUriForChannel(param0: android.net.Uri, param1: number, param2: number): android.net.Uri;

                public static buildChannelUriForPassthroughInput(param0: string): android.net.Uri;
            }
            export module TvContract {
                export class BaseTvColumns extends javalangObject implements android.provider.BaseColumns {
                    /**
                     * Constructs a new instance of the android.media.tv.TvContract$BaseTvColumns interface with the provided implementation.
                     */
                    public constructor(implementation: {});

                    public static _COUNT: string;
                    public static COLUMN_PACKAGE_NAME: string;
                    public static _ID: string;
                }
                export class Channels extends javalangObject implements android.media.tv.TvContract.BaseTvColumns {
                    public static COLUMN_APP_LINK_COLOR: string;
                    public static COLUMN_APP_LINK_ICON_URI: string;
                    public static COLUMN_APP_LINK_INTENT_URI: string;
                    public static COLUMN_APP_LINK_POSTER_ART_URI: string;
                    public static COLUMN_APP_LINK_TEXT: string;
                    public static COLUMN_DESCRIPTION: string;
                    public static COLUMN_DISPLAY_NAME: string;
                    public static COLUMN_DISPLAY_NUMBER: string;
                    public static COLUMN_INPUT_ID: string;
                    public static COLUMN_INTERNAL_PROVIDER_DATA: string;
                    public static COLUMN_INTERNAL_PROVIDER_FLAG1: string;
                    public static COLUMN_INTERNAL_PROVIDER_FLAG2: string;
                    public static COLUMN_INTERNAL_PROVIDER_FLAG3: string;
                    public static COLUMN_INTERNAL_PROVIDER_FLAG4: string;
                    public static COLUMN_NETWORK_AFFILIATION: string;
                    public static COLUMN_ORIGINAL_NETWORK_ID: string;
                    public static COLUMN_SEARCHABLE: string;
                    public static COLUMN_SERVICE_ID: string;
                    public static COLUMN_SERVICE_TYPE: string;
                    public static COLUMN_TRANSPORT_STREAM_ID: string;
                    public static COLUMN_TYPE: string;
                    public static COLUMN_VERSION_NUMBER: string;
                    public static COLUMN_VIDEO_FORMAT: string;
                    public static CONTENT_ITEM_TYPE: string;
                    public static CONTENT_TYPE: string;
                    public static CONTENT_URI: android.net.Uri;
                    public static SERVICE_TYPE_AUDIO: string;
                    public static SERVICE_TYPE_AUDIO_VIDEO: string;
                    public static SERVICE_TYPE_OTHER: string;
                    public static TYPE_1SEG: string;
                    public static TYPE_ATSC_C: string;
                    public static TYPE_ATSC_M_H: string;
                    public static TYPE_ATSC_T: string;
                    public static TYPE_CMMB: string;
                    public static TYPE_DTMB: string;
                    public static TYPE_DVB_C: string;
                    public static TYPE_DVB_C2: string;
                    public static TYPE_DVB_H: string;
                    public static TYPE_DVB_S: string;
                    public static TYPE_DVB_S2: string;
                    public static TYPE_DVB_SH: string;
                    public static TYPE_DVB_T: string;
                    public static TYPE_DVB_T2: string;
                    public static TYPE_ISDB_C: string;
                    public static TYPE_ISDB_S: string;
                    public static TYPE_ISDB_T: string;
                    public static TYPE_ISDB_TB: string;
                    public static TYPE_NTSC: string;
                    public static TYPE_OTHER: string;
                    public static TYPE_PAL: string;
                    public static TYPE_SECAM: string;
                    public static TYPE_S_DMB: string;
                    public static TYPE_T_DMB: string;
                    public static VIDEO_FORMAT_1080I: string;
                    public static VIDEO_FORMAT_1080P: string;
                    public static VIDEO_FORMAT_2160P: string;
                    public static VIDEO_FORMAT_240P: string;
                    public static VIDEO_FORMAT_360P: string;
                    public static VIDEO_FORMAT_4320P: string;
                    public static VIDEO_FORMAT_480I: string;
                    public static VIDEO_FORMAT_480P: string;
                    public static VIDEO_FORMAT_576I: string;
                    public static VIDEO_FORMAT_576P: string;
                    public static VIDEO_FORMAT_720P: string;
                    public static VIDEO_RESOLUTION_ED: string;
                    public static VIDEO_RESOLUTION_FHD: string;
                    public static VIDEO_RESOLUTION_HD: string;
                    public static VIDEO_RESOLUTION_SD: string;
                    public static VIDEO_RESOLUTION_UHD: string;

                    public static getVideoResolution(param0: string): string;
                }
                export module Channels {
                    export class Logo extends javalangObject {
                        public static CONTENT_DIRECTORY: string;
                    }
                }
                export class Programs extends javalangObject implements android.media.tv.TvContract.BaseTvColumns {
                    public static COLUMN_AUDIO_LANGUAGE: string;
                    public static COLUMN_BROADCAST_GENRE: string;
                    public static COLUMN_CANONICAL_GENRE: string;
                    public static COLUMN_CHANNEL_ID: string;
                    public static COLUMN_CONTENT_RATING: string;
                    public static COLUMN_END_TIME_UTC_MILLIS: string;
                    public static COLUMN_EPISODE_NUMBER: string;
                    public static COLUMN_EPISODE_TITLE: string;
                    public static COLUMN_INTERNAL_PROVIDER_DATA: string;
                    public static COLUMN_INTERNAL_PROVIDER_FLAG1: string;
                    public static COLUMN_INTERNAL_PROVIDER_FLAG2: string;
                    public static COLUMN_INTERNAL_PROVIDER_FLAG3: string;
                    public static COLUMN_INTERNAL_PROVIDER_FLAG4: string;
                    public static COLUMN_LONG_DESCRIPTION: string;
                    public static COLUMN_POSTER_ART_URI: string;
                    public static COLUMN_SEARCHABLE: string;
                    public static COLUMN_SEASON_NUMBER: string;
                    public static COLUMN_SHORT_DESCRIPTION: string;
                    public static COLUMN_START_TIME_UTC_MILLIS: string;
                    public static COLUMN_THUMBNAIL_URI: string;
                    public static COLUMN_TITLE: string;
                    public static COLUMN_VERSION_NUMBER: string;
                    public static COLUMN_VIDEO_HEIGHT: string;
                    public static COLUMN_VIDEO_WIDTH: string;
                    public static CONTENT_ITEM_TYPE: string;
                    public static CONTENT_TYPE: string;
                    public static CONTENT_URI: android.net.Uri;
                }
                export module Programs {
                    export class Genres extends javalangObject {
                        public static ANIMAL_WILDLIFE: string;
                        public static ARTS: string;
                        public static COMEDY: string;
                        public static DRAMA: string;
                        public static EDUCATION: string;
                        public static ENTERTAINMENT: string;
                        public static FAMILY_KIDS: string;
                        public static GAMING: string;
                        public static LIFE_STYLE: string;
                        public static MOVIES: string;
                        public static MUSIC: string;
                        public static NEWS: string;
                        public static PREMIER: string;
                        public static SHOPPING: string;
                        public static SPORTS: string;
                        public static TECH_SCIENCE: string;
                        public static TRAVEL: string;

                        public static encode(param0: native.Array<string>): string;

                        public static decode(param0: string): native.Array<string>;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.pm.ServiceInfo.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module media {
        export module tv {
            export class TvInputInfo extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public static EXTRA_INPUT_ID: string;
                public static TYPE_COMPONENT: number;
                public static TYPE_COMPOSITE: number;
                public static TYPE_DISPLAY_PORT: number;
                public static TYPE_DVI: number;
                public static TYPE_HDMI: number;
                public static TYPE_OTHER: number;
                public static TYPE_SCART: number;
                public static TYPE_SVIDEO: number;
                public static TYPE_TUNER: number;
                public static TYPE_VGA: number;

                public getId(): string;

                public getType(): number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getServiceInfo(): android.content.pm.ServiceInfo;

                public toString(): string;

                public loadLabel(param0: android.content.Context): string;

                public getParentId(): string;

                public loadIcon(param0: android.content.Context): android.graphics.drawable.Drawable;

                public createSetupIntent(): android.content.Intent;

                public createSettingsIntent(): android.content.Intent;

                public isPassthroughInput(): boolean;

                public equals(param0: javalangObject): boolean;

                public hashCode(): number;

                public describeContents(): number;
            }
        }
    }
}

/// <reference path="./android.media.tv.TvContentRating.d.ts" />
/// <reference path="./android.media.tv.TvInputInfo.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module media {
        export module tv {
            export class TvInputManager extends javalangObject {
                public static ACTION_BLOCKED_RATINGS_CHANGED: string;
                public static ACTION_PARENTAL_CONTROLS_ENABLED_CHANGED: string;
                public static ACTION_QUERY_CONTENT_RATING_SYSTEMS: string;
                public static INPUT_STATE_CONNECTED: number;
                public static INPUT_STATE_CONNECTED_STANDBY: number;
                public static INPUT_STATE_DISCONNECTED: number;
                public static META_DATA_CONTENT_RATING_SYSTEMS: string;
                public static TIME_SHIFT_INVALID_TIME: number;
                public static TIME_SHIFT_STATUS_AVAILABLE: number;
                public static TIME_SHIFT_STATUS_UNAVAILABLE: number;
                public static TIME_SHIFT_STATUS_UNKNOWN: number;
                public static TIME_SHIFT_STATUS_UNSUPPORTED: number;
                public static VIDEO_UNAVAILABLE_REASON_AUDIO_ONLY: number;
                public static VIDEO_UNAVAILABLE_REASON_BUFFERING: number;
                public static VIDEO_UNAVAILABLE_REASON_TUNING: number;
                public static VIDEO_UNAVAILABLE_REASON_UNKNOWN: number;
                public static VIDEO_UNAVAILABLE_REASON_WEAK_SIGNAL: number;

                public isRatingBlocked(param0: android.media.tv.TvContentRating): boolean;

                public getTvInputList(): javautilList;

                public unregisterCallback(param0: android.media.tv.TvInputManager.TvInputCallback): void;

                public isParentalControlsEnabled(): boolean;

                public getTvInputInfo(param0: string): android.media.tv.TvInputInfo;

                public getInputState(param0: string): number;

                public registerCallback(param0: android.media.tv.TvInputManager.TvInputCallback, param1: android.os.Handler): void;
            }
            export module TvInputManager {
                export abstract class TvInputCallback extends javalangObject {
                    public constructor();

                    public onInputAdded(param0: string): void;

                    public onInputRemoved(param0: string): void;

                    public onInputStateChanged(param0: string, param1: number): void;
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.media.PlaybackParams.d.ts" />
/// <reference path="./android.media.tv.TvContentRating.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module media {
        export module tv {
            export abstract class TvInputService extends android.app.Service {
                public static SERVICE_INTERFACE: string;
                public static SERVICE_META_DATA: string;

                public onBind(param0: android.content.Intent): android.os.IBinder;

                public constructor(param0: android.content.Context);

                public onTrimMemory(param0: number): void;

                public constructor();

                public onCreateSession(param0: string): android.media.tv.TvInputService.Session;
            }
            export module TvInputService {
                export abstract class HardwareSession extends android.media.tv.TvInputService.Session {
                    public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

                    public onHardwareVideoUnavailable(param0: number): void;

                    public onHardwareVideoAvailable(): void;

                    public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

                    public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

                    public constructor(param0: android.content.Context);

                    public getHardwareInputId(): string;

                    public onSetSurface(param0: android.view.Surface): boolean;

                    public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
                }
                export abstract class Session extends javalangObject implements android.view.KeyEvent.Callback {
                    public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

                    public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

                    public onSurfaceChanged(param0: number, param1: number, param2: number): void;

                    public notifyVideoAvailable(): void;

                    public onTimeShiftSeekTo(param0: number): void;

                    public onOverlayViewSizeChanged(param0: number, param1: number): void;

                    public notifyTrackSelected(param0: number, param1: string): void;

                    public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

                    public setOverlayViewEnabled(param0: boolean): void;

                    public onTrackballEvent(param0: android.view.MotionEvent): boolean;

                    public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

                    public notifyChannelRetuned(param0: android.net.Uri): void;

                    public notifyContentBlocked(param0: android.media.tv.TvContentRating): void;

                    public onSetCaptionEnabled(param0: boolean): void;

                    public onTouchEvent(param0: android.view.MotionEvent): boolean;

                    public notifyContentAllowed(): void;

                    public notifyTimeShiftStatusChanged(param0: number): void;

                    public onSetStreamVolume(param0: number): void;

                    public onSetSurface(param0: android.view.Surface): boolean;

                    public onTimeShiftGetStartPosition(): number;

                    public onTimeShiftResume(): void;

                    public onTimeShiftPause(): void;

                    public constructor(param0: android.content.Context);

                    public onTimeShiftSetPlaybackParams(param0: android.media.PlaybackParams): void;

                    public onTimeShiftGetCurrentPosition(): number;

                    public onCreateOverlayView(): android.view.View;

                    public onUnblockContent(param0: android.media.tv.TvContentRating): void;

                    public notifyTracksChanged(param0: javautilList): void;

                    public notifyVideoUnavailable(param0: number): void;

                    public onRelease(): void;

                    public onSelectTrack(param0: number, param1: string): boolean;

                    public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;

                    public layoutSurface(param0: number, param1: number, param2: number, param3: number): void;

                    public onTune(param0: android.net.Uri): boolean;
                }
            }
        }
    }
}

/// <reference path="./android.media.tv.TvTrackInfo.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module media {
        export module tv {
            export class TvTrackInfo extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public static TYPE_AUDIO: number;
                public static TYPE_SUBTITLE: number;
                public static TYPE_VIDEO: number;

                public getVideoHeight(): number;

                public getId(): string;

                public getType(): number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getDescription(): string;

                public getAudioSampleRate(): number;

                public getVideoPixelAspectRatio(): number;

                public getAudioChannelCount(): number;

                public getLanguage(): string;

                public getVideoWidth(): number;

                public getVideoFrameRate(): number;

                public describeContents(): number;

                public getExtra(): android.os.Bundle;
            }
            export module TvTrackInfo {
                export class Builder extends javalangObject {
                    public setLanguage(param0: string): android.media.tv.TvTrackInfo.Builder;

                    public setVideoPixelAspectRatio(param0: number): android.media.tv.TvTrackInfo.Builder;

                    public setDescription(param0: string): android.media.tv.TvTrackInfo.Builder;

                    public setExtra(param0: android.os.Bundle): android.media.tv.TvTrackInfo.Builder;

                    public setAudioSampleRate(param0: number): android.media.tv.TvTrackInfo.Builder;

                    public build(): android.media.tv.TvTrackInfo;

                    public constructor(param0: number, param1: string);

                    public setVideoHeight(param0: number): android.media.tv.TvTrackInfo.Builder;

                    public setVideoFrameRate(param0: number): android.media.tv.TvTrackInfo.Builder;

                    public setVideoWidth(param0: number): android.media.tv.TvTrackInfo.Builder;

                    public setAudioChannelCount(param0: number): android.media.tv.TvTrackInfo.Builder;
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.Region.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.media.PlaybackParams.d.ts" />
/// <reference path="./android.media.tv.TvContentRating.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.InputEvent.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module media {
        export module tv {
            export class TvView extends android.view.ViewGroup {
                public requestDisallowInterceptTouchEvent(param0: boolean): void;

                public focusSearch(param0: number): android.view.View;

                public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
                public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

                public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

                public setCaptionEnabled(param0: boolean): void;

                public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

                public isLayoutRequested(): boolean;

                public sendAccessibilityEvent(param0: number): void;

                public dispatchWindowFocusChanged(param0: boolean): void;

                public requestFitSystemWindows(): void;

                public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

                public getTextDirection(): number;

                public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

                public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

                public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

                public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

                public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

                public getParent(): android.view.ViewParent;

                public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;

                public getTextAlignment(): number;

                public addView(param0: android.view.View, param1: number): void;

                public onUnhandledInputEvent(param0: android.view.InputEvent): boolean;

                public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;

                public gatherTransparentRegion(param0: android.graphics.Region): boolean;

                public focusSearch(param0: android.view.View, param1: number): android.view.View;

                public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

                public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

                public setCallback(param0: android.media.tv.TvView.TvInputCallback): void;

                public requestTransparentRegion(param0: android.view.View): void;

                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

                public createContextMenu(param0: android.view.ContextMenu): void;

                public removeView(param0: android.view.View): void;

                public isTextDirectionResolved(): boolean;

                public getSelectedTrack(param0: number): string;

                public focusableViewAvailable(param0: android.view.View): void;

                public constructor(param0: android.content.Context);

                public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;

                public onDetachedFromWindow(): void;

                public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;

                public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

                public timeShiftSeekTo(param0: number): void;

                public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;

                public isLayoutDirectionResolved(): boolean;

                public isTextAlignmentResolved(): boolean;

                public getLayoutDirection(): number;

                public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

                public dispatchUnhandledInputEvent(param0: android.view.InputEvent): boolean;

                public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

                public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

                public getTracks(param0: number): javautilList;

                public setOnUnhandledInputEventListener(param0: android.media.tv.TvView.OnUnhandledInputEventListener): void;

                public canResolveTextDirection(): boolean;

                public showContextMenuForChild(param0: android.view.View): boolean;

                public canResolveTextAlignment(): boolean;

                public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

                public dispatchDraw(param0: android.graphics.Canvas): void;

                public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

                public reset(): void;

                public setStreamVolume(param0: number): void;

                public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

                public requestLayout(): void;

                public childDrawableStateChanged(param0: android.view.View): void;

                public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

                public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

                public selectTrack(param0: number, param1: string): void;

                public onVisibilityChanged(param0: android.view.View, param1: number): void;

                public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

                public getParentForAccessibility(): android.view.ViewParent;

                public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

                public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

                public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;

                public onStopNestedScroll(param0: android.view.View): void;

                public timeShiftResume(): void;

                public draw(param0: android.graphics.Canvas): void;

                public bringChildToFront(param0: android.view.View): void;

                public timeShiftSetPlaybackParams(param0: android.media.PlaybackParams): void;

                public tune(param0: string, param1: android.net.Uri): void;

                public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

                public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

                public canResolveLayoutDirection(): boolean;

                public addView(param0: android.view.View): void;

                public setTimeShiftPositionCallback(param0: android.media.tv.TvView.TimeShiftPositionCallback): void;

                public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

                public addView(param0: android.view.View, param1: number, param2: number): void;

                public onMeasure(param0: number, param1: number): void;

                public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

                public recomputeViewAttributes(param0: android.view.View): void;

                public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

                public onAttachedToWindow(): void;

                public timeShiftPause(): void;

                public clearChildFocus(param0: android.view.View): void;
            }
            export module TvView {
                export class OnUnhandledInputEventListener extends javalangObject {
                    /**
                     * Constructs a new instance of the android.media.tv.TvView$OnUnhandledInputEventListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onUnhandledInputEvent(param0: android.view.InputEvent): boolean;
                    });

                    public onUnhandledInputEvent(param0: android.view.InputEvent): boolean;
                }
                export abstract class TimeShiftPositionCallback extends javalangObject {
                    public constructor();

                    public onTimeShiftCurrentPositionChanged(param0: string, param1: number): void;

                    public onTimeShiftStartPositionChanged(param0: string, param1: number): void;
                }
                export abstract class TvInputCallback extends javalangObject {
                    public onConnectionFailed(param0: string): void;

                    public onDisconnected(param0: string): void;

                    public onVideoUnavailable(param0: string, param1: number): void;

                    public onChannelRetuned(param0: string, param1: android.net.Uri): void;

                    public onVideoAvailable(param0: string): void;

                    public constructor();

                    public onContentAllowed(param0: string): void;

                    public onContentBlocked(param0: string, param1: android.media.tv.TvContentRating): void;

                    public onTimeShiftStatusChanged(param0: string, param1: number): void;

                    public onVideoSizeChanged(param0: string, param1: number, param2: number): void;

                    public onTracksChanged(param0: string, param1: javautilList): void;

                    public onTrackSelected(param0: string, param1: number, param2: string): void;
                }
            }
        }
    }
}
