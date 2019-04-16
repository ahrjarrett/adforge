import * as React from 'react'
import { IProject } from '../../types'
import { ProjectFooter } from '../ProjectMeta'

interface Props {
  project: IProject
}

const FollowClosely: React.FC<Props> = ({ project }) => {
  return (
    <React.Fragment>
      <div>
        <p>{project.name}</p>
        <p>{project.description}</p>

        <ProjectFooter
          repo={project.repo}
          url={project.url}
          name={project.name}
        />
      </div>
    </React.Fragment>
  )
}

export default FollowClosely
