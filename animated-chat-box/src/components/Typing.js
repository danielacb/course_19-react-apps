import React from "react";
import { motion } from "framer-motion";

export default function Typing({ even }) {
  return (
    <motion.div
      className={`typing ${even ? "is-left" : "is-right"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.6 }}
    >
      <div className="dots">
        <div />
        <div />
        <div />
      </div>
    </motion.div>
  );
}
