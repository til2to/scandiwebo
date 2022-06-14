import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CategoryName from '../components/CategoryName'
import Products from '../components/Products';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import { Link, params } from 'react-router-dom';

export class ProductList extends Component {
  static propTypes = {}

  render() {
  
    return (
      <Container>
        {/* <Navbar /> */}
        <Products />
      </Container>
    )
  }
}

export default ProductList

const Container = styled.div`
    // background-color: blue;
`
const Button = styled.div`
  font-weight: 600;
  color: white;
  background-color: #5ECE7B;
  height: 40px;
  width: 250px;
  display: flex;
  justify-content: center;
  border-radius: 3px; 
  opacity: 0.85;
  font-size: 13px;
  cursor: pointer;
  margin-top: 20px;
  align-items: center;  
`