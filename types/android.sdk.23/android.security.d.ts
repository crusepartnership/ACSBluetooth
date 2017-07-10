
import javasecurityPrincipal = java.security.Principal;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.security.KeyChainAliasCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Principal.d.ts" />
/// <reference path="./java.security.PrivateKey.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />
declare module android {
    export module security {
        export class KeyChain extends javalangObject {
            public static ACTION_STORAGE_CHANGED: string;
            public static EXTRA_CERTIFICATE: string;
            public static EXTRA_NAME: string;
            public static EXTRA_PKCS12: string;

            public static createInstallIntent(): android.content.Intent;

            public static choosePrivateKeyAlias(param0: android.app.Activity, param1: android.security.KeyChainAliasCallback, param2: native.Array<string>, param3: native.Array<javasecurityPrincipal>, param4: android.net.Uri, param5: string): void;
            public static choosePrivateKeyAlias(param0: android.app.Activity, param1: android.security.KeyChainAliasCallback, param2: native.Array<string>, param3: native.Array<javasecurityPrincipal>, param4: string, param5: number, param6: string): void;

            public static isKeyAlgorithmSupported(param0: string): boolean;

            public static getCertificateChain(param0: android.content.Context, param1: string): native.Array<javasecuritycertX509Certificate>;

            public static isBoundKeyAlgorithm(param0: string): boolean;

            public constructor();

            public static getPrivateKey(param0: android.content.Context, param1: string): javasecurityPrivateKey;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module security {
        export class KeyChainAliasCallback extends javalangObject {
            /**
             * Constructs a new instance of the android.security.KeyChainAliasCallback interface with the provided implementation.
             */
            public constructor(implementation: {
                alias(param0: string): void;
            });

            public alias(param0: string): void;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module security {
        export class KeyChainException extends javalangException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

import javasecurityspecAlgorithmParameterSpec = java.security.spec.AlgorithmParameterSpec;
import javaxsecurityauthx500X500Principal = javax.security.auth.x500.X500Principal;
import javamathBigInteger = java.math.BigInteger;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.security.KeyPairGeneratorSpec.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./javax.security.auth.x500.X500Principal.d.ts" />
declare module android {
    export module security {
        export class KeyPairGeneratorSpec extends javalangObject implements javasecurityspecAlgorithmParameterSpec {
            public getKeySize(): number;

            public getKeyType(): string;

            public getEndDate(): javautilDate;

            public getKeystoreAlias(): string;

            public getSerialNumber(): javamathBigInteger;

            public getContext(): android.content.Context;

            public getSubjectDN(): javaxsecurityauthx500X500Principal;

            public isEncryptionRequired(): boolean;

            public getStartDate(): javautilDate;

            public getAlgorithmParameterSpec(): javasecurityspecAlgorithmParameterSpec;
        }
        export module KeyPairGeneratorSpec {
            export class Builder extends javalangObject {
                public setSubject(param0: javaxsecurityauthx500X500Principal): android.security.KeyPairGeneratorSpec.Builder;

                public setAlias(param0: string): android.security.KeyPairGeneratorSpec.Builder;

                public setEndDate(param0: javautilDate): android.security.KeyPairGeneratorSpec.Builder;

                public constructor(param0: android.content.Context);

                public setEncryptionRequired(): android.security.KeyPairGeneratorSpec.Builder;

                public setKeyType(param0: string): android.security.KeyPairGeneratorSpec.Builder;

                public setKeySize(param0: number): android.security.KeyPairGeneratorSpec.Builder;

                public setStartDate(param0: javautilDate): android.security.KeyPairGeneratorSpec.Builder;

                public build(): android.security.KeyPairGeneratorSpec;

                public setSerialNumber(param0: javamathBigInteger): android.security.KeyPairGeneratorSpec.Builder;

                public setAlgorithmParameterSpec(param0: javasecurityspecAlgorithmParameterSpec): android.security.KeyPairGeneratorSpec.Builder;
            }
        }
    }
}

import javasecurityKeyStoreProtectionParameter = java.security.KeyStore.ProtectionParameter;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.security.KeyStoreParameter.d.ts" />
declare module android {
    export module security {
        export class KeyStoreParameter extends javalangObject implements javasecurityKeyStoreProtectionParameter {
            public isEncryptionRequired(): boolean;
        }
        export module KeyStoreParameter {
            export class Builder extends javalangObject {
                public constructor(param0: android.content.Context);

                public build(): android.security.KeyStoreParameter;

                public setEncryptionRequired(param0: boolean): android.security.KeyStoreParameter.Builder;
            }
        }
    }
}

declare module android {
    export module security {
        export class NetworkSecurityPolicy extends javalangObject {
            public static getInstance(): android.security.NetworkSecurityPolicy;

            public isCleartextTrafficPermitted(): boolean;
        }
    }
}

import javasecurityInvalidKeyException = java.security.InvalidKeyException;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module security {
        export module keystore {
            export class KeyExpiredException extends javasecurityInvalidKeyException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.security.keystore.KeyGenParameterSpec.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />
/// <reference path="./java.security.spec.AlgorithmParameterSpec.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./javax.security.auth.x500.X500Principal.d.ts" />
declare module android {
    export module security {
        export module keystore {
            export class KeyGenParameterSpec extends javalangObject implements javasecurityspecAlgorithmParameterSpec {
                public getCertificateSubject(): javaxsecurityauthx500X500Principal;

                public getDigests(): native.Array<string>;

                public isUserAuthenticationRequired(): boolean;

                public getAlgorithmParameterSpec(): javasecurityspecAlgorithmParameterSpec;

                public getCertificateNotBefore(): javautilDate;

                public getBlockModes(): native.Array<string>;

                public getUserAuthenticationValidityDurationSeconds(): number;

                public getKeyValidityStart(): javautilDate;

                public getEncryptionPaddings(): native.Array<string>;

                public getCertificateSerialNumber(): javamathBigInteger;

                public isDigestsSpecified(): boolean;

                public getSignaturePaddings(): native.Array<string>;

                public getKeyValidityForConsumptionEnd(): javautilDate;

                public getKeyValidityForOriginationEnd(): javautilDate;

                public getPurposes(): number;

                public getKeystoreAlias(): string;

                public getCertificateNotAfter(): javautilDate;

                public isRandomizedEncryptionRequired(): boolean;

                public getKeySize(): number;
            }
            export module KeyGenParameterSpec {
                export class Builder extends javalangObject {
                    public setBlockModes(param0: native.Array<string>): android.security.keystore.KeyGenParameterSpec.Builder;

                    public setRandomizedEncryptionRequired(param0: boolean): android.security.keystore.KeyGenParameterSpec.Builder;

                    public setCertificateSerialNumber(param0: javamathBigInteger): android.security.keystore.KeyGenParameterSpec.Builder;

                    public setSignaturePaddings(param0: native.Array<string>): android.security.keystore.KeyGenParameterSpec.Builder;

                    public setDigests(param0: native.Array<string>): android.security.keystore.KeyGenParameterSpec.Builder;

                    public setEncryptionPaddings(param0: native.Array<string>): android.security.keystore.KeyGenParameterSpec.Builder;

                    public setKeyValidityStart(param0: javautilDate): android.security.keystore.KeyGenParameterSpec.Builder;

                    public setKeyValidityForConsumptionEnd(param0: javautilDate): android.security.keystore.KeyGenParameterSpec.Builder;

                    public setUserAuthenticationRequired(param0: boolean): android.security.keystore.KeyGenParameterSpec.Builder;

                    public setUserAuthenticationValidityDurationSeconds(param0: number): android.security.keystore.KeyGenParameterSpec.Builder;

                    public setKeyValidityForOriginationEnd(param0: javautilDate): android.security.keystore.KeyGenParameterSpec.Builder;

                    public setCertificateNotBefore(param0: javautilDate): android.security.keystore.KeyGenParameterSpec.Builder;

                    public constructor(param0: string, param1: number);

                    public build(): android.security.keystore.KeyGenParameterSpec;

                    public setKeySize(param0: number): android.security.keystore.KeyGenParameterSpec.Builder;

                    public setCertificateSubject(param0: javaxsecurityauthx500X500Principal): android.security.keystore.KeyGenParameterSpec.Builder;

                    public setAlgorithmParameterSpec(param0: javasecurityspecAlgorithmParameterSpec): android.security.keystore.KeyGenParameterSpec.Builder;

                    public setCertificateNotAfter(param0: javautilDate): android.security.keystore.KeyGenParameterSpec.Builder;

                    public setKeyValidityEnd(param0: javautilDate): android.security.keystore.KeyGenParameterSpec.Builder;
                }
            }
        }
    }
}

import javasecurityspecKeySpec = java.security.spec.KeySpec;
/// <reference path="./java.util.Date.d.ts" />
declare module android {
    export module security {
        export module keystore {
            export class KeyInfo extends javalangObject implements javasecurityspecKeySpec {
                public getDigests(): native.Array<string>;

                public isUserAuthenticationRequired(): boolean;

                public getBlockModes(): native.Array<string>;

                public getUserAuthenticationValidityDurationSeconds(): number;

                public getOrigin(): number;

                public getKeyValidityStart(): javautilDate;

                public getEncryptionPaddings(): native.Array<string>;

                public getSignaturePaddings(): native.Array<string>;

                public getKeyValidityForConsumptionEnd(): javautilDate;

                public getKeyValidityForOriginationEnd(): javautilDate;

                public getPurposes(): number;

                public isInsideSecureHardware(): boolean;

                public isUserAuthenticationRequirementEnforcedBySecureHardware(): boolean;

                public getKeystoreAlias(): string;

                public getKeySize(): number;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module security {
        export module keystore {
            export class KeyNotYetValidException extends javasecurityInvalidKeyException {
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
declare module android {
    export module security {
        export module keystore {
            export class KeyPermanentlyInvalidatedException extends javasecurityInvalidKeyException {
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
    export module security {
        export module keystore {
            export abstract class KeyProperties extends javalangObject {
                public static BLOCK_MODE_CBC: string;
                public static BLOCK_MODE_CTR: string;
                public static BLOCK_MODE_ECB: string;
                public static BLOCK_MODE_GCM: string;
                public static DIGEST_MD5: string;
                public static DIGEST_NONE: string;
                public static DIGEST_SHA1: string;
                public static DIGEST_SHA224: string;
                public static DIGEST_SHA256: string;
                public static DIGEST_SHA384: string;
                public static DIGEST_SHA512: string;
                public static ENCRYPTION_PADDING_NONE: string;
                public static ENCRYPTION_PADDING_PKCS7: string;
                public static ENCRYPTION_PADDING_RSA_OAEP: string;
                public static ENCRYPTION_PADDING_RSA_PKCS1: string;
                public static KEY_ALGORITHM_AES: string;
                public static KEY_ALGORITHM_EC: string;
                public static KEY_ALGORITHM_HMAC_SHA1: string;
                public static KEY_ALGORITHM_HMAC_SHA224: string;
                public static KEY_ALGORITHM_HMAC_SHA256: string;
                public static KEY_ALGORITHM_HMAC_SHA384: string;
                public static KEY_ALGORITHM_HMAC_SHA512: string;
                public static KEY_ALGORITHM_RSA: string;
                public static ORIGIN_GENERATED: number;
                public static ORIGIN_IMPORTED: number;
                public static ORIGIN_UNKNOWN: number;
                public static PURPOSE_DECRYPT: number;
                public static PURPOSE_ENCRYPT: number;
                public static PURPOSE_SIGN: number;
                public static PURPOSE_VERIFY: number;
                public static SIGNATURE_PADDING_RSA_PKCS1: string;
                public static SIGNATURE_PADDING_RSA_PSS: string;
            }
        }
    }
}

/// <reference path="./android.security.keystore.KeyProtection.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module android {
    export module security {
        export module keystore {
            export class KeyProtection extends javalangObject implements javasecurityKeyStoreProtectionParameter {
                public getDigests(): native.Array<string>;

                public isUserAuthenticationRequired(): boolean;

                public getEncryptionPaddings(): native.Array<string>;

                public getSignaturePaddings(): native.Array<string>;

                public isDigestsSpecified(): boolean;

                public getKeyValidityForConsumptionEnd(): javautilDate;

                public getKeyValidityForOriginationEnd(): javautilDate;

                public getPurposes(): number;

                public getBlockModes(): native.Array<string>;

                public getUserAuthenticationValidityDurationSeconds(): number;

                public getKeyValidityStart(): javautilDate;

                public isRandomizedEncryptionRequired(): boolean;
            }
            export module KeyProtection {
                export class Builder extends javalangObject {
                    public build(): android.security.keystore.KeyProtection;

                    public setEncryptionPaddings(param0: native.Array<string>): android.security.keystore.KeyProtection.Builder;

                    public setKeyValidityForOriginationEnd(param0: javautilDate): android.security.keystore.KeyProtection.Builder;

                    public setKeyValidityForConsumptionEnd(param0: javautilDate): android.security.keystore.KeyProtection.Builder;

                    public setUserAuthenticationValidityDurationSeconds(param0: number): android.security.keystore.KeyProtection.Builder;

                    public setSignaturePaddings(param0: native.Array<string>): android.security.keystore.KeyProtection.Builder;

                    public setKeyValidityEnd(param0: javautilDate): android.security.keystore.KeyProtection.Builder;

                    public setBlockModes(param0: native.Array<string>): android.security.keystore.KeyProtection.Builder;

                    public setKeyValidityStart(param0: javautilDate): android.security.keystore.KeyProtection.Builder;

                    public setDigests(param0: native.Array<string>): android.security.keystore.KeyProtection.Builder;

                    public setRandomizedEncryptionRequired(param0: boolean): android.security.keystore.KeyProtection.Builder;

                    public constructor(param0: number);

                    public setUserAuthenticationRequired(param0: boolean): android.security.keystore.KeyProtection.Builder;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module security {
        export module keystore {
            export class UserNotAuthenticatedException extends javasecurityInvalidKeyException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}
