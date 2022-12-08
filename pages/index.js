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

 const base ='https://admin.extramiless.com/'
export default function Home() {
  return (
  <>
  <div>
  <Headers/>
  <Banner/>
  </div>
  <ChangeP base={base}/>  
  <C2  base={base}/>
  <Cprices  base={base}/>

  <Footer/>
  <Footie/>
  </>
  )
}
