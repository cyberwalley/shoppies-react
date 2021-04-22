import './Skeleton.css'
export const Skeleton = () => {
  return (
    <div class="card">
      <div class="movie-card__image-wrapper loading">
      </div>
      <div class="movie-card__content">
        <h4 class="movie-card__title small--text-center loading"></h4>
        <ul class="subtext-wrapper">
            <li class="subtext-item small--text-center loading"></li>
        </ul>
      </div>
      <div class="loading-skeleton__button loading"></div>
    </div>
  )
}
