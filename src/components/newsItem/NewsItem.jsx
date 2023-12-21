import React from 'react'
import styles from './styles.module.css'
import formatTimeAgo from '../helpers/formatTimeAgo'

const NewsItem = ({ item }) => {
    return (
        <div className={styles.bunnerNew}>
            <div className={styles.container}>
                <div className={styles.bunner}>
                    <div className={styles.imgNew} style={{backgroundImage:`url(${item.image})`}} />
                    <div className=''>
                        <h3 className={styles.titleNews}>{item.title}</h3>
                        <p className={styles.descNews}>
                            {formatTimeAgo(item.published)}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NewsItem