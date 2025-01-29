import { ListaCards } from "./ListaCards";
import Cards from "./Cards";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "../Cards.css";
const CardsContainer = () => {
  const [verMais, setVerMais] = useState(6);

  const VerMais = () => {
    setVerMais((prevIndex) => prevIndex + 3);
  };

  return (
    <>
      <div className="container_products_cards" id="container_products">
        {ListaCards.slice(0, verMais).map((index) => (
          <Cards
            key={index.id}
            img={index.img}
            artist={index.artista}
            name={index.name}
            album={index.album}
          />
        ))}
      </div>
    </>
  );
};

export default CardsContainer;
