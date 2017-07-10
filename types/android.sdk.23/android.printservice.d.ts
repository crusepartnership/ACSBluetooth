
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./android.print.PrintDocumentInfo.d.ts" />
declare module android {
    export module printservice {
        export class PrintDocument extends javalangObject {
            public getData(): android.os.ParcelFileDescriptor;

            public getInfo(): android.print.PrintDocumentInfo;
        }
    }
}

/// <reference path="./android.print.PrintJobId.d.ts" />
/// <reference path="./android.print.PrintJobInfo.d.ts" />
/// <reference path="./android.printservice.PrintDocument.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module printservice {
        export class PrintJob extends javalangObject {
            public isBlocked(): boolean;

            public getDocument(): android.printservice.PrintDocument;

            public setTag(param0: string): boolean;

            public isStarted(): boolean;

            public getAdvancedStringOption(param0: string): string;

            public equals(param0: javalangObject): boolean;

            public fail(param0: string): boolean;

            public getTag(): string;

            public isCancelled(): boolean;

            public hasAdvancedOption(param0: string): boolean;

            public getAdvancedIntOption(param0: string): number;

            public complete(): boolean;

            public getId(): android.print.PrintJobId;

            public isQueued(): boolean;

            public isFailed(): boolean;

            public cancel(): boolean;

            public getInfo(): android.print.PrintJobInfo;

            public isCompleted(): boolean;

            public start(): boolean;

            public block(param0: string): boolean;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.print.PrinterId.d.ts" />
/// <reference path="./android.printservice.PrintJob.d.ts" />
/// <reference path="./android.printservice.PrinterDiscoverySession.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module printservice {
        export abstract class PrintService extends android.app.Service {
            public static EXTRA_PRINTER_INFO: string;
            public static EXTRA_PRINT_DOCUMENT_INFO: string;
            public static EXTRA_PRINT_JOB_INFO: string;
            public static SERVICE_INTERFACE: string;
            public static SERVICE_META_DATA: string;

            public onDisconnected(): void;

            public onTrimMemory(param0: number): void;

            public onCreatePrinterDiscoverySession(): android.printservice.PrinterDiscoverySession;

            public onBind(param0: android.content.Intent): android.os.IBinder;

            public attachBaseContext(param0: android.content.Context): void;

            public constructor(param0: android.content.Context);

            public onConnected(): void;

            public onRequestCancelPrintJob(param0: android.printservice.PrintJob): void;

            public getActivePrintJobs(): javautilList;

            public generatePrinterId(param0: string): android.print.PrinterId;

            public constructor();

            public onPrintJobQueued(param0: android.printservice.PrintJob): void;
        }
    }
}

/// <reference path="./android.print.PrinterId.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module printservice {
        export abstract class PrinterDiscoverySession extends javalangObject {
            public getPrinters(): javautilList;

            public onStopPrinterStateTracking(param0: android.print.PrinterId): void;

            public isDestroyed(): boolean;

            public onStartPrinterDiscovery(param0: javautilList): void;

            public getTrackedPrinters(): javautilList;

            public constructor();

            public onDestroy(): void;

            public removePrinters(param0: javautilList): void;

            public onValidatePrinters(param0: javautilList): void;

            public onStartPrinterStateTracking(param0: android.print.PrinterId): void;

            public isPrinterDiscoveryStarted(): boolean;

            public addPrinters(param0: javautilList): void;

            public onStopPrinterDiscovery(): void;
        }
    }
}
