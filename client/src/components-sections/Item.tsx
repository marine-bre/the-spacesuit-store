import React from 'react';
import { Item, CartContext, CartUIContext } from "../Contexts"

const ItemComponent = ({ item } : {item:Item}) => {

    let {name, price, quantity, url, id} = item
    const { items, increaseItem } = React.useContext(CartContext)
    const { setCartState } = React.useContext(CartUIContext)

    const handleClick = () => {
        setCartState(true)
        increaseItem(item)
        // setTimeout(() => setCartState(false), 5000)
    }

    return (

        <div className="card">
            <div className="img--frame">
                <img src={url} alt={name} />
            </div>
            <div className="card--textbox">
                <h2>§ {price} K</h2>
                <h1>{name}</h1>
            </div>
            <button className="card--btn" onClick={handleClick}>ADD</button>
        </div>
    )
}

export default ItemComponent;