import * as React from "react"

interface PreviewImageProps {
  src: string
  offsets: {
    horizontal: number
    vertical: number
    square: number
  }
  dimensions: {
    width: number
    height: number
  }
  target: string
}

interface PreviewImageState {
  x: number
  y: number
}

export class PreviewImage extends React.Component<PreviewImageProps, PreviewImageState> {
  constructor(props: PreviewImageProps) {
    super(props)
    this.img = null
    this.state = {
      x: 0,
      y: 0
    }
  }

  getImageDimensions = url => {
    this.img = new Image();
    const that = this
    this.img.addEventListener("load", function(){
      that.setState({ x: this.naturalWidth, y: this.naturalHeight })
    });
    this.img.src = url;
  }

  componentDidMount() {
    this.getImageDimensions(this.props.src)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.src !== prevProps.src) {
      this.getImageDimensions(this.props.src)
    }
  }

  componentWillUnmount() {
    this.img.removeEventListener('load')
  }


  render() {
    const { src, offsets, dimensions, target } = this.props

    const { x, y } = this.state
    const viewportX = dimensions.width
    const viewportY = dimensions.height

    let xUnit = x / viewportX
    let yUnit = y / viewportY
    let constrictedBy = (xUnit < yUnit) ? 'x' : 'y'
    let unit = constrictedBy === 'x' ? xUnit : yUnit

    let constrictingDimension = (xUnit < yUnit) ? x : y

    let viewportMax = constrictedBy === 'x' ? (viewportY * xUnit) : (viewportX * yUnit)
    let viewport = constrictedBy === 'x' ? ({ x: x, y: viewportMax }) : ({ x: viewportMax, y: y })

    let vDiff = constrictedBy === 'x' ? y - viewportMax : x - viewportMax
    let vUnit = vDiff / 100 // each % is 1 vUnit

    let offsetX = (constrictedBy === 'x' ? 0 : (offsets.vertical * vUnit))
    let offsetY = (constrictedBy === 'y' ? 0 : (offsets.horizontal * vUnit))
    let positionX = (constrictedBy === 'x' ? 0 : ((vUnit * 50) - offsetX))
    let positionY = (constrictedBy === 'y' ? 0 : ((vUnit * 50) + offsetY))

    let borderWidth = 0

    return (
      <div style={{ position: "relative" }}>
        <div>
          <p>Original image dimensions:</p>
          <p><b>{x && y ? `${x}px by ${y}px` : `Not available`}</b></p>
          <p>{target} widget image size:</p>
          <p><b>{dimensions.width}x{dimensions.height}</b></p>
          <p>Crop your image to these dimensions:</p>
          <p><b>{x && y ? `${viewport.x.toFixed(2)}px by ${viewport.y.toFixed(2)}px` : `Not available`}</b></p>
          <p>When cropping, use these offsets (from top left):</p>
          <p><b>{x && y ? `${positionX.toFixed(2)}px by ${positionY.toFixed(2)}px` : `Not available`}</b></p>
        </div>
        <div className="preview-image-wrapper" style={{ width: x, height: y, right: 0 }}>
          <img src={src} style={{ position: 'absolute', right: '0', top: 0 }} />
          <div style={{
            position: 'absolute',
            right: `${positionX - borderWidth}px`,
            top: `${positionY - borderWidth}px`,
            background: 'rgba(100, 200, 100, 0.4)',
            width: unit * viewportX + (borderWidth * 2),
            height: unit * viewportY + (borderWidth * 2),
            border: `${borderWidth}px solid green`
          }} />
        </div>
      </div>

    )
  }
}

