
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.util.SparseBooleanArray.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityNodeInfo.d.ts" />
/// <reference path="./android.view.inputmethod.EditorInfo.d.ts" />
/// <reference path="./android.view.inputmethod.InputConnection.d.ts" />
/// <reference path="./android.widget.AbsListView.d.ts" />
/// <reference path="./android.widget.Adapter.d.ts" />
/// <reference path="./android.widget.ListAdapter.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module widget {
        export abstract class AbsListView extends android.widget.AdapterView implements android.text.TextWatcher, android.view.ViewTreeObserver.OnGlobalLayoutListener, android.widget.Filter.FilterListener, android.view.ViewTreeObserver.OnTouchModeChangeListener {
            public static CHOICE_MODE_MULTIPLE: number;
            public static CHOICE_MODE_MULTIPLE_MODAL: number;
            public static CHOICE_MODE_NONE: number;
            public static CHOICE_MODE_SINGLE: number;
            public static TRANSCRIPT_MODE_ALWAYS_SCROLL: number;
            public static TRANSCRIPT_MODE_DISABLED: number;
            public static TRANSCRIPT_MODE_NORMAL: number;

            public setScrollIndicators(param0: android.view.View, param1: android.view.View): void;

            public deferNotifyDataSetChanged(): void;

            public onCreateInputConnection(param0: android.view.inputmethod.EditorInfo): android.view.inputmethod.InputConnection;

            public smoothScrollToPositionFromTop(param0: number, param1: number, param2: number): void;

            public smoothScrollToPosition(param0: number, param1: number): void;

            public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;

            public onStopNestedScroll(param0: android.view.View): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onMeasure(param0: number, param1: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public invalidateViews(): void;

            public handleDataChanged(): void;

            public getBottomFadingEdgeStrength(): number;

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public setTextFilterEnabled(param0: boolean): void;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public getListPaddingTop(): number;

            public setSelectionFromTop(param0: number, param1: number): void;

            public setAdapter(param0: android.widget.ListAdapter): void;

            public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;

            public isFastScrollEnabled(): boolean;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public setAdapter(param0: android.widget.Adapter): void;

            public onDetachedFromWindow(): void;

            public sendAccessibilityEvent(param0: number): void;

            public setFriction(param0: number): void;

            public afterTextChanged(param0: android.text.Editable): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public canResolveTextAlignment(): boolean;

            public getParent(): android.view.ViewParent;

            public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public setScrollIndicators(param0: number): void;

            public isSmoothScrollbarEnabled(): boolean;

            public onCancelPendingInputEvents(): void;

            public setFilterText(param0: string): void;

            public computeVerticalScrollRange(): number;

            public dispatchDraw(param0: android.graphics.Canvas): void;

            public getLayoutDirection(): number;

            public setDrawSelectorOnTop(param0: boolean): void;

            public getCheckedItemPosition(): number;

            public setTranscriptMode(param0: number): void;

            public reclaimViews(param0: javautilList): void;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public setOverScrollMode(param0: number): void;

            public setStackFromBottom(param0: boolean): void;

            public isTextFilterEnabled(): boolean;

            public setSelector(param0: number): void;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public onTouchModeChanged(param0: boolean): void;

            public isLayoutRequested(): boolean;

            public computeVerticalScrollExtent(): number;

            public isFastScrollAlwaysVisible(): boolean;

            public getVerticalScrollbarWidth(): number;

            public getRightPaddingOffset(): number;

            public setVerticalScrollbarPosition(param0: number): void;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public getTopFadingEdgeStrength(): number;

            public setFastScrollEnabled(param0: boolean): void;

            public onGlobalLayout(): void;

            public getTextFilter(): string;

            public setSelector(param0: android.graphics.drawable.Drawable): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public setFastScrollAlwaysVisible(param0: boolean): void;

            public getCheckedItemPositions(): android.util.SparseBooleanArray;

            public performItemClick(param0: android.view.View, param1: number, param2: number): boolean;

            public setCacheColorHint(param0: number): void;

            public setScrollingCacheEnabled(param0: boolean): void;

            public setScrollBarStyle(param0: number): void;

            public requestLayout(): void;

            public onFilterComplete(param0: number): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public addView(param0: android.view.View): void;

            public scrollListBy(param0: number): void;

            public smoothScrollToPosition(param0: number): void;

            public canResolveTextDirection(): boolean;

            public onDisplayHint(param0: number): void;

            public dispatchDrawableHotspotChanged(param0: number, param1: number): void;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public canScrollList(param0: number): boolean;

            public constructor(param0: android.content.Context);

            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public onRtlPropertiesChanged(param0: number): void;

            public setChoiceMode(param0: number): void;

            public getSolidColor(): number;

            public requestFitSystemWindows(): void;

            public onOverScrolled(param0: number, param1: number, param2: boolean, param3: boolean): void;

            public getTopPaddingOffset(): number;

            public setMultiChoiceModeListener(param0: android.widget.AbsListView.MultiChoiceModeListener): void;

            public isItemChecked(param0: number): boolean;

            public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;

            public hasTextFilter(): boolean;

            public isStackFromBottom(): boolean;

            public getListPaddingBottom(): number;

            public isLayoutDirectionResolved(): boolean;

            public drawableStateChanged(): void;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public getCheckedItemIds(): native.Array<number>;

            public dispatchSetPressed(param0: boolean): void;

            public setItemChecked(param0: number, param1: boolean): void;

            public setSmoothScrollbarEnabled(param0: boolean): void;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public getFocusedRect(param0: android.graphics.Rect): void;

            public canResolveLayoutDirection(): boolean;

            public getContextMenuInfo(): android.view.ContextMenu.ContextMenuInfo;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public onFocusChanged(param0: boolean, param1: number, param2: android.graphics.Rect): void;

            public getListPaddingRight(): number;

            public setRemoteViewsAdapter(param0: android.content.Intent): void;

            public checkInputConnectionProxy(param0: android.view.View): boolean;

            public draw(param0: android.graphics.Canvas): void;

            public onRestoreInstanceState(param0: android.os.Parcelable): void;

            public onInterceptHoverEvent(param0: android.view.MotionEvent): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public addTouchables(param0: javautilArrayList): void;

            public verifyDrawable(param0: android.graphics.drawable.Drawable): boolean;

            public setOnScrollListener(param0: android.widget.AbsListView.OnScrollListener): void;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public computeVerticalScrollOffset(): number;

            public layoutChildren(): void;

            public getTextAlignment(): number;

            public setScrollIndicators(param0: number, param1: number): void;

            public getLeftPaddingOffset(): number;

            public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;

            public onWindowFocusChanged(param0: boolean): void;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onSaveInstanceState(): android.os.Parcelable;

            public pointToRowId(param0: number, param1: number): number;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;

            public getCheckedItemCount(): number;

            public getSelectedView(): android.view.View;

            public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;

            public getCacheColorHint(): number;

            public onRemoteAdapterConnected(): boolean;

            public clearChoices(): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public isPaddingOffsetRequired(): boolean;

            public clearTextFilter(): void;

            public getBottomPaddingOffset(): number;

            public jumpDrawablesToCurrentState(): void;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public setRecyclerListener(param0: android.widget.AbsListView.RecyclerListener): void;

            public getTranscriptMode(): number;

            public generateLayoutParams(param0: android.util.AttributeSet): android.widget.AbsListView.LayoutParams;

            public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;

            public isTextAlignmentResolved(): boolean;

            public getChoiceMode(): number;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public pointToPosition(param0: number, param1: number): number;

            public onRemoteAdapterDisconnected(): void;

            public setFastScrollStyle(param0: number): void;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public fling(param0: number): void;

            public onTouchEvent(param0: android.view.MotionEvent): boolean;

            public setVelocityScale(param0: number): void;

            public smoothScrollToPositionFromTop(param0: number, param1: number): void;

            public onInitializeAccessibilityNodeInfoForItem(param0: android.view.View, param1: number, param2: android.view.accessibility.AccessibilityNodeInfo): void;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public getSelector(): android.graphics.drawable.Drawable;

            public isTextDirectionResolved(): boolean;

            public smoothScrollBy(param0: number, param1: number): void;

            public isInFilterMode(): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public isScrollingCacheEnabled(): boolean;

            public getListPaddingLeft(): number;

            public onAttachedToWindow(): void;

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public addView(param0: android.view.View, param1: number): void;
        }
        export module AbsListView {
            export class LayoutParams extends android.view.ViewGroup.LayoutParams {
                public constructor(param0: number, param1: number);
                public constructor(param0: android.view.ViewGroup.LayoutParams);
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
            }
            export class MultiChoiceModeListener extends javalangObject implements android.view.ActionMode.Callback {
                /**
                 * Constructs a new instance of the android.widget.AbsListView$MultiChoiceModeListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onItemCheckedStateChanged(param0: android.view.ActionMode, param1: number, param2: number, param3: boolean): void;
                    onCreateActionMode(param0: android.view.ActionMode, param1: android.view.Menu): boolean;
                    onPrepareActionMode(param0: android.view.ActionMode, param1: android.view.Menu): boolean;
                    onActionItemClicked(param0: android.view.ActionMode, param1: android.view.MenuItem): boolean;
                    onDestroyActionMode(param0: android.view.ActionMode): void;
                });

                public onPrepareActionMode(param0: android.view.ActionMode, param1: android.view.Menu): boolean;

                public onActionItemClicked(param0: android.view.ActionMode, param1: android.view.MenuItem): boolean;

                public onCreateActionMode(param0: android.view.ActionMode, param1: android.view.Menu): boolean;

                public onItemCheckedStateChanged(param0: android.view.ActionMode, param1: number, param2: number, param3: boolean): void;

                public onDestroyActionMode(param0: android.view.ActionMode): void;
            }
            export class OnScrollListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.AbsListView$OnScrollListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onScrollStateChanged(param0: android.widget.AbsListView, param1: number): void;
                    onScroll(param0: android.widget.AbsListView, param1: number, param2: number, param3: number): void;
                });

                public static SCROLL_STATE_FLING: number;
                public static SCROLL_STATE_TOUCH_SCROLL: number;
                public static SCROLL_STATE_IDLE: number;

                public onScroll(param0: android.widget.AbsListView, param1: number, param2: number, param3: number): void;

                public onScrollStateChanged(param0: android.widget.AbsListView, param1: number): void;
            }
            export class RecyclerListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.AbsListView$RecyclerListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onMovedToScrapHeap(param0: android.view.View): void;
                });

                public onMovedToScrapHeap(param0: android.view.View): void;
            }
            export class SelectionBoundsAdjuster extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.AbsListView$SelectionBoundsAdjuster interface with the provided implementation.
                 */
                public constructor(implementation: {
                    adjustListItemSelectionBounds(param0: android.graphics.Rect): void;
                });

                public adjustListItemSelectionBounds(param0: android.graphics.Rect): void;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export abstract class AbsSeekBar extends android.widget.ProgressBar {
            public getSplitTrack(): boolean;

            public getAccessibilityClassName(): string;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public setThumbTintList(param0: android.content.res.ColorStateList): void;

            public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;

            public drawableStateChanged(): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onMeasure(param0: number, param1: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public setSplitTrack(param0: boolean): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public jumpDrawablesToCurrentState(): void;

            public setMax(param0: number): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public sendAccessibilityEvent(param0: number): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getThumb(): android.graphics.drawable.Drawable;

            public verifyDrawable(param0: android.graphics.drawable.Drawable): boolean;

            public onTouchEvent(param0: android.view.MotionEvent): boolean;

            public getThumbTintMode(): android.graphics.PorterDuff.Mode;

            public getThumbTintList(): android.content.res.ColorStateList;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public setThumbTintMode(param0: android.graphics.PorterDuff.Mode): void;

            public drawableHotspotChanged(param0: number, param1: number): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public setThumbOffset(param0: number): void;

            public constructor(param0: android.content.Context);

            public getKeyProgressIncrement(): number;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public setThumb(param0: android.graphics.drawable.Drawable): void;

            public onDraw(param0: android.graphics.Canvas): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public getThumbOffset(): number;

            public onRtlPropertiesChanged(param0: number): void;

            public setKeyProgressIncrement(param0: number): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.widget.Adapter.d.ts" />
/// <reference path="./android.widget.SpinnerAdapter.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export abstract class AbsSpinner extends android.widget.AdapterView {
            public setSelection(param0: number): void;

            public isLayoutDirectionResolved(): boolean;

            public setSelection(param0: number, param1: boolean): void;

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

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public getCount(): number;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public setAdapter(param0: android.widget.Adapter): void;

            public sendAccessibilityEvent(param0: number): void;

            public onRestoreInstanceState(param0: android.os.Parcelable): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getAdapter(): android.widget.SpinnerAdapter;

            public getParentForAccessibility(): android.view.ViewParent;

            public canResolveTextAlignment(): boolean;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public getParent(): android.view.ViewParent;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getLayoutDirection(): number;

            public getTextAlignment(): number;

            public setAdapter(param0: android.widget.SpinnerAdapter): void;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onSaveInstanceState(): android.os.Parcelable;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public isLayoutRequested(): boolean;

            public getSelectedView(): android.view.View;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public requestLayout(): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public isTextAlignmentResolved(): boolean;

            public addView(param0: android.view.View): void;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public pointToPosition(param0: number, param1: number): number;

            public canResolveTextDirection(): boolean;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public getAdapter(): android.widget.Adapter;

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
    }
}

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
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module widget {
        export class AbsoluteLayout extends android.view.ViewGroup {
            public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;

            public isLayoutDirectionResolved(): boolean;

            public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;

            public onStopNestedScroll(param0: android.view.View): void;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onMeasure(param0: number, param1: number): void;

            public shouldDelayChildPressedState(): boolean;

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

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getLayoutDirection(): number;

            public getTextAlignment(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;

            public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public focusSearch(param0: number): android.view.View;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public isLayoutRequested(): boolean;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public requestLayout(): void;

            public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;

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
        export module AbsoluteLayout {
            export class LayoutParams extends android.view.ViewGroup.LayoutParams {
                public x: number;
                public y: number;

                public constructor(param0: number, param1: number);
                public constructor(param0: android.view.ViewGroup.LayoutParams);

                public debug(param0: string): string;

                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                public constructor(param0: number, param1: number, param2: number, param3: number);
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class ActionMenuView extends android.widget.LinearLayout {
            public getMenu(): android.view.Menu;

            public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;

            public getOverflowIcon(): android.graphics.drawable.Drawable;

            public isLayoutDirectionResolved(): boolean;

            public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;

            public onStopNestedScroll(param0: android.view.View): void;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onMeasure(param0: number, param1: number): void;

            public setOnMenuItemClickListener(param0: android.widget.ActionMenuView.OnMenuItemClickListener): void;

            public dismissPopupMenus(): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public getPopupTheme(): number;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public canResolveLayoutDirection(): boolean;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.widget.ActionMenuView.LayoutParams;

            public hideOverflowMenu(): boolean;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public generateLayoutParams(param0: android.util.AttributeSet): android.widget.ActionMenuView.LayoutParams;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public onDetachedFromWindow(): void;

            public sendAccessibilityEvent(param0: number): void;

            public setOverflowIcon(param0: android.graphics.drawable.Drawable): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public canResolveTextAlignment(): boolean;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public getParent(): android.view.ViewParent;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getLayoutDirection(): number;

            public getTextAlignment(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public generateDefaultLayoutParams(): android.widget.ActionMenuView.LayoutParams;

            public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;

            public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public focusSearch(param0: number): android.view.View;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public showOverflowMenu(): boolean;

            public isLayoutRequested(): boolean;

            public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.widget.LinearLayout.LayoutParams;

            public generateDefaultLayoutParams(): android.widget.LinearLayout.LayoutParams;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public onConfigurationChanged(param0: android.content.res.Configuration): void;

            public requestLayout(): void;

            public generateLayoutParams(param0: android.util.AttributeSet): android.widget.LinearLayout.LayoutParams;

            public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;

            public childDrawableStateChanged(param0: android.view.View): void;

            public isTextAlignmentResolved(): boolean;

            public addView(param0: android.view.View): void;

            public removeView(param0: android.view.View): void;

            public isOverflowMenuShowing(): boolean;

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

            public setPopupTheme(param0: number): void;

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public requestFitSystemWindows(): void;

            public addView(param0: android.view.View, param1: number): void;
        }
        export module ActionMenuView {
            export class LayoutParams extends android.widget.LinearLayout.LayoutParams {
                public constructor(param0: number, param1: number);
                public constructor(param0: android.view.ViewGroup.LayoutParams);
                public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
                public constructor(param0: android.widget.ActionMenuView.LayoutParams);
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                public constructor(param0: android.widget.LinearLayout.LayoutParams);
            }
            export class OnMenuItemClickListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.ActionMenuView$OnMenuItemClickListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onMenuItemClick(param0: android.view.MenuItem): boolean;
                });

                public onMenuItemClick(param0: android.view.MenuItem): boolean;
            }
        }
    }
}

/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module widget {
        export class Adapter extends javalangObject {
            /**
             * Constructs a new instance of the android.widget.Adapter interface with the provided implementation.
             */
            public constructor(implementation: {
                registerDataSetObserver(param0: android.database.DataSetObserver): void;
                unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
                getCount(): number;
                getItem(param0: number): javalangObject;
                getItemId(param0: number): number;
                hasStableIds(): boolean;
                getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
                getItemViewType(param0: number): number;
                getViewTypeCount(): number;
                isEmpty(): boolean;
            });

            public static NO_SELECTION: number;
            public static IGNORE_ITEM_VIEW_TYPE: number;

            public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

            public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;

            public registerDataSetObserver(param0: android.database.DataSetObserver): void;

            public getItem(param0: number): javalangObject;

            public getItemViewType(param0: number): number;

            public isEmpty(): boolean;

            public getViewTypeCount(): number;

            public getItemId(param0: number): number;

            public hasStableIds(): boolean;

            public getCount(): number;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
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
/// <reference path="./android.widget.Adapter.d.ts" />
/// <reference path="./android.widget.AdapterView.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export abstract class AdapterView extends android.view.ViewGroup {
            public static INVALID_POSITION: number;
            public static INVALID_ROW_ID: number;
            public static ITEM_VIEW_TYPE_HEADER_OR_FOOTER: number;
            public static ITEM_VIEW_TYPE_IGNORE: number;

            public setSelection(param0: number): void;

            public onStopNestedScroll(param0: android.view.View): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public setOnItemClickListener(param0: android.widget.AdapterView.OnItemClickListener): void;

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public getOnItemClickListener(): android.widget.AdapterView.OnItemClickListener;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public setOnItemSelectedListener(param0: android.widget.AdapterView.OnItemSelectedListener): void;

            public getItemIdAtPosition(param0: number): number;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public setAdapter(param0: android.widget.Adapter): void;

            public onDetachedFromWindow(): void;

            public sendAccessibilityEvent(param0: number): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public getPositionForView(param0: android.view.View): number;

            public canResolveTextAlignment(): boolean;

            public getParent(): android.view.ViewParent;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public getLayoutDirection(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public recomputeViewAttributes(param0: android.view.View): void;

            public isLayoutRequested(): boolean;

            public getSelectedItemId(): number;

            public getEmptyView(): android.view.View;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public removeAllViews(): void;

            public getItemAtPosition(param0: number): javalangObject;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public performItemClick(param0: android.view.View, param1: number, param2: number): boolean;

            public requestLayout(): void;

            public addView(param0: android.view.View): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public canResolveTextDirection(): boolean;

            public getOnItemSelectedListener(): android.widget.AdapterView.OnItemSelectedListener;

            public getAdapter(): android.widget.Adapter;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context);

            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;

            public requestFitSystemWindows(): void;

            public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;

            public setFocusable(param0: boolean): void;

            public setFocusableInTouchMode(param0: boolean): void;

            public isLayoutDirectionResolved(): boolean;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public setOnClickListener(param0: android.view.View.OnClickListener): void;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public canResolveLayoutDirection(): boolean;

            public canAnimate(): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public getOnItemLongClickListener(): android.widget.AdapterView.OnItemLongClickListener;

            public getCount(): number;

            public getSelectedItem(): javalangObject;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public setEmptyView(param0: android.view.View): void;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getTextAlignment(): number;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public getSelectedView(): android.view.View;

            public setOnItemLongClickListener(param0: android.widget.AdapterView.OnItemLongClickListener): void;

            public removeViewAt(param0: number): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public getFirstVisiblePosition(): number;

            public dispatchSaveInstanceState(param0: android.util.SparseArray): void;

            public isTextAlignmentResolved(): boolean;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public getLastVisiblePosition(): number;

            public dispatchRestoreInstanceState(param0: android.util.SparseArray): void;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public isTextDirectionResolved(): boolean;

            public getSelectedItemPosition(): number;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public addView(param0: android.view.View, param1: number): void;
        }
        export module AdapterView {
            export class AdapterContextMenuInfo extends javalangObject implements android.view.ContextMenu.ContextMenuInfo {
                public id: number;
                public position: number;
                public targetView: android.view.View;

                public constructor(param0: android.view.View, param1: number, param2: number);
            }
            export class OnItemClickListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.AdapterView$OnItemClickListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onItemClick(param0: android.widget.AdapterView, param1: android.view.View, param2: number, param3: number): void;
                });

                public onItemClick(param0: android.widget.AdapterView, param1: android.view.View, param2: number, param3: number): void;
            }
            export class OnItemLongClickListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.AdapterView$OnItemLongClickListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onItemLongClick(param0: android.widget.AdapterView, param1: android.view.View, param2: number, param3: number): boolean;
                });

                public onItemLongClick(param0: android.widget.AdapterView, param1: android.view.View, param2: number, param3: number): boolean;
            }
            export class OnItemSelectedListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.AdapterView$OnItemSelectedListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onItemSelected(param0: android.widget.AdapterView, param1: android.view.View, param2: number, param3: number): void;
                    onNothingSelected(param0: android.widget.AdapterView): void;
                });

                public onItemSelected(param0: android.widget.AdapterView, param1: android.view.View, param2: number, param3: number): void;

                public onNothingSelected(param0: android.widget.AdapterView): void;
            }
        }
    }
}

/// <reference path="./android.animation.ObjectAnimator.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.widget.Adapter.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export abstract class AdapterViewAnimator extends android.widget.AdapterView implements android.widget.Advanceable {
            public setInAnimation(param0: android.content.Context, param1: number): void;

            public deferNotifyDataSetChanged(): void;

            public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;

            public setSelection(param0: number): void;

            public isLayoutDirectionResolved(): boolean;

            public onStopNestedScroll(param0: android.view.View): void;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onMeasure(param0: number, param1: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public setOutAnimation(param0: android.content.Context, param1: number): void;

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public getInAnimation(): android.animation.ObjectAnimator;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public canResolveLayoutDirection(): boolean;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public fyiWillBeAdvancedByHostKThx(): void;

            public setRemoteViewsAdapter(param0: android.content.Intent): void;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public setAdapter(param0: android.widget.Adapter): void;

            public setDisplayedChild(param0: number): void;

            public sendAccessibilityEvent(param0: number): void;

            public onRestoreInstanceState(param0: android.os.Parcelable): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public canResolveTextAlignment(): boolean;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public getParent(): android.view.ViewParent;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getLayoutDirection(): number;

            public setInAnimation(param0: android.animation.ObjectAnimator): void;

            public getTextAlignment(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onSaveInstanceState(): android.os.Parcelable;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public showNext(): void;

            public setAnimateFirstView(param0: boolean): void;

            public isLayoutRequested(): boolean;

            public getSelectedView(): android.view.View;

            public advance(): void;

            public getDisplayedChild(): number;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public onRemoteAdapterConnected(): boolean;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public getOutAnimation(): android.animation.ObjectAnimator;

            public showPrevious(): void;

            public getCurrentView(): android.view.View;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public setOutAnimation(param0: android.animation.ObjectAnimator): void;

            public getBaseline(): number;

            public requestLayout(): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public isTextAlignmentResolved(): boolean;

            public addView(param0: android.view.View): void;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public onRemoteAdapterDisconnected(): void;

            public canResolveTextDirection(): boolean;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public onTouchEvent(param0: android.view.MotionEvent): boolean;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public getAdapter(): android.widget.Adapter;

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
    }
}

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
/// <reference path="./android.widget.Adapter.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class AdapterViewFlipper extends android.widget.AdapterViewAnimator {
            public startFlipping(): void;

            public isLayoutDirectionResolved(): boolean;

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

            public stopFlipping(): void;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public fyiWillBeAdvancedByHostKThx(): void;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public setAdapter(param0: android.widget.Adapter): void;

            public onDetachedFromWindow(): void;

            public sendAccessibilityEvent(param0: number): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public canResolveTextAlignment(): boolean;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public getParent(): android.view.ViewParent;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getLayoutDirection(): number;

            public setFlipInterval(param0: number): void;

            public getTextAlignment(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public showNext(): void;

            public isLayoutRequested(): boolean;

            public advance(): void;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public isAutoStart(): boolean;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public showPrevious(): void;

            public onWindowVisibilityChanged(param0: number): void;

            public getFlipInterval(): number;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public requestLayout(): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public isTextAlignmentResolved(): boolean;

            public addView(param0: android.view.View): void;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public isFlipping(): boolean;

            public canResolveTextDirection(): boolean;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public isTextDirectionResolved(): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public setAutoStart(param0: boolean): void;

            public constructor(param0: android.content.Context);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public onAttachedToWindow(): void;

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public requestFitSystemWindows(): void;

            public addView(param0: android.view.View, param1: number): void;
        }
    }
}

declare module android {
    export module widget {
        export class Advanceable extends javalangObject {
            /**
             * Constructs a new instance of the android.widget.Advanceable interface with the provided implementation.
             */
            public constructor(implementation: {
                advance(): void;
                fyiWillBeAdvancedByHostKThx(): void;
            });

            public advance(): void;

            public fyiWillBeAdvancedByHostKThx(): void;
        }
    }
}

/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module widget {
        export class AlphabetIndexer extends android.database.DataSetObserver implements android.widget.SectionIndexer {
            public mAlphabet: string;
            public mColumnIndex: number;
            public mDataCursor: android.database.Cursor;

            public getPositionForSection(param0: number): number;

            public onInvalidated(): void;

            public getSections(): native.Array<javalangObject>;

            public constructor();

            public setCursor(param0: android.database.Cursor): void;

            public constructor(param0: android.database.Cursor, param1: number, param2: string);

            public compare(param0: string, param1: string): number;

            public getSectionForPosition(param0: number): number;

            public onChanged(): void;
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
    export module widget {
        export class AnalogClock extends android.view.View {
            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onMeasure(param0: number, param1: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context);

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public onDraw(param0: android.graphics.Canvas): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public onAttachedToWindow(): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public onDetachedFromWindow(): void;

            public sendAccessibilityEvent(param0: number): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.Filter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Comparator.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module widget {
        export class ArrayAdapter extends android.widget.BaseAdapter implements android.widget.Filterable, android.widget.ThemedSpinnerAdapter {
            public constructor(param0: android.content.Context, param1: number, param2: javautilList);

            public getFilter(): android.widget.Filter;

            public registerDataSetObserver(param0: android.database.DataSetObserver): void;

            public constructor(param0: android.content.Context, param1: number, param2: native.Array<javalangObject>);

            public getItemId(param0: number): number;

            public sort(param0: javautilComparator): void;

            public getPosition(param0: javalangObject): number;

            public hasStableIds(): boolean;

            public getDropDownViewTheme(): android.content.res.Resources.Theme;

            public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

            public getItem(param0: number): javalangObject;

            public insert(param0: javalangObject, param1: number): void;

            public addAll(param0: native.Array<javalangObject>): void;

            public constructor(param0: android.content.Context, param1: number, param2: number, param3: javautilList);

            public setDropDownViewTheme(param0: android.content.res.Resources.Theme): void;

            public isEnabled(param0: number): boolean;

            public getContext(): android.content.Context;

            public constructor(param0: android.content.Context, param1: number, param2: number, param3: native.Array<javalangObject>);

            public getCount(): number;

            public setNotifyOnChange(param0: boolean): void;

            public clear(): void;

            public addAll(param0: javautilCollection): void;

            public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;

            public isEmpty(): boolean;

            public remove(param0: javalangObject): void;

            public constructor();
            public constructor(param0: android.content.Context, param1: number);

            public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;

            public getItemViewType(param0: number): number;

            public getViewTypeCount(): number;

            public static createFromResource(param0: android.content.Context, param1: number, param2: number): android.widget.ArrayAdapter;

            public areAllItemsEnabled(): boolean;

            public add(param0: javalangObject): void;

            public setDropDownViewResource(param0: number): void;

            public constructor(param0: android.content.Context, param1: number, param2: number);

            public notifyDataSetChanged(): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.view.inputmethod.CompletionInfo.d.ts" />
/// <reference path="./android.widget.Filter.d.ts" />
/// <reference path="./android.widget.ListAdapter.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class AutoCompleteTextView extends android.widget.EditText implements android.widget.Filter.FilterListener {
            public getAdapter(): android.widget.ListAdapter;

            public setText(param0: native.Array<string>, param1: number, param2: number): void;

            public getValidator(): android.widget.AutoCompleteTextView.Validator;

            public setThreshold(param0: number): void;

            public performFiltering(param0: string, param1: number): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public getItemClickListener(): android.widget.AdapterView.OnItemClickListener;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public setOnItemClickListener(param0: android.widget.AdapterView.OnItemClickListener): void;

            public setFrame(param0: number, param1: number, param2: number, param3: number): boolean;

            public setOnClickListener(param0: android.view.View.OnClickListener): void;

            public setDropDownAnchor(param0: number): void;

            public getThreshold(): number;

            public getOnItemClickListener(): android.widget.AdapterView.OnItemClickListener;

            public getDropDownVerticalOffset(): number;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onFocusChanged(param0: boolean, param1: number, param2: android.graphics.Rect): void;

            public setDropDownWidth(param0: number): void;

            public setAdapter(param0: android.widget.ListAdapter): void;

            public performCompletion(): void;

            public setText(param0: number): void;

            public setOnItemSelectedListener(param0: android.widget.AdapterView.OnItemSelectedListener): void;

            public setListSelection(param0: number): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public onDetachedFromWindow(): void;

            public sendAccessibilityEvent(param0: number): void;

            public setDropDownBackgroundResource(param0: number): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public replaceText(param0: string): void;

            public setText(param0: string, param1: android.widget.TextView.BufferType): void;

            public setDropDownVerticalOffset(param0: number): void;

            public getListSelection(): number;

            public getDropDownHeight(): number;

            public getDropDownBackground(): android.graphics.drawable.Drawable;

            public getDropDownAnchor(): number;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public onKeyPreIme(param0: number, param1: android.view.KeyEvent): boolean;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public onWindowFocusChanged(param0: boolean): void;

            public setText(param0: string, param1: boolean): void;

            public convertSelectionToString(param0: javalangObject): string;

            public getFilter(): android.widget.Filter;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public getDropDownWidth(): number;

            public getItemSelectedListener(): android.widget.AdapterView.OnItemSelectedListener;

            public isPopupShowing(): boolean;

            public clearListSelection(): void;

            public setDropDownHorizontalOffset(param0: number): void;

            public getDropDownHorizontalOffset(): number;

            public setOnDismissListener(param0: android.widget.AutoCompleteTextView.OnDismissListener): void;

            public setCompletionHint(param0: string): void;

            public setValidator(param0: android.widget.AutoCompleteTextView.Validator): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public onPreDraw(): boolean;

            public onFilterComplete(param0: number): void;

            public setText(param0: string): void;

            public performValidation(): void;

            public getOnItemSelectedListener(): android.widget.AdapterView.OnItemSelectedListener;

            public onDisplayHint(param0: number): void;

            public setDropDownBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public setText(param0: number, param1: android.widget.TextView.BufferType): void;

            public enoughToFilter(): boolean;

            public isPerformingCompletion(): boolean;

            public dismissDropDown(): void;

            public constructor(param0: android.content.Context);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public getCompletionHint(): string;

            public setDropDownHeight(param0: number): void;

            public onAttachedToWindow(): void;

            public onCommitCompletion(param0: android.view.inputmethod.CompletionInfo): void;

            public showDropDown(): void;
        }
        export module AutoCompleteTextView {
            export class OnDismissListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.AutoCompleteTextView$OnDismissListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onDismiss(): void;
                });

                public onDismiss(): void;
            }
            export class Validator extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.AutoCompleteTextView$Validator interface with the provided implementation.
                 */
                public constructor(implementation: {
                    isValid(param0: string): boolean;
                    fixText(param0: string): string;
                });

                public isValid(param0: string): boolean;

                public fixText(param0: string): string;
            }
        }
    }
}

/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module widget {
        export abstract class BaseAdapter extends javalangObject implements android.widget.ListAdapter, android.widget.SpinnerAdapter {
            public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;

            public registerDataSetObserver(param0: android.database.DataSetObserver): void;

            public isEmpty(): boolean;

            public getItemId(param0: number): number;

            public hasStableIds(): boolean;

            public constructor();

            public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

            public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;

            public getItem(param0: number): javalangObject;

            public getItemViewType(param0: number): number;

            public getViewTypeCount(): number;

            public areAllItemsEnabled(): boolean;

            public isEnabled(param0: number): boolean;

            public getCount(): number;

            public notifyDataSetInvalidated(): void;

            public notifyDataSetChanged(): void;
        }
    }
}

/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module widget {
        export abstract class BaseExpandableListAdapter extends javalangObject implements android.widget.ExpandableListAdapter, android.widget.HeterogeneousExpandableList {
            public registerDataSetObserver(param0: android.database.DataSetObserver): void;

            public getGroup(param0: number): javalangObject;

            public getChildrenCount(param0: number): number;

            public getChildTypeCount(): number;

            public getChild(param0: number, param1: number): javalangObject;

            public hasStableIds(): boolean;

            public onGroupCollapsed(param0: number): void;

            public getCombinedGroupId(param0: number): number;

            public getGroupView(param0: number, param1: boolean, param2: android.view.View, param3: android.view.ViewGroup): android.view.View;

            public getChildView(param0: number, param1: number, param2: boolean, param3: android.view.View, param4: android.view.ViewGroup): android.view.View;

            public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

            public getGroupId(param0: number): number;

            public getGroupType(param0: number): number;

            public getCombinedChildId(param0: number, param1: number): number;

            public getGroupCount(): number;

            public isEmpty(): boolean;

            public getChildId(param0: number, param1: number): number;

            public constructor();

            public onGroupExpanded(param0: number): void;

            public isChildSelectable(param0: number, param1: number): boolean;

            public areAllItemsEnabled(): boolean;

            public getGroupTypeCount(): number;

            public getChildType(param0: number, param1: number): number;

            public notifyDataSetInvalidated(): void;

            public notifyDataSetChanged(): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class Button extends android.widget.TextView {
            public getAccessibilityClassName(): string;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context);

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public onPreDraw(): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public sendAccessibilityEvent(param0: number): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
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
/// <reference path="./android.widget.CalendarView.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class CalendarView extends android.widget.FrameLayout {
            public getWeekDayTextAppearance(): number;

            public getWeekNumberColor(): number;

            public onStopNestedScroll(param0: android.view.View): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public setOnDateChangeListener(param0: android.widget.CalendarView.OnDateChangeListener): void;

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public getWeekSeparatorLineColor(): number;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public setDateTextAppearance(param0: number): void;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public getDateTextAppearance(): number;

            public sendAccessibilityEvent(param0: number): void;

            public setWeekDayTextAppearance(param0: number): void;

            public setWeekNumberColor(param0: number): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public canResolveTextAlignment(): boolean;

            public getParent(): android.view.ViewParent;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public getLayoutDirection(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public getFocusedMonthDateColor(): number;

            public setSelectedDateVerticalBar(param0: android.graphics.drawable.Drawable): void;

            public setFirstDayOfWeek(param0: number): void;

            public getMinDate(): number;

            public setDate(param0: number, param1: boolean, param2: boolean): void;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public recomputeViewAttributes(param0: android.view.View): void;

            public isLayoutRequested(): boolean;

            public getShowWeekNumber(): boolean;

            public setDate(param0: number): void;

            public getShownWeekCount(): number;

            public getMaxDate(): number;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public onConfigurationChanged(param0: android.content.res.Configuration): void;

            public requestLayout(): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public addView(param0: android.view.View): void;

            public setSelectedDateVerticalBar(param0: number): void;

            public canResolveTextDirection(): boolean;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context);

            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public requestFitSystemWindows(): void;

            public setMinDate(param0: number): void;

            public isLayoutDirectionResolved(): boolean;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public getSelectedDateVerticalBar(): android.graphics.drawable.Drawable;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public canResolveLayoutDirection(): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public setMaxDate(param0: number): void;

            public setFocusedMonthDateColor(param0: number): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public setShownWeekCount(param0: number): void;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public setWeekSeparatorLineColor(param0: number): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public setUnfocusedMonthDateColor(param0: number): void;

            public getTextAlignment(): number;

            public getSelectedWeekBackgroundColor(): number;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public getDate(): number;

            public getUnfocusedMonthDateColor(): number;

            public getFirstDayOfWeek(): number;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public setSelectedWeekBackgroundColor(param0: number): void;

            public isTextAlignmentResolved(): boolean;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public setShowWeekNumber(param0: boolean): void;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public isTextDirectionResolved(): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public addView(param0: android.view.View, param1: number): void;
        }
        export module CalendarView {
            export class OnDateChangeListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.CalendarView$OnDateChangeListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onSelectedDayChange(param0: android.widget.CalendarView, param1: number, param2: number, param3: number): void;
                });

                public onSelectedDayChange(param0: android.widget.CalendarView, param1: number, param2: number, param3: number): void;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class CheckBox extends android.widget.CompoundButton {
            public getAccessibilityClassName(): string;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public setChecked(param0: boolean): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public isChecked(): boolean;

            public toggle(): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context);

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public onPreDraw(): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public sendAccessibilityEvent(param0: number): void;
        }
    }
}

declare module android {
    export module widget {
        export class Checkable extends javalangObject {
            /**
             * Constructs a new instance of the android.widget.Checkable interface with the provided implementation.
             */
            public constructor(implementation: {
                setChecked(param0: boolean): void;
                isChecked(): boolean;
                toggle(): void;
            });

            public setChecked(param0: boolean): void;

            public isChecked(): boolean;

            public toggle(): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class CheckedTextView extends android.widget.TextView implements android.widget.Checkable {
            public getAccessibilityClassName(): string;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public toggle(): void;

            public setCheckMarkTintMode(param0: android.graphics.PorterDuff.Mode): void;

            public drawableStateChanged(): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onCreateDrawableState(param0: number): native.Array<number>;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public setCheckMarkDrawable(param0: number): void;
            public setCheckMarkDrawable(param0: android.graphics.drawable.Drawable): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public setCheckMarkTintList(param0: android.content.res.ColorStateList): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public jumpDrawablesToCurrentState(): void;

            public onPreDraw(): boolean;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public sendAccessibilityEvent(param0: number): void;

            public setChecked(param0: boolean): void;

            public setVisibility(param0: number): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getCheckMarkDrawable(): android.graphics.drawable.Drawable;

            public isChecked(): boolean;

            public verifyDrawable(param0: android.graphics.drawable.Drawable): boolean;

            public getCheckMarkTintMode(): android.graphics.PorterDuff.Mode;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public drawableHotspotChanged(param0: number, param1: number): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public constructor(param0: android.content.Context);

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public getCheckMarkTintList(): android.content.res.ColorStateList;

            public onDraw(param0: android.graphics.Canvas): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public onRtlPropertiesChanged(param0: number): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.widget.Chronometer.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module widget {
        export class Chronometer extends android.widget.TextView {
            public getAccessibilityClassName(): string;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public setBase(param0: number): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public getBase(): number;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public getContentDescription(): string;

            public setOnChronometerTickListener(param0: android.widget.Chronometer.OnChronometerTickListener): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public stop(): void;

            public onWindowVisibilityChanged(param0: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public onPreDraw(): boolean;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public start(): void;

            public onDetachedFromWindow(): void;

            public sendAccessibilityEvent(param0: number): void;

            public setFormat(param0: string): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getOnChronometerTickListener(): android.widget.Chronometer.OnChronometerTickListener;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public constructor(param0: android.content.Context);

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public getFormat(): string;
        }
        export module Chronometer {
            export class OnChronometerTickListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.Chronometer$OnChronometerTickListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onChronometerTick(param0: android.widget.Chronometer): void;
                });

                public onChronometerTick(param0: android.widget.Chronometer): void;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.widget.CompoundButton.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export abstract class CompoundButton extends android.widget.Button implements android.widget.Checkable {
            public getAccessibilityClassName(): string;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public toggle(): void;

            public drawableStateChanged(): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public getButtonTintList(): android.content.res.ColorStateList;

            public onCreateDrawableState(param0: number): native.Array<number>;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public getCompoundPaddingRight(): number;

            public getButtonTintMode(): android.graphics.PorterDuff.Mode;

            public setOnCheckedChangeListener(param0: android.widget.CompoundButton.OnCheckedChangeListener): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public jumpDrawablesToCurrentState(): void;

            public onPreDraw(): boolean;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public sendAccessibilityEvent(param0: number): void;

            public onRestoreInstanceState(param0: android.os.Parcelable): void;

            public setChecked(param0: boolean): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public isChecked(): boolean;

            public getButtonDrawable(): android.graphics.drawable.Drawable;

            public setButtonTintMode(param0: android.graphics.PorterDuff.Mode): void;

            public setButtonDrawable(param0: number): void;

            public getCompoundPaddingLeft(): number;

            public verifyDrawable(param0: android.graphics.drawable.Drawable): boolean;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public drawableHotspotChanged(param0: number, param1: number): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public setButtonDrawable(param0: android.graphics.drawable.Drawable): void;

            public constructor(param0: android.content.Context);

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public onDraw(param0: android.graphics.Canvas): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public performClick(): boolean;

            public setButtonTintList(param0: android.content.res.ColorStateList): void;

            public onSaveInstanceState(): android.os.Parcelable;
        }
        export module CompoundButton {
            export class OnCheckedChangeListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.CompoundButton$OnCheckedChangeListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onCheckedChanged(param0: android.widget.CompoundButton, param1: boolean): void;
                });

                public onCheckedChanged(param0: android.widget.CompoundButton, param1: boolean): void;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.Filter.d.ts" />
/// <reference path="./android.widget.FilterQueryProvider.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module widget {
        export abstract class CursorAdapter extends android.widget.BaseAdapter implements android.widget.Filterable, android.widget.ThemedSpinnerAdapter {
            public static FLAG_AUTO_REQUERY: number;
            public static FLAG_REGISTER_CONTENT_OBSERVER: number;

            public getFilter(): android.widget.Filter;

            public registerDataSetObserver(param0: android.database.DataSetObserver): void;

            public getItemId(param0: number): number;

            public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: boolean);

            public hasStableIds(): boolean;

            public newView(param0: android.content.Context, param1: android.database.Cursor, param2: android.view.ViewGroup): android.view.View;

            public getDropDownViewTheme(): android.content.res.Resources.Theme;

            public init(param0: android.content.Context, param1: android.database.Cursor, param2: boolean): void;

            public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

            public getItem(param0: number): javalangObject;

            public setDropDownViewTheme(param0: android.content.res.Resources.Theme): void;

            public isEnabled(param0: number): boolean;

            public getCount(): number;

            public constructor(param0: android.content.Context, param1: android.database.Cursor);

            public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;

            public isEmpty(): boolean;

            public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: number);
            public constructor();

            public bindView(param0: android.view.View, param1: android.content.Context, param2: android.database.Cursor): void;

            public swapCursor(param0: android.database.Cursor): android.database.Cursor;

            public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;

            public getItemViewType(param0: number): number;

            public getViewTypeCount(): number;

            public getCursor(): android.database.Cursor;

            public runQueryOnBackgroundThread(param0: string): android.database.Cursor;

            public newDropDownView(param0: android.content.Context, param1: android.database.Cursor, param2: android.view.ViewGroup): android.view.View;

            public areAllItemsEnabled(): boolean;

            public changeCursor(param0: android.database.Cursor): void;

            public convertToString(param0: android.database.Cursor): string;

            public getFilterQueryProvider(): android.widget.FilterQueryProvider;

            public setFilterQueryProvider(param0: android.widget.FilterQueryProvider): void;

            public onContentChanged(): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.Filter.d.ts" />
/// <reference path="./android.widget.FilterQueryProvider.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module widget {
        export abstract class CursorTreeAdapter extends android.widget.BaseExpandableListAdapter implements android.widget.Filterable {
            public getFilter(): android.widget.Filter;

            public constructor(param0: android.database.Cursor, param1: android.content.Context, param2: boolean);

            public setGroupCursor(param0: android.database.Cursor): void;

            public registerDataSetObserver(param0: android.database.DataSetObserver): void;

            public getGroup(param0: number): javalangObject;

            public getChildrenCount(param0: number): number;

            public setChildrenCursor(param0: number, param1: android.database.Cursor): void;

            public newChildView(param0: android.content.Context, param1: android.database.Cursor, param2: boolean, param3: android.view.ViewGroup): android.view.View;

            public hasStableIds(): boolean;

            public getChildTypeCount(): number;

            public getChild(param0: number, param1: number): javalangObject;

            public onGroupCollapsed(param0: number): void;

            public getGroupView(param0: number, param1: boolean, param2: android.view.View, param3: android.view.ViewGroup): android.view.View;

            public getCombinedGroupId(param0: number): number;

            public getChildView(param0: number, param1: number, param2: boolean, param3: android.view.View, param4: android.view.ViewGroup): android.view.View;

            public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

            public getChildrenCursor(param0: android.database.Cursor): android.database.Cursor;

            public getGroup(param0: number): android.database.Cursor;

            public getGroupId(param0: number): number;

            public getGroupType(param0: number): number;

            public getCombinedChildId(param0: number, param1: number): number;

            public getGroupCount(): number;

            public isEmpty(): boolean;

            public getChild(param0: number, param1: number): android.database.Cursor;

            public getChildId(param0: number, param1: number): number;

            public bindChildView(param0: android.view.View, param1: android.content.Context, param2: android.database.Cursor, param3: boolean): void;

            public constructor();
            public constructor(param0: android.database.Cursor, param1: android.content.Context);

            public notifyDataSetChanged(param0: boolean): void;

            public onGroupExpanded(param0: number): void;

            public isChildSelectable(param0: number, param1: number): boolean;

            public runQueryOnBackgroundThread(param0: string): android.database.Cursor;

            public getCursor(): android.database.Cursor;

            public getGroupTypeCount(): number;

            public areAllItemsEnabled(): boolean;

            public bindGroupView(param0: android.view.View, param1: android.content.Context, param2: android.database.Cursor, param3: boolean): void;

            public getChildType(param0: number, param1: number): number;

            public convertToString(param0: android.database.Cursor): string;

            public changeCursor(param0: android.database.Cursor): void;

            public newGroupView(param0: android.content.Context, param1: android.database.Cursor, param2: boolean, param3: android.view.ViewGroup): android.view.View;

            public getFilterQueryProvider(): android.widget.FilterQueryProvider;

            public setFilterQueryProvider(param0: android.widget.FilterQueryProvider): void;

            public notifyDataSetInvalidated(): void;

            public notifyDataSetChanged(): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.util.SparseArray.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.widget.CalendarView.d.ts" />
/// <reference path="./android.widget.DatePicker.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class DatePicker extends android.widget.FrameLayout {
            public setSpinnersShown(param0: boolean): void;

            public setCalendarViewShown(param0: boolean): void;

            public setMinDate(param0: number): void;

            public getSpinnersShown(): boolean;

            public isLayoutDirectionResolved(): boolean;

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

            public setMaxDate(param0: number): void;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public setEnabled(param0: boolean): void;

            public sendAccessibilityEvent(param0: number): void;

            public onRestoreInstanceState(param0: android.os.Parcelable): void;

            public init(param0: number, param1: number, param2: number, param3: android.widget.DatePicker.OnDateChangedListener): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public getCalendarView(): android.widget.CalendarView;

            public canResolveTextAlignment(): boolean;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public getParent(): android.view.ViewParent;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getLayoutDirection(): number;

            public getTextAlignment(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public setFirstDayOfWeek(param0: number): void;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onSaveInstanceState(): android.os.Parcelable;

            public getMinDate(): number;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public updateDate(param0: number, param1: number, param2: number): void;

            public isLayoutRequested(): boolean;

            public getFirstDayOfWeek(): number;

            public getMaxDate(): number;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public onConfigurationChanged(param0: android.content.res.Configuration): void;

            public requestLayout(): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public isTextAlignmentResolved(): boolean;

            public addView(param0: android.view.View): void;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public dispatchRestoreInstanceState(param0: android.util.SparseArray): void;

            public canResolveTextDirection(): boolean;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public getDayOfMonth(): number;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public getCalendarViewShown(): boolean;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public isTextDirectionResolved(): boolean;

            public getYear(): number;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public isEnabled(): boolean;

            public getMonth(): number;

            public constructor(param0: android.content.Context);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public requestFitSystemWindows(): void;

            public addView(param0: android.view.View, param1: number): void;
        }
        export module DatePicker {
            export class OnDateChangedListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.DatePicker$OnDateChangedListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onDateChanged(param0: android.widget.DatePicker, param1: number, param2: number, param3: number): void;
                });

                public onDateChanged(param0: android.widget.DatePicker, param1: number, param2: number, param3: number): void;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.text.TextWatcher.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module widget {
        export class DialerFilter extends android.widget.RelativeLayout {
            public static DIGITS_AND_LETTERS: number;
            public static DIGITS_AND_LETTERS_NO_DIGITS: number;
            public static DIGITS_AND_LETTERS_NO_LETTERS: number;
            public static DIGITS_ONLY: number;
            public static LETTERS_ONLY: number;

            public getLetters(): string;

            public setDigitsWatcher(param0: android.text.TextWatcher): void;

            public isLayoutDirectionResolved(): boolean;

            public append(param0: string): void;

            public onStopNestedScroll(param0: android.view.View): void;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public clearText(): void;

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public onFinishInflate(): void;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public canResolveLayoutDirection(): boolean;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public onFocusChanged(param0: boolean, param1: number, param2: android.graphics.Rect): void;

            public onModeChange(param0: number, param1: number): void;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public sendAccessibilityEvent(param0: number): void;

            public setLettersWatcher(param0: android.text.TextWatcher): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public setFilterWatcher(param0: android.text.TextWatcher): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public canResolveTextAlignment(): boolean;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public setMode(param0: number): void;

            public getParent(): android.view.ViewParent;

            public isQwertyKeyboard(): boolean;

            public getFilterText(): string;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getLayoutDirection(): number;

            public getTextAlignment(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public getMode(): number;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public focusSearch(param0: number): android.view.View;

            public removeFilterWatcher(param0: android.text.TextWatcher): void;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public isLayoutRequested(): boolean;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public getDigits(): string;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

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
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class DigitalClock extends android.widget.TextView {
            public getAccessibilityClassName(): string;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context);

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public onPreDraw(): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public onAttachedToWindow(): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public onDetachedFromWindow(): void;

            public sendAccessibilityEvent(param0: number): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
declare module android {
    export module widget {
        export class EdgeEffect extends javalangObject {
            public getColor(): number;

            public isFinished(): boolean;

            public draw(param0: android.graphics.Canvas): boolean;

            public finish(): void;

            public constructor(param0: android.content.Context);

            public setSize(param0: number, param1: number): void;

            public onPull(param0: number): void;

            public setColor(param0: number): void;

            public onRelease(): void;

            public onAbsorb(param0: number): void;

            public onPull(param0: number, param1: number): void;

            public getMaxHeight(): number;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.text.method.MovementMethod.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class EditText extends android.widget.TextView {
            public getAccessibilityClassName(): string;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public selectAll(): void;

            public setText(param0: native.Array<string>, param1: number, param2: number): void;

            public setSelection(param0: number): void;

            public getDefaultMovementMethod(): android.text.method.MovementMethod;

            public extendSelection(param0: number): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public getText(): android.text.Editable;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public onPreDraw(): boolean;

            public setText(param0: number): void;

            public getDefaultEditable(): boolean;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public sendAccessibilityEvent(param0: number): void;

            public setText(param0: string): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public setText(param0: string, param1: android.widget.TextView.BufferType): void;

            public setEllipsize(param0: android.text.TextUtils.TruncateAt): void;

            public getText(): string;

            public setSelection(param0: number, param1: number): void;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public setText(param0: number, param1: android.widget.TextView.BufferType): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public constructor(param0: android.content.Context);

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
        }
    }
}

/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module widget {
        export class ExpandableListAdapter extends javalangObject {
            /**
             * Constructs a new instance of the android.widget.ExpandableListAdapter interface with the provided implementation.
             */
            public constructor(implementation: {
                registerDataSetObserver(param0: android.database.DataSetObserver): void;
                unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
                getGroupCount(): number;
                getChildrenCount(param0: number): number;
                getGroup(param0: number): javalangObject;
                getChild(param0: number, param1: number): javalangObject;
                getGroupId(param0: number): number;
                getChildId(param0: number, param1: number): number;
                hasStableIds(): boolean;
                getGroupView(param0: number, param1: boolean, param2: android.view.View, param3: android.view.ViewGroup): android.view.View;
                getChildView(param0: number, param1: number, param2: boolean, param3: android.view.View, param4: android.view.ViewGroup): android.view.View;
                isChildSelectable(param0: number, param1: number): boolean;
                areAllItemsEnabled(): boolean;
                isEmpty(): boolean;
                onGroupExpanded(param0: number): void;
                onGroupCollapsed(param0: number): void;
                getCombinedChildId(param0: number, param1: number): number;
                getCombinedGroupId(param0: number): number;
            });

            public registerDataSetObserver(param0: android.database.DataSetObserver): void;

            public getGroup(param0: number): javalangObject;

            public isEmpty(): boolean;

            public getChildrenCount(param0: number): number;

            public getChildId(param0: number, param1: number): number;

            public getChild(param0: number, param1: number): javalangObject;

            public hasStableIds(): boolean;

            public onGroupCollapsed(param0: number): void;

            public getGroupView(param0: number, param1: boolean, param2: android.view.View, param3: android.view.ViewGroup): android.view.View;

            public getCombinedGroupId(param0: number): number;

            public getChildView(param0: number, param1: number, param2: boolean, param3: android.view.View, param4: android.view.ViewGroup): android.view.View;

            public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

            public onGroupExpanded(param0: number): void;

            public isChildSelectable(param0: number, param1: number): boolean;

            public getGroupId(param0: number): number;

            public areAllItemsEnabled(): boolean;

            public getCombinedChildId(param0: number, param1: number): number;

            public getGroupCount(): number;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.widget.Adapter.d.ts" />
/// <reference path="./android.widget.ExpandableListAdapter.d.ts" />
/// <reference path="./android.widget.ExpandableListView.d.ts" />
/// <reference path="./android.widget.ListAdapter.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class ExpandableListView extends android.widget.ListView {
            public static CHILD_INDICATOR_INHERIT: number;
            public static PACKED_POSITION_TYPE_CHILD: number;
            public static PACKED_POSITION_TYPE_GROUP: number;
            public static PACKED_POSITION_TYPE_NULL: number;
            public static PACKED_POSITION_VALUE_NULL: number;

            public setOnGroupCollapseListener(param0: android.widget.ExpandableListView.OnGroupCollapseListener): void;

            public onStopNestedScroll(param0: android.view.View): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public setOnItemClickListener(param0: android.widget.AdapterView.OnItemClickListener): void;

            public static getPackedPositionChild(param0: number): number;

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public setChildDivider(param0: android.graphics.drawable.Drawable): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public setAdapter(param0: android.widget.ListAdapter): void;

            public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public setAdapter(param0: android.widget.Adapter): void;

            public getSelectedId(): number;

            public sendAccessibilityEvent(param0: number): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public afterTextChanged(param0: android.text.Editable): void;

            public setIndicatorBounds(param0: number, param1: number): void;

            public canResolveTextAlignment(): boolean;

            public getParent(): android.view.ViewParent;

            public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public setAdapter(param0: android.widget.ExpandableListAdapter): void;

            public dispatchDraw(param0: android.graphics.Canvas): void;

            public expandGroup(param0: number): boolean;

            public setOnGroupClickListener(param0: android.widget.ExpandableListView.OnGroupClickListener): void;

            public getLayoutDirection(): number;

            public static getPackedPositionForGroup(param0: number): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public recomputeViewAttributes(param0: android.view.View): void;

            public onTouchModeChanged(param0: boolean): void;

            public isLayoutRequested(): boolean;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public onGlobalLayout(): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public setOnGroupExpandListener(param0: android.widget.ExpandableListView.OnGroupExpandListener): void;

            public performItemClick(param0: android.view.View, param1: number, param2: number): boolean;

            public requestLayout(): void;

            public onFilterComplete(param0: number): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public addView(param0: android.view.View): void;

            public setGroupIndicator(param0: android.graphics.drawable.Drawable): void;

            public setOnChildClickListener(param0: android.widget.ExpandableListView.OnChildClickListener): void;

            public canResolveTextDirection(): boolean;

            public static getPackedPositionForChild(param0: number, param1: number): number;

            public getAdapter(): android.widget.Adapter;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public getExpandableListAdapter(): android.widget.ExpandableListAdapter;

            public constructor(param0: android.content.Context);

            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public onRtlPropertiesChanged(param0: number): void;

            public requestFitSystemWindows(): void;

            public getAdapter(): android.widget.ListAdapter;

            public setSelectedChild(param0: number, param1: number, param2: boolean): boolean;

            public isLayoutDirectionResolved(): boolean;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public canResolveLayoutDirection(): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public isGroupExpanded(param0: number): boolean;

            public onRestoreInstanceState(param0: android.os.Parcelable): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public static getPackedPositionType(param0: number): number;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public setSelectedGroup(param0: number): void;

            public getTextAlignment(): number;

            public collapseGroup(param0: number): boolean;

            public getFlatListPosition(param0: number): number;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public setChildIndicator(param0: android.graphics.drawable.Drawable): void;

            public onSaveInstanceState(): android.os.Parcelable;

            public expandGroup(param0: number, param1: boolean): boolean;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public setChildIndicatorBoundsRelative(param0: number, param1: number): void;

            public static getPackedPositionGroup(param0: number): number;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public setChildIndicatorBounds(param0: number, param1: number): void;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public getExpandableListPosition(param0: number): number;

            public isTextAlignmentResolved(): boolean;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public setIndicatorBoundsRelative(param0: number, param1: number): void;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public getSelectedPosition(): number;

            public isTextDirectionResolved(): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public addView(param0: android.view.View, param1: number): void;
        }
        export module ExpandableListView {
            export class ExpandableListContextMenuInfo extends javalangObject implements android.view.ContextMenu.ContextMenuInfo {
                public id: number;
                public packedPosition: number;
                public targetView: android.view.View;

                public constructor(param0: android.view.View, param1: number, param2: number);
            }
            export class OnChildClickListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.ExpandableListView$OnChildClickListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onChildClick(param0: android.widget.ExpandableListView, param1: android.view.View, param2: number, param3: number, param4: number): boolean;
                });

                public onChildClick(param0: android.widget.ExpandableListView, param1: android.view.View, param2: number, param3: number, param4: number): boolean;
            }
            export class OnGroupClickListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.ExpandableListView$OnGroupClickListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onGroupClick(param0: android.widget.ExpandableListView, param1: android.view.View, param2: number, param3: number): boolean;
                });

                public onGroupClick(param0: android.widget.ExpandableListView, param1: android.view.View, param2: number, param3: number): boolean;
            }
            export class OnGroupCollapseListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.ExpandableListView$OnGroupCollapseListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onGroupCollapse(param0: number): void;
                });

                public onGroupCollapse(param0: number): void;
            }
            export class OnGroupExpandListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.ExpandableListView$OnGroupExpandListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onGroupExpand(param0: number): void;
                });

                public onGroupExpand(param0: number): void;
            }
        }
    }
}

/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module widget {
        export abstract class Filter extends javalangObject {
            public filter(param0: string, param1: android.widget.Filter.FilterListener): void;

            public convertResultToString(param0: javalangObject): string;

            public publishResults(param0: string, param1: android.widget.Filter.FilterResults): void;

            public filter(param0: string): void;

            public performFiltering(param0: string): android.widget.Filter.FilterResults;

            public constructor();
        }
        export module Filter {
            export class FilterListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.Filter$FilterListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onFilterComplete(param0: number): void;
                });

                public onFilterComplete(param0: number): void;
            }
            export class FilterResults extends javalangObject {
                public count: number;
                public values: javalangObject;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module widget {
        export class FilterQueryProvider extends javalangObject {
            /**
             * Constructs a new instance of the android.widget.FilterQueryProvider interface with the provided implementation.
             */
            public constructor(implementation: {
                runQuery(param0: string): android.database.Cursor;
            });

            public runQuery(param0: string): android.database.Cursor;
        }
    }
}

/// <reference path="./android.widget.Filter.d.ts" />
declare module android {
    export module widget {
        export class Filterable extends javalangObject {
            /**
             * Constructs a new instance of the android.widget.Filterable interface with the provided implementation.
             */
            public constructor(implementation: {
                getFilter(): android.widget.Filter;
            });

            public getFilter(): android.widget.Filter;
        }
    }
}

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
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class FrameLayout extends android.view.ViewGroup {
            public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;

            public isLayoutDirectionResolved(): boolean;

            public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;

            public onStopNestedScroll(param0: android.view.View): void;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onMeasure(param0: number, param1: number): void;

            public shouldDelayChildPressedState(): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public getConsiderGoneChildrenWhenMeasuring(): boolean;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public canResolveLayoutDirection(): boolean;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public sendAccessibilityEvent(param0: number): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public getMeasureAllChildren(): boolean;

            public canResolveTextAlignment(): boolean;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public getParent(): android.view.ViewParent;

            public generateDefaultLayoutParams(): android.widget.FrameLayout.LayoutParams;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public setForegroundGravity(param0: number): void;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getLayoutDirection(): number;

            public getTextAlignment(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;

            public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;

            public setMeasureAllChildren(param0: boolean): void;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public isLayoutRequested(): boolean;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public requestLayout(): void;

            public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;

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

            public generateLayoutParams(param0: android.util.AttributeSet): android.widget.FrameLayout.LayoutParams;

            public constructor(param0: android.content.Context);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public requestFitSystemWindows(): void;

            public addView(param0: android.view.View, param1: number): void;
        }
        export module FrameLayout {
            export class LayoutParams extends android.view.ViewGroup.MarginLayoutParams {
                public gravity: number;

                public constructor(param0: number, param1: number);
                public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
                public constructor(param0: android.view.ViewGroup.LayoutParams);
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                public constructor(param0: android.widget.FrameLayout.LayoutParams);
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
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
/// <reference path="./android.view.animation.Transformation.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class Gallery extends android.widget.AbsSpinner implements android.view.GestureDetector.OnGestureListener {
            public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;

            public onScroll(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;

            public isLayoutDirectionResolved(): boolean;

            public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;

            public onStopNestedScroll(param0: android.view.View): void;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public dispatchSetPressed(param0: boolean): void;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public canResolveLayoutDirection(): boolean;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public getContextMenuInfo(): android.view.ContextMenu.ContextMenuInfo;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public onFocusChanged(param0: boolean, param1: number, param2: android.graphics.Rect): void;

            public computeHorizontalScrollRange(): number;

            public onSingleTapUp(param0: android.view.MotionEvent): boolean;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public setSpacing(param0: number): void;

            public sendAccessibilityEvent(param0: number): void;

            public setCallbackDuringFling(param0: boolean): void;

            public showContextMenu(): boolean;

            public requestTransparentRegion(param0: android.view.View): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public canResolveTextAlignment(): boolean;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public getParent(): android.view.ViewParent;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getLayoutDirection(): number;

            public getTextAlignment(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;

            public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public setGravity(param0: number): void;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public isLayoutRequested(): boolean;

            public getChildStaticTransformation(param0: android.view.View, param1: android.view.animation.Transformation): boolean;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public dispatchSetSelected(param0: boolean): void;

            public onDown(param0: android.view.MotionEvent): boolean;

            public getChildDrawingOrder(param0: number, param1: number): number;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public computeHorizontalScrollOffset(): number;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public onFling(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;

            public onLongPress(param0: android.view.MotionEvent): void;

            public requestLayout(): void;

            public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;

            public childDrawableStateChanged(param0: android.view.View): void;

            public isTextAlignmentResolved(): boolean;

            public addView(param0: android.view.View): void;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public canResolveTextDirection(): boolean;

            public setAnimationDuration(param0: number): void;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public onTouchEvent(param0: android.view.MotionEvent): boolean;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public isTextDirectionResolved(): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context);

            public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public computeHorizontalScrollExtent(): number;

            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public onShowPress(param0: android.view.MotionEvent): void;

            public setUnselectedAlpha(param0: number): void;

            public requestFitSystemWindows(): void;

            public addView(param0: android.view.View, param1: number): void;
        }
        export module Gallery {
            export class LayoutParams extends android.view.ViewGroup.LayoutParams {
                public constructor(param0: number, param1: number);
                public constructor(param0: android.view.ViewGroup.LayoutParams);
                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
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
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class GridLayout extends android.view.ViewGroup {
            public static ALIGN_BOUNDS: number;
            public static ALIGN_MARGINS: number;
            public static BASELINE: android.widget.GridLayout.Alignment;
            public static BOTTOM: android.widget.GridLayout.Alignment;
            public static CENTER: android.widget.GridLayout.Alignment;
            public static END: android.widget.GridLayout.Alignment;
            public static FILL: android.widget.GridLayout.Alignment;
            public static HORIZONTAL: number;
            public static LEFT: android.widget.GridLayout.Alignment;
            public static RIGHT: android.widget.GridLayout.Alignment;
            public static START: android.widget.GridLayout.Alignment;
            public static TOP: android.widget.GridLayout.Alignment;
            public static UNDEFINED: number;
            public static VERTICAL: number;

            public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;

            public onStopNestedScroll(param0: android.view.View): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onMeasure(param0: number, param1: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public static spec(param0: number, param1: number, param2: number): android.widget.GridLayout.Spec;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public sendAccessibilityEvent(param0: number): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public static spec(param0: number, param1: number): android.widget.GridLayout.Spec;

            public canResolveTextAlignment(): boolean;

            public getParent(): android.view.ViewParent;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public getLayoutDirection(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public recomputeViewAttributes(param0: android.view.View): void;

            public isRowOrderPreserved(): boolean;

            public isLayoutRequested(): boolean;

            public setColumnCount(param0: number): void;

            public getUseDefaultMargins(): boolean;

            public static spec(param0: number): android.widget.GridLayout.Spec;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public requestLayout(): void;

            public getColumnCount(): number;

            public childDrawableStateChanged(param0: android.view.View): void;

            public addView(param0: android.view.View): void;

            public isColumnOrderPreserved(): boolean;

            public setColumnOrderPreserved(param0: boolean): void;

            public canResolveTextDirection(): boolean;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context);

            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public setOrientation(param0: number): void;

            public requestFitSystemWindows(): void;

            public generateDefaultLayoutParams(): android.widget.GridLayout.LayoutParams;

            public getRowCount(): number;

            public onViewAdded(param0: android.view.View): void;

            public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;

            public isLayoutDirectionResolved(): boolean;

            public getAlignmentMode(): number;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public canResolveLayoutDirection(): boolean;

            public setAlignmentMode(param0: number): void;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public onViewRemoved(param0: android.view.View): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public static spec(param0: number, param1: android.widget.GridLayout.Alignment, param2: number): android.widget.GridLayout.Spec;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getTextAlignment(): number;

            public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;

            public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public static spec(param0: number, param1: number, param2: android.widget.GridLayout.Alignment, param3: number): android.widget.GridLayout.Spec;

            public setUseDefaultMargins(param0: boolean): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public setRowOrderPreserved(param0: boolean): void;

            public static spec(param0: number, param1: android.widget.GridLayout.Alignment): android.widget.GridLayout.Spec;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public getOrientation(): number;

            public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;

            public isTextAlignmentResolved(): boolean;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.widget.GridLayout.LayoutParams;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public isTextDirectionResolved(): boolean;

            public setRowCount(param0: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public generateLayoutParams(param0: android.util.AttributeSet): android.widget.GridLayout.LayoutParams;

            public static spec(param0: number, param1: number, param2: android.widget.GridLayout.Alignment): android.widget.GridLayout.Spec;

            public addView(param0: android.view.View, param1: number): void;
        }
        export module GridLayout {
            export abstract class Alignment extends javalangObject {
            }
            export class LayoutParams extends android.view.ViewGroup.MarginLayoutParams {
                public columnSpec: android.widget.GridLayout.Spec;
                public rowSpec: android.widget.GridLayout.Spec;

                public constructor(param0: number, param1: number);
                public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
                public constructor(param0: android.view.ViewGroup.LayoutParams);
                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

                public equals(param0: javalangObject): boolean;

                public hashCode(): number;

                public constructor(param0: android.widget.GridLayout.LayoutParams);

                public setBaseAttributes(param0: android.content.res.TypedArray, param1: number, param2: number): void;

                public setGravity(param0: number): void;

                public constructor(param0: android.widget.GridLayout.Spec, param1: android.widget.GridLayout.Spec);
                public constructor();
            }
            export class Spec extends javalangObject {
                public equals(param0: javalangObject): boolean;

                public hashCode(): number;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityNodeInfo.d.ts" />
/// <reference path="./android.widget.Adapter.d.ts" />
/// <reference path="./android.widget.ListAdapter.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class GridView extends android.widget.AbsListView {
            public static AUTO_FIT: number;
            public static NO_STRETCH: number;
            public static STRETCH_COLUMN_WIDTH: number;
            public static STRETCH_SPACING: number;
            public static STRETCH_SPACING_UNIFORM: number;

            public setStretchMode(param0: number): void;

            public setSelection(param0: number): void;

            public smoothScrollToPosition(param0: number, param1: number): void;

            public onStopNestedScroll(param0: android.view.View): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onMeasure(param0: number, param1: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public getRequestedColumnWidth(): number;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public setAdapter(param0: android.widget.ListAdapter): void;

            public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public setAdapter(param0: android.widget.Adapter): void;

            public sendAccessibilityEvent(param0: number): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public afterTextChanged(param0: android.text.Editable): void;

            public canResolveTextAlignment(): boolean;

            public getParent(): android.view.ViewParent;

            public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public attachLayoutAnimationParameters(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams, param2: number, param3: number): void;

            public computeVerticalScrollRange(): number;

            public setNumColumns(param0: number): void;

            public getLayoutDirection(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public recomputeViewAttributes(param0: android.view.View): void;

            public smoothScrollByOffset(param0: number): void;

            public onTouchModeChanged(param0: boolean): void;

            public isLayoutRequested(): boolean;

            public computeVerticalScrollExtent(): number;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public getStretchMode(): number;

            public onGlobalLayout(): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public requestLayout(): void;

            public onFilterComplete(param0: number): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public addView(param0: android.view.View): void;

            public smoothScrollToPosition(param0: number): void;

            public canResolveTextDirection(): boolean;

            public getVerticalSpacing(): number;

            public getAdapter(): android.widget.Adapter;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context);

            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public requestFitSystemWindows(): void;

            public getAdapter(): android.widget.ListAdapter;

            public isLayoutDirectionResolved(): boolean;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public canResolveLayoutDirection(): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public onFocusChanged(param0: boolean, param1: number, param2: android.graphics.Rect): void;

            public getHorizontalSpacing(): number;

            public setRemoteViewsAdapter(param0: android.content.Intent): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public setColumnWidth(param0: number): void;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public layoutChildren(): void;

            public computeVerticalScrollOffset(): number;

            public getTextAlignment(): number;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public getColumnWidth(): number;

            public setGravity(param0: number): void;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public getNumColumns(): number;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public getRequestedHorizontalSpacing(): number;

            public getGravity(): number;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public isTextAlignmentResolved(): boolean;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public onInitializeAccessibilityNodeInfoForItem(param0: android.view.View, param1: number, param2: android.view.accessibility.AccessibilityNodeInfo): void;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public setHorizontalSpacing(param0: number): void;

            public isTextDirectionResolved(): boolean;

            public setVerticalSpacing(param0: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public addView(param0: android.view.View, param1: number): void;
        }
    }
}

/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.Filter.d.ts" />
/// <reference path="./android.widget.ListAdapter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module android {
    export module widget {
        export class HeaderViewListAdapter extends javalangObject implements android.widget.WrapperListAdapter, android.widget.Filterable {
            public getFilter(): android.widget.Filter;

            public registerDataSetObserver(param0: android.database.DataSetObserver): void;

            public isEmpty(): boolean;

            public removeFooter(param0: android.view.View): boolean;

            public getItemId(param0: number): number;

            public hasStableIds(): boolean;

            public constructor(param0: javautilArrayList, param1: javautilArrayList, param2: android.widget.ListAdapter);

            public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

            public getFootersCount(): number;

            public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;

            public getItem(param0: number): javalangObject;

            public getItemViewType(param0: number): number;

            public getWrappedAdapter(): android.widget.ListAdapter;

            public getViewTypeCount(): number;

            public getHeadersCount(): number;

            public areAllItemsEnabled(): boolean;

            public isEnabled(param0: number): boolean;

            public removeHeader(param0: android.view.View): boolean;

            public getCount(): number;
        }
    }
}

declare module android {
    export module widget {
        export class HeterogeneousExpandableList extends javalangObject {
            /**
             * Constructs a new instance of the android.widget.HeterogeneousExpandableList interface with the provided implementation.
             */
            public constructor(implementation: {
                getGroupType(param0: number): number;
                getChildType(param0: number, param1: number): number;
                getGroupTypeCount(): number;
                getChildTypeCount(): number;
            });

            public getGroupType(param0: number): number;

            public getGroupTypeCount(): number;

            public getChildType(param0: number, param1: number): number;

            public getChildTypeCount(): number;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class HorizontalScrollView extends android.widget.FrameLayout {
            public setSmoothScrollingEnabled(param0: boolean): void;

            public onStopNestedScroll(param0: android.view.View): void;

            public smoothScrollTo(param0: number, param1: number): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onMeasure(param0: number, param1: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public scrollTo(param0: number, param1: number): void;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public sendAccessibilityEvent(param0: number): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public setFillViewport(param0: boolean): void;

            public canResolveTextAlignment(): boolean;

            public getParent(): android.view.ViewParent;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public getRightFadingEdgeStrength(): number;

            public getLeftFadingEdgeStrength(): number;

            public getLayoutDirection(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public setOverScrollMode(param0: number): void;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public isLayoutRequested(): boolean;

            public computeScrollDeltaToGetChildRectOnScreen(param0: android.graphics.Rect): number;

            public isSmoothScrollingEnabled(): boolean;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public getMaxScrollAmount(): number;

            public requestLayout(): void;

            public addView(param0: android.view.View): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public canResolveTextDirection(): boolean;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context);

            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;

            public requestFitSystemWindows(): void;

            public onOverScrolled(param0: number, param1: number, param2: boolean, param3: boolean): void;

            public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;

            public measureChildWithMargins(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public isLayoutDirectionResolved(): boolean;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public shouldDelayChildPressedState(): boolean;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public canResolveLayoutDirection(): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public computeHorizontalScrollRange(): number;

            public draw(param0: android.graphics.Canvas): void;

            public onRestoreInstanceState(param0: android.os.Parcelable): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public onRequestFocusInDescendants(param0: number, param1: android.graphics.Rect): boolean;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public arrowScroll(param0: number): boolean;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getTextAlignment(): number;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onSaveInstanceState(): android.os.Parcelable;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;

            public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;

            public executeKeyEvent(param0: android.view.KeyEvent): boolean;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public computeHorizontalScrollOffset(): number;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public computeScroll(): void;

            public isTextAlignmentResolved(): boolean;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public fullScroll(param0: number): boolean;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public fling(param0: number): void;

            public onTouchEvent(param0: android.view.MotionEvent): boolean;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public pageScroll(param0: number): boolean;

            public isTextDirectionResolved(): boolean;

            public smoothScrollBy(param0: number, param1: number): void;

            public measureChild(param0: android.view.View, param1: number, param2: number): void;

            public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public isFillViewport(): boolean;

            public addView(param0: android.view.View, param1: number): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class ImageButton extends android.widget.ImageView {
            public getAccessibilityClassName(): string;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public onSetAlpha(param0: number): boolean;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context);

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public sendAccessibilityEvent(param0: number): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class ImageSwitcher extends android.widget.ViewSwitcher {
            public isLayoutDirectionResolved(): boolean;

            public onStopNestedScroll(param0: android.view.View): void;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public setImageResource(param0: number): void;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public canResolveLayoutDirection(): boolean;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

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

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public isLayoutRequested(): boolean;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public setImageDrawable(param0: android.graphics.drawable.Drawable): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

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

            public setImageURI(param0: android.net.Uri): void;

            public requestFitSystemWindows(): void;

            public addView(param0: android.view.View, param1: number): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.graphics.drawable.Icon.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module widget {
        export class ImageView extends android.view.View {
            public getColorFilter(): android.graphics.ColorFilter;

            public getImageTintList(): android.content.res.ColorStateList;

            public setImageTintMode(param0: android.graphics.PorterDuff.Mode): void;

            public setMaxHeight(param0: number): void;

            public drawableStateChanged(): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onMeasure(param0: number, param1: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public setFrame(param0: number, param1: number, param2: number, param3: number): boolean;

            public setImageResource(param0: number): void;

            public setImageMatrix(param0: android.graphics.Matrix): void;

            public setBaselineAlignBottom(param0: boolean): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public setColorFilter(param0: android.graphics.ColorFilter): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public setBaseline(param0: number): void;

            public onDetachedFromWindow(): void;

            public sendAccessibilityEvent(param0: number): void;

            public setMaxWidth(param0: number): void;

            public getBaselineAlignBottom(): boolean;

            public setVisibility(param0: number): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getImageTintMode(): android.graphics.PorterDuff.Mode;

            public setScaleType(param0: android.widget.ImageView.ScaleType): void;

            public getScaleType(): android.widget.ImageView.ScaleType;

            public setImageAlpha(param0: number): void;

            public verifyDrawable(param0: android.graphics.drawable.Drawable): boolean;

            public setImageBitmap(param0: android.graphics.Bitmap): void;

            public getImageAlpha(): number;

            public getCropToPadding(): boolean;

            public setSelected(param0: boolean): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getImageMatrix(): android.graphics.Matrix;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public onDraw(param0: android.graphics.Canvas): void;

            public setImageLevel(param0: number): void;

            public getAdjustViewBounds(): boolean;

            public getMaxHeight(): number;

            public getAccessibilityClassName(): string;

            public setCropToPadding(param0: boolean): void;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public hasOverlappingRendering(): boolean;

            public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;

            public setAdjustViewBounds(param0: boolean): void;

            public onCreateDrawableState(param0: number): native.Array<number>;

            public setImageState(param0: native.Array<number>, param1: boolean): void;

            public setImageTintList(param0: android.content.res.ColorStateList): void;

            public setColorFilter(param0: number): void;

            public setImageDrawable(param0: android.graphics.drawable.Drawable): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public jumpDrawablesToCurrentState(): void;

            public getBaseline(): number;

            public isOpaque(): boolean;

            public setAlpha(param0: number): void;

            public getDrawable(): android.graphics.drawable.Drawable;

            public getMaxWidth(): number;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public drawableHotspotChanged(param0: number, param1: number): void;

            public clearColorFilter(): void;

            public setImageIcon(param0: android.graphics.drawable.Icon): void;

            public constructor(param0: android.content.Context);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public onAttachedToWindow(): void;

            public onRtlPropertiesChanged(param0: number): void;

            public setImageURI(param0: android.net.Uri): void;
        }
        export module ImageView {
            export class ScaleType extends javalangEnum {
                public static CENTER: android.widget.ImageView.ScaleType;
                public static CENTER_CROP: android.widget.ImageView.ScaleType;
                public static CENTER_INSIDE: android.widget.ImageView.ScaleType;
                public static FIT_CENTER: android.widget.ImageView.ScaleType;
                public static FIT_END: android.widget.ImageView.ScaleType;
                public static FIT_START: android.widget.ImageView.ScaleType;
                public static FIT_XY: android.widget.ImageView.ScaleType;
                public static MATRIX: android.widget.ImageView.ScaleType;

                public static values(): native.Array<android.widget.ImageView.ScaleType>;

                public static valueOf(param0: string): android.widget.ImageView.ScaleType;
                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
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
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module widget {
        export class LinearLayout extends android.view.ViewGroup {
            public static HORIZONTAL: number;
            public static SHOW_DIVIDER_BEGINNING: number;
            public static SHOW_DIVIDER_END: number;
            public static SHOW_DIVIDER_MIDDLE: number;
            public static SHOW_DIVIDER_NONE: number;
            public static VERTICAL: number;

            public setDividerPadding(param0: number): void;

            public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;

            public onStopNestedScroll(param0: android.view.View): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onMeasure(param0: number, param1: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public setWeightSum(param0: number): void;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public setMeasureWithLargestChildEnabled(param0: boolean): void;

            public sendAccessibilityEvent(param0: number): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public canResolveTextAlignment(): boolean;

            public getParent(): android.view.ViewParent;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public getLayoutDirection(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public recomputeViewAttributes(param0: android.view.View): void;

            public isLayoutRequested(): boolean;

            public setShowDividers(param0: number): void;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public isMeasureWithLargestChildEnabled(): boolean;

            public setVerticalGravity(param0: number): void;

            public requestLayout(): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public addView(param0: android.view.View): void;

            public canResolveTextDirection(): boolean;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context);

            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public onRtlPropertiesChanged(param0: number): void;

            public setOrientation(param0: number): void;

            public requestFitSystemWindows(): void;

            public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;

            public isLayoutDirectionResolved(): boolean;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public shouldDelayChildPressedState(): boolean;

            public getWeightSum(): number;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public canResolveLayoutDirection(): boolean;

            public setDividerDrawable(param0: android.graphics.drawable.Drawable): void;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public getDividerPadding(): number;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public setHorizontalGravity(param0: number): void;

            public setBaselineAlignedChildIndex(param0: number): void;

            public setBaselineAligned(param0: boolean): void;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getTextAlignment(): number;

            public onDraw(param0: android.graphics.Canvas): void;

            public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;

            public isBaselineAligned(): boolean;

            public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public setGravity(param0: number): void;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public getBaselineAlignedChildIndex(): number;

            public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.widget.LinearLayout.LayoutParams;

            public generateDefaultLayoutParams(): android.widget.LinearLayout.LayoutParams;

            public getShowDividers(): number;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public getBaseline(): number;

            public getOrientation(): number;

            public generateLayoutParams(param0: android.util.AttributeSet): android.widget.LinearLayout.LayoutParams;

            public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;

            public isTextAlignmentResolved(): boolean;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public isTextDirectionResolved(): boolean;

            public getDividerDrawable(): android.graphics.drawable.Drawable;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public addView(param0: android.view.View, param1: number): void;
        }
        export module LinearLayout {
            export class LayoutParams extends android.view.ViewGroup.MarginLayoutParams {
                public gravity: number;
                public weight: number;

                public constructor(param0: number, param1: number);
                public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
                public constructor(param0: android.view.ViewGroup.LayoutParams);

                public debug(param0: string): string;

                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                public constructor(param0: android.widget.LinearLayout.LayoutParams);
            }
        }
    }
}

/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module widget {
        export class ListAdapter extends javalangObject implements android.widget.Adapter {
            /**
             * Constructs a new instance of the android.widget.ListAdapter interface with the provided implementation.
             */
            public constructor(implementation: {
                areAllItemsEnabled(): boolean;
                isEnabled(param0: number): boolean;
                registerDataSetObserver(param0: android.database.DataSetObserver): void;
                unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
                getCount(): number;
                getItem(param0: number): javalangObject;
                getItemId(param0: number): number;
                hasStableIds(): boolean;
                getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
                getItemViewType(param0: number): number;
                getViewTypeCount(): number;
                isEmpty(): boolean;
            });

            public static NO_SELECTION: number;
            public static IGNORE_ITEM_VIEW_TYPE: number;

            public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

            public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;

            public registerDataSetObserver(param0: android.database.DataSetObserver): void;

            public getItem(param0: number): javalangObject;

            public getItemViewType(param0: number): number;

            public isEmpty(): boolean;

            public getViewTypeCount(): number;

            public areAllItemsEnabled(): boolean;

            public getItemId(param0: number): number;

            public isEnabled(param0: number): boolean;

            public hasStableIds(): boolean;

            public getCount(): number;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.ListAdapter.d.ts" />
/// <reference path="./android.widget.ListView.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module widget {
        export class ListPopupWindow extends javalangObject {
            public static INPUT_METHOD_FROM_FOCUSABLE: number;
            public static INPUT_METHOD_NEEDED: number;
            public static INPUT_METHOD_NOT_NEEDED: number;
            public static MATCH_PARENT: number;
            public static POSITION_PROMPT_ABOVE: number;
            public static POSITION_PROMPT_BELOW: number;
            public static WRAP_CONTENT: number;

            public setListSelector(param0: android.graphics.drawable.Drawable): void;

            public setHeight(param0: number): void;

            public setSelection(param0: number): void;

            public getWidth(): number;

            public getSoftInputMode(): number;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public setOnItemClickListener(param0: android.widget.AdapterView.OnItemClickListener): void;

            public getInputMethodMode(): number;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public setAdapter(param0: android.widget.ListAdapter): void;

            public getAnchorView(): android.view.View;

            public setOnItemSelectedListener(param0: android.widget.AdapterView.OnItemSelectedListener): void;

            public isShowing(): boolean;

            public performItemClick(param0: number): boolean;

            public isInputMethodNotNeeded(): boolean;

            public getSelectedItem(): javalangObject;

            public getHeight(): number;

            public setWidth(param0: number): void;

            public setPromptPosition(param0: number): void;

            public setVerticalOffset(param0: number): void;

            public onKeyPreIme(param0: number, param1: android.view.KeyEvent): boolean;

            public setModal(param0: boolean): void;

            public getAnimationStyle(): number;

            public setPromptView(param0: android.view.View): void;

            public getPromptPosition(): number;

            public show(): void;

            public setInputMethodMode(param0: number): void;

            public getSelectedView(): android.view.View;

            public setHorizontalOffset(param0: number): void;

            public setContentWidth(param0: number): void;

            public clearListSelection(): void;

            public getSelectedItemId(): number;

            public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;

            public isModal(): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public getVerticalOffset(): number;

            public dismiss(): void;

            public getHorizontalOffset(): number;

            public postShow(): void;

            public setWindowLayoutType(param0: number): void;

            public createDragToOpenListener(param0: android.view.View): android.view.View.OnTouchListener;

            public setAnimationStyle(param0: number): void;

            public setAnchorView(param0: android.view.View): void;

            public setDropDownGravity(param0: number): void;

            public getSelectedItemPosition(): number;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public setSoftInputMode(param0: number): void;

            public constructor(param0: android.content.Context);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public getListView(): android.widget.ListView;

            public getBackground(): android.graphics.drawable.Drawable;

            public setOnDismissListener(param0: android.widget.PopupWindow.OnDismissListener): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityNodeInfo.d.ts" />
/// <reference path="./android.widget.Adapter.d.ts" />
/// <reference path="./android.widget.ListAdapter.d.ts" />
/// <reference path="./android.widget.ListView.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class ListView extends android.widget.AbsListView {
            public setHeaderDividersEnabled(param0: boolean): void;

            public setSelection(param0: number): void;

            public smoothScrollToPosition(param0: number, param1: number): void;

            public onStopNestedScroll(param0: android.view.View): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onMeasure(param0: number, param1: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public addFooterView(param0: android.view.View, param1: javalangObject, param2: boolean): void;

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public setAdapter(param0: android.widget.ListAdapter): void;

            public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public setAdapter(param0: android.widget.Adapter): void;

            public getDivider(): android.graphics.drawable.Drawable;

            public sendAccessibilityEvent(param0: number): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public afterTextChanged(param0: android.text.Editable): void;

            public findViewTraversal(param0: number): android.view.View;

            public canResolveTextAlignment(): boolean;

            public drawChild(param0: android.graphics.Canvas, param1: android.view.View, param2: number): boolean;

            public getParent(): android.view.ViewParent;

            public getDividerHeight(): number;

            public setDivider(param0: android.graphics.drawable.Drawable): void;

            public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public dispatchDraw(param0: android.graphics.Canvas): void;

            public getLayoutDirection(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public removeHeaderView(param0: android.view.View): boolean;

            public findViewWithTagTraversal(param0: javalangObject): android.view.View;

            public recomputeViewAttributes(param0: android.view.View): void;

            public smoothScrollByOffset(param0: number): void;

            public onTouchModeChanged(param0: boolean): void;

            public getHeaderViewsCount(): number;

            public setDividerHeight(param0: number): void;

            public isLayoutRequested(): boolean;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public onGlobalLayout(): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public getMaxScrollAmount(): number;

            public setSelectionAfterHeaderView(): void;

            public setOverscrollHeader(param0: android.graphics.drawable.Drawable): void;

            public setCacheColorHint(param0: number): void;

            public addHeaderView(param0: android.view.View): void;

            public requestLayout(): void;

            public onFilterComplete(param0: number): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public addView(param0: android.view.View): void;

            public smoothScrollToPosition(param0: number): void;

            public canResolveTextDirection(): boolean;

            public getAdapter(): android.widget.Adapter;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public addFooterView(param0: android.view.View): void;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public setItemsCanFocus(param0: boolean): void;

            public constructor(param0: android.content.Context);

            public removeFooterView(param0: android.view.View): boolean;

            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public requestFitSystemWindows(): void;

            public getCheckItemIds(): native.Array<number>;

            public getAdapter(): android.widget.ListAdapter;

            public isLayoutDirectionResolved(): boolean;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public getItemsCanFocus(): boolean;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public onFinishInflate(): void;

            public canResolveLayoutDirection(): boolean;

            public canAnimate(): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public onFocusChanged(param0: boolean, param1: number, param2: android.graphics.Rect): void;

            public setRemoteViewsAdapter(param0: android.content.Intent): void;

            public areFooterDividersEnabled(): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public setFooterDividersEnabled(param0: boolean): void;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public layoutChildren(): void;

            public getTextAlignment(): number;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public setOverscrollFooter(param0: android.graphics.drawable.Drawable): void;

            public getOverscrollFooter(): android.graphics.drawable.Drawable;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public addHeaderView(param0: android.view.View, param1: javalangObject, param2: boolean): void;

            public isOpaque(): boolean;

            public isTextAlignmentResolved(): boolean;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public getOverscrollHeader(): android.graphics.drawable.Drawable;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public areHeaderDividersEnabled(): boolean;

            public onInitializeAccessibilityNodeInfoForItem(param0: android.view.View, param1: number, param2: android.view.accessibility.AccessibilityNodeInfo): void;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public getFooterViewsCount(): number;

            public isTextDirectionResolved(): boolean;

            public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public addView(param0: android.view.View, param1: number): void;
        }
        export module ListView {
            export class FixedViewInfo extends javalangObject {
                public data: javalangObject;
                public isSelectable: boolean;
                public view: android.view.View;

                public constructor(param0: android.widget.ListView);
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
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
declare module android {
    export module widget {
        export class MediaController extends android.widget.FrameLayout {
            public isLayoutDirectionResolved(): boolean;

            public onStopNestedScroll(param0: android.view.View): void;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public onFinishInflate(): void;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public canResolveLayoutDirection(): boolean;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public hide(): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public isShowing(): boolean;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public setEnabled(param0: boolean): void;

            public sendAccessibilityEvent(param0: number): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public setPrevNextListeners(param0: android.view.View.OnClickListener, param1: android.view.View.OnClickListener): void;

            public canResolveTextAlignment(): boolean;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public getParent(): android.view.ViewParent;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public onTrackballEvent(param0: android.view.MotionEvent): boolean;

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

            public show(): void;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public setMediaPlayer(param0: android.widget.MediaController.MediaPlayerControl): void;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public isLayoutRequested(): boolean;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public requestLayout(): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public isTextAlignmentResolved(): boolean;

            public addView(param0: android.view.View): void;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public show(param0: number): void;

            public canResolveTextDirection(): boolean;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public onTouchEvent(param0: android.view.MotionEvent): boolean;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public setAnchorView(param0: android.view.View): void;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public isTextDirectionResolved(): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context);
            public constructor(param0: android.content.Context, param1: boolean);

            public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public requestFitSystemWindows(): void;

            public addView(param0: android.view.View, param1: number): void;
        }
        export module MediaController {
            export class MediaPlayerControl extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.MediaController$MediaPlayerControl interface with the provided implementation.
                 */
                public constructor(implementation: {
                    start(): void;
                    pause(): void;
                    getDuration(): number;
                    getCurrentPosition(): number;
                    seekTo(param0: number): void;
                    isPlaying(): boolean;
                    getBufferPercentage(): number;
                    canPause(): boolean;
                    canSeekBackward(): boolean;
                    canSeekForward(): boolean;
                    getAudioSessionId(): number;
                });

                public canPause(): boolean;

                public getAudioSessionId(): number;

                public canSeekForward(): boolean;

                public canSeekBackward(): boolean;

                public getBufferPercentage(): number;

                public start(): void;

                public getDuration(): number;

                public pause(): void;

                public isPlaying(): boolean;

                public seekTo(param0: number): void;

                public getCurrentPosition(): number;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class MultiAutoCompleteTextView extends android.widget.AutoCompleteTextView {
            public getAccessibilityClassName(): string;

            public onFilterComplete(param0: number): void;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public replaceText(param0: string): void;

            public performFiltering(param0: string, param1: number, param2: number, param3: number): void;

            public performValidation(): void;

            public performFiltering(param0: string, param1: number): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public enoughToFilter(): boolean;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context);

            public setTokenizer(param0: android.widget.MultiAutoCompleteTextView.Tokenizer): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public onPreDraw(): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public sendAccessibilityEvent(param0: number): void;
        }
        export module MultiAutoCompleteTextView {
            export class CommaTokenizer extends javalangObject implements android.widget.MultiAutoCompleteTextView.Tokenizer {
                public findTokenStart(param0: string, param1: number): number;

                public terminateToken(param0: string): string;

                public findTokenEnd(param0: string, param1: number): number;

                public constructor();
            }
            export class Tokenizer extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.MultiAutoCompleteTextView$Tokenizer interface with the provided implementation.
                 */
                public constructor(implementation: {
                    findTokenStart(param0: string, param1: number): number;
                    findTokenEnd(param0: string, param1: number): number;
                    terminateToken(param0: string): string;
                });

                public findTokenStart(param0: string, param1: number): number;

                public terminateToken(param0: string): string;

                public findTokenEnd(param0: string, param1: number): number;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
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
/// <reference path="./android.view.accessibility.AccessibilityNodeProvider.d.ts" />
/// <reference path="./android.widget.NumberPicker.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class NumberPicker extends android.widget.LinearLayout {
            public getDisplayedValues(): native.Array<string>;

            public dispatchHoverEvent(param0: android.view.MotionEvent): boolean;

            public onStopNestedScroll(param0: android.view.View): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onMeasure(param0: number, param1: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public getBottomFadingEdgeStrength(): number;

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public setEnabled(param0: boolean): void;

            public setFormatter(param0: android.widget.NumberPicker.Formatter): void;

            public onDetachedFromWindow(): void;

            public sendAccessibilityEvent(param0: number): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public canResolveTextAlignment(): boolean;

            public getParent(): android.view.ViewParent;

            public getMinValue(): number;

            public getMaxValue(): number;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public computeVerticalScrollRange(): number;

            public getLayoutDirection(): number;

            public setWrapSelectorWheel(param0: boolean): void;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public performClick(): boolean;

            public focusSearch(param0: number): android.view.View;

            public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public isLayoutRequested(): boolean;

            public computeVerticalScrollExtent(): number;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public getTopFadingEdgeStrength(): number;

            public setOnValueChangedListener(param0: android.widget.NumberPicker.OnValueChangeListener): void;

            public setDisplayedValues(param0: native.Array<string>): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public requestLayout(): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public addView(param0: android.view.View): void;

            public getWrapSelectorWheel(): boolean;

            public canResolveTextDirection(): boolean;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context);

            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public getSolidColor(): number;

            public requestFitSystemWindows(): void;

            public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;

            public isLayoutDirectionResolved(): boolean;

            public drawableStateChanged(): void;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public performLongClick(): boolean;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public canResolveLayoutDirection(): boolean;

            public setOnLongPressUpdateInterval(param0: number): void;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public scrollBy(param0: number, param1: number): void;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public getValue(): number;

            public setValue(param0: number): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;

            public computeVerticalScrollOffset(): number;

            public getTextAlignment(): number;

            public onDraw(param0: android.graphics.Canvas): void;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public getAccessibilityNodeProvider(): android.view.accessibility.AccessibilityNodeProvider;

            public setMaxValue(param0: number): void;

            public setOnScrollListener(param0: android.widget.NumberPicker.OnScrollListener): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public jumpDrawablesToCurrentState(): void;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public setMinValue(param0: number): void;

            public computeScroll(): void;

            public isTextAlignmentResolved(): boolean;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public onTouchEvent(param0: android.view.MotionEvent): boolean;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public isTextDirectionResolved(): boolean;

            public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;

            public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public addView(param0: android.view.View, param1: number): void;
        }
        export module NumberPicker {
            export class Formatter extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.NumberPicker$Formatter interface with the provided implementation.
                 */
                public constructor(implementation: {
                    format(param0: number): string;
                });

                public format(param0: number): string;
            }
            export class OnScrollListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.NumberPicker$OnScrollListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onScrollStateChange(param0: android.widget.NumberPicker, param1: number): void;
                });

                public static SCROLL_STATE_FLING: number;
                public static SCROLL_STATE_TOUCH_SCROLL: number;
                public static SCROLL_STATE_IDLE: number;

                public onScrollStateChange(param0: android.widget.NumberPicker, param1: number): void;
            }
            export class OnValueChangeListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.NumberPicker$OnValueChangeListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onValueChange(param0: android.widget.NumberPicker, param1: number, param2: number): void;
                });

                public onValueChange(param0: android.widget.NumberPicker, param1: number, param2: number): void;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
declare module android {
    export module widget {
        export class OverScroller extends javalangObject {
            public startScroll(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public getFinalX(): number;

            public getCurrVelocity(): number;

            public setFriction(param0: number): void;

            public computeScrollOffset(): boolean;

            public startScroll(param0: number, param1: number, param2: number, param3: number): void;

            public getCurrX(): number;

            public fling(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number): void;

            public constructor(param0: android.content.Context, param1: android.view.animation.Interpolator, param2: number, param3: number, param4: boolean);

            public getStartY(): number;

            public constructor(param0: android.content.Context, param1: android.view.animation.Interpolator);

            public notifyVerticalEdgeReached(param0: number, param1: number, param2: number): void;

            public abortAnimation(): void;

            public notifyHorizontalEdgeReached(param0: number, param1: number, param2: number): void;

            public getFinalY(): number;

            public fling(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;

            public isFinished(): boolean;

            public getCurrY(): number;

            public springBack(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): boolean;

            public constructor(param0: android.content.Context);
            public constructor(param0: android.content.Context, param1: android.view.animation.Interpolator, param2: number, param3: number);

            public isOverScrolled(): boolean;

            public forceFinished(param0: boolean): void;

            public getStartX(): number;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuInflater.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.PopupMenu.d.ts" />
declare module android {
    export module widget {
        export class PopupMenu extends javalangObject {
            public show(): void;

            public getMenu(): android.view.Menu;

            public dismiss(): void;

            public setOnDismissListener(param0: android.widget.PopupMenu.OnDismissListener): void;

            public constructor(param0: android.content.Context, param1: android.view.View, param2: number, param3: number, param4: number);

            public setOnMenuItemClickListener(param0: android.widget.PopupMenu.OnMenuItemClickListener): void;

            public getMenuInflater(): android.view.MenuInflater;

            public constructor(param0: android.content.Context, param1: android.view.View);

            public inflate(param0: number): void;

            public constructor(param0: android.content.Context, param1: android.view.View, param2: number);

            public getGravity(): number;

            public getDragToOpenListener(): android.view.View.OnTouchListener;

            public setGravity(param0: number): void;
        }
        export module PopupMenu {
            export class OnDismissListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.PopupMenu$OnDismissListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onDismiss(param0: android.widget.PopupMenu): void;
                });

                public onDismiss(param0: android.widget.PopupMenu): void;
            }
            export class OnMenuItemClickListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.PopupMenu$OnMenuItemClickListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onMenuItemClick(param0: android.view.MenuItem): boolean;
                });

                public onMenuItemClick(param0: android.view.MenuItem): boolean;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.transition.Transition.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
declare module android {
    export module widget {
        export class PopupWindow extends javalangObject {
            public static INPUT_METHOD_FROM_FOCUSABLE: number;
            public static INPUT_METHOD_NEEDED: number;
            public static INPUT_METHOD_NOT_NEEDED: number;

            public setHeight(param0: number): void;

            public setFocusable(param0: boolean): void;

            public isTouchable(): boolean;

            public isAttachedInDecor(): boolean;

            public update(param0: number, param1: number, param2: number, param3: number, param4: boolean): void;

            public getWidth(): number;

            public getSoftInputMode(): number;

            public setContentView(param0: android.view.View): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public update(param0: number, param1: number, param2: number, param3: number): void;

            public isSplitTouchEnabled(): boolean;

            public setOverlapAnchor(param0: boolean): void;

            public getOverlapAnchor(): boolean;

            public getInputMethodMode(): number;

            public setIgnoreCheekPress(): void;

            public isAboveAnchor(): boolean;

            public showAtLocation(param0: android.view.View, param1: number, param2: number, param3: number): void;

            public isShowing(): boolean;

            public isFocusable(): boolean;

            public setElevation(param0: number): void;

            public getHeight(): number;

            public setTouchInterceptor(param0: android.view.View.OnTouchListener): void;

            public update(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public setWidth(param0: number): void;

            public constructor();

            public showAsDropDown(param0: android.view.View): void;

            public getContentView(): android.view.View;

            public setClippingEnabled(param0: boolean): void;

            public setSplitTouchEnabled(param0: boolean): void;

            public getMaxAvailableHeight(param0: android.view.View, param1: number): number;

            public getAnimationStyle(): number;

            public setAttachedInDecor(param0: boolean): void;

            public setExitTransition(param0: android.transition.Transition): void;

            public setInputMethodMode(param0: number): void;

            public isClippingEnabled(): boolean;

            public showAsDropDown(param0: android.view.View, param1: number, param2: number): void;
            public showAsDropDown(param0: android.view.View, param1: number, param2: number, param3: number): void;

            public update(): void;

            public setEnterTransition(param0: android.transition.Transition): void;

            public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;

            public setTouchable(param0: boolean): void;

            public constructor(param0: android.view.View);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
            public constructor(param0: number, param1: number);

            public getElevation(): number;

            public setWindowLayoutMode(param0: number, param1: number): void;

            public dismiss(): void;

            public setOutsideTouchable(param0: boolean): void;

            public update(param0: android.view.View, param1: number, param2: number): void;

            public constructor(param0: android.view.View, param1: number, param2: number, param3: boolean);

            public setWindowLayoutType(param0: number): void;

            public setAnimationStyle(param0: number): void;

            public getMaxAvailableHeight(param0: android.view.View): number;

            public setSoftInputMode(param0: number): void;

            public isOutsideTouchable(): boolean;

            public getWindowLayoutType(): number;

            public constructor(param0: android.content.Context);
            public constructor(param0: android.view.View, param1: number, param2: number);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public update(param0: number, param1: number): void;

            public getBackground(): android.graphics.drawable.Drawable;

            public setOnDismissListener(param0: android.widget.PopupWindow.OnDismissListener): void;
        }
        export module PopupWindow {
            export class OnDismissListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.PopupWindow$OnDismissListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onDismiss(): void;
                });

                public onDismiss(): void;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class ProgressBar extends android.view.View {
            public getSecondaryProgressTintList(): android.content.res.ColorStateList;

            public getProgress(): number;

            public setSecondaryProgressTintMode(param0: android.graphics.PorterDuff.Mode): void;

            public drawableStateChanged(): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onMeasure(param0: number, param1: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public getIndeterminateTintMode(): android.graphics.PorterDuff.Mode;

            public setProgress(param0: number): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public setProgressTintMode(param0: android.graphics.PorterDuff.Mode): void;

            public setSecondaryProgressTintList(param0: android.content.res.ColorStateList): void;

            public incrementProgressBy(param0: number): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public onDetachedFromWindow(): void;

            public sendAccessibilityEvent(param0: number): void;

            public onRestoreInstanceState(param0: android.os.Parcelable): void;

            public getIndeterminateTintList(): android.content.res.ColorStateList;

            public setVisibility(param0: number): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getProgressBackgroundTintMode(): android.graphics.PorterDuff.Mode;

            public verifyDrawable(param0: android.graphics.drawable.Drawable): boolean;

            public isIndeterminate(): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public onDraw(param0: android.graphics.Canvas): void;

            public setIndeterminateDrawable(param0: android.graphics.drawable.Drawable): void;

            public onSaveInstanceState(): android.os.Parcelable;

            public getAccessibilityClassName(): string;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public getIndeterminateDrawable(): android.graphics.drawable.Drawable;

            public getSecondaryProgress(): number;

            public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;

            public setIndeterminateTintList(param0: android.content.res.ColorStateList): void;

            public setProgressBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;

            public getProgressTintList(): android.content.res.ColorStateList;

            public getInterpolator(): android.view.animation.Interpolator;

            public setProgressDrawableTiled(param0: android.graphics.drawable.Drawable): void;

            public getMax(): number;

            public setIndeterminate(param0: boolean): void;

            public setIndeterminateTintMode(param0: android.graphics.PorterDuff.Mode): void;

            public setProgressTintList(param0: android.content.res.ColorStateList): void;

            public getProgressTintMode(): android.graphics.PorterDuff.Mode;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public jumpDrawablesToCurrentState(): void;

            public postInvalidate(): void;

            public setMax(param0: number): void;

            public setSecondaryProgress(param0: number): void;

            public getProgressDrawable(): android.graphics.drawable.Drawable;

            public postInvalidate(param0: number, param1: number, param2: number, param3: number): void;

            public setIndeterminateDrawableTiled(param0: android.graphics.drawable.Drawable): void;

            public setInterpolator(param0: android.view.animation.Interpolator): void;

            public getProgressBackgroundTintList(): android.content.res.ColorStateList;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getSecondaryProgressTintMode(): android.graphics.PorterDuff.Mode;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public onVisibilityChanged(param0: android.view.View, param1: number): void;

            public drawableHotspotChanged(param0: number, param1: number): void;

            public setProgressDrawable(param0: android.graphics.drawable.Drawable): void;

            public setProgressBackgroundTintList(param0: android.content.res.ColorStateList): void;

            public constructor(param0: android.content.Context);

            public incrementSecondaryProgressBy(param0: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public setInterpolator(param0: android.content.Context, param1: number): void;

            public onAttachedToWindow(): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module widget {
        export class QuickContactBadge extends android.widget.ImageView implements android.view.View.OnClickListener {
            public mExcludeMimes: native.Array<string>;

            public getAccessibilityClassName(): string;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public setExcludeMimes(param0: native.Array<string>): void;

            public assignContactFromPhone(param0: string, param1: boolean): void;

            public drawableStateChanged(): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public setPrioritizedMimeType(param0: string): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public assignContactFromPhone(param0: string, param1: boolean, param2: android.os.Bundle): void;

            public sendAccessibilityEvent(param0: number): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public assignContactFromEmail(param0: string, param1: boolean, param2: android.os.Bundle): void;

            public setOverlay(param0: android.graphics.drawable.Drawable): void;

            public setMode(param0: number): void;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public assignContactUri(param0: android.net.Uri): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public drawableHotspotChanged(param0: number, param1: number): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public constructor(param0: android.content.Context);

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public onDraw(param0: android.graphics.Canvas): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public onClick(param0: android.view.View): void;

            public setImageToDefault(): void;

            public assignContactFromEmail(param0: string, param1: boolean): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class RadioButton extends android.widget.CompoundButton {
            public getAccessibilityClassName(): string;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public setChecked(param0: boolean): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public isChecked(): boolean;

            public toggle(): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context);

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public onPreDraw(): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public sendAccessibilityEvent(param0: number): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
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
/// <reference path="./android.widget.RadioGroup.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class RadioGroup extends android.widget.LinearLayout {
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

            public onFinishInflate(): void;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public canResolveLayoutDirection(): boolean;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public check(param0: number): void;

            public sendAccessibilityEvent(param0: number): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public clearCheck(): void;

            public canResolveTextAlignment(): boolean;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public getParent(): android.view.ViewParent;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getLayoutDirection(): number;

            public getTextAlignment(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;

            public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public generateLayoutParams(param0: android.util.AttributeSet): android.widget.RadioGroup.LayoutParams;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public setOnCheckedChangeListener(param0: android.widget.RadioGroup.OnCheckedChangeListener): void;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public isLayoutRequested(): boolean;

            public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.widget.LinearLayout.LayoutParams;

            public generateDefaultLayoutParams(): android.widget.LinearLayout.LayoutParams;

            public getCheckedRadioButtonId(): number;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public setOnHierarchyChangeListener(param0: android.view.ViewGroup.OnHierarchyChangeListener): void;

            public requestLayout(): void;

            public generateLayoutParams(param0: android.util.AttributeSet): android.widget.LinearLayout.LayoutParams;

            public addView(param0: android.view.View): void;

            public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;

            public childDrawableStateChanged(param0: android.view.View): void;

            public isTextAlignmentResolved(): boolean;

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

            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public addView(param0: android.view.View, param1: number): void;

            public requestFitSystemWindows(): void;
        }
        export module RadioGroup {
            export class LayoutParams extends android.widget.LinearLayout.LayoutParams {
                public constructor(param0: number, param1: number);
                public constructor(param0: android.view.ViewGroup.LayoutParams);
                public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

                public setBaseAttributes(param0: android.content.res.TypedArray, param1: number, param2: number): void;

                public constructor(param0: android.widget.LinearLayout.LayoutParams);
            }
            export class OnCheckedChangeListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.RadioGroup$OnCheckedChangeListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onCheckedChanged(param0: android.widget.RadioGroup, param1: number): void;
                });

                public onCheckedChanged(param0: android.widget.RadioGroup, param1: number): void;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.widget.RatingBar.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class RatingBar extends android.widget.AbsSeekBar {
            public getAccessibilityClassName(): string;

            public getOnRatingBarChangeListener(): android.widget.RatingBar.OnRatingBarChangeListener;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public setOnRatingBarChangeListener(param0: android.widget.RatingBar.OnRatingBarChangeListener): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public setRating(param0: number): void;

            public onMeasure(param0: number, param1: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public setNumStars(param0: number): void;

            public setIsIndicator(param0: boolean): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public setMax(param0: number): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public sendAccessibilityEvent(param0: number): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getStepSize(): number;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getRating(): number;

            public getNumStars(): number;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public setStepSize(param0: number): void;

            public isIndicator(): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public constructor(param0: android.content.Context);

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
        }
        export module RatingBar {
            export class OnRatingBarChangeListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.RatingBar$OnRatingBarChangeListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onRatingChanged(param0: android.widget.RatingBar, param1: number, param2: boolean): void;
                });

                public onRatingChanged(param0: android.widget.RatingBar, param1: number, param2: boolean): void;
            }
        }
    }
}

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
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module widget {
        export class RelativeLayout extends android.view.ViewGroup {
            public static ABOVE: number;
            public static ALIGN_BASELINE: number;
            public static ALIGN_BOTTOM: number;
            public static ALIGN_END: number;
            public static ALIGN_LEFT: number;
            public static ALIGN_PARENT_BOTTOM: number;
            public static ALIGN_PARENT_END: number;
            public static ALIGN_PARENT_LEFT: number;
            public static ALIGN_PARENT_RIGHT: number;
            public static ALIGN_PARENT_START: number;
            public static ALIGN_PARENT_TOP: number;
            public static ALIGN_RIGHT: number;
            public static ALIGN_START: number;
            public static ALIGN_TOP: number;
            public static BELOW: number;
            public static CENTER_HORIZONTAL: number;
            public static CENTER_IN_PARENT: number;
            public static CENTER_VERTICAL: number;
            public static END_OF: number;
            public static LEFT_OF: number;
            public static RIGHT_OF: number;
            public static START_OF: number;
            public static TRUE: number;

            public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;

            public isLayoutDirectionResolved(): boolean;

            public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;

            public onStopNestedScroll(param0: android.view.View): void;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onMeasure(param0: number, param1: number): void;

            public shouldDelayChildPressedState(): boolean;

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

            public setHorizontalGravity(param0: number): void;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getLayoutDirection(): number;

            public getTextAlignment(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;

            public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public setIgnoreGravity(param0: number): void;

            public setGravity(param0: number): void;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public isLayoutRequested(): boolean;

            public generateLayoutParams(param0: android.util.AttributeSet): android.widget.RelativeLayout.LayoutParams;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public getGravity(): number;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public setVerticalGravity(param0: number): void;

            public getBaseline(): number;

            public requestLayout(): void;

            public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;

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
        export module RelativeLayout {
            export class LayoutParams extends android.view.ViewGroup.MarginLayoutParams {
                public alignWithParent: boolean;

                public constructor(param0: number, param1: number);
                public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
                public constructor(param0: android.view.ViewGroup.LayoutParams);

                public debug(param0: string): string;

                public addRule(param0: number, param1: number): void;

                public resolveLayoutDirection(param0: number): void;

                public getRules(): native.Array<number>;

                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

                public removeRule(param0: number): void;

                public constructor(param0: android.widget.RelativeLayout.LayoutParams);

                public getRule(param0: number): number;

                public addRule(param0: number): void;
            }
        }
    }
}

/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.drawable.Icon.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module widget {
        export class RemoteViews extends javalangObject implements android.os.Parcelable, android.view.LayoutInflater.Filter {
            public static CREATOR: android.os.Parcelable.Creator;

            public setAccessibilityTraversalBefore(param0: number, param1: number): void;

            public setIcon(param0: number, param1: string, param2: android.graphics.drawable.Icon): void;

            public setCharSequence(param0: number, param1: string, param2: string): void;

            public clone(): javalangObject;

            public setString(param0: number, param1: string, param2: string): void;

            public setAccessibilityTraversalAfter(param0: number, param1: number): void;

            public setImageViewIcon(param0: number, param1: android.graphics.drawable.Icon): void;

            public removeAllViews(param0: number): void;

            public setOnClickPendingIntent(param0: number, param1: android.app.PendingIntent): void;

            public setIntent(param0: number, param1: string, param2: android.content.Intent): void;

            public showNext(param0: number): void;

            public constructor(param0: string, param1: number);

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public setBundle(param0: number, param1: string, param2: android.os.Bundle): void;

            public setPendingIntentTemplate(param0: number, param1: android.app.PendingIntent): void;

            public setEmptyView(param0: number, param1: number): void;

            public setImageViewUri(param0: number, param1: android.net.Uri): void;

            public setRemoteAdapter(param0: number, param1: number, param2: android.content.Intent): void;

            public clone(): android.widget.RemoteViews;

            public setImageViewResource(param0: number, param1: number): void;

            public onLoadClass(param0: javalangClass): boolean;

            public setLong(param0: number, param1: string, param2: number): void;

            public setBitmap(param0: number, param1: string, param2: android.graphics.Bitmap): void;

            public addView(param0: number, param1: android.widget.RemoteViews): void;

            public setRelativeScrollPosition(param0: number, param1: number): void;

            public setViewPadding(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public setContentDescription(param0: number, param1: string): void;

            public setViewVisibility(param0: number, param1: number): void;

            public describeContents(): number;

            public setRemoteAdapter(param0: number, param1: android.content.Intent): void;

            public setTextViewText(param0: number, param1: string): void;

            public setTextViewTextSize(param0: number, param1: number, param2: number): void;

            public setInt(param0: number, param1: string, param2: number): void;

            public setTextColor(param0: number, param1: number): void;

            public reapply(param0: android.content.Context, param1: android.view.View): void;

            public setTextViewCompoundDrawablesRelative(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public setImageViewBitmap(param0: number, param1: android.graphics.Bitmap): void;

            public getLayoutId(): number;

            public setLabelFor(param0: number, param1: number): void;

            public getPackage(): string;

            public constructor(param0: android.widget.RemoteViews, param1: android.widget.RemoteViews);

            public setUri(param0: number, param1: string, param2: android.net.Uri): void;

            public setDisplayedChild(param0: number, param1: number): void;

            public constructor(param0: android.os.Parcel);

            public setChar(param0: number, param1: string, param2: string): void;

            public showPrevious(param0: number): void;

            public setTextViewCompoundDrawables(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public setOnClickFillInIntent(param0: number, param1: android.content.Intent): void;

            public setChronometer(param0: number, param1: number, param2: string, param3: boolean): void;

            public setFloat(param0: number, param1: string, param2: number): void;

            public apply(param0: android.content.Context, param1: android.view.ViewGroup): android.view.View;

            public setProgressBar(param0: number, param1: number, param2: number, param3: boolean): void;

            public setDouble(param0: number, param1: string, param2: number): void;

            public setShort(param0: number, param1: string, param2: number): void;

            public setBoolean(param0: number, param1: string, param2: boolean): void;

            public setScrollPosition(param0: number, param1: number): void;

            public setByte(param0: number, param1: string, param2: number): void;
        }
        export module RemoteViews {
            export class ActionException extends javalangRuntimeException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor(param0: javalangException);
                public constructor();
            }
            export class RemoteView extends javalangObject implements javalangannotationAnnotation {
                /**
                 * Constructs a new instance of the android.widget.RemoteViews$RemoteView interface with the provided implementation.
                 */
                public constructor(implementation: {
                    annotationType(): javalangClass;
                    equals(param0: javalangObject): boolean;
                    hashCode(): number;
                    toString(): string;
                });

                public equals(param0: javalangObject): boolean;

                public hashCode(): number;

                public annotationType(): javalangClass;

                public toString(): string;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.widget.RemoteViews.d.ts" />
declare module android {
    export module widget {
        export abstract class RemoteViewsService extends android.app.Service {
            public onTrimMemory(param0: number): void;

            public onBind(param0: android.content.Intent): android.os.IBinder;

            public constructor(param0: android.content.Context);
            public constructor();

            public onGetViewFactory(param0: android.content.Intent): android.widget.RemoteViewsService.RemoteViewsFactory;
        }
        export module RemoteViewsService {
            export class RemoteViewsFactory extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.RemoteViewsService$RemoteViewsFactory interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onCreate(): void;
                    onDataSetChanged(): void;
                    onDestroy(): void;
                    getCount(): number;
                    getViewAt(param0: number): android.widget.RemoteViews;
                    getLoadingView(): android.widget.RemoteViews;
                    getViewTypeCount(): number;
                    getItemId(param0: number): number;
                    hasStableIds(): boolean;
                });

                public getViewTypeCount(): number;

                public hasStableIds(): boolean;

                public getViewAt(param0: number): android.widget.RemoteViews;

                public getItemId(param0: number): number;

                public onCreate(): void;

                public getLoadingView(): android.widget.RemoteViews;

                public onDataSetChanged(): void;

                public getCount(): number;

                public onDestroy(): void;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.Filter.d.ts" />
declare module android {
    export module widget {
        export abstract class ResourceCursorAdapter extends android.widget.CursorAdapter {
            public constructor(param0: android.content.Context, param1: number, param2: android.database.Cursor);

            public getFilter(): android.widget.Filter;

            public constructor(param0: android.content.Context, param1: android.database.Cursor);

            public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;

            public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: number);
            public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: boolean);
            public constructor();

            public newView(param0: android.content.Context, param1: android.database.Cursor, param2: android.view.ViewGroup): android.view.View;

            public constructor(param0: android.content.Context, param1: number, param2: android.database.Cursor, param3: boolean);

            public getDropDownViewTheme(): android.content.res.Resources.Theme;

            public constructor(param0: android.content.Context, param1: number, param2: android.database.Cursor, param3: number);

            public newDropDownView(param0: android.content.Context, param1: android.database.Cursor, param2: android.view.ViewGroup): android.view.View;

            public areAllItemsEnabled(): boolean;

            public setDropDownViewTheme(param0: android.content.res.Resources.Theme): void;

            public isEnabled(param0: number): boolean;

            public setDropDownViewResource(param0: number): void;

            public setViewResource(param0: number): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.Filter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module widget {
        export abstract class ResourceCursorTreeAdapter extends android.widget.CursorTreeAdapter {
            public getFilter(): android.widget.Filter;

            public constructor(param0: android.database.Cursor, param1: android.content.Context, param2: boolean);

            public registerDataSetObserver(param0: android.database.DataSetObserver): void;

            public getGroup(param0: number): javalangObject;

            public getChildrenCount(param0: number): number;

            public newChildView(param0: android.content.Context, param1: android.database.Cursor, param2: boolean, param3: android.view.ViewGroup): android.view.View;

            public getChildTypeCount(): number;

            public getChild(param0: number, param1: number): javalangObject;

            public hasStableIds(): boolean;

            public onGroupCollapsed(param0: number): void;

            public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: number, param3: number);

            public getGroupView(param0: number, param1: boolean, param2: android.view.View, param3: android.view.ViewGroup): android.view.View;

            public getCombinedGroupId(param0: number): number;

            public getChildView(param0: number, param1: number, param2: boolean, param3: android.view.View, param4: android.view.ViewGroup): android.view.View;

            public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

            public getGroup(param0: number): android.database.Cursor;

            public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: number, param3: number, param4: number, param5: number);

            public getGroupId(param0: number): number;

            public getGroupType(param0: number): number;

            public getCombinedChildId(param0: number, param1: number): number;

            public getGroupCount(): number;

            public isEmpty(): boolean;

            public getChild(param0: number, param1: number): android.database.Cursor;

            public getChildId(param0: number, param1: number): number;

            public constructor();
            public constructor(param0: android.database.Cursor, param1: android.content.Context);

            public onGroupExpanded(param0: number): void;

            public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: number, param3: number, param4: number);

            public isChildSelectable(param0: number, param1: number): boolean;

            public getGroupTypeCount(): number;

            public areAllItemsEnabled(): boolean;

            public getChildType(param0: number, param1: number): number;

            public newGroupView(param0: android.content.Context, param1: android.database.Cursor, param2: boolean, param3: android.view.ViewGroup): android.view.View;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class ScrollView extends android.widget.FrameLayout {
            public setSmoothScrollingEnabled(param0: boolean): void;

            public onStopNestedScroll(param0: android.view.View): void;

            public smoothScrollTo(param0: number, param1: number): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onMeasure(param0: number, param1: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public getBottomFadingEdgeStrength(): number;

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public scrollTo(param0: number, param1: number): void;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public onDetachedFromWindow(): void;

            public sendAccessibilityEvent(param0: number): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public setFillViewport(param0: boolean): void;

            public canResolveTextAlignment(): boolean;

            public getParent(): android.view.ViewParent;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public computeVerticalScrollRange(): number;

            public getLayoutDirection(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public setOverScrollMode(param0: number): void;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public isLayoutRequested(): boolean;

            public computeScrollDeltaToGetChildRectOnScreen(param0: android.graphics.Rect): number;

            public isSmoothScrollingEnabled(): boolean;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public getTopFadingEdgeStrength(): number;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public getMaxScrollAmount(): number;

            public requestLayout(): void;

            public addView(param0: android.view.View): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public canResolveTextDirection(): boolean;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context);

            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;

            public requestFitSystemWindows(): void;

            public onOverScrolled(param0: number, param1: number, param2: boolean, param3: boolean): void;

            public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;

            public measureChildWithMargins(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public isLayoutDirectionResolved(): boolean;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public shouldDelayChildPressedState(): boolean;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public canResolveLayoutDirection(): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public draw(param0: android.graphics.Canvas): void;

            public onRestoreInstanceState(param0: android.os.Parcelable): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public onRequestFocusInDescendants(param0: number, param1: android.graphics.Rect): boolean;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public arrowScroll(param0: number): boolean;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public computeVerticalScrollOffset(): number;

            public getTextAlignment(): number;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onSaveInstanceState(): android.os.Parcelable;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;

            public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;

            public executeKeyEvent(param0: android.view.KeyEvent): boolean;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public computeScroll(): void;

            public isTextAlignmentResolved(): boolean;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public fullScroll(param0: number): boolean;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public fling(param0: number): void;

            public onTouchEvent(param0: android.view.MotionEvent): boolean;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public pageScroll(param0: number): boolean;

            public isTextDirectionResolved(): boolean;

            public smoothScrollBy(param0: number, param1: number): void;

            public measureChild(param0: android.view.View, param1: number, param2: number): void;

            public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public isFillViewport(): boolean;

            public addView(param0: android.view.View, param1: number): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
declare module android {
    export module widget {
        export class Scroller extends javalangObject {
            public startScroll(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public timePassed(): number;

            public getFinalX(): number;

            public getCurrVelocity(): number;

            public setFriction(param0: number): void;

            public computeScrollOffset(): boolean;

            public startScroll(param0: number, param1: number, param2: number, param3: number): void;

            public getCurrX(): number;

            public getDuration(): number;

            public getStartY(): number;

            public constructor(param0: android.content.Context, param1: android.view.animation.Interpolator);

            public abortAnimation(): void;

            public getFinalY(): number;

            public fling(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;

            public constructor(param0: android.content.Context, param1: android.view.animation.Interpolator, param2: boolean);

            public isFinished(): boolean;

            public getCurrY(): number;

            public constructor(param0: android.content.Context);

            public setFinalX(param0: number): void;

            public setFinalY(param0: number): void;

            public extendDuration(param0: number): void;

            public forceFinished(param0: boolean): void;

            public getStartX(): number;
        }
    }
}

/// <reference path="./android.app.SearchableInfo.d.ts" />
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
/// <reference path="./android.widget.CursorAdapter.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module widget {
        export class SearchView extends android.widget.LinearLayout implements android.view.CollapsibleActionView {
            public setIconified(param0: boolean): void;

            public isLayoutDirectionResolved(): boolean;

            public onStopNestedScroll(param0: android.view.View): void;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onMeasure(param0: number, param1: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public setOnSearchClickListener(param0: android.view.View.OnClickListener): void;

            public isSubmitButtonEnabled(): boolean;

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public onActionViewCollapsed(): void;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public canResolveLayoutDirection(): boolean;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public setInputType(param0: number): void;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public setOnSuggestionListener(param0: android.widget.SearchView.OnSuggestionListener): void;

            public isIconified(): boolean;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public getQuery(): string;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public setSubmitButtonEnabled(param0: boolean): void;

            public onDetachedFromWindow(): void;

            public sendAccessibilityEvent(param0: number): void;

            public setMaxWidth(param0: number): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public canResolveTextAlignment(): boolean;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public getParent(): android.view.ViewParent;

            public setImeOptions(param0: number): void;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public setOnCloseListener(param0: android.widget.SearchView.OnCloseListener): void;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public isQueryRefinementEnabled(): boolean;

            public getLayoutDirection(): number;

            public getTextAlignment(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public onWindowFocusChanged(param0: boolean): void;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public getImeOptions(): number;

            public recomputeViewAttributes(param0: android.view.View): void;

            public setQueryRefinementEnabled(param0: boolean): void;

            public setOnQueryTextFocusChangeListener(param0: android.view.View.OnFocusChangeListener): void;

            public isLayoutRequested(): boolean;

            public setSuggestionsAdapter(param0: android.widget.CursorAdapter): void;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public isIconfiedByDefault(): boolean;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public setIconifiedByDefault(param0: boolean): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public onActionViewExpanded(): void;

            public getInputType(): number;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public setSearchableInfo(param0: android.app.SearchableInfo): void;

            public setOnQueryTextListener(param0: android.widget.SearchView.OnQueryTextListener): void;

            public requestLayout(): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public isTextAlignmentResolved(): boolean;

            public addView(param0: android.view.View): void;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public getQueryHint(): string;

            public canResolveTextDirection(): boolean;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public getMaxWidth(): number;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public setQueryHint(param0: string): void;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public isTextDirectionResolved(): boolean;

            public getSuggestionsAdapter(): android.widget.CursorAdapter;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context);

            public setQuery(param0: string, param1: boolean): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public requestFitSystemWindows(): void;

            public addView(param0: android.view.View, param1: number): void;
        }
        export module SearchView {
            export class OnCloseListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.SearchView$OnCloseListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onClose(): boolean;
                });

                public onClose(): boolean;
            }
            export class OnQueryTextListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.SearchView$OnQueryTextListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onQueryTextSubmit(param0: string): boolean;
                    onQueryTextChange(param0: string): boolean;
                });

                public onQueryTextChange(param0: string): boolean;

                public onQueryTextSubmit(param0: string): boolean;
            }
            export class OnSuggestionListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.SearchView$OnSuggestionListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onSuggestionSelect(param0: number): boolean;
                    onSuggestionClick(param0: number): boolean;
                });

                public onSuggestionSelect(param0: number): boolean;

                public onSuggestionClick(param0: number): boolean;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module widget {
        export class SectionIndexer extends javalangObject {
            /**
             * Constructs a new instance of the android.widget.SectionIndexer interface with the provided implementation.
             */
            public constructor(implementation: {
                getSections(): native.Array<javalangObject>;
                getPositionForSection(param0: number): number;
                getSectionForPosition(param0: number): number;
            });

            public getPositionForSection(param0: number): number;

            public getSections(): native.Array<javalangObject>;

            public getSectionForPosition(param0: number): number;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.widget.SeekBar.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class SeekBar extends android.widget.AbsSeekBar {
            public getAccessibilityClassName(): string;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public setOnSeekBarChangeListener(param0: android.widget.SeekBar.OnSeekBarChangeListener): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context);

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public sendAccessibilityEvent(param0: number): void;
        }
        export module SeekBar {
            export class OnSeekBarChangeListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.SeekBar$OnSeekBarChangeListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onProgressChanged(param0: android.widget.SeekBar, param1: number, param2: boolean): void;
                    onStartTrackingTouch(param0: android.widget.SeekBar): void;
                    onStopTrackingTouch(param0: android.widget.SeekBar): void;
                });

                public onStopTrackingTouch(param0: android.widget.SeekBar): void;

                public onProgressChanged(param0: android.widget.SeekBar, param1: number, param2: boolean): void;

                public onStartTrackingTouch(param0: android.widget.SeekBar): void;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.SubMenu.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.ShareActionProvider.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module widget {
        export class ShareActionProvider extends android.view.ActionProvider {
            public static DEFAULT_SHARE_HISTORY_FILE_NAME: string;

            public setShareHistoryFileName(param0: string): void;

            public onCreateActionView(): android.view.View;

            public constructor(param0: android.content.Context);

            public setOnShareTargetSelectedListener(param0: android.widget.ShareActionProvider.OnShareTargetSelectedListener): void;

            public onPrepareSubMenu(param0: android.view.SubMenu): void;

            public onCreateActionView(param0: android.view.MenuItem): android.view.View;

            public hasSubMenu(): boolean;

            public setShareIntent(param0: android.content.Intent): void;
        }
        export module ShareActionProvider {
            export class OnShareTargetSelectedListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.ShareActionProvider$OnShareTargetSelectedListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onShareTargetSelected(param0: android.widget.ShareActionProvider, param1: android.content.Intent): boolean;
                });

                public onShareTargetSelected(param0: android.widget.ShareActionProvider, param1: android.content.Intent): boolean;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.Filter.d.ts" />
/// <reference path="./android.widget.ImageView.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module widget {
        export class SimpleAdapter extends android.widget.BaseAdapter implements android.widget.Filterable, android.widget.ThemedSpinnerAdapter {
            public getViewBinder(): android.widget.SimpleAdapter.ViewBinder;

            public getFilter(): android.widget.Filter;

            public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;

            public registerDataSetObserver(param0: android.database.DataSetObserver): void;

            public isEmpty(): boolean;

            public getItemId(param0: number): number;

            public setViewText(param0: android.widget.TextView, param1: string): void;

            public hasStableIds(): boolean;

            public constructor();

            public getDropDownViewTheme(): android.content.res.Resources.Theme;

            public setViewBinder(param0: android.widget.SimpleAdapter.ViewBinder): void;

            public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

            public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;

            public getItem(param0: number): javalangObject;

            public setViewImage(param0: android.widget.ImageView, param1: number): void;
            public setViewImage(param0: android.widget.ImageView, param1: string): void;

            public getItemViewType(param0: number): number;

            public getViewTypeCount(): number;

            public areAllItemsEnabled(): boolean;

            public setDropDownViewTheme(param0: android.content.res.Resources.Theme): void;

            public isEnabled(param0: number): boolean;

            public constructor(param0: android.content.Context, param1: javautilList, param2: number, param3: native.Array<string>, param4: native.Array<number>);

            public getCount(): number;

            public setDropDownViewResource(param0: number): void;
        }
        export module SimpleAdapter {
            export class ViewBinder extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.SimpleAdapter$ViewBinder interface with the provided implementation.
                 */
                public constructor(implementation: {
                    setViewValue(param0: android.view.View, param1: javalangObject, param2: string): boolean;
                });

                public setViewValue(param0: android.view.View, param1: javalangObject, param2: string): boolean;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.Filter.d.ts" />
/// <reference path="./android.widget.ImageView.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module widget {
        export class SimpleCursorAdapter extends android.widget.ResourceCursorAdapter {
            public getCursorToStringConverter(): android.widget.SimpleCursorAdapter.CursorToStringConverter;

            public getFilter(): android.widget.Filter;

            public setStringConversionColumn(param0: number): void;

            public changeCursorAndColumns(param0: android.database.Cursor, param1: native.Array<string>, param2: native.Array<number>): void;

            public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: boolean);

            public setViewText(param0: android.widget.TextView, param1: string): void;

            public constructor(param0: android.content.Context, param1: number, param2: android.database.Cursor, param3: boolean);

            public setCursorToStringConverter(param0: android.widget.SimpleCursorAdapter.CursorToStringConverter): void;

            public getDropDownViewTheme(): android.content.res.Resources.Theme;

            public constructor(param0: android.content.Context, param1: number, param2: android.database.Cursor, param3: number);

            public isEnabled(param0: number): boolean;

            public setDropDownViewTheme(param0: android.content.res.Resources.Theme): void;

            public constructor(param0: android.content.Context, param1: number, param2: android.database.Cursor, param3: native.Array<string>, param4: native.Array<number>, param5: number);
            public constructor(param0: android.content.Context, param1: number, param2: android.database.Cursor);
            public constructor(param0: android.content.Context, param1: android.database.Cursor);

            public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;

            public setViewBinder(param0: android.widget.SimpleCursorAdapter.ViewBinder): void;

            public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: number);
            public constructor();

            public bindView(param0: android.view.View, param1: android.content.Context, param2: android.database.Cursor): void;

            public swapCursor(param0: android.database.Cursor): android.database.Cursor;

            public constructor(param0: android.content.Context, param1: number, param2: android.database.Cursor, param3: native.Array<string>, param4: native.Array<number>);

            public setViewImage(param0: android.widget.ImageView, param1: string): void;

            public areAllItemsEnabled(): boolean;

            public convertToString(param0: android.database.Cursor): string;

            public getStringConversionColumn(): number;

            public getViewBinder(): android.widget.SimpleCursorAdapter.ViewBinder;
        }
        export module SimpleCursorAdapter {
            export class CursorToStringConverter extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.SimpleCursorAdapter$CursorToStringConverter interface with the provided implementation.
                 */
                public constructor(implementation: {
                    convertToString(param0: android.database.Cursor): string;
                });

                public convertToString(param0: android.database.Cursor): string;
            }
            export class ViewBinder extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.SimpleCursorAdapter$ViewBinder interface with the provided implementation.
                 */
                public constructor(implementation: {
                    setViewValue(param0: android.view.View, param1: android.database.Cursor, param2: number): boolean;
                });

                public setViewValue(param0: android.view.View, param1: android.database.Cursor, param2: number): boolean;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.Filter.d.ts" />
/// <reference path="./android.widget.ImageView.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module widget {
        export abstract class SimpleCursorTreeAdapter extends android.widget.ResourceCursorTreeAdapter {
            public getFilter(): android.widget.Filter;

            public constructor(param0: android.database.Cursor, param1: android.content.Context, param2: boolean);

            public registerDataSetObserver(param0: android.database.DataSetObserver): void;

            public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: number, param3: number, param4: native.Array<string>, param5: native.Array<number>, param6: number, param7: number, param8: native.Array<string>, param9: native.Array<number>);

            public getGroup(param0: number): javalangObject;

            public getChildrenCount(param0: number): number;

            public setViewText(param0: android.widget.TextView, param1: string): void;

            public getChildTypeCount(): number;

            public getChild(param0: number, param1: number): javalangObject;

            public hasStableIds(): boolean;

            public onGroupCollapsed(param0: number): void;

            public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: number, param3: number);

            public getGroupView(param0: number, param1: boolean, param2: android.view.View, param3: android.view.ViewGroup): android.view.View;

            public getCombinedGroupId(param0: number): number;

            public getChildView(param0: number, param1: number, param2: boolean, param3: android.view.View, param4: android.view.ViewGroup): android.view.View;

            public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

            public getGroup(param0: number): android.database.Cursor;

            public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: number, param3: number, param4: number, param5: number);

            public getGroupId(param0: number): number;

            public getGroupType(param0: number): number;

            public getCombinedChildId(param0: number, param1: number): number;

            public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: number, param3: number, param4: native.Array<string>, param5: native.Array<number>, param6: number, param7: native.Array<string>, param8: native.Array<number>);

            public getGroupCount(): number;

            public isEmpty(): boolean;

            public getChild(param0: number, param1: number): android.database.Cursor;

            public getChildId(param0: number, param1: number): number;

            public bindChildView(param0: android.view.View, param1: android.content.Context, param2: android.database.Cursor, param3: boolean): void;

            public constructor();
            public constructor(param0: android.database.Cursor, param1: android.content.Context);
            public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: number, param3: native.Array<string>, param4: native.Array<number>, param5: number, param6: native.Array<string>, param7: native.Array<number>);

            public onGroupExpanded(param0: number): void;

            public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: number, param3: number, param4: number);

            public isChildSelectable(param0: number, param1: number): boolean;

            public setViewImage(param0: android.widget.ImageView, param1: string): void;

            public setViewBinder(param0: android.widget.SimpleCursorTreeAdapter.ViewBinder): void;

            public getGroupTypeCount(): number;

            public areAllItemsEnabled(): boolean;

            public bindGroupView(param0: android.view.View, param1: android.content.Context, param2: android.database.Cursor, param3: boolean): void;

            public getChildType(param0: number, param1: number): number;

            public getViewBinder(): android.widget.SimpleCursorTreeAdapter.ViewBinder;
        }
        export module SimpleCursorTreeAdapter {
            export class ViewBinder extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.SimpleCursorTreeAdapter$ViewBinder interface with the provided implementation.
                 */
                public constructor(implementation: {
                    setViewValue(param0: android.view.View, param1: android.database.Cursor, param2: number): boolean;
                });

                public setViewValue(param0: android.view.View, param1: android.database.Cursor, param2: number): boolean;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module widget {
        export class SimpleExpandableListAdapter extends android.widget.BaseExpandableListAdapter {
            public constructor(param0: android.content.Context, param1: javautilList, param2: number, param3: native.Array<string>, param4: native.Array<number>, param5: javautilList, param6: number, param7: native.Array<string>, param8: native.Array<number>);

            public registerDataSetObserver(param0: android.database.DataSetObserver): void;

            public getGroup(param0: number): javalangObject;

            public constructor(param0: android.content.Context, param1: javautilList, param2: number, param3: number, param4: native.Array<string>, param5: native.Array<number>, param6: javautilList, param7: number, param8: native.Array<string>, param9: native.Array<number>);

            public getChildrenCount(param0: number): number;

            public getChild(param0: number, param1: number): javalangObject;

            public hasStableIds(): boolean;

            public getChildTypeCount(): number;

            public onGroupCollapsed(param0: number): void;

            public getGroupView(param0: number, param1: boolean, param2: android.view.View, param3: android.view.ViewGroup): android.view.View;

            public getCombinedGroupId(param0: number): number;

            public getChildView(param0: number, param1: number, param2: boolean, param3: android.view.View, param4: android.view.ViewGroup): android.view.View;

            public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

            public getGroupId(param0: number): number;

            public getGroupType(param0: number): number;

            public newChildView(param0: boolean, param1: android.view.ViewGroup): android.view.View;

            public getCombinedChildId(param0: number, param1: number): number;

            public getGroupCount(): number;

            public isEmpty(): boolean;

            public getChildId(param0: number, param1: number): number;

            public constructor();

            public newGroupView(param0: boolean, param1: android.view.ViewGroup): android.view.View;

            public onGroupExpanded(param0: number): void;

            public isChildSelectable(param0: number, param1: number): boolean;

            public constructor(param0: android.content.Context, param1: javautilList, param2: number, param3: number, param4: native.Array<string>, param5: native.Array<number>, param6: javautilList, param7: number, param8: number, param9: native.Array<string>, param10: native.Array<number>);

            public getGroupTypeCount(): number;

            public areAllItemsEnabled(): boolean;

            public getChildType(param0: number, param1: number): number;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
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
declare module android {
    export module widget {
        export class SlidingDrawer extends android.view.ViewGroup {
            public static ORIENTATION_HORIZONTAL: number;
            public static ORIENTATION_VERTICAL: number;

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

            public onFinishInflate(): void;

            public animateToggle(): void;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public canResolveLayoutDirection(): boolean;

            public getContent(): android.view.View;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public sendAccessibilityEvent(param0: number): void;

            public animateClose(): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public canResolveTextAlignment(): boolean;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public getParent(): android.view.ViewParent;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public dispatchDraw(param0: android.graphics.Canvas): void;

            public getHandle(): android.view.View;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getLayoutDirection(): number;

            public getTextAlignment(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public isOpened(): boolean;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public isLayoutRequested(): boolean;

            public toggle(): void;

            public isMoving(): boolean;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public lock(): void;

            public setOnDrawerOpenListener(param0: android.widget.SlidingDrawer.OnDrawerOpenListener): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public close(): void;

            public requestLayout(): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public isTextAlignmentResolved(): boolean;

            public addView(param0: android.view.View): void;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public animateOpen(): void;

            public canResolveTextDirection(): boolean;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public onTouchEvent(param0: android.view.MotionEvent): boolean;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public isTextDirectionResolved(): boolean;

            public unlock(): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public setOnDrawerScrollListener(param0: android.widget.SlidingDrawer.OnDrawerScrollListener): void;

            public constructor(param0: android.content.Context);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public open(): void;

            public setOnDrawerCloseListener(param0: android.widget.SlidingDrawer.OnDrawerCloseListener): void;

            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public requestFitSystemWindows(): void;

            public addView(param0: android.view.View, param1: number): void;
        }
        export module SlidingDrawer {
            export class OnDrawerCloseListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.SlidingDrawer$OnDrawerCloseListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onDrawerClosed(): void;
                });

                public onDrawerClosed(): void;
            }
            export class OnDrawerOpenListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.SlidingDrawer$OnDrawerOpenListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onDrawerOpened(): void;
                });

                public onDrawerOpened(): void;
            }
            export class OnDrawerScrollListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.SlidingDrawer$OnDrawerScrollListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onScrollStarted(): void;
                    onScrollEnded(): void;
                });

                public onScrollStarted(): void;

                public onScrollEnded(): void;
            }
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
    export module widget {
        export class Space extends android.view.View {
            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onMeasure(param0: number, param1: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context);

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public draw(param0: android.graphics.Canvas): void;

            public sendAccessibilityEvent(param0: number): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.DialogInterface.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.widget.Adapter.d.ts" />
/// <reference path="./android.widget.SpinnerAdapter.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class Spinner extends android.widget.AbsSpinner implements android.content.DialogInterface.OnClickListener {
            public static MODE_DIALOG: number;
            public static MODE_DROPDOWN: number;

            public onClick(param0: android.content.DialogInterface, param1: number): void;

            public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;

            public getPrompt(): string;

            public isLayoutDirectionResolved(): boolean;

            public onStopNestedScroll(param0: android.view.View): void;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public getPopupBackground(): android.graphics.drawable.Drawable;

            public onMeasure(param0: number, param1: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public setOnItemClickListener(param0: android.widget.AdapterView.OnItemClickListener): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number, param4: number, param5: android.content.res.Resources.Theme);

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public canResolveLayoutDirection(): boolean;

            public getDropDownVerticalOffset(): number;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public setDropDownWidth(param0: number): void;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public setEnabled(param0: boolean): void;

            public setAdapter(param0: android.widget.Adapter): void;

            public onDetachedFromWindow(): void;

            public sendAccessibilityEvent(param0: number): void;

            public onRestoreInstanceState(param0: android.os.Parcelable): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public canResolveTextAlignment(): boolean;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public setDropDownVerticalOffset(param0: number): void;

            public getParent(): android.view.ViewParent;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public constructor(param0: android.content.Context, param1: number);

            public getPopupContext(): android.content.Context;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getLayoutDirection(): number;

            public getTextAlignment(): number;

            public setAdapter(param0: android.widget.SpinnerAdapter): void;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public performClick(): boolean;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onSaveInstanceState(): android.os.Parcelable;

            public setGravity(param0: number): void;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public isLayoutRequested(): boolean;

            public getDropDownWidth(): number;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number, param4: number);

            public setDropDownHorizontalOffset(param0: number): void;

            public setPopupBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public getDropDownHorizontalOffset(): number;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public getGravity(): number;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public getBaseline(): number;

            public setPromptId(param0: number): void;

            public requestLayout(): void;

            public setPrompt(param0: string): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public isTextAlignmentResolved(): boolean;

            public addView(param0: android.view.View): void;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public canResolveTextDirection(): boolean;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public onTouchEvent(param0: android.view.MotionEvent): boolean;

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

            public setPopupBackgroundResource(param0: number): void;

            public requestFitSystemWindows(): void;

            public addView(param0: android.view.View, param1: number): void;
        }
    }
}

/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module widget {
        export class SpinnerAdapter extends javalangObject implements android.widget.Adapter {
            /**
             * Constructs a new instance of the android.widget.SpinnerAdapter interface with the provided implementation.
             */
            public constructor(implementation: {
                getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
                registerDataSetObserver(param0: android.database.DataSetObserver): void;
                unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
                getCount(): number;
                getItem(param0: number): javalangObject;
                getItemId(param0: number): number;
                hasStableIds(): boolean;
                getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
                getItemViewType(param0: number): number;
                getViewTypeCount(): number;
                isEmpty(): boolean;
            });

            public static NO_SELECTION: number;
            public static IGNORE_ITEM_VIEW_TYPE: number;

            public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

            public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;

            public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;

            public registerDataSetObserver(param0: android.database.DataSetObserver): void;

            public getItem(param0: number): javalangObject;

            public getItemViewType(param0: number): number;

            public isEmpty(): boolean;

            public getViewTypeCount(): number;

            public getItemId(param0: number): number;

            public hasStableIds(): boolean;

            public getCount(): number;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
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
declare module android {
    export module widget {
        export class StackView extends android.widget.AdapterViewAnimator {
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

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public fyiWillBeAdvancedByHostKThx(): void;

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

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public dispatchDraw(param0: android.graphics.Canvas): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getLayoutDirection(): number;

            public getTextAlignment(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public showNext(): void;

            public isLayoutRequested(): boolean;

            public advance(): void;

            public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public showPrevious(): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public requestLayout(): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public isTextAlignmentResolved(): boolean;

            public addView(param0: android.view.View): void;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public canResolveTextDirection(): boolean;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public onTouchEvent(param0: android.view.MotionEvent): boolean;

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
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.ViewStructure.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class Switch extends android.widget.CompoundButton {
            public setThumbTintList(param0: android.content.res.ColorStateList): void;

            public getTextOn(): string;

            public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;

            public getSwitchPadding(): number;

            public getTrackDrawable(): android.graphics.drawable.Drawable;

            public drawableStateChanged(): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onMeasure(param0: number, param1: number): void;

            public setTrackDrawable(param0: android.graphics.drawable.Drawable): void;

            public getThumbDrawable(): android.graphics.drawable.Drawable;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public setSplitTrack(param0: boolean): void;

            public getTrackTintList(): android.content.res.ColorStateList;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public setSwitchTypeface(param0: android.graphics.Typeface): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public setSwitchTextAppearance(param0: android.content.Context, param1: number): void;

            public draw(param0: android.graphics.Canvas): void;

            public sendAccessibilityEvent(param0: number): void;

            public setChecked(param0: boolean): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public verifyDrawable(param0: android.graphics.drawable.Drawable): boolean;

            public setSwitchTypeface(param0: android.graphics.Typeface, param1: number): void;

            public setTrackTintMode(param0: android.graphics.PorterDuff.Mode): void;

            public onProvideStructure(param0: android.view.ViewStructure): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public setSwitchPadding(param0: number): void;

            public getTrackTintMode(): android.graphics.PorterDuff.Mode;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public onDraw(param0: android.graphics.Canvas): void;

            public setThumbTextPadding(param0: number): void;

            public getShowText(): boolean;

            public getSplitTrack(): boolean;

            public getAccessibilityClassName(): string;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public setThumbResource(param0: number): void;

            public toggle(): void;

            public onCreateDrawableState(param0: number): native.Array<number>;

            public getCompoundPaddingRight(): number;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public jumpDrawablesToCurrentState(): void;

            public onPreDraw(): boolean;

            public setTrackTintList(param0: android.content.res.ColorStateList): void;

            public setSwitchMinWidth(param0: number): void;

            public getThumbTextPadding(): number;

            public isChecked(): boolean;

            public getCompoundPaddingLeft(): number;

            public onTouchEvent(param0: android.view.MotionEvent): boolean;

            public getThumbTintMode(): android.graphics.PorterDuff.Mode;

            public getThumbTintList(): android.content.res.ColorStateList;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public setTrackResource(param0: number): void;

            public setTextOn(param0: string): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public setTextOff(param0: string): void;

            public setThumbTintMode(param0: android.graphics.PorterDuff.Mode): void;

            public drawableHotspotChanged(param0: number, param1: number): void;

            public getTextOff(): string;

            public getSwitchMinWidth(): number;

            public constructor(param0: android.content.Context);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public setThumbDrawable(param0: android.graphics.drawable.Drawable): void;

            public setShowText(param0: boolean): void;
        }
    }
}

/// <reference path="./android.app.LocalActivityManager.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
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
/// <reference path="./android.widget.FrameLayout.d.ts" />
/// <reference path="./android.widget.TabWidget.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module widget {
        export class TabHost extends android.widget.FrameLayout implements android.view.ViewTreeObserver.OnTouchModeChangeListener {
            public isLayoutDirectionResolved(): boolean;

            public onStopNestedScroll(param0: android.view.View): void;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public getCurrentTabView(): android.view.View;

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public canResolveLayoutDirection(): boolean;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public setCurrentTab(param0: number): void;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public sendAccessibilityEvent(param0: number): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public setOnTabChangedListener(param0: android.widget.TabHost.OnTabChangeListener): void;

            public canResolveTextAlignment(): boolean;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public newTabSpec(param0: string): android.widget.TabHost.TabSpec;

            public getParent(): android.view.ViewParent;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getLayoutDirection(): number;

            public getTextAlignment(): number;

            public dispatchWindowFocusChanged(param0: boolean): void;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public onTouchModeChanged(param0: boolean): void;

            public getTabWidget(): android.widget.TabWidget;

            public getCurrentTabTag(): string;

            public isLayoutRequested(): boolean;

            public setup(): void;

            public addTab(param0: android.widget.TabHost.TabSpec): void;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public getCurrentTab(): number;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public setup(param0: android.app.LocalActivityManager): void;

            public getCurrentView(): android.view.View;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public clearAllTabs(): void;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public requestLayout(): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public isTextAlignmentResolved(): boolean;

            public addView(param0: android.view.View): void;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public canResolveTextDirection(): boolean;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public getTabContentView(): android.widget.FrameLayout;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public isTextDirectionResolved(): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context);

            public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;

            public setCurrentTabByTag(param0: string): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public requestFitSystemWindows(): void;

            public addView(param0: android.view.View, param1: number): void;
        }
        export module TabHost {
            export class OnTabChangeListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.TabHost$OnTabChangeListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onTabChanged(param0: string): void;
                });

                public onTabChanged(param0: string): void;
            }
            export class TabContentFactory extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.TabHost$TabContentFactory interface with the provided implementation.
                 */
                public constructor(implementation: {
                    createTabContent(param0: string): android.view.View;
                });

                public createTabContent(param0: string): android.view.View;
            }
            export class TabSpec extends javalangObject {
                public setIndicator(param0: string): android.widget.TabHost.TabSpec;

                public setContent(param0: android.widget.TabHost.TabContentFactory): android.widget.TabHost.TabSpec;

                public setIndicator(param0: android.view.View): android.widget.TabHost.TabSpec;

                public getTag(): string;

                public setIndicator(param0: string, param1: android.graphics.drawable.Drawable): android.widget.TabHost.TabSpec;

                public setContent(param0: number): android.widget.TabHost.TabSpec;
                public setContent(param0: android.content.Intent): android.widget.TabHost.TabSpec;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
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
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class TabWidget extends android.widget.LinearLayout implements android.view.View.OnFocusChangeListener {
            public isLayoutDirectionResolved(): boolean;

            public onStopNestedScroll(param0: android.view.View): void;

            public setRightStripDrawable(param0: android.graphics.drawable.Drawable): void;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public canResolveLayoutDirection(): boolean;

            public setDividerDrawable(param0: android.graphics.drawable.Drawable): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public setLeftStripDrawable(param0: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public setCurrentTab(param0: number): void;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public setEnabled(param0: boolean): void;

            public sendAccessibilityEvent(param0: number): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public canResolveTextAlignment(): boolean;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public getParent(): android.view.ViewParent;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public isStripEnabled(): boolean;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public dispatchDraw(param0: android.graphics.Canvas): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getLayoutDirection(): number;

            public getTextAlignment(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public setRightStripDrawable(param0: number): void;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;

            public isLayoutRequested(): boolean;

            public setLeftStripDrawable(param0: android.graphics.drawable.Drawable): void;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public removeAllViews(): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public getChildDrawingOrder(param0: number, param1: number): number;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public setStripEnabled(param0: boolean): void;

            public focusCurrentTab(param0: number): void;

            public requestLayout(): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public addView(param0: android.view.View): void;

            public isTextAlignmentResolved(): boolean;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public canResolveTextDirection(): boolean;

            public setDividerDrawable(param0: number): void;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public isTextDirectionResolved(): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public getChildTabViewAt(param0: number): android.view.View;

            public onFocusChange(param0: android.view.View, param1: boolean): void;

            public constructor(param0: android.content.Context);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public getTabCount(): number;

            public addView(param0: android.view.View, param1: number): void;

            public requestFitSystemWindows(): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
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
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class TableLayout extends android.widget.LinearLayout {
            public setShrinkAllColumns(param0: boolean): void;

            public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;

            public isLayoutDirectionResolved(): boolean;

            public isShrinkAllColumns(): boolean;

            public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;

            public onStopNestedScroll(param0: android.view.View): void;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onMeasure(param0: number, param1: number): void;

            public generateLayoutParams(param0: android.util.AttributeSet): android.widget.TableLayout.LayoutParams;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public setColumnCollapsed(param0: number, param1: boolean): void;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public canResolveLayoutDirection(): boolean;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public sendAccessibilityEvent(param0: number): void;

            public isColumnShrinkable(param0: number): boolean;

            public requestTransparentRegion(param0: android.view.View): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public canResolveTextAlignment(): boolean;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public getParent(): android.view.ViewParent;

            public setStretchAllColumns(param0: boolean): void;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getLayoutDirection(): number;

            public getTextAlignment(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;

            public isStretchAllColumns(): boolean;

            public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public isColumnCollapsed(param0: number): boolean;

            public isLayoutRequested(): boolean;

            public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.widget.LinearLayout.LayoutParams;

            public generateDefaultLayoutParams(): android.widget.LinearLayout.LayoutParams;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public setColumnStretchable(param0: number, param1: boolean): void;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public setOnHierarchyChangeListener(param0: android.view.ViewGroup.OnHierarchyChangeListener): void;

            public requestLayout(): void;

            public generateLayoutParams(param0: android.util.AttributeSet): android.widget.LinearLayout.LayoutParams;

            public addView(param0: android.view.View): void;

            public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;

            public childDrawableStateChanged(param0: android.view.View): void;

            public isTextAlignmentResolved(): boolean;

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

            public isColumnStretchable(param0: number): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public setColumnShrinkable(param0: number, param1: boolean): void;

            public addView(param0: android.view.View, param1: number): void;

            public requestFitSystemWindows(): void;
        }
        export module TableLayout {
            export class LayoutParams extends android.widget.LinearLayout.LayoutParams {
                public constructor(param0: number, param1: number);
                public constructor(param0: android.view.ViewGroup.LayoutParams);
                public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

                public setBaseAttributes(param0: android.content.res.TypedArray, param1: number, param2: number): void;

                public constructor(param0: android.widget.LinearLayout.LayoutParams);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
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
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class TableRow extends android.widget.LinearLayout {
            public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;

            public isLayoutDirectionResolved(): boolean;

            public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;

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

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public getVirtualChildCount(): number;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public sendAccessibilityEvent(param0: number): void;

            public getVirtualChildAt(param0: number): android.view.View;

            public requestTransparentRegion(param0: android.view.View): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public canResolveTextAlignment(): boolean;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public getParent(): android.view.ViewParent;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getLayoutDirection(): number;

            public getTextAlignment(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;

            public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public isLayoutRequested(): boolean;

            public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.widget.LinearLayout.LayoutParams;

            public generateDefaultLayoutParams(): android.widget.LinearLayout.LayoutParams;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public setOnHierarchyChangeListener(param0: android.view.ViewGroup.OnHierarchyChangeListener): void;

            public requestLayout(): void;

            public generateLayoutParams(param0: android.util.AttributeSet): android.widget.LinearLayout.LayoutParams;

            public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;

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

            public generateLayoutParams(param0: android.util.AttributeSet): android.widget.TableRow.LayoutParams;

            public constructor(param0: android.content.Context);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public requestFitSystemWindows(): void;

            public addView(param0: android.view.View, param1: number): void;
        }
        export module TableRow {
            export class LayoutParams extends android.widget.LinearLayout.LayoutParams {
                public column: number;
                public span: number;

                public constructor(param0: number, param1: number);
                public constructor(param0: android.view.ViewGroup.LayoutParams);
                public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

                public setBaseAttributes(param0: android.content.res.TypedArray, param1: number, param2: number): void;

                public constructor(param0: number);
                public constructor(param0: android.widget.LinearLayout.LayoutParams);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module widget {
        export class TextClock extends android.widget.TextView {
            public static DEFAULT_FORMAT_12_HOUR: string;
            public static DEFAULT_FORMAT_24_HOUR: string;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public setFormat12Hour(param0: string): void;

            public setFormat24Hour(param0: string): void;

            public getTimeZone(): string;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getFormat24Hour(): string;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public setTimeZone(param0: string): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public is24HourModeEnabled(): boolean;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context);

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public onPreDraw(): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public onAttachedToWindow(): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public getFormat12Hour(): string;

            public onDetachedFromWindow(): void;

            public sendAccessibilityEvent(param0: number): void;
        }
    }
}

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
    export module widget {
        export class TextSwitcher extends android.widget.ViewSwitcher {
            public setCurrentText(param0: string): void;

            public isLayoutDirectionResolved(): boolean;

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

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public isLayoutRequested(): boolean;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public requestLayout(): void;

            public addView(param0: android.view.View): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public isTextAlignmentResolved(): boolean;

            public setText(param0: string): void;

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

            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public addView(param0: android.view.View, param1: number): void;

            public requestFitSystemWindows(): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.text.InputFilter.d.ts" />
/// <reference path="./android.text.Layout.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
/// <reference path="./android.text.TextWatcher.d.ts" />
/// <reference path="./android.text.method.KeyListener.d.ts" />
/// <reference path="./android.text.method.MovementMethod.d.ts" />
/// <reference path="./android.text.method.TransformationMethod.d.ts" />
/// <reference path="./android.text.style.URLSpan.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.DragEvent.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewStructure.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.view.inputmethod.CompletionInfo.d.ts" />
/// <reference path="./android.view.inputmethod.CorrectionInfo.d.ts" />
/// <reference path="./android.view.inputmethod.EditorInfo.d.ts" />
/// <reference path="./android.view.inputmethod.ExtractedText.d.ts" />
/// <reference path="./android.view.inputmethod.ExtractedTextRequest.d.ts" />
/// <reference path="./android.view.inputmethod.InputConnection.d.ts" />
/// <reference path="./android.widget.Scroller.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module android {
    export module widget {
        export class TextView extends android.view.View implements android.view.ViewTreeObserver.OnPreDrawListener {
            public setFilters(param0: native.Array<android.text.InputFilter>): void;

            public getExtendedPaddingTop(): number;

            public getCompoundDrawablesRelative(): native.Array<android.graphics.drawable.Drawable>;

            public getLinksClickable(): boolean;

            public setHighlightColor(param0: number): void;

            public getFreezesText(): boolean;

            public getCustomSelectionActionModeCallback(): android.view.ActionMode.Callback;

            public setTextScaleX(param0: number): void;

            public setTextAppearance(param0: number): void;

            public onMeasure(param0: number, param1: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public setMinWidth(param0: number): void;

            public setImeActionLabel(param0: string, param1: number): void;

            public setInputType(param0: number): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public sendAccessibilityEvent(param0: number): void;

            public findViewsWithText(param0: javautilArrayList, param1: string, param2: number): void;

            public getMinLines(): number;

            public getLinkTextColors(): android.content.res.ColorStateList;

            public setScroller(param0: android.widget.Scroller): void;

            public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;

            public onTextContextMenuItem(param0: number): boolean;

            public getRightFadingEdgeStrength(): number;

            public computeVerticalScrollRange(): number;

            public setEms(param0: number): void;

            public removeTextChangedListener(param0: android.text.TextWatcher): void;

            public setMinHeight(param0: number): void;

            public onKeyPreIme(param0: number, param1: android.view.KeyEvent): boolean;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public getTextScaleX(): number;

            public getAccessibilityClassName(): string;

            public getSelectionEnd(): number;

            public setTextColor(param0: number): void;

            public getCompoundPaddingBottom(): number;

            public setAutoLinkMask(param0: number): void;

            public setMaxEms(param0: number): void;

            public setCustomInsertionActionModeCallback(param0: android.view.ActionMode.Callback): void;

            public getTotalPaddingEnd(): number;

            public getHint(): string;

            public getMinHeight(): number;

            public getPrivateImeOptions(): string;

            public onPrivateIMECommand(param0: string, param1: android.os.Bundle): boolean;

            public getInputType(): number;

            public debug(param0: number): void;

            public setLinkTextColor(param0: android.content.res.ColorStateList): void;

            public getShadowDx(): number;

            public clearComposingText(): void;

            public onConfigurationChanged(param0: android.content.res.Configuration): void;

            public getPaintFlags(): number;

            public length(): number;

            public setIncludeFontPadding(param0: boolean): void;

            public setOnEditorActionListener(param0: android.widget.TextView.OnEditorActionListener): void;

            public setHyphenationFrequency(param0: number): void;

            public setMinEms(param0: number): void;

            public onBeginBatchEdit(): void;

            public setHintTextColor(param0: number): void;

            public getMaxWidth(): number;

            public getLineBounds(param0: number, param1: android.graphics.Rect): number;

            public getTotalPaddingTop(): number;

            public setAllCaps(param0: boolean): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public setText(param0: number, param1: android.widget.TextView.BufferType): void;

            public getMaxEms(): number;

            public onCommitCompletion(param0: android.view.inputmethod.CompletionInfo): void;

            public getTotalPaddingBottom(): number;

            public setEditableFactory(param0: android.text.Editable.Factory): void;

            public getAutoLinkMask(): number;

            public setMaxHeight(param0: number): void;

            public drawableStateChanged(): void;

            public getFilters(): native.Array<android.text.InputFilter>;

            public performLongClick(): boolean;

            public getMarqueeRepeatLimit(): number;

            public setHorizontallyScrolling(param0: boolean): void;

            public getTextLocale(): javautilLocale;

            public onFocusChanged(param0: boolean, param1: number, param2: android.graphics.Rect): void;

            public setBreakStrategy(param0: number): void;

            public getTextColors(): android.content.res.ColorStateList;

            public getDefaultEditable(): boolean;

            public computeHorizontalScrollRange(): number;

            public getTotalPaddingRight(): number;

            public onKeyShortcut(param0: number, param1: android.view.KeyEvent): boolean;

            public getCompoundPaddingTop(): number;

            public setCompoundDrawablePadding(param0: number): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public setTypeface(param0: android.graphics.Typeface): void;

            public getText(): string;

            public setWidth(param0: number): void;

            public verifyDrawable(param0: android.graphics.drawable.Drawable): boolean;

            public setError(param0: string, param1: android.graphics.drawable.Drawable): void;

            public onTrackballEvent(param0: android.view.MotionEvent): boolean;

            public setSelected(param0: boolean): void;

            public getLayout(): android.text.Layout;

            public setCompoundDrawablesWithIntrinsicBounds(param0: android.graphics.drawable.Drawable, param1: android.graphics.drawable.Drawable, param2: android.graphics.drawable.Drawable, param3: android.graphics.drawable.Drawable): void;

            public setExtractedText(param0: android.view.inputmethod.ExtractedText): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getMinWidth(): number;

            public getTotalPaddingStart(): number;

            public isCursorVisible(): boolean;

            public getLeftPaddingOffset(): number;

            public onWindowFocusChanged(param0: boolean): void;

            public onSelectionChanged(param0: number, param1: number): void;

            public getCompoundDrawablePadding(): number;

            public setFreezesText(param0: boolean): void;

            public setSingleLine(): void;

            public getImeOptions(): number;

            public setLetterSpacing(param0: number): void;

            public setCompoundDrawablesRelativeWithIntrinsicBounds(param0: android.graphics.drawable.Drawable, param1: android.graphics.drawable.Drawable, param2: android.graphics.drawable.Drawable, param3: android.graphics.drawable.Drawable): void;

            public setError(param0: string): void;

            public setPrivateImeOptions(param0: string): void;

            public onCreateDrawableState(param0: number): native.Array<number>;

            public getCompoundPaddingRight(): number;

            public onCheckIsTextEditor(): boolean;

            public setTextSize(param0: number): void;

            public isSuggestionsEnabled(): boolean;

            public setCompoundDrawableTintList(param0: android.content.res.ColorStateList): void;

            public getCompoundPaddingEnd(): number;

            public setSingleLine(param0: boolean): void;

            public addTextChangedListener(param0: android.text.TextWatcher): void;

            public setCompoundDrawableTintMode(param0: android.graphics.PorterDuff.Mode): void;

            public getCurrentHintTextColor(): number;

            public isPaddingOffsetRequired(): boolean;

            public getGravity(): number;

            public onPreDraw(): boolean;

            public getBottomPaddingOffset(): number;

            public getTransformationMethod(): android.text.method.TransformationMethod;

            public getLetterSpacing(): number;

            public cancelLongPress(): void;

            public hasSelection(): boolean;

            public setPaddingRelative(param0: number, param1: number, param2: number, param3: number): void;

            public getMinEms(): number;

            public setCompoundDrawablesRelativeWithIntrinsicBounds(param0: number, param1: number, param2: number, param3: number): void;

            public onTouchEvent(param0: android.view.MotionEvent): boolean;

            public getHighlightColor(): number;

            public getPaint(): android.text.TextPaint;

            public getCompoundDrawableTintList(): android.content.res.ColorStateList;

            public setTextKeepState(param0: string, param1: android.widget.TextView.BufferType): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public setElegantTextHeight(param0: boolean): void;

            public setTextLocale(param0: javautilLocale): void;

            public onCreateInputConnection(param0: android.view.inputmethod.EditorInfo): android.view.inputmethod.InputConnection;

            public onScreenStateChanged(param0: number): void;

            public setMovementMethod(param0: android.text.method.MovementMethod): void;

            public getDefaultMovementMethod(): android.text.method.MovementMethod;

            public append(param0: string): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public setFrame(param0: number, param1: number, param2: number, param3: number): boolean;

            public getLineCount(): number;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public setRawInputType(param0: number): void;

            public moveCursorToVisibleOffset(): boolean;

            public setEnabled(param0: boolean): void;

            public beginBatchEdit(): void;

            public isInputMethodTarget(): boolean;

            public setInputExtras(param0: number): void;

            public setText(param0: string, param1: android.widget.TextView.BufferType): void;

            public setEllipsize(param0: android.text.TextUtils.TruncateAt): void;

            public getCompoundPaddingStart(): number;

            public getTotalPaddingLeft(): number;

            public setImeOptions(param0: number): void;

            public getTextSize(): number;

            public getInputExtras(param0: boolean): android.os.Bundle;

            public onProvideStructure(param0: android.view.ViewStructure): void;

            public getEllipsize(): android.text.TextUtils.TruncateAt;

            public setTextAppearance(param0: android.content.Context, param1: number): void;

            public getMovementMethod(): android.text.method.MovementMethod;

            public getLeftFadingEdgeStrength(): number;

            public setShowSoftInputOnFocus(param0: boolean): void;

            public getImeActionId(): number;

            public setSelectAllOnFocus(param0: boolean): void;

            public getHintTextColors(): android.content.res.ColorStateList;

            public setHint(param0: number): void;

            public getImeActionLabel(): string;

            public getMaxHeight(): number;

            public getShowSoftInputOnFocus(): boolean;

            public getSelectionStart(): number;

            public computeVerticalScrollExtent(): number;

            public onDragEvent(param0: android.view.DragEvent): boolean;

            public getKeyListener(): android.text.method.KeyListener;

            public getRightPaddingOffset(): number;

            public getHyphenationFrequency(): number;

            public setLines(param0: number): void;

            public setHint(param0: string): void;

            public setCompoundDrawablesWithIntrinsicBounds(param0: number, param1: number, param2: number, param3: number): void;

            public setTypeface(param0: android.graphics.Typeface, param1: number): void;

            public getTypeface(): android.graphics.Typeface;

            public getLineSpacingExtra(): number;

            public getIncludeFontPadding(): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public getCustomInsertionActionModeCallback(): android.view.ActionMode.Callback;

            public setCompoundDrawablesRelative(param0: android.graphics.drawable.Drawable, param1: android.graphics.drawable.Drawable, param2: android.graphics.drawable.Drawable, param3: android.graphics.drawable.Drawable): void;

            public setCursorVisible(param0: boolean): void;

            public getUrls(): native.Array<android.text.style.URLSpan>;

            public getLineSpacingMultiplier(): number;

            public setTextIsSelectable(param0: boolean): void;

            public setText(param0: string): void;

            public setSpannableFactory(param0: android.text.Spannable.Factory): void;

            public setLinkTextColor(param0: number): void;

            public getCompoundPaddingLeft(): number;

            public getShadowDy(): number;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getFontFeatureSettings(): string;

            public onVisibilityChanged(param0: android.view.View, param1: number): void;

            public constructor(param0: android.content.Context);

            public onRtlPropertiesChanged(param0: number): void;

            public getLineHeight(): number;

            public getShadowColor(): number;

            public getTopPaddingOffset(): number;

            public setHeight(param0: number): void;

            public setText(param0: native.Array<string>, param1: number, param2: number): void;

            public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;

            public setLinksClickable(param0: boolean): void;

            public onStartTemporaryDetach(): void;

            public setTransformationMethod(param0: android.text.method.TransformationMethod): void;

            public getFocusedRect(param0: android.graphics.Rect): void;

            public onFinishTemporaryDetach(): void;

            public setText(param0: number): void;

            public bringPointIntoView(param0: number): boolean;

            public setPadding(param0: number, param1: number, param2: number, param3: number): void;

            public getCurrentTextColor(): number;

            public onRestoreInstanceState(param0: android.os.Parcelable): void;

            public setMaxWidth(param0: number): void;

            public getEditableText(): android.text.Editable;

            public getCompoundDrawableTintMode(): android.graphics.PorterDuff.Mode;

            public setHintTextColor(param0: android.content.res.ColorStateList): void;

            public setMarqueeRepeatLimit(param0: number): void;

            public didTouchFocusSelect(): boolean;

            public setKeyListener(param0: android.text.method.KeyListener): void;

            public onDraw(param0: android.graphics.Canvas): void;

            public setFontFeatureSettings(param0: string): void;

            public onSaveInstanceState(): android.os.Parcelable;

            public onScrollChanged(param0: number, param1: number, param2: number, param3: number): void;

            public setGravity(param0: number): void;

            public setMaxLines(param0: number): void;

            public getBreakStrategy(): number;

            public append(param0: string, param1: number, param2: number): void;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public hasOverlappingRendering(): boolean;

            public setLineSpacing(param0: number, param1: number): void;

            public setTextKeepState(param0: string): void;

            public endBatchEdit(): void;

            public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;

            public getShadowRadius(): number;

            public setTextSize(param0: number, param1: number): void;

            public getError(): string;

            public onCommitCorrection(param0: android.view.inputmethod.CorrectionInfo): void;

            public getExtendedPaddingBottom(): number;

            public setShadowLayer(param0: number, param1: number, param2: number, param3: number): void;

            public getOffsetForPosition(param0: number, param1: number): number;

            public setTextColor(param0: android.content.res.ColorStateList): void;

            public extractText(param0: android.view.inputmethod.ExtractedTextRequest, param1: android.view.inputmethod.ExtractedText): boolean;

            public onEndBatchEdit(): void;

            public jumpDrawablesToCurrentState(): void;

            public setPaintFlags(param0: number): void;

            public getBaseline(): number;

            public computeScroll(): void;

            public getCompoundDrawables(): native.Array<android.graphics.drawable.Drawable>;

            public getMaxLines(): number;

            public drawableHotspotChanged(param0: number, param1: number): void;

            public setMinLines(param0: number): void;

            public onEditorAction(param0: number): void;

            public setCompoundDrawables(param0: android.graphics.drawable.Drawable, param1: android.graphics.drawable.Drawable, param2: android.graphics.drawable.Drawable, param3: android.graphics.drawable.Drawable): void;

            public onAttachedToWindow(): void;

            public setCustomSelectionActionModeCallback(param0: android.view.ActionMode.Callback): void;

            public isTextSelectable(): boolean;
        }
        export module TextView {
            export class BufferType extends javalangEnum {
                public static EDITABLE: android.widget.TextView.BufferType;
                public static NORMAL: android.widget.TextView.BufferType;
                public static SPANNABLE: android.widget.TextView.BufferType;

                public static values(): native.Array<android.widget.TextView.BufferType>;

                public static valueOf(param0: string): android.widget.TextView.BufferType;
                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
            export class OnEditorActionListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.TextView$OnEditorActionListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onEditorAction(param0: android.widget.TextView, param1: number, param2: android.view.KeyEvent): boolean;
                });

                public onEditorAction(param0: android.widget.TextView, param1: number, param2: android.view.KeyEvent): boolean;
            }
            export class SavedState extends android.view.View.BaseSavedState {
                public static CREATOR: android.os.Parcelable.Creator;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public toString(): string;
            }
        }
    }
}

/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module widget {
        export class ThemedSpinnerAdapter extends javalangObject implements android.widget.SpinnerAdapter {
            /**
             * Constructs a new instance of the android.widget.ThemedSpinnerAdapter interface with the provided implementation.
             */
            public constructor(implementation: {
                setDropDownViewTheme(param0: android.content.res.Resources.Theme): void;
                getDropDownViewTheme(): android.content.res.Resources.Theme;
                getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
                registerDataSetObserver(param0: android.database.DataSetObserver): void;
                unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
                getCount(): number;
                getItem(param0: number): javalangObject;
                getItemId(param0: number): number;
                hasStableIds(): boolean;
                getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
                getItemViewType(param0: number): number;
                getViewTypeCount(): number;
                isEmpty(): boolean;
            });

            public static NO_SELECTION: number;
            public static IGNORE_ITEM_VIEW_TYPE: number;

            public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;

            public registerDataSetObserver(param0: android.database.DataSetObserver): void;

            public isEmpty(): boolean;

            public getItemId(param0: number): number;

            public hasStableIds(): boolean;

            public getDropDownViewTheme(): android.content.res.Resources.Theme;

            public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

            public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;

            public getItem(param0: number): javalangObject;

            public getItemViewType(param0: number): number;

            public getViewTypeCount(): number;

            public setDropDownViewTheme(param0: android.content.res.Resources.Theme): void;

            public getCount(): number;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.widget.TimePicker.d.ts" />
/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class TimePicker extends android.widget.FrameLayout {
            public setMinute(param0: number): void;

            public isLayoutDirectionResolved(): boolean;

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

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public setEnabled(param0: boolean): void;

            public sendAccessibilityEvent(param0: number): void;

            public onRestoreInstanceState(param0: android.os.Parcelable): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public canResolveTextAlignment(): boolean;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public getParent(): android.view.ViewParent;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getLayoutDirection(): number;

            public getHour(): number;

            public getTextAlignment(): number;

            public setCurrentHour(param0: javalangInteger): void;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onSaveInstanceState(): android.os.Parcelable;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public isLayoutRequested(): boolean;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public getCurrentMinute(): javalangInteger;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public setHour(param0: number): void;

            public is24HourView(): boolean;

            public getBaseline(): number;

            public setOnTimeChangedListener(param0: android.widget.TimePicker.OnTimeChangedListener): void;

            public setCurrentMinute(param0: javalangInteger): void;

            public onConfigurationChanged(param0: android.content.res.Configuration): void;

            public requestLayout(): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public isTextAlignmentResolved(): boolean;

            public addView(param0: android.view.View): void;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public getCurrentHour(): javalangInteger;

            public canResolveTextDirection(): boolean;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public setIs24HourView(param0: javalangBoolean): void;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public isTextDirectionResolved(): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public isEnabled(): boolean;

            public constructor(param0: android.content.Context);

            public getMinute(): number;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public requestFitSystemWindows(): void;

            public addView(param0: android.view.View, param1: number): void;
        }
        export module TimePicker {
            export class OnTimeChangedListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.TimePicker$OnTimeChangedListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onTimeChanged(param0: android.widget.TimePicker, param1: number, param2: number): void;
                });

                public onTimeChanged(param0: android.widget.TimePicker, param1: number, param2: number): void;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module widget {
        export class Toast extends javalangObject {
            public static LENGTH_LONG: number;
            public static LENGTH_SHORT: number;

            public show(): void;

            public setGravity(param0: number, param1: number, param2: number): void;

            public setDuration(param0: number): void;

            public setText(param0: string): void;

            public getDuration(): number;

            public getVerticalMargin(): number;

            public static makeText(param0: android.content.Context, param1: number, param2: number): android.widget.Toast;
            public static makeText(param0: android.content.Context, param1: string, param2: number): android.widget.Toast;

            public cancel(): void;

            public getYOffset(): number;

            public getHorizontalMargin(): number;

            public setView(param0: android.view.View): void;

            public getXOffset(): number;

            public constructor(param0: android.content.Context);

            public getGravity(): number;

            public setText(param0: number): void;

            public getView(): android.view.View;

            public setMargin(param0: number, param1: number): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class ToggleButton extends android.widget.CompoundButton {
            public getAccessibilityClassName(): string;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public getTextOn(): string;

            public toggle(): void;

            public drawableStateChanged(): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;

            public onFinishInflate(): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public onPreDraw(): boolean;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public sendAccessibilityEvent(param0: number): void;

            public setChecked(param0: boolean): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public isChecked(): boolean;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public setTextOn(param0: string): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public setTextOff(param0: string): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getTextOff(): string;

            public constructor(param0: android.content.Context);

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class Toolbar extends android.view.ViewGroup {
            public setTitleTextColor(param0: number): void;

            public setNavigationContentDescription(param0: number): void;

            public generateLayoutParams(param0: android.util.AttributeSet): android.widget.Toolbar.LayoutParams;

            public getLogoDescription(): string;

            public setContentInsetsAbsolute(param0: number, param1: number): void;

            public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;

            public onStopNestedScroll(param0: android.view.View): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onMeasure(param0: number, param1: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public getPopupTheme(): number;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public hideOverflowMenu(): boolean;

            public collapseActionView(): void;

            public getNavigationIcon(): android.graphics.drawable.Drawable;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public getContentInsetLeft(): number;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public onDetachedFromWindow(): void;

            public sendAccessibilityEvent(param0: number): void;

            public setLogoDescription(param0: string): void;

            public setOverflowIcon(param0: android.graphics.drawable.Drawable): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public setOnMenuItemClickListener(param0: android.widget.Toolbar.OnMenuItemClickListener): void;

            public canResolveTextAlignment(): boolean;

            public setTitleTextAppearance(param0: android.content.Context, param1: number): void;

            public getParent(): android.view.ViewParent;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public getLayoutDirection(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public focusSearch(param0: number): android.view.View;

            public recomputeViewAttributes(param0: android.view.View): void;

            public showOverflowMenu(): boolean;

            public isLayoutRequested(): boolean;

            public getLogo(): android.graphics.drawable.Drawable;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public setLogoDescription(param0: number): void;

            public requestLayout(): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public addView(param0: android.view.View): void;

            public canResolveTextDirection(): boolean;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context);

            public setNavigationOnClickListener(param0: android.view.View.OnClickListener): void;

            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public onRtlPropertiesChanged(param0: number): void;

            public setSubtitleTextAppearance(param0: android.content.Context, param1: number): void;

            public requestFitSystemWindows(): void;

            public setSubtitleTextColor(param0: number): void;

            public setTitle(param0: string): void;

            public getNavigationContentDescription(): string;

            public getMenu(): android.view.Menu;

            public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;

            public getOverflowIcon(): android.graphics.drawable.Drawable;

            public setSubtitle(param0: number): void;

            public isLayoutDirectionResolved(): boolean;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public dismissPopupMenus(): void;

            public setLogo(param0: number): void;

            public setNavigationIcon(param0: android.graphics.drawable.Drawable): void;

            public getContentInsetEnd(): number;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public canResolveLayoutDirection(): boolean;

            public hasExpandedActionView(): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public onRestoreInstanceState(param0: android.os.Parcelable): void;

            public getTitle(): string;

            public getSubtitle(): string;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public inflateMenu(param0: number): void;

            public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.widget.Toolbar.LayoutParams;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public setContentInsetsRelative(param0: number, param1: number): void;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public generateDefaultLayoutParams(): android.widget.Toolbar.LayoutParams;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getTextAlignment(): number;

            public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;

            public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onSaveInstanceState(): android.os.Parcelable;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public setLogo(param0: android.graphics.drawable.Drawable): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public getContentInsetStart(): number;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public setNavigationIcon(param0: number): void;

            public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;

            public isTextAlignmentResolved(): boolean;

            public removeView(param0: android.view.View): void;

            public isOverflowMenuShowing(): boolean;

            public clearChildFocus(param0: android.view.View): void;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public setTitle(param0: number): void;

            public onTouchEvent(param0: android.view.MotionEvent): boolean;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public isTextDirectionResolved(): boolean;

            public setSubtitle(param0: string): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public getContentInsetRight(): number;

            public setPopupTheme(param0: number): void;

            public setNavigationContentDescription(param0: string): void;

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public addView(param0: android.view.View, param1: number): void;
        }
        export module Toolbar {
            export class LayoutParams extends android.app.ActionBar.LayoutParams {
                public constructor(param0: number, param1: number);
                public constructor(param0: android.view.ViewGroup.LayoutParams);
                public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
                public constructor(param0: android.widget.Toolbar.LayoutParams);
                public constructor(param0: number);
                public constructor(param0: android.app.ActionBar.LayoutParams);
            }
            export class OnMenuItemClickListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.Toolbar$OnMenuItemClickListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onMenuItemClick(param0: android.view.MenuItem): boolean;
                });

                public onMenuItemClick(param0: android.view.MenuItem): boolean;
            }
        }
    }
}

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
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class TwoLineListItem extends android.widget.RelativeLayout {
            public getText1(): android.widget.TextView;

            public isLayoutDirectionResolved(): boolean;

            public onStopNestedScroll(param0: android.view.View): void;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public onFinishInflate(): void;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public canResolveLayoutDirection(): boolean;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

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

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public isLayoutRequested(): boolean;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public getText2(): android.widget.TextView;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

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
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.media.MediaFormat.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.widget.MediaController.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module android {
    export module widget {
        export class VideoView extends android.view.SurfaceView implements android.widget.MediaController.MediaPlayerControl {
            public getAccessibilityClassName(): string;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;

            public getDuration(): number;

            public canPause(): boolean;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onMeasure(param0: number, param1: number): void;

            public getBufferPercentage(): number;

            public isPlaying(): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public pause(): void;

            public setVideoPath(param0: string): void;

            public setOnErrorListener(param0: android.media.MediaPlayer.OnErrorListener): void;

            public resume(): void;

            public addSubtitleSource(param0: javaioInputStream, param1: android.media.MediaFormat): void;

            public setOnPreparedListener(param0: android.media.MediaPlayer.OnPreparedListener): void;

            public setMediaController(param0: android.widget.MediaController): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public start(): void;

            public onDetachedFromWindow(): void;

            public draw(param0: android.graphics.Canvas): void;

            public sendAccessibilityEvent(param0: number): void;

            public stopPlayback(): void;

            public canSeekBackward(): boolean;

            public setVideoURI(param0: android.net.Uri, param1: javautilMap): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public seekTo(param0: number): void;

            public getCurrentPosition(): number;

            public onTouchEvent(param0: android.view.MotionEvent): boolean;

            public suspend(): void;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public onTrackballEvent(param0: android.view.MotionEvent): boolean;

            public setVideoURI(param0: android.net.Uri): void;

            public canSeekForward(): boolean;

            public getAudioSessionId(): number;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public resolveAdjustedSize(param0: number, param1: number): number;

            public constructor(param0: android.content.Context);

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public setOnInfoListener(param0: android.media.MediaPlayer.OnInfoListener): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public onAttachedToWindow(): void;

            public setOnCompletionListener(param0: android.media.MediaPlayer.OnCompletionListener): void;
        }
    }
}

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
/// <reference path="./android.view.animation.Animation.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class ViewAnimator extends android.widget.FrameLayout {
            public setInAnimation(param0: android.content.Context, param1: number): void;

            public isLayoutDirectionResolved(): boolean;

            public onStopNestedScroll(param0: android.view.View): void;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public setOutAnimation(param0: android.content.Context, param1: number): void;

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public canResolveLayoutDirection(): boolean;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public setInAnimation(param0: android.view.animation.Animation): void;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public setDisplayedChild(param0: number): void;

            public sendAccessibilityEvent(param0: number): void;

            public getOutAnimation(): android.view.animation.Animation;

            public removeViewsInLayout(param0: number, param1: number): void;

            public getInAnimation(): android.view.animation.Animation;

            public requestTransparentRegion(param0: android.view.View): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public canResolveTextAlignment(): boolean;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public getParent(): android.view.ViewParent;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public removeViewInLayout(param0: android.view.View): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getLayoutDirection(): number;

            public getTextAlignment(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public showNext(): void;

            public setAnimateFirstView(param0: boolean): void;

            public isLayoutRequested(): boolean;

            public getAnimateFirstView(): boolean;

            public getDisplayedChild(): number;

            public removeViews(param0: number, param1: number): void;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public removeAllViews(): void;

            public removeViewAt(param0: number): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public showPrevious(): void;

            public getCurrentView(): android.view.View;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public getBaseline(): number;

            public requestLayout(): void;

            public addView(param0: android.view.View): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public isTextAlignmentResolved(): boolean;

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

            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;

            public setOutAnimation(param0: android.view.animation.Animation): void;

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public addView(param0: android.view.View, param1: number): void;

            public requestFitSystemWindows(): void;
        }
    }
}

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
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class ViewFlipper extends android.widget.ViewAnimator {
            public startFlipping(): void;

            public isLayoutDirectionResolved(): boolean;

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

            public stopFlipping(): void;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public onDetachedFromWindow(): void;

            public sendAccessibilityEvent(param0: number): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public canResolveTextAlignment(): boolean;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public getParent(): android.view.ViewParent;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getLayoutDirection(): number;

            public setFlipInterval(param0: number): void;

            public getTextAlignment(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public isLayoutRequested(): boolean;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public isAutoStart(): boolean;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public onWindowVisibilityChanged(param0: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public requestLayout(): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public isTextAlignmentResolved(): boolean;

            public addView(param0: android.view.View): void;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public isFlipping(): boolean;

            public canResolveTextDirection(): boolean;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public isTextDirectionResolved(): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public setAutoStart(param0: boolean): void;

            public constructor(param0: android.content.Context);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public onAttachedToWindow(): void;

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public requestFitSystemWindows(): void;

            public addView(param0: android.view.View, param1: number): void;
        }
    }
}

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
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class ViewSwitcher extends android.widget.ViewAnimator {
            public getNextView(): android.view.View;

            public isLayoutDirectionResolved(): boolean;

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

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public isLayoutRequested(): boolean;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public setFactory(param0: android.widget.ViewSwitcher.ViewFactory): void;

            public reset(): void;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public requestLayout(): void;

            public addView(param0: android.view.View): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public isTextAlignmentResolved(): boolean;

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

            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public addView(param0: android.view.View, param1: number): void;

            public requestFitSystemWindows(): void;
        }
        export module ViewSwitcher {
            export class ViewFactory extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.ViewSwitcher$ViewFactory interface with the provided implementation.
                 */
                public constructor(implementation: {
                    makeView(): android.view.View;
                });

                public makeView(): android.view.View;
            }
        }
    }
}

/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.ListAdapter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module widget {
        export class WrapperListAdapter extends javalangObject implements android.widget.ListAdapter {
            /**
             * Constructs a new instance of the android.widget.WrapperListAdapter interface with the provided implementation.
             */
            public constructor(implementation: {
                getWrappedAdapter(): android.widget.ListAdapter;
                areAllItemsEnabled(): boolean;
                isEnabled(param0: number): boolean;
                registerDataSetObserver(param0: android.database.DataSetObserver): void;
                unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
                getCount(): number;
                getItem(param0: number): javalangObject;
                getItemId(param0: number): number;
                hasStableIds(): boolean;
                getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
                getItemViewType(param0: number): number;
                getViewTypeCount(): number;
                isEmpty(): boolean;
            });

            public static NO_SELECTION: number;
            public static IGNORE_ITEM_VIEW_TYPE: number;

            public registerDataSetObserver(param0: android.database.DataSetObserver): void;

            public isEmpty(): boolean;

            public getItemId(param0: number): number;

            public hasStableIds(): boolean;

            public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;

            public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;

            public getItem(param0: number): javalangObject;

            public getWrappedAdapter(): android.widget.ListAdapter;

            public getItemViewType(param0: number): number;

            public getViewTypeCount(): number;

            public areAllItemsEnabled(): boolean;

            public isEnabled(param0: number): boolean;

            public getCount(): number;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module widget {
        export class ZoomButton extends android.widget.ImageButton implements android.view.View.OnLongClickListener {
            public getAccessibilityClassName(): string;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onTouchEvent(param0: android.view.MotionEvent): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public setZoomSpeed(param0: number): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context);

            public onLongClick(param0: android.view.View): boolean;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public setEnabled(param0: boolean): void;

            public dispatchUnhandledMove(param0: android.view.View, param1: number): boolean;

            public sendAccessibilityEvent(param0: number): void;
        }
    }
}

/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
declare module android {
    export module widget {
        export class ZoomButtonsController extends javalangObject implements android.view.View.OnTouchListener {
            public getZoomControls(): android.view.View;

            public setFocusable(param0: boolean): void;

            public setAutoDismissed(param0: boolean): void;

            public getContainer(): android.view.ViewGroup;

            public setVisible(param0: boolean): void;

            public setZoomOutEnabled(param0: boolean): void;

            public isVisible(): boolean;

            public isAutoDismissed(): boolean;

            public setZoomSpeed(param0: number): void;

            public constructor(param0: android.view.View);

            public setZoomInEnabled(param0: boolean): void;

            public setOnZoomListener(param0: android.widget.ZoomButtonsController.OnZoomListener): void;

            public onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean;
        }
        export module ZoomButtonsController {
            export class OnZoomListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.widget.ZoomButtonsController$OnZoomListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onVisibilityChanged(param0: boolean): void;
                    onZoom(param0: boolean): void;
                });

                public onVisibilityChanged(param0: boolean): void;

                public onZoom(param0: boolean): void;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
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
declare module android {
    export module widget {
        export class ZoomControls extends android.widget.LinearLayout {
            public isLayoutDirectionResolved(): boolean;

            public onStopNestedScroll(param0: android.view.View): void;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public setZoomSpeed(param0: number): void;

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public canResolveLayoutDirection(): boolean;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public hide(): void;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public bringChildToFront(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public setIsZoomInEnabled(param0: boolean): void;

            public sendAccessibilityEvent(param0: number): void;

            public requestTransparentRegion(param0: android.view.View): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public getParentForAccessibility(): android.view.ViewParent;

            public canResolveTextAlignment(): boolean;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public getParent(): android.view.ViewParent;

            public setOnZoomOutClickListener(param0: android.view.View.OnClickListener): void;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public getLayoutDirection(): number;

            public getTextAlignment(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public hasFocus(): boolean;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public show(): void;

            public getAccessibilityClassName(): string;

            public focusSearch(param0: number): android.view.View;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public recomputeViewAttributes(param0: android.view.View): void;

            public isLayoutRequested(): boolean;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public setOnZoomInClickListener(param0: android.view.View.OnClickListener): void;

            public requestLayout(): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public isTextAlignmentResolved(): boolean;

            public addView(param0: android.view.View): void;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public canResolveTextDirection(): boolean;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public onTouchEvent(param0: android.view.MotionEvent): boolean;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public isTextDirectionResolved(): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context);

            public setIsZoomOutEnabled(param0: boolean): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public requestFitSystemWindows(): void;

            public addView(param0: android.view.View, param1: number): void;
        }
    }
}
