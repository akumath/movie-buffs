import React, { useState, useEffect } from 'react';
import movieDataService from './services/movieDataService';
import Types from './types';
import Search from './components/search/Search';

const App: React.FC = () => {
  const [movieList, setMovieList] = useState<Types.MovieInterface[]>([]);

  const [ search, setSearch ] = useState('');

  const [ sort, setSort ] = useState('')

  const handleSearch = (e:any) => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  const handleSort = (e:any) => {
    console.log(e.target.value)
    setSort(e.target.value)
    console.log(sort)
  }

  let filteredData = movieList.filter(
    movie => movie.title.indexOf(search) !== -1
  )

  // const sortedData = movieList.sort((a,b) => {
  //   if(sort === 'Accending') {
      
  //   }
  // })

  useEffect(() => {
    movieDataService.get().then(dataOrError => {
      const isData = Array.isArray(dataOrError);
      if (isData) {
        setMovieList(dataOrError);
      }
    });
  }, []);

  return (
    <div className="page">
      <div className="page__filters filters">Filters could go here
        <Search search={search} handleSearch={handleSearch} handleSort={handleSort}/>
      </div>

      <div className="page__results results">
        {filteredData.map(movie => (
          <section className="movie" key={movie.title}>
            <h1 className="movie__title">
              {movie.title}
              <span className="movie__release-year">{movie.release_year}</span>
            </h1>

            {!!movie.actors && (
              <p className="movie__section movie__actors">
                <span className="movie__section-title movie__actors-title">
                  Actors:
                </span>

                <ol className="movie__section-list movie__actors-list">
                  {movie.actors.map(actor => (
                    <li
                      className="movie__section-list-item movie__actors-list-item"
                      key={actor}
                    >
                      {actor}
                    </li>
                  ))}
                </ol>
              </p>
            )}

            {!!movie.locations.length && (
              <p className="movie__section movie__locations">
                <span className="movie__section-title movie__locations-title">
                  Locations:
                </span>

                <ul className="movie__section-list movie__locations-list">
                  {movie.locations.map(location => (
                    <li
                      className="movie__section-list-item movie__locations-list-item"
                      key={location}
                    >
                      {location}
                    </li>
                  ))}
                </ul>
              </p>
            )}

            {!!movie.fun_facts && (
              <p className="movie__fun-facts">{movie.fun_facts}</p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default App;
