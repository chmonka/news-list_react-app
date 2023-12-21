import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import NewsBunner from '../newsBunner/NewsBunner'
import getNews from '../../api/apiNews'
import NewList from '../newsList/NewList'
const Main = () => {
  const [news, setNews] = useState([])



  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews()
        setNews(response.news)
      } catch (error) {
        console.log(error)
      }
    }
    fetchNews()
  }, [])
  
  return (
    <main className='main'>
      <div className={styles.container}>
        <div className={styles.listNews}>
          {news.length > 0 ? <NewsBunner item={news[0]} /> : null}
          <NewList news={news} />
        </div>
      </div>
    </main>
  )
}


export default Main
