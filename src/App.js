import React from 'react';
import  Navigationbar  from './components/Navigationbar';
import './App.css';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import pages
import Home from './components/pages/Home';
import  Akademii from './components/pages/Akademii';
import Pagenotfound from './components/pages/Pagenotfound';
import Calendar from './components/pages/Calendar';
import Eventspace from './components/pages/Eventspace';




function App() {
  return (
    <React.Fragment>
      <Router>
      <Navigationbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/akademii" component={Akademii}></Route>
        <Route path="/calendar" component={Calendar}></Route>
        <Route path="/eventspace" component={Eventspace}></Route>
        <Route component={Pagenotfound}></Route>
      </Switch>
      <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
