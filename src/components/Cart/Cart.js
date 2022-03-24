import React from 'react';
import Order from '../Order/Order';
import './Cart.css';
const Cart = ({orders, deleteItem}) => {
    return (
        <div className='orders'>
            <p className='orders-heading'>Orders</p>
            <hr />
            {
                orders.map(order=> <Order key={order.idMeal} order={order} deleteItem={deleteItem}></Order>)
            }
        </div>
    );
};

export default Cart;