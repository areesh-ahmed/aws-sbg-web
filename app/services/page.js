import SectionHeading from "@/components/SectionHeading";
import ServicesLayout from "@/components/ServicesLayout";
import { services } from "@/data/services";

export const metadata = {
  title: "Services | AWS Student Builder Group - MIT ADT",
  description: "Explore the services and support offered by the AWS Student Builder Group.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col flex-1 pb-20">
      <section className="py-20 md:py-32 px-6 bg-surface relative overflow-hidden border-b border-white/[0.05]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] aspect-square rounded-full bg-green/5 blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <SectionHeading title="Our Services" subtitle="What We Offer" />
          <p className="text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-6">
            We offer a variety of services to help students learn, build, and grow their skills in cloud computing and modern tech stacks.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <ServicesLayout services={services} />
      </section>
    </div>
  );
}
