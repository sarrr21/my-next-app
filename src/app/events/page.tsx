import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import FooterSection from "@/components/footer1";
import EventCard from "@/components/event-card";
import { Badge } from "@/components/ui/badge";
import { getPastEvents, getUpcomingEvents } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events | TLGEF",
  description:
    "See upcoming and past events from the Tausi Likokola Global Empowerment Foundation.",
};

export default function EventsPage() {
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();

  return (
    <>
      <Navbar />
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge
            variant="secondary"
            className="mb-6 bg-orange-600 hover:bg-orange-700 text-sm font-medium"
          >
            Global Empowerment Foundation
          </Badge>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
            Events
          </h1>
         
        </div>
      </section>

      <main className="bg-white py-12 lg:py-16">
        <div className="max-w-4xl lg:max-w-6xl xl:max-w-full 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex gap-2">
              <h2 className="text-gray-500">EVENTS</h2>
              <div className="border-b w-20 mb-2 border-orange-500" />
            </div>
            <p className="text-3xl font-bold mb-4 mt-4">Upcoming Events</p>
            {upcoming.length === 0 ? (
              <p className="text-gray-600">
                No upcoming events are scheduled right now. Please check back
                soon.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch">
                {upcoming.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            )}
          </div>

          {past.length > 0 && (
            <div>
              <div className="flex gap-2">
                <h2 className="text-gray-500">ARCHIVE</h2>
                <div className="border-b w-20 mb-2 border-orange-500" />
              </div>
              <p className="text-3xl font-bold mb-4 mt-4">Past Events</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch">
                {past.map((event) => (
                  <EventCard key={event.id} event={event} past />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <FooterSection />
    </>
  );
}
