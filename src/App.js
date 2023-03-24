import PatientRegister from "./pages/patientRegister";
import Login from "./pages/Login";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
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

        {/* Internal URLs */}
      </Routes>
    </div>
  );
}

export default App;
