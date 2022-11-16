import Head from 'next/head'
import Image from 'next/image'
import SBanner from '../Components/SBanner'
import Footer from '../Components/Footer'
import Footie from '../Components/Footie'
import ban4 from '../public/ban4.png'
import Header from '../Components/Header'
import styles from '../styles/Home.module.css'
import CarParking from '../Components/CarParkingSingapore/CarParking'
const base=''
export default function CarParkingSG() {
  return (
  <>
  <div>
  <Header/>
  <SBanner img={ban4} text="Find parking prices and locations from all the major car parks in Singapore! "/>
  </div>
  <CarParking base={base}/>
  <Footer/>
  <Footie/>
  </>
  )
}
