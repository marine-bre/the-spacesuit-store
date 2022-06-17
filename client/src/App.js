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
       <BestSellers setShowCart={setShowCart}/>
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
