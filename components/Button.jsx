"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function Button({ 
  children, 
  href, 
  variant = "primary", 
  icon = false,
  className,
  onClick,
  disabled = false
}) {
  const baseStyles = "inline-flex items-center justify-center font-mono text-[13px] font-bold tracking-wide uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-purple text-squid-ink hover:bg-purple/90 shadow-[0_0_15px_rgba(255,153,0,0.15)] hover:shadow-[0_0_20px_rgba(255,153,0,0.3)]",
    secondary: "bg-elevated text-primary border border-subtle hover:border-purple/50 hover:bg-elevated/80",
    outline: "bg-transparent text-primary border border-subtle hover:border-purple hover:text-purple",
    ghost: "bg-transparent text-secondary hover:text-primary hover:bg-surface"
  };

  const sizes = {
    sm: "px-4 py-2",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-[14px]"
  };

  const Content = () => (
    <>
      {children}
      {icon && (
        <ArrowUpRight 
          size={16} 
          className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" 
        />
      )}
    </>
  );

  const combinedStyles = clsx(
    baseStyles,
    variants[variant],
    sizes.md, // default size, can be extracted to prop if needed
    "group relative overflow-hidden",
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        <motion.span whileHover={{ y: -1 }} className="flex items-center">
          <Content />
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button 
      whileHover={!disabled ? { y: -1 } : {}}
      whileTap={!disabled ? { y: 1 } : {}}
      className={combinedStyles} 
      onClick={onClick}
      disabled={disabled}
    >
      <Content />
    </motion.button>
  );
}
