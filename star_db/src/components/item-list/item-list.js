import React from "react";
import PropTypes from "prop-types";
import "./item-list.css";

const ItemList = (props) => {
    const { data, onItemSelected, children: renderLabel } = props;

    const items = data.map((item) => {
        if (!item) {
            return null;
        }
        const { id } = item;
        return (
            <li
                className="list-group-item"
                key={"" + id + +Date.now() + Math.random()}
                onClick={() => onItemSelected(id)}
            >
                {renderLabel(item)}
            </li>
        );
    });

    return <ul className="item-list list-group">{items}</ul>;
};

ItemList.defaultProps = {
    onItemSelected: () => {}
};
ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
};

export default ItemList;
