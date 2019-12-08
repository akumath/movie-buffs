import React from 'react'
import Movie from './movie/Movie'

// Receive data and pass it to child component in loop
const MovieList = ({filteredData}) => {
    console.log(filteredData)
    const movieList = filteredData.length > 0 ? (filteredData.map(movie => (
        <Movie key={movie.title} movie={movie}/>
    ))) : [];
    return (
        <React.Fragment>
            { movieList }
        </React.Fragment>
    )
}

export default MovieList;
