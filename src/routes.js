import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/home'
import Signup from './pages/signup'
import Login from './pages/login'
import Profile from './pages/profile'
import Create from './pages/create'

export default () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/create" component={Create} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/" component={Home} />
    </Switch>
  </>
)
