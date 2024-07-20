import {TooltipProvider} from "./ui/tooltip";
import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "./ui/resizable";
import React from "react";
import {cn} from "../lib/utils";
import {Nav} from "./nav";
import {AlertCircle, Archive, MessagesSquare, ShoppingCart, Users2} from "lucide-react";
import dialog = Electron.dialog;
import * as path from "node:path";

import fs from "node:fs/promises";

interface ExplorerProps {
    defaultLayout: number[]
    defaultCollapsed?: boolean
    navCollapsedSize: number
}

const loadFile = () => {

    dialog.showOpenDialog({
        title: "Explorer",
        defaultPath: path.join("~", ""),
        buttonLabel: "Load",
        filters: [
            {
                name: "JSON Files",
                extensions: ["json"],
            }
        ],
        properties: []
    }).then(file =>
    {
        fs.readFile(file.filePaths[0]).then((data) => {

            console.log(data);
        })
    })

    return ""
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
                    <Nav
                        isCollapsed={isCollapsed}
                        links={[
                            {
                                title: "Social",
                                label: "972",
                                icon: Users2,
                                variant: "ghost",
                            },
                            {
                                title: "Updates",
                                label: "342",
                                icon: AlertCircle,
                                variant: "ghost",
                            },
                            {
                                title: "Forums",
                                label: "128",
                                icon: MessagesSquare,
                                variant: "ghost",
                            },
                            {
                                title: "Shopping",
                                label: "8",
                                icon: ShoppingCart,
                                variant: "ghost",
                            },
                            {
                                title: "Promotions",
                                label: "21",
                                icon: Archive,
                                variant: "ghost",
                            },
                        ]}
                    />

                </ResizablePanel>
                <ResizableHandle withHandle/>
                <ResizablePanel defaultSize={defaultLayout[1]}>
                    <button onClick={loadFile}>lo</button>
                </ResizablePanel>
            </ResizablePanelGroup>
        </TooltipProvider>
    );
}