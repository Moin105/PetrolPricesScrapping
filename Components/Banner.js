import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import banner from '../public/banner.png'
import b1 from '../public/b1.png'
import b2 from '../public/b2.png'
import b3 from '../public/b3.png'
function Banner() {
  return (
    <>
    <div className={styles.banner}>
       <figure className={styles.figure}>
        <Image  src={banner} alt="banner" layout="fill"  objectFit="cover" quality={100}/>
       </figure>
       <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h1 className={styles.h1}>
                        Find the best petrol prices 
                        from all the leading petrol 
                        pumps in Singapore!
                    </h1>
                    <button className={styles.button}>Explore now</button>
                </div>
                <div className={styles.right}>
                     <div className={styles.b1}>
                        <div className={styles.box}>
                        <figure className={styles.box1}>
                           <Image priority src={b1} alt="banner" layout="fill"  objectFit="contain"/>
                        </figure>
                        </div>
                        <p className={styles.p}>Compare petrol prices<br></br> in Malaysia.</p>
                     </div>
                     <div className={styles.b2}>
                        <div className={styles.box}>
                        <figure className={styles.box1}>
                           <Image priority src={b2} alt="banner" layout="fill"  objectFit="contain"/>
                        </figure>
                        </div>
                        <p className={styles.p}>Get COE Prices<br></br> comparison.</p>
                     </div>
                     <div className={styles.b1}>
                        <div className={styles.box}>
                        <figure className={styles.box1}>
                           <Image priority src={b1} alt="banner" layout="fill"  objectFit="contain"/>
                        </figure>
                        </div>
                        <p className={styles.p}>Get latest traffic & parking<br></br> Update.</p>
                     </div>
                </div>
            </div>
       </div>
    </div>
    </>
  )
}

export default Banner