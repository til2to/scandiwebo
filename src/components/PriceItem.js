import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class PriceItem extends Component {
    state = {}
    static propTypes = {}

    render() {
        const { item } = this.props
        return (
            <Container>
                {
                    item.currency.label === 'USD' &&
                    <Wrapper>{item.currency.symbol} {item.amount}</Wrapper>
                }
            </Container>
        )
    }
}

export default PriceItem

const Container = styled.div`
`
const Wrapper = styled.div`
`