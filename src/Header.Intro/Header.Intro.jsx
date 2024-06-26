import styles from './Header.Intro.module.css'

function HeaderIntro() {
    return (
        <>
            <div className={styles.HeaderImg}> 
                <div className={styles.centerDiv}>
                    <p className={styles.mainText}>Welcome to our Small Business Portfolio</p>
                    <p className={styles.subText}>We are a small business dedicated to providing high-quality products and services to our customers.</p>
                    <div></div>
                </div>
               
            </div>
        </>
    );
}

export default HeaderIntro;