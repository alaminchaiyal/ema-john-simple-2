import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <p><b>Order Summery</b></p>
            <p>Selected Items: {cart.length}</p>
        </div>
    );
};

export default Cart;