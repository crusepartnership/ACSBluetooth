
/// <reference path="./android.sax.ElementListener.d.ts" />
/// <reference path="./android.sax.EndElementListener.d.ts" />
/// <reference path="./android.sax.EndTextElementListener.d.ts" />
/// <reference path="./android.sax.StartElementListener.d.ts" />
/// <reference path="./android.sax.TextElementListener.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module sax {
        export class Element extends javalangObject {
            public setEndTextElementListener(param0: android.sax.EndTextElementListener): void;

            public getChild(param0: string, param1: string): android.sax.Element;

            public requireChild(param0: string): android.sax.Element;

            public setTextElementListener(param0: android.sax.TextElementListener): void;

            public toString(): string;

            public setStartElementListener(param0: android.sax.StartElementListener): void;

            public getChild(param0: string): android.sax.Element;

            public setElementListener(param0: android.sax.ElementListener): void;

            public requireChild(param0: string, param1: string): android.sax.Element;

            public setEndElementListener(param0: android.sax.EndElementListener): void;
        }
    }
}

import orgxmlsaxAttributes = org.xml.sax.Attributes;
/// <reference path="./org.xml.sax.Attributes.d.ts" />
declare module android {
    export module sax {
        export class ElementListener extends javalangObject implements android.sax.StartElementListener, android.sax.EndElementListener {
            /**
             * Constructs a new instance of the android.sax.ElementListener interface with the provided implementation.
             */
            public constructor(implementation: {
                start(param0: orgxmlsaxAttributes): void;
                end(): void;
            });

            public start(param0: orgxmlsaxAttributes): void;

            public end(): void;
        }
    }
}

declare module android {
    export module sax {
        export class EndElementListener extends javalangObject {
            /**
             * Constructs a new instance of the android.sax.EndElementListener interface with the provided implementation.
             */
            public constructor(implementation: {
                end(): void;
            });

            public end(): void;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module android {
    export module sax {
        export class EndTextElementListener extends javalangObject {
            /**
             * Constructs a new instance of the android.sax.EndTextElementListener interface with the provided implementation.
             */
            public constructor(implementation: {
                end(param0: string): void;
            });

            public end(param0: string): void;
        }
    }
}

import orgxmlsaxContentHandler = org.xml.sax.ContentHandler;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.ContentHandler.d.ts" />
declare module android {
    export module sax {
        export class RootElement extends android.sax.Element {
            public constructor(param0: string, param1: string);

            public getContentHandler(): orgxmlsaxContentHandler;

            public constructor(param0: string);
        }
    }
}

/// <reference path="./org.xml.sax.Attributes.d.ts" />
declare module android {
    export module sax {
        export class StartElementListener extends javalangObject {
            /**
             * Constructs a new instance of the android.sax.StartElementListener interface with the provided implementation.
             */
            public constructor(implementation: {
                start(param0: orgxmlsaxAttributes): void;
            });

            public start(param0: orgxmlsaxAttributes): void;
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.Attributes.d.ts" />
declare module android {
    export module sax {
        export class TextElementListener extends javalangObject implements android.sax.StartElementListener, android.sax.EndTextElementListener {
            /**
             * Constructs a new instance of the android.sax.TextElementListener interface with the provided implementation.
             */
            public constructor(implementation: {
                start(param0: orgxmlsaxAttributes): void;
                end(param0: string): void;
            });

            public start(param0: orgxmlsaxAttributes): void;

            public end(param0: string): void;
        }
    }
}
