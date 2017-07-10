
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.inputmethodservice.AbstractInputMethodService.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.ResultReceiver.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.inputmethod.CompletionInfo.d.ts" />
/// <reference path="./android.view.inputmethod.CursorAnchorInfo.d.ts" />
/// <reference path="./android.view.inputmethod.EditorInfo.d.ts" />
/// <reference path="./android.view.inputmethod.ExtractedText.d.ts" />
/// <reference path="./android.view.inputmethod.InputBinding.d.ts" />
/// <reference path="./android.view.inputmethod.InputConnection.d.ts" />
/// <reference path="./android.view.inputmethod.InputMethodSession.d.ts" />
/// <reference path="./android.view.inputmethod.InputMethodSubtype.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module inputmethodservice {
        export abstract class AbstractInputMethodService extends android.app.Service implements android.view.KeyEvent.Callback {
            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public onBind(param0: android.content.Intent): android.os.IBinder;

            public constructor();

            public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;

            public getKeyDispatcherState(): android.view.KeyEvent.DispatcherState;

            public onTrackballEvent(param0: android.view.MotionEvent): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public onCreateInputMethodSessionInterface(): android.inputmethodservice.AbstractInputMethodService.AbstractInputMethodSessionImpl;

            public onTrimMemory(param0: number): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public constructor(param0: android.content.Context);

            public dump(param0: javaioFileDescriptor, param1: javaioPrintWriter, param2: native.Array<string>): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public onCreateInputMethodInterface(): android.inputmethodservice.AbstractInputMethodService.AbstractInputMethodImpl;
        }
        export module AbstractInputMethodService {
            export abstract class AbstractInputMethodImpl extends javalangObject implements android.view.inputmethod.InputMethod {
                public startInput(param0: android.view.inputmethod.InputConnection, param1: android.view.inputmethod.EditorInfo): void;

                public bindInput(param0: android.view.inputmethod.InputBinding): void;

                public setSessionEnabled(param0: android.view.inputmethod.InputMethodSession, param1: boolean): void;

                public restartInput(param0: android.view.inputmethod.InputConnection, param1: android.view.inputmethod.EditorInfo): void;

                public unbindInput(): void;

                public showSoftInput(param0: number, param1: android.os.ResultReceiver): void;

                public hideSoftInput(param0: number, param1: android.os.ResultReceiver): void;

                public revokeSession(param0: android.view.inputmethod.InputMethodSession): void;

                public attachToken(param0: android.os.IBinder): void;

                public constructor(param0: android.inputmethodservice.AbstractInputMethodService);

                public createSession(param0: android.view.inputmethod.InputMethod.SessionCallback): void;

                public changeInputMethodSubtype(param0: android.view.inputmethod.InputMethodSubtype): void;
            }
            export abstract class AbstractInputMethodSessionImpl extends javalangObject implements android.view.inputmethod.InputMethodSession {
                public revokeSelf(): void;

                public dispatchTrackballEvent(param0: number, param1: android.view.MotionEvent, param2: android.view.inputmethod.InputMethodSession.EventCallback): void;

                public appPrivateCommand(param0: string, param1: android.os.Bundle): void;

                public updateSelection(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

                public setEnabled(param0: boolean): void;

                public constructor(param0: android.inputmethodservice.AbstractInputMethodService);

                public dispatchKeyEvent(param0: number, param1: android.view.KeyEvent, param2: android.view.inputmethod.InputMethodSession.EventCallback): void;

                public viewClicked(param0: boolean): void;

                public isRevoked(): boolean;

                public finishInput(): void;

                public updateCursor(param0: android.graphics.Rect): void;

                public toggleSoftInput(param0: number, param1: number): void;

                public isEnabled(): boolean;

                public dispatchGenericMotionEvent(param0: number, param1: android.view.MotionEvent, param2: android.view.inputmethod.InputMethodSession.EventCallback): void;

                public displayCompletions(param0: native.Array<android.view.inputmethod.CompletionInfo>): void;

                public updateCursorAnchorInfo(param0: android.view.inputmethod.CursorAnchorInfo): void;

                public updateExtractedText(param0: number, param1: android.view.inputmethod.ExtractedText): void;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.view.inputmethod.ExtractedText.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module inputmethodservice {
        export class ExtractEditText extends android.widget.EditText {
            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public hasVerticalScrollBar(): boolean;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public finishInternalChanges(): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public startInternalChanges(): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public onPreDraw(): boolean;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public isInputMethodTarget(): boolean;

            public sendAccessibilityEvent(param0: number): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public isFocused(): boolean;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public onTextContextMenuItem(param0: number): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public setExtractedText(param0: android.view.inputmethod.ExtractedText): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public hasWindowFocus(): boolean;

            public constructor(param0: android.content.Context);

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public performClick(): boolean;

            public onSelectionChanged(param0: number, param1: number): void;

            public hasFocus(): boolean;
        }
    }
}

/// <reference path="./android.app.Dialog.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.Region.d.ts" />
/// <reference path="./android.inputmethodservice.AbstractInputMethodService.d.ts" />
/// <reference path="./android.inputmethodservice.InputMethodService.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.ResultReceiver.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.Window.d.ts" />
/// <reference path="./android.view.inputmethod.CompletionInfo.d.ts" />
/// <reference path="./android.view.inputmethod.CursorAnchorInfo.d.ts" />
/// <reference path="./android.view.inputmethod.EditorInfo.d.ts" />
/// <reference path="./android.view.inputmethod.ExtractedText.d.ts" />
/// <reference path="./android.view.inputmethod.InputBinding.d.ts" />
/// <reference path="./android.view.inputmethod.InputConnection.d.ts" />
/// <reference path="./android.view.inputmethod.InputMethodSession.d.ts" />
/// <reference path="./android.view.inputmethod.InputMethodSubtype.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module inputmethodservice {
        export class InputMethodService extends android.inputmethodservice.AbstractInputMethodService {
            public static BACK_DISPOSITION_DEFAULT: number;
            public static BACK_DISPOSITION_WILL_DISMISS: number;
            public static BACK_DISPOSITION_WILL_NOT_DISMISS: number;

            public onExtractTextContextMenuItem(param0: number): boolean;

            public onWindowHidden(): void;

            public onExtractedCursorMovement(param0: number, param1: number): void;

            public getLayoutInflater(): android.view.LayoutInflater;

            public showWindow(param0: boolean): void;

            public onCreateCandidatesView(): android.view.View;

            public onStartInput(param0: android.view.inputmethod.EditorInfo, param1: boolean): void;

            public onViewClicked(param0: boolean): void;

            public onCreateInputMethodSessionInterface(): android.inputmethodservice.AbstractInputMethodService.AbstractInputMethodSessionImpl;

            public getBackDisposition(): number;

            public getCurrentInputBinding(): android.view.inputmethod.InputBinding;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public setCandidatesView(param0: android.view.View): void;

            public onUpdateSelection(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

            public sendDefaultEditorAction(param0: boolean): boolean;

            public onFinishInputView(param0: boolean): void;

            public setExtractView(param0: android.view.View): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public onCreateInputMethodInterface(): android.inputmethodservice.AbstractInputMethodService.AbstractInputMethodImpl;

            public getCurrentInputConnection(): android.view.inputmethod.InputConnection;

            public hideWindow(): void;

            public onEvaluateFullscreenMode(): boolean;

            public onConfigureWindow(param0: android.view.Window, param1: boolean, param2: boolean): void;

            public onCurrentInputMethodSubtypeChanged(param0: android.view.inputmethod.InputMethodSubtype): void;

            public onUpdateCursor(param0: android.graphics.Rect): void;

            public onCreate(): void;

            public constructor();

            public onFinishCandidatesView(param0: boolean): void;

            public requestHideSelf(param0: number): void;

            public setBackDisposition(param0: number): void;

            public onExtractingInputChanged(param0: android.view.inputmethod.EditorInfo): void;

            public onTrackballEvent(param0: android.view.MotionEvent): boolean;

            public setCandidatesViewShown(param0: boolean): void;

            public onStartInputView(param0: android.view.inputmethod.EditorInfo, param1: boolean): void;

            public onInitializeInterface(): void;

            public onShowInputRequested(param0: number, param1: boolean): boolean;

            public onExtractedSelectionChanged(param0: number, param1: number): void;

            public onFinishInput(): void;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public updateInputViewShown(): void;

            public onUpdateCursorAnchorInfo(param0: android.view.inputmethod.CursorAnchorInfo): void;

            public onCreateInputView(): android.view.View;

            public isFullscreenMode(): boolean;

            public onUnbindInput(): void;

            public getInputMethodWindowRecommendedHeight(): number;

            public getWindow(): android.app.Dialog;

            public onDestroy(): void;

            public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;

            public sendDownUpKeyEvents(param0: number): void;

            public onCreateExtractTextView(): android.view.View;

            public sendKeyChar(param0: string): void;

            public onTrimMemory(param0: number): void;

            public hideStatusIcon(): void;

            public onUpdateExtractedText(param0: number, param1: android.view.inputmethod.ExtractedText): void;

            public getCurrentInputEditorInfo(): android.view.inputmethod.EditorInfo;

            public onExtractedTextClicked(): void;

            public onComputeInsets(param0: android.inputmethodservice.InputMethodService.Insets): void;

            public updateFullscreenMode(): void;

            public isExtractViewShown(): boolean;

            public onConfigurationChanged(param0: android.content.res.Configuration): void;

            public getTextForImeAction(param0: number): string;

            public onUpdateExtractingViews(param0: android.view.inputmethod.EditorInfo): void;

            public switchInputMethod(param0: string): void;

            public setInputView(param0: android.view.View): void;

            public getMaxWidth(): number;

            public onStartCandidatesView(param0: android.view.inputmethod.EditorInfo, param1: boolean): void;

            public onBindInput(): void;

            public getCandidatesHiddenVisibility(): number;

            public onWindowShown(): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public onAppPrivateCommand(param0: string, param1: android.os.Bundle): void;

            public setExtractViewShown(param0: boolean): void;

            public setTheme(param0: number): void;

            public getCurrentInputStarted(): boolean;

            public showStatusIcon(param0: number): void;

            public constructor(param0: android.content.Context);

            public enableHardwareAcceleration(): boolean;

            public dump(param0: javaioFileDescriptor, param1: javaioPrintWriter, param2: native.Array<string>): void;

            public onEvaluateInputViewShown(): boolean;

            public onDisplayCompletions(param0: native.Array<android.view.inputmethod.CompletionInfo>): void;

            public isInputViewShown(): boolean;

            public onUpdateExtractingVisibility(param0: android.view.inputmethod.EditorInfo): void;

            public isShowInputRequested(): boolean;
        }
        export module InputMethodService {
            export class InputMethodImpl extends android.inputmethodservice.AbstractInputMethodService.AbstractInputMethodImpl {
                public bindInput(param0: android.view.inputmethod.InputBinding): void;

                public setSessionEnabled(param0: android.view.inputmethod.InputMethodSession, param1: boolean): void;

                public unbindInput(): void;

                public hideSoftInput(param0: number, param1: android.os.ResultReceiver): void;

                public revokeSession(param0: android.view.inputmethod.InputMethodSession): void;

                public attachToken(param0: android.os.IBinder): void;

                public constructor(param0: android.inputmethodservice.AbstractInputMethodService);

                public createSession(param0: android.view.inputmethod.InputMethod.SessionCallback): void;

                public startInput(param0: android.view.inputmethod.InputConnection, param1: android.view.inputmethod.EditorInfo): void;

                public constructor(param0: android.inputmethodservice.InputMethodService);

                public restartInput(param0: android.view.inputmethod.InputConnection, param1: android.view.inputmethod.EditorInfo): void;

                public showSoftInput(param0: number, param1: android.os.ResultReceiver): void;

                public changeInputMethodSubtype(param0: android.view.inputmethod.InputMethodSubtype): void;
            }
            export class InputMethodSessionImpl extends android.inputmethodservice.AbstractInputMethodService.AbstractInputMethodSessionImpl {
                public appPrivateCommand(param0: string, param1: android.os.Bundle): void;

                public dispatchTrackballEvent(param0: number, param1: android.view.MotionEvent, param2: android.view.inputmethod.InputMethodSession.EventCallback): void;

                public updateSelection(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

                public constructor(param0: android.inputmethodservice.AbstractInputMethodService);

                public dispatchKeyEvent(param0: number, param1: android.view.KeyEvent, param2: android.view.inputmethod.InputMethodSession.EventCallback): void;

                public constructor(param0: android.inputmethodservice.InputMethodService);

                public viewClicked(param0: boolean): void;

                public finishInput(): void;

                public updateCursor(param0: android.graphics.Rect): void;

                public toggleSoftInput(param0: number, param1: number): void;

                public dispatchGenericMotionEvent(param0: number, param1: android.view.MotionEvent, param2: android.view.inputmethod.InputMethodSession.EventCallback): void;

                public displayCompletions(param0: native.Array<android.view.inputmethod.CompletionInfo>): void;

                public updateCursorAnchorInfo(param0: android.view.inputmethod.CursorAnchorInfo): void;

                public updateExtractedText(param0: number, param1: android.view.inputmethod.ExtractedText): void;
            }
            export class Insets extends javalangObject {
                public static TOUCHABLE_INSETS_CONTENT: number;
                public static TOUCHABLE_INSETS_FRAME: number;
                public static TOUCHABLE_INSETS_REGION: number;
                public static TOUCHABLE_INSETS_VISIBLE: number;
                public contentTopInsets: number;
                public touchableInsets: number;
                public touchableRegion: android.graphics.Region;
                public visibleTopInsets: number;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.content.res.XmlResourceParser.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.inputmethodservice.Keyboard.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module inputmethodservice {
        export class Keyboard extends javalangObject {
            public static EDGE_BOTTOM: number;
            public static EDGE_LEFT: number;
            public static EDGE_RIGHT: number;
            public static EDGE_TOP: number;
            public static KEYCODE_ALT: number;
            public static KEYCODE_CANCEL: number;
            public static KEYCODE_DELETE: number;
            public static KEYCODE_DONE: number;
            public static KEYCODE_MODE_CHANGE: number;
            public static KEYCODE_SHIFT: number;

            public setKeyHeight(param0: number): void;

            public getKeyHeight(): number;

            public getKeys(): javautilList;

            public getHorizontalGap(): number;

            public getModifierKeys(): javautilList;

            public getHeight(): number;

            public getVerticalGap(): number;

            public createKeyFromXml(param0: android.content.res.Resources, param1: android.inputmethodservice.Keyboard.Row, param2: number, param3: number, param4: android.content.res.XmlResourceParser): android.inputmethodservice.Keyboard.Key;

            public createRowFromXml(param0: android.content.res.Resources, param1: android.content.res.XmlResourceParser): android.inputmethodservice.Keyboard.Row;

            public isShifted(): boolean;

            public constructor(param0: android.content.Context, param1: number);

            public setVerticalGap(param0: number): void;

            public setHorizontalGap(param0: number): void;

            public getShiftKeyIndex(): number;

            public getKeyWidth(): number;

            public constructor(param0: android.content.Context, param1: number, param2: string, param3: number, param4: number);

            public getMinWidth(): number;

            public constructor(param0: android.content.Context, param1: number, param2: number, param3: number, param4: number);

            public setKeyWidth(param0: number): void;

            public setShifted(param0: boolean): boolean;

            public getNearestKeys(param0: number, param1: number): native.Array<number>;

            public constructor(param0: android.content.Context, param1: number, param2: number);
        }
        export module Keyboard {
            export class Key extends javalangObject {
                public codes: native.Array<number>;
                public edgeFlags: number;
                public gap: number;
                public height: number;
                public icon: android.graphics.drawable.Drawable;
                public iconPreview: android.graphics.drawable.Drawable;
                public label: string;
                public modifier: boolean;
                public on: boolean;
                public popupCharacters: string;
                public popupResId: number;
                public pressed: boolean;
                public repeatable: boolean;
                public sticky: boolean;
                public text: string;
                public width: number;
                public x: number;
                public y: number;

                public constructor(param0: android.content.res.Resources, param1: android.inputmethodservice.Keyboard.Row, param2: number, param3: number, param4: android.content.res.XmlResourceParser);

                public squaredDistanceFrom(param0: number, param1: number): number;

                public getCurrentDrawableState(): native.Array<number>;

                public isInside(param0: number, param1: number): boolean;

                public constructor(param0: android.inputmethodservice.Keyboard.Row);

                public onPressed(): void;

                public onReleased(param0: boolean): void;
            }
            export class Row extends javalangObject {
                public defaultHeight: number;
                public defaultHorizontalGap: number;
                public defaultWidth: number;
                public mode: number;
                public rowEdgeFlags: number;
                public verticalGap: number;

                public constructor(param0: android.inputmethodservice.Keyboard);
                public constructor(param0: android.content.res.Resources, param1: android.inputmethodservice.Keyboard, param2: android.content.res.XmlResourceParser);
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.inputmethodservice.Keyboard.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module inputmethodservice {
        export class KeyboardView extends android.view.View implements android.view.View.OnClickListener {
            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public swipeDown(): void;

            public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;

            public setPreviewEnabled(param0: boolean): void;

            public invalidateAllKeys(): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public onMeasure(param0: number, param1: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public getKeyboard(): android.inputmethodservice.Keyboard;

            public swipeLeft(): void;

            public handleBack(): boolean;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public isPreviewEnabled(): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public getOnKeyboardActionListener(): android.inputmethodservice.KeyboardView.OnKeyboardActionListener;

            public isProximityCorrectionEnabled(): boolean;

            public onLongPress(param0: android.inputmethodservice.Keyboard.Key): boolean;

            public swipeUp(): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public setVerticalCorrection(param0: number): void;

            public onDetachedFromWindow(): void;

            public sendAccessibilityEvent(param0: number): void;

            public setProximityCorrectionEnabled(param0: boolean): void;

            public closing(): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public invalidateKey(param0: number): void;

            public setOnKeyboardActionListener(param0: android.inputmethodservice.KeyboardView.OnKeyboardActionListener): void;

            public setKeyboard(param0: android.inputmethodservice.Keyboard): void;

            public isShifted(): boolean;

            public onTouchEvent(param0: android.view.MotionEvent): boolean;

            public swipeRight(): void;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public setPopupOffset(param0: number, param1: number): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public constructor(param0: android.content.Context);

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public onDraw(param0: android.graphics.Canvas): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public setShifted(param0: boolean): boolean;

            public onHoverEvent(param0: android.view.MotionEvent): boolean;

            public setPopupParent(param0: android.view.View): void;

            public onClick(param0: android.view.View): void;
        }
        export module KeyboardView {
            export class OnKeyboardActionListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.inputmethodservice.KeyboardView$OnKeyboardActionListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onPress(param0: number): void;
                    onRelease(param0: number): void;
                    onKey(param0: number, param1: native.Array<number>): void;
                    onText(param0: string): void;
                    swipeLeft(): void;
                    swipeRight(): void;
                    swipeDown(): void;
                    swipeUp(): void;
                });

                public onRelease(param0: number): void;

                public onPress(param0: number): void;

                public onText(param0: string): void;

                public onKey(param0: number, param1: native.Array<number>): void;

                public swipeLeft(): void;

                public swipeRight(): void;

                public swipeUp(): void;

                public swipeDown(): void;
            }
        }
    }
}
