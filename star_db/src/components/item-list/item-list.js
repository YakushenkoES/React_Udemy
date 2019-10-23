import React, { Component } from "react";
import SwapiService from "../../services/swapi";
import Spinner from '../../components/spinner';
import "./item-list.css";
 
export default class ItemList extends Component {
    swapi = new SwapiService();
    state = {
        peopleList: null
    };

    componentDidMount() {
        this.swapi.getAllPeople().then(peopleList => {
            this.setState({ peopleList });
        });
    }

    

    render() {
        const { peopleList } = this.state;
        const items = peopleList
            ? peopleList.map((p) => {
                  return (
                      <li className="list-group-item" key={p.id} onClick = { () => this.props.onItemSelected(p.id)}>
                          {p.name}
                      </li> 
                  );
              })
            : <Spinner/>;
        return <ul className="item-list list-group">{items}</ul>;
    }
}
