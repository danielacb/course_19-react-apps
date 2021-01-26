import React from "react";
import { motion } from "framer-motion";

export default function Animatior({ children }) {
  return (
    <motion.div
      style={{ position: "absolute" }}
      initial={{ x: 200, opacity: 0, scale: 0.6 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      exit={{ x: -200, opacity: 0, scale: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
