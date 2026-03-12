import RepoCard from '@/components/RepoCard'
import React from 'react'
import Projects from "../data/Projects.json";
const Repository = () => {
  return (
    <div className='flex flex-col gap-5 md:mt-10'>
      {Projects.projects.map((project)=>(
           <RepoCard
              key={project.id}
              title={project.title}
              desc={project.description}
              skills={project.techstack}
              liveLink={project.demoUrl}
              githubLink={project.githubUrl}
            />
      ))}
    </div>
  )
}

export default Repository