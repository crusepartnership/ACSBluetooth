

import javalangThread = java.lang.Thread;
/// <reference path="./android.accounts.Account.d.ts" />
/// <reference path="./android.content.ContentProviderClient.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.SyncResult.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Thread.d.ts" />
declare module android {
    export module content {
        export abstract class AbstractThreadedSyncAdapter extends javalangObject {
            public static LOG_SYNC_DETAILS: number;

            public getSyncAdapterBinder(): android.os.IBinder;

            public onPerformSync(param0: android.accounts.Account, param1: android.os.Bundle, param2: string, param3: android.content.ContentProviderClient, param4: android.content.SyncResult): void;

            public onSyncCanceled(): void;

            public onSecurityException(param0: android.accounts.Account, param1: android.os.Bundle, param2: string, param3: android.content.SyncResult): void;

            public onSyncCanceled(param0: javalangThread): void;

            public constructor(param0: android.content.Context, param1: boolean);
            public constructor(param0: android.content.Context, param1: boolean, param2: boolean);

            public getContext(): android.content.Context;
        }
    }
}

import javalangRuntimeException = java.lang.RuntimeException;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module content {
        export class ActivityNotFoundException extends javalangRuntimeException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.content.AsyncQueryHandler.d.ts" />
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.Looper.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export abstract class AsyncQueryHandler extends android.os.Handler {
            public startQuery(param0: number, param1: javalangObject, param2: android.net.Uri, param3: native.Array<string>, param4: string, param5: native.Array<string>, param6: string): void;

            public onInsertComplete(param0: number, param1: javalangObject, param2: android.net.Uri): void;

            public constructor(param0: android.os.Looper, param1: android.os.Handler.Callback);

            public cancelOperation(param0: number): void;

            public constructor(param0: android.os.Handler.Callback);
            public constructor(param0: android.os.Looper);
            public constructor();
            public constructor(param0: android.content.ContentResolver);

            public startDelete(param0: number, param1: javalangObject, param2: android.net.Uri, param3: string, param4: native.Array<string>): void;

            public createHandler(param0: android.os.Looper): android.os.Handler;

            public startUpdate(param0: number, param1: javalangObject, param2: android.net.Uri, param3: android.content.ContentValues, param4: string, param5: native.Array<string>): void;

            public onUpdateComplete(param0: number, param1: javalangObject, param2: number): void;

            public onDeleteComplete(param0: number, param1: javalangObject, param2: number): void;

            public handleMessage(param0: android.os.Message): void;

            public onQueryComplete(param0: number, param1: javalangObject, param2: android.database.Cursor): void;

            public startInsert(param0: number, param1: javalangObject, param2: android.net.Uri, param3: android.content.ContentValues): void;
        }
        export module AsyncQueryHandler {
            export class WorkerArgs extends javalangObject {
                public cookie: javalangObject;
                public handler: android.os.Handler;
                public orderBy: string;
                public projection: native.Array<string>;
                public result: javalangObject;
                public selection: string;
                public selectionArgs: native.Array<string>;
                public uri: android.net.Uri;
                public values: android.content.ContentValues;

                public constructor();
            }
            export class WorkerHandler extends android.os.Handler {
                public constructor(param0: android.os.Handler.Callback);
                public constructor(param0: android.content.AsyncQueryHandler, param1: android.os.Looper);
                public constructor(param0: android.os.Looper);
                public constructor(param0: android.os.Looper, param1: android.os.Handler.Callback);
                public constructor();

                public handleMessage(param0: android.os.Message): void;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export abstract class AsyncTaskLoader extends android.content.Loader {
            public onCancelLoad(): boolean;

            public isLoadInBackgroundCanceled(): boolean;

            public setUpdateThrottle(param0: number): void;

            public constructor(param0: android.content.Context);

            public loadInBackground(): javalangObject;

            public onLoadInBackground(): javalangObject;

            public onCanceled(param0: javalangObject): void;

            public dump(param0: string, param1: javaioFileDescriptor, param2: javaioPrintWriter, param3: native.Array<string>): void;

            public cancelLoadInBackground(): void;

            public onForceLoad(): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export abstract class BroadcastReceiver extends javalangObject {
            public clearAbortBroadcast(): void;

            public isOrderedBroadcast(): boolean;

            public peekService(param0: android.content.Context, param1: android.content.Intent): android.os.IBinder;

            public getAbortBroadcast(): boolean;

            public goAsync(): android.content.BroadcastReceiver.PendingResult;

            public setResultData(param0: string): void;

            public onReceive(param0: android.content.Context, param1: android.content.Intent): void;

            public constructor();

            public setResultExtras(param0: android.os.Bundle): void;

            public getResultData(): string;

            public setResultCode(param0: number): void;

            public getDebugUnregister(): boolean;

            public abortBroadcast(): void;

            public getResultExtras(param0: boolean): android.os.Bundle;

            public setResult(param0: number, param1: string, param2: android.os.Bundle): void;

            public getResultCode(): number;

            public isInitialStickyBroadcast(): boolean;

            public setOrderedHint(param0: boolean): void;

            public setDebugUnregister(param0: boolean): void;
        }
        export module BroadcastReceiver {
            export class PendingResult extends javalangObject {
                public getResultExtras(param0: boolean): android.os.Bundle;

                public setResult(param0: number, param1: string, param2: android.os.Bundle): void;

                public clearAbortBroadcast(): void;

                public setResultCode(param0: number): void;

                public getAbortBroadcast(): boolean;

                public abortBroadcast(): void;

                public setResultData(param0: string): void;

                public getResultData(): string;

                public setResultExtras(param0: android.os.Bundle): void;

                public finish(): void;

                public getResultCode(): number;
            }
        }
    }
}

/// <reference path="./android.content.ClipDescription.d.ts" />
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export class ClipData extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public constructor(param0: android.content.ClipData);

            public getDescription(): android.content.ClipDescription;

            public constructor(param0: string, param1: native.Array<string>, param2: android.content.ClipData.Item);

            public static newPlainText(param0: string, param1: string): android.content.ClipData;

            public static newUri(param0: android.content.ContentResolver, param1: string, param2: android.net.Uri): android.content.ClipData;

            public getItemCount(): number;

            public toString(): string;

            public constructor(param0: android.content.ClipDescription, param1: android.content.ClipData.Item);

            public static newRawUri(param0: string, param1: android.net.Uri): android.content.ClipData;

            public getItemAt(param0: number): android.content.ClipData.Item;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public static newHtmlText(param0: string, param1: string, param2: string): android.content.ClipData;

            public addItem(param0: android.content.ClipData.Item): void;

            public static newIntent(param0: string, param1: android.content.Intent): android.content.ClipData;
        }
        export module ClipData {
            export class Item extends javalangObject {
                public constructor(param0: android.net.Uri);

                public getIntent(): android.content.Intent;

                public constructor(param0: string, param1: string, param2: android.content.Intent, param3: android.net.Uri);
                public constructor(param0: android.content.Intent);

                public toString(): string;

                public constructor(param0: string);

                public getText(): string;

                public coerceToText(param0: android.content.Context): string;

                public getHtmlText(): string;

                public getUri(): android.net.Uri;

                public coerceToStyledText(param0: android.content.Context): string;

                public constructor(param0: string, param1: android.content.Intent, param2: android.net.Uri);
                public constructor(param0: string, param1: string);

                public coerceToHtmlText(param0: android.content.Context): string;
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export class ClipDescription extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static MIMETYPE_TEXT_HTML: string;
            public static MIMETYPE_TEXT_INTENT: string;
            public static MIMETYPE_TEXT_PLAIN: string;
            public static MIMETYPE_TEXT_URILIST: string;

            public getLabel(): string;

            public hasMimeType(param0: string): boolean;

            public filterMimeTypes(param0: string): native.Array<string>;

            public toString(): string;

            public static compareMimeTypes(param0: string, param1: string): boolean;

            public getMimeTypeCount(): number;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public constructor(param0: android.content.ClipDescription);
            public constructor(param0: string, param1: native.Array<string>);

            public getMimeType(param0: number): string;
        }
    }
}

/// <reference path="./android.content.ClipData.d.ts" />
/// <reference path="./android.content.ClipDescription.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module content {
        export class ClipboardManager extends android.text.ClipboardManager {
            public hasPrimaryClip(): boolean;

            public setText(param0: string): void;

            public hasText(): boolean;

            public removePrimaryClipChangedListener(param0: android.content.ClipboardManager.OnPrimaryClipChangedListener): void;

            public getPrimaryClipDescription(): android.content.ClipDescription;

            public setPrimaryClip(param0: android.content.ClipData): void;

            public getText(): string;

            public getPrimaryClip(): android.content.ClipData;

            public addPrimaryClipChangedListener(param0: android.content.ClipboardManager.OnPrimaryClipChangedListener): void;
        }
        export module ClipboardManager {
            export class OnPrimaryClipChangedListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.content.ClipboardManager$OnPrimaryClipChangedListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onPrimaryClipChanged(): void;
                });

                public onPrimaryClipChanged(): void;
            }
        }
    }
}

/// <reference path="./android.content.res.Configuration.d.ts" />
declare module android {
    export module content {
        export class ComponentCallbacks extends javalangObject {
            /**
             * Constructs a new instance of the android.content.ComponentCallbacks interface with the provided implementation.
             */
            public constructor(implementation: {
                onConfigurationChanged(param0: android.content.res.Configuration): void;
                onLowMemory(): void;
            });

            public onConfigurationChanged(param0: android.content.res.Configuration): void;

            public onLowMemory(): void;
        }
    }
}

/// <reference path="./android.content.res.Configuration.d.ts" />
declare module android {
    export module content {
        export class ComponentCallbacks2 extends javalangObject implements android.content.ComponentCallbacks {
            /**
             * Constructs a new instance of the android.content.ComponentCallbacks2 interface with the provided implementation.
             */
            public constructor(implementation: {
                onTrimMemory(param0: number): void;
                onConfigurationChanged(param0: android.content.res.Configuration): void;
                onLowMemory(): void;
            });

            public static TRIM_MEMORY_RUNNING_MODERATE: number;
            public static TRIM_MEMORY_RUNNING_CRITICAL: number;
            public static TRIM_MEMORY_UI_HIDDEN: number;
            public static TRIM_MEMORY_COMPLETE: number;
            public static TRIM_MEMORY_BACKGROUND: number;
            public static TRIM_MEMORY_MODERATE: number;
            public static TRIM_MEMORY_RUNNING_LOW: number;

            public onConfigurationChanged(param0: android.content.res.Configuration): void;

            public onTrimMemory(param0: number): void;

            public onLowMemory(): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export class ComponentName extends javalangObject implements android.os.Parcelable, javalangCloneable {
            public static CREATOR: android.os.Parcelable.Creator;

            public static createRelative(param0: string, param1: string): android.content.ComponentName;

            public flattenToShortString(): string;

            public static writeToParcel(param0: android.content.ComponentName, param1: android.os.Parcel): void;

            public equals(param0: javalangObject): boolean;

            public constructor(param0: android.content.Context, param1: string);

            public getPackageName(): string;

            public toShortString(): string;

            public clone(): javalangObject;

            public getShortClassName(): string;

            public static unflattenFromString(param0: string): android.content.ComponentName;

            public static readFromParcel(param0: android.os.Parcel): android.content.ComponentName;

            public clone(): android.content.ComponentName;

            public constructor(param0: string, param1: string);
            public constructor(param0: android.content.Context, param1: javalangClass);

            public toString(): string;

            public compareTo(param0: android.content.ComponentName): number;

            public constructor(param0: android.os.Parcel);

            public getClassName(): string;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public static createRelative(param0: android.content.Context, param1: string): android.content.ComponentName;

            public flattenToString(): string;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.content.ContentProviderResult.d.ts" />
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.pm.PathPermission.d.ts" />
/// <reference path="./android.content.pm.ProviderInfo.d.ts" />
/// <reference path="./android.content.res.AssetFileDescriptor.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.CancellationSignal.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module android {
    export module content {
        export abstract class ContentProvider extends javalangObject implements android.content.ComponentCallbacks2 {
            public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: android.os.CancellationSignal): android.database.Cursor;

            public openFile(param0: android.net.Uri, param1: string, param2: android.os.CancellationSignal): android.os.ParcelFileDescriptor;

            public setPathPermissions(param0: native.Array<android.content.pm.PathPermission>): void;

            public delete(param0: android.net.Uri, param1: string, param2: native.Array<string>): number;

            public openAssetFile(param0: android.net.Uri, param1: string): android.content.res.AssetFileDescriptor;
            public openAssetFile(param0: android.net.Uri, param1: string, param2: android.os.CancellationSignal): android.content.res.AssetFileDescriptor;

            public getReadPermission(): string;

            public insert(param0: android.net.Uri, param1: android.content.ContentValues): android.net.Uri;

            public applyBatch(param0: javautilArrayList): native.Array<android.content.ContentProviderResult>;

            public onLowMemory(): void;

            public openFileHelper(param0: android.net.Uri, param1: string): android.os.ParcelFileDescriptor;

            public setReadPermission(param0: string): void;

            public getPathPermissions(): native.Array<android.content.pm.PathPermission>;

            public getType(param0: android.net.Uri): string;

            public getCallingPackage(): string;

            public onCreate(): boolean;

            public onTrimMemory(param0: number): void;

            public attachInfo(param0: android.content.Context, param1: android.content.pm.ProviderInfo): void;

            public openTypedAssetFile(param0: android.net.Uri, param1: string, param2: android.os.Bundle, param3: android.os.CancellationSignal): android.content.res.AssetFileDescriptor;

            public isTemporary(): boolean;

            public getContext(): android.content.Context;

            public shutdown(): void;

            public onConfigurationChanged(param0: android.content.res.Configuration): void;

            public uncanonicalize(param0: android.net.Uri): android.net.Uri;

            public update(param0: android.net.Uri, param1: android.content.ContentValues, param2: string, param3: native.Array<string>): number;

            public setWritePermission(param0: string): void;

            public getWritePermission(): string;

            public openPipeHelper(param0: android.net.Uri, param1: string, param2: android.os.Bundle, param3: javalangObject, param4: android.content.ContentProvider.PipeDataWriter): android.os.ParcelFileDescriptor;

            public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): android.database.Cursor;

            public constructor();

            public getStreamTypes(param0: android.net.Uri, param1: string): native.Array<string>;

            public openFile(param0: android.net.Uri, param1: string): android.os.ParcelFileDescriptor;

            public call(param0: string, param1: string, param2: android.os.Bundle): android.os.Bundle;

            public openTypedAssetFile(param0: android.net.Uri, param1: string, param2: android.os.Bundle): android.content.res.AssetFileDescriptor;

            public dump(param0: javaioFileDescriptor, param1: javaioPrintWriter, param2: native.Array<string>): void;

            public canonicalize(param0: android.net.Uri): android.net.Uri;

            public bulkInsert(param0: android.net.Uri, param1: native.Array<android.content.ContentValues>): number;
        }
        export module ContentProvider {
            export class PipeDataWriter extends javalangObject {
                /**
                 * Constructs a new instance of the android.content.ContentProvider$PipeDataWriter interface with the provided implementation.
                 */
                public constructor(implementation: {
                    writeDataToPipe(param0: android.os.ParcelFileDescriptor, param1: android.net.Uri, param2: string, param3: android.os.Bundle, param4: javalangObject): void;
                });

                public writeDataToPipe(param0: android.os.ParcelFileDescriptor, param1: android.net.Uri, param2: string, param3: android.os.Bundle, param4: javalangObject): void;
            }
        }
    }
}

/// <reference path="./android.content.ContentProvider.d.ts" />
/// <reference path="./android.content.ContentProviderResult.d.ts" />
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.content.res.AssetFileDescriptor.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.CancellationSignal.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module android {
    export module content {
        export class ContentProviderClient extends javalangObject {
            public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: android.os.CancellationSignal): android.database.Cursor;

            public uncanonicalize(param0: android.net.Uri): android.net.Uri;

            public openFile(param0: android.net.Uri, param1: string, param2: android.os.CancellationSignal): android.os.ParcelFileDescriptor;

            public update(param0: android.net.Uri, param1: android.content.ContentValues, param2: string, param3: native.Array<string>): number;

            public delete(param0: android.net.Uri, param1: string, param2: native.Array<string>): number;

            public openTypedAssetFileDescriptor(param0: android.net.Uri, param1: string, param2: android.os.Bundle): android.content.res.AssetFileDescriptor;

            public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): android.database.Cursor;

            public openAssetFile(param0: android.net.Uri, param1: string): android.content.res.AssetFileDescriptor;
            public openAssetFile(param0: android.net.Uri, param1: string, param2: android.os.CancellationSignal): android.content.res.AssetFileDescriptor;

            public insert(param0: android.net.Uri, param1: android.content.ContentValues): android.net.Uri;

            public applyBatch(param0: javautilArrayList): native.Array<android.content.ContentProviderResult>;

            public getStreamTypes(param0: android.net.Uri, param1: string): native.Array<string>;

            public getLocalContentProvider(): android.content.ContentProvider;

            public getType(param0: android.net.Uri): string;

            public openFile(param0: android.net.Uri, param1: string): android.os.ParcelFileDescriptor;

            public call(param0: string, param1: string, param2: android.os.Bundle): android.os.Bundle;

            public release(): boolean;

            public openTypedAssetFileDescriptor(param0: android.net.Uri, param1: string, param2: android.os.Bundle, param3: android.os.CancellationSignal): android.content.res.AssetFileDescriptor;

            public canonicalize(param0: android.net.Uri): android.net.Uri;

            public bulkInsert(param0: android.net.Uri, param1: native.Array<android.content.ContentValues>): number;

            public finalize(): void;
        }
    }
}

/// <reference path="./android.content.ContentProvider.d.ts" />
/// <reference path="./android.content.ContentProviderOperation.d.ts" />
/// <reference path="./android.content.ContentProviderResult.d.ts" />
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export class ContentProviderOperation extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public isUpdate(): boolean;

            public isDelete(): boolean;

            public static newDelete(param0: android.net.Uri): android.content.ContentProviderOperation.Builder;

            public static newAssertQuery(param0: android.net.Uri): android.content.ContentProviderOperation.Builder;

            public isWriteOperation(): boolean;

            public isAssertQuery(): boolean;

            public resolveValueBackReferences(param0: native.Array<android.content.ContentProviderResult>, param1: number): android.content.ContentValues;

            public getUri(): android.net.Uri;

            public isReadOperation(): boolean;

            public static newInsert(param0: android.net.Uri): android.content.ContentProviderOperation.Builder;

            public isInsert(): boolean;

            public resolveSelectionArgsBackReferences(param0: native.Array<android.content.ContentProviderResult>, param1: number): native.Array<string>;

            public toString(): string;

            public isYieldAllowed(): boolean;

            public apply(param0: android.content.ContentProvider, param1: native.Array<android.content.ContentProviderResult>, param2: number): android.content.ContentProviderResult;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public static newUpdate(param0: android.net.Uri): android.content.ContentProviderOperation.Builder;
        }
        export module ContentProviderOperation {
            export class Builder extends javalangObject {
                public withSelection(param0: string, param1: native.Array<string>): android.content.ContentProviderOperation.Builder;

                public withValueBackReference(param0: string, param1: number): android.content.ContentProviderOperation.Builder;

                public withValue(param0: string, param1: javalangObject): android.content.ContentProviderOperation.Builder;

                public withValues(param0: android.content.ContentValues): android.content.ContentProviderOperation.Builder;

                public withValueBackReferences(param0: android.content.ContentValues): android.content.ContentProviderOperation.Builder;

                public build(): android.content.ContentProviderOperation;

                public withYieldAllowed(param0: boolean): android.content.ContentProviderOperation.Builder;

                public withSelectionBackReference(param0: number, param1: number): android.content.ContentProviderOperation.Builder;

                public withExpectedCount(param0: number): android.content.ContentProviderOperation.Builder;
            }
        }
    }
}

/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
declare module android {
    export module content {
        export class ContentProviderResult extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public count: javalangInteger;
            public uri: android.net.Uri;

            public toString(): string;

            public constructor(param0: android.os.Parcel);

            public describeContents(): number;

            public constructor(param0: number);

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public constructor(param0: android.net.Uri);
        }
    }
}

import javautilObservable = java.util.Observable;
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module android {
    export module content {
        export class ContentQueryMap extends javautilObservable {
            public getValues(param0: string): android.content.ContentValues;

            public getRows(): javautilMap;

            public requery(): void;

            public setKeepUpdated(param0: boolean): void;

            public constructor();

            public close(): void;

            public finalize(): void;

            public constructor(param0: android.database.Cursor, param1: string, param2: boolean, param3: android.os.Handler);
        }
    }
}

/// <reference path="./android.accounts.Account.d.ts" />
/// <reference path="./android.content.ContentProviderClient.d.ts" />
/// <reference path="./android.content.ContentProviderResult.d.ts" />
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.SyncAdapterType.d.ts" />
/// <reference path="./android.content.SyncInfo.d.ts" />
/// <reference path="./android.content.SyncRequest.d.ts" />
/// <reference path="./android.content.SyncStatusObserver.d.ts" />
/// <reference path="./android.content.res.AssetFileDescriptor.d.ts" />
/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.CancellationSignal.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module content {
        export abstract class ContentResolver extends javalangObject {
            public static ANY_CURSOR_ITEM_TYPE: string;
            public static CURSOR_DIR_BASE_TYPE: string;
            public static CURSOR_ITEM_BASE_TYPE: string;
            public static EXTRA_SIZE: string;
            public static SCHEME_ANDROID_RESOURCE: string;
            public static SCHEME_CONTENT: string;
            public static SCHEME_FILE: string;
            public static SYNC_EXTRAS_ACCOUNT: string;
            public static SYNC_EXTRAS_DISCARD_LOCAL_DELETIONS: string;
            public static SYNC_EXTRAS_DO_NOT_RETRY: string;
            public static SYNC_EXTRAS_EXPEDITED: string;
            public static SYNC_EXTRAS_FORCE: string;
            public static SYNC_EXTRAS_IGNORE_BACKOFF: string;
            public static SYNC_EXTRAS_IGNORE_SETTINGS: string;
            public static SYNC_EXTRAS_INITIALIZE: string;
            public static SYNC_EXTRAS_MANUAL: string;
            public static SYNC_EXTRAS_OVERRIDE_TOO_MANY_DELETIONS: string;
            public static SYNC_EXTRAS_UPLOAD: string;
            public static SYNC_OBSERVER_TYPE_ACTIVE: number;
            public static SYNC_OBSERVER_TYPE_PENDING: number;
            public static SYNC_OBSERVER_TYPE_SETTINGS: number;

            public openAssetFileDescriptor(param0: android.net.Uri, param1: string): android.content.res.AssetFileDescriptor;

            public takePersistableUriPermission(param0: android.net.Uri, param1: number): void;

            public delete(param0: android.net.Uri, param1: string, param2: native.Array<string>): number;

            public static setMasterSyncAutomatically(param0: boolean): void;

            public static getIsSyncable(param0: android.accounts.Account, param1: string): number;

            public getType(param0: android.net.Uri): string;

            public getOutgoingPersistedUriPermissions(): javautilList;

            public static requestSync(param0: android.content.SyncRequest): void;

            public acquireUnstableContentProviderClient(param0: string): android.content.ContentProviderClient;

            public acquireContentProviderClient(param0: android.net.Uri): android.content.ContentProviderClient;

            public notifyChange(param0: android.net.Uri, param1: android.database.ContentObserver): void;

            public acquireContentProviderClient(param0: string): android.content.ContentProviderClient;

            public cancelSync(param0: android.net.Uri): void;

            public static removePeriodicSync(param0: android.accounts.Account, param1: string, param2: android.os.Bundle): void;

            public update(param0: android.net.Uri, param1: android.content.ContentValues, param2: string, param3: native.Array<string>): number;

            public static cancelSync(param0: android.accounts.Account, param1: string): void;

            public static getCurrentSyncs(): javautilList;

            public openTypedAssetFileDescriptor(param0: android.net.Uri, param1: string, param2: android.os.Bundle): android.content.res.AssetFileDescriptor;

            public acquireUnstableContentProviderClient(param0: android.net.Uri): android.content.ContentProviderClient;

            public static getMasterSyncAutomatically(): boolean;

            public static isSyncPending(param0: android.accounts.Account, param1: string): boolean;

            public openFileDescriptor(param0: android.net.Uri, param1: string): android.os.ParcelFileDescriptor;

            public applyBatch(param0: string, param1: javautilArrayList): native.Array<android.content.ContentProviderResult>;

            public getPersistedUriPermissions(): javautilList;

            public openInputStream(param0: android.net.Uri): javaioInputStream;

            public static setIsSyncable(param0: android.accounts.Account, param1: string, param2: number): void;

            public openTypedAssetFileDescriptor(param0: android.net.Uri, param1: string, param2: android.os.Bundle, param3: android.os.CancellationSignal): android.content.res.AssetFileDescriptor;

            public canonicalize(param0: android.net.Uri): android.net.Uri;

            public static getSyncAdapterTypes(): native.Array<android.content.SyncAdapterType>;

            public static removeStatusChangeListener(param0: javalangObject): void;

            public bulkInsert(param0: android.net.Uri, param1: native.Array<android.content.ContentValues>): number;

            public static isSyncActive(param0: android.accounts.Account, param1: string): boolean;

            public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: android.os.CancellationSignal): android.database.Cursor;

            public startSync(param0: android.net.Uri, param1: android.os.Bundle): void;

            public static addPeriodicSync(param0: android.accounts.Account, param1: string, param2: android.os.Bundle, param3: number): void;

            public call(param0: android.net.Uri, param1: string, param2: string, param3: android.os.Bundle): android.os.Bundle;

            public insert(param0: android.net.Uri, param1: android.content.ContentValues): android.net.Uri;

            public openFileDescriptor(param0: android.net.Uri, param1: string, param2: android.os.CancellationSignal): android.os.ParcelFileDescriptor;

            public static cancelSync(param0: android.content.SyncRequest): void;

            public notifyChange(param0: android.net.Uri, param1: android.database.ContentObserver, param2: boolean): void;

            public static getPeriodicSyncs(param0: android.accounts.Account, param1: string): javautilList;

            public static addStatusChangeListener(param0: number, param1: android.content.SyncStatusObserver): javalangObject;

            public openAssetFileDescriptor(param0: android.net.Uri, param1: string, param2: android.os.CancellationSignal): android.content.res.AssetFileDescriptor;

            public uncanonicalize(param0: android.net.Uri): android.net.Uri;

            public openOutputStream(param0: android.net.Uri, param1: string): javaioOutputStream;

            public unregisterContentObserver(param0: android.database.ContentObserver): void;

            public static setSyncAutomatically(param0: android.accounts.Account, param1: string, param2: boolean): void;

            public openOutputStream(param0: android.net.Uri): javaioOutputStream;

            public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): android.database.Cursor;

            public static validateSyncExtrasBundle(param0: android.os.Bundle): void;

            public getStreamTypes(param0: android.net.Uri, param1: string): native.Array<string>;

            public static getSyncAutomatically(param0: android.accounts.Account, param1: string): boolean;

            public registerContentObserver(param0: android.net.Uri, param1: boolean, param2: android.database.ContentObserver): void;

            public static requestSync(param0: android.accounts.Account, param1: string, param2: android.os.Bundle): void;

            public constructor(param0: android.content.Context);

            public static getCurrentSync(): android.content.SyncInfo;

            public releasePersistableUriPermission(param0: android.net.Uri, param1: number): void;
        }
    }
}

/// <reference path="./android.net.Uri.d.ts" />
declare module android {
    export module content {
        export class ContentUris extends javalangObject {
            public static parseId(param0: android.net.Uri): number;

            public static withAppendedId(param0: android.net.Uri, param1: number): android.net.Uri;

            public static appendId(param0: android.net.Uri.Builder, param1: number): android.net.Uri.Builder;

            public constructor();
        }
    }
}

import javalangByte = java.lang.Byte;
import javalangShort = java.lang.Short;
import javalangDouble = java.lang.Double;
import javalangBoolean = java.lang.Boolean;
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.Byte.d.ts" />
/// <reference path="./java.lang.Double.d.ts" />
/// <reference path="./java.lang.Float.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Short.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module android {
    export module content {
        export class ContentValues extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static TAG: string;

            public put(param0: string, param1: javalangLong): void;

            public keySet(): javautilSet;

            public equals(param0: javalangObject): boolean;

            public put(param0: string, param1: javalangFloat): void;

            public getAsDouble(param0: string): javalangDouble;

            public putAll(param0: android.content.ContentValues): void;

            public valueSet(): javautilSet;

            public getAsInteger(param0: string): javalangInteger;

            public getAsByteArray(param0: string): native.Array<number>;

            public getAsFloat(param0: string): javalangFloat;

            public remove(param0: string): void;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public containsKey(param0: string): boolean;

            public put(param0: string, param1: native.Array<number>): void;

            public getAsByte(param0: string): javalangByte;

            public put(param0: string, param1: javalangShort): void;

            public clear(): void;

            public putNull(param0: string): void;

            public size(): number;

            public getAsBoolean(param0: string): javalangBoolean;

            public constructor(param0: number);

            public put(param0: string, param1: javalangBoolean): void;

            public constructor();
            public constructor(param0: android.content.ContentValues);

            public put(param0: string, param1: javalangDouble): void;

            public getAsString(param0: string): string;

            public getAsLong(param0: string): javalangLong;

            public toString(): string;

            public put(param0: string, param1: javalangInteger): void;

            public describeContents(): number;

            public getAsShort(param0: string): javalangShort;

            public get(param0: string): javalangObject;

            public hashCode(): number;

            public put(param0: string, param1: string): void;
            public put(param0: string, param1: javalangByte): void;
        }
    }
}

import javaioFileInputStream = java.io.FileInputStream;
import javaioFileOutputStream = java.io.FileOutputStream;
/// <reference path="./android.content.BroadcastReceiver.d.ts" />
/// <reference path="./android.content.ComponentCallbacks.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.IntentFilter.d.ts" />
/// <reference path="./android.content.IntentSender.d.ts" />
/// <reference path="./android.content.ServiceConnection.d.ts" />
/// <reference path="./android.content.SharedPreferences.d.ts" />
/// <reference path="./android.content.pm.ApplicationInfo.d.ts" />
/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.content.res.AssetManager.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
/// <reference path="./android.database.DatabaseErrorHandler.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.Looper.d.ts" />
/// <reference path="./android.os.UserHandle.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.Display.d.ts" />
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

            public peekWallpaper(): android.graphics.drawable.Drawable;

            public checkCallingPermission(param0: string): number;

            public getPackageName(): string;

            public openFileInput(param0: string): javaioFileInputStream;

            public sendBroadcastAsUser(param0: android.content.Intent, param1: android.os.UserHandle, param2: string): void;

            public getExternalFilesDir(param0: string): javaioFile;

            public sendStickyBroadcast(param0: android.content.Intent): void;

            public unregisterReceiver(param0: android.content.BroadcastReceiver): void;

            public bindService(param0: android.content.Intent, param1: android.content.ServiceConnection, param2: number): boolean;

            public createConfigurationContext(param0: android.content.res.Configuration): android.content.Context;

            public checkCallingOrSelfPermission(param0: string): number;

            public getColor(param0: number): number;

            public getWallpaperDesiredMinimumWidth(): number;

            public getFilesDir(): javaioFile;

            public constructor();

            public getString(param0: number, param1: native.Array<javalangObject>): string;

            public revokeUriPermission(param0: android.net.Uri, param1: number): void;

            public obtainStyledAttributes(param0: android.util.AttributeSet, param1: native.Array<number>, param2: number, param3: number): android.content.res.TypedArray;

            public getDrawable(param0: number): android.graphics.drawable.Drawable;

            public checkSelfPermission(param0: string): number;

            public obtainStyledAttributes(param0: android.util.AttributeSet, param1: native.Array<number>): android.content.res.TypedArray;

            public getTheme(): android.content.res.Resources.Theme;

            public createDisplayContext(param0: android.view.Display): android.content.Context;

            public openOrCreateDatabase(param0: string, param1: number, param2: android.database.sqlite.SQLiteDatabase.CursorFactory): android.database.sqlite.SQLiteDatabase;

            public sendBroadcastAsUser(param0: android.content.Intent, param1: android.os.UserHandle): void;

            public getResources(): android.content.res.Resources;

            public unbindService(param0: android.content.ServiceConnection): void;

            public getSystemService(param0: string): javalangObject;

            public sendOrderedBroadcast(param0: android.content.Intent, param1: string, param2: android.content.BroadcastReceiver, param3: android.os.Handler, param4: number, param5: string, param6: android.os.Bundle): void;

            public deleteDatabase(param0: string): boolean;

            public getApplicationContext(): android.content.Context;

            public getText(param0: number): string;

            public unregisterComponentCallbacks(param0: android.content.ComponentCallbacks): void;

            public startActivity(param0: android.content.Intent, param1: android.os.Bundle): void;

            public startInstrumentation(param0: android.content.ComponentName, param1: string, param2: android.os.Bundle): boolean;

            public getDir(param0: string, param1: number): javaioFile;

            public obtainStyledAttributes(param0: number, param1: native.Array<number>): android.content.res.TypedArray;

            public checkPermission(param0: string, param1: number, param2: number): number;

            public enforceUriPermission(param0: android.net.Uri, param1: number, param2: number, param3: number, param4: string): void;

            public openOrCreateDatabase(param0: string, param1: number, param2: android.database.sqlite.SQLiteDatabase.CursorFactory, param3: android.database.DatabaseErrorHandler): android.database.sqlite.SQLiteDatabase;

            public getSystemService(param0: javalangClass): javalangObject;

            public startIntentSender(param0: android.content.IntentSender, param1: android.content.Intent, param2: number, param3: number, param4: number): void;

            public getFileStreamPath(param0: string): javaioFile;

            public removeStickyBroadcast(param0: android.content.Intent): void;

            public openFileOutput(param0: string, param1: number): javaioFileOutputStream;

            public enforceUriPermission(param0: android.net.Uri, param1: string, param2: string, param3: number, param4: number, param5: number, param6: string): void;

            public sendStickyOrderedBroadcast(param0: android.content.Intent, param1: android.content.BroadcastReceiver, param2: android.os.Handler, param3: number, param4: string, param5: android.os.Bundle): void;

            public getCacheDir(): javaioFile;

            public setTheme(param0: number): void;

            public deleteFile(param0: string): boolean;

            public getMainLooper(): android.os.Looper;

            public removeStickyBroadcastAsUser(param0: android.content.Intent, param1: android.os.UserHandle): void;

            public enforceCallingOrSelfUriPermission(param0: android.net.Uri, param1: number, param2: string): void;

            public getExternalMediaDirs(): native.Array<javaioFile>;

            public startIntentSender(param0: android.content.IntentSender, param1: android.content.Intent, param2: number, param3: number, param4: number, param5: android.os.Bundle): void;

            public getPackageResourcePath(): string;

            public checkCallingUriPermission(param0: android.net.Uri, param1: number): number;

            public databaseList(): native.Array<string>;

            public setWallpaper(param0: javaioInputStream): void;

            public getObbDirs(): native.Array<javaioFile>;

            public getWallpaper(): android.graphics.drawable.Drawable;

            public registerReceiver(param0: android.content.BroadcastReceiver, param1: android.content.IntentFilter, param2: string, param3: android.os.Handler): android.content.Intent;

            public sendOrderedBroadcast(param0: android.content.Intent, param1: string): void;

            public getObbDir(): javaioFile;

            public getExternalCacheDirs(): native.Array<javaioFile>;

            public getExternalFilesDirs(param0: string): native.Array<javaioFile>;

            public getClassLoader(): javalangClassLoader;

            public getAssets(): android.content.res.AssetManager;

            public startActivities(param0: native.Array<android.content.Intent>): void;

            public getPackageCodePath(): string;

            public getDatabasePath(param0: string): javaioFile;

            public getString(param0: number): string;

            public obtainStyledAttributes(param0: native.Array<number>): android.content.res.TypedArray;

            public getPackageManager(): android.content.pm.PackageManager;

            public getColorStateList(param0: number): android.content.res.ColorStateList;

            public registerComponentCallbacks(param0: android.content.ComponentCallbacks): void;

            public getWallpaperDesiredMinimumHeight(): number;

            public sendBroadcast(param0: android.content.Intent, param1: string): void;

            public enforceCallingUriPermission(param0: android.net.Uri, param1: number, param2: string): void;

            public stopService(param0: android.content.Intent): boolean;

            public sendStickyOrderedBroadcastAsUser(param0: android.content.Intent, param1: android.os.UserHandle, param2: android.content.BroadcastReceiver, param3: android.os.Handler, param4: number, param5: string, param6: android.os.Bundle): void;

            public getApplicationInfo(): android.content.pm.ApplicationInfo;

            public registerReceiver(param0: android.content.BroadcastReceiver, param1: android.content.IntentFilter): android.content.Intent;

            public sendStickyBroadcastAsUser(param0: android.content.Intent, param1: android.os.UserHandle): void;

            public sendOrderedBroadcastAsUser(param0: android.content.Intent, param1: android.os.UserHandle, param2: string, param3: android.content.BroadcastReceiver, param4: android.os.Handler, param5: number, param6: string, param7: android.os.Bundle): void;

            public startService(param0: android.content.Intent): android.content.ComponentName;

            public checkUriPermission(param0: android.net.Uri, param1: number, param2: number, param3: number): number;

            public checkCallingOrSelfUriPermission(param0: android.net.Uri, param1: number): number;

            public getSharedPreferences(param0: string, param1: number): android.content.SharedPreferences;

            public enforceCallingPermission(param0: string, param1: string): void;

            public grantUriPermission(param0: string, param1: android.net.Uri, param2: number): void;

            public getCodeCacheDir(): javaioFile;

            public startActivities(param0: native.Array<android.content.Intent>, param1: android.os.Bundle): void;

            public getExternalCacheDir(): javaioFile;

            public setWallpaper(param0: android.graphics.Bitmap): void;

            public createPackageContext(param0: string, param1: number): android.content.Context;

            public isRestricted(): boolean;

            public checkUriPermission(param0: android.net.Uri, param1: string, param2: string, param3: number, param4: number, param5: number): number;

            public getSystemServiceName(param0: javalangClass): string;

            public getContentResolver(): android.content.ContentResolver;

            public enforceCallingOrSelfPermission(param0: string, param1: string): void;

            public getNoBackupFilesDir(): javaioFile;

            public startActivity(param0: android.content.Intent): void;

            public enforcePermission(param0: string, param1: number, param2: number, param3: string): void;

            public sendBroadcast(param0: android.content.Intent): void;
        }
    }
}

/// <reference path="./android.content.BroadcastReceiver.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.IntentFilter.d.ts" />
/// <reference path="./android.content.IntentSender.d.ts" />
/// <reference path="./android.content.ServiceConnection.d.ts" />
/// <reference path="./android.content.SharedPreferences.d.ts" />
/// <reference path="./android.content.pm.ApplicationInfo.d.ts" />
/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.content.res.AssetManager.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.database.DatabaseErrorHandler.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.Looper.d.ts" />
/// <reference path="./android.os.UserHandle.d.ts" />
/// <reference path="./android.view.Display.d.ts" />
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
        export class ContextWrapper extends android.content.Context {
            public clearWallpaper(): void;

            public fileList(): native.Array<string>;

            public peekWallpaper(): android.graphics.drawable.Drawable;

            public checkCallingPermission(param0: string): number;

            public getPackageName(): string;

            public openFileInput(param0: string): javaioFileInputStream;

            public sendBroadcastAsUser(param0: android.content.Intent, param1: android.os.UserHandle, param2: string): void;

            public getExternalFilesDir(param0: string): javaioFile;

            public sendStickyBroadcast(param0: android.content.Intent): void;

            public unregisterReceiver(param0: android.content.BroadcastReceiver): void;

            public bindService(param0: android.content.Intent, param1: android.content.ServiceConnection, param2: number): boolean;

            public createConfigurationContext(param0: android.content.res.Configuration): android.content.Context;

            public checkCallingOrSelfPermission(param0: string): number;

            public getWallpaperDesiredMinimumWidth(): number;

            public getFilesDir(): javaioFile;

            public constructor();

            public revokeUriPermission(param0: android.net.Uri, param1: number): void;

            public checkSelfPermission(param0: string): number;

            public getTheme(): android.content.res.Resources.Theme;

            public createDisplayContext(param0: android.view.Display): android.content.Context;

            public openOrCreateDatabase(param0: string, param1: number, param2: android.database.sqlite.SQLiteDatabase.CursorFactory): android.database.sqlite.SQLiteDatabase;

            public sendBroadcastAsUser(param0: android.content.Intent, param1: android.os.UserHandle): void;

            public getResources(): android.content.res.Resources;

            public unbindService(param0: android.content.ServiceConnection): void;

            public getSystemService(param0: string): javalangObject;

            public sendOrderedBroadcast(param0: android.content.Intent, param1: string, param2: android.content.BroadcastReceiver, param3: android.os.Handler, param4: number, param5: string, param6: android.os.Bundle): void;

            public deleteDatabase(param0: string): boolean;

            public getApplicationContext(): android.content.Context;

            public startActivity(param0: android.content.Intent, param1: android.os.Bundle): void;

            public startInstrumentation(param0: android.content.ComponentName, param1: string, param2: android.os.Bundle): boolean;

            public getDir(param0: string, param1: number): javaioFile;

            public checkPermission(param0: string, param1: number, param2: number): number;

            public enforceUriPermission(param0: android.net.Uri, param1: number, param2: number, param3: number, param4: string): void;

            public openOrCreateDatabase(param0: string, param1: number, param2: android.database.sqlite.SQLiteDatabase.CursorFactory, param3: android.database.DatabaseErrorHandler): android.database.sqlite.SQLiteDatabase;

            public getSystemService(param0: javalangClass): javalangObject;

            public attachBaseContext(param0: android.content.Context): void;

            public startIntentSender(param0: android.content.IntentSender, param1: android.content.Intent, param2: number, param3: number, param4: number): void;

            public getFileStreamPath(param0: string): javaioFile;

            public removeStickyBroadcast(param0: android.content.Intent): void;

            public openFileOutput(param0: string, param1: number): javaioFileOutputStream;

            public enforceUriPermission(param0: android.net.Uri, param1: string, param2: string, param3: number, param4: number, param5: number, param6: string): void;

            public sendStickyOrderedBroadcast(param0: android.content.Intent, param1: android.content.BroadcastReceiver, param2: android.os.Handler, param3: number, param4: string, param5: android.os.Bundle): void;

            public getCacheDir(): javaioFile;

            public setTheme(param0: number): void;

            public constructor(param0: android.content.Context);

            public deleteFile(param0: string): boolean;

            public getMainLooper(): android.os.Looper;

            public removeStickyBroadcastAsUser(param0: android.content.Intent, param1: android.os.UserHandle): void;

            public enforceCallingOrSelfUriPermission(param0: android.net.Uri, param1: number, param2: string): void;

            public getExternalMediaDirs(): native.Array<javaioFile>;

            public startIntentSender(param0: android.content.IntentSender, param1: android.content.Intent, param2: number, param3: number, param4: number, param5: android.os.Bundle): void;

            public getPackageResourcePath(): string;

            public checkCallingUriPermission(param0: android.net.Uri, param1: number): number;

            public databaseList(): native.Array<string>;

            public setWallpaper(param0: javaioInputStream): void;

            public getObbDirs(): native.Array<javaioFile>;

            public getWallpaper(): android.graphics.drawable.Drawable;

            public registerReceiver(param0: android.content.BroadcastReceiver, param1: android.content.IntentFilter, param2: string, param3: android.os.Handler): android.content.Intent;

            public sendOrderedBroadcast(param0: android.content.Intent, param1: string): void;

            public getObbDir(): javaioFile;

            public getExternalCacheDirs(): native.Array<javaioFile>;

            public getExternalFilesDirs(param0: string): native.Array<javaioFile>;

            public getClassLoader(): javalangClassLoader;

            public getAssets(): android.content.res.AssetManager;

            public startActivities(param0: native.Array<android.content.Intent>): void;

            public getPackageCodePath(): string;

            public getDatabasePath(param0: string): javaioFile;

            public getPackageManager(): android.content.pm.PackageManager;

            public getWallpaperDesiredMinimumHeight(): number;

            public sendBroadcast(param0: android.content.Intent, param1: string): void;

            public enforceCallingUriPermission(param0: android.net.Uri, param1: number, param2: string): void;

            public stopService(param0: android.content.Intent): boolean;

            public sendStickyOrderedBroadcastAsUser(param0: android.content.Intent, param1: android.os.UserHandle, param2: android.content.BroadcastReceiver, param3: android.os.Handler, param4: number, param5: string, param6: android.os.Bundle): void;

            public getApplicationInfo(): android.content.pm.ApplicationInfo;

            public registerReceiver(param0: android.content.BroadcastReceiver, param1: android.content.IntentFilter): android.content.Intent;

            public getBaseContext(): android.content.Context;

            public sendStickyBroadcastAsUser(param0: android.content.Intent, param1: android.os.UserHandle): void;

            public sendOrderedBroadcastAsUser(param0: android.content.Intent, param1: android.os.UserHandle, param2: string, param3: android.content.BroadcastReceiver, param4: android.os.Handler, param5: number, param6: string, param7: android.os.Bundle): void;

            public startService(param0: android.content.Intent): android.content.ComponentName;

            public checkUriPermission(param0: android.net.Uri, param1: number, param2: number, param3: number): number;

            public checkCallingOrSelfUriPermission(param0: android.net.Uri, param1: number): number;

            public getSharedPreferences(param0: string, param1: number): android.content.SharedPreferences;

            public enforceCallingPermission(param0: string, param1: string): void;

            public grantUriPermission(param0: string, param1: android.net.Uri, param2: number): void;

            public getCodeCacheDir(): javaioFile;

            public startActivities(param0: native.Array<android.content.Intent>, param1: android.os.Bundle): void;

            public getExternalCacheDir(): javaioFile;

            public setWallpaper(param0: android.graphics.Bitmap): void;

            public createPackageContext(param0: string, param1: number): android.content.Context;

            public isRestricted(): boolean;

            public checkUriPermission(param0: android.net.Uri, param1: string, param2: string, param3: number, param4: number, param5: number): number;

            public getSystemServiceName(param0: javalangClass): string;

            public getContentResolver(): android.content.ContentResolver;

            public enforceCallingOrSelfPermission(param0: string, param1: string): void;

            public getNoBackupFilesDir(): javaioFile;

            public startActivity(param0: android.content.Intent): void;

            public enforcePermission(param0: string, param1: number, param2: number, param3: string): void;

            public sendBroadcast(param0: android.content.Intent): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export class CursorLoader extends android.content.AsyncTaskLoader {
            public setUri(param0: android.net.Uri): void;

            public onReset(): void;

            public loadInBackground(): android.database.Cursor;

            public getSelectionArgs(): native.Array<string>;

            public deliverResult(param0: android.database.Cursor): void;
            public deliverResult(param0: javalangObject): void;

            public getSortOrder(): string;

            public getSelection(): string;

            public onStartLoading(): void;

            public setSelection(param0: string): void;

            public getUri(): android.net.Uri;

            public setSortOrder(param0: string): void;

            public setProjection(param0: native.Array<string>): void;

            public setSelectionArgs(param0: native.Array<string>): void;

            public constructor(param0: android.content.Context, param1: android.net.Uri, param2: native.Array<string>, param3: string, param4: native.Array<string>, param5: string);

            public getProjection(): native.Array<string>;

            public constructor(param0: android.content.Context);

            public loadInBackground(): javalangObject;

            public onStopLoading(): void;

            public onCanceled(param0: javalangObject): void;
            public onCanceled(param0: android.database.Cursor): void;

            public dump(param0: string, param1: javaioFileDescriptor, param2: javaioPrintWriter, param3: native.Array<string>): void;

            public cancelLoadInBackground(): void;
        }
    }
}

/// <reference path="./android.content.DialogInterface.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
declare module android {
    export module content {
        export class DialogInterface extends javalangObject {
            /**
             * Constructs a new instance of the android.content.DialogInterface interface with the provided implementation.
             */
            public constructor(implementation: {
                cancel(): void;
                dismiss(): void;
            });

            public static BUTTON_POSITIVE: number;
            public static BUTTON_NEUTRAL: number;
            public static BUTTON3: number;
            public static BUTTON2: number;
            public static BUTTON1: number;
            public static BUTTON_NEGATIVE: number;

            public dismiss(): void;

            public cancel(): void;
        }
        export module DialogInterface {
            export class OnCancelListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.content.DialogInterface$OnCancelListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onCancel(param0: android.content.DialogInterface): void;
                });

                public onCancel(param0: android.content.DialogInterface): void;
            }
            export class OnClickListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.content.DialogInterface$OnClickListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onClick(param0: android.content.DialogInterface, param1: number): void;
                });

                public onClick(param0: android.content.DialogInterface, param1: number): void;
            }
            export class OnDismissListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.content.DialogInterface$OnDismissListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onDismiss(param0: android.content.DialogInterface): void;
                });

                public onDismiss(param0: android.content.DialogInterface): void;
            }
            export class OnKeyListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.content.DialogInterface$OnKeyListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onKey(param0: android.content.DialogInterface, param1: number, param2: android.view.KeyEvent): boolean;
                });

                public onKey(param0: android.content.DialogInterface, param1: number, param2: android.view.KeyEvent): boolean;
            }
            export class OnMultiChoiceClickListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.content.DialogInterface$OnMultiChoiceClickListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onClick(param0: android.content.DialogInterface, param1: number, param2: boolean): void;
                });

                public onClick(param0: android.content.DialogInterface, param1: number, param2: boolean): void;
            }
            export class OnShowListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.content.DialogInterface$OnShowListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onShow(param0: android.content.DialogInterface): void;
                });

                public onShow(param0: android.content.DialogInterface): void;
            }
        }
    }
}

/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module android {
    export module content {
        export class Entity extends javalangObject {
            public getSubValues(): javautilArrayList;

            public toString(): string;

            public getEntityValues(): android.content.ContentValues;

            public addSubValue(param0: android.net.Uri, param1: android.content.ContentValues): void;

            public constructor(param0: android.content.ContentValues);
        }
        export module Entity {
            export class NamedContentValues extends javalangObject {
                public uri: android.net.Uri;
                public values: android.content.ContentValues;

                public constructor(param0: android.net.Uri, param1: android.content.ContentValues);
            }
        }
    }
}

declare module android {
    export module content {
        export class EntityIterator extends javalangObject {
            /**
             * Constructs a new instance of the android.content.EntityIterator interface with the provided implementation.
             */
            public constructor(implementation: {
                reset(): void;
                close(): void;
            });

            public reset(): void;

            public close(): void;
        }
    }
}

import javaioSerializable = java.io.Serializable;
import orgxmlpullv1XmlPullParser = org.xmlpull.v1.XmlPullParser;
/// <reference path="./android.content.ClipData.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.IntentSender.d.ts" />
/// <reference path="./android.content.pm.ActivityInfo.d.ts" />
/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.io.Serializable.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
declare module android {
    export module content {
        export class Intent extends javalangObject implements android.os.Parcelable, javalangCloneable {
            public static ACTION_AIRPLANE_MODE_CHANGED: string;
            public static ACTION_ALL_APPS: string;
            public static ACTION_ANSWER: string;
            public static ACTION_APPLICATION_RESTRICTIONS_CHANGED: string;
            public static ACTION_APP_ERROR: string;
            public static ACTION_ASSIST: string;
            public static ACTION_ATTACH_DATA: string;
            public static ACTION_BATTERY_CHANGED: string;
            public static ACTION_BATTERY_LOW: string;
            public static ACTION_BATTERY_OKAY: string;
            public static ACTION_BOOT_COMPLETED: string;
            public static ACTION_BUG_REPORT: string;
            public static ACTION_CALL: string;
            public static ACTION_CALL_BUTTON: string;
            public static ACTION_CAMERA_BUTTON: string;
            public static ACTION_CHOOSER: string;
            public static ACTION_CLOSE_SYSTEM_DIALOGS: string;
            public static ACTION_CONFIGURATION_CHANGED: string;
            public static ACTION_CREATE_DOCUMENT: string;
            public static ACTION_CREATE_SHORTCUT: string;
            public static ACTION_DATE_CHANGED: string;
            public static ACTION_DEFAULT: string;
            public static ACTION_DELETE: string;
            public static ACTION_DEVICE_STORAGE_LOW: string;
            public static ACTION_DEVICE_STORAGE_OK: string;
            public static ACTION_DIAL: string;
            public static ACTION_DOCK_EVENT: string;
            public static ACTION_DREAMING_STARTED: string;
            public static ACTION_DREAMING_STOPPED: string;
            public static ACTION_EDIT: string;
            public static ACTION_EXTERNAL_APPLICATIONS_AVAILABLE: string;
            public static ACTION_EXTERNAL_APPLICATIONS_UNAVAILABLE: string;
            public static ACTION_FACTORY_TEST: string;
            public static ACTION_GET_CONTENT: string;
            public static ACTION_GET_RESTRICTION_ENTRIES: string;
            public static ACTION_GTALK_SERVICE_CONNECTED: string;
            public static ACTION_GTALK_SERVICE_DISCONNECTED: string;
            public static ACTION_HEADSET_PLUG: string;
            public static ACTION_INPUT_METHOD_CHANGED: string;
            public static ACTION_INSERT: string;
            public static ACTION_INSERT_OR_EDIT: string;
            public static ACTION_INSTALL_PACKAGE: string;
            public static ACTION_LOCALE_CHANGED: string;
            public static ACTION_MAIN: string;
            public static ACTION_MANAGED_PROFILE_ADDED: string;
            public static ACTION_MANAGED_PROFILE_REMOVED: string;
            public static ACTION_MANAGE_NETWORK_USAGE: string;
            public static ACTION_MANAGE_PACKAGE_STORAGE: string;
            public static ACTION_MEDIA_BAD_REMOVAL: string;
            public static ACTION_MEDIA_BUTTON: string;
            public static ACTION_MEDIA_CHECKING: string;
            public static ACTION_MEDIA_EJECT: string;
            public static ACTION_MEDIA_MOUNTED: string;
            public static ACTION_MEDIA_NOFS: string;
            public static ACTION_MEDIA_REMOVED: string;
            public static ACTION_MEDIA_SCANNER_FINISHED: string;
            public static ACTION_MEDIA_SCANNER_SCAN_FILE: string;
            public static ACTION_MEDIA_SCANNER_STARTED: string;
            public static ACTION_MEDIA_SHARED: string;
            public static ACTION_MEDIA_UNMOUNTABLE: string;
            public static ACTION_MEDIA_UNMOUNTED: string;
            public static ACTION_MY_PACKAGE_REPLACED: string;
            public static ACTION_NEW_OUTGOING_CALL: string;
            public static ACTION_OPEN_DOCUMENT: string;
            public static ACTION_OPEN_DOCUMENT_TREE: string;
            public static ACTION_PACKAGE_ADDED: string;
            public static ACTION_PACKAGE_CHANGED: string;
            public static ACTION_PACKAGE_DATA_CLEARED: string;
            public static ACTION_PACKAGE_FIRST_LAUNCH: string;
            public static ACTION_PACKAGE_FULLY_REMOVED: string;
            public static ACTION_PACKAGE_INSTALL: string;
            public static ACTION_PACKAGE_NEEDS_VERIFICATION: string;
            public static ACTION_PACKAGE_REMOVED: string;
            public static ACTION_PACKAGE_REPLACED: string;
            public static ACTION_PACKAGE_RESTARTED: string;
            public static ACTION_PACKAGE_VERIFIED: string;
            public static ACTION_PASTE: string;
            public static ACTION_PICK: string;
            public static ACTION_PICK_ACTIVITY: string;
            public static ACTION_POWER_CONNECTED: string;
            public static ACTION_POWER_DISCONNECTED: string;
            public static ACTION_POWER_USAGE_SUMMARY: string;
            public static ACTION_PROCESS_TEXT: string;
            public static ACTION_PROVIDER_CHANGED: string;
            public static ACTION_QUICK_CLOCK: string;
            public static ACTION_REBOOT: string;
            public static ACTION_RUN: string;
            public static ACTION_SCREEN_OFF: string;
            public static ACTION_SCREEN_ON: string;
            public static ACTION_SEARCH: string;
            public static ACTION_SEARCH_LONG_PRESS: string;
            public static ACTION_SEND: string;
            public static ACTION_SENDTO: string;
            public static ACTION_SEND_MULTIPLE: string;
            public static ACTION_SET_WALLPAPER: string;
            public static ACTION_SHUTDOWN: string;
            public static ACTION_SYNC: string;
            public static ACTION_SYSTEM_TUTORIAL: string;
            public static ACTION_TIMEZONE_CHANGED: string;
            public static ACTION_TIME_CHANGED: string;
            public static ACTION_TIME_TICK: string;
            public static ACTION_UID_REMOVED: string;
            public static ACTION_UMS_CONNECTED: string;
            public static ACTION_UMS_DISCONNECTED: string;
            public static ACTION_UNINSTALL_PACKAGE: string;
            public static ACTION_USER_BACKGROUND: string;
            public static ACTION_USER_FOREGROUND: string;
            public static ACTION_USER_INITIALIZE: string;
            public static ACTION_USER_PRESENT: string;
            public static ACTION_VIEW: string;
            public static ACTION_VOICE_COMMAND: string;
            public static ACTION_WALLPAPER_CHANGED: string;
            public static ACTION_WEB_SEARCH: string;
            public static CATEGORY_ALTERNATIVE: string;
            public static CATEGORY_APP_BROWSER: string;
            public static CATEGORY_APP_CALCULATOR: string;
            public static CATEGORY_APP_CALENDAR: string;
            public static CATEGORY_APP_CONTACTS: string;
            public static CATEGORY_APP_EMAIL: string;
            public static CATEGORY_APP_GALLERY: string;
            public static CATEGORY_APP_MAPS: string;
            public static CATEGORY_APP_MARKET: string;
            public static CATEGORY_APP_MESSAGING: string;
            public static CATEGORY_APP_MUSIC: string;
            public static CATEGORY_BROWSABLE: string;
            public static CATEGORY_CAR_DOCK: string;
            public static CATEGORY_CAR_MODE: string;
            public static CATEGORY_DEFAULT: string;
            public static CATEGORY_DESK_DOCK: string;
            public static CATEGORY_DEVELOPMENT_PREFERENCE: string;
            public static CATEGORY_EMBED: string;
            public static CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST: string;
            public static CATEGORY_HE_DESK_DOCK: string;
            public static CATEGORY_HOME: string;
            public static CATEGORY_INFO: string;
            public static CATEGORY_LAUNCHER: string;
            public static CATEGORY_LEANBACK_LAUNCHER: string;
            public static CATEGORY_LE_DESK_DOCK: string;
            public static CATEGORY_MONKEY: string;
            public static CATEGORY_OPENABLE: string;
            public static CATEGORY_PREFERENCE: string;
            public static CATEGORY_SAMPLE_CODE: string;
            public static CATEGORY_SELECTED_ALTERNATIVE: string;
            public static CATEGORY_TAB: string;
            public static CATEGORY_TEST: string;
            public static CATEGORY_UNIT_TEST: string;
            public static CATEGORY_VOICE: string;
            public static CREATOR: android.os.Parcelable.Creator;
            public static EXTRA_ALARM_COUNT: string;
            public static EXTRA_ALLOW_MULTIPLE: string;
            public static EXTRA_ALLOW_REPLACE: string;
            public static EXTRA_ALTERNATE_INTENTS: string;
            public static EXTRA_ASSIST_CONTEXT: string;
            public static EXTRA_ASSIST_INPUT_DEVICE_ID: string;
            public static EXTRA_ASSIST_INPUT_HINT_KEYBOARD: string;
            public static EXTRA_ASSIST_PACKAGE: string;
            public static EXTRA_ASSIST_UID: string;
            public static EXTRA_BCC: string;
            public static EXTRA_BUG_REPORT: string;
            public static EXTRA_CC: string;
            public static EXTRA_CHANGED_COMPONENT_NAME: string;
            public static EXTRA_CHANGED_COMPONENT_NAME_LIST: string;
            public static EXTRA_CHANGED_PACKAGE_LIST: string;
            public static EXTRA_CHANGED_UID_LIST: string;
            public static EXTRA_CHOOSER_REFINEMENT_INTENT_SENDER: string;
            public static EXTRA_CHOSEN_COMPONENT: string;
            public static EXTRA_CHOSEN_COMPONENT_INTENT_SENDER: string;
            public static EXTRA_DATA_REMOVED: string;
            public static EXTRA_DOCK_STATE: string;
            public static EXTRA_DOCK_STATE_CAR: number;
            public static EXTRA_DOCK_STATE_DESK: number;
            public static EXTRA_DOCK_STATE_HE_DESK: number;
            public static EXTRA_DOCK_STATE_LE_DESK: number;
            public static EXTRA_DOCK_STATE_UNDOCKED: number;
            public static EXTRA_DONT_KILL_APP: string;
            public static EXTRA_EMAIL: string;
            public static EXTRA_HTML_TEXT: string;
            public static EXTRA_INITIAL_INTENTS: string;
            public static EXTRA_INSTALLER_PACKAGE_NAME: string;
            public static EXTRA_INTENT: string;
            public static EXTRA_KEY_EVENT: string;
            public static EXTRA_LOCAL_ONLY: string;
            public static EXTRA_MIME_TYPES: string;
            public static EXTRA_NOT_UNKNOWN_SOURCE: string;
            public static EXTRA_ORIGINATING_URI: string;
            public static EXTRA_PHONE_NUMBER: string;
            public static EXTRA_PROCESS_TEXT: string;
            public static EXTRA_PROCESS_TEXT_READONLY: string;
            public static EXTRA_REFERRER: string;
            public static EXTRA_REFERRER_NAME: string;
            public static EXTRA_REMOTE_INTENT_TOKEN: string;
            public static EXTRA_REPLACEMENT_EXTRAS: string;
            public static EXTRA_REPLACING: string;
            public static EXTRA_RESTRICTIONS_BUNDLE: string;
            public static EXTRA_RESTRICTIONS_INTENT: string;
            public static EXTRA_RESTRICTIONS_LIST: string;
            public static EXTRA_RESULT_RECEIVER: string;
            public static EXTRA_RETURN_RESULT: string;
            public static EXTRA_SHORTCUT_ICON: string;
            public static EXTRA_SHORTCUT_ICON_RESOURCE: string;
            public static EXTRA_SHORTCUT_INTENT: string;
            public static EXTRA_SHORTCUT_NAME: string;
            public static EXTRA_SHUTDOWN_USERSPACE_ONLY: string;
            public static EXTRA_STREAM: string;
            public static EXTRA_SUBJECT: string;
            public static EXTRA_TEMPLATE: string;
            public static EXTRA_TEXT: string;
            public static EXTRA_TITLE: string;
            public static EXTRA_UID: string;
            public static EXTRA_USER: string;
            public static FILL_IN_ACTION: number;
            public static FILL_IN_CATEGORIES: number;
            public static FILL_IN_CLIP_DATA: number;
            public static FILL_IN_COMPONENT: number;
            public static FILL_IN_DATA: number;
            public static FILL_IN_PACKAGE: number;
            public static FILL_IN_SELECTOR: number;
            public static FILL_IN_SOURCE_BOUNDS: number;
            public static FLAG_ACTIVITY_BROUGHT_TO_FRONT: number;
            public static FLAG_ACTIVITY_CLEAR_TASK: number;
            public static FLAG_ACTIVITY_CLEAR_TOP: number;
            public static FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET: number;
            public static FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS: number;
            public static FLAG_ACTIVITY_FORWARD_RESULT: number;
            public static FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY: number;
            public static FLAG_ACTIVITY_MULTIPLE_TASK: number;
            public static FLAG_ACTIVITY_NEW_DOCUMENT: number;
            public static FLAG_ACTIVITY_NEW_TASK: number;
            public static FLAG_ACTIVITY_NO_ANIMATION: number;
            public static FLAG_ACTIVITY_NO_HISTORY: number;
            public static FLAG_ACTIVITY_NO_USER_ACTION: number;
            public static FLAG_ACTIVITY_PREVIOUS_IS_TOP: number;
            public static FLAG_ACTIVITY_REORDER_TO_FRONT: number;
            public static FLAG_ACTIVITY_RESET_TASK_IF_NEEDED: number;
            public static FLAG_ACTIVITY_RETAIN_IN_RECENTS: number;
            public static FLAG_ACTIVITY_SINGLE_TOP: number;
            public static FLAG_ACTIVITY_TASK_ON_HOME: number;
            public static FLAG_DEBUG_LOG_RESOLUTION: number;
            public static FLAG_EXCLUDE_STOPPED_PACKAGES: number;
            public static FLAG_FROM_BACKGROUND: number;
            public static FLAG_GRANT_PERSISTABLE_URI_PERMISSION: number;
            public static FLAG_GRANT_PREFIX_URI_PERMISSION: number;
            public static FLAG_GRANT_READ_URI_PERMISSION: number;
            public static FLAG_GRANT_WRITE_URI_PERMISSION: number;
            public static FLAG_INCLUDE_STOPPED_PACKAGES: number;
            public static FLAG_RECEIVER_FOREGROUND: number;
            public static FLAG_RECEIVER_NO_ABORT: number;
            public static FLAG_RECEIVER_REGISTERED_ONLY: number;
            public static FLAG_RECEIVER_REPLACE_PENDING: number;
            public static METADATA_DOCK_HOME: string;
            public static URI_ALLOW_UNSAFE: number;
            public static URI_ANDROID_APP_SCHEME: number;
            public static URI_INTENT_SCHEME: number;

            public getParcelableExtra(param0: string): android.os.Parcelable;

            public resolveTypeIfNeeded(param0: android.content.ContentResolver): string;

            public filterEquals(param0: android.content.Intent): boolean;

            public clone(): javalangObject;

            public getData(): android.net.Uri;

            public static createChooser(param0: android.content.Intent, param1: string): android.content.Intent;
            public static createChooser(param0: android.content.Intent, param1: string, param2: android.content.IntentSender): android.content.Intent;

            public getScheme(): string;

            public setDataAndNormalize(param0: android.net.Uri): android.content.Intent;

            public setPackage(param0: string): android.content.Intent;

            public setComponent(param0: android.content.ComponentName): android.content.Intent;

            public getSelector(): android.content.Intent;

            public putExtra(param0: string, param1: native.Array<javalangCharSequence>): android.content.Intent;

            public getIntArrayExtra(param0: string): native.Array<number>;

            public resolveActivityInfo(param0: android.content.pm.PackageManager, param1: number): android.content.pm.ActivityInfo;

            public getDoubleExtra(param0: string, param1: number): number;

            public fillIn(param0: android.content.Intent, param1: number): number;

            public static parseIntent(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet): android.content.Intent;

            public getCategories(): javautilSet;

            public getDoubleArrayExtra(param0: string): native.Array<number>;

            public static makeRestartActivityTask(param0: android.content.ComponentName): android.content.Intent;

            public constructor();

            public putExtra(param0: string, param1: string): android.content.Intent;

            public resolveType(param0: android.content.Context): string;

            public getStringArrayExtra(param0: string): native.Array<string>;

            public describeContents(): number;

            public setAction(param0: string): android.content.Intent;

            public getParcelableArrayListExtra(param0: string): javautilArrayList;

            public getSourceBounds(): android.graphics.Rect;

            public getExtras(): android.os.Bundle;

            public removeCategory(param0: string): void;

            public setClassName(param0: string, param1: string): android.content.Intent;

            public putCharSequenceArrayListExtra(param0: string, param1: javautilArrayList): android.content.Intent;

            public putExtras(param0: android.content.Intent): android.content.Intent;

            public setFlags(param0: number): android.content.Intent;

            public getPackage(): string;

            public setExtrasClassLoader(param0: javalangClassLoader): void;

            public getClipData(): android.content.ClipData;

            public getByteArrayExtra(param0: string): native.Array<number>;

            public setClass(param0: android.content.Context, param1: javalangClass): android.content.Intent;

            public getBooleanArrayExtra(param0: string): native.Array<boolean>;

            public getLongArrayExtra(param0: string): native.Array<number>;

            public setType(param0: string): android.content.Intent;

            public removeExtra(param0: string): void;

            public addCategory(param0: string): android.content.Intent;

            public setDataAndTypeAndNormalize(param0: android.net.Uri, param1: string): android.content.Intent;

            public getCharArrayExtra(param0: string): native.Array<string>;

            public getShortExtra(param0: string, param1: number): number;

            public toUri(param0: number): string;

            public getFloatExtra(param0: string, param1: number): number;

            public resolveType(param0: android.content.ContentResolver): string;

            public getIntExtra(param0: string, param1: number): number;

            public getAction(): string;

            public getComponent(): android.content.ComponentName;

            public getDataString(): string;

            public putExtra(param0: string, param1: native.Array<number>): android.content.Intent;
            public putExtra(param0: string, param1: native.Array<boolean>): android.content.Intent;

            public constructor(param0: android.content.Intent);

            public putExtra(param0: string, param1: native.Array<android.os.Parcelable>): android.content.Intent;

            public getFloatArrayExtra(param0: string): native.Array<number>;

            public readFromParcel(param0: android.os.Parcel): void;

            public putParcelableArrayListExtra(param0: string, param1: javautilArrayList): android.content.Intent;

            public filterHashCode(): number;

            public static getIntentOld(param0: string): android.content.Intent;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public putExtras(param0: android.os.Bundle): android.content.Intent;

            public static parseUri(param0: string, param1: number): android.content.Intent;

            public getType(): string;

            public putExtra(param0: string, param1: native.Array<string>): android.content.Intent;

            public constructor(param0: string);

            public static getIntent(param0: string): android.content.Intent;

            public hasExtra(param0: string): boolean;

            public getSerializableExtra(param0: string): javaioSerializable;

            public getFlags(): number;

            public setSelector(param0: android.content.Intent): void;

            public replaceExtras(param0: android.content.Intent): android.content.Intent;

            public setClassName(param0: android.content.Context, param1: string): android.content.Intent;

            public static makeMainActivity(param0: android.content.ComponentName): android.content.Intent;

            public getCharSequenceArrayExtra(param0: string): native.Array<javalangCharSequence>;

            public addFlags(param0: number): android.content.Intent;

            public getStringExtra(param0: string): string;

            public constructor(param0: string, param1: android.net.Uri, param2: android.content.Context, param3: javalangClass);
            public constructor(param0: string, param1: android.net.Uri);

            public static makeMainSelectorActivity(param0: string, param1: string): android.content.Intent;

            public getParcelableArrayExtra(param0: string): native.Array<android.os.Parcelable>;

            public putExtra(param0: string, param1: boolean): android.content.Intent;

            public getLongExtra(param0: string, param1: number): number;

            public getStringArrayListExtra(param0: string): javautilArrayList;

            public getByteExtra(param0: string, param1: number): number;

            public putExtra(param0: string, param1: javaioSerializable): android.content.Intent;

            public getCharSequenceExtra(param0: string): string;

            public toURI(): string;

            public replaceExtras(param0: android.os.Bundle): android.content.Intent;

            public setSourceBounds(param0: android.graphics.Rect): void;

            public getShortArrayExtra(param0: string): native.Array<number>;

            public getCharSequenceArrayListExtra(param0: string): javautilArrayList;

            public hasFileDescriptors(): boolean;

            public putStringArrayListExtra(param0: string, param1: javautilArrayList): android.content.Intent;

            public getIntegerArrayListExtra(param0: string): javautilArrayList;

            public putExtra(param0: string, param1: android.os.Bundle): android.content.Intent;

            public static normalizeMimeType(param0: string): string;

            public hasCategory(param0: string): boolean;

            public putIntegerArrayListExtra(param0: string, param1: javautilArrayList): android.content.Intent;

            public setClipData(param0: android.content.ClipData): void;

            public setDataAndType(param0: android.net.Uri, param1: string): android.content.Intent;

            public putExtra(param0: string, param1: number): android.content.Intent;

            public getBooleanExtra(param0: string, param1: boolean): boolean;

            public setData(param0: android.net.Uri): android.content.Intent;

            public resolveActivity(param0: android.content.pm.PackageManager): android.content.ComponentName;

            public setTypeAndNormalize(param0: string): android.content.Intent;

            public constructor(param0: android.content.Context, param1: javalangClass);

            public toString(): string;

            public getCharExtra(param0: string, param1: string): string;

            public cloneFilter(): android.content.Intent;

            public getBundleExtra(param0: string): android.os.Bundle;

            public putExtra(param0: string, param1: android.os.Parcelable): android.content.Intent;
        }
        export module Intent {
            export class FilterComparison extends javalangObject {
                public equals(param0: javalangObject): boolean;

                public getIntent(): android.content.Intent;

                public hashCode(): number;

                public constructor(param0: android.content.Intent);
            }
            export class ShortcutIconResource extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public packageName: string;
                public resourceName: string;

                public static fromContext(param0: android.content.Context, param1: number): android.content.Intent.ShortcutIconResource;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public toString(): string;

                public constructor();
            }
        }
    }
}

import javautilIterator = java.util.Iterator;
import orgxmlpullv1XmlSerializer = org.xmlpull.v1.XmlSerializer;
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.PatternMatcher.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlSerializer.d.ts" />
declare module android {
    export module content {
        export class IntentFilter extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static MATCH_ADJUSTMENT_MASK: number;
            public static MATCH_ADJUSTMENT_NORMAL: number;
            public static MATCH_CATEGORY_EMPTY: number;
            public static MATCH_CATEGORY_HOST: number;
            public static MATCH_CATEGORY_MASK: number;
            public static MATCH_CATEGORY_PATH: number;
            public static MATCH_CATEGORY_PORT: number;
            public static MATCH_CATEGORY_SCHEME: number;
            public static MATCH_CATEGORY_SCHEME_SPECIFIC_PART: number;
            public static MATCH_CATEGORY_TYPE: number;
            public static NO_MATCH_ACTION: number;
            public static NO_MATCH_CATEGORY: number;
            public static NO_MATCH_DATA: number;
            public static NO_MATCH_TYPE: number;
            public static SYSTEM_HIGH_PRIORITY: number;
            public static SYSTEM_LOW_PRIORITY: number;

            public getDataScheme(param0: number): string;

            public getDataAuthority(param0: number): android.content.IntentFilter.AuthorityEntry;

            public getDataType(param0: number): string;

            public getCategory(param0: number): string;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public pathsIterator(): javautilIterator;

            public writeToXml(param0: orgxmlpullv1XmlSerializer): void;

            public constructor(param0: string);

            public addDataAuthority(param0: string, param1: string): void;

            public countActions(): number;

            public countDataSchemeSpecificParts(): number;

            public typesIterator(): javautilIterator;

            public matchCategories(param0: javautilSet): string;

            public hasAction(param0: string): boolean;

            public constructor();

            public hasDataType(param0: string): boolean;

            public countDataAuthorities(): number;

            public countDataTypes(): number;

            public hasDataSchemeSpecificPart(param0: string): boolean;

            public describeContents(): number;

            public actionsIterator(): javautilIterator;

            public addDataType(param0: string): void;

            public authoritiesIterator(): javautilIterator;

            public schemeSpecificPartsIterator(): javautilIterator;

            public addAction(param0: string): void;

            public addDataScheme(param0: string): void;

            public match(param0: android.content.ContentResolver, param1: android.content.Intent, param2: boolean, param3: string): number;

            public matchDataAuthority(param0: android.net.Uri): number;

            public constructor(param0: android.content.IntentFilter);
            public constructor(param0: string, param1: string);

            public getAction(param0: number): string;

            public hasDataAuthority(param0: android.net.Uri): boolean;

            public addCategory(param0: string): void;

            public addDataPath(param0: string, param1: number): void;

            public countCategories(): number;

            public getDataSchemeSpecificPart(param0: number): android.os.PatternMatcher;

            public countDataSchemes(): number;

            public hasDataScheme(param0: string): boolean;

            public countDataPaths(): number;

            public matchAction(param0: string): boolean;

            public hasCategory(param0: string): boolean;

            public addDataSchemeSpecificPart(param0: string, param1: number): void;

            public categoriesIterator(): javautilIterator;

            public schemesIterator(): javautilIterator;

            public matchData(param0: string, param1: string, param2: android.net.Uri): number;

            public static create(param0: string, param1: string): android.content.IntentFilter;

            public getPriority(): number;

            public readFromXml(param0: orgxmlpullv1XmlPullParser): void;

            public setPriority(param0: number): void;

            public getDataPath(param0: number): android.os.PatternMatcher;

            public dump(param0: android.util.Printer, param1: string): void;

            public hasDataPath(param0: string): boolean;

            public match(param0: string, param1: string, param2: string, param3: android.net.Uri, param4: javautilSet, param5: string): number;
        }
        export module IntentFilter {
            export class AuthorityEntry extends javalangObject {
                public match(param0: android.net.Uri): number;

                public getPort(): number;

                public getHost(): string;

                public constructor(param0: string, param1: string);
            }
            export class MalformedMimeTypeException extends android.util.AndroidException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor(param0: javalangException);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.IntentSender.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.UserHandle.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module content {
        export class IntentSender extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public static readIntentSenderOrNullFromParcel(param0: android.os.Parcel): android.content.IntentSender;

            public sendIntent(param0: android.content.Context, param1: number, param2: android.content.Intent, param3: android.content.IntentSender.OnFinished, param4: android.os.Handler, param5: string): void;

            public equals(param0: javalangObject): boolean;

            public sendIntent(param0: android.content.Context, param1: number, param2: android.content.Intent, param3: android.content.IntentSender.OnFinished, param4: android.os.Handler): void;

            public getTargetPackage(): string;

            public getCreatorPackage(): string;

            public toString(): string;

            public static writeIntentSenderOrNullToParcel(param0: android.content.IntentSender, param1: android.os.Parcel): void;

            public getCreatorUserHandle(): android.os.UserHandle;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getCreatorUid(): number;

            public hashCode(): number;
        }
        export module IntentSender {
            export class OnFinished extends javalangObject {
                /**
                 * Constructs a new instance of the android.content.IntentSender$OnFinished interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onSendFinished(param0: android.content.IntentSender, param1: android.content.Intent, param2: number, param3: string, param4: android.os.Bundle): void;
                });

                public onSendFinished(param0: android.content.IntentSender, param1: android.content.Intent, param2: number, param3: string, param4: android.os.Bundle): void;
            }
            export class SendIntentException extends android.util.AndroidException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor(param0: javalangException);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Loader.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export class Loader extends javalangObject {
            public unregisterListener(param0: android.content.Loader.OnLoadCompleteListener): void;

            public deliverResult(param0: javalangObject): void;

            public rollbackContentChanged(): void;

            public registerListener(param0: number, param1: android.content.Loader.OnLoadCompleteListener): void;

            public onStartLoading(): void;

            public onForceLoad(): void;

            public isReset(): boolean;

            public forceLoad(): void;

            public getId(): number;

            public registerOnLoadCanceledListener(param0: android.content.Loader.OnLoadCanceledListener): void;

            public unregisterOnLoadCanceledListener(param0: android.content.Loader.OnLoadCanceledListener): void;

            public reset(): void;

            public getContext(): android.content.Context;

            public onStopLoading(): void;

            public abandon(): void;

            public isAbandoned(): boolean;

            public startLoading(): void;

            public dataToString(param0: javalangObject): string;

            public onCancelLoad(): boolean;

            public commitContentChanged(): void;

            public onReset(): void;

            public isStarted(): boolean;

            public cancelLoad(): boolean;

            public deliverCancellation(): void;

            public toString(): string;

            public stopLoading(): void;

            public constructor(param0: android.content.Context);

            public dump(param0: string, param1: javaioFileDescriptor, param2: javaioPrintWriter, param3: native.Array<string>): void;

            public onContentChanged(): void;

            public onAbandon(): void;

            public takeContentChanged(): boolean;
        }
        export module Loader {
            export class ForceLoadContentObserver extends android.database.ContentObserver {
                public constructor(param0: android.content.Loader);

                public deliverSelfNotifications(): boolean;

                public onChange(param0: boolean, param1: android.net.Uri): void;

                public constructor(param0: android.os.Handler);

                public onChange(param0: boolean): void;
            }
            export class OnLoadCanceledListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.content.Loader$OnLoadCanceledListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onLoadCanceled(param0: android.content.Loader): void;
                });

                public onLoadCanceled(param0: android.content.Loader): void;
            }
            export class OnLoadCompleteListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.content.Loader$OnLoadCompleteListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onLoadComplete(param0: android.content.Loader, param1: javalangObject): void;
                });

                public onLoadComplete(param0: android.content.Loader, param1: javalangObject): void;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
declare module android {
    export module content {
        export class MutableContextWrapper extends android.content.ContextWrapper {
            public constructor(param0: android.content.Context);
            public constructor();

            public setBaseContext(param0: android.content.Context): void;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module content {
        export class OperationApplicationException extends javalangException {
            public constructor(param0: javalangThrowable);

            public getNumSuccessfulYieldPoints(): number;

            public constructor(param0: string, param1: number);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor(param0: number);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.accounts.Account.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export class PeriodicSync extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public account: android.accounts.Account;
            public authority: string;
            public extras: android.os.Bundle;
            public period: number;

            public toString(): string;

            public equals(param0: javalangObject): boolean;

            public describeContents(): number;

            public constructor(param0: android.accounts.Account, param1: string, param2: android.os.Bundle, param3: number);

            public writeToParcel(param0: android.os.Parcel, param1: number): void;
        }
    }
}

/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module content {
        export class ReceiverCallNotAllowedException extends android.util.AndroidRuntimeException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor(param0: javalangException);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export class RestrictionEntry extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static TYPE_BOOLEAN: number;
            public static TYPE_BUNDLE: number;
            public static TYPE_BUNDLE_ARRAY: number;
            public static TYPE_CHOICE: number;
            public static TYPE_INTEGER: number;
            public static TYPE_MULTI_SELECT: number;
            public static TYPE_NULL: number;
            public static TYPE_STRING: number;

            public getType(): number;

            public setChoiceValues(param0: android.content.Context, param1: number): void;

            public setTitle(param0: string): void;

            public equals(param0: javalangObject): boolean;

            public constructor(param0: number, param1: string);

            public setType(param0: number): void;

            public getChoiceValues(): native.Array<string>;

            public setChoiceEntries(param0: android.content.Context, param1: number): void;

            public constructor(param0: string, param1: string);

            public getSelectedString(): string;

            public setSelectedState(param0: boolean): void;

            public setAllSelectedStrings(param0: native.Array<string>): void;

            public constructor(param0: string, param1: number);
            public constructor(param0: android.os.Parcel);

            public getKey(): string;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public constructor(param0: string, param1: boolean);

            public setSelectedString(param0: string): void;

            public getAllSelectedStrings(): native.Array<string>;

            public setIntValue(param0: number): void;

            public getSelectedState(): boolean;

            public getTitle(): string;

            public getChoiceEntries(): native.Array<string>;

            public static createBundleArrayEntry(param0: string, param1: native.Array<android.content.RestrictionEntry>): android.content.RestrictionEntry;

            public setDescription(param0: string): void;

            public setChoiceEntries(param0: native.Array<string>): void;

            public constructor(param0: string, param1: native.Array<string>);

            public setRestrictions(param0: native.Array<android.content.RestrictionEntry>): void;

            public getIntValue(): number;

            public toString(): string;

            public static createBundleEntry(param0: string, param1: native.Array<android.content.RestrictionEntry>): android.content.RestrictionEntry;

            public describeContents(): number;

            public getDescription(): string;

            public setChoiceValues(param0: native.Array<string>): void;

            public getRestrictions(): native.Array<android.content.RestrictionEntry>;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module content {
        export class RestrictionsManager extends javalangObject {
            public static ACTION_PERMISSION_RESPONSE_RECEIVED: string;
            public static ACTION_REQUEST_LOCAL_APPROVAL: string;
            public static ACTION_REQUEST_PERMISSION: string;
            public static EXTRA_PACKAGE_NAME: string;
            public static EXTRA_REQUEST_BUNDLE: string;
            public static EXTRA_REQUEST_ID: string;
            public static EXTRA_REQUEST_TYPE: string;
            public static EXTRA_RESPONSE_BUNDLE: string;
            public static META_DATA_APP_RESTRICTIONS: string;
            public static REQUEST_KEY_APPROVE_LABEL: string;
            public static REQUEST_KEY_DATA: string;
            public static REQUEST_KEY_DENY_LABEL: string;
            public static REQUEST_KEY_ICON: string;
            public static REQUEST_KEY_ID: string;
            public static REQUEST_KEY_MESSAGE: string;
            public static REQUEST_KEY_NEW_REQUEST: string;
            public static REQUEST_KEY_TITLE: string;
            public static REQUEST_TYPE_APPROVAL: string;
            public static RESPONSE_KEY_ERROR_CODE: string;
            public static RESPONSE_KEY_MESSAGE: string;
            public static RESPONSE_KEY_RESPONSE_TIMESTAMP: string;
            public static RESPONSE_KEY_RESULT: string;
            public static RESULT_APPROVED: number;
            public static RESULT_DENIED: number;
            public static RESULT_ERROR: number;
            public static RESULT_ERROR_BAD_REQUEST: number;
            public static RESULT_ERROR_INTERNAL: number;
            public static RESULT_ERROR_NETWORK: number;
            public static RESULT_NO_RESPONSE: number;
            public static RESULT_UNKNOWN_REQUEST: number;

            public requestPermission(param0: string, param1: string, param2: android.os.PersistableBundle): void;

            public hasRestrictionsProvider(): boolean;

            public notifyPermissionResponse(param0: string, param1: android.os.PersistableBundle): void;

            public getApplicationRestrictions(): android.os.Bundle;

            public static convertRestrictionsToBundle(param0: javautilList): android.os.Bundle;

            public createLocalApprovalIntent(): android.content.Intent;

            public getManifestRestrictions(param0: string): javautilList;
        }
    }
}

/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.CancellationSignal.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export class SearchRecentSuggestionsProvider extends android.content.ContentProvider {
            public static DATABASE_MODE_2LINES: number;
            public static DATABASE_MODE_QUERIES: number;

            public onCreate(): boolean;

            public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: android.os.CancellationSignal): android.database.Cursor;

            public onTrimMemory(param0: number): void;

            public update(param0: android.net.Uri, param1: android.content.ContentValues, param2: string, param3: native.Array<string>): number;

            public setupSuggestions(param0: string, param1: number): void;

            public delete(param0: android.net.Uri, param1: string, param2: native.Array<string>): number;

            public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): android.database.Cursor;

            public constructor();

            public insert(param0: android.net.Uri, param1: android.content.ContentValues): android.net.Uri;

            public getType(param0: android.net.Uri): string;
        }
    }
}

/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
declare module android {
    export module content {
        export class ServiceConnection extends javalangObject {
            /**
             * Constructs a new instance of the android.content.ServiceConnection interface with the provided implementation.
             */
            public constructor(implementation: {
                onServiceConnected(param0: android.content.ComponentName, param1: android.os.IBinder): void;
                onServiceDisconnected(param0: android.content.ComponentName): void;
            });

            public onServiceDisconnected(param0: android.content.ComponentName): void;

            public onServiceConnected(param0: android.content.ComponentName, param1: android.os.IBinder): void;
        }
    }
}

/// <reference path="./android.content.SharedPreferences.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module android {
    export module content {
        export class SharedPreferences extends javalangObject {
            /**
             * Constructs a new instance of the android.content.SharedPreferences interface with the provided implementation.
             */
            public constructor(implementation: {
                getAll(): javautilMap;
                getString(param0: string, param1: string): string;
                getStringSet(param0: string, param1: javautilSet): javautilSet;
                getInt(param0: string, param1: number): number;
                getLong(param0: string, param1: number): number;
                getFloat(param0: string, param1: number): number;
                getBoolean(param0: string, param1: boolean): boolean;
                contains(param0: string): boolean;
                edit(): android.content.SharedPreferences.Editor;
                registerOnSharedPreferenceChangeListener(param0: android.content.SharedPreferences.OnSharedPreferenceChangeListener): void;
                unregisterOnSharedPreferenceChangeListener(param0: android.content.SharedPreferences.OnSharedPreferenceChangeListener): void;
            });

            public getStringSet(param0: string, param1: javautilSet): javautilSet;

            public getInt(param0: string, param1: number): number;

            public getAll(): javautilMap;

            public getFloat(param0: string, param1: number): number;

            public contains(param0: string): boolean;

            public getBoolean(param0: string, param1: boolean): boolean;

            public getLong(param0: string, param1: number): number;

            public edit(): android.content.SharedPreferences.Editor;

            public getString(param0: string, param1: string): string;

            public registerOnSharedPreferenceChangeListener(param0: android.content.SharedPreferences.OnSharedPreferenceChangeListener): void;

            public unregisterOnSharedPreferenceChangeListener(param0: android.content.SharedPreferences.OnSharedPreferenceChangeListener): void;
        }
        export module SharedPreferences {
            export class Editor extends javalangObject {
                /**
                 * Constructs a new instance of the android.content.SharedPreferences$Editor interface with the provided implementation.
                 */
                public constructor(implementation: {
                    putString(param0: string, param1: string): android.content.SharedPreferences.Editor;
                    putStringSet(param0: string, param1: javautilSet): android.content.SharedPreferences.Editor;
                    putInt(param0: string, param1: number): android.content.SharedPreferences.Editor;
                    putLong(param0: string, param1: number): android.content.SharedPreferences.Editor;
                    putFloat(param0: string, param1: number): android.content.SharedPreferences.Editor;
                    putBoolean(param0: string, param1: boolean): android.content.SharedPreferences.Editor;
                    remove(param0: string): android.content.SharedPreferences.Editor;
                    clear(): android.content.SharedPreferences.Editor;
                    commit(): boolean;
                    apply(): void;
                });

                public commit(): boolean;

                public apply(): void;

                public putString(param0: string, param1: string): android.content.SharedPreferences.Editor;

                public putLong(param0: string, param1: number): android.content.SharedPreferences.Editor;

                public putStringSet(param0: string, param1: javautilSet): android.content.SharedPreferences.Editor;

                public putBoolean(param0: string, param1: boolean): android.content.SharedPreferences.Editor;

                public clear(): android.content.SharedPreferences.Editor;

                public putFloat(param0: string, param1: number): android.content.SharedPreferences.Editor;

                public remove(param0: string): android.content.SharedPreferences.Editor;

                public putInt(param0: string, param1: number): android.content.SharedPreferences.Editor;
            }
            export class OnSharedPreferenceChangeListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.content.SharedPreferences$OnSharedPreferenceChangeListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onSharedPreferenceChanged(param0: android.content.SharedPreferences, param1: string): void;
                });

                public onSharedPreferenceChanged(param0: android.content.SharedPreferences, param1: string): void;
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export class SyncAdapterType extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public accountType: string;
            public authority: string;
            public isKey: boolean;

            public equals(param0: javalangObject): boolean;

            public supportsUploading(): boolean;

            public isAlwaysSyncable(): boolean;

            public allowParallelSyncs(): boolean;

            public toString(): string;

            public constructor(param0: android.os.Parcel);

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public constructor(param0: string, param1: string, param2: boolean, param3: boolean);

            public getSettingsActivity(): string;

            public isUserVisible(): boolean;

            public static newKey(param0: string, param1: string): android.content.SyncAdapterType;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.content.SyncResult.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
declare module android {
    export module content {
        export class SyncContext extends javalangObject {
            public onFinished(param0: android.content.SyncResult): void;

            public getSyncContextBinder(): android.os.IBinder;
        }
    }
}

/// <reference path="./android.accounts.Account.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module content {
        export class SyncInfo extends javalangObject implements android.os.Parcelable {
            public account: android.accounts.Account;
            public authority: string;
            public startTime: number;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;
        }
    }
}

/// <reference path="./android.accounts.Account.d.ts" />
/// <reference path="./android.content.SyncRequest.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export class SyncRequest extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;
        }
        export module SyncRequest {
            export class Builder extends javalangObject {
                public setExtras(param0: android.os.Bundle): android.content.SyncRequest.Builder;

                public setIgnoreSettings(param0: boolean): android.content.SyncRequest.Builder;

                public setManual(param0: boolean): android.content.SyncRequest.Builder;

                public setIgnoreBackoff(param0: boolean): android.content.SyncRequest.Builder;

                public setNoRetry(param0: boolean): android.content.SyncRequest.Builder;

                public setDisallowMetered(param0: boolean): android.content.SyncRequest.Builder;

                public setSyncAdapter(param0: android.accounts.Account, param1: string): android.content.SyncRequest.Builder;

                public syncOnce(): android.content.SyncRequest.Builder;

                public syncPeriodic(param0: number, param1: number): android.content.SyncRequest.Builder;

                public build(): android.content.SyncRequest;

                public setExpedited(param0: boolean): android.content.SyncRequest.Builder;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.SyncStats.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module content {
        export class SyncResult extends javalangObject implements android.os.Parcelable {
            public static ALREADY_IN_PROGRESS: android.content.SyncResult;
            public static CREATOR: android.os.Parcelable.Creator;
            public databaseError: boolean;
            public delayUntil: number;
            public fullSyncRequested: boolean;
            public moreRecordsToGet: boolean;
            public partialSyncUnavailable: boolean;
            public stats: android.content.SyncStats;
            public syncAlreadyInProgress: boolean;
            public tooManyDeletions: boolean;
            public tooManyRetries: boolean;

            public clear(): void;

            public hasSoftError(): boolean;

            public toString(): string;

            public madeSomeProgress(): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public constructor();

            public hasHardError(): boolean;

            public hasError(): boolean;

            public toDebugString(): string;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module content {
        export class SyncStats extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public numAuthExceptions: number;
            public numConflictDetectedExceptions: number;
            public numDeletes: number;
            public numEntries: number;
            public numInserts: number;
            public numIoExceptions: number;
            public numParseExceptions: number;
            public numSkippedEntries: number;
            public numUpdates: number;

            public clear(): void;

            public toString(): string;

            public constructor(param0: android.os.Parcel);

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public constructor();
        }
    }
}

declare module android {
    export module content {
        export class SyncStatusObserver extends javalangObject {
            /**
             * Constructs a new instance of the android.content.SyncStatusObserver interface with the provided implementation.
             */
            public constructor(implementation: {
                onStatusChanged(param0: number): void;
            });

            public onStatusChanged(param0: number): void;
        }
    }
}

/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export class UriMatcher extends javalangObject {
            public static NO_MATCH: number;

            public match(param0: android.net.Uri): number;

            public addURI(param0: string, param1: string, param2: number): void;

            public constructor(param0: number);
        }
    }
}

/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module content {
        export class UriPermission extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static INVALID_TIME: number;

            public getUri(): android.net.Uri;

            public toString(): string;

            public getPersistedTime(): number;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public isReadPermission(): boolean;

            public isWritePermission(): boolean;
        }
    }
}

/// <reference path="./android.content.pm.ComponentInfo.d.ts" />
/// <reference path="./android.content.pm.PackageItemInfo.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export module pm {
            export class ActivityInfo extends android.content.pm.ComponentInfo implements android.os.Parcelable {
                public static CONFIG_DENSITY: number;
                public static CONFIG_FONT_SCALE: number;
                public static CONFIG_KEYBOARD: number;
                public static CONFIG_KEYBOARD_HIDDEN: number;
                public static CONFIG_LAYOUT_DIRECTION: number;
                public static CONFIG_LOCALE: number;
                public static CONFIG_MCC: number;
                public static CONFIG_MNC: number;
                public static CONFIG_NAVIGATION: number;
                public static CONFIG_ORIENTATION: number;
                public static CONFIG_SCREEN_LAYOUT: number;
                public static CONFIG_SCREEN_SIZE: number;
                public static CONFIG_SMALLEST_SCREEN_SIZE: number;
                public static CONFIG_TOUCHSCREEN: number;
                public static CONFIG_UI_MODE: number;
                public static CREATOR: android.os.Parcelable.Creator;
                public static DOCUMENT_LAUNCH_ALWAYS: number;
                public static DOCUMENT_LAUNCH_INTO_EXISTING: number;
                public static DOCUMENT_LAUNCH_NEVER: number;
                public static DOCUMENT_LAUNCH_NONE: number;
                public static FLAG_ALLOW_TASK_REPARENTING: number;
                public static FLAG_ALWAYS_RETAIN_TASK_STATE: number;
                public static FLAG_AUTO_REMOVE_FROM_RECENTS: number;
                public static FLAG_CLEAR_TASK_ON_LAUNCH: number;
                public static FLAG_EXCLUDE_FROM_RECENTS: number;
                public static FLAG_FINISH_ON_CLOSE_SYSTEM_DIALOGS: number;
                public static FLAG_FINISH_ON_TASK_LAUNCH: number;
                public static FLAG_HARDWARE_ACCELERATED: number;
                public static FLAG_IMMERSIVE: number;
                public static FLAG_MULTIPROCESS: number;
                public static FLAG_NO_HISTORY: number;
                public static FLAG_RELINQUISH_TASK_IDENTITY: number;
                public static FLAG_RESUME_WHILE_PAUSING: number;
                public static FLAG_SINGLE_USER: number;
                public static FLAG_STATE_NOT_NEEDED: number;
                public static LAUNCH_MULTIPLE: number;
                public static LAUNCH_SINGLE_INSTANCE: number;
                public static LAUNCH_SINGLE_TASK: number;
                public static LAUNCH_SINGLE_TOP: number;
                public static PERSIST_ACROSS_REBOOTS: number;
                public static PERSIST_NEVER: number;
                public static PERSIST_ROOT_ONLY: number;
                public static SCREEN_ORIENTATION_BEHIND: number;
                public static SCREEN_ORIENTATION_FULL_SENSOR: number;
                public static SCREEN_ORIENTATION_FULL_USER: number;
                public static SCREEN_ORIENTATION_LANDSCAPE: number;
                public static SCREEN_ORIENTATION_LOCKED: number;
                public static SCREEN_ORIENTATION_NOSENSOR: number;
                public static SCREEN_ORIENTATION_PORTRAIT: number;
                public static SCREEN_ORIENTATION_REVERSE_LANDSCAPE: number;
                public static SCREEN_ORIENTATION_REVERSE_PORTRAIT: number;
                public static SCREEN_ORIENTATION_SENSOR: number;
                public static SCREEN_ORIENTATION_SENSOR_LANDSCAPE: number;
                public static SCREEN_ORIENTATION_SENSOR_PORTRAIT: number;
                public static SCREEN_ORIENTATION_UNSPECIFIED: number;
                public static SCREEN_ORIENTATION_USER: number;
                public static SCREEN_ORIENTATION_USER_LANDSCAPE: number;
                public static SCREEN_ORIENTATION_USER_PORTRAIT: number;
                public static UIOPTION_SPLIT_ACTION_BAR_WHEN_NARROW: number;
                public configChanges: number;
                public documentLaunchMode: number;
                public flags: number;
                public launchMode: number;
                public maxRecents: number;
                public parentActivityName: string;
                public permission: string;
                public persistableMode: number;
                public screenOrientation: number;
                public softInputMode: number;
                public targetActivity: string;
                public taskAffinity: string;
                public theme: number;
                public uiOptions: number;

                public getThemeResource(): number;

                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public dump(param0: android.util.Printer, param1: string): void;

                public describeContents(): number;

                public constructor(param0: android.content.pm.ActivityInfo);
                public constructor(param0: android.content.pm.PackageItemInfo);

                public toString(): string;

                public constructor(param0: android.content.pm.ComponentInfo);
                public constructor();
            }
        }
    }
}

import javautilComparator = java.util.Comparator;
/// <reference path="./android.content.pm.ApplicationInfo.d.ts" />
/// <reference path="./android.content.pm.PackageItemInfo.d.ts" />
/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export module pm {
            export class ApplicationInfo extends android.content.pm.PackageItemInfo implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public static FLAG_ALLOW_BACKUP: number;
                public static FLAG_ALLOW_CLEAR_USER_DATA: number;
                public static FLAG_ALLOW_TASK_REPARENTING: number;
                public static FLAG_DEBUGGABLE: number;
                public static FLAG_EXTERNAL_STORAGE: number;
                public static FLAG_EXTRACT_NATIVE_LIBS: number;
                public static FLAG_FACTORY_TEST: number;
                public static FLAG_FULL_BACKUP_ONLY: number;
                public static FLAG_HARDWARE_ACCELERATED: number;
                public static FLAG_HAS_CODE: number;
                public static FLAG_INSTALLED: number;
                public static FLAG_IS_DATA_ONLY: number;
                public static FLAG_IS_GAME: number;
                public static FLAG_KILL_AFTER_RESTORE: number;
                public static FLAG_LARGE_HEAP: number;
                public static FLAG_MULTIARCH: number;
                public static FLAG_PERSISTENT: number;
                public static FLAG_RESIZEABLE_FOR_SCREENS: number;
                public static FLAG_RESTORE_ANY_VERSION: number;
                public static FLAG_STOPPED: number;
                public static FLAG_SUPPORTS_LARGE_SCREENS: number;
                public static FLAG_SUPPORTS_NORMAL_SCREENS: number;
                public static FLAG_SUPPORTS_RTL: number;
                public static FLAG_SUPPORTS_SCREEN_DENSITIES: number;
                public static FLAG_SUPPORTS_SMALL_SCREENS: number;
                public static FLAG_SUPPORTS_XLARGE_SCREENS: number;
                public static FLAG_SYSTEM: number;
                public static FLAG_TEST_ONLY: number;
                public static FLAG_UPDATED_SYSTEM_APP: number;
                public static FLAG_USES_CLEARTEXT_TRAFFIC: number;
                public static FLAG_VM_SAFE_MODE: number;
                public backupAgentName: string;
                public className: string;
                public compatibleWidthLimitDp: number;
                public dataDir: string;
                public descriptionRes: number;
                public enabled: boolean;
                public flags: number;
                public largestWidthLimitDp: number;
                public manageSpaceActivityName: string;
                public nativeLibraryDir: string;
                public permission: string;
                public processName: string;
                public publicSourceDir: string;
                public requiresSmallestWidthDp: number;
                public sharedLibraryFiles: native.Array<string>;
                public sourceDir: string;
                public splitPublicSourceDirs: native.Array<string>;
                public splitSourceDirs: native.Array<string>;
                public targetSdkVersion: number;
                public taskAffinity: string;
                public theme: number;
                public uiOptions: number;
                public uid: number;

                public loadDescription(param0: android.content.pm.PackageManager): string;

                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public constructor(param0: android.content.pm.ApplicationInfo);

                public dump(param0: android.util.Printer, param1: string): void;

                public describeContents(): number;

                public constructor(param0: android.content.pm.PackageItemInfo);

                public toString(): string;

                public constructor();
            }
            export module ApplicationInfo {
                export class DisplayNameComparator extends javalangObject implements javautilComparator {
                    public compare(param0: javalangObject, param1: javalangObject): number;

                    public constructor(param0: android.content.pm.PackageManager);

                    public equals(param0: javalangObject): boolean;

                    public compare(param0: android.content.pm.ApplicationInfo, param1: android.content.pm.ApplicationInfo): number;
                }
            }
        }
    }
}

/// <reference path="./android.content.pm.ApplicationInfo.d.ts" />
/// <reference path="./android.content.pm.PackageItemInfo.d.ts" />
/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export module pm {
            export class ComponentInfo extends android.content.pm.PackageItemInfo {
                public applicationInfo: android.content.pm.ApplicationInfo;
                public descriptionRes: number;
                public enabled: boolean;
                public exported: boolean;
                public processName: string;

                public getLogoResource(): number;

                public constructor(param0: android.os.Parcel);

                public loadLabel(param0: android.content.pm.PackageManager): string;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getBannerResource(): number;

                public isEnabled(): boolean;

                public getIconResource(): number;

                public dumpBack(param0: android.util.Printer, param1: string): void;

                public constructor(param0: android.content.pm.PackageItemInfo);
                public constructor(param0: android.content.pm.ComponentInfo);

                public dumpFront(param0: android.util.Printer, param1: string): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module content {
        export module pm {
            export class ConfigurationInfo extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public static GL_ES_VERSION_UNDEFINED: number;
                public static INPUT_FEATURE_FIVE_WAY_NAV: number;
                public static INPUT_FEATURE_HARD_KEYBOARD: number;
                public reqGlEsVersion: number;
                public reqInputFeatures: number;
                public reqKeyboardType: number;
                public reqNavigation: number;
                public reqTouchScreen: number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getGlEsVersion(): string;

                public describeContents(): number;

                public toString(): string;

                public constructor(param0: android.content.pm.ConfigurationInfo);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.pm.FeatureInfo.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module content {
        export module pm {
            export class FeatureGroupInfo extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public features: native.Array<android.content.pm.FeatureInfo>;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public constructor(param0: android.content.pm.FeatureGroupInfo);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module content {
        export module pm {
            export class FeatureInfo extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public static FLAG_REQUIRED: number;
                public static GL_ES_VERSION_UNDEFINED: number;
                public flags: number;
                public name: string;
                public reqGlEsVersion: number;

                public constructor(param0: android.content.pm.FeatureInfo);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getGlEsVersion(): string;

                public describeContents(): number;

                public toString(): string;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.pm.PackageItemInfo.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module content {
        export module pm {
            export class InstrumentationInfo extends android.content.pm.PackageItemInfo implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public dataDir: string;
                public functionalTest: boolean;
                public handleProfiling: boolean;
                public publicSourceDir: string;
                public sourceDir: string;
                public splitPublicSourceDirs: native.Array<string>;
                public splitSourceDirs: native.Array<string>;
                public targetPackage: string;

                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public constructor(param0: android.content.pm.InstrumentationInfo);

                public describeContents(): number;

                public constructor(param0: android.content.pm.PackageItemInfo);

                public toString(): string;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export module pm {
            export class LabeledIntent extends android.content.Intent {
                public static CREATOR: android.os.Parcelable.Creator;

                public constructor(param0: string, param1: string, param2: number);

                public loadLabel(param0: android.content.pm.PackageManager): string;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public loadIcon(param0: android.content.pm.PackageManager): android.graphics.drawable.Drawable;

                public constructor(param0: android.content.Context, param1: javalangClass);
                public constructor(param0: string, param1: number, param2: number);
                public constructor(param0: android.content.Intent);

                public getIconResource(): number;

                public getSourcePackage(): string;

                public constructor(param0: string);
                public constructor();
                public constructor(param0: android.content.Intent, param1: string, param2: string, param3: number);

                public getNonLocalizedLabel(): string;

                public getLabelResource(): number;

                public describeContents(): number;

                public constructor(param0: android.content.Intent, param1: string, param2: number, param3: number);

                public readFromParcel(param0: android.os.Parcel): void;

                public constructor(param0: string, param1: android.net.Uri, param2: android.content.Context, param3: javalangClass);
                public constructor(param0: string, param1: android.net.Uri);
            }
        }
    }
}

/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.pm.ApplicationInfo.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.UserHandle.d.ts" />
declare module android {
    export module content {
        export module pm {
            export class LauncherActivityInfo extends javalangObject {
                public getLabel(): string;

                public getBadgedIcon(param0: number): android.graphics.drawable.Drawable;

                public getApplicationInfo(): android.content.pm.ApplicationInfo;

                public getFirstInstallTime(): number;

                public getComponentName(): android.content.ComponentName;

                public getName(): string;

                public getIcon(param0: number): android.graphics.drawable.Drawable;

                public getUser(): android.os.UserHandle;
            }
        }
    }
}

/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.pm.LauncherActivityInfo.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.UserHandle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module content {
        export module pm {
            export class LauncherApps extends javalangObject {
                public registerCallback(param0: android.content.pm.LauncherApps.Callback, param1: android.os.Handler): void;

                public getActivityList(param0: string, param1: android.os.UserHandle): javautilList;

                public registerCallback(param0: android.content.pm.LauncherApps.Callback): void;

                public startMainActivity(param0: android.content.ComponentName, param1: android.os.UserHandle, param2: android.graphics.Rect, param3: android.os.Bundle): void;

                public unregisterCallback(param0: android.content.pm.LauncherApps.Callback): void;

                public resolveActivity(param0: android.content.Intent, param1: android.os.UserHandle): android.content.pm.LauncherActivityInfo;

                public isActivityEnabled(param0: android.content.ComponentName, param1: android.os.UserHandle): boolean;

                public startAppDetailsActivity(param0: android.content.ComponentName, param1: android.os.UserHandle, param2: android.graphics.Rect, param3: android.os.Bundle): void;

                public isPackageEnabled(param0: string, param1: android.os.UserHandle): boolean;
            }
            export module LauncherApps {
                export abstract class Callback extends javalangObject {
                    public constructor();

                    public onPackagesUnavailable(param0: native.Array<string>, param1: android.os.UserHandle, param2: boolean): void;

                    public onPackageRemoved(param0: string, param1: android.os.UserHandle): void;

                    public onPackagesAvailable(param0: native.Array<string>, param1: android.os.UserHandle, param2: boolean): void;

                    public onPackageChanged(param0: string, param1: android.os.UserHandle): void;

                    public onPackageAdded(param0: string, param1: android.os.UserHandle): void;
                }
            }
        }
    }
}

/// <reference path="./android.content.pm.ActivityInfo.d.ts" />
/// <reference path="./android.content.pm.ApplicationInfo.d.ts" />
/// <reference path="./android.content.pm.ConfigurationInfo.d.ts" />
/// <reference path="./android.content.pm.FeatureGroupInfo.d.ts" />
/// <reference path="./android.content.pm.FeatureInfo.d.ts" />
/// <reference path="./android.content.pm.InstrumentationInfo.d.ts" />
/// <reference path="./android.content.pm.PermissionInfo.d.ts" />
/// <reference path="./android.content.pm.ProviderInfo.d.ts" />
/// <reference path="./android.content.pm.ServiceInfo.d.ts" />
/// <reference path="./android.content.pm.Signature.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module content {
        export module pm {
            export class PackageInfo extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public static INSTALL_LOCATION_AUTO: number;
                public static INSTALL_LOCATION_INTERNAL_ONLY: number;
                public static INSTALL_LOCATION_PREFER_EXTERNAL: number;
                public static REQUESTED_PERMISSION_GRANTED: number;
                public activities: native.Array<android.content.pm.ActivityInfo>;
                public applicationInfo: android.content.pm.ApplicationInfo;
                public baseRevisionCode: number;
                public configPreferences: native.Array<android.content.pm.ConfigurationInfo>;
                public featureGroups: native.Array<android.content.pm.FeatureGroupInfo>;
                public firstInstallTime: number;
                public gids: native.Array<number>;
                public installLocation: number;
                public instrumentation: native.Array<android.content.pm.InstrumentationInfo>;
                public lastUpdateTime: number;
                public packageName: string;
                public permissions: native.Array<android.content.pm.PermissionInfo>;
                public providers: native.Array<android.content.pm.ProviderInfo>;
                public receivers: native.Array<android.content.pm.ActivityInfo>;
                public reqFeatures: native.Array<android.content.pm.FeatureInfo>;
                public requestedPermissions: native.Array<string>;
                public requestedPermissionsFlags: native.Array<number>;
                public services: native.Array<android.content.pm.ServiceInfo>;
                public sharedUserId: string;
                public sharedUserLabel: number;
                public signatures: native.Array<android.content.pm.Signature>;
                public splitNames: native.Array<string>;
                public splitRevisionCodes: native.Array<number>;
                public versionCode: number;
                public versionName: string;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public toString(): string;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.IntentSender.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module content {
        export module pm {
            export class PackageInstaller extends javalangObject {
                public static ACTION_SESSION_DETAILS: string;
                public static EXTRA_OTHER_PACKAGE_NAME: string;
                public static EXTRA_PACKAGE_NAME: string;
                public static EXTRA_SESSION_ID: string;
                public static EXTRA_STATUS: string;
                public static EXTRA_STATUS_MESSAGE: string;
                public static EXTRA_STORAGE_PATH: string;
                public static STATUS_FAILURE: number;
                public static STATUS_FAILURE_ABORTED: number;
                public static STATUS_FAILURE_BLOCKED: number;
                public static STATUS_FAILURE_CONFLICT: number;
                public static STATUS_FAILURE_INCOMPATIBLE: number;
                public static STATUS_FAILURE_INVALID: number;
                public static STATUS_FAILURE_STORAGE: number;
                public static STATUS_PENDING_USER_ACTION: number;
                public static STATUS_SUCCESS: number;

                public updateSessionAppIcon(param0: number, param1: android.graphics.Bitmap): void;

                public registerSessionCallback(param0: android.content.pm.PackageInstaller.SessionCallback): void;

                public getAllSessions(): javautilList;

                public unregisterSessionCallback(param0: android.content.pm.PackageInstaller.SessionCallback): void;

                public updateSessionAppLabel(param0: number, param1: string): void;

                public abandonSession(param0: number): void;

                public createSession(param0: android.content.pm.PackageInstaller.SessionParams): number;

                public registerSessionCallback(param0: android.content.pm.PackageInstaller.SessionCallback, param1: android.os.Handler): void;

                public uninstall(param0: string, param1: android.content.IntentSender): void;

                public openSession(param0: number): android.content.pm.PackageInstaller.Session;

                public getSessionInfo(param0: number): android.content.pm.PackageInstaller.SessionInfo;

                public getMySessions(): javautilList;
            }
            export module PackageInstaller {
                export class Session extends javalangObject implements javaioCloseable {
                    public commit(param0: android.content.IntentSender): void;

                    public setStagingProgress(param0: number): void;

                    public openWrite(param0: string, param1: number, param2: number): javaioOutputStream;

                    public fsync(param0: javaioOutputStream): void;

                    public close(): void;

                    public getNames(): native.Array<string>;

                    public openRead(param0: string): javaioInputStream;

                    public abandon(): void;
                }
                export abstract class SessionCallback extends javalangObject {
                    public onBadgingChanged(param0: number): void;

                    public onCreated(param0: number): void;

                    public constructor();

                    public onActiveChanged(param0: number, param1: boolean): void;

                    public onProgressChanged(param0: number, param1: number): void;

                    public onFinished(param0: number, param1: boolean): void;
                }
                export class SessionInfo extends javalangObject implements android.os.Parcelable {
                    public static CREATOR: android.os.Parcelable.Creator;

                    public getInstallerPackageName(): string;

                    public getProgress(): number;

                    public isActive(): boolean;

                    public getAppPackageName(): string;

                    public getAppIcon(): android.graphics.Bitmap;

                    public describeContents(): number;

                    public getAppLabel(): string;

                    public getSessionId(): number;

                    public createDetailsIntent(): android.content.Intent;

                    public writeToParcel(param0: android.os.Parcel, param1: number): void;
                }
                export class SessionParams extends javalangObject implements android.os.Parcelable {
                    public static CREATOR: android.os.Parcelable.Creator;
                    public static MODE_FULL_INSTALL: number;
                    public static MODE_INHERIT_EXISTING: number;

                    public setReferrerUri(param0: android.net.Uri): void;

                    public setSize(param0: number): void;

                    public setAppIcon(param0: android.graphics.Bitmap): void;

                    public describeContents(): number;

                    public setInstallLocation(param0: number): void;

                    public setAppLabel(param0: string): void;

                    public setOriginatingUri(param0: android.net.Uri): void;

                    public constructor(param0: number);

                    public setAppPackageName(param0: string): void;

                    public writeToParcel(param0: android.os.Parcel, param1: number): void;
                }
            }
        }
    }
}

/// <reference path="./android.content.pm.PackageItemInfo.d.ts" />
/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.content.res.XmlResourceParser.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export module pm {
            export class PackageItemInfo extends javalangObject {
                public banner: number;
                public icon: number;
                public labelRes: number;
                public logo: number;
                public metaData: android.os.Bundle;
                public name: string;
                public nonLocalizedLabel: string;
                public packageName: string;

                public loadUnbadgedIcon(param0: android.content.pm.PackageManager): android.graphics.drawable.Drawable;

                public constructor(param0: android.os.Parcel);

                public loadLabel(param0: android.content.pm.PackageManager): string;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public loadIcon(param0: android.content.pm.PackageManager): android.graphics.drawable.Drawable;

                public loadLogo(param0: android.content.pm.PackageManager): android.graphics.drawable.Drawable;

                public dumpBack(param0: android.util.Printer, param1: string): void;

                public constructor(param0: android.content.pm.PackageItemInfo);

                public loadXmlMetaData(param0: android.content.pm.PackageManager, param1: string): android.content.res.XmlResourceParser;

                public loadBanner(param0: android.content.pm.PackageManager): android.graphics.drawable.Drawable;

                public dumpFront(param0: android.util.Printer, param1: string): void;

                public constructor();
            }
            export module PackageItemInfo {
                export class DisplayNameComparator extends javalangObject implements javautilComparator {
                    public compare(param0: javalangObject, param1: javalangObject): number;
                    public compare(param0: android.content.pm.PackageItemInfo, param1: android.content.pm.PackageItemInfo): number;

                    public constructor(param0: android.content.pm.PackageManager);

                    public equals(param0: javalangObject): boolean;
                }
            }
        }
    }
}

/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.IntentFilter.d.ts" />
/// <reference path="./android.content.pm.ActivityInfo.d.ts" />
/// <reference path="./android.content.pm.ApplicationInfo.d.ts" />
/// <reference path="./android.content.pm.FeatureInfo.d.ts" />
/// <reference path="./android.content.pm.InstrumentationInfo.d.ts" />
/// <reference path="./android.content.pm.PackageInfo.d.ts" />
/// <reference path="./android.content.pm.PackageInstaller.d.ts" />
/// <reference path="./android.content.pm.PermissionGroupInfo.d.ts" />
/// <reference path="./android.content.pm.PermissionInfo.d.ts" />
/// <reference path="./android.content.pm.ProviderInfo.d.ts" />
/// <reference path="./android.content.pm.ResolveInfo.d.ts" />
/// <reference path="./android.content.pm.ServiceInfo.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.content.res.XmlResourceParser.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.UserHandle.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module content {
        export module pm {
            export abstract class PackageManager extends javalangObject {
                public static COMPONENT_ENABLED_STATE_DEFAULT: number;
                public static COMPONENT_ENABLED_STATE_DISABLED: number;
                public static COMPONENT_ENABLED_STATE_DISABLED_UNTIL_USED: number;
                public static COMPONENT_ENABLED_STATE_DISABLED_USER: number;
                public static COMPONENT_ENABLED_STATE_ENABLED: number;
                public static DONT_KILL_APP: number;
                public static EXTRA_VERIFICATION_ID: string;
                public static EXTRA_VERIFICATION_RESULT: string;
                public static FEATURE_APP_WIDGETS: string;
                public static FEATURE_AUDIO_LOW_LATENCY: string;
                public static FEATURE_AUDIO_OUTPUT: string;
                public static FEATURE_AUDIO_PRO: string;
                public static FEATURE_AUTOMOTIVE: string;
                public static FEATURE_BACKUP: string;
                public static FEATURE_BLUETOOTH: string;
                public static FEATURE_BLUETOOTH_LE: string;
                public static FEATURE_CAMERA: string;
                public static FEATURE_CAMERA_ANY: string;
                public static FEATURE_CAMERA_AUTOFOCUS: string;
                public static FEATURE_CAMERA_CAPABILITY_MANUAL_POST_PROCESSING: string;
                public static FEATURE_CAMERA_CAPABILITY_MANUAL_SENSOR: string;
                public static FEATURE_CAMERA_CAPABILITY_RAW: string;
                public static FEATURE_CAMERA_EXTERNAL: string;
                public static FEATURE_CAMERA_FLASH: string;
                public static FEATURE_CAMERA_FRONT: string;
                public static FEATURE_CAMERA_LEVEL_FULL: string;
                public static FEATURE_CONNECTION_SERVICE: string;
                public static FEATURE_CONSUMER_IR: string;
                public static FEATURE_DEVICE_ADMIN: string;
                public static FEATURE_FAKETOUCH: string;
                public static FEATURE_FAKETOUCH_MULTITOUCH_DISTINCT: string;
                public static FEATURE_FAKETOUCH_MULTITOUCH_JAZZHAND: string;
                public static FEATURE_FINGERPRINT: string;
                public static FEATURE_GAMEPAD: string;
                public static FEATURE_HIFI_SENSORS: string;
                public static FEATURE_HOME_SCREEN: string;
                public static FEATURE_INPUT_METHODS: string;
                public static FEATURE_LEANBACK: string;
                public static FEATURE_LIVE_TV: string;
                public static FEATURE_LIVE_WALLPAPER: string;
                public static FEATURE_LOCATION: string;
                public static FEATURE_LOCATION_GPS: string;
                public static FEATURE_LOCATION_NETWORK: string;
                public static FEATURE_MANAGED_USERS: string;
                public static FEATURE_MICROPHONE: string;
                public static FEATURE_MIDI: string;
                public static FEATURE_NFC: string;
                public static FEATURE_NFC_HOST_CARD_EMULATION: string;
                public static FEATURE_OPENGLES_EXTENSION_PACK: string;
                public static FEATURE_PRINTING: string;
                public static FEATURE_SCREEN_LANDSCAPE: string;
                public static FEATURE_SCREEN_PORTRAIT: string;
                public static FEATURE_SECURELY_REMOVES_USERS: string;
                public static FEATURE_SENSOR_ACCELEROMETER: string;
                public static FEATURE_SENSOR_AMBIENT_TEMPERATURE: string;
                public static FEATURE_SENSOR_BAROMETER: string;
                public static FEATURE_SENSOR_COMPASS: string;
                public static FEATURE_SENSOR_GYROSCOPE: string;
                public static FEATURE_SENSOR_HEART_RATE: string;
                public static FEATURE_SENSOR_HEART_RATE_ECG: string;
                public static FEATURE_SENSOR_LIGHT: string;
                public static FEATURE_SENSOR_PROXIMITY: string;
                public static FEATURE_SENSOR_RELATIVE_HUMIDITY: string;
                public static FEATURE_SENSOR_STEP_COUNTER: string;
                public static FEATURE_SENSOR_STEP_DETECTOR: string;
                public static FEATURE_SIP: string;
                public static FEATURE_SIP_VOIP: string;
                public static FEATURE_TELEPHONY: string;
                public static FEATURE_TELEPHONY_CDMA: string;
                public static FEATURE_TELEPHONY_GSM: string;
                public static FEATURE_TELEVISION: string;
                public static FEATURE_TOUCHSCREEN: string;
                public static FEATURE_TOUCHSCREEN_MULTITOUCH: string;
                public static FEATURE_TOUCHSCREEN_MULTITOUCH_DISTINCT: string;
                public static FEATURE_TOUCHSCREEN_MULTITOUCH_JAZZHAND: string;
                public static FEATURE_USB_ACCESSORY: string;
                public static FEATURE_USB_HOST: string;
                public static FEATURE_VERIFIED_BOOT: string;
                public static FEATURE_WATCH: string;
                public static FEATURE_WEBVIEW: string;
                public static FEATURE_WIFI: string;
                public static FEATURE_WIFI_DIRECT: string;
                public static GET_ACTIVITIES: number;
                public static GET_CONFIGURATIONS: number;
                public static GET_DISABLED_COMPONENTS: number;
                public static GET_DISABLED_UNTIL_USED_COMPONENTS: number;
                public static GET_GIDS: number;
                public static GET_INSTRUMENTATION: number;
                public static GET_INTENT_FILTERS: number;
                public static GET_META_DATA: number;
                public static GET_PERMISSIONS: number;
                public static GET_PROVIDERS: number;
                public static GET_RECEIVERS: number;
                public static GET_RESOLVED_FILTER: number;
                public static GET_SERVICES: number;
                public static GET_SHARED_LIBRARY_FILES: number;
                public static GET_SIGNATURES: number;
                public static GET_UNINSTALLED_PACKAGES: number;
                public static GET_URI_PERMISSION_PATTERNS: number;
                public static MATCH_ALL: number;
                public static MATCH_DEFAULT_ONLY: number;
                public static MAXIMUM_VERIFICATION_TIMEOUT: number;
                public static PERMISSION_DENIED: number;
                public static PERMISSION_GRANTED: number;
                public static SIGNATURE_FIRST_NOT_SIGNED: number;
                public static SIGNATURE_MATCH: number;
                public static SIGNATURE_NEITHER_SIGNED: number;
                public static SIGNATURE_NO_MATCH: number;
                public static SIGNATURE_SECOND_NOT_SIGNED: number;
                public static SIGNATURE_UNKNOWN_PACKAGE: number;
                public static VERIFICATION_ALLOW: number;
                public static VERIFICATION_REJECT: number;

                public getServiceInfo(param0: android.content.ComponentName, param1: number): android.content.pm.ServiceInfo;

                public getUserBadgedIcon(param0: android.graphics.drawable.Drawable, param1: android.os.UserHandle): android.graphics.drawable.Drawable;

                public checkSignatures(param0: number, param1: number): number;

                public getApplicationInfo(param0: string, param1: number): android.content.pm.ApplicationInfo;

                public addPermission(param0: android.content.pm.PermissionInfo): boolean;

                public resolveService(param0: android.content.Intent, param1: number): android.content.pm.ResolveInfo;

                public getPackageGids(param0: string): native.Array<number>;

                public getInstalledApplications(param0: number): javautilList;

                public getApplicationLabel(param0: android.content.pm.ApplicationInfo): string;

                public checkPermission(param0: string, param1: string): number;

                public getDefaultActivityIcon(): android.graphics.drawable.Drawable;

                public constructor();

                public getPackageInstaller(): android.content.pm.PackageInstaller;

                public getSystemAvailableFeatures(): native.Array<android.content.pm.FeatureInfo>;

                public queryIntentContentProviders(param0: android.content.Intent, param1: number): javautilList;

                public setInstallerPackageName(param0: string, param1: string): void;

                public getActivityIcon(param0: android.content.ComponentName): android.graphics.drawable.Drawable;

                public getDrawable(param0: string, param1: number, param2: android.content.pm.ApplicationInfo): android.graphics.drawable.Drawable;

                public isPermissionRevokedByPolicy(param0: string, param1: string): boolean;

                public queryIntentServices(param0: android.content.Intent, param1: number): javautilList;

                public getPermissionGroupInfo(param0: string, param1: number): android.content.pm.PermissionGroupInfo;

                public getActivityLogo(param0: android.content.ComponentName): android.graphics.drawable.Drawable;

                public getText(param0: string, param1: number, param2: android.content.pm.ApplicationInfo): string;

                public getComponentEnabledSetting(param0: android.content.ComponentName): number;

                public getActivityBanner(param0: android.content.Intent): android.graphics.drawable.Drawable;

                public getResourcesForActivity(param0: android.content.ComponentName): android.content.res.Resources;

                public getInstalledPackages(param0: number): javautilList;

                public getInstrumentationInfo(param0: android.content.ComponentName, param1: number): android.content.pm.InstrumentationInfo;

                public getInstallerPackageName(param0: string): string;

                public resolveActivity(param0: android.content.Intent, param1: number): android.content.pm.ResolveInfo;

                public getApplicationIcon(param0: string): android.graphics.drawable.Drawable;

                public getActivityInfo(param0: android.content.ComponentName, param1: number): android.content.pm.ActivityInfo;

                public setApplicationEnabledSetting(param0: string, param1: number, param2: number): void;

                public getUserBadgedLabel(param0: string, param1: android.os.UserHandle): string;

                public setComponentEnabledSetting(param0: android.content.ComponentName, param1: number, param2: number): void;

                public getApplicationBanner(param0: string): android.graphics.drawable.Drawable;

                public getResourcesForApplication(param0: string): android.content.res.Resources;

                public getUserBadgedDrawableForDensity(param0: android.graphics.drawable.Drawable, param1: android.os.UserHandle, param2: android.graphics.Rect, param3: number): android.graphics.drawable.Drawable;

                public addPreferredActivity(param0: android.content.IntentFilter, param1: number, param2: native.Array<android.content.ComponentName>, param3: android.content.ComponentName): void;

                public resolveContentProvider(param0: string, param1: number): android.content.pm.ProviderInfo;

                public removePermission(param0: string): void;

                public removePackageFromPreferred(param0: string): void;

                public getActivityBanner(param0: android.content.ComponentName): android.graphics.drawable.Drawable;

                public queryIntentActivityOptions(param0: android.content.ComponentName, param1: native.Array<android.content.Intent>, param2: android.content.Intent, param3: number): javautilList;

                public canonicalToCurrentPackageNames(param0: native.Array<string>): native.Array<string>;

                public getActivityLogo(param0: android.content.Intent): android.graphics.drawable.Drawable;

                public getPermissionInfo(param0: string, param1: number): android.content.pm.PermissionInfo;

                public getLaunchIntentForPackage(param0: string): android.content.Intent;

                public getPreferredPackages(param0: number): javautilList;

                public getResourcesForApplication(param0: android.content.pm.ApplicationInfo): android.content.res.Resources;

                public getApplicationBanner(param0: android.content.pm.ApplicationInfo): android.graphics.drawable.Drawable;

                public queryPermissionsByGroup(param0: string, param1: number): javautilList;

                public getLeanbackLaunchIntentForPackage(param0: string): android.content.Intent;

                public checkSignatures(param0: string, param1: string): number;

                public clearPackagePreferredActivities(param0: string): void;

                public getAllPermissionGroups(param0: number): javautilList;

                public addPermissionAsync(param0: android.content.pm.PermissionInfo): boolean;

                public getApplicationLogo(param0: string): android.graphics.drawable.Drawable;

                public extendVerificationTimeout(param0: number, param1: number, param2: number): void;

                public queryInstrumentation(param0: string, param1: number): javautilList;

                public getActivityIcon(param0: android.content.Intent): android.graphics.drawable.Drawable;

                public getSystemSharedLibraryNames(): native.Array<string>;

                public getApplicationIcon(param0: android.content.pm.ApplicationInfo): android.graphics.drawable.Drawable;

                public verifyPendingInstall(param0: number, param1: number): void;

                public getPackageArchiveInfo(param0: string, param1: number): android.content.pm.PackageInfo;

                public getProviderInfo(param0: android.content.ComponentName, param1: number): android.content.pm.ProviderInfo;

                public queryBroadcastReceivers(param0: android.content.Intent, param1: number): javautilList;

                public getApplicationEnabledSetting(param0: string): number;

                public getReceiverInfo(param0: android.content.ComponentName, param1: number): android.content.pm.ActivityInfo;

                public addPackageToPreferred(param0: string): void;

                public getPackagesHoldingPermissions(param0: native.Array<string>, param1: number): javautilList;

                public hasSystemFeature(param0: string): boolean;

                public queryContentProviders(param0: string, param1: number, param2: number): javautilList;

                public getXml(param0: string, param1: number, param2: android.content.pm.ApplicationInfo): android.content.res.XmlResourceParser;

                public getPreferredActivities(param0: javautilList, param1: javautilList, param2: string): number;

                public getNameForUid(param0: number): string;

                public queryIntentActivities(param0: android.content.Intent, param1: number): javautilList;

                public getPackageInfo(param0: string, param1: number): android.content.pm.PackageInfo;

                public getPackagesForUid(param0: number): native.Array<string>;

                public isSafeMode(): boolean;

                public currentToCanonicalPackageNames(param0: native.Array<string>): native.Array<string>;

                public getApplicationLogo(param0: android.content.pm.ApplicationInfo): android.graphics.drawable.Drawable;
            }
            export module PackageManager {
                export class NameNotFoundException extends android.util.AndroidException {
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor();
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: javalangException);
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export module pm {
            export class PackageStats extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public cacheSize: number;
                public codeSize: number;
                public dataSize: number;
                public externalCacheSize: number;
                public externalCodeSize: number;
                public externalDataSize: number;
                public externalMediaSize: number;
                public externalObbSize: number;
                public packageName: string;

                public constructor(param0: android.os.Parcel);
                public constructor(param0: android.content.pm.PackageStats);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public toString(): string;

                public constructor(param0: string);
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export module pm {
            export class PathPermission extends android.os.PatternMatcher {
                public static CREATOR: android.os.Parcelable.Creator;

                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public constructor(param0: string, param1: number);

                public getWritePermission(): string;

                public describeContents(): number;

                public constructor(param0: string, param1: number, param2: string, param3: string);

                public getReadPermission(): string;
            }
        }
    }
}

/// <reference path="./android.content.pm.PackageItemInfo.d.ts" />
/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module content {
        export module pm {
            export class PermissionGroupInfo extends android.content.pm.PackageItemInfo implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public static FLAG_PERSONAL_INFO: number;
                public descriptionRes: number;
                public flags: number;
                public nonLocalizedDescription: string;
                public priority: number;

                public loadDescription(param0: android.content.pm.PackageManager): string;

                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public constructor(param0: android.content.pm.PermissionGroupInfo);
                public constructor(param0: android.content.pm.PackageItemInfo);

                public toString(): string;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.pm.PackageItemInfo.d.ts" />
/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module content {
        export module pm {
            export class PermissionInfo extends android.content.pm.PackageItemInfo implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public static FLAG_COSTS_MONEY: number;
                public static FLAG_INSTALLED: number;
                public static PROTECTION_DANGEROUS: number;
                public static PROTECTION_FLAG_APPOP: number;
                public static PROTECTION_FLAG_DEVELOPMENT: number;
                public static PROTECTION_FLAG_INSTALLER: number;
                public static PROTECTION_FLAG_PRE23: number;
                public static PROTECTION_FLAG_PREINSTALLED: number;
                public static PROTECTION_FLAG_PRIVILEGED: number;
                public static PROTECTION_FLAG_SYSTEM: number;
                public static PROTECTION_FLAG_VERIFIER: number;
                public static PROTECTION_MASK_BASE: number;
                public static PROTECTION_MASK_FLAGS: number;
                public static PROTECTION_NORMAL: number;
                public static PROTECTION_SIGNATURE: number;
                public static PROTECTION_SIGNATURE_OR_SYSTEM: number;
                public descriptionRes: number;
                public flags: number;
                public group: string;
                public nonLocalizedDescription: string;
                public protectionLevel: number;

                public constructor(param0: android.content.pm.PermissionInfo);

                public loadDescription(param0: android.content.pm.PackageManager): string;

                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public constructor(param0: android.content.pm.PackageItemInfo);

                public toString(): string;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.pm.ComponentInfo.d.ts" />
/// <reference path="./android.content.pm.PackageItemInfo.d.ts" />
/// <reference path="./android.content.pm.PathPermission.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.PatternMatcher.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export module pm {
            export class ProviderInfo extends android.content.pm.ComponentInfo implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public static FLAG_SINGLE_USER: number;
                public authority: string;
                public flags: number;
                public grantUriPermissions: boolean;
                public initOrder: number;
                public isSyncable: boolean;
                public multiprocess: boolean;
                public pathPermissions: native.Array<android.content.pm.PathPermission>;
                public readPermission: string;
                public uriPermissionPatterns: native.Array<android.os.PatternMatcher>;
                public writePermission: string;

                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public dump(param0: android.util.Printer, param1: string): void;

                public describeContents(): number;

                public constructor(param0: android.content.pm.ProviderInfo);
                public constructor(param0: android.content.pm.PackageItemInfo);

                public toString(): string;

                public constructor(param0: android.content.pm.ComponentInfo);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.IntentFilter.d.ts" />
/// <reference path="./android.content.pm.ActivityInfo.d.ts" />
/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.content.pm.ProviderInfo.d.ts" />
/// <reference path="./android.content.pm.ResolveInfo.d.ts" />
/// <reference path="./android.content.pm.ServiceInfo.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export module pm {
            export class ResolveInfo extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public activityInfo: android.content.pm.ActivityInfo;
                public filter: android.content.IntentFilter;
                public icon: number;
                public isDefault: boolean;
                public labelRes: number;
                public match: number;
                public nonLocalizedLabel: string;
                public preferredOrder: number;
                public priority: number;
                public providerInfo: android.content.pm.ProviderInfo;
                public resolvePackageName: string;
                public serviceInfo: android.content.pm.ServiceInfo;
                public specificIndex: number;

                public constructor(param0: android.content.pm.ResolveInfo);

                public loadLabel(param0: android.content.pm.PackageManager): string;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public loadIcon(param0: android.content.pm.PackageManager): android.graphics.drawable.Drawable;

                public dump(param0: android.util.Printer, param1: string): void;

                public describeContents(): number;

                public getIconResource(): number;

                public toString(): string;

                public constructor();
            }
            export module ResolveInfo {
                export class DisplayNameComparator extends javalangObject implements javautilComparator {
                    public compare(param0: javalangObject, param1: javalangObject): number;
                    public compare(param0: android.content.pm.ResolveInfo, param1: android.content.pm.ResolveInfo): number;

                    public constructor(param0: android.content.pm.PackageManager);

                    public equals(param0: javalangObject): boolean;
                }
            }
        }
    }
}

/// <reference path="./android.content.pm.ComponentInfo.d.ts" />
/// <reference path="./android.content.pm.PackageItemInfo.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export module pm {
            export class ServiceInfo extends android.content.pm.ComponentInfo implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public static FLAG_ISOLATED_PROCESS: number;
                public static FLAG_SINGLE_USER: number;
                public static FLAG_STOP_WITH_TASK: number;
                public flags: number;
                public permission: string;

                public constructor(param0: android.content.pm.ServiceInfo);
                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public dump(param0: android.util.Printer, param1: string): void;

                public describeContents(): number;

                public constructor(param0: android.content.pm.PackageItemInfo);

                public toString(): string;

                public constructor(param0: android.content.pm.ComponentInfo);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export module pm {
            export class Signature extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public constructor(param0: native.Array<number>);

                public equals(param0: javalangObject): boolean;

                public toChars(param0: native.Array<string>, param1: native.Array<number>): native.Array<string>;

                public hashCode(): number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public toCharsString(): string;

                public describeContents(): number;

                public toChars(): native.Array<string>;

                public toByteArray(): native.Array<number>;

                public constructor(param0: string);
            }
        }
    }
}

/// <reference path="./android.content.res.AssetFileDescriptor.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.FileInputStream.d.ts" />
/// <reference path="./java.io.FileOutputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export module res {
            export class AssetFileDescriptor extends javalangObject implements android.os.Parcelable, javaioCloseable {
                public static CREATOR: android.os.Parcelable.Creator;
                public static UNKNOWN_LENGTH: number;

                public createOutputStream(): javaioFileOutputStream;

                public close(): void;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public createInputStream(): javaioFileInputStream;

                public constructor(param0: android.os.ParcelFileDescriptor, param1: number, param2: number);

                public toString(): string;

                public constructor(param0: android.os.ParcelFileDescriptor, param1: number, param2: number, param3: android.os.Bundle);

                public getLength(): number;

                public getDeclaredLength(): number;

                public getStartOffset(): number;

                public getParcelFileDescriptor(): android.os.ParcelFileDescriptor;

                public describeContents(): number;

                public getExtras(): android.os.Bundle;

                public getFileDescriptor(): javaioFileDescriptor;
            }
            export module AssetFileDescriptor {
                export class AutoCloseInputStream extends android.os.ParcelFileDescriptor.AutoCloseInputStream {
                    public read(param0: native.Array<number>, param1: number, param2: number): number;
                    public read(): number;

                    public reset(): void;

                    public constructor(param0: string);

                    public read(param0: native.Array<number>): number;

                    public markSupported(): boolean;

                    public skip(param0: number): number;

                    public constructor(param0: javaioFileDescriptor);
                    public constructor(param0: android.content.res.AssetFileDescriptor);

                    public mark(param0: number): void;

                    public available(): number;

                    public constructor();
                    public constructor(param0: javaioFile);

                    public close(): void;

                    public constructor(param0: android.os.ParcelFileDescriptor);
                }
                export class AutoCloseOutputStream extends android.os.ParcelFileDescriptor.AutoCloseOutputStream {
                    public write(param0: native.Array<number>): void;

                    public constructor(param0: string);
                    public constructor(param0: javaioFile, param1: boolean);
                    public constructor(param0: javaioFileDescriptor);

                    public write(param0: number): void;

                    public flush(): void;

                    public constructor(param0: android.content.res.AssetFileDescriptor);

                    public write(param0: native.Array<number>, param1: number, param2: number): void;

                    public constructor();
                    public constructor(param0: javaioFile);

                    public close(): void;

                    public constructor(param0: string, param1: boolean);
                    public constructor(param0: android.os.ParcelFileDescriptor);
                }
            }
        }
    }
}

/// <reference path="./android.content.res.AssetFileDescriptor.d.ts" />
/// <reference path="./android.content.res.XmlResourceParser.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export module res {
            export class AssetManager extends javalangObject implements javalangAutoCloseable {
                public static ACCESS_BUFFER: number;
                public static ACCESS_RANDOM: number;
                public static ACCESS_STREAMING: number;
                public static ACCESS_UNKNOWN: number;

                public openFd(param0: string): android.content.res.AssetFileDescriptor;

                public close(): void;

                public open(param0: string, param1: number): javaioInputStream;

                public list(param0: string): native.Array<string>;

                public openXmlResourceParser(param0: number, param1: string): android.content.res.XmlResourceParser;

                public openNonAssetFd(param0: string): android.content.res.AssetFileDescriptor;

                public finalize(): void;

                public getLocales(): native.Array<string>;

                public openXmlResourceParser(param0: string): android.content.res.XmlResourceParser;

                public open(param0: string): javaioInputStream;

                public openNonAssetFd(param0: number, param1: string): android.content.res.AssetFileDescriptor;
            }
            export module AssetManager {
                export class AssetInputStream extends javaioInputStream {
                    public available(): number;

                    public read(param0: native.Array<number>, param1: number, param2: number): number;
                    public read(): number;

                    public reset(): void;

                    public read(param0: native.Array<number>): number;

                    public markSupported(): boolean;

                    public finalize(): void;

                    public close(): void;

                    public skip(param0: number): number;

                    public mark(param0: number): void;
                }
            }
        }
    }
}

/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
declare module android {
    export module content {
        export module res {
            export class ColorStateList extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public isOpaque(): boolean;

                public getColorForState(param0: native.Array<number>, param1: number): number;

                public getChangingConfigurations(): number;

                public constructor(param0: native.Array<native.Array<number>>, param1: native.Array<number>);

                public toString(): string;

                public withAlpha(param0: number): android.content.res.ColorStateList;

                public static createFromXml(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.content.res.Resources.Theme): android.content.res.ColorStateList;

                public getDefaultColor(): number;

                public static valueOf(param0: number): android.content.res.ColorStateList;

                public describeContents(): number;

                public static createFromXml(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser): android.content.res.ColorStateList;

                public isStateful(): boolean;
            }
        }
    }
}

import javautilLocale = java.util.Locale;
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module android {
    export module content {
        export module res {
            export class Configuration extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public static DENSITY_DPI_UNDEFINED: number;
                public static HARDKEYBOARDHIDDEN_NO: number;
                public static HARDKEYBOARDHIDDEN_UNDEFINED: number;
                public static HARDKEYBOARDHIDDEN_YES: number;
                public static KEYBOARDHIDDEN_NO: number;
                public static KEYBOARDHIDDEN_UNDEFINED: number;
                public static KEYBOARDHIDDEN_YES: number;
                public static KEYBOARD_12KEY: number;
                public static KEYBOARD_NOKEYS: number;
                public static KEYBOARD_QWERTY: number;
                public static KEYBOARD_UNDEFINED: number;
                public static MNC_ZERO: number;
                public static NAVIGATIONHIDDEN_NO: number;
                public static NAVIGATIONHIDDEN_UNDEFINED: number;
                public static NAVIGATIONHIDDEN_YES: number;
                public static NAVIGATION_DPAD: number;
                public static NAVIGATION_NONAV: number;
                public static NAVIGATION_TRACKBALL: number;
                public static NAVIGATION_UNDEFINED: number;
                public static NAVIGATION_WHEEL: number;
                public static ORIENTATION_LANDSCAPE: number;
                public static ORIENTATION_PORTRAIT: number;
                public static ORIENTATION_SQUARE: number;
                public static ORIENTATION_UNDEFINED: number;
                public static SCREENLAYOUT_LAYOUTDIR_LTR: number;
                public static SCREENLAYOUT_LAYOUTDIR_MASK: number;
                public static SCREENLAYOUT_LAYOUTDIR_RTL: number;
                public static SCREENLAYOUT_LAYOUTDIR_SHIFT: number;
                public static SCREENLAYOUT_LAYOUTDIR_UNDEFINED: number;
                public static SCREENLAYOUT_LONG_MASK: number;
                public static SCREENLAYOUT_LONG_NO: number;
                public static SCREENLAYOUT_LONG_UNDEFINED: number;
                public static SCREENLAYOUT_LONG_YES: number;
                public static SCREENLAYOUT_ROUND_MASK: number;
                public static SCREENLAYOUT_ROUND_NO: number;
                public static SCREENLAYOUT_ROUND_UNDEFINED: number;
                public static SCREENLAYOUT_ROUND_YES: number;
                public static SCREENLAYOUT_SIZE_LARGE: number;
                public static SCREENLAYOUT_SIZE_MASK: number;
                public static SCREENLAYOUT_SIZE_NORMAL: number;
                public static SCREENLAYOUT_SIZE_SMALL: number;
                public static SCREENLAYOUT_SIZE_UNDEFINED: number;
                public static SCREENLAYOUT_SIZE_XLARGE: number;
                public static SCREENLAYOUT_UNDEFINED: number;
                public static SCREEN_HEIGHT_DP_UNDEFINED: number;
                public static SCREEN_WIDTH_DP_UNDEFINED: number;
                public static SMALLEST_SCREEN_WIDTH_DP_UNDEFINED: number;
                public static TOUCHSCREEN_FINGER: number;
                public static TOUCHSCREEN_NOTOUCH: number;
                public static TOUCHSCREEN_STYLUS: number;
                public static TOUCHSCREEN_UNDEFINED: number;
                public static UI_MODE_NIGHT_MASK: number;
                public static UI_MODE_NIGHT_NO: number;
                public static UI_MODE_NIGHT_UNDEFINED: number;
                public static UI_MODE_NIGHT_YES: number;
                public static UI_MODE_TYPE_APPLIANCE: number;
                public static UI_MODE_TYPE_CAR: number;
                public static UI_MODE_TYPE_DESK: number;
                public static UI_MODE_TYPE_MASK: number;
                public static UI_MODE_TYPE_NORMAL: number;
                public static UI_MODE_TYPE_TELEVISION: number;
                public static UI_MODE_TYPE_UNDEFINED: number;
                public static UI_MODE_TYPE_WATCH: number;
                public densityDpi: number;
                public fontScale: number;
                public hardKeyboardHidden: number;
                public keyboard: number;
                public keyboardHidden: number;
                public locale: javautilLocale;
                public mcc: number;
                public mnc: number;
                public navigation: number;
                public navigationHidden: number;
                public orientation: number;
                public screenHeightDp: number;
                public screenLayout: number;
                public screenWidthDp: number;
                public smallestScreenWidthDp: number;
                public touchscreen: number;
                public uiMode: number;

                public getLayoutDirection(): number;

                public setTo(param0: android.content.res.Configuration): void;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public diff(param0: android.content.res.Configuration): number;

                public updateFrom(param0: android.content.res.Configuration): number;

                public toString(): string;

                public isScreenRound(): boolean;

                public isLayoutSizeAtLeast(param0: number): boolean;

                public setLayoutDirection(param0: javautilLocale): void;

                public constructor();

                public compareTo(param0: android.content.res.Configuration): number;

                public equals(param0: javalangObject): boolean;

                public hashCode(): number;

                public setToDefaults(): void;

                public describeContents(): number;

                public readFromParcel(param0: android.os.Parcel): void;

                public static needNewResources(param0: number, param1: number): boolean;

                public constructor(param0: android.content.res.Configuration);

                public equals(param0: android.content.res.Configuration): boolean;

                public setLocale(param0: javautilLocale): void;
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module content {
        export module res {
            export class ObbInfo extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public static OBB_OVERLAY: number;
                public filename: string;
                public flags: number;
                public packageName: string;
                public version: number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public toString(): string;
            }
        }
    }
}

/// <reference path="./android.content.res.ObbInfo.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export module res {
            export class ObbScanner extends javalangObject {
                public static getObbInfo(param0: string): android.content.res.ObbInfo;
            }
        }
    }
}

/// <reference path="./android.content.res.AssetFileDescriptor.d.ts" />
/// <reference path="./android.content.res.AssetManager.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
/// <reference path="./android.content.res.XmlResourceParser.d.ts" />
/// <reference path="./android.graphics.Movie.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.util.DisplayMetrics.d.ts" />
/// <reference path="./android.util.TypedValue.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module content {
        export module res {
            export class Resources extends javalangObject {
                public getColorStateList(param0: number, param1: android.content.res.Resources.Theme): android.content.res.ColorStateList;

                public getValue(param0: number, param1: android.util.TypedValue, param2: boolean): void;

                public getTextArray(param0: number): native.Array<javalangCharSequence>;

                public getMovie(param0: number): android.graphics.Movie;

                public openRawResourceFd(param0: number): android.content.res.AssetFileDescriptor;

                public getResourceEntryName(param0: number): string;

                public getDimension(param0: number): number;

                public getQuantityText(param0: number, param1: number): string;

                public getValueForDensity(param0: number, param1: number, param2: android.util.TypedValue, param3: boolean): void;

                public updateConfiguration(param0: android.content.res.Configuration, param1: android.util.DisplayMetrics): void;

                public getDrawableForDensity(param0: number, param1: number, param2: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;

                public getDrawable(param0: number): android.graphics.drawable.Drawable;

                public openRawResource(param0: number): javaioInputStream;

                public getQuantityString(param0: number, param1: number, param2: native.Array<javalangObject>): string;

                public getIntArray(param0: number): native.Array<number>;

                public getDrawableForDensity(param0: number, param1: number): android.graphics.drawable.Drawable;

                public finishPreloading(): void;

                public getAnimation(param0: number): android.content.res.XmlResourceParser;

                public getString(param0: number, param1: native.Array<javalangObject>): string;

                public getColor(param0: number): number;

                public getText(param0: number, param1: string): string;

                public obtainAttributes(param0: android.util.AttributeSet, param1: native.Array<number>): android.content.res.TypedArray;

                public getBoolean(param0: number): boolean;

                public getResourceName(param0: number): string;

                public parseBundleExtra(param0: string, param1: android.util.AttributeSet, param2: android.os.Bundle): void;

                public openRawResource(param0: number, param1: android.util.TypedValue): javaioInputStream;

                public flushLayoutCache(): void;

                public getDimensionPixelSize(param0: number): number;

                public getXml(param0: number): android.content.res.XmlResourceParser;

                public getDisplayMetrics(): android.util.DisplayMetrics;

                public getString(param0: number): string;

                public getInteger(param0: number): number;

                public getConfiguration(): android.content.res.Configuration;

                public getDrawable(param0: number, param1: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;

                public newTheme(): android.content.res.Resources.Theme;

                public getResourceTypeName(param0: number): string;

                public getColor(param0: number, param1: android.content.res.Resources.Theme): number;

                public parseBundleExtras(param0: android.content.res.XmlResourceParser, param1: android.os.Bundle): void;

                public getText(param0: number): string;

                public getStringArray(param0: number): native.Array<string>;

                public getFraction(param0: number, param1: number, param2: number): number;

                public getDimensionPixelOffset(param0: number): number;

                public getResourcePackageName(param0: number): string;

                public obtainTypedArray(param0: number): android.content.res.TypedArray;

                public getIdentifier(param0: string, param1: string, param2: string): number;

                public getAssets(): android.content.res.AssetManager;

                public constructor(param0: android.content.res.AssetManager, param1: android.util.DisplayMetrics, param2: android.content.res.Configuration);

                public getLayout(param0: number): android.content.res.XmlResourceParser;

                public getQuantityString(param0: number, param1: number): string;

                public getValue(param0: string, param1: android.util.TypedValue, param2: boolean): void;

                public static getSystem(): android.content.res.Resources;

                public getColorStateList(param0: number): android.content.res.ColorStateList;
            }
            export module Resources {
                export class NotFoundException extends javalangRuntimeException {
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor();
                    public constructor(param0: javalangThrowable);
                }
                export class Theme extends javalangObject {
                    public resolveAttribute(param0: number, param1: android.util.TypedValue, param2: boolean): boolean;

                    public getChangingConfigurations(): number;

                    public getDrawable(param0: number): android.graphics.drawable.Drawable;

                    public getResources(): android.content.res.Resources;

                    public finalize(): void;

                    public obtainStyledAttributes(param0: native.Array<number>): android.content.res.TypedArray;

                    public dump(param0: number, param1: string, param2: string): void;

                    public applyStyle(param0: number, param1: boolean): void;

                    public setTo(param0: android.content.res.Resources.Theme): void;

                    public obtainStyledAttributes(param0: number, param1: native.Array<number>): android.content.res.TypedArray;
                    public obtainStyledAttributes(param0: android.util.AttributeSet, param1: native.Array<number>, param2: number, param3: number): android.content.res.TypedArray;
                }
            }
        }
    }
}

/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.TypedValue.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export module res {
            export class TypedArray extends javalangObject {
                public recycle(): void;

                public getString(param0: number): string;

                public getTextArray(param0: number): native.Array<javalangCharSequence>;

                public getFraction(param0: number, param1: number, param2: number, param3: number): number;

                public getFloat(param0: number, param1: number): number;

                public getPositionDescription(): string;

                public hasValue(param0: number): boolean;

                public getNonResourceString(param0: number): string;

                public getInt(param0: number, param1: number): number;

                public getIndex(param0: number): number;

                public getInteger(param0: number, param1: number): number;

                public getValue(param0: number, param1: android.util.TypedValue): boolean;

                public getDrawable(param0: number): android.graphics.drawable.Drawable;

                public getText(param0: number): string;

                public getIndexCount(): number;

                public getDimensionPixelSize(param0: number, param1: number): number;

                public getLayoutDimension(param0: number, param1: number): number;

                public length(): number;

                public getChangingConfigurations(): number;

                public getColor(param0: number, param1: number): number;

                public peekValue(param0: number): android.util.TypedValue;

                public toString(): string;

                public getResources(): android.content.res.Resources;

                public getBoolean(param0: number, param1: boolean): boolean;

                public getResourceId(param0: number, param1: number): number;

                public getDimension(param0: number, param1: number): number;

                public getLayoutDimension(param0: number, param1: string): number;

                public getType(param0: number): number;

                public hasValueOrEmpty(param0: number): boolean;

                public getColorStateList(param0: number): android.content.res.ColorStateList;

                public getDimensionPixelOffset(param0: number, param1: number): number;
            }
        }
    }
}

import javaioReader = java.io.Reader;
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module content {
        export module res {
            export class XmlResourceParser extends javalangObject implements orgxmlpullv1XmlPullParser, android.util.AttributeSet, javalangAutoCloseable {
                /**
                 * Constructs a new instance of the android.content.res.XmlResourceParser interface with the provided implementation.
                 */
                public constructor(implementation: {
                    close(): void;
                    setFeature(param0: string, param1: boolean): void;
                    getFeature(param0: string): boolean;
                    setProperty(param0: string, param1: javalangObject): void;
                    getProperty(param0: string): javalangObject;
                    setInput(param0: javaioReader): void;
                    setInput(param0: javaioInputStream, param1: string): void;
                    getInputEncoding(): string;
                    defineEntityReplacementText(param0: string, param1: string): void;
                    getNamespaceCount(param0: number): number;
                    getNamespacePrefix(param0: number): string;
                    getNamespaceUri(param0: number): string;
                    getNamespace(param0: string): string;
                    getDepth(): number;
                    getPositionDescription(): string;
                    getLineNumber(): number;
                    getColumnNumber(): number;
                    isWhitespace(): boolean;
                    getText(): string;
                    getTextCharacters(param0: native.Array<number>): native.Array<string>;
                    getNamespace(): string;
                    getName(): string;
                    getPrefix(): string;
                    isEmptyElementTag(): boolean;
                    getAttributeCount(): number;
                    getAttributeNamespace(param0: number): string;
                    getAttributeName(param0: number): string;
                    getAttributePrefix(param0: number): string;
                    getAttributeType(param0: number): string;
                    isAttributeDefault(param0: number): boolean;
                    getAttributeValue(param0: number): string;
                    getAttributeValue(param0: string, param1: string): string;
                    getEventType(): number;
                    next(): number;
                    nextToken(): number;
                    require(param0: number, param1: string, param2: string): void;
                    nextText(): string;
                    nextTag(): number;
                    <clinit>(): void;
                    getAttributeCount(): number;
                    getAttributeName(param0: number): string;
                    getAttributeValue(param0: number): string;
                    getAttributeValue(param0: string, param1: string): string;
                    getPositionDescription(): string;
                    getAttributeNameResource(param0: number): number;
                    getAttributeListValue(param0: string, param1: string, param2: native.Array<string>, param3: number): number;
                    getAttributeBooleanValue(param0: string, param1: string, param2: boolean): boolean;
                    getAttributeResourceValue(param0: string, param1: string, param2: number): number;
                    getAttributeIntValue(param0: string, param1: string, param2: number): number;
                    getAttributeUnsignedIntValue(param0: string, param1: string, param2: number): number;
                    getAttributeFloatValue(param0: string, param1: string, param2: number): number;
                    getAttributeListValue(param0: number, param1: native.Array<string>, param2: number): number;
                    getAttributeBooleanValue(param0: number, param1: boolean): boolean;
                    getAttributeResourceValue(param0: number, param1: number): number;
                    getAttributeIntValue(param0: number, param1: number): number;
                    getAttributeUnsignedIntValue(param0: number, param1: number): number;
                    getAttributeFloatValue(param0: number, param1: number): number;
                    getIdAttribute(): string;
                    getClassAttribute(): string;
                    getIdAttributeResourceValue(param0: number): number;
                    getStyleAttribute(): number;
                    close(): void;
                });

                public static NO_NAMESPACE: string;
                public static TEXT: number;
                public static ENTITY_REF: number;
                public static COMMENT: number;
                public static END_DOCUMENT: number;
                public static DOCDECL: number;
                public static END_TAG: number;
                public static FEATURE_VALIDATION: string;
                public static START_DOCUMENT: number;
                public static CDSECT: number;
                public static IGNORABLE_WHITESPACE: number;
                public static START_TAG: number;
                public static FEATURE_PROCESS_NAMESPACES: string;
                public static TYPES: native.Array<string>;
                public static FEATURE_PROCESS_DOCDECL: string;
                public static PROCESSING_INSTRUCTION: number;
                public static FEATURE_REPORT_NAMESPACE_ATTRIBUTES: string;

                public getLineNumber(): number;

                public getAttributeIntValue(param0: number, param1: number): number;

                public getEventType(): number;

                public getAttributeResourceValue(param0: number, param1: number): number;

                public getAttributeUnsignedIntValue(param0: string, param1: string, param2: number): number;

                public getPositionDescription(): string;

                public getAttributePrefix(param0: number): string;

                public getAttributeIntValue(param0: string, param1: string, param2: number): number;

                public nextText(): string;

                public nextToken(): number;

                public getColumnNumber(): number;

                public getAttributeNamespace(param0: number): string;

                public close(): void;

                public require(param0: number, param1: string, param2: string): void;

                public getNamespaceCount(param0: number): number;

                public getAttributeName(param0: number): string;

                public getName(): string;

                public getNamespace(param0: string): string;

                public getTextCharacters(param0: native.Array<number>): native.Array<string>;

                public getAttributeType(param0: number): string;

                public getStyleAttribute(): number;

                public getAttributeValue(param0: number): string;

                public getAttributeUnsignedIntValue(param0: number, param1: number): number;

                public setInput(param0: javaioReader): void;

                public isWhitespace(): boolean;

                public next(): number;

                public getInputEncoding(): string;

                public getAttributeValue(param0: string, param1: string): string;

                public getIdAttributeResourceValue(param0: number): number;

                public nextTag(): number;

                public getIdAttribute(): string;

                public getAttributeCount(): number;

                public getAttributeNameResource(param0: number): number;

                public getAttributeBooleanValue(param0: string, param1: string, param2: boolean): boolean;

                public getClassAttribute(): string;

                public getAttributeFloatValue(param0: string, param1: string, param2: number): number;

                public getAttributeListValue(param0: number, param1: native.Array<string>, param2: number): number;

                public getAttributeResourceValue(param0: string, param1: string, param2: number): number;

                public getAttributeListValue(param0: string, param1: string, param2: native.Array<string>, param3: number): number;

                public getNamespaceUri(param0: number): string;

                public isEmptyElementTag(): boolean;

                public getNamespacePrefix(param0: number): string;

                public getPrefix(): string;

                public getProperty(param0: string): javalangObject;

                public setInput(param0: javaioInputStream, param1: string): void;

                public getAttributeFloatValue(param0: number, param1: number): number;

                public getFeature(param0: string): boolean;

                public getText(): string;

                public isAttributeDefault(param0: number): boolean;

                public getNamespace(): string;

                public setProperty(param0: string, param1: javalangObject): void;

                public setFeature(param0: string, param1: boolean): void;

                public getAttributeBooleanValue(param0: number, param1: boolean): boolean;

                public defineEntityReplacementText(param0: string, param1: string): void;

                public getDepth(): number;
            }
        }
    }
}
