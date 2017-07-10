
import javalangCloneable = java.lang.Cloneable;
/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.animation.TimeInterpolator.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module android {
    export module animation {
        export abstract class Animator extends javalangObject implements javalangCloneable {
            public getListeners(): javautilArrayList;

            public setupStartValues(): void;

            public removePauseListener(param0: android.animation.Animator.AnimatorPauseListener): void;

            public removeAllListeners(): void;

            public getDuration(): number;

            public end(): void;

            public isPaused(): boolean;

            public clone(): javalangObject;

            public cancel(): void;

            public addPauseListener(param0: android.animation.Animator.AnimatorPauseListener): void;

            public setDuration(param0: number): android.animation.Animator;

            public getInterpolator(): android.animation.TimeInterpolator;

            public pause(): void;

            public isRunning(): boolean;

            public resume(): void;

            public addListener(param0: android.animation.Animator.AnimatorListener): void;

            public removeListener(param0: android.animation.Animator.AnimatorListener): void;

            public start(): void;

            public setInterpolator(param0: android.animation.TimeInterpolator): void;

            public getStartDelay(): number;

            public clone(): android.animation.Animator;

            public isStarted(): boolean;

            public setStartDelay(param0: number): void;

            public constructor();

            public setTarget(param0: javalangObject): void;

            public setupEndValues(): void;
        }
        export module Animator {
            export class AnimatorListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.animation.Animator$AnimatorListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onAnimationStart(param0: android.animation.Animator): void;
                    onAnimationEnd(param0: android.animation.Animator): void;
                    onAnimationCancel(param0: android.animation.Animator): void;
                    onAnimationRepeat(param0: android.animation.Animator): void;
                });

                public onAnimationEnd(param0: android.animation.Animator): void;

                public onAnimationStart(param0: android.animation.Animator): void;

                public onAnimationRepeat(param0: android.animation.Animator): void;

                public onAnimationCancel(param0: android.animation.Animator): void;
            }
            export class AnimatorPauseListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.animation.Animator$AnimatorPauseListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onAnimationPause(param0: android.animation.Animator): void;
                    onAnimationResume(param0: android.animation.Animator): void;
                });

                public onAnimationPause(param0: android.animation.Animator): void;

                public onAnimationResume(param0: android.animation.Animator): void;
            }
        }
    }
}

/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.animation.StateListAnimator.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
declare module android {
    export module animation {
        export class AnimatorInflater extends javalangObject {
            public static loadAnimator(param0: android.content.Context, param1: number): android.animation.Animator;

            public constructor();

            public static loadStateListAnimator(param0: android.content.Context, param1: number): android.animation.StateListAnimator;
        }
    }
}

/// <reference path="./android.animation.Animator.d.ts" />
declare module android {
    export module animation {
        export abstract class AnimatorListenerAdapter extends javalangObject implements android.animation.Animator.AnimatorListener, android.animation.Animator.AnimatorPauseListener {
            public onAnimationPause(param0: android.animation.Animator): void;

            public onAnimationRepeat(param0: android.animation.Animator): void;

            public onAnimationStart(param0: android.animation.Animator): void;

            public constructor();

            public onAnimationCancel(param0: android.animation.Animator): void;

            public onAnimationResume(param0: android.animation.Animator): void;

            public onAnimationEnd(param0: android.animation.Animator): void;
        }
    }
}

import javautilCollection = java.util.Collection;
/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.animation.TimeInterpolator.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module animation {
        export class AnimatorSet extends android.animation.Animator {
            public setupStartValues(): void;

            public playSequentially(param0: javautilList): void;

            public getChildAnimations(): javautilArrayList;

            public getDuration(): number;

            public end(): void;

            public playTogether(param0: javautilCollection): void;

            public clone(): javalangObject;

            public cancel(): void;

            public setDuration(param0: number): android.animation.AnimatorSet;

            public getInterpolator(): android.animation.TimeInterpolator;

            public setDuration(param0: number): android.animation.Animator;

            public pause(): void;

            public isRunning(): boolean;

            public resume(): void;

            public setInterpolator(param0: android.animation.TimeInterpolator): void;

            public start(): void;

            public getStartDelay(): number;

            public clone(): android.animation.AnimatorSet;
            public clone(): android.animation.Animator;

            public isStarted(): boolean;

            public playTogether(param0: native.Array<android.animation.Animator>): void;

            public setStartDelay(param0: number): void;

            public constructor();

            public playSequentially(param0: native.Array<android.animation.Animator>): void;

            public toString(): string;

            public setTarget(param0: javalangObject): void;

            public play(param0: android.animation.Animator): android.animation.AnimatorSet.Builder;

            public setupEndValues(): void;
        }
        export module AnimatorSet {
            export class Builder extends javalangObject {
                public after(param0: android.animation.Animator): android.animation.AnimatorSet.Builder;

                public with(param0: android.animation.Animator): android.animation.AnimatorSet.Builder;

                public after(param0: number): android.animation.AnimatorSet.Builder;

                public before(param0: android.animation.Animator): android.animation.AnimatorSet.Builder;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module animation {
        export class ArgbEvaluator extends javalangObject {
            public evaluate(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;

            public constructor();
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module animation {
        export abstract class BidirectionalTypeConverter extends android.animation.TypeConverter {
            public constructor(param0: javalangClass, param1: javalangClass);

            public invert(): android.animation.BidirectionalTypeConverter;

            public convertBack(param0: javalangObject): javalangObject;
        }
    }
}

declare module android {
    export module animation {
        export class FloatArrayEvaluator extends javalangObject {
            public constructor();
            public constructor(param0: native.Array<number>);

            public evaluate(param0: number, param1: native.Array<number>, param2: native.Array<number>): native.Array<number>;
        }
    }
}

import javalangNumber = java.lang.Number;
import javalangFloat = java.lang.Float;
/// <reference path="./java.lang.Float.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
declare module android {
    export module animation {
        export class FloatEvaluator extends javalangObject {
            public constructor();

            public evaluate(param0: number, param1: javalangNumber, param2: javalangNumber): javalangFloat;
        }
    }
}

declare module android {
    export module animation {
        export class IntArrayEvaluator extends javalangObject {
            public constructor();
            public constructor(param0: native.Array<number>);

            public evaluate(param0: number, param1: native.Array<number>, param2: native.Array<number>): native.Array<number>;
        }
    }
}

import javalangInteger = java.lang.Integer;
/// <reference path="./java.lang.Integer.d.ts" />
declare module android {
    export module animation {
        export class IntEvaluator extends javalangObject {
            public evaluate(param0: number, param1: javalangInteger, param2: javalangInteger): javalangInteger;

            public constructor();
        }
    }
}

/// <reference path="./android.animation.TimeInterpolator.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module animation {
        export abstract class Keyframe extends javalangObject implements javalangCloneable {
            public static ofInt(param0: number, param1: number): android.animation.Keyframe;

            public getType(): javalangClass;

            public getFraction(): number;

            public clone(): android.animation.Keyframe;

            public setValue(param0: javalangObject): void;

            public static ofFloat(param0: number): android.animation.Keyframe;

            public clone(): javalangObject;

            public constructor();

            public getInterpolator(): android.animation.TimeInterpolator;

            public static ofFloat(param0: number, param1: number): android.animation.Keyframe;

            public static ofInt(param0: number): android.animation.Keyframe;

            public setFraction(param0: number): void;

            public hasValue(): boolean;

            public static ofObject(param0: number, param1: javalangObject): android.animation.Keyframe;
            public static ofObject(param0: number): android.animation.Keyframe;

            public getValue(): javalangObject;

            public setInterpolator(param0: android.animation.TimeInterpolator): void;
        }
    }
}

/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.animation.LayoutTransition.d.ts" />
/// <reference path="./android.animation.TimeInterpolator.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module animation {
        export class LayoutTransition extends javalangObject {
            public static APPEARING: number;
            public static CHANGE_APPEARING: number;
            public static CHANGE_DISAPPEARING: number;
            public static CHANGING: number;
            public static DISAPPEARING: number;

            public getStartDelay(param0: number): number;

            public addChild(param0: android.view.ViewGroup, param1: android.view.View): void;

            public setStagger(param0: number, param1: number): void;

            public setStartDelay(param0: number, param1: number): void;

            public setAnimateParentHierarchy(param0: boolean): void;

            public isRunning(): boolean;

            public setInterpolator(param0: number, param1: android.animation.TimeInterpolator): void;

            public enableTransitionType(param0: number): void;

            public isTransitionTypeEnabled(param0: number): boolean;

            public getTransitionListeners(): javautilList;

            public hideChild(param0: android.view.ViewGroup, param1: android.view.View, param2: number): void;

            public disableTransitionType(param0: number): void;

            public getAnimator(param0: number): android.animation.Animator;

            public getDuration(param0: number): number;

            public setDuration(param0: number): void;

            public showChild(param0: android.view.ViewGroup, param1: android.view.View, param2: number): void;

            public removeChild(param0: android.view.ViewGroup, param1: android.view.View): void;

            public hideChild(param0: android.view.ViewGroup, param1: android.view.View): void;

            public isChangingLayout(): boolean;

            public constructor();

            public setAnimator(param0: number, param1: android.animation.Animator): void;

            public addTransitionListener(param0: android.animation.LayoutTransition.TransitionListener): void;

            public getStagger(param0: number): number;

            public setDuration(param0: number, param1: number): void;

            public getInterpolator(param0: number): android.animation.TimeInterpolator;

            public removeTransitionListener(param0: android.animation.LayoutTransition.TransitionListener): void;

            public showChild(param0: android.view.ViewGroup, param1: android.view.View): void;
        }
        export module LayoutTransition {
            export class TransitionListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.animation.LayoutTransition$TransitionListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    startTransition(param0: android.animation.LayoutTransition, param1: android.view.ViewGroup, param2: android.view.View, param3: number): void;
                    endTransition(param0: android.animation.LayoutTransition, param1: android.view.ViewGroup, param2: android.view.View, param3: number): void;
                });

                public startTransition(param0: android.animation.LayoutTransition, param1: android.view.ViewGroup, param2: android.view.View, param3: number): void;

                public endTransition(param0: android.animation.LayoutTransition, param1: android.view.ViewGroup, param2: android.view.View, param3: number): void;
            }
        }
    }
}

/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.animation.PropertyValuesHolder.d.ts" />
/// <reference path="./android.animation.TypeConverter.d.ts" />
/// <reference path="./android.animation.TypeEvaluator.d.ts" />
/// <reference path="./android.animation.ValueAnimator.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.util.Property.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module animation {
        export class ObjectAnimator extends android.animation.ValueAnimator {
            public setupStartValues(): void;

            public static ofFloat(param0: javalangObject, param1: android.util.Property, param2: android.util.Property, param3: android.graphics.Path): android.animation.ObjectAnimator;

            public clone(): android.animation.ValueAnimator;

            public getTarget(): javalangObject;

            public static ofMultiInt(param0: javalangObject, param1: string, param2: android.animation.TypeConverter, param3: android.animation.TypeEvaluator, param4: native.Array<javalangObject>): android.animation.ObjectAnimator;

            public clone(): android.animation.ObjectAnimator;

            public static ofArgb(param0: native.Array<number>): android.animation.ValueAnimator;

            public setProperty(param0: android.util.Property): void;

            public setIntValues(param0: native.Array<number>): void;

            public clone(): javalangObject;

            public getPropertyName(): string;

            public setDuration(param0: number): android.animation.Animator;

            public setPropertyName(param0: string): void;

            public static ofObject(param0: javalangObject, param1: string, param2: android.animation.TypeConverter, param3: android.graphics.Path): android.animation.ObjectAnimator;
            public static ofObject(param0: android.animation.TypeEvaluator, param1: native.Array<javalangObject>): android.animation.ValueAnimator;

            public static ofFloat(param0: native.Array<number>): android.animation.ValueAnimator;

            public static ofArgb(param0: javalangObject, param1: android.util.Property, param2: native.Array<number>): android.animation.ObjectAnimator;

            public setObjectValues(param0: native.Array<javalangObject>): void;

            public static ofPropertyValuesHolder(param0: native.Array<android.animation.PropertyValuesHolder>): android.animation.ValueAnimator;

            public start(): void;

            public static ofInt(param0: native.Array<number>): android.animation.ValueAnimator;

            public static ofObject(param0: javalangObject, param1: android.util.Property, param2: android.animation.TypeEvaluator, param3: native.Array<javalangObject>): android.animation.ObjectAnimator;
            public static ofObject(param0: javalangObject, param1: android.util.Property, param2: android.animation.TypeConverter, param3: android.graphics.Path): android.animation.ObjectAnimator;

            public setFloatValues(param0: native.Array<number>): void;

            public static ofObject(param0: javalangObject, param1: string, param2: android.animation.TypeEvaluator, param3: native.Array<javalangObject>): android.animation.ObjectAnimator;

            public clone(): android.animation.Animator;

            public static ofMultiInt(param0: javalangObject, param1: string, param2: native.Array<native.Array<number>>): android.animation.ObjectAnimator;

            public constructor();

            public static ofInt(param0: javalangObject, param1: string, param2: string, param3: android.graphics.Path): android.animation.ObjectAnimator;

            public setDuration(param0: number): android.animation.ObjectAnimator;

            public static ofInt(param0: javalangObject, param1: string, param2: native.Array<number>): android.animation.ObjectAnimator;

            public static ofFloat(param0: javalangObject, param1: android.util.Property, param2: native.Array<number>): android.animation.ObjectAnimator;

            public toString(): string;

            public static ofInt(param0: javalangObject, param1: android.util.Property, param2: android.util.Property, param3: android.graphics.Path): android.animation.ObjectAnimator;

            public static ofObject(param0: javalangObject, param1: android.util.Property, param2: android.animation.TypeConverter, param3: android.animation.TypeEvaluator, param4: native.Array<javalangObject>): android.animation.ObjectAnimator;

            public setTarget(param0: javalangObject): void;

            public static ofPropertyValuesHolder(param0: javalangObject, param1: native.Array<android.animation.PropertyValuesHolder>): android.animation.ObjectAnimator;

            public setAutoCancel(param0: boolean): void;

            public static ofInt(param0: javalangObject, param1: android.util.Property, param2: native.Array<number>): android.animation.ObjectAnimator;

            public static ofArgb(param0: javalangObject, param1: string, param2: native.Array<number>): android.animation.ObjectAnimator;

            public static ofMultiFloat(param0: javalangObject, param1: string, param2: native.Array<native.Array<number>>): android.animation.ObjectAnimator;
            public static ofMultiFloat(param0: javalangObject, param1: string, param2: android.animation.TypeConverter, param3: android.animation.TypeEvaluator, param4: native.Array<javalangObject>): android.animation.ObjectAnimator;
            public static ofMultiFloat(param0: javalangObject, param1: string, param2: android.graphics.Path): android.animation.ObjectAnimator;

            public static ofMultiInt(param0: javalangObject, param1: string, param2: android.graphics.Path): android.animation.ObjectAnimator;

            public static ofFloat(param0: javalangObject, param1: string, param2: native.Array<number>): android.animation.ObjectAnimator;
            public static ofFloat(param0: javalangObject, param1: string, param2: string, param3: android.graphics.Path): android.animation.ObjectAnimator;

            public setDuration(param0: number): android.animation.ValueAnimator;

            public setupEndValues(): void;
        }
    }
}

/// <reference path="./android.graphics.PointF.d.ts" />
declare module android {
    export module animation {
        export class PointFEvaluator extends javalangObject {
            public evaluate(param0: number, param1: android.graphics.PointF, param2: android.graphics.PointF): android.graphics.PointF;

            public constructor();
            public constructor(param0: android.graphics.PointF);
        }
    }
}

/// <reference path="./android.animation.Keyframe.d.ts" />
/// <reference path="./android.animation.TypeConverter.d.ts" />
/// <reference path="./android.animation.TypeEvaluator.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.util.Property.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module animation {
        export class PropertyValuesHolder extends javalangObject implements javalangCloneable {
            public static ofInt(param0: string, param1: native.Array<number>): android.animation.PropertyValuesHolder;
            public static ofInt(param0: android.util.Property, param1: native.Array<number>): android.animation.PropertyValuesHolder;

            public clone(): android.animation.PropertyValuesHolder;

            public setIntValues(param0: native.Array<number>): void;

            public clone(): javalangObject;

            public setProperty(param0: android.util.Property): void;

            public static ofKeyframe(param0: string, param1: native.Array<android.animation.Keyframe>): android.animation.PropertyValuesHolder;

            public getPropertyName(): string;

            public static ofMultiInt(param0: string, param1: native.Array<native.Array<number>>): android.animation.PropertyValuesHolder;

            public setPropertyName(param0: string): void;

            public static ofMultiInt(param0: string, param1: android.graphics.Path): android.animation.PropertyValuesHolder;
            public static ofMultiInt(param0: string, param1: android.animation.TypeConverter, param2: android.animation.TypeEvaluator, param3: native.Array<android.animation.Keyframe>): android.animation.PropertyValuesHolder;

            public static ofObject(param0: string, param1: android.animation.TypeEvaluator, param2: native.Array<javalangObject>): android.animation.PropertyValuesHolder;

            public setObjectValues(param0: native.Array<javalangObject>): void;

            public static ofMultiFloat(param0: string, param1: android.animation.TypeConverter, param2: android.animation.TypeEvaluator, param3: native.Array<android.animation.Keyframe>): android.animation.PropertyValuesHolder;

            public static ofObject(param0: android.util.Property, param1: android.animation.TypeConverter, param2: android.graphics.Path): android.animation.PropertyValuesHolder;

            public static ofMultiInt(param0: string, param1: android.animation.TypeConverter, param2: android.animation.TypeEvaluator, param3: native.Array<javalangObject>): android.animation.PropertyValuesHolder;

            public setConverter(param0: android.animation.TypeConverter): void;

            public static ofObject(param0: android.util.Property, param1: android.animation.TypeEvaluator, param2: native.Array<javalangObject>): android.animation.PropertyValuesHolder;

            public static ofFloat(param0: android.util.Property, param1: native.Array<number>): android.animation.PropertyValuesHolder;

            public static ofObject(param0: android.util.Property, param1: android.animation.TypeConverter, param2: android.animation.TypeEvaluator, param3: native.Array<javalangObject>): android.animation.PropertyValuesHolder;

            public setFloatValues(param0: native.Array<number>): void;

            public static ofMultiFloat(param0: string, param1: native.Array<native.Array<number>>): android.animation.PropertyValuesHolder;
            public static ofMultiFloat(param0: string, param1: android.animation.TypeConverter, param2: android.animation.TypeEvaluator, param3: native.Array<javalangObject>): android.animation.PropertyValuesHolder;
            public static ofMultiFloat(param0: string, param1: android.graphics.Path): android.animation.PropertyValuesHolder;

            public setEvaluator(param0: android.animation.TypeEvaluator): void;

            public static ofKeyframe(param0: android.util.Property, param1: native.Array<android.animation.Keyframe>): android.animation.PropertyValuesHolder;

            public setKeyframes(param0: native.Array<android.animation.Keyframe>): void;

            public toString(): string;

            public static ofObject(param0: string, param1: android.animation.TypeConverter, param2: android.graphics.Path): android.animation.PropertyValuesHolder;

            public static ofFloat(param0: string, param1: native.Array<number>): android.animation.PropertyValuesHolder;
        }
    }
}

/// <reference path="./android.graphics.Rect.d.ts" />
declare module android {
    export module animation {
        export class RectEvaluator extends javalangObject {
            public evaluate(param0: number, param1: android.graphics.Rect, param2: android.graphics.Rect): android.graphics.Rect;

            public constructor(param0: android.graphics.Rect);
            public constructor();
        }
    }
}

/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module animation {
        export class StateListAnimator extends javalangObject implements javalangCloneable {
            public jumpToCurrentState(): void;

            public clone(): android.animation.StateListAnimator;
            public clone(): javalangObject;

            public constructor();

            public addState(param0: native.Array<number>, param1: android.animation.Animator): void;
        }
    }
}

/// <reference path="./android.animation.TimeAnimator.d.ts" />
declare module android {
    export module animation {
        export class TimeAnimator extends android.animation.ValueAnimator {
            public setCurrentPlayTime(param0: number): void;

            public constructor();

            public start(): void;

            public setTimeListener(param0: android.animation.TimeAnimator.TimeListener): void;
        }
        export module TimeAnimator {
            export class TimeListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.animation.TimeAnimator$TimeListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onTimeUpdate(param0: android.animation.TimeAnimator, param1: number, param2: number): void;
                });

                public onTimeUpdate(param0: android.animation.TimeAnimator, param1: number, param2: number): void;
            }
        }
    }
}

declare module android {
    export module animation {
        export class TimeInterpolator extends javalangObject {
            /**
             * Constructs a new instance of the android.animation.TimeInterpolator interface with the provided implementation.
             */
            public constructor(implementation: {
                getInterpolation(param0: number): number;
            });

            public getInterpolation(param0: number): number;
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module animation {
        export abstract class TypeConverter extends javalangObject {
            public constructor(param0: javalangClass, param1: javalangClass);

            public convert(param0: javalangObject): javalangObject;
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module animation {
        export class TypeEvaluator extends javalangObject {
            /**
             * Constructs a new instance of the android.animation.TypeEvaluator interface with the provided implementation.
             */
            public constructor(implementation: {
                evaluate(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
            });

            public evaluate(param0: number, param1: javalangObject, param2: javalangObject): javalangObject;
        }
    }
}

/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.animation.PropertyValuesHolder.d.ts" />
/// <reference path="./android.animation.TimeInterpolator.d.ts" />
/// <reference path="./android.animation.TypeEvaluator.d.ts" />
/// <reference path="./android.animation.ValueAnimator.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module animation {
        export class ValueAnimator extends android.animation.Animator {
            public static INFINITE: number;
            public static RESTART: number;
            public static REVERSE: number;

            public clone(): android.animation.ValueAnimator;

            public reverse(): void;

            public getRepeatCount(): number;

            public removeUpdateListener(param0: android.animation.ValueAnimator.AnimatorUpdateListener): void;

            public getDuration(): number;

            public static ofArgb(param0: native.Array<number>): android.animation.ValueAnimator;

            public end(): void;

            public setIntValues(param0: native.Array<number>): void;

            public clone(): javalangObject;

            public cancel(): void;

            public setDuration(param0: number): android.animation.Animator;

            public getInterpolator(): android.animation.TimeInterpolator;

            public getRepeatMode(): number;

            public pause(): void;

            public static ofObject(param0: android.animation.TypeEvaluator, param1: native.Array<javalangObject>): android.animation.ValueAnimator;

            public isRunning(): boolean;

            public resume(): void;

            public static ofFloat(param0: native.Array<number>): android.animation.ValueAnimator;

            public setValues(param0: native.Array<android.animation.PropertyValuesHolder>): void;

            public setObjectValues(param0: native.Array<javalangObject>): void;

            public static ofPropertyValuesHolder(param0: native.Array<android.animation.PropertyValuesHolder>): android.animation.ValueAnimator;

            public setInterpolator(param0: android.animation.TimeInterpolator): void;

            public start(): void;

            public getStartDelay(): number;

            public static ofInt(param0: native.Array<number>): android.animation.ValueAnimator;

            public setCurrentPlayTime(param0: number): void;

            public static setFrameDelay(param0: number): void;

            public setFloatValues(param0: native.Array<number>): void;

            public getCurrentPlayTime(): number;

            public clone(): android.animation.Animator;

            public getAnimatedValue(): javalangObject;

            public isStarted(): boolean;

            public setRepeatCount(param0: number): void;

            public setStartDelay(param0: number): void;

            public addUpdateListener(param0: android.animation.ValueAnimator.AnimatorUpdateListener): void;

            public constructor();

            public setEvaluator(param0: android.animation.TypeEvaluator): void;

            public getValues(): native.Array<android.animation.PropertyValuesHolder>;

            public setRepeatMode(param0: number): void;

            public setCurrentFraction(param0: number): void;

            public removeAllUpdateListeners(): void;

            public toString(): string;

            public getAnimatedFraction(): number;

            public static getFrameDelay(): number;

            public getAnimatedValue(param0: string): javalangObject;

            public setDuration(param0: number): android.animation.ValueAnimator;
        }
        export module ValueAnimator {
            export class AnimatorUpdateListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.animation.ValueAnimator$AnimatorUpdateListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onAnimationUpdate(param0: android.animation.ValueAnimator): void;
                });

                public onAnimationUpdate(param0: android.animation.ValueAnimator): void;
            }
        }
    }
}
