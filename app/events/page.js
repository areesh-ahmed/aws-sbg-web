import SectionHeading from "@/components/SectionHeading";
import EventCard from "@/components/EventCard";
import { events } from "@/data/events";

export const metadata = {
  title: "Events | AWS Student Builder Group - MIT ADT",
  description: "Join upcoming events, workshops, and hackathons hosted by the AWS SBG.",
};

export default function EventsPage() {
  return (
    <div className="flex flex-col flex-1 pb-20">
      <section className="py-20 md:py-32 px-6 bg-surface relative overflow-hidden border-b border-white/[0.05]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] aspect-square rounded-full bg-pink/5 blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <SectionHeading title="Events" subtitle="Learn & Connect" />
          <p className="text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-6">
            Participate in our hands-on workshops, expert tech talks, and competitive hackathons designed to elevate your cloud skills.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
}
