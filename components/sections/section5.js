import React from "react";
import style from "./section5.module.css";
import Image from "next/image";
import Man1 from '../../public/section5/Men1.svg'
import Github from "../../public/socialmedia/github.svg"
import X from "../../public/socialmedia/twitter.svg"
const Section5 = () => {
  const Content = [
    {
        name: "Name",
      image: Man1,
      position: "Posistion",
      twitter: {
        icon: X,
        link: ''
      },
      github: {
        icon: Github,
        link: ''
      }
    },
    {
        name: "Name",
      image: Man1,
      position: "Posistion",
      twitter: {
        icon: X,
        link: ''
      },
      github: {
        icon: Github,
        link: ''
      }
    },
    {
        name: "Name",
      image: Man1,
      position: "Posistion",
      twitter: {
        icon: X,
        link: ''
      },
      github: {
        icon: Github,
        link: ''
      }
    },
  ];
  return (
    <div className={style["section5-container"]}>
      <h1>Meet Our Team</h1>
      <div className={style["section5-items"]}>
        {Content.map((content) => {
          return (
            <div className={style["section5-details"]}>
              <Image src={content.image}>
              </Image>
              <div>{content.name}</div>
              <div>{content.position}</div>
              <div>
                <a href={content.twitter.link}>
                    <Image src={content.twitter.icon}/>
                </a>
                <a href={content.github.link}>
                <Image src={content.github.icon}/>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section5;
