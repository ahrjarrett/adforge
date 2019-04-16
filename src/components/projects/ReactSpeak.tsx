import * as React from 'react'
import styled from 'styled-components'
import { IProject } from '../../types'
import Image from '../ContentImage'
import { ProjectFooterAlt } from '../ProjectMeta'

interface Props {
  project: IProject
}

const ReactSpeak: React.FC<Props> = ({ project }) => {
  return (
    <Styles>
      <div className="split">
        <div className="left">
          <Image
            src="/images/react-speak-demo.gif"
            width="600px"
            height="650px"
          />
        </div>
        <div className="right">
          <p>
            The package was written using Redux with browser navigation commands
            as the use case in mind (e.g. “Navigate: Home Page”). Start and stop
            listening with an action creator, and fire certain actions only when
            the transcript starts with a trigger, such as “Ok Google”.
          </p>
        </div>
      </div>

      <p>
        <b>Winner:</b> Best Frontend Project [Lambda School, May 2018]
      </p>

      <p>
        <strong>Note:</strong> When testing the WebSpeech API integration, make
        sure you allow the app access to your microphone, like so:
      </p>

      <Image
        src="/images/react-speak-enable-microphone.png"
        height="641px"
        width="900px"
      />

      <h2>Check out the example app using my npm package react-speak below!</h2>

      <ProjectFooterAlt
        name={project.name}
        repo={project.repo}
        url={project.url}
      />
    </Styles>
  )
}

const Styles = styled.div`
  .section-container {
    max-width: 1200px;
  }
  img {
    width: 700px;
    margin: 0 auto;
    max-width: 100%;
  }
`

export default ReactSpeak
