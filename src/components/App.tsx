import * as React from 'react'
import { graphqlOperation } from 'aws-amplify'
import { Connect } from 'aws-amplify-react'
import styled from 'styled-components'

import Layout from './Layout'
import Header from './Header'
import MidpageNav from './MidpageNav'
import Highlight from './Highlight'
import Footer from './Footer'
import Projects from './Projects'
import { listProjects } from '../graphql/queries'
import { dateToInt, dateSortFn } from '../utils'
import { IProjectQuickView, IProject } from '../types'

const App: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <Layout>
        <AppStyles>
          <div className={`App`}>
            <Header />
            <section>
              <div className="section-container">
                <Connect query={graphqlOperation(listProjects, { limit: 20 })}>
                  {({ data: { listProjects } }: any) => {
                    if (!listProjects) return null
                    const projects = listProjects.items
                      .filter(({ type }: IProject) => type === 'project')
                      .sort(dateSortFn)
                    const websites = listProjects.items
                      .filter(({ type }: IProject) => type === 'website')
                      .sort(dateSortFn)

                    // const resumes = listProjects.items
                    //   .filter(({ type }: IProject) => type === 'resume')
                    //   .sort(dateSortFn)
                    // const other = listProjects.items
                    //   .filter(({ type }: IProject) => type === 'other')
                    //   .sort(dateSortFn)

                    return (
                      <React.Fragment>
                        <div className="projects-type-wrapper">
                          <h2>Projects</h2>
                          <Projects projects={projects} />
                        </div>
                        <div className="websites-type-wrapper">
                          <h2>Websites</h2>
                          <Projects projects={websites} />
                        </div>
                      </React.Fragment>
                    )
                  }}
                </Connect>
              </div>
            </section>
            <MidpageNav />
            <Highlight />
          </div>
        </AppStyles>
      </Layout>
    </React.Fragment>
  )
}

const AppStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default App
