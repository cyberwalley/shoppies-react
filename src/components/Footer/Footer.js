import './Footer.css'
export const Footer = ({children}) => {
  return (
      <footer className="footer-wrapper page-width">
        <div className="footer-inner-wrapper page-width">
          {children}
        </div>
      </footer>
  )
}
