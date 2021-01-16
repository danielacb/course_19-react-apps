import React from "react";
import { motion } from "framer-motion";

export default function Message({ message }) {
  return (
    <motion.div
      className="message"
      initial={{ scale: 0.2 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="avatar">
        <span role="img" aria-label="First Person">
          👩🏻‍💻
        </span>
      </div>
      <div className="text">{message.text}</div>
      <div className="avatar">
        <span role="img" aria-label="Second Person">
          👨🏿‍💻
        </span>
      </div>
    </motion.div>
  );
}
