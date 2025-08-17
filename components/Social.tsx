"use client";

import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { motion } from "framer-motion";

const Social = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <span>LinkedIn </span>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/nniravpatel/",
      style: "rounded-tr-md ",
      target: "_blank",
    },
    {
      id: 2,
      child: (
        <>
          <span>Github</span> <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/niravpatell23",
      target: "_blank",
    },
    {
      id: 3,
      child: (
        <>
          <span> Contact me</span> <HiOutlineMail size={30} />
        </>
      ),
      href: "#contact",
      target: "",
    },
    {
      id: 4,
      child: (
        <>
          <span> Download CV</span> <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/NiravPatel_cv.pdf",
      style: "rounded-br-md ",
      download: true,
      target: "",
    },
  ];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 500;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll < heightToHideFrom) {
      !isVisible && // to limit setting state only the first time
        setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <div>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          id="bar"
          className="hidden  lg:flex flex-col top-[35%] left-0 fixed  "
        >
          <ul>
            {links.map(({ id, child, href, style, download, target }) => (
              <li
                key={id}
                className={
                  " flex items-center w-48 h-14 px-4  text-md  ml-[-137px] hover:ml-[-10px] hover:rounded-xl duration-300 hover:bg-gradient-to-r dark:from-[#946263] dark:from-10% dark:via-[#946263] dark:via-60% dark:to-[#676394] dark:to-90% from-[#dbd7fb] from-10% via-[#dbd7fb] via-60% to-[#fbe2e3] to-90%" +
                  " " +
                  style
                }
              >
                <a
                  href={href}
                  className="flex items-center justify-end space-x-3 w-full dark:text-white text-black"
                  download={download}
                  target={target}
                  rel="noreferrer"
                >
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Social;
