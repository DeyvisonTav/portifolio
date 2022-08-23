import Image from 'next/image'
import React from 'react'
import Elianef from '../public/assets/projects/Elianef.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const elianef = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Elianef}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">ElianeFashionHair</h2>
          <h3>Vanilla/ Html / JavaScript / Css / </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Projeto</p>
          <h2>Visão Geral</h2>
          <p>
            O ElianeFashionHair é um projeto pessoal desenvolvido para minha
            sogra com projeto dela poder alcançar novos clientes, seus serviços,
            depoimentos de clientes de forma prática e visual. Esse projeto foi o
            meu primeiro onde foi desenvolvido durante o Projeto NLW - Next
            Level Week , pela Rocketseat. O NLW é uma experiência online com
            muito conteúdo prático, desafios e hacks onde o conteúdo fica
            disponível durante uma semana.
          </p>
          <a
            href="https://github.com/DeyvisonTav/ElianeFashionHair"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Código</button>
          </a>
          <a
            href="https://deyvisontav.github.io/ElianeFashionHair/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demonsração</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tecnologias</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Vanilla
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Css
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Html
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">voltar</p>
        </Link>
      </div>
    </div>
  )
}

export default elianef
