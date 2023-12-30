import Picture from "./assets/pic.jpg";
import StockDo from "./assets/stockdo.png";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <main>
      <h1 className="text-red-500 absolute left-[55rem] top-4">
        Under construction!
      </h1>
      <div className="flex flex-col gap-4 text-2xl m-3 fixed">
        <a href="https://github.com/RenanL15" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/renan-almeida-lopes"
          target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://wa.me/13981046971" target="_blank">
          <FaWhatsapp />
        </a>
      </div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-title max-sm:text-3xl">Renan Almeida</h1>
          <h2 className="text-2xl font-subtitle max-sm:text-2xl">
            Desenvolvedor Front-end
          </h2>
          <img
            src="https://camo.githubusercontent.com/a58a41bd835c6e80a7b68b272e60ede430966243aa343c42d6258f265575f9ba/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6a732c68746d6c2c6373732c72656163742c7461696c77696e642c6e6f64656a732c616e67756c61722c626f6f7473747261702c7068702c6669676d612c6d7973716c"
            alt="My skills [JS, HTML, CSS, React, Tailwind, NodeJS, Angular, Bootstrap, PHP, Figma, MySQL]"
            width={450}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center m-auto gap-10 text-justify">
        <img
          src={Picture}
          alt="My picture"
          width={300}
          className="rounded-2xl"
        />
        <p className="font-main leading-10 text-lg w-[60%]">
          Olá, meu nome é Renan Almeida, e atualmente sou formado em
          Desenvolvimento de Sistemas na ETEC Dra. Ruth Cardoso. Ao longo dos
          últimos 3 anos, tenho imergido no universo do desenvolvimento de
          websites, aplicando e aprimorando constantemente meus conhecimentos
          através de desenvolvimento de diversos projetos. Além disso,
          destaco-me por minha dedicação integral às tarefas que me são
          confiadas, mantendo compromisso com os prazos estabelecidos. Minha
          fidelidade à entrega de resultados é notória, e faço questão de
          garantir que cada projeto seja concluído de acordo com as
          especificações e expectativas do cliente.
        </p>
      </div>
      <div className="flex flex-col items-center mt-44">
        <h1 className="font-title text-3xl">Meus Projetos</h1>
        <div className="flex justify-center my-24 gap-24 mx-12 flex-wrap">
          {Array(12)
            .fill("")
            .map((_, i) => (
              <div
                key={i}
                className="w-[25rem] rounded-2xl overflow-clip shadow-2xl">
                <div className="h-full">
                  <img src={StockDo} className="opacity-80" />
                  <button className="bg-black text-white font-main font-bold w-full py-3 text-xl">
                    View project
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}

export default App;
