import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { gql } from 'graphql-tag'
import styled from 'styled-components'
import Product from './Product'
import { Attributes } from './Attributes';
import { SideList } from './SideList';
import { ProductItem } from './ProductItem';
import CartItem from './CartItem'

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

            attributes{
              id
              type
              name

              items{
                id
                value
                displayValue
              }
            }
          
            prices{
              amount
              currency{
                label
                symbol
              }
            }
          }
      }
    }
`

export class Cart extends Component {
  static propTypes = {

  }

  render() {
    const { cartItems } = this.props
    console.log(cartItems) 
    return (
      <Container>
        <Title>CART</Title>
        <LeftContainer>
          <Query query={PRODUCT_QUERY} variables={{ title: "all" }}>
            {
              ({ data, loading, error }) => {
                if (loading) return <h4> Loading.</h4>
                if (error) console.log(error.message)

                // console.log(data.category)
                return <Wrap>
                  {
                    data.category.products.map(product => (
                      <CartItem key={product.id} product={product} />
                    )) 
                  }
                </Wrap>
              }
            }
          </Query>
        </LeftContainer>
      </Container>
    )
  }
}

export default Cart

const Wrap = styled.div`
  display: flex;
`
const Title = styled.div`
  margin-bottom: 30px;
`
const LeftContainer = styled.div`
  flex: 1
`
const RightContainer = styled.div`
  flex; 1
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
`
const SideImages = styled.div`
  margin-top: 100px; 
  margin-right: 25px;
`
const ProductImg = styled.div`
  display: flex;
  box-sizing: border-box;
  flex: 1;
  margin-left: 5px;
  margin-top: 100px;
  justify-content: center;
  max-width: 500px;
   `
const Image_ = styled.img`
  display: flex;
  max-height: 50%;
  border: 0.5px ;
  widht: 400px;
  height: 500px;
   `
const ProductInfo = styled.div`
  // flex:1;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 30px;
  margin-left: 40px;
`
const Brand = styled.span`
  font-weight: 400;
  font-size: 30px;
  line-height: 27px;
  margin-top: 15px;
  margin-bottom: 15px;
`
const Name = styled.span`
  line-height: 27px;
  width: 192;
  display: flex;
  align-items: center;
  font-weight: 250;
  font-size: 30px;
  font-style: normal;
  color: #1D1F22;
`
const AttributesContainer = styled.div`
  margin-top:15px;
`
const AttributePrice = styled.span`
  font-weight: 700;
  margin-bottom: 10px; 
`
const PriceInfo = styled.span`
  display: flex;
  flex-direction: column;
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
  margin-top: 5px;
  margin-bottom: 10px;
  align-items: center;  
`