import React from "react";
import { connect } from "react-redux";

import { bookAddedToCart, bookDecreaseInCart, bookDeleteInCart } from "../../actions";
import "./shopping-cart-table.css";

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    const renderRow = (_item, ind) => {
        const { id, title, count, total } = _item;
        return (
            <tr key={id}>
                <td>{ind + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button className="btn btn-outline-success btn-small" onClick={() => onIncrease(id)}>
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button className="btn btn-outline-warning btn-small" onClick={() => onDecrease(id)}>
                        <i className="fa fa-minus-circle" />
                    </button>
                    <button className="btn btn-outline-danger btn-small" onClick={() => onDelete(id)}>
                        <i className="fa fa-trash-o" />
                    </button>
                </td>
            </tr>
        );
    };
    return (
        <div className="shopping-cart-table">
            <h2>Your order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{items.map(renderRow)}</tbody>
            </table>
            <div className="total">Total: {total}$</div>
        </div>
    );
};

const mapStateToProps = ({shoppingCart:{ cartItems, orderTotal }}) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};
// const mapDispatchToProps=(dispatch)=>{
//     return{
//         onIncrease:(id)=>{
//             dispatch(bookIncreaseInCart(id));
//         },
//         onDecrease:(id)=>{
//             dispatch(bookDecreaseInCart(id));
//         },
//         onDelete:(id)=>{
//             dispatch(bookDeleteInCart(id));
//         }
//     }
// }
const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookDecreaseInCart,
    onDelete: bookDeleteInCart
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
