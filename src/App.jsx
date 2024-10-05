import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./Pages/Navbar";
import Alumni from "./Pages/Alumni";
import Job from "./Pages/Job";
import Donation from "./Pages/Donation";
import Survey from "./Pages/Survey";
import Home from "./Pages/Home";
import Event from "./Pages/Event";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import CreateAccount from "./Pages/CreateAccount";
import DashboardApp from "./Pages/DasboardApp";
import JobApplication from "./Pages/JobApplication";
import DonationForm from "./Pages/DonationForm";

function App() {
  const location = useLocation();

  const isDashboardRoute = location.pathname.includes("/dashboard");

  return (
    <>
      {!isDashboardRoute ? (
        <div className="mx-4 sm:mx-[10%]">
          {!isDashboardRoute && <NavBar />}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<Event />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/job" element={<Job />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/donations/:donationId/donate" element={<DonationForm />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/jobs/:jobId/apply" element={<JobApplication />} />
            <Route path="/dashboard/*" element={<DashboardApp />} />
          </Routes>

          {!isDashboardRoute && <Footer />}
        </div>
      ) : (
        <Routes>
          <Route path="/dashboard/*" element={<DashboardApp />} />
        </Routes>
      )}
    </>
  );
}

export default App;
