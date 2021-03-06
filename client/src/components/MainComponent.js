import React from 'react';
import  { Route, Switch } from 'react-router-dom';
import About from './About';
import Login from "./Login/login";
import Register from "./Register/register";
import Footer from "./Footer/footer";
import TopNav from "./Navbar/topNav";
import Home from "./Home/home";
import UploadProducPage from './UploadProduct/uploadProductPage';
import DetailProduct from './DetailProductPage/DetailProduct';
import Auth from "../hoc/auth";
import CartPage from './CartPage/CartPage';
import History from './History/History'

function Main() {
  return (
    <div>
      <TopNav />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(Home, null)} />
          
          {/* <Route path="/about" component={Auth(About, false)} /> */}
          <Route path="/login" component={Auth(Login, false)} />
          <Route path="/register" component={Auth(Register, false)} />
          <Route path="/product/upload" component={Auth(UploadProducPage, true)} />
          <Route path="/product/:productId" component={Auth(DetailProduct, null)} />
          <Route path="/user/cart" component={Auth(CartPage, true)} />
          <Route path="/user/history" component={Auth(History, true)} />
        </Switch>
      </div>


      <Footer />
    </div>
  );
}

export default Main;
