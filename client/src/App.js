import React from "../node_modules/react";
import { BrowserRouter as Router, Route } from "../node_modules/react-router-dom";
import Discover from "./pages/Discover";
import DiscoverArtist from "./pages/DiscoverArtist";
import Favorites from "./pages/Favorites";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import CarouselEx from "./pages/CarouselEx";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discoverartist" component={DiscoverArtist} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/Favorites" component={Favorites} />
          <Route exact path="/CarouselEx" component={CarouselEx} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
