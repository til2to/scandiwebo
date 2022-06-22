import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import previous from '../images/previous.png'
import next from '../images/next.png'
import decrease from '../images/decrease.png'
import increase from '../images/increase.png'

class CartItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 1
    }
  }
  
  static propTypes = {}

  handleCountInc = (count) => {
      this.setState({ count: count+1 })
      console.log(count)
    }
  handleCountDec = (count) => {
    count > 1 && this.setState({ count: count-1 })
    console.log(count)
  }

  render() {
    const { name, brand, gallery, attributes, prices } = this.props.item
    const { noArrows } = this.props
    const { count } = this.state;
    const {addCount, subCount} = this.props 

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
              <Attribute_name key={item.name}>
                {item.name}:
                <AttributesItems>
                  {
                    item.name === 'Color'
                      ?
                      <ColorContainer style={{ backgroundColor: item.value }} />
                      :
                      <AttributesCont>{item.value}</AttributesCont>
                  }
                </AttributesItems>
              </Attribute_name>
            ))
          }
        </LeftContainer>

        <MidContainer>
          <AddCount onClick={()=>addCount(count)}>
            <IncreaseIcon>
              <img src={decrease} alt="" />
              <VerticalIcon src={increase} />
            </IncreaseIcon>
          </AddCount>

          <Count>{count}</Count>

          <SubCount onClick={()=>subCount(count)}>
            <DecreaseIcon src={decrease} />
          </SubCount>
        </MidContainer>

        <RightContainer>
          <Direction>
            <Image_ src={gallery[0]} alt="" />
            {
              !noArrows &&
              (
                <>
                  <Prev_Next direction="left">
                    <Previous src={previous} />
                  </Prev_Next>
                  <Prev_Next direction="right">
                    <Next src={next} />
                  </Prev_Next>
                </>
              )
            }
          </Direction>
        </RightContainer>
      </Container>
    )
  }
}

export default CartItem

const Container = styled.div`
  display: flex;
  border-top: 0.5px solid #e5e5e5;
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
  margin-top: 5px;
`
const Next = styled.img`
  // background: rgba(0,0,0,0.73);
  // padding: 3px;
  // margin-left: 3px;
`
const Previous = styled.img`
  // background: rgba(0,0,0,0.73);
  // padding: 3px;
  // margin-right: 3px;
`
const Prev_Next = styled.div`
  display: flex;
  width: 12px;
  height: 15px;
  z-index: 1;
  position: absolute;
  background: rgba(0,0,0,0.73);
  bottom: 30px;
  // justify-content: space-between;

  // left: ${props => props.direction === "left" && "70px"}
  right: ${props => props.direction === "right" && "70px"}
`
const Brand = styled.span`
  font-weight: 350;
  font-size: 21px;
  margin-bottom: 5px;
`
const Name = styled.span`
  display: flex;
  align-items: center;
  font-weight: 220;
  font-size: 21px;
  font-style: normal;
  color: #1D1F22;
`
const AttributesCont = styled.div`
    max-width: 60px;
    max-height: 45px; 
    border: 2px solid #e5e5e5;
    display: flex;
    justify-content: center;
    padding: 7px;
    box-sizing: border-box;
    margin: 6px;
    margin-left: 0;
    margin-bottom: 10px;
    cursor: pointer;
    background-color: '#1D1F22';
    &:hover{
        background: #1D1F22;
        color: white;
      };
`
const AttributesItems = styled.div`
      display: flex;
`
const ColorContainer = styled.div`
  max-width: 22px;
  max-height: 22px; 
  border: 1px solid #e5e5e5;
  display: flex;
  justify-content: center;
  padding: 8px;
  box-sizing: border-box;
  margin: 6px;
  margin-left: 0;
  cursor: pointer;
  margin-bottom: 10px;
`
const Price = styled.span`
  font-weight: 350;
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
  cursor: pointer;
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
  cursor: pointer;
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