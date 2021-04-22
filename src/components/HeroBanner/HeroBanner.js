import './HeroBanner.css';
export const HeroBanner = ({children, megaTitle, subTitle, backgroundImageSrc}) => {
  const bgImage = {
    backgroundImage: 'url('+backgroundImageSrc +')'
  }
  return (
    <div className={'hero--inner-wrapper page-width'} style={bgImage}>
      <div className={'grid'}>
          <div className={'grid__item medium-up--two-thirds'}>
              <h1 id={'megaTitle'} className={'mega-title page-width small--text-center'}>{megaTitle}</h1>
              <p className={'mega-subtitle page-width small--text-center'}>{subTitle}</p>
              {children}
          </div>
      </div>
    </div>
  )
}
