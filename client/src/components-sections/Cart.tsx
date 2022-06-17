import {useContext} from 'react';
import CartItem from './CartItem'
import { Item, CartContext } from "../Contexts"


function Cart(setShowCart: any) {
    
    const { items } = useContext(CartContext) 
    const total : Number= items.length > 0 ? items.map((el:Item) => el.price * el.quantity).reduce((acc, cv) => acc + cv, 0) : 0

    return (
        <div className="cart">
            <div className="cart--top">
                <h2>MY BASKET {items.length > 0 ? ` - ${items.length} items` : ""}</h2>
                </div>
                <div className="cart--items">
                    {items.map(el => <CartItem item={el}/>)}
                </div>
            <div className="cart--bottom">
                <div className="cart--total">
                    <h2>{`Total: § ${total} ${total > 0 ? `K` : ""}`}</h2>
                </div>
                <div style={{display:"flex"}}>
                    <button className="cart--btn">CHECKOUT</button>
                    <button className="cart--btn" onClick={() => setShowCart(false)}>CLOSE</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;