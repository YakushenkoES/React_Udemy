import React, {Component} from 'react';

export default class ErrorButton extends Component{
    state={throwError: false}
    render(){
        if(this.state.throwError){
            this.foo.foo = 1;
        }
        return <button onClick={()=>this.setState({throwError: true})}>Error</button>
    }
}
