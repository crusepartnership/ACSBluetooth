
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module graphics {
        export class AvoidXfermode extends android.graphics.Xfermode {
            public constructor(param0: number, param1: number, param2: android.graphics.AvoidXfermode.Mode);
            public constructor();
        }
        export module AvoidXfermode {
            export class Mode extends javalangEnum {
                public static AVOID: android.graphics.AvoidXfermode.Mode;
                public static TARGET: android.graphics.AvoidXfermode.Mode;

                public static valueOf(param0: string): android.graphics.AvoidXfermode.Mode;

                public static values(): native.Array<android.graphics.AvoidXfermode.Mode>;

                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
        }
    }
}

import javanioBuffer = java.nio.Buffer;
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.DisplayMetrics.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.Buffer.d.ts" />
declare module android {
    export module graphics {
        export class Bitmap extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static DENSITY_NONE: number;

            public setHeight(param0: number): void;

            public getScaledHeight(param0: android.util.DisplayMetrics): number;

            public hasMipMap(): boolean;

            public setConfig(param0: android.graphics.Bitmap.Config): void;

            public getWidth(): number;

            public getScaledHeight(param0: android.graphics.Canvas): number;

            public getPixels(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;

            public getNinePatchChunk(): native.Array<number>;

            public hasAlpha(): boolean;

            public getScaledWidth(param0: android.util.DisplayMetrics): number;

            public static createBitmap(param0: android.graphics.Bitmap, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Matrix, param6: boolean): android.graphics.Bitmap;
            public static createBitmap(param0: android.util.DisplayMetrics, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: android.graphics.Bitmap.Config): android.graphics.Bitmap;

            public recycle(): void;

            public eraseColor(param0: number): void;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public static createBitmap(param0: native.Array<number>, param1: number, param2: number, param3: android.graphics.Bitmap.Config): android.graphics.Bitmap;

            public isMutable(): boolean;

            public getHeight(): number;

            public isRecycled(): boolean;

            public setWidth(param0: number): void;

            public compress(param0: android.graphics.Bitmap.CompressFormat, param1: number, param2: javaioOutputStream): boolean;

            public isPremultiplied(): boolean;

            public static createBitmap(param0: android.graphics.Bitmap): android.graphics.Bitmap;

            public extractAlpha(param0: android.graphics.Paint, param1: native.Array<number>): android.graphics.Bitmap;

            public static createBitmap(param0: android.util.DisplayMetrics, param1: number, param2: number, param3: android.graphics.Bitmap.Config): android.graphics.Bitmap;

            public getDensity(): number;

            public static createBitmap(param0: android.util.DisplayMetrics, param1: native.Array<number>, param2: number, param3: number, param4: android.graphics.Bitmap.Config): android.graphics.Bitmap;

            public describeContents(): number;

            public static createBitmap(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;

            public getScaledHeight(param0: number): number;

            public setPixel(param0: number, param1: number, param2: number): void;

            public setPixels(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;

            public prepareToDraw(): void;

            public setDensity(param0: number): void;

            public getConfig(): android.graphics.Bitmap.Config;

            public copyPixelsFromBuffer(param0: javanioBuffer): void;

            public copyPixelsToBuffer(param0: javanioBuffer): void;

            public static createBitmap(param0: android.graphics.Bitmap, param1: number, param2: number, param3: number, param4: number): android.graphics.Bitmap;

            public setPremultiplied(param0: boolean): void;

            public reconfigure(param0: number, param1: number, param2: android.graphics.Bitmap.Config): void;

            public getRowBytes(): number;

            public getAllocationByteCount(): number;

            public getScaledWidth(param0: android.graphics.Canvas): number;

            public getPixel(param0: number, param1: number): number;

            public static createBitmap(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Bitmap.Config): android.graphics.Bitmap;

            public getGenerationId(): number;

            public setHasMipMap(param0: boolean): void;

            public setHasAlpha(param0: boolean): void;

            public getByteCount(): number;

            public extractAlpha(): android.graphics.Bitmap;

            public sameAs(param0: android.graphics.Bitmap): boolean;

            public static createScaledBitmap(param0: android.graphics.Bitmap, param1: number, param2: number, param3: boolean): android.graphics.Bitmap;

            public getScaledWidth(param0: number): number;

            public copy(param0: android.graphics.Bitmap.Config, param1: boolean): android.graphics.Bitmap;
        }
        export module Bitmap {
            export class CompressFormat extends javalangEnum {
                public static JPEG: android.graphics.Bitmap.CompressFormat;
                public static PNG: android.graphics.Bitmap.CompressFormat;
                public static WEBP: android.graphics.Bitmap.CompressFormat;

                public static valueOf(param0: string): android.graphics.Bitmap.CompressFormat;

                public static values(): native.Array<android.graphics.Bitmap.CompressFormat>;

                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
            export class Config extends javalangEnum {
                public static ALPHA_8: android.graphics.Bitmap.Config;
                public static ARGB_4444: android.graphics.Bitmap.Config;
                public static ARGB_8888: android.graphics.Bitmap.Config;
                public static RGB_565: android.graphics.Bitmap.Config;

                public static values(): native.Array<android.graphics.Bitmap.Config>;

                public static valueOf(param0: string): android.graphics.Bitmap.Config;
                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
        }
    }
}

/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.util.TypedValue.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module graphics {
        export class BitmapFactory extends javalangObject {
            public static decodeByteArray(param0: native.Array<number>, param1: number, param2: number, param3: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;

            public static decodeFileDescriptor(param0: javaioFileDescriptor): android.graphics.Bitmap;

            public static decodeResource(param0: android.content.res.Resources, param1: number, param2: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;

            public static decodeFileDescriptor(param0: javaioFileDescriptor, param1: android.graphics.Rect, param2: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;

            public static decodeFile(param0: string): android.graphics.Bitmap;

            public static decodeResourceStream(param0: android.content.res.Resources, param1: android.util.TypedValue, param2: javaioInputStream, param3: android.graphics.Rect, param4: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;

            public static decodeByteArray(param0: native.Array<number>, param1: number, param2: number): android.graphics.Bitmap;

            public static decodeStream(param0: javaioInputStream, param1: android.graphics.Rect, param2: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;

            public static decodeResource(param0: android.content.res.Resources, param1: number): android.graphics.Bitmap;

            public static decodeStream(param0: javaioInputStream): android.graphics.Bitmap;

            public constructor();

            public static decodeFile(param0: string, param1: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;
        }
        export module BitmapFactory {
            export class Options extends javalangObject {
                public inBitmap: android.graphics.Bitmap;
                public inDensity: number;
                public inDither: boolean;
                public inInputShareable: boolean;
                public inJustDecodeBounds: boolean;
                public inMutable: boolean;
                public inPreferQualityOverSpeed: boolean;
                public inPreferredConfig: android.graphics.Bitmap.Config;
                public inPremultiplied: boolean;
                public inPurgeable: boolean;
                public inSampleSize: number;
                public inScaled: boolean;
                public inScreenDensity: number;
                public inTargetDensity: number;
                public inTempStorage: native.Array<number>;
                public mCancel: boolean;
                public outHeight: number;
                public outMimeType: string;
                public outWidth: number;

                public requestCancelDecode(): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module graphics {
        export class BitmapRegionDecoder extends javalangObject {
            public getHeight(): number;

            public static newInstance(param0: javaioInputStream, param1: boolean): android.graphics.BitmapRegionDecoder;

            public isRecycled(): boolean;

            public static newInstance(param0: native.Array<number>, param1: number, param2: number, param3: boolean): android.graphics.BitmapRegionDecoder;

            public recycle(): void;

            public static newInstance(param0: javaioFileDescriptor, param1: boolean): android.graphics.BitmapRegionDecoder;
            public static newInstance(param0: string, param1: boolean): android.graphics.BitmapRegionDecoder;

            public getWidth(): number;

            public decodeRegion(param0: android.graphics.Rect, param1: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;

            public finalize(): void;
        }
    }
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
declare module android {
    export module graphics {
        export class BitmapShader extends android.graphics.Shader {
            public constructor();
            public constructor(param0: android.graphics.Bitmap, param1: android.graphics.Shader.TileMode, param2: android.graphics.Shader.TileMode);
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module graphics {
        export class BlurMaskFilter extends android.graphics.MaskFilter {
            public constructor();
            public constructor(param0: number, param1: android.graphics.BlurMaskFilter.Blur);
        }
        export module BlurMaskFilter {
            export class Blur extends javalangEnum {
                public static INNER: android.graphics.BlurMaskFilter.Blur;
                public static NORMAL: android.graphics.BlurMaskFilter.Blur;
                public static OUTER: android.graphics.BlurMaskFilter.Blur;
                public static SOLID: android.graphics.BlurMaskFilter.Blur;

                public static values(): native.Array<android.graphics.BlurMaskFilter.Blur>;

                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
                public static valueOf(param0: string): android.graphics.BlurMaskFilter.Blur;
            }
        }
    }
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Matrix.d.ts" />
declare module android {
    export module graphics {
        export class Camera extends javalangObject {
            public setLocation(param0: number, param1: number, param2: number): void;

            public applyToCanvas(param0: android.graphics.Canvas): void;

            public save(): void;

            public restore(): void;

            public getLocationZ(): number;

            public constructor();

            public rotate(param0: number, param1: number, param2: number): void;

            public dotWithNormal(param0: number, param1: number, param2: number): number;

            public getLocationX(): number;

            public rotateY(param0: number): void;

            public translate(param0: number, param1: number, param2: number): void;

            public rotateX(param0: number): void;

            public getMatrix(param0: android.graphics.Matrix): void;

            public rotateZ(param0: number): void;

            public getLocationY(): number;

            public finalize(): void;
        }
    }
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.DrawFilter.d.ts" />
/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.graphics.Picture.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./android.graphics.Region.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module graphics {
        export class Canvas extends javalangObject {
            public static ALL_SAVE_FLAG: number;
            public static CLIP_SAVE_FLAG: number;
            public static CLIP_TO_LAYER_SAVE_FLAG: number;
            public static FULL_COLOR_LAYER_SAVE_FLAG: number;
            public static HAS_ALPHA_LAYER_SAVE_FLAG: number;
            public static MATRIX_SAVE_FLAG: number;

            public drawRoundRect(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: android.graphics.Paint): void;

            public rotate(param0: number): void;

            public drawTextRun(param0: string, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: boolean, param8: android.graphics.Paint): void;

            public isHardwareAccelerated(): boolean;

            public drawRoundRect(param0: android.graphics.RectF, param1: number, param2: number, param3: android.graphics.Paint): void;

            public drawARGB(param0: number, param1: number, param2: number, param3: number): void;

            public getWidth(): number;

            public restore(): void;

            public clipRegion(param0: android.graphics.Region, param1: android.graphics.Region.Op): boolean;

            public drawColor(param0: number, param1: android.graphics.PorterDuff.Mode): void;

            public drawBitmap(param0: android.graphics.Bitmap, param1: android.graphics.Matrix, param2: android.graphics.Paint): void;

            public drawBitmapMesh(param0: android.graphics.Bitmap, param1: number, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>, param6: number, param7: android.graphics.Paint): void;

            public drawPoint(param0: number, param1: number, param2: android.graphics.Paint): void;

            public drawPosText(param0: native.Array<string>, param1: number, param2: number, param3: native.Array<number>, param4: android.graphics.Paint): void;

            public drawText(param0: string, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Paint): void;

            public saveLayer(param0: number, param1: number, param2: number, param3: number, param4: android.graphics.Paint, param5: number): number;

            public drawPoints(param0: native.Array<number>, param1: android.graphics.Paint): void;

            public clipPath(param0: android.graphics.Path): boolean;

            public getSaveCount(): number;

            public setMatrix(param0: android.graphics.Matrix): void;

            public getClipBounds(param0: android.graphics.Rect): boolean;

            public clipRegion(param0: android.graphics.Region): boolean;

            public saveLayerAlpha(param0: number, param1: number, param2: number, param3: number, param4: number): number;

            public drawColor(param0: number): void;

            public saveLayerAlpha(param0: android.graphics.RectF, param1: number, param2: number): number;

            public drawOval(param0: android.graphics.RectF, param1: android.graphics.Paint): void;

            public drawPaint(param0: android.graphics.Paint): void;

            public constructor(param0: android.graphics.Bitmap);

            public drawText(param0: native.Array<string>, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Paint): void;

            public skew(param0: number, param1: number): void;

            public getHeight(): number;

            public drawLines(param0: native.Array<number>, param1: number, param2: number, param3: android.graphics.Paint): void;

            public drawRGB(param0: number, param1: number, param2: number): void;

            public drawArc(param0: android.graphics.RectF, param1: number, param2: number, param3: boolean, param4: android.graphics.Paint): void;

            public constructor();

            public clipRect(param0: number, param1: number, param2: number, param3: number): boolean;

            public setBitmap(param0: android.graphics.Bitmap): void;

            public clipRect(param0: number, param1: number, param2: number, param3: number, param4: android.graphics.Region.Op): boolean;

            public drawTextOnPath(param0: native.Array<string>, param1: number, param2: number, param3: android.graphics.Path, param4: number, param5: number, param6: android.graphics.Paint): void;

            public drawBitmap(param0: android.graphics.Bitmap, param1: android.graphics.Rect, param2: android.graphics.RectF, param3: android.graphics.Paint): void;

            public drawRect(param0: number, param1: number, param2: number, param3: number, param4: android.graphics.Paint): void;

            public drawVertices(param0: android.graphics.Canvas.VertexMode, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>, param5: number, param6: native.Array<number>, param7: number, param8: native.Array<number>, param9: number, param10: number, param11: android.graphics.Paint): void;

            public scale(param0: number, param1: number): void;

            public getDensity(): number;

            public save(param0: number): number;

            public clipRect(param0: android.graphics.Rect): boolean;

            public quickReject(param0: number, param1: number, param2: number, param3: number, param4: android.graphics.Canvas.EdgeType): boolean;

            public restoreToCount(param0: number): void;

            public getMatrix(): android.graphics.Matrix;

            public quickReject(param0: android.graphics.RectF, param1: android.graphics.Canvas.EdgeType): boolean;

            public saveLayer(param0: android.graphics.RectF, param1: android.graphics.Paint, param2: number): number;

            public scale(param0: number, param1: number, param2: number, param3: number): void;

            public saveLayerAlpha(param0: android.graphics.RectF, param1: number): number;

            public setDensity(param0: number): void;

            public rotate(param0: number, param1: number, param2: number): void;

            public clipRect(param0: android.graphics.Rect, param1: android.graphics.Region.Op): boolean;

            public drawLine(param0: number, param1: number, param2: number, param3: number, param4: android.graphics.Paint): void;

            public clipRect(param0: android.graphics.RectF): boolean;

            public drawOval(param0: number, param1: number, param2: number, param3: number, param4: android.graphics.Paint): void;

            public drawTextOnPath(param0: string, param1: android.graphics.Path, param2: number, param3: number, param4: android.graphics.Paint): void;

            public saveLayer(param0: android.graphics.RectF, param1: android.graphics.Paint): number;

            public drawPicture(param0: android.graphics.Picture, param1: android.graphics.RectF): void;

            public translate(param0: number, param1: number): void;

            public getMatrix(param0: android.graphics.Matrix): void;

            public drawCircle(param0: number, param1: number, param2: number, param3: android.graphics.Paint): void;

            public getMaximumBitmapHeight(): number;

            public save(): number;

            public getDrawFilter(): android.graphics.DrawFilter;

            public isOpaque(): boolean;

            public drawLines(param0: native.Array<number>, param1: android.graphics.Paint): void;

            public drawPosText(param0: string, param1: native.Array<number>, param2: android.graphics.Paint): void;

            public drawBitmap(param0: android.graphics.Bitmap, param1: android.graphics.Rect, param2: android.graphics.Rect, param3: android.graphics.Paint): void;

            public concat(param0: android.graphics.Matrix): void;

            public clipRect(param0: android.graphics.RectF, param1: android.graphics.Region.Op): boolean;

            public getClipBounds(): android.graphics.Rect;

            public drawRect(param0: android.graphics.Rect, param1: android.graphics.Paint): void;

            public saveLayer(param0: number, param1: number, param2: number, param3: number, param4: android.graphics.Paint): number;

            public drawArc(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: boolean, param7: android.graphics.Paint): void;

            public drawBitmap(param0: android.graphics.Bitmap, param1: number, param2: number, param3: android.graphics.Paint): void;
            public drawBitmap(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: boolean, param8: android.graphics.Paint): void;

            public drawPicture(param0: android.graphics.Picture, param1: android.graphics.Rect): void;

            public saveLayerAlpha(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): number;

            public drawText(param0: string, param1: number, param2: number, param3: android.graphics.Paint): void;

            public drawPicture(param0: android.graphics.Picture): void;

            public quickReject(param0: android.graphics.Path, param1: android.graphics.Canvas.EdgeType): boolean;

            public drawPoints(param0: native.Array<number>, param1: number, param2: number, param3: android.graphics.Paint): void;

            public getMaximumBitmapWidth(): number;

            public drawTextRun(param0: native.Array<string>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: boolean, param8: android.graphics.Paint): void;

            public drawPath(param0: android.graphics.Path, param1: android.graphics.Paint): void;

            public drawRect(param0: android.graphics.RectF, param1: android.graphics.Paint): void;

            public setDrawFilter(param0: android.graphics.DrawFilter): void;

            public clipPath(param0: android.graphics.Path, param1: android.graphics.Region.Op): boolean;
        }
        export module Canvas {
            export class EdgeType extends javalangEnum {
                public static AA: android.graphics.Canvas.EdgeType;
                public static BW: android.graphics.Canvas.EdgeType;

                public static values(): native.Array<android.graphics.Canvas.EdgeType>;

                public static valueOf(param0: string): android.graphics.Canvas.EdgeType;
                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
            export class VertexMode extends javalangEnum {
                public static TRIANGLES: android.graphics.Canvas.VertexMode;
                public static TRIANGLE_FAN: android.graphics.Canvas.VertexMode;
                public static TRIANGLE_STRIP: android.graphics.Canvas.VertexMode;

                public static values(): native.Array<android.graphics.Canvas.VertexMode>;

                public static valueOf(param0: string): android.graphics.Canvas.VertexMode;
                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module graphics {
        export class Color extends javalangObject {
            public static BLACK: number;
            public static BLUE: number;
            public static CYAN: number;
            public static DKGRAY: number;
            public static GRAY: number;
            public static GREEN: number;
            public static LTGRAY: number;
            public static MAGENTA: number;
            public static RED: number;
            public static TRANSPARENT: number;
            public static WHITE: number;
            public static YELLOW: number;

            public static alpha(param0: number): number;

            public static blue(param0: number): number;

            public static parseColor(param0: string): number;

            public static colorToHSV(param0: number, param1: native.Array<number>): void;

            public static HSVToColor(param0: number, param1: native.Array<number>): number;

            public static green(param0: number): number;

            public static rgb(param0: number, param1: number, param2: number): number;

            public static HSVToColor(param0: native.Array<number>): number;

            public static RGBToHSV(param0: number, param1: number, param2: number, param3: native.Array<number>): void;

            public static argb(param0: number, param1: number, param2: number, param3: number): number;

            public constructor();

            public static red(param0: number): number;
        }
    }
}

declare module android {
    export module graphics {
        export class ColorFilter extends javalangObject {
            public constructor();

            public finalize(): void;
        }
    }
}

declare module android {
    export module graphics {
        export class ColorMatrix extends javalangObject {
            public setConcat(param0: android.graphics.ColorMatrix, param1: android.graphics.ColorMatrix): void;

            public constructor();
            public constructor(param0: native.Array<number>);

            public setScale(param0: number, param1: number, param2: number, param3: number): void;

            public getArray(): native.Array<number>;

            public setSaturation(param0: number): void;

            public preConcat(param0: android.graphics.ColorMatrix): void;

            public set(param0: native.Array<number>): void;

            public setRGB2YUV(): void;

            public constructor(param0: android.graphics.ColorMatrix);

            public setRotate(param0: number, param1: number): void;

            public reset(): void;

            public set(param0: android.graphics.ColorMatrix): void;

            public postConcat(param0: android.graphics.ColorMatrix): void;

            public setYUV2RGB(): void;
        }
    }
}

/// <reference path="./android.graphics.ColorMatrix.d.ts" />
declare module android {
    export module graphics {
        export class ColorMatrixColorFilter extends android.graphics.ColorFilter {
            public constructor(param0: android.graphics.ColorMatrix);
            public constructor();
            public constructor(param0: native.Array<number>);
        }
    }
}

/// <reference path="./android.graphics.PathEffect.d.ts" />
declare module android {
    export module graphics {
        export class ComposePathEffect extends android.graphics.PathEffect {
            public constructor();
            public constructor(param0: android.graphics.PathEffect, param1: android.graphics.PathEffect);
        }
    }
}

/// <reference path="./android.graphics.Shader.d.ts" />
/// <reference path="./android.graphics.Xfermode.d.ts" />
declare module android {
    export module graphics {
        export class ComposeShader extends android.graphics.Shader {
            public constructor(param0: android.graphics.Shader, param1: android.graphics.Shader, param2: android.graphics.Xfermode);
            public constructor(param0: android.graphics.Shader, param1: android.graphics.Shader, param2: android.graphics.PorterDuff.Mode);
            public constructor();
        }
    }
}

declare module android {
    export module graphics {
        export class CornerPathEffect extends android.graphics.PathEffect {
            public constructor(param0: number);
            public constructor();
        }
    }
}

declare module android {
    export module graphics {
        export class DashPathEffect extends android.graphics.PathEffect {
            public constructor();
            public constructor(param0: native.Array<number>, param1: number);
        }
    }
}

declare module android {
    export module graphics {
        export class DiscretePathEffect extends android.graphics.PathEffect {
            public constructor();
            public constructor(param0: number, param1: number);
        }
    }
}

declare module android {
    export module graphics {
        export class DrawFilter extends javalangObject {
            public constructor();

            public finalize(): void;
        }
    }
}

declare module android {
    export module graphics {
        export class EmbossMaskFilter extends android.graphics.MaskFilter {
            public constructor(param0: native.Array<number>, param1: number, param2: number, param3: number);
            public constructor();
        }
    }
}

declare module android {
    export module graphics {
        export class ImageFormat extends javalangObject {
            public static DEPTH16: number;
            public static DEPTH_POINT_CLOUD: number;
            public static FLEX_RGBA_8888: number;
            public static FLEX_RGB_888: number;
            public static JPEG: number;
            public static NV16: number;
            public static NV21: number;
            public static PRIVATE: number;
            public static RAW10: number;
            public static RAW12: number;
            public static RAW_SENSOR: number;
            public static RGB_565: number;
            public static UNKNOWN: number;
            public static YUV_420_888: number;
            public static YUV_422_888: number;
            public static YUV_444_888: number;
            public static YUY2: number;
            public static YV12: number;

            public static getBitsPerPixel(param0: number): number;

            public constructor();
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module graphics {
        export class Interpolator extends javalangObject {
            public getKeyFrameCount(): number;

            public setKeyFrame(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>): void;

            public reset(param0: number): void;

            public setRepeatMirror(param0: number, param1: boolean): void;

            public reset(param0: number, param1: number): void;

            public getValueCount(): number;

            public constructor(param0: number);

            public setKeyFrame(param0: number, param1: number, param2: native.Array<number>): void;

            public timeToValues(param0: number, param1: native.Array<number>): android.graphics.Interpolator.Result;
            public timeToValues(param0: native.Array<number>): android.graphics.Interpolator.Result;

            public constructor(param0: number, param1: number);

            public finalize(): void;
        }
        export module Interpolator {
            export class Result extends javalangEnum {
                public static FREEZE_END: android.graphics.Interpolator.Result;
                public static FREEZE_START: android.graphics.Interpolator.Result;
                public static NORMAL: android.graphics.Interpolator.Result;

                public static values(): native.Array<android.graphics.Interpolator.Result>;

                public static valueOf(param0: string): android.graphics.Interpolator.Result;
                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
        }
    }
}

/// <reference path="./android.graphics.Paint.d.ts" />
declare module android {
    export module graphics {
        export class LayerRasterizer extends android.graphics.Rasterizer {
            public constructor();

            public addLayer(param0: android.graphics.Paint): void;
            public addLayer(param0: android.graphics.Paint, param1: number, param2: number): void;
        }
    }
}

declare module android {
    export module graphics {
        export class LightingColorFilter extends android.graphics.ColorFilter {
            public constructor();
            public constructor(param0: number, param1: number);
        }
    }
}

declare module android {
    export module graphics {
        export class LinearGradient extends android.graphics.Shader {
            public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: android.graphics.Shader.TileMode);
            public constructor();
            public constructor(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>, param5: native.Array<number>, param6: android.graphics.Shader.TileMode);
        }
    }
}

declare module android {
    export module graphics {
        export class MaskFilter extends javalangObject {
            public constructor();

            public finalize(): void;
        }
    }
}

/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module graphics {
        export class Matrix extends javalangObject {
            public static MPERSP_0: number;
            public static MPERSP_1: number;
            public static MPERSP_2: number;
            public static MSCALE_X: number;
            public static MSCALE_Y: number;
            public static MSKEW_X: number;
            public static MSKEW_Y: number;
            public static MTRANS_X: number;
            public static MTRANS_Y: number;

            public setRotate(param0: number, param1: number, param2: number): void;

            public getValues(param0: native.Array<number>): void;

            public setScale(param0: number, param1: number): void;

            public mapRect(param0: android.graphics.RectF): boolean;

            public equals(param0: javalangObject): boolean;

            public preScale(param0: number, param1: number, param2: number, param3: number): boolean;

            public setScale(param0: number, param1: number, param2: number, param3: number): void;

            public setConcat(param0: android.graphics.Matrix, param1: android.graphics.Matrix): boolean;

            public postSkew(param0: number, param1: number): boolean;

            public setRotate(param0: number): void;

            public postScale(param0: number, param1: number): boolean;

            public preSkew(param0: number, param1: number, param2: number, param3: number): boolean;

            public postScale(param0: number, param1: number, param2: number, param3: number): boolean;

            public mapPoints(param0: native.Array<number>, param1: native.Array<number>): void;

            public preScale(param0: number, param1: number): boolean;

            public mapVectors(param0: native.Array<number>, param1: native.Array<number>): void;

            public mapRect(param0: android.graphics.RectF, param1: android.graphics.RectF): boolean;

            public setPolyToPoly(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: number): boolean;

            public postRotate(param0: number, param1: number, param2: number): boolean;

            public preConcat(param0: android.graphics.Matrix): boolean;

            public mapRadius(param0: number): number;

            public constructor();

            public set(param0: android.graphics.Matrix): void;

            public preRotate(param0: number): boolean;

            public postTranslate(param0: number, param1: number): boolean;

            public setSinCos(param0: number, param1: number, param2: number, param3: number): void;

            public rectStaysRect(): boolean;

            public mapVectors(param0: native.Array<number>): void;

            public preSkew(param0: number, param1: number): boolean;

            public isAffine(): boolean;

            public mapPoints(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: number): void;

            public setSkew(param0: number, param1: number): void;

            public postRotate(param0: number): boolean;

            public setSinCos(param0: number, param1: number): void;

            public reset(): void;

            public finalize(): void;

            public toShortString(): string;

            public setTranslate(param0: number, param1: number): void;

            public postConcat(param0: android.graphics.Matrix): boolean;

            public setRectToRect(param0: android.graphics.RectF, param1: android.graphics.RectF, param2: android.graphics.Matrix.ScaleToFit): boolean;

            public postSkew(param0: number, param1: number, param2: number, param3: number): boolean;

            public setSkew(param0: number, param1: number, param2: number, param3: number): void;

            public isIdentity(): boolean;

            public toString(): string;

            public preRotate(param0: number, param1: number, param2: number): boolean;

            public constructor(param0: android.graphics.Matrix);

            public mapVectors(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: number): void;

            public preTranslate(param0: number, param1: number): boolean;

            public setValues(param0: native.Array<number>): void;

            public invert(param0: android.graphics.Matrix): boolean;

            public mapPoints(param0: native.Array<number>): void;

            public hashCode(): number;
        }
        export module Matrix {
            export class ScaleToFit extends javalangEnum {
                public static CENTER: android.graphics.Matrix.ScaleToFit;
                public static END: android.graphics.Matrix.ScaleToFit;
                public static FILL: android.graphics.Matrix.ScaleToFit;
                public static START: android.graphics.Matrix.ScaleToFit;

                public static values(): native.Array<android.graphics.Matrix.ScaleToFit>;

                public static valueOf(param0: string): android.graphics.Matrix.ScaleToFit;
                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
        }
    }
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module graphics {
        export class Movie extends javalangObject {
            public static decodeByteArray(param0: native.Array<number>, param1: number, param2: number): android.graphics.Movie;

            public static decodeFile(param0: string): android.graphics.Movie;

            public static decodeStream(param0: javaioInputStream): android.graphics.Movie;

            public duration(): number;

            public setTime(param0: number): boolean;

            public draw(param0: android.graphics.Canvas, param1: number, param2: number): void;

            public width(): number;

            public height(): number;

            public draw(param0: android.graphics.Canvas, param1: number, param2: number, param3: android.graphics.Paint): void;

            public finalize(): void;

            public isOpaque(): boolean;
        }
    }
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./android.graphics.Region.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module graphics {
        export class NinePatch extends javalangObject {
            public getTransparentRegion(param0: android.graphics.Rect): android.graphics.Region;

            public getHeight(): number;

            public getPaint(): android.graphics.Paint;

            public getWidth(): number;

            public constructor(param0: android.graphics.Bitmap, param1: native.Array<number>);

            public getBitmap(): android.graphics.Bitmap;

            public draw(param0: android.graphics.Canvas, param1: android.graphics.RectF): void;

            public hasAlpha(): boolean;

            public draw(param0: android.graphics.Canvas, param1: android.graphics.Rect): void;
            public draw(param0: android.graphics.Canvas, param1: android.graphics.Rect, param2: android.graphics.Paint): void;

            public getName(): string;

            public constructor(param0: android.graphics.Bitmap, param1: native.Array<number>, param2: string);

            public setPaint(param0: android.graphics.Paint): void;

            public getDensity(): number;

            public static isNinePatchChunk(param0: native.Array<number>): boolean;

            public finalize(): void;
        }
    }
}

/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
declare module android {
    export module graphics {
        export class Outline extends javalangObject {
            public setAlpha(param0: number): void;

            public setRect(param0: android.graphics.Rect): void;

            public setEmpty(): void;

            public setRoundRect(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public setOval(param0: android.graphics.Rect): void;

            public isEmpty(): boolean;

            public setRoundRect(param0: android.graphics.Rect, param1: number): void;

            public offset(param0: number, param1: number): void;

            public getAlpha(): number;

            public setRect(param0: number, param1: number, param2: number, param3: number): void;

            public constructor();

            public canClip(): boolean;

            public setConvexPath(param0: android.graphics.Path): void;

            public setOval(param0: number, param1: number, param2: number, param3: number): void;

            public set(param0: android.graphics.Outline): void;

            public constructor(param0: android.graphics.Outline);
        }
    }
}

/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.MaskFilter.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.graphics.PathEffect.d.ts" />
/// <reference path="./android.graphics.Rasterizer.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.Shader.d.ts" />
/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./android.graphics.Xfermode.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module android {
    export module graphics {
        export class Paint extends javalangObject {
            public static ANTI_ALIAS_FLAG: number;
            public static DEV_KERN_TEXT_FLAG: number;
            public static DITHER_FLAG: number;
            public static EMBEDDED_BITMAP_TEXT_FLAG: number;
            public static FAKE_BOLD_TEXT_FLAG: number;
            public static FILTER_BITMAP_FLAG: number;
            public static HINTING_OFF: number;
            public static HINTING_ON: number;
            public static LINEAR_TEXT_FLAG: number;
            public static STRIKE_THRU_TEXT_FLAG: number;
            public static SUBPIXEL_TEXT_FLAG: number;
            public static UNDERLINE_TEXT_FLAG: number;

            public breakText(param0: string, param1: boolean, param2: number, param3: native.Array<number>): number;

            public getAlpha(): number;

            public getOffsetForAdvance(param0: string, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: number): number;

            public getStyle(): android.graphics.Paint.Style;

            public setTextScaleX(param0: number): void;

            public getOffsetForAdvance(param0: native.Array<string>, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: number): number;

            public setStrokeMiter(param0: number): void;

            public isElegantTextHeight(): boolean;

            public getRasterizer(): android.graphics.Rasterizer;

            public setSubpixelText(param0: boolean): void;

            public isFakeBoldText(): boolean;

            public setARGB(param0: number, param1: number, param2: number, param3: number): void;

            public setMaskFilter(param0: android.graphics.MaskFilter): android.graphics.MaskFilter;

            public measureText(param0: string): number;

            public setLinearText(param0: boolean): void;

            public hasGlyph(param0: string): boolean;

            public setStrikeThruText(param0: boolean): void;

            public constructor(param0: number);
            public constructor();

            public getTextSize(): number;

            public getTextBounds(param0: string, param1: number, param2: number, param3: android.graphics.Rect): void;

            public isSubpixelText(): boolean;

            public clearShadowLayer(): void;

            public setPathEffect(param0: android.graphics.PathEffect): android.graphics.PathEffect;

            public isAntiAlias(): boolean;

            public setStrokeJoin(param0: android.graphics.Paint.Join): void;

            public getTextWidths(param0: native.Array<string>, param1: number, param2: number, param3: native.Array<number>): number;

            public getTextScaleX(): number;

            public getTextPath(param0: native.Array<string>, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Path): void;

            public getStrokeJoin(): android.graphics.Paint.Join;

            public getColor(): number;

            public getShader(): android.graphics.Shader;

            public measureText(param0: string, param1: number, param2: number): number;

            public getRunAdvance(param0: string, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: number): number;

            public setStrokeWidth(param0: number): void;

            public getFontMetrics(param0: android.graphics.Paint.FontMetrics): number;

            public setStrokeCap(param0: android.graphics.Paint.Cap): void;

            public getTextBounds(param0: native.Array<string>, param1: number, param2: number, param3: android.graphics.Rect): void;

            public setFlags(param0: number): void;

            public isDither(): boolean;

            public getTypeface(): android.graphics.Typeface;

            public getTextWidths(param0: string, param1: number, param2: number, param3: native.Array<number>): number;

            public measureText(param0: native.Array<string>, param1: number, param2: number): number;

            public setAlpha(param0: number): void;

            public setTextAlign(param0: android.graphics.Paint.Align): void;

            public setColor(param0: number): void;

            public setFilterBitmap(param0: boolean): void;

            public getFontMetrics(): android.graphics.Paint.FontMetrics;

            public getFontMetricsInt(param0: android.graphics.Paint.FontMetricsInt): number;

            public getFontFeatureSettings(): string;

            public setUnderlineText(param0: boolean): void;

            public setStyle(param0: android.graphics.Paint.Style): void;

            public getStrokeMiter(): number;

            public setRasterizer(param0: android.graphics.Rasterizer): android.graphics.Rasterizer;

            public getMaskFilter(): android.graphics.MaskFilter;

            public setDither(param0: boolean): void;

            public set(param0: android.graphics.Paint): void;

            public setTextSkewX(param0: number): void;

            public getColorFilter(): android.graphics.ColorFilter;

            public getTextAlign(): android.graphics.Paint.Align;

            public breakText(param0: string, param1: number, param2: number, param3: boolean, param4: number, param5: native.Array<number>): number;

            public getFontMetricsInt(): android.graphics.Paint.FontMetricsInt;

            public setAntiAlias(param0: boolean): void;

            public breakText(param0: native.Array<string>, param1: number, param2: number, param3: number, param4: native.Array<number>): number;

            public getTextPath(param0: string, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Path): void;

            public ascent(): number;

            public getTextLocale(): javautilLocale;

            public getFillPath(param0: android.graphics.Path, param1: android.graphics.Path): boolean;

            public constructor(param0: android.graphics.Paint);

            public getStrokeWidth(): number;

            public getFlags(): number;

            public isUnderlineText(): boolean;

            public isFilterBitmap(): boolean;

            public getRunAdvance(param0: native.Array<string>, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: number): number;

            public isLinearText(): boolean;

            public setFontFeatureSettings(param0: string): void;

            public isStrikeThruText(): boolean;

            public setLetterSpacing(param0: number): void;

            public setHinting(param0: number): void;

            public getStrokeCap(): android.graphics.Paint.Cap;

            public setXfermode(param0: android.graphics.Xfermode): android.graphics.Xfermode;

            public setTextSize(param0: number): void;

            public setShader(param0: android.graphics.Shader): android.graphics.Shader;

            public descent(): number;

            public setShadowLayer(param0: number, param1: number, param2: number, param3: number): void;

            public getFontSpacing(): number;

            public setTypeface(param0: android.graphics.Typeface): android.graphics.Typeface;

            public reset(): void;

            public getLetterSpacing(): number;

            public finalize(): void;

            public getTextWidths(param0: string, param1: native.Array<number>): number;

            public setFakeBoldText(param0: boolean): void;

            public setColorFilter(param0: android.graphics.ColorFilter): android.graphics.ColorFilter;

            public getTextSkewX(): number;

            public getPathEffect(): android.graphics.PathEffect;

            public getHinting(): number;

            public setElegantTextHeight(param0: boolean): void;

            public getXfermode(): android.graphics.Xfermode;

            public setTextLocale(param0: javautilLocale): void;
        }
        export module Paint {
            export class Align extends javalangEnum {
                public static CENTER: android.graphics.Paint.Align;
                public static LEFT: android.graphics.Paint.Align;
                public static RIGHT: android.graphics.Paint.Align;

                public static valueOf(param0: string): android.graphics.Paint.Align;

                public static values(): native.Array<android.graphics.Paint.Align>;

                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
            export class Cap extends javalangEnum {
                public static BUTT: android.graphics.Paint.Cap;
                public static ROUND: android.graphics.Paint.Cap;
                public static SQUARE: android.graphics.Paint.Cap;

                public static values(): native.Array<android.graphics.Paint.Cap>;

                public static valueOf(param0: string): android.graphics.Paint.Cap;
                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
            export class FontMetrics extends javalangObject {
                public ascent: number;
                public bottom: number;
                public descent: number;
                public leading: number;
                public top: number;

                public constructor();
            }
            export class FontMetricsInt extends javalangObject {
                public ascent: number;
                public bottom: number;
                public descent: number;
                public leading: number;
                public top: number;

                public toString(): string;

                public constructor();
            }
            export class Join extends javalangEnum {
                public static BEVEL: android.graphics.Paint.Join;
                public static MITER: android.graphics.Paint.Join;
                public static ROUND: android.graphics.Paint.Join;

                public static values(): native.Array<android.graphics.Paint.Join>;

                public static valueOf(param0: string): android.graphics.Paint.Join;
                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
            export class Style extends javalangEnum {
                public static FILL: android.graphics.Paint.Style;
                public static FILL_AND_STROKE: android.graphics.Paint.Style;
                public static STROKE: android.graphics.Paint.Style;

                public static valueOf(param0: string): android.graphics.Paint.Style;

                public static values(): native.Array<android.graphics.Paint.Style>;

                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
        }
    }
}

declare module android {
    export module graphics {
        export class PaintFlagsDrawFilter extends android.graphics.DrawFilter {
            public constructor();
            public constructor(param0: number, param1: number);
        }
    }
}

/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module graphics {
        export class Path extends javalangObject {
            public addRoundRect(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: android.graphics.Path.Direction): void;

            public isRect(param0: android.graphics.RectF): boolean;

            public addArc(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

            public isConvex(): boolean;

            public rMoveTo(param0: number, param1: number): void;

            public arcTo(param0: android.graphics.RectF, param1: number, param2: number, param3: boolean): void;

            public offset(param0: number, param1: number): void;

            public rCubicTo(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

            public rQuadTo(param0: number, param1: number, param2: number, param3: number): void;

            public addOval(param0: number, param1: number, param2: number, param3: number, param4: android.graphics.Path.Direction): void;

            public addRoundRect(param0: android.graphics.RectF, param1: number, param2: number, param3: android.graphics.Path.Direction): void;

            public offset(param0: number, param1: number, param2: android.graphics.Path): void;

            public addPath(param0: android.graphics.Path, param1: android.graphics.Matrix): void;
            public addPath(param0: android.graphics.Path, param1: number, param2: number): void;

            public arcTo(param0: android.graphics.RectF, param1: number, param2: number): void;

            public rLineTo(param0: number, param1: number): void;

            public lineTo(param0: number, param1: number): void;

            public quadTo(param0: number, param1: number, param2: number, param3: number): void;

            public transform(param0: android.graphics.Matrix, param1: android.graphics.Path): void;

            public reset(): void;

            public addArc(param0: android.graphics.RectF, param1: number, param2: number): void;

            public addPath(param0: android.graphics.Path): void;

            public close(): void;

            public addCircle(param0: number, param1: number, param2: number, param3: android.graphics.Path.Direction): void;

            public op(param0: android.graphics.Path, param1: android.graphics.Path.Op): boolean;

            public rewind(): void;

            public setLastPoint(param0: number, param1: number): void;

            public finalize(): void;

            public toggleInverseFillType(): void;

            public moveTo(param0: number, param1: number): void;

            public transform(param0: android.graphics.Matrix): void;

            public arcTo(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: boolean): void;

            public setFillType(param0: android.graphics.Path.FillType): void;

            public isEmpty(): boolean;

            public addRoundRect(param0: android.graphics.RectF, param1: native.Array<number>, param2: android.graphics.Path.Direction): void;

            public cubicTo(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

            public constructor();

            public incReserve(param0: number): void;

            public getFillType(): android.graphics.Path.FillType;

            public addRect(param0: number, param1: number, param2: number, param3: number, param4: android.graphics.Path.Direction): void;

            public addOval(param0: android.graphics.RectF, param1: android.graphics.Path.Direction): void;

            public constructor(param0: android.graphics.Path);

            public addRect(param0: android.graphics.RectF, param1: android.graphics.Path.Direction): void;

            public isInverseFillType(): boolean;

            public addRoundRect(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>, param5: android.graphics.Path.Direction): void;

            public op(param0: android.graphics.Path, param1: android.graphics.Path, param2: android.graphics.Path.Op): boolean;

            public computeBounds(param0: android.graphics.RectF, param1: boolean): void;

            public set(param0: android.graphics.Path): void;
        }
        export module Path {
            export class Direction extends javalangEnum {
                public static CCW: android.graphics.Path.Direction;
                public static CW: android.graphics.Path.Direction;

                public static values(): native.Array<android.graphics.Path.Direction>;

                public static valueOf(param0: string): android.graphics.Path.Direction;
                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
            export class FillType extends javalangEnum {
                public static EVEN_ODD: android.graphics.Path.FillType;
                public static INVERSE_EVEN_ODD: android.graphics.Path.FillType;
                public static INVERSE_WINDING: android.graphics.Path.FillType;
                public static WINDING: android.graphics.Path.FillType;

                public static valueOf(param0: string): android.graphics.Path.FillType;

                public static values(): native.Array<android.graphics.Path.FillType>;

                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
            export class Op extends javalangEnum {
                public static DIFFERENCE: android.graphics.Path.Op;
                public static INTERSECT: android.graphics.Path.Op;
                public static REVERSE_DIFFERENCE: android.graphics.Path.Op;
                public static UNION: android.graphics.Path.Op;
                public static XOR: android.graphics.Path.Op;

                public static valueOf(param0: string): android.graphics.Path.Op;

                public static values(): native.Array<android.graphics.Path.Op>;

                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
        }
    }
}

/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module graphics {
        export class PathDashPathEffect extends android.graphics.PathEffect {
            public constructor();
            public constructor(param0: android.graphics.Path, param1: number, param2: number, param3: android.graphics.PathDashPathEffect.Style);
        }
        export module PathDashPathEffect {
            export class Style extends javalangEnum {
                public static MORPH: android.graphics.PathDashPathEffect.Style;
                public static ROTATE: android.graphics.PathDashPathEffect.Style;
                public static TRANSLATE: android.graphics.PathDashPathEffect.Style;

                public static valueOf(param0: string): android.graphics.PathDashPathEffect.Style;

                public static values(): native.Array<android.graphics.PathDashPathEffect.Style>;

                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
        }
    }
}

declare module android {
    export module graphics {
        export class PathEffect extends javalangObject {
            public constructor();

            public finalize(): void;
        }
    }
}

/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
declare module android {
    export module graphics {
        export class PathMeasure extends javalangObject {
            public static POSITION_MATRIX_FLAG: number;
            public static TANGENT_MATRIX_FLAG: number;

            public isClosed(): boolean;

            public setPath(param0: android.graphics.Path, param1: boolean): void;

            public getMatrix(param0: number, param1: android.graphics.Matrix, param2: number): boolean;

            public getLength(): number;

            public constructor();

            public getPosTan(param0: number, param1: native.Array<number>, param2: native.Array<number>): boolean;

            public nextContour(): boolean;

            public constructor(param0: android.graphics.Path, param1: boolean);

            public finalize(): void;

            public getSegment(param0: number, param1: number, param2: android.graphics.Path, param3: boolean): boolean;
        }
    }
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
declare module android {
    export module graphics {
        export class Picture extends javalangObject {
            public writeToStream(param0: javaioOutputStream): void;

            public beginRecording(param0: number, param1: number): android.graphics.Canvas;

            public getHeight(): number;

            public constructor(param0: android.graphics.Picture);

            public getWidth(): number;

            public constructor();

            public endRecording(): void;

            public finalize(): void;

            public draw(param0: android.graphics.Canvas): void;

            public static createFromStream(param0: javaioInputStream): android.graphics.Picture;
        }
    }
}

declare module android {
    export module graphics {
        export class PixelFormat extends javalangObject {
            public static A_8: number;
            public static JPEG: number;
            public static LA_88: number;
            public static L_8: number;
            public static OPAQUE: number;
            public static RGBA_4444: number;
            public static RGBA_5551: number;
            public static RGBA_8888: number;
            public static RGBX_8888: number;
            public static RGB_332: number;
            public static RGB_565: number;
            public static RGB_888: number;
            public static TRANSLUCENT: number;
            public static TRANSPARENT: number;
            public static UNKNOWN: number;
            public static YCbCr_420_SP: number;
            public static YCbCr_422_I: number;
            public static YCbCr_422_SP: number;
            public bitsPerPixel: number;
            public bytesPerPixel: number;

            public static formatHasAlpha(param0: number): boolean;

            public constructor();

            public static getPixelFormatInfo(param0: number, param1: android.graphics.PixelFormat): void;
        }
    }
}

declare module android {
    export module graphics {
        export class PixelXorXfermode extends android.graphics.Xfermode {
            public constructor(param0: number);
            public constructor();
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module graphics {
        export class Point extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public x: number;
            public y: number;

            public offset(param0: number, param1: number): void;

            public equals(param0: javalangObject): boolean;
            public equals(param0: number, param1: number): boolean;

            public constructor();

            public set(param0: number, param1: number): void;

            public readFromParcel(param0: android.os.Parcel): void;

            public constructor(param0: android.graphics.Point);

            public negate(): void;

            public toString(): string;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public constructor(param0: number, param1: number);

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module graphics {
        export class PointF extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public x: number;
            public y: number;

            public offset(param0: number, param1: number): void;

            public equals(param0: javalangObject): boolean;
            public equals(param0: number, param1: number): boolean;

            public length(): number;

            public constructor();

            public set(param0: number, param1: number): void;

            public readFromParcel(param0: android.os.Parcel): void;

            public constructor(param0: android.graphics.Point);

            public static length(param0: number, param1: number): number;

            public negate(): void;

            public toString(): string;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public set(param0: android.graphics.PointF): void;

            public constructor(param0: number, param1: number);

            public hashCode(): number;
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module graphics {
        export class PorterDuff extends javalangObject {
            public constructor();
        }
        export module PorterDuff {
            export class Mode extends javalangEnum {
                public static ADD: android.graphics.PorterDuff.Mode;
                public static CLEAR: android.graphics.PorterDuff.Mode;
                public static DARKEN: android.graphics.PorterDuff.Mode;
                public static DST: android.graphics.PorterDuff.Mode;
                public static DST_ATOP: android.graphics.PorterDuff.Mode;
                public static DST_IN: android.graphics.PorterDuff.Mode;
                public static DST_OUT: android.graphics.PorterDuff.Mode;
                public static DST_OVER: android.graphics.PorterDuff.Mode;
                public static LIGHTEN: android.graphics.PorterDuff.Mode;
                public static MULTIPLY: android.graphics.PorterDuff.Mode;
                public static OVERLAY: android.graphics.PorterDuff.Mode;
                public static SCREEN: android.graphics.PorterDuff.Mode;
                public static SRC: android.graphics.PorterDuff.Mode;
                public static SRC_ATOP: android.graphics.PorterDuff.Mode;
                public static SRC_IN: android.graphics.PorterDuff.Mode;
                public static SRC_OUT: android.graphics.PorterDuff.Mode;
                public static SRC_OVER: android.graphics.PorterDuff.Mode;
                public static XOR: android.graphics.PorterDuff.Mode;

                public static valueOf(param0: string): android.graphics.PorterDuff.Mode;
                public static valueOf(param0: javalangClass, param1: string): javalangEnum;

                public static values(): native.Array<android.graphics.PorterDuff.Mode>;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module graphics {
        export class PorterDuffColorFilter extends android.graphics.ColorFilter {
            public constructor(param0: number, param1: android.graphics.PorterDuff.Mode);

            public equals(param0: javalangObject): boolean;

            public constructor();

            public hashCode(): number;
        }
    }
}

declare module android {
    export module graphics {
        export class PorterDuffXfermode extends android.graphics.Xfermode {
            public constructor();
            public constructor(param0: android.graphics.PorterDuff.Mode);
        }
    }
}

declare module android {
    export module graphics {
        export class RadialGradient extends android.graphics.Shader {
            public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Shader.TileMode);
            public constructor(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: native.Array<number>, param5: android.graphics.Shader.TileMode);
            public constructor();
        }
    }
}

declare module android {
    export module graphics {
        export class Rasterizer extends javalangObject {
            public constructor();

            public finalize(): void;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module graphics {
        export class Rect extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public bottom: number;
            public left: number;
            public right: number;
            public top: number;

            public setEmpty(): void;

            public static intersects(param0: android.graphics.Rect, param1: android.graphics.Rect): boolean;

            public offset(param0: number, param1: number): void;

            public equals(param0: javalangObject): boolean;

            public centerX(): number;

            public exactCenterX(): number;

            public set(param0: android.graphics.Rect): void;
            public set(param0: number, param1: number, param2: number, param3: number): void;

            public constructor(param0: number, param1: number, param2: number, param3: number);

            public union(param0: number, param1: number, param2: number, param3: number): void;

            public readFromParcel(param0: android.os.Parcel): void;

            public inset(param0: number, param1: number): void;

            public union(param0: number, param1: number): void;

            public sort(): void;

            public offsetTo(param0: number, param1: number): void;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public height(): number;

            public union(param0: android.graphics.Rect): void;

            public flattenToString(): string;

            public setIntersect(param0: android.graphics.Rect, param1: android.graphics.Rect): boolean;

            public static unflattenFromString(param0: string): android.graphics.Rect;

            public isEmpty(): boolean;

            public width(): number;

            public constructor(param0: android.graphics.Rect);

            public toShortString(): string;

            public exactCenterY(): number;

            public constructor();

            public contains(param0: number, param1: number, param2: number, param3: number): boolean;

            public toString(): string;

            public centerY(): number;

            public describeContents(): number;

            public contains(param0: android.graphics.Rect): boolean;

            public intersect(param0: android.graphics.Rect): boolean;

            public intersects(param0: number, param1: number, param2: number, param3: number): boolean;

            public contains(param0: number, param1: number): boolean;

            public hashCode(): number;

            public intersect(param0: number, param1: number, param2: number, param3: number): boolean;
        }
    }
}

/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module graphics {
        export class RectF extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public bottom: number;
            public left: number;
            public right: number;
            public top: number;

            public setEmpty(): void;

            public offset(param0: number, param1: number): void;

            public equals(param0: javalangObject): boolean;

            public centerX(): number;

            public set(param0: android.graphics.Rect): void;

            public constructor(param0: android.graphics.RectF);

            public set(param0: number, param1: number, param2: number, param3: number): void;

            public union(param0: android.graphics.RectF): void;

            public round(param0: android.graphics.Rect): void;

            public constructor(param0: number, param1: number, param2: number, param3: number);

            public union(param0: number, param1: number, param2: number, param3: number): void;

            public readFromParcel(param0: android.os.Parcel): void;

            public inset(param0: number, param1: number): void;

            public union(param0: number, param1: number): void;

            public sort(): void;

            public offsetTo(param0: number, param1: number): void;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public height(): number;

            public setIntersect(param0: android.graphics.RectF, param1: android.graphics.RectF): boolean;

            public intersect(param0: android.graphics.RectF): boolean;

            public contains(param0: android.graphics.RectF): boolean;

            public static intersects(param0: android.graphics.RectF, param1: android.graphics.RectF): boolean;

            public roundOut(param0: android.graphics.Rect): void;

            public isEmpty(): boolean;

            public width(): number;

            public constructor(param0: android.graphics.Rect);

            public toShortString(): string;

            public constructor();

            public contains(param0: number, param1: number, param2: number, param3: number): boolean;

            public toString(): string;

            public centerY(): number;

            public describeContents(): number;

            public intersects(param0: number, param1: number, param2: number, param3: number): boolean;

            public set(param0: android.graphics.RectF): void;

            public contains(param0: number, param1: number): boolean;

            public hashCode(): number;

            public intersect(param0: number, param1: number, param2: number, param3: number): boolean;
        }
    }
}

/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module graphics {
        export class Region extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public setEmpty(): void;

            public getBounds(param0: android.graphics.Rect): boolean;

            public union(param0: android.graphics.Rect): boolean;

            public quickContains(param0: number, param1: number, param2: number, param3: number): boolean;

            public equals(param0: javalangObject): boolean;

            public quickReject(param0: android.graphics.Region): boolean;

            public translate(param0: number, param1: number, param2: android.graphics.Region): void;

            public constructor(param0: number, param1: number, param2: number, param3: number);

            public op(param0: android.graphics.Region, param1: android.graphics.Region, param2: android.graphics.Region.Op): boolean;

            public set(param0: android.graphics.Rect): boolean;
            public set(param0: android.graphics.Region): boolean;

            public getBoundaryPath(): android.graphics.Path;

            public setPath(param0: android.graphics.Path, param1: android.graphics.Region): boolean;

            public op(param0: android.graphics.Rect, param1: android.graphics.Region.Op): boolean;
            public op(param0: android.graphics.Region, param1: android.graphics.Region.Op): boolean;

            public translate(param0: number, param1: number): void;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public isRect(): boolean;

            public quickContains(param0: android.graphics.Rect): boolean;

            public quickReject(param0: android.graphics.Rect): boolean;

            public finalize(): void;

            public isEmpty(): boolean;

            public constructor(param0: android.graphics.Rect);

            public isComplex(): boolean;

            public op(param0: number, param1: number, param2: number, param3: number, param4: android.graphics.Region.Op): boolean;

            public constructor();

            public quickReject(param0: number, param1: number, param2: number, param3: number): boolean;

            public getBounds(): android.graphics.Rect;

            public set(param0: number, param1: number, param2: number, param3: number): boolean;

            public op(param0: android.graphics.Rect, param1: android.graphics.Region, param2: android.graphics.Region.Op): boolean;

            public toString(): string;

            public describeContents(): number;

            public contains(param0: number, param1: number): boolean;

            public getBoundaryPath(param0: android.graphics.Path): boolean;

            public constructor(param0: android.graphics.Region);
        }
        export module Region {
            export class Op extends javalangEnum {
                public static DIFFERENCE: android.graphics.Region.Op;
                public static INTERSECT: android.graphics.Region.Op;
                public static REPLACE: android.graphics.Region.Op;
                public static REVERSE_DIFFERENCE: android.graphics.Region.Op;
                public static UNION: android.graphics.Region.Op;
                public static XOR: android.graphics.Region.Op;

                public static values(): native.Array<android.graphics.Region.Op>;

                public static valueOf(param0: string): android.graphics.Region.Op;
                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
        }
    }
}

/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.Region.d.ts" />
declare module android {
    export module graphics {
        export class RegionIterator extends javalangObject {
            public next(param0: android.graphics.Rect): boolean;

            public constructor(param0: android.graphics.Region);

            public finalize(): void;
        }
    }
}

/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module graphics {
        export class Shader extends javalangObject {
            public constructor();

            public setLocalMatrix(param0: android.graphics.Matrix): void;

            public getLocalMatrix(param0: android.graphics.Matrix): boolean;

            public finalize(): void;
        }
        export module Shader {
            export class TileMode extends javalangEnum {
                public static CLAMP: android.graphics.Shader.TileMode;
                public static MIRROR: android.graphics.Shader.TileMode;
                public static REPEAT: android.graphics.Shader.TileMode;

                public static values(): native.Array<android.graphics.Shader.TileMode>;

                public static valueOf(param0: string): android.graphics.Shader.TileMode;
                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
        }
    }
}

/// <reference path="./android.graphics.PathEffect.d.ts" />
declare module android {
    export module graphics {
        export class SumPathEffect extends android.graphics.PathEffect {
            public constructor();
            public constructor(param0: android.graphics.PathEffect, param1: android.graphics.PathEffect);
        }
    }
}

/// <reference path="./android.graphics.SurfaceTexture.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module graphics {
        export class SurfaceTexture extends javalangObject {
            public setOnFrameAvailableListener(param0: android.graphics.SurfaceTexture.OnFrameAvailableListener, param1: android.os.Handler): void;

            public updateTexImage(): void;

            public detachFromGLContext(): void;

            public constructor(param0: number);
            public constructor(param0: number, param1: boolean);

            public releaseTexImage(): void;

            public getTransformMatrix(param0: native.Array<number>): void;

            public attachToGLContext(param0: number): void;

            public getTimestamp(): number;

            public setOnFrameAvailableListener(param0: android.graphics.SurfaceTexture.OnFrameAvailableListener): void;

            public setDefaultBufferSize(param0: number, param1: number): void;

            public release(): void;

            public finalize(): void;
        }
        export module SurfaceTexture {
            export class OnFrameAvailableListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.graphics.SurfaceTexture$OnFrameAvailableListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onFrameAvailable(param0: android.graphics.SurfaceTexture): void;
                });

                public onFrameAvailable(param0: android.graphics.SurfaceTexture): void;
            }
            export class OutOfResourcesException extends javalangException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

declare module android {
    export module graphics {
        export class SweepGradient extends android.graphics.Shader {
            public constructor(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>);
            public constructor();
            public constructor(param0: number, param1: number, param2: number, param3: number);
        }
    }
}

/// <reference path="./android.content.res.AssetManager.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module graphics {
        export class Typeface extends javalangObject {
            public static BOLD: number;
            public static BOLD_ITALIC: number;
            public static DEFAULT: android.graphics.Typeface;
            public static DEFAULT_BOLD: android.graphics.Typeface;
            public static ITALIC: number;
            public static MONOSPACE: android.graphics.Typeface;
            public static NORMAL: number;
            public static SANS_SERIF: android.graphics.Typeface;
            public static SERIF: android.graphics.Typeface;

            public static createFromFile(param0: javaioFile): android.graphics.Typeface;

            public isItalic(): boolean;

            public static create(param0: string, param1: number): android.graphics.Typeface;

            public equals(param0: javalangObject): boolean;

            public static createFromFile(param0: string): android.graphics.Typeface;

            public isBold(): boolean;

            public static defaultFromStyle(param0: number): android.graphics.Typeface;

            public getStyle(): number;

            public static createFromAsset(param0: android.content.res.AssetManager, param1: string): android.graphics.Typeface;

            public finalize(): void;

            public static create(param0: android.graphics.Typeface, param1: number): android.graphics.Typeface;

            public hashCode(): number;
        }
    }
}

declare module android {
    export module graphics {
        export class Xfermode extends javalangObject {
            public constructor();

            public finalize(): void;
        }
    }
}

/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
declare module android {
    export module graphics {
        export class YuvImage extends javalangObject {
            public constructor(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: native.Array<number>);

            public getHeight(): number;

            public compressToJpeg(param0: android.graphics.Rect, param1: number, param2: javaioOutputStream): boolean;

            public getYuvData(): native.Array<number>;

            public getStrides(): native.Array<number>;

            public getWidth(): number;

            public getYuvFormat(): number;
        }
    }
}

declare module android {
    export module graphics {
        export module drawable {
            export class Animatable extends javalangObject {
                /**
                 * Constructs a new instance of the android.graphics.drawable.Animatable interface with the provided implementation.
                 */
                public constructor(implementation: {
                    start(): void;
                    stop(): void;
                    isRunning(): boolean;
                });

                public stop(): void;

                public start(): void;

                public isRunning(): boolean;
            }
        }
    }
}

/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export class Animatable2 extends javalangObject implements android.graphics.drawable.Animatable {
                /**
                 * Constructs a new instance of the android.graphics.drawable.Animatable2 interface with the provided implementation.
                 */
                public constructor(implementation: {
                    registerAnimationCallback(param0: android.graphics.drawable.Animatable2.AnimationCallback): void;
                    unregisterAnimationCallback(param0: android.graphics.drawable.Animatable2.AnimationCallback): boolean;
                    clearAnimationCallbacks(): void;
                    start(): void;
                    stop(): void;
                    isRunning(): boolean;
                });

                public stop(): void;

                public unregisterAnimationCallback(param0: android.graphics.drawable.Animatable2.AnimationCallback): boolean;

                public start(): void;

                public clearAnimationCallbacks(): void;

                public isRunning(): boolean;

                public registerAnimationCallback(param0: android.graphics.drawable.Animatable2.AnimationCallback): void;
            }
            export module Animatable2 {
                export abstract class AnimationCallback extends javalangObject {
                    public onAnimationStart(param0: android.graphics.drawable.Drawable): void;

                    public constructor();

                    public onAnimationEnd(param0: android.graphics.drawable.Drawable): void;
                }
            }
        }
    }
}

/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export class AnimatedStateListDrawable extends android.graphics.drawable.StateListDrawable {
                public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

                public jumpToCurrentState(): void;

                public setConstantState(param0: android.graphics.drawable.DrawableContainer.DrawableContainerState): void;

                public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

                public addState(param0: native.Array<number>, param1: android.graphics.drawable.Drawable): void;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;

                public addTransition(param0: number, param1: number, param2: android.graphics.drawable.Drawable, param3: boolean): void;

                public constructor();

                public addState(param0: native.Array<number>, param1: android.graphics.drawable.Drawable, param2: number): void;

                public onStateChange(param0: native.Array<number>): boolean;

                public mutate(): android.graphics.drawable.Drawable;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet): void;

                public setVisible(param0: boolean, param1: boolean): boolean;

                public applyTheme(param0: android.content.res.Resources.Theme): void;

                public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

                public isStateful(): boolean;
            }
        }
    }
}

/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export class AnimatedVectorDrawable extends android.graphics.drawable.Drawable implements android.graphics.drawable.Animatable2 {
                public clearAnimationCallbacks(): void;

                public getAlpha(): number;

                public setTintList(param0: android.content.res.ColorStateList): void;

                public setTintMode(param0: android.graphics.PorterDuff.Mode): void;

                public constructor();

                public onBoundsChange(param0: android.graphics.Rect): void;

                public getIntrinsicWidth(): number;

                public reset(): void;

                public onStateChange(param0: native.Array<number>): boolean;

                public setHotspotBounds(param0: number, param1: number, param2: number, param3: number): void;

                public start(): void;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet): void;

                public setColorFilter(param0: android.graphics.ColorFilter): void;

                public isRunning(): boolean;

                public draw(param0: android.graphics.Canvas): void;

                public registerAnimationCallback(param0: android.graphics.drawable.Animatable2.AnimationCallback): void;

                public onLayoutDirectionChanged(param0: number): boolean;

                public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;

                public onLevelChange(param0: number): boolean;

                public getConstantState(): android.graphics.drawable.Drawable.ConstantState;

                public getChangingConfigurations(): number;

                public canApplyTheme(): boolean;

                public setAlpha(param0: number): void;

                public getOutline(param0: android.graphics.Outline): void;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;

                public stop(): void;

                public getIntrinsicHeight(): number;

                public mutate(): android.graphics.drawable.Drawable;

                public unregisterAnimationCallback(param0: android.graphics.drawable.Animatable2.AnimationCallback): boolean;

                public setHotspot(param0: number, param1: number): void;

                public setVisible(param0: boolean, param1: boolean): boolean;

                public applyTheme(param0: android.content.res.Resources.Theme): void;

                public getOpacity(): number;

                public isStateful(): boolean;
            }
        }
    }
}

/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export class AnimationDrawable extends android.graphics.drawable.DrawableContainer implements javalangRunnable, android.graphics.drawable.Animatable {
                public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

                public addFrame(param0: android.graphics.drawable.Drawable, param1: number): void;

                public getNumberOfFrames(): number;

                public getDuration(param0: number): number;

                public setConstantState(param0: android.graphics.drawable.DrawableContainer.DrawableContainerState): void;

                public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

                public isOneShot(): boolean;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;

                public constructor();

                public stop(): void;

                public run(): void;

                public start(): void;

                public unscheduleSelf(param0: javalangRunnable): void;

                public mutate(): android.graphics.drawable.Drawable;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet): void;

                public isRunning(): boolean;

                public setVisible(param0: boolean, param1: boolean): boolean;

                public setOneShot(param0: boolean): void;

                public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

                public getFrame(param0: number): android.graphics.drawable.Drawable;
            }
        }
    }
}

/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.util.DisplayMetrics.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export class BitmapDrawable extends android.graphics.drawable.Drawable {
                public setAntiAlias(param0: boolean): void;

                public getTileModeX(): android.graphics.Shader.TileMode;

                public getAlpha(): number;

                public setTileModeX(param0: android.graphics.Shader.TileMode): void;

                public getPaint(): android.graphics.Paint;

                public constructor();

                public getBitmap(): android.graphics.Bitmap;

                public onStateChange(param0: native.Array<number>): boolean;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet): void;

                public setTileModeY(param0: android.graphics.Shader.TileMode): void;

                public constructor(param0: android.content.res.Resources, param1: string);

                public setTileModeXY(param0: android.graphics.Shader.TileMode, param1: android.graphics.Shader.TileMode): void;

                public setDither(param0: boolean): void;

                public getChangingConfigurations(): number;

                public canApplyTheme(): boolean;

                public getConstantState(): android.graphics.drawable.Drawable.ConstantState;

                public getIntrinsicHeight(): number;

                public isFilterBitmap(): boolean;

                public applyTheme(param0: android.content.res.Resources.Theme): void;

                public getOpacity(): number;

                public setTargetDensity(param0: android.util.DisplayMetrics): void;

                public getColorFilter(): android.graphics.ColorFilter;

                public isAutoMirrored(): boolean;

                public setTintList(param0: android.content.res.ColorStateList): void;

                public setTintMode(param0: android.graphics.PorterDuff.Mode): void;

                public constructor(param0: string);

                public onBoundsChange(param0: android.graphics.Rect): void;

                public getIntrinsicWidth(): number;

                public getTileModeY(): android.graphics.Shader.TileMode;

                public setTargetDensity(param0: number): void;

                public getGravity(): number;

                public hasMipMap(): boolean;

                public setGravity(param0: number): void;

                public setColorFilter(param0: android.graphics.ColorFilter): void;

                public hasAntiAlias(): boolean;

                public constructor(param0: android.graphics.Bitmap);

                public draw(param0: android.graphics.Canvas): void;

                public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;

                public setMipMap(param0: boolean): void;

                public constructor(param0: android.content.res.Resources, param1: android.graphics.Bitmap);

                public getOutline(param0: android.graphics.Outline): void;

                public setAlpha(param0: number): void;

                public constructor(param0: android.content.res.Resources);

                public setTargetDensity(param0: android.graphics.Canvas): void;

                public constructor(param0: javaioInputStream);
                public constructor(param0: android.content.res.Resources, param1: javaioInputStream);

                public setAutoMirrored(param0: boolean): void;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;

                public mutate(): android.graphics.drawable.Drawable;

                public setFilterBitmap(param0: boolean): void;

                public isStateful(): boolean;
            }
        }
    }
}

/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export class ClipDrawable extends android.graphics.drawable.DrawableWrapper {
                public static HORIZONTAL: number;
                public static VERTICAL: number;

                public constructor(param0: android.graphics.drawable.Drawable);

                public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

                public onLevelChange(param0: number): boolean;

                public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet): void;

                public constructor(param0: android.graphics.drawable.Drawable, param1: number, param2: number);

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;

                public applyTheme(param0: android.content.res.Resources.Theme): void;

                public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

                public getOpacity(): number;

                public constructor();

                public draw(param0: android.graphics.Canvas): void;
            }
        }
    }
}

/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export class ColorDrawable extends android.graphics.drawable.Drawable {
                public getColor(): number;

                public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;

                public getChangingConfigurations(): number;

                public canApplyTheme(): boolean;

                public getConstantState(): android.graphics.drawable.Drawable.ConstantState;

                public setColor(param0: number): void;

                public getAlpha(): number;

                public setAlpha(param0: number): void;

                public getOutline(param0: android.graphics.Outline): void;

                public setTintList(param0: android.content.res.ColorStateList): void;

                public setTintMode(param0: android.graphics.PorterDuff.Mode): void;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;

                public constructor();

                public onStateChange(param0: native.Array<number>): boolean;

                public mutate(): android.graphics.drawable.Drawable;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet): void;

                public constructor(param0: number);

                public setColorFilter(param0: android.graphics.ColorFilter): void;

                public applyTheme(param0: android.content.res.Resources.Theme): void;

                public getOpacity(): number;

                public draw(param0: android.graphics.Canvas): void;

                public isStateful(): boolean;
            }
        }
    }
}

/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.Region.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.util.TypedValue.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export abstract class Drawable extends javalangObject {
                public getCurrent(): android.graphics.drawable.Drawable;

                public getAlpha(): number;

                public setLayoutDirection(param0: number): boolean;

                public constructor();

                public copyBounds(): android.graphics.Rect;

                public onStateChange(param0: native.Array<number>): boolean;

                public setHotspotBounds(param0: number, param1: number, param2: number, param3: number): void;

                public unscheduleSelf(param0: javalangRunnable): void;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet): void;

                public getHotspotBounds(param0: android.graphics.Rect): void;

                public static resolveOpacity(param0: number, param1: number): number;

                public copyBounds(param0: android.graphics.Rect): void;

                public static createFromStream(param0: javaioInputStream, param1: string): android.graphics.drawable.Drawable;

                public onLayoutDirectionChanged(param0: number): boolean;

                public getCallback(): android.graphics.drawable.Drawable.Callback;

                public setTint(param0: number): void;

                public onLevelChange(param0: number): boolean;

                public jumpToCurrentState(): void;

                public setBounds(param0: number, param1: number, param2: number, param3: number): void;

                public setDither(param0: boolean): void;

                public getChangingConfigurations(): number;

                public canApplyTheme(): boolean;

                public getConstantState(): android.graphics.drawable.Drawable.ConstantState;

                public invalidateSelf(): void;

                public static createFromXmlInner(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet): android.graphics.drawable.Drawable;

                public getMinimumHeight(): number;

                public static createFromResourceStream(param0: android.content.res.Resources, param1: android.util.TypedValue, param2: javaioInputStream, param3: string, param4: android.graphics.BitmapFactory.Options): android.graphics.drawable.Drawable;

                public setLevel(param0: number): boolean;

                public setCallback(param0: android.graphics.drawable.Drawable.Callback): void;

                public getIntrinsicHeight(): number;

                public static createFromXml(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;

                public isFilterBitmap(): boolean;

                public setState(param0: native.Array<number>): boolean;

                public static createFromXml(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser): android.graphics.drawable.Drawable;

                public applyTheme(param0: android.content.res.Resources.Theme): void;

                public getOpacity(): number;

                public isVisible(): boolean;

                public getBounds(): android.graphics.Rect;

                public getLayoutDirection(): number;

                public getColorFilter(): android.graphics.ColorFilter;

                public isAutoMirrored(): boolean;

                public setTintList(param0: android.content.res.ColorStateList): void;

                public setTintMode(param0: android.graphics.PorterDuff.Mode): void;

                public static createFromPath(param0: string): android.graphics.drawable.Drawable;

                public onBoundsChange(param0: android.graphics.Rect): void;

                public getIntrinsicWidth(): number;

                public getPadding(param0: android.graphics.Rect): boolean;

                public setChangingConfigurations(param0: number): void;

                public getMinimumWidth(): number;

                public setColorFilter(param0: android.graphics.ColorFilter): void;

                public getDirtyBounds(): android.graphics.Rect;

                public draw(param0: android.graphics.Canvas): void;

                public static createFromXmlInner(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;

                public setBounds(param0: android.graphics.Rect): void;

                public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;

                public getState(): native.Array<number>;

                public setAlpha(param0: number): void;

                public getOutline(param0: android.graphics.Outline): void;

                public clearColorFilter(): void;

                public setAutoMirrored(param0: boolean): void;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;

                public getLevel(): number;

                public scheduleSelf(param0: javalangRunnable, param1: number): void;

                public mutate(): android.graphics.drawable.Drawable;

                public setHotspot(param0: number, param1: number): void;

                public setVisible(param0: boolean, param1: boolean): boolean;

                public setFilterBitmap(param0: boolean): void;

                public getTransparentRegion(): android.graphics.Region;

                public static createFromResourceStream(param0: android.content.res.Resources, param1: android.util.TypedValue, param2: javaioInputStream, param3: string): android.graphics.drawable.Drawable;

                public isStateful(): boolean;
            }
            export module Drawable {
                export class Callback extends javalangObject {
                    /**
                     * Constructs a new instance of the android.graphics.drawable.Drawable$Callback interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
                        scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;
                        unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;
                    });

                    public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

                    public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

                    public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
                }
                export abstract class ConstantState extends javalangObject {
                    public getChangingConfigurations(): number;

                    public newDrawable(): android.graphics.drawable.Drawable;

                    public constructor();

                    public newDrawable(param0: android.content.res.Resources): android.graphics.drawable.Drawable;
                    public newDrawable(param0: android.content.res.Resources, param1: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;

                    public canApplyTheme(): boolean;
                }
            }
        }
    }
}

/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export class DrawableContainer extends android.graphics.drawable.Drawable implements android.graphics.drawable.Drawable.Callback {
                public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

                public getCurrent(): android.graphics.drawable.Drawable;

                public getAlpha(): number;

                public isAutoMirrored(): boolean;

                public selectDrawable(param0: number): boolean;

                public setTintList(param0: android.content.res.ColorStateList): void;

                public setTintMode(param0: android.graphics.PorterDuff.Mode): void;

                public constructor();

                public onBoundsChange(param0: android.graphics.Rect): void;

                public getPadding(param0: android.graphics.Rect): boolean;

                public getIntrinsicWidth(): number;

                public onStateChange(param0: native.Array<number>): boolean;

                public setHotspotBounds(param0: number, param1: number, param2: number, param3: number): void;

                public getMinimumWidth(): number;

                public setColorFilter(param0: android.graphics.ColorFilter): void;

                public setEnterFadeDuration(param0: number): void;

                public getHotspotBounds(param0: android.graphics.Rect): void;

                public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

                public draw(param0: android.graphics.Canvas): void;

                public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

                public onLayoutDirectionChanged(param0: number): boolean;

                public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;

                public onLevelChange(param0: number): boolean;

                public jumpToCurrentState(): void;

                public setDither(param0: boolean): void;

                public setConstantState(param0: android.graphics.drawable.DrawableContainer.DrawableContainerState): void;

                public getChangingConfigurations(): number;

                public canApplyTheme(): boolean;

                public getConstantState(): android.graphics.drawable.Drawable.ConstantState;

                public getOutline(param0: android.graphics.Outline): void;

                public setAlpha(param0: number): void;

                public getMinimumHeight(): number;

                public setAutoMirrored(param0: boolean): void;

                public getIntrinsicHeight(): number;

                public mutate(): android.graphics.drawable.Drawable;

                public setHotspot(param0: number, param1: number): void;

                public setVisible(param0: boolean, param1: boolean): boolean;

                public setExitFadeDuration(param0: number): void;

                public applyTheme(param0: android.content.res.Resources.Theme): void;

                public getOpacity(): number;

                public isStateful(): boolean;
            }
            export module DrawableContainer {
                export abstract class DrawableContainerState extends android.graphics.drawable.Drawable.ConstantState {
                    public growArray(param0: number, param1: number): void;

                    public setVariablePadding(param0: boolean): void;

                    public getChildCount(): number;

                    public getConstantMinimumWidth(): number;

                    public addChild(param0: android.graphics.drawable.Drawable): number;

                    public getEnterFadeDuration(): number;

                    public getChild(param0: number): android.graphics.drawable.Drawable;

                    public getConstantWidth(): number;

                    public isStateful(): boolean;

                    public computeConstantSize(): void;

                    public setExitFadeDuration(param0: number): void;

                    public setConstantSize(param0: boolean): void;

                    public getConstantHeight(): number;

                    public getChangingConfigurations(): number;

                    public getChildren(): native.Array<android.graphics.drawable.Drawable>;

                    public getConstantPadding(): android.graphics.Rect;

                    public isConstantSize(): boolean;

                    public setEnterFadeDuration(param0: number): void;

                    public canConstantState(): boolean;

                    public canApplyTheme(): boolean;

                    public getConstantMinimumHeight(): number;

                    public getExitFadeDuration(): number;

                    public getOpacity(): number;
                }
            }
        }
    }
}

/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export abstract class DrawableWrapper extends android.graphics.drawable.Drawable implements android.graphics.drawable.Drawable.Callback {
                public getDrawable(): android.graphics.drawable.Drawable;

                public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

                public getAlpha(): number;

                public setTintList(param0: android.content.res.ColorStateList): void;

                public setTintMode(param0: android.graphics.PorterDuff.Mode): void;

                public constructor();
                public constructor(param0: android.graphics.drawable.Drawable);

                public onBoundsChange(param0: android.graphics.Rect): void;

                public getPadding(param0: android.graphics.Rect): boolean;

                public getIntrinsicWidth(): number;

                public onStateChange(param0: native.Array<number>): boolean;

                public setHotspotBounds(param0: number, param1: number, param2: number, param3: number): void;

                public setColorFilter(param0: android.graphics.ColorFilter): void;

                public getHotspotBounds(param0: android.graphics.Rect): void;

                public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

                public draw(param0: android.graphics.Canvas): void;

                public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

                public onLayoutDirectionChanged(param0: number): boolean;

                public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;

                public onLevelChange(param0: number): boolean;

                public canApplyTheme(): boolean;

                public getChangingConfigurations(): number;

                public getConstantState(): android.graphics.drawable.Drawable.ConstantState;

                public setAlpha(param0: number): void;

                public getOutline(param0: android.graphics.Outline): void;

                public getIntrinsicHeight(): number;

                public mutate(): android.graphics.drawable.Drawable;

                public setHotspot(param0: number, param1: number): void;

                public setVisible(param0: boolean, param1: boolean): boolean;

                public applyTheme(param0: android.content.res.Resources.Theme): void;

                public setDrawable(param0: android.graphics.drawable.Drawable): void;

                public getOpacity(): number;

                public isStateful(): boolean;
            }
        }
    }
}

/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export class GradientDrawable extends android.graphics.drawable.Drawable {
                public static LINE: number;
                public static LINEAR_GRADIENT: number;
                public static OVAL: number;
                public static RADIAL_GRADIENT: number;
                public static RECTANGLE: number;
                public static RING: number;
                public static SWEEP_GRADIENT: number;

                public getColorFilter(): android.graphics.ColorFilter;

                public getAlpha(): number;

                public setSize(param0: number, param1: number): void;

                public constructor(param0: android.graphics.drawable.GradientDrawable.Orientation, param1: native.Array<number>);

                public setTintList(param0: android.content.res.ColorStateList): void;

                public setTintMode(param0: android.graphics.PorterDuff.Mode): void;

                public setShape(param0: number): void;

                public getOrientation(): android.graphics.drawable.GradientDrawable.Orientation;

                public constructor();

                public setStroke(param0: number, param1: number): void;

                public onBoundsChange(param0: android.graphics.Rect): void;

                public getPadding(param0: android.graphics.Rect): boolean;

                public getIntrinsicWidth(): number;

                public onStateChange(param0: native.Array<number>): boolean;

                public getGradientRadius(): number;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet): void;

                public setColor(param0: android.content.res.ColorStateList): void;

                public setColorFilter(param0: android.graphics.ColorFilter): void;

                public setStroke(param0: number, param1: number, param2: number, param3: number): void;

                public draw(param0: android.graphics.Canvas): void;

                public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;

                public setStroke(param0: number, param1: android.content.res.ColorStateList): void;

                public setColors(param0: native.Array<number>): void;

                public onLevelChange(param0: number): boolean;

                public setDither(param0: boolean): void;

                public setStroke(param0: number, param1: android.content.res.ColorStateList, param2: number, param3: number): void;

                public getChangingConfigurations(): number;

                public canApplyTheme(): boolean;

                public getConstantState(): android.graphics.drawable.Drawable.ConstantState;

                public setUseLevel(param0: boolean): void;

                public setColor(param0: number): void;

                public setAlpha(param0: number): void;

                public getOutline(param0: android.graphics.Outline): void;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;

                public setOrientation(param0: android.graphics.drawable.GradientDrawable.Orientation): void;

                public setGradientRadius(param0: number): void;

                public setGradientCenter(param0: number, param1: number): void;

                public getIntrinsicHeight(): number;

                public mutate(): android.graphics.drawable.Drawable;

                public setCornerRadius(param0: number): void;

                public setCornerRadii(param0: native.Array<number>): void;

                public applyTheme(param0: android.content.res.Resources.Theme): void;

                public setGradientType(param0: number): void;

                public getOpacity(): number;

                public isStateful(): boolean;
            }
            export module GradientDrawable {
                export class Orientation extends javalangEnum {
                    public static BL_TR: android.graphics.drawable.GradientDrawable.Orientation;
                    public static BOTTOM_TOP: android.graphics.drawable.GradientDrawable.Orientation;
                    public static BR_TL: android.graphics.drawable.GradientDrawable.Orientation;
                    public static LEFT_RIGHT: android.graphics.drawable.GradientDrawable.Orientation;
                    public static RIGHT_LEFT: android.graphics.drawable.GradientDrawable.Orientation;
                    public static TL_BR: android.graphics.drawable.GradientDrawable.Orientation;
                    public static TOP_BOTTOM: android.graphics.drawable.GradientDrawable.Orientation;
                    public static TR_BL: android.graphics.drawable.GradientDrawable.Orientation;

                    public static values(): native.Array<android.graphics.drawable.GradientDrawable.Orientation>;

                    public static valueOf(param0: javalangClass, param1: string): javalangEnum;
                    public static valueOf(param0: string): android.graphics.drawable.GradientDrawable.Orientation;
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export class Icon extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public static createWithBitmap(param0: android.graphics.Bitmap): android.graphics.drawable.Icon;

                public setTint(param0: number): android.graphics.drawable.Icon;

                public loadDrawableAsync(param0: android.content.Context, param1: android.os.Message): void;

                public static createWithResource(param0: android.content.Context, param1: number): android.graphics.drawable.Icon;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public loadDrawableAsync(param0: android.content.Context, param1: android.graphics.drawable.Icon.OnDrawableLoadedListener, param2: android.os.Handler): void;

                public static createWithResource(param0: string, param1: number): android.graphics.drawable.Icon;

                public toString(): string;

                public setTintMode(param0: android.graphics.PorterDuff.Mode): android.graphics.drawable.Icon;

                public static createWithFilePath(param0: string): android.graphics.drawable.Icon;

                public static createWithData(param0: native.Array<number>, param1: number, param2: number): android.graphics.drawable.Icon;

                public static createWithContentUri(param0: android.net.Uri): android.graphics.drawable.Icon;

                public describeContents(): number;

                public loadDrawable(param0: android.content.Context): android.graphics.drawable.Drawable;

                public static createWithContentUri(param0: string): android.graphics.drawable.Icon;

                public setTintList(param0: android.content.res.ColorStateList): android.graphics.drawable.Icon;
            }
            export module Icon {
                export class OnDrawableLoadedListener extends javalangObject {
                    /**
                     * Constructs a new instance of the android.graphics.drawable.Icon$OnDrawableLoadedListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onDrawableLoaded(param0: android.graphics.drawable.Drawable): void;
                    });

                    public onDrawableLoaded(param0: android.graphics.drawable.Drawable): void;
                }
            }
        }
    }
}

/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export class InsetDrawable extends android.graphics.drawable.DrawableWrapper {
                public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

                public constructor(param0: android.graphics.drawable.Drawable, param1: number);
                public constructor(param0: android.graphics.drawable.Drawable, param1: number, param2: number, param3: number, param4: number);

                public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

                public getOutline(param0: android.graphics.Outline): void;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;

                public constructor();
                public constructor(param0: android.graphics.drawable.Drawable);

                public onBoundsChange(param0: android.graphics.Rect): void;

                public getPadding(param0: android.graphics.Rect): boolean;

                public getIntrinsicWidth(): number;

                public getIntrinsicHeight(): number;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet): void;

                public applyTheme(param0: android.content.res.Resources.Theme): void;

                public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

                public getOpacity(): number;
            }
        }
    }
}

/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export class LayerDrawable extends android.graphics.drawable.Drawable implements android.graphics.drawable.Drawable.Callback {
                public static PADDING_MODE_NEST: number;
                public static PADDING_MODE_STACK: number;

                public getLayerInsetEnd(param0: number): number;

                public getLayerInsetRight(param0: number): number;

                public getAlpha(): number;

                public setLayerInsetEnd(param0: number, param1: number): void;

                public constructor();

                public setLayerHeight(param0: number, param1: number): void;

                public onStateChange(param0: native.Array<number>): boolean;

                public setHotspotBounds(param0: number, param1: number, param2: number, param3: number): void;

                public setPadding(param0: number, param1: number, param2: number, param3: number): void;

                public setPaddingMode(param0: number): void;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet): void;

                public getHotspotBounds(param0: android.graphics.Rect): void;

                public getDrawable(param0: number): android.graphics.drawable.Drawable;

                public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

                public findIndexByLayerId(param0: number): number;

                public getBottomPadding(): number;

                public getLayerInsetTop(param0: number): number;

                public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

                public onLayoutDirectionChanged(param0: number): boolean;

                public getLayerHeight(param0: number): number;

                public setLayerInsetLeft(param0: number, param1: number): void;

                public onLevelChange(param0: number): boolean;

                public setDrawable(param0: number, param1: android.graphics.drawable.Drawable): void;

                public setDither(param0: boolean): void;

                public canApplyTheme(): boolean;

                public getChangingConfigurations(): number;

                public getConstantState(): android.graphics.drawable.Drawable.ConstantState;

                public setOpacity(param0: number): void;

                public getLayerInsetLeft(param0: number): number;

                public getIntrinsicHeight(): number;

                public applyTheme(param0: android.content.res.Resources.Theme): void;

                public setLayerSize(param0: number, param1: number, param2: number): void;

                public getOpacity(): number;

                public constructor(param0: native.Array<android.graphics.drawable.Drawable>);

                public getRightPadding(): number;

                public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

                public setLayerGravity(param0: number, param1: number): void;

                public getPaddingMode(): number;

                public setPaddingRelative(param0: number, param1: number, param2: number, param3: number): void;

                public isAutoMirrored(): boolean;

                public setTintList(param0: android.content.res.ColorStateList): void;

                public setTintMode(param0: android.graphics.PorterDuff.Mode): void;

                public setLayerInsetRight(param0: number, param1: number): void;

                public onBoundsChange(param0: android.graphics.Rect): void;

                public setId(param0: number, param1: number): void;

                public getPadding(param0: android.graphics.Rect): boolean;

                public getIntrinsicWidth(): number;

                public setLayerInsetTop(param0: number, param1: number): void;

                public getLayerWidth(param0: number): number;

                public setColorFilter(param0: android.graphics.ColorFilter): void;

                public getStartPadding(): number;

                public draw(param0: android.graphics.Canvas): void;

                public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;

                public setLayerWidth(param0: number, param1: number): void;

                public findDrawableByLayerId(param0: number): android.graphics.drawable.Drawable;

                public setLayerInset(param0: number, param1: number, param2: number, param3: number, param4: number): void;

                public setLayerInsetRelative(param0: number, param1: number, param2: number, param3: number, param4: number): void;

                public getLeftPadding(): number;

                public getLayerGravity(param0: number): number;

                public getOutline(param0: android.graphics.Outline): void;

                public setAlpha(param0: number): void;

                public setDrawableByLayerId(param0: number, param1: android.graphics.drawable.Drawable): boolean;

                public getTopPadding(): number;

                public getLayerInsetStart(param0: number): number;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;

                public setLayerInsetStart(param0: number, param1: number): void;

                public setAutoMirrored(param0: boolean): void;

                public getLayerInsetBottom(param0: number): number;

                public addLayer(param0: android.graphics.drawable.Drawable): number;

                public getEndPadding(): number;

                public getNumberOfLayers(): number;

                public setLayerInsetBottom(param0: number, param1: number): void;

                public mutate(): android.graphics.drawable.Drawable;

                public setHotspot(param0: number, param1: number): void;

                public setVisible(param0: boolean, param1: boolean): boolean;

                public getId(param0: number): number;

                public isStateful(): boolean;
            }
        }
    }
}

/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export class LevelListDrawable extends android.graphics.drawable.DrawableContainer {
                public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

                public onLevelChange(param0: number): boolean;

                public addLevel(param0: number, param1: number, param2: android.graphics.drawable.Drawable): void;

                public mutate(): android.graphics.drawable.Drawable;

                public setConstantState(param0: android.graphics.drawable.DrawableContainer.DrawableContainerState): void;

                public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet): void;
                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;

                public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.NinePatch.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.Region.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.util.DisplayMetrics.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export class NinePatchDrawable extends android.graphics.drawable.Drawable {
                public setTargetDensity(param0: android.util.DisplayMetrics): void;

                public getAlpha(): number;

                public isAutoMirrored(): boolean;

                public setTintList(param0: android.content.res.ColorStateList): void;

                public setTintMode(param0: android.graphics.PorterDuff.Mode): void;

                public getPaint(): android.graphics.Paint;

                public constructor();
                public constructor(param0: android.content.res.Resources, param1: android.graphics.NinePatch);

                public getPadding(param0: android.graphics.Rect): boolean;

                public getIntrinsicWidth(): number;

                public setTargetDensity(param0: number): void;

                public onStateChange(param0: native.Array<number>): boolean;

                public getMinimumWidth(): number;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet): void;

                public setColorFilter(param0: android.graphics.ColorFilter): void;

                public draw(param0: android.graphics.Canvas): void;

                public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;

                public constructor(param0: android.content.res.Resources, param1: android.graphics.Bitmap, param2: native.Array<number>, param3: android.graphics.Rect, param4: string);

                public setDither(param0: boolean): void;

                public getChangingConfigurations(): number;

                public canApplyTheme(): boolean;

                public getConstantState(): android.graphics.drawable.Drawable.ConstantState;

                public getOutline(param0: android.graphics.Outline): void;

                public setAlpha(param0: number): void;

                public setTargetDensity(param0: android.graphics.Canvas): void;

                public getMinimumHeight(): number;

                public setAutoMirrored(param0: boolean): void;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;

                public constructor(param0: android.graphics.NinePatch);

                public getIntrinsicHeight(): number;

                public mutate(): android.graphics.drawable.Drawable;

                public constructor(param0: android.graphics.Bitmap, param1: native.Array<number>, param2: android.graphics.Rect, param3: string);

                public isFilterBitmap(): boolean;

                public setFilterBitmap(param0: boolean): void;

                public getTransparentRegion(): android.graphics.Region;

                public applyTheme(param0: android.content.res.Resources.Theme): void;

                public getOpacity(): number;

                public isStateful(): boolean;
            }
        }
    }
}

/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.drawable.shapes.Shape.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export class PaintDrawable extends android.graphics.drawable.ShapeDrawable {
                public inflateTag(param0: string, param1: android.content.res.Resources, param2: orgxmlpullv1XmlPullParser, param3: android.util.AttributeSet): boolean;

                public constructor(param0: android.graphics.drawable.shapes.Shape);
                public constructor(param0: number);

                public setCornerRadius(param0: number): void;

                public setCornerRadii(param0: native.Array<number>): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.Picture.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export class PictureDrawable extends android.graphics.drawable.Drawable {
                public setPicture(param0: android.graphics.Picture): void;

                public getIntrinsicWidth(): number;

                public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;

                public getIntrinsicHeight(): number;

                public constructor(param0: android.graphics.Picture);

                public setColorFilter(param0: android.graphics.ColorFilter): void;

                public setAlpha(param0: number): void;

                public getPicture(): android.graphics.Picture;

                public getOpacity(): number;

                public constructor();

                public draw(param0: android.graphics.Canvas): void;
            }
        }
    }
}

/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export class RippleDrawable extends android.graphics.drawable.LayerDrawable {
                public static RADIUS_AUTO: number;

                public constructor(param0: native.Array<android.graphics.drawable.Drawable>);

                public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

                public constructor();

                public onBoundsChange(param0: android.graphics.Rect): void;

                public onStateChange(param0: native.Array<number>): boolean;

                public setHotspotBounds(param0: number, param1: number, param2: number, param3: number): void;

                public setPaddingMode(param0: number): void;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet): void;

                public setColor(param0: android.content.res.ColorStateList): void;

                public getHotspotBounds(param0: android.graphics.Rect): void;

                public getDirtyBounds(): android.graphics.Rect;

                public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

                public setRadius(param0: number): void;

                public draw(param0: android.graphics.Canvas): void;

                public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

                public jumpToCurrentState(): void;

                public canApplyTheme(): boolean;

                public getConstantState(): android.graphics.drawable.Drawable.ConstantState;

                public getOutline(param0: android.graphics.Outline): void;

                public invalidateSelf(): void;

                public setDrawableByLayerId(param0: number, param1: android.graphics.drawable.Drawable): boolean;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;

                public getRadius(): number;

                public mutate(): android.graphics.drawable.Drawable;

                public setHotspot(param0: number, param1: number): void;

                public setVisible(param0: boolean, param1: boolean): boolean;

                public constructor(param0: android.content.res.ColorStateList, param1: android.graphics.drawable.Drawable, param2: android.graphics.drawable.Drawable);

                public applyTheme(param0: android.content.res.Resources.Theme): void;

                public getOpacity(): number;

                public isStateful(): boolean;
            }
        }
    }
}

/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export class RotateDrawable extends android.graphics.drawable.DrawableWrapper {
                public isPivotXRelative(): boolean;

                public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

                public onLevelChange(param0: number): boolean;

                public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

                public isPivotYRelative(): boolean;

                public setPivotYRelative(param0: boolean): void;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;

                public getPivotY(): number;

                public constructor();

                public getToDegrees(): number;

                public constructor(param0: android.graphics.drawable.Drawable);

                public getPivotX(): number;

                public setFromDegrees(param0: number): void;

                public setToDegrees(param0: number): void;

                public setPivotX(param0: number): void;

                public setPivotY(param0: number): void;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet): void;

                public getFromDegrees(): number;

                public setPivotXRelative(param0: boolean): void;

                public applyTheme(param0: android.content.res.Resources.Theme): void;

                public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

                public draw(param0: android.graphics.Canvas): void;
            }
        }
    }
}

/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export class ScaleDrawable extends android.graphics.drawable.DrawableWrapper {
                public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

                public onLevelChange(param0: number): boolean;

                public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;

                public constructor();
                public constructor(param0: android.graphics.drawable.Drawable, param1: number, param2: number, param3: number);
                public constructor(param0: android.graphics.drawable.Drawable);

                public onBoundsChange(param0: android.graphics.Rect): void;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet): void;

                public applyTheme(param0: android.content.res.Resources.Theme): void;

                public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

                public getOpacity(): number;

                public draw(param0: android.graphics.Canvas): void;
            }
        }
    }
}

/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.Shader.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.graphics.drawable.shapes.Shape.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export class ShapeDrawable extends android.graphics.drawable.Drawable {
                public setIntrinsicHeight(param0: number): void;

                public inflateTag(param0: string, param1: android.content.res.Resources, param2: orgxmlpullv1XmlPullParser, param3: android.util.AttributeSet): boolean;

                public getShape(): android.graphics.drawable.shapes.Shape;

                public getShaderFactory(): android.graphics.drawable.ShapeDrawable.ShaderFactory;

                public getAlpha(): number;

                public setTintList(param0: android.content.res.ColorStateList): void;

                public setTintMode(param0: android.graphics.PorterDuff.Mode): void;

                public getPaint(): android.graphics.Paint;

                public constructor();

                public onBoundsChange(param0: android.graphics.Rect): void;

                public getIntrinsicWidth(): number;

                public getPadding(param0: android.graphics.Rect): boolean;

                public onStateChange(param0: native.Array<number>): boolean;

                public setPadding(param0: number, param1: number, param2: number, param3: number): void;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet): void;

                public constructor(param0: android.graphics.drawable.shapes.Shape);

                public setShape(param0: android.graphics.drawable.shapes.Shape): void;

                public setColorFilter(param0: android.graphics.ColorFilter): void;

                public draw(param0: android.graphics.Canvas): void;

                public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;

                public setIntrinsicWidth(param0: number): void;

                public setDither(param0: boolean): void;

                public getChangingConfigurations(): number;

                public getConstantState(): android.graphics.drawable.Drawable.ConstantState;

                public setAlpha(param0: number): void;

                public getOutline(param0: android.graphics.Outline): void;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;

                public onDraw(param0: android.graphics.drawable.shapes.Shape, param1: android.graphics.Canvas, param2: android.graphics.Paint): void;

                public setPadding(param0: android.graphics.Rect): void;

                public getIntrinsicHeight(): number;

                public mutate(): android.graphics.drawable.Drawable;

                public setShaderFactory(param0: android.graphics.drawable.ShapeDrawable.ShaderFactory): void;

                public applyTheme(param0: android.content.res.Resources.Theme): void;

                public getOpacity(): number;

                public isStateful(): boolean;
            }
            export module ShapeDrawable {
                export abstract class ShaderFactory extends javalangObject {
                    public constructor();

                    public resize(param0: number, param1: number): android.graphics.Shader;
                }
            }
        }
    }
}

/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export class StateListDrawable extends android.graphics.drawable.DrawableContainer {
                public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

                public onStateChange(param0: native.Array<number>): boolean;

                public mutate(): android.graphics.drawable.Drawable;

                public setConstantState(param0: android.graphics.drawable.DrawableContainer.DrawableContainerState): void;

                public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet): void;

                public addState(param0: native.Array<number>, param1: android.graphics.drawable.Drawable): void;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;

                public applyTheme(param0: android.content.res.Resources.Theme): void;

                public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

                public constructor();

                public isStateful(): boolean;
            }
        }
    }
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export class TransitionDrawable extends android.graphics.drawable.LayerDrawable implements android.graphics.drawable.Drawable.Callback {
                public constructor(param0: native.Array<android.graphics.drawable.Drawable>);

                public reverseTransition(param0: number): void;

                public setCrossFadeEnabled(param0: boolean): void;

                public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

                public resetTransition(): void;

                public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

                public startTransition(param0: number): void;

                public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

                public isCrossFadeEnabled(): boolean;

                public constructor();

                public draw(param0: android.graphics.Canvas): void;
            }
        }
    }
}

/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export class VectorDrawable extends android.graphics.drawable.Drawable {
                public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;

                public getColorFilter(): android.graphics.ColorFilter;

                public getConstantState(): android.graphics.drawable.Drawable.ConstantState;

                public canApplyTheme(): boolean;

                public getChangingConfigurations(): number;

                public getAlpha(): number;

                public setAlpha(param0: number): void;

                public isAutoMirrored(): boolean;

                public setTintList(param0: android.content.res.ColorStateList): void;

                public setTintMode(param0: android.graphics.PorterDuff.Mode): void;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;

                public setAutoMirrored(param0: boolean): void;

                public constructor();

                public getIntrinsicWidth(): number;

                public onStateChange(param0: native.Array<number>): boolean;

                public getIntrinsicHeight(): number;

                public mutate(): android.graphics.drawable.Drawable;

                public inflate(param0: android.content.res.Resources, param1: orgxmlpullv1XmlPullParser, param2: android.util.AttributeSet): void;

                public setColorFilter(param0: android.graphics.ColorFilter): void;

                public applyTheme(param0: android.content.res.Resources.Theme): void;

                public getOpacity(): number;

                public draw(param0: android.graphics.Canvas): void;

                public isStateful(): boolean;
            }
        }
    }
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export module shapes {
                export class ArcShape extends android.graphics.drawable.shapes.RectShape {
                    public constructor();

                    public draw(param0: android.graphics.Canvas, param1: android.graphics.Paint): void;

                    public constructor(param0: number, param1: number);
                }
            }
        }
    }
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export module shapes {
                export class OvalShape extends android.graphics.drawable.shapes.RectShape {
                    public getOutline(param0: android.graphics.Outline): void;

                    public constructor();

                    public draw(param0: android.graphics.Canvas, param1: android.graphics.Paint): void;
                }
            }
        }
    }
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.graphics.drawable.shapes.Shape.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export module shapes {
                export class PathShape extends android.graphics.drawable.shapes.Shape {
                    public clone(): javalangObject;

                    public constructor();
                    public constructor(param0: android.graphics.Path, param1: number, param2: number);

                    public draw(param0: android.graphics.Canvas, param1: android.graphics.Paint): void;

                    public clone(): android.graphics.drawable.shapes.PathShape;

                    public onResize(param0: number, param1: number): void;

                    public clone(): android.graphics.drawable.shapes.Shape;
                }
            }
        }
    }
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./android.graphics.drawable.shapes.Shape.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export module shapes {
                export class RectShape extends android.graphics.drawable.shapes.Shape {
                    public clone(): javalangObject;

                    public getOutline(param0: android.graphics.Outline): void;

                    public constructor();

                    public rect(): android.graphics.RectF;

                    public clone(): android.graphics.drawable.shapes.RectShape;

                    public draw(param0: android.graphics.Canvas, param1: android.graphics.Paint): void;

                    public onResize(param0: number, param1: number): void;

                    public clone(): android.graphics.drawable.shapes.Shape;
                }
            }
        }
    }
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./android.graphics.drawable.shapes.RectShape.d.ts" />
/// <reference path="./android.graphics.drawable.shapes.Shape.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export module shapes {
                export class RoundRectShape extends android.graphics.drawable.shapes.RectShape {
                    public clone(): javalangObject;
                    public clone(): android.graphics.drawable.shapes.RoundRectShape;

                    public getOutline(param0: android.graphics.Outline): void;

                    public constructor();

                    public clone(): android.graphics.drawable.shapes.RectShape;

                    public draw(param0: android.graphics.Canvas, param1: android.graphics.Paint): void;

                    public onResize(param0: number, param1: number): void;

                    public constructor(param0: native.Array<number>, param1: android.graphics.RectF, param2: native.Array<number>);

                    public clone(): android.graphics.drawable.shapes.Shape;
                }
            }
        }
    }
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module graphics {
        export module drawable {
            export module shapes {
                export abstract class Shape extends javalangObject implements javalangCloneable {
                    public clone(): javalangObject;

                    public hasAlpha(): boolean;

                    public getOutline(param0: android.graphics.Outline): void;

                    public constructor();

                    public getHeight(): number;

                    public resize(param0: number, param1: number): void;

                    public getWidth(): number;

                    public draw(param0: android.graphics.Canvas, param1: android.graphics.Paint): void;

                    public onResize(param0: number, param1: number): void;

                    public clone(): android.graphics.drawable.shapes.Shape;
                }
            }
        }
    }
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module graphics {
        export module pdf {
            export class PdfDocument extends javalangObject {
                public close(): void;

                public getPages(): javautilList;

                public finishPage(param0: android.graphics.pdf.PdfDocument.Page): void;

                public finalize(): void;

                public startPage(param0: android.graphics.pdf.PdfDocument.PageInfo): android.graphics.pdf.PdfDocument.Page;

                public writeTo(param0: javaioOutputStream): void;

                public constructor();
            }
            export module PdfDocument {
                export class Page extends javalangObject {
                    public getInfo(): android.graphics.pdf.PdfDocument.PageInfo;

                    public getCanvas(): android.graphics.Canvas;
                }
                export class PageInfo extends javalangObject {
                    public getPageHeight(): number;

                    public getContentRect(): android.graphics.Rect;

                    public getPageNumber(): number;

                    public getPageWidth(): number;
                }
                export module PageInfo {
                    export class Builder extends javalangObject {
                        public setContentRect(param0: android.graphics.Rect): android.graphics.pdf.PdfDocument.PageInfo.Builder;

                        public constructor(param0: number, param1: number, param2: number);

                        public create(): android.graphics.pdf.PdfDocument.PageInfo;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
declare module android {
    export module graphics {
        export module pdf {
            export class PdfRenderer extends javalangObject implements javalangAutoCloseable {
                public shouldScaleForPrinting(): boolean;

                public close(): void;

                public getPageCount(): number;

                public constructor(param0: android.os.ParcelFileDescriptor);

                public finalize(): void;

                public openPage(param0: number): android.graphics.pdf.PdfRenderer.Page;
            }
            export module PdfRenderer {
                export class Page extends javalangObject implements javalangAutoCloseable {
                    public static RENDER_MODE_FOR_DISPLAY: number;
                    public static RENDER_MODE_FOR_PRINT: number;

                    public getIndex(): number;

                    public render(param0: android.graphics.Bitmap, param1: android.graphics.Rect, param2: android.graphics.Matrix, param3: number): void;

                    public getHeight(): number;

                    public finalize(): void;

                    public close(): void;

                    public getWidth(): number;
                }
            }
        }
    }
}
