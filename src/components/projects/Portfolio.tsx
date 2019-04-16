import * as React from 'react'
import { IProject } from '../../types'
import { ProjectFooterAlt } from '../ProjectMeta'

interface Props {
  project: IProject
}

const Portfolio: React.FC<Props> = ({ project }) => {
  return (
    <div>
      <p>
        <b>This porfolio</b> was written in TypeScript and built with React on
        the frontend and a serverless GraphQL API instead of a backend.
      </p>
      <p>
        The GraphQL API is managed by AWS AppSync and the frontend is deployed
        using AWS Amplify.
      </p>
      <ProjectFooterAlt
        repo={project.repo}
        url={project.url}
        name={project.name}
      />
    </div>
  )
}

export default Portfolio
