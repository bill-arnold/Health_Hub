// App.js
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Dashboard from './components/Dashboard';
import DetailView from './components/DetailView';
import InteractiveForm from './components/InteractiveForm';
import ListView from './components/ListView';
import Login from './components/Login';
import Register from './components/Register';
import ScheduleAppointment from './components/ScheduleAppointment';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        {/* Add other routes here */}
      </Switch>
    </Router>
  );
}

export default App;
