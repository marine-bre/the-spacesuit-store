import React from "react"

export interface Item{
    name: string, 
    price: number,
    url: string,
    quantity: number,
    id: Number
}

export type CartContextType = {
    items : Item[],
    increaseItem: (item : Item) => void,
    decreaseItem: (item: Item) => void,
}

const defaultCartState : CartContextType = {
    items : [],
    increaseItem: () => null,
    decreaseItem: () => null,
}

type Props = {
    children : JSX.Element
}

export const CartContext = React.createContext<CartContextType>(defaultCartState)

export const CartProvider = ({children} : Props) => {

    const [items, setItems] = React.useState<Item[]>([])

    const increaseItem = (item : Item) => {
        const index = items.findIndex((i : Item) => item.id === i.id)
        if(index !== -1){
            const updatedItems = items
            updatedItems[index].quantity ++
            setItems(updatedItems)
        }
        else{
            item.quantity ++
            setItems([...items, item])
        }
    }

    const decreaseItem = (item : Item) => {
        const indexToRemove = items.findIndex((i : Item) => i.id === item.id)
        const updatedItems = items
        updatedItems[indexToRemove].quantity --
        if (updatedItems[indexToRemove].quantity <= 0){
            items.splice(indexToRemove, 1)
        }
        setItems(updatedItems)
    }


    return <CartContext.Provider value={{items, increaseItem, decreaseItem}}>{children}</CartContext.Provider>
}



///////  Cart opened state ///////



type CartUIContextType = {
    cartState : boolean,
    setCartState: (newState : boolean) => void
}

const defaultCartUIContext : CartUIContextType = {
    cartState : false,
    setCartState : () => null
}
export const CartUIContext = React.createContext(defaultCartUIContext)

export const CartUIContextProvider = ({children} : Props) => {
    
    const [cartState, setCartState] = React.useState<boolean>(false)

    return <CartUIContext.Provider value={{cartState, setCartState}}>{children}</CartUIContext.Provider>
    
}
