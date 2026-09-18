"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Cloud, Users, BookOpen, Award } from "lucide-react";

const features = [
  { title: "Cloud, hands-on", desc: "Build real projects on AWS — architecture, deployment, and everything between.", bg: "bg-blue/10", border: "border-blue/20", text: "text-blue", icon: Cloud },
  { title: "A builder community", desc: "Learn alongside curious students and connect with industry practitioners.", bg: "bg-green/10", border: "border-green/20", text: "text-green", icon: Users },
  { title: "Workshops & labs", desc: "Regular technical sessions, guided labs, and certification prep.", bg: "bg-blue/10", border: "border-blue/20", text: "text-blue", icon: BookOpen },
  { title: "Get certified", desc: "Guidance, study groups, and support for AWS certification exams.", bg: "bg-purple/10", border: "border-purple/20", text: "text-purple", icon: Award },
];

export default function FeaturesCarousel() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative mb-6 group/carousel">
      {/* Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 z-10 opacity-0 group-hover/carousel:opacity-100 transition-opacity">
        <button onClick={() => scroll("left")} className="p-2 rounded-full bg-surface border border-subtle shadow-lg hover:bg-canvas text-primary transition-all">
          <ChevronLeft size={20} />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 z-10 opacity-0 group-hover/carousel:opacity-100 transition-opacity">
        <button onClick={() => scroll("right")} className="p-2 rounded-full bg-surface border border-subtle shadow-lg hover:bg-canvas text-primary transition-all">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Carousel */}
      <div 
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 px-1"
      >
        {features.map((feature, i) => (
          <div 
            key={i} 
            className="bg-surface border border-subtle p-6 hover:border-purple/50 transition-colors rounded-2xl flex flex-col shrink-0 w-[280px] md:w-[300px] snap-start shadow-sm hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] cursor-pointer"
          >
            <div className={`w-12 h-12 rounded-xl ${feature.bg} border ${feature.border} mb-6 flex items-center justify-center`}>
              <feature.icon size={22} className={feature.text} />
            </div>
            <h3 className="text-lg font-mono font-bold text-primary mb-3">{feature.title}</h3>
            <p className="text-secondary text-sm leading-relaxed flex-grow">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
