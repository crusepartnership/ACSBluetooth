
import javaioInterruptedIOException = java.io.InterruptedIOException;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module org {
    export module apache {
        export module http {
            export module conn {
                export class ConnectTimeoutException extends javaioInterruptedIOException {
                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor();
                    public constructor(param0: javalangThrowable);
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
declare module org {
    export module apache {
        export module http {
            export module conn {
                export module scheme {
                    export class HostNameResolver extends javalangObject {
                        /**
                         * Constructs a new instance of the org.apache.http.conn.scheme.HostNameResolver interface with the provided implementation.
                         */
                        public constructor(implementation: {
                            resolve(param0: string): javanetInetAddress;
                        });

                        public resolve(param0: string): javanetInetAddress;
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
/// <reference path="./org.apache.http.params.HttpParams.d.ts" />
declare module org {
    export module apache {
        export module http {
            export module conn {
                export module scheme {
                    export class LayeredSocketFactory extends javalangObject implements org.apache.http.conn.scheme.SocketFactory {
                        /**
                         * Constructs a new instance of the org.apache.http.conn.scheme.LayeredSocketFactory interface with the provided implementation.
                         */
                        public constructor(implementation: {
                            createSocket(param0: javanetSocket, param1: string, param2: number, param3: boolean): javanetSocket;
                            createSocket(): javanetSocket;
                            connectSocket(param0: javanetSocket, param1: string, param2: number, param3: javanetInetAddress, param4: number, param5: org.apache.http.params.HttpParams): javanetSocket;
                            isSecure(param0: javanetSocket): boolean;
                        });

                        public createSocket(): javanetSocket;

                        public isSecure(param0: javanetSocket): boolean;

                        public createSocket(param0: javanetSocket, param1: string, param2: number, param3: boolean): javanetSocket;

                        public connectSocket(param0: javanetSocket, param1: string, param2: number, param3: javanetInetAddress, param4: number, param5: org.apache.http.params.HttpParams): javanetSocket;
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
/// <reference path="./org.apache.http.params.HttpParams.d.ts" />
declare module org {
    export module apache {
        export module http {
            export module conn {
                export module scheme {
                    export class SocketFactory extends javalangObject {
                        /**
                         * Constructs a new instance of the org.apache.http.conn.scheme.SocketFactory interface with the provided implementation.
                         */
                        public constructor(implementation: {
                            createSocket(): javanetSocket;
                            connectSocket(param0: javanetSocket, param1: string, param2: number, param3: javanetInetAddress, param4: number, param5: org.apache.http.params.HttpParams): javanetSocket;
                            isSecure(param0: javanetSocket): boolean;
                        });

                        public createSocket(): javanetSocket;

                        public isSecure(param0: javanetSocket): boolean;

                        public connectSocket(param0: javanetSocket, param1: string, param2: number, param3: javanetInetAddress, param4: number, param5: org.apache.http.params.HttpParams): javanetSocket;
                    }
                }
            }
        }
    }
}

import javaxnetsslSSLSocket = javax.net.ssl.SSLSocket;
import javaxnetsslSSLSession = javax.net.ssl.SSLSession;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />
/// <reference path="./javax.net.ssl.SSLSession.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocket.d.ts" />
declare module org {
    export module apache {
        export module http {
            export module conn {
                export module ssl {
                    export abstract class AbstractVerifier extends javalangObject implements org.apache.http.conn.ssl.X509HostnameVerifier {
                        public static acceptableCountryWildcard(param0: string): boolean;

                        public verify(param0: string, param1: native.Array<string>, param2: native.Array<string>): void;
                        public verify(param0: string, param1: native.Array<string>, param2: native.Array<string>, param3: boolean): void;

                        public constructor();

                        public verify(param0: string, param1: javaxnetsslSSLSocket): void;

                        public static getCNs(param0: javasecuritycertX509Certificate): native.Array<string>;

                        public static getDNSSubjectAlts(param0: javasecuritycertX509Certificate): native.Array<string>;

                        public static countDots(param0: string): number;

                        public verify(param0: string, param1: javaxnetsslSSLSession): boolean;
                        public verify(param0: string, param1: javasecuritycertX509Certificate): void;
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />
/// <reference path="./javax.net.ssl.SSLSession.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocket.d.ts" />
declare module org {
    export module apache {
        export module http {
            export module conn {
                export module ssl {
                    export class AllowAllHostnameVerifier extends org.apache.http.conn.ssl.AbstractVerifier {
                        public verify(param0: string, param1: native.Array<string>, param2: native.Array<string>): void;
                        public verify(param0: string, param1: native.Array<string>, param2: native.Array<string>, param3: boolean): void;

                        public constructor();

                        public verify(param0: string, param1: javaxnetsslSSLSocket): void;
                        public verify(param0: string, param1: javaxnetsslSSLSession): boolean;
                        public verify(param0: string, param1: javasecuritycertX509Certificate): void;

                        public toString(): string;
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />
/// <reference path="./javax.net.ssl.SSLSession.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocket.d.ts" />
declare module org {
    export module apache {
        export module http {
            export module conn {
                export module ssl {
                    export class BrowserCompatHostnameVerifier extends org.apache.http.conn.ssl.AbstractVerifier {
                        public verify(param0: string, param1: native.Array<string>, param2: native.Array<string>): void;
                        public verify(param0: string, param1: native.Array<string>, param2: native.Array<string>, param3: boolean): void;

                        public constructor();

                        public verify(param0: string, param1: javaxnetsslSSLSocket): void;
                        public verify(param0: string, param1: javaxnetsslSSLSession): boolean;
                        public verify(param0: string, param1: javasecuritycertX509Certificate): void;

                        public toString(): string;
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
/// <reference path="./java.security.KeyStore.d.ts" />
/// <reference path="./java.security.SecureRandom.d.ts" />
/// <reference path="./org.apache.http.conn.scheme.HostNameResolver.d.ts" />
/// <reference path="./org.apache.http.conn.ssl.X509HostnameVerifier.d.ts" />
/// <reference path="./org.apache.http.params.HttpParams.d.ts" />
declare module org {
    export module apache {
        export module http {
            export module conn {
                export module ssl {
                    export class SSLSocketFactory extends javalangObject implements org.apache.http.conn.scheme.LayeredSocketFactory {
                        public static ALLOW_ALL_HOSTNAME_VERIFIER: org.apache.http.conn.ssl.X509HostnameVerifier;
                        public static BROWSER_COMPATIBLE_HOSTNAME_VERIFIER: org.apache.http.conn.ssl.X509HostnameVerifier;
                        public static SSL: string;
                        public static SSLV2: string;
                        public static STRICT_HOSTNAME_VERIFIER: org.apache.http.conn.ssl.X509HostnameVerifier;
                        public static TLS: string;

                        public constructor(param0: javasecurityKeyStore, param1: string);

                        public createSocket(): javanetSocket;

                        public isSecure(param0: javanetSocket): boolean;

                        public getHostnameVerifier(): org.apache.http.conn.ssl.X509HostnameVerifier;

                        public constructor(param0: javasecurityKeyStore);
                        public constructor(param0: javasecurityKeyStore, param1: string, param2: javasecurityKeyStore);

                        public createSocket(param0: javanetSocket, param1: string, param2: number, param3: boolean): javanetSocket;

                        public static getSocketFactory(): org.apache.http.conn.ssl.SSLSocketFactory;

                        public constructor(param0: string, param1: javasecurityKeyStore, param2: string, param3: javasecurityKeyStore, param4: javasecuritySecureRandom, param5: org.apache.http.conn.scheme.HostNameResolver);

                        public connectSocket(param0: javanetSocket, param1: string, param2: number, param3: javanetInetAddress, param4: number, param5: org.apache.http.params.HttpParams): javanetSocket;

                        public setHostnameVerifier(param0: org.apache.http.conn.ssl.X509HostnameVerifier): void;
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />
/// <reference path="./javax.net.ssl.SSLSession.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocket.d.ts" />
declare module org {
    export module apache {
        export module http {
            export module conn {
                export module ssl {
                    export class StrictHostnameVerifier extends org.apache.http.conn.ssl.AbstractVerifier {
                        public verify(param0: string, param1: native.Array<string>, param2: native.Array<string>): void;
                        public verify(param0: string, param1: native.Array<string>, param2: native.Array<string>, param3: boolean): void;

                        public constructor();

                        public verify(param0: string, param1: javaxnetsslSSLSocket): void;
                        public verify(param0: string, param1: javaxnetsslSSLSession): boolean;
                        public verify(param0: string, param1: javasecuritycertX509Certificate): void;

                        public toString(): string;
                    }
                }
            }
        }
    }
}

import javaxnetsslHostnameVerifier = javax.net.ssl.HostnameVerifier;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />
/// <reference path="./javax.net.ssl.SSLSession.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocket.d.ts" />
declare module org {
    export module apache {
        export module http {
            export module conn {
                export module ssl {
                    export class X509HostnameVerifier extends javalangObject implements javaxnetsslHostnameVerifier {
                        /**
                         * Constructs a new instance of the org.apache.http.conn.ssl.X509HostnameVerifier interface with the provided implementation.
                         */
                        public constructor(implementation: {
                            verify(param0: string, param1: javaxnetsslSSLSession): boolean;
                            verify(param0: string, param1: javaxnetsslSSLSocket): void;
                            verify(param0: string, param1: javasecuritycertX509Certificate): void;
                            verify(param0: string, param1: native.Array<string>, param2: native.Array<string>): void;
                            verify(param0: string, param1: javaxnetsslSSLSession): boolean;
                        });

                        public verify(param0: string, param1: native.Array<string>, param2: native.Array<string>): void;
                        public verify(param0: string, param1: javaxnetsslSSLSocket): void;
                        public verify(param0: string, param1: javaxnetsslSSLSession): boolean;
                        public verify(param0: string, param1: javasecuritycertX509Certificate): void;
                    }
                }
            }
        }
    }
}

declare module org {
    export module apache {
        export module http {
            export module params {
                export class CoreConnectionPNames extends javalangObject {
                    /**
                     * Constructs a new instance of the org.apache.http.params.CoreConnectionPNames interface with the provided implementation.
                     */
                    public constructor(implementation: {});

                    public static SO_LINGER: string;
                    public static CONNECTION_TIMEOUT: string;
                    public static SO_TIMEOUT: string;
                    public static SOCKET_BUFFER_SIZE: string;
                    public static MAX_HEADER_COUNT: string;
                    public static STALE_CONNECTION_CHECK: string;
                    public static TCP_NODELAY: string;
                    public static MAX_LINE_LENGTH: string;
                }
            }
        }
    }
}

/// <reference path="./org.apache.http.params.HttpParams.d.ts" />
declare module org {
    export module apache {
        export module http {
            export module params {
                export class HttpConnectionParams extends javalangObject implements org.apache.http.params.CoreConnectionPNames {
                    public static isStaleCheckingEnabled(param0: org.apache.http.params.HttpParams): boolean;

                    public static getTcpNoDelay(param0: org.apache.http.params.HttpParams): boolean;

                    public static setTcpNoDelay(param0: org.apache.http.params.HttpParams, param1: boolean): void;

                    public static getSoTimeout(param0: org.apache.http.params.HttpParams): number;

                    public static setSocketBufferSize(param0: org.apache.http.params.HttpParams, param1: number): void;

                    public static getConnectionTimeout(param0: org.apache.http.params.HttpParams): number;

                    public static setConnectionTimeout(param0: org.apache.http.params.HttpParams, param1: number): void;

                    public static setSoTimeout(param0: org.apache.http.params.HttpParams, param1: number): void;

                    public static setLinger(param0: org.apache.http.params.HttpParams, param1: number): void;

                    public static getLinger(param0: org.apache.http.params.HttpParams): number;

                    public static setStaleCheckingEnabled(param0: org.apache.http.params.HttpParams, param1: boolean): void;

                    public static getSocketBufferSize(param0: org.apache.http.params.HttpParams): number;
                }
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module org {
    export module apache {
        export module http {
            export module params {
                export class HttpParams extends javalangObject {
                    /**
                     * Constructs a new instance of the org.apache.http.params.HttpParams interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        getParameter(param0: string): javalangObject;
                        setParameter(param0: string, param1: javalangObject): org.apache.http.params.HttpParams;
                        copy(): org.apache.http.params.HttpParams;
                        removeParameter(param0: string): boolean;
                        getLongParameter(param0: string, param1: number): number;
                        setLongParameter(param0: string, param1: number): org.apache.http.params.HttpParams;
                        getIntParameter(param0: string, param1: number): number;
                        setIntParameter(param0: string, param1: number): org.apache.http.params.HttpParams;
                        getDoubleParameter(param0: string, param1: number): number;
                        setDoubleParameter(param0: string, param1: number): org.apache.http.params.HttpParams;
                        getBooleanParameter(param0: string, param1: boolean): boolean;
                        setBooleanParameter(param0: string, param1: boolean): org.apache.http.params.HttpParams;
                        isParameterTrue(param0: string): boolean;
                        isParameterFalse(param0: string): boolean;
                    });

                    public isParameterFalse(param0: string): boolean;

                    public setDoubleParameter(param0: string, param1: number): org.apache.http.params.HttpParams;

                    public getIntParameter(param0: string, param1: number): number;

                    public setLongParameter(param0: string, param1: number): org.apache.http.params.HttpParams;

                    public setParameter(param0: string, param1: javalangObject): org.apache.http.params.HttpParams;

                    public getLongParameter(param0: string, param1: number): number;

                    public isParameterTrue(param0: string): boolean;

                    public removeParameter(param0: string): boolean;

                    public getParameter(param0: string): javalangObject;

                    public copy(): org.apache.http.params.HttpParams;

                    public setBooleanParameter(param0: string, param1: boolean): org.apache.http.params.HttpParams;

                    public setIntParameter(param0: string, param1: number): org.apache.http.params.HttpParams;

                    public getDoubleParameter(param0: string, param1: number): number;

                    public getBooleanParameter(param0: string, param1: boolean): boolean;
                }
            }
        }
    }
}
