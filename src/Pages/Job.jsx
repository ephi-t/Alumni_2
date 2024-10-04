import React, { useState } from "react";
import { Link } from "react-router-dom";

// Sample job data (you'll typically fetch this from an API)
const jobData = [
  {
    id: 1,
    title: "Software Engineer",
    description: "Develop and maintain applications.",
    location: "New York, NY",
    image: "https://via.placeholder.com/300x200?text=Software+Engineer",
  },
  {
    id: 2,
    title: "Data Analyst",
    description: "Analyze data and generate reports.",
    location: "San Francisco, CA",
    image: "https://via.placeholder.com/300x200?text=Data+Analyst",
  },
  {
    id: 3,
    title: "Product Manager",
    description: "Lead product development initiatives.",
    location: "Austin, TX",
    image: "https://via.placeholder.com/300x200?text=Product+Manager",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    description: "Design user-friendly interfaces.",
    location: "Seattle, WA",
    image: "https://via.placeholder.com/300x200?text=UI/UX+Designer",
  },
  {
    id: 5,
    title: "System Administrator",
    description: "Manage and maintain IT systems.",
    location: "Chicago, IL",
    image: "https://via.placeholder.com/300x200?text=System+Administrator",
  },
  {
    id: 6,
    title: "Marketing Specialist",
    description: "Develop marketing strategies.",
    location: "Los Angeles, CA",
    image: "https://via.placeholder.com/300x200?text=Marketing+Specialist",
  },
  // Add more job data as needed
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
              className=" rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105"
            >
              <img
                src={job.image}
                alt={job.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {job.title}
                </h3>
                <p className="text-gray-600">{job.description}</p>
                <p className="text-gray-500">Location: {job.location}</p>
                <Link to={`/jobs/${job.id}/apply`}>
                  <button className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
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
