import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Home from './pages/home'
import Questions from './pages/questions'
import QuestionsReview from './pages/questions-review'
import Auth from './pages/auth'
import Dashboard from './pages/dashboard'
import GuestList from './pages/guest-list'
import Stories from './pages/stories'
import firebase from './firebase.js'

class Wrapper extends Component {
  constructor() {
    super()

    this.renderComponent = this.renderComponent.bind(this)
  }

  renderComponent(props) {
    const { component: Component, user, secured } = this.props

    if (user || !secured) {
      return <Component {...props} user={user} />
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
        <Wrapper path="/" exact component={Home} user={user} />
        <Wrapper path="/signin" exact component={Auth} user={user} />
        <Wrapper path="/signup" exact component={Auth} user={user} />
        <Wrapper secured path="/questions" exact component={Questions} user={user} />
        <Wrapper secured path="/questions-review" exact component={QuestionsReview} user={user} />
        <Wrapper secured path="/dashboard" exact component={Dashboard} user={user} />
        <Wrapper secured path="/stories" exact component={Stories} user={user} />
        <Wrapper secured path="/guest-list" exact component={GuestList} user={user} />
      </Router>
    )
  }
}

ReactDOM.render(<AppRouter />, document.getElementById('root'))
