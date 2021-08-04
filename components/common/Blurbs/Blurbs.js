import Image from "next/image"
import Deploy from "../../../public/assets/Blurbs/Deploy.png"
import Serverless from "../../../public/assets/Blurbs/ServerlessComp.jpg"

import s from "./Blurbs.module.css"

export default function Blurbs({lefttitle, leftdescription, righttitle, rightdescription}){
    return(
        <section>
        <div className={s.main}>
            <div className={s.responsive}>
            <div className={s.blurb}>
            <div className={s.img}>
                <Image src={Deploy} width={640} quality={100} height={430} layout="intrinsic" />
            </div>
            <div className={s.text}>
            <div className={s.title}>{lefttitle}</div>
            <div className={s.description}>{leftdescription}</div>
            </div>
            </div>
            <div className={s.blurb}>
            <div className={s.rightimg}>
                <Image  src={Serverless} width={640} quality={100} height={430} layout="intrinsic" />
                </div>
            <div className={s.text}>
            <div className={s.title}>{righttitle}</div>
            <div className={s.description}>{rightdescription}</div>
            </div>
            <div className={s.rightimgresponsive}>
                <Image  src={Serverless} width={640} quality={100} height={430} layout="intrinsic" />
                </div>
           
            </div>
            </div>
        </div>
        </section>
    )
}