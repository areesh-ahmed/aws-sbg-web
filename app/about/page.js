import {
  MonitorPlay, Code, Award, PenLine, Layers, UsersRound, Check, ArrowUpRight,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import UniversityTag from "@/components/UniversityTag";
import PixelGraphic from "@/components/PixelGraphic";
import { blogs } from "@/data/blogs";
import { services } from "@/data/services";
import { resources } from "@/data/resources";

export const metadata = {
  title: "About Us | AWS Student Builder Group - MIT ADT",
  description: "Learn more about the AWS Student Builder Group at MIT ADT University, Pune.",
};

const activities = [
  {
    icon: MonitorPlay,
    title: "Hands-on Workshops",
    desc: "Guided labs where you actually deploy — EC2, S3, Lambda, VPCs and more — not just watch slides.",
  },
  {
    icon: Code,
    title: "Hackathons & Builds",
    desc: "Team up to design, build and ship cloud-native projects against the clock, from idea to live demo.",
  },
  {
    icon: Award,
    title: "Certification Prep",
    desc: `Study decks and group sessions for AWS certifications like ${resources.map((r) => r.title.split(" (")[0].replace("AWS Certified ", "")).join(" and ")}.`,
  },
  {
    icon: PenLine,
    title: "Technical Writing",
    desc: `Members share what they learn — ${blogs.length} blogs so far on Linux, DevOps, security, architecture and AWS.`,
  },
  {
    icon: Layers,
    title: "AWS Service Guides",
    desc: `A growing library of ${services.length}+ beginner-friendly explainers covering the AWS services you'll use most.`,
  },
  {
    icon: UsersRound,
    title: "Chit-Chat Sessions",
    desc: "Informal meetups to talk careers, internships, projects and tech — the easiest way to meet other builders.",
  },
];

const pillars = [
  { title: "Learn", desc: "Gain expertise in AWS services, cloud architecture, and modern application development." },
  { title: "Build", desc: "Apply your knowledge by building hands-on projects, participating in hackathons, and solving real-world problems." },
  { title: "Connect", desc: "Network with peers, industry professionals, and mentors. Grow your connections within the tech ecosystem." },
];

const journey = [
  { step: "Join", desc: "Become a member — no prior cloud experience required. Just curiosity." },
  { step: "Learn", desc: "Attend workshops and sessions, and pick up cloud fundamentals with peers." },
  { step: "Build", desc: "Turn what you learn into real projects, hackathon entries and deployments." },
  { step: "Share", desc: "Write blogs, run sessions and mentor the next batch of builders." },
];

const audience = [
  "Complete beginners curious about how the cloud works",
  "Developers who want to deploy and scale real applications",
  "Students preparing for AWS certifications",
  "Anyone interested in DevOps, AI/ML, security or architecture",
  "Builders looking for teammates for hackathons and projects",
  "Students from any branch or year at MIT ADT University",
];

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1">
      {/* HERO */}
      <section className="py-20 md:py-32 px-6 bg-surface relative overflow-hidden border-b border-subtle">
        <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] aspect-square rounded-full bg-purple/5 blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <UniversityTag />
          <SectionHeading title="About Us" subtitle="Who We Are" centered className="mb-0 md:mb-0" />
          <p className="text-secondary text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-6">
            We are a passionate community of student developers at MIT ADT University, Pune, united by our interest in cloud computing, DevOps, and building scalable applications with Amazon Web Services.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-3 grid gap-6">
            <div className="bg-surface border border-subtle p-8 md:p-10 relative">
              <span className="absolute left-0 top-0 bottom-0 w-1 bg-purple"></span>
              <div className="text-xs font-mono text-purple uppercase tracking-widest mb-4 font-bold">Our Mission</div>
              <p className="text-primary text-lg leading-relaxed mb-4">
                To bridge the gap between academic learning and industry demands.
              </p>
              <p className="text-secondary leading-relaxed">
                We empower students with the cloud skills to build innovative solutions, contribute to open-source, and prepare for successful careers in tech — through hands-on workshops, technical sessions, and real-world projects.
              </p>
            </div>
            <div className="bg-surface border border-subtle p-8 md:p-10 relative">
              <span className="absolute left-0 top-0 bottom-0 w-1 bg-blue"></span>
              <div className="text-xs font-mono text-blue uppercase tracking-widest mb-4 font-bold">Our Vision</div>
              <p className="text-primary text-lg leading-relaxed mb-4">
                A campus where every student can confidently build on the cloud.
              </p>
              <p className="text-secondary leading-relaxed">
                We want cloud skills to feel approachable — a place where beginners become builders, builders become mentors, and everyone learns in public together.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-purple/10 blur-[80px] rounded-full"></div>
              <PixelGraphic color="purple" className="w-56 h-56 md:w-72 md:h-72 relative" />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24 px-6 bg-surface border-y border-subtle">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="What We Do"
            title="More than a club — a place to build."
            subtitle="Everything we run is designed around getting your hands dirty with real AWS services."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-subtle border border-subtle">
            {activities.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-surface p-8 group hover:bg-elevated/40 transition-colors">
                <div className="w-11 h-11 bg-canvas border border-subtle flex items-center justify-center mb-6 group-hover:border-purple/40 transition-colors">
                  <Icon size={20} className="text-purple" />
                </div>
                <h3 className="text-lg font-bold font-mono text-primary mb-3">{title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="py-24 px-6 w-full">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Core Pillars" title="Build. Learn. Connect." centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <div key={pillar.title} className="bg-surface p-8 border border-subtle hover:border-purple/40 transition-colors">
                <div className="font-mono text-5xl font-bold text-subtle mb-6">0{idx + 1}</div>
                <h4 className="text-2xl font-bold font-mono text-purple mb-4">{pillar.title}</h4>
                <p className="text-secondary leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="py-24 px-6 bg-surface border-y border-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="max-w-7xl mx-auto relative">
          <SectionHeading
            eyebrow="Your Journey"
            title="From curiosity to cloud confidence."
            subtitle="How most of our members grow with the community."
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0 relative">
            <div className="hidden md:block absolute top-5 left-0 right-0 h-px bg-subtle"></div>
            {journey.map((item, i) => (
              <div key={item.step} className="relative md:pr-8">
                <div className="w-10 h-10 bg-canvas border border-purple/50 text-purple font-mono font-bold text-sm flex items-center justify-center mb-6 relative z-10">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold font-mono text-primary mb-2">{item.step}</h3>
                <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO CAN JOIN */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <SectionHeading
            eyebrow="Who Can Join"
            title="Open to every curious builder."
            subtitle="You don't need to be a cloud expert — most of our members started with zero AWS experience."
            className="mb-0 md:mb-0"
          />
          <ul className="grid gap-3">
            {audience.map((item) => (
              <li key={item} className="flex items-start gap-4 bg-surface border border-subtle px-5 py-4">
                <span className="w-5 h-5 shrink-0 mt-0.5 bg-purple/10 border border-purple/30 flex items-center justify-center">
                  <Check size={12} className="text-purple" />
                </span>
                <span className="text-secondary text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-surface border border-subtle p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-mono font-bold text-primary mb-4">Ready to build?</h3>
            <p className="text-secondary max-w-md">
              Start your cloud journey with us and become part of the next generation of builders on campus.
            </p>
          </div>
          <a
            href="#"
            className="relative shrink-0 inline-flex items-center gap-2 bg-purple text-squid-ink px-6 py-3.5 rounded-sm font-mono text-[13px] font-bold tracking-wide uppercase hover:bg-purple/90 transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
          >
            Join the Community <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
