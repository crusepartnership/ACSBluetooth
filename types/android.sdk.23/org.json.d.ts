
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
/// <reference path="./org.json.JSONTokener.d.ts" />
declare module org {
    export module json {
        export class JSONArray extends javalangObject {
            public equals(param0: javalangObject): boolean;

            public constructor(param0: javalangObject);

            public put(param0: number, param1: boolean): org.json.JSONArray;

            public getJSONArray(param0: number): org.json.JSONArray;

            public put(param0: number, param1: number): org.json.JSONArray;

            public toJSONObject(param0: org.json.JSONArray): org.json.JSONObject;

            public constructor(param0: javautilCollection);

            public put(param0: boolean): org.json.JSONArray;

            public constructor(param0: string);

            public isNull(param0: number): boolean;

            public opt(param0: number): javalangObject;

            public optLong(param0: number, param1: number): number;

            public optString(param0: number): string;
            public optString(param0: number, param1: string): string;

            public getDouble(param0: number): number;

            public get(param0: number): javalangObject;

            public getString(param0: number): string;

            public length(): number;

            public optInt(param0: number): number;

            public constructor();

            public put(param0: javalangObject): org.json.JSONArray;

            public optDouble(param0: number, param1: number): number;

            public optJSONArray(param0: number): org.json.JSONArray;

            public optDouble(param0: number): number;

            public constructor(param0: org.json.JSONTokener);

            public remove(param0: number): javalangObject;

            public getJSONObject(param0: number): org.json.JSONObject;

            public optJSONObject(param0: number): org.json.JSONObject;

            public put(param0: number, param1: javalangObject): org.json.JSONArray;

            public optLong(param0: number): number;

            public toString(): string;

            public getLong(param0: number): number;

            public join(param0: string): string;

            public optBoolean(param0: number): boolean;
            public optBoolean(param0: number, param1: boolean): boolean;

            public toString(param0: number): string;

            public put(param0: number): org.json.JSONArray;

            public optInt(param0: number, param1: number): number;

            public getBoolean(param0: number): boolean;

            public getInt(param0: number): number;

            public hashCode(): number;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module org {
    export module json {
        export class JSONException extends javalangException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
/// <reference path="./org.json.JSONTokener.d.ts" />
declare module org {
    export module json {
        export class JSONObject extends javalangObject {
            public static NULL: javalangObject;

            public static quote(param0: string): string;

            public put(param0: string, param1: number): org.json.JSONObject;

            public keys(): javautilIterator;

            public isNull(param0: string): boolean;

            public getBoolean(param0: string): boolean;

            public static numberToString(param0: javalangNumber): string;

            public constructor(param0: javautilMap);

            public optJSONObject(param0: string): org.json.JSONObject;

            public getJSONObject(param0: string): org.json.JSONObject;

            public optDouble(param0: string, param1: number): number;

            public optBoolean(param0: string): boolean;

            public accumulate(param0: string, param1: javalangObject): org.json.JSONObject;

            public optInt(param0: string): number;

            public getJSONArray(param0: string): org.json.JSONArray;

            public toJSONArray(param0: org.json.JSONArray): org.json.JSONArray;

            public constructor(param0: string);

            public optLong(param0: string, param1: number): number;

            public getLong(param0: string): number;

            public getInt(param0: string): number;

            public optBoolean(param0: string, param1: boolean): boolean;

            public length(): number;

            public remove(param0: string): javalangObject;

            public optLong(param0: string): number;

            public optJSONArray(param0: string): org.json.JSONArray;

            public opt(param0: string): javalangObject;

            public getString(param0: string): string;

            public constructor();
            public constructor(param0: org.json.JSONTokener);

            public optDouble(param0: string): number;

            public put(param0: string, param1: javalangObject): org.json.JSONObject;

            public toString(): string;

            public put(param0: string, param1: boolean): org.json.JSONObject;

            public getDouble(param0: string): number;

            public optString(param0: string): string;
            public optString(param0: string, param1: string): string;

            public putOpt(param0: string, param1: javalangObject): org.json.JSONObject;

            public optInt(param0: string, param1: number): number;

            public toString(param0: number): string;

            public names(): org.json.JSONArray;

            public static wrap(param0: javalangObject): javalangObject;

            public constructor(param0: org.json.JSONObject, param1: native.Array<string>);

            public has(param0: string): boolean;

            public get(param0: string): javalangObject;
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module org {
    export module json {
        export class JSONStringer extends javalangObject {
            public value(param0: number): org.json.JSONStringer;
            public value(param0: boolean): org.json.JSONStringer;

            public key(param0: string): org.json.JSONStringer;

            public toString(): string;

            public object(): org.json.JSONStringer;

            public array(): org.json.JSONStringer;

            public value(param0: javalangObject): org.json.JSONStringer;

            public constructor();

            public endArray(): org.json.JSONStringer;

            public endObject(): org.json.JSONStringer;
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONException.d.ts" />
declare module org {
    export module json {
        export class JSONTokener extends javalangObject {
            public skipTo(param0: string): string;

            public next(param0: string): string;

            public static dehexchar(param0: string): number;

            public syntaxError(param0: string): org.json.JSONException;

            public next(): string;

            public nextTo(param0: string): string;

            public more(): boolean;

            public nextClean(): string;

            public nextString(param0: string): string;

            public toString(): string;

            public back(): void;

            public nextValue(): javalangObject;

            public skipPast(param0: string): void;

            public constructor(param0: string);

            public next(param0: number): string;
        }
    }
}
