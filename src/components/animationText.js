import React, { useTransition } from "react";
import { motion } from "framer-motion";

const AnimationText = ({ className = "", text, ...props }) => {
  const quot = {
    initial: {
      opacity: 1,
    },
    animation: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const singleword = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animation: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    
      <div className="w-full sm:py-0    py-2 mx-auto text-8xl  overflow-hidden">
        <motion.h2
          className={`${className}  inline-block text-bold w-full  capitalize`}
          variants={quot}
          initial="initial"
          animate="animation"
        >
          {/* <span className='inline-block'>
       My name is <span className='text-amber-200'>TOM</span> I am the king of tokens
       </span> */}
          {text.split(" ").map((word, index) => (
            <motion.span
              key={word + "-" + index}
              className="inline-block text-8xl 2xl:text-8xl xl:!text-left xl:!text-6xl lg:!text-center lg:!text-4xl md:!text-2xl  "
              variants={singleword}
            >
              {word === "TOM" ? (
                <span className="text-amber-200">TOM</span>
              ) : (
                word
              )}
              &nbsp;
            </motion.span>
          ))}
        </motion.h2>
      </div>
    
  );
};

export default AnimationText;
