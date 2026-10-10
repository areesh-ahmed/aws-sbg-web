"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import UniversityTag from "@/components/UniversityTag";
import TeamCard from "@/components/TeamCard";
import { mentors, coreTeam, leads } from "@/data/team";

export default function TeamPage() {
  return (
    <div className="flex flex-col flex-1 pb-24">
      {/* Hero Header */}
      <section className="py-20 md:py-32 px-6 bg-surface relative overflow-hidden border-b border-white/[0.05]">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] aspect-square rounded-full bg-blue/5 blur-[120px] pointer-events-none"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center"
        >
          <UniversityTag />
          <SectionHeading title="Our Team" subtitle="The Builders" centered />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-4"
          >
            Meet the faculty advisors, core leaders, and domain heads steering the cloud ecosystem at MIT ADT University.
          </motion.p>
        </motion.div>
      </section>

      {/* 1. Our Mentors Section */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto w-full">
        <SectionHeading 
          eyebrow="Advisory & Guidance" 
          title="Our Mentors" 
          subtitle="Experienced faculty and AWS developer advocates guiding our vision and builder journey."
          centered 
        />
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {mentors.map((member) => (
            <div key={member.id} className="w-full sm:w-[calc(50%-1rem)] max-w-sm flex">
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </section>

      {/* 2. The Core Section */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto w-full border-t border-subtle/40">
        <SectionHeading 
          eyebrow="Executive Leadership" 
          title="The Core" 
          subtitle="Leading community operations, strategic initiatives, and organizational growth."
          centered 
        />
        <div className="flex flex-wrap justify-center gap-8">
          {coreTeam.map((member) => (
            <div key={member.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] max-w-sm flex">
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </section>

      {/* 3. Leads Section */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto w-full border-t border-subtle/40">
        <SectionHeading 
          eyebrow="Domain Leads" 
          title="Leads" 
          subtitle="Spearheading technical architectures, design systems, creative media, and outreach."
          centered 
        />
        <div className="flex flex-wrap justify-center gap-8">
          {leads.map((member) => (
            <div key={member.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] max-w-sm flex">
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
