import * as React from 'react'
import styled from 'styled-components'
import Layout from './Layout'

export const About: React.FC<{}> = () => {
  return (
    <Layout>
      <AboutStyles>
        <section className="section-top">
          <div className="section-container">
            <div className="about-top">
              <div className="about-top-left">
                <img src="/images/ash.jpg" />
              </div>
              <div className="about-top-right">
                <h2>Hi, I’m Andrew</h2>
                <p>
                  I love all things web development. Currently living in Austin,
                  Texas with my pomeranian, Ash Nabisco. He’s the orange guy on
                  the left there.
                </p>
                <br />
                <p>
                  Here’s a{' '}
                  <a
                    href="https://resume.ahrjarrett.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    link to my resume
                  </a>{' '}
                  if that’s your bag.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AboutStyles>
    </Layout>
  )
}

const AboutStyles = styled.div`
  section.section-top {
    background: rgba(249, 245, 242, 0.4);
    margin-bottom: 105px;
  }
  .about-top {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    padding-top: 80px;
    padding-bottom: 80px;
    img {
      max-width: 300px;
      height: auto;
    }
  }
  .about-top-left,
  .about-top-right {
    width: 50%;
  }
  .about-top-left {
    text-align: center;
  }
  .about-top-right {
    padding: 10px;
    h2 {
      margin: 0;
    }
    p {
      font-family: Pre, mono;
      font-size: 18px;
      line-height: 1.5em;
      margin: 0 120px 0 0;
    }
  }

  @media only screen and (max-width: 900px) {
    .about-top-right {
      p {
        margin: 0;
      }
    }
    .about-top {
      flex-direction: column-reverse;
      img {
        margin-top: 30px;
        max-width: 100%;
      }
    }

    .about-top-left,
    .about-top-right {
      width: 100%;
    }
  }
`
