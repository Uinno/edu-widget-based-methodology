'use client'

import {PropsWithChildren} from "react";
import {RecoilRoot} from "recoil";
import {RecoilDebugger} from "./RecoilDebugger";

export const RecoilRootProvider = ({children}: PropsWithChildren) => {

    return (
        <RecoilRoot>
            <RecoilDebugger/>
            {children}
        </RecoilRoot>
    )
}
