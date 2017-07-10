
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.telecom.Call.d.ts" />
/// <reference path="./android.telecom.DisconnectCause.d.ts" />
/// <reference path="./android.telecom.GatewayInfo.d.ts" />
/// <reference path="./android.telecom.PhoneAccountHandle.d.ts" />
/// <reference path="./android.telecom.StatusHints.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module telecom {
        export class Call extends javalangObject {
            public static AVAILABLE_PHONE_ACCOUNTS: string;
            public static STATE_ACTIVE: number;
            public static STATE_CONNECTING: number;
            public static STATE_DIALING: number;
            public static STATE_DISCONNECTED: number;
            public static STATE_DISCONNECTING: number;
            public static STATE_HOLDING: number;
            public static STATE_NEW: number;
            public static STATE_RINGING: number;
            public static STATE_SELECT_PHONE_ACCOUNT: number;

            public unhold(): void;

            public answer(param0: number): void;

            public phoneAccountSelected(param0: android.telecom.PhoneAccountHandle, param1: boolean): void;

            public getConferenceableCalls(): javautilList;

            public getDetails(): android.telecom.Call.Details;

            public swapConference(): void;

            public conference(param0: android.telecom.Call): void;

            public registerCallback(param0: android.telecom.Call.Callback, param1: android.os.Handler): void;

            public splitFromConference(): void;

            public getChildren(): javautilList;

            public playDtmfTone(param0: string): void;

            public getParent(): android.telecom.Call;

            public getCannedTextResponses(): javautilList;

            public getVideoCall(): android.telecom.InCallService.VideoCall;

            public registerCallback(param0: android.telecom.Call.Callback): void;

            public postDialContinue(param0: boolean): void;

            public reject(param0: boolean, param1: string): void;

            public mergeConference(): void;

            public hold(): void;

            public stopDtmfTone(): void;

            public getState(): number;

            public getRemainingPostDialSequence(): string;

            public disconnect(): void;

            public unregisterCallback(param0: android.telecom.Call.Callback): void;
        }
        export module Call {
            export abstract class Callback extends javalangObject {
                public onParentChanged(param0: android.telecom.Call, param1: android.telecom.Call): void;

                public onChildrenChanged(param0: android.telecom.Call, param1: javautilList): void;

                public onVideoCallChanged(param0: android.telecom.Call, param1: android.telecom.InCallService.VideoCall): void;

                public onPostDialWait(param0: android.telecom.Call, param1: string): void;

                public onStateChanged(param0: android.telecom.Call, param1: number): void;

                public onConferenceableCallsChanged(param0: android.telecom.Call, param1: javautilList): void;

                public onCallDestroyed(param0: android.telecom.Call): void;

                public onDetailsChanged(param0: android.telecom.Call, param1: android.telecom.Call.Details): void;

                public constructor();

                public onCannedTextResponsesLoaded(param0: android.telecom.Call, param1: javautilList): void;
            }
            export class Details extends javalangObject {
                public static CAPABILITY_CAN_PAUSE_VIDEO: number;
                public static CAPABILITY_DISCONNECT_FROM_CONFERENCE: number;
                public static CAPABILITY_HOLD: number;
                public static CAPABILITY_MANAGE_CONFERENCE: number;
                public static CAPABILITY_MERGE_CONFERENCE: number;
                public static CAPABILITY_MUTE: number;
                public static CAPABILITY_RESPOND_VIA_TEXT: number;
                public static CAPABILITY_SEPARATE_FROM_CONFERENCE: number;
                public static CAPABILITY_SUPPORTS_VT_LOCAL_BIDIRECTIONAL: number;
                public static CAPABILITY_SUPPORTS_VT_LOCAL_RX: number;
                public static CAPABILITY_SUPPORTS_VT_LOCAL_TX: number;
                public static CAPABILITY_SUPPORTS_VT_REMOTE_BIDIRECTIONAL: number;
                public static CAPABILITY_SUPPORTS_VT_REMOTE_RX: number;
                public static CAPABILITY_SUPPORTS_VT_REMOTE_TX: number;
                public static CAPABILITY_SUPPORT_HOLD: number;
                public static CAPABILITY_SWAP_CONFERENCE: number;
                public static PROPERTY_CONFERENCE: number;
                public static PROPERTY_EMERGENCY_CALLBACK_MODE: number;
                public static PROPERTY_GENERIC_CONFERENCE: number;
                public static PROPERTY_HIGH_DEF_AUDIO: number;
                public static PROPERTY_WIFI: number;

                public getCallCapabilities(): number;

                public getHandle(): android.net.Uri;

                public getCallerDisplayNamePresentation(): number;

                public can(param0: number): boolean;

                public getCallerDisplayName(): string;

                public getConnectTimeMillis(): number;

                public static propertiesToString(param0: number): string;

                public static hasProperty(param0: number, param1: number): boolean;

                public getStatusHints(): android.telecom.StatusHints;

                public static capabilitiesToString(param0: number): string;

                public hasProperty(param0: number): boolean;

                public getHandlePresentation(): number;

                public getIntentExtras(): android.os.Bundle;

                public equals(param0: javalangObject): boolean;

                public getCallProperties(): number;

                public hashCode(): number;

                public getVideoState(): number;

                public getExtras(): android.os.Bundle;

                public getGatewayInfo(): android.telecom.GatewayInfo;

                public static can(param0: number, param1: number): boolean;

                public getAccountHandle(): android.telecom.PhoneAccountHandle;

                public getDisconnectCause(): android.telecom.DisconnectCause;
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module telecom {
        export class CallAudioState extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static ROUTE_BLUETOOTH: number;
            public static ROUTE_EARPIECE: number;
            public static ROUTE_SPEAKER: number;
            public static ROUTE_WIRED_HEADSET: number;
            public static ROUTE_WIRED_OR_EARPIECE: number;

            public toString(): string;

            public isMuted(): boolean;

            public equals(param0: javalangObject): boolean;

            public getSupportedRouteMask(): number;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public static audioRouteToString(param0: number): string;

            public constructor(param0: boolean, param1: number, param2: number);

            public getRoute(): number;
        }
    }
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.telecom.CallAudioState.d.ts" />
/// <reference path="./android.telecom.Connection.d.ts" />
/// <reference path="./android.telecom.DisconnectCause.d.ts" />
/// <reference path="./android.telecom.PhoneAccountHandle.d.ts" />
/// <reference path="./android.telecom.StatusHints.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module telecom {
        export abstract class Conference extends android.telecom.Conferenceable {
            public static CONNECT_TIME_NOT_SPECIFIED: number;

            public getConnections(): javautilList;

            public onSwap(): void;

            public onSeparate(param0: android.telecom.Connection): void;

            public setActive(): void;

            public onMerge(param0: android.telecom.Connection): void;

            public getConferenceableConnections(): javautilList;

            public onDisconnect(): void;

            public setOnHold(): void;

            public setDialing(): void;

            public setConnectionTime(param0: number): void;

            public setConferenceableConnections(param0: javautilList): void;

            public getPhoneAccountHandle(): android.telecom.PhoneAccountHandle;

            public onConnectionAdded(param0: android.telecom.Connection): void;

            public setDisconnected(param0: android.telecom.DisconnectCause): void;

            public setExtras(param0: android.os.Bundle): void;

            public getCallAudioState(): android.telecom.CallAudioState;

            public setVideoProvider(param0: android.telecom.Connection, param1: android.telecom.Connection.VideoProvider): void;

            public setVideoState(param0: android.telecom.Connection, param1: number): void;

            public constructor(param0: android.telecom.PhoneAccountHandle);

            public getDisconnectCause(): android.telecom.DisconnectCause;

            public getState(): number;

            public removeConnection(param0: android.telecom.Connection): void;

            public onHold(): void;

            public onStopDtmfTone(): void;

            public onMerge(): void;

            public destroy(): void;

            public setConnectionCapabilities(param0: number): void;

            public addConnection(param0: android.telecom.Connection): boolean;

            public getStatusHints(): android.telecom.StatusHints;

            public toString(): string;

            public onPlayDtmfTone(param0: string): void;

            public setStatusHints(param0: android.telecom.StatusHints): void;

            public getConnectionTime(): number;

            public getVideoProvider(): android.telecom.Connection.VideoProvider;

            public getConnectionCapabilities(): number;

            public onCallAudioStateChanged(param0: android.telecom.CallAudioState): void;

            public getVideoState(): number;

            public onUnhold(): void;

            public getExtras(): android.os.Bundle;
        }
    }
}

declare module android {
    export module telecom {
        export abstract class Conferenceable extends javalangObject {
        }
    }
}

/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.telecom.CallAudioState.d.ts" />
/// <reference path="./android.telecom.Conference.d.ts" />
/// <reference path="./android.telecom.DisconnectCause.d.ts" />
/// <reference path="./android.telecom.StatusHints.d.ts" />
/// <reference path="./android.telecom.VideoProfile.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module telecom {
        export abstract class Connection extends android.telecom.Conferenceable {
            public static CAPABILITY_CAN_PAUSE_VIDEO: number;
            public static CAPABILITY_CAN_UPGRADE_TO_VIDEO: number;
            public static CAPABILITY_DISCONNECT_FROM_CONFERENCE: number;
            public static CAPABILITY_HOLD: number;
            public static CAPABILITY_MANAGE_CONFERENCE: number;
            public static CAPABILITY_MERGE_CONFERENCE: number;
            public static CAPABILITY_MUTE: number;
            public static CAPABILITY_RESPOND_VIA_TEXT: number;
            public static CAPABILITY_SEPARATE_FROM_CONFERENCE: number;
            public static CAPABILITY_SUPPORTS_VT_LOCAL_BIDIRECTIONAL: number;
            public static CAPABILITY_SUPPORTS_VT_LOCAL_RX: number;
            public static CAPABILITY_SUPPORTS_VT_LOCAL_TX: number;
            public static CAPABILITY_SUPPORTS_VT_REMOTE_BIDIRECTIONAL: number;
            public static CAPABILITY_SUPPORTS_VT_REMOTE_RX: number;
            public static CAPABILITY_SUPPORTS_VT_REMOTE_TX: number;
            public static CAPABILITY_SUPPORT_HOLD: number;
            public static CAPABILITY_SWAP_CONFERENCE: number;
            public static EXTRA_CALL_SUBJECT: string;
            public static EXTRA_CHILD_ADDRESS: string;
            public static EXTRA_LAST_FORWARDED_NUMBER: string;
            public static STATE_ACTIVE: number;
            public static STATE_DIALING: number;
            public static STATE_DISCONNECTED: number;
            public static STATE_HOLDING: number;
            public static STATE_INITIALIZING: number;
            public static STATE_NEW: number;
            public static STATE_RINGING: number;

            public onAnswer(): void;

            public static createCanceledConnection(): android.telecom.Connection;

            public setOnHold(): void;

            public onDisconnect(): void;

            public setDialing(): void;

            public onAbort(): void;

            public setConferenceableConnections(param0: javautilList): void;

            public onPostDialContinue(param0: boolean): void;

            public setDisconnected(param0: android.telecom.DisconnectCause): void;

            public setExtras(param0: android.os.Bundle): void;

            public setInitialized(): void;

            public setConferenceables(param0: javautilList): void;

            public onAnswer(param0: number): void;

            public getDisconnectCause(): android.telecom.DisconnectCause;

            public getState(): number;

            public onStateChanged(param0: number): void;

            public onHold(): void;

            public setAddress(param0: android.net.Uri, param1: number): void;

            public constructor();

            public onSeparate(): void;

            public getStatusHints(): android.telecom.StatusHints;

            public getConferenceables(): javautilList;

            public getConference(): android.telecom.Conference;

            public getVideoProvider(): android.telecom.Connection.VideoProvider;

            public static createFailedConnection(param0: android.telecom.DisconnectCause): android.telecom.Connection;

            public getCallerDisplayName(): string;

            public getExtras(): android.os.Bundle;

            public onUnhold(): void;

            public setRinging(): void;

            public static capabilitiesToString(param0: number): string;

            public getAddress(): android.net.Uri;

            public setVideoState(param0: number): void;

            public setActive(): void;

            public setAudioModeIsVoip(param0: boolean): void;

            public setVideoProvider(param0: android.telecom.Connection.VideoProvider): void;

            public getCallAudioState(): android.telecom.CallAudioState;

            public setCallerDisplayName(param0: string, param1: number): void;

            public static stateToString(param0: number): string;

            public getAddressPresentation(): number;

            public onReject(): void;

            public getCallerDisplayNamePresentation(): number;

            public onStopDtmfTone(): void;

            public destroy(): void;

            public setNextPostDialChar(param0: string): void;

            public setInitializing(): void;

            public setConnectionCapabilities(param0: number): void;

            public getAudioModeIsVoip(): boolean;

            public setStatusHints(param0: android.telecom.StatusHints): void;

            public onPlayDtmfTone(param0: string): void;

            public isRingbackRequested(): boolean;

            public getConnectionCapabilities(): number;

            public setPostDialWait(param0: string): void;

            public onCallAudioStateChanged(param0: android.telecom.CallAudioState): void;

            public setRingbackRequested(param0: boolean): void;
        }
        export module Connection {
            export abstract class VideoProvider extends javalangObject {
                public static SESSION_EVENT_CAMERA_FAILURE: number;
                public static SESSION_EVENT_CAMERA_READY: number;
                public static SESSION_EVENT_RX_PAUSE: number;
                public static SESSION_EVENT_RX_RESUME: number;
                public static SESSION_EVENT_TX_START: number;
                public static SESSION_EVENT_TX_STOP: number;
                public static SESSION_MODIFY_REQUEST_FAIL: number;
                public static SESSION_MODIFY_REQUEST_INVALID: number;
                public static SESSION_MODIFY_REQUEST_REJECTED_BY_REMOTE: number;
                public static SESSION_MODIFY_REQUEST_SUCCESS: number;
                public static SESSION_MODIFY_REQUEST_TIMED_OUT: number;

                public onSetDisplaySurface(param0: android.view.Surface): void;

                public handleCallSessionEvent(param0: number): void;

                public onSendSessionModifyRequest(param0: android.telecom.VideoProfile, param1: android.telecom.VideoProfile): void;

                public changeCameraCapabilities(param0: android.telecom.VideoProfile.CameraCapabilities): void;

                public onSetPreviewSurface(param0: android.view.Surface): void;

                public onSetPauseImage(param0: android.net.Uri): void;

                public onSetCamera(param0: string): void;

                public onRequestConnectionDataUsage(): void;

                public constructor();

                public changePeerDimensions(param0: number, param1: number): void;

                public setCallDataUsage(param0: number): void;

                public onSetDeviceOrientation(param0: number): void;

                public onRequestCameraCapabilities(): void;

                public receiveSessionModifyRequest(param0: android.telecom.VideoProfile): void;

                public onSetZoom(param0: number): void;

                public changeVideoQuality(param0: number): void;

                public onSendSessionModifyResponse(param0: android.telecom.VideoProfile): void;

                public receiveSessionModifyResponse(param0: number, param1: android.telecom.VideoProfile, param2: android.telecom.VideoProfile): void;
            }
        }
    }
}

/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.telecom.PhoneAccountHandle.d.ts" />
declare module android {
    export module telecom {
        export class ConnectionRequest extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public toString(): string;

            public getAddress(): android.net.Uri;

            public describeContents(): number;

            public getAccountHandle(): android.telecom.PhoneAccountHandle;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public constructor(param0: android.telecom.PhoneAccountHandle, param1: android.net.Uri, param2: android.os.Bundle);
            public constructor(param0: android.telecom.PhoneAccountHandle, param1: android.net.Uri, param2: android.os.Bundle, param3: number);

            public getVideoState(): number;

            public getExtras(): android.os.Bundle;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.telecom.Conference.d.ts" />
/// <reference path="./android.telecom.Connection.d.ts" />
/// <reference path="./android.telecom.ConnectionRequest.d.ts" />
/// <reference path="./android.telecom.PhoneAccountHandle.d.ts" />
/// <reference path="./android.telecom.RemoteConference.d.ts" />
/// <reference path="./android.telecom.RemoteConnection.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
declare module android {
    export module telecom {
        export abstract class ConnectionService extends android.app.Service {
            public static SERVICE_INTERFACE: string;

            public onUnbind(param0: android.content.Intent): boolean;

            public getAllConnections(): javautilCollection;

            public onBind(param0: android.content.Intent): android.os.IBinder;

            public conferenceRemoteConnections(param0: android.telecom.RemoteConnection, param1: android.telecom.RemoteConnection): void;

            public onCreateIncomingConnection(param0: android.telecom.PhoneAccountHandle, param1: android.telecom.ConnectionRequest): android.telecom.Connection;

            public addExistingConnection(param0: android.telecom.PhoneAccountHandle, param1: android.telecom.Connection): void;

            public addConference(param0: android.telecom.Conference): void;

            public constructor();

            public onRemoteExistingConnectionAdded(param0: android.telecom.RemoteConnection): void;

            public onConference(param0: android.telecom.Connection, param1: android.telecom.Connection): void;

            public createRemoteIncomingConnection(param0: android.telecom.PhoneAccountHandle, param1: android.telecom.ConnectionRequest): android.telecom.RemoteConnection;

            public onTrimMemory(param0: number): void;

            public constructor(param0: android.content.Context);

            public onCreateOutgoingConnection(param0: android.telecom.PhoneAccountHandle, param1: android.telecom.ConnectionRequest): android.telecom.Connection;

            public createRemoteOutgoingConnection(param0: android.telecom.PhoneAccountHandle, param1: android.telecom.ConnectionRequest): android.telecom.RemoteConnection;

            public onRemoteConferenceAdded(param0: android.telecom.RemoteConference): void;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module telecom {
        export class DisconnectCause extends javalangObject implements android.os.Parcelable {
            public static BUSY: number;
            public static CANCELED: number;
            public static CONNECTION_MANAGER_NOT_SUPPORTED: number;
            public static CREATOR: android.os.Parcelable.Creator;
            public static ERROR: number;
            public static LOCAL: number;
            public static MISSED: number;
            public static OTHER: number;
            public static REJECTED: number;
            public static REMOTE: number;
            public static RESTRICTED: number;
            public static UNKNOWN: number;

            public getLabel(): string;

            public constructor(param0: number, param1: string, param2: string, param3: string);

            public equals(param0: javalangObject): boolean;

            public constructor(param0: number);
            public constructor(param0: number, param1: string);

            public getTone(): number;

            public constructor(param0: number, param1: string, param2: string, param3: string, param4: number);

            public getReason(): string;

            public toString(): string;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getDescription(): string;

            public getCode(): number;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module telecom {
        export class GatewayInfo extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public getGatewayAddress(): android.net.Uri;

            public isEmpty(): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public constructor(param0: string, param1: android.net.Uri, param2: android.net.Uri);

            public getOriginalAddress(): android.net.Uri;

            public getGatewayProviderPackageName(): string;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.telecom.Call.d.ts" />
/// <reference path="./android.telecom.CallAudioState.d.ts" />
/// <reference path="./android.telecom.VideoProfile.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module telecom {
        export abstract class InCallService extends android.app.Service {
            public static SERVICE_INTERFACE: string;

            public onUnbind(param0: android.content.Intent): boolean;

            public onCallAdded(param0: android.telecom.Call): void;

            public onCanAddCallChanged(param0: boolean): void;

            public onBind(param0: android.content.Intent): android.os.IBinder;

            public constructor();

            public setAudioRoute(param0: number): void;

            public onCallRemoved(param0: android.telecom.Call): void;

            public onTrimMemory(param0: number): void;

            public onBringToForeground(param0: boolean): void;

            public canAddCall(): boolean;

            public constructor(param0: android.content.Context);

            public getCallAudioState(): android.telecom.CallAudioState;

            public onCallAudioStateChanged(param0: android.telecom.CallAudioState): void;

            public getCalls(): javautilList;

            public setMuted(param0: boolean): void;
        }
        export module InCallService {
            export abstract class VideoCall extends javalangObject {
                public setPreviewSurface(param0: android.view.Surface): void;

                public sendSessionModifyResponse(param0: android.telecom.VideoProfile): void;

                public setZoom(param0: number): void;

                public setDisplaySurface(param0: android.view.Surface): void;

                public constructor();

                public sendSessionModifyRequest(param0: android.telecom.VideoProfile): void;

                public setDeviceOrientation(param0: number): void;

                public requestCallDataUsage(): void;

                public unregisterCallback(param0: android.telecom.InCallService.VideoCall.Callback): void;

                public setPauseImage(param0: android.net.Uri): void;

                public registerCallback(param0: android.telecom.InCallService.VideoCall.Callback): void;

                public setCamera(param0: string): void;

                public requestCameraCapabilities(): void;

                public registerCallback(param0: android.telecom.InCallService.VideoCall.Callback, param1: android.os.Handler): void;
            }
            export module VideoCall {
                export abstract class Callback extends javalangObject {
                    public onSessionModifyResponseReceived(param0: number, param1: android.telecom.VideoProfile, param2: android.telecom.VideoProfile): void;

                    public onPeerDimensionsChanged(param0: number, param1: number): void;

                    public onCallDataUsageChanged(param0: number): void;

                    public onSessionModifyRequestReceived(param0: android.telecom.VideoProfile): void;

                    public constructor();

                    public onCameraCapabilitiesChanged(param0: android.telecom.VideoProfile.CameraCapabilities): void;

                    public onVideoQualityChanged(param0: number): void;

                    public onCallSessionEvent(param0: number): void;
                }
            }
        }
    }
}

/// <reference path="./android.graphics.drawable.Icon.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.telecom.PhoneAccount.d.ts" />
/// <reference path="./android.telecom.PhoneAccountHandle.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module telecom {
        export class PhoneAccount extends javalangObject implements android.os.Parcelable {
            public static CAPABILITY_CALL_PROVIDER: number;
            public static CAPABILITY_CALL_SUBJECT: number;
            public static CAPABILITY_CONNECTION_MANAGER: number;
            public static CAPABILITY_PLACE_EMERGENCY_CALLS: number;
            public static CAPABILITY_SIM_SUBSCRIPTION: number;
            public static CAPABILITY_VIDEO_CALLING: number;
            public static CREATOR: android.os.Parcelable.Creator;
            public static NO_HIGHLIGHT_COLOR: number;
            public static NO_RESOURCE_ID: number;
            public static SCHEME_SIP: string;
            public static SCHEME_TEL: string;
            public static SCHEME_VOICEMAIL: string;

            public getLabel(): string;

            public getShortDescription(): string;

            public getAddress(): android.net.Uri;

            public getCapabilities(): number;

            public toBuilder(): android.telecom.PhoneAccount.Builder;

            public getSubscriptionAddress(): android.net.Uri;

            public getSupportedUriSchemes(): javautilList;

            public getIcon(): android.graphics.drawable.Icon;

            public getHighlightColor(): number;

            public isEnabled(): boolean;

            public toString(): string;

            public supportsUriScheme(param0: string): boolean;

            public describeContents(): number;

            public static builder(param0: android.telecom.PhoneAccountHandle, param1: string): android.telecom.PhoneAccount.Builder;

            public getAccountHandle(): android.telecom.PhoneAccountHandle;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public hasCapabilities(param0: number): boolean;
        }
        export module PhoneAccount {
            export class Builder extends javalangObject {
                public setSubscriptionAddress(param0: android.net.Uri): android.telecom.PhoneAccount.Builder;

                public setIcon(param0: android.graphics.drawable.Icon): android.telecom.PhoneAccount.Builder;

                public build(): android.telecom.PhoneAccount;

                public addSupportedUriScheme(param0: string): android.telecom.PhoneAccount.Builder;

                public setShortDescription(param0: string): android.telecom.PhoneAccount.Builder;

                public setAddress(param0: android.net.Uri): android.telecom.PhoneAccount.Builder;

                public setHighlightColor(param0: number): android.telecom.PhoneAccount.Builder;

                public setCapabilities(param0: number): android.telecom.PhoneAccount.Builder;

                public setSupportedUriSchemes(param0: javautilList): android.telecom.PhoneAccount.Builder;

                public constructor(param0: android.telecom.PhoneAccountHandle, param1: string);
                public constructor(param0: android.telecom.PhoneAccount);
            }
        }
    }
}

/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.UserHandle.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module telecom {
        export class PhoneAccountHandle extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public getId(): string;

            public toString(): string;

            public getComponentName(): android.content.ComponentName;

            public equals(param0: javalangObject): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public constructor(param0: android.content.ComponentName, param1: string);
            public constructor(param0: android.content.ComponentName, param1: string, param2: android.os.UserHandle);

            public getUserHandle(): android.os.UserHandle;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.telecom.CallAudioState.d.ts" />
/// <reference path="./android.telecom.DisconnectCause.d.ts" />
/// <reference path="./android.telecom.RemoteConference.d.ts" />
/// <reference path="./android.telecom.RemoteConnection.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module telecom {
        export class RemoteConference extends javalangObject {
            public getConnections(): javautilList;

            public unhold(): void;

            public registerCallback(param0: android.telecom.RemoteConference.Callback, param1: android.os.Handler): void;

            public setCallAudioState(param0: android.telecom.CallAudioState): void;

            public separate(param0: android.telecom.RemoteConnection): void;

            public swap(): void;

            public registerCallback(param0: android.telecom.RemoteConference.Callback): void;

            public unregisterCallback(param0: android.telecom.RemoteConference.Callback): void;

            public playDtmfTone(param0: string): void;

            public getConferenceableConnections(): javautilList;

            public merge(): void;

            public getConnectionCapabilities(): number;

            public getDisconnectCause(): android.telecom.DisconnectCause;

            public hold(): void;

            public stopDtmfTone(): void;

            public getState(): number;

            public getExtras(): android.os.Bundle;

            public disconnect(): void;
        }
        export module RemoteConference {
            export abstract class Callback extends javalangObject {
                public onConnectionRemoved(param0: android.telecom.RemoteConference, param1: android.telecom.RemoteConnection): void;

                public onConnectionCapabilitiesChanged(param0: android.telecom.RemoteConference, param1: number): void;

                public onConnectionAdded(param0: android.telecom.RemoteConference, param1: android.telecom.RemoteConnection): void;

                public onDisconnected(param0: android.telecom.RemoteConference, param1: android.telecom.DisconnectCause): void;

                public onDestroyed(param0: android.telecom.RemoteConference): void;

                public onExtrasChanged(param0: android.telecom.RemoteConference, param1: android.os.Bundle): void;

                public onStateChanged(param0: android.telecom.RemoteConference, param1: number, param2: number): void;

                public onConferenceableConnectionsChanged(param0: android.telecom.RemoteConference, param1: javautilList): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.telecom.CallAudioState.d.ts" />
/// <reference path="./android.telecom.DisconnectCause.d.ts" />
/// <reference path="./android.telecom.RemoteConference.d.ts" />
/// <reference path="./android.telecom.RemoteConnection.d.ts" />
/// <reference path="./android.telecom.StatusHints.d.ts" />
/// <reference path="./android.telecom.VideoProfile.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module telecom {
        export class RemoteConnection extends javalangObject {
            public unhold(): void;

            public setCallAudioState(param0: android.telecom.CallAudioState): void;

            public isVoipAudioMode(): boolean;

            public getAddress(): android.net.Uri;

            public abort(): void;

            public registerCallback(param0: android.telecom.RemoteConnection.Callback): void;

            public getConferenceableConnections(): javautilList;

            public getConference(): android.telecom.RemoteConference;

            public unregisterCallback(param0: android.telecom.RemoteConnection.Callback): void;

            public postDialContinue(param0: boolean): void;

            public getDisconnectCause(): android.telecom.DisconnectCause;

            public getAddressPresentation(): number;

            public answer(): void;

            public getState(): number;

            public registerCallback(param0: android.telecom.RemoteConnection.Callback, param1: android.os.Handler): void;

            public getCallerDisplayNamePresentation(): number;

            public getVideoProvider(): android.telecom.RemoteConnection.VideoProvider;

            public playDtmfTone(param0: string): void;

            public reject(): void;

            public getStatusHints(): android.telecom.StatusHints;

            public getConnectionCapabilities(): number;

            public isRingbackRequested(): boolean;

            public getVideoState(): number;

            public hold(): void;

            public stopDtmfTone(): void;

            public getCallerDisplayName(): string;

            public getExtras(): android.os.Bundle;

            public disconnect(): void;
        }
        export module RemoteConnection {
            export abstract class Callback extends javalangObject {
                public onStatusHintsChanged(param0: android.telecom.RemoteConnection, param1: android.telecom.StatusHints): void;

                public onExtrasChanged(param0: android.telecom.RemoteConnection, param1: android.os.Bundle): void;

                public onRingbackRequested(param0: android.telecom.RemoteConnection, param1: boolean): void;

                public onAddressChanged(param0: android.telecom.RemoteConnection, param1: android.net.Uri, param2: number): void;

                public onStateChanged(param0: android.telecom.RemoteConnection, param1: number): void;

                public onVoipAudioChanged(param0: android.telecom.RemoteConnection, param1: boolean): void;

                public onPostDialChar(param0: android.telecom.RemoteConnection, param1: string): void;

                public constructor();

                public onConnectionCapabilitiesChanged(param0: android.telecom.RemoteConnection, param1: number): void;

                public onCallerDisplayNameChanged(param0: android.telecom.RemoteConnection, param1: string, param2: number): void;

                public onConferenceableConnectionsChanged(param0: android.telecom.RemoteConnection, param1: javautilList): void;

                public onVideoProviderChanged(param0: android.telecom.RemoteConnection, param1: android.telecom.RemoteConnection.VideoProvider): void;

                public onPostDialWait(param0: android.telecom.RemoteConnection, param1: string): void;

                public onDestroyed(param0: android.telecom.RemoteConnection): void;

                public onDisconnected(param0: android.telecom.RemoteConnection, param1: android.telecom.DisconnectCause): void;

                public onConferenceChanged(param0: android.telecom.RemoteConnection, param1: android.telecom.RemoteConference): void;

                public onVideoStateChanged(param0: android.telecom.RemoteConnection, param1: number): void;
            }
            export class VideoProvider extends javalangObject {
                public setDeviceOrientation(param0: number): void;

                public setPreviewSurface(param0: android.view.Surface): void;

                public unregisterCallback(param0: android.telecom.RemoteConnection.VideoProvider.Callback): void;

                public sendSessionModifyResponse(param0: android.telecom.VideoProfile): void;

                public requestCallDataUsage(): void;

                public setZoom(param0: number): void;

                public setPauseImage(param0: android.net.Uri): void;

                public registerCallback(param0: android.telecom.RemoteConnection.VideoProvider.Callback): void;

                public setCamera(param0: string): void;

                public sendSessionModifyRequest(param0: android.telecom.VideoProfile, param1: android.telecom.VideoProfile): void;

                public requestCameraCapabilities(): void;

                public setDisplaySurface(param0: android.view.Surface): void;
            }
            export module VideoProvider {
                export abstract class Callback extends javalangObject {
                    public onCallSessionEvent(param0: android.telecom.RemoteConnection.VideoProvider, param1: number): void;

                    public onCameraCapabilitiesChanged(param0: android.telecom.RemoteConnection.VideoProvider, param1: android.telecom.VideoProfile.CameraCapabilities): void;

                    public constructor();

                    public onSessionModifyResponseReceived(param0: android.telecom.RemoteConnection.VideoProvider, param1: number, param2: android.telecom.VideoProfile, param3: android.telecom.VideoProfile): void;

                    public onCallDataUsageChanged(param0: android.telecom.RemoteConnection.VideoProvider, param1: number): void;

                    public onSessionModifyRequestReceived(param0: android.telecom.RemoteConnection.VideoProvider, param1: android.telecom.VideoProfile): void;

                    public onPeerDimensionsChanged(param0: android.telecom.RemoteConnection.VideoProvider, param1: number, param2: number): void;

                    public onVideoQualityChanged(param0: android.telecom.RemoteConnection.VideoProvider, param1: number): void;
                }
            }
        }
    }
}

/// <reference path="./android.graphics.drawable.Icon.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module telecom {
        export class StatusHints extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public constructor(param0: string, param1: android.graphics.drawable.Icon, param2: android.os.Bundle);

            public getLabel(): string;

            public equals(param0: javalangObject): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getExtras(): android.os.Bundle;

            public getIcon(): android.graphics.drawable.Icon;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.telecom.PhoneAccount.d.ts" />
/// <reference path="./android.telecom.PhoneAccountHandle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module telecom {
        export class TelecomManager extends javalangObject {
            public static ACTION_CHANGE_DEFAULT_DIALER: string;
            public static ACTION_CHANGE_PHONE_ACCOUNTS: string;
            public static ACTION_CONFIGURE_PHONE_ACCOUNT: string;
            public static ACTION_DEFAULT_DIALER_CHANGED: string;
            public static ACTION_INCOMING_CALL: string;
            public static ACTION_SHOW_CALL_ACCESSIBILITY_SETTINGS: string;
            public static ACTION_SHOW_CALL_SETTINGS: string;
            public static ACTION_SHOW_RESPOND_VIA_SMS_SETTINGS: string;
            public static DTMF_CHARACTER_PAUSE: string;
            public static DTMF_CHARACTER_WAIT: string;
            public static EXTRA_CALL_BACK_NUMBER: string;
            public static EXTRA_CALL_DISCONNECT_CAUSE: string;
            public static EXTRA_CALL_DISCONNECT_MESSAGE: string;
            public static EXTRA_CALL_SUBJECT: string;
            public static EXTRA_CHANGE_DEFAULT_DIALER_PACKAGE_NAME: string;
            public static EXTRA_INCOMING_CALL_ADDRESS: string;
            public static EXTRA_INCOMING_CALL_EXTRAS: string;
            public static EXTRA_OUTGOING_CALL_EXTRAS: string;
            public static EXTRA_PHONE_ACCOUNT_HANDLE: string;
            public static EXTRA_START_CALL_WITH_SPEAKERPHONE: string;
            public static EXTRA_START_CALL_WITH_VIDEO_STATE: string;
            public static GATEWAY_ORIGINAL_ADDRESS: string;
            public static GATEWAY_PROVIDER_PACKAGE: string;
            public static METADATA_IN_CALL_SERVICE_UI: string;
            public static PRESENTATION_ALLOWED: number;
            public static PRESENTATION_PAYPHONE: number;
            public static PRESENTATION_RESTRICTED: number;
            public static PRESENTATION_UNKNOWN: number;

            public cancelMissedCallsNotification(): void;

            public addNewIncomingCall(param0: android.telecom.PhoneAccountHandle, param1: android.os.Bundle): void;

            public getPhoneAccount(param0: android.telecom.PhoneAccountHandle): android.telecom.PhoneAccount;

            public getVoiceMailNumber(param0: android.telecom.PhoneAccountHandle): string;

            public handleMmi(param0: string, param1: android.telecom.PhoneAccountHandle): boolean;

            public isVoiceMailNumber(param0: android.telecom.PhoneAccountHandle, param1: string): boolean;

            public getDefaultOutgoingPhoneAccount(param0: string): android.telecom.PhoneAccountHandle;

            public getSimCallManager(): android.telecom.PhoneAccountHandle;

            public registerPhoneAccount(param0: android.telecom.PhoneAccount): void;

            public getDefaultDialerPackage(): string;

            public getLine1Number(param0: android.telecom.PhoneAccountHandle): string;

            public getAdnUriForPhoneAccount(param0: android.telecom.PhoneAccountHandle): android.net.Uri;

            public showInCallScreen(param0: boolean): void;

            public placeCall(param0: android.net.Uri, param1: android.os.Bundle): void;

            public getCallCapablePhoneAccounts(): javautilList;

            public handleMmi(param0: string): boolean;

            public unregisterPhoneAccount(param0: android.telecom.PhoneAccountHandle): void;

            public isInCall(): boolean;

            public silenceRinger(): void;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module telecom {
        export class VideoProfile extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static QUALITY_DEFAULT: number;
            public static QUALITY_HIGH: number;
            public static QUALITY_LOW: number;
            public static QUALITY_MEDIUM: number;
            public static STATE_AUDIO_ONLY: number;
            public static STATE_BIDIRECTIONAL: number;
            public static STATE_PAUSED: number;
            public static STATE_RX_ENABLED: number;
            public static STATE_TX_ENABLED: number;

            public static videoStateToString(param0: number): string;

            public constructor(param0: number);

            public static isTransmissionEnabled(param0: number): boolean;

            public getQuality(): number;

            public static isAudioOnly(param0: number): boolean;

            public static isPaused(param0: number): boolean;

            public toString(): string;

            public static isBidirectional(param0: number): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getVideoState(): number;

            public constructor(param0: number, param1: number);

            public static isReceptionEnabled(param0: number): boolean;

            public static isVideo(param0: number): boolean;
        }
        export module VideoProfile {
            export class CameraCapabilities extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public constructor(param0: number, param1: number);

                public getWidth(): number;

                public getHeight(): number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;
            }
        }
    }
}
