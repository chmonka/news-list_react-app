import React from 'react'
import styles from './styles.module.css'
import Image from '../image/Image'
import formatTimeAgo from '../helpers/formatTimeAgo'

const NewsBunner = ({ item }) => {
    return (
        <div className={styles.newsBunner}>
            <div className={styles.container}>
                <div className={styles.articleBunner}>
                    <Image image={item?.image}></Image>
                    <h3 className={styles.titleNewsBunner}>{item.title}</h3>
                    <p className={styles.descNewsBunner}>{formatTimeAgo(item.published)} by {item.author}</p>
                </div>
            </div>
        </div>
    )
}

export default NewsBunner