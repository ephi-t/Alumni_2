import React, { useState } from "react";

const surveyData = [
  {
    id: 1,
    title: "Customer Satisfaction Survey",
    description: "Help us understand how we can improve our services.",
    link: "https://example.com/survey1",
    image: "https://via.placeholder.com/300x200?text=Customer+Satisfaction",
  },
  {
    id: 2,
    title: "Product Feedback Survey",
    description: "We want to hear your thoughts on our latest product.",
    link: "https://example.com/survey2",
    image: "https://via.placeholder.com/300x200?text=Product+Feedback",
  },
  {
    id: 3,
    title: "Event Feedback Survey",
    description: "Tell us about your experience at our recent event.",
    link: "https://example.com/survey3",
    image: "https://via.placeholder.com/300x200?text=Event+Feedback",
  },
  // Add more survey data as needed
];

const Survey = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter surveys based on the search term
  const filteredSurveys = surveyData.filter((survey) =>
    survey.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search surveys..."
        className="w-[25%] p-3 mb-8 border rounded-lg shadow-lg focus:outline-none focus:ring focus:border-blue-300"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Survey Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSurveys.length > 0 ? (
          filteredSurveys.map((survey) => (
            <div
              key={survey.id}
              className="rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105"
            >
              <img
                src={survey.image}
                alt={survey.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {survey.title}
                </h3>
                <p className="text-gray-600">{survey.description}</p>
                <a href={survey.link} target="_blank" rel="noopener noreferrer">
                  <button className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Take Survey
                  </button>
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-600">
            No surveys found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Survey;
