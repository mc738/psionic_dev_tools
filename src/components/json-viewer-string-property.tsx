import React from "react";

interface JsonViewerStringPropertyProps {
    propertyKey: string
    value: string
}

export function JsonViewerStringProperty({ propertyKey, value }: JsonViewerStringPropertyProps) {
    return <div><span className="font-bold">{propertyKey}</span>: "{value}"</div>;
}