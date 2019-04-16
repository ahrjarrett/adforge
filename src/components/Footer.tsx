import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Footer = () => (
  <FooterStyles>
    <section className="section section-footer">
      <div className="section-container">
        <div className="hr" />
        <div className="footer">
          <div>
            <h2>Contact</h2>
          </div>
          <div>
            <h2>
              ANDREW HR JARRETT
              <br />
              <a href="mailto:ahrjarrett@gmail.com">ahrjarrett@gmail.com</a>
              <br />
              <a
                href="https://github.com/ahrjarrett"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/ahrjarrett
              </a>
              <br />
              <a
                href="https://www.linkedin.com/in/ahrjarrett"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/ahrjarrett
              </a>
              <br />
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ahrjarrett.com"
              >
                ahrjarrett.com
              </a>
            </h2>
          </div>
          <div>
            <h2>
              <Link to="/project/add">©</Link> Andrew Jarrett, 2015-
              {new Date().getFullYear()}
            </h2>
          </div>
        </div>
      </div>
    </section>
  </FooterStyles>
)

const FooterStyles = styled.div`
  .footer {
    display: flex;
    padding: 0 1.5rem 1.5rem;
    & > div {
      width: 33.333%;
      padding: 10px;
    }
    & > :last-child {
      text-align: right;
    }
    h2 {
      font-family: Pre, sans-serif;
      font-size: 12px;
      font-weight: normal;
      line-height: 1.5em;
      letter-spacing: 0.5px;
    }
  }

  @media only screen and (max-width: 767px) {
    .footer {
      flex-direction: column;
      & > div {
        width: 100%;
      }
    }
  }
`

export default Footer
