import React, { Component } from 'react'
import NavBar from '../../components/navbar'

class Stories extends Component {
  render() {
    return <NavBar user={this.props.user} />
  }
}

export default Stories
