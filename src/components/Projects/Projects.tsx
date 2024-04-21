import StockDo from "../../assets/projects_images/stockdo.png";
import Adoptify from "../../assets/projects_images/adoptify.jpg";
import Bertioga from "../../assets/projects_images/bertioga.jpg";
import Calculadora from "../../assets/projects_images/calculadora.jpg";
import Carlist from "../../assets/projects_images/carlist.jpg";
import Solvex from "../../assets/projects_images/solvex.png";
import Danganfellas from "../../assets/projects_images/danganfellas.jpg";
import GuessYourTrack from "../../assets/projects_images/guessyourtrack.jpg";
import Rankify from "../../assets/projects_images/rankify.png";
import NextDictionary from "../../assets/projects_images/nextdictionary.jpg";
import PizzaPlanet from "../../assets/projects_images/pizzaplanet.jpg";
import SolarSystem from "../../assets/projects_images/solarsystem.jpg";
import Cursos from "../../assets/projects_images/cursos.jpg";
import IMC from "../../assets/projects_images/IMC.jpg";
import Portfolio from "../../assets/projects_images/portfolio.jpg";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  interface Projects {
    image: string;
    rep: string;
    demo: string;
  }
  const projects: Projects[] = [
    {
      image: StockDo,
      rep: "https://github.com/StockDo/stockdo",
      demo: "https://stockdo.vercel.app",
    },
    {
      image: Adoptify,
      rep: "https://github.com/RenanL15/adoptify",
      demo: "https://adoptify-renanl15.vercel.app",
    },
    {
      image: Bertioga,
      rep: "https://github.com/RenanL15/site-bertioga",
      demo: "https://bertioga.vercel.app",
    },
    {
      image: Carlist,
      rep: "https://github.com/RenanL15/car-list",
      demo: "https://car-list-react.vercel.app",
    },
    {
      image: PizzaPlanet,
      rep: "https://github.com/RenanL15/pizza-planet",
      demo: "https://pizza-planet.vercel.app",
    },
    {
      image: Danganfellas,
      rep: "https://github.com/RenanL15/danganfellas",
      demo: "https://danganfellas.vercel.app",
    },
    {
      image: GuessYourTrack,
      rep: "https://github.com/RenanL15/guess-your-track",
      demo: "https://guessyourtrack.vercel.app",
    },
    {
      image: Rankify,
      rep: "https://github.com/RenanL15/rankify",
      demo: "https://rankify-me.netlify.app",
    },
    {
      image: Calculadora,
      rep: "https://github.com/RenanL15/calculadora-react",
      demo: "https://calculadora-react-tan.vercel.app/",
    },
    {
      image: Solvex,
      rep: "",
      demo: "https://solvex.netlify.app",
    },
    {
      image: SolarSystem,
      rep: "https://github.com/RenanL15/solar-system",
      demo: "https://solar-system-renanl15.vercel.app",
    },
    {
      image: NextDictionary,
      rep: "https://github.com/RenanL15/NextDictionary",
      demo: "https://next-dictionary-project.vercel.app",
    },
    {
      image: Portfolio,
      rep: "https://github.com/RenanL15/solar-system",
      demo: "https://renan-almeida.vercel.app",
    },
    {
      image: IMC,
      rep: "https://github.com/RenanL15/calculo-imc",
      demo: "",
    },
    {
      image: Cursos,
      rep: "https://github.com/RenanL15/cadastro-cursos",
      demo: "",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-24 mx-8 my-24">
      {projects.map((e, i) => (
        <div className="flex flex-col items-center" key={i}>
          <div className="bg-black lg:h-[17.5rem] rounded-lg shadow-xl overflow-clip group">
            <div className="max-w-[25rem] overflow-clip">
              <img
                src={e.image}
                className="duration-300 opacity-90 group-hover:scale-110"
              />
            </div>
            {e.rep && (
              <button
                onClick={() => {
                  window.open(e.rep);
                }}
                className="flex items-center justify-center w-full gap-2 py-3 text-xl font-bold text-white bg-black font-main hover:bg-neutral-8 hover:bg-neutral-800 rep-btn"
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
              className="mt-3 text-xl font-semibold text-slate-600 hover:underline"
            >
              Abrir website
              <FaArrowUpRightFromSquare
                size={19}
                className="inline-block ml-2 text-center"
              />
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
