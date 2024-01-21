import React from "react";
import style from "./section1.module.css";
import CNWeb from "../../public/section1.svg"
import Image from "next/image";
import X from "../../public/socialmedia/twitter.svg"
import Tele from "../../public/socialmedia/tele.svg"
import Github from "../../public/socialmedia/github.svg"
import Discord from "../../public/socialmedia/discord.svg"

const Section1 = () => {
  return (
    <div className={style["section1-container"]}>
      <div className={style["section1-left"]}>
        <h1>Validation, Relaying &</h1>
        <h1>Open Source Software</h1>
        <h1>Engineering</h1>
        <div
          style={{
            height: "5px",
            backgroundColor: "black",
            margin: "20px 0px",
          }}
        ></div>
        <div>
          Decentrio provide software solutions and infrastructure services, as
          well as an active contributor for the <b>Cosmos blockchain ecosystem</b>.
        </div>
        <button>
            <a>CONTACT US</a>
        </button>
        <div style={{display: "flex", alignItems: 'center', gap: '15px'}}>
            <div>FOLLOW: </div>
            <a href=""><Image src={X} /></a>
            <a href=""><Image src={Discord} /></a>
            <a href=""><Image src={Github} /></a>
            <a href=""><Image src={Tele} /></a>

        </div>
      </div>
      <div className={style["image-container"]}>
        <Image src={CNWeb} alt="Logo" />
      </div>
    </div>
  );
};

export default Section1;
