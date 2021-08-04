import Image from "next/image"
import s from "./Preview.module.css"
import preview from "../../../public/assets/Preview/Preview.png"

export default function Preview({previewtitle, previewdescription}) {
    return(
        <section>
        <div className={s.main}>
            <div className={s.responsive}>
                <div className={s.content}>
                    <div className={s.item}>
                        <div className={s.imagery}>
                        <Image src={preview} width={1277} height={640} layout="intrinsic" />
                        </div>
                    <div className={s.text}>
                    <h2 className={s.title}>
                    {previewtitle}
                    </h2>
                    <p className={s.description}>
                        {previewdescription}
                    </p>
                    </div>
                    <div className={s.preview}>

                    </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}