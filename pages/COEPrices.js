import Head from 'next/head'
import React,{useEffect} from 'react'
import Image from 'next/image'
import Banners from '../Components/Banners'
import Footer from '../Components/Footer'
import Footie from '../Components/Footie'
import ban5 from '../public/ban5.jpg'
import Header from '../Components/Header'
import styles from '../styles/Home.module.css'
import Table from '../Components/COE/Table'

export default function COEPrices() {
  useEffect(() => {
    
  }, [])
  
  return (
  <>
  <div>
  <Header/>
  <Banners img={ban5}/>
  </div>
  <Table/>
  <Footer/>
  <Footie/>
  </>
  )
}


