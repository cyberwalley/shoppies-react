import './Page.css'
export const Page = ({children, narrowWidth, fullWidth}) => {
  return (
    <div className={narrowWidth ? 'narrowWidth' : 'fullWidth' } >
      {children}
    </div>
  )
}
