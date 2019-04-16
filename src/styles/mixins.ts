import { css } from 'styled-components'

export const breakPoints = {
  lg: 960,
  md: 767,
}

export const fontDeclarations = css`
  @font-face {
    font-family: 'Cir';
    src: url('/fonts/Cir-Book.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Cir Black';
    src: url('/fonts/Cir-Black.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Por';
    src: url('/fonts/Por-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Pre';
    src: url('/fonts/Pre-Mono.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: fallback;
  }
`

export const fontMixin = css`
  font-family: Cir, sans-serif;

  h1 {
    font-size: 3rem;
    font-weight: 400;
    color: ${props => props.theme.primary};
  }
  h2 {
    font-size: 2.75rem;
    font-weight: 500;
  }
  h3 {
    font-size: 2.5rem;
    letter-spacing: 0.01875rem;
  }
  h4 {
    font-family: Wals, sans-serif;
    font-weight: 500;
    font-size: 1.75rem;
    margin-bottom: 16px;
  }
`
