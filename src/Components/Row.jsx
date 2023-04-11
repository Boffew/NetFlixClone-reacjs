import axios from "axios";
import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useState, useEffect } from "react";
import Movie from "./Movie";

const Row = ({ title, fetchURL, RowID }) => {
  const [movies, setMovies] = useState([]);
 

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  console.log(movies);

  const SlideLeft=()=>{
    var slider= document.getElementById("slider"+RowID);
    slider.scrollLeft= slider.scrollLeft -500
  }
  const SlideRight=()=>{
    var slider= document.getElementById("slider"+RowID);
    slider.scrollLeft= slider.scrollLeft +500
  }
  
  return (
    <>
      <h2 className="font-bold capitalize p-4 md:text-xl ">{title}</h2>
      <div className="relative flex items-center group">
      <MdChevronLeft onClick={SlideLeft}   className=' bg-gray-200 left-0 rounded-full absolute opacity-90 hover:opacity-100 cursor-pointer z-10 group-hover:visible invisible' size={40}/>
        <div id={"slider"+RowID} className='w-full overflow-x-scroll whitespace-nowrap h-full scroll-smooth scrollbar-hide relative'>
          {movies.map((movie, index) => (
           <Movie key={index} movie={movie}/>
          ))}
        </div>
        <MdChevronRight onClick={SlideRight} size={40} className='bg-gray-200 right-0 rounded-full absolute opacity-50 hover:opacity-95 cursor-pointer z-10 group-hover:visible invisible'/>
      </div>
    </>
  );
};

export default Row;
