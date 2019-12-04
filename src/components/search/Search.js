import React from 'react';

const Search = ({search, handleSearch, handleSort}) => {

    return (
        <form>
            <input type="text" value={search} onChange={(e) => handleSearch(e)} />
            <select defaultValue="Sort" onChange={handleSort}>
                <option disabled value="Sort">Sort</option>
                <option value="Accending">Accending</option>
                <option value="Decending">Decending</option>
            </select>
        </form>
    )
}

export default Search;
