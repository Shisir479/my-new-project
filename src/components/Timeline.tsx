// src/components/Timeline.tsx
import React from "react";

type Event = {
  year: string;
  title: string;
  desc: string;
};

const events: Event[] = [
  {
    year: "2016",
    title: "Founded",
    desc: "Amar Gallery founded with a small group of artists in Chittagong.",
  },
  {
    year: "2018",
    title: "First Major Exhibit",
    desc: "Hosted our first curated exhibition featuring 20 emerging artists.",
  },
  {
    year: "2020",
    title: "Online Launch",
    desc: "Full online gallery launched to reach global collectors.",
  },
  {
    year: "2023",
    title: "International Collaborations",
    desc: "Collaborated with galleries in Dhaka and abroad for exchange shows.",
  },
];

export default function Timeline() {
  return (
    <div className="space-y-6">
      {events.map((ev, idx) => (
        <div key={ev.year} className="flex gap-4 items-start">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">
              {ev.year}
            </div>
          </div>
          <div>
            <h5 className="text-lg font-medium">{ev.title}</h5>
            <p className="mt-1 text-zinc-600 text-sm">{ev.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
