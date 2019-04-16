import * as React from 'react'
import { Nav } from './Header'
import Footer from './Footer'
import { GlobalStyles } from '../styles/GlobalStyles'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <React.Fragment>
    <GlobalStyles />
    <Nav />
    {children}
    <Footer />
  </React.Fragment>
)

export default Layout
