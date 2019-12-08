import React, { useState, useEffect } from 'react';
import movieDataService from './services/movieDataService';
import Types from './types';
import Search from './components/search/Search';
import MovieList from './components/movie-list/MovieList';

const App: React.FC = () => {

  let sortedData = [];

  const [movieList, setMovieList] = useState<Types.MovieInterface[]>([]);

  const [ search, setSearch ] = useState('');

  const [ sort, setSort ] = useState('')

  const handleSearch = (e:any) => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  const handleSort = (e:any) => {
    setSort(e.target.value)
  }
  
  // Filter data
  let filteredData = movieList.filter(
    movie => movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
  )
  
  // Sort data
  if(sort) {
    if(sort === "Ascending") {
      sortedData = filteredData.sort((a,b) => a.release_year - b.release_year)
    } else {
      sortedData = filteredData.sort((a,b) => b.release_year - a.release_year)
    }
  }

  useEffect(() => {
    movieDataService.get().then(dataOrError => {
      const isData = Array.isArray(dataOrError);
      if (isData) {
        setMovieList(dataOrError);
      } else {
        alert(dataOrError)
      }
    });
  }, []);

  return (
    <div className="container movie-container">
      <header className="pt-4">
        <Search search={search} handleSearch={handleSearch} handleSort={handleSort}/>
      </header>
      <main>
        <MovieList filteredData={filteredData}/>
      </main>
    </div>
  );
};

export default App;
