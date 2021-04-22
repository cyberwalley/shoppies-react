import './SiteLogo.css';
export const SiteLogo = ({pagelink, imageSrc, siteName}) => {
  return (
    <>
      <a className="site-logo-image-link" href={pagelink}>
        {imageSrc ?
        <img className="site-logo-image" src={imageSrc} alt={siteName} width="250" height="72"/>
        :
        <h1 className="site-logo-text">{siteName}</h1>
        }
      </a>
    </>
  )
}
