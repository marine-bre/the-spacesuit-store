import React from 'react'
import CartItem from './CartItem'
import { Item, CartContext, CartUIContext } from "../Contexts"


function Cart() {

    const { items } = React.useContext(CartContext) 
    const { setCartState } = React.useContext(CartUIContext) 

    const totalPrice : Number = items.length > 0 ? items.map((el:Item) => el.price * el.quantity).reduce((acc, cv) => acc + cv, 0) : 0
    const totalItems : Number = items.reduce((cv, acc) => acc.quantity + cv,0)

    return (
        <div className="cart">
            <div className="cart--top">
                <h2>MY BASKET {totalItems > 0 ? ` : ${totalItems} items` : ""}</h2>
                </div>
                <div className="cart--items">
                    {items.map((el:Item) => <CartItem item={el}/>)}
                </div>
            <div className="cart--bottom">
                <div className="cart--total">
                    <h2>{`Total: § ${totalPrice} ${totalPrice > 0 ? `K` : ""}`}</h2>
                </div>
                <div style={{display:"flex"}}>
                    <button className="cart--btn">CHECKOUT</button>
                    <button className="cart--btn" onClick={() => setCartState(false)}>CLOSE</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;