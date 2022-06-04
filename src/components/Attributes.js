import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import SwatchItem from './SwatchItem';
import { UnSwatch } from './UnSwatch';


export class Attributes extends Component {
  static propTypes = {}

  render() {
    const { name, type, id, items } = this.props.item
    // {items.filter((key) => console.log(key.value))} 
    return (
      <Container>
        <Wrapper> 
        <AttributeName>{name} :</AttributeName>
        <AttributesContainer>
          { 
          type === 'swatch'
            ? 
            items.map((color, id) => (
              <SwatchItem key={color.id} color={color} />
            ))
            :
            items.map((text, index) => (
              <UnSwatch key={text.id} text={text}/>
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