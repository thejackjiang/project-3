import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

import DiscoverArtist from "./pages/DiscoverArtist";
import Favorites from "./pages/Favorites";
import signup from "./pages/Signup";

import Landing from "./pages/Landing";
import Search from "./pages/Search";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import SingleEvent from './pages/SingleEvent';
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
              <Route exact path="/discoverartist" component={DiscoverArtist} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/Favorites" component={Favorites} />
              <Route exact path="/singleEvent" component={SingleEvent} />
        </div>
    </Router>
    , document.getElementById('root')
);
