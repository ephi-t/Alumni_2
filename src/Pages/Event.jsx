import React, { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";

const Event = () => {
  // eventsData.js
  const eventsData = [
    {
      id: 1,
      title: "Alumni Meetup",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil in ipsum suscipit ipsam delectus, expedita exercitationem debitis et? Architecto voluptatem quos provident quibusdam ad sapiente consequatur ut cumque necessitatibus! Accusamus perferendis magni iure, tempore nam architecto sed explicabo ipsam fugit dolores, numquam quibusdam voluptatum ad laboriosam omnis, animi quo atlormAn event to meet and greet with fellow alumni.",
      dateTime: "2024-10-12 18:00",
      location: "DBU Hall",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Career Fair",
      description: "Explore career opportunities from top companies.",
      dateTime: "2024-11-05 09:00",
      location: "University Grounds",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Tech Conference",
      description: "A conference to showcase the latest tech trends.",
      dateTime: "2024-12-02 10:00",
      location: "Tech Auditorium",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Tech Conference",
      description: "A conference to showcase the latest tech trends.",
      dateTime: "2024-12-02 10:00",
      location: "Tech Auditorium",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Tech Conference",
      description: "A conference to showcase the latest tech trends.",
      dateTime: "2024-12-02 10:00",
      location: "Tech Auditorium",
      imageUrl: "https://via.placeholder.com/150",
    },
    // Add more events if needed...
  ];

  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Simulate API fetch
    setEvents(eventsData);
  }, []);

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 ">
      <h1 className="text-4xl font-semibold text-center mb-8">Events</h1>
      <div className="max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Search events by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className=" p-4  rounded-lg ">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
            <p className="text-gray-600 mb-4">{event.description}</p>
            <p className="text-gray-500">
              <span className="font-semibold">Date & Time:</span>{" "}
              {event.dateTime}
            </p>
            <p className="flex items-center gap-2 text-gray-500">
              <span className="font-semibold">
                <FaLocationDot />
              </span>{" "}
              {event.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
