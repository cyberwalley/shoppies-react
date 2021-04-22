import './MovieContent.css'

export const MovieContent = () => {
  return (
    <div class="movie-card__content">
      <h4 class="movie-card__title small--text-center"><span class="movie-card__title-link" data-movie-id="imdbID">The Cat in the Hat</span></h4>
      <ul class="subtext-wrapper">
          <li class="subtext-item small--text-center">2012</li>
      </ul>
    </div>
  )
}
