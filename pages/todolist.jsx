import Image from 'next/image'
import React from 'react'
import ToDoList from '../public/assets/projects/ToDoList.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const todolist = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={ToDoList}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Lista de Tarefas</h2>
          <h3>React JS / Tailwind / TypeScript</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Projeto</p>
          <h2>Visão Geral</h2>
          <p>
            O todolist, é uma lista de tarefas cujo o diferencial é que uso o
            localstorage, que salva na memória do navegador as tarefas já
            criadas. Assim, quando damos f5, não perdemos nenhuma tarefa.
          </p>
          <a
            href="https://github.com/DeyvisonTav/ToDoList"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-[666672] px-8 py-2 mt-4 mr-8">Código</button>
          </a>
          <a
            href="https://to-do-list-mu-beryl.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demonstração</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tecnologias</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TypeScrpt
              </p>
              
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Voltar</p>
        </Link>
      </div>
    </div>
  )
}

export default todolist
