/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.database.AbstractCursor.d.ts" />
/// <reference path="./android.database.CharArrayBuffer.d.ts" />
/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.database.CursorWindow.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module database {
        export abstract class AbstractCursor extends javalangObject implements android.database.CrossProcessCursor {
            public mClosed: boolean;
            public mContentResolver: android.content.ContentResolver;
            public mPos: number;

            public getFloat(param0: number): number;

            public requery(): boolean;

            public isAfterLast(): boolean;

            public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

            public getColumnIndexOrThrow(param0: string): number;

            public setExtras(param0: android.os.Bundle): void;

            public onMove(param0: number, param1: number): boolean;

            public getCount(): number;

            public getShort(param0: number): number;

            public getType(param0: number): number;

            public isNull(param0: number): boolean;

            public getDouble(param0: number): number;

            public getColumnName(param0: number): string;

            public getString(param0: number): string;

            public deactivate(): void;

            public getUpdatedField(param0: number): javalangObject;

            public copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;

            public constructor();

            public move(param0: number): boolean;

            public registerContentObserver(param0: android.database.ContentObserver): void;

            public getColumnIndex(param0: string): number;

            public moveToPrevious(): boolean;

            public fillWindow(param0: number, param1: android.database.CursorWindow): void;

            public getExtras(): android.os.Bundle;

            public getInt(param0: number): number;

            public getWantsAllOnMoveCalls(): boolean;

            public isClosed(): boolean;

            public registerDataSetObserver(param0: android.database.DataSetObserver): void;

            public onChange(param0: boolean): void;

            public getPosition(): number;

            public getWindow(): android.database.CursorWindow;

            public getColumnNames(): native.Array<string>;

            public isBeforeFirst(): boolean;

            public moveToFirst(): boolean;

            public getNotificationUri(): android.net.Uri;

            public respond(param0: android.os.Bundle): android.os.Bundle;

            public isFieldUpdated(param0: number): boolean;

            public isLast(): boolean;

            public getBlob(param0: number): native.Array<number>;

            public close(): void;

            public moveToNext(): boolean;

            public setNotificationUri(param0: android.content.ContentResolver, param1: android.net.Uri): void;

            public finalize(): void;

            public moveToLast(): boolean;

            public getColumnCount(): number;

            public checkPosition(): void;

            public unregisterContentObserver(param0: android.database.ContentObserver): void;

            public isFirst(): boolean;

            public moveToPosition(param0: number): boolean;

            public getLong(param0: number): number;
        }
        export module AbstractCursor {
            export class SelfContentObserver extends android.database.ContentObserver {
                public deliverSelfNotifications(): boolean;

                public constructor(param0: android.database.AbstractCursor);

                public onChange(param0: boolean, param1: android.net.Uri): void;

                public constructor(param0: android.os.Handler);

                public onChange(param0: boolean): void;
            }
        }
    }
}

/// <reference path="./android.database.CharArrayBuffer.d.ts" />
/// <reference path="./android.database.CursorWindow.d.ts" />
declare module android {
    export module database {
        export abstract class AbstractWindowedCursor extends android.database.AbstractCursor {
            public mWindow: android.database.CursorWindow;

            public isNull(param0: number): boolean;

            public checkPosition(): void;

            public getDouble(param0: number): number;

            public getString(param0: number): string;

            public isLong(param0: number): boolean;

            public getFloat(param0: number): number;

            public copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;

            public constructor();

            public isString(param0: number): boolean;

            public setWindow(param0: android.database.CursorWindow): void;

            public getWindow(): android.database.CursorWindow;

            public hasWindow(): boolean;

            public getLong(param0: number): number;

            public isBlob(param0: number): boolean;

            public onMove(param0: number, param1: number): boolean;

            public isFloat(param0: number): boolean;

            public getBlob(param0: number): native.Array<number>;

            public getShort(param0: number): number;

            public getType(param0: number): number;

            public fillWindow(param0: number, param1: android.database.CursorWindow): void;

            public getInt(param0: number): number;
        }
    }
}

declare module android {
    export module database {
        export class CharArrayBuffer extends javalangObject {
            public data: native.Array<string>;
            public sizeCopied: number;

            public constructor(param0: native.Array<string>);
            public constructor(param0: number);
        }
    }
}

/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module database {
        export class ContentObservable extends android.database.Observable {
            public notifyChange(param0: boolean): void;

            public registerObserver(param0: android.database.ContentObserver): void;
            public registerObserver(param0: javalangObject): void;

            public dispatchChange(param0: boolean, param1: android.net.Uri): void;
            public dispatchChange(param0: boolean): void;

            public constructor();
        }
    }
}

/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
declare module android {
    export module database {
        export abstract class ContentObserver extends javalangObject {
            public deliverSelfNotifications(): boolean;

            public onChange(param0: boolean): void;
            public onChange(param0: boolean, param1: android.net.Uri): void;

            public constructor(param0: android.os.Handler);

            public dispatchChange(param0: boolean, param1: android.net.Uri): void;
            public dispatchChange(param0: boolean): void;
        }
    }
}

/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.database.CharArrayBuffer.d.ts" />
/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.database.CursorWindow.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module database {
        export class CrossProcessCursor extends javalangObject implements android.database.Cursor {
            /**
             * Constructs a new instance of the android.database.CrossProcessCursor interface with the provided implementation.
             */
            public constructor(implementation: {
                getWindow(): android.database.CursorWindow;
                fillWindow(param0: number, param1: android.database.CursorWindow): void;
                onMove(param0: number, param1: number): boolean;
                getCount(): number;
                getPosition(): number;
                move(param0: number): boolean;
                moveToPosition(param0: number): boolean;
                moveToFirst(): boolean;
                moveToLast(): boolean;
                moveToNext(): boolean;
                moveToPrevious(): boolean;
                isFirst(): boolean;
                isLast(): boolean;
                isBeforeFirst(): boolean;
                isAfterLast(): boolean;
                getColumnIndex(param0: string): number;
                getColumnIndexOrThrow(param0: string): number;
                getColumnName(param0: number): string;
                getColumnNames(): native.Array<string>;
                getColumnCount(): number;
                getBlob(param0: number): native.Array<number>;
                getString(param0: number): string;
                copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;
                getShort(param0: number): number;
                getInt(param0: number): number;
                getLong(param0: number): number;
                getFloat(param0: number): number;
                getDouble(param0: number): number;
                getType(param0: number): number;
                isNull(param0: number): boolean;
                deactivate(): void;
                requery(): boolean;
                close(): void;
                isClosed(): boolean;
                registerContentObserver(param0: android.database.ContentObserver): void;
                unregisterContentObserver(param0: android.database.ContentObserver): void;
                registerDataSetObserver(param0: android.database.DataSetObserver): void;
                unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
                setNotificationUri(param0: android.content.ContentResolver, param1: android.net.Uri): void;
                getNotificationUri(): android.net.Uri;
                getWantsAllOnMoveCalls(): boolean;
                setExtras(param0: android.os.Bundle): void;
                getExtras(): android.os.Bundle;
                respond(param0: android.os.Bundle): android.os.Bundle;
                close(): void;
                close(): void;
            });

            public static FIELD_TYPE_INTEGER: number;
            public static FIELD_TYPE_BLOB: number;
            public static FIELD_TYPE_NULL: number;
            public static FIELD_TYPE_STRING: number;
            public static FIELD_TYPE_FLOAT: number;

            public isClosed(): boolean;

            public registerDataSetObserver(param0: android.database.DataSetObserver): void;

            public getFloat(param0: number): number;

            public requery(): boolean;

            public getPosition(): number;

            public getWindow(): android.database.CursorWindow;

            public isBeforeFirst(): boolean;

            public isAfterLast(): boolean;

            public getColumnNames(): native.Array<string>;

            public moveToFirst(): boolean;

            public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

            public getNotificationUri(): android.net.Uri;

            public respond(param0: android.os.Bundle): android.os.Bundle;

            public getColumnIndexOrThrow(param0: string): number;

            public setExtras(param0: android.os.Bundle): void;

            public onMove(param0: number, param1: number): boolean;

            public isLast(): boolean;

            public getCount(): number;

            public getBlob(param0: number): native.Array<number>;

            public moveToNext(): boolean;

            public getShort(param0: number): number;

            public close(): void;

            public getType(param0: number): number;

            public setNotificationUri(param0: android.content.ContentResolver, param1: android.net.Uri): void;

            public moveToLast(): boolean;

            public isNull(param0: number): boolean;

            public getColumnCount(): number;

            public getColumnName(param0: number): string;

            public getDouble(param0: number): number;

            public unregisterContentObserver(param0: android.database.ContentObserver): void;

            public isFirst(): boolean;

            public getString(param0: number): string;

            public deactivate(): void;

            public copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;

            public move(param0: number): boolean;

            public moveToPosition(param0: number): boolean;

            public getLong(param0: number): number;

            public registerContentObserver(param0: android.database.ContentObserver): void;

            public getColumnIndex(param0: string): number;

            public moveToPrevious(): boolean;

            public fillWindow(param0: number, param1: android.database.CursorWindow): void;

            public getExtras(): android.os.Bundle;

            public getInt(param0: number): number;

            public getWantsAllOnMoveCalls(): boolean;
        }
    }
}

/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.database.CharArrayBuffer.d.ts" />
/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.CursorWindow.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module database {
        export class CrossProcessCursorWrapper extends android.database.CursorWrapper implements android.database.CrossProcessCursor {
            public isClosed(): boolean;

            public registerDataSetObserver(param0: android.database.DataSetObserver): void;

            public getFloat(param0: number): number;

            public requery(): boolean;

            public getPosition(): number;

            public getWindow(): android.database.CursorWindow;

            public isBeforeFirst(): boolean;

            public isAfterLast(): boolean;

            public getColumnNames(): native.Array<string>;

            public moveToFirst(): boolean;

            public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

            public getNotificationUri(): android.net.Uri;

            public respond(param0: android.os.Bundle): android.os.Bundle;

            public getColumnIndexOrThrow(param0: string): number;

            public setExtras(param0: android.os.Bundle): void;

            public onMove(param0: number, param1: number): boolean;

            public isLast(): boolean;

            public getCount(): number;

            public getBlob(param0: number): native.Array<number>;

            public moveToNext(): boolean;

            public getShort(param0: number): number;

            public close(): void;

            public getType(param0: number): number;

            public setNotificationUri(param0: android.content.ContentResolver, param1: android.net.Uri): void;

            public moveToLast(): boolean;

            public isNull(param0: number): boolean;

            public getColumnCount(): number;

            public getColumnName(param0: number): string;

            public getDouble(param0: number): number;

            public unregisterContentObserver(param0: android.database.ContentObserver): void;

            public isFirst(): boolean;

            public getString(param0: number): string;

            public deactivate(): void;

            public copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;

            public move(param0: number): boolean;

            public moveToPosition(param0: number): boolean;

            public constructor(param0: android.database.Cursor);

            public getLong(param0: number): number;

            public registerContentObserver(param0: android.database.ContentObserver): void;

            public getColumnIndex(param0: string): number;

            public moveToPrevious(): boolean;

            public fillWindow(param0: number, param1: android.database.CursorWindow): void;

            public getExtras(): android.os.Bundle;

            public getInt(param0: number): number;

            public getWantsAllOnMoveCalls(): boolean;
        }
    }
}

/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.database.CharArrayBuffer.d.ts" />
/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module database {
        export class Cursor extends javalangObject implements javaioCloseable {
            /**
             * Constructs a new instance of the android.database.Cursor interface with the provided implementation.
             */
            public constructor(implementation: {
                getCount(): number;
                getPosition(): number;
                move(param0: number): boolean;
                moveToPosition(param0: number): boolean;
                moveToFirst(): boolean;
                moveToLast(): boolean;
                moveToNext(): boolean;
                moveToPrevious(): boolean;
                isFirst(): boolean;
                isLast(): boolean;
                isBeforeFirst(): boolean;
                isAfterLast(): boolean;
                getColumnIndex(param0: string): number;
                getColumnIndexOrThrow(param0: string): number;
                getColumnName(param0: number): string;
                getColumnNames(): native.Array<string>;
                getColumnCount(): number;
                getBlob(param0: number): native.Array<number>;
                getString(param0: number): string;
                copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;
                getShort(param0: number): number;
                getInt(param0: number): number;
                getLong(param0: number): number;
                getFloat(param0: number): number;
                getDouble(param0: number): number;
                getType(param0: number): number;
                isNull(param0: number): boolean;
                deactivate(): void;
                requery(): boolean;
                close(): void;
                isClosed(): boolean;
                registerContentObserver(param0: android.database.ContentObserver): void;
                unregisterContentObserver(param0: android.database.ContentObserver): void;
                registerDataSetObserver(param0: android.database.DataSetObserver): void;
                unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
                setNotificationUri(param0: android.content.ContentResolver, param1: android.net.Uri): void;
                getNotificationUri(): android.net.Uri;
                getWantsAllOnMoveCalls(): boolean;
                setExtras(param0: android.os.Bundle): void;
                getExtras(): android.os.Bundle;
                respond(param0: android.os.Bundle): android.os.Bundle;
                close(): void;
                close(): void;
            });

            public static FIELD_TYPE_INTEGER: number;
            public static FIELD_TYPE_BLOB: number;
            public static FIELD_TYPE_NULL: number;
            public static FIELD_TYPE_STRING: number;
            public static FIELD_TYPE_FLOAT: number;

            public isClosed(): boolean;

            public registerDataSetObserver(param0: android.database.DataSetObserver): void;

            public getFloat(param0: number): number;

            public requery(): boolean;

            public getPosition(): number;

            public isBeforeFirst(): boolean;

            public isAfterLast(): boolean;

            public getColumnNames(): native.Array<string>;

            public moveToFirst(): boolean;

            public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

            public getNotificationUri(): android.net.Uri;

            public respond(param0: android.os.Bundle): android.os.Bundle;

            public getColumnIndexOrThrow(param0: string): number;

            public setExtras(param0: android.os.Bundle): void;

            public isLast(): boolean;

            public getCount(): number;

            public getBlob(param0: number): native.Array<number>;

            public moveToNext(): boolean;

            public getShort(param0: number): number;

            public close(): void;

            public getType(param0: number): number;

            public setNotificationUri(param0: android.content.ContentResolver, param1: android.net.Uri): void;

            public moveToLast(): boolean;

            public isNull(param0: number): boolean;

            public getColumnCount(): number;

            public getColumnName(param0: number): string;

            public getDouble(param0: number): number;

            public unregisterContentObserver(param0: android.database.ContentObserver): void;

            public isFirst(): boolean;

            public getString(param0: number): string;

            public deactivate(): void;

            public copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;

            public move(param0: number): boolean;

            public moveToPosition(param0: number): boolean;

            public getLong(param0: number): number;

            public registerContentObserver(param0: android.database.ContentObserver): void;

            public getColumnIndex(param0: string): number;

            public moveToPrevious(): boolean;

            public getExtras(): android.os.Bundle;

            public getInt(param0: number): number;

            public getWantsAllOnMoveCalls(): boolean;
        }
    }
}

import javalangIndexOutOfBoundsException = java.lang.IndexOutOfBoundsException;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module database {
        export class CursorIndexOutOfBoundsException extends javalangIndexOutOfBoundsException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
            public constructor(param0: number, param1: number);
        }
    }
}

import javalangIterable = java.lang.Iterable;
import javalangEnum = java.lang.Enum;
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
declare module android {
    export module database {
        export class CursorJoiner extends javalangObject implements javalangIterable {
            public constructor(param0: android.database.Cursor, param1: native.Array<string>, param2: android.database.Cursor, param3: native.Array<string>);

            public iterator(): javautilIterator;

            public next(): android.database.CursorJoiner.Result;

            public hasNext(): boolean;

            public remove(): void;
        }
        export module CursorJoiner {
            export class Result extends javalangEnum {
                public static BOTH: android.database.CursorJoiner.Result;
                public static LEFT: android.database.CursorJoiner.Result;
                public static RIGHT: android.database.CursorJoiner.Result;

                public static valueOf(param0: string): android.database.CursorJoiner.Result;

                public static values(): native.Array<android.database.CursorJoiner.Result>;

                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
        }
    }
}

/// <reference path="./android.database.CharArrayBuffer.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module database {
        export class CursorWindow extends android.database.sqlite.SQLiteClosable implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public isLong(param0: number, param1: number): boolean;

            public getShort(param0: number, param1: number): number;

            public constructor(param0: boolean);

            public getType(param0: number, param1: number): number;

            public getStartPosition(): number;

            public copyStringToBuffer(param0: number, param1: number, param2: android.database.CharArrayBuffer): void;

            public onAllReferencesReleased(): void;

            public allocRow(): boolean;

            public getBlob(param0: number, param1: number): native.Array<number>;

            public putNull(param0: number, param1: number): boolean;

            public getLong(param0: number, param1: number): number;

            public getNumRows(): number;

            public getInt(param0: number, param1: number): number;

            public setStartPosition(param0: number): void;

            public isNull(param0: number, param1: number): boolean;

            public putBlob(param0: native.Array<number>, param1: number, param2: number): boolean;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getFloat(param0: number, param1: number): number;

            public close(): void;

            public isBlob(param0: number, param1: number): boolean;

            public constructor(param0: string);

            public finalize(): void;

            public setNumColumns(param0: number): boolean;

            public isString(param0: number, param1: number): boolean;

            public putString(param0: string, param1: number, param2: number): boolean;

            public putDouble(param0: number, param1: number, param2: number): boolean;

            public clear(): void;

            public getString(param0: number, param1: number): string;

            public getDouble(param0: number, param1: number): number;

            public static newFromParcel(param0: android.os.Parcel): android.database.CursorWindow;

            public constructor();

            public freeLastRow(): void;

            public toString(): string;

            public describeContents(): number;

            public isFloat(param0: number, param1: number): boolean;

            public putLong(param0: number, param1: number, param2: number): boolean;
        }
    }
}

/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.database.CharArrayBuffer.d.ts" />
/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module database {
        export class CursorWrapper extends javalangObject implements android.database.Cursor {
            public isClosed(): boolean;

            public registerDataSetObserver(param0: android.database.DataSetObserver): void;

            public getFloat(param0: number): number;

            public requery(): boolean;

            public getPosition(): number;

            public getWrappedCursor(): android.database.Cursor;

            public getColumnNames(): native.Array<string>;

            public isAfterLast(): boolean;

            public isBeforeFirst(): boolean;

            public moveToFirst(): boolean;

            public getNotificationUri(): android.net.Uri;

            public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

            public respond(param0: android.os.Bundle): android.os.Bundle;

            public getColumnIndexOrThrow(param0: string): number;

            public setExtras(param0: android.os.Bundle): void;

            public isLast(): boolean;

            public getCount(): number;

            public getBlob(param0: number): native.Array<number>;

            public close(): void;

            public getShort(param0: number): number;

            public moveToNext(): boolean;

            public getType(param0: number): number;

            public setNotificationUri(param0: android.content.ContentResolver, param1: android.net.Uri): void;

            public moveToLast(): boolean;

            public isNull(param0: number): boolean;

            public getColumnCount(): number;

            public getColumnName(param0: number): string;

            public getDouble(param0: number): number;

            public unregisterContentObserver(param0: android.database.ContentObserver): void;

            public isFirst(): boolean;

            public deactivate(): void;

            public getString(param0: number): string;

            public copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;

            public move(param0: number): boolean;

            public moveToPosition(param0: number): boolean;

            public constructor(param0: android.database.Cursor);

            public getLong(param0: number): number;

            public registerContentObserver(param0: android.database.ContentObserver): void;

            public getColumnIndex(param0: string): number;

            public moveToPrevious(): boolean;

            public getExtras(): android.os.Bundle;

            public getInt(param0: number): number;

            public getWantsAllOnMoveCalls(): boolean;
        }
    }
}

declare module android {
    export module database {
        export class DataSetObservable extends android.database.Observable {
            public notifyChanged(): void;

            public constructor();

            public notifyInvalidated(): void;
        }
    }
}

declare module android {
    export module database {
        export abstract class DataSetObserver extends javalangObject {
            public onInvalidated(): void;

            public constructor();

            public onChanged(): void;
        }
    }
}

/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
declare module android {
    export module database {
        export class DatabaseErrorHandler extends javalangObject {
            /**
             * Constructs a new instance of the android.database.DatabaseErrorHandler interface with the provided implementation.
             */
            public constructor(implementation: {
                onCorruption(param0: android.database.sqlite.SQLiteDatabase): void;
            });

            public onCorruption(param0: android.database.sqlite.SQLiteDatabase): void;
        }
    }
}

import javalangStringBuilder = java.lang.StringBuilder;
import javaioPrintStream = java.io.PrintStream;
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteProgram.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteStatement.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.io.PrintStream.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuilder.d.ts" />
declare module android {
    export module database {
        export class DatabaseUtils extends javalangObject {
            public static STATEMENT_ABORT: number;
            public static STATEMENT_ATTACH: number;
            public static STATEMENT_BEGIN: number;
            public static STATEMENT_COMMIT: number;
            public static STATEMENT_DDL: number;
            public static STATEMENT_OTHER: number;
            public static STATEMENT_PRAGMA: number;
            public static STATEMENT_SELECT: number;
            public static STATEMENT_UNPREPARED: number;
            public static STATEMENT_UPDATE: number;

            public static dumpCurrentRow(param0: android.database.Cursor, param1: javalangStringBuilder): void;

            public static queryNumEntries(param0: android.database.sqlite.SQLiteDatabase, param1: string, param2: string, param3: native.Array<string>): number;

            public static createDbFromSqlStatements(param0: android.content.Context, param1: string, param2: number, param3: string): void;

            public static writeExceptionToParcel(param0: android.os.Parcel, param1: javalangException): void;

            public static cursorDoubleToCursorValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues): void;

            public static longForQuery(param0: android.database.sqlite.SQLiteDatabase, param1: string, param2: native.Array<string>): number;

            public static appendValueToSql(param0: javalangStringBuilder, param1: javalangObject): void;

            public static readExceptionWithFileNotFoundExceptionFromParcel(param0: android.os.Parcel): void;

            public static cursorFloatToContentValuesIfPresent(param0: android.database.Cursor, param1: android.content.ContentValues, param2: string): void;

            public static dumpCursor(param0: android.database.Cursor, param1: javalangStringBuilder): void;

            public static cursorDoubleToContentValuesIfPresent(param0: android.database.Cursor, param1: android.content.ContentValues, param2: string): void;

            public static cursorRowToContentValues(param0: android.database.Cursor, param1: android.content.ContentValues): void;

            public static cursorLongToContentValuesIfPresent(param0: android.database.Cursor, param1: android.content.ContentValues, param2: string): void;

            public static readExceptionFromParcel(param0: android.os.Parcel): void;

            public static dumpCurrentRow(param0: android.database.Cursor): void;

            public static queryNumEntries(param0: android.database.sqlite.SQLiteDatabase, param1: string): number;

            public static dumpCursorToString(param0: android.database.Cursor): string;

            public static blobFileDescriptorForQuery(param0: android.database.sqlite.SQLiteStatement, param1: native.Array<string>): android.os.ParcelFileDescriptor;

            public static cursorStringToInsertHelper(param0: android.database.Cursor, param1: string, param2: android.database.DatabaseUtils.InsertHelper, param3: number): void;

            public static queryNumEntries(param0: android.database.sqlite.SQLiteDatabase, param1: string, param2: string): number;

            public static blobFileDescriptorForQuery(param0: android.database.sqlite.SQLiteDatabase, param1: string, param2: native.Array<string>): android.os.ParcelFileDescriptor;

            public static cursorLongToContentValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues): void;

            public static dumpCursor(param0: android.database.Cursor, param1: javaioPrintStream): void;

            public static cursorLongToContentValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues, param3: string): void;

            public static appendEscapedSQLString(param0: javalangStringBuilder, param1: string): void;

            public static getHexCollationKey(param0: string): string;

            public static cursorDoubleToContentValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues, param3: string): void;

            public static cursorStringToContentValuesIfPresent(param0: android.database.Cursor, param1: android.content.ContentValues, param2: string): void;

            public static dumpCursor(param0: android.database.Cursor): void;

            public static sqlEscapeString(param0: string): string;

            public static getSqlStatementType(param0: string): number;

            public static cursorStringToContentValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues, param3: string): void;

            public static readExceptionWithOperationApplicationExceptionFromParcel(param0: android.os.Parcel): void;

            public constructor();

            public static longForQuery(param0: android.database.sqlite.SQLiteStatement, param1: native.Array<string>): number;

            public static cursorIntToContentValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues): void;

            public static getCollationKey(param0: string): string;

            public static stringForQuery(param0: android.database.sqlite.SQLiteStatement, param1: native.Array<string>): string;

            public static dumpCurrentRow(param0: android.database.Cursor, param1: javaioPrintStream): void;

            public static appendSelectionArgs(param0: native.Array<string>, param1: native.Array<string>): native.Array<string>;

            public static stringForQuery(param0: android.database.sqlite.SQLiteDatabase, param1: string, param2: native.Array<string>): string;

            public static concatenateWhere(param0: string, param1: string): string;

            public static cursorIntToContentValuesIfPresent(param0: android.database.Cursor, param1: android.content.ContentValues, param2: string): void;

            public static dumpCurrentRowToString(param0: android.database.Cursor): string;

            public static cursorShortToContentValuesIfPresent(param0: android.database.Cursor, param1: android.content.ContentValues, param2: string): void;

            public static cursorStringToContentValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues): void;

            public static cursorIntToContentValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues, param3: string): void;

            public static bindObjectToProgram(param0: android.database.sqlite.SQLiteProgram, param1: number, param2: javalangObject): void;
        }
        export module DatabaseUtils {
            export class InsertHelper extends javalangObject {
                public replace(param0: android.content.ContentValues): number;

                public bind(param0: number, param1: native.Array<number>): void;
                public bind(param0: number, param1: boolean): void;
                public bind(param0: number, param1: string): void;

                public close(): void;

                public getColumnIndex(param0: string): number;

                public prepareForReplace(): void;

                public prepareForInsert(): void;

                public bindNull(param0: number): void;

                public constructor(param0: android.database.sqlite.SQLiteDatabase, param1: string);

                public bind(param0: number, param1: number): void;

                public insert(param0: android.content.ContentValues): number;

                public execute(): number;
            }
        }
    }
}

/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
declare module android {
    export module database {
        export class DefaultDatabaseErrorHandler extends javalangObject implements android.database.DatabaseErrorHandler {
            public onCorruption(param0: android.database.sqlite.SQLiteDatabase): void;

            public constructor();
        }
    }
}

/// <reference path="./android.database.CursorWindow.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module database {
        export class MatrixCursor extends android.database.AbstractCursor {
            public isNull(param0: number): boolean;

            public constructor(param0: native.Array<string>, param1: number);

            public getDouble(param0: number): number;

            public getString(param0: number): string;

            public getFloat(param0: number): number;

            public constructor();

            public newRow(): android.database.MatrixCursor.RowBuilder;

            public getWindow(): android.database.CursorWindow;

            public getColumnNames(): native.Array<string>;

            public constructor(param0: native.Array<string>);

            public getLong(param0: number): number;

            public addRow(param0: javalangIterable): void;

            public onMove(param0: number, param1: number): boolean;

            public getCount(): number;

            public getBlob(param0: number): native.Array<number>;

            public addRow(param0: native.Array<javalangObject>): void;

            public getShort(param0: number): number;

            public getType(param0: number): number;

            public fillWindow(param0: number, param1: android.database.CursorWindow): void;

            public getInt(param0: number): number;
        }
        export module MatrixCursor {
            export class RowBuilder extends javalangObject {
                public add(param0: javalangObject): android.database.MatrixCursor.RowBuilder;
                public add(param0: string, param1: javalangObject): android.database.MatrixCursor.RowBuilder;
            }
        }
    }
}

/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.CursorWindow.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
declare module android {
    export module database {
        export class MergeCursor extends android.database.AbstractCursor {
            public isNull(param0: number): boolean;

            public getDouble(param0: number): number;

            public unregisterContentObserver(param0: android.database.ContentObserver): void;

            public registerDataSetObserver(param0: android.database.DataSetObserver): void;

            public getString(param0: number): string;

            public deactivate(): void;

            public getFloat(param0: number): number;

            public requery(): boolean;

            public constructor(param0: native.Array<android.database.Cursor>);
            public constructor();

            public getWindow(): android.database.CursorWindow;

            public getColumnNames(): native.Array<string>;

            public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

            public getLong(param0: number): number;

            public registerContentObserver(param0: android.database.ContentObserver): void;

            public onMove(param0: number, param1: number): boolean;

            public getCount(): number;

            public getBlob(param0: number): native.Array<number>;

            public getShort(param0: number): number;

            public close(): void;

            public getType(param0: number): number;

            public fillWindow(param0: number, param1: android.database.CursorWindow): void;

            public getInt(param0: number): number;
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module android {
    export module database {
        export abstract class Observable extends javalangObject {
            public mObservers: javautilArrayList;

            public unregisterAll(): void;

            public registerObserver(param0: javalangObject): void;

            public constructor();

            public unregisterObserver(param0: javalangObject): void;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module database {
        export class SQLException extends javalangRuntimeException {
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
    export module database {
        export class StaleDataException extends javalangRuntimeException {
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
    export module database {
        export module sqlite {
            export class SQLiteAbortException extends android.database.sqlite.SQLiteException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module database {
        export module sqlite {
            export class SQLiteAccessPermException extends android.database.sqlite.SQLiteException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module database {
        export module sqlite {
            export class SQLiteBindOrColumnIndexOutOfRangeException extends android.database.sqlite.SQLiteException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module database {
        export module sqlite {
            export class SQLiteBlobTooBigException extends android.database.sqlite.SQLiteException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module database {
        export module sqlite {
            export class SQLiteCantOpenDatabaseException extends android.database.sqlite.SQLiteException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

declare module android {
    export module database {
        export module sqlite {
            export abstract class SQLiteClosable extends javalangObject implements javaioCloseable {
                public releaseReference(): void;

                public acquireReference(): void;

                public close(): void;

                public releaseReferenceFromContainer(): void;

                public onAllReferencesReleasedFromContainer(): void;

                public constructor();

                public onAllReferencesReleased(): void;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module database {
        export module sqlite {
            export class SQLiteConstraintException extends android.database.sqlite.SQLiteException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.database.CursorWindow.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteCursorDriver.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteQuery.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module database {
        export module sqlite {
            export class SQLiteCursor extends android.database.AbstractWindowedCursor {
                public getDatabase(): android.database.sqlite.SQLiteDatabase;

                public getColumnNames(): native.Array<string>;

                public requery(): boolean;

                public close(): void;

                public setSelectionArguments(param0: native.Array<string>): void;

                public constructor(param0: android.database.sqlite.SQLiteCursorDriver, param1: string, param2: android.database.sqlite.SQLiteQuery);

                public onMove(param0: number, param1: number): boolean;

                public fillWindow(param0: number, param1: android.database.CursorWindow): void;

                public finalize(): void;

                public constructor(param0: android.database.sqlite.SQLiteDatabase, param1: android.database.sqlite.SQLiteCursorDriver, param2: string, param3: android.database.sqlite.SQLiteQuery);

                public getCount(): number;

                public getColumnIndex(param0: string): number;

                public constructor();

                public setWindow(param0: android.database.CursorWindow): void;

                public getWindow(): android.database.CursorWindow;

                public deactivate(): void;
            }
        }
    }
}

/// <reference path="./android.database.Cursor.d.ts" />
declare module android {
    export module database {
        export module sqlite {
            export class SQLiteCursorDriver extends javalangObject {
                /**
                 * Constructs a new instance of the android.database.sqlite.SQLiteCursorDriver interface with the provided implementation.
                 */
                public constructor(implementation: {
                    query(param0: android.database.sqlite.SQLiteDatabase.CursorFactory, param1: native.Array<string>): android.database.Cursor;
                    cursorDeactivated(): void;
                    cursorRequeried(param0: android.database.Cursor): void;
                    cursorClosed(): void;
                    setBindArguments(param0: native.Array<string>): void;
                });

                public cursorRequeried(param0: android.database.Cursor): void;

                public setBindArguments(param0: native.Array<string>): void;

                public cursorDeactivated(): void;

                public cursorClosed(): void;

                public query(param0: android.database.sqlite.SQLiteDatabase.CursorFactory, param1: native.Array<string>): android.database.Cursor;
            }
        }
    }
}

/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.DatabaseErrorHandler.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteCursorDriver.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteQuery.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteStatement.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteTransactionListener.d.ts" />
/// <reference path="./android.os.CancellationSignal.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module android {
    export module database {
        export module sqlite {
            export class SQLiteDatabase extends android.database.sqlite.SQLiteClosable {
                public static CONFLICT_ABORT: number;
                public static CONFLICT_FAIL: number;
                public static CONFLICT_IGNORE: number;
                public static CONFLICT_NONE: number;
                public static CONFLICT_REPLACE: number;
                public static CONFLICT_ROLLBACK: number;
                public static CREATE_IF_NECESSARY: number;
                public static ENABLE_WRITE_AHEAD_LOGGING: number;
                public static MAX_SQL_CACHE_SIZE: number;
                public static NO_LOCALIZED_COLLATORS: number;
                public static OPEN_READONLY: number;
                public static OPEN_READWRITE: number;
                public static SQLITE_MAX_LIKE_PATTERN_LENGTH: number;

                public beginTransaction(): void;

                public update(param0: string, param1: android.content.ContentValues, param2: string, param3: native.Array<string>): number;

                public compileStatement(param0: string): android.database.sqlite.SQLiteStatement;

                public replace(param0: string, param1: string, param2: android.content.ContentValues): number;

                public needUpgrade(param0: number): boolean;

                public beginTransactionWithListenerNonExclusive(param0: android.database.sqlite.SQLiteTransactionListener): void;

                public yieldIfContendedSafely(param0: number): boolean;

                public setMaxSqlCacheSize(param0: number): void;

                public static openDatabase(param0: string, param1: android.database.sqlite.SQLiteDatabase.CursorFactory, param2: number): android.database.sqlite.SQLiteDatabase;

                public setVersion(param0: number): void;

                public query(param0: string, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string, param6: string, param7: string): android.database.Cursor;

                public isDbLockedByCurrentThread(): boolean;

                public static openOrCreateDatabase(param0: javaioFile, param1: android.database.sqlite.SQLiteDatabase.CursorFactory): android.database.sqlite.SQLiteDatabase;

                public isWriteAheadLoggingEnabled(): boolean;

                public static releaseMemory(): number;

                public queryWithFactory(param0: android.database.sqlite.SQLiteDatabase.CursorFactory, param1: boolean, param2: string, param3: native.Array<string>, param4: string, param5: native.Array<string>, param6: string, param7: string, param8: string, param9: string, param10: android.os.CancellationSignal): android.database.Cursor;

                public inTransaction(): boolean;

                public enableWriteAheadLogging(): boolean;

                public getAttachedDbs(): javautilList;

                public isDbLockedByOtherThreads(): boolean;

                public close(): void;

                public rawQueryWithFactory(param0: android.database.sqlite.SQLiteDatabase.CursorFactory, param1: string, param2: native.Array<string>, param3: string, param4: android.os.CancellationSignal): android.database.Cursor;

                public execSQL(param0: string): void;

                public setTransactionSuccessful(): void;

                public insertOrThrow(param0: string, param1: string, param2: android.content.ContentValues): number;

                public getPath(): string;

                public toString(): string;

                public yieldIfContendedSafely(): boolean;

                public static openOrCreateDatabase(param0: string, param1: android.database.sqlite.SQLiteDatabase.CursorFactory, param2: android.database.DatabaseErrorHandler): android.database.sqlite.SQLiteDatabase;
                public static openOrCreateDatabase(param0: string, param1: android.database.sqlite.SQLiteDatabase.CursorFactory): android.database.sqlite.SQLiteDatabase;

                public execSQL(param0: string, param1: native.Array<javalangObject>): void;

                public delete(param0: string, param1: string, param2: native.Array<string>): number;

                public getVersion(): number;

                public query(param0: string, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string, param6: string): android.database.Cursor;

                public beginTransactionWithListener(param0: android.database.sqlite.SQLiteTransactionListener): void;

                public setForeignKeyConstraintsEnabled(param0: boolean): void;

                public rawQuery(param0: string, param1: native.Array<string>, param2: android.os.CancellationSignal): android.database.Cursor;

                public query(param0: boolean, param1: string, param2: native.Array<string>, param3: string, param4: native.Array<string>, param5: string, param6: string, param7: string, param8: string, param9: android.os.CancellationSignal): android.database.Cursor;

                public finalize(): void;

                public beginTransactionNonExclusive(): void;

                public setMaximumSize(param0: number): number;

                public static create(param0: android.database.sqlite.SQLiteDatabase.CursorFactory): android.database.sqlite.SQLiteDatabase;

                public setPageSize(param0: number): void;

                public static findEditTable(param0: string): string;

                public static openDatabase(param0: string, param1: android.database.sqlite.SQLiteDatabase.CursorFactory, param2: number, param3: android.database.DatabaseErrorHandler): android.database.sqlite.SQLiteDatabase;

                public getMaximumSize(): number;

                public isDatabaseIntegrityOk(): boolean;

                public setLocale(param0: javautilLocale): void;

                public onAllReferencesReleased(): void;

                public replaceOrThrow(param0: string, param1: string, param2: android.content.ContentValues): number;

                public yieldIfContended(): boolean;

                public static deleteDatabase(param0: javaioFile): boolean;

                public setLockingEnabled(param0: boolean): void;

                public disableWriteAheadLogging(): void;

                public markTableSyncable(param0: string, param1: string): void;

                public updateWithOnConflict(param0: string, param1: android.content.ContentValues, param2: string, param3: native.Array<string>, param4: number): number;

                public insert(param0: string, param1: string, param2: android.content.ContentValues): number;

                public getPageSize(): number;

                public query(param0: boolean, param1: string, param2: native.Array<string>, param3: string, param4: native.Array<string>, param5: string, param6: string, param7: string, param8: string): android.database.Cursor;

                public isReadOnly(): boolean;

                public insertWithOnConflict(param0: string, param1: string, param2: android.content.ContentValues, param3: number): number;

                public isOpen(): boolean;

                public endTransaction(): void;

                public rawQuery(param0: string, param1: native.Array<string>): android.database.Cursor;

                public getSyncedTables(): javautilMap;

                public rawQueryWithFactory(param0: android.database.sqlite.SQLiteDatabase.CursorFactory, param1: string, param2: native.Array<string>, param3: string): android.database.Cursor;

                public markTableSyncable(param0: string, param1: string, param2: string): void;

                public queryWithFactory(param0: android.database.sqlite.SQLiteDatabase.CursorFactory, param1: boolean, param2: string, param3: native.Array<string>, param4: string, param5: native.Array<string>, param6: string, param7: string, param8: string, param9: string): android.database.Cursor;
            }
            export module SQLiteDatabase {
                export class CursorFactory extends javalangObject {
                    /**
                     * Constructs a new instance of the android.database.sqlite.SQLiteDatabase$CursorFactory interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        newCursor(param0: android.database.sqlite.SQLiteDatabase, param1: android.database.sqlite.SQLiteCursorDriver, param2: string, param3: android.database.sqlite.SQLiteQuery): android.database.Cursor;
                    });

                    public newCursor(param0: android.database.sqlite.SQLiteDatabase, param1: android.database.sqlite.SQLiteCursorDriver, param2: string, param3: android.database.sqlite.SQLiteQuery): android.database.Cursor;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module database {
        export module sqlite {
            export class SQLiteDatabaseCorruptException extends android.database.sqlite.SQLiteException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module database {
        export module sqlite {
            export class SQLiteDatabaseLockedException extends android.database.sqlite.SQLiteException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module database {
        export module sqlite {
            export class SQLiteDatatypeMismatchException extends android.database.sqlite.SQLiteException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module database {
        export module sqlite {
            export class SQLiteDiskIOException extends android.database.sqlite.SQLiteException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module database {
        export module sqlite {
            export class SQLiteDoneException extends android.database.sqlite.SQLiteException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module database {
        export module sqlite {
            export class SQLiteException extends android.database.SQLException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module database {
        export module sqlite {
            export class SQLiteFullException extends android.database.sqlite.SQLiteException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module database {
        export module sqlite {
            export class SQLiteMisuseException extends android.database.sqlite.SQLiteException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.DatabaseErrorHandler.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module database {
        export module sqlite {
            export abstract class SQLiteOpenHelper extends javalangObject {
                public onOpen(param0: android.database.sqlite.SQLiteDatabase): void;

                public close(): void;

                public setWriteAheadLoggingEnabled(param0: boolean): void;

                public onCreate(param0: android.database.sqlite.SQLiteDatabase): void;

                public constructor(param0: android.content.Context, param1: string, param2: android.database.sqlite.SQLiteDatabase.CursorFactory, param3: number, param4: android.database.DatabaseErrorHandler);

                public onUpgrade(param0: android.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;

                public constructor(param0: android.content.Context, param1: string, param2: android.database.sqlite.SQLiteDatabase.CursorFactory, param3: number);

                public onDowngrade(param0: android.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;

                public getDatabaseName(): string;

                public getWritableDatabase(): android.database.sqlite.SQLiteDatabase;

                public getReadableDatabase(): android.database.sqlite.SQLiteDatabase;

                public onConfigure(param0: android.database.sqlite.SQLiteDatabase): void;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module database {
        export module sqlite {
            export class SQLiteOutOfMemoryException extends android.database.sqlite.SQLiteException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module database {
        export module sqlite {
            export abstract class SQLiteProgram extends android.database.sqlite.SQLiteClosable {
                public clearBindings(): void;

                public close(): void;

                public bindAllArgsAsStrings(param0: native.Array<string>): void;

                public bindString(param0: number, param1: string): void;

                public bindDouble(param0: number, param1: number): void;

                public bindBlob(param0: number, param1: native.Array<number>): void;

                public getUniqueId(): number;

                public bindLong(param0: number, param1: number): void;

                public bindNull(param0: number): void;

                public onAllReferencesReleased(): void;
            }
        }
    }
}

declare module android {
    export module database {
        export module sqlite {
            export class SQLiteQuery extends android.database.sqlite.SQLiteProgram {
                public close(): void;

                public toString(): string;
            }
        }
    }
}

/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./android.os.CancellationSignal.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuilder.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module android {
    export module database {
        export module sqlite {
            export class SQLiteQueryBuilder extends javalangObject {
                public static appendColumns(param0: javalangStringBuilder, param1: native.Array<string>): void;

                public buildQuery(param0: native.Array<string>, param1: string, param2: native.Array<string>, param3: string, param4: string, param5: string, param6: string): string;

                public setProjectionMap(param0: javautilMap): void;

                public buildUnionSubQuery(param0: string, param1: native.Array<string>, param2: javautilSet, param3: number, param4: string, param5: string, param6: native.Array<string>, param7: string, param8: string): string;
                public buildUnionSubQuery(param0: string, param1: native.Array<string>, param2: javautilSet, param3: number, param4: string, param5: string, param6: string, param7: string): string;

                public buildQuery(param0: native.Array<string>, param1: string, param2: string, param3: string, param4: string, param5: string): string;

                public query(param0: android.database.sqlite.SQLiteDatabase, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string, param6: string): android.database.Cursor;

                public constructor();

                public query(param0: android.database.sqlite.SQLiteDatabase, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string, param6: string, param7: string): android.database.Cursor;

                public buildUnionQuery(param0: native.Array<string>, param1: string, param2: string): string;

                public setStrict(param0: boolean): void;

                public setCursorFactory(param0: android.database.sqlite.SQLiteDatabase.CursorFactory): void;

                public setTables(param0: string): void;

                public getTables(): string;

                public setDistinct(param0: boolean): void;

                public appendWhere(param0: string): void;

                public static buildQueryString(param0: boolean, param1: string, param2: native.Array<string>, param3: string, param4: string, param5: string, param6: string, param7: string): string;

                public appendWhereEscapeString(param0: string): void;

                public query(param0: android.database.sqlite.SQLiteDatabase, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string, param6: string, param7: string, param8: android.os.CancellationSignal): android.database.Cursor;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module database {
        export module sqlite {
            export class SQLiteReadOnlyDatabaseException extends android.database.sqlite.SQLiteException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
declare module android {
    export module database {
        export module sqlite {
            export class SQLiteStatement extends android.database.sqlite.SQLiteProgram {
                public execute(): void;

                public simpleQueryForString(): string;

                public close(): void;

                public executeUpdateDelete(): number;

                public simpleQueryForLong(): number;

                public simpleQueryForBlobFileDescriptor(): android.os.ParcelFileDescriptor;

                public executeInsert(): number;

                public toString(): string;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module database {
        export module sqlite {
            export class SQLiteTableLockedException extends android.database.sqlite.SQLiteException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

declare module android {
    export module database {
        export module sqlite {
            export class SQLiteTransactionListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.database.sqlite.SQLiteTransactionListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onBegin(): void;
                    onCommit(): void;
                    onRollback(): void;
                });

                public onCommit(): void;

                public onBegin(): void;

                public onRollback(): void;
            }
        }
    }
}


declare module android {
    export module drm {
        export class DrmConvertedStatus extends javalangObject {
            public static STATUS_ERROR: number;
            public static STATUS_INPUTDATA_ERROR: number;
            public static STATUS_OK: number;
            public convertedData: native.Array<number>;
            public offset: number;
            public statusCode: number;

            public constructor(param0: number, param1: native.Array<number>, param2: number);
        }
    }
}

import javautilHashMap = java.util.HashMap;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module android {
    export module drm {
        export class DrmErrorEvent extends android.drm.DrmEvent {
            public static TYPE_ACQUIRE_DRM_INFO_FAILED: number;
            public static TYPE_NOT_SUPPORTED: number;
            public static TYPE_NO_INTERNET_CONNECTION: number;
            public static TYPE_OUT_OF_MEMORY: number;
            public static TYPE_PROCESS_DRM_INFO_FAILED: number;
            public static TYPE_REMOVE_ALL_RIGHTS_FAILED: number;
            public static TYPE_RIGHTS_NOT_INSTALLED: number;
            public static TYPE_RIGHTS_RENEWAL_NOT_ALLOWED: number;

            public constructor(param0: number, param1: number, param2: string, param3: javautilHashMap);
            public constructor(param0: number, param1: number, param2: string);
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module android {
    export module drm {
        export class DrmEvent extends javalangObject {
            public static DRM_INFO_OBJECT: string;
            public static DRM_INFO_STATUS_OBJECT: string;
            public static TYPE_ALL_RIGHTS_REMOVED: number;
            public static TYPE_DRM_INFO_PROCESSED: number;

            public constructor(param0: number, param1: number, param2: string, param3: javautilHashMap);

            public getMessage(): string;

            public getType(): number;

            public getUniqueId(): number;

            public constructor(param0: number, param1: number, param2: string);

            public getAttribute(param0: string): javalangObject;
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
declare module android {
    export module drm {
        export class DrmInfo extends javalangObject {
            public constructor(param0: number, param1: string, param2: string);

            public getData(): native.Array<number>;

            public getMimeType(): string;

            public put(param0: string, param1: javalangObject): void;

            public iterator(): javautilIterator;

            public keyIterator(): javautilIterator;

            public getInfoType(): number;

            public constructor(param0: number, param1: native.Array<number>, param2: string);

            public get(param0: string): javalangObject;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module android {
    export module drm {
        export class DrmInfoEvent extends android.drm.DrmEvent {
            public static TYPE_ACCOUNT_ALREADY_REGISTERED: number;
            public static TYPE_ALREADY_REGISTERED_BY_ANOTHER_ACCOUNT: number;
            public static TYPE_REMOVE_RIGHTS: number;
            public static TYPE_RIGHTS_INSTALLED: number;
            public static TYPE_RIGHTS_REMOVED: number;
            public static TYPE_WAIT_FOR_RIGHTS: number;

            public constructor(param0: number, param1: number, param2: string, param3: javautilHashMap);
            public constructor(param0: number, param1: number, param2: string);
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
declare module android {
    export module drm {
        export class DrmInfoRequest extends javalangObject {
            public static ACCOUNT_ID: string;
            public static SUBSCRIPTION_ID: string;
            public static TYPE_REGISTRATION_INFO: number;
            public static TYPE_RIGHTS_ACQUISITION_INFO: number;
            public static TYPE_RIGHTS_ACQUISITION_PROGRESS_INFO: number;
            public static TYPE_UNREGISTRATION_INFO: number;

            public getMimeType(): string;

            public put(param0: string, param1: javalangObject): void;

            public iterator(): javautilIterator;

            public constructor(param0: number, param1: string);

            public getInfoType(): number;

            public keyIterator(): javautilIterator;

            public get(param0: string): javalangObject;
        }
    }
}

/// <reference path="./android.drm.ProcessedData.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module drm {
        export class DrmInfoStatus extends javalangObject {
            public static STATUS_ERROR: number;
            public static STATUS_OK: number;
            public data: android.drm.ProcessedData;
            public infoType: number;
            public mimeType: string;
            public statusCode: number;

            public constructor(param0: number, param1: number, param2: android.drm.ProcessedData, param3: string);
        }
    }
}

/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.drm.DrmConvertedStatus.d.ts" />
/// <reference path="./android.drm.DrmErrorEvent.d.ts" />
/// <reference path="./android.drm.DrmEvent.d.ts" />
/// <reference path="./android.drm.DrmInfo.d.ts" />
/// <reference path="./android.drm.DrmInfoEvent.d.ts" />
/// <reference path="./android.drm.DrmInfoRequest.d.ts" />
/// <reference path="./android.drm.DrmManagerClient.d.ts" />
/// <reference path="./android.drm.DrmRights.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module drm {
        export class DrmManagerClient extends javalangObject {
            public static ERROR_NONE: number;
            public static ERROR_UNKNOWN: number;

            public canHandle(param0: string, param1: string): boolean;

            public getOriginalMimeType(param0: string): string;

            public checkRightsStatus(param0: string, param1: number): number;

            public getConstraints(param0: android.net.Uri, param1: number): android.content.ContentValues;

            public processDrmInfo(param0: android.drm.DrmInfo): number;

            public acquireRights(param0: android.drm.DrmInfoRequest): number;

            public setOnInfoListener(param0: android.drm.DrmManagerClient.OnInfoListener): void;

            public setOnErrorListener(param0: android.drm.DrmManagerClient.OnErrorListener): void;

            public checkRightsStatus(param0: string): number;

            public getAvailableDrmEngines(): native.Array<string>;

            public getMetadata(param0: string): android.content.ContentValues;

            public finalize(): void;

            public release(): void;

            public saveRights(param0: android.drm.DrmRights, param1: string, param2: string): number;

            public convertData(param0: number, param1: native.Array<number>): android.drm.DrmConvertedStatus;

            public openConvertSession(param0: string): number;

            public removeRights(param0: android.net.Uri): number;

            public getDrmObjectType(param0: string, param1: string): number;
            public getDrmObjectType(param0: android.net.Uri, param1: string): number;

            public getConstraints(param0: string, param1: number): android.content.ContentValues;

            public getOriginalMimeType(param0: android.net.Uri): string;

            public checkRightsStatus(param0: android.net.Uri): number;

            public removeRights(param0: string): number;

            public removeAllRights(): number;

            public getMetadata(param0: android.net.Uri): android.content.ContentValues;

            public canHandle(param0: android.net.Uri, param1: string): boolean;

            public closeConvertSession(param0: number): android.drm.DrmConvertedStatus;

            public setOnEventListener(param0: android.drm.DrmManagerClient.OnEventListener): void;

            public constructor(param0: android.content.Context);

            public acquireDrmInfo(param0: android.drm.DrmInfoRequest): android.drm.DrmInfo;

            public checkRightsStatus(param0: android.net.Uri, param1: number): number;
        }
        export module DrmManagerClient {
            export class OnErrorListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.drm.DrmManagerClient$OnErrorListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onError(param0: android.drm.DrmManagerClient, param1: android.drm.DrmErrorEvent): void;
                });

                public onError(param0: android.drm.DrmManagerClient, param1: android.drm.DrmErrorEvent): void;
            }
            export class OnEventListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.drm.DrmManagerClient$OnEventListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onEvent(param0: android.drm.DrmManagerClient, param1: android.drm.DrmEvent): void;
                });

                public onEvent(param0: android.drm.DrmManagerClient, param1: android.drm.DrmEvent): void;
            }
            export class OnInfoListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.drm.DrmManagerClient$OnInfoListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onInfo(param0: android.drm.DrmManagerClient, param1: android.drm.DrmInfoEvent): void;
                });

                public onInfo(param0: android.drm.DrmManagerClient, param1: android.drm.DrmInfoEvent): void;
            }
        }
    }
}

/// <reference path="./android.drm.ProcessedData.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module drm {
        export class DrmRights extends javalangObject {
            public constructor(param0: string, param1: string);

            public getSubscriptionId(): string;

            public constructor(param0: javaioFile, param1: string);

            public getAccountId(): string;

            public getData(): native.Array<number>;

            public getMimeType(): string;

            public constructor(param0: string, param1: string, param2: string);
            public constructor(param0: android.drm.ProcessedData, param1: string);
            public constructor(param0: string, param1: string, param2: string, param3: string);
        }
    }


/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.database.AbstractCursor.d.ts" />
/// <reference path="./android.database.CharArrayBuffer.d.ts" />
/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.database.CursorWindow.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
    declare module android {
        export module database {
            export abstract class AbstractCursor extends javalangObject implements android.database.CrossProcessCursor {
                public mClosed: boolean;
                public mContentResolver: android.content.ContentResolver;
                public mPos: number;

                public getFloat(param0: number): number;

                public requery(): boolean;

                public isAfterLast(): boolean;

                public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

                public getColumnIndexOrThrow(param0: string): number;

                public setExtras(param0: android.os.Bundle): void;

                public onMove(param0: number, param1: number): boolean;

                public getCount(): number;

                public getShort(param0: number): number;

                public getType(param0: number): number;

                public isNull(param0: number): boolean;

                public getDouble(param0: number): number;

                public getColumnName(param0: number): string;

                public getString(param0: number): string;

                public deactivate(): void;

                public getUpdatedField(param0: number): javalangObject;

                public copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;

                public constructor();

                public move(param0: number): boolean;

                public registerContentObserver(param0: android.database.ContentObserver): void;

                public getColumnIndex(param0: string): number;

                public moveToPrevious(): boolean;

                public fillWindow(param0: number, param1: android.database.CursorWindow): void;

                public getExtras(): android.os.Bundle;

                public getInt(param0: number): number;

                public getWantsAllOnMoveCalls(): boolean;

                public isClosed(): boolean;

                public registerDataSetObserver(param0: android.database.DataSetObserver): void;

                public onChange(param0: boolean): void;

                public getPosition(): number;

                public getWindow(): android.database.CursorWindow;

                public getColumnNames(): native.Array<string>;

                public isBeforeFirst(): boolean;

                public moveToFirst(): boolean;

                public getNotificationUri(): android.net.Uri;

                public respond(param0: android.os.Bundle): android.os.Bundle;

                public isFieldUpdated(param0: number): boolean;

                public isLast(): boolean;

                public getBlob(param0: number): native.Array<number>;

                public close(): void;

                public moveToNext(): boolean;

                public setNotificationUri(param0: android.content.ContentResolver, param1: android.net.Uri): void;

                public finalize(): void;

                public moveToLast(): boolean;

                public getColumnCount(): number;

                public checkPosition(): void;

                public unregisterContentObserver(param0: android.database.ContentObserver): void;

                public isFirst(): boolean;

                public moveToPosition(param0: number): boolean;

                public getLong(param0: number): number;
            }
            export module AbstractCursor {
                export class SelfContentObserver extends android.database.ContentObserver {
                    public deliverSelfNotifications(): boolean;

                    public constructor(param0: android.database.AbstractCursor);

                    public onChange(param0: boolean, param1: android.net.Uri): void;

                    public constructor(param0: android.os.Handler);

                    public onChange(param0: boolean): void;
                }
            }
        }
    }

/// <reference path="./android.database.CharArrayBuffer.d.ts" />
/// <reference path="./android.database.CursorWindow.d.ts" />
    declare module android {
        export module database {
            export abstract class AbstractWindowedCursor extends android.database.AbstractCursor {
                public mWindow: android.database.CursorWindow;

                public isNull(param0: number): boolean;

                public checkPosition(): void;

                public getDouble(param0: number): number;

                public getString(param0: number): string;

                public isLong(param0: number): boolean;

                public getFloat(param0: number): number;

                public copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;

                public constructor();

                public isString(param0: number): boolean;

                public setWindow(param0: android.database.CursorWindow): void;

                public getWindow(): android.database.CursorWindow;

                public hasWindow(): boolean;

                public getLong(param0: number): number;

                public isBlob(param0: number): boolean;

                public onMove(param0: number, param1: number): boolean;

                public isFloat(param0: number): boolean;

                public getBlob(param0: number): native.Array<number>;

                public getShort(param0: number): number;

                public getType(param0: number): number;

                public fillWindow(param0: number, param1: android.database.CursorWindow): void;

                public getInt(param0: number): number;
            }
        }
    }

    declare module android {
        export module database {
            export class CharArrayBuffer extends javalangObject {
                public data: native.Array<string>;
                public sizeCopied: number;

                public constructor(param0: native.Array<string>);
                public constructor(param0: number);
            }
        }
    }

/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
    declare module android {
        export module database {
            export class ContentObservable extends android.database.Observable {
                public notifyChange(param0: boolean): void;

                public registerObserver(param0: android.database.ContentObserver): void;
                public registerObserver(param0: javalangObject): void;

                public dispatchChange(param0: boolean, param1: android.net.Uri): void;
                public dispatchChange(param0: boolean): void;

                public constructor();
            }
        }
    }

/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
    declare module android {
        export module database {
            export abstract class ContentObserver extends javalangObject {
                public deliverSelfNotifications(): boolean;

                public onChange(param0: boolean): void;
                public onChange(param0: boolean, param1: android.net.Uri): void;

                public constructor(param0: android.os.Handler);

                public dispatchChange(param0: boolean, param1: android.net.Uri): void;
                public dispatchChange(param0: boolean): void;
            }
        }
    }

/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.database.CharArrayBuffer.d.ts" />
/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.database.CursorWindow.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
    declare module android {
        export module database {
            export class CrossProcessCursor extends javalangObject implements android.database.Cursor {
                /**
                 * Constructs a new instance of the android.database.CrossProcessCursor interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getWindow(): android.database.CursorWindow;
                    fillWindow(param0: number, param1: android.database.CursorWindow): void;
                    onMove(param0: number, param1: number): boolean;
                    getCount(): number;
                    getPosition(): number;
                    move(param0: number): boolean;
                    moveToPosition(param0: number): boolean;
                    moveToFirst(): boolean;
                    moveToLast(): boolean;
                    moveToNext(): boolean;
                    moveToPrevious(): boolean;
                    isFirst(): boolean;
                    isLast(): boolean;
                    isBeforeFirst(): boolean;
                    isAfterLast(): boolean;
                    getColumnIndex(param0: string): number;
                    getColumnIndexOrThrow(param0: string): number;
                    getColumnName(param0: number): string;
                    getColumnNames(): native.Array<string>;
                    getColumnCount(): number;
                    getBlob(param0: number): native.Array<number>;
                    getString(param0: number): string;
                    copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;
                    getShort(param0: number): number;
                    getInt(param0: number): number;
                    getLong(param0: number): number;
                    getFloat(param0: number): number;
                    getDouble(param0: number): number;
                    getType(param0: number): number;
                    isNull(param0: number): boolean;
                    deactivate(): void;
                    requery(): boolean;
                    close(): void;
                    isClosed(): boolean;
                    registerContentObserver(param0: android.database.ContentObserver): void;
                    unregisterContentObserver(param0: android.database.ContentObserver): void;
                    registerDataSetObserver(param0: android.database.DataSetObserver): void;
                    unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
                    setNotificationUri(param0: android.content.ContentResolver, param1: android.net.Uri): void;
                    getNotificationUri(): android.net.Uri;
                    getWantsAllOnMoveCalls(): boolean;
                    setExtras(param0: android.os.Bundle): void;
                    getExtras(): android.os.Bundle;
                    respond(param0: android.os.Bundle): android.os.Bundle;
                    close(): void;
                    close(): void;
                });

                public static FIELD_TYPE_INTEGER: number;
                public static FIELD_TYPE_BLOB: number;
                public static FIELD_TYPE_NULL: number;
                public static FIELD_TYPE_STRING: number;
                public static FIELD_TYPE_FLOAT: number;

                public isClosed(): boolean;

                public registerDataSetObserver(param0: android.database.DataSetObserver): void;

                public getFloat(param0: number): number;

                public requery(): boolean;

                public getPosition(): number;

                public getWindow(): android.database.CursorWindow;

                public isBeforeFirst(): boolean;

                public isAfterLast(): boolean;

                public getColumnNames(): native.Array<string>;

                public moveToFirst(): boolean;

                public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

                public getNotificationUri(): android.net.Uri;

                public respond(param0: android.os.Bundle): android.os.Bundle;

                public getColumnIndexOrThrow(param0: string): number;

                public setExtras(param0: android.os.Bundle): void;

                public onMove(param0: number, param1: number): boolean;

                public isLast(): boolean;

                public getCount(): number;

                public getBlob(param0: number): native.Array<number>;

                public moveToNext(): boolean;

                public getShort(param0: number): number;

                public close(): void;

                public getType(param0: number): number;

                public setNotificationUri(param0: android.content.ContentResolver, param1: android.net.Uri): void;

                public moveToLast(): boolean;

                public isNull(param0: number): boolean;

                public getColumnCount(): number;

                public getColumnName(param0: number): string;

                public getDouble(param0: number): number;

                public unregisterContentObserver(param0: android.database.ContentObserver): void;

                public isFirst(): boolean;

                public getString(param0: number): string;

                public deactivate(): void;

                public copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;

                public move(param0: number): boolean;

                public moveToPosition(param0: number): boolean;

                public getLong(param0: number): number;

                public registerContentObserver(param0: android.database.ContentObserver): void;

                public getColumnIndex(param0: string): number;

                public moveToPrevious(): boolean;

                public fillWindow(param0: number, param1: android.database.CursorWindow): void;

                public getExtras(): android.os.Bundle;

                public getInt(param0: number): number;

                public getWantsAllOnMoveCalls(): boolean;
            }
        }
    }

/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.database.CharArrayBuffer.d.ts" />
/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.CursorWindow.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
    declare module android {
        export module database {
            export class CrossProcessCursorWrapper extends android.database.CursorWrapper implements android.database.CrossProcessCursor {
                public isClosed(): boolean;

                public registerDataSetObserver(param0: android.database.DataSetObserver): void;

                public getFloat(param0: number): number;

                public requery(): boolean;

                public getPosition(): number;

                public getWindow(): android.database.CursorWindow;

                public isBeforeFirst(): boolean;

                public isAfterLast(): boolean;

                public getColumnNames(): native.Array<string>;

                public moveToFirst(): boolean;

                public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

                public getNotificationUri(): android.net.Uri;

                public respond(param0: android.os.Bundle): android.os.Bundle;

                public getColumnIndexOrThrow(param0: string): number;

                public setExtras(param0: android.os.Bundle): void;

                public onMove(param0: number, param1: number): boolean;

                public isLast(): boolean;

                public getCount(): number;

                public getBlob(param0: number): native.Array<number>;

                public moveToNext(): boolean;

                public getShort(param0: number): number;

                public close(): void;

                public getType(param0: number): number;

                public setNotificationUri(param0: android.content.ContentResolver, param1: android.net.Uri): void;

                public moveToLast(): boolean;

                public isNull(param0: number): boolean;

                public getColumnCount(): number;

                public getColumnName(param0: number): string;

                public getDouble(param0: number): number;

                public unregisterContentObserver(param0: android.database.ContentObserver): void;

                public isFirst(): boolean;

                public getString(param0: number): string;

                public deactivate(): void;

                public copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;

                public move(param0: number): boolean;

                public moveToPosition(param0: number): boolean;

                public constructor(param0: android.database.Cursor);

                public getLong(param0: number): number;

                public registerContentObserver(param0: android.database.ContentObserver): void;

                public getColumnIndex(param0: string): number;

                public moveToPrevious(): boolean;

                public fillWindow(param0: number, param1: android.database.CursorWindow): void;

                public getExtras(): android.os.Bundle;

                public getInt(param0: number): number;

                public getWantsAllOnMoveCalls(): boolean;
            }
        }
    }

/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.database.CharArrayBuffer.d.ts" />
/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
    declare module android {
        export module database {
            export class Cursor extends javalangObject implements javaioCloseable {
                /**
                 * Constructs a new instance of the android.database.Cursor interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getCount(): number;
                    getPosition(): number;
                    move(param0: number): boolean;
                    moveToPosition(param0: number): boolean;
                    moveToFirst(): boolean;
                    moveToLast(): boolean;
                    moveToNext(): boolean;
                    moveToPrevious(): boolean;
                    isFirst(): boolean;
                    isLast(): boolean;
                    isBeforeFirst(): boolean;
                    isAfterLast(): boolean;
                    getColumnIndex(param0: string): number;
                    getColumnIndexOrThrow(param0: string): number;
                    getColumnName(param0: number): string;
                    getColumnNames(): native.Array<string>;
                    getColumnCount(): number;
                    getBlob(param0: number): native.Array<number>;
                    getString(param0: number): string;
                    copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;
                    getShort(param0: number): number;
                    getInt(param0: number): number;
                    getLong(param0: number): number;
                    getFloat(param0: number): number;
                    getDouble(param0: number): number;
                    getType(param0: number): number;
                    isNull(param0: number): boolean;
                    deactivate(): void;
                    requery(): boolean;
                    close(): void;
                    isClosed(): boolean;
                    registerContentObserver(param0: android.database.ContentObserver): void;
                    unregisterContentObserver(param0: android.database.ContentObserver): void;
                    registerDataSetObserver(param0: android.database.DataSetObserver): void;
                    unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
                    setNotificationUri(param0: android.content.ContentResolver, param1: android.net.Uri): void;
                    getNotificationUri(): android.net.Uri;
                    getWantsAllOnMoveCalls(): boolean;
                    setExtras(param0: android.os.Bundle): void;
                    getExtras(): android.os.Bundle;
                    respond(param0: android.os.Bundle): android.os.Bundle;
                    close(): void;
                    close(): void;
                });

                public static FIELD_TYPE_INTEGER: number;
                public static FIELD_TYPE_BLOB: number;
                public static FIELD_TYPE_NULL: number;
                public static FIELD_TYPE_STRING: number;
                public static FIELD_TYPE_FLOAT: number;

                public isClosed(): boolean;

                public registerDataSetObserver(param0: android.database.DataSetObserver): void;

                public getFloat(param0: number): number;

                public requery(): boolean;

                public getPosition(): number;

                public isBeforeFirst(): boolean;

                public isAfterLast(): boolean;

                public getColumnNames(): native.Array<string>;

                public moveToFirst(): boolean;

                public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

                public getNotificationUri(): android.net.Uri;

                public respond(param0: android.os.Bundle): android.os.Bundle;

                public getColumnIndexOrThrow(param0: string): number;

                public setExtras(param0: android.os.Bundle): void;

                public isLast(): boolean;

                public getCount(): number;

                public getBlob(param0: number): native.Array<number>;

                public moveToNext(): boolean;

                public getShort(param0: number): number;

                public close(): void;

                public getType(param0: number): number;

                public setNotificationUri(param0: android.content.ContentResolver, param1: android.net.Uri): void;

                public moveToLast(): boolean;

                public isNull(param0: number): boolean;

                public getColumnCount(): number;

                public getColumnName(param0: number): string;

                public getDouble(param0: number): number;

                public unregisterContentObserver(param0: android.database.ContentObserver): void;

                public isFirst(): boolean;

                public getString(param0: number): string;

                public deactivate(): void;

                public copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;

                public move(param0: number): boolean;

                public moveToPosition(param0: number): boolean;

                public getLong(param0: number): number;

                public registerContentObserver(param0: android.database.ContentObserver): void;

                public getColumnIndex(param0: string): number;

                public moveToPrevious(): boolean;

                public getExtras(): android.os.Bundle;

                public getInt(param0: number): number;

                public getWantsAllOnMoveCalls(): boolean;
            }
        }
    }

    import javalangIndexOutOfBoundsException = java.lang.IndexOutOfBoundsException;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export class CursorIndexOutOfBoundsException extends javalangIndexOutOfBoundsException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor();
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string);
                public constructor(param0: number, param1: number);
            }
        }
    }

    import javalangIterable = java.lang.Iterable;
    import javalangEnum = java.lang.Enum;
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
    declare module android {
        export module database {
            export class CursorJoiner extends javalangObject implements javalangIterable {
                public constructor(param0: android.database.Cursor, param1: native.Array<string>, param2: android.database.Cursor, param3: native.Array<string>);

                public iterator(): javautilIterator;

                public next(): android.database.CursorJoiner.Result;

                public hasNext(): boolean;

                public remove(): void;
            }
            export module CursorJoiner {
                export class Result extends javalangEnum {
                    public static BOTH: android.database.CursorJoiner.Result;
                    public static LEFT: android.database.CursorJoiner.Result;
                    public static RIGHT: android.database.CursorJoiner.Result;

                    public static valueOf(param0: string): android.database.CursorJoiner.Result;

                    public static values(): native.Array<android.database.CursorJoiner.Result>;

                    public static valueOf(param0: javalangClass, param1: string): javalangEnum;
                }
            }
        }
    }

/// <reference path="./android.database.CharArrayBuffer.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
    declare module android {
        export module database {
            export class CursorWindow extends android.database.sqlite.SQLiteClosable implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public isLong(param0: number, param1: number): boolean;

                public getShort(param0: number, param1: number): number;

                public constructor(param0: boolean);

                public getType(param0: number, param1: number): number;

                public getStartPosition(): number;

                public copyStringToBuffer(param0: number, param1: number, param2: android.database.CharArrayBuffer): void;

                public onAllReferencesReleased(): void;

                public allocRow(): boolean;

                public getBlob(param0: number, param1: number): native.Array<number>;

                public putNull(param0: number, param1: number): boolean;

                public getLong(param0: number, param1: number): number;

                public getNumRows(): number;

                public getInt(param0: number, param1: number): number;

                public setStartPosition(param0: number): void;

                public isNull(param0: number, param1: number): boolean;

                public putBlob(param0: native.Array<number>, param1: number, param2: number): boolean;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getFloat(param0: number, param1: number): number;

                public close(): void;

                public isBlob(param0: number, param1: number): boolean;

                public constructor(param0: string);

                public finalize(): void;

                public setNumColumns(param0: number): boolean;

                public isString(param0: number, param1: number): boolean;

                public putString(param0: string, param1: number, param2: number): boolean;

                public putDouble(param0: number, param1: number, param2: number): boolean;

                public clear(): void;

                public getString(param0: number, param1: number): string;

                public getDouble(param0: number, param1: number): number;

                public static newFromParcel(param0: android.os.Parcel): android.database.CursorWindow;

                public constructor();

                public freeLastRow(): void;

                public toString(): string;

                public describeContents(): number;

                public isFloat(param0: number, param1: number): boolean;

                public putLong(param0: number, param1: number, param2: number): boolean;
            }
        }
    }

/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.database.CharArrayBuffer.d.ts" />
/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
    declare module android {
        export module database {
            export class CursorWrapper extends javalangObject implements android.database.Cursor {
                public isClosed(): boolean;

                public registerDataSetObserver(param0: android.database.DataSetObserver): void;

                public getFloat(param0: number): number;

                public requery(): boolean;

                public getPosition(): number;

                public getWrappedCursor(): android.database.Cursor;

                public getColumnNames(): native.Array<string>;

                public isAfterLast(): boolean;

                public isBeforeFirst(): boolean;

                public moveToFirst(): boolean;

                public getNotificationUri(): android.net.Uri;

                public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

                public respond(param0: android.os.Bundle): android.os.Bundle;

                public getColumnIndexOrThrow(param0: string): number;

                public setExtras(param0: android.os.Bundle): void;

                public isLast(): boolean;

                public getCount(): number;

                public getBlob(param0: number): native.Array<number>;

                public close(): void;

                public getShort(param0: number): number;

                public moveToNext(): boolean;

                public getType(param0: number): number;

                public setNotificationUri(param0: android.content.ContentResolver, param1: android.net.Uri): void;

                public moveToLast(): boolean;

                public isNull(param0: number): boolean;

                public getColumnCount(): number;

                public getColumnName(param0: number): string;

                public getDouble(param0: number): number;

                public unregisterContentObserver(param0: android.database.ContentObserver): void;

                public isFirst(): boolean;

                public deactivate(): void;

                public getString(param0: number): string;

                public copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;

                public move(param0: number): boolean;

                public moveToPosition(param0: number): boolean;

                public constructor(param0: android.database.Cursor);

                public getLong(param0: number): number;

                public registerContentObserver(param0: android.database.ContentObserver): void;

                public getColumnIndex(param0: string): number;

                public moveToPrevious(): boolean;

                public getExtras(): android.os.Bundle;

                public getInt(param0: number): number;

                public getWantsAllOnMoveCalls(): boolean;
            }
        }
    }

    declare module android {
        export module database {
            export class DataSetObservable extends android.database.Observable {
                public notifyChanged(): void;

                public constructor();

                public notifyInvalidated(): void;
            }
        }
    }

    declare module android {
        export module database {
            export abstract class DataSetObserver extends javalangObject {
                public onInvalidated(): void;

                public constructor();

                public onChanged(): void;
            }
        }
    }

/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
    declare module android {
        export module database {
            export class DatabaseErrorHandler extends javalangObject {
                /**
                 * Constructs a new instance of the android.database.DatabaseErrorHandler interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onCorruption(param0: android.database.sqlite.SQLiteDatabase): void;
                });

                public onCorruption(param0: android.database.sqlite.SQLiteDatabase): void;
            }
        }
    }

    import javalangStringBuilder = java.lang.StringBuilder;
    import javaioPrintStream = java.io.PrintStream;
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteProgram.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteStatement.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.io.PrintStream.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuilder.d.ts" />
    declare module android {
        export module database {
            export class DatabaseUtils extends javalangObject {
                public static STATEMENT_ABORT: number;
                public static STATEMENT_ATTACH: number;
                public static STATEMENT_BEGIN: number;
                public static STATEMENT_COMMIT: number;
                public static STATEMENT_DDL: number;
                public static STATEMENT_OTHER: number;
                public static STATEMENT_PRAGMA: number;
                public static STATEMENT_SELECT: number;
                public static STATEMENT_UNPREPARED: number;
                public static STATEMENT_UPDATE: number;

                public static dumpCurrentRow(param0: android.database.Cursor, param1: javalangStringBuilder): void;

                public static queryNumEntries(param0: android.database.sqlite.SQLiteDatabase, param1: string, param2: string, param3: native.Array<string>): number;

                public static createDbFromSqlStatements(param0: android.content.Context, param1: string, param2: number, param3: string): void;

                public static writeExceptionToParcel(param0: android.os.Parcel, param1: javalangException): void;

                public static cursorDoubleToCursorValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues): void;

                public static longForQuery(param0: android.database.sqlite.SQLiteDatabase, param1: string, param2: native.Array<string>): number;

                public static appendValueToSql(param0: javalangStringBuilder, param1: javalangObject): void;

                public static readExceptionWithFileNotFoundExceptionFromParcel(param0: android.os.Parcel): void;

                public static cursorFloatToContentValuesIfPresent(param0: android.database.Cursor, param1: android.content.ContentValues, param2: string): void;

                public static dumpCursor(param0: android.database.Cursor, param1: javalangStringBuilder): void;

                public static cursorDoubleToContentValuesIfPresent(param0: android.database.Cursor, param1: android.content.ContentValues, param2: string): void;

                public static cursorRowToContentValues(param0: android.database.Cursor, param1: android.content.ContentValues): void;

                public static cursorLongToContentValuesIfPresent(param0: android.database.Cursor, param1: android.content.ContentValues, param2: string): void;

                public static readExceptionFromParcel(param0: android.os.Parcel): void;

                public static dumpCurrentRow(param0: android.database.Cursor): void;

                public static queryNumEntries(param0: android.database.sqlite.SQLiteDatabase, param1: string): number;

                public static dumpCursorToString(param0: android.database.Cursor): string;

                public static blobFileDescriptorForQuery(param0: android.database.sqlite.SQLiteStatement, param1: native.Array<string>): android.os.ParcelFileDescriptor;

                public static cursorStringToInsertHelper(param0: android.database.Cursor, param1: string, param2: android.database.DatabaseUtils.InsertHelper, param3: number): void;

                public static queryNumEntries(param0: android.database.sqlite.SQLiteDatabase, param1: string, param2: string): number;

                public static blobFileDescriptorForQuery(param0: android.database.sqlite.SQLiteDatabase, param1: string, param2: native.Array<string>): android.os.ParcelFileDescriptor;

                public static cursorLongToContentValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues): void;

                public static dumpCursor(param0: android.database.Cursor, param1: javaioPrintStream): void;

                public static cursorLongToContentValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues, param3: string): void;

                public static appendEscapedSQLString(param0: javalangStringBuilder, param1: string): void;

                public static getHexCollationKey(param0: string): string;

                public static cursorDoubleToContentValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues, param3: string): void;

                public static cursorStringToContentValuesIfPresent(param0: android.database.Cursor, param1: android.content.ContentValues, param2: string): void;

                public static dumpCursor(param0: android.database.Cursor): void;

                public static sqlEscapeString(param0: string): string;

                public static getSqlStatementType(param0: string): number;

                public static cursorStringToContentValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues, param3: string): void;

                public static readExceptionWithOperationApplicationExceptionFromParcel(param0: android.os.Parcel): void;

                public constructor();

                public static longForQuery(param0: android.database.sqlite.SQLiteStatement, param1: native.Array<string>): number;

                public static cursorIntToContentValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues): void;

                public static getCollationKey(param0: string): string;

                public static stringForQuery(param0: android.database.sqlite.SQLiteStatement, param1: native.Array<string>): string;

                public static dumpCurrentRow(param0: android.database.Cursor, param1: javaioPrintStream): void;

                public static appendSelectionArgs(param0: native.Array<string>, param1: native.Array<string>): native.Array<string>;

                public static stringForQuery(param0: android.database.sqlite.SQLiteDatabase, param1: string, param2: native.Array<string>): string;

                public static concatenateWhere(param0: string, param1: string): string;

                public static cursorIntToContentValuesIfPresent(param0: android.database.Cursor, param1: android.content.ContentValues, param2: string): void;

                public static dumpCurrentRowToString(param0: android.database.Cursor): string;

                public static cursorShortToContentValuesIfPresent(param0: android.database.Cursor, param1: android.content.ContentValues, param2: string): void;

                public static cursorStringToContentValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues): void;

                public static cursorIntToContentValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues, param3: string): void;

                public static bindObjectToProgram(param0: android.database.sqlite.SQLiteProgram, param1: number, param2: javalangObject): void;
            }
            export module DatabaseUtils {
                export class InsertHelper extends javalangObject {
                    public replace(param0: android.content.ContentValues): number;

                    public bind(param0: number, param1: native.Array<number>): void;
                    public bind(param0: number, param1: boolean): void;
                    public bind(param0: number, param1: string): void;

                    public close(): void;

                    public getColumnIndex(param0: string): number;

                    public prepareForReplace(): void;

                    public prepareForInsert(): void;

                    public bindNull(param0: number): void;

                    public constructor(param0: android.database.sqlite.SQLiteDatabase, param1: string);

                    public bind(param0: number, param1: number): void;

                    public insert(param0: android.content.ContentValues): number;

                    public execute(): number;
                }
            }
        }
    }

/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
    declare module android {
        export module database {
            export class DefaultDatabaseErrorHandler extends javalangObject implements android.database.DatabaseErrorHandler {
                public onCorruption(param0: android.database.sqlite.SQLiteDatabase): void;

                public constructor();
            }
        }
    }

/// <reference path="./android.database.CursorWindow.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
    declare module android {
        export module database {
            export class MatrixCursor extends android.database.AbstractCursor {
                public isNull(param0: number): boolean;

                public constructor(param0: native.Array<string>, param1: number);

                public getDouble(param0: number): number;

                public getString(param0: number): string;

                public getFloat(param0: number): number;

                public constructor();

                public newRow(): android.database.MatrixCursor.RowBuilder;

                public getWindow(): android.database.CursorWindow;

                public getColumnNames(): native.Array<string>;

                public constructor(param0: native.Array<string>);

                public getLong(param0: number): number;

                public addRow(param0: javalangIterable): void;

                public onMove(param0: number, param1: number): boolean;

                public getCount(): number;

                public getBlob(param0: number): native.Array<number>;

                public addRow(param0: native.Array<javalangObject>): void;

                public getShort(param0: number): number;

                public getType(param0: number): number;

                public fillWindow(param0: number, param1: android.database.CursorWindow): void;

                public getInt(param0: number): number;
            }
            export module MatrixCursor {
                export class RowBuilder extends javalangObject {
                    public add(param0: javalangObject): android.database.MatrixCursor.RowBuilder;
                    public add(param0: string, param1: javalangObject): android.database.MatrixCursor.RowBuilder;
                }
            }
        }
    }

/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.CursorWindow.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
    declare module android {
        export module database {
            export class MergeCursor extends android.database.AbstractCursor {
                public isNull(param0: number): boolean;

                public getDouble(param0: number): number;

                public unregisterContentObserver(param0: android.database.ContentObserver): void;

                public registerDataSetObserver(param0: android.database.DataSetObserver): void;

                public getString(param0: number): string;

                public deactivate(): void;

                public getFloat(param0: number): number;

                public requery(): boolean;

                public constructor(param0: native.Array<android.database.Cursor>);
                public constructor();

                public getWindow(): android.database.CursorWindow;

                public getColumnNames(): native.Array<string>;

                public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

                public getLong(param0: number): number;

                public registerContentObserver(param0: android.database.ContentObserver): void;

                public onMove(param0: number, param1: number): boolean;

                public getCount(): number;

                public getBlob(param0: number): native.Array<number>;

                public getShort(param0: number): number;

                public close(): void;

                public getType(param0: number): number;

                public fillWindow(param0: number, param1: android.database.CursorWindow): void;

                public getInt(param0: number): number;
            }
        }
    }

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
    declare module android {
        export module database {
            export abstract class Observable extends javalangObject {
                public mObservers: javautilArrayList;

                public unregisterAll(): void;

                public registerObserver(param0: javalangObject): void;

                public constructor();

                public unregisterObserver(param0: javalangObject): void;
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export class SQLException extends javalangRuntimeException {
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
        export module database {
            export class StaleDataException extends javalangRuntimeException {
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
        export module database {
            export module sqlite {
                export class SQLiteAbortException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteAccessPermException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteBindOrColumnIndexOutOfRangeException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteBlobTooBigException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteCantOpenDatabaseException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

    declare module android {
        export module database {
            export module sqlite {
                export abstract class SQLiteClosable extends javalangObject implements javaioCloseable {
                    public releaseReference(): void;

                    public acquireReference(): void;

                    public close(): void;

                    public releaseReferenceFromContainer(): void;

                    public onAllReferencesReleasedFromContainer(): void;

                    public constructor();

                    public onAllReferencesReleased(): void;
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteConstraintException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./android.database.CursorWindow.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteCursorDriver.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteQuery.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteCursor extends android.database.AbstractWindowedCursor {
                    public getDatabase(): android.database.sqlite.SQLiteDatabase;

                    public getColumnNames(): native.Array<string>;

                    public requery(): boolean;

                    public close(): void;

                    public setSelectionArguments(param0: native.Array<string>): void;

                    public constructor(param0: android.database.sqlite.SQLiteCursorDriver, param1: string, param2: android.database.sqlite.SQLiteQuery);

                    public onMove(param0: number, param1: number): boolean;

                    public fillWindow(param0: number, param1: android.database.CursorWindow): void;

                    public finalize(): void;

                    public constructor(param0: android.database.sqlite.SQLiteDatabase, param1: android.database.sqlite.SQLiteCursorDriver, param2: string, param3: android.database.sqlite.SQLiteQuery);

                    public getCount(): number;

                    public getColumnIndex(param0: string): number;

                    public constructor();

                    public setWindow(param0: android.database.CursorWindow): void;

                    public getWindow(): android.database.CursorWindow;

                    public deactivate(): void;
                }
            }
        }
    }

/// <reference path="./android.database.Cursor.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteCursorDriver extends javalangObject {
                    /**
                     * Constructs a new instance of the android.database.sqlite.SQLiteCursorDriver interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        query(param0: android.database.sqlite.SQLiteDatabase.CursorFactory, param1: native.Array<string>): android.database.Cursor;
                        cursorDeactivated(): void;
                        cursorRequeried(param0: android.database.Cursor): void;
                        cursorClosed(): void;
                        setBindArguments(param0: native.Array<string>): void;
                    });

                    public cursorRequeried(param0: android.database.Cursor): void;

                    public setBindArguments(param0: native.Array<string>): void;

                    public cursorDeactivated(): void;

                    public cursorClosed(): void;

                    public query(param0: android.database.sqlite.SQLiteDatabase.CursorFactory, param1: native.Array<string>): android.database.Cursor;
                }
            }
        }
    }

/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.DatabaseErrorHandler.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteCursorDriver.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteQuery.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteStatement.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteTransactionListener.d.ts" />
/// <reference path="./android.os.CancellationSignal.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteDatabase extends android.database.sqlite.SQLiteClosable {
                    public static CONFLICT_ABORT: number;
                    public static CONFLICT_FAIL: number;
                    public static CONFLICT_IGNORE: number;
                    public static CONFLICT_NONE: number;
                    public static CONFLICT_REPLACE: number;
                    public static CONFLICT_ROLLBACK: number;
                    public static CREATE_IF_NECESSARY: number;
                    public static ENABLE_WRITE_AHEAD_LOGGING: number;
                    public static MAX_SQL_CACHE_SIZE: number;
                    public static NO_LOCALIZED_COLLATORS: number;
                    public static OPEN_READONLY: number;
                    public static OPEN_READWRITE: number;
                    public static SQLITE_MAX_LIKE_PATTERN_LENGTH: number;

                    public beginTransaction(): void;

                    public update(param0: string, param1: android.content.ContentValues, param2: string, param3: native.Array<string>): number;

                    public compileStatement(param0: string): android.database.sqlite.SQLiteStatement;

                    public replace(param0: string, param1: string, param2: android.content.ContentValues): number;

                    public needUpgrade(param0: number): boolean;

                    public beginTransactionWithListenerNonExclusive(param0: android.database.sqlite.SQLiteTransactionListener): void;

                    public yieldIfContendedSafely(param0: number): boolean;

                    public setMaxSqlCacheSize(param0: number): void;

                    public static openDatabase(param0: string, param1: android.database.sqlite.SQLiteDatabase.CursorFactory, param2: number): android.database.sqlite.SQLiteDatabase;

                    public setVersion(param0: number): void;

                    public query(param0: string, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string, param6: string, param7: string): android.database.Cursor;

                    public isDbLockedByCurrentThread(): boolean;

                    public static openOrCreateDatabase(param0: javaioFile, param1: android.database.sqlite.SQLiteDatabase.CursorFactory): android.database.sqlite.SQLiteDatabase;

                    public isWriteAheadLoggingEnabled(): boolean;

                    public static releaseMemory(): number;

                    public queryWithFactory(param0: android.database.sqlite.SQLiteDatabase.CursorFactory, param1: boolean, param2: string, param3: native.Array<string>, param4: string, param5: native.Array<string>, param6: string, param7: string, param8: string, param9: string, param10: android.os.CancellationSignal): android.database.Cursor;

                    public inTransaction(): boolean;

                    public enableWriteAheadLogging(): boolean;

                    public getAttachedDbs(): javautilList;

                    public isDbLockedByOtherThreads(): boolean;

                    public close(): void;

                    public rawQueryWithFactory(param0: android.database.sqlite.SQLiteDatabase.CursorFactory, param1: string, param2: native.Array<string>, param3: string, param4: android.os.CancellationSignal): android.database.Cursor;

                    public execSQL(param0: string): void;

                    public setTransactionSuccessful(): void;

                    public insertOrThrow(param0: string, param1: string, param2: android.content.ContentValues): number;

                    public getPath(): string;

                    public toString(): string;

                    public yieldIfContendedSafely(): boolean;

                    public static openOrCreateDatabase(param0: string, param1: android.database.sqlite.SQLiteDatabase.CursorFactory, param2: android.database.DatabaseErrorHandler): android.database.sqlite.SQLiteDatabase;
                    public static openOrCreateDatabase(param0: string, param1: android.database.sqlite.SQLiteDatabase.CursorFactory): android.database.sqlite.SQLiteDatabase;

                    public execSQL(param0: string, param1: native.Array<javalangObject>): void;

                    public delete(param0: string, param1: string, param2: native.Array<string>): number;

                    public getVersion(): number;

                    public query(param0: string, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string, param6: string): android.database.Cursor;

                    public beginTransactionWithListener(param0: android.database.sqlite.SQLiteTransactionListener): void;

                    public setForeignKeyConstraintsEnabled(param0: boolean): void;

                    public rawQuery(param0: string, param1: native.Array<string>, param2: android.os.CancellationSignal): android.database.Cursor;

                    public query(param0: boolean, param1: string, param2: native.Array<string>, param3: string, param4: native.Array<string>, param5: string, param6: string, param7: string, param8: string, param9: android.os.CancellationSignal): android.database.Cursor;

                    public finalize(): void;

                    public beginTransactionNonExclusive(): void;

                    public setMaximumSize(param0: number): number;

                    public static create(param0: android.database.sqlite.SQLiteDatabase.CursorFactory): android.database.sqlite.SQLiteDatabase;

                    public setPageSize(param0: number): void;

                    public static findEditTable(param0: string): string;

                    public static openDatabase(param0: string, param1: android.database.sqlite.SQLiteDatabase.CursorFactory, param2: number, param3: android.database.DatabaseErrorHandler): android.database.sqlite.SQLiteDatabase;

                    public getMaximumSize(): number;

                    public isDatabaseIntegrityOk(): boolean;

                    public setLocale(param0: javautilLocale): void;

                    public onAllReferencesReleased(): void;

                    public replaceOrThrow(param0: string, param1: string, param2: android.content.ContentValues): number;

                    public yieldIfContended(): boolean;

                    public static deleteDatabase(param0: javaioFile): boolean;

                    public setLockingEnabled(param0: boolean): void;

                    public disableWriteAheadLogging(): void;

                    public markTableSyncable(param0: string, param1: string): void;

                    public updateWithOnConflict(param0: string, param1: android.content.ContentValues, param2: string, param3: native.Array<string>, param4: number): number;

                    public insert(param0: string, param1: string, param2: android.content.ContentValues): number;

                    public getPageSize(): number;

                    public query(param0: boolean, param1: string, param2: native.Array<string>, param3: string, param4: native.Array<string>, param5: string, param6: string, param7: string, param8: string): android.database.Cursor;

                    public isReadOnly(): boolean;

                    public insertWithOnConflict(param0: string, param1: string, param2: android.content.ContentValues, param3: number): number;

                    public isOpen(): boolean;

                    public endTransaction(): void;

                    public rawQuery(param0: string, param1: native.Array<string>): android.database.Cursor;

                    public getSyncedTables(): javautilMap;

                    public rawQueryWithFactory(param0: android.database.sqlite.SQLiteDatabase.CursorFactory, param1: string, param2: native.Array<string>, param3: string): android.database.Cursor;

                    public markTableSyncable(param0: string, param1: string, param2: string): void;

                    public queryWithFactory(param0: android.database.sqlite.SQLiteDatabase.CursorFactory, param1: boolean, param2: string, param3: native.Array<string>, param4: string, param5: native.Array<string>, param6: string, param7: string, param8: string, param9: string): android.database.Cursor;
                }
                export module SQLiteDatabase {
                    export class CursorFactory extends javalangObject {
                        /**
                         * Constructs a new instance of the android.database.sqlite.SQLiteDatabase$CursorFactory interface with the provided implementation.
                         */
                        public constructor(implementation: {
                            newCursor(param0: android.database.sqlite.SQLiteDatabase, param1: android.database.sqlite.SQLiteCursorDriver, param2: string, param3: android.database.sqlite.SQLiteQuery): android.database.Cursor;
                        });

                        public newCursor(param0: android.database.sqlite.SQLiteDatabase, param1: android.database.sqlite.SQLiteCursorDriver, param2: string, param3: android.database.sqlite.SQLiteQuery): android.database.Cursor;
                    }
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteDatabaseCorruptException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteDatabaseLockedException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteDatatypeMismatchException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteDiskIOException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteDoneException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteException extends android.database.SQLException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteFullException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteMisuseException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.DatabaseErrorHandler.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export abstract class SQLiteOpenHelper extends javalangObject {
                    public onOpen(param0: android.database.sqlite.SQLiteDatabase): void;

                    public close(): void;

                    public setWriteAheadLoggingEnabled(param0: boolean): void;

                    public onCreate(param0: android.database.sqlite.SQLiteDatabase): void;

                    public constructor(param0: android.content.Context, param1: string, param2: android.database.sqlite.SQLiteDatabase.CursorFactory, param3: number, param4: android.database.DatabaseErrorHandler);

                    public onUpgrade(param0: android.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;

                    public constructor(param0: android.content.Context, param1: string, param2: android.database.sqlite.SQLiteDatabase.CursorFactory, param3: number);

                    public onDowngrade(param0: android.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;

                    public getDatabaseName(): string;

                    public getWritableDatabase(): android.database.sqlite.SQLiteDatabase;

                    public getReadableDatabase(): android.database.sqlite.SQLiteDatabase;

                    public onConfigure(param0: android.database.sqlite.SQLiteDatabase): void;
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteOutOfMemoryException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export abstract class SQLiteProgram extends android.database.sqlite.SQLiteClosable {
                    public clearBindings(): void;

                    public close(): void;

                    public bindAllArgsAsStrings(param0: native.Array<string>): void;

                    public bindString(param0: number, param1: string): void;

                    public bindDouble(param0: number, param1: number): void;

                    public bindBlob(param0: number, param1: native.Array<number>): void;

                    public getUniqueId(): number;

                    public bindLong(param0: number, param1: number): void;

                    public bindNull(param0: number): void;

                    public onAllReferencesReleased(): void;
                }
            }
        }
    }

    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteQuery extends android.database.sqlite.SQLiteProgram {
                    public close(): void;

                    public toString(): string;
                }
            }
        }
    }

/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./android.os.CancellationSignal.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuilder.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteQueryBuilder extends javalangObject {
                    public static appendColumns(param0: javalangStringBuilder, param1: native.Array<string>): void;

                    public buildQuery(param0: native.Array<string>, param1: string, param2: native.Array<string>, param3: string, param4: string, param5: string, param6: string): string;

                    public setProjectionMap(param0: javautilMap): void;

                    public buildUnionSubQuery(param0: string, param1: native.Array<string>, param2: javautilSet, param3: number, param4: string, param5: string, param6: native.Array<string>, param7: string, param8: string): string;
                    public buildUnionSubQuery(param0: string, param1: native.Array<string>, param2: javautilSet, param3: number, param4: string, param5: string, param6: string, param7: string): string;

                    public buildQuery(param0: native.Array<string>, param1: string, param2: string, param3: string, param4: string, param5: string): string;

                    public query(param0: android.database.sqlite.SQLiteDatabase, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string, param6: string): android.database.Cursor;

                    public constructor();

                    public query(param0: android.database.sqlite.SQLiteDatabase, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string, param6: string, param7: string): android.database.Cursor;

                    public buildUnionQuery(param0: native.Array<string>, param1: string, param2: string): string;

                    public setStrict(param0: boolean): void;

                    public setCursorFactory(param0: android.database.sqlite.SQLiteDatabase.CursorFactory): void;

                    public setTables(param0: string): void;

                    public getTables(): string;

                    public setDistinct(param0: boolean): void;

                    public appendWhere(param0: string): void;

                    public static buildQueryString(param0: boolean, param1: string, param2: native.Array<string>, param3: string, param4: string, param5: string, param6: string, param7: string): string;

                    public appendWhereEscapeString(param0: string): void;

                    public query(param0: android.database.sqlite.SQLiteDatabase, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string, param6: string, param7: string, param8: android.os.CancellationSignal): android.database.Cursor;
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteReadOnlyDatabaseException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteStatement extends android.database.sqlite.SQLiteProgram {
                    public execute(): void;

                    public simpleQueryForString(): string;

                    public close(): void;

                    public executeUpdateDelete(): number;

                    public simpleQueryForLong(): number;

                    public simpleQueryForBlobFileDescriptor(): android.os.ParcelFileDescriptor;

                    public executeInsert(): number;

                    public toString(): string;
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteTableLockedException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteTransactionListener extends javalangObject {
                    /**
                     * Constructs a new instance of the android.database.sqlite.SQLiteTransactionListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onBegin(): void;
                        onCommit(): void;
                        onRollback(): void;
                    });

                    public onCommit(): void;

                    public onBegin(): void;

                    public onRollback(): void;
                }
            }
        }
    }


/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.database.AbstractCursor.d.ts" />
/// <reference path="./android.database.CharArrayBuffer.d.ts" />
/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.database.CursorWindow.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
    declare module android {
        export module database {
            export abstract class AbstractCursor extends javalangObject implements android.database.CrossProcessCursor {
                public mClosed: boolean;
                public mContentResolver: android.content.ContentResolver;
                public mPos: number;

                public getFloat(param0: number): number;

                public requery(): boolean;

                public isAfterLast(): boolean;

                public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

                public getColumnIndexOrThrow(param0: string): number;

                public setExtras(param0: android.os.Bundle): void;

                public onMove(param0: number, param1: number): boolean;

                public getCount(): number;

                public getShort(param0: number): number;

                public getType(param0: number): number;

                public isNull(param0: number): boolean;

                public getDouble(param0: number): number;

                public getColumnName(param0: number): string;

                public getString(param0: number): string;

                public deactivate(): void;

                public getUpdatedField(param0: number): javalangObject;

                public copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;

                public constructor();

                public move(param0: number): boolean;

                public registerContentObserver(param0: android.database.ContentObserver): void;

                public getColumnIndex(param0: string): number;

                public moveToPrevious(): boolean;

                public fillWindow(param0: number, param1: android.database.CursorWindow): void;

                public getExtras(): android.os.Bundle;

                public getInt(param0: number): number;

                public getWantsAllOnMoveCalls(): boolean;

                public isClosed(): boolean;

                public registerDataSetObserver(param0: android.database.DataSetObserver): void;

                public onChange(param0: boolean): void;

                public getPosition(): number;

                public getWindow(): android.database.CursorWindow;

                public getColumnNames(): native.Array<string>;

                public isBeforeFirst(): boolean;

                public moveToFirst(): boolean;

                public getNotificationUri(): android.net.Uri;

                public respond(param0: android.os.Bundle): android.os.Bundle;

                public isFieldUpdated(param0: number): boolean;

                public isLast(): boolean;

                public getBlob(param0: number): native.Array<number>;

                public close(): void;

                public moveToNext(): boolean;

                public setNotificationUri(param0: android.content.ContentResolver, param1: android.net.Uri): void;

                public finalize(): void;

                public moveToLast(): boolean;

                public getColumnCount(): number;

                public checkPosition(): void;

                public unregisterContentObserver(param0: android.database.ContentObserver): void;

                public isFirst(): boolean;

                public moveToPosition(param0: number): boolean;

                public getLong(param0: number): number;
            }
            export module AbstractCursor {
                export class SelfContentObserver extends android.database.ContentObserver {
                    public deliverSelfNotifications(): boolean;

                    public constructor(param0: android.database.AbstractCursor);

                    public onChange(param0: boolean, param1: android.net.Uri): void;

                    public constructor(param0: android.os.Handler);

                    public onChange(param0: boolean): void;
                }
            }
        }
    }

/// <reference path="./android.database.CharArrayBuffer.d.ts" />
/// <reference path="./android.database.CursorWindow.d.ts" />
    declare module android {
        export module database {
            export abstract class AbstractWindowedCursor extends android.database.AbstractCursor {
                public mWindow: android.database.CursorWindow;

                public isNull(param0: number): boolean;

                public checkPosition(): void;

                public getDouble(param0: number): number;

                public getString(param0: number): string;

                public isLong(param0: number): boolean;

                public getFloat(param0: number): number;

                public copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;

                public constructor();

                public isString(param0: number): boolean;

                public setWindow(param0: android.database.CursorWindow): void;

                public getWindow(): android.database.CursorWindow;

                public hasWindow(): boolean;

                public getLong(param0: number): number;

                public isBlob(param0: number): boolean;

                public onMove(param0: number, param1: number): boolean;

                public isFloat(param0: number): boolean;

                public getBlob(param0: number): native.Array<number>;

                public getShort(param0: number): number;

                public getType(param0: number): number;

                public fillWindow(param0: number, param1: android.database.CursorWindow): void;

                public getInt(param0: number): number;
            }
        }
    }

    declare module android {
        export module database {
            export class CharArrayBuffer extends javalangObject {
                public data: native.Array<string>;
                public sizeCopied: number;

                public constructor(param0: native.Array<string>);
                public constructor(param0: number);
            }
        }
    }

/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
    declare module android {
        export module database {
            export class ContentObservable extends android.database.Observable {
                public notifyChange(param0: boolean): void;

                public registerObserver(param0: android.database.ContentObserver): void;
                public registerObserver(param0: javalangObject): void;

                public dispatchChange(param0: boolean, param1: android.net.Uri): void;
                public dispatchChange(param0: boolean): void;

                public constructor();
            }
        }
    }

/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
    declare module android {
        export module database {
            export abstract class ContentObserver extends javalangObject {
                public deliverSelfNotifications(): boolean;

                public onChange(param0: boolean): void;
                public onChange(param0: boolean, param1: android.net.Uri): void;

                public constructor(param0: android.os.Handler);

                public dispatchChange(param0: boolean, param1: android.net.Uri): void;
                public dispatchChange(param0: boolean): void;
            }
        }
    }

/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.database.CharArrayBuffer.d.ts" />
/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.database.CursorWindow.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
    declare module android {
        export module database {
            export class CrossProcessCursor extends javalangObject implements android.database.Cursor {
                /**
                 * Constructs a new instance of the android.database.CrossProcessCursor interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getWindow(): android.database.CursorWindow;
                    fillWindow(param0: number, param1: android.database.CursorWindow): void;
                    onMove(param0: number, param1: number): boolean;
                    getCount(): number;
                    getPosition(): number;
                    move(param0: number): boolean;
                    moveToPosition(param0: number): boolean;
                    moveToFirst(): boolean;
                    moveToLast(): boolean;
                    moveToNext(): boolean;
                    moveToPrevious(): boolean;
                    isFirst(): boolean;
                    isLast(): boolean;
                    isBeforeFirst(): boolean;
                    isAfterLast(): boolean;
                    getColumnIndex(param0: string): number;
                    getColumnIndexOrThrow(param0: string): number;
                    getColumnName(param0: number): string;
                    getColumnNames(): native.Array<string>;
                    getColumnCount(): number;
                    getBlob(param0: number): native.Array<number>;
                    getString(param0: number): string;
                    copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;
                    getShort(param0: number): number;
                    getInt(param0: number): number;
                    getLong(param0: number): number;
                    getFloat(param0: number): number;
                    getDouble(param0: number): number;
                    getType(param0: number): number;
                    isNull(param0: number): boolean;
                    deactivate(): void;
                    requery(): boolean;
                    close(): void;
                    isClosed(): boolean;
                    registerContentObserver(param0: android.database.ContentObserver): void;
                    unregisterContentObserver(param0: android.database.ContentObserver): void;
                    registerDataSetObserver(param0: android.database.DataSetObserver): void;
                    unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
                    setNotificationUri(param0: android.content.ContentResolver, param1: android.net.Uri): void;
                    getNotificationUri(): android.net.Uri;
                    getWantsAllOnMoveCalls(): boolean;
                    setExtras(param0: android.os.Bundle): void;
                    getExtras(): android.os.Bundle;
                    respond(param0: android.os.Bundle): android.os.Bundle;
                    close(): void;
                    close(): void;
                });

                public static FIELD_TYPE_INTEGER: number;
                public static FIELD_TYPE_BLOB: number;
                public static FIELD_TYPE_NULL: number;
                public static FIELD_TYPE_STRING: number;
                public static FIELD_TYPE_FLOAT: number;

                public isClosed(): boolean;

                public registerDataSetObserver(param0: android.database.DataSetObserver): void;

                public getFloat(param0: number): number;

                public requery(): boolean;

                public getPosition(): number;

                public getWindow(): android.database.CursorWindow;

                public isBeforeFirst(): boolean;

                public isAfterLast(): boolean;

                public getColumnNames(): native.Array<string>;

                public moveToFirst(): boolean;

                public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

                public getNotificationUri(): android.net.Uri;

                public respond(param0: android.os.Bundle): android.os.Bundle;

                public getColumnIndexOrThrow(param0: string): number;

                public setExtras(param0: android.os.Bundle): void;

                public onMove(param0: number, param1: number): boolean;

                public isLast(): boolean;

                public getCount(): number;

                public getBlob(param0: number): native.Array<number>;

                public moveToNext(): boolean;

                public getShort(param0: number): number;

                public close(): void;

                public getType(param0: number): number;

                public setNotificationUri(param0: android.content.ContentResolver, param1: android.net.Uri): void;

                public moveToLast(): boolean;

                public isNull(param0: number): boolean;

                public getColumnCount(): number;

                public getColumnName(param0: number): string;

                public getDouble(param0: number): number;

                public unregisterContentObserver(param0: android.database.ContentObserver): void;

                public isFirst(): boolean;

                public getString(param0: number): string;

                public deactivate(): void;

                public copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;

                public move(param0: number): boolean;

                public moveToPosition(param0: number): boolean;

                public getLong(param0: number): number;

                public registerContentObserver(param0: android.database.ContentObserver): void;

                public getColumnIndex(param0: string): number;

                public moveToPrevious(): boolean;

                public fillWindow(param0: number, param1: android.database.CursorWindow): void;

                public getExtras(): android.os.Bundle;

                public getInt(param0: number): number;

                public getWantsAllOnMoveCalls(): boolean;
            }
        }
    }

/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.database.CharArrayBuffer.d.ts" />
/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.CursorWindow.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
    declare module android {
        export module database {
            export class CrossProcessCursorWrapper extends android.database.CursorWrapper implements android.database.CrossProcessCursor {
                public isClosed(): boolean;

                public registerDataSetObserver(param0: android.database.DataSetObserver): void;

                public getFloat(param0: number): number;

                public requery(): boolean;

                public getPosition(): number;

                public getWindow(): android.database.CursorWindow;

                public isBeforeFirst(): boolean;

                public isAfterLast(): boolean;

                public getColumnNames(): native.Array<string>;

                public moveToFirst(): boolean;

                public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

                public getNotificationUri(): android.net.Uri;

                public respond(param0: android.os.Bundle): android.os.Bundle;

                public getColumnIndexOrThrow(param0: string): number;

                public setExtras(param0: android.os.Bundle): void;

                public onMove(param0: number, param1: number): boolean;

                public isLast(): boolean;

                public getCount(): number;

                public getBlob(param0: number): native.Array<number>;

                public moveToNext(): boolean;

                public getShort(param0: number): number;

                public close(): void;

                public getType(param0: number): number;

                public setNotificationUri(param0: android.content.ContentResolver, param1: android.net.Uri): void;

                public moveToLast(): boolean;

                public isNull(param0: number): boolean;

                public getColumnCount(): number;

                public getColumnName(param0: number): string;

                public getDouble(param0: number): number;

                public unregisterContentObserver(param0: android.database.ContentObserver): void;

                public isFirst(): boolean;

                public getString(param0: number): string;

                public deactivate(): void;

                public copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;

                public move(param0: number): boolean;

                public moveToPosition(param0: number): boolean;

                public constructor(param0: android.database.Cursor);

                public getLong(param0: number): number;

                public registerContentObserver(param0: android.database.ContentObserver): void;

                public getColumnIndex(param0: string): number;

                public moveToPrevious(): boolean;

                public fillWindow(param0: number, param1: android.database.CursorWindow): void;

                public getExtras(): android.os.Bundle;

                public getInt(param0: number): number;

                public getWantsAllOnMoveCalls(): boolean;
            }
        }
    }

/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.database.CharArrayBuffer.d.ts" />
/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
    declare module android {
        export module database {
            export class Cursor extends javalangObject implements javaioCloseable {
                /**
                 * Constructs a new instance of the android.database.Cursor interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getCount(): number;
                    getPosition(): number;
                    move(param0: number): boolean;
                    moveToPosition(param0: number): boolean;
                    moveToFirst(): boolean;
                    moveToLast(): boolean;
                    moveToNext(): boolean;
                    moveToPrevious(): boolean;
                    isFirst(): boolean;
                    isLast(): boolean;
                    isBeforeFirst(): boolean;
                    isAfterLast(): boolean;
                    getColumnIndex(param0: string): number;
                    getColumnIndexOrThrow(param0: string): number;
                    getColumnName(param0: number): string;
                    getColumnNames(): native.Array<string>;
                    getColumnCount(): number;
                    getBlob(param0: number): native.Array<number>;
                    getString(param0: number): string;
                    copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;
                    getShort(param0: number): number;
                    getInt(param0: number): number;
                    getLong(param0: number): number;
                    getFloat(param0: number): number;
                    getDouble(param0: number): number;
                    getType(param0: number): number;
                    isNull(param0: number): boolean;
                    deactivate(): void;
                    requery(): boolean;
                    close(): void;
                    isClosed(): boolean;
                    registerContentObserver(param0: android.database.ContentObserver): void;
                    unregisterContentObserver(param0: android.database.ContentObserver): void;
                    registerDataSetObserver(param0: android.database.DataSetObserver): void;
                    unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
                    setNotificationUri(param0: android.content.ContentResolver, param1: android.net.Uri): void;
                    getNotificationUri(): android.net.Uri;
                    getWantsAllOnMoveCalls(): boolean;
                    setExtras(param0: android.os.Bundle): void;
                    getExtras(): android.os.Bundle;
                    respond(param0: android.os.Bundle): android.os.Bundle;
                    close(): void;
                    close(): void;
                });

                public static FIELD_TYPE_INTEGER: number;
                public static FIELD_TYPE_BLOB: number;
                public static FIELD_TYPE_NULL: number;
                public static FIELD_TYPE_STRING: number;
                public static FIELD_TYPE_FLOAT: number;

                public isClosed(): boolean;

                public registerDataSetObserver(param0: android.database.DataSetObserver): void;

                public getFloat(param0: number): number;

                public requery(): boolean;

                public getPosition(): number;

                public isBeforeFirst(): boolean;

                public isAfterLast(): boolean;

                public getColumnNames(): native.Array<string>;

                public moveToFirst(): boolean;

                public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

                public getNotificationUri(): android.net.Uri;

                public respond(param0: android.os.Bundle): android.os.Bundle;

                public getColumnIndexOrThrow(param0: string): number;

                public setExtras(param0: android.os.Bundle): void;

                public isLast(): boolean;

                public getCount(): number;

                public getBlob(param0: number): native.Array<number>;

                public moveToNext(): boolean;

                public getShort(param0: number): number;

                public close(): void;

                public getType(param0: number): number;

                public setNotificationUri(param0: android.content.ContentResolver, param1: android.net.Uri): void;

                public moveToLast(): boolean;

                public isNull(param0: number): boolean;

                public getColumnCount(): number;

                public getColumnName(param0: number): string;

                public getDouble(param0: number): number;

                public unregisterContentObserver(param0: android.database.ContentObserver): void;

                public isFirst(): boolean;

                public getString(param0: number): string;

                public deactivate(): void;

                public copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;

                public move(param0: number): boolean;

                public moveToPosition(param0: number): boolean;

                public getLong(param0: number): number;

                public registerContentObserver(param0: android.database.ContentObserver): void;

                public getColumnIndex(param0: string): number;

                public moveToPrevious(): boolean;

                public getExtras(): android.os.Bundle;

                public getInt(param0: number): number;

                public getWantsAllOnMoveCalls(): boolean;
            }
        }
    }

    import javalangIndexOutOfBoundsException = java.lang.IndexOutOfBoundsException;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export class CursorIndexOutOfBoundsException extends javalangIndexOutOfBoundsException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor();
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string);
                public constructor(param0: number, param1: number);
            }
        }
    }

    import javalangIterable = java.lang.Iterable;
    import javalangEnum = java.lang.Enum;
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
    declare module android {
        export module database {
            export class CursorJoiner extends javalangObject implements javalangIterable {
                public constructor(param0: android.database.Cursor, param1: native.Array<string>, param2: android.database.Cursor, param3: native.Array<string>);

                public iterator(): javautilIterator;

                public next(): android.database.CursorJoiner.Result;

                public hasNext(): boolean;

                public remove(): void;
            }
            export module CursorJoiner {
                export class Result extends javalangEnum {
                    public static BOTH: android.database.CursorJoiner.Result;
                    public static LEFT: android.database.CursorJoiner.Result;
                    public static RIGHT: android.database.CursorJoiner.Result;

                    public static valueOf(param0: string): android.database.CursorJoiner.Result;

                    public static values(): native.Array<android.database.CursorJoiner.Result>;

                    public static valueOf(param0: javalangClass, param1: string): javalangEnum;
                }
            }
        }
    }

/// <reference path="./android.database.CharArrayBuffer.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
    declare module android {
        export module database {
            export class CursorWindow extends android.database.sqlite.SQLiteClosable implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public isLong(param0: number, param1: number): boolean;

                public getShort(param0: number, param1: number): number;

                public constructor(param0: boolean);

                public getType(param0: number, param1: number): number;

                public getStartPosition(): number;

                public copyStringToBuffer(param0: number, param1: number, param2: android.database.CharArrayBuffer): void;

                public onAllReferencesReleased(): void;

                public allocRow(): boolean;

                public getBlob(param0: number, param1: number): native.Array<number>;

                public putNull(param0: number, param1: number): boolean;

                public getLong(param0: number, param1: number): number;

                public getNumRows(): number;

                public getInt(param0: number, param1: number): number;

                public setStartPosition(param0: number): void;

                public isNull(param0: number, param1: number): boolean;

                public putBlob(param0: native.Array<number>, param1: number, param2: number): boolean;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getFloat(param0: number, param1: number): number;

                public close(): void;

                public isBlob(param0: number, param1: number): boolean;

                public constructor(param0: string);

                public finalize(): void;

                public setNumColumns(param0: number): boolean;

                public isString(param0: number, param1: number): boolean;

                public putString(param0: string, param1: number, param2: number): boolean;

                public putDouble(param0: number, param1: number, param2: number): boolean;

                public clear(): void;

                public getString(param0: number, param1: number): string;

                public getDouble(param0: number, param1: number): number;

                public static newFromParcel(param0: android.os.Parcel): android.database.CursorWindow;

                public constructor();

                public freeLastRow(): void;

                public toString(): string;

                public describeContents(): number;

                public isFloat(param0: number, param1: number): boolean;

                public putLong(param0: number, param1: number, param2: number): boolean;
            }
        }
    }

/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.database.CharArrayBuffer.d.ts" />
/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
    declare module android {
        export module database {
            export class CursorWrapper extends javalangObject implements android.database.Cursor {
                public isClosed(): boolean;

                public registerDataSetObserver(param0: android.database.DataSetObserver): void;

                public getFloat(param0: number): number;

                public requery(): boolean;

                public getPosition(): number;

                public getWrappedCursor(): android.database.Cursor;

                public getColumnNames(): native.Array<string>;

                public isAfterLast(): boolean;

                public isBeforeFirst(): boolean;

                public moveToFirst(): boolean;

                public getNotificationUri(): android.net.Uri;

                public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

                public respond(param0: android.os.Bundle): android.os.Bundle;

                public getColumnIndexOrThrow(param0: string): number;

                public setExtras(param0: android.os.Bundle): void;

                public isLast(): boolean;

                public getCount(): number;

                public getBlob(param0: number): native.Array<number>;

                public close(): void;

                public getShort(param0: number): number;

                public moveToNext(): boolean;

                public getType(param0: number): number;

                public setNotificationUri(param0: android.content.ContentResolver, param1: android.net.Uri): void;

                public moveToLast(): boolean;

                public isNull(param0: number): boolean;

                public getColumnCount(): number;

                public getColumnName(param0: number): string;

                public getDouble(param0: number): number;

                public unregisterContentObserver(param0: android.database.ContentObserver): void;

                public isFirst(): boolean;

                public deactivate(): void;

                public getString(param0: number): string;

                public copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;

                public move(param0: number): boolean;

                public moveToPosition(param0: number): boolean;

                public constructor(param0: android.database.Cursor);

                public getLong(param0: number): number;

                public registerContentObserver(param0: android.database.ContentObserver): void;

                public getColumnIndex(param0: string): number;

                public moveToPrevious(): boolean;

                public getExtras(): android.os.Bundle;

                public getInt(param0: number): number;

                public getWantsAllOnMoveCalls(): boolean;
            }
        }
    }

    declare module android {
        export module database {
            export class DataSetObservable extends android.database.Observable {
                public notifyChanged(): void;

                public constructor();

                public notifyInvalidated(): void;
            }
        }
    }

    declare module android {
        export module database {
            export abstract class DataSetObserver extends javalangObject {
                public onInvalidated(): void;

                public constructor();

                public onChanged(): void;
            }
        }
    }

/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
    declare module android {
        export module database {
            export class DatabaseErrorHandler extends javalangObject {
                /**
                 * Constructs a new instance of the android.database.DatabaseErrorHandler interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onCorruption(param0: android.database.sqlite.SQLiteDatabase): void;
                });

                public onCorruption(param0: android.database.sqlite.SQLiteDatabase): void;
            }
        }
    }

    import javalangStringBuilder = java.lang.StringBuilder;
    import javaioPrintStream = java.io.PrintStream;
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteProgram.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteStatement.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.io.PrintStream.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuilder.d.ts" />
    declare module android {
        export module database {
            export class DatabaseUtils extends javalangObject {
                public static STATEMENT_ABORT: number;
                public static STATEMENT_ATTACH: number;
                public static STATEMENT_BEGIN: number;
                public static STATEMENT_COMMIT: number;
                public static STATEMENT_DDL: number;
                public static STATEMENT_OTHER: number;
                public static STATEMENT_PRAGMA: number;
                public static STATEMENT_SELECT: number;
                public static STATEMENT_UNPREPARED: number;
                public static STATEMENT_UPDATE: number;

                public static dumpCurrentRow(param0: android.database.Cursor, param1: javalangStringBuilder): void;

                public static queryNumEntries(param0: android.database.sqlite.SQLiteDatabase, param1: string, param2: string, param3: native.Array<string>): number;

                public static createDbFromSqlStatements(param0: android.content.Context, param1: string, param2: number, param3: string): void;

                public static writeExceptionToParcel(param0: android.os.Parcel, param1: javalangException): void;

                public static cursorDoubleToCursorValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues): void;

                public static longForQuery(param0: android.database.sqlite.SQLiteDatabase, param1: string, param2: native.Array<string>): number;

                public static appendValueToSql(param0: javalangStringBuilder, param1: javalangObject): void;

                public static readExceptionWithFileNotFoundExceptionFromParcel(param0: android.os.Parcel): void;

                public static cursorFloatToContentValuesIfPresent(param0: android.database.Cursor, param1: android.content.ContentValues, param2: string): void;

                public static dumpCursor(param0: android.database.Cursor, param1: javalangStringBuilder): void;

                public static cursorDoubleToContentValuesIfPresent(param0: android.database.Cursor, param1: android.content.ContentValues, param2: string): void;

                public static cursorRowToContentValues(param0: android.database.Cursor, param1: android.content.ContentValues): void;

                public static cursorLongToContentValuesIfPresent(param0: android.database.Cursor, param1: android.content.ContentValues, param2: string): void;

                public static readExceptionFromParcel(param0: android.os.Parcel): void;

                public static dumpCurrentRow(param0: android.database.Cursor): void;

                public static queryNumEntries(param0: android.database.sqlite.SQLiteDatabase, param1: string): number;

                public static dumpCursorToString(param0: android.database.Cursor): string;

                public static blobFileDescriptorForQuery(param0: android.database.sqlite.SQLiteStatement, param1: native.Array<string>): android.os.ParcelFileDescriptor;

                public static cursorStringToInsertHelper(param0: android.database.Cursor, param1: string, param2: android.database.DatabaseUtils.InsertHelper, param3: number): void;

                public static queryNumEntries(param0: android.database.sqlite.SQLiteDatabase, param1: string, param2: string): number;

                public static blobFileDescriptorForQuery(param0: android.database.sqlite.SQLiteDatabase, param1: string, param2: native.Array<string>): android.os.ParcelFileDescriptor;

                public static cursorLongToContentValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues): void;

                public static dumpCursor(param0: android.database.Cursor, param1: javaioPrintStream): void;

                public static cursorLongToContentValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues, param3: string): void;

                public static appendEscapedSQLString(param0: javalangStringBuilder, param1: string): void;

                public static getHexCollationKey(param0: string): string;

                public static cursorDoubleToContentValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues, param3: string): void;

                public static cursorStringToContentValuesIfPresent(param0: android.database.Cursor, param1: android.content.ContentValues, param2: string): void;

                public static dumpCursor(param0: android.database.Cursor): void;

                public static sqlEscapeString(param0: string): string;

                public static getSqlStatementType(param0: string): number;

                public static cursorStringToContentValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues, param3: string): void;

                public static readExceptionWithOperationApplicationExceptionFromParcel(param0: android.os.Parcel): void;

                public constructor();

                public static longForQuery(param0: android.database.sqlite.SQLiteStatement, param1: native.Array<string>): number;

                public static cursorIntToContentValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues): void;

                public static getCollationKey(param0: string): string;

                public static stringForQuery(param0: android.database.sqlite.SQLiteStatement, param1: native.Array<string>): string;

                public static dumpCurrentRow(param0: android.database.Cursor, param1: javaioPrintStream): void;

                public static appendSelectionArgs(param0: native.Array<string>, param1: native.Array<string>): native.Array<string>;

                public static stringForQuery(param0: android.database.sqlite.SQLiteDatabase, param1: string, param2: native.Array<string>): string;

                public static concatenateWhere(param0: string, param1: string): string;

                public static cursorIntToContentValuesIfPresent(param0: android.database.Cursor, param1: android.content.ContentValues, param2: string): void;

                public static dumpCurrentRowToString(param0: android.database.Cursor): string;

                public static cursorShortToContentValuesIfPresent(param0: android.database.Cursor, param1: android.content.ContentValues, param2: string): void;

                public static cursorStringToContentValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues): void;

                public static cursorIntToContentValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues, param3: string): void;

                public static bindObjectToProgram(param0: android.database.sqlite.SQLiteProgram, param1: number, param2: javalangObject): void;
            }
            export module DatabaseUtils {
                export class InsertHelper extends javalangObject {
                    public replace(param0: android.content.ContentValues): number;

                    public bind(param0: number, param1: native.Array<number>): void;
                    public bind(param0: number, param1: boolean): void;
                    public bind(param0: number, param1: string): void;

                    public close(): void;

                    public getColumnIndex(param0: string): number;

                    public prepareForReplace(): void;

                    public prepareForInsert(): void;

                    public bindNull(param0: number): void;

                    public constructor(param0: android.database.sqlite.SQLiteDatabase, param1: string);

                    public bind(param0: number, param1: number): void;

                    public insert(param0: android.content.ContentValues): number;

                    public execute(): number;
                }
            }
        }
    }

/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
    declare module android {
        export module database {
            export class DefaultDatabaseErrorHandler extends javalangObject implements android.database.DatabaseErrorHandler {
                public onCorruption(param0: android.database.sqlite.SQLiteDatabase): void;

                public constructor();
            }
        }
    }

/// <reference path="./android.database.CursorWindow.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
    declare module android {
        export module database {
            export class MatrixCursor extends android.database.AbstractCursor {
                public isNull(param0: number): boolean;

                public constructor(param0: native.Array<string>, param1: number);

                public getDouble(param0: number): number;

                public getString(param0: number): string;

                public getFloat(param0: number): number;

                public constructor();

                public newRow(): android.database.MatrixCursor.RowBuilder;

                public getWindow(): android.database.CursorWindow;

                public getColumnNames(): native.Array<string>;

                public constructor(param0: native.Array<string>);

                public getLong(param0: number): number;

                public addRow(param0: javalangIterable): void;

                public onMove(param0: number, param1: number): boolean;

                public getCount(): number;

                public getBlob(param0: number): native.Array<number>;

                public addRow(param0: native.Array<javalangObject>): void;

                public getShort(param0: number): number;

                public getType(param0: number): number;

                public fillWindow(param0: number, param1: android.database.CursorWindow): void;

                public getInt(param0: number): number;
            }
            export module MatrixCursor {
                export class RowBuilder extends javalangObject {
                    public add(param0: javalangObject): android.database.MatrixCursor.RowBuilder;
                    public add(param0: string, param1: javalangObject): android.database.MatrixCursor.RowBuilder;
                }
            }
        }
    }

/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.CursorWindow.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
    declare module android {
        export module database {
            export class MergeCursor extends android.database.AbstractCursor {
                public isNull(param0: number): boolean;

                public getDouble(param0: number): number;

                public unregisterContentObserver(param0: android.database.ContentObserver): void;

                public registerDataSetObserver(param0: android.database.DataSetObserver): void;

                public getString(param0: number): string;

                public deactivate(): void;

                public getFloat(param0: number): number;

                public requery(): boolean;

                public constructor(param0: native.Array<android.database.Cursor>);
                public constructor();

                public getWindow(): android.database.CursorWindow;

                public getColumnNames(): native.Array<string>;

                public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

                public getLong(param0: number): number;

                public registerContentObserver(param0: android.database.ContentObserver): void;

                public onMove(param0: number, param1: number): boolean;

                public getCount(): number;

                public getBlob(param0: number): native.Array<number>;

                public getShort(param0: number): number;

                public close(): void;

                public getType(param0: number): number;

                public fillWindow(param0: number, param1: android.database.CursorWindow): void;

                public getInt(param0: number): number;
            }
        }
    }

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
    declare module android {
        export module database {
            export abstract class Observable extends javalangObject {
                public mObservers: javautilArrayList;

                public unregisterAll(): void;

                public registerObserver(param0: javalangObject): void;

                public constructor();

                public unregisterObserver(param0: javalangObject): void;
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export class SQLException extends javalangRuntimeException {
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
        export module database {
            export class StaleDataException extends javalangRuntimeException {
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
        export module database {
            export module sqlite {
                export class SQLiteAbortException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteAccessPermException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteBindOrColumnIndexOutOfRangeException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteBlobTooBigException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteCantOpenDatabaseException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

    declare module android {
        export module database {
            export module sqlite {
                export abstract class SQLiteClosable extends javalangObject implements javaioCloseable {
                    public releaseReference(): void;

                    public acquireReference(): void;

                    public close(): void;

                    public releaseReferenceFromContainer(): void;

                    public onAllReferencesReleasedFromContainer(): void;

                    public constructor();

                    public onAllReferencesReleased(): void;
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteConstraintException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./android.database.CursorWindow.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteCursorDriver.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteQuery.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteCursor extends android.database.AbstractWindowedCursor {
                    public getDatabase(): android.database.sqlite.SQLiteDatabase;

                    public getColumnNames(): native.Array<string>;

                    public requery(): boolean;

                    public close(): void;

                    public setSelectionArguments(param0: native.Array<string>): void;

                    public constructor(param0: android.database.sqlite.SQLiteCursorDriver, param1: string, param2: android.database.sqlite.SQLiteQuery);

                    public onMove(param0: number, param1: number): boolean;

                    public fillWindow(param0: number, param1: android.database.CursorWindow): void;

                    public finalize(): void;

                    public constructor(param0: android.database.sqlite.SQLiteDatabase, param1: android.database.sqlite.SQLiteCursorDriver, param2: string, param3: android.database.sqlite.SQLiteQuery);

                    public getCount(): number;

                    public getColumnIndex(param0: string): number;

                    public constructor();

                    public setWindow(param0: android.database.CursorWindow): void;

                    public getWindow(): android.database.CursorWindow;

                    public deactivate(): void;
                }
            }
        }
    }

/// <reference path="./android.database.Cursor.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteCursorDriver extends javalangObject {
                    /**
                     * Constructs a new instance of the android.database.sqlite.SQLiteCursorDriver interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        query(param0: android.database.sqlite.SQLiteDatabase.CursorFactory, param1: native.Array<string>): android.database.Cursor;
                        cursorDeactivated(): void;
                        cursorRequeried(param0: android.database.Cursor): void;
                        cursorClosed(): void;
                        setBindArguments(param0: native.Array<string>): void;
                    });

                    public cursorRequeried(param0: android.database.Cursor): void;

                    public setBindArguments(param0: native.Array<string>): void;

                    public cursorDeactivated(): void;

                    public cursorClosed(): void;

                    public query(param0: android.database.sqlite.SQLiteDatabase.CursorFactory, param1: native.Array<string>): android.database.Cursor;
                }
            }
        }
    }

/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.DatabaseErrorHandler.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteCursorDriver.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteQuery.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteStatement.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteTransactionListener.d.ts" />
/// <reference path="./android.os.CancellationSignal.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteDatabase extends android.database.sqlite.SQLiteClosable {
                    public static CONFLICT_ABORT: number;
                    public static CONFLICT_FAIL: number;
                    public static CONFLICT_IGNORE: number;
                    public static CONFLICT_NONE: number;
                    public static CONFLICT_REPLACE: number;
                    public static CONFLICT_ROLLBACK: number;
                    public static CREATE_IF_NECESSARY: number;
                    public static ENABLE_WRITE_AHEAD_LOGGING: number;
                    public static MAX_SQL_CACHE_SIZE: number;
                    public static NO_LOCALIZED_COLLATORS: number;
                    public static OPEN_READONLY: number;
                    public static OPEN_READWRITE: number;
                    public static SQLITE_MAX_LIKE_PATTERN_LENGTH: number;

                    public beginTransaction(): void;

                    public update(param0: string, param1: android.content.ContentValues, param2: string, param3: native.Array<string>): number;

                    public compileStatement(param0: string): android.database.sqlite.SQLiteStatement;

                    public replace(param0: string, param1: string, param2: android.content.ContentValues): number;

                    public needUpgrade(param0: number): boolean;

                    public beginTransactionWithListenerNonExclusive(param0: android.database.sqlite.SQLiteTransactionListener): void;

                    public yieldIfContendedSafely(param0: number): boolean;

                    public setMaxSqlCacheSize(param0: number): void;

                    public static openDatabase(param0: string, param1: android.database.sqlite.SQLiteDatabase.CursorFactory, param2: number): android.database.sqlite.SQLiteDatabase;

                    public setVersion(param0: number): void;

                    public query(param0: string, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string, param6: string, param7: string): android.database.Cursor;

                    public isDbLockedByCurrentThread(): boolean;

                    public static openOrCreateDatabase(param0: javaioFile, param1: android.database.sqlite.SQLiteDatabase.CursorFactory): android.database.sqlite.SQLiteDatabase;

                    public isWriteAheadLoggingEnabled(): boolean;

                    public static releaseMemory(): number;

                    public queryWithFactory(param0: android.database.sqlite.SQLiteDatabase.CursorFactory, param1: boolean, param2: string, param3: native.Array<string>, param4: string, param5: native.Array<string>, param6: string, param7: string, param8: string, param9: string, param10: android.os.CancellationSignal): android.database.Cursor;

                    public inTransaction(): boolean;

                    public enableWriteAheadLogging(): boolean;

                    public getAttachedDbs(): javautilList;

                    public isDbLockedByOtherThreads(): boolean;

                    public close(): void;

                    public rawQueryWithFactory(param0: android.database.sqlite.SQLiteDatabase.CursorFactory, param1: string, param2: native.Array<string>, param3: string, param4: android.os.CancellationSignal): android.database.Cursor;

                    public execSQL(param0: string): void;

                    public setTransactionSuccessful(): void;

                    public insertOrThrow(param0: string, param1: string, param2: android.content.ContentValues): number;

                    public getPath(): string;

                    public toString(): string;

                    public yieldIfContendedSafely(): boolean;

                    public static openOrCreateDatabase(param0: string, param1: android.database.sqlite.SQLiteDatabase.CursorFactory, param2: android.database.DatabaseErrorHandler): android.database.sqlite.SQLiteDatabase;
                    public static openOrCreateDatabase(param0: string, param1: android.database.sqlite.SQLiteDatabase.CursorFactory): android.database.sqlite.SQLiteDatabase;

                    public execSQL(param0: string, param1: native.Array<javalangObject>): void;

                    public delete(param0: string, param1: string, param2: native.Array<string>): number;

                    public getVersion(): number;

                    public query(param0: string, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string, param6: string): android.database.Cursor;

                    public beginTransactionWithListener(param0: android.database.sqlite.SQLiteTransactionListener): void;

                    public setForeignKeyConstraintsEnabled(param0: boolean): void;

                    public rawQuery(param0: string, param1: native.Array<string>, param2: android.os.CancellationSignal): android.database.Cursor;

                    public query(param0: boolean, param1: string, param2: native.Array<string>, param3: string, param4: native.Array<string>, param5: string, param6: string, param7: string, param8: string, param9: android.os.CancellationSignal): android.database.Cursor;

                    public finalize(): void;

                    public beginTransactionNonExclusive(): void;

                    public setMaximumSize(param0: number): number;

                    public static create(param0: android.database.sqlite.SQLiteDatabase.CursorFactory): android.database.sqlite.SQLiteDatabase;

                    public setPageSize(param0: number): void;

                    public static findEditTable(param0: string): string;

                    public static openDatabase(param0: string, param1: android.database.sqlite.SQLiteDatabase.CursorFactory, param2: number, param3: android.database.DatabaseErrorHandler): android.database.sqlite.SQLiteDatabase;

                    public getMaximumSize(): number;

                    public isDatabaseIntegrityOk(): boolean;

                    public setLocale(param0: javautilLocale): void;

                    public onAllReferencesReleased(): void;

                    public replaceOrThrow(param0: string, param1: string, param2: android.content.ContentValues): number;

                    public yieldIfContended(): boolean;

                    public static deleteDatabase(param0: javaioFile): boolean;

                    public setLockingEnabled(param0: boolean): void;

                    public disableWriteAheadLogging(): void;

                    public markTableSyncable(param0: string, param1: string): void;

                    public updateWithOnConflict(param0: string, param1: android.content.ContentValues, param2: string, param3: native.Array<string>, param4: number): number;

                    public insert(param0: string, param1: string, param2: android.content.ContentValues): number;

                    public getPageSize(): number;

                    public query(param0: boolean, param1: string, param2: native.Array<string>, param3: string, param4: native.Array<string>, param5: string, param6: string, param7: string, param8: string): android.database.Cursor;

                    public isReadOnly(): boolean;

                    public insertWithOnConflict(param0: string, param1: string, param2: android.content.ContentValues, param3: number): number;

                    public isOpen(): boolean;

                    public endTransaction(): void;

                    public rawQuery(param0: string, param1: native.Array<string>): android.database.Cursor;

                    public getSyncedTables(): javautilMap;

                    public rawQueryWithFactory(param0: android.database.sqlite.SQLiteDatabase.CursorFactory, param1: string, param2: native.Array<string>, param3: string): android.database.Cursor;

                    public markTableSyncable(param0: string, param1: string, param2: string): void;

                    public queryWithFactory(param0: android.database.sqlite.SQLiteDatabase.CursorFactory, param1: boolean, param2: string, param3: native.Array<string>, param4: string, param5: native.Array<string>, param6: string, param7: string, param8: string, param9: string): android.database.Cursor;
                }
                export module SQLiteDatabase {
                    export class CursorFactory extends javalangObject {
                        /**
                         * Constructs a new instance of the android.database.sqlite.SQLiteDatabase$CursorFactory interface with the provided implementation.
                         */
                        public constructor(implementation: {
                            newCursor(param0: android.database.sqlite.SQLiteDatabase, param1: android.database.sqlite.SQLiteCursorDriver, param2: string, param3: android.database.sqlite.SQLiteQuery): android.database.Cursor;
                        });

                        public newCursor(param0: android.database.sqlite.SQLiteDatabase, param1: android.database.sqlite.SQLiteCursorDriver, param2: string, param3: android.database.sqlite.SQLiteQuery): android.database.Cursor;
                    }
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteDatabaseCorruptException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteDatabaseLockedException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteDatatypeMismatchException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteDiskIOException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteDoneException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteException extends android.database.SQLException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteFullException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteMisuseException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.DatabaseErrorHandler.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export abstract class SQLiteOpenHelper extends javalangObject {
                    public onOpen(param0: android.database.sqlite.SQLiteDatabase): void;

                    public close(): void;

                    public setWriteAheadLoggingEnabled(param0: boolean): void;

                    public onCreate(param0: android.database.sqlite.SQLiteDatabase): void;

                    public constructor(param0: android.content.Context, param1: string, param2: android.database.sqlite.SQLiteDatabase.CursorFactory, param3: number, param4: android.database.DatabaseErrorHandler);

                    public onUpgrade(param0: android.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;

                    public constructor(param0: android.content.Context, param1: string, param2: android.database.sqlite.SQLiteDatabase.CursorFactory, param3: number);

                    public onDowngrade(param0: android.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;

                    public getDatabaseName(): string;

                    public getWritableDatabase(): android.database.sqlite.SQLiteDatabase;

                    public getReadableDatabase(): android.database.sqlite.SQLiteDatabase;

                    public onConfigure(param0: android.database.sqlite.SQLiteDatabase): void;
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteOutOfMemoryException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export abstract class SQLiteProgram extends android.database.sqlite.SQLiteClosable {
                    public clearBindings(): void;

                    public close(): void;

                    public bindAllArgsAsStrings(param0: native.Array<string>): void;

                    public bindString(param0: number, param1: string): void;

                    public bindDouble(param0: number, param1: number): void;

                    public bindBlob(param0: number, param1: native.Array<number>): void;

                    public getUniqueId(): number;

                    public bindLong(param0: number, param1: number): void;

                    public bindNull(param0: number): void;

                    public onAllReferencesReleased(): void;
                }
            }
        }
    }

    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteQuery extends android.database.sqlite.SQLiteProgram {
                    public close(): void;

                    public toString(): string;
                }
            }
        }
    }

/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./android.os.CancellationSignal.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuilder.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteQueryBuilder extends javalangObject {
                    public static appendColumns(param0: javalangStringBuilder, param1: native.Array<string>): void;

                    public buildQuery(param0: native.Array<string>, param1: string, param2: native.Array<string>, param3: string, param4: string, param5: string, param6: string): string;

                    public setProjectionMap(param0: javautilMap): void;

                    public buildUnionSubQuery(param0: string, param1: native.Array<string>, param2: javautilSet, param3: number, param4: string, param5: string, param6: native.Array<string>, param7: string, param8: string): string;
                    public buildUnionSubQuery(param0: string, param1: native.Array<string>, param2: javautilSet, param3: number, param4: string, param5: string, param6: string, param7: string): string;

                    public buildQuery(param0: native.Array<string>, param1: string, param2: string, param3: string, param4: string, param5: string): string;

                    public query(param0: android.database.sqlite.SQLiteDatabase, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string, param6: string): android.database.Cursor;

                    public constructor();

                    public query(param0: android.database.sqlite.SQLiteDatabase, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string, param6: string, param7: string): android.database.Cursor;

                    public buildUnionQuery(param0: native.Array<string>, param1: string, param2: string): string;

                    public setStrict(param0: boolean): void;

                    public setCursorFactory(param0: android.database.sqlite.SQLiteDatabase.CursorFactory): void;

                    public setTables(param0: string): void;

                    public getTables(): string;

                    public setDistinct(param0: boolean): void;

                    public appendWhere(param0: string): void;

                    public static buildQueryString(param0: boolean, param1: string, param2: native.Array<string>, param3: string, param4: string, param5: string, param6: string, param7: string): string;

                    public appendWhereEscapeString(param0: string): void;

                    public query(param0: android.database.sqlite.SQLiteDatabase, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string, param6: string, param7: string, param8: android.os.CancellationSignal): android.database.Cursor;
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteReadOnlyDatabaseException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteStatement extends android.database.sqlite.SQLiteProgram {
                    public execute(): void;

                    public simpleQueryForString(): string;

                    public close(): void;

                    public executeUpdateDelete(): number;

                    public simpleQueryForLong(): number;

                    public simpleQueryForBlobFileDescriptor(): android.os.ParcelFileDescriptor;

                    public executeInsert(): number;

                    public toString(): string;
                }
            }
        }
    }

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteTableLockedException extends android.database.sqlite.SQLiteException {
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }

    declare module android {
        export module database {
            export module sqlite {
                export class SQLiteTransactionListener extends javalangObject {
                    /**
                     * Constructs a new instance of the android.database.sqlite.SQLiteTransactionListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onBegin(): void;
                        onCommit(): void;
                        onRollback(): void;
                    });

                    public onCommit(): void;

                    public onBegin(): void;

                    public onRollback(): void;
                }
            }
        }
    }
}

declare module android {
    export module drm {
        export class DrmStore extends javalangObject {
            public constructor();
        }
        export module DrmStore {
            export class Action extends javalangObject {
                public static DEFAULT: number;
                public static DISPLAY: number;
                public static EXECUTE: number;
                public static OUTPUT: number;
                public static PLAY: number;
                public static PREVIEW: number;
                public static RINGTONE: number;
                public static TRANSFER: number;

                public constructor();
            }
            export class ConstraintsColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.drm.DrmStore$ConstraintsColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static LICENSE_AVAILABLE_TIME: string;
                public static EXTENDED_METADATA: string;
                public static LICENSE_EXPIRY_TIME: string;
                public static MAX_REPEAT_COUNT: string;
                public static LICENSE_START_TIME: string;
                public static REMAINING_REPEAT_COUNT: string;
            }
            export class DrmObjectType extends javalangObject {
                public static CONTENT: number;
                public static RIGHTS_OBJECT: number;
                public static TRIGGER_OBJECT: number;
                public static UNKNOWN: number;

                public constructor();
            }
            export class Playback extends javalangObject {
                public static PAUSE: number;
                public static RESUME: number;
                public static START: number;
                public static STOP: number;

                public constructor();
            }
            export class RightsStatus extends javalangObject {
                public static RIGHTS_EXPIRED: number;
                public static RIGHTS_INVALID: number;
                public static RIGHTS_NOT_ACQUIRED: number;
                public static RIGHTS_VALID: number;

                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
declare module android {
    export module drm {
        export class DrmSupportInfo extends javalangObject {
            public getDescriprition(): string;

            public getFileSuffixIterator(): javautilIterator;

            public equals(param0: javalangObject): boolean;

            public addMimeType(param0: string): void;

            public addFileSuffix(param0: string): void;

            public setDescription(param0: string): void;

            public constructor();

            public getDescription(): string;

            public getMimeTypeIterator(): javautilIterator;

            public hashCode(): number;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
declare module android {
    export module drm {
        export class DrmUtils extends javalangObject {
            public static getExtendedMetadataParser(param0: native.Array<number>): android.drm.DrmUtils.ExtendedMetadataParser;

            public constructor();
        }
        export module DrmUtils {
            export class ExtendedMetadataParser extends javalangObject {
                public iterator(): javautilIterator;

                public keyIterator(): javautilIterator;

                public get(param0: string): string;
            }
        }
    }
}

declare module android {
    export module drm {
        export class ProcessedData extends javalangObject {
            public getSubscriptionId(): string;

            public getAccountId(): string;

            public getData(): native.Array<number>;
        }
    }
}
