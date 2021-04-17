import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import { Link, useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  return (
    <header>
      <div className="header">
        <div className="header__left">
          <div className="header__logoContainer">
            <Link to="home">
              <img src="/images/smartMallLogo.svg" alt="Bookstore logo" />
            </Link>
          </div>
        </div>
        <div className="header__middle">
          <div className="header__searchContainer" onClick={() => history.push('search')}>
            <input
              type="text"
              className="header__searchInput"
              placeholder="Search "
            />
            <div className="header__searchIconContainer">
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="header__right">
          <ul>
            <li className="header__cart">
              <Link to="cart">
                <ShoppingCartIcon />
                (3)
              </Link>
            </li>
            <li className="header__user">
              <div>
                <Avatar className="header__userAvatar" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
