import { useRef, useEffect } from "react";

const Barra = ({ className, children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let timeout;

    const handleMouseEnter = () => {
      container.classList.add("active");
      clearTimeout(timeout); // Cancela esconder se o mouse está dentro
    };

    const handleMouseLeave = () => {
      timeout = setTimeout(() => {
        container.classList.remove("active");
      }, 1000); // Esconde a barra após 1s
    };

    const handleScroll = () => {
      container.classList.add("active");
      clearTimeout(timeout); // Reinicia o esconder
      timeout = setTimeout(() => {
        container.classList.remove("active");
      }, 1000); // Esconde novamente após 1s sem rolar
    };

    // Adiciona os event listeners
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("scroll", handleScroll);

    // Remove os event listeners ao desmontar o componente
    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className={`scrollable-container ${className}`}>
      {children}
    </div>
  );
};

export default Barra;
