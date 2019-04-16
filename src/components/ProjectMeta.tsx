import * as React from 'react'
import Tooltip from 'react-tooltip'
import * as s from '../styles/ProjectMeta.styles'
import { convertDateString, makeTagline } from '../utils'

interface ProjectBannerProps {
  imgName: string
  name: string
  url: string
}

interface ProjectMetaProps {
  project
  imgName: string
  name: string
  date: string
  tags: [string]
  tech: [string]
  description: string
  url: string
  repo: string
}

interface ProjectFooterProps {
  repo: string
  url: string
  name: string
}

export const ProjectFooter: React.FC<ProjectFooterProps> = ({
  repo,
  url,
  name,
}) => (
  <s.ProjectFooterStyles>
    <div className="split project-footer-split">
      <div className="left project-footer-left">
        <p className="project-footer-p">
          See{' '}
          <a href={repo} target="_blank" rel="noopener noreferrer">
            {name}’s source code
          </a>
        </p>
      </div>
      <div className="right project-footer-right">
        <p className="project-footer-p">
          Visit live{' '}
          <a href={url} target="_blank" rel="noopener noreferrer">
            {name} app
          </a>
        </p>
      </div>
    </div>
  </s.ProjectFooterStyles>
)

export const ProjectFooterAlt: React.FC<ProjectFooterProps> = ({
  repo,
  url,
  name,
}) => (
  <s.ProjectFooterStyles>
    <div className="split project-footer-split">
      <div className="website">
        <p>>> Visit the live example app to see this package in action.</p>
        <a
          href={url}
          // href="https://react-speak.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {name} app
        </a>
      </div>
    </div>
    <div className="split project-footer-split">
      <div className="repo">
        <a href={repo} target="_blank" rel="noopener noreferrer">
          {name} repo
        </a>
        <p>{'<<'} Check out the source code and see how it was made.</p>
      </div>
    </div>
  </s.ProjectFooterStyles>
)

export const ProjectBanner: React.FC<ProjectBannerProps> = ({
  imgName,
  name,
  url,
}) => (
  <s.ProjectBannerStyles>
    <section>
      <div className="section-container">
        <div className="img-wrapper">
          <a
            data-tip="React-tooltip"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={`/images/${imgName}`} alt={name} />
            <Tooltip
              place="right"
              type="dark"
              effect="float"
              className="tooltip"
            >
              See live project
            </Tooltip>
          </a>
        </div>
      </div>
    </section>
  </s.ProjectBannerStyles>
)

const ProjectMeta: React.FC<ProjectMetaProps> = ({
  imgName,
  name,
  date,
  tags,
  tech,
  url,
  repo,
  description,
}) => (
  <s.ProjectMetaStyles>
    <ProjectBanner imgName={imgName} name={name} url={url} />
    <section>
      <div className="project-meta section-container">
        <div className="project-intro">
          <div className="project-left">
            <div className="project-date">{convertDateString(date)}</div>
            <div className="project-name-wrapper">
              <h2 className="project-name">{name}</h2>
              <div className="project-name-flourish">
                <span />
              </div>
            </div>
            {tags && (
              <div className="project-tags">
                tags: <span>{makeTagline(tags)}</span>
              </div>
            )}
            {tech && (
              <div className="project-tags">
                tech: <span>{makeTagline(tech)}</span>
              </div>
            )}
          </div>
          <div className="project-right">
            <div className="project-links">
              <div className="project-url">
                <span className="bullet">• </span>{' '}
                <a href={url} target="_blank" rel="noopener noreferrer">
                  see live project
                </a>
              </div>
              <div className="project-repo">
                <span className="bullet">• </span>{' '}
                <a href={repo} target="_blank" rel="noopener noreferrer">
                  project repo
                </a>
              </div>
            </div>
            <div className="project-description">
              {description.split('\n').map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </s.ProjectMetaStyles>
)

export default ProjectMeta
