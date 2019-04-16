import * as React from 'react'
import styled from 'styled-components'
import { IProject } from '../../types'
import { MountainSVG } from '../Icons/MountainSVG'
import { ProjectFooterAlt } from '../ProjectMeta'

interface Props {
  project: IProject
}

const Styles = styled.div`
  .logo-container {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    cursor: cell;
    height: 270px;
    width: 540px;
    max-width: 100%;
    margin: 30px auto 50px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    &:hover {
      background: #f66800;
      filter: brightness(100%) contrast(100%) saturate(100%) blur(0px)
        hue-rotate(310deg);
      /* transition: background 0.3s ease; */
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
    svg {
      max-width: 90%;
    }
  }
`

const DallasMedicalEquipment: React.FC<Props> = ({ project }) => {
  return (
    <Styles>
      <div>
        <p>
          I built this website over a weekend for a new client who was heading
          to a trade show, and ordered business cards with the domain he
          purchased on them (but no website there).
        </p>

        <img
          src="/images/medical-equipment-about.jpg"
          alt="Medical Equipment Site: About Page"
          style={{ width: '960px', maxWidth: '100%' }}
        />

        <h5 style={{ marginTop: '60px' }}>
          The backend is built with the ExpressJS using my own MVC flavor that
          is partly based on SailsJS and partly based on not yet fully
          understanding the purpose of a model.
        </h5>

        <h5>
          If I were to rewrite this app, I’d probably use Django on the backend
          and Vue.js on the frontend, and would deploy with AWS instead of
          Heroku.
        </h5>

        <h5>
          What I like about this project is the logo and the branding, both of
          which I designed in Illustrator. I do my design work in Sketch
          nowadays, although I do miss how I used to get into a workflow in
          Illustrator.
        </h5>

        <p style={{ textAlign: 'center' }}>Project logo:</p>
        <div className="logo-container">
          <MountainSVG width={412} height={170} style={{ width: '100%' }} />
        </div>

        <h5>
          If nothing else, this project taught me that I can create and deploy a
          custom website in a weekend, and that fiddling with CSS is how I
          “bikeshed” myself when I’m procrastinating writing JavaScript.
        </h5>

        <ProjectFooterAlt
          repo={project.repo}
          url={project.url}
          name={project.name}
        />
      </div>
    </Styles>
  )
}

export default DallasMedicalEquipment
