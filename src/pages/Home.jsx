import React from "react";
import { Link } from "react-router-dom";

import { OutlineButton } from "../components/button/Button";
import HeroSlide from "../components/hero-slide/HeroSlide";
import MovieList from "../components/movie-list/MovieList";

import { category, movieType, tvType } from "../api/tmdbApi";

import * as Config from "./../constants/Config";

const Home = () => {
  return (
    <>
      <HeroSlide />

      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Movies</h2>
            <Link to={`/${Config.HOME_PAGE}/movie`}>
<<<<<<< HEAD
              <OutlineButton className="small">show all</OutlineButton>
=======
              <OutlineButton className="small">View more</OutlineButton>
>>>>>>> 93b04b535e836a6c9ad8fe4c097824d3a81126de
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
<<<<<<< HEAD
=======
            <h2>Top Rated Movies</h2>
            <Link to={`/${Config.HOME_PAGE}/movie`}>
              <OutlineButton className="small">show all</OutlineButton>
            </Link>
>>>>>>> 93b04b535e836a6c9ad8fe4c097824d3a81126de
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
<<<<<<< HEAD
            <h2>Trending Channel</h2>
=======
<<<<<<< HEAD
            <h2>Trending Chanell</h2>
=======
            <h2>Trending TV</h2>
>>>>>>> 50736c714a2c80c4d582ba08af8ef2207a35569a
>>>>>>> 93b04b535e836a6c9ad8fe4c097824d3a81126de
            <Link to={`/${Config.HOME_PAGE}/tv`}>
              <OutlineButton className="small">show all</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>

        <div className="section mb-3">
<<<<<<< HEAD
=======
          <div className="section__header mb-2">
<<<<<<< HEAD
            <h2>Top Rated Chanell</h2>
=======
            <h2>Top Rated TV</h2>
>>>>>>> 50736c714a2c80c4d582ba08af8ef2207a35569a
            <Link to={`/${Config.HOME_PAGE}/tv`}>
              <OutlineButton className="small">show all</OutlineButton>
            </Link>
          </div>
>>>>>>> 93b04b535e836a6c9ad8fe4c097824d3a81126de
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </>
  );
};

export default Home;
