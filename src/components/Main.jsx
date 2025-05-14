import { ChevronDown, ChevronUp, Contact } from "lucide-react";
import { useState } from "react";
import { Element } from "react-scroll";
import Project from "./Projects";
import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa6";
import ListKnowledge from "./ListKnowledge";
import { SiMysql, SiTypescript } from "react-icons/si";
import { CiFolderOn } from "react-icons/ci";
import Contacts from "./Contact";

function Main() {
  const [projects, setProjects] = useState([
    {
      id: 0,
      title: "Folder",
      description: "Projeto de um jogo da velha feito em JavaScript,CSS e HTML",
      link: "https://jimmy2202.github.io/Jogo-da-Velha/",
      icon: "down",
      github: "https://github.com/Jimmy2202/Jogo-da-Velha",
    },
    {
      id: 1,
      title: "Folder",
      description:
        "Projeto de um jogo da forca feito em JavaScript, CSS e HTML",
      link: "https://jimmy2202.github.io/hangman/",
      icon: "down",
      github: "https://github.com/Jimmy2202/hangman",
    },
    {
      id: 2,
      title: "Folder",
      description:
        "Projeto feito com CSS, HTML e JavaScript, que simula um site informativo sobre um plano de saúde",
      link: "https://jimmy2202.github.io/Plano-False-Health/",
      icon: "down",
      github: "https://github.com/Jimmy2202/Plano-False-Health",
    },
    {
      id: 3,
      title: "Folder",
      description:
        "Site feito em JS, CSS e HTML que simula um e-commerce esportivo",
      link: "https://jimmy2202.github.io/Site-Esportivo/",
      icon: "down",
      github: "https://github.com/Jimmy2202/Site-Esportivo",
    },
    {
      id: 4,
      title: "Folder",
      description:
        "Site feito com ReactJS e Tailwind, para buscas de filmes, séries e atores",
      link: "https://jimmy2202.github.io/Search-Movies/",
      icon: "down",
      github: "https://github.com/Jimmy2202/Search-Movies",
    },
    {
      id: 5,
      title: "Folder",
      description:
        "Aplicação que visa simular através de um exemplo disponibilizado no Figma pela empresa Avanti como teste técnico, um e-commerce para a empresa sem permissão de React, apenas Tailwind.",
      link: "https://jimmy2202.github.io/Projeto1-Avanti/",
      icon: "down",
      github: "https://github.com/Jimmy2202/Projeto1-Avanti",
    },
    {
      id: 6,
      title: "Folder",
      description:
        "Aplicação que visa buscar usuários do github e suas biografias. Projeto que faz parte do teste técnico da empresa Avanti, utilizando React e Tailwind",
      link: "https://jimmy2202.github.io/Projeto2-Avanti-Github/",
      icon: "down",
      github: "https://github.com/Jimmy2202/Projeto2-Avanti-Github",
    },
    {
      id: 7,
      title: "Folder",
      description:
        "Aplicação com uma temática de horror que visa oferecer algumas ferramentas aos fãs do tema como recomendação de filmes, teste de personagem e de filme que mais se encaixa com o usuário.",
      link: "https://jimmy2202.github.io/HorrorSiteFront/",
      icon: "down",
      github: "https://github.com/Jimmy2202/HorrorSiteFront",
      github2: "https://github.com/Jimmy2202/HorrorSiteBackEnd",
    },
  ]);

  const showDetailsProjectAndIcon = (id) => {
    setProjects((prevprojects) => {
      return prevprojects.map((project) => {
        if (project.id == id) {
          let title = project.title;
          let description = project.description;
          return {
            ...project,
            title: description,
            description: title,
            icon: project.icon == "down" ? "up" : "down",
          };
        }
        return project;
      });
    });
  };

  const renderProjectIcon = (icon, id) => {
    const IconComponent = icon === "down" ? ChevronDown : ChevronUp;

    return (
      <div
        className="flex flex-row justify-center"
        title="Clique para ver detalhes do projeto"
      >
        <IconComponent
          size={40}
          onClick={() => showDetailsProjectAndIcon(id)}
          className="text-white hover:text-violet-600 transition ease-in-out duration-700 hover:cursor-pointer animate-float2"
        />
      </div>
    );
  };

  const knowledgeList1 = [
    {
      name: "JavaScript",
      icon: (
        <FaJsSquare className="text-[35px] text-yellow-400 animate-float2" />
      ),
    },
    {
      name: "CSS",
      icon: <FaCss3 className="text-[35px] text-blue-700 animate-float2" />,
    },
    {
      name: "HTML",
      icon: <FaHtml5 className="text-[35px] text-orange-600 animate-float2" />,
    },
    { name: "Express JS", icon: null },
    {
      name: "Tailwind",
      icon: (
        <RiTailwindCssLine className="text-[35px] text-blue-800 animate-float2" />
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <SiTypescript className="text-[35px] text-cyan-600 animate-float2" />
      ),
    },
  ];

  const knowledgeList2 = [
    {
      name: "ReactJS",
      icon: (
        <FaReact className="text-[35px] hover:text-[#34c6eb] animate-spin_custom" />
      ),
    },
    {
      name: "Python",
      icon: <FaPython className="text-[35px] text-yellow-700 animate-float2" />,
    },
    {
      name: "Java",
      icon: <FaJava className="text-[35px] text-red-700 animate-float2" />,
    },
    { name: "C", icon: null },
    {
      name: "MySQL",
      icon: (
        <SiMysql className="text-[35px] hover:text-blue-600 animate-float2" />
      ),
    },
  ];

  return (
    <main className="flex justify-center items-center flex-col gap-10">
      <Element
        name="section1"
        className="w-full flex items-center flex-col justify-center gap-24"
      >
        <div className="container_section1 w-[90vw] border border-white mt-10  h-fit bg-black/[0.5] text-cyan-300 transition duration-700 hover:bg-white/[0.5] bg-no-repeat bg-cover hover:text-slate-800 animate-float relative">
          <span className="absolute p-2 top-[-2vh] left-40 bg-black text-cyan-300 transition duration-500 rounded-lg border border-white">
            Sobre Mim
          </span>
          <div className="p-10 text-center">
            Meu nome é Arthur de Oliveira Pinto, tenho 25 anos, sou estudante de
            Ciência da Computação. Atualmente estou no 7º período e em busca da
            minha primeira vaga de estágio dentro do ramo do desenvolvimento de
            software.
          </div>
          <img
            src="https://i.imgur.com/ZP2aB6u.gif"
            alt=""
            className="absolute bottom-0 w-[100px] h-[100px]"
          />
        </div>

        <div className="flex flex-col p-2 sm-custom:text-center gap-10 justify-center items-center w-screen relative">
          <h1 className="text-cyan-500 text-[30px] sm-custom:text-[20px] font-press_start_2p">
            Conhecimentos e{" "}
            <span className="text-cyan-200 text-[40px] sm-custom:text-[30px] font-bold animate-pulse_custom">
              Tecnologias
            </span>
          </h1>

          <ul className="flex font-orbitron flex-row sm-custom:flex-col gap-10 flex-wrap justify-center ">
            {knowledgeList2.map((item) => (
              <ListKnowledge key={item.name}>
                {item.name} {item.icon}
              </ListKnowledge>
            ))}

            {knowledgeList1.map((item) => (
              <ListKnowledge key={item.name}>
                {item.name} {item.icon}
              </ListKnowledge>
            ))}
          </ul>
        </div>
      </Element>

      <Element name="section2" className="flex relative flex-col gap-14 p-5">
        <p className="p-5 font-orbitron shadow-blue-800 shadow-sm w-screen text-center bg-black/[0.5] text-cyan-300 text-[20px] relative">
          {" "}
          Projetos{" "}
          <img
            src="https://i.imgur.com/j7yaUrn.gif"
            alt=""
            className="absolute left-1 top-1 w-[60px] h-[60px]"
          />
          <img
            src="https://i.imgur.com/j7yaUrn.gif"
            alt=""
            className="absolute right-1 top-1 w-[60px] h-[60px]"
          />
        </p>

        <div className="absolute w-[20vw] sm-custom:left-7 sm-custom:top-24 sm-custom:w-[95vw] text-[6px] font-press_start_2p text-center shadow-sm shadow-purple-600 top-20 left-20 animate-float2 p-3 bg-white border-red-500 rounded-xl">
          Clique no ícone da pasta ou na descrição do projeto para ir para o
          site do projeto! Para acessar a descrição, clique nas setas!
        </div>

        <div className="flex relative flex-row flex-wrap gap-7 p-5 justify-center items-center sm-custom:flex-col">
          {projects.map((project) => (
            <div
              key={project.id}
              className="h-fit w-fit flex flex-col gap-3 justify-center items-center"
            >
              {renderProjectIcon(project.icon, project.id)}
              <Project>
                <a
                  href={project.link}
                  title="Clique para ir ao projeto..."
                  className="hover:text-purple-950"
                >
                  {project.title == "Folder" ? (
                    <CiFolderOn className="scale-[3] sm-custom:scale-[4]" />
                  ) : (
                    <div>{project.title}</div>
                  )}
                </a>
                <a
                  href={project.github}
                  className="hover:text-black text-[12px] font-orbitron flex flex-row gap-3"
                >
                  Código Fonte
                  <FaGithub className="scale-[1.8]" />
                </a>
                {project.github2 ? (
                  <a
                    href={project.github2}
                    className="hover:text-black text-[12px] font-orbitron flex flex-row gap-3"
                  >
                    Segundo Código Fonte
                    <FaGithub className="scale-[2.5]" />
                  </a>
                ) : (
                  ""
                )}
              </Project>
            </div>
          ))}
        </div>
      </Element>

      <Element name="footer">
        <Contacts></Contacts>
      </Element>
    </main>
  );
}

export default Main;
