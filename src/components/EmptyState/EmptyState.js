import './EmptyState.css'
export const EmptyState = ({imageSrc, title, subTitle, buttonText}) => {
  return (
    <div className="empty-state__container">
      <div className="grid empty-state__wrapper">
        <div className="grid__item medium-up--one-half small--one-half">
          <div className="empty-state_inner-wrapper">
            <p className="empty-state_megatext small--text-center">{title}</p>
            <p className="empty-state_subtext small--text-center">{subTitle}</p>
            <a href="#searchInput" role="button" className="btn">{buttonText}</a>
          </div>
        </div>
        <div className="grid__item medium-up--one-half small--one-half">
          <div className="empty-state__image-wrapper">
            <img src={imageSrc} width="608" height="498" alt="movie clapboard and a plant" className="empty-state__image" />
          </div>
        </div>
      </div>
    </div>
  )
}
