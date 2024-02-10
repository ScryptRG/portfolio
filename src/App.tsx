import Picture from "./assets/pic.png";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Projects from "./components/Projects/Projects.tsx";
import Contacts from "./components/Contacts/Contacts.tsx";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <main className={`${dark ? "dark" : "light"}`}>
      <Contacts />
      <button
        onClick={() => {
          setDark(!dark);
        }}
        className="fixed right-0 m-4">
        {dark ? <FaSun size={30} /> : <FaMoon size={30} />}
      </button>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-4 mx-4 text-center">
          <h1 className="text-4xl font-title max-sm:text-3xl">Renan Almeida</h1>
          <h2 className="text-2xl font-subtitle max-sm:text-2xl">
            Desenvolvedor Full-stack
          </h2>
          <img
            src="https://skillicons.dev/icons?i=js,typescript,html,css,react,tailwind,nodejs,git,php,mysql"
            alt="My skills [JS, HTML, CSS, React, Tailwind, NodeJS, Angular, Bootstrap, PHP, Figma, MySQL]"
            width={450}
          />
          <a href="#sobre" className="mt-6 animate-bounce">
            <IoIosArrowDown size={50} />
          </a>
        </div>
      </div>
      <h1
        className="mb-12 pt-12 text-3xl text-center underline font-title underline-offset-[1rem]"
        id="sobre">
        Sobre mim
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-10 m-auto">
        <img
          src={Picture}
          alt="My picture"
          width={280}
          className="rounded-2xl"
        />
        <p className="font-main leading-[3rem] text-lg w-[50%] text-justify max-xl:w-[80%] max-xl:text-base max-xl:text-center max-xl:leading-9">
          Olá, meu nome é Renan Almeida, e Atualmente sou formado em
          Desenvolvimento de Sistemas na ETEC Dra. Ruth Cardoso. Ao longo dos
          últimos 3 anos, tenho imergido no universo de desenvolvimento de
          websites, aplicando e aprimorando constantemente meus conhecimentos
          através de projetos acadêmicos pessoais, tendo conhecimento em
          tecnologias como JavaScript, React, NodeJS, PHP e MySQL, que são
          ferramentas fundamentais para desenvolvimento full-stack.
        </p>
      </div>
      <div className="flex flex-col items-center mt-64">
        <h1 className="text-3xl font-title underline underline-offset-[1rem] text-center max-sm:text-2xl">
          Meus Projetos
        </h1>
        <Projects />
      </div>
    </main>
  );
}

export default App;
