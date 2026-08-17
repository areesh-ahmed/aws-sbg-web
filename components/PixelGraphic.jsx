"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function PixelGraphic({ type, color = "purple", className }) {
  const colors = {
    purple: "#A855F7",
    orange: "#FF9900",
    blue: "#4DA3FF",
    green: "#22C55E",
    pink: "#EC4899",
  };

  const hex = colors[color] || colors.purple;

  // The correct 3-tooth square logo provided by the user
  const renderGraphic = () => {
    return (
      <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="2" y="2" width="7" height="7" fill="#1B212D" />
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M 1 1 H 10 V 10 H 1 Z M 2 2 V 9 H 9 V 2 Z M 3 0 H 4 V 1 H 3 Z M 5 0 H 6 V 1 H 5 Z M 7 0 H 8 V 1 H 7 Z M 3 10 H 4 V 11 H 3 Z M 5 10 H 6 V 11 H 5 Z M 7 10 H 8 V 11 H 7 Z M 0 3 H 1 V 4 H 0 Z M 0 5 H 1 V 6 H 0 Z M 0 7 H 1 V 8 H 0 Z M 10 3 H 11 V 4 H 10 Z M 10 5 H 11 V 6 H 10 Z M 10 7 H 11 V 8 H 10 Z" 
          fill={hex} 
        />
      </svg>
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={clsx("relative inline-block", className)}
    >
      {renderGraphic()}
    </motion.div>
  );
}
