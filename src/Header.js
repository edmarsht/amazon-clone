import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <nav className="header">

        {/* Logo on the left */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

        {/* Search box */}
      <div className="header__search">
        <input className="header__searchInput" />
        {/* Search icon */}
        <SearchIcon className="header__searchIcon" />
      </div>

        {/* navBar on the right w<ith links  */}
      <div className="header__nav">

          {/* 1st Link */}
        <Link className="header__link" to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Capucine </span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

            {/* 2nd Link */}
        <Link className="header__link" to="/">
          <div className="header__option">
            <span className="header__optionLineOne">Returns </span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

            {/* 3rd Link */}
        <Link className="header__link" to="/">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

            {/* 4th Link */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
              {/* Basket icon */}
            <ShoppingBasketIcon className="header__optionBasketIcon" />
            {/* Basket number item */}
            <span className="header__optionLineTwo header__optionNumber">0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
