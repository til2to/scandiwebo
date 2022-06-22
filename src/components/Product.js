import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import styled from 'styled-components';
import Attributes from './Attributes'
import SideList from './SideList'
import { PRODUCT_QUERY } from '../Data/GraphqlData';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions'


class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      product: {}
    };
  }

  static propTypes = {}

  handleClick = (property, item_id) => {
    this.setState({ product: { ...this.state.product, [property]: item_id } })
    console.log(item_id)
  }

  submitToCart = (item) => {
    const objectArray = Object.entries(this.state.product);
    let newAttributes = []
    objectArray.forEach(([key, value]) => {
      newAttributes.push({ name: key, value: value })
    });
    let copied = JSON.parse(JSON.stringify(item));
    copied.attributes = newAttributes
    
    if(copied.attributes == ''){
      console.log('select an attribute')
    }
    else{
      this.props.addToCart(copied)
    }
  }

  handleTab = (index) => {
    this.setState({ index: index })
  }

  componentDidMount() {
    const { index } = this.state;
  }

  render() {
    let { id } = this.props.match.params
    const { index, color, text } = this.state;

    return (
      <Container>
        <Query query={PRODUCT_QUERY} variables={{ id: id }}>
          {
            ({ loading, data, error }) => {
              if (loading) return <h1>Loading...</h1>
              if (error) console.log(error)

              const { prices, gallery, name, brand, description, attributes } = data.product;
              let currentProduct = data.product;

              return <Wrapper>
                <SideImgContainer>
                  <SideWrapper>
                    <SideList gallery={gallery} tab={this.handleTab} />
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
                        <Attributes key={item.id} item={item}
                          selectedAttributes={this.state.product} handleClick={this.handleClick} />
                      ))
                    }
                    <PriceInfo>
                      <AttributePrice>PRICE :</AttributePrice>
                      <AttributePrice>
                        {prices[0].currency.symbol} {prices[0].amount}
                      </AttributePrice>
                    </PriceInfo>
                  </AttributesContainer>
                  {
                    attributes != ''
                      ?
                      (
                        <Button onClick={() => this.submitToCart(currentProduct)}>          
                          ADD TO CART
                        </Button>
                      )
                      :
                      (<Empty>Sorry! no attributes to select.
                        Product already added to cart
                      </Empty>)
                  }
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

export default connect(null, { addToCart })(Product)

const Container = styled.div`
  justify-content: center;
  padding: 10px;
  margin-left: 25px;
  margin-right: 25px;
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
  max-width: 480px;
   `
const Image_ = styled.img`
  display: flex;
  max-height: 50%;
  border: 0.5px ;
  widht: 400px;
  height: 500px;
   `
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 30px;
  margin-left: 40px;
`
const Brand = styled.span`
  font-weight: 400;
  font-size: 25px;
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
  font-size: 25px;
  font-style: normal;
  color: #1D1F22;
`
const AttributesContainer = styled.div`
  margin-top: 15px;
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
  margin-top: 100px;
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
`
const Empty = styled.span`
  color: red;
  font-size: 18px;
  font-weight: 500px;
  flex-wrap: wrap;
`