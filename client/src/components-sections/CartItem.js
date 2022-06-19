import {useContext} from 'react';
import { Item, CartContext } from "../Contexts.tsx"

function CartItem({ item }) {
    const { increaseItem, decreaseItem } = useContext(CartContext) 
    let {name, price, quantity, url, id} = item

    return (
        <div className="cart--item--container">
            <img src={url} alt="small thumbnail of product" />
            <div className="cart--item--right">
                <h3>§{price}K</h3>
                <h2>{name}</h2>
                <div className="item--bottom-section">
                    <div className="cart--qty"    >
                        <div className="plus" onClick={() => decreaseItem(item)}> - </div>
                        <div className="qty"> {quantity} </div>
                        <div className="minus" onClick={() => increaseItem(item)}> + </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;