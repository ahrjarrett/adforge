import * as React from 'react'
import { IProject } from '../../types'
import { ProjectFooterAlt } from '../ProjectMeta'

interface Props {
  project: IProject
}

const ReactScaleImage: React.FC<Props> = ({ project }) => {
  return (
    <React.Fragment>
      <div>
        <p>{project.name}</p>
        <p>{project.description}</p>

        <ProjectFooterAlt
          repo={project.repo}
          url={project.url}
          name={project.name}
        />
      </div>
    </React.Fragment>
  )
}

export default ReactScaleImage
