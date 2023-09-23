import React from 'react'
import {Link} from 'react-router-dom'

const SearchResult = ({result}) => {
  const {englishName,hindiName,medicalUses}=result
  return (
    <div className="search-result"
    onClick={(e) => alert(`You selected ${result}!`)}>
      <ul>
      {englishName?.map((e, i) => {
        return  <li key={i} >
          {/* check out the backend route first */}
          <Link to={`/${e.id}`}>
          {e}
          </Link>
          </li>;
      })}
      </ul>
     
    </div>
  )
}

export default SearchResult
