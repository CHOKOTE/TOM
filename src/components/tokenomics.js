import React from "react";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { mainText } from "../../public/data.js";

const Skills = ({ name, x, y }) => {
  return (
    <motion.div
      initial={{ x: 0, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
      className="flex items-center 
      cursor-pointer justify-center rounded-full font-bold  py-3 px-6 bg-amber-500
      absolute sm:text-xs   lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3  
     xs:font-bol 
      "
    >
      {name}
    </motion.div>
  );
};

const Tokenomics = () => {
  return (
    <div
      id="tokenomic"
      className={`flex flex-col items-center justify-center relative`}
    >
      <h1
        className={` ${styles.tokenemic} text-8xl md:text-6xl inline-block font-bold `}
      >
        tokenemics
      </h1>

      <div className=" mt-10  hidden sm:flex items-center justify-center flex-col w-full">
        <div
          className="capitalize flex items-center justify-between p-4 py-6 
                          rounded-2xl   border border-solid
                          w-full relative   border-r-4 border-b-4 mt-10 first:mt-0
                          sm:flex-col text-xl sm:text-xs md:text-xs
                          "
        >
          {mainText.notaxes}
          
        </div>
        <div
          className="capitalize flex items-center justify-between p-4 py-6 
                          rounded-2xl   border border-solid
                          w-full relative   border-r-4 border-b-4 mt-10 first:mt-0
                          sm:flex-col text-xl sm:text-xs md:text-xs
                          "
        >
          {mainText.freeze}
          
        </div>
        <div
          className="capitalize flex items-center justify-between p-4 py-6 
                          rounded-2xl   border border-solid
                          w-full relative   border-r-4 border-b-4 mt-10 first:mt-0
                          sm:flex-col text-xl sm:text-xs md:text-xs
                          "
        >
          {mainText.mint}
          
        </div>
        <div
          className="capitalize flex items-center justify-between p-4 py-6 
                          rounded-2xl   border border-solid
                          w-full relative   border-r-4 border-b-4 mt-10 first:mt-0
                          sm:flex-col text-xl sm:text-xs md:text-xs
                          "
        >
          {mainText.lp}
          
        </div>
        <div
          className="capitalize flex items-center justify-between p-4 py-6 
                          rounded-2xl   border border-solid
                          w-full relative   border-r-4 border-b-4 mt-10 first:mt-0
                          sm:flex-col text-xl sm:text-xs md:text-xs
                          "
        >
          {mainText.presale}
          
        </div>
        <div
          className="capitalize flex items-center justify-between p-4 py-6 
                          rounded-2xl   border border-solid
                          w-full relative   border-r-4 border-b-4 mt-10 first:mt-0
                          sm:flex-col text-xl sm:text-xs md:text-xs
                          "
        >
          {mainText.supply}
          
        </div>
      </div>
      <div
        className="sm:hidden lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] relative h-screen flex items-center justify-center  w-full rounded-full 
        bg-circularLight lg:bg-circularLightLg sm:bg-circularLightSm  md:bg-circularDarkMd "
      >
        <motion.div
          className="  xs:p-2 xs:text-xs lg:p-6 md:p-4
           flex items-center cursor-pointer justify-center rounded-full 
          font-bold  p-8  
            bg-black  w-12 h-12 text-xl shadow-black  "
          whileHover={{ scale: 1.05 }}
        >
          TOM
        </motion.div>
        {/* <Skills name={mainText.contract} x={"-5vw"} y={"-8vw"} /> */}

        <div className="">
          <Skills name={mainText.notaxes} x={"-10vw"} y={"10vw"} />
          <Skills name={mainText.freeze} x={"-20vw"} y={"16vw"} />
          <Skills name={mainText.supply} x={"-15vw"} y={"-25vw"} />
          <Skills name={mainText.mint} x={"-30vw"} y={"-15vw"} />
          <Skills name={mainText.presale} x={"+5vw"} y={"20vw"} />
          <Skills name={mainText.lp} x={"15vw"} y={"5vw"} />
          <Skills name={mainText.supply} x={"5vw"} y={"-10vw"} />
          <Skills name={mainText.lp} x={"-35vw"} y={"-5vw"} />
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
