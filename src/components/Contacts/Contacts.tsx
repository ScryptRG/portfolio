import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import Curriculo from "../../assets/curriculo-renan-almeida.pdf";

export default function Contacts() {
  return (
    <div className="absolute flex flex-col gap-4 m-3 text-xl">
      <a href="https://github.com/ScryptRG" target="_blank" title="Github">
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/renan-almeida-lopes"
        target="_blank"
        title="LinkedIn">
        <FaLinkedin />
      </a>
      <a href={Curriculo} download={true} title="Meu currículo">
        <FaFileDownload />
      </a>
    </div>
  );
}
