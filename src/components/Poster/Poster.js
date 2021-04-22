import './Poster.css'
export const Poster = ({src, height, width, alt}) => {
  return (
      <img width={width} height={height} className="movie-card__image" src={src} alt={alt} />
  )
}
