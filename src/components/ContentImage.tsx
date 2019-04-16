import * as React from 'react'
import styled from 'styled-components'

interface IContentImage {
  children?: React.ReactNode
  src: string
}

type ContentImageType = IContentImage & any

const ContentImage = ({ children, src, ...styles }: ContentImageType) => (
  <Styles>
    <div
      className="img"
      style={{ ...styles, backgroundImage: `url(${src})` }}
    />
    {children && children}
  </Styles>
)

const Styles = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  .img {
    width: 100%;
    max-width: 100%;
    height: auto;
    background-size: contain;
    background-repeat: no-repeat;
    margin: 0 auto;
  }
`

export default ContentImage
