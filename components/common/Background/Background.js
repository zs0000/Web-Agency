import Image from "next/image"
import s from "./Background.module.css"
import something from "../../../public/assets/Background/jeol.jpg"

export default function Background() {
    return (
        <>
        
        <div className={s.background}>
            <Image  src={something} width={640} quality={100} height={959} layout="intrinsic" />
            
        </div>
        <div className={s.spacer}>

        </div>
   
        </>
    )
}