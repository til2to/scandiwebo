import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';


export class CategoryItem extends Component {
  static propTypes = {}

  render() {
    const { catItem: { name } } = this.props
    return (
          <Link to={`/products/${name}`} style={{textDecoration: "none", display: "flex"}}>
            <Wrapper> {name.toUpperCase()} </Wrapper>
          </Link>
    )
  }
}

export default CategoryItem

const Wrapper = styled.span`
    padding: 10px;
    max-width: 150px; 
`