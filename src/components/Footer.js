import React from "react";
import { Telegram, Twitter } from "./icon";
import Logo from "./Logo";
import Image from "next/image";
import TwitterAndTelegramAnimed from "./TwitterAndTelegramAnimed";
import { motion } from "framer-motion";
import { mainText } from "../../public/data";

const Footer = () => {
  return (
    <footer className="mt-8 border-t-2 shadow-sm  pl-24 pr-24 pt-4 pb-4 sm:p-6 ">
      <div>
        <div className="flex items-center justify-center gap-5 mb-10 mt-10">
          {/* <Twitter className={'w-16 h-16'}/>
           <Telegram className={'w-16 h-16'}/> */}
          <TwitterAndTelegramAnimed className={"hover:bg-slate-50"} />
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src={"/images/pngegg.png"}
              className="renverse"
              width={48}
              height={48}
            />
          </motion.div>
          <Logo />
        </div>
        <div className="flex flex-col items-center justify-center">
            <h3 className="inline-block w-1/2 mb-4 text-center md:w-full md:h-auto md:text-left">{mainText.pepeKiller}</h3>
            <h3 className="inline-block w-1/2 text-center mb-4 md:w-full md:h-auto md:text-left">{mainText.pepeslogn}</h3>
            
        </div>
      </div>
      <div className="flex items-center justify-center shadow-lg shadow-white ">
        <span>{new Date().getFullYear()}&copy; ALL rights reseved</span>
      </div>
    </footer>
  );
};

export default Footer;
