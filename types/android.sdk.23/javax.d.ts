
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module javax {
    export module crypto {
        export class AEADBadTagException extends javax.crypto.BadPaddingException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

import javasecurityGeneralSecurityException = java.security.GeneralSecurityException;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module javax {
    export module crypto {
        export class BadPaddingException extends javasecurityGeneralSecurityException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

import javasecurityProvider = java.security.Provider;
import javasecurityAlgorithmParameters = java.security.AlgorithmParameters;
import javasecurityKey = java.security.Key;
import javasecuritySecureRandom = java.security.SecureRandom;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.security.AlgorithmParameters.d.ts" />
/// <reference path="./java.security.Key.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.security.SecureRandom.d.ts" />
/// <reference path="./java.security.cert.Certificate.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />
/// <reference path="./javax.crypto.CipherSpi.d.ts" />
/// <reference path="./javax.crypto.ExemptionMechanism.d.ts" />
declare module javax {
    export module crypto {
        export class Cipher extends javalangObject {
            public static DECRYPT_MODE: number;
            public static ENCRYPT_MODE: number;
            public static PRIVATE_KEY: number;
            public static PUBLIC_KEY: number;
            public static SECRET_KEY: number;
            public static UNWRAP_MODE: number;
            public static WRAP_MODE: number;

            public update(param0: javanioByteBuffer, param1: javanioByteBuffer): number;

            public getProvider(): javasecurityProvider;

            public getOutputSize(param0: number): number;

            public updateAAD(param0: native.Array<number>): void;

            public init(param0: number, param1: javasecurityKey): void;
            public init(param0: number, param1: javasecurityKey, param2: javasecurityspecAlgorithmParameterSpec): void;

            public update(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;

            public init(param0: number, param1: javasecurityKey, param2: javasecuritySecureRandom): void;

            public static getMaxAllowedKeyLength(param0: string): number;

            public doFinal(): native.Array<number>;
            public doFinal(param0: native.Array<number>, param1: number, param2: number, param3: native.Array<number>): number;

            public getBlockSize(): number;

            public static getInstance(param0: string, param1: javasecurityProvider): javax.crypto.Cipher;

            public updateAAD(param0: javanioByteBuffer): void;

            public update(param0: native.Array<number>): native.Array<number>;

            public updateAAD(param0: native.Array<number>, param1: number, param2: number): void;

            public getIV(): native.Array<number>;

            public doFinal(param0: native.Array<number>, param1: number, param2: number, param3: native.Array<number>, param4: number): number;

            public static getInstance(param0: string, param1: string): javax.crypto.Cipher;

            public init(param0: number, param1: javasecuritycertCertificate): void;

            public static getInstance(param0: string): javax.crypto.Cipher;

            public init(param0: number, param1: javasecurityKey, param2: javasecurityAlgorithmParameters, param3: javasecuritySecureRandom): void;

            public doFinal(param0: native.Array<number>): native.Array<number>;

            public init(param0: number, param1: javasecuritycertCertificate, param2: javasecuritySecureRandom): void;

            public getParameters(): javasecurityAlgorithmParameters;

            public update(param0: native.Array<number>, param1: number, param2: number, param3: native.Array<number>, param4: number): number;

            public doFinal(param0: native.Array<number>, param1: number): number;

            public static getMaxAllowedParameterSpec(param0: string): javasecurityspecAlgorithmParameterSpec;

            public getExemptionMechanism(): javax.crypto.ExemptionMechanism;

            public wrap(param0: javasecurityKey): native.Array<number>;

            public getAlgorithm(): string;

            public init(param0: number, param1: javasecurityKey, param2: javasecurityspecAlgorithmParameterSpec, param3: javasecuritySecureRandom): void;
            public init(param0: number, param1: javasecurityKey, param2: javasecurityAlgorithmParameters): void;

            public update(param0: native.Array<number>, param1: number, param2: number, param3: native.Array<number>): number;

            public doFinal(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;

            public unwrap(param0: native.Array<number>, param1: string, param2: number): javasecurityKey;

            public constructor(param0: javax.crypto.CipherSpi, param1: javasecurityProvider, param2: string);

            public doFinal(param0: javanioByteBuffer, param1: javanioByteBuffer): number;
        }
    }
}

/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./javax.crypto.Cipher.d.ts" />
declare module javax {
    export module crypto {
        export class CipherInputStream extends javaioFilterInputStream {
            public markSupported(): boolean;

            public read(param0: native.Array<number>): number;

            public skip(param0: number): number;

            public read(param0: native.Array<number>, param1: number, param2: number): number;

            public constructor(param0: javaioInputStream);
            public constructor();
            public constructor(param0: javaioInputStream, param1: javax.crypto.Cipher);

            public close(): void;

            public read(): number;

            public available(): number;
        }
    }
}

/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./javax.crypto.Cipher.d.ts" />
declare module javax {
    export module crypto {
        export class CipherOutputStream extends javaioFilterOutputStream {
            public flush(): void;

            public write(param0: number): void;

            public constructor(param0: javaioOutputStream);
            public constructor(param0: javaioOutputStream, param1: javax.crypto.Cipher);

            public write(param0: native.Array<number>, param1: number, param2: number): void;

            public constructor();

            public write(param0: native.Array<number>): void;

            public close(): void;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.security.AlgorithmParameters.d.ts" />
/// <reference path="./java.security.Key.d.ts" />
/// <reference path="./java.security.SecureRandom.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />
declare module javax {
    export module crypto {
        export abstract class CipherSpi extends javalangObject {
            public engineUpdateAAD(param0: native.Array<number>, param1: number, param2: number): void;

            public engineGetKeySize(param0: javasecurityKey): number;

            public engineWrap(param0: javasecurityKey): native.Array<number>;

            public engineUnwrap(param0: native.Array<number>, param1: string, param2: number): javasecurityKey;

            public engineInit(param0: number, param1: javasecurityKey, param2: javasecurityAlgorithmParameters, param3: javasecuritySecureRandom): void;

            public engineDoFinal(param0: native.Array<number>, param1: number, param2: number, param3: native.Array<number>, param4: number): number;

            public engineUpdate(param0: native.Array<number>, param1: number, param2: number, param3: native.Array<number>, param4: number): number;

            public constructor();

            public engineInit(param0: number, param1: javasecurityKey, param2: javasecuritySecureRandom): void;

            public engineUpdate(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;

            public engineUpdateAAD(param0: javanioByteBuffer): void;

            public engineSetPadding(param0: string): void;

            public engineDoFinal(param0: javanioByteBuffer, param1: javanioByteBuffer): number;

            public engineGetIV(): native.Array<number>;

            public engineGetParameters(): javasecurityAlgorithmParameters;

            public engineInit(param0: number, param1: javasecurityKey, param2: javasecurityspecAlgorithmParameterSpec, param3: javasecuritySecureRandom): void;

            public engineDoFinal(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;

            public engineGetBlockSize(): number;

            public engineGetOutputSize(param0: number): number;

            public engineUpdate(param0: javanioByteBuffer, param1: javanioByteBuffer): number;

            public engineSetMode(param0: string): void;
        }
    }
}

import javasecurityspecPKCS8EncodedKeySpec = java.security.spec.PKCS8EncodedKeySpec;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.AlgorithmParameters.d.ts" />
/// <reference path="./java.security.Key.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.security.spec.PKCS8EncodedKeySpec.d.ts" />
/// <reference path="./javax.crypto.Cipher.d.ts" />
declare module javax {
    export module crypto {
        export class EncryptedPrivateKeyInfo extends javalangObject {
            public getKeySpec(param0: javasecurityKey): javasecurityspecPKCS8EncodedKeySpec;
            public getKeySpec(param0: javax.crypto.Cipher): javasecurityspecPKCS8EncodedKeySpec;

            public constructor(param0: string, param1: native.Array<number>);
            public constructor(param0: javasecurityAlgorithmParameters, param1: native.Array<number>);

            public getKeySpec(param0: javasecurityKey, param1: string): javasecurityspecPKCS8EncodedKeySpec;
            public getKeySpec(param0: javasecurityKey, param1: javasecurityProvider): javasecurityspecPKCS8EncodedKeySpec;

            public getAlgParameters(): javasecurityAlgorithmParameters;

            public constructor(param0: native.Array<number>);

            public getAlgName(): string;

            public getEncryptedData(): native.Array<number>;

            public getEncoded(): native.Array<number>;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.AlgorithmParameters.d.ts" />
/// <reference path="./java.security.Key.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />
/// <reference path="./javax.crypto.ExemptionMechanismSpi.d.ts" />
declare module javax {
    export module crypto {
        export class ExemptionMechanism extends javalangObject {
            public getProvider(): javasecurityProvider;

            public init(param0: javasecurityKey): void;

            public static getInstance(param0: string, param1: string): javax.crypto.ExemptionMechanism;
            public static getInstance(param0: string, param1: javasecurityProvider): javax.crypto.ExemptionMechanism;

            public getOutputSize(param0: number): number;

            public isCryptoAllowed(param0: javasecurityKey): boolean;

            public static getInstance(param0: string): javax.crypto.ExemptionMechanism;

            public constructor(param0: javax.crypto.ExemptionMechanismSpi, param1: javasecurityProvider, param2: string);

            public genExemptionBlob(param0: native.Array<number>, param1: number): number;

            public getName(): string;

            public genExemptionBlob(param0: native.Array<number>): number;
            public genExemptionBlob(): native.Array<number>;

            public init(param0: javasecurityKey, param1: javasecurityspecAlgorithmParameterSpec): void;
            public init(param0: javasecurityKey, param1: javasecurityAlgorithmParameters): void;

            public finalize(): void;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module javax {
    export module crypto {
        export class ExemptionMechanismException extends javasecurityGeneralSecurityException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./java.security.AlgorithmParameters.d.ts" />
/// <reference path="./java.security.Key.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />
declare module javax {
    export module crypto {
        export abstract class ExemptionMechanismSpi extends javalangObject {
            public engineInit(param0: javasecurityKey): void;

            public engineGenExemptionBlob(): native.Array<number>;

            public engineInit(param0: javasecurityKey, param1: javasecurityAlgorithmParameters): void;

            public engineGenExemptionBlob(param0: native.Array<number>, param1: number): number;

            public constructor();

            public engineGetOutputSize(param0: number): number;

            public engineInit(param0: javasecurityKey, param1: javasecurityspecAlgorithmParameterSpec): void;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module javax {
    export module crypto {
        export class IllegalBlockSizeException extends javasecurityGeneralSecurityException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Key.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.security.SecureRandom.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />
/// <reference path="./javax.crypto.KeyAgreementSpi.d.ts" />
/// <reference path="./javax.crypto.SecretKey.d.ts" />
declare module javax {
    export module crypto {
        export class KeyAgreement extends javalangObject {
            public static getInstance(param0: string, param1: string): javax.crypto.KeyAgreement;

            public generateSecret(param0: string): javax.crypto.SecretKey;

            public getProvider(): javasecurityProvider;

            public init(param0: javasecurityKey): void;
            public init(param0: javasecurityKey, param1: javasecurityspecAlgorithmParameterSpec, param2: javasecuritySecureRandom): void;

            public constructor(param0: javax.crypto.KeyAgreementSpi, param1: javasecurityProvider, param2: string);

            public init(param0: javasecurityKey, param1: javasecuritySecureRandom): void;

            public doPhase(param0: javasecurityKey, param1: boolean): javasecurityKey;

            public generateSecret(): native.Array<number>;

            public getAlgorithm(): string;

            public init(param0: javasecurityKey, param1: javasecurityspecAlgorithmParameterSpec): void;

            public generateSecret(param0: native.Array<number>, param1: number): number;

            public static getInstance(param0: string, param1: javasecurityProvider): javax.crypto.KeyAgreement;
            public static getInstance(param0: string): javax.crypto.KeyAgreement;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Key.d.ts" />
/// <reference path="./java.security.SecureRandom.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />
/// <reference path="./javax.crypto.SecretKey.d.ts" />
declare module javax {
    export module crypto {
        export abstract class KeyAgreementSpi extends javalangObject {
            public engineDoPhase(param0: javasecurityKey, param1: boolean): javasecurityKey;

            public engineInit(param0: javasecurityKey, param1: javasecuritySecureRandom): void;

            public engineGenerateSecret(param0: string): javax.crypto.SecretKey;

            public constructor();

            public engineGenerateSecret(): native.Array<number>;

            public engineInit(param0: javasecurityKey, param1: javasecurityspecAlgorithmParameterSpec, param2: javasecuritySecureRandom): void;

            public engineGenerateSecret(param0: native.Array<number>, param1: number): number;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.security.SecureRandom.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />
/// <reference path="./javax.crypto.KeyGeneratorSpi.d.ts" />
/// <reference path="./javax.crypto.SecretKey.d.ts" />
declare module javax {
    export module crypto {
        export class KeyGenerator extends javalangObject {
            public init(param0: number, param1: javasecuritySecureRandom): void;

            public constructor(param0: javax.crypto.KeyGeneratorSpi, param1: javasecurityProvider, param2: string);

            public getProvider(): javasecurityProvider;

            public generateKey(): javax.crypto.SecretKey;

            public getAlgorithm(): string;

            public init(param0: javasecurityspecAlgorithmParameterSpec): void;
            public init(param0: javasecurityspecAlgorithmParameterSpec, param1: javasecuritySecureRandom): void;
            public init(param0: number): void;
            public init(param0: javasecuritySecureRandom): void;

            public static getInstance(param0: string): javax.crypto.KeyGenerator;
            public static getInstance(param0: string, param1: string): javax.crypto.KeyGenerator;
            public static getInstance(param0: string, param1: javasecurityProvider): javax.crypto.KeyGenerator;
        }
    }
}

/// <reference path="./java.security.SecureRandom.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />
/// <reference path="./javax.crypto.SecretKey.d.ts" />
declare module javax {
    export module crypto {
        export abstract class KeyGeneratorSpi extends javalangObject {
            public engineInit(param0: number, param1: javasecuritySecureRandom): void;
            public engineInit(param0: javasecuritySecureRandom): void;

            public constructor();

            public engineInit(param0: javasecurityspecAlgorithmParameterSpec, param1: javasecuritySecureRandom): void;

            public engineGenerateKey(): javax.crypto.SecretKey;
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.security.Key.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />
/// <reference path="./javax.crypto.MacSpi.d.ts" />
declare module javax {
    export module crypto {
        export class Mac extends javalangObject implements javalangCloneable {
            public getMacLength(): number;

            public update(param0: number): void;
            public update(param0: javanioByteBuffer): void;

            public getProvider(): javasecurityProvider;

            public init(param0: javasecurityKey): void;

            public doFinal(param0: native.Array<number>): native.Array<number>;

            public clone(): javalangObject;

            public doFinal(): native.Array<number>;

            public static getInstance(param0: string): javax.crypto.Mac;
            public static getInstance(param0: string, param1: javasecurityProvider): javax.crypto.Mac;

            public doFinal(param0: native.Array<number>, param1: number): void;

            public update(param0: native.Array<number>): void;

            public constructor(param0: javax.crypto.MacSpi, param1: javasecurityProvider, param2: string);

            public static getInstance(param0: string, param1: string): javax.crypto.Mac;

            public getAlgorithm(): string;

            public reset(): void;

            public init(param0: javasecurityKey, param1: javasecurityspecAlgorithmParameterSpec): void;

            public update(param0: native.Array<number>, param1: number, param2: number): void;
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.security.Key.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />
declare module javax {
    export module crypto {
        export abstract class MacSpi extends javalangObject {
            public engineDoFinal(): native.Array<number>;

            public engineUpdate(param0: native.Array<number>, param1: number, param2: number): void;
            public engineUpdate(param0: javanioByteBuffer): void;
            public engineUpdate(param0: number): void;

            public engineReset(): void;

            public clone(): javalangObject;

            public constructor();

            public engineGetMacLength(): number;

            public engineInit(param0: javasecurityKey, param1: javasecurityspecAlgorithmParameterSpec): void;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module javax {
    export module crypto {
        export class NoSuchPaddingException extends javasecurityGeneralSecurityException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./javax.crypto.CipherSpi.d.ts" />
declare module javax {
    export module crypto {
        export class NullCipher extends javax.crypto.Cipher {
            public constructor();
            public constructor(param0: javax.crypto.CipherSpi, param1: javasecurityProvider, param2: string);
        }
    }
}

/// <reference path="./java.io.Serializable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Key.d.ts" />
/// <reference path="./javax.crypto.Cipher.d.ts" />
declare module javax {
    export module crypto {
        export class SealedObject extends javalangObject implements javaioSerializable {
            public encodedParams: native.Array<number>;

            public getObject(param0: javax.crypto.Cipher): javalangObject;

            public constructor(param0: javaioSerializable, param1: javax.crypto.Cipher);
            public constructor(param0: javax.crypto.SealedObject);

            public getObject(param0: javasecurityKey, param1: string): javalangObject;

            public getAlgorithm(): string;

            public getObject(param0: javasecurityKey): javalangObject;
        }
    }
}

declare module javax {
    export module crypto {
        export class SecretKey extends javalangObject implements javasecurityKey {
            /**
             * Constructs a new instance of the javax.crypto.SecretKey interface with the provided implementation.
             */
            public constructor(implementation: {
                getAlgorithm(): string;
                getFormat(): string;
                getEncoded(): native.Array<number>;
            });

            public static serialVersionUID: number;

            public getAlgorithm(): string;

            public getFormat(): string;

            public getEncoded(): native.Array<number>;
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.security.spec.KeySpec.d.ts" />
/// <reference path="./javax.crypto.SecretKey.d.ts" />
/// <reference path="./javax.crypto.SecretKeyFactorySpi.d.ts" />
declare module javax {
    export module crypto {
        export class SecretKeyFactory extends javalangObject {
            public translateKey(param0: javax.crypto.SecretKey): javax.crypto.SecretKey;

            public generateSecret(param0: javasecurityspecKeySpec): javax.crypto.SecretKey;

            public getProvider(): javasecurityProvider;

            public static getInstance(param0: string, param1: javasecurityProvider): javax.crypto.SecretKeyFactory;

            public getAlgorithm(): string;

            public static getInstance(param0: string, param1: string): javax.crypto.SecretKeyFactory;

            public constructor(param0: javax.crypto.SecretKeyFactorySpi, param1: javasecurityProvider, param2: string);

            public static getInstance(param0: string): javax.crypto.SecretKeyFactory;

            public getKeySpec(param0: javax.crypto.SecretKey, param1: javalangClass): javasecurityspecKeySpec;
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.security.spec.KeySpec.d.ts" />
/// <reference path="./javax.crypto.SecretKey.d.ts" />
declare module javax {
    export module crypto {
        export abstract class SecretKeyFactorySpi extends javalangObject {
            public engineGetKeySpec(param0: javax.crypto.SecretKey, param1: javalangClass): javasecurityspecKeySpec;

            public engineGenerateSecret(param0: javasecurityspecKeySpec): javax.crypto.SecretKey;

            public constructor();

            public engineTranslateKey(param0: javax.crypto.SecretKey): javax.crypto.SecretKey;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module javax {
    export module crypto {
        export class ShortBufferException extends javasecurityGeneralSecurityException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./javax.crypto.spec.DHParameterSpec.d.ts" />
declare module javax {
    export module crypto {
        export module interfaces {
            export class DHKey extends javalangObject {
                /**
                 * Constructs a new instance of the javax.crypto.interfaces.DHKey interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getParams(): javax.crypto.spec.DHParameterSpec;
                });

                public getParams(): javax.crypto.spec.DHParameterSpec;
            }
        }
    }
}

/// <reference path="./java.math.BigInteger.d.ts" />
/// <reference path="./javax.crypto.spec.DHParameterSpec.d.ts" />
declare module javax {
    export module crypto {
        export module interfaces {
            export class DHPrivateKey extends javalangObject implements javax.crypto.interfaces.DHKey, javasecurityPrivateKey {
                /**
                 * Constructs a new instance of the javax.crypto.interfaces.DHPrivateKey interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getX(): javamathBigInteger;
                    getParams(): javax.crypto.spec.DHParameterSpec;
                    getAlgorithm(): string;
                    getFormat(): string;
                    getEncoded(): native.Array<number>;
                });

                public static serialVersionUID: number;

                public getAlgorithm(): string;

                public getFormat(): string;

                public getX(): javamathBigInteger;

                public getParams(): javax.crypto.spec.DHParameterSpec;

                public getEncoded(): native.Array<number>;
            }
        }
    }
}

import javasecurityPublicKey = java.security.PublicKey;
/// <reference path="./java.math.BigInteger.d.ts" />
/// <reference path="./javax.crypto.spec.DHParameterSpec.d.ts" />
declare module javax {
    export module crypto {
        export module interfaces {
            export class DHPublicKey extends javalangObject implements javax.crypto.interfaces.DHKey, javasecurityPublicKey {
                /**
                 * Constructs a new instance of the javax.crypto.interfaces.DHPublicKey interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getY(): javamathBigInteger;
                    getParams(): javax.crypto.spec.DHParameterSpec;
                    getAlgorithm(): string;
                    getFormat(): string;
                    getEncoded(): native.Array<number>;
                });

                public static serialVersionUID: number;

                public getAlgorithm(): string;

                public getFormat(): string;

                public getY(): javamathBigInteger;

                public getParams(): javax.crypto.spec.DHParameterSpec;

                public getEncoded(): native.Array<number>;
            }
        }
    }
}

declare module javax {
    export module crypto {
        export module interfaces {
            export class PBEKey extends javalangObject implements javax.crypto.SecretKey {
                /**
                 * Constructs a new instance of the javax.crypto.interfaces.PBEKey interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getIterationCount(): number;
                    getSalt(): native.Array<number>;
                    getPassword(): native.Array<string>;
                    getAlgorithm(): string;
                    getFormat(): string;
                    getEncoded(): native.Array<number>;
                });

                public static serialVersionUID: number;

                public getIterationCount(): number;

                public getAlgorithm(): string;

                public getFormat(): string;

                public getPassword(): native.Array<string>;

                public getEncoded(): native.Array<number>;

                public getSalt(): native.Array<number>;
            }
        }
    }
}

declare module javax {
    export module crypto {
        export module spec {
            export class DESKeySpec extends javalangObject implements javasecurityspecKeySpec {
                public static DES_KEY_LEN: number;

                public static isWeak(param0: native.Array<number>, param1: number): boolean;

                public constructor(param0: native.Array<number>);
                public constructor(param0: native.Array<number>, param1: number);

                public getKey(): native.Array<number>;

                public static isParityAdjusted(param0: native.Array<number>, param1: number): boolean;
            }
        }
    }
}

declare module javax {
    export module crypto {
        export module spec {
            export class DESedeKeySpec extends javalangObject implements javasecurityspecKeySpec {
                public static DES_EDE_KEY_LEN: number;

                public constructor(param0: native.Array<number>);
                public constructor(param0: native.Array<number>, param1: number);

                public getKey(): native.Array<number>;

                public static isParityAdjusted(param0: native.Array<number>, param1: number): boolean;
            }
        }
    }
}

declare module javax {
    export module crypto {
        export module spec {
            export class DHGenParameterSpec extends javalangObject implements javasecurityspecAlgorithmParameterSpec {
                public constructor(param0: number, param1: number);

                public getExponentSize(): number;

                public getPrimeSize(): number;
            }
        }
    }
}

/// <reference path="./java.math.BigInteger.d.ts" />
declare module javax {
    export module crypto {
        export module spec {
            export class DHParameterSpec extends javalangObject implements javasecurityspecAlgorithmParameterSpec {
                public constructor(param0: javamathBigInteger, param1: javamathBigInteger);

                public getP(): javamathBigInteger;

                public constructor(param0: javamathBigInteger, param1: javamathBigInteger, param2: number);

                public getG(): javamathBigInteger;

                public getL(): number;
            }
        }
    }
}

/// <reference path="./java.math.BigInteger.d.ts" />
declare module javax {
    export module crypto {
        export module spec {
            export class DHPrivateKeySpec extends javalangObject implements javasecurityspecKeySpec {
                public getP(): javamathBigInteger;

                public getX(): javamathBigInteger;

                public constructor(param0: javamathBigInteger, param1: javamathBigInteger, param2: javamathBigInteger);

                public getG(): javamathBigInteger;
            }
        }
    }
}

/// <reference path="./java.math.BigInteger.d.ts" />
declare module javax {
    export module crypto {
        export module spec {
            export class DHPublicKeySpec extends javalangObject implements javasecurityspecKeySpec {
                public getP(): javamathBigInteger;

                public getY(): javamathBigInteger;

                public constructor(param0: javamathBigInteger, param1: javamathBigInteger, param2: javamathBigInteger);

                public getG(): javamathBigInteger;
            }
        }
    }
}

declare module javax {
    export module crypto {
        export module spec {
            export class GCMParameterSpec extends javalangObject implements javasecurityspecAlgorithmParameterSpec {
                public getTLen(): number;

                public getIV(): native.Array<number>;

                public constructor(param0: number, param1: native.Array<number>, param2: number, param3: number);
                public constructor(param0: number, param1: native.Array<number>);
            }
        }
    }
}

declare module javax {
    export module crypto {
        export module spec {
            export class IvParameterSpec extends javalangObject implements javasecurityspecAlgorithmParameterSpec {
                public constructor(param0: native.Array<number>);
                public constructor(param0: native.Array<number>, param1: number, param2: number);

                public getIV(): native.Array<number>;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />
/// <reference path="./javax.crypto.spec.PSource.d.ts" />
declare module javax {
    export module crypto {
        export module spec {
            export class OAEPParameterSpec extends javalangObject implements javasecurityspecAlgorithmParameterSpec {
                public static DEFAULT: javax.crypto.spec.OAEPParameterSpec;

                public getDigestAlgorithm(): string;

                public getMGFAlgorithm(): string;

                public getPSource(): javax.crypto.spec.PSource;

                public getMGFParameters(): javasecurityspecAlgorithmParameterSpec;

                public constructor(param0: string, param1: string, param2: javasecurityspecAlgorithmParameterSpec, param3: javax.crypto.spec.PSource);
            }
        }
    }
}

declare module javax {
    export module crypto {
        export module spec {
            export class PBEKeySpec extends javalangObject implements javasecurityspecKeySpec {
                public getIterationCount(): number;

                public getPassword(): native.Array<string>;

                public constructor(param0: native.Array<string>, param1: native.Array<number>, param2: number, param3: number);
                public constructor(param0: native.Array<string>);

                public clearPassword(): void;

                public getSalt(): native.Array<number>;

                public constructor(param0: native.Array<string>, param1: native.Array<number>, param2: number);

                public getKeyLength(): number;
            }
        }
    }
}

declare module javax {
    export module crypto {
        export module spec {
            export class PBEParameterSpec extends javalangObject implements javasecurityspecAlgorithmParameterSpec {
                public getIterationCount(): number;

                public constructor(param0: native.Array<number>, param1: number);

                public getSalt(): native.Array<number>;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module javax {
    export module crypto {
        export module spec {
            export class PSource extends javalangObject {
                public getAlgorithm(): string;

                public constructor(param0: string);
            }
            export module PSource {
                export class PSpecified extends javax.crypto.spec.PSource {
                    public static DEFAULT: javax.crypto.spec.PSource.PSpecified;

                    public constructor(param0: native.Array<number>);
                    public constructor(param0: string);

                    public getValue(): native.Array<number>;
                }
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module javax {
    export module crypto {
        export module spec {
            export class RC2ParameterSpec extends javalangObject implements javasecurityspecAlgorithmParameterSpec {
                public constructor(param0: number, param1: native.Array<number>, param2: number);

                public equals(param0: javalangObject): boolean;

                public getIV(): native.Array<number>;

                public hashCode(): number;

                public getEffectiveKeyBits(): number;

                public constructor(param0: number);
                public constructor(param0: number, param1: native.Array<number>);
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module javax {
    export module crypto {
        export module spec {
            export class RC5ParameterSpec extends javalangObject implements javasecurityspecAlgorithmParameterSpec {
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: number, param1: number, param2: number, param3: native.Array<number>);

                public getVersion(): number;

                public equals(param0: javalangObject): boolean;

                public getIV(): native.Array<number>;

                public hashCode(): number;

                public getWordSize(): number;

                public constructor(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number);

                public getRounds(): number;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module javax {
    export module crypto {
        export module spec {
            export class SecretKeySpec extends javalangObject implements javax.crypto.SecretKey, javasecurityspecKeySpec, javaioSerializable {
                public getAlgorithm(): string;

                public getFormat(): string;

                public equals(param0: javalangObject): boolean;

                public hashCode(): number;

                public constructor(param0: native.Array<number>, param1: string);
                public constructor(param0: native.Array<number>, param1: number, param2: number, param3: string);

                public getEncoded(): native.Array<number>;
            }
        }
    }
}

declare module javax {
    export module microedition {
        export module khronos {
            export module egl {
                export class EGL extends javalangObject {
                    /**
                     * Constructs a new instance of the javax.microedition.khronos.egl.EGL interface with the provided implementation.
                     */
                    public constructor(implementation: {});
                }
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./javax.microedition.khronos.egl.EGLConfig.d.ts" />
/// <reference path="./javax.microedition.khronos.egl.EGLContext.d.ts" />
/// <reference path="./javax.microedition.khronos.egl.EGLDisplay.d.ts" />
/// <reference path="./javax.microedition.khronos.egl.EGLSurface.d.ts" />
declare module javax {
    export module microedition {
        export module khronos {
            export module egl {
                export class EGL10 extends javalangObject implements javax.microedition.khronos.egl.EGL {
                    /**
                     * Constructs a new instance of the javax.microedition.khronos.egl.EGL10 interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        eglChooseConfig(param0: javax.microedition.khronos.egl.EGLDisplay, param1: native.Array<number>, param2: native.Array<javax.microedition.khronos.egl.EGLConfig>, param3: number, param4: native.Array<number>): boolean;
                        eglCopyBuffers(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLSurface, param2: javalangObject): boolean;
                        eglCreateContext(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLConfig, param2: javax.microedition.khronos.egl.EGLContext, param3: native.Array<number>): javax.microedition.khronos.egl.EGLContext;
                        eglCreatePbufferSurface(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLConfig, param2: native.Array<number>): javax.microedition.khronos.egl.EGLSurface;
                        eglCreatePixmapSurface(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLConfig, param2: javalangObject, param3: native.Array<number>): javax.microedition.khronos.egl.EGLSurface;
                        eglCreateWindowSurface(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLConfig, param2: javalangObject, param3: native.Array<number>): javax.microedition.khronos.egl.EGLSurface;
                        eglDestroyContext(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLContext): boolean;
                        eglDestroySurface(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLSurface): boolean;
                        eglGetConfigAttrib(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLConfig, param2: number, param3: native.Array<number>): boolean;
                        eglGetConfigs(param0: javax.microedition.khronos.egl.EGLDisplay, param1: native.Array<javax.microedition.khronos.egl.EGLConfig>, param2: number, param3: native.Array<number>): boolean;
                        eglGetCurrentContext(): javax.microedition.khronos.egl.EGLContext;
                        eglGetCurrentDisplay(): javax.microedition.khronos.egl.EGLDisplay;
                        eglGetCurrentSurface(param0: number): javax.microedition.khronos.egl.EGLSurface;
                        eglGetDisplay(param0: javalangObject): javax.microedition.khronos.egl.EGLDisplay;
                        eglGetError(): number;
                        eglInitialize(param0: javax.microedition.khronos.egl.EGLDisplay, param1: native.Array<number>): boolean;
                        eglMakeCurrent(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLSurface, param2: javax.microedition.khronos.egl.EGLSurface, param3: javax.microedition.khronos.egl.EGLContext): boolean;
                        eglQueryContext(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLContext, param2: number, param3: native.Array<number>): boolean;
                        eglQueryString(param0: javax.microedition.khronos.egl.EGLDisplay, param1: number): string;
                        eglQuerySurface(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLSurface, param2: number, param3: native.Array<number>): boolean;
                        eglSwapBuffers(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLSurface): boolean;
                        eglTerminate(param0: javax.microedition.khronos.egl.EGLDisplay): boolean;
                        eglWaitGL(): boolean;
                        eglWaitNative(param0: number, param1: javalangObject): boolean;
                        <clinit>(): void;
                    });

                    public static EGL_MAX_PBUFFER_HEIGHT: number;
                    public static EGL_BAD_CONFIG: number;
                    public static EGL_TRANSPARENT_RED_VALUE: number;
                    public static EGL_ALPHA_SIZE: number;
                    public static EGL_LUMINANCE_BUFFER: number;
                    public static EGL_SAMPLES: number;
                    public static EGL_EXTENSIONS: number;
                    public static EGL_NO_DISPLAY: javax.microedition.khronos.egl.EGLDisplay;
                    public static EGL_VERSION: number;
                    public static EGL_TRANSPARENT_GREEN_VALUE: number;
                    public static EGL_CONFIG_ID: number;
                    public static EGL_LARGEST_PBUFFER: number;
                    public static EGL_DEPTH_SIZE: number;
                    public static EGL_HEIGHT: number;
                    public static EGL_MAX_PBUFFER_WIDTH: number;
                    public static EGL_NOT_INITIALIZED: number;
                    public static EGL_RENDER_BUFFER: number;
                    public static EGL_RED_SIZE: number;
                    public static EGL_DONT_CARE: number;
                    public static EGL_READ: number;
                    public static EGL_BAD_NATIVE_WINDOW: number;
                    public static EGL_PIXMAP_BIT: number;
                    public static EGL_WIDTH: number;
                    public static EGL_STENCIL_SIZE: number;
                    public static EGL_SUCCESS: number;
                    public static EGL_GREEN_SIZE: number;
                    public static EGL_DRAW: number;
                    public static EGL_COLORSPACE: number;
                    public static EGL_LEVEL: number;
                    public static EGL_PBUFFER_BIT: number;
                    public static EGL_BAD_SURFACE: number;
                    public static EGL_BLUE_SIZE: number;
                    public static EGL_RENDERABLE_TYPE: number;
                    public static EGL_BAD_ATTRIBUTE: number;
                    public static EGL_VENDOR: number;
                    public static EGL_BAD_ACCESS: number;
                    public static EGL_CORE_NATIVE_ENGINE: number;
                    public static EGL_NONE: number;
                    public static EGL_VERTICAL_RESOLUTION: number;
                    public static EGL_BAD_CURRENT_SURFACE: number;
                    public static EGL_COLOR_BUFFER_TYPE: number;
                    public static EGL_CONFIG_CAVEAT: number;
                    public static EGL_BAD_NATIVE_PIXMAP: number;
                    public static EGL_NATIVE_VISUAL_TYPE: number;
                    public static EGL_LUMINANCE_SIZE: number;
                    public static EGL_NON_CONFORMANT_CONFIG: number;
                    public static EGL_BAD_MATCH: number;
                    public static EGL_SAMPLE_BUFFERS: number;
                    public static EGL_TRANSPARENT_BLUE_VALUE: number;
                    public static EGL_PIXEL_ASPECT_RATIO: number;
                    public static EGL_SURFACE_TYPE: number;
                    public static EGL_TRANSPARENT_TYPE: number;
                    public static EGL_ALPHA_FORMAT: number;
                    public static EGL_NO_SURFACE: javax.microedition.khronos.egl.EGLSurface;
                    public static EGL_WINDOW_BIT: number;
                    public static EGL_BAD_ALLOC: number;
                    public static EGL_RGB_BUFFER: number;
                    public static EGL_ALPHA_MASK_SIZE: number;
                    public static EGL_DEFAULT_DISPLAY: javalangObject;
                    public static EGL_HORIZONTAL_RESOLUTION: number;
                    public static EGL_TRANSPARENT_RGB: number;
                    public static EGL_MAX_PBUFFER_PIXELS: number;
                    public static EGL_SLOW_CONFIG: number;
                    public static EGL_SINGLE_BUFFER: number;
                    public static EGL_BUFFER_SIZE: number;
                    public static EGL_NO_CONTEXT: javax.microedition.khronos.egl.EGLContext;
                    public static EGL_NATIVE_RENDERABLE: number;
                    public static EGL_BAD_DISPLAY: number;
                    public static EGL_BAD_PARAMETER: number;
                    public static EGL_BAD_CONTEXT: number;
                    public static EGL_NATIVE_VISUAL_ID: number;

                    public eglMakeCurrent(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLSurface, param2: javax.microedition.khronos.egl.EGLSurface, param3: javax.microedition.khronos.egl.EGLContext): boolean;

                    public eglSwapBuffers(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLSurface): boolean;

                    public eglCreateContext(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLConfig, param2: javax.microedition.khronos.egl.EGLContext, param3: native.Array<number>): javax.microedition.khronos.egl.EGLContext;

                    public eglChooseConfig(param0: javax.microedition.khronos.egl.EGLDisplay, param1: native.Array<number>, param2: native.Array<javax.microedition.khronos.egl.EGLConfig>, param3: number, param4: native.Array<number>): boolean;

                    public eglTerminate(param0: javax.microedition.khronos.egl.EGLDisplay): boolean;

                    public eglQuerySurface(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLSurface, param2: number, param3: native.Array<number>): boolean;

                    public eglGetCurrentDisplay(): javax.microedition.khronos.egl.EGLDisplay;

                    public eglQueryContext(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLContext, param2: number, param3: native.Array<number>): boolean;

                    public eglGetConfigs(param0: javax.microedition.khronos.egl.EGLDisplay, param1: native.Array<javax.microedition.khronos.egl.EGLConfig>, param2: number, param3: native.Array<number>): boolean;

                    public eglCopyBuffers(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLSurface, param2: javalangObject): boolean;

                    public eglGetError(): number;

                    public eglCreatePixmapSurface(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLConfig, param2: javalangObject, param3: native.Array<number>): javax.microedition.khronos.egl.EGLSurface;

                    public eglGetCurrentContext(): javax.microedition.khronos.egl.EGLContext;

                    public eglCreateWindowSurface(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLConfig, param2: javalangObject, param3: native.Array<number>): javax.microedition.khronos.egl.EGLSurface;

                    public eglWaitNative(param0: number, param1: javalangObject): boolean;

                    public eglGetDisplay(param0: javalangObject): javax.microedition.khronos.egl.EGLDisplay;

                    public eglGetCurrentSurface(param0: number): javax.microedition.khronos.egl.EGLSurface;

                    public eglCreatePbufferSurface(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLConfig, param2: native.Array<number>): javax.microedition.khronos.egl.EGLSurface;

                    public eglDestroyContext(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLContext): boolean;

                    public eglDestroySurface(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLSurface): boolean;

                    public eglGetConfigAttrib(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLConfig, param2: number, param3: native.Array<number>): boolean;

                    public eglInitialize(param0: javax.microedition.khronos.egl.EGLDisplay, param1: native.Array<number>): boolean;

                    public eglWaitGL(): boolean;

                    public eglQueryString(param0: javax.microedition.khronos.egl.EGLDisplay, param1: number): string;
                }
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./javax.microedition.khronos.egl.EGLConfig.d.ts" />
/// <reference path="./javax.microedition.khronos.egl.EGLContext.d.ts" />
/// <reference path="./javax.microedition.khronos.egl.EGLDisplay.d.ts" />
/// <reference path="./javax.microedition.khronos.egl.EGLSurface.d.ts" />
declare module javax {
    export module microedition {
        export module khronos {
            export module egl {
                export class EGL11 extends javalangObject implements javax.microedition.khronos.egl.EGL10 {
                    /**
                     * Constructs a new instance of the javax.microedition.khronos.egl.EGL11 interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        eglChooseConfig(param0: javax.microedition.khronos.egl.EGLDisplay, param1: native.Array<number>, param2: native.Array<javax.microedition.khronos.egl.EGLConfig>, param3: number, param4: native.Array<number>): boolean;
                        eglCopyBuffers(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLSurface, param2: javalangObject): boolean;
                        eglCreateContext(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLConfig, param2: javax.microedition.khronos.egl.EGLContext, param3: native.Array<number>): javax.microedition.khronos.egl.EGLContext;
                        eglCreatePbufferSurface(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLConfig, param2: native.Array<number>): javax.microedition.khronos.egl.EGLSurface;
                        eglCreatePixmapSurface(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLConfig, param2: javalangObject, param3: native.Array<number>): javax.microedition.khronos.egl.EGLSurface;
                        eglCreateWindowSurface(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLConfig, param2: javalangObject, param3: native.Array<number>): javax.microedition.khronos.egl.EGLSurface;
                        eglDestroyContext(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLContext): boolean;
                        eglDestroySurface(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLSurface): boolean;
                        eglGetConfigAttrib(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLConfig, param2: number, param3: native.Array<number>): boolean;
                        eglGetConfigs(param0: javax.microedition.khronos.egl.EGLDisplay, param1: native.Array<javax.microedition.khronos.egl.EGLConfig>, param2: number, param3: native.Array<number>): boolean;
                        eglGetCurrentContext(): javax.microedition.khronos.egl.EGLContext;
                        eglGetCurrentDisplay(): javax.microedition.khronos.egl.EGLDisplay;
                        eglGetCurrentSurface(param0: number): javax.microedition.khronos.egl.EGLSurface;
                        eglGetDisplay(param0: javalangObject): javax.microedition.khronos.egl.EGLDisplay;
                        eglGetError(): number;
                        eglInitialize(param0: javax.microedition.khronos.egl.EGLDisplay, param1: native.Array<number>): boolean;
                        eglMakeCurrent(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLSurface, param2: javax.microedition.khronos.egl.EGLSurface, param3: javax.microedition.khronos.egl.EGLContext): boolean;
                        eglQueryContext(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLContext, param2: number, param3: native.Array<number>): boolean;
                        eglQueryString(param0: javax.microedition.khronos.egl.EGLDisplay, param1: number): string;
                        eglQuerySurface(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLSurface, param2: number, param3: native.Array<number>): boolean;
                        eglSwapBuffers(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLSurface): boolean;
                        eglTerminate(param0: javax.microedition.khronos.egl.EGLDisplay): boolean;
                        eglWaitGL(): boolean;
                        eglWaitNative(param0: number, param1: javalangObject): boolean;
                        <clinit>(): void;
                    });

                    public static EGL_MAX_PBUFFER_HEIGHT: number;
                    public static EGL_BAD_CONFIG: number;
                    public static EGL_TRANSPARENT_RED_VALUE: number;
                    public static EGL_ALPHA_SIZE: number;
                    public static EGL_LUMINANCE_BUFFER: number;
                    public static EGL_SAMPLES: number;
                    public static EGL_EXTENSIONS: number;
                    public static EGL_NO_DISPLAY: javax.microedition.khronos.egl.EGLDisplay;
                    public static EGL_VERSION: number;
                    public static EGL_TRANSPARENT_GREEN_VALUE: number;
                    public static EGL_CONFIG_ID: number;
                    public static EGL_LARGEST_PBUFFER: number;
                    public static EGL_DEPTH_SIZE: number;
                    public static EGL_HEIGHT: number;
                    public static EGL_MAX_PBUFFER_WIDTH: number;
                    public static EGL_NOT_INITIALIZED: number;
                    public static EGL_RENDER_BUFFER: number;
                    public static EGL_RED_SIZE: number;
                    public static EGL_DONT_CARE: number;
                    public static EGL_READ: number;
                    public static EGL_BAD_NATIVE_WINDOW: number;
                    public static EGL_PIXMAP_BIT: number;
                    public static EGL_WIDTH: number;
                    public static EGL_STENCIL_SIZE: number;
                    public static EGL_SUCCESS: number;
                    public static EGL_GREEN_SIZE: number;
                    public static EGL_DRAW: number;
                    public static EGL_COLORSPACE: number;
                    public static EGL_LEVEL: number;
                    public static EGL_PBUFFER_BIT: number;
                    public static EGL_BAD_SURFACE: number;
                    public static EGL_BLUE_SIZE: number;
                    public static EGL_RENDERABLE_TYPE: number;
                    public static EGL_BAD_ATTRIBUTE: number;
                    public static EGL_VENDOR: number;
                    public static EGL_BAD_ACCESS: number;
                    public static EGL_CORE_NATIVE_ENGINE: number;
                    public static EGL_NONE: number;
                    public static EGL_VERTICAL_RESOLUTION: number;
                    public static EGL_BAD_CURRENT_SURFACE: number;
                    public static EGL_COLOR_BUFFER_TYPE: number;
                    public static EGL_CONFIG_CAVEAT: number;
                    public static EGL_BAD_NATIVE_PIXMAP: number;
                    public static EGL_NATIVE_VISUAL_TYPE: number;
                    public static EGL_LUMINANCE_SIZE: number;
                    public static EGL_NON_CONFORMANT_CONFIG: number;
                    public static EGL_CONTEXT_LOST: number;
                    public static EGL_BAD_MATCH: number;
                    public static EGL_SAMPLE_BUFFERS: number;
                    public static EGL_TRANSPARENT_BLUE_VALUE: number;
                    public static EGL_PIXEL_ASPECT_RATIO: number;
                    public static EGL_SURFACE_TYPE: number;
                    public static EGL_TRANSPARENT_TYPE: number;
                    public static EGL_ALPHA_FORMAT: number;
                    public static EGL_NO_SURFACE: javax.microedition.khronos.egl.EGLSurface;
                    public static EGL_WINDOW_BIT: number;
                    public static EGL_BAD_ALLOC: number;
                    public static EGL_RGB_BUFFER: number;
                    public static EGL_ALPHA_MASK_SIZE: number;
                    public static EGL_DEFAULT_DISPLAY: javalangObject;
                    public static EGL_HORIZONTAL_RESOLUTION: number;
                    public static EGL_TRANSPARENT_RGB: number;
                    public static EGL_MAX_PBUFFER_PIXELS: number;
                    public static EGL_SLOW_CONFIG: number;
                    public static EGL_SINGLE_BUFFER: number;
                    public static EGL_BUFFER_SIZE: number;
                    public static EGL_NO_CONTEXT: javax.microedition.khronos.egl.EGLContext;
                    public static EGL_NATIVE_RENDERABLE: number;
                    public static EGL_BAD_DISPLAY: number;
                    public static EGL_BAD_PARAMETER: number;
                    public static EGL_BAD_CONTEXT: number;
                    public static EGL_NATIVE_VISUAL_ID: number;

                    public eglMakeCurrent(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLSurface, param2: javax.microedition.khronos.egl.EGLSurface, param3: javax.microedition.khronos.egl.EGLContext): boolean;

                    public eglSwapBuffers(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLSurface): boolean;

                    public eglCreateContext(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLConfig, param2: javax.microedition.khronos.egl.EGLContext, param3: native.Array<number>): javax.microedition.khronos.egl.EGLContext;

                    public eglChooseConfig(param0: javax.microedition.khronos.egl.EGLDisplay, param1: native.Array<number>, param2: native.Array<javax.microedition.khronos.egl.EGLConfig>, param3: number, param4: native.Array<number>): boolean;

                    public eglTerminate(param0: javax.microedition.khronos.egl.EGLDisplay): boolean;

                    public eglQuerySurface(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLSurface, param2: number, param3: native.Array<number>): boolean;

                    public eglGetCurrentDisplay(): javax.microedition.khronos.egl.EGLDisplay;

                    public eglQueryContext(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLContext, param2: number, param3: native.Array<number>): boolean;

                    public eglGetConfigs(param0: javax.microedition.khronos.egl.EGLDisplay, param1: native.Array<javax.microedition.khronos.egl.EGLConfig>, param2: number, param3: native.Array<number>): boolean;

                    public eglCopyBuffers(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLSurface, param2: javalangObject): boolean;

                    public eglGetError(): number;

                    public eglCreatePixmapSurface(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLConfig, param2: javalangObject, param3: native.Array<number>): javax.microedition.khronos.egl.EGLSurface;

                    public eglGetCurrentContext(): javax.microedition.khronos.egl.EGLContext;

                    public eglCreateWindowSurface(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLConfig, param2: javalangObject, param3: native.Array<number>): javax.microedition.khronos.egl.EGLSurface;

                    public eglWaitNative(param0: number, param1: javalangObject): boolean;

                    public eglGetDisplay(param0: javalangObject): javax.microedition.khronos.egl.EGLDisplay;

                    public eglGetCurrentSurface(param0: number): javax.microedition.khronos.egl.EGLSurface;

                    public eglCreatePbufferSurface(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLConfig, param2: native.Array<number>): javax.microedition.khronos.egl.EGLSurface;

                    public eglDestroyContext(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLContext): boolean;

                    public eglDestroySurface(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLSurface): boolean;

                    public eglGetConfigAttrib(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLConfig, param2: number, param3: native.Array<number>): boolean;

                    public eglInitialize(param0: javax.microedition.khronos.egl.EGLDisplay, param1: native.Array<number>): boolean;

                    public eglWaitGL(): boolean;

                    public eglQueryString(param0: javax.microedition.khronos.egl.EGLDisplay, param1: number): string;
                }
            }
        }
    }
}

declare module javax {
    export module microedition {
        export module khronos {
            export module egl {
                export abstract class EGLConfig extends javalangObject {
                    public constructor();
                }
            }
        }
    }
}

/// <reference path="./javax.microedition.khronos.egl.EGL.d.ts" />
/// <reference path="./javax.microedition.khronos.opengles.GL.d.ts" />
declare module javax {
    export module microedition {
        export module khronos {
            export module egl {
                export abstract class EGLContext extends javalangObject {
                    public constructor();

                    public static getEGL(): javax.microedition.khronos.egl.EGL;

                    public getGL(): javax.microedition.khronos.opengles.GL;
                }
            }
        }
    }
}

declare module javax {
    export module microedition {
        export module khronos {
            export module egl {
                export abstract class EGLDisplay extends javalangObject {
                    public constructor();
                }
            }
        }
    }
}

declare module javax {
    export module microedition {
        export module khronos {
            export module egl {
                export abstract class EGLSurface extends javalangObject {
                    public constructor();
                }
            }
        }
    }
}

declare module javax {
    export module microedition {
        export module khronos {
            export module opengles {
                export class GL extends javalangObject {
                    /**
                     * Constructs a new instance of the javax.microedition.khronos.opengles.GL interface with the provided implementation.
                     */
                    public constructor(implementation: {});
                }
            }
        }
    }
}

/// <reference path="./java.nio.Buffer.d.ts" />
/// <reference path="./java.nio.FloatBuffer.d.ts" />
/// <reference path="./java.nio.IntBuffer.d.ts" />
declare module javax {
    export module microedition {
        export module khronos {
            export module opengles {
                export class GL10 extends javalangObject implements javax.microedition.khronos.opengles.GL {
                    /**
                     * Constructs a new instance of the javax.microedition.khronos.opengles.GL10 interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        glActiveTexture(param0: number): void;
                        glAlphaFunc(param0: number, param1: number): void;
                        glAlphaFuncx(param0: number, param1: number): void;
                        glBindTexture(param0: number, param1: number): void;
                        glBlendFunc(param0: number, param1: number): void;
                        glClear(param0: number): void;
                        glClearColor(param0: number, param1: number, param2: number, param3: number): void;
                        glClearColorx(param0: number, param1: number, param2: number, param3: number): void;
                        glClearDepthf(param0: number): void;
                        glClearDepthx(param0: number): void;
                        glClearStencil(param0: number): void;
                        glClientActiveTexture(param0: number): void;
                        glColor4f(param0: number, param1: number, param2: number, param3: number): void;
                        glColor4x(param0: number, param1: number, param2: number, param3: number): void;
                        glColorMask(param0: boolean, param1: boolean, param2: boolean, param3: boolean): void;
                        glColorPointer(param0: number, param1: number, param2: number, param3: javanioBuffer): void;
                        glCompressedTexImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: javanioBuffer): void;
                        glCompressedTexSubImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: javanioBuffer): void;
                        glCopyTexImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
                        glCopyTexSubImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
                        glCullFace(param0: number): void;
                        glDeleteTextures(param0: number, param1: native.Array<number>, param2: number): void;
                        glDeleteTextures(param0: number, param1: javanioIntBuffer): void;
                        glDepthFunc(param0: number): void;
                        glDepthMask(param0: boolean): void;
                        glDepthRangef(param0: number, param1: number): void;
                        glDepthRangex(param0: number, param1: number): void;
                        glDisable(param0: number): void;
                        glDisableClientState(param0: number): void;
                        glDrawArrays(param0: number, param1: number, param2: number): void;
                        glDrawElements(param0: number, param1: number, param2: number, param3: javanioBuffer): void;
                        glEnable(param0: number): void;
                        glEnableClientState(param0: number): void;
                        glFinish(): void;
                        glFlush(): void;
                        glFogf(param0: number, param1: number): void;
                        glFogfv(param0: number, param1: native.Array<number>, param2: number): void;
                        glFogfv(param0: number, param1: javanioFloatBuffer): void;
                        glFogx(param0: number, param1: number): void;
                        glFogxv(param0: number, param1: native.Array<number>, param2: number): void;
                        glFogxv(param0: number, param1: javanioIntBuffer): void;
                        glFrontFace(param0: number): void;
                        glFrustumf(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
                        glFrustumx(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
                        glGenTextures(param0: number, param1: native.Array<number>, param2: number): void;
                        glGenTextures(param0: number, param1: javanioIntBuffer): void;
                        glGetError(): number;
                        glGetIntegerv(param0: number, param1: native.Array<number>, param2: number): void;
                        glGetIntegerv(param0: number, param1: javanioIntBuffer): void;
                        glGetString(param0: number): string;
                        glHint(param0: number, param1: number): void;
                        glLightModelf(param0: number, param1: number): void;
                        glLightModelfv(param0: number, param1: native.Array<number>, param2: number): void;
                        glLightModelfv(param0: number, param1: javanioFloatBuffer): void;
                        glLightModelx(param0: number, param1: number): void;
                        glLightModelxv(param0: number, param1: native.Array<number>, param2: number): void;
                        glLightModelxv(param0: number, param1: javanioIntBuffer): void;
                        glLightf(param0: number, param1: number, param2: number): void;
                        glLightfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glLightfv(param0: number, param1: number, param2: javanioFloatBuffer): void;
                        glLightx(param0: number, param1: number, param2: number): void;
                        glLightxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glLightxv(param0: number, param1: number, param2: javanioIntBuffer): void;
                        glLineWidth(param0: number): void;
                        glLineWidthx(param0: number): void;
                        glLoadIdentity(): void;
                        glLoadMatrixf(param0: native.Array<number>, param1: number): void;
                        glLoadMatrixf(param0: javanioFloatBuffer): void;
                        glLoadMatrixx(param0: native.Array<number>, param1: number): void;
                        glLoadMatrixx(param0: javanioIntBuffer): void;
                        glLogicOp(param0: number): void;
                        glMaterialf(param0: number, param1: number, param2: number): void;
                        glMaterialfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glMaterialfv(param0: number, param1: number, param2: javanioFloatBuffer): void;
                        glMaterialx(param0: number, param1: number, param2: number): void;
                        glMaterialxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glMaterialxv(param0: number, param1: number, param2: javanioIntBuffer): void;
                        glMatrixMode(param0: number): void;
                        glMultMatrixf(param0: native.Array<number>, param1: number): void;
                        glMultMatrixf(param0: javanioFloatBuffer): void;
                        glMultMatrixx(param0: native.Array<number>, param1: number): void;
                        glMultMatrixx(param0: javanioIntBuffer): void;
                        glMultiTexCoord4f(param0: number, param1: number, param2: number, param3: number, param4: number): void;
                        glMultiTexCoord4x(param0: number, param1: number, param2: number, param3: number, param4: number): void;
                        glNormal3f(param0: number, param1: number, param2: number): void;
                        glNormal3x(param0: number, param1: number, param2: number): void;
                        glNormalPointer(param0: number, param1: number, param2: javanioBuffer): void;
                        glOrthof(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
                        glOrthox(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
                        glPixelStorei(param0: number, param1: number): void;
                        glPointSize(param0: number): void;
                        glPointSizex(param0: number): void;
                        glPolygonOffset(param0: number, param1: number): void;
                        glPolygonOffsetx(param0: number, param1: number): void;
                        glPopMatrix(): void;
                        glPushMatrix(): void;
                        glReadPixels(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: javanioBuffer): void;
                        glRotatef(param0: number, param1: number, param2: number, param3: number): void;
                        glRotatex(param0: number, param1: number, param2: number, param3: number): void;
                        glSampleCoverage(param0: number, param1: boolean): void;
                        glSampleCoveragex(param0: number, param1: boolean): void;
                        glScalef(param0: number, param1: number, param2: number): void;
                        glScalex(param0: number, param1: number, param2: number): void;
                        glScissor(param0: number, param1: number, param2: number, param3: number): void;
                        glShadeModel(param0: number): void;
                        glStencilFunc(param0: number, param1: number, param2: number): void;
                        glStencilMask(param0: number): void;
                        glStencilOp(param0: number, param1: number, param2: number): void;
                        glTexCoordPointer(param0: number, param1: number, param2: number, param3: javanioBuffer): void;
                        glTexEnvf(param0: number, param1: number, param2: number): void;
                        glTexEnvfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glTexEnvfv(param0: number, param1: number, param2: javanioFloatBuffer): void;
                        glTexEnvx(param0: number, param1: number, param2: number): void;
                        glTexEnvxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glTexEnvxv(param0: number, param1: number, param2: javanioIntBuffer): void;
                        glTexImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: javanioBuffer): void;
                        glTexParameterf(param0: number, param1: number, param2: number): void;
                        glTexParameterx(param0: number, param1: number, param2: number): void;
                        glTexSubImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: javanioBuffer): void;
                        glTranslatef(param0: number, param1: number, param2: number): void;
                        glTranslatex(param0: number, param1: number, param2: number): void;
                        glVertexPointer(param0: number, param1: number, param2: number, param3: javanioBuffer): void;
                        glViewport(param0: number, param1: number, param2: number, param3: number): void;
                    });

                    public static GL_CULL_FACE: number;
                    public static GL_TEXTURE_ENV_COLOR: number;
                    public static GL_MAX_PROJECTION_STACK_DEPTH: number;
                    public static GL_LINE_STRIP: number;
                    public static GL_LUMINANCE: number;
                    public static GL_TRUE: number;
                    public static GL_DEPTH_TEST: number;
                    public static GL_INVALID_OPERATION: number;
                    public static GL_DST_COLOR: number;
                    public static GL_LESS: number;
                    public static GL_TEXTURE_COORD_ARRAY: number;
                    public static GL_NO_ERROR: number;
                    public static GL_FRONT_AND_BACK: number;
                    public static GL_SET: number;
                    public static GL_COPY: number;
                    public static GL_TEXTURE_WRAP_T: number;
                    public static GL_TEXTURE_WRAP_S: number;
                    public static GL_ONE: number;
                    public static GL_FOG_HINT: number;
                    public static GL_LUMINANCE_ALPHA: number;
                    public static GL_PALETTE8_RGBA4_OES: number;
                    public static GL_XOR: number;
                    public static GL_SPOT_CUTOFF: number;
                    public static GL_QUADRATIC_ATTENUATION: number;
                    public static GL_DECAL: number;
                    public static GL_REPLACE: number;
                    public static GL_GREATER: number;
                    public static GL_FLAT: number;
                    public static GL_KEEP: number;
                    public static GL_LINEAR_MIPMAP_NEAREST: number;
                    public static GL_EXP2: number;
                    public static GL_ONE_MINUS_SRC_COLOR: number;
                    public static GL_PALETTE4_RGBA8_OES: number;
                    public static GL_SCISSOR_TEST: number;
                    public static GL_ALIASED_POINT_SIZE_RANGE: number;
                    public static GL_CW: number;
                    public static GL_LEQUAL: number;
                    public static GL_ALIASED_LINE_WIDTH_RANGE: number;
                    public static GL_INVALID_ENUM: number;
                    public static GL_RED_BITS: number;
                    public static GL_CCW: number;
                    public static GL_SHORT: number;
                    public static GL_ONE_MINUS_DST_COLOR: number;
                    public static GL_GREEN_BITS: number;
                    public static GL_VENDOR: number;
                    public static GL_TEXTURE: number;
                    public static GL_ALWAYS: number;
                    public static GL_LIGHT_MODEL_AMBIENT: number;
                    public static GL_COLOR_BUFFER_BIT: number;
                    public static GL_LINE_SMOOTH_HINT: number;
                    public static GL_EXP: number;
                    public static GL_INVERT: number;
                    public static GL_NEAREST: number;
                    public static GL_ONE_MINUS_DST_ALPHA: number;
                    public static GL_COLOR_MATERIAL: number;
                    public static GL_AND_REVERSE: number;
                    public static GL_DONT_CARE: number;
                    public static GL_FALSE: number;
                    public static GL_ALPHA: number;
                    public static GL_NEVER: number;
                    public static GL_BYTE: number;
                    public static GL_ALPHA_TEST: number;
                    public static GL_AND: number;
                    public static GL_COLOR_ARRAY: number;
                    public static GL_COPY_INVERTED: number;
                    public static GL_LINE_SMOOTH: number;
                    public static GL_EQUAL: number;
                    public static GL_BACK: number;
                    public static GL_PALETTE8_RGB5_A1_OES: number;
                    public static GL_NUM_COMPRESSED_TEXTURE_FORMATS: number;
                    public static GL_TRIANGLE_STRIP: number;
                    public static GL_SAMPLE_ALPHA_TO_COVERAGE: number;
                    public static GL_ONE_MINUS_SRC_ALPHA: number;
                    public static GL_LINEAR_ATTENUATION: number;
                    public static GL_PALETTE4_RGB5_A1_OES: number;
                    public static GL_TEXTURE_ENV_MODE: number;
                    public static GL_TRIANGLES: number;
                    public static GL_AND_INVERTED: number;
                    public static GL_NORMAL_ARRAY: number;
                    public static GL_PROJECTION: number;
                    public static GL_POSITION: number;
                    public static GL_FIXED: number;
                    public static GL_DEPTH_BUFFER_BIT: number;
                    public static GL_TEXTURE_2D: number;
                    public static GL_SHININESS: number;
                    public static GL_MAX_TEXTURE_UNITS: number;
                    public static GL_OR_INVERTED: number;
                    public static GL_NOOP: number;
                    public static GL_MAX_TEXTURE_SIZE: number;
                    public static GL_PALETTE8_RGBA8_OES: number;
                    public static GL_SAMPLE_COVERAGE: number;
                    public static GL_EXTENSIONS: number;
                    public static GL_OUT_OF_MEMORY: number;
                    public static GL_LINEAR: number;
                    public static GL_RGBA: number;
                    public static GL_NEAREST_MIPMAP_LINEAR: number;
                    public static GL_UNSIGNED_SHORT_5_6_5: number;
                    public static GL_DEPTH_BITS: number;
                    public static GL_UNPACK_ALIGNMENT: number;
                    public static GL_SRC_ALPHA_SATURATE: number;
                    public static GL_SPOT_EXPONENT: number;
                    public static GL_RESCALE_NORMAL: number;
                    public static GL_VERTEX_ARRAY: number;
                    public static GL_MAX_ELEMENTS_VERTICES: number;
                    public static GL_ALPHA_BITS: number;
                    public static GL_PERSPECTIVE_CORRECTION_HINT: number;
                    public static GL_LIGHTING: number;
                    public static GL_TEXTURE20: number;
                    public static GL_MAX_VIEWPORT_DIMS: number;
                    public static GL_STACK_OVERFLOW: number;
                    public static GL_TEXTURE16: number;
                    public static GL_LIGHT_MODEL_TWO_SIDE: number;
                    public static GL_TEXTURE17: number;
                    public static GL_TEXTURE14: number;
                    public static GL_TEXTURE15: number;
                    public static GL_TEXTURE12: number;
                    public static GL_TEXTURE13: number;
                    public static GL_TEXTURE10: number;
                    public static GL_TEXTURE11: number;
                    public static GL_IMPLEMENTATION_COLOR_READ_TYPE_OES: number;
                    public static GL_TEXTURE18: number;
                    public static GL_FOG_END: number;
                    public static GL_TEXTURE19: number;
                    public static GL_UNSIGNED_SHORT_4_4_4_4: number;
                    public static GL_NEAREST_MIPMAP_NEAREST: number;
                    public static GL_TEXTURE30: number;
                    public static GL_LINEAR_MIPMAP_LINEAR: number;
                    public static GL_TEXTURE31: number;
                    public static GL_TEXTURE27: number;
                    public static GL_TEXTURE28: number;
                    public static GL_FOG_MODE: number;
                    public static GL_SPOT_DIRECTION: number;
                    public static GL_TEXTURE25: number;
                    public static GL_EMISSION: number;
                    public static GL_TEXTURE26: number;
                    public static GL_TEXTURE23: number;
                    public static GL_TEXTURE24: number;
                    public static GL_TEXTURE21: number;
                    public static GL_TEXTURE22: number;
                    public static GL_OR: number;
                    public static GL_OR_REVERSE: number;
                    public static GL_SPECULAR: number;
                    public static GL_TEXTURE29: number;
                    public static GL_STENCIL_BUFFER_BIT: number;
                    public static GL_LINE_LOOP: number;
                    public static GL_SMOOTH: number;
                    public static GL_MAX_LIGHTS: number;
                    public static GL_SAMPLE_ALPHA_TO_ONE: number;
                    public static GL_TRIANGLE_FAN: number;
                    public static GL_RENDERER: number;
                    public static GL_DIFFUSE: number;
                    public static GL_MULTISAMPLE: number;
                    public static GL_POINT_SMOOTH_HINT: number;
                    public static GL_POINT_SIZE: number;
                    public static GL_SMOOTH_LINE_WIDTH_RANGE: number;
                    public static GL_PACK_ALIGNMENT: number;
                    public static GL_REPEAT: number;
                    public static GL_PALETTE4_RGB8_OES: number;
                    public static GL_NAND: number;
                    public static GL_STENCIL_TEST: number;
                    public static GL_ZERO: number;
                    public static GL_TEXTURE0: number;
                    public static GL_DECR: number;
                    public static GL_SMOOTH_POINT_SIZE_RANGE: number;
                    public static GL_COLOR_LOGIC_OP: number;
                    public static GL_TEXTURE9: number;
                    public static GL_UNSIGNED_SHORT: number;
                    public static GL_LINES: number;
                    public static GL_CLAMP_TO_EDGE: number;
                    public static GL_POINTS: number;
                    public static GL_POINT_FADE_THRESHOLD_SIZE: number;
                    public static GL_TEXTURE3: number;
                    public static GL_TEXTURE4: number;
                    public static GL_TEXTURE1: number;
                    public static GL_TEXTURE2: number;
                    public static GL_TEXTURE7: number;
                    public static GL_TEXTURE8: number;
                    public static GL_TEXTURE5: number;
                    public static GL_TEXTURE6: number;
                    public static GL_FOG_START: number;
                    public static GL_NOTEQUAL: number;
                    public static GL_SUBPIXEL_BITS: number;
                    public static GL_POLYGON_SMOOTH_HINT: number;
                    public static GL_SRC_COLOR: number;
                    public static GL_AMBIENT: number;
                    public static GL_FRONT: number;
                    public static GL_TEXTURE_ENV: number;
                    public static GL_FOG: number;
                    public static GL_STENCIL_BITS: number;
                    public static GL_UNSIGNED_SHORT_5_5_5_1: number;
                    public static GL_RGB: number;
                    public static GL_NOR: number;
                    public static GL_CLEAR: number;
                    public static GL_MODELVIEW: number;
                    public static GL_PALETTE4_R5_G6_B5_OES: number;
                    public static GL_MAX_MODELVIEW_STACK_DEPTH: number;
                    public static GL_IMPLEMENTATION_COLOR_READ_FORMAT_OES: number;
                    public static GL_FOG_COLOR: number;
                    public static GL_EQUIV: number;
                    public static GL_FASTEST: number;
                    public static GL_SRC_ALPHA: number;
                    public static GL_BLEND: number;
                    public static GL_PALETTE8_R5_G6_B5_OES: number;
                    public static GL_POINT_SMOOTH: number;
                    public static GL_PALETTE8_RGB8_OES: number;
                    public static GL_CONSTANT_ATTENUATION: number;
                    public static GL_MAX_ELEMENTS_INDICES: number;
                    public static GL_PALETTE4_RGBA4_OES: number;
                    public static GL_INCR: number;
                    public static GL_POLYGON_OFFSET_FILL: number;
                    public static GL_INVALID_VALUE: number;
                    public static GL_LIGHT3: number;
                    public static GL_LIGHT2: number;
                    public static GL_LIGHT1: number;
                    public static GL_LIGHT0: number;
                    public static GL_NORMALIZE: number;
                    public static GL_LIGHT7: number;
                    public static GL_LIGHT6: number;
                    public static GL_BLUE_BITS: number;
                    public static GL_LIGHT5: number;
                    public static GL_AMBIENT_AND_DIFFUSE: number;
                    public static GL_LIGHT4: number;
                    public static GL_FLOAT: number;
                    public static GL_GEQUAL: number;
                    public static GL_TEXTURE_MIN_FILTER: number;
                    public static GL_NICEST: number;
                    public static GL_UNSIGNED_BYTE: number;
                    public static GL_TEXTURE_MAG_FILTER: number;
                    public static GL_VERSION: number;
                    public static GL_ADD: number;
                    public static GL_STACK_UNDERFLOW: number;
                    public static GL_FOG_DENSITY: number;
                    public static GL_DITHER: number;
                    public static GL_MAX_TEXTURE_STACK_DEPTH: number;
                    public static GL_MODULATE: number;
                    public static GL_DST_ALPHA: number;
                    public static GL_COMPRESSED_TEXTURE_FORMATS: number;

                    public glEnableClientState(param0: number): void;

                    public glLoadMatrixx(param0: native.Array<number>, param1: number): void;

                    public glMaterialxv(param0: number, param1: number, param2: javanioIntBuffer): void;

                    public glPushMatrix(): void;

                    public glScalex(param0: number, param1: number, param2: number): void;

                    public glLightModelfv(param0: number, param1: javanioFloatBuffer): void;

                    public glTexEnvx(param0: number, param1: number, param2: number): void;

                    public glCopyTexSubImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;

                    public glMultiTexCoord4x(param0: number, param1: number, param2: number, param3: number, param4: number): void;

                    public glPolygonOffsetx(param0: number, param1: number): void;

                    public glViewport(param0: number, param1: number, param2: number, param3: number): void;

                    public glCompressedTexImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: javanioBuffer): void;

                    public glLineWidthx(param0: number): void;

                    public glPopMatrix(): void;

                    public glFogfv(param0: number, param1: native.Array<number>, param2: number): void;

                    public glHint(param0: number, param1: number): void;

                    public glOrthof(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

                    public glShadeModel(param0: number): void;

                    public glFinish(): void;

                    public glGetIntegerv(param0: number, param1: javanioIntBuffer): void;

                    public glTexEnvfv(param0: number, param1: number, param2: javanioFloatBuffer): void;

                    public glTexParameterf(param0: number, param1: number, param2: number): void;

                    public glScalef(param0: number, param1: number, param2: number): void;

                    public glLightfv(param0: number, param1: number, param2: javanioFloatBuffer): void;

                    public glTexEnvf(param0: number, param1: number, param2: number): void;

                    public glClearDepthx(param0: number): void;

                    public glActiveTexture(param0: number): void;

                    public glTexParameterx(param0: number, param1: number, param2: number): void;

                    public glTexSubImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: javanioBuffer): void;

                    public glVertexPointer(param0: number, param1: number, param2: number, param3: javanioBuffer): void;

                    public glBindTexture(param0: number, param1: number): void;

                    public glFrontFace(param0: number): void;

                    public glTexEnvxv(param0: number, param1: number, param2: javanioIntBuffer): void;

                    public glLoadMatrixf(param0: native.Array<number>, param1: number): void;

                    public glClearDepthf(param0: number): void;

                    public glCullFace(param0: number): void;

                    public glLightxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glClear(param0: number): void;

                    public glMultiTexCoord4f(param0: number, param1: number, param2: number, param3: number, param4: number): void;

                    public glOrthox(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

                    public glLightModelf(param0: number, param1: number): void;

                    public glGetError(): number;

                    public glGenTextures(param0: number, param1: native.Array<number>, param2: number): void;

                    public glClearStencil(param0: number): void;

                    public glFogfv(param0: number, param1: javanioFloatBuffer): void;

                    public glClientActiveTexture(param0: number): void;

                    public glSampleCoverage(param0: number, param1: boolean): void;

                    public glDisableClientState(param0: number): void;

                    public glLightfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glMatrixMode(param0: number): void;

                    public glLightModelxv(param0: number, param1: native.Array<number>, param2: number): void;

                    public glColorMask(param0: boolean, param1: boolean, param2: boolean, param3: boolean): void;

                    public glReadPixels(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: javanioBuffer): void;

                    public glPointSizex(param0: number): void;

                    public glRotatef(param0: number, param1: number, param2: number, param3: number): void;

                    public glLightModelx(param0: number, param1: number): void;

                    public glDrawElements(param0: number, param1: number, param2: number, param3: javanioBuffer): void;

                    public glMaterialf(param0: number, param1: number, param2: number): void;

                    public glNormal3x(param0: number, param1: number, param2: number): void;

                    public glTranslatef(param0: number, param1: number, param2: number): void;

                    public glCompressedTexSubImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: javanioBuffer): void;

                    public glRotatex(param0: number, param1: number, param2: number, param3: number): void;

                    public glAlphaFunc(param0: number, param1: number): void;

                    public glLogicOp(param0: number): void;

                    public glTexEnvfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glMultMatrixx(param0: native.Array<number>, param1: number): void;

                    public glLightModelxv(param0: number, param1: javanioIntBuffer): void;

                    public glClearColor(param0: number, param1: number, param2: number, param3: number): void;

                    public glDeleteTextures(param0: number, param1: native.Array<number>, param2: number): void;

                    public glStencilMask(param0: number): void;

                    public glFogxv(param0: number, param1: javanioIntBuffer): void;

                    public glColor4x(param0: number, param1: number, param2: number, param3: number): void;

                    public glFlush(): void;

                    public glTexCoordPointer(param0: number, param1: number, param2: number, param3: javanioBuffer): void;

                    public glDepthMask(param0: boolean): void;

                    public glGenTextures(param0: number, param1: javanioIntBuffer): void;

                    public glDepthRangef(param0: number, param1: number): void;

                    public glStencilOp(param0: number, param1: number, param2: number): void;

                    public glLightx(param0: number, param1: number, param2: number): void;

                    public glDeleteTextures(param0: number, param1: javanioIntBuffer): void;

                    public glPixelStorei(param0: number, param1: number): void;

                    public glEnable(param0: number): void;

                    public glTexEnvxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glLoadMatrixf(param0: javanioFloatBuffer): void;

                    public glLightModelfv(param0: number, param1: native.Array<number>, param2: number): void;

                    public glGetIntegerv(param0: number, param1: native.Array<number>, param2: number): void;

                    public glFogf(param0: number, param1: number): void;

                    public glDepthFunc(param0: number): void;

                    public glStencilFunc(param0: number, param1: number, param2: number): void;

                    public glClearColorx(param0: number, param1: number, param2: number, param3: number): void;

                    public glSampleCoveragex(param0: number, param1: boolean): void;

                    public glMultMatrixf(param0: native.Array<number>, param1: number): void;

                    public glPointSize(param0: number): void;

                    public glLightf(param0: number, param1: number, param2: number): void;

                    public glMaterialxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glScissor(param0: number, param1: number, param2: number, param3: number): void;

                    public glDisable(param0: number): void;

                    public glGetString(param0: number): string;

                    public glDrawArrays(param0: number, param1: number, param2: number): void;

                    public glLineWidth(param0: number): void;

                    public glLightxv(param0: number, param1: number, param2: javanioIntBuffer): void;

                    public glColorPointer(param0: number, param1: number, param2: number, param3: javanioBuffer): void;

                    public glLoadIdentity(): void;

                    public glMaterialfv(param0: number, param1: number, param2: javanioFloatBuffer): void;

                    public glNormalPointer(param0: number, param1: number, param2: javanioBuffer): void;

                    public glBlendFunc(param0: number, param1: number): void;

                    public glLoadMatrixx(param0: javanioIntBuffer): void;

                    public glColor4f(param0: number, param1: number, param2: number, param3: number): void;

                    public glMaterialfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glCopyTexImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;

                    public glDepthRangex(param0: number, param1: number): void;

                    public glMultMatrixx(param0: javanioIntBuffer): void;

                    public glPolygonOffset(param0: number, param1: number): void;

                    public glTexImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: javanioBuffer): void;

                    public glTranslatex(param0: number, param1: number, param2: number): void;

                    public glFogxv(param0: number, param1: native.Array<number>, param2: number): void;

                    public glNormal3f(param0: number, param1: number, param2: number): void;

                    public glFrustumf(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

                    public glMaterialx(param0: number, param1: number, param2: number): void;

                    public glAlphaFuncx(param0: number, param1: number): void;

                    public glFrustumx(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

                    public glFogx(param0: number, param1: number): void;

                    public glMultMatrixf(param0: javanioFloatBuffer): void;
                }
            }
        }
    }
}

/// <reference path="./java.nio.IntBuffer.d.ts" />
declare module javax {
    export module microedition {
        export module khronos {
            export module opengles {
                export class GL10Ext extends javalangObject implements javax.microedition.khronos.opengles.GL {
                    /**
                     * Constructs a new instance of the javax.microedition.khronos.opengles.GL10Ext interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        glQueryMatrixxOES(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number): number;
                        glQueryMatrixxOES(param0: javanioIntBuffer, param1: javanioIntBuffer): number;
                    });

                    public glQueryMatrixxOES(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number): number;
                    public glQueryMatrixxOES(param0: javanioIntBuffer, param1: javanioIntBuffer): number;
                }
            }
        }
    }
}

/// <reference path="./java.nio.Buffer.d.ts" />
/// <reference path="./java.nio.FloatBuffer.d.ts" />
/// <reference path="./java.nio.IntBuffer.d.ts" />
declare module javax {
    export module microedition {
        export module khronos {
            export module opengles {
                export class GL11 extends javalangObject implements javax.microedition.khronos.opengles.GL10 {
                    /**
                     * Constructs a new instance of the javax.microedition.khronos.opengles.GL11 interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        glGetPointerv(param0: number, param1: native.Array<javanioBuffer>): void;
                        glBindBuffer(param0: number, param1: number): void;
                        glBufferData(param0: number, param1: number, param2: javanioBuffer, param3: number): void;
                        glBufferSubData(param0: number, param1: number, param2: number, param3: javanioBuffer): void;
                        glClipPlanef(param0: number, param1: native.Array<number>, param2: number): void;
                        glClipPlanef(param0: number, param1: javanioFloatBuffer): void;
                        glClipPlanex(param0: number, param1: native.Array<number>, param2: number): void;
                        glClipPlanex(param0: number, param1: javanioIntBuffer): void;
                        glColor4ub(param0: number, param1: number, param2: number, param3: number): void;
                        glColorPointer(param0: number, param1: number, param2: number, param3: number): void;
                        glDeleteBuffers(param0: number, param1: native.Array<number>, param2: number): void;
                        glDeleteBuffers(param0: number, param1: javanioIntBuffer): void;
                        glDrawElements(param0: number, param1: number, param2: number, param3: number): void;
                        glGenBuffers(param0: number, param1: native.Array<number>, param2: number): void;
                        glGenBuffers(param0: number, param1: javanioIntBuffer): void;
                        glGetBooleanv(param0: number, param1: native.Array<boolean>, param2: number): void;
                        glGetBooleanv(param0: number, param1: javanioIntBuffer): void;
                        glGetBufferParameteriv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glGetBufferParameteriv(param0: number, param1: number, param2: javanioIntBuffer): void;
                        glGetClipPlanef(param0: number, param1: native.Array<number>, param2: number): void;
                        glGetClipPlanef(param0: number, param1: javanioFloatBuffer): void;
                        glGetClipPlanex(param0: number, param1: native.Array<number>, param2: number): void;
                        glGetClipPlanex(param0: number, param1: javanioIntBuffer): void;
                        glGetFixedv(param0: number, param1: native.Array<number>, param2: number): void;
                        glGetFixedv(param0: number, param1: javanioIntBuffer): void;
                        glGetFloatv(param0: number, param1: native.Array<number>, param2: number): void;
                        glGetFloatv(param0: number, param1: javanioFloatBuffer): void;
                        glGetLightfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glGetLightfv(param0: number, param1: number, param2: javanioFloatBuffer): void;
                        glGetLightxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glGetLightxv(param0: number, param1: number, param2: javanioIntBuffer): void;
                        glGetMaterialfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glGetMaterialfv(param0: number, param1: number, param2: javanioFloatBuffer): void;
                        glGetMaterialxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glGetMaterialxv(param0: number, param1: number, param2: javanioIntBuffer): void;
                        glGetTexEnviv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glGetTexEnviv(param0: number, param1: number, param2: javanioIntBuffer): void;
                        glGetTexEnvxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glGetTexEnvxv(param0: number, param1: number, param2: javanioIntBuffer): void;
                        glGetTexParameterfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glGetTexParameterfv(param0: number, param1: number, param2: javanioFloatBuffer): void;
                        glGetTexParameteriv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glGetTexParameteriv(param0: number, param1: number, param2: javanioIntBuffer): void;
                        glGetTexParameterxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glGetTexParameterxv(param0: number, param1: number, param2: javanioIntBuffer): void;
                        glIsBuffer(param0: number): boolean;
                        glIsEnabled(param0: number): boolean;
                        glIsTexture(param0: number): boolean;
                        glNormalPointer(param0: number, param1: number, param2: number): void;
                        glPointParameterf(param0: number, param1: number): void;
                        glPointParameterfv(param0: number, param1: native.Array<number>, param2: number): void;
                        glPointParameterfv(param0: number, param1: javanioFloatBuffer): void;
                        glPointParameterx(param0: number, param1: number): void;
                        glPointParameterxv(param0: number, param1: native.Array<number>, param2: number): void;
                        glPointParameterxv(param0: number, param1: javanioIntBuffer): void;
                        glPointSizePointerOES(param0: number, param1: number, param2: javanioBuffer): void;
                        glTexCoordPointer(param0: number, param1: number, param2: number, param3: number): void;
                        glTexEnvi(param0: number, param1: number, param2: number): void;
                        glTexEnviv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glTexEnviv(param0: number, param1: number, param2: javanioIntBuffer): void;
                        glTexParameterfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glTexParameterfv(param0: number, param1: number, param2: javanioFloatBuffer): void;
                        glTexParameteri(param0: number, param1: number, param2: number): void;
                        glTexParameteriv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glTexParameteriv(param0: number, param1: number, param2: javanioIntBuffer): void;
                        glTexParameterxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glTexParameterxv(param0: number, param1: number, param2: javanioIntBuffer): void;
                        glVertexPointer(param0: number, param1: number, param2: number, param3: number): void;
                        glActiveTexture(param0: number): void;
                        glAlphaFunc(param0: number, param1: number): void;
                        glAlphaFuncx(param0: number, param1: number): void;
                        glBindTexture(param0: number, param1: number): void;
                        glBlendFunc(param0: number, param1: number): void;
                        glClear(param0: number): void;
                        glClearColor(param0: number, param1: number, param2: number, param3: number): void;
                        glClearColorx(param0: number, param1: number, param2: number, param3: number): void;
                        glClearDepthf(param0: number): void;
                        glClearDepthx(param0: number): void;
                        glClearStencil(param0: number): void;
                        glClientActiveTexture(param0: number): void;
                        glColor4f(param0: number, param1: number, param2: number, param3: number): void;
                        glColor4x(param0: number, param1: number, param2: number, param3: number): void;
                        glColorMask(param0: boolean, param1: boolean, param2: boolean, param3: boolean): void;
                        glColorPointer(param0: number, param1: number, param2: number, param3: javanioBuffer): void;
                        glCompressedTexImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: javanioBuffer): void;
                        glCompressedTexSubImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: javanioBuffer): void;
                        glCopyTexImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
                        glCopyTexSubImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
                        glCullFace(param0: number): void;
                        glDeleteTextures(param0: number, param1: native.Array<number>, param2: number): void;
                        glDeleteTextures(param0: number, param1: javanioIntBuffer): void;
                        glDepthFunc(param0: number): void;
                        glDepthMask(param0: boolean): void;
                        glDepthRangef(param0: number, param1: number): void;
                        glDepthRangex(param0: number, param1: number): void;
                        glDisable(param0: number): void;
                        glDisableClientState(param0: number): void;
                        glDrawArrays(param0: number, param1: number, param2: number): void;
                        glDrawElements(param0: number, param1: number, param2: number, param3: javanioBuffer): void;
                        glEnable(param0: number): void;
                        glEnableClientState(param0: number): void;
                        glFinish(): void;
                        glFlush(): void;
                        glFogf(param0: number, param1: number): void;
                        glFogfv(param0: number, param1: native.Array<number>, param2: number): void;
                        glFogfv(param0: number, param1: javanioFloatBuffer): void;
                        glFogx(param0: number, param1: number): void;
                        glFogxv(param0: number, param1: native.Array<number>, param2: number): void;
                        glFogxv(param0: number, param1: javanioIntBuffer): void;
                        glFrontFace(param0: number): void;
                        glFrustumf(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
                        glFrustumx(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
                        glGenTextures(param0: number, param1: native.Array<number>, param2: number): void;
                        glGenTextures(param0: number, param1: javanioIntBuffer): void;
                        glGetError(): number;
                        glGetIntegerv(param0: number, param1: native.Array<number>, param2: number): void;
                        glGetIntegerv(param0: number, param1: javanioIntBuffer): void;
                        glGetString(param0: number): string;
                        glHint(param0: number, param1: number): void;
                        glLightModelf(param0: number, param1: number): void;
                        glLightModelfv(param0: number, param1: native.Array<number>, param2: number): void;
                        glLightModelfv(param0: number, param1: javanioFloatBuffer): void;
                        glLightModelx(param0: number, param1: number): void;
                        glLightModelxv(param0: number, param1: native.Array<number>, param2: number): void;
                        glLightModelxv(param0: number, param1: javanioIntBuffer): void;
                        glLightf(param0: number, param1: number, param2: number): void;
                        glLightfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glLightfv(param0: number, param1: number, param2: javanioFloatBuffer): void;
                        glLightx(param0: number, param1: number, param2: number): void;
                        glLightxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glLightxv(param0: number, param1: number, param2: javanioIntBuffer): void;
                        glLineWidth(param0: number): void;
                        glLineWidthx(param0: number): void;
                        glLoadIdentity(): void;
                        glLoadMatrixf(param0: native.Array<number>, param1: number): void;
                        glLoadMatrixf(param0: javanioFloatBuffer): void;
                        glLoadMatrixx(param0: native.Array<number>, param1: number): void;
                        glLoadMatrixx(param0: javanioIntBuffer): void;
                        glLogicOp(param0: number): void;
                        glMaterialf(param0: number, param1: number, param2: number): void;
                        glMaterialfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glMaterialfv(param0: number, param1: number, param2: javanioFloatBuffer): void;
                        glMaterialx(param0: number, param1: number, param2: number): void;
                        glMaterialxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glMaterialxv(param0: number, param1: number, param2: javanioIntBuffer): void;
                        glMatrixMode(param0: number): void;
                        glMultMatrixf(param0: native.Array<number>, param1: number): void;
                        glMultMatrixf(param0: javanioFloatBuffer): void;
                        glMultMatrixx(param0: native.Array<number>, param1: number): void;
                        glMultMatrixx(param0: javanioIntBuffer): void;
                        glMultiTexCoord4f(param0: number, param1: number, param2: number, param3: number, param4: number): void;
                        glMultiTexCoord4x(param0: number, param1: number, param2: number, param3: number, param4: number): void;
                        glNormal3f(param0: number, param1: number, param2: number): void;
                        glNormal3x(param0: number, param1: number, param2: number): void;
                        glNormalPointer(param0: number, param1: number, param2: javanioBuffer): void;
                        glOrthof(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
                        glOrthox(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
                        glPixelStorei(param0: number, param1: number): void;
                        glPointSize(param0: number): void;
                        glPointSizex(param0: number): void;
                        glPolygonOffset(param0: number, param1: number): void;
                        glPolygonOffsetx(param0: number, param1: number): void;
                        glPopMatrix(): void;
                        glPushMatrix(): void;
                        glReadPixels(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: javanioBuffer): void;
                        glRotatef(param0: number, param1: number, param2: number, param3: number): void;
                        glRotatex(param0: number, param1: number, param2: number, param3: number): void;
                        glSampleCoverage(param0: number, param1: boolean): void;
                        glSampleCoveragex(param0: number, param1: boolean): void;
                        glScalef(param0: number, param1: number, param2: number): void;
                        glScalex(param0: number, param1: number, param2: number): void;
                        glScissor(param0: number, param1: number, param2: number, param3: number): void;
                        glShadeModel(param0: number): void;
                        glStencilFunc(param0: number, param1: number, param2: number): void;
                        glStencilMask(param0: number): void;
                        glStencilOp(param0: number, param1: number, param2: number): void;
                        glTexCoordPointer(param0: number, param1: number, param2: number, param3: javanioBuffer): void;
                        glTexEnvf(param0: number, param1: number, param2: number): void;
                        glTexEnvfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glTexEnvfv(param0: number, param1: number, param2: javanioFloatBuffer): void;
                        glTexEnvx(param0: number, param1: number, param2: number): void;
                        glTexEnvxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glTexEnvxv(param0: number, param1: number, param2: javanioIntBuffer): void;
                        glTexImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: javanioBuffer): void;
                        glTexParameterf(param0: number, param1: number, param2: number): void;
                        glTexParameterx(param0: number, param1: number, param2: number): void;
                        glTexSubImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: javanioBuffer): void;
                        glTranslatef(param0: number, param1: number, param2: number): void;
                        glTranslatex(param0: number, param1: number, param2: number): void;
                        glVertexPointer(param0: number, param1: number, param2: number, param3: javanioBuffer): void;
                        glViewport(param0: number, param1: number, param2: number, param3: number): void;
                    });

                    public static GL_COLOR_ARRAY_POINTER: number;
                    public static GL_PREVIOUS: number;
                    public static GL_CULL_FACE: number;
                    public static GL_TEXTURE_ENV_COLOR: number;
                    public static GL_STENCIL_PASS_DEPTH_PASS: number;
                    public static GL_MAX_PROJECTION_STACK_DEPTH: number;
                    public static GL_PRIMARY_COLOR: number;
                    public static GL_LINE_STRIP: number;
                    public static GL_LUMINANCE: number;
                    public static GL_TRUE: number;
                    public static GL_DEPTH_TEST: number;
                    public static GL_INVALID_OPERATION: number;
                    public static GL_VERTEX_ARRAY_SIZE: number;
                    public static GL_DST_COLOR: number;
                    public static GL_VIEWPORT: number;
                    public static GL_LESS: number;
                    public static GL_POLYGON_OFFSET_FACTOR: number;
                    public static GL_TEXTURE_COORD_ARRAY: number;
                    public static GL_POINT_SIZE_ARRAY_POINTER_OES: number;
                    public static GL_OPERAND0_RGB: number;
                    public static GL_NO_ERROR: number;
                    public static GL_SRC2_RGB: number;
                    public static GL_FRONT_AND_BACK: number;
                    public static GL_INTERPOLATE: number;
                    public static GL_STENCIL_VALUE_MASK: number;
                    public static GL_POINT_SIZE_ARRAY_BUFFER_BINDING_OES: number;
                    public static GL_SET: number;
                    public static GL_CURRENT_TEXTURE_COORDS: number;
                    public static GL_COPY: number;
                    public static GL_DEPTH_CLEAR_VALUE: number;
                    public static GL_TEXTURE_WRAP_T: number;
                    public static GL_TEXTURE_WRAP_S: number;
                    public static GL_ONE: number;
                    public static GL_FOG_HINT: number;
                    public static GL_LUMINANCE_ALPHA: number;
                    public static GL_PALETTE8_RGBA4_OES: number;
                    public static GL_XOR: number;
                    public static GL_SPOT_CUTOFF: number;
                    public static GL_QUADRATIC_ATTENUATION: number;
                    public static GL_DECAL: number;
                    public static GL_CURRENT_COLOR: number;
                    public static GL_REPLACE: number;
                    public static GL_GREATER: number;
                    public static GL_ELEMENT_ARRAY_BUFFER: number;
                    public static GL_DEPTH_FUNC: number;
                    public static GL_FLAT: number;
                    public static GL_KEEP: number;
                    public static GL_LINEAR_MIPMAP_NEAREST: number;
                    public static GL_EXP2: number;
                    public static GL_ONE_MINUS_SRC_COLOR: number;
                    public static GL_PALETTE4_RGBA8_OES: number;
                    public static GL_ARRAY_BUFFER_BINDING: number;
                    public static GL_SCISSOR_TEST: number;
                    public static GL_ALIASED_POINT_SIZE_RANGE: number;
                    public static GL_CW: number;
                    public static GL_LEQUAL: number;
                    public static GL_ALIASED_LINE_WIDTH_RANGE: number;
                    public static GL_INVALID_ENUM: number;
                    public static GL_RED_BITS: number;
                    public static GL_CCW: number;
                    public static GL_SHORT: number;
                    public static GL_POINT_SIZE_MAX: number;
                    public static GL_ONE_MINUS_DST_COLOR: number;
                    public static GL_GREEN_BITS: number;
                    public static GL_VENDOR: number;
                    public static GL_NORMAL_ARRAY_BUFFER_BINDING: number;
                    public static GL_TEXTURE: number;
                    public static GL_COLOR_ARRAY_SIZE: number;
                    public static GL_ALWAYS: number;
                    public static GL_LIGHT_MODEL_AMBIENT: number;
                    public static GL_COLOR_BUFFER_BIT: number;
                    public static GL_LINE_SMOOTH_HINT: number;
                    public static GL_SRC2_ALPHA: number;
                    public static GL_EXP: number;
                    public static GL_MODELVIEW_STACK_DEPTH: number;
                    public static GL_STENCIL_REF: number;
                    public static GL_INVERT: number;
                    public static GL_NEAREST: number;
                    public static GL_ONE_MINUS_DST_ALPHA: number;
                    public static GL_COLOR_MATERIAL: number;
                    public static GL_CURRENT_NORMAL: number;
                    public static GL_AND_REVERSE: number;
                    public static GL_TEXTURE_COORD_ARRAY_POINTER: number;
                    public static GL_SAMPLE_COVERAGE_VALUE: number;
                    public static GL_CLIP_PLANE0: number;
                    public static GL_DONT_CARE: number;
                    public static GL_CLIP_PLANE2: number;
                    public static GL_FALSE: number;
                    public static GL_CLIP_PLANE1: number;
                    public static GL_CLIP_PLANE4: number;
                    public static GL_CLIP_PLANE3: number;
                    public static GL_GENERATE_MIPMAP_HINT: number;
                    public static GL_RGB_SCALE: number;
                    public static GL_CLIP_PLANE5: number;
                    public static GL_ALPHA: number;
                    public static GL_COLOR_ARRAY_BUFFER_BINDING: number;
                    public static GL_NEVER: number;
                    public static GL_VERTEX_ARRAY_STRIDE: number;
                    public static GL_BYTE: number;
                    public static GL_ALPHA_TEST: number;
                    public static GL_AND: number;
                    public static GL_COLOR_ARRAY: number;
                    public static GL_CONSTANT: number;
                    public static GL_COPY_INVERTED: number;
                    public static GL_LINE_SMOOTH: number;
                    public static GL_COLOR_ARRAY_STRIDE: number;
                    public static GL_EQUAL: number;
                    public static GL_BUFFER_USAGE: number;
                    public static GL_BACK: number;
                    public static GL_PALETTE8_RGB5_A1_OES: number;
                    public static GL_COLOR_ARRAY_TYPE: number;
                    public static GL_NUM_COMPRESSED_TEXTURE_FORMATS: number;
                    public static GL_TRIANGLE_STRIP: number;
                    public static GL_DOT3_RGB: number;
                    public static GL_SAMPLE_ALPHA_TO_COVERAGE: number;
                    public static GL_ONE_MINUS_SRC_ALPHA: number;
                    public static GL_ELEMENT_ARRAY_BUFFER_BINDING: number;
                    public static GL_LINEAR_ATTENUATION: number;
                    public static GL_PROJECTION_MATRIX_FLOAT_AS_INT_BITS_OES: number;
                    public static GL_PALETTE4_RGB5_A1_OES: number;
                    public static GL_TEXTURE_ENV_MODE: number;
                    public static GL_ALPHA_TEST_REF: number;
                    public static GL_TRIANGLES: number;
                    public static GL_MATRIX_MODE: number;
                    public static GL_PROJECTION_MATRIX: number;
                    public static GL_SRC1_ALPHA: number;
                    public static GL_AND_INVERTED: number;
                    public static GL_NORMAL_ARRAY: number;
                    public static GL_POINT_SIZE_ARRAY_TYPE_OES: number;
                    public static GL_PROJECTION: number;
                    public static GL_ARRAY_BUFFER: number;
                    public static GL_POSITION: number;
                    public static GL_FIXED: number;
                    public static GL_POINT_DISTANCE_ATTENUATION: number;
                    public static GL_DEPTH_BUFFER_BIT: number;
                    public static GL_TEXTURE_COORD_ARRAY_BUFFER_BINDING: number;
                    public static GL_TEXTURE_2D: number;
                    public static GL_VERTEX_ARRAY_TYPE: number;
                    public static GL_SHININESS: number;
                    public static GL_MAX_TEXTURE_UNITS: number;
                    public static GL_OR_INVERTED: number;
                    public static GL_NOOP: number;
                    public static GL_VERTEX_ARRAY_BUFFER_BINDING: number;
                    public static GL_DYNAMIC_DRAW: number;
                    public static GL_MAX_TEXTURE_SIZE: number;
                    public static GL_PALETTE8_RGBA8_OES: number;
                    public static GL_SAMPLE_COVERAGE: number;
                    public static GL_EXTENSIONS: number;
                    public static GL_OUT_OF_MEMORY: number;
                    public static GL_ALPHA_SCALE: number;
                    public static GL_LINEAR: number;
                    public static GL_RGBA: number;
                    public static GL_NEAREST_MIPMAP_LINEAR: number;
                    public static GL_UNSIGNED_SHORT_5_6_5: number;
                    public static GL_COLOR_WRITEMASK: number;
                    public static GL_DEPTH_BITS: number;
                    public static GL_UNPACK_ALIGNMENT: number;
                    public static GL_SRC_ALPHA_SATURATE: number;
                    public static GL_SPOT_EXPONENT: number;
                    public static GL_RESCALE_NORMAL: number;
                    public static GL_VERTEX_ARRAY: number;
                    public static GL_ACTIVE_TEXTURE: number;
                    public static GL_MAX_ELEMENTS_VERTICES: number;
                    public static GL_TEXTURE_STACK_DEPTH: number;
                    public static GL_ALPHA_BITS: number;
                    public static GL_PERSPECTIVE_CORRECTION_HINT: number;
                    public static GL_LIGHTING: number;
                    public static GL_TEXTURE20: number;
                    public static GL_MAX_VIEWPORT_DIMS: number;
                    public static GL_DOT3_RGBA: number;
                    public static GL_STACK_OVERFLOW: number;
                    public static GL_BLEND_DST: number;
                    public static GL_TEXTURE16: number;
                    public static GL_TEXTURE_COORD_ARRAY_STRIDE: number;
                    public static GL_LIGHT_MODEL_TWO_SIDE: number;
                    public static GL_TEXTURE17: number;
                    public static GL_NORMAL_ARRAY_TYPE: number;
                    public static GL_TEXTURE14: number;
                    public static GL_TEXTURE15: number;
                    public static GL_TEXTURE12: number;
                    public static GL_TEXTURE13: number;
                    public static GL_TEXTURE10: number;
                    public static GL_SRC0_ALPHA: number;
                    public static GL_TEXTURE11: number;
                    public static GL_SUBTRACT: number;
                    public static GL_IMPLEMENTATION_COLOR_READ_TYPE_OES: number;
                    public static GL_TEXTURE18: number;
                    public static GL_COORD_REPLACE_OES: number;
                    public static GL_FOG_END: number;
                    public static GL_TEXTURE19: number;
                    public static GL_UNSIGNED_SHORT_4_4_4_4: number;
                    public static GL_BUFFER_ACCESS: number;
                    public static GL_TEXTURE_COORD_ARRAY_TYPE: number;
                    public static GL_COMBINE: number;
                    public static GL_NEAREST_MIPMAP_NEAREST: number;
                    public static GL_COLOR_CLEAR_VALUE: number;
                    public static GL_TEXTURE30: number;
                    public static GL_LINEAR_MIPMAP_LINEAR: number;
                    public static GL_TEXTURE31: number;
                    public static GL_TEXTURE27: number;
                    public static GL_MODELVIEW_MATRIX: number;
                    public static GL_TEXTURE28: number;
                    public static GL_FOG_MODE: number;
                    public static GL_SPOT_DIRECTION: number;
                    public static GL_TEXTURE25: number;
                    public static GL_EMISSION: number;
                    public static GL_TEXTURE26: number;
                    public static GL_ALPHA_TEST_FUNC: number;
                    public static GL_TEXTURE23: number;
                    public static GL_TEXTURE24: number;
                    public static GL_TEXTURE21: number;
                    public static GL_TEXTURE22: number;
                    public static GL_OR: number;
                    public static GL_OR_REVERSE: number;
                    public static GL_SRC0_RGB: number;
                    public static GL_STENCIL_PASS_DEPTH_FAIL: number;
                    public static GL_SAMPLE_COVERAGE_INVERT: number;
                    public static GL_WRITE_ONLY: number;
                    public static GL_SPECULAR: number;
                    public static GL_TEXTURE29: number;
                    public static GL_STENCIL_BUFFER_BIT: number;
                    public static GL_PROJECTION_STACK_DEPTH: number;
                    public static GL_DEPTH_WRITEMASK: number;
                    public static GL_LINE_LOOP: number;
                    public static GL_SMOOTH: number;
                    public static GL_LOGIC_OP_MODE: number;
                    public static GL_COMBINE_RGB: number;
                    public static GL_MAX_LIGHTS: number;
                    public static GL_SAMPLE_BUFFERS: number;
                    public static GL_SAMPLE_ALPHA_TO_ONE: number;
                    public static GL_NORMAL_ARRAY_POINTER: number;
                    public static GL_TRIANGLE_FAN: number;
                    public static GL_RENDERER: number;
                    public static GL_STENCIL_CLEAR_VALUE: number;
                    public static GL_DIFFUSE: number;
                    public static GL_MULTISAMPLE: number;
                    public static GL_OPERAND1_ALPHA: number;
                    public static GL_POINT_SMOOTH_HINT: number;
                    public static GL_POINT_SIZE: number;
                    public static GL_SCISSOR_BOX: number;
                    public static GL_BUFFER_SIZE: number;
                    public static GL_SMOOTH_LINE_WIDTH_RANGE: number;
                    public static GL_PACK_ALIGNMENT: number;
                    public static GL_REPEAT: number;
                    public static GL_PALETTE4_RGB8_OES: number;
                    public static GL_NAND: number;
                    public static GL_STENCIL_TEST: number;
                    public static GL_ZERO: number;
                    public static GL_TEXTURE0: number;
                    public static GL_DECR: number;
                    public static GL_SMOOTH_POINT_SIZE_RANGE: number;
                    public static GL_SHADE_MODEL: number;
                    public static GL_FRONT_FACE: number;
                    public static GL_BLEND_SRC: number;
                    public static GL_COLOR_LOGIC_OP: number;
                    public static GL_POLYGON_OFFSET_UNITS: number;
                    public static GL_MODELVIEW_MATRIX_FLOAT_AS_INT_BITS_OES: number;
                    public static GL_TEXTURE9: number;
                    public static GL_UNSIGNED_SHORT: number;
                    public static GL_OPERAND1_RGB: number;
                    public static GL_LINES: number;
                    public static GL_CLIENT_ACTIVE_TEXTURE: number;
                    public static GL_CLAMP_TO_EDGE: number;
                    public static GL_POINTS: number;
                    public static GL_POINT_FADE_THRESHOLD_SIZE: number;
                    public static GL_TEXTURE3: number;
                    public static GL_TEXTURE4: number;
                    public static GL_TEXTURE1: number;
                    public static GL_TEXTURE2: number;
                    public static GL_POINT_SIZE_ARRAY_STRIDE_OES: number;
                    public static GL_TEXTURE7: number;
                    public static GL_TEXTURE8: number;
                    public static GL_TEXTURE5: number;
                    public static GL_STATIC_DRAW: number;
                    public static GL_TEXTURE6: number;
                    public static GL_NORMAL_ARRAY_STRIDE: number;
                    public static GL_FOG_START: number;
                    public static GL_NOTEQUAL: number;
                    public static GL_SUBPIXEL_BITS: number;
                    public static GL_POLYGON_SMOOTH_HINT: number;
                    public static GL_LINE_WIDTH: number;
                    public static GL_STENCIL_FAIL: number;
                    public static GL_SRC_COLOR: number;
                    public static GL_AMBIENT: number;
                    public static GL_FRONT: number;
                    public static GL_STENCIL_WRITEMASK: number;
                    public static GL_TEXTURE_ENV: number;
                    public static GL_FOG: number;
                    public static GL_TEXTURE_BINDING_2D: number;
                    public static GL_STENCIL_BITS: number;
                    public static GL_CULL_FACE_MODE: number;
                    public static GL_UNSIGNED_SHORT_5_5_5_1: number;
                    public static GL_RGB: number;
                    public static GL_NOR: number;
                    public static GL_OPERAND0_ALPHA: number;
                    public static GL_CLEAR: number;
                    public static GL_MODELVIEW: number;
                    public static GL_PALETTE4_R5_G6_B5_OES: number;
                    public static GL_SRC1_RGB: number;
                    public static GL_MAX_MODELVIEW_STACK_DEPTH: number;
                    public static GL_IMPLEMENTATION_COLOR_READ_FORMAT_OES: number;
                    public static GL_POINT_SIZE_MIN: number;
                    public static GL_FOG_COLOR: number;
                    public static GL_EQUIV: number;
                    public static GL_FASTEST: number;
                    public static GL_ADD_SIGNED: number;
                    public static GL_SRC_ALPHA: number;
                    public static GL_COMBINE_ALPHA: number;
                    public static GL_BLEND: number;
                    public static GL_PALETTE8_R5_G6_B5_OES: number;
                    public static GL_POINT_SMOOTH: number;
                    public static GL_PALETTE8_RGB8_OES: number;
                    public static GL_CONSTANT_ATTENUATION: number;
                    public static GL_MAX_ELEMENTS_INDICES: number;
                    public static GL_TEXTURE_MATRIX_FLOAT_AS_INT_BITS_OES: number;
                    public static GL_PALETTE4_RGBA4_OES: number;
                    public static GL_INCR: number;
                    public static GL_VERTEX_ARRAY_POINTER: number;
                    public static GL_POLYGON_OFFSET_FILL: number;
                    public static GL_POINT_SPRITE_OES: number;
                    public static GL_INVALID_VALUE: number;
                    public static GL_LIGHT3: number;
                    public static GL_LIGHT2: number;
                    public static GL_LIGHT1: number;
                    public static GL_LIGHT0: number;
                    public static GL_NORMALIZE: number;
                    public static GL_LIGHT7: number;
                    public static GL_LIGHT6: number;
                    public static GL_DEPTH_RANGE: number;
                    public static GL_BLUE_BITS: number;
                    public static GL_LIGHT5: number;
                    public static GL_AMBIENT_AND_DIFFUSE: number;
                    public static GL_LIGHT4: number;
                    public static GL_FLOAT: number;
                    public static GL_MAX_CLIP_PLANES: number;
                    public static GL_TEXTURE_MATRIX: number;
                    public static GL_GEQUAL: number;
                    public static GL_TEXTURE_MIN_FILTER: number;
                    public static GL_NICEST: number;
                    public static GL_POINT_SIZE_ARRAY_OES: number;
                    public static GL_STENCIL_FUNC: number;
                    public static GL_UNSIGNED_BYTE: number;
                    public static GL_OPERAND2_RGB: number;
                    public static GL_TEXTURE_COORD_ARRAY_SIZE: number;
                    public static GL_TEXTURE_MAG_FILTER: number;
                    public static GL_VERSION: number;
                    public static GL_ADD: number;
                    public static GL_STACK_UNDERFLOW: number;
                    public static GL_FOG_DENSITY: number;
                    public static GL_DITHER: number;
                    public static GL_GENERATE_MIPMAP: number;
                    public static GL_OPERAND2_ALPHA: number;
                    public static GL_SAMPLES: number;
                    public static GL_MAX_TEXTURE_STACK_DEPTH: number;
                    public static GL_MODULATE: number;
                    public static GL_DST_ALPHA: number;
                    public static GL_COMPRESSED_TEXTURE_FORMATS: number;

                    public glEnableClientState(param0: number): void;

                    public glLoadMatrixx(param0: native.Array<number>, param1: number): void;

                    public glMaterialxv(param0: number, param1: number, param2: javanioIntBuffer): void;

                    public glPushMatrix(): void;

                    public glGetLightfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glScalex(param0: number, param1: number, param2: number): void;

                    public glTexParameterxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glLightModelfv(param0: number, param1: javanioFloatBuffer): void;

                    public glTexEnvx(param0: number, param1: number, param2: number): void;

                    public glGetTexEnvxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glCopyTexSubImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;

                    public glGetTexParameterxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glMultiTexCoord4x(param0: number, param1: number, param2: number, param3: number, param4: number): void;

                    public glPolygonOffsetx(param0: number, param1: number): void;

                    public glViewport(param0: number, param1: number, param2: number, param3: number): void;

                    public glPointParameterxv(param0: number, param1: native.Array<number>, param2: number): void;

                    public glTexParameteriv(param0: number, param1: number, param2: javanioIntBuffer): void;

                    public glCompressedTexImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: javanioBuffer): void;

                    public glLineWidthx(param0: number): void;

                    public glPopMatrix(): void;

                    public glColor4ub(param0: number, param1: number, param2: number, param3: number): void;

                    public glTexParameteriv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glFogfv(param0: number, param1: native.Array<number>, param2: number): void;

                    public glHint(param0: number, param1: number): void;

                    public glGetTexParameterfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glPointParameterxv(param0: number, param1: javanioIntBuffer): void;

                    public glGetClipPlanex(param0: number, param1: javanioIntBuffer): void;

                    public glOrthof(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

                    public glShadeModel(param0: number): void;

                    public glFinish(): void;

                    public glGetIntegerv(param0: number, param1: javanioIntBuffer): void;

                    public glPointParameterf(param0: number, param1: number): void;

                    public glTexEnvfv(param0: number, param1: number, param2: javanioFloatBuffer): void;

                    public glTexParameterf(param0: number, param1: number, param2: number): void;

                    public glScalef(param0: number, param1: number, param2: number): void;

                    public glGetTexParameteriv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glLightfv(param0: number, param1: number, param2: javanioFloatBuffer): void;

                    public glGetBufferParameteriv(param0: number, param1: number, param2: javanioIntBuffer): void;

                    public glTexEnvf(param0: number, param1: number, param2: number): void;

                    public glClipPlanef(param0: number, param1: native.Array<number>, param2: number): void;

                    public glClearDepthx(param0: number): void;

                    public glGetTexEnviv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glIsTexture(param0: number): boolean;

                    public glActiveTexture(param0: number): void;

                    public glTexParameterfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glTexParameterx(param0: number, param1: number, param2: number): void;

                    public glNormalPointer(param0: number, param1: number, param2: number): void;

                    public glTexSubImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: javanioBuffer): void;

                    public glVertexPointer(param0: number, param1: number, param2: number, param3: javanioBuffer): void;

                    public glBindTexture(param0: number, param1: number): void;

                    public glFrontFace(param0: number): void;

                    public glTexEnvxv(param0: number, param1: number, param2: javanioIntBuffer): void;

                    public glLoadMatrixf(param0: native.Array<number>, param1: number): void;

                    public glIsBuffer(param0: number): boolean;

                    public glClearDepthf(param0: number): void;

                    public glCullFace(param0: number): void;

                    public glClipPlanex(param0: number, param1: native.Array<number>, param2: number): void;

                    public glLightxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glClear(param0: number): void;

                    public glMultiTexCoord4f(param0: number, param1: number, param2: number, param3: number, param4: number): void;

                    public glOrthox(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

                    public glGetBooleanv(param0: number, param1: javanioIntBuffer): void;

                    public glLightModelf(param0: number, param1: number): void;

                    public glGetError(): number;

                    public glGenTextures(param0: number, param1: native.Array<number>, param2: number): void;

                    public glClearStencil(param0: number): void;

                    public glFogfv(param0: number, param1: javanioFloatBuffer): void;

                    public glClientActiveTexture(param0: number): void;

                    public glSampleCoverage(param0: number, param1: boolean): void;

                    public glDisableClientState(param0: number): void;

                    public glLightfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glGetMaterialxv(param0: number, param1: number, param2: javanioIntBuffer): void;

                    public glMatrixMode(param0: number): void;

                    public glPointParameterx(param0: number, param1: number): void;

                    public glLightModelxv(param0: number, param1: native.Array<number>, param2: number): void;

                    public glColorMask(param0: boolean, param1: boolean, param2: boolean, param3: boolean): void;

                    public glGetMaterialfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glGetBufferParameteriv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glReadPixels(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: javanioBuffer): void;

                    public glGetPointerv(param0: number, param1: native.Array<javanioBuffer>): void;

                    public glGetLightxv(param0: number, param1: number, param2: javanioIntBuffer): void;

                    public glPointSizex(param0: number): void;

                    public glRotatef(param0: number, param1: number, param2: number, param3: number): void;

                    public glClipPlanef(param0: number, param1: javanioFloatBuffer): void;

                    public glLightModelx(param0: number, param1: number): void;

                    public glDeleteBuffers(param0: number, param1: javanioIntBuffer): void;

                    public glGetTexEnviv(param0: number, param1: number, param2: javanioIntBuffer): void;

                    public glGetMaterialxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glDrawElements(param0: number, param1: number, param2: number, param3: javanioBuffer): void;

                    public glMaterialf(param0: number, param1: number, param2: number): void;

                    public glBindBuffer(param0: number, param1: number): void;

                    public glTexParameteri(param0: number, param1: number, param2: number): void;

                    public glNormal3x(param0: number, param1: number, param2: number): void;

                    public glTranslatef(param0: number, param1: number, param2: number): void;

                    public glCompressedTexSubImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: javanioBuffer): void;

                    public glTexParameterxv(param0: number, param1: number, param2: javanioIntBuffer): void;

                    public glRotatex(param0: number, param1: number, param2: number, param3: number): void;

                    public glTexParameterfv(param0: number, param1: number, param2: javanioFloatBuffer): void;

                    public glAlphaFunc(param0: number, param1: number): void;

                    public glLogicOp(param0: number): void;

                    public glTexEnvfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glMultMatrixx(param0: native.Array<number>, param1: number): void;

                    public glGenBuffers(param0: number, param1: javanioIntBuffer): void;

                    public glLightModelxv(param0: number, param1: javanioIntBuffer): void;

                    public glClearColor(param0: number, param1: number, param2: number, param3: number): void;

                    public glGetLightfv(param0: number, param1: number, param2: javanioFloatBuffer): void;

                    public glGetFloatv(param0: number, param1: native.Array<number>, param2: number): void;

                    public glGetFixedv(param0: number, param1: javanioIntBuffer): void;

                    public glGetTexParameteriv(param0: number, param1: number, param2: javanioIntBuffer): void;

                    public glDeleteTextures(param0: number, param1: native.Array<number>, param2: number): void;

                    public glStencilMask(param0: number): void;

                    public glFogxv(param0: number, param1: javanioIntBuffer): void;

                    public glPointParameterfv(param0: number, param1: javanioFloatBuffer): void;

                    public glBufferData(param0: number, param1: number, param2: javanioBuffer, param3: number): void;

                    public glVertexPointer(param0: number, param1: number, param2: number, param3: number): void;

                    public glColor4x(param0: number, param1: number, param2: number, param3: number): void;

                    public glGetBooleanv(param0: number, param1: native.Array<boolean>, param2: number): void;

                    public glFlush(): void;

                    public glTexCoordPointer(param0: number, param1: number, param2: number, param3: javanioBuffer): void;

                    public glGetTexEnvxv(param0: number, param1: number, param2: javanioIntBuffer): void;

                    public glDepthMask(param0: boolean): void;

                    public glGenTextures(param0: number, param1: javanioIntBuffer): void;

                    public glDepthRangef(param0: number, param1: number): void;

                    public glStencilOp(param0: number, param1: number, param2: number): void;

                    public glLightx(param0: number, param1: number, param2: number): void;

                    public glDeleteTextures(param0: number, param1: javanioIntBuffer): void;

                    public glPixelStorei(param0: number, param1: number): void;

                    public glEnable(param0: number): void;

                    public glTexEnvxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glLoadMatrixf(param0: javanioFloatBuffer): void;

                    public glPointParameterfv(param0: number, param1: native.Array<number>, param2: number): void;

                    public glGetTexParameterxv(param0: number, param1: number, param2: javanioIntBuffer): void;

                    public glGenBuffers(param0: number, param1: native.Array<number>, param2: number): void;

                    public glGetFloatv(param0: number, param1: javanioFloatBuffer): void;

                    public glLightModelfv(param0: number, param1: native.Array<number>, param2: number): void;

                    public glDrawElements(param0: number, param1: number, param2: number, param3: number): void;

                    public glTexEnviv(param0: number, param1: number, param2: javanioIntBuffer): void;

                    public glGetIntegerv(param0: number, param1: native.Array<number>, param2: number): void;

                    public glFogf(param0: number, param1: number): void;

                    public glDepthFunc(param0: number): void;

                    public glGetClipPlanef(param0: number, param1: native.Array<number>, param2: number): void;

                    public glStencilFunc(param0: number, param1: number, param2: number): void;

                    public glClearColorx(param0: number, param1: number, param2: number, param3: number): void;

                    public glSampleCoveragex(param0: number, param1: boolean): void;

                    public glMultMatrixf(param0: native.Array<number>, param1: number): void;

                    public glPointSize(param0: number): void;

                    public glLightf(param0: number, param1: number, param2: number): void;

                    public glMaterialxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glTexCoordPointer(param0: number, param1: number, param2: number, param3: number): void;

                    public glScissor(param0: number, param1: number, param2: number, param3: number): void;

                    public glDisable(param0: number): void;

                    public glGetString(param0: number): string;

                    public glColorPointer(param0: number, param1: number, param2: number, param3: number): void;

                    public glDrawArrays(param0: number, param1: number, param2: number): void;

                    public glLineWidth(param0: number): void;

                    public glGetTexParameterfv(param0: number, param1: number, param2: javanioFloatBuffer): void;

                    public glIsEnabled(param0: number): boolean;

                    public glLightxv(param0: number, param1: number, param2: javanioIntBuffer): void;

                    public glColorPointer(param0: number, param1: number, param2: number, param3: javanioBuffer): void;

                    public glLoadIdentity(): void;

                    public glMaterialfv(param0: number, param1: number, param2: javanioFloatBuffer): void;

                    public glBufferSubData(param0: number, param1: number, param2: number, param3: javanioBuffer): void;

                    public glNormalPointer(param0: number, param1: number, param2: javanioBuffer): void;

                    public glGetMaterialfv(param0: number, param1: number, param2: javanioFloatBuffer): void;

                    public glBlendFunc(param0: number, param1: number): void;

                    public glGetClipPlanex(param0: number, param1: native.Array<number>, param2: number): void;

                    public glLoadMatrixx(param0: javanioIntBuffer): void;

                    public glClipPlanex(param0: number, param1: javanioIntBuffer): void;

                    public glGetFixedv(param0: number, param1: native.Array<number>, param2: number): void;

                    public glColor4f(param0: number, param1: number, param2: number, param3: number): void;

                    public glMaterialfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glCopyTexImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;

                    public glTexEnvi(param0: number, param1: number, param2: number): void;

                    public glDepthRangex(param0: number, param1: number): void;

                    public glMultMatrixx(param0: javanioIntBuffer): void;

                    public glPolygonOffset(param0: number, param1: number): void;

                    public glTexImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: javanioBuffer): void;

                    public glGetLightxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glTexEnviv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glTranslatex(param0: number, param1: number, param2: number): void;

                    public glFogxv(param0: number, param1: native.Array<number>, param2: number): void;

                    public glNormal3f(param0: number, param1: number, param2: number): void;

                    public glPointSizePointerOES(param0: number, param1: number, param2: javanioBuffer): void;

                    public glFrustumf(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

                    public glMaterialx(param0: number, param1: number, param2: number): void;

                    public glAlphaFuncx(param0: number, param1: number): void;

                    public glFrustumx(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;

                    public glFogx(param0: number, param1: number): void;

                    public glGetClipPlanef(param0: number, param1: javanioFloatBuffer): void;

                    public glMultMatrixf(param0: javanioFloatBuffer): void;

                    public glDeleteBuffers(param0: number, param1: native.Array<number>, param2: number): void;
                }
            }
        }
    }
}

/// <reference path="./java.nio.Buffer.d.ts" />
/// <reference path="./java.nio.FloatBuffer.d.ts" />
/// <reference path="./java.nio.IntBuffer.d.ts" />
/// <reference path="./java.nio.ShortBuffer.d.ts" />
declare module javax {
    export module microedition {
        export module khronos {
            export module opengles {
                export class GL11Ext extends javalangObject implements javax.microedition.khronos.opengles.GL {
                    /**
                     * Constructs a new instance of the javax.microedition.khronos.opengles.GL11Ext interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        glTexParameterfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glCurrentPaletteMatrixOES(param0: number): void;
                        glDrawTexfOES(param0: number, param1: number, param2: number, param3: number, param4: number): void;
                        glDrawTexfvOES(param0: native.Array<number>, param1: number): void;
                        glDrawTexfvOES(param0: javanioFloatBuffer): void;
                        glDrawTexiOES(param0: number, param1: number, param2: number, param3: number, param4: number): void;
                        glDrawTexivOES(param0: native.Array<number>, param1: number): void;
                        glDrawTexivOES(param0: javanioIntBuffer): void;
                        glDrawTexsOES(param0: number, param1: number, param2: number, param3: number, param4: number): void;
                        glDrawTexsvOES(param0: native.Array<number>, param1: number): void;
                        glDrawTexsvOES(param0: javanioShortBuffer): void;
                        glDrawTexxOES(param0: number, param1: number, param2: number, param3: number, param4: number): void;
                        glDrawTexxvOES(param0: native.Array<number>, param1: number): void;
                        glDrawTexxvOES(param0: javanioIntBuffer): void;
                        glEnable(param0: number): void;
                        glEnableClientState(param0: number): void;
                        glLoadPaletteFromModelViewMatrixOES(): void;
                        glMatrixIndexPointerOES(param0: number, param1: number, param2: number, param3: javanioBuffer): void;
                        glMatrixIndexPointerOES(param0: number, param1: number, param2: number, param3: number): void;
                        glWeightPointerOES(param0: number, param1: number, param2: number, param3: javanioBuffer): void;
                        glWeightPointerOES(param0: number, param1: number, param2: number, param3: number): void;
                    });

                    public static GL_MATRIX_INDEX_ARRAY_OES: number;
                    public static GL_WEIGHT_ARRAY_BUFFER_BINDING_OES: number;
                    public static GL_WEIGHT_ARRAY_OES: number;
                    public static GL_MATRIX_INDEX_ARRAY_TYPE_OES: number;
                    public static GL_MATRIX_PALETTE_OES: number;
                    public static GL_WEIGHT_ARRAY_POINTER_OES: number;
                    public static GL_WEIGHT_ARRAY_TYPE_OES: number;
                    public static GL_MAX_PALETTE_MATRICES_OES: number;
                    public static GL_MATRIX_INDEX_ARRAY_POINTER_OES: number;
                    public static GL_MAX_VERTEX_UNITS_OES: number;
                    public static GL_WEIGHT_ARRAY_SIZE_OES: number;
                    public static GL_WEIGHT_ARRAY_STRIDE_OES: number;
                    public static GL_MATRIX_INDEX_ARRAY_STRIDE_OES: number;
                    public static GL_MATRIX_INDEX_ARRAY_BUFFER_BINDING_OES: number;
                    public static GL_MATRIX_INDEX_ARRAY_SIZE_OES: number;
                    public static GL_TEXTURE_CROP_RECT_OES: number;

                    public glDrawTexfvOES(param0: javanioFloatBuffer): void;

                    public glEnableClientState(param0: number): void;

                    public glDrawTexsvOES(param0: javanioShortBuffer): void;

                    public glDrawTexxOES(param0: number, param1: number, param2: number, param3: number, param4: number): void;

                    public glDrawTexsvOES(param0: native.Array<number>, param1: number): void;

                    public glCurrentPaletteMatrixOES(param0: number): void;

                    public glDrawTexivOES(param0: native.Array<number>, param1: number): void;

                    public glDrawTexiOES(param0: number, param1: number, param2: number, param3: number, param4: number): void;

                    public glDrawTexxvOES(param0: javanioIntBuffer): void;

                    public glDrawTexfvOES(param0: native.Array<number>, param1: number): void;

                    public glDrawTexfOES(param0: number, param1: number, param2: number, param3: number, param4: number): void;

                    public glDrawTexsOES(param0: number, param1: number, param2: number, param3: number, param4: number): void;

                    public glEnable(param0: number): void;

                    public glMatrixIndexPointerOES(param0: number, param1: number, param2: number, param3: number): void;

                    public glWeightPointerOES(param0: number, param1: number, param2: number, param3: javanioBuffer): void;

                    public glDrawTexivOES(param0: javanioIntBuffer): void;

                    public glMatrixIndexPointerOES(param0: number, param1: number, param2: number, param3: javanioBuffer): void;

                    public glDrawTexxvOES(param0: native.Array<number>, param1: number): void;

                    public glLoadPaletteFromModelViewMatrixOES(): void;

                    public glTexParameterfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glWeightPointerOES(param0: number, param1: number, param2: number, param3: number): void;
                }
            }
        }
    }
}

/// <reference path="./java.nio.Buffer.d.ts" />
/// <reference path="./java.nio.FloatBuffer.d.ts" />
/// <reference path="./java.nio.IntBuffer.d.ts" />
declare module javax {
    export module microedition {
        export module khronos {
            export module opengles {
                export class GL11ExtensionPack extends javalangObject implements javax.microedition.khronos.opengles.GL {
                    /**
                     * Constructs a new instance of the javax.microedition.khronos.opengles.GL11ExtensionPack interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        glBindFramebufferOES(param0: number, param1: number): void;
                        glBindRenderbufferOES(param0: number, param1: number): void;
                        glBindTexture(param0: number, param1: number): void;
                        glBlendEquation(param0: number): void;
                        glBlendEquationSeparate(param0: number, param1: number): void;
                        glBlendFuncSeparate(param0: number, param1: number, param2: number, param3: number): void;
                        glCheckFramebufferStatusOES(param0: number): number;
                        glCompressedTexImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: javanioBuffer): void;
                        glCopyTexImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
                        glDeleteFramebuffersOES(param0: number, param1: native.Array<number>, param2: number): void;
                        glDeleteFramebuffersOES(param0: number, param1: javanioIntBuffer): void;
                        glDeleteRenderbuffersOES(param0: number, param1: native.Array<number>, param2: number): void;
                        glDeleteRenderbuffersOES(param0: number, param1: javanioIntBuffer): void;
                        glEnable(param0: number): void;
                        glFramebufferRenderbufferOES(param0: number, param1: number, param2: number, param3: number): void;
                        glFramebufferTexture2DOES(param0: number, param1: number, param2: number, param3: number, param4: number): void;
                        glGenerateMipmapOES(param0: number): void;
                        glGenFramebuffersOES(param0: number, param1: native.Array<number>, param2: number): void;
                        glGenFramebuffersOES(param0: number, param1: javanioIntBuffer): void;
                        glGenRenderbuffersOES(param0: number, param1: native.Array<number>, param2: number): void;
                        glGenRenderbuffersOES(param0: number, param1: javanioIntBuffer): void;
                        glGetFramebufferAttachmentParameterivOES(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number): void;
                        glGetFramebufferAttachmentParameterivOES(param0: number, param1: number, param2: number, param3: javanioIntBuffer): void;
                        glGetIntegerv(param0: number, param1: native.Array<number>, param2: number): void;
                        glGetIntegerv(param0: number, param1: javanioIntBuffer): void;
                        glGetRenderbufferParameterivOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glGetRenderbufferParameterivOES(param0: number, param1: number, param2: javanioIntBuffer): void;
                        glGetTexGenfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glGetTexGenfv(param0: number, param1: number, param2: javanioFloatBuffer): void;
                        glGetTexGeniv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glGetTexGeniv(param0: number, param1: number, param2: javanioIntBuffer): void;
                        glGetTexGenxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glGetTexGenxv(param0: number, param1: number, param2: javanioIntBuffer): void;
                        glIsFramebufferOES(param0: number): boolean;
                        glIsRenderbufferOES(param0: number): boolean;
                        glRenderbufferStorageOES(param0: number, param1: number, param2: number, param3: number): void;
                        glStencilOp(param0: number, param1: number, param2: number): void;
                        glTexEnvf(param0: number, param1: number, param2: number): void;
                        glTexEnvfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glTexEnvfv(param0: number, param1: number, param2: javanioFloatBuffer): void;
                        glTexEnvx(param0: number, param1: number, param2: number): void;
                        glTexEnvxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glTexEnvxv(param0: number, param1: number, param2: javanioIntBuffer): void;
                        glTexGenf(param0: number, param1: number, param2: number): void;
                        glTexGenfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glTexGenfv(param0: number, param1: number, param2: javanioFloatBuffer): void;
                        glTexGeni(param0: number, param1: number, param2: number): void;
                        glTexGeniv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glTexGeniv(param0: number, param1: number, param2: javanioIntBuffer): void;
                        glTexGenx(param0: number, param1: number, param2: number): void;
                        glTexGenxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
                        glTexGenxv(param0: number, param1: number, param2: javanioIntBuffer): void;
                        glTexParameterf(param0: number, param1: number, param2: number): void;
                    });

                    public static GL_MIRRORED_REPEAT: number;
                    public static GL_COLOR_ATTACHMENT10_OES: number;
                    public static GL_RGB5_A1: number;
                    public static GL_RENDERBUFFER_STENCIL_SIZE_OES: number;
                    public static GL_MAX_RENDERBUFFER_SIZE_OES: number;
                    public static GL_RENDERBUFFER_BINDING_OES: number;
                    public static GL_TEXTURE_GEN_STR: number;
                    public static GL_COLOR_ATTACHMENT5_OES: number;
                    public static GL_DECR_WRAP: number;
                    public static GL_STENCIL_INDEX1_OES: number;
                    public static GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT_OES: number;
                    public static GL_RENDERBUFFER_INTERNAL_FORMAT_OES: number;
                    public static GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME_OES: number;
                    public static GL_BLEND_SRC_ALPHA: number;
                    public static GL_DEPTH_COMPONENT24: number;
                    public static GL_BLEND_EQUATION_ALPHA: number;
                    public static GL_BLEND_SRC_RGB: number;
                    public static GL_COLOR_ATTACHMENT4_OES: number;
                    public static GL_BLEND_DST_ALPHA: number;
                    public static GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS_OES: number;
                    public static GL_BLEND_DST_RGB: number;
                    public static GL_FRAMEBUFFER_BINDING_OES: number;
                    public static GL_NORMAL_MAP: number;
                    public static GL_COLOR_ATTACHMENT7_OES: number;
                    public static GL_TEXTURE_BINDING_CUBE_MAP: number;
                    public static GL_REFLECTION_MAP: number;
                    public static GL_DEPTH_COMPONENT: number;
                    public static GL_DEPTH_ATTACHMENT_OES: number;
                    public static GL_RENDERBUFFER_ALPHA_SIZE_OES: number;
                    public static GL_COLOR_ATTACHMENT12_OES: number;
                    public static GL_FRAMEBUFFER_INCOMPLETE_READ_BUFFER_OES: number;
                    public static GL_BLEND_EQUATION_RGB: number;
                    public static GL_TEXTURE_CUBE_MAP_NEGATIVE_X: number;
                    public static GL_INCR_WRAP: number;
                    public static GL_TEXTURE_CUBE_MAP_NEGATIVE_Y: number;
                    public static GL_RENDERBUFFER_DEPTH_SIZE_OES: number;
                    public static GL_TEXTURE_CUBE_MAP_NEGATIVE_Z: number;
                    public static GL_RENDERBUFFER_OES: number;
                    public static GL_DEPTH_COMPONENT16: number;
                    public static GL_COLOR_ATTACHMENT11_OES: number;
                    public static GL_COLOR_ATTACHMENT6_OES: number;
                    public static GL_MAX_COLOR_ATTACHMENTS_OES: number;
                    public static GL_RENDERBUFFER_HEIGHT_OES: number;
                    public static GL_FRAMEBUFFER_INCOMPLETE_FORMATS_OES: number;
                    public static GL_FRAMEBUFFER_OES: number;
                    public static GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT_OES: number;
                    public static GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE_OES: number;
                    public static GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE_OES: number;
                    public static GL_TEXTURE_GEN_MODE: number;
                    public static GL_FUNC_REVERSE_SUBTRACT: number;
                    public static GL_COLOR_ATTACHMENT14_OES: number;
                    public static GL_COLOR_ATTACHMENT9_OES: number;
                    public static GL_FRAMEBUFFER_UNSUPPORTED_OES: number;
                    public static GL_FUNC_SUBTRACT: number;
                    public static GL_FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER_OES: number;
                    public static GL_MAX_CUBE_MAP_TEXTURE_SIZE: number;
                    public static GL_BLEND_EQUATION: number;
                    public static GL_COLOR_ATTACHMENT0_OES: number;
                    public static GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL_OES: number;
                    public static GL_TEXTURE_CUBE_MAP_POSITIVE_X: number;
                    public static GL_STENCIL_INDEX: number;
                    public static GL_STENCIL_INDEX4_OES: number;
                    public static GL_TEXTURE_CUBE_MAP_POSITIVE_Z: number;
                    public static GL_TEXTURE_CUBE_MAP_POSITIVE_Y: number;
                    public static GL_COLOR_ATTACHMENT13_OES: number;
                    public static GL_COLOR_ATTACHMENT8_OES: number;
                    public static GL_RENDERBUFFER_WIDTH_OES: number;
                    public static GL_STENCIL_INDEX8_OES: number;
                    public static GL_RENDERBUFFER_RED_SIZE_OES: number;
                    public static GL_INVALID_FRAMEBUFFER_OPERATION_OES: number;
                    public static GL_FRAMEBUFFER_COMPLETE_OES: number;
                    public static GL_RENDERBUFFER_GREEN_SIZE_OES: number;
                    public static GL_RGB565_OES: number;
                    public static GL_RGBA4: number;
                    public static GL_TEXTURE_CUBE_MAP: number;
                    public static GL_RGB8: number;
                    public static GL_COLOR_ATTACHMENT3_OES: number;
                    public static GL_RGBA8: number;
                    public static GL_COLOR_ATTACHMENT2_OES: number;
                    public static GL_COLOR_ATTACHMENT15_OES: number;
                    public static GL_FUNC_ADD: number;
                    public static GL_STENCIL_ATTACHMENT_OES: number;
                    public static GL_DEPTH_COMPONENT32: number;
                    public static GL_RENDERBUFFER_BLUE_SIZE_OES: number;
                    public static GL_STR: number;
                    public static GL_COLOR_ATTACHMENT1_OES: number;

                    public glTexEnvfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glGetTexGenfv(param0: number, param1: number, param2: javanioFloatBuffer): void;

                    public glTexGeni(param0: number, param1: number, param2: number): void;

                    public glTexGenfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glTexEnvx(param0: number, param1: number, param2: number): void;

                    public glGenFramebuffersOES(param0: number, param1: native.Array<number>, param2: number): void;

                    public glGetTexGenxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glGetRenderbufferParameterivOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glBindRenderbufferOES(param0: number, param1: number): void;

                    public glTexGenxv(param0: number, param1: number, param2: javanioIntBuffer): void;

                    public glDeleteRenderbuffersOES(param0: number, param1: native.Array<number>, param2: number): void;

                    public glTexGenf(param0: number, param1: number, param2: number): void;

                    public glCompressedTexImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: javanioBuffer): void;

                    public glTexGenx(param0: number, param1: number, param2: number): void;

                    public glDeleteRenderbuffersOES(param0: number, param1: javanioIntBuffer): void;

                    public glIsRenderbufferOES(param0: number): boolean;

                    public glGetRenderbufferParameterivOES(param0: number, param1: number, param2: javanioIntBuffer): void;

                    public glGetIntegerv(param0: number, param1: javanioIntBuffer): void;

                    public glTexEnvfv(param0: number, param1: number, param2: javanioFloatBuffer): void;

                    public glTexParameterf(param0: number, param1: number, param2: number): void;

                    public glStencilOp(param0: number, param1: number, param2: number): void;

                    public glRenderbufferStorageOES(param0: number, param1: number, param2: number, param3: number): void;

                    public glTexEnvf(param0: number, param1: number, param2: number): void;

                    public glTexGeniv(param0: number, param1: number, param2: javanioIntBuffer): void;

                    public glEnable(param0: number): void;

                    public glTexEnvxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glBlendFuncSeparate(param0: number, param1: number, param2: number, param3: number): void;

                    public glGetTexGeniv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glTexGenxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glGetTexGeniv(param0: number, param1: number, param2: javanioIntBuffer): void;

                    public glBindTexture(param0: number, param1: number): void;

                    public glTexEnvxv(param0: number, param1: number, param2: javanioIntBuffer): void;

                    public glDeleteFramebuffersOES(param0: number, param1: native.Array<number>, param2: number): void;

                    public glIsFramebufferOES(param0: number): boolean;

                    public glGenRenderbuffersOES(param0: number, param1: native.Array<number>, param2: number): void;

                    public glGetIntegerv(param0: number, param1: native.Array<number>, param2: number): void;

                    public glGenFramebuffersOES(param0: number, param1: javanioIntBuffer): void;

                    public glFramebufferTexture2DOES(param0: number, param1: number, param2: number, param3: number, param4: number): void;

                    public glBlendEquationSeparate(param0: number, param1: number): void;

                    public glFramebufferRenderbufferOES(param0: number, param1: number, param2: number, param3: number): void;

                    public glCheckFramebufferStatusOES(param0: number): number;

                    public glGetFramebufferAttachmentParameterivOES(param0: number, param1: number, param2: number, param3: javanioIntBuffer): void;

                    public glTexGenfv(param0: number, param1: number, param2: javanioFloatBuffer): void;

                    public glGetTexGenxv(param0: number, param1: number, param2: javanioIntBuffer): void;

                    public glDeleteFramebuffersOES(param0: number, param1: javanioIntBuffer): void;

                    public glGetTexGenfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glBindFramebufferOES(param0: number, param1: number): void;

                    public glCopyTexImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;

                    public glGenRenderbuffersOES(param0: number, param1: javanioIntBuffer): void;

                    public glGenerateMipmapOES(param0: number): void;

                    public glTexGeniv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;

                    public glGetFramebufferAttachmentParameterivOES(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number): void;

                    public glBlendEquation(param0: number): void;
                }
            }
        }
    }
}

import javanetServerSocket = java.net.ServerSocket;
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.ServerSocket.d.ts" />
declare module javax {
    export module net {
        export abstract class ServerSocketFactory extends javalangObject {
            public createServerSocket(param0: number): javanetServerSocket;
            public createServerSocket(): javanetServerSocket;
            public createServerSocket(param0: number, param1: number, param2: javanetInetAddress): javanetServerSocket;
            public createServerSocket(param0: number, param1: number): javanetServerSocket;

            public static getDefault(): javax.net.ServerSocketFactory;

            public constructor();
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
declare module javax {
    export module net {
        export abstract class SocketFactory extends javalangObject {
            public createSocket(param0: javanetInetAddress, param1: number): javanetSocket;
            public createSocket(param0: string, param1: number, param2: javanetInetAddress, param3: number): javanetSocket;
            public createSocket(param0: javanetInetAddress, param1: number, param2: javanetInetAddress, param3: number): javanetSocket;
            public createSocket(param0: string, param1: number): javanetSocket;

            public constructor();

            public static getDefault(): javax.net.SocketFactory;

            public createSocket(): javanetSocket;
        }
    }
}

import javasecuritycertCertPathParameters = java.security.cert.CertPathParameters;
/// <reference path="./java.security.cert.CertPathParameters.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export class CertPathTrustManagerParameters extends javalangObject implements javax.net.ssl.ManagerFactoryParameters {
                public getParameters(): javasecuritycertCertPathParameters;

                public constructor(param0: javasecuritycertCertPathParameters);
            }
        }
    }
}

import javautilEventObject = java.util.EventObject;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.security.Principal.d.ts" />
/// <reference path="./java.security.cert.Certificate.d.ts" />
/// <reference path="./javax.net.ssl.SSLSession.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocket.d.ts" />
/// <reference path="./javax.security.cert.X509Certificate.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export class HandshakeCompletedEvent extends javautilEventObject {
                public getLocalPrincipal(): javasecurityPrincipal;

                public getSocket(): javax.net.ssl.SSLSocket;

                public getLocalCertificates(): native.Array<javasecuritycertCertificate>;

                public getPeerPrincipal(): javasecurityPrincipal;

                public getSession(): javax.net.ssl.SSLSession;

                public constructor(param0: javax.net.ssl.SSLSocket, param1: javax.net.ssl.SSLSession);
                public constructor(param0: javalangObject);

                public getPeerCertificateChain(): native.Array<javax.security.cert.X509Certificate>;

                public getCipherSuite(): string;

                public getPeerCertificates(): native.Array<javasecuritycertCertificate>;
            }
        }
    }
}

import javautilEventListener = java.util.EventListener;
/// <reference path="./javax.net.ssl.HandshakeCompletedEvent.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export class HandshakeCompletedListener extends javalangObject implements javautilEventListener {
                /**
                 * Constructs a new instance of the javax.net.ssl.HandshakeCompletedListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    handshakeCompleted(param0: javax.net.ssl.HandshakeCompletedEvent): void;
                });

                public handshakeCompleted(param0: javax.net.ssl.HandshakeCompletedEvent): void;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.net.ssl.SSLSession.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export class HostnameVerifier extends javalangObject {
                /**
                 * Constructs a new instance of the javax.net.ssl.HostnameVerifier interface with the provided implementation.
                 */
                public constructor(implementation: {
                    verify(param0: string, param1: javax.net.ssl.SSLSession): boolean;
                });

                public verify(param0: string, param1: javax.net.ssl.SSLSession): boolean;
            }
        }
    }
}

import javanetHttpURLConnection = java.net.HttpURLConnection;
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.security.Principal.d.ts" />
/// <reference path="./java.security.cert.Certificate.d.ts" />
/// <reference path="./javax.net.ssl.HostnameVerifier.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocketFactory.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export abstract class HttpsURLConnection extends javanetHttpURLConnection {
                public hostnameVerifier: javax.net.ssl.HostnameVerifier;

                public getLocalPrincipal(): javasecurityPrincipal;

                public static getDefaultHostnameVerifier(): javax.net.ssl.HostnameVerifier;

                public getLocalCertificates(): native.Array<javasecuritycertCertificate>;

                public getSSLSocketFactory(): javax.net.ssl.SSLSocketFactory;

                public getHostnameVerifier(): javax.net.ssl.HostnameVerifier;

                public constructor(param0: javanetURL);

                public static setDefaultHostnameVerifier(param0: javax.net.ssl.HostnameVerifier): void;

                public getPeerPrincipal(): javasecurityPrincipal;

                public setSSLSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;

                public getServerCertificates(): native.Array<javasecuritycertCertificate>;

                public getCipherSuite(): string;

                public setHostnameVerifier(param0: javax.net.ssl.HostnameVerifier): void;

                public static setDefaultSSLSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;

                public static getDefaultSSLSocketFactory(): javax.net.ssl.SSLSocketFactory;
            }
        }
    }
}

declare module javax {
    export module net {
        export module ssl {
            export class KeyManager extends javalangObject {
                /**
                 * Constructs a new instance of the javax.net.ssl.KeyManager interface with the provided implementation.
                 */
                public constructor(implementation: {});
            }
        }
    }
}

import javasecurityKeyStore = java.security.KeyStore;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.KeyStore.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./javax.net.ssl.KeyManager.d.ts" />
/// <reference path="./javax.net.ssl.KeyManagerFactorySpi.d.ts" />
/// <reference path="./javax.net.ssl.ManagerFactoryParameters.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export class KeyManagerFactory extends javalangObject {
                public static getInstance(param0: string): javax.net.ssl.KeyManagerFactory;

                public getAlgorithm(): string;

                public static getDefaultAlgorithm(): string;

                public getProvider(): javasecurityProvider;

                public init(param0: javasecurityKeyStore, param1: native.Array<string>): void;

                public static getInstance(param0: string, param1: javasecurityProvider): javax.net.ssl.KeyManagerFactory;

                public init(param0: javax.net.ssl.ManagerFactoryParameters): void;

                public static getInstance(param0: string, param1: string): javax.net.ssl.KeyManagerFactory;

                public constructor(param0: javax.net.ssl.KeyManagerFactorySpi, param1: javasecurityProvider, param2: string);

                public getKeyManagers(): native.Array<javax.net.ssl.KeyManager>;
            }
        }
    }
}

/// <reference path="./java.security.KeyStore.d.ts" />
/// <reference path="./javax.net.ssl.KeyManager.d.ts" />
/// <reference path="./javax.net.ssl.ManagerFactoryParameters.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export abstract class KeyManagerFactorySpi extends javalangObject {
                public engineInit(param0: javasecurityKeyStore, param1: native.Array<string>): void;

                public engineGetKeyManagers(): native.Array<javax.net.ssl.KeyManager>;

                public engineInit(param0: javax.net.ssl.ManagerFactoryParameters): void;

                public constructor();
            }
        }
    }
}

import javasecurityKeyStoreBuilder = java.security.KeyStore.Builder;
/// <reference path="./java.util.List.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export class KeyStoreBuilderParameters extends javalangObject implements javax.net.ssl.ManagerFactoryParameters {
                public getParameters(): javautilList;

                public constructor(param0: javasecurityKeyStoreBuilder);
                public constructor(param0: javautilList);
            }
        }
    }
}

declare module javax {
    export module net {
        export module ssl {
            export class ManagerFactoryParameters extends javalangObject {
                /**
                 * Constructs a new instance of the javax.net.ssl.ManagerFactoryParameters interface with the provided implementation.
                 */
                public constructor(implementation: {});
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.security.SecureRandom.d.ts" />
/// <reference path="./javax.net.ssl.KeyManager.d.ts" />
/// <reference path="./javax.net.ssl.SSLContextSpi.d.ts" />
/// <reference path="./javax.net.ssl.SSLEngine.d.ts" />
/// <reference path="./javax.net.ssl.SSLParameters.d.ts" />
/// <reference path="./javax.net.ssl.SSLServerSocketFactory.d.ts" />
/// <reference path="./javax.net.ssl.SSLSessionContext.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocketFactory.d.ts" />
/// <reference path="./javax.net.ssl.TrustManager.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export class SSLContext extends javalangObject {
                public getClientSessionContext(): javax.net.ssl.SSLSessionContext;

                public static setDefault(param0: javax.net.ssl.SSLContext): void;

                public init(param0: native.Array<javax.net.ssl.KeyManager>, param1: native.Array<javax.net.ssl.TrustManager>, param2: javasecuritySecureRandom): void;

                public createSSLEngine(): javax.net.ssl.SSLEngine;

                public static getInstance(param0: string, param1: string): javax.net.ssl.SSLContext;

                public getProvider(): javasecurityProvider;

                public getSupportedSSLParameters(): javax.net.ssl.SSLParameters;

                public constructor(param0: javax.net.ssl.SSLContextSpi, param1: javasecurityProvider, param2: string);

                public getServerSocketFactory(): javax.net.ssl.SSLServerSocketFactory;

                public getServerSessionContext(): javax.net.ssl.SSLSessionContext;

                public static getInstance(param0: string, param1: javasecurityProvider): javax.net.ssl.SSLContext;

                public getSocketFactory(): javax.net.ssl.SSLSocketFactory;

                public createSSLEngine(param0: string, param1: number): javax.net.ssl.SSLEngine;

                public getDefaultSSLParameters(): javax.net.ssl.SSLParameters;

                public getProtocol(): string;

                public static getDefault(): javax.net.ssl.SSLContext;

                public static getInstance(param0: string): javax.net.ssl.SSLContext;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.SecureRandom.d.ts" />
/// <reference path="./javax.net.ssl.KeyManager.d.ts" />
/// <reference path="./javax.net.ssl.SSLEngine.d.ts" />
/// <reference path="./javax.net.ssl.SSLParameters.d.ts" />
/// <reference path="./javax.net.ssl.SSLServerSocketFactory.d.ts" />
/// <reference path="./javax.net.ssl.SSLSessionContext.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocketFactory.d.ts" />
/// <reference path="./javax.net.ssl.TrustManager.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export abstract class SSLContextSpi extends javalangObject {
                public engineGetDefaultSSLParameters(): javax.net.ssl.SSLParameters;

                public engineInit(param0: native.Array<javax.net.ssl.KeyManager>, param1: native.Array<javax.net.ssl.TrustManager>, param2: javasecuritySecureRandom): void;

                public engineCreateSSLEngine(param0: string, param1: number): javax.net.ssl.SSLEngine;

                public engineGetClientSessionContext(): javax.net.ssl.SSLSessionContext;

                public engineGetSupportedSSLParameters(): javax.net.ssl.SSLParameters;

                public engineCreateSSLEngine(): javax.net.ssl.SSLEngine;

                public engineGetServerSocketFactory(): javax.net.ssl.SSLServerSocketFactory;

                public engineGetSocketFactory(): javax.net.ssl.SSLSocketFactory;

                public constructor();

                public engineGetServerSessionContext(): javax.net.ssl.SSLSessionContext;
            }
        }
    }
}

/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./javax.net.ssl.SSLEngineResult.d.ts" />
/// <reference path="./javax.net.ssl.SSLParameters.d.ts" />
/// <reference path="./javax.net.ssl.SSLSession.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export abstract class SSLEngine extends javalangObject {
                public getNeedClientAuth(): boolean;

                public unwrap(param0: javanioByteBuffer, param1: javanioByteBuffer): javax.net.ssl.SSLEngineResult;

                public setUseClientMode(param0: boolean): void;

                public getSession(): javax.net.ssl.SSLSession;

                public setEnabledProtocols(param0: native.Array<string>): void;

                public closeInbound(): void;

                public isInboundDone(): boolean;

                public getSSLParameters(): javax.net.ssl.SSLParameters;

                public setEnabledCipherSuites(param0: native.Array<string>): void;

                public constructor();

                public getEnableSessionCreation(): boolean;

                public getEnabledProtocols(): native.Array<string>;

                public setEnableSessionCreation(param0: boolean): void;

                public setWantClientAuth(param0: boolean): void;

                public constructor(param0: string, param1: number);

                public isOutboundDone(): boolean;

                public getEnabledCipherSuites(): native.Array<string>;

                public closeOutbound(): void;

                public wrap(param0: javanioByteBuffer, param1: javanioByteBuffer): javax.net.ssl.SSLEngineResult;

                public getPeerPort(): number;

                public beginHandshake(): void;

                public setNeedClientAuth(param0: boolean): void;

                public getHandshakeStatus(): javax.net.ssl.SSLEngineResult.HandshakeStatus;

                public setSSLParameters(param0: javax.net.ssl.SSLParameters): void;

                public unwrap(param0: javanioByteBuffer, param1: native.Array<javanioByteBuffer>): javax.net.ssl.SSLEngineResult;

                public getPeerHost(): string;

                public getUseClientMode(): boolean;

                public unwrap(param0: javanioByteBuffer, param1: native.Array<javanioByteBuffer>, param2: number, param3: number): javax.net.ssl.SSLEngineResult;

                public getWantClientAuth(): boolean;

                public wrap(param0: native.Array<javanioByteBuffer>, param1: javanioByteBuffer): javax.net.ssl.SSLEngineResult;

                public getDelegatedTask(): javalangRunnable;

                public wrap(param0: native.Array<javanioByteBuffer>, param1: number, param2: number, param3: javanioByteBuffer): javax.net.ssl.SSLEngineResult;

                public getSupportedProtocols(): native.Array<string>;

                public getSupportedCipherSuites(): native.Array<string>;
            }
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export class SSLEngineResult extends javalangObject {
                public bytesProduced(): number;

                public getHandshakeStatus(): javax.net.ssl.SSLEngineResult.HandshakeStatus;

                public getStatus(): javax.net.ssl.SSLEngineResult.Status;

                public constructor(param0: javax.net.ssl.SSLEngineResult.Status, param1: javax.net.ssl.SSLEngineResult.HandshakeStatus, param2: number, param3: number);

                public toString(): string;

                public bytesConsumed(): number;
            }
            export module SSLEngineResult {
                export class HandshakeStatus extends javalangEnum {
                    public static FINISHED: javax.net.ssl.SSLEngineResult.HandshakeStatus;
                    public static NEED_TASK: javax.net.ssl.SSLEngineResult.HandshakeStatus;
                    public static NEED_UNWRAP: javax.net.ssl.SSLEngineResult.HandshakeStatus;
                    public static NEED_WRAP: javax.net.ssl.SSLEngineResult.HandshakeStatus;
                    public static NOT_HANDSHAKING: javax.net.ssl.SSLEngineResult.HandshakeStatus;

                    public static values(): native.Array<javax.net.ssl.SSLEngineResult.HandshakeStatus>;

                    public static valueOf(param0: string): javax.net.ssl.SSLEngineResult.HandshakeStatus;
                    public static valueOf(param0: javalangClass, param1: string): javalangEnum;
                }
                export class Status extends javalangEnum {
                    public static BUFFER_OVERFLOW: javax.net.ssl.SSLEngineResult.Status;
                    public static BUFFER_UNDERFLOW: javax.net.ssl.SSLEngineResult.Status;
                    public static CLOSED: javax.net.ssl.SSLEngineResult.Status;
                    public static OK: javax.net.ssl.SSLEngineResult.Status;

                    public static valueOf(param0: javalangClass, param1: string): javalangEnum;
                    public static valueOf(param0: string): javax.net.ssl.SSLEngineResult.Status;

                    public static values(): native.Array<javax.net.ssl.SSLEngineResult.Status>;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export class SSLException extends javaioIOException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export class SSLHandshakeException extends javax.net.ssl.SSLException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export class SSLKeyException extends javax.net.ssl.SSLException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

declare module javax {
    export module net {
        export module ssl {
            export class SSLParameters extends javalangObject {
                public getNeedClientAuth(): boolean;

                public setNeedClientAuth(param0: boolean): void;

                public getWantClientAuth(): boolean;

                public setCipherSuites(param0: native.Array<string>): void;

                public setWantClientAuth(param0: boolean): void;

                public setProtocols(param0: native.Array<string>): void;

                public getCipherSuites(): native.Array<string>;

                public constructor(param0: native.Array<string>, param1: native.Array<string>);
                public constructor(param0: native.Array<string>);
                public constructor();

                public getProtocols(): native.Array<string>;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export class SSLPeerUnverifiedException extends javax.net.ssl.SSLException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

import javasecurityBasicPermission = java.security.BasicPermission;
import javasecurityPermission = java.security.Permission;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Permission.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export class SSLPermission extends javasecurityBasicPermission {
                public implies(param0: javasecurityPermission): boolean;

                public getActions(): string;

                public checkGuard(param0: javalangObject): void;

                public constructor(param0: string, param1: string);
                public constructor(param0: string);
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export class SSLProtocolException extends javax.net.ssl.SSLException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.net.InetAddress.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export abstract class SSLServerSocket extends javanetServerSocket {
                public constructor(param0: number, param1: number);

                public getNeedClientAuth(): boolean;

                public setNeedClientAuth(param0: boolean): void;

                public setUseClientMode(param0: boolean): void;

                public close(): void;

                public setEnabledProtocols(param0: native.Array<string>): void;

                public getUseClientMode(): boolean;

                public setEnabledCipherSuites(param0: native.Array<string>): void;

                public constructor();

                public getEnableSessionCreation(): boolean;

                public constructor(param0: number, param1: number, param2: javanetInetAddress);

                public getEnabledProtocols(): native.Array<string>;

                public getWantClientAuth(): boolean;

                public setWantClientAuth(param0: boolean): void;

                public setEnableSessionCreation(param0: boolean): void;

                public getEnabledCipherSuites(): native.Array<string>;

                public constructor(param0: number);

                public getSupportedProtocols(): native.Array<string>;

                public getSupportedCipherSuites(): native.Array<string>;
            }
        }
    }
}

/// <reference path="./javax.net.ServerSocketFactory.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export abstract class SSLServerSocketFactory extends javax.net.ServerSocketFactory {
                public static getDefault(): javax.net.ServerSocketFactory;

                public getDefaultCipherSuites(): native.Array<string>;

                public getSupportedCipherSuites(): native.Array<string>;

                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Principal.d.ts" />
/// <reference path="./java.security.cert.Certificate.d.ts" />
/// <reference path="./javax.net.ssl.SSLSessionContext.d.ts" />
/// <reference path="./javax.security.cert.X509Certificate.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export class SSLSession extends javalangObject {
                /**
                 * Constructs a new instance of the javax.net.ssl.SSLSession interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getApplicationBufferSize(): number;
                    getCipherSuite(): string;
                    getCreationTime(): number;
                    getId(): native.Array<number>;
                    getLastAccessedTime(): number;
                    getLocalCertificates(): native.Array<javasecuritycertCertificate>;
                    getLocalPrincipal(): javasecurityPrincipal;
                    getPacketBufferSize(): number;
                    getPeerCertificateChain(): native.Array<javax.security.cert.X509Certificate>;
                    getPeerCertificates(): native.Array<javasecuritycertCertificate>;
                    getPeerHost(): string;
                    getPeerPort(): number;
                    getPeerPrincipal(): javasecurityPrincipal;
                    getProtocol(): string;
                    getSessionContext(): javax.net.ssl.SSLSessionContext;
                    getValue(param0: string): javalangObject;
                    getValueNames(): native.Array<string>;
                    invalidate(): void;
                    isValid(): boolean;
                    putValue(param0: string, param1: javalangObject): void;
                    removeValue(param0: string): void;
                });

                public getLocalPrincipal(): javasecurityPrincipal;

                public getCreationTime(): number;

                public getId(): native.Array<number>;

                public getLocalCertificates(): native.Array<javasecuritycertCertificate>;

                public removeValue(param0: string): void;

                public getSessionContext(): javax.net.ssl.SSLSessionContext;

                public getPeerCertificateChain(): native.Array<javax.security.cert.X509Certificate>;

                public getApplicationBufferSize(): number;

                public getPeerHost(): string;

                public isValid(): boolean;

                public putValue(param0: string, param1: javalangObject): void;

                public getLastAccessedTime(): number;

                public getPeerPrincipal(): javasecurityPrincipal;

                public getValueNames(): native.Array<string>;

                public getValue(param0: string): javalangObject;

                public invalidate(): void;

                public getCipherSuite(): string;

                public getPeerCertificates(): native.Array<javasecuritycertCertificate>;

                public getProtocol(): string;

                public getPacketBufferSize(): number;

                public getPeerPort(): number;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.net.ssl.SSLSession.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export class SSLSessionBindingEvent extends javautilEventObject {
                public getSession(): javax.net.ssl.SSLSession;

                public constructor(param0: javalangObject);
                public constructor(param0: javax.net.ssl.SSLSession, param1: string);

                public getName(): string;
            }
        }
    }
}

/// <reference path="./javax.net.ssl.SSLSessionBindingEvent.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export class SSLSessionBindingListener extends javalangObject implements javautilEventListener {
                /**
                 * Constructs a new instance of the javax.net.ssl.SSLSessionBindingListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    valueBound(param0: javax.net.ssl.SSLSessionBindingEvent): void;
                    valueUnbound(param0: javax.net.ssl.SSLSessionBindingEvent): void;
                });

                public valueBound(param0: javax.net.ssl.SSLSessionBindingEvent): void;

                public valueUnbound(param0: javax.net.ssl.SSLSessionBindingEvent): void;
            }
        }
    }
}

/// <reference path="./java.util.Enumeration.d.ts" />
/// <reference path="./javax.net.ssl.SSLSession.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export class SSLSessionContext extends javalangObject {
                /**
                 * Constructs a new instance of the javax.net.ssl.SSLSessionContext interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getIds(): javautilEnumeration;
                    getSession(param0: native.Array<number>): javax.net.ssl.SSLSession;
                    getSessionCacheSize(): number;
                    getSessionTimeout(): number;
                    setSessionCacheSize(param0: number): void;
                    setSessionTimeout(param0: number): void;
                });

                public getSessionCacheSize(): number;

                public setSessionTimeout(param0: number): void;

                public getSession(param0: native.Array<number>): javax.net.ssl.SSLSession;

                public getSessionTimeout(): number;

                public getIds(): javautilEnumeration;

                public setSessionCacheSize(param0: number): void;
            }
        }
    }
}

import javanetSocketImpl = java.net.SocketImpl;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.Proxy.d.ts" />
/// <reference path="./java.net.SocketImpl.d.ts" />
/// <reference path="./javax.net.ssl.HandshakeCompletedListener.d.ts" />
/// <reference path="./javax.net.ssl.SSLParameters.d.ts" />
/// <reference path="./javax.net.ssl.SSLSession.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export abstract class SSLSocket extends javanetSocket {
                public getNeedClientAuth(): boolean;

                public setUseClientMode(param0: boolean): void;

                public constructor(param0: string, param1: number, param2: javanetInetAddress, param3: number);
                public constructor(param0: javanetProxy);

                public setEnabledProtocols(param0: native.Array<string>): void;

                public getSession(): javax.net.ssl.SSLSession;

                public shutdownOutput(): void;

                public getSSLParameters(): javax.net.ssl.SSLParameters;

                public setEnabledCipherSuites(param0: native.Array<string>): void;

                public constructor();

                public getEnableSessionCreation(): boolean;

                public getEnabledProtocols(): native.Array<string>;

                public setWantClientAuth(param0: boolean): void;

                public setEnableSessionCreation(param0: boolean): void;

                public addHandshakeCompletedListener(param0: javax.net.ssl.HandshakeCompletedListener): void;

                public constructor(param0: string, param1: number);

                public removeHandshakeCompletedListener(param0: javax.net.ssl.HandshakeCompletedListener): void;

                public getEnabledCipherSuites(): native.Array<string>;

                public constructor(param0: javanetInetAddress, param1: number, param2: javanetInetAddress, param3: number);

                public shutdownInput(): void;

                public startHandshake(): void;

                public setNeedClientAuth(param0: boolean): void;

                public constructor(param0: javanetSocketImpl);

                public close(): void;

                public setSSLParameters(param0: javax.net.ssl.SSLParameters): void;

                public getUseClientMode(): boolean;

                public constructor(param0: javanetInetAddress, param1: number, param2: boolean);

                public getWantClientAuth(): boolean;

                public constructor(param0: string, param1: number, param2: boolean);
                public constructor(param0: javanetInetAddress, param1: number);

                public getSupportedProtocols(): native.Array<string>;

                public getSupportedCipherSuites(): native.Array<string>;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
/// <reference path="./javax.net.SocketFactory.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export abstract class SSLSocketFactory extends javax.net.SocketFactory {
                public static getDefault(): javax.net.SocketFactory;

                public createSocket(param0: javanetSocket, param1: string, param2: number, param3: boolean): javanetSocket;
                public createSocket(): javanetSocket;
                public createSocket(param0: javanetInetAddress, param1: number, param2: javanetInetAddress, param3: number): javanetSocket;

                public getDefaultCipherSuites(): native.Array<string>;

                public createSocket(param0: string, param1: number): javanetSocket;
                public createSocket(param0: javanetInetAddress, param1: number): javanetSocket;

                public getSupportedCipherSuites(): native.Array<string>;

                public createSocket(param0: string, param1: number, param2: javanetInetAddress, param3: number): javanetSocket;

                public constructor();
            }
        }
    }
}

declare module javax {
    export module net {
        export module ssl {
            export class TrustManager extends javalangObject {
                /**
                 * Constructs a new instance of the javax.net.ssl.TrustManager interface with the provided implementation.
                 */
                public constructor(implementation: {});
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.KeyStore.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./javax.net.ssl.ManagerFactoryParameters.d.ts" />
/// <reference path="./javax.net.ssl.TrustManager.d.ts" />
/// <reference path="./javax.net.ssl.TrustManagerFactorySpi.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export class TrustManagerFactory extends javalangObject {
                public static getInstance(param0: string, param1: javasecurityProvider): javax.net.ssl.TrustManagerFactory;

                public getAlgorithm(): string;

                public constructor(param0: javax.net.ssl.TrustManagerFactorySpi, param1: javasecurityProvider, param2: string);

                public static getDefaultAlgorithm(): string;

                public getProvider(): javasecurityProvider;

                public static getInstance(param0: string): javax.net.ssl.TrustManagerFactory;

                public getTrustManagers(): native.Array<javax.net.ssl.TrustManager>;

                public static getInstance(param0: string, param1: string): javax.net.ssl.TrustManagerFactory;

                public init(param0: javasecurityKeyStore): void;
                public init(param0: javax.net.ssl.ManagerFactoryParameters): void;
            }
        }
    }
}

/// <reference path="./java.security.KeyStore.d.ts" />
/// <reference path="./javax.net.ssl.ManagerFactoryParameters.d.ts" />
/// <reference path="./javax.net.ssl.TrustManager.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export abstract class TrustManagerFactorySpi extends javalangObject {
                public engineGetTrustManagers(): native.Array<javax.net.ssl.TrustManager>;

                public engineInit(param0: javax.net.ssl.ManagerFactoryParameters): void;

                public constructor();

                public engineInit(param0: javasecurityKeyStore): void;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
/// <reference path="./java.security.Principal.d.ts" />
/// <reference path="./java.security.PrivateKey.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />
/// <reference path="./javax.net.ssl.SSLEngine.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export abstract class X509ExtendedKeyManager extends javalangObject implements javax.net.ssl.X509KeyManager {
                public chooseClientAlias(param0: native.Array<string>, param1: native.Array<javasecurityPrincipal>, param2: javanetSocket): string;

                public chooseServerAlias(param0: string, param1: native.Array<javasecurityPrincipal>, param2: javanetSocket): string;

                public chooseEngineServerAlias(param0: string, param1: native.Array<javasecurityPrincipal>, param2: javax.net.ssl.SSLEngine): string;

                public getServerAliases(param0: string, param1: native.Array<javasecurityPrincipal>): native.Array<string>;

                public getPrivateKey(param0: string): javasecurityPrivateKey;

                public getCertificateChain(param0: string): native.Array<javasecuritycertX509Certificate>;

                public constructor();

                public chooseEngineClientAlias(param0: native.Array<string>, param1: native.Array<javasecurityPrincipal>, param2: javax.net.ssl.SSLEngine): string;

                public getClientAliases(param0: string, param1: native.Array<javasecurityPrincipal>): native.Array<string>;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
/// <reference path="./java.security.Principal.d.ts" />
/// <reference path="./java.security.PrivateKey.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export class X509KeyManager extends javalangObject implements javax.net.ssl.KeyManager {
                /**
                 * Constructs a new instance of the javax.net.ssl.X509KeyManager interface with the provided implementation.
                 */
                public constructor(implementation: {
                    chooseClientAlias(param0: native.Array<string>, param1: native.Array<javasecurityPrincipal>, param2: javanetSocket): string;
                    chooseServerAlias(param0: string, param1: native.Array<javasecurityPrincipal>, param2: javanetSocket): string;
                    getCertificateChain(param0: string): native.Array<javasecuritycertX509Certificate>;
                    getClientAliases(param0: string, param1: native.Array<javasecurityPrincipal>): native.Array<string>;
                    getServerAliases(param0: string, param1: native.Array<javasecurityPrincipal>): native.Array<string>;
                    getPrivateKey(param0: string): javasecurityPrivateKey;
                });

                public chooseClientAlias(param0: native.Array<string>, param1: native.Array<javasecurityPrincipal>, param2: javanetSocket): string;

                public chooseServerAlias(param0: string, param1: native.Array<javasecurityPrincipal>, param2: javanetSocket): string;

                public getServerAliases(param0: string, param1: native.Array<javasecurityPrincipal>): native.Array<string>;

                public getPrivateKey(param0: string): javasecurityPrivateKey;

                public getCertificateChain(param0: string): native.Array<javasecuritycertX509Certificate>;

                public getClientAliases(param0: string, param1: native.Array<javasecurityPrincipal>): native.Array<string>;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />
declare module javax {
    export module net {
        export module ssl {
            export class X509TrustManager extends javalangObject implements javax.net.ssl.TrustManager {
                /**
                 * Constructs a new instance of the javax.net.ssl.X509TrustManager interface with the provided implementation.
                 */
                public constructor(implementation: {
                    checkClientTrusted(param0: native.Array<javasecuritycertX509Certificate>, param1: string): void;
                    checkServerTrusted(param0: native.Array<javasecuritycertX509Certificate>, param1: string): void;
                    getAcceptedIssuers(): native.Array<javasecuritycertX509Certificate>;
                });

                public checkServerTrusted(param0: native.Array<javasecuritycertX509Certificate>, param1: string): void;

                public getAcceptedIssuers(): native.Array<javasecuritycertX509Certificate>;

                public checkClientTrusted(param0: native.Array<javasecuritycertX509Certificate>, param1: string): void;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Permission.d.ts" />
declare module javax {
    export module security {
        export module auth {
            export class AuthPermission extends javasecurityBasicPermission {
                public implies(param0: javasecurityPermission): boolean;

                public getActions(): string;

                public checkGuard(param0: javalangObject): void;

                public constructor(param0: string, param1: string);
                public constructor(param0: string);
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module javax {
    export module security {
        export module auth {
            export class DestroyFailedException extends javalangException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

declare module javax {
    export module security {
        export module auth {
            export class Destroyable extends javalangObject {
                /**
                 * Constructs a new instance of the javax.security.auth.Destroyable interface with the provided implementation.
                 */
                public constructor(implementation: {
                    destroy(): void;
                    isDestroyed(): boolean;
                });

                public destroy(): void;

                public isDestroyed(): boolean;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Permission.d.ts" />
declare module javax {
    export module security {
        export module auth {
            export class PrivateCredentialPermission extends javasecurityPermission {
                public getCredentialClass(): string;

                public getPrincipals(): native.Array<native.Array<string>>;

                public implies(param0: javasecurityPermission): boolean;

                public getActions(): string;

                public checkGuard(param0: javalangObject): void;

                public constructor(param0: string);
                public constructor(param0: string, param1: string);
            }
        }
    }
}

import javasecurityPrivilegedAction = java.security.PrivilegedAction;
import javasecurityAccessControlContext = java.security.AccessControlContext;
import javasecurityPrivilegedExceptionAction = java.security.PrivilegedExceptionAction;
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.security.AccessControlContext.d.ts" />
/// <reference path="./java.security.PrivilegedAction.d.ts" />
/// <reference path="./java.security.PrivilegedExceptionAction.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module javax {
    export module security {
        export module auth {
            export class Subject extends javalangObject implements javaioSerializable {
                public getPrivateCredentials(): javautilSet;

                public static getSubject(param0: javasecurityAccessControlContext): javax.security.auth.Subject;

                public static doAsPrivileged(param0: javax.security.auth.Subject, param1: javasecurityPrivilegedAction, param2: javasecurityAccessControlContext): javalangObject;

                public getPrincipals(): javautilSet;

                public setReadOnly(): void;

                public toString(): string;

                public getPublicCredentials(): javautilSet;

                public constructor(param0: boolean, param1: javautilSet, param2: javautilSet, param3: javautilSet);
                public constructor();

                public getPrincipals(param0: javalangClass): javautilSet;

                public equals(param0: javalangObject): boolean;

                public static doAsPrivileged(param0: javax.security.auth.Subject, param1: javasecurityPrivilegedExceptionAction, param2: javasecurityAccessControlContext): javalangObject;

                public hashCode(): number;

                public isReadOnly(): boolean;

                public static doAs(param0: javax.security.auth.Subject, param1: javasecurityPrivilegedAction): javalangObject;

                public getPrivateCredentials(param0: javalangClass): javautilSet;

                public static doAs(param0: javax.security.auth.Subject, param1: javasecurityPrivilegedExceptionAction): javalangObject;

                public getPublicCredentials(param0: javalangClass): javautilSet;
            }
        }
    }
}

import javasecurityDomainCombiner = java.security.DomainCombiner;
import javasecurityProtectionDomain = java.security.ProtectionDomain;
/// <reference path="./java.security.ProtectionDomain.d.ts" />
/// <reference path="./javax.security.auth.Subject.d.ts" />
declare module javax {
    export module security {
        export module auth {
            export class SubjectDomainCombiner extends javalangObject implements javasecurityDomainCombiner {
                public combine(param0: native.Array<javasecurityProtectionDomain>, param1: native.Array<javasecurityProtectionDomain>): native.Array<javasecurityProtectionDomain>;

                public getSubject(): javax.security.auth.Subject;

                public constructor(param0: javax.security.auth.Subject);
            }
        }
    }
}

declare module javax {
    export module security {
        export module auth {
            export module callback {
                export class Callback extends javalangObject {
                    /**
                     * Constructs a new instance of the javax.security.auth.callback.Callback interface with the provided implementation.
                     */
                    public constructor(implementation: {});
                }
            }
        }
    }
}

/// <reference path="./javax.security.auth.callback.Callback.d.ts" />
declare module javax {
    export module security {
        export module auth {
            export module callback {
                export class CallbackHandler extends javalangObject {
                    /**
                     * Constructs a new instance of the javax.security.auth.callback.CallbackHandler interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        handle(param0: native.Array<javax.security.auth.callback.Callback>): void;
                    });

                    public handle(param0: native.Array<javax.security.auth.callback.Callback>): void;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module javax {
    export module security {
        export module auth {
            export module callback {
                export class PasswordCallback extends javalangObject implements javax.security.auth.callback.Callback, javaioSerializable {
                    public getPrompt(): string;

                    public isEchoOn(): boolean;

                    public clearPassword(): void;

                    public constructor(param0: string, param1: boolean);

                    public setPassword(param0: native.Array<string>): void;

                    public getPassword(): native.Array<string>;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./javax.security.auth.callback.Callback.d.ts" />
declare module javax {
    export module security {
        export module auth {
            export module callback {
                export class UnsupportedCallbackException extends javalangException {
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: javax.security.auth.callback.Callback, param1: string);
                    public constructor(param0: javalangThrowable);

                    public getCallback(): javax.security.auth.callback.Callback;

                    public constructor(param0: javax.security.auth.callback.Callback);
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module javax {
    export module security {
        export module auth {
            export module login {
                export class LoginException extends javasecurityGeneralSecurityException {
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor();
                    public constructor(param0: javalangThrowable);
                }
            }
        }
    }
}

/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module javax {
    export module security {
        export module auth {
            export module x500 {
                export class X500Principal extends javalangObject implements javaioSerializable, javasecurityPrincipal {
                    public static CANONICAL: string;
                    public static RFC1779: string;
                    public static RFC2253: string;

                    public constructor(param0: javaioInputStream);

                    public toString(): string;

                    public constructor(param0: native.Array<number>);

                    public getName(param0: string, param1: javautilMap): string;

                    public constructor(param0: string);

                    public getName(param0: string): string;

                    public equals(param0: javalangObject): boolean;

                    public getName(): string;

                    public getEncoded(): native.Array<number>;

                    public constructor(param0: string, param1: javautilMap);

                    public hashCode(): number;
                }
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.PublicKey.d.ts" />
declare module javax {
    export module security {
        export module cert {
            export abstract class Certificate extends javalangObject {
                public equals(param0: javalangObject): boolean;

                public hashCode(): number;

                public getEncoded(): native.Array<number>;

                public toString(): string;

                public getPublicKey(): javasecurityPublicKey;

                public verify(param0: javasecurityPublicKey): void;
                public verify(param0: javasecurityPublicKey, param1: string): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module javax {
    export module security {
        export module cert {
            export class CertificateEncodingException extends javax.security.cert.CertificateException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module javax {
    export module security {
        export module cert {
            export class CertificateException extends javalangException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module javax {
    export module security {
        export module cert {
            export class CertificateExpiredException extends javax.security.cert.CertificateException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module javax {
    export module security {
        export module cert {
            export class CertificateNotYetValidException extends javax.security.cert.CertificateException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module javax {
    export module security {
        export module cert {
            export class CertificateParsingException extends javax.security.cert.CertificateException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />
/// <reference path="./java.security.Principal.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module javax {
    export module security {
        export module cert {
            export abstract class X509Certificate extends javax.security.cert.Certificate {
                public checkValidity(param0: javautilDate): void;

                public getIssuerDN(): javasecurityPrincipal;

                public getSubjectDN(): javasecurityPrincipal;

                public static getInstance(param0: javaioInputStream): javax.security.cert.X509Certificate;
                public static getInstance(param0: native.Array<number>): javax.security.cert.X509Certificate;

                public getSigAlgParams(): native.Array<number>;

                public constructor();

                public getSerialNumber(): javamathBigInteger;

                public getVersion(): number;

                public checkValidity(): void;

                public getNotBefore(): javautilDate;

                public getSigAlgName(): string;

                public getNotAfter(): javautilDate;

                public getSigAlgOID(): string;
            }
        }
    }
}

/// <reference path="./java.io.PrintWriter.d.ts" />
declare module javax {
    export module sql {
        export class CommonDataSource extends javalangObject {
            /**
             * Constructs a new instance of the javax.sql.CommonDataSource interface with the provided implementation.
             */
            public constructor(implementation: {
                getLoginTimeout(): number;
                getLogWriter(): javaioPrintWriter;
                setLoginTimeout(param0: number): void;
                setLogWriter(param0: javaioPrintWriter): void;
            });

            public getLoginTimeout(): number;

            public setLogWriter(param0: javaioPrintWriter): void;

            public setLoginTimeout(param0: number): void;

            public getLogWriter(): javaioPrintWriter;
        }
    }
}

import javasqlSQLException = java.sql.SQLException;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.sql.SQLException.d.ts" />
/// <reference path="./javax.sql.PooledConnection.d.ts" />
declare module javax {
    export module sql {
        export class ConnectionEvent extends javautilEventObject implements javaioSerializable {
            public constructor(param0: javax.sql.PooledConnection, param1: javasqlSQLException);
            public constructor(param0: javax.sql.PooledConnection);

            public getSQLException(): javasqlSQLException;

            public constructor(param0: javalangObject);
        }
    }
}

/// <reference path="./javax.sql.ConnectionEvent.d.ts" />
declare module javax {
    export module sql {
        export class ConnectionEventListener extends javalangObject implements javautilEventListener {
            /**
             * Constructs a new instance of the javax.sql.ConnectionEventListener interface with the provided implementation.
             */
            public constructor(implementation: {
                connectionClosed(param0: javax.sql.ConnectionEvent): void;
                connectionErrorOccurred(param0: javax.sql.ConnectionEvent): void;
            });

            public connectionClosed(param0: javax.sql.ConnectionEvent): void;

            public connectionErrorOccurred(param0: javax.sql.ConnectionEvent): void;
        }
    }
}

/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.sql.PooledConnection.d.ts" />
declare module javax {
    export module sql {
        export class ConnectionPoolDataSource extends javalangObject implements javax.sql.CommonDataSource {
            /**
             * Constructs a new instance of the javax.sql.ConnectionPoolDataSource interface with the provided implementation.
             */
            public constructor(implementation: {
                getPooledConnection(): javax.sql.PooledConnection;
                getPooledConnection(param0: string, param1: string): javax.sql.PooledConnection;
                getLoginTimeout(): number;
                getLogWriter(): javaioPrintWriter;
                setLoginTimeout(param0: number): void;
                setLogWriter(param0: javaioPrintWriter): void;
            });

            public getLoginTimeout(): number;

            public setLogWriter(param0: javaioPrintWriter): void;

            public getPooledConnection(param0: string, param1: string): javax.sql.PooledConnection;

            public setLoginTimeout(param0: number): void;

            public getLogWriter(): javaioPrintWriter;

            public getPooledConnection(): javax.sql.PooledConnection;
        }
    }
}

import javasqlWrapper = java.sql.Wrapper;
import javasqlConnection = java.sql.Connection;
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.sql.Connection.d.ts" />
declare module javax {
    export module sql {
        export class DataSource extends javalangObject implements javax.sql.CommonDataSource, javasqlWrapper {
            /**
             * Constructs a new instance of the javax.sql.DataSource interface with the provided implementation.
             */
            public constructor(implementation: {
                getConnection(): javasqlConnection;
                getConnection(param0: string, param1: string): javasqlConnection;
                getLoginTimeout(): number;
                getLogWriter(): javaioPrintWriter;
                setLoginTimeout(param0: number): void;
                setLogWriter(param0: javaioPrintWriter): void;
                unwrap(param0: javalangClass): javalangObject;
                isWrapperFor(param0: javalangClass): boolean;
            });

            public getLoginTimeout(): number;

            public setLogWriter(param0: javaioPrintWriter): void;

            public setLoginTimeout(param0: number): void;

            public getLogWriter(): javaioPrintWriter;

            public isWrapperFor(param0: javalangClass): boolean;

            public getConnection(): javasqlConnection;

            public unwrap(param0: javalangClass): javalangObject;

            public getConnection(param0: string, param1: string): javasqlConnection;
        }
    }
}

/// <reference path="./java.sql.Connection.d.ts" />
/// <reference path="./javax.sql.ConnectionEventListener.d.ts" />
/// <reference path="./javax.sql.StatementEventListener.d.ts" />
declare module javax {
    export module sql {
        export class PooledConnection extends javalangObject {
            /**
             * Constructs a new instance of the javax.sql.PooledConnection interface with the provided implementation.
             */
            public constructor(implementation: {
                addConnectionEventListener(param0: javax.sql.ConnectionEventListener): void;
                close(): void;
                getConnection(): javasqlConnection;
                removeConnectionEventListener(param0: javax.sql.ConnectionEventListener): void;
                addStatementEventListener(param0: javax.sql.StatementEventListener): void;
                removeStatementEventListener(param0: javax.sql.StatementEventListener): void;
            });

            public addConnectionEventListener(param0: javax.sql.ConnectionEventListener): void;

            public removeStatementEventListener(param0: javax.sql.StatementEventListener): void;

            public addStatementEventListener(param0: javax.sql.StatementEventListener): void;

            public getConnection(): javasqlConnection;

            public removeConnectionEventListener(param0: javax.sql.ConnectionEventListener): void;

            public close(): void;
        }
    }
}

import javasqlResultSet = java.sql.ResultSet;
import javasqlArray = java.sql.Array;
import javamathBigDecimal = java.math.BigDecimal;
import javasqlBlob = java.sql.Blob;
import javasqlClob = java.sql.Clob;
import javasqlDate = java.sql.Date;
import javasqlNClob = java.sql.NClob;
import javasqlRef = java.sql.Ref;
import javasqlRowId = java.sql.RowId;
import javasqlSQLXML = java.sql.SQLXML;
import javasqlTime = java.sql.Time;
import javasqlTimestamp = java.sql.Timestamp;
import javasqlResultSetMetaData = java.sql.ResultSetMetaData;
import javasqlStatement = java.sql.Statement;
import javasqlSQLWarning = java.sql.SQLWarning;
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.math.BigDecimal.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.sql.Array.d.ts" />
/// <reference path="./java.sql.Blob.d.ts" />
/// <reference path="./java.sql.Clob.d.ts" />
/// <reference path="./java.sql.Date.d.ts" />
/// <reference path="./java.sql.NClob.d.ts" />
/// <reference path="./java.sql.Ref.d.ts" />
/// <reference path="./java.sql.ResultSetMetaData.d.ts" />
/// <reference path="./java.sql.RowId.d.ts" />
/// <reference path="./java.sql.SQLWarning.d.ts" />
/// <reference path="./java.sql.SQLXML.d.ts" />
/// <reference path="./java.sql.Statement.d.ts" />
/// <reference path="./java.sql.Time.d.ts" />
/// <reference path="./java.sql.Timestamp.d.ts" />
/// <reference path="./java.util.Calendar.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./javax.sql.RowSetListener.d.ts" />
declare module javax {
    export module sql {
        export class RowSet extends javalangObject implements javasqlResultSet {
            /**
             * Constructs a new instance of the javax.sql.RowSet interface with the provided implementation.
             */
            public constructor(implementation: {
                addRowSetListener(param0: javax.sql.RowSetListener): void;
                clearParameters(): void;
                execute(): void;
                getCommand(): string;
                getDataSourceName(): string;
                getEscapeProcessing(): boolean;
                getMaxFieldSize(): number;
                getMaxRows(): number;
                getPassword(): string;
                getQueryTimeout(): number;
                getTransactionIsolation(): number;
                getTypeMap(): javautilMap;
                getUrl(): string;
                getUsername(): string;
                isReadOnly(): boolean;
                removeRowSetListener(param0: javax.sql.RowSetListener): void;
                setArray(param0: number, param1: javasqlArray): void;
                setAsciiStream(param0: number, param1: javaioInputStream, param2: number): void;
                setAsciiStream(param0: number, param1: javaioInputStream): void;
                setAsciiStream(param0: string, param1: javaioInputStream): void;
                setAsciiStream(param0: string, param1: javaioInputStream, param2: number): void;
                setBigDecimal(param0: number, param1: javamathBigDecimal): void;
                setBigDecimal(param0: string, param1: javamathBigDecimal): void;
                setBinaryStream(param0: number, param1: javaioInputStream, param2: number): void;
                setBinaryStream(param0: number, param1: javaioInputStream): void;
                setBinaryStream(param0: string, param1: javaioInputStream): void;
                setBinaryStream(param0: string, param1: javaioInputStream, param2: number): void;
                setBlob(param0: number, param1: javasqlBlob): void;
                setBlob(param0: number, param1: javaioInputStream): void;
                setBlob(param0: number, param1: javaioInputStream, param2: number): void;
                setBlob(param0: string, param1: javaioInputStream): void;
                setBlob(param0: string, param1: javaioInputStream, param2: number): void;
                setBlob(param0: string, param1: javasqlBlob): void;
                setBoolean(param0: number, param1: boolean): void;
                setBoolean(param0: string, param1: boolean): void;
                setByte(param0: number, param1: number): void;
                setByte(param0: string, param1: number): void;
                setBytes(param0: number, param1: native.Array<number>): void;
                setBytes(param0: string, param1: native.Array<number>): void;
                setCharacterStream(param0: number, param1: javaioReader, param2: number): void;
                setCharacterStream(param0: number, param1: javaioReader): void;
                setCharacterStream(param0: string, param1: javaioReader): void;
                setCharacterStream(param0: string, param1: javaioReader, param2: number): void;
                setClob(param0: number, param1: javasqlClob): void;
                setClob(param0: number, param1: javaioReader): void;
                setClob(param0: number, param1: javaioReader, param2: number): void;
                setClob(param0: string, param1: javasqlClob): void;
                setClob(param0: string, param1: javaioReader): void;
                setClob(param0: string, param1: javaioReader, param2: number): void;
                setCommand(param0: string): void;
                setConcurrency(param0: number): void;
                setDataSourceName(param0: string): void;
                setDate(param0: number, param1: javasqlDate): void;
                setDate(param0: number, param1: javasqlDate, param2: javautilCalendar): void;
                setDate(param0: string, param1: javasqlDate): void;
                setDate(param0: string, param1: javasqlDate, param2: javautilCalendar): void;
                setDouble(param0: number, param1: number): void;
                setDouble(param0: string, param1: number): void;
                setEscapeProcessing(param0: boolean): void;
                setFloat(param0: number, param1: number): void;
                setFloat(param0: string, param1: number): void;
                setInt(param0: number, param1: number): void;
                setInt(param0: string, param1: number): void;
                setLong(param0: number, param1: number): void;
                setLong(param0: string, param1: number): void;
                setMaxFieldSize(param0: number): void;
                setMaxRows(param0: number): void;
                setNCharacterStream(param0: number, param1: javaioReader): void;
                setNCharacterStream(param0: number, param1: javaioReader, param2: number): void;
                setNCharacterStream(param0: string, param1: javaioReader): void;
                setNCharacterStream(param0: string, param1: javaioReader, param2: number): void;
                setNClob(param0: number, param1: javasqlNClob): void;
                setNClob(param0: number, param1: javaioReader): void;
                setNClob(param0: number, param1: javaioReader, param2: number): void;
                setNClob(param0: string, param1: javasqlNClob): void;
                setNClob(param0: string, param1: javaioReader): void;
                setNClob(param0: string, param1: javaioReader, param2: number): void;
                setNString(param0: number, param1: string): void;
                setNString(param0: string, param1: string): void;
                setNull(param0: number, param1: number): void;
                setNull(param0: number, param1: number, param2: string): void;
                setNull(param0: string, param1: number): void;
                setNull(param0: string, param1: number, param2: string): void;
                setObject(param0: number, param1: javalangObject): void;
                setObject(param0: number, param1: javalangObject, param2: number): void;
                setObject(param0: number, param1: javalangObject, param2: number, param3: number): void;
                setObject(param0: string, param1: javalangObject): void;
                setObject(param0: string, param1: javalangObject, param2: number): void;
                setObject(param0: string, param1: javalangObject, param2: number, param3: number): void;
                setPassword(param0: string): void;
                setQueryTimeout(param0: number): void;
                setReadOnly(param0: boolean): void;
                setRef(param0: number, param1: javasqlRef): void;
                setShort(param0: number, param1: number): void;
                setShort(param0: string, param1: number): void;
                setString(param0: number, param1: string): void;
                setString(param0: string, param1: string): void;
                setRowId(param0: number, param1: javasqlRowId): void;
                setRowId(param0: string, param1: javasqlRowId): void;
                setSQLXML(param0: number, param1: javasqlSQLXML): void;
                setSQLXML(param0: string, param1: javasqlSQLXML): void;
                setTime(param0: number, param1: javasqlTime): void;
                setTime(param0: number, param1: javasqlTime, param2: javautilCalendar): void;
                setTime(param0: string, param1: javasqlTime): void;
                setTime(param0: string, param1: javasqlTime, param2: javautilCalendar): void;
                setTimestamp(param0: number, param1: javasqlTimestamp): void;
                setTimestamp(param0: number, param1: javasqlTimestamp, param2: javautilCalendar): void;
                setTimestamp(param0: string, param1: javasqlTimestamp): void;
                setTimestamp(param0: string, param1: javasqlTimestamp, param2: javautilCalendar): void;
                setTransactionIsolation(param0: number): void;
                setType(param0: number): void;
                setTypeMap(param0: javautilMap): void;
                setUrl(param0: string): void;
                setURL(param0: number, param1: javanetURL): void;
                setUsername(param0: string): void;
                absolute(param0: number): boolean;
                afterLast(): void;
                beforeFirst(): void;
                cancelRowUpdates(): void;
                clearWarnings(): void;
                close(): void;
                deleteRow(): void;
                findColumn(param0: string): number;
                first(): boolean;
                getArray(param0: number): javasqlArray;
                getArray(param0: string): javasqlArray;
                getAsciiStream(param0: number): javaioInputStream;
                getAsciiStream(param0: string): javaioInputStream;
                getBigDecimal(param0: number): javamathBigDecimal;
                getBigDecimal(param0: number, param1: number): javamathBigDecimal;
                getBigDecimal(param0: string): javamathBigDecimal;
                getBigDecimal(param0: string, param1: number): javamathBigDecimal;
                getBinaryStream(param0: number): javaioInputStream;
                getBinaryStream(param0: string): javaioInputStream;
                getBlob(param0: number): javasqlBlob;
                getBlob(param0: string): javasqlBlob;
                getBoolean(param0: number): boolean;
                getBoolean(param0: string): boolean;
                getByte(param0: number): number;
                getByte(param0: string): number;
                getBytes(param0: number): native.Array<number>;
                getBytes(param0: string): native.Array<number>;
                getCharacterStream(param0: number): javaioReader;
                getCharacterStream(param0: string): javaioReader;
                getClob(param0: number): javasqlClob;
                getClob(param0: string): javasqlClob;
                getConcurrency(): number;
                getCursorName(): string;
                getDate(param0: number): javasqlDate;
                getDate(param0: number, param1: javautilCalendar): javasqlDate;
                getDate(param0: string): javasqlDate;
                getDate(param0: string, param1: javautilCalendar): javasqlDate;
                getDouble(param0: number): number;
                getDouble(param0: string): number;
                getFetchDirection(): number;
                getFetchSize(): number;
                getFloat(param0: number): number;
                getFloat(param0: string): number;
                getInt(param0: number): number;
                getInt(param0: string): number;
                getLong(param0: number): number;
                getLong(param0: string): number;
                getMetaData(): javasqlResultSetMetaData;
                getObject(param0: number): javalangObject;
                getObject(param0: number, param1: javautilMap): javalangObject;
                getObject(param0: string): javalangObject;
                getObject(param0: string, param1: javautilMap): javalangObject;
                getRef(param0: number): javasqlRef;
                getRef(param0: string): javasqlRef;
                getRow(): number;
                getShort(param0: number): number;
                getShort(param0: string): number;
                getStatement(): javasqlStatement;
                getString(param0: number): string;
                getString(param0: string): string;
                getTime(param0: number): javasqlTime;
                getTime(param0: number, param1: javautilCalendar): javasqlTime;
                getTime(param0: string): javasqlTime;
                getTime(param0: string, param1: javautilCalendar): javasqlTime;
                getTimestamp(param0: number): javasqlTimestamp;
                getTimestamp(param0: number, param1: javautilCalendar): javasqlTimestamp;
                getTimestamp(param0: string): javasqlTimestamp;
                getTimestamp(param0: string, param1: javautilCalendar): javasqlTimestamp;
                getType(): number;
                getUnicodeStream(param0: number): javaioInputStream;
                getUnicodeStream(param0: string): javaioInputStream;
                getURL(param0: number): javanetURL;
                getURL(param0: string): javanetURL;
                getWarnings(): javasqlSQLWarning;
                insertRow(): void;
                isAfterLast(): boolean;
                isBeforeFirst(): boolean;
                isFirst(): boolean;
                isLast(): boolean;
                last(): boolean;
                moveToCurrentRow(): void;
                moveToInsertRow(): void;
                next(): boolean;
                previous(): boolean;
                refreshRow(): void;
                relative(param0: number): boolean;
                rowDeleted(): boolean;
                rowInserted(): boolean;
                rowUpdated(): boolean;
                setFetchDirection(param0: number): void;
                setFetchSize(param0: number): void;
                updateArray(param0: number, param1: javasqlArray): void;
                updateArray(param0: string, param1: javasqlArray): void;
                updateAsciiStream(param0: number, param1: javaioInputStream, param2: number): void;
                updateAsciiStream(param0: string, param1: javaioInputStream, param2: number): void;
                updateBigDecimal(param0: number, param1: javamathBigDecimal): void;
                updateBigDecimal(param0: string, param1: javamathBigDecimal): void;
                updateBinaryStream(param0: number, param1: javaioInputStream, param2: number): void;
                updateBinaryStream(param0: string, param1: javaioInputStream, param2: number): void;
                updateBlob(param0: number, param1: javasqlBlob): void;
                updateBlob(param0: string, param1: javasqlBlob): void;
                updateBoolean(param0: number, param1: boolean): void;
                updateBoolean(param0: string, param1: boolean): void;
                updateByte(param0: number, param1: number): void;
                updateByte(param0: string, param1: number): void;
                updateBytes(param0: number, param1: native.Array<number>): void;
                updateBytes(param0: string, param1: native.Array<number>): void;
                updateCharacterStream(param0: number, param1: javaioReader, param2: number): void;
                updateCharacterStream(param0: string, param1: javaioReader, param2: number): void;
                updateClob(param0: number, param1: javasqlClob): void;
                updateClob(param0: string, param1: javasqlClob): void;
                updateDate(param0: number, param1: javasqlDate): void;
                updateDate(param0: string, param1: javasqlDate): void;
                updateDouble(param0: number, param1: number): void;
                updateDouble(param0: string, param1: number): void;
                updateFloat(param0: number, param1: number): void;
                updateFloat(param0: string, param1: number): void;
                updateInt(param0: number, param1: number): void;
                updateInt(param0: string, param1: number): void;
                updateLong(param0: number, param1: number): void;
                updateLong(param0: string, param1: number): void;
                updateNull(param0: number): void;
                updateNull(param0: string): void;
                updateObject(param0: number, param1: javalangObject): void;
                updateObject(param0: number, param1: javalangObject, param2: number): void;
                updateObject(param0: string, param1: javalangObject): void;
                updateObject(param0: string, param1: javalangObject, param2: number): void;
                updateRef(param0: number, param1: javasqlRef): void;
                updateRef(param0: string, param1: javasqlRef): void;
                updateRow(): void;
                updateShort(param0: number, param1: number): void;
                updateShort(param0: string, param1: number): void;
                updateString(param0: number, param1: string): void;
                updateString(param0: string, param1: string): void;
                updateTime(param0: number, param1: javasqlTime): void;
                updateTime(param0: string, param1: javasqlTime): void;
                updateTimestamp(param0: number, param1: javasqlTimestamp): void;
                updateTimestamp(param0: string, param1: javasqlTimestamp): void;
                wasNull(): boolean;
                getRowId(param0: number): javasqlRowId;
                getRowId(param0: string): javasqlRowId;
                updateRowId(param0: number, param1: javasqlRowId): void;
                updateRowId(param0: string, param1: javasqlRowId): void;
                getHoldability(): number;
                isClosed(): boolean;
                updateNString(param0: number, param1: string): void;
                updateNString(param0: string, param1: string): void;
                updateNClob(param0: number, param1: javasqlNClob): void;
                updateNClob(param0: string, param1: javasqlNClob): void;
                getNClob(param0: number): javasqlNClob;
                getNClob(param0: string): javasqlNClob;
                getSQLXML(param0: number): javasqlSQLXML;
                getSQLXML(param0: string): javasqlSQLXML;
                updateSQLXML(param0: number, param1: javasqlSQLXML): void;
                updateSQLXML(param0: string, param1: javasqlSQLXML): void;
                getNString(param0: number): string;
                getNString(param0: string): string;
                getNCharacterStream(param0: number): javaioReader;
                getNCharacterStream(param0: string): javaioReader;
                updateNCharacterStream(param0: number, param1: javaioReader, param2: number): void;
                updateNCharacterStream(param0: string, param1: javaioReader, param2: number): void;
                updateAsciiStream(param0: number, param1: javaioInputStream, param2: number): void;
                updateBinaryStream(param0: number, param1: javaioInputStream, param2: number): void;
                updateCharacterStream(param0: number, param1: javaioReader, param2: number): void;
                updateAsciiStream(param0: string, param1: javaioInputStream, param2: number): void;
                updateBinaryStream(param0: string, param1: javaioInputStream, param2: number): void;
                updateCharacterStream(param0: string, param1: javaioReader, param2: number): void;
                updateBlob(param0: number, param1: javaioInputStream, param2: number): void;
                updateBlob(param0: string, param1: javaioInputStream, param2: number): void;
                updateClob(param0: number, param1: javaioReader, param2: number): void;
                updateClob(param0: string, param1: javaioReader, param2: number): void;
                updateNClob(param0: number, param1: javaioReader, param2: number): void;
                updateNClob(param0: string, param1: javaioReader, param2: number): void;
                updateNCharacterStream(param0: number, param1: javaioReader): void;
                updateNCharacterStream(param0: string, param1: javaioReader): void;
                updateAsciiStream(param0: number, param1: javaioInputStream): void;
                updateBinaryStream(param0: number, param1: javaioInputStream): void;
                updateCharacterStream(param0: number, param1: javaioReader): void;
                updateAsciiStream(param0: string, param1: javaioInputStream): void;
                updateBinaryStream(param0: string, param1: javaioInputStream): void;
                updateCharacterStream(param0: string, param1: javaioReader): void;
                updateBlob(param0: number, param1: javaioInputStream): void;
                updateBlob(param0: string, param1: javaioInputStream): void;
                updateClob(param0: number, param1: javaioReader): void;
                updateClob(param0: string, param1: javaioReader): void;
                updateNClob(param0: number, param1: javaioReader): void;
                updateNClob(param0: string, param1: javaioReader): void;
                unwrap(param0: javalangClass): javalangObject;
                isWrapperFor(param0: javalangClass): boolean;
                close(): void;
            });

            public static HOLD_CURSORS_OVER_COMMIT: number;
            public static CLOSE_CURSORS_AT_COMMIT: number;
            public static FETCH_UNKNOWN: number;
            public static FETCH_REVERSE: number;
            public static CONCUR_READ_ONLY: number;
            public static TYPE_SCROLL_SENSITIVE: number;
            public static CONCUR_UPDATABLE: number;
            public static TYPE_FORWARD_ONLY: number;
            public static TYPE_SCROLL_INSENSITIVE: number;
            public static FETCH_FORWARD: number;

            public updateSQLXML(param0: number, param1: javasqlSQLXML): void;

            public getSQLXML(param0: number): javasqlSQLXML;

            public getTime(param0: number, param1: javautilCalendar): javasqlTime;

            public previous(): boolean;

            public updateBlob(param0: string, param1: javasqlBlob): void;

            public setBlob(param0: number, param1: javaioInputStream): void;

            public setNString(param0: string, param1: string): void;

            public setByte(param0: number, param1: number): void;

            public setDate(param0: number, param1: javasqlDate, param2: javautilCalendar): void;

            public setClob(param0: string, param1: javaioReader, param2: number): void;

            public getNClob(param0: string): javasqlNClob;

            public updateCharacterStream(param0: string, param1: javaioReader): void;

            public cancelRowUpdates(): void;

            public getArray(param0: string): javasqlArray;

            public setBigDecimal(param0: string, param1: javamathBigDecimal): void;

            public wasNull(): boolean;

            public setNull(param0: string, param1: number, param2: string): void;

            public setBinaryStream(param0: number, param1: javaioInputStream): void;

            public setBlob(param0: number, param1: javasqlBlob): void;

            public refreshRow(): void;

            public updateBlob(param0: number, param1: javasqlBlob): void;

            public getNCharacterStream(param0: string): javaioReader;

            public getBigDecimal(param0: string): javamathBigDecimal;

            public setEscapeProcessing(param0: boolean): void;

            public setClob(param0: number, param1: javaioReader, param2: number): void;

            public getCursorName(): string;

            public getDouble(param0: string): number;

            public updateAsciiStream(param0: number, param1: javaioInputStream): void;

            public last(): boolean;

            public relative(param0: number): boolean;

            public getObject(param0: string, param1: javautilMap): javalangObject;

            public getUnicodeStream(param0: string): javaioInputStream;

            public setLong(param0: string, param1: number): void;

            public updateNClob(param0: string, param1: javasqlNClob): void;

            public getType(): number;

            public isClosed(): boolean;

            public clearParameters(): void;

            public updateClob(param0: string, param1: javasqlClob): void;

            public setBinaryStream(param0: string, param1: javaioInputStream): void;

            public getUnicodeStream(param0: number): javaioInputStream;

            public updateNull(param0: number): void;

            public setObject(param0: string, param1: javalangObject, param2: number, param3: number): void;

            public setAsciiStream(param0: number, param1: javaioInputStream, param2: number): void;

            public setObject(param0: number, param1: javalangObject): void;

            public updateBigDecimal(param0: string, param1: javamathBigDecimal): void;

            public updateAsciiStream(param0: string, param1: javaioInputStream, param2: number): void;

            public getRef(param0: string): javasqlRef;

            public getTimestamp(param0: number): javasqlTimestamp;

            public updateCharacterStream(param0: string, param1: javaioReader, param2: number): void;

            public isLast(): boolean;

            public updateNClob(param0: number, param1: javaioReader, param2: number): void;

            public updateString(param0: string, param1: string): void;

            public updateNull(param0: string): void;

            public getPassword(): string;

            public updateCharacterStream(param0: number, param1: javaioReader): void;

            public setAsciiStream(param0: string, param1: javaioInputStream, param2: number): void;

            public getUrl(): string;

            public setCharacterStream(param0: number, param1: javaioReader, param2: number): void;

            public setClob(param0: number, param1: javasqlClob): void;

            public setUrl(param0: string): void;

            public isFirst(): boolean;

            public findColumn(param0: string): number;

            public updateRowId(param0: number, param1: javasqlRowId): void;

            public setBytes(param0: number, param1: native.Array<number>): void;

            public setTimestamp(param0: string, param1: javasqlTimestamp): void;

            public getDate(param0: string): javasqlDate;

            public getObject(param0: number, param1: javautilMap): javalangObject;

            public getString(param0: string): string;

            public setString(param0: string, param1: string): void;

            public updateNString(param0: number, param1: string): void;

            public getClob(param0: number): javasqlClob;

            public getRow(): number;

            public setBlob(param0: string, param1: javasqlBlob): void;

            public rowInserted(): boolean;

            public getBigDecimal(param0: number, param1: number): javamathBigDecimal;

            public getWarnings(): javasqlSQLWarning;

            public updateAsciiStream(param0: string, param1: javaioInputStream): void;

            public setDouble(param0: number, param1: number): void;

            public updateTime(param0: number, param1: javasqlTime): void;

            public updateObject(param0: string, param1: javalangObject): void;

            public setBlob(param0: string, param1: javaioInputStream, param2: number): void;

            public getBinaryStream(param0: number): javaioInputStream;

            public rowDeleted(): boolean;

            public setDouble(param0: string, param1: number): void;

            public updateLong(param0: number, param1: number): void;

            public getBoolean(param0: string): boolean;

            public setObject(param0: string, param1: javalangObject): void;

            public setFloat(param0: number, param1: number): void;

            public updateAsciiStream(param0: number, param1: javaioInputStream, param2: number): void;

            public updateByte(param0: string, param1: number): void;

            public setCommand(param0: string): void;

            public setRef(param0: number, param1: javasqlRef): void;

            public getShort(param0: number): number;

            public setBoolean(param0: number, param1: boolean): void;

            public setShort(param0: string, param1: number): void;

            public updateTimestamp(param0: number, param1: javasqlTimestamp): void;

            public getDouble(param0: number): number;

            public getBytes(param0: string): native.Array<number>;

            public getBigDecimal(param0: number): javamathBigDecimal;

            public getString(param0: number): string;

            public setNull(param0: number, param1: number): void;

            public getFetchDirection(): number;

            public updateBinaryStream(param0: number, param1: javaioInputStream, param2: number): void;

            public execute(): void;

            public setInt(param0: number, param1: number): void;

            public setClob(param0: string, param1: javasqlClob): void;

            public setNClob(param0: number, param1: javaioReader): void;

            public updateBoolean(param0: number, param1: boolean): void;

            public setAsciiStream(param0: number, param1: javaioInputStream): void;

            public setRowId(param0: string, param1: javasqlRowId): void;

            public updateNCharacterStream(param0: string, param1: javaioReader): void;

            public setNClob(param0: string, param1: javasqlNClob): void;

            public updateBoolean(param0: string, param1: boolean): void;

            public getDate(param0: number): javasqlDate;

            public getRef(param0: number): javasqlRef;

            public setTimestamp(param0: string, param1: javasqlTimestamp, param2: javautilCalendar): void;

            public updateFloat(param0: string, param1: number): void;

            public setNCharacterStream(param0: string, param1: javaioReader, param2: number): void;

            public updateBlob(param0: number, param1: javaioInputStream, param2: number): void;

            public setTimestamp(param0: number, param1: javasqlTimestamp): void;

            public isBeforeFirst(): boolean;

            public updateDate(param0: string, param1: javasqlDate): void;

            public setBlob(param0: string, param1: javaioInputStream): void;

            public updateRow(): void;

            public setNClob(param0: number, param1: javaioReader, param2: number): void;

            public getHoldability(): number;

            public moveToInsertRow(): void;

            public setNCharacterStream(param0: number, param1: javaioReader): void;

            public getCharacterStream(param0: number): javaioReader;

            public updateDouble(param0: string, param1: number): void;

            public updateNClob(param0: number, param1: javaioReader): void;

            public moveToCurrentRow(): void;

            public updateClob(param0: number, param1: javasqlClob): void;

            public getAsciiStream(param0: string): javaioInputStream;

            public getNString(param0: number): string;

            public getLong(param0: number): number;

            public updateRowId(param0: string, param1: javasqlRowId): void;

            public updateSQLXML(param0: string, param1: javasqlSQLXML): void;

            public updateNClob(param0: string, param1: javaioReader, param2: number): void;

            public setTime(param0: number, param1: javasqlTime): void;

            public updateBigDecimal(param0: number, param1: javamathBigDecimal): void;

            public getTransactionIsolation(): number;

            public setURL(param0: number, param1: javanetURL): void;

            public getQueryTimeout(): number;

            public getTimestamp(param0: string): javasqlTimestamp;

            public getAsciiStream(param0: number): javaioInputStream;

            public isReadOnly(): boolean;

            public getBinaryStream(param0: string): javaioInputStream;

            public getTimestamp(param0: string, param1: javautilCalendar): javasqlTimestamp;

            public updateNCharacterStream(param0: string, param1: javaioReader, param2: number): void;

            public updateDouble(param0: number, param1: number): void;

            public getBlob(param0: string): javasqlBlob;

            public setLong(param0: number, param1: number): void;

            public setBlob(param0: number, param1: javaioInputStream, param2: number): void;

            public setMaxRows(param0: number): void;

            public setNull(param0: number, param1: number, param2: string): void;

            public getCharacterStream(param0: string): javaioReader;

            public removeRowSetListener(param0: javax.sql.RowSetListener): void;

            public getArray(param0: number): javasqlArray;

            public setTimestamp(param0: number, param1: javasqlTimestamp, param2: javautilCalendar): void;

            public setObject(param0: string, param1: javalangObject, param2: number): void;

            public getConcurrency(): number;

            public afterLast(): void;

            public getCommand(): string;

            public setRowId(param0: number, param1: javasqlRowId): void;

            public updateObject(param0: number, param1: javalangObject, param2: number): void;

            public clearWarnings(): void;

            public setByte(param0: string, param1: number): void;

            public getTime(param0: string): javasqlTime;

            public setNClob(param0: number, param1: javasqlNClob): void;

            public updateClob(param0: string, param1: javaioReader): void;

            public setSQLXML(param0: string, param1: javasqlSQLXML): void;

            public getByte(param0: number): number;

            public getBlob(param0: number): javasqlBlob;

            public getNString(param0: string): string;

            public setQueryTimeout(param0: number): void;

            public setDate(param0: string, param1: javasqlDate, param2: javautilCalendar): void;

            public setObject(param0: number, param1: javalangObject, param2: number, param3: number): void;

            public updateNCharacterStream(param0: number, param1: javaioReader, param2: number): void;

            public setMaxFieldSize(param0: number): void;

            public getFloat(param0: string): number;

            public setFetchSize(param0: number): void;

            public setNString(param0: number, param1: string): void;

            public updateBinaryStream(param0: string, param1: javaioInputStream): void;

            public getNClob(param0: number): javasqlNClob;

            public getTime(param0: number): javasqlTime;

            public absolute(param0: number): boolean;

            public setConcurrency(param0: number): void;

            public getTime(param0: string, param1: javautilCalendar): javasqlTime;

            public getNCharacterStream(param0: number): javaioReader;

            public updateClob(param0: number, param1: javaioReader): void;

            public updateNString(param0: string, param1: string): void;

            public getInt(param0: number): number;

            public getTimestamp(param0: number, param1: javautilCalendar): javasqlTimestamp;

            public setNull(param0: string, param1: number): void;

            public setCharacterStream(param0: string, param1: javaioReader): void;

            public getMaxRows(): number;

            public setTime(param0: number, param1: javasqlTime, param2: javautilCalendar): void;

            public updateBytes(param0: string, param1: native.Array<number>): void;

            public getDataSourceName(): string;

            public setBinaryStream(param0: number, param1: javaioInputStream, param2: number): void;

            public setReadOnly(param0: boolean): void;

            public setTypeMap(param0: javautilMap): void;

            public getMetaData(): javasqlResultSetMetaData;

            public getURL(param0: string): javanetURL;

            public updateNClob(param0: string, param1: javaioReader): void;

            public setSQLXML(param0: number, param1: javasqlSQLXML): void;

            public updateString(param0: number, param1: string): void;

            public close(): void;

            public setFloat(param0: string, param1: number): void;

            public setClob(param0: number, param1: javaioReader): void;

            public setNClob(param0: string, param1: javaioReader, param2: number): void;

            public addRowSetListener(param0: javax.sql.RowSetListener): void;

            public rowUpdated(): boolean;

            public setTransactionIsolation(param0: number): void;

            public updateBinaryStream(param0: number, param1: javaioInputStream): void;

            public setDate(param0: string, param1: javasqlDate): void;

            public setAsciiStream(param0: string, param1: javaioInputStream): void;

            public setDataSourceName(param0: string): void;

            public next(): boolean;

            public getShort(param0: string): number;

            public updateInt(param0: string, param1: number): void;

            public setInt(param0: string, param1: number): void;

            public setBoolean(param0: string, param1: boolean): void;

            public updateClob(param0: string, param1: javaioReader, param2: number): void;

            public insertRow(): void;

            public updateInt(param0: number, param1: number): void;

            public updateArray(param0: string, param1: javasqlArray): void;

            public getUsername(): string;

            public setNClob(param0: string, param1: javaioReader): void;

            public setTime(param0: string, param1: javasqlTime): void;

            public getFloat(param0: number): number;

            public setArray(param0: number, param1: javasqlArray): void;

            public setType(param0: number): void;

            public updateTimestamp(param0: string, param1: javasqlTimestamp): void;

            public getBigDecimal(param0: string, param1: number): javamathBigDecimal;

            public getObject(param0: string): javalangObject;

            public getTypeMap(): javautilMap;

            public isAfterLast(): boolean;

            public setClob(param0: string, param1: javaioReader): void;

            public beforeFirst(): void;

            public updateShort(param0: string, param1: number): void;

            public updateByte(param0: number, param1: number): void;

            public updateBlob(param0: number, param1: javaioInputStream): void;

            public getMaxFieldSize(): number;

            public getClob(param0: string): javasqlClob;

            public updateTime(param0: string, param1: javasqlTime): void;

            public getRowId(param0: number): javasqlRowId;

            public updateNCharacterStream(param0: number, param1: javaioReader): void;

            public getDate(param0: number, param1: javautilCalendar): javasqlDate;

            public getFetchSize(): number;

            public getLong(param0: string): number;

            public getInt(param0: string): number;

            public getSQLXML(param0: string): javasqlSQLXML;

            public setDate(param0: number, param1: javasqlDate): void;

            public updateObject(param0: string, param1: javalangObject, param2: number): void;

            public getByte(param0: string): number;

            public getStatement(): javasqlStatement;

            public updateRef(param0: string, param1: javasqlRef): void;

            public getRowId(param0: string): javasqlRowId;

            public updateDate(param0: number, param1: javasqlDate): void;

            public updateBlob(param0: string, param1: javaioInputStream, param2: number): void;

            public setCharacterStream(param0: number, param1: javaioReader): void;

            public updateBlob(param0: string, param1: javaioInputStream): void;

            public updateShort(param0: number, param1: number): void;

            public setObject(param0: number, param1: javalangObject, param2: number): void;

            public updateFloat(param0: number, param1: number): void;

            public setPassword(param0: string): void;

            public setNCharacterStream(param0: number, param1: javaioReader, param2: number): void;

            public setBinaryStream(param0: string, param1: javaioInputStream, param2: number): void;

            public getBoolean(param0: number): boolean;

            public updateObject(param0: number, param1: javalangObject): void;

            public setString(param0: number, param1: string): void;

            public unwrap(param0: javalangClass): javalangObject;

            public setNCharacterStream(param0: string, param1: javaioReader): void;

            public first(): boolean;

            public updateBinaryStream(param0: string, param1: javaioInputStream, param2: number): void;

            public getBytes(param0: number): native.Array<number>;

            public getObject(param0: number): javalangObject;

            public setCharacterStream(param0: string, param1: javaioReader, param2: number): void;

            public setShort(param0: number, param1: number): void;

            public updateBytes(param0: number, param1: native.Array<number>): void;

            public getDate(param0: string, param1: javautilCalendar): javasqlDate;

            public updateCharacterStream(param0: number, param1: javaioReader, param2: number): void;

            public updateArray(param0: number, param1: javasqlArray): void;

            public updateRef(param0: number, param1: javasqlRef): void;

            public updateClob(param0: number, param1: javaioReader, param2: number): void;

            public updateNClob(param0: number, param1: javasqlNClob): void;

            public getEscapeProcessing(): boolean;

            public setTime(param0: string, param1: javasqlTime, param2: javautilCalendar): void;

            public getURL(param0: number): javanetURL;

            public setBytes(param0: string, param1: native.Array<number>): void;

            public deleteRow(): void;

            public setFetchDirection(param0: number): void;

            public setBigDecimal(param0: number, param1: javamathBigDecimal): void;

            public isWrapperFor(param0: javalangClass): boolean;

            public setUsername(param0: string): void;

            public updateLong(param0: string, param1: number): void;
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./javax.sql.RowSet.d.ts" />
declare module javax {
    export module sql {
        export class RowSetEvent extends javautilEventObject implements javaioSerializable {
            public constructor(param0: javax.sql.RowSet);
            public constructor(param0: javalangObject);
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.sql.Connection.d.ts" />
/// <reference path="./java.sql.ResultSet.d.ts" />
/// <reference path="./javax.sql.RowSetMetaData.d.ts" />
declare module javax {
    export module sql {
        export class RowSetInternal extends javalangObject {
            /**
             * Constructs a new instance of the javax.sql.RowSetInternal interface with the provided implementation.
             */
            public constructor(implementation: {
                getConnection(): javasqlConnection;
                getOriginal(): javasqlResultSet;
                getOriginalRow(): javasqlResultSet;
                getParams(): native.Array<javalangObject>;
                setMetaData(param0: javax.sql.RowSetMetaData): void;
            });

            public setMetaData(param0: javax.sql.RowSetMetaData): void;

            public getOriginal(): javasqlResultSet;

            public getConnection(): javasqlConnection;

            public getParams(): native.Array<javalangObject>;

            public getOriginalRow(): javasqlResultSet;
        }
    }
}

/// <reference path="./javax.sql.RowSetEvent.d.ts" />
declare module javax {
    export module sql {
        export class RowSetListener extends javalangObject implements javautilEventListener {
            /**
             * Constructs a new instance of the javax.sql.RowSetListener interface with the provided implementation.
             */
            public constructor(implementation: {
                cursorMoved(param0: javax.sql.RowSetEvent): void;
                rowChanged(param0: javax.sql.RowSetEvent): void;
                rowSetChanged(param0: javax.sql.RowSetEvent): void;
            });

            public rowSetChanged(param0: javax.sql.RowSetEvent): void;

            public rowChanged(param0: javax.sql.RowSetEvent): void;

            public cursorMoved(param0: javax.sql.RowSetEvent): void;
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module javax {
    export module sql {
        export class RowSetMetaData extends javalangObject implements javasqlResultSetMetaData {
            /**
             * Constructs a new instance of the javax.sql.RowSetMetaData interface with the provided implementation.
             */
            public constructor(implementation: {
                setAutoIncrement(param0: number, param1: boolean): void;
                setCaseSensitive(param0: number, param1: boolean): void;
                setCatalogName(param0: number, param1: string): void;
                setColumnCount(param0: number): void;
                setColumnDisplaySize(param0: number, param1: number): void;
                setColumnLabel(param0: number, param1: string): void;
                setColumnName(param0: number, param1: string): void;
                setColumnType(param0: number, param1: number): void;
                setColumnTypeName(param0: number, param1: string): void;
                setCurrency(param0: number, param1: boolean): void;
                setNullable(param0: number, param1: number): void;
                setPrecision(param0: number, param1: number): void;
                setScale(param0: number, param1: number): void;
                setSchemaName(param0: number, param1: string): void;
                setSearchable(param0: number, param1: boolean): void;
                setSigned(param0: number, param1: boolean): void;
                setTableName(param0: number, param1: string): void;
                getCatalogName(param0: number): string;
                getColumnClassName(param0: number): string;
                getColumnCount(): number;
                getColumnDisplaySize(param0: number): number;
                getColumnLabel(param0: number): string;
                getColumnName(param0: number): string;
                getColumnType(param0: number): number;
                getColumnTypeName(param0: number): string;
                getPrecision(param0: number): number;
                getScale(param0: number): number;
                getSchemaName(param0: number): string;
                getTableName(param0: number): string;
                isAutoIncrement(param0: number): boolean;
                isCaseSensitive(param0: number): boolean;
                isCurrency(param0: number): boolean;
                isDefinitelyWritable(param0: number): boolean;
                isNullable(param0: number): number;
                isReadOnly(param0: number): boolean;
                isSearchable(param0: number): boolean;
                isSigned(param0: number): boolean;
                isWritable(param0: number): boolean;
                unwrap(param0: javalangClass): javalangObject;
                isWrapperFor(param0: javalangClass): boolean;
            });

            public static columnNullableUnknown: number;
            public static columnNullable: number;
            public static columnNoNulls: number;

            public setSchemaName(param0: number, param1: string): void;

            public getColumnType(param0: number): number;

            public isCurrency(param0: number): boolean;

            public setScale(param0: number, param1: number): void;

            public setColumnCount(param0: number): void;

            public getColumnDisplaySize(param0: number): number;

            public setPrecision(param0: number, param1: number): void;

            public isSigned(param0: number): boolean;

            public getColumnLabel(param0: number): string;

            public getScale(param0: number): number;

            public setColumnDisplaySize(param0: number, param1: number): void;

            public isDefinitelyWritable(param0: number): boolean;

            public setColumnType(param0: number, param1: number): void;

            public isCaseSensitive(param0: number): boolean;

            public setCaseSensitive(param0: number, param1: boolean): void;

            public isWritable(param0: number): boolean;

            public setTableName(param0: number, param1: string): void;

            public setCatalogName(param0: number, param1: string): void;

            public getColumnCount(): number;

            public getColumnName(param0: number): string;

            public setCurrency(param0: number, param1: boolean): void;

            public getTableName(param0: number): string;

            public isReadOnly(param0: number): boolean;

            public setNullable(param0: number, param1: number): void;

            public setColumnName(param0: number, param1: string): void;

            public getColumnTypeName(param0: number): string;

            public getPrecision(param0: number): number;

            public setSigned(param0: number, param1: boolean): void;

            public isAutoIncrement(param0: number): boolean;

            public setAutoIncrement(param0: number, param1: boolean): void;

            public setSearchable(param0: number, param1: boolean): void;

            public isWrapperFor(param0: javalangClass): boolean;

            public getSchemaName(param0: number): string;

            public getCatalogName(param0: number): string;

            public isSearchable(param0: number): boolean;

            public setColumnTypeName(param0: number, param1: string): void;

            public getColumnClassName(param0: number): string;

            public unwrap(param0: javalangClass): javalangObject;

            public setColumnLabel(param0: number, param1: string): void;

            public isNullable(param0: number): number;
        }
    }
}

/// <reference path="./javax.sql.RowSetInternal.d.ts" />
declare module javax {
    export module sql {
        export class RowSetReader extends javalangObject {
            /**
             * Constructs a new instance of the javax.sql.RowSetReader interface with the provided implementation.
             */
            public constructor(implementation: {
                readData(param0: javax.sql.RowSetInternal): void;
            });

            public readData(param0: javax.sql.RowSetInternal): void;
        }
    }
}

/// <reference path="./javax.sql.RowSetInternal.d.ts" />
declare module javax {
    export module sql {
        export class RowSetWriter extends javalangObject {
            /**
             * Constructs a new instance of the javax.sql.RowSetWriter interface with the provided implementation.
             */
            public constructor(implementation: {
                writeData(param0: javax.sql.RowSetInternal): boolean;
            });

            public writeData(param0: javax.sql.RowSetInternal): boolean;
        }
    }
}

import javasqlPreparedStatement = java.sql.PreparedStatement;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.sql.PreparedStatement.d.ts" />
/// <reference path="./java.sql.SQLException.d.ts" />
/// <reference path="./javax.sql.PooledConnection.d.ts" />
declare module javax {
    export module sql {
        export class StatementEvent extends javautilEventObject {
            public getSQLException(): javasqlSQLException;

            public constructor(param0: javalangObject);
            public constructor(param0: javax.sql.PooledConnection, param1: javasqlPreparedStatement);
            public constructor(param0: javax.sql.PooledConnection, param1: javasqlPreparedStatement, param2: javasqlSQLException);

            public getStatement(): javasqlPreparedStatement;
        }
    }
}

/// <reference path="./javax.sql.StatementEvent.d.ts" />
declare module javax {
    export module sql {
        export class StatementEventListener extends javalangObject implements javautilEventListener {
            /**
             * Constructs a new instance of the javax.sql.StatementEventListener interface with the provided implementation.
             */
            public constructor(implementation: {
                statementClosed(param0: javax.sql.StatementEvent): void;
                statementErrorOccurred(param0: javax.sql.StatementEvent): void;
            });

            public statementErrorOccurred(param0: javax.sql.StatementEvent): void;

            public statementClosed(param0: javax.sql.StatementEvent): void;
        }
    }
}

declare module javax {
    export module xml {
        export class XMLConstants extends javalangObject {
            public static DEFAULT_NS_PREFIX: string;
            public static FEATURE_SECURE_PROCESSING: string;
            public static NULL_NS_URI: string;
            public static RELAXNG_NS_URI: string;
            public static W3C_XML_SCHEMA_INSTANCE_NS_URI: string;
            public static W3C_XML_SCHEMA_NS_URI: string;
            public static W3C_XPATH_DATATYPE_NS_URI: string;
            public static XMLNS_ATTRIBUTE: string;
            public static XMLNS_ATTRIBUTE_NS_URI: string;
            public static XML_DTD_NS_URI: string;
            public static XML_NS_PREFIX: string;
            public static XML_NS_URI: string;
        }
    }
}

/// <reference path="./java.io.PrintStream.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module javax {
    export module xml {
        export module datatype {
            export class DatatypeConfigurationException extends javalangException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);

                public printStackTrace(param0: javaioPrintStream): void;

                public constructor(param0: string);

                public printStackTrace(param0: javaioPrintWriter): void;

                public constructor();

                public printStackTrace(): void;
            }
        }
    }
}

/// <reference path="./javax.xml.namespace.QName.d.ts" />
declare module javax {
    export module xml {
        export module datatype {
            export class DatatypeConstants extends javalangObject {
                public static APRIL: number;
                public static AUGUST: number;
                public static DATE: javax.xml.namespace.QName;
                public static DATETIME: javax.xml.namespace.QName;
                public static DAYS: javax.xml.datatype.DatatypeConstants.Field;
                public static DECEMBER: number;
                public static DURATION: javax.xml.namespace.QName;
                public static DURATION_DAYTIME: javax.xml.namespace.QName;
                public static DURATION_YEARMONTH: javax.xml.namespace.QName;
                public static EQUAL: number;
                public static FEBRUARY: number;
                public static FIELD_UNDEFINED: number;
                public static GDAY: javax.xml.namespace.QName;
                public static GMONTH: javax.xml.namespace.QName;
                public static GMONTHDAY: javax.xml.namespace.QName;
                public static GREATER: number;
                public static GYEAR: javax.xml.namespace.QName;
                public static GYEARMONTH: javax.xml.namespace.QName;
                public static HOURS: javax.xml.datatype.DatatypeConstants.Field;
                public static INDETERMINATE: number;
                public static JANUARY: number;
                public static JULY: number;
                public static JUNE: number;
                public static LESSER: number;
                public static MARCH: number;
                public static MAX_TIMEZONE_OFFSET: number;
                public static MAY: number;
                public static MINUTES: javax.xml.datatype.DatatypeConstants.Field;
                public static MIN_TIMEZONE_OFFSET: number;
                public static MONTHS: javax.xml.datatype.DatatypeConstants.Field;
                public static NOVEMBER: number;
                public static OCTOBER: number;
                public static SECONDS: javax.xml.datatype.DatatypeConstants.Field;
                public static SEPTEMBER: number;
                public static TIME: javax.xml.namespace.QName;
                public static YEARS: javax.xml.datatype.DatatypeConstants.Field;
            }
            export module DatatypeConstants {
                export class Field extends javalangObject {
                    public toString(): string;

                    public getId(): number;
                }
            }
        }
    }
}

import javautilGregorianCalendar = java.util.GregorianCalendar;
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.math.BigDecimal.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />
/// <reference path="./java.util.GregorianCalendar.d.ts" />
/// <reference path="./javax.xml.datatype.Duration.d.ts" />
/// <reference path="./javax.xml.datatype.XMLGregorianCalendar.d.ts" />
declare module javax {
    export module xml {
        export module datatype {
            export abstract class DatatypeFactory extends javalangObject {
                public static DATATYPEFACTORY_IMPLEMENTATION_CLASS: string;
                public static DATATYPEFACTORY_PROPERTY: string;

                public newXMLGregorianCalendar(param0: javautilGregorianCalendar): javax.xml.datatype.XMLGregorianCalendar;

                public newXMLGregorianCalendarTime(param0: number, param1: number, param2: number, param3: javamathBigDecimal, param4: number): javax.xml.datatype.XMLGregorianCalendar;

                public newXMLGregorianCalendar(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): javax.xml.datatype.XMLGregorianCalendar;

                public newDurationDayTime(param0: number): javax.xml.datatype.Duration;

                public newDurationYearMonth(param0: number): javax.xml.datatype.Duration;

                public newXMLGregorianCalendar(): javax.xml.datatype.XMLGregorianCalendar;

                public newDurationYearMonth(param0: string): javax.xml.datatype.Duration;

                public newDurationDayTime(param0: boolean, param1: javamathBigInteger, param2: javamathBigInteger, param3: javamathBigInteger, param4: javamathBigInteger): javax.xml.datatype.Duration;

                public constructor();

                public newDurationDayTime(param0: string): javax.xml.datatype.Duration;

                public newXMLGregorianCalendar(param0: javamathBigInteger, param1: number, param2: number, param3: number, param4: number, param5: number, param6: javamathBigDecimal, param7: number): javax.xml.datatype.XMLGregorianCalendar;
                public newXMLGregorianCalendar(param0: string): javax.xml.datatype.XMLGregorianCalendar;

                public newDurationYearMonth(param0: boolean, param1: number, param2: number): javax.xml.datatype.Duration;

                public newDurationDayTime(param0: boolean, param1: number, param2: number, param3: number, param4: number): javax.xml.datatype.Duration;

                public newDurationYearMonth(param0: boolean, param1: javamathBigInteger, param2: javamathBigInteger): javax.xml.datatype.Duration;

                public static newInstance(): javax.xml.datatype.DatatypeFactory;

                public newXMLGregorianCalendarTime(param0: number, param1: number, param2: number, param3: number, param4: number): javax.xml.datatype.XMLGregorianCalendar;

                public newDuration(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): javax.xml.datatype.Duration;

                public newXMLGregorianCalendarTime(param0: number, param1: number, param2: number, param3: number): javax.xml.datatype.XMLGregorianCalendar;

                public static newInstance(param0: string, param1: javalangClassLoader): javax.xml.datatype.DatatypeFactory;

                public newDuration(param0: number): javax.xml.datatype.Duration;
                public newDuration(param0: boolean, param1: javamathBigInteger, param2: javamathBigInteger, param3: javamathBigInteger, param4: javamathBigInteger, param5: javamathBigInteger, param6: javamathBigDecimal): javax.xml.datatype.Duration;
                public newDuration(param0: string): javax.xml.datatype.Duration;

                public newXMLGregorianCalendarDate(param0: number, param1: number, param2: number, param3: number): javax.xml.datatype.XMLGregorianCalendar;
            }
        }
    }
}

/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.math.BigDecimal.d.ts" />
/// <reference path="./java.util.Calendar.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./javax.xml.namespace.QName.d.ts" />
declare module javax {
    export module xml {
        export module datatype {
            export abstract class Duration extends javalangObject {
                public getTimeInMillis(param0: javautilCalendar): number;
                public getTimeInMillis(param0: javautilDate): number;

                public getXMLSchemaType(): javax.xml.namespace.QName;

                public constructor();

                public addTo(param0: javautilDate): void;

                public isShorterThan(param0: javax.xml.datatype.Duration): boolean;

                public isLongerThan(param0: javax.xml.datatype.Duration): boolean;

                public getMinutes(): number;

                public add(param0: javax.xml.datatype.Duration): javax.xml.datatype.Duration;

                public compare(param0: javax.xml.datatype.Duration): number;

                public hashCode(): number;

                public getYears(): number;

                public getMonths(): number;

                public multiply(param0: javamathBigDecimal): javax.xml.datatype.Duration;

                public getSeconds(): number;

                public negate(): javax.xml.datatype.Duration;

                public getSign(): number;

                public toString(): string;

                public subtract(param0: javax.xml.datatype.Duration): javax.xml.datatype.Duration;

                public getField(param0: javax.xml.datatype.DatatypeConstants.Field): javalangNumber;

                public normalizeWith(param0: javautilCalendar): javax.xml.datatype.Duration;

                public equals(param0: javalangObject): boolean;

                public addTo(param0: javautilCalendar): void;

                public multiply(param0: number): javax.xml.datatype.Duration;

                public getDays(): number;

                public isSet(param0: javax.xml.datatype.DatatypeConstants.Field): boolean;

                public getHours(): number;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.math.BigDecimal.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />
/// <reference path="./java.util.GregorianCalendar.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.TimeZone.d.ts" />
/// <reference path="./javax.xml.datatype.Duration.d.ts" />
/// <reference path="./javax.xml.namespace.QName.d.ts" />
declare module javax {
    export module xml {
        export module datatype {
            export abstract class XMLGregorianCalendar extends javalangObject implements javalangCloneable {
                public setHour(param0: number): void;

                public getYear(): number;

                public setMinute(param0: number): void;

                public getXMLSchemaType(): javax.xml.namespace.QName;

                public getSecond(): number;

                public constructor();

                public setSecond(param0: number): void;

                public reset(): void;

                public getHour(): number;

                public compare(param0: javax.xml.datatype.XMLGregorianCalendar): number;

                public add(param0: javax.xml.datatype.Duration): void;

                public hashCode(): number;

                public setFractionalSecond(param0: javamathBigDecimal): void;

                public clear(): void;

                public getMonth(): number;

                public setYear(param0: javamathBigInteger): void;

                public getEon(): javamathBigInteger;

                public clone(): javalangObject;

                public setYear(param0: number): void;

                public setTime(param0: number, param1: number, param2: number, param3: number): void;

                public getMillisecond(): number;

                public setDay(param0: number): void;

                public getTimezone(): number;

                public toXMLFormat(): string;

                public toString(): string;

                public isValid(): boolean;

                public setMonth(param0: number): void;

                public setMillisecond(param0: number): void;

                public normalize(): javax.xml.datatype.XMLGregorianCalendar;

                public getDay(): number;

                public getEonAndYear(): javamathBigInteger;

                public toGregorianCalendar(): javautilGregorianCalendar;

                public setTime(param0: number, param1: number, param2: number): void;

                public equals(param0: javalangObject): boolean;

                public setTime(param0: number, param1: number, param2: number, param3: javamathBigDecimal): void;

                public setTimezone(param0: number): void;

                public toGregorianCalendar(param0: javautilTimeZone, param1: javautilLocale, param2: javax.xml.datatype.XMLGregorianCalendar): javautilGregorianCalendar;

                public getMinute(): number;

                public getTimeZone(param0: number): javautilTimeZone;

                public getFractionalSecond(): javamathBigDecimal;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
declare module javax {
    export module xml {
        export module namespace {
            export class NamespaceContext extends javalangObject {
                /**
                 * Constructs a new instance of the javax.xml.namespace.NamespaceContext interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getNamespaceURI(param0: string): string;
                    getPrefix(param0: string): string;
                    getPrefixes(param0: string): javautilIterator;
                });

                public getPrefix(param0: string): string;

                public getPrefixes(param0: string): javautilIterator;

                public getNamespaceURI(param0: string): string;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module javax {
    export module xml {
        export module namespace {
            export class QName extends javalangObject implements javaioSerializable {
                public static valueOf(param0: string): javax.xml.namespace.QName;

                public getPrefix(): string;

                public getNamespaceURI(): string;

                public getLocalPart(): string;

                public equals(param0: javalangObject): boolean;

                public hashCode(): number;

                public constructor(param0: string, param1: string, param2: string);

                public toString(): string;

                public constructor(param0: string, param1: string);
                public constructor(param0: string);
            }
        }
    }
}

import orgw3cdomDocument = org.w3c.dom.Document;
import orgxmlsaxInputSource = org.xml.sax.InputSource;
import orgxmlsaxEntityResolver = org.xml.sax.EntityResolver;
import orgxmlsaxErrorHandler = org.xml.sax.ErrorHandler;
import orgw3cdomDOMImplementation = org.w3c.dom.DOMImplementation;
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.validation.Schema.d.ts" />
/// <reference path="./org.w3c.dom.DOMImplementation.d.ts" />
/// <reference path="./org.w3c.dom.Document.d.ts" />
/// <reference path="./org.xml.sax.EntityResolver.d.ts" />
/// <reference path="./org.xml.sax.ErrorHandler.d.ts" />
/// <reference path="./org.xml.sax.InputSource.d.ts" />
declare module javax {
    export module xml {
        export module parsers {
            export abstract class DocumentBuilder extends javalangObject {
                public parse(param0: orgxmlsaxInputSource): orgw3cdomDocument;

                public isXIncludeAware(): boolean;

                public getSchema(): javax.xml.validation.Schema;

                public parse(param0: javaioFile): orgw3cdomDocument;

                public setEntityResolver(param0: orgxmlsaxEntityResolver): void;

                public setErrorHandler(param0: orgxmlsaxErrorHandler): void;

                public constructor();

                public reset(): void;

                public parse(param0: javaioInputStream): orgw3cdomDocument;

                public isNamespaceAware(): boolean;

                public newDocument(): orgw3cdomDocument;

                public getDOMImplementation(): orgw3cdomDOMImplementation;

                public parse(param0: javaioInputStream, param1: string): orgw3cdomDocument;
                public parse(param0: string): orgw3cdomDocument;

                public isValidating(): boolean;
            }
        }
    }
}

/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.parsers.DocumentBuilder.d.ts" />
/// <reference path="./javax.xml.validation.Schema.d.ts" />
declare module javax {
    export module xml {
        export module parsers {
            export abstract class DocumentBuilderFactory extends javalangObject {
                public setIgnoringElementContentWhitespace(param0: boolean): void;

                public isCoalescing(): boolean;

                public isXIncludeAware(): boolean;

                public isIgnoringComments(): boolean;

                public static newInstance(): javax.xml.parsers.DocumentBuilderFactory;

                public setIgnoringComments(param0: boolean): void;

                public setValidating(param0: boolean): void;

                public setAttribute(param0: string, param1: javalangObject): void;

                public getSchema(): javax.xml.validation.Schema;

                public getFeature(param0: string): boolean;

                public setNamespaceAware(param0: boolean): void;

                public setSchema(param0: javax.xml.validation.Schema): void;

                public getAttribute(param0: string): javalangObject;

                public constructor();

                public static newInstance(param0: string, param1: javalangClassLoader): javax.xml.parsers.DocumentBuilderFactory;

                public isExpandEntityReferences(): boolean;

                public isNamespaceAware(): boolean;

                public setXIncludeAware(param0: boolean): void;

                public newDocumentBuilder(): javax.xml.parsers.DocumentBuilder;

                public isIgnoringElementContentWhitespace(): boolean;

                public setCoalescing(param0: boolean): void;

                public setFeature(param0: string, param1: boolean): void;

                public setExpandEntityReferences(param0: boolean): void;

                public isValidating(): boolean;
            }
        }
    }
}

/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module javax {
    export module xml {
        export module parsers {
            export class FactoryConfigurationError extends javalangError {
                public getException(): javalangException;

                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: javalangException, param1: string);
                public constructor(param0: string, param1: javalangThrowable);

                public getMessage(): string;

                public constructor(param0: string);
                public constructor(param0: javalangException);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module javax {
    export module xml {
        export module parsers {
            export class ParserConfigurationException extends javalangException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

import orgxmlsaxHandlerBase = org.xml.sax.HandlerBase;
import orgxmlsaxhelpersDefaultHandler = org.xml.sax.helpers.DefaultHandler;
import orgxmlsaxParser = org.xml.sax.Parser;
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.validation.Schema.d.ts" />
/// <reference path="./org.xml.sax.HandlerBase.d.ts" />
/// <reference path="./org.xml.sax.InputSource.d.ts" />
/// <reference path="./org.xml.sax.Parser.d.ts" />
/// <reference path="./org.xml.sax.XMLReader.d.ts" />
/// <reference path="./org.xml.sax.helpers.DefaultHandler.d.ts" />
declare module javax {
    export module xml {
        export module parsers {
            export abstract class SAXParser extends javalangObject {
                public parse(param0: javaioInputStream, param1: orgxmlsaxhelpersDefaultHandler): void;

                public isXIncludeAware(): boolean;

                public getProperty(param0: string): javalangObject;

                public parse(param0: javaioFile, param1: orgxmlsaxhelpersDefaultHandler): void;
                public parse(param0: orgxmlsaxInputSource, param1: orgxmlsaxHandlerBase): void;
                public parse(param0: string, param1: orgxmlsaxhelpersDefaultHandler): void;
                public parse(param0: orgxmlsaxInputSource, param1: orgxmlsaxhelpersDefaultHandler): void;

                public getSchema(): javax.xml.validation.Schema;

                public parse(param0: javaioInputStream, param1: orgxmlsaxHandlerBase, param2: string): void;

                public constructor();

                public reset(): void;

                public getParser(): orgxmlsaxParser;

                public parse(param0: javaioInputStream, param1: orgxmlsaxhelpersDefaultHandler, param2: string): void;
                public parse(param0: javaioInputStream, param1: orgxmlsaxHandlerBase): void;

                public isNamespaceAware(): boolean;

                public parse(param0: javaioFile, param1: orgxmlsaxHandlerBase): void;

                public setProperty(param0: string, param1: javalangObject): void;

                public getXMLReader(): orgxmlsaxXMLReader;

                public parse(param0: string, param1: orgxmlsaxHandlerBase): void;

                public isValidating(): boolean;
            }
        }
    }
}

/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.parsers.SAXParser.d.ts" />
/// <reference path="./javax.xml.validation.Schema.d.ts" />
declare module javax {
    export module xml {
        export module parsers {
            export abstract class SAXParserFactory extends javalangObject {
                public isXIncludeAware(): boolean;

                public setValidating(param0: boolean): void;

                public getSchema(): javax.xml.validation.Schema;

                public getFeature(param0: string): boolean;

                public setNamespaceAware(param0: boolean): void;

                public setSchema(param0: javax.xml.validation.Schema): void;

                public constructor();

                public newSAXParser(): javax.xml.parsers.SAXParser;

                public isNamespaceAware(): boolean;

                public setXIncludeAware(param0: boolean): void;

                public static newInstance(param0: string, param1: javalangClassLoader): javax.xml.parsers.SAXParserFactory;
                public static newInstance(): javax.xml.parsers.SAXParserFactory;

                public setFeature(param0: string, param1: boolean): void;

                public isValidating(): boolean;
            }
        }
    }
}

/// <reference path="./javax.xml.transform.TransformerException.d.ts" />
declare module javax {
    export module xml {
        export module transform {
            export class ErrorListener extends javalangObject {
                /**
                 * Constructs a new instance of the javax.xml.transform.ErrorListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    warning(param0: javax.xml.transform.TransformerException): void;
                    error(param0: javax.xml.transform.TransformerException): void;
                    fatalError(param0: javax.xml.transform.TransformerException): void;
                });

                public error(param0: javax.xml.transform.TransformerException): void;

                public warning(param0: javax.xml.transform.TransformerException): void;

                public fatalError(param0: javax.xml.transform.TransformerException): void;
            }
        }
    }
}

declare module javax {
    export module xml {
        export module transform {
            export class OutputKeys extends javalangObject {
                public static CDATA_SECTION_ELEMENTS: string;
                public static DOCTYPE_PUBLIC: string;
                public static DOCTYPE_SYSTEM: string;
                public static ENCODING: string;
                public static INDENT: string;
                public static MEDIA_TYPE: string;
                public static METHOD: string;
                public static OMIT_XML_DECLARATION: string;
                public static STANDALONE: string;
                public static VERSION: string;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module javax {
    export module xml {
        export module transform {
            export class Result extends javalangObject {
                /**
                 * Constructs a new instance of the javax.xml.transform.Result interface with the provided implementation.
                 */
                public constructor(implementation: {
                    setSystemId(param0: string): void;
                    getSystemId(): string;
                });

                public static PI_ENABLE_OUTPUT_ESCAPING: string;
                public static PI_DISABLE_OUTPUT_ESCAPING: string;

                public setSystemId(param0: string): void;

                public getSystemId(): string;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module javax {
    export module xml {
        export module transform {
            export class Source extends javalangObject {
                /**
                 * Constructs a new instance of the javax.xml.transform.Source interface with the provided implementation.
                 */
                public constructor(implementation: {
                    setSystemId(param0: string): void;
                    getSystemId(): string;
                });

                public setSystemId(param0: string): void;

                public getSystemId(): string;
            }
        }
    }
}

declare module javax {
    export module xml {
        export module transform {
            export class SourceLocator extends javalangObject {
                /**
                 * Constructs a new instance of the javax.xml.transform.SourceLocator interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getPublicId(): string;
                    getSystemId(): string;
                    getLineNumber(): number;
                    getColumnNumber(): number;
                });

                public getPublicId(): string;

                public getLineNumber(): number;

                public getSystemId(): string;

                public getColumnNumber(): number;
            }
        }
    }
}

import javautilProperties = java.util.Properties;
/// <reference path="./java.util.Properties.d.ts" />
/// <reference path="./javax.xml.transform.Transformer.d.ts" />
declare module javax {
    export module xml {
        export module transform {
            export class Templates extends javalangObject {
                /**
                 * Constructs a new instance of the javax.xml.transform.Templates interface with the provided implementation.
                 */
                public constructor(implementation: {
                    newTransformer(): javax.xml.transform.Transformer;
                    getOutputProperties(): javautilProperties;
                });

                public newTransformer(): javax.xml.transform.Transformer;

                public getOutputProperties(): javautilProperties;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Properties.d.ts" />
/// <reference path="./javax.xml.transform.ErrorListener.d.ts" />
/// <reference path="./javax.xml.transform.Result.d.ts" />
/// <reference path="./javax.xml.transform.Source.d.ts" />
/// <reference path="./javax.xml.transform.URIResolver.d.ts" />
declare module javax {
    export module xml {
        export module transform {
            export abstract class Transformer extends javalangObject {
                public getOutputProperty(param0: string): string;

                public getErrorListener(): javax.xml.transform.ErrorListener;

                public setParameter(param0: string, param1: javalangObject): void;

                public transform(param0: javax.xml.transform.Source, param1: javax.xml.transform.Result): void;

                public getParameter(param0: string): javalangObject;

                public constructor();

                public clearParameters(): void;

                public reset(): void;

                public setErrorListener(param0: javax.xml.transform.ErrorListener): void;

                public setURIResolver(param0: javax.xml.transform.URIResolver): void;

                public getOutputProperties(): javautilProperties;

                public setOutputProperties(param0: javautilProperties): void;

                public getURIResolver(): javax.xml.transform.URIResolver;

                public setOutputProperty(param0: string, param1: string): void;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./javax.xml.transform.SourceLocator.d.ts" />
declare module javax {
    export module xml {
        export module transform {
            export class TransformerConfigurationException extends javax.xml.transform.TransformerException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javax.xml.transform.SourceLocator);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string, param1: javax.xml.transform.SourceLocator, param2: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.io.PrintStream.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./javax.xml.transform.SourceLocator.d.ts" />
declare module javax {
    export module xml {
        export module transform {
            export class TransformerException extends javalangException {
                public setLocator(param0: javax.xml.transform.SourceLocator): void;

                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javax.xml.transform.SourceLocator);

                public initCause(param0: javalangThrowable): javalangThrowable;

                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);

                public getLocationAsString(): string;

                public printStackTrace(param0: javaioPrintStream): void;

                public getCause(): javalangThrowable;

                public constructor(param0: string);
                public constructor();

                public getLocator(): javax.xml.transform.SourceLocator;

                public getMessageAndLocation(): string;

                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string, param1: javax.xml.transform.SourceLocator, param2: javalangThrowable);

                public printStackTrace(param0: javaioPrintWriter): void;

                public getException(): javalangThrowable;

                public printStackTrace(): void;
            }
        }
    }
}

/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.transform.ErrorListener.d.ts" />
/// <reference path="./javax.xml.transform.Source.d.ts" />
/// <reference path="./javax.xml.transform.Templates.d.ts" />
/// <reference path="./javax.xml.transform.Transformer.d.ts" />
/// <reference path="./javax.xml.transform.URIResolver.d.ts" />
declare module javax {
    export module xml {
        export module transform {
            export abstract class TransformerFactory extends javalangObject {
                public newTransformer(param0: javax.xml.transform.Source): javax.xml.transform.Transformer;

                public newTemplates(param0: javax.xml.transform.Source): javax.xml.transform.Templates;

                public getAssociatedStylesheet(param0: javax.xml.transform.Source, param1: string, param2: string, param3: string): javax.xml.transform.Source;

                public newTransformer(): javax.xml.transform.Transformer;

                public setAttribute(param0: string, param1: javalangObject): void;

                public getErrorListener(): javax.xml.transform.ErrorListener;

                public getFeature(param0: string): boolean;

                public static newInstance(): javax.xml.transform.TransformerFactory;

                public getAttribute(param0: string): javalangObject;

                public constructor();

                public static newInstance(param0: string, param1: javalangClassLoader): javax.xml.transform.TransformerFactory;

                public setErrorListener(param0: javax.xml.transform.ErrorListener): void;

                public setURIResolver(param0: javax.xml.transform.URIResolver): void;

                public setFeature(param0: string, param1: boolean): void;

                public getURIResolver(): javax.xml.transform.URIResolver;
            }
        }
    }
}

/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module javax {
    export module xml {
        export module transform {
            export class TransformerFactoryConfigurationError extends javalangError {
                public getException(): javalangException;

                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: javalangException, param1: string);
                public constructor(param0: string, param1: javalangThrowable);

                public getMessage(): string;

                public constructor(param0: string);
                public constructor(param0: javalangException);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.transform.Source.d.ts" />
declare module javax {
    export module xml {
        export module transform {
            export class URIResolver extends javalangObject {
                /**
                 * Constructs a new instance of the javax.xml.transform.URIResolver interface with the provided implementation.
                 */
                public constructor(implementation: {
                    resolve(param0: string, param1: string): javax.xml.transform.Source;
                });

                public resolve(param0: string, param1: string): javax.xml.transform.Source;
            }
        }
    }
}

import orgw3cdomNode = org.w3c.dom.Node;
/// <reference path="./org.w3c.dom.Node.d.ts" />
declare module javax {
    export module xml {
        export module transform {
            export module dom {
                export class DOMLocator extends javalangObject implements javax.xml.transform.SourceLocator {
                    /**
                     * Constructs a new instance of the javax.xml.transform.dom.DOMLocator interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        getOriginatingNode(): orgw3cdomNode;
                        getPublicId(): string;
                        getSystemId(): string;
                        getLineNumber(): number;
                        getColumnNumber(): number;
                    });

                    public getLineNumber(): number;

                    public getOriginatingNode(): orgw3cdomNode;

                    public getPublicId(): string;

                    public getColumnNumber(): number;

                    public getSystemId(): string;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />
declare module javax {
    export module xml {
        export module transform {
            export module dom {
                export class DOMResult extends javalangObject implements javax.xml.transform.Result {
                    public static FEATURE: string;

                    public constructor();

                    public getNode(): orgw3cdomNode;

                    public getNextSibling(): orgw3cdomNode;

                    public constructor(param0: orgw3cdomNode, param1: orgw3cdomNode, param2: string);

                    public setNextSibling(param0: orgw3cdomNode): void;

                    public setSystemId(param0: string): void;

                    public getSystemId(): string;

                    public constructor(param0: orgw3cdomNode);
                    public constructor(param0: orgw3cdomNode, param1: string);

                    public setNode(param0: orgw3cdomNode): void;

                    public constructor(param0: orgw3cdomNode, param1: orgw3cdomNode);
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />
declare module javax {
    export module xml {
        export module transform {
            export module dom {
                export class DOMSource extends javalangObject implements javax.xml.transform.Source {
                    public static FEATURE: string;

                    public constructor();

                    public getNode(): orgw3cdomNode;

                    public setSystemId(param0: string): void;

                    public getSystemId(): string;

                    public constructor(param0: orgw3cdomNode);
                    public constructor(param0: orgw3cdomNode, param1: string);

                    public setNode(param0: orgw3cdomNode): void;
                }
            }
        }
    }
}

import orgxmlsaxextLexicalHandler = org.xml.sax.ext.LexicalHandler;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.ContentHandler.d.ts" />
/// <reference path="./org.xml.sax.ext.LexicalHandler.d.ts" />
declare module javax {
    export module xml {
        export module transform {
            export module sax {
                export class SAXResult extends javalangObject implements javax.xml.transform.Result {
                    public static FEATURE: string;

                    public setLexicalHandler(param0: orgxmlsaxextLexicalHandler): void;

                    public constructor();

                    public setHandler(param0: orgxmlsaxContentHandler): void;

                    public getHandler(): orgxmlsaxContentHandler;

                    public constructor(param0: orgxmlsaxContentHandler);

                    public setSystemId(param0: string): void;

                    public getSystemId(): string;

                    public getLexicalHandler(): orgxmlsaxextLexicalHandler;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.transform.Source.d.ts" />
/// <reference path="./org.xml.sax.InputSource.d.ts" />
/// <reference path="./org.xml.sax.XMLReader.d.ts" />
declare module javax {
    export module xml {
        export module transform {
            export module sax {
                export class SAXSource extends javalangObject implements javax.xml.transform.Source {
                    public static FEATURE: string;

                    public getInputSource(): orgxmlsaxInputSource;

                    public constructor();
                    public constructor(param0: orgxmlsaxXMLReader, param1: orgxmlsaxInputSource);

                    public setXMLReader(param0: orgxmlsaxXMLReader): void;

                    public getXMLReader(): orgxmlsaxXMLReader;

                    public constructor(param0: orgxmlsaxInputSource);

                    public static sourceToInputSource(param0: javax.xml.transform.Source): orgxmlsaxInputSource;

                    public setSystemId(param0: string): void;

                    public getSystemId(): string;

                    public setInputSource(param0: orgxmlsaxInputSource): void;
                }
            }
        }
    }
}

import orgxmlsaxXMLFilter = org.xml.sax.XMLFilter;
/// <reference path="./javax.xml.transform.Source.d.ts" />
/// <reference path="./javax.xml.transform.Templates.d.ts" />
/// <reference path="./javax.xml.transform.sax.TemplatesHandler.d.ts" />
/// <reference path="./javax.xml.transform.sax.TransformerHandler.d.ts" />
/// <reference path="./org.xml.sax.XMLFilter.d.ts" />
declare module javax {
    export module xml {
        export module transform {
            export module sax {
                export abstract class SAXTransformerFactory extends javax.xml.transform.TransformerFactory {
                    public static FEATURE: string;
                    public static FEATURE_XMLFILTER: string;

                    public newTransformerHandler(param0: javax.xml.transform.Source): javax.xml.transform.sax.TransformerHandler;

                    public newTemplatesHandler(): javax.xml.transform.sax.TemplatesHandler;

                    public constructor();

                    public newXMLFilter(param0: javax.xml.transform.Templates): orgxmlsaxXMLFilter;

                    public newTransformerHandler(param0: javax.xml.transform.Templates): javax.xml.transform.sax.TransformerHandler;

                    public newXMLFilter(param0: javax.xml.transform.Source): orgxmlsaxXMLFilter;

                    public newTransformerHandler(): javax.xml.transform.sax.TransformerHandler;
                }
            }
        }
    }
}

import orgxmlsaxLocator = org.xml.sax.Locator;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.transform.Templates.d.ts" />
/// <reference path="./org.xml.sax.Attributes.d.ts" />
/// <reference path="./org.xml.sax.Locator.d.ts" />
declare module javax {
    export module xml {
        export module transform {
            export module sax {
                export class TemplatesHandler extends javalangObject implements orgxmlsaxContentHandler {
                    /**
                     * Constructs a new instance of the javax.xml.transform.sax.TemplatesHandler interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        getTemplates(): javax.xml.transform.Templates;
                        setSystemId(param0: string): void;
                        getSystemId(): string;
                        setDocumentLocator(param0: orgxmlsaxLocator): void;
                        startDocument(): void;
                        endDocument(): void;
                        startPrefixMapping(param0: string, param1: string): void;
                        endPrefixMapping(param0: string): void;
                        startElement(param0: string, param1: string, param2: string, param3: orgxmlsaxAttributes): void;
                        endElement(param0: string, param1: string, param2: string): void;
                        characters(param0: native.Array<string>, param1: number, param2: number): void;
                        ignorableWhitespace(param0: native.Array<string>, param1: number, param2: number): void;
                        processingInstruction(param0: string, param1: string): void;
                        skippedEntity(param0: string): void;
                    });

                    public setDocumentLocator(param0: orgxmlsaxLocator): void;

                    public startPrefixMapping(param0: string, param1: string): void;

                    public skippedEntity(param0: string): void;

                    public endDocument(): void;

                    public endElement(param0: string, param1: string, param2: string): void;

                    public startElement(param0: string, param1: string, param2: string, param3: orgxmlsaxAttributes): void;

                    public characters(param0: native.Array<string>, param1: number, param2: number): void;

                    public startDocument(): void;

                    public ignorableWhitespace(param0: native.Array<string>, param1: number, param2: number): void;

                    public processingInstruction(param0: string, param1: string): void;

                    public getTemplates(): javax.xml.transform.Templates;

                    public endPrefixMapping(param0: string): void;

                    public setSystemId(param0: string): void;

                    public getSystemId(): string;
                }
            }
        }
    }
}

import orgxmlsaxDTDHandler = org.xml.sax.DTDHandler;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.transform.Result.d.ts" />
/// <reference path="./javax.xml.transform.Transformer.d.ts" />
/// <reference path="./org.xml.sax.Attributes.d.ts" />
/// <reference path="./org.xml.sax.Locator.d.ts" />
declare module javax {
    export module xml {
        export module transform {
            export module sax {
                export class TransformerHandler extends javalangObject implements orgxmlsaxContentHandler, orgxmlsaxextLexicalHandler, orgxmlsaxDTDHandler {
                    /**
                     * Constructs a new instance of the javax.xml.transform.sax.TransformerHandler interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        setResult(param0: javax.xml.transform.Result): void;
                        setSystemId(param0: string): void;
                        getSystemId(): string;
                        getTransformer(): javax.xml.transform.Transformer;
                        setDocumentLocator(param0: orgxmlsaxLocator): void;
                        startDocument(): void;
                        endDocument(): void;
                        startPrefixMapping(param0: string, param1: string): void;
                        endPrefixMapping(param0: string): void;
                        startElement(param0: string, param1: string, param2: string, param3: orgxmlsaxAttributes): void;
                        endElement(param0: string, param1: string, param2: string): void;
                        characters(param0: native.Array<string>, param1: number, param2: number): void;
                        ignorableWhitespace(param0: native.Array<string>, param1: number, param2: number): void;
                        processingInstruction(param0: string, param1: string): void;
                        skippedEntity(param0: string): void;
                        startDTD(param0: string, param1: string, param2: string): void;
                        endDTD(): void;
                        startEntity(param0: string): void;
                        endEntity(param0: string): void;
                        startCDATA(): void;
                        endCDATA(): void;
                        comment(param0: native.Array<string>, param1: number, param2: number): void;
                        notationDecl(param0: string, param1: string, param2: string): void;
                        unparsedEntityDecl(param0: string, param1: string, param2: string, param3: string): void;
                    });

                    public comment(param0: native.Array<string>, param1: number, param2: number): void;

                    public setDocumentLocator(param0: orgxmlsaxLocator): void;

                    public startPrefixMapping(param0: string, param1: string): void;

                    public skippedEntity(param0: string): void;

                    public endDTD(): void;

                    public endDocument(): void;

                    public endEntity(param0: string): void;

                    public endElement(param0: string, param1: string, param2: string): void;

                    public startCDATA(): void;

                    public startDTD(param0: string, param1: string, param2: string): void;

                    public startElement(param0: string, param1: string, param2: string, param3: orgxmlsaxAttributes): void;

                    public characters(param0: native.Array<string>, param1: number, param2: number): void;

                    public startDocument(): void;

                    public ignorableWhitespace(param0: native.Array<string>, param1: number, param2: number): void;

                    public endCDATA(): void;

                    public processingInstruction(param0: string, param1: string): void;

                    public endPrefixMapping(param0: string): void;

                    public getTransformer(): javax.xml.transform.Transformer;

                    public setSystemId(param0: string): void;

                    public getSystemId(): string;

                    public setResult(param0: javax.xml.transform.Result): void;

                    public startEntity(param0: string): void;

                    public notationDecl(param0: string, param1: string, param2: string): void;

                    public unparsedEntityDecl(param0: string, param1: string, param2: string, param3: string): void;
                }
            }
        }
    }
}

/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.io.Writer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module javax {
    export module xml {
        export module transform {
            export module stream {
                export class StreamResult extends javalangObject implements javax.xml.transform.Result {
                    public static FEATURE: string;

                    public setWriter(param0: javaioWriter): void;

                    public getWriter(): javaioWriter;

                    public constructor(param0: string);

                    public getOutputStream(): javaioOutputStream;

                    public constructor();
                    public constructor(param0: javaioOutputStream);
                    public constructor(param0: javaioFile);
                    public constructor(param0: javaioWriter);

                    public setSystemId(param0: string): void;

                    public getSystemId(): string;

                    public setSystemId(param0: javaioFile): void;

                    public setOutputStream(param0: javaioOutputStream): void;
                }
            }
        }
    }
}

/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module javax {
    export module xml {
        export module transform {
            export module stream {
                export class StreamSource extends javalangObject implements javax.xml.transform.Source {
                    public static FEATURE: string;

                    public constructor(param0: javaioInputStream);
                    public constructor(param0: string);

                    public getInputStream(): javaioInputStream;

                    public getPublicId(): string;

                    public setPublicId(param0: string): void;

                    public setInputStream(param0: javaioInputStream): void;

                    public getReader(): javaioReader;

                    public setReader(param0: javaioReader): void;

                    public constructor(param0: javaioReader);
                    public constructor();
                    public constructor(param0: javaioFile);
                    public constructor(param0: javaioReader, param1: string);

                    public setSystemId(param0: string): void;

                    public getSystemId(): string;

                    public constructor(param0: javaioInputStream, param1: string);

                    public setSystemId(param0: javaioFile): void;
                }
            }
        }
    }
}

/// <reference path="./javax.xml.validation.Validator.d.ts" />
/// <reference path="./javax.xml.validation.ValidatorHandler.d.ts" />
declare module javax {
    export module xml {
        export module validation {
            export abstract class Schema extends javalangObject {
                public newValidator(): javax.xml.validation.Validator;

                public constructor();

                public newValidatorHandler(): javax.xml.validation.ValidatorHandler;
            }
        }
    }
}

import orgw3cdomlsLSResourceResolver = org.w3c.dom.ls.LSResourceResolver;
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./javax.xml.transform.Source.d.ts" />
/// <reference path="./javax.xml.validation.Schema.d.ts" />
/// <reference path="./org.w3c.dom.ls.LSResourceResolver.d.ts" />
/// <reference path="./org.xml.sax.ErrorHandler.d.ts" />
declare module javax {
    export module xml {
        export module validation {
            export abstract class SchemaFactory extends javalangObject {
                public static newInstance(param0: string, param1: string, param2: javalangClassLoader): javax.xml.validation.SchemaFactory;

                public getProperty(param0: string): javalangObject;

                public setResourceResolver(param0: orgw3cdomlsLSResourceResolver): void;

                public getResourceResolver(): orgw3cdomlsLSResourceResolver;

                public newSchema(param0: javanetURL): javax.xml.validation.Schema;

                public getErrorHandler(): orgxmlsaxErrorHandler;

                public getFeature(param0: string): boolean;

                public static newInstance(param0: string): javax.xml.validation.SchemaFactory;

                public setErrorHandler(param0: orgxmlsaxErrorHandler): void;

                public constructor();

                public newSchema(): javax.xml.validation.Schema;
                public newSchema(param0: javax.xml.transform.Source): javax.xml.validation.Schema;

                public isSchemaLanguageSupported(param0: string): boolean;

                public setProperty(param0: string, param1: javalangObject): void;

                public setFeature(param0: string, param1: boolean): void;

                public newSchema(param0: native.Array<javax.xml.transform.Source>): javax.xml.validation.Schema;
                public newSchema(param0: javaioFile): javax.xml.validation.Schema;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.validation.SchemaFactory.d.ts" />
declare module javax {
    export module xml {
        export module validation {
            export abstract class SchemaFactoryLoader extends javalangObject {
                public newFactory(param0: string): javax.xml.validation.SchemaFactory;

                public constructor();
            }
        }
    }
}

import orgw3cdomTypeInfo = org.w3c.dom.TypeInfo;
/// <reference path="./org.w3c.dom.TypeInfo.d.ts" />
declare module javax {
    export module xml {
        export module validation {
            export abstract class TypeInfoProvider extends javalangObject {
                public getAttributeTypeInfo(param0: number): orgw3cdomTypeInfo;

                public isIdAttribute(param0: number): boolean;

                public isSpecified(param0: number): boolean;

                public getElementTypeInfo(): orgw3cdomTypeInfo;

                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.transform.Result.d.ts" />
/// <reference path="./javax.xml.transform.Source.d.ts" />
/// <reference path="./org.w3c.dom.ls.LSResourceResolver.d.ts" />
/// <reference path="./org.xml.sax.ErrorHandler.d.ts" />
declare module javax {
    export module xml {
        export module validation {
            export abstract class Validator extends javalangObject {
                public reset(): void;

                public validate(param0: javax.xml.transform.Source, param1: javax.xml.transform.Result): void;

                public setResourceResolver(param0: orgw3cdomlsLSResourceResolver): void;

                public getProperty(param0: string): javalangObject;

                public getResourceResolver(): orgw3cdomlsLSResourceResolver;

                public getErrorHandler(): orgxmlsaxErrorHandler;

                public setProperty(param0: string, param1: javalangObject): void;

                public validate(param0: javax.xml.transform.Source): void;

                public getFeature(param0: string): boolean;

                public setFeature(param0: string, param1: boolean): void;

                public setErrorHandler(param0: orgxmlsaxErrorHandler): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.validation.TypeInfoProvider.d.ts" />
/// <reference path="./org.w3c.dom.ls.LSResourceResolver.d.ts" />
/// <reference path="./org.xml.sax.Attributes.d.ts" />
/// <reference path="./org.xml.sax.ContentHandler.d.ts" />
/// <reference path="./org.xml.sax.ErrorHandler.d.ts" />
/// <reference path="./org.xml.sax.Locator.d.ts" />
declare module javax {
    export module xml {
        export module validation {
            export abstract class ValidatorHandler extends javalangObject implements orgxmlsaxContentHandler {
                public getTypeInfoProvider(): javax.xml.validation.TypeInfoProvider;

                public setResourceResolver(param0: orgw3cdomlsLSResourceResolver): void;

                public getProperty(param0: string): javalangObject;

                public getResourceResolver(): orgw3cdomlsLSResourceResolver;

                public endElement(param0: string, param1: string, param2: string): void;

                public getErrorHandler(): orgxmlsaxErrorHandler;

                public setContentHandler(param0: orgxmlsaxContentHandler): void;

                public getFeature(param0: string): boolean;

                public processingInstruction(param0: string, param1: string): void;

                public setErrorHandler(param0: orgxmlsaxErrorHandler): void;

                public endDocument(): void;

                public startElement(param0: string, param1: string, param2: string, param3: orgxmlsaxAttributes): void;

                public setDocumentLocator(param0: orgxmlsaxLocator): void;

                public characters(param0: native.Array<string>, param1: number, param2: number): void;

                public constructor();

                public skippedEntity(param0: string): void;

                public ignorableWhitespace(param0: native.Array<string>, param1: number, param2: number): void;

                public setProperty(param0: string, param1: javalangObject): void;

                public startDocument(): void;

                public setFeature(param0: string, param1: boolean): void;

                public endPrefixMapping(param0: string): void;

                public startPrefixMapping(param0: string, param1: string): void;

                public getContentHandler(): orgxmlsaxContentHandler;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.namespace.NamespaceContext.d.ts" />
/// <reference path="./javax.xml.namespace.QName.d.ts" />
/// <reference path="./javax.xml.xpath.XPathExpression.d.ts" />
/// <reference path="./javax.xml.xpath.XPathFunctionResolver.d.ts" />
/// <reference path="./javax.xml.xpath.XPathVariableResolver.d.ts" />
/// <reference path="./org.xml.sax.InputSource.d.ts" />
declare module javax {
    export module xml {
        export module xpath {
            export class XPath extends javalangObject {
                /**
                 * Constructs a new instance of the javax.xml.xpath.XPath interface with the provided implementation.
                 */
                public constructor(implementation: {
                    reset(): void;
                    setXPathVariableResolver(param0: javax.xml.xpath.XPathVariableResolver): void;
                    getXPathVariableResolver(): javax.xml.xpath.XPathVariableResolver;
                    setXPathFunctionResolver(param0: javax.xml.xpath.XPathFunctionResolver): void;
                    getXPathFunctionResolver(): javax.xml.xpath.XPathFunctionResolver;
                    setNamespaceContext(param0: javax.xml.namespace.NamespaceContext): void;
                    getNamespaceContext(): javax.xml.namespace.NamespaceContext;
                    compile(param0: string): javax.xml.xpath.XPathExpression;
                    evaluate(param0: string, param1: javalangObject, param2: javax.xml.namespace.QName): javalangObject;
                    evaluate(param0: string, param1: javalangObject): string;
                    evaluate(param0: string, param1: orgxmlsaxInputSource, param2: javax.xml.namespace.QName): javalangObject;
                    evaluate(param0: string, param1: orgxmlsaxInputSource): string;
                });

                public setNamespaceContext(param0: javax.xml.namespace.NamespaceContext): void;

                public getNamespaceContext(): javax.xml.namespace.NamespaceContext;

                public reset(): void;

                public evaluate(param0: string, param1: orgxmlsaxInputSource, param2: javax.xml.namespace.QName): javalangObject;
                public evaluate(param0: string, param1: javalangObject, param2: javax.xml.namespace.QName): javalangObject;
                public evaluate(param0: string, param1: orgxmlsaxInputSource): string;

                public setXPathFunctionResolver(param0: javax.xml.xpath.XPathFunctionResolver): void;

                public evaluate(param0: string, param1: javalangObject): string;

                public getXPathFunctionResolver(): javax.xml.xpath.XPathFunctionResolver;

                public compile(param0: string): javax.xml.xpath.XPathExpression;

                public getXPathVariableResolver(): javax.xml.xpath.XPathVariableResolver;

                public setXPathVariableResolver(param0: javax.xml.xpath.XPathVariableResolver): void;
            }
        }
    }
}

/// <reference path="./javax.xml.namespace.QName.d.ts" />
declare module javax {
    export module xml {
        export module xpath {
            export class XPathConstants extends javalangObject {
                public static BOOLEAN: javax.xml.namespace.QName;
                public static DOM_OBJECT_MODEL: string;
                public static NODE: javax.xml.namespace.QName;
                public static NODESET: javax.xml.namespace.QName;
                public static NUMBER: javax.xml.namespace.QName;
                public static STRING: javax.xml.namespace.QName;
            }
        }
    }
}

/// <reference path="./java.io.PrintStream.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module javax {
    export module xml {
        export module xpath {
            export class XPathException extends javalangException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);

                public printStackTrace(param0: javaioPrintStream): void;

                public getCause(): javalangThrowable;

                public constructor(param0: string);

                public printStackTrace(param0: javaioPrintWriter): void;

                public constructor();

                public printStackTrace(): void;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./javax.xml.namespace.QName.d.ts" />
/// <reference path="./org.xml.sax.InputSource.d.ts" />
declare module javax {
    export module xml {
        export module xpath {
            export class XPathExpression extends javalangObject {
                /**
                 * Constructs a new instance of the javax.xml.xpath.XPathExpression interface with the provided implementation.
                 */
                public constructor(implementation: {
                    evaluate(param0: javalangObject, param1: javax.xml.namespace.QName): javalangObject;
                    evaluate(param0: javalangObject): string;
                    evaluate(param0: orgxmlsaxInputSource, param1: javax.xml.namespace.QName): javalangObject;
                    evaluate(param0: orgxmlsaxInputSource): string;
                });

                public evaluate(param0: orgxmlsaxInputSource): string;
                public evaluate(param0: javalangObject, param1: javax.xml.namespace.QName): javalangObject;
                public evaluate(param0: orgxmlsaxInputSource, param1: javax.xml.namespace.QName): javalangObject;
                public evaluate(param0: javalangObject): string;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module javax {
    export module xml {
        export module xpath {
            export class XPathExpressionException extends javax.xml.xpath.XPathException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.xpath.XPath.d.ts" />
/// <reference path="./javax.xml.xpath.XPathFunctionResolver.d.ts" />
/// <reference path="./javax.xml.xpath.XPathVariableResolver.d.ts" />
declare module javax {
    export module xml {
        export module xpath {
            export abstract class XPathFactory extends javalangObject {
                public static DEFAULT_OBJECT_MODEL_URI: string;
                public static DEFAULT_PROPERTY_NAME: string;

                public static newInstance(): javax.xml.xpath.XPathFactory;
                public static newInstance(param0: string): javax.xml.xpath.XPathFactory;

                public setXPathFunctionResolver(param0: javax.xml.xpath.XPathFunctionResolver): void;

                public static newInstance(param0: string, param1: string, param2: javalangClassLoader): javax.xml.xpath.XPathFactory;

                public setFeature(param0: string, param1: boolean): void;

                public getFeature(param0: string): boolean;

                public isObjectModelSupported(param0: string): boolean;

                public newXPath(): javax.xml.xpath.XPath;

                public constructor();

                public setXPathVariableResolver(param0: javax.xml.xpath.XPathVariableResolver): void;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module javax {
    export module xml {
        export module xpath {
            export class XPathFactoryConfigurationException extends javax.xml.xpath.XPathException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module javax {
    export module xml {
        export module xpath {
            export class XPathFunction extends javalangObject {
                /**
                 * Constructs a new instance of the javax.xml.xpath.XPathFunction interface with the provided implementation.
                 */
                public constructor(implementation: {
                    evaluate(param0: javautilList): javalangObject;
                });

                public evaluate(param0: javautilList): javalangObject;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module javax {
    export module xml {
        export module xpath {
            export class XPathFunctionException extends javax.xml.xpath.XPathExpressionException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./javax.xml.namespace.QName.d.ts" />
/// <reference path="./javax.xml.xpath.XPathFunction.d.ts" />
declare module javax {
    export module xml {
        export module xpath {
            export class XPathFunctionResolver extends javalangObject {
                /**
                 * Constructs a new instance of the javax.xml.xpath.XPathFunctionResolver interface with the provided implementation.
                 */
                public constructor(implementation: {
                    resolveFunction(param0: javax.xml.namespace.QName, param1: number): javax.xml.xpath.XPathFunction;
                });

                public resolveFunction(param0: javax.xml.namespace.QName, param1: number): javax.xml.xpath.XPathFunction;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./javax.xml.namespace.QName.d.ts" />
declare module javax {
    export module xml {
        export module xpath {
            export class XPathVariableResolver extends javalangObject {
                /**
                 * Constructs a new instance of the javax.xml.xpath.XPathVariableResolver interface with the provided implementation.
                 */
                public constructor(implementation: {
                    resolveVariable(param0: javax.xml.namespace.QName): javalangObject;
                });

                public resolveVariable(param0: javax.xml.namespace.QName): javalangObject;
            }
        }
    }
}
