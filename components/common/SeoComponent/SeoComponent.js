import s from "./SeoComponent.module.css"
import Link from "next/link"

export default function SeoComponent({seotitle, seodescription}) {
    return(
        <section>
        <div className={s.main}>
            <div className={s.responsive}>
                <div className={s.content}>
                    <div className={s.item}>
                    <h1 className={s.title}>{seotitle}</h1>
                    <p className={s.description}>{seodescription}</p>
                    <Link href="/" >
                    <a className={s.button}>
                        Back to Last Page
                    </a>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}