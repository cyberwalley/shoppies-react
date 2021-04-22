import './MovieDetails.css'
export const MovieDetails = ({Title, Poster, Genre, Rated, Director, Awards, Plot, Released}) => {
  const unavailableImage ='https://cdn.shopify.com/s/files/1/2506/6936/files/image-unavailable.svg?v=1609864912';
  return (
    <div tabindex="-1" className="modal-inner">

      <div className="modal-movie__image-wrapper">
        <img width="300" height="444" className="modal-movie__image" src={Poster=='N/A' ? unavailableImage : Poster } alt={Title}/>
      </div>
      <div className="modal-movie__title-wrapper">
        <ul className="modal-movie__detail-list">
          <li className="modal-movie__detail-list-item">
            <div className="modal-movie__detail-list-item-title">Genre</div>
            <div className="modal-movie__detail-list-item-value">{Genre}</div>
          </li>
          <li className="modal-movie__detail-list-item">
            <div className="modal-movie__detail-list-item-title">Released</div>
            <div className="modal-movie__detail-list-item-value">{Released}</div>
          </li>
          <li className="modal-movie__detail-list-item">
            <div className="modal-movie__detail-list-item-title">Rated</div>
            <div className="modal-movie__detail-list-item-value">{Rated}</div>
          </li>
          <li className="modal-movie__detail-list-item">
            <div className="modal-movie__detail-list-item-title">Director</div>
            <div className="modal-movie__detail-list-item-value">{Director}</div>
          </li>
          <li className="modal-movie__detail-list-item">
            <div className="modal-movie__detail-list-item-title">Awards</div>
            <div className="modal-movie__detail-list-item-value">{Awards}</div>
          </li>
        </ul>
      </div>
      <div className="modal-movie__plot-wrapper">
        <hr/>
        <h3 className="modal-movie__plot-heading">Plot</h3>
        <p className="modal-movie__plot-content">{Plot}</p>
      </div>
    </div>
  )
}
