import React from "react";
import "./Register.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();
  const signUp = () => {
    history.push("home");
  };
  return (
    <div className="register__page">
      <div className="register__container">
        <h2 className="register__heading">Register</h2>
        <input type="text" className="register__input" placeholder="Name" />
        <input type="text" className="register__input" placeholder="Email" />
        <input
          type="password"
          className="register__input"
          placeholder="Password"
        />
        <input
          type="password"
          className="register__input"
          placeholder="Re-type Password"
        />
        <Button className="register__button" onClick={signUp}>
          Register
        </Button>
      </div>
    </div>
  );
}

export default Register;
