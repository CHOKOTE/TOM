import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Logo from "./Logo";
import { Telegram, Twitter } from "./icon";
import { animate, motion } from "framer-motion";
import TwitterAndTelegramAnimed from "./TwitterAndTelegramAnimed";
import { mainText } from "../../public/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* {" "}
      <div className={`${styles.h1animation}`}>{mainText.king}</div> */}
      <header
        className={` 3xl:h-32 flex items-center mb-11 xl:h-24 justify-between shadow-md pl-24 pr-24  w-full  xl:p-16 `}
      >
        <button
          className=" hidden lg:flex flex-col items-center justify-center "
          onClick={handleClick}
        >
          <span
            className={` rounded-sm h-0.5 w-6 bg-white transition-all duration-300 ease-out ${
              isOpen ? " rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={` rounded-sm h-0.5 w-6 bg-white transition-all my-0.5 duration-300 ease-out${
              isOpen ? " opacity-0 " : "opacity-100"
            }`}
          ></span>
          <span
            className={` rounded-sm h-0.5 w-6 bg-white transition-all duration-300 ease-out${
              isOpen ? " -rotate-45 -translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
        </button>
        <nav className={`${styles.nav} lg:hidden`}>
          <Link href={"/"} className={`${styles.link} mr-10 2xl:mr-4`}>
            home
          </Link>
          <Link href={"#about"} className={`${styles.link}  mr-10 2xl:mr-4`}>
            about
          </Link>
          <Link
            href={"#tokenomic"}
            className={`${styles.link}  mr-10 2xl:mr-4`}
          >
            tokenemics
          </Link>
          <Link href={"#buy"} className={`${styles.link}  mr-10 2xl:mr-4`}>
            buy
          </Link>
        </nav>
        <div
          className={` absolute left-[50%]  translate-x-[-50%]  `}
        >
          <Logo />
        </div>
        <nav className="flex items-center justify-center gap-8 lg:hidden">
          <TwitterAndTelegramAnimed className={"bg-white"} />
        </nav>

        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            className={` bg-amber-500  py-12 px-8  flex items-center justify-between flex-col fixed top-1/2 left-1/2 rounded-lg backdrop-blur-md z-30 w-64 h-auto`}
          >
            <nav className={`${styles.nav} mb-10 flex flex-col  `}>
              <Link href={"/"} onClick={handleClick} className={`${styles.link} mb-6 `}>
                home
              </Link>
              <Link
                href={"#about"} onClick={handleClick}
                className={`${styles.link}  mb-6`}
              >
                about
              </Link>
              <Link
                href={"#tokenomic"} onClick={handleClick}
                className={`${styles.link}  mb-6`}
              >
                tokenemics
              </Link>
              <Link href={"#buy"} onClick={handleClick} className={`${styles.link}  `}>
                buy
              </Link>
            </nav>
            <nav  onClick={handleClick} className="flex items-center justify-center gap-8  ">
              <TwitterAndTelegramAnimed className={"bg-white"} />
            </nav>
          </motion.div>
        ) : null}
      </header>
    </>
  );
};

export default Navbar;
