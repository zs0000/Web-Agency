import Image from "next/image"
import s from "./Responsive.module.css"

import Mobile from "../../../public/assets/Responsive/mobileisolated.png"


export default function Responsive({title, text}) {
    return(
        <section>
            
        <div className={s.main}>
        <span className={s.spannav}  id="responsive"></span>
            <div className={s.responsive}>
                <div className={s.content}>
                <h3 className={s.responsivetitle}>
                        {title}
                        </h3>
                <figure className={s.mobile}>
                    <a href="https://commerce-sq6t.vercel.app" target="_blank">
                <Image src={Mobile} width={515} height={669} alt="Mobile Responsive Website examples." layout="intrinsic" />
                    </a>
                    </figure>
                  
                    <div className={s.item}>
                        <h3 className={s.title}>
                        {title}
                        </h3>
                    <figcaption className={s.text}>
                            {text}
                    </figcaption>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}