import React from "react";
import Logo from "../../Assets/images/amazonlogo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider/StateProvider";
import { auth } from "../../Firebase/firebase";

function Header() {
  const [{ basket,user }] = useStateValue();

  const handleAuthentication = () => {
    if(user){
      auth.signOut();
    }
  } 

  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="amazonlogo" className="header__logo" />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">{`Hello ${!user ? 'Guest': user.email}`}</span>
          <Link to={!user && '/login'} style={{textDecoration:'none'}}>
            <span onClick={handleAuthentication} className="header__optionLineTwo">{!user ? 'Sign In':'SignOut'}</span>
          </Link>
        </div>
        <Link to="/orders" style={{textDecoration:'none'}}>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <span className="header__optionBasketCount">{basket?.length}</span>
            <ShoppingCartRoundedIcon />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
