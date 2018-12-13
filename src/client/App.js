import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/hearder/HeaderComponent';
import Home from './components/home/HomeComponent';
// import Products from './components/product/ProductComponent';
import Products from './components/products/ProductsComponent';
import ProductDetail from './components/productDetail/ProductDetail';
import Footer from './components/footer/FooterComponent';
import './app.scss';

class App extends Component {
  componentDidMount() {
    console.log('');
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/products" component={Products} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
