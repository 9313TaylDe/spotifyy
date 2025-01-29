import music1 from "../musics/linkin-park_in-the-end.mp3";
import music2 from "../musics/linkin-park_numb.mp3";
import img from "../assets/Meteora2003.jpg";
import img2 from "../assets/MinutesToMidnight2007.jpg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Musicas = [];
export const ListaCards = [
  {
    id: 1,
    img: img,
    name: "Linkin Park",
    genre: "Nu-Metal",
    album: "Hybrid Theory",
    qtdMusics: [Musicas],
    musica: [
      {
        title: "In The End",
        music: music1,
        id: 1,
      },
      { title: "Numb", music: music2, id: 2 },
    ],
  },
  {
    id: 2,

    img: img2,
    name: "Linkin Park",
    genre: "Nu-Metal",
    album: "Meteora",
    qtdMusics: [Musicas],
    musica: [
      {
        title: "In The End",
        music: music2,
        id: 1,
      },
      { title: "Numb", music: music2, id: 2 },
    ],
    details: [
      "Linkin Park (1996) - The Dark Side of the Moon",
      "Linkin Park (2003) - Meteora",
      "Linkin Park (2007) - Minutes to Midnight",
      "Linkin Park (2015) - A Thousand Suns",
    ],
  },
  {
    id: 3,

    img: img,
    name: "Linkin Park",
    genre: "Nu-Metal",
    album: "Minutes to midnight",
    qtdMusics: [Musicas],
    musica: [
      {
        title: "In The End",
        music: "src\\musics\\linkin-park_in-the-end.mp3",
        id: 1,
      },
      { title: "Numb", music: "src\\musics\\linkin-park_numb.mp3.mp3", id: 2 },
    ],
    details: [
      "Linkin Park (1996) - The Dark Side of the Moon",
      "Linkin Park (2003) - Meteora",
      "Linkin Park (2007) - Minutes to Midnight",
      "Linkin Park (2015) - A Thousand Suns",
    ],
  },
  {
    id: 4,

    img: img,
    name: "Linkin Park",
    genre: "Nu-Metal",
    album: "Hybrid Theory",
    qtdMusics: [20],
    details: [
      "Linkin Park (1996) - The Dark Side of the Moon",
      "Linkin Park (2003) - Meteora",
      "Linkin Park (2007) - Minutes to Midnight",
      "Linkin Park (2015) - A Thousand Suns",
    ],
  },
  {
    id: 5,

    img: img2,
    name: "Linkin Park",
    genre: "Nu-Metal",
    album: "Meteora",
    qtdMusics: [24],
    details: [
      "Linkin Park (1996) - The Dark Side of the Moon",
      "Linkin Park (2003) - Meteora",
      "Linkin Park (2007) - Minutes to Midnight",
      "Linkin Park (2015) - A Thousand Suns",
    ],
  },
  {
    id: 6,

    img: img,
    name: "Linkin Park",
    genre: "Nu-Metal",
    album: "Minutes to midnight",
    qtdMusics: [17],
    details: [
      "Linkin Park (1996) - The Dark Side of the Moon",
      "Linkin Park (2003) - Meteora",
      "Linkin Park (2007) - Minutes to Midnight",
      "Linkin Park (2015) - A Thousand Suns",
    ],
  },
  {
    id: 7,
    img: img2,
    name: "Linkin Park",
    genre: "Nu-Metal",
    album: "Hybrid Theory",
    qtdMusics: [20],
    details: [
      "Linkin Park (1996) - The Dark Side of the Moon",
      "Linkin Park (2003) - Meteora",
      "Linkin Park (2007) - Minutes to Midnight",
      "Linkin Park (2015) - A Thousand Suns",
    ],
  },
  {
    id: 8,
    img: img2,
    name: "Linkin Park",
    genre: "Nu-Metal",
    album: "Meteora",
    qtdMusics: [24],
    details: [
      "Linkin Park (1996) - The Dark Side of the Moon",
      "Linkin Park (2003) - Meteora",
      "Linkin Park (2007) - Minutes to Midnight",
      "Linkin Park (2015) - A Thousand Suns",
    ],
  },
  {
    id: 9,
    img: img2,
    name: "Linkin Park",
    genre: "Nu-Metal",
    album: "Minutes to midnight",
    qtdMusics: [17],
    details: [
      "Linkin Park (1996) - The Dark Side of the Moon",
      "Linkin Park (2003) - Meteora",
      "Linkin Park (2007) - Minutes to Midnight",
      "Linkin Park (2015) - A Thousand Suns",
    ],
  },
  {
    id: 10,
    img: img2,
    name: "Linkin Park",
    genre: "Nu-Metal",
    album: "Hybrid Theory",
    qtdMusics: [20],
    details: [
      "Linkin Park (1996) - The Dark Side of the Moon",
      "Linkin Park (2003) - Meteora",
      "Linkin Park (2007) - Minutes to Midnight",
      "Linkin Park (2015) - A Thousand Suns",
    ],
  },
  {
    id: 11,
    img: img2,
    name: "Linkin Park",
    genre: "Nu-Metal",
    album: "Hybrid Theory",
    qtdMusics: [20],
    details: [
      "Linkin Park (1996) - The Dark Side of the Moon",
      "Linkin Park (2003) - Meteora",
      "Linkin Park (2007) - Minutes to Midnight",
      "Linkin Park (2015) - A Thousand Suns",
    ],
  },
  {
    id: 12,
    img: img,
    name: "Linkin Park",
    genre: "Nu-Metal",
    album: "Hybrid Theory",
    qtdMusics: [20],
    details: [
      "Linkin Park (1996) - The Dark Side of the Moon",
      "Linkin Park (2003) - Meteora",
      "Linkin Park (2007) - Minutes to Midnight",
      "Linkin Park (2015) - A Thousand Suns",
    ],
  },
];

export const useMusicTimer = (audio) => {
  const [currentTime, setCurrentTime] = useState(0); // Tempo atual da música
  const [duration, setDuration] = useState(0); // Duração total da música

  useEffect(() => {
    if (audio) {
      // Atualiza os tempos conforme o áudio é reproduzido
      const updateTime = () => {
        setCurrentTime(audio.currentTime);
        setDuration(audio.duration || 0);
      };

      // Adiciona os eventos necessários
      audio.addEventListener("timeupdate", updateTime);
      audio.addEventListener("loadedmetadata", updateTime);

      // Remove os eventos ao desmontar
      return () => {
        audio.removeEventListener("timeupdate", updateTime);
        audio.removeEventListener("loadedmetadata", updateTime);
      };
    }
  }, [audio]);

  // Formata o tempo para exibição (mm:ss)
  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return {
    currentTime,
    duration,
    formattedCurrentTime: formatTime(currentTime),
    formattedDuration: formatTime(duration),
  };
};
