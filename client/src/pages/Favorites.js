import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import FavCard from "../components/FavCard";
import Wrapper from "../components/Wrapper";
import FavoriteResult from "../components/Favorite";

function Favorites() {
  return (
    <div>
      <Wrapper>
        <FavCard />
        <FavoriteResult />
      </Wrapper>
    </div>
  );
}

export default Favorites;
