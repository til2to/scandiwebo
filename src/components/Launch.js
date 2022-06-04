import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { gql } from 'graphql-tag'
import { params } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PRODUCT_QUERY = gql`
    query productQuery($title: String!){ 
        category(input: {title: $title}){
          name
          products{
            inStock
            name
            id
            brand
            description
            gallery
          }
      }
    }
`

export class Launch extends Component {
  static propTypes = {}

  render() {
    let { name } = this.props.match.params
    // name = toString(name)
    // console.log(name)

    return (
      <Fragment>
        <Query query={PRODUCT_QUERY} variables={{ title: name }}>
          {
            ({loading, data, error}) => {
              if(loading) return <h1>Loading</h1>
              if(error) console.log(error)
              
              console.log(data.category)
              const {products: { id, brand, inStock }} = data.category;
              return <Wrap>
                <Link to={'/products'}>
                  <Button> Back </Button>
                </Link>

                <h1>Hello launch component</h1>
              </Wrap>
            }
          }
          
        </Query>
      </Fragment>
    )
  }
}

export default Launch

const Wrap = styled.div`

`
const Button = styled.div`
  font-weight: 600;
  color: white;
  background-color: #5ECE7B;
  height: 40px;
  width: 250px;
  display: flex;
  justify-content: center;
  border-radius: 3px; 
  opacity: 0.85;
  font-size: 13px;
  cursor: pointer;
  margin-top: 20px;
  align-items: center;  
  // margin-left: 20px
`