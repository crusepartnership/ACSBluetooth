
declare module android {
    export module mtp {
        export class MtpConstants extends javalangObject {
            public static ASSOCIATION_TYPE_GENERIC_FOLDER: number;
            public static FORMAT_3GP_CONTAINER: number;
            public static FORMAT_AAC: number;
            public static FORMAT_ABSTRACT_AUDIO_ALBUM: number;
            public static FORMAT_ABSTRACT_AUDIO_PLAYLIST: number;
            public static FORMAT_ABSTRACT_AV_PLAYLIST: number;
            public static FORMAT_ABSTRACT_DOCUMENT: number;
            public static FORMAT_ABSTRACT_IMAGE_ALBUM: number;
            public static FORMAT_ABSTRACT_MEDIACAST: number;
            public static FORMAT_ABSTRACT_MULTIMEDIA_ALBUM: number;
            public static FORMAT_ABSTRACT_VIDEO_ALBUM: number;
            public static FORMAT_ABSTRACT_VIDEO_PLAYLIST: number;
            public static FORMAT_AIFF: number;
            public static FORMAT_ASF: number;
            public static FORMAT_ASSOCIATION: number;
            public static FORMAT_ASX_PLAYLIST: number;
            public static FORMAT_AUDIBLE: number;
            public static FORMAT_AVI: number;
            public static FORMAT_BMP: number;
            public static FORMAT_DPOF: number;
            public static FORMAT_EXECUTABLE: number;
            public static FORMAT_EXIF_JPEG: number;
            public static FORMAT_FLAC: number;
            public static FORMAT_GIF: number;
            public static FORMAT_HTML: number;
            public static FORMAT_JFIF: number;
            public static FORMAT_JP2: number;
            public static FORMAT_JPX: number;
            public static FORMAT_M3U_PLAYLIST: number;
            public static FORMAT_MP2: number;
            public static FORMAT_MP3: number;
            public static FORMAT_MP4_CONTAINER: number;
            public static FORMAT_MPEG: number;
            public static FORMAT_MPL_PLAYLIST: number;
            public static FORMAT_MS_EXCEL_SPREADSHEET: number;
            public static FORMAT_MS_POWERPOINT_PRESENTATION: number;
            public static FORMAT_MS_WORD_DOCUMENT: number;
            public static FORMAT_OGG: number;
            public static FORMAT_PICT: number;
            public static FORMAT_PLS_PLAYLIST: number;
            public static FORMAT_PNG: number;
            public static FORMAT_SCRIPT: number;
            public static FORMAT_TEXT: number;
            public static FORMAT_TIFF: number;
            public static FORMAT_TIFF_EP: number;
            public static FORMAT_UNDEFINED: number;
            public static FORMAT_UNDEFINED_AUDIO: number;
            public static FORMAT_UNDEFINED_COLLECTION: number;
            public static FORMAT_UNDEFINED_DOCUMENT: number;
            public static FORMAT_UNDEFINED_FIRMWARE: number;
            public static FORMAT_UNDEFINED_VIDEO: number;
            public static FORMAT_WAV: number;
            public static FORMAT_WINDOWS_IMAGE_FORMAT: number;
            public static FORMAT_WMA: number;
            public static FORMAT_WMV: number;
            public static FORMAT_WPL_PLAYLIST: number;
            public static FORMAT_XML_DOCUMENT: number;
            public static PROTECTION_STATUS_NONE: number;
            public static PROTECTION_STATUS_NON_TRANSFERABLE_DATA: number;
            public static PROTECTION_STATUS_READ_ONLY: number;
            public static PROTECTION_STATUS_READ_ONLY_DATA: number;

            public constructor();

            public static isAbstractObject(param0: number): boolean;
        }
    }
}

/// <reference path="./android.hardware.usb.UsbDevice.d.ts" />
/// <reference path="./android.hardware.usb.UsbDeviceConnection.d.ts" />
/// <reference path="./android.mtp.MtpDeviceInfo.d.ts" />
/// <reference path="./android.mtp.MtpObjectInfo.d.ts" />
/// <reference path="./android.mtp.MtpStorageInfo.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module mtp {
        export class MtpDevice extends javalangObject {
            public getObjectHandles(param0: number, param1: number, param2: number): native.Array<number>;

            public importFile(param0: number, param1: string): boolean;

            public open(param0: android.hardware.usb.UsbDeviceConnection): boolean;

            public getDeviceId(): number;

            public getStorageIds(): native.Array<number>;

            public getParent(param0: number): number;

            public constructor(param0: android.hardware.usb.UsbDevice);

            public getThumbnail(param0: number): native.Array<number>;

            public getObject(param0: number, param1: number): native.Array<number>;

            public getObjectInfo(param0: number): android.mtp.MtpObjectInfo;

            public getDeviceInfo(): android.mtp.MtpDeviceInfo;

            public getStorageInfo(param0: number): android.mtp.MtpStorageInfo;

            public deleteObject(param0: number): boolean;

            public toString(): string;

            public getDeviceName(): string;

            public getStorageId(param0: number): number;

            public close(): void;

            public finalize(): void;
        }
    }
}

declare module android {
    export module mtp {
        export class MtpDeviceInfo extends javalangObject {
            public getModel(): string;

            public getManufacturer(): string;

            public getVersion(): string;

            public getSerialNumber(): string;
        }
    }
}

declare module android {
    export module mtp {
        export class MtpObjectInfo extends javalangObject {
            public getCompressedSize(): number;

            public getThumbPixWidth(): number;

            public getKeywords(): string;

            public getThumbCompressedSize(): number;

            public getFormat(): number;

            public getProtectionStatus(): number;

            public getImagePixWidth(): number;

            public getImagePixDepth(): number;

            public getStorageId(): number;

            public getObjectHandle(): number;

            public getThumbFormat(): number;

            public getAssociationType(): number;

            public getDateModified(): number;

            public getAssociationDesc(): number;

            public getName(): string;

            public getParent(): number;

            public getSequenceNumber(): number;

            public getDateCreated(): number;

            public getThumbPixHeight(): number;

            public getImagePixHeight(): number;
        }
    }
}

declare module android {
    export module mtp {
        export class MtpStorageInfo extends javalangObject {
            public getVolumeIdentifier(): string;

            public getMaxCapacity(): number;

            public getDescription(): string;

            public getStorageId(): number;

            public getFreeSpace(): number;
        }
    }
}
