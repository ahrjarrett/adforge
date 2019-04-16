import * as React from 'react'
import styled from 'styled-components'
import Layout from './Layout'

export const Contact: React.FC<{}> = () => (
  <Layout>
    <ContactStyles>
      <section className="section-top">
        <div className="section-container">
          <div className="contact-top">
            <div className="contact-wrapper">
              <div className="contact-header">
                <h2>Contact me.</h2>
              </div>
              <div className="contact-deets">
                <div>
                  <p>WORK / INQUIRIES</p>
                  <p>
                    <a href="mailto:ahrjarrett@gmail.com">
                      ahrjarrett@gmail.com
                    </a>
                  </p>
                  <p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://resume.ahrjarrett.com/"
                    >
                      résumé ✔
                    </a>
                  </p>
                </div>
                <div>
                  <p>GITHUB / TWITTER</p>
                  <p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/ahrjarrett"
                    >
                      ahrjarrett
                    </a>
                  </p>
                  <p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://twitter.com/ahrjarrett"
                    >
                      @ahrjarrett
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ContactStyles>
  </Layout>
)

const ContactStyles = styled.div`
  background-color: rgba(249, 245, 242, 0.4);
  .contact-top {
    margin-bottom: 105px;
    padding: 30px 0px 70px;
  }
  .contact-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    width: 100%;
  }
  .contact-header,
  .contact-deets {
    width: 50%;
  }
  .contact-deets {
    font-family: Pre, mono;
    font-size: 1rem;
    line-height: 1.5;
    display: flex;
    flex-direction: row;
    & > div {
      width: 50%;
    }
    p {
      margin: 0;
    }
  }
  .contact-header {
    h2 {
      margin-bottom: 0.5rem;
    }
  }

  @media only screen and (max-width: 900px) {
    .contact-wrapper {
      width: 250px;
      margin-left: calc(50% - 250px / 2);
      display: flex;
      align-items: flex-start;
    }
    .contact-header,
    .contact-deets {
      width: 100%;
    }

    .contact-deets {
      margin-left: 0;
      flex-direction: column;
      & > div {
        width: 100%;
      }
    }
  }
`
