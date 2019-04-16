import * as React from 'react'
import styled from 'styled-components'
import { graphqlOperation } from 'aws-amplify'
import { Connect } from 'aws-amplify-react'

import { createProject } from '../graphql/mutations'

interface State {
  name: string
  repo: string
  url: string
  description: string
  imgName: string
  thumbnailName: string
  thumbnailPosition: string
  date: string
  slug: string
  tags: string
  tech: string
  type: string
}

interface Props {}

interface MutationProps {
  data: object
  loading: boolean
  errors: [string?]
}

class AddProject extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      name: '',
      type: '',
      repo: '',
      url: '',
      description: '',
      imgName: '',
      thumbnailName: '',
      thumbnailPosition: '',
      date: '',
      slug: '',
      tags: '',
      tech: '',
    }
  }

  handleChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    this.setState({ ...this.state, [key]: e.target.value })
  }

  // handleSubmit = async mutationFn => (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
  handleSubmit = mutationFn => async e => {
    const input = {
      ...this.state,
      tags: this.state.tags.split(' '),
      tech: this.state.tech.split(' '),
    }

    console.log('handle submit, state: ', this.state)
    console.log('e: ', e)
    console.log('mutationFn: ', mutationFn)
    console.log('input: ', input)

    try {
      await mutationFn({ input })
    } catch (e) {
      console.log('try catch error: ', e)
    }
  }

  render() {
    return (
      <AddProjectStyles>
        <div className="new-project-input">
          <h1>Add Project</h1>
          <input
            placeholder="Project name"
            onChange={this.handleChange('name')}
            value={this.state.name}
          />
          <input
            placeholder="Project type (project, website, resume, other)"
            onChange={this.handleChange('type')}
            value={this.state.type}
          />
          <input
            placeholder="Repo"
            onChange={this.handleChange('repo')}
            value={this.state.repo}
          />
          <input
            placeholder="Project URL"
            onChange={this.handleChange('url')}
            value={this.state.url}
          />
          <input
            placeholder="Description"
            onChange={this.handleChange('description')}
            value={this.state.description}
          />
          <input
            placeholder="Image name (not path)"
            onChange={this.handleChange('imgName')}
            value={this.state.imgName}
          />
          <input
            placeholder="Thumbnail nail (not path)"
            onChange={this.handleChange('thumbnailName')}
            value={this.state.thumbnailName}
          />
          <input
            placeholder="Thumbnail position (not path)"
            onChange={this.handleChange('thumbnailPosition')}
            value={this.state.thumbnailPosition}
          />
          <input
            placeholder="Date"
            onChange={this.handleChange('date')}
            value={this.state.date}
          />
          <input
            placeholder="Slug"
            onChange={this.handleChange('slug')}
            value={this.state.slug}
          />
          <input
            placeholder="Tags (separated by a space)"
            onChange={this.handleChange('tags')}
            value={this.state.tags}
          />
          <input
            placeholder="Tech (separated by a space)"
            onChange={this.handleChange('tech')}
            value={this.state.tech}
          />
        </div>
        <div className="new-project-display">
          <Connect mutation={graphqlOperation(createProject)}>
            {({ mutation, errors, ...props }) => (
              <React.Fragment>
                <h3>New Project Display</h3>
                <button onClick={this.handleSubmit(mutation)}>
                  Add Project
                </button>
                {errors.length > 0 &&
                  errors.map((e, i) => (
                    <div key={i}>
                      {' '}
                      Error {i}: {e.message}
                    </div>
                  ))}
                {console.log(props)}
              </React.Fragment>
            )}
          </Connect>
        </div>
      </AddProjectStyles>
    )
  }
}

const AddProjectStyles = styled.div`
  .new-project-input {
    display: flex;
    flex-direction: column;
    input {
      width: 500px;
      border: none;
      padding: 5px 10px;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
  .new-project-display {
  }
`

export default AddProject

// export const createProject = `mutation CreateProject($input: CreateProjectInput!) {
//   createProject(input: $input) {
//     id
//     name
//     description
//     url
//     repo
//     imgName
//     tags
//     tech
//     date
//     slug
//   }
// }
// `;

// <ul>
//   <h3>Tags</h3>
//   <button>+</button>
//   {this.state.tags.map(tag => (
//     <li>
//       <input placeholder="Tag" value={tag} />
//     </li>
//   ))}
// </ul>

// <ul>
//   <h3>Technologies</h3>
//   <button>+</button>
//   {this.state.tech.map(tech => (
//     <li>
//       <input placeholder="Tech" value={tech} />
//     </li>
//   ))}
// </ul>
