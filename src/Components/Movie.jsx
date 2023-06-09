import React from "react";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
const Movie = ({ key, movie }) => {
  const [like, setLike] = useState(false);
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full block h-auto"
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-white/70 opacity-0 hover:opacity-100 text-black">
        <p className="whitespace-normal text-xs md:text-xm flex font-bold justify-center items-center h-full text-center">
          {" "}
          {movie?.title}
        </p>
        <p>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-black" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-500" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
