import React from 'react'
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import flogo from '../public/flogo.png';
import arrow from '../public/arrow.png';
import Link from 'next/link'


function Footer() {
  return (
    <>
       <div className={styles.footer}>
        <div className={styles.wrapper}>
            <div className={styles.foot1}>
                <figure className={styles.figure}>
                <Image src={flogo} alt="banner" layout="fill" width={100} objectFit="contain"/>
                </figure>
                <div className={styles.inputbox}>
                      <input placeholder='Your Email' className={styles.input}/>
                   <figure className={styles.arrow}>
                   <Image src={arrow} alt="banner" layout="fill" width={100} objectFit="contain"/>
                   </figure>
                </div>
              
                <p className={styles.p}>
                    Signup to be the first one to know 
                    about any change in petrol prices 
                    and more.
                </p>
            </div>

            <div className={styles.foote}>
                <div className={styles.foot2}>
                    <ul className={styles.ul}>
                        <li className={styles.li}><h3 className={styles.h3}>Company</h3>            </li>
                 <Link href="/"><li className={styles.li}><p className={styles.p}>Petrol prices SG</p>      </li></Link>
                 <Link href="/"><li className={styles.li}><p className={styles.p}>Petrol prices Malaysia</p></li></Link>
                 <Link href="/"><li className={styles.li}><p className={styles.p}>Traffic Update</p>        </li></Link>
                 <Link href="/"><li className={styles.li}><p className={styles.p}>COE Prices</p>            </li></Link>
                 <Link href="/"><li className={styles.li}><p className={styles.p}>Car Parking SG</p>        </li></Link>
                    </ul>
                </div>
                <div className={styles.foot2}>
                <ul className={styles.ul}>
                    <li className={styles.li}><h3 className={styles.h3}>Support</h3></li>
                    <li className={styles.li}><p className={styles.p}>Help & FAQ's</p></li>
                    <li className={styles.li}><p className={styles.p}>hello@catperson.com</p></li>
                    <li className={styles.li}><p className={styles.p}>Tell: (855) 918-2287</p></li>
                    <li className={styles.li}><p className={styles.p}></p></li>
                </ul>
                </div>
            </div>
        </div>
       </div>
    </>
  )
}

export default Footer