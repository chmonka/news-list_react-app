import React from 'react';
import formatDate from './../helpers/formatDate';
import style from './styles.module.css'



const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.descHeader}>
          <h1 className={style.title}>NEWS REACTIFY</h1>
          <p className={style.date}>{formatDate(new Date())}</p>
        </div>
      </div>
    </header>
  )
}

export default Header