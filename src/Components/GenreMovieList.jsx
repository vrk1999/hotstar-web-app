import React from 'react'
import GenresList from '../Constant/GenresList'

const GenreMovieList = () => {
  return (
    <div>
     {GenresList.genere.map((item)=>index<=4&&(
        <div>
            <h2>{item.name}</h2>
        </div>
     ))}
    </div>
  )
}

export default GenreMovieList