import React from "react";

interface JsonViewerBooleanPropertyProps {
    propertyKey: string
    value: boolean
}

export function JsonViewerBooleanProperty({ propertyKey, value }: JsonViewerBooleanPropertyProps) {
    return <div><span className="font-bold">{propertyKey}</span>: {value ? 'true' : 'false'}</div>;
}