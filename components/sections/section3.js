import React from "react";
import style from "./section3.module.css";
import Image from "next/image";
import Relayer from "../../public/section3/relayer.svg";
import Validation from "../../public/section3/validation.svg";
import Solution from "../../public/section3/solution.svg";
import Alert from "../../public/section3/alert.svg";
import Node from "../../public/section3/node.svg";

const Section3 = () => {
  const Content = [
    {
      image: Solution,
      title: "Software Solution",
      description:
        "We provide software works to help your business solve difficult problems. Which includes design and develop features, maintainace works and keeping up to date with the dependencies for source code and code auditing.",
    },
    {
      image: Node,
      title: "Node Provider",
      description:
        "We provide public and private node infrastructure services.",
    },
    {
      image: Relayer,
      title: "Relayer",
      description:
        "IBC is a core feature of the whole Cosmos ecosystem and the relayer are the heart of it. We provide excellent relayer services with fast respond time and 24/7 monitor.",
    },
    {
      image: Validation,
      title: "Validation",
      description:
        "As a validator, we provide a low miss block rate validator and are fast to respond for all emergencies and non-emergencies upgrades. And as a part of the community, we offer support to other members and validors.",
    },
    {
      image: Alert,
      title: "Emergency Response",
      description:
        "We have our team members on a rotate shifts to stay online 24/7 to ensure fast respond time when there is a critical incidents.",
    },
  ];
  return (
    <div id="project" className={style["section3-container"]}>
      <h1>How Decentrio Empowers Your Business?</h1>
      <div className={style["description"]}>
        Whether you need infrastructure support, blockchain engineering, or
        consulting - Decentrio is what you need.
      </div>
      <div className={style["section3-items"]}>
        {Content.map((content) => {
          return (
            <div className={style["section3-details"]}>
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

export default Section3;
