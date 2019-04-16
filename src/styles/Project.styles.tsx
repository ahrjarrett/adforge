import styled from 'styled-components'

export const ProjectStyles = styled.div`
  p,
  h2,
  h3,
  h4,
  h5,
  h6 {
    max-width: 760px;
  }
  img {
    display: block;
  }

  a {
    text-decoration: underline;
  }

  img,
  .img {
    width: auto;
    max-width: 100%;
    /* box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0.625rem 0px; */
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  img,
  .img {
    margin: 60px auto 0;
  }

  iframe {
    display: flex;
    margin: 40px auto 40px;
    max-width: 100%;
    /* box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0.625rem 0px; */
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  svg {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }

  .project-match {
    margin: 0 auto;
    padding: 0 20px;
  }

  /* MAIN WRAPPER FOR PROJECT: */
  .project {
    p,
    h2,
    h3 {
      font-size: 25px;
      font-family: Por, serif;
      line-height: 1.4;
    }
    p,
    h2 {
      margin: 60px auto 0;
    }
    p {
      font-size: 24px;
      line-height: 1.6;
      font-family: Por, serif;
    }
    h3 {
      font-family: Cir, sans-serif;
      font-size: 35px;
      margin: 30px auto 0;
    }
    h4 {
      line-height: 1.4;
      font-family: Por, serif;
    }
    h5 {
      line-height: 1.65;
      font-family: Pre, mono;
      font-size: 18px;
      font-weight: 500;
      margin: 0 auto;
      padding: 20px;
    }

    p + p {
      margin: 20px auto 0;
    }
    h2 + p,
    h3 + p {
      margin: 20px auto 0;
    }
    ul {
      padding-left: 2rem;
      font-size: 24px;
      line-height: 1.6;
      font-family: Cir, sans-serif;
      max-width: 760px;
      margin: 1rem auto 2rem;
    }
    li {
      list-style-type: circle;
      margin-bottom: 0.25rem;
    }
    .section-container {
      max-width: 1200px;
      margin-bottom: 120px;
    }
  }

  .no-box-shadow {
    box-shadow: none !important;
  }
  .mobile-imgs {
    display: flex;
    flex-wrap: wrap;
    img {
      width: 260px;
      display: flex;
      align-self: center;
    }
  }

  .website,
  .repo {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    p {
      font-family: Pre, sans-serif;
      font-size: 16px;
      width: 260px;
      margin: 0;
    }
    a {
      font-family: Por, serif;
      font-size: 30px;
      line-height: 1.15;
    }
    @media only screen and (max-width: 767px) {
      flex-direction: column;
      p {
        margin-bottom: 10px;
      }
    }
  }
  .website {
    a {
      margin-left: 4rem;
    }
  }
  .repo {
    a {
      margin-right: 4rem;
    }
  }
  @media only screen and (max-width: 767px) {
    .website {
      flex-direction: column;
    }
    .repo {
      flex-direction: column-reverse;
    }

    .website a,
    .repo a {
      margin-left: 0;
      margin-right: 0;
    }
  }

  .split {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  .left,
  .right {
    width: 50%;
    padding: 10px;
    p,
    h2,
    h4 {
      margin-left: 12.5%;
      margin-right: 12.5%;
      margin-top: 0;
      margin-bottom: 0;
    }
    p {
      font-weight: 500;
      font-size: 25px;
      line-height: 1.6;
    }
    h4 {
      font-weight: 500;
      font-size: 25px;
      line-height: 1.4;
    }
    img {
      margin: 0;
    }
    @media only screen and (max-width: 1024px) {
      p {
        font-size: 2.15vw;
      }
    }
  }
  .left img {
    margin-right: 0;
    margin-left: auto;
  }
  .right img {
    margin-left: 0;
    margin-right: auto;
  }

  .split-img {
    padding: 10px;
    margin: 0 auto;
    img {
      margin-top: 0;
    }
  }

  @media only screen and (max-width: 900px) {
    .split {
      .left,
      .right {
        p,
        h2,
        h4 {
          margin-left: 5%;
          margin-right: 5%;
        }
      }
    }
  }
  @media only screen and (max-width: 767px) {
    .split {
      flex-direction: column;
      .left,
      .right {
        width: 100%;
        max-width: 90%;
        padding: 0;
        margin-top: 10px;
        margin-bottom: 10px;
        h2,
        p {
          margin: 50px auto;
          font-size: 25px;
          line-height: 1.35;
        }
      }
    }
  }
`
