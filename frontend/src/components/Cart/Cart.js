import React from "react";
import "./Cart.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {Link} from 'react-router-dom';

function Cart() {
  return (
    <div>
      <Header />
      <main className="main">
        <h2 className="cartPageHeading">Your shopping basket</h2>
        <div className="cartItemContainer">
          <div className="cartItem__left">
            <Link to="#">
              {" "}
              <img
                src="https://c.bonfireassets.com/thumb/design-image/c3bb545c-31f9-4304-853c-6b322975fe1b/fbc20c7f-39a5-447e-a29b-b53850320e9f/?size=900"
                alt="product"
              />
            </Link>
          </div>
          <div className="cartItem__right">
            <div className="cartItem__header">
              <Link to="#" className="cartItem__heading">
                Equinox shirt
              </Link>
              <div className="cartItem__subHeading">Brand: Equinox</div>
            </div>
            <div className="cartItem__quantity">
              <div className="cartItem__quantityMinus">
                <RemoveIcon />
              </div>
              <div className="cartItem__quantityInputContainer">
                <input
                  type="text"
                  className="cartItem__quantityInput"
                  value="1"
                />
              </div>
              <div className="cartItem__quantityPlus">
                <AddIcon />
              </div>
            </div>
            <div className="cartItem__price">Rs 999</div>
            <button className="cartItem__removeButton">
              Remove from basket
            </button>
          </div>
        </div>
        <div className="cartItemContainer">
          <div className="cartItem__left">
            <Link to="#">
              {" "}
              <img
                src="https://5.imimg.com/data5/UR/ER/MY-10139824/19-500x500.jpg"
                alt="product"
              />
            </Link>
          </div>
          <div className="cartItem__right">
            <div className="cartItem__header">
              <Link to="#" className="cartItem__heading">
                Men's Denim Jeans
              </Link>
              <div className="cartItem__subHeading">Brand: Denim</div>
            </div>
            <div className="cartItem__quantity">
              <div className="cartItem__quantityMinus">
                <RemoveIcon />
              </div>
              <div className="cartItem__quantityInputContainer">
                <input
                  type="text"
                  className="cartItem__quantityInput"
                  value="1"
                />
              </div>
              <div className="cartItem__quantityPlus">
                <AddIcon />
              </div>
            </div>
            <div className="cartItem__price">Rs 2,990</div>
            <button className="cartItem__removeButton">
              Remove from basket
            </button>
          </div>
        </div>
        <div className="cartItemContainer">
          <div className="cartItem__left">
            <Link to="#">
              {" "}
              <img
                src="https://5.imimg.com/data5/IL/EL/MY-39822301/new-style-leather-jacket-500x500.jpg"
                alt="product"
              />
            </Link>
          </div>
          <div className="cartItem__right">
            <div className="cartItem__header">
              <Link to="#" className="cartItem__heading">
                Men's Leather jacket
              </Link>
              <div className="cartItem__subHeading">Brand: Leather</div>
            </div>
            <div className="cartItem__quantity">
              <div className="cartItem__quantityMinus">
                <RemoveIcon />
              </div>
              <div className="cartItem__quantityInputContainer">
                <input
                  type="text"
                  className="cartItem__quantityInput"
                  value="1"
                />
              </div>
              <div className="cartItem__quantityPlus">
                <AddIcon />
              </div>
            </div>
            <div className="cartItem__price">18,110</div>
            <button className="cartItem__removeButton">
              Remove from basket
            </button>
          </div>
        </div>

        <div className="cart__priceContainer">
          <div className="cart__priceHeading">PRICE DETAILS</div>
          <table className="cart__priceTable">
            <tr>
              <td>Price(3 items)</td>
              <td>Rs 8,898</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>Rs -5,035</td>
            </tr>
            <tr>
              <td>Delivery charges</td>
              <td>Rs 44</td>
            </tr>
            <tr className="cart__totalPriceRow">
              <td>Total</td>
              <td>Rs 3,907</td>
            </tr>
          </table>
        </div>
        <div className="cart__placeOrderButtonContainer">
          <button className="cart__placeOrderButton">PLACE ORDER</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Cart;
