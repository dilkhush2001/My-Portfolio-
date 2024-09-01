import styles from "../css/contact.module.css";

const Contact=()=>{
    return(
        <div className={styles.parent}>
            <div className={styles.subparent}>
                <div className={styles.formsection}>
                    <div className={styles.formhead}>Leave ME Your Info</div>
                    <div className={styles.formbody}>
                        <div className={styles.name}>
                            <div className={styles.nametext}>Your Full Name ( Required )</div>
                            <div className={styles.input}><input type="text"/></div>
                        </div>
                        <div className={styles.name}>
                            <div className={styles.nametext}>Your Email ( Required )</div>
                            <div className={styles.input}><input type="text"/></div>
                        </div>
                        <div className={styles.name}>
                            <div className={styles.nametext}>Subject</div>
                            <div className={styles.input}><input type="text"/></div>
                        </div>
                        <div className={styles.name}>
                            <div className={styles.nametext}>Subject</div>
                            <div className={styles.input1}><input type="text"/></div>
                        </div>
                        <div className={styles.name}>
                            <button>SEND MESSAGE</button>
                        </div>
                    </div>
                </div>
                <div className={styles.contactsection}>
                    <div className={styles.formhead}>Contact Information</div>
                    <div className={styles.cards}>
                        <div className={styles.contactcard}>
                            <img src="/assets/images/contacticon1.png" alt="contact icon 1"/>
                            <div className={styles.text}>
                                <div className={styles.text1}>Country:</div>
                                <div className={styles.text2}>India</div>
                            </div>
                            <div className={styles.text}>
                                <div className={styles.text1}>District:</div>
                                <div className={styles.text2}>East Godavari</div>
                            </div>
                            <div className={styles.text}>
                                <div className={styles.text1}>City:</div>
                                <div className={styles.text2}>Surampalem</div>
                            </div>
                        </div>  
                        <div className={styles.contactcard}>
                            <img src="/assets/images/contacticon2.png" alt="contact icon 1"/>
                            <div className={styles.text}>
                                <div className={styles.text1}>Email:</div>
                                <div className={styles.text2}>ddhgopalpur@gmail.com</div>
                            </div>
                            <div className={styles.text}>
                                <div className={styles.text1}>Outlook:</div>
                                <div className={styles.text2}>21a91a6119@aec.edu.in</div>
                            </div>
                            {/* <div className={styles.text}>
                                <div className={styles.text1}>Telegram:</div>
                                <div className={styles.text2}>@Your username</div>
                            </div> */}
                        </div>
                        <div className={styles.contactcard}>
                            <img src="/assets/images/contacticon3.png" alt="contact icon 1"/>
                            <div className={styles.text}>
                                <div className={styles.text1}>Support:</div>
                                <div className={styles.text2}>Dilkhush Rahi</div>
                            </div>
                            {/* <div className={styles.text}>
                                <div className={styles.text1}>Office:</div>
                                <div className={styles.text2}>+58 (021)356 587 235</div>
                            </div> */}
                            <div className={styles.text}>
                                <div className={styles.text1}>Personal:</div>
                                <div className={styles.text2}>62026 14764</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;