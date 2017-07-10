/// <reference path="./android.app.FragmentTransaction.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.SpinnerAdapter.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module app {
        export abstract class ActionBar extends javalangObject {
            public static DISPLAY_HOME_AS_UP: number;
            public static DISPLAY_SHOW_CUSTOM: number;
            public static DISPLAY_SHOW_HOME: number;
            public static DISPLAY_SHOW_TITLE: number;
            public static DISPLAY_USE_LOGO: number;
            public static NAVIGATION_MODE_LIST: number;
            public static NAVIGATION_MODE_STANDARD: number;
            public static NAVIGATION_MODE_TABS: number;

            public addOnMenuVisibilityListener(param0: android.app.ActionBar.OnMenuVisibilityListener): void;

            public setTitle(param0: string): void;

            public setNavigationMode(param0: number): void;

            public setSubtitle(param0: number): void;

            public setSplitBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;

            public addTab(param0: android.app.ActionBar.Tab): void;

            public setHomeActionContentDescription(param0: string): void;

            public getSelectedNavigationIndex(): number;

            public getSelectedTab(): android.app.ActionBar.Tab;

            public removeOnMenuVisibilityListener(param0: android.app.ActionBar.OnMenuVisibilityListener): void;

            public setLogo(param0: number): void;

            public getCustomView(): android.view.View;

            public setHomeActionContentDescription(param0: number): void;

            public setDisplayHomeAsUpEnabled(param0: boolean): void;

            public hide(): void;

            public isShowing(): boolean;

            public getNavigationMode(): number;

            public setCustomView(param0: android.view.View, param1: android.app.ActionBar.LayoutParams): void;

            public getTitle(): string;

            public getSubtitle(): string;

            public getHeight(): number;

            public setElevation(param0: number): void;

            public setHideOnContentScrollEnabled(param0: boolean): void;

            public addTab(param0: android.app.ActionBar.Tab, param1: boolean): void;

            public constructor();

            public setHideOffset(param0: number): void;

            public setHomeAsUpIndicator(param0: number): void;

            public addTab(param0: android.app.ActionBar.Tab, param1: number): void;

            public setCustomView(param0: number): void;

            public addTab(param0: android.app.ActionBar.Tab, param1: number, param2: boolean): void;

            public setSelectedNavigationItem(param0: number): void;

            public getNavigationItemCount(): number;

            public getDisplayOptions(): number;

            public show(): void;

            public newTab(): android.app.ActionBar.Tab;

            public removeAllTabs(): void;

            public setListNavigationCallbacks(param0: android.widget.SpinnerAdapter, param1: android.app.ActionBar.OnNavigationListener): void;

            public setDisplayOptions(param0: number): void;

            public setDisplayShowTitleEnabled(param0: boolean): void;

            public setLogo(param0: android.graphics.drawable.Drawable): void;

            public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;

            public setDisplayShowCustomEnabled(param0: boolean): void;

            public setDisplayUseLogoEnabled(param0: boolean): void;

            public removeTab(param0: android.app.ActionBar.Tab): void;

            public setCustomView(param0: android.view.View): void;

            public getThemedContext(): android.content.Context;

            public getElevation(): number;

            public setIcon(param0: number): void;

            public setDisplayOptions(param0: number, param1: number): void;

            public setHomeAsUpIndicator(param0: android.graphics.drawable.Drawable): void;

            public setTitle(param0: number): void;

            public setDisplayShowHomeEnabled(param0: boolean): void;

            public removeTabAt(param0: number): void;

            public selectTab(param0: android.app.ActionBar.Tab): void;

            public getHideOffset(): number;

            public setSubtitle(param0: string): void;

            public isHideOnContentScrollEnabled(): boolean;

            public getTabAt(param0: number): android.app.ActionBar.Tab;

            public setHomeButtonEnabled(param0: boolean): void;

            public setIcon(param0: android.graphics.drawable.Drawable): void;

            public setStackedBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;

            public getTabCount(): number;
        }
        export module ActionBar {
            export class LayoutParams extends android.view.ViewGroup.MarginLayoutParams {
                public gravity: number;

                public constructor(param0: number, param1: number);
                public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
                public constructor(param0: android.view.ViewGroup.LayoutParams);
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                public constructor(param0: number);
                public constructor(param0: android.app.ActionBar.LayoutParams);
            }
            export class OnMenuVisibilityListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.app.ActionBar$OnMenuVisibilityListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onMenuVisibilityChanged(param0: boolean): void;
                });

                public onMenuVisibilityChanged(param0: boolean): void;
            }
            export class OnNavigationListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.app.ActionBar$OnNavigationListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onNavigationItemSelected(param0: number, param1: number): boolean;
                });

                public onNavigationItemSelected(param0: number, param1: number): boolean;
            }
            export abstract class Tab extends javalangObject {
                public static INVALID_POSITION: number;

                public setCustomView(param0: number): android.app.ActionBar.Tab;

                public setText(param0: string): android.app.ActionBar.Tab;

                public setTag(param0: javalangObject): android.app.ActionBar.Tab;

                public setTabListener(param0: android.app.ActionBar.TabListener): android.app.ActionBar.Tab;

                public getContentDescription(): string;

                public setIcon(param0: android.graphics.drawable.Drawable): android.app.ActionBar.Tab;

                public select(): void;

                public getPosition(): number;

                public setContentDescription(param0: number): android.app.ActionBar.Tab;
                public setContentDescription(param0: string): android.app.ActionBar.Tab;

                public constructor();

                public getText(): string;

                public getTag(): javalangObject;

                public setText(param0: number): android.app.ActionBar.Tab;

                public setCustomView(param0: android.view.View): android.app.ActionBar.Tab;

                public getCustomView(): android.view.View;

                public getIcon(): android.graphics.drawable.Drawable;

                public setIcon(param0: number): android.app.ActionBar.Tab;
            }
            export class TabListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.app.ActionBar$TabListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onTabSelected(param0: android.app.ActionBar.Tab, param1: android.app.FragmentTransaction): void;
                    onTabUnselected(param0: android.app.ActionBar.Tab, param1: android.app.FragmentTransaction): void;
                    onTabReselected(param0: android.app.ActionBar.Tab, param1: android.app.FragmentTransaction): void;
                });

                public onTabUnselected(param0: android.app.ActionBar.Tab, param1: android.app.FragmentTransaction): void;

                public onTabSelected(param0: android.app.ActionBar.Tab, param1: android.app.FragmentTransaction): void;

                public onTabReselected(param0: android.app.ActionBar.Tab, param1: android.app.FragmentTransaction): void;
            }
        }
    }
}

import javalangRunnable = java.lang.Runnable;
import javaioFileDescriptor = java.io.FileDescriptor;
import javaioPrintWriter = java.io.PrintWriter;
/// <reference path="./android.app.ActionBar.d.ts" />
/// <reference path="./android.app.Application.d.ts" />
/// <reference path="./android.app.Dialog.d.ts" />
/// <reference path="./android.app.Fragment.d.ts" />
/// <reference path="./android.app.FragmentManager.d.ts" />
/// <reference path="./android.app.LoaderManager.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.app.SharedElementCallback.d.ts" />
/// <reference path="./android.app.TaskStackBuilder.d.ts" />
/// <reference path="./android.app.VoiceInteractor.d.ts" />
/// <reference path="./android.app.assist.AssistContent.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.IntentSender.d.ts" />
/// <reference path="./android.content.SharedPreferences.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.media.session.MediaController.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./android.transition.Scene.d.ts" />
/// <reference path="./android.transition.TransitionManager.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuInflater.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.SearchEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.Window.d.ts" />
/// <reference path="./android.view.WindowManager.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.widget.Toolbar.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export class Activity extends android.view.ContextThemeWrapper implements android.view.LayoutInflater.Factory2, android.view.Window.Callback, android.view.KeyEvent.Callback, android.view.View.OnCreateContextMenuListener, android.content.ComponentCallbacks2 {
            public static DEFAULT_KEYS_DIALER: number;
            public static DEFAULT_KEYS_DISABLE: number;
            public static DEFAULT_KEYS_SEARCH_GLOBAL: number;
            public static DEFAULT_KEYS_SEARCH_LOCAL: number;
            public static DEFAULT_KEYS_SHORTCUT: number;
            public static FOCUSED_STATE_SET: native.Array<number>;
            public static RESULT_CANCELED: number;
            public static RESULT_FIRST_USER: number;
            public static RESULT_OK: number;

            public getLastNonConfigurationInstance(): javalangObject;

            public finish(): void;

            public isTaskRoot(): boolean;

            public onChildTitleChanged(param0: android.app.Activity, param1: string): void;

            public getLayoutInflater(): android.view.LayoutInflater;

            public getApplication(): android.app.Application;

            public onSaveInstanceState(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;

            public getCallingPackage(): string;

            public isChangingConfigurations(): boolean;

            public startNextMatchingActivity(param0: android.content.Intent, param1: android.os.Bundle): boolean;

            public setProgressBarVisibility(param0: boolean): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;

            public requestVisibleBehind(param0: boolean): boolean;

            public setExitSharedElementCallback(param0: android.app.SharedElementCallback): void;

            public getPreferences(param0: number): android.content.SharedPreferences;

            public onRestoreInstanceState(param0: android.os.Bundle): void;

            public onPostResume(): void;

            public startActivityFromFragment(param0: android.app.Fragment, param1: android.content.Intent, param2: number, param3: android.os.Bundle): void;

            public onRestoreInstanceState(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;

            public onPostCreate(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;

            public finishAffinity(): void;

            public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;

            public getLocalClassName(): string;

            public setMediaController(param0: android.media.session.MediaController): void;

            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;

            public isDestroyed(): boolean;

            public getSystemService(param0: string): javalangObject;

            public onDestroy(): void;

            public reportFullyDrawn(): void;

            public runOnUiThread(param0: javalangRunnable): void;

            public getParentActivityIntent(): android.content.Intent;

            public onLowMemory(): void;

            public getActionBar(): android.app.ActionBar;

            public openOptionsMenu(): void;

            public startActivity(param0: android.content.Intent, param1: android.os.Bundle): void;

            public unregisterForContextMenu(param0: android.view.View): void;

            public onTrimMemory(param0: number): void;

            public onStateNotSaved(): void;

            public onActionModeFinished(param0: android.view.ActionMode): void;

            public showLockTaskEscapeMessage(): void;

            public onOptionsItemSelected(param0: android.view.MenuItem): boolean;

            public onConfigurationChanged(param0: android.content.res.Configuration): void;

            public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;

            public setResult(param0: number): void;

            public stopManagingCursor(param0: android.database.Cursor): void;

            public getSystemService(param0: javalangClass): javalangObject;

            public startIntentSender(param0: android.content.IntentSender, param1: android.content.Intent, param2: number, param3: number, param4: number): void;

            public setVisible(param0: boolean): void;

            public dismissDialog(param0: number): void;

            public onNavigateUpFromChild(param0: android.app.Activity): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public getMediaController(): android.media.session.MediaController;

            public setContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public setFinishOnTouchOutside(param0: boolean): void;

            public getReferrer(): android.net.Uri;

            public isFinishing(): boolean;

            public getVoiceInteractor(): android.app.VoiceInteractor;

            public startActivityFromFragment(param0: android.app.Fragment, param1: android.content.Intent, param2: number): void;

            public startIntentSender(param0: android.content.IntentSender, param1: android.content.Intent, param2: number, param3: number, param4: number, param5: android.os.Bundle): void;

            public shouldUpRecreateTask(param0: android.content.Intent): boolean;

            public setImmersive(param0: boolean): void;

            public getCallingActivity(): android.content.ComponentName;

            public onCreateDialog(param0: number, param1: android.os.Bundle): android.app.Dialog;

            public findViewById(param0: number): android.view.View;

            public requestPermissions(param0: native.Array<string>, param1: number): void;

            public isChild(): boolean;

            public onSearchRequested(): boolean;

            public startIntentSenderForResult(param0: android.content.IntentSender, param1: number, param2: android.content.Intent, param3: number, param4: number, param5: number, param6: android.os.Bundle): void;

            public startSearch(param0: string, param1: boolean, param2: android.os.Bundle, param3: boolean): void;

            public onActivityResult(param0: number, param1: number, param2: android.content.Intent): void;

            public onActivityReenter(param0: number, param1: android.content.Intent): void;

            public onCreatePanelView(param0: number): android.view.View;

            public setDefaultKeyMode(param0: number): void;

            public onKeyShortcut(param0: number, param1: android.view.KeyEvent): boolean;

            public getTitle(): string;

            public startActivities(param0: native.Array<android.content.Intent>): void;

            public getSearchEvent(): android.view.SearchEvent;

            public getVolumeControlStream(): number;

            public getParent(): android.app.Activity;

            public takeKeyEvents(param0: boolean): void;

            public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;

            public onTrackballEvent(param0: android.view.MotionEvent): boolean;

            public onNewIntent(param0: android.content.Intent): void;

            public getCurrentFocus(): android.view.View;

            public onWindowFocusChanged(param0: boolean): void;

            public finishFromChild(param0: android.app.Activity): void;

            public startActivityIfNeeded(param0: android.content.Intent, param1: number, param2: android.os.Bundle): boolean;

            public onUserInteraction(): void;

            public onPrepareDialog(param0: number, param1: android.app.Dialog): void;

            public removeDialog(param0: number): void;

            public getIntent(): android.content.Intent;

            public postponeEnterTransition(): void;

            public closeContextMenu(): void;

            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;

            public setVolumeControlStream(param0: number): void;

            public getLoaderManager(): android.app.LoaderManager;

            public onPanelClosed(param0: number, param1: android.view.Menu): void;

            public navigateUpTo(param0: android.content.Intent): boolean;

            public managedQuery(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): android.database.Cursor;

            public finishAndRemoveTask(): void;

            public getWindowManager(): android.view.WindowManager;

            public onPause(): void;

            public onStop(): void;

            public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;

            public onProvideAssistContent(param0: android.app.assist.AssistContent): void;

            public navigateUpToFromChild(param0: android.app.Activity, param1: android.content.Intent): boolean;

            public addContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public setResult(param0: number, param1: android.content.Intent): void;

            public finishAfterTransition(): void;

            public onTouchEvent(param0: android.view.MotionEvent): boolean;

            public startActivityFromChild(param0: android.app.Activity, param1: android.content.Intent, param2: number, param3: android.os.Bundle): void;

            public setIntent(param0: android.content.Intent): void;

            public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;

            public startActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;

            public startActivity(param0: android.content.Intent): void;

            public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;

            public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;

            public releaseInstance(): boolean;

            public startLockTask(): void;

            public onApplyThemeResource(param0: android.content.res.Resources.Theme, param1: number, param2: boolean): void;

            public finishActivityFromChild(param0: android.app.Activity, param1: number): void;

            public onStart(): void;

            public setContentView(param0: android.view.View): void;

            public showDialog(param0: number): void;

            public finishActivity(param0: number): void;

            public startIntentSenderFromChild(param0: android.app.Activity, param1: android.content.IntentSender, param2: number, param3: android.content.Intent, param4: number, param5: number, param6: number, param7: android.os.Bundle): void;

            public createPendingResult(param0: number, param1: android.content.Intent, param2: number): android.app.PendingIntent;

            public getComponentName(): android.content.ComponentName;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public setFeatureDrawableUri(param0: number, param1: android.net.Uri): void;

            public startPostponedEnterTransition(): void;

            public startIntentSenderForResult(param0: android.content.IntentSender, param1: number, param2: android.content.Intent, param3: number, param4: number, param5: number): void;

            public setContentView(param0: number): void;

            public onDetachedFromWindow(): void;

            public setEnterSharedElementCallback(param0: android.app.SharedElementCallback): void;

            public showDialog(param0: number, param1: android.os.Bundle): boolean;

            public constructor();

            public onCreateNavigateUpTaskStack(param0: android.app.TaskStackBuilder): void;

            public startActivityFromChild(param0: android.app.Activity, param1: android.content.Intent, param2: number): void;

            public setProgressBarIndeterminate(param0: boolean): void;

            public requestWindowFeature(param0: number): boolean;

            public onNavigateUp(): boolean;

            public setProgressBarIndeterminateVisibility(param0: boolean): void;

            public closeOptionsMenu(): void;

            public startActivityForResult(param0: android.content.Intent, param1: number, param2: android.os.Bundle): void;

            public getRequestedOrientation(): number;

            public onCreate(param0: android.os.Bundle): void;

            public shouldShowRequestPermissionRationale(param0: string): boolean;

            public setActionBar(param0: android.widget.Toolbar): void;

            public onProvideAssistData(param0: android.os.Bundle): void;

            public getFragmentManager(): android.app.FragmentManager;

            public getMenuInflater(): android.view.MenuInflater;

            public registerForContextMenu(param0: android.view.View): void;

            public overridePendingTransition(param0: number, param1: number): void;

            public onAttachFragment(param0: android.app.Fragment): void;

            public onCreateOptionsMenu(param0: android.view.Menu): boolean;

            public onBackPressed(): void;

            public onOptionsMenuClosed(param0: android.view.Menu): void;

            public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);

            public onRestart(): void;

            public getTaskId(): number;

            public onCreateDescription(): string;

            public onActionModeStarted(param0: android.view.ActionMode): void;

            public startActivityIfNeeded(param0: android.content.Intent, param1: number): boolean;

            public setTaskDescription(param0: android.app.ActivityManager.TaskDescription): void;

            public onMenuOpened(param0: number, param1: android.view.Menu): boolean;

            public onProvideReferrer(): android.net.Uri;

            public getChangingConfigurations(): number;

            public startManagingCursor(param0: android.database.Cursor): void;

            public onSearchRequested(param0: android.view.SearchEvent): boolean;

            public onTitleChanged(param0: string, param1: number): void;

            public onPrepareDialog(param0: number, param1: android.app.Dialog, param2: android.os.Bundle): void;

            public onEnterAnimationComplete(): void;

            public setFeatureDrawableAlpha(param0: number, param1: number): void;

            public constructor(param0: android.content.Context);

            public startActivityForResult(param0: android.content.Intent, param1: number): void;

            public dump(param0: string, param1: javaioFileDescriptor, param2: javaioPrintWriter, param3: native.Array<string>): void;

            public onPrepareOptionsMenu(param0: android.view.Menu): boolean;

            public setTitle(param0: string): void;

            public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;

            public setFeatureDrawableResource(param0: number, param1: number): void;

            public getTitleColor(): number;

            public onVisibleBehindCanceled(): void;

            public setProgress(param0: number): void;

            public onPostCreate(param0: android.os.Bundle): void;

            public setContentTransitionManager(param0: android.transition.TransitionManager): void;

            public isImmersive(): boolean;

            public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;

            public isVoiceInteractionRoot(): boolean;

            public getWindow(): android.view.Window;

            public moveTaskToBack(param0: boolean): boolean;

            public onResume(): void;

            public onCreateView(param0: string, param1: android.content.Context, param2: android.util.AttributeSet): android.view.View;

            public isVoiceInteraction(): boolean;

            public onRetainNonConfigurationInstance(): javalangObject;

            public constructor(param0: android.content.Context, param1: number);

            public onCreateDialog(param0: number): android.app.Dialog;

            public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;

            public onCreate(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;

            public hasWindowFocus(): boolean;

            public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;

            public startIntentSenderFromChild(param0: android.app.Activity, param1: android.content.IntentSender, param2: number, param3: android.content.Intent, param4: number, param5: number, param6: number): void;

            public startActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;

            public onContentChanged(): void;

            public invalidateOptionsMenu(): void;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public setTitleColor(param0: number): void;

            public startNextMatchingActivity(param0: android.content.Intent): boolean;

            public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;

            public onPrepareNavigateUpTaskStack(param0: android.app.TaskStackBuilder): void;

            public onContextItemSelected(param0: android.view.MenuItem): boolean;

            public setFeatureDrawable(param0: number, param1: android.graphics.drawable.Drawable): void;

            public getContentScene(): android.transition.Scene;

            public setRequestedOrientation(param0: number): void;

            public openContextMenu(param0: android.view.View): void;

            public showAssist(param0: android.os.Bundle): boolean;

            public startActivities(param0: native.Array<android.content.Intent>, param1: android.os.Bundle): void;

            public setSecondaryProgress(param0: number): void;

            public recreate(): void;

            public setTitle(param0: number): void;

            public getContentTransitionManager(): android.transition.TransitionManager;

            public onContextMenuClosed(param0: android.view.Menu): void;

            public onSaveInstanceState(param0: android.os.Bundle): void;

            public onUserLeaveHint(): void;

            public stopLockTask(): void;

            public onAttachedToWindow(): void;

            public triggerSearch(param0: string, param1: android.os.Bundle): void;

            public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;

            public onCreateThumbnail(param0: android.graphics.Bitmap, param1: android.graphics.Canvas): boolean;
        }
    }
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.LocalActivityManager.d.ts" />
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
    export module app {
        export class ActivityGroup extends android.app.Activity {
            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public constructor(param0: boolean);

            public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;

            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;

            public onDestroy(): void;

            public onPanelClosed(param0: number, param1: android.view.Menu): void;

            public onSaveInstanceState(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;

            public onSearchRequested(): boolean;

            public onTrimMemory(param0: number): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onActionModeFinished(param0: android.view.ActionMode): void;

            public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);

            public onPause(): void;

            public onCreatePanelView(param0: number): android.view.View;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;

            public onStop(): void;

            public onDetachedFromWindow(): void;

            public onActionModeStarted(param0: android.view.ActionMode): void;

            public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;

            public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;

            public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;

            public onMenuOpened(param0: number, param1: android.view.Menu): boolean;

            public onResume(): void;

            public onSearchRequested(param0: android.view.SearchEvent): boolean;

            public constructor();

            public getCurrentActivity(): android.app.Activity;

            public onCreateView(param0: string, param1: android.content.Context, param2: android.util.AttributeSet): android.view.View;

            public constructor(param0: android.content.Context, param1: number);

            public getLocalActivityManager(): android.app.LocalActivityManager;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;

            public onCreate(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;

            public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;

            public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;

            public onSaveInstanceState(param0: android.os.Bundle): void;

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

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.pm.ConfigurationInfo.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.Size.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module app {
        export class ActivityManager extends javalangObject {
            public static ACTION_REPORT_HEAP_LIMIT: string;
            public static LOCK_TASK_MODE_LOCKED: number;
            public static LOCK_TASK_MODE_NONE: number;
            public static LOCK_TASK_MODE_PINNED: number;
            public static META_HOME_ALTERNATE: string;
            public static MOVE_TASK_NO_USER_ACTION: number;
            public static MOVE_TASK_WITH_HOME: number;
            public static RECENT_IGNORE_UNAVAILABLE: number;
            public static RECENT_WITH_EXCLUDED: number;

            public clearApplicationUserData(): boolean;

            public getAppTasks(): javautilList;

            public getMemoryClass(): number;

            public moveTaskToFront(param0: number, param1: number): void;

            public setWatchHeapLimit(param0: number): void;

            public clearWatchHeapLimit(): void;

            public isInLockTaskMode(): boolean;

            public getRecentTasks(param0: number, param1: number): javautilList;

            public getProcessMemoryInfo(param0: native.Array<number>): native.Array<android.os.Debug.MemoryInfo>;

            public getLargeMemoryClass(): number;

            public getProcessesInErrorState(): javautilList;

            public getLauncherLargeIconDensity(): number;

            public getRunningTasks(param0: number): javautilList;

            public static getMyMemoryState(param0: android.app.ActivityManager.RunningAppProcessInfo): void;

            public restartPackage(param0: string): void;

            public addAppTask(param0: android.app.Activity, param1: android.content.Intent, param2: android.app.ActivityManager.TaskDescription, param3: android.graphics.Bitmap): number;

            public killBackgroundProcesses(param0: string): void;

            public static isUserAMonkey(): boolean;

            public getRunningServiceControlPanel(param0: android.content.ComponentName): android.app.PendingIntent;

            public static isRunningInTestHarness(): boolean;

            public getLockTaskModeState(): number;

            public getAppTaskThumbnailSize(): android.util.Size;

            public isLowRamDevice(): boolean;

            public dumpPackageState(param0: javaioFileDescriptor, param1: string): void;

            public getRunningServices(param0: number): javautilList;

            public getLauncherLargeIconSize(): number;

            public getDeviceConfigurationInfo(): android.content.pm.ConfigurationInfo;

            public getMemoryInfo(param0: android.app.ActivityManager.MemoryInfo): void;

            public getRunningAppProcesses(): javautilList;

            public moveTaskToFront(param0: number, param1: number, param2: android.os.Bundle): void;
        }
        export module ActivityManager {
            export class AppTask extends javalangObject {
                public finishAndRemoveTask(): void;

                public moveToFront(): void;

                public getTaskInfo(): android.app.ActivityManager.RecentTaskInfo;

                public setExcludeFromRecents(param0: boolean): void;

                public startActivity(param0: android.content.Context, param1: android.content.Intent, param2: android.os.Bundle): void;
            }
            export class MemoryInfo extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public availMem: number;
                public lowMemory: boolean;
                public threshold: number;
                public totalMem: number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public readFromParcel(param0: android.os.Parcel): void;

                public constructor();
            }
            export class ProcessErrorStateInfo extends javalangObject implements android.os.Parcelable {
                public static CRASHED: number;
                public static CREATOR: android.os.Parcelable.Creator;
                public static NOT_RESPONDING: number;
                public static NO_ERROR: number;
                public condition: number;
                public crashData: native.Array<number>;
                public longMsg: string;
                public pid: number;
                public processName: string;
                public shortMsg: string;
                public stackTrace: string;
                public tag: string;
                public uid: number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public readFromParcel(param0: android.os.Parcel): void;

                public constructor();
            }
            export class RecentTaskInfo extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public affiliatedTaskId: number;
                public baseActivity: android.content.ComponentName;
                public baseIntent: android.content.Intent;
                public description: string;
                public id: number;
                public numActivities: number;
                public origActivity: android.content.ComponentName;
                public persistentId: number;
                public taskDescription: android.app.ActivityManager.TaskDescription;
                public topActivity: android.content.ComponentName;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public readFromParcel(param0: android.os.Parcel): void;

                public constructor();
            }
            export class RunningAppProcessInfo extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public static IMPORTANCE_BACKGROUND: number;
                public static IMPORTANCE_EMPTY: number;
                public static IMPORTANCE_FOREGROUND: number;
                public static IMPORTANCE_FOREGROUND_SERVICE: number;
                public static IMPORTANCE_GONE: number;
                public static IMPORTANCE_PERCEPTIBLE: number;
                public static IMPORTANCE_SERVICE: number;
                public static IMPORTANCE_TOP_SLEEPING: number;
                public static IMPORTANCE_VISIBLE: number;
                public static REASON_PROVIDER_IN_USE: number;
                public static REASON_SERVICE_IN_USE: number;
                public static REASON_UNKNOWN: number;
                public importance: number;
                public importanceReasonCode: number;
                public importanceReasonComponent: android.content.ComponentName;
                public importanceReasonPid: number;
                public lastTrimLevel: number;
                public lru: number;
                public pid: number;
                public pkgList: native.Array<string>;
                public processName: string;
                public uid: number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public readFromParcel(param0: android.os.Parcel): void;

                public constructor(param0: string, param1: number, param2: native.Array<string>);
                public constructor();
            }
            export class RunningServiceInfo extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public static FLAG_FOREGROUND: number;
                public static FLAG_PERSISTENT_PROCESS: number;
                public static FLAG_STARTED: number;
                public static FLAG_SYSTEM_PROCESS: number;
                public activeSince: number;
                public clientCount: number;
                public clientLabel: number;
                public clientPackage: string;
                public crashCount: number;
                public flags: number;
                public foreground: boolean;
                public lastActivityTime: number;
                public pid: number;
                public process: string;
                public restarting: number;
                public service: android.content.ComponentName;
                public started: boolean;
                public uid: number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public readFromParcel(param0: android.os.Parcel): void;

                public constructor();
            }
            export class RunningTaskInfo extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public baseActivity: android.content.ComponentName;
                public description: string;
                public id: number;
                public numActivities: number;
                public numRunning: number;
                public thumbnail: android.graphics.Bitmap;
                public topActivity: android.content.ComponentName;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public readFromParcel(param0: android.os.Parcel): void;

                public constructor();
            }
            export class TaskDescription extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public getLabel(): string;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public constructor(param0: string, param1: android.graphics.Bitmap, param2: number);
                public constructor(param0: string, param1: android.graphics.Bitmap);

                public describeContents(): number;

                public readFromParcel(param0: android.os.Parcel): void;

                public constructor(param0: android.app.ActivityManager.TaskDescription);

                public getPrimaryColor(): number;

                public toString(): string;

                public constructor(param0: string);

                public getIcon(): android.graphics.Bitmap;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.util.Pair.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export class ActivityOptions extends javalangObject {
            public static EXTRA_USAGE_TIME_REPORT: string;
            public static EXTRA_USAGE_TIME_REPORT_PACKAGES: string;

            public static makeThumbnailScaleUpAnimation(param0: android.view.View, param1: android.graphics.Bitmap, param2: number, param3: number): android.app.ActivityOptions;

            public static makeSceneTransitionAnimation(param0: android.app.Activity, param1: android.view.View, param2: string): android.app.ActivityOptions;

            public static makeTaskLaunchBehind(): android.app.ActivityOptions;

            public static makeBasic(): android.app.ActivityOptions;

            public update(param0: android.app.ActivityOptions): void;

            public requestUsageTimeReport(param0: android.app.PendingIntent): void;

            public static makeCustomAnimation(param0: android.content.Context, param1: number, param2: number): android.app.ActivityOptions;

            public static makeClipRevealAnimation(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): android.app.ActivityOptions;

            public toBundle(): android.os.Bundle;

            public static makeSceneTransitionAnimation(param0: android.app.Activity, param1: native.Array<android.util.Pair>): android.app.ActivityOptions;

            public static makeScaleUpAnimation(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): android.app.ActivityOptions;
        }
    }
}

/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export class AlarmManager extends javalangObject {
            public static ACTION_NEXT_ALARM_CLOCK_CHANGED: string;
            public static ELAPSED_REALTIME: number;
            public static ELAPSED_REALTIME_WAKEUP: number;
            public static INTERVAL_DAY: number;
            public static INTERVAL_FIFTEEN_MINUTES: number;
            public static INTERVAL_HALF_DAY: number;
            public static INTERVAL_HALF_HOUR: number;
            public static INTERVAL_HOUR: number;
            public static RTC: number;
            public static RTC_WAKEUP: number;

            public setRepeating(param0: number, param1: number, param2: number, param3: android.app.PendingIntent): void;

            public setInexactRepeating(param0: number, param1: number, param2: number, param3: android.app.PendingIntent): void;

            public setTimeZone(param0: string): void;

            public setTime(param0: number): void;

            public setExact(param0: number, param1: number, param2: android.app.PendingIntent): void;

            public setExactAndAllowWhileIdle(param0: number, param1: number, param2: android.app.PendingIntent): void;

            public setAlarmClock(param0: android.app.AlarmManager.AlarmClockInfo, param1: android.app.PendingIntent): void;

            public getNextAlarmClock(): android.app.AlarmManager.AlarmClockInfo;

            public set(param0: number, param1: number, param2: android.app.PendingIntent): void;

            public cancel(param0: android.app.PendingIntent): void;

            public setWindow(param0: number, param1: number, param2: number, param3: android.app.PendingIntent): void;

            public setAndAllowWhileIdle(param0: number, param1: number, param2: android.app.PendingIntent): void;
        }
        export module AlarmManager {
            export class AlarmClockInfo extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public getTriggerTime(): number;

                public getShowIntent(): android.app.PendingIntent;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public constructor(param0: number, param1: android.app.PendingIntent);
            }
        }
    }
}

import javalangCharSequence = java.lang.CharSequence;
/// <reference path="./android.app.AlertDialog.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.SearchEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.widget.Button.d.ts" />
/// <reference path="./android.widget.ListAdapter.d.ts" />
/// <reference path="./android.widget.ListView.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export class AlertDialog extends android.app.Dialog implements android.content.DialogInterface {
            public static THEME_DEVICE_DEFAULT_DARK: number;
            public static THEME_DEVICE_DEFAULT_LIGHT: number;
            public static THEME_HOLO_DARK: number;
            public static THEME_HOLO_LIGHT: number;
            public static THEME_TRADITIONAL: number;

            public getButton(param0: number): android.widget.Button;

            public setTitle(param0: string): void;

            public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;

            public setButton(param0: string, param1: android.os.Message): void;

            public cancel(): void;

            public onSearchRequested(): boolean;

            public setButton(param0: string, param1: android.content.DialogInterface.OnClickListener): void;

            public setButton2(param0: string, param1: android.os.Message): void;

            public setButton3(param0: string, param1: android.os.Message): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onCreatePanelView(param0: number): android.view.View;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;

            public onDetachedFromWindow(): void;

            public constructor(param0: android.content.Context, param1: number);

            public setMessage(param0: string): void;

            public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;

            public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;

            public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;

            public onWindowFocusChanged(param0: boolean): void;

            public onCreate(param0: android.os.Bundle): void;

            public setIconAttribute(param0: number): void;

            public onContentChanged(): void;

            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context, param1: boolean, param2: android.content.DialogInterface.OnCancelListener);

            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;

            public onPanelClosed(param0: number, param1: android.view.Menu): void;

            public setCustomTitle(param0: android.view.View): void;

            public setInverseBackgroundForced(param0: boolean): void;

            public setView(param0: android.view.View): void;

            public setButton(param0: number, param1: string, param2: android.content.DialogInterface.OnClickListener): void;

            public onActionModeFinished(param0: android.view.ActionMode): void;

            public onActionModeStarted(param0: android.view.ActionMode): void;

            public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;

            public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;

            public setButton2(param0: string, param1: android.content.DialogInterface.OnClickListener): void;

            public dismiss(): void;

            public onMenuOpened(param0: number, param1: android.view.Menu): boolean;

            public setIcon(param0: number): void;

            public onSearchRequested(param0: android.view.SearchEvent): boolean;

            public setTitle(param0: number): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;

            public setView(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public constructor(param0: android.content.Context);

            public setButton(param0: number, param1: string, param2: android.os.Message): void;

            public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;

            public getListView(): android.widget.ListView;

            public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;

            public onAttachedToWindow(): void;

            public setButton3(param0: string, param1: android.content.DialogInterface.OnClickListener): void;

            public setIcon(param0: android.graphics.drawable.Drawable): void;

            public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
        }
        export module AlertDialog {
            export class Builder extends javalangObject {
                public setTitle(param0: number): android.app.AlertDialog.Builder;

                public setMessage(param0: number): android.app.AlertDialog.Builder;

                public setTitle(param0: string): android.app.AlertDialog.Builder;

                public setNeutralButton(param0: number, param1: android.content.DialogInterface.OnClickListener): android.app.AlertDialog.Builder;

                public setAdapter(param0: android.widget.ListAdapter, param1: android.content.DialogInterface.OnClickListener): android.app.AlertDialog.Builder;

                public setSingleChoiceItems(param0: number, param1: number, param2: android.content.DialogInterface.OnClickListener): android.app.AlertDialog.Builder;

                public setInverseBackgroundForced(param0: boolean): android.app.AlertDialog.Builder;

                public setOnCancelListener(param0: android.content.DialogInterface.OnCancelListener): android.app.AlertDialog.Builder;

                public setIconAttribute(param0: number): android.app.AlertDialog.Builder;

                public setIcon(param0: number): android.app.AlertDialog.Builder;

                public setOnDismissListener(param0: android.content.DialogInterface.OnDismissListener): android.app.AlertDialog.Builder;

                public show(): android.app.AlertDialog;

                public setPositiveButton(param0: string, param1: android.content.DialogInterface.OnClickListener): android.app.AlertDialog.Builder;

                public create(): android.app.AlertDialog;

                public setItems(param0: native.Array<javalangCharSequence>, param1: android.content.DialogInterface.OnClickListener): android.app.AlertDialog.Builder;
                public setItems(param0: number, param1: android.content.DialogInterface.OnClickListener): android.app.AlertDialog.Builder;

                public setSingleChoiceItems(param0: native.Array<javalangCharSequence>, param1: number, param2: android.content.DialogInterface.OnClickListener): android.app.AlertDialog.Builder;

                public setNegativeButton(param0: number, param1: android.content.DialogInterface.OnClickListener): android.app.AlertDialog.Builder;

                public setNeutralButton(param0: string, param1: android.content.DialogInterface.OnClickListener): android.app.AlertDialog.Builder;

                public setOnItemSelectedListener(param0: android.widget.AdapterView.OnItemSelectedListener): android.app.AlertDialog.Builder;

                public setView(param0: android.view.View): android.app.AlertDialog.Builder;

                public constructor(param0: android.content.Context, param1: number);

                public setCursor(param0: android.database.Cursor, param1: android.content.DialogInterface.OnClickListener, param2: string): android.app.AlertDialog.Builder;

                public setMultiChoiceItems(param0: number, param1: native.Array<boolean>, param2: android.content.DialogInterface.OnMultiChoiceClickListener): android.app.AlertDialog.Builder;

                public setView(param0: number): android.app.AlertDialog.Builder;

                public setOnKeyListener(param0: android.content.DialogInterface.OnKeyListener): android.app.AlertDialog.Builder;

                public setCancelable(param0: boolean): android.app.AlertDialog.Builder;

                public setNegativeButton(param0: string, param1: android.content.DialogInterface.OnClickListener): android.app.AlertDialog.Builder;

                public setMultiChoiceItems(param0: native.Array<javalangCharSequence>, param1: native.Array<boolean>, param2: android.content.DialogInterface.OnMultiChoiceClickListener): android.app.AlertDialog.Builder;

                public constructor(param0: android.content.Context);

                public setCustomTitle(param0: android.view.View): android.app.AlertDialog.Builder;

                public setSingleChoiceItems(param0: android.database.Cursor, param1: number, param2: string, param3: android.content.DialogInterface.OnClickListener): android.app.AlertDialog.Builder;

                public setPositiveButton(param0: number, param1: android.content.DialogInterface.OnClickListener): android.app.AlertDialog.Builder;

                public getContext(): android.content.Context;

                public setSingleChoiceItems(param0: android.widget.ListAdapter, param1: number, param2: android.content.DialogInterface.OnClickListener): android.app.AlertDialog.Builder;

                public setMultiChoiceItems(param0: android.database.Cursor, param1: string, param2: string, param3: android.content.DialogInterface.OnMultiChoiceClickListener): android.app.AlertDialog.Builder;

                public setMessage(param0: string): android.app.AlertDialog.Builder;

                public setIcon(param0: android.graphics.drawable.Drawable): android.app.AlertDialog.Builder;
            }
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
    export module app {
        export class AliasActivity extends android.app.Activity {
            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;

            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;

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

/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export class AppOpsManager extends javalangObject {
            public static MODE_ALLOWED: number;
            public static MODE_DEFAULT: number;
            public static MODE_ERRORED: number;
            public static MODE_IGNORED: number;
            public static OPSTR_ADD_VOICEMAIL: string;
            public static OPSTR_BODY_SENSORS: string;
            public static OPSTR_CALL_PHONE: string;
            public static OPSTR_CAMERA: string;
            public static OPSTR_COARSE_LOCATION: string;
            public static OPSTR_FINE_LOCATION: string;
            public static OPSTR_GET_USAGE_STATS: string;
            public static OPSTR_MOCK_LOCATION: string;
            public static OPSTR_MONITOR_HIGH_POWER_LOCATION: string;
            public static OPSTR_MONITOR_LOCATION: string;
            public static OPSTR_READ_CALENDAR: string;
            public static OPSTR_READ_CALL_LOG: string;
            public static OPSTR_READ_CELL_BROADCASTS: string;
            public static OPSTR_READ_CONTACTS: string;
            public static OPSTR_READ_EXTERNAL_STORAGE: string;
            public static OPSTR_READ_PHONE_STATE: string;
            public static OPSTR_READ_SMS: string;
            public static OPSTR_RECEIVE_MMS: string;
            public static OPSTR_RECEIVE_SMS: string;
            public static OPSTR_RECEIVE_WAP_PUSH: string;
            public static OPSTR_RECORD_AUDIO: string;
            public static OPSTR_SEND_SMS: string;
            public static OPSTR_SYSTEM_ALERT_WINDOW: string;
            public static OPSTR_USE_FINGERPRINT: string;
            public static OPSTR_USE_SIP: string;
            public static OPSTR_WRITE_CALENDAR: string;
            public static OPSTR_WRITE_CALL_LOG: string;
            public static OPSTR_WRITE_CONTACTS: string;
            public static OPSTR_WRITE_EXTERNAL_STORAGE: string;
            public static OPSTR_WRITE_SETTINGS: string;

            public stopWatchingMode(param0: android.app.AppOpsManager.OnOpChangedListener): void;

            public checkOp(param0: string, param1: number, param2: string): number;

            public noteProxyOpNoThrow(param0: string, param1: string): number;

            public noteProxyOp(param0: string, param1: string): number;

            public finishOp(param0: string, param1: number, param2: string): void;

            public noteOp(param0: string, param1: number, param2: string): number;

            public startWatchingMode(param0: string, param1: string, param2: android.app.AppOpsManager.OnOpChangedListener): void;

            public checkPackage(param0: number, param1: string): void;

            public checkOpNoThrow(param0: string, param1: number, param2: string): number;

            public startOpNoThrow(param0: string, param1: number, param2: string): number;

            public static permissionToOp(param0: string): string;

            public startOp(param0: string, param1: number, param2: string): number;

            public noteOpNoThrow(param0: string, param1: number, param2: string): number;
        }
        export module AppOpsManager {
            export class OnOpChangedListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.app.AppOpsManager$OnOpChangedListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onOpChanged(param0: string, param1: string): void;
                });

                public onOpChanged(param0: string, param1: string): void;
            }
        }
    }
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.ComponentCallbacks.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
declare module android {
    export module app {
        export class Application extends android.content.ContextWrapper implements android.content.ComponentCallbacks2 {
            public onConfigurationChanged(param0: android.content.res.Configuration): void;

            public registerOnProvideAssistDataListener(param0: android.app.Application.OnProvideAssistDataListener): void;

            public onTerminate(): void;

            public onCreate(): void;

            public constructor();

            public unregisterOnProvideAssistDataListener(param0: android.app.Application.OnProvideAssistDataListener): void;

            public unregisterComponentCallbacks(param0: android.content.ComponentCallbacks): void;

            public registerActivityLifecycleCallbacks(param0: android.app.Application.ActivityLifecycleCallbacks): void;

            public onLowMemory(): void;

            public unregisterActivityLifecycleCallbacks(param0: android.app.Application.ActivityLifecycleCallbacks): void;

            public registerComponentCallbacks(param0: android.content.ComponentCallbacks): void;

            public onTrimMemory(param0: number): void;

            public constructor(param0: android.content.Context);
        }
        export module Application {
            export class ActivityLifecycleCallbacks extends javalangObject {
                /**
                 * Constructs a new instance of the android.app.Application$ActivityLifecycleCallbacks interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onActivityCreated(param0: android.app.Activity, param1: android.os.Bundle): void;
                    onActivityStarted(param0: android.app.Activity): void;
                    onActivityResumed(param0: android.app.Activity): void;
                    onActivityPaused(param0: android.app.Activity): void;
                    onActivityStopped(param0: android.app.Activity): void;
                    onActivitySaveInstanceState(param0: android.app.Activity, param1: android.os.Bundle): void;
                    onActivityDestroyed(param0: android.app.Activity): void;
                });

                public onActivityStopped(param0: android.app.Activity): void;

                public onActivityPaused(param0: android.app.Activity): void;

                public onActivityStarted(param0: android.app.Activity): void;

                public onActivityResumed(param0: android.app.Activity): void;

                public onActivityDestroyed(param0: android.app.Activity): void;

                public onActivityCreated(param0: android.app.Activity, param1: android.os.Bundle): void;

                public onActivitySaveInstanceState(param0: android.app.Activity, param1: android.os.Bundle): void;
            }
            export class OnProvideAssistDataListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.app.Application$OnProvideAssistDataListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onProvideAssistData(param0: android.app.Activity, param1: android.os.Bundle): void;
                });

                public onProvideAssistData(param0: android.app.Activity, param1: android.os.Bundle): void;
            }
        }
    }
}

/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module app {
        export class ApplicationErrorReport extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static TYPE_ANR: number;
            public static TYPE_BATTERY: number;
            public static TYPE_CRASH: number;
            public static TYPE_NONE: number;
            public static TYPE_RUNNING_SERVICE: number;
            public anrInfo: android.app.ApplicationErrorReport.AnrInfo;
            public batteryInfo: android.app.ApplicationErrorReport.BatteryInfo;
            public crashInfo: android.app.ApplicationErrorReport.CrashInfo;
            public installerPackageName: string;
            public packageName: string;
            public processName: string;
            public runningServiceInfo: android.app.ApplicationErrorReport.RunningServiceInfo;
            public systemApp: boolean;
            public time: number;
            public type: number;

            public static getErrorReportReceiver(param0: android.content.Context, param1: string, param2: number): android.content.ComponentName;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public constructor();

            public dump(param0: android.util.Printer, param1: string): void;

            public readFromParcel(param0: android.os.Parcel): void;
        }
        export module ApplicationErrorReport {
            export class AnrInfo extends javalangObject {
                public activity: string;
                public cause: string;
                public info: string;

                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public dump(param0: android.util.Printer, param1: string): void;

                public constructor();
            }
            export class BatteryInfo extends javalangObject {
                public checkinDetails: string;
                public durationMicros: number;
                public usageDetails: string;
                public usagePercent: number;

                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public dump(param0: android.util.Printer, param1: string): void;

                public constructor();
            }
            export class CrashInfo extends javalangObject {
                public exceptionClassName: string;
                public exceptionMessage: string;
                public stackTrace: string;
                public throwClassName: string;
                public throwFileName: string;
                public throwLineNumber: number;
                public throwMethodName: string;

                public constructor(param0: javalangThrowable);
                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public dump(param0: android.util.Printer, param1: string): void;

                public constructor();
            }
            export class RunningServiceInfo extends javalangObject {
                public durationMillis: number;
                public serviceDetails: string;

                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public dump(param0: android.util.Printer, param1: string): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.DialogInterface.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.SearchEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.widget.DatePicker.d.ts" />
declare module android {
    export module app {
        export class DatePickerDialog extends android.app.AlertDialog implements android.content.DialogInterface.OnClickListener, android.widget.DatePicker.OnDateChangedListener {
            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;

            public onClick(param0: android.content.DialogInterface, param1: number): void;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public updateDate(param0: number, param1: number, param2: number): void;

            public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;

            public constructor(param0: android.content.Context, param1: boolean, param2: android.content.DialogInterface.OnCancelListener);

            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;

            public cancel(): void;

            public onDateChanged(param0: android.widget.DatePicker, param1: number, param2: number, param3: number): void;

            public onPanelClosed(param0: number, param1: android.view.Menu): void;

            public onSearchRequested(): boolean;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onActionModeFinished(param0: android.view.ActionMode): void;

            public constructor(param0: android.content.Context, param1: android.app.DatePickerDialog.OnDateSetListener, param2: number, param3: number, param4: number);

            public onCreatePanelView(param0: number): android.view.View;

            public onSaveInstanceState(): android.os.Bundle;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;

            public onDetachedFromWindow(): void;

            public onActionModeStarted(param0: android.view.ActionMode): void;

            public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;

            public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;

            public getDatePicker(): android.widget.DatePicker;

            public dismiss(): void;

            public onMenuOpened(param0: number, param1: android.view.Menu): boolean;

            public onSearchRequested(param0: android.view.SearchEvent): boolean;

            public onRestoreInstanceState(param0: android.os.Bundle): void;

            public constructor(param0: android.content.Context, param1: number);

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context, param1: number, param2: android.app.DatePickerDialog.OnDateSetListener, param3: number, param4: number, param5: number);

            public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;

            public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;

            public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;

            public constructor(param0: android.content.Context);

            public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;

            public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;

            public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;

            public onWindowFocusChanged(param0: boolean): void;

            public onAttachedToWindow(): void;

            public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;

            public onContentChanged(): void;
        }
        export module DatePickerDialog {
            export class OnDateSetListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.app.DatePickerDialog$OnDateSetListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onDateSet(param0: android.widget.DatePicker, param1: number, param2: number, param3: number): void;
                });

                public onDateSet(param0: android.widget.DatePicker, param1: number, param2: number, param3: number): void;
            }
        }
    }
}

/// <reference path="./android.app.ActionBar.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.SearchEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.Window.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module app {
        export class Dialog extends javalangObject implements android.content.DialogInterface, android.view.Window.Callback, android.view.KeyEvent.Callback, android.view.View.OnCreateContextMenuListener {
            public setTitle(param0: string): void;

            public onPrepareOptionsMenu(param0: android.view.Menu): boolean;

            public onStart(): void;

            public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;

            public setFeatureDrawableResource(param0: number, param1: number): void;

            public getLayoutInflater(): android.view.LayoutInflater;

            public cancel(): void;

            public findViewById(param0: number): android.view.View;

            public setContentView(param0: android.view.View): void;

            public onSearchRequested(): boolean;

            public setDismissMessage(param0: android.os.Message): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public setFeatureDrawableUri(param0: number, param1: android.net.Uri): void;

            public hide(): void;

            public getContext(): android.content.Context;

            public onCreatePanelView(param0: number): android.view.View;

            public setCancelMessage(param0: android.os.Message): void;

            public isShowing(): boolean;

            public onSaveInstanceState(): android.os.Bundle;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;

            public setContentView(param0: number): void;

            public onKeyShortcut(param0: number, param1: android.view.KeyEvent): boolean;

            public onDetachedFromWindow(): void;

            public getWindow(): android.view.Window;

            public setOnKeyListener(param0: android.content.DialogInterface.OnKeyListener): void;

            public getSearchEvent(): android.view.SearchEvent;

            public getVolumeControlStream(): number;

            public takeKeyEvents(param0: boolean): void;

            public onRestoreInstanceState(param0: android.os.Bundle): void;

            public constructor(param0: android.content.Context, param1: number);

            public requestWindowFeature(param0: number): boolean;

            public onTrackballEvent(param0: android.view.MotionEvent): boolean;

            public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;

            public getCurrentFocus(): android.view.View;

            public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;

            public closeOptionsMenu(): void;

            public setOnShowListener(param0: android.content.DialogInterface.OnShowListener): void;

            public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;

            public onWindowFocusChanged(param0: boolean): void;

            public onCreate(param0: android.os.Bundle): void;

            public onContentChanged(): void;

            public invalidateOptionsMenu(): void;

            public show(): void;

            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public setCanceledOnTouchOutside(param0: boolean): void;

            public constructor(param0: android.content.Context, param1: boolean, param2: android.content.DialogInterface.OnCancelListener);

            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;

            public setVolumeControlStream(param0: number): void;

            public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;

            public getActionBar(): android.app.ActionBar;

            public onPanelClosed(param0: number, param1: android.view.Menu): void;

            public openOptionsMenu(): void;

            public registerForContextMenu(param0: android.view.View): void;

            public unregisterForContextMenu(param0: android.view.View): void;

            public setOnDismissListener(param0: android.content.DialogInterface.OnDismissListener): void;

            public onContextItemSelected(param0: android.view.MenuItem): boolean;

            public setFeatureDrawable(param0: number, param1: android.graphics.drawable.Drawable): void;

            public onCreateOptionsMenu(param0: android.view.Menu): boolean;

            public onBackPressed(): void;

            public onActionModeFinished(param0: android.view.ActionMode): void;

            public onOptionsMenuClosed(param0: android.view.Menu): void;

            public openContextMenu(param0: android.view.View): void;

            public getOwnerActivity(): android.app.Activity;

            public onOptionsItemSelected(param0: android.view.MenuItem): boolean;

            public onStop(): void;

            public onActionModeStarted(param0: android.view.ActionMode): void;

            public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;

            public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;

            public dismiss(): void;

            public onMenuOpened(param0: number, param1: android.view.Menu): boolean;

            public create(): void;

            public setOnCancelListener(param0: android.content.DialogInterface.OnCancelListener): void;

            public addContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public onSearchRequested(param0: android.view.SearchEvent): boolean;

            public setTitle(param0: number): void;

            public onTouchEvent(param0: android.view.MotionEvent): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public setContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;

            public setCancelable(param0: boolean): void;

            public setOwnerActivity(param0: android.app.Activity): void;

            public onContextMenuClosed(param0: android.view.Menu): void;

            public setFeatureDrawableAlpha(param0: number, param1: number): void;

            public constructor(param0: android.content.Context);

            public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;

            public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;

            public onAttachedToWindow(): void;

            public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
        }
    }
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.Dialog.d.ts" />
/// <reference path="./android.app.FragmentManager.d.ts" />
/// <reference path="./android.app.FragmentTransaction.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.DialogInterface.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export class DialogFragment extends android.app.Fragment implements android.content.DialogInterface.OnCancelListener, android.content.DialogInterface.OnDismissListener {
            public static STYLE_NORMAL: number;
            public static STYLE_NO_FRAME: number;
            public static STYLE_NO_INPUT: number;
            public static STYLE_NO_TITLE: number;

            public getShowsDialog(): boolean;

            public onStart(): void;

            public onDismiss(param0: android.content.DialogInterface): void;

            public show(param0: android.app.FragmentTransaction, param1: string): number;

            public getTheme(): number;

            public onActivityCreated(param0: android.os.Bundle): void;

            public onDetach(): void;

            public onTrimMemory(param0: number): void;

            public isCancelable(): boolean;

            public getDialog(): android.app.Dialog;

            public onCancel(param0: android.content.DialogInterface): void;

            public onDestroyView(): void;

            public onCreateDialog(param0: android.os.Bundle): android.app.Dialog;

            public onStop(): void;

            public setStyle(param0: number, param1: number): void;

            public dismiss(): void;

            public setShowsDialog(param0: boolean): void;

            public constructor();

            public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;

            public setCancelable(param0: boolean): void;

            public onSaveInstanceState(param0: android.os.Bundle): void;

            public dismissAllowingStateLoss(): void;

            public onAttach(param0: android.content.Context): void;
            public onAttach(param0: android.app.Activity): void;

            public show(param0: android.app.FragmentManager, param1: string): void;

            public onCreate(param0: android.os.Bundle): void;

            public dump(param0: string, param1: javaioFileDescriptor, param2: javaioPrintWriter, param3: native.Array<string>): void;
        }
    }
}

import javalangLong = java.lang.Long;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export class DownloadManager extends javalangObject {
            public static ACTION_DOWNLOAD_COMPLETE: string;
            public static ACTION_NOTIFICATION_CLICKED: string;
            public static ACTION_VIEW_DOWNLOADS: string;
            public static COLUMN_BYTES_DOWNLOADED_SO_FAR: string;
            public static COLUMN_DESCRIPTION: string;
            public static COLUMN_ID: string;
            public static COLUMN_LAST_MODIFIED_TIMESTAMP: string;
            public static COLUMN_LOCAL_FILENAME: string;
            public static COLUMN_LOCAL_URI: string;
            public static COLUMN_MEDIAPROVIDER_URI: string;
            public static COLUMN_MEDIA_TYPE: string;
            public static COLUMN_REASON: string;
            public static COLUMN_STATUS: string;
            public static COLUMN_TITLE: string;
            public static COLUMN_TOTAL_SIZE_BYTES: string;
            public static COLUMN_URI: string;
            public static ERROR_CANNOT_RESUME: number;
            public static ERROR_DEVICE_NOT_FOUND: number;
            public static ERROR_FILE_ALREADY_EXISTS: number;
            public static ERROR_FILE_ERROR: number;
            public static ERROR_HTTP_DATA_ERROR: number;
            public static ERROR_INSUFFICIENT_SPACE: number;
            public static ERROR_TOO_MANY_REDIRECTS: number;
            public static ERROR_UNHANDLED_HTTP_CODE: number;
            public static ERROR_UNKNOWN: number;
            public static EXTRA_DOWNLOAD_ID: string;
            public static EXTRA_NOTIFICATION_CLICK_DOWNLOAD_IDS: string;
            public static INTENT_EXTRAS_SORT_BY_SIZE: string;
            public static PAUSED_QUEUED_FOR_WIFI: number;
            public static PAUSED_UNKNOWN: number;
            public static PAUSED_WAITING_FOR_NETWORK: number;
            public static PAUSED_WAITING_TO_RETRY: number;
            public static STATUS_FAILED: number;
            public static STATUS_PAUSED: number;
            public static STATUS_PENDING: number;
            public static STATUS_RUNNING: number;
            public static STATUS_SUCCESSFUL: number;

            public enqueue(param0: android.app.DownloadManager.Request): number;

            public query(param0: android.app.DownloadManager.Query): android.database.Cursor;

            public static getRecommendedMaxBytesOverMobile(param0: android.content.Context): javalangLong;

            public getMimeTypeForDownloadedFile(param0: number): string;

            public openDownloadedFile(param0: number): android.os.ParcelFileDescriptor;

            public getUriForDownloadedFile(param0: number): android.net.Uri;

            public addCompletedDownload(param0: string, param1: string, param2: boolean, param3: string, param4: string, param5: number, param6: boolean): number;

            public remove(param0: native.Array<number>): number;

            public static getMaxBytesOverMobile(param0: android.content.Context): javalangLong;
        }
        export module DownloadManager {
            export class Query extends javalangObject {
                public setFilterById(param0: native.Array<number>): android.app.DownloadManager.Query;

                public setFilterByStatus(param0: number): android.app.DownloadManager.Query;

                public constructor();
            }
            export class Request extends javalangObject {
                public static NETWORK_MOBILE: number;
                public static NETWORK_WIFI: number;
                public static VISIBILITY_HIDDEN: number;
                public static VISIBILITY_VISIBLE: number;
                public static VISIBILITY_VISIBLE_NOTIFY_COMPLETED: number;
                public static VISIBILITY_VISIBLE_NOTIFY_ONLY_COMPLETION: number;

                public constructor(param0: android.net.Uri);

                public setVisibleInDownloadsUi(param0: boolean): android.app.DownloadManager.Request;

                public setDescription(param0: string): android.app.DownloadManager.Request;

                public setDestinationUri(param0: android.net.Uri): android.app.DownloadManager.Request;

                public allowScanningByMediaScanner(): void;

                public setTitle(param0: string): android.app.DownloadManager.Request;

                public setDestinationInExternalPublicDir(param0: string, param1: string): android.app.DownloadManager.Request;

                public setMimeType(param0: string): android.app.DownloadManager.Request;

                public setShowRunningNotification(param0: boolean): android.app.DownloadManager.Request;

                public setDestinationInExternalFilesDir(param0: android.content.Context, param1: string, param2: string): android.app.DownloadManager.Request;

                public setAllowedOverMetered(param0: boolean): android.app.DownloadManager.Request;

                public setNotificationVisibility(param0: number): android.app.DownloadManager.Request;

                public setAllowedNetworkTypes(param0: number): android.app.DownloadManager.Request;

                public setAllowedOverRoaming(param0: boolean): android.app.DownloadManager.Request;

                public addRequestHeader(param0: string, param1: string): android.app.DownloadManager.Request;
            }
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
/// <reference path="./android.widget.ExpandableListAdapter.d.ts" />
/// <reference path="./android.widget.ExpandableListView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export class ExpandableListActivity extends android.app.Activity implements android.view.View.OnCreateContextMenuListener, android.widget.ExpandableListView.OnChildClickListener, android.widget.ExpandableListView.OnGroupCollapseListener, android.widget.ExpandableListView.OnGroupExpandListener {
            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;

            public setListAdapter(param0: android.widget.ExpandableListAdapter): void;

            public setSelectedChild(param0: number, param1: number, param2: boolean): boolean;

            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;

            public onPanelClosed(param0: number, param1: android.view.Menu): void;

            public onSearchRequested(): boolean;

            public onTrimMemory(param0: number): void;

            public onGroupCollapse(param0: number): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onActionModeFinished(param0: android.view.ActionMode): void;

            public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);

            public onCreatePanelView(param0: number): android.view.View;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public onChildClick(param0: android.widget.ExpandableListView, param1: android.view.View, param2: number, param3: number, param4: number): boolean;

            public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;

            public getSelectedId(): number;

            public onDetachedFromWindow(): void;

            public onActionModeStarted(param0: android.view.ActionMode): void;

            public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;

            public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;

            public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;

            public onMenuOpened(param0: number, param1: android.view.Menu): boolean;

            public onSearchRequested(param0: android.view.SearchEvent): boolean;

            public constructor();

            public onRestoreInstanceState(param0: android.os.Bundle): void;

            public onCreateView(param0: string, param1: android.content.Context, param2: android.util.AttributeSet): android.view.View;

            public constructor(param0: android.content.Context, param1: number);

            public getExpandableListView(): android.widget.ExpandableListView;

            public getSelectedPosition(): number;

            public onGroupExpand(param0: number): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;

            public onRestoreInstanceState(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;

            public getExpandableListAdapter(): android.widget.ExpandableListAdapter;

            public setSelectedGroup(param0: number): void;

            public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;

            public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;

            public constructor(param0: android.content.Context);

            public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;

            public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;

            public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;

            public onWindowFocusChanged(param0: boolean): void;

            public onAttachedToWindow(): void;

            public onContentChanged(): void;

            public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
        }
    }
}

/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.FragmentManager.d.ts" />
/// <reference path="./android.app.LoaderManager.d.ts" />
/// <reference path="./android.app.SharedElementCallback.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.transition.Transition.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuInflater.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module app {
        export class Fragment extends javalangObject implements android.content.ComponentCallbacks2, android.view.View.OnCreateContextMenuListener {
            public onStart(): void;

            public equals(param0: javalangObject): boolean;

            public onViewCreated(param0: android.view.View, param1: android.os.Bundle): void;

            public setRetainInstance(param0: boolean): void;

            public setArguments(param0: android.os.Bundle): void;

            public getTargetFragment(): android.app.Fragment;

            public setSharedElementEnterTransition(param0: android.transition.Transition): void;

            public getReenterTransition(): android.transition.Transition;

            public getContext(): android.content.Context;

            public onDestroyView(): void;

            public setExitSharedElementCallback(param0: android.app.SharedElementCallback): void;

            public onInflate(param0: android.app.Activity, param1: android.util.AttributeSet, param2: android.os.Bundle): void;

            public getEnterTransition(): android.transition.Transition;

            public setEnterSharedElementCallback(param0: android.app.SharedElementCallback): void;

            public constructor();

            public getString(param0: number, param1: native.Array<javalangObject>): string;

            public setAllowReturnTransitionOverlap(param0: boolean): void;

            public static instantiate(param0: android.content.Context, param1: string, param2: android.os.Bundle): android.app.Fragment;

            public getArguments(): android.os.Bundle;

            public setAllowEnterTransitionOverlap(param0: boolean): void;

            public startActivityForResult(param0: android.content.Intent, param1: number, param2: android.os.Bundle): void;

            public onCreate(param0: android.os.Bundle): void;

            public getSharedElementReturnTransition(): android.transition.Transition;

            public getAllowEnterTransitionOverlap(): boolean;

            public getResources(): android.content.res.Resources;

            public shouldShowRequestPermissionRationale(param0: string): boolean;

            public onInflate(param0: android.util.AttributeSet, param1: android.os.Bundle): void;

            public setSharedElementReturnTransition(param0: android.transition.Transition): void;

            public getUserVisibleHint(): boolean;

            public onDestroyOptionsMenu(): void;

            public getText(param0: number): string;

            public onDestroy(): void;

            public getFragmentManager(): android.app.FragmentManager;

            public onLowMemory(): void;

            public startActivity(param0: android.content.Intent, param1: android.os.Bundle): void;

            public registerForContextMenu(param0: android.view.View): void;

            public unregisterForContextMenu(param0: android.view.View): void;

            public onTrimMemory(param0: number): void;

            public onOptionsMenuClosed(param0: android.view.Menu): void;

            public onOptionsItemSelected(param0: android.view.MenuItem): boolean;

            public onViewStateRestored(param0: android.os.Bundle): void;

            public onConfigurationChanged(param0: android.content.res.Configuration): void;

            public isDetached(): boolean;

            public getTag(): string;

            public isVisible(): boolean;

            public getParentFragment(): android.app.Fragment;

            public onHiddenChanged(param0: boolean): void;

            public getAllowReturnTransitionOverlap(): boolean;

            public onPrepareOptionsMenu(param0: android.view.Menu): void;

            public getChildFragmentManager(): android.app.FragmentManager;

            public getHost(): javalangObject;

            public onAttach(param0: android.content.Context): void;
            public onAttach(param0: android.app.Activity): void;

            public setUserVisibleHint(param0: boolean): void;

            public startActivityForResult(param0: android.content.Intent, param1: number): void;

            public dump(param0: string, param1: javaioFileDescriptor, param2: javaioPrintWriter, param3: native.Array<string>): void;

            public hashCode(): number;

            public requestPermissions(param0: native.Array<string>, param1: number): void;

            public onInflate(param0: android.content.Context, param1: android.util.AttributeSet, param2: android.os.Bundle): void;

            public onDetach(): void;

            public isInLayout(): boolean;

            public setHasOptionsMenu(param0: boolean): void;

            public onActivityResult(param0: number, param1: number, param2: android.content.Intent): void;

            public getId(): number;

            public isAdded(): boolean;

            public onCreateAnimator(param0: number, param1: boolean, param2: number): android.animation.Animator;

            public getRetainInstance(): boolean;

            public onCreateOptionsMenu(param0: android.view.Menu, param1: android.view.MenuInflater): void;

            public getExitTransition(): android.transition.Transition;

            public getString(param0: number): string;

            public isHidden(): boolean;

            public onResume(): void;

            public getSharedElementEnterTransition(): android.transition.Transition;

            public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;

            public getReturnTransition(): android.transition.Transition;

            public static instantiate(param0: android.content.Context, param1: string): android.app.Fragment;

            public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;

            public getView(): android.view.View;

            public setExitTransition(param0: android.transition.Transition): void;

            public getLoaderManager(): android.app.LoaderManager;

            public isResumed(): boolean;

            public onActivityCreated(param0: android.os.Bundle): void;

            public setEnterTransition(param0: android.transition.Transition): void;

            public setTargetFragment(param0: android.app.Fragment, param1: number): void;

            public setMenuVisibility(param0: boolean): void;

            public onContextItemSelected(param0: android.view.MenuItem): boolean;

            public onPause(): void;

            public setInitialSavedState(param0: android.app.Fragment.SavedState): void;

            public isRemoving(): boolean;

            public onStop(): void;

            public setReturnTransition(param0: android.transition.Transition): void;

            public onCreateView(param0: android.view.LayoutInflater, param1: android.view.ViewGroup, param2: android.os.Bundle): android.view.View;

            public toString(): string;

            public getTargetRequestCode(): number;

            public startActivity(param0: android.content.Intent): void;

            public onSaveInstanceState(param0: android.os.Bundle): void;

            public getActivity(): android.app.Activity;

            public setReenterTransition(param0: android.transition.Transition): void;
        }
        export module Fragment {
            export class InstantiationException extends android.util.AndroidRuntimeException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string, param1: javalangException);
                public constructor(param0: string);
                public constructor(param0: javalangException);
                public constructor();
            }
            export class SavedState extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.ClassLoaderCreator;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;
            }
        }
    }
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module app {
        export class FragmentBreadCrumbs extends android.view.ViewGroup implements android.app.FragmentManager.OnBackStackChangedListener {
            public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;

            public isLayoutDirectionResolved(): boolean;

            public onStopNestedScroll(param0: android.view.View): void;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onMeasure(param0: number, param1: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public canResolveLayoutDirection(): boolean;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public setMaxVisible(param0: number): void;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public sendAccessibilityEvent(param0: number): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public canResolveTextAlignment(): boolean;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public getParent(): android.view.ViewParent;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public setActivity(param0: android.app.Activity): void;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getLayoutDirection(): number;

            public getTextAlignment(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public focusSearch(param0: number): android.view.View;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public setParentTitle(param0: string, param1: string, param2: android.view.View.OnClickListener): void;

            public isLayoutRequested(): boolean;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public onBackStackChanged(): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public setTitle(param0: string, param1: string): void;

            public setOnBreadCrumbClickListener(param0: android.app.FragmentBreadCrumbs.OnBreadCrumbClickListener): void;

            public requestLayout(): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public isTextAlignmentResolved(): boolean;

            public addView(param0: android.view.View): void;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public canResolveTextDirection(): boolean;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public isTextDirectionResolved(): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public requestFitSystemWindows(): void;

            public addView(param0: android.view.View, param1: number): void;
        }
        export module FragmentBreadCrumbs {
            export class OnBreadCrumbClickListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.app.FragmentBreadCrumbs$OnBreadCrumbClickListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onBreadCrumbClick(param0: android.app.FragmentManager.BackStackEntry, param1: number): boolean;
                });

                public onBreadCrumbClick(param0: android.app.FragmentManager.BackStackEntry, param1: number): boolean;
            }
        }
    }
}

/// <reference path="./android.view.View.d.ts" />
declare module android {
    export module app {
        export abstract class FragmentContainer extends javalangObject {
            public onFindViewById(param0: number): android.view.View;

            public onHasView(): boolean;

            public constructor();
        }
    }
}

/// <reference path="./android.app.Fragment.d.ts" />
/// <reference path="./android.app.FragmentHostCallback.d.ts" />
/// <reference path="./android.app.FragmentManager.d.ts" />
/// <reference path="./android.app.LoaderManager.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.ArrayMap.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuInflater.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module app {
        export class FragmentController extends javalangObject {
            public restoreLoaderNonConfig(param0: android.util.ArrayMap): void;

            public dispatchPause(): void;

            public getLoaderManager(): android.app.LoaderManager;

            public attachHost(param0: android.app.Fragment): void;

            public noteStateNotSaved(): void;

            public getFragmentManager(): android.app.FragmentManager;

            public dispatchContextItemSelected(param0: android.view.MenuItem): boolean;

            public doLoaderStop(param0: boolean): void;

            public dispatchConfigurationChanged(param0: android.content.res.Configuration): void;

            public dispatchOptionsMenuClosed(param0: android.view.Menu): void;

            public dispatchStart(): void;

            public dispatchDestroyView(): void;

            public static createController(param0: android.app.FragmentHostCallback): android.app.FragmentController;

            public retainLoaderNonConfig(): android.util.ArrayMap;

            public dumpLoaders(param0: string, param1: javaioFileDescriptor, param2: javaioPrintWriter, param3: native.Array<string>): void;

            public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;

            public dispatchCreateOptionsMenu(param0: android.view.Menu, param1: android.view.MenuInflater): boolean;

            public dispatchCreate(): void;

            public dispatchDestroy(): void;

            public reportLoaderStart(): void;

            public dispatchStop(): void;

            public dispatchLowMemory(): void;

            public dispatchResume(): void;

            public dispatchActivityCreated(): void;

            public doLoaderDestroy(): void;

            public dispatchOptionsItemSelected(param0: android.view.MenuItem): boolean;

            public execPendingActions(): boolean;

            public saveAllState(): android.os.Parcelable;

            public retainNonConfig(): javautilList;

            public findFragmentByWho(param0: string): android.app.Fragment;

            public dispatchTrimMemory(param0: number): void;

            public doLoaderStart(): void;

            public restoreAllState(param0: android.os.Parcelable, param1: javautilList): void;

            public dispatchPrepareOptionsMenu(param0: android.view.Menu): boolean;
        }
    }
}

/// <reference path="./android.app.Fragment.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export abstract class FragmentHostCallback extends android.app.FragmentContainer {
            public onFindViewById(param0: number): android.view.View;

            public onGetWindowAnimations(): number;

            public onGetHost(): javalangObject;

            public onHasWindowAnimations(): boolean;

            public onGetLayoutInflater(): android.view.LayoutInflater;

            public onDump(param0: string, param1: javaioFileDescriptor, param2: javaioPrintWriter, param3: native.Array<string>): void;

            public constructor();

            public onInvalidateOptionsMenu(): void;

            public onAttachFragment(param0: android.app.Fragment): void;

            public constructor(param0: android.content.Context, param1: android.os.Handler, param2: number);

            public onShouldSaveFragmentState(param0: android.app.Fragment): boolean;

            public onHasView(): boolean;

            public onStartActivityFromFragment(param0: android.app.Fragment, param1: android.content.Intent, param2: number, param3: android.os.Bundle): void;

            public onRequestPermissionsFromFragment(param0: android.app.Fragment, param1: native.Array<string>, param2: number): void;

            public onUseFragmentManagerInflaterFactory(): boolean;
        }
    }
}

/// <reference path="./android.app.Fragment.d.ts" />
/// <reference path="./android.app.FragmentTransaction.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export abstract class FragmentManager extends javalangObject {
            public static POP_BACK_STACK_INCLUSIVE: number;

            public isDestroyed(): boolean;

            public beginTransaction(): android.app.FragmentTransaction;

            public popBackStackImmediate(param0: string, param1: number): boolean;

            public getBackStackEntryCount(): number;

            public constructor();

            public popBackStackImmediate(): boolean;

            public putFragment(param0: android.os.Bundle, param1: string, param2: android.app.Fragment): void;

            public saveFragmentInstanceState(param0: android.app.Fragment): android.app.Fragment.SavedState;

            public getBackStackEntryAt(param0: number): android.app.FragmentManager.BackStackEntry;

            public findFragmentById(param0: number): android.app.Fragment;

            public findFragmentByTag(param0: string): android.app.Fragment;

            public executePendingTransactions(): boolean;

            public popBackStack(param0: number, param1: number): void;

            public getFragment(param0: android.os.Bundle, param1: string): android.app.Fragment;

            public removeOnBackStackChangedListener(param0: android.app.FragmentManager.OnBackStackChangedListener): void;

            public popBackStack(): void;

            public dump(param0: string, param1: javaioFileDescriptor, param2: javaioPrintWriter, param3: native.Array<string>): void;

            public static enableDebugLogging(param0: boolean): void;

            public popBackStack(param0: string, param1: number): void;

            public popBackStackImmediate(param0: number, param1: number): boolean;

            public addOnBackStackChangedListener(param0: android.app.FragmentManager.OnBackStackChangedListener): void;

            public invalidateOptionsMenu(): void;
        }
        export module FragmentManager {
            export class BackStackEntry extends javalangObject {
                /**
                 * Constructs a new instance of the android.app.FragmentManager$BackStackEntry interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getId(): number;
                    getName(): string;
                    getBreadCrumbTitleRes(): number;
                    getBreadCrumbShortTitleRes(): number;
                    getBreadCrumbTitle(): string;
                    getBreadCrumbShortTitle(): string;
                });

                public getId(): number;

                public getBreadCrumbShortTitleRes(): number;

                public getName(): string;

                public getBreadCrumbTitle(): string;

                public getBreadCrumbShortTitle(): string;

                public getBreadCrumbTitleRes(): number;
            }
            export class OnBackStackChangedListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.app.FragmentManager$OnBackStackChangedListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onBackStackChanged(): void;
                });

                public onBackStackChanged(): void;
            }
        }
    }
}

/// <reference path="./android.app.Fragment.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export abstract class FragmentTransaction extends javalangObject {
            public static TRANSIT_ENTER_MASK: number;
            public static TRANSIT_EXIT_MASK: number;
            public static TRANSIT_FRAGMENT_CLOSE: number;
            public static TRANSIT_FRAGMENT_FADE: number;
            public static TRANSIT_FRAGMENT_OPEN: number;
            public static TRANSIT_NONE: number;
            public static TRANSIT_UNSET: number;

            public replace(param0: number, param1: android.app.Fragment, param2: string): android.app.FragmentTransaction;

            public add(param0: android.app.Fragment, param1: string): android.app.FragmentTransaction;

            public detach(param0: android.app.Fragment): android.app.FragmentTransaction;

            public addToBackStack(param0: string): android.app.FragmentTransaction;

            public commit(): number;

            public setBreadCrumbShortTitle(param0: string): android.app.FragmentTransaction;

            public add(param0: number, param1: android.app.Fragment, param2: string): android.app.FragmentTransaction;

            public show(param0: android.app.Fragment): android.app.FragmentTransaction;

            public setCustomAnimations(param0: number, param1: number, param2: number, param3: number): android.app.FragmentTransaction;

            public replace(param0: number, param1: android.app.Fragment): android.app.FragmentTransaction;

            public remove(param0: android.app.Fragment): android.app.FragmentTransaction;

            public setCustomAnimations(param0: number, param1: number): android.app.FragmentTransaction;

            public setTransition(param0: number): android.app.FragmentTransaction;

            public isAddToBackStackAllowed(): boolean;

            public isEmpty(): boolean;

            public hide(param0: android.app.Fragment): android.app.FragmentTransaction;

            public add(param0: number, param1: android.app.Fragment): android.app.FragmentTransaction;

            public constructor();

            public addSharedElement(param0: android.view.View, param1: string): android.app.FragmentTransaction;

            public setBreadCrumbTitle(param0: string): android.app.FragmentTransaction;

            public commitAllowingStateLoss(): number;

            public setBreadCrumbShortTitle(param0: number): android.app.FragmentTransaction;

            public setTransitionStyle(param0: number): android.app.FragmentTransaction;

            public disallowAddToBackStack(): android.app.FragmentTransaction;

            public setBreadCrumbTitle(param0: number): android.app.FragmentTransaction;

            public attach(param0: android.app.Fragment): android.app.FragmentTransaction;
        }
    }
}

import javalangClassLoader = java.lang.ClassLoader;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.Application.d.ts" />
/// <reference path="./android.app.UiAutomation.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.IntentFilter.d.ts" />
/// <reference path="./android.content.pm.ActivityInfo.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module app {
        export class Instrumentation extends javalangObject {
            public static REPORT_KEY_IDENTIFIER: string;
            public static REPORT_KEY_STREAMRESULT: string;

            public waitForIdle(param0: javalangRunnable): void;

            public waitForMonitor(param0: android.app.Instrumentation.ActivityMonitor): android.app.Activity;

            public onStart(): void;

            public finish(param0: number, param1: android.os.Bundle): void;

            public callActivityOnResume(param0: android.app.Activity): void;

            public callActivityOnStart(param0: android.app.Activity): void;

            public callActivityOnPause(param0: android.app.Activity): void;

            public getUiAutomation(): android.app.UiAutomation;

            public getTargetContext(): android.content.Context;

            public checkMonitorHit(param0: android.app.Instrumentation.ActivityMonitor, param1: number): boolean;

            public getComponentName(): android.content.ComponentName;

            public sendStringSync(param0: string): void;

            public newActivity(param0: javalangClassLoader, param1: string, param2: android.content.Intent): android.app.Activity;

            public newApplication(param0: javalangClassLoader, param1: string, param2: android.content.Context): android.app.Application;

            public callApplicationOnCreate(param0: android.app.Application): void;

            public getContext(): android.content.Context;

            public start(): void;

            public callActivityOnRestart(param0: android.app.Activity): void;

            public getBinderCounts(): android.os.Bundle;

            public callActivityOnRestoreInstanceState(param0: android.app.Activity, param1: android.os.Bundle): void;

            public getAllocCounts(): android.os.Bundle;

            public addMonitor(param0: android.content.IntentFilter, param1: android.app.Instrumentation.ActivityResult, param2: boolean): android.app.Instrumentation.ActivityMonitor;

            public constructor();

            public sendPointerSync(param0: android.view.MotionEvent): void;

            public addMonitor(param0: android.app.Instrumentation.ActivityMonitor): void;

            public sendStatus(param0: number, param1: android.os.Bundle): void;

            public invokeMenuActionSync(param0: android.app.Activity, param1: number, param2: number): boolean;

            public waitForMonitorWithTimeout(param0: android.app.Instrumentation.ActivityMonitor, param1: number): android.app.Activity;

            public callActivityOnDestroy(param0: android.app.Activity): void;

            public onException(param0: javalangObject, param1: javalangThrowable): boolean;

            public newActivity(param0: javalangClass, param1: android.content.Context, param2: android.os.IBinder, param3: android.app.Application, param4: android.content.Intent, param5: android.content.pm.ActivityInfo, param6: string, param7: android.app.Activity, param8: string, param9: javalangObject): android.app.Activity;

            public callActivityOnNewIntent(param0: android.app.Activity, param1: android.content.Intent): void;

            public onCreate(param0: android.os.Bundle): void;

            public sendKeySync(param0: android.view.KeyEvent): void;

            public invokeContextMenuAction(param0: android.app.Activity, param1: number, param2: number): boolean;

            public stopProfiling(): void;

            public callActivityOnCreate(param0: android.app.Activity, param1: android.os.Bundle, param2: android.os.PersistableBundle): void;

            public setAutomaticPerformanceSnapshots(): void;

            public callActivityOnRestoreInstanceState(param0: android.app.Activity, param1: android.os.Bundle, param2: android.os.PersistableBundle): void;

            public startProfiling(): void;

            public onDestroy(): void;

            public runOnMainSync(param0: javalangRunnable): void;

            public callActivityOnUserLeaving(param0: android.app.Activity): void;

            public static newApplication(param0: javalangClass, param1: android.content.Context): android.app.Application;

            public waitForIdleSync(): void;

            public callActivityOnPostCreate(param0: android.app.Activity, param1: android.os.Bundle): void;

            public startPerformanceSnapshot(): void;

            public callActivityOnSaveInstanceState(param0: android.app.Activity, param1: android.os.Bundle): void;

            public stopAllocCounting(): void;

            public addMonitor(param0: string, param1: android.app.Instrumentation.ActivityResult, param2: boolean): android.app.Instrumentation.ActivityMonitor;

            public sendKeyDownUpSync(param0: number): void;

            public callActivityOnPostCreate(param0: android.app.Activity, param1: android.os.Bundle, param2: android.os.PersistableBundle): void;

            public sendCharacterSync(param0: number): void;

            public removeMonitor(param0: android.app.Instrumentation.ActivityMonitor): void;

            public setInTouchMode(param0: boolean): void;

            public callActivityOnCreate(param0: android.app.Activity, param1: android.os.Bundle): void;

            public isProfiling(): boolean;

            public startActivitySync(param0: android.content.Intent): android.app.Activity;

            public startAllocCounting(): void;

            public callActivityOnSaveInstanceState(param0: android.app.Activity, param1: android.os.Bundle, param2: android.os.PersistableBundle): void;

            public sendTrackballEventSync(param0: android.view.MotionEvent): void;

            public endPerformanceSnapshot(): void;

            public callActivityOnStop(param0: android.app.Activity): void;
        }
        export module Instrumentation {
            export class ActivityMonitor extends javalangObject {
                public waitForActivity(): android.app.Activity;

                public constructor(param0: android.content.IntentFilter, param1: android.app.Instrumentation.ActivityResult, param2: boolean);

                public waitForActivityWithTimeout(param0: number): android.app.Activity;

                public getResult(): android.app.Instrumentation.ActivityResult;

                public isBlocking(): boolean;

                public getLastActivity(): android.app.Activity;

                public getHits(): number;

                public constructor(param0: string, param1: android.app.Instrumentation.ActivityResult, param2: boolean);

                public getFilter(): android.content.IntentFilter;
            }
            export class ActivityResult extends javalangObject {
                public getResultData(): android.content.Intent;

                public constructor(param0: number, param1: android.content.Intent);

                public getResultCode(): number;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export abstract class IntentService extends android.app.Service {
            public setIntentRedelivery(param0: boolean): void;

            public onHandleIntent(param0: android.content.Intent): void;

            public onTrimMemory(param0: number): void;

            public onBind(param0: android.content.Intent): android.os.IBinder;

            public constructor(param0: android.content.Context);

            public onCreate(): void;

            public constructor();

            public onDestroy(): void;

            public onStartCommand(param0: android.content.Intent, param1: number, param2: number): number;

            public onStart(param0: android.content.Intent, param1: number): void;

            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export class KeyguardManager extends javalangObject {
            public isKeyguardSecure(): boolean;

            public isDeviceLocked(): boolean;

            public inKeyguardRestrictedInputMode(): boolean;

            public exitKeyguardSecurely(param0: android.app.KeyguardManager.OnKeyguardExitResult): void;

            public createConfirmDeviceCredentialIntent(param0: string, param1: string): android.content.Intent;

            public isKeyguardLocked(): boolean;

            public isDeviceSecure(): boolean;

            public newKeyguardLock(param0: string): android.app.KeyguardManager.KeyguardLock;
        }
        export module KeyguardManager {
            export class KeyguardLock extends javalangObject {
                public reenableKeyguard(): void;

                public disableKeyguard(): void;
            }
            export class OnKeyguardExitResult extends javalangObject {
                /**
                 * Constructs a new instance of the android.app.KeyguardManager$OnKeyguardExitResult interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onKeyguardExitResult(param0: boolean): void;
                });

                public onKeyguardExitResult(param0: boolean): void;
            }
        }
    }
}

/// <reference path="./android.app.LauncherActivity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.pm.ResolveInfo.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
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
/// <reference path="./android.widget.ListView.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module app {
        export abstract class LauncherActivity extends android.app.ListActivity {
            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public setTitle(param0: string): void;

            public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;

            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;

            public itemForPosition(param0: number): android.app.LauncherActivity.ListItem;

            public onPanelClosed(param0: number, param1: android.view.Menu): void;

            public onSearchRequested(): boolean;

            public makeListItems(): javautilList;

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

            public getTargetIntent(): android.content.Intent;

            public onMenuOpened(param0: number, param1: android.view.Menu): boolean;

            public onListItemClick(param0: android.widget.ListView, param1: android.view.View, param2: number, param3: number): void;

            public onSetContentView(): void;

            public onSearchRequested(param0: android.view.SearchEvent): boolean;

            public onQueryPackageManager(param0: android.content.Intent): javautilList;

            public constructor();

            public setTitle(param0: number): void;

            public intentForPosition(param0: number): android.content.Intent;

            public onCreateView(param0: string, param1: android.content.Context, param2: android.util.AttributeSet): android.view.View;

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
        export module LauncherActivity {
            export class IconResizer extends javalangObject {
                public constructor(param0: android.app.LauncherActivity);

                public createIconThumbnail(param0: android.graphics.drawable.Drawable): android.graphics.drawable.Drawable;
            }
            export class ListItem extends javalangObject {
                public className: string;
                public extras: android.os.Bundle;
                public icon: android.graphics.drawable.Drawable;
                public label: string;
                public packageName: string;
                public resolveInfo: android.content.pm.ResolveInfo;

                public constructor();
            }
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
/// <reference path="./android.widget.ListAdapter.d.ts" />
/// <reference path="./android.widget.ListView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export class ListActivity extends android.app.Activity {
            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;

            public setSelection(param0: number): void;

            public getListAdapter(): android.widget.ListAdapter;

            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;

            public onDestroy(): void;

            public onPanelClosed(param0: number, param1: android.view.Menu): void;

            public getSelectedItemId(): number;

            public onSearchRequested(): boolean;

            public setListAdapter(param0: android.widget.ListAdapter): void;

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

            public onListItemClick(param0: android.widget.ListView, param1: android.view.View, param2: number, param3: number): void;

            public onSearchRequested(param0: android.view.SearchEvent): boolean;

            public constructor();

            public onRestoreInstanceState(param0: android.os.Bundle): void;

            public onCreateView(param0: string, param1: android.content.Context, param2: android.util.AttributeSet): android.view.View;

            public constructor(param0: android.content.Context, param1: number);

            public getSelectedItemPosition(): number;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public onRestoreInstanceState(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;

            public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;

            public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;

            public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;

            public constructor(param0: android.content.Context);

            public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;

            public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;

            public getListView(): android.widget.ListView;

            public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;

            public onWindowFocusChanged(param0: boolean): void;

            public onAttachedToWindow(): void;

            public onContentChanged(): void;

            public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
        }
    }
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.ListAdapter.d.ts" />
/// <reference path="./android.widget.ListView.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module app {
        export class ListFragment extends android.app.Fragment {
            public setListShownNoAnimation(param0: boolean): void;

            public onCreateView(param0: android.view.LayoutInflater, param1: android.view.ViewGroup, param2: android.os.Bundle): android.view.View;

            public onListItemClick(param0: android.widget.ListView, param1: android.view.View, param2: number, param3: number): void;

            public setSelection(param0: number): void;

            public getListAdapter(): android.widget.ListAdapter;

            public onViewCreated(param0: android.view.View, param1: android.os.Bundle): void;

            public setEmptyText(param0: string): void;

            public constructor();

            public getSelectedItemId(): number;

            public getSelectedItemPosition(): number;

            public setListAdapter(param0: android.widget.ListAdapter): void;

            public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;

            public onTrimMemory(param0: number): void;

            public setListShown(param0: boolean): void;

            public onDestroyView(): void;

            public getListView(): android.widget.ListView;
        }
    }
}

/// <reference path="./android.content.Loader.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export abstract class LoaderManager extends javalangObject {
            public getLoader(param0: number): android.content.Loader;

            public destroyLoader(param0: number): void;

            public constructor();

            public initLoader(param0: number, param1: android.os.Bundle, param2: android.app.LoaderManager.LoaderCallbacks): android.content.Loader;

            public restartLoader(param0: number, param1: android.os.Bundle, param2: android.app.LoaderManager.LoaderCallbacks): android.content.Loader;

            public dump(param0: string, param1: javaioFileDescriptor, param2: javaioPrintWriter, param3: native.Array<string>): void;

            public static enableDebugLogging(param0: boolean): void;
        }
        export module LoaderManager {
            export class LoaderCallbacks extends javalangObject {
                /**
                 * Constructs a new instance of the android.app.LoaderManager$LoaderCallbacks interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onCreateLoader(param0: number, param1: android.os.Bundle): android.content.Loader;
                    onLoadFinished(param0: android.content.Loader, param1: javalangObject): void;
                    onLoaderReset(param0: android.content.Loader): void;
                });

                public onCreateLoader(param0: number, param1: android.os.Bundle): android.content.Loader;

                public onLoadFinished(param0: android.content.Loader, param1: javalangObject): void;

                public onLoaderReset(param0: android.content.Loader): void;
            }
        }
    }
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.Window.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export class LocalActivityManager extends javalangObject {
            public getActivity(param0: string): android.app.Activity;

            public removeAllActivities(): void;

            public dispatchStop(): void;

            public dispatchResume(): void;

            public constructor(param0: android.app.Activity, param1: boolean);

            public getCurrentActivity(): android.app.Activity;

            public destroyActivity(param0: string, param1: boolean): android.view.Window;

            public saveInstanceState(): android.os.Bundle;

            public dispatchCreate(param0: android.os.Bundle): void;

            public getCurrentId(): string;

            public dispatchPause(param0: boolean): void;

            public dispatchDestroy(param0: boolean): void;

            public startActivity(param0: string, param1: android.content.Intent): android.view.Window;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />
declare module android {
    export module app {
        export class MediaRouteActionProvider extends android.view.ActionProvider {
            public setExtendedSettingsClickListener(param0: android.view.View.OnClickListener): void;

            public onCreateActionView(): android.view.View;

            public onPerformDefaultAction(): boolean;

            public constructor(param0: android.content.Context);

            public setRouteTypes(param0: number): void;

            public overridesItemVisibility(): boolean;

            public onCreateActionView(param0: android.view.MenuItem): android.view.View;

            public isVisible(): boolean;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module app {
        export class MediaRouteButton extends android.view.View {
            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public getRouteTypes(): number;

            public setRouteTypes(param0: number): void;

            public drawableStateChanged(): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onCreateDrawableState(param0: number): native.Array<number>;

            public onMeasure(param0: number, param1: number): void;

            public performLongClick(): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public setExtendedSettingsClickListener(param0: android.view.View.OnClickListener): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public jumpDrawablesToCurrentState(): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public onDetachedFromWindow(): void;

            public sendAccessibilityEvent(param0: number): void;

            public setVisibility(param0: number): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public verifyDrawable(param0: android.graphics.drawable.Drawable): boolean;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public constructor(param0: android.content.Context);

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public onDraw(param0: android.graphics.Canvas): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public performClick(): boolean;

            public onAttachedToWindow(): void;

            public showDialog(): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.InputQueue.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.SearchEvent.d.ts" />
/// <reference path="./android.view.SurfaceHolder.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export class NativeActivity extends android.app.Activity implements android.view.SurfaceHolder.Callback2, android.view.InputQueue.Callback, android.view.ViewTreeObserver.OnGlobalLayoutListener {
            public static META_DATA_FUNC_NAME: string;
            public static META_DATA_LIB_NAME: string;

            public onStart(): void;

            public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;

            public surfaceDestroyed(param0: android.view.SurfaceHolder): void;

            public onSaveInstanceState(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;

            public onSearchRequested(): boolean;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onCreatePanelView(param0: number): android.view.View;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;

            public onDetachedFromWindow(): void;

            public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;

            public onResume(): void;

            public constructor();

            public onCreateView(param0: string, param1: android.content.Context, param2: android.util.AttributeSet): android.view.View;

            public constructor(param0: android.content.Context, param1: number);

            public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;

            public onCreate(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;

            public surfaceChanged(param0: android.view.SurfaceHolder, param1: number, param2: number, param3: number): void;

            public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;

            public surfaceRedrawNeeded(param0: android.view.SurfaceHolder): void;

            public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;

            public onWindowFocusChanged(param0: boolean): void;

            public onCreate(param0: android.os.Bundle): void;

            public onContentChanged(): void;

            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;

            public onDestroy(): void;

            public onLowMemory(): void;

            public onPanelClosed(param0: number, param1: android.view.Menu): void;

            public onTrimMemory(param0: number): void;

            public onGlobalLayout(): void;

            public onActionModeFinished(param0: android.view.ActionMode): void;

            public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);

            public onPause(): void;

            public onInputQueueCreated(param0: android.view.InputQueue): void;

            public onStop(): void;

            public onActionModeStarted(param0: android.view.ActionMode): void;

            public onConfigurationChanged(param0: android.content.res.Configuration): void;

            public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;

            public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;

            public onMenuOpened(param0: number, param1: android.view.Menu): boolean;

            public surfaceCreated(param0: android.view.SurfaceHolder): void;

            public onSearchRequested(param0: android.view.SearchEvent): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;

            public onInputQueueDestroyed(param0: android.view.InputQueue): void;

            public onSaveInstanceState(param0: android.os.Bundle): void;

            public constructor(param0: android.content.Context);

            public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;

            public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;

            public onAttachedToWindow(): void;

            public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
        }
    }
}

/// <reference path="./android.app.Notification.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.app.RemoteInput.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.drawable.Icon.d.ts" />
/// <reference path="./android.media.AudioAttributes.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.widget.RemoteViews.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module app {
        export class Notification extends javalangObject implements android.os.Parcelable {
            public static AUDIO_ATTRIBUTES_DEFAULT: android.media.AudioAttributes;
            public static CATEGORY_ALARM: string;
            public static CATEGORY_CALL: string;
            public static CATEGORY_EMAIL: string;
            public static CATEGORY_ERROR: string;
            public static CATEGORY_EVENT: string;
            public static CATEGORY_MESSAGE: string;
            public static CATEGORY_PROGRESS: string;
            public static CATEGORY_PROMO: string;
            public static CATEGORY_RECOMMENDATION: string;
            public static CATEGORY_REMINDER: string;
            public static CATEGORY_SERVICE: string;
            public static CATEGORY_SOCIAL: string;
            public static CATEGORY_STATUS: string;
            public static CATEGORY_SYSTEM: string;
            public static CATEGORY_TRANSPORT: string;
            public static COLOR_DEFAULT: number;
            public static CREATOR: android.os.Parcelable.Creator;
            public static DEFAULT_ALL: number;
            public static DEFAULT_LIGHTS: number;
            public static DEFAULT_SOUND: number;
            public static DEFAULT_VIBRATE: number;
            public static EXTRA_BACKGROUND_IMAGE_URI: string;
            public static EXTRA_BIG_TEXT: string;
            public static EXTRA_COMPACT_ACTIONS: string;
            public static EXTRA_INFO_TEXT: string;
            public static EXTRA_LARGE_ICON: string;
            public static EXTRA_LARGE_ICON_BIG: string;
            public static EXTRA_MEDIA_SESSION: string;
            public static EXTRA_PEOPLE: string;
            public static EXTRA_PICTURE: string;
            public static EXTRA_PROGRESS: string;
            public static EXTRA_PROGRESS_INDETERMINATE: string;
            public static EXTRA_PROGRESS_MAX: string;
            public static EXTRA_SHOW_CHRONOMETER: string;
            public static EXTRA_SHOW_WHEN: string;
            public static EXTRA_SMALL_ICON: string;
            public static EXTRA_SUB_TEXT: string;
            public static EXTRA_SUMMARY_TEXT: string;
            public static EXTRA_TEMPLATE: string;
            public static EXTRA_TEXT: string;
            public static EXTRA_TEXT_LINES: string;
            public static EXTRA_TITLE: string;
            public static EXTRA_TITLE_BIG: string;
            public static FLAG_AUTO_CANCEL: number;
            public static FLAG_FOREGROUND_SERVICE: number;
            public static FLAG_GROUP_SUMMARY: number;
            public static FLAG_HIGH_PRIORITY: number;
            public static FLAG_INSISTENT: number;
            public static FLAG_LOCAL_ONLY: number;
            public static FLAG_NO_CLEAR: number;
            public static FLAG_ONGOING_EVENT: number;
            public static FLAG_ONLY_ALERT_ONCE: number;
            public static FLAG_SHOW_LIGHTS: number;
            public static INTENT_CATEGORY_NOTIFICATION_PREFERENCES: string;
            public static PRIORITY_DEFAULT: number;
            public static PRIORITY_HIGH: number;
            public static PRIORITY_LOW: number;
            public static PRIORITY_MAX: number;
            public static PRIORITY_MIN: number;
            public static STREAM_DEFAULT: number;
            public static VISIBILITY_PRIVATE: number;
            public static VISIBILITY_PUBLIC: number;
            public static VISIBILITY_SECRET: number;
            public actions: native.Array<android.app.Notification.Action>;
            public audioAttributes: android.media.AudioAttributes;
            public audioStreamType: number;
            public bigContentView: android.widget.RemoteViews;
            public category: string;
            public color: number;
            public contentIntent: android.app.PendingIntent;
            public contentView: android.widget.RemoteViews;
            public defaults: number;
            public deleteIntent: android.app.PendingIntent;
            public extras: android.os.Bundle;
            public flags: number;
            public fullScreenIntent: android.app.PendingIntent;
            public headsUpContentView: android.widget.RemoteViews;
            public icon: number;
            public iconLevel: number;
            public largeIcon: android.graphics.Bitmap;
            public ledARGB: number;
            public ledOffMS: number;
            public ledOnMS: number;
            public number: number;
            public priority: number;
            public publicVersion: android.app.Notification;
            public sound: android.net.Uri;
            public tickerText: string;
            public tickerView: android.widget.RemoteViews;
            public vibrate: native.Array<number>;
            public visibility: number;
            public when: number;

            public getLargeIcon(): android.graphics.drawable.Icon;

            public clone(): android.app.Notification;

            public toString(): string;

            public getSmallIcon(): android.graphics.drawable.Icon;

            public getGroup(): string;

            public constructor(param0: android.os.Parcel);

            public describeContents(): number;

            public constructor(param0: number, param1: string, param2: number);

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public clone(): javalangObject;

            public constructor();

            public getSortKey(): string;
        }
        export module Notification {
            export class Action extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public actionIntent: android.app.PendingIntent;
                public icon: number;
                public title: string;

                public clone(): javalangObject;
                public clone(): android.app.Notification.Action;

                public getIcon(): android.graphics.drawable.Icon;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getRemoteInputs(): native.Array<android.app.RemoteInput>;

                public describeContents(): number;

                public getExtras(): android.os.Bundle;

                public constructor(param0: number, param1: string, param2: android.app.PendingIntent);
            }
            export module Action {
                export class Builder extends javalangObject {
                    public constructor(param0: number, param1: string, param2: android.app.PendingIntent);
                    public constructor(param0: android.app.Notification.Action);

                    public build(): android.app.Notification.Action;

                    public addRemoteInput(param0: android.app.RemoteInput): android.app.Notification.Action.Builder;

                    public addExtras(param0: android.os.Bundle): android.app.Notification.Action.Builder;

                    public getExtras(): android.os.Bundle;

                    public constructor(param0: android.graphics.drawable.Icon, param1: string, param2: android.app.PendingIntent);

                    public extend(param0: android.app.Notification.Action.Extender): android.app.Notification.Action.Builder;
                }
                export class Extender extends javalangObject {
                    /**
                     * Constructs a new instance of the android.app.Notification$Action$Extender interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        extend(param0: android.app.Notification.Action.Builder): android.app.Notification.Action.Builder;
                    });

                    public extend(param0: android.app.Notification.Action.Builder): android.app.Notification.Action.Builder;
                }
                export class WearableExtender extends javalangObject implements android.app.Notification.Action.Extender {
                    public constructor(param0: android.app.Notification.Action);

                    public clone(): javalangObject;

                    public getCancelLabel(): string;

                    public setCancelLabel(param0: string): android.app.Notification.Action.WearableExtender;

                    public isAvailableOffline(): boolean;

                    public getConfirmLabel(): string;

                    public extend(param0: android.app.Notification.Action.Builder): android.app.Notification.Action.Builder;

                    public setAvailableOffline(param0: boolean): android.app.Notification.Action.WearableExtender;

                    public constructor();

                    public setInProgressLabel(param0: string): android.app.Notification.Action.WearableExtender;

                    public setConfirmLabel(param0: string): android.app.Notification.Action.WearableExtender;

                    public clone(): android.app.Notification.Action.WearableExtender;

                    public getInProgressLabel(): string;
                }
            }
            export class BigPictureStyle extends android.app.Notification.Style {
                public constructor(param0: android.app.Notification.Builder);

                public bigLargeIcon(param0: android.graphics.drawable.Icon): android.app.Notification.BigPictureStyle;

                public setBigContentTitle(param0: string): android.app.Notification.BigPictureStyle;

                public setSummaryText(param0: string): android.app.Notification.BigPictureStyle;

                public bigLargeIcon(param0: android.graphics.Bitmap): android.app.Notification.BigPictureStyle;

                public bigPicture(param0: android.graphics.Bitmap): android.app.Notification.BigPictureStyle;

                public constructor();
            }
            export class BigTextStyle extends android.app.Notification.Style {
                public constructor(param0: android.app.Notification.Builder);

                public setSummaryText(param0: string): android.app.Notification.BigTextStyle;

                public setBigContentTitle(param0: string): android.app.Notification.BigTextStyle;

                public bigText(param0: string): android.app.Notification.BigTextStyle;

                public constructor();
            }
            export class Builder extends javalangObject {
                public setContentTitle(param0: string): android.app.Notification.Builder;

                public setDefaults(param0: number): android.app.Notification.Builder;

                public setProgress(param0: number, param1: number, param2: boolean): android.app.Notification.Builder;

                public setOngoing(param0: boolean): android.app.Notification.Builder;

                public setGroup(param0: string): android.app.Notification.Builder;

                public setLargeIcon(param0: android.graphics.drawable.Icon): android.app.Notification.Builder;

                public addExtras(param0: android.os.Bundle): android.app.Notification.Builder;

                public addAction(param0: number, param1: string, param2: android.app.PendingIntent): android.app.Notification.Builder;

                public getExtras(): android.os.Bundle;

                public setShowWhen(param0: boolean): android.app.Notification.Builder;

                public setSound(param0: android.net.Uri): android.app.Notification.Builder;

                public setSubText(param0: string): android.app.Notification.Builder;

                public setContentInfo(param0: string): android.app.Notification.Builder;

                public setGroupSummary(param0: boolean): android.app.Notification.Builder;

                public setTicker(param0: string): android.app.Notification.Builder;

                public setCategory(param0: string): android.app.Notification.Builder;

                public setFullScreenIntent(param0: android.app.PendingIntent, param1: boolean): android.app.Notification.Builder;

                public constructor(param0: android.content.Context);

                public setUsesChronometer(param0: boolean): android.app.Notification.Builder;

                public getNotification(): android.app.Notification;

                public addAction(param0: android.app.Notification.Action): android.app.Notification.Builder;

                public setVisibility(param0: number): android.app.Notification.Builder;

                public setColor(param0: number): android.app.Notification.Builder;

                public setContentIntent(param0: android.app.PendingIntent): android.app.Notification.Builder;

                public setSound(param0: android.net.Uri, param1: android.media.AudioAttributes): android.app.Notification.Builder;

                public setAutoCancel(param0: boolean): android.app.Notification.Builder;

                public setSortKey(param0: string): android.app.Notification.Builder;

                public setSmallIcon(param0: number): android.app.Notification.Builder;

                public setLargeIcon(param0: android.graphics.Bitmap): android.app.Notification.Builder;

                public setOnlyAlertOnce(param0: boolean): android.app.Notification.Builder;

                public setPublicVersion(param0: android.app.Notification): android.app.Notification.Builder;

                public setVibrate(param0: native.Array<number>): android.app.Notification.Builder;

                public setLocalOnly(param0: boolean): android.app.Notification.Builder;

                public setContentText(param0: string): android.app.Notification.Builder;

                public setExtras(param0: android.os.Bundle): android.app.Notification.Builder;

                public setNumber(param0: number): android.app.Notification.Builder;

                public build(): android.app.Notification;

                public setContent(param0: android.widget.RemoteViews): android.app.Notification.Builder;

                public setWhen(param0: number): android.app.Notification.Builder;

                public setLights(param0: number, param1: number, param2: number): android.app.Notification.Builder;

                public setSmallIcon(param0: number, param1: number): android.app.Notification.Builder;
                public setSmallIcon(param0: android.graphics.drawable.Icon): android.app.Notification.Builder;

                public setSound(param0: android.net.Uri, param1: number): android.app.Notification.Builder;

                public setTicker(param0: string, param1: android.widget.RemoteViews): android.app.Notification.Builder;

                public setDeleteIntent(param0: android.app.PendingIntent): android.app.Notification.Builder;

                public addPerson(param0: string): android.app.Notification.Builder;

                public setPriority(param0: number): android.app.Notification.Builder;

                public setStyle(param0: android.app.Notification.Style): android.app.Notification.Builder;

                public extend(param0: android.app.Notification.Extender): android.app.Notification.Builder;
            }
            export class CarExtender extends javalangObject implements android.app.Notification.Extender {
                public extend(param0: android.app.Notification.Builder): android.app.Notification.Builder;

                public getColor(): number;

                public constructor(param0: android.app.Notification);

                public setUnreadConversation(param0: android.app.Notification.CarExtender.UnreadConversation): android.app.Notification.CarExtender;

                public getLargeIcon(): android.graphics.Bitmap;

                public setColor(param0: number): android.app.Notification.CarExtender;

                public setLargeIcon(param0: android.graphics.Bitmap): android.app.Notification.CarExtender;

                public getUnreadConversation(): android.app.Notification.CarExtender.UnreadConversation;

                public constructor();
            }
            export module CarExtender {
                export class Builder extends javalangObject {
                    public setLatestTimestamp(param0: number): android.app.Notification.CarExtender.Builder;

                    public setReadPendingIntent(param0: android.app.PendingIntent): android.app.Notification.CarExtender.Builder;

                    public constructor(param0: string);

                    public setReplyAction(param0: android.app.PendingIntent, param1: android.app.RemoteInput): android.app.Notification.CarExtender.Builder;

                    public addMessage(param0: string): android.app.Notification.CarExtender.Builder;

                    public build(): android.app.Notification.CarExtender.UnreadConversation;
                }
                export class UnreadConversation extends javalangObject {
                    public getReplyPendingIntent(): android.app.PendingIntent;

                    public getParticipants(): native.Array<string>;

                    public getLatestTimestamp(): number;

                    public getMessages(): native.Array<string>;

                    public getParticipant(): string;

                    public getReadPendingIntent(): android.app.PendingIntent;

                    public getRemoteInput(): android.app.RemoteInput;
                }
            }
            export class Extender extends javalangObject {
                /**
                 * Constructs a new instance of the android.app.Notification$Extender interface with the provided implementation.
                 */
                public constructor(implementation: {
                    extend(param0: android.app.Notification.Builder): android.app.Notification.Builder;
                });

                public extend(param0: android.app.Notification.Builder): android.app.Notification.Builder;
            }
            export class InboxStyle extends android.app.Notification.Style {
                public constructor(param0: android.app.Notification.Builder);

                public addLine(param0: string): android.app.Notification.InboxStyle;

                public setBigContentTitle(param0: string): android.app.Notification.InboxStyle;

                public setSummaryText(param0: string): android.app.Notification.InboxStyle;

                public constructor();
            }
            export class MediaStyle extends android.app.Notification.Style {
                public constructor(param0: android.app.Notification.Builder);

                public setMediaSession(param0: android.media.session.MediaSession.Token): android.app.Notification.MediaStyle;

                public setShowActionsInCompactView(param0: native.Array<number>): android.app.Notification.MediaStyle;

                public constructor();
            }
            export abstract class Style extends javalangObject {
                public mBuilder: android.app.Notification.Builder;

                public internalSetSummaryText(param0: string): void;

                public checkBuilder(): void;

                public internalSetBigContentTitle(param0: string): void;

                public getStandardView(param0: number): android.widget.RemoteViews;

                public setBuilder(param0: android.app.Notification.Builder): void;

                public constructor();

                public build(): android.app.Notification;
            }
            export class WearableExtender extends javalangObject implements android.app.Notification.Extender {
                public static SCREEN_TIMEOUT_LONG: number;
                public static SCREEN_TIMEOUT_SHORT: number;
                public static SIZE_DEFAULT: number;
                public static SIZE_FULL_SCREEN: number;
                public static SIZE_LARGE: number;
                public static SIZE_MEDIUM: number;
                public static SIZE_SMALL: number;
                public static SIZE_XSMALL: number;
                public static UNSET_ACTION_INDEX: number;

                public clearActions(): android.app.Notification.WearableExtender;

                public setHintScreenTimeout(param0: number): android.app.Notification.WearableExtender;

                public setGravity(param0: number): android.app.Notification.WearableExtender;

                public setCustomSizePreset(param0: number): android.app.Notification.WearableExtender;

                public getPages(): javautilList;

                public setContentIconGravity(param0: number): android.app.Notification.WearableExtender;

                public setDisplayIntent(param0: android.app.PendingIntent): android.app.Notification.WearableExtender;

                public getCustomSizePreset(): number;

                public setContentIcon(param0: number): android.app.Notification.WearableExtender;

                public getContentIcon(): number;

                public getContentIntentAvailableOffline(): boolean;

                public constructor();

                public setHintAvoidBackgroundClipping(param0: boolean): android.app.Notification.WearableExtender;

                public getGravity(): number;

                public getStartScrollBottom(): boolean;

                public getHintHideIcon(): boolean;

                public setContentAction(param0: number): android.app.Notification.WearableExtender;

                public clearPages(): android.app.Notification.WearableExtender;

                public addActions(param0: javautilList): android.app.Notification.WearableExtender;

                public clone(): javalangObject;

                public getCustomContentHeight(): number;

                public setContentIntentAvailableOffline(param0: boolean): android.app.Notification.WearableExtender;

                public getHintShowBackgroundOnly(): boolean;

                public getHintScreenTimeout(): number;

                public clone(): android.app.Notification.WearableExtender;

                public getContentAction(): number;

                public addAction(param0: android.app.Notification.Action): android.app.Notification.WearableExtender;

                public getContentIconGravity(): number;

                public setStartScrollBottom(param0: boolean): android.app.Notification.WearableExtender;

                public setHintHideIcon(param0: boolean): android.app.Notification.WearableExtender;

                public getHintAvoidBackgroundClipping(): boolean;

                public extend(param0: android.app.Notification.Builder): android.app.Notification.Builder;

                public setBackground(param0: android.graphics.Bitmap): android.app.Notification.WearableExtender;

                public addPage(param0: android.app.Notification): android.app.Notification.WearableExtender;

                public setHintShowBackgroundOnly(param0: boolean): android.app.Notification.WearableExtender;

                public constructor(param0: android.app.Notification);

                public getDisplayIntent(): android.app.PendingIntent;

                public getBackground(): android.graphics.Bitmap;

                public setCustomContentHeight(param0: number): android.app.Notification.WearableExtender;

                public addPages(param0: javautilList): android.app.Notification.WearableExtender;

                public getActions(): javautilList;
            }
        }
    }
}

/// <reference path="./android.app.Notification.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.service.notification.StatusBarNotification.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export class NotificationManager extends javalangObject {
            public static ACTION_INTERRUPTION_FILTER_CHANGED: string;
            public static ACTION_NOTIFICATION_POLICY_ACCESS_GRANTED_CHANGED: string;
            public static ACTION_NOTIFICATION_POLICY_CHANGED: string;
            public static INTERRUPTION_FILTER_ALARMS: number;
            public static INTERRUPTION_FILTER_ALL: number;
            public static INTERRUPTION_FILTER_NONE: number;
            public static INTERRUPTION_FILTER_PRIORITY: number;
            public static INTERRUPTION_FILTER_UNKNOWN: number;

            public notify(param0: number, param1: android.app.Notification): void;

            public cancelAll(): void;

            public cancel(param0: string, param1: number): void;

            public notify(param0: string, param1: number, param2: android.app.Notification): void;

            public isNotificationPolicyAccessGranted(): boolean;

            public notify(): void;

            public getCurrentInterruptionFilter(): number;

            public getActiveNotifications(): native.Array<android.service.notification.StatusBarNotification>;

            public cancel(param0: number): void;

            public setInterruptionFilter(param0: number): void;

            public setNotificationPolicy(param0: android.app.NotificationManager.Policy): void;

            public getNotificationPolicy(): android.app.NotificationManager.Policy;
        }
        export module NotificationManager {
            export class Policy extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public static PRIORITY_CATEGORY_CALLS: number;
                public static PRIORITY_CATEGORY_EVENTS: number;
                public static PRIORITY_CATEGORY_MESSAGES: number;
                public static PRIORITY_CATEGORY_REMINDERS: number;
                public static PRIORITY_CATEGORY_REPEAT_CALLERS: number;
                public static PRIORITY_SENDERS_ANY: number;
                public static PRIORITY_SENDERS_CONTACTS: number;
                public static PRIORITY_SENDERS_STARRED: number;
                public priorityCallSenders: number;
                public priorityCategories: number;
                public priorityMessageSenders: number;

                public constructor(param0: number, param1: number, param2: number);

                public static priorityCategoriesToString(param0: number): string;

                public equals(param0: javalangObject): boolean;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public hashCode(): number;

                public describeContents(): number;

                public toString(): string;

                public static prioritySendersToString(param0: number): string;
            }
        }
    }
}

/// <reference path="./android.app.PendingIntent.d.ts" />
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
    export module app {
        export class PendingIntent extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static FLAG_CANCEL_CURRENT: number;
            public static FLAG_IMMUTABLE: number;
            public static FLAG_NO_CREATE: number;
            public static FLAG_ONE_SHOT: number;
            public static FLAG_UPDATE_CURRENT: number;

            public send(): void;

            public equals(param0: javalangObject): boolean;

            public send(param0: android.content.Context, param1: number, param2: android.content.Intent): void;

            public cancel(): void;

            public getTargetPackage(): string;

            public static readPendingIntentOrNullFromParcel(param0: android.os.Parcel): android.app.PendingIntent;

            public getCreatorPackage(): string;

            public static getBroadcast(param0: android.content.Context, param1: number, param2: android.content.Intent, param3: number): android.app.PendingIntent;

            public send(param0: number): void;

            public getCreatorUserHandle(): android.os.UserHandle;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public static getActivity(param0: android.content.Context, param1: number, param2: android.content.Intent, param3: number): android.app.PendingIntent;

            public send(param0: android.content.Context, param1: number, param2: android.content.Intent, param3: android.app.PendingIntent.OnFinished, param4: android.os.Handler): void;

            public getCreatorUid(): number;

            public static getActivities(param0: android.content.Context, param1: number, param2: native.Array<android.content.Intent>, param3: number): android.app.PendingIntent;

            public send(param0: android.content.Context, param1: number, param2: android.content.Intent, param3: android.app.PendingIntent.OnFinished, param4: android.os.Handler, param5: string, param6: android.os.Bundle): void;

            public static writePendingIntentOrNullToParcel(param0: android.app.PendingIntent, param1: android.os.Parcel): void;

            public static getService(param0: android.content.Context, param1: number, param2: android.content.Intent, param3: number): android.app.PendingIntent;

            public send(param0: android.content.Context, param1: number, param2: android.content.Intent, param3: android.app.PendingIntent.OnFinished, param4: android.os.Handler, param5: string): void;

            public toString(): string;

            public getIntentSender(): android.content.IntentSender;

            public describeContents(): number;

            public static getActivities(param0: android.content.Context, param1: number, param2: native.Array<android.content.Intent>, param3: number, param4: android.os.Bundle): android.app.PendingIntent;

            public send(param0: number, param1: android.app.PendingIntent.OnFinished, param2: android.os.Handler): void;

            public static getActivity(param0: android.content.Context, param1: number, param2: android.content.Intent, param3: number, param4: android.os.Bundle): android.app.PendingIntent;

            public hashCode(): number;
        }
        export module PendingIntent {
            export class CanceledException extends android.util.AndroidException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor(param0: javalangException);
                public constructor();
            }
            export class OnFinished extends javalangObject {
                /**
                 * Constructs a new instance of the android.app.PendingIntent$OnFinished interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onSendFinished(param0: android.app.PendingIntent, param1: android.content.Intent, param2: number, param3: string, param4: android.os.Bundle): void;
                });

                public onSendFinished(param0: android.app.PendingIntent, param1: android.content.Intent, param2: number, param3: string, param4: android.os.Bundle): void;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.Display.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.SearchEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
declare module android {
    export module app {
        export class Presentation extends android.app.Dialog {
            public show(): void;

            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public getResources(): android.content.res.Resources;

            public onStart(): void;

            public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;

            public constructor(param0: android.content.Context, param1: boolean, param2: android.content.DialogInterface.OnCancelListener);

            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;

            public cancel(): void;

            public onPanelClosed(param0: number, param1: android.view.Menu): void;

            public onSearchRequested(): boolean;

            public constructor(param0: android.content.Context, param1: android.view.Display);

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onActionModeFinished(param0: android.view.ActionMode): void;

            public onCreatePanelView(param0: number): android.view.View;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public onDisplayChanged(): void;

            public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;

            public onStop(): void;

            public onDetachedFromWindow(): void;

            public onActionModeStarted(param0: android.view.ActionMode): void;

            public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;

            public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;

            public dismiss(): void;

            public onMenuOpened(param0: number, param1: android.view.Menu): boolean;

            public onSearchRequested(param0: android.view.SearchEvent): boolean;

            public constructor(param0: android.content.Context, param1: number);

            public getDisplay(): android.view.Display;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public onDisplayRemoved(): void;

            public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;

            public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;

            public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;

            public constructor(param0: android.content.Context);

            public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;

            public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;

            public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;

            public onWindowFocusChanged(param0: boolean): void;

            public onAttachedToWindow(): void;

            public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;

            public onContentChanged(): void;

            public constructor(param0: android.content.Context, param1: android.view.Display, param2: number);
        }
    }
}

import javatextNumberFormat = java.text.NumberFormat;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.SearchEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.text.NumberFormat.d.ts" />
declare module android {
    export module app {
        export class ProgressDialog extends android.app.AlertDialog {
            public static STYLE_HORIZONTAL: number;
            public static STYLE_SPINNER: number;

            public getProgress(): number;

            public onStart(): void;

            public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;

            public cancel(): void;

            public static show(param0: android.content.Context, param1: string, param2: string, param3: boolean, param4: boolean): android.app.ProgressDialog;
            public static show(param0: android.content.Context, param1: string, param2: string): android.app.ProgressDialog;

            public setProgressPercentFormat(param0: javatextNumberFormat): void;

            public setProgressNumberFormat(param0: string): void;

            public onSearchRequested(): boolean;

            public setProgress(param0: number): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public incrementProgressBy(param0: number): void;

            public onCreatePanelView(param0: number): android.view.View;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;

            public onDetachedFromWindow(): void;

            public setProgressStyle(param0: number): void;

            public constructor(param0: android.content.Context, param1: number);

            public isIndeterminate(): boolean;

            public setMessage(param0: string): void;

            public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;

            public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;

            public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;

            public static show(param0: android.content.Context, param1: string, param2: string, param3: boolean, param4: boolean, param5: android.content.DialogInterface.OnCancelListener): android.app.ProgressDialog;

            public onWindowFocusChanged(param0: boolean): void;

            public onCreate(param0: android.os.Bundle): void;

            public setIndeterminateDrawable(param0: android.graphics.drawable.Drawable): void;

            public onContentChanged(): void;

            public show(): void;

            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public getSecondaryProgress(): number;

            public constructor(param0: android.content.Context, param1: boolean, param2: android.content.DialogInterface.OnCancelListener);

            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;

            public static show(param0: android.content.Context, param1: string, param2: string, param3: boolean): android.app.ProgressDialog;

            public onPanelClosed(param0: number, param1: android.view.Menu): void;

            public getMax(): number;

            public setIndeterminate(param0: boolean): void;

            public onActionModeFinished(param0: android.view.ActionMode): void;

            public setMax(param0: number): void;

            public onStop(): void;

            public setSecondaryProgress(param0: number): void;

            public onActionModeStarted(param0: android.view.ActionMode): void;

            public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;

            public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;

            public dismiss(): void;

            public onMenuOpened(param0: number, param1: android.view.Menu): boolean;

            public onSearchRequested(param0: android.view.SearchEvent): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public setProgressDrawable(param0: android.graphics.drawable.Drawable): void;

            public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;

            public constructor(param0: android.content.Context);

            public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;

            public incrementSecondaryProgressBy(param0: number): void;

            public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;

            public onAttachedToWindow(): void;

            public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
        }
    }
}

/// <reference path="./android.app.RemoteInput.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export class RemoteInput extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static EXTRA_RESULTS_DATA: string;
            public static RESULTS_CLIP_LABEL: string;

            public getLabel(): string;

            public describeContents(): number;

            public getChoices(): native.Array<javalangCharSequence>;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getAllowFreeFormInput(): boolean;

            public static getResultsFromIntent(param0: android.content.Intent): android.os.Bundle;

            public getResultKey(): string;

            public static addResultsToIntent(param0: native.Array<android.app.RemoteInput>, param1: android.content.Intent, param2: android.os.Bundle): void;

            public getExtras(): android.os.Bundle;
        }
        export module RemoteInput {
            export class Builder extends javalangObject {
                public build(): android.app.RemoteInput;

                public setChoices(param0: native.Array<javalangCharSequence>): android.app.RemoteInput.Builder;

                public getExtras(): android.os.Bundle;

                public setLabel(param0: string): android.app.RemoteInput.Builder;

                public addExtras(param0: android.os.Bundle): android.app.RemoteInput.Builder;

                public constructor(param0: string);

                public setAllowFreeFormInput(param0: boolean): android.app.RemoteInput.Builder;
            }
        }
    }
}

/// <reference path="./android.app.SearchableInfo.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.DialogInterface.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module app {
        export class SearchManager extends javalangObject implements android.content.DialogInterface.OnDismissListener, android.content.DialogInterface.OnCancelListener {
            public static ACTION_KEY: string;
            public static ACTION_MSG: string;
            public static APP_DATA: string;
            public static CURSOR_EXTRA_KEY_IN_PROGRESS: string;
            public static EXTRA_DATA_KEY: string;
            public static EXTRA_NEW_SEARCH: string;
            public static EXTRA_SELECT_QUERY: string;
            public static EXTRA_WEB_SEARCH_PENDINGINTENT: string;
            public static FLAG_QUERY_REFINEMENT: number;
            public static INTENT_ACTION_GLOBAL_SEARCH: string;
            public static INTENT_ACTION_SEARCHABLES_CHANGED: string;
            public static INTENT_ACTION_SEARCH_SETTINGS: string;
            public static INTENT_ACTION_SEARCH_SETTINGS_CHANGED: string;
            public static INTENT_ACTION_WEB_SEARCH_SETTINGS: string;
            public static INTENT_GLOBAL_SEARCH_ACTIVITY_CHANGED: string;
            public static MENU_KEY: string;
            public static MENU_KEYCODE: number;
            public static QUERY: string;
            public static SHORTCUT_MIME_TYPE: string;
            public static SUGGEST_COLUMN_AUDIO_CHANNEL_CONFIG: string;
            public static SUGGEST_COLUMN_CONTENT_TYPE: string;
            public static SUGGEST_COLUMN_DURATION: string;
            public static SUGGEST_COLUMN_FLAGS: string;
            public static SUGGEST_COLUMN_FORMAT: string;
            public static SUGGEST_COLUMN_ICON_1: string;
            public static SUGGEST_COLUMN_ICON_2: string;
            public static SUGGEST_COLUMN_INTENT_ACTION: string;
            public static SUGGEST_COLUMN_INTENT_DATA: string;
            public static SUGGEST_COLUMN_INTENT_DATA_ID: string;
            public static SUGGEST_COLUMN_INTENT_EXTRA_DATA: string;
            public static SUGGEST_COLUMN_IS_LIVE: string;
            public static SUGGEST_COLUMN_LAST_ACCESS_HINT: string;
            public static SUGGEST_COLUMN_PRODUCTION_YEAR: string;
            public static SUGGEST_COLUMN_PURCHASE_PRICE: string;
            public static SUGGEST_COLUMN_QUERY: string;
            public static SUGGEST_COLUMN_RATING_SCORE: string;
            public static SUGGEST_COLUMN_RATING_STYLE: string;
            public static SUGGEST_COLUMN_RENTAL_PRICE: string;
            public static SUGGEST_COLUMN_RESULT_CARD_IMAGE: string;
            public static SUGGEST_COLUMN_SHORTCUT_ID: string;
            public static SUGGEST_COLUMN_SPINNER_WHILE_REFRESHING: string;
            public static SUGGEST_COLUMN_TEXT_1: string;
            public static SUGGEST_COLUMN_TEXT_2: string;
            public static SUGGEST_COLUMN_TEXT_2_URL: string;
            public static SUGGEST_COLUMN_VIDEO_HEIGHT: string;
            public static SUGGEST_COLUMN_VIDEO_WIDTH: string;
            public static SUGGEST_MIME_TYPE: string;
            public static SUGGEST_NEVER_MAKE_SHORTCUT: string;
            public static SUGGEST_PARAMETER_LIMIT: string;
            public static SUGGEST_URI_PATH_QUERY: string;
            public static SUGGEST_URI_PATH_SHORTCUT: string;
            public static USER_QUERY: string;

            public getGlobalSearchActivity(): android.content.ComponentName;

            public stopSearch(): void;

            public getSearchablesInGlobalSearch(): javautilList;

            public setOnCancelListener(param0: android.app.SearchManager.OnCancelListener): void;

            public onCancel(param0: android.content.DialogInterface): void;

            public onDismiss(param0: android.content.DialogInterface): void;

            public getSearchableInfo(param0: android.content.ComponentName): android.app.SearchableInfo;

            public triggerSearch(param0: string, param1: android.content.ComponentName, param2: android.os.Bundle): void;

            public setOnDismissListener(param0: android.app.SearchManager.OnDismissListener): void;

            public startSearch(param0: string, param1: boolean, param2: android.content.ComponentName, param3: android.os.Bundle, param4: boolean): void;
        }
        export module SearchManager {
            export class OnCancelListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.app.SearchManager$OnCancelListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onCancel(): void;
                });

                public onCancel(): void;
            }
            export class OnDismissListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.app.SearchManager$OnDismissListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onDismiss(): void;
                });

                public onDismiss(): void;
            }
        }
    }
}

/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module app {
        export class SearchableInfo extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public getSearchActivity(): android.content.ComponentName;

            public getImeOptions(): number;

            public getVoiceLanguageModeId(): number;

            public getVoicePromptTextId(): number;

            public getSuggestThreshold(): number;

            public getVoiceMaxResults(): number;

            public getVoiceSearchLaunchWebSearch(): boolean;

            public getSuggestAuthority(): string;

            public getSettingsDescriptionId(): number;

            public getVoiceLanguageId(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getInputType(): number;

            public getSuggestSelection(): string;

            public getSuggestPackage(): string;

            public autoUrlDetect(): boolean;

            public getSuggestPath(): string;

            public getSuggestIntentAction(): string;

            public shouldIncludeInGlobalSearch(): boolean;

            public getHintId(): number;

            public queryAfterZeroResults(): boolean;

            public describeContents(): number;

            public getSuggestIntentData(): string;

            public getVoiceSearchEnabled(): boolean;

            public getVoiceSearchLaunchRecognizer(): boolean;

            public shouldRewriteQueryFromText(): boolean;

            public shouldRewriteQueryFromData(): boolean;
        }
    }
}

/// <reference path="./android.app.Application.d.ts" />
/// <reference path="./android.app.Notification.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
declare module android {
    export module app {
        export abstract class Service extends android.content.ContextWrapper implements android.content.ComponentCallbacks2 {
            public static START_CONTINUATION_MASK: number;
            public static START_FLAG_REDELIVERY: number;
            public static START_FLAG_RETRY: number;
            public static START_NOT_STICKY: number;
            public static START_REDELIVER_INTENT: number;
            public static START_STICKY: number;
            public static START_STICKY_COMPATIBILITY: number;

            public onConfigurationChanged(param0: android.content.res.Configuration): void;

            public onUnbind(param0: android.content.Intent): boolean;

            public onBind(param0: android.content.Intent): android.os.IBinder;

            public startForeground(param0: number, param1: android.app.Notification): void;

            public stopForeground(param0: boolean): void;

            public stopSelf(param0: number): void;

            public onCreate(): void;

            public constructor();

            public getApplication(): android.app.Application;

            public onDestroy(): void;

            public onStartCommand(param0: android.content.Intent, param1: number, param2: number): number;

            public onStart(param0: android.content.Intent, param1: number): void;

            public onLowMemory(): void;

            public onTrimMemory(param0: number): void;

            public onRebind(param0: android.content.Intent): void;

            public constructor(param0: android.content.Context);

            public dump(param0: javaioFileDescriptor, param1: javaioPrintWriter, param2: native.Array<string>): void;

            public onTaskRemoved(param0: android.content.Intent): void;

            public stopSelf(): void;

            public stopSelfResult(param0: number): boolean;
        }
    }
}

import javautilMap = java.util.Map;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module android {
    export module app {
        export abstract class SharedElementCallback extends javalangObject {
            public onMapSharedElements(param0: javautilList, param1: javautilMap): void;

            public onSharedElementStart(param0: javautilList, param1: javautilList, param2: javautilList): void;

            public onRejectSharedElements(param0: javautilList): void;

            public onCaptureSharedElementSnapshot(param0: android.view.View, param1: android.graphics.Matrix, param2: android.graphics.RectF): android.os.Parcelable;

            public onSharedElementsArrived(param0: javautilList, param1: javautilList, param2: android.app.SharedElementCallback.OnSharedElementsReadyListener): void;

            public onCreateSnapshotView(param0: android.content.Context, param1: android.os.Parcelable): android.view.View;

            public constructor();

            public onSharedElementEnd(param0: javautilList, param1: javautilList, param2: javautilList): void;
        }
        export module SharedElementCallback {
            export class OnSharedElementsReadyListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.app.SharedElementCallback$OnSharedElementsReadyListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onSharedElementsReady(): void;
                });

                public onSharedElementsReady(): void;
            }
        }
    }
}

/// <reference path="./android.app.Activity.d.ts" />
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
/// <reference path="./android.widget.TabHost.d.ts" />
/// <reference path="./android.widget.TabWidget.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export class TabActivity extends android.app.ActivityGroup {
            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public constructor(param0: boolean);

            public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;

            public setDefaultTab(param0: string): void;

            public getTabWidget(): android.widget.TabWidget;

            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;

            public onChildTitleChanged(param0: android.app.Activity, param1: string): void;

            public onPanelClosed(param0: number, param1: android.view.Menu): void;

            public onSaveInstanceState(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;

            public onSearchRequested(): boolean;

            public onTrimMemory(param0: number): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onActionModeFinished(param0: android.view.ActionMode): void;

            public onPostCreate(param0: android.os.Bundle): void;

            public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);

            public onCreatePanelView(param0: number): android.view.View;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public getTabHost(): android.widget.TabHost;

            public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;

            public onDetachedFromWindow(): void;

            public onActionModeStarted(param0: android.view.ActionMode): void;

            public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;

            public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;

            public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;

            public onMenuOpened(param0: number, param1: android.view.Menu): boolean;

            public onSearchRequested(param0: android.view.SearchEvent): boolean;

            public constructor();

            public onRestoreInstanceState(param0: android.os.Bundle): void;

            public onCreateView(param0: string, param1: android.content.Context, param2: android.util.AttributeSet): android.view.View;

            public setDefaultTab(param0: number): void;

            public constructor(param0: android.content.Context, param1: number);

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public onRestoreInstanceState(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;

            public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;

            public onPostCreate(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;

            public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;

            public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;

            public onSaveInstanceState(param0: android.os.Bundle): void;

            public constructor(param0: android.content.Context);

            public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;

            public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;

            public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;

            public onWindowFocusChanged(param0: boolean): void;

            public onAttachedToWindow(): void;

            public onContentChanged(): void;

            public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
        }
    }
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
declare module android {
    export module app {
        export class TaskStackBuilder extends javalangObject {
            public addNextIntentWithParentStack(param0: android.content.Intent): android.app.TaskStackBuilder;

            public addParentStack(param0: javalangClass): android.app.TaskStackBuilder;

            public editIntentAt(param0: number): android.content.Intent;

            public static create(param0: android.content.Context): android.app.TaskStackBuilder;

            public addParentStack(param0: android.content.ComponentName): android.app.TaskStackBuilder;

            public startActivities(param0: android.os.Bundle): void;

            public getIntents(): native.Array<android.content.Intent>;

            public addNextIntent(param0: android.content.Intent): android.app.TaskStackBuilder;

            public startActivities(): void;

            public addParentStack(param0: android.app.Activity): android.app.TaskStackBuilder;

            public getIntentCount(): number;

            public getPendingIntent(param0: number, param1: number): android.app.PendingIntent;
            public getPendingIntent(param0: number, param1: number, param2: android.os.Bundle): android.app.PendingIntent;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.DialogInterface.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.SearchEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.widget.TimePicker.d.ts" />
declare module android {
    export module app {
        export class TimePickerDialog extends android.app.AlertDialog implements android.content.DialogInterface.OnClickListener, android.widget.TimePicker.OnTimeChangedListener {
            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;

            public onClick(param0: android.content.DialogInterface, param1: number): void;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;

            public constructor(param0: android.content.Context, param1: boolean, param2: android.content.DialogInterface.OnCancelListener);

            public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;

            public updateTime(param0: number, param1: number): void;

            public cancel(): void;

            public onPanelClosed(param0: number, param1: android.view.Menu): void;

            public onSearchRequested(): boolean;

            public onTimeChanged(param0: android.widget.TimePicker, param1: number, param2: number): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context, param1: android.app.TimePickerDialog.OnTimeSetListener, param2: number, param3: number, param4: boolean);

            public onActionModeFinished(param0: android.view.ActionMode): void;

            public onCreatePanelView(param0: number): android.view.View;

            public onSaveInstanceState(): android.os.Bundle;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;

            public onDetachedFromWindow(): void;

            public onActionModeStarted(param0: android.view.ActionMode): void;

            public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;

            public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;

            public dismiss(): void;

            public onMenuOpened(param0: number, param1: android.view.Menu): boolean;

            public onSearchRequested(param0: android.view.SearchEvent): boolean;

            public onRestoreInstanceState(param0: android.os.Bundle): void;

            public constructor(param0: android.content.Context, param1: number);
            public constructor(param0: android.content.Context, param1: number, param2: android.app.TimePickerDialog.OnTimeSetListener, param3: number, param4: number, param5: boolean);

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;

            public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;

            public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;

            public constructor(param0: android.content.Context);

            public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;

            public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;

            public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;

            public onWindowFocusChanged(param0: boolean): void;

            public onAttachedToWindow(): void;

            public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;

            public onContentChanged(): void;
        }
        export module TimePickerDialog {
            export class OnTimeSetListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.app.TimePickerDialog$OnTimeSetListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onTimeSet(param0: android.widget.TimePicker, param1: number, param2: number): void;
                });

                public onTimeSet(param0: android.widget.TimePicker, param1: number, param2: number): void;
            }
        }
    }
}

/// <reference path="./android.accessibilityservice.AccessibilityServiceInfo.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./android.view.InputEvent.d.ts" />
/// <reference path="./android.view.WindowAnimationFrameStats.d.ts" />
/// <reference path="./android.view.WindowContentFrameStats.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityNodeInfo.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module app {
        export class UiAutomation extends javalangObject {
            public static ROTATION_FREEZE_0: number;
            public static ROTATION_FREEZE_180: number;
            public static ROTATION_FREEZE_270: number;
            public static ROTATION_FREEZE_90: number;
            public static ROTATION_FREEZE_CURRENT: number;
            public static ROTATION_UNFREEZE: number;

            public takeScreenshot(): android.graphics.Bitmap;

            public injectInputEvent(param0: android.view.InputEvent, param1: boolean): boolean;

            public getWindowContentFrameStats(param0: number): android.view.WindowContentFrameStats;

            public clearWindowAnimationFrameStats(): void;

            public performGlobalAction(param0: number): boolean;

            public getWindowAnimationFrameStats(): android.view.WindowAnimationFrameStats;

            public findFocus(param0: number): android.view.accessibility.AccessibilityNodeInfo;

            public getRootInActiveWindow(): android.view.accessibility.AccessibilityNodeInfo;

            public waitForIdle(param0: number, param1: number): void;

            public getServiceInfo(): android.accessibilityservice.AccessibilityServiceInfo;

            public executeAndWaitForEvent(param0: javalangRunnable, param1: android.app.UiAutomation.AccessibilityEventFilter, param2: number): android.view.accessibility.AccessibilityEvent;

            public setRunAsMonkey(param0: boolean): void;

            public setOnAccessibilityEventListener(param0: android.app.UiAutomation.OnAccessibilityEventListener): void;

            public setServiceInfo(param0: android.accessibilityservice.AccessibilityServiceInfo): void;

            public executeShellCommand(param0: string): android.os.ParcelFileDescriptor;

            public getWindows(): javautilList;

            public setRotation(param0: number): boolean;

            public clearWindowContentFrameStats(param0: number): boolean;
        }
        export module UiAutomation {
            export class AccessibilityEventFilter extends javalangObject {
                /**
                 * Constructs a new instance of the android.app.UiAutomation$AccessibilityEventFilter interface with the provided implementation.
                 */
                public constructor(implementation: {
                    accept(param0: android.view.accessibility.AccessibilityEvent): boolean;
                });

                public accept(param0: android.view.accessibility.AccessibilityEvent): boolean;
            }
            export class OnAccessibilityEventListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.app.UiAutomation$OnAccessibilityEventListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;
                });

                public onAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;
            }
        }
    }
}

declare module android {
    export module app {
        export class UiModeManager extends javalangObject {
            public static ACTION_ENTER_CAR_MODE: string;
            public static ACTION_ENTER_DESK_MODE: string;
            public static ACTION_EXIT_CAR_MODE: string;
            public static ACTION_EXIT_DESK_MODE: string;
            public static DISABLE_CAR_MODE_GO_HOME: number;
            public static ENABLE_CAR_MODE_ALLOW_SLEEP: number;
            public static ENABLE_CAR_MODE_GO_CAR_HOME: number;
            public static MODE_NIGHT_AUTO: number;
            public static MODE_NIGHT_NO: number;
            public static MODE_NIGHT_YES: number;

            public getNightMode(): number;

            public enableCarMode(param0: number): void;

            public setNightMode(param0: number): void;

            public disableCarMode(param0: number): void;

            public getCurrentModeType(): number;
        }
    }
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export class VoiceInteractor extends javalangObject {
            public submitRequest(param0: android.app.VoiceInteractor.Request): boolean;
            public submitRequest(param0: android.app.VoiceInteractor.Request, param1: string): boolean;

            public getActiveRequests(): native.Array<android.app.VoiceInteractor.Request>;

            public getActiveRequest(param0: string): android.app.VoiceInteractor.Request;

            public supportsCommands(param0: native.Array<string>): native.Array<boolean>;
        }
        export module VoiceInteractor {
            export class AbortVoiceRequest extends android.app.VoiceInteractor.Request {
                public constructor(param0: android.app.VoiceInteractor.Prompt, param1: android.os.Bundle);

                public onAbortResult(param0: android.os.Bundle): void;
            }
            export class CommandRequest extends android.app.VoiceInteractor.Request {
                public constructor(param0: string, param1: android.os.Bundle);

                public onCommandResult(param0: boolean, param1: android.os.Bundle): void;
            }
            export class CompleteVoiceRequest extends android.app.VoiceInteractor.Request {
                public constructor(param0: android.app.VoiceInteractor.Prompt, param1: android.os.Bundle);

                public onCompleteResult(param0: android.os.Bundle): void;
            }
            export class ConfirmationRequest extends android.app.VoiceInteractor.Request {
                public constructor(param0: android.app.VoiceInteractor.Prompt, param1: android.os.Bundle);

                public onConfirmationResult(param0: boolean, param1: android.os.Bundle): void;
            }
            export class PickOptionRequest extends android.app.VoiceInteractor.Request {
                public onPickOptionResult(param0: boolean, param1: native.Array<android.app.VoiceInteractor.PickOptionRequest.Option>, param2: android.os.Bundle): void;

                public constructor(param0: android.app.VoiceInteractor.Prompt, param1: native.Array<android.app.VoiceInteractor.PickOptionRequest.Option>, param2: android.os.Bundle);
            }
            export module PickOptionRequest {
                export class Option extends javalangObject implements android.os.Parcelable {
                    public static CREATOR: android.os.Parcelable.Creator;

                    public addSynonym(param0: string): android.app.VoiceInteractor.PickOptionRequest.Option;

                    public getLabel(): string;

                    public getIndex(): number;

                    public setExtras(param0: android.os.Bundle): void;

                    public constructor(param0: string, param1: number);

                    public describeContents(): number;

                    public countSynonyms(): number;

                    public getExtras(): android.os.Bundle;

                    public getSynonymAt(param0: number): string;

                    public writeToParcel(param0: android.os.Parcel, param1: number): void;
                }
            }
            export class Prompt extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public getVisualPrompt(): string;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public countVoicePrompts(): number;

                public constructor(param0: native.Array<javalangCharSequence>, param1: string);

                public toString(): string;

                public constructor(param0: string);

                public getVoicePromptAt(param0: number): string;
            }
            export abstract class Request extends javalangObject {
                public onCancel(): void;

                public cancel(): void;

                public getName(): string;

                public toString(): string;

                public getContext(): android.content.Context;

                public getActivity(): android.app.Activity;

                public onAttached(param0: android.app.Activity): void;

                public onDetached(): void;
            }
        }
    }
}

/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.content.pm.ResolveInfo.d.ts" />
/// <reference path="./android.content.pm.ServiceInfo.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export class WallpaperInfo extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public loadIcon(param0: android.content.pm.PackageManager): android.graphics.drawable.Drawable;

            public getPackageName(): string;

            public constructor(param0: android.content.Context, param1: android.content.pm.ResolveInfo);

            public getServiceName(): string;

            public loadLabel(param0: android.content.pm.PackageManager): string;

            public getComponent(): android.content.ComponentName;

            public toString(): string;

            public loadAuthor(param0: android.content.pm.PackageManager): string;

            public loadDescription(param0: android.content.pm.PackageManager): string;

            public getServiceInfo(): android.content.pm.ServiceInfo;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getSettingsActivity(): string;

            public loadThumbnail(param0: android.content.pm.PackageManager): android.graphics.drawable.Drawable;

            public dump(param0: android.util.Printer, param1: string): void;
        }
    }
}

import javaioInputStream = java.io.InputStream;
/// <reference path="./android.app.WallpaperInfo.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export class WallpaperManager extends javalangObject {
            public static ACTION_CHANGE_LIVE_WALLPAPER: string;
            public static ACTION_CROP_AND_SET_WALLPAPER: string;
            public static ACTION_LIVE_WALLPAPER_CHOOSER: string;
            public static COMMAND_DROP: string;
            public static COMMAND_SECONDARY_TAP: string;
            public static COMMAND_TAP: string;
            public static EXTRA_LIVE_WALLPAPER_COMPONENT: string;
            public static WALLPAPER_PREVIEW_META_DATA: string;

            public getBuiltInDrawable(): android.graphics.drawable.Drawable;

            public getDesiredMinimumHeight(): number;

            public clear(): void;

            public getDrawable(): android.graphics.drawable.Drawable;

            public setStream(param0: javaioInputStream): void;

            public getWallpaperInfo(): android.app.WallpaperInfo;

            public getDesiredMinimumWidth(): number;

            public setWallpaperOffsets(param0: android.os.IBinder, param1: number, param2: number): void;

            public peekFastDrawable(): android.graphics.drawable.Drawable;

            public setResource(param0: number): void;

            public forgetLoadedWallpaper(): void;

            public getBuiltInDrawable(param0: number, param1: number, param2: boolean, param3: number, param4: number): android.graphics.drawable.Drawable;

            public setBitmap(param0: android.graphics.Bitmap): void;

            public static getInstance(param0: android.content.Context): android.app.WallpaperManager;

            public getFastDrawable(): android.graphics.drawable.Drawable;

            public suggestDesiredDimensions(param0: number, param1: number): void;

            public sendWallpaperCommand(param0: android.os.IBinder, param1: string, param2: number, param3: number, param4: number, param5: android.os.Bundle): void;

            public hasResourceWallpaper(param0: number): boolean;

            public clearWallpaperOffsets(param0: android.os.IBinder): void;

            public setWallpaperOffsetSteps(param0: number, param1: number): void;

            public isWallpaperSupported(): boolean;

            public peekDrawable(): android.graphics.drawable.Drawable;

            public getCropAndSetWallpaperIntent(param0: android.net.Uri): android.content.Intent;
        }
    }
}

/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.pm.ActivityInfo.d.ts" />
/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.content.pm.ResolveInfo.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export module admin {
            export class DeviceAdminInfo extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public static USES_ENCRYPTED_STORAGE: number;
                public static USES_POLICY_DISABLE_CAMERA: number;
                public static USES_POLICY_DISABLE_KEYGUARD_FEATURES: number;
                public static USES_POLICY_EXPIRE_PASSWORD: number;
                public static USES_POLICY_FORCE_LOCK: number;
                public static USES_POLICY_LIMIT_PASSWORD: number;
                public static USES_POLICY_RESET_PASSWORD: number;
                public static USES_POLICY_WATCH_LOGIN: number;
                public static USES_POLICY_WIPE_DATA: number;

                public loadDescription(param0: android.content.pm.PackageManager): string;

                public isVisible(): boolean;

                public constructor(param0: android.content.Context, param1: android.content.pm.ResolveInfo);

                public loadLabel(param0: android.content.pm.PackageManager): string;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getPackageName(): string;

                public loadIcon(param0: android.content.pm.PackageManager): android.graphics.drawable.Drawable;

                public dump(param0: android.util.Printer, param1: string): void;

                public getComponent(): android.content.ComponentName;

                public getTagForPolicy(param0: number): string;

                public toString(): string;

                public getActivityInfo(): android.content.pm.ActivityInfo;

                public describeContents(): number;

                public getReceiverName(): string;

                public usesPolicy(param0: number): boolean;
            }
        }
    }
}

/// <reference path="./android.app.admin.DevicePolicyManager.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export module admin {
            export class DeviceAdminReceiver extends android.content.BroadcastReceiver {
                public static ACTION_DEVICE_ADMIN_DISABLED: string;
                public static ACTION_DEVICE_ADMIN_DISABLE_REQUESTED: string;
                public static ACTION_DEVICE_ADMIN_ENABLED: string;
                public static ACTION_LOCK_TASK_ENTERING: string;
                public static ACTION_LOCK_TASK_EXITING: string;
                public static ACTION_PASSWORD_CHANGED: string;
                public static ACTION_PASSWORD_EXPIRING: string;
                public static ACTION_PASSWORD_FAILED: string;
                public static ACTION_PASSWORD_SUCCEEDED: string;
                public static ACTION_PROFILE_PROVISIONING_COMPLETE: string;
                public static DEVICE_ADMIN_META_DATA: string;
                public static EXTRA_DISABLE_WARNING: string;
                public static EXTRA_LOCK_TASK_PACKAGE: string;

                public onEnabled(param0: android.content.Context, param1: android.content.Intent): void;

                public onDisabled(param0: android.content.Context, param1: android.content.Intent): void;

                public getManager(param0: android.content.Context): android.app.admin.DevicePolicyManager;

                public onPasswordSucceeded(param0: android.content.Context, param1: android.content.Intent): void;

                public onReadyForUserInitialization(param0: android.content.Context, param1: android.content.Intent): void;

                public onDisableRequested(param0: android.content.Context, param1: android.content.Intent): string;

                public onPasswordExpiring(param0: android.content.Context, param1: android.content.Intent): void;

                public constructor();

                public onPasswordChanged(param0: android.content.Context, param1: android.content.Intent): void;

                public onProfileProvisioningComplete(param0: android.content.Context, param1: android.content.Intent): void;

                public onSystemUpdatePending(param0: android.content.Context, param1: android.content.Intent, param2: number): void;

                public getWho(param0: android.content.Context): android.content.ComponentName;

                public onChoosePrivateKeyAlias(param0: android.content.Context, param1: android.content.Intent, param2: number, param3: android.net.Uri, param4: string): string;

                public onReceive(param0: android.content.Context, param1: android.content.Intent): void;

                public onPasswordFailed(param0: android.content.Context, param1: android.content.Intent): void;

                public onLockTaskModeEntering(param0: android.content.Context, param1: android.content.Intent, param2: string): void;

                public onLockTaskModeExiting(param0: android.content.Context, param1: android.content.Intent): void;
            }
        }
    }
}

import javasecurityPrivateKey = java.security.PrivateKey;
import javasecuritycertCertificate = java.security.cert.Certificate;
/// <reference path="./android.app.admin.SystemUpdatePolicy.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.IntentFilter.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.net.ProxyInfo.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./android.os.UserHandle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.PrivateKey.d.ts" />
/// <reference path="./java.security.cert.Certificate.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module app {
        export module admin {
            export class DevicePolicyManager extends javalangObject {
                public static ACTION_ADD_DEVICE_ADMIN: string;
                public static ACTION_DEVICE_OWNER_CHANGED: string;
                public static ACTION_MANAGED_PROFILE_PROVISIONED: string;
                public static ACTION_PROVISION_MANAGED_DEVICE: string;
                public static ACTION_PROVISION_MANAGED_PROFILE: string;
                public static ACTION_SET_NEW_PASSWORD: string;
                public static ACTION_START_ENCRYPTION: string;
                public static ACTION_SYSTEM_UPDATE_POLICY_CHANGED: string;
                public static ENCRYPTION_STATUS_ACTIVATING: number;
                public static ENCRYPTION_STATUS_ACTIVE: number;
                public static ENCRYPTION_STATUS_ACTIVE_DEFAULT_KEY: number;
                public static ENCRYPTION_STATUS_INACTIVE: number;
                public static ENCRYPTION_STATUS_UNSUPPORTED: number;
                public static EXTRA_ADD_EXPLANATION: string;
                public static EXTRA_DEVICE_ADMIN: string;
                public static EXTRA_PROVISIONING_ACCOUNT_TO_MIGRATE: string;
                public static EXTRA_PROVISIONING_ADMIN_EXTRAS_BUNDLE: string;
                public static EXTRA_PROVISIONING_DEVICE_ADMIN_COMPONENT_NAME: string;
                public static EXTRA_PROVISIONING_DEVICE_ADMIN_MINIMUM_VERSION_CODE: string;
                public static EXTRA_PROVISIONING_DEVICE_ADMIN_PACKAGE_CHECKSUM: string;
                public static EXTRA_PROVISIONING_DEVICE_ADMIN_PACKAGE_DOWNLOAD_COOKIE_HEADER: string;
                public static EXTRA_PROVISIONING_DEVICE_ADMIN_PACKAGE_DOWNLOAD_LOCATION: string;
                public static EXTRA_PROVISIONING_DEVICE_ADMIN_PACKAGE_NAME: string;
                public static EXTRA_PROVISIONING_DEVICE_ADMIN_SIGNATURE_CHECKSUM: string;
                public static EXTRA_PROVISIONING_EMAIL_ADDRESS: string;
                public static EXTRA_PROVISIONING_LEAVE_ALL_SYSTEM_APPS_ENABLED: string;
                public static EXTRA_PROVISIONING_LOCALE: string;
                public static EXTRA_PROVISIONING_LOCAL_TIME: string;
                public static EXTRA_PROVISIONING_SKIP_ENCRYPTION: string;
                public static EXTRA_PROVISIONING_TIME_ZONE: string;
                public static EXTRA_PROVISIONING_WIFI_HIDDEN: string;
                public static EXTRA_PROVISIONING_WIFI_PAC_URL: string;
                public static EXTRA_PROVISIONING_WIFI_PASSWORD: string;
                public static EXTRA_PROVISIONING_WIFI_PROXY_BYPASS: string;
                public static EXTRA_PROVISIONING_WIFI_PROXY_HOST: string;
                public static EXTRA_PROVISIONING_WIFI_PROXY_PORT: string;
                public static EXTRA_PROVISIONING_WIFI_SECURITY_TYPE: string;
                public static EXTRA_PROVISIONING_WIFI_SSID: string;
                public static FLAG_MANAGED_CAN_ACCESS_PARENT: number;
                public static FLAG_PARENT_CAN_ACCESS_MANAGED: number;
                public static KEYGUARD_DISABLE_FEATURES_ALL: number;
                public static KEYGUARD_DISABLE_FEATURES_NONE: number;
                public static KEYGUARD_DISABLE_FINGERPRINT: number;
                public static KEYGUARD_DISABLE_SECURE_CAMERA: number;
                public static KEYGUARD_DISABLE_SECURE_NOTIFICATIONS: number;
                public static KEYGUARD_DISABLE_TRUST_AGENTS: number;
                public static KEYGUARD_DISABLE_UNREDACTED_NOTIFICATIONS: number;
                public static KEYGUARD_DISABLE_WIDGETS_ALL: number;
                public static MIME_TYPE_PROVISIONING_NFC: string;
                public static PASSWORD_QUALITY_ALPHABETIC: number;
                public static PASSWORD_QUALITY_ALPHANUMERIC: number;
                public static PASSWORD_QUALITY_BIOMETRIC_WEAK: number;
                public static PASSWORD_QUALITY_COMPLEX: number;
                public static PASSWORD_QUALITY_NUMERIC: number;
                public static PASSWORD_QUALITY_NUMERIC_COMPLEX: number;
                public static PASSWORD_QUALITY_SOMETHING: number;
                public static PASSWORD_QUALITY_UNSPECIFIED: number;
                public static PERMISSION_GRANT_STATE_DEFAULT: number;
                public static PERMISSION_GRANT_STATE_DENIED: number;
                public static PERMISSION_GRANT_STATE_GRANTED: number;
                public static PERMISSION_POLICY_AUTO_DENY: number;
                public static PERMISSION_POLICY_AUTO_GRANT: number;
                public static PERMISSION_POLICY_PROMPT: number;
                public static RESET_PASSWORD_DO_NOT_ASK_CREDENTIALS_ON_BOOT: number;
                public static RESET_PASSWORD_REQUIRE_ENTRY: number;
                public static WIPE_EXTERNAL_STORAGE: number;
                public static WIPE_RESET_PROTECTION_DATA: number;

                public wipeData(param0: number): void;

                public uninstallCaCert(param0: android.content.ComponentName, param1: native.Array<number>): void;

                public getMaximumTimeToLock(param0: android.content.ComponentName): number;

                public setKeyguardDisabled(param0: android.content.ComponentName, param1: boolean): boolean;

                public setStatusBarDisabled(param0: android.content.ComponentName, param1: boolean): boolean;

                public getAutoTimeRequired(): boolean;

                public getPasswordMinimumNumeric(param0: android.content.ComponentName): number;

                public getCurrentFailedPasswordAttempts(): number;

                public getCameraDisabled(param0: android.content.ComponentName): boolean;

                public setStorageEncryption(param0: android.content.ComponentName, param1: boolean): number;

                public setUninstallBlocked(param0: android.content.ComponentName, param1: string, param2: boolean): void;

                public setMasterVolumeMuted(param0: android.content.ComponentName, param1: boolean): void;

                public getInstalledCaCerts(param0: android.content.ComponentName): javautilList;

                public setRestrictionsProvider(param0: android.content.ComponentName, param1: android.content.ComponentName): void;

                public setGlobalSetting(param0: android.content.ComponentName, param1: string, param2: string): void;

                public clearCrossProfileIntentFilters(param0: android.content.ComponentName): void;

                public switchUser(param0: android.content.ComponentName, param1: android.os.UserHandle): boolean;

                public setBluetoothContactSharingDisabled(param0: android.content.ComponentName, param1: boolean): void;

                public getPasswordMinimumUpperCase(param0: android.content.ComponentName): number;

                public setTrustAgentConfiguration(param0: android.content.ComponentName, param1: android.content.ComponentName, param2: android.os.PersistableBundle): void;

                public getAccountTypesWithManagementDisabled(): native.Array<string>;

                public setPasswordMinimumUpperCase(param0: android.content.ComponentName, param1: number): void;

                public getActiveAdmins(): javautilList;

                public createUser(param0: android.content.ComponentName, param1: string): android.os.UserHandle;

                public setAutoTimeRequired(param0: android.content.ComponentName, param1: boolean): void;

                public resetPassword(param0: string, param1: number): boolean;

                public setApplicationHidden(param0: android.content.ComponentName, param1: string, param2: boolean): boolean;

                public installKeyPair(param0: android.content.ComponentName, param1: javasecurityPrivateKey, param2: javasecuritycertCertificate, param3: string): boolean;

                public setPasswordMinimumLetters(param0: android.content.ComponentName, param1: number): void;

                public removeUser(param0: android.content.ComponentName, param1: android.os.UserHandle): boolean;

                public getBluetoothContactSharingDisabled(param0: android.content.ComponentName): boolean;

                public getPasswordMinimumLetters(param0: android.content.ComponentName): number;

                public clearPackagePersistentPreferredActivities(param0: android.content.ComponentName, param1: string): void;

                public setPasswordMinimumNumeric(param0: android.content.ComponentName, param1: number): void;

                public getMaximumFailedPasswordsForWipe(param0: android.content.ComponentName): number;

                public setPermittedAccessibilityServices(param0: android.content.ComponentName, param1: javautilList): boolean;

                public setAccountManagementDisabled(param0: android.content.ComponentName, param1: string, param2: boolean): void;

                public getScreenCaptureDisabled(param0: android.content.ComponentName): boolean;

                public getCertInstallerPackage(param0: android.content.ComponentName): string;

                public addPersistentPreferredActivity(param0: android.content.ComponentName, param1: android.content.IntentFilter, param2: android.content.ComponentName): void;

                public isLockTaskPermitted(param0: string): boolean;

                public getStorageEncryptionStatus(): number;

                public createAndInitializeUser(param0: android.content.ComponentName, param1: string, param2: string, param3: android.content.ComponentName, param4: android.os.Bundle): android.os.UserHandle;

                public getPasswordMinimumLength(param0: android.content.ComponentName): number;

                public hasCaCertInstalled(param0: android.content.ComponentName, param1: native.Array<number>): boolean;

                public isUninstallBlocked(param0: android.content.ComponentName, param1: string): boolean;

                public getPasswordExpirationTimeout(param0: android.content.ComponentName): number;

                public addUserRestriction(param0: android.content.ComponentName, param1: string): void;

                public setProfileEnabled(param0: android.content.ComponentName): void;

                public getPasswordMinimumSymbols(param0: android.content.ComponentName): number;

                public getPasswordMinimumNonLetter(param0: android.content.ComponentName): number;

                public isProfileOwnerApp(param0: string): boolean;

                public getCrossProfileCallerIdDisabled(param0: android.content.ComponentName): boolean;

                public getSystemUpdatePolicy(): android.app.admin.SystemUpdatePolicy;

                public getPasswordQuality(param0: android.content.ComponentName): number;

                public enableSystemApp(param0: android.content.ComponentName, param1: string): void;

                public setCrossProfileCallerIdDisabled(param0: android.content.ComponentName, param1: boolean): void;

                public getPasswordExpiration(param0: android.content.ComponentName): number;

                public setPermittedInputMethods(param0: android.content.ComponentName, param1: javautilList): boolean;

                public setSecureSetting(param0: android.content.ComponentName, param1: string, param2: string): void;

                public enableSystemApp(param0: android.content.ComponentName, param1: android.content.Intent): number;

                public setPasswordMinimumSymbols(param0: android.content.ComponentName, param1: number): void;

                public setPermissionPolicy(param0: android.content.ComponentName, param1: number): void;

                public setPasswordMinimumNonLetter(param0: android.content.ComponentName, param1: number): void;

                public removeActiveAdmin(param0: android.content.ComponentName): void;

                public addCrossProfileWidgetProvider(param0: android.content.ComponentName, param1: string): boolean;

                public getPasswordHistoryLength(param0: android.content.ComponentName): number;

                public setPasswordMinimumLowerCase(param0: android.content.ComponentName, param1: number): void;

                public lockNow(): void;

                public setPasswordQuality(param0: android.content.ComponentName, param1: number): void;

                public setMaximumFailedPasswordsForWipe(param0: android.content.ComponentName, param1: number): void;

                public setSystemUpdatePolicy(param0: android.content.ComponentName, param1: android.app.admin.SystemUpdatePolicy): void;

                public isApplicationHidden(param0: android.content.ComponentName, param1: string): boolean;

                public getPasswordMaximumLength(param0: number): number;

                public getApplicationRestrictions(param0: android.content.ComponentName, param1: string): android.os.Bundle;

                public setKeyguardDisabledFeatures(param0: android.content.ComponentName, param1: number): void;

                public getPermissionGrantState(param0: android.content.ComponentName, param1: string, param2: string): number;

                public getPermittedAccessibilityServices(param0: android.content.ComponentName): javautilList;

                public setCameraDisabled(param0: android.content.ComponentName, param1: boolean): void;

                public isDeviceOwnerApp(param0: string): boolean;

                public clearDeviceOwnerApp(param0: string): void;

                public setPasswordExpirationTimeout(param0: android.content.ComponentName, param1: number): void;

                public setMaximumTimeToLock(param0: android.content.ComponentName, param1: number): void;

                public removeCrossProfileWidgetProvider(param0: android.content.ComponentName, param1: string): boolean;

                public hasGrantedPolicy(param0: android.content.ComponentName, param1: number): boolean;

                public getTrustAgentConfiguration(param0: android.content.ComponentName, param1: android.content.ComponentName): javautilList;

                public setCertInstallerPackage(param0: android.content.ComponentName, param1: string): void;

                public setPasswordHistoryLength(param0: android.content.ComponentName, param1: number): void;

                public setPermissionGrantState(param0: android.content.ComponentName, param1: string, param2: string, param3: number): boolean;

                public setUserIcon(param0: android.content.ComponentName, param1: android.graphics.Bitmap): void;

                public uninstallAllUserCaCerts(param0: android.content.ComponentName): void;

                public isActivePasswordSufficient(): boolean;

                public setPasswordMinimumLength(param0: android.content.ComponentName, param1: number): void;

                public setLockTaskPackages(param0: android.content.ComponentName, param1: native.Array<string>): void;

                public getStorageEncryption(param0: android.content.ComponentName): boolean;

                public getPermittedInputMethods(param0: android.content.ComponentName): javautilList;

                public setScreenCaptureDisabled(param0: android.content.ComponentName, param1: boolean): void;

                public getPermissionPolicy(param0: android.content.ComponentName): number;

                public setProfileName(param0: android.content.ComponentName, param1: string): void;

                public clearUserRestriction(param0: android.content.ComponentName, param1: string): void;

                public setRecommendedGlobalProxy(param0: android.content.ComponentName, param1: android.net.ProxyInfo): void;

                public getKeyguardDisabledFeatures(param0: android.content.ComponentName): number;

                public installCaCert(param0: android.content.ComponentName, param1: native.Array<number>): boolean;

                public getPasswordMinimumLowerCase(param0: android.content.ComponentName): number;

                public setApplicationRestrictions(param0: android.content.ComponentName, param1: string, param2: android.os.Bundle): void;

                public getCrossProfileWidgetProviders(param0: android.content.ComponentName): javautilList;

                public isAdminActive(param0: android.content.ComponentName): boolean;

                public isMasterVolumeMuted(param0: android.content.ComponentName): boolean;

                public addCrossProfileIntentFilter(param0: android.content.ComponentName, param1: android.content.IntentFilter, param2: number): void;
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module app {
        export module admin {
            export class SystemUpdatePolicy extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public static TYPE_INSTALL_AUTOMATIC: number;
                public static TYPE_INSTALL_WINDOWED: number;
                public static TYPE_POSTPONE: number;

                public getPolicyType(): number;

                public static createPostponeInstallPolicy(): android.app.admin.SystemUpdatePolicy;

                public getInstallWindowStart(): number;

                public static createWindowedInstallPolicy(param0: number, param1: number): android.app.admin.SystemUpdatePolicy;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public static createAutomaticInstallPolicy(): android.app.admin.SystemUpdatePolicy;

                public toString(): string;

                public getInstallWindowEnd(): number;
            }
        }
    }
}

/// <reference path="./android.content.ClipData.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export module assist {
            export class AssistContent extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public getWebUri(): android.net.Uri;

                public getIntent(): android.content.Intent;

                public setStructuredData(param0: string): void;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public setClipData(param0: android.content.ClipData): void;

                public setIntent(param0: android.content.Intent): void;

                public getStructuredData(): string;

                public constructor();

                public isAppProvidedIntent(): boolean;

                public getClipData(): android.content.ClipData;

                public describeContents(): number;

                public getExtras(): android.os.Bundle;

                public setWebUri(param0: android.net.Uri): void;
            }
        }
    }
}

/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module app {
        export module assist {
            export class AssistStructure extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public getWindowNodeAt(param0: number): android.app.assist.AssistStructure.WindowNode;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public getWindowNodeCount(): number;

                public getActivityComponent(): android.content.ComponentName;

                public constructor();
            }
            export module AssistStructure {
                export class ViewNode extends javalangObject {
                    public static TEXT_COLOR_UNDEFINED: number;
                    public static TEXT_STYLE_BOLD: number;
                    public static TEXT_STYLE_ITALIC: number;
                    public static TEXT_STYLE_STRIKE_THRU: number;
                    public static TEXT_STYLE_UNDERLINE: number;

                    public getScrollY(): number;

                    public getChildCount(): number;

                    public getElevation(): number;

                    public isFocusable(): boolean;

                    public isFocused(): boolean;

                    public isClickable(): boolean;

                    public getTextSelectionEnd(): number;

                    public isAssistBlocked(): boolean;

                    public getContentDescription(): string;

                    public getTextStyle(): number;

                    public getHint(): string;

                    public getClassName(): string;

                    public getTextBackgroundColor(): number;

                    public isContextClickable(): boolean;

                    public getChildAt(param0: number): android.app.assist.AssistStructure.ViewNode;

                    public getTextSize(): number;

                    public getVisibility(): number;

                    public isCheckable(): boolean;

                    public isEnabled(): boolean;

                    public getIdPackage(): string;

                    public isAccessibilityFocused(): boolean;

                    public getTextLineCharOffsets(): native.Array<number>;

                    public isChecked(): boolean;

                    public getAlpha(): number;

                    public getTextLineBaselines(): native.Array<number>;

                    public isActivated(): boolean;

                    public getTransformation(): android.graphics.Matrix;

                    public getText(): string;

                    public getHeight(): number;

                    public getId(): number;

                    public getWidth(): number;

                    public getIdType(): string;

                    public getTop(): number;

                    public getIdEntry(): string;

                    public getTextSelectionStart(): number;

                    public isLongClickable(): boolean;

                    public getTextColor(): number;

                    public getLeft(): number;

                    public getScrollX(): number;

                    public getExtras(): android.os.Bundle;

                    public isSelected(): boolean;
                }
                export class WindowNode extends javalangObject {
                    public getTitle(): string;

                    public getDisplayId(): number;

                    public getHeight(): number;

                    public getWidth(): number;

                    public getLeft(): number;

                    public getRootViewNode(): android.app.assist.AssistStructure.ViewNode;

                    public getTop(): number;
                }
            }
        }
    }
}

import javaioFile = java.io.File;
/// <reference path="./android.app.backup.BackupDataInput.d.ts" />
/// <reference path="./android.app.backup.BackupDataOutput.d.ts" />
/// <reference path="./android.app.backup.FullBackupDataOutput.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.io.File.d.ts" />
declare module android {
    export module app {
        export module backup {
            export abstract class BackupAgent extends android.content.ContextWrapper {
                public static TYPE_DIRECTORY: number;
                public static TYPE_FILE: number;

                public fullBackupFile(param0: javaioFile, param1: android.app.backup.FullBackupDataOutput): void;

                public onRestoreFinished(): void;

                public onRestore(param0: android.app.backup.BackupDataInput, param1: number, param2: android.os.ParcelFileDescriptor): void;

                public constructor(param0: android.content.Context);

                public onCreate(): void;

                public onDestroy(): void;

                public onFullBackup(param0: android.app.backup.FullBackupDataOutput): void;

                public onRestoreFile(param0: android.os.ParcelFileDescriptor, param1: number, param2: javaioFile, param3: number, param4: number, param5: number): void;

                public constructor();

                public onBackup(param0: android.os.ParcelFileDescriptor, param1: android.app.backup.BackupDataOutput, param2: android.os.ParcelFileDescriptor): void;
            }
        }
    }
}

/// <reference path="./android.app.backup.BackupDataInput.d.ts" />
/// <reference path="./android.app.backup.BackupDataOutput.d.ts" />
/// <reference path="./android.app.backup.BackupHelper.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export module backup {
            export class BackupAgentHelper extends android.app.backup.BackupAgent {
                public onRestore(param0: android.app.backup.BackupDataInput, param1: number, param2: android.os.ParcelFileDescriptor): void;

                public addHelper(param0: string, param1: android.app.backup.BackupHelper): void;

                public constructor(param0: android.content.Context);
                public constructor();

                public onBackup(param0: android.os.ParcelFileDescriptor, param1: android.app.backup.BackupDataOutput, param2: android.os.ParcelFileDescriptor): void;
            }
        }
    }
}

declare module android {
    export module app {
        export module backup {
            export class BackupDataInput extends javalangObject {
                public skipEntityData(): void;

                public getDataSize(): number;

                public readEntityData(param0: native.Array<number>, param1: number, param2: number): number;

                public getKey(): string;

                public readNextHeader(): boolean;
            }
        }
    }
}

declare module android {
    export module app {
        export module backup {
            export class BackupDataInputStream extends javaioInputStream {
                public read(): number;

                public close(): void;

                public read(param0: native.Array<number>): number;
                public read(param0: native.Array<number>, param1: number, param2: number): number;

                public getKey(): string;

                public size(): number;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export module backup {
            export class BackupDataOutput extends javalangObject {
                public writeEntityData(param0: native.Array<number>, param1: number): number;

                public writeEntityHeader(param0: string, param1: number): number;
            }
        }
    }
}

/// <reference path="./android.app.backup.BackupDataInputStream.d.ts" />
/// <reference path="./android.app.backup.BackupDataOutput.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
declare module android {
    export module app {
        export module backup {
            export class BackupHelper extends javalangObject {
                /**
                 * Constructs a new instance of the android.app.backup.BackupHelper interface with the provided implementation.
                 */
                public constructor(implementation: {
                    performBackup(param0: android.os.ParcelFileDescriptor, param1: android.app.backup.BackupDataOutput, param2: android.os.ParcelFileDescriptor): void;
                    restoreEntity(param0: android.app.backup.BackupDataInputStream): void;
                    writeNewStateDescription(param0: android.os.ParcelFileDescriptor): void;
                });

                public writeNewStateDescription(param0: android.os.ParcelFileDescriptor): void;

                public restoreEntity(param0: android.app.backup.BackupDataInputStream): void;

                public performBackup(param0: android.os.ParcelFileDescriptor, param1: android.app.backup.BackupDataOutput, param2: android.os.ParcelFileDescriptor): void;
            }
        }
    }
}

/// <reference path="./android.app.backup.RestoreObserver.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export module backup {
            export class BackupManager extends javalangObject {
                public dataChanged(): void;
                public static dataChanged(param0: string): void;

                public constructor(param0: android.content.Context);

                public requestRestore(param0: android.app.backup.RestoreObserver): number;
            }
        }
    }
}

/// <reference path="./android.app.backup.BackupDataInputStream.d.ts" />
/// <reference path="./android.app.backup.BackupDataOutput.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
declare module android {
    export module app {
        export module backup {
            export class FileBackupHelper extends android.app.backup.FileBackupHelperBase implements android.app.backup.BackupHelper {
                public writeNewStateDescription(param0: android.os.ParcelFileDescriptor): void;

                public constructor(param0: android.content.Context, param1: native.Array<string>);

                public restoreEntity(param0: android.app.backup.BackupDataInputStream): void;

                public performBackup(param0: android.os.ParcelFileDescriptor, param1: android.app.backup.BackupDataOutput, param2: android.os.ParcelFileDescriptor): void;
            }
        }
    }
}

/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
declare module android {
    export module app {
        export module backup {
            export class FileBackupHelperBase extends javalangObject {
                public writeNewStateDescription(param0: android.os.ParcelFileDescriptor): void;

                public finalize(): void;
            }
        }
    }
}

declare module android {
    export module app {
        export module backup {
            export class FullBackupDataOutput extends javalangObject {
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export module backup {
            export abstract class RestoreObserver extends javalangObject {
                public restoreStarting(param0: number): void;

                public onUpdate(param0: number, param1: string): void;

                public restoreFinished(param0: number): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.app.backup.BackupDataInputStream.d.ts" />
/// <reference path="./android.app.backup.BackupDataOutput.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
declare module android {
    export module app {
        export module backup {
            export class SharedPreferencesBackupHelper extends android.app.backup.FileBackupHelperBase implements android.app.backup.BackupHelper {
                public writeNewStateDescription(param0: android.os.ParcelFileDescriptor): void;

                public constructor(param0: android.content.Context, param1: native.Array<string>);

                public restoreEntity(param0: android.app.backup.BackupDataInputStream): void;

                public performBackup(param0: android.os.ParcelFileDescriptor, param1: android.app.backup.BackupDataOutput, param2: android.os.ParcelFileDescriptor): void;
            }
        }
    }
}

/// <reference path="./android.app.job.JobInfo.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
declare module android {
    export module app {
        export module job {
            export class JobInfo extends javalangObject implements android.os.Parcelable {
                public static BACKOFF_POLICY_EXPONENTIAL: number;
                public static BACKOFF_POLICY_LINEAR: number;
                public static CREATOR: android.os.Parcelable.Creator;
                public static DEFAULT_INITIAL_BACKOFF_MILLIS: number;
                public static MAX_BACKOFF_DELAY_MILLIS: number;
                public static NETWORK_TYPE_ANY: number;
                public static NETWORK_TYPE_NONE: number;
                public static NETWORK_TYPE_UNMETERED: number;

                public getNetworkType(): number;

                public isPeriodic(): boolean;

                public isRequireCharging(): boolean;

                public getMinLatencyMillis(): number;

                public getIntervalMillis(): number;

                public getService(): android.content.ComponentName;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getId(): number;

                public isPersisted(): boolean;

                public getBackoffPolicy(): number;

                public toString(): string;

                public isRequireDeviceIdle(): boolean;

                public getMaxExecutionDelayMillis(): number;

                public getExtras(): android.os.PersistableBundle;

                public describeContents(): number;

                public getInitialBackoffMillis(): number;
            }
            export module JobInfo {
                export class Builder extends javalangObject {
                    public setOverrideDeadline(param0: number): android.app.job.JobInfo.Builder;

                    public constructor(param0: number, param1: android.content.ComponentName);

                    public setPeriodic(param0: number): android.app.job.JobInfo.Builder;

                    public setRequiredNetworkType(param0: number): android.app.job.JobInfo.Builder;

                    public build(): android.app.job.JobInfo;

                    public setBackoffCriteria(param0: number, param1: number): android.app.job.JobInfo.Builder;

                    public setRequiresDeviceIdle(param0: boolean): android.app.job.JobInfo.Builder;

                    public setRequiresCharging(param0: boolean): android.app.job.JobInfo.Builder;

                    public setPersisted(param0: boolean): android.app.job.JobInfo.Builder;

                    public setExtras(param0: android.os.PersistableBundle): android.app.job.JobInfo.Builder;

                    public setMinimumLatency(param0: number): android.app.job.JobInfo.Builder;
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
declare module android {
    export module app {
        export module job {
            export class JobParameters extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public getExtras(): android.os.PersistableBundle;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public isOverrideDeadlineExpired(): boolean;

                public getJobId(): number;
            }
        }
    }
}

/// <reference path="./android.app.job.JobInfo.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module app {
        export module job {
            export abstract class JobScheduler extends javalangObject {
                public static RESULT_FAILURE: number;
                public static RESULT_SUCCESS: number;

                public cancelAll(): void;

                public schedule(param0: android.app.job.JobInfo): number;

                public getAllPendingJobs(): javautilList;

                public constructor();

                public cancel(param0: number): void;
            }
        }
    }
}

/// <reference path="./android.app.job.JobParameters.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
declare module android {
    export module app {
        export module job {
            export abstract class JobService extends android.app.Service {
                public static PERMISSION_BIND: string;

                public onStartJob(param0: android.app.job.JobParameters): boolean;

                public onBind(param0: android.content.Intent): android.os.IBinder;

                public onStopJob(param0: android.app.job.JobParameters): boolean;

                public constructor(param0: android.content.Context);

                public jobFinished(param0: android.app.job.JobParameters, param1: boolean): void;

                public onTrimMemory(param0: number): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module app {
        export module usage {
            export class ConfigurationStats extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public getLastTimeActive(): number;

                public constructor(param0: android.app.usage.ConfigurationStats);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public getFirstTimeStamp(): number;

                public getConfiguration(): android.content.res.Configuration;

                public getTotalTimeActive(): number;

                public getLastTimeStamp(): number;

                public getActivationCount(): number;
            }
        }
    }
}

import javalangAutoCloseable = java.lang.AutoCloseable;
declare module android {
    export module app {
        export module usage {
            export class NetworkStats extends javalangObject implements javalangAutoCloseable {
                public getNextBucket(param0: android.app.usage.NetworkStats.Bucket): boolean;

                public close(): void;

                public finalize(): void;

                public hasNextBucket(): boolean;
            }
            export module NetworkStats {
                export class Bucket extends javalangObject {
                    public static STATE_ALL: number;
                    public static STATE_DEFAULT: number;
                    public static STATE_FOREGROUND: number;
                    public static UID_ALL: number;
                    public static UID_REMOVED: number;
                    public static UID_TETHERING: number;

                    public getRxPackets(): number;

                    public getRxBytes(): number;

                    public constructor();

                    public getUid(): number;

                    public getEndTimeStamp(): number;

                    public getTxBytes(): number;

                    public getStartTimeStamp(): number;

                    public getTxPackets(): number;

                    public getState(): number;
                }
            }
        }
    }
}

/// <reference path="./android.app.usage.NetworkStats.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module app {
        export module usage {
            export class NetworkStatsManager extends javalangObject {
                public querySummary(param0: number, param1: string, param2: number, param3: number): android.app.usage.NetworkStats;

                public querySummaryForDevice(param0: number, param1: string, param2: number, param3: number): android.app.usage.NetworkStats.Bucket;

                public querySummaryForUser(param0: number, param1: string, param2: number, param3: number): android.app.usage.NetworkStats.Bucket;

                public queryDetailsForUid(param0: number, param1: string, param2: number, param3: number, param4: number): android.app.usage.NetworkStats;

                public queryDetails(param0: number, param1: string, param2: number, param3: number): android.app.usage.NetworkStats;
            }
        }
    }
}

/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module app {
        export module usage {
            export class UsageEvents extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public getNextEvent(param0: android.app.usage.UsageEvents.Event): boolean;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public hasNextEvent(): boolean;
            }
            export module UsageEvents {
                export class Event extends javalangObject {
                    public static CONFIGURATION_CHANGE: number;
                    public static MOVE_TO_BACKGROUND: number;
                    public static MOVE_TO_FOREGROUND: number;
                    public static NONE: number;
                    public static USER_INTERACTION: number;

                    public getTimeStamp(): number;

                    public getClassName(): string;

                    public constructor();

                    public getPackageName(): string;

                    public getConfiguration(): android.content.res.Configuration;

                    public getEventType(): number;
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module app {
        export module usage {
            export class UsageStats extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public add(param0: android.app.usage.UsageStats): void;

                public getLastTimeUsed(): number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getPackageName(): string;

                public describeContents(): number;

                public getFirstTimeStamp(): number;

                public constructor(param0: android.app.usage.UsageStats);

                public getTotalTimeInForeground(): number;

                public getLastTimeStamp(): number;
            }
        }
    }
}

/// <reference path="./android.app.usage.UsageEvents.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module android {
    export module app {
        export module usage {
            export class UsageStatsManager extends javalangObject {
                public static INTERVAL_BEST: number;
                public static INTERVAL_DAILY: number;
                public static INTERVAL_MONTHLY: number;
                public static INTERVAL_WEEKLY: number;
                public static INTERVAL_YEARLY: number;

                public queryAndAggregateUsageStats(param0: number, param1: number): javautilMap;

                public isAppInactive(param0: string): boolean;

                public queryConfigurations(param0: number, param1: number, param2: number): javautilList;

                public queryUsageStats(param0: number, param1: number, param2: number): javautilList;

                public queryEvents(param0: number, param1: number): android.app.usage.UsageEvents;
            }
        }
    }
}
