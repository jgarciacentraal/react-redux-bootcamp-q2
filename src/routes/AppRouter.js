import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Products } from "../pages/Products";
import { Cart } from "../pages/Cart";
import { Home } from "../pages/Home";
import { Header } from "../components/Header";
import { Private } from "../components/Private";
import { Login } from "../pages/Login";

export const AppRouter = () => {
  const [auth, setAuth] = React.useState({
    username: "",
    password: "",
  });

  const handleAuth = (event) => {
    const { value, name } = event.target;
    setAuth((auth) => ({
      ...auth,
      [name]: value,
    }));
  };
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Private path="/products" user={auth}>
          <Products />
        </Private>
        <Private path="/cart" user={auth}>
          <Cart />
        </Private>
        <Route path="/login">
          <Login auth={auth} handleAuth={handleAuth} />
        </Route>
      </Switch>
    </Router>
  );
};
