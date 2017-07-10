


/// <reference path="./android.bluetooth.BluetoothDevice.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module bluetooth {
        export class BluetoothA2dp extends javalangObject implements android.bluetooth.BluetoothProfile {
            public static ACTION_CONNECTION_STATE_CHANGED: string;
            public static ACTION_PLAYING_STATE_CHANGED: string;
            public static STATE_NOT_PLAYING: number;
            public static STATE_PLAYING: number;

            public getConnectedDevices(): javautilList;

            public getDevicesMatchingConnectionStates(param0: native.Array<number>): javautilList;

            public isA2dpPlaying(param0: android.bluetooth.BluetoothDevice): boolean;

            public getConnectionState(param0: android.bluetooth.BluetoothDevice): number;

            public finalize(): void;
        }
    }
}

import javautilSet = java.util.Set;
import javautilUUID = java.util.UUID;
/// <reference path="./android.bluetooth.BluetoothDevice.d.ts" />
/// <reference path="./android.bluetooth.BluetoothProfile.d.ts" />
/// <reference path="./android.bluetooth.BluetoothServerSocket.d.ts" />
/// <reference path="./android.bluetooth.le.BluetoothLeAdvertiser.d.ts" />
/// <reference path="./android.bluetooth.le.BluetoothLeScanner.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />
declare module android {
    export module bluetooth {
        export class BluetoothAdapter extends javalangObject {
            public static ACTION_CONNECTION_STATE_CHANGED: string;
            public static ACTION_DISCOVERY_FINISHED: string;
            public static ACTION_DISCOVERY_STARTED: string;
            public static ACTION_LOCAL_NAME_CHANGED: string;
            public static ACTION_REQUEST_DISCOVERABLE: string;
            public static ACTION_REQUEST_ENABLE: string;
            public static ACTION_SCAN_MODE_CHANGED: string;
            public static ACTION_STATE_CHANGED: string;
            public static ERROR: number;
            public static EXTRA_CONNECTION_STATE: string;
            public static EXTRA_DISCOVERABLE_DURATION: string;
            public static EXTRA_LOCAL_NAME: string;
            public static EXTRA_PREVIOUS_CONNECTION_STATE: string;
            public static EXTRA_PREVIOUS_SCAN_MODE: string;
            public static EXTRA_PREVIOUS_STATE: string;
            public static EXTRA_SCAN_MODE: string;
            public static EXTRA_STATE: string;
            public static SCAN_MODE_CONNECTABLE: number;
            public static SCAN_MODE_CONNECTABLE_DISCOVERABLE: number;
            public static SCAN_MODE_NONE: number;
            public static STATE_CONNECTED: number;
            public static STATE_CONNECTING: number;
            public static STATE_DISCONNECTED: number;
            public static STATE_DISCONNECTING: number;
            public static STATE_OFF: number;
            public static STATE_ON: number;
            public static STATE_TURNING_OFF: number;
            public static STATE_TURNING_ON: number;

            public getRemoteDevice(param0: native.Array<number>): android.bluetooth.BluetoothDevice;

            public isOffloadedScanBatchingSupported(): boolean;

            public startLeScan(param0: native.Array<javautilUUID>, param1: android.bluetooth.BluetoothAdapter.LeScanCallback): boolean;

            public getProfileProxy(param0: android.content.Context, param1: android.bluetooth.BluetoothProfile.ServiceListener, param2: number): boolean;

            public static getDefaultAdapter(): android.bluetooth.BluetoothAdapter;

            public getAddress(): string;

            public setName(param0: string): boolean;

            public getBondedDevices(): javautilSet;

            public cancelDiscovery(): boolean;

            public static checkBluetoothAddress(param0: string): boolean;

            public isDiscovering(): boolean;

            public isMultipleAdvertisementSupported(): boolean;

            public getBluetoothLeScanner(): android.bluetooth.le.BluetoothLeScanner;

            public startDiscovery(): boolean;

            public closeProfileProxy(param0: number, param1: android.bluetooth.BluetoothProfile): void;

            public listenUsingRfcommWithServiceRecord(param0: string, param1: javautilUUID): android.bluetooth.BluetoothServerSocket;

            public getRemoteDevice(param0: string): android.bluetooth.BluetoothDevice;

            public startLeScan(param0: android.bluetooth.BluetoothAdapter.LeScanCallback): boolean;

            public isOffloadedFilteringSupported(): boolean;

            public disable(): boolean;

            public getState(): number;

            public finalize(): void;

            public enable(): boolean;

            public getScanMode(): number;

            public listenUsingInsecureRfcommWithServiceRecord(param0: string, param1: javautilUUID): android.bluetooth.BluetoothServerSocket;

            public getBluetoothLeAdvertiser(): android.bluetooth.le.BluetoothLeAdvertiser;

            public isEnabled(): boolean;

            public stopLeScan(param0: android.bluetooth.BluetoothAdapter.LeScanCallback): void;

            public getProfileConnectionState(param0: number): number;

            public getName(): string;
        }
        export module BluetoothAdapter {
            export class LeScanCallback extends javalangObject {
                /**
                 * Constructs a new instance of the android.bluetooth.BluetoothAdapter$LeScanCallback interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onLeScan(param0: android.bluetooth.BluetoothDevice, param1: number, param2: native.Array<number>): void;
                });

                public onLeScan(param0: android.bluetooth.BluetoothDevice, param1: number, param2: native.Array<number>): void;
            }
        }
    }
}

declare module android {
    export module bluetooth {
        export class BluetoothAssignedNumbers extends javalangObject {
            public static AAMP_OF_AMERICA: number;
            public static ACCEL_SEMICONDUCTOR: number;
            public static ACE_SENSOR: number;
            public static ADIDAS: number;
            public static ADVANCED_PANMOBIL_SYSTEMS: number;
            public static AIROHA_TECHNOLOGY: number;
            public static ALCATEL: number;
            public static ALPWISE: number;
            public static AMICCOM_ELECTRONICS: number;
            public static APLIX: number;
            public static APPLE: number;
            public static APT_LICENSING: number;
            public static ARCHOS: number;
            public static ARP_DEVICES: number;
            public static ATHEROS_COMMUNICATIONS: number;
            public static ATMEL: number;
            public static AUSTCO_COMMUNICATION_SYSTEMS: number;
            public static AUTONET_MOBILE: number;
            public static AVAGO: number;
            public static AVM_BERLIN: number;
            public static A_AND_D_ENGINEERING: number;
            public static A_AND_R_CAMBRIDGE: number;
            public static BANDSPEED: number;
            public static BAND_XI_INTERNATIONAL: number;
            public static BDE_TECHNOLOGY: number;
            public static BEATS_ELECTRONICS: number;
            public static BEAUTIFUL_ENTERPRISE: number;
            public static BEKEY: number;
            public static BELKIN_INTERNATIONAL: number;
            public static BINAURIC: number;
            public static BIOSENTRONICS: number;
            public static BLUEGIGA: number;
            public static BLUERADIOS: number;
            public static BLUETOOTH_SIG: number;
            public static BLUETREK_TECHNOLOGIES: number;
            public static BOSE: number;
            public static BRIARTEK: number;
            public static BROADCOM: number;
            public static CAEN_RFID: number;
            public static CAMBRIDGE_SILICON_RADIO: number;
            public static CATC: number;
            public static CINETIX: number;
            public static CLARINOX_TECHNOLOGIES: number;
            public static COLORFY: number;
            public static COMMIL: number;
            public static CONEXANT_SYSTEMS: number;
            public static CONNECTBLUE: number;
            public static CONTINENTAL_AUTOMOTIVE: number;
            public static CONWISE_TECHNOLOGY: number;
            public static CREATIVE_TECHNOLOGY: number;
            public static C_TECHNOLOGIES: number;
            public static DANLERS: number;
            public static DELORME_PUBLISHING_COMPANY: number;
            public static DEXCOM: number;
            public static DIALOG_SEMICONDUCTOR: number;
            public static DIGIANSWER: number;
            public static ECLIPSE: number;
            public static ECOTEST: number;
            public static ELGATO_SYSTEMS: number;
            public static EM_MICROELECTRONIC_MARIN: number;
            public static EQUINOX_AG: number;
            public static ERICSSON_TECHNOLOGY: number;
            public static EVLUMA: number;
            public static FREE2MOVE: number;
            public static FUNAI_ELECTRIC: number;
            public static GARMIN_INTERNATIONAL: number;
            public static GCT_SEMICONDUCTOR: number;
            public static GELO: number;
            public static GENEQ: number;
            public static GENERAL_MOTORS: number;
            public static GENNUM: number;
            public static GEOFORCE: number;
            public static GIBSON_GUITARS: number;
            public static GN_NETCOM: number;
            public static GN_RESOUND: number;
            public static GOOGLE: number;
            public static GREEN_THROTTLE_GAMES: number;
            public static GROUP_SENSE: number;
            public static HANLYNN_TECHNOLOGIES: number;
            public static HARMAN_INTERNATIONAL: number;
            public static HEWLETT_PACKARD: number;
            public static HITACHI: number;
            public static HOSIDEN: number;
            public static IBM: number;
            public static INFINEON_TECHNOLOGIES: number;
            public static INGENIEUR_SYSTEMGRUPPE_ZAHN: number;
            public static INTEGRATED_SILICON_SOLUTION: number;
            public static INTEGRATED_SYSTEM_SOLUTION: number;
            public static INTEL: number;
            public static INVENTEL: number;
            public static IPEXTREME: number;
            public static I_TECH_DYNAMIC_GLOBAL_DISTRIBUTION: number;
            public static JAWBONE: number;
            public static JIANGSU_TOPPOWER_AUTOMOTIVE_ELECTRONICS: number;
            public static JOHNSON_CONTROLS: number;
            public static J_AND_M: number;
            public static KAWANTECH: number;
            public static KC_TECHNOLOGY: number;
            public static KENSINGTON_COMPUTER_PRODUCTS_GROUP: number;
            public static LAIRD_TECHNOLOGIES: number;
            public static LESSWIRE: number;
            public static LG_ELECTRONICS: number;
            public static LINAK: number;
            public static LUCENT: number;
            public static LUDUS_HELSINKI: number;
            public static MACRONIX: number;
            public static MAGNETI_MARELLI: number;
            public static MANSELLA: number;
            public static MARVELL: number;
            public static MATSUSHITA_ELECTRIC: number;
            public static MC10: number;
            public static MEDIATEK: number;
            public static MESO_INTERNATIONAL: number;
            public static META_WATCH: number;
            public static MEWTEL_TECHNOLOGY: number;
            public static MICOMMAND: number;
            public static MICROCHIP_TECHNOLOGY: number;
            public static MICROSOFT: number;
            public static MINDTREE: number;
            public static MISFIT_WEARABLES: number;
            public static MITEL_SEMICONDUCTOR: number;
            public static MITSUBISHI_ELECTRIC: number;
            public static MOBILIAN_CORPORATION: number;
            public static MONSTER: number;
            public static MOTOROLA: number;
            public static MSTAR_SEMICONDUCTOR: number;
            public static MUZIK: number;
            public static NEC: number;
            public static NEC_LIGHTING: number;
            public static NEWLOGIC: number;
            public static NIKE: number;
            public static NINE_SOLUTIONS: number;
            public static NOKIA_MOBILE_PHONES: number;
            public static NORDIC_SEMICONDUCTOR: number;
            public static NORWOOD_SYSTEMS: number;
            public static ODM_TECHNOLOGY: number;
            public static OMEGAWAVE: number;
            public static ONSET_COMPUTER: number;
            public static OPEN_INTERFACE: number;
            public static OTL_DYNAMICS: number;
            public static PANDA_OCEAN: number;
            public static PARROT: number;
            public static PARTHUS_TECHNOLOGIES: number;
            public static PASSIF_SEMICONDUCTOR: number;
            public static PETER_SYSTEMTECHNIK: number;
            public static PHILIPS_SEMICONDUCTORS: number;
            public static PLANTRONICS: number;
            public static POLAR_ELECTRO: number;
            public static POLAR_ELECTRO_EUROPE: number;
            public static PROCTER_AND_GAMBLE: number;
            public static QUALCOMM: number;
            public static QUALCOMM_CONNECTED_EXPERIENCES: number;
            public static QUALCOMM_INNOVATION_CENTER: number;
            public static QUALCOMM_LABS: number;
            public static QUALCOMM_TECHNOLOGIES: number;
            public static QUINTIC: number;
            public static QUUPPA: number;
            public static RALINK_TECHNOLOGY: number;
            public static RDA_MICROELECTRONICS: number;
            public static REALTEK_SEMICONDUCTOR: number;
            public static RED_M: number;
            public static RENESAS_TECHNOLOGY: number;
            public static RESEARCH_IN_MOTION: number;
            public static RF_MICRO_DEVICES: number;
            public static RIVIERAWAVES: number;
            public static ROHDE_AND_SCHWARZ: number;
            public static RTX_TELECOM: number;
            public static SAMSUNG_ELECTRONICS: number;
            public static SARIS_CYCLING_GROUP: number;
            public static SEERS_TECHNOLOGY: number;
            public static SEIKO_EPSON: number;
            public static SELFLY: number;
            public static SEMILINK: number;
            public static SENNHEISER_COMMUNICATIONS: number;
            public static SHANGHAI_SUPER_SMART_ELECTRONICS: number;
            public static SHENZHEN_EXCELSECU_DATA_TECHNOLOGY: number;
            public static SIGNIA_TECHNOLOGIES: number;
            public static SILICON_WAVE: number;
            public static SIRF_TECHNOLOGY: number;
            public static SOCKET_MOBILE: number;
            public static SONY_ERICSSON: number;
            public static SOUND_ID: number;
            public static SPORTS_TRACKING_TECHNOLOGIES: number;
            public static SR_MEDIZINELEKTRONIK: number;
            public static STACCATO_COMMUNICATIONS: number;
            public static STALMART_TECHNOLOGY: number;
            public static STARKEY_LABORATORIES: number;
            public static STOLLMAN_E_PLUS_V: number;
            public static STONESTREET_ONE: number;
            public static ST_MICROELECTRONICS: number;
            public static SUMMIT_DATA_COMMUNICATIONS: number;
            public static SUUNTO: number;
            public static SWIRL_NETWORKS: number;
            public static SYMBOL_TECHNOLOGIES: number;
            public static SYNOPSYS: number;
            public static SYSTEMS_AND_CHIPS: number;
            public static S_POWER_ELECTRONICS: number;
            public static TAIXINGBANG_TECHNOLOGY: number;
            public static TENOVIS: number;
            public static TERAX: number;
            public static TEXAS_INSTRUMENTS: number;
            public static THINKOPTICS: number;
            public static THREECOM: number;
            public static THREE_DIJOY: number;
            public static THREE_DSP: number;
            public static TIMEKEEPING_SYSTEMS: number;
            public static TIMEX_GROUP_USA: number;
            public static TOPCORN_POSITIONING_SYSTEMS: number;
            public static TOSHIBA: number;
            public static TRANSILICA: number;
            public static TRELAB: number;
            public static TTPCOM: number;
            public static TXTR: number;
            public static TZERO_TECHNOLOGIES: number;
            public static UNIVERSAL_ELECTRONICS: number;
            public static VERTU: number;
            public static VISTEON: number;
            public static VIZIO: number;
            public static VOYETRA_TURTLE_BEACH: number;
            public static WAVEPLUS_TECHNOLOGY: number;
            public static WICENTRIC: number;
            public static WIDCOMM: number;
            public static WUXI_VIMICRO: number;
            public static ZEEVO: number;
            public static ZER01_TV: number;
            public static ZOMM: number;
            public static ZSCAN_SOFTWARE: number;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module bluetooth {
        export class BluetoothClass extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public toString(): string;

            public hasService(param0: number): boolean;

            public equals(param0: javalangObject): boolean;

            public describeContents(): number;

            public getDeviceClass(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getMajorDeviceClass(): number;

            public hashCode(): number;
        }
        export module BluetoothClass {
            export class Device extends javalangObject {
                public static AUDIO_VIDEO_CAMCORDER: number;
                public static AUDIO_VIDEO_CAR_AUDIO: number;
                public static AUDIO_VIDEO_HANDSFREE: number;
                public static AUDIO_VIDEO_HEADPHONES: number;
                public static AUDIO_VIDEO_HIFI_AUDIO: number;
                public static AUDIO_VIDEO_LOUDSPEAKER: number;
                public static AUDIO_VIDEO_MICROPHONE: number;
                public static AUDIO_VIDEO_PORTABLE_AUDIO: number;
                public static AUDIO_VIDEO_SET_TOP_BOX: number;
                public static AUDIO_VIDEO_UNCATEGORIZED: number;
                public static AUDIO_VIDEO_VCR: number;
                public static AUDIO_VIDEO_VIDEO_CAMERA: number;
                public static AUDIO_VIDEO_VIDEO_CONFERENCING: number;
                public static AUDIO_VIDEO_VIDEO_DISPLAY_AND_LOUDSPEAKER: number;
                public static AUDIO_VIDEO_VIDEO_GAMING_TOY: number;
                public static AUDIO_VIDEO_VIDEO_MONITOR: number;
                public static AUDIO_VIDEO_WEARABLE_HEADSET: number;
                public static COMPUTER_DESKTOP: number;
                public static COMPUTER_HANDHELD_PC_PDA: number;
                public static COMPUTER_LAPTOP: number;
                public static COMPUTER_PALM_SIZE_PC_PDA: number;
                public static COMPUTER_SERVER: number;
                public static COMPUTER_UNCATEGORIZED: number;
                public static COMPUTER_WEARABLE: number;
                public static HEALTH_BLOOD_PRESSURE: number;
                public static HEALTH_DATA_DISPLAY: number;
                public static HEALTH_GLUCOSE: number;
                public static HEALTH_PULSE_OXIMETER: number;
                public static HEALTH_PULSE_RATE: number;
                public static HEALTH_THERMOMETER: number;
                public static HEALTH_UNCATEGORIZED: number;
                public static HEALTH_WEIGHING: number;
                public static PHONE_CELLULAR: number;
                public static PHONE_CORDLESS: number;
                public static PHONE_ISDN: number;
                public static PHONE_MODEM_OR_GATEWAY: number;
                public static PHONE_SMART: number;
                public static PHONE_UNCATEGORIZED: number;
                public static TOY_CONTROLLER: number;
                public static TOY_DOLL_ACTION_FIGURE: number;
                public static TOY_GAME: number;
                public static TOY_ROBOT: number;
                public static TOY_UNCATEGORIZED: number;
                public static TOY_VEHICLE: number;
                public static WEARABLE_GLASSES: number;
                public static WEARABLE_HELMET: number;
                public static WEARABLE_JACKET: number;
                public static WEARABLE_PAGER: number;
                public static WEARABLE_UNCATEGORIZED: number;
                public static WEARABLE_WRIST_WATCH: number;

                public constructor();
            }
            export module Device {
                export class Major extends javalangObject {
                    public static AUDIO_VIDEO: number;
                    public static COMPUTER: number;
                    public static HEALTH: number;
                    public static IMAGING: number;
                    public static MISC: number;
                    public static NETWORKING: number;
                    public static PERIPHERAL: number;
                    public static PHONE: number;
                    public static TOY: number;
                    public static UNCATEGORIZED: number;
                    public static WEARABLE: number;

                    public constructor();
                }
            }
            export class Service extends javalangObject {
                public static AUDIO: number;
                public static CAPTURE: number;
                public static INFORMATION: number;
                public static LIMITED_DISCOVERABILITY: number;
                public static NETWORKING: number;
                public static OBJECT_TRANSFER: number;
                public static POSITIONING: number;
                public static RENDER: number;
                public static TELEPHONY: number;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.bluetooth.BluetoothClass.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGatt.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattCallback.d.ts" />
/// <reference path="./android.bluetooth.BluetoothSocket.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.ParcelUuid.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />
declare module android {
    export module bluetooth {
        export class BluetoothDevice extends javalangObject implements android.os.Parcelable {
            public static ACTION_ACL_CONNECTED: string;
            public static ACTION_ACL_DISCONNECTED: string;
            public static ACTION_ACL_DISCONNECT_REQUESTED: string;
            public static ACTION_BOND_STATE_CHANGED: string;
            public static ACTION_CLASS_CHANGED: string;
            public static ACTION_FOUND: string;
            public static ACTION_NAME_CHANGED: string;
            public static ACTION_PAIRING_REQUEST: string;
            public static ACTION_UUID: string;
            public static BOND_BONDED: number;
            public static BOND_BONDING: number;
            public static BOND_NONE: number;
            public static CREATOR: android.os.Parcelable.Creator;
            public static DEVICE_TYPE_CLASSIC: number;
            public static DEVICE_TYPE_DUAL: number;
            public static DEVICE_TYPE_LE: number;
            public static DEVICE_TYPE_UNKNOWN: number;
            public static ERROR: number;
            public static EXTRA_BOND_STATE: string;
            public static EXTRA_CLASS: string;
            public static EXTRA_DEVICE: string;
            public static EXTRA_NAME: string;
            public static EXTRA_PAIRING_KEY: string;
            public static EXTRA_PAIRING_VARIANT: string;
            public static EXTRA_PREVIOUS_BOND_STATE: string;
            public static EXTRA_RSSI: string;
            public static EXTRA_UUID: string;
            public static PAIRING_VARIANT_PASSKEY_CONFIRMATION: number;
            public static PAIRING_VARIANT_PIN: number;
            public static TRANSPORT_AUTO: number;
            public static TRANSPORT_BREDR: number;
            public static TRANSPORT_LE: number;

            public getType(): number;

            public fetchUuidsWithSdp(): boolean;

            public setPin(param0: native.Array<number>): boolean;

            public createRfcommSocketToServiceRecord(param0: javautilUUID): android.bluetooth.BluetoothSocket;

            public equals(param0: javalangObject): boolean;

            public connectGatt(param0: android.content.Context, param1: boolean, param2: android.bluetooth.BluetoothGattCallback, param3: number): android.bluetooth.BluetoothGatt;

            public createInsecureRfcommSocketToServiceRecord(param0: javautilUUID): android.bluetooth.BluetoothSocket;

            public getAddress(): string;

            public connectGatt(param0: android.content.Context, param1: boolean, param2: android.bluetooth.BluetoothGattCallback): android.bluetooth.BluetoothGatt;

            public getBondState(): number;

            public getUuids(): native.Array<android.os.ParcelUuid>;

            public toString(): string;

            public getName(): string;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public createBond(): boolean;

            public getBluetoothClass(): android.bluetooth.BluetoothClass;

            public setPairingConfirmation(param0: boolean): boolean;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.bluetooth.BluetoothDevice.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattCharacteristic.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattDescriptor.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattService.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />
declare module android {
    export module bluetooth {
        export class BluetoothGatt extends javalangObject implements android.bluetooth.BluetoothProfile {
            public static CONNECTION_PRIORITY_BALANCED: number;
            public static CONNECTION_PRIORITY_HIGH: number;
            public static CONNECTION_PRIORITY_LOW_POWER: number;
            public static GATT_CONNECTION_CONGESTED: number;
            public static GATT_FAILURE: number;
            public static GATT_INSUFFICIENT_AUTHENTICATION: number;
            public static GATT_INSUFFICIENT_ENCRYPTION: number;
            public static GATT_INVALID_ATTRIBUTE_LENGTH: number;
            public static GATT_INVALID_OFFSET: number;
            public static GATT_READ_NOT_PERMITTED: number;
            public static GATT_REQUEST_NOT_SUPPORTED: number;
            public static GATT_SUCCESS: number;
            public static GATT_WRITE_NOT_PERMITTED: number;

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

            public getConnectedDevices(): javautilList;

            public connect(): boolean;

            public getDevicesMatchingConnectionStates(param0: native.Array<number>): javautilList;

            public executeReliableWrite(): boolean;

            public setCharacteristicNotification(param0: android.bluetooth.BluetoothGattCharacteristic, param1: boolean): boolean;

            public getServices(): javautilList;

            public readRemoteRssi(): boolean;

            public getService(param0: javautilUUID): android.bluetooth.BluetoothGattService;

            public beginReliableWrite(): boolean;

            public writeDescriptor(param0: android.bluetooth.BluetoothGattDescriptor): boolean;

            public readCharacteristic(param0: android.bluetooth.BluetoothGattCharacteristic): boolean;

            public requestConnectionPriority(param0: number): boolean;

            public getConnectionState(param0: android.bluetooth.BluetoothDevice): number;

            public getDevice(): android.bluetooth.BluetoothDevice;

            public readDescriptor(param0: android.bluetooth.BluetoothGattDescriptor): boolean;

            public close(): void;

            public abortReliableWrite(): void;
            public abortReliableWrite(param0: android.bluetooth.BluetoothDevice): void;

            public writeCharacteristic(param0: android.bluetooth.BluetoothGattCharacteristic): boolean;

            public disconnect(): void;

            public discoverServices(): boolean;

            public requestMtu(param0: number): boolean;
        }
    }
}

/// <reference path="./android.bluetooth.BluetoothGatt.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattCharacteristic.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattDescriptor.d.ts" />
declare module android {
    export module bluetooth {
        export abstract class BluetoothGattCallback extends javalangObject {
            public onDescriptorRead(param0: android.bluetooth.BluetoothGatt, param1: android.bluetooth.BluetoothGattDescriptor, param2: number): void;

            public onConnectionStateChange(param0: android.bluetooth.BluetoothGatt, param1: number, param2: number): void;

            public onServicesDiscovered(param0: android.bluetooth.BluetoothGatt, param1: number): void;

            public onReliableWriteCompleted(param0: android.bluetooth.BluetoothGatt, param1: number): void;

            public onCharacteristicWrite(param0: android.bluetooth.BluetoothGatt, param1: android.bluetooth.BluetoothGattCharacteristic, param2: number): void;

            public constructor();

            public onDescriptorWrite(param0: android.bluetooth.BluetoothGatt, param1: android.bluetooth.BluetoothGattDescriptor, param2: number): void;

            public onReadRemoteRssi(param0: android.bluetooth.BluetoothGatt, param1: number, param2: number): void;

            public onMtuChanged(param0: android.bluetooth.BluetoothGatt, param1: number, param2: number): void;

            public onCharacteristicRead(param0: android.bluetooth.BluetoothGatt, param1: android.bluetooth.BluetoothGattCharacteristic, param2: number): void;

            public onCharacteristicChanged(param0: android.bluetooth.BluetoothGatt, param1: android.bluetooth.BluetoothGattCharacteristic): void;
        }
    }
}

/// <reference path="./android.bluetooth.BluetoothGattDescriptor.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattService.d.ts" />
/// <reference path="./java.lang.Float.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />
declare module android {
    export module bluetooth {
        export class BluetoothGattCharacteristic extends javalangObject {
            public static FORMAT_FLOAT: number;
            public static FORMAT_SFLOAT: number;
            public static FORMAT_SINT16: number;
            public static FORMAT_SINT32: number;
            public static FORMAT_SINT8: number;
            public static FORMAT_UINT16: number;
            public static FORMAT_UINT32: number;
            public static FORMAT_UINT8: number;
            public static PERMISSION_READ: number;
            public static PERMISSION_READ_ENCRYPTED: number;
            public static PERMISSION_READ_ENCRYPTED_MITM: number;
            public static PERMISSION_WRITE: number;
            public static PERMISSION_WRITE_ENCRYPTED: number;
            public static PERMISSION_WRITE_ENCRYPTED_MITM: number;
            public static PERMISSION_WRITE_SIGNED: number;
            public static PERMISSION_WRITE_SIGNED_MITM: number;
            public static PROPERTY_BROADCAST: number;
            public static PROPERTY_EXTENDED_PROPS: number;
            public static PROPERTY_INDICATE: number;
            public static PROPERTY_NOTIFY: number;
            public static PROPERTY_READ: number;
            public static PROPERTY_SIGNED_WRITE: number;
            public static PROPERTY_WRITE: number;
            public static PROPERTY_WRITE_NO_RESPONSE: number;
            public static WRITE_TYPE_DEFAULT: number;
            public static WRITE_TYPE_NO_RESPONSE: number;
            public static WRITE_TYPE_SIGNED: number;
            public mDescriptors: javautilList;

            public setValue(param0: string): boolean;

            public getIntValue(param0: number, param1: number): javalangInteger;

            public getStringValue(param0: number): string;

            public addDescriptor(param0: android.bluetooth.BluetoothGattDescriptor): boolean;

            public getValue(): native.Array<number>;

            public setValue(param0: number, param1: number, param2: number): boolean;

            public getDescriptor(param0: javautilUUID): android.bluetooth.BluetoothGattDescriptor;

            public constructor(param0: javautilUUID, param1: number, param2: number);

            public getDescriptors(): javautilList;

            public getService(): android.bluetooth.BluetoothGattService;

            public getProperties(): number;

            public getPermissions(): number;

            public getFloatValue(param0: number, param1: number): javalangFloat;

            public getInstanceId(): number;

            public setValue(param0: number, param1: number, param2: number, param3: number): boolean;
            public setValue(param0: native.Array<number>): boolean;

            public getUuid(): javautilUUID;

            public getWriteType(): number;

            public setWriteType(param0: number): void;
        }
    }
}

/// <reference path="./android.bluetooth.BluetoothGattCharacteristic.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />
declare module android {
    export module bluetooth {
        export class BluetoothGattDescriptor extends javalangObject {
            public static DISABLE_NOTIFICATION_VALUE: native.Array<number>;
            public static ENABLE_INDICATION_VALUE: native.Array<number>;
            public static ENABLE_NOTIFICATION_VALUE: native.Array<number>;
            public static PERMISSION_READ: number;
            public static PERMISSION_READ_ENCRYPTED: number;
            public static PERMISSION_READ_ENCRYPTED_MITM: number;
            public static PERMISSION_WRITE: number;
            public static PERMISSION_WRITE_ENCRYPTED: number;
            public static PERMISSION_WRITE_ENCRYPTED_MITM: number;
            public static PERMISSION_WRITE_SIGNED: number;
            public static PERMISSION_WRITE_SIGNED_MITM: number;

            public constructor(param0: javautilUUID, param1: number);

            public getPermissions(): number;

            public getCharacteristic(): android.bluetooth.BluetoothGattCharacteristic;

            public getValue(): native.Array<number>;

            public setValue(param0: native.Array<number>): boolean;

            public getUuid(): javautilUUID;
        }
    }
}

/// <reference path="./android.bluetooth.BluetoothDevice.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattCharacteristic.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattService.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />
declare module android {
    export module bluetooth {
        export class BluetoothGattServer extends javalangObject implements android.bluetooth.BluetoothProfile {
            public getConnectedDevices(): javautilList;

            public getDevicesMatchingConnectionStates(param0: native.Array<number>): javautilList;

            public cancelConnection(param0: android.bluetooth.BluetoothDevice): void;

            public removeService(param0: android.bluetooth.BluetoothGattService): boolean;

            public clearServices(): void;

            public getServices(): javautilList;

            public sendResponse(param0: android.bluetooth.BluetoothDevice, param1: number, param2: number, param3: number, param4: native.Array<number>): boolean;

            public getService(param0: javautilUUID): android.bluetooth.BluetoothGattService;

            public notifyCharacteristicChanged(param0: android.bluetooth.BluetoothDevice, param1: android.bluetooth.BluetoothGattCharacteristic, param2: boolean): boolean;

            public addService(param0: android.bluetooth.BluetoothGattService): boolean;

            public getConnectionState(param0: android.bluetooth.BluetoothDevice): number;

            public connect(param0: android.bluetooth.BluetoothDevice, param1: boolean): boolean;

            public close(): void;
        }
    }
}

/// <reference path="./android.bluetooth.BluetoothDevice.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattCharacteristic.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattDescriptor.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattService.d.ts" />
declare module android {
    export module bluetooth {
        export abstract class BluetoothGattServerCallback extends javalangObject {
            public onCharacteristicReadRequest(param0: android.bluetooth.BluetoothDevice, param1: number, param2: number, param3: android.bluetooth.BluetoothGattCharacteristic): void;

            public onCharacteristicWriteRequest(param0: android.bluetooth.BluetoothDevice, param1: number, param2: android.bluetooth.BluetoothGattCharacteristic, param3: boolean, param4: boolean, param5: number, param6: native.Array<number>): void;

            public onDescriptorWriteRequest(param0: android.bluetooth.BluetoothDevice, param1: number, param2: android.bluetooth.BluetoothGattDescriptor, param3: boolean, param4: boolean, param5: number, param6: native.Array<number>): void;

            public onMtuChanged(param0: android.bluetooth.BluetoothDevice, param1: number): void;

            public onServiceAdded(param0: number, param1: android.bluetooth.BluetoothGattService): void;

            public constructor();

            public onNotificationSent(param0: android.bluetooth.BluetoothDevice, param1: number): void;

            public onExecuteWrite(param0: android.bluetooth.BluetoothDevice, param1: number, param2: boolean): void;

            public onConnectionStateChange(param0: android.bluetooth.BluetoothDevice, param1: number, param2: number): void;

            public onDescriptorReadRequest(param0: android.bluetooth.BluetoothDevice, param1: number, param2: number, param3: android.bluetooth.BluetoothGattDescriptor): void;
        }
    }
}

/// <reference path="./android.bluetooth.BluetoothGattCharacteristic.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />
declare module android {
    export module bluetooth {
        export class BluetoothGattService extends javalangObject {
            public static SERVICE_TYPE_PRIMARY: number;
            public static SERVICE_TYPE_SECONDARY: number;
            public mCharacteristics: javautilList;
            public mIncludedServices: javautilList;

            public constructor(param0: javautilUUID, param1: number);

            public getType(): number;

            public getIncludedServices(): javautilList;

            public addService(param0: android.bluetooth.BluetoothGattService): boolean;

            public getInstanceId(): number;

            public getCharacteristic(param0: javautilUUID): android.bluetooth.BluetoothGattCharacteristic;

            public getCharacteristics(): javautilList;

            public addCharacteristic(param0: android.bluetooth.BluetoothGattCharacteristic): boolean;

            public getUuid(): javautilUUID;
        }
    }
}

/// <reference path="./android.bluetooth.BluetoothDevice.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module bluetooth {
        export class BluetoothHeadset extends javalangObject implements android.bluetooth.BluetoothProfile {
            public static ACTION_AUDIO_STATE_CHANGED: string;
            public static ACTION_CONNECTION_STATE_CHANGED: string;
            public static ACTION_VENDOR_SPECIFIC_HEADSET_EVENT: string;
            public static AT_CMD_TYPE_ACTION: number;
            public static AT_CMD_TYPE_BASIC: number;
            public static AT_CMD_TYPE_READ: number;
            public static AT_CMD_TYPE_SET: number;
            public static AT_CMD_TYPE_TEST: number;
            public static EXTRA_VENDOR_SPECIFIC_HEADSET_EVENT_ARGS: string;
            public static EXTRA_VENDOR_SPECIFIC_HEADSET_EVENT_CMD: string;
            public static EXTRA_VENDOR_SPECIFIC_HEADSET_EVENT_CMD_TYPE: string;
            public static STATE_AUDIO_CONNECTED: number;
            public static STATE_AUDIO_CONNECTING: number;
            public static STATE_AUDIO_DISCONNECTED: number;
            public static VENDOR_RESULT_CODE_COMMAND_ANDROID: string;
            public static VENDOR_SPECIFIC_HEADSET_EVENT_COMPANY_ID_CATEGORY: string;

            public getConnectedDevices(): javautilList;

            public getDevicesMatchingConnectionStates(param0: native.Array<number>): javautilList;

            public isAudioConnected(param0: android.bluetooth.BluetoothDevice): boolean;

            public getConnectionState(param0: android.bluetooth.BluetoothDevice): number;

            public stopVoiceRecognition(param0: android.bluetooth.BluetoothDevice): boolean;

            public sendVendorSpecificResultCode(param0: android.bluetooth.BluetoothDevice, param1: string, param2: string): boolean;

            public startVoiceRecognition(param0: android.bluetooth.BluetoothDevice): boolean;
        }
    }
}

/// <reference path="./android.bluetooth.BluetoothDevice.d.ts" />
/// <reference path="./android.bluetooth.BluetoothHealthAppConfiguration.d.ts" />
/// <reference path="./android.bluetooth.BluetoothHealthCallback.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module bluetooth {
        export class BluetoothHealth extends javalangObject implements android.bluetooth.BluetoothProfile {
            public static APP_CONFIG_REGISTRATION_FAILURE: number;
            public static APP_CONFIG_REGISTRATION_SUCCESS: number;
            public static APP_CONFIG_UNREGISTRATION_FAILURE: number;
            public static APP_CONFIG_UNREGISTRATION_SUCCESS: number;
            public static CHANNEL_TYPE_RELIABLE: number;
            public static CHANNEL_TYPE_STREAMING: number;
            public static SINK_ROLE: number;
            public static SOURCE_ROLE: number;
            public static STATE_CHANNEL_CONNECTED: number;
            public static STATE_CHANNEL_CONNECTING: number;
            public static STATE_CHANNEL_DISCONNECTED: number;
            public static STATE_CHANNEL_DISCONNECTING: number;

            public connectChannelToSource(param0: android.bluetooth.BluetoothDevice, param1: android.bluetooth.BluetoothHealthAppConfiguration): boolean;

            public getConnectedDevices(): javautilList;

            public unregisterAppConfiguration(param0: android.bluetooth.BluetoothHealthAppConfiguration): boolean;

            public getDevicesMatchingConnectionStates(param0: native.Array<number>): javautilList;

            public getConnectionState(param0: android.bluetooth.BluetoothDevice): number;

            public getMainChannelFd(param0: android.bluetooth.BluetoothDevice, param1: android.bluetooth.BluetoothHealthAppConfiguration): android.os.ParcelFileDescriptor;

            public disconnectChannel(param0: android.bluetooth.BluetoothDevice, param1: android.bluetooth.BluetoothHealthAppConfiguration, param2: number): boolean;

            public registerSinkAppConfiguration(param0: string, param1: number, param2: android.bluetooth.BluetoothHealthCallback): boolean;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module bluetooth {
        export class BluetoothHealthAppConfiguration extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public toString(): string;

            public getDataType(): number;

            public getName(): string;

            public equals(param0: javalangObject): boolean;

            public getRole(): number;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.bluetooth.BluetoothDevice.d.ts" />
/// <reference path="./android.bluetooth.BluetoothHealthAppConfiguration.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
declare module android {
    export module bluetooth {
        export abstract class BluetoothHealthCallback extends javalangObject {
            public onHealthChannelStateChange(param0: android.bluetooth.BluetoothHealthAppConfiguration, param1: android.bluetooth.BluetoothDevice, param2: number, param3: number, param4: android.os.ParcelFileDescriptor, param5: number): void;

            public constructor();

            public onHealthAppConfigurationStatusChange(param0: android.bluetooth.BluetoothHealthAppConfiguration, param1: number): void;
        }
    }
}

/// <reference path="./android.bluetooth.BluetoothAdapter.d.ts" />
/// <reference path="./android.bluetooth.BluetoothDevice.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattServer.d.ts" />
/// <reference path="./android.bluetooth.BluetoothGattServerCallback.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module bluetooth {
        export class BluetoothManager extends javalangObject {
            public getConnectedDevices(param0: number): javautilList;

            public getDevicesMatchingConnectionStates(param0: number, param1: native.Array<number>): javautilList;

            public getAdapter(): android.bluetooth.BluetoothAdapter;

            public openGattServer(param0: android.content.Context, param1: android.bluetooth.BluetoothGattServerCallback): android.bluetooth.BluetoothGattServer;

            public getConnectionState(param0: android.bluetooth.BluetoothDevice, param1: number): number;
        }
    }
}

/// <reference path="./android.bluetooth.BluetoothDevice.d.ts" />
/// <reference path="./android.bluetooth.BluetoothProfile.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module bluetooth {
        export class BluetoothProfile extends javalangObject {
            /**
             * Constructs a new instance of the android.bluetooth.BluetoothProfile interface with the provided implementation.
             */
            public constructor(implementation: {
                getConnectedDevices(): javautilList;
                getDevicesMatchingConnectionStates(param0: native.Array<number>): javautilList;
                getConnectionState(param0: android.bluetooth.BluetoothDevice): number;
            });

            public static STATE_DISCONNECTED: number;
            public static EXTRA_STATE: string;
            public static GATT: number;
            public static HEALTH: number;
            public static STATE_DISCONNECTING: number;
            public static HEADSET: number;
            public static STATE_CONNECTING: number;
            public static A2DP: number;
            public static SAP: number;
            public static STATE_CONNECTED: number;
            public static EXTRA_PREVIOUS_STATE: string;
            public static GATT_SERVER: number;

            public getConnectedDevices(): javautilList;

            public getDevicesMatchingConnectionStates(param0: native.Array<number>): javautilList;

            public getConnectionState(param0: android.bluetooth.BluetoothDevice): number;
        }
        export module BluetoothProfile {
            export class ServiceListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.bluetooth.BluetoothProfile$ServiceListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onServiceConnected(param0: number, param1: android.bluetooth.BluetoothProfile): void;
                    onServiceDisconnected(param0: number): void;
                });

                public onServiceConnected(param0: number, param1: android.bluetooth.BluetoothProfile): void;

                public onServiceDisconnected(param0: number): void;
            }
        }
    }
}

import javaioCloseable = java.io.Closeable;
/// <reference path="./android.bluetooth.BluetoothSocket.d.ts" />
declare module android {
    export module bluetooth {
        export class BluetoothServerSocket extends javalangObject implements javaioCloseable {
            public toString(): string;

            public accept(): android.bluetooth.BluetoothSocket;

            public close(): void;

            public accept(param0: number): android.bluetooth.BluetoothSocket;
        }
    }
}

import javaioOutputStream = java.io.OutputStream;
/// <reference path="./android.bluetooth.BluetoothDevice.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
declare module android {
    export module bluetooth {
        export class BluetoothSocket extends javalangObject implements javaioCloseable {
            public static TYPE_L2CAP: number;
            public static TYPE_RFCOMM: number;
            public static TYPE_SCO: number;

            public getMaxReceivePacketSize(): number;

            public isConnected(): boolean;

            public getOutputStream(): javaioOutputStream;

            public connect(): void;

            public close(): void;

            public getInputStream(): javaioInputStream;

            public getConnectionType(): number;

            public getRemoteDevice(): android.bluetooth.BluetoothDevice;

            public getMaxTransmitPacketSize(): number;
        }
    }
}

/// <reference path="./android.bluetooth.le.AdvertiseSettings.d.ts" />
declare module android {
    export module bluetooth {
        export module le {
            export abstract class AdvertiseCallback extends javalangObject {
                public static ADVERTISE_FAILED_ALREADY_STARTED: number;
                public static ADVERTISE_FAILED_DATA_TOO_LARGE: number;
                public static ADVERTISE_FAILED_FEATURE_UNSUPPORTED: number;
                public static ADVERTISE_FAILED_INTERNAL_ERROR: number;
                public static ADVERTISE_FAILED_TOO_MANY_ADVERTISERS: number;

                public onStartFailure(param0: number): void;

                public onStartSuccess(param0: android.bluetooth.le.AdvertiseSettings): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.bluetooth.le.AdvertiseData.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.ParcelUuid.d.ts" />
/// <reference path="./android.util.SparseArray.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module android {
    export module bluetooth {
        export module le {
            export class AdvertiseData extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getServiceData(): javautilMap;

                public describeContents(): number;

                public getIncludeDeviceName(): boolean;

                public getIncludeTxPowerLevel(): boolean;

                public toString(): string;

                public getServiceUuids(): javautilList;

                public getManufacturerSpecificData(): android.util.SparseArray;
            }
            export module AdvertiseData {
                export class Builder extends javalangObject {
                    public constructor();

                    public setIncludeDeviceName(param0: boolean): android.bluetooth.le.AdvertiseData.Builder;

                    public addServiceData(param0: android.os.ParcelUuid, param1: native.Array<number>): android.bluetooth.le.AdvertiseData.Builder;

                    public addServiceUuid(param0: android.os.ParcelUuid): android.bluetooth.le.AdvertiseData.Builder;

                    public addManufacturerData(param0: number, param1: native.Array<number>): android.bluetooth.le.AdvertiseData.Builder;

                    public build(): android.bluetooth.le.AdvertiseData;

                    public setIncludeTxPowerLevel(param0: boolean): android.bluetooth.le.AdvertiseData.Builder;
                }
            }
        }
    }
}

/// <reference path="./android.bluetooth.le.AdvertiseSettings.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module bluetooth {
        export module le {
            export class AdvertiseSettings extends javalangObject implements android.os.Parcelable {
                public static ADVERTISE_MODE_BALANCED: number;
                public static ADVERTISE_MODE_LOW_LATENCY: number;
                public static ADVERTISE_MODE_LOW_POWER: number;
                public static ADVERTISE_TX_POWER_HIGH: number;
                public static ADVERTISE_TX_POWER_LOW: number;
                public static ADVERTISE_TX_POWER_MEDIUM: number;
                public static ADVERTISE_TX_POWER_ULTRA_LOW: number;
                public static CREATOR: android.os.Parcelable.Creator;

                public getMode(): number;

                public getTxPowerLevel(): number;

                public isConnectable(): boolean;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public getTimeout(): number;

                public toString(): string;
            }
            export module AdvertiseSettings {
                export class Builder extends javalangObject {
                    public setTimeout(param0: number): android.bluetooth.le.AdvertiseSettings.Builder;

                    public setAdvertiseMode(param0: number): android.bluetooth.le.AdvertiseSettings.Builder;

                    public constructor();

                    public build(): android.bluetooth.le.AdvertiseSettings;

                    public setConnectable(param0: boolean): android.bluetooth.le.AdvertiseSettings.Builder;

                    public setTxPowerLevel(param0: number): android.bluetooth.le.AdvertiseSettings.Builder;
                }
            }
        }
    }
}

/// <reference path="./android.bluetooth.le.AdvertiseCallback.d.ts" />
/// <reference path="./android.bluetooth.le.AdvertiseData.d.ts" />
/// <reference path="./android.bluetooth.le.AdvertiseSettings.d.ts" />
declare module android {
    export module bluetooth {
        export module le {
            export class BluetoothLeAdvertiser extends javalangObject {
                public stopAdvertising(param0: android.bluetooth.le.AdvertiseCallback): void;

                public startAdvertising(param0: android.bluetooth.le.AdvertiseSettings, param1: android.bluetooth.le.AdvertiseData, param2: android.bluetooth.le.AdvertiseCallback): void;
                public startAdvertising(param0: android.bluetooth.le.AdvertiseSettings, param1: android.bluetooth.le.AdvertiseData, param2: android.bluetooth.le.AdvertiseData, param3: android.bluetooth.le.AdvertiseCallback): void;
            }
        }
    }
}

/// <reference path="./android.bluetooth.le.ScanCallback.d.ts" />
/// <reference path="./android.bluetooth.le.ScanSettings.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module bluetooth {
        export module le {
            export class BluetoothLeScanner extends javalangObject {
                public startScan(param0: javautilList, param1: android.bluetooth.le.ScanSettings, param2: android.bluetooth.le.ScanCallback): void;

                public stopScan(param0: android.bluetooth.le.ScanCallback): void;

                public flushPendingScanResults(param0: android.bluetooth.le.ScanCallback): void;

                public startScan(param0: android.bluetooth.le.ScanCallback): void;
            }
        }
    }
}

/// <reference path="./android.bluetooth.le.ScanResult.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module bluetooth {
        export module le {
            export abstract class ScanCallback extends javalangObject {
                public static SCAN_FAILED_ALREADY_STARTED: number;
                public static SCAN_FAILED_APPLICATION_REGISTRATION_FAILED: number;
                public static SCAN_FAILED_FEATURE_UNSUPPORTED: number;
                public static SCAN_FAILED_INTERNAL_ERROR: number;

                public onBatchScanResults(param0: javautilList): void;

                public onScanFailed(param0: number): void;

                public constructor();

                public onScanResult(param0: number, param1: android.bluetooth.le.ScanResult): void;
            }
        }
    }
}

/// <reference path="./android.bluetooth.le.ScanFilter.d.ts" />
/// <reference path="./android.bluetooth.le.ScanResult.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.ParcelUuid.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module bluetooth {
        export module le {
            export class ScanFilter extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public getServiceDataUuid(): android.os.ParcelUuid;

                public getDeviceName(): string;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getServiceDataMask(): native.Array<number>;

                public getManufacturerId(): number;

                public matches(param0: android.bluetooth.le.ScanResult): boolean;

                public getDeviceAddress(): string;

                public getServiceData(): native.Array<number>;

                public getServiceUuid(): android.os.ParcelUuid;

                public toString(): string;

                public getManufacturerDataMask(): native.Array<number>;

                public equals(param0: javalangObject): boolean;

                public hashCode(): number;

                public getManufacturerData(): native.Array<number>;

                public describeContents(): number;

                public getServiceUuidMask(): android.os.ParcelUuid;
            }
            export module ScanFilter {
                export class Builder extends javalangObject {
                    public setDeviceName(param0: string): android.bluetooth.le.ScanFilter.Builder;

                    public constructor();

                    public build(): android.bluetooth.le.ScanFilter;

                    public setDeviceAddress(param0: string): android.bluetooth.le.ScanFilter.Builder;

                    public setServiceUuid(param0: android.os.ParcelUuid): android.bluetooth.le.ScanFilter.Builder;

                    public setManufacturerData(param0: number, param1: native.Array<number>): android.bluetooth.le.ScanFilter.Builder;

                    public setServiceData(param0: android.os.ParcelUuid, param1: native.Array<number>): android.bluetooth.le.ScanFilter.Builder;
                    public setServiceData(param0: android.os.ParcelUuid, param1: native.Array<number>, param2: native.Array<number>): android.bluetooth.le.ScanFilter.Builder;

                    public setServiceUuid(param0: android.os.ParcelUuid, param1: android.os.ParcelUuid): android.bluetooth.le.ScanFilter.Builder;

                    public setManufacturerData(param0: number, param1: native.Array<number>, param2: native.Array<number>): android.bluetooth.le.ScanFilter.Builder;
                }
            }
        }
    }
}

/// <reference path="./android.os.ParcelUuid.d.ts" />
/// <reference path="./android.util.SparseArray.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module android {
    export module bluetooth {
        export module le {
            export class ScanRecord extends javalangObject {
                public getTxPowerLevel(): number;

                public getDeviceName(): string;

                public getAdvertiseFlags(): number;

                public getServiceData(): javautilMap;
                public getServiceData(param0: android.os.ParcelUuid): native.Array<number>;

                public getManufacturerSpecificData(param0: number): native.Array<number>;

                public toString(): string;

                public getServiceUuids(): javautilList;

                public getManufacturerSpecificData(): android.util.SparseArray;

                public getBytes(): native.Array<number>;
            }
        }
    }
}

/// <reference path="./android.bluetooth.BluetoothDevice.d.ts" />
/// <reference path="./android.bluetooth.le.ScanRecord.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module bluetooth {
        export module le {
            export class ScanResult extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public getTimestampNanos(): number;

                public equals(param0: javalangObject): boolean;

                public constructor(param0: android.bluetooth.BluetoothDevice, param1: android.bluetooth.le.ScanRecord, param2: number, param3: number);

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getScanRecord(): android.bluetooth.le.ScanRecord;

                public hashCode(): number;

                public describeContents(): number;

                public getRssi(): number;

                public getDevice(): android.bluetooth.BluetoothDevice;

                public toString(): string;
            }
        }
    }
}

/// <reference path="./android.bluetooth.le.ScanSettings.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module bluetooth {
        export module le {
            export class ScanSettings extends javalangObject implements android.os.Parcelable {
                public static CALLBACK_TYPE_ALL_MATCHES: number;
                public static CALLBACK_TYPE_FIRST_MATCH: number;
                public static CALLBACK_TYPE_MATCH_LOST: number;
                public static CREATOR: android.os.Parcelable.Creator;
                public static MATCH_MODE_AGGRESSIVE: number;
                public static MATCH_MODE_STICKY: number;
                public static MATCH_NUM_FEW_ADVERTISEMENT: number;
                public static MATCH_NUM_MAX_ADVERTISEMENT: number;
                public static MATCH_NUM_ONE_ADVERTISEMENT: number;
                public static SCAN_MODE_BALANCED: number;
                public static SCAN_MODE_LOW_LATENCY: number;
                public static SCAN_MODE_LOW_POWER: number;
                public static SCAN_MODE_OPPORTUNISTIC: number;

                public getReportDelayMillis(): number;

                public getScanMode(): number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getScanResultType(): number;

                public describeContents(): number;

                public getCallbackType(): number;
            }
            export module ScanSettings {
                export class Builder extends javalangObject {
                    public setMatchMode(param0: number): android.bluetooth.le.ScanSettings.Builder;

                    public constructor();

                    public setReportDelay(param0: number): android.bluetooth.le.ScanSettings.Builder;

                    public build(): android.bluetooth.le.ScanSettings;

                    public setCallbackType(param0: number): android.bluetooth.le.ScanSettings.Builder;

                    public setScanMode(param0: number): android.bluetooth.le.ScanSettings.Builder;

                    public setNumOfMatches(param0: number): android.bluetooth.le.ScanSettings.Builder;
                }
            }
        }
    }
}
