import styles from '../styles/Filter.module.css'

export default function FilterByTopic(){
    return(
    <div>
        <div className={styles.topic}>Filter By Topics</div>
        <hr />
        <div className={styles.listTopic}>
            Lorem
        </div>
        <hr />
        <div className={styles.listTopic}>
            Lorem
            <hr />
            <div className={styles.subListTopic}>
                Lorem
            </div>
            <hr />
        </div>
    </div>
    )
}