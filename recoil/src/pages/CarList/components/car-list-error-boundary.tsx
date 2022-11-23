import React, {ErrorInfo, PropsWithChildren} from "react";

interface IProps {
    children?: React.ReactNode;
}

export class CarListErrorBoundary extends React.Component<IProps> {
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
                <p>Sorry, something went wrong :(</p>
            )
        }

        return this.props.children;
    }
}
