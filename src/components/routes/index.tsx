import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Adforge } from "../Adforge"

const AppRouter: React.FC = () => (
  <Router>
    <Route path="/" exact component={Adforge} />
  </Router>
)

export default AppRouter
