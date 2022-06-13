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
    console.log(cartItems);

    return (
      <Container>
        <Title>CART</Title>
        <Hide>
         
        </Hide>
        <LeftContainer>
          {
          cartItems?.length == 0 ? (<EmptyCart>Your cart is empty</EmptyCart>)
          : (<CartNumber> You have {cartItems?.length} in the cart</CartNumber>)
          }
        </LeftContainer>
      </Container>
    )
  }
}

export default connect((state) => ({ cartItems: state.cart }),
  null)(Cart)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
`
const Wrap = styled.div`
  display: flex;
`
const Title = styled.div`
  // margin-bottom: 30px;
`
const LeftContainer = styled.div`
  flex: 1
`
const RightContainer = styled.div`
  flex; 1
`
const SideImages = styled.div`
  margin-top: 100px; 
  margin-right: 25px;
`
const ProductImg = styled.div`
  display: flex;
  box-sizing: border-box;
  flex: 1;
  margin-left: 5px;
  margin-top: 100px;
  justify-content: center;
  max-width: 500px;
   `
const Image_ = styled.img`
  display: flex;
  max-height: 50%;
  border: 0.5px ;
  widht: 400px;
  height: 500px;
   `
const ProductInfo = styled.div`
  // flex:1;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 30px;
  margin-left: 40px;
`
const Brand = styled.span`
  font-weight: 400;
  font-size: 30px;
  line-height: 27px;
  margin-top: 15px;
  margin-bottom: 15px;
`
const Name = styled.span`
  line-height: 27px;
  width: 192;
  display: flex;
  align-items: center;
  font-weight: 250;
  font-size: 30px;
  font-style: normal;
  color: #1D1F22;
`
const AttributesContainer = styled.div`
  margin-top:15px;
`
const AttributePrice = styled.span`
  font-weight: 700;
  margin-bottom: 10px; 
`
const PriceInfo = styled.span`
  display: flex;
  flex-direction: column;
`
const EmptyCart = styled.div`
  // margin-top: 100px;
  margin-bottom: 100px;
  font-size: 20px;
  text-align: center;
  color: #1D1F22;
`
const CartNumber = styled.div`

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
  margin-top: 5px;
  margin-bottom: 10px;
  align-items: center;  
`
const Hide = styled.div`
  display: none;
`