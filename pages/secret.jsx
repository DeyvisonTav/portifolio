import Image from 'next/image'
import React from 'react'
import Secret from '../public/assets/projects/Secret.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const secret = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Secret}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Secret Word</h2>
          <h3>React / Tailwind / ApiRest</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Projeto</p>
          <h2>Visão Geral</h2>
          <p>
            Secret Word - é um projeto todo desenvolvido em React Js para
            mostrar meus conhecimentos. Ele é um game no estilo caça palavras em
            que o player tem 5 chances para ir adivinhando as letras da palavra
            secreta até completá-la, o player tem acesso a uma dica sobre a
            palavra. O game também mostra as letras que o Player errou no
            decorrer do jogo. A cada palavra acertada, o player ganha 100
            pontos. No final do jogo o player tem o total de pontos obtidos em
            score e a opção de inicar uma nova partida.
          </p>
          <a
            href="https://jogo-secret-words.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demonstração</button>
          </a>
          <a
            href="https://github.com/DeyvisonTav/jogo-secret-words"
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
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ApiRest
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

export default secret
