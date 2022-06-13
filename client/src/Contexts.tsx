import {createContext, useState} from "react"

export interface Item{
    name: string, 
    price: Number,
    url: string,
    quantity: Number
}

export type ItemContext = {
    items : Item[],
    addItem: (item : Item) => void
}

export const CartContext = createContext<ItemContext>(null)

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([])
    const addItem = (item: Item) => {
        setItems([...items, item])
    }
    return <CartContext.Provider value={{items, addItem}}>{children}</CartContext.Provider>
}

