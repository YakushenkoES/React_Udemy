import React, { Component } from "react";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from '../error-indicator';


import "./people-page.css";
export default class PeoplePage extends Component {

    state={
        selectedPerson: 4,
        hasError: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };
    componentDidCatch(error, info){
        this.setState({hasError:true});
    }

    render() {
        if(this.state.hasError){
            return <ErrorIndicator/>;
        }
        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onItemSelected} />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
                
            </div>
        );
    }
}
