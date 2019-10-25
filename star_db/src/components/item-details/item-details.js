import React, { Component } from "react";
import "./item-details.css";

import SwapiServise from "../../services/swapi";
import Spinner from "../../components/spinner";
import ErrorIndicator from "../../components/error-indicator";
import ErrorButton from "../error-button";

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};
export { Record };

const ItemDetailsInfo = (props) => {
    if (!props.item) {
        return <span>Select a item from List!</span>;
    }
    const { item, image } = props;
    return (
        <React.Fragment>
            <img className="item-image" src={image} />

            <div className="card-body">
                <h4>{item.name}</h4>
                <ul className="list-group list-group-flush">{React.Children.map(props.children, (ch) => {
                    const newCh = React.cloneElement(ch, {item});
                    return newCh;
                })}</ul>
                <ErrorButton />
            </div>
        </React.Fragment>
    );
};

export default class ItemDetails extends Component {
    state = {
        item: null,
        loading: false,
        error: false,
        image: null
    };
    swapi = new SwapiServise();

    componentDidMount() {
        this.updateItem();
    }
    updateItem() {
        this.setState({ loading: true, error: false });
        const { itemId, getData, getImageUrl } = this.props;

        if (!itemId) {
            this.setState({
                item: null,
                loading: false,
                error: true,
                image: null
            });
            return;
        }
        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    loading: false,
                    error: false,
                    image: getImageUrl(item)
                });
            })
            .catch(() => {
                this.setState({
                    item: null,
                    loading: false,
                    error: true,
                    image: null
                });
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    render() {
        const { error, loading, item, image } = this.state;

        return (
            <div className="item-details card">
                {error ? (
                    <ErrorIndicator />
                ) : loading ? (
                    <Spinner />
                ) : (
                    <ItemDetailsInfo item={item} image={image}>
                        {this.props.children}
                    </ItemDetailsInfo>
                )}
            </div>
        );
    }
}
