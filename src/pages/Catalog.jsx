import React from "react";

import { useParams } from "react-router";
import MovieGrid from "../components/movie-grid/MovieGrid";

import PageHeader from "../components/page-header/PageHeader";

import { category as cate } from "./../api/tmdbApi";

const Catalog = () => {
  const { category } = useParams();

  console.log(category);

  return (
    <>
      <PageHeader>
<<<<<<< HEAD
        {category === cate.movie ? "Movies" : "Chanell Tv"}
=======
        {category === cate.movie ? "Movies" : "TV Series"}
>>>>>>> 50736c714a2c80c4d582ba08af8ef2207a35569a
      </PageHeader>

      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  );
};

export default Catalog;
