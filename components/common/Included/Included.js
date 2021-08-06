import s from "./Included.module.css"

export default function Included({
    includedtitle,
    inlcudeddescription,
    firstincludeditem,
    firstincludeddescription,
    secondincludeditem,
    secondincludeddescription,
    thirdincludeditem,
    thirdincludeddescription
}) {
    return(
        <section>
        <div className={s.main}>
            <div className={s.responsive}>
                <div className={s.content}>
                    <div className={s.text}>
                        <h2 className={s.title}>
                            {includedtitle}
                        </h2>
                        <p className={s.description}>
                            {inlcudeddescription}
                        </p>
                    </div>
                    <div className={s.allitems}>
                    <div className={s.itemcard}>
                    <div className={s.cardtext}>
                    <h3 className={s.cardtitle}>
                        {firstincludeditem}
                    </h3>
                    <p className={s.cardbenefits}>
                        {firstincludeddescription}
                    </p>
                    </div>
                    </div>
                    <div className={s.itemcard}>
                    <div className={s.cardtext}>
                    <h3 className={s.cardtitle}>
                        {secondincludeditem}
                    </h3>
                    <p className={s.cardbenefits}>
                        {secondincludeddescription}
                    </p>
                    </div>
                    </div>
                    <div className={s.itemcard}>
                    <div className={s.cardtext}>
                    <h3 className={s.cardtitle}>
                        {thirdincludeditem}
                    </h3>
                    <p className={s.cardbenefits}>
                        {thirdincludeddescription}
                    </p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}