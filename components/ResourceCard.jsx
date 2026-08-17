"use client";
import { motion } from "framer-motion";
import { BookOpen, Code, Terminal, FileText, Briefcase, Users, ArrowUpRight } from "lucide-react";
import Badge from "./Badge";
import Link from "next/link";

export default function ResourceCard({ resource }) {
  const { title, description, category, difficulty, time } = resource;

  const getIcon = () => {
    switch (category) {
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
      case "Beginner": return "green";
      case "Intermediate": return "purple";
      case "Advanced": return "purple";
      default: return "subtle";
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-surface border border-subtle hover:border-subtle p-6 flex flex-col h-full group transition-all duration-300"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="p-2.5 bg-canvas border border-subtle rounded-md shrink-0">
          {getIcon()}
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-primary font-mono leading-tight group-hover:text-purple transition-colors">
            <Link href="#" className="before:absolute before:inset-0">
              {title}
            </Link>
          </h3>
        </div>
      </div>
      
      <p className="text-secondary text-sm mb-6 flex-grow">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-subtle">
        <Badge variant="subtle">{category}</Badge>
        <Badge variant={getDifficultyColor()}>{difficulty}</Badge>
        <Badge variant="subtle">{time}</Badge>
      </div>
      
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowUpRight size={18} className="text-purple" />
      </div>
    </motion.div>
  );
}
