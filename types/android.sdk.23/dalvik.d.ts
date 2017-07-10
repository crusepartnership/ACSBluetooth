/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module dalvik {
    export module annotation {
        export class TestTarget extends javalangObject implements javalangannotationAnnotation {
            /**
             * Constructs a new instance of the dalvik.annotation.TestTarget interface with the provided implementation.
             */
            public constructor(implementation: {
                methodName(): string;
                conceptName(): string;
                methodArgs(): native.Array<javalangClass>;
                annotationType(): javalangClass;
                equals(param0: javalangObject): boolean;
                hashCode(): number;
                toString(): string;
            });

            public toString(): string;

            public methodName(): string;

            public equals(param0: javalangObject): boolean;

            public annotationType(): javalangClass;

            public conceptName(): string;

            public methodArgs(): native.Array<javalangClass>;

            public hashCode(): number;
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module dalvik {
    export module annotation {
        export class TestTargetClass extends javalangObject implements javalangannotationAnnotation {
            /**
             * Constructs a new instance of the dalvik.annotation.TestTargetClass interface with the provided implementation.
             */
            public constructor(implementation: {
                value(): javalangClass;
                annotationType(): javalangClass;
                equals(param0: javalangObject): boolean;
                hashCode(): number;
                toString(): string;
            });

            public value(): javalangClass;

            public toString(): string;

            public equals(param0: javalangObject): boolean;

            public annotationType(): javalangClass;

            public hashCode(): number;
        }
    }
}



declare module dalvik {
    export module bytecode {
        export class OpcodeInfo extends javalangObject {
            public static MAXIMUM_PACKED_VALUE: number;
            public static MAXIMUM_VALUE: number;
        }
    }
}

declare module dalvik {
    export module bytecode {
        export class Opcodes extends javalangObject {
            /**
             * Constructs a new instance of the dalvik.bytecode.Opcodes interface with the provided implementation.
             */
            public constructor(implementation: {});

            public static OP_IF_LTZ: number;
            public static OP_IPUT_WIDE_JUMBO: number;
            public static OP_DOUBLE_TO_LONG: number;
            public static OP_CONST_WIDE: number;
            public static OP_SHL_LONG_2ADDR: number;
            public static OP_SUB_DOUBLE_2ADDR: number;
            public static OP_SUB_INT_2ADDR: number;
            public static OP_MOVE_WIDE_16: number;
            public static OP_APUT: number;
            public static OP_SGET_WIDE: number;
            public static OP_IGET_CHAR_JUMBO: number;
            public static OP_INVOKE_STATIC: number;
            public static OP_MUL_FLOAT: number;
            public static OP_IPUT_QUICK: number;
            public static OP_LONG_TO_DOUBLE: number;
            public static OP_INT_TO_LONG: number;
            public static OP_INVOKE_STATIC_JUMBO: number;
            public static OP_OR_INT_LIT8: number;
            public static OP_XOR_INT: number;
            public static OP_GOTO_32: number;
            public static OP_INVOKE_INTERFACE_RANGE: number;
            public static OP_REM_INT_LIT8: number;
            public static OP_REM_DOUBLE_2ADDR: number;
            public static OP_ADD_INT_2ADDR: number;
            public static OP_INVOKE_VIRTUAL_RANGE: number;
            public static OP_NEW_ARRAY_JUMBO: number;
            public static OP_NEW_INSTANCE: number;
            public static OP_NOT_LONG: number;
            public static OP_AGET_SHORT: number;
            public static OP_REM_LONG: number;
            public static OP_APUT_CHAR: number;
            public static OP_SPUT_BYTE_JUMBO: number;
            public static OP_IF_LEZ: number;
            public static OP_MOVE_RESULT_WIDE: number;
            public static OP_SGET_CHAR_JUMBO: number;
            public static OP_INVOKE_SUPER_RANGE: number;
            public static OP_PACKED_SWITCH: number;
            public static OP_IPUT_BYTE_JUMBO: number;
            public static OP_REM_FLOAT_2ADDR: number;
            public static OP_SGET_BYTE: number;
            public static OP_ARRAY_LENGTH: number;
            public static OP_OR_LONG: number;
            public static OP_SHR_INT: number;
            public static OP_AND_LONG: number;
            public static OP_USHR_LONG: number;
            public static OP_SGET_BOOLEAN_JUMBO: number;
            public static OP_AGET: number;
            public static OP_SPUT_CHAR_JUMBO: number;
            public static OP_AGET_OBJECT: number;
            public static OP_SGET_SHORT_JUMBO: number;
            public static OP_GOTO_16: number;
            public static OP_INVOKE_VIRTUAL_QUICK_RANGE: number;
            public static OP_SGET_WIDE_JUMBO: number;
            public static OP_MOVE_RESULT: number;
            public static OP_USHR_INT_LIT8: number;
            public static OP_ADD_INT_LIT16: number;
            public static OP_IPUT_OBJECT: number;
            public static OP_INVOKE_INTERFACE: number;
            public static OP_MOVE_OBJECT_16: number;
            public static OP_SPUT_WIDE_VOLATILE: number;
            public static OP_INSTANCE_OF: number;
            public static OP_REM_INT_2ADDR: number;
            public static OP_MUL_FLOAT_2ADDR: number;
            public static OP_NOP: number;
            public static OP_XOR_LONG: number;
            public static OP_IPUT_OBJECT_JUMBO: number;
            public static OP_XOR_INT_2ADDR: number;
            public static OP_AGET_BYTE: number;
            public static OP_SUB_INT: number;
            public static OP_IGET_OBJECT_QUICK: number;
            public static OP_ADD_LONG_2ADDR: number;
            public static OP_IGET_QUICK: number;
            public static OP_SGET_BYTE_JUMBO: number;
            public static OP_SPUT_OBJECT: number;
            public static OP_SHR_INT_2ADDR: number;
            public static OP_APUT_OBJECT: number;
            public static OP_DIV_INT_LIT16: number;
            public static OP_NEG_FLOAT: number;
            public static OP_INVOKE_SUPER_JUMBO: number;
            public static OP_REM_FLOAT: number;
            public static OP_ADD_INT_LIT8: number;
            public static OP_ADD_FLOAT: number;
            public static OP_SPUT_WIDE: number;
            public static OP_CONST_CLASS_JUMBO: number;
            public static OP_REM_LONG_2ADDR: number;
            public static OP_INVOKE_DIRECT_RANGE: number;
            public static OP_MOVE_EXCEPTION: number;
            public static OP_XOR_INT_LIT16: number;
            public static OP_MUL_INT_2ADDR: number;
            public static OP_LONG_TO_FLOAT: number;
            public static OP_IGET_WIDE: number;
            public static OP_IGET_WIDE_QUICK: number;
            public static OP_DIV_FLOAT_2ADDR: number;
            public static OP_SPUT_BOOLEAN: number;
            public static OP_IGET_WIDE_JUMBO: number;
            public static OP_MOVE_FROM16: number;
            public static OP_SUB_LONG_2ADDR: number;
            public static OP_ADD_FLOAT_2ADDR: number;
            public static OP_IF_NEZ: number;
            public static OP_CONST_HIGH16: number;
            public static OP_AND_INT: number;
            public static OP_FILLED_NEW_ARRAY_JUMBO: number;
            public static OP_IPUT_CHAR_JUMBO: number;
            public static OP_THROW_VERIFICATION_ERROR: number;
            public static OP_SHR_LONG_2ADDR: number;
            public static OP_DOUBLE_TO_INT: number;
            public static OP_NEW_ARRAY: number;
            public static OP_SPUT_BYTE: number;
            public static OP_MOVE_RESULT_OBJECT: number;
            public static OP_IGET_JUMBO: number;
            public static OP_IF_NE: number;
            public static OP_IF_GTZ: number;
            public static OP_SUB_DOUBLE: number;
            public static OP_IGET_BOOLEAN_JUMBO: number;
            public static OP_CMPG_DOUBLE: number;
            public static OP_IGET_BOOLEAN: number;
            public static OP_SUB_LONG: number;
            public static OP_CONST_16: number;
            public static OP_SHR_INT_LIT8: number;
            public static OP_IGET_BYTE: number;
            public static OP_INT_TO_SHORT: number;
            public static OP_INVOKE_SUPER_QUICK: number;
            public static OP_IPUT_CHAR: number;
            public static OP_NEG_LONG: number;
            public static OP_DIV_LONG: number;
            public static OP_LONG_TO_INT: number;
            public static OP_SPUT_SHORT_JUMBO: number;
            public static OP_MUL_INT_LIT8: number;
            public static OP_IF_EQZ: number;
            public static OP_REM_INT: number;
            public static OP_SPUT_JUMBO: number;
            public static OP_IGET_WIDE_VOLATILE: number;
            public static OP_MUL_LONG_2ADDR: number;
            public static OP_AGET_WIDE: number;
            public static OP_IF_LT: number;
            public static OP_IF_GEZ: number;
            public static OP_CMPL_FLOAT: number;
            public static OP_NEG_INT: number;
            public static OP_FLOAT_TO_LONG: number;
            public static OP_IPUT: number;
            public static OP_SGET_BOOLEAN: number;
            public static OP_IF_LE: number;
            public static OP_IPUT_BYTE: number;
            public static OP_CONST_WIDE_32: number;
            public static OP_USHR_LONG_2ADDR: number;
            public static OP_IPUT_SHORT: number;
            public static OP_MOVE_OBJECT_FROM16: number;
            public static OP_FLOAT_TO_INT: number;
            public static OP_FILLED_NEW_ARRAY: number;
            public static OP_IPUT_BOOLEAN_JUMBO: number;
            public static OP_AND_INT_LIT8: number;
            public static OP_INT_TO_DOUBLE: number;
            public static OP_SGET: number;
            public static OP_AND_LONG_2ADDR: number;
            public static OP_INT_TO_CHAR: number;
            public static OP_BREAKPOINT: number;
            public static OP_IGET_CHAR: number;
            public static OP_OR_INT_2ADDR: number;
            public static OP_ADD_DOUBLE_2ADDR: number;
            public static OP_CMP_LONG: number;
            public static OP_MONITOR_EXIT: number;
            public static OP_AND_INT_LIT16: number;
            public static OP_INVOKE_DIRECT_JUMBO: number;
            public static OP_MOVE_OBJECT: number;
            public static OP_IGET_SHORT_JUMBO: number;
            public static OP_SHL_LONG: number;
            public static OP_XOR_LONG_2ADDR: number;
            public static OP_DIV_FLOAT: number;
            public static OP_MOVE_16: number;
            public static OP_SPUT_OBJECT_JUMBO: number;
            public static OP_XOR_INT_LIT8: number;
            public static OP_CHECK_CAST_JUMBO: number;
            public static OP_DIV_DOUBLE: number;
            public static OP_IPUT_WIDE_QUICK: number;
            public static OP_SHL_INT_2ADDR: number;
            public static OP_SPARSE_SWITCH: number;
            public static OP_RSUB_INT_LIT8: number;
            public static OP_ADD_DOUBLE: number;
            public static OP_CONST: number;
            public static OP_IGET_OBJECT_JUMBO: number;
            public static OP_INSTANCE_OF_JUMBO: number;
            public static OP_INT_TO_FLOAT: number;
            public static OP_CONST_WIDE_16: number;
            public static OP_IGET: number;
            public static OP_AGET_BOOLEAN: number;
            public static OP_IPUT_JUMBO: number;
            public static OP_NEW_INSTANCE_JUMBO: number;
            public static OP_EXECUTE_INLINE: number;
            public static OP_INVOKE_VIRTUAL_QUICK: number;
            public static OP_MUL_INT: number;
            public static OP_SPUT_SHORT: number;
            public static OP_CONST_STRING_JUMBO: number;
            public static OP_IPUT_WIDE: number;
            public static OP_SGET_WIDE_VOLATILE: number;
            public static OP_CONST_STRING: number;
            public static OP_CONST_WIDE_HIGH16: number;
            public static OP_REM_DOUBLE: number;
            public static OP_IGET_OBJECT: number;
            public static OP_SPUT_BOOLEAN_JUMBO: number;
            public static OP_SPUT_CHAR: number;
            public static OP_FILLED_NEW_ARRAY_RANGE: number;
            public static OP_AGET_CHAR: number;
            public static OP_SGET_JUMBO: number;
            public static OP_APUT_BOOLEAN: number;
            public static OP_RETURN_VOID: number;
            public static OP_USHR_INT: number;
            public static OP_MUL_INT_LIT16: number;
            public static OP_IPUT_OBJECT_QUICK: number;
            public static OP_INVOKE_STATIC_RANGE: number;
            public static OP_SPUT_WIDE_JUMBO: number;
            public static OP_IGET_SHORT: number;
            public static OP_IF_GT: number;
            public static OP_CHECK_CAST: number;
            public static OP_CONST_4: number;
            public static OP_IGET_BYTE_JUMBO: number;
            public static OP_SGET_CHAR: number;
            public static OP_DIV_LONG_2ADDR: number;
            public static OP_INVOKE_INTERFACE_JUMBO: number;
            public static OP_INVOKE_VIRTUAL_JUMBO: number;
            public static OP_USHR_INT_2ADDR: number;
            public static OP_APUT_BYTE: number;
            public static OP_IF_GE: number;
            public static OP_INVOKE_SUPER: number;
            public static OP_CONST_CLASS: number;
            public static OP_REM_INT_LIT16: number;
            public static OP_OR_LONG_2ADDR: number;
            public static OP_GOTO: number;
            public static OP_MONITOR_ENTER: number;
            public static OP_INT_TO_BYTE: number;
            public static OP_RETURN_OBJECT: number;
            public static OP_OR_INT: number;
            public static OP_INVOKE_SUPER_QUICK_RANGE: number;
            public static OP_APUT_SHORT: number;
            public static OP_APUT_WIDE: number;
            public static OP_MUL_LONG: number;
            public static OP_RETURN_WIDE: number;
            public static OP_MOVE_WIDE_FROM16: number;
            public static OP_EXECUTE_INLINE_RANGE: number;
            public static OP_SUB_FLOAT: number;
            public static OP_IPUT_WIDE_VOLATILE: number;
            public static OP_INVOKE_DIRECT: number;
            public static OP_NEG_DOUBLE: number;
            public static OP_CMPG_FLOAT: number;
            public static OP_IF_EQ: number;
            public static OP_MOVE: number;
            public static OP_RETURN: number;
            public static OP_SHR_LONG: number;
            public static OP_SHL_INT_LIT8: number;
            public static OP_SGET_SHORT: number;
            public static OP_CMPL_DOUBLE: number;
            public static OP_MUL_DOUBLE_2ADDR: number;
            public static OP_DIV_INT: number;
            public static OP_MUL_DOUBLE: number;
            public static OP_DIV_INT_LIT8: number;
            public static OP_FILL_ARRAY_DATA: number;
            public static OP_DIV_INT_2ADDR: number;
            public static OP_IPUT_SHORT_JUMBO: number;
            public static OP_SPUT: number;
            public static OP_DOUBLE_TO_FLOAT: number;
            public static OP_AND_INT_2ADDR: number;
            public static OP_THROW: number;
            public static OP_SGET_OBJECT_JUMBO: number;
            public static OP_FLOAT_TO_DOUBLE: number;
            public static OP_NOT_INT: number;
            public static OP_IPUT_BOOLEAN: number;
            public static OP_SUB_FLOAT_2ADDR: number;
            public static OP_ADD_LONG: number;
            public static OP_OR_INT_LIT16: number;
            public static OP_INVOKE_DIRECT_EMPTY: number;
            public static OP_SGET_OBJECT: number;
            public static OP_INVOKE_VIRTUAL: number;
            public static OP_SHL_INT: number;
            public static OP_DIV_DOUBLE_2ADDR: number;
            public static OP_MOVE_WIDE: number;
            public static OP_RSUB_INT: number;
            public static OP_ADD_INT: number;
        }
    }
}

import javautilEnumeration = java.util.Enumeration;
import javalangPackage = java.lang.Package;
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Package.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />
declare module dalvik {
    export module system {
        export class BaseDexClassLoader extends javalangClassLoader {
            public getPackage(param0: string): javalangPackage;

            public toString(): string;

            public findClass(param0: string): javalangClass;

            public findResource(param0: string): javanetURL;

            public findLibrary(param0: string): string;

            public findResources(param0: string): javautilEnumeration;

            public constructor(param0: string, param1: javaioFile, param2: string, param3: javalangClassLoader);
            public constructor();
            public constructor(param0: javalangClassLoader);
        }
    }
}

/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module dalvik {
    export module system {
        export class DexClassLoader extends dalvik.system.BaseDexClassLoader {
            public constructor(param0: string, param1: string, param2: string, param3: javalangClassLoader);
            public constructor(param0: string, param1: javaioFile, param2: string, param3: javalangClassLoader);
            public constructor();
            public constructor(param0: javalangClassLoader);
        }
    }
}

/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />
declare module dalvik {
    export module system {
        export class DexFile extends javalangObject {
            public entries(): javautilEnumeration;

            public toString(): string;

            public getName(): string;

            public loadClass(param0: string, param1: javalangClassLoader): javalangClass;

            public static isDexOptNeeded(param0: string): boolean;

            public static loadDex(param0: string, param1: string, param2: number): dalvik.system.DexFile;

            public constructor(param0: javaioFile);

            public close(): void;

            public constructor(param0: string);

            public finalize(): void;
        }
    }
}

/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module dalvik {
    export module system {
        export class PathClassLoader extends dalvik.system.BaseDexClassLoader {
            public constructor(param0: string, param1: string, param2: javalangClassLoader);
            public constructor(param0: string, param1: javalangClassLoader);
            public constructor(param0: string, param1: javaioFile, param2: string, param3: javalangClassLoader);
            public constructor();
            public constructor(param0: javalangClassLoader);
        }
    }
}

