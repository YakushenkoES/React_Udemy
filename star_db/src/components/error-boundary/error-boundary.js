import React from 'react';
import ErrorIndicator from '../error-indicator';

class ErrorBoundary extends React.Component {
    state={
        hasError: false
    }
    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }
    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;