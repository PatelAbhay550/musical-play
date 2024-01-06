import React from "react";
import MusicalPlayLogo from "./Musicalplaylogo.svg";
import styles from "./Home.module.css";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Cards from "./Cards";

const Home = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.topleft}>
            <div className={styles.logo}>
              <img src={MusicalPlayLogo} alt="" />
            </div>
            <div className={styles.opt}>
              <div className={styles.home}>
                <IoMdHome className={styles.icon} />
                <Link to="/">Home</Link>
              </div>
              <div className={styles.search}>
                <FaSearch className={styles.icon} />
                <Link to="/search">Search</Link>
              </div>
            </div>
          </div>
          <div className={styles.bottomleft}>
            <iframe
              width="360"
              height="315"
              src="https://www.youtube.com/embed/ylMoGqhw2eM?si=setuDb5IoriFNMfL"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.topright}>
            <div className={styles.lefttop}>
              <FaChevronLeft className={styles.arrow} />
              <FaChevronRight className={styles.arrow} />
            </div>
            <div className={styles.righttop}>
              <Link to="/Auth">
                <button className={styles.signup}>Sign up</button>
              </Link>
              <Link to="/Auth">
                <button className={styles.login}> log in</button>
              </Link>
            </div>
          </div>
          <div className={styles.bottomright}>
            <div className={styles.headspo}>
              <h2>Musical 'Play'lists</h2>
              <p>Show all</p>
            </div>
            <div className={styles.cardmu}>
              <Cards className={styles.card} />
            </div>
            <div className={styles.bottomtxt}>
              <p>
                At Musical Play, we believe that music is a universal language
                that speaks to the soul. Dive into an expansive ocean of tunes,
                where genres collide, and melodies create a symphony of
                emotions. Whether you're a pop enthusiast, a rock connoisseur,
                or an electronic dance music lover, we've got something for
                everyone.
              </p>
              <h2>©️Musical Play 2024</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
