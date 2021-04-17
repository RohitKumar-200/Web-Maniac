import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home/Home'
import ShopLogin from './components/ShopLogin/ShopLogin'
import Cart from './components/Cart/Cart'
import Shop from './components/Shop/Shop'
import ShopAddItem from './components/ShopAddItem/ShopAddItem'
import ShopEditItem from './components/ShopEditItem/ShopEditItem'
import SearchPage from './components/SearchPage/SearchPage'

const App = () => {
  return (
    <div className="app">
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/shopLogin">
                        <ShopLogin />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route path="/search">
                        <SearchPage />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/shop">
                        <Shop />
                    </Route>
                    <Route path="/shopAddItem">
                        <ShopAddItem />
                    </Route>
                    <Route path="/shopEditItem">
                        <ShopEditItem />
                    </Route>
                    <Route path="/">
                        <LandingPage/>
                    </Route>
                </Switch>
            </Router>
        </div>
  )
}

export default App;
