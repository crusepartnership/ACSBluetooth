
/// <reference path="./android.accounts.Account.d.ts" />
/// <reference path="./android.accounts.AccountAuthenticatorResponse.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module accounts {
        export abstract class AbstractAccountAuthenticator extends javalangObject {
            public static KEY_CUSTOM_TOKEN_EXPIRY: string;

            public getAccountCredentialsForCloning(param0: android.accounts.AccountAuthenticatorResponse, param1: android.accounts.Account): android.os.Bundle;

            public addAccountFromCredentials(param0: android.accounts.AccountAuthenticatorResponse, param1: android.accounts.Account, param2: android.os.Bundle): android.os.Bundle;

            public editProperties(param0: android.accounts.AccountAuthenticatorResponse, param1: string): android.os.Bundle;

            public constructor(param0: android.content.Context);

            public getAuthTokenLabel(param0: string): string;

            public getIBinder(): android.os.IBinder;

            public addAccount(param0: android.accounts.AccountAuthenticatorResponse, param1: string, param2: string, param3: native.Array<string>, param4: android.os.Bundle): android.os.Bundle;

            public getAuthToken(param0: android.accounts.AccountAuthenticatorResponse, param1: android.accounts.Account, param2: string, param3: android.os.Bundle): android.os.Bundle;

            public hasFeatures(param0: android.accounts.AccountAuthenticatorResponse, param1: android.accounts.Account, param2: native.Array<string>): android.os.Bundle;

            public getAccountRemovalAllowed(param0: android.accounts.AccountAuthenticatorResponse, param1: android.accounts.Account): android.os.Bundle;

            public confirmCredentials(param0: android.accounts.AccountAuthenticatorResponse, param1: android.accounts.Account, param2: android.os.Bundle): android.os.Bundle;

            public updateCredentials(param0: android.accounts.AccountAuthenticatorResponse, param1: android.accounts.Account, param2: string, param3: android.os.Bundle): android.os.Bundle;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module accounts {
        export class Account extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public name: string;
            public type: string;

            public constructor(param0: string, param1: string);

            public toString(): string;

            public equals(param0: javalangObject): boolean;

            public constructor(param0: android.os.Parcel);

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.SearchEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module accounts {
        export class AccountAuthenticatorActivity extends android.app.Activity {
            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;

            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;

            public finish(): void;

            public onPanelClosed(param0: number, param1: android.view.Menu): void;

            public onSearchRequested(): boolean;

            public onTrimMemory(param0: number): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onActionModeFinished(param0: android.view.ActionMode): void;

            public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);

            public onCreatePanelView(param0: number): android.view.View;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;

            public onDetachedFromWindow(): void;

            public onActionModeStarted(param0: android.view.ActionMode): void;

            public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;

            public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;

            public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;

            public onMenuOpened(param0: number, param1: android.view.Menu): boolean;

            public onSearchRequested(param0: android.view.SearchEvent): boolean;

            public constructor();

            public onCreateView(param0: string, param1: android.content.Context, param2: android.util.AttributeSet): android.view.View;

            public setAccountAuthenticatorResult(param0: android.os.Bundle): void;

            public constructor(param0: android.content.Context, param1: number);

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;

            public onCreate(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;

            public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;

            public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;

            public constructor(param0: android.content.Context);

            public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;

            public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;

            public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;

            public onWindowFocusChanged(param0: boolean): void;

            public onAttachedToWindow(): void;

            public onCreate(param0: android.os.Bundle): void;

            public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;

            public onContentChanged(): void;
        }
    }
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module accounts {
        export class AccountAuthenticatorResponse extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public onError(param0: number, param1: string): void;

            public constructor(param0: android.os.Parcel);

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public onResult(param0: android.os.Bundle): void;

            public onRequestContinued(): void;
        }
    }
}

import javautilArrayList = java.util.ArrayList;
/// <reference path="./android.accounts.Account.d.ts" />
/// <reference path="./android.accounts.AccountManagerCallback.d.ts" />
/// <reference path="./android.accounts.AccountManagerFuture.d.ts" />
/// <reference path="./android.accounts.AuthenticatorDescription.d.ts" />
/// <reference path="./android.accounts.OnAccountsUpdateListener.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module accounts {
        export class AccountManager extends javalangObject {
            public static ACTION_AUTHENTICATOR_INTENT: string;
            public static AUTHENTICATOR_ATTRIBUTES_NAME: string;
            public static AUTHENTICATOR_META_DATA_NAME: string;
            public static ERROR_CODE_BAD_ARGUMENTS: number;
            public static ERROR_CODE_BAD_AUTHENTICATION: number;
            public static ERROR_CODE_BAD_REQUEST: number;
            public static ERROR_CODE_CANCELED: number;
            public static ERROR_CODE_INVALID_RESPONSE: number;
            public static ERROR_CODE_NETWORK_ERROR: number;
            public static ERROR_CODE_REMOTE_EXCEPTION: number;
            public static ERROR_CODE_UNSUPPORTED_OPERATION: number;
            public static KEY_ACCOUNTS: string;
            public static KEY_ACCOUNT_AUTHENTICATOR_RESPONSE: string;
            public static KEY_ACCOUNT_MANAGER_RESPONSE: string;
            public static KEY_ACCOUNT_NAME: string;
            public static KEY_ACCOUNT_TYPE: string;
            public static KEY_ANDROID_PACKAGE_NAME: string;
            public static KEY_AUTHENTICATOR_TYPES: string;
            public static KEY_AUTHTOKEN: string;
            public static KEY_AUTH_FAILED_MESSAGE: string;
            public static KEY_AUTH_TOKEN_LABEL: string;
            public static KEY_BOOLEAN_RESULT: string;
            public static KEY_CALLER_PID: string;
            public static KEY_CALLER_UID: string;
            public static KEY_ERROR_CODE: string;
            public static KEY_ERROR_MESSAGE: string;
            public static KEY_INTENT: string;
            public static KEY_LAST_AUTHENTICATED_TIME: string;
            public static KEY_PASSWORD: string;
            public static KEY_USERDATA: string;
            public static LOGIN_ACCOUNTS_CHANGED_ACTION: string;

            public getAccountsByTypeAndFeatures(param0: string, param1: native.Array<string>, param2: android.accounts.AccountManagerCallback, param3: android.os.Handler): android.accounts.AccountManagerFuture;

            public hasFeatures(param0: android.accounts.Account, param1: native.Array<string>, param2: android.accounts.AccountManagerCallback, param3: android.os.Handler): android.accounts.AccountManagerFuture;

            public renameAccount(param0: android.accounts.Account, param1: string, param2: android.accounts.AccountManagerCallback, param3: android.os.Handler): android.accounts.AccountManagerFuture;

            public getAuthenticatorTypes(): native.Array<android.accounts.AuthenticatorDescription>;

            public getAuthToken(param0: android.accounts.Account, param1: string, param2: android.os.Bundle, param3: android.app.Activity, param4: android.accounts.AccountManagerCallback, param5: android.os.Handler): android.accounts.AccountManagerFuture;

            public getAuthTokenByFeatures(param0: string, param1: string, param2: native.Array<string>, param3: android.app.Activity, param4: android.os.Bundle, param5: android.os.Bundle, param6: android.accounts.AccountManagerCallback, param7: android.os.Handler): android.accounts.AccountManagerFuture;

            public removeOnAccountsUpdatedListener(param0: android.accounts.OnAccountsUpdateListener): void;

            public addOnAccountsUpdatedListener(param0: android.accounts.OnAccountsUpdateListener, param1: android.os.Handler, param2: boolean): void;

            public removeAccount(param0: android.accounts.Account, param1: android.accounts.AccountManagerCallback, param2: android.os.Handler): android.accounts.AccountManagerFuture;

            public clearPassword(param0: android.accounts.Account): void;

            public static newChooseAccountIntent(param0: android.accounts.Account, param1: javautilArrayList, param2: native.Array<string>, param3: boolean, param4: string, param5: string, param6: native.Array<string>, param7: android.os.Bundle): android.content.Intent;

            public setAuthToken(param0: android.accounts.Account, param1: string, param2: string): void;

            public confirmCredentials(param0: android.accounts.Account, param1: android.os.Bundle, param2: android.app.Activity, param3: android.accounts.AccountManagerCallback, param4: android.os.Handler): android.accounts.AccountManagerFuture;

            public blockingGetAuthToken(param0: android.accounts.Account, param1: string, param2: boolean): string;

            public getAccountsByTypeForPackage(param0: string, param1: string): native.Array<android.accounts.Account>;

            public getAuthToken(param0: android.accounts.Account, param1: string, param2: android.os.Bundle, param3: boolean, param4: android.accounts.AccountManagerCallback, param5: android.os.Handler): android.accounts.AccountManagerFuture;

            public addAccountExplicitly(param0: android.accounts.Account, param1: string, param2: android.os.Bundle): boolean;

            public removeAccount(param0: android.accounts.Account, param1: android.app.Activity, param2: android.accounts.AccountManagerCallback, param3: android.os.Handler): android.accounts.AccountManagerFuture;

            public invalidateAuthToken(param0: string, param1: string): void;

            public setPassword(param0: android.accounts.Account, param1: string): void;

            public getAuthToken(param0: android.accounts.Account, param1: string, param2: boolean, param3: android.accounts.AccountManagerCallback, param4: android.os.Handler): android.accounts.AccountManagerFuture;

            public getAccountsByType(param0: string): native.Array<android.accounts.Account>;

            public setUserData(param0: android.accounts.Account, param1: string, param2: string): void;

            public updateCredentials(param0: android.accounts.Account, param1: string, param2: android.os.Bundle, param3: android.app.Activity, param4: android.accounts.AccountManagerCallback, param5: android.os.Handler): android.accounts.AccountManagerFuture;

            public editProperties(param0: string, param1: android.app.Activity, param2: android.accounts.AccountManagerCallback, param3: android.os.Handler): android.accounts.AccountManagerFuture;

            public addAccount(param0: string, param1: string, param2: native.Array<string>, param3: android.os.Bundle, param4: android.app.Activity, param5: android.accounts.AccountManagerCallback, param6: android.os.Handler): android.accounts.AccountManagerFuture;

            public notifyAccountAuthenticated(param0: android.accounts.Account): boolean;

            public static newChooseAccountIntent(param0: android.accounts.Account, param1: javautilList, param2: native.Array<string>, param3: string, param4: string, param5: native.Array<string>, param6: android.os.Bundle): android.content.Intent;

            public getPassword(param0: android.accounts.Account): string;

            public peekAuthToken(param0: android.accounts.Account, param1: string): string;

            public getUserData(param0: android.accounts.Account, param1: string): string;

            public getAccounts(): native.Array<android.accounts.Account>;

            public static get(param0: android.content.Context): android.accounts.AccountManager;

            public getPreviousName(param0: android.accounts.Account): string;

            public removeAccountExplicitly(param0: android.accounts.Account): boolean;
        }
    }
}

/// <reference path="./android.accounts.AccountManagerFuture.d.ts" />
declare module android {
    export module accounts {
        export class AccountManagerCallback extends javalangObject {
            /**
             * Constructs a new instance of the android.accounts.AccountManagerCallback interface with the provided implementation.
             */
            public constructor(implementation: {
                run(param0: android.accounts.AccountManagerFuture): void;
            });

            public run(param0: android.accounts.AccountManagerFuture): void;
        }
    }
}

import javautilconcurrentTimeUnit = java.util.concurrent.TimeUnit;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
declare module android {
    export module accounts {
        export class AccountManagerFuture extends javalangObject {
            /**
             * Constructs a new instance of the android.accounts.AccountManagerFuture interface with the provided implementation.
             */
            public constructor(implementation: {
                cancel(param0: boolean): boolean;
                isCancelled(): boolean;
                isDone(): boolean;
                getResult(): javalangObject;
                getResult(param0: number, param1: javautilconcurrentTimeUnit): javalangObject;
            });

            public cancel(param0: boolean): boolean;

            public isCancelled(): boolean;

            public isDone(): boolean;

            public getResult(param0: number, param1: javautilconcurrentTimeUnit): javalangObject;
            public getResult(): javalangObject;
        }
    }
}

import javalangException = java.lang.Exception;
import javalangThrowable = java.lang.Throwable;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module accounts {
        export class AccountsException extends javalangException {
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
declare module android {
    export module accounts {
        export class AuthenticatorDescription extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public accountPreferencesId: number;
            public customTokens: boolean;
            public iconId: number;
            public labelId: number;
            public packageName: string;
            public smallIconId: number;
            public type: string;

            public constructor(param0: string, param1: string, param2: number, param3: number, param4: number, param5: number, param6: boolean);

            public toString(): string;

            public equals(param0: javalangObject): boolean;

            public constructor(param0: string, param1: string, param2: number, param3: number, param4: number, param5: number);

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public static newKey(param0: string): android.accounts.AuthenticatorDescription;

            public hashCode(): number;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module accounts {
        export class AuthenticatorException extends android.accounts.AccountsException {
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
    export module accounts {
        export class NetworkErrorException extends android.accounts.AccountsException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.accounts.Account.d.ts" />
declare module android {
    export module accounts {
        export class OnAccountsUpdateListener extends javalangObject {
            /**
             * Constructs a new instance of the android.accounts.OnAccountsUpdateListener interface with the provided implementation.
             */
            public constructor(implementation: {
                onAccountsUpdated(param0: native.Array<android.accounts.Account>): void;
            });

            public onAccountsUpdated(param0: native.Array<android.accounts.Account>): void;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module accounts {
        export class OperationCanceledException extends android.accounts.AccountsException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

