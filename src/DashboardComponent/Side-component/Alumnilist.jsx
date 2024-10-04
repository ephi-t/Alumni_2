import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { CiSearch } from "react-icons/ci"; // Importing the search icon

const Alumnilist = () => {
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const data = [
    {
      id: 1,
      image: "https://via.placeholder.com/50", // Sample image URL
      firstName: "John",
      lastName: "Doe",
      department: "Computer Science",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/50", // Sample image URL
      firstName: "Jane",
      lastName: "Smith",
      department: "Electrical Engineering",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/50", // Sample image URL
      firstName: "Alice",
      lastName: "Johnson",
      department: "Mechanical Engineering",
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

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-6">Manage Alumni</h2>

      {/* Search bar with icon on the left */}
      <div className="relative mb-4 w-[25%]">
        <div className="flex items-center border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
          {/* Icon on the left side */}
          <span className="px-3 text-gray-500">
            <CiSearch className="text-xl" />
          </span>

          {/* Input field without border */}
          <InputText
            placeholder="Search Alumni..."
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
        <Column
          field="image"
          header="Image"
          body={(rowData) => (
            <img
              src={rowData.image}
              alt="Alumni"
              className="w-12 h-12 rounded-full"
            />
          )}
        />
        <Column field="firstName" header="First Name" sortable />
        <Column field="lastName" header="Last Name" sortable />
        <Column field="department" header="Department" sortable />
        <Column body={actionBodyTemplate} header="Actions" />
      </DataTable>
    </div>
  );
};

export default Alumnilist;
