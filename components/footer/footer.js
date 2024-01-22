import style from "./footer.module.css";
import Image from "next/image";
import X from "../../public/socialmedia/twitter.svg";
import Tele from "../../public/socialmedia/tele.svg";
import Github from "../../public/socialmedia/github.svg";
import Discord from "../../public/socialmedia/discord.svg";

const Footer = () => {
  return (
    <>
      <div
        style={{
          height: "2px",
          backgroundColor: "black",
          margin: "200px 0px 20px 0px",
        }}
      ></div>
      <div className={style["footer-container"]}>
        <div>Decentrio</div>
        <div>
          <a href="">
            <Image src={X} />
          </a>
          <a href="">
            <Image src={Discord} />
          </a>
          <a href="">
            <Image src={Github} />
          </a>
          <a href="">
            <Image src={Tele} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
