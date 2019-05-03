import * as React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { Adforge } from "../Adforge"
import { AdforgeSizes } from "../AdforgeSizes"

const AppRouter: React.FC = () => (
  <Router>
    <Route path="/" exact component={Adforge} />
    <Route path="/images" exact component={Adforge} />
    <Route path="/sizes" exact component={AdforgeSizes} />
  </Router>
)

export default AppRouter

//    <Route path="/" exact render={() => (
//      <div style={{textAlign: 'center'}}>
//        <Link to="/images" style={{marginRight: '25px'}}>Calculate image offsets</Link>
//        <Link to="/sizes" style={{marginLeft: '25px'}}>Check widget sizes</Link>
//      </div>
//    )} />
