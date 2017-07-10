
/// <reference path="./android.os.Bundle.d.ts" />
declare module android {
    export module speech {
        export class RecognitionListener extends javalangObject {
            /**
             * Constructs a new instance of the android.speech.RecognitionListener interface with the provided implementation.
             */
            public constructor(implementation: {
                onReadyForSpeech(param0: android.os.Bundle): void;
                onBeginningOfSpeech(): void;
                onRmsChanged(param0: number): void;
                onBufferReceived(param0: native.Array<number>): void;
                onEndOfSpeech(): void;
                onError(param0: number): void;
                onResults(param0: android.os.Bundle): void;
                onPartialResults(param0: android.os.Bundle): void;
                onEvent(param0: number, param1: android.os.Bundle): void;
            });

            public onEndOfSpeech(): void;

            public onRmsChanged(param0: number): void;

            public onBufferReceived(param0: native.Array<number>): void;

            public onEvent(param0: number, param1: android.os.Bundle): void;

            public onPartialResults(param0: android.os.Bundle): void;

            public onReadyForSpeech(param0: android.os.Bundle): void;

            public onError(param0: number): void;

            public onResults(param0: android.os.Bundle): void;

            public onBeginningOfSpeech(): void;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
declare module android {
    export module speech {
        export abstract class RecognitionService extends android.app.Service {
            public static SERVICE_INTERFACE: string;
            public static SERVICE_META_DATA: string;

            public onCancel(param0: android.speech.RecognitionService.Callback): void;

            public onTrimMemory(param0: number): void;

            public onStartListening(param0: android.content.Intent, param1: android.speech.RecognitionService.Callback): void;

            public onBind(param0: android.content.Intent): android.os.IBinder;

            public constructor(param0: android.content.Context);

            public onStopListening(param0: android.speech.RecognitionService.Callback): void;

            public constructor();

            public onDestroy(): void;
        }
        export module RecognitionService {
            export class Callback extends javalangObject {
                public bufferReceived(param0: native.Array<number>): void;

                public getCallingUid(): number;

                public endOfSpeech(): void;

                public error(param0: number): void;

                public partialResults(param0: android.os.Bundle): void;

                public results(param0: android.os.Bundle): void;

                public rmsChanged(param0: number): void;

                public beginningOfSpeech(): void;

                public readyForSpeech(param0: android.os.Bundle): void;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
declare module android {
    export module speech {
        export class RecognizerIntent extends javalangObject {
            public static ACTION_GET_LANGUAGE_DETAILS: string;
            public static ACTION_RECOGNIZE_SPEECH: string;
            public static ACTION_VOICE_SEARCH_HANDS_FREE: string;
            public static ACTION_WEB_SEARCH: string;
            public static DETAILS_META_DATA: string;
            public static EXTRA_CALLING_PACKAGE: string;
            public static EXTRA_CONFIDENCE_SCORES: string;
            public static EXTRA_LANGUAGE: string;
            public static EXTRA_LANGUAGE_MODEL: string;
            public static EXTRA_LANGUAGE_PREFERENCE: string;
            public static EXTRA_MAX_RESULTS: string;
            public static EXTRA_ONLY_RETURN_LANGUAGE_PREFERENCE: string;
            public static EXTRA_ORIGIN: string;
            public static EXTRA_PARTIAL_RESULTS: string;
            public static EXTRA_PREFER_OFFLINE: string;
            public static EXTRA_PROMPT: string;
            public static EXTRA_RESULTS: string;
            public static EXTRA_RESULTS_PENDINGINTENT: string;
            public static EXTRA_RESULTS_PENDINGINTENT_BUNDLE: string;
            public static EXTRA_SECURE: string;
            public static EXTRA_SPEECH_INPUT_COMPLETE_SILENCE_LENGTH_MILLIS: string;
            public static EXTRA_SPEECH_INPUT_MINIMUM_LENGTH_MILLIS: string;
            public static EXTRA_SPEECH_INPUT_POSSIBLY_COMPLETE_SILENCE_LENGTH_MILLIS: string;
            public static EXTRA_SUPPORTED_LANGUAGES: string;
            public static EXTRA_WEB_SEARCH_ONLY: string;
            public static LANGUAGE_MODEL_FREE_FORM: string;
            public static LANGUAGE_MODEL_WEB_SEARCH: string;
            public static RESULT_AUDIO_ERROR: number;
            public static RESULT_CLIENT_ERROR: number;
            public static RESULT_NETWORK_ERROR: number;
            public static RESULT_NO_MATCH: number;
            public static RESULT_SERVER_ERROR: number;

            public static getVoiceDetailsIntent(param0: android.content.Context): android.content.Intent;
        }
    }
}

declare module android {
    export module speech {
        export class RecognizerResultsIntent extends javalangObject {
            public static ACTION_VOICE_SEARCH_RESULTS: string;
            public static EXTRA_VOICE_SEARCH_RESULT_HTML: string;
            public static EXTRA_VOICE_SEARCH_RESULT_HTML_BASE_URLS: string;
            public static EXTRA_VOICE_SEARCH_RESULT_HTTP_HEADERS: string;
            public static EXTRA_VOICE_SEARCH_RESULT_STRINGS: string;
            public static EXTRA_VOICE_SEARCH_RESULT_URLS: string;
            public static URI_SCHEME_INLINE: string;
        }
    }
}

/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.speech.RecognitionListener.d.ts" />
declare module android {
    export module speech {
        export class SpeechRecognizer extends javalangObject {
            public static CONFIDENCE_SCORES: string;
            public static ERROR_AUDIO: number;
            public static ERROR_CLIENT: number;
            public static ERROR_INSUFFICIENT_PERMISSIONS: number;
            public static ERROR_NETWORK: number;
            public static ERROR_NETWORK_TIMEOUT: number;
            public static ERROR_NO_MATCH: number;
            public static ERROR_RECOGNIZER_BUSY: number;
            public static ERROR_SERVER: number;
            public static ERROR_SPEECH_TIMEOUT: number;
            public static RESULTS_RECOGNITION: string;

            public static createSpeechRecognizer(param0: android.content.Context): android.speech.SpeechRecognizer;

            public startListening(param0: android.content.Intent): void;

            public destroy(): void;

            public setRecognitionListener(param0: android.speech.RecognitionListener): void;

            public stopListening(): void;

            public cancel(): void;

            public static isRecognitionAvailable(param0: android.content.Context): boolean;

            public static createSpeechRecognizer(param0: android.content.Context, param1: android.content.ComponentName): android.speech.SpeechRecognizer;
        }
    }
}

declare module android {
    export module speech {
        export module tts {
            export class SynthesisCallback extends javalangObject {
                /**
                 * Constructs a new instance of the android.speech.tts.SynthesisCallback interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getMaxBufferSize(): number;
                    start(param0: number, param1: number, param2: number): number;
                    audioAvailable(param0: native.Array<number>, param1: number, param2: number): number;
                    done(): number;
                    error(): void;
                    error(param0: number): void;
                    hasStarted(): boolean;
                    hasFinished(): boolean;
                });

                public error(param0: number): void;

                public audioAvailable(param0: native.Array<number>, param1: number, param2: number): number;

                public error(): void;

                public start(param0: number, param1: number, param2: number): number;

                public hasStarted(): boolean;

                public hasFinished(): boolean;

                public getMaxBufferSize(): number;

                public done(): number;
            }
        }
    }
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module speech {
        export module tts {
            export class SynthesisRequest extends javalangObject {
                public constructor(param0: string, param1: android.os.Bundle);

                public getCharSequenceText(): string;

                public getParams(): android.os.Bundle;

                public getCallerUid(): number;

                public getSpeechRate(): number;

                public getVoiceName(): string;

                public getCountry(): string;

                public getLanguage(): string;

                public getVariant(): string;

                public getPitch(): number;

                public getText(): string;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.media.AudioAttributes.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.speech.tts.TextToSpeech.d.ts" />
/// <reference path="./android.speech.tts.UtteranceProgressListener.d.ts" />
/// <reference path="./android.speech.tts.Voice.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module android {
    export module speech {
        export module tts {
            export class TextToSpeech extends javalangObject {
                public static ACTION_TTS_QUEUE_PROCESSING_COMPLETED: string;
                public static ERROR: number;
                public static ERROR_INVALID_REQUEST: number;
                public static ERROR_NETWORK: number;
                public static ERROR_NETWORK_TIMEOUT: number;
                public static ERROR_NOT_INSTALLED_YET: number;
                public static ERROR_OUTPUT: number;
                public static ERROR_SERVICE: number;
                public static ERROR_SYNTHESIS: number;
                public static LANG_AVAILABLE: number;
                public static LANG_COUNTRY_AVAILABLE: number;
                public static LANG_COUNTRY_VAR_AVAILABLE: number;
                public static LANG_MISSING_DATA: number;
                public static LANG_NOT_SUPPORTED: number;
                public static QUEUE_ADD: number;
                public static QUEUE_FLUSH: number;
                public static STOPPED: number;
                public static SUCCESS: number;

                public setEngineByPackageName(param0: string): number;

                public setAudioAttributes(param0: android.media.AudioAttributes): number;

                public getVoice(): android.speech.tts.Voice;

                public addSpeech(param0: string, param1: string, param2: number): number;

                public addEarcon(param0: string, param1: string): number;

                public getDefaultLanguage(): javautilLocale;

                public getLanguage(): javautilLocale;

                public playEarcon(param0: string, param1: number, param2: android.os.Bundle, param3: string): number;

                public getEngines(): javautilList;

                public getVoices(): javautilSet;

                public isLanguageAvailable(param0: javautilLocale): number;

                public synthesizeToFile(param0: string, param1: android.os.Bundle, param2: javaioFile, param3: string): number;

                public shutdown(): void;

                public isSpeaking(): boolean;

                public getDefaultEngine(): string;

                public playSilence(param0: number, param1: number, param2: javautilHashMap): number;

                public setPitch(param0: number): number;

                public addSpeech(param0: string, param1: javaioFile): number;

                public setOnUtteranceProgressListener(param0: android.speech.tts.UtteranceProgressListener): number;

                public addEarcon(param0: string, param1: string, param2: number): number;

                public setVoice(param0: android.speech.tts.Voice): number;

                public areDefaultsEnforced(): boolean;

                public getDefaultVoice(): android.speech.tts.Voice;

                public playEarcon(param0: string, param1: number, param2: javautilHashMap): number;

                public constructor(param0: android.content.Context, param1: android.speech.tts.TextToSpeech.OnInitListener);

                public addSpeech(param0: string, param1: string): number;

                public constructor(param0: android.content.Context, param1: android.speech.tts.TextToSpeech.OnInitListener, param2: string);

                public addEarcon(param0: string, param1: javaioFile): number;

                public getFeatures(param0: javautilLocale): javautilSet;

                public setLanguage(param0: javautilLocale): number;

                public setSpeechRate(param0: number): number;

                public stop(): number;

                public setOnUtteranceCompletedListener(param0: android.speech.tts.TextToSpeech.OnUtteranceCompletedListener): number;

                public getAvailableLanguages(): javautilSet;

                public playSilentUtterance(param0: number, param1: number, param2: string): number;

                public static getMaxSpeechInputLength(): number;

                public speak(param0: string, param1: number, param2: javautilHashMap): number;

                public synthesizeToFile(param0: string, param1: javautilHashMap, param2: string): number;

                public speak(param0: string, param1: number, param2: android.os.Bundle, param3: string): number;
            }
            export module TextToSpeech {
                export class Engine extends javalangObject {
                    public static ACTION_CHECK_TTS_DATA: string;
                    public static ACTION_GET_SAMPLE_TEXT: string;
                    public static ACTION_INSTALL_TTS_DATA: string;
                    public static ACTION_TTS_DATA_INSTALLED: string;
                    public static CHECK_VOICE_DATA_BAD_DATA: number;
                    public static CHECK_VOICE_DATA_FAIL: number;
                    public static CHECK_VOICE_DATA_MISSING_DATA: number;
                    public static CHECK_VOICE_DATA_MISSING_VOLUME: number;
                    public static CHECK_VOICE_DATA_PASS: number;
                    public static DEFAULT_STREAM: number;
                    public static EXTRA_AVAILABLE_VOICES: string;
                    public static EXTRA_CHECK_VOICE_DATA_FOR: string;
                    public static EXTRA_SAMPLE_TEXT: string;
                    public static EXTRA_TTS_DATA_INSTALLED: string;
                    public static EXTRA_UNAVAILABLE_VOICES: string;
                    public static EXTRA_VOICE_DATA_FILES: string;
                    public static EXTRA_VOICE_DATA_FILES_INFO: string;
                    public static EXTRA_VOICE_DATA_ROOT_DIRECTORY: string;
                    public static INTENT_ACTION_TTS_SERVICE: string;
                    public static KEY_FEATURE_EMBEDDED_SYNTHESIS: string;
                    public static KEY_FEATURE_NETWORK_RETRIES_COUNT: string;
                    public static KEY_FEATURE_NETWORK_SYNTHESIS: string;
                    public static KEY_FEATURE_NETWORK_TIMEOUT_MS: string;
                    public static KEY_FEATURE_NOT_INSTALLED: string;
                    public static KEY_PARAM_PAN: string;
                    public static KEY_PARAM_SESSION_ID: string;
                    public static KEY_PARAM_STREAM: string;
                    public static KEY_PARAM_UTTERANCE_ID: string;
                    public static KEY_PARAM_VOLUME: string;
                    public static SERVICE_META_DATA: string;

                    public constructor(param0: android.speech.tts.TextToSpeech);
                }
                export class EngineInfo extends javalangObject {
                    public icon: number;
                    public label: string;
                    public name: string;

                    public toString(): string;

                    public constructor();
                }
                export class OnInitListener extends javalangObject {
                    /**
                     * Constructs a new instance of the android.speech.tts.TextToSpeech$OnInitListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onInit(param0: number): void;
                    });

                    public onInit(param0: number): void;
                }
                export class OnUtteranceCompletedListener extends javalangObject {
                    /**
                     * Constructs a new instance of the android.speech.tts.TextToSpeech$OnUtteranceCompletedListener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        onUtteranceCompleted(param0: string): void;
                    });

                    public onUtteranceCompleted(param0: string): void;
                }
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.speech.tts.SynthesisCallback.d.ts" />
/// <reference path="./android.speech.tts.SynthesisRequest.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module android {
    export module speech {
        export module tts {
            export abstract class TextToSpeechService extends android.app.Service {
                public onGetDefaultVoiceNameFor(param0: string, param1: string, param2: string): string;

                public constructor();

                public onGetLanguage(): native.Array<string>;

                public onGetVoices(): javautilList;

                public onLoadLanguage(param0: string, param1: string, param2: string): number;

                public onBind(param0: android.content.Intent): android.os.IBinder;

                public onIsLanguageAvailable(param0: string, param1: string, param2: string): number;

                public onGetFeaturesForLanguage(param0: string, param1: string, param2: string): javautilSet;

                public constructor(param0: android.content.Context);

                public onCreate(): void;

                public onSynthesizeText(param0: android.speech.tts.SynthesisRequest, param1: android.speech.tts.SynthesisCallback): void;

                public onStop(): void;

                public onLoadVoice(param0: string): number;

                public onDestroy(): void;

                public onTrimMemory(param0: number): void;

                public onIsValidVoiceName(param0: string): number;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module speech {
        export module tts {
            export abstract class UtteranceProgressListener extends javalangObject {
                public onError(param0: string): void;

                public onDone(param0: string): void;

                public onStop(param0: string, param1: boolean): void;

                public onError(param0: string, param1: number): void;

                public constructor();

                public onStart(param0: string): void;
            }
        }
    }
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module android {
    export module speech {
        export module tts {
            export class Voice extends javalangObject implements android.os.Parcelable {
                public static CREATOR: android.os.Parcelable.Creator;
                public static LATENCY_HIGH: number;
                public static LATENCY_LOW: number;
                public static LATENCY_NORMAL: number;
                public static LATENCY_VERY_HIGH: number;
                public static LATENCY_VERY_LOW: number;
                public static QUALITY_HIGH: number;
                public static QUALITY_LOW: number;
                public static QUALITY_NORMAL: number;
                public static QUALITY_VERY_HIGH: number;
                public static QUALITY_VERY_LOW: number;

                public getFeatures(): javautilSet;

                public equals(param0: javalangObject): boolean;

                public writeToParcel(param0: android.os.Parcel, param1: number): void;

                public getQuality(): number;

                public hashCode(): number;

                public describeContents(): number;

                public isNetworkConnectionRequired(): boolean;

                public getName(): string;

                public toString(): string;

                public constructor(param0: string, param1: javautilLocale, param2: number, param3: number, param4: boolean, param5: javautilSet);

                public getLocale(): javautilLocale;

                public getLatency(): number;
            }
        }
    }
}
