import React, { useState } from "react";
import { Link } from "react-router-dom";

// Sample donation data
const donationData = [
  {
    id: 1,
    title: "Community Clean-Up Fund",
    description: "Help us clean up our local parks and streets.",
    image: "https://via.placeholder.com/300x200?text=Community+Clean-Up",
  },
  {
    id: 2,
    title: "Food Drive",
    description: "Donate to help provide meals for families in need.",
    image: "https://via.placeholder.com/300x200?text=Food+Drive",
  },
  {
    id: 3,
    title: "School Supplies Fund",
    description: "Support local students by providing them with essential supplies.",
    image: "https://via.placeholder.com/300x200?text=School+Supplies",
  },
  // Add more donation data as needed
];

const Donation = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter donation data based on the search term
  const filteredDonations = donationData.filter((donation) =>
    donation.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search donation titles..."
        className="w-[25%] p-3 mb-8 border rounded-lg shadow-lg focus:outline-none focus:ring focus:border-blue-300"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Donation Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDonations.length > 0 ? (
          filteredDonations.map((donation) => (
            <div
              key={donation.id}
              className="rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105"
            >
              <img
                src={donation.image}
                alt={donation.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {donation.title}
                </h3>
                <p className="text-gray-600">{donation.description}</p>
                <Link to={`/donations/${donation.id}/donate`}>
                  <button className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Apply
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-600">No donations found.</p>
        )}
      </div>
    </div>
  );
};

export default Donation;
