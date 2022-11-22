import React, {ErrorInfo, PropsWithChildren} from "react";
import {DialogContent, DialogContentText} from "@mui/material";

interface IProps {
    children?: React.ReactNode;
}

export class EditCarDialogContentErrorBoundary extends React.Component<IProps> {
    state: {
        hasError: boolean
    }

    constructor(props: PropsWithChildren) {
        super(props)

        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error: Error) {

        return {hasError: true}
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log({error, errorInfo})
    }

    render() {
        if (this.state.hasError) {
            return (
                <DialogContent>
                    <DialogContentText>Sorry, something went wrong :(</DialogContentText>
                </DialogContent>
            )
        }

        return this.props.children;
    }
}
