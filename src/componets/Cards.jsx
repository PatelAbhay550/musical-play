import React, { useState } from "react";
import styles from "./Cards.module.css";
import { FaPlay, FaPause } from "react-icons/fa";
import transgenderAudio from "../Audios/transgender.mp3";
import BillieEilish from "../Audios/Billie-Eilish.mp3";
import Aleph from "../Audios/SpotifyMate.com - Aleph - Sped Up - fam0uz.mp3";
import Slimshady from "../Audios/slimshady.mp3";

const Cards = () => {
  const data = [
    {
      name: "Transgender",
      image:
        "https://c.saavncdn.com/465/TRANSGENDER-PEARL-WHITE-VIP--English-2017-20180918162748-500x500.jpg",
      audio: transgenderAudio,
      singer: "Crystal Castles",
    },
    {
      name: "Billie Eillish",
      image:
        "https://upload.wikimedia.org/wikipedia/en/3/3c/Armani_White_-_Billie_Eilish.png",
      audio: BillieEilish,
      singer: "Armani White",
    },

    {
      name: "Aleph - Speed up",
      image: "https://i.scdn.co/image/ab67706c0000da840b9c1492df72b3092d71da56",
      audio: Aleph,
      singer: "Unknown",
    },
    {
      name: "Slim Shady - Eminem",
      image:
        "https://upload.wikimedia.org/wikipedia/en/6/69/Eminem_-_The_Real_Slim_Shady_CD_cover.jpg",
      audio: Slimshady,
      singer: "Eminem",
    },
  ];

  const [playingIndex, setPlayingIndex] = useState(null);

  const handlePlayPause = (index) => {
    const audioElement = document.getElementById(`audio-${index}`);
    if (playingIndex === index) {
      audioElement.pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null) {
        const prevAudioElement = document.getElementById(
          `audio-${playingIndex}`
        );
        prevAudioElement.pause();
      }
      audioElement.play();
      setPlayingIndex(index);
    }
  };

  return (
    <div className={styles.main}>
      {data.map((item, index) => (
        <div className={styles.card} key={index}>
          <img src={item.image} alt={item.name} loading="lazy" />
          <h1>{item.name}</h1>
          <p>Singer: {item.singer}</p>
          {playingIndex === index ? (
            <FaPause
              className={styles.play}
              onClick={() => handlePlayPause(index)}
            />
          ) : (
            <FaPlay
              className={styles.play}
              onClick={() => handlePlayPause(index)}
            />
          )}

          <audio id={`audio-${index}`} controls>
            <source src={item.audio} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
    </div>
  );
};

export default Cards;
