import React from "react";
import { motion } from "framer-motion";

const PageTransition = ({ children, variants }) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
