import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  Logo,
} from "./header.styles";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { selectHidden } from "../../redux/cart/cart-selector";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { signOutStart } from "../../redux/user/user-actions";

const Header = ({ currentUser, hidden, signOut }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={signOut}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/auth">SIGN IN</OptionLink>
        )}

        <CartIcon />
      </OptionsContainer>
      {!hidden ? <CartDropdown /> : null}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden,
});

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      return dispatch(signOutStart());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
