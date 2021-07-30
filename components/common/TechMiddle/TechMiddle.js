import Image from "next/image"
import shopifyimg from "../../../public/assets/Tech/shopify.png"
import vercelimg from "../../../public/assets/Tech/vercel-logo.png"
import nextimg from "../../../public/assets/Tech/nextjs.png"
import jsimg from "../../../public/assets/Tech/brand-javascript.png"
import htmlimg from "../../../public/assets/Tech/brand-html5.png"
import cssimg from "../../../public/assets/Tech/brand-css3.png"
import tailwindimg from "../../../public/assets/Tech/tailwind.png"
import googleimg from "../../../public/assets/Tech/google.png"
import s from "./TechMiddle.module.css"

export default function TechMiddle({
    title,
     description,
      shopify,
       vercel,
        next,
         console,
          tailwind,
           javascript,
            css,
             html, 
}){
    return(
        <>
        
        <section>
  
        <span className={s.spannav}  id="test"></span>
            <div className={s.contain}>
                
 
                <div className={s.titlebox}>

                    <h2 className={s.title}>
                    
                    {title}
                    </h2>
                    <p className={s.description}>{description}</p>
                </div>
                <div className={s.boxes}>
                <ul className={s.techbox}>
                    <li className={s.techitem}>
                        <a href="" target="_blank">
                        <Image src={shopifyimg} width={128} height={128} layout="intrinsic" />
                        <h3 className={s.techitemtitle}>{shopify}</h3>
                       </a>
                    </li>
                    <li className={s.techitem}>
                    <a href="" target="_blank">
                        <Image src={vercelimg} width={128} height={128} layout="intrinsic" />
                        <h3 className={s.techitemtitle}>{vercel}</h3>
                        </a>
                    </li>
                    <li className={s.techitem}>
                    <a href="" target="_blank">
                        <Image src={nextimg} width={128} height={128} layout="intrinsic" />
                        <h3 className={s.techitemtitle}>{next}</h3>
                        </a>
                    </li>
                    <li className={s.techitem}>
                    <a href="" target="_blank">
                        <Image src={googleimg} width={128} height={128} layout="intrinsic" />
                        <h3 className={s.techitemtitle}>{console}</h3>
                        </a>
                    </li>
                </ul>
                <ul className={s.codebox}>
                <li className={s.codeitem}>
                <a href="" target="_blank">
                        <Image src={tailwindimg} width={128} height={128} layout="intrinsic" />
                        <h3 className={s.codeitemtitle}>{tailwind}</h3>
                        </a>
                    </li>
                    <li className={s.codeitem}>
                    <a href="" target="_blank">
                        <Image src={jsimg} width={128} height={128} layout="intrinsic" />
                        <h3 className={s.codeitemtitle}>{javascript}</h3>
                       </a>
                    </li>
                    <li className={s.codeitem}>
                    <a href="" target="_blank">
                        <Image src={cssimg} width={128} height={128} layout="intrinsic" />
                        <h3 className={s.codeitemtitle}>{css}</h3>
                       </a>
                    </li>
                    <li className={s.codeitem}>
                    <a href="" target="_blank">
                        <Image src={htmlimg} width={128} height={128} layout="intrinsic" />
                        <h3 className={s.codeitemtitle}>{html}</h3>
                       </a>
                    </li>
                   
                </ul>
                </div>
                
              
            </div>
            <a className={s.navanchor}  href="#test">
            <span className={s.navlabel}></span> 
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