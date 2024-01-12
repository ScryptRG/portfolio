import {
  FaFileDownload,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Curriculo from "../../assets/curriculo_renan.pdf";

export default function Contacts() {
  return (
    <div className="fixed flex flex-col gap-4 m-3 text-2xl">
      <a href="https://github.com/RenanL15" target="_blank" title="Github">
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/renan-almeida-lopes"
        target="_blank"
        title="LinkedIn">
        <FaLinkedin />
      </a>
      <a href="https://wa.me/13981046971" target="_blank" title="Whatsapp">
        <FaWhatsapp />
      </a>
      <a href={Curriculo} download={true} title="Meu currículo">
        <FaFileDownload />
      </a>
    </div>
  );
}
