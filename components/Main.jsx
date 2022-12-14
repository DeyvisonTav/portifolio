import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
const Main = () => {

  useEffect(() => {
    Aos.init({ duration: 2000, easing: "ease-out" });
  });
 
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="5000"
      id="home"
      className="w-full h-screen text-center"
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Vamos Construir Algo Juntos
          </p>
          <h1 className="py-4 text-gray-700">
            Oi, eu sou <span className="text-[#666672]"> Deyvison Tavares</span>
          </h1>
          <h1 className="py-2 text-gray-700">Desenvolvedor Front-end</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            Estou focado na construção de aplicativos web front-end responsivos
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/deyvison-tavares/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/DeyvisonTav"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
