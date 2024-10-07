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

const ManageDonations = () => {
    const [donations, setDonations] = useState([]);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    const [editingDonation, setEditingDonation] = useState(null); // State for donation being edited
    const [showDialog, setShowDialog] = useState(false); // State to control dialog visibility
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        // Simulate fetching data from an API
        setTimeout(() => {
            setDonations([
                {
                    id: 1,
                    title: "School Building Fund",
                    organizer: "Alumni Association",
                    description: "We are raising funds to build a new school building that will serve more students in the community and provide them with modern facilities and better learning conditions.",
                },
                {
                    id: 2,
                    title: "Library Renovation",
                    organizer: "Admin",
                    description: "Our library needs renovation to upgrade the infrastructure and provide a more conducive environment for students to study and access resources.",
                },
                {
                    id: 3,
                    title: "Sports Equipment",
                    organizer: "Sports Department",
                    description: "This donation is to support the purchase of new sports equipment, uniforms, and accessories for our school teams.",
                },
            ]);
            setLoading(false); // Set loading to false once data is fetched
        }, 1000); // Simulate 1 second delay for data fetching
    }, []);

    // Function to limit description length for display
    const descriptionBodyTemplate = (rowData) => {
        return rowData.description.length > 100
            ? `${rowData.description.slice(0, 100)}...`
            : rowData.description;
    };

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

    const handleEdit = (donation) => {
        setEditingDonation(donation); // Set the donation to be edited
        setShowDialog(true); // Show the dialog
    };

    const handleDelete = (id) => {
        setDonations(donations.filter((donation) => donation.id !== id));
        toast.success("Donation deleted successfully!", { autoClose: 3000 });
    };

    const handleSave = () => {
        if (editingDonation) {
            const updatedDonations = donations.map((donation) =>
                donation.id === editingDonation.id ? editingDonation : donation
            );
            setDonations(updatedDonations);
            setShowDialog(false);
            setEditingDonation(null);
            toast.success("Donation updated successfully!", { autoClose: 3000 });
        }
    };

    return (
        <div className="w-full">
            <ToastContainer />
            <h2 className="text-2xl font-semibold mb-6">Manage Donations</h2>

            {/* Search bar with icon on the left */}
            <div className="relative mb-4 w-[25%]">
                <div className="flex items-center rounded-lg shadow-sm">
                    <span className="px-3 text-gray-500">
                        <CiSearch className="text-xl" />
                    </span>

                    <InputText
                        placeholder="Search Donations..."
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
                    value={donations}
                    filters={filters}
                >
                    <Column field="id" header="ID" sortable />
                    <Column field="title" header="Donation Title" sortable />
                    <Column field="organizer" header="Organizer" sortable />
                    <Column body={descriptionBodyTemplate} header="Description" />
                    <Column body={actionBodyTemplate} header="Actions" />
                </DataTable>
            )}

            {/* Dialog for editing donation */}
            <Dialog
                header="Edit Donation"
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
                {editingDonation && (
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
                                value={editingDonation.title}
                                onChange={(e) =>
                                    setEditingDonation({ ...editingDonation, title: e.target.value })
                                }
                                className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor="organizer"
                                className="block text-gray-700 font-semibold"
                            >
                                Organizer
                            </label>
                            <input
                                id="organizer"
                                value={editingDonation.organizer}
                                onChange={(e) =>
                                    setEditingDonation({
                                        ...editingDonation,
                                        organizer: e.target.value,
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
                                value={editingDonation.description}
                                onChange={(e) =>
                                    setEditingDonation({
                                        ...editingDonation,
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

export default ManageDonations;
