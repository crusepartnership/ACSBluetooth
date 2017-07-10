
/// <reference path="./java.lang.String.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export class AttributeList extends javalangObject {
                /**
                 * Constructs a new instance of the org.xml.sax.AttributeList interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getLength(): number;
                    getName(param0: number): string;
                    getType(param0: number): string;
                    getValue(param0: number): string;
                    getType(param0: string): string;
                    getValue(param0: string): string;
                });

                public getName(param0: number): string;

                public getValue(param0: number): string;

                public getType(param0: number): string;

                public getValue(param0: string): string;

                public getLength(): number;

                public getType(param0: string): string;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export class Attributes extends javalangObject {
                /**
                 * Constructs a new instance of the org.xml.sax.Attributes interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getLength(): number;
                    getURI(param0: number): string;
                    getLocalName(param0: number): string;
                    getQName(param0: number): string;
                    getType(param0: number): string;
                    getValue(param0: number): string;
                    getIndex(param0: string, param1: string): number;
                    getIndex(param0: string): number;
                    getType(param0: string, param1: string): string;
                    getType(param0: string): string;
                    getValue(param0: string, param1: string): string;
                    getValue(param0: string): string;
                });

                public getURI(param0: number): string;

                public getType(param0: string, param1: string): string;

                public getValue(param0: number): string;

                public getIndex(param0: string): number;

                public getLocalName(param0: number): string;

                public getQName(param0: number): string;

                public getType(param0: number): string;

                public getValue(param0: string, param1: string): string;

                public getIndex(param0: string, param1: string): number;

                public getValue(param0: string): string;

                public getLength(): number;

                public getType(param0: string): string;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.Attributes.d.ts" />
/// <reference path="./org.xml.sax.Locator.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export class ContentHandler extends javalangObject {
                /**
                 * Constructs a new instance of the org.xml.sax.ContentHandler interface with the provided implementation.
                 */
                public constructor(implementation: {
                    setDocumentLocator(param0: org.xml.sax.Locator): void;
                    startDocument(): void;
                    endDocument(): void;
                    startPrefixMapping(param0: string, param1: string): void;
                    endPrefixMapping(param0: string): void;
                    startElement(param0: string, param1: string, param2: string, param3: org.xml.sax.Attributes): void;
                    endElement(param0: string, param1: string, param2: string): void;
                    characters(param0: native.Array<string>, param1: number, param2: number): void;
                    ignorableWhitespace(param0: native.Array<string>, param1: number, param2: number): void;
                    processingInstruction(param0: string, param1: string): void;
                    skippedEntity(param0: string): void;
                });

                public ignorableWhitespace(param0: native.Array<string>, param1: number, param2: number): void;

                public startElement(param0: string, param1: string, param2: string, param3: org.xml.sax.Attributes): void;

                public endElement(param0: string, param1: string, param2: string): void;

                public startDocument(): void;

                public endPrefixMapping(param0: string): void;

                public processingInstruction(param0: string, param1: string): void;

                public setDocumentLocator(param0: org.xml.sax.Locator): void;

                public endDocument(): void;

                public startPrefixMapping(param0: string, param1: string): void;

                public characters(param0: native.Array<string>, param1: number, param2: number): void;

                public skippedEntity(param0: string): void;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export class DTDHandler extends javalangObject {
                /**
                 * Constructs a new instance of the org.xml.sax.DTDHandler interface with the provided implementation.
                 */
                public constructor(implementation: {
                    notationDecl(param0: string, param1: string, param2: string): void;
                    unparsedEntityDecl(param0: string, param1: string, param2: string, param3: string): void;
                });

                public notationDecl(param0: string, param1: string, param2: string): void;

                public unparsedEntityDecl(param0: string, param1: string, param2: string, param3: string): void;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.AttributeList.d.ts" />
/// <reference path="./org.xml.sax.Locator.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export class DocumentHandler extends javalangObject {
                /**
                 * Constructs a new instance of the org.xml.sax.DocumentHandler interface with the provided implementation.
                 */
                public constructor(implementation: {
                    setDocumentLocator(param0: org.xml.sax.Locator): void;
                    startDocument(): void;
                    endDocument(): void;
                    startElement(param0: string, param1: org.xml.sax.AttributeList): void;
                    endElement(param0: string): void;
                    characters(param0: native.Array<string>, param1: number, param2: number): void;
                    ignorableWhitespace(param0: native.Array<string>, param1: number, param2: number): void;
                    processingInstruction(param0: string, param1: string): void;
                });

                public endElement(param0: string): void;

                public ignorableWhitespace(param0: native.Array<string>, param1: number, param2: number): void;

                public startElement(param0: string, param1: org.xml.sax.AttributeList): void;

                public startDocument(): void;

                public processingInstruction(param0: string, param1: string): void;

                public setDocumentLocator(param0: org.xml.sax.Locator): void;

                public endDocument(): void;

                public characters(param0: native.Array<string>, param1: number, param2: number): void;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.InputSource.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export class EntityResolver extends javalangObject {
                /**
                 * Constructs a new instance of the org.xml.sax.EntityResolver interface with the provided implementation.
                 */
                public constructor(implementation: {
                    resolveEntity(param0: string, param1: string): org.xml.sax.InputSource;
                });

                public resolveEntity(param0: string, param1: string): org.xml.sax.InputSource;
            }
        }
    }
}

/// <reference path="./org.xml.sax.SAXParseException.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export class ErrorHandler extends javalangObject {
                /**
                 * Constructs a new instance of the org.xml.sax.ErrorHandler interface with the provided implementation.
                 */
                public constructor(implementation: {
                    warning(param0: org.xml.sax.SAXParseException): void;
                    error(param0: org.xml.sax.SAXParseException): void;
                    fatalError(param0: org.xml.sax.SAXParseException): void;
                });

                public warning(param0: org.xml.sax.SAXParseException): void;

                public fatalError(param0: org.xml.sax.SAXParseException): void;

                public error(param0: org.xml.sax.SAXParseException): void;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.AttributeList.d.ts" />
/// <reference path="./org.xml.sax.InputSource.d.ts" />
/// <reference path="./org.xml.sax.Locator.d.ts" />
/// <reference path="./org.xml.sax.SAXParseException.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export class HandlerBase extends javalangObject implements org.xml.sax.EntityResolver, org.xml.sax.DTDHandler, org.xml.sax.DocumentHandler, org.xml.sax.ErrorHandler {
                public endElement(param0: string): void;

                public resolveEntity(param0: string, param1: string): org.xml.sax.InputSource;

                public warning(param0: org.xml.sax.SAXParseException): void;

                public error(param0: org.xml.sax.SAXParseException): void;

                public startElement(param0: string, param1: org.xml.sax.AttributeList): void;

                public notationDecl(param0: string, param1: string, param2: string): void;

                public unparsedEntityDecl(param0: string, param1: string, param2: string, param3: string): void;

                public processingInstruction(param0: string, param1: string): void;

                public endDocument(): void;

                public characters(param0: native.Array<string>, param1: number, param2: number): void;

                public constructor();

                public fatalError(param0: org.xml.sax.SAXParseException): void;

                public ignorableWhitespace(param0: native.Array<string>, param1: number, param2: number): void;

                public startDocument(): void;

                public setDocumentLocator(param0: org.xml.sax.Locator): void;
            }
        }
    }
}

/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export class InputSource extends javalangObject {
                public getEncoding(): string;

                public setByteStream(param0: javaioInputStream): void;

                public constructor(param0: javaioReader);
                public constructor(param0: javaioInputStream);
                public constructor(param0: string);
                public constructor();

                public getByteStream(): javaioInputStream;

                public getPublicId(): string;

                public setCharacterStream(param0: javaioReader): void;

                public setSystemId(param0: string): void;

                public getSystemId(): string;

                public setPublicId(param0: string): void;

                public getCharacterStream(): javaioReader;

                public setEncoding(param0: string): void;
            }
        }
    }
}

declare module org {
    export module xml {
        export module sax {
            export class Locator extends javalangObject {
                /**
                 * Constructs a new instance of the org.xml.sax.Locator interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getPublicId(): string;
                    getSystemId(): string;
                    getLineNumber(): number;
                    getColumnNumber(): number;
                });

                public getPublicId(): string;

                public getLineNumber(): number;

                public getSystemId(): string;

                public getColumnNumber(): number;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./org.xml.sax.DTDHandler.d.ts" />
/// <reference path="./org.xml.sax.DocumentHandler.d.ts" />
/// <reference path="./org.xml.sax.EntityResolver.d.ts" />
/// <reference path="./org.xml.sax.ErrorHandler.d.ts" />
/// <reference path="./org.xml.sax.InputSource.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export class Parser extends javalangObject {
                /**
                 * Constructs a new instance of the org.xml.sax.Parser interface with the provided implementation.
                 */
                public constructor(implementation: {
                    setLocale(param0: javautilLocale): void;
                    setEntityResolver(param0: org.xml.sax.EntityResolver): void;
                    setDTDHandler(param0: org.xml.sax.DTDHandler): void;
                    setDocumentHandler(param0: org.xml.sax.DocumentHandler): void;
                    setErrorHandler(param0: org.xml.sax.ErrorHandler): void;
                    parse(param0: org.xml.sax.InputSource): void;
                    parse(param0: string): void;
                });

                public setErrorHandler(param0: org.xml.sax.ErrorHandler): void;

                public parse(param0: org.xml.sax.InputSource): void;
                public parse(param0: string): void;

                public setLocale(param0: javautilLocale): void;

                public setDTDHandler(param0: org.xml.sax.DTDHandler): void;

                public setDocumentHandler(param0: org.xml.sax.DocumentHandler): void;

                public setEntityResolver(param0: org.xml.sax.EntityResolver): void;
            }
        }
    }
}

/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export class SAXException extends javalangException {
                public getException(): javalangException;

                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);

                public getMessage(): string;

                public toString(): string;

                public constructor(param0: string, param1: javalangException);
                public constructor(param0: string);
                public constructor(param0: javalangException);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export class SAXNotRecognizedException extends org.xml.sax.SAXException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string, param1: javalangException);
                public constructor(param0: string);
                public constructor(param0: javalangException);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export class SAXNotSupportedException extends org.xml.sax.SAXException {
                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string, param1: javalangException);
                public constructor(param0: string);
                public constructor(param0: javalangException);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./org.xml.sax.Locator.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export class SAXParseException extends org.xml.sax.SAXException {
                public constructor(param0: javalangThrowable);

                public getLineNumber(): number;

                public constructor(param0: string, param1: org.xml.sax.Locator, param2: javalangException);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: string, param1: string, param2: string, param3: number, param4: number, param5: javalangException);
                public constructor(param0: string, param1: javalangException);
                public constructor(param0: string);
                public constructor();

                public getPublicId(): string;

                public constructor(param0: string, param1: string, param2: string, param3: number, param4: number);

                public getSystemId(): string;

                public constructor(param0: string, param1: javalangThrowable);

                public getColumnNumber(): number;

                public constructor(param0: string, param1: org.xml.sax.Locator);
                public constructor(param0: javalangException);
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
/// <reference path="./org.xml.sax.XMLReader.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export class XMLFilter extends javalangObject implements org.xml.sax.XMLReader {
                /**
                 * Constructs a new instance of the org.xml.sax.XMLFilter interface with the provided implementation.
                 */
                public constructor(implementation: {
                    setParent(param0: org.xml.sax.XMLReader): void;
                    getParent(): org.xml.sax.XMLReader;
                    getFeature(param0: string): boolean;
                    setFeature(param0: string, param1: boolean): void;
                    getProperty(param0: string): javalangObject;
                    setProperty(param0: string, param1: javalangObject): void;
                    setEntityResolver(param0: org.xml.sax.EntityResolver): void;
                    getEntityResolver(): org.xml.sax.EntityResolver;
                    setDTDHandler(param0: org.xml.sax.DTDHandler): void;
                    getDTDHandler(): org.xml.sax.DTDHandler;
                    setContentHandler(param0: org.xml.sax.ContentHandler): void;
                    getContentHandler(): org.xml.sax.ContentHandler;
                    setErrorHandler(param0: org.xml.sax.ErrorHandler): void;
                    getErrorHandler(): org.xml.sax.ErrorHandler;
                    parse(param0: org.xml.sax.InputSource): void;
                    parse(param0: string): void;
                });

                public getProperty(param0: string): javalangObject;

                public setContentHandler(param0: org.xml.sax.ContentHandler): void;

                public setParent(param0: org.xml.sax.XMLReader): void;

                public getEntityResolver(): org.xml.sax.EntityResolver;

                public getFeature(param0: string): boolean;

                public getDTDHandler(): org.xml.sax.DTDHandler;

                public parse(param0: org.xml.sax.InputSource): void;

                public setDTDHandler(param0: org.xml.sax.DTDHandler): void;

                public setEntityResolver(param0: org.xml.sax.EntityResolver): void;

                public getContentHandler(): org.xml.sax.ContentHandler;

                public setErrorHandler(param0: org.xml.sax.ErrorHandler): void;

                public setProperty(param0: string, param1: javalangObject): void;

                public setFeature(param0: string, param1: boolean): void;

                public parse(param0: string): void;

                public getParent(): org.xml.sax.XMLReader;

                public getErrorHandler(): org.xml.sax.ErrorHandler;
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
declare module org {
    export module xml {
        export module sax {
            export class XMLReader extends javalangObject {
                /**
                 * Constructs a new instance of the org.xml.sax.XMLReader interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getFeature(param0: string): boolean;
                    setFeature(param0: string, param1: boolean): void;
                    getProperty(param0: string): javalangObject;
                    setProperty(param0: string, param1: javalangObject): void;
                    setEntityResolver(param0: org.xml.sax.EntityResolver): void;
                    getEntityResolver(): org.xml.sax.EntityResolver;
                    setDTDHandler(param0: org.xml.sax.DTDHandler): void;
                    getDTDHandler(): org.xml.sax.DTDHandler;
                    setContentHandler(param0: org.xml.sax.ContentHandler): void;
                    getContentHandler(): org.xml.sax.ContentHandler;
                    setErrorHandler(param0: org.xml.sax.ErrorHandler): void;
                    getErrorHandler(): org.xml.sax.ErrorHandler;
                    parse(param0: org.xml.sax.InputSource): void;
                    parse(param0: string): void;
                });

                public getProperty(param0: string): javalangObject;

                public setContentHandler(param0: org.xml.sax.ContentHandler): void;

                public getEntityResolver(): org.xml.sax.EntityResolver;

                public getFeature(param0: string): boolean;

                public getDTDHandler(): org.xml.sax.DTDHandler;

                public parse(param0: org.xml.sax.InputSource): void;

                public setDTDHandler(param0: org.xml.sax.DTDHandler): void;

                public setEntityResolver(param0: org.xml.sax.EntityResolver): void;

                public getContentHandler(): org.xml.sax.ContentHandler;

                public setErrorHandler(param0: org.xml.sax.ErrorHandler): void;

                public setProperty(param0: string, param1: javalangObject): void;

                public setFeature(param0: string, param1: boolean): void;

                public parse(param0: string): void;

                public getErrorHandler(): org.xml.sax.ErrorHandler;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export module ext {
                export class Attributes2 extends javalangObject implements org.xml.sax.Attributes {
                    /**
                     * Constructs a new instance of the org.xml.sax.ext.Attributes2 interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        isDeclared(param0: number): boolean;
                        isDeclared(param0: string): boolean;
                        isDeclared(param0: string, param1: string): boolean;
                        isSpecified(param0: number): boolean;
                        isSpecified(param0: string, param1: string): boolean;
                        isSpecified(param0: string): boolean;
                        getLength(): number;
                        getURI(param0: number): string;
                        getLocalName(param0: number): string;
                        getQName(param0: number): string;
                        getType(param0: number): string;
                        getValue(param0: number): string;
                        getIndex(param0: string, param1: string): number;
                        getIndex(param0: string): number;
                        getType(param0: string, param1: string): string;
                        getType(param0: string): string;
                        getValue(param0: string, param1: string): string;
                        getValue(param0: string): string;
                    });

                    public isDeclared(param0: string): boolean;

                    public getType(param0: string, param1: string): string;

                    public isSpecified(param0: number): boolean;

                    public getType(param0: number): string;

                    public getLength(): number;

                    public getValue(param0: string, param1: string): string;

                    public getLocalName(param0: number): string;

                    public getQName(param0: number): string;

                    public isSpecified(param0: string): boolean;
                    public isSpecified(param0: string, param1: string): boolean;

                    public getType(param0: string): string;

                    public isDeclared(param0: string, param1: string): boolean;

                    public getURI(param0: number): string;

                    public getValue(param0: number): string;

                    public getIndex(param0: string): number;
                    public getIndex(param0: string, param1: string): number;

                    public getValue(param0: string): string;

                    public isDeclared(param0: number): boolean;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.Attributes.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export module ext {
                export class Attributes2Impl extends org.xml.sax.helpers.AttributesImpl implements org.xml.sax.ext.Attributes2 {
                    public getType(param0: string, param1: string): string;

                    public isSpecified(param0: number): boolean;

                    public addAttribute(param0: string, param1: string, param2: string, param3: string, param4: string): void;

                    public getType(param0: number): string;

                    public getLength(): number;

                    public constructor(param0: org.xml.sax.Attributes);

                    public setSpecified(param0: number, param1: boolean): void;

                    public isSpecified(param0: string, param1: string): boolean;

                    public setDeclared(param0: number, param1: boolean): void;

                    public constructor();

                    public removeAttribute(param0: number): void;

                    public getURI(param0: number): string;

                    public getIndex(param0: string): number;

                    public getValue(param0: string): string;

                    public isDeclared(param0: string): boolean;

                    public getValue(param0: string, param1: string): string;

                    public getLocalName(param0: number): string;

                    public getQName(param0: number): string;

                    public isSpecified(param0: string): boolean;

                    public getType(param0: string): string;

                    public isDeclared(param0: string, param1: string): boolean;

                    public getValue(param0: number): string;

                    public setAttributes(param0: org.xml.sax.Attributes): void;

                    public getIndex(param0: string, param1: string): number;

                    public isDeclared(param0: number): boolean;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export module ext {
                export class DeclHandler extends javalangObject {
                    /**
                     * Constructs a new instance of the org.xml.sax.ext.DeclHandler interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        elementDecl(param0: string, param1: string): void;
                        attributeDecl(param0: string, param1: string, param2: string, param3: string, param4: string): void;
                        internalEntityDecl(param0: string, param1: string): void;
                        externalEntityDecl(param0: string, param1: string, param2: string): void;
                    });

                    public attributeDecl(param0: string, param1: string, param2: string, param3: string, param4: string): void;

                    public internalEntityDecl(param0: string, param1: string): void;

                    public elementDecl(param0: string, param1: string): void;

                    public externalEntityDecl(param0: string, param1: string, param2: string): void;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.Attributes.d.ts" />
/// <reference path="./org.xml.sax.InputSource.d.ts" />
/// <reference path="./org.xml.sax.Locator.d.ts" />
/// <reference path="./org.xml.sax.SAXParseException.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export module ext {
                export class DefaultHandler2 extends org.xml.sax.helpers.DefaultHandler implements org.xml.sax.ext.LexicalHandler, org.xml.sax.ext.DeclHandler, org.xml.sax.ext.EntityResolver2 {
                    public comment(param0: native.Array<string>, param1: number, param2: number): void;

                    public startPrefixMapping(param0: string, param1: string): void;

                    public skippedEntity(param0: string): void;

                    public endDocument(): void;

                    public startElement(param0: string, param1: string, param2: string, param3: org.xml.sax.Attributes): void;

                    public externalEntityDecl(param0: string, param1: string, param2: string): void;

                    public startDTD(param0: string, param1: string, param2: string): void;

                    public characters(param0: native.Array<string>, param1: number, param2: number): void;

                    public processingInstruction(param0: string, param1: string): void;

                    public fatalError(param0: org.xml.sax.SAXParseException): void;

                    public constructor();

                    public endDTD(): void;

                    public getExternalSubset(param0: string, param1: string): org.xml.sax.InputSource;

                    public endEntity(param0: string): void;

                    public elementDecl(param0: string, param1: string): void;

                    public error(param0: org.xml.sax.SAXParseException): void;

                    public startCDATA(): void;

                    public endElement(param0: string, param1: string, param2: string): void;

                    public endCDATA(): void;

                    public resolveEntity(param0: string, param1: string): org.xml.sax.InputSource;

                    public warning(param0: org.xml.sax.SAXParseException): void;

                    public startDocument(): void;

                    public ignorableWhitespace(param0: native.Array<string>, param1: number, param2: number): void;

                    public attributeDecl(param0: string, param1: string, param2: string, param3: string, param4: string): void;

                    public internalEntityDecl(param0: string, param1: string): void;

                    public endPrefixMapping(param0: string): void;

                    public resolveEntity(param0: string, param1: string, param2: string, param3: string): org.xml.sax.InputSource;

                    public startEntity(param0: string): void;

                    public notationDecl(param0: string, param1: string, param2: string): void;

                    public unparsedEntityDecl(param0: string, param1: string, param2: string, param3: string): void;

                    public setDocumentLocator(param0: org.xml.sax.Locator): void;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.InputSource.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export module ext {
                export class EntityResolver2 extends javalangObject implements org.xml.sax.EntityResolver {
                    /**
                     * Constructs a new instance of the org.xml.sax.ext.EntityResolver2 interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        getExternalSubset(param0: string, param1: string): org.xml.sax.InputSource;
                        resolveEntity(param0: string, param1: string, param2: string, param3: string): org.xml.sax.InputSource;
                        resolveEntity(param0: string, param1: string): org.xml.sax.InputSource;
                    });

                    public resolveEntity(param0: string, param1: string): org.xml.sax.InputSource;

                    public getExternalSubset(param0: string, param1: string): org.xml.sax.InputSource;

                    public resolveEntity(param0: string, param1: string, param2: string, param3: string): org.xml.sax.InputSource;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export module ext {
                export class LexicalHandler extends javalangObject {
                    /**
                     * Constructs a new instance of the org.xml.sax.ext.LexicalHandler interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        startDTD(param0: string, param1: string, param2: string): void;
                        endDTD(): void;
                        startEntity(param0: string): void;
                        endEntity(param0: string): void;
                        startCDATA(): void;
                        endCDATA(): void;
                        comment(param0: native.Array<string>, param1: number, param2: number): void;
                    });

                    public endCDATA(): void;

                    public comment(param0: native.Array<string>, param1: number, param2: number): void;

                    public endDTD(): void;

                    public endEntity(param0: string): void;

                    public startCDATA(): void;

                    public startEntity(param0: string): void;

                    public startDTD(param0: string, param1: string, param2: string): void;
                }
            }
        }
    }
}

declare module org {
    export module xml {
        export module sax {
            export module ext {
                export class Locator2 extends javalangObject implements org.xml.sax.Locator {
                    /**
                     * Constructs a new instance of the org.xml.sax.ext.Locator2 interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        getXMLVersion(): string;
                        getEncoding(): string;
                        getPublicId(): string;
                        getSystemId(): string;
                        getLineNumber(): number;
                        getColumnNumber(): number;
                    });

                    public getLineNumber(): number;

                    public getXMLVersion(): string;

                    public getEncoding(): string;

                    public getPublicId(): string;

                    public getColumnNumber(): number;

                    public getSystemId(): string;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.Locator.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export module ext {
                export class Locator2Impl extends org.xml.sax.helpers.LocatorImpl implements org.xml.sax.ext.Locator2 {
                    public getLineNumber(): number;

                    public constructor(param0: org.xml.sax.Locator);

                    public setEncoding(param0: string): void;

                    public constructor();

                    public getXMLVersion(): string;

                    public getEncoding(): string;

                    public getPublicId(): string;

                    public getColumnNumber(): number;

                    public getSystemId(): string;

                    public setXMLVersion(param0: string): void;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.AttributeList.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export module helpers {
                export class AttributeListImpl extends javalangObject implements org.xml.sax.AttributeList {
                    public getType(param0: string): string;

                    public constructor(param0: org.xml.sax.AttributeList);
                    public constructor();

                    public getType(param0: number): string;

                    public setAttributeList(param0: org.xml.sax.AttributeList): void;

                    public clear(): void;

                    public getLength(): number;

                    public getValue(param0: number): string;

                    public getName(param0: number): string;

                    public getValue(param0: string): string;

                    public removeAttribute(param0: string): void;

                    public addAttribute(param0: string, param1: string, param2: string): void;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.Attributes.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export module helpers {
                export class AttributesImpl extends javalangObject implements org.xml.sax.Attributes {
                    public setQName(param0: number, param1: string): void;

                    public getType(param0: string, param1: string): string;

                    public addAttribute(param0: string, param1: string, param2: string, param3: string, param4: string): void;

                    public setURI(param0: number, param1: string): void;

                    public getType(param0: number): string;

                    public setAttribute(param0: number, param1: string, param2: string, param3: string, param4: string, param5: string): void;

                    public getLength(): number;

                    public getValue(param0: string, param1: string): string;

                    public constructor(param0: org.xml.sax.Attributes);

                    public setValue(param0: number, param1: string): void;

                    public getLocalName(param0: number): string;

                    public getQName(param0: number): string;

                    public setType(param0: number, param1: string): void;

                    public getType(param0: string): string;

                    public constructor();

                    public removeAttribute(param0: number): void;

                    public getURI(param0: number): string;

                    public getValue(param0: number): string;

                    public getIndex(param0: string): number;

                    public clear(): void;

                    public setAttributes(param0: org.xml.sax.Attributes): void;

                    public getIndex(param0: string, param1: string): number;

                    public getValue(param0: string): string;

                    public setLocalName(param0: number, param1: string): void;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.Attributes.d.ts" />
/// <reference path="./org.xml.sax.InputSource.d.ts" />
/// <reference path="./org.xml.sax.Locator.d.ts" />
/// <reference path="./org.xml.sax.SAXParseException.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export module helpers {
                export class DefaultHandler extends javalangObject implements org.xml.sax.EntityResolver, org.xml.sax.DTDHandler, org.xml.sax.ContentHandler, org.xml.sax.ErrorHandler {
                    public startPrefixMapping(param0: string, param1: string): void;

                    public skippedEntity(param0: string): void;

                    public endDocument(): void;

                    public startElement(param0: string, param1: string, param2: string, param3: org.xml.sax.Attributes): void;

                    public error(param0: org.xml.sax.SAXParseException): void;

                    public endElement(param0: string, param1: string, param2: string): void;

                    public characters(param0: native.Array<string>, param1: number, param2: number): void;

                    public resolveEntity(param0: string, param1: string): org.xml.sax.InputSource;

                    public startDocument(): void;

                    public ignorableWhitespace(param0: native.Array<string>, param1: number, param2: number): void;

                    public warning(param0: org.xml.sax.SAXParseException): void;

                    public processingInstruction(param0: string, param1: string): void;

                    public endPrefixMapping(param0: string): void;

                    public fatalError(param0: org.xml.sax.SAXParseException): void;

                    public constructor();

                    public notationDecl(param0: string, param1: string, param2: string): void;

                    public unparsedEntityDecl(param0: string, param1: string, param2: string, param3: string): void;

                    public setDocumentLocator(param0: org.xml.sax.Locator): void;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.Locator.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export module helpers {
                export class LocatorImpl extends javalangObject implements org.xml.sax.Locator {
                    public getLineNumber(): number;

                    public setColumnNumber(param0: number): void;

                    public constructor(param0: org.xml.sax.Locator);
                    public constructor();

                    public getPublicId(): string;

                    public setPublicId(param0: string): void;

                    public getColumnNumber(): number;

                    public getSystemId(): string;

                    public setSystemId(param0: string): void;

                    public setLineNumber(param0: number): void;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export module helpers {
                export class NamespaceSupport extends javalangObject {
                    public static NSDECL: string;
                    public static XMLNS: string;

                    public getURI(param0: string): string;

                    public reset(): void;

                    public getPrefixes(param0: string): javautilEnumeration;

                    public isNamespaceDeclUris(): boolean;

                    public declarePrefix(param0: string, param1: string): boolean;

                    public pushContext(): void;

                    public getPrefix(param0: string): string;

                    public setNamespaceDeclUris(param0: boolean): void;

                    public getPrefixes(): javautilEnumeration;

                    public constructor();

                    public getDeclaredPrefixes(): javautilEnumeration;

                    public popContext(): void;

                    public processName(param0: string, param1: native.Array<string>, param2: boolean): native.Array<string>;
                }
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.AttributeList.d.ts" />
/// <reference path="./org.xml.sax.ContentHandler.d.ts" />
/// <reference path="./org.xml.sax.DTDHandler.d.ts" />
/// <reference path="./org.xml.sax.EntityResolver.d.ts" />
/// <reference path="./org.xml.sax.ErrorHandler.d.ts" />
/// <reference path="./org.xml.sax.InputSource.d.ts" />
/// <reference path="./org.xml.sax.Locator.d.ts" />
/// <reference path="./org.xml.sax.Parser.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export module helpers {
                export class ParserAdapter extends javalangObject implements org.xml.sax.XMLReader, org.xml.sax.DocumentHandler {
                    public parse(param0: string): void;

                    public startElement(param0: string, param1: org.xml.sax.AttributeList): void;

                    public endElement(param0: string): void;

                    public getContentHandler(): org.xml.sax.ContentHandler;

                    public setFeature(param0: string, param1: boolean): void;

                    public endDocument(): void;

                    public setErrorHandler(param0: org.xml.sax.ErrorHandler): void;

                    public setDTDHandler(param0: org.xml.sax.DTDHandler): void;

                    public constructor(param0: org.xml.sax.Parser);

                    public getEntityResolver(): org.xml.sax.EntityResolver;

                    public getFeature(param0: string): boolean;

                    public characters(param0: native.Array<string>, param1: number, param2: number): void;

                    public getDTDHandler(): org.xml.sax.DTDHandler;

                    public startDocument(): void;

                    public ignorableWhitespace(param0: native.Array<string>, param1: number, param2: number): void;

                    public parse(param0: org.xml.sax.InputSource): void;

                    public processingInstruction(param0: string, param1: string): void;

                    public constructor();

                    public setEntityResolver(param0: org.xml.sax.EntityResolver): void;

                    public getProperty(param0: string): javalangObject;

                    public setProperty(param0: string, param1: javalangObject): void;

                    public setContentHandler(param0: org.xml.sax.ContentHandler): void;

                    public getErrorHandler(): org.xml.sax.ErrorHandler;

                    public setDocumentLocator(param0: org.xml.sax.Locator): void;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.Parser.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export module helpers {
                export class ParserFactory extends javalangObject {
                    public static makeParser(): org.xml.sax.Parser;
                    public static makeParser(param0: string): org.xml.sax.Parser;
                }
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.Attributes.d.ts" />
/// <reference path="./org.xml.sax.ContentHandler.d.ts" />
/// <reference path="./org.xml.sax.DTDHandler.d.ts" />
/// <reference path="./org.xml.sax.EntityResolver.d.ts" />
/// <reference path="./org.xml.sax.ErrorHandler.d.ts" />
/// <reference path="./org.xml.sax.InputSource.d.ts" />
/// <reference path="./org.xml.sax.Locator.d.ts" />
/// <reference path="./org.xml.sax.SAXParseException.d.ts" />
/// <reference path="./org.xml.sax.XMLReader.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export module helpers {
                export class XMLFilterImpl extends javalangObject implements org.xml.sax.XMLFilter, org.xml.sax.EntityResolver, org.xml.sax.DTDHandler, org.xml.sax.ContentHandler, org.xml.sax.ErrorHandler {
                    public parse(param0: string): void;

                    public startPrefixMapping(param0: string, param1: string): void;

                    public skippedEntity(param0: string): void;

                    public getContentHandler(): org.xml.sax.ContentHandler;

                    public constructor(param0: org.xml.sax.XMLReader);

                    public setFeature(param0: string, param1: boolean): void;

                    public getParent(): org.xml.sax.XMLReader;

                    public endDocument(): void;

                    public startElement(param0: string, param1: string, param2: string, param3: org.xml.sax.Attributes): void;

                    public setDTDHandler(param0: org.xml.sax.DTDHandler): void;

                    public getEntityResolver(): org.xml.sax.EntityResolver;

                    public characters(param0: native.Array<string>, param1: number, param2: number): void;

                    public getDTDHandler(): org.xml.sax.DTDHandler;

                    public processingInstruction(param0: string, param1: string): void;

                    public fatalError(param0: org.xml.sax.SAXParseException): void;

                    public constructor();

                    public setEntityResolver(param0: org.xml.sax.EntityResolver): void;

                    public setContentHandler(param0: org.xml.sax.ContentHandler): void;

                    public setParent(param0: org.xml.sax.XMLReader): void;

                    public setErrorHandler(param0: org.xml.sax.ErrorHandler): void;

                    public error(param0: org.xml.sax.SAXParseException): void;

                    public endElement(param0: string, param1: string, param2: string): void;

                    public getFeature(param0: string): boolean;

                    public resolveEntity(param0: string, param1: string): org.xml.sax.InputSource;

                    public startDocument(): void;

                    public ignorableWhitespace(param0: native.Array<string>, param1: number, param2: number): void;

                    public warning(param0: org.xml.sax.SAXParseException): void;

                    public parse(param0: org.xml.sax.InputSource): void;

                    public endPrefixMapping(param0: string): void;

                    public getProperty(param0: string): javalangObject;

                    public setProperty(param0: string, param1: javalangObject): void;

                    public notationDecl(param0: string, param1: string, param2: string): void;

                    public unparsedEntityDecl(param0: string, param1: string, param2: string, param3: string): void;

                    public getErrorHandler(): org.xml.sax.ErrorHandler;

                    public setDocumentLocator(param0: org.xml.sax.Locator): void;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./org.xml.sax.Attributes.d.ts" />
/// <reference path="./org.xml.sax.DTDHandler.d.ts" />
/// <reference path="./org.xml.sax.DocumentHandler.d.ts" />
/// <reference path="./org.xml.sax.EntityResolver.d.ts" />
/// <reference path="./org.xml.sax.ErrorHandler.d.ts" />
/// <reference path="./org.xml.sax.InputSource.d.ts" />
/// <reference path="./org.xml.sax.Locator.d.ts" />
/// <reference path="./org.xml.sax.XMLReader.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export module helpers {
                export class XMLReaderAdapter extends javalangObject implements org.xml.sax.Parser, org.xml.sax.ContentHandler {
                    public parse(param0: string): void;

                    public startPrefixMapping(param0: string, param1: string): void;

                    public setLocale(param0: javautilLocale): void;

                    public skippedEntity(param0: string): void;

                    public constructor(param0: org.xml.sax.XMLReader);

                    public endDocument(): void;

                    public setDocumentHandler(param0: org.xml.sax.DocumentHandler): void;

                    public startElement(param0: string, param1: string, param2: string, param3: org.xml.sax.Attributes): void;

                    public setErrorHandler(param0: org.xml.sax.ErrorHandler): void;

                    public setDTDHandler(param0: org.xml.sax.DTDHandler): void;

                    public endElement(param0: string, param1: string, param2: string): void;

                    public characters(param0: native.Array<string>, param1: number, param2: number): void;

                    public startDocument(): void;

                    public ignorableWhitespace(param0: native.Array<string>, param1: number, param2: number): void;

                    public parse(param0: org.xml.sax.InputSource): void;

                    public processingInstruction(param0: string, param1: string): void;

                    public endPrefixMapping(param0: string): void;

                    public constructor();

                    public setEntityResolver(param0: org.xml.sax.EntityResolver): void;

                    public setDocumentLocator(param0: org.xml.sax.Locator): void;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.XMLReader.d.ts" />
declare module org {
    export module xml {
        export module sax {
            export module helpers {
                export class XMLReaderFactory extends javalangObject {
                    public static createXMLReader(param0: string): org.xml.sax.XMLReader;
                    public static createXMLReader(): org.xml.sax.XMLReader;
                }
            }
        }
    }
}
