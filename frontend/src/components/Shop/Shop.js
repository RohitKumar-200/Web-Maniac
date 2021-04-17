import React from "react";
import "./Shop.css";
import { Link, useHistory } from "react-router-dom";

import AddIcon from "@material-ui/icons/Add";

function Shop() {
  const history = useHistory();
  return (
    <main className="main__shop">
      <h2 className="shopPageHeading">Your Products</h2>
      <div className="shopItemContainer">
        <div className="shopItem__left">
          <Link to="#">
            {" "}
            <img
              src="https://c.bonfireassets.com/thumb/design-image/c3bb545c-31f9-4304-853c-6b322975fe1b/fbc20c7f-39a5-447e-a29b-b53850320e9f/?size=900"
              alt="product"
            />
          </Link>
        </div>
        <div className="shopItem__right">
          <div className="shopItem__header">
            <Link to="#" className="shopItem__heading">
              Equinox shirt
            </Link>
            <div className="shopItem__subHeading">Brand: Equinox</div>
          </div>
          <div className="shopItem__quantity">
            Stock Left:
            <div className="shopItem__quantityInputContainer">
              <input
                type="text"
                className="shopItem__quantityInput"
                value="10"
              />
            </div>
          </div>
          <div className="shopItem__price">Rs 999</div>
          <button className="shopItem__removeButton">Remove Item</button>
          <button
            className="shopItem__editButton"
            onClick={() => history.push("shopEditItem")}
          >
            Edit Item
          </button>
        </div>
      </div>
      <div className="shopItemContainer">
        <div className="shopItem__left">
          <Link to="#">
            {" "}
            <img
              src="https://5.imimg.com/data5/UR/ER/MY-10139824/19-500x500.jpg"
              alt="product"
            />
          </Link>
        </div>
        <div className="shopItem__right">
          <div className="shopItem__header">
            <Link to="#" className="shopItem__heading">
              Men's Denim Jeans
            </Link>
            <div className="shopItem__subHeading">Brand: Denim</div>
          </div>
          <div className="shopItem__quantity">
            Stock Left:
            <div className="shopItem__quantityInputContainer">
              <input
                type="text"
                className="shopItem__quantityInput"
                value="10"
              />
            </div>
          </div>
          <div className="shopItem__price">Rs 2,990</div>
          <button className="shopItem__removeButton">Remove Item</button>
          <button
            className="shopItem__editButton"
            onClick={() => history.push("shopEditItem")}
          >
            Edit Item
          </button>
        </div>
      </div>
      <div className="shopItemContainer">
        <div className="shopItem__left">
          <Link to="#">
            {" "}
            <img
              src="https://5.imimg.com/data5/IL/EL/MY-39822301/new-style-leather-jacket-500x500.jpg"
              alt="product"
            />
          </Link>
        </div>
        <div className="shopItem__right">
          <div className="shopItem__header">
            <Link to="#" className="shopItem__heading">
              Men's Leather jacket
            </Link>
            <div className="shopItem__subHeading">Brand: Leather</div>
          </div>
          <div className="shopItem__quantity">
            Stock Left:
            <div className="shopItem__quantityInputContainer">
              <input
                type="text"
                className="shopItem__quantityInput"
                value="10"
              />
            </div>
          </div>
          <div className="shopItem__price">18,110</div>
          <button className="shopItem__removeButton">Remove Item</button>
          <button
            className="shopItem__editButton"
            onClick={() => history.push("shopEditItem")}
          >
            Edit Item
          </button>
        </div>
      </div>

      <div
        className="shop__addIconContainer"
        onClick={() => history.push("shopAddItem")}
      >
        <AddIcon />
      </div>
    </main>
  );
}

export default Shop;
