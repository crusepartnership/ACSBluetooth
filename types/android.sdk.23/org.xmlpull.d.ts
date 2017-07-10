let a;
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module org {
    export module xmlpull {
        export module v1 {
            export class XmlPullParser extends javalangObject {
                /**
                 * Constructs a new instance of the org.xmlpull.v1.XmlPullParser interface with the provided implementation.
                 */
                public constructor(implementation: {
                    setFeature(param0: string, param1: boolean): void;
                    getFeature(param0: string): boolean;
                    setProperty(param0: string, param1: javalangObject): void;
                    getProperty(param0: string): javalangObject;
                    setInput(param0: javaioReader): void;
                    setInput(param0: javaioInputStream, param1: string): void;
                    getInputEncoding(): string;
                    defineEntityReplacementText(param0: string, param1: string): void;
                    getNamespaceCount(param0: number): number;
                    getNamespacePrefix(param0: number): string;
                    getNamespaceUri(param0: number): string;
                    getNamespace(param0: string): string;
                    getDepth(): number;
                    getPositionDescription(): string;
                    getLineNumber(): number;
                    getColumnNumber(): number;
                    isWhitespace(): boolean;
                    getText(): string;
                    getTextCharacters(param0: native.Array<number>): native.Array<string>;
                    getNamespace(): string;
                    getName(): string;
                    getPrefix(): string;
                    isEmptyElementTag(): boolean;
                    getAttributeCount(): number;
                    getAttributeNamespace(param0: number): string;
                    getAttributeName(param0: number): string;
                    getAttributePrefix(param0: number): string;
                    getAttributeType(param0: number): string;
                    isAttributeDefault(param0: number): boolean;
                    getAttributeValue(param0: number): string;
                    getAttributeValue(param0: string, param1: string): string;
                    getEventType(): number;
                    next(): number;
                    nextToken(): number;
                    require(param0: number, param1: string, param2: string): void;
                    nextText(): string;
                    nextTag(): number;
                    <clinit>(): void;
                });

                public static NO_NAMESPACE: string;
                public static TEXT: number;
                public static ENTITY_REF: number;
                public static COMMENT: number;
                public static END_DOCUMENT: number;
                public static DOCDECL: number;
                public static END_TAG: number;
                public static FEATURE_VALIDATION: string;
                public static START_DOCUMENT: number;
                public static CDSECT: number;
                public static IGNORABLE_WHITESPACE: number;
                public static START_TAG: number;
                public static FEATURE_PROCESS_NAMESPACES: string;
                public static TYPES: native.Array<string>;
                public static FEATURE_PROCESS_DOCDECL: string;
                public static PROCESSING_INSTRUCTION: number;
                public static FEATURE_REPORT_NAMESPACE_ATTRIBUTES: string;

                public getInputEncoding(): string;

                public getLineNumber(): number;

                public getEventType(): number;

                public getAttributeValue(param0: string, param1: string): string;

                public nextTag(): number;

                public getPositionDescription(): string;

                public getAttributeCount(): number;

                public getAttributePrefix(param0: number): string;

                public nextText(): string;

                public getNamespaceUri(param0: number): string;

                public nextToken(): number;

                public getColumnNumber(): number;

                public getAttributeNamespace(param0: number): string;

                public isEmptyElementTag(): boolean;

                public getNamespacePrefix(param0: number): string;

                public getPrefix(): string;

                public require(param0: number, param1: string, param2: string): void;

                public getProperty(param0: string): javalangObject;

                public getNamespaceCount(param0: number): number;

                public setInput(param0: javaioInputStream, param1: string): void;

                public getAttributeName(param0: number): string;

                public getFeature(param0: string): boolean;

                public getName(): string;

                public getNamespace(param0: string): string;

                public getTextCharacters(param0: native.Array<number>): native.Array<string>;

                public getAttributeType(param0: number): string;

                public getText(): string;

                public getAttributeValue(param0: number): string;

                public isAttributeDefault(param0: number): boolean;

                public getNamespace(): string;

                public setProperty(param0: string, param1: javalangObject): void;

                public setFeature(param0: string, param1: boolean): void;

                public setInput(param0: javaioReader): void;

                public defineEntityReplacementText(param0: string, param1: string): void;

                public isWhitespace(): boolean;

                public getDepth(): number;

                public next(): number;
            }
        }
    }
}

/// <reference path="./java.io.PrintStream.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
declare module org {
    export module xmlpull {
        export module v1 {
            export class XmlPullParserException extends javalangException {
                public column: number;
                public detail: javalangThrowable;
                public row: number;

                public constructor(param0: javalangThrowable);

                public getLineNumber(): number;

                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);

                public printStackTrace(param0: javaioPrintStream): void;

                public constructor(param0: string, param1: org.xmlpull.v1.XmlPullParser, param2: javalangThrowable);

                public getDetail(): javalangThrowable;

                public getColumnNumber(): number;

                public constructor(param0: string);

                public printStackTrace(param0: javaioPrintWriter): void;

                public constructor();

                public printStackTrace(): void;
            }
        }
    }
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlSerializer.d.ts" />
declare module org {
    export module xmlpull {
        export module v1 {
            export class XmlPullParserFactory extends javalangObject {
                public static PROPERTY_NAME: string;
                public classNamesLocation: string;
                public features: javautilHashMap;
                public parserClasses: javautilArrayList;
                public serializerClasses: javautilArrayList;

                public isNamespaceAware(): boolean;

                public setValidating(param0: boolean): void;

                public static newInstance(param0: string, param1: javalangClass): org.xmlpull.v1.XmlPullParserFactory;

                public setFeature(param0: string, param1: boolean): void;

                public getFeature(param0: string): boolean;

                public static newInstance(): org.xmlpull.v1.XmlPullParserFactory;

                public setNamespaceAware(param0: boolean): void;

                public isValidating(): boolean;

                public newPullParser(): org.xmlpull.v1.XmlPullParser;

                public constructor();

                public newSerializer(): org.xmlpull.v1.XmlSerializer;
            }
        }
    }
}

/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.io.Writer.d.ts" />
/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module org {
    export module xmlpull {
        export module v1 {
            export class XmlSerializer extends javalangObject {
                /**
                 * Constructs a new instance of the org.xmlpull.v1.XmlSerializer interface with the provided implementation.
                 */
                public constructor(implementation: {
                    setFeature(param0: string, param1: boolean): void;
                    getFeature(param0: string): boolean;
                    setProperty(param0: string, param1: javalangObject): void;
                    getProperty(param0: string): javalangObject;
                    setOutput(param0: javaioOutputStream, param1: string): void;
                    setOutput(param0: javaioWriter): void;
                    startDocument(param0: string, param1: javalangBoolean): void;
                    endDocument(): void;
                    setPrefix(param0: string, param1: string): void;
                    getPrefix(param0: string, param1: boolean): string;
                    getDepth(): number;
                    getNamespace(): string;
                    getName(): string;
                    startTag(param0: string, param1: string): org.xmlpull.v1.XmlSerializer;
                    attribute(param0: string, param1: string, param2: string): org.xmlpull.v1.XmlSerializer;
                    endTag(param0: string, param1: string): org.xmlpull.v1.XmlSerializer;
                    text(param0: string): org.xmlpull.v1.XmlSerializer;
                    text(param0: native.Array<string>, param1: number, param2: number): org.xmlpull.v1.XmlSerializer;
                    cdsect(param0: string): void;
                    entityRef(param0: string): void;
                    processingInstruction(param0: string): void;
                    comment(param0: string): void;
                    docdecl(param0: string): void;
                    ignorableWhitespace(param0: string): void;
                    flush(): void;
                });

                public startDocument(param0: string, param1: javalangBoolean): void;

                public docdecl(param0: string): void;

                public text(param0: string): org.xmlpull.v1.XmlSerializer;

                public flush(): void;

                public setOutput(param0: javaioWriter): void;

                public attribute(param0: string, param1: string, param2: string): org.xmlpull.v1.XmlSerializer;

                public getPrefix(param0: string, param1: boolean): string;

                public setPrefix(param0: string, param1: string): void;

                public ignorableWhitespace(param0: string): void;

                public getProperty(param0: string): javalangObject;

                public getFeature(param0: string): boolean;

                public processingInstruction(param0: string): void;

                public getName(): string;

                public cdsect(param0: string): void;

                public endDocument(): void;

                public setOutput(param0: javaioOutputStream, param1: string): void;

                public comment(param0: string): void;

                public endTag(param0: string, param1: string): org.xmlpull.v1.XmlSerializer;

                public text(param0: native.Array<string>, param1: number, param2: number): org.xmlpull.v1.XmlSerializer;

                public getNamespace(): string;

                public setProperty(param0: string, param1: javalangObject): void;

                public setFeature(param0: string, param1: boolean): void;

                public startTag(param0: string, param1: string): org.xmlpull.v1.XmlSerializer;

                public getDepth(): number;

                public entityRef(param0: string): void;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.ContentHandler.d.ts" />
/// <reference path="./org.xml.sax.DTDHandler.d.ts" />
/// <reference path="./org.xml.sax.EntityResolver.d.ts" />
/// <reference path="./org.xml.sax.ErrorHandler.d.ts" />
/// <reference path="./org.xml.sax.InputSource.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
declare module org {
    export module xmlpull {
        export module v1 {
            export module sax2 {
                export class Driver extends javalangObject implements org.xml.sax.Locator, org.xml.sax.XMLReader, org.xml.sax.Attributes {
                    public static APACHE_DYNAMIC_VALIDATION_FEATURE: string;
                    public static APACHE_SCHEMA_VALIDATION_FEATURE: string;
                    public static DECLARATION_HANDLER_PROPERTY: string;
                    public static LEXICAL_HANDLER_PROPERTY: string;
                    public static NAMESPACES_FEATURE: string;
                    public static NAMESPACE_PREFIXES_FEATURE: string;
                    public static VALIDATION_FEATURE: string;
                    public contentHandler: org.xml.sax.ContentHandler;
                    public errorHandler: org.xml.sax.ErrorHandler;
                    public pp: org.xmlpull.v1.XmlPullParser;
                    public systemId: string;

                    public parse(param0: string): void;

                    public startElement(param0: string, param1: string, param2: string): void;

                    public getType(param0: string, param1: string): string;
                    public getType(param0: number): string;

                    public getContentHandler(): org.xml.sax.ContentHandler;

                    public parseSubTree(param0: org.xmlpull.v1.XmlPullParser): void;

                    public setFeature(param0: string, param1: boolean): void;

                    public getLength(): number;

                    public setDTDHandler(param0: org.xml.sax.DTDHandler): void;

                    public getEntityResolver(): org.xml.sax.EntityResolver;

                    public getDTDHandler(): org.xml.sax.DTDHandler;

                    public constructor();

                    public getURI(param0: number): string;

                    public getIndex(param0: string): number;

                    public setEntityResolver(param0: org.xml.sax.EntityResolver): void;

                    public getColumnNumber(): number;

                    public getValue(param0: string): string;

                    public getSystemId(): string;

                    public setContentHandler(param0: org.xml.sax.ContentHandler): void;

                    public getLineNumber(): number;

                    public constructor(param0: org.xmlpull.v1.XmlPullParser);

                    public getValue(param0: string, param1: string): string;

                    public getPublicId(): string;

                    public getLocalName(param0: number): string;

                    public getQName(param0: number): string;

                    public setErrorHandler(param0: org.xml.sax.ErrorHandler): void;

                    public getFeature(param0: string): boolean;

                    public getType(param0: string): string;

                    public parse(param0: org.xml.sax.InputSource): void;

                    public getValue(param0: number): string;

                    public getIndex(param0: string, param1: string): number;

                    public getProperty(param0: string): javalangObject;

                    public setProperty(param0: string, param1: javalangObject): void;

                    public getErrorHandler(): org.xml.sax.ErrorHandler;
                }
            }
        }
    }
}
