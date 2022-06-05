import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export class CartItem extends Component {
  static propTypes = {

  }

  render() {
    const { name, id, brand, gallery, attributes, prices, inStock} = this.props.product
    
    return (
      <Container>
        Hello product {name}
        this is {id}
      </Container>
    )
  }
}

export default CartItem

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `