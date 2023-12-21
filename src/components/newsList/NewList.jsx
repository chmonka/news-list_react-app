import React from 'react'
import styles from './styles.module.css'
import NewsItem from '../newsItem/NewsItem'

const NewList = ({ news }) => {
    return (
        <ul className={styles.list}>
            {news.map((item) => {
                return <NewsItem key={item.id} item={item} />
            })}
        </ul>
    )
}

export default NewList