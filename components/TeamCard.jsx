"use client";
import { motion } from "framer-motion";
import { Globe, Link as LinkIcon } from "lucide-react";
import Badge from "./Badge";

export default function TeamCard({ member }) {
  const { name, role, bio, skills, socials } = member;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-surface border border-subtle hover:border-purple/30 p-6 flex flex-col h-full group transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
        {socials?.linkedin && (
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-purple transition-colors">
            <LinkIcon size={18} />
          </a>
        )}
        {socials?.github && (
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-purple transition-colors">
            <Globe size={18} />
          </a>
        )}
      </div>

      <div className="mb-6 w-20 h-20 bg-elevated rounded-full border border-subtle relative overflow-hidden group-hover:border-purple/50 transition-colors">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center text-subtle/50 group-hover:scale-105 transition-transform duration-500">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
      </div>

      <h3 className="text-xl font-bold text-primary mb-1 font-mono">{name}</h3>
      <p className="text-purple text-sm font-mono tracking-wide uppercase mb-4">{role}</p>

      <p className="text-secondary text-sm mb-6 flex-grow">
        {bio}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-subtle">
        {skills.map(skill => (
          <Badge key={skill} variant="subtle">{skill}</Badge>
        ))}
      </div>
    </motion.div>
  );
}
