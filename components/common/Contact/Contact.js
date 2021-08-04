import s from "./Contact.module.css"




export default function Contact({contacttitle, contactdescription}) {
    
   

    return(
        <div className={s.main}>
            <span id="contact"></span>
            <div className={s.content}>
                <div className={s.formbox}>
                   <div className={s.text}> 
                   <h2 className={s.contacttitle}>
                       {contacttitle}
                   </h2>
                   <p className={s.contactdescription}>
                       {contactdescription}
                   </p>
                   </div>
                   <div className={s.buttonbox}>
                       <a 
                       href="mailto:sentrybridgedesigns@gmail.com"
                        rel="noopener noreferrer"
                         target="_blank"
                          className={s.contactbutton}>
                              Contact Us
                              </a>
                   </div>
                </div>
            </div>
        </div>
    )
}
