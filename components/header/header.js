import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Image from "next/image";
import CNWeb from "../../public/decentrio.svg";
import Link from "next/link";
import styles from "./header.module.css"; 

const navButton = [
  {
    text: "ABOUT US",
    path: "#about",
  },
  {
    text: "PROJECTS",
    path: "#project",
  },
  {
    text: "STAKING",
    path: "#staking",
  },
  {
    text: "TEAM",
    path: "#team",
  },
  {
    text: "CONTACT",
    path: "#contact",
  },
];

const Header = ({ currentPath }) => {
    const scrollToView = (path) => {
        const element = document.querySelector(path);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };
    
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
                onClick={() => scrollToView(button.path)}
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
