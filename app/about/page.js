import SectionHeading from "@/components/SectionHeading";
import PixelGraphic from "@/components/PixelGraphic";

export const metadata = {
  title: "About Us | AWS Student Builder Group - MIT ADT",
  description: "Learn more about the AWS Student Builder Group at MIT ADT University, Pune.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1 pb-20">
      <section className="py-20 md:py-32 px-6 bg-surface relative overflow-hidden border-b border-white/[0.05]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] aspect-square rounded-full bg-purple/5 blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <SectionHeading title="About Us" subtitle="Who We Are" />
          <p className="text-secondary text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-6">
            We are a passionate community of student developers at MIT ADT University, Pune, united by our interest in cloud computing, DevOps, and building scalable applications with Amazon Web Services.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold font-mono tracking-tight text-primary mb-6">Our Mission</h3>
            <p className="text-secondary leading-relaxed mb-6">
              Our mission is to bridge the gap between academic learning and industry demands. We aim to empower students with the necessary cloud skills to build innovative solutions, contribute to open-source, and prepare for successful careers in tech.
            </p>
            <p className="text-secondary leading-relaxed">
              Through hands-on workshops, technical sessions, and real-world projects, we cultivate an environment of continuous learning and collaboration.
            </p>
          </div>
          <div className="flex justify-center">
            <PixelGraphic
              color="text-purple"
              pattern={[
                "  XXXX  ",
                " XXXXXX ",
                "XX    XX",
                "XX    XX",
                " XXXXXX ",
                "  XXXX  "
              ]}
              size="lg"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-elevated/30 w-full border-y border-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold font-mono tracking-tight text-primary mb-12 text-center">Core Pillars</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Learn",
                desc: "Gain expertise in AWS services, cloud architecture, and modern application development.",
              },
              {
                title: "Build",
                desc: "Apply your knowledge by building hands-on projects, participating in hackathons, and solving real-world problems.",
              },
              {
                title: "Connect",
                desc: "Network with peers, industry professionals, and mentors. Grow your connections within the tech ecosystem.",
              }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-surface p-8 rounded-xl border border-white/[0.05]">
                <h4 className="text-2xl font-bold font-mono text-purple mb-4">0{idx + 1}. {pillar.title}</h4>
                <p className="text-secondary leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
