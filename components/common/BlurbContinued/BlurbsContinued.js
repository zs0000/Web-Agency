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
            <div className={s.text} data-aos="fade-down">
            <div className={s.title}  data-aos="fade-down">{lefttitle}</div>
            <div className={s.description}>{leftdescription}</div>
            </div>
            </div>
            <div className={s.blurb} >
            <div className={s.rightimg} >
                <Image  src={Mobile} width={640} quality={100} height={430} layout="intrinsic" />
                </div>
            <div className={s.text}>
            <div className={s.title} data-aos="fade-up">{righttitle}</div>
            <div className={s.description} data-aos="fade-up">{rightdescription}</div>
            </div>
            <div className={s.rightimgresponsive}>
                <Image  src={Mobile} width={640} quality={100} height={430} layout="intrinsic" />
                </div>
           
            </div>
            </div>
            
  
        </div>
        </section>
    )
}