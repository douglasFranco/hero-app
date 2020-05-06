import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import CharactersList from '../characters/CharactersList'
import Character from '../characters/Character'

const Routes = props => {
  return (
    <HashRouter>
      <Switch>
      <Route exact path="/" component={CharactersList}/>
      <Route path="/character/" component={Character}/>
      <Redirect from="*" to="/"/></Switch>      
    </HashRouter>
  )
}

export default Routes