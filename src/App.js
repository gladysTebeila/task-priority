
import './App.css';
import Login from './login';
import Register from './register';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Router>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/register"></Route>
          </Switch>
        </Router>

        <Login></Login>
        <Register></Register>
      </header>
    </div>
  );
}

export default App;
