import React, { useState } from "react";

const NavBar = () => {
  let sideBar = document.getElementsByClassName("menu-list");
  let menuElements = [...document.getElementsByClassName("menu-button")];

  const [burgerState, setBurgerState] = useState('close');

  //slide-in menu and changing configuration of X
  const closeMenu = () => {
    sideBar[0].classList.toggle("slide");
    for (let i=0; i<menuElements.length;i++){
      menuElements[i].classList.toggle("elements-slide")
    }
    setBurgerState(burgerState === 'close' ? 'open' : 'close');
    
  }


  return (

    <nav id="nav-bar">
      <h1>the spacesuit store</h1>
      <ul className="menu-list">
        <li><a href="#home" className="menu-button elements-slide" onClick={closeMenu}>Home</a></li>
        <li><a href="#best" className="menu-button elements-slide" onClick={closeMenu}>Best Sellers</a></li>
        <li><a href="#promise" className="menu-button elements-slide" onClick={closeMenu}>Our promise</a></li>
        <li><a href="#contact" className="menu-button elements-slide" onClick={closeMenu}>Contact us</a></li>
      </ul>
      <div id="burger" onClick={closeMenu}>
        <div className={burgerState}></div>
        <div className={burgerState}></div>
        <div className={burgerState}></div>
      </div>
    </nav>
  );
};

export default NavBar;
