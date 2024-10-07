import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";

const CreateSurvey = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [creator, setCreator] = useState(""); 
  const [surveyImage, setSurveyImage] = useState(null);

  const handleImageChange = (e) => {
    setSurveyImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const surveyData = { title, description, link, creator, surveyImage };
    console.log(surveyData);
    // Add API call here
  };

  return (
    <div className="container flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-4/5 lg:w-3/5">
        <h2 className="text-2xl font-semibold mb-6 text-center">Create Survey</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Survey Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Survey Title
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

          {/* External Link */}
          <div>
            <label htmlFor="link" className="block text-sm font-medium text-gray-700">
              Survey Link
            </label>
            <input
              type="url"
              id="link"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Enter external survey link"
              required
            />
          </div>

          {/* Survey Creator (New Input) */}
          <div>
            <label htmlFor="creator" className="block text-sm font-medium text-gray-700">
              Survey Creator
            </label>
            <input
              type="text"
              id="creator"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={creator}
              onChange={(e) => setCreator(e.target.value)}
              placeholder="Enter the name of the survey creator"
              required
            />
          </div>

          {/* Survey Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Upload Survey Image</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-md">
              <div className="space-y-1 text-center">
                <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="text-sm text-gray-600">
                  <label htmlFor="surveyImage" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                    <span>Upload a file</span>
                    <input id="surveyImage" name="surveyImage" type="file" className="sr-only" onChange={handleImageChange} />
                  </label>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg w-full sm:w-auto">
              Create Survey
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSurvey;
