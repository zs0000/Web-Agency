import s from "./AboutComponent.module.css"
import Link from "next/link"

export default function AboutComponent() {
    return(
        <section>
        <div className={s.main}>
            <div className={s.responsive}>
                <div className={s.content}>
                    <div className={s.item}>
                    <h1 className={s.title}>About Page</h1>
                    <p className={s.description}>This Page is Coming Soon. Check Back Tomorrow. </p>
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