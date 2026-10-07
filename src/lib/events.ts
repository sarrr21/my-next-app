export type FoundationEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
 
};

export const events: FoundationEvent[] = [
  {
    id: "book-signing-to-benefit-TLGEF-2026",
    title: "BOOK SIGNING TO BENEFIT TLGEF",
    date: "2026-9-19",
    time: "1:00 PM – 5:00 PM EST",
    location: "10045 Cedar Grove Rd Fairburn, GA, USA",
   
   
  },
  {
    id: "book-signing-to-benefit-TLGEF2-2026",
    title: "BOOK SIGNING TO BENEFIT TLGEF ",
    date: "2026-10-3",
    time: "11:00 AM – 1:00 PM EST",
    location: "300 Trilith Pkwy Ste 260 Fayetteville, GA 30214, USA",
    
  },
  {
    id: "meet-and-greet-2026",
    title: "MEET and GREET ",
    date: "2026-11-7",
    time: "4:00 PM – 8:00 PM EST",
    location: "461 Sandy Creek Rd Ste 4109, Fayetteville, GA 30214, USA",
    
  },
 
];

function eventDate(event: FoundationEvent) {
  const [year, month, day] = event.date.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function formatEventDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function isUpcomingEvent(event: FoundationEvent, now = new Date()) {
  const date = eventDate(event);
  date.setHours(23, 59, 59, 999);
  return date >= now;
}

export function getUpcomingEvents(limit?: number) {
  const upcoming = events
    .filter((event) => isUpcomingEvent(event))
    .sort((a, b) => eventDate(a).getTime() - eventDate(b).getTime());

  return typeof limit === "number" ? upcoming.slice(0, limit) : upcoming;
}

export function getPastEvents() {
  return events
    .filter((event) => !isUpcomingEvent(event))
    .sort((a, b) => eventDate(b).getTime() - eventDate(a).getTime());
}
