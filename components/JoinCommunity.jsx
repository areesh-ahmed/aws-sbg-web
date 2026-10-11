"use client";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { communityLinks } from "@/data/community";
import { socialIcons, brandBackgrounds } from "./SocialIcons";
import PixelGraphic from "./PixelGraphic";

export function CommunityLinkList({ onSelect }) {
  return (
    <ul className="flex flex-col gap-2">
      {communityLinks.map(({ id, name, description, url }) => {
        const Icon = socialIcons[id];
        return (
          <li key={id}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onSelect}
              className="flex items-center gap-4 p-3 bg-surface border border-subtle hover:border-purple/40 hover:bg-elevated/50 transition-colors group/item"
            >
              <span
                className="w-11 h-11 shrink-0 rounded-[10px] flex items-center justify-center text-white"
                style={{ background: brandBackgrounds[id] }}
              >
                <Icon size={22} />
              </span>
              <span className="flex flex-col min-w-0 flex-1 normal-case tracking-normal text-left">
                <span className="font-mono text-sm font-bold text-primary">{name}</span>
                <span className="text-xs text-secondary truncate">{description}</span>
              </span>
              <ArrowUpRight
                size={16}
                className="shrink-0 text-secondary group-hover/item:text-purple group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all"
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

// Button that opens a centered popup with the community links.
// Portalled to <body> so it isn't clipped or offset by parent sections.
export default function JoinCommunity({ className, children }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    const button = buttonRef.current;
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      button?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={className}
      >
        {children}
      </button>
      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="absolute inset-0 bg-canvas/80 backdrop-blur-sm"
                  onClick={() => setOpen(false)}
                  aria-hidden="true"
                />
                <motion.div
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="join-community-title"
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 16, scale: 0.98 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full max-w-md bg-canvas border border-subtle shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
                >
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-purple"></span>

                  <div className="flex items-start justify-between gap-4 p-6 pb-5 border-b border-subtle">
                    <div className="flex items-center gap-4">
                      <PixelGraphic color="purple" className="w-10 h-10 shrink-0" />
                      <div>
                        <h2 id="join-community-title" className="font-mono text-lg font-bold text-primary leading-tight">
                          Join the Community
                        </h2>
                        <p className="text-secondary text-sm mt-1">Pick where you&apos;d like to connect with us.</p>
                      </div>
                    </div>
                    <button
                      ref={closeRef}
                      type="button"
                      onClick={() => setOpen(false)}
                      aria-label="Close"
                      className="w-8 h-8 shrink-0 flex items-center justify-center border border-subtle text-secondary hover:text-primary hover:border-purple/40 transition-colors cursor-pointer"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  <div className="p-6">
                    <CommunityLinkList onSelect={() => setOpen(false)} />
                  </div>

                  <div className="px-6 pb-5 font-mono text-[11px] uppercase tracking-widest text-secondary">
                    AWS Student Builder Group · MIT ADT University
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
