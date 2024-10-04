import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaVenusMars } from "react-icons/fa";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    middleName: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
    userType: "",
    file: null,
  });

  const [errors, setErrors] = useState({});
  const [showStudentUpload, setShowStudentUpload] = useState(false);
  const [showAlumniUpload, setShowAlumniUpload] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      file: e.target.files[0],
    }));
  };

  const handleUserTypeChange = (e) => {
    const type = e.target.value;
    setFormData((prev) => ({
      ...prev,
      userType: type,
    }));

    if (type === "Student") {
      setShowStudentUpload(true);
      setShowAlumniUpload(false);
    } else if (type === "Alumni") {
      setShowStudentUpload(false);
      setShowAlumniUpload(true);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.middleName) newErrors.middleName = "Middle Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.userType) newErrors.userType = "User Type is required";

    if (formData.userType === "Student" && !formData.file) {
      newErrors.file = "Student ID image is required";
    }
    if (formData.userType === "Alumni" && !formData.file) {
      newErrors.file = "Alumni tempo image is required";
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("lastName", formData.lastName);
    formDataToSubmit.append("firstName", formData.firstName);
    formDataToSubmit.append("middleName", formData.middleName);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("gender", formData.gender);
    formDataToSubmit.append("password", formData.password);
    formDataToSubmit.append("userType", formData.userType);
    if (formData.file) {
      formDataToSubmit.append("file", formData.file);
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: formDataToSubmit,
      });

      if (!response.ok) {
        throw new Error("Failed to create account");
      }

      const result = await response.json();
      console.log("Account created successfully:", result);
    } catch (error) {
      console.error("Error submitting the form:", error.message);
    }
  };

  return (
    <section className=" mt-10 px-6 md:px-10 lg:px-20 flex flex-col items-center justify-center min-h-screen bg-[rgb(255, 255, 255);]">
      <div className="w-full md:w-2/3 bg-white p-8 border border-spacing-4">
        <h2 className="text-3xl font-bold text-blue-600  mb-6">
          Create Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Last Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Last Name <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full pl-10 px-4 py-2 border rounded-md text-gray-700 ${
                  errors.lastName ? "border-red-500" : ""
                }`}
                placeholder="Last Name"
              />
            </div>
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
            )}
          </div>

          {/* First Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              First Name <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full pl-10 px-4 py-2 border rounded-md text-gray-700 ${
                  errors.firstName ? "border-red-500" : ""
                }`}
                placeholder="First Name"
              />
            </div>
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>

          {/* Middle Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Middle Name <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                className={`w-full pl-10 px-4 py-2 border rounded-md text-gray-700 ${
                  errors.middleName ? "border-red-500" : ""
                }`}
                placeholder="Middle Name"
              />
            </div>
            {errors.middleName && (
              <p className="text-red-500 text-xs mt-1">{errors.middleName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-10 px-4 py-2 border rounded-md text-gray-700 ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="example@example.com"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Gender <span className="text-red-600">*</span>
            </label>
            <div>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md text-gray-700 ${
                  errors.gender ? "border-red-500" : ""
                }`}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            {errors.gender && (
              <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
            )}
          </div>

          {/* User Type */}
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              User Type <span className="text-red-600">*</span>
            </label>
            <div>
              <select
                name="userType"
                value={formData.userType}
                onChange={handleUserTypeChange}
                className={`w-full px-4 py-2 border rounded-md text-gray-700 ${
                  errors.userType ? "border-red-500" : ""
                }`}
              >
                <option value="">Select User Type</option>
                <option value="Student">Student</option>
                <option value="Alumni">Alumni</option>
              </select>
            </div>
            {errors.userType && (
              <p className="text-red-500 text-xs mt-1">{errors.userType}</p>
            )}
          </div>

          {/* Upload Fields */}
          {showStudentUpload && (
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Upload Student ID <span className="text-red-600">*</span>
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full border px-4 py-2 rounded-md text-gray-700"
              />
              {errors.file && (
                <p className="text-red-500 text-xs mt-1">{errors.file}</p>
              )}
            </div>
          )}

          {showAlumniUpload && (
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Upload Alumni Tempo Image{" "}
                <span className="text-red-600">*</span>
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full border px-4 py-2 rounded-md text-gray-700"
              />
              {errors.file && (
                <p className="text-red-500 text-xs mt-1">{errors.file}</p>
              )}
            </div>
          )}

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full pl-10 px-4 py-2 border rounded-md text-gray-700 ${
                  errors.password ? "border-red-500" : ""
                }`}
                placeholder="Password"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Confirm Password <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full pl-10 px-4 py-2 border rounded-md text-gray-700 ${
                  errors.confirmPassword ? "border-red-500" : ""
                }`}
                placeholder="Confirm Password"
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-4"
          >
            Create Account
          </button>
        </form>
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            Already Have an Account?
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
          <p className="text-sm text-gray-600"></p>
        </div>
      </div>
    </section>
  );
};

export default CreateAccount;
