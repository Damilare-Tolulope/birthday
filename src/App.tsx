import { useEffect, useState } from "react";
import "./App.css";
import { AttentionSeeker, Fade, Zoom } from "react-awesome-reveal";

import img1 from "./assets/images/img1.jpg";
import img2 from "./assets/images/img2.jpg";
import img3 from "./assets/images/img3.jpg";
import img4 from "./assets/images/img4.jpg";
import img5 from "./assets/images/img5.jpg";
import img6 from "./assets/images/img6.jpg";
import img7 from "./assets/images/img7.jpg";
import ballon from "./assets/images/ballon.png";
import ballon2 from "./assets/images/ballon2.png";
import ballon3 from "./assets/images/balloons.png";
import sound from "./assets/audio/Anne-Marie_-_Birthday.mp3";

const App = () => {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(1);

  const images = [img1, img2, img3, img4, img4, img5, img6, img7];

  useEffect(() => {
    const music = new Audio(sound);
    music.play();
    music.autoplay = true;
    music.loop = true;

    setTimeout(() => {
      setIndex(Math.floor(Math.random() * 6));
      setIndex1(Math.floor(Math.random() * 6));
    }, 3000);
  }, [index]);

  return (
    <>
      <img id="ballon" src={ballon} alt="ballon" />
      <img id="ballon3" src={ballon3} alt="ballon" />
      <img id="ballon2" src={ballon2} alt="ballon" />

      <div className="container">
        <Fade className="main" direction="up">
          <div>
            <div className="images">
              <Zoom delay={500}>
                <img id="avi" src={images[index]} alt="" />
              </Zoom>
              <Zoom delay={100}>
                <img
                  id="avi"
                  className="img-none"
                  src={images[index1]}
                  alt=""
                />
              </Zoom>
            </div>
            <div className="text">
              <Fade className="hb" delay={800} cascade damping={800}>
                <p>Happy birthday</p>
              </Fade>
              <Fade direction="up" delay={1000}>
                <AttentionSeeker delay={1200} effect="heartBeat">
                  <p className="name">Ore and Ore</p>
                </AttentionSeeker>
              </Fade>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default App;
