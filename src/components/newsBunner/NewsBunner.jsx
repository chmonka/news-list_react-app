import React from 'react'
import styles from './styles.module.css'
import Image from '../image/Image'
import formatTimeAgo from '../helpers/formatTimeAgo'

const NewsBunner = ({ item }) => {
    return (
        <div className={styles.bunnerNew}>
            <div className={styles.container}>
                <div className={styles.bunner}>
                    <Image image={item?.image}></Image>
                    <h3 className={styles.titleNews}>{item.title}</h3>
                    <p className={styles.descNews}>{formatTimeAgo(item.published)} by {item.author}</p>
                </div>
            </div>
        </div>
    )
}

export default NewsBunner