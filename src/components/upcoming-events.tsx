import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import EventCard from "@/components/event-card";
import { getUpcomingEvents } from "@/lib/events";
import { Button } from "@/components/ui/button";

export default function UpcomingEventsSection() {
  const upcoming = getUpcomingEvents(3);

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-4xl lg:max-w-6xl xl:max-w-full 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="flex gap-2">
              <p className="text-gray-400 text-xs font-medium tracking-wider uppercase mb-2">
                EVENTS
              </p>
              <div className="w-16 h-0.5 bg-orange-400 mt-2" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Upcoming Events
            </h2>
            
          </div>
          <Link href="/events" className="shrink-0">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              View all events
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {upcoming.length === 0 ? (
          <p className="text-gray-600">
            No upcoming events are scheduled right now. Check back soon or visit
            the events page for past gatherings.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {upcoming.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
