import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Navbar from './Navbar'
import Category_bar from './CategoryName'
// import Product from '../Pages/Product'
import Products from './Products';
import ProductItem from './ProductItem'
import Categories from './Categories';
import { ProductList } from '../Pages/ProductList';
import CategoryName from './CategoryName'
import { CategoryItem } from './CategoryItem';

export class Home extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <Categories />
        <ProductList />
      </div>
    )
  }
}

export default Home


