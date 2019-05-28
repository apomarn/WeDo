import React, { Component } from 'react';
import { spaces, breakpoints, colors, textStyles } from '../../../../styles'
import styled from 'styled-components'


const MyDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const Image = styled.img`
width: ${spaces.relax * 5}px;
align-self: center;
`

const Title = styled.h4`
${textStyles.h4Bold}
`

const MyLink = styled.p `
color: ${colors.primary}
margin: 0px;

${textStyles.h4Bold}
`



class Feature extends Component {
  render() {
    return (
      <MyDiv>
        <Image src={this.props.image}></Image>
        <Title>{this.props.title}</Title>
        <MyLink>{this.props.link}</MyLink>
      </MyDiv>
    );
  }
}

export default Feature;