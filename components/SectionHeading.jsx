"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function SectionHeading({ 
  title, 
  subtitle, 
  eyebrow, 
  centered = false,
  className 
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={clsx(
        "mb-12 md:mb-16",
        centered ? "text-center mx-auto" : "",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block font-mono text-[13px] text-purple tracking-widest uppercase mb-4 font-bold">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold tracking-tight text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={clsx(
          "text-secondary text-base md:text-lg max-w-2xl",
          centered ? "mx-auto" : ""
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
