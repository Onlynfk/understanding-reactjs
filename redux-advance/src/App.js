import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomePage } from './containers/HomePage';
import userPage from './containers/UserPage';


function App() {
  return (
      <Router>
      <div className="App">
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/user/:userId" component={userPage}/>
        <Route> 404 not found</Route>
    </Switch>
    </div>
      </Router>
    
  );
}

export default App;
