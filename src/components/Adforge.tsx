import * as React from 'react'
import { GlobalStyles } from '../styles/GlobalStyles'
import { AdforgeStyles } from "../styles/Adforge.styles"
import Ares from "./Ares"
import { PreviewImage } from "./PreviewImage"


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

function Input({ propogateSubmit, defaultState, placeholder }) {
  const [state, setState] = React.useState(defaultState)
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

export const Adforge: React.FC<{}> = () => {
  const [image, setImage] = React.useState("https://i.imgur.com/do1G6aY.png")
  const [offsets, setOffsets] = React.useState({ horizontal: 0, vertical: 0, square: 0 })
  const [headlines, setHeadlines] = React.useState(['1', '2', '3'])

  const updateImage = url => {
    // console.log("updating image, image url:", url)
    setImage(url)
  }

  const updateHeadlines = n => headline => {
    // console.log("updating headline, index + headline:", n, headline)
    setHeadlines([...headlines.slice(0, n - 1), headline, ...headlines.slice(n)])
  }

  const updateOffsets = key => offset => {
    // console.log("updating offsets, offsets:", key, offset)
    setOffsets({ ...offsets, [key]: parseInt(offset, 10) })
  }


  return (
    <React.Fragment>
      <GlobalStyles />
      <AdforgeStyles>
        <div className="wrapper">
          <h1 style={{ marginBottom: "10px" }}>AdForge Preview</h1>
          <p>Enter image URL:</p>
          <Input 
            propogateSubmit={updateImage} 
            defaultState='' 
            placeholder="Enter image url here..."
          />

          <p>Enter headlines:</p>
          <Input 
            propogateSubmit={updateHeadlines(1)}
            defaultState={headlines[0]}
            placeholder="Enter headline 1 here..."
          />

          <Input 
            propogateSubmit={updateHeadlines(2)}
            defaultState={headlines[1]}
            placeholder="Enter headline 2 here..."
          />

          <Input 
            propogateSubmit={updateHeadlines(3)}
            defaultState={headlines[2]}
            placeholder="Enter headline 3 here..."
          />

          <div className="ad-unit-wrapper">
            <Ares
              image={image}
              offsets={offsets}
              headlines={headlines}
              dimensions={{width: 728, height: 90}}
            />
            <div className="flex-container flex-row" style={{justifyContent: "center", marginTop: "50px"}}>
              <div className="inner-wrapper" style={{marginRight: '25px'}}>
                <Ares
                  image={image}
                  offsets={offsets}
                  headlines={headlines}
                  dimensions={{width: 300, height: 250}}
                />
                <Ares
                  image={image}
                  offsets={offsets}
                  headlines={headlines}
                  dimensions={{width: 300, height: 300}}
                />
              </div>
              <div style={{ marginLeft: "25px"}}>
                <Ares
                  image={image}
                  offsets={offsets}
                  headlines={headlines}
                  dimensions={{width: 300, height: 600}}
                />
              </div>

            </div>
          </div>

          <p>ENTER A NUMBER FROM -50 TO 50 TO REPOSITION EACH OF THE BACKGROUND IMAGE. CERTAIN OFFSETS MAY ONLY AFFECT CERTAIN AD SIZES.</p>
          <p>Horizontal ad image offset:</p>
          <Input 
            propogateSubmit={updateOffsets('vertical')} 
            defaultState={0}
            placeholder="Enter horizontal offset here..."
          />
          <p>Vertical ad image offset:</p>
          <Input 
            propogateSubmit={updateOffsets('horizontal')} 
            defaultState={0}
            placeholder="Enter vertical offset here..."
          />
          <p>Square ad image offset:</p>
          <Input 
            propogateSubmit={updateOffsets('square')} 
            defaultState={0}
            placeholder="Enter square offset here..."
          />
          <div className="preview-images">
            <PreviewImage src={image} offsets={offsets} dimensions={{width: 528, height: 90}} target="728x90" />
            <PreviewImage src={image} offsets={offsets} dimensions={{width: 300, height: 190}} target="300x250" />
            <PreviewImage src={image} offsets={offsets} dimensions={{width: 300, height: 240}} target="300x300" />
            <PreviewImage src={image} offsets={offsets} dimensions={{width: 300, height: 310}} target="300x600" />
          </div>


        </div>
      </AdforgeStyles>
    </React.Fragment>

  )
}


// OLD:
// <p>Sample UUID: 3cd1b99a-76d3-4a4b-8c60-5023abbb772c</p>
// <Input propogateSubmit={updateUuid} />
// <div className="message" style={{ margin: "25px auto" }} >
//   <div>{!state && <p>Enter a valid ad uuid to see it render in different sizes</p>}</div>
//   <div>{state && <p>Here's your ad:</p>}</div>
// </div>
// <div className="flex-container flex-column" style={{ marginTop: "25px" }}>
//   {state && (
//     <div>
//       <Ad cxs={['adforge-ad small']} uuid={state} />
//       <div className="flex-container flex-row" style={{ justifyContent: "center", marginTop: "50px" }}>
//         <div className="inner-wrapper" style={{ marginRight: "25px" }}>
//           <Ad cxs={['adforge-ad small-rect']} uuid={state} />
//           <Ad cxs={['adforge-ad small-square']} uuid={state} />
//         </div>
//         <Ad cxs={['adforge-ad large']} uuid={state} />
//       </div>
//     </div>
//   )}
// </div>