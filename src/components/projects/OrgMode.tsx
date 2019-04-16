import * as React from 'react'
import { IProject } from '../../types'
import { ProjectFooter } from '../ProjectMeta'

interface Props {
  project: IProject
}

const OrgMode: React.FC<Props> = ({ project }) => {
  return (
    <React.Fragment>
      <div>
        <p>
          <b>{project.name}</b> is an npm package that takes an org-mode file
          (.org file extension) as a prop, creates an AST, and processes the AST
          to render the file as HTML.
        </p>
      </div>

      <p style={{ marginBottom: '50px', marginTop: '20px' }}>
        The theme that comes bundled with the package is based on{' '}
        <a
          href="https://github.com/fniessen/emacs-leuven-theme"
          target="_blank"
          rel="noopener noreferrer"
        >
          leuven, a wonderful Emacs theme
        </a>{' '}
        that makes organizing your life beautiful.
      </p>

      <div className="split-img">
        <img src="/images/org-mode-leuven.png" alt="Leuven: An Emacs theme" />
      </div>

      <div className="split-img">
        <img
          src="/images/org-mode-preview.png"
          alt="Leuven: An Emacs theme"
          style={{ maxWidth: '960px' }}
        />
      </div>

      <div className="split">
        <div className="left">
          <img src="/images/org-mode-collapse.gif" />
        </div>
        <div className="right">
          <p>Trees collapse/expand recursively.</p>
        </div>
      </div>

      <div className="split">
        <div className="left">
          <p>React context manages dark or light theme.</p>
        </div>
        <div className="right">
          <img src="/images/org-mode-theme.gif" />
        </div>
      </div>

      <p>
        Here’s an{' '}
        <a
          href="https://d2zagxzfpig3h9.cloudfront.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          example Gatsby app
        </a>{' '}
        I deployed that uses the org-mode package to render several large
        org-files as blog posts.
      </p>

      <ProjectFooter
        repo={project.repo}
        url={project.url}
        name={project.name}
      />
    </React.Fragment>
  )
}

export default OrgMode
