import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Image from "next/image";
import CNWeb from "../../public/decentrio.svg";
import Link from "next/link";
import styles from "./header.module.css"; 

const navButton = [
  {
    text: "ABOUT US",
    path: "#how-it-works",
  },
  {
    text: "PROẸCTS",
    path: "#project",
  },
  {
    text: "STAKING",
    path: "#github",
  },
  {
    text: "TEAM",
    path: "#github",
  },
  {
    text: "CONTACT",
    path: "#github",
  },
];

const Header = ({ currentPath }) => {
    return (
      <Navbar expand="md">
        <div className={styles["header-container"]}>
          <div className={styles.flex}>
            <Image src={CNWeb} alt="Logo" width={50} height={50} />
            <NavbarBrand style= {{fontWeight: '800'}} href="/" className="">
              DECENTRIO
            </NavbarBrand>
          </div>
          <div className={styles.sections}>
            {navButton.map((button, index) => (
              <Link
                key={index}
                href={button.path}
                style={{
                  color: currentPath === button.text && "#262626",
                  marginRight: '20px',
                //   textDecoration: 'none'
                }}
              >
                {button.text}
              </Link>
            ))}
          </div>
        </div>
      </Navbar>
    );
  };

export default Header;
