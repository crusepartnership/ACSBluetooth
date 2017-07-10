
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export class AlteredCharSequence extends javalangObject implements javalangCharSequence, android.text.GetChars {
            public charAt(param0: number): string;

            public getChars(param0: number, param1: number, param2: native.Array<string>, param3: number): void;

            public subSequence(param0: number, param1: number): string;

            public toString(): string;

            public length(): number;

            public static make(param0: string, param1: native.Array<string>, param2: number, param3: number): android.text.AlteredCharSequence;
        }
    }
}

declare module android {
    export module text {
        export class AndroidCharacter extends javalangObject {
            public static EAST_ASIAN_WIDTH_AMBIGUOUS: number;
            public static EAST_ASIAN_WIDTH_FULL_WIDTH: number;
            public static EAST_ASIAN_WIDTH_HALF_WIDTH: number;
            public static EAST_ASIAN_WIDTH_NARROW: number;
            public static EAST_ASIAN_WIDTH_NEUTRAL: number;
            public static EAST_ASIAN_WIDTH_WIDE: number;

            public static getEastAsianWidth(param0: string): number;

            public static mirror(param0: native.Array<string>, param1: number, param2: number): boolean;

            public static getDirectionalities(param0: native.Array<string>, param1: native.Array<number>, param2: number): void;

            public static getEastAsianWidths(param0: native.Array<string>, param1: number, param2: number, param3: native.Array<number>): void;

            public constructor();

            public static getMirror(param0: string): string;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module text {
        export class Annotation extends javalangObject implements android.text.ParcelableSpan {
            public constructor(param0: string, param1: string);

            public getSpanTypeId(): number;

            public constructor(param0: android.os.Parcel);

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getKey(): string;

            public getValue(): string;
        }
    }
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export class AutoText extends javalangObject {
            public static get(param0: string, param1: number, param2: number, param3: android.view.View): string;

            public static getSize(param0: android.view.View): number;
        }
    }
}

/// <reference path="./android.text.BidiFormatter.d.ts" />
/// <reference path="./android.text.TextDirectionHeuristic.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module android {
    export module text {
        export class BidiFormatter extends javalangObject {
            public static getInstance(param0: boolean): android.text.BidiFormatter;

            public unicodeWrap(param0: string, param1: android.text.TextDirectionHeuristic): string;
            public unicodeWrap(param0: string): string;

            public static getInstance(): android.text.BidiFormatter;

            public isRtlContext(): boolean;

            public unicodeWrap(param0: string, param1: boolean): string;
            public unicodeWrap(param0: string, param1: android.text.TextDirectionHeuristic, param2: boolean): string;

            public static getInstance(param0: javautilLocale): android.text.BidiFormatter;

            public getStereoReset(): boolean;

            public isRtl(param0: string): boolean;
        }
        export module BidiFormatter {
            export class Builder extends javalangObject {
                public constructor(param0: javautilLocale);

                public setTextDirectionHeuristic(param0: android.text.TextDirectionHeuristic): android.text.BidiFormatter.Builder;

                public stereoReset(param0: boolean): android.text.BidiFormatter.Builder;

                public constructor(param0: boolean);

                public build(): android.text.BidiFormatter;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export class BoringLayout extends android.text.Layout implements android.text.TextUtils.EllipsizeCallback {
            public replaceOrMake(param0: string, param1: android.text.TextPaint, param2: number, param3: android.text.Layout.Alignment, param4: number, param5: number, param6: android.text.BoringLayout.Metrics, param7: boolean, param8: android.text.TextUtils.TruncateAt, param9: number): android.text.BoringLayout;

            public getEllipsisStart(param0: number): number;

            public getLineMax(param0: number): number;

            public getEllipsizedWidth(): number;

            public constructor(param0: string, param1: android.text.TextPaint, param2: number, param3: android.text.Layout.Alignment, param4: number, param5: number);

            public draw(param0: android.graphics.Canvas, param1: android.graphics.Path, param2: android.graphics.Paint, param3: number): void;

            public static isBoring(param0: string, param1: android.text.TextPaint): android.text.BoringLayout.Metrics;

            public replaceOrMake(param0: string, param1: android.text.TextPaint, param2: number, param3: android.text.Layout.Alignment, param4: number, param5: number, param6: android.text.BoringLayout.Metrics, param7: boolean): android.text.BoringLayout;

            public getEllipsisCount(param0: number): number;

            public ellipsized(param0: number, param1: number): void;

            public static make(param0: string, param1: android.text.TextPaint, param2: number, param3: android.text.Layout.Alignment, param4: number, param5: number, param6: android.text.BoringLayout.Metrics, param7: boolean, param8: android.text.TextUtils.TruncateAt, param9: number): android.text.BoringLayout;

            public getLineCount(): number;

            public getParagraphDirection(param0: number): number;

            public getTopPadding(): number;

            public static make(param0: string, param1: android.text.TextPaint, param2: number, param3: android.text.Layout.Alignment, param4: number, param5: number, param6: android.text.BoringLayout.Metrics, param7: boolean): android.text.BoringLayout;

            public getLineContainsTab(param0: number): boolean;

            public constructor(param0: string, param1: android.text.TextPaint, param2: number, param3: android.text.Layout.Alignment, param4: number, param5: number, param6: android.text.BoringLayout.Metrics, param7: boolean);

            public getBottomPadding(): number;

            public draw(param0: android.graphics.Canvas): void;

            public getHeight(): number;

            public static isBoring(param0: string, param1: android.text.TextPaint, param2: android.text.BoringLayout.Metrics): android.text.BoringLayout.Metrics;

            public getLineStart(param0: number): number;

            public getLineTop(param0: number): number;

            public getLineDirections(param0: number): android.text.Layout.Directions;

            public getLineDescent(param0: number): number;

            public constructor(param0: string, param1: android.text.TextPaint, param2: number, param3: android.text.Layout.Alignment, param4: number, param5: number, param6: android.text.BoringLayout.Metrics, param7: boolean, param8: android.text.TextUtils.TruncateAt, param9: number);
        }
        export module BoringLayout {
            export class Metrics extends android.graphics.Paint.FontMetricsInt {
                public width: number;

                public toString(): string;

                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export abstract class ClipboardManager extends javalangObject {
            public setText(param0: string): void;

            public hasText(): boolean;

            public getText(): string;

            public constructor();
        }
    }
}

/// <reference path="./android.text.TextPaint.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export class DynamicLayout extends android.text.Layout {
            public getEllipsisStart(param0: number): number;

            public getEllipsizedWidth(): number;

            public constructor(param0: string, param1: string, param2: android.text.TextPaint, param3: number, param4: android.text.Layout.Alignment, param5: number, param6: number, param7: boolean, param8: android.text.TextUtils.TruncateAt, param9: number);
            public constructor(param0: string, param1: android.text.TextPaint, param2: number, param3: android.text.Layout.Alignment, param4: number, param5: number);

            public getEllipsisCount(param0: number): number;

            public getLineStart(param0: number): number;

            public constructor(param0: string, param1: android.text.TextPaint, param2: number, param3: android.text.Layout.Alignment, param4: number, param5: number, param6: boolean);
            public constructor(param0: string, param1: string, param2: android.text.TextPaint, param3: number, param4: android.text.Layout.Alignment, param5: number, param6: number, param7: boolean);

            public getLineCount(): number;

            public getParagraphDirection(param0: number): number;

            public getLineTop(param0: number): number;

            public getLineDirections(param0: number): android.text.Layout.Directions;

            public getTopPadding(): number;

            public getLineContainsTab(param0: number): boolean;

            public getLineDescent(param0: number): number;

            public getBottomPadding(): number;
        }
    }
}

import javalangAppendable = java.lang.Appendable;
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.text.InputFilter.d.ts" />
/// <reference path="./java.lang.Appendable.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module text {
        export class Editable extends javalangObject implements javalangCharSequence, android.text.GetChars, android.text.Spannable, javalangAppendable {
            /**
             * Constructs a new instance of the android.text.Editable interface with the provided implementation.
             */
            public constructor(implementation: {
                replace(param0: number, param1: number, param2: string, param3: number, param4: number): android.text.Editable;
                replace(param0: number, param1: number, param2: string): android.text.Editable;
                insert(param0: number, param1: string, param2: number, param3: number): android.text.Editable;
                insert(param0: number, param1: string): android.text.Editable;
                delete(param0: number, param1: number): android.text.Editable;
                append(param0: string): android.text.Editable;
                append(param0: string, param1: number, param2: number): android.text.Editable;
                append(param0: string): android.text.Editable;
                clear(): void;
                clearSpans(): void;
                setFilters(param0: native.Array<android.text.InputFilter>): void;
                getFilters(): native.Array<android.text.InputFilter>;
                length(): number;
                charAt(param0: number): string;
                subSequence(param0: number, param1: number): string;
                toString(): string;
                getChars(param0: number, param1: number, param2: native.Array<string>, param3: number): void;
                setSpan(param0: javalangObject, param1: number, param2: number, param3: number): void;
                removeSpan(param0: javalangObject): void;
                append(param0: string): javalangAppendable;
                append(param0: string): javalangAppendable;
                append(param0: string, param1: number, param2: number): javalangAppendable;
                length(): number;
                charAt(param0: number): string;
                subSequence(param0: number, param1: number): string;
                toString(): string;
                getSpans(param0: number, param1: number, param2: javalangClass): native.Array<javalangObject>;
                getSpanStart(param0: javalangObject): number;
                getSpanEnd(param0: javalangObject): number;
                getSpanFlags(param0: javalangObject): number;
                nextSpanTransition(param0: number, param1: number, param2: javalangClass): number;
                length(): number;
                charAt(param0: number): string;
                subSequence(param0: number, param1: number): string;
                toString(): string;
            });

            public static SPAN_POINT_MARK: number;
            public static SPAN_USER_SHIFT: number;
            public static SPAN_INCLUSIVE_EXCLUSIVE: number;
            public static SPAN_EXCLUSIVE_EXCLUSIVE: number;
            public static SPAN_PRIORITY_SHIFT: number;
            public static SPAN_INCLUSIVE_INCLUSIVE: number;
            public static SPAN_EXCLUSIVE_INCLUSIVE: number;
            public static SPAN_MARK_POINT: number;
            public static SPAN_PRIORITY: number;
            public static SPAN_INTERMEDIATE: number;
            public static SPAN_USER: number;
            public static SPAN_POINT_MARK_MASK: number;
            public static SPAN_MARK_MARK: number;
            public static SPAN_PARAGRAPH: number;
            public static SPAN_POINT_POINT: number;
            public static SPAN_COMPOSING: number;

            public insert(param0: number, param1: string, param2: number, param3: number): android.text.Editable;

            public setFilters(param0: native.Array<android.text.InputFilter>): void;

            public getSpanFlags(param0: javalangObject): number;

            public delete(param0: number, param1: number): android.text.Editable;

            public append(param0: string): android.text.Editable;

            public setSpan(param0: javalangObject, param1: number, param2: number, param3: number): void;

            public append(param0: string, param1: number, param2: number): javalangAppendable;

            public getFilters(): native.Array<android.text.InputFilter>;

            public getChars(param0: number, param1: number, param2: native.Array<string>, param3: number): void;

            public subSequence(param0: number, param1: number): string;

            public replace(param0: number, param1: number, param2: string): android.text.Editable;

            public append(param0: string, param1: number, param2: number): android.text.Editable;

            public getSpans(param0: number, param1: number, param2: javalangClass): native.Array<javalangObject>;

            public clear(): void;

            public nextSpanTransition(param0: number, param1: number, param2: javalangClass): number;

            public length(): number;

            public clearSpans(): void;

            public insert(param0: number, param1: string): android.text.Editable;

            public getSpanEnd(param0: javalangObject): number;

            public replace(param0: number, param1: number, param2: string, param3: number, param4: number): android.text.Editable;

            public removeSpan(param0: javalangObject): void;

            public charAt(param0: number): string;

            public toString(): string;

            public getSpanStart(param0: javalangObject): number;

            public append(param0: string): javalangAppendable;
        }
        export module Editable {
            export class Factory extends javalangObject {
                public static getInstance(): android.text.Editable.Factory;

                public newEditable(param0: string): android.text.Editable;

                public constructor();
            }
        }
    }
}

declare module android {
    export module text {
        export class GetChars extends javalangObject implements javalangCharSequence {
            /**
             * Constructs a new instance of the android.text.GetChars interface with the provided implementation.
             */
            public constructor(implementation: {
                getChars(param0: number, param1: number, param2: native.Array<string>, param3: number): void;
                length(): number;
                charAt(param0: number): string;
                subSequence(param0: number, param1: number): string;
                toString(): string;
            });

            public getChars(param0: number, param1: number, param2: native.Array<string>, param3: number): void;

            public charAt(param0: number): string;

            public subSequence(param0: number, param1: number): string;

            public toString(): string;

            public length(): number;
        }
    }
}

import orgxmlsaxXMLReader = org.xml.sax.XMLReader;
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.text.Spanned.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.XMLReader.d.ts" />
declare module android {
    export module text {
        export class Html extends javalangObject {
            public static escapeHtml(param0: string): string;

            public static fromHtml(param0: string, param1: android.text.Html.ImageGetter, param2: android.text.Html.TagHandler): android.text.Spanned;
            public static fromHtml(param0: string): android.text.Spanned;

            public static toHtml(param0: android.text.Spanned): string;
        }
        export module Html {
            export class ImageGetter extends javalangObject {
                /**
                 * Constructs a new instance of the android.text.Html$ImageGetter interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getDrawable(param0: string): android.graphics.drawable.Drawable;
                });

                public getDrawable(param0: string): android.graphics.drawable.Drawable;
            }
            export class TagHandler extends javalangObject {
                /**
                 * Constructs a new instance of the android.text.Html$TagHandler interface with the provided implementation.
                 */
                public constructor(implementation: {
                    handleTag(param0: boolean, param1: string, param2: android.text.Editable, param3: orgxmlsaxXMLReader): void;
                });

                public handleTag(param0: boolean, param1: string, param2: android.text.Editable, param3: orgxmlsaxXMLReader): void;
            }
        }
    }
}

/// <reference path="./android.text.Spanned.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export class InputFilter extends javalangObject {
            /**
             * Constructs a new instance of the android.text.InputFilter interface with the provided implementation.
             */
            public constructor(implementation: {
                filter(param0: string, param1: number, param2: number, param3: android.text.Spanned, param4: number, param5: number): string;
            });

            public filter(param0: string, param1: number, param2: number, param3: android.text.Spanned, param4: number, param5: number): string;
        }
        export module InputFilter {
            export class AllCaps extends javalangObject implements android.text.InputFilter {
                public filter(param0: string, param1: number, param2: number, param3: android.text.Spanned, param4: number, param5: number): string;

                public constructor();
            }
            export class LengthFilter extends javalangObject implements android.text.InputFilter {
                public getMax(): number;

                public constructor(param0: number);

                public filter(param0: string, param1: number, param2: number, param3: android.text.Spanned, param4: number, param5: number): string;
            }
        }
    }
}

declare module android {
    export module text {
        export class InputType extends javalangObject {
            /**
             * Constructs a new instance of the android.text.InputType interface with the provided implementation.
             */
            public constructor(implementation: {});

            public static TYPE_TEXT_VARIATION_FILTER: number;
            public static TYPE_TEXT_FLAG_AUTO_COMPLETE: number;
            public static TYPE_NUMBER_VARIATION_NORMAL: number;
            public static TYPE_TEXT_FLAG_CAP_CHARACTERS: number;
            public static TYPE_TEXT_VARIATION_EMAIL_ADDRESS: number;
            public static TYPE_CLASS_DATETIME: number;
            public static TYPE_TEXT_FLAG_CAP_SENTENCES: number;
            public static TYPE_NUMBER_VARIATION_PASSWORD: number;
            public static TYPE_TEXT_VARIATION_POSTAL_ADDRESS: number;
            public static TYPE_NUMBER_FLAG_DECIMAL: number;
            public static TYPE_TEXT_FLAG_MULTI_LINE: number;
            public static TYPE_MASK_CLASS: number;
            public static TYPE_DATETIME_VARIATION_NORMAL: number;
            public static TYPE_TEXT_FLAG_NO_SUGGESTIONS: number;
            public static TYPE_TEXT_VARIATION_PASSWORD: number;
            public static TYPE_TEXT_VARIATION_WEB_PASSWORD: number;
            public static TYPE_TEXT_VARIATION_SHORT_MESSAGE: number;
            public static TYPE_TEXT_VARIATION_VISIBLE_PASSWORD: number;
            public static TYPE_TEXT_VARIATION_URI: number;
            public static TYPE_DATETIME_VARIATION_TIME: number;
            public static TYPE_TEXT_VARIATION_LONG_MESSAGE: number;
            public static TYPE_TEXT_FLAG_CAP_WORDS: number;
            public static TYPE_TEXT_VARIATION_NORMAL: number;
            public static TYPE_MASK_FLAGS: number;
            public static TYPE_TEXT_VARIATION_WEB_EDIT_TEXT: number;
            public static TYPE_NULL: number;
            public static TYPE_TEXT_VARIATION_PHONETIC: number;
            public static TYPE_CLASS_PHONE: number;
            public static TYPE_MASK_VARIATION: number;
            public static TYPE_TEXT_VARIATION_EMAIL_SUBJECT: number;
            public static TYPE_TEXT_VARIATION_WEB_EMAIL_ADDRESS: number;
            public static TYPE_TEXT_FLAG_IME_MULTI_LINE: number;
            public static TYPE_TEXT_VARIATION_PERSON_NAME: number;
            public static TYPE_DATETIME_VARIATION_DATE: number;
            public static TYPE_NUMBER_FLAG_SIGNED: number;
            public static TYPE_TEXT_FLAG_AUTO_CORRECT: number;
            public static TYPE_CLASS_TEXT: number;
            public static TYPE_CLASS_NUMBER: number;
        }
    }
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module text {
        export abstract class Layout extends javalangObject {
            public static BREAK_STRATEGY_BALANCED: number;
            public static BREAK_STRATEGY_HIGH_QUALITY: number;
            public static BREAK_STRATEGY_SIMPLE: number;
            public static DIR_LEFT_TO_RIGHT: number;
            public static DIR_RIGHT_TO_LEFT: number;
            public static HYPHENATION_FREQUENCY_FULL: number;
            public static HYPHENATION_FREQUENCY_NONE: number;
            public static HYPHENATION_FREQUENCY_NORMAL: number;

            public getEllipsisStart(param0: number): number;

            public getEllipsizedWidth(): number;

            public getLineMax(param0: number): number;

            public getOffsetToLeftOf(param0: number): number;

            public getParagraphLeft(param0: number): number;

            public draw(param0: android.graphics.Canvas, param1: android.graphics.Path, param2: android.graphics.Paint, param3: number): void;

            public getLineRight(param0: number): number;

            public getWidth(): number;

            public getLineWidth(param0: number): number;

            public getLineBottom(param0: number): number;

            public getLineCount(): number;

            public getCursorPath(param0: number, param1: android.graphics.Path, param2: string): void;

            public getSpacingAdd(): number;

            public getLineContainsTab(param0: number): boolean;

            public draw(param0: android.graphics.Canvas): void;

            public getSecondaryHorizontal(param0: number): number;

            public getLineBaseline(param0: number): number;

            public getHeight(): number;

            public isRtlCharAt(param0: number): boolean;

            public getText(): string;

            public static getDesiredWidth(param0: string, param1: number, param2: number, param3: android.text.TextPaint): number;

            public increaseWidthTo(param0: number): void;

            public getPrimaryHorizontal(param0: number): number;

            public getOffsetToRightOf(param0: number): number;

            public getAlignment(): android.text.Layout.Alignment;

            public getSpacingMultiplier(): number;

            public getLineTop(param0: number): number;

            public getLineLeft(param0: number): number;

            public isSpanned(): boolean;

            public getLineVisibleEnd(param0: number): number;

            public constructor(param0: string, param1: android.text.TextPaint, param2: number, param3: android.text.Layout.Alignment, param4: number, param5: number);

            public getEllipsisCount(param0: number): number;

            public getLineEnd(param0: number): number;

            public getOffsetForHorizontal(param0: number, param1: number): number;

            public getParagraphDirection(param0: number): number;

            public getTopPadding(): number;

            public getBottomPadding(): number;

            public getLineAscent(param0: number): number;

            public static getDesiredWidth(param0: string, param1: android.text.TextPaint): number;

            public getLineBounds(param0: number, param1: android.graphics.Rect): number;

            public getLineStart(param0: number): number;

            public getSelectionPath(param0: number, param1: number, param2: android.graphics.Path): void;

            public getPaint(): android.text.TextPaint;

            public getParagraphAlignment(param0: number): android.text.Layout.Alignment;

            public getLineForVertical(param0: number): number;

            public getLineForOffset(param0: number): number;

            public getLineDirections(param0: number): android.text.Layout.Directions;

            public getLineDescent(param0: number): number;

            public getParagraphRight(param0: number): number;
        }
        export module Layout {
            export class Alignment extends javalangEnum {
                public static ALIGN_CENTER: android.text.Layout.Alignment;
                public static ALIGN_NORMAL: android.text.Layout.Alignment;
                public static ALIGN_OPPOSITE: android.text.Layout.Alignment;

                public static values(): native.Array<android.text.Layout.Alignment>;

                public static valueOf(param0: string): android.text.Layout.Alignment;
                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
            export class Directions extends javalangObject {
            }
        }
    }
}

/// <reference path="./android.text.Spanned.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export abstract class LoginFilter extends javalangObject implements android.text.InputFilter {
            public isAllowed(param0: string): boolean;

            public onInvalidCharacter(param0: string): void;

            public onStart(): void;

            public filter(param0: string, param1: number, param2: number, param3: android.text.Spanned, param4: number, param5: number): string;

            public onStop(): void;
        }
        export module LoginFilter {
            export class PasswordFilterGMail extends android.text.LoginFilter {
                public isAllowed(param0: string): boolean;

                public constructor(param0: boolean);

                public filter(param0: string, param1: number, param2: number, param3: android.text.Spanned, param4: number, param5: number): string;

                public constructor();
            }
            export class UsernameFilterGMail extends android.text.LoginFilter {
                public isAllowed(param0: string): boolean;

                public constructor(param0: boolean);

                public filter(param0: string, param1: number, param2: number, param3: android.text.Spanned, param4: number, param5: number): string;

                public constructor();
            }
            export class UsernameFilterGeneric extends android.text.LoginFilter {
                public isAllowed(param0: string): boolean;

                public constructor(param0: boolean);

                public filter(param0: string, param1: number, param2: number, param3: android.text.Spanned, param4: number, param5: number): string;

                public constructor();
            }
        }
    }
}

declare module android {
    export module text {
        export class NoCopySpan extends javalangObject {
            /**
             * Constructs a new instance of the android.text.NoCopySpan interface with the provided implementation.
             */
            public constructor(implementation: {});
        }
        export module NoCopySpan {
            export class Concrete extends javalangObject implements android.text.NoCopySpan {
                public constructor();
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module text {
        export class ParcelableSpan extends javalangObject implements android.os.Parcelable {
            /**
             * Constructs a new instance of the android.text.ParcelableSpan interface with the provided implementation.
             */
            public constructor(implementation: {
                getSpanTypeId(): number;
                describeContents(): number;
                writeToParcel(param0: android.os.Parcel, param1: number): void;
            });

            public static PARCELABLE_WRITE_RETURN_VALUE: number;
            public static CONTENTS_FILE_DESCRIPTOR: number;

            public getSpanTypeId(): number;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;
        }
    }
}

/// <reference path="./android.text.Layout.d.ts" />
/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module text {
        export class Selection extends javalangObject {
            public static SELECTION_END: javalangObject;
            public static SELECTION_START: javalangObject;

            public static moveDown(param0: android.text.Spannable, param1: android.text.Layout): boolean;

            public static moveUp(param0: android.text.Spannable, param1: android.text.Layout): boolean;

            public static extendUp(param0: android.text.Spannable, param1: android.text.Layout): boolean;

            public static extendSelection(param0: android.text.Spannable, param1: number): void;

            public static selectAll(param0: android.text.Spannable): void;

            public static extendLeft(param0: android.text.Spannable, param1: android.text.Layout): boolean;

            public static setSelection(param0: android.text.Spannable, param1: number): void;

            public static moveToLeftEdge(param0: android.text.Spannable, param1: android.text.Layout): boolean;

            public static moveLeft(param0: android.text.Spannable, param1: android.text.Layout): boolean;

            public static moveToRightEdge(param0: android.text.Spannable, param1: android.text.Layout): boolean;

            public static extendToLeftEdge(param0: android.text.Spannable, param1: android.text.Layout): boolean;

            public static moveRight(param0: android.text.Spannable, param1: android.text.Layout): boolean;

            public static setSelection(param0: android.text.Spannable, param1: number, param2: number): void;

            public static removeSelection(param0: android.text.Spannable): void;

            public static getSelectionEnd(param0: string): number;

            public static extendDown(param0: android.text.Spannable, param1: android.text.Layout): boolean;

            public static getSelectionStart(param0: string): number;

            public static extendRight(param0: android.text.Spannable, param1: android.text.Layout): boolean;

            public static extendToRightEdge(param0: android.text.Spannable, param1: android.text.Layout): boolean;
        }
    }
}

/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module text {
        export class SpanWatcher extends javalangObject implements android.text.NoCopySpan {
            /**
             * Constructs a new instance of the android.text.SpanWatcher interface with the provided implementation.
             */
            public constructor(implementation: {
                onSpanAdded(param0: android.text.Spannable, param1: javalangObject, param2: number, param3: number): void;
                onSpanRemoved(param0: android.text.Spannable, param1: javalangObject, param2: number, param3: number): void;
                onSpanChanged(param0: android.text.Spannable, param1: javalangObject, param2: number, param3: number, param4: number, param5: number): void;
            });

            public onSpanChanged(param0: android.text.Spannable, param1: javalangObject, param2: number, param3: number, param4: number, param5: number): void;

            public onSpanRemoved(param0: android.text.Spannable, param1: javalangObject, param2: number, param3: number): void;

            public onSpanAdded(param0: android.text.Spannable, param1: javalangObject, param2: number, param3: number): void;
        }
    }
}

/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module text {
        export class Spannable extends javalangObject implements android.text.Spanned {
            /**
             * Constructs a new instance of the android.text.Spannable interface with the provided implementation.
             */
            public constructor(implementation: {
                setSpan(param0: javalangObject, param1: number, param2: number, param3: number): void;
                removeSpan(param0: javalangObject): void;
                getSpans(param0: number, param1: number, param2: javalangClass): native.Array<javalangObject>;
                getSpanStart(param0: javalangObject): number;
                getSpanEnd(param0: javalangObject): number;
                getSpanFlags(param0: javalangObject): number;
                nextSpanTransition(param0: number, param1: number, param2: javalangClass): number;
                length(): number;
                charAt(param0: number): string;
                subSequence(param0: number, param1: number): string;
                toString(): string;
            });

            public static SPAN_POINT_MARK: number;
            public static SPAN_USER_SHIFT: number;
            public static SPAN_INCLUSIVE_EXCLUSIVE: number;
            public static SPAN_EXCLUSIVE_EXCLUSIVE: number;
            public static SPAN_PRIORITY_SHIFT: number;
            public static SPAN_INCLUSIVE_INCLUSIVE: number;
            public static SPAN_EXCLUSIVE_INCLUSIVE: number;
            public static SPAN_MARK_POINT: number;
            public static SPAN_PRIORITY: number;
            public static SPAN_INTERMEDIATE: number;
            public static SPAN_USER: number;
            public static SPAN_POINT_MARK_MASK: number;
            public static SPAN_MARK_MARK: number;
            public static SPAN_PARAGRAPH: number;
            public static SPAN_POINT_POINT: number;
            public static SPAN_COMPOSING: number;

            public removeSpan(param0: javalangObject): void;

            public charAt(param0: number): string;

            public subSequence(param0: number, param1: number): string;

            public toString(): string;

            public getSpanFlags(param0: javalangObject): number;

            public nextSpanTransition(param0: number, param1: number, param2: javalangClass): number;

            public setSpan(param0: javalangObject, param1: number, param2: number, param3: number): void;

            public length(): number;

            public getSpanStart(param0: javalangObject): number;

            public getSpans(param0: number, param1: number, param2: javalangClass): native.Array<javalangObject>;

            public getSpanEnd(param0: javalangObject): number;
        }
        export module Spannable {
            export class Factory extends javalangObject {
                public static getInstance(): android.text.Spannable.Factory;

                public newSpannable(param0: string): android.text.Spannable;

                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module text {
        export class SpannableString extends android.text.SpannableStringInternal implements javalangCharSequence, android.text.GetChars, android.text.Spannable {
            public getSpanFlags(param0: javalangObject): number;

            public nextSpanTransition(param0: number, param1: number, param2: javalangClass): number;

            public setSpan(param0: javalangObject, param1: number, param2: number, param3: number): void;

            public length(): number;

            public static valueOf(param0: string): android.text.SpannableString;

            public getSpanEnd(param0: javalangObject): number;

            public removeSpan(param0: javalangObject): void;

            public charAt(param0: number): string;

            public getChars(param0: number, param1: number, param2: native.Array<string>, param3: number): void;

            public subSequence(param0: number, param1: number): string;

            public toString(): string;

            public getSpanStart(param0: javalangObject): number;

            public getSpans(param0: number, param1: number, param2: javalangClass): native.Array<javalangObject>;

            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.text.InputFilter.d.ts" />
/// <reference path="./java.lang.Appendable.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module text {
        export class SpannableStringBuilder extends javalangObject implements javalangCharSequence, android.text.GetChars, android.text.Spannable, android.text.Editable, javalangAppendable {
            public setFilters(param0: native.Array<android.text.InputFilter>): void;

            public insert(param0: number, param1: string, param2: number, param3: number): android.text.Editable;

            public replace(param0: number, param1: number, param2: string): android.text.SpannableStringBuilder;

            public getSpanFlags(param0: javalangObject): number;

            public equals(param0: javalangObject): boolean;

            public delete(param0: number, param1: number): android.text.Editable;

            public append(param0: string): android.text.Editable;

            public setSpan(param0: javalangObject, param1: number, param2: number, param3: number): void;

            public append(param0: string, param1: number, param2: number): javalangAppendable;

            public insert(param0: number, param1: string, param2: number, param3: number): android.text.SpannableStringBuilder;

            public append(param0: string, param1: number, param2: number): android.text.SpannableStringBuilder;

            public getFilters(): native.Array<android.text.InputFilter>;

            public getChars(param0: number, param1: number, param2: native.Array<string>, param3: number): void;

            public delete(param0: number, param1: number): android.text.SpannableStringBuilder;

            public subSequence(param0: number, param1: number): string;

            public replace(param0: number, param1: number, param2: string): android.text.Editable;

            public constructor(param0: string, param1: number, param2: number);

            public getTextRunCursor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Paint): number;

            public append(param0: string, param1: number, param2: number): android.text.Editable;

            public getSpans(param0: number, param1: number, param2: javalangClass): native.Array<javalangObject>;

            public insert(param0: number, param1: string): android.text.SpannableStringBuilder;

            public getTextWatcherDepth(): number;

            public constructor(param0: string);

            public clear(): void;

            public nextSpanTransition(param0: number, param1: number, param2: javalangClass): number;

            public length(): number;

            public clearSpans(): void;

            public static valueOf(param0: string): android.text.SpannableStringBuilder;

            public insert(param0: number, param1: string): android.text.Editable;

            public replace(param0: number, param1: number, param2: string, param3: number, param4: number): android.text.SpannableStringBuilder;

            public constructor();

            public getSpanEnd(param0: javalangObject): number;

            public append(param0: string, param1: javalangObject, param2: number): android.text.SpannableStringBuilder;

            public removeSpan(param0: javalangObject): void;

            public replace(param0: number, param1: number, param2: string, param3: number, param4: number): android.text.Editable;

            public append(param0: string): android.text.SpannableStringBuilder;

            public charAt(param0: number): string;

            public toString(): string;

            public getSpanStart(param0: javalangObject): number;

            public append(param0: string): javalangAppendable;

            public hashCode(): number;
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module text {
        export abstract class SpannableStringInternal extends javalangObject {
            public charAt(param0: number): string;

            public getChars(param0: number, param1: number, param2: native.Array<string>, param3: number): void;

            public toString(): string;

            public getSpanFlags(param0: javalangObject): number;

            public nextSpanTransition(param0: number, param1: number, param2: javalangClass): number;

            public equals(param0: javalangObject): boolean;

            public length(): number;

            public getSpanStart(param0: javalangObject): number;

            public getSpans(param0: number, param1: number, param2: javalangClass): native.Array<javalangObject>;

            public getSpanEnd(param0: javalangObject): number;

            public hashCode(): number;
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module text {
        export class Spanned extends javalangObject implements javalangCharSequence {
            /**
             * Constructs a new instance of the android.text.Spanned interface with the provided implementation.
             */
            public constructor(implementation: {
                getSpans(param0: number, param1: number, param2: javalangClass): native.Array<javalangObject>;
                getSpanStart(param0: javalangObject): number;
                getSpanEnd(param0: javalangObject): number;
                getSpanFlags(param0: javalangObject): number;
                nextSpanTransition(param0: number, param1: number, param2: javalangClass): number;
                length(): number;
                charAt(param0: number): string;
                subSequence(param0: number, param1: number): string;
                toString(): string;
            });

            public static SPAN_POINT_MARK: number;
            public static SPAN_USER_SHIFT: number;
            public static SPAN_INCLUSIVE_EXCLUSIVE: number;
            public static SPAN_EXCLUSIVE_EXCLUSIVE: number;
            public static SPAN_PRIORITY_SHIFT: number;
            public static SPAN_INCLUSIVE_INCLUSIVE: number;
            public static SPAN_EXCLUSIVE_INCLUSIVE: number;
            public static SPAN_MARK_POINT: number;
            public static SPAN_PRIORITY: number;
            public static SPAN_INTERMEDIATE: number;
            public static SPAN_USER: number;
            public static SPAN_POINT_MARK_MASK: number;
            public static SPAN_MARK_MARK: number;
            public static SPAN_PARAGRAPH: number;
            public static SPAN_POINT_POINT: number;
            public static SPAN_COMPOSING: number;

            public charAt(param0: number): string;

            public subSequence(param0: number, param1: number): string;

            public toString(): string;

            public getSpanFlags(param0: javalangObject): number;

            public nextSpanTransition(param0: number, param1: number, param2: javalangClass): number;

            public length(): number;

            public getSpanStart(param0: javalangObject): number;

            public getSpans(param0: number, param1: number, param2: javalangClass): native.Array<javalangObject>;

            public getSpanEnd(param0: javalangObject): number;
        }
    }
}

/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module text {
        export class SpannedString extends android.text.SpannableStringInternal implements javalangCharSequence, android.text.GetChars, android.text.Spanned {
            public charAt(param0: number): string;

            public getChars(param0: number, param1: number, param2: native.Array<string>, param3: number): void;

            public subSequence(param0: number, param1: number): string;

            public toString(): string;

            public getSpanFlags(param0: javalangObject): number;

            public nextSpanTransition(param0: number, param1: number, param2: javalangClass): number;

            public length(): number;

            public static valueOf(param0: string): android.text.SpannedString;

            public getSpanStart(param0: javalangObject): number;

            public getSpans(param0: number, param1: number, param2: javalangClass): native.Array<javalangObject>;

            public getSpanEnd(param0: javalangObject): number;

            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.text.StaticLayout.d.ts" />
/// <reference path="./android.text.TextDirectionHeuristic.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export class StaticLayout extends android.text.Layout {
            public getEllipsisStart(param0: number): number;

            public getEllipsizedWidth(): number;

            public constructor(param0: string, param1: android.text.TextPaint, param2: number, param3: android.text.Layout.Alignment, param4: number, param5: number);
            public constructor(param0: string, param1: number, param2: number, param3: android.text.TextPaint, param4: number, param5: android.text.Layout.Alignment, param6: number, param7: number, param8: boolean, param9: android.text.TextUtils.TruncateAt, param10: number);

            public getEllipsisCount(param0: number): number;

            public getLineStart(param0: number): number;

            public constructor(param0: string, param1: android.text.TextPaint, param2: number, param3: android.text.Layout.Alignment, param4: number, param5: number, param6: boolean);

            public getLineCount(): number;

            public getParagraphDirection(param0: number): number;

            public getLineTop(param0: number): number;

            public getLineForVertical(param0: number): number;

            public getLineDirections(param0: number): android.text.Layout.Directions;

            public getTopPadding(): number;

            public getLineContainsTab(param0: number): boolean;

            public getLineDescent(param0: number): number;

            public constructor(param0: string, param1: number, param2: number, param3: android.text.TextPaint, param4: number, param5: android.text.Layout.Alignment, param6: number, param7: number, param8: boolean);

            public getBottomPadding(): number;
        }
        export module StaticLayout {
            export class Builder extends javalangObject {
                public setAlignment(param0: android.text.Layout.Alignment): android.text.StaticLayout.Builder;

                public setMaxLines(param0: number): android.text.StaticLayout.Builder;

                public finalize(): void;

                public setText(param0: string): android.text.StaticLayout.Builder;

                public build(): android.text.StaticLayout;

                public setHyphenationFrequency(param0: number): android.text.StaticLayout.Builder;

                public static obtain(param0: string, param1: number, param2: number, param3: android.text.TextPaint, param4: number): android.text.StaticLayout.Builder;

                public setTextDirection(param0: android.text.TextDirectionHeuristic): android.text.StaticLayout.Builder;

                public setBreakStrategy(param0: number): android.text.StaticLayout.Builder;

                public setIncludePad(param0: boolean): android.text.StaticLayout.Builder;

                public setEllipsizedWidth(param0: number): android.text.StaticLayout.Builder;

                public setEllipsize(param0: android.text.TextUtils.TruncateAt): android.text.StaticLayout.Builder;

                public setIndents(param0: native.Array<number>, param1: native.Array<number>): android.text.StaticLayout.Builder;

                public setLineSpacing(param0: number, param1: number): android.text.StaticLayout.Builder;
            }
        }
    }
}

/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export class TextDirectionHeuristic extends javalangObject {
            /**
             * Constructs a new instance of the android.text.TextDirectionHeuristic interface with the provided implementation.
             */
            public constructor(implementation: {
                isRtl(param0: native.Array<string>, param1: number, param2: number): boolean;
                isRtl(param0: string, param1: number, param2: number): boolean;
            });

            public isRtl(param0: string, param1: number, param2: number): boolean;
            public isRtl(param0: native.Array<string>, param1: number, param2: number): boolean;
        }
    }
}

/// <reference path="./android.text.TextDirectionHeuristic.d.ts" />
declare module android {
    export module text {
        export class TextDirectionHeuristics extends javalangObject {
            public static ANYRTL_LTR: android.text.TextDirectionHeuristic;
            public static FIRSTSTRONG_LTR: android.text.TextDirectionHeuristic;
            public static FIRSTSTRONG_RTL: android.text.TextDirectionHeuristic;
            public static LOCALE: android.text.TextDirectionHeuristic;
            public static LTR: android.text.TextDirectionHeuristic;
            public static RTL: android.text.TextDirectionHeuristic;

            public constructor();
        }
    }
}

/// <reference path="./android.graphics.Paint.d.ts" />
declare module android {
    export module text {
        export class TextPaint extends android.graphics.Paint {
            public baselineShift: number;
            public bgColor: number;
            public density: number;
            public drawableState: native.Array<number>;
            public linkColor: number;

            public set(param0: android.graphics.Paint): void;

            public constructor(param0: number);

            public set(param0: android.text.TextPaint): void;

            public constructor();
            public constructor(param0: android.graphics.Paint);
        }
    }
}

import javautilregexPattern = java.util.regex.Pattern;
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.text.Spanned.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.regex.Pattern.d.ts" />
declare module android {
    export module text {
        export class TextUtils extends javalangObject {
            public static CAP_MODE_CHARACTERS: number;
            public static CAP_MODE_SENTENCES: number;
            public static CAP_MODE_WORDS: number;
            public static CHAR_SEQUENCE_CREATOR: android.os.Parcelable.Creator;

            public static expandTemplate(param0: string, param1: native.Array<javalangCharSequence>): string;

            public static join(param0: string, param1: native.Array<javalangObject>): string;

            public static lastIndexOf(param0: string, param1: string, param2: number, param3: number): number;

            public static getChars(param0: string, param1: number, param2: number, param3: native.Array<string>, param4: number): void;

            public static getOffsetBefore(param0: string, param1: number): number;

            public static getTrimmedLength(param0: string): number;

            public equals(param0: javalangObject): boolean;

            public static split(param0: string, param1: javautilregexPattern): native.Array<string>;

            public static getReverse(param0: string, param1: number, param2: number): string;

            public static htmlEncode(param0: string): string;

            public static regionMatches(param0: string, param1: number, param2: string, param3: number, param4: number): boolean;

            public static indexOf(param0: string, param1: string, param2: number, param3: number): number;

            public static dumpSpans(param0: string, param1: android.util.Printer, param2: string): void;

            public static getLayoutDirectionFromLocale(param0: javautilLocale): number;

            public static indexOf(param0: string, param1: string, param2: number): number;

            public static substring(param0: string, param1: number, param2: number): string;

            public static ellipsize(param0: string, param1: android.text.TextPaint, param2: number, param3: android.text.TextUtils.TruncateAt): string;

            public static commaEllipsize(param0: string, param1: android.text.TextPaint, param2: number, param3: string, param4: string): string;

            public static join(param0: string, param1: javalangIterable): string;

            public static stringOrSpannedString(param0: string): string;

            public static isDigitsOnly(param0: string): boolean;

            public static getOffsetAfter(param0: string, param1: number): number;

            public static concat(param0: native.Array<javalangCharSequence>): string;

            public static writeToParcel(param0: string, param1: android.os.Parcel, param2: number): void;

            public static lastIndexOf(param0: string, param1: string): number;

            public static equals(param0: string, param1: string): boolean;

            public static replace(param0: string, param1: native.Array<string>, param2: native.Array<javalangCharSequence>): string;

            public static isGraphic(param0: string): boolean;

            public static ellipsize(param0: string, param1: android.text.TextPaint, param2: number, param3: android.text.TextUtils.TruncateAt, param4: boolean, param5: android.text.TextUtils.EllipsizeCallback): string;

            public static lastIndexOf(param0: string, param1: string, param2: number): number;

            public static split(param0: string, param1: string): native.Array<string>;

            public static indexOf(param0: string, param1: string): number;

            public static copySpansFrom(param0: android.text.Spanned, param1: number, param2: number, param3: javalangClass, param4: android.text.Spannable, param5: number): void;

            public static isEmpty(param0: string): boolean;

            public static getCapsMode(param0: string, param1: number, param2: number): number;
        }
        export module TextUtils {
            export class EllipsizeCallback extends javalangObject {
                /**
                 * Constructs a new instance of the android.text.TextUtils$EllipsizeCallback interface with the provided implementation.
                 */
                public constructor(implementation: {
                    ellipsized(param0: number, param1: number): void;
                });

                public ellipsized(param0: number, param1: number): void;
            }
            export class SimpleStringSplitter extends javalangObject implements android.text.TextUtils.StringSplitter {
                public iterator(): javautilIterator;

                public remove(): void;

                public setString(param0: string): void;

                public hasNext(): boolean;

                public next(): string;

                public constructor(param0: string);
            }
            export class StringSplitter extends javalangObject implements javalangIterable {
                /**
                 * Constructs a new instance of the android.text.TextUtils$StringSplitter interface with the provided implementation.
                 */
                public constructor(implementation: {
                    setString(param0: string): void;
                    iterator(): javautilIterator;
                });

                public iterator(): javautilIterator;

                public setString(param0: string): void;
            }
            export class TruncateAt extends javalangEnum {
                public static END: android.text.TextUtils.TruncateAt;
                public static MARQUEE: android.text.TextUtils.TruncateAt;
                public static MIDDLE: android.text.TextUtils.TruncateAt;
                public static START: android.text.TextUtils.TruncateAt;

                public static valueOf(param0: string): android.text.TextUtils.TruncateAt;

                public static values(): native.Array<android.text.TextUtils.TruncateAt>;

                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
        }
    }
}

/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export class TextWatcher extends javalangObject implements android.text.NoCopySpan {
            /**
             * Constructs a new instance of the android.text.TextWatcher interface with the provided implementation.
             */
            public constructor(implementation: {
                beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
                onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
                afterTextChanged(param0: android.text.Editable): void;
            });

            public afterTextChanged(param0: android.text.Editable): void;

            public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;

            public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
        }
    }
}

import javatextDateFormat = java.text.DateFormat;
import javautilCalendar = java.util.Calendar;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.text.DateFormat.d.ts" />
/// <reference path="./java.util.Calendar.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module android {
    export module text {
        export module format {
            export class DateFormat extends javalangObject {
                public static getTimeFormat(param0: android.content.Context): javatextDateFormat;

                public static format(param0: string, param1: javautilCalendar): string;

                public static is24HourFormat(param0: android.content.Context): boolean;

                public static getLongDateFormat(param0: android.content.Context): javatextDateFormat;

                public static getBestDateTimePattern(param0: javautilLocale, param1: string): string;

                public static format(param0: string, param1: javautilDate): string;

                public static getDateFormat(param0: android.content.Context): javatextDateFormat;

                public static getMediumDateFormat(param0: android.content.Context): javatextDateFormat;

                public static format(param0: string, param1: number): string;

                public constructor();

                public static getDateFormatOrder(param0: android.content.Context): native.Array<string>;
            }
        }
    }
}

import javautilFormatter = java.util.Formatter;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuilder.d.ts" />
/// <reference path="./java.util.Formatter.d.ts" />
declare module android {
    export module text {
        export module format {
            export class DateUtils extends javalangObject {
                public static ABBREV_MONTH_FORMAT: string;
                public static ABBREV_WEEKDAY_FORMAT: string;
                public static DAY_IN_MILLIS: number;
                public static FORMAT_12HOUR: number;
                public static FORMAT_24HOUR: number;
                public static FORMAT_ABBREV_ALL: number;
                public static FORMAT_ABBREV_MONTH: number;
                public static FORMAT_ABBREV_RELATIVE: number;
                public static FORMAT_ABBREV_TIME: number;
                public static FORMAT_ABBREV_WEEKDAY: number;
                public static FORMAT_CAP_AMPM: number;
                public static FORMAT_CAP_MIDNIGHT: number;
                public static FORMAT_CAP_NOON: number;
                public static FORMAT_CAP_NOON_MIDNIGHT: number;
                public static FORMAT_NO_MIDNIGHT: number;
                public static FORMAT_NO_MONTH_DAY: number;
                public static FORMAT_NO_NOON: number;
                public static FORMAT_NO_NOON_MIDNIGHT: number;
                public static FORMAT_NO_YEAR: number;
                public static FORMAT_NUMERIC_DATE: number;
                public static FORMAT_SHOW_DATE: number;
                public static FORMAT_SHOW_TIME: number;
                public static FORMAT_SHOW_WEEKDAY: number;
                public static FORMAT_SHOW_YEAR: number;
                public static FORMAT_UTC: number;
                public static HOUR_IN_MILLIS: number;
                public static HOUR_MINUTE_24: string;
                public static LENGTH_LONG: number;
                public static LENGTH_MEDIUM: number;
                public static LENGTH_SHORT: number;
                public static LENGTH_SHORTER: number;
                public static LENGTH_SHORTEST: number;
                public static MINUTE_IN_MILLIS: number;
                public static MONTH_DAY_FORMAT: string;
                public static MONTH_FORMAT: string;
                public static NUMERIC_MONTH_FORMAT: string;
                public static SECOND_IN_MILLIS: number;
                public static WEEKDAY_FORMAT: string;
                public static WEEK_IN_MILLIS: number;
                public static YEAR_FORMAT: string;
                public static YEAR_FORMAT_TWO_DIGITS: string;
                public static YEAR_IN_MILLIS: number;
                public static sameMonthTable: native.Array<number>;
                public static sameYearTable: native.Array<number>;

                public static formatSameDayTime(param0: number, param1: number, param2: number, param3: number): string;

                public static getRelativeTimeSpanString(param0: number, param1: number, param2: number): string;

                public static formatDateRange(param0: android.content.Context, param1: javautilFormatter, param2: number, param3: number, param4: number, param5: string): javautilFormatter;

                public static getRelativeTimeSpanString(param0: number, param1: number, param2: number, param3: number): string;
                public static getRelativeTimeSpanString(param0: number): string;

                public static formatElapsedTime(param0: number): string;

                public static isToday(param0: number): boolean;

                public static formatDateRange(param0: android.content.Context, param1: number, param2: number, param3: number): string;

                public static formatElapsedTime(param0: javalangStringBuilder, param1: number): string;

                public static formatDateTime(param0: android.content.Context, param1: number, param2: number): string;

                public constructor();

                public static getRelativeTimeSpanString(param0: android.content.Context, param1: number, param2: boolean): string;

                public static getMonthString(param0: number, param1: number): string;

                public static getRelativeDateTimeString(param0: android.content.Context, param1: number, param2: number, param3: number, param4: number): string;

                public static getAMPMString(param0: number): string;

                public static formatDateRange(param0: android.content.Context, param1: javautilFormatter, param2: number, param3: number, param4: number): javautilFormatter;

                public static getRelativeTimeSpanString(param0: android.content.Context, param1: number): string;

                public static getDayOfWeekString(param0: number, param1: number): string;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
declare module android {
    export module text {
        export module format {
            export class Formatter extends javalangObject {
                public static formatFileSize(param0: android.content.Context, param1: number): string;

                public static formatShortFileSize(param0: android.content.Context, param1: number): string;

                public static formatIpAddress(param0: number): string;

                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module text {
        export module format {
            export class Time extends javalangObject {
                public static EPOCH_JULIAN_DAY: number;
                public static FRIDAY: number;
                public static HOUR: number;
                public static MINUTE: number;
                public static MONDAY: number;
                public static MONDAY_BEFORE_JULIAN_EPOCH: number;
                public static MONTH: number;
                public static MONTH_DAY: number;
                public static SATURDAY: number;
                public static SECOND: number;
                public static SUNDAY: number;
                public static THURSDAY: number;
                public static TIMEZONE_UTC: string;
                public static TUESDAY: number;
                public static WEDNESDAY: number;
                public static WEEK_DAY: number;
                public static WEEK_NUM: number;
                public static YEAR: number;
                public static YEAR_DAY: number;
                public allDay: boolean;
                public gmtoff: number;
                public hour: number;
                public isDst: number;
                public minute: number;
                public month: number;
                public monthDay: number;
                public second: number;
                public timezone: string;
                public weekDay: number;
                public year: number;
                public yearDay: number;

                public before(param0: android.text.format.Time): boolean;

                public parse(param0: string): boolean;

                public set(param0: number): void;
                public set(param0: android.text.format.Time): void;

                public getWeekNumber(): number;

                public static getCurrentTimezone(): string;

                public switchTimezone(param0: string): void;

                public constructor(param0: string);
                public constructor();

                public setToNow(): void;

                public static getJulianDay(param0: number, param1: number): number;

                public setJulianDay(param0: number): number;

                public static getJulianMondayFromWeeksSinceEpoch(param0: number): number;

                public after(param0: android.text.format.Time): boolean;

                public format2445(): string;

                public static isEpoch(param0: android.text.format.Time): boolean;

                public format3339(param0: boolean): string;

                public static compare(param0: android.text.format.Time, param1: android.text.format.Time): number;

                public toMillis(param0: boolean): number;

                public normalize(param0: boolean): number;

                public toString(): string;

                public set(param0: number, param1: number, param2: number): void;

                public constructor(param0: android.text.format.Time);

                public clear(param0: string): void;

                public parse3339(param0: string): boolean;

                public format(param0: string): string;

                public static getWeeksSinceEpochFromJulianDay(param0: number, param1: number): number;

                public getActualMaximum(param0: number): number;

                public set(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
            }
        }
    }
}

/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.text.method.MovementMethod.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
declare module android {
    export module text {
        export module method {
            export class ArrowKeyMovementMethod extends android.text.method.BaseMovementMethod implements android.text.method.MovementMethod {
                public lineStart(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public up(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public down(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public handleMovementKey(param0: android.widget.TextView, param1: android.text.Spannable, param2: number, param3: number, param4: android.view.KeyEvent): boolean;

                public initialize(param0: android.widget.TextView, param1: android.text.Spannable): void;

                public home(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public static getInstance(): android.text.method.MovementMethod;

                public onGenericMotionEvent(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.MotionEvent): boolean;

                public bottom(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public onTrackballEvent(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.MotionEvent): boolean;

                public onKeyDown(param0: android.widget.TextView, param1: android.text.Spannable, param2: number, param3: android.view.KeyEvent): boolean;

                public onKeyUp(param0: android.widget.TextView, param1: android.text.Spannable, param2: number, param3: android.view.KeyEvent): boolean;

                public canSelectArbitrarily(): boolean;

                public end(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public onTakeFocus(param0: android.widget.TextView, param1: android.text.Spannable, param2: number): void;

                public left(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public right(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public lineEnd(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public onKeyOther(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.KeyEvent): boolean;

                public constructor();

                public pageUp(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public top(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public pageDown(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public onTouchEvent(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.MotionEvent): boolean;
            }
        }
    }
}

/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
declare module android {
    export module text {
        export module method {
            export abstract class BaseKeyListener extends android.text.method.MetaKeyKeyListener implements android.text.method.KeyListener {
                public backspace(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;

                public clearMetaKeyState(param0: android.view.View, param1: android.text.Editable, param2: number): void;

                public onKeyUp(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;

                public forwardDelete(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;

                public getInputType(): number;

                public static clearMetaKeyState(param0: android.text.Editable, param1: number): void;
                public clearMetaKeyState(param0: number, param1: number): number;

                public onKeyOther(param0: android.view.View, param1: android.text.Editable, param2: android.view.KeyEvent): boolean;

                public onKeyDown(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
declare module android {
    export module text {
        export module method {
            export class BaseMovementMethod extends javalangObject implements android.text.method.MovementMethod {
                public lineStart(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public up(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public down(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public initialize(param0: android.widget.TextView, param1: android.text.Spannable): void;

                public handleMovementKey(param0: android.widget.TextView, param1: android.text.Spannable, param2: number, param3: number, param4: android.view.KeyEvent): boolean;

                public home(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public onGenericMotionEvent(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.MotionEvent): boolean;

                public onTrackballEvent(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.MotionEvent): boolean;

                public bottom(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public onKeyDown(param0: android.widget.TextView, param1: android.text.Spannable, param2: number, param3: android.view.KeyEvent): boolean;

                public onKeyUp(param0: android.widget.TextView, param1: android.text.Spannable, param2: number, param3: android.view.KeyEvent): boolean;

                public canSelectArbitrarily(): boolean;

                public onTakeFocus(param0: android.widget.TextView, param1: android.text.Spannable, param2: number): void;

                public getMovementMetaState(param0: android.text.Spannable, param1: android.view.KeyEvent): number;

                public end(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public onKeyOther(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.KeyEvent): boolean;

                public left(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public right(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public lineEnd(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public constructor();

                public pageUp(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public top(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public pageDown(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public onTouchEvent(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.MotionEvent): boolean;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.SearchEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.widget.AdapterView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module text {
        export module method {
            export class CharacterPickerDialog extends android.app.Dialog implements android.widget.AdapterView.OnItemClickListener, android.view.View.OnClickListener {
                public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;

                public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;

                public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

                public onItemClick(param0: android.widget.AdapterView, param1: android.view.View, param2: number, param3: number): void;

                public dismiss(): void;

                public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

                public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;

                public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;

                public onSearchRequested(param0: android.view.SearchEvent): boolean;

                public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;

                public onCreate(param0: android.os.Bundle): void;

                public onPanelClosed(param0: number, param1: android.view.Menu): void;

                public cancel(): void;

                public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

                public onCreatePanelView(param0: number): android.view.View;

                public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;

                public onClick(param0: android.view.View): void;

                public onActionModeStarted(param0: android.view.ActionMode): void;

                public onMenuOpened(param0: number, param1: android.view.Menu): boolean;

                public constructor(param0: android.content.Context, param1: number);

                public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;

                public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;

                public constructor(param0: android.content.Context, param1: android.view.View, param2: android.text.Editable, param3: string, param4: boolean);

                public onActionModeFinished(param0: android.view.ActionMode): void;

                public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;

                public constructor(param0: android.content.Context, param1: boolean, param2: android.content.DialogInterface.OnCancelListener);

                public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;

                public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

                public onContentChanged(): void;

                public constructor(param0: android.content.Context);

                public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;

                public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;

                public onDetachedFromWindow(): void;

                public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;

                public onSearchRequested(): boolean;

                public onWindowFocusChanged(param0: boolean): void;

                public onAttachedToWindow(): void;
            }
        }
    }
}

/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.text.Spanned.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export module method {
            export class DateKeyListener extends android.text.method.NumberKeyListener {
                public static CHARACTERS: native.Array<string>;

                public getAcceptedChars(): native.Array<string>;

                public clearMetaKeyState(param0: android.view.View, param1: android.text.Editable, param2: number): void;

                public onKeyUp(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;

                public getInputType(): number;

                public static clearMetaKeyState(param0: android.text.Editable, param1: number): void;
                public clearMetaKeyState(param0: number, param1: number): number;

                public onKeyOther(param0: android.view.View, param1: android.text.Editable, param2: android.view.KeyEvent): boolean;

                public onKeyDown(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;

                public filter(param0: string, param1: number, param2: number, param3: android.text.Spanned, param4: number, param5: number): string;

                public constructor();

                public static getInstance(): android.text.method.DateKeyListener;
            }
        }
    }
}

/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.text.Spanned.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export module method {
            export class DateTimeKeyListener extends android.text.method.NumberKeyListener {
                public static CHARACTERS: native.Array<string>;

                public getAcceptedChars(): native.Array<string>;

                public clearMetaKeyState(param0: android.view.View, param1: android.text.Editable, param2: number): void;

                public onKeyUp(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;

                public getInputType(): number;

                public static clearMetaKeyState(param0: android.text.Editable, param1: number): void;
                public clearMetaKeyState(param0: number, param1: number): number;

                public onKeyOther(param0: android.view.View, param1: android.text.Editable, param2: android.view.KeyEvent): boolean;

                public onKeyDown(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;

                public static getInstance(): android.text.method.DateTimeKeyListener;

                public filter(param0: string, param1: number, param2: number, param3: android.text.Spanned, param4: number, param5: number): string;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.text.Spanned.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export module method {
            export class DialerKeyListener extends android.text.method.NumberKeyListener {
                public static CHARACTERS: native.Array<string>;

                public getAcceptedChars(): native.Array<string>;

                public static getInstance(): android.text.method.DialerKeyListener;

                public clearMetaKeyState(param0: android.view.View, param1: android.text.Editable, param2: number): void;

                public onKeyUp(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;

                public getInputType(): number;

                public static clearMetaKeyState(param0: android.text.Editable, param1: number): void;
                public clearMetaKeyState(param0: number, param1: number): number;

                public lookup(param0: android.view.KeyEvent, param1: android.text.Spannable): number;

                public onKeyOther(param0: android.view.View, param1: android.text.Editable, param2: android.view.KeyEvent): boolean;

                public onKeyDown(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;

                public filter(param0: string, param1: number, param2: number, param3: android.text.Spanned, param4: number, param5: number): string;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.text.Spanned.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module text {
        export module method {
            export class DigitsKeyListener extends android.text.method.NumberKeyListener {
                public constructor(param0: boolean, param1: boolean);

                public getAcceptedChars(): native.Array<string>;

                public clearMetaKeyState(param0: android.view.View, param1: android.text.Editable, param2: number): void;

                public onKeyUp(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;

                public clearMetaKeyState(param0: number, param1: number): number;

                public static getInstance(param0: boolean, param1: boolean): android.text.method.DigitsKeyListener;

                public onKeyDown(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;

                public filter(param0: string, param1: number, param2: number, param3: android.text.Spanned, param4: number, param5: number): string;

                public constructor();

                public static getInstance(): android.text.method.DigitsKeyListener;

                public getInputType(): number;

                public static clearMetaKeyState(param0: android.text.Editable, param1: number): void;

                public static getInstance(param0: string): android.text.method.DigitsKeyListener;

                public onKeyOther(param0: android.view.View, param1: android.text.Editable, param2: android.view.KeyEvent): boolean;
            }
        }
    }
}

/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export module method {
            export class HideReturnsTransformationMethod extends android.text.method.ReplacementTransformationMethod {
                public getReplacement(): native.Array<string>;

                public getTransformation(param0: string, param1: android.view.View): string;

                public static getInstance(): android.text.method.HideReturnsTransformationMethod;

                public getOriginal(): native.Array<string>;

                public onFocusChanged(param0: android.view.View, param1: string, param2: boolean, param3: number, param4: android.graphics.Rect): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
declare module android {
    export module text {
        export module method {
            export class KeyListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.text.method.KeyListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getInputType(): number;
                    onKeyDown(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;
                    onKeyUp(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;
                    onKeyOther(param0: android.view.View, param1: android.text.Editable, param2: android.view.KeyEvent): boolean;
                    clearMetaKeyState(param0: android.view.View, param1: android.text.Editable, param2: number): void;
                });

                public clearMetaKeyState(param0: android.view.View, param1: android.text.Editable, param2: number): void;

                public onKeyUp(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;

                public getInputType(): number;

                public onKeyOther(param0: android.view.View, param1: android.text.Editable, param2: android.view.KeyEvent): boolean;

                public onKeyDown(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;
            }
        }
    }
}

/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.text.method.MovementMethod.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
declare module android {
    export module text {
        export module method {
            export class LinkMovementMethod extends android.text.method.ScrollingMovementMethod {
                public up(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public down(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public handleMovementKey(param0: android.widget.TextView, param1: android.text.Spannable, param2: number, param3: number, param4: android.view.KeyEvent): boolean;

                public initialize(param0: android.widget.TextView, param1: android.text.Spannable): void;

                public static getInstance(): android.text.method.MovementMethod;

                public onGenericMotionEvent(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.MotionEvent): boolean;

                public onTrackballEvent(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.MotionEvent): boolean;

                public onKeyDown(param0: android.widget.TextView, param1: android.text.Spannable, param2: number, param3: android.view.KeyEvent): boolean;

                public onKeyUp(param0: android.widget.TextView, param1: android.text.Spannable, param2: number, param3: android.view.KeyEvent): boolean;

                public canSelectArbitrarily(): boolean;

                public onTakeFocus(param0: android.widget.TextView, param1: android.text.Spannable, param2: number): void;

                public left(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public right(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public onKeyOther(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.KeyEvent): boolean;

                public constructor();

                public onTouchEvent(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.MotionEvent): boolean;
            }
        }
    }
}

/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module text {
        export module method {
            export abstract class MetaKeyKeyListener extends javalangObject {
                public static META_ALT_LOCKED: number;
                public static META_ALT_ON: number;
                public static META_CAP_LOCKED: number;
                public static META_SHIFT_ON: number;
                public static META_SYM_LOCKED: number;
                public static META_SYM_ON: number;

                public static isMetaTracker(param0: string, param1: javalangObject): boolean;

                public clearMetaKeyState(param0: android.view.View, param1: android.text.Editable, param2: number): void;

                public onKeyUp(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;

                public clearMetaKeyState(param0: number, param1: number): number;

                public static handleKeyUp(param0: number, param1: number, param2: android.view.KeyEvent): number;

                public static adjustMetaAfterKeypress(param0: android.text.Spannable): void;

                public static isSelectingMetaTracker(param0: string, param1: javalangObject): boolean;

                public onKeyDown(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;

                public constructor();

                public static resetMetaState(param0: android.text.Spannable): void;

                public static resetLockedMeta(param0: number): number;

                public static getMetaState(param0: string): number;
                public static getMetaState(param0: string, param1: android.view.KeyEvent): number;

                public static resetLockedMeta(param0: android.text.Spannable): void;

                public static getMetaState(param0: string, param1: number, param2: android.view.KeyEvent): number;

                public static clearMetaKeyState(param0: android.text.Editable, param1: number): void;

                public static handleKeyDown(param0: number, param1: number, param2: android.view.KeyEvent): number;

                public static getMetaState(param0: number, param1: number): number;

                public static adjustMetaAfterKeypress(param0: number): number;

                public static getMetaState(param0: string, param1: number): number;
                public static getMetaState(param0: number): number;
            }
        }
    }
}

/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
declare module android {
    export module text {
        export module method {
            export class MovementMethod extends javalangObject {
                /**
                 * Constructs a new instance of the android.text.method.MovementMethod interface with the provided implementation.
                 */
                public constructor(implementation: {
                    initialize(param0: android.widget.TextView, param1: android.text.Spannable): void;
                    onKeyDown(param0: android.widget.TextView, param1: android.text.Spannable, param2: number, param3: android.view.KeyEvent): boolean;
                    onKeyUp(param0: android.widget.TextView, param1: android.text.Spannable, param2: number, param3: android.view.KeyEvent): boolean;
                    onKeyOther(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.KeyEvent): boolean;
                    onTakeFocus(param0: android.widget.TextView, param1: android.text.Spannable, param2: number): void;
                    onTrackballEvent(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.MotionEvent): boolean;
                    onTouchEvent(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.MotionEvent): boolean;
                    onGenericMotionEvent(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.MotionEvent): boolean;
                    canSelectArbitrarily(): boolean;
                });

                public initialize(param0: android.widget.TextView, param1: android.text.Spannable): void;

                public onGenericMotionEvent(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.MotionEvent): boolean;

                public onTrackballEvent(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.MotionEvent): boolean;

                public onKeyDown(param0: android.widget.TextView, param1: android.text.Spannable, param2: number, param3: android.view.KeyEvent): boolean;

                public onKeyUp(param0: android.widget.TextView, param1: android.text.Spannable, param2: number, param3: android.view.KeyEvent): boolean;

                public onTouchEvent(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.MotionEvent): boolean;

                public canSelectArbitrarily(): boolean;

                public onTakeFocus(param0: android.widget.TextView, param1: android.text.Spannable, param2: number): void;

                public onKeyOther(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.KeyEvent): boolean;
            }
        }
    }
}

/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module text {
        export module method {
            export class MultiTapKeyListener extends android.text.method.BaseKeyListener implements android.text.SpanWatcher {
                public clearMetaKeyState(param0: android.view.View, param1: android.text.Editable, param2: number): void;

                public onKeyUp(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;

                public constructor(param0: android.text.method.TextKeyListener.Capitalize, param1: boolean);

                public clearMetaKeyState(param0: number, param1: number): number;

                public onKeyDown(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;

                public constructor();

                public onSpanAdded(param0: android.text.Spannable, param1: javalangObject, param2: number, param3: number): void;

                public getInputType(): number;

                public static clearMetaKeyState(param0: android.text.Editable, param1: number): void;

                public onSpanRemoved(param0: android.text.Spannable, param1: javalangObject, param2: number, param3: number): void;

                public static getInstance(param0: boolean, param1: android.text.method.TextKeyListener.Capitalize): android.text.method.MultiTapKeyListener;

                public onKeyOther(param0: android.view.View, param1: android.text.Editable, param2: android.view.KeyEvent): boolean;

                public onSpanChanged(param0: android.text.Spannable, param1: javalangObject, param2: number, param3: number, param4: number, param5: number): void;
            }
        }
    }
}

/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.text.Spanned.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export module method {
            export abstract class NumberKeyListener extends android.text.method.BaseKeyListener implements android.text.InputFilter {
                public getAcceptedChars(): native.Array<string>;

                public clearMetaKeyState(param0: android.view.View, param1: android.text.Editable, param2: number): void;

                public onKeyUp(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;

                public getInputType(): number;

                public static clearMetaKeyState(param0: android.text.Editable, param1: number): void;
                public clearMetaKeyState(param0: number, param1: number): number;

                public lookup(param0: android.view.KeyEvent, param1: android.text.Spannable): number;

                public static ok(param0: native.Array<string>, param1: string): boolean;

                public onKeyOther(param0: android.view.View, param1: android.text.Editable, param2: android.view.KeyEvent): boolean;

                public onKeyDown(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;

                public filter(param0: string, param1: number, param2: number, param3: android.text.Spanned, param4: number, param5: number): string;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export module method {
            export class PasswordTransformationMethod extends javalangObject implements android.text.method.TransformationMethod, android.text.TextWatcher {
                public getTransformation(param0: string, param1: android.view.View): string;

                public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;

                public onFocusChanged(param0: android.view.View, param1: string, param2: boolean, param3: number, param4: android.graphics.Rect): void;

                public static getInstance(): android.text.method.PasswordTransformationMethod;

                public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;

                public constructor();

                public afterTextChanged(param0: android.text.Editable): void;
            }
        }
    }
}

/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module text {
        export module method {
            export class QwertyKeyListener extends android.text.method.BaseKeyListener {
                public static markAsReplaced(param0: android.text.Spannable, param1: number, param2: number, param3: string): void;

                public clearMetaKeyState(param0: android.view.View, param1: android.text.Editable, param2: number): void;

                public onKeyUp(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;

                public constructor(param0: android.text.method.TextKeyListener.Capitalize, param1: boolean);

                public getInputType(): number;

                public static clearMetaKeyState(param0: android.text.Editable, param1: number): void;
                public clearMetaKeyState(param0: number, param1: number): number;

                public static getInstance(param0: boolean, param1: android.text.method.TextKeyListener.Capitalize): android.text.method.QwertyKeyListener;

                public onKeyOther(param0: android.view.View, param1: android.text.Editable, param2: android.view.KeyEvent): boolean;

                public onKeyDown(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;

                public constructor();

                public static getInstanceForFullKeyboard(): android.text.method.QwertyKeyListener;
            }
        }
    }
}

/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export module method {
            export abstract class ReplacementTransformationMethod extends javalangObject implements android.text.method.TransformationMethod {
                public getReplacement(): native.Array<string>;

                public getTransformation(param0: string, param1: android.view.View): string;

                public getOriginal(): native.Array<string>;

                public onFocusChanged(param0: android.view.View, param1: string, param2: boolean, param3: number, param4: android.graphics.Rect): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.text.method.MovementMethod.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
declare module android {
    export module text {
        export module method {
            export class ScrollingMovementMethod extends android.text.method.BaseMovementMethod implements android.text.method.MovementMethod {
                public lineStart(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public up(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public down(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public initialize(param0: android.widget.TextView, param1: android.text.Spannable): void;

                public home(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public static getInstance(): android.text.method.MovementMethod;

                public onGenericMotionEvent(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.MotionEvent): boolean;

                public bottom(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public onTrackballEvent(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.MotionEvent): boolean;

                public onKeyDown(param0: android.widget.TextView, param1: android.text.Spannable, param2: number, param3: android.view.KeyEvent): boolean;

                public onKeyUp(param0: android.widget.TextView, param1: android.text.Spannable, param2: number, param3: android.view.KeyEvent): boolean;

                public canSelectArbitrarily(): boolean;

                public end(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public onTakeFocus(param0: android.widget.TextView, param1: android.text.Spannable, param2: number): void;

                public left(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public right(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public lineEnd(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public onKeyOther(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.KeyEvent): boolean;

                public constructor();

                public pageUp(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public top(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public pageDown(param0: android.widget.TextView, param1: android.text.Spannable): boolean;

                public onTouchEvent(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.MotionEvent): boolean;
            }
        }
    }
}

/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export module method {
            export class SingleLineTransformationMethod extends android.text.method.ReplacementTransformationMethod {
                public getReplacement(): native.Array<string>;

                public getTransformation(param0: string, param1: android.view.View): string;

                public getOriginal(): native.Array<string>;

                public static getInstance(): android.text.method.SingleLineTransformationMethod;

                public onFocusChanged(param0: android.view.View, param1: string, param2: boolean, param3: number, param4: android.graphics.Rect): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module text {
        export module method {
            export class TextKeyListener extends android.text.method.BaseKeyListener implements android.text.SpanWatcher {
                public static getInstance(): android.text.method.TextKeyListener;

                public clearMetaKeyState(param0: android.view.View, param1: android.text.Editable, param2: number): void;

                public onKeyUp(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;

                public release(): void;

                public constructor(param0: android.text.method.TextKeyListener.Capitalize, param1: boolean);

                public clearMetaKeyState(param0: number, param1: number): number;

                public static clear(param0: android.text.Editable): void;

                public onKeyDown(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;

                public constructor();

                public static shouldCap(param0: android.text.method.TextKeyListener.Capitalize, param1: string, param2: number): boolean;

                public onSpanAdded(param0: android.text.Spannable, param1: javalangObject, param2: number, param3: number): void;

                public getInputType(): number;

                public static clearMetaKeyState(param0: android.text.Editable, param1: number): void;

                public onSpanRemoved(param0: android.text.Spannable, param1: javalangObject, param2: number, param3: number): void;

                public onKeyOther(param0: android.view.View, param1: android.text.Editable, param2: android.view.KeyEvent): boolean;

                public static getInstance(param0: boolean, param1: android.text.method.TextKeyListener.Capitalize): android.text.method.TextKeyListener;

                public onSpanChanged(param0: android.text.Spannable, param1: javalangObject, param2: number, param3: number, param4: number, param5: number): void;
            }
            export module TextKeyListener {
                export class Capitalize extends javalangEnum {
                    public static CHARACTERS: android.text.method.TextKeyListener.Capitalize;
                    public static NONE: android.text.method.TextKeyListener.Capitalize;
                    public static SENTENCES: android.text.method.TextKeyListener.Capitalize;
                    public static WORDS: android.text.method.TextKeyListener.Capitalize;

                    public static values(): native.Array<android.text.method.TextKeyListener.Capitalize>;

                    public static valueOf(param0: string): android.text.method.TextKeyListener.Capitalize;
                    public static valueOf(param0: javalangClass, param1: string): javalangEnum;
                }
            }
        }
    }
}

/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.text.Spanned.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export module method {
            export class TimeKeyListener extends android.text.method.NumberKeyListener {
                public static CHARACTERS: native.Array<string>;

                public getAcceptedChars(): native.Array<string>;

                public clearMetaKeyState(param0: android.view.View, param1: android.text.Editable, param2: number): void;

                public onKeyUp(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;

                public getInputType(): number;

                public static clearMetaKeyState(param0: android.text.Editable, param1: number): void;
                public clearMetaKeyState(param0: number, param1: number): number;

                public static getInstance(): android.text.method.TimeKeyListener;

                public onKeyOther(param0: android.view.View, param1: android.text.Editable, param2: android.view.KeyEvent): boolean;

                public onKeyDown(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;

                public filter(param0: string, param1: number, param2: number, param3: android.text.Spanned, param4: number, param5: number): string;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.text.Layout.d.ts" />
/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
declare module android {
    export module text {
        export module method {
            export class Touch extends javalangObject {
                public static scrollTo(param0: android.widget.TextView, param1: android.text.Layout, param2: number, param3: number): void;

                public static getInitialScrollX(param0: android.widget.TextView, param1: android.text.Spannable): number;

                public static getInitialScrollY(param0: android.widget.TextView, param1: android.text.Spannable): number;

                public static onTouchEvent(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.MotionEvent): boolean;
            }
        }
    }
}

/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export module method {
            export class TransformationMethod extends javalangObject {
                /**
                 * Constructs a new instance of the android.text.method.TransformationMethod interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getTransformation(param0: string, param1: android.view.View): string;
                    onFocusChanged(param0: android.view.View, param1: string, param2: boolean, param3: number, param4: android.graphics.Rect): void;
                });

                public getTransformation(param0: string, param1: android.view.View): string;

                public onFocusChanged(param0: android.view.View, param1: string, param2: boolean, param3: number, param4: android.graphics.Rect): void;
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
declare module android {
    export module text {
        export module style {
            export class AbsoluteSizeSpan extends android.text.style.MetricAffectingSpan implements android.text.ParcelableSpan {
                public updateDrawState(param0: android.text.TextPaint): void;

                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getSize(): number;

                public getSpanTypeId(): number;

                public describeContents(): number;

                public updateMeasureState(param0: android.text.TextPaint): void;

                public constructor(param0: number);
                public constructor(param0: number, param1: boolean);

                public getDip(): boolean;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module text {
        export module style {
            export class AlignmentSpan extends javalangObject implements android.text.style.ParagraphStyle {
                /**
                 * Constructs a new instance of the android.text.style.AlignmentSpan interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getAlignment(): android.text.Layout.Alignment;
                });

                public getAlignment(): android.text.Layout.Alignment;
            }
            export module AlignmentSpan {
                export class Standard extends javalangObject implements android.text.style.AlignmentSpan, android.text.ParcelableSpan {
                    public getAlignment(): android.text.Layout.Alignment;

                    public constructor(param0: android.os.Parcel);

                    public describeContents(): number;

                    public getSpanTypeId(): number;

                    public constructor(param0: android.text.Layout.Alignment);

                    public writeToParcel(param0: android.os.Parcel, param1: number): void;
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
declare module android {
    export module text {
        export module style {
            export class BackgroundColorSpan extends android.text.style.CharacterStyle implements android.text.style.UpdateAppearance, android.text.ParcelableSpan {
                public getBackgroundColor(): number;

                public updateDrawState(param0: android.text.TextPaint): void;

                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getSpanTypeId(): number;

                public describeContents(): number;

                public constructor(param0: number);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.text.Layout.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export module style {
            export class BulletSpan extends javalangObject implements android.text.style.LeadingMarginSpan, android.text.ParcelableSpan {
                public static STANDARD_GAP_WIDTH: number;

                public constructor(param0: number, param1: number);
                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getSpanTypeId(): number;

                public describeContents(): number;

                public constructor(param0: number);

                public drawLeadingMargin(param0: android.graphics.Canvas, param1: android.graphics.Paint, param2: number, param3: number, param4: number, param5: number, param6: number, param7: string, param8: number, param9: number, param10: boolean, param11: android.text.Layout): void;

                public constructor();

                public getLeadingMargin(param0: boolean): number;
            }
        }
    }
}

/// <reference path="./android.text.TextPaint.d.ts" />
declare module android {
    export module text {
        export module style {
            export abstract class CharacterStyle extends javalangObject {
                public getUnderlying(): android.text.style.CharacterStyle;

                public updateDrawState(param0: android.text.TextPaint): void;

                public static wrap(param0: android.text.style.CharacterStyle): android.text.style.CharacterStyle;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.text.TextPaint.d.ts" />
/// <reference path="./android.view.View.d.ts" />
declare module android {
    export module text {
        export module style {
            export abstract class ClickableSpan extends android.text.style.CharacterStyle implements android.text.style.UpdateAppearance {
                public onClick(param0: android.view.View): void;

                public updateDrawState(param0: android.text.TextPaint): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.text.Layout.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export module style {
            export class DrawableMarginSpan extends javalangObject implements android.text.style.LeadingMarginSpan, android.text.style.LineHeightSpan {
                public constructor(param0: android.graphics.drawable.Drawable);
                public constructor(param0: android.graphics.drawable.Drawable, param1: number);

                public chooseHeight(param0: string, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Paint.FontMetricsInt): void;

                public drawLeadingMargin(param0: android.graphics.Canvas, param1: android.graphics.Paint, param2: number, param3: number, param4: number, param5: number, param6: number, param7: string, param8: number, param9: number, param10: boolean, param11: android.text.Layout): void;

                public getLeadingMargin(param0: boolean): number;
            }
        }
    }
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export module style {
            export abstract class DynamicDrawableSpan extends android.text.style.ReplacementSpan {
                public static ALIGN_BASELINE: number;
                public static ALIGN_BOTTOM: number;
                public mVerticalAlignment: number;

                public getDrawable(): android.graphics.drawable.Drawable;

                public getSize(param0: android.graphics.Paint, param1: string, param2: number, param3: number, param4: android.graphics.Paint.FontMetricsInt): number;

                public draw(param0: android.graphics.Canvas, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: android.graphics.Paint): void;

                public constructor(param0: number);

                public getVerticalAlignment(): number;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module text {
        export module style {
            export class EasyEditSpan extends javalangObject implements android.text.ParcelableSpan {
                public static EXTRA_TEXT_CHANGED_TYPE: string;
                public static TEXT_DELETED: number;
                public static TEXT_MODIFIED: number;

                public constructor(param0: android.app.PendingIntent);
                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public getSpanTypeId(): number;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
declare module android {
    export module text {
        export module style {
            export class ForegroundColorSpan extends android.text.style.CharacterStyle implements android.text.style.UpdateAppearance, android.text.ParcelableSpan {
                public updateDrawState(param0: android.text.TextPaint): void;

                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getForegroundColor(): number;

                public getSpanTypeId(): number;

                public describeContents(): number;

                public constructor(param0: number);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.text.Layout.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export module style {
            export class IconMarginSpan extends javalangObject implements android.text.style.LeadingMarginSpan, android.text.style.LineHeightSpan {
                public chooseHeight(param0: string, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Paint.FontMetricsInt): void;

                public constructor(param0: android.graphics.Bitmap, param1: number);

                public drawLeadingMargin(param0: android.graphics.Canvas, param1: android.graphics.Paint, param2: number, param3: number, param4: number, param5: number, param6: number, param7: string, param8: number, param9: number, param10: boolean, param11: android.text.Layout): void;

                public constructor(param0: android.graphics.Bitmap);

                public getLeadingMargin(param0: boolean): number;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module text {
        export module style {
            export class ImageSpan extends android.text.style.DynamicDrawableSpan {
                public constructor(param0: android.graphics.drawable.Drawable, param1: number);
                public constructor(param0: android.content.Context, param1: number);

                public getDrawable(): android.graphics.drawable.Drawable;

                public constructor(param0: android.graphics.Bitmap, param1: number);
                public constructor(param0: android.graphics.drawable.Drawable, param1: string);
                public constructor();
                public constructor(param0: android.graphics.drawable.Drawable);
                public constructor(param0: android.content.Context, param1: number, param2: number);
                public constructor(param0: android.graphics.drawable.Drawable, param1: string, param2: number);
                public constructor(param0: android.content.Context, param1: android.graphics.Bitmap);
                public constructor(param0: number);

                public getSource(): string;

                public constructor(param0: android.content.Context, param1: android.graphics.Bitmap, param2: number);
                public constructor(param0: android.graphics.Bitmap);
                public constructor(param0: android.content.Context, param1: android.net.Uri, param2: number);
                public constructor(param0: android.content.Context, param1: android.net.Uri);
            }
        }
    }
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.text.Layout.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export module style {
            export class LeadingMarginSpan extends javalangObject implements android.text.style.ParagraphStyle {
                /**
                 * Constructs a new instance of the android.text.style.LeadingMarginSpan interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getLeadingMargin(param0: boolean): number;
                    drawLeadingMargin(param0: android.graphics.Canvas, param1: android.graphics.Paint, param2: number, param3: number, param4: number, param5: number, param6: number, param7: string, param8: number, param9: number, param10: boolean, param11: android.text.Layout): void;
                });

                public drawLeadingMargin(param0: android.graphics.Canvas, param1: android.graphics.Paint, param2: number, param3: number, param4: number, param5: number, param6: number, param7: string, param8: number, param9: number, param10: boolean, param11: android.text.Layout): void;

                public getLeadingMargin(param0: boolean): number;
            }
            export module LeadingMarginSpan {
                export class LeadingMarginSpan2 extends javalangObject implements android.text.style.LeadingMarginSpan, android.text.style.WrapTogetherSpan {
                    /**
                     * Constructs a new instance of the android.text.style.LeadingMarginSpan$LeadingMarginSpan2 interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        getLeadingMarginLineCount(): number;
                        getLeadingMargin(param0: boolean): number;
                        drawLeadingMargin(param0: android.graphics.Canvas, param1: android.graphics.Paint, param2: number, param3: number, param4: number, param5: number, param6: number, param7: string, param8: number, param9: number, param10: boolean, param11: android.text.Layout): void;
                    });

                    public getLeadingMargin(param0: boolean): number;

                    public getLeadingMarginLineCount(): number;

                    public drawLeadingMargin(param0: android.graphics.Canvas, param1: android.graphics.Paint, param2: number, param3: number, param4: number, param5: number, param6: number, param7: string, param8: number, param9: number, param10: boolean, param11: android.text.Layout): void;
                }
                export class Standard extends javalangObject implements android.text.style.LeadingMarginSpan, android.text.ParcelableSpan {
                    public constructor(param0: android.os.Parcel);

                    public getLeadingMargin(param0: boolean): number;

                    public describeContents(): number;

                    public getSpanTypeId(): number;

                    public drawLeadingMargin(param0: android.graphics.Canvas, param1: android.graphics.Paint, param2: number, param3: number, param4: number, param5: number, param6: number, param7: string, param8: number, param9: number, param10: boolean, param11: android.text.Layout): void;

                    public constructor(param0: number);
                    public constructor(param0: number, param1: number);

                    public writeToParcel(param0: android.os.Parcel, param1: number): void;
                }
            }
        }
    }
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export module style {
            export class LineBackgroundSpan extends javalangObject implements android.text.style.ParagraphStyle {
                /**
                 * Constructs a new instance of the android.text.style.LineBackgroundSpan interface with the provided implementation.
                 */
                public constructor(implementation: {
                    drawBackground(param0: android.graphics.Canvas, param1: android.graphics.Paint, param2: number, param3: number, param4: number, param5: number, param6: number, param7: string, param8: number, param9: number, param10: number): void;
                });

                public drawBackground(param0: android.graphics.Canvas, param1: android.graphics.Paint, param2: number, param3: number, param4: number, param5: number, param6: number, param7: string, param8: number, param9: number, param10: number): void;
            }
        }
    }
}

/// <reference path="./android.text.TextPaint.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export module style {
            export class LineHeightSpan extends javalangObject implements android.text.style.ParagraphStyle, android.text.style.WrapTogetherSpan {
                /**
                 * Constructs a new instance of the android.text.style.LineHeightSpan interface with the provided implementation.
                 */
                public constructor(implementation: {
                    chooseHeight(param0: string, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Paint.FontMetricsInt): void;
                });

                public chooseHeight(param0: string, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Paint.FontMetricsInt): void;
            }
            export module LineHeightSpan {
                export class WithDensity extends javalangObject implements android.text.style.LineHeightSpan {
                    /**
                     * Constructs a new instance of the android.text.style.LineHeightSpan$WithDensity interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        chooseHeight(param0: string, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Paint.FontMetricsInt, param6: android.text.TextPaint): void;
                        chooseHeight(param0: string, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Paint.FontMetricsInt): void;
                    });

                    public chooseHeight(param0: string, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Paint.FontMetricsInt): void;
                    public chooseHeight(param0: string, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Paint.FontMetricsInt, param6: android.text.TextPaint): void;
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module android {
    export module text {
        export module style {
            export class LocaleSpan extends android.text.style.MetricAffectingSpan implements android.text.ParcelableSpan {
                public constructor(param0: javautilLocale);

                public updateDrawState(param0: android.text.TextPaint): void;

                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getSpanTypeId(): number;

                public describeContents(): number;

                public updateMeasureState(param0: android.text.TextPaint): void;

                public constructor();

                public getLocale(): javautilLocale;
            }
        }
    }
}

/// <reference path="./android.graphics.MaskFilter.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
declare module android {
    export module text {
        export module style {
            export class MaskFilterSpan extends android.text.style.CharacterStyle implements android.text.style.UpdateAppearance {
                public updateDrawState(param0: android.text.TextPaint): void;

                public constructor(param0: android.graphics.MaskFilter);

                public getMaskFilter(): android.graphics.MaskFilter;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.text.TextPaint.d.ts" />
/// <reference path="./android.text.style.CharacterStyle.d.ts" />
declare module android {
    export module text {
        export module style {
            export abstract class MetricAffectingSpan extends android.text.style.CharacterStyle implements android.text.style.UpdateLayout {
                public getUnderlying(): android.text.style.CharacterStyle;

                public updateMeasureState(param0: android.text.TextPaint): void;

                public getUnderlying(): android.text.style.MetricAffectingSpan;

                public constructor();
            }
        }
    }
}

declare module android {
    export module text {
        export module style {
            export class ParagraphStyle extends javalangObject {
                /**
                 * Constructs a new instance of the android.text.style.ParagraphStyle interface with the provided implementation.
                 */
                public constructor(implementation: {});
            }
        }
    }
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.text.Layout.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export module style {
            export class QuoteSpan extends javalangObject implements android.text.style.LeadingMarginSpan, android.text.ParcelableSpan {
                public getColor(): number;

                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getSpanTypeId(): number;

                public describeContents(): number;

                public constructor(param0: number);

                public drawLeadingMargin(param0: android.graphics.Canvas, param1: android.graphics.Paint, param2: number, param3: number, param4: number, param5: number, param6: number, param7: string, param8: number, param9: number, param10: boolean, param11: android.text.Layout): void;

                public constructor();

                public getLeadingMargin(param0: boolean): number;
            }
        }
    }
}

/// <reference path="./android.graphics.Rasterizer.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
declare module android {
    export module text {
        export module style {
            export class RasterizerSpan extends android.text.style.CharacterStyle implements android.text.style.UpdateAppearance {
                public updateDrawState(param0: android.text.TextPaint): void;

                public constructor(param0: android.graphics.Rasterizer);

                public getRasterizer(): android.graphics.Rasterizer;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
declare module android {
    export module text {
        export module style {
            export class RelativeSizeSpan extends android.text.style.MetricAffectingSpan implements android.text.ParcelableSpan {
                public updateDrawState(param0: android.text.TextPaint): void;

                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getSpanTypeId(): number;

                public describeContents(): number;

                public updateMeasureState(param0: android.text.TextPaint): void;

                public constructor(param0: number);

                public getSizeChange(): number;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module text {
        export module style {
            export abstract class ReplacementSpan extends android.text.style.MetricAffectingSpan {
                public updateDrawState(param0: android.text.TextPaint): void;

                public getSize(param0: android.graphics.Paint, param1: string, param2: number, param3: number, param4: android.graphics.Paint.FontMetricsInt): number;

                public draw(param0: android.graphics.Canvas, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: android.graphics.Paint): void;

                public updateMeasureState(param0: android.text.TextPaint): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
declare module android {
    export module text {
        export module style {
            export class ScaleXSpan extends android.text.style.MetricAffectingSpan implements android.text.ParcelableSpan {
                public updateDrawState(param0: android.text.TextPaint): void;

                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getSpanTypeId(): number;

                public describeContents(): number;

                public updateMeasureState(param0: android.text.TextPaint): void;

                public constructor(param0: number);

                public getScaleX(): number;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
declare module android {
    export module text {
        export module style {
            export class StrikethroughSpan extends android.text.style.CharacterStyle implements android.text.style.UpdateAppearance, android.text.ParcelableSpan {
                public updateDrawState(param0: android.text.TextPaint): void;

                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getSpanTypeId(): number;

                public describeContents(): number;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
declare module android {
    export module text {
        export module style {
            export class StyleSpan extends android.text.style.MetricAffectingSpan implements android.text.ParcelableSpan {
                public updateDrawState(param0: android.text.TextPaint): void;

                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getSpanTypeId(): number;

                public describeContents(): number;

                public updateMeasureState(param0: android.text.TextPaint): void;

                public constructor(param0: number);

                public getStyle(): number;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
declare module android {
    export module text {
        export module style {
            export class SubscriptSpan extends android.text.style.MetricAffectingSpan implements android.text.ParcelableSpan {
                public updateDrawState(param0: android.text.TextPaint): void;

                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getSpanTypeId(): number;

                public describeContents(): number;

                public updateMeasureState(param0: android.text.TextPaint): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module android {
    export module text {
        export module style {
            export class SuggestionSpan extends android.text.style.CharacterStyle implements android.text.ParcelableSpan {
                public static ACTION_SUGGESTION_PICKED: string;
                public static CREATOR: android.os.Parcelable.Creator;
                public static FLAG_AUTO_CORRECTION: number;
                public static FLAG_EASY_CORRECT: number;
                public static FLAG_MISSPELLED: number;
                public static SUGGESTIONS_MAX_SIZE: number;
                public static SUGGESTION_SPAN_PICKED_AFTER: string;
                public static SUGGESTION_SPAN_PICKED_BEFORE: string;
                public static SUGGESTION_SPAN_PICKED_HASHCODE: string;

                public getSuggestions(): native.Array<string>;

                public constructor(param0: javautilLocale, param1: native.Array<string>, param2: number);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getSpanTypeId(): number;

                public getLocale(): string;

                public constructor(param0: android.content.Context, param1: javautilLocale, param2: native.Array<string>, param3: number, param4: javalangClass);

                public setFlags(param0: number): void;

                public constructor();

                public updateDrawState(param0: android.text.TextPaint): void;

                public constructor(param0: android.os.Parcel);
                public constructor(param0: android.content.Context, param1: native.Array<string>, param2: number);

                public equals(param0: javalangObject): boolean;

                public hashCode(): number;

                public describeContents(): number;

                public getFlags(): number;
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
declare module android {
    export module text {
        export module style {
            export class SuperscriptSpan extends android.text.style.MetricAffectingSpan implements android.text.ParcelableSpan {
                public updateDrawState(param0: android.text.TextPaint): void;

                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getSpanTypeId(): number;

                public describeContents(): number;

                public updateMeasureState(param0: android.text.TextPaint): void;

                public constructor();
            }
        }
    }
}

declare module android {
    export module text {
        export module style {
            export class TabStopSpan extends javalangObject implements android.text.style.ParagraphStyle {
                /**
                 * Constructs a new instance of the android.text.style.TabStopSpan interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getTabStop(): number;
                });

                public getTabStop(): number;
            }
            export module TabStopSpan {
                export class Standard extends javalangObject implements android.text.style.TabStopSpan {
                    public getTabStop(): number;

                    public constructor(param0: number);
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module text {
        export module style {
            export class TextAppearanceSpan extends android.text.style.MetricAffectingSpan implements android.text.ParcelableSpan {
                public constructor(param0: android.content.Context, param1: number);

                public getTextStyle(): number;

                public constructor(param0: string, param1: number, param2: number, param3: android.content.res.ColorStateList, param4: android.content.res.ColorStateList);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getSpanTypeId(): number;

                public getTextColor(): android.content.res.ColorStateList;

                public updateMeasureState(param0: android.text.TextPaint): void;

                public getFamily(): string;

                public constructor();
                public constructor(param0: android.content.Context, param1: number, param2: number);

                public getTextSize(): number;

                public updateDrawState(param0: android.text.TextPaint): void;

                public constructor(param0: android.os.Parcel);

                public getLinkTextColor(): android.content.res.ColorStateList;

                public describeContents(): number;
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./android.text.style.TtsSpan.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module text {
        export module style {
            export class TtsSpan extends javalangObject implements android.text.ParcelableSpan {
                public static ANIMACY_ANIMATE: string;
                public static ANIMACY_INANIMATE: string;
                public static ARG_ANIMACY: string;
                public static ARG_CASE: string;
                public static ARG_COUNTRY_CODE: string;
                public static ARG_CURRENCY: string;
                public static ARG_DAY: string;
                public static ARG_DENOMINATOR: string;
                public static ARG_DIGITS: string;
                public static ARG_DOMAIN: string;
                public static ARG_EXTENSION: string;
                public static ARG_FRACTIONAL_PART: string;
                public static ARG_FRAGMENT_ID: string;
                public static ARG_GENDER: string;
                public static ARG_HOURS: string;
                public static ARG_INTEGER_PART: string;
                public static ARG_MINUTES: string;
                public static ARG_MONTH: string;
                public static ARG_MULTIPLICITY: string;
                public static ARG_NUMBER: string;
                public static ARG_NUMBER_PARTS: string;
                public static ARG_NUMERATOR: string;
                public static ARG_PASSWORD: string;
                public static ARG_PATH: string;
                public static ARG_PORT: string;
                public static ARG_PROTOCOL: string;
                public static ARG_QUANTITY: string;
                public static ARG_QUERY_STRING: string;
                public static ARG_TEXT: string;
                public static ARG_UNIT: string;
                public static ARG_USERNAME: string;
                public static ARG_VERBATIM: string;
                public static ARG_WEEKDAY: string;
                public static ARG_YEAR: string;
                public static CASE_ABLATIVE: string;
                public static CASE_ACCUSATIVE: string;
                public static CASE_DATIVE: string;
                public static CASE_GENITIVE: string;
                public static CASE_INSTRUMENTAL: string;
                public static CASE_LOCATIVE: string;
                public static CASE_NOMINATIVE: string;
                public static CASE_VOCATIVE: string;
                public static GENDER_FEMALE: string;
                public static GENDER_MALE: string;
                public static GENDER_NEUTRAL: string;
                public static MONTH_APRIL: number;
                public static MONTH_AUGUST: number;
                public static MONTH_DECEMBER: number;
                public static MONTH_FEBRUARY: number;
                public static MONTH_JANUARY: number;
                public static MONTH_JULY: number;
                public static MONTH_JUNE: number;
                public static MONTH_MARCH: number;
                public static MONTH_MAY: number;
                public static MONTH_NOVEMBER: number;
                public static MONTH_OCTOBER: number;
                public static MONTH_SEPTEMBER: number;
                public static MULTIPLICITY_DUAL: string;
                public static MULTIPLICITY_PLURAL: string;
                public static MULTIPLICITY_SINGLE: string;
                public static TYPE_CARDINAL: string;
                public static TYPE_DATE: string;
                public static TYPE_DECIMAL: string;
                public static TYPE_DIGITS: string;
                public static TYPE_ELECTRONIC: string;
                public static TYPE_FRACTION: string;
                public static TYPE_MEASURE: string;
                public static TYPE_MONEY: string;
                public static TYPE_ORDINAL: string;
                public static TYPE_TELEPHONE: string;
                public static TYPE_TEXT: string;
                public static TYPE_TIME: string;
                public static TYPE_VERBATIM: string;
                public static WEEKDAY_FRIDAY: number;
                public static WEEKDAY_MONDAY: number;
                public static WEEKDAY_SATURDAY: number;
                public static WEEKDAY_SUNDAY: number;
                public static WEEKDAY_THURSDAY: number;
                public static WEEKDAY_TUESDAY: number;
                public static WEEKDAY_WEDNESDAY: number;

                public getType(): string;

                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public getSpanTypeId(): number;

                public getArgs(): android.os.PersistableBundle;

                public constructor(param0: string, param1: android.os.PersistableBundle);
            }
            export module TtsSpan {
                export class Builder extends javalangObject {
                    public build(): android.text.style.TtsSpan;

                    public constructor(param0: string);

                    public setStringArgument(param0: string, param1: string): android.text.style.TtsSpan.Builder;

                    public setLongArgument(param0: string, param1: number): android.text.style.TtsSpan.Builder;

                    public setIntArgument(param0: string, param1: number): android.text.style.TtsSpan.Builder;
                }
                export class CardinalBuilder extends android.text.style.TtsSpan.SemioticClassBuilder {
                    public constructor(param0: string);
                    public constructor();

                    public setNumber(param0: number): android.text.style.TtsSpan.CardinalBuilder;
                    public setNumber(param0: string): android.text.style.TtsSpan.CardinalBuilder;

                    public constructor(param0: number);
                }
                export class DateBuilder extends android.text.style.TtsSpan.SemioticClassBuilder {
                    public setYear(param0: number): android.text.style.TtsSpan.DateBuilder;

                    public setMonth(param0: number): android.text.style.TtsSpan.DateBuilder;

                    public constructor(param0: string);
                    public constructor();

                    public setDay(param0: number): android.text.style.TtsSpan.DateBuilder;

                    public constructor(param0: javalangInteger, param1: javalangInteger, param2: javalangInteger, param3: javalangInteger);

                    public setWeekday(param0: number): android.text.style.TtsSpan.DateBuilder;
                }
                export class DecimalBuilder extends android.text.style.TtsSpan.SemioticClassBuilder {
                    public constructor(param0: string, param1: string);

                    public setIntegerPart(param0: number): android.text.style.TtsSpan.DecimalBuilder;

                    public constructor(param0: string);
                    public constructor();
                    public constructor(param0: number, param1: number, param2: number);

                    public setFractionalPart(param0: string): android.text.style.TtsSpan.DecimalBuilder;

                    public setIntegerPart(param0: string): android.text.style.TtsSpan.DecimalBuilder;

                    public setArgumentsFromDouble(param0: number, param1: number, param2: number): android.text.style.TtsSpan.DecimalBuilder;
                }
                export class DigitsBuilder extends android.text.style.TtsSpan.SemioticClassBuilder {
                    public constructor(param0: string);
                    public constructor();

                    public setDigits(param0: string): android.text.style.TtsSpan.DigitsBuilder;
                }
                export class ElectronicBuilder extends android.text.style.TtsSpan.SemioticClassBuilder {
                    public constructor(param0: string);

                    public setEmailArguments(param0: string, param1: string): android.text.style.TtsSpan.ElectronicBuilder;

                    public setProtocol(param0: string): android.text.style.TtsSpan.ElectronicBuilder;

                    public constructor();

                    public setUsername(param0: string): android.text.style.TtsSpan.ElectronicBuilder;

                    public setPassword(param0: string): android.text.style.TtsSpan.ElectronicBuilder;

                    public setFragmentId(param0: string): android.text.style.TtsSpan.ElectronicBuilder;

                    public setPort(param0: number): android.text.style.TtsSpan.ElectronicBuilder;

                    public setDomain(param0: string): android.text.style.TtsSpan.ElectronicBuilder;

                    public setQueryString(param0: string): android.text.style.TtsSpan.ElectronicBuilder;

                    public setPath(param0: string): android.text.style.TtsSpan.ElectronicBuilder;
                }
                export class FractionBuilder extends android.text.style.TtsSpan.SemioticClassBuilder {
                    public setIntegerPart(param0: string): android.text.style.TtsSpan.FractionBuilder;

                    public setNumerator(param0: number): android.text.style.TtsSpan.FractionBuilder;

                    public setDenominator(param0: string): android.text.style.TtsSpan.FractionBuilder;

                    public constructor(param0: string);

                    public setIntegerPart(param0: number): android.text.style.TtsSpan.FractionBuilder;

                    public constructor();
                    public constructor(param0: number, param1: number, param2: number);

                    public setDenominator(param0: number): android.text.style.TtsSpan.FractionBuilder;

                    public setNumerator(param0: string): android.text.style.TtsSpan.FractionBuilder;
                }
                export class MeasureBuilder extends android.text.style.TtsSpan.SemioticClassBuilder {
                    public setFractionalPart(param0: string): android.text.style.TtsSpan.MeasureBuilder;

                    public setIntegerPart(param0: string): android.text.style.TtsSpan.MeasureBuilder;

                    public constructor(param0: string);

                    public setUnit(param0: string): android.text.style.TtsSpan.MeasureBuilder;

                    public constructor();

                    public setNumber(param0: number): android.text.style.TtsSpan.MeasureBuilder;

                    public setNumerator(param0: string): android.text.style.TtsSpan.MeasureBuilder;

                    public setDenominator(param0: string): android.text.style.TtsSpan.MeasureBuilder;

                    public setIntegerPart(param0: number): android.text.style.TtsSpan.MeasureBuilder;

                    public setDenominator(param0: number): android.text.style.TtsSpan.MeasureBuilder;

                    public setNumerator(param0: number): android.text.style.TtsSpan.MeasureBuilder;

                    public setNumber(param0: string): android.text.style.TtsSpan.MeasureBuilder;
                }
                export class MoneyBuilder extends android.text.style.TtsSpan.SemioticClassBuilder {
                    public setIntegerPart(param0: number): android.text.style.TtsSpan.MoneyBuilder;

                    public setCurrency(param0: string): android.text.style.TtsSpan.MoneyBuilder;

                    public constructor(param0: string);

                    public setQuantity(param0: string): android.text.style.TtsSpan.MoneyBuilder;

                    public constructor();

                    public setIntegerPart(param0: string): android.text.style.TtsSpan.MoneyBuilder;

                    public setFractionalPart(param0: string): android.text.style.TtsSpan.MoneyBuilder;
                }
                export class OrdinalBuilder extends android.text.style.TtsSpan.SemioticClassBuilder {
                    public constructor(param0: string);
                    public constructor();

                    public setNumber(param0: number): android.text.style.TtsSpan.OrdinalBuilder;
                    public setNumber(param0: string): android.text.style.TtsSpan.OrdinalBuilder;

                    public constructor(param0: number);
                }
                export class SemioticClassBuilder extends android.text.style.TtsSpan.Builder {
                    public setMultiplicity(param0: string): android.text.style.TtsSpan.SemioticClassBuilder;

                    public setGender(param0: string): android.text.style.TtsSpan.SemioticClassBuilder;

                    public constructor(param0: string);

                    public setCase(param0: string): android.text.style.TtsSpan.SemioticClassBuilder;

                    public setAnimacy(param0: string): android.text.style.TtsSpan.SemioticClassBuilder;
                }
                export class TelephoneBuilder extends android.text.style.TtsSpan.SemioticClassBuilder {
                    public setCountryCode(param0: string): android.text.style.TtsSpan.TelephoneBuilder;

                    public setNumberParts(param0: string): android.text.style.TtsSpan.TelephoneBuilder;

                    public constructor(param0: string);
                    public constructor();

                    public setExtension(param0: string): android.text.style.TtsSpan.TelephoneBuilder;
                }
                export class TextBuilder extends android.text.style.TtsSpan.SemioticClassBuilder {
                    public constructor(param0: string);
                    public constructor();

                    public setText(param0: string): android.text.style.TtsSpan.TextBuilder;
                }
                export class TimeBuilder extends android.text.style.TtsSpan.SemioticClassBuilder {
                    public setMinutes(param0: number): android.text.style.TtsSpan.TimeBuilder;

                    public constructor(param0: string);
                    public constructor();

                    public setHours(param0: number): android.text.style.TtsSpan.TimeBuilder;

                    public constructor(param0: number, param1: number);
                }
                export class VerbatimBuilder extends android.text.style.TtsSpan.SemioticClassBuilder {
                    public setVerbatim(param0: string): android.text.style.TtsSpan.VerbatimBuilder;

                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module text {
        export module style {
            export class TypefaceSpan extends android.text.style.MetricAffectingSpan implements android.text.ParcelableSpan {
                public updateDrawState(param0: android.text.TextPaint): void;

                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getSpanTypeId(): number;

                public describeContents(): number;

                public updateMeasureState(param0: android.text.TextPaint): void;

                public getFamily(): string;

                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module text {
        export module style {
            export class URLSpan extends android.text.style.ClickableSpan implements android.text.ParcelableSpan {
                public getURL(): string;

                public onClick(param0: android.view.View): void;

                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getSpanTypeId(): number;

                public describeContents(): number;

                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
declare module android {
    export module text {
        export module style {
            export class UnderlineSpan extends android.text.style.CharacterStyle implements android.text.style.UpdateAppearance, android.text.ParcelableSpan {
                public updateDrawState(param0: android.text.TextPaint): void;

                public constructor(param0: android.os.Parcel);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getSpanTypeId(): number;

                public describeContents(): number;

                public constructor();
            }
        }
    }
}

declare module android {
    export module text {
        export module style {
            export class UpdateAppearance extends javalangObject {
                /**
                 * Constructs a new instance of the android.text.style.UpdateAppearance interface with the provided implementation.
                 */
                public constructor(implementation: {});
            }
        }
    }
}

declare module android {
    export module text {
        export module style {
            export class UpdateLayout extends javalangObject implements android.text.style.UpdateAppearance {
                /**
                 * Constructs a new instance of the android.text.style.UpdateLayout interface with the provided implementation.
                 */
                public constructor(implementation: {});
            }
        }
    }
}

declare module android {
    export module text {
        export module style {
            export class WrapTogetherSpan extends javalangObject implements android.text.style.ParagraphStyle {
                /**
                 * Constructs a new instance of the android.text.style.WrapTogetherSpan interface with the provided implementation.
                 */
                public constructor(implementation: {});
            }
        }
    }
}

import javautilregexMatcher = java.util.regex.Matcher;
/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.regex.Matcher.d.ts" />
/// <reference path="./java.util.regex.Pattern.d.ts" />
declare module android {
    export module text {
        export module util {
            export class Linkify extends javalangObject {
                public static ALL: number;
                public static EMAIL_ADDRESSES: number;
                public static MAP_ADDRESSES: number;
                public static PHONE_NUMBERS: number;
                public static WEB_URLS: number;
                public static sPhoneNumberMatchFilter: android.text.util.Linkify.MatchFilter;
                public static sPhoneNumberTransformFilter: android.text.util.Linkify.TransformFilter;
                public static sUrlMatchFilter: android.text.util.Linkify.MatchFilter;

                public static addLinks(param0: android.widget.TextView, param1: javautilregexPattern, param2: string, param3: android.text.util.Linkify.MatchFilter, param4: android.text.util.Linkify.TransformFilter): void;
                public static addLinks(param0: android.widget.TextView, param1: javautilregexPattern, param2: string): void;
                public static addLinks(param0: android.text.Spannable, param1: javautilregexPattern, param2: string, param3: android.text.util.Linkify.MatchFilter, param4: android.text.util.Linkify.TransformFilter): boolean;
                public static addLinks(param0: android.text.Spannable, param1: number): boolean;
                public static addLinks(param0: android.widget.TextView, param1: number): boolean;
                public static addLinks(param0: android.text.Spannable, param1: javautilregexPattern, param2: string): boolean;

                public constructor();
            }
            export module Linkify {
                export class MatchFilter extends javalangObject {
                    /**
                     * Constructs a new instance of the android.text.util.Linkify$MatchFilter interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        acceptMatch(param0: string, param1: number, param2: number): boolean;
                    });

                    public acceptMatch(param0: string, param1: number, param2: number): boolean;
                }
                export class TransformFilter extends javalangObject {
                    /**
                     * Constructs a new instance of the android.text.util.Linkify$TransformFilter interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        transformUrl(param0: javautilregexMatcher, param1: string): string;
                    });

                    public transformUrl(param0: javautilregexMatcher, param1: string): string;
                }
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module text {
        export module util {
            export class Rfc822Token extends javalangObject {
                public setName(param0: string): void;

                public setComment(param0: string): void;

                public constructor(param0: string, param1: string, param2: string);

                public getName(): string;

                public toString(): string;

                public equals(param0: javalangObject): boolean;

                public static quoteName(param0: string): string;

                public static quoteComment(param0: string): string;

                public hashCode(): number;

                public static quoteNameIfNecessary(param0: string): string;

                public setAddress(param0: string): void;

                public getAddress(): string;

                public getComment(): string;
            }
        }
    }
}

/// <reference path="./android.text.util.Rfc822Token.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
declare module android {
    export module text {
        export module util {
            export class Rfc822Tokenizer extends javalangObject implements android.widget.MultiAutoCompleteTextView.Tokenizer {
                public findTokenStart(param0: string, param1: number): number;

                public static tokenize(param0: string): native.Array<android.text.util.Rfc822Token>;

                public terminateToken(param0: string): string;

                public findTokenEnd(param0: string, param1: number): number;

                public static tokenize(param0: string, param1: javautilCollection): void;

                public constructor();
            }
        }
    }
}
