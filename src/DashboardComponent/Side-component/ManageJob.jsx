import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { Button } from "primereact/button";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { CiSearch } from "react-icons/ci"; // Search icon
import { Dialog } from "primereact/dialog"; // Dialog for editing
import { AiFillEdit } from "react-icons/ai"; // Edit icon
import { BiTrash } from "react-icons/bi"; // Trash icon
import { ToastContainer, toast } from "react-toastify"; // Using react-toastify
import "react-toastify/dist/ReactToastify.css";

const ManageJob = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const [editingJob, setEditingJob] = useState(null); // State to hold the job being edited
  const [showDialog, setShowDialog] = useState(false); // State to control dialog visibility
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setJobs([
        {
          id: 1,
          title: "Software Engineer",
          location: "Remote",
          description:
            "Looking for a Software Engineer with 3+ years of experience.",
        },
        {
          id: 2,
          title: "Project Manager",
          location: "New York",
          description: "Seeking a Project Manager for an upcoming project.",
        },
        {
          id: 3,
          title: "UI/UX Designer",
          location: "San Francisco",
          description: "UI/UX Designer needed for our design team.",
        },
      ]);
      setLoading(false); // Set loading to false once data is fetched
    }, 1000); // Simulate 1 second delay for data fetching
  }, []);

  const actionBodyTemplate = (rowData) => {
    return (
      <div className="flex gap-2">
        <Button
          icon={<AiFillEdit className="text-xl" />} // Using AiFillEdit for the Edit icon
          onClick={() => handleEdit(rowData)}
          className="p-button-rounded p-button-warning"
        />
        <Button
          icon={<BiTrash className="text-xl" />} // Using BiTrash for Delete icon
          onClick={() => handleDelete(rowData.id)}
          className="p-button-rounded p-button-danger"
        />
      </div>
    );
  };

  const handleEdit = (job) => {
    setEditingJob(job); // Set the job to be edited
    setShowDialog(true); // Show the dialog
  };

  const handleDelete = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
    toast.success("Job deleted successfully!", { autoClose: 3000 });
  };

  const handleSave = () => {
    if (editingJob) {
      const updatedJobs = jobs.map((job) =>
        job.id === editingJob.id ? editingJob : job
      );
      setJobs(updatedJobs);
      setShowDialog(false);
      setEditingJob(null);
      toast.success("Job updated successfully!", { autoClose: 3000 });
    }
  };

  return (
    <div className="w-full">
      <ToastContainer />
      <h2 className="text-2xl font-semibold mb-6">Manage Jobs</h2>

      {/* Search bar with icon on the left */}
      <div className="relative mb-4 w-[25%]">
        <div className="flex items-center rounded-lg shadow-sm">
          <span className="px-3 text-gray-500">
            <CiSearch className="text-xl" />
          </span>

          <InputText
            placeholder="Search Jobs..."
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

      {loading ? ( // Show a loading message while fetching data
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <DataTable
          className="rounded-lg bg-cyan-400"
          value={jobs}
          filters={filters}
        >
          <Column field="id" header="ID" sortable />
          <Column field="title" header="Job Title" sortable />
          <Column field="location" header="Job Location" sortable />
          <Column body={actionBodyTemplate} header="Actions" />
        </DataTable>
      )}

      {/* Dialog for editing job */}
      <Dialog
        header="Edit Job"
        visible={showDialog}
        onHide={() => setShowDialog(false)}
        style={{ width: "50vw" }}
        footer={
          <div>
            <Button
              label="Cancel"
              icon="pi pi-times"
              onClick={() => setShowDialog(false)}
              className="p-button-text"
            />
            <Button label="Save" icon="pi pi-check" onClick={handleSave} />
          </div>
        }
      >
        {editingJob && (
          <div className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="title"
                className="block text-gray-700 font-semibold"
              >
                Title
              </label>
              <input
                id="title"
                value={editingJob.title}
                onChange={(e) =>
                  setEditingJob({ ...editingJob, title: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="location"
                className="block text-gray-700 font-semibold"
              >
                Location
              </label>
              <input
                id="location"
                value={editingJob.location}
                onChange={(e) =>
                  setEditingJob({
                    ...editingJob,
                    location: e.target.value,
                  })
                }
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="description"
                className="block text-gray-700 font-semibold"
              >
                Description
              </label>
              <textarea
                id="description"
                value={editingJob.description}
                onChange={(e) =>
                  setEditingJob({
                    ...editingJob,
                    description: e.target.value,
                  })
                }
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}
      </Dialog>
    </div>
  );
};

export default ManageJob;
