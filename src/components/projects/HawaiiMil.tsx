import * as React from 'react'
import { IProject } from '../../types'
import { HawaiiMilSVG } from '../Icons/HawaiiMilSVG'
import { ProjectFooter } from '../ProjectMeta'

interface Props {
  project: IProject
}

const HawaiiMil: React.FC<Props> = ({ project }) => {
  return (
    <div>
      <p>{project.name} is a website I built for a Realtor client in 2017.</p>
      <p>
        The goal was to create a splash page that uses lifestyle content to
        convert traffic into actionable leads.
      </p>

      <div className="split" style={{ marginTop: '60px' }}>
        <div className="left">
          <img src="/images/hawaiimil-mobile.jpg" />
        </div>
        <div className="right">
          <h4>
            Mobile styles were important because the website is used by military
            families relocating to the Island, a demographic that depends on
            mobile data even more than the average user.
          </h4>
        </div>
      </div>
      <div className="split-img">
        <img src="/images/hawaiimil-2.jpg" />
      </div>

      <div className="split">
        <div className="left">
          <h4>
            This was my first foray into rendering custom maps in the browser.
            We created a map layer that showed the 8 miliary installations on
            Oahu, where my client was based.
          </h4>
        </div>
        <div className="right">
          <img src="/images/hawaiimil-map.jpg" />
        </div>
      </div>

      <div className="split">
        <div className="left">
          <img src="/images/hawaiimil-about.jpg" />
        </div>
        <div className="right">
          <img src="/images/hawaiimil-modal.jpg" />
        </div>
      </div>

      <p>
        Lead capture was the focus of the site, so modal popups and easy contact
        forms with client-side validation were necessary.{' '}
      </p>
      <p>
        The lifestyle content we produced was all in service of a warm, personal
        branding with an emphasis on adding real value.
      </p>

      <h3>Technologies:</h3>
      <p>
        This project used ExpressJS on the backend, with my own custom MVC
        implementation based loosely on SailsJS.
      </p>
      <p>Everything on the frontend is vanilla JavaScript.</p>

      <p>Project logo:</p>
      <HawaiiMilSVG width={600} height={286} style={{ marginTop: '80px' }} />
      <ProjectFooter
        repo={project.repo}
        url={project.url}
        name={project.name}
      />
    </div>
  )
}

export default HawaiiMil
