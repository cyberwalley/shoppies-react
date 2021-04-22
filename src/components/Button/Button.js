import React from 'react'
import './Button.css'
export const Button = ({children, type, secondary, fitted, onClick, dataMovieId, movieId,  disabled}) => {
  return (
    <button className={secondary ? 'btn-secondary' : 'btn'} type={type ? type : 'button'} style={{ width:fitted}} onClick={onClick} disabled={disabled ? disabled :''} dataMovieId={dataMovieId} movie-id={movieId}>{children}</button>
  )
}
