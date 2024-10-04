import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../DashboardComponent/Header/Header";
import Sidebar from "../DashboardComponent/Sidebar/Sidebar";
import Dashboard from "../DashboardComponent/Side-component/Dashboard";
import Main from "../ui/Main";
import CreateEvent from "../DashboardComponent/Side-component/CreateEvent";
import CreateJob from "../DashboardComponent/Side-component/CreateJob";
import PendingEvent from "../DashboardComponent/Side-component/PendingEvent";
import ManageEvent from "../DashboardComponent/Side-component/ManageEvent";
import CreateDonation from "../DashboardComponent/Side-component/CreateDonation";
import CreateSurvey from "../DashboardComponent/Side-component/CreateSurvey";
import Alumnilist from "../DashboardComponent/Side-component/Alumnilist";
import ManageSurvey from "../DashboardComponent/Side-component/ManageSurvey";
import ManageJob from "../DashboardComponent/Side-component/ManageJob";

function DashboardApp() {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);

  const toogleSidebar = () => {
    setisSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="font-quickSand">
      <Header toogleSidebar={toogleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Main>
        <Routes>
          <Route path="" element={<Dashboard />} />

          <Route path="/createjob" element={<CreateJob />} />

          <Route path="/createevent" element={<CreateEvent />} />
          <Route path="/managejob" element={<ManageJob />} />
          <Route path="/manageevent" element={<ManageEvent />} />
          <Route path="/alumnilist" element={<Alumnilist />} />
          <Route path="/managesurvey" element={<ManageSurvey />} />
          <Route path="/createsurvey" element={<CreateSurvey />} />
          <Route path="/createdonation" element={<CreateDonation />} />
        </Routes>
      </Main>
    </div>
  );
}

export default DashboardApp;
