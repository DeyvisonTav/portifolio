import Image from 'next/image'
import React from 'react'
import Nufinance from '../public/assets/projects/Nufinance.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const nufinance = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Nufinance}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">NuFinance</h2>
          <h3>ReactNative / Tailwind / ApiRest</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Projeto</p>
          <h2>Visão Geral</h2>
          <p>
            Há mais ou menos uma semana 14/08/22 me dei o desafio de aprender uma
            tecnologia nova, então comecei meus estudos no react native. Hoje 21/08/22
            estou trazendo meu primeiro aplicativo. Está bastante simples, ainda
            pretendo integrar com firebase para fazer as autenticações e criar
            novas telas.
          </p>
          <a
            href="https://www.linkedin.com/posts/deyvison-tavares_reactnative-tecnologia-frontend-activity-6967487656708444160-sat7?utm_source=share&utm_medium=member_desktop"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demonstração</button>
          </a>
          <a
            href="https://github.com/DeyvisonTav/NuFinance"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Código</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tecnologias</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ReactNative
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> react-native-reanimated
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> react-native
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> react-native-animatable
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

export default nufinance
