
import javautilconcurrentExecutor = java.util.concurrent.Executor;
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
declare module android {
    export module os {
        export abstract class AsyncTask extends javalangObject {
            public static SERIAL_EXECUTOR: javautilconcurrentExecutor;
            public static THREAD_POOL_EXECUTOR: javautilconcurrentExecutor;

            public executeOnExecutor(param0: javautilconcurrentExecutor, param1: native.Array<javalangObject>): android.os.AsyncTask;

            public execute(param0: native.Array<javalangObject>): android.os.AsyncTask;
            public static execute(param0: javalangRunnable): void;

            public doInBackground(param0: native.Array<javalangObject>): javalangObject;

            public isCancelled(): boolean;

            public constructor();

            public onCancelled(param0: javalangObject): void;

            public get(param0: number, param1: javautilconcurrentTimeUnit): javalangObject;

            public cancel(param0: boolean): boolean;

            public onProgressUpdate(param0: native.Array<javalangObject>): void;

            public get(): javalangObject;

            public onCancelled(): void;

            public onPostExecute(param0: javalangObject): void;

            public getStatus(): android.os.AsyncTask.Status;

            public onPreExecute(): void;

            public publishProgress(param0: native.Array<javalangObject>): void;
        }
        export module AsyncTask {
            export class Status extends javalangEnum {
                public static FINISHED: android.os.AsyncTask.Status;
                public static PENDING: android.os.AsyncTask.Status;
                public static RUNNING: android.os.AsyncTask.Status;

                public static values(): native.Array<android.os.AsyncTask.Status>;

                public static valueOf(param0: string): android.os.AsyncTask.Status;
                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
        }
    }
}

/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module os {
        export class BadParcelableException extends android.util.AndroidRuntimeException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor(param0: javalangException);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module android {
    export module os {
        export class BaseBundle extends javalangObject {
            public keySet(): javautilSet;

            public getDoubleArray(param0: string): native.Array<number>;

            public putString(param0: string, param1: string): void;

            public getBoolean(param0: string): boolean;

            public getLongArray(param0: string): native.Array<number>;

            public getLong(param0: string, param1: number): number;

            public putAll(param0: android.os.PersistableBundle): void;

            public putBoolean(param0: string, param1: boolean): void;

            public putLong(param0: string, param1: number): void;

            public putDouble(param0: string, param1: number): void;

            public remove(param0: string): void;

            public getBooleanArray(param0: string): native.Array<boolean>;

            public getStringArray(param0: string): native.Array<string>;

            public putStringArray(param0: string, param1: native.Array<string>): void;

            public containsKey(param0: string): boolean;

            public clear(): void;

            public getLong(param0: string): number;

            public getInt(param0: string): number;

            public size(): number;

            public isEmpty(): boolean;

            public getInt(param0: string, param1: number): number;

            public putLongArray(param0: string, param1: native.Array<number>): void;

            public putIntArray(param0: string, param1: native.Array<number>): void;

            public getString(param0: string): string;

            public putBooleanArray(param0: string, param1: native.Array<boolean>): void;

            public putInt(param0: string, param1: number): void;

            public getIntArray(param0: string): native.Array<number>;

            public getDouble(param0: string, param1: number): number;
            public getDouble(param0: string): number;

            public getBoolean(param0: string, param1: boolean): boolean;

            public putDoubleArray(param0: string, param1: native.Array<number>): void;

            public getString(param0: string, param1: string): string;

            public get(param0: string): javalangObject;
        }
    }
}

declare module android {
    export module os {
        export class BatteryManager extends javalangObject {
            public static ACTION_CHARGING: string;
            public static ACTION_DISCHARGING: string;
            public static BATTERY_HEALTH_COLD: number;
            public static BATTERY_HEALTH_DEAD: number;
            public static BATTERY_HEALTH_GOOD: number;
            public static BATTERY_HEALTH_OVERHEAT: number;
            public static BATTERY_HEALTH_OVER_VOLTAGE: number;
            public static BATTERY_HEALTH_UNKNOWN: number;
            public static BATTERY_HEALTH_UNSPECIFIED_FAILURE: number;
            public static BATTERY_PLUGGED_AC: number;
            public static BATTERY_PLUGGED_USB: number;
            public static BATTERY_PLUGGED_WIRELESS: number;
            public static BATTERY_PROPERTY_CAPACITY: number;
            public static BATTERY_PROPERTY_CHARGE_COUNTER: number;
            public static BATTERY_PROPERTY_CURRENT_AVERAGE: number;
            public static BATTERY_PROPERTY_CURRENT_NOW: number;
            public static BATTERY_PROPERTY_ENERGY_COUNTER: number;
            public static BATTERY_STATUS_CHARGING: number;
            public static BATTERY_STATUS_DISCHARGING: number;
            public static BATTERY_STATUS_FULL: number;
            public static BATTERY_STATUS_NOT_CHARGING: number;
            public static BATTERY_STATUS_UNKNOWN: number;
            public static EXTRA_HEALTH: string;
            public static EXTRA_ICON_SMALL: string;
            public static EXTRA_LEVEL: string;
            public static EXTRA_PLUGGED: string;
            public static EXTRA_PRESENT: string;
            public static EXTRA_SCALE: string;
            public static EXTRA_STATUS: string;
            public static EXTRA_TECHNOLOGY: string;
            public static EXTRA_TEMPERATURE: string;
            public static EXTRA_VOLTAGE: string;

            public isCharging(): boolean;

            public getIntProperty(param0: number): number;

            public getLongProperty(param0: number): number;
        }
    }
}

/// <reference path="./android.os.IInterface.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.UserHandle.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module os {
        export class Binder extends javalangObject implements android.os.IBinder {
            public pingBinder(): boolean;

            public static joinThreadPool(): void;

            public isBinderAlive(): boolean;

            public queryLocalInterface(param0: string): android.os.IInterface;

            public constructor();

            public dump(param0: javaioFileDescriptor, param1: native.Array<string>): void;

            public dumpAsync(param0: javaioFileDescriptor, param1: native.Array<string>): void;

            public static clearCallingIdentity(): number;

            public static getCallingPid(): number;

            public static flushPendingCommands(): void;

            public static restoreCallingIdentity(param0: number): void;

            public transact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;

            public static getCallingUserHandle(): android.os.UserHandle;

            public attachInterface(param0: android.os.IInterface, param1: string): void;

            public onTransact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;

            public dump(param0: javaioFileDescriptor, param1: javaioPrintWriter, param2: native.Array<string>): void;

            public static getCallingUid(): number;

            public linkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): void;

            public getInterfaceDescriptor(): string;

            public finalize(): void;

            public unlinkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): boolean;
        }
    }
}

declare module android {
    export module os {
        export class Build extends javalangObject {
            public static BOARD: string;
            public static BOOTLOADER: string;
            public static BRAND: string;
            public static CPU_ABI: string;
            public static CPU_ABI2: string;
            public static DEVICE: string;
            public static DISPLAY: string;
            public static FINGERPRINT: string;
            public static HARDWARE: string;
            public static HOST: string;
            public static ID: string;
            public static MANUFACTURER: string;
            public static MODEL: string;
            public static PRODUCT: string;
            public static RADIO: string;
            public static SERIAL: string;
            public static SUPPORTED_32_BIT_ABIS: native.Array<string>;
            public static SUPPORTED_64_BIT_ABIS: native.Array<string>;
            public static SUPPORTED_ABIS: native.Array<string>;
            public static TAGS: string;
            public static TIME: number;
            public static TYPE: string;
            public static UNKNOWN: string;
            public static USER: string;

            public constructor();

            public static getRadioVersion(): string;
        }
        export module Build {
            export class VERSION extends javalangObject {
                public static BASE_OS: string;
                public static CODENAME: string;
                public static INCREMENTAL: string;
                public static PREVIEW_SDK_INT: number;
                public static RELEASE: string;
                public static SDK: string;
                public static SDK_INT: number;
                public static SECURITY_PATCH: string;

                public constructor();
            }
            export class VERSION_CODES extends javalangObject {
                public static BASE: number;
                public static BASE_1_1: number;
                public static CUPCAKE: number;
                public static CUR_DEVELOPMENT: number;
                public static DONUT: number;
                public static ECLAIR: number;
                public static ECLAIR_0_1: number;
                public static ECLAIR_MR1: number;
                public static FROYO: number;
                public static GINGERBREAD: number;
                public static GINGERBREAD_MR1: number;
                public static HONEYCOMB: number;
                public static HONEYCOMB_MR1: number;
                public static HONEYCOMB_MR2: number;
                public static ICE_CREAM_SANDWICH: number;
                public static ICE_CREAM_SANDWICH_MR1: number;
                public static JELLY_BEAN: number;
                public static JELLY_BEAN_MR1: number;
                public static JELLY_BEAN_MR2: number;
                public static KITKAT: number;
                public static KITKAT_WATCH: number;
                public static LOLLIPOP: number;
                public static LOLLIPOP_MR1: number;
                public static M: number;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./android.util.Size.d.ts" />
/// <reference path="./android.util.SizeF.d.ts" />
/// <reference path="./android.util.SparseArray.d.ts" />
/// <reference path="./java.io.Serializable.d.ts" />
/// <reference path="./java.lang.Byte.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module android {
    export module os {
        export class Bundle extends android.os.BaseBundle implements javalangCloneable, android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static EMPTY: android.os.Bundle;

            public setClassLoader(param0: javalangClassLoader): void;

            public getIntegerArrayList(param0: string): javautilArrayList;

            public putShortArray(param0: string, param1: native.Array<number>): void;

            public constructor(param0: android.os.Bundle);

            public putBinder(param0: string, param1: android.os.IBinder): void;

            public putByte(param0: string, param1: number): void;

            public clone(): javalangObject;

            public putCharSequenceArrayList(param0: string, param1: javautilArrayList): void;

            public readFromParcel(param0: android.os.Parcel): void;

            public putFloat(param0: string, param1: number): void;

            public putStringArrayList(param0: string, param1: javautilArrayList): void;

            public getShortArray(param0: string): native.Array<number>;

            public putSizeF(param0: string, param1: android.util.SizeF): void;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getParcelableArray(param0: string): native.Array<android.os.Parcelable>;

            public getClassLoader(): javalangClassLoader;

            public clear(): void;

            public getSerializable(param0: string): javaioSerializable;

            public getSize(param0: string): android.util.Size;

            public constructor(param0: number);

            public putSerializable(param0: string, param1: javaioSerializable): void;

            public getByte(param0: string): number;

            public constructor();

            public getSizeF(param0: string): android.util.SizeF;

            public getFloat(param0: string): number;

            public putSparseParcelableArray(param0: string, param1: android.util.SparseArray): void;

            public putParcelableArrayList(param0: string, param1: javautilArrayList): void;

            public describeContents(): number;

            public getStringArrayList(param0: string): javautilArrayList;

            public getParcelableArrayList(param0: string): javautilArrayList;

            public getFloatArray(param0: string): native.Array<number>;

            public putCharSequence(param0: string, param1: string): void;

            public getParcelable(param0: string): android.os.Parcelable;

            public getChar(param0: string, param1: string): string;

            public getCharSequenceArrayList(param0: string): javautilArrayList;

            public putCharSequenceArray(param0: string, param1: native.Array<javalangCharSequence>): void;

            public getCharSequenceArray(param0: string): native.Array<javalangCharSequence>;

            public getCharSequence(param0: string, param1: string): string;

            public putSize(param0: string, param1: android.util.Size): void;

            public getByte(param0: string, param1: number): javalangByte;

            public putAll(param0: android.os.PersistableBundle): void;

            public constructor(param0: android.os.PersistableBundle);

            public putParcelableArray(param0: string, param1: native.Array<android.os.Parcelable>): void;

            public putShort(param0: string, param1: number): void;

            public putIntegerArrayList(param0: string, param1: javautilArrayList): void;

            public hasFileDescriptors(): boolean;

            public getShort(param0: string, param1: number): number;

            public getBinder(param0: string): android.os.IBinder;

            public putParcelable(param0: string, param1: android.os.Parcelable): void;

            public getSparseParcelableArray(param0: string): android.util.SparseArray;

            public getBundle(param0: string): android.os.Bundle;

            public putByteArray(param0: string, param1: native.Array<number>): void;

            public getFloat(param0: string, param1: number): number;

            public putBundle(param0: string, param1: android.os.Bundle): void;

            public getCharArray(param0: string): native.Array<string>;

            public getByteArray(param0: string): native.Array<number>;

            public putChar(param0: string, param1: string): void;

            public getCharSequence(param0: string): string;

            public putAll(param0: android.os.Bundle): void;

            public toString(): string;

            public putFloatArray(param0: string, param1: native.Array<number>): void;

            public putCharArray(param0: string, param1: native.Array<string>): void;

            public getChar(param0: string): string;

            public getShort(param0: string): number;

            public constructor(param0: javalangClassLoader);
        }
    }
}

declare module android {
    export module os {
        export class CancellationSignal extends javalangObject {
            public cancel(): void;

            public constructor();

            public isCanceled(): boolean;

            public throwIfCanceled(): void;

            public setOnCancelListener(param0: android.os.CancellationSignal.OnCancelListener): void;
        }
        export module CancellationSignal {
            export class OnCancelListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.os.CancellationSignal$OnCancelListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onCancel(): void;
                });

                public onCancel(): void;
            }
        }
    }
}

declare module android {
    export module os {
        export class ConditionVariable extends javalangObject {
            public constructor(param0: boolean);

            public block(param0: number): boolean;

            public open(): void;

            public constructor();

            public block(): void;

            public close(): void;
        }
    }
}

declare module android {
    export module os {
        export abstract class CountDownTimer extends javalangObject {
            public onFinish(): void;

            public start(): android.os.CountDownTimer;

            public cancel(): void;

            public constructor(param0: number, param1: number);

            public onTick(param0: number): void;
        }
    }
}

/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module os {
        export class DeadObjectException extends android.os.RemoteException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor(param0: javalangException);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module android {
    export module os {
        export class Debug extends javalangObject {
            public static SHOW_CLASSLOADER: number;
            public static SHOW_FULL_DETAIL: number;
            public static SHOW_INITIALIZED: number;
            public static TRACE_COUNT_ALLOCS: number;

            public static getBinderDeathObjectCount(): number;

            public static getBinderSentTransactions(): number;

            public static resetThreadGcInvocationCount(): void;

            public static getGlobalExternalFreedSize(): number;

            public static getGlobalGcInvocationCount(): number;

            public static resetGlobalExternalAllocSize(): void;

            public static resetGlobalAllocCount(): void;

            public static resetGlobalExternalAllocCount(): void;

            public static getGlobalExternalAllocCount(): number;

            public static resetGlobalExternalFreedSize(): void;

            public static getGlobalAllocSize(): number;

            public static startNativeTracing(): void;

            public static getNativeHeapSize(): number;

            public static getThreadExternalAllocSize(): number;

            public static getPss(): number;

            public static startMethodTracing(param0: string, param1: number): void;

            public static resetGlobalClassInitCount(): void;

            public static resetGlobalClassInitTime(): void;

            public static getGlobalFreedCount(): number;

            public static getThreadGcInvocationCount(): number;

            public static startMethodTracing(param0: string): void;

            public static resetGlobalFreedSize(): void;

            public static getNativeHeapFreeSize(): number;

            public static getBinderLocalObjectCount(): number;

            public static setGlobalAllocationLimit(param0: number): number;

            public static waitingForDebugger(): boolean;

            public static getNativeHeapAllocatedSize(): number;

            public static resetGlobalGcInvocationCount(): void;

            public static enableEmulatorTraceOutput(): void;

            public static getGlobalExternalAllocSize(): number;

            public static waitForDebugger(): void;

            public static startMethodTracing(param0: string, param1: number, param2: number): void;

            public static stopNativeTracing(): void;

            public static resetGlobalFreedCount(): void;

            public static setAllocationLimit(param0: number): number;

            public static getGlobalExternalFreedCount(): number;

            public static getThreadAllocSize(): number;

            public static dumpHprofData(param0: string): void;

            public static stopMethodTracing(): void;

            public static resetThreadAllocCount(): void;

            public static printLoadedClasses(param0: number): void;

            public static startMethodTracing(): void;

            public static getGlobalClassInitTime(): number;

            public static getThreadAllocCount(): number;

            public static getBinderProxyObjectCount(): number;

            public static resetGlobalExternalFreedCount(): void;

            public static startAllocCounting(): void;

            public static getGlobalFreedSize(): number;

            public static getMemoryInfo(param0: android.os.Debug.MemoryInfo): void;

            public static startMethodTracingSampling(param0: string, param1: number, param2: number): void;

            public static dumpService(param0: string, param1: javaioFileDescriptor, param2: native.Array<string>): boolean;

            public static resetThreadExternalAllocSize(): void;

            public static resetGlobalAllocSize(): void;

            public static resetAllCounts(): void;

            public static resetThreadExternalAllocCount(): void;

            public static getGlobalClassInitCount(): number;

            public static getRuntimeStat(param0: string): string;

            public static resetThreadAllocSize(): void;

            public static getRuntimeStats(): javautilMap;

            public static changeDebugPort(param0: number): void;

            public static getBinderReceivedTransactions(): number;

            public static isDebuggerConnected(): boolean;

            public static threadCpuTimeNanos(): number;

            public static getGlobalAllocCount(): number;

            public static getThreadExternalAllocCount(): number;

            public static getLoadedClassCount(): number;

            public static stopAllocCounting(): void;
        }
        export module Debug {
            export class InstructionCount extends javalangObject {
                public globalMethodInvocations(): number;

                public collect(): boolean;

                public globalTotal(): number;

                public resetAndStart(): boolean;

                public constructor();
            }
            export class MemoryInfo extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public dalvikPrivateDirty: number;
                public dalvikPss: number;
                public dalvikSharedDirty: number;
                public nativePrivateDirty: number;
                public nativePss: number;
                public nativeSharedDirty: number;
                public otherPrivateDirty: number;
                public otherPss: number;
                public otherSharedDirty: number;

                public getTotalSwappablePss(): number;

                public getTotalSharedClean(): number;

                public getMemoryStats(): javautilMap;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public getTotalPrivateClean(): number;

                public readFromParcel(param0: android.os.Parcel): void;

                public getTotalSharedDirty(): number;

                public getMemoryStat(param0: string): string;

                public getTotalPss(): number;

                public constructor();

                public getTotalPrivateDirty(): number;
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module os {
        export class DropBoxManager extends javalangObject {
            public static ACTION_DROPBOX_ENTRY_ADDED: string;
            public static EXTRA_TAG: string;
            public static EXTRA_TIME: string;
            public static IS_EMPTY: number;
            public static IS_GZIPPED: number;
            public static IS_TEXT: number;

            public addText(param0: string, param1: string): void;

            public getNextEntry(param0: string, param1: number): android.os.DropBoxManager.Entry;

            public constructor();

            public isTagEnabled(param0: string): boolean;

            public addData(param0: string, param1: native.Array<number>, param2: number): void;

            public addFile(param0: string, param1: javaioFile, param2: number): void;
        }
        export module DropBoxManager {
            export class Entry extends javalangObject implements android.os.Parcelable, javaioCloseable {
                public static CREATOR: android.os.Parcelable.Creator;

                public constructor(param0: string, param1: number, param2: android.os.ParcelFileDescriptor, param3: number);
                public constructor(param0: string, param1: number, param2: native.Array<number>, param3: number);

                public close(): void;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getTag(): string;

                public getInputStream(): javaioInputStream;

                public getTimeMillis(): number;

                public constructor(param0: string, param1: number, param2: javaioFile, param3: number);
                public constructor(param0: string, param1: number, param2: string);
                public constructor(param0: string, param1: number);

                public describeContents(): number;

                public getFlags(): number;

                public getText(param0: number): string;
            }
        }
    }
}

/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module os {
        export class Environment extends javalangObject {
            public static DIRECTORY_ALARMS: string;
            public static DIRECTORY_DCIM: string;
            public static DIRECTORY_DOCUMENTS: string;
            public static DIRECTORY_DOWNLOADS: string;
            public static DIRECTORY_MOVIES: string;
            public static DIRECTORY_MUSIC: string;
            public static DIRECTORY_NOTIFICATIONS: string;
            public static DIRECTORY_PICTURES: string;
            public static DIRECTORY_PODCASTS: string;
            public static DIRECTORY_RINGTONES: string;
            public static MEDIA_BAD_REMOVAL: string;
            public static MEDIA_CHECKING: string;
            public static MEDIA_EJECTING: string;
            public static MEDIA_MOUNTED: string;
            public static MEDIA_MOUNTED_READ_ONLY: string;
            public static MEDIA_NOFS: string;
            public static MEDIA_REMOVED: string;
            public static MEDIA_SHARED: string;
            public static MEDIA_UNKNOWN: string;
            public static MEDIA_UNMOUNTABLE: string;
            public static MEDIA_UNMOUNTED: string;

            public static getExternalStorageDirectory(): javaioFile;

            public static getExternalStorageState(param0: javaioFile): string;
            public static getExternalStorageState(): string;

            public static getDataDirectory(): javaioFile;

            public static getStorageState(param0: javaioFile): string;

            public constructor();

            public static isExternalStorageRemovable(param0: javaioFile): boolean;

            public static isExternalStorageEmulated(): boolean;

            public static getDownloadCacheDirectory(): javaioFile;

            public static isExternalStorageRemovable(): boolean;

            public static getExternalStoragePublicDirectory(param0: string): javaioFile;

            public static getRootDirectory(): javaioFile;

            public static isExternalStorageEmulated(param0: javaioFile): boolean;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module os {
        export abstract class FileObserver extends javalangObject {
            public static ACCESS: number;
            public static ALL_EVENTS: number;
            public static ATTRIB: number;
            public static CLOSE_NOWRITE: number;
            public static CLOSE_WRITE: number;
            public static CREATE: number;
            public static DELETE: number;
            public static DELETE_SELF: number;
            public static MODIFY: number;
            public static MOVED_FROM: number;
            public static MOVED_TO: number;
            public static MOVE_SELF: number;
            public static OPEN: number;

            public stopWatching(): void;

            public onEvent(param0: number, param1: string): void;

            public constructor(param0: string, param1: number);

            public startWatching(): void;

            public constructor(param0: string);

            public finalize(): void;
        }
    }
}

/// <reference path="./android.os.Looper.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module os {
        export class Handler extends javalangObject {
            public obtainMessage(): android.os.Message;

            public removeCallbacks(param0: javalangRunnable): void;

            public postAtTime(param0: javalangRunnable, param1: number): boolean;

            public constructor(param0: android.os.Looper, param1: android.os.Handler.Callback);
            public constructor(param0: android.os.Looper);

            public sendMessageAtFrontOfQueue(param0: android.os.Message): boolean;

            public removeMessages(param0: number, param1: javalangObject): void;

            public sendEmptyMessageDelayed(param0: number, param1: number): boolean;

            public hasMessages(param0: number): boolean;

            public removeCallbacksAndMessages(param0: javalangObject): void;

            public obtainMessage(param0: number, param1: number, param2: number, param3: javalangObject): android.os.Message;

            public sendMessageDelayed(param0: android.os.Message, param1: number): boolean;

            public dispatchMessage(param0: android.os.Message): void;

            public getLooper(): android.os.Looper;

            public handleMessage(param0: android.os.Message): void;

            public removeCallbacks(param0: javalangRunnable, param1: javalangObject): void;

            public sendMessage(param0: android.os.Message): boolean;

            public getMessageName(param0: android.os.Message): string;

            public obtainMessage(param0: number): android.os.Message;

            public post(param0: javalangRunnable): boolean;

            public postDelayed(param0: javalangRunnable, param1: number): boolean;

            public removeMessages(param0: number): void;

            public obtainMessage(param0: number, param1: number, param2: number): android.os.Message;

            public postAtTime(param0: javalangRunnable, param1: javalangObject, param2: number): boolean;

            public sendEmptyMessage(param0: number): boolean;

            public hasMessages(param0: number, param1: javalangObject): boolean;

            public constructor(param0: android.os.Handler.Callback);

            public obtainMessage(param0: number, param1: javalangObject): android.os.Message;

            public constructor();

            public postAtFrontOfQueue(param0: javalangRunnable): boolean;

            public toString(): string;

            public sendMessageAtTime(param0: android.os.Message, param1: number): boolean;

            public dump(param0: android.util.Printer, param1: string): void;

            public sendEmptyMessageAtTime(param0: number, param1: number): boolean;
        }
        export module Handler {
            export class Callback extends javalangObject {
                /**
                 * Constructs a new instance of the android.os.Handler$Callback interface with the provided implementation.
                 */
                public constructor(implementation: {
                    handleMessage(param0: android.os.Message): boolean;
                });

                public handleMessage(param0: android.os.Message): boolean;
            }
        }
    }
}

import javalangThreadGroup = java.lang.ThreadGroup;
/// <reference path="./android.os.Looper.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.ThreadGroup.d.ts" />
declare module android {
    export module os {
        export class HandlerThread extends javalangThread {
            public constructor(param0: javalangThreadGroup, param1: string);
            public constructor();
            public constructor(param0: javalangRunnable);

            public onLooperPrepared(): void;

            public quit(): boolean;

            public getThreadId(): number;

            public constructor(param0: javalangThreadGroup, param1: javalangRunnable, param2: string, param3: number);
            public constructor(param0: javalangRunnable, param1: string);
            public constructor(param0: javalangThreadGroup, param1: javalangRunnable);
            public constructor(param0: string, param1: number);

            public quitSafely(): boolean;

            public getLooper(): android.os.Looper;

            public run(): void;

            public constructor(param0: string);
            public constructor(param0: javalangThreadGroup, param1: javalangRunnable, param2: string);
        }
    }
}

/// <reference path="./android.os.IInterface.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module os {
        export class IBinder extends javalangObject {
            /**
             * Constructs a new instance of the android.os.IBinder interface with the provided implementation.
             */
            public constructor(implementation: {
                getInterfaceDescriptor(): string;
                pingBinder(): boolean;
                isBinderAlive(): boolean;
                queryLocalInterface(param0: string): android.os.IInterface;
                dump(param0: javaioFileDescriptor, param1: native.Array<string>): void;
                dumpAsync(param0: javaioFileDescriptor, param1: native.Array<string>): void;
                transact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
                linkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): void;
                unlinkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): boolean;
            });

            public static TWEET_TRANSACTION: number;
            public static FLAG_ONEWAY: number;
            public static LIKE_TRANSACTION: number;
            public static INTERFACE_TRANSACTION: number;
            public static LAST_CALL_TRANSACTION: number;
            public static FIRST_CALL_TRANSACTION: number;
            public static PING_TRANSACTION: number;
            public static DUMP_TRANSACTION: number;

            public pingBinder(): boolean;

            public transact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;

            public isBinderAlive(): boolean;

            public queryLocalInterface(param0: string): android.os.IInterface;

            public dump(param0: javaioFileDescriptor, param1: native.Array<string>): void;

            public dumpAsync(param0: javaioFileDescriptor, param1: native.Array<string>): void;

            public linkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): void;

            public getInterfaceDescriptor(): string;

            public unlinkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): boolean;
        }
        export module IBinder {
            export class DeathRecipient extends javalangObject {
                /**
                 * Constructs a new instance of the android.os.IBinder$DeathRecipient interface with the provided implementation.
                 */
                public constructor(implementation: {
                    binderDied(): void;
                });

                public binderDied(): void;
            }
        }
    }
}

/// <reference path="./android.os.IBinder.d.ts" />
declare module android {
    export module os {
        export class IInterface extends javalangObject {
            /**
             * Constructs a new instance of the android.os.IInterface interface with the provided implementation.
             */
            public constructor(implementation: {
                asBinder(): android.os.IBinder;
            });

            public asBinder(): android.os.IBinder;
        }
    }
}

/// <reference path="./android.os.MessageQueue.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Thread.d.ts" />
declare module android {
    export module os {
        export class Looper extends javalangObject {
            public getQueue(): android.os.MessageQueue;

            public static myQueue(): android.os.MessageQueue;

            public static loop(): void;

            public setMessageLogging(param0: android.util.Printer): void;

            public static myLooper(): android.os.Looper;

            public toString(): string;

            public static prepareMainLooper(): void;

            public static prepare(): void;

            public quitSafely(): void;

            public getThread(): javalangThread;

            public dump(param0: android.util.Printer, param1: string): void;

            public static getMainLooper(): android.os.Looper;

            public isCurrentThread(): boolean;

            public quit(): void;
        }
    }
}

/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module os {
        export class MemoryFile extends javalangObject {
            public isPurgingAllowed(): boolean;

            public allowPurging(param0: boolean): boolean;

            public readBytes(param0: native.Array<number>, param1: number, param2: number, param3: number): number;

            public constructor(param0: string, param1: number);

            public length(): number;

            public getOutputStream(): javaioOutputStream;

            public close(): void;

            public finalize(): void;

            public getInputStream(): javaioInputStream;

            public writeBytes(param0: native.Array<number>, param1: number, param2: number, param3: number): void;
        }
    }
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.Messenger.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module os {
        export class Message extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public arg1: number;
            public arg2: number;
            public obj: javalangObject;
            public replyTo: android.os.Messenger;
            public sendingUid: number;
            public what: number;

            public sendToTarget(): void;

            public setTarget(param0: android.os.Handler): void;

            public static obtain(): android.os.Message;
            public static obtain(param0: android.os.Message): android.os.Message;

            public setData(param0: android.os.Bundle): void;

            public constructor();

            public static obtain(param0: android.os.Handler, param1: number, param2: number, param3: number, param4: javalangObject): android.os.Message;

            public getTarget(): android.os.Handler;

            public getCallback(): javalangRunnable;

            public static obtain(param0: android.os.Handler, param1: javalangRunnable): android.os.Message;
            public static obtain(param0: android.os.Handler, param1: number): android.os.Message;
            public static obtain(param0: android.os.Handler, param1: number, param2: number, param3: number): android.os.Message;

            public toString(): string;

            public peekData(): android.os.Bundle;

            public recycle(): void;

            public getWhen(): number;

            public setAsynchronous(param0: boolean): void;

            public describeContents(): number;

            public getData(): android.os.Bundle;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public isAsynchronous(): boolean;

            public static obtain(param0: android.os.Handler): android.os.Message;

            public copyFrom(param0: android.os.Message): void;

            public static obtain(param0: android.os.Handler, param1: number, param2: javalangObject): android.os.Message;
        }
    }
}

/// <reference path="./java.io.FileDescriptor.d.ts" />
declare module android {
    export module os {
        export class MessageQueue extends javalangObject {
            public addIdleHandler(param0: android.os.MessageQueue.IdleHandler): void;

            public removeOnFileDescriptorEventListener(param0: javaioFileDescriptor): void;

            public isIdle(): boolean;

            public removeIdleHandler(param0: android.os.MessageQueue.IdleHandler): void;

            public addOnFileDescriptorEventListener(param0: javaioFileDescriptor, param1: number, param2: android.os.MessageQueue.OnFileDescriptorEventListener): void;

            public finalize(): void;
        }
        export module MessageQueue {
            export class IdleHandler extends javalangObject {
                /**
                 * Constructs a new instance of the android.os.MessageQueue$IdleHandler interface with the provided implementation.
                 */
                public constructor(implementation: {
                    queueIdle(): boolean;
                });

                public queueIdle(): boolean;
            }
            export class OnFileDescriptorEventListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.os.MessageQueue$OnFileDescriptorEventListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onFileDescriptorEvents(param0: javaioFileDescriptor, param1: number): number;
                });

                public static EVENT_ERROR: number;
                public static EVENT_INPUT: number;
                public static EVENT_OUTPUT: number;

                public onFileDescriptorEvents(param0: javaioFileDescriptor, param1: number): number;
            }
        }
    }
}

/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module os {
        export class Messenger extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public static writeMessengerOrNullToParcel(param0: android.os.Messenger, param1: android.os.Parcel): void;

            public send(param0: android.os.Message): void;

            public getBinder(): android.os.IBinder;

            public constructor(param0: android.os.Handler);

            public static readMessengerOrNullFromParcel(param0: android.os.Parcel): android.os.Messenger;

            public equals(param0: javalangObject): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public constructor(param0: android.os.IBinder);

            public hashCode(): number;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module os {
        export class NetworkOnMainThreadException extends javalangRuntimeException {
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
    export module os {
        export class OperationCanceledException extends javalangRuntimeException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.IInterface.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./android.util.Size.d.ts" />
/// <reference path="./android.util.SizeF.d.ts" />
/// <reference path="./android.util.SparseArray.d.ts" />
/// <reference path="./android.util.SparseBooleanArray.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.Serializable.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module android {
    export module os {
        export class Parcel extends javalangObject {
            public static STRING_CREATOR: android.os.Parcelable.Creator;

            public readFloatArray(param0: native.Array<number>): void;

            public readValue(param0: javalangClassLoader): javalangObject;

            public writeSize(param0: android.util.Size): void;

            public readString(): string;

            public readByteArray(param0: native.Array<number>): void;

            public static obtain(): android.os.Parcel;

            public writeFloat(param0: number): void;

            public readSizeF(): android.util.SizeF;

            public writeArray(param0: native.Array<javalangObject>): void;

            public createStringArrayList(): javautilArrayList;

            public setDataPosition(param0: number): void;

            public writeTypedArray(param0: native.Array<android.os.Parcelable>, param1: number): void;

            public recycle(): void;

            public readTypedList(param0: javautilList, param1: android.os.Parcelable.Creator): void;

            public readInt(): number;

            public readFloat(): number;

            public readException(): void;

            public readStringList(param0: javautilList): void;

            public readList(param0: javautilList, param1: javalangClassLoader): void;

            public writeSerializable(param0: javaioSerializable): void;

            public writeBinderArray(param0: native.Array<android.os.IBinder>): void;

            public writeLong(param0: number): void;

            public setDataSize(param0: number): void;

            public writeCharArray(param0: native.Array<string>): void;

            public writeStrongInterface(param0: android.os.IInterface): void;

            public readLongArray(param0: native.Array<number>): void;

            public createCharArray(): native.Array<string>;

            public readTypedObject(param0: android.os.Parcelable.Creator): javalangObject;

            public writeBooleanArray(param0: native.Array<boolean>): void;

            public readFileDescriptor(): android.os.ParcelFileDescriptor;

            public readException(param0: number, param1: string): void;

            public readArrayList(param0: javalangClassLoader): javautilArrayList;

            public unmarshall(param0: native.Array<number>, param1: number, param2: number): void;

            public writeParcelableArray(param0: native.Array<android.os.Parcelable>, param1: number): void;

            public dataCapacity(): number;

            public writeException(param0: javalangException): void;

            public writeTypedObject(param0: android.os.Parcelable, param1: number): void;

            public readByte(): number;

            public readPersistableBundle(param0: javalangClassLoader): android.os.PersistableBundle;

            public createDoubleArray(): native.Array<number>;

            public createTypedArrayList(param0: android.os.Parcelable.Creator): javautilArrayList;

            public readParcelable(param0: javalangClassLoader): android.os.Parcelable;

            public writeInterfaceToken(param0: string): void;

            public readBooleanArray(param0: native.Array<boolean>): void;

            public appendFrom(param0: android.os.Parcel, param1: number, param2: number): void;

            public createTypedArray(param0: android.os.Parcelable.Creator): native.Array<javalangObject>;

            public readStrongBinder(): android.os.IBinder;

            public readMap(param0: javautilMap, param1: javalangClassLoader): void;

            public createBinderArrayList(): javautilArrayList;

            public dataPosition(): number;

            public readStringArray(param0: native.Array<string>): void;

            public readTypedArray(param0: native.Array<javalangObject>, param1: android.os.Parcelable.Creator): void;

            public createIntArray(): native.Array<number>;

            public writeValue(param0: javalangObject): void;

            public writeBundle(param0: android.os.Bundle): void;

            public writePersistableBundle(param0: android.os.PersistableBundle): void;

            public enforceInterface(param0: string): void;

            public readBundle(): android.os.Bundle;

            public writeIntArray(param0: native.Array<number>): void;

            public writeLongArray(param0: native.Array<number>): void;

            public readArray(param0: javalangClassLoader): native.Array<javalangObject>;

            public writeStringList(param0: javautilList): void;

            public writeFloatArray(param0: native.Array<number>): void;

            public writeStrongBinder(param0: android.os.IBinder): void;

            public dataSize(): number;

            public readIntArray(param0: native.Array<number>): void;

            public writeByteArray(param0: native.Array<number>): void;

            public createLongArray(): native.Array<number>;

            public writeParcelable(param0: android.os.Parcelable, param1: number): void;

            public readBundle(param0: javalangClassLoader): android.os.Bundle;

            public setDataCapacity(param0: number): void;

            public readSparseBooleanArray(): android.util.SparseBooleanArray;

            public writeStringArray(param0: native.Array<string>): void;

            public writeBinderList(param0: javautilList): void;

            public createByteArray(): native.Array<number>;

            public writeList(param0: javautilList): void;

            public readHashMap(param0: javalangClassLoader): javautilHashMap;

            public writeTypedList(param0: javautilList): void;

            public readCharArray(param0: native.Array<string>): void;

            public readParcelableArray(param0: javalangClassLoader): native.Array<android.os.Parcelable>;

            public readDoubleArray(param0: native.Array<number>): void;

            public writeFileDescriptor(param0: javaioFileDescriptor): void;

            public createStringArray(): native.Array<string>;

            public writeByteArray(param0: native.Array<number>, param1: number, param2: number): void;

            public readSparseArray(param0: javalangClassLoader): android.util.SparseArray;

            public marshall(): native.Array<number>;

            public createFloatArray(): native.Array<number>;

            public readBinderList(param0: javautilList): void;

            public writeString(param0: string): void;

            public writeSizeF(param0: android.util.SizeF): void;

            public readDouble(): number;

            public readSize(): android.util.Size;

            public hasFileDescriptors(): boolean;

            public readSerializable(): javaioSerializable;

            public writeNoException(): void;

            public finalize(): void;

            public readPersistableBundle(): android.os.PersistableBundle;

            public writeInt(param0: number): void;

            public readLong(): number;

            public writeByte(param0: number): void;

            public writeDouble(param0: number): void;

            public createBooleanArray(): native.Array<boolean>;

            public writeMap(param0: javautilMap): void;

            public writeDoubleArray(param0: native.Array<number>): void;

            public createBinderArray(): native.Array<android.os.IBinder>;

            public dataAvail(): number;

            public readBinderArray(param0: native.Array<android.os.IBinder>): void;

            public writeSparseArray(param0: android.util.SparseArray): void;

            public writeSparseBooleanArray(param0: android.util.SparseBooleanArray): void;
        }
    }
}

/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.IOException.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.net.DatagramSocket.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
declare module android {
    export module os {
        export class ParcelFileDescriptor extends javalangObject implements android.os.Parcelable, javaioCloseable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static MODE_APPEND: number;
            public static MODE_CREATE: number;
            public static MODE_READ_ONLY: number;
            public static MODE_READ_WRITE: number;
            public static MODE_TRUNCATE: number;
            public static MODE_WORLD_READABLE: number;
            public static MODE_WORLD_WRITEABLE: number;
            public static MODE_WRITE_ONLY: number;

            public dup(): android.os.ParcelFileDescriptor;

            public constructor(param0: android.os.ParcelFileDescriptor);

            public canDetectErrors(): boolean;

            public static fromSocket(param0: javanetSocket): android.os.ParcelFileDescriptor;

            public static fromFd(param0: number): android.os.ParcelFileDescriptor;

            public getStatSize(): number;

            public getFd(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public static open(param0: javaioFile, param1: number, param2: android.os.Handler, param3: android.os.ParcelFileDescriptor.OnCloseListener): android.os.ParcelFileDescriptor;
            public static open(param0: javaioFile, param1: number): android.os.ParcelFileDescriptor;

            public static parseMode(param0: string): number;

            public close(): void;

            public static adoptFd(param0: number): android.os.ParcelFileDescriptor;

            public finalize(): void;

            public static createReliableSocketPair(): native.Array<android.os.ParcelFileDescriptor>;

            public static createReliablePipe(): native.Array<android.os.ParcelFileDescriptor>;

            public static createSocketPair(): native.Array<android.os.ParcelFileDescriptor>;

            public static dup(param0: javaioFileDescriptor): android.os.ParcelFileDescriptor;

            public static createPipe(): native.Array<android.os.ParcelFileDescriptor>;

            public static fromDatagramSocket(param0: javanetDatagramSocket): android.os.ParcelFileDescriptor;

            public toString(): string;

            public getFileDescriptor(): javaioFileDescriptor;

            public detachFd(): number;

            public checkError(): void;

            public closeWithError(param0: string): void;

            public describeContents(): number;
        }
        export module ParcelFileDescriptor {
            export class AutoCloseInputStream extends javaioFileInputStream {
                public close(): void;

                public constructor(param0: android.os.ParcelFileDescriptor);
                public constructor(param0: javaioFile);
                public constructor(param0: string);
                public constructor(param0: javaioFileDescriptor);
                public constructor();
            }
            export class AutoCloseOutputStream extends javaioFileOutputStream {
                public constructor(param0: javaioFile, param1: boolean);

                public close(): void;

                public constructor(param0: string, param1: boolean);
                public constructor(param0: android.os.ParcelFileDescriptor);
                public constructor(param0: javaioFile);
                public constructor(param0: string);
                public constructor(param0: javaioFileDescriptor);
                public constructor();

                public flush(): void;
            }
            export class FileDescriptorDetachedException extends javaioIOException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
            export class OnCloseListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.os.ParcelFileDescriptor$OnCloseListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onClose(param0: javaioIOException): void;
                });

                public onClose(param0: javaioIOException): void;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module os {
        export class ParcelFormatException extends javalangRuntimeException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />
declare module android {
    export module os {
        export class ParcelUuid extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public static fromString(param0: string): android.os.ParcelUuid;

            public toString(): string;

            public equals(param0: javalangObject): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public constructor(param0: javautilUUID);

            public getUuid(): javautilUUID;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module os {
        export class Parcelable extends javalangObject {
            /**
             * Constructs a new instance of the android.os.Parcelable interface with the provided implementation.
             */
            public constructor(implementation: {
                describeContents(): number;
                writeToParcel(param0: android.os.Parcel, param1: number): void;
            });

            public static PARCELABLE_WRITE_RETURN_VALUE: number;
            public static CONTENTS_FILE_DESCRIPTOR: number;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;
        }
        export module Parcelable {
            export class ClassLoaderCreator extends javalangObject implements android.os.Parcelable.Creator {
                /**
                 * Constructs a new instance of the android.os.Parcelable$ClassLoaderCreator interface with the provided implementation.
                 */
                public constructor(implementation: {
                    createFromParcel(param0: android.os.Parcel, param1: javalangClassLoader): javalangObject;
                    createFromParcel(param0: android.os.Parcel): javalangObject;
                    newArray(param0: number): native.Array<javalangObject>;
                });

                public createFromParcel(param0: android.os.Parcel, param1: javalangClassLoader): javalangObject;
                public createFromParcel(param0: android.os.Parcel): javalangObject;

                public newArray(param0: number): native.Array<javalangObject>;
            }
            export class Creator extends javalangObject {
                /**
                 * Constructs a new instance of the android.os.Parcelable$Creator interface with the provided implementation.
                 */
                public constructor(implementation: {
                    createFromParcel(param0: android.os.Parcel): javalangObject;
                    newArray(param0: number): native.Array<javalangObject>;
                });

                public createFromParcel(param0: android.os.Parcel): javalangObject;

                public newArray(param0: number): native.Array<javalangObject>;
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module os {
        export class PatternMatcher extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static PATTERN_LITERAL: number;
            public static PATTERN_PREFIX: number;
            public static PATTERN_SIMPLE_GLOB: number;

            public getType(): number;

            public getPath(): string;

            public toString(): string;

            public match(param0: string): boolean;

            public constructor(param0: string, param1: number);
            public constructor(param0: android.os.Parcel);

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module os {
        export class PersistableBundle extends android.os.BaseBundle implements javalangCloneable, android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static EMPTY: android.os.PersistableBundle;

            public getPersistableBundle(param0: string): android.os.PersistableBundle;

            public toString(): string;

            public constructor(param0: android.os.PersistableBundle);

            public describeContents(): number;

            public constructor(param0: number);

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public clone(): javalangObject;

            public constructor();

            public putPersistableBundle(param0: string, param1: android.os.PersistableBundle): void;
        }
    }
}

/// <reference path="./android.os.WorkSource.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module os {
        export class PowerManager extends javalangObject {
            public static ACQUIRE_CAUSES_WAKEUP: number;
            public static ACTION_DEVICE_IDLE_MODE_CHANGED: string;
            public static ACTION_POWER_SAVE_MODE_CHANGED: string;
            public static FULL_WAKE_LOCK: number;
            public static ON_AFTER_RELEASE: number;
            public static PARTIAL_WAKE_LOCK: number;
            public static PROXIMITY_SCREEN_OFF_WAKE_LOCK: number;
            public static RELEASE_FLAG_WAIT_FOR_NO_PROXIMITY: number;
            public static SCREEN_BRIGHT_WAKE_LOCK: number;
            public static SCREEN_DIM_WAKE_LOCK: number;

            public isInteractive(): boolean;

            public reboot(param0: string): void;

            public isDeviceIdleMode(): boolean;

            public isWakeLockLevelSupported(param0: number): boolean;

            public isIgnoringBatteryOptimizations(param0: string): boolean;

            public newWakeLock(param0: number, param1: string): android.os.PowerManager.WakeLock;

            public isPowerSaveMode(): boolean;

            public isScreenOn(): boolean;
        }
        export module PowerManager {
            export class WakeLock extends javalangObject {
                public release(): void;

                public isHeld(): boolean;

                public acquire(param0: number): void;

                public finalize(): void;

                public release(param0: number): void;

                public setWorkSource(param0: android.os.WorkSource): void;

                public acquire(): void;

                public toString(): string;

                public setReferenceCounted(param0: boolean): void;
            }
        }
    }
}

/// <reference path="./android.os.UserHandle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module os {
        export class Process extends javalangObject {
            public static FIRST_APPLICATION_UID: number;
            public static LAST_APPLICATION_UID: number;
            public static PHONE_UID: number;
            public static SIGNAL_KILL: number;
            public static SIGNAL_QUIT: number;
            public static SIGNAL_USR1: number;
            public static SYSTEM_UID: number;
            public static THREAD_PRIORITY_AUDIO: number;
            public static THREAD_PRIORITY_BACKGROUND: number;
            public static THREAD_PRIORITY_DEFAULT: number;
            public static THREAD_PRIORITY_DISPLAY: number;
            public static THREAD_PRIORITY_FOREGROUND: number;
            public static THREAD_PRIORITY_LESS_FAVORABLE: number;
            public static THREAD_PRIORITY_LOWEST: number;
            public static THREAD_PRIORITY_MORE_FAVORABLE: number;
            public static THREAD_PRIORITY_URGENT_AUDIO: number;
            public static THREAD_PRIORITY_URGENT_DISPLAY: number;

            public static supportsProcesses(): boolean;

            public constructor();

            public static setThreadPriority(param0: number): void;

            public static myPid(): number;

            public static myUserHandle(): android.os.UserHandle;

            public static is64Bit(): boolean;

            public static sendSignal(param0: number, param1: number): void;

            public static getElapsedCpuTime(): number;

            public static myTid(): number;

            public static getUidForName(param0: string): number;

            public static myUid(): number;

            public static getThreadPriority(param0: number): number;

            public static getGidForName(param0: string): number;

            public static setThreadPriority(param0: number, param1: number): void;

            public static killProcess(param0: number): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.io.File.d.ts" />
declare module android {
    export module os {
        export class RecoverySystem extends javalangObject {
            public static verifyPackage(param0: javaioFile, param1: android.os.RecoverySystem.ProgressListener, param2: javaioFile): void;

            public static installPackage(param0: android.content.Context, param1: javaioFile): void;

            public static rebootWipeUserData(param0: android.content.Context): void;

            public static rebootWipeCache(param0: android.content.Context): void;
        }
        export module RecoverySystem {
            export class ProgressListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.os.RecoverySystem$ProgressListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onProgress(param0: number): void;
                });

                public onProgress(param0: number): void;
            }
        }
    }
}

/// <reference path="./android.os.IInterface.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module os {
        export class RemoteCallbackList extends javalangObject {
            public register(param0: android.os.IInterface): boolean;

            public getRegisteredCallbackCount(): number;

            public register(param0: android.os.IInterface, param1: javalangObject): boolean;

            public finishBroadcast(): void;

            public onCallbackDied(param0: android.os.IInterface): void;

            public unregister(param0: android.os.IInterface): boolean;

            public getBroadcastItem(param0: number): android.os.IInterface;

            public constructor();

            public onCallbackDied(param0: android.os.IInterface, param1: javalangObject): void;

            public kill(): void;

            public getBroadcastCookie(param0: number): javalangObject;

            public beginBroadcast(): number;
        }
    }
}

/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module os {
        export class RemoteException extends android.util.AndroidException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor(param0: javalangException);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module os {
        export class ResultReceiver extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public onReceiveResult(param0: number, param1: android.os.Bundle): void;

            public constructor(param0: android.os.Handler);

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public send(param0: number, param1: android.os.Bundle): void;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module os {
        export class StatFs extends javalangObject {
            public getFreeBytes(): number;

            public getBlockSizeLong(): number;

            public restat(param0: string): void;

            public getBlockCount(): number;

            public getAvailableBlocksLong(): number;

            public getFreeBlocksLong(): number;

            public getBlockSize(): number;

            public getAvailableBlocks(): number;

            public getAvailableBytes(): number;

            public getFreeBlocks(): number;

            public constructor(param0: string);

            public getBlockCountLong(): number;

            public getTotalBytes(): number;
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module os {
        export class StrictMode extends javalangObject {
            public static getThreadPolicy(): android.os.StrictMode.ThreadPolicy;

            public static allowThreadDiskWrites(): android.os.StrictMode.ThreadPolicy;

            public static enableDefaults(): void;

            public static noteSlowCall(param0: string): void;

            public static setThreadPolicy(param0: android.os.StrictMode.ThreadPolicy): void;

            public static getVmPolicy(): android.os.StrictMode.VmPolicy;

            public static allowThreadDiskReads(): android.os.StrictMode.ThreadPolicy;

            public static setVmPolicy(param0: android.os.StrictMode.VmPolicy): void;
        }
        export module StrictMode {
            export class ThreadPolicy extends javalangObject {
                public static LAX: android.os.StrictMode.ThreadPolicy;

                public toString(): string;
            }
            export module ThreadPolicy {
                export class Builder extends javalangObject {
                    public penaltyLog(): android.os.StrictMode.ThreadPolicy.Builder;

                    public detectNetwork(): android.os.StrictMode.ThreadPolicy.Builder;

                    public detectResourceMismatches(): android.os.StrictMode.ThreadPolicy.Builder;

                    public permitDiskReads(): android.os.StrictMode.ThreadPolicy.Builder;

                    public detectDiskWrites(): android.os.StrictMode.ThreadPolicy.Builder;

                    public penaltyDialog(): android.os.StrictMode.ThreadPolicy.Builder;

                    public penaltyDeathOnNetwork(): android.os.StrictMode.ThreadPolicy.Builder;

                    public detectCustomSlowCalls(): android.os.StrictMode.ThreadPolicy.Builder;

                    public constructor(param0: android.os.StrictMode.ThreadPolicy);

                    public penaltyDropBox(): android.os.StrictMode.ThreadPolicy.Builder;

                    public penaltyFlashScreen(): android.os.StrictMode.ThreadPolicy.Builder;

                    public detectDiskReads(): android.os.StrictMode.ThreadPolicy.Builder;

                    public permitAll(): android.os.StrictMode.ThreadPolicy.Builder;

                    public permitDiskWrites(): android.os.StrictMode.ThreadPolicy.Builder;

                    public penaltyDeath(): android.os.StrictMode.ThreadPolicy.Builder;

                    public detectAll(): android.os.StrictMode.ThreadPolicy.Builder;

                    public permitCustomSlowCalls(): android.os.StrictMode.ThreadPolicy.Builder;

                    public constructor();

                    public permitResourceMismatches(): android.os.StrictMode.ThreadPolicy.Builder;

                    public build(): android.os.StrictMode.ThreadPolicy;

                    public permitNetwork(): android.os.StrictMode.ThreadPolicy.Builder;
                }
            }
            export class VmPolicy extends javalangObject {
                public static LAX: android.os.StrictMode.VmPolicy;

                public toString(): string;
            }
            export module VmPolicy {
                export class Builder extends javalangObject {
                    public build(): android.os.StrictMode.VmPolicy;

                    public detectActivityLeaks(): android.os.StrictMode.VmPolicy.Builder;

                    public penaltyDeath(): android.os.StrictMode.VmPolicy.Builder;

                    public detectCleartextNetwork(): android.os.StrictMode.VmPolicy.Builder;

                    public detectLeakedSqlLiteObjects(): android.os.StrictMode.VmPolicy.Builder;

                    public penaltyLog(): android.os.StrictMode.VmPolicy.Builder;

                    public detectFileUriExposure(): android.os.StrictMode.VmPolicy.Builder;

                    public penaltyDropBox(): android.os.StrictMode.VmPolicy.Builder;

                    public detectAll(): android.os.StrictMode.VmPolicy.Builder;

                    public constructor();

                    public setClassInstanceLimit(param0: javalangClass, param1: number): android.os.StrictMode.VmPolicy.Builder;

                    public detectLeakedClosableObjects(): android.os.StrictMode.VmPolicy.Builder;

                    public detectLeakedRegistrationObjects(): android.os.StrictMode.VmPolicy.Builder;

                    public penaltyDeathOnCleartextNetwork(): android.os.StrictMode.VmPolicy.Builder;

                    public constructor(param0: android.os.StrictMode.VmPolicy);
                }
            }
        }
    }
}

declare module android {
    export module os {
        export class SystemClock extends javalangObject {
            public static currentThreadTimeMillis(): number;

            public static uptimeMillis(): number;

            public static sleep(param0: number): void;

            public static setCurrentTimeMillis(param0: number): boolean;

            public static elapsedRealtimeNanos(): number;

            public static elapsedRealtime(): number;
        }
    }
}

/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module os {
        export abstract class TokenWatcher extends javalangObject {
            public cleanup(param0: android.os.IBinder, param1: boolean): void;

            public isAcquired(): boolean;

            public dump(param0: javaioPrintWriter): void;

            public release(param0: android.os.IBinder): void;

            public constructor(param0: android.os.Handler, param1: string);

            public acquired(): void;

            public released(): void;

            public acquire(param0: android.os.IBinder, param1: string): void;

            public dump(): void;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module os {
        export class Trace extends javalangObject {
            public static endSection(): void;

            public static beginSection(param0: string): void;
        }
    }
}

/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module os {
        export class TransactionTooLargeException extends android.os.RemoteException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor(param0: javalangException);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module os {
        export class UserHandle extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public toString(): string;

            public static writeToParcel(param0: android.os.UserHandle, param1: android.os.Parcel): void;

            public equals(param0: javalangObject): boolean;

            public constructor(param0: android.os.Parcel);

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public static readFromParcel(param0: android.os.Parcel): android.os.UserHandle;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.UserHandle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module os {
        export class UserManager extends javalangObject {
            public static ALLOW_PARENT_PROFILE_APP_LINKING: string;
            public static DISALLOW_ADD_USER: string;
            public static DISALLOW_ADJUST_VOLUME: string;
            public static DISALLOW_APPS_CONTROL: string;
            public static DISALLOW_CONFIG_BLUETOOTH: string;
            public static DISALLOW_CONFIG_CELL_BROADCASTS: string;
            public static DISALLOW_CONFIG_CREDENTIALS: string;
            public static DISALLOW_CONFIG_MOBILE_NETWORKS: string;
            public static DISALLOW_CONFIG_TETHERING: string;
            public static DISALLOW_CONFIG_VPN: string;
            public static DISALLOW_CONFIG_WIFI: string;
            public static DISALLOW_CREATE_WINDOWS: string;
            public static DISALLOW_CROSS_PROFILE_COPY_PASTE: string;
            public static DISALLOW_DEBUGGING_FEATURES: string;
            public static DISALLOW_FACTORY_RESET: string;
            public static DISALLOW_FUN: string;
            public static DISALLOW_INSTALL_APPS: string;
            public static DISALLOW_INSTALL_UNKNOWN_SOURCES: string;
            public static DISALLOW_MODIFY_ACCOUNTS: string;
            public static DISALLOW_MOUNT_PHYSICAL_MEDIA: string;
            public static DISALLOW_NETWORK_RESET: string;
            public static DISALLOW_OUTGOING_BEAM: string;
            public static DISALLOW_OUTGOING_CALLS: string;
            public static DISALLOW_REMOVE_USER: string;
            public static DISALLOW_SAFE_BOOT: string;
            public static DISALLOW_SHARE_LOCATION: string;
            public static DISALLOW_SMS: string;
            public static DISALLOW_UNINSTALL_APPS: string;
            public static DISALLOW_UNMUTE_MICROPHONE: string;
            public static DISALLOW_USB_FILE_TRANSFER: string;
            public static ENSURE_VERIFY_APPS: string;
            public static KEY_RESTRICTIONS_PENDING: string;

            public getApplicationRestrictions(param0: string): android.os.Bundle;

            public isUserRunning(param0: android.os.UserHandle): boolean;

            public getUserProfiles(): javautilList;

            public isUserRunningOrStopping(param0: android.os.UserHandle): boolean;

            public setUserRestrictions(param0: android.os.Bundle, param1: android.os.UserHandle): void;

            public getUserCreationTime(param0: android.os.UserHandle): number;

            public setUserRestrictions(param0: android.os.Bundle): void;

            public isUserAGoat(): boolean;

            public getUserCount(): number;

            public isSystemUser(): boolean;

            public getUserName(): string;

            public getUserForSerialNumber(param0: number): android.os.UserHandle;

            public setRestrictionsChallenge(param0: string): boolean;

            public getUserRestrictions(): android.os.Bundle;

            public getSerialNumberForUser(param0: android.os.UserHandle): number;

            public setUserRestriction(param0: string, param1: boolean): void;

            public getUserRestrictions(param0: android.os.UserHandle): android.os.Bundle;

            public hasUserRestriction(param0: string): boolean;
        }
    }
}

/// <reference path="./android.media.AudioAttributes.d.ts" />
declare module android {
    export module os {
        export abstract class Vibrator extends javalangObject {
            public vibrate(param0: native.Array<number>, param1: number, param2: android.media.AudioAttributes): void;
            public vibrate(param0: number): void;
            public vibrate(param0: native.Array<number>, param1: number): void;

            public cancel(): void;

            public hasVibrator(): boolean;

            public vibrate(param0: number, param1: android.media.AudioAttributes): void;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module os {
        export class WorkSource extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public clear(): void;

            public diff(param0: android.os.WorkSource): boolean;

            public toString(): string;

            public equals(param0: javalangObject): boolean;

            public add(param0: android.os.WorkSource): boolean;

            public describeContents(): number;

            public constructor(param0: android.os.WorkSource);

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public constructor();

            public set(param0: android.os.WorkSource): void;

            public remove(param0: android.os.WorkSource): boolean;

            public hashCode(): number;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module os {
        export module storage {
            export abstract class OnObbStateChangeListener extends javalangObject {
                public static ERROR_ALREADY_MOUNTED: number;
                public static ERROR_COULD_NOT_MOUNT: number;
                public static ERROR_COULD_NOT_UNMOUNT: number;
                public static ERROR_INTERNAL: number;
                public static ERROR_NOT_MOUNTED: number;
                public static ERROR_PERMISSION_DENIED: number;
                public static MOUNTED: number;
                public static UNMOUNTED: number;

                public onObbStateChange(param0: string, param1: number): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.os.storage.OnObbStateChangeListener.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module os {
        export module storage {
            export class StorageManager extends javalangObject {
                public mountObb(param0: string, param1: string, param2: android.os.storage.OnObbStateChangeListener): boolean;

                public getMountedObbPath(param0: string): string;

                public isObbMounted(param0: string): boolean;

                public unmountObb(param0: string, param1: boolean, param2: android.os.storage.OnObbStateChangeListener): boolean;
            }
        }
    }
}
