import React from 'react'
import { motion } from "framer-motion";
import {Telegram,Twitter} from './icon'
const TwitterAndTelegramAnimed = ({className}) => {
  return (
   <>
      <motion.a
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          href={"/"}
          className={`${className} block w-12 h-12  rounded-full `}
          target="_blank"
        >
          <Twitter className={"w-12 h-12  rounded-full"} />
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          href={"https://t.me/+NqS4XTJ9UoVkOWFk"}
          className={`${className} block w-12 h-12  rounded-full lg:bg-blue-300 hover:lg:bg-blue-200`}
          target="_blank"
        >
          <Telegram className={''} />
        </motion.a>
   </>
  )
}

export default TwitterAndTelegramAnimed;