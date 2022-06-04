import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export class UnSwatch extends Component {
  static propTypes = {

  }

  render() {
    const { value } = this.props.text 
    return (
      <Container>
          <Wrapper>
            {value}
          </Wrapper>
      </Container>
    )
  }
}

export default UnSwatch

const Container = styled.div`

`
const Wrapper = styled.div`
    margin-top: 0px;
    max-width: 70px;
    max-height: 45px; 
    border: 1px solid #A6A6A6;
    display: flex;
    justify-content: center;
    padding: 8px;
    box-sizing: border-box;
    margin: 6px;
    margin-left: 0;

    &:hover{
        background: #1D1F22;
        color: white;
      }
`