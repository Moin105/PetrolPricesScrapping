import Head from 'next/head'
import Image from 'next/image'
import Banners from '../Components/Banners'
import Footer from '../Components/Footer'
import Footie from '../Components/Footie'
import ban3 from '../public/ban3.png'
import Header from '../Components/Header'
import styles from '../styles/Home.module.css'
import Traffic from '../Components/TrafficUpdate/Traffic'
base='https://admin.extramiless.com/'


export default function TrafficUpdate() {
  return (
  <>
  <div>
  <Header/>
  <Banners img={ban3}/>
  </div>
  <Traffic base={base}/>
  <Footer/>
  <Footie/>
  </>
  )
}

