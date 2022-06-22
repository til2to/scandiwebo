import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';


class Attributes extends Component {
  static propTypes = {}

  render() {
    const { item: { name, type, items }, handleClick, selectedAttributes } = this.props
    
    return (
      <Container>
        <Wrapper>
          <AttributeName>{name} :</AttributeName>
          <AttributesContainer>
            {
              type === 'swatch'
                ?
                items.map((color, id) => (
                  <ColorContainer key={color.id} color={color} onClick={() => handleClick(name, color.value)} 
                  isActive={selectedAttributes.hasOwnProperty(name) && selectedAttributes[name] == color.id ? true : false}/>
                ))
                :
                items.map((text, index) => (
                  <AttTextContainer key={index} text={text} onClick={() => handleClick(name, text.value)} 
                  isActive={selectedAttributes.hasOwnProperty(name) && selectedAttributes[name] == text.id ? true : false}>
                    {text.value}
                  </AttTextContainer>
                ))
            }
          </AttributesContainer>
        </Wrapper>
      </Container>
    )
  }
}

export default Attributes

const Container = styled.div`
  margin-top: 6px;
  margin-bottom: 10px;
`
const Wrapper = styled.div`
`
const AttributesContainer = styled.div`
  margin-top: 0px;
  display: flex;
`
const AttributeName = styled.span`
  font-weight: 700;
  margin-bottom: 10px;
`
const AttTextContainer = styled.div`
    margin-top: 0px;
    max-width: 65px;
    max-height: 45px; 
    border: 1px solid #A6A6A6;
    display: flex;
    justify-content: center;
    padding: 8px;
    box-sizing: border-box;
    margin: 6px;
    margin-left: 0;
    cursor: pointer;
    background: ${props => props.isActive ? '#1d1f22' : 'white'};
    color: ${props => props.isActive && 'white'};
`
const ColorContainer = styled.div`
  margin-top: 0px;
  max-width: 100px;
  max-height: 50px; 
  border: ${props => props.isActive ? '5px, solid, #a6a6a6' : 'yellow'}
  display: flex;
  justify-content: center;
  padding: 8px;
  box-sizing: border-box;
  margin: 6px;
  margin-left: 0;
  cursor: pointer;
  background: ${props => props.color.value};
`