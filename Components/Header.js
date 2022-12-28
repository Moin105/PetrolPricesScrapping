import React,{useState} from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/logo.png'
import Link from 'next/link'
import {GiHamburgerMenu} from 'react-icons/gi'
import Nav from './Nav'
function Header(props) {
    const router = useRouter();
  const { pathname } = router;
  const [show ,setShow] = useState(true)
  const navHandle = () => {
    console.log("$$$$$", locale);
    setNav(!nav);
  };
  const dataHandle = () => {
    setShow(!show)
    props.setShow(!show);
  };
  console.log("helos",pathname)
  const [nav, setNav] = useState(false);
  return (
    <>
    <header className={styles.header}>
        <div className={styles.wrap}>
        <Link href="/"><figure className={styles.logo}>
                <Image priority src={logo} alt="logo" layout="fill" objectFit="contain"/>
            </figure></Link>
            <ul className={styles.ul}>
                {pathname == "/" ? <Link href="/"><li className={styles.lis}><p className={styles.hp}>Petrol prices SG</p></li></Link>:<Link href="/"><li className={styles.li}><p className={styles.hp}>Petrol prices SG</p></li></Link>}
                {pathname.includes("PetrolPricesMalaysia") ? <Link href="/PetrolPricesMalaysia"><li className={styles.lis}><p className={styles.hp}>Petrol prices Malaysia</p></li></Link>:<Link href="/PetrolPricesMalaysia"><li className={styles.li}><p className={styles.hp}>Petrol prices Malaysia</p></li></Link>}
                {pathname.includes("TrafficUpdate") ? <Link href="/TrafficUpdate"><li className={styles.lis}><p className={styles.hp}>Traffic Update</p></li></Link>:<Link href="/TrafficUpdate"><li className={styles.li}><p className={styles.hp}>Traffic Update</p></li></Link>}
                {pathname.includes("COEPrices") ? <Link href="/COEPrices"><li className={styles.lis}><p className={styles.hp}>COE Prices</p></li></Link>:<Link href="/COEPrices"><li className={styles.li}><p className={styles.hp}>COE Prices</p></li></Link>}
                {pathname.includes("CarParkingSG") ? <Link href="/CarParkingSG"><li className={styles.lis}><p className={styles.hp}>Car Parking SG</p>        </li></Link>:<Link href="/CarParkingSG"><li className={styles.li}><p className={styles.hp}>Car Parking SG</p>        </li></Link>}
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

export default Header