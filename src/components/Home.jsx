import Footer from "./Footer";
import iconeLivraria from "../assets/iconeLivraria.png";
import "primeflex/primeflex.css";
import Albums from "./Albums";
import PopularArtists from "./PopularArtists";
import PopularRadio from "./PopularRadio";
import "../Home.css";
import ModoDarkWhite from "../components/ModoDarkWhite";
import Barra from "../components/Barra.jsx";
const Home = () => {
  return (
    <>
      <div
        className="container_da_home"
        id="container_main_home"
        onClick={() => ModoDarkWhite}
      >
        <section className="container_da_section_left_home">
          <div className="container_da_library">
            <h2 className="container_da_library_icon">
              {" "}
              <img className="iconeLivraria" src={iconeLivraria} alt="" />
              Your Library
            </h2>
            <i className="pi pi-plus"></i>
          </div>
          <div className="card_left_da_home">
            <Barra className="card_left">
              <div className="card">
                <h2>create your first playlist</h2>
                <p>its easy well help you</p> <button>create playlist</button>
              </div>
              <div className="card">
                {" "}
                <h2>create your first playlist</h2>
                <p>its easy well help you</p> <button>create playlist</button>
              </div>
            </Barra>
          </div>
          <div className="container_left_home_informations">
            <p className="infos_left">Legal</p>
            <p className="infos_left">Segurança e Centro de privacidade</p>
            <p className="infos_left">Politíca de privacidade</p>
            <p className="infos_left">Cookies</p>
            <p className="infos_left">Sobre anúncios</p>
            <p className="infos_left">Acessibilidade</p>
            <p id="infos_left" className="infos_left">
              <b>Cookies</b>
            </p>
            <div className="container_left_home_informations_linguagem">
              <i className="pi pi-globe"></i>
              <p>Porgugues do Brasil</p>
            </div>
          </div>
        </section>
        <section className="container_section_right_da_home">
          <div className="overlay">
            <Albums />
            <PopularArtists />
            <PopularRadio />
            <Footer />
          </div>
        </section>
      </div>
      <div className="ultimo">
        <div>
          <h2>Testar Premium de graça</h2>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default Home;
