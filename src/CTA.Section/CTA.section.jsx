import styles from "./CTA.section.module.css"

function CTASection(){
    return (
        <>
            <section className={styles.CTASectionBox}>
                <div className={styles.CTASectionTexts}> 
                    <p className={styles.title}> Find Your Dream Home Today </p>
                    <p className={styles.paragraph}> Browse our wide selection of properties and schedule a tour. </p>
                    <div className={styles.buttonsBox}> 
                        <button className={styles.contactButton}> Contact </button>
                        <button className={styles.exploreButton}> Explore </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CTASection;  