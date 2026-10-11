"use client";
import { motion } from "framer-motion";
import Badge from "./Badge";

export default function TeamCard({ member }) {
  const { name, role, bio, skills, image } = member;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-surface border border-subtle hover:border-purple/40 p-6 flex flex-col items-center text-center h-full w-full group transition-all duration-300 relative overflow-hidden"
    >
      <div className="mb-6 w-24 h-24 bg-elevated rounded-full border-2 border-subtle relative overflow-hidden group-hover:border-purple/60 transition-colors shadow-md flex-shrink-0 mx-auto">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
            <div className="absolute inset-0 flex items-center justify-center text-subtle/50 group-hover:scale-105 transition-transform duration-500">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </>
        )}
      </div>

      <h3 className="text-xl font-bold text-primary mb-1 font-mono tracking-tight text-center">{name}</h3>
      <p className="text-purple text-xs font-mono tracking-wider uppercase font-semibold mb-3 text-center">{role}</p>

      <p className="text-secondary text-sm mb-6 flex-grow leading-relaxed text-center">
        {bio}
      </p>

      <div className="flex flex-wrap justify-center gap-2 mt-auto pt-4 border-t border-subtle w-full">
        {skills?.map((skill) => (
          <Badge key={skill} variant="subtle">{skill}</Badge>
        ))}
      </div>
    </motion.div>
  );
}
