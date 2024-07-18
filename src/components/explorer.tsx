import {TooltipProvider} from "./ui/tooltip";
import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "./ui/resizable";
import React from "react";
import {cn} from "../lib/utils";

interface ExplorerProps {
    defaultLayout: number[]
    defaultCollapsed?: boolean
    navCollapsedSize: number
}


export function Explorer(
    {
        defaultLayout = [265, 1084],
        defaultCollapsed = false,
        navCollapsedSize

    }: ExplorerProps) {
    const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
    //const [message] = useMessage()

    return (
        <TooltipProvider delayDuration={0}>
            <ResizablePanelGroup
                direction="horizontal"
                onLayout={(sizes: number[]) => {
                    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
                }}
                className="h-full items-stretch">
                <ResizablePanel
                    defaultSize={defaultLayout[0]}
                    collapsedSize={navCollapsedSize}
                    collapsible={true}
                    minSize={15}
                    maxSize={20}
                    onCollapse={() => {
                        setIsCollapsed(true)
                        document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)}`;
                    }}
                    onExpand={() => {
                        setIsCollapsed(false)
                        document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(false)}`;
                    }}
                    className={cn(
                        isCollapsed &&
                        "min-w-[50px] transition-all duration-300 ease-in-out"
                    )}
                >

                </ResizablePanel>
                <ResizableHandle withHandle/>
                <ResizablePanel defaultSize={defaultLayout[1]}>
                </ResizablePanel>
            </ResizablePanelGroup>
        </TooltipProvider>
    );
}