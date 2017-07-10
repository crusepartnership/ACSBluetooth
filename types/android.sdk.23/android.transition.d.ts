
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
declare module android {
    export module transition {
        export class ArcMotion extends android.transition.PathMotion {
            public getMaximumAngle(): number;

            public setMinimumHorizontalAngle(param0: number): void;

            public getMinimumVerticalAngle(): number;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public getMinimumHorizontalAngle(): number;

            public constructor();

            public setMinimumVerticalAngle(param0: number): void;

            public getPath(param0: number, param1: number, param2: number, param3: number): android.graphics.Path;

            public setMaximumAngle(param0: number): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
declare module android {
    export module transition {
        export class AutoTransition extends android.transition.TransitionSet {
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
            public constructor();
        }
    }
}

/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.transition.TransitionValues.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
declare module android {
    export module transition {
        export class ChangeBounds extends android.transition.Transition {
            public createAnimator(param0: android.view.ViewGroup, param1: android.transition.TransitionValues, param2: android.transition.TransitionValues): android.animation.Animator;

            public setResizeClip(param0: boolean): void;

            public getResizeClip(): boolean;

            public getTransitionProperties(): native.Array<string>;

            public captureEndValues(param0: android.transition.TransitionValues): void;

            public setReparent(param0: boolean): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
            public constructor();

            public captureStartValues(param0: android.transition.TransitionValues): void;
        }
    }
}

/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.transition.TransitionValues.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
declare module android {
    export module transition {
        export class ChangeClipBounds extends android.transition.Transition {
            public createAnimator(param0: android.view.ViewGroup, param1: android.transition.TransitionValues, param2: android.transition.TransitionValues): android.animation.Animator;

            public getTransitionProperties(): native.Array<string>;

            public captureEndValues(param0: android.transition.TransitionValues): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
            public constructor();

            public captureStartValues(param0: android.transition.TransitionValues): void;
        }
    }
}

/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.transition.TransitionValues.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
declare module android {
    export module transition {
        export class ChangeImageTransform extends android.transition.Transition {
            public createAnimator(param0: android.view.ViewGroup, param1: android.transition.TransitionValues, param2: android.transition.TransitionValues): android.animation.Animator;

            public getTransitionProperties(): native.Array<string>;

            public captureEndValues(param0: android.transition.TransitionValues): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
            public constructor();

            public captureStartValues(param0: android.transition.TransitionValues): void;
        }
    }
}

/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.transition.TransitionValues.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
declare module android {
    export module transition {
        export class ChangeScroll extends android.transition.Transition {
            public createAnimator(param0: android.view.ViewGroup, param1: android.transition.TransitionValues, param2: android.transition.TransitionValues): android.animation.Animator;

            public captureEndValues(param0: android.transition.TransitionValues): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
            public constructor();

            public captureStartValues(param0: android.transition.TransitionValues): void;
        }
    }
}

/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.transition.TransitionValues.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
declare module android {
    export module transition {
        export class ChangeTransform extends android.transition.Transition {
            public getReparent(): boolean;

            public createAnimator(param0: android.view.ViewGroup, param1: android.transition.TransitionValues, param2: android.transition.TransitionValues): android.animation.Animator;

            public getReparentWithOverlay(): boolean;

            public getTransitionProperties(): native.Array<string>;

            public captureEndValues(param0: android.transition.TransitionValues): void;

            public setReparent(param0: boolean): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
            public constructor();

            public setReparentWithOverlay(param0: boolean): void;

            public captureStartValues(param0: android.transition.TransitionValues): void;
        }
    }
}

/// <reference path="./android.transition.Transition.d.ts" />
/// <reference path="./android.transition.TransitionValues.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
declare module android {
    export module transition {
        export class CircularPropagation extends android.transition.VisibilityPropagation {
            public getStartDelay(param0: android.view.ViewGroup, param1: android.transition.Transition, param2: android.transition.TransitionValues, param3: android.transition.TransitionValues): number;

            public setPropagationSpeed(param0: number): void;

            public constructor();
        }
    }
}

/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.transition.TransitionValues.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
declare module android {
    export module transition {
        export class Explode extends android.transition.Visibility {
            public onDisappear(param0: android.view.ViewGroup, param1: android.view.View, param2: android.transition.TransitionValues, param3: android.transition.TransitionValues): android.animation.Animator;

            public onAppear(param0: android.view.ViewGroup, param1: android.transition.TransitionValues, param2: number, param3: android.transition.TransitionValues, param4: number): android.animation.Animator;

            public captureEndValues(param0: android.transition.TransitionValues): void;

            public onDisappear(param0: android.view.ViewGroup, param1: android.transition.TransitionValues, param2: number, param3: android.transition.TransitionValues, param4: number): android.animation.Animator;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public onAppear(param0: android.view.ViewGroup, param1: android.view.View, param2: android.transition.TransitionValues, param3: android.transition.TransitionValues): android.animation.Animator;

            public constructor();

            public captureStartValues(param0: android.transition.TransitionValues): void;
        }
    }
}

/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.transition.TransitionValues.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
declare module android {
    export module transition {
        export class Fade extends android.transition.Visibility {
            public static IN: number;
            public static OUT: number;

            public onDisappear(param0: android.view.ViewGroup, param1: android.view.View, param2: android.transition.TransitionValues, param3: android.transition.TransitionValues): android.animation.Animator;

            public onAppear(param0: android.view.ViewGroup, param1: android.transition.TransitionValues, param2: number, param3: android.transition.TransitionValues, param4: number): android.animation.Animator;

            public constructor(param0: number);

            public onDisappear(param0: android.view.ViewGroup, param1: android.transition.TransitionValues, param2: number, param3: android.transition.TransitionValues, param4: number): android.animation.Animator;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public onAppear(param0: android.view.ViewGroup, param1: android.view.View, param2: android.transition.TransitionValues, param3: android.transition.TransitionValues): android.animation.Animator;

            public constructor();
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
declare module android {
    export module transition {
        export abstract class PathMotion extends javalangObject {
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
            public constructor();

            public getPath(param0: number, param1: number, param2: number, param3: number): android.graphics.Path;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
declare module android {
    export module transition {
        export class PatternPathMotion extends android.transition.PathMotion {
            public getPatternPath(): android.graphics.Path;

            public constructor(param0: android.graphics.Path);
            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
            public constructor();

            public getPath(param0: number, param1: number, param2: number, param3: number): android.graphics.Path;

            public setPatternPath(param0: android.graphics.Path): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module transition {
        export class Scene extends javalangObject {
            public constructor(param0: android.view.ViewGroup, param1: android.view.ViewGroup);

            public setEnterAction(param0: javalangRunnable): void;

            public getSceneRoot(): android.view.ViewGroup;

            public static getSceneForLayout(param0: android.view.ViewGroup, param1: number, param2: android.content.Context): android.transition.Scene;

            public exit(): void;

            public enter(): void;

            public setExitAction(param0: javalangRunnable): void;

            public constructor(param0: android.view.ViewGroup);
            public constructor(param0: android.view.ViewGroup, param1: android.view.View);
        }
    }
}

/// <reference path="./android.transition.Transition.d.ts" />
/// <reference path="./android.transition.TransitionValues.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
declare module android {
    export module transition {
        export class SidePropagation extends android.transition.VisibilityPropagation {
            public getStartDelay(param0: android.view.ViewGroup, param1: android.transition.Transition, param2: android.transition.TransitionValues, param3: android.transition.TransitionValues): number;

            public setPropagationSpeed(param0: number): void;

            public setSide(param0: number): void;

            public constructor();
        }
    }
}

/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.transition.TransitionValues.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
declare module android {
    export module transition {
        export class Slide extends android.transition.Visibility {
            public setSlideEdge(param0: number): void;

            public onDisappear(param0: android.view.ViewGroup, param1: android.view.View, param2: android.transition.TransitionValues, param3: android.transition.TransitionValues): android.animation.Animator;

            public onAppear(param0: android.view.ViewGroup, param1: android.transition.TransitionValues, param2: number, param3: android.transition.TransitionValues, param4: number): android.animation.Animator;

            public captureEndValues(param0: android.transition.TransitionValues): void;

            public constructor(param0: number);

            public onDisappear(param0: android.view.ViewGroup, param1: android.transition.TransitionValues, param2: number, param3: android.transition.TransitionValues, param4: number): android.animation.Animator;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public onAppear(param0: android.view.ViewGroup, param1: android.view.View, param2: android.transition.TransitionValues, param3: android.transition.TransitionValues): android.animation.Animator;

            public constructor();

            public getSlideEdge(): number;

            public captureStartValues(param0: android.transition.TransitionValues): void;
        }
    }
}

/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.animation.TimeInterpolator.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.transition.PathMotion.d.ts" />
/// <reference path="./android.transition.Transition.d.ts" />
/// <reference path="./android.transition.TransitionPropagation.d.ts" />
/// <reference path="./android.transition.TransitionValues.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module transition {
        export abstract class Transition extends javalangObject implements javalangCloneable {
            public static MATCH_ID: number;
            public static MATCH_INSTANCE: number;
            public static MATCH_ITEM_ID: number;
            public static MATCH_NAME: number;

            public getTargetTypes(): javautilList;

            public setStartDelay(param0: number): android.transition.Transition;

            public createAnimator(param0: android.view.ViewGroup, param1: android.transition.TransitionValues, param2: android.transition.TransitionValues): android.animation.Animator;

            public clone(): android.transition.Transition;

            public getDuration(): number;

            public removeTarget(param0: string): android.transition.Transition;

            public clone(): javalangObject;

            public getInterpolator(): android.animation.TimeInterpolator;

            public getTargetNames(): javautilList;

            public excludeChildren(param0: javalangClass, param1: boolean): android.transition.Transition;

            public addTarget(param0: string): android.transition.Transition;

            public removeTarget(param0: javalangClass): android.transition.Transition;

            public isTransitionRequired(param0: android.transition.TransitionValues, param1: android.transition.TransitionValues): boolean;

            public captureEndValues(param0: android.transition.TransitionValues): void;

            public canRemoveViews(): boolean;

            public getEpicenterCallback(): android.transition.Transition.EpicenterCallback;

            public setPropagation(param0: android.transition.TransitionPropagation): void;

            public getStartDelay(): number;

            public captureStartValues(param0: android.transition.TransitionValues): void;

            public excludeTarget(param0: android.view.View, param1: boolean): android.transition.Transition;

            public setPathMotion(param0: android.transition.PathMotion): void;

            public removeTarget(param0: android.view.View): android.transition.Transition;

            public setMatchOrder(param0: native.Array<number>): void;

            public excludeTarget(param0: string, param1: boolean): android.transition.Transition;

            public setEpicenterCallback(param0: android.transition.Transition.EpicenterCallback): void;

            public getPathMotion(): android.transition.PathMotion;

            public constructor();

            public getTargetIds(): javautilList;

            public addListener(param0: android.transition.Transition.TransitionListener): android.transition.Transition;

            public getPropagation(): android.transition.TransitionPropagation;

            public addTarget(param0: android.view.View): android.transition.Transition;

            public getTransitionValues(param0: android.view.View, param1: boolean): android.transition.TransitionValues;

            public setInterpolator(param0: android.animation.TimeInterpolator): android.transition.Transition;

            public addTarget(param0: javalangClass): android.transition.Transition;

            public excludeChildren(param0: number, param1: boolean): android.transition.Transition;
            public excludeChildren(param0: android.view.View, param1: boolean): android.transition.Transition;

            public getTargets(): javautilList;

            public toString(): string;

            public getName(): string;

            public getTransitionProperties(): native.Array<string>;

            public removeListener(param0: android.transition.Transition.TransitionListener): android.transition.Transition;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public excludeTarget(param0: number, param1: boolean): android.transition.Transition;

            public removeTarget(param0: number): android.transition.Transition;

            public excludeTarget(param0: javalangClass, param1: boolean): android.transition.Transition;

            public getEpicenter(): android.graphics.Rect;

            public setDuration(param0: number): android.transition.Transition;

            public addTarget(param0: number): android.transition.Transition;
        }
        export module Transition {
            export abstract class EpicenterCallback extends javalangObject {
                public constructor();

                public onGetEpicenter(param0: android.transition.Transition): android.graphics.Rect;
            }
            export class TransitionListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.transition.Transition$TransitionListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onTransitionStart(param0: android.transition.Transition): void;
                    onTransitionEnd(param0: android.transition.Transition): void;
                    onTransitionCancel(param0: android.transition.Transition): void;
                    onTransitionPause(param0: android.transition.Transition): void;
                    onTransitionResume(param0: android.transition.Transition): void;
                });

                public onTransitionStart(param0: android.transition.Transition): void;

                public onTransitionEnd(param0: android.transition.Transition): void;

                public onTransitionResume(param0: android.transition.Transition): void;

                public onTransitionPause(param0: android.transition.Transition): void;

                public onTransitionCancel(param0: android.transition.Transition): void;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.transition.Transition.d.ts" />
/// <reference path="./android.transition.TransitionManager.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
declare module android {
    export module transition {
        export class TransitionInflater extends javalangObject {
            public static from(param0: android.content.Context): android.transition.TransitionInflater;

            public inflateTransitionManager(param0: number, param1: android.view.ViewGroup): android.transition.TransitionManager;

            public inflateTransition(param0: number): android.transition.Transition;
        }
    }
}

/// <reference path="./android.transition.Scene.d.ts" />
/// <reference path="./android.transition.Transition.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
declare module android {
    export module transition {
        export class TransitionManager extends javalangObject {
            public setTransition(param0: android.transition.Scene, param1: android.transition.Scene, param2: android.transition.Transition): void;

            public static go(param0: android.transition.Scene, param1: android.transition.Transition): void;

            public setTransition(param0: android.transition.Scene, param1: android.transition.Transition): void;

            public constructor();

            public static go(param0: android.transition.Scene): void;

            public static beginDelayedTransition(param0: android.view.ViewGroup): void;
            public static beginDelayedTransition(param0: android.view.ViewGroup, param1: android.transition.Transition): void;

            public static endTransitions(param0: android.view.ViewGroup): void;

            public transitionTo(param0: android.transition.Scene): void;
        }
    }
}

/// <reference path="./android.transition.Transition.d.ts" />
/// <reference path="./android.transition.TransitionValues.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
declare module android {
    export module transition {
        export abstract class TransitionPropagation extends javalangObject {
            public getStartDelay(param0: android.view.ViewGroup, param1: android.transition.Transition, param2: android.transition.TransitionValues, param3: android.transition.TransitionValues): number;

            public captureValues(param0: android.transition.TransitionValues): void;

            public constructor();

            public getPropagationProperties(): native.Array<string>;
        }
    }
}

/// <reference path="./android.animation.TimeInterpolator.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.transition.PathMotion.d.ts" />
/// <reference path="./android.transition.Transition.d.ts" />
/// <reference path="./android.transition.TransitionPropagation.d.ts" />
/// <reference path="./android.transition.TransitionValues.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module transition {
        export class TransitionSet extends android.transition.Transition {
            public static ORDERING_SEQUENTIAL: number;
            public static ORDERING_TOGETHER: number;

            public getOrdering(): number;

            public setStartDelay(param0: number): android.transition.Transition;
            public setStartDelay(param0: number): android.transition.TransitionSet;

            public clone(): android.transition.Transition;

            public addListener(param0: android.transition.Transition.TransitionListener): android.transition.TransitionSet;

            public addTarget(param0: number): android.transition.TransitionSet;

            public removeTarget(param0: string): android.transition.Transition;

            public clone(): javalangObject;

            public addTransition(param0: android.transition.Transition): android.transition.TransitionSet;

            public removeTarget(param0: string): android.transition.TransitionSet;

            public removeListener(param0: android.transition.Transition.TransitionListener): android.transition.TransitionSet;

            public getTransitionAt(param0: number): android.transition.Transition;

            public addTarget(param0: string): android.transition.Transition;

            public removeTarget(param0: javalangClass): android.transition.Transition;

            public setOrdering(param0: number): android.transition.TransitionSet;

            public setInterpolator(param0: android.animation.TimeInterpolator): android.transition.TransitionSet;

            public captureEndValues(param0: android.transition.TransitionValues): void;

            public setPropagation(param0: android.transition.TransitionPropagation): void;

            public excludeTarget(param0: android.view.View, param1: boolean): android.transition.Transition;

            public setPathMotion(param0: android.transition.PathMotion): void;

            public captureStartValues(param0: android.transition.TransitionValues): void;

            public removeTarget(param0: android.view.View): android.transition.Transition;

            public excludeTarget(param0: string, param1: boolean): android.transition.Transition;

            public setEpicenterCallback(param0: android.transition.Transition.EpicenterCallback): void;

            public addTarget(param0: android.view.View): android.transition.TransitionSet;

            public removeTarget(param0: android.view.View): android.transition.TransitionSet;

            public clone(): android.transition.TransitionSet;

            public constructor();

            public addListener(param0: android.transition.Transition.TransitionListener): android.transition.Transition;

            public addTarget(param0: android.view.View): android.transition.Transition;

            public getTransitionCount(): number;

            public setDuration(param0: number): android.transition.TransitionSet;

            public setInterpolator(param0: android.animation.TimeInterpolator): android.transition.Transition;

            public addTarget(param0: javalangClass): android.transition.Transition;

            public removeTransition(param0: android.transition.Transition): android.transition.TransitionSet;

            public removeTarget(param0: javalangClass): android.transition.TransitionSet;

            public removeListener(param0: android.transition.Transition.TransitionListener): android.transition.Transition;

            public addTarget(param0: string): android.transition.TransitionSet;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public excludeTarget(param0: number, param1: boolean): android.transition.Transition;

            public removeTarget(param0: number): android.transition.Transition;

            public excludeTarget(param0: javalangClass, param1: boolean): android.transition.Transition;

            public setDuration(param0: number): android.transition.Transition;

            public addTarget(param0: number): android.transition.Transition;

            public removeTarget(param0: number): android.transition.TransitionSet;

            public addTarget(param0: javalangClass): android.transition.TransitionSet;
        }
    }
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module android {
    export module transition {
        export class TransitionValues extends javalangObject {
            public values: javautilMap;
            public view: android.view.View;

            public toString(): string;

            public equals(param0: javalangObject): boolean;

            public constructor();

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.transition.TransitionValues.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
declare module android {
    export module transition {
        export abstract class Visibility extends android.transition.Transition {
            public static MODE_IN: number;
            public static MODE_OUT: number;

            public onAppear(param0: android.view.ViewGroup, param1: android.transition.TransitionValues, param2: number, param3: android.transition.TransitionValues, param4: number): android.animation.Animator;

            public createAnimator(param0: android.view.ViewGroup, param1: android.transition.TransitionValues, param2: android.transition.TransitionValues): android.animation.Animator;

            public setMode(param0: number): void;

            public onDisappear(param0: android.view.ViewGroup, param1: android.transition.TransitionValues, param2: number, param3: android.transition.TransitionValues, param4: number): android.animation.Animator;

            public onAppear(param0: android.view.ViewGroup, param1: android.view.View, param2: android.transition.TransitionValues, param3: android.transition.TransitionValues): android.animation.Animator;

            public constructor();

            public onDisappear(param0: android.view.ViewGroup, param1: android.view.View, param2: android.transition.TransitionValues, param3: android.transition.TransitionValues): android.animation.Animator;

            public getTransitionProperties(): native.Array<string>;

            public isTransitionRequired(param0: android.transition.TransitionValues, param1: android.transition.TransitionValues): boolean;

            public captureEndValues(param0: android.transition.TransitionValues): void;

            public isVisible(param0: android.transition.TransitionValues): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public getMode(): number;

            public captureStartValues(param0: android.transition.TransitionValues): void;
        }
    }
}

/// <reference path="./android.transition.TransitionValues.d.ts" />
declare module android {
    export module transition {
        export abstract class VisibilityPropagation extends android.transition.TransitionPropagation {
            public captureValues(param0: android.transition.TransitionValues): void;

            public getViewVisibility(param0: android.transition.TransitionValues): number;

            public getViewY(param0: android.transition.TransitionValues): number;

            public getViewX(param0: android.transition.TransitionValues): number;

            public constructor();

            public getPropagationProperties(): native.Array<string>;
        }
    }
}
