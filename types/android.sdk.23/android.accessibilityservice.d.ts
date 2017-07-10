
import javautilList = java.util.List;
import javalangClass = java.lang.Class;
/// <reference path="./android.accessibilityservice.AccessibilityServiceInfo.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityNodeInfo.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module accessibilityservice {
        export abstract class AccessibilityService extends android.app.Service {
            public static GESTURE_SWIPE_DOWN: number;
            public static GESTURE_SWIPE_DOWN_AND_LEFT: number;
            public static GESTURE_SWIPE_DOWN_AND_RIGHT: number;
            public static GESTURE_SWIPE_DOWN_AND_UP: number;
            public static GESTURE_SWIPE_LEFT: number;
            public static GESTURE_SWIPE_LEFT_AND_DOWN: number;
            public static GESTURE_SWIPE_LEFT_AND_RIGHT: number;
            public static GESTURE_SWIPE_LEFT_AND_UP: number;
            public static GESTURE_SWIPE_RIGHT: number;
            public static GESTURE_SWIPE_RIGHT_AND_DOWN: number;
            public static GESTURE_SWIPE_RIGHT_AND_LEFT: number;
            public static GESTURE_SWIPE_RIGHT_AND_UP: number;
            public static GESTURE_SWIPE_UP: number;
            public static GESTURE_SWIPE_UP_AND_DOWN: number;
            public static GESTURE_SWIPE_UP_AND_LEFT: number;
            public static GESTURE_SWIPE_UP_AND_RIGHT: number;
            public static GLOBAL_ACTION_BACK: number;
            public static GLOBAL_ACTION_HOME: number;
            public static GLOBAL_ACTION_NOTIFICATIONS: number;
            public static GLOBAL_ACTION_POWER_DIALOG: number;
            public static GLOBAL_ACTION_QUICK_SETTINGS: number;
            public static GLOBAL_ACTION_RECENTS: number;
            public static SERVICE_INTERFACE: string;
            public static SERVICE_META_DATA: string;

            public getSystemService(param0: string): javalangObject;
            public getSystemService(param0: javalangClass): javalangObject;

            public onBind(param0: android.content.Intent): android.os.IBinder;

            public performGlobalAction(param0: number): boolean;

            public constructor();

            public onAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;

            public onKeyEvent(param0: android.view.KeyEvent): boolean;

            public getRootInActiveWindow(): android.view.accessibility.AccessibilityNodeInfo;

            public findFocus(param0: number): android.view.accessibility.AccessibilityNodeInfo;

            public onServiceConnected(): void;

            public getServiceInfo(): android.accessibilityservice.AccessibilityServiceInfo;

            public onTrimMemory(param0: number): void;

            public constructor(param0: android.content.Context);

            public onGesture(param0: number): boolean;

            public setServiceInfo(param0: android.accessibilityservice.AccessibilityServiceInfo): void;

            public getWindows(): javautilList;

            public onInterrupt(): void;
        }
    }
}



/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.content.pm.ResolveInfo.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module accessibilityservice {
        export class AccessibilityServiceInfo extends javalangObject implements android.os.Parcelable {
            public static CAPABILITY_CAN_REQUEST_ENHANCED_WEB_ACCESSIBILITY: number;
            public static CAPABILITY_CAN_REQUEST_FILTER_KEY_EVENTS: number;
            public static CAPABILITY_CAN_REQUEST_TOUCH_EXPLORATION: number;
            public static CAPABILITY_CAN_RETRIEVE_WINDOW_CONTENT: number;
            public static CREATOR: android.os.Parcelable.Creator;
            public static DEFAULT: number;
            public static FEEDBACK_ALL_MASK: number;
            public static FEEDBACK_AUDIBLE: number;
            public static FEEDBACK_BRAILLE: number;
            public static FEEDBACK_GENERIC: number;
            public static FEEDBACK_HAPTIC: number;
            public static FEEDBACK_SPOKEN: number;
            public static FEEDBACK_VISUAL: number;
            public static FLAG_INCLUDE_NOT_IMPORTANT_VIEWS: number;
            public static FLAG_REPORT_VIEW_IDS: number;
            public static FLAG_REQUEST_ENHANCED_WEB_ACCESSIBILITY: number;
            public static FLAG_REQUEST_FILTER_KEY_EVENTS: number;
            public static FLAG_REQUEST_TOUCH_EXPLORATION_MODE: number;
            public static FLAG_RETRIEVE_INTERACTIVE_WINDOWS: number;
            public eventTypes: number;
            public feedbackType: number;
            public flags: number;
            public notificationTimeout: number;
            public packageNames: native.Array<string>;

            public static flagToString(param0: number): string;

            public getSettingsActivityName(): string;

            public equals(param0: javalangObject): boolean;

            public constructor();

            public getCapabilities(): number;

            public getResolveInfo(): android.content.pm.ResolveInfo;

            public getId(): string;

            public static feedbackTypeToString(param0: number): string;

            public toString(): string;

            public loadDescription(param0: android.content.pm.PackageManager): string;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getDescription(): string;

            public getCanRetrieveWindowContent(): boolean;

            public hashCode(): number;

            public static capabilityToString(param0: number): string;
        }
    }
}
