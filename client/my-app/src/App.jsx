// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "@src/components/pages/Home";
import Doctors from "./components/pages/Doctors";
import Diseases from "./components/pages/Diseases";
import Appointments from "./components/pages/Appointments";
import Patients from "./components/pages/Patients";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import { isLoggedIn } from "@src/components/services/api";

const App = () => {
  const PrivateRoute = ({ element, path }) => {
    return isLoggedIn() ? element : <Navigate to="/login" replace />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {isLoggedIn() && (
          <>
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/diseases" element={<Diseases />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/patients" element={<Patients />} />
          </>
        )}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
