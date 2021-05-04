import styles from '../styles/Header.module.css'

export default function Header(){
    return(
    <>
        <ul className={styles.header}>
            <div className={styles.menuHeader}>
                <div>
                    <li className={styles.menuData}><a href="/">Home</a></li>
                    <li className={styles.menuData}><a href="/idea_catalog/home">Idea Catalog</a></li>
                    <li className={styles.menuData}><a href="#contact">Konvensi Inovasi</a></li>
                    <li className={styles.menuData}><a href="#about">Inbox</a></li>
                    <li className={styles.menuData}><a href="#about">Profile</a></li>
                </div>
                <div>
                    <li className={styles.menuData}><a href="#avatar">Avatar</a></li>
                    <li className={styles.menuData}><a href="#level">Level</a></li>
                    <li className={styles.menuData}><i class="material-icons">circle_notifications</i> </li>
                    
                </div>
            </div>
        </ul>
        <hr />
    </>
    )
}