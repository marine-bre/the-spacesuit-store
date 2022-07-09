import React from "react"
import ItemComponent from "./Item"
import { getUniqueId } from "../utils"

const BestSellers = () => {


  let images = [
    { "name": "HELMET #9945", "url": "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "price": 263, "quantity":0, "id": getUniqueId() },
    { "name": "SUIT #0542", "url": "https://images.unsplash.com/photo-1541873676-a18131494184?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8YXN0cm9uYXV0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", "price": 423, "quantity":0, "id": getUniqueId()  },
    { "name": "SUIT #0221", "url": "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd36-2-sts064-45-012_orig.jpg?w=600&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f7ed8b11ce92301a52085ad9b061d25b", "price": 423, "quantity":0, "id": getUniqueId() },
    { "name": "SUIT #1344", "url": "https://images.pexels.com/photos/2152/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "price": 132, "quantity":0, "id": getUniqueId()  },
    { "name": "HELMET #9734", "url": "https://images.pexels.com/photos/33684/astronaut-spacewalk-iss-tools.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "price": 423, "quantity":0, "id": getUniqueId()  },
    {"name": "SUIT #0373 Vintage", "url": "https://cdn.pixabay.com/photo/2012/10/10/11/06/moon-walk-60616__480.jpg", "price": 423, "quantity":0, "id": getUniqueId() }
  ]

    return(
        <div id="bestsellers">        
          <h3>our best sellers</h3>
          <div className="img--container">        
              {images.map(image => <ItemComponent item={image} key={image.name}/>)}
          </div>
        </div>
    )
}

export default BestSellers