import React from "react";
import "./item-list.css";


const ItemList = (props)=> {
    
    const {data, onItemSelected, children: renderLabel} = props;

    const items = data.map((item) => {
        if(!item){
            return null;
        }
            const { id } = item;
            return (
                <li className="list-group-item" key={id} onClick={() => onItemSelected(id)}>
                    {renderLabel(item)}
                </li>
            );
        });
    
    return (<ul className="item-list list-group">{items}</ul>);
}
export default ItemList;

