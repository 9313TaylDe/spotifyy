import Footer from "./Footer";
import iconeLivraria from "../assets/iconeLivraria.png";
import "primeflex/primeflex.css";
import Albums from "./Albums";
import PopularArtists from "./PopularArtists";
import PopularRadio from "./PopularRadio";
import "../Home.css";
import Barra from "../components/Barra.jsx";
import { useEffect, useState } from "react";

const Home = () => {
  const Ultimo = () => {
    const [showUltimo, setShowUltimo] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setShowUltimo(true);
      }, 0.1);
    }, []);

    return (
      <section className={`ultimo ${showUltimo ? "show" : ""}`}>
        <div className="container_ultimo">
          <h2>Testar Premium de graça</h2>
          <p>
            Increva-se ára curtir música ilimitada e podcasts só com alguns
            anúncios. Não precisa de cartão de crédito
          </p>
        </div>
        <button>Increva-se grátis</button>
      </section>
    );
  };
  return (
    <>
      <main className="container_da_home" id="container_main_home">
        <aside className="container_da_section_left_home">
          <nav className="container_da_library">
            <h1 className="container_da_library_icon">
              <img
                className="iconeLivraria"
                src={iconeLivraria}
                alt="Ícone da Livraria"
              />
              Your Library
            </h1>
            <button aria-label="Adicionar à biblioteca">
              <i className="pi pi-plus"></i>
            </button>
          </nav>

          <section className="card_left_da_home">
            <Barra className="card_left"></Barra>
            <article className="card">
              <h2>Crie sua primeira playlist</h2>
              <p>É fácil, nós ajudamos você.</p>
              <button>Criar playlist</button>
            </article>
            <article className="card">
              <h2>Crie sua primeira playlist</h2>
              <p>É fácil, nós ajudamos você.</p>
              <button>Criar playlist</button>
            </article>
          </section>

          <section className="container_left_home_informations">
            <p className="infos_left">Legal</p>
            <p className="infos_left">Segurança e Centro de Privacidade</p>
            <p className="infos_left">Política de Privacidade</p>
            <p className="infos_left">Cookies</p>
            <p className="infos_left">Sobre anúncios</p>
            <p className="infos_left">Acessibilidade</p>
            <p id="infos_left" className="infos_left">
              <strong>Cookies</strong>
            </p>
            <div className="container_left_home_informations_linguagem">
              <i className="pi pi-globe"></i>
              <p>Português do Brasil</p>
            </div>
          </section>
        </aside>

        <section className="container_section_right_da_home">
          <div className="overlay">
            <Albums />
            <PopularArtists />
            <PopularRadio />
            <Footer />
          </div>
        </section>
      </main>
      <Ultimo />
    </>
  );
};

export default Home;
