import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './registrationbackend'; 

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Registration} />
        {}
      </Switch>
    </Router>
  );
};

export default App;
