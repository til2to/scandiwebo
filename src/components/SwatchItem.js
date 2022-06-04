import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export class SwatchItem extends Component {
  static propTypes = {

  }

  render() {
      const {value, displayValue, id} = this.props.color
    return (
      <Container>
          <Wrapper>
              <ColorContainer style={{backgroundColor:value}}>
                {value}  
              </ColorContainer>
          </Wrapper>
        
      </Container>
    )
  }
}

export default SwatchItem

const Container = styled.div`
  margin-top: 5px;
  margin-bottom: 6px; 
`
const Wrapper = styled.div`
  display: flex;
`
const ColorContainer = styled.div`
  margin-top: 0px;
  max-width: 40px;
  max-height: 40px; 
  border: 1px solid #A6A6A6;
  display: flex;
  justify-content: center;
  padding: 8px;
  box-sizing: border-box;
  margin: 6px;
  margin-left: 0;
  color: transparent;

  &:hover{
      background: value;
    }
`
