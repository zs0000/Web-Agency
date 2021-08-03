import Image from "next/image"
import s from "./ResponsiveDesktop.module.css"

import Desktop from "../../../public/assets/Responsive/desktopisolated.png"


export default function ResponsiveDesktop({title, text}) {
    return(
        <section>
        <div className={s.main}>
            <div className={s.responsive}>
                <div className={s.content}>
                   
                <figure className={s.desktopsmall}>
                <Image src={Desktop} width={663} height={383} alt="Desktop Responsive Website examples." layout="intrinsic" />
                    </figure>
                  
                    <div className={s.item}>
                        <h3 className={s.title}>
                        {title}
                        </h3>
                    <figcaption className={s.text}>
                            {text}
                    </figcaption>
                    
                    </div>
                    <figure className={s.desktop}>
                <Image src={Desktop} width={663} height={383} alt="Desktop Responsive Website examples." layout="intrinsic" />
                    </figure>
                </div>
            </div>
        </div>
        </section>
    )
}