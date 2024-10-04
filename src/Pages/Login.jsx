import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.userType) newErrors.userType = "Please select a user type"; // Validation for userType
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email: formData.email,
        password: formData.password,
        user_type: formData.userType,
      });

      if (response.status === 200) {
        const { data } = response;

        // Assuming response contains user data, e.g., name and user_type
        localStorage.setItem("user", JSON.stringify(data));

        navigate("/");
      } else {
        throw new Error("Failed to log in");
      }
    } catch (error) {
      setApiError(
        "Error logging in: " + (error.response?.data?.message || error.message)
      );
      console.error("Error logging in:", error);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full md:w-2/3 border border-spacing-8 bg-white p-8 rounded-3xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Login</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
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
                placeholder="********"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* User Type */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              User Type <span className="text-red-600">*</span>
            </label>
            <div className="relative ">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                className={`w-[50%] pl-10 px-4 py-2 border rounded-md text-gray-700 ${
                  errors.userType ? "border-red-500" : ""
                }`}
              >
                <option value="">Select User Type</option>
                <option value="Student">Current Student</option>
                <option value="Alumni">Alumni</option>
              </select>
            </div>
            {errors.userType && (
              <p className="text-red-500 text-xs mt-1">{errors.userType}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>

          {apiError && (
            <p className="text-red-500 text-center mt-4">{apiError}</p>
          )}
        </form>

        <div className="mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/createaccount" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
