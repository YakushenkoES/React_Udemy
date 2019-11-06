import React from 'react';
import './shopping-cart-table.css';

const ShoppingCartTable = ()=>{
    return(
        <div className="shopping-cart-table">
            <h2>Your order</h2>
            <table className="table">
                <thead>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </thead>

                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Винни пух</td>
                    <td>2</td>
                    <td>$23</td>
                    <td>
                        <button className="btn btn-outline-danger btn-small">
                            <i className="fa fa-trash-o"/>
                        </button>
                        <button className="btn btn-outline-success btn-small">
                            <i className="fa fa-plus-circle"/>
                        </button>
                        <button className="btn btn-outline-warning btn-small">
                            <i className="fa fa-minus-circle"/>
                        </button>
                    </td>
                    </tr>
                    
                </tbody>
            </table>
            <div className="total">
                Total: 222$
            </div>
        </div>
    );
};

export default ShoppingCartTable;