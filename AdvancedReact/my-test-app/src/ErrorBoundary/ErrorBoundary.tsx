import { Component, ErrorInfo } from 'react';
interface Props {
    children?: React.ReactNode;
}
interface State {
    hasError: boolean;
}
export default class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };
    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true };
    }
    public static componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error: ', error, errorInfo);
    }
    public render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>;
        }
        return this.props.children;
    }
}
