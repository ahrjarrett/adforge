import * as React from 'react'
import { Link } from 'react-router-dom'
import { IProject } from '../types'

interface Props {
  project: IProject
  index: number
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  let style = {}
  if (project.thumbnailPosition) {
    project.thumbnailPosition
      .split(',')
      .map(s => s.split(':'))
      .forEach(arr => (style[arr[0].trim()] = arr[1].trim()))
  }

  return (
    <div className="project-card">
      <div className="card-content">
        <div className="img-wrapper">
          <Link to={`/projects/${project.id}`}>
            <div
              className="scalable-image"
              style={{
                background: `url(/images/${project.thumbnailName})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                ...style,
              }}
            />
          </Link>
        </div>
        <div className="card-meta">
          <div className="project-title">
            <Link to={`/projects/${project.id}`}>{project.name}</Link>
          </div>
          <div className="project-types">{project.tech.join(' / ')}</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
