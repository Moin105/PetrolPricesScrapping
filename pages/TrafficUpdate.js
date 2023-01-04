import React,{useState} from 'react'
import Banners from '../Components/Banners'
import Footer from '../Components/Footer'
import Footie from '../Components/Footie'
import ban3 from '../public/ban3.png'
import baner3 from '../public/back4.jpg'

import Header from '../Components/Header'
import styles from '../styles/Home.module.css'
import Traffic from '../Components/TrafficUpdate/Traffic'



export default function TrafficUpdate() {
  const [show , setShow] = useState(true)

  const base = `https://admin.extramiless.com/`
  return (
  <>
  <Header  setShow={setShow}/>
  
  {show && <>
  <Banners img={ban3} img2={baner3}/>
  <Traffic base={base}/>
  <Footer/>
  <Footie/></>}
  </>
  )
}

