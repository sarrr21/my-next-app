import { Calendar, Clock, MapPin } from "lucide-react";
import { formatEventDate, type FoundationEvent } from "@/lib/events";

export default function EventCard({
  event,
  past = false,
}: {
  event: FoundationEvent;
  past?: boolean;
}) {
  return (
    <article className="h-full bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden flex flex-col">
      {/* <div className="relative h-44 overflow-hidden bg-gray-100">
        <img
          src={event.image}
          alt={event.imageAlt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold text-white">
          {event.category}
        </span>
        {past && (
          <span className="absolute top-3 right-3 rounded-full bg-gray-900/80 px-3 py-1 text-xs font-semibold text-white">
            Past event
          </span>
        )}
      </div> */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
          {event.title}
        </h3>
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li className="flex items-start gap-2">
            <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
            <span>{formatEventDate(event.date)}</span>
          </li>
          <li className="flex items-start gap-2">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
            <span>{event.time}</span>
          </li>
          <li className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
            <span>{event.location}</span>
          </li>
        </ul>
       
      </div>
    </article>
  );
}
