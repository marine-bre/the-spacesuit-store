import React, { useEffect } from 'react';
import NavBar from './components-sections/navbar';
import './style.css';
import ImageCard from './components-sections/ImageCard';
import Contact from './components-sections/Contact';
import Promise from './components-sections/Promise';

function App() {

  let imageInfo = [
    { "name": "The Number 1", "url": "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "price": "263K credits", "description": "This is a suit worn by this person during that year and going on that trip" },
    { "name": "The Number 2", "url": "https://images.pexels.com/photos/2152/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "price": "132K credits", "description": "This is a suit worn by this person during that year and going on that trip" },
    { "name": "The Number 3", "url": "https://images.pexels.com/photos/33684/astronaut-spacewalk-iss-tools.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "price": "423K credits", "description": "This is a suit worn by this person during that year and going on that trip" }
  ]

  // parallax for main image

  useEffect(() => {
    const mainImage = document.getElementById("main-image");
    const square = document.getElementById("image-before");
    console.log(square, mainImage);
    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      mainImage.style.top = value * 0.1 + "px";
      square.style.top = value * 0.02 - 6 + "vh";
      mainImage.style.right = value * 0.1 + "px";
      square.style.right = value * 0.02 - 6 + "vw";
    })
  })


  return (
    <div className="App" id="home">
      <NavBar />
      <div className="main-container">
        <div className="main-container-text">
          <h2>Welcome to the spacesuit store! <br></br></h2>
          <p>
            Most space agencies, such as the NASA, the European Space Agency and Space X, have already relied on our services. We also have a significant number of confidential individual clients who have requested personnalised suits to be made for them.
           <br /><br /> We offer the best of the best! If you have not yet heard of the superb quality of our products, we invite you to discover our promises to our clients by clicking on the button below. If you are already convinced that you need one of our products,
            feel free to fill the contact form and we will give you a call to discuss your needs. Enjoy!
        </p>
          <form action="#promise">
            <button className="button-go" >Check out our promise to you ⇨</button>
          </form>
        </div>
        <div className="main-container-image">
          <img id="main-image" alt="astronaut" src="https://images.pexels.com/photos/355956/pexels-photo-355956.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></img>
          <div id="image-before"></div>
        </div>
      </div>
      <hr id="best"></hr>
      <div id="bestsellers">
        <h3>our best sellers</h3>
        {imageInfo.map(image => <ImageCard name={image.name} price={image.price} description={image.description} url={image.url} alt={image.name} key={image.name} />)}
      </div>
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
