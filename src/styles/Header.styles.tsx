import styled from 'styled-components'

export const HeaderStyles = styled.div`
  header.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      padding: 2px;
    }

    ul {
      display: flex;
    }

    .logo-text,
    .navbar {
      padding: 10px;
    }

    .logo {
      .logo-wrapper {
        position: relative;
      }
      svg {
        position: absolute;
        top: 50%;
        left: 9px;
        width: 29px;
        height: 29px;
        margin-top: -22px;
      }
      .transparent {
        color: transparent;
      }
    }

    .logo-text {
      margin-top: 10px;
      font-family: Por, serif;
      font-size: 2.625rem;
      color: ${({ theme }) => theme.primary};
      height: 100px;
    }

    .navbar {
      font-family: Pre, mono;
      font-size: 1rem;
      text-transform: uppercase;
      margin-right: 10px;
      li {
        margin-left: 65px;
        a.active {
          border-bottom: 2px solid rgba(239, 64, 34, 1);
          font-weight: 600;
        }
      }
    }
  }

  @media only screen and (max-width: 767px) {
    header.header {
      flex-direction: column;
      align-items: start;
      .navbar ul {
        flex-direction: column;
        li {
          margin-left: 0;
          padding: 10px;
        }
      }

      .logo {
        .logo-text {
          height: unset;
          font-size: 12.5vw;
        }

        svg {
          display: none;
        }
        .transparent {
          color: unset;
        }
      }
    }
  }

  .header-description {
    max-width: 760px;
    padding: 10px;
    h2 {
      font-size: 1.875rem;
      line-height: 1.5em;
      letter-spacing: 0px;
      margin: 0;
    }
  }

  .desktop-header-spacing {
    width: 100%;
    margin-bottom: 10px;
    height: 50px;
    @media only screen and (max-width: 767px) {
      height: 15px;
    }
  }

  .desktop-header-description-spacing {
    width: 100%;
    height: 130px;
    @media only screen and (max-width: 767px) {
      height: 30px;
    }
  }
`
