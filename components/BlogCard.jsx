"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Badge from "./Badge";
import PixelGraphic from "./PixelGraphic";
import { team } from "@/data/team";

// Deterministic pseudo-random generator so each blog gets a stable pattern
function seeded(seed) {
  let s = seed * 9301 + 49297;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function PixelCover({ seed, cols = 20, rows = 8 }) {
  const rand = seeded(seed);
  const cells = [];
  let accents = 0;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      // Sparse cluster fading out from the bottom-right corner
      const dist = Math.hypot((cols - 1 - x) / cols, (rows - 1 - y) / rows);
      const chance = Math.max(0, 0.55 - dist * 0.9);
      if (rand() < chance) {
        const accent = accents < 2 && rand() < 0.12;
        if (accent) accents++;
        cells.push({ x, y, o: accent ? 0.55 : 0.06 + rand() * 0.12 });
      }
    }
  }

  return (
    <svg
      viewBox={`0 0 ${cols} ${rows}`}
      preserveAspectRatio="xMaxYMax slice"
      className="absolute inset-0 w-full h-full"
      shapeRendering="crispEdges"
    >
      {cells.map(({ x, y, o }) => (
        <rect
          key={`${x}-${y}`}
          x={x + 0.1}
          y={y + 0.1}
          width={0.8}
          height={0.8}
          fill="#8B5CF6"
          fillOpacity={o}
        />
      ))}
    </svg>
  );
}

function slug(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function Avatar({ name }) {
  const image = team.find((m) => m.name === name)?.image;
  if (image) {
    return <img src={image} alt={name} className="w-8 h-8 object-cover border border-subtle shrink-0" />;
  }
  const initials = (name || "?").split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  return (
    <span className="w-8 h-8 shrink-0 bg-canvas border border-subtle flex items-center justify-center text-[11px] font-mono font-bold text-purple">
      {initials}
    </span>
  );
}

export default function BlogCard({ blog, featured = false }) {
  const { id, title, description, category, author, source, date, readTime, url } = blog;
  const meta = [date, readTime].filter(Boolean).join(" · ") || source;
  const path = `~/blogs/${slug(category)}`;

  const byline = (
    <div className="flex items-center gap-3 min-w-0">
      <Avatar name={author || source} />
      <div className="flex flex-col text-xs font-mono min-w-0">
        <span className="text-primary truncate">{author || source}</span>
        <span className="text-secondary truncate">{meta}</span>
      </div>
    </div>
  );

  const link = (
    <a href={url} target="_blank" rel="noopener noreferrer" className="before:absolute before:inset-0 before:z-10">
      {title}
    </a>
  );

  if (featured) {
    return (
      <motion.div
        whileHover={{ y: -4 }}
        className="bg-surface border border-subtle hover:border-purple/40 flex flex-col md:flex-row h-full group transition-colors duration-300 relative overflow-hidden"
      >
        <div className="md:w-1/2 bg-canvas relative overflow-hidden min-h-[240px] md:min-h-[320px] border-b md:border-b-0 md:border-r border-subtle">
          <PixelCover seed={id} cols={20} rows={12} />
          <div className="absolute inset-0 flex items-center justify-center">
            <PixelGraphic color="purple" className="w-14 h-14 md:w-16 md:h-16 opacity-90" />
          </div>
          <span className="absolute bottom-4 left-4 font-mono text-xs text-secondary bg-canvas border border-subtle px-2 py-1">
            {path}
          </span>
        </div>

        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-5">
            <Badge variant="purple">Featured</Badge>
            <Badge variant="subtle">{source}</Badge>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-mono leading-tight group-hover:text-purple transition-colors">
            {link}
          </h3>
          <p className="text-secondary text-base mb-8 leading-relaxed">{description}</p>
          <div className="flex items-center justify-between gap-4 mt-auto pt-6 border-t border-subtle">
            {byline}
            <span className="flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-purple shrink-0">
              Read <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-surface border border-subtle hover:border-purple/40 flex flex-col h-full group transition-colors duration-300 relative overflow-hidden"
    >
      <div className="h-36 bg-canvas relative overflow-hidden border-b border-subtle">
        <PixelCover seed={id} />
        <span className="absolute top-3 left-3 font-mono text-[11px] text-secondary bg-canvas border border-subtle px-2 py-0.5">
          {path}
        </span>
        <span className="absolute top-3 right-3 w-7 h-7 bg-canvas border border-subtle flex items-center justify-center text-secondary group-hover:text-purple group-hover:border-purple/40 transition-colors">
          <ArrowUpRight size={14} />
        </span>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <span className="font-mono text-[11px] uppercase tracking-widest text-purple mb-3">{source}</span>
        <h3 className="text-lg font-bold text-primary mb-3 font-mono leading-snug group-hover:text-purple transition-colors line-clamp-2">
          {link}
        </h3>
        <p className="text-secondary text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">{description}</p>
        <div className="mt-auto pt-4 border-t border-subtle">{byline}</div>
      </div>
    </motion.div>
  );
}
