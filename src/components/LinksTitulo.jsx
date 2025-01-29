import { Link } from "react-router-dom";

const LinksTitulo = ({ color, width, height, text, textlink }) => {
  return (
    <section
      className="container_titu_link"
      style={{ color: color, width: width, height: height }}
    >
      <h2>{text}</h2>
      <Link>{textlink}</Link>
    </section>
  );
};

export default LinksTitulo;
