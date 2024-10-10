import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";

const CreateDonation = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [organizer, setOrganizer] = useState(""); // New state for organizer
  const [donationImage, setDonationImage] = useState(null);

  const handleImageChange = (e) => {
    setDonationImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ title, description, organizer, donationImage });
  };

  return (
    <div className="container flex items-center justify-center">
      <div className="bg-white border rounded-xl p-8 w-full md:w-4/5 lg:w-3/5">
        <h2 className="text-2xl font-semibold mb-6 text-center">Create Donation</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Donation Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Donation Title
            </label>
            <input
              type="text"
              id="title"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          {/* Organizer (New Input) */}
          <div>
            <label htmlFor="organizer" className="block text-sm font-medium text-gray-700">
              Organizer
            </label>
            <input
              type="text"
              id="organizer"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={organizer}
              onChange={(e) => setOrganizer(e.target.value)}
              placeholder="Enter the name of the organizer"
              required
            />
          </div>

          {/* Donation Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Upload Donation Image</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-md">
              <div className="space-y-1 text-center">
                <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="text-sm text-gray-600">
                  <label htmlFor="donationImage" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                    <span>Upload a file</span>
                    <input id="donationImage" name="donationImage" type="file" className="sr-only" onChange={handleImageChange} />
                  </label>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
              </div>
            </div>
          </div>

          {/* Create Donation Button */}
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg w-full sm:w-auto">
              Create Donation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDonation;
