import * as React from 'react'
import styled from 'styled-components'
import { IProject } from '../../types'
import { ProjectFooterAlt } from '../ProjectMeta'
import { QuirkysSVG } from '../Icons/QuirkysSVG'

interface Props {
  project: IProject
}

const QuirkysStyles = styled.div`
  b,
  a {
    position: relative;
    &::after {
      position: absolute;
      content: '';
      height: 8px;
      width: 100%;
      left: 0;
      background: linear-gradient(
        135deg,
        #fff 0.0625rem,
        #91cfcd 0,
        #91cfcd calc(50% - 0.0625rem),
        #fff 0,
        #fff calc(50% + 0.0625rem),
        #91cfcd 0,
        #91cfcd calc(100% - 0.0625rem),
        #fff 0
      );
      background-size: 0.375rem 0.375rem;
      bottom: -5px;
      z-index: -1;
    }
  }
  a {
    text-decoration: none !important;
    font-family: Pre;
    font-weight: 600;
  }
  a:hover {
    background-color: transparent;
  }
  a::after {
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  a:hover {
    &::after {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }

  hr {
    height: 8px;
    background: linear-gradient(
      135deg,
      #fff 0.1em,
      #d0d0d0 0,
      #d0d0d0 calc(50% - 0.1em),
      #fff 0,
      #fff calc(50% + 0.1em),
      #d0d0d0 0,
      #d0d0d0 calc(100% - 0.1em),
      #fff 0
    );
    background-size: 0.5em 0.5em;
    border: 0;
    margin: 40px auto;
  }
`

const QuirkysCoffee: React.FC<Props> = ({ project }) => (
  <QuirkysStyles>
    <p>
      <b>{project.name}</b> is a website concept I designed for a small-batch
      coffee Roaster located in Erie, Colorado.
    </p>
    <p>
      This mockup served as the first iteration on a Squarespace site that I
      later deployed for them.
    </p>
    <h3>Project logo:</h3>
    <QuirkysSVG style={{ marginTop: '80px', marginBottom: '80px' }} />
    <hr />
    <ProjectFooterAlt
      repo={project.repo}
      url={project.url}
      name={project.name}
    />
  </QuirkysStyles>
)

export default QuirkysCoffee
