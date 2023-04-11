import React from "react";
import requests from "../Request";
import { useState, useEffect } from "react";
import axios from "axios";
const Index = () => {
  const [movies, setMovies] = React.useState([]);
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  const truncateString = (string, num) => {
    if (string?.length > num) {
      return string.slice(0, num) + "...";
    } else return string;
  };
  return (
    <>
      <div className="w-full h-[500px] text-black">
        <div className="w-full h-full">
          <div className="absolute w-full h-[500px] bg-gradient-to-r from-black"></div>
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`}
            alt={randomMovie?.title}
          />
          <div className="w-full absolute top-[20%] p-4 md:p-8">
            <h1 className="text-white text-3xl font-bold md:5xl">
              {randomMovie?.title}
            </h1>
            <div className="my-4">
              <button className="border text-red-700 border-black py-2 px-5 bg-white mr-3">
                Play
              </button>
              <button className="border text-white border-white py-2 px-5">
                Watch later
              </button>
            </div>
            <p className="text-white text-xm">
              {" "}
              Release: {randomMovie?.release_date}
            </p>
            <p className="w-full text-gray-400 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[30%]">
              {truncateString(randomMovie?.overview,150 )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
