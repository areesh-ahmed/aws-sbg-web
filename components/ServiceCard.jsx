"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCw, X } from "lucide-react";
import { EC2Icon, S3Icon, LambdaIcon, RDSIcon, DynamoDBIcon, BedrockIcon } from "./AwsIcons";

const icons = {
  Server: EC2Icon,
  HardDrive: S3Icon,
  Zap: LambdaIcon,
  Database: RDSIcon,
  DatabaseZap: DynamoDBIcon,
  BrainCircuit: BedrockIcon,
};

// AWS-style category colors, drawn from the site palette
const categoryColors = {
  "Analytics": "#8B5CF6",
  "Application Integration": "#EC4899",
  "Artificial Intelligence": "#2DD4BF",
  "Business Applications": "#F87171",
  "Compute": "#FF9900",
  "Databases": "#4DA3FF",
  "Developer Tools": "#4DA3FF",
  "Game Tech": "#8B5CF6",
  "Management & Governance": "#EC4899",
  "Networking & Content Delivery": "#A78BFA",
  "Security & Identity": "#F87171",
  "Storage": "#22C55E",
};

export default function ServiceCard({ service }) {
  const { name, category, explanation, useCase, icon } = service;
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = icons[icon] || EC2Icon;
  const color = categoryColors[category] || "#8B5CF6";

  const toggle = () => setIsFlipped((f) => !f);
  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
      aria-label={`${name} — ${isFlipped ? "hide" : "show"} details`}
      onClick={toggle}
      onKeyDown={onKeyDown}
      className="h-[300px] w-full group cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-purple"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-surface border border-subtle group-hover:border-purple/40 transition-colors p-6 flex flex-col"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex items-start justify-between mb-auto">
            <div
              className="w-12 h-12 border flex items-center justify-center"
              style={{ color, background: `${color}14`, borderColor: `${color}33` }}
            >
              <Icon size={22} />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-secondary text-right max-w-[60%] leading-relaxed">
              {category}
            </span>
          </div>

          <h3 className="text-lg font-bold text-primary font-mono leading-snug mb-2 mt-6 group-hover:text-purple transition-colors">
            {name}
          </h3>
          <p className="text-secondary text-sm leading-relaxed line-clamp-2">{explanation}</p>

          <div className="mt-5 pt-4 border-t border-subtle flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-secondary">
            <span className="group-hover:text-purple transition-colors">View use case</span>
            <RotateCw size={13} className="group-hover:text-purple group-hover:rotate-90 transition-all duration-300" />
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-canvas border border-purple/40 p-6 flex flex-col"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="shrink-0 flex" style={{ color }}><Icon size={16} /></span>
              <h4 className="text-primary font-bold font-mono text-sm truncate">{name}</h4>
            </div>
            <X size={14} className="text-secondary group-hover:text-primary transition-colors shrink-0" />
          </div>

          <p className="text-secondary text-sm leading-normal flex-1 min-h-0 overflow-y-auto pr-1 custom-scrollbar">
            {explanation}
          </p>

          <div className="mt-4 pt-4 border-t border-subtle">
            <span className="flex items-center gap-2 text-[10px] font-mono text-purple mb-2 uppercase tracking-widest font-bold">
              <span className="w-1.5 h-1.5 bg-purple"></span> Use Case
            </span>
            <p className="text-primary text-sm leading-snug">{useCase}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
