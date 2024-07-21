import React from "react";
import {JsonViewerProperty} from "./json-viewer-property";

interface JsonViewerProps {
    data: object
}

export function JsonViewer({data}: JsonViewerProps) {

    const d = data as any;

    return (
        <div className="font-mono">
            {
                Object.keys(d).map((key, i) => {
                    return <JsonViewerProperty key={i} propertyKey={key} value={d[key]}/>;
                })
            }
        </div>
    )

}