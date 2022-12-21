import React from "react";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      id="projects"
      className="w-full"
    >
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#666672]">
          Projetos
        </p>
        <h2 className="py-4">O que eu construí...</h2>
        <p className="text-base font-bold pb-5 pl-3">[clique]</p>
        <div className="flex gap-10 shadow-2xl p-5 rounded-md w-[18.3rem]">
          <Link href={"/Project2022"}>
            <h2 className="cursor-pointer text-[#666672] underline-offset-auto underline w-[5rem]">
              2022
            </h2>
          </Link>
           <div><h2>|</h2></div>
          <Link href={"/Project2023"}>
            <h2 className="cursor-pointer text-[#666672]  underline w-[10rem]">
              2023
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
