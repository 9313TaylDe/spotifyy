import { Link } from "react-router-dom";
import iconeHome from "../assets/casa.png";
import iconeSpotify from "../assets/spotify.png";
import Input from "./Input";
import "../App.css";
import "../Header.css";
import ModoDarkWhite, { ModoDark } from "./ModoDarkWhite";
const Header = () => {
  return (
    <header className="container_do_header">
      <div className="container_do_header_icons">
        <Link to="/">
          {" "}
          <img className="iconeSpotify" src={iconeSpotify} alt="" />
        </Link>
        <Link to="/">
          {" "}
          <img className="iconeHome" src={iconeHome} alt="ícone" />
        </Link>
        <ModoDark />
      </div>
      <Input
        borderRadius="20px"
        placeholder="Digite algo"
        color="blue"
        cursor="pointer"
        type="text"
        font="20px"
      />
      <div className="container_do_header_user">
        <Link id="signup">Inscrever-se</Link>
        <button id="login">Entrar</button>
      </div>
    </header>
  );
};

export default Header;
