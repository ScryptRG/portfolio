import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

// Projects background images
import Adoptify from "../../assets/projects_images/adoptify.jpg";
import Bertioga from "../../assets/projects_images/bertioga.jpg";
import Calculadora from "../../assets/projects_images/calculadora.jpg";
import Carlist from "../../assets/projects_images/carlist.jpg";
import Cursos from "../../assets/projects_images/cursos.jpg";
import Danganfellas from "../../assets/projects_images/danganfellas.jpg";
import GuessYourLyrics from "../../assets/projects_images/guessyourlyrics.png";
import GuessYourTrack from "../../assets/projects_images/guessyourtrack.jpg";
import Hollowdle from "../../assets/projects_images/hollowdle.png";
import Narilist from "../../assets/projects_images/narilist.png";
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
import Starmine from "../../assets/projects_images/starmine.png";
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
      title: "Adoptify",
      image: Adoptify,
      rep: "https://github.com/ScryptRG/adoptify",
      demo: "https://adoptify-renanl15.vercel.app",
      alt: "Interface do projeto Adoptify",
      tools: "https://skillicons.dev/icons?i=react,js",
    },
    {
      title: "Bertioga",
      image: Bertioga,
      rep: "https://github.com/ScryptRG/site-bertioga",
      demo: "https://bertioga.vercel.app",
      alt: "Interface do projeto Bertioga",
      tools: "https://skillicons.dev/icons?i=html,js",
    },
    {
      title: "Calculadora",
      image: Calculadora,
      rep: "https://github.com/ScryptRG/calculadora-react",
      demo: "https://calculadora-react-tan.vercel.app/",
      alt: "Interface do projeto Calculadora",
      tools: "https://skillicons.dev/icons?i=react,js",
    },
    {
      title: "Calculadora IMC",
      image: IMC,
      rep: "https://github.com/ScryptRG/calculo-imc",
      demo: "",
      alt: "Interface do projeto Calculadora IMC",
      tools: "https://skillicons.dev/icons?i=html,php",
    },
    {
      title: "Cadastro de Cursos",
      image: Cursos,
      rep: "https://github.com/ScryptRG/cadastro-cursos",
      demo: "",
      alt: "Interface do projeto Cadastro de Cursos",
      tools: "https://skillicons.dev/icons?i=html,php",
    },
    {
      title: "Carlist",
      image: Carlist,
      rep: "https://github.com/ScryptRG/car-list",
      demo: "https://car-list-react.vercel.app",
      alt: "Interface do projeto Carlist",
      tools: "https://skillicons.dev/icons?i=react,js",
    },
    {
      title: "Danganracters",
      image: Danganfellas,
      rep: "https://github.com/ScryptRG/danganracters",
      demo: "https://danganracters.vercel.app",
      alt: "Interface do projeto Danganracters",
      tools: "https://skillicons.dev/icons?i=react,js",
    },
    {
      title: "GuessYourLyrics",
      image: GuessYourLyrics,
      rep: "https://github.com/ScryptRG/guess-your-lyrics",
      demo: "https://guessyourlyrics.vercel.app",
      alt: "Interface do projeto GuessYourLyrics",
      tools: "https://skillicons.dev/icons?i=angular,ts",
    },
    {
      title: "GuessYourTrack",
      image: GuessYourTrack,
      rep: "https://github.com/ScryptRG/guess-your-track",
      demo: "https://guessyourtrack.vercel.app",
      alt: "Interface do projeto GuessYourTrack",
      tools: "https://skillicons.dev/icons?i=react,js",
    },
    {
      title: "Hollowdle",
      image: Hollowdle,
      rep: "https://github.com/ScryptRG/hollowdle",
      demo: "https://hollowdle.vercel.app",
      alt: "Interface do projeto Hollowdle",
      tools: "https://skillicons.dev/icons?i=nextjs,ts",
    },
    {
      title: "Narilist",
      image: Narilist,
      rep: "https://github.com/ScryptRG/narilist",
      demo: "https://narilist.vercel.app",
      alt: "Interface do projeto Narilist",
      tools: "https://skillicons.dev/icons?i=angular,ts",
    },
    {
      title: "NextDictionary",
      image: NextDictionary,
      rep: "https://github.com/ScryptRG/NextDictionary",
      demo: "https://next-dictionary-project.vercel.app",
      alt: "Interface do projeto NextDictionary",
      tools: "https://skillicons.dev/icons?i=html,js",
    },
    {
      title: "Patinhas que Brilham",
      image: PatinhasQueBrilham,
      rep: "https://github.com/ScryptRG/patinhas-que-brilham",
      demo: "https://patinhas-que-brilham.vercel.app",
      alt: "Interface do projeto Patinhas que Brilham",
      tools: "https://skillicons.dev/icons?i=nextjs,ts",
    },
    {
      title: "Pimentel & Secco",
      image: PimentelESecco,
      rep: "",
      demo: "https://nextapp-livid-nine.vercel.app",
      alt: "Interface do projeto Pimentel & Secco",
      tools: "https://skillicons.dev/icons?i=nextjs,ts",
    },
    {
      title: "Pizza Planet",
      image: PizzaPlanet,
      rep: "https://github.com/ScryptRG/pizza-planet",
      demo: "https://pizza-planet.vercel.app",
      alt: "Interface do projeto Pizza Planet",
      tools: "https://skillicons.dev/icons?i=html,js",
    },
    {
      title: "Portfólio",
      image: Portfolio,
      rep: "https://github.com/ScryptRG/portfolio",
      demo: "https://renan-almeida.vercel.app",
      alt: "Interface do projeto Portfólio",
      tools: "https://skillicons.dev/icons?i=react,ts",
    },
    {
      title: "Projeto Orientado",
      image: ProjetoOrientado,
      rep: "https://github.com/ScryptRG/projeto-orientado",
      demo: "https://projeto-orientado-fatec.vercel.app",
      alt: "Interface do projeto Projeto Orientado",
      tools: "https://skillicons.dev/icons?i=html,css",
    },
    {
      title: "Rankify",
      image: Rankify,
      rep: "https://github.com/ScryptRG/rankify",
      demo: "https://rankify-me.netlify.app",
      alt: "Interface do projeto Rankify",
      tools: "https://skillicons.dev/icons?i=react,ts",
    },
    {
      title: "Solar System",
      image: SolarSystem,
      rep: "https://github.com/ScryptRG/solar-system",
      demo: "https://solar-system-renanl15.vercel.app",
      alt: "Interface do projeto Solar System",
      tools: "https://skillicons.dev/icons?i=html,css",
    },
    {
      title: "Solvex",
      image: Solvex,
      rep: "",
      demo: "https://solvex.netlify.app",
      alt: "Interface do projeto Solvex",
      tools: "https://skillicons.dev/icons?i=html,js",
    },
    {
      title: "Starmine",
      image: Starmine,
      rep: "https://github.com/ScryptRG/starmine",
      demo: "https://starmine.vercel.app",
      alt: "Interface do projeto Starmine",
      tools: "https://skillicons.dev/icons?i=angular,ts",
    },
    {
      title: "StockDo",
      image: StockDo,
      rep: "https://github.com/StockDo/stockdo",
      demo: "https://stockdo.vercel.app",
      alt: "Interface do projeto StockDo",
      tools: "https://skillicons.dev/icons?i=react,js",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-x-16 gap-y-28 mx-6 my-20">
      {projects.map((e, i) => (
        <div className="relative flex flex-col items-center" key={i}>
          <div className="flex items-center justify-between border border-neutral-300 w-full py-1 px-2 rounded-full mb-4">
            <div className="w-[40px]"></div>
            <h1 className="font-mono text-center">{e.title}</h1>
            <img src={e.tools} width={40} />
          </div>
          <div className="bg-black lg:h-[16rem] rounded-lg shadow-xl overflow-clip group z-10">
            <div className="max-w-[23rem] overflow-clip">
              <img
                src={e.image}
                alt={e.alt}
                className="duration-300 opacity-95 group-hover:scale-110"
              />
            </div>
            {e.rep ? (
              <a
                href={e.rep}
                target="_blank"
                className="flex items-center justify-center w-full gap-2 py-3 font-bold text-white bg-black font-main hover:bg-neutral-8 hover:bg-neutral-800 rep-btn"
              >
                Ver repositório
                <span className="inline-block">
                  <FaGithub />
                  {/* <FaArrowUpRightFromSquare /> */}
                </span>
              </a>
            ) : (
              <span className="flex items-center justify-center w-full gap-2 py-3 font-bold text-neutral-400 bg-neutral-800 font-main rep-btn">
                Repositório indisponível
              </span>
            )}
          </div>
          {e.demo ? (
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
          ) : (
            <p className="mt-3 font-semibold text-neutral-400">
              Website indisponível
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
