"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Sparkles, Layers, CheckCircle2 } from "lucide-react";
import { EC2Icon, S3Icon, LambdaIcon, RDSIcon, DynamoDBIcon, BedrockIcon } from "./AwsIcons";
import Badge from "./Badge";

export default function ServiceCard({ service }) {
  const { name, category, explanation, useCase, icon } = service;
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const getIcon = (size = 32) => {
    switch (icon) {
      case "Server": return <EC2Icon size={size} className="text-orange" />;
      case "HardDrive": return <S3Icon size={size} className="text-orange" />;
      case "Zap": return <LambdaIcon size={size} className="text-orange" />;
      case "Database": return <RDSIcon size={size} className="text-blue" />;
      case "DatabaseZap": return <DynamoDBIcon size={size} className="text-blue" />;
      case "BrainCircuit": return <BedrockIcon size={size} className="text-purple" />;
      default: return <EC2Icon size={size} className="text-orange" />;
    }
  };

  return (
    <>
      {/* CARD IN GRID */}
      <motion.div
        whileHover={{ scale: 1.03, y: -4 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(true)}
        className="h-[280px] w-full group cursor-pointer bg-surface border border-subtle p-6 flex flex-col justify-between shadow-sm hover:border-purple/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all rounded-xl relative overflow-hidden"
      >
        {/* Subtle glow background */}
        <div className="absolute -right-12 -top-12 w-32 h-32 bg-purple/10 rounded-full blur-2xl group-hover:bg-purple/20 transition-colors pointer-events-none" />

        <div className="flex justify-between items-start gap-2 relative z-10">
          <div className="p-3.5 bg-canvas border border-subtle rounded-xl group-hover:border-purple/40 transition-colors shadow-inner">
            {getIcon(32)}
          </div>
          <Badge variant="subtle">{category}</Badge>
        </div>

        <div className="relative z-10 my-3">
          <h3 className="text-xl font-bold text-primary font-mono mb-2 group-hover:text-purple transition-colors flex items-center gap-2">
            {name}
          </h3>
          <p className="text-secondary text-xs line-clamp-3 leading-relaxed">
            {explanation}
          </p>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-subtle relative z-10 mt-auto">
          <span className="text-[11px] font-mono text-purple group-hover:underline font-semibold flex items-center gap-1.5">
            Click to expand

          </span>
          <span className="text-[11px] font-mono text-secondary px-2 py-0.5 rounded bg-canvas border border-subtle">
            Use Case ➔
          </span>
        </div>
      </motion.div>

      {/* ENLARGED MODAL VIEW ON CLICK */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-squid-ink/80 backdrop-blur-md"
            />

            {/* Expanded Bigger Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-full max-w-2xl bg-canvas border border-purple/40 rounded-2xl p-6 md:p-8 shadow-[0_0_50px_rgba(168,85,247,0.25)] z-10 overflow-hidden"
            >
              {/* Background gradient lighting */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-purple/10 rounded-full blur-3xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-surface border border-subtle text-secondary hover:text-primary hover:border-purple/50 transition-colors z-20"
                aria-label="Close card modal"
              >
                <X size={20} />
              </button>

              {/* Card Header */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-4 bg-surface border border-purple/30 rounded-2xl shadow-md">
                  {getIcon(44)}
                </div>
                <div>
                  <Badge variant="subtle" className="mb-1">{category}</Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-mono">{name}</h2>
                </div>
              </div>

              {/* Card Detailed Content */}
              <div className="space-y-6 relative z-10">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-purple font-bold mb-2 flex items-center gap-1.5">
                    <Layers size={14} /> Overview & Description
                  </h4>
                  <p className="text-secondary text-base md:text-lg leading-relaxed bg-surface/50 border border-subtle/60 p-4 rounded-xl">
                    {explanation}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-green font-bold mb-2 flex items-center gap-1.5">
                    <CheckCircle2 size={14} /> Primary Use Case & Architecture Role
                  </h4>
                  <p className="text-primary font-medium text-sm md:text-base leading-relaxed bg-purple/5 border border-purple/20 p-4 rounded-xl">
                    {useCase}
                  </p>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="mt-8 pt-5 border-t border-subtle flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
                <span className="text-xs font-mono text-secondary">
                  Press <kbd className="px-2 py-1 bg-surface border border-subtle rounded text-[10px]">ESC</kbd> or click outside to minimize
                </span>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`https://aws.amazon.com/search/?b=1&searchQuery=${encodeURIComponent(name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-purple text-squid-ink font-mono text-xs font-bold uppercase tracking-wider hover:bg-purple/90 transition-colors w-full sm:w-auto"
                  >
                    AWS Official Docs <ExternalLink size={14} />
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-5 py-2.5 rounded-lg bg-surface border border-subtle text-primary font-mono text-xs font-bold uppercase tracking-wider hover:border-purple/40 transition-colors w-full sm:w-auto"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

