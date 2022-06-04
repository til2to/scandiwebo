import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';


export class CategoryItem extends Component {
  static propTypes = {}
  state = {
    cat: []
  }

  render() {
    const { catItem: { name } } = this.props
    return (
      <Container>
        <Wrapper >
          <Link to={`/products/${name}`} style={{textDecoration: "none", display: "flex"}}>
            <p> {name} </p>
          </Link>
        </Wrapper>
      </Container>
    )
  }
}

export default CategoryItem

const Container = styled.div`
    // flex: 1;
    min-width: 400px;
`
const Wrapper = styled.div`
    // display: flex;
    // flex-direction: column;
    padding: 10px;
    max-width: 150px; 
`