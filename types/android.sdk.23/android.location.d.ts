
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module android {
    export module location {
        export class Address extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;

            public setAddressLine(param0: number, param1: string): void;

            public setCountryName(param0: string): void;

            public setLongitude(param0: number): void;

            public getCountryCode(): string;

            public getSubLocality(): string;

            public hasLatitude(): boolean;

            public getMaxAddressLineIndex(): number;

            public setExtras(param0: android.os.Bundle): void;

            public setCountryCode(param0: string): void;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getFeatureName(): string;

            public setLatitude(param0: number): void;

            public getCountryName(): string;

            public setAdminArea(param0: string): void;

            public setSubAdminArea(param0: string): void;

            public getSubThoroughfare(): string;

            public getThoroughfare(): string;

            public getSubAdminArea(): string;

            public getLongitude(): number;

            public setPhone(param0: string): void;

            public setSubLocality(param0: string): void;

            public getUrl(): string;

            public getPostalCode(): string;

            public clearLatitude(): void;

            public setUrl(param0: string): void;

            public constructor(param0: javautilLocale);

            public getPremises(): string;

            public getLatitude(): number;

            public clearLongitude(): void;

            public setFeatureName(param0: string): void;

            public getAddressLine(param0: number): string;

            public toString(): string;

            public getAdminArea(): string;

            public setPostalCode(param0: string): void;

            public describeContents(): number;

            public hasLongitude(): boolean;

            public setPremises(param0: string): void;

            public getLocale(): javautilLocale;

            public setLocality(param0: string): void;

            public setThoroughfare(param0: string): void;

            public getPhone(): string;

            public setSubThoroughfare(param0: string): void;

            public getExtras(): android.os.Bundle;

            public getLocality(): string;
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module location {
        export class Criteria extends javalangObject implements android.os.Parcelable {
            public static ACCURACY_COARSE: number;
            public static ACCURACY_FINE: number;
            public static ACCURACY_HIGH: number;
            public static ACCURACY_LOW: number;
            public static ACCURACY_MEDIUM: number;
            public static CREATOR: android.os.Parcelable.Creator;
            public static NO_REQUIREMENT: number;
            public static POWER_HIGH: number;
            public static POWER_LOW: number;
            public static POWER_MEDIUM: number;

            public getSpeedAccuracy(): number;

            public constructor(param0: android.location.Criteria);

            public setBearingAccuracy(param0: number): void;

            public isCostAllowed(): boolean;

            public setAccuracy(param0: number): void;

            public getAccuracy(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public getPowerRequirement(): number;

            public getVerticalAccuracy(): number;

            public setCostAllowed(param0: boolean): void;

            public setBearingRequired(param0: boolean): void;

            public setSpeedAccuracy(param0: number): void;

            public setPowerRequirement(param0: number): void;

            public constructor();

            public setHorizontalAccuracy(param0: number): void;

            public isSpeedRequired(): boolean;

            public isAltitudeRequired(): boolean;

            public setVerticalAccuracy(param0: number): void;

            public getBearingAccuracy(): number;

            public isBearingRequired(): boolean;

            public toString(): string;

            public describeContents(): number;

            public setAltitudeRequired(param0: boolean): void;

            public setSpeedRequired(param0: boolean): void;

            public getHorizontalAccuracy(): number;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module android {
    export module location {
        export class Geocoder extends javalangObject {
            public static isPresent(): boolean;

            public constructor(param0: android.content.Context);

            public getFromLocationName(param0: string, param1: number): javautilList;

            public getFromLocation(param0: number, param1: number, param2: number): javautilList;

            public constructor(param0: android.content.Context, param1: javautilLocale);

            public getFromLocationName(param0: string, param1: number, param2: number, param3: number, param4: number, param5: number): javautilList;
        }
    }
}

declare module android {
    export module location {
        export class GpsSatellite extends javalangObject {
            public getSnr(): number;

            public getElevation(): number;

            public getAzimuth(): number;

            public hasAlmanac(): boolean;

            public hasEphemeris(): boolean;

            public getPrn(): number;

            public usedInFix(): boolean;
        }
    }
}

/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module location {
        export class GpsStatus extends javalangObject {
            public static GPS_EVENT_FIRST_FIX: number;
            public static GPS_EVENT_SATELLITE_STATUS: number;
            public static GPS_EVENT_STARTED: number;
            public static GPS_EVENT_STOPPED: number;

            public getSatellites(): javalangIterable;

            public getTimeToFirstFix(): number;

            public getMaxSatellites(): number;
        }
        export module GpsStatus {
            export class Listener extends javalangObject {
                /**
                 * Constructs a new instance of the android.location.GpsStatus$Listener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onGpsStatusChanged(param0: number): void;
                });

                public onGpsStatusChanged(param0: number): void;
            }
            export class NmeaListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.location.GpsStatus$NmeaListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onNmeaReceived(param0: number, param1: string): void;
                });

                public onNmeaReceived(param0: number, param1: string): void;
            }
        }
    }
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module location {
        export class Location extends javalangObject implements android.os.Parcelable {
            public static CREATOR: android.os.Parcelable.Creator;
            public static FORMAT_DEGREES: number;
            public static FORMAT_MINUTES: number;
            public static FORMAT_SECONDS: number;

            public getBearing(): number;

            public bearingTo(param0: android.location.Location): number;

            public setSpeed(param0: number): void;

            public removeSpeed(): void;

            public setLongitude(param0: number): void;

            public constructor(param0: android.location.Location);

            public static convert(param0: number, param1: number): string;

            public distanceTo(param0: android.location.Location): number;

            public getProvider(): string;

            public getElapsedRealtimeNanos(): number;

            public getSpeed(): number;

            public hasBearing(): boolean;

            public setBearing(param0: number): void;

            public setProvider(param0: string): void;

            public removeBearing(): void;

            public getAltitude(): number;

            public removeAccuracy(): void;

            public setAccuracy(param0: number): void;

            public setExtras(param0: android.os.Bundle): void;

            public set(param0: android.location.Location): void;

            public getAccuracy(): number;

            public writeToParcel(param0: android.os.Parcel, param1: number): void;

            public reset(): void;

            public setLatitude(param0: number): void;

            public constructor(param0: string);

            public hasAccuracy(): boolean;

            public getLongitude(): number;

            public static distanceBetween(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): void;

            public getLatitude(): number;

            public hasAltitude(): boolean;

            public hasSpeed(): boolean;

            public setAltitude(param0: number): void;

            public removeAltitude(): void;

            public isFromMockProvider(): boolean;

            public toString(): string;

            public setTime(param0: number): void;

            public static convert(param0: string): number;

            public getTime(): number;

            public describeContents(): number;

            public setElapsedRealtimeNanos(param0: number): void;

            public dump(param0: android.util.Printer, param1: string): void;

            public getExtras(): android.os.Bundle;
        }
    }
}

/// <reference path="./android.location.Location.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module location {
        export class LocationListener extends javalangObject {
            /**
             * Constructs a new instance of the android.location.LocationListener interface with the provided implementation.
             */
            public constructor(implementation: {
                onLocationChanged(param0: android.location.Location): void;
                onStatusChanged(param0: string, param1: number, param2: android.os.Bundle): void;
                onProviderEnabled(param0: string): void;
                onProviderDisabled(param0: string): void;
            });

            public onProviderDisabled(param0: string): void;

            public onProviderEnabled(param0: string): void;

            public onLocationChanged(param0: android.location.Location): void;

            public onStatusChanged(param0: string, param1: number, param2: android.os.Bundle): void;
        }
    }
}

/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.location.Criteria.d.ts" />
/// <reference path="./android.location.GpsStatus.d.ts" />
/// <reference path="./android.location.Location.d.ts" />
/// <reference path="./android.location.LocationListener.d.ts" />
/// <reference path="./android.location.LocationProvider.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Looper.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module location {
        export class LocationManager extends javalangObject {
            public static GPS_PROVIDER: string;
            public static KEY_LOCATION_CHANGED: string;
            public static KEY_PROVIDER_ENABLED: string;
            public static KEY_PROXIMITY_ENTERING: string;
            public static KEY_STATUS_CHANGED: string;
            public static MODE_CHANGED_ACTION: string;
            public static NETWORK_PROVIDER: string;
            public static PASSIVE_PROVIDER: string;
            public static PROVIDERS_CHANGED_ACTION: string;

            public requestSingleUpdate(param0: android.location.Criteria, param1: android.app.PendingIntent): void;

            public getProviders(param0: android.location.Criteria, param1: boolean): javautilList;

            public getLastKnownLocation(param0: string): android.location.Location;

            public clearTestProviderStatus(param0: string): void;

            public requestLocationUpdates(param0: number, param1: number, param2: android.location.Criteria, param3: android.location.LocationListener, param4: android.os.Looper): void;
            public requestLocationUpdates(param0: string, param1: number, param2: number, param3: android.location.LocationListener): void;
            public requestLocationUpdates(param0: string, param1: number, param2: number, param3: android.app.PendingIntent): void;

            public getAllProviders(): javautilList;

            public addTestProvider(param0: string, param1: boolean, param2: boolean, param3: boolean, param4: boolean, param5: boolean, param6: boolean, param7: boolean, param8: number, param9: number): void;

            public getBestProvider(param0: android.location.Criteria, param1: boolean): string;

            public isProviderEnabled(param0: string): boolean;

            public setTestProviderStatus(param0: string, param1: number, param2: android.os.Bundle, param3: number): void;

            public requestLocationUpdates(param0: number, param1: number, param2: android.location.Criteria, param3: android.app.PendingIntent): void;

            public getProvider(param0: string): android.location.LocationProvider;

            public setTestProviderLocation(param0: string, param1: android.location.Location): void;

            public getProviders(param0: boolean): javautilList;

            public requestSingleUpdate(param0: android.location.Criteria, param1: android.location.LocationListener, param2: android.os.Looper): void;

            public setTestProviderEnabled(param0: string, param1: boolean): void;

            public requestSingleUpdate(param0: string, param1: android.location.LocationListener, param2: android.os.Looper): void;

            public getGpsStatus(param0: android.location.GpsStatus): android.location.GpsStatus;

            public addNmeaListener(param0: android.location.GpsStatus.NmeaListener): boolean;

            public addProximityAlert(param0: number, param1: number, param2: number, param3: number, param4: android.app.PendingIntent): void;

            public sendExtraCommand(param0: string, param1: string, param2: android.os.Bundle): boolean;

            public removeProximityAlert(param0: android.app.PendingIntent): void;

            public requestSingleUpdate(param0: string, param1: android.app.PendingIntent): void;

            public clearTestProviderLocation(param0: string): void;

            public removeGpsStatusListener(param0: android.location.GpsStatus.Listener): void;

            public removeUpdates(param0: android.location.LocationListener): void;

            public requestLocationUpdates(param0: string, param1: number, param2: number, param3: android.location.LocationListener, param4: android.os.Looper): void;

            public addGpsStatusListener(param0: android.location.GpsStatus.Listener): boolean;

            public clearTestProviderEnabled(param0: string): void;

            public removeUpdates(param0: android.app.PendingIntent): void;

            public removeTestProvider(param0: string): void;

            public removeNmeaListener(param0: android.location.GpsStatus.NmeaListener): void;
        }
    }
}

/// <reference path="./android.location.Criteria.d.ts" />
declare module android {
    export module location {
        export class LocationProvider extends javalangObject {
            public static AVAILABLE: number;
            public static OUT_OF_SERVICE: number;
            public static TEMPORARILY_UNAVAILABLE: number;

            public hasMonetaryCost(): boolean;

            public supportsBearing(): boolean;

            public getName(): string;

            public requiresCell(): boolean;

            public meetsCriteria(param0: android.location.Criteria): boolean;

            public supportsSpeed(): boolean;

            public getAccuracy(): number;

            public getPowerRequirement(): number;

            public requiresSatellite(): boolean;

            public supportsAltitude(): boolean;

            public requiresNetwork(): boolean;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module location {
        export abstract class SettingInjectorService extends android.app.Service {
            public static ACTION_INJECTED_SETTING_CHANGED: string;
            public static ACTION_SERVICE_INTENT: string;
            public static ATTRIBUTES_NAME: string;
            public static META_DATA_NAME: string;

            public onTrimMemory(param0: number): void;

            public onBind(param0: android.content.Intent): android.os.IBinder;

            public constructor(param0: android.content.Context);

            public onGetSummary(): string;

            public onGetEnabled(): boolean;

            public constructor();

            public onStartCommand(param0: android.content.Intent, param1: number, param2: number): number;

            public onStart(param0: android.content.Intent, param1: number): void;

            public constructor(param0: string);
        }
    }
}
