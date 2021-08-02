import s from "./Powerful.module.css"

export default function Powerful({first, firstdescription, second, seconddescription, third, thirddescription}) {
    return(
        <section>
            <div className={s.main}>
                <div className={s.responsive}>
                <div className={s.card}>
                    
                    <div className={s.title}>{first}</div>
                        <div className={s.description}>{firstdescription}</div>
                </div>
                <div className={s.card}>
                    <div className={s.title}>{second}</div>
                        <div className={s.description}>{seconddescription}</div>
                </div>
                <div className={s.card}>
                    <div className={s.title}>{third}</div>
                        <div className={s.description}>{thirddescription}</div>
                </div>
                </div>
            </div>
        </section>
    )
}