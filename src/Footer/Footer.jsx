import styles from './Footer.module.css'

import reactImg from '../assets/react.svg'

const Footer = () => {
    return (
        <>
            <section className={styles.Footer}>
                <div className={styles.contacts}> 
                    <img src={reactImg}/>
                    <h4><b>Address:</b></h4>
                    <h5>123 Main Street, Anytown, USA</h5>
                    <h4><b>Contact:</b></h4>
                    <h5>555-123-4567 @gmail.com</h5>
                
                </div>
                <div className={styles.navigation}> 
                    <h4> <a href='#'>About Us</a> </h4>
                    <h4> <a href='#'>Contact</a> </h4>
                    <h4> <a href='#'>Services</a> </h4>
                    <h4> <a href='#'>FAQ</a></h4>
                </div>
                
            </section>
            <div className={styles.foot}>
                <h5>© 2024 Relume. All rights reserved.</h5>
            </div>
        </>
    );
}

export default Footer;