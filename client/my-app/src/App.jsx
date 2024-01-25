// App.jsx
import React from "react";
// Update your import statement
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import Home from "./components/pages/Home";
//import Doctors from "./components/pages/Doctors";
//import Diseases from "./components/pages/Diseases";
//import Appointments from "./components/pages/Appointments";
//import Patients from "./components/pages/Patients";

//const App = () => {
  //return (
    //<Router>
      //<Routes>
        //<Route path="/" exact component={Home} />
        //<Route path="/doctors" component={Doctors} />
        //<Route path="/diseases" component={Diseases} />
        //<Route path="/appointments" component={Appointments} />
        //<Route path="/patients" component={Patients} />
      //</Routes>
    //</Router>
  //);
//};

//export default App;
// App.jsx
//import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "@src/components/pages/Home";
import Doctors from "./components/pages/Doctors";
import Diseases from "./components/pages/Diseases";
import Appointments from "./components/pages/Appointments";
import Patients from "./components/pages/Patients";
import Register from "./components/Auth/Register"; // Import your Register component
import Login from "./components/Auth/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/diseases" element={<Diseases />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;

