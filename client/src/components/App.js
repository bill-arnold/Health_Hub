import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ListDoctors from './components/ListDoctors';
import ListPatients from './components/ListPatients';
import ListDiseases from './components/ListDiseases';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/doctors" exact component={ListDoctors} />
        <Route path="/patients" exact component={ListPatients} />
        <Route path="/diseases" exact component={ListDiseases} />
        {/* Add more routes for your components */}
      </Switch>
    </Router>
  );
}

export default App;
