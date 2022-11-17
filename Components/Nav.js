import React,{useState} from "react";
import styles from '../styles/Home.module.css'
import logo from '../public/hlogo.png'
import {MdArrowForwardIos} from 'react-icons/md'
// import styles from '../styles/Home.module.css'
// import logo from "../public/logo.png";
import Image from "next/image";
// import toggle from "../public/dropdown.png";
import Link from "next/link";
function Nav(props) {
  const navHandle = () => {
    console.log(props)
    props.setNav(false);
  };
  const dataHandle = () => {
    props.setShows(true);
  };
  return (
    <div className={styles.mobilenav}>
      {" "}
      <div className={styles.mobileback}>
        <div onClick={()=>{
            navHandle();
            dataHandle();
          }}  className={styles.arrow}>
          {" "}<MdArrowForwardIos/>
          {/* <figure>
            <Image
              src={logo}
              alt="OBS TECHNOLOGIA"
              layout="fill"
              objectFit="contain"
            />
          </figure> */}
        </div>
      </div>
      <div className={styles.mobilebar}>
        <figure className={styles.logo}>
          <Image
            src={logo}
            alt="OBS TECHNOLOGIA"
            layout="fill"
            objectFit="contain"
          />
        </figure>
        <ul className={styles.uppernav}>
          <li onClick={()=>{
            navHandle();
            dataHandle();

          }}>
            <Link href="/">Petrol prices SG</Link>
          </li>
          <li onClick={()=>{
            navHandle();
            dataHandle();

          }}>
            <Link href="/PetrolPricesMalaysia">Petrol prices Malaysia</Link>
          </li>
          <li  onClick={()=>{
            navHandle();
            dataHandle();

          }}>
            <Link href="/TrafficUpdate">Traffic Update</Link>
          </li>
          <li  onClick={()=>{
            navHandle();
            dataHandle();

          }}>
            <Link href="/COEPrices">COE Prices</Link>
          </li>
          <li  onClick={()=>{
            navHandle();
            dataHandle();

          }}>
            <Link href="/CarParkingSG">Car Parking SG</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;