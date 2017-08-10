export declare class BluetoothGattErrors {
    private statusCodes;
    constructor();
    readonly batteryStatusMessage: (errorCode: any) => any;
    readonly cardStatusMessage: (errorCode: any) => any;
    readonly deviceInfoMessage: (errorCode: any) => any;
    readonly errorMessage: (errorCode: any) => any;
    readonly stateMessage: (errorCode: any) => any;
    readonly gattMessage: (errorCode: any) => any;
    readonly batteryStatusEvent: (errorCode: any) => any;
    readonly cardStatusEvent: (errorCode: any) => any;
    readonly deviceInfoEvent: (errorCode: any) => any;
    readonly errorEvent: (errorCode: any) => any;
    readonly stateEvent: (errorCode: any) => any;
    readonly gattEvent: (errorCode: any) => any;
    message(lookup: any): (errorCode: any) => any;
    event(lookup: any): (errorCode: any) => any;
}
