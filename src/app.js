import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Questions from './pages/questions'

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/questions" exact component={Questions} />
    </Router>
  )
}

ReactDOM.render(<AppRouter />, document.getElementById('root'))
