import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainComponent from './modules/MainComponent';
import LoginComponent from './modules/LoginComponent';
import RegisterComponent from './modules/RegisterComponent';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginComponent />
        </Route>
        {/* <Route exact path="/home">
          <HomeComponent />
        </Route>
        <Route exact path="/history">
          <HistoryComponent />
        </Route> */}
        <Route exact path="/register">
          <RegisterComponent />
        </Route>
        <Route>
          <MainComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
