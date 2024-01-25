// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Doctors from "./components/pages/Doctors";
import Diseases from "./components/pages/Diseases";
import Appointments from "./components/pages/Appointments";
import Patients from "./components/pages/Patients";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/doctors" component={Doctors} />
        <Route path="/diseases" component={Diseases} />
        <Route path="/appointments" component={Appointments} />
        <Route path="/patients" component={Patients} />
      </Switch>
    </Router>
  );
};

export default App;
