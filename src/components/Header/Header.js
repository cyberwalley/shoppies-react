import './Header.css'
export const Header = ({children}) => {
  return (
    <header className="section-header page-width">
      {children}
    </header>
  )
}
