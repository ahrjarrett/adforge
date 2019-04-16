import * as React from 'react'
import { IProject } from '../../types'
import { BlogSVG } from '../Icons/BlogSVG'
import { ProjectFooter } from '../ProjectMeta'

interface Props {
  project: IProject
}

const Blog: React.FC<Props> = ({ project }) => {
  return (
    <React.Fragment>
      <div>
        <p>
          <b>the grepper</b> is my personal blog built with TypeScript and
          Gatsby.{' '}
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            Read the blog here
          </a>
          .
        </p>
        <p>
          <a href={project.repo} target="_blank" rel="noopener noreferrer">
            This repository
          </a>{' '}
          contains the Gatsby theme and blog configuration.
        </p>
        <p>Here are a few of the features I’ve added:</p>
        <br />
        <br />
        <h3>Google Maps & D3 integration:</h3>
        <img src="/images/gatsby-blog-and-theme-map-example.jpg" />
        <br />
        <br />
        <h3>Typography:</h3>
        <img src="/images/gatsby-blog-and-theme-post-example.png" />
        <br />
        <br />
        <h3>Code blocks:</h3>
        <img src="/images/gatsby-blog-and-theme-inline-code-example.png" />

        <br />
        <br />
        <h3>Traced SVG Placeholder Images:</h3>
        <img src="/images/gatsby-blog-and-theme-sharp-images-example.gif" />
        <h3>Project logo:</h3>
        <BlogSVG style={{ marginTop: '80px', marginBottom: '80px' }} />

        <ProjectFooter
          repo={project.repo}
          url={project.url}
          name={project.name}
        />
      </div>
    </React.Fragment>
  )
}

export default Blog
