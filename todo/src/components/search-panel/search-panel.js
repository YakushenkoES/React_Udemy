import React, {Component} from 'react';
import './search-panel.css';

export default class SearchPanel extends Component{
    state={
        searchStr:""
    }
    onChangeSearchStr = (e)=>{
        const searchStr = e.target.value;
        this.setState({
                searchStr
            }
        );
        this.props.onChange(searchStr);
    };
    render(){
        const searchText = 'Type here to search';
        return (
            <input
                className="form-control search-input"
                placeholder={searchText}
                onChange={this.onChangeSearchStr}
                value={this.state.searchStr}
            />
        );
    }
    
};
