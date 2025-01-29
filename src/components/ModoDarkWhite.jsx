import React, { useEffect, useState } from "react";

const ModoDarkWhite = () => {
  const [modo, setModo] = useState(false);

  useEffect(() => {
    // Função para alterar o fundo com base no horário
    const updateBackground = () => {
      const Hora = new Date();
      if (Hora.getHours() >= 5 && Hora.getHours() < 18) {
        document.body.style.backgroundColor = "#ffffff";
        const conteudo = document.getElementById("container_main_home");
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
