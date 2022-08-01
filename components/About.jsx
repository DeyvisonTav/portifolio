import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AboutImg from '../public/assets/about.jpg'

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#666672]">
            Sobre
          </p>
          <h2 className="py-4">Quem sou eu</h2>
          <p className="py-2 text-gray-600">//Dev Front-end</p>
          <p className="py-2 text-gray-600">
            Desenvolvedor de Software, com experiência de atuação em grandes
            projetos pessoais. Iniciando no desenvolvimento em 2012 e retomando
            com força total em 2022. Me reconheço como entusiasta em novas
            tecnologias do mercado, com aprendizado adquirido dia após dia.
            Possuo foco em desenvolvimento com Javascript, TypeScript, ReactJs e
            NextJs dentre outras tecnologias que uso para criar aplicações web
            de alto nível e valor. Também compartilho meu conhecimento através
            dessa plataforma para as pessoas que inciam e que estão atuando no
            mundo da programação. Sou um programador focado em carreira e
            empreendedorismo. Me considero ágil e consistente em aprender uma
            novas tecnologias e tenho alta adaptabilidade às mudanças, pronto
            para superar qualquer desafio do mercado. Se eu pudesse me definir
            em 3 palavras, certamente seriam: otimista, perseverante e
            esforçado!
          </p>

          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Confira alguns dos meus últimos projetos.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  )
}

export default About
