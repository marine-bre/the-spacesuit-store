import React from 'react';
import CartItem from './CartItem'

function Cart({ items, setItems }) {

    let total = items.length>0? items.map(el => el.price * el.quantity).reduce((acc, cv) => acc + cv, 0) : 0
    
    return (
        <div className="cart">

<div className="cart--top">
            <h2>MY BASKET {items.length > 0 ? ` - ${items.length} items` : ""}</h2>
            <div className="cart--items">
                {items.map(el => <CartItem name={el.name} price={el.price} url={el.url} quantity={el.quantity} total={total} setItems={setItems} items={items} />)}
            </div>
            </div>
            <div className="cart--bottom">
            <div className="cart--total">
                <h2>Total: </h2>
                <h2>§ {total} {total > 0 ? `K` : ""}</h2>
            </div>
            <button className="cart--btn">CHECKOUT</button>
            </div>
        </div>
    );
}

export default Cart;