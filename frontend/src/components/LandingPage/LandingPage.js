import React from "react";
import "./LandingPage.css";
import { useHistory } from "react-router-dom";

function LandingPage() {
    const history = useHistory();
  return (
    <div className="landing__containerBackground" style={{backgroundImage:`url(https://miro.medium.com/max/12000/1*O5PLTgkp9FZFUiWyl0EMNA.jpeg)`, backgroundSize: "cover"}}>
        <div className="landing__container">
      <div className="landing__headingContainer">
        <h1 className="landing__heading">Welcome To <br/>The Smart Mall</h1>
      </div>
      <div className="landing__buttonContainer">
        <button className="landing__button" onClick={() => history.push('/login')}>Login</button>
        <button className="landing__button" onClick={() => history.push('/register')}>Sign Up</button>
        <button className="landing__button" onClick={() => history.push('/shopLogin')}>Login as Shopkeeper</button>
      </div>
      </div>
    </div>
  );
}

export default LandingPage;
