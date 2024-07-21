import React from "react";
import {JsonViewerStringProperty} from "./json-viewer-string-property";
import {JsonViewerNumberProperty} from "./json-viewer-number-property";
import {JsonViewerBooleanProperty} from "./json-viewer-boolean-property";
import {JsonViewerNullProperty} from "./json-viewer-null-property";
import {JsonViewerUndefinedProperty} from "./json-viewer-undefined-property";
import {JsonViewerArrayProperty} from "./json-viewer-array-property";
import {JsonViewerObjectProperty} from "./json-viewer-object-property";

interface JsonViewerPropertyProps {
    propertyKey: string
    value: any
}

enum ValueType {
    String = "string",
    Number = "number",
    Boolean = "bool",
    Object = "object",
    Array = "array",
    Undefined = "undefined",
    Null = "null",
}

const getValueType = (value: any) => {
    if (typeof value === "object") {
        if (value.constructor === Object) {
            return ValueType.Object;
        } else if (value.constructor === Array) {
            return ValueType.Array;
        }
    } else if (typeof value === "string") {
        return ValueType.String;
    } else if (typeof value === "number") {
        return ValueType.Number;
    } else if (typeof value === "boolean") {
        return ValueType.Boolean;
    } else if (value === null) {
        return ValueType.Null;
    } else {
        return ValueType.Undefined;
    }
};

export function JsonViewerProperty({propertyKey, value}: JsonViewerPropertyProps) {
    const valueType = getValueType(value);

    const result = () => {
        switch (valueType) {
            case "object":
                return <JsonViewerObjectProperty propertyKey={propertyKey} value={value}/>
            case "array":
                return <JsonViewerArrayProperty propertyKey={propertyKey} value={value as unknown as any[]}/>
            case "string":
                return <JsonViewerStringProperty propertyKey={propertyKey} value={value as unknown as string}/>;
            case "number":
                return <JsonViewerNumberProperty propertyKey={propertyKey} value={value as unknown as number}/>;
            case "bool":
                return <JsonViewerBooleanProperty propertyKey={propertyKey} value={value as unknown as boolean}/>;
            case "null":
                return <JsonViewerNullProperty propertyKey={propertyKey}/>;
            case "undefined":
                return <JsonViewerUndefinedProperty propertyKey={propertyKey}/>;
        }
    }

    return (result());
}