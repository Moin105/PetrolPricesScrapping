import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import b1 from '../public/b1.png'

function Banners({img}) {
  return (
    <div className={styles.banners}>
        <figure className={styles.figure}>
        <Image priority src={img} alt="banner" layout="fill" width={100} objectFit="cover"/>
        </figure>
    </div>
  )
}

export default Banners