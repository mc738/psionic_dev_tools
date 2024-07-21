import React from "react";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "./ui/collapsible";
import {JsonViewerProperty} from "./json-viewer-property";

interface JsonViewerObjectPropertyProps {
    propertyKey: string
    value: any
}

export function JsonViewerObjectProperty({propertyKey, value}: JsonViewerObjectPropertyProps) {
    return (
        <Collapsible
            className="w-[350px] space-y-2"
        >
            <CollapsibleTrigger asChild>
                <div><span className="font-bold">{propertyKey}</span>: <span
                    className="text-muted-foreground">&#123;&#125;</span></div>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <div className="pl-4">
                    {Object.keys(value).map((key, i) => {
                        return <JsonViewerProperty key={i} propertyKey={key} value={value[key]}/>;
                    })}
                </div>
            </CollapsibleContent>
        </Collapsible>
    );
}