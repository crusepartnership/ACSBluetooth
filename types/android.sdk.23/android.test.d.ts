
import junitframeworkTestResult = junit.framework.TestResult;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./junit.framework.TestResult.d.ts" />
declare module android {
    export module test {
        export abstract class ActivityInstrumentationTestCase extends android.test.ActivityTestCase {
            public run(param0: junitframeworkTestResult): void;

            public constructor(param0: string, param1: javalangClass);

            public countTestCases(): number;

            public setUp(): void;

            public tearDown(): void;

            public testActivityTestCaseSetUpProperly(): void;

            public run(): junitframeworkTestResult;

            public constructor(param0: string, param1: javalangClass, param2: boolean);

            public getActivity(): android.app.Activity;

            public constructor();
            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./junit.framework.TestResult.d.ts" />
declare module android {
    export module test {
        export abstract class ActivityInstrumentationTestCase2 extends android.test.ActivityTestCase {
            public countTestCases(): number;

            public constructor();

            public setActivityInitialTouchMode(param0: boolean): void;

            public run(param0: junitframeworkTestResult): void;

            public constructor(param0: string, param1: javalangClass);

            public setActivityIntent(param0: android.content.Intent): void;

            public setUp(): void;

            public tearDown(): void;

            public run(): junitframeworkTestResult;

            public constructor(param0: javalangClass);

            public getActivity(): android.app.Activity;

            public runTest(): void;

            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./junit.framework.TestResult.d.ts" />
declare module android {
    export module test {
        export abstract class ActivityTestCase extends android.test.InstrumentationTestCase {
            public run(param0: junitframeworkTestResult): void;

            public countTestCases(): number;

            public run(): junitframeworkTestResult;

            public getActivity(): android.app.Activity;

            public scrubClass(param0: javalangClass): void;

            public constructor();
            public constructor(param0: string);

            public setActivity(param0: android.app.Activity): void;
        }
    }
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.Application.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./junit.framework.TestResult.d.ts" />
declare module android {
    export module test {
        export abstract class ActivityUnitTestCase extends android.test.ActivityTestCase {
            public countTestCases(): number;

            public isFinishCalled(): boolean;

            public constructor();

            public run(param0: junitframeworkTestResult): void;

            public getStartedActivityIntent(): android.content.Intent;

            public setUp(): void;

            public tearDown(): void;

            public startActivity(param0: android.content.Intent, param1: android.os.Bundle, param2: javalangObject): android.app.Activity;

            public run(): junitframeworkTestResult;

            public getFinishedActivityRequest(): number;

            public constructor(param0: javalangClass);

            public setActivityContext(param0: android.content.Context): void;

            public getActivity(): android.app.Activity;

            public setApplication(param0: android.app.Application): void;

            public getRequestedOrientation(): number;

            public getStartedActivityRequest(): number;

            public constructor(param0: string);
        }
    }
}

import junitframeworkTestCase = junit.framework.TestCase;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./junit.framework.TestResult.d.ts" />
declare module android {
    export module test {
        export class AndroidTestCase extends junitframeworkTestCase {
            public mContext: android.content.Context;

            public assertWritingContentUriRequiresPermission(param0: android.net.Uri, param1: string): void;

            public countTestCases(): number;

            public testAndroidTestCaseSetupProperly(): void;

            public setContext(param0: android.content.Context): void;

            public assertReadingContentUriRequiresPermission(param0: android.net.Uri, param1: string): void;

            public constructor();

            public assertActivityRequiresPermission(param0: string, param1: string, param2: string): void;

            public run(param0: junitframeworkTestResult): void;

            public setUp(): void;

            public tearDown(): void;

            public run(): junitframeworkTestResult;

            public scrubClass(param0: javalangClass): void;

            public getContext(): android.content.Context;

            public constructor(param0: string);
        }
    }
}

import junitrunnerBaseTestRunner = junit.runner.BaseTestRunner;
import junitframeworkTest = junit.framework.Test;
import junitframeworkTestListener = junit.framework.TestListener;
import junitframeworkAssertionFailedError = junit.framework.AssertionFailedError;
/// <reference path="./android.app.Instrumentation.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./junit.framework.AssertionFailedError.d.ts" />
/// <reference path="./junit.framework.Test.d.ts" />
/// <reference path="./junit.framework.TestListener.d.ts" />
/// <reference path="./junit.framework.TestResult.d.ts" />
declare module android {
    export module test {
        export class AndroidTestRunner extends junitrunnerBaseTestRunner {
            public testEnded(param0: string): void;

            public setTest(param0: junitframeworkTest): void;

            public addTestListener(param0: junitframeworkTestListener): void;

            public setContext(param0: android.content.Context): void;

            public runFailed(param0: string): void;

            public startTest(param0: junitframeworkTest): void;

            public setTestClassName(param0: string, param1: string): void;

            public constructor();

            public setInstrumentaiton(param0: android.app.Instrumentation): void;

            public setInstrumentation(param0: android.app.Instrumentation): void;

            public getTestResult(): junitframeworkTestResult;

            public endTest(param0: junitframeworkTest): void;

            public createTestResult(): junitframeworkTestResult;

            public getTestCases(): javautilList;

            public testFailed(param0: number, param1: junitframeworkTest, param2: javalangThrowable): void;

            public addFailure(param0: junitframeworkTest, param1: junitframeworkAssertionFailedError): void;

            public getTestClassName(): string;

            public loadSuiteClass(param0: string): javalangClass;

            public testStarted(param0: string): void;

            public clearTestListeners(): void;

            public runTest(param0: junitframeworkTestResult): void;
            public runTest(): void;

            public addError(param0: junitframeworkTest, param1: javalangThrowable): void;
        }
    }
}

/// <reference path="./android.app.Application.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./junit.framework.TestResult.d.ts" />
declare module android {
    export module test {
        export abstract class ApplicationTestCase extends android.test.AndroidTestCase {
            public countTestCases(): number;

            public getSystemContext(): android.content.Context;

            public constructor();

            public getApplication(): android.app.Application;

            public terminateApplication(): void;

            public run(param0: junitframeworkTestResult): void;

            public setUp(): void;

            public tearDown(): void;

            public run(): junitframeworkTestResult;

            public constructor(param0: javalangClass);

            public createApplication(): void;

            public testApplicationTestCaseSetUpProperly(): void;

            public constructor(param0: string);
        }
    }
}

import javalangError = java.lang.Error;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module test {
        export class AssertionFailedError extends javalangError {
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
    export module test {
        export class ComparisonFailure extends android.test.AssertionFailedError {
            public getMessage(): string;

            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor(param0: string, param1: string, param2: string);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module test {
        export class FlakyTest extends javalangObject implements javalangannotationAnnotation {
            /**
             * Constructs a new instance of the android.test.FlakyTest interface with the provided implementation.
             */
            public constructor(implementation: {
                tolerance(): number;
                annotationType(): javalangClass;
                equals(param0: javalangObject): boolean;
                hashCode(): number;
                toString(): string;
            });

            public tolerance(): number;

            public toString(): string;

            public equals(param0: javalangObject): boolean;

            public annotationType(): javalangClass;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.Instrumentation.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./junit.framework.TestResult.d.ts" />
declare module android {
    export module test {
        export class InstrumentationTestCase extends junitframeworkTestCase {
            public injectInstrumentation(param0: android.app.Instrumentation): void;

            public runTestOnUiThread(param0: javalangRunnable): void;

            public sendKeys(param0: string): void;

            public countTestCases(): number;

            public launchActivity(param0: string, param1: javalangClass, param2: android.os.Bundle): android.app.Activity;

            public constructor();

            public sendRepeatedKeys(param0: native.Array<number>): void;

            public run(param0: junitframeworkTestResult): void;

            public tearDown(): void;

            public run(): junitframeworkTestResult;

            public injectInsrumentation(param0: android.app.Instrumentation): void;

            public launchActivityWithIntent(param0: string, param1: javalangClass, param2: android.content.Intent): android.app.Activity;

            public getInstrumentation(): android.app.Instrumentation;

            public runTest(): void;

            public sendKeys(param0: native.Array<number>): void;

            public constructor(param0: string);
        }
    }
}

import junitframeworkTestSuite = junit.framework.TestSuite;
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.test.AndroidTestRunner.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./junit.framework.TestSuite.d.ts" />
declare module android {
    export module test {
        export class InstrumentationTestRunner extends android.app.Instrumentation implements android.test.TestSuiteProvider {
            public static REPORT_KEY_NAME_CLASS: string;
            public static REPORT_KEY_NAME_TEST: string;
            public static REPORT_KEY_NUM_CURRENT: string;
            public static REPORT_KEY_NUM_TOTAL: string;
            public static REPORT_KEY_STACK: string;
            public static REPORT_VALUE_ID: string;
            public static REPORT_VALUE_RESULT_ERROR: number;
            public static REPORT_VALUE_RESULT_FAILURE: number;
            public static REPORT_VALUE_RESULT_OK: number;
            public static REPORT_VALUE_RESULT_START: number;

            public onStart(): void;

            public getTestSuite(): junitframeworkTestSuite;

            public getAllTests(): junitframeworkTestSuite;

            public getArguments(): android.os.Bundle;

            public getAndroidTestRunner(): android.test.AndroidTestRunner;

            public getLoader(): javalangClassLoader;

            public constructor();

            public onCreate(param0: android.os.Bundle): void;
        }
    }
}

/// <reference path="./android.app.Instrumentation.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./junit.framework.Test.d.ts" />
/// <reference path="./junit.framework.TestResult.d.ts" />
declare module android {
    export module test {
        export class InstrumentationTestSuite extends junitframeworkTestSuite {
            public constructor(param0: native.Array<javalangClass>);

            public addTestSuite(param0: javalangClass): void;

            public runTest(param0: junitframeworkTest, param1: junitframeworkTestResult): void;

            public constructor(param0: string, param1: android.app.Instrumentation);
            public constructor(param0: javalangClass, param1: android.app.Instrumentation);

            public countTestCases(): number;

            public constructor();
            public constructor(param0: native.Array<javalangClass>, param1: string);

            public run(param0: junitframeworkTestResult): void;

            public constructor(param0: javalangClass, param1: string);
            public constructor(param0: javalangClass);
            public constructor(param0: string);
            public constructor(param0: android.app.Instrumentation);
        }
    }
}

/// <reference path="./android.content.BroadcastReceiver.d.ts" />
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.IntentFilter.d.ts" />
/// <reference path="./android.content.ServiceConnection.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module test {
        export class IsolatedContext extends android.content.ContextWrapper {
            public getAndClearBroadcastIntents(): javautilList;

            public constructor(param0: android.content.ContentResolver, param1: android.content.Context);

            public registerReceiver(param0: android.content.BroadcastReceiver, param1: android.content.IntentFilter): android.content.Intent;

            public checkUriPermission(param0: android.net.Uri, param1: string, param2: string, param3: number, param4: number, param5: number): number;

            public getSystemService(param0: string): javalangObject;

            public sendOrderedBroadcast(param0: android.content.Intent, param1: string, param2: android.content.BroadcastReceiver, param3: android.os.Handler, param4: number, param5: string, param6: android.os.Bundle): void;

            public getSystemService(param0: javalangClass): javalangObject;

            public registerReceiver(param0: android.content.BroadcastReceiver, param1: android.content.IntentFilter, param2: string, param3: android.os.Handler): android.content.Intent;

            public sendOrderedBroadcast(param0: android.content.Intent, param1: string): void;

            public getFilesDir(): javaioFile;

            public constructor();

            public checkUriPermission(param0: android.net.Uri, param1: number, param2: number, param3: number): number;

            public getContentResolver(): android.content.ContentResolver;

            public sendBroadcast(param0: android.content.Intent, param1: string): void;

            public constructor(param0: android.content.Context);

            public bindService(param0: android.content.Intent, param1: android.content.ServiceConnection, param2: number): boolean;

            public unregisterReceiver(param0: android.content.BroadcastReceiver): void;

            public sendBroadcast(param0: android.content.Intent): void;
        }
    }
}

/// <reference path="./android.content.Loader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./junit.framework.TestResult.d.ts" />
declare module android {
    export module test {
        export class LoaderTestCase extends android.test.AndroidTestCase {
            public run(param0: junitframeworkTestResult): void;

            public getLoaderResultSynchronously(param0: android.content.Loader): javalangObject;

            public countTestCases(): number;

            public run(): junitframeworkTestResult;

            public constructor();
            public constructor(param0: string);
        }
    }
}

import javautilregexMatchResult = java.util.regex.MatchResult;
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
/// <reference path="./java.util.regex.MatchResult.d.ts" />
declare module android {
    export module test {
        export class MoreAsserts extends javalangObject {
            public static assertEquals(param0: string, param1: javautilSet, param2: javautilSet): void;
            public static assertEquals(param0: string, param1: native.Array<javalangObject>, param2: native.Array<javalangObject>): void;

            public static assertNotContainsRegex(param0: string, param1: string, param2: string): void;

            public static checkEqualsAndHashCodeMethods(param0: string, param1: javalangObject, param2: javalangObject, param3: boolean): void;

            public static assertContainsRegex(param0: string, param1: string, param2: string): javautilregexMatchResult;

            public static assertEmpty(param0: javalangIterable): void;

            public static assertContentsInOrder(param0: string, param1: javalangIterable, param2: native.Array<javalangObject>): void;

            public static assertContentsInAnyOrder(param0: javalangIterable, param1: native.Array<javalangObject>): void;

            public static assertNotEmpty(param0: string, param1: javautilMap): void;

            public static assertNotEqual(param0: javalangObject, param1: javalangObject): void;

            public static assertEmpty(param0: javautilMap): void;

            public static assertNotContainsRegex(param0: string, param1: string): void;

            public static assertNotEmpty(param0: javautilMap): void;

            public static assertEmpty(param0: string, param1: javautilMap): void;

            public static checkEqualsAndHashCodeMethods(param0: javalangObject, param1: javalangObject, param2: boolean): void;

            public static assertContainsRegex(param0: string, param1: string): javautilregexMatchResult;

            public static assertNotEqual(param0: string, param1: javalangObject, param2: javalangObject): void;

            public static assertEmpty(param0: string, param1: javalangIterable): void;

            public static assertNotEmpty(param0: javalangIterable): void;

            public static assertEquals(param0: native.Array<javalangObject>, param1: native.Array<javalangObject>): void;

            public static assertMatchesRegex(param0: string, param1: string, param2: string): javautilregexMatchResult;
            public static assertMatchesRegex(param0: string, param1: string): javautilregexMatchResult;

            public static assertEquals(param0: javautilSet, param1: javautilSet): void;

            public static assertNotEmpty(param0: string, param1: javalangIterable): void;

            public static assertEquals(param0: string, param1: native.Array<number>, param2: native.Array<number>): void;

            public static assertNotMatchesRegex(param0: string, param1: string): void;
            public static assertNotMatchesRegex(param0: string, param1: string, param2: string): void;

            public static assertContentsInAnyOrder(param0: string, param1: javalangIterable, param2: native.Array<javalangObject>): void;

            public static assertContentsInOrder(param0: javalangIterable, param1: native.Array<javalangObject>): void;

            public static assertAssignableFrom(param0: javalangClass, param1: javalangClass): void;
            public static assertAssignableFrom(param0: javalangClass, param1: javalangObject): void;

            public static assertEquals(param0: native.Array<number>, param1: native.Array<number>): void;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module test {
        export class PerformanceTestCase extends javalangObject {
            /**
             * Constructs a new instance of the android.test.PerformanceTestCase interface with the provided implementation.
             */
            public constructor(implementation: {
                startPerformance(param0: android.test.PerformanceTestCase.Intermediates): number;
                isPerformanceOnly(): boolean;
            });

            public startPerformance(param0: android.test.PerformanceTestCase.Intermediates): number;

            public isPerformanceOnly(): boolean;
        }
        export module PerformanceTestCase {
            export class Intermediates extends javalangObject {
                /**
                 * Constructs a new instance of the android.test.PerformanceTestCase$Intermediates interface with the provided implementation.
                 */
                public constructor(implementation: {
                    setInternalIterations(param0: number): void;
                    startTiming(param0: boolean): void;
                    addIntermediate(param0: string): void;
                    addIntermediate(param0: string, param1: number): void;
                    finishTiming(param0: boolean): void;
                });

                public setInternalIterations(param0: number): void;

                public finishTiming(param0: boolean): void;

                public addIntermediate(param0: string, param1: number): void;
                public addIntermediate(param0: string): void;

                public startTiming(param0: boolean): void;
            }
        }
    }
}

/// <reference path="./android.content.ContentProvider.d.ts" />
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.test.IsolatedContext.d.ts" />
/// <reference path="./android.test.mock.MockContentResolver.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./junit.framework.TestResult.d.ts" />
declare module android {
    export module test {
        export abstract class ProviderTestCase extends android.test.InstrumentationTestCase {
            public run(param0: junitframeworkTestResult): void;

            public getMockContentResolver(): android.test.mock.MockContentResolver;

            public countTestCases(): number;

            public getProvider(): android.content.ContentProvider;

            public setUp(): void;

            public tearDown(): void;

            public constructor(param0: javalangClass, param1: string);

            public run(): junitframeworkTestResult;

            public static newResolverWithContentProviderFromSql(param0: android.content.Context, param1: javalangClass, param2: string, param3: string, param4: number, param5: string): android.content.ContentResolver;

            public constructor();

            public getMockContext(): android.test.IsolatedContext;

            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.content.ContentProvider.d.ts" />
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.test.IsolatedContext.d.ts" />
/// <reference path="./android.test.mock.MockContentResolver.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./junit.framework.TestResult.d.ts" />
declare module android {
    export module test {
        export abstract class ProviderTestCase2 extends android.test.AndroidTestCase {
            public run(param0: junitframeworkTestResult): void;

            public getMockContentResolver(): android.test.mock.MockContentResolver;

            public countTestCases(): number;

            public getProvider(): android.content.ContentProvider;

            public setUp(): void;

            public tearDown(): void;

            public constructor(param0: javalangClass, param1: string);

            public run(): junitframeworkTestResult;

            public static newResolverWithContentProviderFromSql(param0: android.content.Context, param1: string, param2: javalangClass, param3: string, param4: string, param5: number, param6: string): android.content.ContentResolver;

            public constructor();

            public getMockContext(): android.test.IsolatedContext;

            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.content.ContentProvider.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.DatabaseErrorHandler.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.FileInputStream.d.ts" />
/// <reference path="./java.io.FileOutputStream.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module test {
        export class RenamingDelegatingContext extends android.content.ContextWrapper {
            public databaseList(): native.Array<string>;

            public makeExistingFilesAndDbsAccessible(): void;

            public openOrCreateDatabase(param0: string, param1: number, param2: android.database.sqlite.SQLiteDatabase.CursorFactory, param3: android.database.DatabaseErrorHandler): android.database.sqlite.SQLiteDatabase;

            public constructor(param0: android.content.Context, param1: android.content.Context, param2: string);

            public getDatabasePath(param0: string): javaioFile;

            public fileList(): native.Array<string>;

            public constructor(param0: android.content.Context, param1: string);

            public static providerWithRenamedContext(param0: javalangClass, param1: android.content.Context, param2: string): android.content.ContentProvider;

            public deleteDatabase(param0: string): boolean;

            public static providerWithRenamedContext(param0: javalangClass, param1: android.content.Context, param2: string, param3: boolean): android.content.ContentProvider;

            public openFileInput(param0: string): javaioFileInputStream;

            public getFileStreamPath(param0: string): javaioFile;

            public constructor();

            public openFileOutput(param0: string, param1: number): javaioFileOutputStream;

            public getDatabasePrefix(): string;

            public getCacheDir(): javaioFile;

            public constructor(param0: android.content.Context);

            public deleteFile(param0: string): boolean;

            public openOrCreateDatabase(param0: string, param1: number, param2: android.database.sqlite.SQLiteDatabase.CursorFactory): android.database.sqlite.SQLiteDatabase;
        }
    }
}

/// <reference path="./android.app.Application.d.ts" />
/// <reference path="./android.app.Service.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./junit.framework.TestResult.d.ts" />
declare module android {
    export module test {
        export abstract class ServiceTestCase extends android.test.AndroidTestCase {
            public countTestCases(): number;

            public getSystemContext(): android.content.Context;

            public setupService(): void;

            public constructor();

            public getApplication(): android.app.Application;

            public testServiceTestCaseSetUpProperly(): void;

            public run(param0: junitframeworkTestResult): void;

            public bindService(param0: android.content.Intent): android.os.IBinder;

            public getService(): android.app.Service;

            public setUp(): void;

            public tearDown(): void;

            public run(): junitframeworkTestResult;

            public constructor(param0: javalangClass);

            public setApplication(param0: android.app.Application): void;

            public startService(param0: android.content.Intent): void;

            public shutdownService(): void;

            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./junit.framework.TestResult.d.ts" />
declare module android {
    export module test {
        export abstract class SingleLaunchActivityTestCase extends android.test.InstrumentationTestCase {
            public run(param0: junitframeworkTestResult): void;

            public constructor(param0: string, param1: javalangClass);

            public countTestCases(): number;

            public setUp(): void;

            public tearDown(): void;

            public testActivityTestCaseSetUpProperly(): void;

            public run(): junitframeworkTestResult;

            public getActivity(): android.app.Activity;

            public constructor();
            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./junit.framework.TestResult.d.ts" />
declare module android {
    export module test {
        export class SyncBaseInstrumentation extends android.test.InstrumentationTestCase {
            public syncProvider(param0: android.net.Uri, param1: string, param2: string): void;

            public run(param0: junitframeworkTestResult): void;

            public countTestCases(): number;

            public setUp(): void;

            public run(): junitframeworkTestResult;

            public constructor();
            public constructor(param0: string);

            public cancelSyncsandDisableAutoSync(): void;
        }
    }
}

/// <reference path="./junit.framework.TestSuite.d.ts" />
declare module android {
    export module test {
        export class TestSuiteProvider extends javalangObject {
            /**
             * Constructs a new instance of the android.test.TestSuiteProvider interface with the provided implementation.
             */
            public constructor(implementation: {
                getTestSuite(): junitframeworkTestSuite;
            });

            public getTestSuite(): junitframeworkTestSuite;
        }
    }
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.test.ActivityInstrumentationTestCase.d.ts" />
/// <reference path="./android.test.InstrumentationTestCase.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
declare module android {
    export module test {
        export class TouchUtils extends javalangObject {
            public static dragViewToY(param0: android.test.InstrumentationTestCase, param1: android.view.View, param2: number, param3: number): number;

            public static dragViewToX(param0: android.test.ActivityInstrumentationTestCase, param1: android.view.View, param2: number, param3: number): number;

            public static longClickView(param0: android.test.InstrumentationTestCase, param1: android.view.View): void;

            public static dragViewToTop(param0: android.test.ActivityInstrumentationTestCase, param1: android.view.View): void;

            public static dragViewToX(param0: android.test.InstrumentationTestCase, param1: android.view.View, param2: number, param3: number): number;

            public static dragViewToTop(param0: android.test.InstrumentationTestCase, param1: android.view.View, param2: number): void;
            public static dragViewToTop(param0: android.test.ActivityInstrumentationTestCase, param1: android.view.View, param2: number): void;

            public static longClickView(param0: android.test.ActivityInstrumentationTestCase, param1: android.view.View): void;

            public static touchAndCancelView(param0: android.test.InstrumentationTestCase, param1: android.view.View): void;

            public static dragViewTo(param0: android.test.ActivityInstrumentationTestCase, param1: android.view.View, param2: number, param3: number, param4: number): number;

            public static dragQuarterScreenDown(param0: android.test.InstrumentationTestCase, param1: android.app.Activity): void;

            public static dragViewToY(param0: android.test.ActivityInstrumentationTestCase, param1: android.view.View, param2: number, param3: number): number;

            public static scrollToBottom(param0: android.test.ActivityInstrumentationTestCase, param1: android.view.ViewGroup): void;

            public static dragQuarterScreenUp(param0: android.test.InstrumentationTestCase, param1: android.app.Activity): void;
            public static dragQuarterScreenUp(param0: android.test.ActivityInstrumentationTestCase): void;

            public static scrollToTop(param0: android.test.ActivityInstrumentationTestCase, param1: android.view.ViewGroup): void;

            public static dragViewToBottom(param0: android.test.InstrumentationTestCase, param1: android.app.Activity, param2: android.view.View): void;

            public static drag(param0: android.test.ActivityInstrumentationTestCase, param1: number, param2: number, param3: number, param4: number, param5: number): void;

            public static dragViewToBottom(param0: android.test.ActivityInstrumentationTestCase, param1: android.view.View): void;

            public static dragViewToTop(param0: android.test.InstrumentationTestCase, param1: android.view.View): void;

            public static scrollToBottom(param0: android.test.InstrumentationTestCase, param1: android.app.Activity, param2: android.view.ViewGroup): void;

            public static dragViewBy(param0: android.test.ActivityInstrumentationTestCase, param1: android.view.View, param2: number, param3: number, param4: number): number;

            public constructor();

            public static scrollToTop(param0: android.test.InstrumentationTestCase, param1: android.app.Activity, param2: android.view.ViewGroup): void;

            public static drag(param0: android.test.InstrumentationTestCase, param1: number, param2: number, param3: number, param4: number, param5: number): void;

            public static dragViewToBottom(param0: android.test.InstrumentationTestCase, param1: android.app.Activity, param2: android.view.View, param3: number): void;
            public static dragViewToBottom(param0: android.test.ActivityInstrumentationTestCase, param1: android.view.View, param2: number): void;

            public static dragQuarterScreenDown(param0: android.test.ActivityInstrumentationTestCase): void;

            public static dragViewBy(param0: android.test.InstrumentationTestCase, param1: android.view.View, param2: number, param3: number, param4: number): number;

            public static clickView(param0: android.test.InstrumentationTestCase, param1: android.view.View): void;

            public static dragViewTo(param0: android.test.InstrumentationTestCase, param1: android.view.View, param2: number, param3: number, param4: number): number;

            public static tapView(param0: android.test.InstrumentationTestCase, param1: android.view.View): void;
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module test {
        export class UiThreadTest extends javalangObject implements javalangannotationAnnotation {
            /**
             * Constructs a new instance of the android.test.UiThreadTest interface with the provided implementation.
             */
            public constructor(implementation: {
                annotationType(): javalangClass;
                equals(param0: javalangObject): boolean;
                hashCode(): number;
                toString(): string;
            });

            public toString(): string;

            public equals(param0: javalangObject): boolean;

            public annotationType(): javalangClass;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
declare module android {
    export module test {
        export class ViewAsserts extends javalangObject {
            public static assertGroupContains(param0: android.view.ViewGroup, param1: android.view.View): void;

            public static assertRightAligned(param0: android.view.View, param1: android.view.View, param2: number): void;

            public static assertOnScreen(param0: android.view.View, param1: android.view.View): void;

            public static assertOffScreenBelow(param0: android.view.View, param1: android.view.View): void;

            public static assertBottomAligned(param0: android.view.View, param1: android.view.View): void;

            public static assertLeftAligned(param0: android.view.View, param1: android.view.View, param2: number): void;

            public static assertTopAligned(param0: android.view.View, param1: android.view.View, param2: number): void;

            public static assertHorizontalCenterAligned(param0: android.view.View, param1: android.view.View): void;

            public static assertBottomAligned(param0: android.view.View, param1: android.view.View, param2: number): void;

            public static assertVerticalCenterAligned(param0: android.view.View, param1: android.view.View): void;

            public static assertOffScreenAbove(param0: android.view.View, param1: android.view.View): void;

            public static assertLeftAligned(param0: android.view.View, param1: android.view.View): void;

            public static assertGroupIntegrity(param0: android.view.ViewGroup): void;

            public static assertHasScreenCoordinates(param0: android.view.View, param1: android.view.View, param2: number, param3: number): void;

            public static assertRightAligned(param0: android.view.View, param1: android.view.View): void;

            public static assertGroupNotContains(param0: android.view.ViewGroup, param1: android.view.View): void;

            public static assertBaselineAligned(param0: android.view.View, param1: android.view.View): void;

            public static assertTopAligned(param0: android.view.View, param1: android.view.View): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
declare module android {
    export module test {
        export module mock {
            export class MockApplication extends android.app.Application {
                public onTerminate(): void;

                public constructor(param0: android.content.Context);

                public onCreate(): void;

                public onTrimMemory(param0: number): void;

                public constructor();

                public onConfigurationChanged(param0: android.content.res.Configuration): void;
            }
        }
    }
}

/// <reference path="./android.content.ContentProviderResult.d.ts" />
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.pm.PathPermission.d.ts" />
/// <reference path="./android.content.pm.ProviderInfo.d.ts" />
/// <reference path="./android.content.res.AssetFileDescriptor.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.CancellationSignal.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module android {
    export module test {
        export module mock {
            export class MockContentProvider extends android.content.ContentProvider {
                public getStreamTypes(param0: android.net.Uri, param1: string): native.Array<string>;

                public delete(param0: android.net.Uri, param1: string, param2: native.Array<string>): number;

                public insert(param0: android.net.Uri, param1: android.content.ContentValues): android.net.Uri;

                public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: android.os.CancellationSignal): android.database.Cursor;

                public onCreate(): boolean;

                public constructor();

                public attachInfo(param0: android.content.Context, param1: android.content.pm.ProviderInfo): void;

                public applyBatch(param0: javautilArrayList): native.Array<android.content.ContentProviderResult>;

                public openTypedAssetFile(param0: android.net.Uri, param1: string, param2: android.os.Bundle, param3: android.os.CancellationSignal): android.content.res.AssetFileDescriptor;

                public constructor(param0: android.content.Context);

                public openTypedAssetFile(param0: android.net.Uri, param1: string, param2: android.os.Bundle): android.content.res.AssetFileDescriptor;

                public bulkInsert(param0: android.net.Uri, param1: native.Array<android.content.ContentValues>): number;

                public getType(param0: android.net.Uri): string;

                public update(param0: android.net.Uri, param1: android.content.ContentValues, param2: string, param3: native.Array<string>): number;

                public onTrimMemory(param0: number): void;

                public constructor(param0: android.content.Context, param1: string, param2: string, param3: native.Array<android.content.pm.PathPermission>);

                public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): android.database.Cursor;
            }
        }
    }
}

/// <reference path="./android.content.ContentProvider.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module test {
        export module mock {
            export class MockContentResolver extends android.content.ContentResolver {
                public constructor(param0: android.content.Context);

                public addProvider(param0: string, param1: android.content.ContentProvider): void;

                public notifyChange(param0: android.net.Uri, param1: android.database.ContentObserver): void;
                public notifyChange(param0: android.net.Uri, param1: android.database.ContentObserver, param2: boolean): void;

                public constructor();
            }
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
    export module test {
        export module mock {
            export class MockContext extends android.content.Context {
                public openFileOutput(param0: string, param1: number): javaioFileOutputStream;

                public createDisplayContext(param0: android.view.Display): android.content.Context;

                public getExternalCacheDir(): javaioFile;

                public getApplicationContext(): android.content.Context;

                public getFilesDir(): javaioFile;

                public checkUriPermission(param0: android.net.Uri, param1: string, param2: string, param3: number, param4: number, param5: number): number;

                public startIntentSender(param0: android.content.IntentSender, param1: android.content.Intent, param2: number, param3: number, param4: number, param5: android.os.Bundle): void;

                public enforceCallingOrSelfUriPermission(param0: android.net.Uri, param1: number, param2: string): void;

                public getPackageResourcePath(): string;

                public startActivities(param0: native.Array<android.content.Intent>): void;

                public clearWallpaper(): void;

                public constructor();

                public startIntentSender(param0: android.content.IntentSender, param1: android.content.Intent, param2: number, param3: number, param4: number): void;

                public unregisterReceiver(param0: android.content.BroadcastReceiver): void;

                public getExternalFilesDirs(param0: string): native.Array<javaioFile>;

                public getDatabasePath(param0: string): javaioFile;

                public openFileInput(param0: string): javaioFileInputStream;

                public isRestricted(): boolean;

                public getWallpaperDesiredMinimumWidth(): number;

                public enforceCallingUriPermission(param0: android.net.Uri, param1: number, param2: string): void;

                public sendOrderedBroadcastAsUser(param0: android.content.Intent, param1: android.os.UserHandle, param2: string, param3: android.content.BroadcastReceiver, param4: android.os.Handler, param5: number, param6: string, param7: android.os.Bundle): void;

                public sendStickyBroadcastAsUser(param0: android.content.Intent, param1: android.os.UserHandle): void;

                public checkCallingOrSelfPermission(param0: string): number;

                public createPackageContext(param0: string, param1: number): android.content.Context;

                public getWallpaperDesiredMinimumHeight(): number;

                public fileList(): native.Array<string>;

                public enforceUriPermission(param0: android.net.Uri, param1: number, param2: number, param3: number, param4: string): void;

                public startActivity(param0: android.content.Intent, param1: android.os.Bundle): void;

                public sendStickyOrderedBroadcastAsUser(param0: android.content.Intent, param1: android.os.UserHandle, param2: android.content.BroadcastReceiver, param3: android.os.Handler, param4: number, param5: string, param6: android.os.Bundle): void;

                public registerReceiver(param0: android.content.BroadcastReceiver, param1: android.content.IntentFilter, param2: string, param3: android.os.Handler): android.content.Intent;

                public setWallpaper(param0: android.graphics.Bitmap): void;

                public getPackageName(): string;

                public getCodeCacheDir(): javaioFile;

                public getPackageCodePath(): string;

                public getObbDirs(): native.Array<javaioFile>;

                public sendBroadcast(param0: android.content.Intent): void;

                public sendOrderedBroadcast(param0: android.content.Intent, param1: string, param2: android.content.BroadcastReceiver, param3: android.os.Handler, param4: number, param5: string, param6: android.os.Bundle): void;

                public bindService(param0: android.content.Intent, param1: android.content.ServiceConnection, param2: number): boolean;

                public enforceCallingPermission(param0: string, param1: string): void;

                public getExternalFilesDir(param0: string): javaioFile;

                public startInstrumentation(param0: android.content.ComponentName, param1: string, param2: android.os.Bundle): boolean;

                public openOrCreateDatabase(param0: string, param1: number, param2: android.database.sqlite.SQLiteDatabase.CursorFactory): android.database.sqlite.SQLiteDatabase;

                public startActivity(param0: android.content.Intent): void;

                public startActivities(param0: native.Array<android.content.Intent>, param1: android.os.Bundle): void;

                public getMainLooper(): android.os.Looper;

                public peekWallpaper(): android.graphics.drawable.Drawable;

                public getSystemService(param0: string): javalangObject;

                public openOrCreateDatabase(param0: string, param1: number, param2: android.database.sqlite.SQLiteDatabase.CursorFactory, param3: android.database.DatabaseErrorHandler): android.database.sqlite.SQLiteDatabase;

                public checkSelfPermission(param0: string): number;

                public setTheme(param0: number): void;

                public startService(param0: android.content.Intent): android.content.ComponentName;

                public checkCallingPermission(param0: string): number;

                public getExternalCacheDirs(): native.Array<javaioFile>;

                public createConfigurationContext(param0: android.content.res.Configuration): android.content.Context;

                public getApplicationInfo(): android.content.pm.ApplicationInfo;

                public databaseList(): native.Array<string>;

                public grantUriPermission(param0: string, param1: android.net.Uri, param2: number): void;

                public getContentResolver(): android.content.ContentResolver;

                public sendStickyBroadcast(param0: android.content.Intent): void;

                public registerReceiver(param0: android.content.BroadcastReceiver, param1: android.content.IntentFilter): android.content.Intent;

                public enforceUriPermission(param0: android.net.Uri, param1: string, param2: string, param3: number, param4: number, param5: number, param6: string): void;

                public removeStickyBroadcast(param0: android.content.Intent): void;

                public getFileStreamPath(param0: string): javaioFile;

                public removeStickyBroadcastAsUser(param0: android.content.Intent, param1: android.os.UserHandle): void;

                public getSystemServiceName(param0: javalangClass): string;

                public enforcePermission(param0: string, param1: number, param2: number, param3: string): void;

                public getNoBackupFilesDir(): javaioFile;

                public getSystemService(param0: javalangClass): javalangObject;

                public checkUriPermission(param0: android.net.Uri, param1: number, param2: number, param3: number): number;

                public revokeUriPermission(param0: android.net.Uri, param1: number): void;

                public unbindService(param0: android.content.ServiceConnection): void;

                public sendBroadcastAsUser(param0: android.content.Intent, param1: android.os.UserHandle): void;
                public sendBroadcastAsUser(param0: android.content.Intent, param1: android.os.UserHandle, param2: string): void;

                public deleteDatabase(param0: string): boolean;

                public setWallpaper(param0: javaioInputStream): void;

                public checkCallingUriPermission(param0: android.net.Uri, param1: number): number;

                public getTheme(): android.content.res.Resources.Theme;

                public getWallpaper(): android.graphics.drawable.Drawable;

                public getDir(param0: string, param1: number): javaioFile;

                public sendStickyOrderedBroadcast(param0: android.content.Intent, param1: android.content.BroadcastReceiver, param2: android.os.Handler, param3: number, param4: string, param5: android.os.Bundle): void;

                public getExternalMediaDirs(): native.Array<javaioFile>;

                public getAssets(): android.content.res.AssetManager;

                public getResources(): android.content.res.Resources;

                public getPackageManager(): android.content.pm.PackageManager;

                public checkCallingOrSelfUriPermission(param0: android.net.Uri, param1: number): number;

                public deleteFile(param0: string): boolean;

                public getSharedPreferences(param0: string, param1: number): android.content.SharedPreferences;

                public sendOrderedBroadcast(param0: android.content.Intent, param1: string): void;

                public stopService(param0: android.content.Intent): boolean;

                public getObbDir(): javaioFile;

                public getCacheDir(): javaioFile;

                public enforceCallingOrSelfPermission(param0: string, param1: string): void;

                public getClassLoader(): javalangClassLoader;

                public checkPermission(param0: string, param1: number, param2: number): number;

                public sendBroadcast(param0: android.content.Intent, param1: string): void;
            }
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
    export module test {
        export module mock {
            export class MockCursor extends javalangObject implements android.database.Cursor {
                public getColumnCount(): number;

                public requery(): boolean;

                public getDouble(param0: number): number;

                public moveToPrevious(): boolean;

                public registerContentObserver(param0: android.database.ContentObserver): void;

                public getString(param0: number): string;

                public getShort(param0: number): number;

                public setNotificationUri(param0: android.content.ContentResolver, param1: android.net.Uri): void;

                public move(param0: number): boolean;

                public getColumnIndex(param0: string): number;

                public getPosition(): number;

                public moveToPosition(param0: number): boolean;

                public getNotificationUri(): android.net.Uri;

                public constructor();

                public isAfterLast(): boolean;

                public getColumnName(param0: number): string;

                public getLong(param0: number): number;

                public getInt(param0: number): number;

                public getExtras(): android.os.Bundle;

                public copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;

                public getBlob(param0: number): native.Array<number>;

                public getColumnNames(): native.Array<string>;

                public isFirst(): boolean;

                public moveToNext(): boolean;

                public close(): void;

                public isNull(param0: number): boolean;

                public unregisterContentObserver(param0: android.database.ContentObserver): void;

                public respond(param0: android.os.Bundle): android.os.Bundle;

                public getColumnIndexOrThrow(param0: string): number;

                public isClosed(): boolean;

                public getCount(): number;

                public registerDataSetObserver(param0: android.database.DataSetObserver): void;

                public getWantsAllOnMoveCalls(): boolean;

                public isLast(): boolean;

                public setExtras(param0: android.os.Bundle): void;

                public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

                public getType(param0: number): number;

                public moveToLast(): boolean;

                public moveToFirst(): boolean;

                public getFloat(param0: number): number;

                public isBeforeFirst(): boolean;

                public deactivate(): void;
            }
        }
    }
}

declare module android {
    export module test {
        export module mock {
            export class MockDialogInterface extends javalangObject implements android.content.DialogInterface {
                public cancel(): void;

                public dismiss(): void;

                public constructor();
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
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module test {
        export module mock {
            export class MockPackageManager extends android.content.pm.PackageManager {
                public getServiceInfo(param0: android.content.ComponentName, param1: number): android.content.pm.ServiceInfo;

                public getAllIntentFilters(param0: string): javautilList;

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

                public setDefaultBrowserPackageName(param0: string, param1: number): boolean;

                public queryIntentContentProviders(param0: android.content.Intent, param1: number): javautilList;

                public setInstallerPackageName(param0: string, param1: string): void;

                public getSystemAvailableFeatures(): native.Array<android.content.pm.FeatureInfo>;

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

                public getDefaultBrowserPackageName(param0: number): string;

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

                public queryContentProviders(param0: string, param1: number, param2: number): javautilList;

                public getXml(param0: string, param1: number, param2: android.content.pm.ApplicationInfo): android.content.res.XmlResourceParser;

                public hasSystemFeature(param0: string): boolean;

                public getPreferredActivities(param0: javautilList, param1: javautilList, param2: string): number;

                public getNameForUid(param0: number): string;

                public queryIntentActivities(param0: android.content.Intent, param1: number): javautilList;

                public getPackageInfo(param0: string, param1: number): android.content.pm.PackageInfo;

                public getPackagesForUid(param0: number): native.Array<string>;

                public isSafeMode(): boolean;

                public currentToCanonicalPackageNames(param0: native.Array<string>): native.Array<string>;

                public getApplicationLogo(param0: android.content.pm.ApplicationInfo): android.graphics.drawable.Drawable;
            }
        }
    }
}

/// <reference path="./android.content.res.AssetFileDescriptor.d.ts" />
/// <reference path="./android.content.res.AssetManager.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
/// <reference path="./android.content.res.XmlResourceParser.d.ts" />
/// <reference path="./android.graphics.Movie.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.util.DisplayMetrics.d.ts" />
/// <reference path="./android.util.TypedValue.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module test {
        export module mock {
            export class MockResources extends android.content.res.Resources {
                public getDimensionPixelSize(param0: number): number;

                public getXml(param0: number): android.content.res.XmlResourceParser;

                public getDisplayMetrics(): android.util.DisplayMetrics;

                public getString(param0: number): string;

                public getColorStateList(param0: number, param1: android.content.res.Resources.Theme): android.content.res.ColorStateList;

                public getInteger(param0: number): number;

                public getValue(param0: number, param1: android.util.TypedValue, param2: boolean): void;

                public getTextArray(param0: number): native.Array<javalangCharSequence>;

                public getConfiguration(): android.content.res.Configuration;

                public getMovie(param0: number): android.graphics.Movie;

                public openRawResourceFd(param0: number): android.content.res.AssetFileDescriptor;

                public constructor();

                public getResourceEntryName(param0: number): string;

                public getDrawable(param0: number, param1: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;

                public getDimension(param0: number): number;

                public getResourceTypeName(param0: number): string;

                public updateConfiguration(param0: android.content.res.Configuration, param1: android.util.DisplayMetrics): void;

                public getQuantityText(param0: number, param1: number): string;

                public getColor(param0: number, param1: android.content.res.Resources.Theme): number;

                public getDrawable(param0: number): android.graphics.drawable.Drawable;

                public openRawResource(param0: number): javaioInputStream;

                public getText(param0: number): string;

                public getQuantityString(param0: number, param1: number, param2: native.Array<javalangObject>): string;

                public getIntArray(param0: number): native.Array<number>;

                public getAnimation(param0: number): android.content.res.XmlResourceParser;

                public getString(param0: number, param1: native.Array<javalangObject>): string;

                public getColor(param0: number): number;

                public getStringArray(param0: number): native.Array<string>;

                public getText(param0: number, param1: string): string;

                public getDimensionPixelOffset(param0: number): number;

                public obtainAttributes(param0: android.util.AttributeSet, param1: native.Array<number>): android.content.res.TypedArray;

                public getResourcePackageName(param0: number): string;

                public obtainTypedArray(param0: number): android.content.res.TypedArray;

                public getIdentifier(param0: string, param1: string, param2: string): number;

                public getResourceName(param0: number): string;

                public constructor(param0: android.content.res.AssetManager, param1: android.util.DisplayMetrics, param2: android.content.res.Configuration);

                public getLayout(param0: number): android.content.res.XmlResourceParser;

                public getQuantityString(param0: number, param1: number): string;

                public getValue(param0: string, param1: android.util.TypedValue, param2: boolean): void;

                public openRawResource(param0: number, param1: android.util.TypedValue): javaioInputStream;

                public getColorStateList(param0: number): android.content.res.ColorStateList;
            }
        }
    }
}

import javalangreflectMethod = java.lang.reflect.Method;
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.annotation.Annotation.d.ts" />
/// <reference path="./java.lang.reflect.Method.d.ts" />
/// <reference path="./junit.framework.TestCase.d.ts" />
declare module android {
    export module test {
        export module suitebuilder {
            export class TestMethod extends javalangObject {
                public constructor(param0: javalangreflectMethod, param1: javalangClass);

                public getEnclosingClassname(): string;

                public constructor(param0: junitframeworkTestCase);

                public equals(param0: javalangObject): boolean;

                public hashCode(): number;

                public getName(): string;

                public constructor(param0: string, param1: javalangClass);

                public toString(): string;

                public getAnnotation(param0: javalangClass): javalangannotationAnnotation;

                public getEnclosingClass(): javalangClass;

                public createTest(): junitframeworkTestCase;
            }
        }
    }
}

import comandroidinternalutilPredicate = com.android.internal.util.Predicate;
/// <reference path="./com.android.internal.util.Predicate.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./junit.framework.TestResult.d.ts" />
/// <reference path="./junit.framework.TestSuite.d.ts" />
declare module android {
    export module test {
        export module suitebuilder {
            export class TestSuiteBuilder extends javalangObject {
                public addRequirements(param0: javautilList): android.test.suitebuilder.TestSuiteBuilder;

                public build(): junitframeworkTestSuite;

                public named(param0: string): android.test.suitebuilder.TestSuiteBuilder;

                public includePackages(param0: native.Array<string>): android.test.suitebuilder.TestSuiteBuilder;

                public getSuiteName(): string;

                public constructor(param0: javalangClass);

                public excludePackages(param0: native.Array<string>): android.test.suitebuilder.TestSuiteBuilder;

                public includeAllPackagesUnderHere(): android.test.suitebuilder.TestSuiteBuilder;

                public addRequirements(param0: native.Array<comandroidinternalutilPredicate>): android.test.suitebuilder.TestSuiteBuilder;

                public constructor(param0: string, param1: javalangClassLoader);
            }
            export module TestSuiteBuilder {
                export class FailedToCreateTests extends junitframeworkTestCase {
                    public run(param0: junitframeworkTestResult): void;
                    public run(): junitframeworkTestResult;

                    public constructor(param0: string);
                    public constructor();

                    public testSuiteConstructionFailed(): void;

                    public countTestCases(): number;

                    public constructor(param0: javalangException);
                }
            }
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module test {
        export module suitebuilder {
            export module annotation {
                export class LargeTest extends javalangObject implements javalangannotationAnnotation {
                    /**
                     * Constructs a new instance of the android.test.suitebuilder.annotation.LargeTest interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        annotationType(): javalangClass;
                        equals(param0: javalangObject): boolean;
                        hashCode(): number;
                        toString(): string;
                    });

                    public toString(): string;

                    public equals(param0: javalangObject): boolean;

                    public annotationType(): javalangClass;

                    public hashCode(): number;
                }
            }
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module test {
        export module suitebuilder {
            export module annotation {
                export class MediumTest extends javalangObject implements javalangannotationAnnotation {
                    /**
                     * Constructs a new instance of the android.test.suitebuilder.annotation.MediumTest interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        annotationType(): javalangClass;
                        equals(param0: javalangObject): boolean;
                        hashCode(): number;
                        toString(): string;
                    });

                    public toString(): string;

                    public equals(param0: javalangObject): boolean;

                    public annotationType(): javalangClass;

                    public hashCode(): number;
                }
            }
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module test {
        export module suitebuilder {
            export module annotation {
                export class SmallTest extends javalangObject implements javalangannotationAnnotation {
                    /**
                     * Constructs a new instance of the android.test.suitebuilder.annotation.SmallTest interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        annotationType(): javalangClass;
                        equals(param0: javalangObject): boolean;
                        hashCode(): number;
                        toString(): string;
                    });

                    public toString(): string;

                    public equals(param0: javalangObject): boolean;

                    public annotationType(): javalangClass;

                    public hashCode(): number;
                }
            }
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module test {
        export module suitebuilder {
            export module annotation {
                export class Smoke extends javalangObject implements javalangannotationAnnotation {
                    /**
                     * Constructs a new instance of the android.test.suitebuilder.annotation.Smoke interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        annotationType(): javalangClass;
                        equals(param0: javalangObject): boolean;
                        hashCode(): number;
                        toString(): string;
                    });

                    public toString(): string;

                    public equals(param0: javalangObject): boolean;

                    public annotationType(): javalangClass;

                    public hashCode(): number;
                }
            }
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module test {
        export module suitebuilder {
            export module annotation {
                export class Suppress extends javalangObject implements javalangannotationAnnotation {
                    /**
                     * Constructs a new instance of the android.test.suitebuilder.annotation.Suppress interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        annotationType(): javalangClass;
                        equals(param0: javalangObject): boolean;
                        hashCode(): number;
                        toString(): string;
                    });

                    public toString(): string;

                    public equals(param0: javalangObject): boolean;

                    public annotationType(): javalangClass;

                    public hashCode(): number;
                }
            }
        }
    }
}
