"use client";
import { motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Badge from "./Badge";

export default function BlogCard({ blog, featured = false }) {
  const { title, description, category, author, date, readTime, isFeatured } = blog;

  if (featured) {
    return (
      <motion.div 
        whileHover={{ y: -4 }}
        className="bg-surface border border-subtle hover:border-subtle flex flex-col md:flex-row h-full group transition-all duration-300 relative overflow-hidden"
      >
        <div className="md:w-1/2 bg-elevated relative overflow-hidden min-h-[240px] md:min-h-full">
          <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
          {/* Mock abstract geometric visual for featured blog */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-32 h-32 border border-purple/30 rounded-full flex items-center justify-center">
               <div className="w-24 h-24 border border-blue/30 rounded-full flex items-center justify-center">
                 <div className="w-16 h-16 bg-purple/20 rounded-full"></div>
               </div>
             </div>
          </div>
        </div>
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="purple">Featured</Badge>
            <Badge variant="subtle">{category}</Badge>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-mono group-hover:text-purple transition-colors">
            <Link href="#" className="before:absolute before:inset-0">
              {title}
            </Link>
          </h3>
          <p className="text-secondary text-base mb-8">
            {description}
          </p>
          <div className="flex items-center gap-4 text-xs font-mono text-secondary mt-auto">
            <span>{author}</span>
            <span className="w-1 h-1 bg-subtle rounded-full"></span>
            <span>{date}</span>
            <span className="w-1 h-1 bg-subtle rounded-full"></span>
            <span className="flex items-center gap-1"><Clock size={12} /> {readTime}</span>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-surface border border-subtle hover:border-subtle p-6 flex flex-col h-full group transition-all duration-300 relative"
    >
      <div className="mb-6 h-40 bg-elevated relative overflow-hidden border border-subtle">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center text-subtle/50 group-hover:scale-105 transition-transform duration-500">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
             <rect x="3" y="3" width="18" height="18" rx="2" />
          </svg>
        </div>
      </div>
      
      <div className="mb-4">
        <Badge variant="subtle">{category}</Badge>
      </div>

      <h3 className="text-lg font-bold text-primary mb-3 font-mono group-hover:text-purple transition-colors">
        <Link href="#" className="before:absolute before:inset-0">
          {title}
        </Link>
      </h3>
      
      <p className="text-secondary text-sm mb-6 flex-grow line-clamp-3">
        {description}
      </p>

      <div className="mt-auto pt-4 border-t border-subtle flex items-center justify-between">
        <div className="flex flex-col gap-1 text-xs font-mono text-secondary">
          <span>{author}</span>
          <span className="flex items-center gap-1">{date} · {readTime}</span>
        </div>
        <ArrowUpRight size={16} className="text-purple opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
}
