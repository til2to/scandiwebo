import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

export class SideList extends Component {
  static propTypes = {}

  render() {
    const { gallery_item } = this.props;
    const {gallery, tab, myRef} = this.props;
  
    return (
      <Container>
        <Wrapper>
          <div className='side_images' ref={myRef}>
            {
            gallery.map((gallery_item, index) => (
              <SideImage src={gallery_item} key={index} 
              onClick={()=>tab(index)}/>
            ))
          }
          </div>
        </Wrapper>
      </Container>
    )
  }
}

export default SideList

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`
const Wrapper = styled.div`
  margin-left: 20px;
`
const SideImage = styled.img`
  width: 130px;
  height: 90px; 
  object-fit: contain;
  display: flex;
  flex-direction: column;
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
  // &:hover{
  //   opacity: 0.5;
  //   border: 1px solid lightblue;
  // }
`