import './index.css';

import * as React from 'react';
import { createRoot} from "react-dom/client";
import {Explorer} from "./components/explorer";

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <div className="h-dvh w-full">
            <Explorer defaultLayout={[265, 440, 655]} navCollapsedSize={4}/>
        </div>
    </React.StrictMode>
)