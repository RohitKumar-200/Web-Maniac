import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header />
      <main className="main">
        <div className="categoriesContainer">
          <div className="categories__header">
            <div className="categories__headerLeft">Categories</div>
            <div className="categories__headerRight">
              <Link to="#">View all</Link>
            </div>
          </div>
          <div className="categories__itemContainer">
            <div className="category">
              <Link to="#" className="category__imageContainer">
                <img
                  src="https://us.123rf.com/450wm/belchonock/belchonock1807/belchonock180720336/105349602-stack-of-clean-clothes-on-white-background.jpg"
                  alt="clothes category"
                />
              </Link>
              <div className="category__title">Clothes</div>
            </div>
            <div className="category">
              <Link to="#" className="category__imageContainer">
                <img
                  src="http://www.socialsamosa.com/wp-content/uploads/2013/04/ID-100160524.jpg"
                  alt="Books category"
                />
              </Link>
              <div className="category__title">Books</div>
            </div>
            <div className="category">
              <Link to="#" className="category__imageContainer">
                <img
                  src="https://images.herzindagi.info/image/2020/Apr/Electronics.jpg"
                  alt="electronics category"
                />
              </Link>
              <div className="category__title">Electronics</div>
            </div>
            <div className="category">
              <Link to="#" className="category__imageContainer">
                <img
                  src="https://m.media-amazon.com/images/I/713-9zIaCtL._AC_SS450_.jpg"
                  alt="food category"
                />
              </Link>
              <div className="category__title">Food Items</div>
            </div>
          </div>
        </div>

        <div className="productsContainer">
          <div className="products__header">
            <div className="products__headerLeft">ABC clothing store</div>
            <div className="products__headerRight">
              <Link to="#">View all</Link>
            </div>
          </div>
          <div className="products__itemConainer">
            <div className="productContainer">
              <Link to="#" className="product__imageContainer">
                <img
                  src="https://c.bonfireassets.com/thumb/design-image/c3bb545c-31f9-4304-853c-6b322975fe1b/fbc20c7f-39a5-447e-a29b-b53850320e9f/?size=900"
                  alt="product"
                />
              </Link>
              <div className="product__title">Equinox shirt</div>
              <div className="product__priceContainer">
                <span className="product__strikedPrice">Rs 2,000</span>
                <span className="product__price">Rs 999</span>
              </div>
              <button className="product__button">ADD TO CART</button>
            </div>
            <div className="productContainer">
              <Link to="#" className="product__imageContainer">
                <img
                  src="https://5.imimg.com/data5/UR/ER/MY-10139824/19-500x500.jpg"
                  alt="product"
                />
              </Link>
              <div className="product__title">Men's Denim Jeans</div>
              <div className="product__priceContainer">
                <span className="product__strikedPrice">Rs 3,000</span>
                <span className="product__price">Rs 2,990</span>
              </div>
              <button className="product__button">ADD TO CART</button>
            </div>
            <div className="productContainer">
              <Link to="#" className="product__imageContainer">
                <img
                  src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/192790/02/sv01/fnd/IND/fmt/png/Flyer-Runner-Engineered-Knit-SoftFoam+-Men's-Running-Shoes"
                  alt="product"
                />
              </Link>
              <div className="product__title">Puma shoes</div>
              <div className="product__priceContainer">
                <span className="product__strikedPrice">Rs 6,000</span>
                <span className="product__price">Rs 2,000</span>
              </div>
              <button className="product__button">ADD TO CART</button>
            </div>
            <div className="productContainer">
              <Link to="#" className="product__imageContainer">
                <img
                  src="https://5.imimg.com/data5/IL/EL/MY-39822301/new-style-leather-jacket-500x500.jpg"
                  alt="product"
                />
              </Link>
              <div className="product__title">Men's Leather jacket</div>
              <div className="product__priceContainer">
                <span className="product__strikedPrice">Rs 10,000</span>
                <span className="product__price">Rs 6,000</span>
              </div>
              <button className="product__button">ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="productsContainer">
          <div className="products__header">
            <div className="products__headerLeft">Yahoo R.O</div>
            <div className="products__headerRight">
              <Link to="#">View all</Link>
            </div>
          </div>
          <div className="products__itemConainer">
            <div className="productContainer">
              <Link to="#" className="product__imageContainer">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/71Ttdx-%2BbDL._SL1500_.jpg"
                  alt="product"
                />
              </Link>
              <div className="product__title">Kent Grand Star</div>
              <div className="product__priceContainer">
                <span className="product__strikedPrice">Rs 19,000</span>
                <span className="product__price">Rs 16,000</span>
              </div>
              <button className="product__button">ADD TO CART</button>
            </div>
            <div className="productContainer">
              <Link to="#" className="product__imageContainer">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/71Ttdx-%2BbDL._SL1500_.jpg"
                  alt="product"
                />
              </Link>
              <div className="product__title">Kent Grand Star</div>
              <div className="product__priceContainer">
                <span className="product__strikedPrice">Rs 19,000</span>
                <span className="product__price">Rs 16,000</span>
              </div>
              <button className="product__button">ADD TO CART</button>
            </div>
            <div className="productContainer">
              <Link to="#" className="product__imageContainer">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/71Ttdx-%2BbDL._SL1500_.jpg"
                  alt="product"
                />
              </Link>
              <div className="product__title">Kent Grand Star</div>
              <div className="product__priceContainer">
                <span className="product__strikedPrice">Rs 19,000</span>
                <span className="product__price">Rs 16,000</span>
              </div>
              <button className="product__button">ADD TO CART</button>
            </div>
            <div className="productContainer">
              <Link to="#" className="product__imageContainer">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/71Ttdx-%2BbDL._SL1500_.jpg"
                  alt="product"
                />
              </Link>
              <div className="product__title">Kent Grand Star</div>
              <div className="product__priceContainer">
                <span className="product__strikedPrice">Rs 19,000</span>
                <span className="product__price">Rs 16,000</span>
              </div>
              <button className="product__button">ADD TO CART</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
