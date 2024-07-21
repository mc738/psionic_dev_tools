import React from "react";
import {JsonViewerProperty} from "./json-viewer-property";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "./ui/collapsible";

interface JsonViewerBooleanPropertyProps {
    propertyKey: string
    value: any[]
}

export function JsonViewerArrayProperty({propertyKey, value}: JsonViewerBooleanPropertyProps) {
    return (
        <Collapsible
            className="w-[350px] space-y-2"
        >
            <CollapsibleTrigger asChild>
                <div><span className="font-bold">{propertyKey}</span>: <span
                    className="text-muted-foreground">&#91;&#93;</span></div>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <div className="pl-4">
                    {(value as unknown as any[]).map((item, i) => {
                        return (
                            <JsonViewerProperty key={i} propertyKey={i.toString()} value={item}/>
                        )
                    })}
                </div>
            </CollapsibleContent>
        </Collapsible>
    );
}