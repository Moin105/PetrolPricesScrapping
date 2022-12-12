import React,{useState} from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/logo.png'
import Link from 'next/link'
import Nav from './Nav'
import {GiHamburgerMenu} from 'react-icons/gi'
function Headers(props) {

  const [show ,setShow] = useState(true)
  const navHandle = () => {
    console.log("$$$$$", nav);
    setNav(!nav);
  };
  const dataHandle = () => {
    setShow(!show)
    props.setShow(!show);
  };
  const [nav, setNav] = useState(false);
  return (
    <>
    <header className={styles.headers}>
        <div className={styles.wrap}>
        <Link href="/"><figure className={styles.logo}>
                <Image priority src={logo} alt="logo" layout="fill" objectFit="contain"/>
            </figure></Link>
            <ul className={styles.ul}>
                <Link href="/"><li className={styles.li}><p className={styles.hp}>Petrol prices SG</p>      </li></Link>
                <Link href="/PetrolPricesMalaysia"><li className={styles.li}><p className={styles.hp}>Petrol prices Malaysia</p></li></Link>
                <Link href="/TrafficUpdate"><li className={styles.li}><p className={styles.hp}>Traffic Update</p>        </li></Link>
                <Link href="/COEPrices"><li className={styles.li}><p className={styles.hp}>COE Prices</p>            </li></Link>
                <Link href="/CarParkingSG"><li className={styles.li}><p className={styles.hp}>Car Parking SG</p>        </li></Link>
            </ul>
            <div className={styles.ham}  onClick={()=>{
        navHandle()
        dataHandle();
      }}>
                  <GiHamburgerMenu/>
                  {nav && <Nav setNav={setNav} setShows={props.setShow} />}
            </div>
        </div>
    </header>
    </>
  )
}

export default Headers