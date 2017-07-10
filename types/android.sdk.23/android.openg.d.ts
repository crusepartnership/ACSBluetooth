
/// <reference path="./android.opengl.EGLConfig.d.ts" />
/// <reference path="./android.opengl.EGLContext.d.ts" />
/// <reference path="./android.opengl.EGLDisplay.d.ts" />
/// <reference path="./android.opengl.EGLSurface.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module opengl {
        export class EGL14 extends javalangObject {
            public static EGL_ALPHA_MASK_SIZE: number;
            public static EGL_ALPHA_SIZE: number;
            public static EGL_BACK_BUFFER: number;
            public static EGL_BAD_ACCESS: number;
            public static EGL_BAD_ALLOC: number;
            public static EGL_BAD_ATTRIBUTE: number;
            public static EGL_BAD_CONFIG: number;
            public static EGL_BAD_CONTEXT: number;
            public static EGL_BAD_CURRENT_SURFACE: number;
            public static EGL_BAD_DISPLAY: number;
            public static EGL_BAD_MATCH: number;
            public static EGL_BAD_NATIVE_PIXMAP: number;
            public static EGL_BAD_NATIVE_WINDOW: number;
            public static EGL_BAD_PARAMETER: number;
            public static EGL_BAD_SURFACE: number;
            public static EGL_BIND_TO_TEXTURE_RGB: number;
            public static EGL_BIND_TO_TEXTURE_RGBA: number;
            public static EGL_BLUE_SIZE: number;
            public static EGL_BUFFER_DESTROYED: number;
            public static EGL_BUFFER_PRESERVED: number;
            public static EGL_BUFFER_SIZE: number;
            public static EGL_CLIENT_APIS: number;
            public static EGL_COLOR_BUFFER_TYPE: number;
            public static EGL_CONFIG_CAVEAT: number;
            public static EGL_CONFIG_ID: number;
            public static EGL_CONFORMANT: number;
            public static EGL_CONTEXT_CLIENT_TYPE: number;
            public static EGL_CONTEXT_CLIENT_VERSION: number;
            public static EGL_CONTEXT_LOST: number;
            public static EGL_CORE_NATIVE_ENGINE: number;
            public static EGL_DEFAULT_DISPLAY: number;
            public static EGL_DEPTH_SIZE: number;
            public static EGL_DISPLAY_SCALING: number;
            public static EGL_DRAW: number;
            public static EGL_EXTENSIONS: number;
            public static EGL_FALSE: number;
            public static EGL_GREEN_SIZE: number;
            public static EGL_HEIGHT: number;
            public static EGL_HORIZONTAL_RESOLUTION: number;
            public static EGL_LARGEST_PBUFFER: number;
            public static EGL_LEVEL: number;
            public static EGL_LUMINANCE_BUFFER: number;
            public static EGL_LUMINANCE_SIZE: number;
            public static EGL_MATCH_NATIVE_PIXMAP: number;
            public static EGL_MAX_PBUFFER_HEIGHT: number;
            public static EGL_MAX_PBUFFER_PIXELS: number;
            public static EGL_MAX_PBUFFER_WIDTH: number;
            public static EGL_MAX_SWAP_INTERVAL: number;
            public static EGL_MIN_SWAP_INTERVAL: number;
            public static EGL_MIPMAP_LEVEL: number;
            public static EGL_MIPMAP_TEXTURE: number;
            public static EGL_MULTISAMPLE_RESOLVE: number;
            public static EGL_MULTISAMPLE_RESOLVE_BOX: number;
            public static EGL_MULTISAMPLE_RESOLVE_BOX_BIT: number;
            public static EGL_MULTISAMPLE_RESOLVE_DEFAULT: number;
            public static EGL_NATIVE_RENDERABLE: number;
            public static EGL_NATIVE_VISUAL_ID: number;
            public static EGL_NATIVE_VISUAL_TYPE: number;
            public static EGL_NONE: number;
            public static EGL_NON_CONFORMANT_CONFIG: number;
            public static EGL_NOT_INITIALIZED: number;
            public static EGL_NO_CONTEXT: android.opengl.EGLContext;
            public static EGL_NO_DISPLAY: android.opengl.EGLDisplay;
            public static EGL_NO_SURFACE: android.opengl.EGLSurface;
            public static EGL_NO_TEXTURE: number;
            public static EGL_OPENGL_API: number;
            public static EGL_OPENGL_BIT: number;
            public static EGL_OPENGL_ES2_BIT: number;
            public static EGL_OPENGL_ES_API: number;
            public static EGL_OPENGL_ES_BIT: number;
            public static EGL_OPENVG_API: number;
            public static EGL_OPENVG_BIT: number;
            public static EGL_OPENVG_IMAGE: number;
            public static EGL_PBUFFER_BIT: number;
            public static EGL_PIXEL_ASPECT_RATIO: number;
            public static EGL_PIXMAP_BIT: number;
            public static EGL_READ: number;
            public static EGL_RED_SIZE: number;
            public static EGL_RENDERABLE_TYPE: number;
            public static EGL_RENDER_BUFFER: number;
            public static EGL_RGB_BUFFER: number;
            public static EGL_SAMPLES: number;
            public static EGL_SAMPLE_BUFFERS: number;
            public static EGL_SINGLE_BUFFER: number;
            public static EGL_SLOW_CONFIG: number;
            public static EGL_STENCIL_SIZE: number;
            public static EGL_SUCCESS: number;
            public static EGL_SURFACE_TYPE: number;
            public static EGL_SWAP_BEHAVIOR: number;
            public static EGL_SWAP_BEHAVIOR_PRESERVED_BIT: number;
            public static EGL_TEXTURE_2D: number;
            public static EGL_TEXTURE_FORMAT: number;
            public static EGL_TEXTURE_RGB: number;
            public static EGL_TEXTURE_RGBA: number;
            public static EGL_TEXTURE_TARGET: number;
            public static EGL_TRANSPARENT_BLUE_VALUE: number;
            public static EGL_TRANSPARENT_GREEN_VALUE: number;
            public static EGL_TRANSPARENT_RED_VALUE: number;
            public static EGL_TRANSPARENT_RGB: number;
            public static EGL_TRANSPARENT_TYPE: number;
            public static EGL_TRUE: number;
            public static EGL_VENDOR: number;
            public static EGL_VERSION: number;
            public static EGL_VERTICAL_RESOLUTION: number;
            public static EGL_VG_ALPHA_FORMAT: number;
            public static EGL_VG_ALPHA_FORMAT_NONPRE: number;
            public static EGL_VG_ALPHA_FORMAT_PRE: number;
            public static EGL_VG_ALPHA_FORMAT_PRE_BIT: number;
            public static EGL_VG_COLORSPACE: number;
            public static EGL_VG_COLORSPACE_LINEAR: number;
            public static EGL_VG_COLORSPACE_LINEAR_BIT: number;
            public static EGL_VG_COLORSPACE_sRGB: number;
            public static EGL_WIDTH: number;
            public static EGL_WINDOW_BIT: number;

            public static eglReleaseTexImage(param0: android.opengl.EGLDisplay, param1: android.opengl.EGLSurface, param2: number): boolean;

            public static eglTerminate(param0: android.opengl.EGLDisplay): boolean;

            public static eglCreatePixmapSurface(param0: android.opengl.EGLDisplay, param1: android.opengl.EGLConfig, param2: number, param3: native.Array<number>, param4: number): android.opengl.EGLSurface;

            public static eglCreateContext(param0: android.opengl.EGLDisplay, param1: android.opengl.EGLConfig, param2: android.opengl.EGLContext, param3: native.Array<number>, param4: number): android.opengl.EGLContext;

            public static eglWaitClient(): boolean;

            public static eglGetCurrentContext(): android.opengl.EGLContext;

            public static eglGetDisplay(param0: number): android.opengl.EGLDisplay;

            public static eglWaitGL(): boolean;

            public static eglGetCurrentSurface(param0: number): android.opengl.EGLSurface;

            public static eglSwapInterval(param0: android.opengl.EGLDisplay, param1: number): boolean;

            public static eglSurfaceAttrib(param0: android.opengl.EGLDisplay, param1: android.opengl.EGLSurface, param2: number, param3: number): boolean;

            public static eglCreateWindowSurface(param0: android.opengl.EGLDisplay, param1: android.opengl.EGLConfig, param2: javalangObject, param3: native.Array<number>, param4: number): android.opengl.EGLSurface;

            public static eglSwapBuffers(param0: android.opengl.EGLDisplay, param1: android.opengl.EGLSurface): boolean;

            public static eglDestroySurface(param0: android.opengl.EGLDisplay, param1: android.opengl.EGLSurface): boolean;

            public static eglMakeCurrent(param0: android.opengl.EGLDisplay, param1: android.opengl.EGLSurface, param2: android.opengl.EGLSurface, param3: android.opengl.EGLContext): boolean;

            public static eglQueryAPI(): number;

            public static eglCreatePbufferFromClientBuffer(param0: android.opengl.EGLDisplay, param1: number, param2: number, param3: android.opengl.EGLConfig, param4: native.Array<number>, param5: number): android.opengl.EGLSurface;

            public static eglQueryString(param0: android.opengl.EGLDisplay, param1: number): string;

            public static eglWaitNative(param0: number): boolean;

            public static eglCreatePbufferSurface(param0: android.opengl.EGLDisplay, param1: android.opengl.EGLConfig, param2: native.Array<number>, param3: number): android.opengl.EGLSurface;

            public constructor();

            public static eglBindAPI(param0: number): boolean;

            public static eglInitialize(param0: android.opengl.EGLDisplay, param1: native.Array<number>, param2: number, param3: native.Array<number>, param4: number): boolean;

            public static eglGetError(): number;

            public static eglReleaseThread(): boolean;

            public static eglChooseConfig(param0: android.opengl.EGLDisplay, param1: native.Array<number>, param2: number, param3: native.Array<android.opengl.EGLConfig>, param4: number, param5: number, param6: native.Array<number>, param7: number): boolean;

            public static eglBindTexImage(param0: android.opengl.EGLDisplay, param1: android.opengl.EGLSurface, param2: number): boolean;

            public static eglQueryContext(param0: android.opengl.EGLDisplay, param1: android.opengl.EGLContext, param2: number, param3: native.Array<number>, param4: number): boolean;

            public static eglCopyBuffers(param0: android.opengl.EGLDisplay, param1: android.opengl.EGLSurface, param2: number): boolean;

            public static eglGetConfigs(param0: android.opengl.EGLDisplay, param1: native.Array<android.opengl.EGLConfig>, param2: number, param3: number, param4: native.Array<number>, param5: number): boolean;

            public static eglDestroyContext(param0: android.opengl.EGLDisplay, param1: android.opengl.EGLContext): boolean;

            public static eglGetConfigAttrib(param0: android.opengl.EGLDisplay, param1: android.opengl.EGLConfig, param2: number, param3: native.Array<number>, param4: number): boolean;

            public static eglQuerySurface(param0: android.opengl.EGLDisplay, param1: android.opengl.EGLSurface, param2: number, param3: native.Array<number>, param4: number): boolean;

            public static eglGetCurrentDisplay(): android.opengl.EGLDisplay;
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module opengl {
        export class EGLConfig extends android.opengl.EGLObjectHandle {
            public equals(param0: javalangObject): boolean;
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module opengl {
        export class EGLContext extends android.opengl.EGLObjectHandle {
            public equals(param0: javalangObject): boolean;
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module opengl {
        export class EGLDisplay extends android.opengl.EGLObjectHandle {
            public equals(param0: javalangObject): boolean;
        }
    }
}

/// <reference path="./android.opengl.EGLDisplay.d.ts" />
/// <reference path="./android.opengl.EGLSurface.d.ts" />
declare module android {
    export module opengl {
        export class EGLExt extends javalangObject {
            public static EGL_CONTEXT_FLAGS_KHR: number;
            public static EGL_CONTEXT_MAJOR_VERSION_KHR: number;
            public static EGL_CONTEXT_MINOR_VERSION_KHR: number;
            public static EGL_OPENGL_ES3_BIT_KHR: number;

            public static eglPresentationTimeANDROID(param0: android.opengl.EGLDisplay, param1: android.opengl.EGLSurface, param2: number): boolean;

            public constructor();
        }
    }
}

declare module android {
    export module opengl {
        export abstract class EGLObjectHandle extends javalangObject {
            public getNativeHandle(): number;

            public constructor(param0: number);

            public getHandle(): number;

            public hashCode(): number;
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module opengl {
        export class EGLSurface extends android.opengl.EGLObjectHandle {
            public equals(param0: javalangObject): boolean;
        }
    }
}

/// <reference path="./java.nio.Buffer.d.ts" />
declare module android {
    export module opengl {
        export class ETC1 extends javalangObject {
            public static DECODED_BLOCK_SIZE: number;
            public static ENCODED_BLOCK_SIZE: number;
            public static ETC1_RGB8_OES: number;
            public static ETC_PKM_HEADER_SIZE: number;

            public static encodeImage(param0: javanioBuffer, param1: number, param2: number, param3: number, param4: number, param5: javanioBuffer): void;

            public static encodeBlock(param0: javanioBuffer, param1: number, param2: javanioBuffer): void;

            public static getEncodedDataSize(param0: number, param1: number): number;

            public static getHeight(param0: javanioBuffer): number;

            public static getWidth(param0: javanioBuffer): number;

            public static decodeImage(param0: javanioBuffer, param1: javanioBuffer, param2: number, param3: number, param4: number, param5: number): void;

            public static isValid(param0: javanioBuffer): boolean;

            public constructor();

            public static decodeBlock(param0: javanioBuffer, param1: javanioBuffer): void;

            public static formatHeader(param0: javanioBuffer, param1: number, param2: number): void;
        }
    }
}

/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.nio.Buffer.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
declare module android {
    export module opengl {
        export class ETC1Util extends javalangObject {
            public static isETC1Supported(): boolean;

            public static loadTexture(param0: number, param1: number, param2: number, param3: number, param4: number, param5: android.opengl.ETC1Util.ETC1Texture): void;

            public static writeTexture(param0: android.opengl.ETC1Util.ETC1Texture, param1: javaioOutputStream): void;

            public static loadTexture(param0: number, param1: number, param2: number, param3: number, param4: number, param5: javaioInputStream): void;

            public constructor();

            public static compressTexture(param0: javanioBuffer, param1: number, param2: number, param3: number, param4: number): android.opengl.ETC1Util.ETC1Texture;

            public static createTexture(param0: javaioInputStream): android.opengl.ETC1Util.ETC1Texture;
        }
        export module ETC1Util {
            export class ETC1Texture extends javalangObject {
                public getWidth(): number;

                public getHeight(): number;

                public getData(): javanioByteBuffer;

                public constructor(param0: number, param1: number, param2: javanioByteBuffer);
            }
        }
    }
}

import javaxmicroeditionkhronosopenglesGL = javax.microedition.khronos.opengles.GL;
import javaioWriter = java.io.Writer;
import javaxmicroeditionkhronoseglEGL = javax.microedition.khronos.egl.EGL;
/// <reference path="./java.io.Writer.d.ts" />
/// <reference path="./javax.microedition.khronos.egl.EGL.d.ts" />
/// <reference path="./javax.microedition.khronos.opengles.GL.d.ts" />
declare module android {
    export module opengl {
        export class GLDebugHelper extends javalangObject {
            public static CONFIG_CHECK_GL_ERROR: number;
            public static CONFIG_CHECK_THREAD: number;
            public static CONFIG_LOG_ARGUMENT_NAMES: number;
            public static ERROR_WRONG_THREAD: number;

            public static wrap(param0: javaxmicroeditionkhronoseglEGL, param1: number, param2: javaioWriter): javaxmicroeditionkhronoseglEGL;

            public constructor();

            public static wrap(param0: javaxmicroeditionkhronosopenglesGL, param1: number, param2: javaioWriter): javaxmicroeditionkhronosopenglesGL;
        }
    }
}

import javanioIntBuffer = java.nio.IntBuffer;
import javanioFloatBuffer = java.nio.FloatBuffer;
/// <reference path="./java.nio.Buffer.d.ts" />
/// <reference path="./java.nio.FloatBuffer.d.ts" />
/// <reference path="./java.nio.IntBuffer.d.ts" />
declare module android {
    export module opengl {
        export class GLES10 extends javalangObject {
            public static GL_ADD: number;
            public static GL_ALIASED_LINE_WIDTH_RANGE: number;
            public static GL_ALIASED_POINT_SIZE_RANGE: number;
            public static GL_ALPHA: number;
            public static GL_ALPHA_BITS: number;
            public static GL_ALPHA_TEST: number;
            public static GL_ALWAYS: number;
            public static GL_AMBIENT: number;
            public static GL_AMBIENT_AND_DIFFUSE: number;
            public static GL_AND: number;
            public static GL_AND_INVERTED: number;
            public static GL_AND_REVERSE: number;
            public static GL_BACK: number;
            public static GL_BLEND: number;
            public static GL_BLUE_BITS: number;
            public static GL_BYTE: number;
            public static GL_CCW: number;
            public static GL_CLAMP_TO_EDGE: number;
            public static GL_CLEAR: number;
            public static GL_COLOR_ARRAY: number;
            public static GL_COLOR_BUFFER_BIT: number;
            public static GL_COLOR_LOGIC_OP: number;
            public static GL_COLOR_MATERIAL: number;
            public static GL_COMPRESSED_TEXTURE_FORMATS: number;
            public static GL_CONSTANT_ATTENUATION: number;
            public static GL_COPY: number;
            public static GL_COPY_INVERTED: number;
            public static GL_CULL_FACE: number;
            public static GL_CW: number;
            public static GL_DECAL: number;
            public static GL_DECR: number;
            public static GL_DEPTH_BITS: number;
            public static GL_DEPTH_BUFFER_BIT: number;
            public static GL_DEPTH_TEST: number;
            public static GL_DIFFUSE: number;
            public static GL_DITHER: number;
            public static GL_DONT_CARE: number;
            public static GL_DST_ALPHA: number;
            public static GL_DST_COLOR: number;
            public static GL_EMISSION: number;
            public static GL_EQUAL: number;
            public static GL_EQUIV: number;
            public static GL_EXP: number;
            public static GL_EXP2: number;
            public static GL_EXTENSIONS: number;
            public static GL_FALSE: number;
            public static GL_FASTEST: number;
            public static GL_FIXED: number;
            public static GL_FLAT: number;
            public static GL_FLOAT: number;
            public static GL_FOG: number;
            public static GL_FOG_COLOR: number;
            public static GL_FOG_DENSITY: number;
            public static GL_FOG_END: number;
            public static GL_FOG_HINT: number;
            public static GL_FOG_MODE: number;
            public static GL_FOG_START: number;
            public static GL_FRONT: number;
            public static GL_FRONT_AND_BACK: number;
            public static GL_GEQUAL: number;
            public static GL_GREATER: number;
            public static GL_GREEN_BITS: number;
            public static GL_IMPLEMENTATION_COLOR_READ_FORMAT_OES: number;
            public static GL_IMPLEMENTATION_COLOR_READ_TYPE_OES: number;
            public static GL_INCR: number;
            public static GL_INVALID_ENUM: number;
            public static GL_INVALID_OPERATION: number;
            public static GL_INVALID_VALUE: number;
            public static GL_INVERT: number;
            public static GL_KEEP: number;
            public static GL_LEQUAL: number;
            public static GL_LESS: number;
            public static GL_LIGHT0: number;
            public static GL_LIGHT1: number;
            public static GL_LIGHT2: number;
            public static GL_LIGHT3: number;
            public static GL_LIGHT4: number;
            public static GL_LIGHT5: number;
            public static GL_LIGHT6: number;
            public static GL_LIGHT7: number;
            public static GL_LIGHTING: number;
            public static GL_LIGHT_MODEL_AMBIENT: number;
            public static GL_LIGHT_MODEL_TWO_SIDE: number;
            public static GL_LINEAR: number;
            public static GL_LINEAR_ATTENUATION: number;
            public static GL_LINEAR_MIPMAP_LINEAR: number;
            public static GL_LINEAR_MIPMAP_NEAREST: number;
            public static GL_LINES: number;
            public static GL_LINE_LOOP: number;
            public static GL_LINE_SMOOTH: number;
            public static GL_LINE_SMOOTH_HINT: number;
            public static GL_LINE_STRIP: number;
            public static GL_LUMINANCE: number;
            public static GL_LUMINANCE_ALPHA: number;
            public static GL_MAX_ELEMENTS_INDICES: number;
            public static GL_MAX_ELEMENTS_VERTICES: number;
            public static GL_MAX_LIGHTS: number;
            public static GL_MAX_MODELVIEW_STACK_DEPTH: number;
            public static GL_MAX_PROJECTION_STACK_DEPTH: number;
            public static GL_MAX_TEXTURE_SIZE: number;
            public static GL_MAX_TEXTURE_STACK_DEPTH: number;
            public static GL_MAX_TEXTURE_UNITS: number;
            public static GL_MAX_VIEWPORT_DIMS: number;
            public static GL_MODELVIEW: number;
            public static GL_MODULATE: number;
            public static GL_MULTISAMPLE: number;
            public static GL_NAND: number;
            public static GL_NEAREST: number;
            public static GL_NEAREST_MIPMAP_LINEAR: number;
            public static GL_NEAREST_MIPMAP_NEAREST: number;
            public static GL_NEVER: number;
            public static GL_NICEST: number;
            public static GL_NOOP: number;
            public static GL_NOR: number;
            public static GL_NORMALIZE: number;
            public static GL_NORMAL_ARRAY: number;
            public static GL_NOTEQUAL: number;
            public static GL_NO_ERROR: number;
            public static GL_NUM_COMPRESSED_TEXTURE_FORMATS: number;
            public static GL_ONE: number;
            public static GL_ONE_MINUS_DST_ALPHA: number;
            public static GL_ONE_MINUS_DST_COLOR: number;
            public static GL_ONE_MINUS_SRC_ALPHA: number;
            public static GL_ONE_MINUS_SRC_COLOR: number;
            public static GL_OR: number;
            public static GL_OR_INVERTED: number;
            public static GL_OR_REVERSE: number;
            public static GL_OUT_OF_MEMORY: number;
            public static GL_PACK_ALIGNMENT: number;
            public static GL_PALETTE4_R5_G6_B5_OES: number;
            public static GL_PALETTE4_RGB5_A1_OES: number;
            public static GL_PALETTE4_RGB8_OES: number;
            public static GL_PALETTE4_RGBA4_OES: number;
            public static GL_PALETTE4_RGBA8_OES: number;
            public static GL_PALETTE8_R5_G6_B5_OES: number;
            public static GL_PALETTE8_RGB5_A1_OES: number;
            public static GL_PALETTE8_RGB8_OES: number;
            public static GL_PALETTE8_RGBA4_OES: number;
            public static GL_PALETTE8_RGBA8_OES: number;
            public static GL_PERSPECTIVE_CORRECTION_HINT: number;
            public static GL_POINTS: number;
            public static GL_POINT_FADE_THRESHOLD_SIZE: number;
            public static GL_POINT_SIZE: number;
            public static GL_POINT_SMOOTH: number;
            public static GL_POINT_SMOOTH_HINT: number;
            public static GL_POLYGON_OFFSET_FILL: number;
            public static GL_POLYGON_SMOOTH_HINT: number;
            public static GL_POSITION: number;
            public static GL_PROJECTION: number;
            public static GL_QUADRATIC_ATTENUATION: number;
            public static GL_RED_BITS: number;
            public static GL_RENDERER: number;
            public static GL_REPEAT: number;
            public static GL_REPLACE: number;
            public static GL_RESCALE_NORMAL: number;
            public static GL_RGB: number;
            public static GL_RGBA: number;
            public static GL_SAMPLE_ALPHA_TO_COVERAGE: number;
            public static GL_SAMPLE_ALPHA_TO_ONE: number;
            public static GL_SAMPLE_COVERAGE: number;
            public static GL_SCISSOR_TEST: number;
            public static GL_SET: number;
            public static GL_SHININESS: number;
            public static GL_SHORT: number;
            public static GL_SMOOTH: number;
            public static GL_SMOOTH_LINE_WIDTH_RANGE: number;
            public static GL_SMOOTH_POINT_SIZE_RANGE: number;
            public static GL_SPECULAR: number;
            public static GL_SPOT_CUTOFF: number;
            public static GL_SPOT_DIRECTION: number;
            public static GL_SPOT_EXPONENT: number;
            public static GL_SRC_ALPHA: number;
            public static GL_SRC_ALPHA_SATURATE: number;
            public static GL_SRC_COLOR: number;
            public static GL_STACK_OVERFLOW: number;
            public static GL_STACK_UNDERFLOW: number;
            public static GL_STENCIL_BITS: number;
            public static GL_STENCIL_BUFFER_BIT: number;
            public static GL_STENCIL_TEST: number;
            public static GL_SUBPIXEL_BITS: number;
            public static GL_TEXTURE: number;
            public static GL_TEXTURE0: number;
            public static GL_TEXTURE1: number;
            public static GL_TEXTURE10: number;
            public static GL_TEXTURE11: number;
            public static GL_TEXTURE12: number;
            public static GL_TEXTURE13: number;
            public static GL_TEXTURE14: number;
            public static GL_TEXTURE15: number;
            public static GL_TEXTURE16: number;
            public static GL_TEXTURE17: number;
            public static GL_TEXTURE18: number;
            public static GL_TEXTURE19: number;
            public static GL_TEXTURE2: number;
            public static GL_TEXTURE20: number;
            public static GL_TEXTURE21: number;
            public static GL_TEXTURE22: number;
            public static GL_TEXTURE23: number;
            public static GL_TEXTURE24: number;
            public static GL_TEXTURE25: number;
            public static GL_TEXTURE26: number;
            public static GL_TEXTURE27: number;
            public static GL_TEXTURE28: number;
            public static GL_TEXTURE29: number;
            public static GL_TEXTURE3: number;
            public static GL_TEXTURE30: number;
            public static GL_TEXTURE31: number;
            public static GL_TEXTURE4: number;
            public static GL_TEXTURE5: number;
            public static GL_TEXTURE6: number;
            public static GL_TEXTURE7: number;
            public static GL_TEXTURE8: number;
            public static GL_TEXTURE9: number;
            public static GL_TEXTURE_2D: number;
            public static GL_TEXTURE_COORD_ARRAY: number;
            public static GL_TEXTURE_ENV: number;
            public static GL_TEXTURE_ENV_COLOR: number;
            public static GL_TEXTURE_ENV_MODE: number;
            public static GL_TEXTURE_MAG_FILTER: number;
            public static GL_TEXTURE_MIN_FILTER: number;
            public static GL_TEXTURE_WRAP_S: number;
            public static GL_TEXTURE_WRAP_T: number;
            public static GL_TRIANGLES: number;
            public static GL_TRIANGLE_FAN: number;
            public static GL_TRIANGLE_STRIP: number;
            public static GL_TRUE: number;
            public static GL_UNPACK_ALIGNMENT: number;
            public static GL_UNSIGNED_BYTE: number;
            public static GL_UNSIGNED_SHORT: number;
            public static GL_UNSIGNED_SHORT_4_4_4_4: number;
            public static GL_UNSIGNED_SHORT_5_5_5_1: number;
            public static GL_UNSIGNED_SHORT_5_6_5: number;
            public static GL_VENDOR: number;
            public static GL_VERSION: number;
            public static GL_VERTEX_ARRAY: number;
            public static GL_XOR: number;
            public static GL_ZERO: number;

            public static glLightModelfv(param0: number, param1: javanioFloatBuffer): void;

            public static glOrthox(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

            public static glSampleCoveragex(param0: number, param1: boolean): void;

            public static glFogf(param0: number, param1: number): void;

            public static glPolygonOffsetx(param0: number, param1: number): void;

            public static glTexParameterf(param0: number, param1: number, param2: number): void;

            public static glGetString(param0: number): string;

            public static glTexEnvxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glClientActiveTexture(param0: number): void;

            public static glNormalPointer(param0: number, param1: number, param2: javanioBuffer): void;

            public static glCopyTexSubImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;

            public static glGenTextures(param0: number, param1: javanioIntBuffer): void;

            public static glLightModelxv(param0: number, param1: javanioIntBuffer): void;

            public static glGetError(): number;

            public static glStencilOp(param0: number, param1: number, param2: number): void;

            public static glColor4f(param0: number, param1: number, param2: number, param3: number): void;

            public static glPointSizex(param0: number): void;

            public static glMaterialfv(param0: number, param1: number, param2: javanioFloatBuffer): void;

            public static glStencilFunc(param0: number, param1: number, param2: number): void;

            public static glFrustumf(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

            public static glHint(param0: number, param1: number): void;

            public static glLoadIdentity(): void;

            public static glPixelStorei(param0: number, param1: number): void;

            public static glLoadMatrixf(param0: javanioFloatBuffer): void;

            public static glMaterialxv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glClearDepthx(param0: number): void;

            public constructor();

            public static glLoadMatrixf(param0: native.Array<number>, param1: number): void;

            public static glLoadMatrixx(param0: javanioIntBuffer): void;

            public static glClearColor(param0: number, param1: number, param2: number, param3: number): void;

            public static glLightx(param0: number, param1: number, param2: number): void;

            public static glTexEnvfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glRotatex(param0: number, param1: number, param2: number, param3: number): void;

            public static glDepthFunc(param0: number): void;

            public static glLightfv(param0: number, param1: number, param2: javanioFloatBuffer): void;

            public static glFogfv(param0: number, param1: javanioFloatBuffer): void;

            public static glCompressedTexImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: javanioBuffer): void;

            public static glGetIntegerv(param0: number, param1: native.Array<number>, param2: number): void;

            public static glClear(param0: number): void;

            public static glLineWidth(param0: number): void;

            public static glPolygonOffset(param0: number, param1: number): void;

            public static glTexEnvfv(param0: number, param1: number, param2: javanioFloatBuffer): void;

            public static glPointSize(param0: number): void;

            public static glMultMatrixx(param0: javanioIntBuffer): void;

            public static glDisable(param0: number): void;

            public static glDepthRangef(param0: number, param1: number): void;

            public static glCompressedTexSubImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: javanioBuffer): void;

            public static glDrawElements(param0: number, param1: number, param2: number, param3: javanioBuffer): void;

            public static glDeleteTextures(param0: number, param1: javanioIntBuffer): void;

            public static glDepthRangex(param0: number, param1: number): void;

            public static glDrawArrays(param0: number, param1: number, param2: number): void;

            public static glMultMatrixx(param0: native.Array<number>, param1: number): void;

            public static glTexImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: javanioBuffer): void;

            public static glBlendFunc(param0: number, param1: number): void;

            public static glSampleCoverage(param0: number, param1: boolean): void;

            public static glTranslatex(param0: number, param1: number, param2: number): void;

            public static glLightModelxv(param0: number, param1: native.Array<number>, param2: number): void;

            public static glFogfv(param0: number, param1: native.Array<number>, param2: number): void;

            public static glMaterialx(param0: number, param1: number, param2: number): void;

            public static glDeleteTextures(param0: number, param1: native.Array<number>, param2: number): void;

            public static glTexCoordPointer(param0: number, param1: number, param2: number, param3: javanioBuffer): void;

            public static glLoadMatrixx(param0: native.Array<number>, param1: number): void;

            public static glNormal3f(param0: number, param1: number, param2: number): void;

            public static glCullFace(param0: number): void;

            public static glStencilMask(param0: number): void;

            public static glRotatef(param0: number, param1: number, param2: number, param3: number): void;

            public static glLightxv(param0: number, param1: number, param2: javanioIntBuffer): void;
            public static glLightxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glViewport(param0: number, param1: number, param2: number, param3: number): void;

            public static glClearColorx(param0: number, param1: number, param2: number, param3: number): void;

            public static glFrontFace(param0: number): void;

            public static glColor4x(param0: number, param1: number, param2: number, param3: number): void;

            public static glLogicOp(param0: number): void;

            public static glEnableClientState(param0: number): void;

            public static glVertexPointer(param0: number, param1: number, param2: number, param3: javanioBuffer): void;

            public static glDisableClientState(param0: number): void;

            public static glShadeModel(param0: number): void;

            public static glTexEnvf(param0: number, param1: number, param2: number): void;

            public static glColorMask(param0: boolean, param1: boolean, param2: boolean, param3: boolean): void;

            public static glGetIntegerv(param0: number, param1: javanioIntBuffer): void;

            public static glMultMatrixf(param0: javanioFloatBuffer): void;

            public static glFogxv(param0: number, param1: native.Array<number>, param2: number): void;

            public static glScalex(param0: number, param1: number, param2: number): void;

            public static glMultiTexCoord4f(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public static glMultMatrixf(param0: native.Array<number>, param1: number): void;

            public static glFogxv(param0: number, param1: javanioIntBuffer): void;

            public static glMatrixMode(param0: number): void;

            public static glScalef(param0: number, param1: number, param2: number): void;

            public static glTexEnvxv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glOrthof(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

            public static glGenTextures(param0: number, param1: native.Array<number>, param2: number): void;

            public static glFogx(param0: number, param1: number): void;

            public static glLightf(param0: number, param1: number, param2: number): void;

            public static glBindTexture(param0: number, param1: number): void;

            public static glColorPointer(param0: number, param1: number, param2: number, param3: javanioBuffer): void;

            public static glFrustumx(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

            public static glActiveTexture(param0: number): void;

            public static glDepthMask(param0: boolean): void;

            public static glPushMatrix(): void;

            public static glPopMatrix(): void;

            public static glAlphaFuncx(param0: number, param1: number): void;

            public static glCopyTexImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;

            public static glLightModelx(param0: number, param1: number): void;

            public static glFinish(): void;

            public static glTexEnvx(param0: number, param1: number, param2: number): void;

            public static glTexParameterx(param0: number, param1: number, param2: number): void;

            public static glAlphaFunc(param0: number, param1: number): void;

            public static glMaterialfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glClearStencil(param0: number): void;

            public static glFlush(): void;

            public static glLightModelf(param0: number, param1: number): void;

            public static glLineWidthx(param0: number): void;

            public static glMaterialxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glLightfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glReadPixels(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: javanioBuffer): void;

            public static glLightModelfv(param0: number, param1: native.Array<number>, param2: number): void;

            public static glEnable(param0: number): void;

            public static glNormal3x(param0: number, param1: number, param2: number): void;

            public static glMultiTexCoord4x(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public static glMaterialf(param0: number, param1: number, param2: number): void;

            public static glTranslatef(param0: number, param1: number, param2: number): void;

            public static glScissor(param0: number, param1: number, param2: number, param3: number): void;

            public static glTexSubImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: javanioBuffer): void;

            public static glClearDepthf(param0: number): void;
        }
    }
}

/// <reference path="./java.nio.IntBuffer.d.ts" />
declare module android {
    export module opengl {
        export class GLES10Ext extends javalangObject {
            public static glQueryMatrixxOES(param0: javanioIntBuffer, param1: javanioIntBuffer): number;

            public constructor();

            public static glQueryMatrixxOES(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number): number;
        }
    }
}

/// <reference path="./java.nio.Buffer.d.ts" />
/// <reference path="./java.nio.FloatBuffer.d.ts" />
/// <reference path="./java.nio.IntBuffer.d.ts" />
declare module android {
    export module opengl {
        export class GLES11 extends android.opengl.GLES10 {
            public static GL_ACTIVE_TEXTURE: number;
            public static GL_ADD_SIGNED: number;
            public static GL_ALPHA_SCALE: number;
            public static GL_ALPHA_TEST_FUNC: number;
            public static GL_ALPHA_TEST_REF: number;
            public static GL_ARRAY_BUFFER: number;
            public static GL_ARRAY_BUFFER_BINDING: number;
            public static GL_BLEND_DST: number;
            public static GL_BLEND_SRC: number;
            public static GL_BUFFER_ACCESS: number;
            public static GL_BUFFER_SIZE: number;
            public static GL_BUFFER_USAGE: number;
            public static GL_CLIENT_ACTIVE_TEXTURE: number;
            public static GL_CLIP_PLANE0: number;
            public static GL_CLIP_PLANE1: number;
            public static GL_CLIP_PLANE2: number;
            public static GL_CLIP_PLANE3: number;
            public static GL_CLIP_PLANE4: number;
            public static GL_CLIP_PLANE5: number;
            public static GL_COLOR_ARRAY_BUFFER_BINDING: number;
            public static GL_COLOR_ARRAY_POINTER: number;
            public static GL_COLOR_ARRAY_SIZE: number;
            public static GL_COLOR_ARRAY_STRIDE: number;
            public static GL_COLOR_ARRAY_TYPE: number;
            public static GL_COLOR_CLEAR_VALUE: number;
            public static GL_COLOR_WRITEMASK: number;
            public static GL_COMBINE: number;
            public static GL_COMBINE_ALPHA: number;
            public static GL_COMBINE_RGB: number;
            public static GL_CONSTANT: number;
            public static GL_COORD_REPLACE_OES: number;
            public static GL_CULL_FACE_MODE: number;
            public static GL_CURRENT_COLOR: number;
            public static GL_CURRENT_NORMAL: number;
            public static GL_CURRENT_TEXTURE_COORDS: number;
            public static GL_DEPTH_CLEAR_VALUE: number;
            public static GL_DEPTH_FUNC: number;
            public static GL_DEPTH_RANGE: number;
            public static GL_DEPTH_WRITEMASK: number;
            public static GL_DOT3_RGB: number;
            public static GL_DOT3_RGBA: number;
            public static GL_DYNAMIC_DRAW: number;
            public static GL_ELEMENT_ARRAY_BUFFER: number;
            public static GL_ELEMENT_ARRAY_BUFFER_BINDING: number;
            public static GL_FRONT_FACE: number;
            public static GL_GENERATE_MIPMAP: number;
            public static GL_GENERATE_MIPMAP_HINT: number;
            public static GL_INTERPOLATE: number;
            public static GL_LINE_WIDTH: number;
            public static GL_LOGIC_OP_MODE: number;
            public static GL_MATRIX_MODE: number;
            public static GL_MAX_CLIP_PLANES: number;
            public static GL_MODELVIEW_MATRIX: number;
            public static GL_MODELVIEW_MATRIX_FLOAT_AS_INT_BITS_OES: number;
            public static GL_MODELVIEW_STACK_DEPTH: number;
            public static GL_NORMAL_ARRAY_BUFFER_BINDING: number;
            public static GL_NORMAL_ARRAY_POINTER: number;
            public static GL_NORMAL_ARRAY_STRIDE: number;
            public static GL_NORMAL_ARRAY_TYPE: number;
            public static GL_OPERAND0_ALPHA: number;
            public static GL_OPERAND0_RGB: number;
            public static GL_OPERAND1_ALPHA: number;
            public static GL_OPERAND1_RGB: number;
            public static GL_OPERAND2_ALPHA: number;
            public static GL_OPERAND2_RGB: number;
            public static GL_POINT_DISTANCE_ATTENUATION: number;
            public static GL_POINT_FADE_THRESHOLD_SIZE: number;
            public static GL_POINT_SIZE: number;
            public static GL_POINT_SIZE_ARRAY_BUFFER_BINDING_OES: number;
            public static GL_POINT_SIZE_ARRAY_OES: number;
            public static GL_POINT_SIZE_ARRAY_POINTER_OES: number;
            public static GL_POINT_SIZE_ARRAY_STRIDE_OES: number;
            public static GL_POINT_SIZE_ARRAY_TYPE_OES: number;
            public static GL_POINT_SIZE_MAX: number;
            public static GL_POINT_SIZE_MIN: number;
            public static GL_POINT_SPRITE_OES: number;
            public static GL_POLYGON_OFFSET_FACTOR: number;
            public static GL_POLYGON_OFFSET_UNITS: number;
            public static GL_PREVIOUS: number;
            public static GL_PRIMARY_COLOR: number;
            public static GL_PROJECTION_MATRIX: number;
            public static GL_PROJECTION_MATRIX_FLOAT_AS_INT_BITS_OES: number;
            public static GL_PROJECTION_STACK_DEPTH: number;
            public static GL_RGB_SCALE: number;
            public static GL_SAMPLES: number;
            public static GL_SAMPLE_BUFFERS: number;
            public static GL_SAMPLE_COVERAGE_INVERT: number;
            public static GL_SAMPLE_COVERAGE_VALUE: number;
            public static GL_SCISSOR_BOX: number;
            public static GL_SHADE_MODEL: number;
            public static GL_SRC0_ALPHA: number;
            public static GL_SRC0_RGB: number;
            public static GL_SRC1_ALPHA: number;
            public static GL_SRC1_RGB: number;
            public static GL_SRC2_ALPHA: number;
            public static GL_SRC2_RGB: number;
            public static GL_STATIC_DRAW: number;
            public static GL_STENCIL_CLEAR_VALUE: number;
            public static GL_STENCIL_FAIL: number;
            public static GL_STENCIL_FUNC: number;
            public static GL_STENCIL_PASS_DEPTH_FAIL: number;
            public static GL_STENCIL_PASS_DEPTH_PASS: number;
            public static GL_STENCIL_REF: number;
            public static GL_STENCIL_VALUE_MASK: number;
            public static GL_STENCIL_WRITEMASK: number;
            public static GL_SUBTRACT: number;
            public static GL_TEXTURE_BINDING_2D: number;
            public static GL_TEXTURE_COORD_ARRAY_BUFFER_BINDING: number;
            public static GL_TEXTURE_COORD_ARRAY_POINTER: number;
            public static GL_TEXTURE_COORD_ARRAY_SIZE: number;
            public static GL_TEXTURE_COORD_ARRAY_STRIDE: number;
            public static GL_TEXTURE_COORD_ARRAY_TYPE: number;
            public static GL_TEXTURE_MATRIX: number;
            public static GL_TEXTURE_MATRIX_FLOAT_AS_INT_BITS_OES: number;
            public static GL_TEXTURE_STACK_DEPTH: number;
            public static GL_VERTEX_ARRAY_BUFFER_BINDING: number;
            public static GL_VERTEX_ARRAY_POINTER: number;
            public static GL_VERTEX_ARRAY_SIZE: number;
            public static GL_VERTEX_ARRAY_STRIDE: number;
            public static GL_VERTEX_ARRAY_TYPE: number;
            public static GL_VIEWPORT: number;
            public static GL_WRITE_ONLY: number;

            public static glGetBooleanv(param0: number, param1: native.Array<boolean>, param2: number): void;

            public static glPointParameterxv(param0: number, param1: javanioIntBuffer): void;

            public static glTexParameteriv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glBufferSubData(param0: number, param1: number, param2: number, param3: javanioBuffer): void;

            public static glIsTexture(param0: number): boolean;

            public static glGetTexEnvfv(param0: number, param1: number, param2: javanioFloatBuffer): void;

            public static glTexParameterxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glPointParameterxv(param0: number, param1: native.Array<number>, param2: number): void;

            public static glPointParameterfv(param0: number, param1: native.Array<number>, param2: number): void;

            public static glClipPlanex(param0: number, param1: javanioIntBuffer): void;

            public static glVertexPointer(param0: number, param1: number, param2: number, param3: javanioBuffer): void;

            public static glTexCoordPointer(param0: number, param1: number, param2: number, param3: number): void;

            public static glTexParameteri(param0: number, param1: number, param2: number): void;

            public static glGetClipPlanef(param0: number, param1: javanioFloatBuffer): void;

            public static glIsBuffer(param0: number): boolean;

            public static glNormalPointer(param0: number, param1: number, param2: javanioBuffer): void;

            public static glGetFloatv(param0: number, param1: javanioFloatBuffer): void;

            public static glPointParameterf(param0: number, param1: number): void;

            public static glGetTexParameterfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glTexParameterfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glDeleteBuffers(param0: number, param1: javanioIntBuffer): void;

            public static glPointParameterfv(param0: number, param1: javanioFloatBuffer): void;

            public static glTexEnvi(param0: number, param1: number, param2: number): void;

            public static glGenBuffers(param0: number, param1: native.Array<number>, param2: number): void;

            public static glTexParameterxv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glGetTexParameteriv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glGetBufferParameteriv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glGetFixedv(param0: number, param1: javanioIntBuffer): void;

            public static glGetTexParameterxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glColorPointer(param0: number, param1: number, param2: number, param3: number): void;

            public static glGenBuffers(param0: number, param1: javanioIntBuffer): void;

            public static glTexParameteriv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public constructor();

            public static glNormalPointer(param0: number, param1: number, param2: number): void;

            public static glGetClipPlanef(param0: number, param1: native.Array<number>, param2: number): void;

            public static glGetTexEnviv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glClipPlanex(param0: number, param1: native.Array<number>, param2: number): void;

            public static glGetFloatv(param0: number, param1: native.Array<number>, param2: number): void;

            public static glBufferData(param0: number, param1: number, param2: javanioBuffer, param3: number): void;

            public static glColorPointer(param0: number, param1: number, param2: number, param3: javanioBuffer): void;

            public static glGetTexEnviv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glDeleteBuffers(param0: number, param1: native.Array<number>, param2: number): void;

            public static glGetTexParameterfv(param0: number, param1: number, param2: javanioFloatBuffer): void;

            public static glGetTexParameteriv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glGetBufferParameteriv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glGetLightxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glGetMaterialxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glBindBuffer(param0: number, param1: number): void;

            public static glGetTexEnvfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glGetLightfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glClipPlanef(param0: number, param1: native.Array<number>, param2: number): void;

            public static glGetMaterialxv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glTexEnviv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glGetClipPlanex(param0: number, param1: native.Array<number>, param2: number): void;

            public static glDrawElements(param0: number, param1: number, param2: number, param3: javanioBuffer): void;

            public static glGetLightxv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glPointParameterx(param0: number, param1: number): void;

            public static glGetFixedv(param0: number, param1: native.Array<number>, param2: number): void;

            public static glGetLightfv(param0: number, param1: number, param2: javanioFloatBuffer): void;

            public static glClipPlanef(param0: number, param1: javanioFloatBuffer): void;

            public static glTexCoordPointer(param0: number, param1: number, param2: number, param3: javanioBuffer): void;

            public static glGetTexEnvxv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glTexParameterfv(param0: number, param1: number, param2: javanioFloatBuffer): void;

            public static glGetBooleanv(param0: number, param1: javanioIntBuffer): void;

            public static glTexEnviv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glIsEnabled(param0: number): boolean;

            public static glPointSizePointerOES(param0: number, param1: number, param2: javanioBuffer): void;

            public static glGetMaterialfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glGetClipPlanex(param0: number, param1: javanioIntBuffer): void;

            public static glGetTexEnvxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glGetTexParameterxv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glVertexPointer(param0: number, param1: number, param2: number, param3: number): void;

            public static glGetMaterialfv(param0: number, param1: number, param2: javanioFloatBuffer): void;

            public static glDrawElements(param0: number, param1: number, param2: number, param3: number): void;

            public static glColor4ub(param0: number, param1: number, param2: number, param3: number): void;
        }
    }
}

import javanioShortBuffer = java.nio.ShortBuffer;
/// <reference path="./java.nio.Buffer.d.ts" />
/// <reference path="./java.nio.FloatBuffer.d.ts" />
/// <reference path="./java.nio.IntBuffer.d.ts" />
/// <reference path="./java.nio.ShortBuffer.d.ts" />
declare module android {
    export module opengl {
        export class GLES11Ext extends javalangObject {
            public static GL_3DC_XY_AMD: number;
            public static GL_3DC_X_AMD: number;
            public static GL_ATC_RGBA_EXPLICIT_ALPHA_AMD: number;
            public static GL_ATC_RGBA_INTERPOLATED_ALPHA_AMD: number;
            public static GL_ATC_RGB_AMD: number;
            public static GL_BGRA: number;
            public static GL_BLEND_DST_ALPHA_OES: number;
            public static GL_BLEND_DST_RGB_OES: number;
            public static GL_BLEND_EQUATION_ALPHA_OES: number;
            public static GL_BLEND_EQUATION_OES: number;
            public static GL_BLEND_EQUATION_RGB_OES: number;
            public static GL_BLEND_SRC_ALPHA_OES: number;
            public static GL_BLEND_SRC_RGB_OES: number;
            public static GL_BUFFER_ACCESS_OES: number;
            public static GL_BUFFER_MAPPED_OES: number;
            public static GL_BUFFER_MAP_POINTER_OES: number;
            public static GL_COLOR_ATTACHMENT0_OES: number;
            public static GL_CURRENT_PALETTE_MATRIX_OES: number;
            public static GL_DECR_WRAP_OES: number;
            public static GL_DEPTH24_STENCIL8_OES: number;
            public static GL_DEPTH_ATTACHMENT_OES: number;
            public static GL_DEPTH_COMPONENT16_OES: number;
            public static GL_DEPTH_COMPONENT24_OES: number;
            public static GL_DEPTH_COMPONENT32_OES: number;
            public static GL_DEPTH_STENCIL_OES: number;
            public static GL_ETC1_RGB8_OES: number;
            public static GL_FIXED_OES: number;
            public static GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME_OES: number;
            public static GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE_OES: number;
            public static GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE_OES: number;
            public static GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL_OES: number;
            public static GL_FRAMEBUFFER_BINDING_OES: number;
            public static GL_FRAMEBUFFER_COMPLETE_OES: number;
            public static GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT_OES: number;
            public static GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS_OES: number;
            public static GL_FRAMEBUFFER_INCOMPLETE_FORMATS_OES: number;
            public static GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT_OES: number;
            public static GL_FRAMEBUFFER_OES: number;
            public static GL_FRAMEBUFFER_UNSUPPORTED_OES: number;
            public static GL_FUNC_ADD_OES: number;
            public static GL_FUNC_REVERSE_SUBTRACT_OES: number;
            public static GL_FUNC_SUBTRACT_OES: number;
            public static GL_INCR_WRAP_OES: number;
            public static GL_INVALID_FRAMEBUFFER_OPERATION_OES: number;
            public static GL_MATRIX_INDEX_ARRAY_BUFFER_BINDING_OES: number;
            public static GL_MATRIX_INDEX_ARRAY_OES: number;
            public static GL_MATRIX_INDEX_ARRAY_POINTER_OES: number;
            public static GL_MATRIX_INDEX_ARRAY_SIZE_OES: number;
            public static GL_MATRIX_INDEX_ARRAY_STRIDE_OES: number;
            public static GL_MATRIX_INDEX_ARRAY_TYPE_OES: number;
            public static GL_MATRIX_PALETTE_OES: number;
            public static GL_MAX_CUBE_MAP_TEXTURE_SIZE_OES: number;
            public static GL_MAX_PALETTE_MATRICES_OES: number;
            public static GL_MAX_RENDERBUFFER_SIZE_OES: number;
            public static GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT: number;
            public static GL_MAX_VERTEX_UNITS_OES: number;
            public static GL_MIRRORED_REPEAT_OES: number;
            public static GL_MODELVIEW_MATRIX_FLOAT_AS_INT_BITS_OES: number;
            public static GL_NONE_OES: number;
            public static GL_NORMAL_MAP_OES: number;
            public static GL_PROJECTION_MATRIX_FLOAT_AS_INT_BITS_OES: number;
            public static GL_REFLECTION_MAP_OES: number;
            public static GL_RENDERBUFFER_ALPHA_SIZE_OES: number;
            public static GL_RENDERBUFFER_BINDING_OES: number;
            public static GL_RENDERBUFFER_BLUE_SIZE_OES: number;
            public static GL_RENDERBUFFER_DEPTH_SIZE_OES: number;
            public static GL_RENDERBUFFER_GREEN_SIZE_OES: number;
            public static GL_RENDERBUFFER_HEIGHT_OES: number;
            public static GL_RENDERBUFFER_INTERNAL_FORMAT_OES: number;
            public static GL_RENDERBUFFER_OES: number;
            public static GL_RENDERBUFFER_RED_SIZE_OES: number;
            public static GL_RENDERBUFFER_STENCIL_SIZE_OES: number;
            public static GL_RENDERBUFFER_WIDTH_OES: number;
            public static GL_REQUIRED_TEXTURE_IMAGE_UNITS_OES: number;
            public static GL_RGB565_OES: number;
            public static GL_RGB5_A1_OES: number;
            public static GL_RGB8_OES: number;
            public static GL_RGBA4_OES: number;
            public static GL_RGBA8_OES: number;
            public static GL_SAMPLER_EXTERNAL_OES: number;
            public static GL_STENCIL_ATTACHMENT_OES: number;
            public static GL_STENCIL_INDEX1_OES: number;
            public static GL_STENCIL_INDEX4_OES: number;
            public static GL_STENCIL_INDEX8_OES: number;
            public static GL_TEXTURE_BINDING_CUBE_MAP_OES: number;
            public static GL_TEXTURE_BINDING_EXTERNAL_OES: number;
            public static GL_TEXTURE_CROP_RECT_OES: number;
            public static GL_TEXTURE_CUBE_MAP_NEGATIVE_X_OES: number;
            public static GL_TEXTURE_CUBE_MAP_NEGATIVE_Y_OES: number;
            public static GL_TEXTURE_CUBE_MAP_NEGATIVE_Z_OES: number;
            public static GL_TEXTURE_CUBE_MAP_OES: number;
            public static GL_TEXTURE_CUBE_MAP_POSITIVE_X_OES: number;
            public static GL_TEXTURE_CUBE_MAP_POSITIVE_Y_OES: number;
            public static GL_TEXTURE_CUBE_MAP_POSITIVE_Z_OES: number;
            public static GL_TEXTURE_EXTERNAL_OES: number;
            public static GL_TEXTURE_GEN_MODE_OES: number;
            public static GL_TEXTURE_GEN_STR_OES: number;
            public static GL_TEXTURE_MATRIX_FLOAT_AS_INT_BITS_OES: number;
            public static GL_TEXTURE_MAX_ANISOTROPY_EXT: number;
            public static GL_UNSIGNED_INT_24_8_OES: number;
            public static GL_WEIGHT_ARRAY_BUFFER_BINDING_OES: number;
            public static GL_WEIGHT_ARRAY_OES: number;
            public static GL_WEIGHT_ARRAY_POINTER_OES: number;
            public static GL_WEIGHT_ARRAY_SIZE_OES: number;
            public static GL_WEIGHT_ARRAY_STRIDE_OES: number;
            public static GL_WEIGHT_ARRAY_TYPE_OES: number;
            public static GL_WRITE_ONLY_OES: number;

            public static glDrawTexsOES(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public static glGetFramebufferAttachmentParameterivOES(param0: number, param1: number, param2: number, param3: javanioIntBuffer): void;

            public static glIsFramebufferOES(param0: number): boolean;

            public static glAlphaFuncxOES(param0: number, param1: number): void;

            public static glOrthofOES(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

            public static glGenerateMipmapOES(param0: number): void;

            public static glDrawTexsvOES(param0: javanioShortBuffer): void;

            public static glPointParameterxOES(param0: number, param1: number): void;

            public static glRotatexOES(param0: number, param1: number, param2: number, param3: number): void;

            public static glGetMaterialxvOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glDepthRangefOES(param0: number, param1: number): void;

            public static glBlendFuncSeparateOES(param0: number, param1: number, param2: number, param3: number): void;

            public static glLightModelxvOES(param0: number, param1: native.Array<number>, param2: number): void;

            public static glTexEnvxOES(param0: number, param1: number, param2: number): void;

            public static glGetRenderbufferParameterivOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glBindFramebufferOES(param0: number, param1: number): void;

            public constructor();

            public static glGetClipPlanexOES(param0: number, param1: native.Array<number>, param2: number): void;

            public static glGetTexParameterxvOES(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glDrawTexxOES(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public static glTexGenfvOES(param0: number, param1: number, param2: javanioFloatBuffer): void;

            public static glScalexOES(param0: number, param1: number, param2: number): void;

            public static glGetClipPlanefOES(param0: number, param1: native.Array<number>, param2: number): void;

            public static glDrawTexxvOES(param0: native.Array<number>, param1: number): void;

            public static glLightxvOES(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glSampleCoveragexOES(param0: number, param1: boolean): void;

            public static glFrustumxOES(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

            public static glMultMatrixxOES(param0: native.Array<number>, param1: number): void;

            public static glTexGeniOES(param0: number, param1: number, param2: number): void;

            public static glLineWidthxOES(param0: number): void;

            public static glIsRenderbufferOES(param0: number): boolean;

            public static glDeleteFramebuffersOES(param0: number, param1: javanioIntBuffer): void;

            public static glDrawTexfvOES(param0: native.Array<number>, param1: number): void;

            public static glTexGenxvOES(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glGetLightxvOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glDrawTexfvOES(param0: javanioFloatBuffer): void;

            public static glGetTexGenxvOES(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glCheckFramebufferStatusOES(param0: number): number;

            public static glTexGenfOES(param0: number, param1: number, param2: number): void;

            public static glPointParameterxvOES(param0: number, param1: native.Array<number>, param2: number): void;

            public static glGetClipPlanexOES(param0: number, param1: javanioIntBuffer): void;

            public static glClipPlanefOES(param0: number, param1: javanioFloatBuffer): void;

            public static glDrawTexiOES(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public static glGenFramebuffersOES(param0: number, param1: javanioIntBuffer): void;

            public static glDeleteFramebuffersOES(param0: number, param1: native.Array<number>, param2: number): void;

            public static glGenFramebuffersOES(param0: number, param1: native.Array<number>, param2: number): void;

            public static glMaterialxvOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glLightModelxOES(param0: number, param1: number): void;

            public static glDepthRangexOES(param0: number, param1: number): void;

            public static glFogxvOES(param0: number, param1: native.Array<number>, param2: number): void;

            public static glBlendEquationOES(param0: number): void;

            public static glDrawTexivOES(param0: native.Array<number>, param1: number): void;

            public static glFogxOES(param0: number, param1: number): void;

            public static glGetClipPlanefOES(param0: number, param1: javanioFloatBuffer): void;

            public static glEGLImageTargetTexture2DOES(param0: number, param1: javanioBuffer): void;

            public static glTexParameterxvOES(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glLightxOES(param0: number, param1: number, param2: number): void;

            public static glFramebufferTexture2DOES(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public static glBindRenderbufferOES(param0: number, param1: number): void;

            public static glClearColorxOES(param0: number, param1: number, param2: number, param3: number): void;

            public static glMultiTexCoord4xOES(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public static glTexEnvxvOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glClipPlanexOES(param0: number, param1: javanioIntBuffer): void;

            public static glGetTexGenivOES(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glGetFramebufferAttachmentParameterivOES(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number): void;

            public static glTexParameterxvOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glNormal3xOES(param0: number, param1: number, param2: number): void;

            public static glGetTexGenfvOES(param0: number, param1: number, param2: javanioFloatBuffer): void;

            public static glTexGenxvOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glGetLightxvOES(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glLoadMatrixxOES(param0: native.Array<number>, param1: number): void;

            public static glTexGenxOES(param0: number, param1: number, param2: number): void;

            public static glDrawTexfOES(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public static glGetFixedvOES(param0: number, param1: native.Array<number>, param2: number): void;

            public static glMaterialxOES(param0: number, param1: number, param2: number): void;

            public static glTexGenivOES(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glDrawTexxvOES(param0: javanioIntBuffer): void;

            public static glClearDepthxOES(param0: number): void;

            public static glGetTexEnvxvOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glLoadMatrixxOES(param0: javanioIntBuffer): void;

            public static glFramebufferRenderbufferOES(param0: number, param1: number, param2: number, param3: number): void;

            public static glLoadPaletteFromModelViewMatrixOES(): void;

            public static glEGLImageTargetRenderbufferStorageOES(param0: number, param1: javanioBuffer): void;

            public static glOrthoxOES(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

            public static glGetMaterialxvOES(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glWeightPointerOES(param0: number, param1: number, param2: number, param3: javanioBuffer): void;

            public static glFogxvOES(param0: number, param1: javanioIntBuffer): void;

            public static glTexGenfvOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glDeleteRenderbuffersOES(param0: number, param1: javanioIntBuffer): void;

            public static glTexGenivOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glTexEnvxvOES(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glPointParameterxvOES(param0: number, param1: javanioIntBuffer): void;

            public static glGetTexGenivOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glColor4xOES(param0: number, param1: number, param2: number, param3: number): void;

            public static glTranslatexOES(param0: number, param1: number, param2: number): void;

            public static glGenRenderbuffersOES(param0: number, param1: javanioIntBuffer): void;

            public static glTexParameterxOES(param0: number, param1: number, param2: number): void;

            public static glFrustumfOES(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

            public static glGetRenderbufferParameterivOES(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glGetTexEnvxvOES(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glMatrixIndexPointerOES(param0: number, param1: number, param2: number, param3: javanioBuffer): void;

            public static glMultMatrixxOES(param0: javanioIntBuffer): void;

            public static glMaterialxvOES(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glGetTexGenfvOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glClipPlanexOES(param0: number, param1: native.Array<number>, param2: number): void;

            public static glDrawTexivOES(param0: javanioIntBuffer): void;

            public static glGetFixedvOES(param0: number, param1: javanioIntBuffer): void;

            public static glCurrentPaletteMatrixOES(param0: number): void;

            public static glGetTexParameterxvOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glPolygonOffsetxOES(param0: number, param1: number): void;

            public static glPointSizexOES(param0: number): void;

            public static glClipPlanefOES(param0: number, param1: native.Array<number>, param2: number): void;

            public static glRenderbufferStorageOES(param0: number, param1: number, param2: number, param3: number): void;

            public static glGenRenderbuffersOES(param0: number, param1: native.Array<number>, param2: number): void;

            public static glDrawTexsvOES(param0: native.Array<number>, param1: number): void;

            public static glClearDepthfOES(param0: number): void;

            public static glDeleteRenderbuffersOES(param0: number, param1: native.Array<number>, param2: number): void;

            public static glGetTexGenxvOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glBlendEquationSeparateOES(param0: number, param1: number): void;

            public static glLightModelxvOES(param0: number, param1: javanioIntBuffer): void;

            public static glLightxvOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.Buffer.d.ts" />
/// <reference path="./java.nio.FloatBuffer.d.ts" />
/// <reference path="./java.nio.IntBuffer.d.ts" />
declare module android {
    export module opengl {
        export class GLES20 extends javalangObject {
            public static GL_ACTIVE_ATTRIBUTES: number;
            public static GL_ACTIVE_ATTRIBUTE_MAX_LENGTH: number;
            public static GL_ACTIVE_TEXTURE: number;
            public static GL_ACTIVE_UNIFORMS: number;
            public static GL_ACTIVE_UNIFORM_MAX_LENGTH: number;
            public static GL_ALIASED_LINE_WIDTH_RANGE: number;
            public static GL_ALIASED_POINT_SIZE_RANGE: number;
            public static GL_ALPHA: number;
            public static GL_ALPHA_BITS: number;
            public static GL_ALWAYS: number;
            public static GL_ARRAY_BUFFER: number;
            public static GL_ARRAY_BUFFER_BINDING: number;
            public static GL_ATTACHED_SHADERS: number;
            public static GL_BACK: number;
            public static GL_BLEND: number;
            public static GL_BLEND_COLOR: number;
            public static GL_BLEND_DST_ALPHA: number;
            public static GL_BLEND_DST_RGB: number;
            public static GL_BLEND_EQUATION: number;
            public static GL_BLEND_EQUATION_ALPHA: number;
            public static GL_BLEND_EQUATION_RGB: number;
            public static GL_BLEND_SRC_ALPHA: number;
            public static GL_BLEND_SRC_RGB: number;
            public static GL_BLUE_BITS: number;
            public static GL_BOOL: number;
            public static GL_BOOL_VEC2: number;
            public static GL_BOOL_VEC3: number;
            public static GL_BOOL_VEC4: number;
            public static GL_BUFFER_SIZE: number;
            public static GL_BUFFER_USAGE: number;
            public static GL_BYTE: number;
            public static GL_CCW: number;
            public static GL_CLAMP_TO_EDGE: number;
            public static GL_COLOR_ATTACHMENT0: number;
            public static GL_COLOR_BUFFER_BIT: number;
            public static GL_COLOR_CLEAR_VALUE: number;
            public static GL_COLOR_WRITEMASK: number;
            public static GL_COMPILE_STATUS: number;
            public static GL_COMPRESSED_TEXTURE_FORMATS: number;
            public static GL_CONSTANT_ALPHA: number;
            public static GL_CONSTANT_COLOR: number;
            public static GL_CULL_FACE: number;
            public static GL_CULL_FACE_MODE: number;
            public static GL_CURRENT_PROGRAM: number;
            public static GL_CURRENT_VERTEX_ATTRIB: number;
            public static GL_CW: number;
            public static GL_DECR: number;
            public static GL_DECR_WRAP: number;
            public static GL_DELETE_STATUS: number;
            public static GL_DEPTH_ATTACHMENT: number;
            public static GL_DEPTH_BITS: number;
            public static GL_DEPTH_BUFFER_BIT: number;
            public static GL_DEPTH_CLEAR_VALUE: number;
            public static GL_DEPTH_COMPONENT: number;
            public static GL_DEPTH_COMPONENT16: number;
            public static GL_DEPTH_FUNC: number;
            public static GL_DEPTH_RANGE: number;
            public static GL_DEPTH_TEST: number;
            public static GL_DEPTH_WRITEMASK: number;
            public static GL_DITHER: number;
            public static GL_DONT_CARE: number;
            public static GL_DST_ALPHA: number;
            public static GL_DST_COLOR: number;
            public static GL_DYNAMIC_DRAW: number;
            public static GL_ELEMENT_ARRAY_BUFFER: number;
            public static GL_ELEMENT_ARRAY_BUFFER_BINDING: number;
            public static GL_EQUAL: number;
            public static GL_EXTENSIONS: number;
            public static GL_FALSE: number;
            public static GL_FASTEST: number;
            public static GL_FIXED: number;
            public static GL_FLOAT: number;
            public static GL_FLOAT_MAT2: number;
            public static GL_FLOAT_MAT3: number;
            public static GL_FLOAT_MAT4: number;
            public static GL_FLOAT_VEC2: number;
            public static GL_FLOAT_VEC3: number;
            public static GL_FLOAT_VEC4: number;
            public static GL_FRAGMENT_SHADER: number;
            public static GL_FRAMEBUFFER: number;
            public static GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: number;
            public static GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: number;
            public static GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: number;
            public static GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: number;
            public static GL_FRAMEBUFFER_BINDING: number;
            public static GL_FRAMEBUFFER_COMPLETE: number;
            public static GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT: number;
            public static GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS: number;
            public static GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: number;
            public static GL_FRAMEBUFFER_UNSUPPORTED: number;
            public static GL_FRONT: number;
            public static GL_FRONT_AND_BACK: number;
            public static GL_FRONT_FACE: number;
            public static GL_FUNC_ADD: number;
            public static GL_FUNC_REVERSE_SUBTRACT: number;
            public static GL_FUNC_SUBTRACT: number;
            public static GL_GENERATE_MIPMAP_HINT: number;
            public static GL_GEQUAL: number;
            public static GL_GREATER: number;
            public static GL_GREEN_BITS: number;
            public static GL_HIGH_FLOAT: number;
            public static GL_HIGH_INT: number;
            public static GL_IMPLEMENTATION_COLOR_READ_FORMAT: number;
            public static GL_IMPLEMENTATION_COLOR_READ_TYPE: number;
            public static GL_INCR: number;
            public static GL_INCR_WRAP: number;
            public static GL_INFO_LOG_LENGTH: number;
            public static GL_INT: number;
            public static GL_INT_VEC2: number;
            public static GL_INT_VEC3: number;
            public static GL_INT_VEC4: number;
            public static GL_INVALID_ENUM: number;
            public static GL_INVALID_FRAMEBUFFER_OPERATION: number;
            public static GL_INVALID_OPERATION: number;
            public static GL_INVALID_VALUE: number;
            public static GL_INVERT: number;
            public static GL_KEEP: number;
            public static GL_LEQUAL: number;
            public static GL_LESS: number;
            public static GL_LINEAR: number;
            public static GL_LINEAR_MIPMAP_LINEAR: number;
            public static GL_LINEAR_MIPMAP_NEAREST: number;
            public static GL_LINES: number;
            public static GL_LINE_LOOP: number;
            public static GL_LINE_STRIP: number;
            public static GL_LINE_WIDTH: number;
            public static GL_LINK_STATUS: number;
            public static GL_LOW_FLOAT: number;
            public static GL_LOW_INT: number;
            public static GL_LUMINANCE: number;
            public static GL_LUMINANCE_ALPHA: number;
            public static GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS: number;
            public static GL_MAX_CUBE_MAP_TEXTURE_SIZE: number;
            public static GL_MAX_FRAGMENT_UNIFORM_VECTORS: number;
            public static GL_MAX_RENDERBUFFER_SIZE: number;
            public static GL_MAX_TEXTURE_IMAGE_UNITS: number;
            public static GL_MAX_TEXTURE_SIZE: number;
            public static GL_MAX_VARYING_VECTORS: number;
            public static GL_MAX_VERTEX_ATTRIBS: number;
            public static GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS: number;
            public static GL_MAX_VERTEX_UNIFORM_VECTORS: number;
            public static GL_MAX_VIEWPORT_DIMS: number;
            public static GL_MEDIUM_FLOAT: number;
            public static GL_MEDIUM_INT: number;
            public static GL_MIRRORED_REPEAT: number;
            public static GL_NEAREST: number;
            public static GL_NEAREST_MIPMAP_LINEAR: number;
            public static GL_NEAREST_MIPMAP_NEAREST: number;
            public static GL_NEVER: number;
            public static GL_NICEST: number;
            public static GL_NONE: number;
            public static GL_NOTEQUAL: number;
            public static GL_NO_ERROR: number;
            public static GL_NUM_COMPRESSED_TEXTURE_FORMATS: number;
            public static GL_NUM_SHADER_BINARY_FORMATS: number;
            public static GL_ONE: number;
            public static GL_ONE_MINUS_CONSTANT_ALPHA: number;
            public static GL_ONE_MINUS_CONSTANT_COLOR: number;
            public static GL_ONE_MINUS_DST_ALPHA: number;
            public static GL_ONE_MINUS_DST_COLOR: number;
            public static GL_ONE_MINUS_SRC_ALPHA: number;
            public static GL_ONE_MINUS_SRC_COLOR: number;
            public static GL_OUT_OF_MEMORY: number;
            public static GL_PACK_ALIGNMENT: number;
            public static GL_POINTS: number;
            public static GL_POLYGON_OFFSET_FACTOR: number;
            public static GL_POLYGON_OFFSET_FILL: number;
            public static GL_POLYGON_OFFSET_UNITS: number;
            public static GL_RED_BITS: number;
            public static GL_RENDERBUFFER: number;
            public static GL_RENDERBUFFER_ALPHA_SIZE: number;
            public static GL_RENDERBUFFER_BINDING: number;
            public static GL_RENDERBUFFER_BLUE_SIZE: number;
            public static GL_RENDERBUFFER_DEPTH_SIZE: number;
            public static GL_RENDERBUFFER_GREEN_SIZE: number;
            public static GL_RENDERBUFFER_HEIGHT: number;
            public static GL_RENDERBUFFER_INTERNAL_FORMAT: number;
            public static GL_RENDERBUFFER_RED_SIZE: number;
            public static GL_RENDERBUFFER_STENCIL_SIZE: number;
            public static GL_RENDERBUFFER_WIDTH: number;
            public static GL_RENDERER: number;
            public static GL_REPEAT: number;
            public static GL_REPLACE: number;
            public static GL_RGB: number;
            public static GL_RGB565: number;
            public static GL_RGB5_A1: number;
            public static GL_RGBA: number;
            public static GL_RGBA4: number;
            public static GL_SAMPLER_2D: number;
            public static GL_SAMPLER_CUBE: number;
            public static GL_SAMPLES: number;
            public static GL_SAMPLE_ALPHA_TO_COVERAGE: number;
            public static GL_SAMPLE_BUFFERS: number;
            public static GL_SAMPLE_COVERAGE: number;
            public static GL_SAMPLE_COVERAGE_INVERT: number;
            public static GL_SAMPLE_COVERAGE_VALUE: number;
            public static GL_SCISSOR_BOX: number;
            public static GL_SCISSOR_TEST: number;
            public static GL_SHADER_BINARY_FORMATS: number;
            public static GL_SHADER_COMPILER: number;
            public static GL_SHADER_SOURCE_LENGTH: number;
            public static GL_SHADER_TYPE: number;
            public static GL_SHADING_LANGUAGE_VERSION: number;
            public static GL_SHORT: number;
            public static GL_SRC_ALPHA: number;
            public static GL_SRC_ALPHA_SATURATE: number;
            public static GL_SRC_COLOR: number;
            public static GL_STATIC_DRAW: number;
            public static GL_STENCIL_ATTACHMENT: number;
            public static GL_STENCIL_BACK_FAIL: number;
            public static GL_STENCIL_BACK_FUNC: number;
            public static GL_STENCIL_BACK_PASS_DEPTH_FAIL: number;
            public static GL_STENCIL_BACK_PASS_DEPTH_PASS: number;
            public static GL_STENCIL_BACK_REF: number;
            public static GL_STENCIL_BACK_VALUE_MASK: number;
            public static GL_STENCIL_BACK_WRITEMASK: number;
            public static GL_STENCIL_BITS: number;
            public static GL_STENCIL_BUFFER_BIT: number;
            public static GL_STENCIL_CLEAR_VALUE: number;
            public static GL_STENCIL_FAIL: number;
            public static GL_STENCIL_FUNC: number;
            public static GL_STENCIL_INDEX: number;
            public static GL_STENCIL_INDEX8: number;
            public static GL_STENCIL_PASS_DEPTH_FAIL: number;
            public static GL_STENCIL_PASS_DEPTH_PASS: number;
            public static GL_STENCIL_REF: number;
            public static GL_STENCIL_TEST: number;
            public static GL_STENCIL_VALUE_MASK: number;
            public static GL_STENCIL_WRITEMASK: number;
            public static GL_STREAM_DRAW: number;
            public static GL_SUBPIXEL_BITS: number;
            public static GL_TEXTURE: number;
            public static GL_TEXTURE0: number;
            public static GL_TEXTURE1: number;
            public static GL_TEXTURE10: number;
            public static GL_TEXTURE11: number;
            public static GL_TEXTURE12: number;
            public static GL_TEXTURE13: number;
            public static GL_TEXTURE14: number;
            public static GL_TEXTURE15: number;
            public static GL_TEXTURE16: number;
            public static GL_TEXTURE17: number;
            public static GL_TEXTURE18: number;
            public static GL_TEXTURE19: number;
            public static GL_TEXTURE2: number;
            public static GL_TEXTURE20: number;
            public static GL_TEXTURE21: number;
            public static GL_TEXTURE22: number;
            public static GL_TEXTURE23: number;
            public static GL_TEXTURE24: number;
            public static GL_TEXTURE25: number;
            public static GL_TEXTURE26: number;
            public static GL_TEXTURE27: number;
            public static GL_TEXTURE28: number;
            public static GL_TEXTURE29: number;
            public static GL_TEXTURE3: number;
            public static GL_TEXTURE30: number;
            public static GL_TEXTURE31: number;
            public static GL_TEXTURE4: number;
            public static GL_TEXTURE5: number;
            public static GL_TEXTURE6: number;
            public static GL_TEXTURE7: number;
            public static GL_TEXTURE8: number;
            public static GL_TEXTURE9: number;
            public static GL_TEXTURE_2D: number;
            public static GL_TEXTURE_BINDING_2D: number;
            public static GL_TEXTURE_BINDING_CUBE_MAP: number;
            public static GL_TEXTURE_CUBE_MAP: number;
            public static GL_TEXTURE_CUBE_MAP_NEGATIVE_X: number;
            public static GL_TEXTURE_CUBE_MAP_NEGATIVE_Y: number;
            public static GL_TEXTURE_CUBE_MAP_NEGATIVE_Z: number;
            public static GL_TEXTURE_CUBE_MAP_POSITIVE_X: number;
            public static GL_TEXTURE_CUBE_MAP_POSITIVE_Y: number;
            public static GL_TEXTURE_CUBE_MAP_POSITIVE_Z: number;
            public static GL_TEXTURE_MAG_FILTER: number;
            public static GL_TEXTURE_MIN_FILTER: number;
            public static GL_TEXTURE_WRAP_S: number;
            public static GL_TEXTURE_WRAP_T: number;
            public static GL_TRIANGLES: number;
            public static GL_TRIANGLE_FAN: number;
            public static GL_TRIANGLE_STRIP: number;
            public static GL_TRUE: number;
            public static GL_UNPACK_ALIGNMENT: number;
            public static GL_UNSIGNED_BYTE: number;
            public static GL_UNSIGNED_INT: number;
            public static GL_UNSIGNED_SHORT: number;
            public static GL_UNSIGNED_SHORT_4_4_4_4: number;
            public static GL_UNSIGNED_SHORT_5_5_5_1: number;
            public static GL_UNSIGNED_SHORT_5_6_5: number;
            public static GL_VALIDATE_STATUS: number;
            public static GL_VENDOR: number;
            public static GL_VERSION: number;
            public static GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: number;
            public static GL_VERTEX_ATTRIB_ARRAY_ENABLED: number;
            public static GL_VERTEX_ATTRIB_ARRAY_NORMALIZED: number;
            public static GL_VERTEX_ATTRIB_ARRAY_POINTER: number;
            public static GL_VERTEX_ATTRIB_ARRAY_SIZE: number;
            public static GL_VERTEX_ATTRIB_ARRAY_STRIDE: number;
            public static GL_VERTEX_ATTRIB_ARRAY_TYPE: number;
            public static GL_VERTEX_SHADER: number;
            public static GL_VIEWPORT: number;
            public static GL_ZERO: number;

            public static glGetBooleanv(param0: number, param1: native.Array<boolean>, param2: number): void;

            public static glGenFramebuffers(param0: number, param1: native.Array<number>, param2: number): void;

            public static glUniform3i(param0: number, param1: number, param2: number, param3: number): void;

            public static glGetProgramiv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glBufferSubData(param0: number, param1: number, param2: number, param3: javanioBuffer): void;

            public static glVertexAttrib2fv(param0: number, param1: native.Array<number>, param2: number): void;

            public static glVertexAttrib4f(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public static glIsTexture(param0: number): boolean;

            public static glGetFramebufferAttachmentParameteriv(param0: number, param1: number, param2: number, param3: javanioIntBuffer): void;

            public static glTexParameterf(param0: number, param1: number, param2: number): void;

            public static glGetShaderiv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glUniformMatrix4fv(param0: number, param1: number, param2: boolean, param3: native.Array<number>, param4: number): void;

            public static glGetShaderSource(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>, param5: number): void;

            public static glGetString(param0: number): string;

            public static glDeleteRenderbuffers(param0: number, param1: javanioIntBuffer): void;

            public static glTexParameteri(param0: number, param1: number, param2: number): void;

            public static glUniformMatrix2fv(param0: number, param1: number, param2: boolean, param3: native.Array<number>, param4: number): void;

            public static glCopyTexSubImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;

            public static glGetVertexAttribiv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glGenTextures(param0: number, param1: javanioIntBuffer): void;

            public static glGetActiveAttrib(param0: number, param1: number, param2: javanioIntBuffer, param3: javanioIntBuffer): string;

            public static glGetAttribLocation(param0: number, param1: string): number;

            public static glTexParameterfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glGetShaderSource(param0: number): string;

            public static glGetUniformiv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glGenBuffers(param0: number, param1: native.Array<number>, param2: number): void;

            public static glGetError(): number;

            public static glStencilOp(param0: number, param1: number, param2: number): void;

            public static glUseProgram(param0: number): void;

            public static glStencilFunc(param0: number, param1: number, param2: number): void;

            public static glBlendFuncSeparate(param0: number, param1: number, param2: number, param3: number): void;

            public static glHint(param0: number, param1: number): void;

            public static glUniformMatrix3fv(param0: number, param1: number, param2: boolean, param3: javanioFloatBuffer): void;

            public static glCreateProgram(): number;

            public static glGetShaderiv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glGetBufferParameteriv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glPixelStorei(param0: number, param1: number): void;

            public static glFramebufferTexture2D(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public static glBindAttribLocation(param0: number, param1: number, param2: string): void;

            public static glCompileShader(param0: number): void;

            public static glTexParameteriv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public constructor();

            public static glUniform3iv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glUniform3fv(param0: number, param1: number, param2: javanioFloatBuffer): void;

            public static glGetRenderbufferParameteriv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glUniform2fv(param0: number, param1: number, param2: javanioFloatBuffer): void;

            public static glBufferData(param0: number, param1: number, param2: javanioBuffer, param3: number): void;

            public static glDeleteBuffers(param0: number, param1: native.Array<number>, param2: number): void;

            public static glDisableVertexAttribArray(param0: number): void;

            public static glGetActiveUniform(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>, param6: number, param7: native.Array<number>, param8: number, param9: native.Array<number>, param10: number): void;

            public static glGetTexParameterfv(param0: number, param1: number, param2: javanioFloatBuffer): void;

            public static glGetUniformfv(param0: number, param1: number, param2: javanioFloatBuffer): void;

            public static glShaderBinary(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: javanioBuffer, param5: number): void;

            public static glClearColor(param0: number, param1: number, param2: number, param3: number): void;

            public static glDeleteRenderbuffers(param0: number, param1: native.Array<number>, param2: number): void;

            public static glReleaseShaderCompiler(): void;

            public static glUniform4i(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public static glUniform1iv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glDepthFunc(param0: number): void;

            public static glVertexAttrib4fv(param0: number, param1: javanioFloatBuffer): void;

            public static glCompressedTexImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: javanioBuffer): void;

            public static glDeleteFramebuffers(param0: number, param1: javanioIntBuffer): void;

            public static glGetIntegerv(param0: number, param1: native.Array<number>, param2: number): void;

            public static glClear(param0: number): void;

            public static glIsRenderbuffer(param0: number): boolean;

            public static glLineWidth(param0: number): void;

            public static glLinkProgram(param0: number): void;

            public static glPolygonOffset(param0: number, param1: number): void;

            public static glBlendColor(param0: number, param1: number, param2: number, param3: number): void;

            public static glBindBuffer(param0: number, param1: number): void;

            public static glVertexAttribPointer(param0: number, param1: number, param2: number, param3: boolean, param4: number, param5: number): void;

            public static glGetRenderbufferParameteriv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glDisable(param0: number): void;

            public static glGetShaderInfoLog(param0: number): string;

            public static glIsProgram(param0: number): boolean;

            public static glUniform2fv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glGetShaderPrecisionFormat(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>, param5: number): void;

            public static glGetAttachedShaders(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>, param5: number): void;

            public static glDepthRangef(param0: number, param1: number): void;

            public static glCompressedTexSubImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: javanioBuffer): void;

            public static glDrawElements(param0: number, param1: number, param2: number, param3: javanioBuffer): void;

            public static glVertexAttrib3fv(param0: number, param1: javanioFloatBuffer): void;

            public static glDeleteTextures(param0: number, param1: javanioIntBuffer): void;

            public static glDrawArrays(param0: number, param1: number, param2: number): void;

            public static glGetUniformLocation(param0: number, param1: string): number;

            public static glUniform4iv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glTexImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: javanioBuffer): void;

            public static glVertexAttrib3f(param0: number, param1: number, param2: number, param3: number): void;

            public static glVertexAttrib4fv(param0: number, param1: native.Array<number>, param2: number): void;

            public static glBlendFunc(param0: number, param1: number): void;

            public static glSampleCoverage(param0: number, param1: boolean): void;

            public static glUniform3iv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glUniformMatrix4fv(param0: number, param1: number, param2: boolean, param3: javanioFloatBuffer): void;

            public static glUniform1fv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glDeleteTextures(param0: number, param1: native.Array<number>, param2: number): void;

            public static glGetVertexAttribfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glTexParameterfv(param0: number, param1: number, param2: javanioFloatBuffer): void;

            public static glIsFramebuffer(param0: number): boolean;

            public static glIsEnabled(param0: number): boolean;

            public static glGenRenderbuffers(param0: number, param1: javanioIntBuffer): void;

            public static glGetProgramiv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glRenderbufferStorage(param0: number, param1: number, param2: number, param3: number): void;

            public static glCullFace(param0: number): void;

            public static glGetShaderPrecisionFormat(param0: number, param1: number, param2: javanioIntBuffer, param3: javanioIntBuffer): void;

            public static glBlendEquation(param0: number): void;

            public static glDeleteProgram(param0: number): void;

            public static glStencilMask(param0: number): void;

            public static glCreateShader(param0: number): number;

            public static glDrawElements(param0: number, param1: number, param2: number, param3: number): void;

            public static glTexParameteriv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glViewport(param0: number, param1: number, param2: number, param3: number): void;

            public static glFrontFace(param0: number): void;

            public static glEnableVertexAttribArray(param0: number): void;

            public static glUniform1iv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glStencilOpSeparate(param0: number, param1: number, param2: number, param3: number): void;

            public static glIsBuffer(param0: number): boolean;

            public static glVertexAttrib1f(param0: number, param1: number): void;

            public static glUniformMatrix3fv(param0: number, param1: number, param2: boolean, param3: native.Array<number>, param4: number): void;

            public static glColorMask(param0: boolean, param1: boolean, param2: boolean, param3: boolean): void;

            public static glGetIntegerv(param0: number, param1: javanioIntBuffer): void;

            public static glUniform1f(param0: number, param1: number): void;

            public static glGenerateMipmap(param0: number): void;

            public static glGetFloatv(param0: number, param1: javanioFloatBuffer): void;

            public static glUniform2iv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glGetTexParameterfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glStencilFuncSeparate(param0: number, param1: number, param2: number, param3: number): void;

            public static glDeleteBuffers(param0: number, param1: javanioIntBuffer): void;

            public static glBindRenderbuffer(param0: number, param1: number): void;

            public static glFramebufferRenderbuffer(param0: number, param1: number, param2: number, param3: number): void;

            public static glGetTexParameteriv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glGenBuffers(param0: number, param1: javanioIntBuffer): void;

            public static glUniform1fv(param0: number, param1: number, param2: javanioFloatBuffer): void;

            public static glBlendEquationSeparate(param0: number, param1: number): void;

            public static glGetActiveUniform(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>, param5: number): string;

            public static glGenFramebuffers(param0: number, param1: javanioIntBuffer): void;

            public static glGenTextures(param0: number, param1: native.Array<number>, param2: number): void;

            public static glIsShader(param0: number): boolean;

            public static glGetUniformfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glUniform4fv(param0: number, param1: number, param2: javanioFloatBuffer): void;

            public static glVertexAttrib3fv(param0: number, param1: native.Array<number>, param2: number): void;

            public static glGetActiveUniform(param0: number, param1: number, param2: javanioIntBuffer, param3: javanioIntBuffer): string;

            public static glValidateProgram(param0: number): void;

            public static glGetFloatv(param0: number, param1: native.Array<number>, param2: number): void;

            public static glBindTexture(param0: number, param1: number): void;

            public static glGetActiveAttrib(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>, param5: number): string;

            public static glAttachShader(param0: number, param1: number): void;

            public static glBindFramebuffer(param0: number, param1: number): void;

            public static glActiveTexture(param0: number): void;

            public static glGetTexParameteriv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glGetBufferParameteriv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glUniform3f(param0: number, param1: number, param2: number, param3: number): void;

            public static glVertexAttrib1fv(param0: number, param1: javanioFloatBuffer): void;

            public static glDepthMask(param0: boolean): void;

            public static glUniform4iv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glUniform1i(param0: number, param1: number): void;

            public static glCopyTexImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;

            public static glUniform4fv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glFinish(): void;

            public static glUniform3fv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glGetFramebufferAttachmentParameteriv(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number): void;

            public static glStencilMaskSeparate(param0: number, param1: number): void;

            public static glUniform2i(param0: number, param1: number, param2: number): void;

            public static glUniformMatrix2fv(param0: number, param1: number, param2: boolean, param3: javanioFloatBuffer): void;

            public static glDetachShader(param0: number, param1: number): void;

            public static glVertexAttrib2fv(param0: number, param1: javanioFloatBuffer): void;

            public static glGetVertexAttribiv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glCheckFramebufferStatus(param0: number): number;

            public static glClearStencil(param0: number): void;

            public static glFlush(): void;

            public static glUniform2f(param0: number, param1: number, param2: number): void;

            public static glVertexAttrib2f(param0: number, param1: number, param2: number): void;

            public static glReadPixels(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: javanioBuffer): void;

            public static glGetProgramInfoLog(param0: number): string;

            public static glVertexAttrib1fv(param0: number, param1: native.Array<number>, param2: number): void;

            public static glGetBooleanv(param0: number, param1: javanioIntBuffer): void;

            public static glGetAttachedShaders(param0: number, param1: number, param2: javanioIntBuffer, param3: javanioIntBuffer): void;

            public static glShaderSource(param0: number, param1: string): void;

            public static glUniform4f(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public static glGenRenderbuffers(param0: number, param1: native.Array<number>, param2: number): void;

            public static glEnable(param0: number): void;

            public static glShaderBinary(param0: number, param1: javanioIntBuffer, param2: number, param3: javanioBuffer, param4: number): void;

            public static glGetUniformiv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glGetVertexAttribfv(param0: number, param1: number, param2: javanioFloatBuffer): void;

            public static glVertexAttribPointer(param0: number, param1: number, param2: number, param3: boolean, param4: number, param5: javanioBuffer): void;

            public static glScissor(param0: number, param1: number, param2: number, param3: number): void;

            public static glUniform2iv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glGetActiveAttrib(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>, param6: number, param7: native.Array<number>, param8: number, param9: native.Array<number>, param10: number): void;

            public static glDeleteShader(param0: number): void;

            public static glTexSubImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: javanioBuffer): void;

            public static glDeleteFramebuffers(param0: number, param1: native.Array<number>, param2: number): void;

            public static glClearDepthf(param0: number): void;
        }
    }
}

import javanioLongBuffer = java.nio.LongBuffer;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.Buffer.d.ts" />
/// <reference path="./java.nio.FloatBuffer.d.ts" />
/// <reference path="./java.nio.IntBuffer.d.ts" />
/// <reference path="./java.nio.LongBuffer.d.ts" />
declare module android {
    export module opengl {
        export class GLES30 extends android.opengl.GLES20 {
            public static GL_ACTIVE_UNIFORM_BLOCKS: number;
            public static GL_ACTIVE_UNIFORM_BLOCK_MAX_NAME_LENGTH: number;
            public static GL_ALREADY_SIGNALED: number;
            public static GL_ANY_SAMPLES_PASSED: number;
            public static GL_ANY_SAMPLES_PASSED_CONSERVATIVE: number;
            public static GL_BLUE: number;
            public static GL_BUFFER_ACCESS_FLAGS: number;
            public static GL_BUFFER_MAPPED: number;
            public static GL_BUFFER_MAP_LENGTH: number;
            public static GL_BUFFER_MAP_OFFSET: number;
            public static GL_BUFFER_MAP_POINTER: number;
            public static GL_COLOR: number;
            public static GL_COLOR_ATTACHMENT1: number;
            public static GL_COLOR_ATTACHMENT10: number;
            public static GL_COLOR_ATTACHMENT11: number;
            public static GL_COLOR_ATTACHMENT12: number;
            public static GL_COLOR_ATTACHMENT13: number;
            public static GL_COLOR_ATTACHMENT14: number;
            public static GL_COLOR_ATTACHMENT15: number;
            public static GL_COLOR_ATTACHMENT2: number;
            public static GL_COLOR_ATTACHMENT3: number;
            public static GL_COLOR_ATTACHMENT4: number;
            public static GL_COLOR_ATTACHMENT5: number;
            public static GL_COLOR_ATTACHMENT6: number;
            public static GL_COLOR_ATTACHMENT7: number;
            public static GL_COLOR_ATTACHMENT8: number;
            public static GL_COLOR_ATTACHMENT9: number;
            public static GL_COMPARE_REF_TO_TEXTURE: number;
            public static GL_COMPRESSED_R11_EAC: number;
            public static GL_COMPRESSED_RG11_EAC: number;
            public static GL_COMPRESSED_RGB8_ETC2: number;
            public static GL_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: number;
            public static GL_COMPRESSED_RGBA8_ETC2_EAC: number;
            public static GL_COMPRESSED_SIGNED_R11_EAC: number;
            public static GL_COMPRESSED_SIGNED_RG11_EAC: number;
            public static GL_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: number;
            public static GL_COMPRESSED_SRGB8_ETC2: number;
            public static GL_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: number;
            public static GL_CONDITION_SATISFIED: number;
            public static GL_COPY_READ_BUFFER: number;
            public static GL_COPY_READ_BUFFER_BINDING: number;
            public static GL_COPY_WRITE_BUFFER: number;
            public static GL_COPY_WRITE_BUFFER_BINDING: number;
            public static GL_CURRENT_QUERY: number;
            public static GL_DEPTH: number;
            public static GL_DEPTH24_STENCIL8: number;
            public static GL_DEPTH32F_STENCIL8: number;
            public static GL_DEPTH_COMPONENT24: number;
            public static GL_DEPTH_COMPONENT32F: number;
            public static GL_DEPTH_STENCIL: number;
            public static GL_DEPTH_STENCIL_ATTACHMENT: number;
            public static GL_DRAW_BUFFER0: number;
            public static GL_DRAW_BUFFER1: number;
            public static GL_DRAW_BUFFER10: number;
            public static GL_DRAW_BUFFER11: number;
            public static GL_DRAW_BUFFER12: number;
            public static GL_DRAW_BUFFER13: number;
            public static GL_DRAW_BUFFER14: number;
            public static GL_DRAW_BUFFER15: number;
            public static GL_DRAW_BUFFER2: number;
            public static GL_DRAW_BUFFER3: number;
            public static GL_DRAW_BUFFER4: number;
            public static GL_DRAW_BUFFER5: number;
            public static GL_DRAW_BUFFER6: number;
            public static GL_DRAW_BUFFER7: number;
            public static GL_DRAW_BUFFER8: number;
            public static GL_DRAW_BUFFER9: number;
            public static GL_DRAW_FRAMEBUFFER: number;
            public static GL_DRAW_FRAMEBUFFER_BINDING: number;
            public static GL_DYNAMIC_COPY: number;
            public static GL_DYNAMIC_READ: number;
            public static GL_FLOAT_32_UNSIGNED_INT_24_8_REV: number;
            public static GL_FLOAT_MAT2x3: number;
            public static GL_FLOAT_MAT2x4: number;
            public static GL_FLOAT_MAT3x2: number;
            public static GL_FLOAT_MAT3x4: number;
            public static GL_FLOAT_MAT4x2: number;
            public static GL_FLOAT_MAT4x3: number;
            public static GL_FRAGMENT_SHADER_DERIVATIVE_HINT: number;
            public static GL_FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: number;
            public static GL_FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: number;
            public static GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: number;
            public static GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: number;
            public static GL_FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: number;
            public static GL_FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: number;
            public static GL_FRAMEBUFFER_ATTACHMENT_RED_SIZE: number;
            public static GL_FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: number;
            public static GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: number;
            public static GL_FRAMEBUFFER_DEFAULT: number;
            public static GL_FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: number;
            public static GL_FRAMEBUFFER_UNDEFINED: number;
            public static GL_GREEN: number;
            public static GL_HALF_FLOAT: number;
            public static GL_INTERLEAVED_ATTRIBS: number;
            public static GL_INT_2_10_10_10_REV: number;
            public static GL_INT_SAMPLER_2D: number;
            public static GL_INT_SAMPLER_2D_ARRAY: number;
            public static GL_INT_SAMPLER_3D: number;
            public static GL_INT_SAMPLER_CUBE: number;
            public static GL_INVALID_INDEX: number;
            public static GL_MAJOR_VERSION: number;
            public static GL_MAP_FLUSH_EXPLICIT_BIT: number;
            public static GL_MAP_INVALIDATE_BUFFER_BIT: number;
            public static GL_MAP_INVALIDATE_RANGE_BIT: number;
            public static GL_MAP_READ_BIT: number;
            public static GL_MAP_UNSYNCHRONIZED_BIT: number;
            public static GL_MAP_WRITE_BIT: number;
            public static GL_MAX: number;
            public static GL_MAX_3D_TEXTURE_SIZE: number;
            public static GL_MAX_ARRAY_TEXTURE_LAYERS: number;
            public static GL_MAX_COLOR_ATTACHMENTS: number;
            public static GL_MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: number;
            public static GL_MAX_COMBINED_UNIFORM_BLOCKS: number;
            public static GL_MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: number;
            public static GL_MAX_DRAW_BUFFERS: number;
            public static GL_MAX_ELEMENTS_INDICES: number;
            public static GL_MAX_ELEMENTS_VERTICES: number;
            public static GL_MAX_ELEMENT_INDEX: number;
            public static GL_MAX_FRAGMENT_INPUT_COMPONENTS: number;
            public static GL_MAX_FRAGMENT_UNIFORM_BLOCKS: number;
            public static GL_MAX_FRAGMENT_UNIFORM_COMPONENTS: number;
            public static GL_MAX_PROGRAM_TEXEL_OFFSET: number;
            public static GL_MAX_SAMPLES: number;
            public static GL_MAX_SERVER_WAIT_TIMEOUT: number;
            public static GL_MAX_TEXTURE_LOD_BIAS: number;
            public static GL_MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: number;
            public static GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: number;
            public static GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: number;
            public static GL_MAX_UNIFORM_BLOCK_SIZE: number;
            public static GL_MAX_UNIFORM_BUFFER_BINDINGS: number;
            public static GL_MAX_VARYING_COMPONENTS: number;
            public static GL_MAX_VERTEX_OUTPUT_COMPONENTS: number;
            public static GL_MAX_VERTEX_UNIFORM_BLOCKS: number;
            public static GL_MAX_VERTEX_UNIFORM_COMPONENTS: number;
            public static GL_MIN: number;
            public static GL_MINOR_VERSION: number;
            public static GL_MIN_PROGRAM_TEXEL_OFFSET: number;
            public static GL_NUM_EXTENSIONS: number;
            public static GL_NUM_PROGRAM_BINARY_FORMATS: number;
            public static GL_NUM_SAMPLE_COUNTS: number;
            public static GL_OBJECT_TYPE: number;
            public static GL_PACK_ROW_LENGTH: number;
            public static GL_PACK_SKIP_PIXELS: number;
            public static GL_PACK_SKIP_ROWS: number;
            public static GL_PIXEL_PACK_BUFFER: number;
            public static GL_PIXEL_PACK_BUFFER_BINDING: number;
            public static GL_PIXEL_UNPACK_BUFFER: number;
            public static GL_PIXEL_UNPACK_BUFFER_BINDING: number;
            public static GL_PRIMITIVE_RESTART_FIXED_INDEX: number;
            public static GL_PROGRAM_BINARY_FORMATS: number;
            public static GL_PROGRAM_BINARY_LENGTH: number;
            public static GL_PROGRAM_BINARY_RETRIEVABLE_HINT: number;
            public static GL_QUERY_RESULT: number;
            public static GL_QUERY_RESULT_AVAILABLE: number;
            public static GL_R11F_G11F_B10F: number;
            public static GL_R16F: number;
            public static GL_R16I: number;
            public static GL_R16UI: number;
            public static GL_R32F: number;
            public static GL_R32I: number;
            public static GL_R32UI: number;
            public static GL_R8: number;
            public static GL_R8I: number;
            public static GL_R8UI: number;
            public static GL_R8_SNORM: number;
            public static GL_RASTERIZER_DISCARD: number;
            public static GL_READ_BUFFER: number;
            public static GL_READ_FRAMEBUFFER: number;
            public static GL_READ_FRAMEBUFFER_BINDING: number;
            public static GL_RED: number;
            public static GL_RED_INTEGER: number;
            public static GL_RENDERBUFFER_SAMPLES: number;
            public static GL_RG: number;
            public static GL_RG16F: number;
            public static GL_RG16I: number;
            public static GL_RG16UI: number;
            public static GL_RG32F: number;
            public static GL_RG32I: number;
            public static GL_RG32UI: number;
            public static GL_RG8: number;
            public static GL_RG8I: number;
            public static GL_RG8UI: number;
            public static GL_RG8_SNORM: number;
            public static GL_RGB10_A2: number;
            public static GL_RGB10_A2UI: number;
            public static GL_RGB16F: number;
            public static GL_RGB16I: number;
            public static GL_RGB16UI: number;
            public static GL_RGB32F: number;
            public static GL_RGB32I: number;
            public static GL_RGB32UI: number;
            public static GL_RGB8: number;
            public static GL_RGB8I: number;
            public static GL_RGB8UI: number;
            public static GL_RGB8_SNORM: number;
            public static GL_RGB9_E5: number;
            public static GL_RGBA16F: number;
            public static GL_RGBA16I: number;
            public static GL_RGBA16UI: number;
            public static GL_RGBA32F: number;
            public static GL_RGBA32I: number;
            public static GL_RGBA32UI: number;
            public static GL_RGBA8: number;
            public static GL_RGBA8I: number;
            public static GL_RGBA8UI: number;
            public static GL_RGBA8_SNORM: number;
            public static GL_RGBA_INTEGER: number;
            public static GL_RGB_INTEGER: number;
            public static GL_RG_INTEGER: number;
            public static GL_SAMPLER_2D_ARRAY: number;
            public static GL_SAMPLER_2D_ARRAY_SHADOW: number;
            public static GL_SAMPLER_2D_SHADOW: number;
            public static GL_SAMPLER_3D: number;
            public static GL_SAMPLER_BINDING: number;
            public static GL_SAMPLER_CUBE_SHADOW: number;
            public static GL_SEPARATE_ATTRIBS: number;
            public static GL_SIGNALED: number;
            public static GL_SIGNED_NORMALIZED: number;
            public static GL_SRGB: number;
            public static GL_SRGB8: number;
            public static GL_SRGB8_ALPHA8: number;
            public static GL_STATIC_COPY: number;
            public static GL_STATIC_READ: number;
            public static GL_STENCIL: number;
            public static GL_STREAM_COPY: number;
            public static GL_STREAM_READ: number;
            public static GL_SYNC_CONDITION: number;
            public static GL_SYNC_FENCE: number;
            public static GL_SYNC_FLAGS: number;
            public static GL_SYNC_FLUSH_COMMANDS_BIT: number;
            public static GL_SYNC_GPU_COMMANDS_COMPLETE: number;
            public static GL_SYNC_STATUS: number;
            public static GL_TEXTURE_2D_ARRAY: number;
            public static GL_TEXTURE_3D: number;
            public static GL_TEXTURE_BASE_LEVEL: number;
            public static GL_TEXTURE_BINDING_2D_ARRAY: number;
            public static GL_TEXTURE_BINDING_3D: number;
            public static GL_TEXTURE_COMPARE_FUNC: number;
            public static GL_TEXTURE_COMPARE_MODE: number;
            public static GL_TEXTURE_IMMUTABLE_FORMAT: number;
            public static GL_TEXTURE_IMMUTABLE_LEVELS: number;
            public static GL_TEXTURE_MAX_LEVEL: number;
            public static GL_TEXTURE_MAX_LOD: number;
            public static GL_TEXTURE_MIN_LOD: number;
            public static GL_TEXTURE_SWIZZLE_A: number;
            public static GL_TEXTURE_SWIZZLE_B: number;
            public static GL_TEXTURE_SWIZZLE_G: number;
            public static GL_TEXTURE_SWIZZLE_R: number;
            public static GL_TEXTURE_WRAP_R: number;
            public static GL_TIMEOUT_EXPIRED: number;
            public static GL_TIMEOUT_IGNORED: number;
            public static GL_TRANSFORM_FEEDBACK: number;
            public static GL_TRANSFORM_FEEDBACK_ACTIVE: number;
            public static GL_TRANSFORM_FEEDBACK_BINDING: number;
            public static GL_TRANSFORM_FEEDBACK_BUFFER: number;
            public static GL_TRANSFORM_FEEDBACK_BUFFER_BINDING: number;
            public static GL_TRANSFORM_FEEDBACK_BUFFER_MODE: number;
            public static GL_TRANSFORM_FEEDBACK_BUFFER_SIZE: number;
            public static GL_TRANSFORM_FEEDBACK_BUFFER_START: number;
            public static GL_TRANSFORM_FEEDBACK_PAUSED: number;
            public static GL_TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: number;
            public static GL_TRANSFORM_FEEDBACK_VARYINGS: number;
            public static GL_TRANSFORM_FEEDBACK_VARYING_MAX_LENGTH: number;
            public static GL_UNIFORM_ARRAY_STRIDE: number;
            public static GL_UNIFORM_BLOCK_ACTIVE_UNIFORMS: number;
            public static GL_UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: number;
            public static GL_UNIFORM_BLOCK_BINDING: number;
            public static GL_UNIFORM_BLOCK_DATA_SIZE: number;
            public static GL_UNIFORM_BLOCK_INDEX: number;
            public static GL_UNIFORM_BLOCK_NAME_LENGTH: number;
            public static GL_UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: number;
            public static GL_UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: number;
            public static GL_UNIFORM_BUFFER: number;
            public static GL_UNIFORM_BUFFER_BINDING: number;
            public static GL_UNIFORM_BUFFER_OFFSET_ALIGNMENT: number;
            public static GL_UNIFORM_BUFFER_SIZE: number;
            public static GL_UNIFORM_BUFFER_START: number;
            public static GL_UNIFORM_IS_ROW_MAJOR: number;
            public static GL_UNIFORM_MATRIX_STRIDE: number;
            public static GL_UNIFORM_NAME_LENGTH: number;
            public static GL_UNIFORM_OFFSET: number;
            public static GL_UNIFORM_SIZE: number;
            public static GL_UNIFORM_TYPE: number;
            public static GL_UNPACK_IMAGE_HEIGHT: number;
            public static GL_UNPACK_ROW_LENGTH: number;
            public static GL_UNPACK_SKIP_IMAGES: number;
            public static GL_UNPACK_SKIP_PIXELS: number;
            public static GL_UNPACK_SKIP_ROWS: number;
            public static GL_UNSIGNALED: number;
            public static GL_UNSIGNED_INT_10F_11F_11F_REV: number;
            public static GL_UNSIGNED_INT_24_8: number;
            public static GL_UNSIGNED_INT_2_10_10_10_REV: number;
            public static GL_UNSIGNED_INT_5_9_9_9_REV: number;
            public static GL_UNSIGNED_INT_SAMPLER_2D: number;
            public static GL_UNSIGNED_INT_SAMPLER_2D_ARRAY: number;
            public static GL_UNSIGNED_INT_SAMPLER_3D: number;
            public static GL_UNSIGNED_INT_SAMPLER_CUBE: number;
            public static GL_UNSIGNED_INT_VEC2: number;
            public static GL_UNSIGNED_INT_VEC3: number;
            public static GL_UNSIGNED_INT_VEC4: number;
            public static GL_UNSIGNED_NORMALIZED: number;
            public static GL_VERTEX_ARRAY_BINDING: number;
            public static GL_VERTEX_ATTRIB_ARRAY_DIVISOR: number;
            public static GL_VERTEX_ATTRIB_ARRAY_INTEGER: number;
            public static GL_WAIT_FAILED: number;

            public static glUniformMatrix2x4fv(param0: number, param1: number, param2: boolean, param3: javanioFloatBuffer): void;

            public static glSamplerParameteriv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glTexSubImage3D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number): void;

            public static glClearBufferuiv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glClientWaitSync(param0: number, param1: number, param2: number): number;

            public static glVertexAttribI4ui(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public static glCopyBufferSubData(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public static glGetQueryiv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glFramebufferTextureLayer(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public static glDrawArraysInstanced(param0: number, param1: number, param2: number, param3: number): void;

            public static glRenderbufferStorageMultisample(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public static glClearBufferfv(param0: number, param1: number, param2: javanioFloatBuffer): void;

            public static glSamplerParameterf(param0: number, param1: number, param2: number): void;

            public static glSamplerParameterfv(param0: number, param1: number, param2: javanioFloatBuffer): void;

            public static glDeleteSync(param0: number): void;

            public static glGetActiveUniformBlockName(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>, param6: number): void;

            public static glSamplerParameteri(param0: number, param1: number, param2: number): void;

            public static glGenSamplers(param0: number, param1: native.Array<number>, param2: number): void;

            public static glUniformMatrix2x3fv(param0: number, param1: number, param2: boolean, param3: native.Array<number>, param4: number): void;

            public static glUniformMatrix3x4fv(param0: number, param1: number, param2: boolean, param3: native.Array<number>, param4: number): void;

            public static glVertexAttribI4i(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public static glGetSynciv(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>, param6: number): void;

            public static glUniformMatrix3x2fv(param0: number, param1: number, param2: boolean, param3: native.Array<number>, param4: number): void;

            public static glBeginQuery(param0: number, param1: number): void;

            public static glVertexAttribI4uiv(param0: number, param1: native.Array<number>, param2: number): void;

            public static glCompressedTexImage3D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: javanioBuffer): void;

            public static glEndQuery(param0: number): void;

            public constructor();

            public static glGenTransformFeedbacks(param0: number, param1: native.Array<number>, param2: number): void;

            public static glGetUniformIndices(param0: number, param1: native.Array<string>, param2: javanioIntBuffer): void;

            public static glBindSampler(param0: number, param1: number): void;

            public static glTexStorage3D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

            public static glGetInteger64i_v(param0: number, param1: number, param2: javanioLongBuffer): void;

            public static glCompressedTexImage3D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;

            public static glDrawBuffers(param0: number, param1: native.Array<number>, param2: number): void;

            public static glUniformBlockBinding(param0: number, param1: number, param2: number): void;

            public static glUniform2uiv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glUniformMatrix4x3fv(param0: number, param1: number, param2: boolean, param3: javanioFloatBuffer): void;
            public static glUniformMatrix4x3fv(param0: number, param1: number, param2: boolean, param3: native.Array<number>, param4: number): void;

            public static glIsQuery(param0: number): boolean;

            public static glUniform1ui(param0: number, param1: number): void;

            public static glIsSampler(param0: number): boolean;

            public static glIsSync(param0: number): boolean;

            public static glUniform3uiv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glGetUniformIndices(param0: number, param1: native.Array<string>, param2: native.Array<number>, param3: number): void;

            public static glUniform4uiv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glUniformMatrix4x2fv(param0: number, param1: number, param2: boolean, param3: native.Array<number>, param4: number): void;

            public static glDeleteSamplers(param0: number, param1: javanioIntBuffer): void;

            public static glTexStorage2D(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public static glUniformMatrix2x3fv(param0: number, param1: number, param2: boolean, param3: javanioFloatBuffer): void;

            public static glGetIntegeri_v(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glGetVertexAttribIiv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glGenVertexArrays(param0: number, param1: native.Array<number>, param2: number): void;

            public static glGetActiveUniformBlockiv(param0: number, param1: number, param2: number, param3: javanioIntBuffer): void;

            public static glGetFragDataLocation(param0: number, param1: string): number;

            public static glUniform1uiv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glGetUniformBlockIndex(param0: number, param1: string): number;

            public static glGetQueryiv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glDrawRangeElements(param0: number, param1: number, param2: number, param3: number, param4: number, param5: javanioBuffer): void;

            public static glGetUniformuiv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glDeleteVertexArrays(param0: number, param1: native.Array<number>, param2: number): void;

            public static glClearBufferfi(param0: number, param1: number, param2: number, param3: number): void;

            public static glProgramBinary(param0: number, param1: number, param2: javanioBuffer, param3: number): void;

            public static glGenQueries(param0: number, param1: javanioIntBuffer): void;

            public static glGetTransformFeedbackVarying(param0: number, param1: number, param2: javanioIntBuffer, param3: javanioIntBuffer): string;

            public static glGetActiveUniformBlockName(param0: number, param1: number): string;

            public static glFenceSync(param0: number, param1: number): number;

            public static glDrawElementsInstanced(param0: number, param1: number, param2: number, param3: javanioBuffer, param4: number): void;

            public static glGetTransformFeedbackVarying(param0: number, param1: number, param2: number, param3: javanioIntBuffer, param4: javanioIntBuffer, param5: javanioIntBuffer, param6: number): void;

            public static glGetSamplerParameteriv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glCompressedTexSubImage3D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: javanioBuffer): void;

            public static glIsTransformFeedback(param0: number): boolean;

            public static glClearBufferfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glGetInternalformativ(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>, param5: number): void;

            public static glTexImage3D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: javanioBuffer): void;

            public static glGetProgramBinary(param0: number, param1: number, param2: javanioIntBuffer, param3: javanioIntBuffer, param4: javanioBuffer): void;

            public static glBindVertexArray(param0: number): void;

            public static glGetVertexAttribIuiv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glUniformMatrix3x4fv(param0: number, param1: number, param2: boolean, param3: javanioFloatBuffer): void;

            public static glGetVertexAttribIuiv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glGetSynciv(param0: number, param1: number, param2: number, param3: javanioIntBuffer, param4: javanioIntBuffer): void;

            public static glGetInteger64i_v(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glCompressedTexSubImage3D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number): void;

            public static glFlushMappedBufferRange(param0: number, param1: number, param2: number): void;

            public static glReadBuffer(param0: number): void;

            public static glClearBufferiv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glUniformMatrix2x4fv(param0: number, param1: number, param2: boolean, param3: native.Array<number>, param4: number): void;

            public static glUniformMatrix3x2fv(param0: number, param1: number, param2: boolean, param3: javanioFloatBuffer): void;

            public static glUniformMatrix4x2fv(param0: number, param1: number, param2: boolean, param3: javanioFloatBuffer): void;

            public static glDeleteQueries(param0: number, param1: javanioIntBuffer): void;

            public static glGetTransformFeedbackVarying(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>, param5: number): string;

            public static glGetActiveUniformBlockiv(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number): void;

            public static glDeleteQueries(param0: number, param1: native.Array<number>, param2: number): void;

            public static glSamplerParameterfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glInvalidateFramebuffer(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glClearBufferuiv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glGetTransformFeedbackVarying(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>, param6: number, param7: native.Array<number>, param8: number, param9: native.Array<number>, param10: number): void;

            public static glProgramParameteri(param0: number, param1: number, param2: number): void;

            public static glTexSubImage3D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: javanioBuffer): void;

            public static glGetStringi(param0: number, param1: number): string;

            public static glVertexAttribI4uiv(param0: number, param1: javanioIntBuffer): void;

            public static glInvalidateSubFramebuffer(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: number, param5: number, param6: number, param7: number): void;

            public static glMapBufferRange(param0: number, param1: number, param2: number, param3: number): javanioBuffer;

            public static glGetVertexAttribIiv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glVertexAttribIPointer(param0: number, param1: number, param2: number, param3: number, param4: javanioBuffer): void;
            public static glVertexAttribIPointer(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public static glGetInteger64v(param0: number, param1: native.Array<number>, param2: number): void;

            public static glDeleteVertexArrays(param0: number, param1: javanioIntBuffer): void;

            public static glDeleteSamplers(param0: number, param1: native.Array<number>, param2: number): void;

            public static glGetSamplerParameteriv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glUniform1uiv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glBindBufferRange(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public static glTransformFeedbackVaryings(param0: number, param1: native.Array<string>, param2: number): void;

            public static glDrawBuffers(param0: number, param1: javanioIntBuffer): void;

            public static glGetBufferPointerv(param0: number, param1: number): javanioBuffer;

            public static glUniform2uiv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glDrawElementsInstanced(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public static glGetBufferParameteri64v(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glGetActiveUniformsiv(param0: number, param1: number, param2: javanioIntBuffer, param3: number, param4: javanioIntBuffer): void;

            public static glClearBufferiv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glUniform2ui(param0: number, param1: number, param2: number): void;

            public static glEndTransformFeedback(): void;

            public static glInvalidateFramebuffer(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glGenVertexArrays(param0: number, param1: javanioIntBuffer): void;

            public static glIsVertexArray(param0: number): boolean;

            public static glGetUniformuiv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glGetSamplerParameterfv(param0: number, param1: number, param2: javanioFloatBuffer): void;

            public static glGetBufferParameteri64v(param0: number, param1: number, param2: javanioLongBuffer): void;

            public static glCopyTexSubImage3D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;

            public static glDeleteTransformFeedbacks(param0: number, param1: native.Array<number>, param2: number): void;

            public static glBindTransformFeedback(param0: number, param1: number): void;

            public static glDrawRangeElements(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

            public static glGetIntegeri_v(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glGetActiveUniformBlockName(param0: number, param1: number, param2: javanioBuffer, param3: javanioBuffer): void;

            public static glResumeTransformFeedback(): void;

            public static glBeginTransformFeedback(param0: number): void;

            public static glInvalidateSubFramebuffer(param0: number, param1: number, param2: javanioIntBuffer, param3: number, param4: number, param5: number, param6: number): void;

            public static glPauseTransformFeedback(): void;

            public static glUniform4uiv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glGetQueryObjectuiv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glVertexAttribI4iv(param0: number, param1: javanioIntBuffer): void;

            public static glGetQueryObjectuiv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glDeleteTransformFeedbacks(param0: number, param1: javanioIntBuffer): void;

            public static glBindBufferBase(param0: number, param1: number, param2: number): void;

            public static glUniform3ui(param0: number, param1: number, param2: number, param3: number): void;

            public static glGenSamplers(param0: number, param1: javanioIntBuffer): void;

            public static glBlitFramebuffer(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number): void;

            public static glUniform3uiv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glGetInternalformativ(param0: number, param1: number, param2: number, param3: number, param4: javanioIntBuffer): void;

            public static glGenTransformFeedbacks(param0: number, param1: javanioIntBuffer): void;

            public static glUnmapBuffer(param0: number): boolean;

            public static glVertexAttribDivisor(param0: number, param1: number): void;

            public static glGetSamplerParameterfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glSamplerParameteriv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glGetActiveUniformsiv(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: number, param5: native.Array<number>, param6: number): void;

            public static glWaitSync(param0: number, param1: number, param2: number): void;

            public static glGetInteger64v(param0: number, param1: javanioLongBuffer): void;

            public static glGetProgramBinary(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>, param5: number, param6: javanioBuffer): void;

            public static glTexImage3D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number): void;

            public static glUniform4ui(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public static glVertexAttribI4iv(param0: number, param1: native.Array<number>, param2: number): void;

            public static glGenQueries(param0: number, param1: native.Array<number>, param2: number): void;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.FloatBuffer.d.ts" />
/// <reference path="./java.nio.IntBuffer.d.ts" />
declare module android {
    export module opengl {
        export class GLES31 extends android.opengl.GLES30 {
            public static GL_ACTIVE_ATOMIC_COUNTER_BUFFERS: number;
            public static GL_ACTIVE_PROGRAM: number;
            public static GL_ACTIVE_RESOURCES: number;
            public static GL_ACTIVE_VARIABLES: number;
            public static GL_ALL_SHADER_BITS: number;
            public static GL_ARRAY_SIZE: number;
            public static GL_ARRAY_STRIDE: number;
            public static GL_ATOMIC_COUNTER_BARRIER_BIT: number;
            public static GL_ATOMIC_COUNTER_BUFFER: number;
            public static GL_ATOMIC_COUNTER_BUFFER_BINDING: number;
            public static GL_ATOMIC_COUNTER_BUFFER_INDEX: number;
            public static GL_ATOMIC_COUNTER_BUFFER_SIZE: number;
            public static GL_ATOMIC_COUNTER_BUFFER_START: number;
            public static GL_BLOCK_INDEX: number;
            public static GL_BUFFER_BINDING: number;
            public static GL_BUFFER_DATA_SIZE: number;
            public static GL_BUFFER_UPDATE_BARRIER_BIT: number;
            public static GL_BUFFER_VARIABLE: number;
            public static GL_COMMAND_BARRIER_BIT: number;
            public static GL_COMPUTE_SHADER: number;
            public static GL_COMPUTE_SHADER_BIT: number;
            public static GL_COMPUTE_WORK_GROUP_SIZE: number;
            public static GL_DEPTH_STENCIL_TEXTURE_MODE: number;
            public static GL_DISPATCH_INDIRECT_BUFFER: number;
            public static GL_DISPATCH_INDIRECT_BUFFER_BINDING: number;
            public static GL_DRAW_INDIRECT_BUFFER: number;
            public static GL_DRAW_INDIRECT_BUFFER_BINDING: number;
            public static GL_FRAGMENT_SHADER_BIT: number;
            public static GL_FRAMEBUFFER_BARRIER_BIT: number;
            public static GL_FRAMEBUFFER_DEFAULT_FIXED_SAMPLE_LOCATIONS: number;
            public static GL_FRAMEBUFFER_DEFAULT_HEIGHT: number;
            public static GL_FRAMEBUFFER_DEFAULT_SAMPLES: number;
            public static GL_FRAMEBUFFER_DEFAULT_WIDTH: number;
            public static GL_IMAGE_2D: number;
            public static GL_IMAGE_2D_ARRAY: number;
            public static GL_IMAGE_3D: number;
            public static GL_IMAGE_BINDING_ACCESS: number;
            public static GL_IMAGE_BINDING_FORMAT: number;
            public static GL_IMAGE_BINDING_LAYER: number;
            public static GL_IMAGE_BINDING_LAYERED: number;
            public static GL_IMAGE_BINDING_LEVEL: number;
            public static GL_IMAGE_BINDING_NAME: number;
            public static GL_IMAGE_CUBE: number;
            public static GL_IMAGE_FORMAT_COMPATIBILITY_BY_CLASS: number;
            public static GL_IMAGE_FORMAT_COMPATIBILITY_BY_SIZE: number;
            public static GL_IMAGE_FORMAT_COMPATIBILITY_TYPE: number;
            public static GL_INT_IMAGE_2D: number;
            public static GL_INT_IMAGE_2D_ARRAY: number;
            public static GL_INT_IMAGE_3D: number;
            public static GL_INT_IMAGE_CUBE: number;
            public static GL_INT_SAMPLER_2D_MULTISAMPLE: number;
            public static GL_IS_ROW_MAJOR: number;
            public static GL_LOCATION: number;
            public static GL_MATRIX_STRIDE: number;
            public static GL_MAX_ATOMIC_COUNTER_BUFFER_BINDINGS: number;
            public static GL_MAX_ATOMIC_COUNTER_BUFFER_SIZE: number;
            public static GL_MAX_COLOR_TEXTURE_SAMPLES: number;
            public static GL_MAX_COMBINED_ATOMIC_COUNTERS: number;
            public static GL_MAX_COMBINED_ATOMIC_COUNTER_BUFFERS: number;
            public static GL_MAX_COMBINED_COMPUTE_UNIFORM_COMPONENTS: number;
            public static GL_MAX_COMBINED_IMAGE_UNIFORMS: number;
            public static GL_MAX_COMBINED_SHADER_OUTPUT_RESOURCES: number;
            public static GL_MAX_COMBINED_SHADER_STORAGE_BLOCKS: number;
            public static GL_MAX_COMPUTE_ATOMIC_COUNTERS: number;
            public static GL_MAX_COMPUTE_ATOMIC_COUNTER_BUFFERS: number;
            public static GL_MAX_COMPUTE_IMAGE_UNIFORMS: number;
            public static GL_MAX_COMPUTE_SHADER_STORAGE_BLOCKS: number;
            public static GL_MAX_COMPUTE_SHARED_MEMORY_SIZE: number;
            public static GL_MAX_COMPUTE_TEXTURE_IMAGE_UNITS: number;
            public static GL_MAX_COMPUTE_UNIFORM_BLOCKS: number;
            public static GL_MAX_COMPUTE_UNIFORM_COMPONENTS: number;
            public static GL_MAX_COMPUTE_WORK_GROUP_COUNT: number;
            public static GL_MAX_COMPUTE_WORK_GROUP_INVOCATIONS: number;
            public static GL_MAX_COMPUTE_WORK_GROUP_SIZE: number;
            public static GL_MAX_DEPTH_TEXTURE_SAMPLES: number;
            public static GL_MAX_FRAGMENT_ATOMIC_COUNTERS: number;
            public static GL_MAX_FRAGMENT_ATOMIC_COUNTER_BUFFERS: number;
            public static GL_MAX_FRAGMENT_IMAGE_UNIFORMS: number;
            public static GL_MAX_FRAGMENT_SHADER_STORAGE_BLOCKS: number;
            public static GL_MAX_FRAMEBUFFER_HEIGHT: number;
            public static GL_MAX_FRAMEBUFFER_SAMPLES: number;
            public static GL_MAX_FRAMEBUFFER_WIDTH: number;
            public static GL_MAX_IMAGE_UNITS: number;
            public static GL_MAX_INTEGER_SAMPLES: number;
            public static GL_MAX_NAME_LENGTH: number;
            public static GL_MAX_NUM_ACTIVE_VARIABLES: number;
            public static GL_MAX_PROGRAM_TEXTURE_GATHER_OFFSET: number;
            public static GL_MAX_SAMPLE_MASK_WORDS: number;
            public static GL_MAX_SHADER_STORAGE_BLOCK_SIZE: number;
            public static GL_MAX_SHADER_STORAGE_BUFFER_BINDINGS: number;
            public static GL_MAX_UNIFORM_LOCATIONS: number;
            public static GL_MAX_VERTEX_ATOMIC_COUNTERS: number;
            public static GL_MAX_VERTEX_ATOMIC_COUNTER_BUFFERS: number;
            public static GL_MAX_VERTEX_ATTRIB_BINDINGS: number;
            public static GL_MAX_VERTEX_ATTRIB_RELATIVE_OFFSET: number;
            public static GL_MAX_VERTEX_ATTRIB_STRIDE: number;
            public static GL_MAX_VERTEX_IMAGE_UNIFORMS: number;
            public static GL_MAX_VERTEX_SHADER_STORAGE_BLOCKS: number;
            public static GL_MIN_PROGRAM_TEXTURE_GATHER_OFFSET: number;
            public static GL_NAME_LENGTH: number;
            public static GL_NUM_ACTIVE_VARIABLES: number;
            public static GL_OFFSET: number;
            public static GL_PIXEL_BUFFER_BARRIER_BIT: number;
            public static GL_PROGRAM_INPUT: number;
            public static GL_PROGRAM_OUTPUT: number;
            public static GL_PROGRAM_PIPELINE_BINDING: number;
            public static GL_PROGRAM_SEPARABLE: number;
            public static GL_READ_ONLY: number;
            public static GL_READ_WRITE: number;
            public static GL_REFERENCED_BY_COMPUTE_SHADER: number;
            public static GL_REFERENCED_BY_FRAGMENT_SHADER: number;
            public static GL_REFERENCED_BY_VERTEX_SHADER: number;
            public static GL_SAMPLER_2D_MULTISAMPLE: number;
            public static GL_SAMPLE_MASK: number;
            public static GL_SAMPLE_MASK_VALUE: number;
            public static GL_SAMPLE_POSITION: number;
            public static GL_SHADER_STORAGE_BARRIER_BIT: number;
            public static GL_SHADER_STORAGE_BLOCK: number;
            public static GL_SHADER_STORAGE_BUFFER: number;
            public static GL_SHADER_STORAGE_BUFFER_BINDING: number;
            public static GL_SHADER_STORAGE_BUFFER_OFFSET_ALIGNMENT: number;
            public static GL_SHADER_STORAGE_BUFFER_SIZE: number;
            public static GL_SHADER_STORAGE_BUFFER_START: number;
            public static GL_STENCIL_INDEX: number;
            public static GL_TEXTURE_2D_MULTISAMPLE: number;
            public static GL_TEXTURE_ALPHA_SIZE: number;
            public static GL_TEXTURE_ALPHA_TYPE: number;
            public static GL_TEXTURE_BINDING_2D_MULTISAMPLE: number;
            public static GL_TEXTURE_BLUE_SIZE: number;
            public static GL_TEXTURE_BLUE_TYPE: number;
            public static GL_TEXTURE_COMPRESSED: number;
            public static GL_TEXTURE_DEPTH: number;
            public static GL_TEXTURE_DEPTH_SIZE: number;
            public static GL_TEXTURE_DEPTH_TYPE: number;
            public static GL_TEXTURE_FETCH_BARRIER_BIT: number;
            public static GL_TEXTURE_FIXED_SAMPLE_LOCATIONS: number;
            public static GL_TEXTURE_GREEN_SIZE: number;
            public static GL_TEXTURE_GREEN_TYPE: number;
            public static GL_TEXTURE_HEIGHT: number;
            public static GL_TEXTURE_INTERNAL_FORMAT: number;
            public static GL_TEXTURE_RED_SIZE: number;
            public static GL_TEXTURE_RED_TYPE: number;
            public static GL_TEXTURE_SAMPLES: number;
            public static GL_TEXTURE_SHARED_SIZE: number;
            public static GL_TEXTURE_STENCIL_SIZE: number;
            public static GL_TEXTURE_UPDATE_BARRIER_BIT: number;
            public static GL_TEXTURE_WIDTH: number;
            public static GL_TOP_LEVEL_ARRAY_SIZE: number;
            public static GL_TOP_LEVEL_ARRAY_STRIDE: number;
            public static GL_TRANSFORM_FEEDBACK_BARRIER_BIT: number;
            public static GL_TRANSFORM_FEEDBACK_VARYING: number;
            public static GL_TYPE: number;
            public static GL_UNIFORM: number;
            public static GL_UNIFORM_BARRIER_BIT: number;
            public static GL_UNIFORM_BLOCK: number;
            public static GL_UNSIGNED_INT_ATOMIC_COUNTER: number;
            public static GL_UNSIGNED_INT_IMAGE_2D: number;
            public static GL_UNSIGNED_INT_IMAGE_2D_ARRAY: number;
            public static GL_UNSIGNED_INT_IMAGE_3D: number;
            public static GL_UNSIGNED_INT_IMAGE_CUBE: number;
            public static GL_UNSIGNED_INT_SAMPLER_2D_MULTISAMPLE: number;
            public static GL_VERTEX_ATTRIB_BINDING: number;
            public static GL_VERTEX_ATTRIB_RELATIVE_OFFSET: number;
            public static GL_VERTEX_BINDING_BUFFER: number;
            public static GL_VERTEX_BINDING_DIVISOR: number;
            public static GL_VERTEX_BINDING_OFFSET: number;
            public static GL_VERTEX_BINDING_STRIDE: number;
            public static GL_VERTEX_SHADER_BIT: number;
            public static GL_WRITE_ONLY: number;

            public static glProgramUniform2fv(param0: number, param1: number, param2: number, param3: javanioFloatBuffer): void;

            public static glProgramUniform3fv(param0: number, param1: number, param2: number, param3: javanioFloatBuffer): void;

            public static glProgramUniform1fv(param0: number, param1: number, param2: number, param3: javanioFloatBuffer): void;

            public static glProgramUniformMatrix3x2fv(param0: number, param1: number, param2: number, param3: boolean, param4: javanioFloatBuffer): void;

            public static glProgramUniform4fv(param0: number, param1: number, param2: number, param3: javanioFloatBuffer): void;

            public static glProgramUniform4uiv(param0: number, param1: number, param2: number, param3: javanioIntBuffer): void;

            public static glDrawElementsIndirect(param0: number, param1: number, param2: number): void;

            public static glGetProgramPipelineInfoLog(param0: number): string;

            public static glDispatchCompute(param0: number, param1: number, param2: number): void;

            public static glBindImageTexture(param0: number, param1: number, param2: number, param3: boolean, param4: number, param5: number, param6: number): void;

            public static glTexStorage2DMultisample(param0: number, param1: number, param2: number, param3: number, param4: number, param5: boolean): void;

            public static glDeleteProgramPipelines(param0: number, param1: javanioIntBuffer): void;

            public static glGetBooleani_v(param0: number, param1: number, param2: native.Array<boolean>, param3: number): void;

            public static glProgramUniformMatrix2x3fv(param0: number, param1: number, param2: number, param3: boolean, param4: native.Array<number>, param5: number): void;

            public static glGetProgramPipelineiv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glGetTexLevelParameterfv(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number): void;

            public static glVertexAttribFormat(param0: number, param1: number, param2: number, param3: boolean, param4: number): void;

            public static glGenProgramPipelines(param0: number, param1: javanioIntBuffer): void;

            public static glProgramUniform1iv(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number): void;

            public static glProgramUniform3fv(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number): void;

            public static glDrawArraysIndirect(param0: number, param1: number): void;

            public static glProgramUniform3iv(param0: number, param1: number, param2: number, param3: javanioIntBuffer): void;

            public static glProgramUniform2ui(param0: number, param1: number, param2: number, param3: number): void;

            public static glGetProgramResourceIndex(param0: number, param1: number, param2: string): number;

            public static glProgramUniform1uiv(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number): void;

            public static glGetFramebufferParameteriv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glProgramUniformMatrix4x3fv(param0: number, param1: number, param2: number, param3: boolean, param4: native.Array<number>, param5: number): void;

            public static glGetBooleani_v(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glDispatchComputeIndirect(param0: number): void;

            public static glProgramUniform1fv(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number): void;

            public static glProgramUniformMatrix3x2fv(param0: number, param1: number, param2: number, param3: boolean, param4: native.Array<number>, param5: number): void;

            public static glProgramUniformMatrix2x4fv(param0: number, param1: number, param2: number, param3: boolean, param4: javanioFloatBuffer): void;

            public static glGetProgramInterfaceiv(param0: number, param1: number, param2: number, param3: javanioIntBuffer): void;

            public static glProgramUniform4i(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

            public static glProgramUniform1ui(param0: number, param1: number, param2: number): void;

            public static glProgramUniformMatrix3x4fv(param0: number, param1: number, param2: number, param3: boolean, param4: native.Array<number>, param5: number): void;

            public static glGetProgramInterfaceiv(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number): void;

            public static glProgramUniform1f(param0: number, param1: number, param2: number): void;

            public static glGetProgramResourceiv(param0: number, param1: number, param2: number, param3: number, param4: javanioIntBuffer, param5: number, param6: javanioIntBuffer, param7: javanioIntBuffer): void;

            public static glProgramUniformMatrix2fv(param0: number, param1: number, param2: number, param3: boolean, param4: native.Array<number>, param5: number): void;

            public static glProgramUniform2i(param0: number, param1: number, param2: number, param3: number): void;

            public static glProgramUniformMatrix2fv(param0: number, param1: number, param2: number, param3: boolean, param4: javanioFloatBuffer): void;

            public static glProgramUniform4fv(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number): void;

            public static glGetProgramResourceLocation(param0: number, param1: number, param2: string): number;

            public static glProgramUniform2uiv(param0: number, param1: number, param2: number, param3: javanioIntBuffer): void;

            public static glFramebufferParameteri(param0: number, param1: number, param2: number): void;

            public static glProgramUniform3uiv(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number): void;

            public static glBindVertexBuffer(param0: number, param1: number, param2: number, param3: number): void;

            public static glGetProgramResourceName(param0: number, param1: number, param2: number): string;

            public static glProgramUniform4iv(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number): void;

            public static glDeleteProgramPipelines(param0: number, param1: native.Array<number>, param2: number): void;

            public static glVertexAttribIFormat(param0: number, param1: number, param2: number, param3: number): void;

            public static glCreateShaderProgramv(param0: number, param1: native.Array<string>): number;

            public static glProgramUniformMatrix4fv(param0: number, param1: number, param2: number, param3: boolean, param4: native.Array<number>, param5: number): void;

            public static glGenProgramPipelines(param0: number, param1: native.Array<number>, param2: number): void;

            public static glProgramUniform2iv(param0: number, param1: number, param2: number, param3: javanioIntBuffer): void;

            public static glProgramUniformMatrix4x2fv(param0: number, param1: number, param2: number, param3: boolean, param4: javanioFloatBuffer): void;

            public static glGetMultisamplefv(param0: number, param1: number, param2: javanioFloatBuffer): void;

            public static glSampleMaski(param0: number, param1: number): void;

            public static glVertexAttribBinding(param0: number, param1: number): void;

            public static glGetMultisamplefv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glProgramUniform4ui(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

            public static glVertexBindingDivisor(param0: number, param1: number): void;

            public static glMemoryBarrier(param0: number): void;

            public static glProgramUniform4f(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

            public static glGetTexLevelParameteriv(param0: number, param1: number, param2: number, param3: javanioIntBuffer): void;

            public static glGetFramebufferParameteriv(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glProgramUniform1i(param0: number, param1: number, param2: number): void;

            public static glProgramUniformMatrix2x4fv(param0: number, param1: number, param2: number, param3: boolean, param4: native.Array<number>, param5: number): void;

            public static glUseProgramStages(param0: number, param1: number, param2: number): void;

            public static glValidateProgramPipeline(param0: number): void;

            public static glProgramUniform3f(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public static glGetTexLevelParameteriv(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number): void;

            public static glMemoryBarrierByRegion(param0: number): void;

            public static glProgramUniformMatrix4fv(param0: number, param1: number, param2: number, param3: boolean, param4: javanioFloatBuffer): void;

            public static glIsProgramPipeline(param0: number): boolean;

            public static glProgramUniformMatrix3fv(param0: number, param1: number, param2: number, param3: boolean, param4: javanioFloatBuffer): void;

            public static glProgramUniform3iv(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number): void;

            public static glProgramUniformMatrix3x4fv(param0: number, param1: number, param2: number, param3: boolean, param4: javanioFloatBuffer): void;

            public static glActiveShaderProgram(param0: number, param1: number): void;

            public static glProgramUniform4iv(param0: number, param1: number, param2: number, param3: javanioIntBuffer): void;

            public static glProgramUniform1uiv(param0: number, param1: number, param2: number, param3: javanioIntBuffer): void;

            public static glProgramUniform2f(param0: number, param1: number, param2: number, param3: number): void;

            public static glProgramUniformMatrix2x3fv(param0: number, param1: number, param2: number, param3: boolean, param4: javanioFloatBuffer): void;

            public static glGetTexLevelParameterfv(param0: number, param1: number, param2: number, param3: javanioFloatBuffer): void;

            public static glProgramUniform3i(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public static glProgramUniform1iv(param0: number, param1: number, param2: number, param3: javanioIntBuffer): void;

            public static glProgramUniform4uiv(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number): void;

            public static glProgramUniformMatrix3fv(param0: number, param1: number, param2: number, param3: boolean, param4: native.Array<number>, param5: number): void;

            public static glGetProgramPipelineiv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glGetProgramResourceiv(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>, param5: number, param6: number, param7: native.Array<number>, param8: number, param9: native.Array<number>, param10: number): void;

            public static glProgramUniform3uiv(param0: number, param1: number, param2: number, param3: javanioIntBuffer): void;

            public static glProgramUniformMatrix4x3fv(param0: number, param1: number, param2: number, param3: boolean, param4: javanioFloatBuffer): void;

            public static glProgramUniform2iv(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number): void;

            public static glProgramUniformMatrix4x2fv(param0: number, param1: number, param2: number, param3: boolean, param4: native.Array<number>, param5: number): void;

            public static glBindProgramPipeline(param0: number): void;

            public static glProgramUniform3ui(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public static glProgramUniform2uiv(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number): void;

            public static glProgramUniform2fv(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number): void;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.nio.IntBuffer.d.ts" />
declare module android {
    export module opengl {
        export class GLES31Ext extends javalangObject {
            public static GL_BLEND_ADVANCED_COHERENT_KHR: number;
            public static GL_BUFFER_KHR: number;
            public static GL_CLAMP_TO_BORDER_EXT: number;
            public static GL_COLORBURN_KHR: number;
            public static GL_COLORDODGE_KHR: number;
            public static GL_COMPRESSED_RGBA_ASTC_10x10_KHR: number;
            public static GL_COMPRESSED_RGBA_ASTC_10x5_KHR: number;
            public static GL_COMPRESSED_RGBA_ASTC_10x6_KHR: number;
            public static GL_COMPRESSED_RGBA_ASTC_10x8_KHR: number;
            public static GL_COMPRESSED_RGBA_ASTC_12x10_KHR: number;
            public static GL_COMPRESSED_RGBA_ASTC_12x12_KHR: number;
            public static GL_COMPRESSED_RGBA_ASTC_4x4_KHR: number;
            public static GL_COMPRESSED_RGBA_ASTC_5x4_KHR: number;
            public static GL_COMPRESSED_RGBA_ASTC_5x5_KHR: number;
            public static GL_COMPRESSED_RGBA_ASTC_6x5_KHR: number;
            public static GL_COMPRESSED_RGBA_ASTC_6x6_KHR: number;
            public static GL_COMPRESSED_RGBA_ASTC_8x5_KHR: number;
            public static GL_COMPRESSED_RGBA_ASTC_8x6_KHR: number;
            public static GL_COMPRESSED_RGBA_ASTC_8x8_KHR: number;
            public static GL_COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR: number;
            public static GL_COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR: number;
            public static GL_COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR: number;
            public static GL_COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR: number;
            public static GL_COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR: number;
            public static GL_COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR: number;
            public static GL_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR: number;
            public static GL_COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR: number;
            public static GL_COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR: number;
            public static GL_COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR: number;
            public static GL_COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR: number;
            public static GL_COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR: number;
            public static GL_COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR: number;
            public static GL_COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR: number;
            public static GL_CONTEXT_FLAG_DEBUG_BIT_KHR: number;
            public static GL_DARKEN_KHR: number;
            public static GL_DEBUG_CALLBACK_FUNCTION_KHR: number;
            public static GL_DEBUG_CALLBACK_USER_PARAM_KHR: number;
            public static GL_DEBUG_GROUP_STACK_DEPTH_KHR: number;
            public static GL_DEBUG_LOGGED_MESSAGES_KHR: number;
            public static GL_DEBUG_NEXT_LOGGED_MESSAGE_LENGTH_KHR: number;
            public static GL_DEBUG_OUTPUT_KHR: number;
            public static GL_DEBUG_OUTPUT_SYNCHRONOUS_KHR: number;
            public static GL_DEBUG_SEVERITY_HIGH_KHR: number;
            public static GL_DEBUG_SEVERITY_LOW_KHR: number;
            public static GL_DEBUG_SEVERITY_MEDIUM_KHR: number;
            public static GL_DEBUG_SEVERITY_NOTIFICATION_KHR: number;
            public static GL_DEBUG_SOURCE_API_KHR: number;
            public static GL_DEBUG_SOURCE_APPLICATION_KHR: number;
            public static GL_DEBUG_SOURCE_OTHER_KHR: number;
            public static GL_DEBUG_SOURCE_SHADER_COMPILER_KHR: number;
            public static GL_DEBUG_SOURCE_THIRD_PARTY_KHR: number;
            public static GL_DEBUG_SOURCE_WINDOW_SYSTEM_KHR: number;
            public static GL_DEBUG_TYPE_DEPRECATED_BEHAVIOR_KHR: number;
            public static GL_DEBUG_TYPE_ERROR_KHR: number;
            public static GL_DEBUG_TYPE_MARKER_KHR: number;
            public static GL_DEBUG_TYPE_OTHER_KHR: number;
            public static GL_DEBUG_TYPE_PERFORMANCE_KHR: number;
            public static GL_DEBUG_TYPE_POP_GROUP_KHR: number;
            public static GL_DEBUG_TYPE_PORTABILITY_KHR: number;
            public static GL_DEBUG_TYPE_PUSH_GROUP_KHR: number;
            public static GL_DEBUG_TYPE_UNDEFINED_BEHAVIOR_KHR: number;
            public static GL_DECODE_EXT: number;
            public static GL_DIFFERENCE_KHR: number;
            public static GL_EXCLUSION_KHR: number;
            public static GL_FIRST_VERTEX_CONVENTION_EXT: number;
            public static GL_FRACTIONAL_EVEN_EXT: number;
            public static GL_FRACTIONAL_ODD_EXT: number;
            public static GL_FRAGMENT_INTERPOLATION_OFFSET_BITS_OES: number;
            public static GL_FRAMEBUFFER_ATTACHMENT_LAYERED_EXT: number;
            public static GL_FRAMEBUFFER_DEFAULT_LAYERS_EXT: number;
            public static GL_FRAMEBUFFER_INCOMPLETE_LAYER_TARGETS_EXT: number;
            public static GL_GEOMETRY_LINKED_INPUT_TYPE_EXT: number;
            public static GL_GEOMETRY_LINKED_OUTPUT_TYPE_EXT: number;
            public static GL_GEOMETRY_LINKED_VERTICES_OUT_EXT: number;
            public static GL_GEOMETRY_SHADER_BIT_EXT: number;
            public static GL_GEOMETRY_SHADER_EXT: number;
            public static GL_GEOMETRY_SHADER_INVOCATIONS_EXT: number;
            public static GL_HARDLIGHT_KHR: number;
            public static GL_HSL_COLOR_KHR: number;
            public static GL_HSL_HUE_KHR: number;
            public static GL_HSL_LUMINOSITY_KHR: number;
            public static GL_HSL_SATURATION_KHR: number;
            public static GL_IMAGE_BUFFER_EXT: number;
            public static GL_IMAGE_CUBE_MAP_ARRAY_EXT: number;
            public static GL_INT_IMAGE_BUFFER_EXT: number;
            public static GL_INT_IMAGE_CUBE_MAP_ARRAY_EXT: number;
            public static GL_INT_SAMPLER_2D_MULTISAMPLE_ARRAY_OES: number;
            public static GL_INT_SAMPLER_BUFFER_EXT: number;
            public static GL_INT_SAMPLER_CUBE_MAP_ARRAY_EXT: number;
            public static GL_ISOLINES_EXT: number;
            public static GL_IS_PER_PATCH_EXT: number;
            public static GL_LAST_VERTEX_CONVENTION_EXT: number;
            public static GL_LAYER_PROVOKING_VERTEX_EXT: number;
            public static GL_LIGHTEN_KHR: number;
            public static GL_LINES_ADJACENCY_EXT: number;
            public static GL_LINE_STRIP_ADJACENCY_EXT: number;
            public static GL_MAX_COMBINED_GEOMETRY_UNIFORM_COMPONENTS_EXT: number;
            public static GL_MAX_COMBINED_TESS_CONTROL_UNIFORM_COMPONENTS_EXT: number;
            public static GL_MAX_COMBINED_TESS_EVALUATION_UNIFORM_COMPONENTS_EXT: number;
            public static GL_MAX_DEBUG_GROUP_STACK_DEPTH_KHR: number;
            public static GL_MAX_DEBUG_LOGGED_MESSAGES_KHR: number;
            public static GL_MAX_DEBUG_MESSAGE_LENGTH_KHR: number;
            public static GL_MAX_FRAGMENT_INTERPOLATION_OFFSET_OES: number;
            public static GL_MAX_FRAMEBUFFER_LAYERS_EXT: number;
            public static GL_MAX_GEOMETRY_ATOMIC_COUNTERS_EXT: number;
            public static GL_MAX_GEOMETRY_ATOMIC_COUNTER_BUFFERS_EXT: number;
            public static GL_MAX_GEOMETRY_IMAGE_UNIFORMS_EXT: number;
            public static GL_MAX_GEOMETRY_INPUT_COMPONENTS_EXT: number;
            public static GL_MAX_GEOMETRY_OUTPUT_COMPONENTS_EXT: number;
            public static GL_MAX_GEOMETRY_OUTPUT_VERTICES_EXT: number;
            public static GL_MAX_GEOMETRY_SHADER_INVOCATIONS_EXT: number;
            public static GL_MAX_GEOMETRY_SHADER_STORAGE_BLOCKS_EXT: number;
            public static GL_MAX_GEOMETRY_TEXTURE_IMAGE_UNITS_EXT: number;
            public static GL_MAX_GEOMETRY_TOTAL_OUTPUT_COMPONENTS_EXT: number;
            public static GL_MAX_GEOMETRY_UNIFORM_BLOCKS_EXT: number;
            public static GL_MAX_GEOMETRY_UNIFORM_COMPONENTS_EXT: number;
            public static GL_MAX_LABEL_LENGTH_KHR: number;
            public static GL_MAX_PATCH_VERTICES_EXT: number;
            public static GL_MAX_TESS_CONTROL_ATOMIC_COUNTERS_EXT: number;
            public static GL_MAX_TESS_CONTROL_ATOMIC_COUNTER_BUFFERS_EXT: number;
            public static GL_MAX_TESS_CONTROL_IMAGE_UNIFORMS_EXT: number;
            public static GL_MAX_TESS_CONTROL_INPUT_COMPONENTS_EXT: number;
            public static GL_MAX_TESS_CONTROL_OUTPUT_COMPONENTS_EXT: number;
            public static GL_MAX_TESS_CONTROL_SHADER_STORAGE_BLOCKS_EXT: number;
            public static GL_MAX_TESS_CONTROL_TEXTURE_IMAGE_UNITS_EXT: number;
            public static GL_MAX_TESS_CONTROL_TOTAL_OUTPUT_COMPONENTS_EXT: number;
            public static GL_MAX_TESS_CONTROL_UNIFORM_BLOCKS_EXT: number;
            public static GL_MAX_TESS_CONTROL_UNIFORM_COMPONENTS_EXT: number;
            public static GL_MAX_TESS_EVALUATION_ATOMIC_COUNTERS_EXT: number;
            public static GL_MAX_TESS_EVALUATION_ATOMIC_COUNTER_BUFFERS_EXT: number;
            public static GL_MAX_TESS_EVALUATION_IMAGE_UNIFORMS_EXT: number;
            public static GL_MAX_TESS_EVALUATION_INPUT_COMPONENTS_EXT: number;
            public static GL_MAX_TESS_EVALUATION_OUTPUT_COMPONENTS_EXT: number;
            public static GL_MAX_TESS_EVALUATION_SHADER_STORAGE_BLOCKS_EXT: number;
            public static GL_MAX_TESS_EVALUATION_TEXTURE_IMAGE_UNITS_EXT: number;
            public static GL_MAX_TESS_EVALUATION_UNIFORM_BLOCKS_EXT: number;
            public static GL_MAX_TESS_EVALUATION_UNIFORM_COMPONENTS_EXT: number;
            public static GL_MAX_TESS_GEN_LEVEL_EXT: number;
            public static GL_MAX_TESS_PATCH_COMPONENTS_EXT: number;
            public static GL_MAX_TEXTURE_BUFFER_SIZE_EXT: number;
            public static GL_MIN_FRAGMENT_INTERPOLATION_OFFSET_OES: number;
            public static GL_MIN_SAMPLE_SHADING_VALUE_OES: number;
            public static GL_MULTIPLY_KHR: number;
            public static GL_OVERLAY_KHR: number;
            public static GL_PATCHES_EXT: number;
            public static GL_PATCH_VERTICES_EXT: number;
            public static GL_PRIMITIVES_GENERATED_EXT: number;
            public static GL_PRIMITIVE_BOUNDING_BOX_EXT: number;
            public static GL_PRIMITIVE_RESTART_FOR_PATCHES_SUPPORTED: number;
            public static GL_PROGRAM_KHR: number;
            public static GL_QUADS_EXT: number;
            public static GL_QUERY_KHR: number;
            public static GL_REFERENCED_BY_GEOMETRY_SHADER_EXT: number;
            public static GL_REFERENCED_BY_TESS_CONTROL_SHADER_EXT: number;
            public static GL_REFERENCED_BY_TESS_EVALUATION_SHADER_EXT: number;
            public static GL_SAMPLER_2D_MULTISAMPLE_ARRAY_OES: number;
            public static GL_SAMPLER_BUFFER_EXT: number;
            public static GL_SAMPLER_CUBE_MAP_ARRAY_EXT: number;
            public static GL_SAMPLER_CUBE_MAP_ARRAY_SHADOW_EXT: number;
            public static GL_SAMPLER_KHR: number;
            public static GL_SAMPLE_SHADING_OES: number;
            public static GL_SCREEN_KHR: number;
            public static GL_SHADER_KHR: number;
            public static GL_SKIP_DECODE_EXT: number;
            public static GL_SOFTLIGHT_KHR: number;
            public static GL_STACK_OVERFLOW_KHR: number;
            public static GL_STACK_UNDERFLOW_KHR: number;
            public static GL_STENCIL_INDEX8_OES: number;
            public static GL_STENCIL_INDEX_OES: number;
            public static GL_TESS_CONTROL_OUTPUT_VERTICES_EXT: number;
            public static GL_TESS_CONTROL_SHADER_BIT_EXT: number;
            public static GL_TESS_CONTROL_SHADER_EXT: number;
            public static GL_TESS_EVALUATION_SHADER_BIT_EXT: number;
            public static GL_TESS_EVALUATION_SHADER_EXT: number;
            public static GL_TESS_GEN_MODE_EXT: number;
            public static GL_TESS_GEN_POINT_MODE_EXT: number;
            public static GL_TESS_GEN_SPACING_EXT: number;
            public static GL_TESS_GEN_VERTEX_ORDER_EXT: number;
            public static GL_TEXTURE_2D_MULTISAMPLE_ARRAY_OES: number;
            public static GL_TEXTURE_BINDING_2D_MULTISAMPLE_ARRAY_OES: number;
            public static GL_TEXTURE_BINDING_BUFFER_EXT: number;
            public static GL_TEXTURE_BINDING_CUBE_MAP_ARRAY_EXT: number;
            public static GL_TEXTURE_BORDER_COLOR_EXT: number;
            public static GL_TEXTURE_BUFFER_BINDING_EXT: number;
            public static GL_TEXTURE_BUFFER_DATA_STORE_BINDING_EXT: number;
            public static GL_TEXTURE_BUFFER_EXT: number;
            public static GL_TEXTURE_BUFFER_OFFSET_ALIGNMENT_EXT: number;
            public static GL_TEXTURE_BUFFER_OFFSET_EXT: number;
            public static GL_TEXTURE_BUFFER_SIZE_EXT: number;
            public static GL_TEXTURE_CUBE_MAP_ARRAY_EXT: number;
            public static GL_TEXTURE_SRGB_DECODE_EXT: number;
            public static GL_TRIANGLES_ADJACENCY_EXT: number;
            public static GL_TRIANGLE_STRIP_ADJACENCY_EXT: number;
            public static GL_UNDEFINED_VERTEX_EXT: number;
            public static GL_UNSIGNED_INT_IMAGE_BUFFER_EXT: number;
            public static GL_UNSIGNED_INT_IMAGE_CUBE_MAP_ARRAY_EXT: number;
            public static GL_UNSIGNED_INT_SAMPLER_2D_MULTISAMPLE_ARRAY_OES: number;
            public static GL_UNSIGNED_INT_SAMPLER_BUFFER_EXT: number;
            public static GL_UNSIGNED_INT_SAMPLER_CUBE_MAP_ARRAY_EXT: number;
            public static GL_VERTEX_ARRAY_KHR: number;

            public static glGetDebugMessageLogKHR(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>, param5: number, param6: native.Array<number>, param7: number, param8: native.Array<number>, param9: number, param10: native.Array<number>, param11: number, param12: native.Array<number>, param13: number): number;

            public static glPatchParameteriEXT(param0: number, param1: number): void;

            public static glTexParameterIivEXT(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glTexParameterIuivEXT(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glIsEnablediEXT(param0: number, param1: number): boolean;

            public static glGetTexParameterIivEXT(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glGetDebugMessageLogKHR(param0: number, param1: javanioIntBuffer, param2: javanioIntBuffer, param3: javanioIntBuffer, param4: javanioIntBuffer, param5: javanioIntBuffer, param6: javanioByteBuffer): number;

            public static glTexParameterIivEXT(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glSamplerParameterIivEXT(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glBlendBarrierKHR(): void;

            public static glDebugMessageControlKHR(param0: number, param1: number, param2: number, param3: number, param4: javanioIntBuffer, param5: boolean): void;

            public static glBlendEquationSeparateiEXT(param0: number, param1: number, param2: number): void;

            public static glMinSampleShadingOES(param0: number): void;

            public static glEnableiEXT(param0: number, param1: number): void;

            public static glFramebufferTextureEXT(param0: number, param1: number, param2: number, param3: number): void;

            public static glTexParameterIuivEXT(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glSamplerParameterIuivEXT(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glGetDebugMessageLogKHR(param0: number, param1: javanioIntBuffer, param2: javanioIntBuffer, param3: javanioIntBuffer, param4: javanioIntBuffer): native.Array<string>;

            public static glGetDebugMessageCallbackKHR(): android.opengl.GLES31Ext.DebugProcKHR;

            public static glCopyImageSubDataEXT(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number, param14: number): void;

            public static glPrimitiveBoundingBoxEXT(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;

            public static glObjectPtrLabelKHR(param0: number, param1: string): void;

            public static glDebugMessageInsertKHR(param0: number, param1: number, param2: number, param3: number, param4: string): void;

            public static glBlendFunciEXT(param0: number, param1: number, param2: number): void;

            public static glGetObjectLabelKHR(param0: number, param1: number): string;

            public static glObjectLabelKHR(param0: number, param1: number, param2: number, param3: string): void;

            public static glSamplerParameterIivEXT(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glDisableiEXT(param0: number, param1: number): void;

            public static glGetTexParameterIuivEXT(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glGetSamplerParameterIuivEXT(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glTexStorage3DMultisampleOES(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: boolean): void;

            public static glGetSamplerParameterIivEXT(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glTexBufferEXT(param0: number, param1: number, param2: number): void;

            public static glBlendEquationiEXT(param0: number, param1: number): void;

            public static glBlendFuncSeparateiEXT(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public static glTexBufferRangeEXT(param0: number, param1: number, param2: number, param3: number, param4: number): void;

            public static glGetSamplerParameterIivEXT(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glDebugMessageCallbackKHR(param0: android.opengl.GLES31Ext.DebugProcKHR): void;

            public static glPopDebugGroupKHR(): void;

            public static glColorMaskiEXT(param0: number, param1: boolean, param2: boolean, param3: boolean, param4: boolean): void;

            public static glDebugMessageControlKHR(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>, param5: number, param6: boolean): void;

            public static glSamplerParameterIuivEXT(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glGetObjectPtrLabelKHR(param0: number): string;

            public static glGetTexParameterIuivEXT(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

            public static glGetSamplerParameterIuivEXT(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glGetDebugMessageLogKHR(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>, param6: number, param7: native.Array<number>, param8: number): native.Array<string>;

            public static glGetTexParameterIivEXT(param0: number, param1: number, param2: javanioIntBuffer): void;

            public static glPushDebugGroupKHR(param0: number, param1: number, param2: number, param3: string): void;
        }
        export module GLES31Ext {
            export class DebugProcKHR extends javalangObject {
                /**
                 * Constructs a new instance of the android.opengl.GLES31Ext$DebugProcKHR interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onMessage(param0: number, param1: number, param2: number, param3: number, param4: string): void;
                });

                public onMessage(param0: number, param1: number, param2: number, param3: number, param4: string): void;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module opengl {
        export class GLException extends javalangRuntimeException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor(param0: number);
            public constructor(param0: number, param1: string);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

import javaxmicroeditionkhronoseglEGL10 = javax.microedition.khronos.egl.EGL10;
import javaxmicroeditionkhronoseglEGLDisplay = javax.microedition.khronos.egl.EGLDisplay;
import javaxmicroeditionkhronoseglEGLConfig = javax.microedition.khronos.egl.EGLConfig;
import javaxmicroeditionkhronoseglEGLContext = javax.microedition.khronos.egl.EGLContext;
import javaxmicroeditionkhronoseglEGLSurface = javax.microedition.khronos.egl.EGLSurface;
import javaxmicroeditionkhronosopenglesGL10 = javax.microedition.khronos.opengles.GL10;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.SurfaceHolder.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./javax.microedition.khronos.egl.EGL10.d.ts" />
/// <reference path="./javax.microedition.khronos.egl.EGLConfig.d.ts" />
/// <reference path="./javax.microedition.khronos.egl.EGLContext.d.ts" />
/// <reference path="./javax.microedition.khronos.egl.EGLDisplay.d.ts" />
/// <reference path="./javax.microedition.khronos.egl.EGLSurface.d.ts" />
/// <reference path="./javax.microedition.khronos.opengles.GL.d.ts" />
/// <reference path="./javax.microedition.khronos.opengles.GL10.d.ts" />
declare module android {
    export module opengl {
        export class GLSurfaceView extends android.view.SurfaceView implements android.view.SurfaceHolder.Callback {
            public static DEBUG_CHECK_GL_ERROR: number;
            public static DEBUG_LOG_GL_CALLS: number;
            public static RENDERMODE_CONTINUOUSLY: number;
            public static RENDERMODE_WHEN_DIRTY: number;

            public getDebugFlags(): number;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public setRenderer(param0: android.opengl.GLSurfaceView.Renderer): void;

            public getPreserveEGLContextOnPause(): boolean;

            public requestRender(): void;

            public surfaceDestroyed(param0: android.view.SurfaceHolder): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public getRenderMode(): number;

            public queueEvent(param0: javalangRunnable): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public setEGLConfigChooser(param0: android.opengl.GLSurfaceView.EGLConfigChooser): void;
            public setEGLConfigChooser(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public onPause(): void;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public finalize(): void;

            public onDetachedFromWindow(): void;

            public sendAccessibilityEvent(param0: number): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public surfaceCreated(param0: android.view.SurfaceHolder): void;

            public onResume(): void;

            public setEGLWindowSurfaceFactory(param0: android.opengl.GLSurfaceView.EGLWindowSurfaceFactory): void;

            public setPreserveEGLContextOnPause(param0: boolean): void;

            public setEGLContextFactory(param0: android.opengl.GLSurfaceView.EGLContextFactory): void;

            public setRenderMode(param0: number): void;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public setDebugFlags(param0: number): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public surfaceChanged(param0: android.view.SurfaceHolder, param1: number, param2: number, param3: number): void;

            public setGLWrapper(param0: android.opengl.GLSurfaceView.GLWrapper): void;

            public constructor(param0: android.content.Context);

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public setEGLConfigChooser(param0: boolean): void;

            public setEGLContextClientVersion(param0: number): void;

            public onAttachedToWindow(): void;
        }
        export module GLSurfaceView {
            export class EGLConfigChooser extends javalangObject {
                /**
                 * Constructs a new instance of the android.opengl.GLSurfaceView$EGLConfigChooser interface with the provided implementation.
                 */
                public constructor(implementation: {
                    chooseConfig(param0: javaxmicroeditionkhronoseglEGL10, param1: javaxmicroeditionkhronoseglEGLDisplay): javaxmicroeditionkhronoseglEGLConfig;
                });

                public chooseConfig(param0: javaxmicroeditionkhronoseglEGL10, param1: javaxmicroeditionkhronoseglEGLDisplay): javaxmicroeditionkhronoseglEGLConfig;
            }
            export class EGLContextFactory extends javalangObject {
                /**
                 * Constructs a new instance of the android.opengl.GLSurfaceView$EGLContextFactory interface with the provided implementation.
                 */
                public constructor(implementation: {
                    createContext(param0: javaxmicroeditionkhronoseglEGL10, param1: javaxmicroeditionkhronoseglEGLDisplay, param2: javaxmicroeditionkhronoseglEGLConfig): javaxmicroeditionkhronoseglEGLContext;
                    destroyContext(param0: javaxmicroeditionkhronoseglEGL10, param1: javaxmicroeditionkhronoseglEGLDisplay, param2: javaxmicroeditionkhronoseglEGLContext): void;
                });

                public createContext(param0: javaxmicroeditionkhronoseglEGL10, param1: javaxmicroeditionkhronoseglEGLDisplay, param2: javaxmicroeditionkhronoseglEGLConfig): javaxmicroeditionkhronoseglEGLContext;

                public destroyContext(param0: javaxmicroeditionkhronoseglEGL10, param1: javaxmicroeditionkhronoseglEGLDisplay, param2: javaxmicroeditionkhronoseglEGLContext): void;
            }
            export class EGLWindowSurfaceFactory extends javalangObject {
                /**
                 * Constructs a new instance of the android.opengl.GLSurfaceView$EGLWindowSurfaceFactory interface with the provided implementation.
                 */
                public constructor(implementation: {
                    createWindowSurface(param0: javaxmicroeditionkhronoseglEGL10, param1: javaxmicroeditionkhronoseglEGLDisplay, param2: javaxmicroeditionkhronoseglEGLConfig, param3: javalangObject): javaxmicroeditionkhronoseglEGLSurface;
                    destroySurface(param0: javaxmicroeditionkhronoseglEGL10, param1: javaxmicroeditionkhronoseglEGLDisplay, param2: javaxmicroeditionkhronoseglEGLSurface): void;
                });

                public createWindowSurface(param0: javaxmicroeditionkhronoseglEGL10, param1: javaxmicroeditionkhronoseglEGLDisplay, param2: javaxmicroeditionkhronoseglEGLConfig, param3: javalangObject): javaxmicroeditionkhronoseglEGLSurface;

                public destroySurface(param0: javaxmicroeditionkhronoseglEGL10, param1: javaxmicroeditionkhronoseglEGLDisplay, param2: javaxmicroeditionkhronoseglEGLSurface): void;
            }
            export class GLWrapper extends javalangObject {
                /**
                 * Constructs a new instance of the android.opengl.GLSurfaceView$GLWrapper interface with the provided implementation.
                 */
                public constructor(implementation: {
                    wrap(param0: javaxmicroeditionkhronosopenglesGL): javaxmicroeditionkhronosopenglesGL;
                });

                public wrap(param0: javaxmicroeditionkhronosopenglesGL): javaxmicroeditionkhronosopenglesGL;
            }
            export class Renderer extends javalangObject {
                /**
                 * Constructs a new instance of the android.opengl.GLSurfaceView$Renderer interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onSurfaceCreated(param0: javaxmicroeditionkhronosopenglesGL10, param1: javaxmicroeditionkhronoseglEGLConfig): void;
                    onSurfaceChanged(param0: javaxmicroeditionkhronosopenglesGL10, param1: number, param2: number): void;
                    onDrawFrame(param0: javaxmicroeditionkhronosopenglesGL10): void;
                });

                public onSurfaceChanged(param0: javaxmicroeditionkhronosopenglesGL10, param1: number, param2: number): void;

                public onDrawFrame(param0: javaxmicroeditionkhronosopenglesGL10): void;

                public onSurfaceCreated(param0: javaxmicroeditionkhronosopenglesGL10, param1: javaxmicroeditionkhronoseglEGLConfig): void;
            }
        }
    }
}

/// <reference path="./javax.microedition.khronos.opengles.GL10.d.ts" />
declare module android {
    export module opengl {
        export class GLU extends javalangObject {
            public static gluPerspective(param0: javaxmicroeditionkhronosopenglesGL10, param1: number, param2: number, param3: number, param4: number): void;

            public static gluOrtho2D(param0: javaxmicroeditionkhronosopenglesGL10, param1: number, param2: number, param3: number, param4: number): void;

            public static gluErrorString(param0: number): string;

            public constructor();

            public static gluLookAt(param0: javaxmicroeditionkhronosopenglesGL10, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number): void;

            public static gluProject(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>, param6: number, param7: native.Array<number>, param8: number, param9: native.Array<number>, param10: number): number;

            public static gluUnProject(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>, param6: number, param7: native.Array<number>, param8: number, param9: native.Array<number>, param10: number): number;
        }
    }
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
declare module android {
    export module opengl {
        export class GLUtils extends javalangObject {
            public static getEGLErrorString(param0: number): string;

            public static getInternalFormat(param0: android.graphics.Bitmap): number;

            public static texSubImage2D(param0: number, param1: number, param2: number, param3: number, param4: android.graphics.Bitmap): void;

            public static texImage2D(param0: number, param1: number, param2: android.graphics.Bitmap, param3: number): void;

            public static texSubImage2D(param0: number, param1: number, param2: number, param3: number, param4: android.graphics.Bitmap, param5: number, param6: number): void;

            public static texImage2D(param0: number, param1: number, param2: number, param3: android.graphics.Bitmap, param4: number): void;
            public static texImage2D(param0: number, param1: number, param2: number, param3: android.graphics.Bitmap, param4: number, param5: number): void;

            public static getType(param0: android.graphics.Bitmap): number;
        }
    }
}

declare module android {
    export module opengl {
        export class Matrix extends javalangObject {
            public static scaleM(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number): void;

            public static multiplyMM(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>, param5: number): void;

            public static invertM(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number): boolean;

            public static setIdentityM(param0: native.Array<number>, param1: number): void;

            public static perspectiveM(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number): void;

            public static rotateM(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number): void;

            public static length(param0: number, param1: number, param2: number): number;

            public constructor();

            public static multiplyMV(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>, param5: number): void;

            public static rotateM(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: number, param5: number, param6: number, param7: number): void;

            public static scaleM(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: number, param5: number, param6: number): void;

            public static setRotateM(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number): void;

            public static frustumM(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;

            public static setLookAtM(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number): void;

            public static orthoM(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;

            public static translateM(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: number, param5: number, param6: number): void;

            public static transposeM(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number): void;

            public static translateM(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number): void;

            public static setRotateEulerM(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number): void;
        }
    }
}

declare module android {
    export module opengl {
        export class Visibility extends javalangObject {
            public static visibilityTest(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<string>, param5: number, param6: number): number;

            public constructor();

            public static frustumCullSpheres(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: number, param5: native.Array<number>, param6: number, param7: number): number;

            public static computeBoundingSphere(param0: native.Array<number>, param1: number, param2: number, param3: native.Array<number>, param4: number): void;
        }
    }
}
