import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        {/* amazon logo */}
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>
      {/* search bar  */}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* side nav */}
      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionlineone">Hello,Guest </span>

            <span className="header__optionlinetwo">Sign in</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionlineone">Returns </span>
          <span className="header__optionlinetwo">Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionlineone">Your </span>
          <span className="header__optionlinetwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionbasket">
            <ShoppingCartIcon />
            <span className="header__optionlinetwo header__optionbasketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Header;
