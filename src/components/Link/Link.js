
import './Link.css'
export const Link = ({link, children, external}) => {
  return (
     <a 
     className="site-link" 
     target={external ? "_blank" : "_self"}
     rel={external ? "noreferrer" : ""}
     href={link}
     >
       {children}
     </a>
  )
}
