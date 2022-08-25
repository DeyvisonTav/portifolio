import React from 'react'
import Head from 'next/head'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const resume = () => {
  return (
    <>
      <Head>
        <title>Deyvison | Cv</title>

        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Cv Deyvison</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Deyvison Tavares</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/deyvison-tavares/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href="https://github.com/DeyvisonTav"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Experiência Comprovada <span className="px-1">|</span>{' '}
              Desenvolvedor Web <span className="px-1">|</span> Resolução de
              Problemas complexos
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Experiência Comprovada</p>
            <p className="py-2">Desenvolvedor Web</p>
            <p>Resolução de Problemas complexos</p>
          </div>
        </div>
        <p>
          Busco aplicar minha experiência como desenvolvedor Front-end no
          desenvolvimento de interfaces modernas e responsivas. Aprimorar minhas
          habilidades de trabalho em equipe, projetando uma evolução contínua e
          gradual dentro da empresa. Me desenvolver junto com o estímulo e apoio
          de uma equipe comprometida com a inovação do mercado!
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Desenvolvedor Front-end
            <span className="px-2">|</span> HTML <span className="px-2">|</span>
            CSS <span className="px-2">|</span>React
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> Firebase
            <span className="px-2">|</span> Next
            <span className="px-2">|</span> TypeScript
          </p>
        </div>
      </div>
      <div className="flex justify-center pb-8">
        <a
          href="https://drive.google.com/file/d/14afmUAj-pTlgmL10XBtXVSXiUSJbiYIP/view?usp=sharing"
          target="blanck"
        >
          <button className=" px-8 p-4 text-gray-100 mt-4">Currículo</button>
        </a>
      </div>
    </>
  )
}

export default resume
