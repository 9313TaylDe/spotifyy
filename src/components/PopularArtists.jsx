import { useState } from "react";
import Cards from "./Cards";
import { ListaCards } from "./ListaCards";
import LinksTitulo from "./LinksTitulo";
import "../Cards.css";

const PopularArtists = () => {
  const [verMais, setVerMais] = useState(6);
  const [play, setPlay] = useState(false);
  return (
    <div className="container_popular_artists">
      <LinksTitulo text="segure" width="100%" />
      {ListaCards.slice(0, verMais).map((index) => {
        return (
          <>
            <Cards
              id={index.id}
              img={index.img}
              album={index.album}
              name={index.name}
              borderRadius="10px"
            />
          </>
        );
      })}
    </div>
  );
};

export default PopularArtists;
