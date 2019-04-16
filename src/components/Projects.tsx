import * as React from 'react'
import ProjectCard from './ProjectCard'
import ProjectsStyles from '../styles/Projects.styles'
import { IProject } from '../types'

interface Props {
  projects?: IProject[]
}

const Projects: React.FC<Props> = ({ projects }) => {
  const [width, setWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    const handleResize = () => {
      if (Math.abs(width - window.innerWidth) > 3) setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  return (
    <ProjectsStyles clientWidth={width}>
      <div className="projects">
        {projects.map((p: IProject, i: number) => (
          <ProjectCard project={p} key={i} index={i} />
        ))}
      </div>
      <div className="projects-bottom-spacer" />
      <div className="projects-hr hr" />
    </ProjectsStyles>
  )
}

export default Projects
