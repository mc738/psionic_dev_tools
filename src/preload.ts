// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import {contextBridge, ipcRenderer} from "electron";
import IpcRendererEvent = Electron.IpcRendererEvent;

contextBridge.exposeInMainWorld(
    "api",
    {
        send: (channel: string, data: unknown[]) => {
            const validChannels = ['toMain'];
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            }
        },
        receive: (channel: string, func: any) => {
            const validChannels = ['fromMain'];
            if (validChannels.includes(channel)) {
                // Deliberately strip event as it includes `sender`
                ipcRenderer.on(channel, (event: IpcRendererEvent, ...args: unknown[]) => func(...args));
            }
        }
    }
)

declare global {
    interface Window {
        api: any;
    }
}
