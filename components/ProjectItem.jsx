import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, backgroundImg, tech, projectUrl}) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="relative flex items-center justify-center bg-black h-scrren w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#868692] to-[#515355]"
    >
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <Link href={projectUrl}>
          <p className="text-cente px-2 py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            Mais informações
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ProjectItem