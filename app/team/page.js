"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import TeamCard from "@/components/TeamCard";
import { team } from "@/data/team";

export default function TeamPage() {
  return (
    <div className="flex flex-col flex-1 pb-20">
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
          <SectionHeading title="Our Team" subtitle="The Builders" />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-6"
          >
            Meet the passionate student leaders and developers driving the cloud ecosystem at MIT ADT University.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
}
