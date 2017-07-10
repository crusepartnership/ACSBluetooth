
declare module android {
    export module provider {
        export class AlarmClock extends javalangObject {
            public static ACTION_DISMISS_ALARM: string;
            public static ACTION_SET_ALARM: string;
            public static ACTION_SET_TIMER: string;
            public static ACTION_SHOW_ALARMS: string;
            public static ACTION_SNOOZE_ALARM: string;
            public static ALARM_SEARCH_MODE_ALL: string;
            public static ALARM_SEARCH_MODE_LABEL: string;
            public static ALARM_SEARCH_MODE_NEXT: string;
            public static ALARM_SEARCH_MODE_TIME: string;
            public static EXTRA_ALARM_SEARCH_MODE: string;
            public static EXTRA_ALARM_SNOOZE_DURATION: string;
            public static EXTRA_DAYS: string;
            public static EXTRA_HOUR: string;
            public static EXTRA_IS_PM: string;
            public static EXTRA_LENGTH: string;
            public static EXTRA_MESSAGE: string;
            public static EXTRA_MINUTES: string;
            public static EXTRA_RINGTONE: string;
            public static EXTRA_SKIP_UI: string;
            public static EXTRA_VIBRATE: string;
            public static VALUE_RINGTONE_SILENT: string;

            public constructor();
        }
    }
}

declare module android {
    export module provider {
        export class BaseColumns extends javalangObject {
            /**
             * Constructs a new instance of the android.provider.BaseColumns interface with the provided implementation.
             */
            public constructor(implementation: {});

            public static _COUNT: string;
            public static _ID: string;
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module provider {
        export class Browser extends javalangObject {
            public static EXTRA_APPLICATION_ID: string;
            public static EXTRA_CREATE_NEW_TAB: string;
            public static EXTRA_HEADERS: string;
            public static INITIAL_ZOOM_LEVEL: string;

            public static sendString(param0: android.content.Context, param1: string): void;

            public constructor();
        }
    }
}

/// <reference path="./android.content.ContentProviderClient.d.ts" />
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.EntityIterator.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module provider {
        export class CalendarContract extends javalangObject {
            public static ACCOUNT_TYPE_LOCAL: string;
            public static ACTION_EVENT_REMINDER: string;
            public static ACTION_HANDLE_CUSTOM_EVENT: string;
            public static AUTHORITY: string;
            public static CALLER_IS_SYNCADAPTER: string;
            public static CONTENT_URI: android.net.Uri;
            public static EXTRA_CUSTOM_APP_URI: string;
            public static EXTRA_EVENT_ALL_DAY: string;
            public static EXTRA_EVENT_BEGIN_TIME: string;
            public static EXTRA_EVENT_END_TIME: string;
        }
        export module CalendarContract {
            export class Attendees extends javalangObject implements android.provider.BaseColumns, android.provider.CalendarContract.AttendeesColumns, android.provider.CalendarContract.EventsColumns {
                public static CONTENT_URI: android.net.Uri;

                public static query(param0: android.content.ContentResolver, param1: number, param2: native.Array<string>): android.database.Cursor;
            }
            export class AttendeesColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.CalendarContract$AttendeesColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static RELATIONSHIP_NONE: number;
                public static TYPE_RESOURCE: number;
                public static ATTENDEE_STATUS_ACCEPTED: number;
                public static ATTENDEE_STATUS: string;
                public static ATTENDEE_STATUS_DECLINED: number;
                public static EVENT_ID: string;
                public static TYPE_REQUIRED: number;
                public static ATTENDEE_EMAIL: string;
                public static RELATIONSHIP_SPEAKER: number;
                public static ATTENDEE_IDENTITY: string;
                public static ATTENDEE_STATUS_NONE: number;
                public static ATTENDEE_TYPE: string;
                public static ATTENDEE_ID_NAMESPACE: string;
                public static RELATIONSHIP_ATTENDEE: number;
                public static ATTENDEE_RELATIONSHIP: string;
                public static TYPE_OPTIONAL: number;
                public static TYPE_NONE: number;
                public static ATTENDEE_NAME: string;
                public static RELATIONSHIP_PERFORMER: number;
                public static RELATIONSHIP_ORGANIZER: number;
                public static ATTENDEE_STATUS_INVITED: number;
                public static ATTENDEE_STATUS_TENTATIVE: number;
            }
            export class CalendarAlerts extends javalangObject implements android.provider.BaseColumns, android.provider.CalendarContract.CalendarAlertsColumns, android.provider.CalendarContract.EventsColumns, android.provider.CalendarContract.CalendarColumns {
                public static CONTENT_URI: android.net.Uri;
                public static CONTENT_URI_BY_INSTANCE: android.net.Uri;
            }
            export class CalendarAlertsColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.CalendarContract$CalendarAlertsColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static STATE_FIRED: number;
                public static ALARM_TIME: string;
                public static STATE_DISMISSED: number;
                public static MINUTES: string;
                public static NOTIFY_TIME: string;
                public static END: string;
                public static EVENT_ID: string;
                public static CREATION_TIME: string;
                public static DEFAULT_SORT_ORDER: string;
                public static STATE_SCHEDULED: number;
                public static RECEIVED_TIME: string;
                public static STATE: string;
                public static BEGIN: string;
            }
            export class CalendarCache extends javalangObject implements android.provider.CalendarContract.CalendarCacheColumns {
                public static KEY_TIMEZONE_INSTANCES: string;
                public static KEY_TIMEZONE_INSTANCES_PREVIOUS: string;
                public static KEY_TIMEZONE_TYPE: string;
                public static TIMEZONE_TYPE_AUTO: string;
                public static TIMEZONE_TYPE_HOME: string;
                public static URI: android.net.Uri;
            }
            export class CalendarCacheColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.CalendarContract$CalendarCacheColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static VALUE: string;
                public static KEY: string;
            }
            export class CalendarColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.CalendarContract$CalendarColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static CALENDAR_TIME_ZONE: string;
                public static CAL_ACCESS_CONTRIBUTOR: number;
                public static CAN_MODIFY_TIME_ZONE: string;
                public static CALENDAR_ACCESS_LEVEL: string;
                public static IS_PRIMARY: string;
                public static CAL_ACCESS_EDITOR: number;
                public static CAL_ACCESS_OVERRIDE: number;
                public static CAL_ACCESS_RESPOND: number;
                public static MAX_REMINDERS: string;
                public static SYNC_EVENTS: string;
                public static ALLOWED_ATTENDEE_TYPES: string;
                public static CALENDAR_COLOR_KEY: string;
                public static CALENDAR_COLOR: string;
                public static CAL_ACCESS_NONE: number;
                public static CAL_ACCESS_READ: number;
                public static OWNER_ACCOUNT: string;
                public static CAL_ACCESS_FREEBUSY: number;
                public static CALENDAR_DISPLAY_NAME: string;
                public static ALLOWED_AVAILABILITY: string;
                public static CAN_ORGANIZER_RESPOND: string;
                public static CAL_ACCESS_ROOT: number;
                public static ALLOWED_REMINDERS: string;
                public static VISIBLE: string;
                public static CAL_ACCESS_OWNER: number;
            }
            export class CalendarEntity extends javalangObject implements android.provider.BaseColumns, android.provider.CalendarContract.SyncColumns, android.provider.CalendarContract.CalendarColumns {
                public static CONTENT_URI: android.net.Uri;

                public static newEntityIterator(param0: android.database.Cursor): android.content.EntityIterator;
            }
            export class CalendarSyncColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.CalendarContract$CalendarSyncColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static CAL_SYNC3: string;
                public static CAL_SYNC2: string;
                public static CAL_SYNC1: string;
                public static CAL_SYNC10: string;
                public static CAL_SYNC9: string;
                public static CAL_SYNC8: string;
                public static CAL_SYNC7: string;
                public static CAL_SYNC6: string;
                public static CAL_SYNC5: string;
                public static CAL_SYNC4: string;
            }
            export class Calendars extends javalangObject implements android.provider.BaseColumns, android.provider.CalendarContract.SyncColumns, android.provider.CalendarContract.CalendarColumns {
                public static CALENDAR_LOCATION: string;
                public static CONTENT_URI: android.net.Uri;
                public static DEFAULT_SORT_ORDER: string;
                public static NAME: string;
            }
            export class Colors extends javalangObject implements android.provider.CalendarContract.ColorsColumns {
                public static CONTENT_URI: android.net.Uri;
            }
            export class ColorsColumns extends javalangObject implements android.provider.SyncStateContract.Columns {
                /**
                 * Constructs a new instance of the android.provider.CalendarContract$ColorsColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static ACCOUNT_NAME: string;
                public static _COUNT: string;
                public static ACCOUNT_TYPE: string;
                public static TYPE_CALENDAR: number;
                public static DATA: string;
                public static COLOR: string;
                public static _ID: string;
                public static COLOR_TYPE: string;
                public static COLOR_KEY: string;
                public static TYPE_EVENT: number;
            }
            export class EventDays extends javalangObject implements android.provider.CalendarContract.EventDaysColumns {
                public static CONTENT_URI: android.net.Uri;

                public static query(param0: android.content.ContentResolver, param1: number, param2: number, param3: native.Array<string>): android.database.Cursor;
            }
            export class EventDaysColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.CalendarContract$EventDaysColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static ENDDAY: string;
                public static STARTDAY: string;
            }
            export class Events extends javalangObject implements android.provider.BaseColumns, android.provider.CalendarContract.SyncColumns, android.provider.CalendarContract.EventsColumns, android.provider.CalendarContract.CalendarColumns {
                public static CONTENT_EXCEPTION_URI: android.net.Uri;
                public static CONTENT_URI: android.net.Uri;
            }
            export class EventsColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.CalendarContract$EventsColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static HAS_EXTENDED_PROPERTIES: string;
                public static UID_2445: string;
                public static IS_ORGANIZER: string;
                public static ALL_DAY: string;
                public static EVENT_TIMEZONE: string;
                public static STATUS_TENTATIVE: number;
                public static RDATE: string;
                public static ACCESS_PRIVATE: number;
                public static AVAILABILITY_TENTATIVE: number;
                public static ACCESS_DEFAULT: number;
                public static EXRULE: string;
                public static STATUS: string;
                public static EVENT_LOCATION: string;
                public static EVENT_COLOR_KEY: string;
                public static CAN_INVITE_OTHERS: string;
                public static DTSTART: string;
                public static ACCESS_PUBLIC: number;
                public static AVAILABILITY: string;
                public static GUESTS_CAN_INVITE_OTHERS: string;
                public static LAST_SYNCED: string;
                public static ACCESS_LEVEL: string;
                public static TITLE: string;
                public static HAS_ATTENDEE_DATA: string;
                public static ORIGINAL_SYNC_ID: string;
                public static DURATION: string;
                public static ORGANIZER: string;
                public static ACCESS_CONFIDENTIAL: number;
                public static AVAILABILITY_FREE: number;
                public static LAST_DATE: string;
                public static EVENT_COLOR: string;
                public static RRULE: string;
                public static EVENT_END_TIMEZONE: string;
                public static SELF_ATTENDEE_STATUS: string;
                public static AVAILABILITY_BUSY: number;
                public static STATUS_CONFIRMED: number;
                public static DISPLAY_COLOR: string;
                public static ORIGINAL_ALL_DAY: string;
                public static CALENDAR_ID: string;
                public static ORIGINAL_INSTANCE_TIME: string;
                public static SYNC_DATA1: string;
                public static DESCRIPTION: string;
                public static STATUS_CANCELED: number;
                public static SYNC_DATA3: string;
                public static SYNC_DATA2: string;
                public static CUSTOM_APP_PACKAGE: string;
                public static EXDATE: string;
                public static SYNC_DATA5: string;
                public static SYNC_DATA4: string;
                public static SYNC_DATA7: string;
                public static SYNC_DATA6: string;
                public static SYNC_DATA9: string;
                public static SYNC_DATA8: string;
                public static ORIGINAL_ID: string;
                public static GUESTS_CAN_MODIFY: string;
                public static GUESTS_CAN_SEE_GUESTS: string;
                public static SYNC_DATA10: string;
                public static HAS_ALARM: string;
                public static CUSTOM_APP_URI: string;
                public static DTEND: string;
            }
            export class EventsEntity extends javalangObject implements android.provider.BaseColumns, android.provider.CalendarContract.SyncColumns, android.provider.CalendarContract.EventsColumns {
                public static CONTENT_URI: android.net.Uri;

                public static newEntityIterator(param0: android.database.Cursor, param1: android.content.ContentProviderClient): android.content.EntityIterator;
                public static newEntityIterator(param0: android.database.Cursor, param1: android.content.ContentResolver): android.content.EntityIterator;
            }
            export class ExtendedProperties extends javalangObject implements android.provider.BaseColumns, android.provider.CalendarContract.ExtendedPropertiesColumns, android.provider.CalendarContract.EventsColumns {
                public static CONTENT_URI: android.net.Uri;
            }
            export class ExtendedPropertiesColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.CalendarContract$ExtendedPropertiesColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static VALUE: string;
                public static EVENT_ID: string;
                public static NAME: string;
            }
            export class Instances extends javalangObject implements android.provider.BaseColumns, android.provider.CalendarContract.EventsColumns, android.provider.CalendarContract.CalendarColumns {
                public static BEGIN: string;
                public static CONTENT_BY_DAY_URI: android.net.Uri;
                public static CONTENT_SEARCH_BY_DAY_URI: android.net.Uri;
                public static CONTENT_SEARCH_URI: android.net.Uri;
                public static CONTENT_URI: android.net.Uri;
                public static END: string;
                public static END_DAY: string;
                public static END_MINUTE: string;
                public static EVENT_ID: string;
                public static START_DAY: string;
                public static START_MINUTE: string;

                public static query(param0: android.content.ContentResolver, param1: native.Array<string>, param2: number, param3: number, param4: string): android.database.Cursor;
                public static query(param0: android.content.ContentResolver, param1: native.Array<string>, param2: number, param3: number): android.database.Cursor;
            }
            export class Reminders extends javalangObject implements android.provider.BaseColumns, android.provider.CalendarContract.RemindersColumns, android.provider.CalendarContract.EventsColumns {
                public static CONTENT_URI: android.net.Uri;

                public static query(param0: android.content.ContentResolver, param1: number, param2: native.Array<string>): android.database.Cursor;
            }
            export class RemindersColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.CalendarContract$RemindersColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static MINUTES_DEFAULT: number;
                public static METHOD_DEFAULT: number;
                public static METHOD_ALERT: number;
                public static METHOD_SMS: number;
                public static METHOD: string;
                public static METHOD_ALARM: number;
                public static MINUTES: string;
                public static EVENT_ID: string;
                public static METHOD_EMAIL: number;
            }
            export class SyncColumns extends javalangObject implements android.provider.CalendarContract.CalendarSyncColumns {
                /**
                 * Constructs a new instance of the android.provider.CalendarContract$SyncColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static ACCOUNT_NAME: string;
                public static DIRTY: string;
                public static CAN_PARTIALLY_UPDATE: string;
                public static _SYNC_ID: string;
                public static CAL_SYNC3: string;
                public static CAL_SYNC2: string;
                public static ACCOUNT_TYPE: string;
                public static CAL_SYNC1: string;
                public static CAL_SYNC10: string;
                public static CAL_SYNC9: string;
                public static CAL_SYNC8: string;
                public static CAL_SYNC7: string;
                public static DELETED: string;
                public static CAL_SYNC6: string;
                public static MUTATORS: string;
                public static CAL_SYNC5: string;
                public static CAL_SYNC4: string;
            }
            export class SyncState extends javalangObject implements android.provider.SyncStateContract.Columns {
                public static CONTENT_URI: android.net.Uri;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
declare module android {
    export module provider {
        export class CallLog extends javalangObject {
            public static AUTHORITY: string;
            public static CONTENT_URI: android.net.Uri;

            public constructor();
        }
        export module CallLog {
            export class Calls extends javalangObject implements android.provider.BaseColumns {
                public static CACHED_FORMATTED_NUMBER: string;
                public static CACHED_LOOKUP_URI: string;
                public static CACHED_MATCHED_NUMBER: string;
                public static CACHED_NAME: string;
                public static CACHED_NORMALIZED_NUMBER: string;
                public static CACHED_NUMBER_LABEL: string;
                public static CACHED_NUMBER_TYPE: string;
                public static CACHED_PHOTO_ID: string;
                public static CACHED_PHOTO_URI: string;
                public static CONTENT_FILTER_URI: android.net.Uri;
                public static CONTENT_ITEM_TYPE: string;
                public static CONTENT_TYPE: string;
                public static CONTENT_URI: android.net.Uri;
                public static CONTENT_URI_WITH_VOICEMAIL: android.net.Uri;
                public static COUNTRY_ISO: string;
                public static DATA_USAGE: string;
                public static DATE: string;
                public static DEFAULT_SORT_ORDER: string;
                public static DURATION: string;
                public static EXTRA_CALL_TYPE_FILTER: string;
                public static FEATURES: string;
                public static FEATURES_VIDEO: number;
                public static GEOCODED_LOCATION: string;
                public static INCOMING_TYPE: number;
                public static IS_READ: string;
                public static LIMIT_PARAM_KEY: string;
                public static MISSED_TYPE: number;
                public static NEW: string;
                public static NUMBER: string;
                public static NUMBER_PRESENTATION: string;
                public static OFFSET_PARAM_KEY: string;
                public static OUTGOING_TYPE: number;
                public static PHONE_ACCOUNT_COMPONENT_NAME: string;
                public static PHONE_ACCOUNT_ID: string;
                public static PRESENTATION_ALLOWED: number;
                public static PRESENTATION_PAYPHONE: number;
                public static PRESENTATION_RESTRICTED: number;
                public static PRESENTATION_UNKNOWN: number;
                public static TRANSCRIPTION: string;
                public static TYPE: string;
                public static VOICEMAIL_TYPE: number;
                public static VOICEMAIL_URI: string;

                public static getLastOutgoingCall(param0: android.content.Context): string;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module provider {
        export class Contacts extends javalangObject {
            public static AUTHORITY: string;
            public static CONTENT_URI: android.net.Uri;
            public static KIND_EMAIL: number;
            public static KIND_IM: number;
            public static KIND_ORGANIZATION: number;
            public static KIND_PHONE: number;
            public static KIND_POSTAL: number;
        }
        export module Contacts {
            export class ContactMethods extends javalangObject implements android.provider.BaseColumns, android.provider.Contacts.ContactMethodsColumns, android.provider.Contacts.PeopleColumns {
                public static CONTENT_EMAIL_ITEM_TYPE: string;
                public static CONTENT_EMAIL_TYPE: string;
                public static CONTENT_EMAIL_URI: android.net.Uri;
                public static CONTENT_IM_ITEM_TYPE: string;
                public static CONTENT_POSTAL_ITEM_TYPE: string;
                public static CONTENT_POSTAL_TYPE: string;
                public static CONTENT_TYPE: string;
                public static CONTENT_URI: android.net.Uri;
                public static DEFAULT_SORT_ORDER: string;
                public static PERSON_ID: string;
                public static POSTAL_LOCATION_LATITUDE: string;
                public static POSTAL_LOCATION_LONGITUDE: string;
                public static PROTOCOL_AIM: number;
                public static PROTOCOL_GOOGLE_TALK: number;
                public static PROTOCOL_ICQ: number;
                public static PROTOCOL_JABBER: number;
                public static PROTOCOL_MSN: number;
                public static PROTOCOL_QQ: number;
                public static PROTOCOL_SKYPE: number;
                public static PROTOCOL_YAHOO: number;

                public static decodeImProtocol(param0: string): javalangObject;

                public addPostalLocation(param0: android.content.Context, param1: number, param2: number, param3: number): void;

                public static encodeCustomImProtocol(param0: string): string;

                public static encodePredefinedImProtocol(param0: number): string;

                public static getDisplayLabel(param0: android.content.Context, param1: number, param2: number, param3: string): string;
            }
            export class ContactMethodsColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.Contacts$ContactMethodsColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static DATA: string;
                public static ISPRIMARY: string;
                public static KIND: string;
                public static AUX_DATA: string;
                public static TYPE_HOME: number;
                public static LABEL: string;
                public static TYPE: string;
                public static TYPE_OTHER: number;
                public static TYPE_WORK: number;
                public static TYPE_CUSTOM: number;
            }
            export class Extensions extends javalangObject implements android.provider.BaseColumns, android.provider.Contacts.ExtensionsColumns {
                public static CONTENT_ITEM_TYPE: string;
                public static CONTENT_TYPE: string;
                public static CONTENT_URI: android.net.Uri;
                public static DEFAULT_SORT_ORDER: string;
                public static PERSON_ID: string;
            }
            export class ExtensionsColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.Contacts$ExtensionsColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static VALUE: string;
                public static NAME: string;
            }
            export class GroupMembership extends javalangObject implements android.provider.BaseColumns, android.provider.Contacts.GroupsColumns {
                public static CONTENT_DIRECTORY: string;
                public static CONTENT_ITEM_TYPE: string;
                public static CONTENT_TYPE: string;
                public static CONTENT_URI: android.net.Uri;
                public static DEFAULT_SORT_ORDER: string;
                public static GROUP_ID: string;
                public static GROUP_SYNC_ACCOUNT: string;
                public static GROUP_SYNC_ACCOUNT_TYPE: string;
                public static GROUP_SYNC_ID: string;
                public static PERSON_ID: string;
                public static RAW_CONTENT_URI: android.net.Uri;
            }
            export class Groups extends javalangObject implements android.provider.BaseColumns, android.provider.Contacts.GroupsColumns {
                public static CONTENT_ITEM_TYPE: string;
                public static CONTENT_TYPE: string;
                public static CONTENT_URI: android.net.Uri;
                public static DEFAULT_SORT_ORDER: string;
                public static DELETED_CONTENT_URI: android.net.Uri;
                public static GROUP_ANDROID_STARRED: string;
                public static GROUP_MY_CONTACTS: string;
            }
            export class GroupsColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.Contacts$GroupsColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static NOTES: string;
                public static SHOULD_SYNC: string;
                public static NAME: string;
                public static SYSTEM_ID: string;
            }
            export class Intents extends javalangObject {
                public static ATTACH_IMAGE: string;
                public static EXTRA_CREATE_DESCRIPTION: string;
                public static EXTRA_FORCE_CREATE: string;
                public static SEARCH_SUGGESTION_CLICKED: string;
                public static SEARCH_SUGGESTION_CREATE_CONTACT_CLICKED: string;
                public static SEARCH_SUGGESTION_DIAL_NUMBER_CLICKED: string;
                public static SHOW_OR_CREATE_CONTACT: string;

                public constructor();
            }
            export module Intents {
                export class Insert extends javalangObject {
                    public static ACTION: string;
                    public static COMPANY: string;
                    public static EMAIL: string;
                    public static EMAIL_ISPRIMARY: string;
                    public static EMAIL_TYPE: string;
                    public static FULL_MODE: string;
                    public static IM_HANDLE: string;
                    public static IM_ISPRIMARY: string;
                    public static IM_PROTOCOL: string;
                    public static JOB_TITLE: string;
                    public static NAME: string;
                    public static NOTES: string;
                    public static PHONE: string;
                    public static PHONETIC_NAME: string;
                    public static PHONE_ISPRIMARY: string;
                    public static PHONE_TYPE: string;
                    public static POSTAL: string;
                    public static POSTAL_ISPRIMARY: string;
                    public static POSTAL_TYPE: string;
                    public static SECONDARY_EMAIL: string;
                    public static SECONDARY_EMAIL_TYPE: string;
                    public static SECONDARY_PHONE: string;
                    public static SECONDARY_PHONE_TYPE: string;
                    public static TERTIARY_EMAIL: string;
                    public static TERTIARY_EMAIL_TYPE: string;
                    public static TERTIARY_PHONE: string;
                    public static TERTIARY_PHONE_TYPE: string;

                    public constructor();
                }
                export class UI extends javalangObject {
                    public static FILTER_CONTACTS_ACTION: string;
                    public static FILTER_TEXT_EXTRA_KEY: string;
                    public static GROUP_NAME_EXTRA_KEY: string;
                    public static LIST_ALL_CONTACTS_ACTION: string;
                    public static LIST_CONTACTS_WITH_PHONES_ACTION: string;
                    public static LIST_DEFAULT: string;
                    public static LIST_FREQUENT_ACTION: string;
                    public static LIST_GROUP_ACTION: string;
                    public static LIST_STARRED_ACTION: string;
                    public static LIST_STREQUENT_ACTION: string;
                    public static TITLE_EXTRA_KEY: string;

                    public constructor();
                }
            }
            export class OrganizationColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.Contacts$OrganizationColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static ISPRIMARY: string;
                public static PERSON_ID: string;
                public static LABEL: string;
                public static TITLE: string;
                public static TYPE: string;
                public static COMPANY: string;
                public static TYPE_OTHER: number;
                public static TYPE_WORK: number;
                public static TYPE_CUSTOM: number;
            }
            export class Organizations extends javalangObject implements android.provider.BaseColumns, android.provider.Contacts.OrganizationColumns {
                public static CONTENT_DIRECTORY: string;
                public static CONTENT_URI: android.net.Uri;
                public static DEFAULT_SORT_ORDER: string;

                public static getDisplayLabel(param0: android.content.Context, param1: number, param2: string): string;
            }
            export class People extends javalangObject implements android.provider.BaseColumns, android.provider.Contacts.PeopleColumns, android.provider.Contacts.PhonesColumns, android.provider.Contacts.PresenceColumns {
                public static CONTENT_FILTER_URI: android.net.Uri;
                public static CONTENT_ITEM_TYPE: string;
                public static CONTENT_TYPE: string;
                public static CONTENT_URI: android.net.Uri;
                public static DEFAULT_SORT_ORDER: string;
                public static DELETED_CONTENT_URI: android.net.Uri;
                public static PRIMARY_EMAIL_ID: string;
                public static PRIMARY_ORGANIZATION_ID: string;
                public static PRIMARY_PHONE_ID: string;

                public static createPersonInMyContactsGroup(param0: android.content.ContentResolver, param1: android.content.ContentValues): android.net.Uri;

                public static loadContactPhoto(param0: android.content.Context, param1: android.net.Uri, param2: number, param3: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;

                public static addToGroup(param0: android.content.ContentResolver, param1: number, param2: number): android.net.Uri;

                public static setPhotoData(param0: android.content.ContentResolver, param1: android.net.Uri, param2: native.Array<number>): void;

                public static queryGroups(param0: android.content.ContentResolver, param1: number): android.database.Cursor;

                public static openContactPhotoInputStream(param0: android.content.ContentResolver, param1: android.net.Uri): javaioInputStream;

                public static markAsContacted(param0: android.content.ContentResolver, param1: number): void;

                public static addToGroup(param0: android.content.ContentResolver, param1: number, param2: string): android.net.Uri;

                public static addToMyContactsGroup(param0: android.content.ContentResolver, param1: number): android.net.Uri;
            }
            export module People {
                export class ContactMethods extends javalangObject implements android.provider.BaseColumns, android.provider.Contacts.ContactMethodsColumns, android.provider.Contacts.PeopleColumns {
                    public static CONTENT_DIRECTORY: string;
                    public static DEFAULT_SORT_ORDER: string;
                }
                export class Extensions extends javalangObject implements android.provider.BaseColumns, android.provider.Contacts.ExtensionsColumns {
                    public static CONTENT_DIRECTORY: string;
                    public static DEFAULT_SORT_ORDER: string;
                    public static PERSON_ID: string;
                }
                export class Phones extends javalangObject implements android.provider.BaseColumns, android.provider.Contacts.PhonesColumns, android.provider.Contacts.PeopleColumns {
                    public static CONTENT_DIRECTORY: string;
                    public static DEFAULT_SORT_ORDER: string;
                }
            }
            export class PeopleColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.Contacts$PeopleColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static NOTES: string;
                public static PHONETIC_NAME: string;
                public static TIMES_CONTACTED: string;
                public static SEND_TO_VOICEMAIL: string;
                public static CUSTOM_RINGTONE: string;
                public static STARRED: string;
                public static PHOTO_VERSION: string;
                public static LAST_TIME_CONTACTED: string;
                public static NAME: string;
                public static DISPLAY_NAME: string;
            }
            export class Phones extends javalangObject implements android.provider.BaseColumns, android.provider.Contacts.PhonesColumns, android.provider.Contacts.PeopleColumns {
                public static CONTENT_FILTER_URL: android.net.Uri;
                public static CONTENT_ITEM_TYPE: string;
                public static CONTENT_TYPE: string;
                public static CONTENT_URI: android.net.Uri;
                public static DEFAULT_SORT_ORDER: string;
                public static PERSON_ID: string;

                public static getDisplayLabel(param0: android.content.Context, param1: number, param2: string, param3: native.Array<javalangCharSequence>): string;
                public static getDisplayLabel(param0: android.content.Context, param1: number, param2: string): string;
            }
            export class PhonesColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.Contacts$PhonesColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static ISPRIMARY: string;
                public static NUMBER_KEY: string;
                public static TYPE_PAGER: number;
                public static TYPE_HOME: number;
                public static LABEL: string;
                public static TYPE: string;
                public static TYPE_OTHER: number;
                public static TYPE_WORK: number;
                public static TYPE_FAX_WORK: number;
                public static NUMBER: string;
                public static TYPE_FAX_HOME: number;
                public static TYPE_MOBILE: number;
                public static TYPE_CUSTOM: number;
            }
            export class Photos extends javalangObject implements android.provider.BaseColumns, android.provider.Contacts.PhotosColumns {
                public static CONTENT_DIRECTORY: string;
                public static CONTENT_URI: android.net.Uri;
                public static DEFAULT_SORT_ORDER: string;
            }
            export class PhotosColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.Contacts$PhotosColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static SYNC_ERROR: string;
                public static DATA: string;
                public static EXISTS_ON_SERVER: string;
                public static PERSON_ID: string;
                public static DOWNLOAD_REQUIRED: string;
                public static LOCAL_VERSION: string;
            }
            export class PresenceColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.Contacts$PresenceColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static IM_HANDLE: string;
                public static IM_PROTOCOL: string;
                public static PRESENCE_STATUS: string;
                public static DO_NOT_DISTURB: number;
                public static IM_ACCOUNT: string;
                public static OFFLINE: number;
                public static INVISIBLE: number;
                public static AVAILABLE: number;
                public static AWAY: number;
                public static PRESENCE_CUSTOM_STATUS: string;
                public static PRIORITY: string;
                public static IDLE: number;
            }
            export class Settings extends javalangObject implements android.provider.BaseColumns, android.provider.Contacts.SettingsColumns {
                public static CONTENT_DIRECTORY: string;
                public static CONTENT_URI: android.net.Uri;
                public static DEFAULT_SORT_ORDER: string;
                public static SYNC_EVERYTHING: string;

                public static setSetting(param0: android.content.ContentResolver, param1: string, param2: string, param3: string): void;

                public static getSetting(param0: android.content.ContentResolver, param1: string, param2: string): string;
            }
            export class SettingsColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.Contacts$SettingsColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static _SYNC_ACCOUNT_TYPE: string;
                public static VALUE: string;
                public static _SYNC_ACCOUNT: string;
                public static KEY: string;
            }
        }
    }
}

/// <reference path="./android.accounts.Account.d.ts" />
/// <reference path="./android.content.ContentProviderClient.d.ts" />
/// <reference path="./android.content.ContentProviderOperation.d.ts" />
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.EntityIterator.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.util.Pair.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module provider {
        export class ContactsContract extends javalangObject {
            public static AUTHORITY: string;
            public static AUTHORITY_URI: android.net.Uri;
            public static CALLER_IS_SYNCADAPTER: string;
            public static DEFERRED_SNIPPETING: string;
            public static DEFERRED_SNIPPETING_QUERY: string;
            public static DIRECTORY_PARAM_KEY: string;
            public static LIMIT_PARAM_KEY: string;
            public static PRIMARY_ACCOUNT_NAME: string;
            public static PRIMARY_ACCOUNT_TYPE: string;
            public static REMOVE_DUPLICATE_ENTRIES: string;
            public static STREQUENT_PHONE_ONLY: string;

            public static isProfileId(param0: number): boolean;

            public constructor();
        }
        export module ContactsContract {
            export class AggregationExceptions extends javalangObject implements android.provider.BaseColumns {
                public static CONTENT_ITEM_TYPE: string;
                public static CONTENT_TYPE: string;
                public static CONTENT_URI: android.net.Uri;
                public static RAW_CONTACT_ID1: string;
                public static RAW_CONTACT_ID2: string;
                public static TYPE: string;
                public static TYPE_AUTOMATIC: number;
                public static TYPE_KEEP_SEPARATE: number;
                public static TYPE_KEEP_TOGETHER: number;
            }
            export class BaseSyncColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.ContactsContract$BaseSyncColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static SYNC3: string;
                public static SYNC4: string;
                public static SYNC1: string;
                public static SYNC2: string;
            }
            export class CommonDataKinds extends javalangObject {
            }
            export module CommonDataKinds {
                export class BaseTypes extends javalangObject {
                    /**
                     * Constructs a new instance of the android.provider.ContactsContract$CommonDataKinds$BaseTypes interface with the provided implementation.
                     */
                    public constructor(implementation: {});

                    public static TYPE_CUSTOM: number;
                }
                export class Callable extends javalangObject implements android.provider.ContactsContract.DataColumnsWithJoins, android.provider.ContactsContract.CommonDataKinds.CommonColumns {
                    public static CONTENT_FILTER_URI: android.net.Uri;
                    public static CONTENT_URI: android.net.Uri;
                    public static EXTRA_ADDRESS_BOOK_INDEX: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;

                    public constructor();
                }
                export class CommonColumns extends javalangObject implements android.provider.ContactsContract.CommonDataKinds.BaseTypes {
                    /**
                     * Constructs a new instance of the android.provider.ContactsContract$CommonDataKinds$CommonColumns interface with the provided implementation.
                     */
                    public constructor(implementation: {});

                    public static DATA: string;
                    public static LABEL: string;
                    public static TYPE: string;
                    public static TYPE_CUSTOM: number;
                }
                export class Contactables extends javalangObject implements android.provider.ContactsContract.DataColumnsWithJoins, android.provider.ContactsContract.CommonDataKinds.CommonColumns {
                    public static CONTENT_FILTER_URI: android.net.Uri;
                    public static CONTENT_URI: android.net.Uri;
                    public static EXTRA_ADDRESS_BOOK_INDEX: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
                    public static VISIBLE_CONTACTS_ONLY: string;

                    public constructor();
                }
                export class Email extends javalangObject implements android.provider.ContactsContract.DataColumnsWithJoins, android.provider.ContactsContract.CommonDataKinds.CommonColumns {
                    public static ADDRESS: string;
                    public static CONTENT_FILTER_URI: android.net.Uri;
                    public static CONTENT_ITEM_TYPE: string;
                    public static CONTENT_LOOKUP_URI: android.net.Uri;
                    public static CONTENT_TYPE: string;
                    public static CONTENT_URI: android.net.Uri;
                    public static DISPLAY_NAME: string;
                    public static ENTERPRISE_CONTENT_LOOKUP_URI: android.net.Uri;
                    public static EXTRA_ADDRESS_BOOK_INDEX: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
                    public static TYPE_HOME: number;
                    public static TYPE_MOBILE: number;
                    public static TYPE_OTHER: number;
                    public static TYPE_WORK: number;

                    public static getTypeLabel(param0: android.content.res.Resources, param1: number, param2: string): string;

                    public static getTypeLabelResource(param0: number): number;
                }
                export class Event extends javalangObject implements android.provider.ContactsContract.DataColumnsWithJoins, android.provider.ContactsContract.CommonDataKinds.CommonColumns {
                    public static CONTENT_ITEM_TYPE: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
                    public static START_DATE: string;
                    public static TYPE_ANNIVERSARY: number;
                    public static TYPE_BIRTHDAY: number;
                    public static TYPE_OTHER: number;

                    public static getTypeResource(param0: javalangInteger): number;

                    public static getTypeLabel(param0: android.content.res.Resources, param1: number, param2: string): string;
                }
                export class GroupMembership extends javalangObject implements android.provider.ContactsContract.DataColumnsWithJoins {
                    public static CONTENT_ITEM_TYPE: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
                    public static GROUP_ROW_ID: string;
                    public static GROUP_SOURCE_ID: string;
                }
                export class Identity extends javalangObject implements android.provider.ContactsContract.DataColumnsWithJoins {
                    public static CONTENT_ITEM_TYPE: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
                    public static IDENTITY: string;
                    public static NAMESPACE: string;
                }
                export class Im extends javalangObject implements android.provider.ContactsContract.DataColumnsWithJoins, android.provider.ContactsContract.CommonDataKinds.CommonColumns {
                    public static CONTENT_ITEM_TYPE: string;
                    public static CUSTOM_PROTOCOL: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
                    public static PROTOCOL: string;
                    public static PROTOCOL_AIM: number;
                    public static PROTOCOL_CUSTOM: number;
                    public static PROTOCOL_GOOGLE_TALK: number;
                    public static PROTOCOL_ICQ: number;
                    public static PROTOCOL_JABBER: number;
                    public static PROTOCOL_MSN: number;
                    public static PROTOCOL_NETMEETING: number;
                    public static PROTOCOL_QQ: number;
                    public static PROTOCOL_SKYPE: number;
                    public static PROTOCOL_YAHOO: number;
                    public static TYPE_HOME: number;
                    public static TYPE_OTHER: number;
                    public static TYPE_WORK: number;

                    public static getProtocolLabelResource(param0: number): number;

                    public static getTypeLabel(param0: android.content.res.Resources, param1: number, param2: string): string;

                    public static getProtocolLabel(param0: android.content.res.Resources, param1: number, param2: string): string;

                    public static getTypeLabelResource(param0: number): number;
                }
                export class Nickname extends javalangObject implements android.provider.ContactsContract.DataColumnsWithJoins, android.provider.ContactsContract.CommonDataKinds.CommonColumns {
                    public static CONTENT_ITEM_TYPE: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
                    public static NAME: string;
                    public static TYPE_DEFAULT: number;
                    public static TYPE_INITIALS: number;
                    public static TYPE_MAIDEN_NAME: number;
                    public static TYPE_MAINDEN_NAME: number;
                    public static TYPE_OTHER_NAME: number;
                    public static TYPE_SHORT_NAME: number;
                }
                export class Note extends javalangObject implements android.provider.ContactsContract.DataColumnsWithJoins {
                    public static CONTENT_ITEM_TYPE: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
                    public static NOTE: string;
                }
                export class Organization extends javalangObject implements android.provider.ContactsContract.DataColumnsWithJoins, android.provider.ContactsContract.CommonDataKinds.CommonColumns {
                    public static COMPANY: string;
                    public static CONTENT_ITEM_TYPE: string;
                    public static DEPARTMENT: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
                    public static JOB_DESCRIPTION: string;
                    public static OFFICE_LOCATION: string;
                    public static PHONETIC_NAME: string;
                    public static SYMBOL: string;
                    public static TITLE: string;
                    public static TYPE_OTHER: number;
                    public static TYPE_WORK: number;

                    public static getTypeLabel(param0: android.content.res.Resources, param1: number, param2: string): string;

                    public static getTypeLabelResource(param0: number): number;
                }
                export class Phone extends javalangObject implements android.provider.ContactsContract.DataColumnsWithJoins, android.provider.ContactsContract.CommonDataKinds.CommonColumns {
                    public static CONTENT_FILTER_URI: android.net.Uri;
                    public static CONTENT_ITEM_TYPE: string;
                    public static CONTENT_TYPE: string;
                    public static CONTENT_URI: android.net.Uri;
                    public static EXTRA_ADDRESS_BOOK_INDEX: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
                    public static NORMALIZED_NUMBER: string;
                    public static NUMBER: string;
                    public static SEARCH_DISPLAY_NAME_KEY: string;
                    public static SEARCH_PHONE_NUMBER_KEY: string;
                    public static TYPE_ASSISTANT: number;
                    public static TYPE_CALLBACK: number;
                    public static TYPE_CAR: number;
                    public static TYPE_COMPANY_MAIN: number;
                    public static TYPE_FAX_HOME: number;
                    public static TYPE_FAX_WORK: number;
                    public static TYPE_HOME: number;
                    public static TYPE_ISDN: number;
                    public static TYPE_MAIN: number;
                    public static TYPE_MMS: number;
                    public static TYPE_MOBILE: number;
                    public static TYPE_OTHER: number;
                    public static TYPE_OTHER_FAX: number;
                    public static TYPE_PAGER: number;
                    public static TYPE_RADIO: number;
                    public static TYPE_TELEX: number;
                    public static TYPE_TTY_TDD: number;
                    public static TYPE_WORK: number;
                    public static TYPE_WORK_MOBILE: number;
                    public static TYPE_WORK_PAGER: number;

                    public static getTypeLabel(param0: android.content.res.Resources, param1: number, param2: string): string;

                    public static getTypeLabelResource(param0: number): number;
                }
                export class Photo extends javalangObject implements android.provider.ContactsContract.DataColumnsWithJoins {
                    public static CONTENT_ITEM_TYPE: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
                    public static PHOTO: string;
                    public static PHOTO_FILE_ID: string;
                }
                export class Relation extends javalangObject implements android.provider.ContactsContract.DataColumnsWithJoins, android.provider.ContactsContract.CommonDataKinds.CommonColumns {
                    public static CONTENT_ITEM_TYPE: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
                    public static NAME: string;
                    public static TYPE_ASSISTANT: number;
                    public static TYPE_BROTHER: number;
                    public static TYPE_CHILD: number;
                    public static TYPE_DOMESTIC_PARTNER: number;
                    public static TYPE_FATHER: number;
                    public static TYPE_FRIEND: number;
                    public static TYPE_MANAGER: number;
                    public static TYPE_MOTHER: number;
                    public static TYPE_PARENT: number;
                    public static TYPE_PARTNER: number;
                    public static TYPE_REFERRED_BY: number;
                    public static TYPE_RELATIVE: number;
                    public static TYPE_SISTER: number;
                    public static TYPE_SPOUSE: number;

                    public static getTypeLabel(param0: android.content.res.Resources, param1: number, param2: string): string;

                    public static getTypeLabelResource(param0: number): number;
                }
                export class SipAddress extends javalangObject implements android.provider.ContactsContract.DataColumnsWithJoins, android.provider.ContactsContract.CommonDataKinds.CommonColumns {
                    public static CONTENT_ITEM_TYPE: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
                    public static SIP_ADDRESS: string;
                    public static TYPE_HOME: number;
                    public static TYPE_OTHER: number;
                    public static TYPE_WORK: number;

                    public static getTypeLabel(param0: android.content.res.Resources, param1: number, param2: string): string;

                    public static getTypeLabelResource(param0: number): number;
                }
                export class StructuredName extends javalangObject implements android.provider.ContactsContract.DataColumnsWithJoins {
                    public static CONTENT_ITEM_TYPE: string;
                    public static DISPLAY_NAME: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
                    public static FAMILY_NAME: string;
                    public static FULL_NAME_STYLE: string;
                    public static GIVEN_NAME: string;
                    public static MIDDLE_NAME: string;
                    public static PHONETIC_FAMILY_NAME: string;
                    public static PHONETIC_GIVEN_NAME: string;
                    public static PHONETIC_MIDDLE_NAME: string;
                    public static PREFIX: string;
                    public static SUFFIX: string;
                }
                export class StructuredPostal extends javalangObject implements android.provider.ContactsContract.DataColumnsWithJoins, android.provider.ContactsContract.CommonDataKinds.CommonColumns {
                    public static CITY: string;
                    public static CONTENT_ITEM_TYPE: string;
                    public static CONTENT_TYPE: string;
                    public static CONTENT_URI: android.net.Uri;
                    public static COUNTRY: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
                    public static FORMATTED_ADDRESS: string;
                    public static NEIGHBORHOOD: string;
                    public static POBOX: string;
                    public static POSTCODE: string;
                    public static REGION: string;
                    public static STREET: string;
                    public static TYPE_HOME: number;
                    public static TYPE_OTHER: number;
                    public static TYPE_WORK: number;

                    public static getTypeLabel(param0: android.content.res.Resources, param1: number, param2: string): string;

                    public static getTypeLabelResource(param0: number): number;
                }
                export class Website extends javalangObject implements android.provider.ContactsContract.DataColumnsWithJoins, android.provider.ContactsContract.CommonDataKinds.CommonColumns {
                    public static CONTENT_ITEM_TYPE: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
                    public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
                    public static TYPE_BLOG: number;
                    public static TYPE_FTP: number;
                    public static TYPE_HOME: number;
                    public static TYPE_HOMEPAGE: number;
                    public static TYPE_OTHER: number;
                    public static TYPE_PROFILE: number;
                    public static TYPE_WORK: number;
                    public static URL: string;
                }
            }
            export class ContactNameColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.ContactsContract$ContactNameColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static PHONETIC_NAME: string;
                public static SORT_KEY_PRIMARY: string;
                public static PHONETIC_NAME_STYLE: string;
                public static SORT_KEY_ALTERNATIVE: string;
                public static DISPLAY_NAME_SOURCE: string;
                public static DISPLAY_NAME_ALTERNATIVE: string;
                public static DISPLAY_NAME_PRIMARY: string;
            }
            export class ContactOptionsColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.ContactsContract$ContactOptionsColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static TIMES_CONTACTED: string;
                public static PINNED: string;
                public static SEND_TO_VOICEMAIL: string;
                public static CUSTOM_RINGTONE: string;
                public static STARRED: string;
                public static LAST_TIME_CONTACTED: string;
            }
            export class ContactStatusColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.ContactsContract$ContactStatusColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static CONTACT_STATUS_TIMESTAMP: string;
                public static CONTACT_CHAT_CAPABILITY: string;
                public static CONTACT_STATUS: string;
                public static CONTACT_STATUS_RES_PACKAGE: string;
                public static CONTACT_STATUS_LABEL: string;
                public static CONTACT_PRESENCE: string;
                public static CONTACT_STATUS_ICON: string;
            }
            export class Contacts extends javalangObject implements android.provider.BaseColumns, android.provider.ContactsContract.ContactsColumns, android.provider.ContactsContract.ContactOptionsColumns, android.provider.ContactsContract.ContactNameColumns, android.provider.ContactsContract.ContactStatusColumns {
                public static CONTENT_FILTER_URI: android.net.Uri;
                public static CONTENT_FREQUENT_URI: android.net.Uri;
                public static CONTENT_GROUP_URI: android.net.Uri;
                public static CONTENT_ITEM_TYPE: string;
                public static CONTENT_LOOKUP_URI: android.net.Uri;
                public static CONTENT_MULTI_VCARD_URI: android.net.Uri;
                public static CONTENT_STREQUENT_FILTER_URI: android.net.Uri;
                public static CONTENT_STREQUENT_URI: android.net.Uri;
                public static CONTENT_TYPE: string;
                public static CONTENT_URI: android.net.Uri;
                public static CONTENT_VCARD_TYPE: string;
                public static CONTENT_VCARD_URI: android.net.Uri;
                public static EXTRA_ADDRESS_BOOK_INDEX: string;
                public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
                public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
                public static QUERY_PARAMETER_VCARD_NO_PHOTO: string;

                public static getLookupUri(param0: android.content.ContentResolver, param1: android.net.Uri): android.net.Uri;

                public static openContactPhotoInputStream(param0: android.content.ContentResolver, param1: android.net.Uri, param2: boolean): javaioInputStream;

                public static getLookupUri(param0: number, param1: string): android.net.Uri;

                public static openContactPhotoInputStream(param0: android.content.ContentResolver, param1: android.net.Uri): javaioInputStream;

                public static lookupContact(param0: android.content.ContentResolver, param1: android.net.Uri): android.net.Uri;

                public static markAsContacted(param0: android.content.ContentResolver, param1: number): void;

                public static isEnterpriseContactId(param0: number): boolean;
            }
            export module Contacts {
                export class AggregationSuggestions extends javalangObject implements android.provider.BaseColumns, android.provider.ContactsContract.ContactsColumns, android.provider.ContactsContract.ContactOptionsColumns, android.provider.ContactsContract.ContactStatusColumns {
                    public static CONTENT_DIRECTORY: string;
                }
                export module AggregationSuggestions {
                    export class Builder extends javalangObject {
                        public addNameParameter(param0: string): android.provider.ContactsContract.Contacts.AggregationSuggestions.Builder;

                        public constructor();

                        public setLimit(param0: number): android.provider.ContactsContract.Contacts.AggregationSuggestions.Builder;

                        public build(): android.net.Uri;

                        public setContactId(param0: number): android.provider.ContactsContract.Contacts.AggregationSuggestions.Builder;
                    }
                }
                export class Data extends javalangObject implements android.provider.BaseColumns, android.provider.ContactsContract.DataColumns {
                    public static CONTENT_DIRECTORY: string;
                }
                export class Entity extends javalangObject implements android.provider.BaseColumns, android.provider.ContactsContract.ContactsColumns, android.provider.ContactsContract.ContactNameColumns, android.provider.ContactsContract.RawContactsColumns, android.provider.ContactsContract.BaseSyncColumns, android.provider.ContactsContract.SyncColumns, android.provider.ContactsContract.DataColumns, android.provider.ContactsContract.StatusColumns, android.provider.ContactsContract.ContactOptionsColumns, android.provider.ContactsContract.ContactStatusColumns, android.provider.ContactsContract.DataUsageStatColumns {
                    public static CONTENT_DIRECTORY: string;
                    public static DATA_ID: string;
                    public static RAW_CONTACT_ID: string;
                }
                export class Photo extends javalangObject implements android.provider.BaseColumns, android.provider.ContactsContract.DataColumnsWithJoins {
                    public static CONTENT_DIRECTORY: string;
                    public static DISPLAY_PHOTO: string;
                    public static PHOTO: string;
                    public static PHOTO_FILE_ID: string;
                }
            }
            export class ContactsColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.ContactsContract$ContactsColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static IS_USER_PROFILE: string;
                public static LOOKUP_KEY: string;
                public static IN_VISIBLE_GROUP: string;
                public static NAME_RAW_CONTACT_ID: string;
                public static PHOTO_THUMBNAIL_URI: string;
                public static HAS_PHONE_NUMBER: string;
                public static IN_DEFAULT_DIRECTORY: string;
                public static PHOTO_FILE_ID: string;
                public static CONTACT_LAST_UPDATED_TIMESTAMP: string;
                public static PHOTO_ID: string;
                public static PHOTO_URI: string;
                public static DISPLAY_NAME: string;
            }
            export class Data extends javalangObject implements android.provider.ContactsContract.DataColumnsWithJoins {
                public static CONTENT_TYPE: string;
                public static CONTENT_URI: android.net.Uri;
                public static EXTRA_ADDRESS_BOOK_INDEX: string;
                public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
                public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
                public static VISIBLE_CONTACTS_ONLY: string;

                public static getContactLookupUri(param0: android.content.ContentResolver, param1: android.net.Uri): android.net.Uri;
            }
            export class DataColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.ContactsContract$DataColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static IS_PRIMARY: string;
                public static CARRIER_PRESENCE: string;
                public static DATA_VERSION: string;
                public static IS_READ_ONLY: string;
                public static IS_SUPER_PRIMARY: string;
                public static DATA6: string;
                public static DATA7: string;
                public static DATA8: string;
                public static DATA9: string;
                public static DATA2: string;
                public static DATA3: string;
                public static MIMETYPE: string;
                public static DATA4: string;
                public static DATA5: string;
                public static DATA1: string;
                public static RES_PACKAGE: string;
                public static CARRIER_PRESENCE_VT_CAPABLE: number;
                public static RAW_CONTACT_ID: string;
                public static SYNC3: string;
                public static SYNC4: string;
                public static DATA14: string;
                public static DATA13: string;
                public static DATA15: string;
                public static DATA10: string;
                public static SYNC1: string;
                public static SYNC2: string;
                public static DATA12: string;
                public static DATA11: string;
            }
            export class DataColumnsWithJoins extends javalangObject implements android.provider.BaseColumns, android.provider.ContactsContract.DataColumns, android.provider.ContactsContract.StatusColumns, android.provider.ContactsContract.RawContactsColumns, android.provider.ContactsContract.ContactsColumns, android.provider.ContactsContract.ContactNameColumns, android.provider.ContactsContract.ContactOptionsColumns, android.provider.ContactsContract.ContactStatusColumns, android.provider.ContactsContract.DataUsageStatColumns {
                /**
                 * Constructs a new instance of the android.provider.ContactsContract$DataColumnsWithJoins interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static CHAT_CAPABILITY: string;
                public static STATUS_TIMESTAMP: string;
                public static PHONETIC_NAME_STYLE: string;
                public static _ID: string;
                public static CAPABILITY_HAS_CAMERA: number;
                public static PRESENCE_CUSTOM_STATUS: string;
                public static PHOTO_URI: string;
                public static CONTACT_STATUS_ICON: string;
                public static IN_VISIBLE_GROUP: string;
                public static IN_DEFAULT_DIRECTORY: string;
                public static CARRIER_PRESENCE: string;
                public static DATA_VERSION: string;
                public static SORT_KEY_ALTERNATIVE: string;
                public static DISPLAY_NAME_SOURCE: string;
                public static CONTACT_STATUS_LABEL: string;
                public static CONTACT_PRESENCE: string;
                public static DISPLAY_NAME_ALTERNATIVE: string;
                public static DISPLAY_NAME: string;
                public static DISPLAY_NAME_PRIMARY: string;
                public static DATA6: string;
                public static DATA7: string;
                public static DATA8: string;
                public static NAME_RAW_CONTACT_ID: string;
                public static DATA9: string;
                public static STATUS: string;
                public static CONTACT_CHAT_CAPABILITY: string;
                public static DATA2: string;
                public static DATA3: string;
                public static DATA4: string;
                public static SEND_TO_VOICEMAIL: string;
                public static DATA5: string;
                public static DATA1: string;
                public static RES_PACKAGE: string;
                public static RAW_CONTACT_ID: string;
                public static _COUNT: string;
                public static LOOKUP_KEY: string;
                public static PHONETIC_NAME: string;
                public static STATUS_RES_PACKAGE: string;
                public static AGGREGATION_MODE: string;
                public static DATA14: string;
                public static PHOTO_FILE_ID: string;
                public static DATA13: string;
                public static AVAILABLE: number;
                public static AWAY: number;
                public static DATA15: string;
                public static DATA10: string;
                public static LAST_TIME_USED: string;
                public static CAPABILITY_HAS_VOICE: number;
                public static DATA12: string;
                public static DATA11: string;
                public static IDLE: number;
                public static DATA_SET: string;
                public static PINNED: string;
                public static IS_PRIMARY: string;
                public static DO_NOT_DISTURB: number;
                public static PRESENCE: string;
                public static CONTACT_STATUS: string;
                public static CONTACT_ID: string;
                public static LAST_TIME_CONTACTED: string;
                public static SORT_KEY_PRIMARY: string;
                public static CUSTOM_RINGTONE: string;
                public static STARRED: string;
                public static IS_READ_ONLY: string;
                public static ACCOUNT_TYPE_AND_DATA_SET: string;
                public static IS_SUPER_PRIMARY: string;
                public static IS_USER_PROFILE: string;
                public static CONTACT_STATUS_TIMESTAMP: string;
                public static HAS_PHONE_NUMBER: string;
                public static MIMETYPE: string;
                public static STATUS_ICON: string;
                public static STATUS_LABEL: string;
                public static RAW_CONTACT_IS_USER_PROFILE: string;
                public static CAPABILITY_HAS_VIDEO: number;
                public static PHOTO_ID: string;
                public static CARRIER_PRESENCE_VT_CAPABLE: number;
                public static TIMES_USED: string;
                public static SYNC3: string;
                public static PHOTO_THUMBNAIL_URI: string;
                public static TIMES_CONTACTED: string;
                public static SYNC4: string;
                public static PRESENCE_STATUS: string;
                public static RAW_CONTACT_IS_READ_ONLY: string;
                public static OFFLINE: number;
                public static INVISIBLE: number;
                public static CONTACT_LAST_UPDATED_TIMESTAMP: string;
                public static CONTACT_STATUS_RES_PACKAGE: string;
                public static SYNC1: string;
                public static SYNC2: string;
                public static DELETED: string;
            }
            export class DataUsageFeedback extends javalangObject {
                public static DELETE_USAGE_URI: android.net.Uri;
                public static FEEDBACK_URI: android.net.Uri;
                public static USAGE_TYPE: string;
                public static USAGE_TYPE_CALL: string;
                public static USAGE_TYPE_LONG_TEXT: string;
                public static USAGE_TYPE_SHORT_TEXT: string;

                public constructor();
            }
            export class DataUsageStatColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.ContactsContract$DataUsageStatColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static LAST_TIME_USED: string;
                public static TIMES_USED: string;
            }
            export class DeletedContacts extends javalangObject implements android.provider.ContactsContract.DeletedContactsColumns {
                public static CONTENT_URI: android.net.Uri;
                public static DAYS_KEPT_MILLISECONDS: number;
            }
            export class DeletedContactsColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.ContactsContract$DeletedContactsColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static CONTACT_DELETED_TIMESTAMP: string;
                public static CONTACT_ID: string;
            }
            export class Directory extends javalangObject implements android.provider.BaseColumns {
                public static ACCOUNT_NAME: string;
                public static ACCOUNT_TYPE: string;
                public static CONTENT_ITEM_TYPE: string;
                public static CONTENT_TYPE: string;
                public static CONTENT_URI: android.net.Uri;
                public static DEFAULT: number;
                public static DIRECTORY_AUTHORITY: string;
                public static DISPLAY_NAME: string;
                public static EXPORT_SUPPORT: string;
                public static EXPORT_SUPPORT_ANY_ACCOUNT: number;
                public static EXPORT_SUPPORT_NONE: number;
                public static EXPORT_SUPPORT_SAME_ACCOUNT_ONLY: number;
                public static LOCAL_INVISIBLE: number;
                public static PACKAGE_NAME: string;
                public static PHOTO_SUPPORT: string;
                public static PHOTO_SUPPORT_FULL: number;
                public static PHOTO_SUPPORT_FULL_SIZE_ONLY: number;
                public static PHOTO_SUPPORT_NONE: number;
                public static PHOTO_SUPPORT_THUMBNAIL_ONLY: number;
                public static SHORTCUT_SUPPORT: string;
                public static SHORTCUT_SUPPORT_DATA_ITEMS_ONLY: number;
                public static SHORTCUT_SUPPORT_FULL: number;
                public static SHORTCUT_SUPPORT_NONE: number;
                public static TYPE_RESOURCE_ID: string;

                public static notifyDirectoryChange(param0: android.content.ContentResolver): void;
            }
            export class DisplayNameSources extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.ContactsContract$DisplayNameSources interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static STRUCTURED_PHONETIC_NAME: number;
                public static STRUCTURED_NAME: number;
                public static EMAIL: number;
                public static ORGANIZATION: number;
                public static NICKNAME: number;
                public static PHONE: number;
                public static UNDEFINED: number;
            }
            export class DisplayPhoto extends javalangObject {
                public static CONTENT_MAX_DIMENSIONS_URI: android.net.Uri;
                public static CONTENT_URI: android.net.Uri;
                public static DISPLAY_MAX_DIM: string;
                public static THUMBNAIL_MAX_DIM: string;
            }
            export class FullNameStyle extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.ContactsContract$FullNameStyle interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static JAPANESE: number;
                public static CHINESE: number;
                public static KOREAN: number;
                public static CJK: number;
                public static UNDEFINED: number;
                public static WESTERN: number;
            }
            export class Groups extends javalangObject implements android.provider.BaseColumns, android.provider.ContactsContract.GroupsColumns, android.provider.ContactsContract.SyncColumns {
                public static CONTENT_ITEM_TYPE: string;
                public static CONTENT_SUMMARY_URI: android.net.Uri;
                public static CONTENT_TYPE: string;
                public static CONTENT_URI: android.net.Uri;

                public static newEntityIterator(param0: android.database.Cursor): android.content.EntityIterator;
            }
            export class GroupsColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.ContactsContract$GroupsColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static DATA_SET: string;
                public static GROUP_VISIBLE: string;
                public static NOTES: string;
                public static SHOULD_SYNC: string;
                public static GROUP_IS_READ_ONLY: string;
                public static FAVORITES: string;
                public static RES_PACKAGE: string;
                public static TITLE: string;
                public static SUMMARY_COUNT: string;
                public static SUMMARY_WITH_PHONES: string;
                public static TITLE_RES: string;
                public static AUTO_ADD: string;
                public static DELETED: string;
                public static SYSTEM_ID: string;
            }
            export class Intents extends javalangObject {
                public static ATTACH_IMAGE: string;
                public static CONTACTS_DATABASE_CREATED: string;
                public static EXTRA_CREATE_DESCRIPTION: string;
                public static EXTRA_FORCE_CREATE: string;
                public static INVITE_CONTACT: string;
                public static SEARCH_SUGGESTION_CLICKED: string;
                public static SEARCH_SUGGESTION_CREATE_CONTACT_CLICKED: string;
                public static SEARCH_SUGGESTION_DIAL_NUMBER_CLICKED: string;
                public static SHOW_OR_CREATE_CONTACT: string;

                public constructor();
            }
            export module Intents {
                export class Insert extends javalangObject {
                    public static ACTION: string;
                    public static COMPANY: string;
                    public static DATA: string;
                    public static EMAIL: string;
                    public static EMAIL_ISPRIMARY: string;
                    public static EMAIL_TYPE: string;
                    public static EXTRA_ACCOUNT: string;
                    public static EXTRA_DATA_SET: string;
                    public static FULL_MODE: string;
                    public static IM_HANDLE: string;
                    public static IM_ISPRIMARY: string;
                    public static IM_PROTOCOL: string;
                    public static JOB_TITLE: string;
                    public static NAME: string;
                    public static NOTES: string;
                    public static PHONE: string;
                    public static PHONETIC_NAME: string;
                    public static PHONE_ISPRIMARY: string;
                    public static PHONE_TYPE: string;
                    public static POSTAL: string;
                    public static POSTAL_ISPRIMARY: string;
                    public static POSTAL_TYPE: string;
                    public static SECONDARY_EMAIL: string;
                    public static SECONDARY_EMAIL_TYPE: string;
                    public static SECONDARY_PHONE: string;
                    public static SECONDARY_PHONE_TYPE: string;
                    public static TERTIARY_EMAIL: string;
                    public static TERTIARY_EMAIL_TYPE: string;
                    public static TERTIARY_PHONE: string;
                    public static TERTIARY_PHONE_TYPE: string;

                    public constructor();
                }
            }
            export class PhoneLookup extends javalangObject implements android.provider.BaseColumns, android.provider.ContactsContract.PhoneLookupColumns, android.provider.ContactsContract.ContactsColumns, android.provider.ContactsContract.ContactOptionsColumns {
                public static CONTENT_FILTER_URI: android.net.Uri;
                public static ENTERPRISE_CONTENT_FILTER_URI: android.net.Uri;
                public static QUERY_PARAMETER_SIP_ADDRESS: string;
            }
            export class PhoneLookupColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.ContactsContract$PhoneLookupColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static NUMBER: string;
                public static LABEL: string;
                public static NORMALIZED_NUMBER: string;
                public static TYPE: string;
            }
            export class PhoneticNameStyle extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.ContactsContract$PhoneticNameStyle interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static JAPANESE: number;
                public static KOREAN: number;
                public static PINYIN: number;
                public static UNDEFINED: number;
            }
            export class PinnedPositions extends javalangObject {
                public static DEMOTED: number;
                public static UNPINNED: number;

                public static undemote(param0: android.content.ContentResolver, param1: number): void;

                public static pin(param0: android.content.ContentResolver, param1: number, param2: number): void;

                public constructor();
            }
            export class Presence extends android.provider.ContactsContract.StatusUpdates {
                public constructor();
            }
            export class PresenceColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.ContactsContract$PresenceColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static DATA_ID: string;
                public static IM_HANDLE: string;
                public static CUSTOM_PROTOCOL: string;
                public static IM_ACCOUNT: string;
                public static PROTOCOL: string;
            }
            export class Profile extends javalangObject implements android.provider.BaseColumns, android.provider.ContactsContract.ContactsColumns, android.provider.ContactsContract.ContactOptionsColumns, android.provider.ContactsContract.ContactNameColumns, android.provider.ContactsContract.ContactStatusColumns {
                public static CONTENT_RAW_CONTACTS_URI: android.net.Uri;
                public static CONTENT_URI: android.net.Uri;
                public static CONTENT_VCARD_URI: android.net.Uri;
                public static MIN_ID: number;
            }
            export class ProfileSyncState extends javalangObject implements android.provider.SyncStateContract.Columns {
                public static CONTENT_DIRECTORY: string;
                public static CONTENT_URI: android.net.Uri;

                public static newSetOperation(param0: android.accounts.Account, param1: native.Array<number>): android.content.ContentProviderOperation;

                public static set(param0: android.content.ContentProviderClient, param1: android.accounts.Account, param2: native.Array<number>): void;

                public static getWithUri(param0: android.content.ContentProviderClient, param1: android.accounts.Account): android.util.Pair;

                public static get(param0: android.content.ContentProviderClient, param1: android.accounts.Account): native.Array<number>;
            }
            export class ProviderStatus extends javalangObject {
                public static CONTENT_TYPE: string;
                public static CONTENT_URI: android.net.Uri;
                public static STATUS: string;
                public static STATUS_BUSY: number;
                public static STATUS_EMPTY: number;
                public static STATUS_NORMAL: number;
            }
            export class QuickContact extends javalangObject {
                public static ACTION_QUICK_CONTACT: string;
                public static EXTRA_EXCLUDE_MIMES: string;
                public static EXTRA_MODE: string;
                public static EXTRA_PRIORITIZED_MIMETYPE: string;
                public static MODE_LARGE: number;
                public static MODE_MEDIUM: number;
                public static MODE_SMALL: number;

                public static showQuickContact(param0: android.content.Context, param1: android.view.View, param2: android.net.Uri, param3: number, param4: native.Array<string>): void;
                public static showQuickContact(param0: android.content.Context, param1: android.graphics.Rect, param2: android.net.Uri, param3: native.Array<string>, param4: string): void;
                public static showQuickContact(param0: android.content.Context, param1: android.graphics.Rect, param2: android.net.Uri, param3: number, param4: native.Array<string>): void;
                public static showQuickContact(param0: android.content.Context, param1: android.view.View, param2: android.net.Uri, param3: native.Array<string>, param4: string): void;

                public constructor();
            }
            export class RawContacts extends javalangObject implements android.provider.BaseColumns, android.provider.ContactsContract.RawContactsColumns, android.provider.ContactsContract.ContactOptionsColumns, android.provider.ContactsContract.ContactNameColumns, android.provider.ContactsContract.SyncColumns {
                public static AGGREGATION_MODE_DEFAULT: number;
                public static AGGREGATION_MODE_DISABLED: number;
                public static AGGREGATION_MODE_IMMEDIATE: number;
                public static AGGREGATION_MODE_SUSPENDED: number;
                public static CONTENT_ITEM_TYPE: string;
                public static CONTENT_TYPE: string;
                public static CONTENT_URI: android.net.Uri;

                public static getContactLookupUri(param0: android.content.ContentResolver, param1: android.net.Uri): android.net.Uri;

                public static newEntityIterator(param0: android.database.Cursor): android.content.EntityIterator;
            }
            export module RawContacts {
                export class Data extends javalangObject implements android.provider.BaseColumns, android.provider.ContactsContract.DataColumns {
                    public static CONTENT_DIRECTORY: string;
                }
                export class DisplayPhoto extends javalangObject {
                    public static CONTENT_DIRECTORY: string;
                }
                export class Entity extends javalangObject implements android.provider.BaseColumns, android.provider.ContactsContract.DataColumns {
                    public static CONTENT_DIRECTORY: string;
                    public static DATA_ID: string;
                }
            }
            export class RawContactsColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.ContactsContract$RawContactsColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static DATA_SET: string;
                public static AGGREGATION_MODE: string;
                public static RAW_CONTACT_IS_READ_ONLY: string;
                public static RAW_CONTACT_IS_USER_PROFILE: string;
                public static CONTACT_ID: string;
                public static DELETED: string;
                public static ACCOUNT_TYPE_AND_DATA_SET: string;
            }
            export class RawContactsEntity extends javalangObject implements android.provider.BaseColumns, android.provider.ContactsContract.DataColumns, android.provider.ContactsContract.RawContactsColumns {
                public static CONTENT_TYPE: string;
                public static CONTENT_URI: android.net.Uri;
                public static DATA_ID: string;
                public static PROFILE_CONTENT_URI: android.net.Uri;
            }
            export class SearchSnippets extends javalangObject {
                public static DEFERRED_SNIPPETING_KEY: string;
                public static SNIPPET: string;

                public constructor();
            }
            export class Settings extends javalangObject implements android.provider.ContactsContract.SettingsColumns {
                public static CONTENT_ITEM_TYPE: string;
                public static CONTENT_TYPE: string;
                public static CONTENT_URI: android.net.Uri;
            }
            export class SettingsColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.ContactsContract$SettingsColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static ACCOUNT_NAME: string;
                public static DATA_SET: string;
                public static ACCOUNT_TYPE: string;
                public static SHOULD_SYNC: string;
                public static UNGROUPED_WITH_PHONES: string;
                public static ANY_UNSYNCED: string;
                public static UNGROUPED_COUNT: string;
                public static UNGROUPED_VISIBLE: string;
            }
            export class StatusColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.ContactsContract$StatusColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static CHAT_CAPABILITY: string;
                public static STATUS: string;
                public static STATUS_TIMESTAMP: string;
                public static DO_NOT_DISTURB: number;
                public static STATUS_ICON: string;
                public static STATUS_LABEL: string;
                public static PRESENCE: string;
                public static CAPABILITY_HAS_VIDEO: number;
                public static CAPABILITY_HAS_CAMERA: number;
                public static PRESENCE_CUSTOM_STATUS: string;
                public static STATUS_RES_PACKAGE: string;
                public static PRESENCE_STATUS: string;
                public static OFFLINE: number;
                public static INVISIBLE: number;
                public static AVAILABLE: number;
                public static AWAY: number;
                public static CAPABILITY_HAS_VOICE: number;
                public static IDLE: number;
            }
            export class StatusUpdates extends javalangObject implements android.provider.ContactsContract.StatusColumns, android.provider.ContactsContract.PresenceColumns {
                public static CONTENT_ITEM_TYPE: string;
                public static CONTENT_TYPE: string;
                public static CONTENT_URI: android.net.Uri;
                public static PROFILE_CONTENT_URI: android.net.Uri;

                public static getPresenceIconResourceId(param0: number): number;

                public static getPresencePrecedence(param0: number): number;
            }
            export class SyncColumns extends javalangObject implements android.provider.ContactsContract.BaseSyncColumns {
                /**
                 * Constructs a new instance of the android.provider.ContactsContract$SyncColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static ACCOUNT_NAME: string;
                public static ACCOUNT_TYPE: string;
                public static SOURCE_ID: string;
                public static SYNC3: string;
                public static DIRTY: string;
                public static SYNC4: string;
                public static VERSION: string;
                public static SYNC1: string;
                public static SYNC2: string;
            }
            export class SyncState extends javalangObject implements android.provider.SyncStateContract.Columns {
                public static CONTENT_DIRECTORY: string;
                public static CONTENT_URI: android.net.Uri;

                public static newSetOperation(param0: android.accounts.Account, param1: native.Array<number>): android.content.ContentProviderOperation;

                public static set(param0: android.content.ContentProviderClient, param1: android.accounts.Account, param2: native.Array<number>): void;

                public static getWithUri(param0: android.content.ContentProviderClient, param1: android.accounts.Account): android.util.Pair;

                public static get(param0: android.content.ContentProviderClient, param1: android.accounts.Account): native.Array<number>;
            }
        }
    }
}

/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.CancellationSignal.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module provider {
        export class DocumentsContract extends javalangObject {
            public static EXTRA_ERROR: string;
            public static EXTRA_EXCLUDE_SELF: string;
            public static EXTRA_INFO: string;
            public static EXTRA_LOADING: string;
            public static EXTRA_PROMPT: string;
            public static PROVIDER_INTERFACE: string;

            public static deleteDocument(param0: android.content.ContentResolver, param1: android.net.Uri): boolean;

            public static buildDocumentUriUsingTree(param0: android.net.Uri, param1: string): android.net.Uri;

            public static buildSearchDocumentsUri(param0: string, param1: string, param2: string): android.net.Uri;

            public static isDocumentUri(param0: android.content.Context, param1: android.net.Uri): boolean;

            public static buildChildDocumentsUriUsingTree(param0: android.net.Uri, param1: string): android.net.Uri;

            public static getRootId(param0: android.net.Uri): string;

            public static createDocument(param0: android.content.ContentResolver, param1: android.net.Uri, param2: string, param3: string): android.net.Uri;

            public static buildRootUri(param0: string, param1: string): android.net.Uri;

            public static buildChildDocumentsUri(param0: string, param1: string): android.net.Uri;

            public static getDocumentThumbnail(param0: android.content.ContentResolver, param1: android.net.Uri, param2: android.graphics.Point, param3: android.os.CancellationSignal): android.graphics.Bitmap;

            public static buildTreeDocumentUri(param0: string, param1: string): android.net.Uri;

            public static getTreeDocumentId(param0: android.net.Uri): string;

            public static buildRootsUri(param0: string): android.net.Uri;

            public static getDocumentId(param0: android.net.Uri): string;

            public static buildDocumentUri(param0: string, param1: string): android.net.Uri;

            public static getSearchDocumentsQuery(param0: android.net.Uri): string;

            public static renameDocument(param0: android.content.ContentResolver, param1: android.net.Uri, param2: string): android.net.Uri;

            public static buildRecentDocumentsUri(param0: string, param1: string): android.net.Uri;
        }
        export module DocumentsContract {
            export class Document extends javalangObject {
                public static COLUMN_DISPLAY_NAME: string;
                public static COLUMN_DOCUMENT_ID: string;
                public static COLUMN_FLAGS: string;
                public static COLUMN_ICON: string;
                public static COLUMN_LAST_MODIFIED: string;
                public static COLUMN_MIME_TYPE: string;
                public static COLUMN_SIZE: string;
                public static COLUMN_SUMMARY: string;
                public static FLAG_DIR_PREFERS_GRID: number;
                public static FLAG_DIR_PREFERS_LAST_MODIFIED: number;
                public static FLAG_DIR_SUPPORTS_CREATE: number;
                public static FLAG_SUPPORTS_DELETE: number;
                public static FLAG_SUPPORTS_RENAME: number;
                public static FLAG_SUPPORTS_THUMBNAIL: number;
                public static FLAG_SUPPORTS_WRITE: number;
                public static MIME_TYPE_DIR: string;
            }
            export class Root extends javalangObject {
                public static COLUMN_AVAILABLE_BYTES: string;
                public static COLUMN_DOCUMENT_ID: string;
                public static COLUMN_FLAGS: string;
                public static COLUMN_ICON: string;
                public static COLUMN_MIME_TYPES: string;
                public static COLUMN_ROOT_ID: string;
                public static COLUMN_SUMMARY: string;
                public static COLUMN_TITLE: string;
                public static FLAG_LOCAL_ONLY: number;
                public static FLAG_SUPPORTS_CREATE: number;
                public static FLAG_SUPPORTS_IS_CHILD: number;
                public static FLAG_SUPPORTS_RECENTS: number;
                public static FLAG_SUPPORTS_SEARCH: number;
            }
        }
    }
}

/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.pm.ProviderInfo.d.ts" />
/// <reference path="./android.content.res.AssetFileDescriptor.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.CancellationSignal.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module provider {
        export abstract class DocumentsProvider extends android.content.ContentProvider {
            public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: android.os.CancellationSignal): android.database.Cursor;

            public isChildDocument(param0: string, param1: string): boolean;

            public queryChildDocuments(param0: string, param1: native.Array<string>, param2: string): android.database.Cursor;

            public openFile(param0: android.net.Uri, param1: string, param2: android.os.CancellationSignal): android.os.ParcelFileDescriptor;

            public delete(param0: android.net.Uri, param1: string, param2: native.Array<string>): number;

            public openAssetFile(param0: android.net.Uri, param1: string): android.content.res.AssetFileDescriptor;

            public createDocument(param0: string, param1: string, param2: string): string;

            public openAssetFile(param0: android.net.Uri, param1: string, param2: android.os.CancellationSignal): android.content.res.AssetFileDescriptor;

            public insert(param0: android.net.Uri, param1: android.content.ContentValues): android.net.Uri;

            public queryRoots(param0: native.Array<string>): android.database.Cursor;

            public querySearchDocuments(param0: string, param1: string, param2: native.Array<string>): android.database.Cursor;

            public getType(param0: android.net.Uri): string;

            public getDocumentType(param0: string): string;

            public onTrimMemory(param0: number): void;

            public attachInfo(param0: android.content.Context, param1: android.content.pm.ProviderInfo): void;

            public deleteDocument(param0: string): void;

            public openTypedAssetFile(param0: android.net.Uri, param1: string, param2: android.os.Bundle, param3: android.os.CancellationSignal): android.content.res.AssetFileDescriptor;

            public queryDocument(param0: string, param1: native.Array<string>): android.database.Cursor;

            public renameDocument(param0: string, param1: string): string;

            public openDocumentThumbnail(param0: string, param1: android.graphics.Point, param2: android.os.CancellationSignal): android.content.res.AssetFileDescriptor;

            public update(param0: android.net.Uri, param1: android.content.ContentValues, param2: string, param3: native.Array<string>): number;

            public revokeDocumentPermission(param0: string): void;

            public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): android.database.Cursor;

            public constructor();

            public queryRecentDocuments(param0: string, param1: native.Array<string>): android.database.Cursor;

            public openFile(param0: android.net.Uri, param1: string): android.os.ParcelFileDescriptor;

            public call(param0: string, param1: string, param2: android.os.Bundle): android.os.Bundle;

            public openTypedAssetFile(param0: android.net.Uri, param1: string, param2: android.os.Bundle): android.content.res.AssetFileDescriptor;

            public openDocument(param0: string, param1: string, param2: android.os.CancellationSignal): android.os.ParcelFileDescriptor;

            public canonicalize(param0: android.net.Uri): android.net.Uri;
        }
    }
}

declare module android {
    export module provider {
        export class LiveFolders extends javalangObject implements android.provider.BaseColumns {
            public static ACTION_CREATE_LIVE_FOLDER: string;
            public static DESCRIPTION: string;
            public static DISPLAY_MODE_GRID: number;
            public static DISPLAY_MODE_LIST: number;
            public static EXTRA_LIVE_FOLDER_BASE_INTENT: string;
            public static EXTRA_LIVE_FOLDER_DISPLAY_MODE: string;
            public static EXTRA_LIVE_FOLDER_ICON: string;
            public static EXTRA_LIVE_FOLDER_NAME: string;
            public static ICON_BITMAP: string;
            public static ICON_PACKAGE: string;
            public static ICON_RESOURCE: string;
            public static INTENT: string;
            public static NAME: string;
        }
    }
}

/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module provider {
        export class MediaStore extends javalangObject {
            public static ACTION_IMAGE_CAPTURE: string;
            public static ACTION_IMAGE_CAPTURE_SECURE: string;
            public static ACTION_VIDEO_CAPTURE: string;
            public static AUTHORITY: string;
            public static EXTRA_DURATION_LIMIT: string;
            public static EXTRA_FINISH_ON_COMPLETION: string;
            public static EXTRA_FULL_SCREEN: string;
            public static EXTRA_MEDIA_ALBUM: string;
            public static EXTRA_MEDIA_ARTIST: string;
            public static EXTRA_MEDIA_FOCUS: string;
            public static EXTRA_MEDIA_GENRE: string;
            public static EXTRA_MEDIA_PLAYLIST: string;
            public static EXTRA_MEDIA_RADIO_CHANNEL: string;
            public static EXTRA_MEDIA_TITLE: string;
            public static EXTRA_OUTPUT: string;
            public static EXTRA_SCREEN_ORIENTATION: string;
            public static EXTRA_SHOW_ACTION_ICONS: string;
            public static EXTRA_SIZE_LIMIT: string;
            public static EXTRA_VIDEO_QUALITY: string;
            public static INTENT_ACTION_MEDIA_PLAY_FROM_SEARCH: string;
            public static INTENT_ACTION_MEDIA_SEARCH: string;
            public static INTENT_ACTION_MUSIC_PLAYER: string;
            public static INTENT_ACTION_STILL_IMAGE_CAMERA: string;
            public static INTENT_ACTION_STILL_IMAGE_CAMERA_SECURE: string;
            public static INTENT_ACTION_TEXT_OPEN_FROM_SEARCH: string;
            public static INTENT_ACTION_VIDEO_CAMERA: string;
            public static INTENT_ACTION_VIDEO_PLAY_FROM_SEARCH: string;
            public static MEDIA_IGNORE_FILENAME: string;
            public static MEDIA_SCANNER_VOLUME: string;
            public static META_DATA_STILL_IMAGE_CAMERA_PREWARM_SERVICE: string;
            public static UNKNOWN_STRING: string;

            public static getMediaScannerUri(): android.net.Uri;

            public constructor();

            public static getVersion(param0: android.content.Context): string;
        }
        export module MediaStore {
            export class Audio extends javalangObject {
                public constructor();

                public static keyFor(param0: string): string;
            }
            export module Audio {
                export class AlbumColumns extends javalangObject {
                    /**
                     * Constructs a new instance of the android.provider.MediaStore$Audio$AlbumColumns interface with the provided implementation.
                     */
                    public constructor(implementation: {});

                    public static ALBUM_ID: string;
                    public static ARTIST: string;
                    public static ALBUM_KEY: string;
                    public static FIRST_YEAR: string;
                    public static NUMBER_OF_SONGS_FOR_ARTIST: string;
                    public static ALBUM: string;
                    public static LAST_YEAR: string;
                    public static NUMBER_OF_SONGS: string;
                    public static ALBUM_ART: string;
                }
                export class Albums extends javalangObject implements android.provider.BaseColumns, android.provider.MediaStore.Audio.AlbumColumns {
                    public static CONTENT_TYPE: string;
                    public static DEFAULT_SORT_ORDER: string;
                    public static ENTRY_CONTENT_TYPE: string;
                    public static EXTERNAL_CONTENT_URI: android.net.Uri;
                    public static INTERNAL_CONTENT_URI: android.net.Uri;

                    public constructor();

                    public static getContentUri(param0: string): android.net.Uri;
                }
                export class ArtistColumns extends javalangObject {
                    /**
                     * Constructs a new instance of the android.provider.MediaStore$Audio$ArtistColumns interface with the provided implementation.
                     */
                    public constructor(implementation: {});

                    public static NUMBER_OF_ALBUMS: string;
                    public static ARTIST: string;
                    public static NUMBER_OF_TRACKS: string;
                    public static ARTIST_KEY: string;
                }
                export class Artists extends javalangObject implements android.provider.BaseColumns, android.provider.MediaStore.Audio.ArtistColumns {
                    public static CONTENT_TYPE: string;
                    public static DEFAULT_SORT_ORDER: string;
                    public static ENTRY_CONTENT_TYPE: string;
                    public static EXTERNAL_CONTENT_URI: android.net.Uri;
                    public static INTERNAL_CONTENT_URI: android.net.Uri;

                    public constructor();

                    public static getContentUri(param0: string): android.net.Uri;
                }
                export module Artists {
                    export class Albums extends javalangObject implements android.provider.MediaStore.Audio.AlbumColumns {
                        public constructor();

                        public static getContentUri(param0: string, param1: number): android.net.Uri;
                    }
                }
                export class AudioColumns extends javalangObject implements android.provider.MediaStore.MediaColumns {
                    /**
                     * Constructs a new instance of the android.provider.MediaStore$Audio$AudioColumns interface with the provided implementation.
                     */
                    public constructor(implementation: {});

                    public static ALBUM_ID: string;
                    public static IS_ALARM: string;
                    public static DATA: string;
                    public static ALBUM: string;
                    public static _ID: string;
                    public static TITLE: string;
                    public static DURATION: string;
                    public static DATE_MODIFIED: string;
                    public static SIZE: string;
                    public static TITLE_KEY: string;
                    public static IS_MUSIC: string;
                    public static DATE_ADDED: string;
                    public static HEIGHT: string;
                    public static TRACK: string;
                    public static DISPLAY_NAME: string;
                    public static ARTIST: string;
                    public static IS_NOTIFICATION: string;
                    public static YEAR: string;
                    public static BOOKMARK: string;
                    public static _COUNT: string;
                    public static IS_PODCAST: string;
                    public static ALBUM_KEY: string;
                    public static ARTIST_ID: string;
                    public static IS_RINGTONE: string;
                    public static WIDTH: string;
                    public static COMPOSER: string;
                    public static ARTIST_KEY: string;
                    public static MIME_TYPE: string;
                }
                export class Genres extends javalangObject implements android.provider.BaseColumns, android.provider.MediaStore.Audio.GenresColumns {
                    public static CONTENT_TYPE: string;
                    public static DEFAULT_SORT_ORDER: string;
                    public static ENTRY_CONTENT_TYPE: string;
                    public static EXTERNAL_CONTENT_URI: android.net.Uri;
                    public static INTERNAL_CONTENT_URI: android.net.Uri;

                    public constructor();

                    public static getContentUriForAudioId(param0: string, param1: number): android.net.Uri;

                    public static getContentUri(param0: string): android.net.Uri;
                }
                export module Genres {
                    export class Members extends javalangObject implements android.provider.MediaStore.Audio.AudioColumns {
                        public static AUDIO_ID: string;
                        public static CONTENT_DIRECTORY: string;
                        public static DEFAULT_SORT_ORDER: string;
                        public static GENRE_ID: string;

                        public constructor();

                        public static getContentUri(param0: string, param1: number): android.net.Uri;
                    }
                }
                export class GenresColumns extends javalangObject {
                    /**
                     * Constructs a new instance of the android.provider.MediaStore$Audio$GenresColumns interface with the provided implementation.
                     */
                    public constructor(implementation: {});

                    public static NAME: string;
                }
                export class Media extends javalangObject implements android.provider.MediaStore.Audio.AudioColumns {
                    public static CONTENT_TYPE: string;
                    public static DEFAULT_SORT_ORDER: string;
                    public static ENTRY_CONTENT_TYPE: string;
                    public static EXTERNAL_CONTENT_URI: android.net.Uri;
                    public static EXTRA_MAX_BYTES: string;
                    public static INTERNAL_CONTENT_URI: android.net.Uri;
                    public static RECORD_SOUND_ACTION: string;

                    public static getContentUriForPath(param0: string): android.net.Uri;

                    public constructor();

                    public static getContentUri(param0: string): android.net.Uri;
                }
                export class Playlists extends javalangObject implements android.provider.BaseColumns, android.provider.MediaStore.Audio.PlaylistsColumns {
                    public static CONTENT_TYPE: string;
                    public static DEFAULT_SORT_ORDER: string;
                    public static ENTRY_CONTENT_TYPE: string;
                    public static EXTERNAL_CONTENT_URI: android.net.Uri;
                    public static INTERNAL_CONTENT_URI: android.net.Uri;

                    public constructor();

                    public static getContentUri(param0: string): android.net.Uri;
                }
                export module Playlists {
                    export class Members extends javalangObject implements android.provider.MediaStore.Audio.AudioColumns {
                        public static AUDIO_ID: string;
                        public static CONTENT_DIRECTORY: string;
                        public static DEFAULT_SORT_ORDER: string;
                        public static PLAYLIST_ID: string;
                        public static PLAY_ORDER: string;
                        public static _ID: string;

                        public constructor();

                        public static moveItem(param0: android.content.ContentResolver, param1: number, param2: number, param3: number): boolean;

                        public static getContentUri(param0: string, param1: number): android.net.Uri;
                    }
                }
                export class PlaylistsColumns extends javalangObject {
                    /**
                     * Constructs a new instance of the android.provider.MediaStore$Audio$PlaylistsColumns interface with the provided implementation.
                     */
                    public constructor(implementation: {});

                    public static DATE_MODIFIED: string;
                    public static DATA: string;
                    public static DATE_ADDED: string;
                    public static NAME: string;
                }
                export class Radio extends javalangObject {
                    public static ENTRY_CONTENT_TYPE: string;
                }
            }
            export class Files extends javalangObject {
                public static getContentUri(param0: string, param1: number): android.net.Uri;
                public static getContentUri(param0: string): android.net.Uri;

                public constructor();
            }
            export module Files {
                export class FileColumns extends javalangObject implements android.provider.MediaStore.MediaColumns {
                    /**
                     * Constructs a new instance of the android.provider.MediaStore$Files$FileColumns interface with the provided implementation.
                     */
                    public constructor(implementation: {});

                    public static DATA: string;
                    public static PARENT: string;
                    public static MEDIA_TYPE: string;
                    public static _ID: string;
                    public static TITLE: string;
                    public static MEDIA_TYPE_AUDIO: number;
                    public static MEDIA_TYPE_IMAGE: number;
                    public static MEDIA_TYPE_NONE: number;
                    public static _COUNT: string;
                    public static DATE_MODIFIED: string;
                    public static MEDIA_TYPE_PLAYLIST: number;
                    public static MEDIA_TYPE_VIDEO: number;
                    public static SIZE: string;
                    public static WIDTH: string;
                    public static DATE_ADDED: string;
                    public static HEIGHT: string;
                    public static MIME_TYPE: string;
                    public static DISPLAY_NAME: string;
                }
            }
            export class Images extends javalangObject {
                public constructor();
            }
            export module Images {
                export class ImageColumns extends javalangObject implements android.provider.MediaStore.MediaColumns {
                    /**
                     * Constructs a new instance of the android.provider.MediaStore$Images$ImageColumns interface with the provided implementation.
                     */
                    public constructor(implementation: {});

                    public static IS_PRIVATE: string;
                    public static DESCRIPTION: string;
                    public static DATA: string;
                    public static ORIENTATION: string;
                    public static DATE_TAKEN: string;
                    public static _ID: string;
                    public static MINI_THUMB_MAGIC: string;
                    public static TITLE: string;
                    public static LATITUDE: string;
                    public static _COUNT: string;
                    public static BUCKET_DISPLAY_NAME: string;
                    public static PICASA_ID: string;
                    public static DATE_MODIFIED: string;
                    public static LONGITUDE: string;
                    public static SIZE: string;
                    public static BUCKET_ID: string;
                    public static WIDTH: string;
                    public static DATE_ADDED: string;
                    public static HEIGHT: string;
                    public static DISPLAY_NAME: string;
                    public static MIME_TYPE: string;
                }
                export class Media extends javalangObject implements android.provider.MediaStore.Images.ImageColumns {
                    public static CONTENT_TYPE: string;
                    public static DEFAULT_SORT_ORDER: string;
                    public static EXTERNAL_CONTENT_URI: android.net.Uri;
                    public static INTERNAL_CONTENT_URI: android.net.Uri;

                    public static query(param0: android.content.ContentResolver, param1: android.net.Uri, param2: native.Array<string>, param3: string, param4: string): android.database.Cursor;

                    public constructor();

                    public static query(param0: android.content.ContentResolver, param1: android.net.Uri, param2: native.Array<string>, param3: string, param4: native.Array<string>, param5: string): android.database.Cursor;
                    public static query(param0: android.content.ContentResolver, param1: android.net.Uri, param2: native.Array<string>): android.database.Cursor;

                    public static insertImage(param0: android.content.ContentResolver, param1: string, param2: string, param3: string): string;
                    public static insertImage(param0: android.content.ContentResolver, param1: android.graphics.Bitmap, param2: string, param3: string): string;

                    public static getContentUri(param0: string): android.net.Uri;

                    public static getBitmap(param0: android.content.ContentResolver, param1: android.net.Uri): android.graphics.Bitmap;
                }
                export class Thumbnails extends javalangObject implements android.provider.BaseColumns {
                    public static DATA: string;
                    public static DEFAULT_SORT_ORDER: string;
                    public static EXTERNAL_CONTENT_URI: android.net.Uri;
                    public static FULL_SCREEN_KIND: number;
                    public static HEIGHT: string;
                    public static IMAGE_ID: string;
                    public static INTERNAL_CONTENT_URI: android.net.Uri;
                    public static KIND: string;
                    public static MICRO_KIND: number;
                    public static MINI_KIND: number;
                    public static THUMB_DATA: string;
                    public static WIDTH: string;

                    public static queryMiniThumbnails(param0: android.content.ContentResolver, param1: android.net.Uri, param2: number, param3: native.Array<string>): android.database.Cursor;

                    public static cancelThumbnailRequest(param0: android.content.ContentResolver, param1: number, param2: number): void;

                    public static getThumbnail(param0: android.content.ContentResolver, param1: number, param2: number, param3: number, param4: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;

                    public constructor();

                    public static queryMiniThumbnail(param0: android.content.ContentResolver, param1: number, param2: number, param3: native.Array<string>): android.database.Cursor;

                    public static cancelThumbnailRequest(param0: android.content.ContentResolver, param1: number): void;

                    public static query(param0: android.content.ContentResolver, param1: android.net.Uri, param2: native.Array<string>): android.database.Cursor;

                    public static getThumbnail(param0: android.content.ContentResolver, param1: number, param2: number, param3: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;

                    public static getContentUri(param0: string): android.net.Uri;
                }
            }
            export class MediaColumns extends javalangObject implements android.provider.BaseColumns {
                /**
                 * Constructs a new instance of the android.provider.MediaStore$MediaColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static _COUNT: string;
                public static DATE_MODIFIED: string;
                public static DATA: string;
                public static SIZE: string;
                public static _ID: string;
                public static TITLE: string;
                public static WIDTH: string;
                public static DATE_ADDED: string;
                public static HEIGHT: string;
                public static DISPLAY_NAME: string;
                public static MIME_TYPE: string;
            }
            export class Video extends javalangObject {
                public static DEFAULT_SORT_ORDER: string;

                public static query(param0: android.content.ContentResolver, param1: android.net.Uri, param2: native.Array<string>): android.database.Cursor;

                public constructor();
            }
            export module Video {
                export class Media extends javalangObject implements android.provider.MediaStore.Video.VideoColumns {
                    public static CONTENT_TYPE: string;
                    public static DEFAULT_SORT_ORDER: string;
                    public static EXTERNAL_CONTENT_URI: android.net.Uri;
                    public static INTERNAL_CONTENT_URI: android.net.Uri;

                    public constructor();

                    public static getContentUri(param0: string): android.net.Uri;
                }
                export class Thumbnails extends javalangObject implements android.provider.BaseColumns {
                    public static DATA: string;
                    public static DEFAULT_SORT_ORDER: string;
                    public static EXTERNAL_CONTENT_URI: android.net.Uri;
                    public static FULL_SCREEN_KIND: number;
                    public static HEIGHT: string;
                    public static INTERNAL_CONTENT_URI: android.net.Uri;
                    public static KIND: string;
                    public static MICRO_KIND: number;
                    public static MINI_KIND: number;
                    public static VIDEO_ID: string;
                    public static WIDTH: string;

                    public static cancelThumbnailRequest(param0: android.content.ContentResolver, param1: number, param2: number): void;

                    public static getThumbnail(param0: android.content.ContentResolver, param1: number, param2: number, param3: number, param4: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;

                    public constructor();

                    public static cancelThumbnailRequest(param0: android.content.ContentResolver, param1: number): void;

                    public static getThumbnail(param0: android.content.ContentResolver, param1: number, param2: number, param3: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;

                    public static getContentUri(param0: string): android.net.Uri;
                }
                export class VideoColumns extends javalangObject implements android.provider.MediaStore.MediaColumns {
                    /**
                     * Constructs a new instance of the android.provider.MediaStore$Video$VideoColumns interface with the provided implementation.
                     */
                    public constructor(implementation: {});

                    public static IS_PRIVATE: string;
                    public static DATA: string;
                    public static ALBUM: string;
                    public static DATE_TAKEN: string;
                    public static _ID: string;
                    public static TITLE: string;
                    public static LATITUDE: string;
                    public static DURATION: string;
                    public static TAGS: string;
                    public static LANGUAGE: string;
                    public static DATE_MODIFIED: string;
                    public static RESOLUTION: string;
                    public static SIZE: string;
                    public static DATE_ADDED: string;
                    public static HEIGHT: string;
                    public static DISPLAY_NAME: string;
                    public static ARTIST: string;
                    public static DESCRIPTION: string;
                    public static CATEGORY: string;
                    public static BOOKMARK: string;
                    public static MINI_THUMB_MAGIC: string;
                    public static _COUNT: string;
                    public static BUCKET_DISPLAY_NAME: string;
                    public static LONGITUDE: string;
                    public static BUCKET_ID: string;
                    public static WIDTH: string;
                    public static MIME_TYPE: string;
                }
            }
        }
    }
}

declare module android {
    export module provider {
        export class OpenableColumns extends javalangObject {
            /**
             * Constructs a new instance of the android.provider.OpenableColumns interface with the provided implementation.
             */
            public constructor(implementation: {});

            public static SIZE: string;
            public static DISPLAY_NAME: string;
        }
    }
}

/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module provider {
        export class SearchRecentSuggestions extends javalangObject {
            public static QUERIES_PROJECTION_1LINE: native.Array<string>;
            public static QUERIES_PROJECTION_2LINE: native.Array<string>;
            public static QUERIES_PROJECTION_DATE_INDEX: number;
            public static QUERIES_PROJECTION_DISPLAY1_INDEX: number;
            public static QUERIES_PROJECTION_DISPLAY2_INDEX: number;
            public static QUERIES_PROJECTION_QUERY_INDEX: number;

            public saveRecentQuery(param0: string, param1: string): void;

            public constructor(param0: android.content.Context, param1: string, param2: number);

            public clearHistory(): void;

            public truncateHistory(param0: android.content.ContentResolver, param1: number): void;
        }
    }
}

/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module android {
    export module provider {
        export class Settings extends javalangObject {
            public static ACTION_ACCESSIBILITY_SETTINGS: string;
            public static ACTION_ADD_ACCOUNT: string;
            public static ACTION_AIRPLANE_MODE_SETTINGS: string;
            public static ACTION_APN_SETTINGS: string;
            public static ACTION_APPLICATION_DETAILS_SETTINGS: string;
            public static ACTION_APPLICATION_DEVELOPMENT_SETTINGS: string;
            public static ACTION_APPLICATION_SETTINGS: string;
            public static ACTION_BATTERY_SAVER_SETTINGS: string;
            public static ACTION_BLUETOOTH_SETTINGS: string;
            public static ACTION_CAPTIONING_SETTINGS: string;
            public static ACTION_CAST_SETTINGS: string;
            public static ACTION_DATA_ROAMING_SETTINGS: string;
            public static ACTION_DATE_SETTINGS: string;
            public static ACTION_DEVICE_INFO_SETTINGS: string;
            public static ACTION_DISPLAY_SETTINGS: string;
            public static ACTION_DREAM_SETTINGS: string;
            public static ACTION_HOME_SETTINGS: string;
            public static ACTION_IGNORE_BATTERY_OPTIMIZATION_SETTINGS: string;
            public static ACTION_INPUT_METHOD_SETTINGS: string;
            public static ACTION_INPUT_METHOD_SUBTYPE_SETTINGS: string;
            public static ACTION_INTERNAL_STORAGE_SETTINGS: string;
            public static ACTION_LOCALE_SETTINGS: string;
            public static ACTION_LOCATION_SOURCE_SETTINGS: string;
            public static ACTION_MANAGE_ALL_APPLICATIONS_SETTINGS: string;
            public static ACTION_MANAGE_APPLICATIONS_SETTINGS: string;
            public static ACTION_MANAGE_OVERLAY_PERMISSION: string;
            public static ACTION_MANAGE_WRITE_SETTINGS: string;
            public static ACTION_MEMORY_CARD_SETTINGS: string;
            public static ACTION_NETWORK_OPERATOR_SETTINGS: string;
            public static ACTION_NFCSHARING_SETTINGS: string;
            public static ACTION_NFC_PAYMENT_SETTINGS: string;
            public static ACTION_NFC_SETTINGS: string;
            public static ACTION_NOTIFICATION_LISTENER_SETTINGS: string;
            public static ACTION_NOTIFICATION_POLICY_ACCESS_SETTINGS: string;
            public static ACTION_PRINT_SETTINGS: string;
            public static ACTION_PRIVACY_SETTINGS: string;
            public static ACTION_QUICK_LAUNCH_SETTINGS: string;
            public static ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS: string;
            public static ACTION_SEARCH_SETTINGS: string;
            public static ACTION_SECURITY_SETTINGS: string;
            public static ACTION_SETTINGS: string;
            public static ACTION_SHOW_REGULATORY_INFO: string;
            public static ACTION_SOUND_SETTINGS: string;
            public static ACTION_SYNC_SETTINGS: string;
            public static ACTION_USAGE_ACCESS_SETTINGS: string;
            public static ACTION_USER_DICTIONARY_SETTINGS: string;
            public static ACTION_VOICE_CONTROL_AIRPLANE_MODE: string;
            public static ACTION_VOICE_CONTROL_BATTERY_SAVER_MODE: string;
            public static ACTION_VOICE_CONTROL_DO_NOT_DISTURB_MODE: string;
            public static ACTION_VOICE_INPUT_SETTINGS: string;
            public static ACTION_WIFI_IP_SETTINGS: string;
            public static ACTION_WIFI_SETTINGS: string;
            public static ACTION_WIRELESS_SETTINGS: string;
            public static AUTHORITY: string;
            public static EXTRA_ACCOUNT_TYPES: string;
            public static EXTRA_AIRPLANE_MODE_ENABLED: string;
            public static EXTRA_AUTHORITIES: string;
            public static EXTRA_BATTERY_SAVER_MODE_ENABLED: string;
            public static EXTRA_DO_NOT_DISTURB_MODE_ENABLED: string;
            public static EXTRA_DO_NOT_DISTURB_MODE_MINUTES: string;
            public static EXTRA_INPUT_METHOD_ID: string;
            public static INTENT_CATEGORY_USAGE_ACCESS_CONFIG: string;
            public static METADATA_USAGE_ACCESS_REASON: string;

            public static canDrawOverlays(param0: android.content.Context): boolean;

            public constructor();
        }
        export module Settings {
            export class Global extends android.provider.Settings.NameValueTable {
                public static ADB_ENABLED: string;
                public static AIRPLANE_MODE_ON: string;
                public static AIRPLANE_MODE_RADIOS: string;
                public static ALWAYS_FINISH_ACTIVITIES: string;
                public static ANIMATOR_DURATION_SCALE: string;
                public static AUTO_TIME: string;
                public static AUTO_TIME_ZONE: string;
                public static BLUETOOTH_ON: string;
                public static CONTENT_URI: android.net.Uri;
                public static DATA_ROAMING: string;
                public static DEBUG_APP: string;
                public static DEVELOPMENT_SETTINGS_ENABLED: string;
                public static DEVICE_PROVISIONED: string;
                public static HTTP_PROXY: string;
                public static INSTALL_NON_MARKET_APPS: string;
                public static MODE_RINGER: string;
                public static NETWORK_PREFERENCE: string;
                public static RADIO_BLUETOOTH: string;
                public static RADIO_CELL: string;
                public static RADIO_NFC: string;
                public static RADIO_WIFI: string;
                public static SHOW_PROCESSES: string;
                public static STAY_ON_WHILE_PLUGGED_IN: string;
                public static SYS_PROP_SETTING_VERSION: string;
                public static TRANSITION_ANIMATION_SCALE: string;
                public static USB_MASS_STORAGE_ENABLED: string;
                public static USE_GOOGLE_MAIL: string;
                public static WAIT_FOR_DEBUGGER: string;
                public static WIFI_DEVICE_OWNER_CONFIGS_LOCKDOWN: string;
                public static WIFI_MAX_DHCP_RETRY_COUNT: string;
                public static WIFI_MOBILE_DATA_TRANSITION_WAKELOCK_TIMEOUT_MS: string;
                public static WIFI_NETWORKS_AVAILABLE_NOTIFICATION_ON: string;
                public static WIFI_NETWORKS_AVAILABLE_REPEAT_DELAY: string;
                public static WIFI_NUM_OPEN_NETWORKS_KEPT: string;
                public static WIFI_ON: string;
                public static WIFI_SLEEP_POLICY: string;
                public static WIFI_SLEEP_POLICY_DEFAULT: number;
                public static WIFI_SLEEP_POLICY_NEVER: number;
                public static WIFI_SLEEP_POLICY_NEVER_WHILE_PLUGGED: number;
                public static WIFI_WATCHDOG_ON: string;
                public static WINDOW_ANIMATION_SCALE: string;

                public static getFloat(param0: android.content.ContentResolver, param1: string): number;

                public static getLong(param0: android.content.ContentResolver, param1: string, param2: number): number;

                public static putString(param0: android.content.ContentResolver, param1: android.net.Uri, param2: string, param3: string): boolean;

                public static getUriFor(param0: android.net.Uri, param1: string): android.net.Uri;

                public static getString(param0: android.content.ContentResolver, param1: string): string;

                public static getFloat(param0: android.content.ContentResolver, param1: string, param2: number): number;

                public constructor();

                public static getUriFor(param0: string): android.net.Uri;

                public static putInt(param0: android.content.ContentResolver, param1: string, param2: number): boolean;

                public static getLong(param0: android.content.ContentResolver, param1: string): number;

                public static putFloat(param0: android.content.ContentResolver, param1: string, param2: number): boolean;

                public static getInt(param0: android.content.ContentResolver, param1: string, param2: number): number;

                public static putLong(param0: android.content.ContentResolver, param1: string, param2: number): boolean;

                public static getInt(param0: android.content.ContentResolver, param1: string): number;

                public static putString(param0: android.content.ContentResolver, param1: string, param2: string): boolean;
            }
            export class NameValueTable extends javalangObject implements android.provider.BaseColumns {
                public static NAME: string;
                public static VALUE: string;

                public static putString(param0: android.content.ContentResolver, param1: android.net.Uri, param2: string, param3: string): boolean;

                public static getUriFor(param0: android.net.Uri, param1: string): android.net.Uri;

                public constructor();
            }
            export class Secure extends android.provider.Settings.NameValueTable {
                public static ACCESSIBILITY_DISPLAY_INVERSION_ENABLED: string;
                public static ACCESSIBILITY_ENABLED: string;
                public static ACCESSIBILITY_SPEAK_PASSWORD: string;
                public static ADB_ENABLED: string;
                public static ALLOWED_GEOLOCATION_ORIGINS: string;
                public static ALLOW_MOCK_LOCATION: string;
                public static ANDROID_ID: string;
                public static BACKGROUND_DATA: string;
                public static BLUETOOTH_ON: string;
                public static CONTENT_URI: android.net.Uri;
                public static DATA_ROAMING: string;
                public static DEFAULT_INPUT_METHOD: string;
                public static DEVELOPMENT_SETTINGS_ENABLED: string;
                public static DEVICE_PROVISIONED: string;
                public static ENABLED_ACCESSIBILITY_SERVICES: string;
                public static ENABLED_INPUT_METHODS: string;
                public static HTTP_PROXY: string;
                public static INPUT_METHOD_SELECTOR_VISIBILITY: string;
                public static INSTALL_NON_MARKET_APPS: string;
                public static LOCATION_MODE: string;
                public static LOCATION_MODE_BATTERY_SAVING: number;
                public static LOCATION_MODE_HIGH_ACCURACY: number;
                public static LOCATION_MODE_OFF: number;
                public static LOCATION_MODE_SENSORS_ONLY: number;
                public static LOCATION_PROVIDERS_ALLOWED: string;
                public static LOCK_PATTERN_ENABLED: string;
                public static LOCK_PATTERN_TACTILE_FEEDBACK_ENABLED: string;
                public static LOCK_PATTERN_VISIBLE: string;
                public static LOGGING_ID: string;
                public static NETWORK_PREFERENCE: string;
                public static PARENTAL_CONTROL_ENABLED: string;
                public static PARENTAL_CONTROL_LAST_UPDATE: string;
                public static PARENTAL_CONTROL_REDIRECT_URL: string;
                public static SELECTED_INPUT_METHOD_SUBTYPE: string;
                public static SETTINGS_CLASSNAME: string;
                public static SKIP_FIRST_USE_HINTS: string;
                public static SYS_PROP_SETTING_VERSION: string;
                public static TOUCH_EXPLORATION_ENABLED: string;
                public static TTS_DEFAULT_COUNTRY: string;
                public static TTS_DEFAULT_LANG: string;
                public static TTS_DEFAULT_PITCH: string;
                public static TTS_DEFAULT_RATE: string;
                public static TTS_DEFAULT_SYNTH: string;
                public static TTS_DEFAULT_VARIANT: string;
                public static TTS_ENABLED_PLUGINS: string;
                public static TTS_USE_DEFAULTS: string;
                public static USB_MASS_STORAGE_ENABLED: string;
                public static USE_GOOGLE_MAIL: string;
                public static WIFI_MAX_DHCP_RETRY_COUNT: string;
                public static WIFI_MOBILE_DATA_TRANSITION_WAKELOCK_TIMEOUT_MS: string;
                public static WIFI_NETWORKS_AVAILABLE_NOTIFICATION_ON: string;
                public static WIFI_NETWORKS_AVAILABLE_REPEAT_DELAY: string;
                public static WIFI_NUM_OPEN_NETWORKS_KEPT: string;
                public static WIFI_ON: string;
                public static WIFI_WATCHDOG_ACCEPTABLE_PACKET_LOSS_PERCENTAGE: string;
                public static WIFI_WATCHDOG_AP_COUNT: string;
                public static WIFI_WATCHDOG_BACKGROUND_CHECK_DELAY_MS: string;
                public static WIFI_WATCHDOG_BACKGROUND_CHECK_ENABLED: string;
                public static WIFI_WATCHDOG_BACKGROUND_CHECK_TIMEOUT_MS: string;
                public static WIFI_WATCHDOG_INITIAL_IGNORED_PING_COUNT: string;
                public static WIFI_WATCHDOG_MAX_AP_CHECKS: string;
                public static WIFI_WATCHDOG_ON: string;
                public static WIFI_WATCHDOG_PING_COUNT: string;
                public static WIFI_WATCHDOG_PING_DELAY_MS: string;
                public static WIFI_WATCHDOG_PING_TIMEOUT_MS: string;
                public static WIFI_WATCHDOG_WATCH_LIST: string;

                public static getFloat(param0: android.content.ContentResolver, param1: string): number;

                public static isLocationProviderEnabled(param0: android.content.ContentResolver, param1: string): boolean;

                public static getLong(param0: android.content.ContentResolver, param1: string, param2: number): number;

                public static setLocationProviderEnabled(param0: android.content.ContentResolver, param1: string, param2: boolean): void;

                public static putString(param0: android.content.ContentResolver, param1: android.net.Uri, param2: string, param3: string): boolean;

                public static getUriFor(param0: android.net.Uri, param1: string): android.net.Uri;

                public static getString(param0: android.content.ContentResolver, param1: string): string;

                public static getFloat(param0: android.content.ContentResolver, param1: string, param2: number): number;

                public constructor();

                public static getUriFor(param0: string): android.net.Uri;

                public static putInt(param0: android.content.ContentResolver, param1: string, param2: number): boolean;

                public static getLong(param0: android.content.ContentResolver, param1: string): number;

                public static putFloat(param0: android.content.ContentResolver, param1: string, param2: number): boolean;

                public static getInt(param0: android.content.ContentResolver, param1: string, param2: number): number;

                public static putLong(param0: android.content.ContentResolver, param1: string, param2: number): boolean;

                public static getInt(param0: android.content.ContentResolver, param1: string): number;

                public static putString(param0: android.content.ContentResolver, param1: string, param2: string): boolean;
            }
            export class SettingNotFoundException extends android.util.AndroidException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: javalangException);
                public constructor(param0: string);
                public constructor();
            }
            export class System extends android.provider.Settings.NameValueTable {
                public static ACCELEROMETER_ROTATION: string;
                public static ADB_ENABLED: string;
                public static AIRPLANE_MODE_ON: string;
                public static AIRPLANE_MODE_RADIOS: string;
                public static ALARM_ALERT: string;
                public static ALWAYS_FINISH_ACTIVITIES: string;
                public static ANDROID_ID: string;
                public static ANIMATOR_DURATION_SCALE: string;
                public static AUTO_TIME: string;
                public static AUTO_TIME_ZONE: string;
                public static BLUETOOTH_DISCOVERABILITY: string;
                public static BLUETOOTH_DISCOVERABILITY_TIMEOUT: string;
                public static BLUETOOTH_ON: string;
                public static CONTENT_URI: android.net.Uri;
                public static DATA_ROAMING: string;
                public static DATE_FORMAT: string;
                public static DEBUG_APP: string;
                public static DEFAULT_ALARM_ALERT_URI: android.net.Uri;
                public static DEFAULT_NOTIFICATION_URI: android.net.Uri;
                public static DEFAULT_RINGTONE_URI: android.net.Uri;
                public static DEVICE_PROVISIONED: string;
                public static DIM_SCREEN: string;
                public static DTMF_TONE_TYPE_WHEN_DIALING: string;
                public static DTMF_TONE_WHEN_DIALING: string;
                public static END_BUTTON_BEHAVIOR: string;
                public static FONT_SCALE: string;
                public static HAPTIC_FEEDBACK_ENABLED: string;
                public static HTTP_PROXY: string;
                public static INSTALL_NON_MARKET_APPS: string;
                public static LOCATION_PROVIDERS_ALLOWED: string;
                public static LOCK_PATTERN_ENABLED: string;
                public static LOCK_PATTERN_TACTILE_FEEDBACK_ENABLED: string;
                public static LOCK_PATTERN_VISIBLE: string;
                public static LOGGING_ID: string;
                public static MODE_RINGER: string;
                public static MODE_RINGER_STREAMS_AFFECTED: string;
                public static MUTE_STREAMS_AFFECTED: string;
                public static NETWORK_PREFERENCE: string;
                public static NEXT_ALARM_FORMATTED: string;
                public static NOTIFICATION_SOUND: string;
                public static PARENTAL_CONTROL_ENABLED: string;
                public static PARENTAL_CONTROL_LAST_UPDATE: string;
                public static PARENTAL_CONTROL_REDIRECT_URL: string;
                public static RADIO_BLUETOOTH: string;
                public static RADIO_CELL: string;
                public static RADIO_NFC: string;
                public static RADIO_WIFI: string;
                public static RINGTONE: string;
                public static SCREEN_BRIGHTNESS: string;
                public static SCREEN_BRIGHTNESS_MODE: string;
                public static SCREEN_BRIGHTNESS_MODE_AUTOMATIC: number;
                public static SCREEN_BRIGHTNESS_MODE_MANUAL: number;
                public static SCREEN_OFF_TIMEOUT: string;
                public static SETTINGS_CLASSNAME: string;
                public static SETUP_WIZARD_HAS_RUN: string;
                public static SHOW_GTALK_SERVICE_STATUS: string;
                public static SHOW_PROCESSES: string;
                public static SHOW_WEB_SUGGESTIONS: string;
                public static SOUND_EFFECTS_ENABLED: string;
                public static STAY_ON_WHILE_PLUGGED_IN: string;
                public static SYS_PROP_SETTING_VERSION: string;
                public static TEXT_AUTO_CAPS: string;
                public static TEXT_AUTO_PUNCTUATE: string;
                public static TEXT_AUTO_REPLACE: string;
                public static TEXT_SHOW_PASSWORD: string;
                public static TIME_12_24: string;
                public static TRANSITION_ANIMATION_SCALE: string;
                public static USB_MASS_STORAGE_ENABLED: string;
                public static USER_ROTATION: string;
                public static USE_GOOGLE_MAIL: string;
                public static VIBRATE_ON: string;
                public static VIBRATE_WHEN_RINGING: string;
                public static WAIT_FOR_DEBUGGER: string;
                public static WALLPAPER_ACTIVITY: string;
                public static WIFI_MAX_DHCP_RETRY_COUNT: string;
                public static WIFI_MOBILE_DATA_TRANSITION_WAKELOCK_TIMEOUT_MS: string;
                public static WIFI_NETWORKS_AVAILABLE_NOTIFICATION_ON: string;
                public static WIFI_NETWORKS_AVAILABLE_REPEAT_DELAY: string;
                public static WIFI_NUM_OPEN_NETWORKS_KEPT: string;
                public static WIFI_ON: string;
                public static WIFI_SLEEP_POLICY: string;
                public static WIFI_SLEEP_POLICY_DEFAULT: number;
                public static WIFI_SLEEP_POLICY_NEVER: number;
                public static WIFI_SLEEP_POLICY_NEVER_WHILE_PLUGGED: number;
                public static WIFI_STATIC_DNS1: string;
                public static WIFI_STATIC_DNS2: string;
                public static WIFI_STATIC_GATEWAY: string;
                public static WIFI_STATIC_IP: string;
                public static WIFI_STATIC_NETMASK: string;
                public static WIFI_USE_STATIC_IP: string;
                public static WIFI_WATCHDOG_ACCEPTABLE_PACKET_LOSS_PERCENTAGE: string;
                public static WIFI_WATCHDOG_AP_COUNT: string;
                public static WIFI_WATCHDOG_BACKGROUND_CHECK_DELAY_MS: string;
                public static WIFI_WATCHDOG_BACKGROUND_CHECK_ENABLED: string;
                public static WIFI_WATCHDOG_BACKGROUND_CHECK_TIMEOUT_MS: string;
                public static WIFI_WATCHDOG_INITIAL_IGNORED_PING_COUNT: string;
                public static WIFI_WATCHDOG_MAX_AP_CHECKS: string;
                public static WIFI_WATCHDOG_ON: string;
                public static WIFI_WATCHDOG_PING_COUNT: string;
                public static WIFI_WATCHDOG_PING_DELAY_MS: string;
                public static WIFI_WATCHDOG_PING_TIMEOUT_MS: string;
                public static WINDOW_ANIMATION_SCALE: string;

                public static getFloat(param0: android.content.ContentResolver, param1: string): number;

                public static setShowGTalkServiceStatus(param0: android.content.ContentResolver, param1: boolean): void;

                public static canWrite(param0: android.content.Context): boolean;

                public static getLong(param0: android.content.ContentResolver, param1: string, param2: number): number;

                public static putString(param0: android.content.ContentResolver, param1: android.net.Uri, param2: string, param3: string): boolean;

                public static getUriFor(param0: android.net.Uri, param1: string): android.net.Uri;

                public static putConfiguration(param0: android.content.ContentResolver, param1: android.content.res.Configuration): boolean;

                public static getString(param0: android.content.ContentResolver, param1: string): string;

                public static getFloat(param0: android.content.ContentResolver, param1: string, param2: number): number;

                public constructor();

                public static getConfiguration(param0: android.content.ContentResolver, param1: android.content.res.Configuration): void;

                public static getShowGTalkServiceStatus(param0: android.content.ContentResolver): boolean;

                public static getUriFor(param0: string): android.net.Uri;

                public static putInt(param0: android.content.ContentResolver, param1: string, param2: number): boolean;

                public static getLong(param0: android.content.ContentResolver, param1: string): number;

                public static putFloat(param0: android.content.ContentResolver, param1: string, param2: number): boolean;

                public static getInt(param0: android.content.ContentResolver, param1: string, param2: number): number;

                public static putLong(param0: android.content.ContentResolver, param1: string, param2: number): boolean;

                public static getInt(param0: android.content.ContentResolver, param1: string): number;

                public static putString(param0: android.content.ContentResolver, param1: string, param2: string): boolean;
            }
        }
    }
}

/// <reference path="./android.accounts.Account.d.ts" />
/// <reference path="./android.content.ContentProviderClient.d.ts" />
/// <reference path="./android.content.ContentProviderOperation.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.util.Pair.d.ts" />
declare module android {
    export module provider {
        export class SyncStateContract extends javalangObject {
            public constructor();
        }
        export module SyncStateContract {
            export class Columns extends javalangObject implements android.provider.BaseColumns {
                /**
                 * Constructs a new instance of the android.provider.SyncStateContract$Columns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static ACCOUNT_NAME: string;
                public static _COUNT: string;
                public static ACCOUNT_TYPE: string;
                public static DATA: string;
                public static _ID: string;
            }
            export class Constants extends javalangObject implements android.provider.SyncStateContract.Columns {
                public static CONTENT_DIRECTORY: string;

                public constructor();
            }
            export class Helpers extends javalangObject {
                public static insert(param0: android.content.ContentProviderClient, param1: android.net.Uri, param2: android.accounts.Account, param3: native.Array<number>): android.net.Uri;

                public static newUpdateOperation(param0: android.net.Uri, param1: native.Array<number>): android.content.ContentProviderOperation;

                public static get(param0: android.content.ContentProviderClient, param1: android.net.Uri, param2: android.accounts.Account): native.Array<number>;

                public static set(param0: android.content.ContentProviderClient, param1: android.net.Uri, param2: android.accounts.Account, param3: native.Array<number>): void;

                public static newSetOperation(param0: android.net.Uri, param1: android.accounts.Account, param2: native.Array<number>): android.content.ContentProviderOperation;

                public static update(param0: android.content.ContentProviderClient, param1: android.net.Uri, param2: native.Array<number>): void;

                public static getWithUri(param0: android.content.ContentProviderClient, param1: android.net.Uri, param2: android.accounts.Account): android.util.Pair;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.telephony.SmsMessage.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module android {
    export module provider {
        export class Telephony extends javalangObject {
        }
        export module Telephony {
            export class BaseMmsColumns extends javalangObject implements android.provider.BaseColumns {
                /**
                 * Constructs a new instance of the android.provider.Telephony$BaseMmsColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static DATE: string;
                public static READ_REPORT: string;
                public static READ: string;
                public static READ_STATUS: string;
                public static MESSAGE_BOX_SENT: number;
                public static SUBJECT: string;
                public static SUBSCRIPTION_ID: string;
                public static _ID: string;
                public static TRANSACTION_ID: string;
                public static TEXT_ONLY: string;
                public static MESSAGE_SIZE: string;
                public static CONTENT_LOCATION: string;
                public static LOCKED: string;
                public static RETRIEVE_STATUS: string;
                public static MESSAGE_BOX_DRAFTS: number;
                public static MESSAGE_TYPE: string;
                public static MESSAGE_BOX_INBOX: number;
                public static MESSAGE_CLASS: string;
                public static STATUS: string;
                public static MESSAGE_BOX_ALL: number;
                public static MESSAGE_ID: string;
                public static CONTENT_TYPE: string;
                public static CREATOR: string;
                public static MESSAGE_BOX_OUTBOX: number;
                public static RESPONSE_TEXT: string;
                public static SUBJECT_CHARSET: string;
                public static RETRIEVE_TEXT_CHARSET: string;
                public static SEEN: string;
                public static MESSAGE_BOX_FAILED: number;
                public static CONTENT_CLASS: string;
                public static DELIVERY_REPORT: string;
                public static _COUNT: string;
                public static RESPONSE_STATUS: string;
                public static RETRIEVE_TEXT: string;
                public static EXPIRY: string;
                public static REPORT_ALLOWED: string;
                public static PRIORITY: string;
                public static THREAD_ID: string;
                public static MMS_VERSION: string;
                public static DATE_SENT: string;
                public static DELIVERY_TIME: string;
                public static MESSAGE_BOX: string;
            }
            export class CanonicalAddressesColumns extends javalangObject implements android.provider.BaseColumns {
                /**
                 * Constructs a new instance of the android.provider.Telephony$CanonicalAddressesColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static _COUNT: string;
                public static ADDRESS: string;
                public static _ID: string;
            }
            export class Carriers extends javalangObject implements android.provider.BaseColumns {
                public static APN: string;
                public static AUTH_TYPE: string;
                public static BEARER: string;
                public static CARRIER_ENABLED: string;
                public static CONTENT_URI: android.net.Uri;
                public static CURRENT: string;
                public static DEFAULT_SORT_ORDER: string;
                public static MCC: string;
                public static MMSC: string;
                public static MMSPORT: string;
                public static MMSPROXY: string;
                public static MNC: string;
                public static MVNO_MATCH_DATA: string;
                public static MVNO_TYPE: string;
                public static NAME: string;
                public static NUMERIC: string;
                public static PASSWORD: string;
                public static PORT: string;
                public static PROTOCOL: string;
                public static PROXY: string;
                public static ROAMING_PROTOCOL: string;
                public static SERVER: string;
                public static SUBSCRIPTION_ID: string;
                public static TYPE: string;
                public static USER: string;
            }
            export class Mms extends javalangObject implements android.provider.Telephony.BaseMmsColumns {
                public static CONTENT_URI: android.net.Uri;
                public static DEFAULT_SORT_ORDER: string;
                public static REPORT_REQUEST_URI: android.net.Uri;
                public static REPORT_STATUS_URI: android.net.Uri;
            }
            export module Mms {
                export class Addr extends javalangObject implements android.provider.BaseColumns {
                    public static ADDRESS: string;
                    public static CHARSET: string;
                    public static CONTACT_ID: string;
                    public static MSG_ID: string;
                    public static TYPE: string;
                }
                export class Draft extends javalangObject implements android.provider.Telephony.BaseMmsColumns {
                    public static CONTENT_URI: android.net.Uri;
                    public static DEFAULT_SORT_ORDER: string;
                }
                export class Inbox extends javalangObject implements android.provider.Telephony.BaseMmsColumns {
                    public static CONTENT_URI: android.net.Uri;
                    public static DEFAULT_SORT_ORDER: string;
                }
                export class Intents extends javalangObject {
                    public static CONTENT_CHANGED_ACTION: string;
                    public static DELETED_CONTENTS: string;
                }
                export class Outbox extends javalangObject implements android.provider.Telephony.BaseMmsColumns {
                    public static CONTENT_URI: android.net.Uri;
                    public static DEFAULT_SORT_ORDER: string;
                }
                export class Part extends javalangObject implements android.provider.BaseColumns {
                    public static CHARSET: string;
                    public static CONTENT_DISPOSITION: string;
                    public static CONTENT_ID: string;
                    public static CONTENT_LOCATION: string;
                    public static CONTENT_TYPE: string;
                    public static CT_START: string;
                    public static CT_TYPE: string;
                    public static FILENAME: string;
                    public static MSG_ID: string;
                    public static NAME: string;
                    public static SEQ: string;
                    public static TEXT: string;
                    public static _DATA: string;
                }
                export class Rate extends javalangObject {
                    public static CONTENT_URI: android.net.Uri;
                    public static SENT_TIME: string;
                }
                export class Sent extends javalangObject implements android.provider.Telephony.BaseMmsColumns {
                    public static CONTENT_URI: android.net.Uri;
                    public static DEFAULT_SORT_ORDER: string;
                }
            }
            export class MmsSms extends javalangObject implements android.provider.BaseColumns {
                public static CONTENT_CONVERSATIONS_URI: android.net.Uri;
                public static CONTENT_DRAFT_URI: android.net.Uri;
                public static CONTENT_FILTER_BYPHONE_URI: android.net.Uri;
                public static CONTENT_LOCKED_URI: android.net.Uri;
                public static CONTENT_UNDELIVERED_URI: android.net.Uri;
                public static CONTENT_URI: android.net.Uri;
                public static ERR_TYPE_GENERIC: number;
                public static ERR_TYPE_GENERIC_PERMANENT: number;
                public static ERR_TYPE_MMS_PROTO_PERMANENT: number;
                public static ERR_TYPE_MMS_PROTO_TRANSIENT: number;
                public static ERR_TYPE_SMS_PROTO_PERMANENT: number;
                public static ERR_TYPE_SMS_PROTO_TRANSIENT: number;
                public static ERR_TYPE_TRANSPORT_FAILURE: number;
                public static MMS_PROTO: number;
                public static NO_ERROR: number;
                public static SEARCH_URI: android.net.Uri;
                public static SMS_PROTO: number;
                public static TYPE_DISCRIMINATOR_COLUMN: string;
            }
            export module MmsSms {
                export class PendingMessages extends javalangObject implements android.provider.BaseColumns {
                    public static CONTENT_URI: android.net.Uri;
                    public static DUE_TIME: string;
                    public static ERROR_CODE: string;
                    public static ERROR_TYPE: string;
                    public static LAST_TRY: string;
                    public static MSG_ID: string;
                    public static MSG_TYPE: string;
                    public static PROTO_TYPE: string;
                    public static RETRY_INDEX: string;
                    public static SUBSCRIPTION_ID: string;
                }
            }
            export class Sms extends javalangObject implements android.provider.BaseColumns, android.provider.Telephony.TextBasedSmsColumns {
                public static CONTENT_URI: android.net.Uri;
                public static DEFAULT_SORT_ORDER: string;

                public static getDefaultSmsPackage(param0: android.content.Context): string;
            }
            export module Sms {
                export class Conversations extends javalangObject implements android.provider.BaseColumns, android.provider.Telephony.TextBasedSmsColumns {
                    public static CONTENT_URI: android.net.Uri;
                    public static DEFAULT_SORT_ORDER: string;
                    public static MESSAGE_COUNT: string;
                    public static SNIPPET: string;
                }
                export class Draft extends javalangObject implements android.provider.BaseColumns, android.provider.Telephony.TextBasedSmsColumns {
                    public static CONTENT_URI: android.net.Uri;
                    public static DEFAULT_SORT_ORDER: string;
                }
                export class Inbox extends javalangObject implements android.provider.BaseColumns, android.provider.Telephony.TextBasedSmsColumns {
                    public static CONTENT_URI: android.net.Uri;
                    public static DEFAULT_SORT_ORDER: string;
                }
                export class Intents extends javalangObject {
                    public static ACTION_CHANGE_DEFAULT: string;
                    public static DATA_SMS_RECEIVED_ACTION: string;
                    public static EXTRA_PACKAGE_NAME: string;
                    public static RESULT_SMS_DUPLICATED: number;
                    public static RESULT_SMS_GENERIC_ERROR: number;
                    public static RESULT_SMS_HANDLED: number;
                    public static RESULT_SMS_OUT_OF_MEMORY: number;
                    public static RESULT_SMS_UNSUPPORTED: number;
                    public static SIM_FULL_ACTION: string;
                    public static SMS_CB_RECEIVED_ACTION: string;
                    public static SMS_DELIVER_ACTION: string;
                    public static SMS_EMERGENCY_CB_RECEIVED_ACTION: string;
                    public static SMS_RECEIVED_ACTION: string;
                    public static SMS_REJECTED_ACTION: string;
                    public static SMS_SERVICE_CATEGORY_PROGRAM_DATA_RECEIVED_ACTION: string;
                    public static WAP_PUSH_DELIVER_ACTION: string;
                    public static WAP_PUSH_RECEIVED_ACTION: string;

                    public static getMessagesFromIntent(param0: android.content.Intent): native.Array<android.telephony.SmsMessage>;
                }
                export class Outbox extends javalangObject implements android.provider.BaseColumns, android.provider.Telephony.TextBasedSmsColumns {
                    public static CONTENT_URI: android.net.Uri;
                    public static DEFAULT_SORT_ORDER: string;
                }
                export class Sent extends javalangObject implements android.provider.BaseColumns, android.provider.Telephony.TextBasedSmsColumns {
                    public static CONTENT_URI: android.net.Uri;
                    public static DEFAULT_SORT_ORDER: string;
                }
            }
            export class TextBasedSmsColumns extends javalangObject {
                /**
                 * Constructs a new instance of the android.provider.Telephony$TextBasedSmsColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static DATE: string;
                public static READ: string;
                public static ADDRESS: string;
                public static SUBJECT: string;
                public static SUBSCRIPTION_ID: string;
                public static MESSAGE_TYPE_QUEUED: number;
                public static BODY: string;
                public static LOCKED: string;
                public static MESSAGE_TYPE_DRAFT: number;
                public static PERSON: string;
                public static MESSAGE_TYPE_ALL: number;
                public static PROTOCOL: string;
                public static STATUS_NONE: number;
                public static MESSAGE_TYPE_OUTBOX: number;
                public static MESSAGE_TYPE_SENT: number;
                public static STATUS_FAILED: number;
                public static REPLY_PATH_PRESENT: string;
                public static STATUS: string;
                public static MESSAGE_TYPE_INBOX: number;
                public static MESSAGE_TYPE_FAILED: number;
                public static CREATOR: string;
                public static STATUS_COMPLETE: number;
                public static STATUS_PENDING: number;
                public static SEEN: string;
                public static TYPE: string;
                public static SERVICE_CENTER: string;
                public static THREAD_ID: string;
                public static DATE_SENT: string;
                public static ERROR_CODE: string;
            }
            export class Threads extends javalangObject implements android.provider.Telephony.ThreadsColumns {
                public static BROADCAST_THREAD: number;
                public static COMMON_THREAD: number;
                public static CONTENT_URI: android.net.Uri;
                public static OBSOLETE_THREADS_URI: android.net.Uri;

                public static getOrCreateThreadId(param0: android.content.Context, param1: javautilSet): number;
                public static getOrCreateThreadId(param0: android.content.Context, param1: string): number;
            }
            export class ThreadsColumns extends javalangObject implements android.provider.BaseColumns {
                /**
                 * Constructs a new instance of the android.provider.Telephony$ThreadsColumns interface with the provided implementation.
                 */
                public constructor(implementation: {});

                public static DATE: string;
                public static _COUNT: string;
                public static READ: string;
                public static RECIPIENT_IDS: string;
                public static HAS_ATTACHMENT: string;
                public static MESSAGE_COUNT: string;
                public static SNIPPET: string;
                public static ARCHIVED: string;
                public static _ID: string;
                public static ERROR: string;
                public static SNIPPET_CHARSET: string;
                public static TYPE: string;
            }
        }
    }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module android {
    export module provider {
        export class UserDictionary extends javalangObject {
            public static AUTHORITY: string;
            public static CONTENT_URI: android.net.Uri;

            public constructor();
        }
        export module UserDictionary {
            export class Words extends javalangObject implements android.provider.BaseColumns {
                public static APP_ID: string;
                public static CONTENT_ITEM_TYPE: string;
                public static CONTENT_TYPE: string;
                public static CONTENT_URI: android.net.Uri;
                public static DEFAULT_SORT_ORDER: string;
                public static FREQUENCY: string;
                public static LOCALE: string;
                public static LOCALE_TYPE_ALL: number;
                public static LOCALE_TYPE_CURRENT: number;
                public static SHORTCUT: string;
                public static WORD: string;
                public static _ID: string;

                public static addWord(param0: android.content.Context, param1: string, param2: number, param3: string, param4: javautilLocale): void;
                public static addWord(param0: android.content.Context, param1: string, param2: number, param3: number): void;

                public constructor();
            }
        }
    }
}

/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module provider {
        export class VoicemailContract extends javalangObject {
            public static ACTION_FETCH_VOICEMAIL: string;
            public static ACTION_NEW_VOICEMAIL: string;
            public static AUTHORITY: string;
            public static EXTRA_SELF_CHANGE: string;
            public static PARAM_KEY_SOURCE_PACKAGE: string;
        }
        export module VoicemailContract {
            export class Status extends javalangObject implements android.provider.BaseColumns {
                public static CONFIGURATION_STATE: string;
                public static CONFIGURATION_STATE_CAN_BE_CONFIGURED: number;
                public static CONFIGURATION_STATE_NOT_CONFIGURED: number;
                public static CONFIGURATION_STATE_OK: number;
                public static CONTENT_URI: android.net.Uri;
                public static DATA_CHANNEL_STATE: string;
                public static DATA_CHANNEL_STATE_NO_CONNECTION: number;
                public static DATA_CHANNEL_STATE_OK: number;
                public static DIR_TYPE: string;
                public static ITEM_TYPE: string;
                public static NOTIFICATION_CHANNEL_STATE: string;
                public static NOTIFICATION_CHANNEL_STATE_MESSAGE_WAITING: number;
                public static NOTIFICATION_CHANNEL_STATE_NO_CONNECTION: number;
                public static NOTIFICATION_CHANNEL_STATE_OK: number;
                public static PHONE_ACCOUNT_COMPONENT_NAME: string;
                public static PHONE_ACCOUNT_ID: string;
                public static SETTINGS_URI: string;
                public static SOURCE_PACKAGE: string;
                public static VOICEMAIL_ACCESS_URI: string;

                public static buildSourceUri(param0: string): android.net.Uri;
            }
            export class Voicemails extends javalangObject implements android.provider.BaseColumns, android.provider.OpenableColumns {
                public static CONTENT_URI: android.net.Uri;
                public static DATE: string;
                public static DELETED: string;
                public static DIRTY: string;
                public static DIR_TYPE: string;
                public static DURATION: string;
                public static HAS_CONTENT: string;
                public static IS_READ: string;
                public static ITEM_TYPE: string;
                public static MIME_TYPE: string;
                public static NUMBER: string;
                public static PHONE_ACCOUNT_COMPONENT_NAME: string;
                public static PHONE_ACCOUNT_ID: string;
                public static SOURCE_DATA: string;
                public static SOURCE_PACKAGE: string;
                public static TRANSCRIPTION: string;

                public static buildSourceUri(param0: string): android.net.Uri;
            }
        }
    }
}
