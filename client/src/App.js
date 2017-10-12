import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import IdeaPage from './components/idea/IdeaPage'
import LoginPage from './components/login/LoginPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/">Home</Link><br/>
            <Link to="/login">Login</Link><br/>
            <Link to="/user">Idea</Link>
          </div>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/idea/:userId' component={IdeaPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
