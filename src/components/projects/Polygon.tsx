import * as React from 'react'
import { IProject } from '../../types'
import { ProjectFooterAlt } from '../ProjectMeta'

interface Props {
  project: IProject
}

const Polygon: React.FC<Props> = ({ project }) => {
  return (
    <div>
      <div className="split">
        <div className="left">
          <img src="/images/polygon-detail-2.jpg" />
        </div>
        <div className="right">
          <p>
            <b>{project.name}</b> is an app that a Realtor contracted me to
            build in 2016.
          </p>
        </div>
      </div>

      <div className="split">
        <div className="left">
          <p>
            The goal of the app was to allow the Realtor to draw a shape on a
            Google Map (or “polygon”) and query her MLS database to find homes
            that fall within the polygon.
          </p>
        </div>
        <div className="right">
          <img src="/images/polygon-detail.jpg" />
        </div>
      </div>

      <h3>Technologies:</h3>
      <p>
        The app’s backend was built with ExpressJS and queries against a Mongo
        database.
      </p>
      <p>
        The frontend was built using vanilla JavaScript and a utility library
        called Ramda, a functional version of Lodash or Underscore that was used
        to curry functions and map over datasets returned by the app’s backend
        and the Google Maps API.
      </p>

      <ProjectFooterAlt
        repo={project.repo}
        url={project.url}
        name={project.name}
      />
    </div>
  )
}

export default Polygon
