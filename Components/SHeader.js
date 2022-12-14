import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/blogo.png'
import Link from 'next/link'
function SHeader() {
  return (
    <>
    <header className={styles.header}>
        <div className={styles.wrap}>
            <figure className={styles.blogo}>
                <Image priority src={logo} alt="logo" layout="fill" objectFit="contain"/>
            </figure>
            <ul className={styles.ul}>
                <Link href="/"><li className={styles.li}><p className={styles.hp}>Petrol prices SG</p>      </li></Link>
                <Link href="/PetrolPricesMalaysia"><li className={styles.li}><p className={styles.hp}>Petrol prices Malaysia</p></li></Link>
                <Link href="/TrafficUpdate"><li className={styles.li}><p className={styles.hp}>Traffic Update</p>        </li></Link>
                <Link href="/COEPrices"><li className={styles.li}><p className={styles.hp}>COE Prices</p>            </li></Link>
                <Link href="/CarParkingSG"><li className={styles.li}><p className={styles.hp}>Car Parking SG</p>        </li></Link>
            </ul>
        </div>
    </header>
    </>
  )
}


export default SHeader