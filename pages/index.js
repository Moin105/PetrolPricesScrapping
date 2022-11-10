import Head from 'next/head'
import Image from 'next/image'
import Banner from '../Components/Banner'
import C2 from '../Components/C2'
import ChangeP from '../Components/Changep'
import Cprices from '../Components/Cprices'
import Footer from '../Components/Footer'
import Footie from '../Components/Footie'

import Headers from '../Components/Headers'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  <>
  <div>
  <Headers/>
  <Banner/>
  </div>
  <ChangeP/>  
  <C2/>
  <Cprices/>

  <Footer/>
  <Footie/>
  </>
  )
}
