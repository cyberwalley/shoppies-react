
import './SearchForm.css'
//import {button} from '../components/Button'
import { Button } from '../Button'
export const SearchForm = ({placeholder, autoComplete, value, onChange, onSubmit}) => {
  /* const [searchValue, setSearchValue] = useState([]);
  const handleSearchSubmit = (event)=>{
    setSearchValue(event.target.value);
    console.log(searchValue, "i don dey fine")
  } */
  return (
    <div>
      <form className="page-width search-form" role="search" >
        <label className="search-form__label visually-hidden" for="searchInput">Movie title</label>
        <input id="searchInput" className="search-form__input" type="search" name="search" placeholder={placeholder} value={value} onChange={onChange} autocomplete={autoComplete} required />
        <Button className="search-form__submit-button" type={'submit'}>Search</Button>
      </form>
      <p className="mega-microtitle page-width small--text-center">
        <a className="mega-microtitle__link" href="/help.html">Help?</a>
      </p>
    </div>
  )
}
