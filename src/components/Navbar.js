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
import { connect } from 'react-redux';
import MyBag from './MyBag'

class Navbar extends Component {

    static propTypes = {}

    render() {
        const { cartItems } = this.props

        return (
            <Container>
                <Wrapper>
                    <NavLeft>
                        <Categories />
                    </NavLeft>
                    <NavCenter>
                        <LogoHolder src={logoH} alt="" />
                        <NavLogo src={logo} alt="" />
                    </NavCenter>
                    <NavRight>
                        <CurrencyItems>
                            <Currency src={dollar} alt="" />
                            <DownArrow src={down_arrow} alt="" />
                            <Bag>
                                <TotalItems>
                                    {cartItems?.length}
                                </TotalItems>
                                <img src={basket_} alt='' style={{alignSelf: 'flex-end'}}/>
                            </Bag>
                        </CurrencyItems>
                    </NavRight>
                </Wrapper>
            </Container>
        )
    }
}

export default connect((state) => ({ cartItems: state.cart.cart }),
    null)(Navbar)

const Container = styled.div`
    height: 60px;  
  `
const Wrapper = styled.div`
    display: flex;
`
const NavLeft = styled.div`
    flex: 1;
    display: flex;
    margin: 10px;
    align-items: center;
`
const NavCenter = styled.div`   
    flex: 1;
    margin-left: 30px;
    display: flex;
    justify-content: center;
    align-items: center; 
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
const Currency = styled.img`
    margin-right: 10px;
`
const CurrencyItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
    margin-left: 10px;
`
const DownArrow = styled.img`
    height: 3px;
    width: 6px;
    margin-top: 4px;
`
const Bag = styled.div`
    margin-right:30px;
    margin-left: 15px; 
    position: relative; 
`
const TotalItems = styled.div`
    position: absolute;
    padding: 2px 5px;
    background: rgba(0,0,0,0.73);
    border-radius: 50%;
    color: white;
    font-size: 12px;
    bottom: 10px;
    left: 10px;
`