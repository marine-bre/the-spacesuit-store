import {useContext} from 'react';
import { Item, CartContext } from "../Contexts.tsx"

function CartItem({ item }) {
    const { items, addItem } = useContext(CartContext) 
    let {name, price, quantity, url} = item

    const remove = () => {
        quantity--
        console.log(quantity)
        if (quantity === 0) {
            // setItems(items.filter(el => el.name !== name))
        }
        else {
            let newItem = { name, price, url, quantity };
            modifyItems(newItem)
        }
    }


    const add = () => {
        quantity++
        let newItem = { name, price, url, quantity }
        addItem(newItem)
        // modifyItems(newItem)
    }

    const modifyItems = (item) => {
        let i = items.findIndex(el => el.name === name)
        let newArr = [...items]
        newArr[i] = item
        addItem(item)
        // setItems(newArr)
    }

    return (
        <div className="cart--item--container">
            <img src={url} alt="small thumbnail of product" />
            <div className="cart--item--right">
                <h3>§{price}K</h3>
                <h2>{name}</h2>
                <div className="item--bottom-section">
                    <div className="cart--qty"    >
                        <div className="plus" onClick={remove}> - </div>
                        <div className="qty"> {quantity} </div>
                        <div className="minus" onClick={add}> + </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;