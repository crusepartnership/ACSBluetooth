
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module util {
        export class AndroidException extends javalangException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor(param0: javalangException);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module util {
        export class AndroidRuntimeException extends javalangRuntimeException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor(param0: javalangException);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module android {
    export module util {
        export class ArrayMap extends javalangObject implements javautilMap {
            public keySet(): javautilSet;

            public containsKey(param0: javalangObject): boolean;

            public keyAt(param0: number): javalangObject;

            public equals(param0: javalangObject): boolean;

            public remove(param0: javalangObject): javalangObject;

            public indexOfKey(param0: javalangObject): number;

            public put(param0: javalangObject, param1: javalangObject): javalangObject;

            public ensureCapacity(param0: number): void;

            public removeAt(param0: number): javalangObject;

            public entrySet(): javautilSet;

            public containsAll(param0: javautilCollection): boolean;

            public retainAll(param0: javautilCollection): boolean;

            public putAll(param0: javautilMap): void;

            public clear(): void;

            public values(): javautilCollection;

            public constructor(param0: android.util.ArrayMap);

            public isEmpty(): boolean;

            public size(): number;

            public constructor(param0: number);
            public constructor();

            public removeAll(param0: javautilCollection): boolean;

            public putAll(param0: android.util.ArrayMap): void;

            public toString(): string;

            public setValueAt(param0: number, param1: javalangObject): javalangObject;

            public containsValue(param0: javalangObject): boolean;

            public valueAt(param0: number): javalangObject;

            public get(param0: javalangObject): javalangObject;

            public hashCode(): number;
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
declare module android {
    export module util {
        export class ArraySet extends javalangObject implements javautilCollection, javautilSet {
            public addAll(param0: javautilCollection): boolean;

            public equals(param0: javalangObject): boolean;

            public iterator(): javautilIterator;

            public add(param0: javalangObject): boolean;

            public ensureCapacity(param0: number): void;

            public removeAt(param0: number): javalangObject;

            public removeAll(param0: android.util.ArraySet): boolean;

            public containsAll(param0: javautilCollection): boolean;

            public retainAll(param0: javautilCollection): boolean;

            public contains(param0: javalangObject): boolean;

            public clear(): void;

            public isEmpty(): boolean;

            public size(): number;

            public toArray(): native.Array<javalangObject>;

            public constructor(param0: number);
            public constructor();

            public remove(param0: javalangObject): boolean;

            public removeAll(param0: javautilCollection): boolean;

            public constructor(param0: android.util.ArraySet);

            public indexOf(param0: javalangObject): number;

            public toString(): string;

            public addAll(param0: android.util.ArraySet): void;

            public valueAt(param0: number): javalangObject;

            public toArray(param0: native.Array<javalangObject>): native.Array<javalangObject>;

            public hashCode(): number;
        }
    }
}

/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.FileInputStream.d.ts" />
/// <reference path="./java.io.FileOutputStream.d.ts" />
declare module android {
    export module util {
        export class AtomicFile extends javalangObject {
            public getBaseFile(): javaioFile;

            public delete(): void;

            public finishWrite(param0: javaioFileOutputStream): void;

            public failWrite(param0: javaioFileOutputStream): void;

            public startWrite(): javaioFileOutputStream;

            public constructor(param0: javaioFile);

            public openRead(): javaioFileInputStream;

            public readFully(): native.Array<number>;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module util {
        export class AttributeSet extends javalangObject {
            /**
             * Constructs a new instance of the android.util.AttributeSet interface with the provided implementation.
             */
            public constructor(implementation: {
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
            });

            public getAttributeFloatValue(param0: number, param1: number): number;

            public getAttributeUnsignedIntValue(param0: string, param1: string, param2: number): number;

            public getAttributeBooleanValue(param0: string, param1: string, param2: boolean): boolean;

            public getAttributeIntValue(param0: number, param1: number): number;

            public getPositionDescription(): string;

            public getAttributeListValue(param0: number, param1: native.Array<string>, param2: number): number;

            public getAttributeResourceValue(param0: number, param1: number): number;

            public getAttributeUnsignedIntValue(param0: number, param1: number): number;

            public getAttributeName(param0: number): string;

            public getAttributeValue(param0: string, param1: string): string;

            public getAttributeFloatValue(param0: string, param1: string, param2: number): number;

            public getAttributeNameResource(param0: number): number;

            public getAttributeResourceValue(param0: string, param1: string, param2: number): number;

            public getAttributeListValue(param0: string, param1: string, param2: native.Array<string>, param3: number): number;

            public getAttributeValue(param0: number): string;

            public getAttributeCount(): number;

            public getIdAttributeResourceValue(param0: number): number;

            public getAttributeIntValue(param0: string, param1: string, param2: number): number;

            public getAttributeBooleanValue(param0: number, param1: boolean): boolean;

            public getIdAttribute(): string;

            public getClassAttribute(): string;

            public getStyleAttribute(): number;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module util {
        export class Base64 extends javalangObject {
            public static CRLF: number;
            public static DEFAULT: number;
            public static NO_CLOSE: number;
            public static NO_PADDING: number;
            public static NO_WRAP: number;
            public static URL_SAFE: number;

            public static decode(param0: native.Array<number>, param1: number, param2: number, param3: number): native.Array<number>;

            public static encodeToString(param0: native.Array<number>, param1: number, param2: number, param3: number): string;

            public static decode(param0: string, param1: number): native.Array<number>;

            public static encode(param0: native.Array<number>, param1: number, param2: number, param3: number): native.Array<number>;

            public static decode(param0: native.Array<number>, param1: number): native.Array<number>;

            public static encodeToString(param0: native.Array<number>, param1: number): string;

            public static encode(param0: native.Array<number>, param1: number): native.Array<number>;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module util {
        export class Base64DataException extends javaioIOException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

import javaioFilterInputStream = java.io.FilterInputStream;
/// <reference path="./java.io.InputStream.d.ts" />
declare module android {
    export module util {
        export class Base64InputStream extends javaioFilterInputStream {
            public markSupported(): boolean;

            public read(param0: native.Array<number>): number;

            public skip(param0: number): number;

            public reset(): void;

            public read(param0: native.Array<number>, param1: number, param2: number): number;

            public constructor(param0: javaioInputStream);
            public constructor();
            public constructor(param0: javaioInputStream, param1: number);

            public close(): void;

            public mark(param0: number): void;

            public available(): number;

            public read(): number;
        }
    }
}

import javaioFilterOutputStream = java.io.FilterOutputStream;
/// <reference path="./java.io.OutputStream.d.ts" />
declare module android {
    export module util {
        export class Base64OutputStream extends javaioFilterOutputStream {
            public flush(): void;

            public write(param0: number): void;

            public constructor(param0: javaioOutputStream);
            public constructor(param0: javaioOutputStream, param1: number);

            public write(param0: native.Array<number>, param1: number, param2: number): void;

            public constructor();

            public write(param0: native.Array<number>): void;

            public close(): void;
        }
    }
}

declare module android {
    export module util {
        export class Config extends javalangObject {
            public static DEBUG: boolean;
            public static LOGD: boolean;
            public static LOGV: boolean;
            public static PROFILE: boolean;
            public static RELEASE: boolean;
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module util {
        export class DebugUtils extends javalangObject {
            public static isObjectSelected(param0: javalangObject): boolean;
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module util {
        export class DisplayMetrics extends javalangObject {
            public static DENSITY_280: number;
            public static DENSITY_360: number;
            public static DENSITY_400: number;
            public static DENSITY_420: number;
            public static DENSITY_560: number;
            public static DENSITY_DEFAULT: number;
            public static DENSITY_HIGH: number;
            public static DENSITY_LOW: number;
            public static DENSITY_MEDIUM: number;
            public static DENSITY_TV: number;
            public static DENSITY_XHIGH: number;
            public static DENSITY_XXHIGH: number;
            public static DENSITY_XXXHIGH: number;
            public density: number;
            public densityDpi: number;
            public heightPixels: number;
            public scaledDensity: number;
            public widthPixels: number;
            public xdpi: number;
            public ydpi: number;

            public setTo(param0: android.util.DisplayMetrics): void;

            public toString(): string;

            public equals(param0: android.util.DisplayMetrics): boolean;

            public setToDefaults(): void;

            public equals(param0: javalangObject): boolean;

            public constructor();

            public hashCode(): number;
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
declare module android {
    export module util {
        export class EventLog extends javalangObject {
            public static writeEvent(param0: number, param1: string): number;

            public static readEvents(param0: native.Array<number>, param1: javautilCollection): void;

            public static getTagCode(param0: string): number;

            public static writeEvent(param0: number, param1: native.Array<javalangObject>): number;

            public static getTagName(param0: number): string;

            public static writeEvent(param0: number, param1: number): number;
        }
        export module EventLog {
            export class Event extends javalangObject {
                public getProcessId(): number;

                public getTimeNanos(): number;

                public getThreadId(): number;

                public getTag(): number;

                public getData(): javalangObject;
            }
        }
    }
}

import javaioBufferedReader = java.io.BufferedReader;
/// <reference path="./java.io.BufferedReader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module util {
        export class EventLogTags extends javalangObject {
            public get(param0: string): android.util.EventLogTags.Description;

            public constructor(param0: javaioBufferedReader);
            public constructor();

            public get(param0: number): android.util.EventLogTags.Description;
        }
        export module EventLogTags {
            export class Description extends javalangObject {
                public mName: string;
                public mTag: number;
            }
        }
    }
}

declare module android {
    export module util {
        export class FloatMath extends javalangObject {
        }
    }
}

/// <reference path="./android.util.JsonToken.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
declare module android {
    export module util {
        export class JsonReader extends javalangObject implements javaioCloseable {
            public beginArray(): void;

            public nextString(): string;

            public nextBoolean(): boolean;

            public isLenient(): boolean;

            public nextNull(): void;

            public hasNext(): boolean;

            public nextLong(): number;

            public nextName(): string;

            public nextDouble(): number;

            public endArray(): void;

            public beginObject(): void;

            public toString(): string;

            public endObject(): void;

            public setLenient(param0: boolean): void;

            public peek(): android.util.JsonToken;

            public nextInt(): number;

            public close(): void;

            public skipValue(): void;

            public constructor(param0: javaioReader);
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module util {
        export class JsonToken extends javalangEnum {
            public static BEGIN_ARRAY: android.util.JsonToken;
            public static BEGIN_OBJECT: android.util.JsonToken;
            public static BOOLEAN: android.util.JsonToken;
            public static END_ARRAY: android.util.JsonToken;
            public static END_DOCUMENT: android.util.JsonToken;
            public static END_OBJECT: android.util.JsonToken;
            public static NAME: android.util.JsonToken;
            public static NULL: android.util.JsonToken;
            public static NUMBER: android.util.JsonToken;
            public static STRING: android.util.JsonToken;

            public static valueOf(param0: javalangClass, param1: string): javalangEnum;

            public static values(): native.Array<android.util.JsonToken>;

            public static valueOf(param0: string): android.util.JsonToken;
        }
    }
}

/// <reference path="./java.io.Writer.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module util {
        export class JsonWriter extends javalangObject implements javaioCloseable {
            public flush(): void;

            public beginArray(): android.util.JsonWriter;

            public value(param0: javalangNumber): android.util.JsonWriter;

            public constructor(param0: javaioWriter);

            public isLenient(): boolean;

            public endObject(): android.util.JsonWriter;

            public beginObject(): android.util.JsonWriter;

            public name(param0: string): android.util.JsonWriter;

            public value(param0: boolean): android.util.JsonWriter;

            public endArray(): android.util.JsonWriter;

            public value(param0: number): android.util.JsonWriter;

            public setLenient(param0: boolean): void;

            public nullValue(): android.util.JsonWriter;

            public setIndent(param0: string): void;

            public close(): void;

            public value(param0: string): android.util.JsonWriter;
        }
    }
}

declare module android {
    export module util {
        export class LayoutDirection extends javalangObject {
            public static INHERIT: number;
            public static LOCALE: number;
            public static LTR: number;
            public static RTL: number;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module util {
        export class Log extends javalangObject {
            public static ASSERT: number;
            public static DEBUG: number;
            public static ERROR: number;
            public static INFO: number;
            public static VERBOSE: number;
            public static WARN: number;

            public static w(param0: string, param1: javalangThrowable): number;
            public static w(param0: string, param1: string, param2: javalangThrowable): number;

            public static d(param0: string, param1: string, param2: javalangThrowable): number;

            public static v(param0: string, param1: string): number;

            public static wtf(param0: string, param1: string, param2: javalangThrowable): number;

            public static w(param0: string, param1: string): number;

            public static wtf(param0: string, param1: javalangThrowable): number;

            public static i(param0: string, param1: string): number;

            public static d(param0: string, param1: string): number;

            public static getStackTraceString(param0: javalangThrowable): string;

            public static v(param0: string, param1: string, param2: javalangThrowable): number;

            public static i(param0: string, param1: string, param2: javalangThrowable): number;

            public static println(param0: number, param1: string, param2: string): number;

            public static isLoggable(param0: string, param1: number): boolean;

            public static wtf(param0: string, param1: string): number;

            public static e(param0: string, param1: string, param2: javalangThrowable): number;
            public static e(param0: string, param1: string): number;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module util {
        export class LogPrinter extends javalangObject implements android.util.Printer {
            public constructor(param0: number, param1: string);

            public println(param0: string): void;
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module util {
        export class LongSparseArray extends javalangObject implements javalangCloneable {
            public clear(): void;

            public get(param0: number, param1: javalangObject): javalangObject;

            public size(): number;

            public get(param0: number): javalangObject;

            public delete(param0: number): void;

            public put(param0: number, param1: javalangObject): void;

            public indexOfValue(param0: javalangObject): number;

            public constructor(param0: number);

            public clone(): javalangObject;
            public clone(): android.util.LongSparseArray;

            public constructor();

            public remove(param0: number): void;

            public setValueAt(param0: number, param1: javalangObject): void;

            public append(param0: number, param1: javalangObject): void;

            public keyAt(param0: number): number;

            public toString(): string;

            public removeAt(param0: number): void;

            public valueAt(param0: number): javalangObject;

            public indexOfKey(param0: number): number;
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module android {
    export module util {
        export class LruCache extends javalangObject {
            public entryRemoved(param0: boolean, param1: javalangObject, param2: javalangObject, param3: javalangObject): void;

            public size(): number;

            public create(param0: javalangObject): javalangObject;

            public putCount(): number;

            public createCount(): number;

            public constructor(param0: number);

            public remove(param0: javalangObject): javalangObject;

            public sizeOf(param0: javalangObject, param1: javalangObject): number;

            public evictAll(): void;

            public resize(param0: number): void;

            public put(param0: javalangObject, param1: javalangObject): javalangObject;

            public maxSize(): number;

            public hitCount(): number;

            public snapshot(): javautilMap;

            public toString(): string;

            public trimToSize(param0: number): void;

            public evictionCount(): number;

            public missCount(): number;

            public get(param0: javalangObject): javalangObject;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module util {
        export class MalformedJsonException extends javaioIOException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

declare module android {
    export module util {
        export class MonthDisplayHelper extends javalangObject {
            public constructor(param0: number, param1: number, param2: number);

            public getColumnOf(param0: number): number;

            public getOffset(): number;

            public isWithinCurrentMonth(param0: number, param1: number): boolean;

            public getDigitsForRow(param0: number): native.Array<number>;

            public previousMonth(): void;

            public getFirstDayOfMonth(): number;

            public getNumberOfDaysInMonth(): number;

            public getYear(): number;

            public getMonth(): number;

            public getRowOf(param0: number): number;

            public getDayAt(param0: number, param1: number): number;

            public constructor(param0: number, param1: number);

            public nextMonth(): void;

            public getWeekStartDay(): number;
        }
    }
}

declare module android {
    export module util {
        export class MutableBoolean extends javalangObject {
            public value: boolean;

            public constructor(param0: boolean);
        }
    }
}

declare module android {
    export module util {
        export class MutableByte extends javalangObject {
            public value: number;

            public constructor(param0: number);
        }
    }
}

declare module android {
    export module util {
        export class MutableChar extends javalangObject {
            public value: string;

            public constructor(param0: string);
        }
    }
}

declare module android {
    export module util {
        export class MutableDouble extends javalangObject {
            public value: number;

            public constructor(param0: number);
        }
    }
}

declare module android {
    export module util {
        export class MutableFloat extends javalangObject {
            public value: number;

            public constructor(param0: number);
        }
    }
}

declare module android {
    export module util {
        export class MutableInt extends javalangObject {
            public value: number;

            public constructor(param0: number);
        }
    }
}

declare module android {
    export module util {
        export class MutableLong extends javalangObject {
            public value: number;

            public constructor(param0: number);
        }
    }
}

declare module android {
    export module util {
        export class MutableShort extends javalangObject {
            public value: number;

            public constructor(param0: number);
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module util {
        export class NoSuchPropertyException extends javalangRuntimeException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module util {
        export class Pair extends javalangObject {
            public first: javalangObject;
            public second: javalangObject;

            public equals(param0: javalangObject): boolean;

            public static create(param0: javalangObject, param1: javalangObject): android.util.Pair;

            public constructor(param0: javalangObject, param1: javalangObject);

            public hashCode(): number;
        }
    }
}

/// <reference path="./java.util.regex.Matcher.d.ts" />
/// <reference path="./java.util.regex.Pattern.d.ts" />
declare module android {
    export module util {
        export class Patterns extends javalangObject {
            public static DOMAIN_NAME: javautilregexPattern;
            public static EMAIL_ADDRESS: javautilregexPattern;
            public static GOOD_IRI_CHAR: string;
            public static IP_ADDRESS: javautilregexPattern;
            public static PHONE: javautilregexPattern;
            public static TOP_LEVEL_DOMAIN: javautilregexPattern;
            public static TOP_LEVEL_DOMAIN_STR: string;
            public static TOP_LEVEL_DOMAIN_STR_FOR_WEB_URL: string;
            public static WEB_URL: javautilregexPattern;

            public static concatGroups(param0: javautilregexMatcher): string;

            public static digitsAndPlusOnly(param0: javautilregexMatcher): string;
        }
    }
}

/// <reference path="./java.io.PrintStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module util {
        export class PrintStreamPrinter extends javalangObject implements android.util.Printer {
            public println(param0: string): void;

            public constructor(param0: javaioPrintStream);
        }
    }
}

/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module util {
        export class PrintWriterPrinter extends javalangObject implements android.util.Printer {
            public constructor(param0: javaioPrintWriter);

            public println(param0: string): void;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module util {
        export class Printer extends javalangObject {
            /**
             * Constructs a new instance of the android.util.Printer interface with the provided implementation.
             */
            public constructor(implementation: {
                println(param0: string): void;
            });

            public println(param0: string): void;
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module util {
        export abstract class Property extends javalangObject {
            public isReadOnly(): boolean;

            public set(param0: javalangObject, param1: javalangObject): void;

            public static of(param0: javalangClass, param1: javalangClass, param2: string): android.util.Property;

            public getName(): string;

            public getType(): javalangClass;

            public constructor(param0: javalangClass, param1: string);

            public get(param0: javalangObject): javalangObject;
        }
    }
}

import javalangComparable = java.lang.Comparable;
/// <reference path="./java.lang.Comparable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module util {
        export class Range extends javalangObject {
            public contains(param0: android.util.Range): boolean;

            public static create(param0: javalangComparable, param1: javalangComparable): android.util.Range;

            public extend(param0: android.util.Range): android.util.Range;

            public getUpper(): javalangComparable;

            public equals(param0: javalangObject): boolean;

            public getLower(): javalangComparable;

            public intersect(param0: android.util.Range): android.util.Range;

            public extend(param0: javalangComparable): android.util.Range;
            public extend(param0: javalangComparable, param1: javalangComparable): android.util.Range;

            public toString(): string;

            public contains(param0: javalangComparable): boolean;

            public intersect(param0: javalangComparable, param1: javalangComparable): android.util.Range;

            public clamp(param0: javalangComparable): javalangComparable;

            public constructor(param0: javalangComparable, param1: javalangComparable);

            public hashCode(): number;
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module util {
        export class Rational extends javalangNumber {
            public static NEGATIVE_INFINITY: android.util.Rational;
            public static NaN: android.util.Rational;
            public static POSITIVE_INFINITY: android.util.Rational;
            public static ZERO: android.util.Rational;

            public equals(param0: javalangObject): boolean;

            public constructor();

            public getNumerator(): number;

            public shortValue(): number;

            public doubleValue(): number;

            public floatValue(): number;

            public isNaN(): boolean;

            public intValue(): number;

            public toString(): string;

            public isFinite(): boolean;

            public compareTo(param0: android.util.Rational): number;

            public static parseRational(param0: string): android.util.Rational;

            public getDenominator(): number;

            public isZero(): boolean;

            public isInfinite(): boolean;

            public constructor(param0: number, param1: number);

            public hashCode(): number;

            public longValue(): number;
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module util {
        export class Size extends javalangObject {
            public toString(): string;

            public getHeight(): number;

            public equals(param0: javalangObject): boolean;

            public getWidth(): number;

            public static parseSize(param0: string): android.util.Size;

            public constructor(param0: number, param1: number);

            public hashCode(): number;
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module util {
        export class SizeF extends javalangObject {
            public toString(): string;

            public getHeight(): number;

            public equals(param0: javalangObject): boolean;

            public getWidth(): number;

            public static parseSizeF(param0: string): android.util.SizeF;

            public constructor(param0: number, param1: number);

            public hashCode(): number;
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module util {
        export class SparseArray extends javalangObject implements javalangCloneable {
            public clear(): void;

            public get(param0: number, param1: javalangObject): javalangObject;

            public size(): number;

            public get(param0: number): javalangObject;

            public delete(param0: number): void;

            public put(param0: number, param1: javalangObject): void;

            public indexOfValue(param0: javalangObject): number;

            public constructor(param0: number);

            public clone(): javalangObject;

            public constructor();

            public remove(param0: number): void;

            public setValueAt(param0: number, param1: javalangObject): void;

            public append(param0: number, param1: javalangObject): void;

            public keyAt(param0: number): number;

            public toString(): string;

            public clone(): android.util.SparseArray;

            public removeAtRange(param0: number, param1: number): void;

            public removeAt(param0: number): void;

            public valueAt(param0: number): javalangObject;

            public indexOfKey(param0: number): number;
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module util {
        export class SparseBooleanArray extends javalangObject implements javalangCloneable {
            public clear(): void;

            public size(): number;

            public delete(param0: number): void;

            public append(param0: number, param1: boolean): void;

            public constructor(param0: number);

            public clone(): javalangObject;

            public constructor();

            public clone(): android.util.SparseBooleanArray;

            public get(param0: number, param1: boolean): boolean;

            public keyAt(param0: number): number;

            public toString(): string;

            public get(param0: number): boolean;

            public put(param0: number, param1: boolean): void;

            public valueAt(param0: number): boolean;

            public indexOfValue(param0: boolean): number;

            public indexOfKey(param0: number): number;
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module util {
        export class SparseIntArray extends javalangObject implements javalangCloneable {
            public clear(): void;

            public put(param0: number, param1: number): void;

            public size(): number;

            public valueAt(param0: number): number;

            public delete(param0: number): void;

            public append(param0: number, param1: number): void;

            public constructor(param0: number);

            public clone(): javalangObject;

            public constructor();

            public clone(): android.util.SparseIntArray;

            public keyAt(param0: number): number;

            public toString(): string;

            public indexOfValue(param0: number): number;

            public removeAt(param0: number): void;

            public get(param0: number): number;

            public indexOfKey(param0: number): number;

            public get(param0: number, param1: number): number;
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module util {
        export class SparseLongArray extends javalangObject implements javalangCloneable {
            public clear(): void;

            public put(param0: number, param1: number): void;

            public size(): number;

            public valueAt(param0: number): number;

            public delete(param0: number): void;

            public append(param0: number, param1: number): void;

            public constructor(param0: number);

            public clone(): javalangObject;

            public constructor();

            public keyAt(param0: number): number;

            public clone(): android.util.SparseLongArray;

            public toString(): string;

            public indexOfValue(param0: number): number;

            public removeAt(param0: number): void;

            public get(param0: number): number;

            public indexOfKey(param0: number): number;

            public get(param0: number, param1: number): number;
        }
    }
}

declare module android {
    export module util {
        export class StateSet extends javalangObject {
            public static NOTHING: native.Array<number>;
            public static WILD_CARD: native.Array<number>;

            public static isWildCard(param0: native.Array<number>): boolean;

            public static stateSetMatches(param0: native.Array<number>, param1: number): boolean;

            public static trimStateSet(param0: native.Array<number>, param1: number): native.Array<number>;

            public static dump(param0: native.Array<number>): string;

            public static stateSetMatches(param0: native.Array<number>, param1: native.Array<number>): boolean;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuilder.d.ts" />
declare module android {
    export module util {
        export class StringBuilderPrinter extends javalangObject implements android.util.Printer {
            public println(param0: string): void;

            public constructor(param0: javalangStringBuilder);
        }
    }
}

declare module android {
    export module util {
        export class TimeFormatException extends javalangRuntimeException {
        }
    }
}

import javautilTimeZone = java.util.TimeZone;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.TimeZone.d.ts" />
declare module android {
    export module util {
        export class TimeUtils extends javalangObject {
            public static getTimeZone(param0: number, param1: boolean, param2: number, param3: string): javautilTimeZone;

            public static getTimeZoneDatabaseVersion(): string;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module util {
        export class TimingLogger extends javalangObject {
            public constructor(param0: string, param1: string);

            public reset(param0: string, param1: string): void;

            public dumpToLog(): void;

            public reset(): void;

            public addSplit(param0: string): void;
        }
    }
}

/// <reference path="./android.util.DisplayMetrics.d.ts" />
declare module android {
    export module util {
        export class TypedValue extends javalangObject {
            public static COMPLEX_MANTISSA_MASK: number;
            public static COMPLEX_MANTISSA_SHIFT: number;
            public static COMPLEX_RADIX_0p23: number;
            public static COMPLEX_RADIX_16p7: number;
            public static COMPLEX_RADIX_23p0: number;
            public static COMPLEX_RADIX_8p15: number;
            public static COMPLEX_RADIX_MASK: number;
            public static COMPLEX_RADIX_SHIFT: number;
            public static COMPLEX_UNIT_DIP: number;
            public static COMPLEX_UNIT_FRACTION: number;
            public static COMPLEX_UNIT_FRACTION_PARENT: number;
            public static COMPLEX_UNIT_IN: number;
            public static COMPLEX_UNIT_MASK: number;
            public static COMPLEX_UNIT_MM: number;
            public static COMPLEX_UNIT_PT: number;
            public static COMPLEX_UNIT_PX: number;
            public static COMPLEX_UNIT_SHIFT: number;
            public static COMPLEX_UNIT_SP: number;
            public static DATA_NULL_EMPTY: number;
            public static DATA_NULL_UNDEFINED: number;
            public static DENSITY_DEFAULT: number;
            public static DENSITY_NONE: number;
            public static TYPE_ATTRIBUTE: number;
            public static TYPE_DIMENSION: number;
            public static TYPE_FIRST_COLOR_INT: number;
            public static TYPE_FIRST_INT: number;
            public static TYPE_FLOAT: number;
            public static TYPE_FRACTION: number;
            public static TYPE_INT_BOOLEAN: number;
            public static TYPE_INT_COLOR_ARGB4: number;
            public static TYPE_INT_COLOR_ARGB8: number;
            public static TYPE_INT_COLOR_RGB4: number;
            public static TYPE_INT_COLOR_RGB8: number;
            public static TYPE_INT_DEC: number;
            public static TYPE_INT_HEX: number;
            public static TYPE_LAST_COLOR_INT: number;
            public static TYPE_LAST_INT: number;
            public static TYPE_NULL: number;
            public static TYPE_REFERENCE: number;
            public static TYPE_STRING: number;
            public assetCookie: number;
            public changingConfigurations: number;
            public data: number;
            public density: number;
            public resourceId: number;
            public string: string;
            public type: number;

            public static applyDimension(param0: number, param1: number, param2: android.util.DisplayMetrics): number;

            public static complexToDimension(param0: number, param1: android.util.DisplayMetrics): number;

            public static complexToDimensionPixelOffset(param0: number, param1: android.util.DisplayMetrics): number;

            public constructor();

            public setTo(param0: android.util.TypedValue): void;

            public getDimension(param0: android.util.DisplayMetrics): number;

            public getFraction(param0: number, param1: number): number;

            public coerceToString(): string;

            public toString(): string;

            public static complexToFloat(param0: number): number;

            public static complexToDimensionPixelSize(param0: number, param1: android.util.DisplayMetrics): number;

            public static coerceToString(param0: number, param1: number): string;

            public getComplexUnit(): number;

            public static complexToFraction(param0: number, param1: number, param2: number): number;

            public getFloat(): number;
        }
    }
}

/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.ContentHandler.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlSerializer.d.ts" />
declare module android {
    export module util {
        export class Xml extends javalangObject {
            public static FEATURE_RELAXED: string;

            public static parse(param0: javaioReader, param1: orgxmlsaxContentHandler): void;

            public static asAttributeSet(param0: orgxmlpullv1XmlPullParser): android.util.AttributeSet;

            public static findEncodingByName(param0: string): android.util.Xml.Encoding;

            public static newSerializer(): orgxmlpullv1XmlSerializer;

            public static parse(param0: javaioInputStream, param1: android.util.Xml.Encoding, param2: orgxmlsaxContentHandler): void;

            public static newPullParser(): orgxmlpullv1XmlPullParser;

            public static parse(param0: string, param1: orgxmlsaxContentHandler): void;
        }
        export module Xml {
            export class Encoding extends javalangEnum {
                public static ISO_8859_1: android.util.Xml.Encoding;
                public static US_ASCII: android.util.Xml.Encoding;
                public static UTF_16: android.util.Xml.Encoding;
                public static UTF_8: android.util.Xml.Encoding;

                public static valueOf(param0: string): android.util.Xml.Encoding;

                public static values(): native.Array<android.util.Xml.Encoding>;

                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
        }
    }
}

