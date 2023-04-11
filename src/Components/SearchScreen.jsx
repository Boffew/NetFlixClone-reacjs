import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Movie from "./Movie";
const SearchScreen = ({ searchVisibility }) => {
  const [inputSearch, setInputSearch] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=6c5920515a26cabca1f67c246b7cdc68&query=${inputSearch}`
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, [inputSearch]);
  return (
    <>
      {searchVisibility ? (
        <>
          <div className="w-screen h-screen fixed bg-black opacity-90 text-5xl z-50 text-center flex flex-col justify-items-start place-items-center text-white pt-20 gap-2">
            <p className="text-white text-3xl">Search Something</p>
            <input
              type="text"
              className="w-1/2 text-black bg-gradient-to-r from-gray-500 to-gray-900 rounded-3xl"
              value={inputSearch}
              onChange={(e) => {
                setInputSearch(e.target.value);
              }}
            />
            <div className="flex flex-row">
              {movies.map((movie, key) => (
                <div className="">
                  <Movie movie={movie} key={key} />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default SearchScreen;
