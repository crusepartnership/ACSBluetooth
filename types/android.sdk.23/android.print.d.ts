
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module print {
        export class PageRange extends javalangObject implements android.os.Parcelable {
            public static ALL_PAGES: android.print.PageRange;
            public static CREATOR: android.os.Parcelable.Creator;

            public toString(): string;

            public equals(param0: javalangObject): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getEnd(): number;

            public constructor(param0: number, param1: number);

            public getStart(): number;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.print.PrintAttributes.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module print {
        export class PrintAttributes extends javalangObject implements android.os.Parcelable {
            public static COLOR_MODE_COLOR: number;
            public static COLOR_MODE_MONOCHROME: number;
            public static CREATOR: android.os.Parcelable.Creator;
            public static DUPLEX_MODE_LONG_EDGE: number;
            public static DUPLEX_MODE_NONE: number;
            public static DUPLEX_MODE_SHORT_EDGE: number;

            public getMinMargins(): android.print.PrintAttributes.Margins;

            public toString(): string;

            public getDuplexMode(): number;

            public getMediaSize(): android.print.PrintAttributes.MediaSize;

            public equals(param0: javalangObject): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getResolution(): android.print.PrintAttributes.Resolution;

            public getColorMode(): number;

            public hashCode(): number;
        }
        export module PrintAttributes {
            export class Builder extends javalangObject {
                public setColorMode(param0: number): android.print.PrintAttributes.Builder;

                public setResolution(param0: android.print.PrintAttributes.Resolution): android.print.PrintAttributes.Builder;

                public setMinMargins(param0: android.print.PrintAttributes.Margins): android.print.PrintAttributes.Builder;

                public setDuplexMode(param0: number): android.print.PrintAttributes.Builder;

                public setMediaSize(param0: android.print.PrintAttributes.MediaSize): android.print.PrintAttributes.Builder;

                public constructor();

                public build(): android.print.PrintAttributes;
            }
            export class Margins extends javalangObject {
                public static NO_MARGINS: android.print.PrintAttributes.Margins;

                public getLeftMils(): number;

                public getBottomMils(): number;

                public constructor(param0: number, param1: number, param2: number, param3: number);

                public equals(param0: javalangObject): boolean;

                public hashCode(): number;

                public getRightMils(): number;

                public toString(): string;

                public getTopMils(): number;
            }
            export class MediaSize extends javalangObject {
                public static ISO_A0: android.print.PrintAttributes.MediaSize;
                public static ISO_A1: android.print.PrintAttributes.MediaSize;
                public static ISO_A10: android.print.PrintAttributes.MediaSize;
                public static ISO_A2: android.print.PrintAttributes.MediaSize;
                public static ISO_A3: android.print.PrintAttributes.MediaSize;
                public static ISO_A4: android.print.PrintAttributes.MediaSize;
                public static ISO_A5: android.print.PrintAttributes.MediaSize;
                public static ISO_A6: android.print.PrintAttributes.MediaSize;
                public static ISO_A7: android.print.PrintAttributes.MediaSize;
                public static ISO_A8: android.print.PrintAttributes.MediaSize;
                public static ISO_A9: android.print.PrintAttributes.MediaSize;
                public static ISO_B0: android.print.PrintAttributes.MediaSize;
                public static ISO_B1: android.print.PrintAttributes.MediaSize;
                public static ISO_B10: android.print.PrintAttributes.MediaSize;
                public static ISO_B2: android.print.PrintAttributes.MediaSize;
                public static ISO_B3: android.print.PrintAttributes.MediaSize;
                public static ISO_B4: android.print.PrintAttributes.MediaSize;
                public static ISO_B5: android.print.PrintAttributes.MediaSize;
                public static ISO_B6: android.print.PrintAttributes.MediaSize;
                public static ISO_B7: android.print.PrintAttributes.MediaSize;
                public static ISO_B8: android.print.PrintAttributes.MediaSize;
                public static ISO_B9: android.print.PrintAttributes.MediaSize;
                public static ISO_C0: android.print.PrintAttributes.MediaSize;
                public static ISO_C1: android.print.PrintAttributes.MediaSize;
                public static ISO_C10: android.print.PrintAttributes.MediaSize;
                public static ISO_C2: android.print.PrintAttributes.MediaSize;
                public static ISO_C3: android.print.PrintAttributes.MediaSize;
                public static ISO_C4: android.print.PrintAttributes.MediaSize;
                public static ISO_C5: android.print.PrintAttributes.MediaSize;
                public static ISO_C6: android.print.PrintAttributes.MediaSize;
                public static ISO_C7: android.print.PrintAttributes.MediaSize;
                public static ISO_C8: android.print.PrintAttributes.MediaSize;
                public static ISO_C9: android.print.PrintAttributes.MediaSize;
                public static JIS_B0: android.print.PrintAttributes.MediaSize;
                public static JIS_B1: android.print.PrintAttributes.MediaSize;
                public static JIS_B10: android.print.PrintAttributes.MediaSize;
                public static JIS_B2: android.print.PrintAttributes.MediaSize;
                public static JIS_B3: android.print.PrintAttributes.MediaSize;
                public static JIS_B4: android.print.PrintAttributes.MediaSize;
                public static JIS_B5: android.print.PrintAttributes.MediaSize;
                public static JIS_B6: android.print.PrintAttributes.MediaSize;
                public static JIS_B7: android.print.PrintAttributes.MediaSize;
                public static JIS_B8: android.print.PrintAttributes.MediaSize;
                public static JIS_B9: android.print.PrintAttributes.MediaSize;
                public static JIS_EXEC: android.print.PrintAttributes.MediaSize;
                public static JPN_CHOU2: android.print.PrintAttributes.MediaSize;
                public static JPN_CHOU3: android.print.PrintAttributes.MediaSize;
                public static JPN_CHOU4: android.print.PrintAttributes.MediaSize;
                public static JPN_HAGAKI: android.print.PrintAttributes.MediaSize;
                public static JPN_KAHU: android.print.PrintAttributes.MediaSize;
                public static JPN_KAKU2: android.print.PrintAttributes.MediaSize;
                public static JPN_OUFUKU: android.print.PrintAttributes.MediaSize;
                public static JPN_YOU4: android.print.PrintAttributes.MediaSize;
                public static NA_FOOLSCAP: android.print.PrintAttributes.MediaSize;
                public static NA_GOVT_LETTER: android.print.PrintAttributes.MediaSize;
                public static NA_INDEX_3X5: android.print.PrintAttributes.MediaSize;
                public static NA_INDEX_4X6: android.print.PrintAttributes.MediaSize;
                public static NA_INDEX_5X8: android.print.PrintAttributes.MediaSize;
                public static NA_JUNIOR_LEGAL: android.print.PrintAttributes.MediaSize;
                public static NA_LEDGER: android.print.PrintAttributes.MediaSize;
                public static NA_LEGAL: android.print.PrintAttributes.MediaSize;
                public static NA_LETTER: android.print.PrintAttributes.MediaSize;
                public static NA_MONARCH: android.print.PrintAttributes.MediaSize;
                public static NA_QUARTO: android.print.PrintAttributes.MediaSize;
                public static NA_TABLOID: android.print.PrintAttributes.MediaSize;
                public static OM_DAI_PA_KAI: android.print.PrintAttributes.MediaSize;
                public static OM_JUURO_KU_KAI: android.print.PrintAttributes.MediaSize;
                public static OM_PA_KAI: android.print.PrintAttributes.MediaSize;
                public static PRC_1: android.print.PrintAttributes.MediaSize;
                public static PRC_10: android.print.PrintAttributes.MediaSize;
                public static PRC_16K: android.print.PrintAttributes.MediaSize;
                public static PRC_2: android.print.PrintAttributes.MediaSize;
                public static PRC_3: android.print.PrintAttributes.MediaSize;
                public static PRC_4: android.print.PrintAttributes.MediaSize;
                public static PRC_5: android.print.PrintAttributes.MediaSize;
                public static PRC_6: android.print.PrintAttributes.MediaSize;
                public static PRC_7: android.print.PrintAttributes.MediaSize;
                public static PRC_8: android.print.PrintAttributes.MediaSize;
                public static PRC_9: android.print.PrintAttributes.MediaSize;
                public static ROC_16K: android.print.PrintAttributes.MediaSize;
                public static ROC_8K: android.print.PrintAttributes.MediaSize;
                public static UNKNOWN_LANDSCAPE: android.print.PrintAttributes.MediaSize;
                public static UNKNOWN_PORTRAIT: android.print.PrintAttributes.MediaSize;

                public getWidthMils(): number;

                public getId(): string;

                public asLandscape(): android.print.PrintAttributes.MediaSize;

                public equals(param0: javalangObject): boolean;

                public hashCode(): number;

                public isPortrait(): boolean;

                public getHeightMils(): number;

                public asPortrait(): android.print.PrintAttributes.MediaSize;

                public constructor(param0: string, param1: string, param2: number, param3: number);

                public getLabel(param0: android.content.pm.PackageManager): string;

                public toString(): string;
            }
            export class Resolution extends javalangObject {
                public getHorizontalDpi(): number;

                public getId(): string;

                public getVerticalDpi(): number;

                public equals(param0: javalangObject): boolean;

                public getLabel(): string;

                public hashCode(): number;

                public constructor(param0: string, param1: string, param2: number, param3: number);

                public toString(): string;
            }
        }
    }
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.CancellationSignal.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./android.print.PageRange.d.ts" />
/// <reference path="./android.print.PrintAttributes.d.ts" />
/// <reference path="./android.print.PrintDocumentInfo.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
declare module android {
    export module print {
        export abstract class PrintDocumentAdapter extends javalangObject {
            public static EXTRA_PRINT_PREVIEW: string;

            public onLayout(param0: android.print.PrintAttributes, param1: android.print.PrintAttributes, param2: android.os.CancellationSignal, param3: android.print.PrintDocumentAdapter.LayoutResultCallback, param4: android.os.Bundle): void;

            public onStart(): void;

            public onWrite(param0: native.Array<android.print.PageRange>, param1: android.os.ParcelFileDescriptor, param2: android.os.CancellationSignal, param3: android.print.PrintDocumentAdapter.WriteResultCallback): void;

            public onFinish(): void;

            public constructor();
        }
        export module PrintDocumentAdapter {
            export abstract class LayoutResultCallback extends javalangObject {
                public onLayoutCancelled(): void;

                public onLayoutFinished(param0: android.print.PrintDocumentInfo, param1: boolean): void;

                public onLayoutFailed(param0: string): void;
            }
            export abstract class WriteResultCallback extends javalangObject {
                public onWriteFinished(param0: native.Array<android.print.PageRange>): void;

                public onWriteFailed(param0: string): void;

                public onWriteCancelled(): void;
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.print.PrintDocumentInfo.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module print {
        export class PrintDocumentInfo extends javalangObject implements android.os.Parcelable {
            public static CONTENT_TYPE_DOCUMENT: number;
            public static CONTENT_TYPE_PHOTO: number;
            public static CONTENT_TYPE_UNKNOWN: number;
            public static CREATOR: android.os.Parcelable.Creator;
            public static PAGE_COUNT_UNKNOWN: number;

            public getPageCount(): number;

            public toString(): string;

            public getName(): string;

            public equals(param0: javalangObject): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getDataSize(): number;

            public getContentType(): number;

            public hashCode(): number;
        }
        export module PrintDocumentInfo {
            export class Builder extends javalangObject {
                public setContentType(param0: number): android.print.PrintDocumentInfo.Builder;

                public setPageCount(param0: number): android.print.PrintDocumentInfo.Builder;

                public constructor(param0: string);

                public build(): android.print.PrintDocumentInfo;
            }
        }
    }
}

/// <reference path="./android.print.PrintJobId.d.ts" />
/// <reference path="./android.print.PrintJobInfo.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module print {
        export class PrintJob extends javalangObject {
            public getId(): android.print.PrintJobId;

            public isBlocked(): boolean;

            public isQueued(): boolean;

            public isFailed(): boolean;

            public isStarted(): boolean;

            public getInfo(): android.print.PrintJobInfo;

            public equals(param0: javalangObject): boolean;

            public isCompleted(): boolean;

            public cancel(): void;

            public isCancelled(): boolean;

            public restart(): void;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module print {
        export class PrintJobId extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public equals(param0: javalangObject): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.print.PageRange.d.ts" />
/// <reference path="./android.print.PrintAttributes.d.ts" />
/// <reference path="./android.print.PrintJobId.d.ts" />
/// <reference path="./android.print.PrintJobInfo.d.ts" />
/// <reference path="./android.print.PrinterId.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module print {
        export class PrintJobInfo extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static STATE_BLOCKED: number;
            public static STATE_CANCELED: number;
            public static STATE_COMPLETED: number;
            public static STATE_CREATED: number;
            public static STATE_FAILED: number;
            public static STATE_QUEUED: number;
            public static STATE_STARTED: number;

            public getId(): android.print.PrintJobId;

            public getPrinterId(): android.print.PrinterId;

            public getLabel(): string;

            public toString(): string;

            public describeContents(): number;

            public getPages(): native.Array<android.print.PageRange>;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getAttributes(): android.print.PrintAttributes;

            public getCopies(): number;

            public getCreationTime(): number;

            public getState(): number;
        }
        export module PrintJobInfo {
            export class Builder extends javalangObject {
                public constructor(param0: android.print.PrintJobInfo);

                public putAdvancedOption(param0: string, param1: string): void;

                public setPages(param0: native.Array<android.print.PageRange>): void;

                public setCopies(param0: number): void;

                public build(): android.print.PrintJobInfo;

                public setAttributes(param0: android.print.PrintAttributes): void;

                public putAdvancedOption(param0: string, param1: number): void;
            }
        }
    }
}

/// <reference path="./android.print.PrintAttributes.d.ts" />
/// <reference path="./android.print.PrintDocumentAdapter.d.ts" />
/// <reference path="./android.print.PrintJob.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module print {
        export class PrintManager extends javalangObject {
            public getPrintJobs(): javautilList;

            public print(param0: string, param1: android.print.PrintDocumentAdapter, param2: android.print.PrintAttributes): android.print.PrintJob;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.print.PrintAttributes.d.ts" />
/// <reference path="./android.print.PrinterCapabilitiesInfo.d.ts" />
/// <reference path="./android.print.PrinterId.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module print {
        export class PrinterCapabilitiesInfo extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public getMinMargins(): android.print.PrintAttributes.Margins;

            public getResolutions(): javautilList;

            public toString(): string;

            public getColorModes(): number;

            public getDefaults(): android.print.PrintAttributes;

            public equals(param0: javalangObject): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getMediaSizes(): javautilList;

            public getDuplexModes(): number;

            public hashCode(): number;
        }
        export module PrinterCapabilitiesInfo {
            export class Builder extends javalangObject {
                public addMediaSize(param0: android.print.PrintAttributes.MediaSize, param1: boolean): android.print.PrinterCapabilitiesInfo.Builder;

                public setMinMargins(param0: android.print.PrintAttributes.Margins): android.print.PrinterCapabilitiesInfo.Builder;

                public build(): android.print.PrinterCapabilitiesInfo;

                public setColorModes(param0: number, param1: number): android.print.PrinterCapabilitiesInfo.Builder;

                public setDuplexModes(param0: number, param1: number): android.print.PrinterCapabilitiesInfo.Builder;

                public constructor(param0: android.print.PrinterId);

                public addResolution(param0: android.print.PrintAttributes.Resolution, param1: boolean): android.print.PrinterCapabilitiesInfo.Builder;
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module print {
        export class PrinterId extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public getLocalId(): string;

            public toString(): string;

            public equals(param0: javalangObject): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.print.PrinterCapabilitiesInfo.d.ts" />
/// <reference path="./android.print.PrinterId.d.ts" />
/// <reference path="./android.print.PrinterInfo.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module print {
        export class PrinterInfo extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static STATUS_BUSY: number;
            public static STATUS_IDLE: number;
            public static STATUS_UNAVAILABLE: number;

            public toString(): string;

            public getName(): string;

            public equals(param0: javalangObject): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getCapabilities(): android.print.PrinterCapabilitiesInfo;

            public getId(): android.print.PrinterId;

            public getDescription(): string;

            public getStatus(): number;

            public hashCode(): number;
        }
        export module PrinterInfo {
            export class Builder extends javalangObject {
                public setCapabilities(param0: android.print.PrinterCapabilitiesInfo): android.print.PrinterInfo.Builder;

                public build(): android.print.PrinterInfo;

                public constructor(param0: android.print.PrinterInfo);

                public setDescription(param0: string): android.print.PrinterInfo.Builder;

                public setStatus(param0: number): android.print.PrinterInfo.Builder;

                public setName(param0: string): android.print.PrinterInfo.Builder;

                public constructor(param0: android.print.PrinterId, param1: string, param2: number);
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.print.PrintAttributes.d.ts" />
declare module android {
    export module print {
        export module pdf {
            export class PrintedPdfDocument extends android.graphics.pdf.PdfDocument {
                public getPageWidth(): number;

                public getPageContentRect(): android.graphics.Rect;

                public getPageHeight(): number;

                public constructor(param0: android.content.Context, param1: android.print.PrintAttributes);

                public startPage(param0: number): android.graphics.pdf.PdfDocument.Page;
                public startPage(param0: android.graphics.pdf.PdfDocument.PageInfo): android.graphics.pdf.PdfDocument.Page;

                public constructor();
            }
        }
    }
}
