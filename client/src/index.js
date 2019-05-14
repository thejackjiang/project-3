import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

import EventList from "./pages/EventList";
import Favorites from "./pages/Favorites";
import signup from "./pages/Signup";

import Landing from "./pages/Landing";
import Search from "./pages/Search";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
// import CarouselEx from "./pages/CarouselEx";
// Our Components
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';

// Here is if we have an id_token in localStorage
if(localStorage.getItem("id_token")) {
  // then we will attach it to the headers of each request from react application via axios
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}

ReactDOM.render(
    <Router>
        <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/Landing" component={Landing} />
          <Route exact path="/Eventlist" component={EventList} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/Favorites" component={Favorites} />
          {/* <Route exact path="/CarouselEx" component={CarouselEx} /> */}
        </div>
    </Router>
    , document.getElementById('root')
);
