import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/home'

export default () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </>
)
