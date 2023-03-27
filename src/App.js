import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import PatientRegister from "./pages/patientRegister";
import PatientLogin from "./pages/PatientLogin";
import Dashboard from "./pages/Dashboard";
import PatientRegisteration from "./pages/patientRegisteration";
import StaffLogin from "./pages/StaffLogin";

const App = () => {
  const user = localStorage.getItem("token");
  const getUserData = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  return (
    <div className="App">
      <Routes>
        {/* All publically available URLs */}
        <Route path="/patient-login" element={<PatientLogin />} />
        <Route path="/staff-login" element={<StaffLogin />} />
        {/* <Route path="/patient-registration" element={<PatientRegister />} /> */}
        <Route path="/patient-registration" element={<PatientRegisteration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<PatientLogin />} />
        {/* Internal URLs */}
      </Routes>
    </div>
  );
}

export default App;
