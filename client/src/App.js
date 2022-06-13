import React, { useEffect, useState } from 'react';
import NavBar from './components-sections/navbar';
import './style.css';
import Item from './components-sections/Item';
import Contact from './components-sections/Contact';
import Promise from './components-sections/Promise';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './components-sections/Home'
import BestSellers from "./components-sections/BestSellers.tsx"

function App() {

  const [items,setItems]=useState([])
  const [showCart, setShowCart] = useState(false)


  let imageInfo = [
    { "name": "HELMET #9945", "url": "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "price": 263, "quantity":0 },
    { "name": "SUIT #0542", "url": "https://images.unsplash.com/photo-1541873676-a18131494184?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8YXN0cm9uYXV0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", "price": 423, "quantity":0 },
    { "name": "SUIT #0221", "url": "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd36-2-sts064-45-012_orig.jpg?w=600&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f7ed8b11ce92301a52085ad9b061d25b", "price": 423, "quantity":0 },
    { "name": "SUIT #1344", "url": "https://images.pexels.com/photos/2152/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "price": 132, "quantity":0 },
    { "name": "HELMET #9734", "url": "https://images.pexels.com/photos/33684/astronaut-spacewalk-iss-tools.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "price": 423, "quantity":0 },
    {"name": "SUIT #0373 Vintage", "url": "https://cdn.pixabay.com/photo/2012/10/10/11/06/moon-walk-60616__480.jpg", "price": 423, "quantity":0 }

  ]

  // parallax for main image

  useEffect(() => {
    const mainImage = document.getElementById("main-image");
    const square = document.getElementById("image--frame");
    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      mainImage.style.top = value * 0.1 + "px";
      square.style.top = value * 0.02 - 6 + "vh";
      mainImage.style.right = value * 0.1 + "px";
      square.style.right = value * 0.02 - 6 + "vw";
    })
  })

  useEffect(()=>{
    AOS.init({
      duration : 1000
    })
  },[])


  return (
    <div className="App" id="home">
      <NavBar items={items} setItems={setItems} showCart={showCart} setShowCart={setShowCart}/>
      <Home/>
      <hr id="best"></hr>
       <BestSellers images={imageInfo} setShowCart={setShowCart}/>
      <hr id="promise"></hr>
      <div>
        <h3>our promise</h3>
        <Promise />
      </div>
      <hr id="contact"></hr>
      <div>
        <h3>contact us</h3>
        <Contact />
      </div>
      <div id="copyright">
        <p>Copyright © - Marine Bretonniere</p>
        <p>2020</p>
      </div>
    </div>
  );
}

export default App;
