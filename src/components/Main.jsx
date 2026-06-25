import { ExternalLink, Github, Sparkles, Music, Brain } from "lucide-react";
import { Element } from "react-scroll";
import { FaCss3, FaHtml5, FaJava, FaJsSquare, FaReact } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa6";
import { SiExpress, SiMysql, SiTypescript } from "react-icons/si";
import ListKnowledge from "./ListKnowledge";
import Contacts from "./Contact";

function Main() {
  const featuredProjects = [
    {
      id: 1,
      title: "Gooday",
      subtitle: "Assistente fullstack de bem-estar com IA generativa",
      description:
        "Sistema interativo onde o usuário registra seu estado emocional em um diário virtual. A aplicação analisa o texto com IA generativa e direciona o usuário para experiências específicas, como organização de pensamentos, redes mentais, respiração e foco.",
      link: "https://jimmy2202.github.io/GoodDay-Front",
      github: "https://github.com/Jimmy2202/GoodDay-Front",
      github2: "https://github.com/Jimmy2202/GoodDay-Back",
      icon: <Brain size={42} />,
      techs: ["React", "Tailwind", "Node", "Express", "MySQL", "OpenAI"],
    },
    {
      id: 2,
      title: "FloatZen",
      subtitle: "TCC sobre música, emoção e bem-estar",
      description:
        "Aplicação desenvolvida como Trabalho de Conclusão de Curso, voltada para recomendação musical baseada no estado emocional do usuário. O projeto une interface interativa, autenticação, histórico e recomendações personalizadas.",
      link: "https://jimmy2202.github.io/FloatZenFront/",
      github: "https://github.com/Jimmy2202/FloatZenFront",
      github2: "https://github.com/Jimmy2202/FloatZenBack",
      icon: <Music size={42} />,
      techs: ["React", "Tailwind", "Express", "MySQL", "JWT", "API"],
    },
  ];

  const otherProjects = [
    {
      title: "HorrorZone",
      description:
        "Aplicação fullstack com temática de horror, recomendações de filmes e testes interativos.",
      link: "https://jimmy2202.github.io/HorrorSiteFront/",
      github: "https://github.com/Jimmy2202/HorrorSiteFront",
    },
    {
      title: "Search Movies",
      description:
        "Busca de filmes, séries e atores utilizando React e consumo de API.",
      link: "https://jimmy2202.github.io/Search-Movies/",
      github: "https://github.com/Jimmy2202/Search-Movies",
    },
    {
      title: "E-commerce Avanti",
      description:
        "Interface de e-commerce feita com HTML, JavaScript e Tailwind.",
      link: "https://jimmy2202.github.io/Projeto1-Avanti/",
      github: "https://github.com/Jimmy2202/Projeto1-Avanti",
    },
    {
      title: "GitHub Search",
      description:
        "Aplicação para buscar usuários do GitHub e exibir seus dados públicos.",
      link: "https://jimmy2202.github.io/Projeto2-Avanti-Github/",
      github: "https://github.com/Jimmy2202/Projeto2-Avanti-Github",
    },
  ];

  const knowledgeList = [
    {
      name: "ReactJS",
      icon: <FaReact className="text-[35px] animate-spin_custom" />,
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-[35px] text-yellow-400" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-[35px] text-cyan-500" />,
    },
    {
      name: "Tailwind",
      icon: <RiTailwindCssLine className="text-[35px] text-cyan-400" />,
    },
    {
      name: "Express",
      icon: <SiExpress className="text-[35px] text-white" />,
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-[35px] text-blue-400" />,
    },
    {
      name: "Python",
      icon: <FaPython className="text-[35px] text-yellow-500" />,
    },
    {
      name: "Java",
      icon: <FaJava className="text-[35px] text-red-500" />,
    },
    {
      name: "HTML",
      icon: <FaHtml5 className="text-[35px] text-orange-500" />,
    },
    {
      name: "CSS",
      icon: <FaCss3 className="text-[35px] text-blue-500" />,
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center gap-24 px-4 py-10 text-white">
      <Element
        name="section1"
        className="w-full flex flex-col items-center gap-16"
      >
        <section className="w-full max-w-6xl rounded-3xl border border-cyan-300/20 bg-black/50 backdrop-blur-md p-8 md:p-12 shadow-2xl shadow-cyan-950/40 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-700/10" />

          <div className="relative z-10 flex flex-col gap-6">
            <span className="w-fit rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200 font-orbitron">
              Desenvolvedor Fullstack
            </span>

            <h1 className="text-4xl md:text-6xl font-press_start_2p text-cyan-200 leading-tight">
              Arthur de Oliveira Pinto
            </h1>

            <p className="max-w-3xl text-gray-300 text-lg leading-relaxed font-orbitron">
              Estudante de Ciência da Computação e desenvolvedor focado em
              aplicações fullstack com React, Node, Express, MySQL e interfaces
              interativas. Tenho interesse em criar projetos que misturam
              tecnologia, experiência visual e impacto real no usuário.
            </p>
          </div>
        </section>

        <section className="w-full max-w-6xl flex flex-col items-center gap-8">
          <h2 className="font-press_start_2p text-center text-2xl md:text-4xl text-cyan-300">
            Tecnologias
          </h2>

          <ul className="flex font-orbitron flex-row gap-6 flex-wrap justify-center">
            {knowledgeList.map((item) => (
              <ListKnowledge key={item.name}>
                {item.name} {item.icon}
              </ListKnowledge>
            ))}
          </ul>
        </section>
      </Element>

      <Element
        name="section2"
        className="w-full max-w-7xl flex flex-col items-center gap-12"
      >
        <div className="text-center flex flex-col gap-4">
          <span className="text-cyan-400 font-orbitron tracking-[0.4em] uppercase">
            Projetos principais
          </span>

          <h2 className="font-press_start_2p text-3xl md:text-5xl text-white">
            Gooday & FloatZen
          </h2>

          <p className="max-w-3xl text-gray-300 font-orbitron">
            Meus projetos mais completos, envolvendo front-end, back-end, banco
            de dados, autenticação, APIs externas e foco em bem-estar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 backdrop-blur-md p-8 shadow-2xl shadow-black/50 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/40"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-red-500/10 opacity-70" />

              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="text-cyan-300">{project.icon}</div>
                  <Sparkles className="text-purple-300 animate-pulse" />
                </div>

                <div>
                  <h3 className="font-press_start_2p text-3xl text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-cyan-200 font-orbitron">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-gray-300 leading-relaxed font-orbitron">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100 font-orbitron"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-black font-bold transition-all duration-300 hover:bg-white"
                  >
                    Ver projeto <ExternalLink size={18} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-white transition-all duration-300 hover:bg-white hover:text-black"
                  >
                    Front <Github size={18} />
                  </a>

                  <a
                    href={project.github2}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-white transition-all duration-300 hover:bg-white hover:text-black"
                  >
                    Back <Github size={18} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="w-full flex flex-col gap-8">
          <h2 className="font-press_start_2p text-center text-2xl text-cyan-300">
            Outros projetos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {otherProjects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40"
              >
                <h3 className="font-press_start_2p text-lg text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm font-orbitron leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-300 hover:text-white transition"
                  >
                    <ExternalLink size={22} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-300 hover:text-white transition"
                  >
                    <Github size={22} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Element>

      <Element name="footer" className="w-full">
        <Contacts />
      </Element>
    </main>
  );
}

export default Main;
