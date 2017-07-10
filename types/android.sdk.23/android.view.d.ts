
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
declare module android {
    export module view {
        export abstract class AbsSavedState extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static EMPTY_STATE: android.view.AbsSavedState;

            public constructor(param0: android.os.Parcel);

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getSuperState(): android.os.Parcelable;

            public constructor(param0: android.os.Parcelable);
        }
    }
}

/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuInflater.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module view {
        export abstract class ActionMode extends javalangObject {
            public static DEFAULT_HIDE_DURATION: number;
            public static TYPE_FLOATING: number;
            public static TYPE_PRIMARY: number;

            public getType(): number;

            public getTitle(): string;

            public setTitle(param0: string): void;

            public getSubtitle(): string;

            public getMenu(): android.view.Menu;

            public getTitleOptionalHint(): boolean;

            public isTitleOptional(): boolean;

            public finish(): void;

            public setTag(param0: javalangObject): void;

            public setSubtitle(param0: number): void;

            public setType(param0: number): void;

            public constructor();

            public setTitle(param0: number): void;

            public getMenuInflater(): android.view.MenuInflater;

            public invalidate(): void;

            public getCustomView(): android.view.View;

            public getTag(): javalangObject;

            public hide(param0: number): void;

            public setSubtitle(param0: string): void;

            public onWindowFocusChanged(param0: boolean): void;

            public invalidateContentRect(): void;

            public setTitleOptionalHint(param0: boolean): void;

            public setCustomView(param0: android.view.View): void;
        }
        export module ActionMode {
            export class Callback extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.ActionMode$Callback interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onCreateActionMode(param0: android.view.ActionMode, param1: android.view.Menu): boolean;
                    onPrepareActionMode(param0: android.view.ActionMode, param1: android.view.Menu): boolean;
                    onActionItemClicked(param0: android.view.ActionMode, param1: android.view.MenuItem): boolean;
                    onDestroyActionMode(param0: android.view.ActionMode): void;
                });

                public onPrepareActionMode(param0: android.view.ActionMode, param1: android.view.Menu): boolean;

                public onActionItemClicked(param0: android.view.ActionMode, param1: android.view.MenuItem): boolean;

                public onCreateActionMode(param0: android.view.ActionMode, param1: android.view.Menu): boolean;

                public onDestroyActionMode(param0: android.view.ActionMode): void;
            }
            export abstract class Callback2 extends javalangObject implements android.view.ActionMode.Callback {
                public onPrepareActionMode(param0: android.view.ActionMode, param1: android.view.Menu): boolean;

                public onActionItemClicked(param0: android.view.ActionMode, param1: android.view.MenuItem): boolean;

                public onCreateActionMode(param0: android.view.ActionMode, param1: android.view.Menu): boolean;

                public onGetContentRect(param0: android.view.ActionMode, param1: android.view.View, param2: android.graphics.Rect): void;

                public constructor();

                public onDestroyActionMode(param0: android.view.ActionMode): void;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.SubMenu.d.ts" />
/// <reference path="./android.view.View.d.ts" />
declare module android {
    export module view {
        export abstract class ActionProvider extends javalangObject {
            public setVisibilityListener(param0: android.view.ActionProvider.VisibilityListener): void;

            public onCreateActionView(): android.view.View;

            public onPerformDefaultAction(): boolean;

            public constructor(param0: android.content.Context);

            public overridesItemVisibility(): boolean;

            public onPrepareSubMenu(param0: android.view.SubMenu): void;

            public refreshVisibility(): void;

            public onCreateActionView(param0: android.view.MenuItem): android.view.View;

            public hasSubMenu(): boolean;

            public isVisible(): boolean;
        }
        export module ActionProvider {
            export class VisibilityListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.ActionProvider$VisibilityListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onActionProviderVisibilityChanged(param0: boolean): void;
                });

                public onActionProviderVisibilityChanged(param0: boolean): void;
            }
        }
    }
}

declare module android {
    export module view {
        export class Choreographer extends javalangObject {
            public removeFrameCallback(param0: android.view.Choreographer.FrameCallback): void;

            public postFrameCallback(param0: android.view.Choreographer.FrameCallback): void;

            public static getInstance(): android.view.Choreographer;

            public postFrameCallbackDelayed(param0: android.view.Choreographer.FrameCallback, param1: number): void;
        }
        export module Choreographer {
            export class FrameCallback extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.Choreographer$FrameCallback interface with the provided implementation.
                 */
                public constructor(implementation: {
                    doFrame(param0: number): void;
                });

                public doFrame(param0: number): void;
            }
        }
    }
}

declare module android {
    export module view {
        export class CollapsibleActionView extends javalangObject {
            /**
             * Constructs a new instance of the android.view.CollapsibleActionView interface with the provided implementation.
             */
            public constructor(implementation: {
                onActionViewExpanded(): void;
                onActionViewCollapsed(): void;
            });

            public onActionViewCollapsed(): void;

            public onActionViewExpanded(): void;
        }
    }
}

/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.SubMenu.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module view {
        export class ContextMenu extends javalangObject implements android.view.Menu {
            /**
             * Constructs a new instance of the android.view.ContextMenu interface with the provided implementation.
             */
            public constructor(implementation: {
                setHeaderTitle(param0: number): android.view.ContextMenu;
                setHeaderTitle(param0: string): android.view.ContextMenu;
                setHeaderIcon(param0: number): android.view.ContextMenu;
                setHeaderIcon(param0: android.graphics.drawable.Drawable): android.view.ContextMenu;
                setHeaderView(param0: android.view.View): android.view.ContextMenu;
                clearHeader(): void;
                add(param0: string): android.view.MenuItem;
                add(param0: number): android.view.MenuItem;
                add(param0: number, param1: number, param2: number, param3: string): android.view.MenuItem;
                add(param0: number, param1: number, param2: number, param3: number): android.view.MenuItem;
                addSubMenu(param0: string): android.view.SubMenu;
                addSubMenu(param0: number): android.view.SubMenu;
                addSubMenu(param0: number, param1: number, param2: number, param3: string): android.view.SubMenu;
                addSubMenu(param0: number, param1: number, param2: number, param3: number): android.view.SubMenu;
                addIntentOptions(param0: number, param1: number, param2: number, param3: android.content.ComponentName, param4: native.Array<android.content.Intent>, param5: android.content.Intent, param6: number, param7: native.Array<android.view.MenuItem>): number;
                removeItem(param0: number): void;
                removeGroup(param0: number): void;
                clear(): void;
                setGroupCheckable(param0: number, param1: boolean, param2: boolean): void;
                setGroupVisible(param0: number, param1: boolean): void;
                setGroupEnabled(param0: number, param1: boolean): void;
                hasVisibleItems(): boolean;
                findItem(param0: number): android.view.MenuItem;
                size(): number;
                getItem(param0: number): android.view.MenuItem;
                close(): void;
                performShortcut(param0: number, param1: android.view.KeyEvent, param2: number): boolean;
                isShortcutKey(param0: number, param1: android.view.KeyEvent): boolean;
                performIdentifierAction(param0: number, param1: number): boolean;
                setQwertyMode(param0: boolean): void;
            });

            public static CATEGORY_SECONDARY: number;
            public static FLAG_APPEND_TO_GROUP: number;
            public static FIRST: number;
            public static NONE: number;
            public static CATEGORY_ALTERNATIVE: number;
            public static FLAG_ALWAYS_PERFORM_CLOSE: number;
            public static CATEGORY_CONTAINER: number;
            public static FLAG_PERFORM_NO_CLOSE: number;
            public static CATEGORY_SYSTEM: number;

            public hasVisibleItems(): boolean;

            public setHeaderTitle(param0: string): android.view.ContextMenu;

            public setGroupEnabled(param0: number, param1: boolean): void;

            public add(param0: number, param1: number, param2: number, param3: number): android.view.MenuItem;

            public addSubMenu(param0: string): android.view.SubMenu;
            public addSubMenu(param0: number): android.view.SubMenu;

            public setHeaderIcon(param0: android.graphics.drawable.Drawable): android.view.ContextMenu;

            public removeItem(param0: number): void;

            public setHeaderView(param0: android.view.View): android.view.ContextMenu;

            public setQwertyMode(param0: boolean): void;

            public addIntentOptions(param0: number, param1: number, param2: number, param3: android.content.ComponentName, param4: native.Array<android.content.Intent>, param5: android.content.Intent, param6: number, param7: native.Array<android.view.MenuItem>): number;

            public close(): void;

            public clear(): void;

            public clearHeader(): void;

            public isShortcutKey(param0: number, param1: android.view.KeyEvent): boolean;

            public setGroupCheckable(param0: number, param1: boolean, param2: boolean): void;

            public size(): number;

            public add(param0: string): android.view.MenuItem;
            public add(param0: number): android.view.MenuItem;

            public setHeaderTitle(param0: number): android.view.ContextMenu;

            public add(param0: number, param1: number, param2: number, param3: string): android.view.MenuItem;

            public removeGroup(param0: number): void;

            public getItem(param0: number): android.view.MenuItem;

            public addSubMenu(param0: number, param1: number, param2: number, param3: number): android.view.SubMenu;

            public performIdentifierAction(param0: number, param1: number): boolean;

            public performShortcut(param0: number, param1: android.view.KeyEvent, param2: number): boolean;

            public setGroupVisible(param0: number, param1: boolean): void;

            public addSubMenu(param0: number, param1: number, param2: number, param3: string): android.view.SubMenu;

            public findItem(param0: number): android.view.MenuItem;

            public setHeaderIcon(param0: number): android.view.ContextMenu;
        }
        export module ContextMenu {
            export class ContextMenuInfo extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.ContextMenu$ContextMenuInfo interface with the provided implementation.
                 */
                public constructor(implementation: {});
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module view {
        export class ContextThemeWrapper extends android.content.ContextWrapper {
            public onApplyThemeResource(param0: android.content.res.Resources.Theme, param1: number, param2: boolean): void;

            public applyOverrideConfiguration(param0: android.content.res.Configuration): void;

            public getResources(): android.content.res.Resources;

            public getSystemService(param0: string): javalangObject;

            public setTheme(param0: number): void;

            public getSystemService(param0: javalangClass): javalangObject;

            public attachBaseContext(param0: android.content.Context): void;

            public constructor(param0: android.content.Context);
            public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);

            public getTheme(): android.content.res.Resources.Theme;

            public constructor();
            public constructor(param0: android.content.Context, param1: number);
        }
    }
}

/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.DisplayMetrics.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module view {
        export class Display extends javalangObject {
            public static DEFAULT_DISPLAY: number;
            public static FLAG_PRESENTATION: number;
            public static FLAG_PRIVATE: number;
            public static FLAG_ROUND: number;
            public static FLAG_SECURE: number;
            public static FLAG_SUPPORTS_PROTECTED_BUFFERS: number;
            public static INVALID_DISPLAY: number;
            public static STATE_DOZE: number;
            public static STATE_DOZE_SUSPEND: number;
            public static STATE_OFF: number;
            public static STATE_ON: number;
            public static STATE_UNKNOWN: number;

            public getMetrics(param0: android.util.DisplayMetrics): void;

            public getRectSize(param0: android.graphics.Rect): void;

            public getPresentationDeadlineNanos(): number;

            public getFlags(): number;

            public getHeight(): number;

            public getRefreshRate(): number;

            public getRotation(): number;

            public getAppVsyncOffsetNanos(): number;

            public getCurrentSizeRange(param0: android.graphics.Point, param1: android.graphics.Point): void;

            public getWidth(): number;

            public getRealSize(param0: android.graphics.Point): void;

            public getMode(): android.view.Display.Mode;

            public toString(): string;

            public getName(): string;

            public getSupportedRefreshRates(): native.Array<number>;

            public getRealMetrics(param0: android.util.DisplayMetrics): void;

            public getSize(param0: android.graphics.Point): void;

            public isValid(): boolean;

            public getPixelFormat(): number;

            public getSupportedModes(): native.Array<android.view.Display.Mode>;

            public getDisplayId(): number;

            public getOrientation(): number;

            public getState(): number;
        }
        export module Display {
            export class Mode extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public getModeId(): number;

                public equals(param0: javalangObject): boolean;

                public hashCode(): number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public getPhysicalWidth(): number;

                public getRefreshRate(): number;

                public toString(): string;

                public getPhysicalHeight(): number;
            }
        }
    }
}

/// <reference path="./android.content.ClipData.d.ts" />
/// <reference path="./android.content.ClipDescription.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module view {
        export class DragEvent extends javalangObject implements android.os.Parcelable {
            public static ACTION_DRAG_ENDED: number;
            public static ACTION_DRAG_ENTERED: number;
            public static ACTION_DRAG_EXITED: number;
            public static ACTION_DRAG_LOCATION: number;
            public static ACTION_DRAG_STARTED: number;
            public static ACTION_DROP: number;
            public static CREATOR: android.os.Parcelable.Creator;

            public getClipData(): android.content.ClipData;

            public toString(): string;

            public getLocalState(): javalangObject;

            public describeContents(): number;

            public getY(): number;

            public getResult(): boolean;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getX(): number;

            public getClipDescription(): android.content.ClipDescription;

            public getAction(): number;
        }
    }
}

/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
declare module android {
    export module view {
        export class FocusFinder extends javalangObject {
            public findNextFocusFromRect(param0: android.view.ViewGroup, param1: android.graphics.Rect, param2: number): android.view.View;

            public findNextFocus(param0: android.view.ViewGroup, param1: android.view.View, param2: number): android.view.View;

            public findNearestTouchable(param0: android.view.ViewGroup, param1: number, param2: number, param3: number, param4: native.Array<number>): android.view.View;

            public static getInstance(): android.view.FocusFinder;
        }
    }
}

declare module android {
    export module view {
        export abstract class FrameStats extends javalangObject {
            public static UNDEFINED_TIME_NANO: number;

            public getFrameCount(): number;

            public getStartTimeNano(): number;

            public getEndTimeNano(): number;

            public constructor();

            public getFramePresentedTimeNano(param0: number): number;

            public getRefreshPeriodNano(): number;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
declare module android {
    export module view {
        export class GestureDetector extends javalangObject {
            public constructor(param0: android.view.GestureDetector.OnGestureListener);
            public constructor(param0: android.content.Context, param1: android.view.GestureDetector.OnGestureListener, param2: android.os.Handler, param3: boolean);

            public isLongpressEnabled(): boolean;

            public constructor(param0: android.view.GestureDetector.OnGestureListener, param1: android.os.Handler);

            public setIsLongpressEnabled(param0: boolean): void;

            public constructor(param0: android.content.Context, param1: android.view.GestureDetector.OnGestureListener, param2: android.os.Handler);

            public setContextClickListener(param0: android.view.GestureDetector.OnContextClickListener): void;

            public onTouchEvent(param0: android.view.MotionEvent): boolean;

            public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;

            public constructor(param0: android.content.Context, param1: android.view.GestureDetector.OnGestureListener);

            public setOnDoubleTapListener(param0: android.view.GestureDetector.OnDoubleTapListener): void;
        }
        export module GestureDetector {
            export class OnContextClickListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.GestureDetector$OnContextClickListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onContextClick(param0: android.view.MotionEvent): boolean;
                });

                public onContextClick(param0: android.view.MotionEvent): boolean;
            }
            export class OnDoubleTapListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.GestureDetector$OnDoubleTapListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onSingleTapConfirmed(param0: android.view.MotionEvent): boolean;
                    onDoubleTap(param0: android.view.MotionEvent): boolean;
                    onDoubleTapEvent(param0: android.view.MotionEvent): boolean;
                });

                public onSingleTapConfirmed(param0: android.view.MotionEvent): boolean;

                public onDoubleTap(param0: android.view.MotionEvent): boolean;

                public onDoubleTapEvent(param0: android.view.MotionEvent): boolean;
            }
            export class OnGestureListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.GestureDetector$OnGestureListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onDown(param0: android.view.MotionEvent): boolean;
                    onShowPress(param0: android.view.MotionEvent): void;
                    onSingleTapUp(param0: android.view.MotionEvent): boolean;
                    onScroll(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
                    onLongPress(param0: android.view.MotionEvent): void;
                    onFling(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
                });

                public onFling(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;

                public onShowPress(param0: android.view.MotionEvent): void;

                public onScroll(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;

                public onLongPress(param0: android.view.MotionEvent): void;

                public onDown(param0: android.view.MotionEvent): boolean;

                public onSingleTapUp(param0: android.view.MotionEvent): boolean;
            }
            export class SimpleOnGestureListener extends javalangObject implements android.view.GestureDetector.OnGestureListener, android.view.GestureDetector.OnDoubleTapListener, android.view.GestureDetector.OnContextClickListener {
                public onFling(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;

                public onShowPress(param0: android.view.MotionEvent): void;

                public onSingleTapConfirmed(param0: android.view.MotionEvent): boolean;

                public onScroll(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;

                public onContextClick(param0: android.view.MotionEvent): boolean;

                public onLongPress(param0: android.view.MotionEvent): void;

                public onDoubleTap(param0: android.view.MotionEvent): boolean;

                public onDoubleTapEvent(param0: android.view.MotionEvent): boolean;

                public onSingleTapUp(param0: android.view.MotionEvent): boolean;

                public onDown(param0: android.view.MotionEvent): boolean;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.graphics.Rect.d.ts" />
declare module android {
    export module view {
        export class Gravity extends javalangObject {
            public static AXIS_CLIP: number;
            public static AXIS_PULL_AFTER: number;
            public static AXIS_PULL_BEFORE: number;
            public static AXIS_SPECIFIED: number;
            public static AXIS_X_SHIFT: number;
            public static AXIS_Y_SHIFT: number;
            public static BOTTOM: number;
            public static CENTER: number;
            public static CENTER_HORIZONTAL: number;
            public static CENTER_VERTICAL: number;
            public static CLIP_HORIZONTAL: number;
            public static CLIP_VERTICAL: number;
            public static DISPLAY_CLIP_HORIZONTAL: number;
            public static DISPLAY_CLIP_VERTICAL: number;
            public static END: number;
            public static FILL: number;
            public static FILL_HORIZONTAL: number;
            public static FILL_VERTICAL: number;
            public static HORIZONTAL_GRAVITY_MASK: number;
            public static LEFT: number;
            public static NO_GRAVITY: number;
            public static RELATIVE_HORIZONTAL_GRAVITY_MASK: number;
            public static RELATIVE_LAYOUT_DIRECTION: number;
            public static RIGHT: number;
            public static START: number;
            public static TOP: number;
            public static VERTICAL_GRAVITY_MASK: number;

            public static apply(param0: number, param1: number, param2: number, param3: android.graphics.Rect, param4: android.graphics.Rect): void;
            public static apply(param0: number, param1: number, param2: number, param3: android.graphics.Rect, param4: android.graphics.Rect, param5: number): void;
            public static apply(param0: number, param1: number, param2: number, param3: android.graphics.Rect, param4: number, param5: number, param6: android.graphics.Rect): void;
            public static apply(param0: number, param1: number, param2: number, param3: android.graphics.Rect, param4: number, param5: number, param6: android.graphics.Rect, param7: number): void;

            public static isVertical(param0: number): boolean;

            public static isHorizontal(param0: number): boolean;

            public static getAbsoluteGravity(param0: number, param1: number): number;

            public static applyDisplay(param0: number, param1: android.graphics.Rect, param2: android.graphics.Rect, param3: number): void;

            public constructor();

            public static applyDisplay(param0: number, param1: android.graphics.Rect, param2: android.graphics.Rect): void;
        }
    }
}

declare module android {
    export module view {
        export class HapticFeedbackConstants extends javalangObject {
            public static CLOCK_TICK: number;
            public static CONTEXT_CLICK: number;
            public static FLAG_IGNORE_GLOBAL_SETTING: number;
            public static FLAG_IGNORE_VIEW_SETTING: number;
            public static KEYBOARD_TAP: number;
            public static LONG_PRESS: number;
            public static VIRTUAL_KEY: number;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module view {
        export class InflateException extends javalangRuntimeException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Vibrator.d.ts" />
/// <reference path="./android.view.KeyCharacterMap.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module view {
        export class InputDevice extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static KEYBOARD_TYPE_ALPHABETIC: number;
            public static KEYBOARD_TYPE_NONE: number;
            public static KEYBOARD_TYPE_NON_ALPHABETIC: number;
            public static MOTION_RANGE_ORIENTATION: number;
            public static MOTION_RANGE_PRESSURE: number;
            public static MOTION_RANGE_SIZE: number;
            public static MOTION_RANGE_TOOL_MAJOR: number;
            public static MOTION_RANGE_TOOL_MINOR: number;
            public static MOTION_RANGE_TOUCH_MAJOR: number;
            public static MOTION_RANGE_TOUCH_MINOR: number;
            public static MOTION_RANGE_X: number;
            public static MOTION_RANGE_Y: number;
            public static SOURCE_ANY: number;
            public static SOURCE_BLUETOOTH_STYLUS: number;
            public static SOURCE_CLASS_BUTTON: number;
            public static SOURCE_CLASS_JOYSTICK: number;
            public static SOURCE_CLASS_MASK: number;
            public static SOURCE_CLASS_NONE: number;
            public static SOURCE_CLASS_POINTER: number;
            public static SOURCE_CLASS_POSITION: number;
            public static SOURCE_CLASS_TRACKBALL: number;
            public static SOURCE_DPAD: number;
            public static SOURCE_GAMEPAD: number;
            public static SOURCE_HDMI: number;
            public static SOURCE_JOYSTICK: number;
            public static SOURCE_KEYBOARD: number;
            public static SOURCE_MOUSE: number;
            public static SOURCE_STYLUS: number;
            public static SOURCE_TOUCHPAD: number;
            public static SOURCE_TOUCHSCREEN: number;
            public static SOURCE_TOUCH_NAVIGATION: number;
            public static SOURCE_TRACKBALL: number;
            public static SOURCE_UNKNOWN: number;

            public getKeyboardType(): number;

            public isVirtual(): boolean;

            public getMotionRange(param0: number, param1: number): android.view.InputDevice.MotionRange;

            public getMotionRanges(): javautilList;

            public getProductId(): number;

            public getMotionRange(param0: number): android.view.InputDevice.MotionRange;

            public getControllerNumber(): number;

            public getVendorId(): number;

            public toString(): string;

            public getName(): string;

            public hasKeys(param0: native.Array<number>): native.Array<boolean>;

            public getVibrator(): android.os.Vibrator;

            public hasMicrophone(): boolean;

            public getId(): number;

            public getDescriptor(): string;

            public static getDeviceIds(): native.Array<number>;

            public describeContents(): number;

            public getSources(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getKeyCharacterMap(): android.view.KeyCharacterMap;

            public static getDevice(param0: number): android.view.InputDevice;

            public supportsSource(param0: number): boolean;
        }
        export module InputDevice {
            export class MotionRange extends javalangObject {
                public isFromSource(param0: number): boolean;

                public getMax(): number;

                public getRange(): number;

                public getResolution(): number;

                public getMin(): number;

                public getAxis(): number;

                public getFlat(): number;

                public getFuzz(): number;

                public getSource(): number;
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.InputDevice.d.ts" />
declare module android {
    export module view {
        export abstract class InputEvent extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public getDeviceId(): number;

            public getDevice(): android.view.InputDevice;

            public describeContents(): number;

            public getSource(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public isFromSource(param0: number): boolean;

            public getEventTime(): number;
        }
    }
}

/// <reference path="./android.view.InputQueue.d.ts" />
declare module android {
    export module view {
        export class InputQueue extends javalangObject {
            public finalize(): void;
        }
        export module InputQueue {
            export class Callback extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.InputQueue$Callback interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onInputQueueCreated(param0: android.view.InputQueue): void;
                    onInputQueueDestroyed(param0: android.view.InputQueue): void;
                });

                public onInputQueueCreated(param0: android.view.InputQueue): void;

                public onInputQueueDestroyed(param0: android.view.InputQueue): void;
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module view {
        export class KeyCharacterMap extends javalangObject implements android.os.Parcelable {
            public static ALPHA: number;
            public static BUILT_IN_KEYBOARD: number;
            public static COMBINING_ACCENT: number;
            public static COMBINING_ACCENT_MASK: number;
            public static CREATOR: android.os.Parcelable.Creator;
            public static FULL: number;
            public static HEX_INPUT: string;
            public static MODIFIER_BEHAVIOR_CHORDED: number;
            public static MODIFIER_BEHAVIOR_CHORDED_OR_TOGGLED: number;
            public static NUMERIC: number;
            public static PICKER_DIALOG_INPUT: string;
            public static PREDICTIVE: number;
            public static SPECIAL_FUNCTION: number;
            public static VIRTUAL_KEYBOARD: number;

            public getDisplayLabel(param0: number): string;

            public getKeyboardType(): number;

            public getModifierBehavior(): number;

            public static deviceHasKey(param0: number): boolean;

            public getEvents(param0: native.Array<string>): native.Array<android.view.KeyEvent>;

            public getKeyData(param0: number, param1: android.view.KeyCharacterMap.KeyData): boolean;

            public static getDeadChar(param0: number, param1: number): number;

            public getMatch(param0: number, param1: native.Array<string>): string;

            public getNumber(param0: number): string;

            public getMatch(param0: number, param1: native.Array<string>, param2: number): string;

            public describeContents(): number;

            public static deviceHasKeys(param0: native.Array<number>): native.Array<boolean>;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public isPrintingKey(param0: number): boolean;

            public finalize(): void;

            public static load(param0: number): android.view.KeyCharacterMap;

            public get(param0: number, param1: number): number;
        }
        export module KeyCharacterMap {
            export class KeyData extends javalangObject {
                public static META_LENGTH: number;
                public displayLabel: string;
                public meta: native.Array<string>;
                public number: string;

                public constructor();
            }
            export class UnavailableException extends android.util.AndroidRuntimeException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: javalangException);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.KeyCharacterMap.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module view {
        export class KeyEvent extends android.view.InputEvent implements android.os.Parcelable {
            public static ACTION_DOWN: number;
            public static ACTION_MULTIPLE: number;
            public static ACTION_UP: number;
            public static CREATOR: android.os.Parcelable.Creator;
            public static FLAG_CANCELED: number;
            public static FLAG_CANCELED_LONG_PRESS: number;
            public static FLAG_EDITOR_ACTION: number;
            public static FLAG_FALLBACK: number;
            public static FLAG_FROM_SYSTEM: number;
            public static FLAG_KEEP_TOUCH_MODE: number;
            public static FLAG_LONG_PRESS: number;
            public static FLAG_SOFT_KEYBOARD: number;
            public static FLAG_TRACKING: number;
            public static FLAG_VIRTUAL_HARD_KEY: number;
            public static FLAG_WOKE_HERE: number;
            public static KEYCODE_0: number;
            public static KEYCODE_1: number;
            public static KEYCODE_11: number;
            public static KEYCODE_12: number;
            public static KEYCODE_2: number;
            public static KEYCODE_3: number;
            public static KEYCODE_3D_MODE: number;
            public static KEYCODE_4: number;
            public static KEYCODE_5: number;
            public static KEYCODE_6: number;
            public static KEYCODE_7: number;
            public static KEYCODE_8: number;
            public static KEYCODE_9: number;
            public static KEYCODE_A: number;
            public static KEYCODE_ALT_LEFT: number;
            public static KEYCODE_ALT_RIGHT: number;
            public static KEYCODE_APOSTROPHE: number;
            public static KEYCODE_APP_SWITCH: number;
            public static KEYCODE_ASSIST: number;
            public static KEYCODE_AT: number;
            public static KEYCODE_AVR_INPUT: number;
            public static KEYCODE_AVR_POWER: number;
            public static KEYCODE_B: number;
            public static KEYCODE_BACK: number;
            public static KEYCODE_BACKSLASH: number;
            public static KEYCODE_BOOKMARK: number;
            public static KEYCODE_BREAK: number;
            public static KEYCODE_BRIGHTNESS_DOWN: number;
            public static KEYCODE_BRIGHTNESS_UP: number;
            public static KEYCODE_BUTTON_1: number;
            public static KEYCODE_BUTTON_10: number;
            public static KEYCODE_BUTTON_11: number;
            public static KEYCODE_BUTTON_12: number;
            public static KEYCODE_BUTTON_13: number;
            public static KEYCODE_BUTTON_14: number;
            public static KEYCODE_BUTTON_15: number;
            public static KEYCODE_BUTTON_16: number;
            public static KEYCODE_BUTTON_2: number;
            public static KEYCODE_BUTTON_3: number;
            public static KEYCODE_BUTTON_4: number;
            public static KEYCODE_BUTTON_5: number;
            public static KEYCODE_BUTTON_6: number;
            public static KEYCODE_BUTTON_7: number;
            public static KEYCODE_BUTTON_8: number;
            public static KEYCODE_BUTTON_9: number;
            public static KEYCODE_BUTTON_A: number;
            public static KEYCODE_BUTTON_B: number;
            public static KEYCODE_BUTTON_C: number;
            public static KEYCODE_BUTTON_L1: number;
            public static KEYCODE_BUTTON_L2: number;
            public static KEYCODE_BUTTON_MODE: number;
            public static KEYCODE_BUTTON_R1: number;
            public static KEYCODE_BUTTON_R2: number;
            public static KEYCODE_BUTTON_SELECT: number;
            public static KEYCODE_BUTTON_START: number;
            public static KEYCODE_BUTTON_THUMBL: number;
            public static KEYCODE_BUTTON_THUMBR: number;
            public static KEYCODE_BUTTON_X: number;
            public static KEYCODE_BUTTON_Y: number;
            public static KEYCODE_BUTTON_Z: number;
            public static KEYCODE_C: number;
            public static KEYCODE_CALCULATOR: number;
            public static KEYCODE_CALENDAR: number;
            public static KEYCODE_CALL: number;
            public static KEYCODE_CAMERA: number;
            public static KEYCODE_CAPS_LOCK: number;
            public static KEYCODE_CAPTIONS: number;
            public static KEYCODE_CHANNEL_DOWN: number;
            public static KEYCODE_CHANNEL_UP: number;
            public static KEYCODE_CLEAR: number;
            public static KEYCODE_COMMA: number;
            public static KEYCODE_CONTACTS: number;
            public static KEYCODE_CTRL_LEFT: number;
            public static KEYCODE_CTRL_RIGHT: number;
            public static KEYCODE_D: number;
            public static KEYCODE_DEL: number;
            public static KEYCODE_DPAD_CENTER: number;
            public static KEYCODE_DPAD_DOWN: number;
            public static KEYCODE_DPAD_LEFT: number;
            public static KEYCODE_DPAD_RIGHT: number;
            public static KEYCODE_DPAD_UP: number;
            public static KEYCODE_DVR: number;
            public static KEYCODE_E: number;
            public static KEYCODE_EISU: number;
            public static KEYCODE_ENDCALL: number;
            public static KEYCODE_ENTER: number;
            public static KEYCODE_ENVELOPE: number;
            public static KEYCODE_EQUALS: number;
            public static KEYCODE_ESCAPE: number;
            public static KEYCODE_EXPLORER: number;
            public static KEYCODE_F: number;
            public static KEYCODE_F1: number;
            public static KEYCODE_F10: number;
            public static KEYCODE_F11: number;
            public static KEYCODE_F12: number;
            public static KEYCODE_F2: number;
            public static KEYCODE_F3: number;
            public static KEYCODE_F4: number;
            public static KEYCODE_F5: number;
            public static KEYCODE_F6: number;
            public static KEYCODE_F7: number;
            public static KEYCODE_F8: number;
            public static KEYCODE_F9: number;
            public static KEYCODE_FOCUS: number;
            public static KEYCODE_FORWARD: number;
            public static KEYCODE_FORWARD_DEL: number;
            public static KEYCODE_FUNCTION: number;
            public static KEYCODE_G: number;
            public static KEYCODE_GRAVE: number;
            public static KEYCODE_GUIDE: number;
            public static KEYCODE_H: number;
            public static KEYCODE_HEADSETHOOK: number;
            public static KEYCODE_HELP: number;
            public static KEYCODE_HENKAN: number;
            public static KEYCODE_HOME: number;
            public static KEYCODE_I: number;
            public static KEYCODE_INFO: number;
            public static KEYCODE_INSERT: number;
            public static KEYCODE_J: number;
            public static KEYCODE_K: number;
            public static KEYCODE_KANA: number;
            public static KEYCODE_KATAKANA_HIRAGANA: number;
            public static KEYCODE_L: number;
            public static KEYCODE_LANGUAGE_SWITCH: number;
            public static KEYCODE_LAST_CHANNEL: number;
            public static KEYCODE_LEFT_BRACKET: number;
            public static KEYCODE_M: number;
            public static KEYCODE_MANNER_MODE: number;
            public static KEYCODE_MEDIA_AUDIO_TRACK: number;
            public static KEYCODE_MEDIA_CLOSE: number;
            public static KEYCODE_MEDIA_EJECT: number;
            public static KEYCODE_MEDIA_FAST_FORWARD: number;
            public static KEYCODE_MEDIA_NEXT: number;
            public static KEYCODE_MEDIA_PAUSE: number;
            public static KEYCODE_MEDIA_PLAY: number;
            public static KEYCODE_MEDIA_PLAY_PAUSE: number;
            public static KEYCODE_MEDIA_PREVIOUS: number;
            public static KEYCODE_MEDIA_RECORD: number;
            public static KEYCODE_MEDIA_REWIND: number;
            public static KEYCODE_MEDIA_SKIP_BACKWARD: number;
            public static KEYCODE_MEDIA_SKIP_FORWARD: number;
            public static KEYCODE_MEDIA_STEP_BACKWARD: number;
            public static KEYCODE_MEDIA_STEP_FORWARD: number;
            public static KEYCODE_MEDIA_STOP: number;
            public static KEYCODE_MEDIA_TOP_MENU: number;
            public static KEYCODE_MENU: number;
            public static KEYCODE_META_LEFT: number;
            public static KEYCODE_META_RIGHT: number;
            public static KEYCODE_MINUS: number;
            public static KEYCODE_MOVE_END: number;
            public static KEYCODE_MOVE_HOME: number;
            public static KEYCODE_MUHENKAN: number;
            public static KEYCODE_MUSIC: number;
            public static KEYCODE_MUTE: number;
            public static KEYCODE_N: number;
            public static KEYCODE_NAVIGATE_IN: number;
            public static KEYCODE_NAVIGATE_NEXT: number;
            public static KEYCODE_NAVIGATE_OUT: number;
            public static KEYCODE_NAVIGATE_PREVIOUS: number;
            public static KEYCODE_NOTIFICATION: number;
            public static KEYCODE_NUM: number;
            public static KEYCODE_NUMPAD_0: number;
            public static KEYCODE_NUMPAD_1: number;
            public static KEYCODE_NUMPAD_2: number;
            public static KEYCODE_NUMPAD_3: number;
            public static KEYCODE_NUMPAD_4: number;
            public static KEYCODE_NUMPAD_5: number;
            public static KEYCODE_NUMPAD_6: number;
            public static KEYCODE_NUMPAD_7: number;
            public static KEYCODE_NUMPAD_8: number;
            public static KEYCODE_NUMPAD_9: number;
            public static KEYCODE_NUMPAD_ADD: number;
            public static KEYCODE_NUMPAD_COMMA: number;
            public static KEYCODE_NUMPAD_DIVIDE: number;
            public static KEYCODE_NUMPAD_DOT: number;
            public static KEYCODE_NUMPAD_ENTER: number;
            public static KEYCODE_NUMPAD_EQUALS: number;
            public static KEYCODE_NUMPAD_LEFT_PAREN: number;
            public static KEYCODE_NUMPAD_MULTIPLY: number;
            public static KEYCODE_NUMPAD_RIGHT_PAREN: number;
            public static KEYCODE_NUMPAD_SUBTRACT: number;
            public static KEYCODE_NUM_LOCK: number;
            public static KEYCODE_O: number;
            public static KEYCODE_P: number;
            public static KEYCODE_PAGE_DOWN: number;
            public static KEYCODE_PAGE_UP: number;
            public static KEYCODE_PAIRING: number;
            public static KEYCODE_PERIOD: number;
            public static KEYCODE_PICTSYMBOLS: number;
            public static KEYCODE_PLUS: number;
            public static KEYCODE_POUND: number;
            public static KEYCODE_POWER: number;
            public static KEYCODE_PROG_BLUE: number;
            public static KEYCODE_PROG_GREEN: number;
            public static KEYCODE_PROG_RED: number;
            public static KEYCODE_PROG_YELLOW: number;
            public static KEYCODE_Q: number;
            public static KEYCODE_R: number;
            public static KEYCODE_RIGHT_BRACKET: number;
            public static KEYCODE_RO: number;
            public static KEYCODE_S: number;
            public static KEYCODE_SCROLL_LOCK: number;
            public static KEYCODE_SEARCH: number;
            public static KEYCODE_SEMICOLON: number;
            public static KEYCODE_SETTINGS: number;
            public static KEYCODE_SHIFT_LEFT: number;
            public static KEYCODE_SHIFT_RIGHT: number;
            public static KEYCODE_SLASH: number;
            public static KEYCODE_SLEEP: number;
            public static KEYCODE_SOFT_LEFT: number;
            public static KEYCODE_SOFT_RIGHT: number;
            public static KEYCODE_SPACE: number;
            public static KEYCODE_STAR: number;
            public static KEYCODE_STB_INPUT: number;
            public static KEYCODE_STB_POWER: number;
            public static KEYCODE_SWITCH_CHARSET: number;
            public static KEYCODE_SYM: number;
            public static KEYCODE_SYSRQ: number;
            public static KEYCODE_T: number;
            public static KEYCODE_TAB: number;
            public static KEYCODE_TV: number;
            public static KEYCODE_TV_ANTENNA_CABLE: number;
            public static KEYCODE_TV_AUDIO_DESCRIPTION: number;
            public static KEYCODE_TV_AUDIO_DESCRIPTION_MIX_DOWN: number;
            public static KEYCODE_TV_AUDIO_DESCRIPTION_MIX_UP: number;
            public static KEYCODE_TV_CONTENTS_MENU: number;
            public static KEYCODE_TV_DATA_SERVICE: number;
            public static KEYCODE_TV_INPUT: number;
            public static KEYCODE_TV_INPUT_COMPONENT_1: number;
            public static KEYCODE_TV_INPUT_COMPONENT_2: number;
            public static KEYCODE_TV_INPUT_COMPOSITE_1: number;
            public static KEYCODE_TV_INPUT_COMPOSITE_2: number;
            public static KEYCODE_TV_INPUT_HDMI_1: number;
            public static KEYCODE_TV_INPUT_HDMI_2: number;
            public static KEYCODE_TV_INPUT_HDMI_3: number;
            public static KEYCODE_TV_INPUT_HDMI_4: number;
            public static KEYCODE_TV_INPUT_VGA_1: number;
            public static KEYCODE_TV_MEDIA_CONTEXT_MENU: number;
            public static KEYCODE_TV_NETWORK: number;
            public static KEYCODE_TV_NUMBER_ENTRY: number;
            public static KEYCODE_TV_POWER: number;
            public static KEYCODE_TV_RADIO_SERVICE: number;
            public static KEYCODE_TV_SATELLITE: number;
            public static KEYCODE_TV_SATELLITE_BS: number;
            public static KEYCODE_TV_SATELLITE_CS: number;
            public static KEYCODE_TV_SATELLITE_SERVICE: number;
            public static KEYCODE_TV_TELETEXT: number;
            public static KEYCODE_TV_TERRESTRIAL_ANALOG: number;
            public static KEYCODE_TV_TERRESTRIAL_DIGITAL: number;
            public static KEYCODE_TV_TIMER_PROGRAMMING: number;
            public static KEYCODE_TV_ZOOM_MODE: number;
            public static KEYCODE_U: number;
            public static KEYCODE_UNKNOWN: number;
            public static KEYCODE_V: number;
            public static KEYCODE_VOICE_ASSIST: number;
            public static KEYCODE_VOLUME_DOWN: number;
            public static KEYCODE_VOLUME_MUTE: number;
            public static KEYCODE_VOLUME_UP: number;
            public static KEYCODE_W: number;
            public static KEYCODE_WAKEUP: number;
            public static KEYCODE_WINDOW: number;
            public static KEYCODE_X: number;
            public static KEYCODE_Y: number;
            public static KEYCODE_YEN: number;
            public static KEYCODE_Z: number;
            public static KEYCODE_ZENKAKU_HANKAKU: number;
            public static KEYCODE_ZOOM_IN: number;
            public static KEYCODE_ZOOM_OUT: number;
            public static MAX_KEYCODE: number;
            public static META_ALT_LEFT_ON: number;
            public static META_ALT_MASK: number;
            public static META_ALT_ON: number;
            public static META_ALT_RIGHT_ON: number;
            public static META_CAPS_LOCK_ON: number;
            public static META_CTRL_LEFT_ON: number;
            public static META_CTRL_MASK: number;
            public static META_CTRL_ON: number;
            public static META_CTRL_RIGHT_ON: number;
            public static META_FUNCTION_ON: number;
            public static META_META_LEFT_ON: number;
            public static META_META_MASK: number;
            public static META_META_ON: number;
            public static META_META_RIGHT_ON: number;
            public static META_NUM_LOCK_ON: number;
            public static META_SCROLL_LOCK_ON: number;
            public static META_SHIFT_LEFT_ON: number;
            public static META_SHIFT_MASK: number;
            public static META_SHIFT_ON: number;
            public static META_SHIFT_RIGHT_ON: number;
            public static META_SYM_ON: number;

            public static keyCodeToString(param0: number): string;

            public getDeviceId(): number;

            public isShiftPressed(): boolean;

            public static keyCodeFromString(param0: string): number;

            public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number);

            public static changeFlags(param0: android.view.KeyEvent, param1: number): android.view.KeyEvent;

            public isSymPressed(): boolean;

            public static metaStateHasNoModifiers(param0: number): boolean;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public isCtrlPressed(): boolean;

            public getEventTime(): number;

            public getKeyData(param0: android.view.KeyCharacterMap.KeyData): boolean;

            public getModifiers(): number;

            public getUnicodeChar(): number;

            public getFlags(): number;

            public constructor(param0: number, param1: string, param2: number, param3: number);

            public isPrintingKey(): boolean;

            public static getModifierMetaStateMask(): number;

            public constructor(param0: android.view.KeyEvent);
            public constructor(param0: android.view.KeyEvent, param1: number, param2: number);
            public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number);

            public isTracking(): boolean;

            public getAction(): number;

            public getScanCode(): number;

            public static isModifierKey(param0: number): boolean;

            public isNumLockOn(): boolean;

            public isScrollLockOn(): boolean;

            public dispatch(param0: android.view.KeyEvent.Callback, param1: android.view.KeyEvent.DispatcherState, param2: javalangObject): boolean;

            public static isGamepadButton(param0: number): boolean;

            public getDisplayLabel(): string;

            public describeContents(): number;

            public getSource(): number;

            public isCanceled(): boolean;

            public getRepeatCount(): number;

            public static changeAction(param0: android.view.KeyEvent, param1: number): android.view.KeyEvent;

            public getMatch(param0: native.Array<string>, param1: number): string;

            public dispatch(param0: android.view.KeyEvent.Callback): boolean;

            public static normalizeMetaState(param0: number): number;

            public isCapsLockOn(): boolean;

            public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number);

            public getDownTime(): number;

            public static getMaxKeyCode(): number;

            public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);

            public getKeyCharacterMap(): android.view.KeyCharacterMap;

            public static metaStateHasModifiers(param0: number, param1: number): boolean;

            public getCharacters(): string;

            public constructor(param0: number, param1: number);

            public static changeTimeRepeat(param0: android.view.KeyEvent, param1: number, param2: number): android.view.KeyEvent;

            public hasModifiers(param0: number): boolean;

            public startTracking(): void;

            public getNumber(): string;

            public setSource(param0: number): void;

            public getMetaState(): number;

            public isMetaPressed(): boolean;

            public isAltPressed(): boolean;

            public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number);

            public hasNoModifiers(): boolean;

            public isLongPress(): boolean;

            public static getDeadChar(param0: number, param1: number): number;

            public static changeTimeRepeat(param0: android.view.KeyEvent, param1: number, param2: number, param3: number): android.view.KeyEvent;

            public toString(): string;

            public isFunctionPressed(): boolean;

            public getMatch(param0: native.Array<string>): string;

            public getKeyCode(): number;

            public getUnicodeChar(param0: number): number;

            public isSystem(): boolean;
        }
        export module KeyEvent {
            export class Callback extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.KeyEvent$Callback interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
                    onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
                    onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
                    onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
                });

                public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

                public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

                public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

                public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
            }
            export class DispatcherState extends javalangObject {
                public reset(): void;

                public performedLongPress(param0: android.view.KeyEvent): void;

                public startTracking(param0: android.view.KeyEvent, param1: javalangObject): void;

                public reset(param0: javalangObject): void;

                public handleUpEvent(param0: android.view.KeyEvent): void;

                public isTracking(param0: android.view.KeyEvent): boolean;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
declare module android {
    export module view {
        export abstract class LayoutInflater extends javalangObject {
            public constructor(param0: android.view.LayoutInflater, param1: android.content.Context);

            public inflate(param0: number, param1: android.view.ViewGroup, param2: boolean): android.view.View;

            public cloneInContext(param0: android.content.Context): android.view.LayoutInflater;

            public setFilter(param0: android.view.LayoutInflater.Filter): void;

            public setFactory2(param0: android.view.LayoutInflater.Factory2): void;

            public inflate(param0: orgxmlpullv1XmlPullParser, param1: android.view.ViewGroup): android.view.View;

            public onCreateView(param0: string, param1: android.util.AttributeSet): android.view.View;

            public constructor(param0: android.content.Context);

            public inflate(param0: number, param1: android.view.ViewGroup): android.view.View;

            public getContext(): android.content.Context;

            public getFactory2(): android.view.LayoutInflater.Factory2;

            public inflate(param0: orgxmlpullv1XmlPullParser, param1: android.view.ViewGroup, param2: boolean): android.view.View;

            public getFilter(): android.view.LayoutInflater.Filter;

            public onCreateView(param0: android.view.View, param1: string, param2: android.util.AttributeSet): android.view.View;

            public getFactory(): android.view.LayoutInflater.Factory;

            public static from(param0: android.content.Context): android.view.LayoutInflater;

            public setFactory(param0: android.view.LayoutInflater.Factory): void;

            public createView(param0: string, param1: string, param2: android.util.AttributeSet): android.view.View;
        }
        export module LayoutInflater {
            export class Factory extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.LayoutInflater$Factory interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onCreateView(param0: string, param1: android.content.Context, param2: android.util.AttributeSet): android.view.View;
                });

                public onCreateView(param0: string, param1: android.content.Context, param2: android.util.AttributeSet): android.view.View;
            }
            export class Factory2 extends javalangObject implements android.view.LayoutInflater.Factory {
                /**
                 * Constructs a new instance of the android.view.LayoutInflater$Factory2 interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
                    onCreateView(param0: string, param1: android.content.Context, param2: android.util.AttributeSet): android.view.View;
                });

                public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
                public onCreateView(param0: string, param1: android.content.Context, param2: android.util.AttributeSet): android.view.View;
            }
            export class Filter extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.LayoutInflater$Filter interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onLoadClass(param0: javalangClass): boolean;
                });

                public onLoadClass(param0: javalangClass): boolean;
            }
        }
    }
}

/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.SubMenu.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module view {
        export class Menu extends javalangObject {
            /**
             * Constructs a new instance of the android.view.Menu interface with the provided implementation.
             */
            public constructor(implementation: {
                add(param0: string): android.view.MenuItem;
                add(param0: number): android.view.MenuItem;
                add(param0: number, param1: number, param2: number, param3: string): android.view.MenuItem;
                add(param0: number, param1: number, param2: number, param3: number): android.view.MenuItem;
                addSubMenu(param0: string): android.view.SubMenu;
                addSubMenu(param0: number): android.view.SubMenu;
                addSubMenu(param0: number, param1: number, param2: number, param3: string): android.view.SubMenu;
                addSubMenu(param0: number, param1: number, param2: number, param3: number): android.view.SubMenu;
                addIntentOptions(param0: number, param1: number, param2: number, param3: android.content.ComponentName, param4: native.Array<android.content.Intent>, param5: android.content.Intent, param6: number, param7: native.Array<android.view.MenuItem>): number;
                removeItem(param0: number): void;
                removeGroup(param0: number): void;
                clear(): void;
                setGroupCheckable(param0: number, param1: boolean, param2: boolean): void;
                setGroupVisible(param0: number, param1: boolean): void;
                setGroupEnabled(param0: number, param1: boolean): void;
                hasVisibleItems(): boolean;
                findItem(param0: number): android.view.MenuItem;
                size(): number;
                getItem(param0: number): android.view.MenuItem;
                close(): void;
                performShortcut(param0: number, param1: android.view.KeyEvent, param2: number): boolean;
                isShortcutKey(param0: number, param1: android.view.KeyEvent): boolean;
                performIdentifierAction(param0: number, param1: number): boolean;
                setQwertyMode(param0: boolean): void;
            });

            public static CATEGORY_SECONDARY: number;
            public static FLAG_APPEND_TO_GROUP: number;
            public static FIRST: number;
            public static NONE: number;
            public static CATEGORY_ALTERNATIVE: number;
            public static FLAG_ALWAYS_PERFORM_CLOSE: number;
            public static CATEGORY_CONTAINER: number;
            public static FLAG_PERFORM_NO_CLOSE: number;
            public static CATEGORY_SYSTEM: number;

            public clear(): void;

            public hasVisibleItems(): boolean;

            public isShortcutKey(param0: number, param1: android.view.KeyEvent): boolean;

            public setGroupCheckable(param0: number, param1: boolean, param2: boolean): void;

            public size(): number;

            public add(param0: string): android.view.MenuItem;
            public add(param0: number): android.view.MenuItem;
            public add(param0: number, param1: number, param2: number, param3: string): android.view.MenuItem;

            public removeGroup(param0: number): void;

            public setGroupEnabled(param0: number, param1: boolean): void;

            public getItem(param0: number): android.view.MenuItem;

            public add(param0: number, param1: number, param2: number, param3: number): android.view.MenuItem;

            public addSubMenu(param0: string): android.view.SubMenu;
            public addSubMenu(param0: number): android.view.SubMenu;

            public removeItem(param0: number): void;

            public addSubMenu(param0: number, param1: number, param2: number, param3: number): android.view.SubMenu;

            public performIdentifierAction(param0: number, param1: number): boolean;

            public performShortcut(param0: number, param1: android.view.KeyEvent, param2: number): boolean;

            public setQwertyMode(param0: boolean): void;

            public setGroupVisible(param0: number, param1: boolean): void;

            public addIntentOptions(param0: number, param1: number, param2: number, param3: android.content.ComponentName, param4: native.Array<android.content.Intent>, param5: android.content.Intent, param6: number, param7: native.Array<android.view.MenuItem>): number;

            public close(): void;

            public addSubMenu(param0: number, param1: number, param2: number, param3: string): android.view.SubMenu;

            public findItem(param0: number): android.view.MenuItem;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
declare module android {
    export module view {
        export class MenuInflater extends javalangObject {
            public constructor(param0: android.content.Context);

            public inflate(param0: number, param1: android.view.Menu): void;
        }
    }
}

/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.view.ActionProvider.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.SubMenu.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module view {
        export class MenuItem extends javalangObject {
            /**
             * Constructs a new instance of the android.view.MenuItem interface with the provided implementation.
             */
            public constructor(implementation: {
                getItemId(): number;
                getGroupId(): number;
                getOrder(): number;
                setTitle(param0: string): android.view.MenuItem;
                setTitle(param0: number): android.view.MenuItem;
                getTitle(): string;
                setTitleCondensed(param0: string): android.view.MenuItem;
                getTitleCondensed(): string;
                setIcon(param0: android.graphics.drawable.Drawable): android.view.MenuItem;
                setIcon(param0: number): android.view.MenuItem;
                getIcon(): android.graphics.drawable.Drawable;
                setIntent(param0: android.content.Intent): android.view.MenuItem;
                getIntent(): android.content.Intent;
                setShortcut(param0: string, param1: string): android.view.MenuItem;
                setNumericShortcut(param0: string): android.view.MenuItem;
                getNumericShortcut(): string;
                setAlphabeticShortcut(param0: string): android.view.MenuItem;
                getAlphabeticShortcut(): string;
                setCheckable(param0: boolean): android.view.MenuItem;
                isCheckable(): boolean;
                setChecked(param0: boolean): android.view.MenuItem;
                isChecked(): boolean;
                setVisible(param0: boolean): android.view.MenuItem;
                isVisible(): boolean;
                setEnabled(param0: boolean): android.view.MenuItem;
                isEnabled(): boolean;
                hasSubMenu(): boolean;
                getSubMenu(): android.view.SubMenu;
                setOnMenuItemClickListener(param0: android.view.MenuItem.OnMenuItemClickListener): android.view.MenuItem;
                getMenuInfo(): android.view.ContextMenu.ContextMenuInfo;
                setShowAsAction(param0: number): void;
                setShowAsActionFlags(param0: number): android.view.MenuItem;
                setActionView(param0: android.view.View): android.view.MenuItem;
                setActionView(param0: number): android.view.MenuItem;
                getActionView(): android.view.View;
                setActionProvider(param0: android.view.ActionProvider): android.view.MenuItem;
                getActionProvider(): android.view.ActionProvider;
                expandActionView(): boolean;
                collapseActionView(): boolean;
                isActionViewExpanded(): boolean;
                setOnActionExpandListener(param0: android.view.MenuItem.OnActionExpandListener): android.view.MenuItem;
            });

            public static SHOW_AS_ACTION_WITH_TEXT: number;
            public static SHOW_AS_ACTION_ALWAYS: number;
            public static SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW: number;
            public static SHOW_AS_ACTION_NEVER: number;
            public static SHOW_AS_ACTION_IF_ROOM: number;

            public setActionProvider(param0: android.view.ActionProvider): android.view.MenuItem;

            public getIntent(): android.content.Intent;

            public isCheckable(): boolean;

            public getMenuInfo(): android.view.ContextMenu.ContextMenuInfo;

            public getActionView(): android.view.View;

            public collapseActionView(): boolean;

            public setOnActionExpandListener(param0: android.view.MenuItem.OnActionExpandListener): android.view.MenuItem;

            public getAlphabeticShortcut(): string;

            public isActionViewExpanded(): boolean;

            public getActionProvider(): android.view.ActionProvider;

            public getNumericShortcut(): string;

            public setIntent(param0: android.content.Intent): android.view.MenuItem;

            public getSubMenu(): android.view.SubMenu;

            public setIcon(param0: number): android.view.MenuItem;

            public setTitle(param0: number): android.view.MenuItem;

            public setCheckable(param0: boolean): android.view.MenuItem;

            public getTitle(): string;

            public setEnabled(param0: boolean): android.view.MenuItem;

            public setActionView(param0: android.view.View): android.view.MenuItem;

            public setIcon(param0: android.graphics.drawable.Drawable): android.view.MenuItem;

            public isChecked(): boolean;

            public getTitleCondensed(): string;

            public setActionView(param0: number): android.view.MenuItem;

            public getOrder(): number;

            public setTitleCondensed(param0: string): android.view.MenuItem;

            public setChecked(param0: boolean): android.view.MenuItem;

            public isVisible(): boolean;

            public expandActionView(): boolean;

            public getGroupId(): number;

            public setShowAsActionFlags(param0: number): android.view.MenuItem;

            public getItemId(): number;

            public setShowAsAction(param0: number): void;

            public getIcon(): android.graphics.drawable.Drawable;

            public isEnabled(): boolean;

            public setShortcut(param0: string, param1: string): android.view.MenuItem;

            public setAlphabeticShortcut(param0: string): android.view.MenuItem;

            public setVisible(param0: boolean): android.view.MenuItem;

            public setOnMenuItemClickListener(param0: android.view.MenuItem.OnMenuItemClickListener): android.view.MenuItem;

            public setNumericShortcut(param0: string): android.view.MenuItem;

            public hasSubMenu(): boolean;

            public setTitle(param0: string): android.view.MenuItem;
        }
        export module MenuItem {
            export class OnActionExpandListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.MenuItem$OnActionExpandListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onMenuItemActionExpand(param0: android.view.MenuItem): boolean;
                    onMenuItemActionCollapse(param0: android.view.MenuItem): boolean;
                });

                public onMenuItemActionExpand(param0: android.view.MenuItem): boolean;

                public onMenuItemActionCollapse(param0: android.view.MenuItem): boolean;
            }
            export class OnMenuItemClickListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.MenuItem$OnMenuItemClickListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onMenuItemClick(param0: android.view.MenuItem): boolean;
                });

                public onMenuItemClick(param0: android.view.MenuItem): boolean;
            }
        }
    }
}

/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module view {
        export class MotionEvent extends android.view.InputEvent implements android.os.Parcelable {
            public static ACTION_BUTTON_PRESS: number;
            public static ACTION_BUTTON_RELEASE: number;
            public static ACTION_CANCEL: number;
            public static ACTION_DOWN: number;
            public static ACTION_HOVER_ENTER: number;
            public static ACTION_HOVER_EXIT: number;
            public static ACTION_HOVER_MOVE: number;
            public static ACTION_MASK: number;
            public static ACTION_MOVE: number;
            public static ACTION_OUTSIDE: number;
            public static ACTION_POINTER_1_DOWN: number;
            public static ACTION_POINTER_1_UP: number;
            public static ACTION_POINTER_2_DOWN: number;
            public static ACTION_POINTER_2_UP: number;
            public static ACTION_POINTER_3_DOWN: number;
            public static ACTION_POINTER_3_UP: number;
            public static ACTION_POINTER_DOWN: number;
            public static ACTION_POINTER_ID_MASK: number;
            public static ACTION_POINTER_ID_SHIFT: number;
            public static ACTION_POINTER_INDEX_MASK: number;
            public static ACTION_POINTER_INDEX_SHIFT: number;
            public static ACTION_POINTER_UP: number;
            public static ACTION_SCROLL: number;
            public static ACTION_UP: number;
            public static AXIS_BRAKE: number;
            public static AXIS_DISTANCE: number;
            public static AXIS_GAS: number;
            public static AXIS_GENERIC_1: number;
            public static AXIS_GENERIC_10: number;
            public static AXIS_GENERIC_11: number;
            public static AXIS_GENERIC_12: number;
            public static AXIS_GENERIC_13: number;
            public static AXIS_GENERIC_14: number;
            public static AXIS_GENERIC_15: number;
            public static AXIS_GENERIC_16: number;
            public static AXIS_GENERIC_2: number;
            public static AXIS_GENERIC_3: number;
            public static AXIS_GENERIC_4: number;
            public static AXIS_GENERIC_5: number;
            public static AXIS_GENERIC_6: number;
            public static AXIS_GENERIC_7: number;
            public static AXIS_GENERIC_8: number;
            public static AXIS_GENERIC_9: number;
            public static AXIS_HAT_X: number;
            public static AXIS_HAT_Y: number;
            public static AXIS_HSCROLL: number;
            public static AXIS_LTRIGGER: number;
            public static AXIS_ORIENTATION: number;
            public static AXIS_PRESSURE: number;
            public static AXIS_RTRIGGER: number;
            public static AXIS_RUDDER: number;
            public static AXIS_RX: number;
            public static AXIS_RY: number;
            public static AXIS_RZ: number;
            public static AXIS_SIZE: number;
            public static AXIS_THROTTLE: number;
            public static AXIS_TILT: number;
            public static AXIS_TOOL_MAJOR: number;
            public static AXIS_TOOL_MINOR: number;
            public static AXIS_TOUCH_MAJOR: number;
            public static AXIS_TOUCH_MINOR: number;
            public static AXIS_VSCROLL: number;
            public static AXIS_WHEEL: number;
            public static AXIS_X: number;
            public static AXIS_Y: number;
            public static AXIS_Z: number;
            public static BUTTON_BACK: number;
            public static BUTTON_FORWARD: number;
            public static BUTTON_PRIMARY: number;
            public static BUTTON_SECONDARY: number;
            public static BUTTON_STYLUS_PRIMARY: number;
            public static BUTTON_STYLUS_SECONDARY: number;
            public static BUTTON_TERTIARY: number;
            public static CREATOR: android.os.Parcelable.Creator;
            public static EDGE_BOTTOM: number;
            public static EDGE_LEFT: number;
            public static EDGE_RIGHT: number;
            public static EDGE_TOP: number;
            public static FLAG_WINDOW_IS_OBSCURED: number;
            public static INVALID_POINTER_ID: number;
            public static TOOL_TYPE_ERASER: number;
            public static TOOL_TYPE_FINGER: number;
            public static TOOL_TYPE_MOUSE: number;
            public static TOOL_TYPE_STYLUS: number;
            public static TOOL_TYPE_UNKNOWN: number;

            public getAxisValue(param0: number): number;

            public getPointerCount(): number;

            public getRawX(): number;

            public getXPrecision(): number;

            public getDeviceId(): number;

            public getToolMajor(param0: number): number;

            public getHistoricalToolMajor(param0: number): number;

            public setAction(param0: number): void;

            public getX(param0: number): number;

            public getHistoricalSize(param0: number, param1: number): number;

            public static obtain(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number): android.view.MotionEvent;

            public recycle(): void;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getActionMasked(): number;

            public getX(): number;

            public getActionButton(): number;

            public getEventTime(): number;

            public getHistoricalX(param0: number): number;

            public getHistoricalToolMajor(param0: number, param1: number): number;

            public addBatch(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

            public static obtain(param0: number, param1: number, param2: number, param3: number, param4: native.Array<android.view.MotionEvent.PointerProperties>, param5: native.Array<android.view.MotionEvent.PointerCoords>, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number): android.view.MotionEvent;

            public getHistoricalPressure(param0: number): number;

            public static axisFromString(param0: string): number;

            public getFlags(): number;

            public offsetLocation(param0: number, param1: number): void;

            public getTouchMinor(param0: number): number;

            public getHistoricalTouchMinor(param0: number): number;

            public getAction(): number;

            public getActionIndex(): number;

            public getHistoricalEventTime(param0: number): number;

            public getTouchMajor(): number;

            public describeContents(): number;

            public getSource(): number;

            public getPressure(): number;

            public getHistoricalTouchMajor(param0: number, param1: number): number;

            public getPointerCoords(param0: number, param1: android.view.MotionEvent.PointerCoords): void;

            public getToolMinor(): number;

            public getEdgeFlags(): number;

            public getHistoricalAxisValue(param0: number, param1: number, param2: number): number;

            public getPointerId(param0: number): number;

            public getHistoricalTouchMinor(param0: number, param1: number): number;

            public getHistoricalOrientation(param0: number, param1: number): number;

            public static obtainNoHistory(param0: android.view.MotionEvent): android.view.MotionEvent;

            public getY(): number;

            public static obtain(param0: android.view.MotionEvent): android.view.MotionEvent;

            public getToolMajor(): number;

            public getSize(): number;

            public getToolType(param0: number): number;

            public getAxisValue(param0: number, param1: number): number;

            public static obtain(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>, param5: native.Array<android.view.MotionEvent.PointerCoords>, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number): android.view.MotionEvent;

            public getDownTime(): number;

            public getHistoricalY(param0: number): number;

            public getY(param0: number): number;

            public getHistorySize(): number;

            public getHistoricalToolMinor(param0: number): number;

            public getToolMinor(param0: number): number;

            public getHistoricalPressure(param0: number, param1: number): number;

            public getHistoricalToolMinor(param0: number, param1: number): number;

            public getHistoricalSize(param0: number): number;

            public getOrientation(): number;

            public getPointerProperties(param0: number, param1: android.view.MotionEvent.PointerProperties): void;

            public getHistoricalPointerCoords(param0: number, param1: number, param2: android.view.MotionEvent.PointerCoords): void;

            public addBatch(param0: number, param1: native.Array<android.view.MotionEvent.PointerCoords>, param2: number): void;

            public finalize(): void;

            public getTouchMinor(): number;

            public transform(param0: android.graphics.Matrix): void;

            public getOrientation(param0: number): number;

            public setSource(param0: number): void;

            public getSize(param0: number): number;

            public setEdgeFlags(param0: number): void;

            public getMetaState(): number;

            public isButtonPressed(param0: number): boolean;

            public getYPrecision(): number;

            public static axisToString(param0: number): string;

            public getTouchMajor(param0: number): number;

            public setLocation(param0: number, param1: number): void;

            public static obtain(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number): android.view.MotionEvent;

            public toString(): string;

            public getHistoricalAxisValue(param0: number, param1: number): number;

            public findPointerIndex(param0: number): number;

            public getHistoricalY(param0: number, param1: number): number;

            public getButtonState(): number;

            public getRawY(): number;

            public static obtain(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): android.view.MotionEvent;

            public static actionToString(param0: number): string;

            public getPressure(param0: number): number;

            public getHistoricalTouchMajor(param0: number): number;

            public getHistoricalX(param0: number, param1: number): number;

            public getHistoricalOrientation(param0: number): number;
        }
        export module MotionEvent {
            export class PointerCoords extends javalangObject {
                public orientation: number;
                public pressure: number;
                public size: number;
                public toolMajor: number;
                public toolMinor: number;
                public touchMajor: number;
                public touchMinor: number;
                public x: number;
                public y: number;

                public copyFrom(param0: android.view.MotionEvent.PointerCoords): void;

                public constructor(param0: android.view.MotionEvent.PointerCoords);

                public clear(): void;

                public getAxisValue(param0: number): number;

                public setAxisValue(param0: number, param1: number): void;

                public constructor();
            }
            export class PointerProperties extends javalangObject {
                public id: number;
                public toolType: number;

                public constructor(param0: android.view.MotionEvent.PointerProperties);

                public equals(param0: javalangObject): boolean;

                public hashCode(): number;

                public copyFrom(param0: android.view.MotionEvent.PointerProperties): void;

                public clear(): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
declare module android {
    export module view {
        export abstract class OrientationEventListener extends javalangObject {
            public static ORIENTATION_UNKNOWN: number;

            public disable(): void;

            public onOrientationChanged(param0: number): void;

            public constructor(param0: android.content.Context);

            public enable(): void;

            public constructor(param0: android.content.Context, param1: number);

            public canDetectOrientation(): boolean;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
declare module android {
    export module view {
        export abstract class OrientationListener extends javalangObject implements android.hardware.SensorListener {
            public static ORIENTATION_UNKNOWN: number;

            public onSensorChanged(param0: number, param1: native.Array<number>): void;

            public disable(): void;

            public onOrientationChanged(param0: number): void;

            public constructor(param0: android.content.Context);

            public onAccuracyChanged(param0: number, param1: number): void;

            public enable(): void;

            public constructor(param0: android.content.Context, param1: number);
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.ScaleGestureDetector.d.ts" />
declare module android {
    export module view {
        export class ScaleGestureDetector extends javalangObject {
            public setQuickScaleEnabled(param0: boolean): void;

            public getCurrentSpan(): number;

            public getPreviousSpan(): number;

            public constructor(param0: android.content.Context, param1: android.view.ScaleGestureDetector.OnScaleGestureListener);

            public isStylusScaleEnabled(): boolean;

            public getFocusX(): number;

            public getCurrentSpanX(): number;

            public getPreviousSpanY(): number;

            public onTouchEvent(param0: android.view.MotionEvent): boolean;

            public getCurrentSpanY(): number;

            public getPreviousSpanX(): number;

            public setStylusScaleEnabled(param0: boolean): void;

            public getScaleFactor(): number;

            public getTimeDelta(): number;

            public isInProgress(): boolean;

            public getFocusY(): number;

            public getEventTime(): number;

            public constructor(param0: android.content.Context, param1: android.view.ScaleGestureDetector.OnScaleGestureListener, param2: android.os.Handler);

            public isQuickScaleEnabled(): boolean;
        }
        export module ScaleGestureDetector {
            export class OnScaleGestureListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.ScaleGestureDetector$OnScaleGestureListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onScale(param0: android.view.ScaleGestureDetector): boolean;
                    onScaleBegin(param0: android.view.ScaleGestureDetector): boolean;
                    onScaleEnd(param0: android.view.ScaleGestureDetector): void;
                });

                public onScale(param0: android.view.ScaleGestureDetector): boolean;

                public onScaleEnd(param0: android.view.ScaleGestureDetector): void;

                public onScaleBegin(param0: android.view.ScaleGestureDetector): boolean;
            }
            export class SimpleOnScaleGestureListener extends javalangObject implements android.view.ScaleGestureDetector.OnScaleGestureListener {
                public onScale(param0: android.view.ScaleGestureDetector): boolean;

                public onScaleEnd(param0: android.view.ScaleGestureDetector): void;

                public onScaleBegin(param0: android.view.ScaleGestureDetector): boolean;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.view.InputDevice.d.ts" />
declare module android {
    export module view {
        export class SearchEvent extends javalangObject {
            public constructor(param0: android.view.InputDevice);

            public getInputDevice(): android.view.InputDevice;
        }
    }
}

declare module android {
    export module view {
        export class SoundEffectConstants extends javalangObject {
            public static CLICK: number;
            public static NAVIGATION_DOWN: number;
            public static NAVIGATION_LEFT: number;
            public static NAVIGATION_RIGHT: number;
            public static NAVIGATION_UP: number;

            public static getContantForFocusDirection(param0: number): number;
        }
    }
}

/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module view {
        export class SubMenu extends javalangObject implements android.view.Menu {
            /**
             * Constructs a new instance of the android.view.SubMenu interface with the provided implementation.
             */
            public constructor(implementation: {
                setHeaderTitle(param0: number): android.view.SubMenu;
                setHeaderTitle(param0: string): android.view.SubMenu;
                setHeaderIcon(param0: number): android.view.SubMenu;
                setHeaderIcon(param0: android.graphics.drawable.Drawable): android.view.SubMenu;
                setHeaderView(param0: android.view.View): android.view.SubMenu;
                clearHeader(): void;
                setIcon(param0: number): android.view.SubMenu;
                setIcon(param0: android.graphics.drawable.Drawable): android.view.SubMenu;
                getItem(): android.view.MenuItem;
                add(param0: string): android.view.MenuItem;
                add(param0: number): android.view.MenuItem;
                add(param0: number, param1: number, param2: number, param3: string): android.view.MenuItem;
                add(param0: number, param1: number, param2: number, param3: number): android.view.MenuItem;
                addSubMenu(param0: string): android.view.SubMenu;
                addSubMenu(param0: number): android.view.SubMenu;
                addSubMenu(param0: number, param1: number, param2: number, param3: string): android.view.SubMenu;
                addSubMenu(param0: number, param1: number, param2: number, param3: number): android.view.SubMenu;
                addIntentOptions(param0: number, param1: number, param2: number, param3: android.content.ComponentName, param4: native.Array<android.content.Intent>, param5: android.content.Intent, param6: number, param7: native.Array<android.view.MenuItem>): number;
                removeItem(param0: number): void;
                removeGroup(param0: number): void;
                clear(): void;
                setGroupCheckable(param0: number, param1: boolean, param2: boolean): void;
                setGroupVisible(param0: number, param1: boolean): void;
                setGroupEnabled(param0: number, param1: boolean): void;
                hasVisibleItems(): boolean;
                findItem(param0: number): android.view.MenuItem;
                size(): number;
                getItem(param0: number): android.view.MenuItem;
                close(): void;
                performShortcut(param0: number, param1: android.view.KeyEvent, param2: number): boolean;
                isShortcutKey(param0: number, param1: android.view.KeyEvent): boolean;
                performIdentifierAction(param0: number, param1: number): boolean;
                setQwertyMode(param0: boolean): void;
            });

            public static CATEGORY_SECONDARY: number;
            public static FLAG_APPEND_TO_GROUP: number;
            public static FIRST: number;
            public static NONE: number;
            public static CATEGORY_ALTERNATIVE: number;
            public static FLAG_ALWAYS_PERFORM_CLOSE: number;
            public static CATEGORY_CONTAINER: number;
            public static FLAG_PERFORM_NO_CLOSE: number;
            public static CATEGORY_SYSTEM: number;

            public hasVisibleItems(): boolean;

            public setIcon(param0: number): android.view.SubMenu;

            public getItem(): android.view.MenuItem;

            public setGroupEnabled(param0: number, param1: boolean): void;

            public add(param0: number, param1: number, param2: number, param3: number): android.view.MenuItem;

            public setHeaderIcon(param0: number): android.view.SubMenu;

            public addSubMenu(param0: string): android.view.SubMenu;
            public addSubMenu(param0: number): android.view.SubMenu;

            public removeItem(param0: number): void;

            public setQwertyMode(param0: boolean): void;

            public addIntentOptions(param0: number, param1: number, param2: number, param3: android.content.ComponentName, param4: native.Array<android.content.Intent>, param5: android.content.Intent, param6: number, param7: native.Array<android.view.MenuItem>): number;

            public close(): void;

            public clear(): void;

            public clearHeader(): void;

            public isShortcutKey(param0: number, param1: android.view.KeyEvent): boolean;

            public setGroupCheckable(param0: number, param1: boolean, param2: boolean): void;

            public size(): number;

            public add(param0: string): android.view.MenuItem;
            public add(param0: number): android.view.MenuItem;

            public setIcon(param0: android.graphics.drawable.Drawable): android.view.SubMenu;

            public add(param0: number, param1: number, param2: number, param3: string): android.view.MenuItem;

            public removeGroup(param0: number): void;

            public getItem(param0: number): android.view.MenuItem;

            public setHeaderView(param0: android.view.View): android.view.SubMenu;

            public setHeaderTitle(param0: number): android.view.SubMenu;

            public addSubMenu(param0: number, param1: number, param2: number, param3: number): android.view.SubMenu;

            public setHeaderTitle(param0: string): android.view.SubMenu;

            public performIdentifierAction(param0: number, param1: number): boolean;

            public performShortcut(param0: number, param1: android.view.KeyEvent, param2: number): boolean;

            public setGroupVisible(param0: number, param1: boolean): void;

            public addSubMenu(param0: number, param1: number, param2: number, param3: string): android.view.SubMenu;

            public findItem(param0: number): android.view.MenuItem;

            public setHeaderIcon(param0: android.graphics.drawable.Drawable): android.view.SubMenu;
        }
    }
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.SurfaceTexture.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module view {
        export class Surface extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static ROTATION_0: number;
            public static ROTATION_180: number;
            public static ROTATION_270: number;
            public static ROTATION_90: number;

            public constructor(param0: android.graphics.SurfaceTexture);

            public lockHardwareCanvas(): android.graphics.Canvas;

            public toString(): string;

            public unlockCanvasAndPost(param0: android.graphics.Canvas): void;

            public unlockCanvas(param0: android.graphics.Canvas): void;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public isValid(): boolean;

            public lockCanvas(param0: android.graphics.Rect): android.graphics.Canvas;

            public finalize(): void;

            public release(): void;

            public readFromParcel(param0: android.os.Parcel): void;
        }
        export module Surface {
            export class OutOfResourcesException extends javalangRuntimeException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./android.view.SurfaceHolder.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module view {
        export class SurfaceHolder extends javalangObject {
            /**
             * Constructs a new instance of the android.view.SurfaceHolder interface with the provided implementation.
             */
            public constructor(implementation: {
                addCallback(param0: android.view.SurfaceHolder.Callback): void;
                removeCallback(param0: android.view.SurfaceHolder.Callback): void;
                isCreating(): boolean;
                setType(param0: number): void;
                setFixedSize(param0: number, param1: number): void;
                setSizeFromLayout(): void;
                setFormat(param0: number): void;
                setKeepScreenOn(param0: boolean): void;
                lockCanvas(): android.graphics.Canvas;
                lockCanvas(param0: android.graphics.Rect): android.graphics.Canvas;
                unlockCanvasAndPost(param0: android.graphics.Canvas): void;
                getSurfaceFrame(): android.graphics.Rect;
                getSurface(): android.view.Surface;
            });

            public static SURFACE_TYPE_GPU: number;
            public static SURFACE_TYPE_HARDWARE: number;
            public static SURFACE_TYPE_PUSH_BUFFERS: number;
            public static SURFACE_TYPE_NORMAL: number;

            public setFixedSize(param0: number, param1: number): void;

            public lockCanvas(): android.graphics.Canvas;

            public unlockCanvasAndPost(param0: android.graphics.Canvas): void;

            public setType(param0: number): void;

            public setSizeFromLayout(): void;

            public lockCanvas(param0: android.graphics.Rect): android.graphics.Canvas;

            public getSurfaceFrame(): android.graphics.Rect;

            public addCallback(param0: android.view.SurfaceHolder.Callback): void;

            public getSurface(): android.view.Surface;

            public removeCallback(param0: android.view.SurfaceHolder.Callback): void;

            public isCreating(): boolean;

            public setKeepScreenOn(param0: boolean): void;

            public setFormat(param0: number): void;
        }
        export module SurfaceHolder {
            export class BadSurfaceTypeException extends javalangRuntimeException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
            export class Callback extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.SurfaceHolder$Callback interface with the provided implementation.
                 */
                public constructor(implementation: {
                    surfaceCreated(param0: android.view.SurfaceHolder): void;
                    surfaceChanged(param0: android.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
                    surfaceDestroyed(param0: android.view.SurfaceHolder): void;
                });

                public surfaceCreated(param0: android.view.SurfaceHolder): void;

                public surfaceChanged(param0: android.view.SurfaceHolder, param1: number, param2: number, param3: number): void;

                public surfaceDestroyed(param0: android.view.SurfaceHolder): void;
            }
            export class Callback2 extends javalangObject implements android.view.SurfaceHolder.Callback {
                /**
                 * Constructs a new instance of the android.view.SurfaceHolder$Callback2 interface with the provided implementation.
                 */
                public constructor(implementation: {
                    surfaceRedrawNeeded(param0: android.view.SurfaceHolder): void;
                    surfaceCreated(param0: android.view.SurfaceHolder): void;
                    surfaceChanged(param0: android.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
                    surfaceDestroyed(param0: android.view.SurfaceHolder): void;
                });

                public surfaceRedrawNeeded(param0: android.view.SurfaceHolder): void;

                public surfaceCreated(param0: android.view.SurfaceHolder): void;

                public surfaceChanged(param0: android.view.SurfaceHolder, param1: number, param2: number, param3: number): void;

                public surfaceDestroyed(param0: android.view.SurfaceHolder): void;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Region.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.SurfaceHolder.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module view {
        export class SurfaceView extends android.view.View {
            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onMeasure(param0: number, param1: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public getHolder(): android.view.SurfaceHolder;

            public gatherTransparentRegion(param0: android.graphics.Region): boolean;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onWindowVisibilityChanged(param0: number): void;

            public setZOrderOnTop(param0: boolean): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public onDetachedFromWindow(): void;

            public draw(param0: android.graphics.Canvas): void;

            public sendAccessibilityEvent(param0: number): void;

            public setVisibility(param0: number): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public dispatchDraw(param0: android.graphics.Canvas): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public constructor(param0: android.content.Context);

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public onAttachedToWindow(): void;

            public setSecure(param0: boolean): void;

            public setZOrderMediaOverlay(param0: boolean): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.SurfaceTexture.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module view {
        export class TextureView extends android.view.View {
            public setLayerType(param0: number, param1: android.graphics.Paint): void;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;

            public lockCanvas(): android.graphics.Canvas;
            public lockCanvas(param0: android.graphics.Rect): android.graphics.Canvas;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public setOpaque(param0: boolean): void;

            public setTransform(param0: android.graphics.Matrix): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public setLayerPaint(param0: android.graphics.Paint): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public getSurfaceTexture(): android.graphics.SurfaceTexture;

            public getLayerType(): number;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public setSurfaceTexture(param0: android.graphics.SurfaceTexture): void;

            public isOpaque(): boolean;

            public draw(param0: android.graphics.Canvas): void;

            public sendAccessibilityEvent(param0: number): void;

            public getBitmap(param0: number, param1: number): android.graphics.Bitmap;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public unlockCanvasAndPost(param0: android.graphics.Canvas): void;

            public getBitmap(): android.graphics.Bitmap;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getBitmap(param0: android.graphics.Bitmap): android.graphics.Bitmap;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public onVisibilityChanged(param0: android.view.View, param1: number): void;

            public getSurfaceTextureListener(): android.view.TextureView.SurfaceTextureListener;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public constructor(param0: android.content.Context);

            public buildLayer(): void;

            public setSurfaceTextureListener(param0: android.view.TextureView.SurfaceTextureListener): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public onDraw(param0: android.graphics.Canvas): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public onAttachedToWindow(): void;

            public getTransform(param0: android.graphics.Matrix): android.graphics.Matrix;

            public isAvailable(): boolean;
        }
        export module TextureView {
            export class SurfaceTextureListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.TextureView$SurfaceTextureListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onSurfaceTextureAvailable(param0: android.graphics.SurfaceTexture, param1: number, param2: number): void;
                    onSurfaceTextureSizeChanged(param0: android.graphics.SurfaceTexture, param1: number, param2: number): void;
                    onSurfaceTextureDestroyed(param0: android.graphics.SurfaceTexture): boolean;
                    onSurfaceTextureUpdated(param0: android.graphics.SurfaceTexture): void;
                });

                public onSurfaceTextureUpdated(param0: android.graphics.SurfaceTexture): void;

                public onSurfaceTextureAvailable(param0: android.graphics.SurfaceTexture, param1: number, param2: number): void;

                public onSurfaceTextureSizeChanged(param0: android.graphics.SurfaceTexture, param1: number, param2: number): void;

                public onSurfaceTextureDestroyed(param0: android.graphics.SurfaceTexture): boolean;
            }
        }
    }
}

/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
declare module android {
    export module view {
        export class TouchDelegate extends javalangObject {
            public static ABOVE: number;
            public static BELOW: number;
            public static TO_LEFT: number;
            public static TO_RIGHT: number;

            public constructor(param0: android.graphics.Rect, param1: android.view.View);

            public onTouchEvent(param0: android.view.MotionEvent): boolean;
        }
    }
}

/// <reference path="./android.view.MotionEvent.d.ts" />
declare module android {
    export module view {
        export class VelocityTracker extends javalangObject {
            public clear(): void;

            public computeCurrentVelocity(param0: number): void;

            public getXVelocity(): number;

            public getYVelocity(param0: number): number;
            public getYVelocity(): number;

            public recycle(): void;

            public static obtain(): android.view.VelocityTracker;

            public getXVelocity(param0: number): number;

            public finalize(): void;

            public addMovement(param0: android.view.MotionEvent): void;

            public computeCurrentVelocity(param0: number, param1: number): void;
        }
    }
}

/// <reference path="./android.animation.StateListAnimator.d.ts" />
/// <reference path="./android.content.ClipData.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.util.Property.d.ts" />
/// <reference path="./android.util.SparseArray.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.Display.d.ts" />
/// <reference path="./android.view.DragEvent.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.TouchDelegate.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.view.ViewOutlineProvider.d.ts" />
/// <reference path="./android.view.ViewOverlay.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.ViewPropertyAnimator.d.ts" />
/// <reference path="./android.view.ViewStructure.d.ts" />
/// <reference path="./android.view.ViewTreeObserver.d.ts" />
/// <reference path="./android.view.WindowId.d.ts" />
/// <reference path="./android.view.WindowInsets.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityNodeInfo.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityNodeProvider.d.ts" />
/// <reference path="./android.view.animation.Animation.d.ts" />
/// <reference path="./android.view.inputmethod.EditorInfo.d.ts" />
/// <reference path="./android.view.inputmethod.InputConnection.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module android {
    export module view {
        export class View extends javalangObject implements android.graphics.drawable.Drawable.Callback, android.view.KeyEvent.Callback, android.view.accessibility.AccessibilityEventSource {
            public static ACCESSIBILITY_LIVE_REGION_ASSERTIVE: number;
            public static ACCESSIBILITY_LIVE_REGION_NONE: number;
            public static ACCESSIBILITY_LIVE_REGION_POLITE: number;
            public static ALPHA: android.util.Property;
            public static DRAWING_CACHE_QUALITY_AUTO: number;
            public static DRAWING_CACHE_QUALITY_HIGH: number;
            public static DRAWING_CACHE_QUALITY_LOW: number;
            public static EMPTY_STATE_SET: native.Array<number>;
            public static ENABLED_FOCUSED_SELECTED_STATE_SET: native.Array<number>;
            public static ENABLED_FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
            public static ENABLED_FOCUSED_STATE_SET: native.Array<number>;
            public static ENABLED_FOCUSED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
            public static ENABLED_SELECTED_STATE_SET: native.Array<number>;
            public static ENABLED_SELECTED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
            public static ENABLED_STATE_SET: native.Array<number>;
            public static ENABLED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
            public static FIND_VIEWS_WITH_CONTENT_DESCRIPTION: number;
            public static FIND_VIEWS_WITH_TEXT: number;
            public static FOCUSABLES_ALL: number;
            public static FOCUSABLES_TOUCH_MODE: number;
            public static FOCUSED_SELECTED_STATE_SET: native.Array<number>;
            public static FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
            public static FOCUSED_STATE_SET: native.Array<number>;
            public static FOCUSED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
            public static FOCUS_BACKWARD: number;
            public static FOCUS_DOWN: number;
            public static FOCUS_FORWARD: number;
            public static FOCUS_LEFT: number;
            public static FOCUS_RIGHT: number;
            public static FOCUS_UP: number;
            public static GONE: number;
            public static HAPTIC_FEEDBACK_ENABLED: number;
            public static IMPORTANT_FOR_ACCESSIBILITY_AUTO: number;
            public static IMPORTANT_FOR_ACCESSIBILITY_NO: number;
            public static IMPORTANT_FOR_ACCESSIBILITY_NO_HIDE_DESCENDANTS: number;
            public static IMPORTANT_FOR_ACCESSIBILITY_YES: number;
            public static INVISIBLE: number;
            public static KEEP_SCREEN_ON: number;
            public static LAYER_TYPE_HARDWARE: number;
            public static LAYER_TYPE_NONE: number;
            public static LAYER_TYPE_SOFTWARE: number;
            public static LAYOUT_DIRECTION_INHERIT: number;
            public static LAYOUT_DIRECTION_LOCALE: number;
            public static LAYOUT_DIRECTION_LTR: number;
            public static LAYOUT_DIRECTION_RTL: number;
            public static MEASURED_HEIGHT_STATE_SHIFT: number;
            public static MEASURED_SIZE_MASK: number;
            public static MEASURED_STATE_MASK: number;
            public static MEASURED_STATE_TOO_SMALL: number;
            public static NO_ID: number;
            public static OVER_SCROLL_ALWAYS: number;
            public static OVER_SCROLL_IF_CONTENT_SCROLLS: number;
            public static OVER_SCROLL_NEVER: number;
            public static PRESSED_ENABLED_FOCUSED_SELECTED_STATE_SET: native.Array<number>;
            public static PRESSED_ENABLED_FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
            public static PRESSED_ENABLED_FOCUSED_STATE_SET: native.Array<number>;
            public static PRESSED_ENABLED_FOCUSED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
            public static PRESSED_ENABLED_SELECTED_STATE_SET: native.Array<number>;
            public static PRESSED_ENABLED_SELECTED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
            public static PRESSED_ENABLED_STATE_SET: native.Array<number>;
            public static PRESSED_ENABLED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
            public static PRESSED_FOCUSED_SELECTED_STATE_SET: native.Array<number>;
            public static PRESSED_FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
            public static PRESSED_FOCUSED_STATE_SET: native.Array<number>;
            public static PRESSED_FOCUSED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
            public static PRESSED_SELECTED_STATE_SET: native.Array<number>;
            public static PRESSED_SELECTED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
            public static PRESSED_STATE_SET: native.Array<number>;
            public static PRESSED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
            public static ROTATION: android.util.Property;
            public static ROTATION_X: android.util.Property;
            public static ROTATION_Y: android.util.Property;
            public static SCALE_X: android.util.Property;
            public static SCALE_Y: android.util.Property;
            public static SCREEN_STATE_OFF: number;
            public static SCREEN_STATE_ON: number;
            public static SCROLLBARS_INSIDE_INSET: number;
            public static SCROLLBARS_INSIDE_OVERLAY: number;
            public static SCROLLBARS_OUTSIDE_INSET: number;
            public static SCROLLBARS_OUTSIDE_OVERLAY: number;
            public static SCROLLBAR_POSITION_DEFAULT: number;
            public static SCROLLBAR_POSITION_LEFT: number;
            public static SCROLLBAR_POSITION_RIGHT: number;
            public static SCROLL_AXIS_HORIZONTAL: number;
            public static SCROLL_AXIS_NONE: number;
            public static SCROLL_AXIS_VERTICAL: number;
            public static SCROLL_INDICATOR_BOTTOM: number;
            public static SCROLL_INDICATOR_END: number;
            public static SCROLL_INDICATOR_LEFT: number;
            public static SCROLL_INDICATOR_RIGHT: number;
            public static SCROLL_INDICATOR_START: number;
            public static SCROLL_INDICATOR_TOP: number;
            public static SELECTED_STATE_SET: native.Array<number>;
            public static SELECTED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
            public static SOUND_EFFECTS_ENABLED: number;
            public static STATUS_BAR_HIDDEN: number;
            public static STATUS_BAR_VISIBLE: number;
            public static SYSTEM_UI_FLAG_FULLSCREEN: number;
            public static SYSTEM_UI_FLAG_HIDE_NAVIGATION: number;
            public static SYSTEM_UI_FLAG_IMMERSIVE: number;
            public static SYSTEM_UI_FLAG_IMMERSIVE_STICKY: number;
            public static SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN: number;
            public static SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION: number;
            public static SYSTEM_UI_FLAG_LAYOUT_STABLE: number;
            public static SYSTEM_UI_FLAG_LIGHT_STATUS_BAR: number;
            public static SYSTEM_UI_FLAG_LOW_PROFILE: number;
            public static SYSTEM_UI_FLAG_VISIBLE: number;
            public static SYSTEM_UI_LAYOUT_FLAGS: number;
            public static TEXT_ALIGNMENT_CENTER: number;
            public static TEXT_ALIGNMENT_GRAVITY: number;
            public static TEXT_ALIGNMENT_INHERIT: number;
            public static TEXT_ALIGNMENT_TEXT_END: number;
            public static TEXT_ALIGNMENT_TEXT_START: number;
            public static TEXT_ALIGNMENT_VIEW_END: number;
            public static TEXT_ALIGNMENT_VIEW_START: number;
            public static TEXT_DIRECTION_ANY_RTL: number;
            public static TEXT_DIRECTION_FIRST_STRONG: number;
            public static TEXT_DIRECTION_FIRST_STRONG_LTR: number;
            public static TEXT_DIRECTION_FIRST_STRONG_RTL: number;
            public static TEXT_DIRECTION_INHERIT: number;
            public static TEXT_DIRECTION_LOCALE: number;
            public static TEXT_DIRECTION_LTR: number;
            public static TEXT_DIRECTION_RTL: number;
            public static TRANSLATION_X: android.util.Property;
            public static TRANSLATION_Y: android.util.Property;
            public static TRANSLATION_Z: android.util.Property;
            public static VIEW_LOG_TAG: string;
            public static VISIBLE: number;
            public static WINDOW_FOCUSED_STATE_SET: native.Array<number>;
            public static X: android.util.Property;
            public static Y: android.util.Property;
            public static Z: android.util.Property;

            public getTranslationZ(): number;

            public setLayerType(param0: number, param1: android.graphics.Paint): void;

            public getRight(): number;

            public getDrawingCacheBackgroundColor(): number;

            public setNextFocusRightId(param0: number): void;

            public setSystemUiVisibility(param0: number): void;

            public setLayoutParams(param0: android.view.ViewGroup.LayoutParams): void;

            public getX(): number;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public scrollTo(param0: number, param1: number): void;

            public post(param0: javalangRunnable): boolean;

            public isFocusable(): boolean;

            public postOnAnimationDelayed(param0: javalangRunnable, param1: number): void;

            public setVisibility(param0: number): void;

            public isLongClickable(): boolean;

            public getAccessibilityLiveRegion(): number;

            public setHapticFeedbackEnabled(param0: boolean): void;

            public computeVerticalScrollRange(): number;

            public getNextFocusRightId(): number;

            public isFocusableInTouchMode(): boolean;

            public canScrollVertically(param0: number): boolean;

            public getBackgroundTintList(): android.content.res.ColorStateList;

            public onKeyPreIme(param0: number, param1: android.view.KeyEvent): boolean;

            public refreshDrawableState(): void;

            public setBackgroundResource(param0: number): void;

            public getOverlay(): android.view.ViewOverlay;

            public startDrag(param0: android.content.ClipData, param1: android.view.View.DragShadowBuilder, param2: javalangObject, param3: number): boolean;

            public getAccessibilityClassName(): string;

            public setActivated(param0: boolean): void;

            public getDrawingRect(param0: android.graphics.Rect): void;

            public getApplicationWindowToken(): android.os.IBinder;

            public setBackground(param0: android.graphics.drawable.Drawable): void;

            public setForegroundTintList(param0: android.content.res.ColorStateList): void;

            public dispatchProvideStructure(param0: android.view.ViewStructure): void;

            public setOnScrollChangeListener(param0: android.view.View.OnScrollChangeListener): void;

            public awakenScrollBars(): boolean;

            public playSoundEffect(param0: number): void;

            public getVerticalScrollbarPosition(): number;

            public static resolveSize(param0: number, param1: number): number;

            public setSoundEffectsEnabled(param0: boolean): void;

            public setFadingEdgeLength(param0: number): void;

            public static inflate(param0: android.content.Context, param1: number, param2: android.view.ViewGroup): android.view.View;

            public setImportantForAccessibility(param0: number): void;

            public getScrollY(): number;

            public static generateViewId(): number;

            public onHoverChanged(param0: boolean): void;

            public setScrollBarStyle(param0: number): void;

            public onConfigurationChanged(param0: android.content.res.Configuration): void;

            public requestLayout(): void;

            public getHorizontalFadingEdgeLength(): number;

            public postDelayed(param0: javalangRunnable, param1: number): boolean;

            public getViewTreeObserver(): android.view.ViewTreeObserver;

            public canResolveTextDirection(): boolean;

            public startAnimation(param0: android.view.animation.Animation): void;

            public getScrollIndicators(): number;

            public getOutlineProvider(): android.view.ViewOutlineProvider;

            public setLayoutDirection(param0: number): void;

            public requestFitSystemWindows(): void;

            public onOverScrolled(param0: number, param1: number, param2: boolean, param3: boolean): void;

            public isNestedScrollingEnabled(): boolean;

            public setFocusable(param0: boolean): void;

            public removeCallbacks(param0: javalangRunnable): boolean;

            public isHardwareAccelerated(): boolean;

            public drawableStateChanged(): void;

            public findViewById(param0: number): android.view.View;

            public setMeasuredDimension(param0: number, param1: number): void;

            public dispatchConfigurationChanged(param0: android.content.res.Configuration): void;

            public isSelected(): boolean;

            public getId(): number;

            public getScrollBarFadeDuration(): number;

            public setHorizontalScrollBarEnabled(param0: boolean): void;

            public setForegroundTintMode(param0: android.graphics.PorterDuff.Mode): void;

            public setDrawingCacheBackgroundColor(param0: number): void;

            public isInTouchMode(): boolean;

            public onKeyShortcut(param0: number, param1: android.view.KeyEvent): boolean;

            public getFilterTouchesWhenObscured(): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public dispatchApplyWindowInsets(param0: android.view.WindowInsets): android.view.WindowInsets;

            public addTouchables(param0: javautilArrayList): void;

            public getVerticalFadingEdgeLength(): number;

            public isShown(): boolean;

            public getPaddingEnd(): number;

            public onTrackballEvent(param0: android.view.MotionEvent): boolean;

            public setNextFocusLeftId(param0: number): void;

            public getNextFocusUpId(): number;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public setScaleY(param0: number): void;

            public getTextAlignment(): number;

            public performContextClick(): boolean;

            public onInitializeAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;

            public invalidateOutline(): void;

            public static resolveSizeAndState(param0: number, param1: number, param2: number): number;

            public onWindowFocusChanged(param0: boolean): void;

            public setSaveEnabled(param0: boolean): void;

            public setClickable(param0: boolean): void;

            public onApplyWindowInsets(param0: android.view.WindowInsets): android.view.WindowInsets;

            public getAccessibilityNodeProvider(): android.view.accessibility.AccessibilityNodeProvider;

            public hasFocusable(): boolean;

            public setScrollX(param0: number): void;

            public static combineMeasuredStates(param0: number, param1: number): number;

            public getSystemUiVisibility(): number;

            public onCheckIsTextEditor(): boolean;

            public setClipBounds(param0: android.graphics.Rect): void;

            public isDrawingCacheEnabled(): boolean;

            public getPaddingTop(): number;

            public setY(param0: number): void;

            public stopNestedScroll(): void;

            public invalidate(param0: android.graphics.Rect): void;

            public animate(): android.view.ViewPropertyAnimator;

            public postOnAnimation(param0: javalangRunnable): void;

            public setTranslationZ(param0: number): void;

            public setOnHoverListener(param0: android.view.View.OnHoverListener): void;

            public getRotation(): number;

            public setScrollBarFadeDuration(param0: number): void;

            public getTextDirection(): number;

            public onTouchEvent(param0: android.view.MotionEvent): boolean;

            public measure(param0: number, param1: number): void;

            public setFilterTouchesWhenObscured(param0: boolean): void;

            public addOnAttachStateChangeListener(param0: android.view.View.OnAttachStateChangeListener): void;

            public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;

            public getForegroundGravity(): number;

            public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;

            public computeHorizontalScrollExtent(): number;

            public onHoverEvent(param0: android.view.MotionEvent): boolean;

            public dispatchSetActivated(param0: boolean): void;

            public getHitRect(param0: android.graphics.Rect): void;

            public setScrollBarDefaultDelayBeforeFade(param0: number): void;

            public onScreenStateChanged(param0: number): void;

            public requestFocusFromTouch(): boolean;

            public getTransitionName(): string;

            public setId(param0: number): void;

            public dispatchHoverEvent(param0: android.view.MotionEvent): boolean;

            public overScrollBy(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: boolean): boolean;

            public onPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;

            public getSuggestedMinimumHeight(): number;

            public getClipBounds(param0: android.graphics.Rect): boolean;

            public getPaddingRight(): number;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public forceLayout(): void;

            public setClipToOutline(param0: boolean): void;

            public getContext(): android.content.Context;

            public setVerticalScrollBarEnabled(param0: boolean): void;

            public setEnabled(param0: boolean): void;

            public onDetachedFromWindow(): void;

            public dispatchVisibilityChanged(param0: android.view.View, param1: number): void;

            public getForegroundTintMode(): android.graphics.PorterDuff.Mode;

            public setOnApplyWindowInsetsListener(param0: android.view.View.OnApplyWindowInsetsListener): void;

            public restoreHierarchyState(param0: android.util.SparseArray): void;

            public isVerticalScrollBarEnabled(): boolean;

            public addFocusables(param0: javautilArrayList, param1: number, param2: number): void;

            public setHorizontalFadingEdgeEnabled(param0: boolean): void;

            public getNextFocusLeftId(): number;

            public isScrollbarFadingEnabled(): boolean;

            public onCancelPendingInputEvents(): void;

            public getLocalVisibleRect(param0: android.graphics.Rect): boolean;

            public setBottom(param0: number): void;

            public getLeft(): number;

            public performClick(): boolean;

            public setCameraDistance(param0: number): void;

            public hasFocus(): boolean;

            public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): boolean;

            public computeVerticalScrollExtent(): number;

            public onDragEvent(param0: android.view.DragEvent): boolean;

            public getMeasuredHeightAndState(): number;

            public getRightPaddingOffset(): number;

            public setVerticalScrollbarPosition(param0: number): void;

            public setTag(param0: number, param1: javalangObject): void;

            public getKeyDispatcherState(): android.view.KeyEvent.DispatcherState;

            public setLayerPaint(param0: android.graphics.Paint): void;

            public setVerticalFadingEdgeEnabled(param0: boolean): void;

            public getTopFadingEdgeStrength(): number;

            public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;

            public getTouchables(): javautilArrayList;

            public onWindowVisibilityChanged(param0: number): void;

            public isHorizontalFadingEdgeEnabled(): boolean;

            public getLayerType(): number;

            public findFocus(): android.view.View;

            public postInvalidate(): void;

            public destroyDrawingCache(): void;

            public requestRectangleOnScreen(param0: android.graphics.Rect, param1: boolean): boolean;

            public getElevation(): number;

            public getFitsSystemWindows(): boolean;

            public setLeft(param0: number): void;

            public setForeground(param0: android.graphics.drawable.Drawable): void;

            public onDisplayHint(param0: number): void;

            public onVisibilityChanged(param0: android.view.View, param1: number): void;

            public setOnSystemUiVisibilityChangeListener(param0: android.view.View.OnSystemUiVisibilityChangeListener): void;

            public removeOnLayoutChangeListener(param0: android.view.View.OnLayoutChangeListener): void;

            public constructor(param0: android.content.Context);

            public setAccessibilityDelegate(param0: android.view.View.AccessibilityDelegate): void;

            public getZ(): number;

            public setOnFocusChangeListener(param0: android.view.View.OnFocusChangeListener): void;

            public setContentDescription(param0: string): void;

            public setFocusableInTouchMode(param0: boolean): void;

            public addOnLayoutChangeListener(param0: android.view.View.OnLayoutChangeListener): void;

            public isLayoutDirectionResolved(): boolean;

            public onDrawForeground(param0: android.graphics.Canvas): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public onInitializeAccessibilityNodeInfo(param0: android.view.accessibility.AccessibilityNodeInfo): void;

            public getAccessibilityTraversalAfter(): number;

            public onAnimationEnd(): void;

            public setOnTouchListener(param0: android.view.View.OnTouchListener): void;

            public getContentDescription(): string;

            public offsetTopAndBottom(param0: number): void;

            public canResolveLayoutDirection(): boolean;

            public onFinishTemporaryDetach(): void;

            public postInvalidateOnAnimation(param0: number, param1: number, param2: number, param3: number): void;

            public setDuplicateParentStateEnabled(param0: boolean): void;

            public setPadding(param0: number, param1: number, param2: number, param3: number): void;

            public checkInputConnectionProxy(param0: android.view.View): boolean;

            public draw(param0: android.graphics.Canvas): void;

            public onRestoreInstanceState(param0: android.os.Parcelable): void;

            public dispatchNestedPrePerformAccessibilityAction(param0: number, param1: android.os.Bundle): boolean;

            public getMeasuredState(): number;

            public setScrollContainer(param0: boolean): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public isDirty(): boolean;

            public getCameraDistance(): number;

            public requestFocus(param0: number): boolean;

            public onDrawScrollBars(param0: android.graphics.Canvas): void;

            public scrollBy(param0: number, param1: number): void;

            public getAnimation(): android.view.animation.Animation;

            public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;

            public hasWindowFocus(): boolean;

            public setScrollIndicators(param0: number, param1: number): void;

            public setLabelFor(param0: number): void;

            public getLabelFor(): number;

            public setOutlineProvider(param0: android.view.ViewOutlineProvider): void;

            public buildLayer(): void;

            public setDrawingCacheEnabled(param0: boolean): void;

            public onScrollChanged(param0: number, param1: number, param2: number, param3: number): void;

            public setBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;

            public saveHierarchyState(param0: android.util.SparseArray): void;

            public performAccessibilityAction(param0: number, param1: android.os.Bundle): boolean;

            public getFocusables(param0: number): javautilArrayList;

            public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;

            public setSaveFromParentEnabled(param0: boolean): void;

            public setAccessibilityTraversalBefore(param0: number): void;

            public setScrollbarFadingEnabled(param0: boolean): void;

            public getScrollBarStyle(): number;

            public getRootView(): android.view.View;

            public jumpDrawablesToCurrentState(): void;

            public computeHorizontalScrollOffset(): number;

            public getBackgroundTintMode(): android.graphics.PorterDuff.Mode;

            public computeScroll(): void;

            public dispatchSaveInstanceState(param0: android.util.SparseArray): void;

            public onFilterTouchEventForSecurity(param0: android.view.MotionEvent): boolean;

            public getLocationOnScreen(param0: native.Array<number>): void;

            public setWillNotDraw(param0: boolean): void;

            public setScrollY(param0: number): void;

            public invalidate(param0: number, param1: number, param2: number, param3: number): void;

            public isFocused(): boolean;

            public setTouchDelegate(param0: android.view.TouchDelegate): void;

            public drawableHotspotChanged(param0: number, param1: number): void;

            public buildDrawingCache(param0: boolean): void;

            public announceForAccessibility(param0: string): void;

            public getTop(): number;

            public getScaleX(): number;

            public setZ(param0: number): void;

            public postInvalidateDelayed(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public getScrollX(): number;

            public getAlpha(): number;

            public getWidth(): number;

            public getOnFocusChangeListener(): android.view.View.OnFocusChangeListener;

            public onMeasure(param0: number, param1: number): void;

            public requestFocus(): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public getDrawingCache(param0: boolean): android.graphics.Bitmap;

            public setTranslationX(param0: number): void;

            public getWindowVisibleDisplayFrame(param0: android.graphics.Rect): void;

            public setOnCreateContextMenuListener(param0: android.view.View.OnCreateContextMenuListener): void;

            public setTop(param0: number): void;

            public getPivotX(): number;

            public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;

            public setFitsSystemWindows(param0: boolean): void;

            public isHapticFeedbackEnabled(): boolean;

            public getWindowVisibility(): number;

            public sendAccessibilityEvent(param0: number): void;

            public findViewsWithText(param0: javautilArrayList, param1: string, param2: number): void;

            public getHeight(): number;

            public getMinimumHeight(): number;

            public onSetAlpha(param0: number): boolean;

            public getAccessibilityTraversalBefore(): number;

            public setMinimumHeight(param0: number): void;

            public setNextFocusUpId(param0: number): void;

            public setPressed(param0: boolean): void;

            public setRotationY(param0: number): void;

            public offsetLeftAndRight(param0: number): void;

            public getRightFadingEdgeStrength(): number;

            public getLayoutDirection(): number;

            public setMinimumWidth(param0: number): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public getStateListAnimator(): android.animation.StateListAnimator;

            public setOverScrollMode(param0: number): void;

            public getTouchDelegate(): android.view.TouchDelegate;

            public getBottom(): number;

            public hasTransientState(): boolean;

            public getY(): number;

            public requestRectangleOnScreen(param0: android.graphics.Rect): boolean;

            public getVerticalScrollbarWidth(): number;

            public willNotDraw(): boolean;

            public getWindowToken(): android.os.IBinder;

            public clearAnimation(): void;

            public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;

            public onCreateContextMenu(param0: android.view.ContextMenu): void;

            public isVerticalFadingEdgeEnabled(): boolean;

            public bringToFront(): void;

            public setNestedScrollingEnabled(param0: boolean): void;

            public dispatchDrawableHotspotChanged(param0: number, param1: number): void;

            public setAccessibilityLiveRegion(param0: number): void;

            public getDisplay(): android.view.Display;

            public isAttachedToWindow(): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public layout(param0: number, param1: number, param2: number, param3: number): void;

            public getWindowId(): android.view.WindowId;

            public isEnabled(): boolean;

            public isLaidOut(): boolean;

            public setBackgroundColor(param0: number): void;

            public getSolidColor(): number;

            public performHapticFeedback(param0: number): boolean;

            public setOnLongClickListener(param0: android.view.View.OnLongClickListener): void;

            public performLongClick(): boolean;

            public getRootWindowInsets(): android.view.WindowInsets;

            public dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;

            public setOnGenericMotionListener(param0: android.view.View.OnGenericMotionListener): void;

            public setKeepScreenOn(param0: boolean): void;

            public onFinishInflate(): void;

            public isSaveFromParentEnabled(): boolean;

            public getRotationY(): number;

            public getDrawingTime(): number;

            public onFocusChanged(param0: boolean, param1: number, param2: android.graphics.Rect): void;

            public static getDefaultSize(param0: number, param1: number): number;

            public getScrollBarDefaultDelayBeforeFade(): number;

            public computeHorizontalScrollRange(): number;

            public dispatchWindowSystemUiVisiblityChanged(param0: number): void;

            public isDuplicateParentStateEnabled(): boolean;

            public performHapticFeedback(param0: number, param1: number): boolean;

            public setHovered(param0: boolean): void;

            public getTag(param0: number): javalangObject;

            public isImportantForAccessibility(): boolean;

            public dispatchNestedPreScroll(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>): boolean;

            public verifyDrawable(param0: android.graphics.drawable.Drawable): boolean;

            public setTransitionName(param0: string): void;

            public isSoundEffectsEnabled(): boolean;

            public setSelected(param0: boolean): void;

            public getSuggestedMinimumWidth(): number;

            public dispatchKeyEventPreIme(param0: android.view.KeyEvent): boolean;

            public setContextClickable(param0: boolean): void;

            public getLeftPaddingOffset(): number;

            public setAnimation(param0: android.view.animation.Animation): void;

            public setPivotY(param0: number): void;

            public isActivated(): boolean;

            public getVisibility(): number;

            public dispatchDragEvent(param0: android.view.DragEvent): boolean;

            public isPressed(): boolean;

            public getMeasuredHeight(): number;

            public onCreateDrawableState(param0: number): native.Array<number>;

            public setDrawingCacheQuality(param0: number): void;

            public onAnimationStart(): void;

            public requestUnbufferedDispatch(param0: android.view.MotionEvent): void;

            public getTranslationY(): number;

            public isSaveEnabled(): boolean;

            public isPaddingOffsetRequired(): boolean;

            public getBottomPaddingOffset(): number;

            public cancelLongPress(): void;

            public getWindowAttachCount(): number;

            public setOnKeyListener(param0: android.view.View.OnKeyListener): void;

            public onProvideVirtualStructure(param0: android.view.ViewStructure): void;

            public isOpaque(): boolean;

            public getScaleY(): number;

            public setPaddingRelative(param0: number, param1: number, param2: number, param3: number): void;

            public isTextAlignmentResolved(): boolean;

            public awakenScrollBars(param0: number): boolean;

            public dispatchDisplayHint(param0: number): void;

            public getClipToOutline(): boolean;

            public toString(): string;

            public requestApplyInsets(): void;

            public startActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;

            public onWindowSystemUiVisibilityChanged(param0: number): void;

            public getBackground(): android.graphics.drawable.Drawable;

            public onCreateInputConnection(param0: android.view.inputmethod.EditorInfo): android.view.inputmethod.InputConnection;

            public getHorizontalScrollbarHeight(): number;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public getDrawingCacheQuality(): number;

            public postInvalidateDelayed(param0: number): void;

            public getBottomFadingEdgeStrength(): number;

            public setRotationX(param0: number): void;

            public isHovered(): boolean;

            public setRight(param0: number): void;

            public getForeground(): android.graphics.drawable.Drawable;

            public showContextMenu(): boolean;

            public hasOnClickListeners(): boolean;

            public isInEditMode(): boolean;

            public getRotationX(): number;

            public getPaddingStart(): number;

            public canResolveTextAlignment(): boolean;

            public getParent(): android.view.ViewParent;

            public setStateListAnimator(param0: android.animation.StateListAnimator): void;

            public startNestedScroll(param0: number): boolean;

            public setScrollIndicators(param0: number): void;

            public onProvideStructure(param0: android.view.ViewStructure): void;

            public setAccessibilityTraversalAfter(param0: number): void;

            public dispatchDraw(param0: android.graphics.Canvas): void;

            public getLeftFadingEdgeStrength(): number;

            public isScrollContainer(): boolean;

            public setTextAlignment(param0: number): void;

            public isClickable(): boolean;

            public dispatchWindowFocusChanged(param0: boolean): void;

            public getKeepScreenOn(): boolean;

            public setScrollBarSize(param0: number): void;

            public getMatrix(): android.graphics.Matrix;

            public static mergeDrawableStates(param0: native.Array<number>, param1: native.Array<number>): native.Array<number>;

            public setTranslationY(param0: number): void;

            public focusSearch(param0: number): android.view.View;

            public getImportantForAccessibility(): number;

            public getMeasuredWidth(): number;

            public setTextDirection(param0: number): void;

            public getResources(): android.content.res.Resources;

            public isLayoutRequested(): boolean;

            public requestFocus(param0: number, param1: android.graphics.Rect): boolean;

            public hasNestedScrollingParent(): boolean;

            public getHandler(): android.os.Handler;

            public addChildrenForAccessibility(param0: javautilArrayList): void;

            public getMinimumWidth(): number;

            public dispatchGenericFocusedEvent(param0: android.view.MotionEvent): boolean;

            public removeOnAttachStateChangeListener(param0: android.view.View.OnAttachStateChangeListener): void;

            public dispatchSetSelected(param0: boolean): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public getDrawingCache(): android.graphics.Bitmap;

            public setOnDragListener(param0: android.view.View.OnDragListener): void;

            public setHasTransientState(param0: boolean): void;

            public setOnContextClickListener(param0: android.view.View.OnContextClickListener): void;

            public setAlpha(param0: number): void;

            public fitSystemWindows(param0: android.graphics.Rect): boolean;

            public getClipBounds(): android.graphics.Rect;

            public addFocusables(param0: javautilArrayList, param1: number): void;

            public getOverScrollMode(): number;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getMeasuredWidthAndState(): number;

            public onRtlPropertiesChanged(param0: number): void;

            public getTopPaddingOffset(): number;

            public isContextClickable(): boolean;

            public isHorizontalScrollBarEnabled(): boolean;

            public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;

            public dispatchNestedPreFling(param0: number, param1: number): boolean;

            public setNextFocusForwardId(param0: number): void;

            public getGlobalVisibleRect(param0: android.graphics.Rect, param1: android.graphics.Point): boolean;

            public createAccessibilityNodeInfo(): android.view.accessibility.AccessibilityNodeInfo;

            public getDrawableState(): native.Array<number>;

            public willNotCacheDrawing(): boolean;

            public getLayoutParams(): android.view.ViewGroup.LayoutParams;

            public getWindowSystemUiVisibility(): number;

            public setWillNotCacheDrawing(param0: boolean): void;

            public setOnClickListener(param0: android.view.View.OnClickListener): void;

            public dispatchSetPressed(param0: boolean): void;

            public isAccessibilityFocused(): boolean;

            public isInLayout(): boolean;

            public onStartTemporaryDetach(): void;

            public getFocusedRect(param0: android.graphics.Rect): void;

            public getNextFocusForwardId(): number;

            public setRotation(param0: number): void;

            public getContextMenuInfo(): android.view.ContextMenu.ContextMenuInfo;

            public awakenScrollBars(param0: number, param1: boolean): boolean;

            public getScrollBarSize(): number;

            public cancelPendingInputEvents(): void;

            public getPivotY(): number;

            public setElevation(param0: number): void;

            public setTag(param0: javalangObject): void;

            public getTranslationX(): number;

            public setForegroundGravity(param0: number): void;

            public isPaddingRelative(): boolean;

            public getTag(): javalangObject;

            public setLongClickable(param0: boolean): void;

            public computeVerticalScrollOffset(): number;

            public getNextFocusDownId(): number;

            public getGlobalVisibleRect(param0: android.graphics.Rect): boolean;

            public setX(param0: number): void;

            public onDraw(param0: android.graphics.Canvas): void;

            public startActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;

            public onSaveInstanceState(): android.os.Parcelable;

            public callOnClick(): boolean;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public canScrollHorizontally(param0: number): boolean;

            public hasOverlappingRendering(): boolean;

            public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;

            public setNextFocusDownId(param0: number): void;

            public computeSystemWindowInsets(param0: android.view.WindowInsets, param1: android.graphics.Rect): android.view.WindowInsets;

            public buildDrawingCache(): void;

            public getPaddingBottom(): number;

            public setScaleX(param0: number): void;

            public invalidate(): void;

            public getPaddingLeft(): number;

            public dispatchWindowVisibilityChanged(param0: number): void;

            public clearFocus(): void;

            public getForegroundTintList(): android.content.res.ColorStateList;

            public getBaseline(): number;

            public setPivotX(param0: number): void;

            public dispatchGenericPointerEvent(param0: android.view.MotionEvent): boolean;

            public postInvalidate(param0: number, param1: number, param2: number, param3: number): void;

            public dispatchRestoreInstanceState(param0: android.util.SparseArray): void;

            public dispatchSystemUiVisibilityChanged(param0: number): void;

            public isTextDirectionResolved(): boolean;

            public setBackgroundTintList(param0: android.content.res.ColorStateList): void;

            public postInvalidateOnAnimation(): void;

            public onAttachedToWindow(): void;

            public dispatchUnhandledMove(param0: android.view.View, param1: number): boolean;

            public getLocationInWindow(param0: native.Array<number>): void;

            public findViewWithTag(param0: javalangObject): android.view.View;
        }
        export module View {
            export class androidviewViewAccessibilityDelegate extends javalangObject {
                public sendAccessibilityEvent(param0: android.view.View, param1: number): void;

                public getAccessibilityNodeProvider(param0: android.view.View): android.view.accessibility.AccessibilityNodeProvider;

                public dispatchPopulateAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

                public onInitializeAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;

                public onRequestSendAccessibilityEvent(param0: android.view.ViewGroup, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): boolean;

                public performAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

                public onInitializeAccessibilityNodeInfo(param0: android.view.View, param1: android.view.accessibility.AccessibilityNodeInfo): void;

                public constructor();

                public sendAccessibilityEventUnchecked(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;

                public onPopulateAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
            }
            export type AccessibilityDelegate = androidviewViewAccessibilityDelegate
            export class BaseSavedState extends android.view.AbsSavedState {
                public static CREATOR: android.os.Parcelable.Creator;

                public constructor(param0: android.os.Parcel);
                public constructor(param0: android.os.Parcelable);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;
            }
            export class DragShadowBuilder extends javalangObject {
                public constructor(param0: android.view.View);

                public onProvideShadowMetrics(param0: android.graphics.Point, param1: android.graphics.Point): void;

                public onDrawShadow(param0: android.graphics.Canvas): void;

                public getView(): android.view.View;

                public constructor();
            }
            export class MeasureSpec extends javalangObject {
                public static AT_MOST: number;
                public static EXACTLY: number;
                public static UNSPECIFIED: number;

                public static getSize(param0: number): number;

                public static toString(param0: number): string;

                public static makeMeasureSpec(param0: number, param1: number): number;

                public toString(): string;

                public constructor();

                public static getMode(param0: number): number;
            }
            export class OnApplyWindowInsetsListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.View$OnApplyWindowInsetsListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onApplyWindowInsets(param0: android.view.View, param1: android.view.WindowInsets): android.view.WindowInsets;
                });

                public onApplyWindowInsets(param0: android.view.View, param1: android.view.WindowInsets): android.view.WindowInsets;
            }
            export class OnAttachStateChangeListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.View$OnAttachStateChangeListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onViewAttachedToWindow(param0: android.view.View): void;
                    onViewDetachedFromWindow(param0: android.view.View): void;
                });

                public onViewDetachedFromWindow(param0: android.view.View): void;

                public onViewAttachedToWindow(param0: android.view.View): void;
            }
            export class OnClickListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.View$OnClickListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onClick(param0: android.view.View): void;
                });

                public onClick(param0: android.view.View): void;
            }
            export class OnContextClickListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.View$OnContextClickListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onContextClick(param0: android.view.View): boolean;
                });

                public onContextClick(param0: android.view.View): boolean;
            }
            export class OnCreateContextMenuListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.View$OnCreateContextMenuListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
                });

                public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
            }
            export class OnDragListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.View$OnDragListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onDrag(param0: android.view.View, param1: android.view.DragEvent): boolean;
                });

                public onDrag(param0: android.view.View, param1: android.view.DragEvent): boolean;
            }
            export class OnFocusChangeListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.View$OnFocusChangeListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onFocusChange(param0: android.view.View, param1: boolean): void;
                });

                public onFocusChange(param0: android.view.View, param1: boolean): void;
            }
            export class OnGenericMotionListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.View$OnGenericMotionListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onGenericMotion(param0: android.view.View, param1: android.view.MotionEvent): boolean;
                });

                public onGenericMotion(param0: android.view.View, param1: android.view.MotionEvent): boolean;
            }
            export class OnHoverListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.View$OnHoverListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onHover(param0: android.view.View, param1: android.view.MotionEvent): boolean;
                });

                public onHover(param0: android.view.View, param1: android.view.MotionEvent): boolean;
            }
            export class OnKeyListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.View$OnKeyListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onKey(param0: android.view.View, param1: number, param2: android.view.KeyEvent): boolean;
                });

                public onKey(param0: android.view.View, param1: number, param2: android.view.KeyEvent): boolean;
            }
            export class OnLayoutChangeListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.View$OnLayoutChangeListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onLayoutChange(param0: android.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
                });

                public onLayoutChange(param0: android.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
            }
            export class OnLongClickListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.View$OnLongClickListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onLongClick(param0: android.view.View): boolean;
                });

                public onLongClick(param0: android.view.View): boolean;
            }
            export class OnScrollChangeListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.View$OnScrollChangeListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onScrollChange(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
                });

                public onScrollChange(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
            }
            export class OnSystemUiVisibilityChangeListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.View$OnSystemUiVisibilityChangeListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onSystemUiVisibilityChange(param0: number): void;
                });

                public onSystemUiVisibilityChange(param0: number): void;
            }
            export class OnTouchListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.View$OnTouchListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean;
                });

                public onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean;
            }
        }
    }
}

/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.view.View.d.ts" />
declare module android {
    export module view {
        export class ViewAnimationUtils extends javalangObject {
            public static createCircularReveal(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): android.animation.Animator;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
declare module android {
    export module view {
        export class ViewConfiguration extends javalangObject {
            public static getScrollBarSize(): number;

            public getScaledWindowTouchSlop(): number;

            public static getScrollDefaultDelay(): number;

            public static getMaximumDrawingCacheSize(): number;

            public getScaledMinimumFlingVelocity(): number;

            public getScaledOverflingDistance(): number;

            public getScaledPagingTouchSlop(): number;

            public static getKeyRepeatTimeout(): number;

            public static getDoubleTapTimeout(): number;

            public getScaledOverscrollDistance(): number;

            public static getTouchSlop(): number;

            public static getDefaultActionModeHideDuration(): number;

            public static getMinimumFlingVelocity(): number;

            public getScaledFadingEdgeLength(): number;

            public getScaledTouchSlop(): number;

            public static getKeyRepeatDelay(): number;

            public static getJumpTapTimeout(): number;

            public static getPressedStateDuration(): number;

            public getScaledMaximumDrawingCacheSize(): number;

            public hasPermanentMenuKey(): boolean;

            public static getScrollFriction(): number;

            public static getGlobalActionKeyTimeout(): number;

            public getScaledMaximumFlingVelocity(): number;

            public getScaledEdgeSlop(): number;

            public constructor();

            public getScaledDoubleTapSlop(): number;

            public static getTapTimeout(): number;

            public static getWindowTouchSlop(): number;

            public static get(param0: android.content.Context): android.view.ViewConfiguration;

            public getScaledScrollBarSize(): number;

            public static getFadingEdgeLength(): number;

            public static getMaximumFlingVelocity(): number;

            public static getScrollBarFadeDuration(): number;

            public static getZoomControlsTimeout(): number;

            public static getEdgeSlop(): number;

            public static getLongPressTimeout(): number;
        }
    }
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module view {
        export class ViewDebug extends javalangObject {
            public static TRACE_HIERARCHY: boolean;
            public static TRACE_RECYCLER: boolean;

            public static stopRecyclerTracing(): void;

            public static trace(param0: android.view.View, param1: android.view.ViewDebug.RecyclerTraceType, param2: native.Array<number>): void;
            public static trace(param0: android.view.View, param1: android.view.ViewDebug.HierarchyTraceType): void;

            public static dumpCapturedView(param0: string, param1: javalangObject): void;

            public static startRecyclerTracing(param0: string, param1: android.view.View): void;

            public static startHierarchyTracing(param0: string, param1: android.view.View): void;

            public constructor();

            public static stopHierarchyTracing(): void;
        }
        export module ViewDebug {
            export class CapturedViewProperty extends javalangObject implements javalangannotationAnnotation {
                /**
                 * Constructs a new instance of the android.view.ViewDebug$CapturedViewProperty interface with the provided implementation.
                 */
                public constructor(implementation: {
                    retrieveReturn(): boolean;
                    annotationType(): javalangClass;
                    equals(param0: javalangObject): boolean;
                    hashCode(): number;
                    toString(): string;
                });

                public equals(param0: javalangObject): boolean;

                public hashCode(): number;

                public retrieveReturn(): boolean;

                public annotationType(): javalangClass;

                public toString(): string;
            }
            export class ExportedProperty extends javalangObject implements javalangannotationAnnotation {
                /**
                 * Constructs a new instance of the android.view.ViewDebug$ExportedProperty interface with the provided implementation.
                 */
                public constructor(implementation: {
                    resolveId(): boolean;
                    mapping(): native.Array<android.view.ViewDebug.IntToString>;
                    indexMapping(): native.Array<android.view.ViewDebug.IntToString>;
                    flagMapping(): native.Array<android.view.ViewDebug.FlagToString>;
                    deepExport(): boolean;
                    prefix(): string;
                    category(): string;
                    formatToHexString(): boolean;
                    hasAdjacentMapping(): boolean;
                    annotationType(): javalangClass;
                    equals(param0: javalangObject): boolean;
                    hashCode(): number;
                    toString(): string;
                });

                public hasAdjacentMapping(): boolean;

                public resolveId(): boolean;

                public indexMapping(): native.Array<android.view.ViewDebug.IntToString>;

                public category(): string;

                public flagMapping(): native.Array<android.view.ViewDebug.FlagToString>;

                public prefix(): string;

                public annotationType(): javalangClass;

                public toString(): string;

                public mapping(): native.Array<android.view.ViewDebug.IntToString>;

                public deepExport(): boolean;

                public equals(param0: javalangObject): boolean;

                public hashCode(): number;

                public formatToHexString(): boolean;
            }
            export class FlagToString extends javalangObject implements javalangannotationAnnotation {
                /**
                 * Constructs a new instance of the android.view.ViewDebug$FlagToString interface with the provided implementation.
                 */
                public constructor(implementation: {
                    mask(): number;
                    equals(): number;
                    name(): string;
                    outputIf(): boolean;
                    annotationType(): javalangClass;
                    equals(param0: javalangObject): boolean;
                    hashCode(): number;
                    toString(): string;
                });

                public outputIf(): boolean;

                public name(): string;

                public equals(): number;
                public equals(param0: javalangObject): boolean;

                public mask(): number;

                public hashCode(): number;

                public annotationType(): javalangClass;

                public toString(): string;
            }
            export class HierarchyTraceType extends javalangEnum {
                public static BUILD_CACHE: android.view.ViewDebug.HierarchyTraceType;
                public static DRAW: android.view.ViewDebug.HierarchyTraceType;
                public static INVALIDATE: android.view.ViewDebug.HierarchyTraceType;
                public static INVALIDATE_CHILD: android.view.ViewDebug.HierarchyTraceType;
                public static INVALIDATE_CHILD_IN_PARENT: android.view.ViewDebug.HierarchyTraceType;
                public static ON_LAYOUT: android.view.ViewDebug.HierarchyTraceType;
                public static ON_MEASURE: android.view.ViewDebug.HierarchyTraceType;
                public static REQUEST_LAYOUT: android.view.ViewDebug.HierarchyTraceType;

                public static valueOf(param0: string): android.view.ViewDebug.HierarchyTraceType;

                public static values(): native.Array<android.view.ViewDebug.HierarchyTraceType>;

                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
            export class IntToString extends javalangObject implements javalangannotationAnnotation {
                /**
                 * Constructs a new instance of the android.view.ViewDebug$IntToString interface with the provided implementation.
                 */
                public constructor(implementation: {
                    from(): number;
                    to(): string;
                    annotationType(): javalangClass;
                    equals(param0: javalangObject): boolean;
                    hashCode(): number;
                    toString(): string;
                });

                public equals(param0: javalangObject): boolean;

                public hashCode(): number;

                public to(): string;

                public from(): number;

                public annotationType(): javalangClass;

                public toString(): string;
            }
            export class RecyclerTraceType extends javalangEnum {
                public static BIND_VIEW: android.view.ViewDebug.RecyclerTraceType;
                public static MOVE_FROM_ACTIVE_TO_SCRAP_HEAP: android.view.ViewDebug.RecyclerTraceType;
                public static MOVE_TO_SCRAP_HEAP: android.view.ViewDebug.RecyclerTraceType;
                public static NEW_VIEW: android.view.ViewDebug.RecyclerTraceType;
                public static RECYCLE_FROM_ACTIVE_HEAP: android.view.ViewDebug.RecyclerTraceType;
                public static RECYCLE_FROM_SCRAP_HEAP: android.view.ViewDebug.RecyclerTraceType;

                public static values(): native.Array<android.view.ViewDebug.RecyclerTraceType>;

                public static valueOf(param0: string): android.view.ViewDebug.RecyclerTraceType;
                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
        }
    }
}

/// <reference path="./android.animation.LayoutTransition.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.Region.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.util.SparseArray.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.DragEvent.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroupOverlay.d.ts" />
/// <reference path="./android.view.ViewOverlay.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.ViewStructure.d.ts" />
/// <reference path="./android.view.WindowInsets.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.view.animation.LayoutAnimationController.d.ts" />
/// <reference path="./android.view.animation.Transformation.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module android {
    export module view {
        export abstract class ViewGroup extends android.view.View implements android.view.ViewParent, android.view.ViewManager {
            public static CLIP_TO_PADDING_MASK: number;
            public static FOCUS_AFTER_DESCENDANTS: number;
            public static FOCUS_BEFORE_DESCENDANTS: number;
            public static FOCUS_BLOCK_DESCENDANTS: number;
            public static LAYOUT_MODE_CLIP_BOUNDS: number;
            public static LAYOUT_MODE_OPTICAL_BOUNDS: number;
            public static PERSISTENT_ALL_CACHES: number;
            public static PERSISTENT_ANIMATION_CACHE: number;
            public static PERSISTENT_NO_CACHE: number;
            public static PERSISTENT_SCROLLING_CACHE: number;

            public getClipChildren(): boolean;

            public onStopNestedScroll(param0: android.view.View): void;

            public dispatchThawSelfOnly(param0: android.util.SparseArray): void;

            public requestFocus(): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public getFocusedChild(): android.view.View;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public setLayoutMode(param0: number): void;

            public startViewTransition(param0: android.view.View): void;

            public sendAccessibilityEvent(param0: number): void;

            public removeViewsInLayout(param0: number, param1: number): void;

            public findViewsWithText(param0: javautilArrayList, param1: string, param2: number): void;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public getLayoutDirection(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public getOverlay(): android.view.ViewOverlay;

            public attachViewToParent(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;

            public getAccessibilityClassName(): string;

            public isChildrenDrawingOrderEnabled(): boolean;

            public hasTransientState(): boolean;

            public setAddStatesFromChildren(param0: boolean): void;

            public getOverlay(): android.view.ViewGroupOverlay;

            public dispatchProvideStructure(param0: android.view.ViewStructure): void;

            public removeViews(param0: number, param1: number): void;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public removeAllViews(): void;

            public scheduleLayoutAnimation(): void;

            public getPersistentDrawingCache(): number;

            public debug(param0: number): void;

            public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;

            public requestLayout(): void;

            public canResolveTextDirection(): boolean;

            public dispatchDrawableHotspotChanged(param0: number, param1: number): void;

            public layout(param0: number, param1: number, param2: number, param3: number): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public offsetRectIntoDescendantCoords(param0: android.view.View, param1: android.graphics.Rect): void;

            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;

            public requestFitSystemWindows(): void;

            public offsetDescendantRectToMyCoords(param0: android.view.View, param1: android.graphics.Rect): void;

            public drawableStateChanged(): void;

            public dispatchConfigurationChanged(param0: android.content.res.Configuration): void;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public setLayoutAnimationListener(param0: android.view.animation.Animation.AnimationListener): void;

            public canAnimate(): boolean;

            public setLayoutTransition(param0: android.animation.LayoutTransition): void;

            public onViewRemoved(param0: android.view.View): void;

            public dispatchWindowSystemUiVisiblityChanged(param0: number): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public dispatchApplyWindowInsets(param0: android.view.WindowInsets): android.view.WindowInsets;

            public onRequestFocusInDescendants(param0: number, param1: android.graphics.Rect): boolean;

            public setLayoutAnimation(param0: android.view.animation.LayoutAnimationController): void;

            public detachViewFromParent(param0: number): void;

            public addTouchables(param0: javautilArrayList): void;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public dispatchKeyEventPreIme(param0: android.view.KeyEvent): boolean;

            public getTextAlignment(): number;

            public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public setTouchscreenBlocksFocus(param0: boolean): void;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public dispatchDragEvent(param0: android.view.DragEvent): boolean;

            public hasFocusable(): boolean;

            public getLayoutTransition(): android.animation.LayoutTransition;

            public removeAllViewsInLayout(): void;

            public onCreateDrawableState(param0: number): native.Array<number>;

            public addStatesFromChildren(): boolean;

            public removeViewAt(param0: number): void;

            public setPersistentDrawingCache(param0: number): void;

            public getLayoutAnimationListener(): android.view.animation.Animation.AnimationListener;

            public setOnHierarchyChangeListener(param0: android.view.ViewGroup.OnHierarchyChangeListener): void;

            public getChildAt(param0: number): android.view.View;

            public isTextAlignmentResolved(): boolean;

            public dispatchDisplayHint(param0: number): void;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public getTextDirection(): number;

            public onRequestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public setTransitionGroup(param0: boolean): void;

            public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;

            public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;

            public getLayoutMode(): number;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public dispatchSetActivated(param0: boolean): void;

            public addView(param0: android.view.View, param1: number): void;

            public getNestedScrollAxes(): number;

            public addViewInLayout(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): boolean;

            public dispatchHoverEvent(param0: android.view.MotionEvent): boolean;

            public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public setChildrenDrawingCacheEnabled(param0: boolean): void;

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public isAlwaysDrawnWithCacheEnabled(): boolean;

            public setAnimationCacheEnabled(param0: boolean): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public getClipToPadding(): boolean;

            public bringChildToFront(param0: android.view.View): void;

            public isTransitionGroup(): boolean;

            public onDetachedFromWindow(): void;

            public dispatchVisibilityChanged(param0: android.view.View, param1: number): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public canResolveTextAlignment(): boolean;

            public drawChild(param0: android.graphics.Canvas, param1: android.view.View, param2: number): boolean;

            public getParent(): android.view.ViewParent;

            public addFocusables(param0: javautilArrayList, param1: number, param2: number): void;

            public attachLayoutAnimationParameters(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams, param2: number, param3: number): void;

            public dispatchDraw(param0: android.graphics.Canvas): void;

            public dispatchWindowFocusChanged(param0: boolean): void;

            public hasFocus(): boolean;

            public focusSearch(param0: number): android.view.View;

            public recomputeViewAttributes(param0: android.view.View): void;

            public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;

            public isLayoutRequested(): boolean;

            public cleanupLayoutState(param0: android.view.View): void;

            public requestFocus(param0: number, param1: android.graphics.Rect): boolean;

            public detachViewFromParent(param0: android.view.View): void;

            public setClipChildren(param0: boolean): void;

            public addViewInLayout(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams, param3: boolean): boolean;

            public getChildStaticTransformation(param0: android.view.View, param1: android.view.animation.Transformation): boolean;

            public addChildrenForAccessibility(param0: javautilArrayList): void;

            public dispatchGenericFocusedEvent(param0: android.view.MotionEvent): boolean;

            public measureChildren(param0: number, param1: number): void;

            public clearDisappearingChildren(): void;

            public startLayoutAnimation(): void;

            public getDescendantFocusability(): number;

            public dispatchSetSelected(param0: boolean): void;

            public getChildDrawingOrder(param0: number, param1: number): number;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public findFocus(): android.view.View;

            public getTouchscreenBlocksFocus(): boolean;

            public addView(param0: android.view.View): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public isMotionEventSplittingEnabled(): boolean;

            public addFocusables(param0: javautilArrayList, param1: number): void;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public constructor(param0: android.content.Context);

            public dispatchFreezeSelfOnly(param0: android.util.SparseArray): void;

            public setStaticTransformationsEnabled(param0: boolean): void;

            public onViewAdded(param0: android.view.View): void;

            public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;

            public measureChildWithMargins(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public isLayoutDirectionResolved(): boolean;

            public focusableViewAvailable(param0: android.view.View): void;

            public static getChildMeasureSpec(param0: number, param1: number, param2: number): number;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public shouldDelayChildPressedState(): boolean;

            public dispatchSetPressed(param0: boolean): void;

            public isChildrenDrawnWithCacheEnabled(): boolean;

            public canResolveLayoutDirection(): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public detachAllViewsFromParent(): void;

            public onInterceptHoverEvent(param0: android.view.MotionEvent): boolean;

            public getParentForAccessibility(): android.view.ViewParent;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public requestFocus(param0: number): boolean;

            public setClipToPadding(param0: boolean): void;

            public endViewTransition(param0: android.view.View): void;

            public removeViewInLayout(param0: android.view.View): void;

            public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;

            public setChildrenDrawingOrderEnabled(param0: boolean): void;

            public isAnimationCacheEnabled(): boolean;

            public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public detachViewsFromParent(param0: number, param1: number): void;

            public setMotionEventSplittingEnabled(param0: boolean): void;

            public setChildrenDrawnWithCacheEnabled(param0: boolean): void;

            public getLayoutAnimation(): android.view.animation.LayoutAnimationController;

            public getChildCount(): number;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public gatherTransparentRegion(param0: android.graphics.Region): boolean;

            public dispatchWindowVisibilityChanged(param0: number): void;

            public jumpDrawablesToCurrentState(): void;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public removeDetachedView(param0: android.view.View, param1: boolean): void;

            public clearFocus(): void;

            public dispatchGenericPointerEvent(param0: android.view.MotionEvent): boolean;

            public dispatchSaveInstanceState(param0: android.util.SparseArray): void;

            public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public dispatchRestoreInstanceState(param0: android.util.SparseArray): void;

            public indexOfChild(param0: android.view.View): number;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public dispatchSystemUiVisibilityChanged(param0: number): void;

            public isTextDirectionResolved(): boolean;

            public setAlwaysDrawnWithCacheEnabled(param0: boolean): void;

            public measureChild(param0: android.view.View, param1: number, param2: number): void;

            public onAttachedToWindow(): void;

            public dispatchUnhandledMove(param0: android.view.View, param1: number): boolean;

            public setDescendantFocusability(param0: number): void;
        }
        export module ViewGroup {
            export class LayoutParams extends javalangObject {
                public static FILL_PARENT: number;
                public static MATCH_PARENT: number;
                public static WRAP_CONTENT: number;
                public height: number;
                public layoutAnimationParameters: android.view.animation.LayoutAnimationController.AnimationParameters;
                public width: number;

                public constructor(param0: number, param1: number);
                public constructor(param0: android.view.ViewGroup.LayoutParams);

                public resolveLayoutDirection(param0: number): void;

                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

                public setBaseAttributes(param0: android.content.res.TypedArray, param1: number, param2: number): void;
            }
            export class MarginLayoutParams extends android.view.ViewGroup.LayoutParams {
                public bottomMargin: number;
                public leftMargin: number;
                public rightMargin: number;
                public topMargin: number;

                public constructor(param0: number, param1: number);

                public resolveLayoutDirection(param0: number): void;

                public getLayoutDirection(): number;

                public getMarginStart(): number;

                public setMargins(param0: number, param1: number, param2: number, param3: number): void;

                public setLayoutDirection(param0: number): void;

                public constructor(param0: android.view.ViewGroup.LayoutParams);
                public constructor(param0: android.view.ViewGroup.MarginLayoutParams);

                public getMarginEnd(): number;

                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

                public setMarginStart(param0: number): void;

                public isMarginRelative(): boolean;

                public setMarginEnd(param0: number): void;
            }
            export class OnHierarchyChangeListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.ViewGroup$OnHierarchyChangeListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onChildViewAdded(param0: android.view.View, param1: android.view.View): void;
                    onChildViewRemoved(param0: android.view.View, param1: android.view.View): void;
                });

                public onChildViewRemoved(param0: android.view.View, param1: android.view.View): void;

                public onChildViewAdded(param0: android.view.View, param1: android.view.View): void;
            }
        }
    }
}

/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.view.View.d.ts" />
declare module android {
    export module view {
        export class ViewGroupOverlay extends android.view.ViewOverlay {
            public remove(param0: android.view.View): void;

            public add(param0: android.view.View): void;
            public add(param0: android.graphics.drawable.Drawable): void;

            public remove(param0: android.graphics.drawable.Drawable): void;
        }
    }
}

/// <reference path="./android.view.View.d.ts" />
declare module android {
    export module view {
        export class ViewManager extends javalangObject {
            /**
             * Constructs a new instance of the android.view.ViewManager interface with the provided implementation.
             */
            public constructor(implementation: {
                addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
                updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
                removeView(param0: android.view.View): void;
            });

            public removeView(param0: android.view.View): void;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
        }
    }
}

/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.view.View.d.ts" />
declare module android {
    export module view {
        export abstract class ViewOutlineProvider extends javalangObject {
            public static BACKGROUND: android.view.ViewOutlineProvider;
            public static BOUNDS: android.view.ViewOutlineProvider;
            public static PADDED_BOUNDS: android.view.ViewOutlineProvider;

            public getOutline(param0: android.view.View, param1: android.graphics.Outline): void;

            public constructor();
        }
    }
}

/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
declare module android {
    export module view {
        export class ViewOverlay extends javalangObject {
            public clear(): void;

            public add(param0: android.graphics.drawable.Drawable): void;

            public remove(param0: android.graphics.drawable.Drawable): void;
        }
    }
}

/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
declare module android {
    export module view {
        export class ViewParent extends javalangObject {
            /**
             * Constructs a new instance of the android.view.ViewParent interface with the provided implementation.
             */
            public constructor(implementation: {
                requestLayout(): void;
                isLayoutRequested(): boolean;
                requestTransparentRegion(param0: android.view.View): void;
                invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
                invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;
                getParent(): android.view.ViewParent;
                requestChildFocus(param0: android.view.View, param1: android.view.View): void;
                recomputeViewAttributes(param0: android.view.View): void;
                clearChildFocus(param0: android.view.View): void;
                getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
                focusSearch(param0: android.view.View, param1: number): android.view.View;
                bringChildToFront(param0: android.view.View): void;
                focusableViewAvailable(param0: android.view.View): void;
                showContextMenuForChild(param0: android.view.View): boolean;
                createContextMenu(param0: android.view.ContextMenu): void;
                startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
                startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
                childDrawableStateChanged(param0: android.view.View): void;
                requestDisallowInterceptTouchEvent(param0: boolean): void;
                requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
                requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
                childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
                requestFitSystemWindows(): void;
                getParentForAccessibility(): android.view.ViewParent;
                notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
                canResolveLayoutDirection(): boolean;
                isLayoutDirectionResolved(): boolean;
                getLayoutDirection(): number;
                canResolveTextDirection(): boolean;
                isTextDirectionResolved(): boolean;
                getTextDirection(): number;
                canResolveTextAlignment(): boolean;
                isTextAlignmentResolved(): boolean;
                getTextAlignment(): number;
                onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
                onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
                onStopNestedScroll(param0: android.view.View): void;
                onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
                onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;
                onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
                onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
                onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
            });

            public recomputeViewAttributes(param0: android.view.View): void;

            public isLayoutRequested(): boolean;

            public isLayoutDirectionResolved(): boolean;

            public onStopNestedScroll(param0: android.view.View): void;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public canResolveLayoutDirection(): boolean;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public bringChildToFront(param0: android.view.View): void;

            public requestLayout(): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public isTextAlignmentResolved(): boolean;

            public requestTransparentRegion(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public canResolveTextAlignment(): boolean;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public getParent(): android.view.ViewParent;

            public canResolveTextDirection(): boolean;

            public getTextDirection(): number;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public isTextDirectionResolved(): boolean;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public getLayoutDirection(): number;

            public getTextAlignment(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public requestFitSystemWindows(): void;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
        }
    }
}

/// <reference path="./android.animation.TimeInterpolator.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module view {
        export class ViewPropertyAnimator extends javalangObject {
            public rotationYBy(param0: number): android.view.ViewPropertyAnimator;

            public translationYBy(param0: number): android.view.ViewPropertyAnimator;

            public withEndAction(param0: javalangRunnable): android.view.ViewPropertyAnimator;

            public getDuration(): number;

            public setDuration(param0: number): android.view.ViewPropertyAnimator;

            public cancel(): void;

            public getInterpolator(): android.animation.TimeInterpolator;

            public scaleXBy(param0: number): android.view.ViewPropertyAnimator;

            public xBy(param0: number): android.view.ViewPropertyAnimator;

            public z(param0: number): android.view.ViewPropertyAnimator;

            public translationY(param0: number): android.view.ViewPropertyAnimator;

            public scaleY(param0: number): android.view.ViewPropertyAnimator;

            public translationX(param0: number): android.view.ViewPropertyAnimator;

            public scaleX(param0: number): android.view.ViewPropertyAnimator;

            public setStartDelay(param0: number): android.view.ViewPropertyAnimator;

            public translationZ(param0: number): android.view.ViewPropertyAnimator;

            public setUpdateListener(param0: android.animation.ValueAnimator.AnimatorUpdateListener): android.view.ViewPropertyAnimator;

            public yBy(param0: number): android.view.ViewPropertyAnimator;

            public start(): void;

            public getStartDelay(): number;

            public withLayer(): android.view.ViewPropertyAnimator;

            public x(param0: number): android.view.ViewPropertyAnimator;

            public withStartAction(param0: javalangRunnable): android.view.ViewPropertyAnimator;

            public setListener(param0: android.animation.Animator.AnimatorListener): android.view.ViewPropertyAnimator;

            public rotationBy(param0: number): android.view.ViewPropertyAnimator;

            public translationXBy(param0: number): android.view.ViewPropertyAnimator;

            public scaleYBy(param0: number): android.view.ViewPropertyAnimator;

            public y(param0: number): android.view.ViewPropertyAnimator;

            public alphaBy(param0: number): android.view.ViewPropertyAnimator;

            public rotationY(param0: number): android.view.ViewPropertyAnimator;

            public translationZBy(param0: number): android.view.ViewPropertyAnimator;

            public zBy(param0: number): android.view.ViewPropertyAnimator;

            public rotationX(param0: number): android.view.ViewPropertyAnimator;

            public alpha(param0: number): android.view.ViewPropertyAnimator;

            public rotation(param0: number): android.view.ViewPropertyAnimator;

            public setInterpolator(param0: android.animation.TimeInterpolator): android.view.ViewPropertyAnimator;

            public rotationXBy(param0: number): android.view.ViewPropertyAnimator;
        }
    }
}

/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module view {
        export abstract class ViewStructure extends javalangObject {
            public setDimens(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

            public setActivated(param0: boolean): void;

            public setClassName(param0: string): void;

            public setContentDescription(param0: string): void;

            public setFocusable(param0: boolean): void;

            public getChildCount(): number;

            public getHint(): string;

            public setHint(param0: string): void;

            public setTextStyle(param0: number, param1: number, param2: number, param3: number): void;

            public setAccessibilityFocused(param0: boolean): void;

            public setChildCount(param0: number): void;

            public setTransformation(param0: android.graphics.Matrix): void;

            public setText(param0: string, param1: number, param2: number): void;

            public setId(param0: number, param1: string, param2: string, param3: string): void;

            public asyncCommit(): void;

            public setEnabled(param0: boolean): void;

            public setAlpha(param0: number): void;

            public setFocused(param0: boolean): void;

            public setChecked(param0: boolean): void;

            public addChildCount(param0: number): number;

            public setVisibility(param0: number): void;

            public setCheckable(param0: boolean): void;

            public setText(param0: string): void;

            public setElevation(param0: number): void;

            public getText(): string;

            public setTextLines(param0: native.Array<number>, param1: native.Array<number>): void;

            public constructor();

            public setSelected(param0: boolean): void;

            public asyncNewChild(param0: number): android.view.ViewStructure;

            public setLongClickable(param0: boolean): void;

            public getTextSelectionStart(): number;

            public setContextClickable(param0: boolean): void;

            public getTextSelectionEnd(): number;

            public newChild(param0: number): android.view.ViewStructure;

            public getExtras(): android.os.Bundle;

            public setClickable(param0: boolean): void;

            public hasExtras(): boolean;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.view.ViewStub.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module view {
        export class ViewStub extends android.view.View {
            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public getLayoutInflater(): android.view.LayoutInflater;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onMeasure(param0: number, param1: number): void;

            public setOnInflateListener(param0: android.view.ViewStub.OnInflateListener): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public getLayoutResource(): number;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public static inflate(param0: android.content.Context, param1: number, param2: android.view.ViewGroup): android.view.View;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public getInflatedId(): number;

            public draw(param0: android.graphics.Canvas): void;

            public sendAccessibilityEvent(param0: number): void;

            public inflate(): android.view.View;

            public setVisibility(param0: number): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public constructor(param0: android.content.Context, param1: number);

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public setLayoutResource(param0: number): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public setInflatedId(param0: number): void;

            public dispatchDraw(param0: android.graphics.Canvas): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public setLayoutInflater(param0: android.view.LayoutInflater): void;

            public constructor(param0: android.content.Context);

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
        }
        export module ViewStub {
            export class OnInflateListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.ViewStub$OnInflateListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onInflate(param0: android.view.ViewStub, param1: android.view.View): void;
                });

                public onInflate(param0: android.view.ViewStub, param1: android.view.View): void;
            }
        }
    }
}

/// <reference path="./android.view.View.d.ts" />
declare module android {
    export module view {
        export class ViewTreeObserver extends javalangObject {
            public addOnWindowAttachListener(param0: android.view.ViewTreeObserver.OnWindowAttachListener): void;

            public removeOnWindowAttachListener(param0: android.view.ViewTreeObserver.OnWindowAttachListener): void;

            public dispatchOnPreDraw(): boolean;

            public removeOnDrawListener(param0: android.view.ViewTreeObserver.OnDrawListener): void;

            public dispatchOnGlobalLayout(): void;

            public addOnGlobalFocusChangeListener(param0: android.view.ViewTreeObserver.OnGlobalFocusChangeListener): void;

            public removeOnPreDrawListener(param0: android.view.ViewTreeObserver.OnPreDrawListener): void;

            public removeOnGlobalFocusChangeListener(param0: android.view.ViewTreeObserver.OnGlobalFocusChangeListener): void;

            public addOnWindowFocusChangeListener(param0: android.view.ViewTreeObserver.OnWindowFocusChangeListener): void;

            public removeOnWindowFocusChangeListener(param0: android.view.ViewTreeObserver.OnWindowFocusChangeListener): void;

            public addOnDrawListener(param0: android.view.ViewTreeObserver.OnDrawListener): void;

            public removeOnScrollChangedListener(param0: android.view.ViewTreeObserver.OnScrollChangedListener): void;

            public removeOnTouchModeChangeListener(param0: android.view.ViewTreeObserver.OnTouchModeChangeListener): void;

            public removeGlobalOnLayoutListener(param0: android.view.ViewTreeObserver.OnGlobalLayoutListener): void;

            public addOnGlobalLayoutListener(param0: android.view.ViewTreeObserver.OnGlobalLayoutListener): void;

            public removeOnGlobalLayoutListener(param0: android.view.ViewTreeObserver.OnGlobalLayoutListener): void;

            public addOnScrollChangedListener(param0: android.view.ViewTreeObserver.OnScrollChangedListener): void;

            public addOnTouchModeChangeListener(param0: android.view.ViewTreeObserver.OnTouchModeChangeListener): void;

            public addOnPreDrawListener(param0: android.view.ViewTreeObserver.OnPreDrawListener): void;

            public isAlive(): boolean;

            public dispatchOnDraw(): void;
        }
        export module ViewTreeObserver {
            export class OnDrawListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.ViewTreeObserver$OnDrawListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onDraw(): void;
                });

                public onDraw(): void;
            }
            export class OnGlobalFocusChangeListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.ViewTreeObserver$OnGlobalFocusChangeListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onGlobalFocusChanged(param0: android.view.View, param1: android.view.View): void;
                });

                public onGlobalFocusChanged(param0: android.view.View, param1: android.view.View): void;
            }
            export class OnGlobalLayoutListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.ViewTreeObserver$OnGlobalLayoutListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onGlobalLayout(): void;
                });

                public onGlobalLayout(): void;
            }
            export class OnPreDrawListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.ViewTreeObserver$OnPreDrawListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onPreDraw(): boolean;
                });

                public onPreDraw(): boolean;
            }
            export class OnScrollChangedListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.ViewTreeObserver$OnScrollChangedListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onScrollChanged(): void;
                });

                public onScrollChanged(): void;
            }
            export class OnTouchModeChangeListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.ViewTreeObserver$OnTouchModeChangeListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onTouchModeChanged(param0: boolean): void;
                });

                public onTouchModeChanged(param0: boolean): void;
            }
            export class OnWindowAttachListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.ViewTreeObserver$OnWindowAttachListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onWindowAttached(): void;
                    onWindowDetached(): void;
                });

                public onWindowAttached(): void;

                public onWindowDetached(): void;
            }
            export class OnWindowFocusChangeListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.ViewTreeObserver$OnWindowFocusChangeListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onWindowFocusChanged(param0: boolean): void;
                });

                public onWindowFocusChanged(param0: boolean): void;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.media.session.MediaController.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.transition.Scene.d.ts" />
/// <reference path="./android.transition.Transition.d.ts" />
/// <reference path="./android.transition.TransitionManager.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.InputEvent.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.SearchEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.WindowManager.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module view {
        export abstract class Window extends javalangObject {
            public static DEFAULT_FEATURES: number;
            public static FEATURE_ACTION_BAR: number;
            public static FEATURE_ACTION_BAR_OVERLAY: number;
            public static FEATURE_ACTION_MODE_OVERLAY: number;
            public static FEATURE_ACTIVITY_TRANSITIONS: number;
            public static FEATURE_CONTENT_TRANSITIONS: number;
            public static FEATURE_CONTEXT_MENU: number;
            public static FEATURE_CUSTOM_TITLE: number;
            public static FEATURE_INDETERMINATE_PROGRESS: number;
            public static FEATURE_LEFT_ICON: number;
            public static FEATURE_NO_TITLE: number;
            public static FEATURE_OPTIONS_PANEL: number;
            public static FEATURE_PROGRESS: number;
            public static FEATURE_RIGHT_ICON: number;
            public static FEATURE_SWIPE_TO_DISMISS: number;
            public static ID_ANDROID_CONTENT: number;
            public static NAVIGATION_BAR_BACKGROUND_TRANSITION_NAME: string;
            public static PROGRESS_END: number;
            public static PROGRESS_INDETERMINATE_OFF: number;
            public static PROGRESS_INDETERMINATE_ON: number;
            public static PROGRESS_SECONDARY_END: number;
            public static PROGRESS_SECONDARY_START: number;
            public static PROGRESS_START: number;
            public static PROGRESS_VISIBILITY_OFF: number;
            public static PROGRESS_VISIBILITY_ON: number;
            public static STATUS_BAR_BACKGROUND_TRANSITION_NAME: string;

            public onActive(): void;

            public getStatusBarColor(): number;

            public hasSoftInputMode(): boolean;

            public getLayoutInflater(): android.view.LayoutInflater;

            public getTransitionBackgroundFadeDuration(): number;

            public setContentView(param0: android.view.View): void;

            public clearFlags(param0: number): void;

            public hasFeature(param0: number): boolean;

            public performPanelShortcut(param0: number, param1: number, param2: android.view.KeyEvent, param3: number): boolean;

            public setFeatureDrawableUri(param0: number, param1: android.net.Uri): void;

            public superDispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;

            public setSharedElementEnterTransition(param0: android.transition.Transition): void;

            public getReenterTransition(): android.transition.Transition;

            public setClipToOutline(param0: boolean): void;

            public getContext(): android.content.Context;

            public addFlags(param0: number): void;

            public setContentView(param0: number): void;

            public superDispatchTouchEvent(param0: android.view.MotionEvent): boolean;

            public performPanelIdentifierAction(param0: number, param1: number, param2: number): boolean;

            public getEnterTransition(): android.transition.Transition;

            public requestFeature(param0: number): boolean;

            public getCallback(): android.view.Window.Callback;

            public setAllowReturnTransitionOverlap(param0: boolean): void;

            public getContainer(): android.view.Window;

            public setFlags(param0: number, param1: number): void;

            public setAllowEnterTransitionOverlap(param0: boolean): void;

            public setMediaController(param0: android.media.session.MediaController): void;

            public getSharedElementReturnTransition(): android.transition.Transition;

            public getAllowEnterTransitionOverlap(): boolean;

            public setCallback(param0: android.view.Window.Callback): void;

            public getForcedWindowFlags(): number;

            public setSharedElementReturnTransition(param0: android.transition.Transition): void;

            public getFeatures(): number;

            public getSharedElementExitTransition(): android.transition.Transition;

            public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;

            public setChildDrawable(param0: number, param1: android.graphics.drawable.Drawable): void;

            public getNavigationBarColor(): number;

            public setNavigationBarColor(param0: number): void;

            public hasChildren(): boolean;

            public setDefaultWindowFormat(param0: number): void;

            public setTransitionManager(param0: android.transition.TransitionManager): void;

            public setDimAmount(param0: number): void;

            public setFeatureInt(param0: number, param1: number): void;

            public onConfigurationChanged(param0: android.content.res.Configuration): void;

            public makeActive(): void;

            public openPanel(param0: number, param1: android.view.KeyEvent): void;

            public setChildInt(param0: number, param1: number): void;

            public getAllowReturnTransitionOverlap(): boolean;

            public setSoftInputMode(param0: number): void;

            public getMediaController(): android.media.session.MediaController;

            public setContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public setFeatureDrawableAlpha(param0: number, param1: number): void;

            public invalidatePanelMenu(param0: number): void;

            public setBackgroundDrawableResource(param0: number): void;

            public constructor(param0: android.content.Context);

            public superDispatchTrackballEvent(param0: android.view.MotionEvent): boolean;

            public setFormat(param0: number): void;

            public injectInputEvent(param0: android.view.InputEvent): void;

            public setTitle(param0: string): void;

            public setSharedElementsUseOverlay(param0: boolean): void;

            public setFeatureDrawableResource(param0: number, param1: number): void;

            public setContainer(param0: android.view.Window): void;

            public setType(param0: number): void;

            public setLayout(param0: number, param1: number): void;

            public findViewById(param0: number): android.view.View;

            public setLogo(param0: number): void;

            public takeSurface(param0: android.view.SurfaceHolder.Callback2): void;

            public getLocalFeatures(): number;

            public static getDefaultFeatures(param0: android.content.Context): number;

            public getDecorView(): android.view.View;

            public setWindowManager(param0: android.view.WindowManager, param1: android.os.IBinder, param2: string): void;

            public performContextMenuIdentifierAction(param0: number, param1: number): boolean;

            public getWindowStyle(): android.content.res.TypedArray;

            public isShortcutKey(param0: number, param1: android.view.KeyEvent): boolean;

            public setElevation(param0: number): void;

            public getExitTransition(): android.transition.Transition;

            public getVolumeControlStream(): number;

            public takeKeyEvents(param0: boolean): void;

            public setTransitionBackgroundFadeDuration(param0: number): void;

            public getSharedElementEnterTransition(): android.transition.Transition;

            public restoreHierarchyState(param0: android.os.Bundle): void;

            public getReturnTransition(): android.transition.Transition;

            public getCurrentFocus(): android.view.View;

            public superDispatchKeyEvent(param0: android.view.KeyEvent): boolean;

            public peekDecorView(): android.view.View;

            public setWindowManager(param0: android.view.WindowManager, param1: android.os.IBinder, param2: string, param3: boolean): void;

            public getSharedElementReenterTransition(): android.transition.Transition;

            public closeAllPanels(): void;

            public setGravity(param0: number): void;

            public isActive(): boolean;

            public setExitTransition(param0: android.transition.Transition): void;

            public setSharedElementExitTransition(param0: android.transition.Transition): void;

            public setSharedElementReenterTransition(param0: android.transition.Transition): void;

            public setVolumeControlStream(param0: number): void;

            public setTitleColor(param0: number): void;

            public setStatusBarColor(param0: number): void;

            public isFloating(): boolean;

            public setEnterTransition(param0: android.transition.Transition): void;

            public getAttributes(): android.view.WindowManager.LayoutParams;

            public setFeatureDrawable(param0: number, param1: android.graphics.drawable.Drawable): void;

            public takeInputQueue(param0: android.view.InputQueue.Callback): void;

            public getContentScene(): android.transition.Scene;

            public setLocalFocus(param0: boolean, param1: boolean): void;

            public getWindowManager(): android.view.WindowManager;

            public togglePanel(param0: number, param1: android.view.KeyEvent): void;

            public setUiOptions(param0: number, param1: number): void;

            public getTransitionManager(): android.transition.TransitionManager;

            public setReturnTransition(param0: android.transition.Transition): void;

            public setUiOptions(param0: number): void;

            public saveHierarchyState(): android.os.Bundle;

            public setIcon(param0: number): void;

            public getSharedElementsUseOverlay(): boolean;

            public closePanel(param0: number): void;

            public superDispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;

            public addContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public setWindowAnimations(param0: number): void;

            public setAttributes(param0: android.view.WindowManager.LayoutParams): void;

            public setReenterTransition(param0: android.transition.Transition): void;
        }
        export module Window {
            export class Callback extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.Window$Callback interface with the provided implementation.
                 */
                public constructor(implementation: {
                    dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
                    dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
                    dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
                    dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
                    dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
                    dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
                    onCreatePanelView(param0: number): android.view.View;
                    onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
                    onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;
                    onMenuOpened(param0: number, param1: android.view.Menu): boolean;
                    onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
                    onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
                    onContentChanged(): void;
                    onWindowFocusChanged(param0: boolean): void;
                    onAttachedToWindow(): void;
                    onDetachedFromWindow(): void;
                    onPanelClosed(param0: number, param1: android.view.Menu): void;
                    onSearchRequested(): boolean;
                    onSearchRequested(param0: android.view.SearchEvent): boolean;
                    onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
                    onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
                    onActionModeStarted(param0: android.view.ActionMode): void;
                    onActionModeFinished(param0: android.view.ActionMode): void;
                });

                public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;

                public onActionModeStarted(param0: android.view.ActionMode): void;

                public onMenuOpened(param0: number, param1: android.view.Menu): boolean;

                public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;

                public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;

                public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;

                public onActionModeFinished(param0: android.view.ActionMode): void;

                public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;

                public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;

                public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;

                public onContentChanged(): void;

                public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;

                public onSearchRequested(param0: android.view.SearchEvent): boolean;

                public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;

                public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;

                public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;

                public onDetachedFromWindow(): void;

                public onPanelClosed(param0: number, param1: android.view.Menu): void;

                public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;

                public onSearchRequested(): boolean;

                public onWindowFocusChanged(param0: boolean): void;

                public onCreatePanelView(param0: number): android.view.View;

                public onAttachedToWindow(): void;
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module view {
        export class WindowAnimationFrameStats extends android.view.FrameStats implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public toString(): string;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module view {
        export class WindowContentFrameStats extends android.view.FrameStats implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public getFramePostedTimeNano(param0: number): number;

            public toString(): string;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getFrameReadyTimeNano(param0: number): number;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.WindowId.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module view {
        export class WindowId extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public toString(): string;

            public unregisterFocusObserver(param0: android.view.WindowId.FocusObserver): void;

            public equals(param0: javalangObject): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public registerFocusObserver(param0: android.view.WindowId.FocusObserver): void;

            public isFocused(): boolean;

            public hashCode(): number;
        }
        export module WindowId {
            export abstract class FocusObserver extends javalangObject {
                public onFocusLost(param0: android.view.WindowId): void;

                public onFocusGained(param0: android.view.WindowId): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.graphics.Rect.d.ts" />
declare module android {
    export module view {
        export class WindowInsets extends javalangObject {
            public getStableInsetLeft(): number;

            public getSystemWindowInsetRight(): number;

            public getStableInsetRight(): number;

            public constructor(param0: android.view.WindowInsets);

            public isConsumed(): boolean;

            public getSystemWindowInsetTop(): number;

            public hasInsets(): boolean;

            public hasStableInsets(): boolean;

            public consumeStableInsets(): android.view.WindowInsets;

            public getSystemWindowInsetLeft(): number;

            public getStableInsetTop(): number;

            public consumeSystemWindowInsets(): android.view.WindowInsets;

            public toString(): string;

            public isRound(): boolean;

            public replaceSystemWindowInsets(param0: number, param1: number, param2: number, param3: number): android.view.WindowInsets;

            public getSystemWindowInsetBottom(): number;

            public replaceSystemWindowInsets(param0: android.graphics.Rect): android.view.WindowInsets;

            public getStableInsetBottom(): number;

            public hasSystemWindowInsets(): boolean;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.Display.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module view {
        export class WindowManager extends javalangObject implements android.view.ViewManager {
            /**
             * Constructs a new instance of the android.view.WindowManager interface with the provided implementation.
             */
            public constructor(implementation: {
                getDefaultDisplay(): android.view.Display;
                removeViewImmediate(param0: android.view.View): void;
                addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
                updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
                removeView(param0: android.view.View): void;
            });

            public removeView(param0: android.view.View): void;

            public getDefaultDisplay(): android.view.Display;

            public removeViewImmediate(param0: android.view.View): void;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
        }
        export module WindowManager {
            export class BadTokenException extends javalangRuntimeException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
            export class InvalidDisplayException extends javalangRuntimeException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
            export class LayoutParams extends android.view.ViewGroup.LayoutParams implements android.os.Parcelable {
                public static ALPHA_CHANGED: number;
                public static ANIMATION_CHANGED: number;
                public static BRIGHTNESS_OVERRIDE_FULL: number;
                public static BRIGHTNESS_OVERRIDE_NONE: number;
                public static BRIGHTNESS_OVERRIDE_OFF: number;
                public static CREATOR: android.os.Parcelable.Creator;
                public static DIM_AMOUNT_CHANGED: number;
                public static FIRST_APPLICATION_WINDOW: number;
                public static FIRST_SUB_WINDOW: number;
                public static FIRST_SYSTEM_WINDOW: number;
                public static FLAGS_CHANGED: number;
                public static FLAG_ALLOW_LOCK_WHILE_SCREEN_ON: number;
                public static FLAG_ALT_FOCUSABLE_IM: number;
                public static FLAG_BLUR_BEHIND: number;
                public static FLAG_DIM_BEHIND: number;
                public static FLAG_DISMISS_KEYGUARD: number;
                public static FLAG_DITHER: number;
                public static FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS: number;
                public static FLAG_FORCE_NOT_FULLSCREEN: number;
                public static FLAG_FULLSCREEN: number;
                public static FLAG_HARDWARE_ACCELERATED: number;
                public static FLAG_IGNORE_CHEEK_PRESSES: number;
                public static FLAG_KEEP_SCREEN_ON: number;
                public static FLAG_LAYOUT_ATTACHED_IN_DECOR: number;
                public static FLAG_LAYOUT_INSET_DECOR: number;
                public static FLAG_LAYOUT_IN_OVERSCAN: number;
                public static FLAG_LAYOUT_IN_SCREEN: number;
                public static FLAG_LAYOUT_NO_LIMITS: number;
                public static FLAG_LOCAL_FOCUS_MODE: number;
                public static FLAG_NOT_FOCUSABLE: number;
                public static FLAG_NOT_TOUCHABLE: number;
                public static FLAG_NOT_TOUCH_MODAL: number;
                public static FLAG_SCALED: number;
                public static FLAG_SECURE: number;
                public static FLAG_SHOW_WALLPAPER: number;
                public static FLAG_SHOW_WHEN_LOCKED: number;
                public static FLAG_SPLIT_TOUCH: number;
                public static FLAG_TOUCHABLE_WHEN_WAKING: number;
                public static FLAG_TRANSLUCENT_NAVIGATION: number;
                public static FLAG_TRANSLUCENT_STATUS: number;
                public static FLAG_TURN_SCREEN_ON: number;
                public static FLAG_WATCH_OUTSIDE_TOUCH: number;
                public static FORMAT_CHANGED: number;
                public static LAST_APPLICATION_WINDOW: number;
                public static LAST_SUB_WINDOW: number;
                public static LAST_SYSTEM_WINDOW: number;
                public static LAYOUT_CHANGED: number;
                public static MEMORY_TYPE_CHANGED: number;
                public static MEMORY_TYPE_GPU: number;
                public static MEMORY_TYPE_HARDWARE: number;
                public static MEMORY_TYPE_NORMAL: number;
                public static MEMORY_TYPE_PUSH_BUFFERS: number;
                public static ROTATION_ANIMATION_CHANGED: number;
                public static ROTATION_ANIMATION_CROSSFADE: number;
                public static ROTATION_ANIMATION_JUMPCUT: number;
                public static ROTATION_ANIMATION_ROTATE: number;
                public static SCREEN_BRIGHTNESS_CHANGED: number;
                public static SCREEN_ORIENTATION_CHANGED: number;
                public static SOFT_INPUT_ADJUST_NOTHING: number;
                public static SOFT_INPUT_ADJUST_PAN: number;
                public static SOFT_INPUT_ADJUST_RESIZE: number;
                public static SOFT_INPUT_ADJUST_UNSPECIFIED: number;
                public static SOFT_INPUT_IS_FORWARD_NAVIGATION: number;
                public static SOFT_INPUT_MASK_ADJUST: number;
                public static SOFT_INPUT_MASK_STATE: number;
                public static SOFT_INPUT_MODE_CHANGED: number;
                public static SOFT_INPUT_STATE_ALWAYS_HIDDEN: number;
                public static SOFT_INPUT_STATE_ALWAYS_VISIBLE: number;
                public static SOFT_INPUT_STATE_HIDDEN: number;
                public static SOFT_INPUT_STATE_UNCHANGED: number;
                public static SOFT_INPUT_STATE_UNSPECIFIED: number;
                public static SOFT_INPUT_STATE_VISIBLE: number;
                public static TITLE_CHANGED: number;
                public static TYPE_ACCESSIBILITY_OVERLAY: number;
                public static TYPE_APPLICATION: number;
                public static TYPE_APPLICATION_ATTACHED_DIALOG: number;
                public static TYPE_APPLICATION_MEDIA: number;
                public static TYPE_APPLICATION_PANEL: number;
                public static TYPE_APPLICATION_STARTING: number;
                public static TYPE_APPLICATION_SUB_PANEL: number;
                public static TYPE_BASE_APPLICATION: number;
                public static TYPE_CHANGED: number;
                public static TYPE_INPUT_METHOD: number;
                public static TYPE_INPUT_METHOD_DIALOG: number;
                public static TYPE_KEYGUARD_DIALOG: number;
                public static TYPE_PHONE: number;
                public static TYPE_PRIORITY_PHONE: number;
                public static TYPE_PRIVATE_PRESENTATION: number;
                public static TYPE_SEARCH_BAR: number;
                public static TYPE_STATUS_BAR: number;
                public static TYPE_STATUS_BAR_PANEL: number;
                public static TYPE_SYSTEM_ALERT: number;
                public static TYPE_SYSTEM_DIALOG: number;
                public static TYPE_SYSTEM_ERROR: number;
                public static TYPE_SYSTEM_OVERLAY: number;
                public static TYPE_TOAST: number;
                public static TYPE_WALLPAPER: number;
                public alpha: number;
                public buttonBrightness: number;
                public dimAmount: number;
                public flags: number;
                public format: number;
                public gravity: number;
                public horizontalMargin: number;
                public horizontalWeight: number;
                public memoryType: number;
                public packageName: string;
                public preferredDisplayModeId: number;
                public preferredRefreshRate: number;
                public rotationAnimation: number;
                public screenBrightness: number;
                public screenOrientation: number;
                public softInputMode: number;
                public systemUiVisibility: number;
                public token: android.os.IBinder;
                public type: number;
                public verticalMargin: number;
                public verticalWeight: number;
                public windowAnimations: number;
                public x: number;
                public y: number;

                public constructor(param0: number, param1: number);

                public debug(param0: string): string;

                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public copyFrom(param0: android.view.WindowManager.LayoutParams): number;

                public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);

                public toString(): string;

                public setTitle(param0: string): void;

                public getTitle(): string;

                public constructor();
                public constructor(param0: android.view.ViewGroup.LayoutParams);
                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                public constructor(param0: android.os.Parcel);

                public describeContents(): number;

                public constructor(param0: number);

                public static mayUseInputMethod(param0: number): boolean;
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityRecord.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module view {
        export module accessibility {
            export class AccessibilityEvent extends android.view.accessibility.AccessibilityRecord implements android.os.Parcelable {
                public static CONTENT_CHANGE_TYPE_CONTENT_DESCRIPTION: number;
                public static CONTENT_CHANGE_TYPE_SUBTREE: number;
                public static CONTENT_CHANGE_TYPE_TEXT: number;
                public static CONTENT_CHANGE_TYPE_UNDEFINED: number;
                public static CREATOR: android.os.Parcelable.Creator;
                public static INVALID_POSITION: number;
                public static MAX_TEXT_LENGTH: number;
                public static TYPES_ALL_MASK: number;
                public static TYPE_ANNOUNCEMENT: number;
                public static TYPE_ASSIST_READING_CONTEXT: number;
                public static TYPE_GESTURE_DETECTION_END: number;
                public static TYPE_GESTURE_DETECTION_START: number;
                public static TYPE_NOTIFICATION_STATE_CHANGED: number;
                public static TYPE_TOUCH_EXPLORATION_GESTURE_END: number;
                public static TYPE_TOUCH_EXPLORATION_GESTURE_START: number;
                public static TYPE_TOUCH_INTERACTION_END: number;
                public static TYPE_TOUCH_INTERACTION_START: number;
                public static TYPE_VIEW_ACCESSIBILITY_FOCUSED: number;
                public static TYPE_VIEW_ACCESSIBILITY_FOCUS_CLEARED: number;
                public static TYPE_VIEW_CLICKED: number;
                public static TYPE_VIEW_CONTEXT_CLICKED: number;
                public static TYPE_VIEW_FOCUSED: number;
                public static TYPE_VIEW_HOVER_ENTER: number;
                public static TYPE_VIEW_HOVER_EXIT: number;
                public static TYPE_VIEW_LONG_CLICKED: number;
                public static TYPE_VIEW_SCROLLED: number;
                public static TYPE_VIEW_SELECTED: number;
                public static TYPE_VIEW_TEXT_CHANGED: number;
                public static TYPE_VIEW_TEXT_SELECTION_CHANGED: number;
                public static TYPE_VIEW_TEXT_TRAVERSED_AT_MOVEMENT_GRANULARITY: number;
                public static TYPE_WINDOWS_CHANGED: number;
                public static TYPE_WINDOW_CONTENT_CHANGED: number;
                public static TYPE_WINDOW_STATE_CHANGED: number;

                public recycle(): void;

                public getEventType(): number;

                public getAction(): number;

                public getContentChangeTypes(): number;

                public getEventTime(): number;

                public static obtain(): android.view.accessibility.AccessibilityRecord;
                public static obtain(param0: android.view.accessibility.AccessibilityRecord): android.view.accessibility.AccessibilityRecord;
                public static obtain(param0: number): android.view.accessibility.AccessibilityEvent;

                public setContentChangeTypes(param0: number): void;

                public setEventTime(param0: number): void;

                public getRecord(param0: number): android.view.accessibility.AccessibilityRecord;

                public static obtain(param0: android.view.accessibility.AccessibilityEvent): android.view.accessibility.AccessibilityEvent;

                public setMovementGranularity(param0: number): void;

                public initFromParcel(param0: android.os.Parcel): void;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getPackageName(): string;

                public toString(): string;

                public static obtain(): android.view.accessibility.AccessibilityEvent;

                public setPackageName(param0: string): void;

                public static eventTypeToString(param0: number): string;

                public appendRecord(param0: android.view.accessibility.AccessibilityRecord): void;

                public setAction(param0: number): void;

                public describeContents(): number;

                public getRecordCount(): number;

                public setEventType(param0: number): void;

                public getMovementGranularity(): number;
            }
        }
    }
}

/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
declare module android {
    export module view {
        export module accessibility {
            export class AccessibilityEventSource extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.accessibility.AccessibilityEventSource interface with the provided implementation.
                 */
                public constructor(implementation: {
                    sendAccessibilityEvent(param0: number): void;
                    sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
                });

                public sendAccessibilityEvent(param0: number): void;

                public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
            }
        }
    }
}

/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module view {
        export module accessibility {
            export class AccessibilityManager extends javalangObject {
                public getEnabledAccessibilityServiceList(param0: number): javautilList;

                public removeAccessibilityStateChangeListener(param0: android.view.accessibility.AccessibilityManager.AccessibilityStateChangeListener): boolean;

                public getInstalledAccessibilityServiceList(): javautilList;

                public addAccessibilityStateChangeListener(param0: android.view.accessibility.AccessibilityManager.AccessibilityStateChangeListener): boolean;

                public interrupt(): void;

                public addTouchExplorationStateChangeListener(param0: android.view.accessibility.AccessibilityManager.TouchExplorationStateChangeListener): boolean;

                public isEnabled(): boolean;

                public getAccessibilityServiceList(): javautilList;

                public isTouchExplorationEnabled(): boolean;

                public removeTouchExplorationStateChangeListener(param0: android.view.accessibility.AccessibilityManager.TouchExplorationStateChangeListener): boolean;

                public sendAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;
            }
            export module AccessibilityManager {
                export class AccessibilityStateChangeListener extends javalangObject {
                    /**
                     * Constructs a new instance of the android.view.accessibility.AccessibilityManager$AccessibilityStateChangeListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onAccessibilityStateChanged(param0: boolean): void;
                    });

                    public onAccessibilityStateChanged(param0: boolean): void;
                }
                export class TouchExplorationStateChangeListener extends javalangObject {
                    /**
                     * Constructs a new instance of the android.view.accessibility.AccessibilityManager$TouchExplorationStateChangeListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onTouchExplorationStateChanged(param0: boolean): void;
                    });

                    public onTouchExplorationStateChanged(param0: boolean): void;
                }
            }
        }
    }
}

/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityWindowInfo.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module view {
        export module accessibility {
            export class AccessibilityNodeInfo extends javalangObject implements android.os.Parcelable {
                public static ACTION_ACCESSIBILITY_FOCUS: number;
                public static ACTION_ARGUMENT_COLUMN_INT: string;
                public static ACTION_ARGUMENT_EXTEND_SELECTION_BOOLEAN: string;
                public static ACTION_ARGUMENT_HTML_ELEMENT_STRING: string;
                public static ACTION_ARGUMENT_MOVEMENT_GRANULARITY_INT: string;
                public static ACTION_ARGUMENT_ROW_INT: string;
                public static ACTION_ARGUMENT_SELECTION_END_INT: string;
                public static ACTION_ARGUMENT_SELECTION_START_INT: string;
                public static ACTION_ARGUMENT_SET_TEXT_CHARSEQUENCE: string;
                public static ACTION_CLEAR_ACCESSIBILITY_FOCUS: number;
                public static ACTION_CLEAR_FOCUS: number;
                public static ACTION_CLEAR_SELECTION: number;
                public static ACTION_CLICK: number;
                public static ACTION_COLLAPSE: number;
                public static ACTION_COPY: number;
                public static ACTION_CUT: number;
                public static ACTION_DISMISS: number;
                public static ACTION_EXPAND: number;
                public static ACTION_FOCUS: number;
                public static ACTION_LONG_CLICK: number;
                public static ACTION_NEXT_AT_MOVEMENT_GRANULARITY: number;
                public static ACTION_NEXT_HTML_ELEMENT: number;
                public static ACTION_PASTE: number;
                public static ACTION_PREVIOUS_AT_MOVEMENT_GRANULARITY: number;
                public static ACTION_PREVIOUS_HTML_ELEMENT: number;
                public static ACTION_SCROLL_BACKWARD: number;
                public static ACTION_SCROLL_FORWARD: number;
                public static ACTION_SELECT: number;
                public static ACTION_SET_SELECTION: number;
                public static ACTION_SET_TEXT: number;
                public static CREATOR: android.os.Parcelable.Creator;
                public static FOCUS_ACCESSIBILITY: number;
                public static FOCUS_INPUT: number;
                public static MOVEMENT_GRANULARITY_CHARACTER: number;
                public static MOVEMENT_GRANULARITY_LINE: number;
                public static MOVEMENT_GRANULARITY_PAGE: number;
                public static MOVEMENT_GRANULARITY_PARAGRAPH: number;
                public static MOVEMENT_GRANULARITY_WORD: number;

                public recycle(): void;

                public findFocus(param0: number): android.view.accessibility.AccessibilityNodeInfo;

                public getContentDescription(): string;

                public setRangeInfo(param0: android.view.accessibility.AccessibilityNodeInfo.RangeInfo): void;

                public setContextClickable(param0: boolean): void;

                public setEnabled(param0: boolean): void;

                public getTextSelectionStart(): number;

                public getWindow(): android.view.accessibility.AccessibilityWindowInfo;

                public getWindowId(): number;

                public setAccessibilityFocused(param0: boolean): void;

                public getBoundsInParent(param0: android.graphics.Rect): void;

                public setSelected(param0: boolean): void;

                public getActions(): number;

                public setVisibleToUser(param0: boolean): void;

                public isContentInvalid(): boolean;

                public setTraversalBefore(param0: android.view.View): void;

                public getPackageName(): string;

                public addChild(param0: android.view.View): void;

                public isContextClickable(): boolean;

                public setMultiLine(param0: boolean): void;

                public setEditable(param0: boolean): void;

                public setMaxTextLength(param0: number): void;

                public getParent(): android.view.accessibility.AccessibilityNodeInfo;

                public getError(): string;

                public isDismissable(): boolean;

                public setContentDescription(param0: string): void;

                public setLabelFor(param0: android.view.View, param1: number): void;

                public removeChild(param0: android.view.View, param1: number): boolean;

                public removeAction(param0: number): void;

                public removeChild(param0: android.view.View): boolean;

                public getLabeledBy(): android.view.accessibility.AccessibilityNodeInfo;

                public setBoundsInScreen(param0: android.graphics.Rect): void;

                public isLongClickable(): boolean;

                public getCollectionInfo(): android.view.accessibility.AccessibilityNodeInfo.CollectionInfo;

                public static obtain(param0: android.view.accessibility.AccessibilityNodeInfo): android.view.accessibility.AccessibilityNodeInfo;

                public setLongClickable(param0: boolean): void;

                public setError(param0: string): void;

                public setDismissable(param0: boolean): void;

                public getInputType(): number;

                public isFocused(): boolean;

                public isPassword(): boolean;

                public setLabeledBy(param0: android.view.View, param1: number): void;

                public performAction(param0: number, param1: android.os.Bundle): boolean;

                public setParent(param0: android.view.View): void;

                public setSource(param0: android.view.View, param1: number): void;

                public getChildCount(): number;

                public getBoundsInScreen(param0: android.graphics.Rect): void;

                public isSelected(): boolean;

                public getLabelFor(): android.view.accessibility.AccessibilityNodeInfo;

                public addAction(param0: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction): void;

                public isEditable(): boolean;

                public setCheckable(param0: boolean): void;

                public getText(): string;

                public setPackageName(param0: string): void;

                public getRangeInfo(): android.view.accessibility.AccessibilityNodeInfo.RangeInfo;

                public equals(param0: javalangObject): boolean;

                public isFocusable(): boolean;

                public setChecked(param0: boolean): void;

                public setFocusable(param0: boolean): void;

                public getClassName(): string;

                public isCheckable(): boolean;

                public setContentInvalid(param0: boolean): void;

                public setViewIdResourceName(param0: string): void;

                public setClickable(param0: boolean): void;

                public static obtain(param0: android.view.View): android.view.accessibility.AccessibilityNodeInfo;

                public setTextSelection(param0: number, param1: number): void;

                public setScrollable(param0: boolean): void;

                public isAccessibilityFocused(): boolean;

                public setTraversalAfter(param0: android.view.View, param1: number): void;

                public hashCode(): number;

                public setParent(param0: android.view.View, param1: number): void;

                public getExtras(): android.os.Bundle;

                public setClassName(param0: string): void;

                public setLiveRegion(param0: number): void;

                public isMultiLine(): boolean;

                public isScrollable(): boolean;

                public addChild(param0: android.view.View, param1: number): void;

                public setMovementGranularities(param0: number): void;

                public performAction(param0: number): boolean;

                public toString(): string;

                public getTraversalBefore(): android.view.accessibility.AccessibilityNodeInfo;

                public setSource(param0: android.view.View): void;

                public setTraversalAfter(param0: android.view.View): void;

                public getMovementGranularities(): number;

                public setPassword(param0: boolean): void;

                public describeContents(): number;

                public getMaxTextLength(): number;

                public setText(param0: string): void;

                public isChecked(): boolean;

                public setFocused(param0: boolean): void;

                public getCollectionItemInfo(): android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo;

                public removeAction(param0: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction): boolean;

                public focusSearch(param0: number): android.view.accessibility.AccessibilityNodeInfo;

                public isClickable(): boolean;

                public setCanOpenPopup(param0: boolean): void;

                public getTextSelectionEnd(): number;

                public setCollectionInfo(param0: android.view.accessibility.AccessibilityNodeInfo.CollectionInfo): void;

                public getChild(param0: number): android.view.accessibility.AccessibilityNodeInfo;

                public setInputType(param0: number): void;

                public getViewIdResourceName(): string;

                public findAccessibilityNodeInfosByText(param0: string): javautilList;

                public setLabeledBy(param0: android.view.View): void;

                public static obtain(param0: android.view.View, param1: number): android.view.accessibility.AccessibilityNodeInfo;

                public setCollectionItemInfo(param0: android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo): void;

                public setLabelFor(param0: android.view.View): void;

                public static obtain(): android.view.accessibility.AccessibilityNodeInfo;

                public getActionList(): javautilList;

                public getTraversalAfter(): android.view.accessibility.AccessibilityNodeInfo;

                public getLiveRegion(): number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public setBoundsInParent(param0: android.graphics.Rect): void;

                public isVisibleToUser(): boolean;

                public canOpenPopup(): boolean;

                public findAccessibilityNodeInfosByViewId(param0: string): javautilList;

                public setTraversalBefore(param0: android.view.View, param1: number): void;

                public isEnabled(): boolean;

                public addAction(param0: number): void;

                public refresh(): boolean;
            }
            export module AccessibilityNodeInfo {
                export class AccessibilityAction extends javalangObject {
                    public static ACTION_ACCESSIBILITY_FOCUS: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
                    public static ACTION_CLEAR_ACCESSIBILITY_FOCUS: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
                    public static ACTION_CLEAR_FOCUS: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
                    public static ACTION_CLEAR_SELECTION: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
                    public static ACTION_CLICK: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
                    public static ACTION_COLLAPSE: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
                    public static ACTION_CONTEXT_CLICK: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
                    public static ACTION_COPY: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
                    public static ACTION_CUT: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
                    public static ACTION_DISMISS: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
                    public static ACTION_EXPAND: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
                    public static ACTION_FOCUS: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
                    public static ACTION_LONG_CLICK: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
                    public static ACTION_NEXT_AT_MOVEMENT_GRANULARITY: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
                    public static ACTION_NEXT_HTML_ELEMENT: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
                    public static ACTION_PASTE: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
                    public static ACTION_PREVIOUS_AT_MOVEMENT_GRANULARITY: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
                    public static ACTION_PREVIOUS_HTML_ELEMENT: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
                    public static ACTION_SCROLL_BACKWARD: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
                    public static ACTION_SCROLL_DOWN: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
                    public static ACTION_SCROLL_FORWARD: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
                    public static ACTION_SCROLL_LEFT: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
                    public static ACTION_SCROLL_RIGHT: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
                    public static ACTION_SCROLL_TO_POSITION: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
                    public static ACTION_SCROLL_UP: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
                    public static ACTION_SELECT: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
                    public static ACTION_SET_SELECTION: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
                    public static ACTION_SET_TEXT: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
                    public static ACTION_SHOW_ON_SCREEN: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;

                    public getLabel(): string;

                    public toString(): string;

                    public equals(param0: javalangObject): boolean;

                    public getId(): number;

                    public constructor(param0: number, param1: string);

                    public hashCode(): number;
                }
                export class CollectionInfo extends javalangObject {
                    public static SELECTION_MODE_MULTIPLE: number;
                    public static SELECTION_MODE_NONE: number;
                    public static SELECTION_MODE_SINGLE: number;

                    public getRowCount(): number;

                    public getColumnCount(): number;

                    public getSelectionMode(): number;

                    public static obtain(param0: number, param1: number, param2: boolean, param3: number): android.view.accessibility.AccessibilityNodeInfo.CollectionInfo;
                    public static obtain(param0: number, param1: number, param2: boolean): android.view.accessibility.AccessibilityNodeInfo.CollectionInfo;

                    public isHierarchical(): boolean;
                }
                export class CollectionItemInfo extends javalangObject {
                    public static obtain(param0: number, param1: number, param2: number, param3: number, param4: boolean): android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo;

                    public getRowSpan(): number;

                    public getColumnSpan(): number;

                    public isHeading(): boolean;

                    public getRowIndex(): number;

                    public static obtain(param0: number, param1: number, param2: number, param3: number, param4: boolean, param5: boolean): android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo;

                    public getColumnIndex(): number;

                    public isSelected(): boolean;
                }
                export class RangeInfo extends javalangObject {
                    public static RANGE_TYPE_FLOAT: number;
                    public static RANGE_TYPE_INT: number;
                    public static RANGE_TYPE_PERCENT: number;

                    public getType(): number;

                    public getCurrent(): number;

                    public static obtain(param0: number, param1: number, param2: number, param3: number): android.view.accessibility.AccessibilityNodeInfo.RangeInfo;

                    public getMax(): number;

                    public getMin(): number;
                }
            }
        }
    }
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityNodeInfo.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module view {
        export module accessibility {
            export abstract class AccessibilityNodeProvider extends javalangObject {
                public static HOST_VIEW_ID: number;

                public findFocus(param0: number): android.view.accessibility.AccessibilityNodeInfo;

                public performAction(param0: number, param1: number, param2: android.os.Bundle): boolean;

                public createAccessibilityNodeInfo(param0: number): android.view.accessibility.AccessibilityNodeInfo;

                public constructor();

                public findAccessibilityNodeInfosByText(param0: string, param1: number): javautilList;
            }
        }
    }
}

/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityNodeInfo.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module view {
        export module accessibility {
            export class AccessibilityRecord extends javalangObject {
                public isChecked(): boolean;

                public setChecked(param0: boolean): void;

                public recycle(): void;

                public getClassName(): string;

                public getContentDescription(): string;

                public getParcelableData(): android.os.Parcelable;

                public setAddedCount(param0: number): void;

                public getRemovedCount(): number;

                public setEnabled(param0: boolean): void;

                public getAddedCount(): number;

                public getToIndex(): number;

                public static obtain(): android.view.accessibility.AccessibilityRecord;

                public getItemCount(): number;

                public getScrollY(): number;

                public static obtain(param0: android.view.accessibility.AccessibilityRecord): android.view.accessibility.AccessibilityRecord;

                public getWindowId(): number;

                public getCurrentItemIndex(): number;

                public setParcelableData(param0: android.os.Parcelable): void;

                public setScrollX(param0: number): void;

                public setScrollable(param0: boolean): void;

                public setToIndex(param0: number): void;

                public isFullScreen(): boolean;

                public isPassword(): boolean;

                public setFullScreen(param0: boolean): void;

                public setClassName(param0: string): void;

                public getText(): javautilList;

                public setCurrentItemIndex(param0: number): void;

                public setBeforeText(param0: string): void;

                public setSource(param0: android.view.View, param1: number): void;

                public isScrollable(): boolean;

                public getScrollX(): number;

                public getMaxScrollX(): number;

                public setMaxScrollX(param0: number): void;

                public setRemovedCount(param0: number): void;

                public toString(): string;

                public setItemCount(param0: number): void;

                public setFromIndex(param0: number): void;

                public setSource(param0: android.view.View): void;

                public setScrollY(param0: number): void;

                public setMaxScrollY(param0: number): void;

                public getBeforeText(): string;

                public getMaxScrollY(): number;

                public setPassword(param0: boolean): void;

                public isEnabled(): boolean;

                public getFromIndex(): number;

                public setContentDescription(param0: string): void;

                public getSource(): android.view.accessibility.AccessibilityNodeInfo;
            }
        }
    }
}

/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityNodeInfo.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module view {
        export module accessibility {
            export class AccessibilityWindowInfo extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public static TYPE_ACCESSIBILITY_OVERLAY: number;
                public static TYPE_APPLICATION: number;
                public static TYPE_INPUT_METHOD: number;
                public static TYPE_SYSTEM: number;

                public static obtain(): android.view.accessibility.AccessibilityWindowInfo;

                public recycle(): void;

                public getBoundsInScreen(param0: android.graphics.Rect): void;

                public getChildCount(): number;

                public static obtain(param0: android.view.accessibility.AccessibilityWindowInfo): android.view.accessibility.AccessibilityWindowInfo;

                public getType(): number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getId(): number;

                public toString(): string;

                public getParent(): android.view.accessibility.AccessibilityWindowInfo;

                public getLayer(): number;

                public getRoot(): android.view.accessibility.AccessibilityNodeInfo;

                public isAccessibilityFocused(): boolean;

                public equals(param0: javalangObject): boolean;

                public isFocused(): boolean;

                public hashCode(): number;

                public isActive(): boolean;

                public describeContents(): number;

                public getChild(param0: number): android.view.accessibility.AccessibilityWindowInfo;
            }
        }
    }
}

/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module android {
    export module view {
        export module accessibility {
            export class CaptioningManager extends javalangObject {
                public removeCaptioningChangeListener(param0: android.view.accessibility.CaptioningManager.CaptioningChangeListener): void;

                public isEnabled(): boolean;

                public getUserStyle(): android.view.accessibility.CaptioningManager.CaptionStyle;

                public addCaptioningChangeListener(param0: android.view.accessibility.CaptioningManager.CaptioningChangeListener): void;

                public getLocale(): javautilLocale;

                public getFontScale(): number;
            }
            export module CaptioningManager {
                export class CaptionStyle extends javalangObject {
                    public static EDGE_TYPE_DEPRESSED: number;
                    public static EDGE_TYPE_DROP_SHADOW: number;
                    public static EDGE_TYPE_NONE: number;
                    public static EDGE_TYPE_OUTLINE: number;
                    public static EDGE_TYPE_RAISED: number;
                    public static EDGE_TYPE_UNSPECIFIED: number;
                    public backgroundColor: number;
                    public edgeColor: number;
                    public edgeType: number;
                    public foregroundColor: number;
                    public windowColor: number;

                    public hasEdgeColor(): boolean;

                    public hasWindowColor(): boolean;

                    public hasEdgeType(): boolean;

                    public getTypeface(): android.graphics.Typeface;

                    public hasBackgroundColor(): boolean;

                    public hasForegroundColor(): boolean;
                }
                export abstract class CaptioningChangeListener extends javalangObject {
                    public onFontScaleChanged(param0: number): void;

                    public constructor();

                    public onUserStyleChanged(param0: android.view.accessibility.CaptioningManager.CaptionStyle): void;

                    public onLocaleChanged(param0: javautilLocale): void;

                    public onEnabledChanged(param0: boolean): void;
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
declare module android {
    export module view {
        export module animation {
            export class AccelerateDecelerateInterpolator extends android.view.animation.BaseInterpolator {
                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

                public getInterpolation(param0: number): number;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
declare module android {
    export module view {
        export module animation {
            export class AccelerateInterpolator extends android.view.animation.BaseInterpolator {
                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

                public getInterpolation(param0: number): number;

                public constructor(param0: number);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.animation.Transformation.d.ts" />
declare module android {
    export module view {
        export module animation {
            export class AlphaAnimation extends android.view.animation.Animation {
                public constructor(param0: number, param1: number);
                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

                public willChangeTransformationMatrix(): boolean;

                public applyTransformation(param0: number, param1: android.view.animation.Transformation): void;

                public willChangeBounds(): boolean;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.animation.Animation.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./android.view.animation.Transformation.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module view {
        export module animation {
            export abstract class Animation extends javalangObject implements javalangCloneable {
                public static ABSOLUTE: number;
                public static INFINITE: number;
                public static RELATIVE_TO_PARENT: number;
                public static RELATIVE_TO_SELF: number;
                public static RESTART: number;
                public static REVERSE: number;
                public static START_ON_FIRST_FRAME: number;
                public static ZORDER_BOTTOM: number;
                public static ZORDER_NORMAL: number;
                public static ZORDER_TOP: number;

                public getFillAfter(): boolean;

                public setDetachWallpaper(param0: boolean): void;

                public getFillBefore(): boolean;

                public constructor();

                public scaleCurrentDuration(param0: number): void;

                public hasEnded(): boolean;

                public getStartOffset(): number;

                public cancel(): void;

                public setStartOffset(param0: number): void;

                public hasStarted(): boolean;

                public setAnimationListener(param0: android.view.animation.Animation.AnimationListener): void;

                public applyTransformation(param0: number, param1: android.view.animation.Transformation): void;

                public getDetachWallpaper(): boolean;

                public setInterpolator(param0: android.content.Context, param1: number): void;

                public clone(): javalangObject;

                public getRepeatCount(): number;

                public setStartTime(param0: number): void;

                public startNow(): void;

                public clone(): android.view.animation.Animation;

                public willChangeTransformationMatrix(): boolean;

                public setInterpolator(param0: android.view.animation.Interpolator): void;

                public setRepeatMode(param0: number): void;

                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

                public setFillEnabled(param0: boolean): void;

                public willChangeBounds(): boolean;

                public ensureInterpolator(): void;

                public restrictDuration(param0: number): void;

                public getDuration(): number;

                public setZAdjustment(param0: number): void;

                public finalize(): void;

                public initialize(param0: number, param1: number, param2: number, param3: number): void;

                public getStartTime(): number;

                public reset(): void;

                public getZAdjustment(): number;

                public setFillBefore(param0: boolean): void;

                public start(): void;

                public isInitialized(): boolean;

                public setDuration(param0: number): void;

                public getTransformation(param0: number, param1: android.view.animation.Transformation, param2: number): boolean;

                public setBackgroundColor(param0: number): void;

                public getRepeatMode(): number;

                public getInterpolator(): android.view.animation.Interpolator;

                public computeDurationHint(): number;

                public getTransformation(param0: number, param1: android.view.animation.Transformation): boolean;

                public getBackgroundColor(): number;

                public getScaleFactor(): number;

                public setRepeatCount(param0: number): void;

                public setFillAfter(param0: boolean): void;

                public resolveSize(param0: number, param1: number, param2: number, param3: number): number;

                public isFillEnabled(): boolean;
            }
            export module Animation {
                export class AnimationListener extends javalangObject {
                    /**
                     * Constructs a new instance of the android.view.animation.Animation$AnimationListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onAnimationStart(param0: android.view.animation.Animation): void;
                        onAnimationEnd(param0: android.view.animation.Animation): void;
                        onAnimationRepeat(param0: android.view.animation.Animation): void;
                    });

                    public onAnimationStart(param0: android.view.animation.Animation): void;

                    public onAnimationEnd(param0: android.view.animation.Animation): void;

                    public onAnimationRepeat(param0: android.view.animation.Animation): void;
                }
                export class Description extends javalangObject {
                    public type: number;
                    public value: number;

                    public constructor();
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.animation.Animation.d.ts" />
/// <reference path="./android.view.animation.Transformation.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module view {
        export module animation {
            export class AnimationSet extends android.view.animation.Animation {
                public getDuration(): number;

                public constructor(param0: boolean);

                public initialize(param0: number, param1: number, param2: number, param3: number): void;

                public constructor();

                public getStartTime(): number;

                public scaleCurrentDuration(param0: number): void;

                public reset(): void;

                public setFillBefore(param0: boolean): void;

                public setStartOffset(param0: number): void;

                public setDuration(param0: number): void;

                public getTransformation(param0: number, param1: android.view.animation.Transformation, param2: number): boolean;

                public clone(): javalangObject;

                public setStartTime(param0: number): void;

                public clone(): android.view.animation.Animation;

                public willChangeTransformationMatrix(): boolean;

                public getAnimations(): javautilList;

                public computeDurationHint(): number;

                public getTransformation(param0: number, param1: android.view.animation.Transformation): boolean;

                public setRepeatMode(param0: number): void;

                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

                public addAnimation(param0: android.view.animation.Animation): void;

                public willChangeBounds(): boolean;

                public setFillAfter(param0: boolean): void;

                public restrictDuration(param0: number): void;

                public clone(): android.view.animation.AnimationSet;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.animation.Animation.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./android.view.animation.LayoutAnimationController.d.ts" />
declare module android {
    export module view {
        export module animation {
            export class AnimationUtils extends javalangObject {
                public static currentAnimationTimeMillis(): number;

                public static makeInChildBottomAnimation(param0: android.content.Context): android.view.animation.Animation;

                public static makeInAnimation(param0: android.content.Context, param1: boolean): android.view.animation.Animation;

                public static makeOutAnimation(param0: android.content.Context, param1: boolean): android.view.animation.Animation;

                public static loadInterpolator(param0: android.content.Context, param1: number): android.view.animation.Interpolator;

                public static loadLayoutAnimation(param0: android.content.Context, param1: number): android.view.animation.LayoutAnimationController;

                public constructor();

                public static loadAnimation(param0: android.content.Context, param1: number): android.view.animation.Animation;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
declare module android {
    export module view {
        export module animation {
            export class AnticipateInterpolator extends android.view.animation.BaseInterpolator {
                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

                public getInterpolation(param0: number): number;

                public constructor(param0: number);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
declare module android {
    export module view {
        export module animation {
            export class AnticipateOvershootInterpolator extends android.view.animation.BaseInterpolator {
                public constructor(param0: number, param1: number);
                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

                public getInterpolation(param0: number): number;

                public constructor(param0: number);
                public constructor();
            }
        }
    }
}

declare module android {
    export module view {
        export module animation {
            export abstract class BaseInterpolator extends javalangObject implements android.view.animation.Interpolator {
                public getInterpolation(param0: number): number;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
declare module android {
    export module view {
        export module animation {
            export class BounceInterpolator extends android.view.animation.BaseInterpolator {
                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

                public getInterpolation(param0: number): number;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
declare module android {
    export module view {
        export module animation {
            export class CycleInterpolator extends android.view.animation.BaseInterpolator {
                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

                public getInterpolation(param0: number): number;

                public constructor(param0: number);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
declare module android {
    export module view {
        export module animation {
            export class DecelerateInterpolator extends android.view.animation.BaseInterpolator {
                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

                public getInterpolation(param0: number): number;

                public constructor(param0: number);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.animation.Animation.d.ts" />
declare module android {
    export module view {
        export module animation {
            export class GridLayoutAnimationController extends android.view.animation.LayoutAnimationController {
                public static DIRECTION_BOTTOM_TO_TOP: number;
                public static DIRECTION_HORIZONTAL_MASK: number;
                public static DIRECTION_LEFT_TO_RIGHT: number;
                public static DIRECTION_RIGHT_TO_LEFT: number;
                public static DIRECTION_TOP_TO_BOTTOM: number;
                public static DIRECTION_VERTICAL_MASK: number;
                public static PRIORITY_COLUMN: number;
                public static PRIORITY_NONE: number;
                public static PRIORITY_ROW: number;

                public setDirectionPriority(param0: number): void;

                public constructor(param0: android.view.animation.Animation, param1: number, param2: number);

                public getRowDelay(): number;

                public setRowDelay(param0: number): void;

                public getDirectionPriority(): number;

                public willOverlap(): boolean;

                public getColumnDelay(): number;

                public getDelayForView(param0: android.view.View): number;

                public setColumnDelay(param0: number): void;

                public setDirection(param0: number): void;

                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

                public getDirection(): number;

                public constructor(param0: android.view.animation.Animation, param1: number);
                public constructor(param0: android.view.animation.Animation);
            }
            export module GridLayoutAnimationController {
                export class AnimationParameters extends android.view.animation.LayoutAnimationController.AnimationParameters {
                    public column: number;
                    public columnsCount: number;
                    public row: number;
                    public rowsCount: number;

                    public constructor();
                }
            }
        }
    }
}

declare module android {
    export module view {
        export module animation {
            export class Interpolator extends javalangObject implements android.animation.TimeInterpolator {
                /**
                 * Constructs a new instance of the android.view.animation.Interpolator interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getInterpolation(param0: number): number;
                });

                public getInterpolation(param0: number): number;
            }
        }
    }
}

import javautilRandom = java.util.Random;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.animation.Animation.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./java.util.Random.d.ts" />
declare module android {
    export module view {
        export module animation {
            export class LayoutAnimationController extends javalangObject {
                public static ORDER_NORMAL: number;
                public static ORDER_RANDOM: number;
                public static ORDER_REVERSE: number;
                public mAnimation: android.view.animation.Animation;
                public mInterpolator: android.view.animation.Interpolator;
                public mRandomizer: javautilRandom;

                public setInterpolator(param0: android.content.Context, param1: number): void;

                public getAnimationForView(param0: android.view.View): android.view.animation.Animation;

                public setAnimation(param0: android.content.Context, param1: number): void;

                public getAnimation(): android.view.animation.Animation;

                public setOrder(param0: number): void;

                public getInterpolator(): android.view.animation.Interpolator;

                public willOverlap(): boolean;

                public getDelayForView(param0: android.view.View): number;

                public setInterpolator(param0: android.view.animation.Interpolator): void;

                public getDelay(): number;

                public setAnimation(param0: android.view.animation.Animation): void;

                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

                public isDone(): boolean;

                public constructor(param0: android.view.animation.Animation, param1: number);

                public start(): void;

                public getTransformedIndex(param0: android.view.animation.LayoutAnimationController.AnimationParameters): number;

                public setDelay(param0: number): void;

                public getOrder(): number;

                public constructor(param0: android.view.animation.Animation);
            }
            export module LayoutAnimationController {
                export class AnimationParameters extends javalangObject {
                    public count: number;
                    public index: number;

                    public constructor();
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
declare module android {
    export module view {
        export module animation {
            export class LinearInterpolator extends android.view.animation.BaseInterpolator {
                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

                public getInterpolation(param0: number): number;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
declare module android {
    export module view {
        export module animation {
            export class OvershootInterpolator extends android.view.animation.BaseInterpolator {
                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

                public getInterpolation(param0: number): number;

                public constructor(param0: number);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
declare module android {
    export module view {
        export module animation {
            export class PathInterpolator extends android.view.animation.BaseInterpolator {
                public constructor(param0: number, param1: number);
                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                public constructor(param0: number, param1: number, param2: number, param3: number);
                public constructor(param0: android.graphics.Path);

                public getInterpolation(param0: number): number;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.animation.Transformation.d.ts" />
declare module android {
    export module view {
        export module animation {
            export class RotateAnimation extends android.view.animation.Animation {
                public constructor(param0: number, param1: number);
                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                public constructor(param0: number, param1: number, param2: number, param3: number);

                public initialize(param0: number, param1: number, param2: number, param3: number): void;

                public applyTransformation(param0: number, param1: android.view.animation.Transformation): void;

                public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.animation.Transformation.d.ts" />
declare module android {
    export module view {
        export module animation {
            export class ScaleAnimation extends android.view.animation.Animation {
                public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number);
                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                public constructor(param0: number, param1: number, param2: number, param3: number);

                public initialize(param0: number, param1: number, param2: number, param3: number): void;

                public applyTransformation(param0: number, param1: android.view.animation.Transformation): void;

                public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.graphics.Matrix.d.ts" />
declare module android {
    export module view {
        export module animation {
            export class Transformation extends javalangObject {
                public static TYPE_ALPHA: number;
                public static TYPE_BOTH: number;
                public static TYPE_IDENTITY: number;
                public static TYPE_MATRIX: number;
                public mAlpha: number;
                public mMatrix: android.graphics.Matrix;
                public mTransformationType: number;

                public setTransformationType(param0: number): void;

                public getMatrix(): android.graphics.Matrix;

                public clear(): void;

                public setAlpha(param0: number): void;

                public getAlpha(): number;

                public compose(param0: android.view.animation.Transformation): void;

                public toString(): string;

                public getTransformationType(): number;

                public set(param0: android.view.animation.Transformation): void;

                public toShortString(): string;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.animation.Transformation.d.ts" />
declare module android {
    export module view {
        export module animation {
            export class TranslateAnimation extends android.view.animation.Animation {
                public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number);
                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                public constructor(param0: number, param1: number, param2: number, param3: number);

                public initialize(param0: number, param1: number, param2: number, param3: number): void;

                public applyTransformation(param0: number, param1: android.view.animation.Transformation): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.inputmethod.CompletionInfo.d.ts" />
/// <reference path="./android.view.inputmethod.CorrectionInfo.d.ts" />
/// <reference path="./android.view.inputmethod.ExtractedText.d.ts" />
/// <reference path="./android.view.inputmethod.ExtractedTextRequest.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module view {
        export module inputmethod {
            export class BaseInputConnection extends javalangObject implements android.view.inputmethod.InputConnection {
                public performPrivateCommand(param0: string, param1: android.os.Bundle): boolean;

                public clearMetaKeyStates(param0: number): boolean;

                public commitCompletion(param0: android.view.inputmethod.CompletionInfo): boolean;

                public deleteSurroundingText(param0: number, param1: number): boolean;

                public getTextAfterCursor(param0: number, param1: number): string;

                public commitText(param0: string, param1: number): boolean;

                public getSelectedText(param0: number): string;

                public performEditorAction(param0: number): boolean;

                public static getComposingSpanStart(param0: android.text.Spannable): number;

                public commitCorrection(param0: android.view.inputmethod.CorrectionInfo): boolean;

                public getExtractedText(param0: android.view.inputmethod.ExtractedTextRequest, param1: number): android.view.inputmethod.ExtractedText;

                public getCursorCapsMode(param0: number): number;

                public getEditable(): android.text.Editable;

                public beginBatchEdit(): boolean;

                public setSelection(param0: number, param1: number): boolean;

                public sendKeyEvent(param0: android.view.KeyEvent): boolean;

                public static removeComposingSpans(param0: android.text.Spannable): void;

                public static setComposingSpans(param0: android.text.Spannable): void;

                public getTextBeforeCursor(param0: number, param1: number): string;

                public finishComposingText(): boolean;

                public performContextMenuAction(param0: number): boolean;

                public endBatchEdit(): boolean;

                public constructor(param0: android.view.View, param1: boolean);

                public setComposingRegion(param0: number, param1: number): boolean;

                public static getComposingSpanEnd(param0: android.text.Spannable): number;

                public setComposingText(param0: string, param1: number): boolean;

                public requestCursorUpdates(param0: number): boolean;

                public reportFullscreenMode(param0: boolean): boolean;
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module view {
        export module inputmethod {
            export class CompletionInfo extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public constructor(param0: number, param1: number, param2: string, param3: string);

                public getLabel(): string;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public constructor(param0: number, param1: number, param2: string);

                public getId(): number;

                public describeContents(): number;

                public getPosition(): number;

                public toString(): string;

                public getText(): string;
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module view {
        export module inputmethod {
            export class CorrectionInfo extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public getOffset(): number;

                public getNewText(): string;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public getOldText(): string;

                public toString(): string;

                public constructor(param0: number, param1: string, param2: string);
            }
        }
    }
}

/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.inputmethod.CursorAnchorInfo.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module view {
        export module inputmethod {
            export class CursorAnchorInfo extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public static FLAG_HAS_INVISIBLE_REGION: number;
                public static FLAG_HAS_VISIBLE_REGION: number;
                public static FLAG_IS_RTL: number;

                public getInsertionMarkerBaseline(): number;

                public getMatrix(): android.graphics.Matrix;

                public getInsertionMarkerHorizontal(): number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getSelectionEnd(): number;

                public getComposingText(): string;

                public toString(): string;

                public getSelectionStart(): number;

                public getComposingTextStart(): number;

                public getCharacterBoundsFlags(param0: number): number;

                public getCharacterBounds(param0: number): android.graphics.RectF;

                public constructor(param0: android.os.Parcel);

                public equals(param0: javalangObject): boolean;

                public hashCode(): number;

                public describeContents(): number;

                public getInsertionMarkerTop(): number;

                public getInsertionMarkerBottom(): number;

                public getInsertionMarkerFlags(): number;
            }
            export module CursorAnchorInfo {
                export class Builder extends javalangObject {
                    public build(): android.view.inputmethod.CursorAnchorInfo;

                    public reset(): void;

                    public constructor();

                    public setInsertionMarkerLocation(param0: number, param1: number, param2: number, param3: number, param4: number): android.view.inputmethod.CursorAnchorInfo.Builder;

                    public setMatrix(param0: android.graphics.Matrix): android.view.inputmethod.CursorAnchorInfo.Builder;

                    public setComposingText(param0: number, param1: string): android.view.inputmethod.CursorAnchorInfo.Builder;

                    public setSelectionRange(param0: number, param1: number): android.view.inputmethod.CursorAnchorInfo.Builder;

                    public addCharacterBounds(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): android.view.inputmethod.CursorAnchorInfo.Builder;
                }
            }
        }
    }
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module view {
        export module inputmethod {
            export class EditorInfo extends javalangObject implements android.text.InputType, android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public static IME_ACTION_DONE: number;
                public static IME_ACTION_GO: number;
                public static IME_ACTION_NEXT: number;
                public static IME_ACTION_NONE: number;
                public static IME_ACTION_PREVIOUS: number;
                public static IME_ACTION_SEARCH: number;
                public static IME_ACTION_SEND: number;
                public static IME_ACTION_UNSPECIFIED: number;
                public static IME_FLAG_FORCE_ASCII: number;
                public static IME_FLAG_NAVIGATE_NEXT: number;
                public static IME_FLAG_NAVIGATE_PREVIOUS: number;
                public static IME_FLAG_NO_ACCESSORY_ACTION: number;
                public static IME_FLAG_NO_ENTER_ACTION: number;
                public static IME_FLAG_NO_EXTRACT_UI: number;
                public static IME_FLAG_NO_FULLSCREEN: number;
                public static IME_MASK_ACTION: number;
                public static IME_NULL: number;
                public actionId: number;
                public actionLabel: string;
                public extras: android.os.Bundle;
                public fieldId: number;
                public fieldName: string;
                public hintText: string;
                public imeOptions: number;
                public initialCapsMode: number;
                public initialSelEnd: number;
                public initialSelStart: number;
                public inputType: number;
                public label: string;
                public packageName: string;
                public privateImeOptions: string;

                public makeCompatible(param0: number): void;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public dump(param0: android.util.Printer, param1: string): void;

                public describeContents(): number;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module view {
        export module inputmethod {
            export class ExtractedText extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public static FLAG_SELECTING: number;
                public static FLAG_SINGLE_LINE: number;
                public flags: number;
                public partialEndOffset: number;
                public partialStartOffset: number;
                public selectionEnd: number;
                public selectionStart: number;
                public startOffset: number;
                public text: string;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module view {
        export module inputmethod {
            export class ExtractedTextRequest extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public flags: number;
                public hintMaxChars: number;
                public hintMaxLines: number;
                public token: number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.inputmethod.InputConnection.d.ts" />
declare module android {
    export module view {
        export module inputmethod {
            export class InputBinding extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public getConnectionToken(): android.os.IBinder;

                public getUid(): number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public constructor(param0: android.view.inputmethod.InputConnection, param1: android.os.IBinder, param2: number, param3: number);

                public getPid(): number;

                public describeContents(): number;

                public toString(): string;

                public constructor(param0: android.view.inputmethod.InputConnection, param1: android.view.inputmethod.InputBinding);

                public getConnection(): android.view.inputmethod.InputConnection;
            }
        }
    }
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.inputmethod.CompletionInfo.d.ts" />
/// <reference path="./android.view.inputmethod.CorrectionInfo.d.ts" />
/// <reference path="./android.view.inputmethod.ExtractedText.d.ts" />
/// <reference path="./android.view.inputmethod.ExtractedTextRequest.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module view {
        export module inputmethod {
            export class InputConnection extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.inputmethod.InputConnection interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getTextBeforeCursor(param0: number, param1: number): string;
                    getTextAfterCursor(param0: number, param1: number): string;
                    getSelectedText(param0: number): string;
                    getCursorCapsMode(param0: number): number;
                    getExtractedText(param0: android.view.inputmethod.ExtractedTextRequest, param1: number): android.view.inputmethod.ExtractedText;
                    deleteSurroundingText(param0: number, param1: number): boolean;
                    setComposingText(param0: string, param1: number): boolean;
                    setComposingRegion(param0: number, param1: number): boolean;
                    finishComposingText(): boolean;
                    commitText(param0: string, param1: number): boolean;
                    commitCompletion(param0: android.view.inputmethod.CompletionInfo): boolean;
                    commitCorrection(param0: android.view.inputmethod.CorrectionInfo): boolean;
                    setSelection(param0: number, param1: number): boolean;
                    performEditorAction(param0: number): boolean;
                    performContextMenuAction(param0: number): boolean;
                    beginBatchEdit(): boolean;
                    endBatchEdit(): boolean;
                    sendKeyEvent(param0: android.view.KeyEvent): boolean;
                    clearMetaKeyStates(param0: number): boolean;
                    reportFullscreenMode(param0: boolean): boolean;
                    performPrivateCommand(param0: string, param1: android.os.Bundle): boolean;
                    requestCursorUpdates(param0: number): boolean;
                });

                public static GET_EXTRACTED_TEXT_MONITOR: number;
                public static CURSOR_UPDATE_IMMEDIATE: number;
                public static GET_TEXT_WITH_STYLES: number;
                public static CURSOR_UPDATE_MONITOR: number;

                public performPrivateCommand(param0: string, param1: android.os.Bundle): boolean;

                public getTextBeforeCursor(param0: number, param1: number): string;

                public clearMetaKeyStates(param0: number): boolean;

                public finishComposingText(): boolean;

                public deleteSurroundingText(param0: number, param1: number): boolean;

                public commitCompletion(param0: android.view.inputmethod.CompletionInfo): boolean;

                public getTextAfterCursor(param0: number, param1: number): string;

                public getSelectedText(param0: number): string;

                public commitText(param0: string, param1: number): boolean;

                public performContextMenuAction(param0: number): boolean;

                public performEditorAction(param0: number): boolean;

                public endBatchEdit(): boolean;

                public setComposingRegion(param0: number, param1: number): boolean;

                public commitCorrection(param0: android.view.inputmethod.CorrectionInfo): boolean;

                public getExtractedText(param0: android.view.inputmethod.ExtractedTextRequest, param1: number): android.view.inputmethod.ExtractedText;

                public getCursorCapsMode(param0: number): number;

                public setComposingText(param0: string, param1: number): boolean;

                public beginBatchEdit(): boolean;

                public setSelection(param0: number, param1: number): boolean;

                public requestCursorUpdates(param0: number): boolean;

                public sendKeyEvent(param0: android.view.KeyEvent): boolean;

                public reportFullscreenMode(param0: boolean): boolean;
            }
        }
    }
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.inputmethod.CompletionInfo.d.ts" />
/// <reference path="./android.view.inputmethod.CorrectionInfo.d.ts" />
/// <reference path="./android.view.inputmethod.ExtractedText.d.ts" />
/// <reference path="./android.view.inputmethod.ExtractedTextRequest.d.ts" />
/// <reference path="./android.view.inputmethod.InputConnection.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module view {
        export module inputmethod {
            export class InputConnectionWrapper extends javalangObject implements android.view.inputmethod.InputConnection {
                public setTarget(param0: android.view.inputmethod.InputConnection): void;

                public performPrivateCommand(param0: string, param1: android.os.Bundle): boolean;

                public getTextBeforeCursor(param0: number, param1: number): string;

                public clearMetaKeyStates(param0: number): boolean;

                public constructor(param0: android.view.inputmethod.InputConnection, param1: boolean);

                public finishComposingText(): boolean;

                public deleteSurroundingText(param0: number, param1: number): boolean;

                public commitCompletion(param0: android.view.inputmethod.CompletionInfo): boolean;

                public getTextAfterCursor(param0: number, param1: number): string;

                public getSelectedText(param0: number): string;

                public commitText(param0: string, param1: number): boolean;

                public performContextMenuAction(param0: number): boolean;

                public performEditorAction(param0: number): boolean;

                public endBatchEdit(): boolean;

                public setComposingRegion(param0: number, param1: number): boolean;

                public commitCorrection(param0: android.view.inputmethod.CorrectionInfo): boolean;

                public getExtractedText(param0: android.view.inputmethod.ExtractedTextRequest, param1: number): android.view.inputmethod.ExtractedText;

                public getCursorCapsMode(param0: number): number;

                public setComposingText(param0: string, param1: number): boolean;

                public beginBatchEdit(): boolean;

                public setSelection(param0: number, param1: number): boolean;

                public requestCursorUpdates(param0: number): boolean;

                public sendKeyEvent(param0: android.view.KeyEvent): boolean;

                public reportFullscreenMode(param0: boolean): boolean;
            }
        }
    }
}

/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.ResultReceiver.d.ts" />
/// <reference path="./android.view.inputmethod.EditorInfo.d.ts" />
/// <reference path="./android.view.inputmethod.InputBinding.d.ts" />
/// <reference path="./android.view.inputmethod.InputConnection.d.ts" />
/// <reference path="./android.view.inputmethod.InputMethodSession.d.ts" />
/// <reference path="./android.view.inputmethod.InputMethodSubtype.d.ts" />
declare module android {
    export module view {
        export module inputmethod {
            export class InputMethod extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.inputmethod.InputMethod interface with the provided implementation.
                 */
                public constructor(implementation: {
                    attachToken(param0: android.os.IBinder): void;
                    bindInput(param0: android.view.inputmethod.InputBinding): void;
                    unbindInput(): void;
                    startInput(param0: android.view.inputmethod.InputConnection, param1: android.view.inputmethod.EditorInfo): void;
                    restartInput(param0: android.view.inputmethod.InputConnection, param1: android.view.inputmethod.EditorInfo): void;
                    createSession(param0: android.view.inputmethod.InputMethod.SessionCallback): void;
                    setSessionEnabled(param0: android.view.inputmethod.InputMethodSession, param1: boolean): void;
                    revokeSession(param0: android.view.inputmethod.InputMethodSession): void;
                    showSoftInput(param0: number, param1: android.os.ResultReceiver): void;
                    hideSoftInput(param0: number, param1: android.os.ResultReceiver): void;
                    changeInputMethodSubtype(param0: android.view.inputmethod.InputMethodSubtype): void;
                });

                public static SERVICE_INTERFACE: string;
                public static SHOW_EXPLICIT: number;
                public static SHOW_FORCED: number;
                public static SERVICE_META_DATA: string;

                public startInput(param0: android.view.inputmethod.InputConnection, param1: android.view.inputmethod.EditorInfo): void;

                public bindInput(param0: android.view.inputmethod.InputBinding): void;

                public restartInput(param0: android.view.inputmethod.InputConnection, param1: android.view.inputmethod.EditorInfo): void;

                public setSessionEnabled(param0: android.view.inputmethod.InputMethodSession, param1: boolean): void;

                public unbindInput(): void;

                public showSoftInput(param0: number, param1: android.os.ResultReceiver): void;

                public hideSoftInput(param0: number, param1: android.os.ResultReceiver): void;

                public revokeSession(param0: android.view.inputmethod.InputMethodSession): void;

                public attachToken(param0: android.os.IBinder): void;

                public createSession(param0: android.view.inputmethod.InputMethod.SessionCallback): void;

                public changeInputMethodSubtype(param0: android.view.inputmethod.InputMethodSubtype): void;
            }
            export module InputMethod {
                export class SessionCallback extends javalangObject {
                    /**
                     * Constructs a new instance of the android.view.inputmethod.InputMethod$SessionCallback interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        sessionCreated(param0: android.view.inputmethod.InputMethodSession): void;
                    });

                    public sessionCreated(param0: android.view.inputmethod.InputMethodSession): void;
                }
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
/// <reference path="./android.view.inputmethod.InputMethodSubtype.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module view {
        export module inputmethod {
            export class InputMethodInfo extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public getServiceName(): string;

                public constructor(param0: android.content.Context, param1: android.content.pm.ResolveInfo);

                public getId(): string;

                public getIsDefaultResourceId(): number;

                public loadLabel(param0: android.content.pm.PackageManager): string;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getPackageName(): string;

                public loadIcon(param0: android.content.pm.PackageManager): android.graphics.drawable.Drawable;

                public getSettingsActivity(): string;

                public dump(param0: android.util.Printer, param1: string): void;

                public getComponent(): android.content.ComponentName;

                public getServiceInfo(): android.content.pm.ServiceInfo;

                public toString(): string;

                public getSubtypeCount(): number;

                public getSubtypeAt(param0: number): android.view.inputmethod.InputMethodSubtype;

                public equals(param0: javalangObject): boolean;

                public constructor(param0: string, param1: string, param2: string, param3: string);

                public hashCode(): number;

                public describeContents(): number;
            }
        }
    }
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.ResultReceiver.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.inputmethod.CompletionInfo.d.ts" />
/// <reference path="./android.view.inputmethod.CursorAnchorInfo.d.ts" />
/// <reference path="./android.view.inputmethod.ExtractedText.d.ts" />
/// <reference path="./android.view.inputmethod.InputMethodInfo.d.ts" />
/// <reference path="./android.view.inputmethod.InputMethodSubtype.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module android {
    export module view {
        export module inputmethod {
            export class InputMethodManager extends javalangObject {
                public static HIDE_IMPLICIT_ONLY: number;
                public static HIDE_NOT_ALWAYS: number;
                public static RESULT_HIDDEN: number;
                public static RESULT_SHOWN: number;
                public static RESULT_UNCHANGED_HIDDEN: number;
                public static RESULT_UNCHANGED_SHOWN: number;
                public static SHOW_FORCED: number;
                public static SHOW_IMPLICIT: number;

                public getInputMethodList(): javautilList;

                public showSoftInput(param0: android.view.View, param1: number): boolean;

                public isFullscreenMode(): boolean;

                public isWatchingCursor(param0: android.view.View): boolean;

                public getCurrentInputMethodSubtype(): android.view.inputmethod.InputMethodSubtype;

                public isAcceptingText(): boolean;

                public viewClicked(param0: android.view.View): void;

                public getShortcutInputMethodsAndSubtypes(): javautilMap;

                public updateCursor(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

                public setAdditionalInputMethodSubtypes(param0: string, param1: native.Array<android.view.inputmethod.InputMethodSubtype>): void;

                public toggleSoftInputFromWindow(param0: android.os.IBinder, param1: number, param2: number): void;

                public sendAppPrivateCommand(param0: android.view.View, param1: string, param2: android.os.Bundle): void;

                public restartInput(param0: android.view.View): void;

                public showInputMethodPicker(): void;

                public getEnabledInputMethodSubtypeList(param0: android.view.inputmethod.InputMethodInfo, param1: boolean): javautilList;

                public setInputMethod(param0: android.os.IBinder, param1: string): void;

                public setInputMethodAndSubtype(param0: android.os.IBinder, param1: string, param2: android.view.inputmethod.InputMethodSubtype): void;

                public isActive(param0: android.view.View): boolean;

                public hideStatusIcon(param0: android.os.IBinder): void;

                public updateCursorAnchorInfo(param0: android.view.View, param1: android.view.inputmethod.CursorAnchorInfo): void;

                public getEnabledInputMethodList(): javautilList;

                public showSoftInputFromInputMethod(param0: android.os.IBinder, param1: number): void;

                public showInputMethodAndSubtypeEnabler(param0: string): void;

                public getLastInputMethodSubtype(): android.view.inputmethod.InputMethodSubtype;

                public showSoftInput(param0: android.view.View, param1: number, param2: android.os.ResultReceiver): boolean;

                public updateExtractedText(param0: android.view.View, param1: number, param2: android.view.inputmethod.ExtractedText): void;

                public hideSoftInputFromWindow(param0: android.os.IBinder, param1: number, param2: android.os.ResultReceiver): boolean;

                public shouldOfferSwitchingToNextInputMethod(param0: android.os.IBinder): boolean;

                public hideSoftInputFromWindow(param0: android.os.IBinder, param1: number): boolean;

                public switchToNextInputMethod(param0: android.os.IBinder, param1: boolean): boolean;

                public showStatusIcon(param0: android.os.IBinder, param1: string, param2: number): void;

                public isActive(): boolean;

                public hideSoftInputFromInputMethod(param0: android.os.IBinder, param1: number): void;

                public toggleSoftInput(param0: number, param1: number): void;

                public displayCompletions(param0: android.view.View, param1: native.Array<android.view.inputmethod.CompletionInfo>): void;

                public setCurrentInputMethodSubtype(param0: android.view.inputmethod.InputMethodSubtype): boolean;

                public updateSelection(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

                public switchToLastInputMethod(param0: android.os.IBinder): boolean;
            }
        }
    }
}

/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.inputmethod.CompletionInfo.d.ts" />
/// <reference path="./android.view.inputmethod.CursorAnchorInfo.d.ts" />
/// <reference path="./android.view.inputmethod.ExtractedText.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module view {
        export module inputmethod {
            export class InputMethodSession extends javalangObject {
                /**
                 * Constructs a new instance of the android.view.inputmethod.InputMethodSession interface with the provided implementation.
                 */
                public constructor(implementation: {
                    finishInput(): void;
                    updateSelection(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
                    viewClicked(param0: boolean): void;
                    updateCursor(param0: android.graphics.Rect): void;
                    displayCompletions(param0: native.Array<android.view.inputmethod.CompletionInfo>): void;
                    updateExtractedText(param0: number, param1: android.view.inputmethod.ExtractedText): void;
                    dispatchKeyEvent(param0: number, param1: android.view.KeyEvent, param2: android.view.inputmethod.InputMethodSession.EventCallback): void;
                    dispatchTrackballEvent(param0: number, param1: android.view.MotionEvent, param2: android.view.inputmethod.InputMethodSession.EventCallback): void;
                    dispatchGenericMotionEvent(param0: number, param1: android.view.MotionEvent, param2: android.view.inputmethod.InputMethodSession.EventCallback): void;
                    appPrivateCommand(param0: string, param1: android.os.Bundle): void;
                    toggleSoftInput(param0: number, param1: number): void;
                    updateCursorAnchorInfo(param0: android.view.inputmethod.CursorAnchorInfo): void;
                });

                public viewClicked(param0: boolean): void;

                public finishInput(): void;

                public updateCursor(param0: android.graphics.Rect): void;

                public dispatchTrackballEvent(param0: number, param1: android.view.MotionEvent, param2: android.view.inputmethod.InputMethodSession.EventCallback): void;

                public appPrivateCommand(param0: string, param1: android.os.Bundle): void;

                public toggleSoftInput(param0: number, param1: number): void;

                public updateSelection(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

                public dispatchGenericMotionEvent(param0: number, param1: android.view.MotionEvent, param2: android.view.inputmethod.InputMethodSession.EventCallback): void;

                public displayCompletions(param0: native.Array<android.view.inputmethod.CompletionInfo>): void;

                public updateCursorAnchorInfo(param0: android.view.inputmethod.CursorAnchorInfo): void;

                public dispatchKeyEvent(param0: number, param1: android.view.KeyEvent, param2: android.view.inputmethod.InputMethodSession.EventCallback): void;

                public updateExtractedText(param0: number, param1: android.view.inputmethod.ExtractedText): void;
            }
            export module InputMethodSession {
                export class EventCallback extends javalangObject {
                    /**
                     * Constructs a new instance of the android.view.inputmethod.InputMethodSession$EventCallback interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        finishedEvent(param0: number, param1: boolean): void;
                    });

                    public finishedEvent(param0: number, param1: boolean): void;
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.pm.ApplicationInfo.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.inputmethod.InputMethodSubtype.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module view {
        export module inputmethod {
            export class InputMethodSubtype extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public getNameResId(): number;

                public constructor(param0: number, param1: number, param2: string, param3: string, param4: string, param5: boolean, param6: boolean, param7: number);

                public isAsciiCapable(): boolean;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getDisplayName(param0: android.content.Context, param1: string, param2: android.content.pm.ApplicationInfo): string;

                public containsExtraValueKey(param0: string): boolean;

                public getIconResId(): number;

                public getLocale(): string;

                public getExtraValue(): string;

                public overridesImplicitlyEnabledSubtype(): boolean;

                public getExtraValueOf(param0: string): string;

                public equals(param0: javalangObject): boolean;

                public hashCode(): number;

                public constructor(param0: number, param1: number, param2: string, param3: string, param4: string, param5: boolean, param6: boolean);

                public describeContents(): number;

                public getMode(): string;

                public isAuxiliary(): boolean;
            }
            export module InputMethodSubtype {
                export class InputMethodSubtypeBuilder extends javalangObject {
                    public setSubtypeIconResId(param0: number): android.view.inputmethod.InputMethodSubtype.InputMethodSubtypeBuilder;

                    public setSubtypeLocale(param0: string): android.view.inputmethod.InputMethodSubtype.InputMethodSubtypeBuilder;

                    public build(): android.view.inputmethod.InputMethodSubtype;

                    public setSubtypeId(param0: number): android.view.inputmethod.InputMethodSubtype.InputMethodSubtypeBuilder;

                    public setSubtypeNameResId(param0: number): android.view.inputmethod.InputMethodSubtype.InputMethodSubtypeBuilder;

                    public constructor();

                    public setOverridesImplicitlyEnabledSubtype(param0: boolean): android.view.inputmethod.InputMethodSubtype.InputMethodSubtypeBuilder;

                    public setSubtypeExtraValue(param0: string): android.view.inputmethod.InputMethodSubtype.InputMethodSubtypeBuilder;

                    public setSubtypeMode(param0: string): android.view.inputmethod.InputMethodSubtype.InputMethodSubtypeBuilder;

                    public setIsAuxiliary(param0: boolean): android.view.inputmethod.InputMethodSubtype.InputMethodSubtypeBuilder;

                    public setIsAsciiCapable(param0: boolean): android.view.inputmethod.InputMethodSubtype.InputMethodSubtypeBuilder;
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.textservice.SuggestionsInfo.d.ts" />
declare module android {
    export module view {
        export module textservice {
            export class SentenceSuggestionsInfo extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public getLengthAt(param0: number): number;

                public constructor(param0: native.Array<android.view.textservice.SuggestionsInfo>, param1: native.Array<number>, param2: native.Array<number>);
                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getOffsetAt(param0: number): number;

                public describeContents(): number;

                public getSuggestionsInfoAt(param0: number): android.view.textservice.SuggestionsInfo;

                public getSuggestionsCount(): number;
            }
        }
    }
}

/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.content.pm.ServiceInfo.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.textservice.SpellCheckerSubtype.d.ts" />
declare module android {
    export module view {
        export module textservice {
            export class SpellCheckerInfo extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public getSubtypeCount(): number;

                public getId(): string;

                public loadLabel(param0: android.content.pm.PackageManager): string;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getPackageName(): string;

                public loadIcon(param0: android.content.pm.PackageManager): android.graphics.drawable.Drawable;

                public getSettingsActivity(): string;

                public describeContents(): number;

                public getComponent(): android.content.ComponentName;

                public getServiceInfo(): android.content.pm.ServiceInfo;

                public getSubtypeAt(param0: number): android.view.textservice.SpellCheckerSubtype;
            }
        }
    }
}

/// <reference path="./android.view.textservice.SentenceSuggestionsInfo.d.ts" />
/// <reference path="./android.view.textservice.SpellCheckerInfo.d.ts" />
/// <reference path="./android.view.textservice.SuggestionsInfo.d.ts" />
/// <reference path="./android.view.textservice.TextInfo.d.ts" />
declare module android {
    export module view {
        export module textservice {
            export class SpellCheckerSession extends javalangObject {
                public static SERVICE_META_DATA: string;

                public close(): void;

                public getSuggestions(param0: android.view.textservice.TextInfo, param1: number): void;

                public finalize(): void;

                public cancel(): void;

                public getSentenceSuggestions(param0: native.Array<android.view.textservice.TextInfo>, param1: number): void;

                public isSessionDisconnected(): boolean;

                public getSpellChecker(): android.view.textservice.SpellCheckerInfo;

                public getSuggestions(param0: native.Array<android.view.textservice.TextInfo>, param1: number, param2: boolean): void;
            }
            export module SpellCheckerSession {
                export class SpellCheckerSessionListener extends javalangObject {
                    /**
                     * Constructs a new instance of the android.view.textservice.SpellCheckerSession$SpellCheckerSessionListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onGetSuggestions(param0: native.Array<android.view.textservice.SuggestionsInfo>): void;
                        onGetSentenceSuggestions(param0: native.Array<android.view.textservice.SentenceSuggestionsInfo>): void;
                    });

                    public onGetSentenceSuggestions(param0: native.Array<android.view.textservice.SentenceSuggestionsInfo>): void;

                    public onGetSuggestions(param0: native.Array<android.view.textservice.SuggestionsInfo>): void;
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.pm.ApplicationInfo.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module view {
        export module textservice {
            export class SpellCheckerSubtype extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public getNameResId(): number;

                public getExtraValue(): string;

                public getExtraValueOf(param0: string): string;

                public equals(param0: javalangObject): boolean;

                public hashCode(): number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public containsExtraValueKey(param0: string): boolean;

                public getDisplayName(param0: android.content.Context, param1: string, param2: android.content.pm.ApplicationInfo): string;

                public describeContents(): number;

                public getLocale(): string;

                public constructor(param0: number, param1: string, param2: string);
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module view {
        export module textservice {
            export class SuggestionsInfo extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public static RESULT_ATTR_HAS_RECOMMENDED_SUGGESTIONS: number;
                public static RESULT_ATTR_IN_THE_DICTIONARY: number;
                public static RESULT_ATTR_LOOKS_LIKE_TYPO: number;

                public constructor(param0: android.os.Parcel);

                public getSequence(): number;

                public constructor(param0: number, param1: native.Array<string>);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getCookie(): number;

                public setCookieAndSequence(param0: number, param1: number): void;

                public describeContents(): number;

                public getSuggestionAt(param0: number): string;

                public constructor(param0: number, param1: native.Array<string>, param2: number, param3: number);

                public getSuggestionsAttributes(): number;

                public getSuggestionsCount(): number;
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module view {
        export module textservice {
            export class TextInfo extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public constructor(param0: string, param1: number, param2: number, param3: number, param4: number);
                public constructor(param0: android.os.Parcel);

                public getSequence(): number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getCookie(): number;

                public describeContents(): number;

                public constructor(param0: string, param1: number, param2: number);
                public constructor(param0: string);

                public getCharSequence(): string;

                public getText(): string;
            }
        }
    }
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.textservice.SpellCheckerSession.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module android {
    export module view {
        export module textservice {
            export class TextServicesManager extends javalangObject {
                public newSpellCheckerSession(param0: android.os.Bundle, param1: javautilLocale, param2: android.view.textservice.SpellCheckerSession.SpellCheckerSessionListener, param3: boolean): android.view.textservice.SpellCheckerSession;
            }
        }
    }
}
