
export type BluetoothUUID = string;
export type BluetoothDeviceList = BluetoothDevice[];
export type LeScanCallback = (onLeScan: (device:BluetoothDevice, rssi:any, data:any)=> void) => void;

export interface BluetoothDevice {
    getName(): string;
    getAddress(): string;
    hashCode(): string;
    connectGatt(context, poling, callback) : BluetoothGATT;
}


export interface BluetoothGATT {
    device: BluetoothDevice;
    connected: boolean;
    connect(): any;
    disconnect(): void;
    close() : void;
    getPrimaryService(service: BluetoothUUID): any;
    getPrimaryServices(service?: BluetoothUUID): any;
}

export interface BluetoothAdapter {
    getRemoteDevice(uuid: BluetoothUUID): BluetoothDevice;
    startLeScan(callback: LeScanCallback);
    stopLeScan(callback): LeScanCallback;
}
