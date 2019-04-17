import styled from "styled-components"

export const AdforgeStyles = styled.div`
  html {
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0 auto;
    padding: 0;
    width: 100%;
    box-sizing: border-box;
  }
  iframe {
    border: 0;
  }
  .wrapper {
    margin: 0 auto 100px;
    width: 100%;
    max-width: 728px;
  }

  .ad-unit-wrapper {
    position: absolute;
    top: 300px;
    left: 400px;
  }

  h1 {
    font-family: Cir Black, -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    color: #24292e;
  }
  p, input, form {
    font-family: Cir, -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    color: #24292e;
  }

  p {
    margin: 25px auto 5px;
    font-size: 18px;
  }

  .flex-container {
    display: flex;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-column {
    flex-direction: column;
  }
  .inner-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  input {
    font-size: 20px;
    padding: 4px 10px;
    border-radius: 3px;
    border: 1px solid lightgrey;
    width: 400px;
  }

  .adforge-ad {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    border: 0 none;
    display: block;
  }

  .small {
    width: 728px;
    height: 90px;
  }

  .small-rect {
    width: 300px;
    height: 250px;
  }

  .small-square {
    width: 300px;
    height: 300px;
  }

  .large {
    margin-left: 25px;
    width: 300px;
    height: 600px;
  }

  @media screen and (max-width: 999px) {
  .small {
  }
  .small-rect {
  }
`