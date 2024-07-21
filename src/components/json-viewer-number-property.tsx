import React from "react";

interface JsonViewerStringPropertyProps {
    propertyKey: string
    value: number
}

export function JsonViewerNumberProperty({ propertyKey, value }: JsonViewerStringPropertyProps) {
    return <div><span className="font-bold">{propertyKey}</span>: {value}</div>;
}