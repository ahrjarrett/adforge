import * as React from 'react'
import { graphqlOperation } from 'aws-amplify'
import { Connect } from 'aws-amplify-react'

import Layout from './Layout'
import ProjectMeta from './ProjectMeta'
import { MatchProject, MatchWebsite } from './routes/MatchProject'
import { ProjectStyles } from '../styles/Project.styles'

const getProjectById = `query getProjectById($id: ID!) {
  getProject(id: $id)  {
    id 
    type
    name
    url
    date
    description
    repo
    imgName
    tags
    tech
    slug
  }
}`

interface ProjectProps {
  match: {
    params: {
      id: string
    }
  }
}

class Project extends React.Component<ProjectProps> {
  render() {
    return (
      <Layout>
        <ProjectStyles>
          <Connect
            query={graphqlOperation(getProjectById, {
              id: this.props.match.params.id,
            })}
          >
            {({ data: { getProject: project } }: any, loading: boolean) =>
              loading || !project ? (
                `Loading`
              ) : (
                <React.Fragment>
                  <ProjectMeta
                    project={project}
                    imgName={project.imgName}
                    name={project.name}
                    date={project.date}
                    tags={project.tags}
                    tech={project.tech}
                    description={project.description}
                    url={project.url}
                    repo={project.repo}
                  />
                  <div className="project">
                    {project.type === 'project' && (
                      <MatchProject name={project.name} project={project} />
                    )}
                    {project.type === 'website' && (
                      <MatchWebsite name={project.name} project={project} />
                    )}
                  </div>
                </React.Fragment>
              )
            }
          </Connect>
        </ProjectStyles>
      </Layout>
    )
  }
}

export default Project
