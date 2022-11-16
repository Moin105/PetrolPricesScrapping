import Head from 'next/head'
import Image from 'next/image'
import SBanner from '../Components/SBanner'
import Footer from '../Components/Footer'
import Footie from '../Components/Footie'
import ban2 from '../public/ban2.png'
import Header from '../Components/Header'

import styles from '../styles/Home.module.css'
import ChangePetrol from '../Components/PPM/ChangePetrol'
import Graph from '../Components/PPM/Graph'
const base ='https://admin.extramiless.com/'

export default function PetrolPricesMalaysia() {
  return (
  <>
  <div>
  <Header/>
  <SBanner img={ban2} text="Compare petrol prices from all the leading petrol pumps in Malaysia. "/>
  </div>
  <ChangePetrol base={base}/>
  <Graph base={base}/>
  <Footer/>
  <Footie/>
  </>
  )
}


// export default PetrolPricesMalaysia