import { createGlobalStyle } from 'styled-components'
import { fontDeclarations, fontMixin } from './mixins'

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #fff;
    color: ${({ theme }) => theme.primary};
    font-family: Por, serif;
    font-size: 16px;
    line-height: 1.8;
    -webkit-font-smoothing: antialiased;
    overflow-wrap: break-word;
    word-wrap: break-word;
    overflow: visible !important;
  }

  ${fontDeclarations};
  ${fontMixin};

  p {
    margin: 0 20px;
  }

  a {
    padding: 0;
    text-decoration: none;
    transition: all 0.3s ease;
    color: ${({ theme }) => theme.primary};
    &:hover {
      background-color: ${({ theme }) => theme.highlight};
      border-style: solid;
      border-width: 0;
      transition: all 0.3s ease;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  code {
    font-family: Pre, mono;
  }

  section {
    width: 100vw;
    .section-container {
      max-width: 1330px;
      margin: 0 auto;

      @media only screen and (max-width: 959px) {
        max-width: 90%;
      }
    }
  }

  .hr {
    padding: 2px 0;
    line-height: 0;
    border-top-style: solid;
    border-top-width: 1.3px;
    border-top-color: #ef4023;
    width: calc(100% - 1.5rem);
    margin: 0 auto;
    margin-bottom: 20px;
    margin-top: 10px;
  }

`
