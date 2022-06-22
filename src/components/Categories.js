import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { CategoryItem } from './CategoryItem';
import { Query } from 'react-apollo'
import { CATEGORIES_QUERY } from '../Data/GraphqlData'

class Categories extends Component {
  static propTypes = {}

  render() {
    return (
        <Query query={CATEGORIES_QUERY}>
          {
            ({ data, loading, error }) => {
              if (loading) return <h3>loading in categories</h3>
              if (error) console.log(error.message)

              return <Wrap>
                {
                  data.categories.map(catItem => (
                    <CategoryItem key={catItem.name} catItem={catItem} />
                  ))
                }
              </Wrap>

            }
          }
        </Query>
    )
  }
}

export default Categories

const Container = styled.div`
`
const Wrap = styled.div`
   display: flex; 
`