
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.renderscript.Allocation.d.ts" />
/// <reference path="./android.renderscript.BaseObj.d.ts" />
/// <reference path="./android.renderscript.Element.d.ts" />
/// <reference path="./android.renderscript.FieldPacker.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />
/// <reference path="./android.renderscript.Type.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module renderscript {
        export class Allocation extends android.renderscript.BaseObj {
            public static USAGE_GRAPHICS_CONSTANTS: number;
            public static USAGE_GRAPHICS_RENDER_TARGET: number;
            public static USAGE_GRAPHICS_TEXTURE: number;
            public static USAGE_GRAPHICS_VERTEX: number;
            public static USAGE_IO_INPUT: number;
            public static USAGE_IO_OUTPUT: number;
            public static USAGE_SCRIPT: number;
            public static USAGE_SHARED: number;

            public copyFromUnchecked(param0: native.Array<number>): void;

            public copyFrom(param0: native.Array<number>): void;

            public static createCubemapFromBitmap(param0: android.renderscript.RenderScript, param1: android.graphics.Bitmap): android.renderscript.Allocation;

            public static createFromBitmapResource(param0: android.renderscript.RenderScript, param1: android.content.res.Resources, param2: number, param3: android.renderscript.Allocation.MipmapControl, param4: number): android.renderscript.Allocation;

            public setSurface(param0: android.view.Surface): void;

            public copyTo(param0: native.Array<number>): void;

            public static createFromString(param0: android.renderscript.RenderScript, param1: string, param2: number): android.renderscript.Allocation;

            public copy1DRangeToUnchecked(param0: number, param1: number, param2: javalangObject): void;

            public copy2DRangeFrom(param0: number, param1: number, param2: android.graphics.Bitmap): void;

            public copyFromUnchecked(param0: javalangObject): void;

            public copy3DRangeFrom(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: javalangObject): void;

            public copy1DRangeFromUnchecked(param0: number, param1: number, param2: javalangObject): void;

            public syncAll(param0: number): void;

            public copy1DRangeTo(param0: number, param1: number, param2: javalangObject): void;

            public setAutoPadding(param0: boolean): void;

            public getBytesSize(): number;

            public static createCubemapFromBitmap(param0: android.renderscript.RenderScript, param1: android.graphics.Bitmap, param2: android.renderscript.Allocation.MipmapControl, param3: number): android.renderscript.Allocation;

            public static createSized(param0: android.renderscript.RenderScript, param1: android.renderscript.Element, param2: number, param3: number): android.renderscript.Allocation;

            public copyFrom(param0: android.graphics.Bitmap): void;

            public copy1DRangeToUnchecked(param0: number, param1: number, param2: native.Array<number>): void;

            public getType(): android.renderscript.Type;

            public getSurface(): android.view.Surface;

            public copy3DRangeTo(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: javalangObject): void;

            public static createTyped(param0: android.renderscript.RenderScript, param1: android.renderscript.Type, param2: number): android.renderscript.Allocation;

            public copy1DRangeFrom(param0: number, param1: number, param2: javalangObject): void;

            public static createCubemapFromCubeFaces(param0: android.renderscript.RenderScript, param1: android.graphics.Bitmap, param2: android.graphics.Bitmap, param3: android.graphics.Bitmap, param4: android.graphics.Bitmap, param5: android.graphics.Bitmap, param6: android.graphics.Bitmap): android.renderscript.Allocation;

            public static createFromBitmapResource(param0: android.renderscript.RenderScript, param1: android.content.res.Resources, param2: number): android.renderscript.Allocation;

            public copy1DRangeFrom(param0: number, param1: number, param2: android.renderscript.Allocation, param3: number): void;

            public static createTyped(param0: android.renderscript.RenderScript, param1: android.renderscript.Type, param2: android.renderscript.Allocation.MipmapControl, param3: number): android.renderscript.Allocation;

            public getElement(): android.renderscript.Element;

            public generateMipmaps(): void;

            public copy1DRangeFrom(param0: number, param1: number, param2: native.Array<number>): void;

            public copy2DRangeFrom(param0: number, param1: number, param2: number, param3: number, param4: javalangObject): void;

            public copy1DRangeFromUnchecked(param0: number, param1: number, param2: native.Array<number>): void;

            public copy2DRangeTo(param0: number, param1: number, param2: number, param3: number, param4: javalangObject): void;

            public copy1DRangeTo(param0: number, param1: number, param2: native.Array<number>): void;

            public getUsage(): number;

            public copy3DRangeFrom(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: android.renderscript.Allocation, param7: number, param8: number, param9: number): void;

            public ioReceive(): void;

            public finalize(): void;

            public copyFrom(param0: native.Array<android.renderscript.BaseObj>): void;
            public copyFrom(param0: android.renderscript.Allocation): void;

            public static createCubemapFromCubeFaces(param0: android.renderscript.RenderScript, param1: android.graphics.Bitmap, param2: android.graphics.Bitmap, param3: android.graphics.Bitmap, param4: android.graphics.Bitmap, param5: android.graphics.Bitmap, param6: android.graphics.Bitmap, param7: android.renderscript.Allocation.MipmapControl, param8: number): android.renderscript.Allocation;

            public setFromFieldPacker(param0: number, param1: android.renderscript.FieldPacker): void;

            public static createTyped(param0: android.renderscript.RenderScript, param1: android.renderscript.Type): android.renderscript.Allocation;

            public static createSized(param0: android.renderscript.RenderScript, param1: android.renderscript.Element, param2: number): android.renderscript.Allocation;

            public destroy(): void;

            public copyTo(param0: javalangObject): void;

            public copyFrom(param0: javalangObject): void;

            public ioSend(): void;

            public resize(param0: number): void;

            public copy2DRangeFrom(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Allocation, param5: number, param6: number): void;

            public copy2DRangeTo(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): void;

            public static createFromBitmap(param0: android.renderscript.RenderScript, param1: android.graphics.Bitmap, param2: android.renderscript.Allocation.MipmapControl, param3: number): android.renderscript.Allocation;

            public copy2DRangeFrom(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): void;

            public static createFromBitmap(param0: android.renderscript.RenderScript, param1: android.graphics.Bitmap): android.renderscript.Allocation;

            public setOnBufferAvailableListener(param0: android.renderscript.Allocation.OnBufferAvailableListener): void;

            public setFromFieldPacker(param0: number, param1: number, param2: android.renderscript.FieldPacker): void;
            public setFromFieldPacker(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.FieldPacker): void;

            public copyTo(param0: android.graphics.Bitmap): void;
        }
        export module Allocation {
            export class MipmapControl extends javalangEnum {
                public static MIPMAP_FULL: android.renderscript.Allocation.MipmapControl;
                public static MIPMAP_NONE: android.renderscript.Allocation.MipmapControl;
                public static MIPMAP_ON_SYNC_TO_TEXTURE: android.renderscript.Allocation.MipmapControl;

                public static values(): native.Array<android.renderscript.Allocation.MipmapControl>;

                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
                public static valueOf(param0: string): android.renderscript.Allocation.MipmapControl;
            }
            export class OnBufferAvailableListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.renderscript.Allocation$OnBufferAvailableListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onBufferAvailable(param0: android.renderscript.Allocation): void;
                });

                public onBufferAvailable(param0: android.renderscript.Allocation): void;
            }
        }
    }
}

/// <reference path="./android.renderscript.Allocation.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />
/// <reference path="./android.renderscript.Type.d.ts" />
declare module android {
    export module renderscript {
        export class AllocationAdapter extends android.renderscript.Allocation {
            public setFace(param0: android.renderscript.Type.CubemapFace): void;

            public setY(param0: number): void;

            public setZ(param0: number): void;

            public static createTyped(param0: android.renderscript.RenderScript, param1: android.renderscript.Type): android.renderscript.Allocation;

            public setX(param0: number): void;

            public static create1D(param0: android.renderscript.RenderScript, param1: android.renderscript.Allocation): android.renderscript.AllocationAdapter;

            public static createTyped(param0: android.renderscript.RenderScript, param1: android.renderscript.Allocation, param2: android.renderscript.Type): android.renderscript.AllocationAdapter;

            public setLOD(param0: number): void;

            public static create2D(param0: android.renderscript.RenderScript, param1: android.renderscript.Allocation): android.renderscript.AllocationAdapter;

            public static createTyped(param0: android.renderscript.RenderScript, param1: android.renderscript.Type, param2: android.renderscript.Allocation.MipmapControl, param3: number): android.renderscript.Allocation;

            public resize(param0: number): void;

            public static createTyped(param0: android.renderscript.RenderScript, param1: android.renderscript.Type, param2: number): android.renderscript.Allocation;
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module renderscript {
        export class BaseObj extends javalangObject {
            public getName(): string;

            public equals(param0: javalangObject): boolean;

            public destroy(): void;

            public finalize(): void;

            public setName(param0: string): void;

            public hashCode(): number;
        }
    }
}

declare module android {
    export module renderscript {
        export class Byte2 extends javalangObject {
            public x: number;
            public y: number;

            public constructor();
            public constructor(param0: number, param1: number);
        }
    }
}

declare module android {
    export module renderscript {
        export class Byte3 extends javalangObject {
            public x: number;
            public y: number;
            public z: number;

            public constructor(param0: number, param1: number, param2: number);
            public constructor();
        }
    }
}

declare module android {
    export module renderscript {
        export class Byte4 extends javalangObject {
            public w: number;
            public x: number;
            public y: number;
            public z: number;

            public constructor();
            public constructor(param0: number, param1: number, param2: number, param3: number);
        }
    }
}

declare module android {
    export module renderscript {
        export class Double2 extends javalangObject {
            public x: number;
            public y: number;

            public constructor();
            public constructor(param0: number, param1: number);
        }
    }
}

declare module android {
    export module renderscript {
        export class Double3 extends javalangObject {
            public x: number;
            public y: number;
            public z: number;

            public constructor(param0: number, param1: number, param2: number);
            public constructor();
        }
    }
}

declare module android {
    export module renderscript {
        export class Double4 extends javalangObject {
            public w: number;
            public x: number;
            public y: number;
            public z: number;

            public constructor();
            public constructor(param0: number, param1: number, param2: number, param3: number);
        }
    }
}

/// <reference path="./android.renderscript.Element.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module renderscript {
        export class Element extends android.renderscript.BaseObj {
            public static I32_2(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static YUV(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static I8(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static U64(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static U32(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static MESH(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static PROGRAM_RASTER(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static F32(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static PROGRAM_FRAGMENT(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static I16_2(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public getVectorSize(): number;

            public static F64(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public getDataKind(): android.renderscript.Element.DataKind;

            public static F64_2(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static I32_3(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static F64_3(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static PROGRAM_STORE(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public getBytesSize(): number;

            public static U32_2(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static U64_2(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static I16_3(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static I16(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static I32_4(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static I64_4(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static A_8(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public isComplex(): boolean;

            public static FONT(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static MATRIX_4X4(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public getSubElementArraySize(param0: number): number;

            public static MATRIX_2X2(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static U64_3(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static F16(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static U16_4(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static RGB_888(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static U32_4(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static U64_4(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static I16_4(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static RGBA_8888(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static U16(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static U16_3(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static F16_2(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static I8_2(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static I64_2(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public getSubElementName(param0: number): string;

            public static U8_4(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static SCRIPT(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static F32_2(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static U32_3(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static U16_2(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static I64_3(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static createVector(param0: android.renderscript.RenderScript, param1: android.renderscript.Element.DataType, param2: number): android.renderscript.Element;

            public static F32_3(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static createPixel(param0: android.renderscript.RenderScript, param1: android.renderscript.Element.DataType, param2: android.renderscript.Element.DataKind): android.renderscript.Element;

            public static I32(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static RGB_565(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static ALLOCATION(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public getSubElementOffsetBytes(param0: number): number;

            public static U8(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static U8_2(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static I8_4(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static I64(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static PROGRAM_VERTEX(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public getSubElementCount(): number;

            public static F32_4(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static F64_4(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static BOOLEAN(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static F16_3(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static RGBA_4444(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static MATRIX_3X3(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public isCompatible(param0: android.renderscript.Element): boolean;

            public static I8_3(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static ELEMENT(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static MATRIX4X4(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static F16_4(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public getDataType(): android.renderscript.Element.DataType;

            public static U8_3(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static SAMPLER(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static TYPE(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public static RGBA_5551(param0: android.renderscript.RenderScript): android.renderscript.Element;

            public getSubElement(param0: number): android.renderscript.Element;
        }
        export module Element {
            export class Builder extends javalangObject {
                public constructor(param0: android.renderscript.RenderScript);

                public add(param0: android.renderscript.Element, param1: string): android.renderscript.Element.Builder;

                public create(): android.renderscript.Element;

                public add(param0: android.renderscript.Element, param1: string, param2: number): android.renderscript.Element.Builder;
            }
            export class DataKind extends javalangEnum {
                public static PIXEL_A: android.renderscript.Element.DataKind;
                public static PIXEL_DEPTH: android.renderscript.Element.DataKind;
                public static PIXEL_L: android.renderscript.Element.DataKind;
                public static PIXEL_LA: android.renderscript.Element.DataKind;
                public static PIXEL_RGB: android.renderscript.Element.DataKind;
                public static PIXEL_RGBA: android.renderscript.Element.DataKind;
                public static PIXEL_YUV: android.renderscript.Element.DataKind;
                public static USER: android.renderscript.Element.DataKind;

                public static values(): native.Array<android.renderscript.Element.DataKind>;

                public static valueOf(param0: string): android.renderscript.Element.DataKind;
                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
            export class DataType extends javalangEnum {
                public static BOOLEAN: android.renderscript.Element.DataType;
                public static FLOAT_16: android.renderscript.Element.DataType;
                public static FLOAT_32: android.renderscript.Element.DataType;
                public static FLOAT_64: android.renderscript.Element.DataType;
                public static MATRIX_2X2: android.renderscript.Element.DataType;
                public static MATRIX_3X3: android.renderscript.Element.DataType;
                public static MATRIX_4X4: android.renderscript.Element.DataType;
                public static NONE: android.renderscript.Element.DataType;
                public static RS_ALLOCATION: android.renderscript.Element.DataType;
                public static RS_ELEMENT: android.renderscript.Element.DataType;
                public static RS_FONT: android.renderscript.Element.DataType;
                public static RS_MESH: android.renderscript.Element.DataType;
                public static RS_PROGRAM_FRAGMENT: android.renderscript.Element.DataType;
                public static RS_PROGRAM_RASTER: android.renderscript.Element.DataType;
                public static RS_PROGRAM_STORE: android.renderscript.Element.DataType;
                public static RS_PROGRAM_VERTEX: android.renderscript.Element.DataType;
                public static RS_SAMPLER: android.renderscript.Element.DataType;
                public static RS_SCRIPT: android.renderscript.Element.DataType;
                public static RS_TYPE: android.renderscript.Element.DataType;
                public static SIGNED_16: android.renderscript.Element.DataType;
                public static SIGNED_32: android.renderscript.Element.DataType;
                public static SIGNED_64: android.renderscript.Element.DataType;
                public static SIGNED_8: android.renderscript.Element.DataType;
                public static UNSIGNED_16: android.renderscript.Element.DataType;
                public static UNSIGNED_32: android.renderscript.Element.DataType;
                public static UNSIGNED_4_4_4_4: android.renderscript.Element.DataType;
                public static UNSIGNED_5_5_5_1: android.renderscript.Element.DataType;
                public static UNSIGNED_5_6_5: android.renderscript.Element.DataType;
                public static UNSIGNED_64: android.renderscript.Element.DataType;
                public static UNSIGNED_8: android.renderscript.Element.DataType;

                public static valueOf(param0: string): android.renderscript.Element.DataType;

                public static values(): native.Array<android.renderscript.Element.DataType>;

                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
        }
    }
}

/// <reference path="./android.renderscript.BaseObj.d.ts" />
/// <reference path="./android.renderscript.Byte2.d.ts" />
/// <reference path="./android.renderscript.Byte3.d.ts" />
/// <reference path="./android.renderscript.Byte4.d.ts" />
/// <reference path="./android.renderscript.Double2.d.ts" />
/// <reference path="./android.renderscript.Double3.d.ts" />
/// <reference path="./android.renderscript.Double4.d.ts" />
/// <reference path="./android.renderscript.Float2.d.ts" />
/// <reference path="./android.renderscript.Float3.d.ts" />
/// <reference path="./android.renderscript.Float4.d.ts" />
/// <reference path="./android.renderscript.Int2.d.ts" />
/// <reference path="./android.renderscript.Int3.d.ts" />
/// <reference path="./android.renderscript.Int4.d.ts" />
/// <reference path="./android.renderscript.Long2.d.ts" />
/// <reference path="./android.renderscript.Long3.d.ts" />
/// <reference path="./android.renderscript.Long4.d.ts" />
/// <reference path="./android.renderscript.Matrix2f.d.ts" />
/// <reference path="./android.renderscript.Matrix3f.d.ts" />
/// <reference path="./android.renderscript.Matrix4f.d.ts" />
/// <reference path="./android.renderscript.Short2.d.ts" />
/// <reference path="./android.renderscript.Short3.d.ts" />
/// <reference path="./android.renderscript.Short4.d.ts" />
declare module android {
    export module renderscript {
        export class FieldPacker extends javalangObject {
            public addF64(param0: android.renderscript.Double3): void;

            public addU32(param0: android.renderscript.Long4): void;

            public subI8(): number;

            public addI32(param0: number): void;
            public addI32(param0: android.renderscript.Int2): void;

            public addI8(param0: android.renderscript.Byte3): void;

            public addMatrix(param0: android.renderscript.Matrix2f): void;

            public subFloat2(): android.renderscript.Float2;

            public subMatrix4f(): android.renderscript.Matrix4f;

            public subDouble3(): android.renderscript.Double3;

            public subBoolean(): boolean;

            public addF32(param0: android.renderscript.Float4): void;

            public addU64(param0: android.renderscript.Long2): void;

            public getData(): native.Array<number>;

            public addU32(param0: android.renderscript.Long2): void;

            public addI32(param0: android.renderscript.Int4): void;

            public addU64(param0: android.renderscript.Long4): void;

            public addF32(param0: android.renderscript.Float2): void;

            public addU16(param0: android.renderscript.Int2): void;

            public subShort3(): android.renderscript.Short3;

            public constructor(param0: number);

            public addU16(param0: android.renderscript.Int3): void;

            public align(param0: number): void;

            public constructor(param0: native.Array<number>);

            public addI64(param0: number): void;

            public subF32(): number;

            public subShort2(): android.renderscript.Short2;

            public subDouble2(): android.renderscript.Double2;

            public addU8(param0: android.renderscript.Short3): void;

            public addMatrix(param0: android.renderscript.Matrix4f): void;

            public addI64(param0: android.renderscript.Long3): void;

            public addI16(param0: android.renderscript.Short3): void;

            public subMatrix3f(): android.renderscript.Matrix3f;

            public addU16(param0: number): void;

            public subFloat4(): android.renderscript.Float4;

            public subI32(): number;

            public subLong2(): android.renderscript.Long2;

            public addI8(param0: number): void;
            public addI8(param0: android.renderscript.Byte2): void;

            public subByte4(): android.renderscript.Byte4;

            public addI8(param0: android.renderscript.Byte4): void;

            public subFloat3(): android.renderscript.Float3;

            public subInt2(): android.renderscript.Int2;

            public addF64(param0: android.renderscript.Double2): void;

            public skip(param0: number): void;

            public subInt3(): android.renderscript.Int3;

            public subI64(): number;

            public addBoolean(param0: boolean): void;

            public subLong4(): android.renderscript.Long4;

            public addF32(param0: number): void;

            public reset(param0: number): void;

            public addI16(param0: number): void;

            public addF32(param0: android.renderscript.Float3): void;

            public addU64(param0: android.renderscript.Long3): void;

            public subalign(param0: number): void;

            public subMatrix2f(): android.renderscript.Matrix2f;

            public reset(): void;

            public addU32(param0: number): void;

            public addI32(param0: android.renderscript.Int3): void;

            public subShort4(): android.renderscript.Short4;

            public addU32(param0: android.renderscript.Long3): void;

            public subInt4(): android.renderscript.Int4;

            public addF64(param0: android.renderscript.Double4): void;

            public addMatrix(param0: android.renderscript.Matrix3f): void;

            public subI16(): number;

            public subByte2(): android.renderscript.Byte2;

            public subLong3(): android.renderscript.Long3;

            public addF64(param0: number): void;

            public addU16(param0: android.renderscript.Int4): void;

            public addU8(param0: number): void;

            public subByte3(): android.renderscript.Byte3;

            public addU8(param0: android.renderscript.Short2): void;

            public addI64(param0: android.renderscript.Long4): void;

            public addI16(param0: android.renderscript.Short4): void;

            public addU64(param0: number): void;

            public addU8(param0: android.renderscript.Short4): void;

            public addI64(param0: android.renderscript.Long2): void;

            public subDouble4(): android.renderscript.Double4;

            public addI16(param0: android.renderscript.Short2): void;

            public addObj(param0: android.renderscript.BaseObj): void;

            public subF64(): number;
        }
    }
}

declare module android {
    export module renderscript {
        export class Float2 extends javalangObject {
            public x: number;
            public y: number;

            public constructor();
            public constructor(param0: number, param1: number);
        }
    }
}

declare module android {
    export module renderscript {
        export class Float3 extends javalangObject {
            public x: number;
            public y: number;
            public z: number;

            public constructor(param0: number, param1: number, param2: number);
            public constructor();
        }
    }
}

declare module android {
    export module renderscript {
        export class Float4 extends javalangObject {
            public w: number;
            public x: number;
            public y: number;
            public z: number;

            public constructor();
            public constructor(param0: number, param1: number, param2: number, param3: number);
        }
    }
}

declare module android {
    export module renderscript {
        export class Int2 extends javalangObject {
            public x: number;
            public y: number;

            public constructor();
            public constructor(param0: number, param1: number);
        }
    }
}

declare module android {
    export module renderscript {
        export class Int3 extends javalangObject {
            public x: number;
            public y: number;
            public z: number;

            public constructor(param0: number, param1: number, param2: number);
            public constructor();
        }
    }
}

declare module android {
    export module renderscript {
        export class Int4 extends javalangObject {
            public w: number;
            public x: number;
            public y: number;
            public z: number;

            public constructor();
            public constructor(param0: number, param1: number, param2: number, param3: number);
        }
    }
}

declare module android {
    export module renderscript {
        export class Long2 extends javalangObject {
            public x: number;
            public y: number;

            public constructor();
            public constructor(param0: number, param1: number);
        }
    }
}

declare module android {
    export module renderscript {
        export class Long3 extends javalangObject {
            public x: number;
            public y: number;
            public z: number;

            public constructor(param0: number, param1: number, param2: number);
            public constructor();
        }
    }
}

declare module android {
    export module renderscript {
        export class Long4 extends javalangObject {
            public w: number;
            public x: number;
            public y: number;
            public z: number;

            public constructor();
            public constructor(param0: number, param1: number, param2: number, param3: number);
        }
    }
}

declare module android {
    export module renderscript {
        export class Matrix2f extends javalangObject {
            public rotate(param0: number): void;

            public loadScale(param0: number, param1: number): void;

            public multiply(param0: android.renderscript.Matrix2f): void;

            public constructor();
            public constructor(param0: native.Array<number>);

            public getArray(): native.Array<number>;

            public load(param0: android.renderscript.Matrix2f): void;

            public set(param0: number, param1: number, param2: number): void;

            public loadIdentity(): void;

            public loadRotate(param0: number): void;

            public scale(param0: number, param1: number): void;

            public loadMultiply(param0: android.renderscript.Matrix2f, param1: android.renderscript.Matrix2f): void;

            public get(param0: number, param1: number): number;

            public transpose(): void;
        }
    }
}

declare module android {
    export module renderscript {
        export class Matrix3f extends javalangObject {
            public loadScale(param0: number, param1: number, param2: number): void;

            public rotate(param0: number): void;

            public multiply(param0: android.renderscript.Matrix3f): void;

            public loadScale(param0: number, param1: number): void;

            public load(param0: android.renderscript.Matrix3f): void;

            public loadTranslate(param0: number, param1: number): void;

            public constructor();
            public constructor(param0: native.Array<number>);

            public getArray(): native.Array<number>;

            public loadRotate(param0: number, param1: number, param2: number, param3: number): void;

            public scale(param0: number, param1: number, param2: number): void;

            public set(param0: number, param1: number, param2: number): void;

            public loadIdentity(): void;

            public loadRotate(param0: number): void;

            public loadMultiply(param0: android.renderscript.Matrix3f, param1: android.renderscript.Matrix3f): void;

            public scale(param0: number, param1: number): void;

            public translate(param0: number, param1: number): void;

            public rotate(param0: number, param1: number, param2: number, param3: number): void;

            public get(param0: number, param1: number): number;

            public transpose(): void;
        }
    }
}

declare module android {
    export module renderscript {
        export class Matrix4f extends javalangObject {
            public loadMultiply(param0: android.renderscript.Matrix4f, param1: android.renderscript.Matrix4f): void;

            public loadOrtho(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

            public inverseTranspose(): boolean;

            public loadScale(param0: number, param1: number, param2: number): void;

            public loadOrthoWindow(param0: number, param1: number): void;

            public constructor();
            public constructor(param0: native.Array<number>);

            public loadProjectionNormalized(param0: number, param1: number): void;

            public getArray(): native.Array<number>;

            public loadRotate(param0: number, param1: number, param2: number, param3: number): void;

            public scale(param0: number, param1: number, param2: number): void;

            public set(param0: number, param1: number, param2: number): void;

            public loadIdentity(): void;

            public multiply(param0: android.renderscript.Matrix4f): void;

            public loadFrustum(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

            public translate(param0: number, param1: number, param2: number): void;

            public load(param0: android.renderscript.Matrix4f): void;

            public loadTranslate(param0: number, param1: number, param2: number): void;

            public loadPerspective(param0: number, param1: number, param2: number, param3: number): void;

            public rotate(param0: number, param1: number, param2: number, param3: number): void;

            public inverse(): boolean;

            public get(param0: number, param1: number): number;

            public transpose(): void;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module renderscript {
        export class RSDriverException extends android.renderscript.RSRuntimeException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module renderscript {
        export class RSIllegalArgumentException extends android.renderscript.RSRuntimeException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module renderscript {
        export class RSInvalidStateException extends android.renderscript.RSRuntimeException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module renderscript {
        export class RSRuntimeException extends javalangRuntimeException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module renderscript {
        export class RenderScript extends javalangObject {
            public static CREATE_FLAG_LOW_LATENCY: number;
            public static CREATE_FLAG_LOW_POWER: number;
            public static CREATE_FLAG_NONE: number;

            public static createMultiContext(param0: android.content.Context, param1: android.renderscript.RenderScript.ContextType, param2: number, param3: number): android.renderscript.RenderScript;

            public sendMessage(param0: number, param1: native.Array<number>): void;

            public static getMinorVersion(): number;

            public finish(): void;

            public destroy(): void;

            public setPriority(param0: android.renderscript.RenderScript.Priority): void;

            public getApplicationContext(): android.content.Context;

            public static create(param0: android.content.Context): android.renderscript.RenderScript;

            public getMessageHandler(): android.renderscript.RenderScript.RSMessageHandler;

            public setMessageHandler(param0: android.renderscript.RenderScript.RSMessageHandler): void;

            public static create(param0: android.content.Context, param1: android.renderscript.RenderScript.ContextType, param2: number): android.renderscript.RenderScript;

            public setErrorHandler(param0: android.renderscript.RenderScript.RSErrorHandler): void;

            public getErrorHandler(): android.renderscript.RenderScript.RSErrorHandler;

            public static create(param0: android.content.Context, param1: android.renderscript.RenderScript.ContextType): android.renderscript.RenderScript;

            public static releaseAllContexts(): void;

            public finalize(): void;

            public contextDump(): void;
        }
        export module RenderScript {
            export class ContextType extends javalangEnum {
                public static DEBUG: android.renderscript.RenderScript.ContextType;
                public static NORMAL: android.renderscript.RenderScript.ContextType;
                public static PROFILE: android.renderscript.RenderScript.ContextType;

                public static values(): native.Array<android.renderscript.RenderScript.ContextType>;

                public static valueOf(param0: string): android.renderscript.RenderScript.ContextType;
                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
            export class Priority extends javalangEnum {
                public static LOW: android.renderscript.RenderScript.Priority;
                public static NORMAL: android.renderscript.RenderScript.Priority;

                public static values(): native.Array<android.renderscript.RenderScript.Priority>;

                public static valueOf(param0: string): android.renderscript.RenderScript.Priority;
                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
            export class RSErrorHandler extends javalangObject implements javalangRunnable {
                public mErrorMessage: string;
                public mErrorNum: number;

                public run(): void;

                public constructor();
            }
            export class RSMessageHandler extends javalangObject implements javalangRunnable {
                public mData: native.Array<number>;
                public mID: number;
                public mLength: number;

                public run(): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.renderscript.RenderScript.d.ts" />
/// <reference path="./android.renderscript.Sampler.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module renderscript {
        export class Sampler extends android.renderscript.BaseObj {
            public static WRAP_NEAREST(param0: android.renderscript.RenderScript): android.renderscript.Sampler;

            public getMinification(): android.renderscript.Sampler.Value;

            public static CLAMP_LINEAR(param0: android.renderscript.RenderScript): android.renderscript.Sampler;

            public getAnisotropy(): number;

            public getWrapT(): android.renderscript.Sampler.Value;

            public static WRAP_LINEAR_MIP_LINEAR(param0: android.renderscript.RenderScript): android.renderscript.Sampler;

            public static MIRRORED_REPEAT_NEAREST(param0: android.renderscript.RenderScript): android.renderscript.Sampler;

            public static CLAMP_LINEAR_MIP_LINEAR(param0: android.renderscript.RenderScript): android.renderscript.Sampler;

            public static MIRRORED_REPEAT_LINEAR(param0: android.renderscript.RenderScript): android.renderscript.Sampler;

            public static CLAMP_NEAREST(param0: android.renderscript.RenderScript): android.renderscript.Sampler;

            public static WRAP_LINEAR(param0: android.renderscript.RenderScript): android.renderscript.Sampler;

            public getMagnification(): android.renderscript.Sampler.Value;

            public getWrapS(): android.renderscript.Sampler.Value;

            public static MIRRORED_REPEAT_LINEAR_MIP_LINEAR(param0: android.renderscript.RenderScript): android.renderscript.Sampler;
        }
        export module Sampler {
            export class Builder extends javalangObject {
                public constructor(param0: android.renderscript.RenderScript);

                public setMinification(param0: android.renderscript.Sampler.Value): void;

                public setAnisotropy(param0: number): void;

                public setMagnification(param0: android.renderscript.Sampler.Value): void;

                public create(): android.renderscript.Sampler;

                public setWrapT(param0: android.renderscript.Sampler.Value): void;

                public setWrapS(param0: android.renderscript.Sampler.Value): void;
            }
            export class Value extends javalangEnum {
                public static CLAMP: android.renderscript.Sampler.Value;
                public static LINEAR: android.renderscript.Sampler.Value;
                public static LINEAR_MIP_LINEAR: android.renderscript.Sampler.Value;
                public static LINEAR_MIP_NEAREST: android.renderscript.Sampler.Value;
                public static MIRRORED_REPEAT: android.renderscript.Sampler.Value;
                public static NEAREST: android.renderscript.Sampler.Value;
                public static WRAP: android.renderscript.Sampler.Value;

                public static values(): native.Array<android.renderscript.Sampler.Value>;

                public static valueOf(param0: string): android.renderscript.Sampler.Value;
                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
        }
    }
}

/// <reference path="./android.renderscript.Allocation.d.ts" />
/// <reference path="./android.renderscript.BaseObj.d.ts" />
/// <reference path="./android.renderscript.Element.d.ts" />
/// <reference path="./android.renderscript.FieldPacker.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />
/// <reference path="./android.renderscript.Type.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module renderscript {
        export class Script extends android.renderscript.BaseObj {
            public invoke(param0: number, param1: android.renderscript.FieldPacker): void;

            public forEach(param0: number, param1: native.Array<android.renderscript.Allocation>, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker): void;
            public forEach(param0: number, param1: android.renderscript.Allocation, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker, param4: android.renderscript.Script.LaunchOptions): void;
            public forEach(param0: number, param1: android.renderscript.Allocation, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker): void;

            public createFieldID(param0: number, param1: android.renderscript.Element): android.renderscript.Script.FieldID;

            public getVarB(param0: number): boolean;

            public setVar(param0: number, param1: android.renderscript.BaseObj): void;
            public setVar(param0: number, param1: android.renderscript.FieldPacker): void;

            public getVarF(param0: number): number;

            public setVar(param0: number, param1: boolean): void;
            public setVar(param0: number, param1: android.renderscript.FieldPacker, param2: android.renderscript.Element, param3: native.Array<number>): void;

            public forEach(param0: number, param1: native.Array<android.renderscript.Allocation>, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker, param4: android.renderscript.Script.LaunchOptions): void;

            public invoke(param0: number): void;

            public getVarJ(param0: number): number;

            public setVar(param0: number, param1: number): void;

            public setTimeZone(param0: string): void;

            public bindAllocation(param0: android.renderscript.Allocation, param1: number): void;

            public getVarD(param0: number): number;

            public createKernelID(param0: number, param1: number, param2: android.renderscript.Element, param3: android.renderscript.Element): android.renderscript.Script.KernelID;

            public getVarI(param0: number): number;

            public createInvokeID(param0: number): android.renderscript.Script.InvokeID;

            public getVarV(param0: number, param1: android.renderscript.FieldPacker): void;
        }
        export module Script {
            export class Builder extends javalangObject {
            }
            export class FieldBase extends javalangObject {
                public mAllocation: android.renderscript.Allocation;
                public mElement: android.renderscript.Element;

                public getType(): android.renderscript.Type;

                public updateAllocation(): void;

                public init(param0: android.renderscript.RenderScript, param1: number, param2: number): void;

                public getAllocation(): android.renderscript.Allocation;

                public init(param0: android.renderscript.RenderScript, param1: number): void;

                public getElement(): android.renderscript.Element;

                public constructor();
            }
            export class FieldID extends android.renderscript.BaseObj {
            }
            export class InvokeID extends android.renderscript.BaseObj {
            }
            export class KernelID extends android.renderscript.BaseObj {
            }
            export class LaunchOptions extends javalangObject {
                public setX(param0: number, param1: number): android.renderscript.Script.LaunchOptions;

                public getZStart(): number;

                public getYStart(): number;

                public getYEnd(): number;

                public getXEnd(): number;

                public getZEnd(): number;

                public setY(param0: number, param1: number): android.renderscript.Script.LaunchOptions;

                public getXStart(): number;

                public constructor();

                public setZ(param0: number, param1: number): android.renderscript.Script.LaunchOptions;
            }
        }
    }
}

/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module renderscript {
        export class ScriptC extends android.renderscript.Script {
            public constructor(param0: number, param1: android.renderscript.RenderScript);
            public constructor(param0: android.renderscript.RenderScript, param1: string, param2: native.Array<number>, param3: native.Array<number>);
            public constructor(param0: android.renderscript.RenderScript, param1: android.content.res.Resources, param2: number);
        }
    }
}

/// <reference path="./android.renderscript.Allocation.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />
/// <reference path="./android.renderscript.ScriptGroup.d.ts" />
/// <reference path="./android.renderscript.Type.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module renderscript {
        export class ScriptGroup extends android.renderscript.BaseObj {
            public execute(): void;

            public setInput(param0: android.renderscript.Script.KernelID, param1: android.renderscript.Allocation): void;

            public setOutput(param0: android.renderscript.Script.KernelID, param1: android.renderscript.Allocation): void;

            public execute(param0: native.Array<javalangObject>): native.Array<javalangObject>;
        }
        export module ScriptGroup {
            export class Binding extends javalangObject {
                public constructor(param0: android.renderscript.Script.FieldID, param1: javalangObject);
            }
            export class Builder extends javalangObject {
                public constructor(param0: android.renderscript.RenderScript);

                public create(): android.renderscript.ScriptGroup;

                public addKernel(param0: android.renderscript.Script.KernelID): android.renderscript.ScriptGroup.Builder;

                public addConnection(param0: android.renderscript.Type, param1: android.renderscript.Script.KernelID, param2: android.renderscript.Script.FieldID): android.renderscript.ScriptGroup.Builder;
                public addConnection(param0: android.renderscript.Type, param1: android.renderscript.Script.KernelID, param2: android.renderscript.Script.KernelID): android.renderscript.ScriptGroup.Builder;
            }
            export class Builder2 extends javalangObject {
                public constructor(param0: android.renderscript.RenderScript);

                public addInvoke(param0: android.renderscript.Script.InvokeID, param1: native.Array<javalangObject>): android.renderscript.ScriptGroup.Closure;

                public addInput(): android.renderscript.ScriptGroup.Input;

                public addKernel(param0: android.renderscript.Script.KernelID, param1: android.renderscript.Type, param2: native.Array<javalangObject>): android.renderscript.ScriptGroup.Closure;

                public create(param0: string, param1: native.Array<android.renderscript.ScriptGroup.Future>): android.renderscript.ScriptGroup;
            }
            export class Closure extends android.renderscript.BaseObj {
                public getReturn(): android.renderscript.ScriptGroup.Future;

                public getGlobal(param0: android.renderscript.Script.FieldID): android.renderscript.ScriptGroup.Future;
            }
            export class Future extends javalangObject {
            }
            export class Input extends javalangObject {
            }
        }
    }
}

declare module android {
    export module renderscript {
        export abstract class ScriptIntrinsic extends android.renderscript.Script {
        }
    }
}

/// <reference path="./android.renderscript.Allocation.d.ts" />
/// <reference path="./android.renderscript.Element.d.ts" />
/// <reference path="./android.renderscript.FieldPacker.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />
declare module android {
    export module renderscript {
        export class ScriptIntrinsic3DLUT extends android.renderscript.ScriptIntrinsic {
            public forEach(param0: number, param1: native.Array<android.renderscript.Allocation>, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker): void;
            public forEach(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;
            public forEach(param0: number, param1: android.renderscript.Allocation, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker, param4: android.renderscript.Script.LaunchOptions): void;

            public static create(param0: android.renderscript.RenderScript, param1: android.renderscript.Element): android.renderscript.ScriptIntrinsic3DLUT;

            public forEach(param0: number, param1: android.renderscript.Allocation, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker): void;
            public forEach(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;

            public getKernelID(): android.renderscript.Script.KernelID;

            public setLUT(param0: android.renderscript.Allocation): void;

            public forEach(param0: number, param1: native.Array<android.renderscript.Allocation>, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker, param4: android.renderscript.Script.LaunchOptions): void;
        }
    }
}

/// <reference path="./android.renderscript.Allocation.d.ts" />
/// <reference path="./android.renderscript.Double2.d.ts" />
/// <reference path="./android.renderscript.Float2.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />
declare module android {
    export module renderscript {
        export class ScriptIntrinsicBLAS extends android.renderscript.ScriptIntrinsic {
            public static CONJ_TRANSPOSE: number;
            public static LEFT: number;
            public static LOWER: number;
            public static NON_UNIT: number;
            public static NO_TRANSPOSE: number;
            public static RIGHT: number;
            public static TRANSPOSE: number;
            public static UNIT: number;
            public static UPPER: number;

            public CHER2K(param0: number, param1: number, param2: android.renderscript.Float2, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;

            public ZHEMV(param0: number, param1: android.renderscript.Double2, param2: android.renderscript.Allocation, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Double2, param6: android.renderscript.Allocation, param7: number): void;

            public ZHPR(param0: number, param1: number, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation): void;

            public CTBSV(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Allocation, param5: android.renderscript.Allocation, param6: number): void;

            public SSYRK(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Allocation): void;

            public ZHERK(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Allocation): void;

            public DGBMV(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Allocation, param5: android.renderscript.Allocation, param6: number, param7: number, param8: android.renderscript.Allocation, param9: number): void;

            public CHERK(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Allocation): void;

            public DSYR2K(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;

            public DSYMV(param0: number, param1: number, param2: android.renderscript.Allocation, param3: android.renderscript.Allocation, param4: number, param5: number, param6: android.renderscript.Allocation, param7: number): void;

            public CHER(param0: number, param1: number, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation): void;

            public CHBMV(param0: number, param1: number, param2: android.renderscript.Float2, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Float2, param7: android.renderscript.Allocation, param8: number): void;

            public ZTBMV(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Allocation, param5: android.renderscript.Allocation, param6: number): void;

            public ZGERU(param0: android.renderscript.Double2, param1: android.renderscript.Allocation, param2: number, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Allocation): void;

            public SSPMV(param0: number, param1: number, param2: android.renderscript.Allocation, param3: android.renderscript.Allocation, param4: number, param5: number, param6: android.renderscript.Allocation, param7: number): void;

            public DTBMV(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Allocation, param5: android.renderscript.Allocation, param6: number): void;

            public SGBMV(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Allocation, param5: android.renderscript.Allocation, param6: number, param7: number, param8: android.renderscript.Allocation, param9: number): void;

            public CHEMV(param0: number, param1: android.renderscript.Float2, param2: android.renderscript.Allocation, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Float2, param6: android.renderscript.Allocation, param7: number): void;

            public CGERU(param0: android.renderscript.Float2, param1: android.renderscript.Allocation, param2: number, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Allocation): void;

            public STBSV(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Allocation, param5: android.renderscript.Allocation, param6: number): void;

            public DTRSV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;

            public CGEMM(param0: number, param1: number, param2: android.renderscript.Float2, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: android.renderscript.Float2, param6: android.renderscript.Allocation): void;

            public CTRMV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;

            public DGEMM(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;

            public BNNM(param0: android.renderscript.Allocation, param1: number, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation, param5: number, param6: number): void;

            public DSYMM(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;

            public STPMV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;

            public CHEMM(param0: number, param1: number, param2: android.renderscript.Float2, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: android.renderscript.Float2, param6: android.renderscript.Allocation): void;

            public SSYMV(param0: number, param1: number, param2: android.renderscript.Allocation, param3: android.renderscript.Allocation, param4: number, param5: number, param6: android.renderscript.Allocation, param7: number): void;

            public CHPR2(param0: number, param1: android.renderscript.Float2, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;

            public STPSV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;

            public ZHPR2(param0: number, param1: android.renderscript.Double2, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;

            public ZHER2(param0: number, param1: android.renderscript.Double2, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;

            public ZHER2K(param0: number, param1: number, param2: android.renderscript.Double2, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;

            public CSYR2K(param0: number, param1: number, param2: android.renderscript.Float2, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: android.renderscript.Float2, param6: android.renderscript.Allocation): void;

            public CGBMV(param0: number, param1: number, param2: number, param3: android.renderscript.Float2, param4: android.renderscript.Allocation, param5: android.renderscript.Allocation, param6: number, param7: android.renderscript.Float2, param8: android.renderscript.Allocation, param9: number): void;

            public SGER(param0: number, param1: android.renderscript.Allocation, param2: number, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Allocation): void;

            public DTRMV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;

            public STRSM(param0: number, param1: number, param2: number, param3: number, param4: number, param5: android.renderscript.Allocation, param6: android.renderscript.Allocation): void;

            public CTRSV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;

            public SGEMV(param0: number, param1: number, param2: android.renderscript.Allocation, param3: android.renderscript.Allocation, param4: number, param5: number, param6: android.renderscript.Allocation, param7: number): void;

            public DGEMV(param0: number, param1: number, param2: android.renderscript.Allocation, param3: android.renderscript.Allocation, param4: number, param5: number, param6: android.renderscript.Allocation, param7: number): void;

            public STRMV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;

            public DTRSM(param0: number, param1: number, param2: number, param3: number, param4: number, param5: android.renderscript.Allocation, param6: android.renderscript.Allocation): void;

            public DTRMM(param0: number, param1: number, param2: number, param3: number, param4: number, param5: android.renderscript.Allocation, param6: android.renderscript.Allocation): void;

            public CTPMV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;

            public ZGERC(param0: android.renderscript.Double2, param1: android.renderscript.Allocation, param2: number, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Allocation): void;

            public SSYR2K(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;

            public DTPSV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;

            public ZTRSM(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Double2, param5: android.renderscript.Allocation, param6: android.renderscript.Allocation): void;

            public CGEMV(param0: number, param1: android.renderscript.Float2, param2: android.renderscript.Allocation, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Float2, param6: android.renderscript.Allocation, param7: number): void;

            public ZTPMV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;

            public DSPMV(param0: number, param1: number, param2: android.renderscript.Allocation, param3: android.renderscript.Allocation, param4: number, param5: number, param6: android.renderscript.Allocation, param7: number): void;

            public CSYRK(param0: number, param1: number, param2: android.renderscript.Float2, param3: android.renderscript.Allocation, param4: android.renderscript.Float2, param5: android.renderscript.Allocation): void;

            public ZTPSV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;

            public DSYR(param0: number, param1: number, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation): void;

            public ZTRMM(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Double2, param5: android.renderscript.Allocation, param6: android.renderscript.Allocation): void;

            public CHPR(param0: number, param1: number, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation): void;

            public DTPMV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;

            public CTRSM(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Float2, param5: android.renderscript.Allocation, param6: android.renderscript.Allocation): void;

            public CTBMV(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Allocation, param5: android.renderscript.Allocation, param6: number): void;

            public STRSV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;

            public DSYRK(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Allocation): void;

            public ZGBMV(param0: number, param1: number, param2: number, param3: android.renderscript.Double2, param4: android.renderscript.Allocation, param5: android.renderscript.Allocation, param6: number, param7: android.renderscript.Double2, param8: android.renderscript.Allocation, param9: number): void;

            public ZTBSV(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Allocation, param5: android.renderscript.Allocation, param6: number): void;

            public ZHBMV(param0: number, param1: number, param2: android.renderscript.Double2, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Double2, param7: android.renderscript.Allocation, param8: number): void;

            public ZGEMM(param0: number, param1: number, param2: android.renderscript.Double2, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: android.renderscript.Double2, param6: android.renderscript.Allocation): void;

            public CHPMV(param0: number, param1: android.renderscript.Float2, param2: android.renderscript.Allocation, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Float2, param6: android.renderscript.Allocation, param7: number): void;

            public STBMV(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Allocation, param5: android.renderscript.Allocation, param6: number): void;

            public ZHEMM(param0: number, param1: number, param2: android.renderscript.Double2, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: android.renderscript.Double2, param6: android.renderscript.Allocation): void;

            public DSPR2(param0: number, param1: number, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;

            public static create(param0: android.renderscript.RenderScript): android.renderscript.ScriptIntrinsicBLAS;

            public SSPR(param0: number, param1: number, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation): void;

            public DTBSV(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Allocation, param5: android.renderscript.Allocation, param6: number): void;

            public CTPSV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;

            public ZSYR2K(param0: number, param1: number, param2: android.renderscript.Double2, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: android.renderscript.Double2, param6: android.renderscript.Allocation): void;

            public ZHPMV(param0: number, param1: android.renderscript.Double2, param2: android.renderscript.Allocation, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Double2, param6: android.renderscript.Allocation, param7: number): void;

            public ZTRMV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;

            public CHER2(param0: number, param1: android.renderscript.Float2, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;

            public ZHER(param0: number, param1: number, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation): void;

            public SSYR2(param0: number, param1: number, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;

            public SSBMV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number, param6: number, param7: android.renderscript.Allocation, param8: number): void;

            public DSYR2(param0: number, param1: number, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;

            public SSYMM(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;

            public CSYMM(param0: number, param1: number, param2: android.renderscript.Float2, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: android.renderscript.Float2, param6: android.renderscript.Allocation): void;

            public CGERC(param0: android.renderscript.Float2, param1: android.renderscript.Allocation, param2: number, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Allocation): void;

            public SGEMM(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;

            public DGER(param0: number, param1: android.renderscript.Allocation, param2: number, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Allocation): void;

            public DSPR(param0: number, param1: number, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation): void;

            public ZGEMV(param0: number, param1: android.renderscript.Double2, param2: android.renderscript.Allocation, param3: android.renderscript.Allocation, param4: number, param5: android.renderscript.Double2, param6: android.renderscript.Allocation, param7: number): void;

            public SSPR2(param0: number, param1: number, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation, param5: number, param6: android.renderscript.Allocation): void;

            public DSBMV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number, param6: number, param7: android.renderscript.Allocation, param8: number): void;

            public ZTRSV(param0: number, param1: number, param2: number, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: number): void;

            public STRMM(param0: number, param1: number, param2: number, param3: number, param4: number, param5: android.renderscript.Allocation, param6: android.renderscript.Allocation): void;

            public SSYR(param0: number, param1: number, param2: android.renderscript.Allocation, param3: number, param4: android.renderscript.Allocation): void;

            public ZSYRK(param0: number, param1: number, param2: android.renderscript.Double2, param3: android.renderscript.Allocation, param4: android.renderscript.Double2, param5: android.renderscript.Allocation): void;

            public CTRMM(param0: number, param1: number, param2: number, param3: number, param4: android.renderscript.Float2, param5: android.renderscript.Allocation, param6: android.renderscript.Allocation): void;

            public ZSYMM(param0: number, param1: number, param2: android.renderscript.Double2, param3: android.renderscript.Allocation, param4: android.renderscript.Allocation, param5: android.renderscript.Double2, param6: android.renderscript.Allocation): void;
        }
    }
}

/// <reference path="./android.renderscript.Allocation.d.ts" />
/// <reference path="./android.renderscript.Element.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />
declare module android {
    export module renderscript {
        export class ScriptIntrinsicBlend extends android.renderscript.ScriptIntrinsic {
            public forEachDstIn(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;

            public getKernelIDDst(): android.renderscript.Script.KernelID;

            public forEachSrcOver(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;

            public forEachDstOver(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;

            public getKernelIDXor(): android.renderscript.Script.KernelID;

            public forEachDstOver(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;

            public getKernelIDClear(): android.renderscript.Script.KernelID;

            public getKernelIDDstOver(): android.renderscript.Script.KernelID;

            public forEachSrcOut(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;

            public forEachSrcIn(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;

            public forEachClear(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;

            public static create(param0: android.renderscript.RenderScript, param1: android.renderscript.Element): android.renderscript.ScriptIntrinsicBlend;

            public forEachDstOut(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;

            public getKernelIDDstOut(): android.renderscript.Script.KernelID;

            public getKernelIDSrcAtop(): android.renderscript.Script.KernelID;

            public forEachSubtract(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;

            public forEachDst(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;

            public forEachSrcOver(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;

            public forEachDstIn(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;

            public forEachDstAtop(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;

            public forEachSrcAtop(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;

            public forEachXor(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;

            public getKernelIDSrc(): android.renderscript.Script.KernelID;

            public forEachAdd(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;

            public forEachSubtract(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;

            public forEachSrc(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;

            public forEachClear(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;

            public getKernelIDDstIn(): android.renderscript.Script.KernelID;

            public getKernelIDDstAtop(): android.renderscript.Script.KernelID;

            public getKernelIDMultiply(): android.renderscript.Script.KernelID;

            public forEachSrc(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;

            public forEachDstAtop(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;

            public getKernelIDSubtract(): android.renderscript.Script.KernelID;

            public getKernelIDSrcOut(): android.renderscript.Script.KernelID;

            public forEachXor(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;

            public forEachAdd(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;

            public getKernelIDAdd(): android.renderscript.Script.KernelID;

            public forEachDst(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;

            public forEachSrcOut(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;

            public getKernelIDSrcOver(): android.renderscript.Script.KernelID;

            public forEachMultiply(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;

            public forEachSrcIn(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;

            public getKernelIDSrcIn(): android.renderscript.Script.KernelID;

            public forEachMultiply(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;

            public forEachSrcAtop(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;

            public forEachDstOut(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;
        }
    }
}

/// <reference path="./android.renderscript.Allocation.d.ts" />
/// <reference path="./android.renderscript.Element.d.ts" />
/// <reference path="./android.renderscript.FieldPacker.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />
declare module android {
    export module renderscript {
        export class ScriptIntrinsicBlur extends android.renderscript.ScriptIntrinsic {
            public forEach(param0: number, param1: native.Array<android.renderscript.Allocation>, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker): void;

            public setRadius(param0: number): void;

            public getFieldID_Input(): android.renderscript.Script.FieldID;

            public forEach(param0: number, param1: android.renderscript.Allocation, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker, param4: android.renderscript.Script.LaunchOptions): void;
            public forEach(param0: number, param1: android.renderscript.Allocation, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker): void;

            public setInput(param0: android.renderscript.Allocation): void;

            public forEach(param0: android.renderscript.Allocation): void;

            public getKernelID(): android.renderscript.Script.KernelID;

            public static create(param0: android.renderscript.RenderScript, param1: android.renderscript.Element): android.renderscript.ScriptIntrinsicBlur;

            public forEach(param0: number, param1: native.Array<android.renderscript.Allocation>, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker, param4: android.renderscript.Script.LaunchOptions): void;
            public forEach(param0: android.renderscript.Allocation, param1: android.renderscript.Script.LaunchOptions): void;
        }
    }
}

/// <reference path="./android.renderscript.Allocation.d.ts" />
/// <reference path="./android.renderscript.Element.d.ts" />
/// <reference path="./android.renderscript.FieldPacker.d.ts" />
/// <reference path="./android.renderscript.Float4.d.ts" />
/// <reference path="./android.renderscript.Matrix3f.d.ts" />
/// <reference path="./android.renderscript.Matrix4f.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />
declare module android {
    export module renderscript {
        export class ScriptIntrinsicColorMatrix extends android.renderscript.ScriptIntrinsic {
            public forEach(param0: number, param1: native.Array<android.renderscript.Allocation>, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker): void;
            public forEach(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;

            public static create(param0: android.renderscript.RenderScript, param1: android.renderscript.Element): android.renderscript.ScriptIntrinsicColorMatrix;

            public forEach(param0: number, param1: android.renderscript.Allocation, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker, param4: android.renderscript.Script.LaunchOptions): void;
            public forEach(param0: number, param1: android.renderscript.Allocation, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker): void;

            public setAdd(param0: number, param1: number, param2: number, param3: number): void;

            public setYUVtoRGB(): void;

            public setRGBtoYUV(): void;

            public forEach(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;

            public setAdd(param0: android.renderscript.Float4): void;

            public forEach(param0: number, param1: native.Array<android.renderscript.Allocation>, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker, param4: android.renderscript.Script.LaunchOptions): void;

            public setColorMatrix(param0: android.renderscript.Matrix4f): void;

            public static create(param0: android.renderscript.RenderScript): android.renderscript.ScriptIntrinsicColorMatrix;

            public setColorMatrix(param0: android.renderscript.Matrix3f): void;

            public getKernelID(): android.renderscript.Script.KernelID;

            public setGreyscale(): void;
        }
    }
}

/// <reference path="./android.renderscript.Allocation.d.ts" />
/// <reference path="./android.renderscript.Element.d.ts" />
/// <reference path="./android.renderscript.FieldPacker.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />
declare module android {
    export module renderscript {
        export class ScriptIntrinsicConvolve3x3 extends android.renderscript.ScriptIntrinsic {
            public forEach(param0: number, param1: native.Array<android.renderscript.Allocation>, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker): void;

            public getFieldID_Input(): android.renderscript.Script.FieldID;

            public forEach(param0: number, param1: android.renderscript.Allocation, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker, param4: android.renderscript.Script.LaunchOptions): void;
            public forEach(param0: number, param1: android.renderscript.Allocation, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker): void;

            public setInput(param0: android.renderscript.Allocation): void;

            public forEach(param0: android.renderscript.Allocation): void;

            public setCoefficients(param0: native.Array<number>): void;

            public getKernelID(): android.renderscript.Script.KernelID;

            public forEach(param0: number, param1: native.Array<android.renderscript.Allocation>, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker, param4: android.renderscript.Script.LaunchOptions): void;

            public static create(param0: android.renderscript.RenderScript, param1: android.renderscript.Element): android.renderscript.ScriptIntrinsicConvolve3x3;

            public forEach(param0: android.renderscript.Allocation, param1: android.renderscript.Script.LaunchOptions): void;
        }
    }
}

/// <reference path="./android.renderscript.Allocation.d.ts" />
/// <reference path="./android.renderscript.Element.d.ts" />
/// <reference path="./android.renderscript.FieldPacker.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />
declare module android {
    export module renderscript {
        export class ScriptIntrinsicConvolve5x5 extends android.renderscript.ScriptIntrinsic {
            public forEach(param0: number, param1: native.Array<android.renderscript.Allocation>, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker): void;

            public getFieldID_Input(): android.renderscript.Script.FieldID;

            public forEach(param0: number, param1: android.renderscript.Allocation, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker, param4: android.renderscript.Script.LaunchOptions): void;
            public forEach(param0: number, param1: android.renderscript.Allocation, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker): void;

            public setInput(param0: android.renderscript.Allocation): void;

            public forEach(param0: android.renderscript.Allocation): void;

            public static create(param0: android.renderscript.RenderScript, param1: android.renderscript.Element): android.renderscript.ScriptIntrinsicConvolve5x5;

            public setCoefficients(param0: native.Array<number>): void;

            public getKernelID(): android.renderscript.Script.KernelID;

            public forEach(param0: number, param1: native.Array<android.renderscript.Allocation>, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker, param4: android.renderscript.Script.LaunchOptions): void;
            public forEach(param0: android.renderscript.Allocation, param1: android.renderscript.Script.LaunchOptions): void;
        }
    }
}

/// <reference path="./android.renderscript.Allocation.d.ts" />
/// <reference path="./android.renderscript.Element.d.ts" />
/// <reference path="./android.renderscript.FieldPacker.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />
declare module android {
    export module renderscript {
        export class ScriptIntrinsicHistogram extends android.renderscript.ScriptIntrinsic {
            public static create(param0: android.renderscript.RenderScript, param1: android.renderscript.Element): android.renderscript.ScriptIntrinsicHistogram;

            public forEach(param0: number, param1: native.Array<android.renderscript.Allocation>, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker): void;
            public forEach(param0: number, param1: android.renderscript.Allocation, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker, param4: android.renderscript.Script.LaunchOptions): void;
            public forEach(param0: number, param1: android.renderscript.Allocation, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker): void;
            public forEach(param0: number, param1: native.Array<android.renderscript.Allocation>, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker, param4: android.renderscript.Script.LaunchOptions): void;

            public setDotCoefficients(param0: number, param1: number, param2: number, param3: number): void;

            public forEach(param0: android.renderscript.Allocation, param1: android.renderscript.Script.LaunchOptions): void;

            public getFieldID_Input(): android.renderscript.Script.FieldID;

            public getKernelID_Separate(): android.renderscript.Script.KernelID;

            public forEach(param0: android.renderscript.Allocation): void;

            public setOutput(param0: android.renderscript.Allocation): void;

            public forEach_Dot(param0: android.renderscript.Allocation): void;
            public forEach_Dot(param0: android.renderscript.Allocation, param1: android.renderscript.Script.LaunchOptions): void;
        }
    }
}

/// <reference path="./android.renderscript.Allocation.d.ts" />
/// <reference path="./android.renderscript.Element.d.ts" />
/// <reference path="./android.renderscript.FieldPacker.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />
declare module android {
    export module renderscript {
        export class ScriptIntrinsicLUT extends android.renderscript.ScriptIntrinsic {
            public setRed(param0: number, param1: number): void;

            public forEach(param0: number, param1: native.Array<android.renderscript.Allocation>, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker): void;
            public forEach(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation): void;

            public setGreen(param0: number, param1: number): void;

            public setBlue(param0: number, param1: number): void;

            public forEach(param0: number, param1: android.renderscript.Allocation, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker, param4: android.renderscript.Script.LaunchOptions): void;

            public setAlpha(param0: number, param1: number): void;

            public forEach(param0: number, param1: android.renderscript.Allocation, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker): void;

            public static create(param0: android.renderscript.RenderScript, param1: android.renderscript.Element): android.renderscript.ScriptIntrinsicLUT;

            public forEach(param0: android.renderscript.Allocation, param1: android.renderscript.Allocation, param2: android.renderscript.Script.LaunchOptions): void;

            public getKernelID(): android.renderscript.Script.KernelID;

            public forEach(param0: number, param1: native.Array<android.renderscript.Allocation>, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker, param4: android.renderscript.Script.LaunchOptions): void;
        }
    }
}

/// <reference path="./android.renderscript.Allocation.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />
declare module android {
    export module renderscript {
        export class ScriptIntrinsicResize extends android.renderscript.ScriptIntrinsic {
            public forEach_bicubic(param0: android.renderscript.Allocation): void;

            public getKernelID_bicubic(): android.renderscript.Script.KernelID;

            public getFieldID_Input(): android.renderscript.Script.FieldID;

            public setInput(param0: android.renderscript.Allocation): void;

            public static create(param0: android.renderscript.RenderScript): android.renderscript.ScriptIntrinsicResize;

            public forEach_bicubic(param0: android.renderscript.Allocation, param1: android.renderscript.Script.LaunchOptions): void;
        }
    }
}

/// <reference path="./android.renderscript.Allocation.d.ts" />
/// <reference path="./android.renderscript.Element.d.ts" />
/// <reference path="./android.renderscript.FieldPacker.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />
declare module android {
    export module renderscript {
        export class ScriptIntrinsicYuvToRGB extends android.renderscript.ScriptIntrinsic {
            public forEach(param0: number, param1: native.Array<android.renderscript.Allocation>, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker): void;

            public getFieldID_Input(): android.renderscript.Script.FieldID;

            public forEach(param0: number, param1: android.renderscript.Allocation, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker, param4: android.renderscript.Script.LaunchOptions): void;
            public forEach(param0: number, param1: android.renderscript.Allocation, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker): void;

            public setInput(param0: android.renderscript.Allocation): void;

            public forEach(param0: android.renderscript.Allocation): void;

            public static create(param0: android.renderscript.RenderScript, param1: android.renderscript.Element): android.renderscript.ScriptIntrinsicYuvToRGB;

            public getKernelID(): android.renderscript.Script.KernelID;

            public forEach(param0: number, param1: native.Array<android.renderscript.Allocation>, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker, param4: android.renderscript.Script.LaunchOptions): void;
        }
    }
}

declare module android {
    export module renderscript {
        export class Short2 extends javalangObject {
            public x: number;
            public y: number;

            public constructor();
            public constructor(param0: number, param1: number);
        }
    }
}

declare module android {
    export module renderscript {
        export class Short3 extends javalangObject {
            public x: number;
            public y: number;
            public z: number;

            public constructor(param0: number, param1: number, param2: number);
            public constructor();
        }
    }
}

declare module android {
    export module renderscript {
        export class Short4 extends javalangObject {
            public w: number;
            public x: number;
            public y: number;
            public z: number;

            public constructor();
            public constructor(param0: number, param1: number, param2: number, param3: number);
        }
    }
}

/// <reference path="./android.renderscript.Element.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />
/// <reference path="./android.renderscript.Type.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module renderscript {
        export class Type extends android.renderscript.BaseObj {
            public getYuv(): number;

            public hasMipmaps(): boolean;

            public hasFaces(): boolean;

            public getY(): number;

            public static createX(param0: android.renderscript.RenderScript, param1: android.renderscript.Element, param2: number): android.renderscript.Type;

            public getX(): number;

            public getCount(): number;

            public getElement(): android.renderscript.Element;

            public getZ(): number;

            public static createXY(param0: android.renderscript.RenderScript, param1: android.renderscript.Element, param2: number, param3: number): android.renderscript.Type;

            public static createXYZ(param0: android.renderscript.RenderScript, param1: android.renderscript.Element, param2: number, param3: number, param4: number): android.renderscript.Type;
        }
        export module Type {
            export class Builder extends javalangObject {
                public setFaces(param0: boolean): android.renderscript.Type.Builder;

                public setX(param0: number): android.renderscript.Type.Builder;

                public setMipmaps(param0: boolean): android.renderscript.Type.Builder;

                public constructor(param0: android.renderscript.RenderScript, param1: android.renderscript.Element);

                public setZ(param0: number): android.renderscript.Type.Builder;

                public create(): android.renderscript.Type;

                public setY(param0: number): android.renderscript.Type.Builder;

                public setYuvFormat(param0: number): android.renderscript.Type.Builder;
            }
            export class CubemapFace extends javalangEnum {
                public static NEGATIVE_X: android.renderscript.Type.CubemapFace;
                public static NEGATIVE_Y: android.renderscript.Type.CubemapFace;
                public static NEGATIVE_Z: android.renderscript.Type.CubemapFace;
                public static POSITIVE_X: android.renderscript.Type.CubemapFace;
                public static POSITIVE_Y: android.renderscript.Type.CubemapFace;
                public static POSITIVE_Z: android.renderscript.Type.CubemapFace;
                public static POSITVE_X: android.renderscript.Type.CubemapFace;
                public static POSITVE_Y: android.renderscript.Type.CubemapFace;
                public static POSITVE_Z: android.renderscript.Type.CubemapFace;

                public static values(): native.Array<android.renderscript.Type.CubemapFace>;

                public static valueOf(param0: string): android.renderscript.Type.CubemapFace;
                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
        }
    }
}
