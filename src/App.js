import './App.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"
import { InMemoryCache } from 'apollo-boost'
import Home from './components/Home';
import { ProductList } from './Pages/ProductList';
import { Navbar } from './components/Navbar';
import { Products } from './components/Products';
import { Product } from './components/Product';
import { ProductItem } from './components/ProductItem';
import Cart from './components/Cart';


const client = new ApolloClient({
  uri: 'http://localhost:4000/gql',
  cache: new InMemoryCache()
})

export class App extends Component {
  static propTypes = {}

  render() {
    
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className='app'>
            <Switch>
              <Route exact path='/cart' component={Cart}/>
              <Route path='/product/:id' component={Product}/> 
              <Route path='/products/:name' component={Products}/>
              <Route exact path='/'>
                <Navbar />
                <Redirect to='/products/all/'/>
              </Route>
              
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    )
  }
}

export default App
