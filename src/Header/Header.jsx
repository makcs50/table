import React from "react";
import Website_name from './Name_website'
import Basket from './Basket'
import Style from './Header.module.css'

const Header = () => {
  return (
    <header className={ Style }>
      <div className={ Style.website_name }>
        <Website_name />
      </div>
      <div className= { Style.basket }>
        <Basket />
      </div>
    </header>
  );
};

export default Header;
