import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import NavBar from '../../components/navbar'
import Input from '../../components/input'
import Result from './result'
import { map } from 'lodash'
import { spaces, breakpoints, colors, textStyles } from '../../styles'
import { images } from '../../utils'

const StyledInput = styled(Input)`
  border: 1px solid gray;
  margin-bottom: ${spaces.relax}px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: ${spaces.cozy * 6}px;
  max-width: ${spaces.cozy * 80}px;
  padding: 0 ${spaces.comfortable}px;
`

class Stories extends Component {
  constructor(props) {
    super(props)

    this.state = {
      results: []
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    axios.get('https://www.zola.com/api/v0/registry/search?q=roberto').then(data => {
      console.log(data)
    })
  }

  render() {
    return (
      <>
        <NavBar user={this.props.user} />
        <Container>
          <StyledInput placeholder="Search by First/Last Name" onChange={this.onChange} />
          {map(this.state.results, result => {
            return <Result key={result.weddingDate} {...result} />
          })}
        </Container>
      </>
    )
  }
}

export default Stories
