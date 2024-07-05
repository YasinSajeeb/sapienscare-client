import { FaWhatsappSquare } from "react-icons/fa";
import logo from "../../../assets/images/Logo/logo.jpg";
const Footer = () => {
  const whatsappUrl = "https://wa.me/919332538107";
  return (
    <footer className="footer p-10 bg-zinc-800 text-neutral-content">
      <aside>
        <img src={logo} alt="logo" className="w-20 md:w-32 rounded-full" />
        <p>
          <span className="text-lg font-bold">Sapiens' Care</span>
          <br />
          Providing reliable supplement since 2022
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <FaWhatsappSquare size={50} />
        </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
