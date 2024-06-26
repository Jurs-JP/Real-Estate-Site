import styles from './Header.module.css'

import reactImg from '../assets/react.svg'

function Header() {
    return(
        <>
        <header className={styles.header}>
            <img className={styles.logo} src={reactImg}/> 
            <nav className={styles.navigation}>
                <nav> <a href='#'>Home</a> </nav>
                <nav> <a href='#'>About</a> </nav>
                <nav> <a href='#'>Portfolio</a> </nav>
                <nav> <a href='#'>Contact Us</a> </nav>
            </nav>
        </header>
        </>
    );
}

export default Header;