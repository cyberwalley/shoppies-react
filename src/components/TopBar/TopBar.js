import './TopBar.css';
export const TopBar = ({children}) => {
  return (
    <>
      <div className="section-header-wrapper">
        <nav className="nav-wrapper grid">
          <div className="nav-content grid__item one-whole">
            {children}
          </div>
        </nav>
      </div>
    </>
  )
}
