import './Layout.css'
export const Layout = ({children, label}) => {
  return (
    <section id={label} className={label}>{children}</section>
  )
}
