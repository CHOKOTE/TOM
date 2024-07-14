import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AnimationText from "./../components/animationText";
import { mainText } from "../../public/data";
import Link from "next/link";
import { motion } from "framer-motion";
import Tokenomics from "../components/tokenomics";


export default function Home() {
  return (
    <>
      <Head>
        <title>The King Of Memecoin</title>
        <meta name="description" content="The King Of Memecoin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/king_lion.png" />
      </Head>
      
      <main className={` w-full pl-24 pr-24 min-h-screen  mt-14 mb-28 sm:pl-6 sm:pr-6  sm:mb-2 lg:mt-24`}>
     
       <div className="  flex items-center justify-between   gap-10 md:flex-col">
          <motion.div
            className="w-1/2 h-96 lg:w-full lg:h-auto "
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src={"/images/pngegg.png"}
              className=""
              width={600}
              height={200}
            />
          </motion.div>
          <div className=" w-1/2 h-96 lg:w-full lg:h-auto">
            <AnimationText
              text={mainText.nameOfToken}
              className={
                " xl:!text-left xl:!text-5xl lg:!text-center lg:!text-4xl md:!text-2xl sm:!text-xl"
              }
            />
            <h3 className="mt-10">{mainText.slogan}</h3>
            <Link
              href={"#buy"}
              className=" 
              border-solid border-2 border-transparent  font-semibold text-lg bg-white inline-block mt-3 w-24 h-10 text-center pt-1 text-black 
               hover:bg-amber-500 hover:text-white rounded-md transition hover:tracking-wider duration-75 shadow-lg shadow-amber-400 hover:shadow-white
               "
            >
              {" Buy Me"}
            </Link>
          </div>
        </div>
        <div id="about" className={ ` flex items-center justify-center mt-64 md:mt-24`}>
            <h1 className={ ` ${styles.about} text-8xl inline-block font-bold md:text-6xl`}>about</h1>
         </div>
        <div
          
          className=" mt-12 flex items-center justify-center md:flex-col mb-64 sm:mb-8 gap-8 md:mt-24"
        >
          {/* about */}
          
          <motion.div
            className="w-1/3 h-96 md:w-full md:h-auto mb-14 "
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src={"/images/king_lion.png"}
              className="renverse"
              width={600}
              height={600}
            />
            <h3>{mainText.fatherToma}</h3>
          </motion.div>
          <motion.div
            className="w-1/3 md:w-full md:h-auto  mb-14  "
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <h3>{mainText.project}</h3>
            <h3>{mainText.whyTom}</h3>
          </motion.div>
          <motion.div
            className="w-1/3 h-96 md:w-full md:h-auto  mb-14 "
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src={"/images/kid_lion.png"}
              className="renverse"
              width={600}
              height={400}
            />
            <h3>{mainText.toma}</h3>
          </motion.div>
        </div>

         <Tokenomics/>

         <div id="buy" className={ ` flex items-center flex-col gap-16 justify-center md:mt-24 mt-64 sm:mt-8`}>
            <h1 className={ `${styles.tokenemic} text-8xl inline-block font-bold sm:text-6xl md:text-6xl`}>how to buy</h1>
            <div className="capitalize flex items-center justify-center p-4 py-6 
                          rounded-2xl   border border-solid
                          w-full relative   border-r-4 border-b-4 mt-10 first:mt-0
                          sm:flex-col 
                          "> <h1 className="text-xl sm:text-xs md:text-xs">contract : {mainText.contract}</h1></div>
         </div>
        
      </main>
    </>
  );
}
