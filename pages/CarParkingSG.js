import React,{useState} from 'react'

import Head from 'next/head'
import Image from 'next/image'

import SBanner from '../Components/SBanner'
import Footer from '../Components/Footer'
import Footie from '../Components/Footie'
import ban4 from '../public/ban4.png'
import Header from '../Components/Header'
import styles from '../styles/Home.module.css'
import CarParking from '../Components/CarParkingSingapore/CarParking'
const base='https://admin.extramiless.com/'
export default function CarParkingSG() {
  const [show , setShow] = useState(true)

  return (
  <>

  <Header setShow={setShow}/>
  {show && <>
  <SBanner img={ban4} text="Find parking prices and locations from all the major car parks in Singapore! "/>
  <CarParking base={base}/>
  <Footer/>
  <Footie/></>}
  </>
  )
}
