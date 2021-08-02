import s from "./Offer.module.css"


export default function Offer({text, description}) {
    return(
        <section>
            <div className={s.main}>
                <div className={s.responsive}>
                    <div className={s.textbox}>
                        <h3 className={s.text}>{text}</h3>
                        <p className={s.description}>{description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}