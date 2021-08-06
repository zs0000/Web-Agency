import Image from "next/image"
import s from "./ResponsiveDesktop.module.css"

import Desktop from "../../../public/assets/Responsive/desktopisolated.png"


export default function ResponsiveDesktop({title, text}) {
    return(
        <section>
        <div className={s.main}>
            <div className={s.responsive}>
                <div className={s.content}>
                <h3 className={s.responsivetitle} data-aos="zoom-up">
                        {title}
                        </h3>
                <figure className={s.desktopsmall} >
                <a href="https://commerce-sq6t.vercel.app"  target="_blank">
                <Image src={Desktop} width={663} height={383} data-aos="fade-up" data-aos-duration="1200"  alt="Desktop Responsive Website examples." layout="intrinsic" />
                </a>
                    </figure>
                  
                    <div className={s.item}>
                        <h3 className={s.title} data-aos="fade-left">
                        {title}
                        </h3>
                    <figcaption className={s.text} data-aos="fade-left">
                            {text}
                    </figcaption>
                    
                    </div>
                    <figure className={s.desktop}>
                    <a href="https://commerce-sq6t.vercel.app" target="_blank">
                <Image src={Desktop} width={663} height={383} data-aos="fade-up" data-aos-duration="1200" alt="Desktop Responsive Website examples." layout="intrinsic" />
                    </a>
                    </figure>
                </div>
            </div>
        </div>
        </section>
    )
}