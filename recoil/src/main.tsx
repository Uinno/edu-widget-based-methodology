import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "./routes";
import {RecoilRoot} from "recoil";
import {RecoilDebugger} from "./utils/recoilDebugger";

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // <React.StrictMode>
    <RecoilRoot>
        <RecoilDebugger/>
        <RouterProvider router={router}/>
    </RecoilRoot>
    // </React.StrictMode>
)
