import s from "../Intro/intro.module.css"
import Navbar from "../Navbar/navbar"




export default function Intro({title, description}) {
    return(
        <>
        <section >
            <Navbar />

            <div className={s.content}>
  
            <div className={s.centerbox}>
                <h1 className={s.title}>{title}</h1>
                <p className={s.description}>{description}</p>

            </div>
            

            </div>
    
            <a className={s.navanchor}  href="#test">
            <span className={s.navlabel}>Learn More</span> 
            <svg
            
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 490.656 490.656"
      version="1.1"
      viewBox="0 0 490.656 490.656"
      xmlSpace="preserve"
      className={s.navarrow}
    >
        
      <path d="M487.536 216.467c-4.16-4.16-10.923-4.16-15.083 0L245.339 443.581 18.203 216.467c-4.16-4.16-10.923-4.16-15.083 0s-4.16 10.923 0 15.083l234.667 234.667c2.091 2.069 4.821 3.115 7.552 3.115s5.461-1.045 7.531-3.115L487.537 231.55c4.159-4.161 4.159-10.923-.001-15.083z"></path>
      <path d="M487.536 24.445c-4.16-4.16-10.923-4.16-15.083 0L245.339 251.581 18.203 24.467c-4.16-4.16-10.923-4.16-15.083 0s-4.16 10.923 0 15.083l234.667 234.667c2.091 2.069 4.821 3.115 7.552 3.115s5.461-1.045 7.531-3.136L487.536 39.528c4.16-4.16 4.16-10.923 0-15.083z"></path>
    </svg>
    
    </a>
        </section>
        
        </>
    )
}