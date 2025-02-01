import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ListaCards } from "./ListaCards";
import { useMusicTimer } from "./ListaCards";
import ModoDarkWhite from "./ModoDarkWhite";

const CardsDetails = () => {
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [currentMusic, setCurrentMusic] = useState(null);
  const { currentTime, duration, formattedCurrentTime, formattedDuration } =
    useMusicTimer(audio);

  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const produtoEcnontrado = ListaCards.find(
      (produto) => produto.id === parseInt(id)
    );
    setProduto(produtoEcnontrado);
  }, [id]);

  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause();
        setAudio(null);
      }
    };
  }, [audio]);

  if (!produto) {
    return <h2>ID NÃO ENCONTRADO</h2>;
  }

  const handleAudioEnd = () => {
    setIsPlaying(false);
    setCurrentMusic(null);
  };

  const PlayMusic = async (musicPath) => {
    try {
      if (audio) {
        await audio.pause();
        audio.removeEventListener("ended", handleAudioEnd);
        setAudio(null);
        setIsPlaying(false);
      }

      const newAudio = new Audio(musicPath.music);
      newAudio.addEventListener("ended", handleAudioEnd);
      await newAudio.play();

      setAudio(newAudio);
      setCurrentMusic(musicPath.music);
      setIsPlaying(true);
    } catch (error) {
      console.error("Erro ao reproduzir música:", error);
    }
  };

  const PauseMusic = async () => {
    if (audio) {
      try {
        await audio.pause();
        setIsPlaying(false);
      } catch (error) {
        console.error("Erro ao pausar música:", error);
      }
    }
  };

  const ResumeMusic = async () => {
    if (audio) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Erro ao continuar música:", error);
      }
    }
  };

  const timeChange = (e) => {
    const newTime = parseFloat(e.target.value);
    if (audio) {
      audio.currentTime = newTime;
    }
  };

  return (
    <div className="container_details">
      <ModoDarkWhite />
      <Link to="/" className="pi pi-home"></Link>
      <div key={produto.id}>
        <h2>{produto.album}</h2>
        <img src={produto.img} alt={produto.album} />
        <p>{produto.name}</p>
        <p>{produto.genre}</p>
        <h3>Músicas:</h3>
        {produto.musica && produto.musica.length > 0 ? (
          <ul>
            {produto.musica.map((musicas) => (
              <li key={musicas.id}>
                {musicas.title}
                <button
                  onClick={() => {
                    if (currentMusic === musicas.music) {
                      if (isPlaying) {
                        PauseMusic();
                      } else {
                        ResumeMusic();
                      }
                    } else {
                      PlayMusic(musicas);
                    }
                  }}
                >
                  {currentMusic === musicas.music && isPlaying
                    ? "Pause"
                    : "Play"}
                </button>
                {currentMusic === musicas.music && (
                  <div>
                    <input
                      type="range"
                      min="0"
                      max={duration || 0}
                      value={currentTime}
                      onChange={timeChange}
                    />
                    <span>
                      {formattedCurrentTime} / {formattedDuration}
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>Sem músicas disponíveis.</p>
        )}
      </div>
    </div>
  );
};

export default CardsDetails;
