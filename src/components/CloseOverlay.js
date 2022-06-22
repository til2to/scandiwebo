import React, { Component } from 'react'
import styled from 'styled-components'
import Overlay from './Overlay'

class CloseOverlay extends Component {

  static propTypes = {}

  render() {
    return (
      <Container>
        <Overlay />
      </Container>
    )
  }
}

export default CloseOverlay

const Container = styled.div`
    display: none;
`