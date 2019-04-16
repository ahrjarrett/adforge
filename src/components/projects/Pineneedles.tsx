import * as React from 'react'
import { IProject } from '../../types'
import { ProjectFooterAlt } from '../ProjectMeta'
import { PineneedlesSVG } from '../Icons/LambdaSVG'

interface Props {
  project: IProject
}

const Pineneedles: React.FC<Props> = ({ project }) => {
  return (
    <React.Fragment>
      <div>
        <p>
          <b>{project.name}</b> is an app my TA at Lambda School asked me to
          build to improve her grading workflow.
        </p>
        <p>
          The goal was to create a streamlined UI that allows a TA to find her
          active students, get each of their repos and see its commit history,
          and leave a comment on the commit.
        </p>
        <h3>Commenting on a Commit:</h3>
        <img src="/images/pineneedles-comment.png" />
        <p>
          Lambda School TAs often have dozens of students and an ever-changing
          roster. Students need continual touches on their progress, but
          tracking down each student, and each project repo, was aggravating.
        </p>
        <p>
          To combat this, Pineneedles uses GitHub OAuth to find students and
          make comments from inside the Pineneedles dashboard, where only the
          data relevant to the authenticated TA is shown.
        </p>
        <img src="/images/pineneedles-oauth.gif" />
      </div>
      <p>Project logo:</p>
      <PineneedlesSVG style={{ marginTop: '60px' }} />

      <ProjectFooterAlt
        repo={project.repo}
        url={project.url}
        name={project.name}
      />
    </React.Fragment>
  )
}

export default Pineneedles
