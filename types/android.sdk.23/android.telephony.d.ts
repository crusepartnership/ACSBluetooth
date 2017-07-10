
/// <reference path="./android.os.PersistableBundle.d.ts" />
declare module android {
    export module telephony {
        export class CarrierConfigManager extends javalangObject {
            public static ACTION_CARRIER_CONFIG_CHANGED: string;
            public static KEY_ADDITIONAL_CALL_SETTING_BOOL: string;
            public static KEY_ALLOW_EMERGENCY_NUMBERS_IN_CALL_LOG_BOOL: string;
            public static KEY_ALLOW_LOCAL_DTMF_TONES_BOOL: string;
            public static KEY_APN_EXPAND_BOOL: string;
            public static KEY_AUTO_RETRY_ENABLED_BOOL: string;
            public static KEY_CARRIER_ALLOW_TURNOFF_IMS_BOOL: string;
            public static KEY_CARRIER_SETTINGS_ENABLE_BOOL: string;
            public static KEY_CARRIER_VOLTE_AVAILABLE_BOOL: string;
            public static KEY_CARRIER_VOLTE_PROVISIONING_REQUIRED_BOOL: string;
            public static KEY_CARRIER_VOLTE_TTY_SUPPORTED_BOOL: string;
            public static KEY_CARRIER_VT_AVAILABLE_BOOL: string;
            public static KEY_CARRIER_VVM_PACKAGE_NAME_STRING: string;
            public static KEY_CARRIER_WFC_IMS_AVAILABLE_BOOL: string;
            public static KEY_CDMA_NONROAMING_NETWORKS_STRING_ARRAY: string;
            public static KEY_CDMA_ROAMING_NETWORKS_STRING_ARRAY: string;
            public static KEY_CSP_ENABLED_BOOL: string;
            public static KEY_DEFAULT_SIM_CALL_MANAGER_STRING: string;
            public static KEY_DISABLE_CDMA_ACTIVATION_CODE_BOOL: string;
            public static KEY_DTMF_TYPE_ENABLED_BOOL: string;
            public static KEY_ENABLE_DIALER_KEY_VIBRATION_BOOL: string;
            public static KEY_FORCE_HOME_NETWORK_BOOL: string;
            public static KEY_GSM_NONROAMING_NETWORKS_STRING_ARRAY: string;
            public static KEY_GSM_ROAMING_NETWORKS_STRING_ARRAY: string;
            public static KEY_HAS_IN_CALL_NOISE_SUPPRESSION_BOOL: string;
            public static KEY_HIDE_CARRIER_NETWORK_SETTINGS_BOOL: string;
            public static KEY_HIDE_SIM_LOCK_SETTINGS_BOOL: string;
            public static KEY_IGNORE_SIM_NETWORK_LOCKED_EVENTS_BOOL: string;
            public static KEY_MMS_ALIAS_ENABLED_BOOL: string;
            public static KEY_MMS_ALIAS_MAX_CHARS_INT: string;
            public static KEY_MMS_ALIAS_MIN_CHARS_INT: string;
            public static KEY_MMS_ALLOW_ATTACH_AUDIO_BOOL: string;
            public static KEY_MMS_APPEND_TRANSACTION_ID_BOOL: string;
            public static KEY_MMS_EMAIL_GATEWAY_NUMBER_STRING: string;
            public static KEY_MMS_GROUP_MMS_ENABLED_BOOL: string;
            public static KEY_MMS_HTTP_PARAMS_STRING: string;
            public static KEY_MMS_HTTP_SOCKET_TIMEOUT_INT: string;
            public static KEY_MMS_MAX_IMAGE_HEIGHT_INT: string;
            public static KEY_MMS_MAX_IMAGE_WIDTH_INT: string;
            public static KEY_MMS_MAX_MESSAGE_SIZE_INT: string;
            public static KEY_MMS_MESSAGE_TEXT_MAX_SIZE_INT: string;
            public static KEY_MMS_MMS_DELIVERY_REPORT_ENABLED_BOOL: string;
            public static KEY_MMS_MMS_ENABLED_BOOL: string;
            public static KEY_MMS_MMS_READ_REPORT_ENABLED_BOOL: string;
            public static KEY_MMS_MULTIPART_SMS_ENABLED_BOOL: string;
            public static KEY_MMS_NAI_SUFFIX_STRING: string;
            public static KEY_MMS_NOTIFY_WAP_MMSC_ENABLED_BOOL: string;
            public static KEY_MMS_RECIPIENT_LIMIT_INT: string;
            public static KEY_MMS_SEND_MULTIPART_SMS_AS_SEPARATE_MESSAGES_BOOL: string;
            public static KEY_MMS_SHOW_CELL_BROADCAST_APP_LINKS_BOOL: string;
            public static KEY_MMS_SMS_DELIVERY_REPORT_ENABLED_BOOL: string;
            public static KEY_MMS_SMS_TO_MMS_TEXT_LENGTH_THRESHOLD_INT: string;
            public static KEY_MMS_SMS_TO_MMS_TEXT_THRESHOLD_INT: string;
            public static KEY_MMS_SUBJECT_MAX_LENGTH_INT: string;
            public static KEY_MMS_SUPPORT_HTTP_CHARSET_HEADER_BOOL: string;
            public static KEY_MMS_SUPPORT_MMS_CONTENT_DISPOSITION_BOOL: string;
            public static KEY_MMS_UA_PROF_TAG_NAME_STRING: string;
            public static KEY_MMS_UA_PROF_URL_STRING: string;
            public static KEY_MMS_USER_AGENT_STRING: string;
            public static KEY_OPERATOR_SELECTION_EXPAND_BOOL: string;
            public static KEY_PREFER_2G_BOOL: string;
            public static KEY_SHOW_APN_SETTING_CDMA_BOOL: string;
            public static KEY_SHOW_CDMA_CHOICES_BOOL: string;
            public static KEY_SHOW_ONSCREEN_DIAL_BUTTON_BOOL: string;
            public static KEY_SIM_NETWORK_UNLOCK_ALLOW_DISMISS_BOOL: string;
            public static KEY_SUPPORT_PAUSE_IMS_VIDEO_CALLS_BOOL: string;
            public static KEY_SUPPORT_SWAP_AFTER_MERGE_BOOL: string;
            public static KEY_USE_HFA_FOR_PROVISIONING_BOOL: string;
            public static KEY_USE_OTASP_FOR_PROVISIONING_BOOL: string;
            public static KEY_VOICEMAIL_NOTIFICATION_PERSISTENT_BOOL: string;
            public static KEY_VOICE_PRIVACY_DISABLE_UI_BOOL: string;
            public static KEY_VOLTE_REPLACEMENT_RAT_INT: string;
            public static KEY_VVM_DESTINATION_NUMBER_STRING: string;
            public static KEY_VVM_PORT_NUMBER_INT: string;
            public static KEY_VVM_TYPE_STRING: string;
            public static KEY_WORLD_PHONE_BOOL: string;

            public getConfig(): android.os.PersistableBundle;

            public notifyConfigChangedForSubId(param0: number): void;

            public getConfigForSubId(param0: number): android.os.PersistableBundle;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module telephony {
        export class CellIdentityCdma extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public getLongitude(): number;

            public toString(): string;

            public equals(param0: javalangObject): boolean;

            public getBasestationId(): number;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getLatitude(): number;

            public getNetworkId(): number;

            public getSystemId(): number;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module telephony {
        export class CellIdentityGsm extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public getMnc(): number;

            public toString(): string;

            public equals(param0: javalangObject): boolean;

            public getMcc(): number;

            public describeContents(): number;

            public getLac(): number;

            public getPsc(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getCid(): number;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module telephony {
        export class CellIdentityLte extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public getMnc(): number;

            public toString(): string;

            public getTac(): number;

            public equals(param0: javalangObject): boolean;

            public getMcc(): number;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getPci(): number;

            public getCi(): number;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module telephony {
        export class CellIdentityWcdma extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public getMnc(): number;

            public toString(): string;

            public equals(param0: javalangObject): boolean;

            public getMcc(): number;

            public describeContents(): number;

            public getLac(): number;

            public getPsc(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getCid(): number;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module telephony {
        export abstract class CellInfo extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public getTimeStamp(): number;

            public toString(): string;

            public isRegistered(): boolean;

            public equals(param0: javalangObject): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.telephony.CellIdentityCdma.d.ts" />
/// <reference path="./android.telephony.CellSignalStrengthCdma.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module telephony {
        export class CellInfoCdma extends android.telephony.CellInfo implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public toString(): string;

            public getCellIdentity(): android.telephony.CellIdentityCdma;

            public equals(param0: javalangObject): boolean;

            public describeContents(): number;

            public getCellSignalStrength(): android.telephony.CellSignalStrengthCdma;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.telephony.CellIdentityGsm.d.ts" />
/// <reference path="./android.telephony.CellSignalStrengthGsm.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module telephony {
        export class CellInfoGsm extends android.telephony.CellInfo implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public getCellIdentity(): android.telephony.CellIdentityGsm;

            public toString(): string;

            public equals(param0: javalangObject): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getCellSignalStrength(): android.telephony.CellSignalStrengthGsm;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.telephony.CellIdentityLte.d.ts" />
/// <reference path="./android.telephony.CellSignalStrengthLte.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module telephony {
        export class CellInfoLte extends android.telephony.CellInfo implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public getCellSignalStrength(): android.telephony.CellSignalStrengthLte;

            public getCellIdentity(): android.telephony.CellIdentityLte;

            public toString(): string;

            public equals(param0: javalangObject): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.telephony.CellIdentityWcdma.d.ts" />
/// <reference path="./android.telephony.CellSignalStrengthWcdma.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module telephony {
        export class CellInfoWcdma extends android.telephony.CellInfo implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public toString(): string;

            public equals(param0: javalangObject): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getCellIdentity(): android.telephony.CellIdentityWcdma;

            public getCellSignalStrength(): android.telephony.CellSignalStrengthWcdma;

            public hashCode(): number;
        }
    }
}

declare module android {
    export module telephony {
        export abstract class CellLocation extends javalangObject {
            public static requestLocationUpdate(): void;

            public static getEmpty(): android.telephony.CellLocation;

            public constructor();
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module telephony {
        export abstract class CellSignalStrength extends javalangObject {
            public static SIGNAL_STRENGTH_GOOD: number;
            public static SIGNAL_STRENGTH_GREAT: number;
            public static SIGNAL_STRENGTH_MODERATE: number;
            public static SIGNAL_STRENGTH_NONE_OR_UNKNOWN: number;
            public static SIGNAL_STRENGTH_POOR: number;

            public getAsuLevel(): number;

            public getDbm(): number;

            public equals(param0: javalangObject): boolean;

            public getLevel(): number;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module telephony {
        export class CellSignalStrengthCdma extends android.telephony.CellSignalStrength implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public getEvdoSnr(): number;

            public equals(param0: javalangObject): boolean;

            public getCdmaEcio(): number;

            public getCdmaLevel(): number;

            public getLevel(): number;

            public getCdmaDbm(): number;

            public getAsuLevel(): number;

            public toString(): string;

            public getDbm(): number;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getEvdoEcio(): number;

            public getEvdoLevel(): number;

            public getEvdoDbm(): number;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module telephony {
        export class CellSignalStrengthGsm extends android.telephony.CellSignalStrength implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public getAsuLevel(): number;

            public toString(): string;

            public getDbm(): number;

            public equals(param0: javalangObject): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getLevel(): number;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module telephony {
        export class CellSignalStrengthLte extends android.telephony.CellSignalStrength implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public getTimingAdvance(): number;

            public getAsuLevel(): number;

            public toString(): string;

            public getDbm(): number;

            public equals(param0: javalangObject): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getLevel(): number;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module telephony {
        export class CellSignalStrengthWcdma extends android.telephony.CellSignalStrength implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public getAsuLevel(): number;

            public toString(): string;

            public getDbm(): number;

            public equals(param0: javalangObject): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getLevel(): number;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module telephony {
        export class IccOpenLogicalChannelResponse extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static INVALID_CHANNEL: number;
            public static STATUS_MISSING_RESOURCE: number;
            public static STATUS_NO_ERROR: number;
            public static STATUS_NO_SUCH_ELEMENT: number;
            public static STATUS_UNKNOWN_ERROR: number;

            public toString(): string;

            public getSelectResponse(): native.Array<number>;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getChannel(): number;

            public getStatus(): number;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module telephony {
        export class NeighboringCellInfo extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static UNKNOWN_CID: number;
            public static UNKNOWN_RSSI: number;

            public getRssi(): number;

            public getNetworkType(): number;

            public getLac(): number;

            public getPsc(): number;

            public constructor();

            public setCid(param0: number): void;

            public setRssi(param0: number): void;

            public toString(): string;

            public constructor(param0: android.os.Parcel);

            public describeContents(): number;

            public constructor(param0: number, param1: string, param2: number);

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public constructor(param0: number, param1: number);

            public getCid(): number;
        }
    }
}

/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module telephony {
        export class PhoneNumberFormattingTextWatcher extends javalangObject implements android.text.TextWatcher {
            public afterTextChanged(param0: android.text.Editable): void;

            public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;

            public constructor();

            public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;

            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.text.style.TtsSpan.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module android {
    export module telephony {
        export class PhoneNumberUtils extends javalangObject {
            public static FORMAT_JAPAN: number;
            public static FORMAT_NANP: number;
            public static FORMAT_UNKNOWN: number;
            public static PAUSE: string;
            public static TOA_International: number;
            public static TOA_Unknown: number;
            public static WAIT: string;
            public static WILD: string;

            public static compare(param0: string, param1: string): boolean;

            public static isStartsPostDial(param0: string): boolean;

            public static getStrippedReversed(param0: string): string;

            public static networkPortionToCalledPartyBCD(param0: string): native.Array<number>;

            public static numberToCalledPartyBCD(param0: string): native.Array<number>;

            public static isISODigit(param0: string): boolean;

            public static isDialable(param0: string): boolean;

            public static isGlobalPhoneNumber(param0: string): boolean;

            public static extractPostDialPortion(param0: string): string;

            public static formatNanpNumber(param0: android.text.Editable): void;

            public static isNonSeparator(param0: string): boolean;

            public static normalizeNumber(param0: string): string;

            public static isEmergencyNumber(param0: string): boolean;

            public static toCallerIDMinMatch(param0: string): string;

            public static compare(param0: android.content.Context, param1: string, param2: string): boolean;

            public static calledPartyBCDFragmentToString(param0: native.Array<number>, param1: number, param2: number): string;

            public static toaFromString(param0: string): number;

            public static formatNumber(param0: android.text.Editable, param1: number): void;

            public static isVoiceMailNumber(param0: string): boolean;

            public static getFormatTypeForLocale(param0: javautilLocale): number;

            public static formatJapaneseNumber(param0: android.text.Editable): void;

            public static extractNetworkPortion(param0: string): string;

            public static formatNumber(param0: string): string;

            public static networkPortionToCalledPartyBCDWithLength(param0: string): native.Array<number>;

            public static calledPartyBCDToString(param0: native.Array<number>, param1: number, param2: number): string;

            public static formatNumber(param0: string, param1: string): string;

            public static formatNumberToE164(param0: string, param1: string): string;

            public static formatNumber(param0: string, param1: string, param2: string): string;

            public static createTtsSpan(param0: string): android.text.style.TtsSpan;

            public constructor();

            public static is12Key(param0: string): boolean;

            public static convertKeypadLettersToDigits(param0: string): string;

            public static addTtsSpan(param0: android.text.Spannable, param1: number, param2: number): void;

            public static stringFromStringAndTOA(param0: string, param1: number): string;

            public static isReallyDialable(param0: string): boolean;

            public static createTtsSpannable(param0: string): string;

            public static isWellFormedSmsAddress(param0: string): boolean;

            public static stripSeparators(param0: string): string;

            public static getNumberFromIntent(param0: android.content.Intent, param1: android.content.Context): string;

            public static replaceUnicodeDigits(param0: string): string;

            public static formatNumberToRFC3966(param0: string, param1: string): string;

            public static isLocalEmergencyNumber(param0: android.content.Context, param1: string): boolean;
        }
    }
}

/// <reference path="./android.telephony.CellLocation.d.ts" />
/// <reference path="./android.telephony.ServiceState.d.ts" />
/// <reference path="./android.telephony.SignalStrength.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module telephony {
        export class PhoneStateListener extends javalangObject {
            public static LISTEN_CALL_FORWARDING_INDICATOR: number;
            public static LISTEN_CALL_STATE: number;
            public static LISTEN_CELL_INFO: number;
            public static LISTEN_CELL_LOCATION: number;
            public static LISTEN_DATA_ACTIVITY: number;
            public static LISTEN_DATA_CONNECTION_STATE: number;
            public static LISTEN_MESSAGE_WAITING_INDICATOR: number;
            public static LISTEN_NONE: number;
            public static LISTEN_SERVICE_STATE: number;
            public static LISTEN_SIGNAL_STRENGTH: number;
            public static LISTEN_SIGNAL_STRENGTHS: number;

            public onMessageWaitingIndicatorChanged(param0: boolean): void;

            public onCellInfoChanged(param0: javautilList): void;

            public onServiceStateChanged(param0: android.telephony.ServiceState): void;

            public onSignalStrengthChanged(param0: number): void;

            public onDataActivity(param0: number): void;

            public onDataConnectionStateChanged(param0: number, param1: number): void;

            public onSignalStrengthsChanged(param0: android.telephony.SignalStrength): void;

            public constructor();

            public onCallForwardingIndicatorChanged(param0: boolean): void;

            public onCellLocationChanged(param0: android.telephony.CellLocation): void;

            public onCallStateChanged(param0: number, param1: string): void;

            public onDataConnectionStateChanged(param0: number): void;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module telephony {
        export class ServiceState extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static STATE_EMERGENCY_ONLY: number;
            public static STATE_IN_SERVICE: number;
            public static STATE_OUT_OF_SERVICE: number;
            public static STATE_POWER_OFF: number;

            public copyFrom(param0: android.telephony.ServiceState): void;

            public setState(param0: number): void;

            public setStateOff(): void;

            public getOperatorAlphaLong(): string;

            public equals(param0: javalangObject): boolean;

            public getOperatorAlphaShort(): string;

            public setStateOutOfService(): void;

            public constructor(param0: android.telephony.ServiceState);

            public setRoaming(param0: boolean): void;

            public setIsManualSelection(param0: boolean): void;

            public constructor();

            public setOperatorName(param0: string, param1: string, param2: string): void;

            public toString(): string;

            public getOperatorNumeric(): string;

            public constructor(param0: android.os.Parcel);

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getIsManualSelection(): boolean;

            public getRoaming(): boolean;

            public getState(): number;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module telephony {
        export class SignalStrength extends javalangObject implements android.os.Parcelable {
            public getEvdoSnr(): number;

            public isGsm(): boolean;

            public getGsmSignalStrength(): number;

            public equals(param0: javalangObject): boolean;

            public getCdmaEcio(): number;

            public getLevel(): number;

            public getCdmaDbm(): number;

            public toString(): string;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getEvdoEcio(): number;

            public getGsmBitErrorRate(): number;

            public getEvdoDbm(): number;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module android {
    export module telephony {
        export class SmsManager extends javalangObject {
            public static EXTRA_MMS_DATA: string;
            public static EXTRA_MMS_HTTP_STATUS: string;
            public static MMS_CONFIG_ALIAS_ENABLED: string;
            public static MMS_CONFIG_ALIAS_MAX_CHARS: string;
            public static MMS_CONFIG_ALIAS_MIN_CHARS: string;
            public static MMS_CONFIG_ALLOW_ATTACH_AUDIO: string;
            public static MMS_CONFIG_APPEND_TRANSACTION_ID: string;
            public static MMS_CONFIG_EMAIL_GATEWAY_NUMBER: string;
            public static MMS_CONFIG_GROUP_MMS_ENABLED: string;
            public static MMS_CONFIG_HTTP_PARAMS: string;
            public static MMS_CONFIG_HTTP_SOCKET_TIMEOUT: string;
            public static MMS_CONFIG_MAX_IMAGE_HEIGHT: string;
            public static MMS_CONFIG_MAX_IMAGE_WIDTH: string;
            public static MMS_CONFIG_MAX_MESSAGE_SIZE: string;
            public static MMS_CONFIG_MESSAGE_TEXT_MAX_SIZE: string;
            public static MMS_CONFIG_MMS_DELIVERY_REPORT_ENABLED: string;
            public static MMS_CONFIG_MMS_ENABLED: string;
            public static MMS_CONFIG_MMS_READ_REPORT_ENABLED: string;
            public static MMS_CONFIG_MULTIPART_SMS_ENABLED: string;
            public static MMS_CONFIG_NAI_SUFFIX: string;
            public static MMS_CONFIG_NOTIFY_WAP_MMSC_ENABLED: string;
            public static MMS_CONFIG_RECIPIENT_LIMIT: string;
            public static MMS_CONFIG_SEND_MULTIPART_SMS_AS_SEPARATE_MESSAGES: string;
            public static MMS_CONFIG_SHOW_CELL_BROADCAST_APP_LINKS: string;
            public static MMS_CONFIG_SMS_DELIVERY_REPORT_ENABLED: string;
            public static MMS_CONFIG_SMS_TO_MMS_TEXT_LENGTH_THRESHOLD: string;
            public static MMS_CONFIG_SMS_TO_MMS_TEXT_THRESHOLD: string;
            public static MMS_CONFIG_SUBJECT_MAX_LENGTH: string;
            public static MMS_CONFIG_SUPPORT_HTTP_CHARSET_HEADER: string;
            public static MMS_CONFIG_SUPPORT_MMS_CONTENT_DISPOSITION: string;
            public static MMS_CONFIG_UA_PROF_TAG_NAME: string;
            public static MMS_CONFIG_UA_PROF_URL: string;
            public static MMS_CONFIG_USER_AGENT: string;
            public static MMS_ERROR_CONFIGURATION_ERROR: number;
            public static MMS_ERROR_HTTP_FAILURE: number;
            public static MMS_ERROR_INVALID_APN: number;
            public static MMS_ERROR_IO_ERROR: number;
            public static MMS_ERROR_NO_DATA_NETWORK: number;
            public static MMS_ERROR_RETRY: number;
            public static MMS_ERROR_UNABLE_CONNECT_MMS: number;
            public static MMS_ERROR_UNSPECIFIED: number;
            public static RESULT_ERROR_GENERIC_FAILURE: number;
            public static RESULT_ERROR_NO_SERVICE: number;
            public static RESULT_ERROR_NULL_PDU: number;
            public static RESULT_ERROR_RADIO_OFF: number;
            public static STATUS_ON_ICC_FREE: number;
            public static STATUS_ON_ICC_READ: number;
            public static STATUS_ON_ICC_SENT: number;
            public static STATUS_ON_ICC_UNREAD: number;
            public static STATUS_ON_ICC_UNSENT: number;

            public getCarrierConfigValues(): android.os.Bundle;

            public getSubscriptionId(): number;

            public sendMultimediaMessage(param0: android.content.Context, param1: android.net.Uri, param2: string, param3: android.os.Bundle, param4: android.app.PendingIntent): void;

            public static getSmsManagerForSubscriptionId(param0: number): android.telephony.SmsManager;

            public sendMultipartTextMessage(param0: string, param1: string, param2: javautilArrayList, param3: javautilArrayList, param4: javautilArrayList): void;

            public sendDataMessage(param0: string, param1: string, param2: number, param3: native.Array<number>, param4: android.app.PendingIntent, param5: android.app.PendingIntent): void;

            public static getDefaultSmsSubscriptionId(): number;

            public downloadMultimediaMessage(param0: android.content.Context, param1: string, param2: android.net.Uri, param3: android.os.Bundle, param4: android.app.PendingIntent): void;

            public static getDefault(): android.telephony.SmsManager;

            public sendTextMessage(param0: string, param1: string, param2: string, param3: android.app.PendingIntent, param4: android.app.PendingIntent): void;

            public divideMessage(param0: string): javautilArrayList;

            public injectSmsPdu(param0: native.Array<number>, param1: string, param2: android.app.PendingIntent): void;
        }
    }
}

/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module telephony {
        export class SmsMessage extends javalangObject {
            public static ENCODING_16BIT: number;
            public static ENCODING_7BIT: number;
            public static ENCODING_8BIT: number;
            public static ENCODING_UNKNOWN: number;
            public static MAX_USER_DATA_BYTES: number;
            public static MAX_USER_DATA_BYTES_WITH_HEADER: number;
            public static MAX_USER_DATA_SEPTETS: number;
            public static MAX_USER_DATA_SEPTETS_WITH_HEADER: number;

            public isReplace(): boolean;

            public getStatusOnSim(): number;

            public getEmailBody(): string;

            public getMessageClass(): android.telephony.SmsMessage.MessageClass;

            public isStatusReportMessage(): boolean;

            public static getSubmitPdu(param0: string, param1: string, param2: number, param3: native.Array<number>, param4: boolean): android.telephony.SmsMessage.SubmitPdu;

            public getTimestampMillis(): number;

            public getPseudoSubject(): string;

            public getEmailFrom(): string;

            public isCphsMwiMessage(): boolean;

            public getStatus(): number;

            public getProtocolIdentifier(): number;

            public getDisplayOriginatingAddress(): string;

            public static createFromPdu(param0: native.Array<number>, param1: string): android.telephony.SmsMessage;

            public getDisplayMessageBody(): string;

            public getOriginatingAddress(): string;

            public getServiceCenterAddress(): string;

            public getIndexOnIcc(): number;

            public static calculateLength(param0: string, param1: boolean): native.Array<number>;

            public isMwiDontStore(): boolean;

            public getIndexOnSim(): number;

            public static getTPLayerLengthForPDU(param0: string): number;

            public getPdu(): native.Array<number>;

            public getUserData(): native.Array<number>;

            public getStatusOnIcc(): number;

            public getMessageBody(): string;

            public isMWIClearMessage(): boolean;

            public static getSubmitPdu(param0: string, param1: string, param2: string, param3: boolean): android.telephony.SmsMessage.SubmitPdu;

            public isEmail(): boolean;

            public static createFromPdu(param0: native.Array<number>): android.telephony.SmsMessage;

            public isMWISetMessage(): boolean;

            public isReplyPathPresent(): boolean;
        }
        export module SmsMessage {
            export class MessageClass extends javalangEnum {
                public static CLASS_0: android.telephony.SmsMessage.MessageClass;
                public static CLASS_1: android.telephony.SmsMessage.MessageClass;
                public static CLASS_2: android.telephony.SmsMessage.MessageClass;
                public static CLASS_3: android.telephony.SmsMessage.MessageClass;
                public static UNKNOWN: android.telephony.SmsMessage.MessageClass;

                public static values(): native.Array<android.telephony.SmsMessage.MessageClass>;

                public static valueOf(param0: string): android.telephony.SmsMessage.MessageClass;
                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
            export class SubmitPdu extends javalangObject {
                public encodedMessage: native.Array<number>;
                public encodedScAddress: native.Array<number>;

                public toString(): string;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module telephony {
        export class SubscriptionInfo extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public createIconBitmap(param0: android.content.Context): android.graphics.Bitmap;

            public getCountryIso(): string;

            public getNumber(): string;

            public getMnc(): number;

            public getSimSlotIndex(): number;

            public getIconTint(): number;

            public getCarrierName(): string;

            public toString(): string;

            public getIccId(): string;

            public getSubscriptionId(): number;

            public getMcc(): number;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getDataRoaming(): number;

            public getDisplayName(): string;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.telephony.SubscriptionInfo.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module telephony {
        export class SubscriptionManager extends javalangObject {
            public static DATA_ROAMING_DISABLE: number;
            public static DATA_ROAMING_ENABLE: number;

            public getActiveSubscriptionInfo(param0: number): android.telephony.SubscriptionInfo;

            public getActiveSubscriptionInfoCountMax(): number;

            public getActiveSubscriptionInfoForSimSlotIndex(param0: number): android.telephony.SubscriptionInfo;

            public removeOnSubscriptionsChangedListener(param0: android.telephony.SubscriptionManager.OnSubscriptionsChangedListener): void;

            public getActiveSubscriptionInfoCount(): number;

            public static from(param0: android.content.Context): android.telephony.SubscriptionManager;

            public isNetworkRoaming(param0: number): boolean;

            public addOnSubscriptionsChangedListener(param0: android.telephony.SubscriptionManager.OnSubscriptionsChangedListener): void;

            public getActiveSubscriptionInfoList(): javautilList;
        }
        export module SubscriptionManager {
            export class OnSubscriptionsChangedListener extends javalangObject {
                public onSubscriptionsChanged(): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.telephony.CellLocation.d.ts" />
/// <reference path="./android.telephony.IccOpenLogicalChannelResponse.d.ts" />
/// <reference path="./android.telephony.PhoneStateListener.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module telephony {
        export class TelephonyManager extends javalangObject {
            public static ACTION_CONFIGURE_VOICEMAIL: string;
            public static ACTION_PHONE_STATE_CHANGED: string;
            public static ACTION_RESPOND_VIA_MESSAGE: string;
            public static CALL_STATE_IDLE: number;
            public static CALL_STATE_OFFHOOK: number;
            public static CALL_STATE_RINGING: number;
            public static DATA_ACTIVITY_DORMANT: number;
            public static DATA_ACTIVITY_IN: number;
            public static DATA_ACTIVITY_INOUT: number;
            public static DATA_ACTIVITY_NONE: number;
            public static DATA_ACTIVITY_OUT: number;
            public static DATA_CONNECTED: number;
            public static DATA_CONNECTING: number;
            public static DATA_DISCONNECTED: number;
            public static DATA_SUSPENDED: number;
            public static EXTRA_INCOMING_NUMBER: string;
            public static EXTRA_STATE: string;
            public static EXTRA_STATE_IDLE: string;
            public static EXTRA_STATE_OFFHOOK: string;
            public static EXTRA_STATE_RINGING: string;
            public static NETWORK_TYPE_1xRTT: number;
            public static NETWORK_TYPE_CDMA: number;
            public static NETWORK_TYPE_EDGE: number;
            public static NETWORK_TYPE_EHRPD: number;
            public static NETWORK_TYPE_EVDO_0: number;
            public static NETWORK_TYPE_EVDO_A: number;
            public static NETWORK_TYPE_EVDO_B: number;
            public static NETWORK_TYPE_GPRS: number;
            public static NETWORK_TYPE_HSDPA: number;
            public static NETWORK_TYPE_HSPA: number;
            public static NETWORK_TYPE_HSPAP: number;
            public static NETWORK_TYPE_HSUPA: number;
            public static NETWORK_TYPE_IDEN: number;
            public static NETWORK_TYPE_LTE: number;
            public static NETWORK_TYPE_UMTS: number;
            public static NETWORK_TYPE_UNKNOWN: number;
            public static PHONE_TYPE_CDMA: number;
            public static PHONE_TYPE_GSM: number;
            public static PHONE_TYPE_NONE: number;
            public static PHONE_TYPE_SIP: number;
            public static SIM_STATE_ABSENT: number;
            public static SIM_STATE_NETWORK_LOCKED: number;
            public static SIM_STATE_PIN_REQUIRED: number;
            public static SIM_STATE_PUK_REQUIRED: number;
            public static SIM_STATE_READY: number;
            public static SIM_STATE_UNKNOWN: number;
            public static VVM_TYPE_CVVM: string;
            public static VVM_TYPE_OMTP: string;

            public setVoiceMailNumber(param0: string, param1: string): boolean;

            public getCallState(): number;

            public iccExchangeSimIO(param0: number, param1: number, param2: number, param3: number, param4: number, param5: string): native.Array<number>;

            public isVoiceCapable(): boolean;

            public getNetworkOperatorName(): string;

            public getLine1Number(): string;

            public setOperatorBrandOverride(param0: string): boolean;

            public hasCarrierPrivileges(): boolean;

            public getSimOperatorName(): string;

            public listen(param0: android.telephony.PhoneStateListener, param1: number): void;

            public getPhoneCount(): number;

            public isSmsCapable(): boolean;

            public getNetworkOperator(): string;

            public iccCloseLogicalChannel(param0: number): boolean;

            public getCellLocation(): android.telephony.CellLocation;

            public iccTransmitApduLogicalChannel(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: string): string;

            public hasIccCard(): boolean;

            public sendEnvelopeWithStatus(param0: string): string;

            public iccTransmitApduBasicChannel(param0: number, param1: number, param2: number, param3: number, param4: number, param5: string): string;

            public getNetworkCountryIso(): string;

            public getSimOperator(): string;

            public canChangeDtmfToneLength(): boolean;

            public getDeviceId(): string;

            public getNetworkType(): number;

            public getDataState(): number;

            public setLine1NumberForDisplay(param0: string, param1: string): boolean;

            public getSimCountryIso(): string;

            public getMmsUAProfUrl(): string;

            public isTtyModeSupported(): boolean;

            public getPhoneType(): number;

            public getSimState(): number;

            public isNetworkRoaming(): boolean;

            public getNeighboringCellInfo(): javautilList;

            public getGroupIdLevel1(): string;

            public iccOpenLogicalChannel(param0: string): android.telephony.IccOpenLogicalChannelResponse;

            public isWorldPhone(): boolean;

            public getVoiceMailNumber(): string;

            public isHearingAidCompatibilitySupported(): boolean;

            public setPreferredNetworkTypeToGlobal(): boolean;

            public getSimSerialNumber(): string;

            public getSubscriberId(): string;

            public getDeviceId(param0: number): string;

            public getMmsUserAgent(): string;

            public getVoiceMailAlphaTag(): string;

            public getAllCellInfo(): javautilList;

            public getDataActivity(): number;

            public getDeviceSoftwareVersion(): string;
        }
    }
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module telephony {
        export module cdma {
            export class CdmaCellLocation extends android.telephony.CellLocation {
                public fillInNotifierBundle(param0: android.os.Bundle): void;

                public setCellLocationData(param0: number, param1: number, param2: number, param3: number, param4: number): void;

                public constructor(param0: android.os.Bundle);

                public getBaseStationLongitude(): number;

                public setCellLocationData(param0: number, param1: number, param2: number): void;

                public getBaseStationLatitude(): number;

                public toString(): string;

                public constructor();

                public getNetworkId(): number;

                public setStateInvalid(): void;

                public getBaseStationId(): number;

                public equals(param0: javalangObject): boolean;

                public hashCode(): number;

                public static convertQuartSecToDecDegrees(param0: number): number;

                public getSystemId(): number;
            }
        }
    }
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module telephony {
        export module gsm {
            export class GsmCellLocation extends android.telephony.CellLocation {
                public fillInNotifierBundle(param0: android.os.Bundle): void;

                public setLacAndCid(param0: number, param1: number): void;

                public equals(param0: javalangObject): boolean;

                public hashCode(): number;

                public constructor(param0: android.os.Bundle);

                public getCid(): number;

                public getLac(): number;

                public toString(): string;

                public getPsc(): number;

                public constructor();

                public setStateInvalid(): void;
            }
        }
    }
}

/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module android {
    export module telephony {
        export module gsm {
            export class SmsManager extends javalangObject {
                public static RESULT_ERROR_GENERIC_FAILURE: number;
                public static RESULT_ERROR_NO_SERVICE: number;
                public static RESULT_ERROR_NULL_PDU: number;
                public static RESULT_ERROR_RADIO_OFF: number;
                public static STATUS_ON_SIM_FREE: number;
                public static STATUS_ON_SIM_READ: number;
                public static STATUS_ON_SIM_SENT: number;
                public static STATUS_ON_SIM_UNREAD: number;
                public static STATUS_ON_SIM_UNSENT: number;

                public static getDefault(): android.telephony.gsm.SmsManager;

                public divideMessage(param0: string): javautilArrayList;

                public sendDataMessage(param0: string, param1: string, param2: number, param3: native.Array<number>, param4: android.app.PendingIntent, param5: android.app.PendingIntent): void;

                public sendTextMessage(param0: string, param1: string, param2: string, param3: android.app.PendingIntent, param4: android.app.PendingIntent): void;

                public sendMultipartTextMessage(param0: string, param1: string, param2: javautilArrayList, param3: javautilArrayList, param4: javautilArrayList): void;
            }
        }
    }
}

/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module telephony {
        export module gsm {
            export class SmsMessage extends javalangObject {
                public static ENCODING_16BIT: number;
                public static ENCODING_7BIT: number;
                public static ENCODING_8BIT: number;
                public static ENCODING_UNKNOWN: number;
                public static MAX_USER_DATA_BYTES: number;
                public static MAX_USER_DATA_SEPTETS: number;
                public static MAX_USER_DATA_SEPTETS_WITH_HEADER: number;

                public isStatusReportMessage(): boolean;

                public getPseudoSubject(): string;

                public isMWIClearMessage(): boolean;

                public getDisplayOriginatingAddress(): string;

                public isEmail(): boolean;

                public getMessageClass(): android.telephony.gsm.SmsMessage.MessageClass;

                public isCphsMwiMessage(): boolean;

                public getEmailBody(): string;

                public constructor();

                public static getSubmitPdu(param0: string, param1: string, param2: number, param3: native.Array<number>, param4: boolean): android.telephony.gsm.SmsMessage.SubmitPdu;

                public getUserData(): native.Array<number>;

                public getPdu(): native.Array<number>;

                public isMwiDontStore(): boolean;

                public getOriginatingAddress(): string;

                public static getSubmitPdu(param0: string, param1: string, param2: string, param3: boolean): android.telephony.gsm.SmsMessage.SubmitPdu;

                public getEmailFrom(): string;

                public getDisplayMessageBody(): string;

                public getStatusOnSim(): number;

                public isReplace(): boolean;

                public isReplyPathPresent(): boolean;

                public static getTPLayerLengthForPDU(param0: string): number;

                public getStatus(): number;

                public getIndexOnSim(): number;

                public getMessageBody(): string;

                public static createFromPdu(param0: native.Array<number>): android.telephony.gsm.SmsMessage;

                public getServiceCenterAddress(): string;

                public getTimestampMillis(): number;

                public getProtocolIdentifier(): number;

                public isMWISetMessage(): boolean;

                public static calculateLength(param0: string, param1: boolean): native.Array<number>;
            }
            export module SmsMessage {
                export class MessageClass extends javalangEnum {
                    public static CLASS_0: android.telephony.gsm.SmsMessage.MessageClass;
                    public static CLASS_1: android.telephony.gsm.SmsMessage.MessageClass;
                    public static CLASS_2: android.telephony.gsm.SmsMessage.MessageClass;
                    public static CLASS_3: android.telephony.gsm.SmsMessage.MessageClass;
                    public static UNKNOWN: android.telephony.gsm.SmsMessage.MessageClass;

                    public static valueOf(param0: string): android.telephony.gsm.SmsMessage.MessageClass;
                    public static valueOf(param0: javalangClass, param1: string): javalangEnum;

                    public static values(): native.Array<android.telephony.gsm.SmsMessage.MessageClass>;
                }
                export class SubmitPdu extends javalangObject {
                    public encodedMessage: native.Array<number>;
                    public encodedScAddress: native.Array<number>;

                    public toString(): string;

                    public constructor();
                }
            }
        }
    }
}
