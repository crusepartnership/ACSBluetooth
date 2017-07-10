
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.Document.d.ts" />
/// <reference path="./org.w3c.dom.Element.d.ts" />
/// <reference path="./org.w3c.dom.NamedNodeMap.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />
/// <reference path="./org.w3c.dom.NodeList.d.ts" />
/// <reference path="./org.w3c.dom.TypeInfo.d.ts" />
/// <reference path="./org.w3c.dom.UserDataHandler.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export class Attr extends javalangObject implements org.w3c.dom.Node {
                /**
                 * Constructs a new instance of the org.w3c.dom.Attr interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getName(): string;
                    getSpecified(): boolean;
                    getValue(): string;
                    setValue(param0: string): void;
                    getOwnerElement(): org.w3c.dom.Element;
                    getSchemaTypeInfo(): org.w3c.dom.TypeInfo;
                    isId(): boolean;
                    getNodeName(): string;
                    getNodeValue(): string;
                    setNodeValue(param0: string): void;
                    getNodeType(): number;
                    getParentNode(): org.w3c.dom.Node;
                    getChildNodes(): org.w3c.dom.NodeList;
                    getFirstChild(): org.w3c.dom.Node;
                    getLastChild(): org.w3c.dom.Node;
                    getPreviousSibling(): org.w3c.dom.Node;
                    getNextSibling(): org.w3c.dom.Node;
                    getAttributes(): org.w3c.dom.NamedNodeMap;
                    getOwnerDocument(): org.w3c.dom.Document;
                    insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
                    replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
                    removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    hasChildNodes(): boolean;
                    cloneNode(param0: boolean): org.w3c.dom.Node;
                    normalize(): void;
                    isSupported(param0: string, param1: string): boolean;
                    getNamespaceURI(): string;
                    getPrefix(): string;
                    setPrefix(param0: string): void;
                    getLocalName(): string;
                    hasAttributes(): boolean;
                    getBaseURI(): string;
                    compareDocumentPosition(param0: org.w3c.dom.Node): number;
                    getTextContent(): string;
                    setTextContent(param0: string): void;
                    isSameNode(param0: org.w3c.dom.Node): boolean;
                    lookupPrefix(param0: string): string;
                    isDefaultNamespace(param0: string): boolean;
                    lookupNamespaceURI(param0: string): string;
                    isEqualNode(param0: org.w3c.dom.Node): boolean;
                    getFeature(param0: string, param1: string): javalangObject;
                    setUserData(param0: string, param1: javalangObject, param2: org.w3c.dom.UserDataHandler): javalangObject;
                    getUserData(param0: string): javalangObject;
                });

                public static DOCUMENT_FRAGMENT_NODE: number;
                public static DOCUMENT_TYPE_NODE: number;
                public static ELEMENT_NODE: number;
                public static DOCUMENT_POSITION_FOLLOWING: number;
                public static TEXT_NODE: number;
                public static ATTRIBUTE_NODE: number;
                public static DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
                public static ENTITY_REFERENCE_NODE: number;
                public static NOTATION_NODE: number;
                public static DOCUMENT_NODE: number;
                public static ENTITY_NODE: number;
                public static PROCESSING_INSTRUCTION_NODE: number;
                public static CDATA_SECTION_NODE: number;
                public static COMMENT_NODE: number;
                public static DOCUMENT_POSITION_CONTAINED_BY: number;
                public static DOCUMENT_POSITION_DISCONNECTED: number;
                public static DOCUMENT_POSITION_PRECEDING: number;
                public static DOCUMENT_POSITION_CONTAINS: number;

                public compareDocumentPosition(param0: org.w3c.dom.Node): number;

                public hasChildNodes(): boolean;

                public removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public lookupPrefix(param0: string): string;

                public getValue(): string;

                public isDefaultNamespace(param0: string): boolean;

                public getLocalName(): string;

                public getChildNodes(): org.w3c.dom.NodeList;

                public getBaseURI(): string;

                public setValue(param0: string): void;

                public hasAttributes(): boolean;

                public isId(): boolean;

                public normalize(): void;

                public getOwnerDocument(): org.w3c.dom.Document;

                public getOwnerElement(): org.w3c.dom.Element;

                public setNodeValue(param0: string): void;

                public getNamespaceURI(): string;

                public getTextContent(): string;

                public insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;

                public setPrefix(param0: string): void;

                public getSpecified(): boolean;

                public getNodeType(): number;

                public isSameNode(param0: org.w3c.dom.Node): boolean;

                public getPreviousSibling(): org.w3c.dom.Node;

                public getPrefix(): string;

                public setTextContent(param0: string): void;

                public getAttributes(): org.w3c.dom.NamedNodeMap;

                public appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public getName(): string;

                public getSchemaTypeInfo(): org.w3c.dom.TypeInfo;

                public getNodeValue(): string;

                public getFirstChild(): org.w3c.dom.Node;

                public replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;

                public getLastChild(): org.w3c.dom.Node;

                public getUserData(param0: string): javalangObject;

                public getFeature(param0: string, param1: string): javalangObject;

                public setUserData(param0: string, param1: javalangObject, param2: org.w3c.dom.UserDataHandler): javalangObject;

                public cloneNode(param0: boolean): org.w3c.dom.Node;

                public isEqualNode(param0: org.w3c.dom.Node): boolean;

                public getNextSibling(): org.w3c.dom.Node;

                public lookupNamespaceURI(param0: string): string;

                public getNodeName(): string;

                public getParentNode(): org.w3c.dom.Node;

                public isSupported(param0: string, param1: string): boolean;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.Document.d.ts" />
/// <reference path="./org.w3c.dom.NamedNodeMap.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />
/// <reference path="./org.w3c.dom.NodeList.d.ts" />
/// <reference path="./org.w3c.dom.Text.d.ts" />
/// <reference path="./org.w3c.dom.UserDataHandler.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export class CDATASection extends javalangObject implements org.w3c.dom.Text {
                /**
                 * Constructs a new instance of the org.w3c.dom.CDATASection interface with the provided implementation.
                 */
                public constructor(implementation: {
                    splitText(param0: number): org.w3c.dom.Text;
                    isElementContentWhitespace(): boolean;
                    getWholeText(): string;
                    replaceWholeText(param0: string): org.w3c.dom.Text;
                    getData(): string;
                    setData(param0: string): void;
                    getLength(): number;
                    substringData(param0: number, param1: number): string;
                    appendData(param0: string): void;
                    insertData(param0: number, param1: string): void;
                    deleteData(param0: number, param1: number): void;
                    replaceData(param0: number, param1: number, param2: string): void;
                    getNodeName(): string;
                    getNodeValue(): string;
                    setNodeValue(param0: string): void;
                    getNodeType(): number;
                    getParentNode(): org.w3c.dom.Node;
                    getChildNodes(): org.w3c.dom.NodeList;
                    getFirstChild(): org.w3c.dom.Node;
                    getLastChild(): org.w3c.dom.Node;
                    getPreviousSibling(): org.w3c.dom.Node;
                    getNextSibling(): org.w3c.dom.Node;
                    getAttributes(): org.w3c.dom.NamedNodeMap;
                    getOwnerDocument(): org.w3c.dom.Document;
                    insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
                    replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
                    removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    hasChildNodes(): boolean;
                    cloneNode(param0: boolean): org.w3c.dom.Node;
                    normalize(): void;
                    isSupported(param0: string, param1: string): boolean;
                    getNamespaceURI(): string;
                    getPrefix(): string;
                    setPrefix(param0: string): void;
                    getLocalName(): string;
                    hasAttributes(): boolean;
                    getBaseURI(): string;
                    compareDocumentPosition(param0: org.w3c.dom.Node): number;
                    getTextContent(): string;
                    setTextContent(param0: string): void;
                    isSameNode(param0: org.w3c.dom.Node): boolean;
                    lookupPrefix(param0: string): string;
                    isDefaultNamespace(param0: string): boolean;
                    lookupNamespaceURI(param0: string): string;
                    isEqualNode(param0: org.w3c.dom.Node): boolean;
                    getFeature(param0: string, param1: string): javalangObject;
                    setUserData(param0: string, param1: javalangObject, param2: org.w3c.dom.UserDataHandler): javalangObject;
                    getUserData(param0: string): javalangObject;
                });

                public static DOCUMENT_FRAGMENT_NODE: number;
                public static DOCUMENT_TYPE_NODE: number;
                public static ELEMENT_NODE: number;
                public static DOCUMENT_POSITION_FOLLOWING: number;
                public static TEXT_NODE: number;
                public static ATTRIBUTE_NODE: number;
                public static DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
                public static ENTITY_REFERENCE_NODE: number;
                public static NOTATION_NODE: number;
                public static DOCUMENT_NODE: number;
                public static ENTITY_NODE: number;
                public static PROCESSING_INSTRUCTION_NODE: number;
                public static CDATA_SECTION_NODE: number;
                public static COMMENT_NODE: number;
                public static DOCUMENT_POSITION_CONTAINED_BY: number;
                public static DOCUMENT_POSITION_DISCONNECTED: number;
                public static DOCUMENT_POSITION_PRECEDING: number;
                public static DOCUMENT_POSITION_CONTAINS: number;

                public compareDocumentPosition(param0: org.w3c.dom.Node): number;

                public splitText(param0: number): org.w3c.dom.Text;

                public removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public getWholeText(): string;

                public isDefaultNamespace(param0: string): boolean;

                public appendData(param0: string): void;

                public getChildNodes(): org.w3c.dom.NodeList;

                public normalize(): void;

                public getOwnerDocument(): org.w3c.dom.Document;

                public getNamespaceURI(): string;

                public getTextContent(): string;

                public setPrefix(param0: string): void;

                public getNodeType(): number;

                public isSameNode(param0: org.w3c.dom.Node): boolean;

                public setTextContent(param0: string): void;

                public getAttributes(): org.w3c.dom.NamedNodeMap;

                public getNodeValue(): string;

                public getFirstChild(): org.w3c.dom.Node;

                public replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;

                public getUserData(param0: string): javalangObject;

                public lookupNamespaceURI(param0: string): string;

                public getParentNode(): org.w3c.dom.Node;

                public setData(param0: string): void;

                public hasChildNodes(): boolean;

                public isElementContentWhitespace(): boolean;

                public lookupPrefix(param0: string): string;

                public replaceWholeText(param0: string): org.w3c.dom.Text;

                public getLocalName(): string;

                public substringData(param0: number, param1: number): string;

                public getBaseURI(): string;

                public hasAttributes(): boolean;

                public replaceData(param0: number, param1: number, param2: string): void;

                public setNodeValue(param0: string): void;

                public insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;

                public getPreviousSibling(): org.w3c.dom.Node;

                public getPrefix(): string;

                public insertData(param0: number, param1: string): void;

                public appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public getLength(): number;

                public getLastChild(): org.w3c.dom.Node;

                public getFeature(param0: string, param1: string): javalangObject;

                public setUserData(param0: string, param1: javalangObject, param2: org.w3c.dom.UserDataHandler): javalangObject;

                public getData(): string;

                public cloneNode(param0: boolean): org.w3c.dom.Node;

                public isEqualNode(param0: org.w3c.dom.Node): boolean;

                public getNextSibling(): org.w3c.dom.Node;

                public deleteData(param0: number, param1: number): void;

                public getNodeName(): string;

                public isSupported(param0: string, param1: string): boolean;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.Document.d.ts" />
/// <reference path="./org.w3c.dom.NamedNodeMap.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />
/// <reference path="./org.w3c.dom.NodeList.d.ts" />
/// <reference path="./org.w3c.dom.UserDataHandler.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export class CharacterData extends javalangObject implements org.w3c.dom.Node {
                /**
                 * Constructs a new instance of the org.w3c.dom.CharacterData interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getData(): string;
                    setData(param0: string): void;
                    getLength(): number;
                    substringData(param0: number, param1: number): string;
                    appendData(param0: string): void;
                    insertData(param0: number, param1: string): void;
                    deleteData(param0: number, param1: number): void;
                    replaceData(param0: number, param1: number, param2: string): void;
                    getNodeName(): string;
                    getNodeValue(): string;
                    setNodeValue(param0: string): void;
                    getNodeType(): number;
                    getParentNode(): org.w3c.dom.Node;
                    getChildNodes(): org.w3c.dom.NodeList;
                    getFirstChild(): org.w3c.dom.Node;
                    getLastChild(): org.w3c.dom.Node;
                    getPreviousSibling(): org.w3c.dom.Node;
                    getNextSibling(): org.w3c.dom.Node;
                    getAttributes(): org.w3c.dom.NamedNodeMap;
                    getOwnerDocument(): org.w3c.dom.Document;
                    insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
                    replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
                    removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    hasChildNodes(): boolean;
                    cloneNode(param0: boolean): org.w3c.dom.Node;
                    normalize(): void;
                    isSupported(param0: string, param1: string): boolean;
                    getNamespaceURI(): string;
                    getPrefix(): string;
                    setPrefix(param0: string): void;
                    getLocalName(): string;
                    hasAttributes(): boolean;
                    getBaseURI(): string;
                    compareDocumentPosition(param0: org.w3c.dom.Node): number;
                    getTextContent(): string;
                    setTextContent(param0: string): void;
                    isSameNode(param0: org.w3c.dom.Node): boolean;
                    lookupPrefix(param0: string): string;
                    isDefaultNamespace(param0: string): boolean;
                    lookupNamespaceURI(param0: string): string;
                    isEqualNode(param0: org.w3c.dom.Node): boolean;
                    getFeature(param0: string, param1: string): javalangObject;
                    setUserData(param0: string, param1: javalangObject, param2: org.w3c.dom.UserDataHandler): javalangObject;
                    getUserData(param0: string): javalangObject;
                });

                public static DOCUMENT_FRAGMENT_NODE: number;
                public static DOCUMENT_TYPE_NODE: number;
                public static ELEMENT_NODE: number;
                public static DOCUMENT_POSITION_FOLLOWING: number;
                public static TEXT_NODE: number;
                public static ATTRIBUTE_NODE: number;
                public static DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
                public static ENTITY_REFERENCE_NODE: number;
                public static NOTATION_NODE: number;
                public static DOCUMENT_NODE: number;
                public static ENTITY_NODE: number;
                public static PROCESSING_INSTRUCTION_NODE: number;
                public static CDATA_SECTION_NODE: number;
                public static COMMENT_NODE: number;
                public static DOCUMENT_POSITION_CONTAINED_BY: number;
                public static DOCUMENT_POSITION_DISCONNECTED: number;
                public static DOCUMENT_POSITION_PRECEDING: number;
                public static DOCUMENT_POSITION_CONTAINS: number;

                public compareDocumentPosition(param0: org.w3c.dom.Node): number;

                public setData(param0: string): void;

                public hasChildNodes(): boolean;

                public removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public lookupPrefix(param0: string): string;

                public isDefaultNamespace(param0: string): boolean;

                public appendData(param0: string): void;

                public getLocalName(): string;

                public substringData(param0: number, param1: number): string;

                public getChildNodes(): org.w3c.dom.NodeList;

                public getBaseURI(): string;

                public hasAttributes(): boolean;

                public replaceData(param0: number, param1: number, param2: string): void;

                public normalize(): void;

                public getOwnerDocument(): org.w3c.dom.Document;

                public setNodeValue(param0: string): void;

                public getNamespaceURI(): string;

                public getTextContent(): string;

                public insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;

                public setPrefix(param0: string): void;

                public getNodeType(): number;

                public isSameNode(param0: org.w3c.dom.Node): boolean;

                public getPreviousSibling(): org.w3c.dom.Node;

                public getPrefix(): string;

                public insertData(param0: number, param1: string): void;

                public setTextContent(param0: string): void;

                public getAttributes(): org.w3c.dom.NamedNodeMap;

                public appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public getNodeValue(): string;

                public getLength(): number;

                public getFirstChild(): org.w3c.dom.Node;

                public replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;

                public getLastChild(): org.w3c.dom.Node;

                public getUserData(param0: string): javalangObject;

                public getFeature(param0: string, param1: string): javalangObject;

                public setUserData(param0: string, param1: javalangObject, param2: org.w3c.dom.UserDataHandler): javalangObject;

                public getData(): string;

                public cloneNode(param0: boolean): org.w3c.dom.Node;

                public isEqualNode(param0: org.w3c.dom.Node): boolean;

                public getNextSibling(): org.w3c.dom.Node;

                public deleteData(param0: number, param1: number): void;

                public lookupNamespaceURI(param0: string): string;

                public getNodeName(): string;

                public getParentNode(): org.w3c.dom.Node;

                public isSupported(param0: string, param1: string): boolean;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.Document.d.ts" />
/// <reference path="./org.w3c.dom.NamedNodeMap.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />
/// <reference path="./org.w3c.dom.NodeList.d.ts" />
/// <reference path="./org.w3c.dom.UserDataHandler.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export class Comment extends javalangObject implements org.w3c.dom.CharacterData {
                /**
                 * Constructs a new instance of the org.w3c.dom.Comment interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getData(): string;
                    setData(param0: string): void;
                    getLength(): number;
                    substringData(param0: number, param1: number): string;
                    appendData(param0: string): void;
                    insertData(param0: number, param1: string): void;
                    deleteData(param0: number, param1: number): void;
                    replaceData(param0: number, param1: number, param2: string): void;
                    getNodeName(): string;
                    getNodeValue(): string;
                    setNodeValue(param0: string): void;
                    getNodeType(): number;
                    getParentNode(): org.w3c.dom.Node;
                    getChildNodes(): org.w3c.dom.NodeList;
                    getFirstChild(): org.w3c.dom.Node;
                    getLastChild(): org.w3c.dom.Node;
                    getPreviousSibling(): org.w3c.dom.Node;
                    getNextSibling(): org.w3c.dom.Node;
                    getAttributes(): org.w3c.dom.NamedNodeMap;
                    getOwnerDocument(): org.w3c.dom.Document;
                    insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
                    replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
                    removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    hasChildNodes(): boolean;
                    cloneNode(param0: boolean): org.w3c.dom.Node;
                    normalize(): void;
                    isSupported(param0: string, param1: string): boolean;
                    getNamespaceURI(): string;
                    getPrefix(): string;
                    setPrefix(param0: string): void;
                    getLocalName(): string;
                    hasAttributes(): boolean;
                    getBaseURI(): string;
                    compareDocumentPosition(param0: org.w3c.dom.Node): number;
                    getTextContent(): string;
                    setTextContent(param0: string): void;
                    isSameNode(param0: org.w3c.dom.Node): boolean;
                    lookupPrefix(param0: string): string;
                    isDefaultNamespace(param0: string): boolean;
                    lookupNamespaceURI(param0: string): string;
                    isEqualNode(param0: org.w3c.dom.Node): boolean;
                    getFeature(param0: string, param1: string): javalangObject;
                    setUserData(param0: string, param1: javalangObject, param2: org.w3c.dom.UserDataHandler): javalangObject;
                    getUserData(param0: string): javalangObject;
                });

                public static DOCUMENT_FRAGMENT_NODE: number;
                public static DOCUMENT_TYPE_NODE: number;
                public static ELEMENT_NODE: number;
                public static DOCUMENT_POSITION_FOLLOWING: number;
                public static TEXT_NODE: number;
                public static ATTRIBUTE_NODE: number;
                public static DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
                public static ENTITY_REFERENCE_NODE: number;
                public static NOTATION_NODE: number;
                public static DOCUMENT_NODE: number;
                public static ENTITY_NODE: number;
                public static PROCESSING_INSTRUCTION_NODE: number;
                public static CDATA_SECTION_NODE: number;
                public static COMMENT_NODE: number;
                public static DOCUMENT_POSITION_CONTAINED_BY: number;
                public static DOCUMENT_POSITION_DISCONNECTED: number;
                public static DOCUMENT_POSITION_PRECEDING: number;
                public static DOCUMENT_POSITION_CONTAINS: number;

                public compareDocumentPosition(param0: org.w3c.dom.Node): number;

                public setData(param0: string): void;

                public hasChildNodes(): boolean;

                public removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public lookupPrefix(param0: string): string;

                public isDefaultNamespace(param0: string): boolean;

                public appendData(param0: string): void;

                public getLocalName(): string;

                public substringData(param0: number, param1: number): string;

                public getChildNodes(): org.w3c.dom.NodeList;

                public getBaseURI(): string;

                public hasAttributes(): boolean;

                public replaceData(param0: number, param1: number, param2: string): void;

                public normalize(): void;

                public getOwnerDocument(): org.w3c.dom.Document;

                public setNodeValue(param0: string): void;

                public getNamespaceURI(): string;

                public getTextContent(): string;

                public insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;

                public setPrefix(param0: string): void;

                public getNodeType(): number;

                public isSameNode(param0: org.w3c.dom.Node): boolean;

                public getPreviousSibling(): org.w3c.dom.Node;

                public getPrefix(): string;

                public insertData(param0: number, param1: string): void;

                public setTextContent(param0: string): void;

                public getAttributes(): org.w3c.dom.NamedNodeMap;

                public appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public getNodeValue(): string;

                public getLength(): number;

                public getFirstChild(): org.w3c.dom.Node;

                public replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;

                public getLastChild(): org.w3c.dom.Node;

                public getUserData(param0: string): javalangObject;

                public getFeature(param0: string, param1: string): javalangObject;

                public setUserData(param0: string, param1: javalangObject, param2: org.w3c.dom.UserDataHandler): javalangObject;

                public getData(): string;

                public cloneNode(param0: boolean): org.w3c.dom.Node;

                public isEqualNode(param0: org.w3c.dom.Node): boolean;

                public getNextSibling(): org.w3c.dom.Node;

                public deleteData(param0: number, param1: number): void;

                public lookupNamespaceURI(param0: string): string;

                public getNodeName(): string;

                public getParentNode(): org.w3c.dom.Node;

                public isSupported(param0: string, param1: string): boolean;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.DOMStringList.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export class DOMConfiguration extends javalangObject {
                /**
                 * Constructs a new instance of the org.w3c.dom.DOMConfiguration interface with the provided implementation.
                 */
                public constructor(implementation: {
                    setParameter(param0: string, param1: javalangObject): void;
                    getParameter(param0: string): javalangObject;
                    canSetParameter(param0: string, param1: javalangObject): boolean;
                    getParameterNames(): org.w3c.dom.DOMStringList;
                });

                public canSetParameter(param0: string, param1: javalangObject): boolean;

                public getParameterNames(): org.w3c.dom.DOMStringList;

                public setParameter(param0: string, param1: javalangObject): void;

                public getParameter(param0: string): javalangObject;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./org.w3c.dom.DOMLocator.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export class DOMError extends javalangObject {
                /**
                 * Constructs a new instance of the org.w3c.dom.DOMError interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getSeverity(): number;
                    getMessage(): string;
                    getType(): string;
                    getRelatedException(): javalangObject;
                    getRelatedData(): javalangObject;
                    getLocation(): org.w3c.dom.DOMLocator;
                });

                public static SEVERITY_ERROR: number;
                public static SEVERITY_FATAL_ERROR: number;
                public static SEVERITY_WARNING: number;

                public getRelatedData(): javalangObject;

                public getType(): string;

                public getLocation(): org.w3c.dom.DOMLocator;

                public getSeverity(): number;

                public getRelatedException(): javalangObject;

                public getMessage(): string;
            }
        }
    }
}

/// <reference path="./org.w3c.dom.DOMError.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export class DOMErrorHandler extends javalangObject {
                /**
                 * Constructs a new instance of the org.w3c.dom.DOMErrorHandler interface with the provided implementation.
                 */
                public constructor(implementation: {
                    handleError(param0: org.w3c.dom.DOMError): boolean;
                });

                public handleError(param0: org.w3c.dom.DOMError): boolean;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export class DOMException extends javalangRuntimeException {
                public static DOMSTRING_SIZE_ERR: number;
                public static HIERARCHY_REQUEST_ERR: number;
                public static INDEX_SIZE_ERR: number;
                public static INUSE_ATTRIBUTE_ERR: number;
                public static INVALID_ACCESS_ERR: number;
                public static INVALID_CHARACTER_ERR: number;
                public static INVALID_MODIFICATION_ERR: number;
                public static INVALID_STATE_ERR: number;
                public static NAMESPACE_ERR: number;
                public static NOT_FOUND_ERR: number;
                public static NOT_SUPPORTED_ERR: number;
                public static NO_DATA_ALLOWED_ERR: number;
                public static NO_MODIFICATION_ALLOWED_ERR: number;
                public static SYNTAX_ERR: number;
                public static TYPE_MISMATCH_ERR: number;
                public static VALIDATION_ERR: number;
                public static WRONG_DOCUMENT_ERR: number;
                public code: number;

                public constructor(param0: javalangThrowable);
                public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                public constructor(param0: number, param1: string);
                public constructor(param0: string, param1: javalangThrowable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.Document.d.ts" />
/// <reference path="./org.w3c.dom.DocumentType.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export class DOMImplementation extends javalangObject {
                /**
                 * Constructs a new instance of the org.w3c.dom.DOMImplementation interface with the provided implementation.
                 */
                public constructor(implementation: {
                    hasFeature(param0: string, param1: string): boolean;
                    createDocumentType(param0: string, param1: string, param2: string): org.w3c.dom.DocumentType;
                    createDocument(param0: string, param1: string, param2: org.w3c.dom.DocumentType): org.w3c.dom.Document;
                    getFeature(param0: string, param1: string): javalangObject;
                });

                public createDocument(param0: string, param1: string, param2: org.w3c.dom.DocumentType): org.w3c.dom.Document;

                public getFeature(param0: string, param1: string): javalangObject;

                public hasFeature(param0: string, param1: string): boolean;

                public createDocumentType(param0: string, param1: string, param2: string): org.w3c.dom.DocumentType;
            }
        }
    }
}

/// <reference path="./org.w3c.dom.DOMImplementation.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export class DOMImplementationList extends javalangObject {
                /**
                 * Constructs a new instance of the org.w3c.dom.DOMImplementationList interface with the provided implementation.
                 */
                public constructor(implementation: {
                    item(param0: number): org.w3c.dom.DOMImplementation;
                    getLength(): number;
                });

                public item(param0: number): org.w3c.dom.DOMImplementation;

                public getLength(): number;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.DOMImplementation.d.ts" />
/// <reference path="./org.w3c.dom.DOMImplementationList.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export class DOMImplementationSource extends javalangObject {
                /**
                 * Constructs a new instance of the org.w3c.dom.DOMImplementationSource interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getDOMImplementation(param0: string): org.w3c.dom.DOMImplementation;
                    getDOMImplementationList(param0: string): org.w3c.dom.DOMImplementationList;
                });

                public getDOMImplementation(param0: string): org.w3c.dom.DOMImplementation;

                public getDOMImplementationList(param0: string): org.w3c.dom.DOMImplementationList;
            }
        }
    }
}

/// <reference path="./org.w3c.dom.Node.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export class DOMLocator extends javalangObject {
                /**
                 * Constructs a new instance of the org.w3c.dom.DOMLocator interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getLineNumber(): number;
                    getColumnNumber(): number;
                    getByteOffset(): number;
                    getUtf16Offset(): number;
                    getRelatedNode(): org.w3c.dom.Node;
                    getUri(): string;
                });

                public getLineNumber(): number;

                public getUri(): string;

                public getRelatedNode(): org.w3c.dom.Node;

                public getUtf16Offset(): number;

                public getByteOffset(): number;

                public getColumnNumber(): number;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export class DOMStringList extends javalangObject {
                /**
                 * Constructs a new instance of the org.w3c.dom.DOMStringList interface with the provided implementation.
                 */
                public constructor(implementation: {
                    item(param0: number): string;
                    getLength(): number;
                    contains(param0: string): boolean;
                });

                public contains(param0: string): boolean;

                public item(param0: number): string;

                public getLength(): number;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.Attr.d.ts" />
/// <reference path="./org.w3c.dom.CDATASection.d.ts" />
/// <reference path="./org.w3c.dom.Comment.d.ts" />
/// <reference path="./org.w3c.dom.DOMConfiguration.d.ts" />
/// <reference path="./org.w3c.dom.DOMImplementation.d.ts" />
/// <reference path="./org.w3c.dom.DocumentFragment.d.ts" />
/// <reference path="./org.w3c.dom.DocumentType.d.ts" />
/// <reference path="./org.w3c.dom.Element.d.ts" />
/// <reference path="./org.w3c.dom.EntityReference.d.ts" />
/// <reference path="./org.w3c.dom.NamedNodeMap.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />
/// <reference path="./org.w3c.dom.NodeList.d.ts" />
/// <reference path="./org.w3c.dom.ProcessingInstruction.d.ts" />
/// <reference path="./org.w3c.dom.Text.d.ts" />
/// <reference path="./org.w3c.dom.UserDataHandler.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export class Document extends javalangObject implements org.w3c.dom.Node {
                /**
                 * Constructs a new instance of the org.w3c.dom.Document interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getDoctype(): org.w3c.dom.DocumentType;
                    getImplementation(): org.w3c.dom.DOMImplementation;
                    getDocumentElement(): org.w3c.dom.Element;
                    createElement(param0: string): org.w3c.dom.Element;
                    createDocumentFragment(): org.w3c.dom.DocumentFragment;
                    createTextNode(param0: string): org.w3c.dom.Text;
                    createComment(param0: string): org.w3c.dom.Comment;
                    createCDATASection(param0: string): org.w3c.dom.CDATASection;
                    createProcessingInstruction(param0: string, param1: string): org.w3c.dom.ProcessingInstruction;
                    createAttribute(param0: string): org.w3c.dom.Attr;
                    createEntityReference(param0: string): org.w3c.dom.EntityReference;
                    getElementsByTagName(param0: string): org.w3c.dom.NodeList;
                    importNode(param0: org.w3c.dom.Node, param1: boolean): org.w3c.dom.Node;
                    createElementNS(param0: string, param1: string): org.w3c.dom.Element;
                    createAttributeNS(param0: string, param1: string): org.w3c.dom.Attr;
                    getElementsByTagNameNS(param0: string, param1: string): org.w3c.dom.NodeList;
                    getElementById(param0: string): org.w3c.dom.Element;
                    getInputEncoding(): string;
                    getXmlEncoding(): string;
                    getXmlStandalone(): boolean;
                    setXmlStandalone(param0: boolean): void;
                    getXmlVersion(): string;
                    setXmlVersion(param0: string): void;
                    getStrictErrorChecking(): boolean;
                    setStrictErrorChecking(param0: boolean): void;
                    getDocumentURI(): string;
                    setDocumentURI(param0: string): void;
                    adoptNode(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    getDomConfig(): org.w3c.dom.DOMConfiguration;
                    normalizeDocument(): void;
                    renameNode(param0: org.w3c.dom.Node, param1: string, param2: string): org.w3c.dom.Node;
                    getNodeName(): string;
                    getNodeValue(): string;
                    setNodeValue(param0: string): void;
                    getNodeType(): number;
                    getParentNode(): org.w3c.dom.Node;
                    getChildNodes(): org.w3c.dom.NodeList;
                    getFirstChild(): org.w3c.dom.Node;
                    getLastChild(): org.w3c.dom.Node;
                    getPreviousSibling(): org.w3c.dom.Node;
                    getNextSibling(): org.w3c.dom.Node;
                    getAttributes(): org.w3c.dom.NamedNodeMap;
                    getOwnerDocument(): org.w3c.dom.Document;
                    insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
                    replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
                    removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    hasChildNodes(): boolean;
                    cloneNode(param0: boolean): org.w3c.dom.Node;
                    normalize(): void;
                    isSupported(param0: string, param1: string): boolean;
                    getNamespaceURI(): string;
                    getPrefix(): string;
                    setPrefix(param0: string): void;
                    getLocalName(): string;
                    hasAttributes(): boolean;
                    getBaseURI(): string;
                    compareDocumentPosition(param0: org.w3c.dom.Node): number;
                    getTextContent(): string;
                    setTextContent(param0: string): void;
                    isSameNode(param0: org.w3c.dom.Node): boolean;
                    lookupPrefix(param0: string): string;
                    isDefaultNamespace(param0: string): boolean;
                    lookupNamespaceURI(param0: string): string;
                    isEqualNode(param0: org.w3c.dom.Node): boolean;
                    getFeature(param0: string, param1: string): javalangObject;
                    setUserData(param0: string, param1: javalangObject, param2: org.w3c.dom.UserDataHandler): javalangObject;
                    getUserData(param0: string): javalangObject;
                });

                public static DOCUMENT_FRAGMENT_NODE: number;
                public static DOCUMENT_TYPE_NODE: number;
                public static ELEMENT_NODE: number;
                public static DOCUMENT_POSITION_FOLLOWING: number;
                public static TEXT_NODE: number;
                public static ATTRIBUTE_NODE: number;
                public static DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
                public static ENTITY_REFERENCE_NODE: number;
                public static NOTATION_NODE: number;
                public static DOCUMENT_NODE: number;
                public static ENTITY_NODE: number;
                public static PROCESSING_INSTRUCTION_NODE: number;
                public static CDATA_SECTION_NODE: number;
                public static COMMENT_NODE: number;
                public static DOCUMENT_POSITION_CONTAINED_BY: number;
                public static DOCUMENT_POSITION_DISCONNECTED: number;
                public static DOCUMENT_POSITION_PRECEDING: number;
                public static DOCUMENT_POSITION_CONTAINS: number;

                public normalizeDocument(): void;

                public importNode(param0: org.w3c.dom.Node, param1: boolean): org.w3c.dom.Node;

                public getXmlEncoding(): string;

                public compareDocumentPosition(param0: org.w3c.dom.Node): number;

                public createDocumentFragment(): org.w3c.dom.DocumentFragment;

                public removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public setDocumentURI(param0: string): void;

                public getDomConfig(): org.w3c.dom.DOMConfiguration;

                public isDefaultNamespace(param0: string): boolean;

                public createCDATASection(param0: string): org.w3c.dom.CDATASection;

                public getDoctype(): org.w3c.dom.DocumentType;

                public getChildNodes(): org.w3c.dom.NodeList;

                public getElementsByTagNameNS(param0: string, param1: string): org.w3c.dom.NodeList;

                public normalize(): void;

                public getOwnerDocument(): org.w3c.dom.Document;

                public getNamespaceURI(): string;

                public getTextContent(): string;

                public createElementNS(param0: string, param1: string): org.w3c.dom.Element;

                public setPrefix(param0: string): void;

                public getNodeType(): number;

                public isSameNode(param0: org.w3c.dom.Node): boolean;

                public getElementById(param0: string): org.w3c.dom.Element;

                public setTextContent(param0: string): void;

                public getXmlStandalone(): boolean;

                public getAttributes(): org.w3c.dom.NamedNodeMap;

                public adoptNode(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public setXmlStandalone(param0: boolean): void;

                public createEntityReference(param0: string): org.w3c.dom.EntityReference;

                public getNodeValue(): string;

                public getXmlVersion(): string;

                public setStrictErrorChecking(param0: boolean): void;

                public getFirstChild(): org.w3c.dom.Node;

                public replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;

                public getUserData(param0: string): javalangObject;

                public getDocumentURI(): string;

                public lookupNamespaceURI(param0: string): string;

                public createComment(param0: string): org.w3c.dom.Comment;

                public getParentNode(): org.w3c.dom.Node;

                public getElementsByTagName(param0: string): org.w3c.dom.NodeList;

                public getInputEncoding(): string;

                public hasChildNodes(): boolean;

                public getImplementation(): org.w3c.dom.DOMImplementation;

                public lookupPrefix(param0: string): string;

                public getLocalName(): string;

                public getBaseURI(): string;

                public hasAttributes(): boolean;

                public setNodeValue(param0: string): void;

                public insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;

                public getDocumentElement(): org.w3c.dom.Element;

                public createAttributeNS(param0: string, param1: string): org.w3c.dom.Attr;

                public getPreviousSibling(): org.w3c.dom.Node;

                public getPrefix(): string;

                public setXmlVersion(param0: string): void;

                public appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public getLastChild(): org.w3c.dom.Node;

                public getFeature(param0: string, param1: string): javalangObject;

                public createAttribute(param0: string): org.w3c.dom.Attr;

                public setUserData(param0: string, param1: javalangObject, param2: org.w3c.dom.UserDataHandler): javalangObject;

                public createProcessingInstruction(param0: string, param1: string): org.w3c.dom.ProcessingInstruction;

                public getStrictErrorChecking(): boolean;

                public cloneNode(param0: boolean): org.w3c.dom.Node;

                public isEqualNode(param0: org.w3c.dom.Node): boolean;

                public createElement(param0: string): org.w3c.dom.Element;

                public createTextNode(param0: string): org.w3c.dom.Text;

                public getNextSibling(): org.w3c.dom.Node;

                public renameNode(param0: org.w3c.dom.Node, param1: string, param2: string): org.w3c.dom.Node;

                public getNodeName(): string;

                public isSupported(param0: string, param1: string): boolean;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.Document.d.ts" />
/// <reference path="./org.w3c.dom.NamedNodeMap.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />
/// <reference path="./org.w3c.dom.NodeList.d.ts" />
/// <reference path="./org.w3c.dom.UserDataHandler.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export class DocumentFragment extends javalangObject implements org.w3c.dom.Node {
                /**
                 * Constructs a new instance of the org.w3c.dom.DocumentFragment interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getNodeName(): string;
                    getNodeValue(): string;
                    setNodeValue(param0: string): void;
                    getNodeType(): number;
                    getParentNode(): org.w3c.dom.Node;
                    getChildNodes(): org.w3c.dom.NodeList;
                    getFirstChild(): org.w3c.dom.Node;
                    getLastChild(): org.w3c.dom.Node;
                    getPreviousSibling(): org.w3c.dom.Node;
                    getNextSibling(): org.w3c.dom.Node;
                    getAttributes(): org.w3c.dom.NamedNodeMap;
                    getOwnerDocument(): org.w3c.dom.Document;
                    insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
                    replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
                    removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    hasChildNodes(): boolean;
                    cloneNode(param0: boolean): org.w3c.dom.Node;
                    normalize(): void;
                    isSupported(param0: string, param1: string): boolean;
                    getNamespaceURI(): string;
                    getPrefix(): string;
                    setPrefix(param0: string): void;
                    getLocalName(): string;
                    hasAttributes(): boolean;
                    getBaseURI(): string;
                    compareDocumentPosition(param0: org.w3c.dom.Node): number;
                    getTextContent(): string;
                    setTextContent(param0: string): void;
                    isSameNode(param0: org.w3c.dom.Node): boolean;
                    lookupPrefix(param0: string): string;
                    isDefaultNamespace(param0: string): boolean;
                    lookupNamespaceURI(param0: string): string;
                    isEqualNode(param0: org.w3c.dom.Node): boolean;
                    getFeature(param0: string, param1: string): javalangObject;
                    setUserData(param0: string, param1: javalangObject, param2: org.w3c.dom.UserDataHandler): javalangObject;
                    getUserData(param0: string): javalangObject;
                });

                public static DOCUMENT_FRAGMENT_NODE: number;
                public static DOCUMENT_TYPE_NODE: number;
                public static ELEMENT_NODE: number;
                public static DOCUMENT_POSITION_FOLLOWING: number;
                public static TEXT_NODE: number;
                public static ATTRIBUTE_NODE: number;
                public static DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
                public static ENTITY_REFERENCE_NODE: number;
                public static NOTATION_NODE: number;
                public static DOCUMENT_NODE: number;
                public static ENTITY_NODE: number;
                public static PROCESSING_INSTRUCTION_NODE: number;
                public static CDATA_SECTION_NODE: number;
                public static COMMENT_NODE: number;
                public static DOCUMENT_POSITION_CONTAINED_BY: number;
                public static DOCUMENT_POSITION_DISCONNECTED: number;
                public static DOCUMENT_POSITION_PRECEDING: number;
                public static DOCUMENT_POSITION_CONTAINS: number;

                public compareDocumentPosition(param0: org.w3c.dom.Node): number;

                public hasChildNodes(): boolean;

                public removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public lookupPrefix(param0: string): string;

                public isDefaultNamespace(param0: string): boolean;

                public getLocalName(): string;

                public getChildNodes(): org.w3c.dom.NodeList;

                public getBaseURI(): string;

                public hasAttributes(): boolean;

                public normalize(): void;

                public getOwnerDocument(): org.w3c.dom.Document;

                public setNodeValue(param0: string): void;

                public getNamespaceURI(): string;

                public getTextContent(): string;

                public insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;

                public setPrefix(param0: string): void;

                public getNodeType(): number;

                public isSameNode(param0: org.w3c.dom.Node): boolean;

                public getPreviousSibling(): org.w3c.dom.Node;

                public getPrefix(): string;

                public setTextContent(param0: string): void;

                public getAttributes(): org.w3c.dom.NamedNodeMap;

                public appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public getNodeValue(): string;

                public getFirstChild(): org.w3c.dom.Node;

                public replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;

                public getLastChild(): org.w3c.dom.Node;

                public getUserData(param0: string): javalangObject;

                public getFeature(param0: string, param1: string): javalangObject;

                public setUserData(param0: string, param1: javalangObject, param2: org.w3c.dom.UserDataHandler): javalangObject;

                public cloneNode(param0: boolean): org.w3c.dom.Node;

                public isEqualNode(param0: org.w3c.dom.Node): boolean;

                public getNextSibling(): org.w3c.dom.Node;

                public lookupNamespaceURI(param0: string): string;

                public getNodeName(): string;

                public getParentNode(): org.w3c.dom.Node;

                public isSupported(param0: string, param1: string): boolean;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.Document.d.ts" />
/// <reference path="./org.w3c.dom.NamedNodeMap.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />
/// <reference path="./org.w3c.dom.NodeList.d.ts" />
/// <reference path="./org.w3c.dom.UserDataHandler.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export class DocumentType extends javalangObject implements org.w3c.dom.Node {
                /**
                 * Constructs a new instance of the org.w3c.dom.DocumentType interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getName(): string;
                    getEntities(): org.w3c.dom.NamedNodeMap;
                    getNotations(): org.w3c.dom.NamedNodeMap;
                    getPublicId(): string;
                    getSystemId(): string;
                    getInternalSubset(): string;
                    getNodeName(): string;
                    getNodeValue(): string;
                    setNodeValue(param0: string): void;
                    getNodeType(): number;
                    getParentNode(): org.w3c.dom.Node;
                    getChildNodes(): org.w3c.dom.NodeList;
                    getFirstChild(): org.w3c.dom.Node;
                    getLastChild(): org.w3c.dom.Node;
                    getPreviousSibling(): org.w3c.dom.Node;
                    getNextSibling(): org.w3c.dom.Node;
                    getAttributes(): org.w3c.dom.NamedNodeMap;
                    getOwnerDocument(): org.w3c.dom.Document;
                    insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
                    replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
                    removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    hasChildNodes(): boolean;
                    cloneNode(param0: boolean): org.w3c.dom.Node;
                    normalize(): void;
                    isSupported(param0: string, param1: string): boolean;
                    getNamespaceURI(): string;
                    getPrefix(): string;
                    setPrefix(param0: string): void;
                    getLocalName(): string;
                    hasAttributes(): boolean;
                    getBaseURI(): string;
                    compareDocumentPosition(param0: org.w3c.dom.Node): number;
                    getTextContent(): string;
                    setTextContent(param0: string): void;
                    isSameNode(param0: org.w3c.dom.Node): boolean;
                    lookupPrefix(param0: string): string;
                    isDefaultNamespace(param0: string): boolean;
                    lookupNamespaceURI(param0: string): string;
                    isEqualNode(param0: org.w3c.dom.Node): boolean;
                    getFeature(param0: string, param1: string): javalangObject;
                    setUserData(param0: string, param1: javalangObject, param2: org.w3c.dom.UserDataHandler): javalangObject;
                    getUserData(param0: string): javalangObject;
                });

                public static DOCUMENT_FRAGMENT_NODE: number;
                public static DOCUMENT_TYPE_NODE: number;
                public static ELEMENT_NODE: number;
                public static DOCUMENT_POSITION_FOLLOWING: number;
                public static TEXT_NODE: number;
                public static ATTRIBUTE_NODE: number;
                public static DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
                public static ENTITY_REFERENCE_NODE: number;
                public static NOTATION_NODE: number;
                public static DOCUMENT_NODE: number;
                public static ENTITY_NODE: number;
                public static PROCESSING_INSTRUCTION_NODE: number;
                public static CDATA_SECTION_NODE: number;
                public static COMMENT_NODE: number;
                public static DOCUMENT_POSITION_CONTAINED_BY: number;
                public static DOCUMENT_POSITION_DISCONNECTED: number;
                public static DOCUMENT_POSITION_PRECEDING: number;
                public static DOCUMENT_POSITION_CONTAINS: number;

                public compareDocumentPosition(param0: org.w3c.dom.Node): number;

                public hasChildNodes(): boolean;

                public removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public lookupPrefix(param0: string): string;

                public isDefaultNamespace(param0: string): boolean;

                public getLocalName(): string;

                public getChildNodes(): org.w3c.dom.NodeList;

                public getBaseURI(): string;

                public hasAttributes(): boolean;

                public getPublicId(): string;

                public normalize(): void;

                public getOwnerDocument(): org.w3c.dom.Document;

                public setNodeValue(param0: string): void;

                public getNamespaceURI(): string;

                public getSystemId(): string;

                public getTextContent(): string;

                public insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;

                public setPrefix(param0: string): void;

                public getInternalSubset(): string;

                public getNotations(): org.w3c.dom.NamedNodeMap;

                public getNodeType(): number;

                public isSameNode(param0: org.w3c.dom.Node): boolean;

                public getPreviousSibling(): org.w3c.dom.Node;

                public getPrefix(): string;

                public setTextContent(param0: string): void;

                public getAttributes(): org.w3c.dom.NamedNodeMap;

                public appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public getName(): string;

                public getNodeValue(): string;

                public getFirstChild(): org.w3c.dom.Node;

                public replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;

                public getLastChild(): org.w3c.dom.Node;

                public getUserData(param0: string): javalangObject;

                public getFeature(param0: string, param1: string): javalangObject;

                public setUserData(param0: string, param1: javalangObject, param2: org.w3c.dom.UserDataHandler): javalangObject;

                public cloneNode(param0: boolean): org.w3c.dom.Node;

                public isEqualNode(param0: org.w3c.dom.Node): boolean;

                public getNextSibling(): org.w3c.dom.Node;

                public lookupNamespaceURI(param0: string): string;

                public getEntities(): org.w3c.dom.NamedNodeMap;

                public getNodeName(): string;

                public getParentNode(): org.w3c.dom.Node;

                public isSupported(param0: string, param1: string): boolean;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.Attr.d.ts" />
/// <reference path="./org.w3c.dom.Document.d.ts" />
/// <reference path="./org.w3c.dom.NamedNodeMap.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />
/// <reference path="./org.w3c.dom.NodeList.d.ts" />
/// <reference path="./org.w3c.dom.TypeInfo.d.ts" />
/// <reference path="./org.w3c.dom.UserDataHandler.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export class Element extends javalangObject implements org.w3c.dom.Node {
                /**
                 * Constructs a new instance of the org.w3c.dom.Element interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getTagName(): string;
                    getAttribute(param0: string): string;
                    setAttribute(param0: string, param1: string): void;
                    removeAttribute(param0: string): void;
                    getAttributeNode(param0: string): org.w3c.dom.Attr;
                    setAttributeNode(param0: org.w3c.dom.Attr): org.w3c.dom.Attr;
                    removeAttributeNode(param0: org.w3c.dom.Attr): org.w3c.dom.Attr;
                    getElementsByTagName(param0: string): org.w3c.dom.NodeList;
                    getAttributeNS(param0: string, param1: string): string;
                    setAttributeNS(param0: string, param1: string, param2: string): void;
                    removeAttributeNS(param0: string, param1: string): void;
                    getAttributeNodeNS(param0: string, param1: string): org.w3c.dom.Attr;
                    setAttributeNodeNS(param0: org.w3c.dom.Attr): org.w3c.dom.Attr;
                    getElementsByTagNameNS(param0: string, param1: string): org.w3c.dom.NodeList;
                    hasAttribute(param0: string): boolean;
                    hasAttributeNS(param0: string, param1: string): boolean;
                    getSchemaTypeInfo(): org.w3c.dom.TypeInfo;
                    setIdAttribute(param0: string, param1: boolean): void;
                    setIdAttributeNS(param0: string, param1: string, param2: boolean): void;
                    setIdAttributeNode(param0: org.w3c.dom.Attr, param1: boolean): void;
                    getNodeName(): string;
                    getNodeValue(): string;
                    setNodeValue(param0: string): void;
                    getNodeType(): number;
                    getParentNode(): org.w3c.dom.Node;
                    getChildNodes(): org.w3c.dom.NodeList;
                    getFirstChild(): org.w3c.dom.Node;
                    getLastChild(): org.w3c.dom.Node;
                    getPreviousSibling(): org.w3c.dom.Node;
                    getNextSibling(): org.w3c.dom.Node;
                    getAttributes(): org.w3c.dom.NamedNodeMap;
                    getOwnerDocument(): org.w3c.dom.Document;
                    insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
                    replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
                    removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    hasChildNodes(): boolean;
                    cloneNode(param0: boolean): org.w3c.dom.Node;
                    normalize(): void;
                    isSupported(param0: string, param1: string): boolean;
                    getNamespaceURI(): string;
                    getPrefix(): string;
                    setPrefix(param0: string): void;
                    getLocalName(): string;
                    hasAttributes(): boolean;
                    getBaseURI(): string;
                    compareDocumentPosition(param0: org.w3c.dom.Node): number;
                    getTextContent(): string;
                    setTextContent(param0: string): void;
                    isSameNode(param0: org.w3c.dom.Node): boolean;
                    lookupPrefix(param0: string): string;
                    isDefaultNamespace(param0: string): boolean;
                    lookupNamespaceURI(param0: string): string;
                    isEqualNode(param0: org.w3c.dom.Node): boolean;
                    getFeature(param0: string, param1: string): javalangObject;
                    setUserData(param0: string, param1: javalangObject, param2: org.w3c.dom.UserDataHandler): javalangObject;
                    getUserData(param0: string): javalangObject;
                });

                public static DOCUMENT_FRAGMENT_NODE: number;
                public static DOCUMENT_TYPE_NODE: number;
                public static ELEMENT_NODE: number;
                public static DOCUMENT_POSITION_FOLLOWING: number;
                public static TEXT_NODE: number;
                public static ATTRIBUTE_NODE: number;
                public static DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
                public static ENTITY_REFERENCE_NODE: number;
                public static NOTATION_NODE: number;
                public static DOCUMENT_NODE: number;
                public static ENTITY_NODE: number;
                public static PROCESSING_INSTRUCTION_NODE: number;
                public static CDATA_SECTION_NODE: number;
                public static COMMENT_NODE: number;
                public static DOCUMENT_POSITION_CONTAINED_BY: number;
                public static DOCUMENT_POSITION_DISCONNECTED: number;
                public static DOCUMENT_POSITION_PRECEDING: number;
                public static DOCUMENT_POSITION_CONTAINS: number;

                public setAttributeNode(param0: org.w3c.dom.Attr): org.w3c.dom.Attr;

                public compareDocumentPosition(param0: org.w3c.dom.Node): number;

                public removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public isDefaultNamespace(param0: string): boolean;

                public removeAttributeNS(param0: string, param1: string): void;

                public getChildNodes(): org.w3c.dom.NodeList;

                public getElementsByTagNameNS(param0: string, param1: string): org.w3c.dom.NodeList;

                public normalize(): void;

                public getOwnerDocument(): org.w3c.dom.Document;

                public getNamespaceURI(): string;

                public getTextContent(): string;

                public setAttribute(param0: string, param1: string): void;

                public setPrefix(param0: string): void;

                public getNodeType(): number;

                public isSameNode(param0: org.w3c.dom.Node): boolean;

                public setIdAttribute(param0: string, param1: boolean): void;

                public setTextContent(param0: string): void;

                public getAttributes(): org.w3c.dom.NamedNodeMap;

                public setAttributeNodeNS(param0: org.w3c.dom.Attr): org.w3c.dom.Attr;

                public getAttributeNodeNS(param0: string, param1: string): org.w3c.dom.Attr;

                public getNodeValue(): string;

                public getFirstChild(): org.w3c.dom.Node;

                public replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;

                public getAttribute(param0: string): string;

                public getUserData(param0: string): javalangObject;

                public getAttributeNS(param0: string, param1: string): string;

                public getAttributeNode(param0: string): org.w3c.dom.Attr;

                public lookupNamespaceURI(param0: string): string;

                public getParentNode(): org.w3c.dom.Node;

                public getElementsByTagName(param0: string): org.w3c.dom.NodeList;

                public hasAttribute(param0: string): boolean;

                public hasChildNodes(): boolean;

                public lookupPrefix(param0: string): string;

                public getLocalName(): string;

                public getBaseURI(): string;

                public hasAttributes(): boolean;

                public setNodeValue(param0: string): void;

                public insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;

                public setAttributeNS(param0: string, param1: string, param2: string): void;

                public getPreviousSibling(): org.w3c.dom.Node;

                public getPrefix(): string;

                public setIdAttributeNS(param0: string, param1: string, param2: boolean): void;

                public setIdAttributeNode(param0: org.w3c.dom.Attr, param1: boolean): void;

                public appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public getSchemaTypeInfo(): org.w3c.dom.TypeInfo;

                public removeAttribute(param0: string): void;

                public getLastChild(): org.w3c.dom.Node;

                public getFeature(param0: string, param1: string): javalangObject;

                public setUserData(param0: string, param1: javalangObject, param2: org.w3c.dom.UserDataHandler): javalangObject;

                public cloneNode(param0: boolean): org.w3c.dom.Node;

                public isEqualNode(param0: org.w3c.dom.Node): boolean;

                public getNextSibling(): org.w3c.dom.Node;

                public removeAttributeNode(param0: org.w3c.dom.Attr): org.w3c.dom.Attr;

                public hasAttributeNS(param0: string, param1: string): boolean;

                public getTagName(): string;

                public getNodeName(): string;

                public isSupported(param0: string, param1: string): boolean;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.Document.d.ts" />
/// <reference path="./org.w3c.dom.NamedNodeMap.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />
/// <reference path="./org.w3c.dom.NodeList.d.ts" />
/// <reference path="./org.w3c.dom.UserDataHandler.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export class Entity extends javalangObject implements org.w3c.dom.Node {
                /**
                 * Constructs a new instance of the org.w3c.dom.Entity interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getPublicId(): string;
                    getSystemId(): string;
                    getNotationName(): string;
                    getInputEncoding(): string;
                    getXmlEncoding(): string;
                    getXmlVersion(): string;
                    getNodeName(): string;
                    getNodeValue(): string;
                    setNodeValue(param0: string): void;
                    getNodeType(): number;
                    getParentNode(): org.w3c.dom.Node;
                    getChildNodes(): org.w3c.dom.NodeList;
                    getFirstChild(): org.w3c.dom.Node;
                    getLastChild(): org.w3c.dom.Node;
                    getPreviousSibling(): org.w3c.dom.Node;
                    getNextSibling(): org.w3c.dom.Node;
                    getAttributes(): org.w3c.dom.NamedNodeMap;
                    getOwnerDocument(): org.w3c.dom.Document;
                    insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
                    replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
                    removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    hasChildNodes(): boolean;
                    cloneNode(param0: boolean): org.w3c.dom.Node;
                    normalize(): void;
                    isSupported(param0: string, param1: string): boolean;
                    getNamespaceURI(): string;
                    getPrefix(): string;
                    setPrefix(param0: string): void;
                    getLocalName(): string;
                    hasAttributes(): boolean;
                    getBaseURI(): string;
                    compareDocumentPosition(param0: org.w3c.dom.Node): number;
                    getTextContent(): string;
                    setTextContent(param0: string): void;
                    isSameNode(param0: org.w3c.dom.Node): boolean;
                    lookupPrefix(param0: string): string;
                    isDefaultNamespace(param0: string): boolean;
                    lookupNamespaceURI(param0: string): string;
                    isEqualNode(param0: org.w3c.dom.Node): boolean;
                    getFeature(param0: string, param1: string): javalangObject;
                    setUserData(param0: string, param1: javalangObject, param2: org.w3c.dom.UserDataHandler): javalangObject;
                    getUserData(param0: string): javalangObject;
                });

                public static DOCUMENT_FRAGMENT_NODE: number;
                public static DOCUMENT_TYPE_NODE: number;
                public static ELEMENT_NODE: number;
                public static DOCUMENT_POSITION_FOLLOWING: number;
                public static TEXT_NODE: number;
                public static ATTRIBUTE_NODE: number;
                public static DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
                public static ENTITY_REFERENCE_NODE: number;
                public static NOTATION_NODE: number;
                public static DOCUMENT_NODE: number;
                public static ENTITY_NODE: number;
                public static PROCESSING_INSTRUCTION_NODE: number;
                public static CDATA_SECTION_NODE: number;
                public static COMMENT_NODE: number;
                public static DOCUMENT_POSITION_CONTAINED_BY: number;
                public static DOCUMENT_POSITION_DISCONNECTED: number;
                public static DOCUMENT_POSITION_PRECEDING: number;
                public static DOCUMENT_POSITION_CONTAINS: number;

                public getInputEncoding(): string;

                public getXmlEncoding(): string;

                public compareDocumentPosition(param0: org.w3c.dom.Node): number;

                public hasChildNodes(): boolean;

                public removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public lookupPrefix(param0: string): string;

                public isDefaultNamespace(param0: string): boolean;

                public getLocalName(): string;

                public getChildNodes(): org.w3c.dom.NodeList;

                public getBaseURI(): string;

                public hasAttributes(): boolean;

                public getPublicId(): string;

                public normalize(): void;

                public getOwnerDocument(): org.w3c.dom.Document;

                public setNodeValue(param0: string): void;

                public getNamespaceURI(): string;

                public getSystemId(): string;

                public getTextContent(): string;

                public insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;

                public setPrefix(param0: string): void;

                public getNodeType(): number;

                public getNotationName(): string;

                public isSameNode(param0: org.w3c.dom.Node): boolean;

                public getPreviousSibling(): org.w3c.dom.Node;

                public getPrefix(): string;

                public setTextContent(param0: string): void;

                public getAttributes(): org.w3c.dom.NamedNodeMap;

                public appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public getNodeValue(): string;

                public getXmlVersion(): string;

                public getFirstChild(): org.w3c.dom.Node;

                public replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;

                public getLastChild(): org.w3c.dom.Node;

                public getUserData(param0: string): javalangObject;

                public getFeature(param0: string, param1: string): javalangObject;

                public setUserData(param0: string, param1: javalangObject, param2: org.w3c.dom.UserDataHandler): javalangObject;

                public cloneNode(param0: boolean): org.w3c.dom.Node;

                public isEqualNode(param0: org.w3c.dom.Node): boolean;

                public getNextSibling(): org.w3c.dom.Node;

                public lookupNamespaceURI(param0: string): string;

                public getNodeName(): string;

                public getParentNode(): org.w3c.dom.Node;

                public isSupported(param0: string, param1: string): boolean;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.Document.d.ts" />
/// <reference path="./org.w3c.dom.NamedNodeMap.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />
/// <reference path="./org.w3c.dom.NodeList.d.ts" />
/// <reference path="./org.w3c.dom.UserDataHandler.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export class EntityReference extends javalangObject implements org.w3c.dom.Node {
                /**
                 * Constructs a new instance of the org.w3c.dom.EntityReference interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getNodeName(): string;
                    getNodeValue(): string;
                    setNodeValue(param0: string): void;
                    getNodeType(): number;
                    getParentNode(): org.w3c.dom.Node;
                    getChildNodes(): org.w3c.dom.NodeList;
                    getFirstChild(): org.w3c.dom.Node;
                    getLastChild(): org.w3c.dom.Node;
                    getPreviousSibling(): org.w3c.dom.Node;
                    getNextSibling(): org.w3c.dom.Node;
                    getAttributes(): org.w3c.dom.NamedNodeMap;
                    getOwnerDocument(): org.w3c.dom.Document;
                    insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
                    replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
                    removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    hasChildNodes(): boolean;
                    cloneNode(param0: boolean): org.w3c.dom.Node;
                    normalize(): void;
                    isSupported(param0: string, param1: string): boolean;
                    getNamespaceURI(): string;
                    getPrefix(): string;
                    setPrefix(param0: string): void;
                    getLocalName(): string;
                    hasAttributes(): boolean;
                    getBaseURI(): string;
                    compareDocumentPosition(param0: org.w3c.dom.Node): number;
                    getTextContent(): string;
                    setTextContent(param0: string): void;
                    isSameNode(param0: org.w3c.dom.Node): boolean;
                    lookupPrefix(param0: string): string;
                    isDefaultNamespace(param0: string): boolean;
                    lookupNamespaceURI(param0: string): string;
                    isEqualNode(param0: org.w3c.dom.Node): boolean;
                    getFeature(param0: string, param1: string): javalangObject;
                    setUserData(param0: string, param1: javalangObject, param2: org.w3c.dom.UserDataHandler): javalangObject;
                    getUserData(param0: string): javalangObject;
                });

                public static DOCUMENT_FRAGMENT_NODE: number;
                public static DOCUMENT_TYPE_NODE: number;
                public static ELEMENT_NODE: number;
                public static DOCUMENT_POSITION_FOLLOWING: number;
                public static TEXT_NODE: number;
                public static ATTRIBUTE_NODE: number;
                public static DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
                public static ENTITY_REFERENCE_NODE: number;
                public static NOTATION_NODE: number;
                public static DOCUMENT_NODE: number;
                public static ENTITY_NODE: number;
                public static PROCESSING_INSTRUCTION_NODE: number;
                public static CDATA_SECTION_NODE: number;
                public static COMMENT_NODE: number;
                public static DOCUMENT_POSITION_CONTAINED_BY: number;
                public static DOCUMENT_POSITION_DISCONNECTED: number;
                public static DOCUMENT_POSITION_PRECEDING: number;
                public static DOCUMENT_POSITION_CONTAINS: number;

                public compareDocumentPosition(param0: org.w3c.dom.Node): number;

                public hasChildNodes(): boolean;

                public removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public lookupPrefix(param0: string): string;

                public isDefaultNamespace(param0: string): boolean;

                public getLocalName(): string;

                public getChildNodes(): org.w3c.dom.NodeList;

                public getBaseURI(): string;

                public hasAttributes(): boolean;

                public normalize(): void;

                public getOwnerDocument(): org.w3c.dom.Document;

                public setNodeValue(param0: string): void;

                public getNamespaceURI(): string;

                public getTextContent(): string;

                public insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;

                public setPrefix(param0: string): void;

                public getNodeType(): number;

                public isSameNode(param0: org.w3c.dom.Node): boolean;

                public getPreviousSibling(): org.w3c.dom.Node;

                public getPrefix(): string;

                public setTextContent(param0: string): void;

                public getAttributes(): org.w3c.dom.NamedNodeMap;

                public appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public getNodeValue(): string;

                public getFirstChild(): org.w3c.dom.Node;

                public replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;

                public getLastChild(): org.w3c.dom.Node;

                public getUserData(param0: string): javalangObject;

                public getFeature(param0: string, param1: string): javalangObject;

                public setUserData(param0: string, param1: javalangObject, param2: org.w3c.dom.UserDataHandler): javalangObject;

                public cloneNode(param0: boolean): org.w3c.dom.Node;

                public isEqualNode(param0: org.w3c.dom.Node): boolean;

                public getNextSibling(): org.w3c.dom.Node;

                public lookupNamespaceURI(param0: string): string;

                public getNodeName(): string;

                public getParentNode(): org.w3c.dom.Node;

                public isSupported(param0: string, param1: string): boolean;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export class NameList extends javalangObject {
                /**
                 * Constructs a new instance of the org.w3c.dom.NameList interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getName(param0: number): string;
                    getNamespaceURI(param0: number): string;
                    getLength(): number;
                    contains(param0: string): boolean;
                    containsNS(param0: string, param1: string): boolean;
                });

                public getName(param0: number): string;

                public contains(param0: string): boolean;

                public getNamespaceURI(param0: number): string;

                public containsNS(param0: string, param1: string): boolean;

                public getLength(): number;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export class NamedNodeMap extends javalangObject {
                /**
                 * Constructs a new instance of the org.w3c.dom.NamedNodeMap interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getNamedItem(param0: string): org.w3c.dom.Node;
                    setNamedItem(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    removeNamedItem(param0: string): org.w3c.dom.Node;
                    item(param0: number): org.w3c.dom.Node;
                    getLength(): number;
                    getNamedItemNS(param0: string, param1: string): org.w3c.dom.Node;
                    setNamedItemNS(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    removeNamedItemNS(param0: string, param1: string): org.w3c.dom.Node;
                });

                public item(param0: number): org.w3c.dom.Node;

                public setNamedItem(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public setNamedItemNS(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public removeNamedItemNS(param0: string, param1: string): org.w3c.dom.Node;

                public removeNamedItem(param0: string): org.w3c.dom.Node;

                public getNamedItemNS(param0: string, param1: string): org.w3c.dom.Node;

                public getLength(): number;

                public getNamedItem(param0: string): org.w3c.dom.Node;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.Document.d.ts" />
/// <reference path="./org.w3c.dom.NamedNodeMap.d.ts" />
/// <reference path="./org.w3c.dom.NodeList.d.ts" />
/// <reference path="./org.w3c.dom.UserDataHandler.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export class Node extends javalangObject {
                /**
                 * Constructs a new instance of the org.w3c.dom.Node interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getNodeName(): string;
                    getNodeValue(): string;
                    setNodeValue(param0: string): void;
                    getNodeType(): number;
                    getParentNode(): org.w3c.dom.Node;
                    getChildNodes(): org.w3c.dom.NodeList;
                    getFirstChild(): org.w3c.dom.Node;
                    getLastChild(): org.w3c.dom.Node;
                    getPreviousSibling(): org.w3c.dom.Node;
                    getNextSibling(): org.w3c.dom.Node;
                    getAttributes(): org.w3c.dom.NamedNodeMap;
                    getOwnerDocument(): org.w3c.dom.Document;
                    insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
                    replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
                    removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    hasChildNodes(): boolean;
                    cloneNode(param0: boolean): org.w3c.dom.Node;
                    normalize(): void;
                    isSupported(param0: string, param1: string): boolean;
                    getNamespaceURI(): string;
                    getPrefix(): string;
                    setPrefix(param0: string): void;
                    getLocalName(): string;
                    hasAttributes(): boolean;
                    getBaseURI(): string;
                    compareDocumentPosition(param0: org.w3c.dom.Node): number;
                    getTextContent(): string;
                    setTextContent(param0: string): void;
                    isSameNode(param0: org.w3c.dom.Node): boolean;
                    lookupPrefix(param0: string): string;
                    isDefaultNamespace(param0: string): boolean;
                    lookupNamespaceURI(param0: string): string;
                    isEqualNode(param0: org.w3c.dom.Node): boolean;
                    getFeature(param0: string, param1: string): javalangObject;
                    setUserData(param0: string, param1: javalangObject, param2: org.w3c.dom.UserDataHandler): javalangObject;
                    getUserData(param0: string): javalangObject;
                });

                public static DOCUMENT_FRAGMENT_NODE: number;
                public static DOCUMENT_TYPE_NODE: number;
                public static ELEMENT_NODE: number;
                public static DOCUMENT_POSITION_FOLLOWING: number;
                public static TEXT_NODE: number;
                public static ATTRIBUTE_NODE: number;
                public static DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
                public static ENTITY_REFERENCE_NODE: number;
                public static NOTATION_NODE: number;
                public static DOCUMENT_NODE: number;
                public static ENTITY_NODE: number;
                public static PROCESSING_INSTRUCTION_NODE: number;
                public static CDATA_SECTION_NODE: number;
                public static COMMENT_NODE: number;
                public static DOCUMENT_POSITION_CONTAINED_BY: number;
                public static DOCUMENT_POSITION_DISCONNECTED: number;
                public static DOCUMENT_POSITION_PRECEDING: number;
                public static DOCUMENT_POSITION_CONTAINS: number;

                public compareDocumentPosition(param0: org.w3c.dom.Node): number;

                public hasChildNodes(): boolean;

                public removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public lookupPrefix(param0: string): string;

                public isDefaultNamespace(param0: string): boolean;

                public getLocalName(): string;

                public getChildNodes(): org.w3c.dom.NodeList;

                public getBaseURI(): string;

                public hasAttributes(): boolean;

                public normalize(): void;

                public getOwnerDocument(): org.w3c.dom.Document;

                public setNodeValue(param0: string): void;

                public getNamespaceURI(): string;

                public getTextContent(): string;

                public insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;

                public setPrefix(param0: string): void;

                public getNodeType(): number;

                public isSameNode(param0: org.w3c.dom.Node): boolean;

                public getPreviousSibling(): org.w3c.dom.Node;

                public getPrefix(): string;

                public setTextContent(param0: string): void;

                public getAttributes(): org.w3c.dom.NamedNodeMap;

                public appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public getNodeValue(): string;

                public getFirstChild(): org.w3c.dom.Node;

                public replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;

                public getLastChild(): org.w3c.dom.Node;

                public getUserData(param0: string): javalangObject;

                public getFeature(param0: string, param1: string): javalangObject;

                public setUserData(param0: string, param1: javalangObject, param2: org.w3c.dom.UserDataHandler): javalangObject;

                public cloneNode(param0: boolean): org.w3c.dom.Node;

                public isEqualNode(param0: org.w3c.dom.Node): boolean;

                public getNextSibling(): org.w3c.dom.Node;

                public lookupNamespaceURI(param0: string): string;

                public getNodeName(): string;

                public getParentNode(): org.w3c.dom.Node;

                public isSupported(param0: string, param1: string): boolean;
            }
        }
    }
}

/// <reference path="./org.w3c.dom.Node.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export class NodeList extends javalangObject {
                /**
                 * Constructs a new instance of the org.w3c.dom.NodeList interface with the provided implementation.
                 */
                public constructor(implementation: {
                    item(param0: number): org.w3c.dom.Node;
                    getLength(): number;
                });

                public item(param0: number): org.w3c.dom.Node;

                public getLength(): number;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.Document.d.ts" />
/// <reference path="./org.w3c.dom.NamedNodeMap.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />
/// <reference path="./org.w3c.dom.NodeList.d.ts" />
/// <reference path="./org.w3c.dom.UserDataHandler.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export class Notation extends javalangObject implements org.w3c.dom.Node {
                /**
                 * Constructs a new instance of the org.w3c.dom.Notation interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getPublicId(): string;
                    getSystemId(): string;
                    getNodeName(): string;
                    getNodeValue(): string;
                    setNodeValue(param0: string): void;
                    getNodeType(): number;
                    getParentNode(): org.w3c.dom.Node;
                    getChildNodes(): org.w3c.dom.NodeList;
                    getFirstChild(): org.w3c.dom.Node;
                    getLastChild(): org.w3c.dom.Node;
                    getPreviousSibling(): org.w3c.dom.Node;
                    getNextSibling(): org.w3c.dom.Node;
                    getAttributes(): org.w3c.dom.NamedNodeMap;
                    getOwnerDocument(): org.w3c.dom.Document;
                    insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
                    replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
                    removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    hasChildNodes(): boolean;
                    cloneNode(param0: boolean): org.w3c.dom.Node;
                    normalize(): void;
                    isSupported(param0: string, param1: string): boolean;
                    getNamespaceURI(): string;
                    getPrefix(): string;
                    setPrefix(param0: string): void;
                    getLocalName(): string;
                    hasAttributes(): boolean;
                    getBaseURI(): string;
                    compareDocumentPosition(param0: org.w3c.dom.Node): number;
                    getTextContent(): string;
                    setTextContent(param0: string): void;
                    isSameNode(param0: org.w3c.dom.Node): boolean;
                    lookupPrefix(param0: string): string;
                    isDefaultNamespace(param0: string): boolean;
                    lookupNamespaceURI(param0: string): string;
                    isEqualNode(param0: org.w3c.dom.Node): boolean;
                    getFeature(param0: string, param1: string): javalangObject;
                    setUserData(param0: string, param1: javalangObject, param2: org.w3c.dom.UserDataHandler): javalangObject;
                    getUserData(param0: string): javalangObject;
                });

                public static DOCUMENT_FRAGMENT_NODE: number;
                public static DOCUMENT_TYPE_NODE: number;
                public static ELEMENT_NODE: number;
                public static DOCUMENT_POSITION_FOLLOWING: number;
                public static TEXT_NODE: number;
                public static ATTRIBUTE_NODE: number;
                public static DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
                public static ENTITY_REFERENCE_NODE: number;
                public static NOTATION_NODE: number;
                public static DOCUMENT_NODE: number;
                public static ENTITY_NODE: number;
                public static PROCESSING_INSTRUCTION_NODE: number;
                public static CDATA_SECTION_NODE: number;
                public static COMMENT_NODE: number;
                public static DOCUMENT_POSITION_CONTAINED_BY: number;
                public static DOCUMENT_POSITION_DISCONNECTED: number;
                public static DOCUMENT_POSITION_PRECEDING: number;
                public static DOCUMENT_POSITION_CONTAINS: number;

                public compareDocumentPosition(param0: org.w3c.dom.Node): number;

                public hasChildNodes(): boolean;

                public removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public lookupPrefix(param0: string): string;

                public isDefaultNamespace(param0: string): boolean;

                public getLocalName(): string;

                public getChildNodes(): org.w3c.dom.NodeList;

                public getBaseURI(): string;

                public hasAttributes(): boolean;

                public getPublicId(): string;

                public normalize(): void;

                public getOwnerDocument(): org.w3c.dom.Document;

                public setNodeValue(param0: string): void;

                public getNamespaceURI(): string;

                public getSystemId(): string;

                public getTextContent(): string;

                public insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;

                public setPrefix(param0: string): void;

                public getNodeType(): number;

                public isSameNode(param0: org.w3c.dom.Node): boolean;

                public getPreviousSibling(): org.w3c.dom.Node;

                public getPrefix(): string;

                public setTextContent(param0: string): void;

                public getAttributes(): org.w3c.dom.NamedNodeMap;

                public appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public getNodeValue(): string;

                public getFirstChild(): org.w3c.dom.Node;

                public replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;

                public getLastChild(): org.w3c.dom.Node;

                public getUserData(param0: string): javalangObject;

                public getFeature(param0: string, param1: string): javalangObject;

                public setUserData(param0: string, param1: javalangObject, param2: org.w3c.dom.UserDataHandler): javalangObject;

                public cloneNode(param0: boolean): org.w3c.dom.Node;

                public isEqualNode(param0: org.w3c.dom.Node): boolean;

                public getNextSibling(): org.w3c.dom.Node;

                public lookupNamespaceURI(param0: string): string;

                public getNodeName(): string;

                public getParentNode(): org.w3c.dom.Node;

                public isSupported(param0: string, param1: string): boolean;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.Document.d.ts" />
/// <reference path="./org.w3c.dom.NamedNodeMap.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />
/// <reference path="./org.w3c.dom.NodeList.d.ts" />
/// <reference path="./org.w3c.dom.UserDataHandler.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export class ProcessingInstruction extends javalangObject implements org.w3c.dom.Node {
                /**
                 * Constructs a new instance of the org.w3c.dom.ProcessingInstruction interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getTarget(): string;
                    getData(): string;
                    setData(param0: string): void;
                    getNodeName(): string;
                    getNodeValue(): string;
                    setNodeValue(param0: string): void;
                    getNodeType(): number;
                    getParentNode(): org.w3c.dom.Node;
                    getChildNodes(): org.w3c.dom.NodeList;
                    getFirstChild(): org.w3c.dom.Node;
                    getLastChild(): org.w3c.dom.Node;
                    getPreviousSibling(): org.w3c.dom.Node;
                    getNextSibling(): org.w3c.dom.Node;
                    getAttributes(): org.w3c.dom.NamedNodeMap;
                    getOwnerDocument(): org.w3c.dom.Document;
                    insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
                    replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
                    removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    hasChildNodes(): boolean;
                    cloneNode(param0: boolean): org.w3c.dom.Node;
                    normalize(): void;
                    isSupported(param0: string, param1: string): boolean;
                    getNamespaceURI(): string;
                    getPrefix(): string;
                    setPrefix(param0: string): void;
                    getLocalName(): string;
                    hasAttributes(): boolean;
                    getBaseURI(): string;
                    compareDocumentPosition(param0: org.w3c.dom.Node): number;
                    getTextContent(): string;
                    setTextContent(param0: string): void;
                    isSameNode(param0: org.w3c.dom.Node): boolean;
                    lookupPrefix(param0: string): string;
                    isDefaultNamespace(param0: string): boolean;
                    lookupNamespaceURI(param0: string): string;
                    isEqualNode(param0: org.w3c.dom.Node): boolean;
                    getFeature(param0: string, param1: string): javalangObject;
                    setUserData(param0: string, param1: javalangObject, param2: org.w3c.dom.UserDataHandler): javalangObject;
                    getUserData(param0: string): javalangObject;
                });

                public static DOCUMENT_FRAGMENT_NODE: number;
                public static DOCUMENT_TYPE_NODE: number;
                public static ELEMENT_NODE: number;
                public static DOCUMENT_POSITION_FOLLOWING: number;
                public static TEXT_NODE: number;
                public static ATTRIBUTE_NODE: number;
                public static DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
                public static ENTITY_REFERENCE_NODE: number;
                public static NOTATION_NODE: number;
                public static DOCUMENT_NODE: number;
                public static ENTITY_NODE: number;
                public static PROCESSING_INSTRUCTION_NODE: number;
                public static CDATA_SECTION_NODE: number;
                public static COMMENT_NODE: number;
                public static DOCUMENT_POSITION_CONTAINED_BY: number;
                public static DOCUMENT_POSITION_DISCONNECTED: number;
                public static DOCUMENT_POSITION_PRECEDING: number;
                public static DOCUMENT_POSITION_CONTAINS: number;

                public compareDocumentPosition(param0: org.w3c.dom.Node): number;

                public setData(param0: string): void;

                public hasChildNodes(): boolean;

                public removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public lookupPrefix(param0: string): string;

                public isDefaultNamespace(param0: string): boolean;

                public getLocalName(): string;

                public getChildNodes(): org.w3c.dom.NodeList;

                public getBaseURI(): string;

                public hasAttributes(): boolean;

                public normalize(): void;

                public getOwnerDocument(): org.w3c.dom.Document;

                public setNodeValue(param0: string): void;

                public getNamespaceURI(): string;

                public getTextContent(): string;

                public insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;

                public setPrefix(param0: string): void;

                public getNodeType(): number;

                public isSameNode(param0: org.w3c.dom.Node): boolean;

                public getPreviousSibling(): org.w3c.dom.Node;

                public getPrefix(): string;

                public setTextContent(param0: string): void;

                public getTarget(): string;

                public getAttributes(): org.w3c.dom.NamedNodeMap;

                public appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public getNodeValue(): string;

                public getFirstChild(): org.w3c.dom.Node;

                public replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;

                public getLastChild(): org.w3c.dom.Node;

                public getUserData(param0: string): javalangObject;

                public getFeature(param0: string, param1: string): javalangObject;

                public setUserData(param0: string, param1: javalangObject, param2: org.w3c.dom.UserDataHandler): javalangObject;

                public getData(): string;

                public cloneNode(param0: boolean): org.w3c.dom.Node;

                public isEqualNode(param0: org.w3c.dom.Node): boolean;

                public getNextSibling(): org.w3c.dom.Node;

                public lookupNamespaceURI(param0: string): string;

                public getNodeName(): string;

                public getParentNode(): org.w3c.dom.Node;

                public isSupported(param0: string, param1: string): boolean;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.Document.d.ts" />
/// <reference path="./org.w3c.dom.NamedNodeMap.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />
/// <reference path="./org.w3c.dom.NodeList.d.ts" />
/// <reference path="./org.w3c.dom.UserDataHandler.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export class Text extends javalangObject implements org.w3c.dom.CharacterData {
                /**
                 * Constructs a new instance of the org.w3c.dom.Text interface with the provided implementation.
                 */
                public constructor(implementation: {
                    splitText(param0: number): org.w3c.dom.Text;
                    isElementContentWhitespace(): boolean;
                    getWholeText(): string;
                    replaceWholeText(param0: string): org.w3c.dom.Text;
                    getData(): string;
                    setData(param0: string): void;
                    getLength(): number;
                    substringData(param0: number, param1: number): string;
                    appendData(param0: string): void;
                    insertData(param0: number, param1: string): void;
                    deleteData(param0: number, param1: number): void;
                    replaceData(param0: number, param1: number, param2: string): void;
                    getNodeName(): string;
                    getNodeValue(): string;
                    setNodeValue(param0: string): void;
                    getNodeType(): number;
                    getParentNode(): org.w3c.dom.Node;
                    getChildNodes(): org.w3c.dom.NodeList;
                    getFirstChild(): org.w3c.dom.Node;
                    getLastChild(): org.w3c.dom.Node;
                    getPreviousSibling(): org.w3c.dom.Node;
                    getNextSibling(): org.w3c.dom.Node;
                    getAttributes(): org.w3c.dom.NamedNodeMap;
                    getOwnerDocument(): org.w3c.dom.Document;
                    insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
                    replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;
                    removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;
                    hasChildNodes(): boolean;
                    cloneNode(param0: boolean): org.w3c.dom.Node;
                    normalize(): void;
                    isSupported(param0: string, param1: string): boolean;
                    getNamespaceURI(): string;
                    getPrefix(): string;
                    setPrefix(param0: string): void;
                    getLocalName(): string;
                    hasAttributes(): boolean;
                    getBaseURI(): string;
                    compareDocumentPosition(param0: org.w3c.dom.Node): number;
                    getTextContent(): string;
                    setTextContent(param0: string): void;
                    isSameNode(param0: org.w3c.dom.Node): boolean;
                    lookupPrefix(param0: string): string;
                    isDefaultNamespace(param0: string): boolean;
                    lookupNamespaceURI(param0: string): string;
                    isEqualNode(param0: org.w3c.dom.Node): boolean;
                    getFeature(param0: string, param1: string): javalangObject;
                    setUserData(param0: string, param1: javalangObject, param2: org.w3c.dom.UserDataHandler): javalangObject;
                    getUserData(param0: string): javalangObject;
                });

                public static DOCUMENT_FRAGMENT_NODE: number;
                public static DOCUMENT_TYPE_NODE: number;
                public static ELEMENT_NODE: number;
                public static DOCUMENT_POSITION_FOLLOWING: number;
                public static TEXT_NODE: number;
                public static ATTRIBUTE_NODE: number;
                public static DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
                public static ENTITY_REFERENCE_NODE: number;
                public static NOTATION_NODE: number;
                public static DOCUMENT_NODE: number;
                public static ENTITY_NODE: number;
                public static PROCESSING_INSTRUCTION_NODE: number;
                public static CDATA_SECTION_NODE: number;
                public static COMMENT_NODE: number;
                public static DOCUMENT_POSITION_CONTAINED_BY: number;
                public static DOCUMENT_POSITION_DISCONNECTED: number;
                public static DOCUMENT_POSITION_PRECEDING: number;
                public static DOCUMENT_POSITION_CONTAINS: number;

                public compareDocumentPosition(param0: org.w3c.dom.Node): number;

                public splitText(param0: number): org.w3c.dom.Text;

                public removeChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public getWholeText(): string;

                public isDefaultNamespace(param0: string): boolean;

                public appendData(param0: string): void;

                public getChildNodes(): org.w3c.dom.NodeList;

                public normalize(): void;

                public getOwnerDocument(): org.w3c.dom.Document;

                public getNamespaceURI(): string;

                public getTextContent(): string;

                public setPrefix(param0: string): void;

                public getNodeType(): number;

                public isSameNode(param0: org.w3c.dom.Node): boolean;

                public setTextContent(param0: string): void;

                public getAttributes(): org.w3c.dom.NamedNodeMap;

                public getNodeValue(): string;

                public getFirstChild(): org.w3c.dom.Node;

                public replaceChild(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;

                public getUserData(param0: string): javalangObject;

                public lookupNamespaceURI(param0: string): string;

                public getParentNode(): org.w3c.dom.Node;

                public setData(param0: string): void;

                public hasChildNodes(): boolean;

                public isElementContentWhitespace(): boolean;

                public lookupPrefix(param0: string): string;

                public replaceWholeText(param0: string): org.w3c.dom.Text;

                public getLocalName(): string;

                public substringData(param0: number, param1: number): string;

                public getBaseURI(): string;

                public hasAttributes(): boolean;

                public replaceData(param0: number, param1: number, param2: string): void;

                public setNodeValue(param0: string): void;

                public insertBefore(param0: org.w3c.dom.Node, param1: org.w3c.dom.Node): org.w3c.dom.Node;

                public getPreviousSibling(): org.w3c.dom.Node;

                public getPrefix(): string;

                public insertData(param0: number, param1: string): void;

                public appendChild(param0: org.w3c.dom.Node): org.w3c.dom.Node;

                public getLength(): number;

                public getLastChild(): org.w3c.dom.Node;

                public getFeature(param0: string, param1: string): javalangObject;

                public setUserData(param0: string, param1: javalangObject, param2: org.w3c.dom.UserDataHandler): javalangObject;

                public getData(): string;

                public cloneNode(param0: boolean): org.w3c.dom.Node;

                public isEqualNode(param0: org.w3c.dom.Node): boolean;

                public getNextSibling(): org.w3c.dom.Node;

                public deleteData(param0: number, param1: number): void;

                public getNodeName(): string;

                public isSupported(param0: string, param1: string): boolean;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export class TypeInfo extends javalangObject {
                /**
                 * Constructs a new instance of the org.w3c.dom.TypeInfo interface with the provided implementation.
                 */
                public constructor(implementation: {
                    getTypeName(): string;
                    getTypeNamespace(): string;
                    isDerivedFrom(param0: string, param1: string, param2: number): boolean;
                });

                public static DERIVATION_RESTRICTION: number;
                public static DERIVATION_LIST: number;
                public static DERIVATION_UNION: number;
                public static DERIVATION_EXTENSION: number;

                public getTypeName(): string;

                public getTypeNamespace(): string;

                public isDerivedFrom(param0: string, param1: string, param2: number): boolean;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export class UserDataHandler extends javalangObject {
                /**
                 * Constructs a new instance of the org.w3c.dom.UserDataHandler interface with the provided implementation.
                 */
                public constructor(implementation: {
                    handle(param0: number, param1: string, param2: javalangObject, param3: org.w3c.dom.Node, param4: org.w3c.dom.Node): void;
                });

                public static NODE_DELETED: number;
                public static NODE_RENAMED: number;
                public static NODE_ADOPTED: number;
                public static NODE_IMPORTED: number;
                public static NODE_CLONED: number;

                public handle(param0: number, param1: string, param2: javalangObject, param3: org.w3c.dom.Node, param4: org.w3c.dom.Node): void;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.ls.LSInput.d.ts" />
/// <reference path="./org.w3c.dom.ls.LSOutput.d.ts" />
/// <reference path="./org.w3c.dom.ls.LSParser.d.ts" />
/// <reference path="./org.w3c.dom.ls.LSSerializer.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export module ls {
                export class DOMImplementationLS extends javalangObject {
                    /**
                     * Constructs a new instance of the org.w3c.dom.ls.DOMImplementationLS interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        createLSParser(param0: number, param1: string): org.w3c.dom.ls.LSParser;
                        createLSSerializer(): org.w3c.dom.ls.LSSerializer;
                        createLSInput(): org.w3c.dom.ls.LSInput;
                        createLSOutput(): org.w3c.dom.ls.LSOutput;
                    });

                    public static MODE_SYNCHRONOUS: number;
                    public static MODE_ASYNCHRONOUS: number;

                    public createLSInput(): org.w3c.dom.ls.LSInput;

                    public createLSParser(param0: number, param1: string): org.w3c.dom.ls.LSParser;

                    public createLSOutput(): org.w3c.dom.ls.LSOutput;

                    public createLSSerializer(): org.w3c.dom.ls.LSSerializer;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export module ls {
                export class LSException extends javalangRuntimeException {
                    public static PARSE_ERR: number;
                    public static SERIALIZE_ERR: number;
                    public code: number;

                    public constructor(param0: string, param1: javalangThrowable);
                    public constructor(param0: string);
                    public constructor();
                    public constructor(param0: string, param1: javalangThrowable, param2: boolean, param3: boolean);
                    public constructor(param0: javalangThrowable);
                    public constructor(param0: number, param1: string);
                }
            }
        }
    }
}

/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export module ls {
                export class LSInput extends javalangObject {
                    /**
                     * Constructs a new instance of the org.w3c.dom.ls.LSInput interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        getCharacterStream(): javaioReader;
                        setCharacterStream(param0: javaioReader): void;
                        getByteStream(): javaioInputStream;
                        setByteStream(param0: javaioInputStream): void;
                        getStringData(): string;
                        setStringData(param0: string): void;
                        getSystemId(): string;
                        setSystemId(param0: string): void;
                        getPublicId(): string;
                        setPublicId(param0: string): void;
                        getBaseURI(): string;
                        setBaseURI(param0: string): void;
                        getEncoding(): string;
                        setEncoding(param0: string): void;
                        getCertifiedText(): boolean;
                        setCertifiedText(param0: boolean): void;
                    });

                    public getCharacterStream(): javaioReader;

                    public setEncoding(param0: string): void;

                    public setStringData(param0: string): void;

                    public getPublicId(): string;

                    public getEncoding(): string;

                    public setPublicId(param0: string): void;

                    public getCertifiedText(): boolean;

                    public getBaseURI(): string;

                    public getStringData(): string;

                    public setCertifiedText(param0: boolean): void;

                    public getByteStream(): javaioInputStream;

                    public setBaseURI(param0: string): void;

                    public setCharacterStream(param0: javaioReader): void;

                    public setByteStream(param0: javaioInputStream): void;

                    public getSystemId(): string;

                    public setSystemId(param0: string): void;
                }
            }
        }
    }
}

/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.io.Writer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export module ls {
                export class LSOutput extends javalangObject {
                    /**
                     * Constructs a new instance of the org.w3c.dom.ls.LSOutput interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        getCharacterStream(): javaioWriter;
                        setCharacterStream(param0: javaioWriter): void;
                        getByteStream(): javaioOutputStream;
                        setByteStream(param0: javaioOutputStream): void;
                        getSystemId(): string;
                        setSystemId(param0: string): void;
                        getEncoding(): string;
                        setEncoding(param0: string): void;
                    });

                    public setCharacterStream(param0: javaioWriter): void;

                    public setEncoding(param0: string): void;

                    public getEncoding(): string;

                    public getCharacterStream(): javaioWriter;

                    public setByteStream(param0: javaioOutputStream): void;

                    public getByteStream(): javaioOutputStream;

                    public getSystemId(): string;

                    public setSystemId(param0: string): void;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.DOMConfiguration.d.ts" />
/// <reference path="./org.w3c.dom.Document.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />
/// <reference path="./org.w3c.dom.ls.LSInput.d.ts" />
/// <reference path="./org.w3c.dom.ls.LSParserFilter.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export module ls {
                export class LSParser extends javalangObject {
                    /**
                     * Constructs a new instance of the org.w3c.dom.ls.LSParser interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        getDomConfig(): org.w3c.dom.DOMConfiguration;
                        getFilter(): org.w3c.dom.ls.LSParserFilter;
                        setFilter(param0: org.w3c.dom.ls.LSParserFilter): void;
                        getAsync(): boolean;
                        getBusy(): boolean;
                        parse(param0: org.w3c.dom.ls.LSInput): org.w3c.dom.Document;
                        parseURI(param0: string): org.w3c.dom.Document;
                        parseWithContext(param0: org.w3c.dom.ls.LSInput, param1: org.w3c.dom.Node, param2: number): org.w3c.dom.Node;
                        abort(): void;
                    });

                    public static ACTION_REPLACE_CHILDREN: number;
                    public static ACTION_INSERT_AFTER: number;
                    public static ACTION_INSERT_BEFORE: number;
                    public static ACTION_APPEND_AS_CHILDREN: number;
                    public static ACTION_REPLACE: number;

                    public setFilter(param0: org.w3c.dom.ls.LSParserFilter): void;

                    public parse(param0: org.w3c.dom.ls.LSInput): org.w3c.dom.Document;

                    public getAsync(): boolean;

                    public getDomConfig(): org.w3c.dom.DOMConfiguration;

                    public getBusy(): boolean;

                    public getFilter(): org.w3c.dom.ls.LSParserFilter;

                    public parseWithContext(param0: org.w3c.dom.ls.LSInput, param1: org.w3c.dom.Node, param2: number): org.w3c.dom.Node;

                    public abort(): void;

                    public parseURI(param0: string): org.w3c.dom.Document;
                }
            }
        }
    }
}

/// <reference path="./org.w3c.dom.Element.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export module ls {
                export class LSParserFilter extends javalangObject {
                    /**
                     * Constructs a new instance of the org.w3c.dom.ls.LSParserFilter interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        startElement(param0: org.w3c.dom.Element): number;
                        acceptNode(param0: org.w3c.dom.Node): number;
                        getWhatToShow(): number;
                    });

                    public static FILTER_ACCEPT: number;
                    public static FILTER_REJECT: number;
                    public static FILTER_INTERRUPT: number;
                    public static FILTER_SKIP: number;

                    public acceptNode(param0: org.w3c.dom.Node): number;

                    public getWhatToShow(): number;

                    public startElement(param0: org.w3c.dom.Element): number;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.ls.LSInput.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export module ls {
                export class LSResourceResolver extends javalangObject {
                    /**
                     * Constructs a new instance of the org.w3c.dom.ls.LSResourceResolver interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        resolveResource(param0: string, param1: string, param2: string, param3: string, param4: string): org.w3c.dom.ls.LSInput;
                    });

                    public resolveResource(param0: string, param1: string, param2: string, param3: string, param4: string): org.w3c.dom.ls.LSInput;
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.DOMConfiguration.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />
/// <reference path="./org.w3c.dom.ls.LSOutput.d.ts" />
declare module org {
    export module w3c {
        export module dom {
            export module ls {
                export class LSSerializer extends javalangObject {
                    /**
                     * Constructs a new instance of the org.w3c.dom.ls.LSSerializer interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        getDomConfig(): org.w3c.dom.DOMConfiguration;
                        getNewLine(): string;
                        setNewLine(param0: string): void;
                        write(param0: org.w3c.dom.Node, param1: org.w3c.dom.ls.LSOutput): boolean;
                        writeToURI(param0: org.w3c.dom.Node, param1: string): boolean;
                        writeToString(param0: org.w3c.dom.Node): string;
                    });

                    public writeToURI(param0: org.w3c.dom.Node, param1: string): boolean;

                    public setNewLine(param0: string): void;

                    public writeToString(param0: org.w3c.dom.Node): string;

                    public getNewLine(): string;

                    public write(param0: org.w3c.dom.Node, param1: org.w3c.dom.ls.LSOutput): boolean;

                    public getDomConfig(): org.w3c.dom.DOMConfiguration;
                }
            }
        }
    }
}
