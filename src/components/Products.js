import React, { Component, Fragment } from 'react'
// import PropTypes from 'prop-types'
import { compose, graphql } from 'react-apollo'
import { Query } from 'react-apollo'
import { gql } from 'graphql-tag'
import styled from 'styled-components'
import ProductItem from './ProductItem'
import ProductPage from '../Pages/ProductPage'
import { Link } from 'react-router-dom'
import Categories from './Categories';
import { Navbar } from './Navbar';
import { CategoryItem } from './CategoryItem';
import { withApollo } from 'react-apollo'
import { ALLPRODUCT_QUERY } from '../Data/GraphqlData'
import { Cart } from './Cart';
import { fetchProducts } from '../actions/ProductsActions';
import { connect } from 'react-redux';


class Products extends Component {

  render() {
    let { name } = this.props.match.params
    return (
      <Container>
        <Categories />
        <Query query={ALLPRODUCT_QUERY} variables={{ title: name }}>
          {
            ({ data, loading, error }) => {
              if (loading) return <h4> Loading.</h4>
              if (error) console.log(error.message)
              if(data) console.log(data)
              return <Wrap>
                {
                  data.category.products.map(prod => (
                    <ProductItem key={prod.id} prod={prod} />
                  ))
                }
              </Wrap>
            }
          }
        </Query>
      </Container>
    )
  }
}

export default connect((state) => ({ products: state.products }),
  { fetchProducts, })(Products)

// export default Products

const Container = styled.div`
  padding: 10px; 
`
const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
`
const Nav = styled.div`
  display: flex;
`