import React from "react";
import "./ShopEditItem.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";

function ShopAddItem() {
  const history = useHistory();
  return (
    <div className="shopEditItem__page">
      <div className="shopEditItem__container">
        <h2 className="shopEditItem__heading">Edit product</h2>
        <input
          type="text"
          className="shopEditItem__input"
          placeholder="Product Name"
          value="Equinox shirt"
        />
        <input
          type="text"
          className="shopEditItem__input"
          placeholder="Brand Name"
          value="Equinox"
        />
        <input
          type="number"
          className="shopEditItem__input"
          placeholder="Stock left"
          value="10"
        />
        <input
          type="number"
          className="shopEditItem__input"
          placeholder="M.R.P"
          value="2000"
        />
        <input
          type="number"
          className="shopEditItem__input"
          placeholder="Price"
          value="999"
        />
        <input type="file" className="shopEditItem__input" />
        <Button
          className="shopEditItem__button"
          onClick={() => history.goBack()}
        >
          UPDATE
        </Button>
      </div>
    </div>
  );
}

export default ShopAddItem;
