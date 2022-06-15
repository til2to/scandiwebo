import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

class MyBag extends Component {
  static propTypes = {}

  render() {
    const { cartItems } = this.props;
    
    return (
      <Container> 
        <Title>MyBag: {cartItems?.length} items</Title>
        {
          cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
            ))
        }

        <Total>
            <Text>Total</Text>
            <Amount>$ 222.00</Amount>
        </Total>

        <ButtonsContainer>
            <Link to='/cart' style={{textDecoration: 'none'}}>
                <Button> VIEW BAG </Button>
            </Link>
            <Link to=''> 
                <Button> CHECKOUT </Button> 
            </Link> 
        </ButtonsContainer>
      </Container>
    )
  }
}

export default connect((state) => ({ cartItems: state.cart.cart }),
  null)(MyBag)

const Container = styled.div`
    margin-top: 50px;
    background: rgba(57,55,72,0.22);
`
const Title = styled.span`
`
const Total = styled.div`
`
const Text = styled.div`
`
const Amount = styled.div`
`
const ButtonsContainer = styled.div`
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
// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MyBag)
