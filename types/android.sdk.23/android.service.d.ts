
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module service {
        export module carrier {
            export class CarrierIdentifier extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string);

                public getImsi(): string;

                public getGid1(): string;

                public getGid2(): string;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public getMcc(): string;

                public getSpn(): string;

                public getMnc(): string;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.service.carrier.MessagePdu.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module service {
        export module carrier {
            export abstract class CarrierMessagingService extends android.app.Service {
                public static DOWNLOAD_STATUS_ERROR: number;
                public static DOWNLOAD_STATUS_OK: number;
                public static DOWNLOAD_STATUS_RETRY_ON_CARRIER_NETWORK: number;
                public static SEND_FLAG_REQUEST_DELIVERY_STATUS: number;
                public static SEND_STATUS_ERROR: number;
                public static SEND_STATUS_OK: number;
                public static SEND_STATUS_RETRY_ON_CARRIER_NETWORK: number;
                public static SERVICE_INTERFACE: string;

                public onSendTextSms(param0: string, param1: number, param2: string, param3: number, param4: android.service.carrier.CarrierMessagingService.ResultCallback): void;

                public onDownloadMms(param0: android.net.Uri, param1: number, param2: android.net.Uri, param3: android.service.carrier.CarrierMessagingService.ResultCallback): void;

                public onSendMultipartTextSms(param0: javautilList, param1: number, param2: string, param3: number, param4: android.service.carrier.CarrierMessagingService.ResultCallback): void;

                public constructor();

                public onSendDataSms(param0: native.Array<number>, param1: number, param2: string, param3: number, param4: android.service.carrier.CarrierMessagingService.ResultCallback): void;

                public onSendMultipartTextSms(param0: javautilList, param1: number, param2: string, param3: android.service.carrier.CarrierMessagingService.ResultCallback): void;

                public onBind(param0: android.content.Intent): android.os.IBinder;

                public onFilterSms(param0: android.service.carrier.MessagePdu, param1: string, param2: number, param3: number, param4: android.service.carrier.CarrierMessagingService.ResultCallback): void;

                public onSendDataSms(param0: native.Array<number>, param1: number, param2: string, param3: number, param4: number, param5: android.service.carrier.CarrierMessagingService.ResultCallback): void;

                public constructor(param0: android.content.Context);

                public onSendTextSms(param0: string, param1: number, param2: string, param3: android.service.carrier.CarrierMessagingService.ResultCallback): void;

                public onSendMms(param0: android.net.Uri, param1: number, param2: android.net.Uri, param3: android.service.carrier.CarrierMessagingService.ResultCallback): void;

                public onTrimMemory(param0: number): void;
            }
            export module CarrierMessagingService {
                export class ResultCallback extends javalangObject {
                    /**
                     * Constructs a new instance of the android.service.carrier.CarrierMessagingService$ResultCallback interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onReceiveResult(param0: javalangObject): void;
                    });

                    public onReceiveResult(param0: javalangObject): void;
                }
                export class SendMmsResult extends javalangObject {
                    public getSendStatus(): number;

                    public constructor(param0: number, param1: native.Array<number>);

                    public getSendConfPdu(): native.Array<number>;
                }
                export class SendMultipartSmsResult extends javalangObject {
                    public getSendStatus(): number;

                    public constructor(param0: number, param1: native.Array<number>);

                    public getMessageRefs(): native.Array<number>;
                }
                export class SendSmsResult extends javalangObject {
                    public getSendStatus(): number;

                    public getMessageRef(): number;

                    public constructor(param0: number, param1: number);
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./android.service.carrier.CarrierIdentifier.d.ts" />
declare module android {
    export module service {
        export module carrier {
            export abstract class CarrierService extends android.app.Service {
                public static CARRIER_SERVICE_INTERFACE: string;

                public onBind(param0: android.content.Intent): android.os.IBinder;

                public constructor(param0: android.content.Context);

                public notifyCarrierNetworkChange(param0: boolean): void;

                public onTrimMemory(param0: number): void;

                public constructor();

                public onLoadConfig(param0: android.service.carrier.CarrierIdentifier): android.os.PersistableBundle;
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module service {
        export module carrier {
            export class MessagePdu extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public getPdus(): javautilList;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public constructor(param0: javautilList);
            }
        }
    }
}

/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.graphics.drawable.Icon.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module service {
        export module chooser {
            export class ChooserTarget extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public getIntentExtras(): android.os.Bundle;

                public getIcon(): android.graphics.drawable.Icon;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public getComponentName(): android.content.ComponentName;

                public toString(): string;

                public constructor(param0: string, param1: android.graphics.drawable.Icon, param2: number, param3: android.content.ComponentName, param4: android.os.Bundle);

                public getTitle(): string;

                public getScore(): number;
            }
        }
    }
}

/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.IntentFilter.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module service {
        export module chooser {
            export abstract class ChooserTargetService extends android.app.Service {
                public static BIND_PERMISSION: string;
                public static META_DATA_NAME: string;
                public static SERVICE_INTERFACE: string;

                public onBind(param0: android.content.Intent): android.os.IBinder;

                public constructor(param0: android.content.Context);

                public onGetChooserTargets(param0: android.content.ComponentName, param1: android.content.IntentFilter): javautilList;

                public onTrimMemory(param0: number): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.SearchEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.Window.d.ts" />
/// <reference path="./android.view.WindowManager.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
declare module android {
    export module service {
        export module dreams {
            export class DreamService extends android.app.Service implements android.view.Window.Callback {
                public static DREAM_META_DATA: string;
                public static SERVICE_INTERFACE: string;

                public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;

                public setContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

                public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;

                public isInteractive(): boolean;

                public isFullscreen(): boolean;

                public getWindowManager(): android.view.WindowManager;

                public onDreamingStarted(): void;

                public finish(): void;

                public constructor();

                public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;

                public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;

                public setFullscreen(param0: boolean): void;

                public onSearchRequested(param0: android.view.SearchEvent): boolean;

                public isScreenBright(): boolean;

                public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;

                public setInteractive(param0: boolean): void;

                public onPanelClosed(param0: number, param1: android.view.Menu): void;

                public onCreatePanelView(param0: number): android.view.View;

                public onTrimMemory(param0: number): void;

                public findViewById(param0: number): android.view.View;

                public onActionModeStarted(param0: android.view.ActionMode): void;

                public onMenuOpened(param0: number, param1: android.view.Menu): boolean;

                public dump(param0: javaioFileDescriptor, param1: javaioPrintWriter, param2: native.Array<string>): void;

                public onWakeUp(): void;

                public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;

                public getWindow(): android.view.Window;

                public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;

                public onActionModeFinished(param0: android.view.ActionMode): void;

                public setContentView(param0: number): void;

                public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;

                public addContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

                public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;

                public onContentChanged(): void;

                public setScreenBright(param0: boolean): void;

                public onBind(param0: android.content.Intent): android.os.IBinder;

                public constructor(param0: android.content.Context);

                public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;

                public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;

                public onDetachedFromWindow(): void;

                public setContentView(param0: android.view.View): void;

                public onCreate(): void;

                public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;

                public onSearchRequested(): boolean;

                public wakeUp(): void;

                public onWindowFocusChanged(param0: boolean): void;

                public onDreamingStopped(): void;

                public onDestroy(): void;

                public onAttachedToWindow(): void;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
declare module android {
    export module service {
        export module media {
            export abstract class CameraPrewarmService extends android.app.Service {
                public onBind(param0: android.content.Intent): android.os.IBinder;

                public onPrewarm(): void;

                public onUnbind(param0: android.content.Intent): boolean;

                public constructor(param0: android.content.Context);

                public onTrimMemory(param0: number): void;

                public constructor();

                public onCooldown(param0: boolean): void;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module service {
        export module media {
            export abstract class MediaBrowserService extends android.app.Service {
                public static SERVICE_INTERFACE: string;

                public onBind(param0: android.content.Intent): android.os.IBinder;

                public dump(param0: javaioFileDescriptor, param1: javaioPrintWriter, param2: native.Array<string>): void;

                public onLoadChildren(param0: string, param1: android.service.media.MediaBrowserService.Result): void;

                public constructor(param0: android.content.Context);

                public onCreate(): void;

                public notifyChildrenChanged(param0: string): void;

                public onTrimMemory(param0: number): void;

                public getSessionToken(): android.media.session.MediaSession.Token;

                public onGetRoot(param0: string, param1: number, param2: android.os.Bundle): android.service.media.MediaBrowserService.BrowserRoot;

                public setSessionToken(param0: android.media.session.MediaSession.Token): void;

                public constructor();

                public onLoadItem(param0: string, param1: android.service.media.MediaBrowserService.Result): void;
            }
            export module MediaBrowserService {
                export class BrowserRoot extends javalangObject {
                    public getExtras(): android.os.Bundle;

                    public constructor(param0: string, param1: android.os.Bundle);

                    public getRootId(): string;
                }
                export class Result extends javalangObject {
                    public sendResult(param0: javalangObject): void;

                    public detach(): void;
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.service.notification.StatusBarNotification.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module service {
        export module notification {
            export abstract class NotificationListenerService extends android.app.Service {
                public static HINT_HOST_DISABLE_EFFECTS: number;
                public static INTERRUPTION_FILTER_ALARMS: number;
                public static INTERRUPTION_FILTER_ALL: number;
                public static INTERRUPTION_FILTER_NONE: number;
                public static INTERRUPTION_FILTER_PRIORITY: number;
                public static INTERRUPTION_FILTER_UNKNOWN: number;
                public static SERVICE_INTERFACE: string;

                public getActiveNotifications(): native.Array<android.service.notification.StatusBarNotification>;

                public setNotificationsShown(param0: native.Array<string>): void;

                public getCurrentListenerHints(): number;

                public getCurrentInterruptionFilter(): number;

                public onInterruptionFilterChanged(param0: number): void;

                public requestListenerHints(param0: number): void;

                public onNotificationRemoved(param0: android.service.notification.StatusBarNotification): void;

                public cancelAllNotifications(): void;

                public getCurrentRanking(): android.service.notification.NotificationListenerService.RankingMap;

                public onNotificationPosted(param0: android.service.notification.StatusBarNotification): void;

                public onNotificationRankingUpdate(param0: android.service.notification.NotificationListenerService.RankingMap): void;

                public getActiveNotifications(param0: native.Array<string>): native.Array<android.service.notification.StatusBarNotification>;

                public onListenerHintsChanged(param0: number): void;

                public constructor();

                public onNotificationPosted(param0: android.service.notification.StatusBarNotification, param1: android.service.notification.NotificationListenerService.RankingMap): void;

                public requestInterruptionFilter(param0: number): void;

                public onBind(param0: android.content.Intent): android.os.IBinder;

                public onNotificationRemoved(param0: android.service.notification.StatusBarNotification, param1: android.service.notification.NotificationListenerService.RankingMap): void;

                public constructor(param0: android.content.Context);

                public cancelNotification(param0: string, param1: string, param2: number): void;

                public cancelNotifications(param0: native.Array<string>): void;

                public cancelNotification(param0: string): void;

                public onTrimMemory(param0: number): void;

                public onListenerConnected(): void;
            }
            export module NotificationListenerService {
                export class Ranking extends javalangObject {
                    public getKey(): string;

                    public constructor();

                    public matchesInterruptionFilter(): boolean;

                    public isAmbient(): boolean;

                    public getRank(): number;
                }
                export class RankingMap extends javalangObject implements android.os.Parcelable {
                    public static CREATOR: android.os.Parcelable.Creator;

                    public getRanking(param0: string, param1: android.service.notification.NotificationListenerService.Ranking): boolean;

                    public describeContents(): number;

                    public getOrderedKeys(): native.Array<string>;

                    public writeToParcel(param0: android.os.Parcel, param1: number): void;
                }
            }
        }
    }
}

/// <reference path="./android.app.Notification.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.UserHandle.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module service {
        export module notification {
            export class StatusBarNotification extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public clone(): javalangObject;

                public getPostTime(): number;

                public isOngoing(): boolean;

                public getUserId(): number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public constructor(param0: string, param1: string, param2: number, param3: string, param4: number, param5: number, param6: number, param7: android.app.Notification, param8: android.os.UserHandle, param9: number);

                public isClearable(): boolean;

                public getPackageName(): string;

                public getId(): number;

                public getTag(): string;

                public toString(): string;

                public getKey(): string;

                public constructor(param0: android.os.Parcel);

                public describeContents(): number;

                public getNotification(): android.app.Notification;

                public getGroupKey(): string;

                public clone(): android.service.notification.StatusBarNotification;

                public getUser(): android.os.UserHandle;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module service {
        export module restrictions {
            export abstract class RestrictionsReceiver extends android.content.BroadcastReceiver {
                public onRequestPermission(param0: android.content.Context, param1: string, param2: string, param3: string, param4: android.os.PersistableBundle): void;

                public onReceive(param0: android.content.Context, param1: android.content.Intent): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.view.textservice.SentenceSuggestionsInfo.d.ts" />
/// <reference path="./android.view.textservice.SuggestionsInfo.d.ts" />
/// <reference path="./android.view.textservice.TextInfo.d.ts" />
declare module android {
    export module service {
        export module textservice {
            export abstract class SpellCheckerService extends android.app.Service {
                public static SERVICE_INTERFACE: string;

                public onBind(param0: android.content.Intent): android.os.IBinder;

                public createSession(): android.service.textservice.SpellCheckerService.Session;

                public constructor(param0: android.content.Context);

                public onTrimMemory(param0: number): void;

                public constructor();
            }
            export module SpellCheckerService {
                export abstract class Session extends javalangObject {
                    public onCreate(): void;

                    public onClose(): void;

                    public getLocale(): string;

                    public constructor();

                    public onGetSuggestionsMultiple(param0: native.Array<android.view.textservice.TextInfo>, param1: number, param2: boolean): native.Array<android.view.textservice.SuggestionsInfo>;

                    public onGetSuggestions(param0: android.view.textservice.TextInfo, param1: number): android.view.textservice.SuggestionsInfo;

                    public onGetSentenceSuggestionsMultiple(param0: native.Array<android.view.textservice.TextInfo>, param1: number): native.Array<android.view.textservice.SentenceSuggestionsInfo>;

                    public onCancel(): void;

                    public getBundle(): android.os.Bundle;
                }
            }
        }
    }
}

/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.media.AudioFormat.d.ts" />
declare module android {
    export module service {
        export module voice {
            export class AlwaysOnHotwordDetector extends javalangObject {
                public static RECOGNITION_FLAG_ALLOW_MULTIPLE_TRIGGERS: number;
                public static RECOGNITION_FLAG_CAPTURE_TRIGGER_AUDIO: number;
                public static RECOGNITION_MODE_USER_IDENTIFICATION: number;
                public static RECOGNITION_MODE_VOICE_TRIGGER: number;
                public static STATE_HARDWARE_UNAVAILABLE: number;
                public static STATE_KEYPHRASE_ENROLLED: number;
                public static STATE_KEYPHRASE_UNENROLLED: number;
                public static STATE_KEYPHRASE_UNSUPPORTED: number;

                public getSupportedRecognitionModes(): number;

                public startRecognition(param0: number): boolean;

                public createUnEnrollIntent(): android.content.Intent;

                public stopRecognition(): boolean;

                public createReEnrollIntent(): android.content.Intent;

                public createEnrollIntent(): android.content.Intent;
            }
            export module AlwaysOnHotwordDetector {
                export abstract class Callback extends javalangObject {
                    public constructor();

                    public onDetected(param0: android.service.voice.AlwaysOnHotwordDetector.EventPayload): void;

                    public onRecognitionResumed(): void;

                    public onAvailabilityChanged(param0: number): void;

                    public onError(): void;

                    public onRecognitionPaused(): void;
                }
                export class EventPayload extends javalangObject {
                    public getCaptureAudioFormat(): android.media.AudioFormat;

                    public getTriggerAudio(): native.Array<number>;
                }
            }
        }
    }
}

/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.service.voice.AlwaysOnHotwordDetector.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module android {
    export module service {
        export module voice {
            export class VoiceInteractionService extends android.app.Service {
                public static SERVICE_INTERFACE: string;
                public static SERVICE_META_DATA: string;

                public setDisabledShowContext(param0: number): void;

                public dump(param0: javaioFileDescriptor, param1: javaioPrintWriter, param2: native.Array<string>): void;

                public onLaunchVoiceAssistFromKeyguard(): void;

                public onShutdown(): void;

                public getDisabledShowContext(): number;

                public constructor();

                public onBind(param0: android.content.Intent): android.os.IBinder;

                public static isActiveService(param0: android.content.Context, param1: android.content.ComponentName): boolean;

                public constructor(param0: android.content.Context);

                public showSession(param0: android.os.Bundle, param1: number): void;

                public onReady(): void;

                public onCreate(): void;

                public onTrimMemory(param0: number): void;

                public createAlwaysOnHotwordDetector(param0: string, param1: javautilLocale, param2: android.service.voice.AlwaysOnHotwordDetector.Callback): android.service.voice.AlwaysOnHotwordDetector;
            }
        }
    }
}

/// <reference path="./android.app.Dialog.d.ts" />
/// <reference path="./android.app.assist.AssistContent.d.ts" />
/// <reference path="./android.app.assist.AssistStructure.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.Region.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module service {
        export module voice {
            export class VoiceInteractionSession extends javalangObject implements android.view.KeyEvent.Callback, android.content.ComponentCallbacks2 {
                public static SHOW_SOURCE_APPLICATION: number;
                public static SHOW_SOURCE_ASSIST_GESTURE: number;
                public static SHOW_WITH_ASSIST: number;
                public static SHOW_WITH_SCREENSHOT: number;

                public onLockscreenShown(): void;

                public setDisabledShowContext(param0: number): void;

                public onBackPressed(): void;

                public setTheme(param0: number): void;

                public onHandleAssist(param0: android.os.Bundle, param1: android.app.assist.AssistStructure, param2: android.app.assist.AssistContent): void;

                public startVoiceActivity(param0: android.content.Intent): void;

                public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

                public onTaskFinished(param0: android.content.Intent, param1: number): void;

                public getDisabledShowContext(): number;

                public finish(): void;

                public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

                public onConfigurationChanged(param0: android.content.res.Configuration): void;

                public onShow(param0: android.os.Bundle, param1: number): void;

                public onRequestConfirmation(param0: android.service.voice.VoiceInteractionSession.ConfirmationRequest): void;

                public onRequestCommand(param0: android.service.voice.VoiceInteractionSession.CommandRequest): void;

                public onCloseSystemDialogs(): void;

                public onHide(): void;

                public getWindow(): android.app.Dialog;

                public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

                public onTrimMemory(param0: number): void;

                public constructor(param0: android.content.Context, param1: android.os.Handler);

                public onRequestCompleteVoice(param0: android.service.voice.VoiceInteractionSession.CompleteVoiceRequest): void;

                public onHandleScreenshot(param0: android.graphics.Bitmap): void;

                public onLowMemory(): void;

                public setKeepAwake(param0: boolean): void;

                public show(param0: android.os.Bundle, param1: number): void;

                public onTaskStarted(param0: android.content.Intent, param1: number): void;

                public onComputeInsets(param0: android.service.voice.VoiceInteractionSession.Insets): void;

                public onRequestAbortVoice(param0: android.service.voice.VoiceInteractionSession.AbortVoiceRequest): void;

                public closeSystemDialogs(): void;

                public onGetSupportedCommands(param0: native.Array<string>): native.Array<boolean>;

                public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

                public hide(): void;

                public getUserDisabledShowContext(): number;

                public onCreateContentView(): android.view.View;

                public dump(param0: string, param1: javaioFileDescriptor, param2: javaioPrintWriter, param3: native.Array<string>): void;

                public onAssistStructureFailure(param0: javalangThrowable): void;

                public onRequestPickOption(param0: android.service.voice.VoiceInteractionSession.PickOptionRequest): void;

                public constructor(param0: android.content.Context);

                public onCreate(): void;

                public setContentView(param0: android.view.View): void;

                public getLayoutInflater(): android.view.LayoutInflater;

                public onDestroy(): void;

                public onCancelRequest(param0: android.service.voice.VoiceInteractionSession.Request): void;

                public getContext(): android.content.Context;
            }
            export module VoiceInteractionSession {
                export class AbortVoiceRequest extends android.service.voice.VoiceInteractionSession.Request {
                    public getVoicePrompt(): android.app.VoiceInteractor.Prompt;

                    public getMessage(): string;

                    public sendAbortResult(param0: android.os.Bundle): void;
                }
                export class CommandRequest extends android.service.voice.VoiceInteractionSession.Request {
                    public getCommand(): string;

                    public sendIntermediateResult(param0: android.os.Bundle): void;

                    public sendResult(param0: android.os.Bundle): void;
                }
                export class CompleteVoiceRequest extends android.service.voice.VoiceInteractionSession.Request {
                    public getVoicePrompt(): android.app.VoiceInteractor.Prompt;

                    public getMessage(): string;

                    public sendCompleteResult(param0: android.os.Bundle): void;
                }
                export class ConfirmationRequest extends android.service.voice.VoiceInteractionSession.Request {
                    public getVoicePrompt(): android.app.VoiceInteractor.Prompt;

                    public getPrompt(): string;

                    public sendConfirmationResult(param0: boolean, param1: android.os.Bundle): void;
                }
                export class Insets extends javalangObject {
                    public static TOUCHABLE_INSETS_CONTENT: number;
                    public static TOUCHABLE_INSETS_FRAME: number;
                    public static TOUCHABLE_INSETS_REGION: number;
                    public contentInsets: android.graphics.Rect;
                    public touchableInsets: number;
                    public touchableRegion: android.graphics.Region;

                    public constructor();
                }
                export class PickOptionRequest extends android.service.voice.VoiceInteractionSession.Request {
                    public sendPickOptionResult(param0: native.Array<android.app.VoiceInteractor.PickOptionRequest.Option>, param1: android.os.Bundle): void;

                    public getVoicePrompt(): android.app.VoiceInteractor.Prompt;

                    public getPrompt(): string;

                    public getOptions(): native.Array<android.app.VoiceInteractor.PickOptionRequest.Option>;

                    public sendIntermediatePickOptionResult(param0: native.Array<android.app.VoiceInteractor.PickOptionRequest.Option>, param1: android.os.Bundle): void;
                }
                export class Request extends javalangObject {
                    public isActive(): boolean;

                    public toString(): string;

                    public getCallingPackage(): string;

                    public cancel(): void;

                    public getExtras(): android.os.Bundle;

                    public getCallingUid(): number;
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.service.voice.VoiceInteractionSession.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
declare module android {
    export module service {
        export module voice {
            export abstract class VoiceInteractionSessionService extends android.app.Service {
                public onNewSession(param0: android.os.Bundle): android.service.voice.VoiceInteractionSession;

                public onBind(param0: android.content.Intent): android.os.IBinder;

                public dump(param0: javaioFileDescriptor, param1: javaioPrintWriter, param2: native.Array<string>): void;

                public onLowMemory(): void;

                public constructor(param0: android.content.Context);

                public onCreate(): void;

                public onTrimMemory(param0: number): void;

                public constructor();

                public onConfigurationChanged(param0: android.content.res.Configuration): void;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.service.wallpaper.WallpaperService.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.SurfaceHolder.d.ts" />
/// <reference path="./android.view.WindowInsets.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module service {
        export module wallpaper {
            export abstract class WallpaperService extends android.app.Service {
                public static SERVICE_INTERFACE: string;
                public static SERVICE_META_DATA: string;

                public onBind(param0: android.content.Intent): android.os.IBinder;

                public dump(param0: javaioFileDescriptor, param1: javaioPrintWriter, param2: native.Array<string>): void;

                public constructor(param0: android.content.Context);

                public onCreate(): void;

                public onDestroy(): void;

                public onTrimMemory(param0: number): void;

                public onCreateEngine(): android.service.wallpaper.WallpaperService.Engine;

                public constructor();
            }
            export module WallpaperService {
                export class Engine extends javalangObject {
                    public onVisibilityChanged(param0: boolean): void;

                    public onTouchEvent(param0: android.view.MotionEvent): void;

                    public onDesiredSizeChanged(param0: number, param1: number): void;

                    public onSurfaceDestroyed(param0: android.view.SurfaceHolder): void;

                    public onCommand(param0: string, param1: number, param2: number, param3: number, param4: android.os.Bundle, param5: boolean): android.os.Bundle;

                    public onSurfaceChanged(param0: android.view.SurfaceHolder, param1: number, param2: number, param3: number): void;

                    public onDestroy(): void;

                    public getDesiredMinimumHeight(): number;

                    public isPreview(): boolean;

                    public onSurfaceCreated(param0: android.view.SurfaceHolder): void;

                    public onOffsetsChanged(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

                    public onApplyWindowInsets(param0: android.view.WindowInsets): void;

                    public getSurfaceHolder(): android.view.SurfaceHolder;

                    public isVisible(): boolean;

                    public onCreate(param0: android.view.SurfaceHolder): void;

                    public setTouchEventsEnabled(param0: boolean): void;

                    public setOffsetNotificationsEnabled(param0: boolean): void;

                    public dump(param0: string, param1: javaioFileDescriptor, param2: javaioPrintWriter, param3: native.Array<string>): void;

                    public constructor(param0: android.service.wallpaper.WallpaperService);

                    public onSurfaceRedrawNeeded(param0: android.view.SurfaceHolder): void;

                    public getDesiredMinimumWidth(): number;
                }
            }
        }
    }
}
