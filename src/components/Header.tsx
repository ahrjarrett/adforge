import * as React from 'react'
import { withRouter, Link } from 'react-router-dom'
import A from './Icons/A'

import { HeaderStyles } from '../styles/Header.styles'

export const Nav = withRouter(({ location }) => {
  const isActive = path => (location.pathname === path ? 'active' : '')
  return (
    <HeaderStyles>
      <section className="section section-header">
        <div className="section-container">
          <header className="header">
            <div className="logo">
              <div className="logo-wrapper">
                <A />
                <div className="logo-text">
                  <span className="transparent">A</span>ndrew Jarrett
                </div>
              </div>
            </div>
            <div className="navbar">
              <ul>
                <li>
                  <a className={isActive('/')} href="/">
                    Projects
                  </a>
                </li>
                <li>
                  <Link className={isActive('/about')} to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className={isActive('/contact')} to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </header>
        </div>
      </section>
    </HeaderStyles>
  )
})

const Header = () => (
  <HeaderStyles>
    <section className="section section-header-description">
      <div className="section-container">
        <div className="hr" />
        <div className="desktop-header-spacing" />
        <div className="header-description">
          <h2>
            Andrew Jarrett is a software engineer who started out in inside
            sales. He loves a good workflow and sometimes builds them
            professionally, but what excites him most is working on applications
            that are mission-critical for a company he believes in. He lives in
            Austin, TX with his dog Ash Nabisco.
            {/* Andrew Jarrett is a software engineer who came up in inside sales.
            He loves a good workflow and sometimes builds them professionally,
            but what really gets him going is the user. He believes good design
            is intuitive, that great design is invisible, and that sayings
            things that _sound_ meaningful can be a great way to get out of
            feeling any empathy at all. */}
          </h2>
          {/* <h4>If that sounds like what you’ve got, let’s talk.</h4> */}
          <div className="desktop-header-description-spacing" />
        </div>
      </div>
    </section>
  </HeaderStyles>
)

export default Header
