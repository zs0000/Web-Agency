import Image from "next/image"
import Serverless from "../../../public/assets/Blurbs/dev.jpg"
import Mobile from "../../../public/assets/Blurbs/MobileComp.jpg"

import s from "./BlurbsContinued.module.css"

export default function BlurbsContinued({lefttitle, leftdescription, righttitle, rightdescription}){
    return(
        <section>
        <div className={s.main}>
            <div className={s.responsive}>
            <div className={s.blurb}>
            <div className={s.img}>
                <Image src={Serverless} width={640} quality={100} height={430} layout="intrinsic" />
            </div>
            <div className={s.text}>
            <div className={s.title}>{lefttitle}</div>
            <div className={s.description}>{leftdescription}</div>
            </div>
            </div>
            <div className={s.blurb}>
            <div className={s.rightimg}>
                <Image  src={Mobile} width={640} quality={100} height={430} layout="intrinsic" />
                </div>
            <div className={s.text}>
            <div className={s.title}>{righttitle}</div>
            <div className={s.description}>{rightdescription}</div>
            </div>
            <div className={s.rightimgresponsive}>
                <Image  src={Mobile} width={640} quality={100} height={430} layout="intrinsic" />
                </div>
           
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
        </div>
        </section>
    )
}