import Head from 'next/head'
import React,{useEffect,useState} from 'react'
import Image from 'next/image'
import Banners from '../Components/Banners'
import Footer from '../Components/Footer'
import Footie from '../Components/Footie'
import ban5 from '../public/ban5.jpg'
import Header from '../Components/Header'
import styles from '../styles/Home.module.css'
import Graph from '../Components/COE/Graph'
import Table from '../Components/COE/Table'

export default function COEPrices() {
  const [data,setData] = useState({})
  const [month ,setMonth] = useState("")
  const [year ,setYear ] = useState("")
  const [bidding,setBidding] = useState("")
  useEffect(() => {
    fetch("http://128.199.227.15/api/open_bidding_data_api").then(res =>{if(res.status == 200) return res.json()}).then(res =>{
     setData( res.data);
     console.log("das",data)
     setMonth(data[0]?.month)
     setYear(data[0]?.year)
     setBidding(data[0]?.bidding_number)
     console.log("year",month ,bidding ,year )
    })
  }, [month,year])
  
  return (
  <>
  <div>
  <Header/>
  <Banners img={ban5}/>
  </div>
  {data.length  > 0 ?<Table data={data} month={month} year={year} bidding={bidding} /> : null}
  <Graph/>
  <Footer/>
  <Footie/>
  </>
  )
}


