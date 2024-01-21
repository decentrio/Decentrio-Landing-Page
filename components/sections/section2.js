import React from "react";
import style from "./section2.module.css";
import Image from "next/image";
import Light from "../../public/section2/light.svg";
import Rocket from "../../public/section2/rocket.svg";
import Trophy from "../../public/section2/trophy.svg";

const Section2 = () => {
  const Content = [
    {
      image: Light,
      title: "High experiences in the ecosystem",
      description:
        "As contributors, builders, and operators within the Cosmos ecosystem, we bring extensive experience in core stack logic, development, node operation flow, and more. Our engineers have contributed to major projects (Cosmos, Osmosis, Juno, etc.) and operated validators and relayers on multiple chains.",
    },
    {
      image: Rocket,
      title: "Fast respond time",
      description:
        "Regardless of your geographical location or time zone, our unwavering dedication to superior service is evident. Operating on dedicated rotating shifts 24/7, our team ensures that customers, no matter where they are, receive the fastest response times possible.",
    },
    {
      image: Trophy,
      title: "Dedicated for the community",
      description:
        "As dedicated members of the community, we find immense joy in offering support to fellow members and node operators, extending our assistance not only in emergencies and operational challenges but also in various other scenarios, fostering a culture of mutual aid and collaboration.",
    },
  ];
  return (
    <div className={style["section2-container"]}>
      <h1>Why Should You Chose Us?</h1>
      <div className={style["description"]}>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit..." "There is no one who loves pain itself,
        who seeks after it and wants to have it, simply because it is pain...
      </div>
      <div className={style["section2-items"]}>
        {Content.map((content) => {
          return (
            <div className={style["section2-details"]}>
              <Image src={content.image} />
              <div>{content.title}</div>
              <div>{content.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section2;
