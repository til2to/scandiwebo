import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import logo from '../images/logo.png'
import down_arrow from '../images/down_arrow.png'
import dollar from '../images/dollar.png'
import basket_ from '../images/basket_.png'
import logoH from '../images/logoH.png'
import { Link } from 'react-router-dom';
import Categories from './Categories';
import { CategoryItem } from './CategoryItem';

export class Navbar extends Component {
  static propTypes = {}

  render() {
    // const { catItem: { name } } = this.props
    return (
      <Container> 
          <Wrapper>
            <NavLeft>                
                {/* <Left_first>
                    <LeftItem>All</LeftItem>
                </Left_first>
                <Left_second>
                    <LeftItem>Tech</LeftItem>
                </Left_second>
                <Left_third>
                    <LeftItem>Clothes</LeftItem>
                </Left_third> */}
                {/* <Link to={`/products/${name}`} style={{ textDecoration: "none" }}>
                    <p style={{ display: "flex" }}> {name} </p> 
                </Link> */}
            </NavLeft>
            <NavCenter>
              <LogoHolder src={logoH} alt="" />
              <NavLogo src={logo} alt="" />
            </NavCenter>
            <NavRight>
                <CurrencyItems>
                    <Currency src={dollar} alt=""/>                             
                    <DownArrow src={down_arrow} alt=""/> 
                    <Bag src={basket_} alt="" />
                </CurrencyItems>
                
            </NavRight>
          </Wrapper>
      </Container>
    )
  }
}

export default Navbar

const Container = styled.div`
    background-color: ;
    height: 60px;
    
  `
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;    
`
const NavLeft = styled.div`
    flex: 1;
    display: flex;
    margin: 10px;
    align-items: center;
    // justify-content: center
    margin-left: 45px;  
`
const NavCenter = styled.div`
    
    flex: 1;
    margin-left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    // height: 28.62px;
    // width: 31.18px;
    
`
const LogoHolder = styled.img`
    position: relative;
    height: 28.62px;
    width: 31.18px;
    position: relative;
    background: linear-gradient(316.98deg, #52D67A 16.86%, #5AEE87 84.04%);
`
const NavLogo = styled.img`
    position: absolute;
    width: 14.08px;
    height: 8.99px;
    position: absolute;
`
const NavRight = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`
const Left_first = styled.span`
    margin-right: 25px;
`
const Left_second = styled.span`
    margin-right: 25px;
`
const Left_third = styled.span`
    margin-right: 25px;
`
const LeftItem = styled.span`
    font-weight: 150;
    cursor: pointer;
    `
const Currency = styled.img`
    margin-right: 10px;
`
const CurrencyItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 30px;

`
const DownArrow = styled.img`
    height: 3px;
    width: 6px;
    margin-top: 4px;
`
const Bag = styled.img`
    margin-right:30px;
    height: 18px;
    margin-left: 15px;
    
`