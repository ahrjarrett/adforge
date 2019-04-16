import styled from 'styled-components'

export const ProjectFooterStyles = styled.div`
  margin-top: 80px;
  .project-footer-split {
    .project-footer-left {
      p.project-footer-p {
        @media only screen and (min-width: 767px) {
          text-align: right;
        }
      }
    }
    .project-footer-left,
    .project-footer-right {
      p.project-footer-p {
        margin-top: 5px;
        margin-bottom: 5px;
      }
    }
  }
`

export const ProjectBannerStyles = styled.div`
  section {
    margin: 30px auto 110px;
  }
  .img-wrapper {
    padding: 10px 0;
    max-width: 1200px;
    margin: 0 auto;
    img {
      /* Specificity issueus with Project.styles */
      margin: 0 auto;
      width: 100%;
      height: auto;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      margin: 0 auto;
      &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.22);
      }
    }
  }
  a:hover {
    background-color: transparent;
  }
  .tooltip {
    font-family: Cir;
    font-size: 1.25rem;
    color: white;
    transition: opacity 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  @media only screen and (max-width: 767px) {
    section {
      margin: 0 auto 40px;
    }
  }
`

export const ProjectMetaStyles = styled.div`
  .project-meta {
    max-width: 1140px;
    margin: 0 auto 80px;
  }

  .project-intro {
    display: flex;
  }
  .project-left,
  .project-right {
    width: 50%;
  }

  .project-right {
    padding-left: 10px;
  }

  .project-date,
  .project-description,
  .project-tags {
    font-family: Pre, serif;
  }

  .project-date,
  .project-tags {
    color: ${({ theme }) => theme.lightGrey};
    font-size: 14px;
    font-weight: normal;
    letter-spacing: 1.5px;
    line-height: 1;
    padding: 10px;
    padding-bottom: 0;
  }

  .project-name-wrapper {
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    h2.project-name {
      font-size: 45px;
      font-family: Por, sans-serif;
      line-height: 1.3em;
      letter-spacing: 0.2px;
      margin-left: 10px;
      margin-right: 25px;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    .project-name-flourish {
      padding: 10px;
      text-align: left;
      margin-bottom: -6px;
      span {
        display: inline-block;
        padding-top: 2px;
        padding-bottom: 2px;
        border-top-style: solid;
        border-top-width: 2px;
        border-top-color: #ef4023;
        width: 40px;
      }
    }
  }

  .project-links {
    padding: 10px;
    display: flex;
    line-height: 1;
    .bullet {
      margin-right: 5px;
    }
    a {
      color: ${({ theme }) => theme.lightGrey};
      font-family: Pre, sans-serif;
      font-size: 14px;
      letter-spacing: 1.5px;
    }
    .project-url {
      margin-right: 20px;
    }
    .project-repo {
    }
  }

  .project-description {
    margin-top: 10px;
    padding: 10px;
    p {
      display: inline-block;
      margin-bottom: 40px;
    }
    p:last-child {
      margin-bottom: 20px;
    }
  }

  @media only screen and (max-width: 900px) {
    .project-name-wrapper {
      h2.project-name {
        font-size: 40px;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .section-container {
      width: 90%;
      margin: 0 auto;
      margin-bottom: 40px;
    }

    .project-intro {
      flex-direction: column;
      position: relative;
    }
    .project-left,
    .project-right {
      width: 100%;
      padding-left: 10px;
      padding-right: 10px;
    }
    .project-right {
      margin-top: 20px;
    }

    .project-date {
      /* necessary to make room for absolute positioning of .project-links, below */
      padding-bottom: 40px;
      margin-left: -10px;
    }
    .project-links {
      position: absolute;
      top: 40px;
      left: 10px;
      padding: 0;
    }

    .project-name-wrapper {
      flex-direction: column;
      align-items: flex-start;
      padding-bottom: 25px;
      line-height: 1;
      h2.project-name {
        font-size: 30px;
      }
      .project-name-flourish span {
        width: 90px;
      }
    }
  }
`
