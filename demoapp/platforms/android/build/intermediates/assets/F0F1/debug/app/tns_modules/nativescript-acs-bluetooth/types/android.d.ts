declare module com {
    export module acs {
        export module bluetooth {
            export class Acr1255uj1Reader extends com.acs.bluetooth.BluetoothReader {
                public enableNotification(param0: boolean): boolean;

                public getCardStatus(): boolean;

                public powerOffCard(): boolean;

                public getDeviceInfo(param0: number): boolean;

                public getBatteryLevel(): boolean;

                public setOnBatteryLevelAvailableListener(param0: com.acs.bluetooth.Acr1255uj1Reader.OnBatteryLevelAvailableListener): void;

                public setOnBatteryLevelChangeListener(param0: com.acs.bluetooth.Acr1255uj1Reader.OnBatteryLevelChangeListener): void;

                public authenticate(param0: native.Array<number>): boolean;

                public powerOnCard(): boolean;

                public transmitApdu(param0: native.Array<number>): boolean;

                public constructor();

                public transmitEscapeCommand(param0: native.Array<number>): boolean;
            }
            export module Acr1255uj1Reader {
                export class OnBatteryLevelAvailableListener {
                    /**
                     * Constructs a new instance of the com.acs.bluetooth.Acr1255uj1Reader$OnBatteryLevelAvailableListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onBatteryLevelAvailable(param0: com.acs.bluetooth.BluetoothReader, param1: number, param2: number): void;
                    });

                    public onBatteryLevelAvailable(param0: com.acs.bluetooth.BluetoothReader, param1: number, param2: number): void;
                }
                export class OnBatteryLevelChangeListener {
                    /**
                     * Constructs a new instance of the com.acs.bluetooth.Acr1255uj1Reader$OnBatteryLevelChangeListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onBatteryLevelChange(param0: com.acs.bluetooth.BluetoothReader, param1: number): void;
                    });

                    public onBatteryLevelChange(param0: com.acs.bluetooth.BluetoothReader, param1: number): void;
                }
            }
        }
    }
}

/// <reference path="./com.acs.bluetooth.BluetoothReader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
    export module acs {
        export module bluetooth {
            export class Acr3901us1Reader extends com.acs.bluetooth.BluetoothReader {
                public powerOffCard(): boolean;

                public getDeviceInfo(param0: number): boolean;

                public setOnBatteryStatusAvailableListener(param0: com.acs.bluetooth.Acr3901us1Reader.OnBatteryStatusAvailableListener): void;

                public startBonding(): void;

                public authenticate(param0: native.Array<number>): boolean;

                public constructor();

                public transmitEscapeCommand(param0: native.Array<number>): boolean;

                public getBatteryStatus(): boolean;

                public enableNotification(param0: boolean): boolean;

                public getCardStatus(): boolean;

                public setOnBatteryStatusChangeListener(param0: com.acs.bluetooth.Acr3901us1Reader.OnBatteryStatusChangeListener): void;

                public powerOnCard(): boolean;

                public transmitApdu(param0: native.Array<number>): boolean;
            }
            export module Acr3901us1Reader {
                export class OnBatteryStatusAvailableListener {
                    /**
                     * Constructs a new instance of the com.acs.bluetooth.Acr3901us1Reader$OnBatteryStatusAvailableListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onBatteryStatusAvailable(param0: com.acs.bluetooth.BluetoothReader, param1: number, param2: number): void;
                    });

                    public onBatteryStatusAvailable(param0: com.acs.bluetooth.BluetoothReader, param1: number, param2: number): void;
                }
                export class OnBatteryStatusChangeListener {
                    /**
                     * Constructs a new instance of the com.acs.bluetooth.Acr3901us1Reader$OnBatteryStatusChangeListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onBatteryStatusChange(param0: com.acs.bluetooth.BluetoothReader, param1: number): void;
                    });

                    public onBatteryStatusChange(param0: com.acs.bluetooth.BluetoothReader, param1: number): void;
                }
                export class a {
                    public static a: com.acs.bluetooth.Acr3901us1Reader.a;
                    public static b: com.acs.bluetooth.Acr3901us1Reader.a;
                    public static c: com.acs.bluetooth.Acr3901us1Reader.a;

                    public static valueOf(param0: string): com.acs.bluetooth.Acr3901us1Reader.a;

                    public static values(): native.Array<com.acs.bluetooth.Acr3901us1Reader.a>;
                }
            }
        }
    }
}

//import javalangObject = java.lang.Object;
/// <reference path="./com.acs.bluetooth.BluetoothReader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Queue.d.ts" />
declare module com {
    export module acs {
        export module bluetooth {
            export abstract class BluetoothReader {
                public static ERROR_SUCCESS: number;
                public static ERROR_INVALID_CHECKSUM: number;
                public static ERROR_INVALID_DATA_LENGTH: number;
                public static ERROR_INVALID_COMMAND: number;
                public static ERROR_UNKNOWN_COMMAND_ID: number;
                public static ERROR_CARD_OPERATION: number;
                public static ERROR_AUTHENTICATION_REQUIRED: number;
                public static ERROR_LOW_BATTERY: number;
                public static ERROR_AUTHENTICATION_FAILED: number;
                public static ERROR_CHARACTERISTIC_NOT_FOUND: number;
                public static ERROR_WRITE_DATA: number;
                public static ERROR_TIMEOUT: number;
                public static ERROR_SET_NOTIFCIATION_FAILED: number;
                public static ERROR_READ_CHARACTERISTIC_FAILED: number;
                public static ERROR_UNDEFINED: number;
                public static ERROR_INVALID_DATA: number;
                public static BATTERY_STATUS_NONE: number;
                public static BATTERY_STATUS_FULL: number;
                public static BATTERY_STATUS_USB_PLUGGED: number;
                public static CARD_STATUS_UNKNOWN: number;
                public static CARD_STATUS_ABSENT: number;
                public static CARD_STATUS_PRESENT: number;
                public static CARD_STATUS_POWERED: number;
                public static CARD_STATUS_POWER_SAVING_MODE: number;
                public static STATE_DISCONNECTED: number;
                public static STATE_DISCONNECTING: number;
                public static STATE_CONNECTING: number;
                public static STATE_CONNECTED: number;
                public static DEVICE_INFO_SYSTEM_ID: number;
                public static DEVICE_INFO_MODEL_NUMBER_STRING: number;
                public static DEVICE_INFO_SERIAL_NUMBER_STRING: number;
                public static DEVICE_INFO_FIRMWARE_REVISION_STRING: number;
                public static DEVICE_INFO_HARDWARE_REVISION_STRING: number;
                public static DEVICE_INFO_SOFTWARE_REVISION_STRING: number;
                public static DEVICE_INFO_MANUFACTURER_NAME_STRING: number;
                static GATT_CONNECTION_CONGESTED: number;
                static GATT_FAILURE: number;
                static GATT_INSUFFICIENT_AUTHENTICATION: number;
                static GATT_INSUFFICIENT_ENCRYPTION: number;
                static GATT_INVALID_ATTRIBUTE_LENGTH: number;
                static GATT_INVALID_OFFSET: number;
                static GATT_READ_NOT_PERMITTED: number;
                static GATT_REQUEST_NOT_SUPPORTED: number;
                static GATT_SUCCESS: number;
                static GATT_WRITE_NOT_PERMITTED: number;

                public mCcidQueue: any;
                public mReaderBusy: boolean;
                public mBtQueue: any;

                public setOnCardPowerOffCompleteListener(param0: com.acs.bluetooth.BluetoothReader.OnCardPowerOffCompleteListener): void;

                public setOnEscapeResponseAvailableListener(param0: com.acs.bluetooth.BluetoothReader.OnEscapeResponseAvailableListener): void;

                public powerOffCard(): boolean;

                public getDeviceInfo(param0: number): boolean;

                public authenticate(param0: native.Array<number>): boolean;

                public setOnCardStatusAvailableListener(param0: com.acs.bluetooth.BluetoothReader.OnCardStatusAvailableListener): void;

                public constructor();

                public transmitEscapeCommand(param0: native.Array<number>): boolean;

                public setOnResponseApduAvailableListener(param0: com.acs.bluetooth.BluetoothReader.OnResponseApduAvailableListener): void;

                public enableNotification(param0: boolean): boolean;

                public getCardStatus(): boolean;

                public setOnAtrAvailableListener(param0: com.acs.bluetooth.BluetoothReader.OnAtrAvailableListener): void;

                public setOnEnableNotificationCompleteListener(param0: com.acs.bluetooth.BluetoothReader.OnEnableNotificationCompleteListener): void;

                public setOnDeviceInfoAvailableListener(param0: com.acs.bluetooth.BluetoothReader.OnDeviceInfoAvailableListener): void;

                public setOnAuthenticationCompleteListener(param0: com.acs.bluetooth.BluetoothReader.OnAuthenticationCompleteListener): void;

                public powerOnCard(): boolean;

                public setOnCardStatusChangeListener(param0: com.acs.bluetooth.BluetoothReader.OnCardStatusChangeListener): void;

                public transmitApdu(param0: native.Array<number>): boolean;
            }
            export module BluetoothReader {
                export class OnAtrAvailableListener {
                    /**
                     * Constructs a new instance of the com.acs.bluetooth.BluetoothReader$OnAtrAvailableListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onAtrAvailable(param0: com.acs.bluetooth.BluetoothReader, param1: native.Array<number>, param2: number): void;
                    });

                    public onAtrAvailable(param0: com.acs.bluetooth.BluetoothReader, param1: native.Array<number>, param2: number): void;
                }
                export class OnAuthenticationCompleteListener {
                    /**
                     * Constructs a new instance of the com.acs.bluetooth.BluetoothReader$OnAuthenticationCompleteListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onAuthenticationComplete(param0: com.acs.bluetooth.BluetoothReader, param1: number): void;
                    });

                    public onAuthenticationComplete(param0: com.acs.bluetooth.BluetoothReader, param1: number): void;
                }
                export class OnCardPowerOffCompleteListener {
                    /**
                     * Constructs a new instance of the com.acs.bluetooth.BluetoothReader$OnCardPowerOffCompleteListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onCardPowerOffComplete(param0: com.acs.bluetooth.BluetoothReader, param1: number): void;
                    });

                    public onCardPowerOffComplete(param0: com.acs.bluetooth.BluetoothReader, param1: number): void;
                }
                export class OnCardStatusAvailableListener {
                    /**
                     * Constructs a new instance of the com.acs.bluetooth.BluetoothReader$OnCardStatusAvailableListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onCardStatusAvailable(param0: com.acs.bluetooth.BluetoothReader, param1: number, param2: number): void;
                    });

                    public onCardStatusAvailable(param0: com.acs.bluetooth.BluetoothReader, param1: number, param2: number): void;
                }
                export class OnCardStatusChangeListener {
                    /**
                     * Constructs a new instance of the com.acs.bluetooth.BluetoothReader$OnCardStatusChangeListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onCardStatusChange(param0: com.acs.bluetooth.BluetoothReader, param1: number): void;
                    });

                    public onCardStatusChange(param0: com.acs.bluetooth.BluetoothReader, param1: number): void;
                }
                export class OnDeviceInfoAvailableListener {
                    /**
                     * Constructs a new instance of the com.acs.bluetooth.BluetoothReader$OnDeviceInfoAvailableListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onDeviceInfoAvailable(param0: com.acs.bluetooth.BluetoothReader, param1: number, param2: javalangObject, param3: number): void;
                    });

                    public onDeviceInfoAvailable(param0: com.acs.bluetooth.BluetoothReader, param1: number, param2: javalangObject, param3: number): void;
                }
                export class OnEnableNotificationCompleteListener {
                    /**
                     * Constructs a new instance of the com.acs.bluetooth.BluetoothReader$OnEnableNotificationCompleteListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onEnableNotificationComplete(param0: com.acs.bluetooth.BluetoothReader, param1: number): void;
                    });

                    public onEnableNotificationComplete(param0: com.acs.bluetooth.BluetoothReader, param1: number): void;
                }
                export class OnEscapeResponseAvailableListener {
                    /**
                     * Constructs a new instance of the com.acs.bluetooth.BluetoothReader$OnEscapeResponseAvailableListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onEscapeResponseAvailable(param0: com.acs.bluetooth.BluetoothReader, param1: native.Array<number>, param2: number): void;
                    });

                    public onEscapeResponseAvailable(param0: com.acs.bluetooth.BluetoothReader, param1: native.Array<number>, param2: number): void;
                }
                export class OnResponseApduAvailableListener {
                    /**
                     * Constructs a new instance of the com.acs.bluetooth.BluetoothReader$OnResponseApduAvailableListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onResponseApduAvailable(param0: com.acs.bluetooth.BluetoothReader, param1: native.Array<number>, param2: number): void;
                    });

                    public onResponseApduAvailable(param0: com.acs.bluetooth.BluetoothReader, param1: native.Array<number>, param2: number): void;
                }
            }
        }
    }
}

import androidbluetoothBluetoothGatt = android.bluetooth.BluetoothGatt;
import androidbluetoothBluetoothGattCharacteristic = android.bluetooth.BluetoothGattCharacteristic;
import androidbluetoothBluetoothGattDescriptor = android.bluetooth.BluetoothGattDescriptor;
/// <reference path="./android.bluetooth.BluetoothGatt.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattCharacteristic.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattDescriptor.d.ts" />
/// <reference path="./com.acs.bluetooth.BluetoothReaderManager.d.ts" />
declare module com {
    export module acs {
        export module bluetooth {
            export class BluetoothReaderGattCallback {
                public onCharacteristicChanged(param0: androidbluetoothBluetoothGatt, param1: androidbluetoothBluetoothGattCharacteristic): void;

                public constructor(param0: com.acs.bluetooth.BluetoothReaderManager);

                public onServicesDiscovered(param0: androidbluetoothBluetoothGatt, param1: number): void;

                public setOnConnectionStateChangeListener(param0: com.acs.bluetooth.BluetoothReaderGattCallback.OnConnectionStateChangeListener): void;

                public onCharacteristicRead(param0: androidbluetoothBluetoothGatt, param1: androidbluetoothBluetoothGattCharacteristic, param2: number): void;

                public onDescriptorWrite(param0: androidbluetoothBluetoothGatt, param1: androidbluetoothBluetoothGattDescriptor, param2: number): void;

                public constructor();

                public onConnectionStateChange(param0: androidbluetoothBluetoothGatt, param1: number, param2: number): void;

                public onCharacteristicWrite(param0: androidbluetoothBluetoothGatt, param1: androidbluetoothBluetoothGattCharacteristic, param2: number): void;
            }
            export module BluetoothReaderGattCallback {
                export class OnConnectionStateChangeListener {
                    /**
                     * Constructs a new instance of the com.acs.bluetooth.BluetoothReaderGattCallback$OnConnectionStateChangeListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onConnectionStateChange(param0: androidbluetoothBluetoothGatt, param1: number, param2: number): void;
                    });

                    public onConnectionStateChange(param0: androidbluetoothBluetoothGatt, param1: number, param2: number): void;
                }
            }
        }
    }
}

/// <reference path="./android.bluetooth.BluetoothGatt.d.ts" />
/// <reference path="./com.acs.bluetooth.BluetoothReader.d.ts" />
/// <reference path="./com.acs.bluetooth.BluetoothReaderGattCallback.d.ts" />
declare module com {
    export module acs {
        export module bluetooth {
            export class BluetoothReaderManager {
                public setOnReaderDetectionListener(param0: com.acs.bluetooth.BluetoothReaderManager.OnReaderDetectionListener): void;

                public constructor();

                public detectReader(param0: androidbluetoothBluetoothGatt, param1: com.acs.bluetooth.BluetoothReaderGattCallback): boolean;
            }
            export module BluetoothReaderManager {
                export class OnReaderDetectionListener {
                    /**
                     * Constructs a new instance of the com.acs.bluetooth.BluetoothReaderManager$OnReaderDetectionListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onReaderDetection(param0: com.acs.bluetooth.BluetoothReader): void;
                    });

                    public onReaderDetection(param0: com.acs.bluetooth.BluetoothReader): void;
                }
            }
        }
    }
}

/// <reference path="./android.bluetooth.BluetoothGattCharacteristic.d.ts" />
declare module com {
    export module acs {
        export module bluetooth {
            export class a {
                public constructor(param0: number, param1: androidbluetoothBluetoothGattCharacteristic);
                public constructor(param0: number, param1: androidbluetoothBluetoothGattCharacteristic, param2: boolean);
                public constructor(param0: number, param1: native.Array<number>);
            }
        }
    }
}

declare module com {
    export module acs {
        export module bluetooth {
            export class b {
                public constructor(param0: number, param1: number, param2: number);
            }
        }
    }
}
/*
/// <reference path="./android.bluetooth.BluetoothGatt.d.ts" />
declare module android {
    export module bluetooth {
        export class BluetoothGatt extends java.lang.Object {
            static CONNECTION_PRIORITY_BALANCED: number;
            static CONNECTION_PRIORITY_HIGH: number;
            static CONNECTION_PRIORITY_LOW_POWER: number;
            static GATT_CONNECTION_CONGESTED: number;
            static GATT_FAILURE: number;
            static GATT_INSUFFICIENT_AUTHENTICATION: number;
            static GATT_INSUFFICIENT_ENCRYPTION: number;
            static GATT_INVALID_ATTRIBUTE_LENGTH: number;
            static GATT_INVALID_OFFSET: number;
            static GATT_READ_NOT_PERMITTED: number;
            static GATT_REQUEST_NOT_SUPPORTED: number;
            static GATT_SUCCESS: number;
            static GATT_WRITE_NOT_PERMITTED: number;
            static BATTERY_STATUS_FULL: number;
            static BATTERY_STATUS_NONE: number;
            static BATTERY_STATUS_USB_PLUGGED: number;
            static CARD_STATUS_ABSENT: number;
            static CARD_STATUS_POWER_SAVING_MODE: number;
            static CARD_STATUS_POWERED: number;
            static CARD_STATUS_PRESENT: number;
            static CARD_STATUS_UNKNOWN: number;
            static DEVICE_INFO_FIRMWARE_REVISION_STRING: number;
            static DEVICE_INFO_HARDWARE_REVISION_STRING: number;
            static DEVICE_INFO_MANUFACTURER_NAME_STRING: number;
            static DEVICE_INFO_MODEL_NUMBER_STRING: number;
            static DEVICE_INFO_SERIAL_NUMBER_STRING: number;
            static DEVICE_INFO_SOFTWARE_REVISION_STRING: number;
            static DEVICE_INFO_SYSTEM_ID: number;
            static ERROR_AUTHENTICATION_FAILED: number;
            static ERROR_AUTHENTICATION_REQUIRED: number;
            static ERROR_CARD_OPERATION: number;
            static ERROR_CHARACTERISTIC_NOT_FOUND: number;
            static ERROR_INVALID_CHECKSUM: number;
            static ERROR_INVALID_COMMAND: number;
            static ERROR_INVALID_DATA: number;
            static ERROR_INVALID_DATA_LENGTH: number;
            static ERROR_LOW_BATTERY: number;
            static ERROR_READ_CHARACTERISTIC_FAILED: number;
            static ERROR_SET_NOTIFCIATION_FAILED: number;
            static ERROR_SUCCESS: number;
            static ERROR_TIMEOUT: number;
            static ERROR_UNDEFINED: number;
            static ERROR_UNKNOWN_COMMAND_ID: number;
            static ERROR_WRITE_DATA: number;
            static STATE_CONNECTED: number;
            static STATE_CONNECTING: number;
            static STATE_DISCONNECTED: number;
            static STATE_DISCONNECTING: number;


            public abortReliableWrite(): void;

            public beginReliableWrite(): boolean;

            public close(): void;

            public connect(): boolean;

            public disconnect(): void;

            public discoverServices(): boolean;

            public executeReliableWrite(): boolean;

            public getConnectedDevices(): Array<android.bluetooth.BluetoothDevice>;

            public getConnectionState(device: android.bluetooth.BluetoothDevice): number;

            public getDevice(): android.bluetooth.BluetoothDevice;

            public getDevicesMatchingConnectionStates(GATT: number, states: Array<number>): Array<android.bluetooth.BluetoothDevice>;

            public getService(uuid: java.util.UUID): android.bluetooth.BluetoothGattService;

            public getServices(): Array<android.bluetooth.BluetoothGattService>;

            public readCharacteristic(characteristic: android.bluetooth.BluetoothGattCharacteristic): boolean;

            public readDescriptor(descriptor: android.bluetooth.BluetoothGattDescriptor): number;

            public readRemoteRssi(): number;

            public requestConnectionPriority(connectionPriority: number): boolean;

            public requestMtu(mtu: number): boolean;

            public setCharacteristicNotification(characteristic: android.bluetooth.BluetoothGattCharacteristic, enable: boolean): boolean;

            public writeCharacteristic(characteristic: android.bluetooth.BluetoothGattCharacteristic): boolean;

            public writeDescriptor(descriptor: android.bluetooth.BluetoothGattDescriptor): boolean;

            public getPrimaryService(service: java.util.UUID): any;

            public getPrimaryServices(service?: java.util.UUID): any;

            public device: android.bluetooth.BluetoothDevice;
        }
    }
}
/// <reference path="./android.bluetooth.BluetoothGattService.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattCharacteristic.d.ts" />
declare module android {
    export module bluetooth {
        export class BluetoothGattService {
            static SERVICE_TYPE_PRIMARY: number;
            static SERVICE_TYPE_SECONDARY: number;
            static mCharacteristics: Array<android.bluetooth.BluetoothGattCharacteristic>;
            static mIncludedServices: Array<android.bluetooth.BluetoothGattCharacteristic>;

            public addCharacteristic(characteristic: android.bluetooth.BluetoothGattCharacteristic): boolean;

            public addService(service: android.bluetooth.BluetoothGattService): boolean;

            public getCharacteristic(uuid: java.util.UUID): android.bluetooth.BluetoothGattCharacteristic;

            public getCharacteristics(uuid: java.util.UUID): Array<android.bluetooth.BluetoothGattCharacteristic>;

            public getIncludedServices(): Array<android.bluetooth.BluetoothGattService>;

            public getInstanceId(): number;

            public getType(): number;

            public getUuid(): java.util.UUID
        }
    }
}

/// <reference path="./android.bluetooth.BluetoothGattCharacteristic.d.ts" />
declare module android {
    export module bluetooth {
        export class BluetoothGattCharacteristic {
        }
    }
}

/// <reference path="./android.bluetooth.BluetoothGattDescriptor.d.ts" />
declare module android {
    export module bluetooth {
        export class BluetoothGattDescriptor {
        }
    }
}


/// <reference path="./android.bluetooth.BluetoothAdapter.d.ts" />
/// <reference path="./android.bluetooth.BluetoothAdapter.LeScanCallback.d.ts" />
/// <reference path="./android.bluetooth.BluetoothDevice.d.ts" />
declare module android {
    export module bluetooth {
        export interface BluetoothAdapter {
            getRemoteDevice(uuid: java.util.UUID): android.bluetooth.BluetoothDevice;

            startLeScan(callback: android.bluetooth.BluetoothAdapter.LeScanCallback);

            stopLeScan(callback): android.bluetooth.BluetoothAdapter.LeScanCallback;
        }

    }
}

/// <reference path="./android.bluetooth.BluetoothAdapter.LeScanCallback.d.ts" />
/// <reference path="./android.bluetooth.BluetoothDevice.d.ts" />
declare module android {
    export module bluetooth {
        export module BluetoothAdapter {
            export class LeScanCallback {
                constructor({});

                onLeScan: (device: android.bluetooth.BluetoothDevice, rssi: any, data: any) => void;
            }
        }
    }
}

// we may encounter issues here
/// <reference path="./android.bluetooth.BluetoothGatt.d.ts" />
declare module android {
    export module bluetooth {
        export interface BluetoothDevice {
            connectGatt(context, poling, callback): android.bluetooth.BluetoothGatt;
        }
    }
}
*/



