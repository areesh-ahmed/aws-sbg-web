"use client";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import EventCard from "@/components/EventCard";
import { events } from "@/data/events";
import { Sparkles, Calendar, Award, Users } from "lucide-react";

export default function EventsPage() {
  const [filter, setFilter] = useState("all");

  const filteredEvents = events.filter((event) => {
    if (filter === "upcoming") return event.isUpcoming;
    if (filter === "past") return !event.isUpcoming;
    return true;
  });

  const upcomingCount = events.filter((e) => e.isUpcoming).length;
  const pastCount = events.filter((e) => !e.isUpcoming).length;

  return (
    <div className="flex flex-col flex-1 pb-20">
      {/* HERO HEADER */}
      <section className="py-20 md:py-28 px-6 bg-surface relative overflow-hidden border-b border-subtle">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] aspect-square rounded-full bg-purple/10 blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <SectionHeading title="Events & Bootcamps" subtitle="Learn, Build & Scale" />
          <p className="text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-6">
            Participate in our hands-on bootcamps, AI-driven workshops, expert tech talks, and hackathons designed to accelerate your cloud journey.
          </p>

          {/* IMPACT METRICS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 w-full max-w-4xl">
            <div className="p-4 bg-canvas/80 border border-subtle rounded-xl text-center">
              <div className="text-2xl md:text-3xl font-mono font-bold text-primary">195+</div>
              <div className="text-xs text-secondary mt-1 font-mono">Event Attendees</div>
            </div>
            <div className="p-4 bg-canvas/80 border border-subtle rounded-xl text-center">
              <div className="text-2xl md:text-3xl font-mono font-bold text-purple">25</div>
              <div className="text-xs text-secondary mt-1 font-mono">100% Exam Vouchers</div>
            </div>
            <div className="p-4 bg-canvas/80 border border-subtle rounded-xl text-center">
              <div className="text-2xl md:text-3xl font-mono font-bold text-amber-400">$2,500</div>
              <div className="text-xs text-secondary mt-1 font-mono">AWS Credits Given</div>
            </div>
            <div className="p-4 bg-canvas/80 border border-subtle rounded-xl text-center">
              <div className="text-2xl md:text-3xl font-mono font-bold text-primary">100%</div>
              <div className="text-xs text-secondary mt-1 font-mono">Hands-on Learning</div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS LISTING SECTION */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full">
        {/* FILTER TABS */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          <button
            onClick={() => setFilter("all")}
            className={`px-5 py-2 rounded-xl text-sm font-mono transition-all border ${
              filter === "all"
                ? "bg-purple text-white border-purple shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                : "bg-surface text-secondary border-subtle hover:border-purple/40 hover:text-primary"
            }`}
          >
            All Events ({events.length})
          </button>
          <button
            onClick={() => setFilter("upcoming")}
            className={`px-5 py-2 rounded-xl text-sm font-mono transition-all border ${
              filter === "upcoming"
                ? "bg-purple text-white border-purple shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                : "bg-surface text-secondary border-subtle hover:border-purple/40 hover:text-primary"
            }`}
          >
            Upcoming ({upcomingCount})
          </button>
          <button
            onClick={() => setFilter("past")}
            className={`px-5 py-2 rounded-xl text-sm font-mono transition-all border ${
              filter === "past"
                ? "bg-purple text-white border-purple shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                : "bg-surface text-secondary border-subtle hover:border-purple/40 hover:text-primary"
            }`}
          >
            Past & Recaps ({pastCount})
          </button>
        </div>

        {/* EVENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
}

