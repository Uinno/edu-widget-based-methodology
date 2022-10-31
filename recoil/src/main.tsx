import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "./routes";
import {RecoilRoot} from "recoil";
import {RecoilDebugger} from "./utils/recoil-debugger";
import {RecoilSync} from "recoil-sync";

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // <React.StrictMode>
    <RecoilRoot>
        <RecoilSync>
            <RecoilDebugger/>
            <RouterProvider router={router}/>
        </RecoilSync>
    </RecoilRoot>
    // </React.StrictMode>
)
