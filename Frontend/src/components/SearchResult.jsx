import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const SearchResult = ({result}) => {
  const {englishName,hindiName,medicalUses} = result;
console.log(result);

const navigateTo = useNavigate();
    const redirectToAyurIngredient = () => {
      navigateTo('/ingredients');
    };
  return (
    <div className="search-result"
    onClick={redirectToAyurIngredient}>
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
//  onClick={(e) => alert(`You selected ${result}!`)}
