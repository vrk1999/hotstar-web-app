import React from "react";
import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const Slider = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };
  return (
    <div>
      {movieList.map((item, index) => (
        <img
          src={IMAGE_BASE_URL + item.backdrop_path}
          className="min-w-full h-[310px]"
          alt="."
        />
      ))}
    </div>
  );
};

export default Slider;
