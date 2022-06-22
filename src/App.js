import './App.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"
import { ProductList } from './Pages/ProductList';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import store from './store';
import { Provider } from 'react-redux';
import styled from 'styled-components';

class App extends Component {
  static propTypes = {}

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Container>
            <Navbar/>
          </Container>
          <div className='app'>
            <Switch>
              <Route exact path='/cart' component={Cart} />
              <Route path='/product/:id' component={Product} />
              <Route path='/products/:name' component={Products} />
              <Route exact path='/'>
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

const Container = styled.div`
  padding: 10px;
  margin-left: 25px;
  margin-right: 15px;
  // position: relative;
`