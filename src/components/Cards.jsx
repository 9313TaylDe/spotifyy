import { useState } from "react";
import "primeicons/primeicons.css";
import { Link } from "react-router-dom";
import "../Cards.css";

const Cards = ({ name, album, id, img, borderRadius }) => {
  const [play, setPlay] = useState(false);

  return (
    <div
      className="container_dos_cards"
      style={{ borderRadius: borderRadius }}
      onMouseEnter={() => setPlay(true)}
      onMouseLeave={() => setPlay(false)}
    >
      <Link to={`/details/${id}`}>
        <div className="container_das_img">
          <img
            className="img_dos_card"
            src={img}
            alt="descripttion card if no network connection"
          />
        </div>
      </Link>
      <div className="container_das_description">
        <p className="artist">{name}</p>
        <p className="album">{album}</p>
      </div>
      {play ? <button className={"pi pi-play"}></button> : <i></i>}
    </div>
  );
};

export default Cards;
