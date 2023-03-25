import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import PatientRegister from "./pages/patientRegister";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PatientRegisteration from "./pages/patientRegisteration";

const App = () => {
  const user = localStorage.getItem("token");
  const getUserData = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  return (
    <div className="App">
      <Routes>
        {/* All publically available URLs */}
        <Route path="/login" element={<Login />} />
        <Route path="/patient-registration" element={<PatientRegister />} />
        <Route path="/patient-registration-page" element={<PatientRegisteration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
        {/* Internal URLs */}
      </Routes>
    </div>
  );
}

export default App;
