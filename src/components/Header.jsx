import LinksHeader from "./LinksHeader";
import { FolderKanban, Headset, User } from "lucide-react";

function Header() {
  return (
    <header className="w-screen p-10 h-[20vh] bg-gradient-to-r from-cyan-400/[0.4] to-purple-900/[0.4] text-white shadow-lg flex justify-center items-center ">
      <ul className="w-screen sm-custom:text-[10px] sm-custom:justify-between sm-custom:items-center flex flex-row gap-10 justify-end">
        <li>
          <LinksHeader to="section1" smooth={true}>
            <User className="scale-125 sm-custom:scale-[1]" />
            <p>Sobre Mim</p>
          </LinksHeader>
        </li>
        <li>
          <LinksHeader to="section2" smooth={true}>
            <FolderKanban className="scale-125 sm-custom:scale-[1]" /> Projetos
          </LinksHeader>
        </li>
        <li>
          <LinksHeader to="footer" smooth={true}>
            <Headset className="scale-125 sm-custom:scale-[1]" /> Contato
          </LinksHeader>
        </li>
        <li>
          <a
            href="./CV.pdf"
            download="Currículo.pdf"
            aria-label="Download do currículo"
          >
            <button className="bg-purple-900 text-white p-2 rounded-lg shadow-xl hover:bg-black hover:text-cyan-300 transition duration-500">
              Currículo
            </button>
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
