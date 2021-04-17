import React from "react";
import "./ShopAddItem.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";

function ShopAddItem() {
  const history = useHistory();
  return (
    <div className="shopAddItem__page">
      <div className="shopAddItem__container">
        <h2 className="shopAddItem__heading">Add new product</h2>
        <input
          type="text"
          className="shopAddItem__input"
          placeholder="Product Name"
        />
        <input
          type="text"
          className="shopAddItem__input"
          placeholder="Brand Name"
        />
        <input
          type="number"
          className="shopAddItem__input"
          placeholder="Stock left"
        />
        <input
          type="number"
          className="shopAddItem__input"
          placeholder="M.R.P"
        />
        <input
          type="number"
          className="shopAddItem__input"
          placeholder="Price"
        />
        <input type="file" className="shopAddItem__input" />
        <Button
          className="shopAddItem__button"
          onClick={() => history.goBack()}
        >
          ADD
        </Button>
      </div>
    </div>
  );
}

export default ShopAddItem;
