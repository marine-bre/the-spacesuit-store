import { useContext } from "react"
import ItemComponent from "./Item"
import { Item, CartContext } from "../Contexts.tsx"

const BestSellers = ({images, setShowCart}) => {

    const {items, addItem} = useContext(CartContext) // move this to the context as an automatic thing that happens?

    return(
        <div id="bestsellers">        
        <h3>our best sellers</h3>
        <div className="img--container">        
            {images.map(image => <ItemComponent image={image} alt={image.name} key={image.name} items={items} setItems={addItem} setShowCart={setShowCart}/>)}
        </div>
        </div>
    )
}

export default BestSellers