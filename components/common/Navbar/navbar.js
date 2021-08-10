import s from "./Navbar.module.css"
import Link from "next/link"

export default function Navbar() {
    return(
        <div className={s.main}>
            <div className={s.items}>
                <div className={s.item}>
                    <Link href="/">
                    <a  className={s.link}>
                        Home
                    </a>
                    </Link>
                </div>
                <div className={s.item}>
                    <Link href="/#test">
                    <a  className={s.link}>
                        Services
                    </a>
                    </Link>
                </div>
                <div className={s.item}>

                    <a href="/#contact" className={s.link}>
                        Contact Us
                    </a>

                </div>
            </div>
        </div>
    )
}