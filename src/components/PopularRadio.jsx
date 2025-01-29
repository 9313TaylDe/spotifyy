import { useState } from "react";
import Cards from "./Cards";
import { ListaCards } from "./ListaCards";
import LinksTitulo from "./LinksTitulo";
import "../Cards.css";
const PopularRadio = () => {
  const [verMais, setVerMais] = useState(6);

  const VerMais = () => {
    setVerMais((prevIndex) => prevIndex + 0);
  };
  return (
    <div className="container_radio">
      <LinksTitulo text="segure" width="100%" />;
      {ListaCards.slice(0, verMais).map((index) => {
        return (
          <Cards
            key={index}
            id={index.id}
            img={index.img}
            album={index.album}
            name={index.name}
            borderRadius="10px"
            music={index.musica}
          />
        );
      })}
    </div>
  );
};

export default PopularRadio;
