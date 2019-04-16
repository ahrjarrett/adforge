import * as React from 'react'
import styled from 'styled-components'
import { calculateHeight } from '../utils'

export interface ProjectsStylesProps {
  clientWidth: number
  children: React.ReactNode
}

// @ts-ignore
const ProjectsStyles = styled.div<ProjectsStylesProps>`
  .projects {
    width: 100%;
    .project-card {
      width: 33.33334%;
      display: inline-block;
    }
    .card-content {
      margin: 10px;
      background: #fff;
    }

    .img-wrapper {
      /* height: 300px;
      width: 500px; */
      height: 100%;
      height: ${({ clientWidth }) => calculateHeight(clientWidth) + 'px'};
      width: 100%;
      max-width: 100%;
      max-height: 100%;
      overflow: hidden;

      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.22);
      }
    }
    .img-wrapper img {
      height: auto;
      width: 100%;

      /* max-width: 100%;
      height: 300px;
      max-height: 360px; */
      /* object-fit: contain; */
      /* background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: cover; */
    }

    .img-wrapper a {
      height: 100%;
      width: 100%;
      display: inline-block;
      cursor: pointer;

      &:hover {
        /* opacity: 0.8;
        filter: brightness(100%) contrast(100%) saturate(100%) blur(0px)
          hue-rotate(0deg); */
        filter: brightness(100%) contrast(100%) saturate(100%) blur(0px)
          hue-rotate(150deg);
      }
    }

    .scalable-image {
      height: 100%;
      width: auto;
      background-size: cover;
    }

    @media only screen and (max-width: 767px) {
      .project-card {
        width: 100%;
      }
    }
    .card-meta {
      margin-top: 10px;
      margin-bottom: 20px;
    }
    .project-title {
      font-family: Cir;
      font-size: 1.25rem;
      a {
        padding: 0;
        line-height: 1.2;
      }
      &:hover {
        a {
          background-color: ${({ theme }) => theme.highlight};
        }
      }
    }
    .project-types {
      color: ${({ theme }) => theme.grey};
      font-family: Pre;
      font-size: 0.75rem;
      line-height: 1.25;
      letter-spacing: 0.4px;
      margin-left: 0.5px;
    }
  }
  .projects-bottom-spacer {
    height: 80px;
    width: 100%;
  }
`

export default ProjectsStyles
