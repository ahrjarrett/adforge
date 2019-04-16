import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MidpageNav = () => (
  <MidpageNavStyles>
    <section className="section section-midpage-nav">
      <div className="section-container">
        <div className="midpage-nav">
          <div className="midpage-section" />
          <div className="midpage-section">
            <h2>
              I grew up in Denver and live in Austin. I read and try to write
              and really enjoy learning about functional programming. My dog is
              named Ash and he’s afraid of everything.
            </h2>
            <h2>
              I do my best work when I’m on a small team with ambitious goals
              and a user that I can see.
            </h2>
            <Link to="/about">About</Link>
          </div>
          <div className="midpage-section">
            <h2>
              Currently I’m happily employed, but I’m always open to side
              projects. Feel free to email me if you have something in mind.
              {/* Because I’m a user. Because I am not abstract. Smart phones
              confuse me and half the time when I learn something, it’s totally
              on accident. I do my best work when I’m on a small team with
              ambitious goals and a user that I can see. */}
            </h2>
            <h2>Want to get in touch?</h2>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className="midpage-bottom-spacer" />
    </section>
  </MidpageNavStyles>
)

const MidpageNavStyles = styled.div`
  margin-top: 50px;
  line-height: 1.5;

  .midpage-nav {
    display: flex;
    h2,
    a {
      font-family: Pre;
      font-size: 1rem;
    }
    a {
      text-decoration: underline;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 2px;
    }
  }
  .midpage-nav > div {
    width: 33%;
    margin: 0px 20px 0px 0px;
  }

  .midpage-section {
    padding: 10px;
  }
  .midpage-bottom-spacer {
    padding: 10px;
    height: 125px;
    width: 100%;
  }
  @media only screen and (max-width: 767px) {
    .midpage-nav {
      flex-direction: column;
    }
    .midpage-nav > div {
      width: 100%;
      padding-bottom: 2rem;
    }
  }
`

export default MidpageNav
