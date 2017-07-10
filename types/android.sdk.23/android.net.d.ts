
/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module net {
        export class CaptivePortal extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public ignoreNetwork(): void;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public reportCaptivePortalDismissed(): void;
        }
    }
}

/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.net.LinkProperties.d.ts" />
/// <reference path="./android.net.Network.d.ts" />
/// <reference path="./android.net.NetworkCapabilities.d.ts" />
/// <reference path="./android.net.NetworkInfo.d.ts" />
/// <reference path="./android.net.NetworkRequest.d.ts" />
/// <reference path="./android.net.ProxyInfo.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module net {
        export class ConnectivityManager extends javalangObject {
            public static ACTION_BACKGROUND_DATA_SETTING_CHANGED: string;
            public static ACTION_CAPTIVE_PORTAL_SIGN_IN: string;
            public static CONNECTIVITY_ACTION: string;
            public static DEFAULT_NETWORK_PREFERENCE: number;
            public static EXTRA_CAPTIVE_PORTAL: string;
            public static EXTRA_EXTRA_INFO: string;
            public static EXTRA_IS_FAILOVER: string;
            public static EXTRA_NETWORK: string;
            public static EXTRA_NETWORK_INFO: string;
            public static EXTRA_NETWORK_REQUEST: string;
            public static EXTRA_NETWORK_TYPE: string;
            public static EXTRA_NO_CONNECTIVITY: string;
            public static EXTRA_OTHER_NETWORK_INFO: string;
            public static EXTRA_REASON: string;
            public static TYPE_BLUETOOTH: number;
            public static TYPE_DUMMY: number;
            public static TYPE_ETHERNET: number;
            public static TYPE_MOBILE: number;
            public static TYPE_MOBILE_DUN: number;
            public static TYPE_MOBILE_HIPRI: number;
            public static TYPE_MOBILE_MMS: number;
            public static TYPE_MOBILE_SUPL: number;
            public static TYPE_VPN: number;
            public static TYPE_WIFI: number;
            public static TYPE_WIMAX: number;

            public getNetworkInfo(param0: number): android.net.NetworkInfo;

            public static isNetworkTypeValid(param0: number): boolean;

            public getDefaultProxy(): android.net.ProxyInfo;

            public getAllNetworks(): native.Array<android.net.Network>;

            public static setProcessDefaultNetwork(param0: android.net.Network): boolean;

            public requestNetwork(param0: android.net.NetworkRequest, param1: android.net.ConnectivityManager.NetworkCallback): void;

            public getNetworkPreference(): number;

            public stopUsingNetworkFeature(param0: number, param1: string): number;

            public requestRouteToHost(param0: number, param1: number): boolean;

            public getActiveNetworkInfo(): android.net.NetworkInfo;

            public reportBadNetwork(param0: android.net.Network): void;

            public releaseNetworkRequest(param0: android.app.PendingIntent): void;

            public getBackgroundDataSetting(): boolean;

            public startUsingNetworkFeature(param0: number, param1: string): number;

            public getLinkProperties(param0: android.net.Network): android.net.LinkProperties;

            public getNetworkCapabilities(param0: android.net.Network): android.net.NetworkCapabilities;

            public bindProcessToNetwork(param0: android.net.Network): boolean;

            public requestBandwidthUpdate(param0: android.net.Network): boolean;

            public removeDefaultNetworkActiveListener(param0: android.net.ConnectivityManager.OnNetworkActiveListener): void;

            public getNetworkInfo(param0: android.net.Network): android.net.NetworkInfo;

            public isActiveNetworkMetered(): boolean;

            public static getProcessDefaultNetwork(): android.net.Network;

            public requestNetwork(param0: android.net.NetworkRequest, param1: android.app.PendingIntent): void;

            public getActiveNetwork(): android.net.Network;

            public getBoundNetworkForProcess(): android.net.Network;

            public addDefaultNetworkActiveListener(param0: android.net.ConnectivityManager.OnNetworkActiveListener): void;

            public unregisterNetworkCallback(param0: android.net.ConnectivityManager.NetworkCallback): void;

            public registerNetworkCallback(param0: android.net.NetworkRequest, param1: android.net.ConnectivityManager.NetworkCallback): void;

            public reportNetworkConnectivity(param0: android.net.Network, param1: boolean): void;

            public registerNetworkCallback(param0: android.net.NetworkRequest, param1: android.app.PendingIntent): void;

            public setNetworkPreference(param0: number): void;

            public isDefaultNetworkActive(): boolean;

            public getAllNetworkInfo(): native.Array<android.net.NetworkInfo>;

            public unregisterNetworkCallback(param0: android.app.PendingIntent): void;
        }
        export module ConnectivityManager {
            export class NetworkCallback extends javalangObject {
                public onLinkPropertiesChanged(param0: android.net.Network, param1: android.net.LinkProperties): void;

                public onLosing(param0: android.net.Network, param1: number): void;

                public onAvailable(param0: android.net.Network): void;

                public onLost(param0: android.net.Network): void;

                public onCapabilitiesChanged(param0: android.net.Network, param1: android.net.NetworkCapabilities): void;

                public constructor();
            }
            export class OnNetworkActiveListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.net.ConnectivityManager$OnNetworkActiveListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onNetworkActive(): void;
                });

                public onNetworkActive(): void;
            }
        }
    }
}

declare module android {
    export module net {
        export class Credentials extends javalangObject {
            public constructor(param0: number, param1: number, param2: number);

            public getUid(): number;

            public getGid(): number;

            public getPid(): number;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module net {
        export class DhcpInfo extends javalangObject implements android.os.Parcelable {
            public dns1: number;
            public dns2: number;
            public gateway: number;
            public ipAddress: number;
            public leaseDuration: number;
            public netmask: number;
            public serverAddress: number;

            public toString(): string;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public constructor();
        }
    }
}

import javanetInetAddress = java.net.InetAddress;
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
declare module android {
    export module net {
        export class IpPrefix extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public toString(): string;

            public getAddress(): javanetInetAddress;

            public equals(param0: javalangObject): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public contains(param0: javanetInetAddress): boolean;

            public getPrefixLength(): number;

            public getRawAddress(): native.Array<number>;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
declare module android {
    export module net {
        export class LinkAddress extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public getScope(): number;

            public toString(): string;

            public getAddress(): javanetInetAddress;

            public getFlags(): number;

            public equals(param0: javalangObject): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getPrefixLength(): number;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.net.ProxyInfo.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module net {
        export class LinkProperties extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public getLinkAddresses(): javautilList;

            public getDnsServers(): javautilList;

            public toString(): string;

            public getDomains(): string;

            public getRoutes(): javautilList;

            public equals(param0: javalangObject): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getInterfaceName(): string;

            public getHttpProxy(): android.net.ProxyInfo;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.net.LocalSocket.d.ts" />
/// <reference path="./android.net.LocalSocketAddress.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module net {
        export class LocalServerSocket extends javalangObject {
            public getLocalSocketAddress(): android.net.LocalSocketAddress;

            public getFileDescriptor(): javaioFileDescriptor;

            public constructor(param0: javaioFileDescriptor);

            public accept(): android.net.LocalSocket;

            public close(): void;

            public constructor(param0: string);
        }
    }
}

/// <reference path="./android.net.Credentials.d.ts" />
/// <reference path="./android.net.LocalSocketAddress.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
declare module android {
    export module net {
        export class LocalSocket extends javalangObject implements javaioCloseable {
            public static SOCKET_DGRAM: number;
            public static SOCKET_SEQPACKET: number;
            public static SOCKET_STREAM: number;

            public shutdownOutput(): void;

            public isClosed(): boolean;

            public connect(param0: android.net.LocalSocketAddress, param1: number): void;

            public setSendBufferSize(param0: number): void;

            public connect(param0: android.net.LocalSocketAddress): void;

            public getOutputStream(): javaioOutputStream;

            public getLocalSocketAddress(): android.net.LocalSocketAddress;

            public isInputShutdown(): boolean;

            public setReceiveBufferSize(param0: number): void;

            public setFileDescriptorsForSend(param0: native.Array<javaioFileDescriptor>): void;

            public bind(param0: android.net.LocalSocketAddress): void;

            public setSoTimeout(param0: number): void;

            public isConnected(): boolean;

            public close(): void;

            public isOutputShutdown(): boolean;

            public getPeerCredentials(): android.net.Credentials;

            public getSoTimeout(): number;

            public getSendBufferSize(): number;

            public isBound(): boolean;

            public constructor(param0: number);

            public getReceiveBufferSize(): number;

            public constructor();

            public shutdownInput(): void;

            public toString(): string;

            public getFileDescriptor(): javaioFileDescriptor;

            public getRemoteSocketAddress(): android.net.LocalSocketAddress;

            public getAncillaryFileDescriptors(): native.Array<javaioFileDescriptor>;

            public getInputStream(): javaioInputStream;
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module net {
        export class LocalSocketAddress extends javalangObject {
            public getName(): string;

            public getNamespace(): android.net.LocalSocketAddress.Namespace;

            public constructor(param0: string, param1: android.net.LocalSocketAddress.Namespace);
            public constructor(param0: string);
        }
        export module LocalSocketAddress {
            export class Namespace extends javalangEnum {
                public static ABSTRACT: android.net.LocalSocketAddress.Namespace;
                public static FILESYSTEM: android.net.LocalSocketAddress.Namespace;
                public static RESERVED: android.net.LocalSocketAddress.Namespace;

                public static values(): native.Array<android.net.LocalSocketAddress.Namespace>;

                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
                public static valueOf(param0: string): android.net.LocalSocketAddress.Namespace;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module android {
    export module net {
        export class MailTo extends javalangObject {
            public static MAILTO_SCHEME: string;

            public getHeaders(): javautilMap;

            public toString(): string;

            public getTo(): string;

            public getSubject(): string;

            public getCc(): string;

            public static isMailTo(param0: string): boolean;

            public static parse(param0: string): android.net.MailTo;

            public getBody(): string;
        }
    }
}

import javaxnetSocketFactory = javax.net.SocketFactory;
import javanetURL = java.net.URL;
import javanetURLConnection = java.net.URLConnection;
import javanetProxy = java.net.Proxy;
import javanetDatagramSocket = java.net.DatagramSocket;
import javanetSocket = java.net.Socket;
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.DatagramSocket.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.Proxy.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.net.URLConnection.d.ts" />
/// <reference path="./javax.net.SocketFactory.d.ts" />
declare module android {
    export module net {
        export class Network extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public getNetworkHandle(): number;

            public bindSocket(param0: javaioFileDescriptor): void;

            public equals(param0: javalangObject): boolean;

            public bindSocket(param0: javanetSocket): void;

            public getAllByName(param0: string): native.Array<javanetInetAddress>;

            public openConnection(param0: javanetURL): javanetURLConnection;

            public bindSocket(param0: javanetDatagramSocket): void;

            public getByName(param0: string): javanetInetAddress;

            public openConnection(param0: javanetURL, param1: javanetProxy): javanetURLConnection;

            public toString(): string;

            public getSocketFactory(): javaxnetSocketFactory;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module net {
        export class NetworkCapabilities extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static NET_CAPABILITY_CAPTIVE_PORTAL: number;
            public static NET_CAPABILITY_CBS: number;
            public static NET_CAPABILITY_DUN: number;
            public static NET_CAPABILITY_EIMS: number;
            public static NET_CAPABILITY_FOTA: number;
            public static NET_CAPABILITY_IA: number;
            public static NET_CAPABILITY_IMS: number;
            public static NET_CAPABILITY_INTERNET: number;
            public static NET_CAPABILITY_MMS: number;
            public static NET_CAPABILITY_NOT_METERED: number;
            public static NET_CAPABILITY_NOT_RESTRICTED: number;
            public static NET_CAPABILITY_NOT_VPN: number;
            public static NET_CAPABILITY_RCS: number;
            public static NET_CAPABILITY_SUPL: number;
            public static NET_CAPABILITY_TRUSTED: number;
            public static NET_CAPABILITY_VALIDATED: number;
            public static NET_CAPABILITY_WIFI_P2P: number;
            public static NET_CAPABILITY_XCAP: number;
            public static TRANSPORT_BLUETOOTH: number;
            public static TRANSPORT_CELLULAR: number;
            public static TRANSPORT_ETHERNET: number;
            public static TRANSPORT_VPN: number;
            public static TRANSPORT_WIFI: number;

            public hasCapability(param0: number): boolean;

            public toString(): string;

            public getLinkUpstreamBandwidthKbps(): number;

            public equals(param0: javalangObject): boolean;

            public constructor(param0: android.net.NetworkCapabilities);

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public hasTransport(param0: number): boolean;

            public getLinkDownstreamBandwidthKbps(): number;

            public hashCode(): number;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module net {
        export class NetworkInfo extends javalangObject implements android.os.Parcelable {
            public isFailover(): boolean;

            public getType(): number;

            public getSubtype(): number;

            public getDetailedState(): android.net.NetworkInfo.DetailedState;

            public getSubtypeName(): string;

            public isRoaming(): boolean;

            public getTypeName(): string;

            public isConnectedOrConnecting(): boolean;

            public getState(): android.net.NetworkInfo.State;

            public getExtraInfo(): string;

            public getReason(): string;

            public toString(): string;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public isConnected(): boolean;

            public isAvailable(): boolean;
        }
        export module NetworkInfo {
            export class DetailedState extends javalangEnum {
                public static AUTHENTICATING: android.net.NetworkInfo.DetailedState;
                public static BLOCKED: android.net.NetworkInfo.DetailedState;
                public static CAPTIVE_PORTAL_CHECK: android.net.NetworkInfo.DetailedState;
                public static CONNECTED: android.net.NetworkInfo.DetailedState;
                public static CONNECTING: android.net.NetworkInfo.DetailedState;
                public static DISCONNECTED: android.net.NetworkInfo.DetailedState;
                public static DISCONNECTING: android.net.NetworkInfo.DetailedState;
                public static FAILED: android.net.NetworkInfo.DetailedState;
                public static IDLE: android.net.NetworkInfo.DetailedState;
                public static OBTAINING_IPADDR: android.net.NetworkInfo.DetailedState;
                public static SCANNING: android.net.NetworkInfo.DetailedState;
                public static SUSPENDED: android.net.NetworkInfo.DetailedState;
                public static VERIFYING_POOR_LINK: android.net.NetworkInfo.DetailedState;

                public static values(): native.Array<android.net.NetworkInfo.DetailedState>;

                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
                public static valueOf(param0: string): android.net.NetworkInfo.DetailedState;
            }
            export class State extends javalangEnum {
                public static CONNECTED: android.net.NetworkInfo.State;
                public static CONNECTING: android.net.NetworkInfo.State;
                public static DISCONNECTED: android.net.NetworkInfo.State;
                public static DISCONNECTING: android.net.NetworkInfo.State;
                public static SUSPENDED: android.net.NetworkInfo.State;
                public static UNKNOWN: android.net.NetworkInfo.State;

                public static values(): native.Array<android.net.NetworkInfo.State>;

                public static valueOf(param0: string): android.net.NetworkInfo.State;
                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
        }
    }
}

/// <reference path="./android.net.NetworkRequest.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module net {
        export class NetworkRequest extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public toString(): string;

            public equals(param0: javalangObject): boolean;

            public describeContents(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public hashCode(): number;
        }
        export module NetworkRequest {
            export class Builder extends javalangObject {
                public addTransportType(param0: number): android.net.NetworkRequest.Builder;

                public removeTransportType(param0: number): android.net.NetworkRequest.Builder;

                public build(): android.net.NetworkRequest;

                public addCapability(param0: number): android.net.NetworkRequest.Builder;

                public removeCapability(param0: number): android.net.NetworkRequest.Builder;

                public setNetworkSpecifier(param0: string): android.net.NetworkRequest.Builder;

                public constructor();
            }
        }
    }
}

declare module android {
    export module net {
        export class ParseException extends javalangRuntimeException {
            public response: string;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
declare module android {
    export module net {
        export class Proxy extends javalangObject {
            public static EXTRA_PROXY_INFO: string;
            public static PROXY_CHANGE_ACTION: string;

            public static getPort(param0: android.content.Context): number;

            public static getDefaultPort(): number;

            public static getHost(param0: android.content.Context): string;

            public static getDefaultHost(): string;

            public constructor();
        }
    }
}

/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module net {
        export class ProxyInfo extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public static buildDirectProxy(param0: string, param1: number, param2: javautilList): android.net.ProxyInfo;

            public toString(): string;

            public getExclusionList(): native.Array<string>;

            public equals(param0: javalangObject): boolean;

            public static buildDirectProxy(param0: string, param1: number): android.net.ProxyInfo;

            public describeContents(): number;

            public getHost(): string;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getPacFileUrl(): android.net.Uri;

            public getPort(): number;

            public static buildPacProxy(param0: android.net.Uri): android.net.ProxyInfo;

            public hashCode(): number;
        }
    }
}

import javaxnetsslSSLEngine = javax.net.ssl.SSLEngine;
import javaxcryptoSecretKey = javax.crypto.SecretKey;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
/// <reference path="./javax.crypto.SecretKey.d.ts" />
/// <reference path="./javax.net.ssl.SSLEngine.d.ts" />
declare module android {
    export module net {
        export abstract class PskKeyManager extends javalangObject {
            public static MAX_IDENTITY_HINT_LENGTH_BYTES: number;
            public static MAX_IDENTITY_LENGTH_BYTES: number;
            public static MAX_KEY_LENGTH_BYTES: number;

            public getKey(param0: string, param1: string, param2: javaxnetsslSSLEngine): javaxcryptoSecretKey;

            public chooseServerKeyIdentityHint(param0: javanetSocket): string;

            public chooseClientKeyIdentity(param0: string, param1: javaxnetsslSSLEngine): string;

            public getKey(param0: string, param1: string, param2: javanetSocket): javaxcryptoSecretKey;

            public constructor();

            public chooseClientKeyIdentity(param0: string, param1: javanetSocket): string;

            public chooseServerKeyIdentityHint(param0: javaxnetsslSSLEngine): string;
        }
    }
}

/// <reference path="./android.net.IpPrefix.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
declare module android {
    export module net {
        export class RouteInfo extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public getGateway(): javanetInetAddress;

            public toString(): string;

            public isDefaultRoute(): boolean;

            public equals(param0: javalangObject): boolean;

            public matches(param0: javanetInetAddress): boolean;

            public describeContents(): number;

            public getInterface(): string;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getDestination(): android.net.IpPrefix;

            public hashCode(): number;
        }
    }
}

import javaxnetsslSSLSocketFactory = javax.net.ssl.SSLSocketFactory;
import javaxnetsslTrustManager = javax.net.ssl.TrustManager;
import javaxnetsslKeyManager = javax.net.ssl.KeyManager;
/// <reference path="./android.net.SSLSessionCache.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
/// <reference path="./javax.net.SocketFactory.d.ts" />
/// <reference path="./javax.net.ssl.KeyManager.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocketFactory.d.ts" />
/// <reference path="./javax.net.ssl.TrustManager.d.ts" />
declare module android {
    export module net {
        export class SSLCertificateSocketFactory extends javaxnetsslSSLSocketFactory {
            public static getDefault(param0: number, param1: android.net.SSLSessionCache): javaxnetsslSSLSocketFactory;

            public createSocket(param0: javanetInetAddress, param1: number): javanetSocket;

            public setNpnProtocols(param0: native.Array<native.Array<number>>): void;

            public getNpnSelectedProtocol(param0: javanetSocket): native.Array<number>;

            public createSocket(param0: javanetInetAddress, param1: number, param2: javanetInetAddress, param3: number): javanetSocket;

            public getSupportedCipherSuites(): native.Array<string>;

            public constructor(param0: number);

            public getDefaultCipherSuites(): native.Array<string>;

            public setTrustManagers(param0: native.Array<javaxnetsslTrustManager>): void;

            public setHostname(param0: javanetSocket, param1: string): void;

            public constructor();

            public static getDefault(): javaxnetSocketFactory;

            public createSocket(): javanetSocket;

            public static getInsecure(param0: number, param1: android.net.SSLSessionCache): javaxnetsslSSLSocketFactory;

            public setKeyManagers(param0: native.Array<javaxnetsslKeyManager>): void;

            public createSocket(param0: string, param1: number, param2: javanetInetAddress, param3: number): javanetSocket;
            public createSocket(param0: javanetSocket, param1: string, param2: number, param3: boolean): javanetSocket;

            public static getDefault(param0: number): javaxnetSocketFactory;

            public setUseSessionTickets(param0: javanetSocket, param1: boolean): void;

            public createSocket(param0: string, param1: number): javanetSocket;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.io.File.d.ts" />
declare module android {
    export module net {
        export class SSLSessionCache extends javalangObject {
            public constructor(param0: android.content.Context);
            public constructor(param0: javaioFile);
        }
    }
}

/// <reference path="./java.net.Socket.d.ts" />
declare module android {
    export module net {
        export class TrafficStats extends javalangObject {
            public static UNSUPPORTED: number;

            public static getUidUdpTxBytes(param0: number): number;

            public static incrementOperationCount(param0: number, param1: number): void;

            public static getUidTcpTxSegments(param0: number): number;

            public static untagSocket(param0: javanetSocket): void;

            public static getUidTxBytes(param0: number): number;

            public static setThreadStatsTag(param0: number): void;

            public static getUidUdpRxPackets(param0: number): number;

            public static getUidUdpTxPackets(param0: number): number;

            public static getThreadStatsTag(): number;

            public static getTotalRxBytes(): number;

            public static clearThreadStatsTag(): void;

            public static getUidTcpTxBytes(param0: number): number;

            public static getMobileTxPackets(): number;

            public static getUidUdpRxBytes(param0: number): number;

            public static getUidRxPackets(param0: number): number;

            public static getMobileRxBytes(): number;

            public static getTotalTxBytes(): number;

            public static getUidTxPackets(param0: number): number;

            public static getUidRxBytes(param0: number): number;

            public constructor();

            public static incrementOperationCount(param0: number): void;

            public static getMobileRxPackets(): number;

            public static tagSocket(param0: javanetSocket): void;

            public static getUidTcpRxSegments(param0: number): number;

            public static getMobileTxBytes(): number;

            public static getUidTcpRxBytes(param0: number): number;

            public static getTotalRxPackets(): number;

            public static getTotalTxPackets(): number;
        }
    }
}

/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module android {
    export module net {
        export abstract class Uri extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static EMPTY: android.net.Uri;

            public static decode(param0: string): string;

            public getFragment(): string;

            public static encode(param0: string, param1: string): string;

            public getEncodedPath(): string;

            public equals(param0: javalangObject): boolean;

            public getUserInfo(): string;

            public getHost(): string;

            public getEncodedAuthority(): string;

            public isHierarchical(): boolean;

            public getQueryParameter(param0: string): string;

            public getSchemeSpecificPart(): string;

            public getAuthority(): string;

            public getScheme(): string;

            public getEncodedSchemeSpecificPart(): string;

            public buildUpon(): android.net.Uri.Builder;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getQuery(): string;

            public getBooleanQueryParameter(param0: string, param1: boolean): boolean;

            public isOpaque(): boolean;

            public getPathSegments(): javautilList;

            public normalizeScheme(): android.net.Uri;

            public static writeToParcel(param0: android.os.Parcel, param1: android.net.Uri): void;

            public getEncodedUserInfo(): string;

            public getEncodedQuery(): string;

            public static encode(param0: string): string;

            public static fromFile(param0: javaioFile): android.net.Uri;

            public getLastPathSegment(): string;

            public isRelative(): boolean;

            public getEncodedFragment(): string;

            public getQueryParameterNames(): javautilSet;

            public static withAppendedPath(param0: android.net.Uri, param1: string): android.net.Uri;

            public getPath(): string;

            public toString(): string;

            public static parse(param0: string): android.net.Uri;

            public isAbsolute(): boolean;

            public compareTo(param0: android.net.Uri): number;

            public static fromParts(param0: string, param1: string, param2: string): android.net.Uri;

            public describeContents(): number;

            public getQueryParameters(param0: string): javautilList;

            public getPort(): number;

            public hashCode(): number;
        }
        export module Uri {
            export class Builder extends javalangObject {
                public build(): android.net.Uri;

                public scheme(param0: string): android.net.Uri.Builder;

                public appendEncodedPath(param0: string): android.net.Uri.Builder;

                public appendQueryParameter(param0: string, param1: string): android.net.Uri.Builder;

                public encodedOpaquePart(param0: string): android.net.Uri.Builder;

                public encodedFragment(param0: string): android.net.Uri.Builder;

                public encodedQuery(param0: string): android.net.Uri.Builder;

                public appendPath(param0: string): android.net.Uri.Builder;

                public toString(): string;

                public fragment(param0: string): android.net.Uri.Builder;

                public constructor();

                public encodedPath(param0: string): android.net.Uri.Builder;

                public clearQuery(): android.net.Uri.Builder;

                public authority(param0: string): android.net.Uri.Builder;

                public path(param0: string): android.net.Uri.Builder;

                public query(param0: string): android.net.Uri.Builder;

                public opaquePart(param0: string): android.net.Uri.Builder;

                public encodedAuthority(param0: string): android.net.Uri.Builder;
            }
        }
    }
}

/// <reference path="./android.net.UrlQuerySanitizer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module android {
    export module net {
        export class UrlQuerySanitizer extends javalangObject {
            public static getAllButNulAndAngleBracketsLegal(): android.net.UrlQuerySanitizer.ValueSanitizer;

            public parseQuery(param0: string): void;

            public static getAmpLegal(): android.net.UrlQuerySanitizer.ValueSanitizer;

            public getEffectiveValueSanitizer(param0: string): android.net.UrlQuerySanitizer.ValueSanitizer;

            public parseEntry(param0: string, param1: string): void;

            public static getAmpAndSpaceLegal(): android.net.UrlQuerySanitizer.ValueSanitizer;

            public static getSpaceLegal(): android.net.UrlQuerySanitizer.ValueSanitizer;

            public getAllowUnregisteredParamaters(): boolean;

            public setPreferFirstRepeatedParameter(param0: boolean): void;

            public constructor(param0: string);

            public parseUrl(param0: string): void;

            public getValueSanitizer(param0: string): android.net.UrlQuerySanitizer.ValueSanitizer;

            public getParameterList(): javautilList;

            public getPreferFirstRepeatedParameter(): boolean;

            public clear(): void;

            public static getAllButWhitespaceLegal(): android.net.UrlQuerySanitizer.ValueSanitizer;

            public static getAllButNulLegal(): android.net.UrlQuerySanitizer.ValueSanitizer;

            public static getUrlAndSpaceLegal(): android.net.UrlQuerySanitizer.ValueSanitizer;

            public isHexDigit(param0: string): boolean;

            public unescape(param0: string): string;

            public static getUrlLegal(): android.net.UrlQuerySanitizer.ValueSanitizer;

            public addSanitizedEntry(param0: string, param1: string): void;

            public decodeHexDigit(param0: string): number;

            public constructor();

            public setUnregisteredParameterValueSanitizer(param0: android.net.UrlQuerySanitizer.ValueSanitizer): void;

            public getValue(param0: string): string;

            public hasParameter(param0: string): boolean;

            public getUnregisteredParameterValueSanitizer(): android.net.UrlQuerySanitizer.ValueSanitizer;

            public registerParameter(param0: string, param1: android.net.UrlQuerySanitizer.ValueSanitizer): void;

            public static getAllIllegal(): android.net.UrlQuerySanitizer.ValueSanitizer;

            public getParameterSet(): javautilSet;

            public registerParameters(param0: native.Array<string>, param1: android.net.UrlQuerySanitizer.ValueSanitizer): void;

            public setAllowUnregisteredParamaters(param0: boolean): void;
        }
        export module UrlQuerySanitizer {
            export class IllegalCharacterValueSanitizer extends javalangObject implements android.net.UrlQuerySanitizer.ValueSanitizer {
                public static ALL_BUT_NUL_AND_ANGLE_BRACKETS_LEGAL: number;
                public static ALL_BUT_NUL_LEGAL: number;
                public static ALL_BUT_WHITESPACE_LEGAL: number;
                public static ALL_ILLEGAL: number;
                public static ALL_OK: number;
                public static ALL_WHITESPACE_OK: number;
                public static AMP_AND_SPACE_LEGAL: number;
                public static AMP_LEGAL: number;
                public static AMP_OK: number;
                public static DQUOTE_OK: number;
                public static GT_OK: number;
                public static LT_OK: number;
                public static NON_7_BIT_ASCII_OK: number;
                public static NUL_OK: number;
                public static OTHER_WHITESPACE_OK: number;
                public static PCT_OK: number;
                public static SCRIPT_URL_OK: number;
                public static SPACE_LEGAL: number;
                public static SPACE_OK: number;
                public static SQUOTE_OK: number;
                public static URL_AND_SPACE_LEGAL: number;
                public static URL_LEGAL: number;

                public sanitize(param0: string): string;

                public constructor(param0: number);
            }
            export class ParameterValuePair extends javalangObject {
                public mParameter: string;
                public mValue: string;

                public constructor(param0: android.net.UrlQuerySanitizer, param1: string, param2: string);
            }
            export class ValueSanitizer extends javalangObject {
                /**
                 * Constructs a new instance of the android.net.UrlQuerySanitizer$ValueSanitizer interface with the provided implementation.
                 */
                public constructor(implementation: {
                    sanitize(param0: string): string;
                });

                public sanitize(param0: string): string;
            }
        }
    }
}

/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.net.Network.d.ts" />
/// <reference path="./android.net.VpnService.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.DatagramSocket.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
declare module android {
    export module net {
        export class VpnService extends android.app.Service {
            public static SERVICE_INTERFACE: string;

            public static prepare(param0: android.content.Context): android.content.Intent;

            public protect(param0: number): boolean;
            public protect(param0: javanetDatagramSocket): boolean;

            public onTrimMemory(param0: number): void;

            public onBind(param0: android.content.Intent): android.os.IBinder;

            public constructor(param0: android.content.Context);

            public onRevoke(): void;

            public setUnderlyingNetworks(param0: native.Array<android.net.Network>): boolean;

            public constructor();

            public protect(param0: javanetSocket): boolean;
        }
        export module VpnService {
            export class Builder extends javalangObject {
                public addAddress(param0: javanetInetAddress, param1: number): android.net.VpnService.Builder;

                public addRoute(param0: javanetInetAddress, param1: number): android.net.VpnService.Builder;

                public addSearchDomain(param0: string): android.net.VpnService.Builder;

                public allowFamily(param0: number): android.net.VpnService.Builder;

                public setMtu(param0: number): android.net.VpnService.Builder;

                public addDisallowedApplication(param0: string): android.net.VpnService.Builder;

                public setUnderlyingNetworks(param0: native.Array<android.net.Network>): android.net.VpnService.Builder;

                public addAddress(param0: string, param1: number): android.net.VpnService.Builder;

                public setSession(param0: string): android.net.VpnService.Builder;

                public setBlocking(param0: boolean): android.net.VpnService.Builder;

                public setConfigureIntent(param0: android.app.PendingIntent): android.net.VpnService.Builder;

                public addDnsServer(param0: string): android.net.VpnService.Builder;

                public allowBypass(): android.net.VpnService.Builder;

                public addRoute(param0: string, param1: number): android.net.VpnService.Builder;

                public addDnsServer(param0: javanetInetAddress): android.net.VpnService.Builder;

                public addAllowedApplication(param0: string): android.net.VpnService.Builder;

                public constructor(param0: android.net.VpnService);

                public establish(): android.os.ParcelFileDescriptor;
            }
        }
    }
}

import javanetResponseCache = java.net.ResponseCache;
import javanetURI = java.net.URI;
import javanetCacheResponse = java.net.CacheResponse;
import javanetCacheRequest = java.net.CacheRequest;
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.CacheRequest.d.ts" />
/// <reference path="./java.net.CacheResponse.d.ts" />
/// <reference path="./java.net.URI.d.ts" />
/// <reference path="./java.net.URLConnection.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module android {
    export module net {
        export module http {
            export class HttpResponseCache extends javanetResponseCache implements javaioCloseable {
                public getRequestCount(): number;

                public get(param0: javanetURI, param1: string, param2: javautilMap): javanetCacheResponse;

                public getHitCount(): number;

                public close(): void;

                public static getInstalled(): android.net.http.HttpResponseCache;

                public put(param0: javanetURI, param1: javanetURLConnection): javanetCacheRequest;

                public maxSize(): number;

                public delete(): void;

                public static install(param0: javaioFile, param1: number): android.net.http.HttpResponseCache;

                public getNetworkCount(): number;

                public size(): number;

                public flush(): void;
            }
        }
    }
}

import javautilDate = java.util.Date;
import javasecuritycertX509Certificate = java.security.cert.X509Certificate;
/// <reference path="./android.net.http.SslCertificate.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module android {
    export module net {
        export module http {
            export class SslCertificate extends javalangObject {
                public getValidNotAfterDate(): javautilDate;

                public getIssuedTo(): android.net.http.SslCertificate.DName;

                public getIssuedBy(): android.net.http.SslCertificate.DName;

                public constructor(param0: string, param1: string, param2: string, param3: string);
                public constructor(param0: string, param1: string, param2: javautilDate, param3: javautilDate);
                public constructor(param0: javasecuritycertX509Certificate);

                public static restoreState(param0: android.os.Bundle): android.net.http.SslCertificate;

                public getValidNotBeforeDate(): javautilDate;

                public getValidNotAfter(): string;

                public toString(): string;

                public static saveState(param0: android.net.http.SslCertificate): android.os.Bundle;

                public getValidNotBefore(): string;
            }
            export module SslCertificate {
                export class DName extends javalangObject {
                    public getCName(): string;

                    public getDName(): string;

                    public getOName(): string;

                    public getUName(): string;

                    public constructor(param0: android.net.http.SslCertificate, param1: string);
                }
            }
        }
    }
}

/// <reference path="./android.net.http.SslCertificate.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />
declare module android {
    export module net {
        export module http {
            export class SslError extends javalangObject {
                public static SSL_DATE_INVALID: number;
                public static SSL_EXPIRED: number;
                public static SSL_IDMISMATCH: number;
                public static SSL_INVALID: number;
                public static SSL_MAX_ERROR: number;
                public static SSL_NOTYETVALID: number;
                public static SSL_UNTRUSTED: number;

                public hasError(param0: number): boolean;

                public constructor(param0: number, param1: javasecuritycertX509Certificate);

                public addError(param0: number): boolean;

                public getCertificate(): android.net.http.SslCertificate;

                public getPrimaryError(): number;

                public constructor(param0: number, param1: android.net.http.SslCertificate);
                public constructor(param0: number, param1: android.net.http.SslCertificate, param2: string);

                public getUrl(): string;

                public constructor(param0: number, param1: javasecuritycertX509Certificate, param2: string);

                public toString(): string;
            }
        }
    }
}

import javaxnetsslX509TrustManager = javax.net.ssl.X509TrustManager;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./javax.net.ssl.X509TrustManager.d.ts" />
declare module android {
    export module net {
        export module http {
            export class X509TrustManagerExtensions extends javalangObject {
                public checkServerTrusted(param0: native.Array<javasecuritycertX509Certificate>, param1: string, param2: string): javautilList;

                public constructor(param0: javaxnetsslX509TrustManager);

                public isUserAddedCertificate(param0: javasecuritycertX509Certificate): boolean;
            }
        }
    }
}

/// <reference path="./android.net.nsd.NsdServiceInfo.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module net {
        export module nsd {
            export class NsdManager extends javalangObject {
                public static ACTION_NSD_STATE_CHANGED: string;
                public static EXTRA_NSD_STATE: string;
                public static FAILURE_ALREADY_ACTIVE: number;
                public static FAILURE_INTERNAL_ERROR: number;
                public static FAILURE_MAX_LIMIT: number;
                public static NSD_STATE_DISABLED: number;
                public static NSD_STATE_ENABLED: number;
                public static PROTOCOL_DNS_SD: number;

                public discoverServices(param0: string, param1: number, param2: android.net.nsd.NsdManager.DiscoveryListener): void;

                public stopServiceDiscovery(param0: android.net.nsd.NsdManager.DiscoveryListener): void;

                public resolveService(param0: android.net.nsd.NsdServiceInfo, param1: android.net.nsd.NsdManager.ResolveListener): void;

                public unregisterService(param0: android.net.nsd.NsdManager.RegistrationListener): void;

                public registerService(param0: android.net.nsd.NsdServiceInfo, param1: number, param2: android.net.nsd.NsdManager.RegistrationListener): void;
            }
            export module NsdManager {
                export class DiscoveryListener extends javalangObject {
                    /**
                     * Constructs a new instance of the android.net.nsd.NsdManager$DiscoveryListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onStartDiscoveryFailed(param0: string, param1: number): void;
                        onStopDiscoveryFailed(param0: string, param1: number): void;
                        onDiscoveryStarted(param0: string): void;
                        onDiscoveryStopped(param0: string): void;
                        onServiceFound(param0: android.net.nsd.NsdServiceInfo): void;
                        onServiceLost(param0: android.net.nsd.NsdServiceInfo): void;
                    });

                    public onServiceLost(param0: android.net.nsd.NsdServiceInfo): void;

                    public onServiceFound(param0: android.net.nsd.NsdServiceInfo): void;

                    public onStartDiscoveryFailed(param0: string, param1: number): void;

                    public onDiscoveryStarted(param0: string): void;

                    public onDiscoveryStopped(param0: string): void;

                    public onStopDiscoveryFailed(param0: string, param1: number): void;
                }
                export class RegistrationListener extends javalangObject {
                    /**
                     * Constructs a new instance of the android.net.nsd.NsdManager$RegistrationListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onRegistrationFailed(param0: android.net.nsd.NsdServiceInfo, param1: number): void;
                        onUnregistrationFailed(param0: android.net.nsd.NsdServiceInfo, param1: number): void;
                        onServiceRegistered(param0: android.net.nsd.NsdServiceInfo): void;
                        onServiceUnregistered(param0: android.net.nsd.NsdServiceInfo): void;
                    });

                    public onRegistrationFailed(param0: android.net.nsd.NsdServiceInfo, param1: number): void;

                    public onUnregistrationFailed(param0: android.net.nsd.NsdServiceInfo, param1: number): void;

                    public onServiceRegistered(param0: android.net.nsd.NsdServiceInfo): void;

                    public onServiceUnregistered(param0: android.net.nsd.NsdServiceInfo): void;
                }
                export class ResolveListener extends javalangObject {
                    /**
                     * Constructs a new instance of the android.net.nsd.NsdManager$ResolveListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onResolveFailed(param0: android.net.nsd.NsdServiceInfo, param1: number): void;
                        onServiceResolved(param0: android.net.nsd.NsdServiceInfo): void;
                    });

                    public onResolveFailed(param0: android.net.nsd.NsdServiceInfo, param1: number): void;

                    public onServiceResolved(param0: android.net.nsd.NsdServiceInfo): void;
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module android {
    export module net {
        export module nsd {
            export class NsdServiceInfo extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public setServiceType(param0: string): void;

                public getServiceName(): string;

                public setPort(param0: number): void;

                public getHost(): javanetInetAddress;

                public getPort(): number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public setHost(param0: javanetInetAddress): void;

                public getServiceType(): string;

                public toString(): string;

                public constructor();

                public removeAttribute(param0: string): void;

                public setAttribute(param0: string, param1: string): void;

                public describeContents(): number;

                public setServiceName(param0: string): void;

                public getAttributes(): javautilMap;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module net {
        export module rtp {
            export class AudioCodec extends javalangObject {
                public static AMR: android.net.rtp.AudioCodec;
                public static GSM: android.net.rtp.AudioCodec;
                public static GSM_EFR: android.net.rtp.AudioCodec;
                public static PCMA: android.net.rtp.AudioCodec;
                public static PCMU: android.net.rtp.AudioCodec;
                public fmtp: string;
                public rtpmap: string;
                public type: number;

                public static getCodec(param0: number, param1: string, param2: string): android.net.rtp.AudioCodec;

                public static getCodecs(): native.Array<android.net.rtp.AudioCodec>;
            }
        }
    }
}

/// <reference path="./android.net.rtp.AudioStream.d.ts" />
declare module android {
    export module net {
        export module rtp {
            export class AudioGroup extends javalangObject {
                public static MODE_ECHO_SUPPRESSION: number;
                public static MODE_MUTED: number;
                public static MODE_NORMAL: number;
                public static MODE_ON_HOLD: number;

                public getMode(): number;

                public setMode(param0: number): void;

                public sendDtmf(param0: number): void;

                public clear(): void;

                public finalize(): void;

                public getStreams(): native.Array<android.net.rtp.AudioStream>;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.net.rtp.AudioCodec.d.ts" />
/// <reference path="./android.net.rtp.AudioGroup.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
declare module android {
    export module net {
        export module rtp {
            export class AudioStream extends android.net.rtp.RtpStream {
                public setCodec(param0: android.net.rtp.AudioCodec): void;

                public getGroup(): android.net.rtp.AudioGroup;

                public getDtmfType(): number;

                public isBusy(): boolean;

                public join(param0: android.net.rtp.AudioGroup): void;

                public getCodec(): android.net.rtp.AudioCodec;

                public setDtmfType(param0: number): void;

                public constructor(param0: javanetInetAddress);
            }
        }
    }
}

/// <reference path="./java.net.InetAddress.d.ts" />
declare module android {
    export module net {
        export module rtp {
            export class RtpStream extends javalangObject {
                public static MODE_NORMAL: number;
                public static MODE_RECEIVE_ONLY: number;
                public static MODE_SEND_ONLY: number;

                public getMode(): number;

                public setMode(param0: number): void;

                public getLocalAddress(): javanetInetAddress;

                public getLocalPort(): number;

                public release(): void;

                public getRemoteAddress(): javanetInetAddress;

                public isBusy(): boolean;

                public getRemotePort(): number;

                public finalize(): void;

                public associate(param0: javanetInetAddress, param1: number): void;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.sip.SipAudioCall.d.ts" />
/// <reference path="./android.net.sip.SipProfile.d.ts" />
/// <reference path="./android.net.sip.SipSession.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module net {
        export module sip {
            export class SipAudioCall extends javalangObject {
                public close(): void;

                public toggleMute(): void;

                public constructor(param0: android.content.Context, param1: android.net.sip.SipProfile);

                public setListener(param0: android.net.sip.SipAudioCall.Listener): void;

                public startAudio(): void;

                public setSpeakerMode(param0: boolean): void;

                public isInCall(): boolean;

                public isMuted(): boolean;

                public endCall(): void;

                public getLocalProfile(): android.net.sip.SipProfile;

                public sendDtmf(param0: number, param1: android.os.Message): void;
                public sendDtmf(param0: number): void;

                public getState(): number;

                public getPeerProfile(): android.net.sip.SipProfile;

                public attachCall(param0: android.net.sip.SipSession, param1: string): void;

                public makeCall(param0: android.net.sip.SipProfile, param1: android.net.sip.SipSession, param2: number): void;

                public setListener(param0: android.net.sip.SipAudioCall.Listener, param1: boolean): void;

                public isOnHold(): boolean;

                public holdCall(param0: number): void;

                public answerCall(param0: number): void;

                public continueCall(param0: number): void;
            }
            export module SipAudioCall {
                export class Listener extends javalangObject {
                    public onReadyToCall(param0: android.net.sip.SipAudioCall): void;

                    public onRingingBack(param0: android.net.sip.SipAudioCall): void;

                    public onCallEnded(param0: android.net.sip.SipAudioCall): void;

                    public constructor();

                    public onCalling(param0: android.net.sip.SipAudioCall): void;

                    public onCallEstablished(param0: android.net.sip.SipAudioCall): void;

                    public onChanged(param0: android.net.sip.SipAudioCall): void;

                    public onError(param0: android.net.sip.SipAudioCall, param1: number, param2: string): void;

                    public onRinging(param0: android.net.sip.SipAudioCall, param1: android.net.sip.SipProfile): void;

                    public onCallBusy(param0: android.net.sip.SipAudioCall): void;

                    public onCallHeld(param0: android.net.sip.SipAudioCall): void;
                }
            }
        }
    }
}

declare module android {
    export module net {
        export module sip {
            export class SipErrorCode extends javalangObject {
                public static CLIENT_ERROR: number;
                public static CROSS_DOMAIN_AUTHENTICATION: number;
                public static DATA_CONNECTION_LOST: number;
                public static INVALID_CREDENTIALS: number;
                public static INVALID_REMOTE_URI: number;
                public static IN_PROGRESS: number;
                public static NO_ERROR: number;
                public static PEER_NOT_REACHABLE: number;
                public static SERVER_ERROR: number;
                public static SERVER_UNREACHABLE: number;
                public static SOCKET_ERROR: number;
                public static TIME_OUT: number;
                public static TRANSACTION_TERMINTED: number;

                public static toString(param0: number): string;
                public toString(): string;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module net {
        export module sip {
            export class SipException extends javalangException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.net.sip.SipAudioCall.d.ts" />
/// <reference path="./android.net.sip.SipProfile.d.ts" />
/// <reference path="./android.net.sip.SipRegistrationListener.d.ts" />
/// <reference path="./android.net.sip.SipSession.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module net {
        export module sip {
            export class SipManager extends javalangObject {
                public static EXTRA_CALL_ID: string;
                public static EXTRA_OFFER_SD: string;
                public static INCOMING_CALL_RESULT_CODE: number;

                public close(param0: string): void;

                public isRegistered(param0: string): boolean;

                public getSessionFor(param0: android.content.Intent): android.net.sip.SipSession;

                public static isVoipSupported(param0: android.content.Context): boolean;

                public createSipSession(param0: android.net.sip.SipProfile, param1: android.net.sip.SipSession.Listener): android.net.sip.SipSession;

                public static isSipWifiOnly(param0: android.content.Context): boolean;

                public isOpened(param0: string): boolean;

                public makeAudioCall(param0: android.net.sip.SipProfile, param1: android.net.sip.SipProfile, param2: android.net.sip.SipAudioCall.Listener, param3: number): android.net.sip.SipAudioCall;

                public static isApiSupported(param0: android.content.Context): boolean;

                public static newInstance(param0: android.content.Context): android.net.sip.SipManager;

                public static isIncomingCallIntent(param0: android.content.Intent): boolean;

                public static getOfferSessionDescription(param0: android.content.Intent): string;

                public makeAudioCall(param0: string, param1: string, param2: android.net.sip.SipAudioCall.Listener, param3: number): android.net.sip.SipAudioCall;

                public takeAudioCall(param0: android.content.Intent, param1: android.net.sip.SipAudioCall.Listener): android.net.sip.SipAudioCall;

                public open(param0: android.net.sip.SipProfile, param1: android.app.PendingIntent, param2: android.net.sip.SipRegistrationListener): void;

                public static getCallId(param0: android.content.Intent): string;

                public setRegistrationListener(param0: string, param1: android.net.sip.SipRegistrationListener): void;

                public open(param0: android.net.sip.SipProfile): void;

                public unregister(param0: android.net.sip.SipProfile, param1: android.net.sip.SipRegistrationListener): void;

                public register(param0: android.net.sip.SipProfile, param1: number, param2: android.net.sip.SipRegistrationListener): void;
            }
        }
    }
}

/// <reference path="./android.net.sip.SipProfile.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module net {
        export module sip {
            export class SipProfile extends javalangObject implements android.os.Parcelable, javaioSerializable, javalangCloneable {
                public static CREATOR: android.os.Parcelable.Creator;

                public getUserName(): string;

                public getPort(): number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getDisplayName(): string;

                public getProxyAddress(): string;

                public getAuthUserName(): string;

                public getProfileName(): string;

                public getSipDomain(): string;

                public getSendKeepAlive(): boolean;

                public getAutoRegistration(): boolean;

                public getUriString(): string;

                public describeContents(): number;

                public getPassword(): string;

                public getProtocol(): string;
            }
            export module SipProfile {
                export class Builder extends javalangObject {
                    public setPort(param0: number): android.net.sip.SipProfile.Builder;

                    public constructor(param0: string);

                    public build(): android.net.sip.SipProfile;

                    public setPassword(param0: string): android.net.sip.SipProfile.Builder;

                    public setOutboundProxy(param0: string): android.net.sip.SipProfile.Builder;

                    public setAuthUserName(param0: string): android.net.sip.SipProfile.Builder;

                    public setProfileName(param0: string): android.net.sip.SipProfile.Builder;

                    public setDisplayName(param0: string): android.net.sip.SipProfile.Builder;

                    public constructor(param0: string, param1: string);

                    public setAutoRegistration(param0: boolean): android.net.sip.SipProfile.Builder;

                    public setSendKeepAlive(param0: boolean): android.net.sip.SipProfile.Builder;

                    public constructor(param0: android.net.sip.SipProfile);

                    public setProtocol(param0: string): android.net.sip.SipProfile.Builder;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module net {
        export module sip {
            export class SipRegistrationListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.net.sip.SipRegistrationListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onRegistering(param0: string): void;
                    onRegistrationDone(param0: string, param1: number): void;
                    onRegistrationFailed(param0: string, param1: number, param2: string): void;
                });

                public onRegistering(param0: string): void;

                public onRegistrationFailed(param0: string, param1: number, param2: string): void;

                public onRegistrationDone(param0: string, param1: number): void;
            }
        }
    }
}

/// <reference path="./android.net.sip.SipProfile.d.ts" />
/// <reference path="./android.net.sip.SipSession.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module net {
        export module sip {
            export class SipSession extends javalangObject {
                public isInCall(): boolean;

                public getLocalIp(): string;

                public makeCall(param0: android.net.sip.SipProfile, param1: string, param2: number): void;

                public answerCall(param0: string, param1: number): void;

                public unregister(): void;

                public endCall(): void;

                public getLocalProfile(): android.net.sip.SipProfile;

                public changeCall(param0: string, param1: number): void;

                public getState(): number;

                public register(param0: number): void;

                public getPeerProfile(): android.net.sip.SipProfile;

                public setListener(param0: android.net.sip.SipSession.Listener): void;

                public getCallId(): string;
            }
            export module SipSession {
                export class Listener extends javalangObject {
                    public onCalling(param0: android.net.sip.SipSession): void;

                    public onCallBusy(param0: android.net.sip.SipSession): void;

                    public onRinging(param0: android.net.sip.SipSession, param1: android.net.sip.SipProfile, param2: string): void;

                    public onError(param0: android.net.sip.SipSession, param1: number, param2: string): void;

                    public onCallChangeFailed(param0: android.net.sip.SipSession, param1: number, param2: string): void;

                    public onRegistrationDone(param0: android.net.sip.SipSession, param1: number): void;

                    public onRegistrationFailed(param0: android.net.sip.SipSession, param1: number, param2: string): void;

                    public onCallEstablished(param0: android.net.sip.SipSession, param1: string): void;

                    public onRegistrationTimeout(param0: android.net.sip.SipSession): void;

                    public constructor();

                    public onRingingBack(param0: android.net.sip.SipSession): void;

                    public onCallEnded(param0: android.net.sip.SipSession): void;

                    public onRegistering(param0: android.net.sip.SipSession): void;
                }
                export class State extends javalangObject {
                    public static DEREGISTERING: number;
                    public static INCOMING_CALL: number;
                    public static INCOMING_CALL_ANSWERING: number;
                    public static IN_CALL: number;
                    public static NOT_DEFINED: number;
                    public static OUTGOING_CALL: number;
                    public static OUTGOING_CALL_CANCELING: number;
                    public static OUTGOING_CALL_RING_BACK: number;
                    public static PINGING: number;
                    public static READY_TO_CALL: number;
                    public static REGISTERING: number;

                    public toString(): string;
                    public static toString(param0: number): string;
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module net {
        export module wifi {
            export class ScanResult extends javalangObject implements android.os.Parcelable {
                public BSSID: string;
                public static CHANNEL_WIDTH_160MHZ: number;
                public static CHANNEL_WIDTH_20MHZ: number;
                public static CHANNEL_WIDTH_40MHZ: number;
                public static CHANNEL_WIDTH_80MHZ: number;
                public static CHANNEL_WIDTH_80MHZ_PLUS_MHZ: number;
                public SSID: string;
                public capabilities: string;
                public centerFreq0: number;
                public centerFreq1: number;
                public channelWidth: number;
                public frequency: number;
                public level: number;
                public operatorFriendlyName: string;
                public timestamp: number;
                public venueName: string;

                public isPasspointNetwork(): boolean;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public toString(): string;

                public is80211mcResponder(): boolean;
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module net {
        export module wifi {
            export class SupplicantState extends javalangEnum implements android.os.Parcelable {
                public static ASSOCIATED: android.net.wifi.SupplicantState;
                public static ASSOCIATING: android.net.wifi.SupplicantState;
                public static AUTHENTICATING: android.net.wifi.SupplicantState;
                public static COMPLETED: android.net.wifi.SupplicantState;
                public static DISCONNECTED: android.net.wifi.SupplicantState;
                public static DORMANT: android.net.wifi.SupplicantState;
                public static FOUR_WAY_HANDSHAKE: android.net.wifi.SupplicantState;
                public static GROUP_HANDSHAKE: android.net.wifi.SupplicantState;
                public static INACTIVE: android.net.wifi.SupplicantState;
                public static INTERFACE_DISABLED: android.net.wifi.SupplicantState;
                public static INVALID: android.net.wifi.SupplicantState;
                public static SCANNING: android.net.wifi.SupplicantState;
                public static UNINITIALIZED: android.net.wifi.SupplicantState;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public static isValidState(param0: android.net.wifi.SupplicantState): boolean;

                public static values(): native.Array<android.net.wifi.SupplicantState>;

                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
                public static valueOf(param0: string): android.net.wifi.SupplicantState;
            }
        }
    }
}

import javautilBitSet = java.util.BitSet;
/// <reference path="./android.net.wifi.WifiEnterpriseConfig.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.util.BitSet.d.ts" />
declare module android {
    export module net {
        export module wifi {
            export class WifiConfiguration extends javalangObject implements android.os.Parcelable {
                public BSSID: string;
                public FQDN: string;
                public SSID: string;
                public allowedAuthAlgorithms: javautilBitSet;
                public allowedGroupCiphers: javautilBitSet;
                public allowedKeyManagement: javautilBitSet;
                public allowedPairwiseCiphers: javautilBitSet;
                public allowedProtocols: javautilBitSet;
                public enterpriseConfig: android.net.wifi.WifiEnterpriseConfig;
                public hiddenSSID: boolean;
                public networkId: number;
                public preSharedKey: string;
                public priority: number;
                public providerFriendlyName: string;
                public roamingConsortiumIds: native.Array<number>;
                public status: number;
                public wepKeys: native.Array<string>;
                public wepTxKeyIndex: number;

                public isPasspoint(): boolean;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public toString(): string;

                public constructor();
            }
            export module WifiConfiguration {
                export class AuthAlgorithm extends javalangObject {
                    public static LEAP: number;
                    public static OPEN: number;
                    public static SHARED: number;
                    public static strings: native.Array<string>;
                    public static varName: string;
                }
                export class GroupCipher extends javalangObject {
                    public static CCMP: number;
                    public static TKIP: number;
                    public static WEP104: number;
                    public static WEP40: number;
                    public static strings: native.Array<string>;
                    public static varName: string;
                }
                export class KeyMgmt extends javalangObject {
                    public static IEEE8021X: number;
                    public static NONE: number;
                    public static WPA_EAP: number;
                    public static WPA_PSK: number;
                    public static strings: native.Array<string>;
                    public static varName: string;
                }
                export class PairwiseCipher extends javalangObject {
                    public static CCMP: number;
                    public static NONE: number;
                    public static TKIP: number;
                    public static strings: native.Array<string>;
                    public static varName: string;
                }
                export class Protocol extends javalangObject {
                    public static RSN: number;
                    public static WPA: number;
                    public static strings: native.Array<string>;
                    public static varName: string;
                }
                export class Status extends javalangObject {
                    public static CURRENT: number;
                    public static DISABLED: number;
                    public static ENABLED: number;
                    public static strings: native.Array<string>;
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.PrivateKey.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />
declare module android {
    export module net {
        export module wifi {
            export class WifiEnterpriseConfig extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public setPhase2Method(param0: number): void;

                public constructor(param0: android.net.wifi.WifiEnterpriseConfig);

                public setPassword(param0: string): void;

                public setClientKeyEntry(param0: javasecurityPrivateKey, param1: javasecuritycertX509Certificate): void;

                public constructor();

                public setIdentity(param0: string): void;

                public setSubjectMatch(param0: string): void;

                public getRealm(): string;

                public getAnonymousIdentity(): string;

                public getCaCertificate(): javasecuritycertX509Certificate;

                public setPlmn(param0: string): void;

                public setAltSubjectMatch(param0: string): void;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getClientCertificate(): javasecuritycertX509Certificate;

                public getDomainSuffixMatch(): string;

                public toString(): string;

                public getSubjectMatch(): string;

                public setEapMethod(param0: number): void;

                public setAnonymousIdentity(param0: string): void;

                public setCaCertificate(param0: javasecuritycertX509Certificate): void;

                public getIdentity(): string;

                public getPlmn(): string;

                public describeContents(): number;

                public getEapMethod(): number;

                public getPassword(): string;

                public setDomainSuffixMatch(param0: string): void;

                public getPhase2Method(): number;

                public getAltSubjectMatch(): string;

                public setRealm(param0: string): void;
            }
            export module WifiEnterpriseConfig {
                export class Eap extends javalangObject {
                    public static AKA: number;
                    public static AKA_PRIME: number;
                    public static NONE: number;
                    public static PEAP: number;
                    public static PWD: number;
                    public static SIM: number;
                    public static TLS: number;
                    public static TTLS: number;
                }
                export class Phase2 extends javalangObject {
                    public static GTC: number;
                    public static MSCHAP: number;
                    public static MSCHAPV2: number;
                    public static NONE: number;
                    public static PAP: number;
                }
            }
        }
    }
}

/// <reference path="./android.net.wifi.SupplicantState.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module net {
        export module wifi {
            export class WifiInfo extends javalangObject implements android.os.Parcelable {
                public static FREQUENCY_UNITS: string;
                public static LINK_SPEED_UNITS: string;

                public getSSID(): string;

                public getIpAddress(): number;

                public getMacAddress(): string;

                public getSupplicantState(): android.net.wifi.SupplicantState;

                public getBSSID(): string;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getRssi(): number;

                public toString(): string;

                public getFrequency(): number;

                public getNetworkId(): number;

                public getLinkSpeed(): number;

                public getHiddenSSID(): boolean;

                public describeContents(): number;

                public static getDetailedStateOf(param0: android.net.wifi.SupplicantState): android.net.NetworkInfo.DetailedState;
            }
        }
    }
}

/// <reference path="./android.net.DhcpInfo.d.ts" />
/// <reference path="./android.net.wifi.WifiConfiguration.d.ts" />
/// <reference path="./android.net.wifi.WifiInfo.d.ts" />
/// <reference path="./android.net.wifi.WpsInfo.d.ts" />
/// <reference path="./android.os.WorkSource.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module net {
        export module wifi {
            export class WifiManager extends javalangObject {
                public static ACTION_PICK_WIFI_NETWORK: string;
                public static ACTION_REQUEST_SCAN_ALWAYS_AVAILABLE: string;
                public static ERROR_AUTHENTICATING: number;
                public static EXTRA_BSSID: string;
                public static EXTRA_NETWORK_INFO: string;
                public static EXTRA_NEW_RSSI: string;
                public static EXTRA_NEW_STATE: string;
                public static EXTRA_PREVIOUS_WIFI_STATE: string;
                public static EXTRA_RESULTS_UPDATED: string;
                public static EXTRA_SUPPLICANT_CONNECTED: string;
                public static EXTRA_SUPPLICANT_ERROR: string;
                public static EXTRA_WIFI_INFO: string;
                public static EXTRA_WIFI_STATE: string;
                public static NETWORK_IDS_CHANGED_ACTION: string;
                public static NETWORK_STATE_CHANGED_ACTION: string;
                public static RSSI_CHANGED_ACTION: string;
                public static SCAN_RESULTS_AVAILABLE_ACTION: string;
                public static SUPPLICANT_CONNECTION_CHANGE_ACTION: string;
                public static SUPPLICANT_STATE_CHANGED_ACTION: string;
                public static WIFI_MODE_FULL: number;
                public static WIFI_MODE_FULL_HIGH_PERF: number;
                public static WIFI_MODE_SCAN_ONLY: number;
                public static WIFI_STATE_CHANGED_ACTION: string;
                public static WIFI_STATE_DISABLED: number;
                public static WIFI_STATE_DISABLING: number;
                public static WIFI_STATE_ENABLED: number;
                public static WIFI_STATE_ENABLING: number;
                public static WIFI_STATE_UNKNOWN: number;
                public static WPS_AUTH_FAILURE: number;
                public static WPS_OVERLAP_ERROR: number;
                public static WPS_TIMED_OUT: number;
                public static WPS_TKIP_ONLY_PROHIBITED: number;
                public static WPS_WEP_PROHIBITED: number;

                public is5GHzBandSupported(): boolean;

                public setTdlsEnabledWithMacAddress(param0: string, param1: boolean): void;

                public startWps(param0: android.net.wifi.WpsInfo, param1: android.net.wifi.WifiManager.WpsCallback): void;

                public finalize(): void;

                public addNetwork(param0: android.net.wifi.WifiConfiguration): number;

                public startScan(): boolean;

                public static calculateSignalLevel(param0: number, param1: number): number;

                public updateNetwork(param0: android.net.wifi.WifiConfiguration): number;

                public setTdlsEnabled(param0: javanetInetAddress, param1: boolean): void;

                public isPreferredNetworkOffloadSupported(): boolean;

                public isScanAlwaysAvailable(): boolean;

                public pingSupplicant(): boolean;

                public cancelWps(param0: android.net.wifi.WifiManager.WpsCallback): void;

                public createMulticastLock(param0: string): android.net.wifi.WifiManager.MulticastLock;

                public disconnect(): boolean;

                public setWifiEnabled(param0: boolean): boolean;

                public getConfiguredNetworks(): javautilList;

                public reconnect(): boolean;

                public createWifiLock(param0: string): android.net.wifi.WifiManager.WifiLock;

                public reassociate(): boolean;

                public disableNetwork(param0: number): boolean;

                public getScanResults(): javautilList;

                public createWifiLock(param0: number, param1: string): android.net.wifi.WifiManager.WifiLock;

                public enableNetwork(param0: number, param1: boolean): boolean;

                public removeNetwork(param0: number): boolean;

                public isP2pSupported(): boolean;

                public isEnhancedPowerReportingSupported(): boolean;

                public getConnectionInfo(): android.net.wifi.WifiInfo;

                public static compareSignalLevel(param0: number, param1: number): number;

                public saveConfiguration(): boolean;

                public isDeviceToApRttSupported(): boolean;

                public isTdlsSupported(): boolean;

                public getDhcpInfo(): android.net.DhcpInfo;

                public isWifiEnabled(): boolean;

                public getWifiState(): number;
            }
            export module WifiManager {
                export class MulticastLock extends javalangObject {
                    public isHeld(): boolean;

                    public toString(): string;

                    public finalize(): void;

                    public acquire(): void;

                    public release(): void;

                    public setReferenceCounted(param0: boolean): void;
                }
                export class WifiLock extends javalangObject {
                    public isHeld(): boolean;

                    public toString(): string;

                    public setWorkSource(param0: android.os.WorkSource): void;

                    public finalize(): void;

                    public acquire(): void;

                    public release(): void;

                    public setReferenceCounted(param0: boolean): void;
                }
                export abstract class WpsCallback extends javalangObject {
                    public constructor();

                    public onSucceeded(): void;

                    public onFailed(param0: number): void;

                    public onStarted(param0: string): void;
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module net {
        export module wifi {
            export class WpsInfo extends javalangObject implements android.os.Parcelable {
                public BSSID: string;
                public static CREATOR: android.os.Parcelable.Creator;
                public static DISPLAY: number;
                public static INVALID: number;
                public static KEYPAD: number;
                public static LABEL: number;
                public static PBC: number;
                public pin: string;
                public setup: number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public toString(): string;

                public constructor(param0: android.net.wifi.WpsInfo);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.net.wifi.WpsInfo.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module net {
        export module wifi {
            export module p2p {
                export class WifiP2pConfig extends javalangObject implements android.os.Parcelable {
                    public static CREATOR: android.os.Parcelable.Creator;
                    public deviceAddress: string;
                    public groupOwnerIntent: number;
                    public wps: android.net.wifi.WpsInfo;

                    public toString(): string;

                    public constructor();
                    public constructor(param0: android.net.wifi.p2p.WifiP2pConfig);

                    public describeContents(): number;

                    public writeToParcel(param0: android.os.Parcel, param1: number): void;
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module net {
        export module wifi {
            export module p2p {
                export class WifiP2pDevice extends javalangObject implements android.os.Parcelable {
                    public static AVAILABLE: number;
                    public static CONNECTED: number;
                    public static CREATOR: android.os.Parcelable.Creator;
                    public static FAILED: number;
                    public static INVITED: number;
                    public static UNAVAILABLE: number;
                    public deviceAddress: string;
                    public deviceName: string;
                    public primaryDeviceType: string;
                    public secondaryDeviceType: string;
                    public status: number;

                    public isGroupOwner(): boolean;

                    public wpsPbcSupported(): boolean;

                    public constructor(param0: android.net.wifi.p2p.WifiP2pDevice);

                    public toString(): string;

                    public constructor();

                    public wpsKeypadSupported(): boolean;

                    public equals(param0: javalangObject): boolean;

                    public isServiceDiscoveryCapable(): boolean;

                    public describeContents(): number;

                    public wpsDisplaySupported(): boolean;

                    public writeToParcel(param0: android.os.Parcel, param1: number): void;
                }
            }
        }
    }
}

/// <reference path="./android.net.wifi.p2p.WifiP2pDevice.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
declare module android {
    export module net {
        export module wifi {
            export module p2p {
                export class WifiP2pDeviceList extends javalangObject implements android.os.Parcelable {
                    public static CREATOR: android.os.Parcelable.Creator;

                    public getDeviceList(): javautilCollection;

                    public toString(): string;

                    public constructor();

                    public describeContents(): number;

                    public get(param0: string): android.net.wifi.p2p.WifiP2pDevice;

                    public constructor(param0: android.net.wifi.p2p.WifiP2pDeviceList);

                    public writeToParcel(param0: android.os.Parcel, param1: number): void;
                }
            }
        }
    }
}

/// <reference path="./android.net.wifi.p2p.WifiP2pDevice.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
declare module android {
    export module net {
        export module wifi {
            export module p2p {
                export class WifiP2pGroup extends javalangObject implements android.os.Parcelable {
                    public static CREATOR: android.os.Parcelable.Creator;

                    public isGroupOwner(): boolean;

                    public constructor(param0: android.net.wifi.p2p.WifiP2pGroup);

                    public getNetworkName(): string;

                    public toString(): string;

                    public getPassphrase(): string;

                    public constructor();

                    public getInterface(): string;

                    public getClientList(): javautilCollection;

                    public describeContents(): number;

                    public getOwner(): android.net.wifi.p2p.WifiP2pDevice;

                    public writeToParcel(param0: android.os.Parcel, param1: number): void;
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
declare module android {
    export module net {
        export module wifi {
            export module p2p {
                export class WifiP2pInfo extends javalangObject implements android.os.Parcelable {
                    public static CREATOR: android.os.Parcelable.Creator;
                    public groupFormed: boolean;
                    public groupOwnerAddress: javanetInetAddress;
                    public isGroupOwner: boolean;

                    public constructor(param0: android.net.wifi.p2p.WifiP2pInfo);

                    public toString(): string;

                    public constructor();

                    public describeContents(): number;

                    public writeToParcel(param0: android.os.Parcel, param1: number): void;
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.wifi.p2p.WifiP2pConfig.d.ts" />
/// <reference path="./android.net.wifi.p2p.WifiP2pDevice.d.ts" />
/// <reference path="./android.net.wifi.p2p.WifiP2pDeviceList.d.ts" />
/// <reference path="./android.net.wifi.p2p.WifiP2pGroup.d.ts" />
/// <reference path="./android.net.wifi.p2p.WifiP2pInfo.d.ts" />
/// <reference path="./android.net.wifi.p2p.nsd.WifiP2pServiceInfo.d.ts" />
/// <reference path="./android.net.wifi.p2p.nsd.WifiP2pServiceRequest.d.ts" />
/// <reference path="./android.os.Looper.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module android {
    export module net {
        export module wifi {
            export module p2p {
                export class WifiP2pManager extends javalangObject {
                    public static BUSY: number;
                    public static ERROR: number;
                    public static EXTRA_DISCOVERY_STATE: string;
                    public static EXTRA_NETWORK_INFO: string;
                    public static EXTRA_P2P_DEVICE_LIST: string;
                    public static EXTRA_WIFI_P2P_DEVICE: string;
                    public static EXTRA_WIFI_P2P_GROUP: string;
                    public static EXTRA_WIFI_P2P_INFO: string;
                    public static EXTRA_WIFI_STATE: string;
                    public static NO_SERVICE_REQUESTS: number;
                    public static P2P_UNSUPPORTED: number;
                    public static WIFI_P2P_CONNECTION_CHANGED_ACTION: string;
                    public static WIFI_P2P_DISCOVERY_CHANGED_ACTION: string;
                    public static WIFI_P2P_DISCOVERY_STARTED: number;
                    public static WIFI_P2P_DISCOVERY_STOPPED: number;
                    public static WIFI_P2P_PEERS_CHANGED_ACTION: string;
                    public static WIFI_P2P_STATE_CHANGED_ACTION: string;
                    public static WIFI_P2P_STATE_DISABLED: number;
                    public static WIFI_P2P_STATE_ENABLED: number;
                    public static WIFI_P2P_THIS_DEVICE_CHANGED_ACTION: string;

                    public cancelConnect(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pManager.ActionListener): void;

                    public addServiceRequest(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.nsd.WifiP2pServiceRequest, param2: android.net.wifi.p2p.WifiP2pManager.ActionListener): void;

                    public connect(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pConfig, param2: android.net.wifi.p2p.WifiP2pManager.ActionListener): void;

                    public setServiceResponseListener(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pManager.ServiceResponseListener): void;

                    public initialize(param0: android.content.Context, param1: android.os.Looper, param2: android.net.wifi.p2p.WifiP2pManager.ChannelListener): android.net.wifi.p2p.WifiP2pManager.Channel;

                    public removeLocalService(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.nsd.WifiP2pServiceInfo, param2: android.net.wifi.p2p.WifiP2pManager.ActionListener): void;

                    public stopPeerDiscovery(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pManager.ActionListener): void;

                    public clearLocalServices(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pManager.ActionListener): void;

                    public discoverPeers(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pManager.ActionListener): void;

                    public addLocalService(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.nsd.WifiP2pServiceInfo, param2: android.net.wifi.p2p.WifiP2pManager.ActionListener): void;

                    public requestConnectionInfo(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pManager.ConnectionInfoListener): void;

                    public requestGroupInfo(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pManager.GroupInfoListener): void;

                    public createGroup(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pManager.ActionListener): void;

                    public discoverServices(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pManager.ActionListener): void;

                    public setDnsSdResponseListeners(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pManager.DnsSdServiceResponseListener, param2: android.net.wifi.p2p.WifiP2pManager.DnsSdTxtRecordListener): void;

                    public clearServiceRequests(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pManager.ActionListener): void;

                    public removeServiceRequest(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.nsd.WifiP2pServiceRequest, param2: android.net.wifi.p2p.WifiP2pManager.ActionListener): void;

                    public setUpnpServiceResponseListener(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pManager.UpnpServiceResponseListener): void;

                    public removeGroup(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pManager.ActionListener): void;

                    public requestPeers(param0: android.net.wifi.p2p.WifiP2pManager.Channel, param1: android.net.wifi.p2p.WifiP2pManager.PeerListListener): void;
                }
                export module WifiP2pManager {
                    export class ActionListener extends javalangObject {
                        /**
                         * Constructs a new instance of the android.net.wifi.p2p.WifiP2pManager$ActionListener interface with the provided implementation.
                         */
                        public constructor(implementation: {
                            onSuccess(): void;
                            onFailure(param0: number): void;
                        });

                        public onSuccess(): void;

                        public onFailure(param0: number): void;
                    }
                    export class Channel extends javalangObject {
                    }
                    export class ChannelListener extends javalangObject {
                        /**
                         * Constructs a new instance of the android.net.wifi.p2p.WifiP2pManager$ChannelListener interface with the provided implementation.
                         */
                        public constructor(implementation: {
                            onChannelDisconnected(): void;
                        });

                        public onChannelDisconnected(): void;
                    }
                    export class ConnectionInfoListener extends javalangObject {
                        /**
                         * Constructs a new instance of the android.net.wifi.p2p.WifiP2pManager$ConnectionInfoListener interface with the provided implementation.
                         */
                        public constructor(implementation: {
                            onConnectionInfoAvailable(param0: android.net.wifi.p2p.WifiP2pInfo): void;
                        });

                        public onConnectionInfoAvailable(param0: android.net.wifi.p2p.WifiP2pInfo): void;
                    }
                    export class DnsSdServiceResponseListener extends javalangObject {
                        /**
                         * Constructs a new instance of the android.net.wifi.p2p.WifiP2pManager$DnsSdServiceResponseListener interface with the provided implementation.
                         */
                        public constructor(implementation: {
                            onDnsSdServiceAvailable(param0: string, param1: string, param2: android.net.wifi.p2p.WifiP2pDevice): void;
                        });

                        public onDnsSdServiceAvailable(param0: string, param1: string, param2: android.net.wifi.p2p.WifiP2pDevice): void;
                    }
                    export class DnsSdTxtRecordListener extends javalangObject {
                        /**
                         * Constructs a new instance of the android.net.wifi.p2p.WifiP2pManager$DnsSdTxtRecordListener interface with the provided implementation.
                         */
                        public constructor(implementation: {
                            onDnsSdTxtRecordAvailable(param0: string, param1: javautilMap, param2: android.net.wifi.p2p.WifiP2pDevice): void;
                        });

                        public onDnsSdTxtRecordAvailable(param0: string, param1: javautilMap, param2: android.net.wifi.p2p.WifiP2pDevice): void;
                    }
                    export class GroupInfoListener extends javalangObject {
                        /**
                         * Constructs a new instance of the android.net.wifi.p2p.WifiP2pManager$GroupInfoListener interface with the provided implementation.
                         */
                        public constructor(implementation: {
                            onGroupInfoAvailable(param0: android.net.wifi.p2p.WifiP2pGroup): void;
                        });

                        public onGroupInfoAvailable(param0: android.net.wifi.p2p.WifiP2pGroup): void;
                    }
                    export class PeerListListener extends javalangObject {
                        /**
                         * Constructs a new instance of the android.net.wifi.p2p.WifiP2pManager$PeerListListener interface with the provided implementation.
                         */
                        public constructor(implementation: {
                            onPeersAvailable(param0: android.net.wifi.p2p.WifiP2pDeviceList): void;
                        });

                        public onPeersAvailable(param0: android.net.wifi.p2p.WifiP2pDeviceList): void;
                    }
                    export class ServiceResponseListener extends javalangObject {
                        /**
                         * Constructs a new instance of the android.net.wifi.p2p.WifiP2pManager$ServiceResponseListener interface with the provided implementation.
                         */
                        public constructor(implementation: {
                            onServiceAvailable(param0: number, param1: native.Array<number>, param2: android.net.wifi.p2p.WifiP2pDevice): void;
                        });

                        public onServiceAvailable(param0: number, param1: native.Array<number>, param2: android.net.wifi.p2p.WifiP2pDevice): void;
                    }
                    export class UpnpServiceResponseListener extends javalangObject {
                        /**
                         * Constructs a new instance of the android.net.wifi.p2p.WifiP2pManager$UpnpServiceResponseListener interface with the provided implementation.
                         */
                        public constructor(implementation: {
                            onUpnpServiceAvailable(param0: javautilList, param1: android.net.wifi.p2p.WifiP2pDevice): void;
                        });

                        public onUpnpServiceAvailable(param0: javautilList, param1: android.net.wifi.p2p.WifiP2pDevice): void;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module android {
    export module net {
        export module wifi {
            export module p2p {
                export module nsd {
                    export class WifiP2pDnsSdServiceInfo extends android.net.wifi.p2p.nsd.WifiP2pServiceInfo {
                        public static newInstance(param0: string, param1: string, param2: javautilMap): android.net.wifi.p2p.nsd.WifiP2pDnsSdServiceInfo;

                        public describeContents(): number;

                        public writeToParcel(param0: android.os.Parcel, param1: number): void;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.net.wifi.p2p.nsd.WifiP2pServiceRequest.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module net {
        export module wifi {
            export module p2p {
                export module nsd {
                    export class WifiP2pDnsSdServiceRequest extends android.net.wifi.p2p.nsd.WifiP2pServiceRequest {
                        public describeContents(): number;

                        public static newInstance(param0: string): android.net.wifi.p2p.nsd.WifiP2pDnsSdServiceRequest;

                        public writeToParcel(param0: android.os.Parcel, param1: number): void;

                        public static newInstance(param0: string, param1: string): android.net.wifi.p2p.nsd.WifiP2pDnsSdServiceRequest;
                        public static newInstance(param0: number, param1: string): android.net.wifi.p2p.nsd.WifiP2pServiceRequest;
                        public static newInstance(param0: number): android.net.wifi.p2p.nsd.WifiP2pServiceRequest;
                        public static newInstance(): android.net.wifi.p2p.nsd.WifiP2pDnsSdServiceRequest;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module net {
        export module wifi {
            export module p2p {
                export module nsd {
                    export class WifiP2pServiceInfo extends javalangObject implements android.os.Parcelable {
                        public static SERVICE_TYPE_ALL: number;
                        public static SERVICE_TYPE_BONJOUR: number;
                        public static SERVICE_TYPE_UPNP: number;
                        public static SERVICE_TYPE_VENDOR_SPECIFIC: number;

                        public describeContents(): number;

                        public equals(param0: javalangObject): boolean;

                        public writeToParcel(param0: android.os.Parcel, param1: number): void;

                        public hashCode(): number;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module net {
        export module wifi {
            export module p2p {
                export module nsd {
                    export class WifiP2pServiceRequest extends javalangObject implements android.os.Parcelable {
                        public describeContents(): number;

                        public equals(param0: javalangObject): boolean;

                        public writeToParcel(param0: android.os.Parcel, param1: number): void;

                        public static newInstance(param0: number, param1: string): android.net.wifi.p2p.nsd.WifiP2pServiceRequest;

                        public hashCode(): number;

                        public static newInstance(param0: number): android.net.wifi.p2p.nsd.WifiP2pServiceRequest;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module net {
        export module wifi {
            export module p2p {
                export module nsd {
                    export class WifiP2pUpnpServiceInfo extends android.net.wifi.p2p.nsd.WifiP2pServiceInfo {
                        public describeContents(): number;

                        public writeToParcel(param0: android.os.Parcel, param1: number): void;

                        public static newInstance(param0: string, param1: string, param2: javautilList): android.net.wifi.p2p.nsd.WifiP2pUpnpServiceInfo;
                    }
                }
            }
        }
    }
}

/// <reference path="./android.net.wifi.p2p.nsd.WifiP2pServiceRequest.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module net {
        export module wifi {
            export module p2p {
                export module nsd {
                    export class WifiP2pUpnpServiceRequest extends android.net.wifi.p2p.nsd.WifiP2pServiceRequest {
                        public describeContents(): number;

                        public static newInstance(): android.net.wifi.p2p.nsd.WifiP2pUpnpServiceRequest;

                        public writeToParcel(param0: android.os.Parcel, param1: number): void;

                        public static newInstance(param0: number, param1: string): android.net.wifi.p2p.nsd.WifiP2pServiceRequest;
                        public static newInstance(param0: string): android.net.wifi.p2p.nsd.WifiP2pUpnpServiceRequest;
                        public static newInstance(param0: number): android.net.wifi.p2p.nsd.WifiP2pServiceRequest;
                    }
                }
            }
        }
    }
}
