import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import { gql } from 'graphql-tag'


const CATEGORY_QUERY = gql`
    query categoryQuery($id: String!){ 
        category(id: $id){
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

export class CategoryName extends Component {
  static propTypes = {

  }

  render() {
    let { category:{name, products:{id, inStock}} } = this.props.match.params;
    // const { name } =  this.props;
    return (
      <Container>
        <Query query={CATEGORY_QUERY} variables={{id}}>
          
          {
            ({loading, error, data}) => {
              if(loading) return <h3>Loading</h3>
              if(error) console.log(error.message)
              console.log(data)

              return <h1>test</h1>
            }
          }
        </Query>
        
        <Wrapper>
          // {/* <p>Category {name}</p> */}
        </Wrapper>
      </Container>
    )
  }
}

export default CategoryName

const Container = styled.div`
    // height: 50px;
    margin: 20px 40px;
    padding: 20px;
`
const Wrapper = styled.div`
  font-size: 30px;
  font-weight: 100;
`