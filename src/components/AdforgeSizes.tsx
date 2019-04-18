import * as React from 'react'
import { GlobalStyles } from '../styles/GlobalStyles'
import { AdforgeStyles } from "../styles/Adforge.styles"
import Ares from "./Ares"

interface AdI {
  cxs: string[]
  uuid?: string
}

const Ad = ({ cxs, uuid }) => (
  <div className="adforge-ad-wrapper">
    <iframe
      className={`${cxs.join(' ')}`}
      src={`https://origami.secure.ownlocal.com/origami_unit/index.html?id=${uuid}`}
      style={{ backgroundPosition: "25% 25%" }}
    />
  </div>
)

function Input({ propogateSubmit, placeholder }) {
  const [state, setState] = React.useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    propogateSubmit(state)
    // setState(state)
  }

  return (
    <div className="uuid-input">
      <form onSubmit={handleSubmit} >
        <input
          placeholder={placeholder}
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </form>
    </div>
  )
}

export const AdforgeSizes: React.FC<{}> = () => {
  const [state, setState] = React.useState("3cd1b99a-76d3-4a4b-8c60-5023abbb772c")

  const updateUUID = uuid => {
    // console.log("updating image, image url:", url)
    setState(uuid)
  }

  return (
    <React.Fragment>
      <GlobalStyles />
      <AdforgeStyles>
        <div className="sizes-wrapper">
          <h1 style={{ marginBottom: "10px" }}>AdForge Preview</h1>
          <Input 
            propogateSubmit={updateUUID}
            placeholder="Enter ad uuid here..."
          />

          <p>Enter a valid ad UUID to see how it renders in different sizes:</p>
          <div className="message" style={{ margin: "25px auto" }} >
            <div>{!state && <p>Enter a valid ad uuid to see it render in different sizes</p>}</div>
            <div>{state && <p>Here's your ad:</p>}</div>
          </div>
          <div className="flex-container flex-column" style={{ marginTop: "25px" }}>
            {state && (
              <div>
                <Ad cxs={['adforge-ad small']} uuid={state} />
                <div className="flex-container flex-row" style={{ justifyContent: "center", marginTop: "50px" }}>
                  <div className="inner-wrapper" style={{ marginRight: "25px" }}>
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
    </React.Fragment>

  )
}

