
/// <reference path="./android.gesture.GestureStroke.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module android {
    export module gesture {
        export class Gesture extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public getID(): number;

            public addStroke(param0: android.gesture.GestureStroke): void;

            public getLength(): number;

            public getBoundingBox(): android.graphics.RectF;

            public toPath(param0: android.graphics.Path, param1: number, param2: number, param3: number, param4: number): android.graphics.Path;

            public clone(): javalangObject;

            public toBitmap(param0: number, param1: number, param2: number, param3: number): android.graphics.Bitmap;

            public constructor();

            public toPath(): android.graphics.Path;
            public toPath(param0: android.graphics.Path): android.graphics.Path;

            public getStrokes(): javautilArrayList;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getStrokesCount(): number;

            public toBitmap(param0: number, param1: number, param2: number, param3: number, param4: number): android.graphics.Bitmap;

            public toPath(param0: number, param1: number, param2: number, param3: number): android.graphics.Path;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.gesture.GestureLibrary.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module gesture {
        export class GestureLibraries extends javalangObject {
            public static fromRawResource(param0: android.content.Context, param1: number): android.gesture.GestureLibrary;

            public static fromFile(param0: javaioFile): android.gesture.GestureLibrary;

            public static fromPrivateFile(param0: android.content.Context, param1: string): android.gesture.GestureLibrary;

            public static fromFile(param0: string): android.gesture.GestureLibrary;
        }
    }
}

/// <reference path="./android.gesture.Gesture.d.ts" />
/// <reference path="./android.gesture.GestureStore.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module android {
    export module gesture {
        export abstract class GestureLibrary extends javalangObject {
            public mStore: android.gesture.GestureStore;

            public isReadOnly(): boolean;

            public addGesture(param0: string, param1: android.gesture.Gesture): void;

            public removeEntry(param0: string): void;

            public save(): boolean;

            public setSequenceType(param0: number): void;

            public constructor();

            public getGestureEntries(): javautilSet;

            public getSequenceType(): number;

            public load(): boolean;

            public removeGesture(param0: string, param1: android.gesture.Gesture): void;

            public recognize(param0: android.gesture.Gesture): javautilArrayList;

            public setOrientationStyle(param0: number): void;

            public getOrientationStyle(): number;

            public getGestures(param0: string): javautilArrayList;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.gesture.Gesture.d.ts" />
/// <reference path="./android.gesture.GestureOverlayView.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module android {
    export module gesture {
        export class GestureOverlayView extends android.widget.FrameLayout {
            public static GESTURE_STROKE_TYPE_MULTIPLE: number;
            public static GESTURE_STROKE_TYPE_SINGLE: number;
            public static ORIENTATION_HORIZONTAL: number;
            public static ORIENTATION_VERTICAL: number;

            public removeAllOnGesturingListeners(): void;

            public addOnGestureListener(param0: android.gesture.GestureOverlayView.OnGestureListener): void;

            public cancelGesture(): void;

            public onStopNestedScroll(param0: android.view.View): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public isGestureVisible(): boolean;

            public onDetachedFromWindow(): void;

            public sendAccessibilityEvent(param0: number): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public canResolveTextAlignment(): boolean;

            public getParent(): android.view.ViewParent;

            public getFadeOffset(): number;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public setGestureStrokeWidth(param0: number): void;

            public setEventsInterceptionEnabled(param0: boolean): void;

            public addOnGesturingListener(param0: android.gesture.GestureOverlayView.OnGesturingListener): void;

            public setFadeEnabled(param0: boolean): void;

            public getLayoutDirection(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public setGestureStrokeSquarenessTreshold(param0: number): void;

            public focusSearch(param0: number): android.view.View;

            public recomputeViewAttributes(param0: android.view.View): void;

            public isLayoutRequested(): boolean;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public requestLayout(): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public addView(param0: android.view.View): void;

            public getGesturePath(param0: android.graphics.Path): android.graphics.Path;

            public canResolveTextDirection(): boolean;

            public isFadeEnabled(): boolean;

            public removeAllOnGestureListeners(): void;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public clear(param0: boolean): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public setGesture(param0: android.gesture.Gesture): void;

            public constructor(param0: android.content.Context);

            public removeAllOnGesturePerformedListeners(): void;

            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public setFadeOffset(param0: number): void;

            public setOrientation(param0: number): void;

            public getGesture(): android.gesture.Gesture;

            public requestFitSystemWindows(): void;

            public getGestureStrokeLengthThreshold(): number;

            public setGestureStrokeLengthThreshold(param0: number): void;

            public isLayoutDirectionResolved(): boolean;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public canResolveLayoutDirection(): boolean;

            public setGestureStrokeAngleThreshold(param0: number): void;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public getCurrentStroke(): javautilArrayList;

            public draw(param0: android.graphics.Canvas): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public setGestureColor(param0: number): void;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public getGestureStrokeSquarenessTreshold(): number;

            public getGesturePath(): android.graphics.Path;

            public addOnGesturePerformedListener(param0: android.gesture.GestureOverlayView.OnGesturePerformedListener): void;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;

            public setGestureStrokeType(param0: number): void;

            public getTextAlignment(): number;

            public isEventsInterceptionEnabled(): boolean;

            public setGestureVisible(param0: boolean): void;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public removeOnGestureListener(param0: android.gesture.GestureOverlayView.OnGestureListener): void;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public getGestureStrokeWidth(): number;

            public removeOnGesturingListener(param0: android.gesture.GestureOverlayView.OnGesturingListener): void;

            public setUncertainGestureColor(param0: number): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public getUncertainGestureColor(): number;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public getOrientation(): number;

            public getGestureStrokeAngleThreshold(): number;

            public cancelClearAnimation(): void;

            public getGestureColor(): number;

            public isTextAlignmentResolved(): boolean;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public getGestureStrokeType(): number;

            public removeOnGesturePerformedListener(param0: android.gesture.GestureOverlayView.OnGesturePerformedListener): void;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public isTextDirectionResolved(): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public isGesturing(): boolean;

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public addView(param0: android.view.View, param1: number): void;
        }
        export module GestureOverlayView {
            export class OnGestureListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.gesture.GestureOverlayView$OnGestureListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onGestureStarted(param0: android.gesture.GestureOverlayView, param1: android.view.MotionEvent): void;
                    onGesture(param0: android.gesture.GestureOverlayView, param1: android.view.MotionEvent): void;
                    onGestureEnded(param0: android.gesture.GestureOverlayView, param1: android.view.MotionEvent): void;
                    onGestureCancelled(param0: android.gesture.GestureOverlayView, param1: android.view.MotionEvent): void;
                });

                public onGestureEnded(param0: android.gesture.GestureOverlayView, param1: android.view.MotionEvent): void;

                public onGesture(param0: android.gesture.GestureOverlayView, param1: android.view.MotionEvent): void;

                public onGestureStarted(param0: android.gesture.GestureOverlayView, param1: android.view.MotionEvent): void;

                public onGestureCancelled(param0: android.gesture.GestureOverlayView, param1: android.view.MotionEvent): void;
            }
            export class OnGesturePerformedListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.gesture.GestureOverlayView$OnGesturePerformedListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onGesturePerformed(param0: android.gesture.GestureOverlayView, param1: android.gesture.Gesture): void;
                });

                public onGesturePerformed(param0: android.gesture.GestureOverlayView, param1: android.gesture.Gesture): void;
            }
            export class OnGesturingListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.gesture.GestureOverlayView$OnGesturingListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onGesturingStarted(param0: android.gesture.GestureOverlayView): void;
                    onGesturingEnded(param0: android.gesture.GestureOverlayView): void;
                });

                public onGesturingStarted(param0: android.gesture.GestureOverlayView): void;

                public onGesturingEnded(param0: android.gesture.GestureOverlayView): void;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module gesture {
        export class GesturePoint extends javalangObject {
            public timestamp: number;
            public x: number;
            public y: number;

            public constructor(param0: number, param1: number, param2: number);

            public clone(): javalangObject;
        }
    }
}

/// <reference path="./android.gesture.Gesture.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module android {
    export module gesture {
        export class GestureStore extends javalangObject {
            public static ORIENTATION_INVARIANT: number;
            public static ORIENTATION_SENSITIVE: number;
            public static SEQUENCE_INVARIANT: number;
            public static SEQUENCE_SENSITIVE: number;

            public addGesture(param0: string, param1: android.gesture.Gesture): void;

            public hasChanged(): boolean;

            public removeEntry(param0: string): void;

            public setSequenceType(param0: number): void;

            public constructor();

            public getGestureEntries(): javautilSet;

            public getSequenceType(): number;

            public save(param0: javaioOutputStream): void;

            public removeGesture(param0: string, param1: android.gesture.Gesture): void;

            public load(param0: javaioInputStream, param1: boolean): void;

            public save(param0: javaioOutputStream, param1: boolean): void;

            public recognize(param0: android.gesture.Gesture): javautilArrayList;

            public load(param0: javaioInputStream): void;

            public setOrientationStyle(param0: number): void;

            public getOrientationStyle(): number;

            public getGestures(param0: string): javautilArrayList;
        }
    }
}

/// <reference path="./android.gesture.OrientedBoundingBox.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module android {
    export module gesture {
        export class GestureStroke extends javalangObject {
            public boundingBox: android.graphics.RectF;
            public length: number;
            public points: native.Array<number>;

            public clearPath(): void;

            public constructor(param0: javautilArrayList);

            public clone(): javalangObject;

            public getPath(): android.graphics.Path;

            public toPath(param0: number, param1: number, param2: number): android.graphics.Path;

            public computeOrientedBoundingBox(): android.gesture.OrientedBoundingBox;
        }
    }
}

/// <reference path="./android.gesture.Gesture.d.ts" />
/// <reference path="./android.gesture.GestureStroke.d.ts" />
/// <reference path="./android.gesture.OrientedBoundingBox.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module android {
    export module gesture {
        export class GestureUtils extends javalangObject {
            public static spatialSampling(param0: android.gesture.Gesture, param1: number): native.Array<number>;

            public static computeOrientedBoundingBox(param0: native.Array<number>): android.gesture.OrientedBoundingBox;
            public static computeOrientedBoundingBox(param0: javautilArrayList): android.gesture.OrientedBoundingBox;

            public static spatialSampling(param0: android.gesture.Gesture, param1: number, param2: boolean): native.Array<number>;

            public static temporalSampling(param0: android.gesture.GestureStroke, param1: number): native.Array<number>;
        }
    }
}

declare module android {
    export module gesture {
        export class OrientedBoundingBox extends javalangObject {
            public centerX: number;
            public centerY: number;
            public height: number;
            public orientation: number;
            public squareness: number;
            public width: number;
        }
    }
}

declare module android {
    export module gesture {
        export class Prediction extends javalangObject {
            public name: string;
            public score: number;

            public toString(): string;
        }
    }
}
