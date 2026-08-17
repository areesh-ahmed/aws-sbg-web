"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import PixelGraphic from "@/components/PixelGraphic";
import EventCard from "@/components/EventCard";
import ServiceCard from "@/components/ServiceCard";
import BlogCard from "@/components/BlogCard";
import ResourceCard from "@/components/ResourceCard";

import { events } from "@/data/events";
import { services } from "@/data/services";
import { blogs } from "@/data/blogs";
import { resources } from "@/data/resources";

export default function Home() {
  const featuredEvents = events.slice(0, 4);
  const featuredServices = services.slice(0, 6);
  const featuredBlog = blogs.find(b => b.isFeatured) || blogs[0];
  const recentBlogs = blogs.filter(b => !b.isFeatured).slice(0, 3);
  const featuredResources = resources.slice(0, 6);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-32 overflow-hidden bg-[var(--color-canvas)] border-b border-subtle">
        {/* Subtle, professional grid and lighting (AWS style) */}
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" 
        />
        
        <div className="max-w-[1200px] mx-auto px-[24px] lg:px-[80px] w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 font-mono text-[13px] text-purple tracking-widest uppercase mb-8 font-bold bg-surface px-4 py-2 rounded-sm border border-subtle shadow-sm relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple"></div>
              <span className="ml-1">MIT ADT UNIVERSITY</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="text-[48px] lg:text-[72px] font-mono font-bold leading-[1.05] tracking-tight text-primary mb-6"
            >
              Build.<br />
              <motion.span 
                className="text-purple inline-block"
              >
                Learn.
              </motion.span><br />
              Connect.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-secondary text-lg lg:text-xl max-w-lg mb-12 leading-relaxed"
            >
              A student-led AWS community where builders explore cloud technologies, deploy real-world architectures, and scale together.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a href="#" className="inline-flex items-center justify-center px-8 py-3.5 font-bold text-squid-ink bg-purple font-mono text-[14px] tracking-wide uppercase transition-all hover:bg-purple/90 hover:-translate-y-0.5 shadow-sm group">
                Join the Community
                <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="/services" className="inline-flex items-center justify-center px-8 py-3.5 font-bold text-primary bg-surface border border-subtle font-mono text-[14px] tracking-wide uppercase transition-all hover:border-purple/50 hover:bg-elevated group">
                Explore AWS
                <ArrowUpRight size={16} className="ml-2 text-secondary group-hover:text-purple transition-colors" />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{ 
              opacity: { duration: 1, delay: 0.5 },
              scale: { duration: 1, delay: 0.5, type: "spring", bounce: 0.2 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
            }}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Subtle tech aura behind the logo */}
            <div className="absolute inset-0 bg-purple/10 blur-[80px] rounded-full w-3/4 h-3/4 m-auto" />
            <PixelGraphic type="cloud" color="purple" className="w-full max-w-[450px] h-auto relative z-10" />
            
            {/* Decorative tech grid accents */}
            <div className="absolute top-10 right-10 w-16 h-16 border-t-2 border-r-2 border-purple/20" />
            <div className="absolute bottom-10 left-10 w-16 h-16 border-b-2 border-l-2 border-purple/20" />
          </motion.div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 bg-surface border-y border-subtle">
        <div className="max-w-[1200px] mx-auto px-[24px] lg:px-[80px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                eyebrow="Community"
                title="Where student builders come together."
                subtitle="We provide a platform for students to transition from cloud beginners to certified builders through hands-on workshops, technical sessions, and collaborative projects."
                className="mb-8"
              />
              <Button href="/about" variant="ghost" icon className="px-0">Learn More</Button>
            </div>
            <div className="bg-elevated aspect-video border border-subtle relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-grid-pattern opacity-30" />
              <PixelGraphic type="node" color="blue" className="w-48 h-48 opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-[24px] lg:px-[80px]">
          <SectionHeading 
            eyebrow="Pillars"
            title="Learn. Build. Connect. Grow."
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Learn", desc: "Interactive sessions on core AWS services.", icon: "blue" },
              { title: "Build", desc: "Hands-on projects and hackathons.", icon: "purple" },
              { title: "Connect", desc: "Network with peers and industry experts.", icon: "purple" },
              { title: "Grow", desc: "Prepare for certifications and careers.", icon: "green" },
            ].map((pillar, i) => (
              <div key={i} className="bg-surface border border-subtle p-8 hover:border-purple/50 transition-colors group">
                <div className={`w-12 h-12 rounded bg-${pillar.icon}/10 border border-${pillar.icon}/20 mb-6 flex items-center justify-center`}>
                   <div className={`w-4 h-4 bg-${pillar.icon}`} />
                </div>
                <h3 className="text-xl font-mono font-bold text-primary mb-3">{pillar.title}</h3>
                <p className="text-secondary text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS PREVIEW */}
      <section className="py-24 bg-surface border-y border-subtle relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-[24px] lg:px-[80px] relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading 
              eyebrow="Events"
              title="What's happening at SBG"
              className="mb-0"
            />
            <Button href="/events" variant="ghost" icon className="hidden md:flex">View All Events</Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button href="/events" variant="outline" className="w-full">View All Events</Button>
          </div>
        </div>
      </section>

      {/* AWS SERVICES PREVIEW */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-[24px] lg:px-[80px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading 
              eyebrow="Technologies"
              title="Explore the cloud."
              className="mb-0"
            />
            <Button href="/services" variant="ghost" icon className="hidden md:flex">Explore Services</Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-24 bg-surface border-y border-subtle">
        <div className="max-w-[1200px] mx-auto px-[24px] lg:px-[80px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading 
              eyebrow="Community Voice"
              title="Ideas, tutorials & builder stories."
              className="mb-0"
            />
            <Button href="/blogs" variant="ghost" icon className="hidden md:flex">View All Blogs</Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-3 mb-6">
               <BlogCard blog={featuredBlog} featured />
            </div>
            {recentBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES PREVIEW */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-[24px] lg:px-[80px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading 
              eyebrow="Learning Materials"
              title="Resources for your next build."
              className="mb-0"
            />
            <Button href="/resources" variant="ghost" icon className="hidden md:flex">Explore Resources</Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 relative overflow-hidden bg-elevated border-t border-subtle">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="max-w-[800px] mx-auto px-[24px] relative z-10 text-center">
          <h2 className="text-[32px] md:text-[48px] font-mono font-bold tracking-tight text-primary mb-6">
            Ready to start building?
          </h2>
          <p className="text-secondary text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Join the AWS Student Builder Group at MIT ADT University and accelerate your journey in the cloud.
          </p>
          <Button href="#" variant="primary" icon className="w-full sm:w-auto text-lg px-10 py-5">
            Join the Community
          </Button>
        </div>
      </section>
      
    </div>
  );
}
