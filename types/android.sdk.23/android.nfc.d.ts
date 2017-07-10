
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module nfc {
        export class FormatException extends javalangException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.nfc.NdefRecord.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module nfc {
        export class NdefMessage extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public constructor(param0: android.nfc.NdefRecord, param1: native.Array<android.nfc.NdefRecord>);

            public getRecords(): native.Array<android.nfc.NdefRecord>;

            public toString(): string;

            public toByteArray(): native.Array<number>;

            public equals(param0: javalangObject): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public constructor(param0: native.Array<number>);

            public getByteArrayLength(): number;

            public constructor(param0: native.Array<android.nfc.NdefRecord>);

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module nfc {
        export class NdefRecord extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static RTD_ALTERNATIVE_CARRIER: native.Array<number>;
            public static RTD_HANDOVER_CARRIER: native.Array<number>;
            public static RTD_HANDOVER_REQUEST: native.Array<number>;
            public static RTD_HANDOVER_SELECT: native.Array<number>;
            public static RTD_SMART_POSTER: native.Array<number>;
            public static RTD_TEXT: native.Array<number>;
            public static RTD_URI: native.Array<number>;
            public static TNF_ABSOLUTE_URI: number;
            public static TNF_EMPTY: number;
            public static TNF_EXTERNAL_TYPE: number;
            public static TNF_MIME_MEDIA: number;
            public static TNF_UNCHANGED: number;
            public static TNF_UNKNOWN: number;
            public static TNF_WELL_KNOWN: number;

            public toByteArray(): native.Array<number>;

            public equals(param0: javalangObject): boolean;

            public static createMime(param0: string, param1: native.Array<number>): android.nfc.NdefRecord;

            public static createExternal(param0: string, param1: string, param2: native.Array<number>): android.nfc.NdefRecord;

            public getPayload(): native.Array<number>;

            public constructor(param0: number, param1: native.Array<number>, param2: native.Array<number>, param3: native.Array<number>);

            public getId(): native.Array<number>;

            public constructor(param0: native.Array<number>);

            public static createApplicationRecord(param0: string): android.nfc.NdefRecord;

            public static createUri(param0: string): android.nfc.NdefRecord;

            public getTnf(): number;

            public toString(): string;

            public static createUri(param0: android.net.Uri): android.nfc.NdefRecord;

            public static createTextRecord(param0: string, param1: string): android.nfc.NdefRecord;

            public toUri(): android.net.Uri;

            public describeContents(): number;

            public toMimeType(): string;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getType(): native.Array<number>;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.IntentFilter.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.nfc.NdefMessage.d.ts" />
/// <reference path="./android.nfc.NfcEvent.d.ts" />
/// <reference path="./android.nfc.Tag.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
declare module android {
    export module nfc {
        export class NfcAdapter extends javalangObject {
            public static ACTION_ADAPTER_STATE_CHANGED: string;
            public static ACTION_NDEF_DISCOVERED: string;
            public static ACTION_TAG_DISCOVERED: string;
            public static ACTION_TECH_DISCOVERED: string;
            public static EXTRA_ADAPTER_STATE: string;
            public static EXTRA_ID: string;
            public static EXTRA_NDEF_MESSAGES: string;
            public static EXTRA_READER_PRESENCE_CHECK_DELAY: string;
            public static EXTRA_TAG: string;
            public static FLAG_READER_NFC_A: number;
            public static FLAG_READER_NFC_B: number;
            public static FLAG_READER_NFC_BARCODE: number;
            public static FLAG_READER_NFC_F: number;
            public static FLAG_READER_NFC_V: number;
            public static FLAG_READER_NO_PLATFORM_SOUNDS: number;
            public static FLAG_READER_SKIP_NDEF_CHECK: number;
            public static STATE_OFF: number;
            public static STATE_ON: number;
            public static STATE_TURNING_OFF: number;
            public static STATE_TURNING_ON: number;

            public enableForegroundDispatch(param0: android.app.Activity, param1: android.app.PendingIntent, param2: native.Array<android.content.IntentFilter>, param3: native.Array<native.Array<string>>): void;

            public setNdefPushMessage(param0: android.nfc.NdefMessage, param1: android.app.Activity, param2: native.Array<android.app.Activity>): void;

            public isNdefPushEnabled(): boolean;

            public setBeamPushUrisCallback(param0: android.nfc.NfcAdapter.CreateBeamUrisCallback, param1: android.app.Activity): void;

            public enableReaderMode(param0: android.app.Activity, param1: android.nfc.NfcAdapter.ReaderCallback, param2: number, param3: android.os.Bundle): void;

            public disableForegroundDispatch(param0: android.app.Activity): void;

            public static getDefaultAdapter(param0: android.content.Context): android.nfc.NfcAdapter;

            public isEnabled(): boolean;

            public setNdefPushMessageCallback(param0: android.nfc.NfcAdapter.CreateNdefMessageCallback, param1: android.app.Activity, param2: native.Array<android.app.Activity>): void;

            public enableForegroundNdefPush(param0: android.app.Activity, param1: android.nfc.NdefMessage): void;

            public setBeamPushUris(param0: native.Array<android.net.Uri>, param1: android.app.Activity): void;

            public disableReaderMode(param0: android.app.Activity): void;

            public invokeBeam(param0: android.app.Activity): boolean;

            public setOnNdefPushCompleteCallback(param0: android.nfc.NfcAdapter.OnNdefPushCompleteCallback, param1: android.app.Activity, param2: native.Array<android.app.Activity>): void;

            public disableForegroundNdefPush(param0: android.app.Activity): void;
        }
        export module NfcAdapter {
            export class CreateBeamUrisCallback extends javalangObject {
                /**
                 * Constructs a new instance of the android.nfc.NfcAdapter$CreateBeamUrisCallback interface with the provided implementation.
                 */
                public constructor(implementation: {
                    createBeamUris(param0: android.nfc.NfcEvent): native.Array<android.net.Uri>;
                });

                public createBeamUris(param0: android.nfc.NfcEvent): native.Array<android.net.Uri>;
            }
            export class CreateNdefMessageCallback extends javalangObject {
                /**
                 * Constructs a new instance of the android.nfc.NfcAdapter$CreateNdefMessageCallback interface with the provided implementation.
                 */
                public constructor(implementation: {
                    createNdefMessage(param0: android.nfc.NfcEvent): android.nfc.NdefMessage;
                });

                public createNdefMessage(param0: android.nfc.NfcEvent): android.nfc.NdefMessage;
            }
            export class OnNdefPushCompleteCallback extends javalangObject {
                /**
                 * Constructs a new instance of the android.nfc.NfcAdapter$OnNdefPushCompleteCallback interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onNdefPushComplete(param0: android.nfc.NfcEvent): void;
                });

                public onNdefPushComplete(param0: android.nfc.NfcEvent): void;
            }
            export class ReaderCallback extends javalangObject {
                /**
                 * Constructs a new instance of the android.nfc.NfcAdapter$ReaderCallback interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onTagDiscovered(param0: android.nfc.Tag): void;
                });

                public onTagDiscovered(param0: android.nfc.Tag): void;
            }
        }
    }
}

/// <reference path="./android.nfc.NfcAdapter.d.ts" />
declare module android {
    export module nfc {
        export class NfcEvent extends javalangObject {
            public nfcAdapter: android.nfc.NfcAdapter;
            public peerLlcpMajorVersion: number;
            public peerLlcpMinorVersion: number;
        }
    }
}

/// <reference path="./android.nfc.NfcAdapter.d.ts" />
declare module android {
    export module nfc {
        export class NfcManager extends javalangObject {
            public getDefaultAdapter(): android.nfc.NfcAdapter;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module nfc {
        export class Tag extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public getTechList(): native.Array<string>;

            public toString(): string;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getId(): native.Array<number>;
        }
    }
}

import javaioIOException = java.io.IOException;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module nfc {
        export class TagLostException extends javaioIOException {
            public constructor(param0: javalangThrowable);
            public constructor(param0: string, param1: javalangThrowable);
            public constructor();
            public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.nfc.NfcAdapter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module nfc {
        export module cardemulation {
            export class CardEmulation extends javalangObject {
                public static ACTION_CHANGE_DEFAULT: string;
                public static CATEGORY_OTHER: string;
                public static CATEGORY_PAYMENT: string;
                public static EXTRA_CATEGORY: string;
                public static EXTRA_SERVICE_COMPONENT: string;
                public static SELECTION_MODE_ALWAYS_ASK: number;
                public static SELECTION_MODE_ASK_IF_CONFLICT: number;
                public static SELECTION_MODE_PREFER_DEFAULT: number;

                public getAidsForService(param0: android.content.ComponentName, param1: string): javautilList;

                public supportsAidPrefixRegistration(): boolean;

                public removeAidsForService(param0: android.content.ComponentName, param1: string): boolean;

                public isDefaultServiceForCategory(param0: android.content.ComponentName, param1: string): boolean;

                public categoryAllowsForegroundPreference(param0: string): boolean;

                public isDefaultServiceForAid(param0: android.content.ComponentName, param1: string): boolean;

                public static getInstance(param0: android.nfc.NfcAdapter): android.nfc.cardemulation.CardEmulation;

                public unsetPreferredService(param0: android.app.Activity): boolean;

                public getSelectionModeForCategory(param0: string): number;

                public registerAidsForService(param0: android.content.ComponentName, param1: string, param2: javautilList): boolean;

                public setPreferredService(param0: android.app.Activity, param1: android.content.ComponentName): boolean;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
declare module android {
    export module nfc {
        export module cardemulation {
            export abstract class HostApduService extends android.app.Service {
                public static DEACTIVATION_DESELECTED: number;
                public static DEACTIVATION_LINK_LOSS: number;
                public static SERVICE_INTERFACE: string;
                public static SERVICE_META_DATA: string;

                public onDeactivated(param0: number): void;

                public onBind(param0: android.content.Intent): android.os.IBinder;

                public notifyUnhandled(): void;

                public processCommandApdu(param0: native.Array<number>, param1: android.os.Bundle): native.Array<number>;

                public constructor(param0: android.content.Context);

                public sendResponseApdu(param0: native.Array<number>): void;

                public onTrimMemory(param0: number): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
declare module android {
    export module nfc {
        export module cardemulation {
            export abstract class OffHostApduService extends android.app.Service {
                public static SERVICE_INTERFACE: string;
                public static SERVICE_META_DATA: string;

                public onBind(param0: android.content.Intent): android.os.IBinder;

                public constructor(param0: android.content.Context);

                public onTrimMemory(param0: number): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.nfc.Tag.d.ts" />
declare module android {
    export module nfc {
        export module tech {
            export abstract class BasicTagTechnology extends javalangObject implements android.nfc.tech.TagTechnology {
                public isConnected(): boolean;

                public close(): void;

                public connect(): void;

                public getTag(): android.nfc.Tag;
            }
        }
    }
}

/// <reference path="./android.nfc.Tag.d.ts" />
declare module android {
    export module nfc {
        export module tech {
            export class IsoDep extends android.nfc.tech.BasicTagTechnology {
                public transceive(param0: native.Array<number>): native.Array<number>;

                public getHiLayerResponse(): native.Array<number>;

                public close(): void;

                public isConnected(): boolean;

                public static get(param0: android.nfc.Tag): android.nfc.tech.IsoDep;

                public connect(): void;

                public getHistoricalBytes(): native.Array<number>;

                public getTimeout(): number;

                public getMaxTransceiveLength(): number;

                public isExtendedLengthApduSupported(): boolean;

                public setTimeout(param0: number): void;

                public getTag(): android.nfc.Tag;
            }
        }
    }
}

/// <reference path="./android.nfc.Tag.d.ts" />
declare module android {
    export module nfc {
        export module tech {
            export class MifareClassic extends android.nfc.tech.BasicTagTechnology {
                public static BLOCK_SIZE: number;
                public static KEY_DEFAULT: native.Array<number>;
                public static KEY_MIFARE_APPLICATION_DIRECTORY: native.Array<number>;
                public static KEY_NFC_FORUM: native.Array<number>;
                public static SIZE_1K: number;
                public static SIZE_2K: number;
                public static SIZE_4K: number;
                public static SIZE_MINI: number;
                public static TYPE_CLASSIC: number;
                public static TYPE_PLUS: number;
                public static TYPE_PRO: number;
                public static TYPE_UNKNOWN: number;

                public close(): void;

                public getType(): number;

                public getSectorCount(): number;

                public getBlockCount(): number;

                public sectorToBlock(param0: number): number;

                public readBlock(param0: number): native.Array<number>;

                public transfer(param0: number): void;

                public getTimeout(): number;

                public getMaxTransceiveLength(): number;

                public setTimeout(param0: number): void;

                public authenticateSectorWithKeyA(param0: number, param1: native.Array<number>): boolean;

                public restore(param0: number): void;

                public increment(param0: number, param1: number): void;

                public decrement(param0: number, param1: number): void;

                public authenticateSectorWithKeyB(param0: number, param1: native.Array<number>): boolean;

                public transceive(param0: native.Array<number>): native.Array<number>;

                public isConnected(): boolean;

                public connect(): void;

                public blockToSector(param0: number): number;

                public getSize(): number;

                public getBlockCountInSector(param0: number): number;

                public writeBlock(param0: number, param1: native.Array<number>): void;

                public getTag(): android.nfc.Tag;

                public static get(param0: android.nfc.Tag): android.nfc.tech.MifareClassic;
            }
        }
    }
}

/// <reference path="./android.nfc.Tag.d.ts" />
declare module android {
    export module nfc {
        export module tech {
            export class MifareUltralight extends android.nfc.tech.BasicTagTechnology {
                public static PAGE_SIZE: number;
                public static TYPE_ULTRALIGHT: number;
                public static TYPE_ULTRALIGHT_C: number;
                public static TYPE_UNKNOWN: number;

                public transceive(param0: native.Array<number>): native.Array<number>;

                public close(): void;

                public isConnected(): boolean;

                public readPages(param0: number): native.Array<number>;

                public connect(): void;

                public static get(param0: android.nfc.Tag): android.nfc.tech.MifareUltralight;

                public getType(): number;

                public getTimeout(): number;

                public writePage(param0: number, param1: native.Array<number>): void;

                public getMaxTransceiveLength(): number;

                public setTimeout(param0: number): void;

                public getTag(): android.nfc.Tag;
            }
        }
    }
}

/// <reference path="./android.nfc.NdefMessage.d.ts" />
/// <reference path="./android.nfc.Tag.d.ts" />
declare module android {
    export module nfc {
        export module tech {
            export class Ndef extends android.nfc.tech.BasicTagTechnology {
                public static MIFARE_CLASSIC: string;
                public static NFC_FORUM_TYPE_1: string;
                public static NFC_FORUM_TYPE_2: string;
                public static NFC_FORUM_TYPE_3: string;
                public static NFC_FORUM_TYPE_4: string;

                public getType(): string;

                public getCachedNdefMessage(): android.nfc.NdefMessage;

                public close(): void;

                public static get(param0: android.nfc.Tag): android.nfc.tech.Ndef;

                public makeReadOnly(): boolean;

                public isConnected(): boolean;

                public connect(): void;

                public writeNdefMessage(param0: android.nfc.NdefMessage): void;

                public getNdefMessage(): android.nfc.NdefMessage;

                public isWritable(): boolean;

                public getMaxSize(): number;

                public getTag(): android.nfc.Tag;

                public canMakeReadOnly(): boolean;
            }
        }
    }
}

/// <reference path="./android.nfc.NdefMessage.d.ts" />
/// <reference path="./android.nfc.Tag.d.ts" />
declare module android {
    export module nfc {
        export module tech {
            export class NdefFormatable extends android.nfc.tech.BasicTagTechnology {
                public format(param0: android.nfc.NdefMessage): void;

                public static get(param0: android.nfc.Tag): android.nfc.tech.NdefFormatable;

                public close(): void;

                public isConnected(): boolean;

                public connect(): void;

                public getTag(): android.nfc.Tag;

                public formatReadOnly(param0: android.nfc.NdefMessage): void;
            }
        }
    }
}

/// <reference path="./android.nfc.Tag.d.ts" />
declare module android {
    export module nfc {
        export module tech {
            export class NfcA extends android.nfc.tech.BasicTagTechnology {
                public transceive(param0: native.Array<number>): native.Array<number>;

                public close(): void;

                public isConnected(): boolean;

                public static get(param0: android.nfc.Tag): android.nfc.tech.NfcA;

                public connect(): void;

                public getAtqa(): native.Array<number>;

                public getSak(): number;

                public getTimeout(): number;

                public getMaxTransceiveLength(): number;

                public setTimeout(param0: number): void;

                public getTag(): android.nfc.Tag;
            }
        }
    }
}

/// <reference path="./android.nfc.Tag.d.ts" />
declare module android {
    export module nfc {
        export module tech {
            export class NfcB extends android.nfc.tech.BasicTagTechnology {
                public getProtocolInfo(): native.Array<number>;

                public transceive(param0: native.Array<number>): native.Array<number>;

                public close(): void;

                public isConnected(): boolean;

                public static get(param0: android.nfc.Tag): android.nfc.tech.NfcB;

                public connect(): void;

                public getApplicationData(): native.Array<number>;

                public getMaxTransceiveLength(): number;

                public getTag(): android.nfc.Tag;
            }
        }
    }
}

/// <reference path="./android.nfc.Tag.d.ts" />
declare module android {
    export module nfc {
        export module tech {
            export class NfcBarcode extends android.nfc.tech.BasicTagTechnology {
                public static TYPE_KOVIO: number;
                public static TYPE_UNKNOWN: number;

                public close(): void;

                public isConnected(): boolean;

                public connect(): void;

                public getType(): number;

                public getBarcode(): native.Array<number>;

                public static get(param0: android.nfc.Tag): android.nfc.tech.NfcBarcode;

                public getTag(): android.nfc.Tag;
            }
        }
    }
}

/// <reference path="./android.nfc.Tag.d.ts" />
declare module android {
    export module nfc {
        export module tech {
            export class NfcF extends android.nfc.tech.BasicTagTechnology {
                public transceive(param0: native.Array<number>): native.Array<number>;

                public close(): void;

                public isConnected(): boolean;

                public getSystemCode(): native.Array<number>;

                public connect(): void;

                public getManufacturer(): native.Array<number>;

                public getTimeout(): number;

                public getMaxTransceiveLength(): number;

                public setTimeout(param0: number): void;

                public getTag(): android.nfc.Tag;

                public static get(param0: android.nfc.Tag): android.nfc.tech.NfcF;
            }
        }
    }
}

/// <reference path="./android.nfc.Tag.d.ts" />
declare module android {
    export module nfc {
        export module tech {
            export class NfcV extends android.nfc.tech.BasicTagTechnology {
                public getDsfId(): number;

                public transceive(param0: native.Array<number>): native.Array<number>;

                public close(): void;

                public isConnected(): boolean;

                public connect(): void;

                public getResponseFlags(): number;

                public getMaxTransceiveLength(): number;

                public getTag(): android.nfc.Tag;

                public static get(param0: android.nfc.Tag): android.nfc.tech.NfcV;
            }
        }
    }
}

/// <reference path="./android.nfc.Tag.d.ts" />
declare module android {
    export module nfc {
        export module tech {
            export class TagTechnology extends javalangObject implements javaioCloseable {
                /**
                 * Constructs a new instance of the android.nfc.tech.TagTechnology interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getTag(): android.nfc.Tag;
                    connect(): void;
                    close(): void;
                    isConnected(): boolean;
                    close(): void;
                    close(): void;
                });

                public close(): void;

                public isConnected(): boolean;

                public connect(): void;

                public getTag(): android.nfc.Tag;
            }
        }
    }
}
