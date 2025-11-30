import React from "react";
import eventsData from "../data/events.json";

const Events = () => {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <div className="bg-emerald-700 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">{eventsData.title}</h1>
        <p className="mt-3 opacity-90 max-w-2xl mx-auto">
          {eventsData.description}
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-6">
        {eventsData.events.map(event => (
          <div key={event.name}
            className="border bg-white p-6 rounded-xl hover:shadow-md transition">
            <h2 className="text-xl text-emerald-700 font-semibold">
              {event.name}
            </h2>
            <p className="text-gray-600 mt-2">{event.description}</p>
            <div className="text-sm text-gray-500 mt-3">
              📅 {event.date} · 📍 {event.location}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
