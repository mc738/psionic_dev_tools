import React from "react";

interface JsonViewerUndefinedPropertyProps {
    propertyKey: string
}

export function JsonViewerUndefinedProperty({propertyKey}: JsonViewerUndefinedPropertyProps) {
    return <div><span className="font-bold">{propertyKey}</span>: <span className="text-muted italic">undefined</span></div>;
}