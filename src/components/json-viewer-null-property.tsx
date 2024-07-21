import React from "react";

interface JsonViewerNullPropertyProps {
    propertyKey: string
}

export function JsonViewerNullProperty({ propertyKey }: JsonViewerNullPropertyProps) {
    return <div><span className="font-bold">{propertyKey}</span>: <span className="text-muted italic">null</span></div>;
}