import {useContext} from 'react';
import { Item, CartContext } from "../Contexts"

const ItemComponent = ({ item, setShowCart } : {item:Item, setShowCart: any}) => {

    let {name, price, quantity, url, id} = item
    const { items, addItem, increaseQuantity } = useContext(CartContext)

    const handleClick = () => {
        //check if item is already in cart item list
        // if (items.some(el => el.name === name)) {
        //     let i = items.findIndex(el => el.name === name)
        //     quantity = items[i].quantity + 1
        //     let newItem = { name, price, url, quantity };
        //     let newArr = [...items]
        //     newArr[i] = newItem
        //     setItems(newArr)
        //     console.log(items)
        // }
        // //if not add it to cart
        // else {
        //     quantity++
        //     setItems([...items, { name, price, url, quantity }])
        // }
        const isInItems = items.some((i: Item) => i.id === item.id)
        isInItems ? increaseQuantity(item) : addItem(item)

        //show basket for 5s after item added
        setShowCart(true)
        setTimeout(() => setShowCart(false), 5000)
    }

    return (

        <div className="card">
            <div className="img--frame">
                <img src={url} />
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