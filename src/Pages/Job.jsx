import React, { useState } from "react";
import { Link } from "react-router-dom";

// Updated job data with detailed descriptions
const jobData = [
  {
    id: 1,
    title: "Software Engineer",
    companyName: "Tech Corp",
    description:
      "Join our team as a Software Engineer, where you'll be responsible for developing and maintaining web applications. We're looking for someone proficient in JavaScript and React, with a strong understanding of backend technologies.",
    location: "New York, NY",
    deadline: "2024-11-15",
    image: "https://via.placeholder.com/300x200?text=Software+Engineer",
  },
  {
    id: 2,
    title: "Data Analyst",
    companyName: "Data Inc.",
    description:
      "As a Data Analyst, you will interpret complex data sets to provide actionable insights. Required skills include Python, SQL, and strong analytical abilities. We offer a dynamic work environment with opportunities for growth and a competitive salary.",
    location: "San Francisco, CA",
    deadline: "2024-12-01",
    image: "https://via.placeholder.com/300x200?text=Data+Analyst",
  },
  {
    id: 3,
    title: "Product Manager",
    companyName: "Product Labs",
    description:
      "Lead cross-functional teams as a Product Manager to build innovative products. We seek someone with excellent communication skills and experience in product lifecycle management. Benefits include stock options and a flexible work schedule.",
    location: "Austin, TX",
    deadline: "2024-11-30",
    image: "https://via.placeholder.com/300x200?text=Product+Manager",
  },
  // Add more job data as needed with detailed descriptions
];

const Job = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter job data based on the search term
  const filteredJobs = jobData.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search job titles..."
        className="w-[25%] p-3 mb-8 border rounded-lg shadow-lg focus:outline-none focus:ring focus:border-blue-300"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Job Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 border border-gray-300"
            >
              <img
                src={job.image}
                alt={job.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {job.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{job.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-lg font-semibold text-gray-800">
                    Company:{" "}
                    <span className="text-blue-500">{job.companyName}</span>
                  </p>
                  <p className="text-lg text-gray-700">
                    Location: <span>{job.location}</span>
                  </p>
                  <p className="text-lg text-gray-700">
                    Deadline: <span>{job.deadline}</span>
                  </p>
                </div>
                <Link to={`/jobs/${job.id}/apply`}>
                  <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-full w-full hover:bg-blue-700 transition duration-300">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-600">No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default Job;
