import * as React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import App from '../App'
import { About } from '../About'
import { Contact } from '../Contact'
import Project from '../Project'
import AddProject from '../AddProject'
import { Adforge } from "../Adforge"

const AppRouter: React.FC = () => (
  <Router>
    <Route path="/" exact component={App} />
    <Route path="/about" exact component={About} />
    <Route path="/contact" exact component={Contact} />
    <Route path="/ownlocal/adforge-preview" exact component={Adforge} />
    <Route path="/project/add" exact component={AddProject} />
    <Route path="/projects/:id" component={Project} />
  </Router>
)

export default AppRouter
