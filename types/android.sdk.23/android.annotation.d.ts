import javalangannotationAnnotation = java.lang.annotation.Annotation;
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module annotation {
        export class SuppressLint extends javalangObject implements javalangannotationAnnotation {
            /**
             * Constructs a new instance of the android.annotation.SuppressLint interface with the provided implementation.
             */
            public constructor(implementation: {
                value(): native.Array<string>;
                annotationType(): javalangClass;
                equals(param0: javalangObject): boolean;
                hashCode(): number;
                toString(): string;
            });

            public toString(): string;

            public equals(param0: javalangObject): boolean;

            public value(): native.Array<string>;

            public annotationType(): javalangClass;

            public hashCode(): number;
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module annotation {
        export class TargetApi extends javalangObject implements javalangannotationAnnotation {
            /**
             * Constructs a new instance of the android.annotation.TargetApi interface with the provided implementation.
             */
            public constructor(implementation: {
                value(): number;
                annotationType(): javalangClass;
                equals(param0: javalangObject): boolean;
                hashCode(): number;
                toString(): string;
            });

            public toString(): string;

            public equals(param0: javalangObject): boolean;

            public annotationType(): javalangClass;

            public value(): number;

            public hashCode(): number;
        }
    }
}

