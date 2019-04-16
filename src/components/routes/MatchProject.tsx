import * as React from 'react'
import styled from 'styled-components'

import { p, w } from '../projects/'
import { IProject } from '../../types'

interface MatchProjectProps {
  name: string
  project: IProject
}

export const MatchProject = ({ name, project }: MatchProjectProps) => {
  return (
    <MatchWrapper>
      {name === 'Bkwds.' && <p.Bkwds project={project} />}
      {name === 'org-mode' && <p.OrgMode project={project} />}
      {name === 'Portfolio' && <p.Portfolio project={project} />}
      {name === 'react-scale-image' && <p.ReactScaleImage project={project} />}
      {name === 'Gatsby Blog + Theme' && <p.Blog project={project} />}
      {name === 'react-speak' && <p.ReactSpeak project={project} />}
      {name === 'Polygon' && <p.Polygon project={project} />}
      {name === 'Pineneedles' && <p.Pineneedles project={project} />}
    </MatchWrapper>
  )
}

export const MatchWebsite = ({ name, project }: MatchProjectProps) => {
  return (
    <MatchWrapper>
      {name === 'HawaiiMil' && <w.HawaiiMil project={project} />}
      {name === 'Medical Equipment' && (
        <w.DallasMedicalEquipment project={project} />
      )}
      {name === 'Sun Ray Pools' && <w.SunRayPools project={project} />}
      {name === 'Quirky’s Coffee' && <w.QuirkysCoffee project={project} />}
      {name === 'FollowClosely' && <w.FollowClosely project={project} />}
    </MatchWrapper>
  )
}

const MatchWrapper = ({ children }) => (
  <section className="project-match">
    <div className="section-container">{children}</div>
  </section>
)

export default {
  MatchProject,
  MatchWebsite,
}
