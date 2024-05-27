import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="flex justify-center py-16 bg-gray-200 ">
      <div className="flex flex-col gap-8">
        <div className="flex gap-2 items-center">
          <MdEmail size={25} />
          <p>renandealmeida2003@gmail.com</p>
        </div>
        <div className="flex gap-2 items-center">
          <FaLinkedin size={25} />
          <a
            href="https://www.linkedin.com/in/renan-almeida-lopes/"
            target="_blank"
            className="hover:underline"
          >
            Renan de Almeida Lopes
          </a>
        </div>
        <div className="flex gap-2 items-center">
          <FaGithub size={25} />
          <a
            href="https://github.com/renanl15"
            target="_blank"
            className="hover:underline"
          >
            RenanL15
          </a>
        </div>
      </div>
    </footer>
  );
}
