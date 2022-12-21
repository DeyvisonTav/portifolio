import ToDoList from "../public/assets/projects/ToDoList.png";
import PrimeFlix from "../public/assets/projects/PrimeFlix.png";
import MiniBlog from "../public/assets/projects/MiniBlog.png";
import Secret from "../public/assets/projects/Secret.png";
import Nufinance from "../public/assets/projects/Nufinance.png";
import Elianef from "../public/assets/projects/Elianef.png";
import ecommerce from "../public/assets/projects/ecommerce.png";
import ProjectItem from "../components/ProjectItem";

export default function Project2022() {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      id="projects"
      className="max-w-[1240px] mx-auto px-2 py-16 pt-[20rem]"
    >
      <h2 className="pb-20">Projetos 2022</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectItem
          title="ToDoList "
          backgroundImg={ToDoList}
          projectUrl="/todolist"
          tech="React JS"
        />
        <ProjectItem
          title="Prime Flix"
          backgroundImg={PrimeFlix}
          projectUrl="/primeflix"
          tech="React JS"
        />
        <ProjectItem
          title="MiniBlog"
          backgroundImg={MiniBlog}
          projectUrl="/miniblog"
          tech="React JS"
        />
        <ProjectItem
          title="Secret Word"
          backgroundImg={Secret}
          projectUrl="/secret"
          tech="React JS"
        />

        <ProjectItem
          title="Nufinance"
          backgroundImg={Nufinance}
          projectUrl="/nufinance"
          tech="React Native"
        />

        <ProjectItem
          title="ElianeFashionHair"
          backgroundImg={Elianef}
          projectUrl="/elianef"
          tech="Vanilla"
        />

        <ProjectItem
          title="Ecommerce"
          backgroundImg={ecommerce}
          projectUrl="/ecommerce"
          tech="React"
        />
      </div>
    </div>
  );
}
