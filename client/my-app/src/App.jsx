// App.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Patients from './pages/Patients';
import Diseases from './pages/Diseases';
import Appointments from './pages/Appointments';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/doctors" component={Doctors} />
        <Route path="/patients" component={Patients} />
        <Route path="/diseases" component={Diseases} />
        <Route path="/appointments" component={Appointments} />
      </Switch>
    </Router>
  );
}

export default App;
