import * as React from 'react'
import styled from 'styled-components'

const AdforgeStyles = styled.div`
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
    margin: 0 auto;
    width: 100%;
    max-width: 728px;
  }

  h1, p, input {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    color: #24292e;
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
    font-family: Helvetica;
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

interface AdI {
  cxs: string[]
  uuid?: string
}

const Ad = ({ cxs, uuid }) => (
  <div className="adforge-ad-wrapper">
    <iframe 
      className={`${cxs.join(' ')}`}
      src={`https://origami.secure.ownlocal.com/origami_unit/index.html?id=${uuid}`}
    />
  </div>
)

function Input({ propogateSubmit }) {
  const [state, setState] = React.useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    propogateSubmit(state)
    setState("")
  }


  return (
    <div className="uuid-input">
      <form onSubmit={handleSubmit} >
        <input 
          placeholder="Enter ad uuid here..." 
          value={state} 
          onChange={(e) => setState(e.target.value)} 
        />
      </form>
    </div>
  )
}

export const Adforge: React.FC<{}> = () => {
  const [state, setState] = React.useState("")
  const inputRef = React.createRef()
  const updateUuid = uuid => {
    console.log("updating uuid, uuid:", uuid)
    setState(uuid)
  }

  return (
  <AdforgeStyles>
    <div className="wrapper">
      <h1 style="">AdForge Preview</h1>
      <Input propogateSubmit={updateUuid} />
      <div className="message" style={{ margin: "25px auto" }} >
        <div>{!state && <p>Enter a valid ad uuid to see it render in different sizes</p>}</div>
        <div>{state && <p>Here's your ad:</p>}</div>
      </div>
      <div className="flex-container flex-column" style={{marginTop: "25px"}}>
        {state && (
          <div>
            <Ad cxs={['adforge-ad small']} uuid={state} />
            <div className="flex-container flex-row" style={{ justifyContent: "center", marginTop: "50px"}}>
              <div className="inner-wrapper" style={{marginRight: "25px"}}>
                <Ad cxs={['adforge-ad small-rect']} uuid={state} />
                <Ad cxs={['adforge-ad small-square']} uuid={state} />
              </div>
              <Ad cxs={['adforge-ad large']} uuid={state} />
            </div>
          </div>
        )}
      </div>
   </div>
  </AdforgeStyles>

  )
}
