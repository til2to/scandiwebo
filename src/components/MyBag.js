import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

class MyBag extends Component {
  static propTypes = {}

  render() {
    const { cartItems: {cart, quantity, total}, overlayToggle } = this.props;

    return (
      <Container>
        <Title>
          <span>My Bag {quantity} items</span>
        </Title>
        {
          cart.map((item, index) => (
            <CartItem key={index} item={item} noArrows={true} />
          ))
        }
        <Total>
          <Text>Total</Text>
          <Amount>$ 22.00</Amount>
        </Total>

        <ButtonsContainer>
          <Link to='/cart' style={{ textDecoration: 'none' }}>
            <Button onClick={ overlayToggle }> VIEW BAG </Button>
          </Link>
          <Link to='#' style={{ textDecoration: 'none' }}>
            <ButtonCheckout> CHECKOUT </ButtonCheckout>
          </Link>
        </ButtonsContainer>
      </Container>
    )
  }
}

export default connect((state) => ({ cartItems: state.cart }),
  null)(MyBag)

const Container = styled.div`
    padding: 7px;
    height: 100%;
    overflow-y: scroll;
    max-width: 430px;
`
const Title = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
`
const Total = styled.div`
  display: flex;
  justify-content: space-between;
`
const Text = styled.div`
`
const Amount = styled.div`
`
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`
const Button = styled.div`
  font-weight: 600;
  color: black;
  background-color: white;
  height: 40px;
  width: 180px;
  justify-content: center;
  display: flex;
  border-radius: 3px; 
  opacity: 0.85;
  font-size: 13px;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 10px;
  margin-right: 5px;
  align-items: center;  
`
const ButtonCheckout = styled.div`
  font-weight: 600;
  color: white;
  background-color: #5ECE7B;
  display: flex;
  height: 40px;
  width: 180px;
  justify-content: center;
  border-radius: 3px; 
  opacity: 0.85;
  font-size: 13px;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 10px;
  margin-left: 5px;
  align-items: center; 
  text-decoration: none; 
`
