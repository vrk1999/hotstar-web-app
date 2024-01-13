import React from 'react'
import { useEffect, useState } from 'react'
import GlobalApi from './Services/GlobalApi'
const Slider = () => {
    const [movieList, setMovieList] = useState([]);

    useEffect(()=>{
    getTrendingMovies();
    },[])
    
    const getTrendingMovies = ()=>{
    
        GlobalApi.getTrendingVideos.then(resp=>{
          console.log(resp.data.results);
          setMovieList(resp.data.results)
        }) 
    }
  return (
    <div>
        {movieList}
    </div>
  )
}

export default Slider