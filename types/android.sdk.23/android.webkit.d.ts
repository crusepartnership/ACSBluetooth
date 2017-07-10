
/// <reference path="./java.security.Principal.d.ts" />
/// <reference path="./java.security.PrivateKey.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />
declare module android {
    export module webkit {
        export abstract class ClientCertRequest extends javalangObject {
            public getKeyTypes(): native.Array<string>;

            public getPrincipals(): native.Array<javasecurityPrincipal>;

            public getHost(): string;

            public ignore(): void;

            public cancel(): void;

            public constructor();

            public getPort(): number;

            public proceed(param0: javasecurityPrivateKey, param1: native.Array<javasecuritycertX509Certificate>): void;
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module webkit {
        export class ConsoleMessage extends javalangObject {
            public constructor(param0: string, param1: string, param2: number, param3: android.webkit.ConsoleMessage.MessageLevel);

            public messageLevel(): android.webkit.ConsoleMessage.MessageLevel;

            public message(): string;

            public sourceId(): string;

            public lineNumber(): number;
        }
        export module ConsoleMessage {
            export class MessageLevel extends javalangEnum {
                public static DEBUG: android.webkit.ConsoleMessage.MessageLevel;
                public static ERROR: android.webkit.ConsoleMessage.MessageLevel;
                public static LOG: android.webkit.ConsoleMessage.MessageLevel;
                public static TIP: android.webkit.ConsoleMessage.MessageLevel;
                public static WARNING: android.webkit.ConsoleMessage.MessageLevel;

                public static valueOf(param0: string): android.webkit.ConsoleMessage.MessageLevel;
                public static valueOf(param0: javalangClass, param1: string): javalangEnum;

                public static values(): native.Array<android.webkit.ConsoleMessage.MessageLevel>;
            }
        }
    }
}

/// <reference path="./android.webkit.ValueCallback.d.ts" />
/// <reference path="./android.webkit.WebView.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module webkit {
        export abstract class CookieManager extends javalangObject {
            public static getInstance(): android.webkit.CookieManager;

            public acceptThirdPartyCookies(param0: android.webkit.WebView): boolean;

            public flush(): void;

            public removeAllCookies(param0: android.webkit.ValueCallback): void;

            public hasCookies(): boolean;

            public acceptCookie(): boolean;

            public removeExpiredCookie(): void;

            public clone(): javalangObject;

            public static setAcceptFileSchemeCookies(param0: boolean): void;

            public constructor();

            public setAcceptCookie(param0: boolean): void;

            public removeSessionCookies(param0: android.webkit.ValueCallback): void;

            public removeAllCookie(): void;

            public setCookie(param0: string, param1: string, param2: android.webkit.ValueCallback): void;

            public setAcceptThirdPartyCookies(param0: android.webkit.WebView, param1: boolean): void;

            public setCookie(param0: string, param1: string): void;

            public removeSessionCookie(): void;

            public getCookie(param0: string): string;

            public static allowFileSchemeCookies(): boolean;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.webkit.WebViewDatabase.d.ts" />
declare module android {
    export module webkit {
        export class CookieSyncManager extends android.webkit.WebSyncManager {
            public static LOGTAG: string;
            public mDataBase: android.webkit.WebViewDatabase;
            public mHandler: android.os.Handler;

            public sync(): void;

            public startSync(): void;

            public stopSync(): void;

            public static createInstance(param0: android.content.Context): android.webkit.CookieSyncManager;

            public resetSync(): void;

            public syncFromRamToFlash(): void;

            public run(): void;

            public static getInstance(): android.webkit.CookieSyncManager;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
declare module android {
    export module webkit {
        export class DateSorter extends javalangObject {
            public static DAY_COUNT: number;

            public getIndex(param0: number): number;

            public getLabel(param0: number): string;

            public constructor(param0: android.content.Context);

            public getBoundary(param0: number): number;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module webkit {
        export class DownloadListener extends javalangObject {
            /**
             * Constructs a new instance of the android.webkit.DownloadListener interface with the provided implementation.
             */
            public constructor(implementation: {
                onDownloadStart(param0: string, param1: string, param2: string, param3: string, param4: number): void;
            });

            public onDownloadStart(param0: string, param1: string, param2: string, param3: string, param4: number): void;
        }
    }
}

/// <reference path="./android.webkit.ValueCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module webkit {
        export class GeolocationPermissions extends javalangObject {
            public allow(param0: string): void;

            public clearAll(): void;

            public getAllowed(param0: string, param1: android.webkit.ValueCallback): void;

            public clear(param0: string): void;

            public getOrigins(param0: android.webkit.ValueCallback): void;

            public static getInstance(): android.webkit.GeolocationPermissions;
        }
        export module GeolocationPermissions {
            export class Callback extends javalangObject {
                /**
                 * Constructs a new instance of the android.webkit.GeolocationPermissions$Callback interface with the provided implementation.
                 */
                public constructor(implementation: {
                    invoke(param0: string, param1: boolean, param2: boolean): void;
                });

                public invoke(param0: string, param1: boolean, param2: boolean): void;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module webkit {
        export class HttpAuthHandler extends android.os.Handler {
            public cancel(): void;

            public proceed(param0: string, param1: string): void;

            public useHttpAuthUsernamePassword(): boolean;
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module webkit {
        export class JavascriptInterface extends javalangObject implements javalangannotationAnnotation {
            /**
             * Constructs a new instance of the android.webkit.JavascriptInterface interface with the provided implementation.
             */
            public constructor(implementation: {
                annotationType(): javalangClass;
                equals(param0: javalangObject): boolean;
                hashCode(): number;
                toString(): string;
            });

            public toString(): string;

            public equals(param0: javalangObject): boolean;

            public annotationType(): javalangClass;

            public hashCode(): number;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module webkit {
        export class JsPromptResult extends android.webkit.JsResult {
            public confirm(): void;
            public confirm(param0: string): void;
        }
    }
}

declare module android {
    export module webkit {
        export class JsResult extends javalangObject {
            public cancel(): void;

            public confirm(): void;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module webkit {
        export class MimeTypeMap extends javalangObject {
            public static getFileExtensionFromUrl(param0: string): string;

            public hasMimeType(param0: string): boolean;

            public static getSingleton(): android.webkit.MimeTypeMap;

            public hasExtension(param0: string): boolean;

            public getMimeTypeFromExtension(param0: string): string;

            public getExtensionFromMimeType(param0: string): string;
        }
    }
}

/// <reference path="./android.net.Uri.d.ts" />
declare module android {
    export module webkit {
        export abstract class PermissionRequest extends javalangObject {
            public static RESOURCE_AUDIO_CAPTURE: string;
            public static RESOURCE_MIDI_SYSEX: string;
            public static RESOURCE_PROTECTED_MEDIA_ID: string;
            public static RESOURCE_VIDEO_CAPTURE: string;

            public getOrigin(): android.net.Uri;

            public grant(param0: native.Array<string>): void;

            public getResources(): native.Array<string>;

            public deny(): void;

            public constructor();
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
declare module android {
    export module webkit {
        export class PluginStub extends javalangObject {
            /**
             * Constructs a new instance of the android.webkit.PluginStub interface with the provided implementation.
             */
            public constructor(implementation: {
                getEmbeddedView(param0: number, param1: android.content.Context): android.view.View;
                getFullScreenView(param0: number, param1: android.content.Context): android.view.View;
            });

            public getEmbeddedView(param0: number, param1: android.content.Context): android.view.View;

            public getFullScreenView(param0: number, param1: android.content.Context): android.view.View;
        }
    }
}

declare module android {
    export module webkit {
        export class SslErrorHandler extends android.os.Handler {
            public proceed(): void;

            public cancel(): void;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module webkit {
        export class URLUtil extends javalangObject {
            public static decode(param0: native.Array<number>): native.Array<number>;

            public static guessFileName(param0: string, param1: string, param2: string): string;

            public static isNetworkUrl(param0: string): boolean;

            public static isValidUrl(param0: string): boolean;

            public static guessUrl(param0: string): string;

            public static isDataUrl(param0: string): boolean;

            public constructor();

            public static stripAnchor(param0: string): string;

            public static isJavaScriptUrl(param0: string): boolean;

            public static isContentUrl(param0: string): boolean;

            public static isCookielessProxyUrl(param0: string): boolean;

            public static isHttpUrl(param0: string): boolean;

            public static composeSearchUrl(param0: string, param1: string, param2: string): string;

            public static isAboutUrl(param0: string): boolean;

            public static isFileUrl(param0: string): boolean;

            public static isAssetUrl(param0: string): boolean;

            public static isHttpsUrl(param0: string): boolean;
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module webkit {
        export class ValueCallback extends javalangObject {
            /**
             * Constructs a new instance of the android.webkit.ValueCallback interface with the provided implementation.
             */
            public constructor(implementation: {
                onReceiveValue(param0: javalangObject): void;
            });

            public onReceiveValue(param0: javalangObject): void;
        }
    }
}

/// <reference path="./android.webkit.WebHistoryItem.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module webkit {
        export abstract class WebBackForwardList extends javalangObject implements javalangCloneable, javaioSerializable {
            public getCurrentItem(): android.webkit.WebHistoryItem;

            public clone(): android.webkit.WebBackForwardList;
            public clone(): javalangObject;

            public constructor();

            public getItemAtIndex(param0: number): android.webkit.WebHistoryItem;

            public getSize(): number;

            public getCurrentIndex(): number;
        }
    }
}

/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.webkit.ConsoleMessage.d.ts" />
/// <reference path="./android.webkit.JsPromptResult.d.ts" />
/// <reference path="./android.webkit.JsResult.d.ts" />
/// <reference path="./android.webkit.PermissionRequest.d.ts" />
/// <reference path="./android.webkit.ValueCallback.d.ts" />
/// <reference path="./android.webkit.WebView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module webkit {
        export class WebChromeClient extends javalangObject {
            public onGeolocationPermissionsHidePrompt(): void;

            public onConsoleMessage(param0: android.webkit.ConsoleMessage): boolean;

            public onShowCustomView(param0: android.view.View, param1: android.webkit.WebChromeClient.CustomViewCallback): void;

            public onConsoleMessage(param0: string, param1: number, param2: string): void;

            public onShowFileChooser(param0: android.webkit.WebView, param1: android.webkit.ValueCallback, param2: android.webkit.WebChromeClient.FileChooserParams): boolean;

            public onGeolocationPermissionsShowPrompt(param0: string, param1: android.webkit.GeolocationPermissions.Callback): void;

            public getVisitedHistory(param0: android.webkit.ValueCallback): void;

            public onHideCustomView(): void;

            public onJsPrompt(param0: android.webkit.WebView, param1: string, param2: string, param3: string, param4: android.webkit.JsPromptResult): boolean;

            public getVideoLoadingProgressView(): android.view.View;

            public onProgressChanged(param0: android.webkit.WebView, param1: number): void;

            public onPermissionRequest(param0: android.webkit.PermissionRequest): void;

            public onReceivedIcon(param0: android.webkit.WebView, param1: android.graphics.Bitmap): void;

            public onRequestFocus(param0: android.webkit.WebView): void;

            public onJsTimeout(): boolean;

            public onCreateWindow(param0: android.webkit.WebView, param1: boolean, param2: boolean, param3: android.os.Message): boolean;

            public onCloseWindow(param0: android.webkit.WebView): void;

            public onJsAlert(param0: android.webkit.WebView, param1: string, param2: string, param3: android.webkit.JsResult): boolean;

            public onJsConfirm(param0: android.webkit.WebView, param1: string, param2: string, param3: android.webkit.JsResult): boolean;

            public onReachedMaxAppCacheSize(param0: number, param1: number, param2: android.webkit.WebStorage.QuotaUpdater): void;

            public onShowCustomView(param0: android.view.View, param1: number, param2: android.webkit.WebChromeClient.CustomViewCallback): void;

            public onPermissionRequestCanceled(param0: android.webkit.PermissionRequest): void;

            public onReceivedTouchIconUrl(param0: android.webkit.WebView, param1: string, param2: boolean): void;

            public onJsBeforeUnload(param0: android.webkit.WebView, param1: string, param2: string, param3: android.webkit.JsResult): boolean;

            public constructor();

            public getDefaultVideoPoster(): android.graphics.Bitmap;

            public onReceivedTitle(param0: android.webkit.WebView, param1: string): void;

            public onExceededDatabaseQuota(param0: string, param1: string, param2: number, param3: number, param4: number, param5: android.webkit.WebStorage.QuotaUpdater): void;
        }
        export module WebChromeClient {
            export class CustomViewCallback extends javalangObject {
                /**
                 * Constructs a new instance of the android.webkit.WebChromeClient$CustomViewCallback interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onCustomViewHidden(): void;
                });

                public onCustomViewHidden(): void;
            }
            export abstract class FileChooserParams extends javalangObject {
                public static MODE_OPEN: number;
                public static MODE_OPEN_MULTIPLE: number;
                public static MODE_SAVE: number;

                public getMode(): number;

                public getAcceptTypes(): native.Array<string>;

                public static parseResult(param0: number, param1: android.content.Intent): native.Array<android.net.Uri>;

                public isCaptureEnabled(): boolean;

                public getFilenameHint(): string;

                public getTitle(): string;

                public constructor();

                public createIntent(): android.content.Intent;
            }
        }
    }
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module webkit {
        export abstract class WebHistoryItem extends javalangObject implements javalangCloneable {
            public getTitle(): string;

            public getUrl(): string;

            public getOriginalUrl(): string;

            public getFavicon(): android.graphics.Bitmap;

            public clone(): javalangObject;
            public clone(): android.webkit.WebHistoryItem;

            public constructor();
        }
    }
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module webkit {
        export abstract class WebIconDatabase extends javalangObject {
            public releaseIconForPageUrl(param0: string): void;

            public removeAllIcons(): void;

            public open(param0: string): void;

            public retainIconForPageUrl(param0: string): void;

            public static getInstance(): android.webkit.WebIconDatabase;

            public constructor();

            public close(): void;

            public requestIconForPageUrl(param0: string, param1: android.webkit.WebIconDatabase.IconListener): void;
        }
        export module WebIconDatabase {
            export class IconListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.webkit.WebIconDatabase$IconListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onReceivedIcon(param0: string, param1: android.graphics.Bitmap): void;
                });

                public onReceivedIcon(param0: string, param1: android.graphics.Bitmap): void;
            }
        }
    }
}

/// <reference path="./android.webkit.WebMessagePort.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module webkit {
        export class WebMessage extends javalangObject {
            public getData(): string;

            public getPorts(): native.Array<android.webkit.WebMessagePort>;

            public constructor(param0: string);
            public constructor(param0: string, param1: native.Array<android.webkit.WebMessagePort>);
        }
    }
}

/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.webkit.WebMessage.d.ts" />
/// <reference path="./android.webkit.WebMessagePort.d.ts" />
declare module android {
    export module webkit {
        export abstract class WebMessagePort extends javalangObject {
            public setWebMessageCallback(param0: android.webkit.WebMessagePort.WebMessageCallback): void;

            public postMessage(param0: android.webkit.WebMessage): void;

            public close(): void;

            public setWebMessageCallback(param0: android.webkit.WebMessagePort.WebMessageCallback, param1: android.os.Handler): void;
        }
        export module WebMessagePort {
            export abstract class WebMessageCallback extends javalangObject {
                public onMessage(param0: android.webkit.WebMessagePort, param1: android.webkit.WebMessage): void;

                public constructor();
            }
        }
    }
}

declare module android {
    export module webkit {
        export abstract class WebResourceError extends javalangObject {
            public getErrorCode(): number;

            public getDescription(): string;
        }
    }
}

/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module android {
    export module webkit {
        export class WebResourceRequest extends javalangObject {
            /**
             * Constructs a new instance of the android.webkit.WebResourceRequest interface with the provided implementation.
             */
            public constructor(implementation: {
                getUrl(): android.net.Uri;
                isForMainFrame(): boolean;
                hasGesture(): boolean;
                getMethod(): string;
                getRequestHeaders(): javautilMap;
            });

            public isForMainFrame(): boolean;

            public getUrl(): android.net.Uri;

            public getMethod(): string;

            public hasGesture(): boolean;

            public getRequestHeaders(): javautilMap;
        }
    }
}

/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module android {
    export module webkit {
        export class WebResourceResponse extends javalangObject {
            public setMimeType(param0: string): void;

            public getMimeType(): string;

            public getData(): javaioInputStream;

            public getStatusCode(): number;

            public setEncoding(param0: string): void;

            public getReasonPhrase(): string;

            public setData(param0: javaioInputStream): void;

            public getEncoding(): string;

            public getResponseHeaders(): javautilMap;

            public setResponseHeaders(param0: javautilMap): void;

            public constructor(param0: string, param1: string, param2: number, param3: string, param4: javautilMap, param5: javaioInputStream);
            public constructor(param0: string, param1: string, param2: javaioInputStream);

            public setStatusCodeAndReasonPhrase(param0: number, param1: string): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module webkit {
        export abstract class WebSettings extends javalangObject {
            public static LOAD_CACHE_ELSE_NETWORK: number;
            public static LOAD_CACHE_ONLY: number;
            public static LOAD_DEFAULT: number;
            public static LOAD_NORMAL: number;
            public static LOAD_NO_CACHE: number;
            public static MIXED_CONTENT_ALWAYS_ALLOW: number;
            public static MIXED_CONTENT_COMPATIBILITY_MODE: number;
            public static MIXED_CONTENT_NEVER_ALLOW: number;

            public getFixedFontFamily(): string;

            public setNeedInitialFocus(param0: boolean): void;

            public setSansSerifFontFamily(param0: string): void;

            public getUseWideViewPort(): boolean;

            public setJavaScriptEnabled(param0: boolean): void;

            public getDomStorageEnabled(): boolean;

            public setDefaultTextEncodingName(param0: string): void;

            public getJavaScriptCanOpenWindowsAutomatically(): boolean;

            public setBlockNetworkImage(param0: boolean): void;

            public getTextSize(): android.webkit.WebSettings.TextSize;

            public getSerifFontFamily(): string;

            public setSupportZoom(param0: boolean): void;

            public setRenderPriority(param0: android.webkit.WebSettings.RenderPriority): void;

            public setAppCacheMaxSize(param0: number): void;

            public getAllowFileAccessFromFileURLs(): boolean;

            public setAppCacheEnabled(param0: boolean): void;

            public getSansSerifFontFamily(): string;

            public setSupportMultipleWindows(param0: boolean): void;

            public supportZoom(): boolean;

            public getDatabasePath(): string;

            public getAllowFileAccess(): boolean;

            public getJavaScriptEnabled(): boolean;

            public getDefaultFixedFontSize(): number;

            public getBlockNetworkLoads(): boolean;

            public getOffscreenPreRaster(): boolean;

            public getBlockNetworkImage(): boolean;

            public setSaveFormData(param0: boolean): void;

            public setDefaultFontSize(param0: number): void;

            public constructor();

            public getDefaultZoom(): android.webkit.WebSettings.ZoomDensity;

            public getUserAgentString(): string;

            public setFixedFontFamily(param0: string): void;

            public setAllowFileAccessFromFileURLs(param0: boolean): void;

            public getLightTouchEnabled(): boolean;

            public getDatabaseEnabled(): boolean;

            public setEnableSmoothTransition(param0: boolean): void;

            public setTextSize(param0: android.webkit.WebSettings.TextSize): void;

            public supportMultipleWindows(): boolean;

            public getMinimumFontSize(): number;

            public setAllowContentAccess(param0: boolean): void;

            public setPluginState(param0: android.webkit.WebSettings.PluginState): void;

            public setAppCachePath(param0: string): void;

            public setFantasyFontFamily(param0: string): void;

            public getMinimumLogicalFontSize(): number;

            public getDisplayZoomControls(): boolean;

            public setAllowFileAccess(param0: boolean): void;

            public setLightTouchEnabled(param0: boolean): void;

            public setBlockNetworkLoads(param0: boolean): void;

            public getBuiltInZoomControls(): boolean;

            public setCursiveFontFamily(param0: string): void;

            public setGeolocationEnabled(param0: boolean): void;

            public static getDefaultUserAgent(param0: android.content.Context): string;

            public enableSmoothTransition(): boolean;

            public getStandardFontFamily(): string;

            public getPluginState(): android.webkit.WebSettings.PluginState;

            public getLoadWithOverviewMode(): boolean;

            public setGeolocationDatabasePath(param0: string): void;

            public getCacheMode(): number;

            public setDatabasePath(param0: string): void;

            public setMinimumLogicalFontSize(param0: number): void;

            public getDefaultTextEncodingName(): string;

            public setDomStorageEnabled(param0: boolean): void;

            public getMediaPlaybackRequiresUserGesture(): boolean;

            public setCacheMode(param0: number): void;

            public setSavePassword(param0: boolean): void;

            public setLoadsImagesAutomatically(param0: boolean): void;

            public setTextZoom(param0: number): void;

            public getMixedContentMode(): number;

            public getSavePassword(): boolean;

            public setDisplayZoomControls(param0: boolean): void;

            public getAllowContentAccess(): boolean;

            public setDefaultZoom(param0: android.webkit.WebSettings.ZoomDensity): void;

            public getTextZoom(): number;

            public setMixedContentMode(param0: number): void;

            public getDefaultFontSize(): number;

            public setDatabaseEnabled(param0: boolean): void;

            public setMinimumFontSize(param0: number): void;

            public getLayoutAlgorithm(): android.webkit.WebSettings.LayoutAlgorithm;

            public getCursiveFontFamily(): string;

            public setUserAgentString(param0: string): void;

            public setUseWideViewPort(param0: boolean): void;

            public setLayoutAlgorithm(param0: android.webkit.WebSettings.LayoutAlgorithm): void;

            public setStandardFontFamily(param0: string): void;

            public setAllowUniversalAccessFromFileURLs(param0: boolean): void;

            public getSaveFormData(): boolean;

            public getLoadsImagesAutomatically(): boolean;

            public getAllowUniversalAccessFromFileURLs(): boolean;

            public setMediaPlaybackRequiresUserGesture(param0: boolean): void;

            public setBuiltInZoomControls(param0: boolean): void;

            public setLoadWithOverviewMode(param0: boolean): void;

            public setOffscreenPreRaster(param0: boolean): void;

            public getFantasyFontFamily(): string;

            public setDefaultFixedFontSize(param0: number): void;

            public setSerifFontFamily(param0: string): void;

            public setJavaScriptCanOpenWindowsAutomatically(param0: boolean): void;
        }
        export module WebSettings {
            export class LayoutAlgorithm extends javalangEnum {
                public static NARROW_COLUMNS: android.webkit.WebSettings.LayoutAlgorithm;
                public static NORMAL: android.webkit.WebSettings.LayoutAlgorithm;
                public static SINGLE_COLUMN: android.webkit.WebSettings.LayoutAlgorithm;
                public static TEXT_AUTOSIZING: android.webkit.WebSettings.LayoutAlgorithm;

                public static valueOf(param0: string): android.webkit.WebSettings.LayoutAlgorithm;

                public static values(): native.Array<android.webkit.WebSettings.LayoutAlgorithm>;

                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
            export class PluginState extends javalangEnum {
                public static OFF: android.webkit.WebSettings.PluginState;
                public static ON: android.webkit.WebSettings.PluginState;
                public static ON_DEMAND: android.webkit.WebSettings.PluginState;

                public static values(): native.Array<android.webkit.WebSettings.PluginState>;

                public static valueOf(param0: string): android.webkit.WebSettings.PluginState;
                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
            export class RenderPriority extends javalangEnum {
                public static HIGH: android.webkit.WebSettings.RenderPriority;
                public static LOW: android.webkit.WebSettings.RenderPriority;
                public static NORMAL: android.webkit.WebSettings.RenderPriority;

                public static values(): native.Array<android.webkit.WebSettings.RenderPriority>;

                public static valueOf(param0: string): android.webkit.WebSettings.RenderPriority;
                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
            export class TextSize extends javalangEnum {
                public static LARGER: android.webkit.WebSettings.TextSize;
                public static LARGEST: android.webkit.WebSettings.TextSize;
                public static NORMAL: android.webkit.WebSettings.TextSize;
                public static SMALLER: android.webkit.WebSettings.TextSize;
                public static SMALLEST: android.webkit.WebSettings.TextSize;

                public static valueOf(param0: string): android.webkit.WebSettings.TextSize;

                public static values(): native.Array<android.webkit.WebSettings.TextSize>;

                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
            export class ZoomDensity extends javalangEnum {
                public static CLOSE: android.webkit.WebSettings.ZoomDensity;
                public static FAR: android.webkit.WebSettings.ZoomDensity;
                public static MEDIUM: android.webkit.WebSettings.ZoomDensity;

                public static valueOf(param0: string): android.webkit.WebSettings.ZoomDensity;

                public static values(): native.Array<android.webkit.WebSettings.ZoomDensity>;

                public static valueOf(param0: javalangClass, param1: string): javalangEnum;
            }
        }
    }
}

/// <reference path="./android.webkit.ValueCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module webkit {
        export class WebStorage extends javalangObject {
            public getQuotaForOrigin(param0: string, param1: android.webkit.ValueCallback): void;

            public deleteAllData(): void;

            public setQuotaForOrigin(param0: string, param1: number): void;

            public deleteOrigin(param0: string): void;

            public getOrigins(param0: android.webkit.ValueCallback): void;

            public static getInstance(): android.webkit.WebStorage;

            public getUsageForOrigin(param0: string, param1: android.webkit.ValueCallback): void;
        }
        export module WebStorage {
            export class Origin extends javalangObject {
                public getQuota(): number;

                public getUsage(): number;

                public getOrigin(): string;
            }
            export class QuotaUpdater extends javalangObject {
                /**
                 * Constructs a new instance of the android.webkit.WebStorage$QuotaUpdater interface with the provided implementation.
                 */
                public constructor(implementation: {
                    updateQuota(param0: number): void;
                });

                public updateQuota(param0: number): void;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.webkit.WebViewDatabase.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module webkit {
        export abstract class WebSyncManager extends javalangObject implements javalangRunnable {
            public static LOGTAG: string;
            public mDataBase: android.webkit.WebViewDatabase;
            public mHandler: android.os.Handler;

            public onSyncInit(): void;

            public constructor(param0: android.content.Context, param1: string);

            public sync(): void;

            public startSync(): void;

            public stopSync(): void;

            public clone(): javalangObject;

            public resetSync(): void;

            public run(): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Picture.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.net.http.SslCertificate.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.print.PrintDocumentAdapter.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.ViewStructure.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityNodeProvider.d.ts" />
/// <reference path="./android.view.inputmethod.EditorInfo.d.ts" />
/// <reference path="./android.view.inputmethod.InputConnection.d.ts" />
/// <reference path="./android.webkit.DownloadListener.d.ts" />
/// <reference path="./android.webkit.ValueCallback.d.ts" />
/// <reference path="./android.webkit.WebBackForwardList.d.ts" />
/// <reference path="./android.webkit.WebChromeClient.d.ts" />
/// <reference path="./android.webkit.WebMessage.d.ts" />
/// <reference path="./android.webkit.WebMessagePort.d.ts" />
/// <reference path="./android.webkit.WebSettings.d.ts" />
/// <reference path="./android.webkit.WebView.d.ts" />
/// <reference path="./android.webkit.WebViewClient.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module android {
    export module webkit {
        export class WebView extends android.widget.AbsoluteLayout implements android.view.ViewTreeObserver.OnGlobalFocusChangeListener, android.view.ViewGroup.OnHierarchyChangeListener {
            public static SCHEME_GEO: string;
            public static SCHEME_MAILTO: string;
            public static SCHEME_TEL: string;

            public setHorizontalScrollbarOverlay(param0: boolean): void;

            public setLayerType(param0: number, param1: android.graphics.Paint): void;

            public onStopNestedScroll(param0: android.view.View): void;

            public saveWebArchive(param0: string): void;

            public createPrintDocumentAdapter(): android.print.PrintDocumentAdapter;

            public resumeTimers(): void;

            public onMeasure(param0: number, param1: number): void;

            public requestFocus(): boolean;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);

            public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;

            public setLayoutParams(param0: android.view.ViewGroup.LayoutParams): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: boolean);

            public getHttpAuthUsernamePassword(param0: string, param1: string): native.Array<string>;

            public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;

            public saveState(param0: android.os.Bundle): android.webkit.WebBackForwardList;

            public showContextMenuForChild(param0: android.view.View): boolean;

            public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;

            public findAllAsync(param0: string): void;

            public setMapTrackballToArrowKeys(param0: boolean): void;

            public sendAccessibilityEvent(param0: number): void;

            public loadDataWithBaseURL(param0: string, param1: string, param2: string, param3: string, param4: string): void;

            public clearView(): void;

            public clearMatches(): void;

            public restoreState(param0: android.os.Bundle): android.webkit.WebBackForwardList;

            public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;

            public canGoForward(): boolean;

            public computeVerticalScrollRange(): number;

            public getLayoutDirection(): number;

            public requestChildFocus(param0: android.view.View, param1: android.view.View): void;

            public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;

            public setNetworkAvailable(param0: boolean): void;

            public getContentHeight(): number;

            public setOverScrollMode(param0: number): void;

            public static enableSlowWholeDocumentDraw(): void;

            public getAccessibilityClassName(): string;

            public freeMemory(): void;

            public clearFormData(): void;

            public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;

            public findNext(param0: boolean): void;

            public findAll(param0: string): number;

            public loadUrl(param0: string, param1: javautilMap): void;

            public setScrollBarStyle(param0: number): void;

            public onConfigurationChanged(param0: android.content.res.Configuration): void;

            public requestLayout(): void;

            public getUrl(): string;

            public setVerticalScrollbarOverlay(param0: boolean): void;

            public clearCache(param0: boolean): void;

            public canResolveTextDirection(): boolean;

            public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;

            public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
            public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public setBackgroundColor(param0: number): void;

            public postVisualStateCallback(param0: number, param1: android.webkit.WebView.VisualStateCallback): void;

            public requestFitSystemWindows(): void;

            public onOverScrolled(param0: number, param1: number, param2: boolean, param3: boolean): void;

            public getProgress(): number;

            public setWebViewClient(param0: android.webkit.WebViewClient): void;

            public getOriginalUrl(): string;

            public showFindDialog(param0: string, param1: boolean): boolean;

            public performLongClick(): boolean;

            public focusSearch(param0: android.view.View, param1: number): android.view.View;

            public static findAddress(param0: string): string;

            public onFocusChanged(param0: boolean, param1: number, param2: android.graphics.Rect): void;

            public canZoomIn(): boolean;

            public computeHorizontalScrollRange(): number;

            public zoomIn(): boolean;

            public getHitTestResult(): android.webkit.WebView.HitTestResult;

            public getTitle(): string;

            public setInitialScale(param0: number): void;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;

            public canGoBack(): boolean;

            public onTrackballEvent(param0: android.view.MotionEvent): boolean;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;

            public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;

            public stopLoading(): void;

            public getTextAlignment(): number;

            public onWindowFocusChanged(param0: boolean): void;

            public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;

            public capturePicture(): android.graphics.Picture;

            public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;

            public getAccessibilityNodeProvider(): android.view.accessibility.AccessibilityNodeProvider;

            public setPictureListener(param0: android.webkit.WebView.PictureListener): void;

            public createPrintDocumentAdapter(param0: string): android.print.PrintDocumentAdapter;

            public onChildViewRemoved(param0: android.view.View, param1: android.view.View): void;

            public requestImageRef(param0: android.os.Message): void;

            public getScale(): number;

            public onPause(): void;

            public onProvideVirtualStructure(param0: android.view.ViewStructure): void;

            public isTextAlignmentResolved(): boolean;

            public removeJavascriptInterface(param0: string): void;

            public setHttpAuthUsernamePassword(param0: string, param1: string, param2: string, param3: string): void;

            public getTextDirection(): number;

            public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;

            public onTouchEvent(param0: android.view.MotionEvent): boolean;

            public static clearClientCertPreferences(param0: javalangRunnable): void;

            public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;

            public setCertificate(param0: android.net.http.SslCertificate): void;

            public addJavascriptInterface(param0: javalangObject, param1: string): void;

            public postWebMessage(param0: android.webkit.WebMessage, param1: android.net.Uri): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet);

            public clearHistory(): void;

            public onHoverEvent(param0: android.view.MotionEvent): boolean;

            public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;

            public static setWebContentsDebuggingEnabled(param0: boolean): void;

            public addView(param0: android.view.View, param1: number): void;

            public savePassword(param0: string, param1: string, param2: string): void;

            public goForward(): void;

            public onCreateInputConnection(param0: android.view.inputmethod.EditorInfo): android.view.inputmethod.InputConnection;

            public loadData(param0: string, param1: string, param2: string): void;

            public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;

            public reload(): void;

            public saveWebArchive(param0: string, param1: boolean, param2: android.webkit.ValueCallback): void;

            public addView(param0: android.view.View, param1: number, param2: number): void;

            public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;

            public requestFocusNodeHref(param0: android.os.Message): void;

            public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;

            public bringChildToFront(param0: android.view.View): void;

            public copyBackForwardList(): android.webkit.WebBackForwardList;

            public requestTransparentRegion(param0: android.view.View): void;

            public canResolveTextAlignment(): boolean;

            public getParent(): android.view.ViewParent;

            public canZoomOut(): boolean;

            public dispatchDraw(param0: android.graphics.Canvas): void;

            public getFavicon(): android.graphics.Bitmap;

            public setDownloadListener(param0: android.webkit.DownloadListener): void;

            public focusSearch(param0: number): android.view.View;

            public recomputeViewAttributes(param0: android.view.View): void;

            public isLayoutRequested(): boolean;

            public computeVerticalScrollExtent(): number;

            public requestFocus(param0: number, param1: android.graphics.Rect): boolean;

            public pageUp(param0: boolean): boolean;

            public onChildViewAdded(param0: android.view.View, param1: android.view.View): void;

            public invokeZoomPicker(): void;

            public onWindowVisibilityChanged(param0: number): void;

            public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);

            public overlayVerticalScrollbar(): boolean;

            public evaluateJavascript(param0: string, param1: android.webkit.ValueCallback): void;

            public childDrawableStateChanged(param0: android.view.View): void;

            public addView(param0: android.view.View): void;

            public goBack(): void;

            public createWebMessageChannel(): native.Array<android.webkit.WebMessagePort>;

            public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;

            public documentHasImages(param0: android.os.Message): void;

            public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;

            public clearSslPreferences(): void;

            public onVisibilityChanged(param0: android.view.View, param1: number): void;

            public loadUrl(param0: string): void;

            public constructor(param0: android.content.Context);

            public pageDown(param0: boolean): boolean;

            public postUrl(param0: string, param1: native.Array<number>): void;

            public flingScroll(param0: number, param1: number): void;

            public isLayoutDirectionResolved(): boolean;

            public focusableViewAvailable(param0: android.view.View): void;

            public createContextMenu(param0: android.view.ContextMenu): void;

            public shouldDelayChildPressedState(): boolean;

            public onStartTemporaryDetach(): void;

            public canResolveLayoutDirection(): boolean;

            public onGlobalFocusChanged(param0: android.view.View, param1: android.view.View): void;

            public onFinishTemporaryDetach(): void;

            public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;

            public getCertificate(): android.net.http.SslCertificate;

            public getSettings(): android.webkit.WebSettings;

            public getParentForAccessibility(): android.view.ViewParent;

            public onResume(): void;

            public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;

            public pauseTimers(): void;

            public requestFocus(param0: number): boolean;

            public zoomBy(param0: number): void;

            public canGoBackOrForward(param0: number): boolean;

            public computeVerticalScrollOffset(): number;

            public onDraw(param0: android.graphics.Canvas): void;

            public setWebChromeClient(param0: android.webkit.WebChromeClient): void;

            public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;

            public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;

            public onScrollChanged(param0: number, param1: number, param2: number, param3: number): void;

            public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;

            public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;

            public goBackOrForward(param0: number): void;

            public overlayHorizontalScrollbar(): boolean;

            public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;

            public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;

            public isPrivateBrowsingEnabled(): boolean;

            public computeHorizontalScrollOffset(): number;

            public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;

            public zoomOut(): boolean;

            public computeScroll(): void;

            public removeView(param0: android.view.View): void;

            public clearChildFocus(param0: android.view.View): void;

            public destroy(): void;

            public requestDisallowInterceptTouchEvent(param0: boolean): void;

            public isTextDirectionResolved(): boolean;

            public setFindListener(param0: android.webkit.WebView.FindListener): void;

            public onAttachedToWindow(): void;
        }
        export module WebView {
            export class FindListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.webkit.WebView$FindListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onFindResultReceived(param0: number, param1: number, param2: boolean): void;
                });

                public onFindResultReceived(param0: number, param1: number, param2: boolean): void;
            }
            export class HitTestResult extends javalangObject {
                public static ANCHOR_TYPE: number;
                public static EDIT_TEXT_TYPE: number;
                public static EMAIL_TYPE: number;
                public static GEO_TYPE: number;
                public static IMAGE_ANCHOR_TYPE: number;
                public static IMAGE_TYPE: number;
                public static PHONE_TYPE: number;
                public static SRC_ANCHOR_TYPE: number;
                public static SRC_IMAGE_ANCHOR_TYPE: number;
                public static UNKNOWN_TYPE: number;

                public getType(): number;

                public getExtra(): string;
            }
            export class PictureListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.webkit.WebView$PictureListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onNewPicture(param0: android.webkit.WebView, param1: android.graphics.Picture): void;
                });

                public onNewPicture(param0: android.webkit.WebView, param1: android.graphics.Picture): void;
            }
            export abstract class VisualStateCallback extends javalangObject {
                public onComplete(param0: number): void;

                public constructor();
            }
            export class WebViewTransport extends javalangObject {
                public getWebView(): android.webkit.WebView;

                public constructor(param0: android.webkit.WebView);

                public setWebView(param0: android.webkit.WebView): void;
            }
        }
    }
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.net.http.SslError.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.view.InputEvent.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.webkit.ClientCertRequest.d.ts" />
/// <reference path="./android.webkit.HttpAuthHandler.d.ts" />
/// <reference path="./android.webkit.SslErrorHandler.d.ts" />
/// <reference path="./android.webkit.WebResourceError.d.ts" />
/// <reference path="./android.webkit.WebResourceRequest.d.ts" />
/// <reference path="./android.webkit.WebResourceResponse.d.ts" />
/// <reference path="./android.webkit.WebView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module webkit {
        export class WebViewClient extends javalangObject {
            public static ERROR_AUTHENTICATION: number;
            public static ERROR_BAD_URL: number;
            public static ERROR_CONNECT: number;
            public static ERROR_FAILED_SSL_HANDSHAKE: number;
            public static ERROR_FILE: number;
            public static ERROR_FILE_NOT_FOUND: number;
            public static ERROR_HOST_LOOKUP: number;
            public static ERROR_IO: number;
            public static ERROR_PROXY_AUTHENTICATION: number;
            public static ERROR_REDIRECT_LOOP: number;
            public static ERROR_TIMEOUT: number;
            public static ERROR_TOO_MANY_REQUESTS: number;
            public static ERROR_UNKNOWN: number;
            public static ERROR_UNSUPPORTED_AUTH_SCHEME: number;
            public static ERROR_UNSUPPORTED_SCHEME: number;

            public shouldOverrideUrlLoading(param0: android.webkit.WebView, param1: string): boolean;

            public onScaleChanged(param0: android.webkit.WebView, param1: number, param2: number): void;

            public shouldInterceptRequest(param0: android.webkit.WebView, param1: android.webkit.WebResourceRequest): android.webkit.WebResourceResponse;

            public onReceivedHttpError(param0: android.webkit.WebView, param1: android.webkit.WebResourceRequest, param2: android.webkit.WebResourceResponse): void;

            public onFormResubmission(param0: android.webkit.WebView, param1: android.os.Message, param2: android.os.Message): void;

            public onReceivedClientCertRequest(param0: android.webkit.WebView, param1: android.webkit.ClientCertRequest): void;

            public onReceivedSslError(param0: android.webkit.WebView, param1: android.webkit.SslErrorHandler, param2: android.net.http.SslError): void;

            public onUnhandledKeyEvent(param0: android.webkit.WebView, param1: android.view.KeyEvent): void;

            public constructor();

            public onPageCommitVisible(param0: android.webkit.WebView, param1: string): void;

            public shouldInterceptRequest(param0: android.webkit.WebView, param1: string): android.webkit.WebResourceResponse;

            public onPageFinished(param0: android.webkit.WebView, param1: string): void;

            public onPageStarted(param0: android.webkit.WebView, param1: string, param2: android.graphics.Bitmap): void;

            public onLoadResource(param0: android.webkit.WebView, param1: string): void;

            public onTooManyRedirects(param0: android.webkit.WebView, param1: android.os.Message, param2: android.os.Message): void;

            public doUpdateVisitedHistory(param0: android.webkit.WebView, param1: string, param2: boolean): void;

            public onUnhandledInputEvent(param0: android.webkit.WebView, param1: android.view.InputEvent): void;

            public onReceivedError(param0: android.webkit.WebView, param1: android.webkit.WebResourceRequest, param2: android.webkit.WebResourceError): void;

            public shouldOverrideKeyEvent(param0: android.webkit.WebView, param1: android.view.KeyEvent): boolean;

            public onReceivedLoginRequest(param0: android.webkit.WebView, param1: string, param2: string, param3: string): void;

            public onReceivedError(param0: android.webkit.WebView, param1: number, param2: string, param3: string): void;

            public onReceivedHttpAuthRequest(param0: android.webkit.WebView, param1: android.webkit.HttpAuthHandler, param2: string, param3: string): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
declare module android {
    export module webkit {
        export abstract class WebViewDatabase extends javalangObject {
            public clearFormData(): void;

            public static getInstance(param0: android.content.Context): android.webkit.WebViewDatabase;

            public hasFormData(): boolean;

            public constructor();

            public clearUsernamePassword(): void;

            public hasHttpAuthUsernamePassword(): boolean;

            public clearHttpAuthUsernamePassword(): void;

            public hasUsernamePassword(): boolean;
        }
    }
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.webkit.WebView.d.ts" />
declare module android {
    export module webkit {
        export class WebViewFragment extends android.app.Fragment {
            public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;

            public onTrimMemory(param0: number): void;

            public onCreateView(param0: android.view.LayoutInflater, param1: android.view.ViewGroup, param2: android.os.Bundle): android.view.View;

            public onResume(): void;

            public onPause(): void;

            public onDestroyView(): void;

            public getWebView(): android.webkit.WebView;

            public constructor();

            public onDestroy(): void;
        }
    }
}
