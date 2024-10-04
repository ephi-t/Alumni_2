import React, { useState } from "react";

// Static alumni data with real profile pictures (replace these URLs with actual pictures)
const alumniData = [
  {
    name: "Quinlan Pratt",
    department: "Accounting Division",
    batch: "2011-2015",
    profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Michael E. Reese",
    department: "Accounting Division",
    batch: "2013-2017",
    profilePic: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Sophia Johnson",
    department: "Department Of Faculty",
    batch: "2016-2020",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "George Jenks",
    department: "Computer Science Engineering",
    batch: "2011-2015",
    profilePic: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Alyssa Kent",
    department: "Mechanical Engineering",
    batch: "2014-2018",
    profilePic: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    name: "David Rogers",
    department: "Civil Engineering",
    batch: "2015-2019",
    profilePic: "https://randomuser.me/api/portraits/men/80.jpg",
  },
  {
    name: "Jessica Wu",
    department: "Business Management",
    batch: "2012-2016",
    profilePic: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "Ethan Hunt",
    department: "Information Technology",
    batch: "2011-2015",
    profilePic: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Lena Fox",
    department: "Biomedical Engineering",
    batch: "2013-2017",
    profilePic: "https://randomuser.me/api/portraits/women/17.jpg",
  },
  {
    name: "Carlos Rivera",
    department: "Chemical Engineering",
    batch: "2016-2020",
    profilePic: "https://randomuser.me/api/portraits/men/95.jpg",
  },
];

const Alumni = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const alumniPerPage = 6; // Number of alumni per page

  // Filter alumni based on the search term
  const filteredAlumni = alumniData.filter((alumnus) =>
    alumnus.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastAlumni = currentPage * alumniPerPage;
  const indexOfFirstAlumni = indexOfLastAlumni - alumniPerPage;
  const currentAlumni = filteredAlumni.slice(
    indexOfFirstAlumni,
    indexOfLastAlumni
  );

  const totalPages = Math.ceil(filteredAlumni.length / alumniPerPage);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search alumni by name"
        className="w-full p-3 mb-8 border rounded-lg shadow-lg focus:outline-none focus:ring focus:border-blue-300"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Alumni Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentAlumni.map((alumnus, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105"
          >
            <img
              src={alumnus.profilePic}
              alt={alumnus.name}
              className="h-64 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-center text-gray-800">
                {alumnus.name}
              </h3>
              <p className="text-center text-gray-500">{alumnus.department}</p>
              <p className="text-center text-gray-400">Batch {alumnus.batch}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-4 py-2 rounded-lg ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Alumni;
