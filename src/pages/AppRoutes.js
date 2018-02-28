import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../pages/App'
import Register from '../pages/Register/Register'

/**
 * Components
 */
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Rates from '../pages/Rates/Rates'
import SignOut from '../pages/SignOut/SignOut'

class AppRoutes extends Component {

  render () {
    return (
      <Router>
        <App>
          <Home>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/select-rate' component={Rates} />
              <Route path='/signout' component={SignOut} />
            </Switch>
          </Home>
        </App>
      </Router>
    )
  }
}

export default AppRoutes
