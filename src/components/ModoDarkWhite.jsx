import { useEffect, useState } from "react";

import "primeicons/primeicons.css"; // Certifique-se de importar os ícones do PrimeIcons

export const ModoDark = () => {
  const [modoEscuro, setModoEscuro] = useState(false);
  const hora = new Date();

  useEffect(() => {
    const pi = document.getElementById("pis");
    const body = document.getElementById("body");
    const login = document.getElementById("login");
    const signup = document.getElementById("signup");
    pi.style.transition = "color 5s ease";
    body.style.transition = "background-color 2s ease";

    if (modoEscuro) {
      body.style.backgroundColor = "#050505"; // Cor de fundo para o modo escuro
      body.classList.add("dark-mode");
      pi.style.color = "#ffffff";
      signup.style.color = "#FFFFFF";
      signup.style.backgroundColor = "transparent";
    } else {
      body.style.backgroundColor = "#ffffff"; // Cor de fundo para o modo claro
      body.classList.remove("dark-mode");
      pi.style.color = "#050505";
      login.style.backgroundColor = "#050505";
      login.style.color = "#ffffff";
      signup.style.color = "#050505";
      signup.style.backgroundColor = "transparent";
    }
  }, [modoEscuro]);

  return (
    <div>
      <i
        id="pis"
        className={`pi ${modoEscuro ? "pi-sun" : "pi-moon"}`}
        style={{ fontSize: "1.6rem", cursor: "pointer" }}
        onClick={() => setModoEscuro(!modoEscuro)}
      ></i>
    </div>
  );
};

const ModoDarkWhite = () => {
  const [modo, setModo] = useState(false);

  useEffect(() => {
    // Função para alterar o fundo com base no horário
    const updateBackground = () => {
      const Hora = new Date();
      if (Hora.getHours() >= 5 && Hora.getHours() < 18) {
        document.body.style.backgroundColor = "#ffffff";
        const conteudo = document.getElementById("body");
        conteudo.style.backgroundColor = "#ffffff";
      } else {
        document.body.style.backgroundColor = "#000000";
      }
    };

    // Chama a função imediatamente
    updateBackground();

    const interval = setInterval(updateBackground, 60000);

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(interval);
  }, []); // O array vazio garante que o efeito seja configurado apenas uma vez

  return <div></div>;
};

export default ModoDarkWhite;
