import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { PRODUCT_QUERY } from '../Data/GraphqlData'
import { gql } from 'graphql-tag';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import CartItem from './CartItem';
import MyBag from './MyBag';


class Cart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { cartItems } = this.props;
    
    return (
      <Container>
        <Navbar />
          <Wrapper>
          <Title>
            <span>CART</span>
          </Title>
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
            <Items style={{ marginTop: '20px' }}>Tax:</Items>
            <Items>Quantity: </Items>
            <Items>Total: </Items>
          </TaxInfo>

          <Button> ORDER </Button>
          <MyBag />
        </Wrapper>
      </Container>
    )
  }
}

export default connect((state) => ({ cartItems: state.cart.cart }),
  null)(Cart)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
const Wrapper = styled.div`
  margin-left: 20px;
  margin-top: 30px;
`
const Title = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 40px;
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
  margin-bottom: 10px;
`