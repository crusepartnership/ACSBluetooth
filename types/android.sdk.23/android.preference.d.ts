
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
declare module android {
    export module preference {
        export class CheckBoxPreference extends android.preference.TwoStatePreference {
            public onBindView(param0: android.view.View): void;

            public constructor(param0: android.content.Context);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
        }
    }
}

/// <reference path="./android.app.Dialog.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.DialogInterface.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module preference {
        export abstract class DialogPreference extends android.preference.Preference implements android.content.DialogInterface.OnClickListener, android.content.DialogInterface.OnDismissListener, android.preference.PreferenceManager.OnActivityDestroyListener {
            public onClick(): void;
            public onClick(param0: android.content.DialogInterface, param1: number): void;

            public setDialogMessage(param0: number): void;

            public setDialogTitle(param0: string): void;

            public setNegativeButtonText(param0: string): void;

            public onBindDialogView(param0: android.view.View): void;

            public onDismiss(param0: android.content.DialogInterface): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public getNegativeButtonText(): string;

            public onPrepareDialogBuilder(param0: android.app.AlertDialog.Builder): void;

            public getDialogTitle(): string;

            public getDialogMessage(): string;

            public onDialogClosed(param0: boolean): void;

            public getDialog(): android.app.Dialog;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public showDialog(param0: android.os.Bundle): void;

            public setDialogIcon(param0: android.graphics.drawable.Drawable): void;

            public getDialogLayoutResource(): number;

            public onRestoreInstanceState(param0: android.os.Parcelable): void;

            public onCreateDialogView(): android.view.View;

            public getDialogIcon(): android.graphics.drawable.Drawable;

            public setDialogLayoutResource(param0: number): void;

            public setPositiveButtonText(param0: string): void;

            public setNegativeButtonText(param0: number): void;

            public setDialogIcon(param0: number): void;

            public constructor(param0: android.content.Context);

            public setPositiveButtonText(param0: number): void;

            public setDialogTitle(param0: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public setDialogMessage(param0: string): void;

            public getPositiveButtonText(): string;

            public onActivityDestroy(): void;

            public onSaveInstanceState(): android.os.Parcelable;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.DialogInterface.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.EditText.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module preference {
        export class EditTextPreference extends android.preference.DialogPreference {
            public onRestoreInstanceState(param0: android.os.Parcelable): void;

            public onClick(): void;
            public onClick(param0: android.content.DialogInterface, param1: number): void;

            public setText(param0: string): void;

            public getText(): string;

            public onBindDialogView(param0: android.view.View): void;

            public onDismiss(param0: android.content.DialogInterface): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public onGetDefaultValue(param0: android.content.res.TypedArray, param1: number): javalangObject;

            public shouldDisableDependents(): boolean;

            public getEditText(): android.widget.EditText;

            public onAddEditTextToDialogView(param0: android.view.View, param1: android.widget.EditText): void;

            public onDialogClosed(param0: boolean): void;

            public constructor(param0: android.content.Context);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public onSaveInstanceState(): android.os.Parcelable;

            public onActivityDestroy(): void;

            public onSetInitialValue(param0: boolean, param1: javalangObject): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.DialogInterface.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module preference {
        export class ListPreference extends android.preference.DialogPreference {
            public onClick(): void;
            public onClick(param0: android.content.DialogInterface, param1: number): void;

            public onDismiss(param0: android.content.DialogInterface): void;

            public getEntryValues(): native.Array<javalangCharSequence>;

            public setEntryValues(param0: native.Array<javalangCharSequence>): void;

            public setValue(param0: string): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public findIndexOfValue(param0: string): number;

            public setEntries(param0: native.Array<javalangCharSequence>): void;

            public onPrepareDialogBuilder(param0: android.app.AlertDialog.Builder): void;

            public getSummary(): string;

            public onDialogClosed(param0: boolean): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public getEntry(): string;

            public setValueIndex(param0: number): void;

            public onSetInitialValue(param0: boolean, param1: javalangObject): void;

            public onRestoreInstanceState(param0: android.os.Parcelable): void;

            public setSummary(param0: string): void;

            public onGetDefaultValue(param0: android.content.res.TypedArray, param1: number): javalangObject;

            public setSummary(param0: number): void;

            public constructor(param0: android.content.Context);

            public setEntries(param0: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public getEntries(): native.Array<javalangCharSequence>;

            public getValue(): string;

            public onSaveInstanceState(): android.os.Parcelable;

            public onActivityDestroy(): void;

            public setEntryValues(param0: number): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.DialogInterface.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module android {
    export module preference {
        export class MultiSelectListPreference extends android.preference.DialogPreference {
            public onClick(): void;
            public onClick(param0: android.content.DialogInterface, param1: number): void;

            public onDismiss(param0: android.content.DialogInterface): void;

            public getEntryValues(): native.Array<javalangCharSequence>;

            public setEntryValues(param0: native.Array<javalangCharSequence>): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public findIndexOfValue(param0: string): number;

            public setEntries(param0: native.Array<javalangCharSequence>): void;

            public onGetDefaultValue(param0: android.content.res.TypedArray, param1: number): javalangObject;

            public onPrepareDialogBuilder(param0: android.app.AlertDialog.Builder): void;

            public setValues(param0: javautilSet): void;

            public onDialogClosed(param0: boolean): void;

            public constructor(param0: android.content.Context);

            public getValues(): javautilSet;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public setEntries(param0: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public getEntries(): native.Array<javalangCharSequence>;

            public onSaveInstanceState(): android.os.Parcelable;

            public onActivityDestroy(): void;

            public setEntryValues(param0: number): void;

            public onSetInitialValue(param0: boolean, param1: javalangObject): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.SharedPreferences.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.preference.Preference.d.ts" />
/// <reference path="./android.preference.PreferenceManager.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module preference {
        export class Preference extends javalangObject {
            public static DEFAULT_ORDER: number;

            public onBindView(param0: android.view.View): void;

            public onClick(): void;

            public findPreferenceInHierarchy(param0: string): android.preference.Preference;

            public setTitle(param0: string): void;

            public isSelectable(): boolean;

            public onPrepareForRemoval(): void;

            public setSelectable(param0: boolean): void;

            public onAttachedToHierarchy(param0: android.preference.PreferenceManager): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public getLayoutResource(): number;

            public hasKey(): boolean;

            public getSummary(): string;

            public setPersistent(param0: boolean): void;

            public getKey(): string;

            public getContext(): android.content.Context;

            public setEnabled(param0: boolean): void;

            public onSetInitialValue(param0: boolean, param1: javalangObject): void;

            public onAttachedToActivity(): void;

            public getPersistedInt(param0: number): number;

            public onRestoreInstanceState(param0: android.os.Parcelable): void;

            public getTitle(): string;

            public isPersistent(): boolean;

            public saveHierarchyState(param0: android.os.Bundle): void;

            public getShouldDisableView(): boolean;

            public persistBoolean(param0: boolean): boolean;

            public setOnPreferenceChangeListener(param0: android.preference.Preference.OnPreferenceChangeListener): void;

            public getOnPreferenceClickListener(): android.preference.Preference.OnPreferenceClickListener;

            public getOrder(): number;

            public restoreHierarchyState(param0: android.os.Bundle): void;

            public setSummary(param0: string): void;

            public callChangeListener(param0: javalangObject): boolean;

            public onGetDefaultValue(param0: android.content.res.TypedArray, param1: number): javalangObject;

            public setKey(param0: string): void;

            public setSummary(param0: number): void;

            public getTitleRes(): number;

            public getSharedPreferences(): android.content.SharedPreferences;

            public shouldPersist(): boolean;

            public onSaveInstanceState(): android.os.Parcelable;

            public getExtras(): android.os.Bundle;

            public persistLong(param0: number): boolean;

            public shouldCommit(): boolean;

            public getPersistedLong(param0: number): number;

            public getIntent(): android.content.Intent;

            public getFragment(): string;

            public getPreferenceManager(): android.preference.PreferenceManager;

            public setOrder(param0: number): void;

            public shouldDisableDependents(): boolean;

            public notifyChanged(): void;

            public onParentChanged(param0: android.preference.Preference, param1: boolean): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public getWidgetLayoutResource(): number;

            public onCreateView(param0: android.view.ViewGroup): android.view.View;

            public getOnPreferenceChangeListener(): android.preference.Preference.OnPreferenceChangeListener;

            public setWidgetLayoutResource(param0: number): void;

            public peekExtras(): android.os.Bundle;

            public getDependency(): string;

            public setIcon(param0: number): void;

            public getEditor(): android.content.SharedPreferences.Editor;

            public getView(param0: android.view.View, param1: android.view.ViewGroup): android.view.View;

            public persistString(param0: string): boolean;

            public setTitle(param0: number): void;

            public notifyDependencyChange(param0: boolean): void;

            public onDependencyChanged(param0: android.preference.Preference, param1: boolean): void;

            public setFragment(param0: string): void;

            public persistFloat(param0: number): boolean;

            public setLayoutResource(param0: number): void;

            public getPersistedBoolean(param0: boolean): boolean;

            public setIntent(param0: android.content.Intent): void;

            public getIcon(): android.graphics.drawable.Drawable;

            public isEnabled(): boolean;

            public setOnPreferenceClickListener(param0: android.preference.Preference.OnPreferenceClickListener): void;

            public toString(): string;

            public getPersistedString(param0: string): string;

            public constructor(param0: android.content.Context);

            public notifyHierarchyChanged(): void;

            public persistInt(param0: number): boolean;

            public getPersistedFloat(param0: number): number;

            public compareTo(param0: android.preference.Preference): number;

            public setDefaultValue(param0: javalangObject): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public setDependency(param0: string): void;

            public setShouldDisableView(param0: boolean): void;

            public setIcon(param0: android.graphics.drawable.Drawable): void;
        }
        export module Preference {
            export class BaseSavedState extends android.view.AbsSavedState {
                public static CREATOR: android.os.Parcelable.Creator;

                public constructor(param0: android.os.Parcel);
                public constructor(param0: android.os.Parcelable);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;
            }
            export class OnPreferenceChangeListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.preference.Preference$OnPreferenceChangeListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onPreferenceChange(param0: android.preference.Preference, param1: javalangObject): boolean;
                });

                public onPreferenceChange(param0: android.preference.Preference, param1: javalangObject): boolean;
            }
            export class OnPreferenceClickListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.preference.Preference$OnPreferenceClickListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onPreferenceClick(param0: android.preference.Preference): boolean;
                });

                public onPreferenceClick(param0: android.preference.Preference): boolean;
            }
        }
    }
}

/// <reference path="./android.app.Fragment.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./android.preference.Preference.d.ts" />
/// <reference path="./android.preference.PreferenceFragment.d.ts" />
/// <reference path="./android.preference.PreferenceManager.d.ts" />
/// <reference path="./android.preference.PreferenceScreen.d.ts" />
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
/// <reference path="./android.widget.ListView.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module preference {
        export abstract class PreferenceActivity extends android.app.ListActivity implements android.preference.PreferenceFragment.OnPreferenceStartFragmentCallback {
            public static EXTRA_NO_HEADERS: string;
            public static EXTRA_SHOW_FRAGMENT: string;
            public static EXTRA_SHOW_FRAGMENT_ARGUMENTS: string;
            public static EXTRA_SHOW_FRAGMENT_SHORT_TITLE: string;
            public static EXTRA_SHOW_FRAGMENT_TITLE: string;
            public static HEADER_ID_UNDEFINED: number;

            public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;

            public isMultiPane(): boolean;

            public isValidFragment(param0: string): boolean;

            public startPreferenceFragment(param0: android.app.Fragment, param1: boolean): void;

            public onSaveInstanceState(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;

            public onSearchRequested(): boolean;

            public onPreferenceTreeClick(param0: android.preference.PreferenceScreen, param1: android.preference.Preference): boolean;

            public setPreferenceScreen(param0: android.preference.PreferenceScreen): void;

            public onActivityResult(param0: number, param1: number, param2: android.content.Intent): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onCreatePanelView(param0: number): android.view.View;

            public switchToHeader(param0: android.preference.PreferenceActivity.Header): void;

            public showBreadCrumbs(param0: string, param1: string): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;

            public onDetachedFromWindow(): void;

            public onBuildStartFragmentIntent(param0: string, param1: android.os.Bundle, param2: number, param3: number): android.content.Intent;

            public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;

            public onGetInitialHeader(): android.preference.PreferenceActivity.Header;

            public constructor();

            public onRestoreInstanceState(param0: android.os.Bundle): void;

            public onCreateView(param0: string, param1: android.content.Context, param2: android.util.AttributeSet): android.view.View;

            public constructor(param0: android.content.Context, param1: number);

            public onRestoreInstanceState(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;

            public onNewIntent(param0: android.content.Intent): void;

            public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;

            public onCreate(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;

            public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;

            public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;

            public onWindowFocusChanged(param0: boolean): void;

            public onCreate(param0: android.os.Bundle): void;

            public hasHeaders(): boolean;

            public startWithFragment(param0: string, param1: android.os.Bundle, param2: android.app.Fragment, param3: number): void;

            public loadHeadersFromResource(param0: number, param1: javautilList): void;

            public onContentChanged(): void;

            public findPreference(param0: string): android.preference.Preference;

            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public setParentTitle(param0: string, param1: string, param2: android.view.View.OnClickListener): void;

            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;

            public getPreferenceManager(): android.preference.PreferenceManager;

            public getPreferenceScreen(): android.preference.PreferenceScreen;

            public onDestroy(): void;

            public onPanelClosed(param0: number, param1: android.view.Menu): void;

            public onIsHidingHeaders(): boolean;

            public onTrimMemory(param0: number): void;

            public onActionModeFinished(param0: android.view.ActionMode): void;

            public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);

            public startPreferencePanel(param0: string, param1: android.os.Bundle, param2: number, param3: string, param4: android.app.Fragment, param5: number): void;

            public onStop(): void;

            public onActionModeStarted(param0: android.view.ActionMode): void;

            public startWithFragment(param0: string, param1: android.os.Bundle, param2: android.app.Fragment, param3: number, param4: number, param5: number): void;

            public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;

            public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;

            public onMenuOpened(param0: number, param1: android.view.Menu): boolean;

            public onListItemClick(param0: android.widget.ListView, param1: android.view.View, param2: number, param3: number): void;

            public addPreferencesFromIntent(param0: android.content.Intent): void;

            public onPreferenceStartFragment(param0: android.preference.PreferenceFragment, param1: android.preference.Preference): boolean;

            public onSearchRequested(param0: android.view.SearchEvent): boolean;

            public finishPreferencePanel(param0: android.app.Fragment, param1: number, param2: android.content.Intent): void;

            public onGetNewHeader(): android.preference.PreferenceActivity.Header;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;

            public onIsMultiPane(): boolean;

            public onHeaderClick(param0: android.preference.PreferenceActivity.Header, param1: number): void;

            public onSaveInstanceState(param0: android.os.Bundle): void;

            public switchToHeader(param0: string, param1: android.os.Bundle): void;

            public constructor(param0: android.content.Context);

            public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;

            public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;

            public onAttachedToWindow(): void;

            public setListFooter(param0: android.view.View): void;

            public onBuildHeaders(param0: javautilList): void;

            public invalidateHeaders(): void;

            public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;

            public addPreferencesFromResource(param0: number): void;
        }
        export module PreferenceActivity {
            export class Header extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public breadCrumbShortTitle: string;
                public breadCrumbShortTitleRes: number;
                public breadCrumbTitle: string;
                public breadCrumbTitleRes: number;
                public extras: android.os.Bundle;
                public fragment: string;
                public fragmentArguments: android.os.Bundle;
                public iconRes: number;
                public id: number;
                public intent: android.content.Intent;
                public summary: string;
                public summaryRes: number;
                public title: string;
                public titleRes: number;

                public getBreadCrumbTitle(param0: android.content.res.Resources): string;

                public getSummary(param0: android.content.res.Resources): string;

                public getTitle(param0: android.content.res.Resources): string;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getBreadCrumbShortTitle(param0: android.content.res.Resources): string;

                public describeContents(): number;

                public readFromParcel(param0: android.os.Parcel): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.preference.Preference.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
declare module android {
    export module preference {
        export class PreferenceCategory extends android.preference.PreferenceGroup {
            public shouldDisableDependents(): boolean;

            public isEnabled(): boolean;

            public onPrepareAddPreference(param0: android.preference.Preference): boolean;

            public constructor(param0: android.content.Context);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
        }
    }
}

/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.preference.Preference.d.ts" />
/// <reference path="./android.preference.PreferenceFragment.d.ts" />
/// <reference path="./android.preference.PreferenceManager.d.ts" />
/// <reference path="./android.preference.PreferenceScreen.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module preference {
        export abstract class PreferenceFragment extends android.app.Fragment {
            public findPreference(param0: string): android.preference.Preference;

            public onStart(): void;

            public onCreateView(param0: android.view.LayoutInflater, param1: android.view.ViewGroup, param2: android.os.Bundle): android.view.View;

            public addPreferencesFromIntent(param0: android.content.Intent): void;

            public getPreferenceManager(): android.preference.PreferenceManager;

            public getPreferenceScreen(): android.preference.PreferenceScreen;

            public constructor();

            public onDestroy(): void;

            public onActivityCreated(param0: android.os.Bundle): void;

            public onPreferenceTreeClick(param0: android.preference.PreferenceScreen, param1: android.preference.Preference): boolean;

            public setPreferenceScreen(param0: android.preference.PreferenceScreen): void;

            public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;

            public onTrimMemory(param0: number): void;

            public onActivityResult(param0: number, param1: number, param2: android.content.Intent): void;

            public onSaveInstanceState(param0: android.os.Bundle): void;

            public onDestroyView(): void;

            public onCreate(param0: android.os.Bundle): void;

            public onStop(): void;

            public addPreferencesFromResource(param0: number): void;
        }
        export module PreferenceFragment {
            export class OnPreferenceStartFragmentCallback extends javalangObject {
                /**
                 * Constructs a new instance of the android.preference.PreferenceFragment$OnPreferenceStartFragmentCallback interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onPreferenceStartFragment(param0: android.preference.PreferenceFragment, param1: android.preference.Preference): boolean;
                });

                public onPreferenceStartFragment(param0: android.preference.PreferenceFragment, param1: android.preference.Preference): boolean;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.preference.Preference.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module preference {
        export abstract class PreferenceGroup extends android.preference.Preference {
            public findPreference(param0: string): android.preference.Preference;

            public setOrderingAsAdded(param0: boolean): void;

            public getPreference(param0: number): android.preference.Preference;

            public onPrepareAddPreference(param0: android.preference.Preference): boolean;

            public onPrepareForRemoval(): void;

            public notifyDependencyChange(param0: boolean): void;

            public removePreference(param0: android.preference.Preference): boolean;

            public addItemFromInflater(param0: android.preference.Preference): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public dispatchSaveInstanceState(param0: android.os.Bundle): void;

            public addPreference(param0: android.preference.Preference): boolean;

            public dispatchRestoreInstanceState(param0: android.os.Bundle): void;

            public isOnSameScreenAsChildren(): boolean;

            public isOrderingAsAdded(): boolean;

            public constructor(param0: android.content.Context);

            public removeAll(): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public getPreferenceCount(): number;

            public onAttachedToActivity(): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.SharedPreferences.d.ts" />
/// <reference path="./android.preference.Preference.d.ts" />
/// <reference path="./android.preference.PreferenceScreen.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module preference {
        export class PreferenceManager extends javalangObject {
            public static KEY_HAS_SET_DEFAULT_VALUES: string;
            public static METADATA_KEY_PREFERENCES: string;

            public getSharedPreferencesMode(): number;

            public findPreference(param0: string): android.preference.Preference;

            public createPreferenceScreen(param0: android.content.Context): android.preference.PreferenceScreen;

            public setSharedPreferencesMode(param0: number): void;

            public setSharedPreferencesName(param0: string): void;

            public static setDefaultValues(param0: android.content.Context, param1: number, param2: boolean): void;
            public static setDefaultValues(param0: android.content.Context, param1: string, param2: number, param3: number, param4: boolean): void;

            public getSharedPreferencesName(): string;

            public static getDefaultSharedPreferences(param0: android.content.Context): android.content.SharedPreferences;

            public getSharedPreferences(): android.content.SharedPreferences;
        }
        export module PreferenceManager {
            export class OnActivityDestroyListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.preference.PreferenceManager$OnActivityDestroyListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onActivityDestroy(): void;
                });

                public onActivityDestroy(): void;
            }
            export class OnActivityResultListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.preference.PreferenceManager$OnActivityResultListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onActivityResult(param0: number, param1: number, param2: android.content.Intent): boolean;
                });

                public onActivityResult(param0: number, param1: number, param2: android.content.Intent): boolean;
            }
            export class OnActivityStopListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.preference.PreferenceManager$OnActivityStopListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onActivityStop(): void;
                });

                public onActivityStop(): void;
            }
        }
    }
}

/// <reference path="./android.app.Dialog.d.ts" />
/// <reference path="./android.content.DialogInterface.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.AdapterView.d.ts" />
/// <reference path="./android.widget.ListAdapter.d.ts" />
/// <reference path="./android.widget.ListView.d.ts" />
declare module android {
    export module preference {
        export class PreferenceScreen extends android.preference.PreferenceGroup implements android.widget.AdapterView.OnItemClickListener, android.content.DialogInterface.OnDismissListener {
            public onClick(): void;

            public onRestoreInstanceState(param0: android.os.Parcelable): void;

            public getRootAdapter(): android.widget.ListAdapter;

            public isOnSameScreenAsChildren(): boolean;

            public getDialog(): android.app.Dialog;

            public onDismiss(param0: android.content.DialogInterface): void;

            public onCreateRootAdapter(): android.widget.ListAdapter;

            public bind(param0: android.widget.ListView): void;

            public onItemClick(param0: android.widget.AdapterView, param1: android.view.View, param2: number, param3: number): void;

            public onSaveInstanceState(): android.os.Parcelable;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.preference.PreferenceManager.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module preference {
        export class RingtonePreference extends android.preference.Preference implements android.preference.PreferenceManager.OnActivityResultListener {
            public onClick(): void;

            public onPrepareRingtonePickerIntent(param0: android.content.Intent): void;

            public getRingtoneType(): number;

            public setRingtoneType(param0: number): void;

            public onSaveRingtone(param0: android.net.Uri): void;

            public onRestoreRingtone(): android.net.Uri;

            public onAttachedToHierarchy(param0: android.preference.PreferenceManager): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public setShowDefault(param0: boolean): void;

            public onGetDefaultValue(param0: android.content.res.TypedArray, param1: number): javalangObject;

            public setShowSilent(param0: boolean): void;

            public onActivityResult(param0: number, param1: number, param2: android.content.Intent): boolean;

            public constructor(param0: android.content.Context);

            public getShowDefault(): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public getShowSilent(): boolean;

            public onSetInitialValue(param0: boolean, param1: javalangObject): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module preference {
        export class SwitchPreference extends android.preference.TwoStatePreference {
            public onBindView(param0: android.view.View): void;

            public setSwitchTextOn(param0: string): void;

            public getSwitchTextOff(): string;

            public setSwitchTextOff(param0: number): void;

            public constructor(param0: android.content.Context);

            public setSwitchTextOn(param0: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public setSwitchTextOff(param0: string): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public getSwitchTextOn(): string;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module preference {
        export abstract class TwoStatePreference extends android.preference.Preference {
            public onClick(): void;

            public onRestoreInstanceState(param0: android.os.Parcelable): void;

            public setChecked(param0: boolean): void;

            public getSummaryOff(): string;

            public isChecked(): boolean;

            public setSummaryOn(param0: string): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public setSummaryOff(param0: number): void;

            public shouldDisableDependents(): boolean;

            public onGetDefaultValue(param0: android.content.res.TypedArray, param1: number): javalangObject;

            public setSummaryOff(param0: string): void;

            public constructor(param0: android.content.Context);

            public getDisableDependentsState(): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public setDisableDependentsState(param0: boolean): void;

            public getSummaryOn(): string;

            public onSaveInstanceState(): android.os.Parcelable;

            public setSummaryOn(param0: number): void;

            public onSetInitialValue(param0: boolean, param1: javalangObject): void;
        }
    }
}
