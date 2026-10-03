"use client";
import { motion } from "framer-motion";
import { BookOpen, Code, Terminal, FileText, Briefcase, Users, ArrowUpRight, Download } from "lucide-react";
import Badge from "./Badge";

export default function ResourceCard({ resource }) {
  const { title, description, category, difficulty, time, size, downloadUrl } = resource;

  const getIcon = () => {
    switch (category) {
      case "Certification Prep": return <FileText size={20} className="text-purple" />;
      case "AWS Learning": return <BookOpen size={20} className="text-purple" />;
      case "Tutorials": return <Code size={20} className="text-blue" />;
      case "Developer": return <Terminal size={20} className="text-purple" />;
      case "Project Guides": return <FileText size={20} className="text-green" />;
      case "Career": return <Briefcase size={20} className="text-pink" />;
      case "Community": return <Users size={20} className="text-purple" />;
      default: return <BookOpen size={20} className="text-purple" />;
    }
  };

  const getDifficultyColor = () => {
    switch (difficulty) {
      case "Foundational": return "green";
      case "Beginner": return "green";
      case "Intermediate": return "purple";
      case "Advanced": return "purple";
      default: return "subtle";
    }
  };

  const linkTarget = downloadUrl || "#";

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-surface border border-subtle hover:border-purple/40 p-6 flex flex-col h-full group transition-all duration-300 relative rounded-sm"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="p-2.5 bg-canvas border border-subtle rounded-md shrink-0 group-hover:border-purple/30 transition-colors">
          {getIcon()}
        </div>
        <div className="flex-grow pr-8">
          <h3 className="text-lg font-bold text-primary font-mono leading-tight group-hover:text-purple transition-colors">
            <a 
              href={linkTarget} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="before:absolute before:inset-0"
              download={Boolean(downloadUrl)}
            >
              {title}
            </a>
          </h3>
        </div>
      </div>
      
      <p className="text-secondary text-sm mb-6 flex-grow leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap items-center gap-2 mt-auto pt-4 border-t border-subtle">
        <Badge variant="subtle">{category}</Badge>
        <Badge variant={getDifficultyColor()}>{difficulty}</Badge>
        <Badge variant="subtle">{time}</Badge>
        {size && <Badge variant="subtle">{size}</Badge>}
      </div>
      
      <div className="absolute top-6 right-6 text-secondary group-hover:text-purple group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
        {downloadUrl ? <Download size={18} /> : <ArrowUpRight size={18} />}
      </div>
    </motion.div>
  );
}
