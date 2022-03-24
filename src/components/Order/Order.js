import React from 'react';
import './Order.css';

const Order = ({order, deleteItem}) => {
    const {strMeal,quantity} = order;
    return (
        <div className='order'>
            <p><span>{quantity}</span>{strMeal} <button onClick={()=>deleteItem(order)}>-</button></p>
        </div>
    );
};

export default Order;