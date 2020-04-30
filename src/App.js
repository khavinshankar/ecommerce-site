import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { GlobalStyles } from "./master.styles";
import Header from "./components/header/header";
import { selectCurrentUser } from "./redux/user/user-selector";
import { checkUserSession } from "./redux/user/user-actions";
import Spinner from "./components/spinner/spinner";

const HomePage = lazy(() => import("./pages/home/home"));
const ShopPage = lazy(() => import("./pages/shop/shop"));
const AuthPage = lazy(() => import("./pages/authentication/authentication"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout"));

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
        <Suspense fallback={Spinner}>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/auth"
            render={() => (currentUser ? <Redirect to="/" /> : <AuthPage />)}
          />
        </Suspense>
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
