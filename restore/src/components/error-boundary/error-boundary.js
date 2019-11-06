import React,{Component} from 'react';
import ErrorIndicator from '../error-indicator';
export default class ErrorBoundary extends Component{
    state={error: false};
    componentDidCatch(){
        this.setState({error:true});
    }

    render(){
        const error = this.state.error;
        const content = this.props.children;
        return error?<ErrorIndicator/>: content;
    }
}