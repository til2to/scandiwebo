import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MyBag from './MyBag'

class Overlay extends Component {
  static propTypes = {}

  render() {
    const {overlayToggle} = this.props
    return (
        <Wrapper>
            <BagStyle>
                <MyBag overlayToggle={overlayToggle}/>
            </BagStyle>
        </Wrapper>
    )
  }
}

export default Overlay

const Wrapper = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background-color: rgba(57,55, 72, 0.22);
    z-index: 1;
    margin-top: 80px;
    display: flex;
    justify-content: flex-end;
    inset: 0px;
    border: none;
`
const BagStyle = styled.div`
    max-width: 450px;
    // opacity: 1;
    overflow-y: scroll;
    z-index: 2147483647;
    margin-right: 20px;
`