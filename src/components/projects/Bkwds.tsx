import * as React from 'react'
import { IProject } from '../../types'
import { BkwdsSVG } from '../Icons/BkwdsSVG'
import { ProjectFooterAlt } from '../ProjectMeta'

interface Props {
  project: IProject
}

const Bkwds: React.FC<Props> = ({ project }) => {
  return (
    <div>
      <p>
        <b>bkwds.</b> is an app that helps adventurers track their trips and
        travel safely.
      </p>
      <p>
        <a href={project.repo} target="_blank" rel="noopener noreferrer">
          This repository
        </a>{' '}
        contains the collective effort and capstone project of 6 students that
        graduated from Lambda School’s Computer Science program.
      </p>
      <p>Here are a few images of the app on mobile:</p>
      <div className="mobile-imgs">
        <img src="/images/bkwds-mobile-1.png" className="no-box-shadow" />
        <img src="/images/bkwds-mobile-2.png" className="no-box-shadow" />
        <img src="/images/bkwds-mobile-3.png" className="no-box-shadow" />
        <img src="/images/bkwds-mobile-4.png" className="no-box-shadow" />
      </div>
      <p>I wrote 4 blog posts about the making of this app:</p>
      <ul>
        <li>
          <a
            href="https://ahrjarrett.com/posts/2019-02-08-resetting-user-passwords-with-node-and-jwt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resetting a User’s Password Using Node.js and JWT
          </a>
        </li>
        <li>
          <a
            href="https://ahrjarrett.com/posts/2019-02-11-draw-an-interactive-elevation-chart-with-d3-and-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Draw an Interactive Elevation Chart with D3 & React, Part 1
          </a>
        </li>
        <li>
          <a
            href="https://ahrjarrett.com/posts/2019-02-16-draw-an-interactive-elevation-chart-with-d3-and-react-pt-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Draw an Interactive Elevation Chart with D3 & React, Part 2
          </a>
        </li>
        <li>
          <a
            href="https://ahrjarrett.com/posts/2019-03-27-draw-an-interactive-elevation-chart-with-d3-and-react-pt-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Draw an Interactive Elevation Chart with D3 & React, Part 3
          </a>
        </li>
      </ul>
      <p>Trips can be archived:</p>
      <img src="/images/bkwds-archived.png" style={{ width: '472px' }} />
      <p>A premium plan was added:</p>
      <img src="/images/bkwds-premium.png" style={{ width: '720px' }} />
      <p>Billing is handled by Stripe:</p>
      <img src="/images/bkwds-stripe.png" style={{ width: '720px' }} />
      <p>Users can reset their password via email if they forget it:</p>
      <iframe
        width="720"
        height="405"
        src="https://www.youtube.com/embed/DxugdZ0kHEY"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <p>
        We used D3 and the Google Maps API to generate an elevation graph and
        create an interactive user experience:
      </p>
      <iframe
        width="480"
        height="650"
        src="https://www.youtube.com/embed/9HXlmXwyuKk"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <p>Project logo:</p>
      <BkwdsSVG style={{ marginTop: '60px', marginBottom: '60px' }} />
      <ProjectFooterAlt
        repo={project.repo}
        url={project.url}
        name={project.name}
      />
    </div>
  )
}

export default Bkwds
