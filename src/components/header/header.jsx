import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./header.scss";
import { ReactComponent as Logo } from "../../asserts/logo.svg";
import { auth } from "../../utils/firebase/firebase";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { selectHidden } from "../../redux/cart/cart-selector";
import { selectCurrentUser } from "../../redux/user/user-selector";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/auth" className="option">
            SIGN IN
          </Link>
        )}

        <CartIcon />
      </div>
      {!hidden ? <CartDropdown /> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden,
});

export default connect(mapStateToProps)(Header);
