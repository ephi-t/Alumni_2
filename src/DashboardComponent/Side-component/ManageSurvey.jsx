import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { CiSearch } from "react-icons/ci"; // Importing the search icon

const ManageSurvey = () => {
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const data = [
    {
      id: 1,
      title: "Feedback Survey",
      description:
        "A survey to gather feedback on the recent alumni event for improvements.",
      link: "https://example.com/feedback-survey",
    },
    {
      id: 2,
      title: "Career Development Survey",
      description:
        "A survey to assess the effectiveness of the career development workshops.",
      link: "https://example.com/career-survey",
    },
    {
      id: 3,
      title: "Alumni Engagement Survey",
      description:
        "Gathering data on alumni engagement and interests to enhance community.",
      link: "https://example.com/alumni-engagement",
    },
  ];

  const actionBodyTemplate = (rowData) => {
    return (
      <div className="flex gap-2">
        <button
          className="flex justify-center items-center w-8 h-8 bg-gray-300 rounded-full hover:bg-teal-400 transition duration-300"
          title="Edit"
        >
          ✎
        </button>
        <button
          className="flex justify-center items-center w-8 h-8 bg-gray-300 rounded-full hover:bg-red-400 transition duration-300"
          title="Delete"
        >
          🗑
        </button>
      </div>
    );
  };

  // Function to limit the description length
  const limitedDescriptionTemplate = (rowData) => {
    const maxLength = 50; // Set the max number of characters
    const truncatedDescription =
      rowData.description.length > maxLength
        ? rowData.description.substring(0, maxLength) + "..."
        : rowData.description;
    return <span>{truncatedDescription}</span>;
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-6">Manage Surveys</h2>

      {/* Search bar with icon on the left */}
      <div className="relative mb-4 w-[25%]">
        <div className="flex items-center border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
          {/* Icon on the left side */}
          <span className="px-3 text-gray-500">
            <CiSearch className="text-xl" />
          </span>

          {/* Input field without border */}
          <InputText
            placeholder="Search Surveys..."
            onInput={(e) => {
              setFilters({
                ...filters,
                global: {
                  value: e.target.value,
                  matchMode: FilterMatchMode.CONTAINS,
                },
              });
            }}
            className="p-2 w-full focus:outline-none border-none"
          />
        </div>
      </div>

      <DataTable
        className="rounded-lg bg-cyan-400"
        value={data}
        filters={filters}
      >
        <Column field="id" header="ID" sortable />
        <Column field="title" header="Survey Title" sortable />
        <Column
          field="description"
          header="Description"
          body={limitedDescriptionTemplate} // Custom template for description
        />
        <Column field="link" header="Survey Link" sortable />
        <Column body={actionBodyTemplate} header="Actions" />
      </DataTable>
    </div>
  );
};

export default ManageSurvey;
