"use strict";
exports.__esModule = true;
/**
 * Created by nmuecke on 1/3/17.
 */
var BluetoothGattErrors = (function () {
    function BluetoothGattErrors() {
        this.statusCodes = {
            ERROR: {},
            GATT: {},
            BATTERY_STATUS: {},
            CARD_STATUS: {},
            DEVICE_INFO: {},
            STATE: {}
        };
        this.statusCodes.BATTERY_STATUS[android.bluetooth.BluetoothGatt.BATTERY_STATUS_FULL] = 'BluetoothReader.BATTERY_STATUS_FULL';
        this.statusCodes.BATTERY_STATUS[android.bluetooth.BluetoothGatt.BATTERY_STATUS_NONE] = 'BluetoothReader.BATTERY_STATUS_NONE';
        this.statusCodes.BATTERY_STATUS[android.bluetooth.BluetoothGatt.BATTERY_STATUS_USB_PLUGGED] = 'BluetoothReader.BATTERY_STATUS_USB_PLUGGED';
        this.statusCodes.BATTERY_STATUS['unknown'] = 'BluetoothReader.BATTERY_STATUS_UNKNOWN';
        this.statusCodes.CARD_STATUS[android.bluetooth.BluetoothGatt.CARD_STATUS_ABSENT] = 'BluetoothReader.CARD_STATUS_ABSENT';
        this.statusCodes.CARD_STATUS[android.bluetooth.BluetoothGatt.CARD_STATUS_POWER_SAVING_MODE] = 'BluetoothReader.CARD_STATUS_POWER_SAVING_MODE';
        this.statusCodes.CARD_STATUS[android.bluetooth.BluetoothGatt.CARD_STATUS_POWERED] = 'BluetoothReader.CARD_STATUS_POWERED';
        this.statusCodes.CARD_STATUS[android.bluetooth.BluetoothGatt.CARD_STATUS_PRESENT] = 'BluetoothReader.CARD_STATUS_PRESENT';
        this.statusCodes.CARD_STATUS[android.bluetooth.BluetoothGatt.CARD_STATUS_UNKNOWN] = 'BluetoothReader.CARD_STATUS_UNKNOWN';
        this.statusCodes.CARD_STATUS['unknown'] = 'BluetoothReader.CARD_STATUS_UNKNOWN';
        this.statusCodes.DEVICE_INFO[android.bluetooth.BluetoothGatt.DEVICE_INFO_FIRMWARE_REVISION_STRING] = 'BluetoothReader.DEVICE_INFO_FIRMWARE_REVISION_STRING';
        this.statusCodes.DEVICE_INFO[android.bluetooth.BluetoothGatt.DEVICE_INFO_HARDWARE_REVISION_STRING] = 'BluetoothReader.DEVICE_INFO_HARDWARE_REVISION_STRING';
        this.statusCodes.DEVICE_INFO[android.bluetooth.BluetoothGatt.DEVICE_INFO_MANUFACTURER_NAME_STRING] = 'BluetoothReader.DEVICE_INFO_MANUFACTURER_NAME_STRING';
        this.statusCodes.DEVICE_INFO[android.bluetooth.BluetoothGatt.DEVICE_INFO_MODEL_NUMBER_STRING] = 'BluetoothReader.DEVICE_INFO_MODEL_NUMBER_STRING';
        this.statusCodes.DEVICE_INFO[android.bluetooth.BluetoothGatt.DEVICE_INFO_SERIAL_NUMBER_STRING] = 'BluetoothReader.DEVICE_INFO_SERIAL_NUMBER_STRING';
        this.statusCodes.DEVICE_INFO[android.bluetooth.BluetoothGatt.DEVICE_INFO_SOFTWARE_REVISION_STRING] = 'BluetoothReader.DEVICE_INFO_SOFTWARE_REVISION_STRING';
        this.statusCodes.DEVICE_INFO[android.bluetooth.BluetoothGatt.DEVICE_INFO_SYSTEM_ID] = 'BluetoothReader.DEVICE_INFO_SYSTEM_ID';
        this.statusCodes.DEVICE_INFO['unknown'] = 'BluetoothReader.DEVICE_INFO_UNKNOWN';
        this.statusCodes.ERROR[android.bluetooth.BluetoothGatt.ERROR_AUTHENTICATION_FAILED] = 'BluetoothReader.ERROR_AUTHENTICATION_FAILED';
        this.statusCodes.ERROR[android.bluetooth.BluetoothGatt.ERROR_AUTHENTICATION_REQUIRED] = 'BluetoothReader.ERROR_AUTHENTICATION_REQUIRED';
        this.statusCodes.ERROR[android.bluetooth.BluetoothGatt.ERROR_CARD_OPERATION] = 'BluetoothReader.ERROR_CARD_OPERATION';
        this.statusCodes.ERROR[android.bluetooth.BluetoothGatt.ERROR_CHARACTERISTIC_NOT_FOUND] = 'BluetoothReader.ERROR_CHARACTERISTIC_NOT_FOUND';
        this.statusCodes.ERROR[android.bluetooth.BluetoothGatt.ERROR_INVALID_CHECKSUM] = 'BluetoothReader.ERROR_INVALID_CHECKSUM';
        this.statusCodes.ERROR[android.bluetooth.BluetoothGatt.ERROR_INVALID_COMMAND] = 'BluetoothReader.ERROR_INVALID_COMMAND';
        this.statusCodes.ERROR[android.bluetooth.BluetoothGatt.ERROR_INVALID_DATA] = 'BluetoothReader.ERROR_INVALID_DATA';
        this.statusCodes.ERROR[android.bluetooth.BluetoothGatt.ERROR_INVALID_DATA_LENGTH] = 'BluetoothReader.ERROR_INVALID_DATA_LENGTH';
        this.statusCodes.ERROR[android.bluetooth.BluetoothGatt.ERROR_LOW_BATTERY] = 'BluetoothReader.ERROR_LOW_BATTERY';
        this.statusCodes.ERROR[android.bluetooth.BluetoothGatt.ERROR_READ_CHARACTERISTIC_FAILED] = 'BluetoothReader.ERROR_READ_CHARACTERISTIC_FAILED';
        this.statusCodes.ERROR[android.bluetooth.BluetoothGatt.ERROR_SET_NOTIFCIATION_FAILED] = 'BluetoothReader.ERROR_SET_NOTIFCIATION_FAILED';
        this.statusCodes.ERROR[android.bluetooth.BluetoothGatt.ERROR_SUCCESS] = 'BluetoothReader.ERROR_SUCCESS';
        this.statusCodes.ERROR[android.bluetooth.BluetoothGatt.ERROR_TIMEOUT] = 'BluetoothReader.ERROR_TIMEOUT';
        this.statusCodes.ERROR[android.bluetooth.BluetoothGatt.ERROR_UNDEFINED] = 'BluetoothReader.ERROR_UNDEFINED';
        this.statusCodes.ERROR[android.bluetooth.BluetoothGatt.ERROR_UNKNOWN_COMMAND_ID] = 'BluetoothReader.ERROR_UNKNOWN_COMMAND_ID';
        this.statusCodes.ERROR[android.bluetooth.BluetoothGatt.ERROR_WRITE_DATA] = 'BluetoothReader.ERROR_WRITE_DATA';
        this.statusCodes.ERROR['unknown'] = 'BluetoothReader.ERROR_UNKNOWN';
        this.statusCodes.STATE[android.bluetooth.BluetoothGatt.STATE_CONNECTED] = 'BluetoothReader.STATE_CONNECTED';
        this.statusCodes.STATE[android.bluetooth.BluetoothGatt.STATE_CONNECTING] = 'BluetoothReader.STATE_CONNECTING';
        this.statusCodes.STATE[android.bluetooth.BluetoothGatt.STATE_DISCONNECTED] = 'BluetoothReader.STATE_DISCONNECTED';
        this.statusCodes.STATE[android.bluetooth.BluetoothGatt.STATE_DISCONNECTING] = 'BluetoothReader.STATE_DISCONNECTING';
        this.statusCodes.STATE['unknown'] = 'BluetoothReader.STATE_UNKNOWN';
        this.statusCodes.GATT[com.acs.bluetooth.BluetoothReader.GATT_CONNECTION_CONGESTED] = 'BluetoothGatt.GATT_CONNECTION_CONGESTED';
        this.statusCodes.GATT[com.acs.bluetooth.BluetoothReader.GATT_FAILURE] = 'BluetoothGatt.GATT_FAILURE';
        this.statusCodes.GATT[com.acs.bluetooth.BluetoothReader.GATT_INSUFFICIENT_AUTHENTICATION] = 'BluetoothGatt.GATT_INSUFFICIENT_AUTHENTICATION';
        this.statusCodes.GATT[com.acs.bluetooth.BluetoothReader.GATT_INSUFFICIENT_ENCRYPTION] = 'BluetoothGatt.GATT_INSUFFICIENT_ENCRYPTION';
        this.statusCodes.GATT[com.acs.bluetooth.BluetoothReader.GATT_INVALID_ATTRIBUTE_LENGTH] = 'BluetoothGatt.GATT_INVALID_ATTRIBUTE_LENGTH';
        this.statusCodes.GATT[com.acs.bluetooth.BluetoothReader.GATT_INVALID_OFFSET] = 'BluetoothGatt.GATT_INVALID_OFFSET';
        this.statusCodes.GATT[com.acs.bluetooth.BluetoothReader.GATT_READ_NOT_PERMITTED] = 'BluetoothGatt.GATT_READ_NOT_PERMITTED';
        this.statusCodes.GATT[com.acs.bluetooth.BluetoothReader.GATT_REQUEST_NOT_SUPPORTED] = 'BluetoothGatt.GATT_REQUEST_NOT_SUPPORTED';
        this.statusCodes.GATT[com.acs.bluetooth.BluetoothReader.GATT_SUCCESS] = 'BluetoothGatt.GATT_SUCCESS';
        this.statusCodes.GATT[com.acs.bluetooth.BluetoothReader.GATT_WRITE_NOT_PERMITTED] = 'BluetoothGatt.GATT_WRITE_NOT_PERMITTED';
        //Not documented in the this.statusCodes.API
        //Found here: https://android.googlesource.com/platform/external/bluetooth/bluedroid/+/android-5.1.0_r1/stack/include/gatt_api.h
        this.statusCodes.GATT[0x08] = 'BluetoothGatt.GATT_CONNECTION_TIMEOUT';
        this.statusCodes.GATT[0x13] = 'BluetoothGatt.GATT_CONNECTION_TERMINATE_PEER_USER';
        this.statusCodes.GATT[0x03E] = 'BluetoothGatt.GATT_CONNECTION_FAIL_ESTABLISH';
        this.statusCodes.GATT[0x22] = 'BluetoothGatt.GATT_CONNECTION_LMP_TIMEOUT';
        this.statusCodes.GATT[0x0100] = 'BluetoothGatt.GATT_CONNECTION_CANCEL';
        this.statusCodes.GATT['unknown'] = 'BluetoothGatt.GATT_UNKNOWN';
    }
    Object.defineProperty(BluetoothGattErrors.prototype, "batteryStatusMessage", {
        get: function () {
            return this.message('BATTERY_STATUS');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothGattErrors.prototype, "cardStatusMessage", {
        get: function () {
            return this.message('CARD_STATUS');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothGattErrors.prototype, "deviceInfoMessage", {
        get: function () {
            return this.message('DEVICE_INFO');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothGattErrors.prototype, "errorMessage", {
        get: function () {
            return this.message('ERROR');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothGattErrors.prototype, "stateMessage", {
        get: function () {
            return this.message('STATE');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothGattErrors.prototype, "gattMessage", {
        get: function () {
            return this.message('GATT');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothGattErrors.prototype, "batteryStatusEvent", {
        get: function () {
            return this.event('BATTERY_STATUS');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothGattErrors.prototype, "cardStatusEvent", {
        get: function () {
            return this.event('CARD_STATUS');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothGattErrors.prototype, "deviceInfoEvent", {
        get: function () {
            return this.event('DEVICE_INFO');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothGattErrors.prototype, "errorEvent", {
        get: function () {
            return this.event('ERROR');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothGattErrors.prototype, "stateEvent", {
        get: function () {
            return this.event('STATE');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothGattErrors.prototype, "gattEvent", {
        get: function () {
            return this.event('GATT');
        },
        enumerable: true,
        configurable: true
    });
    BluetoothGattErrors.prototype.message = function (lookup) {
        var messages = this.statusCodes[lookup];
        return function (errorCode) {
            if (errorCode === undefined) {
                return messages;
            }
            return messages[errorCode] || messages['unknown'];
        };
    };
    BluetoothGattErrors.prototype.event = function (lookup) {
        var messageLookup = this.message(lookup);
        return function (errorCode) {
            if (errorCode === undefined) {
                messageLookup().map(function (code) {
                    return code.toLowerCase();
                });
            }
            return messageLookup(errorCode).toLowerCase();
        };
    };
    return BluetoothGattErrors;
}());
exports.BluetoothGattErrors = BluetoothGattErrors;
