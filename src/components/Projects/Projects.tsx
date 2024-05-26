import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

// Projects background images
import Adoptify from "../../assets/projects_images/adoptify.jpg";
import Bertioga from "../../assets/projects_images/bertioga.jpg";
import Calculadora from "../../assets/projects_images/calculadora.jpg";
import Carlist from "../../assets/projects_images/carlist.jpg";
import Cursos from "../../assets/projects_images/cursos.jpg";
import Danganfellas from "../../assets/projects_images/danganfellas.jpg";
import GuessYourTrack from "../../assets/projects_images/guessyourtrack.jpg";
import IMC from "../../assets/projects_images/IMC.jpg";
import NextDictionary from "../../assets/projects_images/nextdictionary.jpg";
import PatinhasQueBrilham from "../../assets/projects_images/patinhas-que-brilham.png";
import PimentelESecco from "../../assets/projects_images/pimentel-e-secco.png";
import PizzaPlanet from "../../assets/projects_images/pizzaplanet.jpg";
import Portfolio from "../../assets/projects_images/portfolio.jpg";
import ProjetoOrientado from "../../assets/projects_images/projeto-orientado.png";
import Rankify from "../../assets/projects_images/rankify.png";
import SolarSystem from "../../assets/projects_images/solarsystem.jpg";
import Solvex from "../../assets/projects_images/solvex.png";
import StockDo from "../../assets/projects_images/stockdo.png";

export default function Projects() {
  interface Projects {
    title: string;
    image: string;
    rep: string;
    demo: string;
    alt: string;
    tools: string;
  }
  const projects: Projects[] = [
    {
      title: "StockDo",
      image: StockDo,
      rep: "https://github.com/StockDo/stockdo",
      demo: "https://stockdo.vercel.app",
      alt: "Interface do projeto StockDo",
      tools:
        "https://skillicons.dev/icons?i=js,css,react,tailwind,nodejs,mysql",
    },
    {
      title: "Adoptify",
      image: Adoptify,
      rep: "https://github.com/RenanL15/adoptify",
      demo: "https://adoptify-renanl15.vercel.app",
      alt: "Interface do projeto Adoptify",
      tools: "https://skillicons.dev/icons?i=js,css,react,tailwind",
    },
    {
      title: "Bertioga",
      image: Bertioga,
      rep: "https://github.com/RenanL15/site-bertioga",
      demo: "https://bertioga.vercel.app",
      alt: "Interface do projeto Bertioga",
      tools: "https://skillicons.dev/icons?i=js,html,css",
    },
    {
      title: "Carlist",
      image: Carlist,
      rep: "https://github.com/RenanL15/car-list",
      demo: "https://car-list-react.vercel.app",
      alt: "Interface do projeto Carlist",
      tools: "https://skillicons.dev/icons?i=js,css,react,tailwind",
    },
    {
      title: "Pizza Planet",
      image: PizzaPlanet,
      rep: "https://github.com/RenanL15/pizza-planet",
      demo: "https://pizza-planet.vercel.app",
      alt: "Interface do projeto Pizza Planet",
      tools: "https://skillicons.dev/icons?i=js,html,css",
    },
    {
      title: "Projeto Orientado",
      image: ProjetoOrientado,
      rep: "https://github.com/RenanL15/projeto-orientado",
      demo: "https://projeto-orientado-fatec.vercel.app",
      alt: "Interface do projeto Projeto Orientado",
      tools: "https://skillicons.dev/icons?i=html,css",
    },
    {
      title: "Patinhas que Brilham",
      image: PatinhasQueBrilham,
      rep: "https://github.com/RenanL15/patinhas-que-brilham",
      demo: "https://patinhas-que-brilham.vercel.app",
      alt: "Interface do projeto Patinhas que Brilham",
      tools: "https://skillicons.dev/icons?i=typescript,css,nextjs,tailwind",
    },
    {
      title: "Danganfellas",
      image: Danganfellas,
      rep: "https://github.com/RenanL15/danganfellas",
      demo: "https://danganfellas.vercel.app",
      alt: "Interface do projeto Danganfellas",
      tools: "https://skillicons.dev/icons?i=js,css,react,tailwind",
    },
    {
      title: "GuessYourTrack",
      image: GuessYourTrack,
      rep: "https://github.com/RenanL15/guess-your-track",
      demo: "https://guessyourtrack.vercel.app",
      alt: "Interface do projeto GuessYourTrack",
      tools: "https://skillicons.dev/icons?i=js,typescript,css,react,tailwind",
    },
    {
      title: "Rankify",
      image: Rankify,
      rep: "https://github.com/RenanL15/rankify",
      demo: "https://rankify-me.netlify.app",
      alt: "Interface do projeto Rankify",
      tools: "https://skillicons.dev/icons?i=typescript,css,react,tailwind",
    },
    {
      title: "Calculadora",
      image: Calculadora,
      rep: "https://github.com/RenanL15/calculadora-react",
      demo: "https://calculadora-react-tan.vercel.app/",
      alt: "Interface do projeto Calculadora",
      tools: "https://skillicons.dev/icons?i=js,css,react,tailwind",
    },
    {
      title: "Solvex",
      image: Solvex,
      rep: "",
      demo: "https://solvex.netlify.app",
      alt: "Interface do projeto Solvex",
      tools: "https://skillicons.dev/icons?i=js,html,css",
    },
    {
      title: "Pimentel & Secco",
      image: PimentelESecco,
      rep: "",
      demo: "https://nextapp-livid-nine.vercel.app",
      alt: "Interface do projeto Pimentel & Secco",
      tools: "https://skillicons.dev/icons?i=typescript,css,nextjs,tailwind",
    },
    {
      title: "Solar System",
      image: SolarSystem,
      rep: "https://github.com/RenanL15/solar-system",
      demo: "https://solar-system-renanl15.vercel.app",
      alt: "Interface do projeto Solar System",
      tools: "https://skillicons.dev/icons?i=html,css",
    },
    {
      title: "NextDictionary",
      image: NextDictionary,
      rep: "https://github.com/RenanL15/NextDictionary",
      demo: "https://next-dictionary-project.vercel.app",
      alt: "Interface do projeto NextDictionary",
      tools: "https://skillicons.dev/icons?i=js,html,css",
    },
    {
      title: "Portfólio",
      image: Portfolio,
      rep: "https://github.com/RenanL15/solar-system",
      demo: "https://renan-almeida.vercel.app",
      alt: "Interface do projeto Portfólio",
      tools: "https://skillicons.dev/icons?i=typescript,css,react,tailwind",
    },
    {
      title: "Calculadora IMC",
      image: IMC,
      rep: "https://github.com/RenanL15/calculo-imc",
      demo: "",
      alt: "Interface do projeto Calculadora IMC",
      tools: "https://skillicons.dev/icons?i=html,css,php",
    },
    {
      title: "Cadastro de Cursos",
      image: Cursos,
      rep: "https://github.com/RenanL15/cadastro-cursos",
      demo: "",
      alt: "Interface do projeto Cadastro de Cursos",
      tools: "https://skillicons.dev/icons?i=html,css,php",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-x-16 gap-y-28 mx-6 my-20">
      {projects.map((e, i) => (
        <div className="relative flex flex-col items-center group" key={i}>
          <h1
            className="font-mono tesxt-lg mb-4 border border-neutral-300 w-full text-center py-1 rounded-full
          absolute left-0 -top-12 duration-300"
          >
            {e.title}
          </h1>
          <div className="bg-black lg:h-[16rem] rounded-lg shadow-xl overflow-clip group z-10">
            <div className="max-w-[23rem] overflow-clip">
              <img
                src={e.image}
                alt={e.alt}
                className="duration-300 opacity-95 group-hover:scale-110"
              />
            </div>
            {e.rep && (
              <button
                onClick={() => {
                  window.open(e.rep);
                }}
                className="flex items-center justify-center w-full gap-2 py-3 font-bold text-white bg-black font-main hover:bg-neutral-8 hover:bg-neutral-800 rep-btn"
              >
                Ver repositório
                <span className="inline-block">
                  <FaGithub />
                  {/* <FaArrowUpRightFromSquare /> */}
                </span>
              </button>
            )}
          </div>
          {e.demo && (
            <a
              href={e.demo}
              target="_blank"
              className="mt-3 font-semibold text-slate-600 hover:underline"
            >
              Abrir website
              <FaArrowUpRightFromSquare
                size={15}
                className="inline-block ml-2 align-middle"
              />
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
