import React, { useState } from "react";
import { CartUIContext } from "../Contexts"
import { CSSTransition } from 'react-transition-group'
import Cart from './Cart'

const NavBar = () => {
  let sideBar = document.getElementsByClassName("menu-list");
  let menuElements = [...document.getElementsByClassName("menu-button")];

  const [burgerState, setBurgerState] = useState('close');
  const {setCartState, cartState} = React.useContext(CartUIContext)

  //slide-in menu and changing configuration of X
  const closeMenu = () => {
    sideBar[0].classList.toggle("slide");
    for (let i = 0; i < menuElements.length; i++) {
      menuElements[i].classList.toggle("elements-slide")
    }
    setBurgerState(burgerState === 'close' ? 'open' : 'close');
  }


  const cartOpen = () => {
    cartState ? setCartState(false) : setCartState(true)
  }
  
  return (
    <>
      <nav id="nav-bar">
        <h1>the spacesuit store</h1>
        <ul className="menu-list">
          <li><a href="#home" className="menu-button elements-slide" onClick={closeMenu}>Home</a></li>
          <li><a href="#best" className="menu-button elements-slide" onClick={closeMenu}>Best Sellers</a></li>
          <li><a href="#promise" className="menu-button elements-slide" onClick={closeMenu}>Our promise</a></li>
          <li><a href="#contact" className="menu-button elements-slide" onClick={closeMenu}>Contact us</a></li>
          <li onClick={closeMenu}>
            <svg onClick={cartOpen} className="basket--svg" viewBox="0 0 512 512" fill="#e8d5b5" width="100px" height="30px">
              <path d="M501.333,213.331h-90.388L296.792,47.289c-3.333-4.854-9.969-6.073-14.833-2.75c-4.854,3.344-6.083,9.979-2.75,14.833
			l105.846,153.958H126.945L232.792,59.373c3.333-4.854,2.104-11.49-2.75-14.833c-4.833-3.323-11.479-2.104-14.833,2.75
			L101.055,213.331H10.667C4.771,213.331,0,218.102,0,223.998c0,5.896,4.771,10.667,10.667,10.667h13.533l65.207,204.938
			c5.667,17.781,22,29.729,40.656,29.729h251.875c18.656,0,34.99-11.948,40.656-29.74l65.206-204.927h13.534
			c5.896,0,10.667-4.771,10.667-10.667C512,218.102,507.229,213.331,501.333,213.331z M402.26,433.123
			c-2.833,8.896-11,14.875-20.323,14.875H130.063c-9.323,0-17.49-5.979-20.323-14.865L46.589,234.664h418.823L402.26,433.123z"/>
            </svg>
          </li>
        </ul>

        <div id="burger" onClick={closeMenu}>
          <div className={burgerState}></div>
          <div className={burgerState}></div>
          <div className={burgerState}></div>
        </div>
        <CSSTransition
          in={cartState}
          classNames="cart"
          unmountOnExit
          timeout={1000}
        >
          <Cart/>
        </CSSTransition>
      </nav>

    </>
  );
};

export default NavBar;
