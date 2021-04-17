import React from "react";
import "./ShopLogin.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function ShopLogin() {
  const history = useHistory();
  const shopSignIn = () => {
    history.push("shop");
  };
  return (
    <div className="shopLogin__page">
      <div className="shopLogin__container">
        <h2 className="shopLogin__heading">Shopkeeper Login</h2>
        <input type="text" className="shopLogin__input" placeholder="Email" />
        <input
          type="password"
          className="shopLogin__input"
          placeholder="Password"
        />
        <Button className="shopLogin__button" onClick={shopSignIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default ShopLogin;
