"use client"

import React, {ErrorInfo, PropsWithChildren} from "react";
import {EditCarDialogErrorPlaceholder} from "./EditCarDialogErrorPlaceholder";

interface IProps {
    children?: React.ReactNode;
}

export class EditCarDialogErrorBoundary extends React.Component<IProps> {
    state: {
        hasError: boolean
    }

    constructor(props: PropsWithChildren) {
        super(props)

        this.state = { hasError: false }
    }
    static getDerivedStateFromError(error: Error) {

        return { hasError: true }
    }
    componentDidCatch(error: Error, errorInfo:ErrorInfo ) {
        console.log({ error, errorInfo })
    }

    render() {
        if(this.state.hasError){
            return (<EditCarDialogErrorPlaceholder/>)
        }

        return this.props.children;
    }
}
