import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const signIn = () => {
    history.push("home");
  };
  return (
    <div className="login__page">
      <div className="login__container">
        <h2 className="login__heading">Login</h2>
        <input type="text" className="login__input" placeholder="Email" />
        <input
          type="password"
          className="login__input"
          placeholder="Password"
        />
        <Button className="login__button" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
