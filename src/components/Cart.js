import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Attributes } from './Attributes';
import { SideList } from './SideList';
import { ProductItem } from './ProductItem';
import CartItem from './CartItem'
import { PRODUCT_QUERY } from '../Data/GraphqlData'
import Product from './Product'
import { gql } from 'graphql-tag';
import { connect } from 'react-redux';


class Cart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { cartItems } = this.props;

    return (
      <Container>
        <Title>CART</Title>
          {
            cartItems?.length === 0 
            ? 
            (<EmptyCart>Your cart is empty</EmptyCart>)
            : 
           cartItems.map((item, index) => (
              <CartItem key={index} item={item} />
            ))
          }
          <TaxInfo>
            <Items style={{marginTop: '20px'}}>Tax:</Items>
            <Items>Quantity: </Items>
            <Items>Total: </Items>
          </TaxInfo>

          <Button> ORDER </Button>
      </Container>
    )
  }
}

export default connect((state) => ({ cartItems: state.cart.cart }),
  null)(Cart)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
`
const Title = styled.span`
  margin-bottom: 50px;
  font-size: 25px;
  font-weight: 500;
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
  margin-top: 15px;
  margin-bottom: 10px;
  align-items: center;  
`
const TaxInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  border-top: 1px solid #E5E5E5;
`
const Items = styled.div`
    margin-top: 10px;
    margin-botton: 10px;
    font-size: 20px;
    font-weight: 100;
`
const EmptyCart = styled.span`
  font-size: 20px;
  font-weight: 100;
`