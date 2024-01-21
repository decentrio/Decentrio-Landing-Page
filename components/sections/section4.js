import React from "react";
import style from "./section4.module.css";
import Image from "next/image";
import Chain1 from '../../public/section4/chain1.svg'
import Chain2 from '../../public/section4/chain2.svg'
import Chain3 from '../../public/section4/chain3.svg'
import Chain4 from '../../public/section4/chain4.svg'
import Chain5 from '../../public/section4/chain5.svg'
import Chain6 from '../../public/section4/chain6.svg'
const Section4 = () => {
  const Content = [
    {
      image: Chain1,
    },
    {
      image: Chain2,
    },
    {
      image: Chain3,
    },
    {
      image: Chain4,
    },
    {
      image: Chain5,
    },
    {
      image: Chain6,
    },
  ];
  return (
    <div className={style["section4-container"]}>
      <h1>Stake With Us</h1>
      <div className={style["description"]}>
        We partner with chains across the ecosystem and work together to
        succeed.
      </div>
      <div className={style["section4-items"]}>
        {Content.map((content) => {
          return (
            <div className={style["section4-details"]}>
              <Image src={content.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section4;
