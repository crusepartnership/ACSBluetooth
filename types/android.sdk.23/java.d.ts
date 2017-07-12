declare module java {
    export module lang {
        export class Object {
            public wait(): void;
            public wait(param0: number): void;

            public toString(): string;

            public notify(): void;

            public constructor();

            public equals(param0: java.lang.Object): boolean;

            public clone(): java.lang.Object;

            public wait(param0: number, param1: number): void;

            public finalize(): void;

            public getClass(): any;

            public hashCode(): number;

            public notifyAll(): void;
        }
    }
}

declare module java {
    export module util {
        export class UUID extends java.lang.Object {
            public clockSequence(): number;

            public version(): number;

            public node(): number;

            public static nameUUIDFromBytes(param0: native.Array<number>): java.util.UUID;

            public getMostSignificantBits(): number;

            public static randomUUID(): java.util.UUID;

            public equals(param0: java.lang.Object): boolean;

            public toString(): string;

            public timestamp(): number;

            public variant(): number;

            public getLeastSignificantBits(): number;

            public compareTo(param0: java.util.UUID): number;

            public constructor(param0: number, param1: number);

            public static fromString(param0: string): java.util.UUID;

            public hashCode(): number;
        }
    }
}
declare module java {
    export module util {
        export class Collection extends java.lang.Object {
            /**
             * Constructs a new instance of the java.util.Collection interface with the provided implementation.
             */
            public constructor(implementation: {
                add(param0: java.lang.Object): boolean;
                addAll(param0: java.util.Collection): boolean;
                clear(): void;
                contains(param0: java.lang.Object): boolean;
                containsAll(param0: java.util.Collection): boolean;
                equals(param0: java.lang.Object): boolean;
                hashCode(): number;
                isEmpty(): boolean;
                iterator(): any;
                remove(param0: java.lang.Object): boolean;
                removeAll(param0: java.util.Collection): boolean;
                retainAll(param0: java.util.Collection): boolean;
                size(): number;
                toArray(): native.Array<java.lang.Object>;
                toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
                iterator(): any;
            });

            public clear(): void;

            public toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;

            public remove(param0: java.lang.Object): boolean;

            public removeAll(param0: java.util.Collection): boolean;

            public isEmpty(): boolean;

            public size(): number;

            public containsAll(param0: java.util.Collection): boolean;

            public addAll(param0: java.util.Collection): boolean;

            public add(param0: java.lang.Object): boolean;

            public equals(param0: java.lang.Object): boolean;

            public toArray(): native.Array<java.lang.Object>;

            public retainAll(param0: java.util.Collection): boolean;

            public contains(param0: java.lang.Object): boolean;

            public iterator(): any;

            public hashCode(): number;
        }
    }
}



declare module java {
    export module awt {
        export module font {
            export class NumericShaper extends java.lang.Object  {
                public static ALL_RANGES: number;
                public static ARABIC: number;
                public static BENGALI: number;
                public static DEVANAGARI: number;
                public static EASTERN_ARABIC: number;
                public static ETHIOPIC: number;
                public static EUROPEAN: number;
                public static GUJARATI: number;
                public static GURMUKHI: number;
                public static KANNADA: number;
                public static KHMER: number;
                public static LAO: number;
                public static MALAYALAM: number;
                public static MONGOLIAN: number;
                public static MYANMAR: number;
                public static ORIYA: number;
                public static TAMIL: number;
                public static TELUGU: number;
                public static THAI: number;
                public static TIBETAN: number;

                public shape(param0: native.Array<string>, param1: number, param2: number, param3: number): void;

                public static getContextualShaper(param0: number): java.awt.font.NumericShaper;

                public equals(param0: java.lang.Object): boolean;

                public shape(param0: native.Array<string>, param1: number, param2: number): void;

                public static getContextualShaper(param0: number, param1: number): java.awt.font.NumericShaper;

                public static getShaper(param0: number): java.awt.font.NumericShaper;

                public hashCode(): number;

                public getRanges(): number;

                public toString(): string;

                public isContextual(): boolean;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module java {
    export module util {
        export class ListIterator extends java.lang.Object {
            /**
             * Constructs a new instance of the java.util.ListIterator interface with the provided implementation.
             */
            public constructor(implementation: {
                add(param0: java.lang.Object): void;
                hasNext(): boolean;
                hasPrevious(): boolean;
                next(): java.lang.Object;
                nextIndex(): number;
                previous(): java.lang.Object;
                previousIndex(): number;
                remove(): void;
                set(param0: java.lang.Object): void;
            });

            public next(): java.lang.Object;

            public set(param0: java.lang.Object): void;

            public previous(): java.lang.Object;

            public hasPrevious(): boolean;

            public previousIndex(): number;

            public add(param0: java.lang.Object): void;

            public hasNext(): boolean;

            public nextIndex(): number;

            public remove(): void;
        }
    }
}
declare module java {
    export module util {
        export class Set extends java.lang.Object implements java.util.Collection {
            /**
             * Constructs a new instance of the java.util.Set interface with the provided implementation.
             */
            public constructor(implementation: {
                add(param0: java.lang.Object): boolean;
                addAll(param0: java.util.Collection): boolean;
                clear(): void;
                contains(param0: java.lang.Object): boolean;
                containsAll(param0: java.util.Collection): boolean;
                equals(param0: java.lang.Object): boolean;
                hashCode(): number;
                isEmpty(): boolean;
                iterator(): any;
                remove(param0: java.lang.Object): boolean;
                removeAll(param0: java.util.Collection): boolean;
                retainAll(param0: java.util.Collection): boolean;
                size(): number;
                toArray(): native.Array<java.lang.Object>;
                toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
                add(param0: java.lang.Object): boolean;
                addAll(param0: java.util.Collection): boolean;
                clear(): void;
                contains(param0: java.lang.Object): boolean;
                containsAll(param0: java.util.Collection): boolean;
                equals(param0: java.lang.Object): boolean;
                hashCode(): number;
                isEmpty(): boolean;
                iterator(): any;
                remove(param0: java.lang.Object): boolean;
                removeAll(param0: java.util.Collection): boolean;
                retainAll(param0: java.util.Collection): boolean;
                size(): number;
                toArray(): native.Array<java.lang.Object>;
                toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
                iterator(): any;
            });

            public clear(): void;

            public toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;

            public remove(param0: java.lang.Object): boolean;

            public removeAll(param0: java.util.Collection): boolean;

            public isEmpty(): boolean;

            public size(): number;

            public containsAll(param0: java.util.Collection): boolean;

            public addAll(param0: java.util.Collection): boolean;

            public add(param0: java.lang.Object): boolean;

            public equals(param0: java.lang.Object): boolean;

            public toArray(): native.Array<java.lang.Object>;

            public retainAll(param0: java.util.Collection): boolean;

            public contains(param0: java.lang.Object): boolean;

            public iterator(): any;

            public hashCode(): number;
        }
    }
}

declare module java {
    export module io {
        export class FileInputStream {
            public getFD(): any;

            public read(param0: native.Array<number>, param1: number, param2: number): number;

            public constructor();

            public available(): number;

            public read(): number;

            public getChannel(): any;

            public read(param0: native.Array<number>): number;

            public constructor(param0: any);

            public skip(param0: number): number;

            public constructor(param0: any);

            public close(): void;

            public constructor(param0: string);

            public finalize(): void;
        }
    }
}

declare module java {
    export module io {
        export class FileOutputStream {
            public flush(): void;

            public getFD(): any;

            public constructor();
            public constructor(param0: any, param1: boolean);

            public getChannel(): any;

            public write(param0: number): void;

            public constructor(param0: any);
            public constructor(param0: any);
            public constructor(param0: string, param1: boolean);

            public write(param0: native.Array<number>, param1: number, param2: number): void;
            public write(param0: native.Array<number>): void;

            public close(): void;

            public constructor(param0: string);

            public finalize(): void;
        }
    }
}

