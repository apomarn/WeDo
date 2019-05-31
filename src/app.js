import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Home from './pages/home'
import Questions from './pages/questions'
import Auth from './pages/auth'
import Dashboard from './pages/dashboard'
import firebase from './firebase.js'

class PrivateRoute extends Component {
  constructor() {
    super()

    this.renderComponent = this.renderComponent.bind(this)
  }

  renderComponent(props) {
    const { component: Component, user } = this.props

    if (user) {
      return <Component {...props} />
    }

    const routeState = { from: props.location }

    return <Redirect to={{ pathname: '/signin', state: routeState }} />
  }

  render() {
    return <Route {...this.props} exact component={this.renderComponent} />
  }
}

class AppRouter extends Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      user: null
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user, loading: false })
    })
  }

  render() {
    const { loading, user } = this.state

    if (loading) {
      return null
    }

    return (
      <Router>
        <Route path="/" exact component={Home} user={user} />
        <Route path="/signin" exact component={Auth} user={user} />
        <Route path="/signup" exact component={Auth} user={user} />
        <PrivateRoute path="/questions" component={Questions} user={user} />
        <PrivateRoute path="/dashboard" component={Dashboard} user={user} />
      </Router>
    )
  }
}

ReactDOM.render(<AppRouter />, document.getElementById('root'))
