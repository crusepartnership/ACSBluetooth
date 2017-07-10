
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.SurfaceTexture.d.ts" />
/// <reference path="./android.hardware.Camera.d.ts" />
/// <reference path="./android.view.SurfaceHolder.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module hardware {
        export class Camera extends javalangObject {
            public static ACTION_NEW_PICTURE: string;
            public static ACTION_NEW_VIDEO: string;
            public static CAMERA_ERROR_EVICTED: number;
            public static CAMERA_ERROR_SERVER_DIED: number;
            public static CAMERA_ERROR_UNKNOWN: number;

            public enableShutterSound(param0: boolean): boolean;

            public stopFaceDetection(): void;

            public static open(param0: number): android.hardware.Camera;

            public setFaceDetectionListener(param0: android.hardware.Camera.FaceDetectionListener): void;

            public takePicture(param0: android.hardware.Camera.ShutterCallback, param1: android.hardware.Camera.PictureCallback, param2: android.hardware.Camera.PictureCallback): void;

            public lock(): void;

            public startPreview(): void;

            public setErrorCallback(param0: android.hardware.Camera.ErrorCallback): void;

            public startSmoothZoom(param0: number): void;

            public setZoomChangeListener(param0: android.hardware.Camera.OnZoomChangeListener): void;

            public setPreviewTexture(param0: android.graphics.SurfaceTexture): void;

            public finalize(): void;

            public release(): void;

            public setPreviewCallbackWithBuffer(param0: android.hardware.Camera.PreviewCallback): void;

            public takePicture(param0: android.hardware.Camera.ShutterCallback, param1: android.hardware.Camera.PictureCallback, param2: android.hardware.Camera.PictureCallback, param3: android.hardware.Camera.PictureCallback): void;

            public setPreviewCallback(param0: android.hardware.Camera.PreviewCallback): void;

            public setDisplayOrientation(param0: number): void;

            public autoFocus(param0: android.hardware.Camera.AutoFocusCallback): void;

            public stopSmoothZoom(): void;

            public reconnect(): void;

            public getParameters(): android.hardware.Camera.Parameters;

            public setPreviewDisplay(param0: android.view.SurfaceHolder): void;

            public unlock(): void;

            public setAutoFocusMoveCallback(param0: android.hardware.Camera.AutoFocusMoveCallback): void;

            public setOneShotPreviewCallback(param0: android.hardware.Camera.PreviewCallback): void;

            public cancelAutoFocus(): void;

            public static getCameraInfo(param0: number, param1: android.hardware.Camera.CameraInfo): void;

            public addCallbackBuffer(param0: native.Array<number>): void;

            public static open(): android.hardware.Camera;

            public setParameters(param0: android.hardware.Camera.Parameters): void;

            public stopPreview(): void;

            public static getNumberOfCameras(): number;

            public startFaceDetection(): void;
        }
        export module Camera {
            export class Area extends javalangObject {
                public rect: android.graphics.Rect;
                public weight: number;

                public equals(param0: javalangObject): boolean;

                public constructor(param0: android.graphics.Rect, param1: number);
            }
            export class AutoFocusCallback extends javalangObject {
                /**
                 * Constructs a new instance of the android.hardware.Camera$AutoFocusCallback interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onAutoFocus(param0: boolean, param1: android.hardware.Camera): void;
                });

                public onAutoFocus(param0: boolean, param1: android.hardware.Camera): void;
            }
            export class AutoFocusMoveCallback extends javalangObject {
                /**
                 * Constructs a new instance of the android.hardware.Camera$AutoFocusMoveCallback interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onAutoFocusMoving(param0: boolean, param1: android.hardware.Camera): void;
                });

                public onAutoFocusMoving(param0: boolean, param1: android.hardware.Camera): void;
            }
            export class CameraInfo extends javalangObject {
                public static CAMERA_FACING_BACK: number;
                public static CAMERA_FACING_FRONT: number;
                public canDisableShutterSound: boolean;
                public facing: number;
                public orientation: number;

                public constructor();
            }
            export class ErrorCallback extends javalangObject {
                /**
                 * Constructs a new instance of the android.hardware.Camera$ErrorCallback interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onError(param0: number, param1: android.hardware.Camera): void;
                });

                public onError(param0: number, param1: android.hardware.Camera): void;
            }
            export class Face extends javalangObject {
                public id: number;
                public leftEye: android.graphics.Point;
                public mouth: android.graphics.Point;
                public rect: android.graphics.Rect;
                public rightEye: android.graphics.Point;
                public score: number;

                public constructor();
            }
            export class FaceDetectionListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.hardware.Camera$FaceDetectionListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onFaceDetection(param0: native.Array<android.hardware.Camera.Face>, param1: android.hardware.Camera): void;
                });

                public onFaceDetection(param0: native.Array<android.hardware.Camera.Face>, param1: android.hardware.Camera): void;
            }
            export class OnZoomChangeListener extends javalangObject {
                /**
                 * Constructs a new instance of the android.hardware.Camera$OnZoomChangeListener interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onZoomChange(param0: number, param1: boolean, param2: android.hardware.Camera): void;
                });

                public onZoomChange(param0: number, param1: boolean, param2: android.hardware.Camera): void;
            }
            export class Parameters extends javalangObject {
                public static ANTIBANDING_50HZ: string;
                public static ANTIBANDING_60HZ: string;
                public static ANTIBANDING_AUTO: string;
                public static ANTIBANDING_OFF: string;
                public static EFFECT_AQUA: string;
                public static EFFECT_BLACKBOARD: string;
                public static EFFECT_MONO: string;
                public static EFFECT_NEGATIVE: string;
                public static EFFECT_NONE: string;
                public static EFFECT_POSTERIZE: string;
                public static EFFECT_SEPIA: string;
                public static EFFECT_SOLARIZE: string;
                public static EFFECT_WHITEBOARD: string;
                public static FLASH_MODE_AUTO: string;
                public static FLASH_MODE_OFF: string;
                public static FLASH_MODE_ON: string;
                public static FLASH_MODE_RED_EYE: string;
                public static FLASH_MODE_TORCH: string;
                public static FOCUS_DISTANCE_FAR_INDEX: number;
                public static FOCUS_DISTANCE_NEAR_INDEX: number;
                public static FOCUS_DISTANCE_OPTIMAL_INDEX: number;
                public static FOCUS_MODE_AUTO: string;
                public static FOCUS_MODE_CONTINUOUS_PICTURE: string;
                public static FOCUS_MODE_CONTINUOUS_VIDEO: string;
                public static FOCUS_MODE_EDOF: string;
                public static FOCUS_MODE_FIXED: string;
                public static FOCUS_MODE_INFINITY: string;
                public static FOCUS_MODE_MACRO: string;
                public static PREVIEW_FPS_MAX_INDEX: number;
                public static PREVIEW_FPS_MIN_INDEX: number;
                public static SCENE_MODE_ACTION: string;
                public static SCENE_MODE_AUTO: string;
                public static SCENE_MODE_BARCODE: string;
                public static SCENE_MODE_BEACH: string;
                public static SCENE_MODE_CANDLELIGHT: string;
                public static SCENE_MODE_FIREWORKS: string;
                public static SCENE_MODE_HDR: string;
                public static SCENE_MODE_LANDSCAPE: string;
                public static SCENE_MODE_NIGHT: string;
                public static SCENE_MODE_NIGHT_PORTRAIT: string;
                public static SCENE_MODE_PARTY: string;
                public static SCENE_MODE_PORTRAIT: string;
                public static SCENE_MODE_SNOW: string;
                public static SCENE_MODE_SPORTS: string;
                public static SCENE_MODE_STEADYPHOTO: string;
                public static SCENE_MODE_SUNSET: string;
                public static SCENE_MODE_THEATRE: string;
                public static WHITE_BALANCE_AUTO: string;
                public static WHITE_BALANCE_CLOUDY_DAYLIGHT: string;
                public static WHITE_BALANCE_DAYLIGHT: string;
                public static WHITE_BALANCE_FLUORESCENT: string;
                public static WHITE_BALANCE_INCANDESCENT: string;
                public static WHITE_BALANCE_SHADE: string;
                public static WHITE_BALANCE_TWILIGHT: string;
                public static WHITE_BALANCE_WARM_FLUORESCENT: string;

                public getPreviewFormat(): number;

                public getFocusAreas(): javautilList;

                public getFocusMode(): string;

                public getSupportedVideoSizes(): javautilList;

                public getSupportedFocusModes(): javautilList;

                public setPreviewFpsRange(param0: number, param1: number): void;

                public getSupportedJpegThumbnailSizes(): javautilList;

                public getWhiteBalance(): string;

                public getSupportedPreviewFormats(): javautilList;

                public setPictureFormat(param0: number): void;

                public removeGpsData(): void;

                public isAutoWhiteBalanceLockSupported(): boolean;

                public getSceneMode(): string;

                public getExposureCompensationStep(): number;

                public set(param0: string, param1: number): void;

                public getMaxNumFocusAreas(): number;

                public getJpegThumbnailQuality(): number;

                public isSmoothZoomSupported(): boolean;

                public getVideoStabilization(): boolean;

                public getMaxExposureCompensation(): number;

                public getPreviewFrameRate(): number;

                public getMeteringAreas(): javautilList;

                public getMaxNumMeteringAreas(): number;

                public setJpegThumbnailQuality(param0: number): void;

                public setColorEffect(param0: string): void;

                public setVideoStabilization(param0: boolean): void;

                public getSupportedPreviewFpsRange(): javautilList;

                public getPictureFormat(): number;

                public get(param0: string): string;

                public setFlashMode(param0: string): void;

                public getAntibanding(): string;

                public getJpegThumbnailSize(): android.hardware.Camera.Size;

                public getSupportedColorEffects(): javautilList;

                public getSupportedSceneModes(): javautilList;

                public setAntibanding(param0: string): void;

                public getFlashMode(): string;

                public getExposureCompensation(): number;

                public getPreviewFpsRange(param0: native.Array<number>): void;

                public getHorizontalViewAngle(): number;

                public setMeteringAreas(param0: javautilList): void;

                public set(param0: string, param1: string): void;

                public getPictureSize(): android.hardware.Camera.Size;

                public isVideoSnapshotSupported(): boolean;

                public getAutoWhiteBalanceLock(): boolean;

                public isVideoStabilizationSupported(): boolean;

                public getSupportedPreviewFrameRates(): javautilList;

                public setWhiteBalance(param0: string): void;

                public getSupportedAntibanding(): javautilList;

                public getMaxNumDetectedFaces(): number;

                public getFocusDistances(param0: native.Array<number>): void;

                public getPreferredPreviewSizeForVideo(): android.hardware.Camera.Size;

                public setJpegThumbnailSize(param0: number, param1: number): void;

                public getVerticalViewAngle(): number;

                public getZoom(): number;

                public getZoomRatios(): javautilList;

                public setGpsTimestamp(param0: number): void;

                public setFocusMode(param0: string): void;

                public setRecordingHint(param0: boolean): void;

                public setSceneMode(param0: string): void;

                public setGpsLatitude(param0: number): void;

                public unflatten(param0: string): void;

                public flatten(): string;

                public getSupportedPictureSizes(): javautilList;

                public setExposureCompensation(param0: number): void;

                public getSupportedFlashModes(): javautilList;

                public getSupportedWhiteBalance(): javautilList;

                public getJpegQuality(): number;

                public setPreviewFormat(param0: number): void;

                public getFocalLength(): number;

                public setAutoWhiteBalanceLock(param0: boolean): void;

                public setFocusAreas(param0: javautilList): void;

                public setPictureSize(param0: number, param1: number): void;

                public setJpegQuality(param0: number): void;

                public setPreviewSize(param0: number, param1: number): void;

                public getSupportedPictureFormats(): javautilList;

                public setZoom(param0: number): void;

                public getColorEffect(): string;

                public getPreviewSize(): android.hardware.Camera.Size;

                public setPreviewFrameRate(param0: number): void;

                public getAutoExposureLock(): boolean;

                public setAutoExposureLock(param0: boolean): void;

                public setGpsAltitude(param0: number): void;

                public getMaxZoom(): number;

                public isAutoExposureLockSupported(): boolean;

                public getSupportedPreviewSizes(): javautilList;

                public remove(param0: string): void;

                public setRotation(param0: number): void;

                public setGpsProcessingMethod(param0: string): void;

                public getMinExposureCompensation(): number;

                public isZoomSupported(): boolean;

                public setGpsLongitude(param0: number): void;

                public getInt(param0: string): number;
            }
            export class PictureCallback extends javalangObject {
                /**
                 * Constructs a new instance of the android.hardware.Camera$PictureCallback interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onPictureTaken(param0: native.Array<number>, param1: android.hardware.Camera): void;
                });

                public onPictureTaken(param0: native.Array<number>, param1: android.hardware.Camera): void;
            }
            export class PreviewCallback extends javalangObject {
                /**
                 * Constructs a new instance of the android.hardware.Camera$PreviewCallback interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onPreviewFrame(param0: native.Array<number>, param1: android.hardware.Camera): void;
                });

                public onPreviewFrame(param0: native.Array<number>, param1: android.hardware.Camera): void;
            }
            export class ShutterCallback extends javalangObject {
                /**
                 * Constructs a new instance of the android.hardware.Camera$ShutterCallback interface with the provided implementation.
                 */
                public constructor(implementation: {
                    onShutter(): void;
                });

                public onShutter(): void;
            }
            export class Size extends javalangObject {
                public height: number;
                public width: number;

                public equals(param0: javalangObject): boolean;

                public hashCode(): number;

                public constructor(param0: android.hardware.Camera, param1: number, param2: number);
            }
        }
    }
}

/// <reference path="./android.hardware.ConsumerIrManager.d.ts" />
declare module android {
    export module hardware {
        export class ConsumerIrManager extends javalangObject {
            public transmit(param0: number, param1: native.Array<number>): void;

            public hasIrEmitter(): boolean;

            public getCarrierFrequencies(): native.Array<android.hardware.ConsumerIrManager.CarrierFrequencyRange>;
        }
        export module ConsumerIrManager {
            export class CarrierFrequencyRange extends javalangObject {
                public getMaxFrequency(): number;

                public getMinFrequency(): number;

                public constructor(param0: android.hardware.ConsumerIrManager, param1: number, param2: number);
            }
        }
    }
}

declare module android {
    export module hardware {
        export class GeomagneticField extends javalangObject {
            public getInclination(): number;

            public getHorizontalStrength(): number;

            public getY(): number;

            public getDeclination(): number;

            public getX(): number;

            public constructor(param0: number, param1: number, param2: number, param3: number);

            public getZ(): number;

            public getFieldStrength(): number;
        }
    }
}

declare module android {
    export module hardware {
        export class Sensor extends javalangObject {
            public static REPORTING_MODE_CONTINUOUS: number;
            public static REPORTING_MODE_ONE_SHOT: number;
            public static REPORTING_MODE_ON_CHANGE: number;
            public static REPORTING_MODE_SPECIAL_TRIGGER: number;
            public static STRING_TYPE_ACCELEROMETER: string;
            public static STRING_TYPE_AMBIENT_TEMPERATURE: string;
            public static STRING_TYPE_GAME_ROTATION_VECTOR: string;
            public static STRING_TYPE_GEOMAGNETIC_ROTATION_VECTOR: string;
            public static STRING_TYPE_GRAVITY: string;
            public static STRING_TYPE_GYROSCOPE: string;
            public static STRING_TYPE_GYROSCOPE_UNCALIBRATED: string;
            public static STRING_TYPE_HEART_RATE: string;
            public static STRING_TYPE_LIGHT: string;
            public static STRING_TYPE_LINEAR_ACCELERATION: string;
            public static STRING_TYPE_MAGNETIC_FIELD: string;
            public static STRING_TYPE_MAGNETIC_FIELD_UNCALIBRATED: string;
            public static STRING_TYPE_ORIENTATION: string;
            public static STRING_TYPE_PRESSURE: string;
            public static STRING_TYPE_PROXIMITY: string;
            public static STRING_TYPE_RELATIVE_HUMIDITY: string;
            public static STRING_TYPE_ROTATION_VECTOR: string;
            public static STRING_TYPE_SIGNIFICANT_MOTION: string;
            public static STRING_TYPE_STEP_COUNTER: string;
            public static STRING_TYPE_STEP_DETECTOR: string;
            public static STRING_TYPE_TEMPERATURE: string;
            public static TYPE_ACCELEROMETER: number;
            public static TYPE_ALL: number;
            public static TYPE_AMBIENT_TEMPERATURE: number;
            public static TYPE_GAME_ROTATION_VECTOR: number;
            public static TYPE_GEOMAGNETIC_ROTATION_VECTOR: number;
            public static TYPE_GRAVITY: number;
            public static TYPE_GYROSCOPE: number;
            public static TYPE_GYROSCOPE_UNCALIBRATED: number;
            public static TYPE_HEART_RATE: number;
            public static TYPE_LIGHT: number;
            public static TYPE_LINEAR_ACCELERATION: number;
            public static TYPE_MAGNETIC_FIELD: number;
            public static TYPE_MAGNETIC_FIELD_UNCALIBRATED: number;
            public static TYPE_ORIENTATION: number;
            public static TYPE_PRESSURE: number;
            public static TYPE_PROXIMITY: number;
            public static TYPE_RELATIVE_HUMIDITY: number;
            public static TYPE_ROTATION_VECTOR: number;
            public static TYPE_SIGNIFICANT_MOTION: number;
            public static TYPE_STEP_COUNTER: number;
            public static TYPE_STEP_DETECTOR: number;
            public static TYPE_TEMPERATURE: number;

            public getType(): number;

            public getFifoMaxEventCount(): number;

            public getStringType(): string;

            public getVendor(): string;

            public getResolution(): number;

            public getReportingMode(): number;

            public getMaxDelay(): number;

            public getPower(): number;

            public getMinDelay(): number;

            public getVersion(): number;

            public toString(): string;

            public getName(): string;

            public isWakeUpSensor(): boolean;

            public getMaximumRange(): number;

            public getFifoReservedEventCount(): number;
        }
    }
}

/// <reference path="./android.hardware.Sensor.d.ts" />
declare module android {
    export module hardware {
        export class SensorEvent extends javalangObject {
            public accuracy: number;
            public sensor: android.hardware.Sensor;
            public timestamp: number;
            public values: native.Array<number>;
        }
    }
}

/// <reference path="./android.hardware.Sensor.d.ts" />
/// <reference path="./android.hardware.SensorEvent.d.ts" />
declare module android {
    export module hardware {
        export class SensorEventListener extends javalangObject {
            /**
             * Constructs a new instance of the android.hardware.SensorEventListener interface with the provided implementation.
             */
            public constructor(implementation: {
                onSensorChanged(param0: android.hardware.SensorEvent): void;
                onAccuracyChanged(param0: android.hardware.Sensor, param1: number): void;
            });

            public onAccuracyChanged(param0: android.hardware.Sensor, param1: number): void;

            public onSensorChanged(param0: android.hardware.SensorEvent): void;
        }
    }
}

/// <reference path="./android.hardware.Sensor.d.ts" />
/// <reference path="./android.hardware.SensorEvent.d.ts" />
declare module android {
    export module hardware {
        export class SensorEventListener2 extends javalangObject implements android.hardware.SensorEventListener {
            /**
             * Constructs a new instance of the android.hardware.SensorEventListener2 interface with the provided implementation.
             */
            public constructor(implementation: {
                onFlushCompleted(param0: android.hardware.Sensor): void;
                onSensorChanged(param0: android.hardware.SensorEvent): void;
                onAccuracyChanged(param0: android.hardware.Sensor, param1: number): void;
            });

            public onFlushCompleted(param0: android.hardware.Sensor): void;

            public onAccuracyChanged(param0: android.hardware.Sensor, param1: number): void;

            public onSensorChanged(param0: android.hardware.SensorEvent): void;
        }
    }
}

declare module android {
    export module hardware {
        export class SensorListener extends javalangObject {
            /**
             * Constructs a new instance of the android.hardware.SensorListener interface with the provided implementation.
             */
            public constructor(implementation: {
                onSensorChanged(param0: number, param1: native.Array<number>): void;
                onAccuracyChanged(param0: number, param1: number): void;
            });

            public onSensorChanged(param0: number, param1: native.Array<number>): void;

            public onAccuracyChanged(param0: number, param1: number): void;
        }
    }
}

/// <reference path="./android.hardware.Sensor.d.ts" />
/// <reference path="./android.hardware.SensorEventListener.d.ts" />
/// <reference path="./android.hardware.SensorListener.d.ts" />
/// <reference path="./android.hardware.TriggerEventListener.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module hardware {
        export abstract class SensorManager extends javalangObject {
            public static AXIS_MINUS_X: number;
            public static AXIS_MINUS_Y: number;
            public static AXIS_MINUS_Z: number;
            public static AXIS_X: number;
            public static AXIS_Y: number;
            public static AXIS_Z: number;
            public static DATA_X: number;
            public static DATA_Y: number;
            public static DATA_Z: number;
            public static GRAVITY_DEATH_STAR_I: number;
            public static GRAVITY_EARTH: number;
            public static GRAVITY_JUPITER: number;
            public static GRAVITY_MARS: number;
            public static GRAVITY_MERCURY: number;
            public static GRAVITY_MOON: number;
            public static GRAVITY_NEPTUNE: number;
            public static GRAVITY_PLUTO: number;
            public static GRAVITY_SATURN: number;
            public static GRAVITY_SUN: number;
            public static GRAVITY_THE_ISLAND: number;
            public static GRAVITY_URANUS: number;
            public static GRAVITY_VENUS: number;
            public static LIGHT_CLOUDY: number;
            public static LIGHT_FULLMOON: number;
            public static LIGHT_NO_MOON: number;
            public static LIGHT_OVERCAST: number;
            public static LIGHT_SHADE: number;
            public static LIGHT_SUNLIGHT: number;
            public static LIGHT_SUNLIGHT_MAX: number;
            public static LIGHT_SUNRISE: number;
            public static MAGNETIC_FIELD_EARTH_MAX: number;
            public static MAGNETIC_FIELD_EARTH_MIN: number;
            public static PRESSURE_STANDARD_ATMOSPHERE: number;
            public static RAW_DATA_INDEX: number;
            public static RAW_DATA_X: number;
            public static RAW_DATA_Y: number;
            public static RAW_DATA_Z: number;
            public static SENSOR_ACCELEROMETER: number;
            public static SENSOR_ALL: number;
            public static SENSOR_DELAY_FASTEST: number;
            public static SENSOR_DELAY_GAME: number;
            public static SENSOR_DELAY_NORMAL: number;
            public static SENSOR_DELAY_UI: number;
            public static SENSOR_LIGHT: number;
            public static SENSOR_MAGNETIC_FIELD: number;
            public static SENSOR_MAX: number;
            public static SENSOR_MIN: number;
            public static SENSOR_ORIENTATION: number;
            public static SENSOR_ORIENTATION_RAW: number;
            public static SENSOR_PROXIMITY: number;
            public static SENSOR_STATUS_ACCURACY_HIGH: number;
            public static SENSOR_STATUS_ACCURACY_LOW: number;
            public static SENSOR_STATUS_ACCURACY_MEDIUM: number;
            public static SENSOR_STATUS_NO_CONTACT: number;
            public static SENSOR_STATUS_UNRELIABLE: number;
            public static SENSOR_TEMPERATURE: number;
            public static SENSOR_TRICORDER: number;
            public static STANDARD_GRAVITY: number;

            public static remapCoordinateSystem(param0: native.Array<number>, param1: number, param2: number, param3: native.Array<number>): boolean;

            public registerListener(param0: android.hardware.SensorListener, param1: number, param2: number): boolean;

            public getDefaultSensor(param0: number): android.hardware.Sensor;

            public registerListener(param0: android.hardware.SensorEventListener, param1: android.hardware.Sensor, param2: number, param3: number): boolean;

            public getSensors(): number;

            public registerListener(param0: android.hardware.SensorListener, param1: number): boolean;
            public registerListener(param0: android.hardware.SensorEventListener, param1: android.hardware.Sensor, param2: number): boolean;

            public unregisterListener(param0: android.hardware.SensorListener, param1: number): void;

            public static getAngleChange(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<number>): void;

            public unregisterListener(param0: android.hardware.SensorEventListener, param1: android.hardware.Sensor): void;

            public cancelTriggerSensor(param0: android.hardware.TriggerEventListener, param1: android.hardware.Sensor): boolean;

            public static getQuaternionFromVector(param0: native.Array<number>, param1: native.Array<number>): void;

            public registerListener(param0: android.hardware.SensorEventListener, param1: android.hardware.Sensor, param2: number, param3: android.os.Handler): boolean;

            public unregisterListener(param0: android.hardware.SensorListener): void;

            public static getInclination(param0: native.Array<number>): number;

            public static getAltitude(param0: number, param1: number): number;

            public getSensorList(param0: number): javautilList;

            public static getRotationMatrix(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<number>, param3: native.Array<number>): boolean;

            public getDefaultSensor(param0: number, param1: boolean): android.hardware.Sensor;

            public requestTriggerSensor(param0: android.hardware.TriggerEventListener, param1: android.hardware.Sensor): boolean;

            public unregisterListener(param0: android.hardware.SensorEventListener): void;

            public static getRotationMatrixFromVector(param0: native.Array<number>, param1: native.Array<number>): void;

            public registerListener(param0: android.hardware.SensorEventListener, param1: android.hardware.Sensor, param2: number, param3: number, param4: android.os.Handler): boolean;

            public flush(param0: android.hardware.SensorEventListener): boolean;

            public static getOrientation(param0: native.Array<number>, param1: native.Array<number>): native.Array<number>;
        }
    }
}

/// <reference path="./android.hardware.Sensor.d.ts" />
declare module android {
    export module hardware {
        export class TriggerEvent extends javalangObject {
            public sensor: android.hardware.Sensor;
            public timestamp: number;
            public values: native.Array<number>;
        }
    }
}

/// <reference path="./android.hardware.TriggerEvent.d.ts" />
declare module android {
    export module hardware {
        export abstract class TriggerEventListener extends javalangObject {
            public onTrigger(param0: android.hardware.TriggerEvent): void;

            public constructor();
        }
    }
}

/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module hardware {
        export module camera2 {
            export class CameraAccessException extends android.util.AndroidException {
                public static CAMERA_DISABLED: number;
                public static CAMERA_DISCONNECTED: number;
                public static CAMERA_ERROR: number;
                public static CAMERA_IN_USE: number;
                public static MAX_CAMERAS_IN_USE: number;

                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: number, param1: string);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: number, param1: javalangThrowable);

                public getReason(): number;

                public constructor(param0: number);
                public constructor(param0: number, param1: string, param2: javalangThrowable);
                public constructor(param0: string);
                public constructor(param0: javalangException);
                public constructor();
            }
        }
    }
}

/// <reference path="./android.hardware.camera2.CameraCaptureSession.d.ts" />
/// <reference path="./android.hardware.camera2.CameraDevice.d.ts" />
/// <reference path="./android.hardware.camera2.CaptureFailure.d.ts" />
/// <reference path="./android.hardware.camera2.CaptureRequest.d.ts" />
/// <reference path="./android.hardware.camera2.CaptureResult.d.ts" />
/// <reference path="./android.hardware.camera2.TotalCaptureResult.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module hardware {
        export module camera2 {
            export abstract class CameraCaptureSession extends javalangObject implements javalangAutoCloseable {
                public stopRepeating(): void;

                public setRepeatingBurst(param0: javautilList, param1: android.hardware.camera2.CameraCaptureSession.CaptureCallback, param2: android.os.Handler): number;

                public getInputSurface(): android.view.Surface;

                public close(): void;

                public setRepeatingRequest(param0: android.hardware.camera2.CaptureRequest, param1: android.hardware.camera2.CameraCaptureSession.CaptureCallback, param2: android.os.Handler): number;

                public captureBurst(param0: javautilList, param1: android.hardware.camera2.CameraCaptureSession.CaptureCallback, param2: android.os.Handler): number;

                public getDevice(): android.hardware.camera2.CameraDevice;

                public capture(param0: android.hardware.camera2.CaptureRequest, param1: android.hardware.camera2.CameraCaptureSession.CaptureCallback, param2: android.os.Handler): number;

                public prepare(param0: android.view.Surface): void;

                public abortCaptures(): void;

                public isReprocessable(): boolean;

                public constructor();
            }
            export module CameraCaptureSession {
                export abstract class CaptureCallback extends javalangObject {
                    public constructor();

                    public onCaptureStarted(param0: android.hardware.camera2.CameraCaptureSession, param1: android.hardware.camera2.CaptureRequest, param2: number, param3: number): void;

                    public onCaptureProgressed(param0: android.hardware.camera2.CameraCaptureSession, param1: android.hardware.camera2.CaptureRequest, param2: android.hardware.camera2.CaptureResult): void;

                    public onCaptureFailed(param0: android.hardware.camera2.CameraCaptureSession, param1: android.hardware.camera2.CaptureRequest, param2: android.hardware.camera2.CaptureFailure): void;

                    public onCaptureCompleted(param0: android.hardware.camera2.CameraCaptureSession, param1: android.hardware.camera2.CaptureRequest, param2: android.hardware.camera2.TotalCaptureResult): void;

                    public onCaptureSequenceCompleted(param0: android.hardware.camera2.CameraCaptureSession, param1: number, param2: number): void;

                    public onCaptureSequenceAborted(param0: android.hardware.camera2.CameraCaptureSession, param1: number): void;
                }
                export abstract class StateCallback extends javalangObject {
                    public onActive(param0: android.hardware.camera2.CameraCaptureSession): void;

                    public onClosed(param0: android.hardware.camera2.CameraCaptureSession): void;

                    public constructor();

                    public onConfigured(param0: android.hardware.camera2.CameraCaptureSession): void;

                    public onSurfacePrepared(param0: android.hardware.camera2.CameraCaptureSession, param1: android.view.Surface): void;

                    public onReady(param0: android.hardware.camera2.CameraCaptureSession): void;

                    public onConfigureFailed(param0: android.hardware.camera2.CameraCaptureSession): void;
                }
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module hardware {
        export module camera2 {
            export class CameraCharacteristics extends android.hardware.camera2.CameraMetadata {
                public static COLOR_CORRECTION_AVAILABLE_ABERRATION_MODES: android.hardware.camera2.CameraCharacteristics.Key;
                public static CONTROL_AE_AVAILABLE_ANTIBANDING_MODES: android.hardware.camera2.CameraCharacteristics.Key;
                public static CONTROL_AE_AVAILABLE_MODES: android.hardware.camera2.CameraCharacteristics.Key;
                public static CONTROL_AE_AVAILABLE_TARGET_FPS_RANGES: android.hardware.camera2.CameraCharacteristics.Key;
                public static CONTROL_AE_COMPENSATION_RANGE: android.hardware.camera2.CameraCharacteristics.Key;
                public static CONTROL_AE_COMPENSATION_STEP: android.hardware.camera2.CameraCharacteristics.Key;
                public static CONTROL_AE_LOCK_AVAILABLE: android.hardware.camera2.CameraCharacteristics.Key;
                public static CONTROL_AF_AVAILABLE_MODES: android.hardware.camera2.CameraCharacteristics.Key;
                public static CONTROL_AVAILABLE_EFFECTS: android.hardware.camera2.CameraCharacteristics.Key;
                public static CONTROL_AVAILABLE_MODES: android.hardware.camera2.CameraCharacteristics.Key;
                public static CONTROL_AVAILABLE_SCENE_MODES: android.hardware.camera2.CameraCharacteristics.Key;
                public static CONTROL_AVAILABLE_VIDEO_STABILIZATION_MODES: android.hardware.camera2.CameraCharacteristics.Key;
                public static CONTROL_AWB_AVAILABLE_MODES: android.hardware.camera2.CameraCharacteristics.Key;
                public static CONTROL_AWB_LOCK_AVAILABLE: android.hardware.camera2.CameraCharacteristics.Key;
                public static CONTROL_MAX_REGIONS_AE: android.hardware.camera2.CameraCharacteristics.Key;
                public static CONTROL_MAX_REGIONS_AF: android.hardware.camera2.CameraCharacteristics.Key;
                public static CONTROL_MAX_REGIONS_AWB: android.hardware.camera2.CameraCharacteristics.Key;
                public static DEPTH_DEPTH_IS_EXCLUSIVE: android.hardware.camera2.CameraCharacteristics.Key;
                public static EDGE_AVAILABLE_EDGE_MODES: android.hardware.camera2.CameraCharacteristics.Key;
                public static FLASH_INFO_AVAILABLE: android.hardware.camera2.CameraCharacteristics.Key;
                public static HOT_PIXEL_AVAILABLE_HOT_PIXEL_MODES: android.hardware.camera2.CameraCharacteristics.Key;
                public static INFO_SUPPORTED_HARDWARE_LEVEL: android.hardware.camera2.CameraCharacteristics.Key;
                public static JPEG_AVAILABLE_THUMBNAIL_SIZES: android.hardware.camera2.CameraCharacteristics.Key;
                public static LENS_FACING: android.hardware.camera2.CameraCharacteristics.Key;
                public static LENS_INFO_AVAILABLE_APERTURES: android.hardware.camera2.CameraCharacteristics.Key;
                public static LENS_INFO_AVAILABLE_FILTER_DENSITIES: android.hardware.camera2.CameraCharacteristics.Key;
                public static LENS_INFO_AVAILABLE_FOCAL_LENGTHS: android.hardware.camera2.CameraCharacteristics.Key;
                public static LENS_INFO_AVAILABLE_OPTICAL_STABILIZATION: android.hardware.camera2.CameraCharacteristics.Key;
                public static LENS_INFO_FOCUS_DISTANCE_CALIBRATION: android.hardware.camera2.CameraCharacteristics.Key;
                public static LENS_INFO_HYPERFOCAL_DISTANCE: android.hardware.camera2.CameraCharacteristics.Key;
                public static LENS_INFO_MINIMUM_FOCUS_DISTANCE: android.hardware.camera2.CameraCharacteristics.Key;
                public static LENS_INTRINSIC_CALIBRATION: android.hardware.camera2.CameraCharacteristics.Key;
                public static LENS_POSE_ROTATION: android.hardware.camera2.CameraCharacteristics.Key;
                public static LENS_POSE_TRANSLATION: android.hardware.camera2.CameraCharacteristics.Key;
                public static LENS_RADIAL_DISTORTION: android.hardware.camera2.CameraCharacteristics.Key;
                public static NOISE_REDUCTION_AVAILABLE_NOISE_REDUCTION_MODES: android.hardware.camera2.CameraCharacteristics.Key;
                public static REPROCESS_MAX_CAPTURE_STALL: android.hardware.camera2.CameraCharacteristics.Key;
                public static REQUEST_AVAILABLE_CAPABILITIES: android.hardware.camera2.CameraCharacteristics.Key;
                public static REQUEST_MAX_NUM_INPUT_STREAMS: android.hardware.camera2.CameraCharacteristics.Key;
                public static REQUEST_MAX_NUM_OUTPUT_PROC: android.hardware.camera2.CameraCharacteristics.Key;
                public static REQUEST_MAX_NUM_OUTPUT_PROC_STALLING: android.hardware.camera2.CameraCharacteristics.Key;
                public static REQUEST_MAX_NUM_OUTPUT_RAW: android.hardware.camera2.CameraCharacteristics.Key;
                public static REQUEST_PARTIAL_RESULT_COUNT: android.hardware.camera2.CameraCharacteristics.Key;
                public static REQUEST_PIPELINE_MAX_DEPTH: android.hardware.camera2.CameraCharacteristics.Key;
                public static SCALER_AVAILABLE_MAX_DIGITAL_ZOOM: android.hardware.camera2.CameraCharacteristics.Key;
                public static SCALER_CROPPING_TYPE: android.hardware.camera2.CameraCharacteristics.Key;
                public static SCALER_STREAM_CONFIGURATION_MAP: android.hardware.camera2.CameraCharacteristics.Key;
                public static SENSOR_AVAILABLE_TEST_PATTERN_MODES: android.hardware.camera2.CameraCharacteristics.Key;
                public static SENSOR_BLACK_LEVEL_PATTERN: android.hardware.camera2.CameraCharacteristics.Key;
                public static SENSOR_CALIBRATION_TRANSFORM1: android.hardware.camera2.CameraCharacteristics.Key;
                public static SENSOR_CALIBRATION_TRANSFORM2: android.hardware.camera2.CameraCharacteristics.Key;
                public static SENSOR_COLOR_TRANSFORM1: android.hardware.camera2.CameraCharacteristics.Key;
                public static SENSOR_COLOR_TRANSFORM2: android.hardware.camera2.CameraCharacteristics.Key;
                public static SENSOR_FORWARD_MATRIX1: android.hardware.camera2.CameraCharacteristics.Key;
                public static SENSOR_FORWARD_MATRIX2: android.hardware.camera2.CameraCharacteristics.Key;
                public static SENSOR_INFO_ACTIVE_ARRAY_SIZE: android.hardware.camera2.CameraCharacteristics.Key;
                public static SENSOR_INFO_COLOR_FILTER_ARRANGEMENT: android.hardware.camera2.CameraCharacteristics.Key;
                public static SENSOR_INFO_EXPOSURE_TIME_RANGE: android.hardware.camera2.CameraCharacteristics.Key;
                public static SENSOR_INFO_LENS_SHADING_APPLIED: android.hardware.camera2.CameraCharacteristics.Key;
                public static SENSOR_INFO_MAX_FRAME_DURATION: android.hardware.camera2.CameraCharacteristics.Key;
                public static SENSOR_INFO_PHYSICAL_SIZE: android.hardware.camera2.CameraCharacteristics.Key;
                public static SENSOR_INFO_PIXEL_ARRAY_SIZE: android.hardware.camera2.CameraCharacteristics.Key;
                public static SENSOR_INFO_PRE_CORRECTION_ACTIVE_ARRAY_SIZE: android.hardware.camera2.CameraCharacteristics.Key;
                public static SENSOR_INFO_SENSITIVITY_RANGE: android.hardware.camera2.CameraCharacteristics.Key;
                public static SENSOR_INFO_TIMESTAMP_SOURCE: android.hardware.camera2.CameraCharacteristics.Key;
                public static SENSOR_INFO_WHITE_LEVEL: android.hardware.camera2.CameraCharacteristics.Key;
                public static SENSOR_MAX_ANALOG_SENSITIVITY: android.hardware.camera2.CameraCharacteristics.Key;
                public static SENSOR_ORIENTATION: android.hardware.camera2.CameraCharacteristics.Key;
                public static SENSOR_REFERENCE_ILLUMINANT1: android.hardware.camera2.CameraCharacteristics.Key;
                public static SENSOR_REFERENCE_ILLUMINANT2: android.hardware.camera2.CameraCharacteristics.Key;
                public static SHADING_AVAILABLE_MODES: android.hardware.camera2.CameraCharacteristics.Key;
                public static STATISTICS_INFO_AVAILABLE_FACE_DETECT_MODES: android.hardware.camera2.CameraCharacteristics.Key;
                public static STATISTICS_INFO_AVAILABLE_HOT_PIXEL_MAP_MODES: android.hardware.camera2.CameraCharacteristics.Key;
                public static STATISTICS_INFO_AVAILABLE_LENS_SHADING_MAP_MODES: android.hardware.camera2.CameraCharacteristics.Key;
                public static STATISTICS_INFO_MAX_FACE_COUNT: android.hardware.camera2.CameraCharacteristics.Key;
                public static SYNC_MAX_LATENCY: android.hardware.camera2.CameraCharacteristics.Key;
                public static TONEMAP_AVAILABLE_TONE_MAP_MODES: android.hardware.camera2.CameraCharacteristics.Key;
                public static TONEMAP_MAX_CURVE_POINTS: android.hardware.camera2.CameraCharacteristics.Key;

                public get(param0: android.hardware.camera2.CameraCharacteristics.Key): javalangObject;

                public getAvailableCaptureRequestKeys(): javautilList;

                public getKeys(): javautilList;

                public getAvailableCaptureResultKeys(): javautilList;
            }
            export module CameraCharacteristics {
                export class Key extends javalangObject {
                    public toString(): string;

                    public getName(): string;

                    public equals(param0: javalangObject): boolean;

                    public hashCode(): number;
                }
            }
        }
    }
}

/// <reference path="./android.hardware.camera2.CaptureRequest.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module hardware {
        export module camera2 {
            export abstract class CameraConstrainedHighSpeedCaptureSession extends android.hardware.camera2.CameraCaptureSession {
                public close(): void;

                public createHighSpeedRequestList(param0: android.hardware.camera2.CaptureRequest): javautilList;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.hardware.camera2.CameraDevice.d.ts" />
/// <reference path="./android.hardware.camera2.TotalCaptureResult.d.ts" />
/// <reference path="./android.hardware.camera2.params.InputConfiguration.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module hardware {
        export module camera2 {
            export abstract class CameraDevice extends javalangObject implements javalangAutoCloseable {
                public static TEMPLATE_MANUAL: number;
                public static TEMPLATE_PREVIEW: number;
                public static TEMPLATE_RECORD: number;
                public static TEMPLATE_STILL_CAPTURE: number;
                public static TEMPLATE_VIDEO_SNAPSHOT: number;
                public static TEMPLATE_ZERO_SHUTTER_LAG: number;

                public createConstrainedHighSpeedCaptureSession(param0: javautilList, param1: android.hardware.camera2.CameraCaptureSession.StateCallback, param2: android.os.Handler): void;

                public close(): void;

                public getId(): string;

                public createReprocessableCaptureSession(param0: android.hardware.camera2.params.InputConfiguration, param1: javautilList, param2: android.hardware.camera2.CameraCaptureSession.StateCallback, param3: android.os.Handler): void;

                public createReprocessCaptureRequest(param0: android.hardware.camera2.TotalCaptureResult): android.hardware.camera2.CaptureRequest.Builder;

                public createCaptureSession(param0: javautilList, param1: android.hardware.camera2.CameraCaptureSession.StateCallback, param2: android.os.Handler): void;

                public createCaptureRequest(param0: number): android.hardware.camera2.CaptureRequest.Builder;
            }
            export module CameraDevice {
                export abstract class StateCallback extends javalangObject {
                    public static ERROR_CAMERA_DEVICE: number;
                    public static ERROR_CAMERA_DISABLED: number;
                    public static ERROR_CAMERA_IN_USE: number;
                    public static ERROR_CAMERA_SERVICE: number;
                    public static ERROR_MAX_CAMERAS_IN_USE: number;

                    public onDisconnected(param0: android.hardware.camera2.CameraDevice): void;

                    public onOpened(param0: android.hardware.camera2.CameraDevice): void;

                    public constructor();

                    public onClosed(param0: android.hardware.camera2.CameraDevice): void;

                    public onError(param0: android.hardware.camera2.CameraDevice, param1: number): void;
                }
            }
        }
    }
}

/// <reference path="./android.hardware.camera2.CameraCharacteristics.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module hardware {
        export module camera2 {
            export class CameraManager extends javalangObject {
                public unregisterTorchCallback(param0: android.hardware.camera2.CameraManager.TorchCallback): void;

                public getCameraIdList(): native.Array<string>;

                public unregisterAvailabilityCallback(param0: android.hardware.camera2.CameraManager.AvailabilityCallback): void;

                public openCamera(param0: string, param1: android.hardware.camera2.CameraDevice.StateCallback, param2: android.os.Handler): void;

                public setTorchMode(param0: string, param1: boolean): void;

                public registerTorchCallback(param0: android.hardware.camera2.CameraManager.TorchCallback, param1: android.os.Handler): void;

                public getCameraCharacteristics(param0: string): android.hardware.camera2.CameraCharacteristics;

                public registerAvailabilityCallback(param0: android.hardware.camera2.CameraManager.AvailabilityCallback, param1: android.os.Handler): void;
            }
            export module CameraManager {
                export abstract class AvailabilityCallback extends javalangObject {
                    public constructor();

                    public onCameraUnavailable(param0: string): void;

                    public onCameraAvailable(param0: string): void;
                }
                export abstract class TorchCallback extends javalangObject {
                    public constructor();

                    public onTorchModeUnavailable(param0: string): void;

                    public onTorchModeChanged(param0: string, param1: boolean): void;
                }
            }
        }
    }
}

/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module hardware {
        export module camera2 {
            export abstract class CameraMetadata extends javalangObject {
                public static COLOR_CORRECTION_ABERRATION_MODE_FAST: number;
                public static COLOR_CORRECTION_ABERRATION_MODE_HIGH_QUALITY: number;
                public static COLOR_CORRECTION_ABERRATION_MODE_OFF: number;
                public static COLOR_CORRECTION_MODE_FAST: number;
                public static COLOR_CORRECTION_MODE_HIGH_QUALITY: number;
                public static COLOR_CORRECTION_MODE_TRANSFORM_MATRIX: number;
                public static CONTROL_AE_ANTIBANDING_MODE_50HZ: number;
                public static CONTROL_AE_ANTIBANDING_MODE_60HZ: number;
                public static CONTROL_AE_ANTIBANDING_MODE_AUTO: number;
                public static CONTROL_AE_ANTIBANDING_MODE_OFF: number;
                public static CONTROL_AE_MODE_OFF: number;
                public static CONTROL_AE_MODE_ON: number;
                public static CONTROL_AE_MODE_ON_ALWAYS_FLASH: number;
                public static CONTROL_AE_MODE_ON_AUTO_FLASH: number;
                public static CONTROL_AE_MODE_ON_AUTO_FLASH_REDEYE: number;
                public static CONTROL_AE_PRECAPTURE_TRIGGER_CANCEL: number;
                public static CONTROL_AE_PRECAPTURE_TRIGGER_IDLE: number;
                public static CONTROL_AE_PRECAPTURE_TRIGGER_START: number;
                public static CONTROL_AE_STATE_CONVERGED: number;
                public static CONTROL_AE_STATE_FLASH_REQUIRED: number;
                public static CONTROL_AE_STATE_INACTIVE: number;
                public static CONTROL_AE_STATE_LOCKED: number;
                public static CONTROL_AE_STATE_PRECAPTURE: number;
                public static CONTROL_AE_STATE_SEARCHING: number;
                public static CONTROL_AF_MODE_AUTO: number;
                public static CONTROL_AF_MODE_CONTINUOUS_PICTURE: number;
                public static CONTROL_AF_MODE_CONTINUOUS_VIDEO: number;
                public static CONTROL_AF_MODE_EDOF: number;
                public static CONTROL_AF_MODE_MACRO: number;
                public static CONTROL_AF_MODE_OFF: number;
                public static CONTROL_AF_STATE_ACTIVE_SCAN: number;
                public static CONTROL_AF_STATE_FOCUSED_LOCKED: number;
                public static CONTROL_AF_STATE_INACTIVE: number;
                public static CONTROL_AF_STATE_NOT_FOCUSED_LOCKED: number;
                public static CONTROL_AF_STATE_PASSIVE_FOCUSED: number;
                public static CONTROL_AF_STATE_PASSIVE_SCAN: number;
                public static CONTROL_AF_STATE_PASSIVE_UNFOCUSED: number;
                public static CONTROL_AF_TRIGGER_CANCEL: number;
                public static CONTROL_AF_TRIGGER_IDLE: number;
                public static CONTROL_AF_TRIGGER_START: number;
                public static CONTROL_AWB_MODE_AUTO: number;
                public static CONTROL_AWB_MODE_CLOUDY_DAYLIGHT: number;
                public static CONTROL_AWB_MODE_DAYLIGHT: number;
                public static CONTROL_AWB_MODE_FLUORESCENT: number;
                public static CONTROL_AWB_MODE_INCANDESCENT: number;
                public static CONTROL_AWB_MODE_OFF: number;
                public static CONTROL_AWB_MODE_SHADE: number;
                public static CONTROL_AWB_MODE_TWILIGHT: number;
                public static CONTROL_AWB_MODE_WARM_FLUORESCENT: number;
                public static CONTROL_AWB_STATE_CONVERGED: number;
                public static CONTROL_AWB_STATE_INACTIVE: number;
                public static CONTROL_AWB_STATE_LOCKED: number;
                public static CONTROL_AWB_STATE_SEARCHING: number;
                public static CONTROL_CAPTURE_INTENT_CUSTOM: number;
                public static CONTROL_CAPTURE_INTENT_MANUAL: number;
                public static CONTROL_CAPTURE_INTENT_PREVIEW: number;
                public static CONTROL_CAPTURE_INTENT_STILL_CAPTURE: number;
                public static CONTROL_CAPTURE_INTENT_VIDEO_RECORD: number;
                public static CONTROL_CAPTURE_INTENT_VIDEO_SNAPSHOT: number;
                public static CONTROL_CAPTURE_INTENT_ZERO_SHUTTER_LAG: number;
                public static CONTROL_EFFECT_MODE_AQUA: number;
                public static CONTROL_EFFECT_MODE_BLACKBOARD: number;
                public static CONTROL_EFFECT_MODE_MONO: number;
                public static CONTROL_EFFECT_MODE_NEGATIVE: number;
                public static CONTROL_EFFECT_MODE_OFF: number;
                public static CONTROL_EFFECT_MODE_POSTERIZE: number;
                public static CONTROL_EFFECT_MODE_SEPIA: number;
                public static CONTROL_EFFECT_MODE_SOLARIZE: number;
                public static CONTROL_EFFECT_MODE_WHITEBOARD: number;
                public static CONTROL_MODE_AUTO: number;
                public static CONTROL_MODE_OFF: number;
                public static CONTROL_MODE_OFF_KEEP_STATE: number;
                public static CONTROL_MODE_USE_SCENE_MODE: number;
                public static CONTROL_SCENE_MODE_ACTION: number;
                public static CONTROL_SCENE_MODE_BARCODE: number;
                public static CONTROL_SCENE_MODE_BEACH: number;
                public static CONTROL_SCENE_MODE_CANDLELIGHT: number;
                public static CONTROL_SCENE_MODE_DISABLED: number;
                public static CONTROL_SCENE_MODE_FACE_PRIORITY: number;
                public static CONTROL_SCENE_MODE_FIREWORKS: number;
                public static CONTROL_SCENE_MODE_HDR: number;
                public static CONTROL_SCENE_MODE_HIGH_SPEED_VIDEO: number;
                public static CONTROL_SCENE_MODE_LANDSCAPE: number;
                public static CONTROL_SCENE_MODE_NIGHT: number;
                public static CONTROL_SCENE_MODE_NIGHT_PORTRAIT: number;
                public static CONTROL_SCENE_MODE_PARTY: number;
                public static CONTROL_SCENE_MODE_PORTRAIT: number;
                public static CONTROL_SCENE_MODE_SNOW: number;
                public static CONTROL_SCENE_MODE_SPORTS: number;
                public static CONTROL_SCENE_MODE_STEADYPHOTO: number;
                public static CONTROL_SCENE_MODE_SUNSET: number;
                public static CONTROL_SCENE_MODE_THEATRE: number;
                public static CONTROL_VIDEO_STABILIZATION_MODE_OFF: number;
                public static CONTROL_VIDEO_STABILIZATION_MODE_ON: number;
                public static EDGE_MODE_FAST: number;
                public static EDGE_MODE_HIGH_QUALITY: number;
                public static EDGE_MODE_OFF: number;
                public static EDGE_MODE_ZERO_SHUTTER_LAG: number;
                public static FLASH_MODE_OFF: number;
                public static FLASH_MODE_SINGLE: number;
                public static FLASH_MODE_TORCH: number;
                public static FLASH_STATE_CHARGING: number;
                public static FLASH_STATE_FIRED: number;
                public static FLASH_STATE_PARTIAL: number;
                public static FLASH_STATE_READY: number;
                public static FLASH_STATE_UNAVAILABLE: number;
                public static HOT_PIXEL_MODE_FAST: number;
                public static HOT_PIXEL_MODE_HIGH_QUALITY: number;
                public static HOT_PIXEL_MODE_OFF: number;
                public static INFO_SUPPORTED_HARDWARE_LEVEL_FULL: number;
                public static INFO_SUPPORTED_HARDWARE_LEVEL_LEGACY: number;
                public static INFO_SUPPORTED_HARDWARE_LEVEL_LIMITED: number;
                public static LENS_FACING_BACK: number;
                public static LENS_FACING_EXTERNAL: number;
                public static LENS_FACING_FRONT: number;
                public static LENS_INFO_FOCUS_DISTANCE_CALIBRATION_APPROXIMATE: number;
                public static LENS_INFO_FOCUS_DISTANCE_CALIBRATION_CALIBRATED: number;
                public static LENS_INFO_FOCUS_DISTANCE_CALIBRATION_UNCALIBRATED: number;
                public static LENS_OPTICAL_STABILIZATION_MODE_OFF: number;
                public static LENS_OPTICAL_STABILIZATION_MODE_ON: number;
                public static LENS_STATE_MOVING: number;
                public static LENS_STATE_STATIONARY: number;
                public static NOISE_REDUCTION_MODE_FAST: number;
                public static NOISE_REDUCTION_MODE_HIGH_QUALITY: number;
                public static NOISE_REDUCTION_MODE_MINIMAL: number;
                public static NOISE_REDUCTION_MODE_OFF: number;
                public static NOISE_REDUCTION_MODE_ZERO_SHUTTER_LAG: number;
                public static REQUEST_AVAILABLE_CAPABILITIES_BACKWARD_COMPATIBLE: number;
                public static REQUEST_AVAILABLE_CAPABILITIES_BURST_CAPTURE: number;
                public static REQUEST_AVAILABLE_CAPABILITIES_CONSTRAINED_HIGH_SPEED_VIDEO: number;
                public static REQUEST_AVAILABLE_CAPABILITIES_DEPTH_OUTPUT: number;
                public static REQUEST_AVAILABLE_CAPABILITIES_MANUAL_POST_PROCESSING: number;
                public static REQUEST_AVAILABLE_CAPABILITIES_MANUAL_SENSOR: number;
                public static REQUEST_AVAILABLE_CAPABILITIES_PRIVATE_REPROCESSING: number;
                public static REQUEST_AVAILABLE_CAPABILITIES_RAW: number;
                public static REQUEST_AVAILABLE_CAPABILITIES_READ_SENSOR_SETTINGS: number;
                public static REQUEST_AVAILABLE_CAPABILITIES_YUV_REPROCESSING: number;
                public static SCALER_CROPPING_TYPE_CENTER_ONLY: number;
                public static SCALER_CROPPING_TYPE_FREEFORM: number;
                public static SENSOR_INFO_COLOR_FILTER_ARRANGEMENT_BGGR: number;
                public static SENSOR_INFO_COLOR_FILTER_ARRANGEMENT_GBRG: number;
                public static SENSOR_INFO_COLOR_FILTER_ARRANGEMENT_GRBG: number;
                public static SENSOR_INFO_COLOR_FILTER_ARRANGEMENT_RGB: number;
                public static SENSOR_INFO_COLOR_FILTER_ARRANGEMENT_RGGB: number;
                public static SENSOR_INFO_TIMESTAMP_SOURCE_REALTIME: number;
                public static SENSOR_INFO_TIMESTAMP_SOURCE_UNKNOWN: number;
                public static SENSOR_REFERENCE_ILLUMINANT1_CLOUDY_WEATHER: number;
                public static SENSOR_REFERENCE_ILLUMINANT1_COOL_WHITE_FLUORESCENT: number;
                public static SENSOR_REFERENCE_ILLUMINANT1_D50: number;
                public static SENSOR_REFERENCE_ILLUMINANT1_D55: number;
                public static SENSOR_REFERENCE_ILLUMINANT1_D65: number;
                public static SENSOR_REFERENCE_ILLUMINANT1_D75: number;
                public static SENSOR_REFERENCE_ILLUMINANT1_DAYLIGHT: number;
                public static SENSOR_REFERENCE_ILLUMINANT1_DAYLIGHT_FLUORESCENT: number;
                public static SENSOR_REFERENCE_ILLUMINANT1_DAY_WHITE_FLUORESCENT: number;
                public static SENSOR_REFERENCE_ILLUMINANT1_FINE_WEATHER: number;
                public static SENSOR_REFERENCE_ILLUMINANT1_FLASH: number;
                public static SENSOR_REFERENCE_ILLUMINANT1_FLUORESCENT: number;
                public static SENSOR_REFERENCE_ILLUMINANT1_ISO_STUDIO_TUNGSTEN: number;
                public static SENSOR_REFERENCE_ILLUMINANT1_SHADE: number;
                public static SENSOR_REFERENCE_ILLUMINANT1_STANDARD_A: number;
                public static SENSOR_REFERENCE_ILLUMINANT1_STANDARD_B: number;
                public static SENSOR_REFERENCE_ILLUMINANT1_STANDARD_C: number;
                public static SENSOR_REFERENCE_ILLUMINANT1_TUNGSTEN: number;
                public static SENSOR_REFERENCE_ILLUMINANT1_WHITE_FLUORESCENT: number;
                public static SENSOR_TEST_PATTERN_MODE_COLOR_BARS: number;
                public static SENSOR_TEST_PATTERN_MODE_COLOR_BARS_FADE_TO_GRAY: number;
                public static SENSOR_TEST_PATTERN_MODE_CUSTOM1: number;
                public static SENSOR_TEST_PATTERN_MODE_OFF: number;
                public static SENSOR_TEST_PATTERN_MODE_PN9: number;
                public static SENSOR_TEST_PATTERN_MODE_SOLID_COLOR: number;
                public static SHADING_MODE_FAST: number;
                public static SHADING_MODE_HIGH_QUALITY: number;
                public static SHADING_MODE_OFF: number;
                public static STATISTICS_FACE_DETECT_MODE_FULL: number;
                public static STATISTICS_FACE_DETECT_MODE_OFF: number;
                public static STATISTICS_FACE_DETECT_MODE_SIMPLE: number;
                public static STATISTICS_LENS_SHADING_MAP_MODE_OFF: number;
                public static STATISTICS_LENS_SHADING_MAP_MODE_ON: number;
                public static STATISTICS_SCENE_FLICKER_50HZ: number;
                public static STATISTICS_SCENE_FLICKER_60HZ: number;
                public static STATISTICS_SCENE_FLICKER_NONE: number;
                public static SYNC_MAX_LATENCY_PER_FRAME_CONTROL: number;
                public static SYNC_MAX_LATENCY_UNKNOWN: number;
                public static TONEMAP_MODE_CONTRAST_CURVE: number;
                public static TONEMAP_MODE_FAST: number;
                public static TONEMAP_MODE_GAMMA_VALUE: number;
                public static TONEMAP_MODE_HIGH_QUALITY: number;
                public static TONEMAP_MODE_PRESET_CURVE: number;
                public static TONEMAP_PRESET_CURVE_REC709: number;
                public static TONEMAP_PRESET_CURVE_SRGB: number;

                public getKeys(): javautilList;
            }
        }
    }
}

/// <reference path="./android.hardware.camera2.CaptureRequest.d.ts" />
declare module android {
    export module hardware {
        export module camera2 {
            export class CaptureFailure extends javalangObject {
                public static REASON_ERROR: number;
                public static REASON_FLUSHED: number;

                public getSequenceId(): number;

                public wasImageCaptured(): boolean;

                public getRequest(): android.hardware.camera2.CaptureRequest;

                public getReason(): number;

                public getFrameNumber(): number;
            }
        }
    }
}

/// <reference path="./android.hardware.camera2.CaptureRequest.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module hardware {
        export module camera2 {
            export class CaptureRequest extends android.hardware.camera2.CameraMetadata implements android.os.Parcelable {
                public static BLACK_LEVEL_LOCK: android.hardware.camera2.CaptureRequest.Key;
                public static COLOR_CORRECTION_ABERRATION_MODE: android.hardware.camera2.CaptureRequest.Key;
                public static COLOR_CORRECTION_GAINS: android.hardware.camera2.CaptureRequest.Key;
                public static COLOR_CORRECTION_MODE: android.hardware.camera2.CaptureRequest.Key;
                public static COLOR_CORRECTION_TRANSFORM: android.hardware.camera2.CaptureRequest.Key;
                public static CONTROL_AE_ANTIBANDING_MODE: android.hardware.camera2.CaptureRequest.Key;
                public static CONTROL_AE_EXPOSURE_COMPENSATION: android.hardware.camera2.CaptureRequest.Key;
                public static CONTROL_AE_LOCK: android.hardware.camera2.CaptureRequest.Key;
                public static CONTROL_AE_MODE: android.hardware.camera2.CaptureRequest.Key;
                public static CONTROL_AE_PRECAPTURE_TRIGGER: android.hardware.camera2.CaptureRequest.Key;
                public static CONTROL_AE_REGIONS: android.hardware.camera2.CaptureRequest.Key;
                public static CONTROL_AE_TARGET_FPS_RANGE: android.hardware.camera2.CaptureRequest.Key;
                public static CONTROL_AF_MODE: android.hardware.camera2.CaptureRequest.Key;
                public static CONTROL_AF_REGIONS: android.hardware.camera2.CaptureRequest.Key;
                public static CONTROL_AF_TRIGGER: android.hardware.camera2.CaptureRequest.Key;
                public static CONTROL_AWB_LOCK: android.hardware.camera2.CaptureRequest.Key;
                public static CONTROL_AWB_MODE: android.hardware.camera2.CaptureRequest.Key;
                public static CONTROL_AWB_REGIONS: android.hardware.camera2.CaptureRequest.Key;
                public static CONTROL_CAPTURE_INTENT: android.hardware.camera2.CaptureRequest.Key;
                public static CONTROL_EFFECT_MODE: android.hardware.camera2.CaptureRequest.Key;
                public static CONTROL_MODE: android.hardware.camera2.CaptureRequest.Key;
                public static CONTROL_SCENE_MODE: android.hardware.camera2.CaptureRequest.Key;
                public static CONTROL_VIDEO_STABILIZATION_MODE: android.hardware.camera2.CaptureRequest.Key;
                public static CREATOR: android.os.Parcelable.Creator;
                public static EDGE_MODE: android.hardware.camera2.CaptureRequest.Key;
                public static FLASH_MODE: android.hardware.camera2.CaptureRequest.Key;
                public static HOT_PIXEL_MODE: android.hardware.camera2.CaptureRequest.Key;
                public static JPEG_GPS_LOCATION: android.hardware.camera2.CaptureRequest.Key;
                public static JPEG_ORIENTATION: android.hardware.camera2.CaptureRequest.Key;
                public static JPEG_QUALITY: android.hardware.camera2.CaptureRequest.Key;
                public static JPEG_THUMBNAIL_QUALITY: android.hardware.camera2.CaptureRequest.Key;
                public static JPEG_THUMBNAIL_SIZE: android.hardware.camera2.CaptureRequest.Key;
                public static LENS_APERTURE: android.hardware.camera2.CaptureRequest.Key;
                public static LENS_FILTER_DENSITY: android.hardware.camera2.CaptureRequest.Key;
                public static LENS_FOCAL_LENGTH: android.hardware.camera2.CaptureRequest.Key;
                public static LENS_FOCUS_DISTANCE: android.hardware.camera2.CaptureRequest.Key;
                public static LENS_OPTICAL_STABILIZATION_MODE: android.hardware.camera2.CaptureRequest.Key;
                public static NOISE_REDUCTION_MODE: android.hardware.camera2.CaptureRequest.Key;
                public static REPROCESS_EFFECTIVE_EXPOSURE_FACTOR: android.hardware.camera2.CaptureRequest.Key;
                public static SCALER_CROP_REGION: android.hardware.camera2.CaptureRequest.Key;
                public static SENSOR_EXPOSURE_TIME: android.hardware.camera2.CaptureRequest.Key;
                public static SENSOR_FRAME_DURATION: android.hardware.camera2.CaptureRequest.Key;
                public static SENSOR_SENSITIVITY: android.hardware.camera2.CaptureRequest.Key;
                public static SENSOR_TEST_PATTERN_DATA: android.hardware.camera2.CaptureRequest.Key;
                public static SENSOR_TEST_PATTERN_MODE: android.hardware.camera2.CaptureRequest.Key;
                public static SHADING_MODE: android.hardware.camera2.CaptureRequest.Key;
                public static STATISTICS_FACE_DETECT_MODE: android.hardware.camera2.CaptureRequest.Key;
                public static STATISTICS_HOT_PIXEL_MAP_MODE: android.hardware.camera2.CaptureRequest.Key;
                public static STATISTICS_LENS_SHADING_MAP_MODE: android.hardware.camera2.CaptureRequest.Key;
                public static TONEMAP_CURVE: android.hardware.camera2.CaptureRequest.Key;
                public static TONEMAP_GAMMA: android.hardware.camera2.CaptureRequest.Key;
                public static TONEMAP_MODE: android.hardware.camera2.CaptureRequest.Key;
                public static TONEMAP_PRESET_CURVE: android.hardware.camera2.CaptureRequest.Key;

                public getTag(): javalangObject;

                public isReprocess(): boolean;

                public equals(param0: javalangObject): boolean;

                public hashCode(): number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public describeContents(): number;

                public getKeys(): javautilList;

                public get(param0: android.hardware.camera2.CaptureRequest.Key): javalangObject;
            }
            export module CaptureRequest {
                export class Builder extends javalangObject {
                    public build(): android.hardware.camera2.CaptureRequest;

                    public set(param0: android.hardware.camera2.CaptureRequest.Key, param1: javalangObject): void;

                    public get(param0: android.hardware.camera2.CaptureRequest.Key): javalangObject;

                    public removeTarget(param0: android.view.Surface): void;

                    public addTarget(param0: android.view.Surface): void;

                    public setTag(param0: javalangObject): void;
                }
                export class Key extends javalangObject {
                    public toString(): string;

                    public getName(): string;

                    public equals(param0: javalangObject): boolean;

                    public hashCode(): number;
                }
            }
        }
    }
}

/// <reference path="./android.hardware.camera2.CaptureRequest.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module hardware {
        export module camera2 {
            export class CaptureResult extends android.hardware.camera2.CameraMetadata {
                public static BLACK_LEVEL_LOCK: android.hardware.camera2.CaptureResult.Key;
                public static COLOR_CORRECTION_ABERRATION_MODE: android.hardware.camera2.CaptureResult.Key;
                public static COLOR_CORRECTION_GAINS: android.hardware.camera2.CaptureResult.Key;
                public static COLOR_CORRECTION_MODE: android.hardware.camera2.CaptureResult.Key;
                public static COLOR_CORRECTION_TRANSFORM: android.hardware.camera2.CaptureResult.Key;
                public static CONTROL_AE_ANTIBANDING_MODE: android.hardware.camera2.CaptureResult.Key;
                public static CONTROL_AE_EXPOSURE_COMPENSATION: android.hardware.camera2.CaptureResult.Key;
                public static CONTROL_AE_LOCK: android.hardware.camera2.CaptureResult.Key;
                public static CONTROL_AE_MODE: android.hardware.camera2.CaptureResult.Key;
                public static CONTROL_AE_PRECAPTURE_TRIGGER: android.hardware.camera2.CaptureResult.Key;
                public static CONTROL_AE_REGIONS: android.hardware.camera2.CaptureResult.Key;
                public static CONTROL_AE_STATE: android.hardware.camera2.CaptureResult.Key;
                public static CONTROL_AE_TARGET_FPS_RANGE: android.hardware.camera2.CaptureResult.Key;
                public static CONTROL_AF_MODE: android.hardware.camera2.CaptureResult.Key;
                public static CONTROL_AF_REGIONS: android.hardware.camera2.CaptureResult.Key;
                public static CONTROL_AF_STATE: android.hardware.camera2.CaptureResult.Key;
                public static CONTROL_AF_TRIGGER: android.hardware.camera2.CaptureResult.Key;
                public static CONTROL_AWB_LOCK: android.hardware.camera2.CaptureResult.Key;
                public static CONTROL_AWB_MODE: android.hardware.camera2.CaptureResult.Key;
                public static CONTROL_AWB_REGIONS: android.hardware.camera2.CaptureResult.Key;
                public static CONTROL_AWB_STATE: android.hardware.camera2.CaptureResult.Key;
                public static CONTROL_CAPTURE_INTENT: android.hardware.camera2.CaptureResult.Key;
                public static CONTROL_EFFECT_MODE: android.hardware.camera2.CaptureResult.Key;
                public static CONTROL_MODE: android.hardware.camera2.CaptureResult.Key;
                public static CONTROL_SCENE_MODE: android.hardware.camera2.CaptureResult.Key;
                public static CONTROL_VIDEO_STABILIZATION_MODE: android.hardware.camera2.CaptureResult.Key;
                public static EDGE_MODE: android.hardware.camera2.CaptureResult.Key;
                public static FLASH_MODE: android.hardware.camera2.CaptureResult.Key;
                public static FLASH_STATE: android.hardware.camera2.CaptureResult.Key;
                public static HOT_PIXEL_MODE: android.hardware.camera2.CaptureResult.Key;
                public static JPEG_GPS_LOCATION: android.hardware.camera2.CaptureResult.Key;
                public static JPEG_ORIENTATION: android.hardware.camera2.CaptureResult.Key;
                public static JPEG_QUALITY: android.hardware.camera2.CaptureResult.Key;
                public static JPEG_THUMBNAIL_QUALITY: android.hardware.camera2.CaptureResult.Key;
                public static JPEG_THUMBNAIL_SIZE: android.hardware.camera2.CaptureResult.Key;
                public static LENS_APERTURE: android.hardware.camera2.CaptureResult.Key;
                public static LENS_FILTER_DENSITY: android.hardware.camera2.CaptureResult.Key;
                public static LENS_FOCAL_LENGTH: android.hardware.camera2.CaptureResult.Key;
                public static LENS_FOCUS_DISTANCE: android.hardware.camera2.CaptureResult.Key;
                public static LENS_FOCUS_RANGE: android.hardware.camera2.CaptureResult.Key;
                public static LENS_INTRINSIC_CALIBRATION: android.hardware.camera2.CaptureResult.Key;
                public static LENS_OPTICAL_STABILIZATION_MODE: android.hardware.camera2.CaptureResult.Key;
                public static LENS_POSE_ROTATION: android.hardware.camera2.CaptureResult.Key;
                public static LENS_POSE_TRANSLATION: android.hardware.camera2.CaptureResult.Key;
                public static LENS_RADIAL_DISTORTION: android.hardware.camera2.CaptureResult.Key;
                public static LENS_STATE: android.hardware.camera2.CaptureResult.Key;
                public static NOISE_REDUCTION_MODE: android.hardware.camera2.CaptureResult.Key;
                public static REPROCESS_EFFECTIVE_EXPOSURE_FACTOR: android.hardware.camera2.CaptureResult.Key;
                public static REQUEST_PIPELINE_DEPTH: android.hardware.camera2.CaptureResult.Key;
                public static SCALER_CROP_REGION: android.hardware.camera2.CaptureResult.Key;
                public static SENSOR_EXPOSURE_TIME: android.hardware.camera2.CaptureResult.Key;
                public static SENSOR_FRAME_DURATION: android.hardware.camera2.CaptureResult.Key;
                public static SENSOR_GREEN_SPLIT: android.hardware.camera2.CaptureResult.Key;
                public static SENSOR_NEUTRAL_COLOR_POINT: android.hardware.camera2.CaptureResult.Key;
                public static SENSOR_NOISE_PROFILE: android.hardware.camera2.CaptureResult.Key;
                public static SENSOR_ROLLING_SHUTTER_SKEW: android.hardware.camera2.CaptureResult.Key;
                public static SENSOR_SENSITIVITY: android.hardware.camera2.CaptureResult.Key;
                public static SENSOR_TEST_PATTERN_DATA: android.hardware.camera2.CaptureResult.Key;
                public static SENSOR_TEST_PATTERN_MODE: android.hardware.camera2.CaptureResult.Key;
                public static SENSOR_TIMESTAMP: android.hardware.camera2.CaptureResult.Key;
                public static SHADING_MODE: android.hardware.camera2.CaptureResult.Key;
                public static STATISTICS_FACES: android.hardware.camera2.CaptureResult.Key;
                public static STATISTICS_FACE_DETECT_MODE: android.hardware.camera2.CaptureResult.Key;
                public static STATISTICS_HOT_PIXEL_MAP: android.hardware.camera2.CaptureResult.Key;
                public static STATISTICS_HOT_PIXEL_MAP_MODE: android.hardware.camera2.CaptureResult.Key;
                public static STATISTICS_LENS_SHADING_CORRECTION_MAP: android.hardware.camera2.CaptureResult.Key;
                public static STATISTICS_LENS_SHADING_MAP_MODE: android.hardware.camera2.CaptureResult.Key;
                public static STATISTICS_SCENE_FLICKER: android.hardware.camera2.CaptureResult.Key;
                public static TONEMAP_CURVE: android.hardware.camera2.CaptureResult.Key;
                public static TONEMAP_GAMMA: android.hardware.camera2.CaptureResult.Key;
                public static TONEMAP_MODE: android.hardware.camera2.CaptureResult.Key;
                public static TONEMAP_PRESET_CURVE: android.hardware.camera2.CaptureResult.Key;

                public get(param0: android.hardware.camera2.CaptureResult.Key): javalangObject;

                public getSequenceId(): number;

                public getRequest(): android.hardware.camera2.CaptureRequest;

                public getFrameNumber(): number;

                public getKeys(): javautilList;
            }
            export module CaptureResult {
                export class Key extends javalangObject {
                    public toString(): string;

                    public getName(): string;

                    public equals(param0: javalangObject): boolean;

                    public hashCode(): number;
                }
            }
        }
    }
}

import javanioByteBuffer = java.nio.ByteBuffer;
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.hardware.camera2.CameraCharacteristics.d.ts" />
/// <reference path="./android.hardware.camera2.CaptureResult.d.ts" />
/// <reference path="./android.location.Location.d.ts" />
/// <reference path="./android.media.Image.d.ts" />
/// <reference path="./android.util.Size.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
declare module android {
    export module hardware {
        export module camera2 {
            export class DngCreator extends javalangObject implements javalangAutoCloseable {
                public static MAX_THUMBNAIL_DIMENSION: number;

                public setLocation(param0: android.location.Location): android.hardware.camera2.DngCreator;

                public close(): void;

                public writeByteBuffer(param0: javaioOutputStream, param1: android.util.Size, param2: javanioByteBuffer, param3: number): void;

                public constructor(param0: android.hardware.camera2.CameraCharacteristics, param1: android.hardware.camera2.CaptureResult);

                public setDescription(param0: string): android.hardware.camera2.DngCreator;

                public finalize(): void;

                public setThumbnail(param0: android.media.Image): android.hardware.camera2.DngCreator;

                public setOrientation(param0: number): android.hardware.camera2.DngCreator;

                public setThumbnail(param0: android.graphics.Bitmap): android.hardware.camera2.DngCreator;

                public writeInputStream(param0: javaioOutputStream, param1: android.util.Size, param2: javaioInputStream, param3: number): void;

                public writeImage(param0: javaioOutputStream, param1: android.media.Image): void;
            }
        }
    }
}

/// <reference path="./java.util.List.d.ts" />
declare module android {
    export module hardware {
        export module camera2 {
            export class TotalCaptureResult extends android.hardware.camera2.CaptureResult {
                public getPartialResults(): javautilList;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module hardware {
        export module camera2 {
            export module params {
                export class BlackLevelPattern extends javalangObject {
                    public static COUNT: number;

                    public toString(): string;

                    public copyTo(param0: native.Array<number>, param1: number): void;

                    public equals(param0: javalangObject): boolean;

                    public hashCode(): number;

                    public getOffsetForIndex(param0: number, param1: number): number;
                }
            }
        }
    }
}

/// <reference path="./android.util.Rational.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module hardware {
        export module camera2 {
            export module params {
                export class ColorSpaceTransform extends javalangObject {
                    public copyElements(param0: native.Array<android.util.Rational>, param1: number): void;

                    public toString(): string;

                    public constructor(param0: native.Array<number>);

                    public equals(param0: javalangObject): boolean;

                    public constructor(param0: native.Array<android.util.Rational>);

                    public hashCode(): number;

                    public getElement(param0: number, param1: number): android.util.Rational;

                    public copyElements(param0: native.Array<number>, param1: number): void;
                }
            }
        }
    }
}

/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
declare module android {
    export module hardware {
        export module camera2 {
            export module params {
                export class Face extends javalangObject {
                    public static ID_UNSUPPORTED: number;
                    public static SCORE_MAX: number;
                    public static SCORE_MIN: number;

                    public getBounds(): android.graphics.Rect;

                    public getRightEyePosition(): android.graphics.Point;

                    public getMouthPosition(): android.graphics.Point;

                    public toString(): string;

                    public getScore(): number;

                    public getId(): number;

                    public getLeftEyePosition(): android.graphics.Point;
                }
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module hardware {
        export module camera2 {
            export module params {
                export class InputConfiguration extends javalangObject {
                    public getFormat(): number;

                    public toString(): string;

                    public getHeight(): number;

                    public equals(param0: javalangObject): boolean;

                    public constructor(param0: number, param1: number, param2: number);

                    public getWidth(): number;

                    public hashCode(): number;
                }
            }
        }
    }
}

/// <reference path="./android.hardware.camera2.params.RggbChannelVector.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module hardware {
        export module camera2 {
            export module params {
                export class LensShadingMap extends javalangObject {
                    public static MINIMUM_GAIN_FACTOR: number;

                    public getRowCount(): number;

                    public getColumnCount(): number;

                    public getGainFactorVector(param0: number, param1: number): android.hardware.camera2.params.RggbChannelVector;

                    public toString(): string;

                    public getGainFactorCount(): number;

                    public getGainFactor(param0: number, param1: number, param2: number): number;

                    public equals(param0: javalangObject): boolean;

                    public hashCode(): number;

                    public copyGainFactors(param0: native.Array<number>, param1: number): void;
                }
            }
        }
    }
}

/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.util.Size.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module hardware {
        export module camera2 {
            export module params {
                export class MeteringRectangle extends javalangObject {
                    public static METERING_WEIGHT_DONT_CARE: number;
                    public static METERING_WEIGHT_MAX: number;
                    public static METERING_WEIGHT_MIN: number;

                    public equals(param0: android.hardware.camera2.params.MeteringRectangle): boolean;

                    public getX(): number;

                    public getHeight(): number;

                    public getUpperLeftPoint(): android.graphics.Point;

                    public equals(param0: javalangObject): boolean;

                    public getWidth(): number;

                    public constructor(param0: android.graphics.Rect, param1: number);
                    public constructor(param0: android.graphics.Point, param1: android.util.Size, param2: number);

                    public getY(): number;

                    public getMeteringWeight(): number;

                    public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);

                    public getRect(): android.graphics.Rect;

                    public toString(): string;

                    public hashCode(): number;

                    public getSize(): android.util.Size;
                }
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module hardware {
        export module camera2 {
            export module params {
                export class RggbChannelVector extends javalangObject {
                    public static BLUE: number;
                    public static COUNT: number;
                    public static GREEN_EVEN: number;
                    public static GREEN_ODD: number;
                    public static RED: number;

                    public constructor(param0: number, param1: number, param2: number, param3: number);

                    public getBlue(): number;

                    public toString(): string;

                    public getRed(): number;

                    public getGreenEven(): number;

                    public copyTo(param0: native.Array<number>, param1: number): void;

                    public equals(param0: javalangObject): boolean;

                    public getGreenOdd(): number;

                    public getComponent(param0: number): number;

                    public hashCode(): number;
                }
            }
        }
    }
}

/// <reference path="./android.util.Range.d.ts" />
/// <reference path="./android.util.Size.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module hardware {
        export module camera2 {
            export module params {
                export class StreamConfigurationMap extends javalangObject {
                    public getValidOutputFormatsForInput(param0: number): native.Array<number>;

                    public getOutputSizes(param0: javalangClass): native.Array<android.util.Size>;
                    public getOutputSizes(param0: number): native.Array<android.util.Size>;

                    public static isOutputSupportedFor(param0: javalangClass): boolean;

                    public equals(param0: javalangObject): boolean;

                    public getHighSpeedVideoSizes(): native.Array<android.util.Size>;

                    public getOutputStallDuration(param0: javalangClass, param1: android.util.Size): number;

                    public getOutputFormats(): native.Array<number>;

                    public isOutputSupportedFor(param0: number): boolean;

                    public getInputFormats(): native.Array<number>;

                    public getHighSpeedVideoSizesFor(param0: android.util.Range): native.Array<android.util.Size>;

                    public toString(): string;

                    public getOutputStallDuration(param0: number, param1: android.util.Size): number;

                    public getInputSizes(param0: number): native.Array<android.util.Size>;

                    public getHighResolutionOutputSizes(param0: number): native.Array<android.util.Size>;

                    public getHighSpeedVideoFpsRangesFor(param0: android.util.Size): native.Array<android.util.Range>;

                    public getHighSpeedVideoFpsRanges(): native.Array<android.util.Range>;

                    public hashCode(): number;

                    public isOutputSupportedFor(param0: android.view.Surface): boolean;

                    public getOutputMinFrameDuration(param0: javalangClass, param1: android.util.Size): number;
                    public getOutputMinFrameDuration(param0: number, param1: android.util.Size): number;
                }
            }
        }
    }
}

/// <reference path="./android.graphics.PointF.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module hardware {
        export module camera2 {
            export module params {
                export class TonemapCurve extends javalangObject {
                    public static CHANNEL_BLUE: number;
                    public static CHANNEL_GREEN: number;
                    public static CHANNEL_RED: number;
                    public static LEVEL_BLACK: number;
                    public static LEVEL_WHITE: number;
                    public static POINT_SIZE: number;

                    public getPoint(param0: number, param1: number): android.graphics.PointF;

                    public toString(): string;

                    public equals(param0: javalangObject): boolean;

                    public copyColorCurve(param0: number, param1: native.Array<number>, param2: number): void;

                    public constructor(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<number>);

                    public getPointCount(param0: number): number;

                    public hashCode(): number;
                }
            }
        }
    }
}

/// <reference path="./android.hardware.display.VirtualDisplay.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.view.Display.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module hardware {
        export module display {
            export class DisplayManager extends javalangObject {
                public static DISPLAY_CATEGORY_PRESENTATION: string;
                public static VIRTUAL_DISPLAY_FLAG_AUTO_MIRROR: number;
                public static VIRTUAL_DISPLAY_FLAG_OWN_CONTENT_ONLY: number;
                public static VIRTUAL_DISPLAY_FLAG_PRESENTATION: number;
                public static VIRTUAL_DISPLAY_FLAG_PUBLIC: number;
                public static VIRTUAL_DISPLAY_FLAG_SECURE: number;

                public createVirtualDisplay(param0: string, param1: number, param2: number, param3: number, param4: android.view.Surface, param5: number, param6: android.hardware.display.VirtualDisplay.Callback, param7: android.os.Handler): android.hardware.display.VirtualDisplay;

                public getDisplay(param0: number): android.view.Display;

                public getDisplays(): native.Array<android.view.Display>;
                public getDisplays(param0: string): native.Array<android.view.Display>;

                public registerDisplayListener(param0: android.hardware.display.DisplayManager.DisplayListener, param1: android.os.Handler): void;

                public createVirtualDisplay(param0: string, param1: number, param2: number, param3: number, param4: android.view.Surface, param5: number): android.hardware.display.VirtualDisplay;

                public unregisterDisplayListener(param0: android.hardware.display.DisplayManager.DisplayListener): void;
            }
            export module DisplayManager {
                export class DisplayListener extends javalangObject {
                    /**
                     * Constructs a new instance of the android.hardware.display.DisplayManager$DisplayListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onDisplayAdded(param0: number): void;
                        onDisplayRemoved(param0: number): void;
                        onDisplayChanged(param0: number): void;
                    });

                    public onDisplayRemoved(param0: number): void;

                    public onDisplayAdded(param0: number): void;

                    public onDisplayChanged(param0: number): void;
                }
            }
        }
    }
}

/// <reference path="./android.view.Display.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
declare module android {
    export module hardware {
        export module display {
            export class VirtualDisplay extends javalangObject {
                public release(): void;

                public setSurface(param0: android.view.Surface): void;

                public getSurface(): android.view.Surface;

                public getDisplay(): android.view.Display;

                public toString(): string;

                public resize(param0: number, param1: number, param2: number): void;
            }
            export module VirtualDisplay {
                export abstract class Callback extends javalangObject {
                    public onStopped(): void;

                    public constructor();

                    public onPaused(): void;

                    public onResumed(): void;
                }
            }
        }
    }
}

import javasecuritySignature = java.security.Signature;
import javaxcryptoCipher = javax.crypto.Cipher;
import javaxcryptoMac = javax.crypto.Mac;
/// <reference path="./android.os.CancellationSignal.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.security.Signature.d.ts" />
/// <reference path="./javax.crypto.Cipher.d.ts" />
/// <reference path="./javax.crypto.Mac.d.ts" />
declare module android {
    export module hardware {
        export module fingerprint {
            export class FingerprintManager extends javalangObject {
                public static FINGERPRINT_ACQUIRED_GOOD: number;
                public static FINGERPRINT_ACQUIRED_IMAGER_DIRTY: number;
                public static FINGERPRINT_ACQUIRED_INSUFFICIENT: number;
                public static FINGERPRINT_ACQUIRED_PARTIAL: number;
                public static FINGERPRINT_ACQUIRED_TOO_FAST: number;
                public static FINGERPRINT_ACQUIRED_TOO_SLOW: number;
                public static FINGERPRINT_ERROR_CANCELED: number;
                public static FINGERPRINT_ERROR_HW_UNAVAILABLE: number;
                public static FINGERPRINT_ERROR_LOCKOUT: number;
                public static FINGERPRINT_ERROR_NO_SPACE: number;
                public static FINGERPRINT_ERROR_TIMEOUT: number;
                public static FINGERPRINT_ERROR_UNABLE_TO_PROCESS: number;

                public isHardwareDetected(): boolean;

                public hasEnrolledFingerprints(): boolean;

                public authenticate(param0: android.hardware.fingerprint.FingerprintManager.CryptoObject, param1: android.os.CancellationSignal, param2: number, param3: android.hardware.fingerprint.FingerprintManager.AuthenticationCallback, param4: android.os.Handler): void;
            }
            export module FingerprintManager {
                export abstract class AuthenticationCallback extends javalangObject {
                    public constructor();

                    public onAuthenticationHelp(param0: number, param1: string): void;

                    public onAuthenticationSucceeded(param0: android.hardware.fingerprint.FingerprintManager.AuthenticationResult): void;

                    public onAuthenticationFailed(): void;

                    public onAuthenticationError(param0: number, param1: string): void;
                }
                export class AuthenticationResult extends javalangObject {
                    public getCryptoObject(): android.hardware.fingerprint.FingerprintManager.CryptoObject;
                }
                export class CryptoObject extends javalangObject {
                    public constructor(param0: javaxcryptoCipher);

                    public getMac(): javaxcryptoMac;

                    public getSignature(): javasecuritySignature;

                    public constructor(param0: javaxcryptoMac);

                    public getCipher(): javaxcryptoCipher;

                    public constructor(param0: javasecuritySignature);
                }
            }
        }
    }
}

/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.view.InputDevice.d.ts" />
declare module android {
    export module hardware {
        export module input {
            export class InputManager extends javalangObject {
                public static ACTION_QUERY_KEYBOARD_LAYOUTS: string;
                public static META_DATA_KEYBOARD_LAYOUTS: string;

                public getInputDeviceIds(): native.Array<number>;

                public registerInputDeviceListener(param0: android.hardware.input.InputManager.InputDeviceListener, param1: android.os.Handler): void;

                public getInputDevice(param0: number): android.view.InputDevice;

                public unregisterInputDeviceListener(param0: android.hardware.input.InputManager.InputDeviceListener): void;
            }
            export module InputManager {
                export class InputDeviceListener extends javalangObject {
                    /**
                     * Constructs a new instance of the android.hardware.input.InputManager$InputDeviceListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onInputDeviceAdded(param0: number): void;
                        onInputDeviceRemoved(param0: number): void;
                        onInputDeviceChanged(param0: number): void;
                    });

                    public onInputDeviceRemoved(param0: number): void;

                    public onInputDeviceAdded(param0: number): void;

                    public onInputDeviceChanged(param0: number): void;
                }
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
    export module hardware {
        export module usb {
            export class UsbAccessory extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public getVersion(): string;

                public getUri(): string;

                public getManufacturer(): string;

                public equals(param0: javalangObject): boolean;

                public hashCode(): number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getSerial(): string;

                public describeContents(): number;

                public getDescription(): string;

                public getModel(): string;

                public toString(): string;
            }
        }
    }
}

/// <reference path="./android.hardware.usb.UsbInterface.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module hardware {
        export module usb {
            export class UsbConfiguration extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public isSelfPowered(): boolean;

                public isRemoteWakeup(): boolean;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getId(): number;

                public describeContents(): number;

                public getMaxPower(): number;

                public getName(): string;

                public getInterfaceCount(): number;

                public toString(): string;

                public getInterface(param0: number): android.hardware.usb.UsbInterface;
            }
        }
    }
}

declare module android {
    export module hardware {
        export module usb {
            export class UsbConstants extends javalangObject {
                public static USB_CLASS_APP_SPEC: number;
                public static USB_CLASS_AUDIO: number;
                public static USB_CLASS_CDC_DATA: number;
                public static USB_CLASS_COMM: number;
                public static USB_CLASS_CONTENT_SEC: number;
                public static USB_CLASS_CSCID: number;
                public static USB_CLASS_HID: number;
                public static USB_CLASS_HUB: number;
                public static USB_CLASS_MASS_STORAGE: number;
                public static USB_CLASS_MISC: number;
                public static USB_CLASS_PER_INTERFACE: number;
                public static USB_CLASS_PHYSICA: number;
                public static USB_CLASS_PRINTER: number;
                public static USB_CLASS_STILL_IMAGE: number;
                public static USB_CLASS_VENDOR_SPEC: number;
                public static USB_CLASS_VIDEO: number;
                public static USB_CLASS_WIRELESS_CONTROLLER: number;
                public static USB_DIR_IN: number;
                public static USB_DIR_OUT: number;
                public static USB_ENDPOINT_DIR_MASK: number;
                public static USB_ENDPOINT_NUMBER_MASK: number;
                public static USB_ENDPOINT_XFERTYPE_MASK: number;
                public static USB_ENDPOINT_XFER_BULK: number;
                public static USB_ENDPOINT_XFER_CONTROL: number;
                public static USB_ENDPOINT_XFER_INT: number;
                public static USB_ENDPOINT_XFER_ISOC: number;
                public static USB_INTERFACE_SUBCLASS_BOOT: number;
                public static USB_SUBCLASS_VENDOR_SPEC: number;
                public static USB_TYPE_CLASS: number;
                public static USB_TYPE_MASK: number;
                public static USB_TYPE_RESERVED: number;
                public static USB_TYPE_STANDARD: number;
                public static USB_TYPE_VENDOR: number;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.hardware.usb.UsbConfiguration.d.ts" />
/// <reference path="./android.hardware.usb.UsbInterface.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module hardware {
        export module usb {
            export class UsbDevice extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public getVendorId(): number;

                public getProductId(): number;

                public getDeviceName(): string;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getManufacturerName(): string;

                public getConfigurationCount(): number;

                public getDeviceProtocol(): number;

                public static getDeviceName(param0: number): string;

                public toString(): string;

                public getDeviceSubclass(): number;

                public getSerialNumber(): string;

                public getInterface(param0: number): android.hardware.usb.UsbInterface;

                public getConfiguration(param0: number): android.hardware.usb.UsbConfiguration;

                public getVersion(): string;

                public getDeviceId(): number;
                public static getDeviceId(param0: string): number;

                public equals(param0: javalangObject): boolean;

                public hashCode(): number;

                public getDeviceClass(): number;

                public describeContents(): number;

                public getInterfaceCount(): number;

                public getProductName(): string;
            }
        }
    }
}

/// <reference path="./android.hardware.usb.UsbConfiguration.d.ts" />
/// <reference path="./android.hardware.usb.UsbEndpoint.d.ts" />
/// <reference path="./android.hardware.usb.UsbInterface.d.ts" />
/// <reference path="./android.hardware.usb.UsbRequest.d.ts" />
declare module android {
    export module hardware {
        export module usb {
            export class UsbDeviceConnection extends javalangObject {
                public close(): void;

                public setInterface(param0: android.hardware.usb.UsbInterface): boolean;

                public getFileDescriptor(): number;

                public getRawDescriptors(): native.Array<number>;

                public controlTransfer(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>, param5: number, param6: number, param7: number): number;

                public getSerial(): string;

                public bulkTransfer(param0: android.hardware.usb.UsbEndpoint, param1: native.Array<number>, param2: number, param3: number, param4: number): number;

                public controlTransfer(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>, param5: number, param6: number): number;

                public bulkTransfer(param0: android.hardware.usb.UsbEndpoint, param1: native.Array<number>, param2: number, param3: number): number;

                public claimInterface(param0: android.hardware.usb.UsbInterface, param1: boolean): boolean;

                public setConfiguration(param0: android.hardware.usb.UsbConfiguration): boolean;

                public releaseInterface(param0: android.hardware.usb.UsbInterface): boolean;

                public requestWait(): android.hardware.usb.UsbRequest;
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module hardware {
        export module usb {
            export class UsbEndpoint extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public getEndpointNumber(): number;

                public getMaxPacketSize(): number;

                public getDirection(): number;

                public getAttributes(): number;

                public getType(): number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getInterval(): number;

                public describeContents(): number;

                public getAddress(): number;

                public toString(): string;
            }
        }
    }
}

/// <reference path="./android.hardware.usb.UsbEndpoint.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
declare module android {
    export module hardware {
        export module usb {
            export class UsbInterface extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;

                public getInterfaceSubclass(): number;

                public getEndpointCount(): number;

                public getAlternateSetting(): number;

                public getInterfaceProtocol(): number;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getId(): number;

                public describeContents(): number;

                public getName(): string;

                public getEndpoint(param0: number): android.hardware.usb.UsbEndpoint;

                public toString(): string;

                public getInterfaceClass(): number;
            }
        }
    }
}

/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.hardware.usb.UsbAccessory.d.ts" />
/// <reference path="./android.hardware.usb.UsbDevice.d.ts" />
/// <reference path="./android.hardware.usb.UsbDeviceConnection.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module android {
    export module hardware {
        export module usb {
            export class UsbManager extends javalangObject {
                public static ACTION_USB_ACCESSORY_ATTACHED: string;
                public static ACTION_USB_ACCESSORY_DETACHED: string;
                public static ACTION_USB_DEVICE_ATTACHED: string;
                public static ACTION_USB_DEVICE_DETACHED: string;
                public static EXTRA_ACCESSORY: string;
                public static EXTRA_DEVICE: string;
                public static EXTRA_PERMISSION_GRANTED: string;

                public requestPermission(param0: android.hardware.usb.UsbDevice, param1: android.app.PendingIntent): void;

                public getAccessoryList(): native.Array<android.hardware.usb.UsbAccessory>;

                public hasPermission(param0: android.hardware.usb.UsbAccessory): boolean;

                public requestPermission(param0: android.hardware.usb.UsbAccessory, param1: android.app.PendingIntent): void;

                public openDevice(param0: android.hardware.usb.UsbDevice): android.hardware.usb.UsbDeviceConnection;

                public openAccessory(param0: android.hardware.usb.UsbAccessory): android.os.ParcelFileDescriptor;

                public getDeviceList(): javautilHashMap;

                public hasPermission(param0: android.hardware.usb.UsbDevice): boolean;
            }
        }
    }
}

/// <reference path="./android.hardware.usb.UsbDeviceConnection.d.ts" />
/// <reference path="./android.hardware.usb.UsbEndpoint.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
declare module android {
    export module hardware {
        export module usb {
            export class UsbRequest extends javalangObject {
                public getEndpoint(): android.hardware.usb.UsbEndpoint;

                public setClientData(param0: javalangObject): void;

                public close(): void;

                public initialize(param0: android.hardware.usb.UsbDeviceConnection, param1: android.hardware.usb.UsbEndpoint): boolean;

                public getClientData(): javalangObject;

                public queue(param0: javanioByteBuffer, param1: number): boolean;

                public finalize(): void;

                public cancel(): boolean;

                public constructor();
            }
        }
    }
}
