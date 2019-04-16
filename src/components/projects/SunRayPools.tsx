import * as React from 'react'
import { IProject } from '../../types'
import { ProjectFooterAlt } from '../ProjectMeta'
import Image from '../ContentImage'

interface Props {
  project: IProject
}

const SunRayPools: React.FC<Props> = ({ project }) => {
  return (
    <React.Fragment>
      <div>
        <p>
          {project.name} is a website I built for a Dallas pool builder in
          Spring, 2015.
        </p>

        <p>
          The goal was to get a site that worked — and quickly. The customer’s
          website did not function anymore, and pool season was just a few
          months away.
        </p>

        <div className="split-img" style={{ marginTop: '80px' }}>
          <img src="/images/sunraypools-gallery.jpg" />
        </div>

        <div className="split">
          <div className="left">
            <img src="/images/sunraypools-gallery-mobile.jpg" />
          </div>
          <div className="right">
            <h4>
              At the same time, the client needed everything to be responsive.
              Back in 2015 this wasn’t necessarily a given, and many of the
              client’s competitors had websites that simply crashed when opened
              on a mobile phone.
            </h4>
          </div>
        </div>

        <div className="split">
          <div className="left">
            <h4>
              The client used the website launch as an opportunity to rework
              their brand, placing a new emphasis on testimonials and building
              relationships with their users, rather than launch into a sales
              pitch.
            </h4>
          </div>
          <div className="right">
            <img src="/images/sunraypools-testimonials.jpg" />
          </div>
        </div>

        <div className="split-img">
          <img src="/images/sunraypools-hero.jpg" />
        </div>

        <p>
          This was my second website, and I did everything the hard way: From
          writing code by hand, to using <code>setTimeout</code> instead of a
          Promise, things got pretty hairy...
        </p>

        <p>
          ...but I also did everything from scratch. I learned <i>a ton</i> from
          this project, most memorably that JavaScript is asynchronous and that
          CSS is hard.
        </p>
      </div>
      <ProjectFooterAlt
        repo={project.repo}
        url={project.url}
        name={project.name}
      />
    </React.Fragment>
  )
}

export default SunRayPools
