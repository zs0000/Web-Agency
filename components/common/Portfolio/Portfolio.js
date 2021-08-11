import s from "./Portfolio.module.css"

export default function Portfolio({portfoliotitle}) {
    return(
        <section>
        <div className={s.main}>
            <div className={s.responsive}>
                <div className={s.content}>
                    <h2 className={s.portfoliotitle}>
                        {portfoliotitle}
                    </h2>
                    <div className={s.items}>
                    
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}