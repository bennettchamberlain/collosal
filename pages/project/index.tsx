import Button from 'components/atoms/Button'
import Select from 'components/atoms/Form/Select'
import LineDivider from 'components/atoms/LineDivider'
import PageSentence from 'components/molecules/PageSentence'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'
import randomString from 'utils/randomString'

const Project = () => {
  interface Project {
    title: string
    description: string
  }
  const projectList: Project[] = [
    {
      title: 'Ticketting system',
      description: 'A database that handles ticketting system for MR.Brainwash it has done 10k tickets till date, using the flutter web app and noSQL database',
    },
    {
      title: 'Westerm Belting Innovations',
      description: 'A Website for this company to showcase their products and services, we also did SEO work for them, connected with analitycs and other stuff to take complete controll over there viewership',
    },
    {
      title: 'Simple Mobile Blog App',
      description: 'A blog app on mobile platform',
    },
    {
      title: 'Realtime Chat App UI Design',
      description: 'A UI design for realtime chat app',
    },
  ]
  return (
    <PageTemplate title="Project - Collosal">
      <section className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
        <aside
          className="w-full sm:w-10/12 grid grid-cols-1 place-items-center gap-12 md:place-items-start md:w-8/12 lg:w-6/12"
          data-aos="fade-right"
        >
          <div className="text-center md:text-left">
            <PageSentence
              badge="PROJECTS"
              title="We have completed many amazing projects that you will not believe"
            />
          </div>
        </aside>
        <aside className="w-full min-w-[175px] md:w-fit" data-aos="fade-left">
          <Select
            options={[
              { label: 'App', value: 'app' },
              { label: 'UI Design', value: 'ui-design' },
              { label: 'Other', value: 'other' },
            ]}
          />
        </aside>
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-16">
        <div className="w-full grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-5">
          {projectList.map((project) => {
            return (
              <div className="basis-full lg:basis-1/2" key={randomString(64)} data-aos="zoom-in-up">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                />
              </div>
            )
          })}
        </div>
        <Button value="Load More" color="white" style="light" />
      </section>
    </PageTemplate>
  )
}

export default Project
