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
        </LeftContainer>

        <MidContainer>
          <AddCount>
            <IncreaseIcon>
              <img src={decrease} alt="" />
              <VerticalIcon src={increase} />
            </IncreaseIcon>
          </AddCount>

          <Count>2</Count>

          <SubCount>
            <DecreaseIcon src={decrease} />
          </SubCount>
        </MidContainer>

        <RightContainer>
          <Direction>
            <Image_ src={gallery[0]} alt="" />
            <Prev_Next>
              <Previous src={previous} />
              <Next src={next} />
            </Prev_Next>
          </Direction>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`
const RightContainer = styled.div`
  flex: 1
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Direction = styled.div`
  position: relative;
  
`
const Image_ = styled.img`
  width: 230px;
  height: 200px; 
  object-fit: contain;
  display: flex;
  flex-direction: column;
`
const Prev_Next = styled.div`
  display: flex;
  width: 10px;
  height: 15px;
  z-index: 1;
  position: absolute;
  justify-content: space-between;
  left: 65%;
  top: 85%;
`
const Next = styled.img`
  background: rgba(0,0,0,0.73);
  padding: 3px;
  margin-left: 3px;
`
const Previous = styled.img`
  background: rgba(0,0,0,0.73);
  padding: 3px;
  margin-right: 3px;
`
const Brand = styled.span`
  font-weight: 350;
  font-size: 22px;
  line-height: 27px;
  margin-bottom: 5px;
`
const Name = styled.span`
  line-height: 27px;
  display: flex;
  align-items: center;
  font-weight: 250;
  font-size: 23px;
  font-style: normal;
  color: #1D1F22;
`
const AttributesCont = styled.div`
    max-width: 60px;
    max-height: 45px; 
    border: 1px solid #e5e5e5;
    display: flex;
    justify-content: center;
    padding: 7px;
    box-sizing: border-box;
    margin: 6px;
    margin-left: 0;
    margin-bottom: 10px;
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
  max-width: 30px;
  max-height: 30px; 
  border: 1px solid #e5e5e5;
  display: flex;
  justify-content: center;
  padding: 8px;
  box-sizing: border-box;
  margin: 6px;
  margin-left: 0;
  color: transparent;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover{
      background: value;
    }
`
const Price = styled.span`
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 5px;
`
const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  Margin-top: 10px;
  Margin-bottom: 10px;
  justify-content: space-between;
`
const Attribute_name = styled.div`
`
const DecreaseIcon = styled.img`
  width: 15px;
  height: 1px;
  justify-content: center;
  align-items: center;
  `
const AddCount = styled.div`
  width: 35px;
  height: 35px; 
  border: 1px solid #e5e5e5;
  display: flex;
  justify-content: center;
  padding: 8px;
  box-sizing: border-box;
  margin: 3px;
  align-items: center;
  margin-top: 10px;
`
const SubCount = styled.div`
  width: 35px;
  height: 35px; 
  border: 1px solid #e5e5e5;
  display: flex;
  padding: 8px;
  box-sizing: border-box;
  margin: 3px;
  justify-content: center;
  align-items: center;
`
const Count = styled.div`
  display: flex;
  margin-right: 15px;
  justify-content: center;
  align-items: center;
`
const IncreaseIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  `
const VerticalIcon = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 7.5px;
  top: -8.5px;
`