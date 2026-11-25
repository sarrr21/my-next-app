import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import FooterSection from "@/components/footer1";
import EventCard from "@/components/event-card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import {
  formatEventDate,
  getPastEvents,
  getUpcomingEvents,
} from "@/lib/events";

export const metadata: Metadata = {
  title: "Events | TLGEF",
  description:
    "See upcoming and past events from the Tausi Likokola Global Empowerment Foundation.",
};

export default function EventsPage() {
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();
  const highlights = past.filter((event) => event.videos?.length);

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

          {highlights.length > 0 && (
            <div className="mb-12">
              <div className="flex gap-2">
                <h2 className="text-gray-500">HIGHLIGHTS</h2>
                <div className="border-b w-20 mb-2 border-orange-500" />
              </div>
              <p className="text-3xl font-bold mb-8 mt-4">Event Highlights</p>
              <div className="space-y-12">
                {highlights.map((event) => (
                  <div
                    key={event.id}
                    id={event.id}
                    className="max-w-5xl mx-auto space-y-4 scroll-mt-24"
                  >
                    <div className="text-center space-y-2">
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                        {event.videoTitle ?? event.title}
                      </h3>
                      <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-gray-600">
                        <span className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-orange-600" />
                          {formatEventDate(event.date)}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-orange-600" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`grid gap-6 ${
                        event.videos!.length > 1 ? "md:grid-cols-2" : ""
                      }`}
                    >
                      {event.videos!.map((video) => (
                        <div
                          key={video}
                          className="rounded-xl overflow-hidden shadow-lg bg-black"
                        >
                          <video
                            src={video}
                            controls
                            playsInline
                            preload="metadata"
                            className="w-full aspect-video object-contain"
                          >
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

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
