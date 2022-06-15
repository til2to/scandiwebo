import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { CategoryItem } from './CategoryItem';
import { Query } from 'react-apollo'
import { gql } from 'graphql-tag'
import CategoryName from './CategoryName'
import Navbar from './Navbar'
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
              // const {categories:{name}} = data.categories

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
  // display: flex;
`
const Wrap = styled.div`
   display: flex; 
  //  flex-direction: column;
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
  `