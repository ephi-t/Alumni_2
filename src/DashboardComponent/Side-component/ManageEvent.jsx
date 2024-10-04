import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { CiSearch } from "react-icons/ci"; // Search icon
import { Button } from "primereact/button"; // Button for actions
import { Dialog } from "primereact/dialog"; // Dialog for editing
import { InputTextarea } from "primereact/inputtextarea"; // InputTextarea for description
import { AiFillEdit } from "react-icons/ai"; // New Edit icon
import { BiTrash } from "react-icons/bi"; // Trash icon
import { ToastContainer, toast } from "react-toastify"; // Using react-toastify
import "react-toastify/dist/ReactToastify.css";

const ManageEvent = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Annual Meeting",
      time: "2024-10-15T10:00",
      location: "New York City",
      description: "Annual meeting for all staff members.",
    },
    {
      id: 2,
      title: "Charity Run",
      time: "2024-11-01T08:00",
      location: "Addis Ababa",
      description: "Charity run to support local schools.",
    },
    {
      id: 3,
      title: "Tech Conference",
      time: "2024-12-05T09:30",
      location: "Bahir Dar",
      description: "Tech conference with various speakers.",
    },
  ]);

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const [editingEvent, setEditingEvent] = useState(null); // State to hold the event being edited
  const [showDialog, setShowDialog] = useState(false); // State to control dialog visibility

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

  const handleEdit = (event) => {
    setEditingEvent(event); // Set the event to be edited
    setShowDialog(true); // Show the dialog
  };

  const handleDelete = (id) => {
    setEvents(events.filter((event) => event.id !== id));
    toast.success("Event deleted successfully!", { autoClose: 3000 });
  };

  const handleSave = () => {
    if (editingEvent) {
      const updatedEvents = events.map((event) =>
        event.id === editingEvent.id ? editingEvent : event
      );
      setEvents(updatedEvents);
      setShowDialog(false);
      setEditingEvent(null);
      toast.success("Event updated successfully!", { autoClose: 3000 });
    }
  };

  return (
    <div className="w-full">
      <ToastContainer />
      <h2 className="text-2xl font-semibold mb-6">Manage Events</h2>

      {/* Search bar with icon on the left */}
      <div className="relative mb-4 w-[25%]">
        <div className="flex items-center rounded-lg shadow-sm">
          <span className="px-3 text-gray-500">
            <CiSearch className="text-xl" />
          </span>

          <InputText
            placeholder="Search Events..."
            onInput={(e) => {
              setFilters({
                ...filters,
                global: {
                  value: e.target.value,
                  matchMode: FilterMatchMode.CONTAINS,
                },
              });
            }}
            className="p-2 w-full focus:outline-none border-none" // Removed the border from the input
          />
        </div>
      </div>

      <DataTable
        className="rounded-lg bg-cyan-400"
        value={events}
        filters={filters}
      >
        <Column field="id" header="ID" sortable />
        <Column field="title" header="Event Title" sortable />
        <Column field="time" header="Event Time" sortable />
        <Column field="location" header="Event Location" sortable />
        <Column body={actionBodyTemplate} header="Actions" />
      </DataTable>

      {/* Dialog for editing event */}
      <Dialog
        header="Edit Event"
        visible={showDialog}
        onHide={() => setShowDialog(false)}
        style={{ width: "50vw" }} // Dialog width and padding
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
        {editingEvent && (
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
                value={editingEvent.title}
                onChange={(e) =>
                  setEditingEvent({ ...editingEvent, title: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="time"
                className="block text-gray-700 font-semibold"
              >
                Time
              </label>
              <input
                id="time"
                value={editingEvent.time}
                onChange={(e) =>
                  setEditingEvent({ ...editingEvent, time: e.target.value })
                }
                type="datetime-local"
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
                value={editingEvent.location}
                onChange={(e) =>
                  setEditingEvent({ ...editingEvent, location: e.target.value })
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
                value={editingEvent.description}
                onChange={(e) =>
                  setEditingEvent({
                    ...editingEvent,
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

export default ManageEvent;
