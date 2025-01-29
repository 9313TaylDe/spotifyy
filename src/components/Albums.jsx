import Cards from "./Cards";
import { ListaCards } from "./ListaCards";
import { useState } from "react";
import "../Cards.css";

const Albums = () => {
  const [qtd, setQtd] = useState(6);
  const QuantidadeIncialCards = () => {
    setQtd((prevIndex) => qtd + 2);
  };
  return (
    <div className="container_albums">
      <h2 className="popular_albums">Albums</h2>
      {ListaCards.slice(0, qtd).map((index) => (
        <Cards
          key={index}
          id={index.id}
          borderRadius="0"
          img={index.img}
          album={index.album}
          name={index.name}
        />
      ))}
    </div>
  );
};

export default Albums;
