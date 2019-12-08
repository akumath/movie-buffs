import React from 'react';

const Search = ({search, handleSearch, handleSort}) => {

    return (
        <form className="form-inline" data-test="form-inline">
            <input type="text" value={search} className="form-control form-control-lg mr-3" onChange={(e) => handleSearch(e)} placeholder="Seach title..." />
            <select className="form-control form-control-lg mr-3 mb-mt-lg" defaultValue="Sort" onChange={handleSort}>
                <option disabled value="Sort">Sort</option>
                <option value="Ascending">Ascending</option>
                <option value="Decending">Decending</option>
            </select>
        </form>
    )
}

export default Search;
