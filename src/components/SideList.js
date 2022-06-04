import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export class SideList extends Component {
  static propTypes = {

  }

  render() {
    const { gallery_item } = this.props
    return (
      <Container>
        <Wrapper>
         <SideImage img src={ gallery_item } alt="" />
        </Wrapper>
      </Container>
    )
  }
}

export default SideList

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`
const Wrapper = styled.div`
  margin-left: 20px;
`
const SideImage = styled.img`
  width: 130px;
  height: 90px; 
  object-fit: contain;
`