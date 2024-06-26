import styles from "./About.section.module.css";

function AboutSection() {
    return (
        <>
        
            <section className={styles.aboutSectionBox}>
                <div className={styles.aboutSectionTexts}>
                    <p className={styles.aboutSectionTitle}> Discover Our Rich History, Mission, and Values </p>
                    <p className={styles.aboutSectionPara}>At our company, we are committed to providing exceptional real estate services that exceed our clients&apos; expectations. With a strong focus on integrity, professionalism, and customer satisfaction, we strive to help our clients achieve their real estate goals. </p>
                </div>
                <img className={styles.aboutSectionImg} src="https://via.placeholder.com/150"/>
            </section>
        
        </>
    );
}

export default AboutSection;