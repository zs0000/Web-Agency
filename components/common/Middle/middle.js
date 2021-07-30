import Image from "next/image"
import shopifyimg from "../../../public/assets/Tech/shopify.png"
import vercelimg from "../../../public/assets/Tech/vercel-logo.png"
import nextimg from "../../../public/assets/Tech/nextjs.png"
import jsimg from "../../../public/assets/Tech/brand-javascript.png"
import htmlimg from "../../../public/assets/Tech/brand-html5.png"
import cssimg from "../../../public/assets/Tech/brand-css3.png"
import tailwindimg from "../../../public/assets/Tech/tailwind.png"
import googleimg from "../../../public/assets/Tech/google.png"
import s from "./middle.module.css"

export default function Middle({
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
        </section>
        </>
    )
}