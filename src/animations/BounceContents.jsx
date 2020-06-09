import React from "react";
import { motion } from "framer-motion";

const BounceContents = ({ children, ...props }) => {
  return (
    <motion.div
      animate={{ y: 0, transition: { delay: 1, type: "spring" } }}
      initial={{ y: -30 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default BounceContents;
