


import anyInputStream = java.io.FileInputStream;
import anyOutputStream = java.io.FileOutputStream;
/// <reference path="./any.d.ts" />
/// <reference path="./any.d.ts" />
/// <reference path="./any.d.ts" />
/// <reference path="./any.d.ts" />
/// <reference path="./any.d.ts" />
/// <reference path="./any.d.ts" />
/// <reference path="./anySender.d.ts" />
/// <reference path="./any.d.ts" />
/// <reference path="./any.d.ts" />
/// <reference path="./any.d.ts" />
/// <reference path="./any.d.ts" />
/// <reference path="./any.d.ts" />
/// <reference path="./any.d.ts" />
/// <reference path="./any.d.ts" />
/// <reference path="./any.d.ts" />
/// <reference path="./any.d.ts" />
/// <reference path="./any.d.ts" />
/// <reference path="./any.d.ts" />
/// <reference path="./any.d.ts" />
/// <reference path="./any.d.ts" />
/// <reference path="./any.d.ts" />
/// <reference path="./any.d.ts" />
/// <reference path="./any.d.ts" />
/// <reference path="./any.d.ts" />
/// <reference path="./any.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./any.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.FileInputStream.d.ts" />
/// <reference path="./java.io.FileOutputStream.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export abstract class Context extends javalangObject {
            public static ACCESSIBILITY_SERVICE: string;
            public static ACCOUNT_SERVICE: string;
            public static ACTIVITY_SERVICE: string;
            public static ALARM_SERVICE: string;
            public static APPWIDGET_SERVICE: string;
            public static APP_OPS_SERVICE: string;
            public static AUDIO_SERVICE: string;
            public static BATTERY_SERVICE: string;
            public static BIND_ABOVE_CLIENT: number;
            public static BIND_ADJUST_WITH_ACTIVITY: number;
            public static BIND_ALLOW_OOM_MANAGEMENT: number;
            public static BIND_AUTO_CREATE: number;
            public static BIND_DEBUG_UNBIND: number;
            public static BIND_IMPORTANT: number;
            public static BIND_NOT_FOREGROUND: number;
            public static BIND_WAIVE_PRIORITY: number;
            public static BLUETOOTH_SERVICE: string;
            public static CAMERA_SERVICE: string;
            public static CAPTIONING_SERVICE: string;
            public static CARRIER_CONFIG_SERVICE: string;
            public static CLIPBOARD_SERVICE: string;
            public static CONNECTIVITY_SERVICE: string;
            public static CONSUMER_IR_SERVICE: string;
            public static CONTEXT_IGNORE_SECURITY: number;
            public static CONTEXT_INCLUDE_CODE: number;
            public static CONTEXT_RESTRICTED: number;
            public static DEVICE_POLICY_SERVICE: string;
            public static DISPLAY_SERVICE: string;
            public static DOWNLOAD_SERVICE: string;
            public static DROPBOX_SERVICE: string;
            public static FINGERPRINT_SERVICE: string;
            public static INPUT_METHOD_SERVICE: string;
            public static INPUT_SERVICE: string;
            public static JOB_SCHEDULER_SERVICE: string;
            public static KEYGUARD_SERVICE: string;
            public static LAUNCHER_APPS_SERVICE: string;
            public static LAYOUT_INFLATER_SERVICE: string;
            public static LOCATION_SERVICE: string;
            public static MEDIA_PROJECTION_SERVICE: string;
            public static MEDIA_ROUTER_SERVICE: string;
            public static MEDIA_SESSION_SERVICE: string;
            public static MIDI_SERVICE: string;
            public static MODE_APPEND: number;
            public static MODE_ENABLE_WRITE_AHEAD_LOGGING: number;
            public static MODE_MULTI_PROCESS: number;
            public static MODE_PRIVATE: number;
            public static MODE_WORLD_READABLE: number;
            public static MODE_WORLD_WRITEABLE: number;
            public static NETWORK_STATS_SERVICE: string;
            public static NFC_SERVICE: string;
            public static NOTIFICATION_SERVICE: string;
            public static NSD_SERVICE: string;
            public static POWER_SERVICE: string;
            public static PRINT_SERVICE: string;
            public static RESTRICTIONS_SERVICE: string;
            public static SEARCH_SERVICE: string;
            public static SENSOR_SERVICE: string;
            public static STORAGE_SERVICE: string;
            public static TELECOM_SERVICE: string;
            public static TELEPHONY_SERVICE: string;
            public static TELEPHONY_SUBSCRIPTION_SERVICE: string;
            public static TEXT_SERVICES_MANAGER_SERVICE: string;
            public static TV_INPUT_SERVICE: string;
            public static UI_MODE_SERVICE: string;
            public static USAGE_STATS_SERVICE: string;
            public static USB_SERVICE: string;
            public static USER_SERVICE: string;
            public static VIBRATOR_SERVICE: string;
            public static WALLPAPER_SERVICE: string;
            public static WIFI_P2P_SERVICE: string;
            public static WIFI_SERVICE: string;
            public static WINDOW_SERVICE: string;

            public clearWallpaper(): void;

            public fileList(): native.Array<string>;

            public peekWallpaper(): any;

            public checkCallingPermission(param0: string): number;

            public getPackageName(): string;

            public openFileInput(param0: string): anyInputStream;

            public sendBroadcastAsUser(param0: any, param1: any, param2: string): void;

            public getExternalFilesDir(param0: string): any;

            public sendStickyBroadcast(param0: any): void;

            public unregisterReceiver(param0: any): void;

            public bindService(param0: any, param1: any, param2: number): boolean;

            public createConfigurationContext(param0: any): android.content.Context;

            public checkCallingOrSelfPermission(param0: string): number;

            public getColor(param0: number): number;

            public getWallpaperDesiredMinimumWidth(): number;

            public getFilesDir(): any;

            public constructor();

            public getString(param0: number, param1: native.Array<javalangObject>): string;

            public revokeUriPermission(param0: any, param1: number): void;

            public obtainStyledAttributes(param0:any, param1: native.Array<number>, param2: number, param3: number): any;

            public getDrawable(param0: number): any;

            public checkSelfPermission(param0: string): number;

            public obtainStyledAttributes(param0:any, param1: native.Array<number>): any;

            public getTheme(): any;

            public createDisplayContext(param0: any): android.content.Context;

            public openOrCreateDatabase(param0: string, param1: number, param2: any): any;

            public sendBroadcastAsUser(param0: any, param1: any): void;

            public getResources(): any;

            public unbindService(param0: any): void;

            public getSystemService(param0: string): javalangObject;

            public sendOrderedBroadcast(param0: any, param1: string, param2: any, param3: any, param4: number, param5: string, param6: any): void;

            public deleteDatabase(param0: string): boolean;

            public getApplicationContext(): android.content.Context;

            public getText(param0: number): string;

            public unregisterComponentCallbacks(param0: any): void;

            public startActivity(param0: any, param1: any): void;

            public startInstrumentation(param0: any, param1: string, param2: any): boolean;

            public getDir(param0: string, param1: number): any;

            public obtainStyledAttributes(param0: number, param1: native.Array<number>): any;

            public checkPermission(param0: string, param1: number, param2: number): number;

            public enforceUriPermission(param0: any, param1: number, param2: number, param3: number, param4: string): void;

            public openOrCreateDatabase(param0: string, param1: number, param2: any, param3: any): any;

            public getSystemService(param0: any): javalangObject;

            public startIntentSender(param0:any, param1: any, param2: number, param3: number, param4: number): void;

            public getFileStreamPath(param0: string): any;

            public removeStickyBroadcast(param0: any): void;

            public openFileOutput(param0: string, param1: number): anyOutputStream;

            public enforceUriPermission(param0: any, param1: string, param2: string, param3: number, param4: number, param5: number, param6: string): void;

            public sendStickyOrderedBroadcast(param0: any, param1: any, param2: any, param3: number, param4: string, param5: any): void;

            public getCacheDir(): any;

            public setTheme(param0: number): void;

            public deleteFile(param0: string): boolean;

            public getMainLooper(): any;

            public removeStickyBroadcastAsUser(param0: any, param1: any): void;

            public enforceCallingOrSelfUriPermission(param0: any, param1: number, param2: string): void;

            public getExternalMediaDirs(): native.Array<any>;

            public startIntentSender(param0:any, param1: any, param2: number, param3: number, param4: number, param5: any): void;

            public getPackageResourcePath(): string;

            public checkCallingUriPermission(param0: any, param1: number): number;

            public databaseList(): native.Array<string>;

            public setWallpaper(param0: any): void;

            public getObbDirs(): native.Array<any>;

            public getWallpaper(): any;

            public registerReceiver(param0: any, param1: any, param2: string, param3: any): any;

            public sendOrderedBroadcast(param0: any, param1: string): void;

            public getObbDir(): any;

            public getExternalCacheDirs(): native.Array<any>;

            public getExternalFilesDirs(param0: string): native.Array<any>;

            public getClassLoader(): any;

            public getAssets(): any;

            public startActivities(param0: native.Array<any>): void;

            public getPackageCodePath(): string;

            public getDatabasePath(param0: string): any;

            public getString(param0: number): string;

            public obtainStyledAttributes(param0: native.Array<number>): any;

            public getPackageManager(): any;

            public getColorStateList(param0: number): any;

            public registerComponentCallbacks(param0: any): void;

            public getWallpaperDesiredMinimumHeight(): number;

            public sendBroadcast(param0: any, param1: string): void;

            public enforceCallingUriPermission(param0: any, param1: number, param2: string): void;

            public stopService(param0: any): boolean;

            public sendStickyOrderedBroadcastAsUser(param0: any, param1: any, param2: any, param3: any, param4: number, param5: string, param6: any): void;

            public getApplicationInfo(): any;

            public registerReceiver(param0: any, param1: any): any;

            public sendStickyBroadcastAsUser(param0: any, param1: any): void;

            public sendOrderedBroadcastAsUser(param0: any, param1: any, param2: string, param3: any, param4: any, param5: number, param6: string, param7: any): void;

            public startService(param0: any): any;

            public checkUriPermission(param0: any, param1: number, param2: number, param3: number): number;

            public checkCallingOrSelfUriPermission(param0: any, param1: number): number;

            public getSharedPreferences(param0: string, param1: number): any;

            public enforceCallingPermission(param0: string, param1: string): void;

            public grantUriPermission(param0: string, param1: any, param2: number): void;

            public getCodeCacheDir(): any;

            public startActivities(param0: native.Array<any>, param1: any): void;

            public getExternalCacheDir(): any;

            public setWallpaper(param0: any): void;

            public createPackageContext(param0: string, param1: number): android.content.Context;

            public isRestricted(): boolean;

            public checkUriPermission(param0: any, param1: string, param2: string, param3: number, param4: number, param5: number): number;

            public getSystemServiceName(param0: any): string;

            public getContentResolver(): any;

            public enforceCallingOrSelfPermission(param0: string, param1: string): void;

            public getNoBackupFilesDir(): any;

            public startActivity(param0: any): void;

            public enforcePermission(param0: string, param1: number, param2: number, param3: string): void;

            public sendBroadcast(param0: any): void;
        }
    }
}

