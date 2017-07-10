
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module junit {
    export module framework {
        export class Assert extends javalangObject {
            public static assertNotSame(param0: string, param1: javalangObject, param2: javalangObject): void;

            public static failNotSame(param0: string, param1: javalangObject, param2: javalangObject): void;

            public static failNotEquals(param0: string, param1: javalangObject, param2: javalangObject): void;

            public static fail(param0: string): void;

            public static assertFalse(param0: boolean): void;

            public static assertNull(param0: javalangObject): void;

            public static assertFalse(param0: string, param1: boolean): void;

            public static assertEquals(param0: javalangObject, param1: javalangObject): void;

            public static assertTrue(param0: boolean): void;

            public static assertEquals(param0: string, param1: number, param2: number): void;

            public static format(param0: string, param1: javalangObject, param2: javalangObject): string;

            public static assertNull(param0: string, param1: javalangObject): void;

            public static assertSame(param0: string, param1: javalangObject, param2: javalangObject): void;

            public static failSame(param0: string): void;

            public static assertTrue(param0: string, param1: boolean): void;

            public static assertNotNull(param0: javalangObject): void;

            public static assertNotSame(param0: javalangObject, param1: javalangObject): void;

            public static assertEquals(param0: number, param1: number): void;
            public static assertEquals(param0: boolean, param1: boolean): void;
            public static assertEquals(param0: string, param1: string, param2: string): void;

            public constructor();

            public static assertEquals(param0: number, param1: number, param2: number): void;
            public static assertEquals(param0: string, param1: boolean, param2: boolean): void;

            public static fail(): void;

            public static assertEquals(param0: string, param1: string): void;

            public static assertNotNull(param0: string, param1: javalangObject): void;

            public static assertSame(param0: javalangObject, param1: javalangObject): void;

            public static assertEquals(param0: string, param1: javalangObject, param2: javalangObject): void;
            public static assertEquals(param0: string, param1: number, param2: number, param3: number): void;
        }
    }
}

import javalangAssertionError = java.lang.AssertionError;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module junit {
    export module framework {
        export class AssertionFailedError extends javalangAssertionError {
            public constructor(param0: boolean);
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor(param0: number);
            public constructor(param0: javalangObject);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module junit {
    export module framework {
        export class ComparisonFailure extends junit.framework.AssertionFailedError {
            public getMessage(): string;

            public constructor(param0: boolean);
            public constructor(param0: javalangThrowable);

            public getActual(): string;

            public constructor(param0: string, param1: javalangThrowable);
            public constructor(param0: number);
            public constructor(param0: string, param1: string, param2: string);
            public constructor();
            public constructor(param0: javalangObject);

            public getExpected(): string;

            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

declare module junit {
    export module framework {
        export class Protectable extends javalangObject {
            /**
             * Constructs a new instance of the junit.framework.Protectable interface with the provided implementation.
             */
            public constructor(implementation: {
                protect(): void;
            });

            public protect(): void;
        }
    }
}

/// <reference path="./junit.framework.TestResult.d.ts" />
declare module junit {
    export module framework {
        export class Test extends javalangObject {
            /**
             * Constructs a new instance of the junit.framework.Test interface with the provided implementation.
             */
            public constructor(implementation: {
                countTestCases(): number;
                run(param0: junit.framework.TestResult): void;
            });

            public countTestCases(): number;

            public run(param0: junit.framework.TestResult): void;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./junit.framework.TestResult.d.ts" />
declare module junit {
    export module framework {
        export abstract class TestCase extends junit.framework.Assert implements junit.framework.Test {
            public countTestCases(): number;

            public run(): junit.framework.TestResult;

            public constructor();

            public runBare(): void;

            public createResult(): junit.framework.TestResult;

            public toString(): string;

            public setUp(): void;

            public tearDown(): void;

            public getName(): string;

            public run(param0: junit.framework.TestResult): void;

            public runTest(): void;

            public constructor(param0: string);

            public setName(param0: string): void;
        }
    }
}

/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./junit.framework.Test.d.ts" />
declare module junit {
    export module framework {
        export class TestFailure extends javalangObject {
            public fFailedTest: junit.framework.Test;
            public fThrownException: javalangThrowable;

            public toString(): string;

            public thrownException(): javalangThrowable;

            public trace(): string;

            public constructor(param0: junit.framework.Test, param1: javalangThrowable);

            public failedTest(): junit.framework.Test;

            public isFailure(): boolean;

            public exceptionMessage(): string;
        }
    }
}

/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./junit.framework.AssertionFailedError.d.ts" />
/// <reference path="./junit.framework.Test.d.ts" />
declare module junit {
    export module framework {
        export class TestListener extends javalangObject {
            /**
             * Constructs a new instance of the junit.framework.TestListener interface with the provided implementation.
             */
            public constructor(implementation: {
                addError(param0: junit.framework.Test, param1: javalangThrowable): void;
                addFailure(param0: junit.framework.Test, param1: junit.framework.AssertionFailedError): void;
                endTest(param0: junit.framework.Test): void;
                startTest(param0: junit.framework.Test): void;
            });

            public endTest(param0: junit.framework.Test): void;

            public startTest(param0: junit.framework.Test): void;

            public addFailure(param0: junit.framework.Test, param1: junit.framework.AssertionFailedError): void;

            public addError(param0: junit.framework.Test, param1: javalangThrowable): void;
        }
    }
}

import javautilVector = java.util.Vector;
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />
/// <reference path="./java.util.Vector.d.ts" />
/// <reference path="./junit.framework.AssertionFailedError.d.ts" />
/// <reference path="./junit.framework.Protectable.d.ts" />
/// <reference path="./junit.framework.Test.d.ts" />
/// <reference path="./junit.framework.TestCase.d.ts" />
/// <reference path="./junit.framework.TestListener.d.ts" />
declare module junit {
    export module framework {
        export class TestResult extends javalangObject {
            public fErrors: javautilVector;
            public fFailures: javautilVector;
            public fListeners: javautilVector;
            public fRunTests: number;

            public endTest(param0: junit.framework.Test): void;

            public startTest(param0: junit.framework.Test): void;

            public failures(): javautilEnumeration;

            public addFailure(param0: junit.framework.Test, param1: junit.framework.AssertionFailedError): void;

            public wasSuccessful(): boolean;

            public removeListener(param0: junit.framework.TestListener): void;

            public errorCount(): number;

            public constructor();

            public addError(param0: junit.framework.Test, param1: javalangThrowable): void;

            public runCount(): number;

            public run(param0: junit.framework.TestCase): void;

            public failureCount(): number;

            public stop(): void;

            public shouldStop(): boolean;

            public addListener(param0: junit.framework.TestListener): void;

            public errors(): javautilEnumeration;

            public runProtected(param0: junit.framework.Test, param1: junit.framework.Protectable): void;
        }
    }
}

import javalangreflectConstructor = java.lang.reflect.Constructor;
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.reflect.Constructor.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />
/// <reference path="./junit.framework.Test.d.ts" />
/// <reference path="./junit.framework.TestResult.d.ts" />
declare module junit {
    export module framework {
        export class TestSuite extends javalangObject implements junit.framework.Test {
            public constructor(param0: native.Array<javalangClass>);

            public testAt(param0: number): junit.framework.Test;

            public addTestSuite(param0: javalangClass): void;

            public countTestCases(): number;

            public tests(): javautilEnumeration;

            public addTest(param0: junit.framework.Test): void;

            public constructor();

            public runTest(param0: junit.framework.Test, param1: junit.framework.TestResult): void;

            public constructor(param0: native.Array<javalangClass>, param1: string);

            public static warning(param0: string): junit.framework.Test;

            public static getTestConstructor(param0: javalangClass): javalangreflectConstructor;

            public toString(): string;

            public getName(): string;

            public testCount(): number;

            public constructor(param0: javalangClass, param1: string);
            public constructor(param0: javalangClass);

            public run(param0: junit.framework.TestResult): void;

            public constructor(param0: string);

            public static createTest(param0: javalangClass, param1: string): junit.framework.Test;

            public setName(param0: string): void;
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.Properties.d.ts" />
/// <reference path="./junit.framework.AssertionFailedError.d.ts" />
/// <reference path="./junit.framework.Test.d.ts" />
/// <reference path="./junit.runner.TestSuiteLoader.d.ts" />
declare module junit {
    export module runner {
        export abstract class BaseTestRunner extends javalangObject implements junit.framework.TestListener {
            public static SUITE_METHODNAME: string;

            public startTest(param0: junit.framework.Test): void;

            public static getFilteredTrace(param0: string): string;

            public runFailed(param0: string): void;

            public static getPreference(param0: string): string;

            public static showStackRaw(): boolean;

            public addError(param0: junit.framework.Test, param1: javalangThrowable): void;

            public getTest(param0: string): junit.framework.Test;

            public processArguments(param0: native.Array<string>): string;

            public useReloadingTestSuiteLoader(): boolean;

            public static getPreference(param0: string, param1: number): number;

            public getLoader(): junit.runner.TestSuiteLoader;

            public static inVAJava(): boolean;

            public static savePreferences(): void;

            public testStarted(param0: string): void;

            public clearStatus(): void;

            public static setPreferences(param0: javautilProperties): void;

            public endTest(param0: junit.framework.Test): void;

            public testEnded(param0: string): void;

            public static getFilteredTrace(param0: javalangThrowable): string;

            public addFailure(param0: junit.framework.Test, param1: junit.framework.AssertionFailedError): void;

            public elapsedTimeAsString(param0: number): string;

            public static truncate(param0: string): string;

            public extractClassName(param0: string): string;

            public constructor();

            public static getPreferences(): javautilProperties;

            public setPreference(param0: string, param1: string): void;

            public loadSuiteClass(param0: string): javalangClass;

            public testFailed(param0: number, param1: junit.framework.Test, param2: javalangThrowable): void;

            public setLoading(param0: boolean): void;
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module junit {
    export module runner {
        export class TestSuiteLoader extends javalangObject {
            /**
             * Constructs a new instance of the junit.runner.TestSuiteLoader interface with the provided implementation.
             */
            public constructor(implementation: {
                load(param0: string): javalangClass;
                reload(param0: javalangClass): javalangClass;
            });

            public load(param0: string): javalangClass;

            public reload(param0: javalangClass): javalangClass;
        }
    }
}

declare module junit {
    export module runner {
        export class Version extends javalangObject {
            public static id(): string;
        }
    }
}
