import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { GlobalStyles } from "./master.styles";
import Header from "./components/header/header";
import HomePage from "./pages/home/home";
import ShopPage from "./pages/shop/shop";
import AuthPage from "./pages/authentication/authentication";
import CheckoutPage from "./pages/checkout/checkout";
import { selectCurrentUser } from "./redux/user/user-selector";
import { checkUserSession } from "./redux/user/user-actions";

const App = (props) => {
  const { checkUserSession, currentUser } = props;

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/auth"
          render={() => (currentUser ? <Redirect to="/" /> : <AuthPage />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserSession: () => {
      return dispatch(checkUserSession());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
