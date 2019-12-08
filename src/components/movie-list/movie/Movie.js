import React from 'react';
import style from './movie.module.css'

// render each record receive from parent component
const Movie = ({ movie }) => {
    return (
        <div className="card text-white bg-dark mt-5">
            <h3 className="card-header bg-darkorange">{movie.title} ({movie.release_year})</h3>
            {!!movie.actors && (
                <div className="card-body">
                    <h5 className="card-title">Actors</h5>
                    <ol className="card-text">
                        {movie.actors.map(actor => (
                            <li key={actor}>{actor}</li>
                        ))}
                    </ol>
                </div>
            )}
            {!!movie.locations.length && (
                <div className="card-body">
                    <h5 className="card-title">Locations</h5>
                    <ul className="card-text">
                        {movie.locations.map(location => (
                            <li key={location}>{location}</li>
                        ))}
                    </ul>
                </div>
            )}
            {!!movie.fun_facts && (
                <div className="card-body">
                    <h5 className="card-title">{movie.fun_facts}</h5>
                </div>
            )}
        </div>
    )
}

export default Movie;
