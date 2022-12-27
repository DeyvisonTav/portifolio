import Link from "next/link";
export default function Project2023() {
  return (
    <div id="projects" className="max-w-[1240px] mx-auto px-2 py-16 pt-[20rem]">
       <h2 className="py-4">Projetos...</h2>
        <p className="text-base font-bold pb-5 pl-3">[clique]</p>
        <div className="flex gap-10 shadow-2xl p-5 rounded-md w-[30rem]">
          <Link href={"/ReactNative"}>
            <h2 className="cursor-pointer text-[#666672] underline-offset-auto underline w-[13rem]">
              ReactNative
            </h2>
          </Link>
           <div><h2>|</h2></div>
          <Link href={"/React"}>
            <h2 className="cursor-pointer text-[#666672]  underline w-[10rem]">
              ReactJs
            </h2>
          </Link>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer font-bold flex justify-end">Voltar</p>
        </Link>
      </div>
  );
}
