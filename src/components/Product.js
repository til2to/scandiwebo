import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { gql } from 'graphql-tag'
import styled from 'styled-components';
import { Navbar } from './Navbar';
import Attributes from './Attributes'
import Categories from './Categories';
import SideList from './SideList'
import { Link } from 'react-router-dom';
import { Cart } from './Cart';
import { Products } from './Products';
import { PRODUCT_QUERY } from '../Data/GraphqlData';


export class Product extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      cartItems: []
    };
  }

  static propTypes = {}

  addToCart = (currentProduct) => {
  // const { cartItems } = this.state;
  // const { id } = currentProduct;
  // console.log(currentProduct);
  // let alreadyInCart = false;
  // const cartItem = cartItems.find(item => item.id === id)
  // if (cartItem) {
  //   cartItem.quantity += 1
  //   alreadyInCart = true
  // } else {
  //   cartItems.push({ ...currentProduct, quantity: 1 })      
  // }
  // console.log(cartItems.length)

  const cartItems = this.state.cartItems.slice();
  let alreadyInCart = false;
  cartItems.forEach((item) => {
    if (item.id === currentProduct.id) {
  return { ...item, count: item.count + 1 }
      item.count+=1
      alreadyInCart = true;
    }
  });
  if (!alreadyInCart) {
    cartItems.push({ ...currentProduct, count: 1 });
  }
  this.setState({ cartItems })
  }

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index })
  }

  componentDidMount() {
    const { index } = this.state;
  }

  render() {
    let { id } = this.props.match.params
    const { index, cartItems } = this.state;
    // console.log(this.state)
    return (
      <Container>
        {/* <Categories /> */}

        <Navbar cartItems={cartItems} />
        <Query query={PRODUCT_QUERY} variables={{ id: id }}>
          {
            ({ loading, data, error }) => {
              if (loading) return <h1>Loading...</h1>
              if (error) console.log(error)

              const { id, prices, gallery, name, brand, description, inStock, attributes } = data.product;
              let currentProduct = data.product;

              return <Wrapper>
                <SideImgContainer>
                  <SideWrapper>
                    <SideList gallery={gallery} tab={this.handleTab} myRef={this.myRef} />
                  </SideWrapper>
                </SideImgContainer>
                <ProductImg>
                  <Image_ src={gallery[index]} alt="" />
                </ProductImg>
                <ProductInfo>
                  <Brand>{brand}</Brand>
                  <Name>{name}</Name>
                  <AttributesContainer>
                    {
                      data.product.attributes.map((item) => (
                        <Attributes key={item.id} item={item} />
                      ))
                    }
                    <PriceInfo>
                      <AttributePrice>PRICE :</AttributePrice>
                      <AttributePrice>
                        {prices[0].currency.symbol} {prices[0].amount}
                      </AttributePrice>
                    </PriceInfo>
                  </AttributesContainer>

                  {/* <Link to='/cart' style={{ textDecoration: 'none' }}>
                    <Button onClick={() => this.addToCart(currentProduct)}>
                      ADD TO CART
                    </Button>
                  </Link> */}
                  <Button onClick={() => this.addToCart(currentProduct)} >
                    ADD TO CART
                  </Button>
                  <Hide>
                    {/* <Cart addToCart={this.addToCart} /> */}
                  </Hide>
                  <ProductDescription><div dangerouslySetInnerHTML={{ __html: description }} /></ProductDescription>
                </ProductInfo>
              </Wrapper>
            }
          }
        </Query>
      </Container>
    )
  }
}

export default Product

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px; 
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ProductImg = styled.div`
  display: flex;
  box-sizing: border-box;
  flex: 1;
  margin-left: 20px;
  margin-top: 15px;
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
  margin-top: 50px;
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
const ProductDescription = styled.div`
  width: 256px;
  display: flex;
  flex-wrap: wrap; 
  font-size: 16px;
  margin-top: 5px;
`
const SideImgContainer = styled.div`
  margin-left: 20px;
`
const SideWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  
`
const SideImageC = styled.img`
  max-width: 130px;
  height: 90px; 
  object-fit: contain;
  margin-bottom: 5px;
  cursor: pointer;

  &:hover,
  $.active {
    background-color: rgba(84, 78, 114, 1);
    border-radius: 10px 0px 0px 10px;
  }
  &.active {
    color: #f8dc2f;
  }
`
const Hide = styled.div`
  display: none;
`