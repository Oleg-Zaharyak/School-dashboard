"use client";

import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Image from "next/image";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "some title 1",
    time: "12:00 PM - 2:00 PM",
    description: "some description",
  },
  {
    id: 2,
    title: "some title 1",
    time: "12:00 PM - 2:00 PM",
    description: "some description",
  },
  {
    id: 3,
    title: "some title 1",
    time: "12:00 PM - 2:00 PM",
    description: "some description",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar locale="en" onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-sky even:border-t-purple"
          >
            <div className="flex items-center justify-between">
              <h1 className=" font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <div className="mt-2 text-gray-400 text-sm">
              {event.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
