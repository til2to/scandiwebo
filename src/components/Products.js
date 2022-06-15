import React, { Component, Fragment } from 'react'
// import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import styled from 'styled-components'
import ProductItem from './ProductItem'
import ProductPage from '../Pages/ProductPage'
import Categories from './Categories';
import Navbar from './Navbar';
import { CategoryItem } from './CategoryItem';
import { ALLPRODUCT_QUERY } from '../Data/GraphqlData'
import { fetchProducts } from '../actions/ProductsActions';
import { connect } from 'react-redux';
import CategoryName from './CategoryName'


class Products extends Component {

  render() {
    let { name } = this.props.match.params
    return (
      <Container>
        <Navbar />
        {/* <CategoryItem /> */}
        <Query query={ALLPRODUCT_QUERY} variables={{ title: name }}>
          {
            ({ data, loading, error }) => {
              if (loading) return <h4> Loading.</h4>
              if (error) console.log(error.message)
              if (data) console.log(data)
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

const Container = styled.div`
  padding: 10px;
`
const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px 0;
`