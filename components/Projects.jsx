import React from 'react'
import ToDoList from '../public/assets/projects/ToDoList.png'
import PrimeFlix from '../public/assets/projects/PrimeFlix.png'
import MiniBlog from '../public/assets/projects/MiniBlog.png'
import Secret from '../public/assets/projects/Secret.png'
import Nufinance from '../public/assets/projects/Nufinance.png'
import Elianef from '../public/assets/projects/Elianef.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#666672]">
          Projetos
        </p>
        <h2 className="py-4">O que eu construí</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="ToDoList "
            backgroundImg={ToDoList}
            projectUrl="/todolist"
            tech="React JS"
          />
          <ProjectItem
            title="Prime Flix"
            backgroundImg={PrimeFlix}
            projectUrl="/primeflix"
            tech="React JS"
          />
          <ProjectItem
            title="MiniBlog"
            backgroundImg={MiniBlog}
            projectUrl="/miniblog"
            tech="React JS"
          />
          <ProjectItem
            title="Secret Word"
            backgroundImg={Secret}
            projectUrl="/secret"
            tech="React JS"
          />

          <ProjectItem
            title="Nufinance"
            backgroundImg={Nufinance}
            projectUrl="/nufinance"
            tech="React Native"
          />

          <ProjectItem
            title="Nufinance"
            backgroundImg={Elianef}
            projectUrl="/elianef"
            tech="Vanilla"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
