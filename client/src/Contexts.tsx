import {createContext, useState} from "react"

export interface Item{
    name: string, 
    price: number,
    url: string,
    quantity: number,
    id: Number
}

export type ItemContext = {
    items : Item[],
    addItem: (item : Item) => void,
    removeItem: (id : Number) => void,
    increaseQuantity: (item : Item) => void
}


export const CartContext = createContext<ItemContext>()

export const CartProvider = ({children}) => {

    const [items, setItems] = useState([])

    const addItem = (item : Item) => {
        setItems([...items, item])
    }

    const removeItem = (id : Number) => {
        const indexToRemove = items.indexOf((item : Item) => item.id === id)
        items.splice(indexToRemove, 1)
        setItems(items)
    }

    const increaseQuantity = (item: Item) => {
        const index = items.indexOf((i : Item) => i.id === item.id)
        items[index].quantity ++
    }

    return <CartContext.Provider value={{items, addItem, removeItem, increaseQuantity}}>{children}</CartContext.Provider>
}

