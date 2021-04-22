import './MovieCard.css'
import { Button } from '../Button'
export const MovieCard = ({Poster, Title, Year, imdbID, children}) => {
  const unavailableImage ='https://cdn.shopify.com/s/files/1/2506/6936/files/image-unavailable.svg?v=1609864912';
  return (
    <div id={imdbID} className="card">
      <img width="195" height="341" className="movie-card__image" src={Poster=='N/A' ? unavailableImage : Poster } alt={Title}/>
      <div className="movie-card__content">
        <h4 className="movie-card__title small--text-center"><span className="movie-card__title-link">{Title}</span></h4>
        <ul className="subtext-wrapper">
            <li className="subtext-item small--text-center">{Year}</li>
        </ul>
      </div>
      {children}
    </div>
  )
}
