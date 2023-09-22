import React from 'react'
import SearchResult from './SearchResult.jsx'

const SearchResultsList = ({results}) => {
  return (
    <div className='search-bar-container'>
    <div className="results-list">
    {results.map((result, id) => {
      return  <SearchResult result={result.name} key={id} />;
    })}
  </div>
    </div>
 );
};

export default SearchResultsList
