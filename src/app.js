import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './pages/home'

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
    </Router>
  )
}

ReactDOM.render(<AppRouter />, document.getElementById('root'))
