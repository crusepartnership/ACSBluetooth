
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.appwidget.AppWidgetHostView.d.ts" />
/// <reference path="./android.appwidget.AppWidgetProviderInfo.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
declare module android {
    export module appwidget {
        export class AppWidgetHost extends javalangObject {
            public clearViews(): void;

            public startListening(): void;

            public startAppWidgetConfigureActivityForResult(param0: android.app.Activity, param1: number, param2: number, param3: number, param4: android.os.Bundle): void;

            public allocateAppWidgetId(): number;

            public stopListening(): void;

            public constructor(param0: android.content.Context, param1: number);

            public onProvidersChanged(): void;

            public deleteAppWidgetId(param0: number): void;

            public onProviderChanged(param0: number, param1: android.appwidget.AppWidgetProviderInfo): void;

            public deleteHost(): void;

            public onCreateView(param0: android.content.Context, param1: number, param2: android.appwidget.AppWidgetProviderInfo): android.appwidget.AppWidgetHostView;

            public static deleteAllHosts(): void;

            public createView(param0: android.content.Context, param1: number, param2: android.appwidget.AppWidgetProviderInfo): android.appwidget.AppWidgetHostView;
        }
    }
}

/// <reference path="./android.appwidget.AppWidgetProviderInfo.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.util.SparseArray.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.widget.RemoteViews.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module appwidget {
        export class AppWidgetHostView extends android.widget.FrameLayout {
            public isLayoutDirectionResolved(): boolean;

            public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;

            public onStopNestedScroll(param0: android.view.View): void;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public canResolveLayoutDirection(): boolean;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public updateAppWidget(param0: android.widget.RemoteViews): void;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public sendAccessibilityEvent(param0: number): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public static getDefaultPaddingForWidget(param0: android.content.Context, param1: android.content.ComponentName, param2: android.graphics.Rect): android.graphics.Rect;

            public getErrorView(): android.view.View;

            public canResolveTextAlignment(): boolean;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public drawChild(param0: android.graphics.Canvas, param1: android.view.View, param2: number): boolean;

            public getParent(): android.view.ViewParent;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public getDefaultView(): android.view.View;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getLayoutDirection(): number;

            public getTextAlignment(): number;

            public getAppWidgetInfo(): android.appwidget.AppWidgetProviderInfo;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public constructor(param0: android.content.Context, param1: number, param2: number);

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public focusSearch(param0: number): android.view.View;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public prepareView(param0: android.view.View): void;

            public isLayoutRequested(): boolean;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public setAppWidget(param0: number, param1: android.appwidget.AppWidgetProviderInfo): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public requestLayout(): void;

            public updateAppWidgetOptions(param0: android.os.Bundle): void;

            public dispatchSaveInstanceState(param0: android.util.SparseArray): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public isTextAlignmentResolved(): boolean;

            public addView(param0: android.view.View): void;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public getAppWidgetId(): number;

            public dispatchRestoreInstanceState(param0: android.util.SparseArray): void;

            public canResolveTextDirection(): boolean;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public updateAppWidgetSize(param0: android.os.Bundle, param1: number, param2: number, param3: number, param4: number): void;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public isTextDirectionResolved(): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public generateLayoutParams(param0: android.util.AttributeSet): android.widget.FrameLayout.LayoutParams;

            public constructor(param0: android.content.Context);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public requestFitSystemWindows(): void;

            public addView(param0: android.view.View, param1: number): void;
        }
    }
}

/// <reference path="./android.appwidget.AppWidgetProviderInfo.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.UserHandle.d.ts" />
/// <reference path="./android.widget.RemoteViews.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module appwidget {
        export class AppWidgetManager extends javalangObject {
            public static ACTION_APPWIDGET_BIND: string;
            public static ACTION_APPWIDGET_CONFIGURE: string;
            public static ACTION_APPWIDGET_DELETED: string;
            public static ACTION_APPWIDGET_DISABLED: string;
            public static ACTION_APPWIDGET_ENABLED: string;
            public static ACTION_APPWIDGET_HOST_RESTORED: string;
            public static ACTION_APPWIDGET_OPTIONS_CHANGED: string;
            public static ACTION_APPWIDGET_PICK: string;
            public static ACTION_APPWIDGET_RESTORED: string;
            public static ACTION_APPWIDGET_UPDATE: string;
            public static EXTRA_APPWIDGET_ID: string;
            public static EXTRA_APPWIDGET_IDS: string;
            public static EXTRA_APPWIDGET_OLD_IDS: string;
            public static EXTRA_APPWIDGET_OPTIONS: string;
            public static EXTRA_APPWIDGET_PROVIDER: string;
            public static EXTRA_APPWIDGET_PROVIDER_PROFILE: string;
            public static EXTRA_CUSTOM_EXTRAS: string;
            public static EXTRA_CUSTOM_INFO: string;
            public static EXTRA_HOST_ID: string;
            public static INVALID_APPWIDGET_ID: number;
            public static META_DATA_APPWIDGET_PROVIDER: string;
            public static OPTION_APPWIDGET_HOST_CATEGORY: string;
            public static OPTION_APPWIDGET_MAX_HEIGHT: string;
            public static OPTION_APPWIDGET_MAX_WIDTH: string;
            public static OPTION_APPWIDGET_MIN_HEIGHT: string;
            public static OPTION_APPWIDGET_MIN_WIDTH: string;

            public partiallyUpdateAppWidget(param0: number, param1: android.widget.RemoteViews): void;

            public getAppWidgetOptions(param0: number): android.os.Bundle;

            public updateAppWidget(param0: number, param1: android.widget.RemoteViews): void;

            public bindAppWidgetIdIfAllowed(param0: number, param1: android.content.ComponentName, param2: android.os.Bundle): boolean;

            public partiallyUpdateAppWidget(param0: native.Array<number>, param1: android.widget.RemoteViews): void;

            public static getInstance(param0: android.content.Context): android.appwidget.AppWidgetManager;

            public updateAppWidget(param0: native.Array<number>, param1: android.widget.RemoteViews): void;

            public getInstalledProvidersForProfile(param0: android.os.UserHandle): javautilList;

            public bindAppWidgetIdIfAllowed(param0: number, param1: android.os.UserHandle, param2: android.content.ComponentName, param3: android.os.Bundle): boolean;

            public updateAppWidget(param0: android.content.ComponentName, param1: android.widget.RemoteViews): void;

            public notifyAppWidgetViewDataChanged(param0: native.Array<number>, param1: number): void;

            public updateAppWidgetOptions(param0: number, param1: android.os.Bundle): void;

            public getAppWidgetInfo(param0: number): android.appwidget.AppWidgetProviderInfo;

            public notifyAppWidgetViewDataChanged(param0: number, param1: number): void;

            public getInstalledProviders(): javautilList;

            public bindAppWidgetIdIfAllowed(param0: number, param1: android.content.ComponentName): boolean;

            public getAppWidgetIds(param0: android.content.ComponentName): native.Array<number>;
        }
    }
}

/// <reference path="./android.appwidget.AppWidgetManager.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
declare module android {
    export module appwidget {
        export class AppWidgetProvider extends android.content.BroadcastReceiver {
            public onRestored(param0: android.content.Context, param1: native.Array<number>, param2: native.Array<number>): void;

            public onAppWidgetOptionsChanged(param0: android.content.Context, param1: android.appwidget.AppWidgetManager, param2: number, param3: android.os.Bundle): void;

            public onReceive(param0: android.content.Context, param1: android.content.Intent): void;

            public onDeleted(param0: android.content.Context, param1: native.Array<number>): void;

            public constructor();

            public onEnabled(param0: android.content.Context): void;

            public onUpdate(param0: android.content.Context, param1: android.appwidget.AppWidgetManager, param2: native.Array<number>): void;

            public onDisabled(param0: android.content.Context): void;
        }
    }
}

/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.UserHandle.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module appwidget {
        export class AppWidgetProviderInfo extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static RESIZE_BOTH: number;
            public static RESIZE_HORIZONTAL: number;
            public static RESIZE_NONE: number;
            public static RESIZE_VERTICAL: number;
            public static WIDGET_CATEGORY_HOME_SCREEN: number;
            public static WIDGET_CATEGORY_KEYGUARD: number;
            public static WIDGET_CATEGORY_SEARCHBOX: number;
            public autoAdvanceViewId: number;
            public configure: android.content.ComponentName;
            public icon: number;
            public initialKeyguardLayout: number;
            public initialLayout: number;
            public label: string;
            public minHeight: number;
            public minResizeHeight: number;
            public minResizeWidth: number;
            public minWidth: number;
            public previewImage: number;
            public provider: android.content.ComponentName;
            public resizeMode: number;
            public updatePeriodMillis: number;
            public widgetCategory: number;

            public loadPreviewImage(param0: android.content.Context, param1: number): android.graphics.drawable.Drawable;

            public toString(): string;

            public getProfile(): android.os.UserHandle;

            public constructor(param0: android.os.Parcel);

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public loadIcon(param0: android.content.Context, param1: number): android.graphics.drawable.Drawable;

            public clone(): javalangObject;

            public constructor();

            public clone(): android.appwidget.AppWidgetProviderInfo;

            public loadLabel(param0: android.content.pm.PackageManager): string;
        }
    }
}
