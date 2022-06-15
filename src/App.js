import './App.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"
import Home from './components/Home';
import { ProductList } from './Pages/ProductList';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import store from './store';
import { Provider } from 'react-redux';


class App extends Component {
  static propTypes = {}

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='app'>
            <Switch>
              <Route exact path='/cart' component={Cart} />
              <Route path='/product/:id' component={Product} />
              <Route path='/products/:name' component={Products} />
              <Route exact path='/'>
                <Navbar />
                <Redirect to='/products/all/' />
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
