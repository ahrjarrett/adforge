import * as React from "react"

interface PreviewImageProps {
  src: string
  offsets: {
    horizontal: number
    vertical: number
    square: number
  }
}

interface PreviewImageState {
  x: number
  y: number
}

export class PreviewImage extends React.Component<PreviewImageProps, PreviewImageState> {
  constructor(props: PreviewImageProps) {
    super(props)

    window.imgRef = this.imgRef

    this.imgRef = React.createRef<HTMLImageElement>()
    this.state = {
      x: 0,
      y: 0
    }
  }

  componentDidMount() {
    if (this.props.src && this.imgRef && this.imgRef.current) {
      this.setState({ x: this.imgRef.current.width, y: this.imgRef.current.height })
    }
  }

  componentDidUpdate(prevProps) {
    console.log('component updating, x:', this.state.x)
    console.log('component updating, y:', this.state.y)

    this.calculateFrame()

    if (this.props.src && this.imgRef && this.imgRef.current) {
      // if (this.state.x === this.imgRef.current.width && this.state.y === this.imgRef.current.height) {
      if (this.props.src !== prevProps.src) {
        this.setState({ x: this.imgRef.current.width, y: this.imgRef.current.height })
      }
      else {
        return
      }
    }
  }

  calculateFrame() {
  }

  render() {
    const { src, offsets } = this.props

    const { x, y } = this.state
    const viewportX = 300
    const viewportY = 200

    let xUnit = x / viewportX
    let yUnit = y / viewportY
    let constrictedBy = (xUnit < yUnit) ? 'x' : 'y'
    let unit = constrictedBy === 'x' ? xUnit : yUnit

    let constrictingDimension = (xUnit < yUnit) ? x : y

    let viewportMax = constrictedBy === 'x' ? (viewportY * xUnit) : (viewportX * yUnit)
    let viewport = constrictedBy === 'x' ? ({ x: x, y: viewportMax }) : ({ x: viewportMax, y: viewportY })

    let vDiff = constrictedBy === 'x' ? y - viewportMax : x - viewportMax
    let vUnit = vDiff / 100 // each % is 1 vUnit

    console.log('\n\n x & y:', x, y)

    console.log("unit:", unit)
    console.log("unit:", unit * 300)
    console.log("unit:", unit * 200)

    console.log('xUnit, yUnit:', xUnit, yUnit)
    console.log("constricted by", constrictedBy)
    console.log("constricting dimension", constrictingDimension)
    console.log("viewportMax:", viewportMax)
    console.log("viewport:", viewport)

    console.log("vDiff", vDiff)
    console.log("vUnit", vUnit)



    return (
      <div style={{ position: 'relative', marginBottom: '100px', marginTop: '100px' }}>
        <div>
          <p style={{ position: 'absolute', top: '-70px'}} >Image dimensions: {x && y ? `${x}px by ${y}px` : `Not available`}</p>
        </div>
        <div style={{ position: 'absolute', width: x, height: y, right: 0 }}>
          <img src={src} ref={this.imgRef} style={{ position: 'absolute', right: '0', top: 0 }} />
          <div style={{ position: 'absolute', right: `${constrictedBy === 'x' ? 0 : (offsets.vertical + 50) * vUnit}px`, top: `${constrictedBy === 'y' ? 0 : (offsets.horizontal + 50) * vUnit}px`, background: 'rgba(100, 200, 100, 0.5)', width: unit * 300, height: unit * 200 }} />
        </div>
      </div>

    )
  }
}

