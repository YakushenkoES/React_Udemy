import React, { Component } from "react";
import SwapiServise from "../../services/swapi";
import Spinner from "../../components/spinner";
import ErrorIndicator from '../../components/error-indicator';
import ErrorButton from '../error-button';
import "./person-details.css";


const PersonDetailsInfo = (props)=>{
    
    if (!props.person) {
        return <span>Select a person from List!</span>;
    }
    const { name, gender, birthYear, eyeColor , id} = props.person;
    return(
        <React.Fragment>
            <img
                    className="person-image"
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                />

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                    <ErrorButton />
                </div>
        </React.Fragment>
    );
}

export default class PersonDetails extends Component {
    state = {
        person: null,
        loading: false,
        error:false
    };
    swapi = new SwapiServise();

    componentDidMount() {
        this.updatePerson();
    }
    updatePerson() {
        this.setState({loading:true, error:false});
        const {personId} = this.props;
        if (!personId) {
            return;
        }
        this.swapi.getPerson(personId).then(person => {
            this.setState({
                person,
                loading:false,
                error:false
            });
        }).catch(()=>{
            this.setState({
                person: null,
                loading:false,
                error:true
            });
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.personId!==prevProps.personId){
            this.updatePerson();
        }
    }

    render() {
        const {error, loading,  person } = this.state;
        

        return (
            <div className="person-details card">
                {error? <ErrorIndicator/>:loading?<Spinner/>:<PersonDetailsInfo person={person}/>}
            </div>
        );
    }
}

