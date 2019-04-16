import * as React from 'react'
import styled from 'styled-components'

const Highlight = () => (
  <HighlightStyles>
    <section className="section section-highlight">
      <div className="section-container">
        <div className="highlight">
          <div className="highlight-text">
            {/* <div className="highlight-text-spacer" /> */}
            <h2 className="highlight-text-title">This portfolio</h2>
            <h2 className="highlight-text-body">
              This portfolio is written in TypeScript. The React frontend is
              served queriesThe frontend was built with, and is built with
              React, a GraphQL API that is deployed to AWS AppSync.
              <br />
              <br />
              The site is a combination of several packages that I wrote and
              maintain in a Lerna monorepo. Currently the repo is private, but
              feel free to email me if you’d like to see the source code!
              <br />
              <br />
              All of the projects that are featured here are my own. Most I
              created by myself, although some were the product of a group
              effort.
            </h2>
          </div>
          <div className="highlight-img">
            <img src="/images/the-grepper-monkey-see-monkey-flew.jpg" />
          </div>
        </div>
      </div>
    </section>
  </HighlightStyles>
)

const HighlightStyles = styled.div`
  .section-highlight {
    background: ${({ theme }) => theme.background};
  }
  margin-bottom: 185px;

  img {
    opacity: 0.3;
  }

  .highlight {
    display: flex;
  }

  .highlight-img {
    display: flex;
    justify-content: center;

    padding: 10px 10px 0;
    margin: 50px 0 auto;
    /* margin: 030px 0 0 115px; */
    /* margin: 030px 115px 020px 115px; */
  }
  .highlight-text {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 62.5%;
    margin-top: 140px;
    margin-left: 15%;
    margin-right: 5%;

    padding: 10px;
  }
  /* .highlight-text-spacer {
    height: 50px;
    width: 100%;
  } */

  .highlight-img {
    width: 37.5%;
  }

  h2.highlight-text-title {
    margin-bottom: 20px;
    margin: 0;
    padding: 0;
    font-family: Cir Black, sans-serif;
    font-size: 10px;
    font-weight: normal;
    line-height: 1.5em;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .highlight-text-body {
    font-family: Pre, sans-serif;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.5em;
    letter-spacing: 1px;
    margin-bottom: 50px;
  }

  @media only screen and (max-width: 767px) {
    .highlight-img {
      display: none;
    }
  }
`

export default Highlight
