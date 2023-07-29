import React from "react";
import bannerVideo from "../assets/backgroundvideo.mp4";
import "../sass/Background.scss";

const Background = () => {
  return (
    <div className="background">
      <video className="background-video" autoPlay muted loop>
        <source src={bannerVideo} alt="background" className="bgimage" />
      </video>
    </div>
  );
};

export default Background;
