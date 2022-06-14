import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Attributes from './Attributes';
import previous from '../images/previous.png'
import next from '../images/next.png'
import decrease from '../images/decrease.png'
import increase from '../images/increase.png'

class CartItem extends Component {
  static propTypes = {

  }

  render() {
    const { name, id, brand, gallery, attributes, prices, inStock } = this.props.item

    return (
      <Container>
        <LeftContainer>
          <CartInfo>
            <Brand>{brand}</Brand>
            <Name>{name}</Name>
            <Price>{prices[0].currency.symbol} {prices[0].amount}</Price>
          </CartInfo>
          <AttributesContainer_>
            {
              attributes.map((item, id) => (
                <Attribute_name key={item.id}>
                  {item.name}:
                  <AttributesItems>
                    {
                      item.type === 'swatch'
                        ?
                        item.items.map((color, id) => (
                          <ColorContainer key={color.id} style={{ backgroundColor: color.value }}>{color.value}</ColorContainer>
                        ))
                        :
                        item.items.map((text, id) => (
                          <AttributesCont key={text.id}>{text.value}</AttributesCont>
                        ))  
                    }
                  </AttributesItems>

                </Attribute_name>
              ))
            }
          </AttributesContainer_>
        </LeftContainer>
        <MidContainer></MidContainer>
        <RightContainer>
          <Image_ src={gallery[0]} alt="" />
        </RightContainer>
      </Container>
    )
  }
}

export default CartItem

const Container = styled.div`
  display: flex;
  border-top: 1px solid #e5e5e5;
`
const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const MidContainer = styled.div`
  flex: 0.5;
`
const RightContainer = styled.div`
  flex: 1
  display: flex;
  flex-direction: column;
`
const Brand = styled.span`
  font-weight: 350;
  font-size: 23px;
  line-height: 27px;
  margin-bottom: 15px;
`
const Name = styled.span`
  line-height: 27px;
  // width: 192;
  display: flex;
  align-items: center;
  font-weight: 250;
  font-size: 25px;
  font-style: normal;
  color: #1D1F22;
`
const AttributesCont = styled.div`
    margin-top: 0px;
    max-width: 60px;
    max-height: 45px; 
    border: 1px solid #e5e5e5;
    display: flex;
    justify-content: center;
    padding: 8px;
    box-sizing: border-box;
    margin: 6px;
    margin-left: 0;
    cursor: pointer;

    &:hover{
        background: #1D1F22;
        color: white;
      }
`
const AttributesItems = styled.div`
      display: flex;
`
const ColorContainer = styled.div`
  margin-top: 0px;
  max-width: 40px;
  max-height: 40px; 
  border: 1px solid #e5e5e5;
  display: flex;
  justify-content: center;
  padding: 8px;
  box-sizing: border-box;
  margin: 6px;
  margin-left: 0;
  color: transparent;
  cursor: pointer;

  &:hover{
      background: value;
    }
`
const Price = styled.span`
  font-weight: 800;
  margin-top: 20px;
`
const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  Margin-top: 20px;
  Margin-bottom: 20px;
  justify-content: space-between;
`
const AttributesContainer_ = styled.div`
`
const Image_ = styled.img`
  width: 250px;
  height: 220px; 
  object-fit: contain;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`
const Attribute_name = styled.div`
`