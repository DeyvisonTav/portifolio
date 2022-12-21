import Link from "next/link";
export default function Project2023() {
  return (
    <div id="projects" className="max-w-[1240px] mx-auto px-2 py-16 pt-[20rem]">
      <h2 className="pb-20">
        Projetos 2023 <p className="text-base pt-8">aguarde...</p>
      </h2>
      <div className="flex justify-end pt-[10rem]">
        <Link href="/#projects">
          <p className="underline cursor-pointer font-bold">Voltar</p>
        </Link>
      </div>
    </div>
  );
}
